import { CodingArgs } from '../fhir/Coding.js';
/**
 * The kind of medication order
 */
export declare type MedicationRequestIntentCodingType = {
    /**
     * instance-order: The request represents an instance for the particular order, for example a medication administration record.
     */
    InstanceOrder: CodingArgs;
    /**
     * order: The request represents a request/demand and authorization for action
     */
    Order: CodingArgs;
    /**
     * plan: The request represents an intension to ensure something occurs without providing an authorization for others to act
     */
    Plan: CodingArgs;
    /**
     * proposal: The request is a suggestion made by someone/something that doesn't have an intention to ensure it occurs and without providing an authorization to act
     */
    Proposal: CodingArgs;
};
/**
 * The kind of medication order
 */
export declare const MedicationRequestIntentCodings: MedicationRequestIntentCodingType;
//# sourceMappingURL=MedicationRequestIntentCodings.d.ts.map