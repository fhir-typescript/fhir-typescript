import { CodingArgs } from '../fhir/Coding.js';
/**
 * Example use codes for the List resource - typical kinds of use.
 */
export declare type ListExampleCodingType = {
    /**
     * adverserxns: A list of part adverse reactions.
     */
    AdverseReactions: CodingArgs;
    /**
     * alerts: A list of alerts for the patient.
     */
    Alerts: CodingArgs;
    /**
     * allergies: A list of Allergies for the patient.
     */
    Allergies: CodingArgs;
    /**
     * medications: A list of medication statements for the patient.
     */
    MedicationList: CodingArgs;
    /**
     * plans: A set of care plans that apply in a particular context of care.
     */
    CarePlans: CodingArgs;
    /**
     * problems: A list of problems that the patient is known of have (or have had in the past).
     */
    ProblemList: CodingArgs;
    /**
     * protocols: A set of protocols to be followed.
     */
    Protocols: CodingArgs;
    /**
     * waiting: A list of items waiting for an event (perhaps a surgical patient waiting list).
     */
    WaitingList: CodingArgs;
    /**
     * worklist: A list of items that constitute a set of work to be performed (typically this code would be specialized for more specific uses, such as a ward round list).
     */
    Worklist: CodingArgs;
};
/**
 * Example use codes for the List resource - typical kinds of use.
 */
export declare const ListExampleCodings: ListExampleCodingType;
//# sourceMappingURL=ListExampleCodings.d.ts.map