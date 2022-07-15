// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/report-participant-type|3.0.2

/**
 * The type of participant.
 */
export const ReportParticipantTypeCodes = {
  /**
   * client: A FHIR Client
   */
  Client: "client",
  /**
   * server: A FHIR Server
   */
  Server: "server",
  /**
   * test-engine: The test execution engine.
   */
  TestEngine: "test-engine",
} as const;

/**
 * The type of participant.
 */
export type ReportParticipantTypeCodeType = typeof ReportParticipantTypeCodes[keyof typeof ReportParticipantTypeCodes];
