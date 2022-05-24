import { CodingArgs } from '../fhir/Coding.js';
/**
 * Kinds of mitigating actions and observations that can be associated with a detected issue or contraindication, such as 'added concurrent therapy', 'prior therapy documented', etc.
 */
export declare type DetectedissueMitigationActionCodingType = {
    /**
     * _ActAdministrativeDetectedIssueManagementCode: Codes dealing with the management of Detected Issue observations for the administrative and patient administrative acts domains.
     */
    ActAdministrativeDetectedIssueManagementCode: CodingArgs;
    /**
     * _ActDetectedIssueManagementCode: Codes dealing with the management of Detected Issue observations
     */
    ActDetectedIssueManagementCode: CodingArgs;
    /**
     * _AuthorizationIssueManagementCode: Authorization Issue Management Code
     */
    AuthorizationIssueManagementCode: CodingArgs;
    /**
     * 1: Confirmed drug therapy appropriate
     */
    TherapyAppropriate: CodingArgs;
    /**
     * 10: Provided education or training to the patient on appropriate therapy use
     */
    ProvidedPatientEducation: CodingArgs;
    /**
     * 11: Instituted an additional therapy to mitigate potential negative effects
     */
    AddedConcurrentTherapy: CodingArgs;
    /**
     * 12: Suspended existing therapy that triggered interaction for the duration of this therapy
     */
    TemporarilySuspendedConcurrentTherapy: CodingArgs;
    /**
     * 13: Aborted existing therapy that triggered interaction.
     */
    StoppedConcurrentTherapy: CodingArgs;
    /**
     * 14: Confirmed supply action appropriate
     */
    SupplyAppropriate: CodingArgs;
    /**
     * 15: Patient's existing supply was lost/wasted
     */
    Replacement: CodingArgs;
    /**
     * 16: Supply date is due to patient vacation
     */
    VacationSupply: CodingArgs;
    /**
     * 17: Supply date is intended to carry patient over weekend
     */
    WeekendSupply: CodingArgs;
    /**
     * 18: Supply is intended for use during a leave of absence from an institution.
     */
    LeaveOfAbsence: CodingArgs;
    /**
     * 19: Consulted other supplier/pharmacy, therapy confirmed
     */
    ConsultedSupplier: CodingArgs;
    /**
     * 2: Assessed patient, therapy is appropriate
     */
    AssessedPatient: CodingArgs;
    /**
     * 20: Description: Supply is different than expected as an additional quantity has been supplied in a separate dispense.
     */
    AdditionalQuantityOnSeparateDispense: CodingArgs;
    /**
     * 21: Description: Indicates that the permissions have been externally verified and the request should be processed.
     */
    AuthorizationConfirmed: CodingArgs;
    /**
     * 22: Description: The patient has the appropriate indication or diagnosis for the action to be taken.
     */
    AppropriateIndicationOrDiagnosis: CodingArgs;
    /**
     * 23: Description: It has been confirmed that the appropriate pre-requisite therapy has been tried.
     */
    PriorTherapyDocumented: CodingArgs;
    /**
     * 3: Patient gave adequate explanation
     */
    PatientExplanation: CodingArgs;
    /**
     * 4: Consulted other supply source, therapy still appropriate
     */
    ConsultedOtherSource: CodingArgs;
    /**
     * 5: Consulted prescriber, therapy confirmed
     */
    ConsultedPrescriber: CodingArgs;
    /**
     * 6: Consulted prescriber and recommended change, prescriber declined
     */
    PrescriberDeclinedChange: CodingArgs;
    /**
     * 7: Concurrent therapy triggering alert is no longer on-going or planned
     */
    InteractingTherapyNoLongerActivePlanned: CodingArgs;
    /**
     * 8: Order is performed as issued, but other action taken to mitigate potential adverse effects
     */
    OtherActionTaken: CodingArgs;
    /**
     * 9: Arranged to monitor patient for adverse effects
     */
    InstitutedOngoingMonitoringProgram: CodingArgs;
    /**
     * EMAUTH: Used to temporarily override normal authorization rules to gain access to data in a case of emergency. Use of this override code will typically be monitored, and a procedure to verify its proper use may be triggered when used.
     */
    EmergencyAuthorizationOverride: CodingArgs;
};
/**
 * Kinds of mitigating actions and observations that can be associated with a detected issue or contraindication, such as 'added concurrent therapy', 'prior therapy documented', etc.
 */
export declare const DetectedissueMitigationActionCodings: DetectedissueMitigationActionCodingType;
//# sourceMappingURL=DetectedissueMitigationActionCodings.d.ts.map