import { Coding } from '../fhir/Coding.js';
/**
 * Codes identifying the lifecycle stage of a ChargeItem.
 */
export declare const ChargeitemStatusCodings: {
    /**
     * aborted: The processing of the charge was aborted.
     */
    readonly Aborted: Coding;
    /**
     * billable: The charge item is ready for billing.
     */
    readonly Billable: Coding;
    /**
     * billed: The charge item has been billed (e.g. a billing engine has generated financial transactions by applying the associated ruled for the charge item to the context of the Encounter, and placed them into Claims/Invoices.
     */
    readonly Billed: Coding;
    /**
     * entered-in-error: The charge item has been entered in error and should not be processed for billing.
     */
    readonly EnteredInError: Coding;
    /**
     * not-billable: The charge item has been determined to be not billable (e.g. due to rules associated with the billing code).
     */
    readonly NotBillable: Coding;
    /**
     * planned: The charge item has been entered, but the charged service is not  yet complete, so it shall not be billed yet but might be used in the context of pre-authorization.
     */
    readonly Planned: Coding;
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this charge item  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    readonly Unknown: Coding;
};
/**
 * Codes identifying the lifecycle stage of a ChargeItem.
 */
export declare type ChargeitemStatusCodingType = typeof ChargeitemStatusCodings;
//# sourceMappingURL=ChargeitemStatusCodings.d.ts.map