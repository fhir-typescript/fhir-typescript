import * as fhir from '../fhir.js';
import { AdverseEventActualityCodingType } from '../fhirValueSets/AdverseEventActualityCodings.js';
import { AdverseEventActualityCodeType } from '../fhirValueSets/AdverseEventActualityCodes.js';
import { AdverseEventCategoryCodingType } from '../fhirValueSets/AdverseEventCategoryCodings.js';
import { AdverseEventSeverityCodingType } from '../fhirValueSets/AdverseEventSeverityCodings.js';
import { AdverseEventOutcomeCodingType } from '../fhirValueSets/AdverseEventOutcomeCodings.js';
/**
 * Valid arguments for the AdverseEventSuspectEntityCausality type.
 */
export interface AdverseEventSuspectEntityCausalityArgs extends fhir.BackboneElementArgs {
    /**
     * Assessment of if the entity caused the event.
     */
    assessment?: fhir.CodeableConceptArgs | undefined;
    /**
     * AdverseEvent.suspectEntity.causalityProductRelatedness.
     */
    productRelatedness?: fhir.FhirString | string | undefined;
    /**
     * AdverseEvent.suspectEntity.causalityAuthor.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * ProbabilityScale | Bayesian | Checklist.
     */
    method?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Information on the possible cause of the event.
 */
export declare class AdverseEventSuspectEntityCausality extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Assessment of if the entity caused the event.
     */
    assessment?: fhir.CodeableConcept | undefined;
    /**
     * AdverseEvent.suspectEntity.causalityProductRelatedness.
     */
    productRelatedness?: fhir.FhirString | undefined;
    /**
     * AdverseEvent.suspectEntity.causalityAuthor.
     */
    author?: fhir.Reference | undefined;
    /**
     * ProbabilityScale | Bayesian | Checklist.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for AdverseEventSuspectEntityCausality - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AdverseEventSuspectEntityCausalityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AdverseEventSuspectEntity type.
 */
export interface AdverseEventSuspectEntityArgs extends fhir.BackboneElementArgs {
    /**
     * Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
     */
    instance: fhir.ReferenceArgs | null;
    /**
     * Information on the possible cause of the event.
     */
    causality?: fhir.AdverseEventSuspectEntityCausalityArgs[] | undefined;
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
     * Information on the possible cause of the event.
     */
    causality?: fhir.AdverseEventSuspectEntityCausality[];
    /**
     * Default constructor for AdverseEventSuspectEntity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AdverseEventSuspectEntityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
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
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Whether the event actually happened, or just had the potential to. Note that this is independent of whether anyone was affected or harmed or how severely.
     */
    actuality: AdverseEventActualityCodeType | null;
    /**
     * The overall type of event, intended for search and filtering purposes.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element defines the specific type of event that occurred or that was prevented from occurring.
     */
    event?: fhir.CodeableConceptArgs | undefined;
    /**
     * If AdverseEvent.resultingCondition differs among members of the group, then use Patient as the subject.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.  For example, if a medication administration was considered an adverse event because it resulted in a rash, then the encounter when the medication administration was given is the context.  If the patient reports the AdverseEvent during a second encounter, that second encounter is not the context.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * The date (and perhaps time) when the adverse event occurred.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Estimated or actual date the AdverseEvent began, in the opinion of the reporter.
     */
    detected?: fhir.FhirDateTime | string | undefined;
    /**
     * The recordedDate represents the date when this particular AdverseEvent record was created in the system, not the date of the most recent update.  The date of the last record modification can be retrieved from the resource metadata.
     */
    recordedDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).
     */
    resultingCondition?: fhir.ReferenceArgs[] | undefined;
    /**
     * The information about where the adverse event occurred.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * Assessment whether this event was of real importance.
     */
    seriousness?: fhir.CodeableConceptArgs | undefined;
    /**
     * Describes the severity of the adverse event, in relation to the subject. Contrast to AdverseEvent.seriousness - a severe rash might not be serious, but a mild heart problem is.
     */
    severity?: fhir.CodeableConceptArgs | undefined;
    /**
     * Describes the type of outcome from the adverse event.
     */
    outcome?: fhir.CodeableConceptArgs | undefined;
    /**
     * Information on who recorded the adverse event.  May be the patient or a practitioner.
     */
    recorder?: fhir.ReferenceArgs | undefined;
    /**
     * Parties that may or should contribute or have contributed information to the adverse event, which can consist of one or more activities.  Such information includes information leading to the decision to perform the activity and how to perform the activity (e.g. consultant), information that the activity itself seeks to reveal (e.g. informant of clinical history), or information about what activity was performed (e.g. informant witness).
     */
    contributor?: fhir.ReferenceArgs[] | undefined;
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
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Whether the event actually happened, or just had the potential to. Note that this is independent of whether anyone was affected or harmed or how severely.
     */
    actuality: AdverseEventActualityCodeType | null;
    /**
     * The overall type of event, intended for search and filtering purposes.
     */
    category?: fhir.CodeableConcept[];
    /**
     * This element defines the specific type of event that occurred or that was prevented from occurring.
     */
    event?: fhir.CodeableConcept | undefined;
    /**
     * If AdverseEvent.resultingCondition differs among members of the group, then use Patient as the subject.
     */
    subject: fhir.Reference | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.  For example, if a medication administration was considered an adverse event because it resulted in a rash, then the encounter when the medication administration was given is the context.  If the patient reports the AdverseEvent during a second encounter, that second encounter is not the context.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The date (and perhaps time) when the adverse event occurred.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Estimated or actual date the AdverseEvent began, in the opinion of the reporter.
     */
    detected?: fhir.FhirDateTime | undefined;
    /**
     * The recordedDate represents the date when this particular AdverseEvent record was created in the system, not the date of the most recent update.  The date of the last record modification can be retrieved from the resource metadata.
     */
    recordedDate?: fhir.FhirDateTime | undefined;
    /**
     * Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).
     */
    resultingCondition?: fhir.Reference[];
    /**
     * The information about where the adverse event occurred.
     */
    location?: fhir.Reference | undefined;
    /**
     * Assessment whether this event was of real importance.
     */
    seriousness?: fhir.CodeableConcept | undefined;
    /**
     * Describes the severity of the adverse event, in relation to the subject. Contrast to AdverseEvent.seriousness - a severe rash might not be serious, but a mild heart problem is.
     */
    severity?: fhir.CodeableConcept | undefined;
    /**
     * Describes the type of outcome from the adverse event.
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * Information on who recorded the adverse event.  May be the patient or a practitioner.
     */
    recorder?: fhir.Reference | undefined;
    /**
     * Parties that may or should contribute or have contributed information to the adverse event, which can consist of one or more activities.  Such information includes information leading to the decision to perform the activity and how to perform the activity (e.g. consultant), information that the activity itself seeks to reveal (e.g. informant of clinical history), or information about what activity was performed (e.g. informant witness).
     */
    contributor?: fhir.Reference[];
    /**
     * Describes the entity that is suspected to have caused the adverse event.
     */
    suspectEntity?: fhir.AdverseEventSuspectEntity[];
    /**
     * AdverseEvent.subjectMedicalHistory.
     */
    subjectMedicalHistory?: fhir.Reference[];
    /**
     * AdverseEvent.referenceDocument.
     */
    referenceDocument?: fhir.Reference[];
    /**
     * AdverseEvent.study.
     */
    study?: fhir.Reference[];
    /**
     * Default constructor for AdverseEvent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AdverseEventArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for actuality (AdverseEvent.actuality)
     */
    static actualityRequiredCoding(): AdverseEventActualityCodingType;
    /**
     * Extensible-bound Value Set for category (AdverseEvent.category)
     */
    static categoryExtensibleCoding(): AdverseEventCategoryCodingType;
    /**
     * Required-bound Value Set for severity (AdverseEvent.severity)
     */
    static severityRequiredCoding(): AdverseEventSeverityCodingType;
    /**
     * Required-bound Value Set for outcome (AdverseEvent.outcome)
     */
    static outcomeRequiredCoding(): AdverseEventOutcomeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=AdverseEvent.d.ts.map