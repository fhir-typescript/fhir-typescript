/**
 * The validation status of the target
 */
export declare const VerificationresultStatusCodes: {
    /**
     * attested: ***TODO***
     */
    readonly Attested: "attested";
    /**
     * in-process: ***TODO***
     */
    readonly InProcess: "in-process";
    /**
     * req-revalid: ***TODO***
     */
    readonly RequiresRevalidation: "req-revalid";
    /**
     * reval-fail: ***TODO***
     */
    readonly ReValidationFailed: "reval-fail";
    /**
     * val-fail: ***TODO***
     */
    readonly ValidationFailed: "val-fail";
    /**
     * validated: ***TODO***
     */
    readonly Validated: "validated";
};
/**
 * The validation status of the target
 */
export declare type VerificationresultStatusCodeType = typeof VerificationresultStatusCodes[keyof typeof VerificationresultStatusCodes];
//# sourceMappingURL=VerificationresultStatusCodes.d.ts.map