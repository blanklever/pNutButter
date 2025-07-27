/**
 * CLI commands for pNutButter (skeleton)
 */
import { extractArticleFromUrl, articleToMarkdown } from '@pnutbutter/core/src/article';
import { writeFileSync } from 'fs';

export async function saveArticleCommand(url: string, outDir = 'articles') {
  const article = await extractArticleFromUrl(url);
  const md = articleToMarkdown(article);
  const safeTitle = article.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
  const filePath = `${outDir}/${safeTitle || 'article'}.md`;
  writeFileSync(filePath, md);
  console.log(`Article saved to ${filePath}`);
}
