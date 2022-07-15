import { CodingArgs } from '../fhir/Coding.js';
/**
 * A coded concept identifying level of certainty if patient has taken or has not taken the medication
 */
export declare type MedicationStatementTakenCodingType = {
    /**
     * n: Negative assertion that patient has not taken medication
     */
    No: CodingArgs;
    /**
     * na: Patient reporting does not apply
     */
    NotApplicable: CodingArgs;
    /**
     * unk: Unknown assertion if patient has taken medication
     */
    Unknown: CodingArgs;
    /**
     * y: Positive assertion that patient has taken medication
     */
    Yes: CodingArgs;
};
/**
 * A coded concept identifying level of certainty if patient has taken or has not taken the medication
 */
export declare const MedicationStatementTakenCodings: MedicationStatementTakenCodingType;
//# sourceMappingURL=MedicationStatementTakenCodings.d.ts.map