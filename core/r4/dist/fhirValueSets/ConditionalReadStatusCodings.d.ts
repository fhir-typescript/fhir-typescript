import { Coding } from '../fhir/Coding.js';
/**
 * A code that indicates how the server supports conditional read.
 */
export declare const ConditionalReadStatusCodings: {
    /**
     * full-support: Conditional reads are supported, with both If-Modified-Since and If-None-Match HTTP Headers.
     */
    readonly FullSupport: Coding;
    /**
     * modified-since: Conditional reads are supported, but only with the If-Modified-Since HTTP Header.
     */
    readonly IfModifiedSince: Coding;
    /**
     * not-match: Conditional reads are supported, but only with the If-None-Match HTTP Header.
     */
    readonly IfNoneMatch: Coding;
    /**
     * not-supported: No support for conditional reads.
     */
    readonly NotSupported: Coding;
};
/**
 * A code that indicates how the server supports conditional read.
 */
export declare type ConditionalReadStatusCodingType = typeof ConditionalReadStatusCodings;
//# sourceMappingURL=ConditionalReadStatusCodings.d.ts.map