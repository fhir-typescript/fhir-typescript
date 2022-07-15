import * as fhir from '../fhirJson.js';
/**
 * Indicates who or what participated in producing the report.
 */
export interface DiagnosticReportPerformer extends fhir.BackboneElement {
    /**
     * Describes the type of participation (e.g.  a responsible party, author, or verifier).
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * This is not necessarily the source of the atomic data items. It is the entity that takes responsibility for the clinical report.
     */
    actor: fhir.Reference | null;
}
/**
 * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
 */
export interface DiagnosticReportImage extends fhir.BackboneElement {
    /**
     * The comment should be displayed with the image. It would be common for the report to include additional discussion of the image contents in other sections such as the conclusion.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: DiagnosticReport.image.comment
     */
    _comment?: fhir.FhirElement;
    /**
     * Reference to the image source.
     */
    link: fhir.Reference | null;
}
/**
 * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 */
export interface DiagnosticReport extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "DiagnosticReport" | null;
    /**
     * Usually assigned by the Information System of the diagnostic service provider (filler id).
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Note: Usually there is one test request for each result, however in some circumstances multiple test requests may be represented using a single test result resource. Note that there are also cases where one request leads to multiple reports.
     */
    basedOn?: (fhir.Reference | null)[] | undefined;
    /**
     * This is labeled as "Is Modifier" because applications need to take appropriate action if a report is withdrawn.
     */
    status: 'amended' | 'appended' | 'cancelled' | 'corrected' | 'entered-in-error' | 'final' | 'partial' | 'preliminary' | 'registered' | 'unknown' | null;
    /**
     * Extended properties for primitive element: DiagnosticReport.status
     */
    _status?: fhir.FhirElement;
    /**
     * The level of granularity is defined by the category concepts in the value set. More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in DiagnosticReport.code.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * A code or name that describes this diagnostic report.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The subject of the report. Usually, but not always, this is a patient. However diagnostic services also perform analyses on specimens collected from a variety of other sources.
     */
    subject?: fhir.Reference | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter or episode but still be tied to the context of the encounter or episode (e.g. pre-admission lab tests).
     */
    context?: fhir.Reference | undefined;
    /**
     * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
     */
    effectiveDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: DiagnosticReport.effective[x]
     */
    _effectiveDateTime?: fhir.FhirElement;
    /**
     * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * May be different from the update time of the resource itself, because that is the status of the record (potentially a secondary copy), not the actual release time of the report.
     */
    issued?: string | undefined;
    /**
     * Extended properties for primitive element: DiagnosticReport.issued
     */
    _issued?: fhir.FhirElement;
    /**
     * Indicates who or what participated in producing the report.
     */
    performer?: (fhir.DiagnosticReportPerformer | null)[] | undefined;
    /**
     * If the specimen is sufficiently specified with a code in the test result name, then this additional data may be redundant. If there are multiple specimens, these may be represented per observation or group.
     */
    specimen?: (fhir.Reference | null)[] | undefined;
    /**
     * Observations that are part of this diagnostic report. Observations can be simple name/value pairs (e.g. "atomic" results), or they can be grouping observations that include references to other members of the group (e.g. "panels").
     */
    result?: (fhir.Reference | null)[] | undefined;
    /**
     * ImagingStudy and ImageManifest and the image element are somewhat overlapping - typically, the list of image references in the image element will also be found in one of the imaging study resources. However each caters to different types of displays for different types of purposes. Neither, either, or both may be provided.
     */
    imagingStudy?: (fhir.Reference | null)[] | undefined;
    /**
     * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
     */
    image?: (fhir.DiagnosticReportImage | null)[] | undefined;
    /**
     * Concise and clinically contextualized impression / summary of the diagnostic report.
     */
    conclusion?: string | undefined;
    /**
     * Extended properties for primitive element: DiagnosticReport.conclusion
     */
    _conclusion?: fhir.FhirElement;
    /**
     * Codes for the conclusion.
     */
    codedDiagnosis?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * "application/pdf" is recommended as the most reliable and interoperable in this context.
     */
    presentedForm?: (fhir.Attachment | null)[] | undefined;
}
//# sourceMappingURL=DiagnosticReport.d.ts.map