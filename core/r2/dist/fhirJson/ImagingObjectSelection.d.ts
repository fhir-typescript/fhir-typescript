import * as fhir from '../fhirJson.js';
/**
 * The specific set of frames referenced in this imaging object selection. The URL retrieves the pixel data, and is encapsulated in a multipart MIME response.
 */
export interface ImagingObjectSelectionStudySeriesInstanceFrames extends fhir.BackboneElement {
    /**
     * One or more non-duplicate frame numbers in the selected instance.
     */
    frameNumbers: (number | null)[] | null;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.series.instance.frames.frameNumbers
     */
    _frameNumbers?: (fhir.FhirElement | null)[];
    /**
     * WADO-RS URL enables retrieval of the frames using DICOM WADO-RS API.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.series.instance.frames.url
     */
    _url?: fhir.FhirElement;
}
/**
 * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. This is the instance level identity of the instance in the selection.
 */
export interface ImagingObjectSelectionStudySeriesInstance extends fhir.BackboneElement {
    /**
     * DICOM SOP instances can be an image or other data object. The SOP class UID provide the accurate information about what type the instance is.
     */
    sopClass: string | null;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.series.instance.sopClass
     */
    _sopClass?: fhir.FhirElement;
    /**
     * SOP instance UID is required to fully identify the DICOM SOP instance in the selection.
     */
    uid: string | null;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.series.instance.uid
     */
    _uid?: fhir.FhirElement;
    /**
     * WADO-RS URL enables retrieval of the SOP instance using DICOM WADO-RS API.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.series.instance.url
     */
    _url?: fhir.FhirElement;
    /**
     * The specific set of frames referenced in this imaging object selection. The URL retrieves the pixel data, and is encapsulated in a multipart MIME response.
     */
    frames?: (fhir.ImagingObjectSelectionStudySeriesInstanceFrames | null)[] | undefined;
}
/**
 * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. In addition, the locator at the series level provide a means of retrieving the entire series.
 */
export interface ImagingObjectSelectionStudySeries extends fhir.BackboneElement {
    /**
     * Series instance UID is required to fully identify the DICOM SOP instances in the selection.
     */
    uid?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.series.uid
     */
    _uid?: fhir.FhirElement;
    /**
     * WADO-RS URL enables retrieval of the entire series using DICOM WADO-RS API.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.series.url
     */
    _url?: fhir.FhirElement;
    /**
     * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. This is the instance level identity of the instance in the selection.
     */
    instance: (fhir.ImagingObjectSelectionStudySeriesInstance | null)[] | null;
}
/**
 * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. In addition, the locator at the study level provide a means of retrieving the entire study.
 */
export interface ImagingObjectSelectionStudy extends fhir.BackboneElement {
    /**
     * Study instance UID is required to fully identify the DICOM SOP instances in the selection.
     */
    uid: string | null;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.uid
     */
    _uid?: fhir.FhirElement;
    /**
     * WADO-RS URL enables retrieval of the entire study using DICOM WADO-RS API.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.url
     */
    _url?: fhir.FhirElement;
    /**
     * Used to retrieve the ImagingStudy that contain the images referenced in the Imaging ObjectSelection.study.
     */
    imagingStudy?: fhir.Reference | undefined;
    /**
     * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. In addition, the locator at the series level provide a means of retrieving the entire series.
     */
    series: (fhir.ImagingObjectSelectionStudySeries | null)[] | null;
}
/**
 * A manifest of a set of DICOM Service-Object Pair Instances (SOP Instances).  The referenced SOP Instances (images or other content) are for a single patient, and may be from one or more studies. The referenced SOP Instances have been selected for a purpose, such as quality assurance, conference, or consult. Reflecting that range of purposes, typical ImagingObjectSelection resources may include all SOP Instances in a study (perhaps for sharing through a Health Information Exchange); key images from multiple studies (for reference by a referring or treating physician); a multi-frame ultrasound instance ("cine" video clip) and a set of measurements taken from that instance (for inclusion in a teaching file); and so on.
 */
export interface ImagingObjectSelection extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ImagingObjectSelection" | null;
    /**
     * DICOM SOP Instance is always assigned with a unique identifier (UID).
     */
    uid: string | null;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.uid
     */
    _uid?: fhir.FhirElement;
    /**
     * SOP Instances in ImagingObjectSelection must be from the same patient.
     */
    patient: fhir.Reference | null;
    /**
     * Need to represent the application purpose that the SOP instances in ImagingObjectSelection are selected for.
     */
    title: fhir.CodeableConcept | null;
    /**
     * Need to provide a narrative description of the SOP instances in the selection.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.description
     */
    _description?: fhir.FhirElement;
    /**
     * Track the selection decision maker.
     */
    author?: fhir.Reference | undefined;
    /**
     * Date and time when the selection was made can be important to understand the content of selection.
     */
    authoringTime?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.authoringTime
     */
    _authoringTime?: fhir.FhirElement;
    /**
     * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. In addition, the locator at the study level provide a means of retrieving the entire study.
     */
    study: (fhir.ImagingObjectSelectionStudy | null)[] | null;
}
//# sourceMappingURL=ImagingObjectSelection.d.ts.map