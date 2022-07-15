import { CodingArgs } from '../fhir/Coding.js';
/**
 * Overall seriousness of this event for the patient.
 */
export declare type AdverseEventSeriousnessCodingType = {
    /**
     * Non-serious: Non-serious.
     */
    NonSerious: CodingArgs;
    /**
     * Serious: Serious.
     */
    Serious: CodingArgs;
    /**
     * SeriousIsBirthDefect: Is a congenital anomaly/birth defect.
     */
    IsACongenitalAnomalyBirthDefect: CodingArgs;
    /**
     * SeriousIsLifeThreatening: Is Life-threatening.
     */
    IsLifeThreatening: CodingArgs;
    /**
     * SeriousRequiresPreventImpairment: Requires intervention to prevent permanent impairment or damage (i.e., an important medical event that requires medical judgement).
     */
    RequiresInterventionToPreventPermanentImpairment: CodingArgs;
    /**
     * SeriousResultsInDeath: Results in death.
     */
    ResultsInDeath: CodingArgs;
    /**
     * SeriousResultsInDisability: Results in persistent or significant disability/incapacity.
     */
    ResultsInPersistentOrSignificantDisabilityIncapacity: CodingArgs;
    /**
     * SeriousResultsInHospitalization: Requires inpatient hospitalization or causes prolongation of existing hospitalization.
     */
    RequiresOrProlongsInpatientHospitalization: CodingArgs;
};
/**
 * Overall seriousness of this event for the patient.
 */
export declare const AdverseEventSeriousnessCodings: AdverseEventSeriousnessCodingType;
//# sourceMappingURL=AdverseEventSeriousnessCodings.d.ts.map