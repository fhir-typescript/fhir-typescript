import { CodingArgs } from '../fhir/Coding.js';
/**
 * How much of the content of the code system - the concepts and codes it defines - are represented in a code system resource
 */
export declare type CodesystemContentModeCodingType = {
    /**
     * complete: All the concepts defined by the code system are included in the code system resource
     */
    Complete: CodingArgs;
    /**
     * example: A few representative concepts are included in the code system resource
     */
    Example: CodingArgs;
    /**
     * fragment: A subset of the code system concepts are included in the code system resource
     */
    Fragment: CodingArgs;
    /**
     * not-present: None of the concepts defined by the code system are included in the code system resource
     */
    NotPresent: CodingArgs;
};
/**
 * How much of the content of the code system - the concepts and codes it defines - are represented in a code system resource
 */
export declare const CodesystemContentModeCodings: CodesystemContentModeCodingType;
//# sourceMappingURL=CodesystemContentModeCodings.d.ts.map