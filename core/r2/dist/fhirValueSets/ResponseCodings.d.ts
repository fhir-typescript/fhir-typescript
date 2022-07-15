import { CodingArgs } from '../fhir/Coding.js';
/**
 * The kind of response to a message
 */
export declare type ResponseCodingType = {
    /**
     * fatal-error: The message was rejected because of some content in it. There is no point in re-sending without change. The response narrative SHALL describe the issue.
     */
    FatalError: CodingArgs;
    /**
     * ok: The message was accepted and processed without error.
     */
    OK: CodingArgs;
    /**
     * transient-error: Some internal unexpected error occurred - wait and try again. Note - this is usually used for things like database unavailable, which may be expected to resolve, though human intervention may be required.
     */
    TransientError: CodingArgs;
};
/**
 * The kind of response to a message
 */
export declare const ResponseCodings: ResponseCodingType;
//# sourceMappingURL=ResponseCodings.d.ts.map