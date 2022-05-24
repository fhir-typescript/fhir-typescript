import { CodingArgs } from '../fhir/Coding.js';
/**
 * The code(s) that detail the conditions under which the healthcare service is available/offered.
 */
export declare type ServiceProvisionConditionsCodingType = {
    /**
     * cost: Fees apply for this service.
     */
    FeesApply: CodingArgs;
    /**
     * disc: There are discounts available on this service for qualifying patients.
     */
    DiscountsAvailable: CodingArgs;
    /**
     * free: This service is available for no patient cost.
     */
    Free: CodingArgs;
};
/**
 * The code(s) that detail the conditions under which the healthcare service is available/offered.
 */
export declare const ServiceProvisionConditionsCodings: ServiceProvisionConditionsCodingType;
//# sourceMappingURL=ServiceProvisionConditionsCodings.d.ts.map