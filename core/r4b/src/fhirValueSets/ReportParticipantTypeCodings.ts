// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/report-participant-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The type of participant.
 */
export type ReportParticipantTypeCodingType = {
  /**
   * client: A FHIR Client.
   */
  Client: CodingArgs;
  /**
   * server: A FHIR Server.
   */
  Server: CodingArgs;
  /**
   * test-engine: The test execution engine.
   */
  TestEngine: CodingArgs;
}

/**
 * The type of participant.
 */
export const ReportParticipantTypeCodings:ReportParticipantTypeCodingType = {
  /**
   * client: A FHIR Client.
   */
  Client: {
    display: "Client",
    code: "client",
    system: "http://hl7.org/fhir/report-participant-type",
  },
  /**
   * server: A FHIR Server.
   */
  Server: {
    display: "Server",
    code: "server",
    system: "http://hl7.org/fhir/report-participant-type",
  },
  /**
   * test-engine: The test execution engine.
   */
  TestEngine: {
    display: "Test Engine",
    code: "test-engine",
    system: "http://hl7.org/fhir/report-participant-type",
  },
} as const;