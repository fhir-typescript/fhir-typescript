import * as fhir from '../fhir.js';
import { InstanceAvailabilityCodeType } from '../fhirValueSets/InstanceAvailabilityCodes.js';
/**
 * Valid arguments for the ImagingStudySeriesInstance type.
 */
export interface ImagingStudySeriesInstanceArgs extends fhir.BackboneElementArgs {
    /**
     * Formal identifier for this image or other content.
     */
    uid: fhir.FhirOid | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.uid
     */
    _uid?: fhir.FhirElementArgs;
    /**
     * The number of instance in the series.
     */
    number?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.number
     */
    _number?: fhir.FhirElementArgs;
    /**
     * DICOM instance  type.
     */
    sopClass: fhir.FhirOid | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.sopClass
     */
    _sopClass?: fhir.FhirElementArgs;
    /**
     * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.title
     */
    _title?: fhir.FhirElementArgs;
}
/**
 * A single SOP instance within the series, e.g. an image, or presentation state.
 */
export declare class ImagingStudySeriesInstance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Formal identifier for this image or other content.
     */
    uid: fhir.FhirOid | null;
    /**
     * The number of instance in the series.
     */
    number?: fhir.FhirUnsignedInt | undefined;
    /**
     * DICOM instance  type.
     */
    sopClass: fhir.FhirOid | null;
    /**
     * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
     */
    title?: fhir.FhirString | undefined;
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
     * Formal identifier for this series.
     */
    uid: fhir.FhirOid | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.uid
     */
    _uid?: fhir.FhirElementArgs;
    /**
     * The numeric identifier of this series in the study.
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
     * A description of the series.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: fhir.FhirUnsignedInt | number | undefined;
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
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; and DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances.
     */
    endpoint?: fhir.ReferenceArgs[] | undefined;
    /**
     * The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
     */
    bodySite?: fhir.CodingArgs | undefined;
    /**
     * The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
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
     * The physician or operator (often the radiology technician)  who performed the series. The performer is recorded at the series level, since each series in a study may be performed by a different practitioner, at different times, and using different devices. A series may be performed by multiple practitioners.
     */
    performer?: fhir.ReferenceArgs[] | undefined;
    /**
     * A single SOP instance within the series, e.g. an image, or presentation state.
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
     * Formal identifier for this series.
     */
    uid: fhir.FhirOid | null;
    /**
     * The numeric identifier of this series in the study.
     */
    number?: fhir.FhirUnsignedInt | undefined;
    /**
     * The modality of this series sequence.
     */
    modality: fhir.Coding | null;
    /**
     * A description of the series.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: fhir.FhirUnsignedInt | undefined;
    /**
     * Availability of series (online, offline or nearline).
     */
    availability?: fhir.FhirCode<InstanceAvailabilityCodeType> | undefined;
    /**
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; and DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances.
     */
    endpoint: fhir.Reference[];
    /**
     * The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
     */
    bodySite?: fhir.Coding | undefined;
    /**
     * The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
     */
    laterality?: fhir.Coding | undefined;
    /**
     * The date and time the series was started.
     */
    started?: fhir.FhirDateTime | undefined;
    /**
     * The physician or operator (often the radiology technician)  who performed the series. The performer is recorded at the series level, since each series in a study may be performed by a different practitioner, at different times, and using different devices. A series may be performed by multiple practitioners.
     */
    performer: fhir.Reference[];
    /**
     * A single SOP instance within the series, e.g. an image, or presentation state.
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
     * Availability of study (online, offline, or nearline).
     */
    availability?: fhir.FhirCode<InstanceAvailabilityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.availability
     */
    _availability?: fhir.FhirElementArgs;
    /**
     * A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
     */
    modalityList?: fhir.CodingArgs[] | undefined;
    /**
     * The patient imaged in the study.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * The encounter or episode at which the request is initiated.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * Date and time the study started.
     */
    started?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.started
     */
    _started?: fhir.FhirElementArgs;
    /**
     * A list of the diagnostic requests that resulted in this imaging study being performed.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * The requesting/referring physician.
     */
    referrer?: fhir.ReferenceArgs | undefined;
    /**
     * Who read the study and interpreted the images or other content.
     */
    interpreter?: fhir.ReferenceArgs[] | undefined;
    /**
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
     */
    endpoint?: fhir.ReferenceArgs[] | undefined;
    /**
     * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
     */
    numberOfSeries?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.numberOfSeries
     */
    _numberOfSeries?: fhir.FhirElementArgs;
    /**
     * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.numberOfInstances
     */
    _numberOfInstances?: fhir.FhirElementArgs;
    /**
     * A reference to the performed Procedure.
     */
    procedureReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * The code for the performed procedure type.
     */
    procedureCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Description of clinical condition indicating why the ImagingStudy was requested.
     */
    reason?: fhir.CodeableConceptArgs | undefined;
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
     * Availability of study (online, offline, or nearline).
     */
    availability?: fhir.FhirCode<InstanceAvailabilityCodeType> | undefined;
    /**
     * A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
     */
    modalityList: fhir.Coding[];
    /**
     * The patient imaged in the study.
     */
    patient: fhir.Reference | null;
    /**
     * The encounter or episode at which the request is initiated.
     */
    context?: fhir.Reference | undefined;
    /**
     * Date and time the study started.
     */
    started?: fhir.FhirDateTime | undefined;
    /**
     * A list of the diagnostic requests that resulted in this imaging study being performed.
     */
    basedOn: fhir.Reference[];
    /**
     * The requesting/referring physician.
     */
    referrer?: fhir.Reference | undefined;
    /**
     * Who read the study and interpreted the images or other content.
     */
    interpreter: fhir.Reference[];
    /**
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
     */
    endpoint: fhir.Reference[];
    /**
     * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
     */
    numberOfSeries?: fhir.FhirUnsignedInt | undefined;
    /**
     * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: fhir.FhirUnsignedInt | undefined;
    /**
     * A reference to the performed Procedure.
     */
    procedureReference: fhir.Reference[];
    /**
     * The code for the performed procedure type.
     */
    procedureCode: fhir.CodeableConcept[];
    /**
     * Description of clinical condition indicating why the ImagingStudy was requested.
     */
    reason?: fhir.CodeableConcept | undefined;
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