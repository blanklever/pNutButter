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
export declare function loadPrivacyConfig(configPath?: string): PrivacyConfig;
