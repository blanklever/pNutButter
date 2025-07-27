# Quickstart: Integrating pNutButter with an 11ty Website

This guide walks you through adding pNutButter privacy to an existing 11ty (Eleventy) static site, using a real-world starter template.

---

## 1. Clone an 11ty Starter Site
Pick a template from [11ty Starter Projects](https://www.11ty.dev/docs/starter/), or use the base blog:

```sh
npx degit 11ty/eleventy-base-blog my-11ty-site
cd my-11ty-site
```

## 2. Add pNutButter to Your Project
Clone or add pNutButter as a dependency. For local development:

```sh
git clone <your-pnutbutter-repo-url> ../pnutbutter
# Link the 11ty plugin package (from pNutButter monorepo) into your 11ty site
cd my-11ty-site
npm install ../pnutbutter/packages/eleventy
```

Or, NPM:
```sh
npm install @pnutbutter/eleventy
```

## 3. Integrate the pNutButter 11ty Plugin
Edit your `.eleventy.js` (or `.eleventy.cjs`):

```js
const pNutButter = require('@pnutbutter/eleventy');
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pNutButter);
  // ...existing config...
};
```

## 4. Add Privacy Metadata to Content
Add `privacy: 'private'` to the frontmatter of any markdown file you want to protect:

```markdown
---
title: My Secret Post
privacy: 'private'
---
This is private content.
```

## 5. Build and Verify
Run the 11ty build:
```sh
npx @11ty/eleventy
```
- Public content will be output to `/posts/`
- Private content will be output to `/private/`

## 6. (Optional) Deploy to Netlify
- Use the provided `netlify.toml` from pNutButter for password protection.
- Deploy your site to Netlify for static hosting and private content protection.

## 7. Next Steps
- Integrate a CMS (see `docs/decapcms_integration.md`)
- Use the CLI or serverless functions for article saving
- See `docs/usage.md` for advanced usage

---

This quickstart is designed to make privacy integration with 11ty as easy as possible. For questions or feedback, see the User Feedback section in `usage.md`.
