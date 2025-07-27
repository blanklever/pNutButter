/**
 * Decap CMS article saving workflow integration (skeleton)
 */
import { extractArticleFromUrl, articleToMarkdown } from '@pnutbutter/core/src/article';
export async function saveArticleFromCMS(url, onSave) {
    try {
        // Basic URL validation
        if (typeof url !== 'string' || !/^https?:\/\//.test(url)) {
            throw new Error('Invalid URL');
        }
        // Extract and convert article
        const article = await extractArticleFromUrl(url);
        if (!article)
            throw new Error('Article extraction failed');
        const md = articleToMarkdown(article);
        // Pass markdown to CMS save handler
        onSave(md);
    }
    catch (err) {
        // Propagate error to caller
        throw err;
    }
}
// Example usage in Decap CMS custom widget or workflow:
// saveArticleFromCMS('https://example.com', (md) => {
//   // Save md to CMS entry
// });
