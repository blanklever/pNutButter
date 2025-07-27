/**
 * 11ty content privacy separation utilities (skeleton)
 */
import { PrivacySetting, ContentMeta } from '@pnutbutter/core/src/index';
export declare function getContentPrivacy(meta: ContentMeta): PrivacySetting;
export declare function getOutputPath(meta: ContentMeta, inputPath: string): string;
