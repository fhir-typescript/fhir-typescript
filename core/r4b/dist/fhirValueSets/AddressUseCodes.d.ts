/**
 * The use of an address.
 */
export declare const AddressUseCodes: {
    /**
     * billing: An address to be used to send bills, invoices, receipts etc.
     */
    readonly Billing: "billing";
    /**
     * home: A communication address at a home.
     */
    readonly Home: "home";
    /**
     * old: This address is no longer in use (or was never correct but retained for records).
     */
    readonly OldIncorrect: "old";
    /**
     * temp: A temporary address. The period can provide more detailed information.
     */
    readonly Temporary: "temp";
    /**
     * work: An office address. First choice for business related contacts during business hours.
     */
    readonly Work: "work";
};
/**
 * The use of an address.
 */
export declare type AddressUseCodeType = typeof AddressUseCodes[keyof typeof AddressUseCodes];
//# sourceMappingURL=AddressUseCodes.d.ts.map