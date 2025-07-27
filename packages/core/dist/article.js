/**
 * Article extraction and markdown generation utilities (skeleton)
 */
/**
 * Extracts article content from a given URL (placeholder).
 * In production, this would use Readability.js or similar.
 */
export async function extractArticleFromUrl(url) {
    // TODO: Implement with Readability.js or serverless function
    return {
        title: 'Sample Title',
        content: 'Sample content...',
        url
    };
}
/**
 * Generates markdown with frontmatter from extracted article.
 */
export function articleToMarkdown(article) {
    const frontmatter = [
        '---',
        `title: "${article.title.replace(/"/g, '\"')}"`,
        `url: "${article.url}"`,
        article.author ? `author: "${article.author}"` : '',
        article.date ? `date: "${article.date}"` : '',
        '---'
    ].filter(Boolean).join('\n');
    return `${frontmatter}\n\n${article.content}`;
}
