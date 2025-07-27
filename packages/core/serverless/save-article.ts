/**
 * Netlify/Serverless function for saving articles from a URL (skeleton)
 */
import { extractArticleFromUrl, articleToMarkdown } from '../src/article';

export async function handler(event: any) {
  const { url } = JSON.parse(event.body || '{}');
  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing url' })
    };
  }
  const article = await extractArticleFromUrl(url);
  const markdown = articleToMarkdown(article);
  // In production, save markdown to storage (e.g., Git, S3, CMS)
  return {
    statusCode: 200,
    body: JSON.stringify({ markdown })
  };
}
