/**
 * Decap CMS integration for pNutButter privacy layer (skeleton)
 */
export declare function privacyFieldConfig(): {
    label: string;
    name: string;
    widget: string;
    options: {
        label: string;
        value: string;
    }[];
    default: string;
    required: boolean;
};
export declare function withPrivacyFields(collection: any): any;
