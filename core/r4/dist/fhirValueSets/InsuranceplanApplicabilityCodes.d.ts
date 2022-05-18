/**
 * Whether the cost applies to in-network or out-of-network providers.
 */
export declare const InsuranceplanApplicabilityCodes: {
    /**
     * in-network: Provider is contracted with the health insurance company to provide services to plan members for specific pre-negotiated rates
     */
    readonly InNetwork: "in-network";
    /**
     * other: Other applicability
     */
    readonly Other: "other";
    /**
     * out-of-network: Provider is  not contracted with the health insurance company to provide services to plan members for specific pre-negotiated rates
     */
    readonly OutOfNetwork: "out-of-network";
};
/**
 * Whether the cost applies to in-network or out-of-network providers.
 */
export declare type InsuranceplanApplicabilityCodeType = typeof InsuranceplanApplicabilityCodes[keyof typeof InsuranceplanApplicabilityCodes];
//# sourceMappingURL=InsuranceplanApplicabilityCodes.d.ts.map