import * as fhir from '../fhir.js';
import { ResearchStudyStatusCodeType } from '../fhirValueSets/ResearchStudyStatusCodes.js';
/**
 * Valid arguments for the ResearchStudyArm type.
 */
export interface ResearchStudyArmArgs extends fhir.BackboneElementArgs {
    /**
     * Unique, human-readable label for this arm of the study.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ResearchStudy.arm.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * A succinct description of the path through the study that would be followed by a subject adhering to this arm.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ResearchStudy.arm.description
     */
    _description?: fhir.FhirElementArgs;
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
    code?: fhir.CodeableConcept | undefined;
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
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * Extended properties for primitive element: ResearchStudy.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * The set of steps expected to be performed as part of the execution of the study.
     */
    protocol?: fhir.ReferenceArgs[] | undefined;
    /**
     * A larger research study of which this particular study is a component or step.
     */
    partOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<ResearchStudyStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ResearchStudy.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The condition(s), medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
     */
    focus?: fhir.CodeableConceptArgs[] | undefined;
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
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A full description of how the study is being conducted.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ResearchStudy.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the ResearchSubject resource.
     */
    enrollment?: fhir.ReferenceArgs[] | undefined;
    /**
     * Identifies the start date and the expected (or actual, depending on status) end date for the study.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * The organization responsible for the execution of the study.
     */
    sponsor?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates the individual who has primary oversite of the execution of the study.
     */
    principalInvestigator?: fhir.ReferenceArgs | undefined;
    /**
     * Clinic, hospital or other healthcare location that is participating in the study.
     */
    site?: fhir.ReferenceArgs[] | undefined;
    /**
     * A description and/or code explaining the premature termination of the study.
     */
    reasonStopped?: fhir.CodeableConceptArgs | undefined;
    /**
     * Comments made about the event by the performer, subject or other participants.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
     */
    arm?: fhir.ResearchStudyArmArgs[] | undefined;
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
    identifier: fhir.Identifier[];
    /**
     * A short, descriptive user-friendly label for the study.
     */
    title?: fhir.FhirString | undefined;
    /**
     * The set of steps expected to be performed as part of the execution of the study.
     */
    protocol: fhir.Reference[];
    /**
     * A larger research study of which this particular study is a component or step.
     */
    partOf: fhir.Reference[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<ResearchStudyStatusCodeType> | null;
    /**
     * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
     */
    category: fhir.CodeableConcept[];
    /**
     * The condition(s), medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
     */
    focus: fhir.CodeableConcept[];
    /**
     * Contact details to assist a user in learning more about or engaging with the study.
     */
    contact: fhir.ContactDetail[];
    /**
     * Citations, references and other related documents.
     */
    relatedArtifact: fhir.RelatedArtifact[];
    /**
     * Key terms to aid in searching for or filtering the study.
     */
    keyword: fhir.CodeableConcept[];
    /**
     * Indicates a country, state or other region where the study is taking place.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * A full description of how the study is being conducted.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the ResearchSubject resource.
     */
    enrollment: fhir.Reference[];
    /**
     * Identifies the start date and the expected (or actual, depending on status) end date for the study.
     */
    period?: fhir.Period | undefined;
    /**
     * The organization responsible for the execution of the study.
     */
    sponsor?: fhir.Reference | undefined;
    /**
     * Indicates the individual who has primary oversite of the execution of the study.
     */
    principalInvestigator?: fhir.Reference | undefined;
    /**
     * Clinic, hospital or other healthcare location that is participating in the study.
     */
    site: fhir.Reference[];
    /**
     * A description and/or code explaining the premature termination of the study.
     */
    reasonStopped?: fhir.CodeableConcept | undefined;
    /**
     * Comments made about the event by the performer, subject or other participants.
     */
    note: fhir.Annotation[];
    /**
     * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
     */
    arm: fhir.ResearchStudyArm[];
    /**
     * Default constructor for ResearchStudy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ResearchStudyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ResearchStudy.d.ts.map