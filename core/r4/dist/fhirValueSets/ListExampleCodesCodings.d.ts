import { Coding } from '../fhir/Coding.js';
/**
 * Example use codes for the List resource - typical kinds of use.
 */
export declare const ListExampleCodesCodings: {
    /**
     * adverserxns: A list of part adverse reactions.
     */
    readonly AdverseReactions: Coding;
    /**
     * alerts: A list of alerts for the patient.
     */
    readonly Alerts: Coding;
    /**
     * allergies: A list of Allergies for the patient.
     */
    readonly Allergies: Coding;
    /**
     * medications: A list of medication statements for the patient.
     */
    readonly MedicationList: Coding;
    /**
     * plans: A set of care plans that apply in a particular context of care.
     */
    readonly CarePlans: Coding;
    /**
     * problems: A list of problems that the patient is known of have (or have had in the past).
     */
    readonly ProblemList: Coding;
    /**
     * protocols: A set of protocols to be followed.
     */
    readonly Protocols: Coding;
    /**
     * waiting: A list of items waiting for an event (perhaps a surgical patient waiting list).
     */
    readonly WaitingList: Coding;
    /**
     * worklist: A list of items that constitute a set of work to be performed (typically this code would be specialized for more specific uses, such as a ward round list).
     */
    readonly Worklist: Coding;
};
/**
 * Example use codes for the List resource - typical kinds of use.
 */
export declare type ListExampleCodesCodingType = typeof ListExampleCodesCodings;
//# sourceMappingURL=ListExampleCodesCodings.d.ts.map