# pNutButter - Privacy Layer for JAMstack

## Project Overview

pNutButter is an open-source framework that adds private content management and article saving capabilities to any JAMstack site. It provides a "privacy layer" that works with existing static site generators and content management systems.

## Core Philosophy

- **Framework-agnostic**: Works with any JAMstack framework (11ty, Astro, Next.js, Gatsby, Nuxt, etc.)
- **CMS-agnostic**: Integrates with any headless CMS (Decap CMS, Forestry, Sanity, etc.)
- **Hosting-agnostic**: Supports all major JAMstack hosting providers (Netlify, Vercel, Cloudflare, etc.)
- **Plug-and-play**: Minimal configuration required, maximum flexibility provided

## Key Features

### 1. Content Privacy Management
- **Public/Private content separation** at build time
- **Folder-based organization** (`/public/`, `/private/` routes)
- **Password protection** via hosting provider configurations
- **Flexible privacy controls** through frontmatter or CMS fields

### 2. Article Saving System
- **URL-based article extraction** using web scraping
- **Clean content extraction** with Readability.js or similar
- **Automatic markdown generation** with proper frontmatter
- **Bookmarklet/browser extension** support for easy saving
- **Serverless function** for article processing

### 3. Build-time Integration
- **Build hooks** that process content during site generation
- **Content classification** based on privacy settings
- **Route generation** for private content areas
- **Hosting configuration** auto-generation

## Architecture

### Monorepo Structure
```
pNutButter/
├── packages/
│   ├── core/              # Framework-agnostic core logic
│   ├── cli/               # Command line interface
│   ├── eleventy/          # 11ty plugin
│   ├── astro/             # Astro integration
│   ├── nextjs/            # Next.js middleware
│   ├── gatsby/            # Gatsby plugin
│   ├── nuxt/              # Nuxt module
│   ├── decap-cms/         # Decap CMS integration
│   ├── forestry/          # Forestry integration
│   └── sanity/            # Sanity integration
├── examples/              # Demo implementations
├── docs/                  # Documentation site
└── tools/                 # Development tools
```

### Core Package (`@pNutButter/core`)
- Content classification utilities
- Article extraction and processing
- Configuration management
- Hosting provider integrations
- Serverless function templates

### Framework Plugins
Each framework plugin should:
- Hook into the framework's build process
- Process content privacy settings
- Generate appropriate routes and redirects
- Configure hosting-specific privacy rules

### CMS Integrations
Each CMS integration should:
- Provide appropriate field configurations
- Handle privacy metadata
- Support article saving workflows

## Configuration System

### Main Configuration (`privacy.config.js`)
```javascript
export default {
  privacy: {
    privateFolder: '/private',
    publicFolder: '/posts',
    passwordProtection: 'netlify', // 'vercel', 'cloudflare'
    defaultPrivacy: 'public'
  },
  articleSaving: {
    enabled: true,
    endpoint: '/api/save-article',
    defaultPrivacy: 'private',
    extractionMethod: 'readability'
  },
  hosting: {
    provider: 'netlify',
    customRules: []
  }
}
```

### Framework-Specific Config
Each framework plugin should extend the base configuration with framework-specific options.

## Development Guidelines

### Code Style
- **TypeScript** for all packages with strict type checking
- **ESM modules** for modern JavaScript compatibility
- **Consistent naming** following framework conventions
- **Comprehensive JSDoc** comments for all public APIs

### Testing Strategy
- **Unit tests** for core utilities
- **Integration tests** for framework plugins
- **E2E tests** for complete workflows
- **Example projects** as living documentation

### API Design Principles
- **Minimal configuration** with sensible defaults
- **Progressive enhancement** - basic features work out of the box
- **Extensible architecture** for custom implementations
- **Clear error messages** with helpful debugging information

## Key Use Cases

### Personal Knowledge Management
- Private note-taking with public blog capability
- Article bookmarking and organization
- Research collection with privacy controls

### Content Publishing
- Draft/published workflow for content creators
- Member-only content areas
- Mixed public/private documentation sites

### Development Workflows
- Internal documentation with public APIs
- Staging content with production publishing
- Multi-environment content management

## Technical Requirements

### Dependencies
- **Node.js 18+** for modern JavaScript features
- **Framework-specific dependencies** as peer dependencies
- **Minimal core dependencies** to reduce bundle size

### Browser Support
- **Modern browsers** (ES2020+)
- **Progressive enhancement** for older browsers
- **No client-side JavaScript required** for basic functionality

### Performance Goals
- **Zero build-time overhead** for public content
- **Minimal runtime impact** for privacy features
- **Efficient article extraction** with proper rate limiting

## Implementation Priority

### Phase 1: Core + 11ty
1. Core package with basic privacy classification
2. 11ty plugin with content separation
3. Basic article saving functionality
4. Netlify hosting integration

### Phase 2: CMS Integration
1. Decap CMS integration and field configurations
2. Article saving through CMS interface
3. Improved content management workflows

### Phase 3: Multi-Framework
1. Astro integration
2. Next.js middleware
3. Additional hosting providers (Vercel, Cloudflare)

### Phase 4: Advanced Features
1. Browser extension for article saving
2. Advanced privacy controls (user-based, time-based)
3. Content synchronization and backup features

## Success Metrics

- **Developer Experience**: Simple installation and configuration
- **Performance Impact**: Minimal build time increase
- **Flexibility**: Works with majority of JAMstack setups
- **Community Adoption**: Active contributors and plugin ecosystem