// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
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
// @ts-ignore
import { V20493Codes,  V20493CodeType } from '../fhirValueSets/V20493Codes.js';
// @ts-ignore
import { V20493VsValidation } from '../fhirValueSets/V20493VsValidation.js';
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
   * The span of time over which the collection of a specimen occurred.
   */
  duration?: fhir.DurationArgs|undefined;
  /**
   * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
   */
  quantity?: fhir.QuantityArgs|undefined;
  /**
   * A coded value specifying the technique that is used to perform the procedure.
   */
  method?: fhir.CodeableConceptArgs|undefined;
  /**
   * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [bodySite](extension-bodysite.html).
   */
  bodySite?: fhir.CodeableConceptArgs|undefined;
  /**
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
   */
  fastingStatus?: fhir.CodeableConcept|fhir.Duration|undefined;
  /**
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
   */
  fastingStatusCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
   */
  fastingStatusDuration?: fhir.DurationArgs|undefined;
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
   * The span of time over which the collection of a specimen occurred.
   */
  public duration?: fhir.Duration|undefined;
  /**
   * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * A coded value specifying the technique that is used to perform the procedure.
   */
  public method?: fhir.CodeableConcept|undefined;
  /**
   * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [bodySite](extension-bodysite.html).
   */
  public bodySite?: fhir.CodeableConcept|undefined;
  /**
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
   */
  public fastingStatus?: (fhir.CodeableConcept|fhir.Duration)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Specimen.collection.fastingStatus[x]
   */
  protected static readonly _fts_fastingStatusIsChoice:true = true;
  /**
   * Default constructor for SpecimenCollection - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SpecimenCollectionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['collector']) { this.collector = new fhir.Reference(source.collector); }
    if (source['collected']) { this.collected = source.collected; }
    else if (source['collectedDateTime']) { this.collected = new fhir.FhirDateTime({value: source.collectedDateTime}); }
    else if (source['collectedPeriod']) { this.collected = new fhir.Period(source.collectedPeriod); }
    if (source['duration']) { this.duration = new fhir.Duration(source.duration); }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity); }
    if (source['method']) { this.method = new fhir.CodeableConcept(source.method); }
    if (source['bodySite']) { this.bodySite = new fhir.CodeableConcept(source.bodySite); }
    if (source['fastingStatus']) { this.fastingStatus = source.fastingStatus; }
    else if (source['fastingStatusCodeableConcept']) { this.fastingStatus = new fhir.CodeableConcept(source.fastingStatusCodeableConcept); }
    else if (source['fastingStatusDuration']) { this.fastingStatus = new fhir.Duration(source.fastingStatusDuration); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'Specimen.collection' }
    this.vOptS('collector',expression)
    this.vOptS('collected',expression)
    this.vOptS('duration',expression)
    this.vOptS('quantity',expression)
    this.vOptS('method',expression)
    this.vOptS('bodySite',expression)
    this.vOptS('fastingStatus',expression)
    return issues;
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
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['procedure']) { this.procedure = new fhir.CodeableConcept(source.procedure); }
    if (source['additive']) { this.additive = source.additive.map((x) => new fhir.Reference(x)); }
    else { this.additive = []; }
    if (source['time']) { this.time = source.time; }
    else if (source['timeDateTime']) { this.time = new fhir.FhirDateTime({value: source.timeDateTime}); }
    else if (source['timePeriod']) { this.time = new fhir.Period(source.timePeriod); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'Specimen.processing' }
    this.vOptS('description',expression)
    this.vOptS('procedure',expression)
    this.vOptA('additive',expression)
    this.vOptS('time',expression)
    return issues;
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
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['capacity']) { this.capacity = new fhir.Quantity(source.capacity); }
    if (source['specimenQuantity']) { this.specimenQuantity = new fhir.Quantity(source.specimenQuantity); }
    if (source['additive']) { this.additive = source.additive; }
    else if (source['additiveCodeableConcept']) { this.additive = new fhir.CodeableConcept(source.additiveCodeableConcept); }
    else if (source['additiveReference']) { this.additive = new fhir.Reference(source.additiveReference); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'Specimen.container' }
    this.vOptA('identifier',expression)
    this.vOptS('description',expression)
    this.vOptS('type',expression)
    this.vOptS('capacity',expression)
    this.vOptS('specimenQuantity',expression)
    this.vOptS('additive',expression)
    return issues;
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
   * The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * Time when specimen was received for processing or testing.
   */
  receivedTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Specimen.receivedTime
   */
  _receivedTime?:fhir.FhirElementArgs;
  /**
   * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
   */
  parent?: fhir.ReferenceArgs[]|undefined;
  /**
   * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
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
   * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
   */
  condition?: fhir.CodeableConceptArgs[]|undefined;
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
   * The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Time when specimen was received for processing or testing.
   */
  public receivedTime?: fhir.FhirDateTime|undefined;
  /**
   * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
   */
  public parent: fhir.Reference[];
  /**
   * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
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
   * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
   */
  public condition: fhir.CodeableConcept[];
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
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['accessionIdentifier']) { this.accessionIdentifier = new fhir.Identifier(source.accessionIdentifier); }
    if (source['status']) { this.status = new fhir.FhirCode<SpecimenStatusCodeType>({value: source.status}); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<SpecimenStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['receivedTime']) { this.receivedTime = new fhir.FhirDateTime({value: source.receivedTime}); }
    if (source['_receivedTime']) {
      if (this.receivedTime) { this.receivedTime.addExtendedProperties(source._receivedTime!); }
      else { this.receivedTime = new fhir.FhirDateTime(source._receivedTime as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['parent']) { this.parent = source.parent.map((x) => new fhir.Reference(x)); }
    else { this.parent = []; }
    if (source['request']) { this.request = source.request.map((x) => new fhir.Reference(x)); }
    else { this.request = []; }
    if (source['collection']) { this.collection = new fhir.SpecimenCollection(source.collection); }
    if (source['processing']) { this.processing = source.processing.map((x) => new fhir.SpecimenProcessing(x)); }
    else { this.processing = []; }
    if (source['container']) { this.container = source.container.map((x) => new fhir.SpecimenContainer(x)); }
    else { this.container = []; }
    if (source['condition']) { this.condition = source.condition.map((x) => new fhir.CodeableConcept(x)); }
    else { this.condition = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'Specimen' }
    this.vReqS('resourceType',expression)
    this.vOptA('identifier',expression)
    this.vOptS('accessionIdentifier',expression)
    this.vOptSV('status',expression,'SpecimenStatus',SpecimenStatusVsValidation,'r')
    this.vOptS('type',expression)
    this.vOptS('subject',expression)
    this.vOptS('receivedTime',expression)
    this.vOptA('parent',expression)
    this.vOptA('request',expression)
    this.vOptS('collection',expression)
    this.vOptA('processing',expression)
    this.vOptA('container',expression)
    this.vOptA('condition',expression)
    this.vOptA('note',expression)
    return issues;
  }
}
