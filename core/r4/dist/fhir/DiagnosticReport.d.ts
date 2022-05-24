import * as fhir from '../fhir.js';
import { DiagnosticReportStatusCodeType } from '../fhirValueSets/DiagnosticReportStatusCodes.js';
import { ReportCodingType } from '../fhirValueSets/ReportCodings.js';
/**
 * Valid arguments for the DiagnosticReportMedia type.
 */
export interface DiagnosticReportMediaArgs extends fhir.BackboneElementArgs {
    /**
     * The comment should be displayed with the image. It would be common for the report to include additional discussion of the image contents in other sections such as the conclusion.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Reference to the image source.
     */
    link: fhir.ReferenceArgs | null;
}
/**
 * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
 */
export declare class DiagnosticReportMedia extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The comment should be displayed with the image. It would be common for the report to include additional discussion of the image contents in other sections such as the conclusion.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Reference to the image source.
     */
    link: fhir.Reference | null;
    /**
     * Default constructor for DiagnosticReportMedia - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DiagnosticReportMediaArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DiagnosticReport type.
 */
export interface DiagnosticReportArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "DiagnosticReport" | undefined;
    /**
     * Usually assigned by the Information System of the diagnostic service provider (filler id).
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Note: Usually there is one test request for each result, however in some circumstances multiple test requests may be represented using a single test result resource. Note that there are also cases where one request leads to multiple reports.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * The status of the diagnostic report.
     */
    status: fhir.FhirCode<DiagnosticReportStatusCodeType> | string | undefined;
    /**
     * Multiple categories are allowed using various categorization schemes.   The level of granularity is defined by the category concepts in the value set. More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in DiagnosticReport.code.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A code or name that describes this diagnostic report.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter  but still be tied to the context of the encounter  (e.g. pre-admission laboratory tests).
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
     */
    effective?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
     */
    effectiveDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * May be different from the update time of the resource itself, because that is the status of the record (potentially a secondary copy), not the actual release time of the report.
     */
    issued?: fhir.FhirInstant | string | undefined;
    /**
     * This is not necessarily the source of the atomic data items or the entity that interpreted the results. It is the entity that takes responsibility for the clinical report.
     */
    performer?: fhir.ReferenceArgs[] | undefined;
    /**
     * Might not be the same entity that takes responsibility for the clinical report.
     */
    resultsInterpreter?: fhir.ReferenceArgs[] | undefined;
    /**
     * If the specimen is sufficiently specified with a code in the test result name, then this additional data may be redundant. If there are multiple specimens, these may be represented per observation or group.
     */
    specimen?: fhir.ReferenceArgs[] | undefined;
    /**
     * Observations can contain observations.
     */
    result?: fhir.ReferenceArgs[] | undefined;
    /**
     * ImagingStudy and the image element are somewhat overlapping - typically, the list of image references in the image element will also be found in one of the imaging study resources. However, each caters to different types of displays for different types of purposes. Neither, either, or both may be provided.
     */
    imagingStudy?: fhir.ReferenceArgs[] | undefined;
    /**
     * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
     */
    media?: fhir.DiagnosticReportMediaArgs[] | undefined;
    /**
     * Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report.
     */
    conclusion?: fhir.FhirString | string | undefined;
    /**
     * One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report.
     */
    conclusionCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * "application/pdf" is recommended as the most reliable and interoperable in this context.
     */
    presentedForm?: fhir.AttachmentArgs[] | undefined;
}
/**
 * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 */
export declare class DiagnosticReport extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "DiagnosticReport";
    /**
     * Usually assigned by the Information System of the diagnostic service provider (filler id).
     */
    identifier: fhir.Identifier[];
    /**
     * Note: Usually there is one test request for each result, however in some circumstances multiple test requests may be represented using a single test result resource. Note that there are also cases where one request leads to multiple reports.
     */
    basedOn: fhir.Reference[];
    /**
     * The status of the diagnostic report.
     */
    status: fhir.FhirCode<DiagnosticReportStatusCodeType> | null;
    /**
     * Multiple categories are allowed using various categorization schemes.   The level of granularity is defined by the category concepts in the value set. More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in DiagnosticReport.code.
     */
    category: fhir.CodeableConcept[];
    /**
     * A code or name that describes this diagnostic report.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources.
     */
    subject?: fhir.Reference | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter  but still be tied to the context of the encounter  (e.g. pre-admission laboratory tests).
     */
    encounter?: fhir.Reference | undefined;
    /**
     * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
     */
    effective?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element DiagnosticReport.effective[x]
     */
    protected static readonly _fts_effectiveIsChoice: true;
    /**
     * May be different from the update time of the resource itself, because that is the status of the record (potentially a secondary copy), not the actual release time of the report.
     */
    issued?: fhir.FhirInstant | undefined;
    /**
     * This is not necessarily the source of the atomic data items or the entity that interpreted the results. It is the entity that takes responsibility for the clinical report.
     */
    performer: fhir.Reference[];
    /**
     * Might not be the same entity that takes responsibility for the clinical report.
     */
    resultsInterpreter: fhir.Reference[];
    /**
     * If the specimen is sufficiently specified with a code in the test result name, then this additional data may be redundant. If there are multiple specimens, these may be represented per observation or group.
     */
    specimen: fhir.Reference[];
    /**
     * Observations can contain observations.
     */
    result: fhir.Reference[];
    /**
     * ImagingStudy and the image element are somewhat overlapping - typically, the list of image references in the image element will also be found in one of the imaging study resources. However, each caters to different types of displays for different types of purposes. Neither, either, or both may be provided.
     */
    imagingStudy: fhir.Reference[];
    /**
     * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
     */
    media: fhir.DiagnosticReportMedia[];
    /**
     * Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report.
     */
    conclusion?: fhir.FhirString | undefined;
    /**
     * One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report.
     */
    conclusionCode: fhir.CodeableConcept[];
    /**
     * "application/pdf" is recommended as the most reliable and interoperable in this context.
     */
    presentedForm: fhir.Attachment[];
    /**
     * Default constructor for DiagnosticReport - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DiagnosticReportArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (DiagnosticReport.status)
     */
    static get statusRequiredCodes(): {
        readonly Amended: "amended";
        readonly Appended: "appended";
        readonly Cancelled: "cancelled";
        readonly Corrected: "corrected";
        readonly EnteredInError: "entered-in-error";
        readonly Final: "final";
        readonly Partial: "partial";
        readonly Preliminary: "preliminary";
        readonly Registered: "registered";
        readonly Unknown: "unknown";
    };
    /**
     * Preferred-bound Value Set for code (DiagnosticReport.code)
     */
    static get codePreferredCodings(): ReportCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=DiagnosticReport.d.ts.map