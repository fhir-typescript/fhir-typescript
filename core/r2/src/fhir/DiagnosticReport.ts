// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DiagnosticReport

import * as fhir from '../fhir.js';

// @ts-ignore
import { DiagnosticReportStatusCodes,  DiagnosticReportStatusCodeType } from '../fhirValueSets/DiagnosticReportStatusCodes.js';
// @ts-ignore
import { DiagnosticReportStatusVsValidation } from '../fhirValueSets/DiagnosticReportStatusVsValidation.js';
/**
 * Valid arguments for the DiagnosticReportImage type.
 */
export interface DiagnosticReportImageArgs extends fhir.BackboneElementArgs {
  /**
   * The provider of the report should make a comment about each image included in the report.
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
 * Many diagnostic services include images in the report as part of their service.
 */
export class DiagnosticReportImage extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DiagnosticReportImage';
  /**
   * The provider of the report should make a comment about each image included in the report.
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
   * Need to know what identifier to use when making queries about this report from the source laboratory, and for linking to the report outside FHIR context.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Diagnostic services routinely issue provisional/incomplete reports, and sometimes withdraw previously released reports.
   */
  status: fhir.FhirCode<DiagnosticReportStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DiagnosticReport.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes.
   */
  category?: fhir.CodeableConceptArgs|undefined;
  /**
   * A code or name that describes this diagnostic report.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * SHALL know the subject context.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * The link to the health care event (encounter) when the order was made.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * Need to know where in the patient history to file/present this report.
   */
  effective?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * Need to know where in the patient history to file/present this report.
   */
  effectiveDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Need to know where in the patient history to file/present this report.
   */
  effectivePeriod?: fhir.PeriodArgs|undefined;
  /**
   * Clinicians need to be able to check the date that the report was released.
   */
  issued: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: DiagnosticReport.issued
   */
  _issued?:fhir.FhirElementArgs;
  /**
   * Need to know whom to contact if there are queries about the results. Also may need to track the source of reports for secondary data analysis.
   */
  performer: fhir.ReferenceArgs|null;
  /**
   * Need to be able to track completion of requests based on reports issued and also to report what diagnostic tests were requested (not always the same as what is delivered).
   */
  request?: fhir.ReferenceArgs[]|undefined;
  /**
   * Need to be able to report information about the collected specimens on which the report is based.
   */
  specimen?: fhir.ReferenceArgs[]|undefined;
  /**
   * Need to support individual results, or report groups of results, where the result grouping is arbitrary, but meaningful. This structure is recursive - observations can contain observations.
   */
  result?: fhir.ReferenceArgs[]|undefined;
  /**
   * One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images.
   */
  imagingStudy?: fhir.ReferenceArgs[]|undefined;
  /**
   * Many diagnostic services include images in the report as part of their service.
   */
  image?: fhir.DiagnosticReportImageArgs[]|undefined;
  /**
   * Need to be able to provide a conclusion that is not lost among the basic result data.
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
   * Gives Laboratory the ability to provide its own fully formatted report for clinical fidelity.
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
   * Need to know what identifier to use when making queries about this report from the source laboratory, and for linking to the report outside FHIR context.
   */
  public identifier: fhir.Identifier[];
  /**
   * Diagnostic services routinely issue provisional/incomplete reports, and sometimes withdraw previously released reports.
   */
  public status: fhir.FhirCode<DiagnosticReportStatusCodeType>|null;
  /**
   * A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * A code or name that describes this diagnostic report.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * SHALL know the subject context.
   */
  public subject: fhir.Reference|null;
  /**
   * The link to the health care event (encounter) when the order was made.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Need to know where in the patient history to file/present this report.
   */
  public effective: (fhir.FhirDateTime|fhir.Period)|null;
  /**
   * Internal flag to properly serialize choice-type element DiagnosticReport.effective[x]
   */
  protected static readonly _fts_effectiveIsChoice:true = true;
  /**
   * Clinicians need to be able to check the date that the report was released.
   */
  public issued: fhir.FhirInstant|null;
  /**
   * Need to know whom to contact if there are queries about the results. Also may need to track the source of reports for secondary data analysis.
   */
  public performer: fhir.Reference|null;
  /**
   * Need to be able to track completion of requests based on reports issued and also to report what diagnostic tests were requested (not always the same as what is delivered).
   */
  public request: fhir.Reference[];
  /**
   * Need to be able to report information about the collected specimens on which the report is based.
   */
  public specimen: fhir.Reference[];
  /**
   * Need to support individual results, or report groups of results, where the result grouping is arbitrary, but meaningful. This structure is recursive - observations can contain observations.
   */
  public result: fhir.Reference[];
  /**
   * One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images.
   */
  public imagingStudy: fhir.Reference[];
  /**
   * Many diagnostic services include images in the report as part of their service.
   */
  public image: fhir.DiagnosticReportImage[];
  /**
   * Need to be able to provide a conclusion that is not lost among the basic result data.
   */
  public conclusion?: fhir.FhirString|undefined;
  /**
   * Codes for the conclusion.
   */
  public codedDiagnosis: fhir.CodeableConcept[];
  /**
   * Gives Laboratory the ability to provide its own fully formatted report for clinical fidelity.
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
    else { this.subject = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['effective']) { this.effective = source.effective; }
    else if (source['effectiveDateTime']) { this.effective = new fhir.FhirDateTime({value: source.effectiveDateTime}); }
    else if (source['effectivePeriod']) { this.effective = new fhir.Period(source.effectivePeriod); }
    else { this.effective = null; }
    if (source['issued']) { this.issued = new fhir.FhirInstant({value: source.issued}); }
    else { this.issued = null; }
    if (source['_issued']) {
      if (this.issued) { this.issued.addExtendedProperties(source._issued!); }
      else { this.issued = new fhir.FhirInstant(source._issued as Partial<fhir.FhirInstantArgs>); }
    }
    if (source['performer']) { this.performer = new fhir.Reference(source.performer); }
    else { this.performer = null; }
    if (source['request']) { this.request = source.request.map((x) => new fhir.Reference(x)); }
    else { this.request = []; }
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
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRSV('status',exp,'DiagnosticReportStatus',DiagnosticReportStatusVsValidation,'r'));
    iss.push(...this.vOS('category',exp));
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vRS('subject',exp));
    iss.push(...this.vOS('encounter',exp));
    iss.push(...this.vRS('effective',exp));
    iss.push(...this.vRS('issued',exp));
    iss.push(...this.vRS('performer',exp));
    iss.push(...this.vOA('request',exp));
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
