/**
 * Status of the supply delivery.
 */
export declare const SupplydeliveryStatusCodes: {
    /**
     * abandoned: Delivery was not completed.
     */
    readonly Abandoned: "abandoned";
    /**
     * completed: Supply has been delivered ("completed").
     */
    readonly Delivered: "completed";
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".)
     */
    readonly EnteredInError: "entered-in-error";
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