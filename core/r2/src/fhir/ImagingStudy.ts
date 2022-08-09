// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: ImagingStudy

import * as fhir from '../fhir.js';

// @ts-ignore
import { InstanceAvailabilityCodes,  InstanceAvailabilityCodeType } from '../fhirValueSets/InstanceAvailabilityCodes.js';
// @ts-ignore
import { InstanceAvailabilityVsValidation } from '../fhirValueSets/InstanceAvailabilityVsValidation.js';
/**
 * Valid arguments for the ImagingStudySeriesInstance type.
 */
export interface ImagingStudySeriesInstanceArgs extends fhir.BackboneElementArgs {
  /**
   * The number of instance in the series.
   */
  number?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.instance.number
   */
  _number?:fhir.FhirElementArgs;
  /**
   * Formal identifier for this image or other content.
   */
  uid: fhir.FhirOid|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.instance.uid
   */
  _uid?:fhir.FhirElementArgs;
  /**
   * DICOM instance  type.
   */
  sopClass: fhir.FhirOid|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.instance.sopClass
   */
  _sopClass?:fhir.FhirElementArgs;
  /**
   * A human-friendly SOP Class name.
   */
  type?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.instance.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * The description of the instance.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.instance.title
   */
  _title?:fhir.FhirElementArgs;
  /**
   * Content of the instance or a rendering thereof (e.g. a JPEG of an image, or an XML of a structured report). May be represented for example by inline encoding; by a URL reference to a WADO-RS service that makes the instance available; or to a FHIR Resource (e.g. Media, Document, etc.). Multiple content attachments may be used for alternate representations of the instance.
   */
  content?: fhir.AttachmentArgs[]|undefined;
}

/**
 * A single SOP Instance within the series, e.g. an image, or presentation state.
 */
export class ImagingStudySeriesInstance extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImagingStudySeriesInstance';
  /**
   * The number of instance in the series.
   */
  public number?: fhir.FhirUnsignedInt|undefined;
  /**
   * Formal identifier for this image or other content.
   */
  public uid: fhir.FhirOid|null;
  /**
   * DICOM instance  type.
   */
  public sopClass: fhir.FhirOid|null;
  /**
   * A human-friendly SOP Class name.
   */
  public type?: fhir.FhirString|undefined;
  /**
   * The description of the instance.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * Content of the instance or a rendering thereof (e.g. a JPEG of an image, or an XML of a structured report). May be represented for example by inline encoding; by a URL reference to a WADO-RS service that makes the instance available; or to a FHIR Resource (e.g. Media, Document, etc.). Multiple content attachments may be used for alternate representations of the instance.
   */
  public content: fhir.Attachment[];
  /**
   * Default constructor for ImagingStudySeriesInstance - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImagingStudySeriesInstanceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['number'] !== undefined) { this.number = new fhir.FhirUnsignedInt({value: source.number}, options); }
    if (source['_number']) {
      if (this.number) { this.number.addExtendedProperties(source._number!); }
      else { this.number = new fhir.FhirUnsignedInt(source._number as Partial<fhir.FhirUnsignedIntArgs>, options); }
    }
    if (source['uid'] !== undefined) { this.uid = new fhir.FhirOid({value: source.uid}, options); }
    else { this.uid = null; }
    if (source['_uid']) {
      if (this.uid) { this.uid.addExtendedProperties(source._uid!); }
      else { this.uid = new fhir.FhirOid(source._uid as Partial<fhir.FhirOidArgs>, options); }
    }
    if (source['sopClass'] !== undefined) { this.sopClass = new fhir.FhirOid({value: source.sopClass}, options); }
    else { this.sopClass = null; }
    if (source['_sopClass']) {
      if (this.sopClass) { this.sopClass.addExtendedProperties(source._sopClass!); }
      else { this.sopClass = new fhir.FhirOid(source._sopClass as Partial<fhir.FhirOidArgs>, options); }
    }
    if (source['type'] !== undefined) { this.type = new fhir.FhirString({value: source.type}, options); }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirString(source._type as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['title'] !== undefined) { this.title = new fhir.FhirString({value: source.title}, options); }
    if (source['_title']) {
      if (this.title) { this.title.addExtendedProperties(source._title!); }
      else { this.title = new fhir.FhirString(source._title as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['content']) { this.content = source.content.map((x) => new fhir.Attachment(x, options)); }
    else { this.content = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ImagingStudy.series.instance' }
    iss.push(...this.vOS('number',exp));
    iss.push(...this.vRS('uid',exp));
    iss.push(...this.vRS('sopClass',exp));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOS('title',exp));
    iss.push(...this.vOA('content',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ImagingStudySeries type.
 */
export interface ImagingStudySeriesArgs extends fhir.BackboneElementArgs {
  /**
   * The Numeric identifier of this series in the study.
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
   * Formal identifier for this series.
   */
  uid: fhir.FhirOid|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.uid
   */
  _uid?:fhir.FhirElementArgs;
  /**
   * A description of the series.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Number of SOP Instances in Series.
   */
  numberOfInstances: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.numberOfInstances
   */
  _numberOfInstances?:fhir.FhirElementArgs;
  /**
   * Availability of series (online, offline or nearline).
   */
  availability?: fhir.FhirCode<InstanceAvailabilityCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.availability
   */
  _availability?:fhir.FhirElementArgs;
  /**
   * URI/URL specifying the location of the referenced series using WADO-RS.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * Body part examined. See  DICOM Part 16 Annex L for the mapping from DICOM to Snomed CT.
   */
  bodySite?: fhir.CodingArgs|undefined;
  /**
   * Laterality if body site is paired anatomic structure and laterality is not pre-coordinated in body site code.
   */
  laterality?: fhir.CodingArgs|undefined;
  /**
   * The date and time the series was started.
   */
  started?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.started
   */
  _started?:fhir.FhirElementArgs;
  /**
   * A single SOP Instance within the series, e.g. an image, or presentation state.
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
   * The Numeric identifier of this series in the study.
   */
  public number?: fhir.FhirUnsignedInt|undefined;
  /**
   * The modality of this series sequence.
   */
  public modality: fhir.Coding|null;
  /**
   * Formal identifier for this series.
   */
  public uid: fhir.FhirOid|null;
  /**
   * A description of the series.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Number of SOP Instances in Series.
   */
  public numberOfInstances: fhir.FhirUnsignedInt|null;
  /**
   * Availability of series (online, offline or nearline).
   */
  public availability?: fhir.FhirCode<InstanceAvailabilityCodeType>|undefined;
  /**
   * URI/URL specifying the location of the referenced series using WADO-RS.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * Body part examined. See  DICOM Part 16 Annex L for the mapping from DICOM to Snomed CT.
   */
  public bodySite?: fhir.Coding|undefined;
  /**
   * Laterality if body site is paired anatomic structure and laterality is not pre-coordinated in body site code.
   */
  public laterality?: fhir.Coding|undefined;
  /**
   * The date and time the series was started.
   */
  public started?: fhir.FhirDateTime|undefined;
  /**
   * A single SOP Instance within the series, e.g. an image, or presentation state.
   */
  public instance: fhir.ImagingStudySeriesInstance[];
  /**
   * Default constructor for ImagingStudySeries - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImagingStudySeriesArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['number'] !== undefined) { this.number = new fhir.FhirUnsignedInt({value: source.number}, options); }
    if (source['_number']) {
      if (this.number) { this.number.addExtendedProperties(source._number!); }
      else { this.number = new fhir.FhirUnsignedInt(source._number as Partial<fhir.FhirUnsignedIntArgs>, options); }
    }
    if (source['modality']) { this.modality = new fhir.Coding(source.modality, options); }
    else { this.modality = null; }
    if (source['uid'] !== undefined) { this.uid = new fhir.FhirOid({value: source.uid}, options); }
    else { this.uid = null; }
    if (source['_uid']) {
      if (this.uid) { this.uid.addExtendedProperties(source._uid!); }
      else { this.uid = new fhir.FhirOid(source._uid as Partial<fhir.FhirOidArgs>, options); }
    }
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['numberOfInstances'] !== undefined) { this.numberOfInstances = new fhir.FhirUnsignedInt({value: source.numberOfInstances}, options); }
    else { this.numberOfInstances = null; }
    if (source['_numberOfInstances']) {
      if (this.numberOfInstances) { this.numberOfInstances.addExtendedProperties(source._numberOfInstances!); }
      else { this.numberOfInstances = new fhir.FhirUnsignedInt(source._numberOfInstances as Partial<fhir.FhirUnsignedIntArgs>, options); }
    }
    if (source['availability'] !== undefined) { this.availability = new fhir.FhirCode<InstanceAvailabilityCodeType>({value: source.availability}, options); }
    if (source['_availability']) {
      if (this.availability) { this.availability.addExtendedProperties(source._availability!); }
      else { this.availability = new fhir.FhirCode<InstanceAvailabilityCodeType>(source._availability as Partial<fhir.FhirCode>, options); }
    }
    if (source['url'] !== undefined) { this.url = new fhir.FhirUri({value: source.url}, options); }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['bodySite']) { this.bodySite = new fhir.Coding(source.bodySite, options); }
    if (source['laterality']) { this.laterality = new fhir.Coding(source.laterality, options); }
    if (source['started'] !== undefined) { this.started = new fhir.FhirDateTime({value: source.started}, options); }
    if (source['_started']) {
      if (this.started) { this.started.addExtendedProperties(source._started!); }
      else { this.started = new fhir.FhirDateTime(source._started as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['instance']) { this.instance = source.instance.map((x) => new fhir.ImagingStudySeriesInstance(x, options)); }
    else { this.instance = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ImagingStudy.series' }
    iss.push(...this.vOS('number',exp));
    iss.push(...this.vRS('modality',exp));
    iss.push(...this.vRS('uid',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vRS('numberOfInstances',exp));
    iss.push(...this.vOSV('availability',exp,'InstanceAvailability',InstanceAvailabilityVsValidation,'r'));
    iss.push(...this.vOS('url',exp));
    iss.push(...this.vOS('bodySite',exp));
    iss.push(...this.vOS('laterality',exp));
    iss.push(...this.vOS('started',exp));
    iss.push(...this.vOA('instance',exp));
    return iss;
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
   * Date and Time the study started.
   */
  started?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.started
   */
  _started?:fhir.FhirElementArgs;
  /**
   * The patient imaged in the study.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * Formal identifier for the study.
   */
  uid: fhir.FhirOid|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.uid
   */
  _uid?:fhir.FhirElementArgs;
  /**
   * Accession Number is an identifier related to some aspect of imaging workflow and data management. Usage may vary across different institutions.  See for instance [IHE Radiology Technical Framework Volume 1 Appendix A](http://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Rev13.0_Vol1_FT_2014-07-30.pdf).
   */
  accession?: fhir.IdentifierArgs|undefined;
  /**
   * Other identifiers for the study.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * To support grouped procedures (one imaging study supporting multiple ordered procedures, e.g. chest/abdomen/pelvis CT).
   */
  order?: fhir.ReferenceArgs[]|undefined;
  /**
   * A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
   */
  modalityList?: fhir.CodingArgs[]|undefined;
  /**
   * The requesting/referring physician.
   */
  referrer?: fhir.ReferenceArgs|undefined;
  /**
   * Availability of study (online, offline or nearline).
   */
  availability?: fhir.FhirCode<InstanceAvailabilityCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.availability
   */
  _availability?:fhir.FhirElementArgs;
  /**
   * WADO-RS resource where Study is available.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * Number of Series in Study.
   */
  numberOfSeries: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.numberOfSeries
   */
  _numberOfSeries?:fhir.FhirElementArgs;
  /**
   * Number of SOP Instances in Study.
   */
  numberOfInstances: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.numberOfInstances
   */
  _numberOfInstances?:fhir.FhirElementArgs;
  /**
   * Type of procedure performed.
   */
  procedure?: fhir.ReferenceArgs[]|undefined;
  /**
   * Who read the study and interpreted the images or other content.
   */
  interpreter?: fhir.ReferenceArgs|undefined;
  /**
   * Institution-generated description or classification of the Study performed.
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
   * Date and Time the study started.
   */
  public started?: fhir.FhirDateTime|undefined;
  /**
   * The patient imaged in the study.
   */
  public patient: fhir.Reference|null;
  /**
   * Formal identifier for the study.
   */
  public uid: fhir.FhirOid|null;
  /**
   * Accession Number is an identifier related to some aspect of imaging workflow and data management. Usage may vary across different institutions.  See for instance [IHE Radiology Technical Framework Volume 1 Appendix A](http://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Rev13.0_Vol1_FT_2014-07-30.pdf).
   */
  public accession?: fhir.Identifier|undefined;
  /**
   * Other identifiers for the study.
   */
  public identifier: fhir.Identifier[];
  /**
   * To support grouped procedures (one imaging study supporting multiple ordered procedures, e.g. chest/abdomen/pelvis CT).
   */
  public order: fhir.Reference[];
  /**
   * A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
   */
  public modalityList: fhir.Coding[];
  /**
   * The requesting/referring physician.
   */
  public referrer?: fhir.Reference|undefined;
  /**
   * Availability of study (online, offline or nearline).
   */
  public availability?: fhir.FhirCode<InstanceAvailabilityCodeType>|undefined;
  /**
   * WADO-RS resource where Study is available.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * Number of Series in Study.
   */
  public numberOfSeries: fhir.FhirUnsignedInt|null;
  /**
   * Number of SOP Instances in Study.
   */
  public numberOfInstances: fhir.FhirUnsignedInt|null;
  /**
   * Type of procedure performed.
   */
  public procedure: fhir.Reference[];
  /**
   * Who read the study and interpreted the images or other content.
   */
  public interpreter?: fhir.Reference|undefined;
  /**
   * Institution-generated description or classification of the Study performed.
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
    if (source['started'] !== undefined) { this.started = new fhir.FhirDateTime({value: source.started}, options); }
    if (source['_started']) {
      if (this.started) { this.started.addExtendedProperties(source._started!); }
      else { this.started = new fhir.FhirDateTime(source._started as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient, options); }
    else { this.patient = null; }
    if (source['uid'] !== undefined) { this.uid = new fhir.FhirOid({value: source.uid}, options); }
    else { this.uid = null; }
    if (source['_uid']) {
      if (this.uid) { this.uid.addExtendedProperties(source._uid!); }
      else { this.uid = new fhir.FhirOid(source._uid as Partial<fhir.FhirOidArgs>, options); }
    }
    if (source['accession']) { this.accession = new fhir.Identifier(source.accession, options); }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['order']) { this.order = source.order.map((x) => new fhir.Reference(x, options)); }
    else { this.order = []; }
    if (source['modalityList']) { this.modalityList = source.modalityList.map((x) => new fhir.Coding(x, options)); }
    else { this.modalityList = []; }
    if (source['referrer']) { this.referrer = new fhir.Reference(source.referrer, options); }
    if (source['availability'] !== undefined) { this.availability = new fhir.FhirCode<InstanceAvailabilityCodeType>({value: source.availability}, options); }
    if (source['_availability']) {
      if (this.availability) { this.availability.addExtendedProperties(source._availability!); }
      else { this.availability = new fhir.FhirCode<InstanceAvailabilityCodeType>(source._availability as Partial<fhir.FhirCode>, options); }
    }
    if (source['url'] !== undefined) { this.url = new fhir.FhirUri({value: source.url}, options); }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['numberOfSeries'] !== undefined) { this.numberOfSeries = new fhir.FhirUnsignedInt({value: source.numberOfSeries}, options); }
    else { this.numberOfSeries = null; }
    if (source['_numberOfSeries']) {
      if (this.numberOfSeries) { this.numberOfSeries.addExtendedProperties(source._numberOfSeries!); }
      else { this.numberOfSeries = new fhir.FhirUnsignedInt(source._numberOfSeries as Partial<fhir.FhirUnsignedIntArgs>, options); }
    }
    if (source['numberOfInstances'] !== undefined) { this.numberOfInstances = new fhir.FhirUnsignedInt({value: source.numberOfInstances}, options); }
    else { this.numberOfInstances = null; }
    if (source['_numberOfInstances']) {
      if (this.numberOfInstances) { this.numberOfInstances.addExtendedProperties(source._numberOfInstances!); }
      else { this.numberOfInstances = new fhir.FhirUnsignedInt(source._numberOfInstances as Partial<fhir.FhirUnsignedIntArgs>, options); }
    }
    if (source['procedure']) { this.procedure = source.procedure.map((x) => new fhir.Reference(x, options)); }
    else { this.procedure = []; }
    if (source['interpreter']) { this.interpreter = new fhir.Reference(source.interpreter, options); }
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['series']) { this.series = source.series.map((x) => new fhir.ImagingStudySeries(x, options)); }
    else { this.series = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ImagingStudy' }
    iss.push(...this.vOS('started',exp));
    iss.push(...this.vRS('patient',exp));
    iss.push(...this.vRS('uid',exp));
    iss.push(...this.vOS('accession',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOA('order',exp));
    iss.push(...this.vOA('modalityList',exp));
    iss.push(...this.vOS('referrer',exp));
    iss.push(...this.vOSV('availability',exp,'InstanceAvailability',InstanceAvailabilityVsValidation,'r'));
    iss.push(...this.vOS('url',exp));
    iss.push(...this.vRS('numberOfSeries',exp));
    iss.push(...this.vRS('numberOfInstances',exp));
    iss.push(...this.vOA('procedure',exp));
    iss.push(...this.vOS('interpreter',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOA('series',exp));
    return iss;
  }
}
