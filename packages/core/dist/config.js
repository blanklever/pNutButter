import path from 'path';
export function loadPrivacyConfig(configPath = path.resolve(process.cwd(), 'privacy.config.js')) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const config = require(configPath);
    return config.default || config;
}
