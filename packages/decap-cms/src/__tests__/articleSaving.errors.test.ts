import { saveArticleFromCMS } from '../articleSaving';
import * as articleModule from '@pnutbutter/core/src/article';

describe('Decap CMS Article Saving Error Handling', () => {
  it('should handle invalid URL gracefully', async () => {
    let error: any = null;
    await saveArticleFromCMS('not-a-url', () => {})
      .catch((e) => { error = e; });
    expect(error).toBeTruthy();
  });

  it('should handle extraction failure', async () => {
    // Mock extractArticleFromUrl to return null for this test
    const spy = jest.spyOn(articleModule, 'extractArticleFromUrl').mockResolvedValueOnce(null as any);
    let error: any = null;
    await saveArticleFromCMS('https://fail.example.com', () => {})
      .catch((e) => { error = e; });
    expect(error).toBeTruthy();
    spy.mockRestore();
  });
});
