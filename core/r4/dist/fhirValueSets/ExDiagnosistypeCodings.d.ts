import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes example Diagnosis Type codes.
 */
export declare type ExDiagnosistypeCodingType = {
    /**
     * admitting: The diagnosis given as the reason why the patient was admitted to the hospital.
     */
    AdmittingDiagnosis: CodingArgs;
    /**
     * clinical: A diagnosis made on the basis of medical signs and patient-reported symptoms, rather than diagnostic tests.
     */
    ClinicalDiagnosis: CodingArgs;
    /**
     * differential: One of a set of the possible diagnoses that could be connected to the signs, symptoms, and lab findings.
     */
    DifferentialDiagnosis: CodingArgs;
    /**
     * discharge: The diagnosis given when the patient is discharged from the hospital.
     */
    DischargeDiagnosis: CodingArgs;
    /**
     * laboratory: A diagnosis based significantly on laboratory reports or test results, rather than the physical examination of the patient.
     */
    LaboratoryDiagnosis: CodingArgs;
    /**
     * nursing: A diagnosis which identifies people's responses to situations in their lives, such as a readiness to change or a willingness to accept assistance.
     */
    NursingDiagnosis: CodingArgs;
    /**
     * prenatal: A diagnosis determined prior to birth.
     */
    PrenatalDiagnosis: CodingArgs;
    /**
     * principal: The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment.
     */
    PrincipalDiagnosis: CodingArgs;
    /**
     * radiology: A diagnosis based primarily on the results from medical imaging studies.
     */
    RadiologyDiagnosis: CodingArgs;
    /**
     * remote: A diagnosis determined using telemedicine techniques.
     */
    RemoteDiagnosis: CodingArgs;
    /**
     * retrospective: The labeling of an illness in a specific historical event using modern knowledge, methods and disease classifications.
     */
    RetrospectiveDiagnosis: CodingArgs;
    /**
     * self: A diagnosis determined by the patient.
     */
    SelfDiagnosis: CodingArgs;
};
/**
 * This value set includes example Diagnosis Type codes.
 */
export declare const ExDiagnosistypeCodings: ExDiagnosistypeCodingType;
//# sourceMappingURL=ExDiagnosistypeCodings.d.ts.map