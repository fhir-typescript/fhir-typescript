import { CodingArgs } from '../fhir/Coding.js';
/**
 * Whether the cost applies to in-network or out-of-network providers.
 */
export declare type InsuranceplanApplicabilityCodingType = {
    /**
     * in-network: Provider is contracted with the health insurance company to provide services to plan members for specific pre-negotiated rates
     */
    InNetwork: CodingArgs;
    /**
     * other: Other applicability
     */
    Other: CodingArgs;
    /**
     * out-of-network: Provider is  not contracted with the health insurance company to provide services to plan members for specific pre-negotiated rates
     */
    OutOfNetwork: CodingArgs;
};
/**
 * Whether the cost applies to in-network or out-of-network providers.
 */
export declare const InsuranceplanApplicabilityCodings: InsuranceplanApplicabilityCodingType;
//# sourceMappingURL=InsuranceplanApplicabilityCodings.d.ts.map