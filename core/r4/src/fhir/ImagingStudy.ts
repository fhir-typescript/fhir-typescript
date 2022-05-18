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
// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
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
  public static readonly _fts_dataType:string = 'ImagingStudySeriesPerformer';
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
  public static functionExtensibleCoding():SeriesPerformerFunctionCodingType {
    return SeriesPerformerFunctionCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["function"]) { outcome.issue!.push(...this.function.doModelValidation().issue!); }
    if (!this['actor']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property actor:fhir.Reference fhir: ImagingStudy.series.performer.actor:Reference', }));
    }
    if (this["actor"]) { outcome.issue!.push(...this.actor.doModelValidation().issue!); }
    return outcome;
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
   * DICOM instance  type.
   */
  sopClass: fhir.CodingArgs|null;
  /**
   * The number of instance in the series.
   */
  number?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
   */
  title?: fhir.FhirString|string|undefined;
}

/**
 * A single SOP instance within the series, e.g. an image, or presentation state.
 */
export class ImagingStudySeriesInstance extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'ImagingStudySeriesInstance';
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
    if (source['sopClass']) { this.sopClass = new fhir.Coding(source.sopClass); }
    else { this.sopClass = null; }
    if (source['number']) { this.number = new fhir.FhirUnsignedInt({value: source.number}); }
    if (source['title']) { this.title = new fhir.FhirString({value: source.title}); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['uid']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property uid:fhir.FhirId fhir: ImagingStudy.series.instance.uid:id', }));
    }
    if (this["uid"]) { outcome.issue!.push(...this.uid.doModelValidation().issue!); }
    if (!this['sopClass']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property sopClass:fhir.Coding fhir: ImagingStudy.series.instance.sopClass:Coding', }));
    }
    if (this["sopClass"]) { outcome.issue!.push(...this.sopClass.doModelValidation().issue!); }
    if (this["number"]) { outcome.issue!.push(...this.number.doModelValidation().issue!); }
    if (this["title"]) { outcome.issue!.push(...this.title.doModelValidation().issue!); }
    return outcome;
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
   * The numeric identifier of this series in the study.
   */
  number?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * The modality of this series sequence.
   */
  modality: fhir.CodingArgs|null;
  /**
   * A description of the series.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  numberOfInstances?: fhir.FhirUnsignedInt|number|undefined;
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
  public static readonly _fts_dataType:string = 'ImagingStudySeries';
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
  public endpoint?: fhir.Reference[];
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
  public specimen?: fhir.Reference[];
  /**
   * The date and time the series was started.
   */
  public started?: fhir.FhirDateTime|undefined;
  /**
   * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
   */
  public performer?: fhir.ImagingStudySeriesPerformer[];
  /**
   * A single SOP instance within the series, e.g. an image, or presentation state.
   */
  public instance?: fhir.ImagingStudySeriesInstance[];
  /**
   * Default constructor for ImagingStudySeries - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImagingStudySeriesArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['uid']) { this.uid = new fhir.FhirId({value: source.uid}); }
    else { this.uid = null; }
    if (source['number']) { this.number = new fhir.FhirUnsignedInt({value: source.number}); }
    if (source['modality']) { this.modality = new fhir.Coding(source.modality); }
    else { this.modality = null; }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['numberOfInstances']) { this.numberOfInstances = new fhir.FhirUnsignedInt({value: source.numberOfInstances}); }
    if (source['endpoint']) { this.endpoint = source.endpoint.map((x) => new fhir.Reference(x)); }
    else { this.endpoint = []; }
    if (source['bodySite']) { this.bodySite = new fhir.Coding(source.bodySite); }
    if (source['laterality']) { this.laterality = new fhir.Coding(source.laterality); }
    if (source['specimen']) { this.specimen = source.specimen.map((x) => new fhir.Reference(x)); }
    else { this.specimen = []; }
    if (source['started']) { this.started = new fhir.FhirDateTime({value: source.started}); }
    if (source['performer']) { this.performer = source.performer.map((x) => new fhir.ImagingStudySeriesPerformer(x)); }
    else { this.performer = []; }
    if (source['instance']) { this.instance = source.instance.map((x) => new fhir.ImagingStudySeriesInstance(x)); }
    else { this.instance = []; }
  }
  /**
   * Extensible-bound Value Set for modality (ImagingStudy.series.modality)
   */
  public static modalityExtensibleCoding():DicomCid29AcquisitionModalityCodingType {
    return DicomCid29AcquisitionModalityCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['uid']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property uid:fhir.FhirId fhir: ImagingStudy.series.uid:id', }));
    }
    if (this["uid"]) { outcome.issue!.push(...this.uid.doModelValidation().issue!); }
    if (this["number"]) { outcome.issue!.push(...this.number.doModelValidation().issue!); }
    if (!this['modality']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property modality:fhir.Coding fhir: ImagingStudy.series.modality:Coding', }));
    }
    if (this["modality"]) { outcome.issue!.push(...this.modality.doModelValidation().issue!); }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["numberOfInstances"]) { outcome.issue!.push(...this.numberOfInstances.doModelValidation().issue!); }
    if (this["endpoint"]) { this.endpoint.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["bodySite"]) { outcome.issue!.push(...this.bodySite.doModelValidation().issue!); }
    if (this["laterality"]) { outcome.issue!.push(...this.laterality.doModelValidation().issue!); }
    if (this["specimen"]) { this.specimen.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["started"]) { outcome.issue!.push(...this.started.doModelValidation().issue!); }
    if (this["performer"]) { this.performer.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["instance"]) { this.instance.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
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
  status: ImagingstudyStatusCodeType|null;
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
   * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  numberOfInstances?: fhir.FhirUnsignedInt|number|undefined;
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
  public static readonly _fts_dataType:string = 'ImagingStudy';
  /**
   * Resource Type Name
   */
  public resourceType: "ImagingStudy";
  /**
   * See discussion under [Imaging Study Implementation Notes](imagingstudy.html#notes) for encoding of DICOM Study Instance UID. Accession Number should use ACSN Identifier type.
   */
  public identifier?: fhir.Identifier[];
  /**
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   */
  public status: ImagingstudyStatusCodeType|null;
  /**
   * A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
   */
  public modality?: fhir.Coding[];
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
  public basedOn?: fhir.Reference[];
  /**
   * The requesting/referring physician.
   */
  public referrer?: fhir.Reference|undefined;
  /**
   * Who read the study and interpreted the images or other content.
   */
  public interpreter?: fhir.Reference[];
  /**
   * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
   */
  public endpoint?: fhir.Reference[];
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
  public procedureCode?: fhir.CodeableConcept[];
  /**
   * The principal physical location where the ImagingStudy was performed.
   */
  public location?: fhir.Reference|undefined;
  /**
   * Description of clinical condition indicating why the ImagingStudy was requested.
   */
  public reasonCode?: fhir.CodeableConcept[];
  /**
   * Indicates another resource whose existence justifies this Study.
   */
  public reasonReference?: fhir.Reference[];
  /**
   * Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.
   */
  public note?: fhir.Annotation[];
  /**
   * The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Each study has one or more series of images or other content.
   */
  public series?: fhir.ImagingStudySeries[];
  /**
   * Default constructor for ImagingStudy - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImagingStudyArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ImagingStudy';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['modality']) { this.modality = source.modality.map((x) => new fhir.Coding(x)); }
    else { this.modality = []; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['started']) { this.started = new fhir.FhirDateTime({value: source.started}); }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    else { this.basedOn = []; }
    if (source['referrer']) { this.referrer = new fhir.Reference(source.referrer); }
    if (source['interpreter']) { this.interpreter = source.interpreter.map((x) => new fhir.Reference(x)); }
    else { this.interpreter = []; }
    if (source['endpoint']) { this.endpoint = source.endpoint.map((x) => new fhir.Reference(x)); }
    else { this.endpoint = []; }
    if (source['numberOfSeries']) { this.numberOfSeries = new fhir.FhirUnsignedInt({value: source.numberOfSeries}); }
    if (source['numberOfInstances']) { this.numberOfInstances = new fhir.FhirUnsignedInt({value: source.numberOfInstances}); }
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
    if (source['series']) { this.series = source.series.map((x) => new fhir.ImagingStudySeries(x)); }
    else { this.series = []; }
  }
  /**
   * Required-bound Value Set for status (ImagingStudy.status)
   */
  public static statusRequiredCoding():ImagingstudyStatusCodingType {
    return ImagingstudyStatusCodings;
  }
  /**
   * Extensible-bound Value Set for modality (ImagingStudy.modality)
   */
  public static modalityExtensibleCoding():DicomCid29AcquisitionModalityCodingType {
    return DicomCid29AcquisitionModalityCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property resourceType:"ImagingStudy" fhir: ImagingStudy.resourceType:"ImagingStudy"', }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property status:ImagingstudyStatusCodeType fhir: ImagingStudy.status:code', }));
    }
    if (this["modality"]) { this.modality.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['subject']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property subject:fhir.Reference fhir: ImagingStudy.subject:Reference', }));
    }
    if (this["subject"]) { outcome.issue!.push(...this.subject.doModelValidation().issue!); }
    if (this["encounter"]) { outcome.issue!.push(...this.encounter.doModelValidation().issue!); }
    if (this["started"]) { outcome.issue!.push(...this.started.doModelValidation().issue!); }
    if (this["basedOn"]) { this.basedOn.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["referrer"]) { outcome.issue!.push(...this.referrer.doModelValidation().issue!); }
    if (this["interpreter"]) { this.interpreter.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["endpoint"]) { this.endpoint.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["numberOfSeries"]) { outcome.issue!.push(...this.numberOfSeries.doModelValidation().issue!); }
    if (this["numberOfInstances"]) { outcome.issue!.push(...this.numberOfInstances.doModelValidation().issue!); }
    if (this["procedureReference"]) { outcome.issue!.push(...this.procedureReference.doModelValidation().issue!); }
    if (this["procedureCode"]) { this.procedureCode.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["location"]) { outcome.issue!.push(...this.location.doModelValidation().issue!); }
    if (this["reasonCode"]) { this.reasonCode.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["reasonReference"]) { this.reasonReference.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["note"]) { this.note.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["series"]) { this.series.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}