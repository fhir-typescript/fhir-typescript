import * as fhir from '../fhir.js';
/**
 * Valid arguments for the ImagingObjectSelectionStudySeriesInstanceFrames type.
 */
export interface ImagingObjectSelectionStudySeriesInstanceFramesArgs extends fhir.BackboneElementArgs {
    /**
     * One or more non-duplicate frame numbers in the selected instance.
     */
    frameNumbers: fhir.FhirUnsignedInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.series.instance.frames.frameNumbers
     */
    _frameNumbers?: (fhir.FhirElementArgs | null)[];
    /**
     * WADO-RS URL enables retrieval of the frames using DICOM WADO-RS API.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.series.instance.frames.url
     */
    _url?: fhir.FhirElementArgs;
}
/**
 * The specific set of frames referenced in this imaging object selection. The URL retrieves the pixel data, and is encapsulated in a multipart MIME response.
 */
export declare class ImagingObjectSelectionStudySeriesInstanceFrames extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * One or more non-duplicate frame numbers in the selected instance.
     */
    frameNumbers: fhir.FhirUnsignedInt[];
    /**
     * WADO-RS URL enables retrieval of the frames using DICOM WADO-RS API.
     */
    url: fhir.FhirUri | null;
    /**
     * Default constructor for ImagingObjectSelectionStudySeriesInstanceFrames - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImagingObjectSelectionStudySeriesInstanceFramesArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImagingObjectSelectionStudySeriesInstance type.
 */
export interface ImagingObjectSelectionStudySeriesInstanceArgs extends fhir.BackboneElementArgs {
    /**
     * DICOM SOP instances can be an image or other data object. The SOP class UID provide the accurate information about what type the instance is.
     */
    sopClass: fhir.FhirOid | string | undefined;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.series.instance.sopClass
     */
    _sopClass?: fhir.FhirElementArgs;
    /**
     * SOP instance UID is required to fully identify the DICOM SOP instance in the selection.
     */
    uid: fhir.FhirOid | string | undefined;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.series.instance.uid
     */
    _uid?: fhir.FhirElementArgs;
    /**
     * WADO-RS URL enables retrieval of the SOP instance using DICOM WADO-RS API.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.series.instance.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * The specific set of frames referenced in this imaging object selection. The URL retrieves the pixel data, and is encapsulated in a multipart MIME response.
     */
    frames?: fhir.ImagingObjectSelectionStudySeriesInstanceFramesArgs[] | undefined;
}
/**
 * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. This is the instance level identity of the instance in the selection.
 */
export declare class ImagingObjectSelectionStudySeriesInstance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * DICOM SOP instances can be an image or other data object. The SOP class UID provide the accurate information about what type the instance is.
     */
    sopClass: fhir.FhirOid | null;
    /**
     * SOP instance UID is required to fully identify the DICOM SOP instance in the selection.
     */
    uid: fhir.FhirOid | null;
    /**
     * WADO-RS URL enables retrieval of the SOP instance using DICOM WADO-RS API.
     */
    url: fhir.FhirUri | null;
    /**
     * The specific set of frames referenced in this imaging object selection. The URL retrieves the pixel data, and is encapsulated in a multipart MIME response.
     */
    frames: fhir.ImagingObjectSelectionStudySeriesInstanceFrames[];
    /**
     * Default constructor for ImagingObjectSelectionStudySeriesInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImagingObjectSelectionStudySeriesInstanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImagingObjectSelectionStudySeries type.
 */
export interface ImagingObjectSelectionStudySeriesArgs extends fhir.BackboneElementArgs {
    /**
     * Series instance UID is required to fully identify the DICOM SOP instances in the selection.
     */
    uid?: fhir.FhirOid | string | undefined;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.series.uid
     */
    _uid?: fhir.FhirElementArgs;
    /**
     * WADO-RS URL enables retrieval of the entire series using DICOM WADO-RS API.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.series.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. This is the instance level identity of the instance in the selection.
     */
    instance: fhir.ImagingObjectSelectionStudySeriesInstanceArgs[] | null;
}
/**
 * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. In addition, the locator at the series level provide a means of retrieving the entire series.
 */
export declare class ImagingObjectSelectionStudySeries extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Series instance UID is required to fully identify the DICOM SOP instances in the selection.
     */
    uid?: fhir.FhirOid | undefined;
    /**
     * WADO-RS URL enables retrieval of the entire series using DICOM WADO-RS API.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. This is the instance level identity of the instance in the selection.
     */
    instance: fhir.ImagingObjectSelectionStudySeriesInstance[];
    /**
     * Default constructor for ImagingObjectSelectionStudySeries - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImagingObjectSelectionStudySeriesArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImagingObjectSelectionStudy type.
 */
export interface ImagingObjectSelectionStudyArgs extends fhir.BackboneElementArgs {
    /**
     * Study instance UID is required to fully identify the DICOM SOP instances in the selection.
     */
    uid: fhir.FhirOid | string | undefined;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.uid
     */
    _uid?: fhir.FhirElementArgs;
    /**
     * WADO-RS URL enables retrieval of the entire study using DICOM WADO-RS API.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.study.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Used to retrieve the ImagingStudy that contain the images referenced in the Imaging ObjectSelection.study.
     */
    imagingStudy?: fhir.ReferenceArgs | undefined;
    /**
     * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. In addition, the locator at the series level provide a means of retrieving the entire series.
     */
    series: fhir.ImagingObjectSelectionStudySeriesArgs[] | null;
}
/**
 * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. In addition, the locator at the study level provide a means of retrieving the entire study.
 */
export declare class ImagingObjectSelectionStudy extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Study instance UID is required to fully identify the DICOM SOP instances in the selection.
     */
    uid: fhir.FhirOid | null;
    /**
     * WADO-RS URL enables retrieval of the entire study using DICOM WADO-RS API.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Used to retrieve the ImagingStudy that contain the images referenced in the Imaging ObjectSelection.study.
     */
    imagingStudy?: fhir.Reference | undefined;
    /**
     * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. In addition, the locator at the series level provide a means of retrieving the entire series.
     */
    series: fhir.ImagingObjectSelectionStudySeries[];
    /**
     * Default constructor for ImagingObjectSelectionStudy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImagingObjectSelectionStudyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImagingObjectSelection type.
 */
export interface ImagingObjectSelectionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ImagingObjectSelection" | undefined;
    /**
     * DICOM SOP Instance is always assigned with a unique identifier (UID).
     */
    uid: fhir.FhirOid | string | undefined;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.uid
     */
    _uid?: fhir.FhirElementArgs;
    /**
     * SOP Instances in ImagingObjectSelection must be from the same patient.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * Need to represent the application purpose that the SOP instances in ImagingObjectSelection are selected for.
     */
    title: fhir.CodeableConceptArgs | null;
    /**
     * Need to provide a narrative description of the SOP instances in the selection.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Track the selection decision maker.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * Date and time when the selection was made can be important to understand the content of selection.
     */
    authoringTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ImagingObjectSelection.authoringTime
     */
    _authoringTime?: fhir.FhirElementArgs;
    /**
     * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. In addition, the locator at the study level provide a means of retrieving the entire study.
     */
    study: fhir.ImagingObjectSelectionStudyArgs[] | null;
}
/**
 * A manifest of a set of DICOM Service-Object Pair Instances (SOP Instances).  The referenced SOP Instances (images or other content) are for a single patient, and may be from one or more studies. The referenced SOP Instances have been selected for a purpose, such as quality assurance, conference, or consult. Reflecting that range of purposes, typical ImagingObjectSelection resources may include all SOP Instances in a study (perhaps for sharing through a Health Information Exchange); key images from multiple studies (for reference by a referring or treating physician); a multi-frame ultrasound instance ("cine" video clip) and a set of measurements taken from that instance (for inclusion in a teaching file); and so on.
 */
export declare class ImagingObjectSelection extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ImagingObjectSelection";
    /**
     * DICOM SOP Instance is always assigned with a unique identifier (UID).
     */
    uid: fhir.FhirOid | null;
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
    description?: fhir.FhirString | undefined;
    /**
     * Track the selection decision maker.
     */
    author?: fhir.Reference | undefined;
    /**
     * Date and time when the selection was made can be important to understand the content of selection.
     */
    authoringTime?: fhir.FhirDateTime | undefined;
    /**
     * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. In addition, the locator at the study level provide a means of retrieving the entire study.
     */
    study: fhir.ImagingObjectSelectionStudy[];
    /**
     * Default constructor for ImagingObjectSelection - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImagingObjectSelectionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ImagingObjectSelection.d.ts.map