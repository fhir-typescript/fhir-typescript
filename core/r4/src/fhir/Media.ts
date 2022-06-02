// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Media

import * as fhir from '../fhir.js';

// @ts-ignore
import { EventStatusCodings, EventStatusCodingType,} from '../fhirValueSets/EventStatusCodings.js';
// @ts-ignore
import { EventStatusCodes,  EventStatusCodeType } from '../fhirValueSets/EventStatusCodes.js';
// @ts-ignore
import { MediaTypeCodings, MediaTypeCodingType,} from '../fhirValueSets/MediaTypeCodings.js';
// @ts-ignore
import { MediaTypeCodes,  MediaTypeCodeType } from '../fhirValueSets/MediaTypeCodes.js';
// @ts-ignore
import { MediaViewCodings, MediaViewCodingType,} from '../fhirValueSets/MediaViewCodings.js';
// @ts-ignore
import { MediaViewCodes,  MediaViewCodeType } from '../fhirValueSets/MediaViewCodes.js';
// @ts-ignore
import { ProcedureReasonCodings, ProcedureReasonCodingType,} from '../fhirValueSets/ProcedureReasonCodings.js';
// @ts-ignore
import { ProcedureReasonCodes,  ProcedureReasonCodeType } from '../fhirValueSets/ProcedureReasonCodes.js';
// @ts-ignore
import { BodySiteCodings, BodySiteCodingType,} from '../fhirValueSets/BodySiteCodings.js';
// @ts-ignore
import { BodySiteCodes,  BodySiteCodeType } from '../fhirValueSets/BodySiteCodes.js';
/**
 * Valid arguments for the Media type.
 */
export interface MediaArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Media"|undefined;
  /**
   * The identifier label and use can be used to determine what kind of identifier it is.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * A procedure that is fulfilled in whole or in part by the creation of this media.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * Not to be used to link an event to an Encounter - use Media.encounter for that.
   * [The allowed reference resources may be adjusted as appropriate for the event resource].
   */
  partOf?: fhir.ReferenceArgs[]|undefined;
  /**
   * A nominal state-transition diagram can be found in the [[event.html#statemachine | Event pattern]] documentation
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   */
  status: fhir.FhirCode<EventStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Media.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * A code that classifies whether the media is an image, video or audio recording or some other media category.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
   */
  modality?: fhir.CodeableConceptArgs|undefined;
  /**
   * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
   */
  view?: fhir.CodeableConceptArgs|undefined;
  /**
   * Who/What this Media is a record of.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * This will typically be the encounter the media occurred within.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * The date and time(s) at which the media was collected.
   */
  created?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * The date and time(s) at which the media was collected.
   */
  createdDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The date and time(s) at which the media was collected.
   */
  createdPeriod?: fhir.PeriodArgs|undefined;
  /**
   * It may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that does not require the new version to be reviewed and verified again.
   */
  issued?: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: Media.issued
   */
  _issued?:fhir.FhirElementArgs;
  /**
   * The person who administered the collection of the image.
   */
  operator?: fhir.ReferenceArgs|undefined;
  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.   
   * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
   */
  bodySite?: fhir.CodeableConceptArgs|undefined;
  /**
   * The name of the device / manufacturer of the device  that was used to make the recording.
   */
  deviceName?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Media.deviceName
   */
  _deviceName?:fhir.FhirElementArgs;
  /**
   * An extension should be used if further typing of the device is needed.  Secondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
   */
  device?: fhir.ReferenceArgs|undefined;
  /**
   * Height of the image in pixels (photo/video).
   */
  height?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: Media.height
   */
  _height?:fhir.FhirElementArgs;
  /**
   * Width of the image in pixels (photo/video).
   */
  width?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: Media.width
   */
  _width?:fhir.FhirElementArgs;
  /**
   * if the number of frames is not supplied, the value may be unknown. Applications should not assume that there is only one frame unless it is explicitly stated.
   */
  frames?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: Media.frames
   */
  _frames?:fhir.FhirElementArgs;
  /**
   * The duration might differ from occurrencePeriod if recording was paused.
   */
  duration?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: Media.duration
   */
  _duration?:fhir.FhirElementArgs;
  /**
   * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
   */
  content: fhir.AttachmentArgs|null;
  /**
   * Not to be used for observations, conclusions, etc. Instead use an [Observation](observation.html) based on the Media/ImagingStudy resource.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 */
export class Media extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Media';
  /**
   * Resource Type Name
   */
  public override resourceType: "Media";
  /**
   * The identifier label and use can be used to determine what kind of identifier it is.
   */
  public identifier: fhir.Identifier[];
  /**
   * A procedure that is fulfilled in whole or in part by the creation of this media.
   */
  public basedOn: fhir.Reference[];
  /**
   * Not to be used to link an event to an Encounter - use Media.encounter for that.
   * [The allowed reference resources may be adjusted as appropriate for the event resource].
   */
  public partOf: fhir.Reference[];
  /**
   * A nominal state-transition diagram can be found in the [[event.html#statemachine | Event pattern]] documentation
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   */
  public status: fhir.FhirCode<EventStatusCodeType>|null;
  /**
   * A code that classifies whether the media is an image, video or audio recording or some other media category.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
   */
  public modality?: fhir.CodeableConcept|undefined;
  /**
   * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
   */
  public view?: fhir.CodeableConcept|undefined;
  /**
   * Who/What this Media is a record of.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * This will typically be the encounter the media occurred within.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * The date and time(s) at which the media was collected.
   */
  public created?: (fhir.FhirDateTime|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Media.created[x]
   */
  protected static readonly _fts_createdIsChoice:true = true;
  /**
   * It may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that does not require the new version to be reviewed and verified again.
   */
  public issued?: fhir.FhirInstant|undefined;
  /**
   * The person who administered the collection of the image.
   */
  public operator?: fhir.Reference|undefined;
  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  public reasonCode: fhir.CodeableConcept[];
  /**
   * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.   
   * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
   */
  public bodySite?: fhir.CodeableConcept|undefined;
  /**
   * The name of the device / manufacturer of the device  that was used to make the recording.
   */
  public deviceName?: fhir.FhirString|undefined;
  /**
   * An extension should be used if further typing of the device is needed.  Secondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
   */
  public device?: fhir.Reference|undefined;
  /**
   * Height of the image in pixels (photo/video).
   */
  public height?: fhir.FhirPositiveInt|undefined;
  /**
   * Width of the image in pixels (photo/video).
   */
  public width?: fhir.FhirPositiveInt|undefined;
  /**
   * if the number of frames is not supplied, the value may be unknown. Applications should not assume that there is only one frame unless it is explicitly stated.
   */
  public frames?: fhir.FhirPositiveInt|undefined;
  /**
   * The duration might differ from occurrencePeriod if recording was paused.
   */
  public duration?: fhir.FhirDecimal|undefined;
  /**
   * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
   */
  public content: fhir.Attachment|null;
  /**
   * Not to be used for observations, conclusions, etc. Instead use an [Observation](observation.html) based on the Media/ImagingStudy resource.
   */
  public note: fhir.Annotation[];
  /**
   * Default constructor for Media - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MediaArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Media';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    else { this.basedOn = []; }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x)); }
    else { this.partOf = []; }
    if (source['status']) { this.status = new fhir.FhirCode<EventStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<EventStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['modality']) { this.modality = new fhir.CodeableConcept(source.modality); }
    if (source['view']) { this.view = new fhir.CodeableConcept(source.view); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['created']) { this.created = source.created; }
    else if (source['createdDateTime']) { this.created = new fhir.FhirDateTime({value: source.createdDateTime}); }
    else if (source['createdPeriod']) { this.created = new fhir.Period(source.createdPeriod); }
    if (source['issued']) { this.issued = new fhir.FhirInstant({value: source.issued}); }
    if (source['_issued']) {
      if (this.issued) { this.issued.addExtendedProperties(source._issued!); }
      else { this.issued = new fhir.FhirInstant(source._issued as Partial<fhir.FhirInstantArgs>); }
    }
    if (source['operator']) { this.operator = new fhir.Reference(source.operator); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reasonCode = []; }
    if (source['bodySite']) { this.bodySite = new fhir.CodeableConcept(source.bodySite); }
    if (source['deviceName']) { this.deviceName = new fhir.FhirString({value: source.deviceName}); }
    if (source['_deviceName']) {
      if (this.deviceName) { this.deviceName.addExtendedProperties(source._deviceName!); }
      else { this.deviceName = new fhir.FhirString(source._deviceName as Partial<fhir.FhirStringArgs>); }
    }
    if (source['device']) { this.device = new fhir.Reference(source.device); }
    if (source['height']) { this.height = new fhir.FhirPositiveInt({value: source.height}); }
    if (source['_height']) {
      if (this.height) { this.height.addExtendedProperties(source._height!); }
      else { this.height = new fhir.FhirPositiveInt(source._height as Partial<fhir.FhirPositiveIntArgs>); }
    }
    if (source['width']) { this.width = new fhir.FhirPositiveInt({value: source.width}); }
    if (source['_width']) {
      if (this.width) { this.width.addExtendedProperties(source._width!); }
      else { this.width = new fhir.FhirPositiveInt(source._width as Partial<fhir.FhirPositiveIntArgs>); }
    }
    if (source['frames']) { this.frames = new fhir.FhirPositiveInt({value: source.frames}); }
    if (source['_frames']) {
      if (this.frames) { this.frames.addExtendedProperties(source._frames!); }
      else { this.frames = new fhir.FhirPositiveInt(source._frames as Partial<fhir.FhirPositiveIntArgs>); }
    }
    if (source['duration']) { this.duration = new fhir.FhirDecimal({value: source.duration}); }
    if (source['_duration']) {
      if (this.duration) { this.duration.addExtendedProperties(source._duration!); }
      else { this.duration = new fhir.FhirDecimal(source._duration as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['content']) { this.content = new fhir.Attachment(source.content); }
    else { this.content = null; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
  }
  /**
   * Required-bound Value Set for status (Media.status)
   */
  public static get statusRequiredCodes() {
    return EventStatusCodes;
  }
  /**
   * Extensible-bound Value Set for type (Media.type)
   */
  public static get typeExtensibleCodings():MediaTypeCodingType {
    return MediaTypeCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'Media' }
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType fhir: Media.resourceType:"Media"', expression: [expression] });
    }
    if (this["identifier"]) { this.identifier.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.identifier[${i}]`)); }) }
    if (this["basedOn"]) { this.basedOn.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.basedOn[${i}]`)); }) }
    if (this["partOf"]) { this.partOf.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.partOf[${i}]`)); }) }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status fhir: Media.status:code', expression: [expression] });
    }
    if (this['status'] && (!Object.values(EventStatusCodes).includes(this.status.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'status (Media.status) of type code is missing code for Required binding to: EventStatus', expression: [expression] });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation(expression+'.status')); }
    if (this["type"]) { issues.push(...this.type.doModelValidation(expression+'.type')); }
    if (this["modality"]) { issues.push(...this.modality.doModelValidation(expression+'.modality')); }
    if (this["view"]) { issues.push(...this.view.doModelValidation(expression+'.view')); }
    if (this["subject"]) { issues.push(...this.subject.doModelValidation(expression+'.subject')); }
    if (this["encounter"]) { issues.push(...this.encounter.doModelValidation(expression+'.encounter')); }
    if (this["issued"]) { issues.push(...this.issued.doModelValidation(expression+'.issued')); }
    if (this["operator"]) { issues.push(...this.operator.doModelValidation(expression+'.operator')); }
    if (this["reasonCode"]) { this.reasonCode.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.reasonCode[${i}]`)); }) }
    if (this["bodySite"]) { issues.push(...this.bodySite.doModelValidation(expression+'.bodySite')); }
    if (this["deviceName"]) { issues.push(...this.deviceName.doModelValidation(expression+'.deviceName')); }
    if (this["device"]) { issues.push(...this.device.doModelValidation(expression+'.device')); }
    if (this["height"]) { issues.push(...this.height.doModelValidation(expression+'.height')); }
    if (this["width"]) { issues.push(...this.width.doModelValidation(expression+'.width')); }
    if (this["frames"]) { issues.push(...this.frames.doModelValidation(expression+'.frames')); }
    if (this["duration"]) { issues.push(...this.duration.doModelValidation(expression+'.duration')); }
    if (!this['content']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property content fhir: Media.content:Attachment', expression: [expression] });
    }
    if (this["content"]) { issues.push(...this.content.doModelValidation(expression+'.content')); }
    if (this["note"]) { this.note.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.note[${i}]`)); }) }
    return issues;
  }
}
