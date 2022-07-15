import { CodingArgs } from '../fhir/Coding.js';
/**
 * The status of the response to an order.
 */
export declare type OrderStatusCodingType = {
    /**
     * aborted: Processing the order was stopped because of some workflow/business logic reason.
     */
    Aborted: CodingArgs;
    /**
     * accepted: The order has been accepted, and work is in progress.
     */
    Accepted: CodingArgs;
    /**
     * cancelled: Processing the order was halted at the initiators request.
     */
    Cancelled: CodingArgs;
    /**
     * completed: The order has been completed.
     */
    Completed: CodingArgs;
    /**
     * error: The order was unable to be processed because of a technical error (i.e. unexpected error)
     */
    Error: CodingArgs;
    /**
     * pending: The order is known, but no processing has occurred at this time
     */
    Pending: CodingArgs;
    /**
     * rejected: The order was rejected because of a workflow/business logic reason
     */
    Rejected: CodingArgs;
    /**
     * replaced: The order has been cancelled and replaced by another.
     */
    Replaced: CodingArgs;
    /**
     * review: The order is undergoing initial processing to determine whether it will be accepted (usually this involves human review)
     */
    Review: CodingArgs;
};
/**
 * The status of the response to an order.
 */
export declare const OrderStatusCodings: OrderStatusCodingType;
//# sourceMappingURL=OrderStatusCodings.d.ts.map