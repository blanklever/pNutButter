/**
 * @packageDocumentation
 * Core privacy and article utilities for pNutButter.
 */

export type PrivacySetting = 'public' | 'private';

export interface ContentMeta {
  title: string;
  privacy?: PrivacySetting;
  [key: string]: any;
}

/**
 * Classifies content as public or private based on metadata and config.
 * @param meta Content metadata (frontmatter or CMS fields)
 * @param defaultPrivacy Default privacy setting
 */
export function classifyPrivacy(meta: ContentMeta, defaultPrivacy: PrivacySetting = 'public'): PrivacySetting {
  return meta.privacy === 'private' ? 'private' : defaultPrivacy;
}
