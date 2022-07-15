import * as fhir from '../fhir.js';
import { DiagnosticReportStatusCodeType } from '../fhirValueSets/DiagnosticReportStatusCodes.js';
/**
 * Valid arguments for the DiagnosticReportImage type.
 */
export interface DiagnosticReportImageArgs extends fhir.BackboneElementArgs {
    /**
     * The provider of the report should make a comment about each image included in the report.
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
 * Many diagnostic services include images in the report as part of their service.
 */
export declare class DiagnosticReportImage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The provider of the report should make a comment about each image included in the report.
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
     * Need to know what identifier to use when making queries about this report from the source laboratory, and for linking to the report outside FHIR context.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Diagnostic services routinely issue provisional/incomplete reports, and sometimes withdraw previously released reports.
     */
    status: fhir.FhirCode<DiagnosticReportStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DiagnosticReport.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * A code or name that describes this diagnostic report.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * SHALL know the subject context.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * The link to the health care event (encounter) when the order was made.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Need to know where in the patient history to file/present this report.
     */
    effective?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * Need to know where in the patient history to file/present this report.
     */
    effectiveDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Need to know where in the patient history to file/present this report.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Clinicians need to be able to check the date that the report was released.
     */
    issued: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: DiagnosticReport.issued
     */
    _issued?: fhir.FhirElementArgs;
    /**
     * Need to know whom to contact if there are queries about the results. Also may need to track the source of reports for secondary data analysis.
     */
    performer: fhir.ReferenceArgs | null;
    /**
     * Need to be able to track completion of requests based on reports issued and also to report what diagnostic tests were requested (not always the same as what is delivered).
     */
    request?: fhir.ReferenceArgs[] | undefined;
    /**
     * Need to be able to report information about the collected specimens on which the report is based.
     */
    specimen?: fhir.ReferenceArgs[] | undefined;
    /**
     * Need to support individual results, or report groups of results, where the result grouping is arbitrary, but meaningful. This structure is recursive - observations can contain observations.
     */
    result?: fhir.ReferenceArgs[] | undefined;
    /**
     * One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images.
     */
    imagingStudy?: fhir.ReferenceArgs[] | undefined;
    /**
     * Many diagnostic services include images in the report as part of their service.
     */
    image?: fhir.DiagnosticReportImageArgs[] | undefined;
    /**
     * Need to be able to provide a conclusion that is not lost among the basic result data.
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
     * Gives Laboratory the ability to provide its own fully formatted report for clinical fidelity.
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
     * Need to know what identifier to use when making queries about this report from the source laboratory, and for linking to the report outside FHIR context.
     */
    identifier: fhir.Identifier[];
    /**
     * Diagnostic services routinely issue provisional/incomplete reports, and sometimes withdraw previously released reports.
     */
    status: fhir.FhirCode<DiagnosticReportStatusCodeType> | null;
    /**
     * A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * A code or name that describes this diagnostic report.
     */
    code: fhir.CodeableConcept | null;
    /**
     * SHALL know the subject context.
     */
    subject: fhir.Reference | null;
    /**
     * The link to the health care event (encounter) when the order was made.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Need to know where in the patient history to file/present this report.
     */
    effective: (fhir.FhirDateTime | fhir.Period) | null;
    /**
     * Internal flag to properly serialize choice-type element DiagnosticReport.effective[x]
     */
    protected static readonly _fts_effectiveIsChoice: true;
    /**
     * Clinicians need to be able to check the date that the report was released.
     */
    issued: fhir.FhirInstant | null;
    /**
     * Need to know whom to contact if there are queries about the results. Also may need to track the source of reports for secondary data analysis.
     */
    performer: fhir.Reference | null;
    /**
     * Need to be able to track completion of requests based on reports issued and also to report what diagnostic tests were requested (not always the same as what is delivered).
     */
    request: fhir.Reference[];
    /**
     * Need to be able to report information about the collected specimens on which the report is based.
     */
    specimen: fhir.Reference[];
    /**
     * Need to support individual results, or report groups of results, where the result grouping is arbitrary, but meaningful. This structure is recursive - observations can contain observations.
     */
    result: fhir.Reference[];
    /**
     * One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images.
     */
    imagingStudy: fhir.Reference[];
    /**
     * Many diagnostic services include images in the report as part of their service.
     */
    image: fhir.DiagnosticReportImage[];
    /**
     * Need to be able to provide a conclusion that is not lost among the basic result data.
     */
    conclusion?: fhir.FhirString | undefined;
    /**
     * Codes for the conclusion.
     */
    codedDiagnosis: fhir.CodeableConcept[];
    /**
     * Gives Laboratory the ability to provide its own fully formatted report for clinical fidelity.
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