/**
 * The code(s) that detail the conditions under which the healthcare service is available/offered.
 */
export declare const ServiceProvisionConditionsCodes: {
    /**
     * cost: Fees apply for this service.
     */
    readonly FeesApply: "cost";
    /**
     * disc: There are discounts available on this service for qualifying patients.
     */
    readonly DiscountsAvailable: "disc";
    /**
     * free: This service is available for no patient cost.
     */
    readonly Free: "free";
};
/**
 * The code(s) that detail the conditions under which the healthcare service is available/offered.
 */
export declare type ServiceProvisionConditionsCodeType = typeof ServiceProvisionConditionsCodes[keyof typeof ServiceProvisionConditionsCodes];
//# sourceMappingURL=ServiceProvisionConditionsCodes.d.ts.map