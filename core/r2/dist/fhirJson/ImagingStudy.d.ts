import * as fhir from '../fhirJson.js';
/**
 * A single SOP Instance within the series, e.g. an image, or presentation state.
 */
export interface ImagingStudySeriesInstance extends fhir.BackboneElement {
    /**
     * The number of instance in the series.
     */
    number?: number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.number
     */
    _number?: fhir.FhirElement;
    /**
     * Formal identifier for this image or other content.
     */
    uid: string | null;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.uid
     */
    _uid?: fhir.FhirElement;
    /**
     * DICOM instance  type.
     */
    sopClass: string | null;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.sopClass
     */
    _sopClass?: fhir.FhirElement;
    /**
     * A human-friendly SOP Class name.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.type
     */
    _type?: fhir.FhirElement;
    /**
     * The description of the instance.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.title
     */
    _title?: fhir.FhirElement;
    /**
     * Content of the instance or a rendering thereof (e.g. a JPEG of an image, or an XML of a structured report). May be represented for example by inline encoding; by a URL reference to a WADO-RS service that makes the instance available; or to a FHIR Resource (e.g. Media, Document, etc.). Multiple content attachments may be used for alternate representations of the instance.
     */
    content?: (fhir.Attachment | null)[] | undefined;
}
/**
 * Each study has one or more series of images or other content.
 */
export interface ImagingStudySeries extends fhir.BackboneElement {
    /**
     * The Numeric identifier of this series in the study.
     */
    number?: number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.number
     */
    _number?: fhir.FhirElement;
    /**
     * The modality of this series sequence.
     */
    modality: fhir.Coding | null;
    /**
     * Formal identifier for this series.
     */
    uid: string | null;
    /**
     * Extended properties for primitive element: ImagingStudy.series.uid
     */
    _uid?: fhir.FhirElement;
    /**
     * A description of the series.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.description
     */
    _description?: fhir.FhirElement;
    /**
     * Number of SOP Instances in Series.
     */
    numberOfInstances: number | null;
    /**
     * Extended properties for primitive element: ImagingStudy.series.numberOfInstances
     */
    _numberOfInstances?: fhir.FhirElement;
    /**
     * Availability of series (online, offline or nearline).
     */
    availability?: 'NEARLINE' | 'OFFLINE' | 'ONLINE' | 'UNAVAILABLE' | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.availability
     */
    _availability?: fhir.FhirElement;
    /**
     * URI/URL specifying the location of the referenced series using WADO-RS.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.url
     */
    _url?: fhir.FhirElement;
    /**
     * Body part examined. See  DICOM Part 16 Annex L for the mapping from DICOM to Snomed CT.
     */
    bodySite?: fhir.Coding | undefined;
    /**
     * Laterality if body site is paired anatomic structure and laterality is not pre-coordinated in body site code.
     */
    laterality?: fhir.Coding | undefined;
    /**
     * The date and time the series was started.
     */
    started?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.started
     */
    _started?: fhir.FhirElement;
    /**
     * A single SOP Instance within the series, e.g. an image, or presentation state.
     */
    instance?: (fhir.ImagingStudySeriesInstance | null)[] | undefined;
}
/**
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 */
export interface ImagingStudy extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ImagingStudy" | null;
    /**
     * Date and Time the study started.
     */
    started?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.started
     */
    _started?: fhir.FhirElement;
    /**
     * The patient imaged in the study.
     */
    patient: fhir.Reference | null;
    /**
     * Formal identifier for the study.
     */
    uid: string | null;
    /**
     * Extended properties for primitive element: ImagingStudy.uid
     */
    _uid?: fhir.FhirElement;
    /**
     * Accession Number is an identifier related to some aspect of imaging workflow and data management. Usage may vary across different institutions.  See for instance [IHE Radiology Technical Framework Volume 1 Appendix A](http://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Rev13.0_Vol1_FT_2014-07-30.pdf).
     */
    accession?: fhir.Identifier | undefined;
    /**
     * Other identifiers for the study.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * To support grouped procedures (one imaging study supporting multiple ordered procedures, e.g. chest/abdomen/pelvis CT).
     */
    order?: (fhir.Reference | null)[] | undefined;
    /**
     * A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
     */
    modalityList?: (fhir.Coding | null)[] | undefined;
    /**
     * The requesting/referring physician.
     */
    referrer?: fhir.Reference | undefined;
    /**
     * Availability of study (online, offline or nearline).
     */
    availability?: 'NEARLINE' | 'OFFLINE' | 'ONLINE' | 'UNAVAILABLE' | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.availability
     */
    _availability?: fhir.FhirElement;
    /**
     * WADO-RS resource where Study is available.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.url
     */
    _url?: fhir.FhirElement;
    /**
     * Number of Series in Study.
     */
    numberOfSeries: number | null;
    /**
     * Extended properties for primitive element: ImagingStudy.numberOfSeries
     */
    _numberOfSeries?: fhir.FhirElement;
    /**
     * Number of SOP Instances in Study.
     */
    numberOfInstances: number | null;
    /**
     * Extended properties for primitive element: ImagingStudy.numberOfInstances
     */
    _numberOfInstances?: fhir.FhirElement;
    /**
     * Type of procedure performed.
     */
    procedure?: (fhir.Reference | null)[] | undefined;
    /**
     * Who read the study and interpreted the images or other content.
     */
    interpreter?: fhir.Reference | undefined;
    /**
     * Institution-generated description or classification of the Study performed.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.description
     */
    _description?: fhir.FhirElement;
    /**
     * Each study has one or more series of images or other content.
     */
    series?: (fhir.ImagingStudySeries | null)[] | undefined;
}
//# sourceMappingURL=ImagingStudy.d.ts.map