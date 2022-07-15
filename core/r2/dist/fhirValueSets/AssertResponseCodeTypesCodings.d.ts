import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of response code to use for assertion.
 *
 * The response code to expect in the response.
 */
export declare type AssertResponseCodeTypesCodingType = {
    /**
     * bad: Response code is 400.
     */
    Bad: CodingArgs;
    /**
     * conflict: Response code is 409.
     */
    Conflict: CodingArgs;
    /**
     * created: Response code is 201.
     */
    Created: CodingArgs;
    /**
     * forbidden: Response code is 403.
     */
    Forbidden: CodingArgs;
    /**
     * gone: Response code is 410.
     */
    Gone: CodingArgs;
    /**
     * methodNotAllowed: Response code is 405.
     */
    MethodNotAllowed: CodingArgs;
    /**
     * noContent: Response code is 204.
     */
    NoContent: CodingArgs;
    /**
     * notFound: Response code is 404.
     */
    NotFound: CodingArgs;
    /**
     * notModified: Response code is 304.
     */
    NotModified: CodingArgs;
    /**
     * okay: Response code is 200.
     */
    Okay: CodingArgs;
    /**
     * preconditionFailed: Response code is 412.
     */
    PreconditionFailed: CodingArgs;
    /**
     * unprocessable: Response code is 422.
     */
    Unprocessable: CodingArgs;
};
/**
 * The type of response code to use for assertion.
 *
 * The response code to expect in the response.
 */
export declare const AssertResponseCodeTypesCodings: AssertResponseCodeTypesCodingType;
//# sourceMappingURL=AssertResponseCodeTypesCodings.d.ts.map