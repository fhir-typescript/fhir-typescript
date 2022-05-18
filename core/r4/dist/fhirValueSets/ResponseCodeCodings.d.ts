import { Coding } from '../fhir/Coding.js';
/**
 * The kind of response to a message.
 */
export declare const ResponseCodeCodings: {
    /**
     * fatal-error: The message was rejected because of a problem with the content. There is no point in re-sending without change. The response narrative SHALL describe the issue.
     */
    readonly FatalError: Coding;
    /**
     * ok: The message was accepted and processed without error.
     */
    readonly OK: Coding;
    /**
     * transient-error: Some internal unexpected error occurred - wait and try again. Note - this is usually used for things like database unavailable, which may be expected to resolve, though human intervention may be required.
     */
    readonly TransientError: Coding;
};
/**
 * The kind of response to a message.
 */
export declare type ResponseCodeCodingType = typeof ResponseCodeCodings;
//# sourceMappingURL=ResponseCodeCodings.d.ts.map