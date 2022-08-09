// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: ResearchStudy

import * as fhir from '../fhir.js';

// @ts-ignore
import { ResearchStudyStatusCodes,  ResearchStudyStatusCodeType } from '../fhirValueSets/ResearchStudyStatusCodes.js';
// @ts-ignore
import { ResearchStudyStatusVsValidation } from '../fhirValueSets/ResearchStudyStatusVsValidation.js';
// @ts-ignore
import { JurisdictionCodes,  JurisdictionCodeType } from '../fhirValueSets/JurisdictionCodes.js';
// @ts-ignore
import { JurisdictionVsValidation } from '../fhirValueSets/JurisdictionVsValidation.js';
/**
 * Valid arguments for the ResearchStudyArm type.
 */
export interface ResearchStudyArmArgs extends fhir.BackboneElementArgs {
  /**
   * Unique, human-readable label for this arm of the study.
   */
  name: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ResearchStudy.arm.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * A succinct description of the path through the study that would be followed by a subject adhering to this arm.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ResearchStudy.arm.description
   */
  _description?:fhir.FhirElementArgs;
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
  public code?: fhir.CodeableConcept|undefined;
  /**
   * A succinct description of the path through the study that would be followed by a subject adhering to this arm.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Default constructor for ResearchStudyArm - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ResearchStudyArmArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['name'] !== undefined) { this.name = new fhir.FhirString({value: source.name}, options); }
    else { this.name = null; }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code, options); }
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ResearchStudy.arm' }
    iss.push(...this.vRS('name',exp));
    iss.push(...this.vOS('code',exp));
    iss.push(...this.vOS('description',exp));
    return iss;
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
   * Extended properties for primitive element: ResearchStudy.title
   */
  _title?:fhir.FhirElementArgs;
  /**
   * The set of steps expected to be performed as part of the execution of the study.
   */
  protocol?: fhir.ReferenceArgs[]|undefined;
  /**
   * A larger research study of which this particular study is a component or step.
   */
  partOf?: fhir.ReferenceArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<ResearchStudyStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ResearchStudy.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The condition(s), medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
   */
  focus?: fhir.CodeableConceptArgs[]|undefined;
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
  jurisdiction?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * A full description of how the study is being conducted.
   */
  description?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: ResearchStudy.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the ResearchSubject resource.
   */
  enrollment?: fhir.ReferenceArgs[]|undefined;
  /**
   * Identifies the start date and the expected (or actual, depending on status) end date for the study.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * The organization responsible for the execution of the study.
   */
  sponsor?: fhir.ReferenceArgs|undefined;
  /**
   * Indicates the individual who has primary oversite of the execution of the study.
   */
  principalInvestigator?: fhir.ReferenceArgs|undefined;
  /**
   * Clinic, hospital or other healthcare location that is participating in the study.
   */
  site?: fhir.ReferenceArgs[]|undefined;
  /**
   * A description and/or code explaining the premature termination of the study.
   */
  reasonStopped?: fhir.CodeableConceptArgs|undefined;
  /**
   * Comments made about the event by the performer, subject or other participants.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
   */
  arm?: fhir.ResearchStudyArmArgs[]|undefined;
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
  public identifier: fhir.Identifier[];
  /**
   * A short, descriptive user-friendly label for the study.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * The set of steps expected to be performed as part of the execution of the study.
   */
  public protocol: fhir.Reference[];
  /**
   * A larger research study of which this particular study is a component or step.
   */
  public partOf: fhir.Reference[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<ResearchStudyStatusCodeType>|null;
  /**
   * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
   */
  public category: fhir.CodeableConcept[];
  /**
   * The condition(s), medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
   */
  public focus: fhir.CodeableConcept[];
  /**
   * Contact details to assist a user in learning more about or engaging with the study.
   */
  public contact: fhir.ContactDetail[];
  /**
   * Citations, references and other related documents.
   */
  public relatedArtifact: fhir.RelatedArtifact[];
  /**
   * Key terms to aid in searching for or filtering the study.
   */
  public keyword: fhir.CodeableConcept[];
  /**
   * Indicates a country, state or other region where the study is taking place.
   */
  public jurisdiction: fhir.CodeableConcept[];
  /**
   * A full description of how the study is being conducted.
   */
  public description?: fhir.FhirMarkdown|undefined;
  /**
   * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the ResearchSubject resource.
   */
  public enrollment: fhir.Reference[];
  /**
   * Identifies the start date and the expected (or actual, depending on status) end date for the study.
   */
  public period?: fhir.Period|undefined;
  /**
   * The organization responsible for the execution of the study.
   */
  public sponsor?: fhir.Reference|undefined;
  /**
   * Indicates the individual who has primary oversite of the execution of the study.
   */
  public principalInvestigator?: fhir.Reference|undefined;
  /**
   * Clinic, hospital or other healthcare location that is participating in the study.
   */
  public site: fhir.Reference[];
  /**
   * A description and/or code explaining the premature termination of the study.
   */
  public reasonStopped?: fhir.CodeableConcept|undefined;
  /**
   * Comments made about the event by the performer, subject or other participants.
   */
  public note: fhir.Annotation[];
  /**
   * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
   */
  public arm: fhir.ResearchStudyArm[];
  /**
   * Default constructor for ResearchStudy - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ResearchStudyArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ResearchStudy';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['title'] !== undefined) { this.title = new fhir.FhirString({value: source.title}, options); }
    if (source['_title']) {
      if (this.title) { this.title.addExtendedProperties(source._title!); }
      else { this.title = new fhir.FhirString(source._title as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['protocol']) { this.protocol = source.protocol.map((x) => new fhir.Reference(x, options)); }
    else { this.protocol = []; }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x, options)); }
    else { this.partOf = []; }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<ResearchStudyStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ResearchStudyStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.category = []; }
    if (source['focus']) { this.focus = source.focus.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.focus = []; }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x, options)); }
    else { this.contact = []; }
    if (source['relatedArtifact']) { this.relatedArtifact = source.relatedArtifact.map((x) => new fhir.RelatedArtifact(x, options)); }
    else { this.relatedArtifact = []; }
    if (source['keyword']) { this.keyword = source.keyword.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.keyword = []; }
    if (source['jurisdiction']) { this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.jurisdiction = []; }
    if (source['description'] !== undefined) { this.description = new fhir.FhirMarkdown({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirMarkdown(source._description as Partial<fhir.FhirMarkdownArgs>, options); }
    }
    if (source['enrollment']) { this.enrollment = source.enrollment.map((x) => new fhir.Reference(x, options)); }
    else { this.enrollment = []; }
    if (source['period']) { this.period = new fhir.Period(source.period, options); }
    if (source['sponsor']) { this.sponsor = new fhir.Reference(source.sponsor, options); }
    if (source['principalInvestigator']) { this.principalInvestigator = new fhir.Reference(source.principalInvestigator, options); }
    if (source['site']) { this.site = source.site.map((x) => new fhir.Reference(x, options)); }
    else { this.site = []; }
    if (source['reasonStopped']) { this.reasonStopped = new fhir.CodeableConcept(source.reasonStopped, options); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x, options)); }
    else { this.note = []; }
    if (source['arm']) { this.arm = source.arm.map((x) => new fhir.ResearchStudyArm(x, options)); }
    else { this.arm = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ResearchStudy' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('title',exp));
    iss.push(...this.vOA('protocol',exp));
    iss.push(...this.vOA('partOf',exp));
    iss.push(...this.vRSV('status',exp,'ResearchStudyStatus',ResearchStudyStatusVsValidation,'r'));
    iss.push(...this.vOA('category',exp));
    iss.push(...this.vOA('focus',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vOA('relatedArtifact',exp));
    iss.push(...this.vOA('keyword',exp));
    iss.push(...this.vOA('jurisdiction',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOA('enrollment',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOS('sponsor',exp));
    iss.push(...this.vOS('principalInvestigator',exp));
    iss.push(...this.vOA('site',exp));
    iss.push(...this.vOS('reasonStopped',exp));
    iss.push(...this.vOA('note',exp));
    iss.push(...this.vOA('arm',exp));
    return iss;
  }
}
