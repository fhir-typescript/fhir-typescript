import * as fhir from '../fhir.js';
/**
 * Valid arguments for the ImagingManifestStudySeriesInstance type.
 */
export interface ImagingManifestStudySeriesInstanceArgs extends fhir.BackboneElementArgs {
    /**
     * SOP class UID identifies the type of the selected instances, e.g. CT image, Gray scale softcopy presentation state, ECG waveform, etc.
     */
    sopClass: fhir.FhirOid | string | undefined;
    /**
     * Extended properties for primitive element: ImagingManifest.study.series.instance.sopClass
     */
    _sopClass?: fhir.FhirElementArgs;
    /**
     * SOP instance UID identifies the instance.
     */
    uid: fhir.FhirOid | string | undefined;
    /**
     * Extended properties for primitive element: ImagingManifest.study.series.instance.uid
     */
    _uid?: fhir.FhirElementArgs;
}
/**
 * SOP Instance component identify the instance selected, along with the study and series identities to form the DICOM identity hierarchy.
 */
export declare class ImagingManifestStudySeriesInstance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * SOP class UID identifies the type of the selected instances, e.g. CT image, Gray scale softcopy presentation state, ECG waveform, etc.
     */
    sopClass: fhir.FhirOid | null;
    /**
     * SOP instance UID identifies the instance.
     */
    uid: fhir.FhirOid | null;
    /**
     * Default constructor for ImagingManifestStudySeriesInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImagingManifestStudySeriesInstanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImagingManifestStudySeries type.
 */
export interface ImagingManifestStudySeriesArgs extends fhir.BackboneElementArgs {
    /**
     * Series instance UID of the SOP instances in the selection.
     */
    uid: fhir.FhirOid | string | undefined;
    /**
     * Extended properties for primitive element: ImagingManifest.study.series.uid
     */
    _uid?: fhir.FhirElementArgs;
    /**
     * The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.type.
     */
    endpoint?: fhir.ReferenceArgs[] | undefined;
    /**
     * SOP Instance component identify the instance selected, along with the study and series identities to form the DICOM identity hierarchy.
     */
    instance: fhir.ImagingManifestStudySeriesInstanceArgs[] | null;
}
/**
 * Series component represents the series level identity and locator information of the DICOM SOP instances in the selection.
 */
export declare class ImagingManifestStudySeries extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Series instance UID of the SOP instances in the selection.
     */
    uid: fhir.FhirOid | null;
    /**
     * The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.type.
     */
    endpoint: fhir.Reference[];
    /**
     * SOP Instance component identify the instance selected, along with the study and series identities to form the DICOM identity hierarchy.
     */
    instance: fhir.ImagingManifestStudySeriesInstance[];
    /**
     * Default constructor for ImagingManifestStudySeries - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImagingManifestStudySeriesArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImagingManifestStudy type.
 */
export interface ImagingManifestStudyArgs extends fhir.BackboneElementArgs {
    /**
     * Study instance UID of the SOP instances in the selection.
     */
    uid: fhir.FhirOid | string | undefined;
    /**
     * Extended properties for primitive element: ImagingManifest.study.uid
     */
    _uid?: fhir.FhirElementArgs;
    /**
     * Reference to the Imaging Study in FHIR form.
     */
    imagingStudy?: fhir.ReferenceArgs | undefined;
    /**
     * The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.type.
     */
    endpoint?: fhir.ReferenceArgs[] | undefined;
    /**
     * Series component represents the series level identity and locator information of the DICOM SOP instances in the selection.
     */
    series: fhir.ImagingManifestStudySeriesArgs[] | null;
}
/**
 * Study component represents the study level identity and locator information of the DICOM SOP instances in the selection. It is the top level identity of the hierarchical identification of the instances.
 */
export declare class ImagingManifestStudy extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Study instance UID of the SOP instances in the selection.
     */
    uid: fhir.FhirOid | null;
    /**
     * Reference to the Imaging Study in FHIR form.
     */
    imagingStudy?: fhir.Reference | undefined;
    /**
     * The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.type.
     */
    endpoint: fhir.Reference[];
    /**
     * Series component represents the series level identity and locator information of the DICOM SOP instances in the selection.
     */
    series: fhir.ImagingManifestStudySeries[];
    /**
     * Default constructor for ImagingManifestStudy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImagingManifestStudyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImagingManifest type.
 */
export interface ImagingManifestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ImagingManifest" | undefined;
    /**
     * Unique identifier of the DICOM Key Object Selection (KOS) that this resource represents.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * SOP instances selected in the ImagingManifest can be from different studies, but must be of the same patient.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * Date and time when the selection of the referenced instances were made. It is (typically) different from the creation date of the selection resource, and from dates associated with the referenced instances (e.g. capture time of the referenced image).
     */
    authoringTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ImagingManifest.authoringTime
     */
    _authoringTime?: fhir.FhirElementArgs;
    /**
     * Author of ImagingManifest. It can be a human author or a device which made the decision of the SOP instances selected. For example, a radiologist selected a set of imaging SOP instances to attach in a diagnostic report, and a CAD application may author a selection to describe SOP instances it used to generate a detection conclusion.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * Free text narrative description of the ImagingManifest.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImagingManifest.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Study component represents the study level identity and locator information of the DICOM SOP instances in the selection. It is the top level identity of the hierarchical identification of the instances.
     */
    study: fhir.ImagingManifestStudyArgs[] | null;
}
/**
 * A text description of the DICOM SOP instances selected in the ImagingManifest; or the reason for, or significance of, the selection.
 */
export declare class ImagingManifest extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ImagingManifest";
    /**
     * Unique identifier of the DICOM Key Object Selection (KOS) that this resource represents.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * SOP instances selected in the ImagingManifest can be from different studies, but must be of the same patient.
     */
    patient: fhir.Reference | null;
    /**
     * Date and time when the selection of the referenced instances were made. It is (typically) different from the creation date of the selection resource, and from dates associated with the referenced instances (e.g. capture time of the referenced image).
     */
    authoringTime?: fhir.FhirDateTime | undefined;
    /**
     * Author of ImagingManifest. It can be a human author or a device which made the decision of the SOP instances selected. For example, a radiologist selected a set of imaging SOP instances to attach in a diagnostic report, and a CAD application may author a selection to describe SOP instances it used to generate a detection conclusion.
     */
    author?: fhir.Reference | undefined;
    /**
     * Free text narrative description of the ImagingManifest.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Study component represents the study level identity and locator information of the DICOM SOP instances in the selection. It is the top level identity of the hierarchical identification of the instances.
     */
    study: fhir.ImagingManifestStudy[];
    /**
     * Default constructor for ImagingManifest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImagingManifestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ImagingManifest.d.ts.map