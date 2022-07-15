import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes identifying the lifecycle stage of a ChargeItem.
 */
export declare type ChargeitemStatusCodingType = {
    /**
     * aborted: The processing of the charge was aborted.
     */
    Aborted: CodingArgs;
    /**
     * billable: The charge item is ready for billing.
     */
    Billable: CodingArgs;
    /**
     * billed: The charge item has been billed (e.g. a billing engine has generated financial transactions by applying the associated ruled for the charge item to the context of the Encounter, and placed them into Claims/Invoices.
     */
    Billed: CodingArgs;
    /**
     * entered-in-error: The charge item has been entered in error and should not be processed for billing.
     */
    EnteredInError: CodingArgs;
    /**
     * not-billable: The charge item has been determined to be not billable (e.g. due to rules associated with the billing code).
     */
    NotBillable: CodingArgs;
    /**
     * planned: The charge item has been entered, but the charged service is not  yet complete, so it shall not be billed yet but might be used in the context of pre-authorization.
     */
    Planned: CodingArgs;
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this charge item  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    Unknown: CodingArgs;
};
/**
 * Codes identifying the lifecycle stage of a ChargeItem.
 */
export declare const ChargeitemStatusCodings: ChargeitemStatusCodingType;
//# sourceMappingURL=ChargeitemStatusCodings.d.ts.map