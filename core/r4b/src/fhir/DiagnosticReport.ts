// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: DiagnosticReport

import * as fhir from '../fhir.js';

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
 * Valid arguments for the DiagnosticReportMedia type.
 */
export interface DiagnosticReportMediaArgs extends fhir.BackboneElementArgs {
  /**
   * The comment should be displayed with the image. It would be common for the report to include additional discussion of the image contents in other sections such as the conclusion.
   */
  comment?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DiagnosticReport.media.comment
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
export class DiagnosticReportMedia extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DiagnosticReportMedia';
  /**
   * The comment should be displayed with the image. It would be common for the report to include additional discussion of the image contents in other sections such as the conclusion.
   */
  public comment?: fhir.FhirString|undefined;
  /**
   * Reference to the image source.
   */
  public link: fhir.Reference|null;
  /**
   * Default constructor for DiagnosticReportMedia - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DiagnosticReportMediaArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
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
    if (exp === '') { exp = 'DiagnosticReport.media' }
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
   * The status of the diagnostic report.
   */
  status: fhir.FhirCode<DiagnosticReportStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DiagnosticReport.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Multiple categories are allowed using various categorization schemes.   The level of granularity is defined by the category concepts in the value set. More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in DiagnosticReport.code.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * A code or name that describes this diagnostic report.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter  but still be tied to the context of the encounter  (e.g. pre-admission laboratory tests).
   */
  encounter?: fhir.ReferenceArgs|undefined;
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
   * This is not necessarily the source of the atomic data items or the entity that interpreted the results. It is the entity that takes responsibility for the clinical report.
   */
  performer?: fhir.ReferenceArgs[]|undefined;
  /**
   * Might not be the same entity that takes responsibility for the clinical report.
   */
  resultsInterpreter?: fhir.ReferenceArgs[]|undefined;
  /**
   * If the specimen is sufficiently specified with a code in the test result name, then this additional data may be redundant. If there are multiple specimens, these may be represented per observation or group.
   */
  specimen?: fhir.ReferenceArgs[]|undefined;
  /**
   * Observations can contain observations.
   */
  result?: fhir.ReferenceArgs[]|undefined;
  /**
   * ImagingStudy and the image element are somewhat overlapping - typically, the list of image references in the image element will also be found in one of the imaging study resources. However, each caters to different types of displays for different types of purposes. Neither, either, or both may be provided.
   */
  imagingStudy?: fhir.ReferenceArgs[]|undefined;
  /**
   * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
   */
  media?: fhir.DiagnosticReportMediaArgs[]|undefined;
  /**
   * Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report.
   */
  conclusion?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DiagnosticReport.conclusion
   */
  _conclusion?:fhir.FhirElementArgs;
  /**
   * One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report.
   */
  conclusionCode?: fhir.CodeableConceptArgs[]|undefined;
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
   * The status of the diagnostic report.
   */
  public status: fhir.FhirCode<DiagnosticReportStatusCodeType>|null;
  /**
   * Multiple categories are allowed using various categorization schemes.   The level of granularity is defined by the category concepts in the value set. More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in DiagnosticReport.code.
   */
  public category: fhir.CodeableConcept[];
  /**
   * A code or name that describes this diagnostic report.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter  but still be tied to the context of the encounter  (e.g. pre-admission laboratory tests).
   */
  public encounter?: fhir.Reference|undefined;
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
   * This is not necessarily the source of the atomic data items or the entity that interpreted the results. It is the entity that takes responsibility for the clinical report.
   */
  public performer: fhir.Reference[];
  /**
   * Might not be the same entity that takes responsibility for the clinical report.
   */
  public resultsInterpreter: fhir.Reference[];
  /**
   * If the specimen is sufficiently specified with a code in the test result name, then this additional data may be redundant. If there are multiple specimens, these may be represented per observation or group.
   */
  public specimen: fhir.Reference[];
  /**
   * Observations can contain observations.
   */
  public result: fhir.Reference[];
  /**
   * ImagingStudy and the image element are somewhat overlapping - typically, the list of image references in the image element will also be found in one of the imaging study resources. However, each caters to different types of displays for different types of purposes. Neither, either, or both may be provided.
   */
  public imagingStudy: fhir.Reference[];
  /**
   * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
   */
  public media: fhir.DiagnosticReportMedia[];
  /**
   * Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report.
   */
  public conclusion?: fhir.FhirString|undefined;
  /**
   * One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report.
   */
  public conclusionCode: fhir.CodeableConcept[];
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
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    else { this.category = []; }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['effective']) { this.effective = source.effective; }
    else if (source['effectiveDateTime']) { this.effective = new fhir.FhirDateTime({value: source.effectiveDateTime}); }
    else if (source['effectivePeriod']) { this.effective = new fhir.Period(source.effectivePeriod); }
    if (source['issued']) { this.issued = new fhir.FhirInstant({value: source.issued}); }
    if (source['_issued']) {
      if (this.issued) { this.issued.addExtendedProperties(source._issued!); }
      else { this.issued = new fhir.FhirInstant(source._issued as Partial<fhir.FhirInstantArgs>); }
    }
    if (source['performer']) { this.performer = source.performer.map((x) => new fhir.Reference(x)); }
    else { this.performer = []; }
    if (source['resultsInterpreter']) { this.resultsInterpreter = source.resultsInterpreter.map((x) => new fhir.Reference(x)); }
    else { this.resultsInterpreter = []; }
    if (source['specimen']) { this.specimen = source.specimen.map((x) => new fhir.Reference(x)); }
    else { this.specimen = []; }
    if (source['result']) { this.result = source.result.map((x) => new fhir.Reference(x)); }
    else { this.result = []; }
    if (source['imagingStudy']) { this.imagingStudy = source.imagingStudy.map((x) => new fhir.Reference(x)); }
    else { this.imagingStudy = []; }
    if (source['media']) { this.media = source.media.map((x) => new fhir.DiagnosticReportMedia(x)); }
    else { this.media = []; }
    if (source['conclusion']) { this.conclusion = new fhir.FhirString({value: source.conclusion}); }
    if (source['_conclusion']) {
      if (this.conclusion) { this.conclusion.addExtendedProperties(source._conclusion!); }
      else { this.conclusion = new fhir.FhirString(source._conclusion as Partial<fhir.FhirStringArgs>); }
    }
    if (source['conclusionCode']) { this.conclusionCode = source.conclusionCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.conclusionCode = []; }
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
    iss.push(...this.vOA('category',exp));
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vOS('encounter',exp));
    iss.push(...this.vOS('effective',exp));
    iss.push(...this.vOS('issued',exp));
    iss.push(...this.vOA('performer',exp));
    iss.push(...this.vOA('resultsInterpreter',exp));
    iss.push(...this.vOA('specimen',exp));
    iss.push(...this.vOA('result',exp));
    iss.push(...this.vOA('imagingStudy',exp));
    iss.push(...this.vOA('media',exp));
    iss.push(...this.vOS('conclusion',exp));
    iss.push(...this.vOA('conclusionCode',exp));
    iss.push(...this.vOA('presentedForm',exp));
    return iss;
  }
}