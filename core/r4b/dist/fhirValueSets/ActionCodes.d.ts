/**
 * Provides examples of actions to be performed.
 */
export declare const ActionCodes: {
    /**
     * collect-information: The action indicates that information should be collected from a participant in the process.
     */
    readonly CollectInformation: "collect-information";
    /**
     * order-service: The action indicates that a particular service should be provided.
     */
    readonly OrderAService: "order-service";
    /**
     * prescribe-medication: The action indicates that a particular medication should be prescribed to the patient.
     */
    readonly PrescribeAMedication: "prescribe-medication";
    /**
     * propose-diagnosis: The action indicates that a particular diagnosis should be proposed.
     */
    readonly ProposeADiagnosis: "propose-diagnosis";
    /**
     * recommend-immunization: The action indicates that a particular immunization should be performed.
     */
    readonly RecommendAnImmunization: "recommend-immunization";
    /**
     * record-detected-issue: The action indicates that a particular detected issue should be recorded.
     */
    readonly RecordADetectedIssue: "record-detected-issue";
    /**
     * record-inference: The action indicates that a particular inference should be recorded.
     */
    readonly RecordAnInference: "record-inference";
    /**
     * report-flag: The action indicates that a particular flag should be reported.
     */
    readonly ReportAFlag: "report-flag";
    /**
     * send-message: The action indicates that a particular message should be sent to a participant in the process.
     */
    readonly SendAMessage: "send-message";
};
/**
 * Provides examples of actions to be performed.
 */
export declare type ActionCodeType = typeof ActionCodes[keyof typeof ActionCodes];
//# sourceMappingURL=ActionCodes.d.ts.map