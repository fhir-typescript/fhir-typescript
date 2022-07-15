import { CodingArgs } from '../fhir/Coding.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why an administered dose has been assigned a particular status. Often, this reason describes why a dose is considered invalid. This value set is provided as a suggestive example.
 */
export declare type ImmunizationEvaluationDoseStatusReasonCodingType = {
    /**
     * advstorage: The product was stored in a manner inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.
     */
    AdverseStorageCondition: CodingArgs;
    /**
     * coldchbrk: The product was stored at a temperature inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.
     */
    ColdChainBreak: CodingArgs;
    /**
     * explot: The product was administered after the expiration date associated with lot of vaccine.
     */
    ExpiredLot: CodingArgs;
    /**
     * outsidesched: The product was administered at a time inconsistent with the documented schedule.
     */
    AdministeredOutsideRecommendedSchedule: CodingArgs;
    /**
     * prodrecall: The product administered has been recalled by the manufacturer.
     */
    ProductRecall: CodingArgs;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why an administered dose has been assigned a particular status. Often, this reason describes why a dose is considered invalid. This value set is provided as a suggestive example.
 */
export declare const ImmunizationEvaluationDoseStatusReasonCodings: ImmunizationEvaluationDoseStatusReasonCodingType;
//# sourceMappingURL=ImmunizationEvaluationDoseStatusReasonCodings.d.ts.map