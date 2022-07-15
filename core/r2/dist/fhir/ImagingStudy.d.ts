import * as fhir from '../fhir.js';
import { InstanceAvailabilityCodeType } from '../fhirValueSets/InstanceAvailabilityCodes.js';
/**
 * Valid arguments for the ImagingStudySeriesInstance type.
 */
export interface ImagingStudySeriesInstanceArgs extends fhir.BackboneElementArgs {
    /**
     * The number of instance in the series.
     */
    number?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.number
     */
    _number?: fhir.FhirElementArgs;
    /**
     * Formal identifier for this image or other content.
     */
    uid: fhir.FhirOid | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.uid
     */
    _uid?: fhir.FhirElementArgs;
    /**
     * DICOM instance  type.
     */
    sopClass: fhir.FhirOid | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.sopClass
     */
    _sopClass?: fhir.FhirElementArgs;
    /**
     * A human-friendly SOP Class name.
     */
    type?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * The description of the instance.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Content of the instance or a rendering thereof (e.g. a JPEG of an image, or an XML of a structured report). May be represented for example by inline encoding; by a URL reference to a WADO-RS service that makes the instance available; or to a FHIR Resource (e.g. Media, Document, etc.). Multiple content attachments may be used for alternate representations of the instance.
     */
    content?: fhir.AttachmentArgs[] | undefined;
}
/**
 * A single SOP Instance within the series, e.g. an image, or presentation state.
 */
export declare class ImagingStudySeriesInstance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The number of instance in the series.
     */
    number?: fhir.FhirUnsignedInt | undefined;
    /**
     * Formal identifier for this image or other content.
     */
    uid: fhir.FhirOid | null;
    /**
     * DICOM instance  type.
     */
    sopClass: fhir.FhirOid | null;
    /**
     * A human-friendly SOP Class name.
     */
    type?: fhir.FhirString | undefined;
    /**
     * The description of the instance.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Content of the instance or a rendering thereof (e.g. a JPEG of an image, or an XML of a structured report). May be represented for example by inline encoding; by a URL reference to a WADO-RS service that makes the instance available; or to a FHIR Resource (e.g. Media, Document, etc.). Multiple content attachments may be used for alternate representations of the instance.
     */
    content: fhir.Attachment[];
    /**
     * Default constructor for ImagingStudySeriesInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImagingStudySeriesInstanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImagingStudySeries type.
 */
export interface ImagingStudySeriesArgs extends fhir.BackboneElementArgs {
    /**
     * The Numeric identifier of this series in the study.
     */
    number?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.number
     */
    _number?: fhir.FhirElementArgs;
    /**
     * The modality of this series sequence.
     */
    modality: fhir.CodingArgs | null;
    /**
     * Formal identifier for this series.
     */
    uid: fhir.FhirOid | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.uid
     */
    _uid?: fhir.FhirElementArgs;
    /**
     * A description of the series.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Number of SOP Instances in Series.
     */
    numberOfInstances: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.numberOfInstances
     */
    _numberOfInstances?: fhir.FhirElementArgs;
    /**
     * Availability of series (online, offline or nearline).
     */
    availability?: fhir.FhirCode<InstanceAvailabilityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.availability
     */
    _availability?: fhir.FhirElementArgs;
    /**
     * URI/URL specifying the location of the referenced series using WADO-RS.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Body part examined. See  DICOM Part 16 Annex L for the mapping from DICOM to Snomed CT.
     */
    bodySite?: fhir.CodingArgs | undefined;
    /**
     * Laterality if body site is paired anatomic structure and laterality is not pre-coordinated in body site code.
     */
    laterality?: fhir.CodingArgs | undefined;
    /**
     * The date and time the series was started.
     */
    started?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.started
     */
    _started?: fhir.FhirElementArgs;
    /**
     * A single SOP Instance within the series, e.g. an image, or presentation state.
     */
    instance?: fhir.ImagingStudySeriesInstanceArgs[] | undefined;
}
/**
 * Each study has one or more series of images or other content.
 */
export declare class ImagingStudySeries extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The Numeric identifier of this series in the study.
     */
    number?: fhir.FhirUnsignedInt | undefined;
    /**
     * The modality of this series sequence.
     */
    modality: fhir.Coding | null;
    /**
     * Formal identifier for this series.
     */
    uid: fhir.FhirOid | null;
    /**
     * A description of the series.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Number of SOP Instances in Series.
     */
    numberOfInstances: fhir.FhirUnsignedInt | null;
    /**
     * Availability of series (online, offline or nearline).
     */
    availability?: fhir.FhirCode<InstanceAvailabilityCodeType> | undefined;
    /**
     * URI/URL specifying the location of the referenced series using WADO-RS.
     */
    url?: fhir.FhirUri | undefined;
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
    started?: fhir.FhirDateTime | undefined;
    /**
     * A single SOP Instance within the series, e.g. an image, or presentation state.
     */
    instance: fhir.ImagingStudySeriesInstance[];
    /**
     * Default constructor for ImagingStudySeries - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImagingStudySeriesArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImagingStudy type.
 */
export interface ImagingStudyArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ImagingStudy" | undefined;
    /**
     * Date and Time the study started.
     */
    started?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.started
     */
    _started?: fhir.FhirElementArgs;
    /**
     * The patient imaged in the study.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * Formal identifier for the study.
     */
    uid: fhir.FhirOid | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.uid
     */
    _uid?: fhir.FhirElementArgs;
    /**
     * Accession Number is an identifier related to some aspect of imaging workflow and data management. Usage may vary across different institutions.  See for instance [IHE Radiology Technical Framework Volume 1 Appendix A](http://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Rev13.0_Vol1_FT_2014-07-30.pdf).
     */
    accession?: fhir.IdentifierArgs | undefined;
    /**
     * Other identifiers for the study.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * To support grouped procedures (one imaging study supporting multiple ordered procedures, e.g. chest/abdomen/pelvis CT).
     */
    order?: fhir.ReferenceArgs[] | undefined;
    /**
     * A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
     */
    modalityList?: fhir.CodingArgs[] | undefined;
    /**
     * The requesting/referring physician.
     */
    referrer?: fhir.ReferenceArgs | undefined;
    /**
     * Availability of study (online, offline or nearline).
     */
    availability?: fhir.FhirCode<InstanceAvailabilityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.availability
     */
    _availability?: fhir.FhirElementArgs;
    /**
     * WADO-RS resource where Study is available.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Number of Series in Study.
     */
    numberOfSeries: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.numberOfSeries
     */
    _numberOfSeries?: fhir.FhirElementArgs;
    /**
     * Number of SOP Instances in Study.
     */
    numberOfInstances: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.numberOfInstances
     */
    _numberOfInstances?: fhir.FhirElementArgs;
    /**
     * Type of procedure performed.
     */
    procedure?: fhir.ReferenceArgs[] | undefined;
    /**
     * Who read the study and interpreted the images or other content.
     */
    interpreter?: fhir.ReferenceArgs | undefined;
    /**
     * Institution-generated description or classification of the Study performed.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Each study has one or more series of images or other content.
     */
    series?: fhir.ImagingStudySeriesArgs[] | undefined;
}
/**
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 */
export declare class ImagingStudy extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ImagingStudy";
    /**
     * Date and Time the study started.
     */
    started?: fhir.FhirDateTime | undefined;
    /**
     * The patient imaged in the study.
     */
    patient: fhir.Reference | null;
    /**
     * Formal identifier for the study.
     */
    uid: fhir.FhirOid | null;
    /**
     * Accession Number is an identifier related to some aspect of imaging workflow and data management. Usage may vary across different institutions.  See for instance [IHE Radiology Technical Framework Volume 1 Appendix A](http://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Rev13.0_Vol1_FT_2014-07-30.pdf).
     */
    accession?: fhir.Identifier | undefined;
    /**
     * Other identifiers for the study.
     */
    identifier: fhir.Identifier[];
    /**
     * To support grouped procedures (one imaging study supporting multiple ordered procedures, e.g. chest/abdomen/pelvis CT).
     */
    order: fhir.Reference[];
    /**
     * A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
     */
    modalityList: fhir.Coding[];
    /**
     * The requesting/referring physician.
     */
    referrer?: fhir.Reference | undefined;
    /**
     * Availability of study (online, offline or nearline).
     */
    availability?: fhir.FhirCode<InstanceAvailabilityCodeType> | undefined;
    /**
     * WADO-RS resource where Study is available.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Number of Series in Study.
     */
    numberOfSeries: fhir.FhirUnsignedInt | null;
    /**
     * Number of SOP Instances in Study.
     */
    numberOfInstances: fhir.FhirUnsignedInt | null;
    /**
     * Type of procedure performed.
     */
    procedure: fhir.Reference[];
    /**
     * Who read the study and interpreted the images or other content.
     */
    interpreter?: fhir.Reference | undefined;
    /**
     * Institution-generated description or classification of the Study performed.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Each study has one or more series of images or other content.
     */
    series: fhir.ImagingStudySeries[];
    /**
     * Default constructor for ImagingStudy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImagingStudyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ImagingStudy.d.ts.map