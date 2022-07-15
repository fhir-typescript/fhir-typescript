/**
 * A list of all the event resource types defined in this version of the FHIR specification.
 */
export declare const EventResourceTypesCodes: {
    /**
     * ChargeItem: Item containing charge code(s) associated with the provision of healthcare provider products.
     */
    readonly ChargeItem: "ChargeItem";
    /**
     * ClaimResponse: Remittance resource.
     */
    readonly ClaimResponse: "ClaimResponse";
    /**
     * ClinicalImpression: A clinical assessment performed when planning treatments and management strategies for a patient.
     */
    readonly ClinicalImpression: "ClinicalImpression";
    /**
     * Communication: A record of information transmitted from a sender to a receiver.
     */
    readonly Communication: "Communication";
    /**
     * Composition: A set of resources composed into a single coherent clinical statement with clinical attestation.
     */
    readonly Composition: "Composition";
    /**
     * Condition: Detailed information about conditions, problems or diagnoses.
     */
    readonly Condition: "Condition";
    /**
     * Consent: A healthcare consumer's policy choices to permits or denies recipients or roles to perform actions for specific purposes and periods of time.
     */
    readonly Consent: "Consent";
    /**
     * Coverage: Insurance or medical plan or a payment agreement.
     */
    readonly Coverage: "Coverage";
    /**
     * DeviceUseStatement: Record of use of a device.
     */
    readonly DeviceUseStatement: "DeviceUseStatement";
    /**
     * DiagnosticReport: A Diagnostic report - a combination of request information, atomic results, images, interpretation, as well as formatted reports.
     */
    readonly DiagnosticReport: "DiagnosticReport";
    /**
     * DocumentManifest: A list that defines a set of documents.
     */
    readonly DocumentManifest: "DocumentManifest";
    /**
     * DocumentReference: A reference to a document.
     */
    readonly DocumentReference: "DocumentReference";
    /**
     * Encounter: An interaction during which services are provided to the patient.
     */
    readonly Encounter: "Encounter";
    /**
     * EnrollmentResponse: EnrollmentResponse resource.
     */
    readonly EnrollmentResponse: "EnrollmentResponse";
    /**
     * EpisodeOfCare: An association of a Patient with an Organization and  Healthcare Provider(s) for a period of time that the Organization assumes some level of responsibility.
     */
    readonly EpisodeOfCare: "EpisodeOfCare";
    /**
     * ExplanationOfBenefit: Explanation of Benefit resource.
     */
    readonly ExplanationOfBenefit: "ExplanationOfBenefit";
    /**
     * FamilyMemberHistory: Information about patient's relatives, relevant for patient.
     */
    readonly FamilyMemberHistory: "FamilyMemberHistory";
    /**
     * GuidanceResponse: The formal response to a guidance request.
     */
    readonly GuidanceResponse: "GuidanceResponse";
    /**
     * ImagingStudy: A set of images produced in single study (one or more series of references images).
     */
    readonly ImagingStudy: "ImagingStudy";
    /**
     * Immunization: Immunization event information.
     */
    readonly Immunization: "Immunization";
    /**
     * MeasureReport: Results of a measure evaluation.
     */
    readonly MeasureReport: "MeasureReport";
    /**
     * Media: A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
     */
    readonly Media: "Media";
    /**
     * MedicationAdministration: Administration of medication to a patient.
     */
    readonly MedicationAdministration: "MedicationAdministration";
    /**
     * MedicationDispense: Dispensing a medication to a named patient.
     */
    readonly MedicationDispense: "MedicationDispense";
    /**
     * MedicationStatement: Record of medication being taken by a patient.
     */
    readonly MedicationStatement: "MedicationStatement";
    /**
     * Observation: Measurements and simple assertions.
     */
    readonly Observation: "Observation";
    /**
     * PaymentNotice: PaymentNotice request.
     */
    readonly PaymentNotice: "PaymentNotice";
    /**
     * PaymentReconciliation: PaymentReconciliation resource.
     */
    readonly PaymentReconciliation: "PaymentReconciliation";
    /**
     * Procedure: An action that is being or was performed on a patient.
     */
    readonly Procedure: "Procedure";
    /**
     * ProcessResponse: ProcessResponse resource.
     */
    readonly ProcessResponse: "ProcessResponse";
    /**
     * QuestionnaireResponse: A structured set of questions and their answers.
     */
    readonly QuestionnaireResponse: "QuestionnaireResponse";
    /**
     * RiskAssessment: Potential outcomes for a subject with likelihood.
     */
    readonly RiskAssessment: "RiskAssessment";
    /**
     * SupplyDelivery: Delivery of bulk Supplies.
     */
    readonly SupplyDelivery: "SupplyDelivery";
    /**
     * Task: A task to be performed.
     */
    readonly Task: "Task";
};
/**
 * A list of all the event resource types defined in this version of the FHIR specification.
 */
export declare type EventResourceTypesCodeType = typeof EventResourceTypesCodes[keyof typeof EventResourceTypesCodes];
//# sourceMappingURL=EventResourceTypesCodes.d.ts.map