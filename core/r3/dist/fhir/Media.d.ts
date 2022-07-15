import * as fhir from '../fhir.js';
import { DigitalMediaTypeCodeType } from '../fhirValueSets/DigitalMediaTypeCodes.js';
/**
 * Valid arguments for the Media type.
 */
export interface MediaArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Media" | undefined;
    /**
     * The identifier label and use can be used to determine what kind of identifier it is.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A procedure that is fulfilled in whole or in part by the creation of this media.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * Whether the media is a photo (still image), an audio recording, or a video recording.
     */
    type: fhir.FhirCode<DigitalMediaTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Media.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
     */
    subtype?: fhir.CodeableConceptArgs | undefined;
    /**
     * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
     */
    view?: fhir.CodeableConceptArgs | undefined;
    /**
     * Who/What this Media is a record of.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * This will typically be the encounter the media occurred within.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * The date and time(s) at which the media was collected.
     */
    occurrence?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * The date and time(s) at which the media was collected.
     */
    occurrenceDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The date and time(s) at which the media was collected.
     */
    occurrencePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The person who administered the collection of the image.
     */
    operator?: fhir.ReferenceArgs | undefined;
    /**
     * Textual reasons can be caprued using reasonCode.text.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use The standard extension[ body-site-instance](extension-body-site-instance.html).
     */
    bodySite?: fhir.CodeableConceptArgs | undefined;
    /**
     * An extension should be used if further typing of the device is needed.  Scondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
     */
    device?: fhir.ReferenceArgs | undefined;
    /**
     * Height of the image in pixels (photo/video).
     */
    height?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Media.height
     */
    _height?: fhir.FhirElementArgs;
    /**
     * Width of the image in pixels (photo/video).
     */
    width?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Media.width
     */
    _width?: fhir.FhirElementArgs;
    /**
     * The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.
     */
    frames?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Media.frames
     */
    _frames?: fhir.FhirElementArgs;
    /**
     * The duration might differ from occurrencePeriod if recording was paused.
     */
    duration?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: Media.duration
     */
    _duration?: fhir.FhirElementArgs;
    /**
     * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For an media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
     */
    content: fhir.AttachmentArgs | null;
    /**
     * Comments made about the media by the performer, subject or other participants.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 */
export declare class Media extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Media";
    /**
     * The identifier label and use can be used to determine what kind of identifier it is.
     */
    identifier: fhir.Identifier[];
    /**
     * A procedure that is fulfilled in whole or in part by the creation of this media.
     */
    basedOn: fhir.Reference[];
    /**
     * Whether the media is a photo (still image), an audio recording, or a video recording.
     */
    type: fhir.FhirCode<DigitalMediaTypeCodeType> | null;
    /**
     * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
     */
    subtype?: fhir.CodeableConcept | undefined;
    /**
     * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
     */
    view?: fhir.CodeableConcept | undefined;
    /**
     * Who/What this Media is a record of.
     */
    subject?: fhir.Reference | undefined;
    /**
     * This will typically be the encounter the media occurred within.
     */
    context?: fhir.Reference | undefined;
    /**
     * The date and time(s) at which the media was collected.
     */
    occurrence?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Media.occurrence[x]
     */
    protected static readonly _fts_occurrenceIsChoice: true;
    /**
     * The person who administered the collection of the image.
     */
    operator?: fhir.Reference | undefined;
    /**
     * Textual reasons can be caprued using reasonCode.text.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use The standard extension[ body-site-instance](extension-body-site-instance.html).
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * An extension should be used if further typing of the device is needed.  Scondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
     */
    device?: fhir.Reference | undefined;
    /**
     * Height of the image in pixels (photo/video).
     */
    height?: fhir.FhirPositiveInt | undefined;
    /**
     * Width of the image in pixels (photo/video).
     */
    width?: fhir.FhirPositiveInt | undefined;
    /**
     * The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.
     */
    frames?: fhir.FhirPositiveInt | undefined;
    /**
     * The duration might differ from occurrencePeriod if recording was paused.
     */
    duration?: fhir.FhirUnsignedInt | undefined;
    /**
     * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For an media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
     */
    content: fhir.Attachment | null;
    /**
     * Comments made about the media by the performer, subject or other participants.
     */
    note: fhir.Annotation[];
    /**
     * Default constructor for Media - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MediaArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Media.d.ts.map