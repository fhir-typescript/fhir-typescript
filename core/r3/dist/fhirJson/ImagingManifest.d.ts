import * as fhir from '../fhirJson.js';
/**
 * SOP Instance component identify the instance selected, along with the study and series identities to form the DICOM identity hierarchy.
 */
export interface ImagingManifestStudySeriesInstance extends fhir.BackboneElement {
    /**
     * SOP class UID identifies the type of the selected instances, e.g. CT image, Gray scale softcopy presentation state, ECG waveform, etc.
     */
    sopClass: string | null;
    /**
     * Extended properties for primitive element: ImagingManifest.study.series.instance.sopClass
     */
    _sopClass?: fhir.FhirElement;
    /**
     * SOP instance UID identifies the instance.
     */
    uid: string | null;
    /**
     * Extended properties for primitive element: ImagingManifest.study.series.instance.uid
     */
    _uid?: fhir.FhirElement;
}
/**
 * Series component represents the series level identity and locator information of the DICOM SOP instances in the selection.
 */
export interface ImagingManifestStudySeries extends fhir.BackboneElement {
    /**
     * Series instance UID of the SOP instances in the selection.
     */
    uid: string | null;
    /**
     * Extended properties for primitive element: ImagingManifest.study.series.uid
     */
    _uid?: fhir.FhirElement;
    /**
     * The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.type.
     */
    endpoint?: (fhir.Reference | null)[] | undefined;
    /**
     * SOP Instance component identify the instance selected, along with the study and series identities to form the DICOM identity hierarchy.
     */
    instance: (fhir.ImagingManifestStudySeriesInstance | null)[] | null;
}
/**
 * Study component represents the study level identity and locator information of the DICOM SOP instances in the selection. It is the top level identity of the hierarchical identification of the instances.
 */
export interface ImagingManifestStudy extends fhir.BackboneElement {
    /**
     * Study instance UID of the SOP instances in the selection.
     */
    uid: string | null;
    /**
     * Extended properties for primitive element: ImagingManifest.study.uid
     */
    _uid?: fhir.FhirElement;
    /**
     * Reference to the Imaging Study in FHIR form.
     */
    imagingStudy?: fhir.Reference | undefined;
    /**
     * The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.type.
     */
    endpoint?: (fhir.Reference | null)[] | undefined;
    /**
     * Series component represents the series level identity and locator information of the DICOM SOP instances in the selection.
     */
    series: (fhir.ImagingManifestStudySeries | null)[] | null;
}
/**
 * A text description of the DICOM SOP instances selected in the ImagingManifest; or the reason for, or significance of, the selection.
 */
export interface ImagingManifest extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ImagingManifest" | null;
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
    authoringTime?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingManifest.authoringTime
     */
    _authoringTime?: fhir.FhirElement;
    /**
     * Author of ImagingManifest. It can be a human author or a device which made the decision of the SOP instances selected. For example, a radiologist selected a set of imaging SOP instances to attach in a diagnostic report, and a CAD application may author a selection to describe SOP instances it used to generate a detection conclusion.
     */
    author?: fhir.Reference | undefined;
    /**
     * Free text narrative description of the ImagingManifest.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingManifest.description
     */
    _description?: fhir.FhirElement;
    /**
     * Study component represents the study level identity and locator information of the DICOM SOP instances in the selection. It is the top level identity of the hierarchical identification of the instances.
     */
    study: (fhir.ImagingManifestStudy | null)[] | null;
}
//# sourceMappingURL=ImagingManifest.d.ts.map