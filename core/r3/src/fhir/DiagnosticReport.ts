// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DiagnosticReport

import * as fhir from '../fhir.js';

// @ts-ignore
import { PerformerRoleCodes,  PerformerRoleCodeType } from '../fhirValueSets/PerformerRoleCodes.js';
// @ts-ignore
import { PerformerRoleVsValidation } from '../fhirValueSets/PerformerRoleVsValidation.js';
// @ts-ignore
import { DiagnosticReportStatusCodes,  DiagnosticReportStatusCodeType } from '../fhirValueSets/DiagnosticReportStatusCodes.js';
// @ts-ignore
import { DiagnosticReportStatusVsValidation } from '../fhirValueSets/DiagnosticReportStatusVsValidation.js';
// @ts-ignore
import { DiagnosticServiceSectionsCodes,  DiagnosticServiceSectionsCodeType } from '../fhirValueSets/DiagnosticServiceSectionsCodes.js';
// @ts-ignore
import { DiagnosticServiceSectionsVsValidation } from '../fhirValueSets/DiagnosticServiceSectionsVsValidation.js';
// @ts-ignore
import { ReportCodes,  ReportCodeType } from '../fhirValueSets/ReportCodes.js';
// @ts-ignore
import { ReportVsValidation } from '../fhirValueSets/ReportVsValidation.js';
// @ts-ignore
import { ClinicalFindingsCodes,  ClinicalFindingsCodeType } from '../fhirValueSets/ClinicalFindingsCodes.js';
// @ts-ignore
import { ClinicalFindingsVsValidation } from '../fhirValueSets/ClinicalFindingsVsValidation.js';
/**
 * Valid arguments for the DiagnosticReportPerformer type.
 */
export interface DiagnosticReportPerformerArgs extends fhir.BackboneElementArgs {
  /**
   * Describes the type of participation (e.g.  a responsible party, author, or verifier).
   */
  role?: fhir.CodeableConceptArgs|undefined;
  /**
   * This is not necessarily the source of the atomic data items. It is the entity that takes responsibility for the clinical report.
   */
  actor: fhir.ReferenceArgs|null;
}

/**
 * Indicates who or what participated in producing the report.
 */
export class DiagnosticReportPerformer extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DiagnosticReportPerformer';
  /**
   * Describes the type of participation (e.g.  a responsible party, author, or verifier).
   */
  public role?: fhir.CodeableConcept|undefined;
  /**
   * This is not necessarily the source of the atomic data items. It is the entity that takes responsibility for the clinical report.
   */
  public actor: fhir.Reference|null;
  /**
   * Default constructor for DiagnosticReportPerformer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DiagnosticReportPerformerArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['role']) { this.role = new fhir.CodeableConcept(source.role); }
    if (source['actor']) { this.actor = new fhir.Reference(source.actor); }
    else { this.actor = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DiagnosticReport.performer' }
    iss.push(...this.vOS('role',exp));
    iss.push(...this.vRS('actor',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DiagnosticReportImage type.
 */
export interface DiagnosticReportImageArgs extends fhir.BackboneElementArgs {
  /**
   * The comment should be displayed with the image. It would be common for the report to include additional discussion of the image contents in other sections such as the conclusion.
   */
  comment?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DiagnosticReport.image.comment
   */
  _comment?:fhir.FhirElementArgs;
  /**
   * Reference to the image source.
   */
  link: fhir.ReferenceArgs|null;
}

/**
 * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
 */
export class DiagnosticReportImage extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DiagnosticReportImage';
  /**
   * The comment should be displayed with the image. It would be common for the report to include additional discussion of the image contents in other sections such as the conclusion.
   */
  public comment?: fhir.FhirString|undefined;
  /**
   * Reference to the image source.
   */
  public link: fhir.Reference|null;
  /**
   * Default constructor for DiagnosticReportImage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DiagnosticReportImageArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['comment']) { this.comment = new fhir.FhirString({value: source.comment}); }
    if (source['_comment']) {
      if (this.comment) { this.comment.addExtendedProperties(source._comment!); }
      else { this.comment = new fhir.FhirString(source._comment as Partial<fhir.FhirStringArgs>); }
    }
    if (source['link']) { this.link = new fhir.Reference(source.link); }
    else { this.link = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DiagnosticReport.image' }
    iss.push(...this.vOS('comment',exp));
    iss.push(...this.vRS('link',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DiagnosticReport type.
 */
export interface DiagnosticReportArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "DiagnosticReport"|undefined;
  /**
   * Usually assigned by the Information System of the diagnostic service provider (filler id).
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Note: Usually there is one test request for each result, however in some circumstances multiple test requests may be represented using a single test result resource. Note that there are also cases where one request leads to multiple reports.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * This is labeled as "Is Modifier" because applications need to take appropriate action if a report is withdrawn.
   */
  status: fhir.FhirCode<DiagnosticReportStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DiagnosticReport.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The level of granularity is defined by the category concepts in the value set. More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in DiagnosticReport.code.
   */
  category?: fhir.CodeableConceptArgs|undefined;
  /**
   * A code or name that describes this diagnostic report.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * The subject of the report. Usually, but not always, this is a patient. However diagnostic services also perform analyses on specimens collected from a variety of other sources.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter or episode but still be tied to the context of the encounter or episode (e.g. pre-admission lab tests).
   */
  context?: fhir.ReferenceArgs|undefined;
  /**
   * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
   */
  effective?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
   */
  effectiveDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
   */
  effectivePeriod?: fhir.PeriodArgs|undefined;
  /**
   * May be different from the update time of the resource itself, because that is the status of the record (potentially a secondary copy), not the actual release time of the report.
   */
  issued?: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: DiagnosticReport.issued
   */
  _issued?:fhir.FhirElementArgs;
  /**
   * Indicates who or what participated in producing the report.
   */
  performer?: fhir.DiagnosticReportPerformerArgs[]|undefined;
  /**
   * If the specimen is sufficiently specified with a code in the test result name, then this additional data may be redundant. If there are multiple specimens, these may be represented per observation or group.
   */
  specimen?: fhir.ReferenceArgs[]|undefined;
  /**
   * Observations that are part of this diagnostic report. Observations can be simple name/value pairs (e.g. "atomic" results), or they can be grouping observations that include references to other members of the group (e.g. "panels").
   */
  result?: fhir.ReferenceArgs[]|undefined;
  /**
   * ImagingStudy and ImageManifest and the image element are somewhat overlapping - typically, the list of image references in the image element will also be found in one of the imaging study resources. However each caters to different types of displays for different types of purposes. Neither, either, or both may be provided.
   */
  imagingStudy?: fhir.ReferenceArgs[]|undefined;
  /**
   * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
   */
  image?: fhir.DiagnosticReportImageArgs[]|undefined;
  /**
   * Concise and clinically contextualized impression / summary of the diagnostic report.
   */
  conclusion?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DiagnosticReport.conclusion
   */
  _conclusion?:fhir.FhirElementArgs;
  /**
   * Codes for the conclusion.
   */
  codedDiagnosis?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * "application/pdf" is recommended as the most reliable and interoperable in this context.
   */
  presentedForm?: fhir.AttachmentArgs[]|undefined;
}

/**
 * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 */
export class DiagnosticReport extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DiagnosticReport';
  /**
   * Resource Type Name
   */
  public override resourceType: "DiagnosticReport";
  /**
   * Usually assigned by the Information System of the diagnostic service provider (filler id).
   */
  public identifier: fhir.Identifier[];
  /**
   * Note: Usually there is one test request for each result, however in some circumstances multiple test requests may be represented using a single test result resource. Note that there are also cases where one request leads to multiple reports.
   */
  public basedOn: fhir.Reference[];
  /**
   * This is labeled as "Is Modifier" because applications need to take appropriate action if a report is withdrawn.
   */
  public status: fhir.FhirCode<DiagnosticReportStatusCodeType>|null;
  /**
   * The level of granularity is defined by the category concepts in the value set. More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in DiagnosticReport.code.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * A code or name that describes this diagnostic report.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * The subject of the report. Usually, but not always, this is a patient. However diagnostic services also perform analyses on specimens collected from a variety of other sources.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter or episode but still be tied to the context of the encounter or episode (e.g. pre-admission lab tests).
   */
  public context?: fhir.Reference|undefined;
  /**
   * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
   */
  public effective?: (fhir.FhirDateTime|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element DiagnosticReport.effective[x]
   */
  protected static readonly _fts_effectiveIsChoice:true = true;
  /**
   * May be different from the update time of the resource itself, because that is the status of the record (potentially a secondary copy), not the actual release time of the report.
   */
  public issued?: fhir.FhirInstant|undefined;
  /**
   * Indicates who or what participated in producing the report.
   */
  public performer: fhir.DiagnosticReportPerformer[];
  /**
   * If the specimen is sufficiently specified with a code in the test result name, then this additional data may be redundant. If there are multiple specimens, these may be represented per observation or group.
   */
  public specimen: fhir.Reference[];
  /**
   * Observations that are part of this diagnostic report. Observations can be simple name/value pairs (e.g. "atomic" results), or they can be grouping observations that include references to other members of the group (e.g. "panels").
   */
  public result: fhir.Reference[];
  /**
   * ImagingStudy and ImageManifest and the image element are somewhat overlapping - typically, the list of image references in the image element will also be found in one of the imaging study resources. However each caters to different types of displays for different types of purposes. Neither, either, or both may be provided.
   */
  public imagingStudy: fhir.Reference[];
  /**
   * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
   */
  public image: fhir.DiagnosticReportImage[];
  /**
   * Concise and clinically contextualized impression / summary of the diagnostic report.
   */
  public conclusion?: fhir.FhirString|undefined;
  /**
   * Codes for the conclusion.
   */
  public codedDiagnosis: fhir.CodeableConcept[];
  /**
   * "application/pdf" is recommended as the most reliable and interoperable in this context.
   */
  public presentedForm: fhir.Attachment[];
  /**
   * Default constructor for DiagnosticReport - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DiagnosticReportArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'DiagnosticReport';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    else { this.basedOn = []; }
    if (source['status']) { this.status = new fhir.FhirCode<DiagnosticReportStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<DiagnosticReportStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['context']) { this.context = new fhir.Reference(source.context); }
    if (source['effective']) { this.effective = source.effective; }
    else if (source['effectiveDateTime']) { this.effective = new fhir.FhirDateTime({value: source.effectiveDateTime}); }
    else if (source['effectivePeriod']) { this.effective = new fhir.Period(source.effectivePeriod); }
    if (source['issued']) { this.issued = new fhir.FhirInstant({value: source.issued}); }
    if (source['_issued']) {
      if (this.issued) { this.issued.addExtendedProperties(source._issued!); }
      else { this.issued = new fhir.FhirInstant(source._issued as Partial<fhir.FhirInstantArgs>); }
    }
    if (source['performer']) { this.performer = source.performer.map((x) => new fhir.DiagnosticReportPerformer(x)); }
    else { this.performer = []; }
    if (source['specimen']) { this.specimen = source.specimen.map((x) => new fhir.Reference(x)); }
    else { this.specimen = []; }
    if (source['result']) { this.result = source.result.map((x) => new fhir.Reference(x)); }
    else { this.result = []; }
    if (source['imagingStudy']) { this.imagingStudy = source.imagingStudy.map((x) => new fhir.Reference(x)); }
    else { this.imagingStudy = []; }
    if (source['image']) { this.image = source.image.map((x) => new fhir.DiagnosticReportImage(x)); }
    else { this.image = []; }
    if (source['conclusion']) { this.conclusion = new fhir.FhirString({value: source.conclusion}); }
    if (source['_conclusion']) {
      if (this.conclusion) { this.conclusion.addExtendedProperties(source._conclusion!); }
      else { this.conclusion = new fhir.FhirString(source._conclusion as Partial<fhir.FhirStringArgs>); }
    }
    if (source['codedDiagnosis']) { this.codedDiagnosis = source.codedDiagnosis.map((x) => new fhir.CodeableConcept(x)); }
    else { this.codedDiagnosis = []; }
    if (source['presentedForm']) { this.presentedForm = source.presentedForm.map((x) => new fhir.Attachment(x)); }
    else { this.presentedForm = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DiagnosticReport' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOA('basedOn',exp));
    iss.push(...this.vRSV('status',exp,'DiagnosticReportStatus',DiagnosticReportStatusVsValidation,'r'));
    iss.push(...this.vOS('category',exp));
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vOS('context',exp));
    iss.push(...this.vOS('effective',exp));
    iss.push(...this.vOS('issued',exp));
    iss.push(...this.vOA('performer',exp));
    iss.push(...this.vOA('specimen',exp));
    iss.push(...this.vOA('result',exp));
    iss.push(...this.vOA('imagingStudy',exp));
    iss.push(...this.vOA('image',exp));
    iss.push(...this.vOS('conclusion',exp));
    iss.push(...this.vOA('codedDiagnosis',exp));
    iss.push(...this.vOA('presentedForm',exp));
    return iss;
  }
}