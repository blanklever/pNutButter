/**
 * @packageDocumentation
 * Core privacy and article utilities for pNutButter.
 */
/**
 * Classifies content as public or private based on metadata and config.
 * @param meta Content metadata (frontmatter or CMS fields)
 * @param defaultPrivacy Default privacy setting
 */
export function classifyPrivacy(meta, defaultPrivacy = 'public') {
    return meta.privacy === 'private' ? 'private' : defaultPrivacy;
}
