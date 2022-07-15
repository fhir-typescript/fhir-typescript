/**
 * The type of direction to use for assertion.
 *
 * The direction to use for assertions.
 */
export declare const AssertDirectionCodes: {
    /**
     * request: The assertion is evaluated on the request.
     */
    readonly Request: "request";
    /**
     * response: The assertion is evaluated on the response. This is the default value.
     */
    readonly Response: "response";
};
/**
 * The type of direction to use for assertion.
 *
 * The direction to use for assertions.
 */
export declare type AssertDirectionCodeType = typeof AssertDirectionCodes[keyof typeof AssertDirectionCodes];
//# sourceMappingURL=AssertDirectionCodes.d.ts.map