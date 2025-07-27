/**
 * Decap CMS integration for pNutButter privacy layer (skeleton)
 */
// This file will provide field config, privacy metadata, and article saving workflow for Decap CMS
export function privacyFieldConfig() {
    return {
        label: 'Privacy',
        name: 'privacy',
        widget: 'select',
        options: [
            { label: 'Public', value: 'public' },
            { label: 'Private', value: 'private' }
        ],
        default: 'public',
        required: false
    };
}
export function withPrivacyFields(collection) {
    // Add privacy field to a Decap CMS collection config, but avoid duplicates
    const fields = collection.fields || [];
    const hasPrivacy = fields.some((f) => f.name === 'privacy');
    return {
        ...collection,
        fields: hasPrivacy ? fields : [...fields, privacyFieldConfig()]
    };
}
// TODO: Add hooks for article saving workflow
