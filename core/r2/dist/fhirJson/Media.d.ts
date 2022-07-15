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
     * Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Who/What this Media is a record of.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The person who administered the collection of the image.
     */
    operator?: fhir.Reference | undefined;
    /**
     * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
     */
    view?: fhir.CodeableConcept | undefined;
    /**
     * The name of the device / manufacturer of the device  that was used to make the recording.
     */
    deviceName?: string | undefined;
    /**
     * Extended properties for primitive element: Media.deviceName
     */
    _deviceName?: fhir.FhirElement;
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
     * The duration of the recording in seconds - for audio and video.
     */
    duration?: number | undefined;
    /**
     * Extended properties for primitive element: Media.duration
     */
    _duration?: fhir.FhirElement;
    /**
     * The actual content of the media - inline or by direct reference to the media source file.
     */
    content: fhir.Attachment | null;
}
//# sourceMappingURL=Media.d.ts.map