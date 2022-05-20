// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ResearchStudy

import * as fhir from '../fhir.js';

// @ts-ignore
import { ResearchStudyObjectiveTypeCodings, ResearchStudyObjectiveTypeCodingType,} from '../fhirValueSets/ResearchStudyObjectiveTypeCodings.js';
// @ts-ignore
import { ResearchStudyObjectiveTypeCodes,  ResearchStudyObjectiveTypeCodeType } from '../fhirValueSets/ResearchStudyObjectiveTypeCodes.js';
// @ts-ignore
import { ResearchStudyStatusCodings, ResearchStudyStatusCodingType,} from '../fhirValueSets/ResearchStudyStatusCodings.js';
// @ts-ignore
import { ResearchStudyStatusCodes,  ResearchStudyStatusCodeType } from '../fhirValueSets/ResearchStudyStatusCodes.js';
// @ts-ignore
import { ResearchStudyPrimPurpTypeCodings, ResearchStudyPrimPurpTypeCodingType,} from '../fhirValueSets/ResearchStudyPrimPurpTypeCodings.js';
// @ts-ignore
import { ResearchStudyPrimPurpTypeCodes,  ResearchStudyPrimPurpTypeCodeType } from '../fhirValueSets/ResearchStudyPrimPurpTypeCodes.js';
// @ts-ignore
import { ResearchStudyPhaseCodings, ResearchStudyPhaseCodingType,} from '../fhirValueSets/ResearchStudyPhaseCodings.js';
// @ts-ignore
import { ResearchStudyPhaseCodes,  ResearchStudyPhaseCodeType } from '../fhirValueSets/ResearchStudyPhaseCodes.js';
// @ts-ignore
import { ConditionCodeCodings, ConditionCodeCodingType,} from '../fhirValueSets/ConditionCodeCodings.js';
// @ts-ignore
import { ConditionCodeCodes,  ConditionCodeCodeType } from '../fhirValueSets/ConditionCodeCodes.js';
// @ts-ignore
import { ResearchStudyReasonStoppedCodings, ResearchStudyReasonStoppedCodingType,} from '../fhirValueSets/ResearchStudyReasonStoppedCodings.js';
// @ts-ignore
import { ResearchStudyReasonStoppedCodes,  ResearchStudyReasonStoppedCodeType } from '../fhirValueSets/ResearchStudyReasonStoppedCodes.js';
/**
 * Valid arguments for the ResearchStudyArm type.
 */
export interface ResearchStudyArmArgs extends fhir.BackboneElementArgs {
  /**
   * Unique, human-readable label for this arm of the study.
   */
  name: fhir.FhirString|string|undefined;
  /**
   * Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * A succinct description of the path through the study that would be followed by a subject adhering to this arm.
   */
  description?: fhir.FhirString|string|undefined;
}

/**
 * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
 */
export class ResearchStudyArm extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ResearchStudyArm';
  /**
   * Unique, human-readable label for this arm of the study.
   */
  public name: fhir.FhirString|null;
  /**
   * Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * A succinct description of the path through the study that would be followed by a subject adhering to this arm.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Default constructor for ResearchStudyArm - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ResearchStudyArmArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    else { this.name = null; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['name']) {
      issues.push({ severity: 'error', code: 'required',  diagnostics: 'Missing required property name:fhir.FhirString fhir: ResearchStudy.arm.name:string', });
    }
    if (this["name"]) { issues.push(...this.name.doModelValidation()); }
    if (this["type"]) { issues.push(...this.type.doModelValidation()); }
    if (this["description"]) { issues.push(...this.description.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the ResearchStudyObjective type.
 */
export interface ResearchStudyObjectiveArgs extends fhir.BackboneElementArgs {
  /**
   * Unique, human-readable label for this objective of the study.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * The kind of study objective.
   */
  type?: fhir.CodeableConceptArgs|undefined;
}

/**
 * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
 */
export class ResearchStudyObjective extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ResearchStudyObjective';
  /**
   * Unique, human-readable label for this objective of the study.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * The kind of study objective.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for ResearchStudyObjective - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ResearchStudyObjectiveArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
  }
  /**
   * Preferred-bound Value Set for type (ResearchStudy.objective.type)
   */
  public static typePreferredCoding():ResearchStudyObjectiveTypeCodingType {
    return ResearchStudyObjectiveTypeCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["name"]) { issues.push(...this.name.doModelValidation()); }
    if (this["type"]) { issues.push(...this.type.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the ResearchStudy type.
 */
export interface ResearchStudyArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ResearchStudy"|undefined;
  /**
   * Identifiers assigned to this research study by the sponsor or other systems.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * A short, descriptive user-friendly label for the study.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * The set of steps expected to be performed as part of the execution of the study.
   */
  protocol?: fhir.ReferenceArgs[]|undefined;
  /**
   * A larger research study of which this particular study is a component or step.
   */
  partOf?: fhir.ReferenceArgs[]|undefined;
  /**
   * The current state of the study.
   */
  status: ResearchStudyStatusCodeType|null;
  /**
   * The type of study based upon the intent of the study's activities. A classification of the intent of the study.
   */
  primaryPurposeType?: fhir.CodeableConceptArgs|undefined;
  /**
   * The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
   */
  phase?: fhir.CodeableConceptArgs|undefined;
  /**
   * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
   */
  focus?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code.
   */
  condition?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Contact details to assist a user in learning more about or engaging with the study.
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
  /**
   * Citations, references and other related documents.
   */
  relatedArtifact?: fhir.RelatedArtifactArgs[]|undefined;
  /**
   * Key terms to aid in searching for or filtering the study.
   */
  keyword?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicates a country, state or other region where the study is taking place.
   */
  location?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * A full description of how the study is being conducted.
   */
  description?: fhir.FhirMarkdown|string|undefined;
  /**
   * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the ResearchSubject resource.
   */
  enrollment?: fhir.ReferenceArgs[]|undefined;
  /**
   * Identifies the start date and the expected (or actual, depending on status) end date for the study.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * An organization that initiates the investigation and is legally responsible for the study.
   */
  sponsor?: fhir.ReferenceArgs|undefined;
  /**
   * A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation.
   */
  principalInvestigator?: fhir.ReferenceArgs|undefined;
  /**
   * A facility in which study activities are conducted.
   */
  site?: fhir.ReferenceArgs[]|undefined;
  /**
   * A description and/or code explaining the premature termination of the study.
   */
  reasonStopped?: fhir.CodeableConceptArgs|undefined;
  /**
   * Comments made about the study by the performer, subject or other participants.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
   */
  arm?: fhir.ResearchStudyArmArgs[]|undefined;
  /**
   * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
   */
  objective?: fhir.ResearchStudyObjectiveArgs[]|undefined;
}

/**
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
 */
export class ResearchStudy extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ResearchStudy';
  /**
   * Resource Type Name
   */
  public override resourceType: "ResearchStudy";
  /**
   * Identifiers assigned to this research study by the sponsor or other systems.
   */
  public identifier?: fhir.Identifier[];
  /**
   * A short, descriptive user-friendly label for the study.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * The set of steps expected to be performed as part of the execution of the study.
   */
  public protocol?: fhir.Reference[];
  /**
   * A larger research study of which this particular study is a component or step.
   */
  public partOf?: fhir.Reference[];
  /**
   * The current state of the study.
   */
  public status: ResearchStudyStatusCodeType|null;
  /**
   * The type of study based upon the intent of the study's activities. A classification of the intent of the study.
   */
  public primaryPurposeType?: fhir.CodeableConcept|undefined;
  /**
   * The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
   */
  public phase?: fhir.CodeableConcept|undefined;
  /**
   * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
   */
  public category?: fhir.CodeableConcept[];
  /**
   * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
   */
  public focus?: fhir.CodeableConcept[];
  /**
   * The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code.
   */
  public condition?: fhir.CodeableConcept[];
  /**
   * Contact details to assist a user in learning more about or engaging with the study.
   */
  public contact?: fhir.ContactDetail[];
  /**
   * Citations, references and other related documents.
   */
  public relatedArtifact?: fhir.RelatedArtifact[];
  /**
   * Key terms to aid in searching for or filtering the study.
   */
  public keyword?: fhir.CodeableConcept[];
  /**
   * Indicates a country, state or other region where the study is taking place.
   */
  public location?: fhir.CodeableConcept[];
  /**
   * A full description of how the study is being conducted.
   */
  public description?: fhir.FhirMarkdown|undefined;
  /**
   * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the ResearchSubject resource.
   */
  public enrollment?: fhir.Reference[];
  /**
   * Identifies the start date and the expected (or actual, depending on status) end date for the study.
   */
  public period?: fhir.Period|undefined;
  /**
   * An organization that initiates the investigation and is legally responsible for the study.
   */
  public sponsor?: fhir.Reference|undefined;
  /**
   * A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation.
   */
  public principalInvestigator?: fhir.Reference|undefined;
  /**
   * A facility in which study activities are conducted.
   */
  public site?: fhir.Reference[];
  /**
   * A description and/or code explaining the premature termination of the study.
   */
  public reasonStopped?: fhir.CodeableConcept|undefined;
  /**
   * Comments made about the study by the performer, subject or other participants.
   */
  public note?: fhir.Annotation[];
  /**
   * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
   */
  public arm?: fhir.ResearchStudyArm[];
  /**
   * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
   */
  public objective?: fhir.ResearchStudyObjective[];
  /**
   * Default constructor for ResearchStudy - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ResearchStudyArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ResearchStudy';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['title']) { this.title = new fhir.FhirString({value: source.title}); }
    if (source['protocol']) { this.protocol = source.protocol.map((x) => new fhir.Reference(x)); }
    else { this.protocol = []; }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x)); }
    else { this.partOf = []; }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['primaryPurposeType']) { this.primaryPurposeType = new fhir.CodeableConcept(source.primaryPurposeType); }
    if (source['phase']) { this.phase = new fhir.CodeableConcept(source.phase); }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    else { this.category = []; }
    if (source['focus']) { this.focus = source.focus.map((x) => new fhir.CodeableConcept(x)); }
    else { this.focus = []; }
    if (source['condition']) { this.condition = source.condition.map((x) => new fhir.CodeableConcept(x)); }
    else { this.condition = []; }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x)); }
    else { this.contact = []; }
    if (source['relatedArtifact']) { this.relatedArtifact = source.relatedArtifact.map((x) => new fhir.RelatedArtifact(x)); }
    else { this.relatedArtifact = []; }
    if (source['keyword']) { this.keyword = source.keyword.map((x) => new fhir.CodeableConcept(x)); }
    else { this.keyword = []; }
    if (source['location']) { this.location = source.location.map((x) => new fhir.CodeableConcept(x)); }
    else { this.location = []; }
    if (source['description']) { this.description = new fhir.FhirMarkdown({value: source.description}); }
    if (source['enrollment']) { this.enrollment = source.enrollment.map((x) => new fhir.Reference(x)); }
    else { this.enrollment = []; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['sponsor']) { this.sponsor = new fhir.Reference(source.sponsor); }
    if (source['principalInvestigator']) { this.principalInvestigator = new fhir.Reference(source.principalInvestigator); }
    if (source['site']) { this.site = source.site.map((x) => new fhir.Reference(x)); }
    else { this.site = []; }
    if (source['reasonStopped']) { this.reasonStopped = new fhir.CodeableConcept(source.reasonStopped); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
    if (source['arm']) { this.arm = source.arm.map((x) => new fhir.ResearchStudyArm(x)); }
    else { this.arm = []; }
    if (source['objective']) { this.objective = source.objective.map((x) => new fhir.ResearchStudyObjective(x)); }
    else { this.objective = []; }
  }
  /**
   * Required-bound Value Set for status (ResearchStudy.status)
   */
  public static statusRequiredCoding():ResearchStudyStatusCodingType {
    return ResearchStudyStatusCodings;
  }
  /**
   * Extensible-bound Value Set for primaryPurposeType (ResearchStudy.primaryPurposeType)
   */
  public static primaryPurposeTypeExtensibleCoding():ResearchStudyPrimPurpTypeCodingType {
    return ResearchStudyPrimPurpTypeCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required',  diagnostics: 'Missing required property resourceType:"ResearchStudy" fhir: ResearchStudy.resourceType:"ResearchStudy"', });
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["title"]) { issues.push(...this.title.doModelValidation()); }
    if (this["protocol"]) { this.protocol.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["partOf"]) { this.partOf.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required',  diagnostics: 'Missing required property status:ResearchStudyStatusCodeType fhir: ResearchStudy.status:code', });
    }
    if (this["primaryPurposeType"]) { issues.push(...this.primaryPurposeType.doModelValidation()); }
    if (this["phase"]) { issues.push(...this.phase.doModelValidation()); }
    if (this["category"]) { this.category.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["focus"]) { this.focus.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["condition"]) { this.condition.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["contact"]) { this.contact.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["relatedArtifact"]) { this.relatedArtifact.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["keyword"]) { this.keyword.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["location"]) { this.location.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["description"]) { issues.push(...this.description.doModelValidation()); }
    if (this["enrollment"]) { this.enrollment.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["period"]) { issues.push(...this.period.doModelValidation()); }
    if (this["sponsor"]) { issues.push(...this.sponsor.doModelValidation()); }
    if (this["principalInvestigator"]) { issues.push(...this.principalInvestigator.doModelValidation()); }
    if (this["site"]) { this.site.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["reasonStopped"]) { issues.push(...this.reasonStopped.doModelValidation()); }
    if (this["note"]) { this.note.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["arm"]) { this.arm.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["objective"]) { this.objective.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
