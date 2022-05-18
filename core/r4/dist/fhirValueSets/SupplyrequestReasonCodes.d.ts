/**
 * The reason why the supply item was requested.
 */
export declare const SupplyrequestReasonCodes: {
    /**
     * patient-care: The supply has been requested for use in direct patient care.
     */
    readonly PatientCare: "patient-care";
    /**
     * ward-stock: The supply has been requested for creating or replenishing ward stock.
     */
    readonly WardStock: "ward-stock";
};
/**
 * The reason why the supply item was requested.
 */
export declare type SupplyrequestReasonCodeType = typeof SupplyrequestReasonCodes[keyof typeof SupplyrequestReasonCodes];
//# sourceMappingURL=SupplyrequestReasonCodes.d.ts.map