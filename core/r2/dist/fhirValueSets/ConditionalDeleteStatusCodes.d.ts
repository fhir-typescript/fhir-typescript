/**
 * A code that indicates how the server supports conditional delete.
 */
export declare const ConditionalDeleteStatusCodes: {
    /**
     * multiple: Conditional deletes are supported, and multiple resources can be deleted in a single interaction.
     */
    readonly MultipleDeletesSupported: "multiple";
    /**
     * not-supported: No support for conditional deletes.
     */
    readonly NotSupported: "not-supported";
    /**
     * single: Conditional deletes are supported, but only single resources at a time.
     */
    readonly SingleDeletesSupported: "single";
};
/**
 * A code that indicates how the server supports conditional delete.
 */
export declare type ConditionalDeleteStatusCodeType = typeof ConditionalDeleteStatusCodes[keyof typeof ConditionalDeleteStatusCodes];
//# sourceMappingURL=ConditionalDeleteStatusCodes.d.ts.map