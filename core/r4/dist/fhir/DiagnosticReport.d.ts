import * as fhir from '../fhir.js';
import { DiagnosticReportStatusCodeType } from '../fhirValueSets/DiagnosticReportStatusCodes.js';
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
    static get codePreferredCodings(): {
        readonly AcyclovirSusceptibility: fhir.Coding;
        readonly AmdinocillinSusceptibilityBySerumBactericidalTiter: fhir.Coding;
        readonly CefoperazoneSusceptibilityByMinimumInhibitoryConcentrationMIC: fhir.Coding;
        readonly DBGAbPresenceInSerumOrPlasmaFromBloodProductUnit: fhir.Coding;
        readonly RWaveDurationInLeadAVR: fhir.Coding;
        readonly RWaveDurationInLeadI: fhir.Coding;
        readonly RWaveDurationInLeadII: fhir.Coding;
        readonly RWaveDurationInLeadIII: fhir.Coding;
        readonly RWaveDurationInLeadV1: fhir.Coding;
        readonly RWaveDurationInLeadV2: fhir.Coding;
        readonly RWaveDurationInLeadV3: fhir.Coding;
        readonly RWaveDurationInLeadV4: fhir.Coding;
        readonly RWaveDurationInLeadV5: fhir.Coding;
        readonly RWaveDurationInLeadV6: fhir.Coding;
        readonly DBGAbPresenceInSerumOrPlasmaFromDonor: fhir.Coding;
        readonly RQuoteWaveAmplitudeInLeadAVF: fhir.Coding;
        readonly RQuoteWaveAmplitudeInLeadAVL: fhir.Coding;
        readonly RQuoteWaveAmplitudeInLeadAVR: fhir.Coding;
        readonly RQuoteWaveAmplitudeInLeadI: fhir.Coding;
        readonly RQuoteWaveAmplitudeInLeadII: fhir.Coding;
        readonly RQuoteWaveAmplitudeInLeadIII: fhir.Coding;
        readonly RQuoteWaveAmplitudeInLeadV1: fhir.Coding;
        readonly RQuoteWaveAmplitudeInLeadV2: fhir.Coding;
        readonly RQuoteWaveAmplitudeInLeadV3: fhir.Coding;
        readonly RQuoteWaveAmplitudeInLeadV4: fhir.Coding;
        readonly DBGAbPresenceInSerumOrPlasma: fhir.Coding;
        readonly RQuoteWaveAmplitudeInLeadV5: fhir.Coding;
        readonly RQuoteWaveAmplitudeInLeadV6: fhir.Coding;
        readonly RQuoteWaveDurationInLeadAVF: fhir.Coding;
        readonly RQuoteWaveDurationInLeadAVL: fhir.Coding;
        readonly RQuoteWaveDurationInLeadAVR: fhir.Coding;
        readonly RQuoteWaveDurationInLeadI: fhir.Coding;
        readonly RQuoteWaveDurationInLeadII: fhir.Coding;
        readonly RQuoteWaveDurationInLeadIII: fhir.Coding;
        readonly RQuoteWaveDurationInLeadV1: fhir.Coding; /**
         * This is not necessarily the source of the atomic data items or the entity that interpreted the results. It is the entity that takes responsibility for the clinical report.
         */
        readonly RQuoteWaveDurationInLeadV2: fhir.Coding;
        readonly IndirectAntiglobulinTestComplementSpecificReagentPresenceInSerumOrPlasma: fhir.Coding;
        readonly RQuoteWaveDurationInLeadV3: fhir.Coding;
        readonly RQuoteWaveDurationInLeadV4: fhir.Coding;
        readonly RQuoteWaveDurationInLeadV5: fhir.Coding;
        readonly RQuoteWaveDurationInLeadV6: fhir.Coding;
        readonly SWaveAmplitudeInLeadAVF: fhir.Coding;
        readonly SWaveAmplitudeInLeadAVL: fhir.Coding;
        readonly SWaveAmplitudeInLeadAVR: fhir.Coding;
        readonly SWaveAmplitudeInLeadI: fhir.Coding;
        readonly SWaveAmplitudeInLeadII: fhir.Coding;
        readonly SWaveAmplitudeInLeadIII: fhir.Coding;
        readonly DirectAntiglobulinTestComplementSpecificReagentPresenceOnRedBloodCells: fhir.Coding;
        readonly SWaveAmplitudeInLeadV1: fhir.Coding;
        readonly SWaveAmplitudeInLeadV2: fhir.Coding;
        readonly SWaveAmplitudeInLeadV3: fhir.Coding;
        readonly SWaveAmplitudeInLeadV4: fhir.Coding;
        readonly SWaveAmplitudeInLeadV5: fhir.Coding;
        readonly SWaveAmplitudeInLeadV6: fhir.Coding;
        readonly SWaveDurationInLeadAVF: fhir.Coding;
        readonly SWaveDurationInLeadAVL: fhir.Coding;
        readonly SWaveDurationInLeadAVR: fhir.Coding;
        readonly SWaveDurationInLeadI: fhir.Coding;
        readonly IndirectAntiglobulinTestIgGSpecificReagentPresenceInSerumOrPlasma: fhir.Coding;
        readonly SWaveDurationInLeadII: fhir.Coding;
        /**
         * May be different from the update time of the resource itself, because that is the status of the record (potentially a secondary copy), not the actual release time of the report.
         */
        readonly SWaveDurationInLeadIII: fhir.Coding;
        readonly SWaveDurationInLeadV1: fhir.Coding;
        readonly SWaveDurationInLeadV2: fhir.Coding;
        readonly SWaveDurationInLeadV3: fhir.Coding;
        readonly SWaveDurationInLeadV4: fhir.Coding;
        readonly SWaveDurationInLeadV5: fhir.Coding;
        readonly SWaveDurationInLeadV6: fhir.Coding;
        readonly SQuoteWaveAmplitudeInLeadAVF: fhir.Coding;
        readonly SQuoteWaveAmplitudeInLeadAVL: fhir.Coding;
        readonly DirectAntiglobulinTestIgGSpecificReagentInterpretationOnRedBloodCells: fhir.Coding;
        readonly SQuoteWaveAmplitudeInLeadAVR: fhir.Coding;
        readonly SQuoteWaveAmplitudeInLeadI: fhir.Coding;
        readonly SQuoteWaveAmplitudeInLeadII: fhir.Coding;
        readonly SQuoteWaveAmplitudeInLeadIII: fhir.Coding;
        readonly SQuoteWaveAmplitudeInLeadV1: fhir.Coding;
        readonly SQuoteWaveAmplitudeInLeadV2: fhir.Coding;
        readonly SQuoteWaveAmplitudeInLeadV3: fhir.Coding;
        readonly SQuoteWaveAmplitudeInLeadV4: fhir.Coding;
        readonly SQuoteWaveAmplitudeInLeadV5: fhir.Coding;
        readonly SQuoteWaveAmplitudeInLeadV6: fhir.Coding;
        readonly DirectAntiglobulinTestPolySpecificReagentPresenceOnRedBloodCells: fhir.Coding;
        readonly SQuoteWaveDurationInLeadAVF: fhir.Coding;
        readonly SQuoteWaveDurationInLeadAVL: fhir.Coding;
        readonly SQuoteWaveDurationInLeadAVR: fhir.Coding;
        readonly SQuoteWaveDurationInLeadI: fhir.Coding;
        readonly SQuoteWaveDurationInLeadII: fhir.Coding;
        readonly SQuoteWaveDurationInLeadIII: fhir.Coding;
        readonly SQuoteWaveDurationInLeadV1: fhir.Coding;
        readonly SQuoteWaveDurationInLeadV2: fhir.Coding;
        readonly SQuoteWaveDurationInLeadV3: fhir.Coding;
        readonly SQuoteWaveDurationInLeadV4: fhir.Coding;
        readonly IndirectAntiglobulinTestPolySpecificReagentPresenceInSerumOrPlasma: fhir.Coding;
        readonly SQuoteWaveDurationInLeadV5: fhir.Coding;
        readonly SQuoteWaveDurationInLeadV6: fhir.Coding;
        readonly STInitialAmplitude6MsInLeadAVF: fhir.Coding;
        readonly STInitialAmplitude6MsInLeadAVL: fhir.Coding;
        readonly STInitialAmplitude6MsInLeadAVR: fhir.Coding;
        readonly STInitialAmplitude6MsInLeadI: fhir.Coding;
        readonly STInitialAmplitude6MsInLeadII: fhir.Coding;
        readonly STInitialAmplitude6MsInLeadIII: fhir.Coding;
        readonly STInitialAmplitude6MsInLeadV1: fhir.Coding;
        readonly STInitialAmplitude6MsInLeadV2: fhir.Coding;
        readonly DeprecatedDirectAntiglobulinTestPolySpecificReagentPresenceOnRedBloodCells: fhir.Coding;
        readonly STInitialAmplitude6MsInLeadV3: fhir.Coding;
        readonly STInitialAmplitude6MsInLeadV4: fhir.Coding;
        readonly STInitialAmplitude6MsInLeadV5: fhir.Coding;
        readonly STInitialAmplitude6MsInLeadV6: fhir.Coding;
        readonly STSlopeInLeadAVF: fhir.Coding;
        readonly STSlopeInLeadAVL: fhir.Coding;
        readonly STSlopeInLeadAVR: fhir.Coding;
        readonly STSlopeInLeadI: fhir.Coding;
        readonly STSlopeInLeadII: fhir.Coding;
        readonly STSlopeInLeadIII: fhir.Coding;
        readonly CefoperazoneSusceptibilityByDiskDiffusionKB: fhir.Coding;
        readonly ESupWAbPresenceInSerumOrPlasmaFromBloodProductUnit: fhir.Coding;
        readonly STSlopeInLeadV1: fhir.Coding;
        readonly STSlopeInLeadV2: fhir.Coding;
        readonly STSlopeInLeadV3: fhir.Coding;
        readonly STSlopeInLeadV4: fhir.Coding;
        readonly STSlopeInLeadV5: fhir.Coding;
        readonly STSlopeInLeadV6: fhir.Coding;
        readonly STWaveEndDisplacementInLeadAVF: fhir.Coding;
        readonly STWaveEndDisplacementInLeadAVL: fhir.Coding;
        readonly STWaveEndDisplacementInLeadAVR: fhir.Coding;
        readonly STWaveEndDisplacementInLeadI: fhir.Coding;
        readonly ESupWAbPresenceInSerumOrPlasmaFromDonor: fhir.Coding;
        readonly STWaveEndDisplacementInLeadII: fhir.Coding;
        readonly STWaveEndDisplacementInLeadIII: fhir.Coding;
        readonly STWaveEndDisplacementInLeadV1: fhir.Coding;
        readonly STWaveEndDisplacementInLeadV2: fhir.Coding;
        readonly STWaveEndDisplacementInLeadV3: fhir.Coding;
        readonly STWaveEndDisplacementInLeadV4: fhir.Coding;
        readonly STWaveEndDisplacementInLeadV5: fhir.Coding;
        readonly STWaveEndDisplacementInLeadV6: fhir.Coding;
        readonly STWaveMidDisplacementInLeadAVF: fhir.Coding;
        readonly STWaveMidDisplacementInLeadAVL: fhir.Coding;
        readonly ESupWAbPresenceInSerumOrPlasma: fhir.Coding;
        readonly STWaveMidDisplacementInLeadAVR: fhir.Coding;
        readonly STWaveMidDisplacementInLeadI: fhir.Coding;
        readonly STWaveMidDisplacementInLeadII: fhir.Coding;
        readonly STWaveMidDisplacementInLeadIII: fhir.Coding;
        readonly STWaveMidDisplacementInLeadV1: fhir.Coding;
        readonly STWaveMidDisplacementInLeadV2: fhir.Coding;
        readonly STWaveMidDisplacementInLeadV3: fhir.Coding;
        readonly STWaveMidDisplacementInLeadV4: fhir.Coding;
        readonly STWaveMidDisplacementInLeadV5: fhir.Coding;
        readonly STWaveMidDisplacementInLeadV6: fhir.Coding;
        readonly ESupWAgPresenceOnRedBloodCellsFromBloodProductUnit: fhir.Coding;
        readonly TQuoteWaveAmplitudeInLeadAVF: fhir.Coding;
        readonly TQuoteWaveAmplitudeInLeadAVL: fhir.Coding;
        readonly TQuoteWaveAmplitudeInLeadAVR: fhir.Coding;
        readonly TQuoteWaveAmplitudeInLeadI: fhir.Coding;
        readonly TQuoteWaveAmplitudeInLeadII: fhir.Coding;
        readonly TQuoteWaveAmplitudeInLeadIII: fhir.Coding;
        readonly TQuoteWaveAmplitudeInLeadV1: fhir.Coding;
        readonly TQuoteWaveAmplitudeInLeadV2: fhir.Coding;
        readonly TQuoteWaveAmplitudeInLeadV3: fhir.Coding;
        readonly TQuoteWaveAmplitudeInLeadV4: fhir.Coding;
        readonly ESupWAgPresenceOnRedBloodCellsFromDonor: fhir.Coding;
        readonly TQuoteWaveAmplitudeInLeadV5: fhir.Coding;
        readonly TQuoteWaveAmplitudeInLeadV6: fhir.Coding;
        readonly TWaveAmplitudeInLeadAVF: fhir.Coding;
        readonly TWaveAmplitudeInLeadAVL: fhir.Coding;
        readonly TWaveAmplitudeInLeadAVR: fhir.Coding;
        readonly TWaveAmplitudeInLeadI: fhir.Coding;
        readonly TWaveAmplitudeInLeadII: fhir.Coding;
        readonly TWaveAmplitudeInLeadIII: fhir.Coding;
        readonly TWaveAmplitudeInLeadV1: fhir.Coding;
        readonly TWaveAmplitudeInLeadV2: fhir.Coding;
        readonly ESupWAgPresenceOnRedBloodCells: fhir.Coding;
        readonly TWaveAmplitudeInLeadV3: fhir.Coding;
        readonly TWaveAmplitudeInLeadV4: fhir.Coding;
        readonly TWaveAmplitudeInLeadV5: fhir.Coding;
        readonly TWaveAmplitudeInLeadV6: fhir.Coding;
        readonly ChiefComplaintNarrativeReported: fhir.Coding;
        readonly HistoryOfAllergiesReported: fhir.Coding;
        readonly HistoryOfChildhoodDiseasesNarrative: fhir.Coding;
        readonly HistoryOfFamilyMemberDiseasesNarrative: fhir.Coding;
        readonly HistoryOfFunctionalStatusNarrative: fhir.Coding;
        readonly HistoryOfIndustrialExposureNarrative: fhir.Coding;
        readonly EAbPresenceInSerumOrPlasmaFromBloodProductUnit: fhir.Coding;
        readonly HistoryOfMedicationUseNarrative: fhir.Coding;
        readonly HistoryOfOccupationalExposureNarrative: fhir.Coding;
        readonly HistoryOfPregnanciesNarrative: fhir.Coding;
        readonly HistoryOfPregnancies: fhir.Coding;
        readonly HistoryOfPresentIllnessNarrative: fhir.Coding;
        readonly DeprecatedHistoryOfPsychiatricSymptomsAndDiseasesNarrative: fhir.Coding;
        readonly HistoryOfSocialFunctionNarrative: fhir.Coding;
        readonly HistoryOfSurgicalProceduresNarrative: fhir.Coding;
        readonly HistoryOfCardiovascularSystemDisordersNarrative: fhir.Coding;
        readonly HistoryOfEarDisordersNarrative: fhir.Coding;
        readonly EAbPresenceInSerumOrPlasmaFromDonor: fhir.Coding;
        readonly HistoryOfEndocrineSystemDisordersNarrative: fhir.Coding;
        readonly HistoryOfEyesDisordersNarrative: fhir.Coding;
        readonly HistoryOfHematologicSystemDisordersNarrative: fhir.Coding;
        readonly HistoryOfMusculoskeletalSystemDisordersNarrative: fhir.Coding;
        readonly HistoryOfNoseDisordersNarrative: fhir.Coding;
        readonly HistoryOfOralCavityDisordersNarrative: fhir.Coding;
        readonly HistoryOfReproductiveSystemDisordersNarrative: fhir.Coding;
        readonly HistoryOfRespiratorySystemDisordersNarrative: fhir.Coding;
        readonly HistoryOfSkinDisordersNarrative: fhir.Coding;
        readonly HistoryOfThroatAndNeckDisordersNarrative: fhir.Coding;
        readonly EAbPresenceInSerumOrPlasma: fhir.Coding;
        readonly HistoryOfThroatAndNeckDisorders: fhir.Coding;
        readonly HistoryOfUrinaryTractDisordersNarrative: fhir.Coding;
        readonly HistoryOfTravelNarrative: fhir.Coding;
        readonly HospitalDischargeMedicationsNarrative: fhir.Coding;
        readonly HospitalDischargePhysicalFindingsNarrative: fhir.Coding;
        readonly HospitalDischargeProceduresNarrative: fhir.Coding;
        readonly IdentifyingInformationNarrativeObserved: fhir.Coding;
        readonly ReviewOfSystemsNarrativeReported: fhir.Coding;
        readonly ReviewOfSystemsOverviewNarrativeReported: fhir.Coding;
        readonly ReviewOfSystemsOverviewReported: fhir.Coding;
        readonly EAgPresenceOnRedBloodCellsFromBloodProductUnit: fhir.Coding;
        readonly MentalStatusNarrative: fhir.Coding;
        readonly PhysicalFindingsOfAbdomenNarrative: fhir.Coding;
        readonly PhysicalFindingsOfBackNarrative: fhir.Coding;
        readonly PhysicalFindingsOfBreastsNarrative: fhir.Coding;
        readonly PhysicalFindingsOfNeurologicDeepTendonReflexesNarrative: fhir.Coding;
        readonly PhysicalFindingsOfEarNarrative: fhir.Coding;
        readonly PhysicalFindingsOfExtremitiesNarrative: fhir.Coding;
        readonly PhysicalFindingsOfEyeNarrative: fhir.Coding;
        readonly PhysicalFindingsOfGenitourinaryTractNarrative: fhir.Coding;
        readonly PhysicalFindingsOfHeadNarrative: fhir.Coding;
        readonly CefoperazoneSusceptibilityBySerumBactericidalTiter: fhir.Coding;
        readonly EAgPresenceOnRedBloodCellsFromDonor: fhir.Coding;
        readonly PhysicalFindingsOfHeartNarrative: fhir.Coding;
        readonly PhysicalFindingsOfMouthAndThroatAndTeethNarrative: fhir.Coding;
        readonly PhysicalFindingsOfNervousSystemNarrative: fhir.Coding;
        readonly PhysicalFindingsOfNoseNarrative: fhir.Coding;
        readonly PhysicalFindingsOfPelvisNarrative: fhir.Coding;
        readonly PhysicalFindingsOfRectumNarrative: fhir.Coding;
        readonly PhysicalFindingsOfSkinNarrative: fhir.Coding;
        readonly PhysicalFindingsOfThoraxAndLungsNarrative: fhir.Coding;
        readonly PhysicalFindingsOfVesselsNarrative: fhir.Coding;
        readonly PhysicalFindingsOfNeurologicBalanceAndCoordinationNarrative: fhir.Coding;
        readonly EAgPresenceOnRedBloodCells: fhir.Coding;
        readonly PhysicalFindingsOfGeneralStatusNarrative: fhir.Coding;
        readonly PhysicalFindingsOfSenseOfTouchNarrative: fhir.Coding;
        readonly PhysicalFindingsOfStrengthNarrative: fhir.Coding;
        readonly SurgicalOperationNoteAnesthesiaNarrative: fhir.Coding;
        readonly SurgicalOperationNoteAnesthesiaDuration: fhir.Coding;
        readonly SurgicalOperationNoteFindingsNarrative: fhir.Coding;
        readonly SurgicalOperationNoteFluidsNarrative: fhir.Coding;
        readonly SurgicalOperationNoteIndicationsInterpretationNarrative: fhir.Coding;
        readonly SurgicalOperationNotePostoperativeDiagnosisNarrative: fhir.Coding;
        readonly SurgicalOperationNotePreoperativeDiagnosisNarrative: fhir.Coding;
        readonly FySupAAbPresenceInSerumOrPlasmaFromBloodProductUnit: fhir.Coding;
        readonly SurgicalOperationNotePrepTimeDuration: fhir.Coding;
        readonly SurgicalOperationNoteSpecimensTakenNarrative: fhir.Coding;
        readonly SurgicalOperationNoteSurgicalComplicationsInterpretationNarrative: fhir.Coding;
        readonly SurgicalOperationNoteSurgicalProcedureNarrative: fhir.Coding;
        readonly HemodynamicMethodSpecialCircumstances: fhir.Coding;
        readonly CardiacMeasurementDeviceInstitutionInventoryNumber: fhir.Coding;
        readonly OxygenContentInIntravascularSpace: fhir.Coding;
        readonly CardiacMeasurementDeviceVendorModelNumber: fhir.Coding;
        readonly CardiacMeasurementDeviceVendorSerialNumber: fhir.Coding;
        readonly HemodynamicMethodTypeOf: fhir.Coding;
        readonly FySupAAbPresenceInSerumOrPlasmaFromDonor: fhir.Coding;
        readonly LeftVentricularEjectionFraction: fhir.Coding;
        readonly RightVentricularEjectionFraction: fhir.Coding;
        readonly OxygenContentInAortaRoot: fhir.Coding;
        readonly OxygenContentInLeftAtrium: fhir.Coding;
        readonly OxygenContentInRightAtrium: fhir.Coding;
        readonly OxygenContentInHighRightAtrium: fhir.Coding;
        readonly OxygenContentInLowRightAtrium: fhir.Coding;
        readonly OxygenContentInMidRightAtrium: fhir.Coding;
        readonly OxygenContentInLeftVentricle: fhir.Coding;
        readonly OxygenContentInRightVentricularOutflowTract: fhir.Coding;
        readonly FySupAAbPresenceInSerumOrPlasma: fhir.Coding;
        readonly OxygenContentInRightVentricle: fhir.Coding;
        readonly OxygenContentInCoronarySinus: fhir.Coding;
        readonly OxygenContentInDuctusArteriosus: fhir.Coding;
        readonly OxygenContentInInferiorVenaCava: fhir.Coding;
        readonly OxygenContentInLeftPulmonaryArtery: fhir.Coding;
        readonly OxygenContentInMainPulmonaryArtery: fhir.Coding;
        readonly OxygenContentInRightPulmonaryArtery: fhir.Coding;
        readonly OxygenContentInPulmonaryWedge: fhir.Coding;
        readonly OxygenContentInSuperiorVenaCava: fhir.Coding;
        readonly HeartRateDeviceInstitutionInventoryNumber: fhir.Coding;
        readonly FySupAAgPresenceOnRedBloodCellsFromBloodProductUnit: fhir.Coding;
        readonly HeartRateDeviceVendorModelNumber: fhir.Coding;
        readonly HeartRateDeviceVendorSerialNumber: fhir.Coding;
        readonly BiliaryDrainSite: fhir.Coding;
        readonly TypeOfBiliaryDrain: fhir.Coding;
        readonly TypeOfPeritonealDrain: fhir.Coding;
        readonly TypeOfSubarachnoidDrain: fhir.Coding;
        readonly BiliaryDrainInstitutionInventoryNumber: fhir.Coding;
        readonly ChestTubeInstitutionInventoryNumber: fhir.Coding;
        readonly EnteralTubeInstitutionInventoryNumber: fhir.Coding;
        readonly GastrostomyTubeInstitutionInventoryNumber: fhir.Coding;
        readonly FySupAAgPresenceOnRedBloodCellsFromDonor: fhir.Coding;
        readonly GITubeInstitutionInventoryNumber: fhir.Coding;
        readonly IntravascularTubeInstitutionInventoryNumber: fhir.Coding;
        readonly IOTubeInstitutionInventoryNumber: fhir.Coding;
        readonly NasogastricTubeInstitutionInventoryNumber: fhir.Coding;
        readonly OralTubeInstitutionInventoryNumber: fhir.Coding;
        readonly PeritonealDrainInstitutionInventoryNumber: fhir.Coding;
        readonly PeritonealTubeInstitutionInventoryNumber: fhir.Coding;
        readonly RateControlDeviceInstitutionInventoryNumber: fhir.Coding;
        readonly StoolCollectionDeviceInstitutionInventoryNumber: fhir.Coding;
        readonly SubarachnoidDrainInstitutionInventoryNumber: fhir.Coding;
        readonly FySupAAgPresenceOnRedBloodCells: fhir.Coding;
        readonly SynovialDrainInstitutionInventoryNumber: fhir.Coding;
        readonly TubeOrDrainInstitutionInventoryNumber: fhir.Coding;
        readonly UpperGITubeInstitutionInventoryNumber: fhir.Coding;
        readonly BladderIrrigationTubeInstitutionInventoryNumber: fhir.Coding;
        readonly UrineTubeInstitutionInventoryNumber: fhir.Coding;
        readonly WoundDrainDeviceInstitutionInventoryNumber: fhir.Coding;
        readonly PeritonealDrainSite: fhir.Coding;
        readonly StoolCollectionSite: fhir.Coding;
        readonly SubarachnoidDrainSite: fhir.Coding;
        readonly BiliaryDrainVendorModelNumber: fhir.Coding;
        readonly FySupBAbPresenceInSerumOrPlasmaFromBloodProductUnit: fhir.Coding;
        readonly ChestTubeVendorModelNumber: fhir.Coding;
        readonly EnteralTubeVendorModelNumber: fhir.Coding;
        readonly GastrostomyTubeVendorModelNumber: fhir.Coding;
        readonly GITubeVendorModelNumber: fhir.Coding;
        readonly IntravascularTubeVendorModelNumber: fhir.Coding;
        readonly IOTubeVendorModelNumber: fhir.Coding;
        readonly NasogastricTubeVendorModelNumber: fhir.Coding;
        readonly OralTubeVendorModelNumber: fhir.Coding;
        readonly PeritonealDrainVendorModelNumber: fhir.Coding;
        readonly PeritonealTubeVendorModelNumber: fhir.Coding;
        readonly FySupBAbPresenceInSerumOrPlasmaFromDonor: fhir.Coding;
        readonly RateControlDeviceVendorModelNumber: fhir.Coding;
        readonly StoolCollectionDeviceVendorModelNumber: fhir.Coding;
        readonly SubarachnoidDrainVendorModelNumber: fhir.Coding;
        readonly SynovialDrainVendorModelNumber: fhir.Coding;
        readonly TubeOrDrainVendorModelNumber: fhir.Coding;
        readonly UpperGITubeVendorModelNumber: fhir.Coding;
        readonly BladderIrrigationTubeVendorModelNumber: fhir.Coding;
        readonly UrineTubeVendorModelNumber: fhir.Coding;
        readonly WoundDrainDeviceVendorModelNumber: fhir.Coding;
        readonly BiliaryDrainVendorSerialNumber: fhir.Coding;
        readonly CeforanideSusceptibilityByMinimumLethalConcentrationMLC: fhir.Coding;
        readonly FySupBAbPresenceInSerumOrPlasma: fhir.Coding;
        readonly ChestTubeVendorSerialNumber: fhir.Coding;
        readonly EnteralTubeVendorSerialNumber: fhir.Coding;
        readonly GastrostomyTubeVendorSerialNumber: fhir.Coding;
        readonly GITubeVendorSerialNumber: fhir.Coding;
        readonly IntravascularTubeVendorSerialNumber: fhir.Coding;
        readonly IOTubeVendorSerialNumber: fhir.Coding;
        readonly NasogastricTubeVendorSerialNumber: fhir.Coding;
        readonly OralTubeVendorSerialNumber: fhir.Coding;
        readonly PeritonealDrainVendorSerialNumber: fhir.Coding;
        readonly PeritonealTubeVendorSerialNumber: fhir.Coding;
        readonly FySupBAgPresenceOnRedBloodCellsFromBloodProductUnit: fhir.Coding;
        readonly RateControlDeviceVendorSerialNumber: fhir.Coding;
        readonly StoolCollectionDeviceVendorSerialNumber: fhir.Coding;
        readonly SubarachnoidDrainVendorSerialNumber: fhir.Coding;
        readonly SynovialDrainVendorSerialNumber: fhir.Coding;
        readonly TubeOrDrainVendorSerialNumber: fhir.Coding;
        readonly UpperGITubeVendorSerialNumber: fhir.Coding;
        readonly BladderIrrigationTubeVendorSerialNumber: fhir.Coding;
        readonly UrineTubeVendorSerialNumber: fhir.Coding;
        readonly WoundDrainDeviceVendorSerialNumber: fhir.Coding;
        readonly EnemaDeviceInstitutionInventoryNumber: fhir.Coding;
        readonly FySupBAgPresenceOnRedBloodCellsFromDonor: fhir.Coding;
        readonly EnemaDeviceVendorModelNumber: fhir.Coding;
        readonly EnemaDeviceVendorSerialNumber: fhir.Coding;
        readonly PotassiumIntake24Hour: fhir.Coding;
        readonly WoundDrainFluidAppearanceLowerGITract: fhir.Coding;
        readonly BreathRateDeviceInstitutionInventoryNumber: fhir.Coding;
        readonly BreathRateDeviceVendorModelNumber: fhir.Coding;
        readonly BreathRateDeviceVendorSerialNumber: fhir.Coding;
        readonly Eosinophils100LeukocytesInSputumByManualCount: fhir.Coding;
        readonly Lymphocytes100LeukocytesInCerebralSpinalFluidByManualCount: fhir.Coding;
        readonly Monocytes100LeukocytesInCerebralSpinalFluidByManualCount: fhir.Coding;
        readonly FySupBAgPresenceOnRedBloodCells: fhir.Coding;
        readonly Monocytes100LeukocytesInBodyFluidByManualCount: fhir.Coding;
        readonly RhTypeInBlood: fhir.Coding;
        readonly CortisolMassVolumeInSerumOrPlasmaPre250UgCorticotropinIM: fhir.Coding;
        readonly AppearanceOfCerebralSpinalFluid: fhir.Coding;
        readonly CancerAg125UnitsVolumeInSerumOrPlasma: fhir.Coding;
        readonly ColorOfCerebralSpinalFluid: fhir.Coding;
        readonly GonadotropinPeptideMassVolumeInUrine: fhir.Coding;
        readonly ProcollagenTypeIMassVolumeInSerum: fhir.Coding;
        readonly BarbituratesMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly FluoxetinePlusNorfluoxetineMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly FetalCellScreenInterpretationInBlood: fhir.Coding;
        readonly MolindoneMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly NorpropoxypheneMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly SulfamethoxazoleMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly TemazepamMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly TranylcypromineMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly TrihexyphenidylMassVolumeInUrine: fhir.Coding;
        readonly HemoglobinAUnitsVolumeInBloodByElectrophoresis: fhir.Coding;
        readonly BabesiaMicrotiIdentifiedInBloodByLightMicroscopy: fhir.Coding;
        readonly BordetellaParapertussisAbPresenceInSerum: fhir.Coding;
        readonly BrucellaSpAbUnitsVolumeInSerum: fhir.Coding;
        readonly FreshFrozenPlasmaGivenVolume: fhir.Coding;
        readonly HerpesSimplexVirusIgMAbTiterInSerumByImmunoassay: fhir.Coding;
        readonly HIV1RNAUnitsVolumeViralLoadInSerumOrPlasmaByProbeWithAmplification: fhir.Coding;
        readonly BacteriaIdentifiedInGenitalSpecimenByAerobeCulture: fhir.Coding;
        readonly BacteriaIdentifiedInNoseByAerobeCulture: fhir.Coding;
        readonly BacteriaIdentifiedInUrethraByCulture: fhir.Coding;
        readonly MicroscopicObservationIdentifierInBoneMarrowByWrightGiemsaStain: fhir.Coding;
        readonly DeprecatedMicroscopicObservationIdentifierInStoolByTrichromeStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInWoundByGramStain: fhir.Coding;
        readonly TeichoateAbTiterInSerumByImmuneDiffusionID: fhir.Coding;
        readonly AsialogangliosideGM1IgMAbTiterInSerum: fhir.Coding;
        readonly GAbPresenceInSerumOrPlasmaFromBloodProductUnit: fhir.Coding;
        readonly DNASingleStrandIgGAbUnitsVolumeInSerum: fhir.Coding;
        readonly DNASingleStrandIgMAbUnitsVolumeInSerum: fhir.Coding;
        readonly EndomysiumIgAAbPresenceInSerum: fhir.Coding;
        readonly BarbituratesPresenceInUnspecifiedSpecimen: fhir.Coding;
        readonly CotinineMassMassInHair: fhir.Coding;
        readonly CotinineMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly CotinineMassVolumeInUrine: fhir.Coding;
        readonly EthanolMassVolumeInGastricFluid: fhir.Coding;
        readonly LeadMassVolumeInCapillaryBlood: fhir.Coding;
        readonly OpiatesMassMassInHair: fhir.Coding;
        readonly GAbPresenceInSerumOrPlasmaFromDonor: fhir.Coding;
        readonly PhencyclidineMassMassInHair: fhir.Coding;
        readonly BiteCellsPresenceInBloodByLightMicroscopy: fhir.Coding;
        readonly BlisterCellsPresenceInBloodByLightMicroscopy: fhir.Coding;
        readonly FragmentsPresenceInBloodByLightMicroscopy: fhir.Coding;
        readonly HelmetCellsPresenceInBloodByLightMicroscopy: fhir.Coding;
        readonly IrregularlyContractedCellsPresenceInBloodByLightMicroscopy: fhir.Coding;
        readonly OvalMacrocytesPresenceInBloodByLightMicroscopy: fhir.Coding;
        readonly PencilCellsPresenceInBloodByLightMicroscopy: fhir.Coding;
        readonly PolychromasiaPresenceInBloodByLightMicroscopy: fhir.Coding;
        readonly ErythrocytesDualPopulationPresenceInBloodByLightMicroscopy: fhir.Coding;
        readonly GAbPresenceInSerumOrPlasma: fhir.Coding;
        readonly StomatocytesPresenceInBloodByLightMicroscopy: fhir.Coding;
        readonly TargetCellsPresenceInBloodByLightMicroscopy: fhir.Coding;
        readonly ABVariantNOSAgPresenceOnRedBloodCellsFromBloodProductUnit: fhir.Coding;
        readonly ABVariantNOSAgPresenceOnRedBloodCellsFromDonor: fhir.Coding;
        readonly ABVariantNOSAgPresenceOnRedBloodCells: fhir.Coding;
        readonly AlbuminConcentrationGiven: fhir.Coding;
        readonly AlbuminGivenVolume: fhir.Coding;
        readonly AutologousErythrocytesGivenVolume: fhir.Coding;
        readonly AutologousWholeBloodGivenVolume: fhir.Coding;
        readonly BloodProductOtherType: fhir.Coding;
        readonly GAgPresenceOnRedBloodCellsFromBloodProductUnit: fhir.Coding;
        readonly BloodProductSpecialPreparationType: fhir.Coding;
        readonly CytomegalovirusImmuneGlobulinGivenVolume: fhir.Coding;
        readonly CryoprecipitateGivenVolume: fhir.Coding;
        readonly FactorIXGivenType: fhir.Coding;
        readonly FactorIXGivenVolume: fhir.Coding;
        readonly FactorVIIIGivenType: fhir.Coding;
        readonly FactorVIIIGivenVolume: fhir.Coding;
        readonly HepatitisBImmuneGlobulinGivenVolume: fhir.Coding;
        readonly IAgPresenceOnRedBloodCellsFromBloodProductUnit: fhir.Coding;
        readonly IAgPresenceOnRedBloodCellsFromDonor: fhir.Coding;
        readonly CeforanideSusceptibilityByMinimumInhibitoryConcentrationMIC: fhir.Coding;
        readonly GAgPresenceOnRedBloodCellsFromDonor: fhir.Coding;
        readonly IAgPresenceOnRedBloodCells: fhir.Coding;
        readonly ImmuneSerumGlobulinGivenType: fhir.Coding;
        readonly ImmuneSerumGlobulinGivenVolume: fhir.Coding;
        readonly InjectImmuneSerumGlobulinVolume: fhir.Coding;
        readonly InjectRhImmuneGlobulinVolume: fhir.Coding;
        readonly InjectVaricellaZosterVirusImmuneGlobulinVolume: fhir.Coding;
        readonly LittleIAgPresenceOnRedBloodCellsFromBloodProductUnit: fhir.Coding;
        readonly LittleIAgPresenceOnRedBloodCellsFromDonor: fhir.Coding;
        readonly LittleIAgPresenceOnRedBloodCells: fhir.Coding;
        readonly PentaspanGivenVolume: fhir.Coding;
        readonly GAgPresenceOnRedBloodCells: fhir.Coding;
        readonly PlasmaGivenType: fhir.Coding;
        readonly PlasmaGivenVolume: fhir.Coding;
        readonly PlateletsGivenType: fhir.Coding;
        readonly RhImmuneGlobulinGivenVolume: fhir.Coding;
        readonly TransfuseAlbuminVolume: fhir.Coding;
        readonly TransfuseBloodExchangeTransfusionVolume: fhir.Coding;
        readonly TransfuseBloodProductOtherVolume: fhir.Coding;
        readonly TransfuseCryoprecipitateVolume: fhir.Coding;
        readonly TransfuseFactorIXVolume: fhir.Coding;
        readonly TransfuseFactorVIIIVolume: fhir.Coding;
        readonly HAbPresenceInSerumOrPlasmaFromBloodProductUnit: fhir.Coding;
        readonly TransfuseImmuneSerumGlobulinVolume: fhir.Coding;
        readonly TransfusePentaspanVolume: fhir.Coding;
        readonly TransfusePlasmaVolume: fhir.Coding;
        readonly TransfusePlateletsVolume: fhir.Coding;
        readonly TransfuseErythrocytesVolume: fhir.Coding;
        readonly TransfuseRhImmuneGlobulinVolume: fhir.Coding;
        readonly TransfuseWholeBloodVolume: fhir.Coding;
        readonly TransfuseWholeBloodAutologousVolume: fhir.Coding;
        readonly VaricellaZosterVirusImmuneGlobulinGivenVolume: fhir.Coding;
        readonly AE1AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly HAbPresenceInSerumOrPlasmaFromDonor: fhir.Coding;
        readonly AE3AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly BCellAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CD30AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly BR2AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly ComplementC3AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly C5B9AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CD15AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CD16AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CD20AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CD3AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly HAbPresenceInSerum: fhir.Coding;
        readonly DeprecatedCD30AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CD34AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CD56AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CD43TCellMonocytePlusMyeloidCellAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CD57AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CD11cAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly LeukocyteCommonAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly M5AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly TCellAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly GlucoseMassVolumeInSerumOrPlasma1HourPostMeal: fhir.Coding;
        readonly HNOSAbPresenceInSerumOrPlasmaFromBloodProductUnit: fhir.Coding;
        readonly GlucoseMassVolumeInSerumOrPlasma10HoursFasting: fhir.Coding;
        readonly ProinsulinMolesVolumeInSerumOrPlasma12HoursFasting: fhir.Coding;
        readonly XyloseMassVolumeInSerumOrPlasma1HourPost25GXylosePO: fhir.Coding;
        readonly XyloseMassVolumeInSerumOrPlasma1HourPostDoseXylosePO: fhir.Coding;
        readonly XyloseMassVolumeInSerumOrPlasma2HoursPost25GXylosePO: fhir.Coding;
        readonly XyloseMassVolumeInSerumOrPlasma30MinutesPost25GXylosePO: fhir.Coding;
        readonly XyloseMassVolumeInSerumOrPlasma6HoursFasting: fhir.Coding;
        readonly ActinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly AlkalinePhosphatasePlacentalAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly Alpha1FetoproteinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly HNOSAbPresenceInSerumOrPlasmaFromDonor: fhir.Coding;
        readonly LactalbuminAlphaAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly Alpha1AntichymotrypsinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly Alpha1AntitrypsinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly AmyloidAComponentAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly AmyloidPComponentAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly AmyloidPrealbuminAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly AnionGap3InSerumOrPlasma: fhir.Coding;
        readonly Beta2MicroglobulinAmyloidAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CalcitoninAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CarcinoembryonicAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly HNOSAbPresenceInSerumOrPlasma: fhir.Coding;
        readonly ChoriogonadotropinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly ChromograninAAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly ChromograninAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly ChymotrypsinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CollagenType4AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CorticotropinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly DesminAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly EnolaseNeuronSpecificAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly EosinophilMajorBasicProteinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CD227AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly HNOSAgPresenceOnRedBloodCellsFromBloodProductUnit: fhir.Coding;
        readonly EstrogenPlusProgesteroneReceptorAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly FollitropinAlphaSubunitAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly FollitropinBetaSubunitAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly GastrinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly GlialFibrillaryAcidicProteinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly GlucagonAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly HemoglobinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly HMB45AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly IgAAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly IgAHeavyChainAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly HNOSAgPresenceOnRedBloodCellsFromDonor: fhir.Coding;
        readonly IgEAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly IgGAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly IgGHeavyChainAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly IgMAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly IgMHeavyChainAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly InsulinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly KappaLightChainsAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly ImmunoglobulinLightChainsKappaAmyloidAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly KeratinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly LambdaLightChainsAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CeforanideSusceptibilityByDiskDiffusionKB: fhir.Coding;
        readonly HNOSAgPresenceOnRedBloodCells: fhir.Coding;
        readonly ImmunoglobulinLightChainsLambdaAmyloidAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly LutropinUnitsVolumeInSerumOrPlasma: fhir.Coding;
        readonly LutropinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly LysozymeAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly MyelinBasicProteinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly MyoglobinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly PeanutAgglutininAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly ProlactinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly ProstateSpecificAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly ProstaticAcidPhosphataseAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly HemolyticDiseaseOfNewbornScreenInterpretationInBlood: fhir.Coding;
        readonly S100AgAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly SerotoninAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly SomatostatinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly SomatotropinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly SynaptophysinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly ThyroglobulinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly ThyrotropinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly TrypsinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly UlexEuropaeusILectinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly VimentinAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly DeprecatedIIntermediateSubtypePresenceInSerumOrPlasmaFromBloodProductUnit: fhir.Coding;
        readonly CoagulationFactorVIAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CoagulationFactorVIIIAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly CoagulationFactorXIIIAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly FibrinogenAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInCervixByCytoStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInUnspecifiedSpecimenByCytoStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInSputumByCytoStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByCytoStain: fhir.Coding;
        readonly AcetophenazineMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly AmoxapineMetaboliteMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly DeprecatedIIntermediateSubtypePresenceInSerumOrPlasmaFromDonor: fhir.Coding;
        readonly AprobarbitalMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly BretyliumMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly DeprecatedDesethylamiodaroneMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly PropoxyphenePlusAcetaminophenMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly DiazoxideMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly DigoxinMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly DipyridamoleMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly DeprecatedDoxepinPlusNordoxepinMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly DeprecatedFluoxetinePlusNorfluoxetineMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly GlipizideMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly DeprecatedIIntermediateSubtypePresenceInSrum: fhir.Coding;
        readonly GlyburideMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly MepivacaineMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly MetharbitalMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly MethsuximidePlusNormethsuximideMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly NormeperidinePresenceInSerumOrPlasma: fhir.Coding;
        readonly NormephenytoinMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly NormethsuximideMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly PrimidonePlusPhenobarbitalMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly PhenytoinFreePhenytoinTotalInSerumOrPlasma: fhir.Coding;
        readonly PirmenolMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly DeprecatedIIntermediateSubtypePresenceOnRedBloodCellsFromBloodProductUnit: fhir.Coding;
        readonly DeprecatedTemazepamMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly TriamtereneMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly TricyclicAntidepressantsMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly ProstaticAcidPhosphataseEnzymaticActivityVolumeInGenitalFluid: fhir.Coding;
        readonly DeprecatedProstaticAcidPhosphataseEnzymaticActivityVolumeInSeminalPlasma: fhir.Coding;
        readonly AcrosinEntiticCatalyticActivityInSpermatozoa: fhir.Coding;
        readonly DeprecatedAdenosineTriphosphataseEnzymaticActivityVolumeInSeminalPlasma: fhir.Coding;
        readonly AdenosineTriphosphateMolesVolumeInSemen: fhir.Coding;
        readonly AlbuminMolesVolumeInSemen: fhir.Coding;
        readonly DeprecatedCalciumMoleculesVolumeInSemen: fhir.Coding;
        readonly DeprecatedIIntermediateSubtypePresenceOnRedBloodCellsFromDonor: fhir.Coding;
        readonly CarcinoembryonicAgUnitsVolumeInSemen: fhir.Coding;
        readonly CarnitineMolesVolumeInSemen: fhir.Coding;
        readonly CellsNumberVolumeInCervicalMucus: fhir.Coding;
        readonly CellsOtherThanSpermatozoaNumberVolumeInSemen: fhir.Coding;
        readonly CervicalMucusVolume: fhir.Coding;
        readonly ChoriogonadotropinUnitsVolumeInSemen: fhir.Coding;
        readonly DeprecatedChoriogonadotropinMoleculesVolumeInSemen: fhir.Coding;
        readonly CitrateMolesVolumeInSemen: fhir.Coding;
        readonly ClarityOfSemen: fhir.Coding;
        readonly ColorOfSemen: fhir.Coding;
        readonly DeprecatedIIntermediateSubtypePresenceOnRedBloodCells: fhir.Coding;
        readonly ConsistencyOfCervicalMucus: fhir.Coding;
        readonly DeprecatedConsistencyOfSemen: fhir.Coding;
        readonly DeprecatedDurationPowerPostEjaculation: fhir.Coding;
        readonly FerningTypeInCervicalMucus: fhir.Coding;
        readonly FructoseMolesVolumeInSemen: fhir.Coding;
        readonly DeprecatedGammaGlutamylTransferaseEnzymaticActivityVolumeInSemen: fhir.Coding;
        readonly GermCellsImmatureNumberVolumeInSemen: fhir.Coding;
        readonly GlucosidaseEnzymaticActivityVolumeInSeminalPlasma: fhir.Coding;
        readonly GlycerophosphocholineMolesVolumeInSeminalPlasma: fhir.Coding;
        readonly LeukocytesNumberVolumeInSemen: fhir.Coding;
        readonly IAbPresenceInSerumOrPlasmaFromBloodProductUnit: fhir.Coding;
        readonly LiquefactionTimeInSemen: fhir.Coding;
        readonly DeprecatedNumberOfEntitiesNumberInSpermatozoa: fhir.Coding;
        readonly PHOfCervicalMucus: fhir.Coding;
        readonly ProstaglandinF1AlphaMolesVolumeInSemen: fhir.Coding;
        readonly DeprecatedProteinMassVolumeInSemen: fhir.Coding;
        readonly RoundCellsNumberVolumeInSemen: fhir.Coding;
        readonly DeprecatedVolumeOfSemen: fhir.Coding;
        readonly SexualAbstinenceDuration: fhir.Coding;
        readonly SpermatogoniaNumberVolumeInSemen: fhir.Coding;
        readonly SpermatidsNumberVolumeInSemenByStreptoavidinBiotinMethodSAB: fhir.Coding;
        readonly IAbPresenceInSerumOrPlasmaFromDonor: fhir.Coding;
        readonly SpermatidsNumberVolumeInSemenBySertoliCellBarrierMethodSCB: fhir.Coding;
        readonly PrimarySpermatocytesNumberVolumeInSemen: fhir.Coding;
        readonly SecondarySpermatocytesNumberVolumeInSemen: fhir.Coding;
        readonly SpermatozoaPyriformHead100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaTaperingHead100SpermatozoaInSemen: fhir.Coding;
        readonly DeprecatedSpermatozoaNumberVolumeInSemen: fhir.Coding;
        readonly DeprecatedSpermatozoaAbInCervicalMucosa: fhir.Coding;
        readonly DeprecatedSpermatozoaAbInSemen: fhir.Coding;
        readonly DeprecatedSpermatozoaAbInSerum: fhir.Coding;
        readonly SpermatozoaPenetrationPresenceInSeminalFluidAndCervicalMucosaByKremerTest: fhir.Coding;
        readonly CeforanideSusceptibilityBySerumBactericidalTiter: fhir.Coding;
        readonly IAbPresenceInSerumOrPlasma: fhir.Coding;
        readonly SpermatozoaPenetrationPresenceInSeminalFluidAndCervicalMucosa: fhir.Coding;
        readonly SpermatozoaPenetrationPresenceInSeminalFluidAndCervicalMucosaPostCoitus: fhir.Coding;
        readonly SpermatozoaAbnormalHead100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaAbnormalMidpiece100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaAbnormalTail100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaAgglutinated100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaAmorphousHead100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaCoiledTail100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaCytoplasmicDroplet100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaDuplicateHead100SpermatozoaInSemen: fhir.Coding;
        readonly INOSAbPresenceInSerumOrPlasmaFromBloodProductUnit: fhir.Coding;
        readonly SpermatozoaDuplicateTail100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaImmotile100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaLargeOvalHead100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaViable100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaMotileWIgA100SpermatozoaInSemenByImmunobead: fhir.Coding;
        readonly SpermatozoaMotileWIgA100SpermatozoaInSemenByMixedAntiglobulinReaction: fhir.Coding;
        readonly SpermatozoaMotileWIgG100SpermatozoaInSemenByImmunobead: fhir.Coding;
        readonly SpermatozoaMotileWIgG100SpermatozoaInSemenByMixedAntiglobulinReaction: fhir.Coding;
        readonly SpermatozoaMotileWIgM100SpermatozoaInSemenByImmunobead: fhir.Coding;
        readonly SpermatozoaMotileWIgM100SpermatozoaInSemenByMixedAntiglobulinReaction: fhir.Coding;
        readonly INOSAbPresenceInSerumOrPlasmaFromDonor: fhir.Coding;
        readonly SpermatozoaNonprogressive100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaNormalHead100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaNormal100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaPinHead100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaRapid100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaRoundHead100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaSlow100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaSmallOvalHead100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaTailSwelling100SpermatozoaInSemen: fhir.Coding;
        readonly SpermatozoaVacuolatedHead100SpermatozoaInSemen: fhir.Coding;
        readonly INOSAbPresenceInSerumOrPlasma: fhir.Coding;
        readonly SpinnbarkeitLengthInCervicalMucus: fhir.Coding;
        readonly TestosteroneMolesVolumeInSemen: fhir.Coding;
        readonly TimeUntilNextMenstrualPeriod: fhir.Coding;
        readonly ZincMolesVolumeInSemen: fhir.Coding;
        readonly ComplementC1EsteraseInhibitorFunctionalComplementC1EsteraseInhibitorTotalInSerumOrPlasma: fhir.Coding;
        readonly AcanthamoebaSpIdentifiedInEyeByOrganismSpecificCulture: fhir.Coding;
        readonly AcanthamoebaSpIdentifiedInEyeByWetPreparation: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByNightBlueStain: fhir.Coding;
        readonly ThermophilicActinomycetesColonyCountNumberVolumeInUnspecifiedSpecimenByOrganismSpecificCulture: fhir.Coding;
        readonly ThermophilicActinomycetesIdentifiedInUnspecifiedSpecimenByOrganismSpecificCulture: fhir.Coding;
        readonly INOSAgPresenceOnRedBloodCellsFromBloodProductUnit: fhir.Coding;
        readonly DeprecatedAdenovirus40Plus41IdentifierInStoolByElectronMicroscopy: fhir.Coding;
        readonly AmoebaIdentifiedInAspirateByImmuneStain: fhir.Coding;
        readonly AmoebaIdentifiedInAspirateByWetPreparation: fhir.Coding;
        readonly AmoebaIdentifiedInStoolByOrganismSpecificCulture: fhir.Coding;
        readonly ArthropodIdentifiedInUnspecifiedSpecimen: fhir.Coding;
        readonly AspergillusFumigatusAgPresenceInTissueByImmunofluorescence: fhir.Coding;
        readonly AstrovirusIdentifierInStoolByElectronMicroscopy: fhir.Coding;
        readonly BabesiaSpIdentifiedInBloodByThickFilm: fhir.Coding;
        readonly BabesiaSpIdentifiedInBloodByThinFilm: fhir.Coding;
        readonly CalicivirusIdentifierInStoolByElectronMicroscopy: fhir.Coding;
        readonly INOSAgPresenceOnRedBloodCellsFromDonor: fhir.Coding;
        readonly CandidaSpDNAPresenceInBloodByProbeWithAmplification: fhir.Coding;
        readonly ChlamydophilaPneumoniaeAgPresenceInSputumOrBronchial: fhir.Coding;
        readonly ChlamydophilaPneumoniaeDNAPresenceInSputumOrBronchialByProbeWithAmplification: fhir.Coding;
        readonly ClotrimazoleSusceptibilityByMinimumInhibitoryConcentrationMIC: fhir.Coding;
        readonly ClotrimazoleSusceptibilityByMinimumLethalConcentrationMLC: fhir.Coding;
        readonly CoccidiaIdentifiedInDuodenalFluidByAcidFastStain: fhir.Coding;
        readonly CoccidiaIdentifiedInStoolByAcidFastStain: fhir.Coding;
        readonly DeprecatedCryptococcusNeoformansAgPresenceInTissueByImmunofluorescence: fhir.Coding;
        readonly CyanobacteriumIdentifiedInWaterByLightMicroscopy: fhir.Coding;
        readonly CyclosporaSpIdentifiedInStoolByAcidFastStain: fhir.Coding;
        readonly INOSAgPresenceOnRedBloodCells: fhir.Coding;
        readonly CytomegalovirusAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly DinoflagellateIdentifiedInWaterByLightMicroscopy: fhir.Coding;
        readonly FilariaIdentifiedInBloodByConcentration: fhir.Coding;
        readonly FilariaIdentifiedInBloodByThickFilm: fhir.Coding;
        readonly FilariaIdentifiedInBloodByThinFilm: fhir.Coding;
        readonly FungusColonyCountNumberVolumeInUnspecifiedSpecimenByEnvironmentalCulture: fhir.Coding;
        readonly FungusIdentifiedInTissueByFontanaMassonStain: fhir.Coding;
        readonly FungusIdentifiedInUnspecifiedSpecimenByAnimalInoculation: fhir.Coding;
        readonly FungusIdentifiedInUnspecifiedSpecimenByEnvironmentalCulture: fhir.Coding;
        readonly FungusIdentifiedInUnspecifiedSpecimenByStickyTapeForEnvironmentalFungus: fhir.Coding;
        readonly JkSupAAbPresenceInSerumOrPlasmaFromBloodProductUnit: fhir.Coding;
        readonly GiardiaLambliaPresenceInStoolByOrganismSpecificCulture: fhir.Coding;
        readonly HelminthIdentifiedInUnspecifiedSpecimen: fhir.Coding;
        readonly HelminthPlusArthropodIdentifiedInUnspecifiedSpecimen: fhir.Coding;
        readonly HepatitisBVirusCoreAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly HepatitisBVirusSurfaceAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly HepatitisBVirusSurfaceAgPresenceInTissueByOrceinStain: fhir.Coding;
        readonly HepatitisCVirusRNAUnitsVolumeViralLoadInSerumOrPlasmaByProbeWithAmplification: fhir.Coding;
        readonly HerpesSimplexVirus1AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly HerpesSimplexVirus1Plus2AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly HerpesSimplexVirus2AgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly JkSupAAbPresenceInSerumOrPlasmaFromDonor: fhir.Coding;
        readonly HerpesSimplexVirusIdentifiedInCerebralSpinalFluidByElectronMicroscopy: fhir.Coding;
        readonly HerpesSimplexVirusIdentifiedInTissueByElectronMicroscopy: fhir.Coding;
        readonly DeprecatedHIV1RNAUnitsVolumeInSerumOrPlasmaByProbeWithAmplification: fhir.Coding;
        readonly HydatidCystIdentifiedInAspirateByImmuneStain: fhir.Coding;
        readonly HydatidCystIdentifiedInLiverByWetPreparation: fhir.Coding;
        readonly HydatidCystIdentifiedInLungTissueByWetPreparation: fhir.Coding;
        readonly LeishmaniaSpIdentifiedInTissueByGiemsaStain: fhir.Coding;
        readonly LeishmaniaSpIdentifiedInTissueByOrganismSpecificCulture: fhir.Coding;
        readonly MicroscopicObservationIdentifierInHairByKOHPreparation: fhir.Coding;
        readonly MicroscopicObservationIdentifierInNailByKOHPreparation: fhir.Coding;
        readonly JkSupAAbPresenceInSerumOrPlasma: fhir.Coding;
        readonly MicrosporidiaIdentifiedInDuodenalFluidByTrichromeStainModified: fhir.Coding;
        readonly MushroomToxicIdentifiedByInspection: fhir.Coding;
        readonly MushroomToxicIdentifiedInFoodByLightMicroscopy: fhir.Coding;
        readonly MushroomToxicIdentifiedInVomitusByLightMicroscopy: fhir.Coding;
        readonly NaegleriaSpIdentifiedInTissueByOrganismSpecificCulture: fhir.Coding;
        readonly NaegleriaSpIdentifiedInTissueByWetPreparation: fhir.Coding;
        readonly NorovirusIdentifierInStoolByElectronMicroscopy: fhir.Coding;
        readonly NystatinSusceptibilityByMinimumInhibitoryConcentrationMIC: fhir.Coding;
        readonly NystatinSusceptibilityByMinimumLethalConcentrationMLC: fhir.Coding;
        readonly OnchocercaSpIdentifiedInTissueByWetPreparation: fhir.Coding;
        readonly CefotaximeSusceptibilityByMinimumLethalConcentrationMLC: fhir.Coding;
        readonly JkSupAAgPresenceOnRedBloodCellsFromBloodProductUnit: fhir.Coding;
        readonly OrthopoxvirusIdentifierInSkinByElectronMicroscopy: fhir.Coding;
        readonly OvaAndParasitesIdentifiedInStoolByConcentration: fhir.Coding;
        readonly OvaAndParasitesIdentifiedInStoolByImmuneStain: fhir.Coding;
        readonly OvaAndParasitesIdentifiedInStoolByKinyounIronHematoxylinStain: fhir.Coding;
        readonly OvaAndParasitesIdentifiedInStoolByLightMicroscopy: fhir.Coding;
        readonly HumanPapillomaVirusAgPresenceInTissueByImmuneStain: fhir.Coding;
        readonly PicornavirusIdentifierInStoolByElectronMicroscopy: fhir.Coding;
        readonly ToxicPlantIdentifiedInPlantSpecimenByInspection: fhir.Coding;
        readonly ToxicPlantIdentifiedInVomitusByLightMicroscopy: fhir.Coding;
        readonly PlasmodiumFalciparumAgUnitsVolumeInBloodByImmunofluorescence: fhir.Coding;
        readonly JkSupAAgPresenceOnRedBloodCellsFromDonor: fhir.Coding;
        readonly PlasmodiumSpIdentifiedInBloodByThinFilm: fhir.Coding;
        readonly PlasmodiumVivaxAgUnitsVolumeInBloodByImmunofluorescence: fhir.Coding;
        readonly PneumocystisSpIdentifiedInLungTissue: fhir.Coding;
        readonly ProtothecaIdentifiedInUnspecifiedSpecimenByCulture: fhir.Coding;
        readonly DeprecatedRotavirusIdentifierInStoolByElectronMicroscopy: fhir.Coding;
        readonly SchistosomaSpIdentifiedInUrineSedimentByLightMicroscopy: fhir.Coding;
        readonly SchistosomaSpIdentifiedInUnspecifiedSpecimenByOrganismSpecificCulture: fhir.Coding;
        readonly StreptococcusPneumoniaeAbUnitsVolumeInSerumByLatexAgglutination: fhir.Coding;
        readonly StrongyloidesSpAbUnitsVolumeInSerumByImmunoassay: fhir.Coding;
        readonly TaeniaSoliumAdultAbUnitsVolumeInSerumByImmunoblot: fhir.Coding;
        readonly JkSupAAgPresenceOnRedBloodCells: fhir.Coding;
        readonly TerbinafineSusceptibilityByMinimumInhibitoryConcentrationMIC: fhir.Coding;
        readonly TerbinafineSusceptibilityByMinimumLethalConcentrationMLC: fhir.Coding;
        readonly TorovirusIdentifierInStoolByElectronMicroscopy: fhir.Coding;
        readonly ToxoplasmaGondiiIgAAbUnitsVolumeInSerumByImmunoassay: fhir.Coding;
        readonly ToxoplasmaGondiiIgEAbUnitsVolumeInSerumByImmunoassay: fhir.Coding;
        readonly ToxoplasmaGondiiDNAUnitsVolumeInBodyFluidByProbeWithAmplification: fhir.Coding;
        readonly ToxoplasmaGondiiPresenceInTissueByGiemsaStain: fhir.Coding;
        readonly ToxoplasmaGondiiIdentifiedInTissue: fhir.Coding;
        readonly TrichomonasSpIdentifiedInGenitalSpecimenByOrganismSpecificCulture: fhir.Coding;
        readonly TrypanosomaSpIdentifiedInBloodByLightMicroscopy: fhir.Coding;
        readonly JkSupBAbPresenceInSerumOrPlasmaFromBloodProductUnit: fhir.Coding;
        readonly TrypanosomaSpIdentifiedInBloodByOrganismSpecificCulture: fhir.Coding;
        readonly TrypanosomaSpIdentifiedInBloodByThickFilm: fhir.Coding;
        readonly TrypanosomaSpIdentifiedInBloodByThinFilm: fhir.Coding;
        readonly TrypanosomaSpIdentifiedInBloodByWetPreparation: fhir.Coding;
        readonly VaricellaZosterVirusIdentifiedInSkinByElectronMicroscopy: fhir.Coding;
        readonly ViralSequencingIdentifierInSerumBySequencing: fhir.Coding;
        readonly VirusIdentifiedInCerebralSpinalFluidByElectronMicroscopy: fhir.Coding;
        readonly VirusIdentifiedInStoolByElectronMicroscopy: fhir.Coding;
        readonly VirusIdentifiedInTissueByElectronMicroscopy: fhir.Coding;
        readonly VirusIdentifiedInUnspecifiedSpecimenByElectronMicroscopy: fhir.Coding;
        readonly JkSupBAbPresenceInSerumOrPlasmaFromDonor: fhir.Coding;
        readonly AluminumMicroscopicObservationIdentifierInBoneByHistomorphometryStain: fhir.Coding;
        readonly AmyloidMicroscopicObservationIdentifierInBrainByThioflavineSStain: fhir.Coding;
        readonly AmyloidMicroscopicObservationIdentifierInTissueByBennholdStainPutchlerModified: fhir.Coding;
        readonly AmyloidMicroscopicObservationIdentifierInTissueByHighmanStain: fhir.Coding;
        readonly AmyloidMicroscopicObservationIdentifierInTissueByVassarCullingStain: fhir.Coding;
        readonly BileMicroscopicObservationIdentifierInTissueByFouchetStain: fhir.Coding;
        readonly CalciumMicroscopicObservationIdentifierInTissueByVonKossaStain: fhir.Coding;
        readonly CollagenFibersPlusElasticFibersMicroscopicObservationIdentifierInTissueByLawsonVanGiesonStain: fhir.Coding;
        readonly CollagenFibersPlusElasticFibersMicroscopicObservationIdentifierInTissueByVerhoeffVanGiesonStain: fhir.Coding;
        readonly CollagenFibersMicroscopicObservationIdentifierInTissueByVanGiesonStain: fhir.Coding;
        readonly JkSupBAbPresenceInSerumOrPlasma: fhir.Coding;
        readonly ConnectiveTissueMicroscopicObservationIdentifierInTissueByTrichromeStainMasson: fhir.Coding;
        readonly CopperMicroscopicObservationIdentifierInTissueByRhodamineStain: fhir.Coding;
        readonly FatMicroscopicObservationIdentifierInMilkBySudanIVStain: fhir.Coding;
        readonly FatMicroscopicObservationIdentifierInStoolBySudanIVStain: fhir.Coding;
        readonly FatMicroscopicObservationIdentifierInTissueBySudanIVStain: fhir.Coding;
        readonly FungusMicroscopicObservationIdentifierInTissueByMethenamineSilverStainGrocott: fhir.Coding;
        readonly GlialFibersMicroscopicObservationIdentifierInTissueByHolzerStain: fhir.Coding;
        readonly HematologicPlusNuclearElementsMicroscopicObservationIdentifierInTissueByGiemsaStainMayGrunwald: fhir.Coding;
        readonly IronMicroscopicObservationIdentifierInBoneByHistomorphometryStain: fhir.Coding;
        readonly IronMicroscopicObservationIdentifierInSputumByGomoriStain: fhir.Coding;
        readonly JkSupBAgPresenceOnRedBloodCellsFromBloodProductUnit: fhir.Coding;
        readonly IronMicroscopicObservationIdentifierInTissueByGomoriStain: fhir.Coding;
        readonly IronMicroscopicObservationIdentifierInTissueByOtherStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInBloodByHemosiderinStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInBodyFluidBySudanBlackStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInSputumBySilverStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByAcetateEsteraseStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByAlcianBlueStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByAlcianBlueStainSulfated: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByAlcianBlueStainWithPeriodicAcidSchiff: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByAlizarinRedSStain: fhir.Coding;
        readonly JkSupBAgPresenceOnRedBloodCellsFromDonor: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByArgentaffinStain: fhir.Coding;
        readonly DeprecatedMicroscopicObservationIdentifierInTissueByRhodamineAuramineFluorochromeStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByAzureEosinStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByBasicFuchsinStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByBielschowskyStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByBleachStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByBodianStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByBrownAndBrennStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByButyrateEsteraseStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByCarmineStainBest: fhir.Coding;
        readonly JkSupBAgPresenceOnRedBloodCells: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByChloracetateEsteraseStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByChurukianSchenkStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByCongoRedStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByCrystalVioletStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByEsteraseStainNonSpecific: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByFiteFaracoStain: fhir.Coding;
        readonly DeprecatedMicroscopicObservationIdentifierInTissueByGiemsaStain3Micron: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByGridleyStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByHanselStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByHematoxylinEosinHarrisRegressiveStain: fhir.Coding;
        readonly JsSupAAbPresenceInSerumOrPlasmaFromBloodProductUnit: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByHematoxylinEosinMayersProgressiveStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByMalloryHeidenhainStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByMethenamineSilverStainJones: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByMethylGreenStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByMethylGreenPyronineYStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByMethylVioletStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByMucicarmineStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByNeutralRedStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByOilRedOStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByPentachromeStainMovat: fhir.Coding;
        readonly CefotaximeSusceptibilityByMinimumInhibitoryConcentrationMIC: fhir.Coding;
        readonly JsSupAAbPresenceInSerumOrPlasmaFromDonor: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByPeriodicAcidSchiffStainWithDiataseDigestion: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByPhosphotungsticAcidHematoxylinPTAHStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByPrussianBlueStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByQuinacrineFluorescentStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByReticulinStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueBySafraninStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueBySchmorlStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueBySevierMungerStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueBySilverImpregnationStainDieterle: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueBySilverNitrateStain: fhir.Coding;
        readonly JsSupAAbPresenceInSerumOrPlasma: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueBySilverStainFontanaMasson: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueBySilverStainGrimelius: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueBySteinerStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueBySudanBlackStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueBySupravitalStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByTetrachromeStain: fhir.Coding;
        readonly DeprecatedMicroscopicObservationIdentifierInTissueByToluidineBlueOStain: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByTrichromeStainGomoriWheatley: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByTrichromeStainMassonModified: fhir.Coding;
        readonly MicroscopicObservationIdentifierInTissueByWadeStain: fhir.Coding;
        readonly JsSupAAgPresenceOnRedBloodCellsFromBloodProductUnit: fhir.Coding;
        readonly DeprecatedMicroscopicObservationIdentifierInTissueByWarthinStarryStain: fhir.Coding;
        readonly DeprecatedMicroscopicObservationIdentifierInTissueByWrightGiemsaStain: fhir.Coding;
        readonly MucinMicroscopicObservationIdentifierInTissueByMucicarmineStainMayer: fhir.Coding;
        readonly MucopolysaccharidesMicroscopicObservationIdentifierInTissueByColloidalFerricOxideStainHale: fhir.Coding;
        readonly MyelinPlusMyelinBreakdownProductsMicroscopicObservationIdentifierInTissueByLuxolFastBluePeriodicAcidSchiffStain: fhir.Coding;
        readonly MyelinPlusNerveCellsMicroscopicObservationIdentifierInTissueByLuxolFastBlueCresylVioletStain: fhir.Coding;
        readonly NisselMicroscopicObservationIdentifierInTissueByCresylEchtVioletStain: fhir.Coding;
        readonly ReticulumMicroscopicObservationIdentifierInTissueByGomoriStain: fhir.Coding;
        readonly UrateCrystalsMicroscopicObservationTypeInTissueByDeGalanthaStain: fhir.Coding;
        readonly SiliconMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly JsSupAAgPresenceOnRedBloodCellsFromDonor: fhir.Coding;
        readonly DeprecatedSurgicalOperationNoteComplications: fhir.Coding;
        readonly SurgicalOperationNoteComplicationsInterpretation: fhir.Coding;
        readonly GlucoseMassVolumeInSerumOrPlasma15MinutesPost50GLactosePO: fhir.Coding;
        readonly InsulinMassVolumeInSerumOrPlasma7HoursPost75GGlucosePO: fhir.Coding;
        readonly GlobulinMassVolumeInSerumByCalculation: fhir.Coding;
        readonly LipoproteinAMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly NiacinMassVolumeInBlood: fhir.Coding;
        readonly OrganicAcidsPresenceInSerumOrPlasma: fhir.Coding;
        readonly PhosphoserineMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly TroponinICardiacMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly JsSupAAgPresenceOnRedBloodCells: fhir.Coding;
        readonly AtropineMassVolumeInUrine: fhir.Coding;
        readonly MethazolamideMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly DeprecatedHLADQ1Presence: fhir.Coding;
        readonly DeprecatedHLADQ2Presence: fhir.Coding;
        readonly DeprecatedHLADQ3Presence: fhir.Coding;
        readonly DeprecatedHLADQ4Presence: fhir.Coding;
        readonly BorreliaBurgdorferiDNAPresenceInBloodByProbeWithAmplification: fhir.Coding;
        readonly BorreliaBurgdorferiDNAPresenceInBodyFluidByProbeWithAmplification: fhir.Coding;
        readonly ChlamydiaSpIgGAbTiterInSerumByImmunofluorescence: fhir.Coding;
        readonly ChlamydiaSpIgMAbTiterInSerumByImmunofluorescence: fhir.Coding;
        readonly JsSupBAbPresenceInSerumOrPlasmaFromBloodProductUnit: fhir.Coding;
        readonly CyclosporaCayetanensisPresenceInUnspecifiedSpecimen: fhir.Coding;
        readonly EscherichiaColiO157H7PresenceInStoolByOrganismSpecificCulture: fhir.Coding;
        readonly DeprecatedFungusIdentifiedInBloodByCulture: fhir.Coding;
        readonly IsosporaBelliPresenceInUnspecifiedSpecimenByAcidFastStainKinyounModified: fhir.Coding;
        readonly DeprecatedMidrofilariaIdentifiedInBloodByConcentration: fhir.Coding;
        readonly OvaAndParasitesIdentifiedInDuodenalFluidOrGastricFluidByLightMicroscopy: fhir.Coding;
        readonly MicroscopicObservationIdentifierInGenitalMucusByGramStain: fhir.Coding;
        readonly MicrosporidiaIdentifiedInUnspecifiedSpecimenByLightMicroscopy: fhir.Coding;
        readonly TeichoateAbPresenceInSerum: fhir.Coding;
        readonly TrypanosomaSpIdentifierInBloodByAcridineOrangePlusGiemsaStain: fhir.Coding;
        readonly JsSupBAbPresenceInSerumOrPlasmaFromDonor: fhir.Coding;
        readonly VaricellaZosterVirusPresenceInUnspecifiedSpecimenByOrganismSpecificCulture: fhir.Coding;
        readonly ProgesteroneReceptorMassMassInTissue: fhir.Coding;
        readonly BasementMembraneAbTiterInSerum: fhir.Coding;
        readonly EndomysiumIgAAbTiterInSerum: fhir.Coding;
        readonly ImmuneComplexUnitsVolumeInSerumOrPlasmaByRajiCellAssay: fhir.Coding;
        readonly IntercellularSubstanceAbPresenceInSerum: fhir.Coding;
        readonly SulfatideIgGAbTiterInSerum: fhir.Coding;
        readonly SulfatideIgMAbTiterInSerum: fhir.Coding;
        readonly BacitracinSusceptibilityByDiskDiffusionKB: fhir.Coding;
        readonly XyloseMassVolumeInBlood3HoursPost25GXylosePO: fhir.Coding;
        readonly JsSupBAbPresenceInSerumOrPlasma: fhir.Coding;
        readonly XyloseMassVolumeInBlood4HoursPost25GXylosePO: fhir.Coding;
        readonly XyloseMassVolumeInBlood5HoursPost25GXylosePO: fhir.Coding;
        readonly XyloseMassVolumeInBloodBaseline: fhir.Coding;
        readonly Beta2MicroglobulinMassTimeIn24HourUrine: fhir.Coding;
        readonly BombesinMassVolumeInPlasma: fhir.Coding;
        readonly CarnitineEstersMassVolumeInUrine: fhir.Coding;
        readonly CarnitineEstersMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly CarnitineFreeC0MassVolumeInUrine: fhir.Coding;
        readonly IodineProteinBoundMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly IsovalerylglycineMassVolumeInUrine: fhir.Coding;
        readonly JsSupBAgPresenceOnRedBloodCellsFromBloodProductUnit: fhir.Coding;
        readonly MagnesiumMassMassInStool: fhir.Coding;
        readonly PentacarboxylporphyrinsMassVolumeInRedBloodCells: fhir.Coding;
        readonly PentacarboxylporphyrinsMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly PhenolphthaleinMassMassInStool: fhir.Coding;
        readonly PhosphateMassMassInStool: fhir.Coding;
        readonly PorphyrinsMassTimeIn24HourUrine: fhir.Coding;
        readonly ProstateSpecificAgFreeMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly PyridinolineMassTimeIn24HourUrine: fhir.Coding;
        readonly LipaseEnzymaticActivityVolumeInUrine: fhir.Coding;
        readonly BisacodylMassMassInStool: fhir.Coding;
        readonly JsSupBAgPresenceOnRedBloodCellsFromDonor: fhir.Coding;
        readonly DeprecatedNormethsuximideMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly OxyphenisatinMassMassInStool: fhir.Coding;
        readonly PentoxifyllineMassVolumeInSerumOrPlasma: fhir.Coding;
        readonly TrenboloneMassVolumeInUrine: fhir.Coding;
        readonly AspergillusNigerAbPresenceInSerumByImmuneDiffusionID: fhir.Coding;
        readonly ClostridiumDifficileToxinBPresenceInStool: fhir.Coding;
        readonly EasternEquineEncephalitisVirusIgGAbTiterInSerumByImmunofluorescence: fhir.Coding;
        readonly EasternEquineEncephalitisVirusIgGAbTiterInCerebralSpinalFluidByImmunofluorescence: fhir.Coding;
        readonly EasternEquineEncephalitisVirusIgMAbTiterInSerumByImmunofluorescence: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=DiagnosticReport.d.ts.map