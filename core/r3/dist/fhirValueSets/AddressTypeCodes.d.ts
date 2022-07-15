/**
 * The type of an address (physical / postal)
 */
export declare const AddressTypeCodes: {
    /**
     * both: An address that is both physical and postal.
     */
    readonly PostalAndPhysical: "both";
    /**
     * physical: A physical address that can be visited.
     */
    readonly Physical: "physical";
    /**
     * postal: Mailing addresses - PO Boxes and care-of addresses.
     */
    readonly Postal: "postal";
};
/**
 * The type of an address (physical / postal)
 */
export declare type AddressTypeCodeType = typeof AddressTypeCodes[keyof typeof AddressTypeCodes];
//# sourceMappingURL=AddressTypeCodes.d.ts.map