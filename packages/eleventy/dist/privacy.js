/**
 * 11ty content privacy separation utilities (skeleton)
 */
import { classifyPrivacy } from '@pnutbutter/core/src/index';
import { loadPrivacyConfig } from '@pnutbutter/core/src/config';
import path from 'path';
export function getContentPrivacy(meta) {
    const config = loadPrivacyConfig();
    return classifyPrivacy(meta, config.privacy.defaultPrivacy);
}
export function getOutputPath(meta, inputPath) {
    const config = loadPrivacyConfig();
    const privacy = getContentPrivacy(meta);
    const folder = privacy === 'private' ? config.privacy.privateFolder : config.privacy.publicFolder;
    return path.join(folder, path.basename(inputPath));
}
