import * as fhir from '../fhirJson.js';
/**
 * A single SOP instance within the series, e.g. an image, or presentation state.
 */
export interface ImagingStudySeriesInstance extends fhir.BackboneElement {
    /**
     * Formal identifier for this image or other content.
     */
    uid: string | null;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.uid
     */
    _uid?: fhir.FhirElement;
    /**
     * The number of instance in the series.
     */
    number?: number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.number
     */
    _number?: fhir.FhirElement;
    /**
     * DICOM instance  type.
     */
    sopClass: string | null;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.sopClass
     */
    _sopClass?: fhir.FhirElement;
    /**
     * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.title
     */
    _title?: fhir.FhirElement;
}
/**
 * Each study has one or more series of images or other content.
 */
export interface ImagingStudySeries extends fhir.BackboneElement {
    /**
     * Formal identifier for this series.
     */
    uid: string | null;
    /**
     * Extended properties for primitive element: ImagingStudy.series.uid
     */
    _uid?: fhir.FhirElement;
    /**
     * The numeric identifier of this series in the study.
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
     * A description of the series.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.description
     */
    _description?: fhir.FhirElement;
    /**
     * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: number | undefined;
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
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; and DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances.
     */
    endpoint?: (fhir.Reference | null)[] | undefined;
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
    started?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.started
     */
    _started?: fhir.FhirElement;
    /**
     * The physician or operator (often the radiology technician)  who performed the series. The performer is recorded at the series level, since each series in a study may be performed by a different practitioner, at different times, and using different devices. A series may be performed by multiple practitioners.
     */
    performer?: (fhir.Reference | null)[] | undefined;
    /**
     * A single SOP instance within the series, e.g. an image, or presentation state.
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
     * Availability of study (online, offline, or nearline).
     */
    availability?: 'NEARLINE' | 'OFFLINE' | 'ONLINE' | 'UNAVAILABLE' | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.availability
     */
    _availability?: fhir.FhirElement;
    /**
     * A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
     */
    modalityList?: (fhir.Coding | null)[] | undefined;
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
    started?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.started
     */
    _started?: fhir.FhirElement;
    /**
     * A list of the diagnostic requests that resulted in this imaging study being performed.
     */
    basedOn?: (fhir.Reference | null)[] | undefined;
    /**
     * The requesting/referring physician.
     */
    referrer?: fhir.Reference | undefined;
    /**
     * Who read the study and interpreted the images or other content.
     */
    interpreter?: (fhir.Reference | null)[] | undefined;
    /**
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
     */
    endpoint?: (fhir.Reference | null)[] | undefined;
    /**
     * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
     */
    numberOfSeries?: number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.numberOfSeries
     */
    _numberOfSeries?: fhir.FhirElement;
    /**
     * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.numberOfInstances
     */
    _numberOfInstances?: fhir.FhirElement;
    /**
     * A reference to the performed Procedure.
     */
    procedureReference?: (fhir.Reference | null)[] | undefined;
    /**
     * The code for the performed procedure type.
     */
    procedureCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Description of clinical condition indicating why the ImagingStudy was requested.
     */
    reason?: fhir.CodeableConcept | undefined;
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