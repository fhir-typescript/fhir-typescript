/**
 * Status of the supply delivery.
 */
export declare const SupplydeliveryStatusCodes: {
    /**
     * abandoned: Dispensing was not completed.
     */
    readonly Abandoned: "abandoned";
    /**
     * completed: Supply has been delivered ("completed").
     */
    readonly Delivered: "completed";
    /**
     * in-progress: Supply has been requested, but not delivered.
     */
    readonly InProgress: "in-progress";
};
/**
 * Status of the supply delivery.
 */
export declare type SupplydeliveryStatusCodeType = typeof SupplydeliveryStatusCodes[keyof typeof SupplydeliveryStatusCodes];
//# sourceMappingURL=SupplydeliveryStatusCodes.d.ts.map