import { CodingArgs } from '../fhir/Coding.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the administered dose of vaccine.
 */
export declare type ImmunizationStatusCodingType = {
    /**
     * completed: All actions that are implied by the administration have occurred.
     */
    Completed: CodingArgs;
    /**
     * entered-in-error: The administration was entered in error and therefore nullified.
     */
    EnteredInError: CodingArgs;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the administered dose of vaccine.
 */
export declare const ImmunizationStatusCodings: ImmunizationStatusCodingType;
//# sourceMappingURL=ImmunizationStatusCodings.d.ts.map