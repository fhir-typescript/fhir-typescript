/**
 * A code that indicates how the server supports conditional read.
 */
export declare const ConditionalReadStatusCodes: {
    /**
     * full-support: Conditional reads are supported, with both If-Modified-Since and If-None-Match HTTP Headers.
     */
    readonly FullSupport: "full-support";
    /**
     * modified-since: Conditional reads are supported, but only with the If-Modified-Since HTTP Header.
     */
    readonly IfModifiedSince: "modified-since";
    /**
     * not-match: Conditional reads are supported, but only with the If-None-Match HTTP Header.
     */
    readonly IfNoneMatch: "not-match";
    /**
     * not-supported: No support for conditional deletes.
     */
    readonly NotSupported: "not-supported";
};
/**
 * A code that indicates how the server supports conditional read.
 */
export declare type ConditionalReadStatusCodeType = typeof ConditionalReadStatusCodes[keyof typeof ConditionalReadStatusCodes];
//# sourceMappingURL=ConditionalReadStatusCodes.d.ts.map