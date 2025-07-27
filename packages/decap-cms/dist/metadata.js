/**
 * Decap CMS privacy metadata handling utilities (skeleton)
 */
export function getPrivacyFromEntry(entry) {
    // Try to read privacy field from Decap CMS entry data
    const value = entry && entry.data && entry.data.privacy;
    return value === 'private' || value === 'public' ? value : 'public';
}
export function setPrivacyForEntry(entry, privacy) {
    if (entry && entry.data) {
        entry.data.privacy = privacy;
    }
    return entry;
}
