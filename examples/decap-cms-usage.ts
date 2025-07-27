// Example: Decap CMS integration with pNutButter privacy layer
import { withPrivacyFields, saveArticleFromCMS, getPrivacyFromEntry, setPrivacyForEntry } from '@pnutbutter/decap-cms';

// 1. Configure a Decap CMS collection with privacy fields
type Collection = { name: string; label: string; folder: string; fields: any[] };
const posts: Collection = withPrivacyFields({
  name: 'posts',
  label: 'Posts',
  folder: 'content/posts',
  fields: [
    { label: 'Title', name: 'title', widget: 'string' },
    { label: 'Body', name: 'body', widget: 'markdown' }
  ]
});
console.log('Collection config with privacy:', posts);

// 2. Save an article from a URL with error handling
async function saveExampleArticle() {
  try {
    await saveArticleFromCMS('https://example.com', (md) => {
      console.log('Extracted markdown:', md);
      // Here you would save md to a new CMS entry
    });
  } catch (err) {
    console.error('Failed to save article:', err);
  }
}
saveExampleArticle();

// 3. Read and set privacy metadata programmatically
const entry = { data: { title: 'Hello', privacy: 'private' } };
console.log('Privacy:', getPrivacyFromEntry(entry)); // 'private'
setPrivacyForEntry(entry, 'public');
console.log('Updated privacy:', getPrivacyFromEntry(entry)); // 'public'
