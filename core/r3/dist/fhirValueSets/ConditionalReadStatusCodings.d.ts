import { CodingArgs } from '../fhir/Coding.js';
/**
 * A code that indicates how the server supports conditional read.
 */
export declare type ConditionalReadStatusCodingType = {
    /**
     * full-support: Conditional reads are supported, with both If-Modified-Since and If-None-Match HTTP Headers.
     */
    FullSupport: CodingArgs;
    /**
     * modified-since: Conditional reads are supported, but only with the If-Modified-Since HTTP Header.
     */
    IfModifiedSince: CodingArgs;
    /**
     * not-match: Conditional reads are supported, but only with the If-None-Match HTTP Header.
     */
    IfNoneMatch: CodingArgs;
    /**
     * not-supported: No support for conditional deletes.
     */
    NotSupported: CodingArgs;
};
/**
 * A code that indicates how the server supports conditional read.
 */
export declare const ConditionalReadStatusCodings: ConditionalReadStatusCodingType;
//# sourceMappingURL=ConditionalReadStatusCodings.d.ts.map