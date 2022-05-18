import { Coding } from '../fhir/Coding.js';
/**
 * HTTP verbs (in the HTTP command line). See [HTTP rfc](https://tools.ietf.org/html/rfc7231) for details.
 */
export declare const HttpVerbCodings: {
    /**
     * DELETE: HTTP DELETE Command.
     */
    readonly DELETE: Coding;
    /**
     * GET: HTTP GET Command.
     */
    readonly GET: Coding;
    /**
     * HEAD: HTTP HEAD Command.
     */
    readonly HEAD: Coding;
    /**
     * PATCH: HTTP PATCH Command.
     */
    readonly PATCH: Coding;
    /**
     * POST: HTTP POST Command.
     */
    readonly POST: Coding;
    /**
     * PUT: HTTP PUT Command.
     */
    readonly PUT: Coding;
};
/**
 * HTTP verbs (in the HTTP command line). See [HTTP rfc](https://tools.ietf.org/html/rfc7231) for details.
 */
export declare type HttpVerbCodingType = typeof HttpVerbCodings;
//# sourceMappingURL=HttpVerbCodings.d.ts.map