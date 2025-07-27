
# pNutButter Usage Guide


## Monorepo Structure

- `packages/core` — Core privacy utilities and config loader
- `packages/cli` — CLI for saving articles
- `packages/eleventy` — 11ty plugin for privacy separation
- `packages/decap-cms` — Decap CMS integration (privacy fields, article saving)
- `examples/` — Usage examples for CLI, 11ty, and Decap CMS
- `docs/` — Documentation and guides

## Quick Start

1. Clone the repo and install dependencies:
   ```sh
   git clone <repo-url>
   cd pnutbutter
   npm install
   ```
2. Configure privacy in `privacy.config.js` (see example in `examples/`).
3. Use the CLI to save articles:
   ```sh
   npx pnutbutter save-article <url>
   ```
4. Integrate the 11ty plugin in your `.eleventy.js`:
   ```js
   const pNutButter = require('@pnutbutter/eleventy');
   module.exports = function(eleventyConfig) {
     eleventyConfig.addPlugin(pNutButter);
   };
   ```
5. [Optional] Integrate with Decap CMS:
   - See `docs/decapcms_integration.md` for full guide.
   - Add privacy fields to your collection config:
     ```js
     import { withPrivacyFields } from '@pnutbutter/decap-cms';
     const posts = withPrivacyFields({
       name: 'posts',
       fields: [/* ... */]
     });
     ```
   - Use `saveArticleFromCMS` to extract and save articles from URLs.
   - Privacy field is deduplicated automatically.
6. Deploy to Netlify for password-protected private content (see `netlify.toml`).

## Output Structure
- `/posts/` — Public content
- `/private/` — Private content (password protected)

## Article Saving
- Use the CLI, Decap CMS workflow, or serverless endpoint to save web articles as markdown.

## Privacy Controls
- Set `privacy: 'private'` in frontmatter or CMS fields to classify content.
- Only 'public' and 'private' are valid; all other values default to 'public'.
## Error Handling
- All workflows include error handling for invalid URLs, extraction failures, and malformed privacy fields.
- See test suites in each package for reliability guarantees.

- [Decap CMS Integration Guide](https://github.com/blanklever/pNutButter/blob/master/docs/decapcms_integration.md)
- [Examples](https://github.com/blanklever/pNutButter/tree/master/examples)

## Deployment

- Deploy to [Netlify](https://www.netlify.com/) for static hosting and password-protected private content.
- Use the provided `netlify.toml` for recommended settings.
- Set environment variables as needed for your workflow (e.g., CMS tokens, custom privacy config).
- After deployment, test both public and private content access.

## User Feedback & Support

- To provide feedback, request features, or report bugs, please open an issue in the repository.
- For questions or help, see the documentation or open a discussion thread.
- Community contributions and suggestions are welcome!


---

## Future Work

- Additional CMS integrations (planned):
  - Contentful
  - Sanity
  - Ghost
  - Others as requested by the community

If you would like to contribute or request a specific CMS integration, please open an issue or pull request.
