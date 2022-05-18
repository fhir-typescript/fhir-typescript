import { Coding } from '../fhir/Coding.js';
/**
 * The type of response code to use for assertion.
 */
export declare const AssertResponseCodeTypesCodings: {
    /**
     * bad: Response code is 400.
     */
    readonly Bad: Coding;
    /**
     * conflict: Response code is 409.
     */
    readonly Conflict: Coding;
    /**
     * created: Response code is 201.
     */
    readonly Created: Coding;
    /**
     * forbidden: Response code is 403.
     */
    readonly Forbidden: Coding;
    /**
     * gone: Response code is 410.
     */
    readonly Gone: Coding;
    /**
     * methodNotAllowed: Response code is 405.
     */
    readonly MethodNotAllowed: Coding;
    /**
     * noContent: Response code is 204.
     */
    readonly NoContent: Coding;
    /**
     * notFound: Response code is 404.
     */
    readonly NotFound: Coding;
    /**
     * notModified: Response code is 304.
     */
    readonly NotModified: Coding;
    /**
     * okay: Response code is 200.
     */
    readonly Okay: Coding;
    /**
     * preconditionFailed: Response code is 412.
     */
    readonly PreconditionFailed: Coding;
    /**
     * unprocessable: Response code is 422.
     */
    readonly Unprocessable: Coding;
};
/**
 * The type of response code to use for assertion.
 */
export declare type AssertResponseCodeTypesCodingType = typeof AssertResponseCodeTypesCodings;
//# sourceMappingURL=AssertResponseCodeTypesCodings.d.ts.map