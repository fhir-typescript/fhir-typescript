import * as fhir from '../fhir.js';
import { EventStatusCodeType } from '../fhirValueSets/EventStatusCodes.js';
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
     * Not to be used to link an event to an Encounter - use Media.encounter for that.
     * [The allowed reference resources may be adjusted as appropriate for the event resource].
     */
    partOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * A nominal state-transition diagram can be found in the [[event.html#statemachine | Event pattern]] documentation
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: fhir.FhirCode<EventStatusCodeType> | string | undefined;
    /**
     * A code that classifies whether the media is an image, video or audio recording or some other media category.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
     */
    modality?: fhir.CodeableConceptArgs | undefined;
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
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * The date and time(s) at which the media was collected.
     */
    created?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * The date and time(s) at which the media was collected.
     */
    createdDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The date and time(s) at which the media was collected.
     */
    createdPeriod?: fhir.PeriodArgs | undefined;
    /**
     * It may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that does not require the new version to be reviewed and verified again.
     */
    issued?: fhir.FhirInstant | string | undefined;
    /**
     * The person who administered the collection of the image.
     */
    operator?: fhir.ReferenceArgs | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.
     * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
     */
    bodySite?: fhir.CodeableConceptArgs | undefined;
    /**
     * The name of the device / manufacturer of the device  that was used to make the recording.
     */
    deviceName?: fhir.FhirString | string | undefined;
    /**
     * An extension should be used if further typing of the device is needed.  Secondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
     */
    device?: fhir.ReferenceArgs | undefined;
    /**
     * Height of the image in pixels (photo/video).
     */
    height?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Width of the image in pixels (photo/video).
     */
    width?: fhir.FhirPositiveInt | number | undefined;
    /**
     * if the number of frames is not supplied, the value may be unknown. Applications should not assume that there is only one frame unless it is explicitly stated.
     */
    frames?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The duration might differ from occurrencePeriod if recording was paused.
     */
    duration?: fhir.FhirDecimal | number | undefined;
    /**
     * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
     */
    content: fhir.AttachmentArgs | null;
    /**
     * Not to be used for observations, conclusions, etc. Instead use an [Observation](observation.html) based on the Media/ImagingStudy resource.
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
     * Not to be used to link an event to an Encounter - use Media.encounter for that.
     * [The allowed reference resources may be adjusted as appropriate for the event resource].
     */
    partOf: fhir.Reference[];
    /**
     * A nominal state-transition diagram can be found in the [[event.html#statemachine | Event pattern]] documentation
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: fhir.FhirCode<EventStatusCodeType> | null;
    /**
     * A code that classifies whether the media is an image, video or audio recording or some other media category.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
     */
    modality?: fhir.CodeableConcept | undefined;
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
    encounter?: fhir.Reference | undefined;
    /**
     * The date and time(s) at which the media was collected.
     */
    created?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Media.created[x]
     */
    protected static readonly _fts_createdIsChoice: true;
    /**
     * It may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that does not require the new version to be reviewed and verified again.
     */
    issued?: fhir.FhirInstant | undefined;
    /**
     * The person who administered the collection of the image.
     */
    operator?: fhir.Reference | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.
     * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * The name of the device / manufacturer of the device  that was used to make the recording.
     */
    deviceName?: fhir.FhirString | undefined;
    /**
     * An extension should be used if further typing of the device is needed.  Secondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
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
     * if the number of frames is not supplied, the value may be unknown. Applications should not assume that there is only one frame unless it is explicitly stated.
     */
    frames?: fhir.FhirPositiveInt | undefined;
    /**
     * The duration might differ from occurrencePeriod if recording was paused.
     */
    duration?: fhir.FhirDecimal | undefined;
    /**
     * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
     */
    content: fhir.Attachment | null;
    /**
     * Not to be used for observations, conclusions, etc. Instead use an [Observation](observation.html) based on the Media/ImagingStudy resource.
     */
    note: fhir.Annotation[];
    /**
     * Default constructor for Media - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MediaArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Media.status)
     */
    static get statusRequiredCodes(): {
        readonly Completed: "completed";
        readonly EnteredInError: "entered-in-error";
        readonly InProgress: "in-progress";
        readonly NotDone: "not-done";
        readonly OnHold: "on-hold";
        readonly Preparation: "preparation";
        readonly Stopped: "stopped";
        readonly Unknown: "unknown";
    };
    /**
     * Extensible-bound Value Set for type (Media.type)
     */
    static get typeExtensibleCodings(): {
        readonly Audio: fhir.Coding;
        readonly Image: fhir.Coding;
        readonly Video: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Media.d.ts.map