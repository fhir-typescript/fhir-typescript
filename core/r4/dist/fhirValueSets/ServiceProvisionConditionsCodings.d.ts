import { Coding } from '../fhir/Coding.js';
/**
 * The code(s) that detail the conditions under which the healthcare service is available/offered.
 */
export declare const ServiceProvisionConditionsCodings: {
    /**
     * cost: Fees apply for this service.
     */
    readonly FeesApply: Coding;
    /**
     * disc: There are discounts available on this service for qualifying patients.
     */
    readonly DiscountsAvailable: Coding;
    /**
     * free: This service is available for no patient cost.
     */
    readonly Free: Coding;
};
/**
 * The code(s) that detail the conditions under which the healthcare service is available/offered.
 */
export declare type ServiceProvisionConditionsCodingType = typeof ServiceProvisionConditionsCodings;
//# sourceMappingURL=ServiceProvisionConditionsCodings.d.ts.map