/**
 * @packageDocumentation
 * 11ty plugin for pNutButter privacy layer
 */
type EleventyConfig = any; // Shim for EleventyConfig type
import { getContentPrivacy, getOutputPath } from './privacy';

export default function pNutButterPlugin(eleventyConfig: EleventyConfig, options = {}) {
  eleventyConfig.addTransform('pnutbutter-privacy', function(this: any, content: string, outputPath: string) {
    // Only process markdown/html files
    if (!outputPath || (!outputPath.endsWith('.md') && !outputPath.endsWith('.html'))) return content;
    // Real 11ty: meta is available as this.page or this.inputPathMeta
    const meta = this.page || this.inputPathMeta || {};
    const privacy = getContentPrivacy(meta);
    const newPath = getOutputPath(meta, outputPath);
    if (outputPath !== newPath) {
      // Move file to new path (Node.js fs operation)
      const fs = require('fs');
      const path = require('path');
      const outDir = path.dirname(newPath);
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(newPath, content);
      fs.unlinkSync(outputPath);
      console.log(`[pNutButter] Moved ${outputPath} -> ${newPath} [${privacy}]`);
      return null; // Prevent double writing
    }
    return content;
  });
  console.log('pNutButter 11ty plugin loaded', options);
}
