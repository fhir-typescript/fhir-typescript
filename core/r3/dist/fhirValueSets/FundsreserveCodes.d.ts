/**
 * This value set includes sample funds reservation type codes.
 */
export declare const FundsreserveCodes: {
    /**
     * none: The payor is not being requested to reserve any funds for the settlement of future claims.
     */
    readonly None: "none";
    /**
     * patient: The payor is requested to reserve funds for the provision of the named services by any provider for settlement of future claims related to this request.
     */
    readonly Patient: "patient";
    /**
     * provider: The payor is requested to reserve funds solely for the named provider for settlement of future claims related to this request.
     */
    readonly Provider: "provider";
};
/**
 * This value set includes sample funds reservation type codes.
 */
export declare type FundsreserveCodeType = typeof FundsreserveCodes[keyof typeof FundsreserveCodes];
//# sourceMappingURL=FundsreserveCodes.d.ts.map