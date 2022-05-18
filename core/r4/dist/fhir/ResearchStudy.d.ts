import * as fhir from '../fhir.js';
import { ResearchStudyObjectiveTypeCodingType } from '../fhirValueSets/ResearchStudyObjectiveTypeCodings.js';
import { ResearchStudyStatusCodingType } from '../fhirValueSets/ResearchStudyStatusCodings.js';
import { ResearchStudyStatusCodeType } from '../fhirValueSets/ResearchStudyStatusCodes.js';
import { ResearchStudyPrimPurpTypeCodingType } from '../fhirValueSets/ResearchStudyPrimPurpTypeCodings.js';
/**
 * Valid arguments for the ResearchStudyArm type.
 */
export interface ResearchStudyArmArgs extends fhir.BackboneElementArgs {
    /**
     * Unique, human-readable label for this arm of the study.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * A succinct description of the path through the study that would be followed by a subject adhering to this arm.
     */
    description?: fhir.FhirString | string | undefined;
}
/**
 * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
 */
export declare class ResearchStudyArm extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Unique, human-readable label for this arm of the study.
     */
    name: fhir.FhirString | null;
    /**
     * Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * A succinct description of the path through the study that would be followed by a subject adhering to this arm.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Default constructor for ResearchStudyArm - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ResearchStudyArmArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ResearchStudyObjective type.
 */
export interface ResearchStudyObjectiveArgs extends fhir.BackboneElementArgs {
    /**
     * Unique, human-readable label for this objective of the study.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * The kind of study objective.
     */
    type?: fhir.CodeableConceptArgs | undefined;
}
/**
 * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
 */
export declare class ResearchStudyObjective extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Unique, human-readable label for this objective of the study.
     */
    name?: fhir.FhirString | undefined;
    /**
     * The kind of study objective.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ResearchStudyObjective - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ResearchStudyObjectiveArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for type (ResearchStudy.objective.type)
     */
    static typePreferredCoding(): ResearchStudyObjectiveTypeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ResearchStudy type.
 */
export interface ResearchStudyArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ResearchStudy" | undefined;
    /**
     * Identifiers assigned to this research study by the sponsor or other systems.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A short, descriptive user-friendly label for the study.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * The set of steps expected to be performed as part of the execution of the study.
     */
    protocol?: fhir.ReferenceArgs[] | undefined;
    /**
     * A larger research study of which this particular study is a component or step.
     */
    partOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * The current state of the study.
     */
    status: ResearchStudyStatusCodeType | null;
    /**
     * The type of study based upon the intent of the study's activities. A classification of the intent of the study.
     */
    primaryPurposeType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
     */
    phase?: fhir.CodeableConceptArgs | undefined;
    /**
     * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
     */
    focus?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code.
     */
    condition?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Contact details to assist a user in learning more about or engaging with the study.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * Citations, references and other related documents.
     */
    relatedArtifact?: fhir.RelatedArtifactArgs[] | undefined;
    /**
     * Key terms to aid in searching for or filtering the study.
     */
    keyword?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates a country, state or other region where the study is taking place.
     */
    location?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A full description of how the study is being conducted.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the ResearchSubject resource.
     */
    enrollment?: fhir.ReferenceArgs[] | undefined;
    /**
     * Identifies the start date and the expected (or actual, depending on status) end date for the study.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * An organization that initiates the investigation and is legally responsible for the study.
     */
    sponsor?: fhir.ReferenceArgs | undefined;
    /**
     * A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation.
     */
    principalInvestigator?: fhir.ReferenceArgs | undefined;
    /**
     * A facility in which study activities are conducted.
     */
    site?: fhir.ReferenceArgs[] | undefined;
    /**
     * A description and/or code explaining the premature termination of the study.
     */
    reasonStopped?: fhir.CodeableConceptArgs | undefined;
    /**
     * Comments made about the study by the performer, subject or other participants.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
     */
    arm?: fhir.ResearchStudyArmArgs[] | undefined;
    /**
     * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
     */
    objective?: fhir.ResearchStudyObjectiveArgs[] | undefined;
}
/**
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
 */
export declare class ResearchStudy extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ResearchStudy";
    /**
     * Identifiers assigned to this research study by the sponsor or other systems.
     */
    identifier?: fhir.Identifier[];
    /**
     * A short, descriptive user-friendly label for the study.
     */
    title?: fhir.FhirString | undefined;
    /**
     * The set of steps expected to be performed as part of the execution of the study.
     */
    protocol?: fhir.Reference[];
    /**
     * A larger research study of which this particular study is a component or step.
     */
    partOf?: fhir.Reference[];
    /**
     * The current state of the study.
     */
    status: ResearchStudyStatusCodeType | null;
    /**
     * The type of study based upon the intent of the study's activities. A classification of the intent of the study.
     */
    primaryPurposeType?: fhir.CodeableConcept | undefined;
    /**
     * The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
     */
    phase?: fhir.CodeableConcept | undefined;
    /**
     * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
     */
    category?: fhir.CodeableConcept[];
    /**
     * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
     */
    focus?: fhir.CodeableConcept[];
    /**
     * The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code.
     */
    condition?: fhir.CodeableConcept[];
    /**
     * Contact details to assist a user in learning more about or engaging with the study.
     */
    contact?: fhir.ContactDetail[];
    /**
     * Citations, references and other related documents.
     */
    relatedArtifact?: fhir.RelatedArtifact[];
    /**
     * Key terms to aid in searching for or filtering the study.
     */
    keyword?: fhir.CodeableConcept[];
    /**
     * Indicates a country, state or other region where the study is taking place.
     */
    location?: fhir.CodeableConcept[];
    /**
     * A full description of how the study is being conducted.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the ResearchSubject resource.
     */
    enrollment?: fhir.Reference[];
    /**
     * Identifies the start date and the expected (or actual, depending on status) end date for the study.
     */
    period?: fhir.Period | undefined;
    /**
     * An organization that initiates the investigation and is legally responsible for the study.
     */
    sponsor?: fhir.Reference | undefined;
    /**
     * A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation.
     */
    principalInvestigator?: fhir.Reference | undefined;
    /**
     * A facility in which study activities are conducted.
     */
    site?: fhir.Reference[];
    /**
     * A description and/or code explaining the premature termination of the study.
     */
    reasonStopped?: fhir.CodeableConcept | undefined;
    /**
     * Comments made about the study by the performer, subject or other participants.
     */
    note?: fhir.Annotation[];
    /**
     * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
     */
    arm?: fhir.ResearchStudyArm[];
    /**
     * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
     */
    objective?: fhir.ResearchStudyObjective[];
    /**
     * Default constructor for ResearchStudy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ResearchStudyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (ResearchStudy.status)
     */
    static statusRequiredCoding(): ResearchStudyStatusCodingType;
    /**
     * Extensible-bound Value Set for primaryPurposeType (ResearchStudy.primaryPurposeType)
     */
    static primaryPurposeTypeExtensibleCoding(): ResearchStudyPrimPurpTypeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=ResearchStudy.d.ts.map