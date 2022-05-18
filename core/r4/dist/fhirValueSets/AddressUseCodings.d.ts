import { Coding } from '../fhir/Coding.js';
/**
 * The use of an address.
 */
export declare const AddressUseCodings: {
    /**
     * billing: An address to be used to send bills, invoices, receipts etc.
     */
    readonly Billing: Coding;
    /**
     * home: A communication address at a home.
     */
    readonly Home: Coding;
    /**
     * old: This address is no longer in use (or was never correct but retained for records).
     */
    readonly OldIncorrect: Coding;
    /**
     * temp: A temporary address. The period can provide more detailed information.
     */
    readonly Temporary: Coding;
    /**
     * work: An office address. First choice for business related contacts during business hours.
     */
    readonly Work: Coding;
};
/**
 * The use of an address.
 */
export declare type AddressUseCodingType = typeof AddressUseCodings;
//# sourceMappingURL=AddressUseCodings.d.ts.map