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
