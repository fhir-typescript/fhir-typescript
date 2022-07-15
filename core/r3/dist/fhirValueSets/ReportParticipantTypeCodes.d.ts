/**
 * The type of participant.
 */
export declare const ReportParticipantTypeCodes: {
    /**
     * client: A FHIR Client
     */
    readonly Client: "client";
    /**
     * server: A FHIR Server
     */
    readonly Server: "server";
    /**
     * test-engine: The test execution engine.
     */
    readonly TestEngine: "test-engine";
};
/**
 * The type of participant.
 */
export declare type ReportParticipantTypeCodeType = typeof ReportParticipantTypeCodes[keyof typeof ReportParticipantTypeCodes];
//# sourceMappingURL=ReportParticipantTypeCodes.d.ts.map