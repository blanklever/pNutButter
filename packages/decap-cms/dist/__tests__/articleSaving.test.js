import { saveArticleFromCMS } from '../articleSaving';
describe('Decap CMS Article Saving Workflow', () => {
    it('should extract and convert article to markdown', async () => {
        const url = 'https://example.com';
        let markdown = '';
        await saveArticleFromCMS(url, (md) => { markdown = md; });
        expect(markdown).toContain('Sample Title');
        expect(markdown).toContain('Sample content');
    });
});
