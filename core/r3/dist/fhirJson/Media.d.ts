import * as fhir from '../fhirJson.js';
/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 */
export interface Media extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Media" | null;
    /**
     * The identifier label and use can be used to determine what kind of identifier it is.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * A procedure that is fulfilled in whole or in part by the creation of this media.
     */
    basedOn?: (fhir.Reference | null)[] | undefined;
    /**
     * Whether the media is a photo (still image), an audio recording, or a video recording.
     */
    type: 'audio' | 'photo' | 'video' | null;
    /**
     * Extended properties for primitive element: Media.type
     */
    _type?: fhir.FhirElement;
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
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Media.occurrence[x]
     */
    _occurrenceDateTime?: fhir.FhirElement;
    /**
     * The date and time(s) at which the media was collected.
     */
    occurrencePeriod?: fhir.Period | undefined;
    /**
     * The person who administered the collection of the image.
     */
    operator?: fhir.Reference | undefined;
    /**
     * Textual reasons can be caprued using reasonCode.text.
     */
    reasonCode?: (fhir.CodeableConcept | null)[] | undefined;
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
    height?: number | undefined;
    /**
     * Extended properties for primitive element: Media.height
     */
    _height?: fhir.FhirElement;
    /**
     * Width of the image in pixels (photo/video).
     */
    width?: number | undefined;
    /**
     * Extended properties for primitive element: Media.width
     */
    _width?: fhir.FhirElement;
    /**
     * The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.
     */
    frames?: number | undefined;
    /**
     * Extended properties for primitive element: Media.frames
     */
    _frames?: fhir.FhirElement;
    /**
     * The duration might differ from occurrencePeriod if recording was paused.
     */
    duration?: number | undefined;
    /**
     * Extended properties for primitive element: Media.duration
     */
    _duration?: fhir.FhirElement;
    /**
     * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For an media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
     */
    content: fhir.Attachment | null;
    /**
     * Comments made about the media by the performer, subject or other participants.
     */
    note?: (fhir.Annotation | null)[] | undefined;
}
//# sourceMappingURL=Media.d.ts.map