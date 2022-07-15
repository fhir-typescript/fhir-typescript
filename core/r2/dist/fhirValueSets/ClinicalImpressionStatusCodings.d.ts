import { CodingArgs } from '../fhir/Coding.js';
/**
 * The workflow state of a clinical impression.
 */
export declare type ClinicalImpressionStatusCodingType = {
    /**
     * completed: The assessment is done and the results are final.
     */
    Completed: CodingArgs;
    /**
     * entered-in-error: This assessment was never actually done and the record is erroneous (e.g. Wrong patient).
     */
    EnteredInError: CodingArgs;
    /**
     * in-progress: The assessment is still on-going and results are not yet final.
     */
    InProgress: CodingArgs;
};
/**
 * The workflow state of a clinical impression.
 */
export declare const ClinicalImpressionStatusCodings: ClinicalImpressionStatusCodingType;
//# sourceMappingURL=ClinicalImpressionStatusCodings.d.ts.map