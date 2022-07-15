import { CodingArgs } from '../fhir/Coding.js';
/**
 * Provides examples of actions to be performed.
 */
export declare type ActionCodingType = {
    /**
     * collect-information: The action indicates that information should be collected from a participant in the process.
     */
    CollectInformation: CodingArgs;
    /**
     * order-service: The action indicates that a particular service should be provided.
     */
    OrderAService: CodingArgs;
    /**
     * prescribe-medication: The action indicates that a particular medication should be prescribed to the patient.
     */
    PrescribeAMedication: CodingArgs;
    /**
     * propose-diagnosis: The action indicates that a particular diagnosis should be proposed.
     */
    ProposeADiagnosis: CodingArgs;
    /**
     * recommend-immunization: The action indicates that a particular immunization should be performed.
     */
    RecommendAnImmunization: CodingArgs;
    /**
     * record-detected-issue: The action indicates that a particular detected issue should be recorded.
     */
    RecordADetectedIssue: CodingArgs;
    /**
     * record-inference: The action indicates that a particular inference should be recorded.
     */
    RecordAnInference: CodingArgs;
    /**
     * report-flag: The action indicates that a particular flag should be reported.
     */
    ReportAFlag: CodingArgs;
    /**
     * send-message: The action indicates that a particular message should be sent to a participant in the process.
     */
    SendAMessage: CodingArgs;
};
/**
 * Provides examples of actions to be performed.
 */
export declare const ActionCodings: ActionCodingType;
//# sourceMappingURL=ActionCodings.d.ts.map