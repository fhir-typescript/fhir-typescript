import * as fhir from '../fhirJson.js';
/**
 * Describes the entity that is suspected to have caused the adverse event.
 */
export interface AdverseEventSuspectEntity extends fhir.BackboneElement {
    /**
     * Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
     */
    instance: fhir.Reference | null;
    /**
     * causality1 | causality2.
     */
    causality?: 'causality1' | 'causality2' | undefined;
    /**
     * Extended properties for primitive element: AdverseEvent.suspectEntity.causality
     */
    _causality?: fhir.FhirElement;
    /**
     * assess1 | assess2.
     */
    causalityAssessment?: fhir.CodeableConcept | undefined;
    /**
     * AdverseEvent.suspectEntity.causalityProductRelatedness.
     */
    causalityProductRelatedness?: string | undefined;
    /**
     * Extended properties for primitive element: AdverseEvent.suspectEntity.causalityProductRelatedness
     */
    _causalityProductRelatedness?: fhir.FhirElement;
    /**
     * method1 | method2.
     */
    causalityMethod?: fhir.CodeableConcept | undefined;
    /**
     * AdverseEvent.suspectEntity.causalityAuthor.
     */
    causalityAuthor?: fhir.Reference | undefined;
    /**
     * result1 | result2.
     */
    causalityResult?: fhir.CodeableConcept | undefined;
}
/**
 * Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 */
export interface AdverseEvent extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "AdverseEvent" | null;
    /**
     * The identifier(s) of this adverse event that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itsefl is not appropriate.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The type of event which is important to characterize what occurred and caused harm to the subject, or had the potential to cause harm to the subject.
     */
    category?: 'AE' | 'PAE' | undefined;
    /**
     * Extended properties for primitive element: AdverseEvent.category
     */
    _category?: fhir.FhirElement;
    /**
     * This element defines the specific type of event that occurred or that was prevented from occurring.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * This subject or group impacted by the event.  With a prospective adverse event, there will be no subject as the adverse event was prevented.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The date (and perhaps time) when the adverse event occurred.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: AdverseEvent.date
     */
    _date?: fhir.FhirElement;
    /**
     * Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).
     */
    reaction?: (fhir.Reference | null)[] | undefined;
    /**
     * The information about where the adverse event occurred.
     */
    location?: fhir.Reference | undefined;
    /**
     * Describes the seriousness or severity of the adverse event.
     */
    seriousness?: fhir.CodeableConcept | undefined;
    /**
     * Describes the type of outcome from the adverse event.
     */
    outcome?: 'fatal' | 'ongoing' | 'recovering' | 'resolved' | 'resolvedWithSequelae' | 'unknown' | undefined;
    /**
     * Information on who recorded the adverse event.  May be the patient or a practitioner.
     */
    recorder?: fhir.Reference | undefined;
    /**
     * Parties that may or should contribute or have contributed information to the Act. Such information includes information leading to the decision to perform the Act and how to perform the Act (e.g. consultant), information that the Act itself seeks to reveal (e.g. informant of clinical history), or information about what Act was performed (e.g. informant witness).
     */
    eventParticipant?: fhir.Reference | undefined;
    /**
     * Describes the adverse event in text.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: AdverseEvent.description
     */
    _description?: fhir.FhirElement;
    /**
     * Describes the entity that is suspected to have caused the adverse event.
     */
    suspectEntity?: (fhir.AdverseEventSuspectEntity | null)[] | undefined;
    /**
     * AdverseEvent.subjectMedicalHistory.
     */
    subjectMedicalHistory?: (fhir.Reference | null)[] | undefined;
    /**
     * AdverseEvent.referenceDocument.
     */
    referenceDocument?: (fhir.Reference | null)[] | undefined;
    /**
     * AdverseEvent.study.
     */
    study?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=AdverseEvent.d.ts.map