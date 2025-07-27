/**
 * 11ty content privacy separation utilities (skeleton)
 */
import { classifyPrivacy, PrivacySetting, ContentMeta } from '@pnutbutter/core/src/index';
import { loadPrivacyConfig } from '@pnutbutter/core/src/config';
import path from 'path';

export function getContentPrivacy(meta: ContentMeta): PrivacySetting {
  const config = loadPrivacyConfig();
  return classifyPrivacy(meta, config.privacy.defaultPrivacy);
}

export function getOutputPath(meta: ContentMeta, inputPath: string): string {
  const config = loadPrivacyConfig();
  const privacy = getContentPrivacy(meta);
  const folder = privacy === 'private' ? config.privacy.privateFolder : config.privacy.publicFolder;
  return path.join(folder, path.basename(inputPath));
}
