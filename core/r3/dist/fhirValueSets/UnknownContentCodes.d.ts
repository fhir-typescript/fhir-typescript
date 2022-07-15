/**
 * A code that indicates whether an application accepts unknown elements or extensions when reading resources.
 */
export declare const UnknownContentCodes: {
    /**
     * both: The application accepts unknown elements and extensions.
     */
    readonly UnknownElementsAndExtensions: "both";
    /**
     * elements: The application accepts unknown elements, but not unknown extensions.
     */
    readonly UnknownElements: "elements";
    /**
     * extensions: The application accepts unknown extensions, but not unknown elements.
     */
    readonly UnknownExtensions: "extensions";
    /**
     * no: The application does not accept either unknown elements or extensions.
     */
    readonly NeitherElementsOrExtensions: "no";
};
/**
 * A code that indicates whether an application accepts unknown elements or extensions when reading resources.
 */
export declare type UnknownContentCodeType = typeof UnknownContentCodes[keyof typeof UnknownContentCodes];
//# sourceMappingURL=UnknownContentCodes.d.ts.map