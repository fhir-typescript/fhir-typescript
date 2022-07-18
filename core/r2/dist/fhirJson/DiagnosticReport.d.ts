import * as fhir from '../fhirJson.js';
/**
 * Many diagnostic services include images in the report as part of their service.
 */
export interface DiagnosticReportImage extends fhir.BackboneElement {
    /**
     * The provider of the report should make a comment about each image included in the report.
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
     * Need to know what identifier to use when making queries about this report from the source laboratory, and for linking to the report outside FHIR context.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Diagnostic services routinely issue provisional/incomplete reports, and sometimes withdraw previously released reports.
     */
    status: 'appended' | 'cancelled' | 'corrected' | 'entered-in-error' | 'final' | 'partial' | 'registered' | null;
    /**
     * Extended properties for primitive element: DiagnosticReport.status
     */
    _status?: fhir.FhirElement;
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
    effectiveDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: DiagnosticReport.effective[x]
     */
    _effectiveDateTime?: fhir.FhirElement;
    /**
     * Need to know where in the patient history to file/present this report.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Clinicians need to be able to check the date that the report was released.
     */
    issued: string | null;
    /**
     * Extended properties for primitive element: DiagnosticReport.issued
     */
    _issued?: fhir.FhirElement;
    /**
     * Need to know whom to contact if there are queries about the results. Also may need to track the source of reports for secondary data analysis.
     */
    performer: fhir.Reference | null;
    /**
     * Need to be able to track completion of requests based on reports issued and also to report what diagnostic tests were requested (not always the same as what is delivered).
     */
    request?: (fhir.Reference | null)[] | undefined;
    /**
     * Need to be able to report information about the collected specimens on which the report is based.
     */
    specimen?: (fhir.Reference | null)[] | undefined;
    /**
     * Need to support individual results, or report groups of results, where the result grouping is arbitrary, but meaningful. This structure is recursive - observations can contain observations.
     */
    result?: (fhir.Reference | null)[] | undefined;
    /**
     * One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images.
     */
    imagingStudy?: (fhir.Reference | null)[] | undefined;
    /**
     * Many diagnostic services include images in the report as part of their service.
     */
    image?: (fhir.DiagnosticReportImage | null)[] | undefined;
    /**
     * Need to be able to provide a conclusion that is not lost among the basic result data.
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
     * Gives Laboratory the ability to provide its own fully formatted report for clinical fidelity.
     */
    presentedForm?: (fhir.Attachment | null)[] | undefined;
}
//# sourceMappingURL=DiagnosticReport.d.ts.map