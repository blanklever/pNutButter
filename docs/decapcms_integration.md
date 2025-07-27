
# Decap CMS Integration Guide (pNutButter)

## Features
- Privacy field for public/private content
- Article saving workflow
- Privacy metadata handling

## Setup
1. Install `@pnutbutter/decap-cms` in your project.
2. Add the privacy field to your Decap CMS collection config:
   ```js
   import { withPrivacyFields } from '@pnutbutter/decap-cms';
   const posts = withPrivacyFields({
     name: 'posts',
     label: 'Posts',
     folder: 'content/posts',
     fields: [
       { label: 'Title', name: 'title', widget: 'string' },
       // ...other fields...
     ]
   });
   // Add 'posts' to your CMS collections array
   // Note: withPrivacyFields will not add duplicate privacy fields if already present.
   ```
3. Use the privacy field in the CMS UI to set content as public or private.

## Article Saving
- Use the provided workflow to extract and save articles from URLs directly into Decap CMS entries.
- Example:
   ```js
   import { saveArticleFromCMS } from '@pnutbutter/decap-cms';
   saveArticleFromCMS('https://example.com', (md) => {
     // Save md to a new CMS entry
   });
   ```
- Error handling: If the URL is invalid or extraction fails, `saveArticleFromCMS` will throw an error. Wrap in try/catch or use `.catch()` for robust workflows.

## Privacy Metadata
- Use `getPrivacyFromEntry(entry)` and `setPrivacyForEntry(entry, privacy)` to manage privacy status in code.
- Only 'public' and 'private' string values are accepted; all other/malformed values default to 'public'.
## Error Handling & Test Coverage

- All core utilities and workflows are covered by integration and edge case tests.
- Error handling is built-in for invalid URLs, extraction failures, and malformed privacy fields.
- See the test suite in `src/__tests__` for examples and reliability guarantees.

---

---

Phase 2 (Decap CMS integration) is about 30% complete. Next: add more examples and polish workflows.
