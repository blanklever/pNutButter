A privacy layer plugin for Eleventy (11ty) static sites. Easily separate public and private content, with support for password-protected private output and seamless integration with the pNutButter ecosystem.

## Features
- Classify content as `public` or `private` using frontmatter
- Outputs public content to `/posts/` and private content to `/private/`
- Works with Netlify password protection
- Simple integration with any 11ty project
- Part of the pNutButter privacy monorepo (see [docs](https://github.com/blanklever/pNutButter/blob/master/docs/usage.md))

## Installation

```sh
npm i @blanklever/pnutbutter-eleventy
```

## Usage

Edit your `.eleventy.js`:

```js
const pNutButter = require('@blanklever/pnutbutter-eleventy');
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pNutButter);
  // ...existing config...
};
```

Add `privacy: 'private'` to the frontmatter of any markdown file you want to protect:

```markdown
---
title: My Secret Post
privacy: 'private'
---
This is private content.
```

## Output
- Public content → `/posts/`
- Private content → `/private/` (password protected with Netlify)

## More
- [Quickstart Guide](https://github.com/blanklever/pNutButter/blob/master/docs/eleventy_quickstart.md)
- [Usage Guide](https://github.com/blanklever/pNutButter/blob/master/docs/usage.md)
- [Netlify Setup](https://github.com/blanklever/pNutButter/blob/master/netlify.toml)

---

For questions or feedback, see the User Feedback section in the main docs.
