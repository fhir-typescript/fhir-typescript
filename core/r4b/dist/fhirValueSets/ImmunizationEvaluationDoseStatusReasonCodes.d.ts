/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why an administered dose has been assigned a particular status. Often, this reason describes why a dose is considered invalid. This value set is provided as a suggestive example.
 */
export declare const ImmunizationEvaluationDoseStatusReasonCodes: {
    /**
     * advstorage: The product was stored in a manner inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.
     */
    readonly AdverseStorageCondition: "advstorage";
    /**
     * coldchbrk: The product was stored at a temperature inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.
     */
    readonly ColdChainBreak: "coldchbrk";
    /**
     * explot: The product was administered after the expiration date associated with lot of vaccine.
     */
    readonly ExpiredLot: "explot";
    /**
     * outsidesched: The product was administered at a time inconsistent with the documented schedule.
     */
    readonly AdministeredOutsideRecommendedSchedule: "outsidesched";
    /**
     * prodrecall: The product administered has been recalled by the manufacturer.
     */
    readonly ProductRecall: "prodrecall";
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why an administered dose has been assigned a particular status. Often, this reason describes why a dose is considered invalid. This value set is provided as a suggestive example.
 */
export declare type ImmunizationEvaluationDoseStatusReasonCodeType = typeof ImmunizationEvaluationDoseStatusReasonCodes[keyof typeof ImmunizationEvaluationDoseStatusReasonCodes];
//# sourceMappingURL=ImmunizationEvaluationDoseStatusReasonCodes.d.ts.map