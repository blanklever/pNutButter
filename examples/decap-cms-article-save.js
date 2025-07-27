// Example: Using pNutButter Decap CMS article saving workflow
import { saveArticleFromCMS } from '@pnutbutter/decap-cms';

const url = 'https://example.com';
saveArticleFromCMS(url, (md) => {
  // Simulate saving markdown to a Decap CMS entry
  console.log('Markdown for CMS entry:', md);
});
