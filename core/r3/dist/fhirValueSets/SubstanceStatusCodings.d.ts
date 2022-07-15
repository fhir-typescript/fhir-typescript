import { CodingArgs } from '../fhir/Coding.js';
/**
 * A code to indicate if the substance is actively used
 */
export declare type SubstanceStatusCodingType = {
    /**
     * active: The substance is considered for use or reference
     */
    Active: CodingArgs;
    /**
     * entered-in-error: The substance was entered in error
     */
    EnteredInError: CodingArgs;
    /**
     * inactive: The substance is considered for reference, but not for use
     */
    Inactive: CodingArgs;
};
/**
 * A code to indicate if the substance is actively used
 */
export declare const SubstanceStatusCodings: SubstanceStatusCodingType;
//# sourceMappingURL=SubstanceStatusCodings.d.ts.map