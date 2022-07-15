/**
 * Example use codes for the List resource - typical kinds of use.
 */
export declare const ListExampleCodes: {
    /**
     * adverserxns: A list of part adverse reactions.
     */
    readonly AdverseReactions: "adverserxns";
    /**
     * alerts: A list of alerts for the patient.
     */
    readonly Alerts: "alerts";
    /**
     * allergies: A list of Allergies for the patient.
     */
    readonly Allergies: "allergies";
    /**
     * medications: A list of medication statements for the patient.
     */
    readonly MedicationList: "medications";
    /**
     * plans: A set of care plans that apply in a particular context of care.
     */
    readonly CarePlans: "plans";
    /**
     * problems: A list of problems that the patient is known of have (or have had in the past).
     */
    readonly ProblemList: "problems";
    /**
     * protocols: A set of protocols to be followed.
     */
    readonly Protocols: "protocols";
    /**
     * waiting: A list of items waiting for an event (perhaps a surgical patient waiting list).
     */
    readonly WaitingList: "waiting";
    /**
     * worklist: A list of items that constitute a set of work to be performed (typically this code would be specialized for more specific uses, such as a ward round list).
     */
    readonly Worklist: "worklist";
};
/**
 * Example use codes for the List resource - typical kinds of use.
 */
export declare type ListExampleCodeType = typeof ListExampleCodes[keyof typeof ListExampleCodes];
//# sourceMappingURL=ListExampleCodes.d.ts.map