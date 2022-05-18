import { Coding } from '../fhir/Coding.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why an administered dose has been assigned a particular status. Often, this reason describes why a dose is considered invalid. This value set is provided as a suggestive example.
 */
export declare const ImmunizationEvaluationDoseStatusReasonCodings: {
    /**
     * advstorage: The product was stored in a manner inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.
     */
    readonly AdverseStorageCondition: Coding;
    /**
     * coldchbrk: The product was stored at a temperature inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.
     */
    readonly ColdChainBreak: Coding;
    /**
     * explot: The product was administered after the expiration date associated with lot of vaccine.
     */
    readonly ExpiredLot: Coding;
    /**
     * outsidesched: The product was administered at a time inconsistent with the documented schedule.
     */
    readonly AdministeredOutsideRecommendedSchedule: Coding;
    /**
     * prodrecall: The product administered has been recalled by the manufacturer.
     */
    readonly ProductRecall: Coding;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why an administered dose has been assigned a particular status. Often, this reason describes why a dose is considered invalid. This value set is provided as a suggestive example.
 */
export declare type ImmunizationEvaluationDoseStatusReasonCodingType = typeof ImmunizationEvaluationDoseStatusReasonCodings;
//# sourceMappingURL=ImmunizationEvaluationDoseStatusReasonCodings.d.ts.map