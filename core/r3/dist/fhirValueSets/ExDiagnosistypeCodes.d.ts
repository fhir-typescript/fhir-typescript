/**
 * This value set includes example Diagnosis Type codes.
 */
export declare const ExDiagnosistypeCodes: {
    /**
     * admitting: The diagnosis given as the reason why the patient was admitted to the hospital.
     */
    readonly AdmittingDiagnosis: "admitting";
    /**
     * clinical: A diagnosis made on the basis of medical signs and patient-reported symptoms, rather than diagnostic tests.
     */
    readonly ClinicalDiagnosis: "clinical";
    /**
     * differential: One of a set of the possible diagnoses that could be connected to the signs, symptoms, and lab findings.
     */
    readonly DifferentialDiagnosis: "differential";
    /**
     * discharge: The diagnosis given when the patient is discharged from the hospital.
     */
    readonly DischargeDiagnosis: "discharge";
    /**
     * laboratory: A diagnosis based significantly on laboratory reports or test results, rather than the physical examination of the patient.
     */
    readonly LaboratoryDiagnosis: "laboratory";
    /**
     * nursing: A diagnosis which identifies people's responses to situations in their lives, such as a readiness to change or a willingness to accept assistance.
     */
    readonly NursingDiagnosis: "nursing";
    /**
     * prenatal: A diagnosis determined prior to birth.
     */
    readonly PrenatalDiagnosis: "prenatal";
    /**
     * principal: The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment.
     */
    readonly PrincipalDiagnosis: "principal";
    /**
     * radiology: A diagnosis based primarily on the results from medical imaging studies.
     */
    readonly RadiologyDiagnosis: "radiology";
    /**
     * remote: A diagnosis determined using telemedicine techniques.
     */
    readonly RemoteDiagnosis: "remote";
    /**
     * retrospective: The labeling of an illness in a specific historical event using modern knowledge, methods and disease classifications.
     */
    readonly RetrospectiveDiagnosis: "retrospective";
    /**
     * self: A diagnosis determined by the patient.
     */
    readonly SelfDiagnosis: "self";
};
/**
 * This value set includes example Diagnosis Type codes.
 */
export declare type ExDiagnosistypeCodeType = typeof ExDiagnosistypeCodes[keyof typeof ExDiagnosistypeCodes];
//# sourceMappingURL=ExDiagnosistypeCodes.d.ts.map