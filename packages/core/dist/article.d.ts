/**
 * Article extraction and markdown generation utilities (skeleton)
 */
export interface ArticleExtracted {
    title: string;
    content: string;
    url: string;
    author?: string;
    date?: string;
    [key: string]: any;
}
/**
 * Extracts article content from a given URL (placeholder).
 * In production, this would use Readability.js or similar.
 */
export declare function extractArticleFromUrl(url: string): Promise<ArticleExtracted>;
/**
 * Generates markdown with frontmatter from extracted article.
 */
export declare function articleToMarkdown(article: ArticleExtracted): string;
