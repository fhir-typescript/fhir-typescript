/**
 * This value sets refers to a Category of supply.
 */
export declare const SupplyrequestKindCodes: {
    /**
     * central: Supply is stored and requested from central supply.
     */
    readonly CentralSupply: "central";
    /**
     * nonstock: Supply is not onsite and must be requested from an outside vendor using a non-stock requisition.
     */
    readonly NonStock: "nonstock";
};
/**
 * This value sets refers to a Category of supply.
 */
export declare type SupplyrequestKindCodeType = typeof SupplyrequestKindCodes[keyof typeof SupplyrequestKindCodes];
//# sourceMappingURL=SupplyrequestKindCodes.d.ts.map