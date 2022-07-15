/**
 * The kind of medication order
 */
export declare const MedicationRequestIntentCodes: {
    /**
     * instance-order: The request represents an instance for the particular order, for example a medication administration record.
     */
    readonly InstanceOrder: "instance-order";
    /**
     * order: The request represents a request/demand and authorization for action
     */
    readonly Order: "order";
    /**
     * plan: The request represents an intension to ensure something occurs without providing an authorization for others to act
     */
    readonly Plan: "plan";
    /**
     * proposal: The request is a suggestion made by someone/something that doesn't have an intention to ensure it occurs and without providing an authorization to act
     */
    readonly Proposal: "proposal";
};
/**
 * The kind of medication order
 */
export declare type MedicationRequestIntentCodeType = typeof MedicationRequestIntentCodes[keyof typeof MedicationRequestIntentCodes];
//# sourceMappingURL=MedicationRequestIntentCodes.d.ts.map