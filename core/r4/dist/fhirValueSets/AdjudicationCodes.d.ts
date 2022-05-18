/**
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 */
export declare const AdjudicationCodes: {
    /**
     * benefit: Amount payable under the coverage
     */
    readonly BenefitAmount: "benefit";
    /**
     * copay: Patient Co-Payment
     */
    readonly CoPay: "copay";
    /**
     * deductible: Amount deducted from the eligible amount prior to adjudication.
     */
    readonly Deductible: "deductible";
    /**
     * eligible: Amount of the change which is considered for adjudication.
     */
    readonly EligibleAmount: "eligible";
    /**
     * eligpercent: Eligible Percentage.
     */
    readonly EligiblePercent: "eligpercent";
    /**
     * submitted: The total submitted amount for the claim or group or line item.
     */
    readonly SubmittedAmount: "submitted";
    /**
     * tax: The amount of tax.
     */
    readonly Tax: "tax";
    /**
     * unallocdeduct: The amount of deductible which could not allocated to other line items.
     */
    readonly UnallocatedDeductible: "unallocdeduct";
};
/**
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 */
export declare type AdjudicationCodeType = typeof AdjudicationCodes[keyof typeof AdjudicationCodes];
//# sourceMappingURL=AdjudicationCodes.d.ts.map