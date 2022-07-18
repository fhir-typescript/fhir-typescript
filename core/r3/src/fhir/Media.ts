// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Media

import * as fhir from '../fhir.js';

// @ts-ignore
import { DigitalMediaTypeCodes,  DigitalMediaTypeCodeType } from '../fhirValueSets/DigitalMediaTypeCodes.js';
// @ts-ignore
import { DigitalMediaTypeVsValidation } from '../fhirValueSets/DigitalMediaTypeVsValidation.js';
// @ts-ignore
import { DigitalMediaSubtypeCodes,  DigitalMediaSubtypeCodeType } from '../fhirValueSets/DigitalMediaSubtypeCodes.js';
// @ts-ignore
import { DigitalMediaSubtypeVsValidation } from '../fhirValueSets/DigitalMediaSubtypeVsValidation.js';
// @ts-ignore
import { MediaViewCodes,  MediaViewCodeType } from '../fhirValueSets/MediaViewCodes.js';
// @ts-ignore
import { MediaViewVsValidation } from '../fhirValueSets/MediaViewVsValidation.js';
// @ts-ignore
import { ProcedureReasonCodes,  ProcedureReasonCodeType } from '../fhirValueSets/ProcedureReasonCodes.js';
// @ts-ignore
import { ProcedureReasonVsValidation } from '../fhirValueSets/ProcedureReasonVsValidation.js';
// @ts-ignore
import { BodySiteCodes,  BodySiteCodeType } from '../fhirValueSets/BodySiteCodes.js';
// @ts-ignore
import { BodySiteVsValidation } from '../fhirValueSets/BodySiteVsValidation.js';
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
   * Whether the media is a photo (still image), an audio recording, or a video recording.
   */
  type: fhir.FhirCode<DigitalMediaTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Media.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
   */
  subtype?: fhir.CodeableConceptArgs|undefined;
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
  context?: fhir.ReferenceArgs|undefined;
  /**
   * The date and time(s) at which the media was collected.
   */
  occurrence?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * The date and time(s) at which the media was collected.
   */
  occurrenceDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The date and time(s) at which the media was collected.
   */
  occurrencePeriod?: fhir.PeriodArgs|undefined;
  /**
   * The person who administered the collection of the image.
   */
  operator?: fhir.ReferenceArgs|undefined;
  /**
   * Textual reasons can be caprued using reasonCode.text.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use The standard extension[ body-site-instance](extension-body-site-instance.html).
   */
  bodySite?: fhir.CodeableConceptArgs|undefined;
  /**
   * An extension should be used if further typing of the device is needed.  Scondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
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
   * The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.
   */
  frames?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: Media.frames
   */
  _frames?:fhir.FhirElementArgs;
  /**
   * The duration might differ from occurrencePeriod if recording was paused.
   */
  duration?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: Media.duration
   */
  _duration?:fhir.FhirElementArgs;
  /**
   * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For an media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
   */
  content: fhir.AttachmentArgs|null;
  /**
   * Comments made about the media by the performer, subject or other participants.
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
   * Whether the media is a photo (still image), an audio recording, or a video recording.
   */
  public type: fhir.FhirCode<DigitalMediaTypeCodeType>|null;
  /**
   * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
   */
  public subtype?: fhir.CodeableConcept|undefined;
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
  public context?: fhir.Reference|undefined;
  /**
   * The date and time(s) at which the media was collected.
   */
  public occurrence?: (fhir.FhirDateTime|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Media.occurrence[x]
   */
  protected static readonly _fts_occurrenceIsChoice:true = true;
  /**
   * The person who administered the collection of the image.
   */
  public operator?: fhir.Reference|undefined;
  /**
   * Textual reasons can be caprued using reasonCode.text.
   */
  public reasonCode: fhir.CodeableConcept[];
  /**
   * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use The standard extension[ body-site-instance](extension-body-site-instance.html).
   */
  public bodySite?: fhir.CodeableConcept|undefined;
  /**
   * An extension should be used if further typing of the device is needed.  Scondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
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
   * The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.
   */
  public frames?: fhir.FhirPositiveInt|undefined;
  /**
   * The duration might differ from occurrencePeriod if recording was paused.
   */
  public duration?: fhir.FhirUnsignedInt|undefined;
  /**
   * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For an media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
   */
  public content: fhir.Attachment|null;
  /**
   * Comments made about the media by the performer, subject or other participants.
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
    if (source['type']) { this.type = new fhir.FhirCode<DigitalMediaTypeCodeType>({value: source.type}); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<DigitalMediaTypeCodeType>(source._type as Partial<fhir.FhirCode>); }
    }
    if (source['subtype']) { this.subtype = new fhir.CodeableConcept(source.subtype); }
    if (source['view']) { this.view = new fhir.CodeableConcept(source.view); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['context']) { this.context = new fhir.Reference(source.context); }
    if (source['occurrence']) { this.occurrence = source.occurrence; }
    else if (source['occurrenceDateTime']) { this.occurrence = new fhir.FhirDateTime({value: source.occurrenceDateTime}); }
    else if (source['occurrencePeriod']) { this.occurrence = new fhir.Period(source.occurrencePeriod); }
    if (source['operator']) { this.operator = new fhir.Reference(source.operator); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reasonCode = []; }
    if (source['bodySite']) { this.bodySite = new fhir.CodeableConcept(source.bodySite); }
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
    if (source['duration']) { this.duration = new fhir.FhirUnsignedInt({value: source.duration}); }
    if (source['_duration']) {
      if (this.duration) { this.duration.addExtendedProperties(source._duration!); }
      else { this.duration = new fhir.FhirUnsignedInt(source._duration as Partial<fhir.FhirUnsignedIntArgs>); }
    }
    if (source['content']) { this.content = new fhir.Attachment(source.content); }
    else { this.content = null; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Media' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOA('basedOn',exp));
    iss.push(...this.vRSV('type',exp,'DigitalMediaType',DigitalMediaTypeVsValidation,'r'));
    iss.push(...this.vOS('subtype',exp));
    iss.push(...this.vOS('view',exp));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vOS('context',exp));
    iss.push(...this.vOS('occurrence',exp));
    iss.push(...this.vOS('operator',exp));
    iss.push(...this.vOA('reasonCode',exp));
    iss.push(...this.vOS('bodySite',exp));
    iss.push(...this.vOS('device',exp));
    iss.push(...this.vOS('height',exp));
    iss.push(...this.vOS('width',exp));
    iss.push(...this.vOS('frames',exp));
    iss.push(...this.vOS('duration',exp));
    iss.push(...this.vRS('content',exp));
    iss.push(...this.vOA('note',exp));
    return iss;
  }
}