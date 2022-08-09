// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Specimen

import * as fhir from '../fhir.js';

// @ts-ignore
import { SpecimenCollectionMethodCodes,  SpecimenCollectionMethodCodeType } from '../fhirValueSets/SpecimenCollectionMethodCodes.js';
// @ts-ignore
import { SpecimenCollectionMethodVsValidation } from '../fhirValueSets/SpecimenCollectionMethodVsValidation.js';
// @ts-ignore
import { BodySiteCodes,  BodySiteCodeType } from '../fhirValueSets/BodySiteCodes.js';
// @ts-ignore
import { BodySiteVsValidation } from '../fhirValueSets/BodySiteVsValidation.js';
// @ts-ignore
import { SpecimenProcessingProcedureCodes,  SpecimenProcessingProcedureCodeType } from '../fhirValueSets/SpecimenProcessingProcedureCodes.js';
// @ts-ignore
import { SpecimenProcessingProcedureVsValidation } from '../fhirValueSets/SpecimenProcessingProcedureVsValidation.js';
// @ts-ignore
import { SpecimenContainerTypeCodes,  SpecimenContainerTypeCodeType } from '../fhirValueSets/SpecimenContainerTypeCodes.js';
// @ts-ignore
import { SpecimenContainerTypeVsValidation } from '../fhirValueSets/SpecimenContainerTypeVsValidation.js';
// @ts-ignore
import { SpecimenStatusCodes,  SpecimenStatusCodeType } from '../fhirValueSets/SpecimenStatusCodes.js';
// @ts-ignore
import { SpecimenStatusVsValidation } from '../fhirValueSets/SpecimenStatusVsValidation.js';
// @ts-ignore
import { V20487Codes,  V20487CodeType } from '../fhirValueSets/V20487Codes.js';
// @ts-ignore
import { V20487VsValidation } from '../fhirValueSets/V20487VsValidation.js';
/**
 * Valid arguments for the SpecimenCollection type.
 */
export interface SpecimenCollectionArgs extends fhir.BackboneElementArgs {
  /**
   * Person who collected the specimen.
   */
  collector?: fhir.ReferenceArgs|undefined;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  collected?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  collectedDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  collectedPeriod?: fhir.PeriodArgs|undefined;
  /**
   * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
   */
  quantity?: fhir.QuantityArgs|undefined;
  /**
   * A coded value specifying the technique that is used to perform the procedure.
   */
  method?: fhir.CodeableConceptArgs|undefined;
  /**
   * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [body-site-instance](extension-body-site-instance.html).
   */
  bodySite?: fhir.CodeableConceptArgs|undefined;
}

/**
 * Details concerning the specimen collection.
 */
export class SpecimenCollection extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SpecimenCollection';
  /**
   * Person who collected the specimen.
   */
  public collector?: fhir.Reference|undefined;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  public collected?: (fhir.FhirDateTime|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Specimen.collection.collected[x]
   */
  protected static readonly _fts_collectedIsChoice:true = true;
  /**
   * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * A coded value specifying the technique that is used to perform the procedure.
   */
  public method?: fhir.CodeableConcept|undefined;
  /**
   * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [body-site-instance](extension-body-site-instance.html).
   */
  public bodySite?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for SpecimenCollection - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SpecimenCollectionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['collector']) { this.collector = new fhir.Reference(source.collector, options); }
    if (source['collected']) { this.collected = source.collected; }
    else if (source['collectedDateTime'] !== undefined) { this.collected = new fhir.FhirDateTime({value: source.collectedDateTime}, options); }
    else if (source['collectedPeriod']) { this.collected = new fhir.Period(source.collectedPeriod, options); }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity, options); }
    if (source['method']) { this.method = new fhir.CodeableConcept(source.method, options); }
    if (source['bodySite']) { this.bodySite = new fhir.CodeableConcept(source.bodySite, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Specimen.collection' }
    iss.push(...this.vOS('collector',exp));
    iss.push(...this.vOS('collected',exp));
    iss.push(...this.vOS('quantity',exp));
    iss.push(...this.vOS('method',exp));
    iss.push(...this.vOS('bodySite',exp));
    return iss;
  }
}
/**
 * Valid arguments for the SpecimenProcessing type.
 */
export interface SpecimenProcessingArgs extends fhir.BackboneElementArgs {
  /**
   * Textual description of procedure.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Specimen.processing.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * A coded value specifying the procedure used to process the specimen.
   */
  procedure?: fhir.CodeableConceptArgs|undefined;
  /**
   * Material used in the processing step.
   */
  additive?: fhir.ReferenceArgs[]|undefined;
  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  time?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  timeDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  timePeriod?: fhir.PeriodArgs|undefined;
}

/**
 * Details concerning processing and processing steps for the specimen.
 */
export class SpecimenProcessing extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SpecimenProcessing';
  /**
   * Textual description of procedure.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * A coded value specifying the procedure used to process the specimen.
   */
  public procedure?: fhir.CodeableConcept|undefined;
  /**
   * Material used in the processing step.
   */
  public additive: fhir.Reference[];
  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  public time?: (fhir.FhirDateTime|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Specimen.processing.time[x]
   */
  protected static readonly _fts_timeIsChoice:true = true;
  /**
   * Default constructor for SpecimenProcessing - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SpecimenProcessingArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['procedure']) { this.procedure = new fhir.CodeableConcept(source.procedure, options); }
    if (source['additive']) { this.additive = source.additive.map((x) => new fhir.Reference(x, options)); }
    else { this.additive = []; }
    if (source['time']) { this.time = source.time; }
    else if (source['timeDateTime'] !== undefined) { this.time = new fhir.FhirDateTime({value: source.timeDateTime}, options); }
    else if (source['timePeriod']) { this.time = new fhir.Period(source.timePeriod, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Specimen.processing' }
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOS('procedure',exp));
    iss.push(...this.vOA('additive',exp));
    iss.push(...this.vOS('time',exp));
    return iss;
  }
}
/**
 * Valid arguments for the SpecimenContainer type.
 */
export interface SpecimenContainerArgs extends fhir.BackboneElementArgs {
  /**
   * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Textual description of the container.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Specimen.container.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * The capacity (volume or other measure) the container may contain.
   */
  capacity?: fhir.QuantityArgs|undefined;
  /**
   * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
   */
  specimenQuantity?: fhir.QuantityArgs|undefined;
  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additive?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveReference?: fhir.ReferenceArgs|undefined;
}

/**
 * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
 */
export class SpecimenContainer extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SpecimenContainer';
  /**
   * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
   */
  public identifier: fhir.Identifier[];
  /**
   * Textual description of the container.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The capacity (volume or other measure) the container may contain.
   */
  public capacity?: fhir.Quantity|undefined;
  /**
   * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
   */
  public specimenQuantity?: fhir.Quantity|undefined;
  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  public additive?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Specimen.container.additive[x]
   */
  protected static readonly _fts_additiveIsChoice:true = true;
  /**
   * Default constructor for SpecimenContainer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SpecimenContainerArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    if (source['capacity']) { this.capacity = new fhir.Quantity(source.capacity, options); }
    if (source['specimenQuantity']) { this.specimenQuantity = new fhir.Quantity(source.specimenQuantity, options); }
    if (source['additive']) { this.additive = source.additive; }
    else if (source['additiveCodeableConcept']) { this.additive = new fhir.CodeableConcept(source.additiveCodeableConcept, options); }
    else if (source['additiveReference']) { this.additive = new fhir.Reference(source.additiveReference, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Specimen.container' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOS('capacity',exp));
    iss.push(...this.vOS('specimenQuantity',exp));
    iss.push(...this.vOS('additive',exp));
    return iss;
  }
}
/**
 * Valid arguments for the Specimen type.
 */
export interface SpecimenArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Specimen"|undefined;
  /**
   * Id for specimen.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
   */
  accessionIdentifier?: fhir.IdentifierArgs|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status?: fhir.FhirCode<SpecimenStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Specimen.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The type can change the way that a specimen is handled, and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Where the specimen came from. This may be from the patient(s) or from the environment or a device.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * Time when specimen was received for processing or testing.
   */
  receivedTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Specimen.receivedTime
   */
  _receivedTime?:fhir.FhirElementArgs;
  /**
   * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
   */
  parent?: fhir.ReferenceArgs[]|undefined;
  /**
   * The request may be explicit or implied such with a ProcedureRequest that requires a blood draw.
   */
  request?: fhir.ReferenceArgs[]|undefined;
  /**
   * Details concerning the specimen collection.
   */
  collection?: fhir.SpecimenCollectionArgs|undefined;
  /**
   * Details concerning processing and processing steps for the specimen.
   */
  processing?: fhir.SpecimenProcessingArgs[]|undefined;
  /**
   * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
   */
  container?: fhir.SpecimenContainerArgs[]|undefined;
  /**
   * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * A sample to be used for analysis.
 */
export class Specimen extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Specimen';
  /**
   * Resource Type Name
   */
  public override resourceType: "Specimen";
  /**
   * Id for specimen.
   */
  public identifier: fhir.Identifier[];
  /**
   * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
   */
  public accessionIdentifier?: fhir.Identifier|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status?: fhir.FhirCode<SpecimenStatusCodeType>|undefined;
  /**
   * The type can change the way that a specimen is handled, and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Where the specimen came from. This may be from the patient(s) or from the environment or a device.
   */
  public subject: fhir.Reference|null;
  /**
   * Time when specimen was received for processing or testing.
   */
  public receivedTime?: fhir.FhirDateTime|undefined;
  /**
   * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
   */
  public parent: fhir.Reference[];
  /**
   * The request may be explicit or implied such with a ProcedureRequest that requires a blood draw.
   */
  public request: fhir.Reference[];
  /**
   * Details concerning the specimen collection.
   */
  public collection?: fhir.SpecimenCollection|undefined;
  /**
   * Details concerning processing and processing steps for the specimen.
   */
  public processing: fhir.SpecimenProcessing[];
  /**
   * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
   */
  public container: fhir.SpecimenContainer[];
  /**
   * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
   */
  public note: fhir.Annotation[];
  /**
   * Default constructor for Specimen - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SpecimenArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Specimen';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['accessionIdentifier']) { this.accessionIdentifier = new fhir.Identifier(source.accessionIdentifier, options); }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<SpecimenStatusCodeType>({value: source.status}, options); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<SpecimenStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject, options); }
    else { this.subject = null; }
    if (source['receivedTime'] !== undefined) { this.receivedTime = new fhir.FhirDateTime({value: source.receivedTime}, options); }
    if (source['_receivedTime']) {
      if (this.receivedTime) { this.receivedTime.addExtendedProperties(source._receivedTime!); }
      else { this.receivedTime = new fhir.FhirDateTime(source._receivedTime as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['parent']) { this.parent = source.parent.map((x) => new fhir.Reference(x, options)); }
    else { this.parent = []; }
    if (source['request']) { this.request = source.request.map((x) => new fhir.Reference(x, options)); }
    else { this.request = []; }
    if (source['collection']) { this.collection = new fhir.SpecimenCollection(source.collection, options); }
    if (source['processing']) { this.processing = source.processing.map((x) => new fhir.SpecimenProcessing(x, options)); }
    else { this.processing = []; }
    if (source['container']) { this.container = source.container.map((x) => new fhir.SpecimenContainer(x, options)); }
    else { this.container = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x, options)); }
    else { this.note = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Specimen' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('accessionIdentifier',exp));
    iss.push(...this.vOSV('status',exp,'SpecimenStatus',SpecimenStatusVsValidation,'r'));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vRS('subject',exp));
    iss.push(...this.vOS('receivedTime',exp));
    iss.push(...this.vOA('parent',exp));
    iss.push(...this.vOA('request',exp));
    iss.push(...this.vOS('collection',exp));
    iss.push(...this.vOA('processing',exp));
    iss.push(...this.vOA('container',exp));
    iss.push(...this.vOA('note',exp));
    return iss;
  }
}
