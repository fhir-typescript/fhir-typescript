/**
 * Overall seriousness of this event for the patient.
 */
export declare const AdverseEventSeriousnessCodes: {
    /**
     * Non-serious: Non-serious.
     */
    readonly NonSerious: "Non-serious";
    /**
     * Serious: Serious.
     */
    readonly Serious: "Serious";
    /**
     * SeriousIsBirthDefect: Is a congenital anomaly/birth defect.
     */
    readonly IsACongenitalAnomalyBirthDefect: "SeriousIsBirthDefect";
    /**
     * SeriousIsLifeThreatening: Is Life-threatening.
     */
    readonly IsLifeThreatening: "SeriousIsLifeThreatening";
    /**
     * SeriousRequiresPreventImpairment: Requires intervention to prevent permanent impairment or damage (i.e., an important medical event that requires medical judgement).
     */
    readonly RequiresInterventionToPreventPermanentImpairment: "SeriousRequiresPreventImpairment";
    /**
     * SeriousResultsInDeath: Results in death.
     */
    readonly ResultsInDeath: "SeriousResultsInDeath";
    /**
     * SeriousResultsInDisability: Results in persistent or significant disability/incapacity.
     */
    readonly ResultsInPersistentOrSignificantDisabilityIncapacity: "SeriousResultsInDisability";
    /**
     * SeriousResultsInHospitalization: Requires inpatient hospitalization or causes prolongation of existing hospitalization.
     */
    readonly RequiresOrProlongsInpatientHospitalization: "SeriousResultsInHospitalization";
};
/**
 * Overall seriousness of this event for the patient.
 */
export declare type AdverseEventSeriousnessCodeType = typeof AdverseEventSeriousnessCodes[keyof typeof AdverseEventSeriousnessCodes];
//# sourceMappingURL=AdverseEventSeriousnessCodes.d.ts.map