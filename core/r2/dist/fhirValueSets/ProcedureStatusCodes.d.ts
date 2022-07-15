/**
 * A code specifying the state of the procedure.
 */
export declare const ProcedureStatusCodes: {
    /**
     * aborted: The procedure was terminated without completing successfully.
     */
    readonly Aboted: "aborted";
    /**
     * completed: All actions involved in the procedure have taken place.
     */
    readonly Completed: "completed";
    /**
     * entered-in-error: The statement was entered in error and Is not valid.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * in-progress: The procedure is still occurring.
     */
    readonly InProgress: "in-progress";
};
/**
 * A code specifying the state of the procedure.
 */
export declare type ProcedureStatusCodeType = typeof ProcedureStatusCodes[keyof typeof ProcedureStatusCodes];
//# sourceMappingURL=ProcedureStatusCodes.d.ts.map