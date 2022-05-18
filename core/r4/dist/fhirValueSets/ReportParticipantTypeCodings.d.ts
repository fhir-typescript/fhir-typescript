import { Coding } from '../fhir/Coding.js';
/**
 * The type of participant.
 */
export declare const ReportParticipantTypeCodings: {
    /**
     * client: A FHIR Client.
     */
    readonly Client: Coding;
    /**
     * server: A FHIR Server.
     */
    readonly Server: Coding;
    /**
     * test-engine: The test execution engine.
     */
    readonly TestEngine: Coding;
};
/**
 * The type of participant.
 */
export declare type ReportParticipantTypeCodingType = typeof ReportParticipantTypeCodings;
//# sourceMappingURL=ReportParticipantTypeCodings.d.ts.map