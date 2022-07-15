/**
 * The type of response code to use for assertion.
 */
export declare const AssertResponseCodeTypesCodes: {
    /**
     * bad: Response code is 400.
     */
    readonly Bad: "bad";
    /**
     * conflict: Response code is 409.
     */
    readonly Conflict: "conflict";
    /**
     * created: Response code is 201.
     */
    readonly Created: "created";
    /**
     * forbidden: Response code is 403.
     */
    readonly Forbidden: "forbidden";
    /**
     * gone: Response code is 410.
     */
    readonly Gone: "gone";
    /**
     * methodNotAllowed: Response code is 405.
     */
    readonly MethodNotAllowed: "methodNotAllowed";
    /**
     * noContent: Response code is 204.
     */
    readonly NoContent: "noContent";
    /**
     * notFound: Response code is 404.
     */
    readonly NotFound: "notFound";
    /**
     * notModified: Response code is 304.
     */
    readonly NotModified: "notModified";
    /**
     * okay: Response code is 200.
     */
    readonly Okay: "okay";
    /**
     * preconditionFailed: Response code is 412.
     */
    readonly PreconditionFailed: "preconditionFailed";
    /**
     * unprocessable: Response code is 422.
     */
    readonly Unprocessable: "unprocessable";
};
/**
 * The type of response code to use for assertion.
 */
export declare type AssertResponseCodeTypesCodeType = typeof AssertResponseCodeTypesCodes[keyof typeof AssertResponseCodeTypesCodes];
//# sourceMappingURL=AssertResponseCodeTypesCodes.d.ts.map