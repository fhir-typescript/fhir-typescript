/**
 * Status of the supply request
 */
export declare const SupplyrequestStatusCodes: {
    /**
     * cancelled: The orderer of the supply cancelled the request.
     */
    readonly Cancelled: "cancelled";
    /**
     * completed: Supply has been received by the requestor.
     */
    readonly Received: "completed";
    /**
     * failed: The supply will not be completed because the supplier was unable or unwilling to supply the item.
     */
    readonly Failed: "failed";
    /**
     * requested: Supply has been requested, but not dispensed.
     */
    readonly Requested: "requested";
};
/**
 * Status of the supply request
 */
export declare type SupplyrequestStatusCodeType = typeof SupplyrequestStatusCodes[keyof typeof SupplyrequestStatusCodes];
//# sourceMappingURL=SupplyrequestStatusCodes.d.ts.map