import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes example Diagnosis Type codes.
 */
export declare const ExDiagnosistypeCodings: {
    /**
     * admitting: The diagnosis given as the reason why the patient was admitted to the hospital.
     */
    readonly AdmittingDiagnosis: Coding;
    /**
     * clinical: A diagnosis made on the basis of medical signs and patient-reported symptoms, rather than diagnostic tests.
     */
    readonly ClinicalDiagnosis: Coding;
    /**
     * differential: One of a set of the possible diagnoses that could be connected to the signs, symptoms, and lab findings.
     */
    readonly DifferentialDiagnosis: Coding;
    /**
     * discharge: The diagnosis given when the patient is discharged from the hospital.
     */
    readonly DischargeDiagnosis: Coding;
    /**
     * laboratory: A diagnosis based significantly on laboratory reports or test results, rather than the physical examination of the patient.
     */
    readonly LaboratoryDiagnosis: Coding;
    /**
     * nursing: A diagnosis which identifies people's responses to situations in their lives, such as a readiness to change or a willingness to accept assistance.
     */
    readonly NursingDiagnosis: Coding;
    /**
     * prenatal: A diagnosis determined prior to birth.
     */
    readonly PrenatalDiagnosis: Coding;
    /**
     * principal: The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment.
     */
    readonly PrincipalDiagnosis: Coding;
    /**
     * radiology: A diagnosis based primarily on the results from medical imaging studies.
     */
    readonly RadiologyDiagnosis: Coding;
    /**
     * remote: A diagnosis determined using telemedicine techniques.
     */
    readonly RemoteDiagnosis: Coding;
    /**
     * retrospective: The labeling of an illness in a specific historical event using modern knowledge, methods and disease classifications.
     */
    readonly RetrospectiveDiagnosis: Coding;
    /**
     * self: A diagnosis determined by the patient.
     */
    readonly SelfDiagnosis: Coding;
};
/**
 * This value set includes example Diagnosis Type codes.
 */
export declare type ExDiagnosistypeCodingType = typeof ExDiagnosistypeCodings;
//# sourceMappingURL=ExDiagnosistypeCodings.d.ts.map