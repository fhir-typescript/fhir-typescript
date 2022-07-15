import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes codes for the relationship between the Policyholder and the Beneficiary (insured/covered party/patient)..
 */
export declare type PolicyholderRelationshipCodingType = {
    /**
     * child: The Beneficiary is a child of the Policyholder
     */
    Child: CodingArgs;
    /**
     * common: The Beneficiary is a common law spouse or equivalent of the Policyholder
     */
    CommonLawSpouse: CodingArgs;
    /**
     * other: The Beneficiary has some other relationship the Policyholder
     */
    Other: CodingArgs;
    /**
     * parent: The Beneficiary is a parent of the Policyholder
     */
    Parent: CodingArgs;
    /**
     * self: The Beneficiary is the Policyholder
     */
    Self: CodingArgs;
    /**
     * spouse: The Beneficiary is a spouse or equivalent of the Policyholder
     */
    Spouse: CodingArgs;
};
/**
 * This value set includes codes for the relationship between the Policyholder and the Beneficiary (insured/covered party/patient)..
 */
export declare const PolicyholderRelationshipCodings: PolicyholderRelationshipCodingType;
//# sourceMappingURL=PolicyholderRelationshipCodings.d.ts.map