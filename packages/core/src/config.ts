/**
 * Loads and validates the pNutButter configuration.
 */
import { readFileSync } from 'fs';
import path from 'path';

export interface PrivacyConfig {
  privacy: {
    privateFolder: string;
    publicFolder: string;
    passwordProtection: 'netlify' | 'vercel' | 'cloudflare';
    defaultPrivacy: 'public' | 'private';
  };
  articleSaving: {
    enabled: boolean;
    endpoint: string;
    defaultPrivacy: 'public' | 'private';
    extractionMethod: string;
  };
  hosting: {
    provider: 'netlify' | 'vercel' | 'cloudflare';
    customRules: any[];
  };
}

export function loadPrivacyConfig(configPath = path.resolve(process.cwd(), 'privacy.config.js')): PrivacyConfig {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const config = require(configPath);
  return config.default || config;
}
