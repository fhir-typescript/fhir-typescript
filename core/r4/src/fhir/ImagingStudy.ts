// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ImagingStudy

import * as fhir from '../fhir.js';

// @ts-ignore
import { SeriesPerformerFunctionCodings, SeriesPerformerFunctionCodingType,} from '../fhirValueSets/SeriesPerformerFunctionCodings.js';
// @ts-ignore
import { SeriesPerformerFunctionCodes,  SeriesPerformerFunctionCodeType } from '../fhirValueSets/SeriesPerformerFunctionCodes.js';
// @ts-ignore
import { DicomCid29AcquisitionModalityCodings, DicomCid29AcquisitionModalityCodingType,} from '../fhirValueSets/DicomCid29AcquisitionModalityCodings.js';
// @ts-ignore
import { DicomCid29AcquisitionModalityCodes,  DicomCid29AcquisitionModalityCodeType } from '../fhirValueSets/DicomCid29AcquisitionModalityCodes.js';
// @ts-ignore
import { BodySiteCodings, BodySiteCodingType,} from '../fhirValueSets/BodySiteCodings.js';
// @ts-ignore
import { BodySiteCodes,  BodySiteCodeType } from '../fhirValueSets/BodySiteCodes.js';
// @ts-ignore
import { BodysiteLateralityCodings, BodysiteLateralityCodingType,} from '../fhirValueSets/BodysiteLateralityCodings.js';
// @ts-ignore
import { BodysiteLateralityCodes,  BodysiteLateralityCodeType } from '../fhirValueSets/BodysiteLateralityCodes.js';
// @ts-ignore
import { ImagingstudyStatusCodings, ImagingstudyStatusCodingType,} from '../fhirValueSets/ImagingstudyStatusCodings.js';
// @ts-ignore
import { ImagingstudyStatusCodes,  ImagingstudyStatusCodeType } from '../fhirValueSets/ImagingstudyStatusCodes.js';
// @ts-ignore
import { ProcedureReasonCodings, ProcedureReasonCodingType,} from '../fhirValueSets/ProcedureReasonCodings.js';
// @ts-ignore
import { ProcedureReasonCodes,  ProcedureReasonCodeType } from '../fhirValueSets/ProcedureReasonCodes.js';
/**
 * Valid arguments for the ImagingStudySeriesPerformer type.
 */
export interface ImagingStudySeriesPerformerArgs extends fhir.BackboneElementArgs {
  /**
   * Distinguishes the type of involvement of the performer in the series.
   */
  function?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates who or what performed the series.
   */
  actor: fhir.ReferenceArgs|null;
}

/**
 * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
 */
export class ImagingStudySeriesPerformer extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImagingStudySeriesPerformer';
  /**
   * Distinguishes the type of involvement of the performer in the series.
   */
  public function?: fhir.CodeableConcept|undefined;
  /**
   * Indicates who or what performed the series.
   */
  public actor: fhir.Reference|null;
  /**
   * Default constructor for ImagingStudySeriesPerformer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImagingStudySeriesPerformerArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['function']) { this.function = new fhir.CodeableConcept(source.function); }
    if (source['actor']) { this.actor = new fhir.Reference(source.actor); }
    else { this.actor = null; }
  }
  /**
   * Extensible-bound Value Set for function (ImagingStudy.series.performer.function)
   */
  public static get functionExtensibleCodings():SeriesPerformerFunctionCodingType {
    return SeriesPerformerFunctionCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'ImagingStudy.series.performer' }
    if (this["function"]) { issues.push(...this.function.doModelValidation(expression+'.function')); }
    if (!this['actor']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property actor fhir: ImagingStudy.series.performer.actor:Reference', expression: [expression] });
    }
    if (this["actor"]) { issues.push(...this.actor.doModelValidation(expression+'.actor')); }
    return issues;
  }
}
/**
 * Valid arguments for the ImagingStudySeriesInstance type.
 */
export interface ImagingStudySeriesInstanceArgs extends fhir.BackboneElementArgs {
  /**
   * See  [DICOM PS3.3 C.12.1](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.12.html#sect_C.12.1).
   */
  uid: fhir.FhirId|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.instance.uid
   */
  _uid?:fhir.FhirElementArgs;
  /**
   * DICOM instance  type.
   */
  sopClass: fhir.CodingArgs|null;
  /**
   * The number of instance in the series.
   */
  number?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.instance.number
   */
  _number?:fhir.FhirElementArgs;
  /**
   * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.instance.title
   */
  _title?:fhir.FhirElementArgs;
}

/**
 * A single SOP instance within the series, e.g. an image, or presentation state.
 */
export class ImagingStudySeriesInstance extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImagingStudySeriesInstance';
  /**
   * See  [DICOM PS3.3 C.12.1](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.12.html#sect_C.12.1).
   */
  public uid: fhir.FhirId|null;
  /**
   * DICOM instance  type.
   */
  public sopClass: fhir.Coding|null;
  /**
   * The number of instance in the series.
   */
  public number?: fhir.FhirUnsignedInt|undefined;
  /**
   * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * Default constructor for ImagingStudySeriesInstance - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImagingStudySeriesInstanceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['uid']) { this.uid = new fhir.FhirId({value: source.uid}); }
    else { this.uid = null; }
    if (source['_uid']) {
      if (this.uid) { this.uid.addExtendedProperties(source._uid!); }
      else { this.uid = new fhir.FhirId(source._uid as Partial<fhir.FhirIdArgs>); }
    }
    if (source['sopClass']) { this.sopClass = new fhir.Coding(source.sopClass); }
    else { this.sopClass = null; }
    if (source['number']) { this.number = new fhir.FhirUnsignedInt({value: source.number}); }
    if (source['_number']) {
      if (this.number) { this.number.addExtendedProperties(source._number!); }
      else { this.number = new fhir.FhirUnsignedInt(source._number as Partial<fhir.FhirUnsignedIntArgs>); }
    }
    if (source['title']) { this.title = new fhir.FhirString({value: source.title}); }
    if (source['_title']) {
      if (this.title) { this.title.addExtendedProperties(source._title!); }
      else { this.title = new fhir.FhirString(source._title as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'ImagingStudy.series.instance' }
    if (!this['uid']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property uid fhir: ImagingStudy.series.instance.uid:id', expression: [expression] });
    }
    if (this["uid"]) { issues.push(...this.uid.doModelValidation(expression+'.uid')); }
    if (!this['sopClass']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property sopClass fhir: ImagingStudy.series.instance.sopClass:Coding', expression: [expression] });
    }
    if (this["sopClass"]) { issues.push(...this.sopClass.doModelValidation(expression+'.sopClass')); }
    if (this["number"]) { issues.push(...this.number.doModelValidation(expression+'.number')); }
    if (this["title"]) { issues.push(...this.title.doModelValidation(expression+'.title')); }
    return issues;
  }
}
/**
 * Valid arguments for the ImagingStudySeries type.
 */
export interface ImagingStudySeriesArgs extends fhir.BackboneElementArgs {
  /**
   * See [DICOM PS3.3 C.7.3](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.3.html).
   */
  uid: fhir.FhirId|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.uid
   */
  _uid?:fhir.FhirElementArgs;
  /**
   * The numeric identifier of this series in the study.
   */
  number?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.number
   */
  _number?:fhir.FhirElementArgs;
  /**
   * The modality of this series sequence.
   */
  modality: fhir.CodingArgs|null;
  /**
   * A description of the series.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  numberOfInstances?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.numberOfInstances
   */
  _numberOfInstances?:fhir.FhirElementArgs;
  /**
   * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; and DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances.
   */
  endpoint?: fhir.ReferenceArgs[]|undefined;
  /**
   * The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
   */
  bodySite?: fhir.CodingArgs|undefined;
  /**
   * The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
   */
  laterality?: fhir.CodingArgs|undefined;
  /**
   * The specimen imaged, e.g., for whole slide imaging of a biopsy.
   */
  specimen?: fhir.ReferenceArgs[]|undefined;
  /**
   * The date and time the series was started.
   */
  started?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.started
   */
  _started?:fhir.FhirElementArgs;
  /**
   * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
   */
  performer?: fhir.ImagingStudySeriesPerformerArgs[]|undefined;
  /**
   * A single SOP instance within the series, e.g. an image, or presentation state.
   */
  instance?: fhir.ImagingStudySeriesInstanceArgs[]|undefined;
}

/**
 * Each study has one or more series of images or other content.
 */
export class ImagingStudySeries extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImagingStudySeries';
  /**
   * See [DICOM PS3.3 C.7.3](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.3.html).
   */
  public uid: fhir.FhirId|null;
  /**
   * The numeric identifier of this series in the study.
   */
  public number?: fhir.FhirUnsignedInt|undefined;
  /**
   * The modality of this series sequence.
   */
  public modality: fhir.Coding|null;
  /**
   * A description of the series.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  public numberOfInstances?: fhir.FhirUnsignedInt|undefined;
  /**
   * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; and DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances.
   */
  public endpoint: fhir.Reference[];
  /**
   * The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
   */
  public bodySite?: fhir.Coding|undefined;
  /**
   * The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
   */
  public laterality?: fhir.Coding|undefined;
  /**
   * The specimen imaged, e.g., for whole slide imaging of a biopsy.
   */
  public specimen: fhir.Reference[];
  /**
   * The date and time the series was started.
   */
  public started?: fhir.FhirDateTime|undefined;
  /**
   * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
   */
  public performer: fhir.ImagingStudySeriesPerformer[];
  /**
   * A single SOP instance within the series, e.g. an image, or presentation state.
   */
  public instance: fhir.ImagingStudySeriesInstance[];
  /**
   * Default constructor for ImagingStudySeries - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImagingStudySeriesArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['uid']) { this.uid = new fhir.FhirId({value: source.uid}); }
    else { this.uid = null; }
    if (source['_uid']) {
      if (this.uid) { this.uid.addExtendedProperties(source._uid!); }
      else { this.uid = new fhir.FhirId(source._uid as Partial<fhir.FhirIdArgs>); }
    }
    if (source['number']) { this.number = new fhir.FhirUnsignedInt({value: source.number}); }
    if (source['_number']) {
      if (this.number) { this.number.addExtendedProperties(source._number!); }
      else { this.number = new fhir.FhirUnsignedInt(source._number as Partial<fhir.FhirUnsignedIntArgs>); }
    }
    if (source['modality']) { this.modality = new fhir.Coding(source.modality); }
    else { this.modality = null; }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['numberOfInstances']) { this.numberOfInstances = new fhir.FhirUnsignedInt({value: source.numberOfInstances}); }
    if (source['_numberOfInstances']) {
      if (this.numberOfInstances) { this.numberOfInstances.addExtendedProperties(source._numberOfInstances!); }
      else { this.numberOfInstances = new fhir.FhirUnsignedInt(source._numberOfInstances as Partial<fhir.FhirUnsignedIntArgs>); }
    }
    if (source['endpoint']) { this.endpoint = source.endpoint.map((x) => new fhir.Reference(x)); }
    else { this.endpoint = []; }
    if (source['bodySite']) { this.bodySite = new fhir.Coding(source.bodySite); }
    if (source['laterality']) { this.laterality = new fhir.Coding(source.laterality); }
    if (source['specimen']) { this.specimen = source.specimen.map((x) => new fhir.Reference(x)); }
    else { this.specimen = []; }
    if (source['started']) { this.started = new fhir.FhirDateTime({value: source.started}); }
    if (source['_started']) {
      if (this.started) { this.started.addExtendedProperties(source._started!); }
      else { this.started = new fhir.FhirDateTime(source._started as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['performer']) { this.performer = source.performer.map((x) => new fhir.ImagingStudySeriesPerformer(x)); }
    else { this.performer = []; }
    if (source['instance']) { this.instance = source.instance.map((x) => new fhir.ImagingStudySeriesInstance(x)); }
    else { this.instance = []; }
  }
  /**
   * Extensible-bound Value Set for modality (ImagingStudy.series.modality)
   */
  public static get modalityExtensibleCodings():DicomCid29AcquisitionModalityCodingType {
    return DicomCid29AcquisitionModalityCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'ImagingStudy.series' }
    if (!this['uid']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property uid fhir: ImagingStudy.series.uid:id', expression: [expression] });
    }
    if (this["uid"]) { issues.push(...this.uid.doModelValidation(expression+'.uid')); }
    if (this["number"]) { issues.push(...this.number.doModelValidation(expression+'.number')); }
    if (!this['modality']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property modality fhir: ImagingStudy.series.modality:Coding', expression: [expression] });
    }
    if (this["modality"]) { issues.push(...this.modality.doModelValidation(expression+'.modality')); }
    if (this["description"]) { issues.push(...this.description.doModelValidation(expression+'.description')); }
    if (this["numberOfInstances"]) { issues.push(...this.numberOfInstances.doModelValidation(expression+'.numberOfInstances')); }
    if (this["endpoint"]) { this.endpoint.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.endpoint[${i}]`)); }) }
    if (this["bodySite"]) { issues.push(...this.bodySite.doModelValidation(expression+'.bodySite')); }
    if (this["laterality"]) { issues.push(...this.laterality.doModelValidation(expression+'.laterality')); }
    if (this["specimen"]) { this.specimen.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.specimen[${i}]`)); }) }
    if (this["started"]) { issues.push(...this.started.doModelValidation(expression+'.started')); }
    if (this["performer"]) { this.performer.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.performer[${i}]`)); }) }
    if (this["instance"]) { this.instance.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.instance[${i}]`)); }) }
    return issues;
  }
}
/**
 * Valid arguments for the ImagingStudy type.
 */
export interface ImagingStudyArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ImagingStudy"|undefined;
  /**
   * See discussion under [Imaging Study Implementation Notes](imagingstudy.html#notes) for encoding of DICOM Study Instance UID. Accession Number should use ACSN Identifier type.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   */
  status: fhir.FhirCode<ImagingstudyStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
   */
  modality?: fhir.CodingArgs[]|undefined;
  /**
   * QA phantoms can be recorded with a Device; multiple subjects (such as mice) can be recorded with a Group.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission test).
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * Date and time the study started.
   */
  started?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.started
   */
  _started?:fhir.FhirElementArgs;
  /**
   * A list of the diagnostic requests that resulted in this imaging study being performed.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * The requesting/referring physician.
   */
  referrer?: fhir.ReferenceArgs|undefined;
  /**
   * Who read the study and interpreted the images or other content.
   */
  interpreter?: fhir.ReferenceArgs[]|undefined;
  /**
   * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
   */
  endpoint?: fhir.ReferenceArgs[]|undefined;
  /**
   * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
   */
  numberOfSeries?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.numberOfSeries
   */
  _numberOfSeries?:fhir.FhirElementArgs;
  /**
   * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  numberOfInstances?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.numberOfInstances
   */
  _numberOfInstances?:fhir.FhirElementArgs;
  /**
   * The procedure which this ImagingStudy was part of.
   */
  procedureReference?: fhir.ReferenceArgs|undefined;
  /**
   * The code for the performed procedure type.
   */
  procedureCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The principal physical location where the ImagingStudy was performed.
   */
  location?: fhir.ReferenceArgs|undefined;
  /**
   * Description of clinical condition indicating why the ImagingStudy was requested.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicates another resource whose existence justifies this Study.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Each study has one or more series of images or other content.
   */
  series?: fhir.ImagingStudySeriesArgs[]|undefined;
}

/**
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 */
export class ImagingStudy extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImagingStudy';
  /**
   * Resource Type Name
   */
  public override resourceType: "ImagingStudy";
  /**
   * See discussion under [Imaging Study Implementation Notes](imagingstudy.html#notes) for encoding of DICOM Study Instance UID. Accession Number should use ACSN Identifier type.
   */
  public identifier: fhir.Identifier[];
  /**
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   */
  public status: fhir.FhirCode<ImagingstudyStatusCodeType>|null;
  /**
   * A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
   */
  public modality: fhir.Coding[];
  /**
   * QA phantoms can be recorded with a Device; multiple subjects (such as mice) can be recorded with a Group.
   */
  public subject: fhir.Reference|null;
  /**
   * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission test).
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Date and time the study started.
   */
  public started?: fhir.FhirDateTime|undefined;
  /**
   * A list of the diagnostic requests that resulted in this imaging study being performed.
   */
  public basedOn: fhir.Reference[];
  /**
   * The requesting/referring physician.
   */
  public referrer?: fhir.Reference|undefined;
  /**
   * Who read the study and interpreted the images or other content.
   */
  public interpreter: fhir.Reference[];
  /**
   * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
   */
  public endpoint: fhir.Reference[];
  /**
   * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
   */
  public numberOfSeries?: fhir.FhirUnsignedInt|undefined;
  /**
   * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  public numberOfInstances?: fhir.FhirUnsignedInt|undefined;
  /**
   * The procedure which this ImagingStudy was part of.
   */
  public procedureReference?: fhir.Reference|undefined;
  /**
   * The code for the performed procedure type.
   */
  public procedureCode: fhir.CodeableConcept[];
  /**
   * The principal physical location where the ImagingStudy was performed.
   */
  public location?: fhir.Reference|undefined;
  /**
   * Description of clinical condition indicating why the ImagingStudy was requested.
   */
  public reasonCode: fhir.CodeableConcept[];
  /**
   * Indicates another resource whose existence justifies this Study.
   */
  public reasonReference: fhir.Reference[];
  /**
   * Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.
   */
  public note: fhir.Annotation[];
  /**
   * The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Each study has one or more series of images or other content.
   */
  public series: fhir.ImagingStudySeries[];
  /**
   * Default constructor for ImagingStudy - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImagingStudyArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ImagingStudy';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<ImagingstudyStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ImagingstudyStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['modality']) { this.modality = source.modality.map((x) => new fhir.Coding(x)); }
    else { this.modality = []; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['started']) { this.started = new fhir.FhirDateTime({value: source.started}); }
    if (source['_started']) {
      if (this.started) { this.started.addExtendedProperties(source._started!); }
      else { this.started = new fhir.FhirDateTime(source._started as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    else { this.basedOn = []; }
    if (source['referrer']) { this.referrer = new fhir.Reference(source.referrer); }
    if (source['interpreter']) { this.interpreter = source.interpreter.map((x) => new fhir.Reference(x)); }
    else { this.interpreter = []; }
    if (source['endpoint']) { this.endpoint = source.endpoint.map((x) => new fhir.Reference(x)); }
    else { this.endpoint = []; }
    if (source['numberOfSeries']) { this.numberOfSeries = new fhir.FhirUnsignedInt({value: source.numberOfSeries}); }
    if (source['_numberOfSeries']) {
      if (this.numberOfSeries) { this.numberOfSeries.addExtendedProperties(source._numberOfSeries!); }
      else { this.numberOfSeries = new fhir.FhirUnsignedInt(source._numberOfSeries as Partial<fhir.FhirUnsignedIntArgs>); }
    }
    if (source['numberOfInstances']) { this.numberOfInstances = new fhir.FhirUnsignedInt({value: source.numberOfInstances}); }
    if (source['_numberOfInstances']) {
      if (this.numberOfInstances) { this.numberOfInstances.addExtendedProperties(source._numberOfInstances!); }
      else { this.numberOfInstances = new fhir.FhirUnsignedInt(source._numberOfInstances as Partial<fhir.FhirUnsignedIntArgs>); }
    }
    if (source['procedureReference']) { this.procedureReference = new fhir.Reference(source.procedureReference); }
    if (source['procedureCode']) { this.procedureCode = source.procedureCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.procedureCode = []; }
    if (source['location']) { this.location = new fhir.Reference(source.location); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    else { this.reasonReference = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['series']) { this.series = source.series.map((x) => new fhir.ImagingStudySeries(x)); }
    else { this.series = []; }
  }
  /**
   * Required-bound Value Set for status (ImagingStudy.status)
   */
  public static get statusRequiredCodes() {
    return ImagingstudyStatusCodes;
  }
  /**
   * Extensible-bound Value Set for modality (ImagingStudy.modality)
   */
  public static get modalityExtensibleCodings():DicomCid29AcquisitionModalityCodingType {
    return DicomCid29AcquisitionModalityCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'ImagingStudy' }
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType fhir: ImagingStudy.resourceType:"ImagingStudy"', expression: [expression] });
    }
    if (this["identifier"]) { this.identifier.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.identifier[${i}]`)); }) }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status fhir: ImagingStudy.status:code', expression: [expression] });
    }
    if (this['status'] && (!Object.values(ImagingstudyStatusCodes).includes(this.status.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'status (ImagingStudy.status) of type code is missing code for Required binding to: ImagingstudyStatus', expression: [expression] });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation(expression+'.status')); }
    if (this["modality"]) { this.modality.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.modality[${i}]`)); }) }
    if (!this['subject']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property subject fhir: ImagingStudy.subject:Reference', expression: [expression] });
    }
    if (this["subject"]) { issues.push(...this.subject.doModelValidation(expression+'.subject')); }
    if (this["encounter"]) { issues.push(...this.encounter.doModelValidation(expression+'.encounter')); }
    if (this["started"]) { issues.push(...this.started.doModelValidation(expression+'.started')); }
    if (this["basedOn"]) { this.basedOn.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.basedOn[${i}]`)); }) }
    if (this["referrer"]) { issues.push(...this.referrer.doModelValidation(expression+'.referrer')); }
    if (this["interpreter"]) { this.interpreter.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.interpreter[${i}]`)); }) }
    if (this["endpoint"]) { this.endpoint.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.endpoint[${i}]`)); }) }
    if (this["numberOfSeries"]) { issues.push(...this.numberOfSeries.doModelValidation(expression+'.numberOfSeries')); }
    if (this["numberOfInstances"]) { issues.push(...this.numberOfInstances.doModelValidation(expression+'.numberOfInstances')); }
    if (this["procedureReference"]) { issues.push(...this.procedureReference.doModelValidation(expression+'.procedureReference')); }
    if (this["procedureCode"]) { this.procedureCode.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.procedureCode[${i}]`)); }) }
    if (this["location"]) { issues.push(...this.location.doModelValidation(expression+'.location')); }
    if (this["reasonCode"]) { this.reasonCode.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.reasonCode[${i}]`)); }) }
    if (this["reasonReference"]) { this.reasonReference.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.reasonReference[${i}]`)); }) }
    if (this["note"]) { this.note.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.note[${i}]`)); }) }
    if (this["description"]) { issues.push(...this.description.doModelValidation(expression+'.description')); }
    if (this["series"]) { this.series.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.series[${i}]`)); }) }
    return issues;
  }
}
