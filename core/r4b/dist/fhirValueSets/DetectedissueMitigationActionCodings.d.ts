import { CodingArgs } from '../fhir/Coding.js';
/**
 * Kinds of mitigating actions and observations that can be associated with a detected issue or contraindication, such as 'added concurrent therapy', 'prior therapy documented', etc.
 */
export declare type DetectedissueMitigationActionCodingType = {
    /**
     * Code: _ActAdministrativeDetectedIssueManagementCode
     */
    ActAdministrativeDetectedIssueManagementCode: CodingArgs;
    /**
     * Code: _ActDetectedIssueManagementCode
     */
    ActDetectedIssueManagementCode: CodingArgs;
    /**
     * Code: _ActFinancialDetectedIssueManagementCode
     */
    ActFinancialDetectedIssueManagementCode: CodingArgs;
    /**
     * Code: _AuthorizationIssueManagementCode
     */
    AuthorizationIssueManagementCode: CodingArgs;
    /**
     * Code: 1
     */
    TherapyAppropriate: CodingArgs;
    /**
     * Code: 10
     */
    ProvidedPatientEducation: CodingArgs;
    /**
     * Code: 11
     */
    AddedConcurrentTherapy: CodingArgs;
    /**
     * Code: 12
     */
    TemporarilySuspendedConcurrentTherapy: CodingArgs;
    /**
     * Code: 13
     */
    StoppedConcurrentTherapy: CodingArgs;
    /**
     * Code: 14
     */
    SupplyAppropriate: CodingArgs;
    /**
     * Code: 15
     */
    Replacement: CodingArgs;
    /**
     * Code: 16
     */
    VacationSupply: CodingArgs;
    /**
     * Code: 17
     */
    WeekendSupply: CodingArgs;
    /**
     * Code: 18
     */
    LeaveOfAbsence: CodingArgs;
    /**
     * Code: 19
     */
    ConsultedSupplier: CodingArgs;
    /**
     * Code: 2
     */
    AssessedPatient: CodingArgs;
    /**
     * Code: 20
     */
    AdditionalQuantityOnSeparateDispense: CodingArgs;
    /**
     * Code: 21
     */
    AuthorizationConfirmed: CodingArgs;
    /**
     * Code: 22
     */
    AppropriateIndicationOrDiagnosis: CodingArgs;
    /**
     * Code: 23
     */
    PriorTherapyDocumented: CodingArgs;
    /**
     * Code: 3
     */
    PatientExplanation: CodingArgs;
    /**
     * Code: 4
     */
    ConsultedOtherSource: CodingArgs;
    /**
     * Code: 5
     */
    ConsultedPrescriber: CodingArgs;
    /**
     * Code: 6
     */
    PrescriberDeclinedChange: CodingArgs;
    /**
     * Code: 7
     */
    InteractingTherapyNoLongerActivePlanned: CodingArgs;
    /**
     * Code: 8
     */
    OtherActionTaken: CodingArgs;
    /**
     * Code: 9
     */
    InstitutedOngoingMonitoringProgram: CodingArgs;
    /**
     * Code: EMAUTH
     */
    EmergencyAuthorizationOverride: CodingArgs;
};
/**
 * Kinds of mitigating actions and observations that can be associated with a detected issue or contraindication, such as 'added concurrent therapy', 'prior therapy documented', etc.
 */
export declare const DetectedissueMitigationActionCodings: DetectedissueMitigationActionCodingType;
//# sourceMappingURL=DetectedissueMitigationActionCodings.d.ts.map