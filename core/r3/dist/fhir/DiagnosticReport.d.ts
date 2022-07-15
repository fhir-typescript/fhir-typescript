import * as fhir from '../fhir.js';
import { DiagnosticReportStatusCodeType } from '../fhirValueSets/DiagnosticReportStatusCodes.js';
/**
 * Valid arguments for the DiagnosticReportPerformer type.
 */
export interface DiagnosticReportPerformerArgs extends fhir.BackboneElementArgs {
    /**
     * Describes the type of participation (e.g.  a responsible party, author, or verifier).
     */
    role?: fhir.CodeableConceptArgs | undefined;
    /**
     * This is not necessarily the source of the atomic data items. It is the entity that takes responsibility for the clinical report.
     */
    actor: fhir.ReferenceArgs | null;
}
/**
 * Indicates who or what participated in producing the report.
 */
export declare class DiagnosticReportPerformer extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Describes the type of participation (e.g.  a responsible party, author, or verifier).
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * This is not necessarily the source of the atomic data items. It is the entity that takes responsibility for the clinical report.
     */
    actor: fhir.Reference | null;
    /**
     * Default constructor for DiagnosticReportPerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DiagnosticReportPerformerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DiagnosticReportImage type.
 */
export interface DiagnosticReportImageArgs extends fhir.BackboneElementArgs {
    /**
     * The comment should be displayed with the image. It would be common for the report to include additional discussion of the image contents in other sections such as the conclusion.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DiagnosticReport.image.comment
     */
    _comment?: fhir.FhirElementArgs;
    /**
     * Reference to the image source.
     */
    link: fhir.ReferenceArgs | null;
}
/**
 * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
 */
export declare class DiagnosticReportImage extends fhir.BackboneElement {
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
     * Default constructor for DiagnosticReportImage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DiagnosticReportImageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * This is labeled as "Is Modifier" because applications need to take appropriate action if a report is withdrawn.
     */
    status: fhir.FhirCode<DiagnosticReportStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DiagnosticReport.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The level of granularity is defined by the category concepts in the value set. More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in DiagnosticReport.code.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * A code or name that describes this diagnostic report.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * The subject of the report. Usually, but not always, this is a patient. However diagnostic services also perform analyses on specimens collected from a variety of other sources.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter or episode but still be tied to the context of the encounter or episode (e.g. pre-admission lab tests).
     */
    context?: fhir.ReferenceArgs | undefined;
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
     * Extended properties for primitive element: DiagnosticReport.issued
     */
    _issued?: fhir.FhirElementArgs;
    /**
     * Indicates who or what participated in producing the report.
     */
    performer?: fhir.DiagnosticReportPerformerArgs[] | undefined;
    /**
     * If the specimen is sufficiently specified with a code in the test result name, then this additional data may be redundant. If there are multiple specimens, these may be represented per observation or group.
     */
    specimen?: fhir.ReferenceArgs[] | undefined;
    /**
     * Observations that are part of this diagnostic report. Observations can be simple name/value pairs (e.g. "atomic" results), or they can be grouping observations that include references to other members of the group (e.g. "panels").
     */
    result?: fhir.ReferenceArgs[] | undefined;
    /**
     * ImagingStudy and ImageManifest and the image element are somewhat overlapping - typically, the list of image references in the image element will also be found in one of the imaging study resources. However each caters to different types of displays for different types of purposes. Neither, either, or both may be provided.
     */
    imagingStudy?: fhir.ReferenceArgs[] | undefined;
    /**
     * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
     */
    image?: fhir.DiagnosticReportImageArgs[] | undefined;
    /**
     * Concise and clinically contextualized impression / summary of the diagnostic report.
     */
    conclusion?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DiagnosticReport.conclusion
     */
    _conclusion?: fhir.FhirElementArgs;
    /**
     * Codes for the conclusion.
     */
    codedDiagnosis?: fhir.CodeableConceptArgs[] | undefined;
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
     * This is labeled as "Is Modifier" because applications need to take appropriate action if a report is withdrawn.
     */
    status: fhir.FhirCode<DiagnosticReportStatusCodeType> | null;
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
     * Indicates who or what participated in producing the report.
     */
    performer: fhir.DiagnosticReportPerformer[];
    /**
     * If the specimen is sufficiently specified with a code in the test result name, then this additional data may be redundant. If there are multiple specimens, these may be represented per observation or group.
     */
    specimen: fhir.Reference[];
    /**
     * Observations that are part of this diagnostic report. Observations can be simple name/value pairs (e.g. "atomic" results), or they can be grouping observations that include references to other members of the group (e.g. "panels").
     */
    result: fhir.Reference[];
    /**
     * ImagingStudy and ImageManifest and the image element are somewhat overlapping - typically, the list of image references in the image element will also be found in one of the imaging study resources. However each caters to different types of displays for different types of purposes. Neither, either, or both may be provided.
     */
    imagingStudy: fhir.Reference[];
    /**
     * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
     */
    image: fhir.DiagnosticReportImage[];
    /**
     * Concise and clinically contextualized impression / summary of the diagnostic report.
     */
    conclusion?: fhir.FhirString | undefined;
    /**
     * Codes for the conclusion.
     */
    codedDiagnosis: fhir.CodeableConcept[];
    /**
     * "application/pdf" is recommended as the most reliable and interoperable in this context.
     */
    presentedForm: fhir.Attachment[];
    /**
     * Default constructor for DiagnosticReport - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DiagnosticReportArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=DiagnosticReport.d.ts.map