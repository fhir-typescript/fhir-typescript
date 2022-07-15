/**
 * The status of the response to an order.
 */
export declare const OrderStatusCodes: {
    /**
     * aborted: Processing the order was stopped because of some workflow/business logic reason.
     */
    readonly Aborted: "aborted";
    /**
     * accepted: The order has been accepted, and work is in progress.
     */
    readonly Accepted: "accepted";
    /**
     * cancelled: Processing the order was halted at the initiators request.
     */
    readonly Cancelled: "cancelled";
    /**
     * completed: The order has been completed.
     */
    readonly Completed: "completed";
    /**
     * error: The order was unable to be processed because of a technical error (i.e. unexpected error)
     */
    readonly Error: "error";
    /**
     * pending: The order is known, but no processing has occurred at this time
     */
    readonly Pending: "pending";
    /**
     * rejected: The order was rejected because of a workflow/business logic reason
     */
    readonly Rejected: "rejected";
    /**
     * replaced: The order has been cancelled and replaced by another.
     */
    readonly Replaced: "replaced";
    /**
     * review: The order is undergoing initial processing to determine whether it will be accepted (usually this involves human review)
     */
    readonly Review: "review";
};
/**
 * The status of the response to an order.
 */
export declare type OrderStatusCodeType = typeof OrderStatusCodes[keyof typeof OrderStatusCodes];
//# sourceMappingURL=OrderStatusCodes.d.ts.map