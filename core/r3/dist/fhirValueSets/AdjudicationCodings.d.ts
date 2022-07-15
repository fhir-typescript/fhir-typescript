import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 */
export declare type AdjudicationCodingType = {
    /**
     * benefit: Amount payable under the coverage
     */
    BenefitAmount: CodingArgs;
    /**
     * copay: Patient Co-Payment
     */
    CoPay: CodingArgs;
    /**
     * deductible: Amount deducted from the eligible amount prior to adjudication
     */
    Deductable: CodingArgs;
    /**
     * eligible: Amount of the change which is considered for adjudication
     */
    EligibleAmount: CodingArgs;
    /**
     * eligpercent: Eligible Percentage
     */
    EligiblePercent: CodingArgs;
    /**
     * tax: Emergency Department
     */
    EmergencyDepartment: CodingArgs;
    /**
     * total: Total submitted
     */
    Total: CodingArgs;
};
/**
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 */
export declare const AdjudicationCodings: AdjudicationCodingType;
//# sourceMappingURL=AdjudicationCodings.d.ts.map