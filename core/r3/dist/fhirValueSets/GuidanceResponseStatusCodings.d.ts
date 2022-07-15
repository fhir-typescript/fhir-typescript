import { CodingArgs } from '../fhir/Coding.js';
/**
 * The status of a guidance response
 */
export declare type GuidanceResponseStatusCodingType = {
    /**
     * data-requested: The request was processed successfully, but more data may result in a more complete evaluation
     */
    DataRequested: CodingArgs;
    /**
     * data-required: The request was processed, but more data is required to complete the evaluation
     */
    DataRequired: CodingArgs;
    /**
     * entered-in-error: The response was entered in error
     */
    EnteredInError: CodingArgs;
    /**
     * failure: The request was not processed successfully
     */
    Failure: CodingArgs;
    /**
     * in-progress: The request is currently being processed
     */
    InProgress: CodingArgs;
    /**
     * success: The request was processed successfully
     */
    Success: CodingArgs;
};
/**
 * The status of a guidance response
 */
export declare const GuidanceResponseStatusCodings: GuidanceResponseStatusCodingType;
//# sourceMappingURL=GuidanceResponseStatusCodings.d.ts.map