/**
 * Kinds of mitigating actions and observations that can be associated with a detected issue or contraindication, such as 'added concurrent therapy', 'prior therapy documented', etc.
 */
export declare const DetectedissueMitigationActionCodes: {
    /**
     * Code: _ActAdministrativeDetectedIssueManagementCode
     */
    readonly ActAdministrativeDetectedIssueManagementCode: "_ActAdministrativeDetectedIssueManagementCode";
    /**
     * Code: _ActDetectedIssueManagementCode
     */
    readonly ActDetectedIssueManagementCode: "_ActDetectedIssueManagementCode";
    /**
     * Code: _ActFinancialDetectedIssueManagementCode
     */
    readonly ActFinancialDetectedIssueManagementCode: "_ActFinancialDetectedIssueManagementCode";
    /**
     * Code: _AuthorizationIssueManagementCode
     */
    readonly AuthorizationIssueManagementCode: "_AuthorizationIssueManagementCode";
    /**
     * Code: 1
     */
    readonly TherapyAppropriate: "1";
    /**
     * Code: 10
     */
    readonly ProvidedPatientEducation: "10";
    /**
     * Code: 11
     */
    readonly AddedConcurrentTherapy: "11";
    /**
     * Code: 12
     */
    readonly TemporarilySuspendedConcurrentTherapy: "12";
    /**
     * Code: 13
     */
    readonly StoppedConcurrentTherapy: "13";
    /**
     * Code: 14
     */
    readonly SupplyAppropriate: "14";
    /**
     * Code: 15
     */
    readonly Replacement: "15";
    /**
     * Code: 16
     */
    readonly VacationSupply: "16";
    /**
     * Code: 17
     */
    readonly WeekendSupply: "17";
    /**
     * Code: 18
     */
    readonly LeaveOfAbsence: "18";
    /**
     * Code: 19
     */
    readonly ConsultedSupplier: "19";
    /**
     * Code: 2
     */
    readonly AssessedPatient: "2";
    /**
     * Code: 20
     */
    readonly AdditionalQuantityOnSeparateDispense: "20";
    /**
     * Code: 21
     */
    readonly AuthorizationConfirmed: "21";
    /**
     * Code: 22
     */
    readonly AppropriateIndicationOrDiagnosis: "22";
    /**
     * Code: 23
     */
    readonly PriorTherapyDocumented: "23";
    /**
     * Code: 3
     */
    readonly PatientExplanation: "3";
    /**
     * Code: 4
     */
    readonly ConsultedOtherSource: "4";
    /**
     * Code: 5
     */
    readonly ConsultedPrescriber: "5";
    /**
     * Code: 6
     */
    readonly PrescriberDeclinedChange: "6";
    /**
     * Code: 7
     */
    readonly InteractingTherapyNoLongerActivePlanned: "7";
    /**
     * Code: 8
     */
    readonly OtherActionTaken: "8";
    /**
     * Code: 9
     */
    readonly InstitutedOngoingMonitoringProgram: "9";
    /**
     * Code: EMAUTH
     */
    readonly EmergencyAuthorizationOverride: "EMAUTH";
};
/**
 * Kinds of mitigating actions and observations that can be associated with a detected issue or contraindication, such as 'added concurrent therapy', 'prior therapy documented', etc.
 */
export declare type DetectedissueMitigationActionCodeType = typeof DetectedissueMitigationActionCodes[keyof typeof DetectedissueMitigationActionCodes];
//# sourceMappingURL=DetectedissueMitigationActionCodes.d.ts.map