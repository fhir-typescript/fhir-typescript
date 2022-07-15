import * as fhir from '../fhir.js';
import { AdverseEventCausalityCodeType } from '../fhirValueSets/AdverseEventCausalityCodes.js';
import { AdverseEventCategoryCodeType } from '../fhirValueSets/AdverseEventCategoryCodes.js';
/**
 * Valid arguments for the AdverseEventSuspectEntity type.
 */
export interface AdverseEventSuspectEntityArgs extends fhir.BackboneElementArgs {
    /**
     * Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
     */
    instance: fhir.ReferenceArgs | null;
    /**
     * causality1 | causality2.
     */
    causality?: fhir.FhirCode<AdverseEventCausalityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: AdverseEvent.suspectEntity.causality
     */
    _causality?: fhir.FhirElementArgs;
    /**
     * assess1 | assess2.
     */
    causalityAssessment?: fhir.CodeableConceptArgs | undefined;
    /**
     * AdverseEvent.suspectEntity.causalityProductRelatedness.
     */
    causalityProductRelatedness?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: AdverseEvent.suspectEntity.causalityProductRelatedness
     */
    _causalityProductRelatedness?: fhir.FhirElementArgs;
    /**
     * method1 | method2.
     */
    causalityMethod?: fhir.CodeableConceptArgs | undefined;
    /**
     * AdverseEvent.suspectEntity.causalityAuthor.
     */
    causalityAuthor?: fhir.ReferenceArgs | undefined;
    /**
     * result1 | result2.
     */
    causalityResult?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Describes the entity that is suspected to have caused the adverse event.
 */
export declare class AdverseEventSuspectEntity extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
     */
    instance: fhir.Reference | null;
    /**
     * causality1 | causality2.
     */
    causality?: fhir.FhirCode<AdverseEventCausalityCodeType> | undefined;
    /**
     * assess1 | assess2.
     */
    causalityAssessment?: fhir.CodeableConcept | undefined;
    /**
     * AdverseEvent.suspectEntity.causalityProductRelatedness.
     */
    causalityProductRelatedness?: fhir.FhirString | undefined;
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
    /**
     * Default constructor for AdverseEventSuspectEntity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AdverseEventSuspectEntityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AdverseEvent type.
 */
export interface AdverseEventArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "AdverseEvent" | undefined;
    /**
     * The identifier(s) of this adverse event that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itsefl is not appropriate.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * The type of event which is important to characterize what occurred and caused harm to the subject, or had the potential to cause harm to the subject.
     */
    category?: fhir.FhirCode<AdverseEventCategoryCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: AdverseEvent.category
     */
    _category?: fhir.FhirElementArgs;
    /**
     * This element defines the specific type of event that occurred or that was prevented from occurring.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * This subject or group impacted by the event.  With a prospective adverse event, there will be no subject as the adverse event was prevented.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * The date (and perhaps time) when the adverse event occurred.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: AdverseEvent.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).
     */
    reaction?: fhir.ReferenceArgs[] | undefined;
    /**
     * The information about where the adverse event occurred.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * Describes the seriousness or severity of the adverse event.
     */
    seriousness?: fhir.CodeableConceptArgs | undefined;
    /**
     * Describes the type of outcome from the adverse event.
     */
    outcome?: fhir.CodeableConceptArgs | undefined;
    /**
     * Information on who recorded the adverse event.  May be the patient or a practitioner.
     */
    recorder?: fhir.ReferenceArgs | undefined;
    /**
     * Parties that may or should contribute or have contributed information to the Act. Such information includes information leading to the decision to perform the Act and how to perform the Act (e.g. consultant), information that the Act itself seeks to reveal (e.g. informant of clinical history), or information about what Act was performed (e.g. informant witness).
     */
    eventParticipant?: fhir.ReferenceArgs | undefined;
    /**
     * Describes the adverse event in text.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: AdverseEvent.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Describes the entity that is suspected to have caused the adverse event.
     */
    suspectEntity?: fhir.AdverseEventSuspectEntityArgs[] | undefined;
    /**
     * AdverseEvent.subjectMedicalHistory.
     */
    subjectMedicalHistory?: fhir.ReferenceArgs[] | undefined;
    /**
     * AdverseEvent.referenceDocument.
     */
    referenceDocument?: fhir.ReferenceArgs[] | undefined;
    /**
     * AdverseEvent.study.
     */
    study?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 */
export declare class AdverseEvent extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "AdverseEvent";
    /**
     * The identifier(s) of this adverse event that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itsefl is not appropriate.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The type of event which is important to characterize what occurred and caused harm to the subject, or had the potential to cause harm to the subject.
     */
    category?: fhir.FhirCode<AdverseEventCategoryCodeType> | undefined;
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
    date?: fhir.FhirDateTime | undefined;
    /**
     * Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).
     */
    reaction: fhir.Reference[];
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
    outcome?: fhir.CodeableConcept | undefined;
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
    description?: fhir.FhirString | undefined;
    /**
     * Describes the entity that is suspected to have caused the adverse event.
     */
    suspectEntity: fhir.AdverseEventSuspectEntity[];
    /**
     * AdverseEvent.subjectMedicalHistory.
     */
    subjectMedicalHistory: fhir.Reference[];
    /**
     * AdverseEvent.referenceDocument.
     */
    referenceDocument: fhir.Reference[];
    /**
     * AdverseEvent.study.
     */
    study: fhir.Reference[];
    /**
     * Default constructor for AdverseEvent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AdverseEventArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=AdverseEvent.d.ts.map