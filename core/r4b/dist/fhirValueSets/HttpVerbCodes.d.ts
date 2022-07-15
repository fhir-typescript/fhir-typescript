/**
 * HTTP verbs (in the HTTP command line). See [HTTP rfc](https://tools.ietf.org/html/rfc7231) for details.
 */
export declare const HttpVerbCodes: {
    /**
     * DELETE: HTTP DELETE Command.
     */
    readonly DELETE: "DELETE";
    /**
     * GET: HTTP GET Command.
     */
    readonly GET: "GET";
    /**
     * HEAD: HTTP HEAD Command.
     */
    readonly HEAD: "HEAD";
    /**
     * PATCH: HTTP PATCH Command.
     */
    readonly PATCH: "PATCH";
    /**
     * POST: HTTP POST Command.
     */
    readonly POST: "POST";
    /**
     * PUT: HTTP PUT Command.
     */
    readonly PUT: "PUT";
};
/**
 * HTTP verbs (in the HTTP command line). See [HTTP rfc](https://tools.ietf.org/html/rfc7231) for details.
 */
export declare type HttpVerbCodeType = typeof HttpVerbCodes[keyof typeof HttpVerbCodes];
//# sourceMappingURL=HttpVerbCodes.d.ts.map