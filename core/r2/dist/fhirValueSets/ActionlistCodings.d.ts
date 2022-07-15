import { CodingArgs } from '../fhir/Coding.js';
/**
 * List of allowable action which this resource can request.
 */
export declare type ActionlistCodingType = {
    /**
     * cancel: Cancel, reverse or nullify the target resource.
     */
    CancelReverseOrNullify: CodingArgs;
    /**
     * poll: Check for previously un-read/ not-retrieved resources.
     */
    Poll: CodingArgs;
    /**
     * reprocess: Re-process the target resource.
     */
    ReProcess: CodingArgs;
    /**
     * status: Retrieve the processing status of the target resource.
     */
    StatusCheck: CodingArgs;
};
/**
 * List of allowable action which this resource can request.
 */
export declare const ActionlistCodings: ActionlistCodingType;
//# sourceMappingURL=ActionlistCodings.d.ts.map