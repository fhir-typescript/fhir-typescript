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
     * Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Who/What this Media is a record of.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * The person who administered the collection of the image.
     */
    operator?: fhir.ReferenceArgs | undefined;
    /**
     * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
     */
    view?: fhir.CodeableConceptArgs | undefined;
    /**
     * The name of the device / manufacturer of the device  that was used to make the recording.
     */
    deviceName?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Media.deviceName
     */
    _deviceName?: fhir.FhirElementArgs;
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
     * The duration of the recording in seconds - for audio and video.
     */
    duration?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: Media.duration
     */
    _duration?: fhir.FhirElementArgs;
    /**
     * The actual content of the media - inline or by direct reference to the media source file.
     */
    content: fhir.AttachmentArgs | null;
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
     * Whether the media is a photo (still image), an audio recording, or a video recording.
     */
    type: fhir.FhirCode<DigitalMediaTypeCodeType> | null;
    /**
     * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
     */
    subtype?: fhir.CodeableConcept | undefined;
    /**
     * Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers.
     */
    identifier: fhir.Identifier[];
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
    deviceName?: fhir.FhirString | undefined;
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
     * The duration of the recording in seconds - for audio and video.
     */
    duration?: fhir.FhirUnsignedInt | undefined;
    /**
     * The actual content of the media - inline or by direct reference to the media source file.
     */
    content: fhir.Attachment | null;
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