import * as fhir from '../fhir.js';
import { CompositionAttestationModeCodeType } from '../fhirValueSets/CompositionAttestationModeCodes.js';
import { DocumentRelationshipTypeCodeType } from '../fhirValueSets/DocumentRelationshipTypeCodes.js';
import { ListModeCodeType } from '../fhirValueSets/ListModeCodes.js';
import { CompositionStatusCodeType } from '../fhirValueSets/CompositionStatusCodes.js';
/**
 * Valid arguments for the CompositionAttester type.
 */
export interface CompositionAttesterArgs extends fhir.BackboneElementArgs {
    /**
     * The type of attestation the authenticator offers.
     */
    mode: fhir.FhirCode<CompositionAttestationModeCodeType> | string | undefined;
    /**
     * When the composition was attested by the party.
     */
    time?: fhir.FhirDateTime | string | undefined;
    /**
     * Who attested the composition in the specified way.
     */
    party?: fhir.ReferenceArgs | undefined;
}
/**
 * Only list each attester once.
 */
export declare class CompositionAttester extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of attestation the authenticator offers.
     */
    mode: fhir.FhirCode<CompositionAttestationModeCodeType> | null;
    /**
     * When the composition was attested by the party.
     */
    time?: fhir.FhirDateTime | undefined;
    /**
     * Who attested the composition in the specified way.
     */
    party?: fhir.Reference | undefined;
    /**
     * Default constructor for CompositionAttester - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompositionAttesterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for mode (Composition.attester.mode)
     */
    static get modeRequiredCodes(): {
        readonly Legal: "legal";
        readonly Official: "official";
        readonly Personal: "personal";
        readonly Professional: "professional";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CompositionRelatesTo type.
 */
export interface CompositionRelatesToArgs extends fhir.BackboneElementArgs {
    /**
     * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
     */
    code: fhir.FhirCode<DocumentRelationshipTypeCodeType> | string | undefined;
    /**
     * The target composition/document of this relationship.
     */
    target?: fhir.Identifier | fhir.Reference | undefined;
    /**
     * The target composition/document of this relationship.
     */
    targetIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * The target composition/document of this relationship.
     */
    targetReference?: fhir.ReferenceArgs | undefined;
}
/**
 * A document is a version specific composition.
 */
export declare class CompositionRelatesTo extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
     */
    code: fhir.FhirCode<DocumentRelationshipTypeCodeType> | null;
    /**
     * The target composition/document of this relationship.
     */
    target: (fhir.Identifier | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element Composition.relatesTo.target[x]
     */
    protected static readonly _fts_targetIsChoice: true;
    /**
     * Default constructor for CompositionRelatesTo - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompositionRelatesToArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for code (Composition.relatesTo.code)
     */
    static get codeRequiredCodes(): {
        readonly Appends: "appends";
        readonly Replaces: "replaces";
        readonly Signs: "signs";
        readonly Transforms: "transforms";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CompositionEvent type.
 */
export interface CompositionEventArgs extends fhir.BackboneElementArgs {
    /**
     * An event can further specialize the act inherent in the typeCode, such as where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more eventCodes are included, they SHALL NOT conflict with the values inherent in the classCode, practiceSettingCode or typeCode, as such a conflict would create an ambiguous situation. This short list of codes is provided to be used as key words for certain types of queries.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
     */
    detail?: fhir.ReferenceArgs[] | undefined;
}
/**
 * The event needs to be consistent with the type element, though can provide further information if desired.
 */
export declare class CompositionEvent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An event can further specialize the act inherent in the typeCode, such as where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more eventCodes are included, they SHALL NOT conflict with the values inherent in the classCode, practiceSettingCode or typeCode, as such a conflict would create an ambiguous situation. This short list of codes is provided to be used as key words for certain types of queries.
     */
    code: fhir.CodeableConcept[];
    /**
     * The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
     */
    period?: fhir.Period | undefined;
    /**
     * The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
     */
    detail: fhir.Reference[];
    /**
     * Default constructor for CompositionEvent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompositionEventArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CompositionSection type.
 */
export interface CompositionSectionArgs extends fhir.BackboneElementArgs {
    /**
     * The title identifies the section for a human reader. The title must be consistent with the narrative of the resource that is the target of the section.content reference. Generally, sections SHOULD have titles, but in some documents, it is unnecessary or inappropriate. Typically, this is where a section has subsections that have their own adequately distinguishing title,  or documents that only have a single section. Most Implementation Guides will make section title to be a required element.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * The code identifies the section for an automated processor of the document. This is particularly relevant when using profiles to control the structure of the document.
     * If the section has content (instead of sub-sections), the section.code does not change the meaning or interpretation of the resource that is the content of the section in the comments for the section.code.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies who is responsible for the information in this section, not necessarily who typed it in.
     */
    author?: fhir.ReferenceArgs[] | undefined;
    /**
     * Typically, sections in a doument are about the subject of the document, whether that is a  patient, or group of patients, location, or device, or whatever. For some kind of documents, some sections actually contain data about related entities. Typical examples are  a section in a newborn discharge summary concerning the mother, or family history documents, with a section about each family member, though there are many other examples.
     */
    focus?: fhir.ReferenceArgs | undefined;
    /**
     * Document profiles may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: fhir.NarrativeArgs | undefined;
    /**
     * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
     */
    mode?: fhir.FhirCode<ListModeCodeType> | string | undefined;
    /**
     * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
     */
    orderedBy?: fhir.CodeableConceptArgs | undefined;
    /**
     * If there are no entries in the list, an emptyReason SHOULD be provided.
     */
    entry?: fhir.ReferenceArgs[] | undefined;
    /**
     * The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is for use when the entire section content has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
     */
    emptyReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Nested sections are primarily used to help human readers navigate to particular portions of the document.
     */
    section?: fhir.CompositionSectionArgs[] | undefined;
}
/**
 * The root of the sections that make up the composition.
 */
export declare class CompositionSection extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The title identifies the section for a human reader. The title must be consistent with the narrative of the resource that is the target of the section.content reference. Generally, sections SHOULD have titles, but in some documents, it is unnecessary or inappropriate. Typically, this is where a section has subsections that have their own adequately distinguishing title,  or documents that only have a single section. Most Implementation Guides will make section title to be a required element.
     */
    title?: fhir.FhirString | undefined;
    /**
     * The code identifies the section for an automated processor of the document. This is particularly relevant when using profiles to control the structure of the document.
     * If the section has content (instead of sub-sections), the section.code does not change the meaning or interpretation of the resource that is the content of the section in the comments for the section.code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Identifies who is responsible for the information in this section, not necessarily who typed it in.
     */
    author: fhir.Reference[];
    /**
     * Typically, sections in a doument are about the subject of the document, whether that is a  patient, or group of patients, location, or device, or whatever. For some kind of documents, some sections actually contain data about related entities. Typical examples are  a section in a newborn discharge summary concerning the mother, or family history documents, with a section about each family member, though there are many other examples.
     */
    focus?: fhir.Reference | undefined;
    /**
     * Document profiles may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: fhir.Narrative | undefined;
    /**
     * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
     */
    mode?: fhir.FhirCode<ListModeCodeType> | undefined;
    /**
     * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
     */
    orderedBy?: fhir.CodeableConcept | undefined;
    /**
     * If there are no entries in the list, an emptyReason SHOULD be provided.
     */
    entry: fhir.Reference[];
    /**
     * The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is for use when the entire section content has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
     */
    emptyReason?: fhir.CodeableConcept | undefined;
    /**
     * Nested sections are primarily used to help human readers navigate to particular portions of the document.
     */
    section: fhir.CompositionSection[];
    /**
     * Default constructor for CompositionSection - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompositionSectionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for mode (Composition.section.mode)
     */
    static get modeRequiredCodes(): {
        readonly ChangeList: "changes";
        readonly SnapshotList: "snapshot";
        readonly WorkingList: "working";
    };
    /**
     * Preferred-bound Value Set for orderedBy (Composition.section.orderedBy)
     */
    static get orderedByPreferredCodings(): {
        readonly SortedAlphabetically: fhir.Coding;
        readonly SortedByCategory: fhir.Coding;
        readonly SortedByItemDate: fhir.Coding;
        readonly SortedByEventDate: fhir.Coding;
        readonly SortedByPatient: fhir.Coding;
        readonly SortedByPriority: fhir.Coding;
        readonly SortedBySystem: fhir.Coding;
        readonly SortedByUser: fhir.Coding;
    };
    /**
     * Preferred-bound Value Set for emptyReason (Composition.section.emptyReason)
     */
    static get emptyReasonPreferredCodings(): {
        readonly Closed: fhir.Coding;
        readonly NilKnown: fhir.Coding;
        readonly NotAsked: fhir.Coding;
        readonly NotStarted: fhir.Coding;
        readonly Unavailable: fhir.Coding;
        readonly InformationWithheld: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Composition type.
 */
export interface CompositionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Composition" | undefined;
    /**
     * Similar to ClinicalDocument/setId in CDA. See discussion in resource definition for how these relate.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * If a composition is marked as withdrawn, the compositions/documents in the series, or data from the composition or document series, should never be displayed to a user without being clearly marked as untrustworthy. The flag "entered-in-error" is why this element is labeled as a modifier of other elements.
     * Some reporting work flows require that the original narrative of a final document never be altered; instead, only new narrative can be added. The composition resource has no explicit status for explicitly noting whether this business rule is in effect. This would be handled by an extension if required.
     */
    status: fhir.FhirCode<CompositionStatusCodeType> | string | undefined;
    /**
     * For Composition type, LOINC is ubiquitous and strongly endorsed by HL7. Most implementation guides will require a specific LOINC code, or use LOINC as an extensible binding.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * For clinical documents, this is usually the patient.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Describes the clinical encounter or type of care this documentation is associated with.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * The Last Modified Date on the composition may be after the date of the document was attested without being changed.
     */
    date: fhir.FhirDateTime | string | undefined;
    /**
     * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
     */
    author: fhir.ReferenceArgs[] | null;
    /**
     * For many compositions, the title is the same as the text or a display name of Composition.type (e.g. a "consultation" or "progress note"). Note that CDA does not make title mandatory, but there are no known cases where it is useful for title to be omitted, so it is mandatory here. Feedback on this requirement is welcome during the trial use period.
     */
    title: fhir.FhirString | string | undefined;
    /**
     * The exact use of this element, and enforcement and issues related to highly sensitive documents are out of scope for the base specification, and delegated to implementation profiles (see security section).  This element is labeled as a modifier because highly confidential documents must not be treated as if they are not.
     */
    confidentiality?: fhir.FhirCode | string | undefined;
    /**
     * Only list each attester once.
     */
    attester?: fhir.CompositionAttesterArgs[] | undefined;
    /**
     * This is useful when documents are derived from a composition - provides guidance for how to get the latest version of the document. This is optional because this is sometimes not known by the authoring system, and can be inferred by context. However, it is important that this information be known when working with a derived document, so providing a custodian is encouraged.
     */
    custodian?: fhir.ReferenceArgs | undefined;
    /**
     * A document is a version specific composition.
     */
    relatesTo?: fhir.CompositionRelatesToArgs[] | undefined;
    /**
     * The event needs to be consistent with the type element, though can provide further information if desired.
     */
    event?: fhir.CompositionEventArgs[] | undefined;
    /**
     * The root of the sections that make up the composition.
     */
    section?: fhir.CompositionSectionArgs[] | undefined;
}
/**
 * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 */
export declare class Composition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Composition";
    /**
     * Similar to ClinicalDocument/setId in CDA. See discussion in resource definition for how these relate.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * If a composition is marked as withdrawn, the compositions/documents in the series, or data from the composition or document series, should never be displayed to a user without being clearly marked as untrustworthy. The flag "entered-in-error" is why this element is labeled as a modifier of other elements.
     * Some reporting work flows require that the original narrative of a final document never be altered; instead, only new narrative can be added. The composition resource has no explicit status for explicitly noting whether this business rule is in effect. This would be handled by an extension if required.
     */
    status: fhir.FhirCode<CompositionStatusCodeType> | null;
    /**
     * For Composition type, LOINC is ubiquitous and strongly endorsed by HL7. Most implementation guides will require a specific LOINC code, or use LOINC as an extensible binding.
     */
    type: fhir.CodeableConcept | null;
    /**
     * This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
     */
    category: fhir.CodeableConcept[];
    /**
     * For clinical documents, this is usually the patient.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Describes the clinical encounter or type of care this documentation is associated with.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The Last Modified Date on the composition may be after the date of the document was attested without being changed.
     */
    date: fhir.FhirDateTime | null;
    /**
     * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
     */
    author: fhir.Reference[];
    /**
     * For many compositions, the title is the same as the text or a display name of Composition.type (e.g. a "consultation" or "progress note"). Note that CDA does not make title mandatory, but there are no known cases where it is useful for title to be omitted, so it is mandatory here. Feedback on this requirement is welcome during the trial use period.
     */
    title: fhir.FhirString | null;
    /**
     * The exact use of this element, and enforcement and issues related to highly sensitive documents are out of scope for the base specification, and delegated to implementation profiles (see security section).  This element is labeled as a modifier because highly confidential documents must not be treated as if they are not.
     */
    confidentiality?: fhir.FhirCode | undefined;
    /**
     * Only list each attester once.
     */
    attester: fhir.CompositionAttester[];
    /**
     * This is useful when documents are derived from a composition - provides guidance for how to get the latest version of the document. This is optional because this is sometimes not known by the authoring system, and can be inferred by context. However, it is important that this information be known when working with a derived document, so providing a custodian is encouraged.
     */
    custodian?: fhir.Reference | undefined;
    /**
     * A document is a version specific composition.
     */
    relatesTo: fhir.CompositionRelatesTo[];
    /**
     * The event needs to be consistent with the type element, though can provide further information if desired.
     */
    event: fhir.CompositionEvent[];
    /**
     * The root of the sections that make up the composition.
     */
    section: fhir.CompositionSection[];
    /**
     * Default constructor for Composition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompositionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Composition.status)
     */
    static get statusRequiredCodes(): {
        readonly Amended: "amended";
        readonly EnteredInError: "entered-in-error";
        readonly Final: "final";
        readonly Preliminary: "preliminary";
    };
    /**
     * Preferred-bound Value Set for type (Composition.type)
     */
    static get typePreferredCodings(): {
        readonly AnesthesiaRecords: fhir.Coding;
        readonly ChemotherapyRecords: fhir.Coding;
        readonly ConsultNote: fhir.Coding;
        readonly PhysicianDischargeSummary: fhir.Coding;
        readonly ProviderUnspecifedHistoryAndPhysicalNote: fhir.Coding;
        readonly DeprecatedPhysicianInitialAssessmentNoteAtFirstEncounter: fhir.Coding;
        readonly DeprecatedPhysicalTherapyInitialAssessmentNoteAtFirstEncounter: fhir.Coding;
        readonly DeprecatedPodiatryInitialAssessmentNoteAtFirstEncounter: fhir.Coding;
        readonly DeprecatedPsychologyInitialAssessmentNoteAtFirstEncounter: fhir.Coding;
        readonly DeprecatedSocialWorkInitialAssessmentNoteAtFirstEncounter: fhir.Coding;
        readonly DeprecatedSpeechTherapyInitialAssessmentNoteAtFirstEncounter: fhir.Coding;
        readonly DeprecatedOccupationalTherapyInitialAssessmentNoteAtFirstEncounter: fhir.Coding;
        readonly LaboratoryReport: fhir.Coding;
        readonly MedicalRecords: fhir.Coding;
        readonly SurgicalOperationNote: fhir.Coding;
        readonly PhysicianProcedureNote: fhir.Coding;
        readonly ProgressNote: fhir.Coding;
        readonly OccupationalTherapyProgressNote: fhir.Coding;
        readonly PhysicalTherapyProgressNote: fhir.Coding;
        readonly PodiatryProgressNote: fhir.Coding;
        readonly PsychologyProgressNote: fhir.Coding;
        readonly SpeechLanguagePathologyProgressNote: fhir.Coding;
        readonly ChiropracticRecordsTotalEncounter: fhir.Coding;
        readonly PhysicalTherapyRecordsTotalEncounter: fhir.Coding;
        readonly PhysicianRecordsTotalEncounter: fhir.Coding;
        readonly PodiatryRecordsTotalEncounter: fhir.Coding;
        readonly PsychologyRecordsTotalEncounter: fhir.Coding;
        readonly SocialServiceRecordsTotalEncounter: fhir.Coding;
        readonly SpeechTherapyRecordsTotalEncounter: fhir.Coding;
        readonly OccupationalTherapyRecordsTotalEncounter: fhir.Coding;
        readonly DeprecatedCardiacEchoStudy: fhir.Coding;
        readonly EEGStudy: fhir.Coding;
        readonly EKGStudy: fhir.Coding;
        readonly USPelvisFetusForPregnancy: fhir.Coding;
        readonly PathologyStudy: fhir.Coding;
        readonly PsychiatryStudy: fhir.Coding;
        readonly DeprecatedRadiologyUnspecifiedSiteAndModalityStudy: fhir.Coding;
        readonly SurgicalPathologyStudy: fhir.Coding;
        readonly TemperatureCharts: fhir.Coding;
        readonly NurseNotes: fhir.Coding;
        readonly DeprecatedCTChestStudy: fhir.Coding;
        readonly DeprecatedCTHeadStudy: fhir.Coding;
        readonly DeprecatedCTAbdomenStudy: fhir.Coding;
        readonly DeprecatedMRIBrainStudy: fhir.Coding;
        readonly DeprecatedProviderUnspecifiedVisitNote: fhir.Coding;
        readonly NurseryRecords: fhir.Coding;
        readonly EmergencyDepartmentProgressNote: fhir.Coding;
        readonly LaborAndDeliveryRecords: fhir.Coding;
        readonly DeprecatedNMThyroidGlandStudyReport: fhir.Coding;
        readonly PsychiatricServiceAttachment: fhir.Coding;
        readonly PhysicianAttendingProgressNote: fhir.Coding;
        readonly OccupationalTherapyInitialEvaluationNote: fhir.Coding;
        readonly PhysicalTherapyInitialEvaluationNote: fhir.Coding;
        readonly PhysicianInitialEvaluationNote: fhir.Coding;
        readonly PodiatryInitialEvaluationNote: fhir.Coding;
        readonly PsychologyInitialEvaluationNote: fhir.Coding;
        readonly SocialWorkInitialEvaluationNote: fhir.Coding;
        readonly SpeechLanguagePathologyInitialEvaluationNote: fhir.Coding;
        readonly DeprecatedAttendingPhysicianProgressNote: fhir.Coding;
        readonly ArthroscopyStudy: fhir.Coding;
        readonly AutopsyReport: fhir.Coding;
        readonly BronchoscopyStudy: fhir.Coding;
        readonly CardiacCatheterizationStudy: fhir.Coding;
        readonly ColonoscopyStudy: fhir.Coding;
        readonly DeprecatedCTUnspecifiedSystemStudy: fhir.Coding;
        readonly DiagnosticImagingStudy: fhir.Coding;
        readonly ElectromyogramStudy: fhir.Coding;
        readonly ElectrophysiologyStudy: fhir.Coding;
        readonly EndoscopyStudy: fhir.Coding;
        readonly ExerciseStressTestStudy: fhir.Coding;
        readonly FlexibleSigmoidoscopyStudy: fhir.Coding;
        readonly HolterMonitorStudy: fhir.Coding;
        readonly DeprecatedMRIUnspecifiedSiteStudy: fhir.Coding;
        readonly MRSpineStudy: fhir.Coding;
        readonly DeprecatedNuclearMedicineStudy: fhir.Coding;
        readonly DeprecatedPETScanUnspecifiedSystemStudy: fhir.Coding;
        readonly SpirometryStudy: fhir.Coding; /**
         * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
         */
        readonly DeprecatedUSUnspecifiedSystemStudy: fhir.Coding;
        readonly TransferSummaryNote: fhir.Coding;
        readonly DeprecatedChiropractorProgressNote: fhir.Coding;
        readonly PhysicianConsultingInitialEvaluationNote: fhir.Coding;
        readonly DeprecatedNursePractitionerProgressNote: fhir.Coding;
        readonly DeprecatedPodiatryVisitNote: fhir.Coding;
        readonly DeprecatedPsychologyVisitNote: fhir.Coding;
        readonly PlanOfCareNote: fhir.Coding;
        readonly AlcoholAndOrSubstanceAbuseServiceAttachment: fhir.Coding;
        readonly CardiacServiceAttachment: fhir.Coding;
        readonly MedicalSocialServicesAttachment: fhir.Coding;
        readonly OccupationalTherapyServiceAttachment: fhir.Coding;
        readonly CardiacStressStudyProcedure: fhir.Coding;
        readonly HospitalConsultationsDocument: fhir.Coding;
        readonly DischargeSummary: fhir.Coding;
        readonly PhysicalTherapyServiceAttachment: fhir.Coding;
        readonly RespiratoryTherapyServiceAttachment: fhir.Coding;
        readonly SkilledNursingServiceAttachment: fhir.Coding;
        readonly USRetroperitoneum: fhir.Coding;
        readonly USAbdomenRUQ: fhir.Coding;
        readonly MRAAbdominalVesselsWContrastIV: fhir.Coding;
        readonly USDopplerAbdominalVessels: fhir.Coding;
        readonly XRAcetabulumViews: fhir.Coding;
        readonly XRAcromioclavicularJointViews: fhir.Coding;
        readonly USGuidanceForAspirationOfAmnioticFluidOfUterus: fhir.Coding;
        readonly MRAnkle: fhir.Coding;
        readonly MRAnkleWOAndWContrastIV: fhir.Coding;
        readonly XRAnkle2Views: fhir.Coding;
        readonly XRAnkleViews: fhir.Coding;
        readonly USAnus: fhir.Coding;
        readonly RFAGuidanceForAngioplastyOfThoracicAndAbdominalAortaWContrastIA: fhir.Coding;
        readonly CTThoracicAorta: fhir.Coding;
        readonly CTThoracicAortaWContrastIV: fhir.Coding;
        readonly DeprecatedRFAAorticArchWContrastIA: fhir.Coding;
        readonly USThoracicAndAbdominalAorta: fhir.Coding;
        readonly USAppendix: fhir.Coding;
        readonly MRAUpperExtremityVesselsWContrastIV: fhir.Coding;
        readonly RFAUpperExtremityVeinsViewsWContrastIV: fhir.Coding;
        readonly RFAAVFistulaViewsWContrastIA: fhir.Coding;
        readonly RFStentViewsWContrastIntraStent: fhir.Coding;
        readonly RFAGuidanceForEmbolectomyOfVesselIntracranialWContrastIV: fhir.Coding;
        readonly RFAGuidanceForEmbolizationOfArteryWContrastIA: fhir.Coding;
        readonly RFAGuidanceForPlacementOfStentInArtery: fhir.Coding;
        readonly MRAbdomen: fhir.Coding;
        readonly MRAbdomenWOAndWContrastIV: fhir.Coding;
        readonly USAbdomen: fhir.Coding;
        readonly USGuidanceForDrainageOfAbdomen: fhir.Coding;
        readonly PortableXRAbdomenAPLeftLateralDecubitus: fhir.Coding;
        readonly XRAbdomenAPLeftLateralDecubitus: fhir.Coding;
        readonly XRAbdomenLeftLateralDecubitusAndRightLateralDecubitus: fhir.Coding; /**
         * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
         */
        readonly XRAbdomenAPRightLateralDecubitus: fhir.Coding;
        readonly PortableXRAbdomenAPUpright: fhir.Coding;
        readonly CTRetroperitoneum: fhir.Coding;
        readonly DeprecatedAbdomenGreaterThanRetroperitoneumCTWContrast: fhir.Coding;
        readonly RFAGuidanceForAtherectomyOfAVFistulaWContrastIV: fhir.Coding;
        readonly RFAAVShuntViewsWContrastIV: fhir.Coding;
        readonly RFGuidanceForRemovalOfCalculusFromBiliaryDuctCommonWContrastRetrogradeIntraBiliary: fhir.Coding;
        readonly NMBiliaryDuctsAndGallbladderViewsForPatencyOfBiliaryStructuresAndEjectionFractionWSincalideAndWRadionuclideIV: fhir.Coding;
        readonly NMBiliaryDuctsAndGallbladderViewsForPatencyOfBiliaryStructuresWTc99mIV: fhir.Coding;
        readonly XRBiliaryDuctsAndGallbladderViewsWContrastIV: fhir.Coding;
        readonly RFBiliaryDuctsAndGallbladderViewsDuringSurgeryWContrastBiliaryDuct: fhir.Coding;
        readonly RFBiliaryDuctsAndGallbladderViewsWContrastPercutaneousTranshepatic: fhir.Coding;
        readonly RFAUrinaryBladderArteriesViewsWContrastIA: fhir.Coding;
        readonly XRBoneViewsDuringSurgery: fhir.Coding;
        readonly SPECTBones: fhir.Coding;
        readonly XRLongBonesSurveyViews: fhir.Coding;
        readonly RFAGuidanceForAngioplastyOfBrachiocephalicArteryWContrastIA: fhir.Coding;
        readonly RFASubclavianArteryAndBrachialArteryViewsWContrastIA: fhir.Coding;
        readonly MRBrachialPlexus: fhir.Coding;
        readonly MRBrachialPlexusWOAndWContrastIV: fhir.Coding;
        readonly MRAThoracicInletVesselsWContrastIV: fhir.Coding;
        readonly CTGuidanceForStereotacticBiopsyOfHeadWContrastIV: fhir.Coding;
        readonly MRBrainWAnesthesia: fhir.Coding;
        readonly MRBrainWOAndWContrastIV: fhir.Coding;
        readonly MRBrainWOAndWContrastIVAndWAnesthesia: fhir.Coding;
        readonly MRBrainWContrastIV: fhir.Coding;
        readonly MRBrain: fhir.Coding;
        readonly NMBrainBrainDeathProtocolViewsWTc99mHMPAOIV: fhir.Coding;
        readonly MRAHeadVesselsWContrastIV: fhir.Coding;
        readonly MGGuidanceForAspirationOfCystOfBreast: fhir.Coding;
        readonly MGGuidanceForNeedleLocalizationOfMassOfBreast: fhir.Coding;
        readonly USBreastSpecimen: fhir.Coding;
        readonly MGBreastSpecimenViews: fhir.Coding;
        readonly MGGuidanceForFluidAspirationOfBreast: fhir.Coding;
        readonly USBreastLimited: fhir.Coding;
        readonly USGuidanceForNeedleLocalizationOfBreast: fhir.Coding;
        readonly USBreast: fhir.Coding;
        readonly MGGuidanceForBiopsyOfBreast: fhir.Coding;
        readonly MGStereoGuidanceForBiopsyOfBreast: fhir.Coding;
        readonly MGBreastDiagnosticLimitedViews: fhir.Coding;
        readonly MGBreastDiagnostic: fhir.Coding;
        readonly MGBreastScreening: fhir.Coding;
        readonly MGGuidanceForPercutaneousBiopsyCoreNeedleOfBreast: fhir.Coding;
        readonly MGBreastLimitedViews: fhir.Coding;
        readonly OutpatientConsultation2ndOpinion: fhir.Coding;
        readonly XRCalcaneusViews: fhir.Coding;
        readonly DeprecatedRFAGuidanceForPlacementOfCatheterInArteryInCentralCardiovascularArtery: fhir.Coding;
        readonly RFAGuidanceForAngioplastyOfCarotidArteryExtracranialWContrastIA: fhir.Coding;
        readonly RFAGuidanceForAngioplastyOfCarotidArteryIntracranialWContrastIA: fhir.Coding;
        readonly USCarotidArteries: fhir.Coding;
        readonly RFACarotidArteriesViewsWContrastIA: fhir.Coding;
        readonly XRWristViews: fhir.Coding;
        readonly RFCatheterViewsForPatencyCheckWContrastViaCatheter: fhir.Coding;
        readonly RFGuidanceForPercutaneousDrainageOfUnspecifiedBodyRegion: fhir.Coding;
        readonly RFACeliacArteryViewsWContrastIA: fhir.Coding;
        readonly CTGuidanceForNerveBlockOfCeliacPlexus: fhir.Coding;
        readonly RFAGuidanceForChangeOfCVCatheterInVeinWContrastIV: fhir.Coding;
        readonly RFAGuidanceForPlacementOfCVCatheterInVeinWContrastIV: fhir.Coding;
        readonly RFAGuidanceForRepositionOfCVCatheterInVeinWContrastIV: fhir.Coding;
        readonly CTChest: fhir.Coding;
        readonly CTChestWContrastIV: fhir.Coding;
        readonly MRChest: fhir.Coding;
        readonly USChest: fhir.Coding;
        readonly RFUnspecifiedBodyRegionViewsForCentralVenousCatheterPlacementCheck: fhir.Coding;
        readonly PortableXRChestViewsAP: fhir.Coding;
        readonly PortableXRChestViewsWInspirationAndExpiration: fhir.Coding;
        readonly XRChestPAUprightViewsWInspirationAndExpiration: fhir.Coding;
        readonly PortableXRChestAPLeftLateralDecubitus: fhir.Coding;
        readonly XRChestAPLeftLateralDecubitus: fhir.Coding;
        readonly PortableXRChestLeftLateralUpright: fhir.Coding;
        readonly XRChestLeftLateralUpright: fhir.Coding;
        readonly XRChestApicalLordotic: fhir.Coding;
        readonly PortableXRChestLeftOblique: fhir.Coding;
        readonly XRChestAPAndPAUpright: fhir.Coding;
        readonly XRChestPAAndLateralAndObliqueUpright: fhir.Coding;
        readonly PortableXRChestPAAndLateralUpright: fhir.Coding;
        readonly PortableXRChestPAAndRightLateralAndRightObliqueAndLeftObliqueUpright: fhir.Coding;
        readonly XRChestPAAndRightLateralAndRightObliqueAndLeftObliqueUpright: fhir.Coding;
        readonly XRChestPAAndLateralUpright: fhir.Coding;
        readonly XRChestPAUpright: fhir.Coding;
        readonly PortableXRChestRightLateralDecubitusAndLeftLateralDecubitus: fhir.Coding;
        readonly XRChestRightLateralDecubitusAndLeftLateralDecubitus: fhir.Coding;
        readonly XRChestRightObliqueAndLeftObliqueUpright: fhir.Coding;
        readonly PortableXRChestAPRightLateralDecubitus: fhir.Coding;
        readonly XRChestAPAndAPRightLateralDecubitus: fhir.Coding;
        readonly PortableXRChestAPAndAPRightLateralDecubitus: fhir.Coding;
        readonly RFChestImageIntensifierDuringSurgery: fhir.Coding;
        readonly RFChestSingleViewDuringSurgery: fhir.Coding;
        readonly XRTomographyChest: fhir.Coding;
        readonly RFAThoracicAndAbdominalAortaViewsWContrastIA: fhir.Coding;
        readonly MRAChestVesselsWContrastIV: fhir.Coding;
        readonly MRAThoracicAorta: fhir.Coding;
        readonly RFPleuralSpaceViewsWContrastIntraPleuralSpace: fhir.Coding;
        readonly USGuidanceForFluidAspirationOfPleuralSpace: fhir.Coding;
        readonly NMCerebralCisternsViewsWRadionuclideIT: fhir.Coding;
        readonly XRClavicleViews: fhir.Coding;
        readonly XRSacrumAndCoccyxViews: fhir.Coding;
        readonly RFColonViewsWAirAndBariumContrastPR: fhir.Coding;
        readonly RFColonViewsWContrastPR: fhir.Coding;
        readonly RFColonSingleViewForTransitPostSolidContrast: fhir.Coding;
        readonly RFColonViewsWWaterSolubleContrastPR: fhir.Coding;
        readonly USGuidanceForBiopsyOfCystOfUnspecifiedBodyRegion: fhir.Coding;
        readonly RFGuidanceForAspirationOfCystOfUnspecifiedBodyRegion: fhir.Coding;
        readonly USDiaphragmForMotion: fhir.Coding;
        readonly DeprecatedDuodenumRadioFluoroscopyWContrastPOAndHypotonicAgentPerNg: fhir.Coding;
        readonly MRElbow: fhir.Coding;
        readonly MRElbowWOAndWContrastIV: fhir.Coding;
        readonly XRElbowViews: fhir.Coding;
        readonly USPelvisTransvaginal: fhir.Coding;
        readonly RFEsophagusViewsWContrastPO: fhir.Coding;
        readonly RFEsophagusViewsWGastrografinPO: fhir.Coding;
        readonly RFGuidanceForDilationOfEsophagus: fhir.Coding;
        readonly RFVideographyHypopharynxAndEsophagusViews: fhir.Coding;
        readonly RFVideographyHypopharynxAndEsophagusViewsWLiquidAndPasteContrastPODuringSwallowing: fhir.Coding;
        readonly NMEsophagusPlusStomachViewsWTc99mSCPO: fhir.Coding;
        readonly RFAGuidanceForEmbolectomyOfExtracranialVesselsWContrastIA: fhir.Coding;
        readonly RFAPeripheralVeinsViewsWContrastIV: fhir.Coding;
        readonly XRLowerExtremityViews: fhir.Coding;
        readonly MRLowerExtremityJoint: fhir.Coding;
        readonly MRUpperExtremity: fhir.Coding;
        readonly XRUpperExtremityViews: fhir.Coding;
        readonly CTExtremity: fhir.Coding;
        readonly CTExtremityWContrastIV: fhir.Coding;
        readonly USGuidanceForDrainageOfExtremity: fhir.Coding;
        readonly USExtremity: fhir.Coding;
        readonly MRFaceWOAndWContrastIV: fhir.Coding;
        readonly XRFacialBonesViews: fhir.Coding;
        readonly CTFacialBones: fhir.Coding;
        readonly CTFacialBonesWContrastIV: fhir.Coding;
        readonly RFAGuidanceForAngioplastyOfFemoralArteryWContrastIA: fhir.Coding;
        readonly RFAFemoralArteryRunoffWContrastIA: fhir.Coding;
        readonly XRFemurAndTibiaViewsForLegLength: fhir.Coding;
        readonly MRThigh: fhir.Coding;
        readonly MRThighWOAndWContrastIV: fhir.Coding;
        readonly XRFemurViews: fhir.Coding;
        readonly MRFinger: fhir.Coding;
        readonly XRFingerViews: fhir.Coding;
        readonly MRFoot: fhir.Coding;
        readonly XRFootViewsWStanding: fhir.Coding;
        readonly XRFootViews: fhir.Coding;
        readonly MRForearm: fhir.Coding;
        readonly USGallbladder: fhir.Coding;
        readonly XRGallbladderViewsWContrastPO: fhir.Coding;
        readonly XRGallbladderViews48HPostContrastPO: fhir.Coding;
        readonly NMGastrointestinalTractViewsForGastrointestinalBleedingWTc99mTaggedRBCIV: fhir.Coding;
        readonly RFGastrointestinalTractUpperSingleViewWContrastPO: fhir.Coding;
        readonly RFGuidanceForPlacementOfDecompressionTubeInGastrointestinalTract: fhir.Coding;
        readonly DeprecatedXRIlealConduitLoopogram: fhir.Coding;
        readonly RFGuidanceForTransjugularBiopsyOfLiverWContrastIV: fhir.Coding;
        readonly USGroin: fhir.Coding;
        readonly MRHand: fhir.Coding;
        readonly XRHand2Views: fhir.Coding;
        readonly XRHand3Views: fhir.Coding;
        readonly XRHandArthritis: fhir.Coding;
        readonly XRWristAndHandBoneAgeViews: fhir.Coding;
        readonly CTHead: fhir.Coding;
        readonly CTHeadWOAndWContrastIV: fhir.Coding;
        readonly CTHeadWContrastIV: fhir.Coding;
        readonly CTPerfusionHead: fhir.Coding;
        readonly CTPerfusionHeadWOAndWContrastIV: fhir.Coding;
        readonly NMBrainViews: fhir.Coding;
        readonly USHead: fhir.Coding;
        readonly USHeadDuringSurgery: fhir.Coding;
        readonly USDopplerHeadVessels: fhir.Coding;
        readonly CTCerebralCisternsWContrastIT: fhir.Coding;
        readonly MRInternalAuditoryCanalAndPosteriorFossa: fhir.Coding;
        readonly MRInternalAuditoryCanalAndPosteriorFossaWOAndWContrastIV: fhir.Coding;
        readonly XRPetrousPartOfTemporalBoneViews: fhir.Coding;
        readonly DeprecatedHeadSagittalSinusMR: fhir.Coding;
        readonly DeprecatedHeadSagittalSinusMRAngiogramWContrastIV: fhir.Coding;
        readonly MRHeart: fhir.Coding;
        readonly NMHeartViewsAtRestAndWTl201IV: fhir.Coding;
        readonly NMParathyroidGlandViewsWTI201SubtractionTc99mIV: fhir.Coding;
        readonly RFVideographyHeartViews: fhir.Coding;
        readonly CTUnspecifiedBodyRegionWContrastIV: fhir.Coding;
        readonly AdministrationOfVasodilatorIntoCatheterVein: fhir.Coding;
        readonly RFAGuidanceForAtherectomyOfVeinWContrastIV: fhir.Coding;
        readonly RFAGuidanceForPlacementOfStentInVein: fhir.Coding;
        readonly DeprecatedCoronaryArteriesCTFast: fhir.Coding;
        readonly USHip: fhir.Coding;
        readonly XRHipSingleView: fhir.Coding;
        readonly XRHipViews: fhir.Coding;
        readonly RFHipArthrogram: fhir.Coding;
        readonly XRHumerus2Views: fhir.Coding;
        readonly RFAGuidanceForAngioplastyOfIliacArteryWContrastIA: fhir.Coding;
        readonly XRTomographyInternalAuditoryCanal: fhir.Coding;
        readonly CTGuidanceForInjectionOfJointSpace: fhir.Coding;
        readonly NMJointViewsWIn111Intrajoint: fhir.Coding;
        readonly RFGuidanceForFluidAspirationOfJointSpace: fhir.Coding;
        readonly USGuidanceForBiopsyOfKidney: fhir.Coding;
        readonly NMKidneyViewsWRadionuclideTransplantScan: fhir.Coding;
        readonly NMKidneyViews: fhir.Coding;
        readonly XRKidneyBilateral3SerialViewsWOAndWContrastIV: fhir.Coding;
        readonly RFGuidanceForPercutaneousPlacementOfNephrostomyTubeOfKidneyBilateralWContrastViaTube: fhir.Coding;
        readonly RFKidneyBilateralViewsWContrastViaNephrostomyTube: fhir.Coding;
        readonly RFGuidanceForExchangeOfNephrostomyTubeOfKidneyBilateralWContrast: fhir.Coding;
        readonly RFGuidanceForPercutaneousPlacementOfNephroureteralStentOfKidneyBilateralWContrastViaStent: fhir.Coding;
        readonly RFKidneyBilateralViewsForUrodynamics: fhir.Coding;
        readonly XRTomographyKidneyBilateralWOAndWContrastIV: fhir.Coding;
        readonly XRTomographyKidneyBilateralWOContrastAnd10MPostContrastIV: fhir.Coding;
        readonly XRKidneyBilateralViewsWContrastIV: fhir.Coding;
        readonly XRTomographyKidneyBilateral: fhir.Coding;
        readonly XRTomographyKidneyBilateralWContrastIV: fhir.Coding;
        readonly PortableXRAbdomenAPAndAPLeftLateralDecubitus: fhir.Coding;
        readonly PortableXRAbdomenAPAndLateral: fhir.Coding;
        readonly XRAbdomenAPAndLateral: fhir.Coding;
        readonly PortableXRAbdomenSupineAndUpright: fhir.Coding;
        readonly XRAbdomenAPAndAPLeftLateralDecubitus: fhir.Coding;
        readonly XRAbdomenAPAndObliqueProne: fhir.Coding;
        readonly XRAbdomenSupineAndUpright: fhir.Coding;
        readonly XRAbdomenAP: fhir.Coding;
        readonly RFKneeArthrogram: fhir.Coding;
        readonly XRKneeMerchants: fhir.Coding;
        readonly MRKnee: fhir.Coding;
        readonly MRKneeWOAndWContrastIV: fhir.Coding;
        readonly NMKneeViews: fhir.Coding;
        readonly XRKneeAPAndLateralWStanding: fhir.Coding;
        readonly XRKnee2Views: fhir.Coding;
        readonly XRKneeAPWStanding: fhir.Coding;
        readonly XRKneeAPAndPAWStanding: fhir.Coding;
        readonly XRKneeViewsWStanding: fhir.Coding;
        readonly CTGuidanceForFluidAspirationOfLiver: fhir.Coding;
        readonly CTGuidanceForBiopsyOfLiver: fhir.Coding;
        readonly CTGuidanceForCoreNeedleBiopsyOfLiver: fhir.Coding;
        readonly CTLiver: fhir.Coding;
        readonly CTLiverWContrastIV: fhir.Coding;
        readonly USGuidanceForBiopsyOfLiver: fhir.Coding;
        readonly SPECTLiverWTc99mIV: fhir.Coding;
        readonly USDiaphragmAndLiver: fhir.Coding;
        readonly DeprecatedLiverAndSpleenNMWTc99mCalciumColloidIV: fhir.Coding;
        readonly MRALowerLegVesselsWContrastIV: fhir.Coding;
        readonly MRLowerLeg: fhir.Coding;
        readonly CTGuidanceForFluidAspirationOfLung: fhir.Coding;
        readonly CTGuidanceForBiopsyOfLung: fhir.Coding;
        readonly NMLungPortableViews: fhir.Coding;
        readonly XRLungViewsWContrastIntrabronchial: fhir.Coding;
        readonly NMLymphaticVesselsViewsWRadionuclideIntraLymphatic: fhir.Coding;
        readonly RFALymphaticVesselsViewsWContrastIntraLymphatic: fhir.Coding;
        readonly XRTomographyMandiblePanoramic: fhir.Coding;
        readonly XRMandibleViews: fhir.Coding;
        readonly XRMastoidViews: fhir.Coding;
        readonly NMSmallBowelViewsForMeckelQuoteSDiverticulumWTc99mM04IV: fhir.Coding;
        readonly RFAGuidanceForAngioplastyOfMesentericArteryWContrastIA: fhir.Coding;
        readonly RFAMesentericArteryViewsWContrastIA: fhir.Coding;
        readonly XRNasalBonesViews: fhir.Coding;
        readonly CTNasopharynxAndNeck: fhir.Coding;
        readonly CTNasopharynxAndNeckWContrastIV: fhir.Coding;
        readonly CTGuidanceForFluidAspirationOfNeck: fhir.Coding;
        readonly CTGuidanceForBiopsyOfNeck: fhir.Coding;
        readonly MRNeck: fhir.Coding;
        readonly MRNeckWOAndWContrastIV: fhir.Coding;
        readonly MRNeckWContrastIV: fhir.Coding;
        readonly USNeck: fhir.Coding;
        readonly XRNeckLateral: fhir.Coding;
        readonly MRANeckVesselsWContrastIV: fhir.Coding;
        readonly RFNeckViewsWContrastIntraLarynx: fhir.Coding;
        readonly XROpticForamenViews: fhir.Coding;
        readonly CTOrbitBilateral: fhir.Coding;
        readonly CTOrbitBilateralWOAndWContrastIV: fhir.Coding;
        readonly CTOrbitBilateralWContrastIV: fhir.Coding;
        readonly MROrbitBilateralWOAndWContrastIV: fhir.Coding;
        readonly MROrbitBilateralWContrastIV: fhir.Coding;
        readonly USEyePlusOrbitBilateral: fhir.Coding;
        readonly XROrbitBilateralViews: fhir.Coding;
        readonly RFVideographyOropharynxViews: fhir.Coding;
        readonly CTGuidanceForFluidAspirationOfPancreas: fhir.Coding;
        readonly CTPancreas: fhir.Coding;
        readonly CTPancreasWContrastIV: fhir.Coding;
        readonly USPancreas: fhir.Coding;
        readonly RFAPancreaticArteryViewsWContrastIA: fhir.Coding;
        readonly XRPatella2Views: fhir.Coding;
        readonly RFAIliacArteryInternalViewsWContrastIA: fhir.Coding;
        readonly CTGuidanceForFluidAspirationOfPelvis: fhir.Coding;
        readonly CTGuidanceForBiopsyOfPelvis: fhir.Coding;
        readonly CTPelvis: fhir.Coding;
        readonly CTPelvisWContrastIV: fhir.Coding;
        readonly MRPelvis: fhir.Coding;
        readonly USGuidanceForDrainageOfPelvis: fhir.Coding;
        readonly USPelvis: fhir.Coding;
        readonly USDopplerPelvisVessels: fhir.Coding;
        readonly XRPelvisPelvimetry: fhir.Coding;
        readonly MRPelvisAndHip: fhir.Coding;
        readonly MRAPelvisVesselsWContrastIV: fhir.Coding;
        readonly RFAPeripheralArteriesViewsWContrastIA: fhir.Coding;
        readonly DeprecatedPeripheralVesselUSDopplerPeripheralPlane: fhir.Coding;
        readonly NMHeadToPelvisViewsForShuntPatencyWTc99mDTPAIT: fhir.Coding;
        readonly CTPetrousPartOfTemporalBone: fhir.Coding;
        readonly CTPetrousPartOfTemporalBoneWContrastIV: fhir.Coding;
        readonly MRPituitaryAndSellaTurcicaWOAndWContrastIV: fhir.Coding;
        readonly MRPituitaryAndSellaTurcica: fhir.Coding;
        readonly USPoplitealSpace: fhir.Coding;
        readonly RFAGuidanceForPercutaneousTransluminalAngioplastyOfPoplitealArteryWContrastIA: fhir.Coding;
        readonly USGuidanceForPercutaneousBiopsyOfProstate: fhir.Coding;
        readonly USProstateTransrectal: fhir.Coding;
        readonly DeprecatedUSGuidanceForRepairOfPseudoaneurysmAVFistula: fhir.Coding;
        readonly RFAGuidanceForEmbolectomyOfPulmonaryArteriesWContrastIA: fhir.Coding;
        readonly NMPulmonarySystemVentilationAndPerfusionWXe133IHAndWTc99mMAAIV: fhir.Coding;
        readonly USPylorusForPyloricStenosis: fhir.Coding;
        readonly XRRadiusAndUlnaViews: fhir.Coding;
        readonly USRectum: fhir.Coding;
        readonly RFRectumSingleViewPostContrastPRDuringDefecation: fhir.Coding;
        readonly RFRectumAndUrinaryBladderViewsWContrastPRAndIntraBladderDuringDefecationAndVoiding: fhir.Coding;
        readonly USGuidanceForDrainageOfKidney: fhir.Coding;
        readonly XRRibsViews: fhir.Coding;
        readonly XRSacroiliacJointViews: fhir.Coding;
        readonly CTGuidanceForInjectionOfSacroiliacJoint: fhir.Coding;
        readonly RFSalivaryGlandViewsWContrastIntraSalivaryDuct: fhir.Coding;
        readonly XRScapulaViews: fhir.Coding;
        readonly CTPituitaryAndSellaTurcicaWOAndWContrastIV: fhir.Coding;
        readonly MRShoulder: fhir.Coding;
        readonly MRShoulderWOAndWContrastIV: fhir.Coding;
        readonly USShoulder: fhir.Coding;
        readonly XRShoulder3Views: fhir.Coding;
        readonly XRShoulderViews: fhir.Coding;
        readonly RFShoulderArthrogram: fhir.Coding;
        readonly RFShuntViews: fhir.Coding;
        readonly RFSinusTractViewsWContrastIntraSinusTract: fhir.Coding;
        readonly CTSinusesLimited: fhir.Coding;
        readonly MRSinuses: fhir.Coding;
        readonly MRSinusesWContrastIV: fhir.Coding;
        readonly XRSinusesViews: fhir.Coding;
        readonly XRSkullSingleView: fhir.Coding;
        readonly XRSkull3Views: fhir.Coding;
        readonly XRSkullAPAndLateral: fhir.Coding;
        readonly XRSkullLateral: fhir.Coding;
        readonly XRSkullWaters: fhir.Coding;
        readonly XRSkull5Views: fhir.Coding;
        readonly RFSmallBowelViewsWPositiveContrastViaEnteroclysisTube: fhir.Coding;
        readonly RFSmallBowelViewsWContrastPO: fhir.Coding;
        readonly RFASpinalArteryViewsWContrastIA: fhir.Coding;
        readonly USSpine: fhir.Coding;
        readonly RFSpineViewsWContrastIntradisc: fhir.Coding;
        readonly XRSpineAPAndLateral: fhir.Coding;
        readonly XRThoracicAndLumbarSpineViewsForScoliosisWFlexionAndWExtension: fhir.Coding;
        readonly XRThoracicAndLumbarSpineViewsForScoliosis: fhir.Coding;
        readonly RFGuidanceForInjectionOfSpineFacetJoint: fhir.Coding;
        readonly CTCervicalSpine: fhir.Coding;
        readonly CTCervicalSpineWContrastIV: fhir.Coding;
        readonly CTCervicalSpineWContrastIT: fhir.Coding;
        readonly MRCervicalSpine: fhir.Coding;
        readonly MRCervicalSpineWAnesthesia: fhir.Coding;
        readonly MRCervicalSpineWOAndWContrastIV: fhir.Coding;
        readonly MRCervicalSpineWContrastIV: fhir.Coding;
        readonly XRCervicalSpine5Views: fhir.Coding;
        readonly XRCervicalSpineSingleView: fhir.Coding;
        readonly XRCervicalSpine3Views: fhir.Coding;
        readonly XRCervicalSpineAPAndLateral: fhir.Coding;
        readonly XRCervicalSpineLateral: fhir.Coding;
        readonly XRCervicalSpineSwimmers: fhir.Coding;
        readonly XRCervicalSpineViewsWFlexionAndWExtension: fhir.Coding;
        readonly XRCervicalSpineViews: fhir.Coding;
        readonly RFCervicalSpineViewsWContrastIT: fhir.Coding;
        readonly XRSpineCervicalOdontoidAndCervicalAxisAP: fhir.Coding;
        readonly CTLumbarSpine: fhir.Coding;
        readonly CTLumbarSpineWContrastIV: fhir.Coding;
        readonly CTLumbarSpineWContrastIT: fhir.Coding;
        readonly MRLumbarSpineWOAndWContrastIV: fhir.Coding;
        readonly MRLumbarSpine: fhir.Coding;
        readonly XRLumbarSpineLateral: fhir.Coding;
        readonly XRLumbarSpineAPAndLateral: fhir.Coding;
        readonly XRLumbarSpineViewsWFlexionAndWExtension: fhir.Coding;
        readonly XRLumbarSpineViews: fhir.Coding;
        readonly RFGuidanceForFluidAspirationOfSpineLumbarSpace: fhir.Coding;
        readonly RFLumbarSpineViewsWContrastIT: fhir.Coding;
        readonly XRSpineLumbarAndSacroiliacJointBilateralViews: fhir.Coding;
        readonly MRLumbarSpineWAnesthesia: fhir.Coding;
        readonly CTThoracicSpine: fhir.Coding;
        readonly CTThoracicSpineWContrastIV: fhir.Coding;
        readonly MRThoracicSpine: fhir.Coding;
        readonly MRThoracicSpineWOAndWContrastIV: fhir.Coding;
        readonly MRThoracicSpineWContrastIV: fhir.Coding;
        readonly XRThoracicSpineViews: fhir.Coding;
        readonly XRThoracicAndLumbarSpine2Views: fhir.Coding;
        readonly RFThoracicSpineViewsWContrastIT: fhir.Coding;
        readonly CTGuidanceForBiopsyOfSpine: fhir.Coding;
        readonly CTSpineWContrastIV: fhir.Coding;
        readonly CTSpleen: fhir.Coding;
        readonly CTSpleenWOAndWContrastIV: fhir.Coding;
        readonly USSpleen: fhir.Coding;
        readonly RFASplenicVeinAndPortalVeinViewsWContrastIA: fhir.Coding;
        readonly RFASplenicArteryViewsWContrastIA: fhir.Coding;
        readonly DeprecatedXRay: fhir.Coding;
        readonly XRSternumViews: fhir.Coding;
        readonly RFGuidanceForPlacementOfTubeInStomach: fhir.Coding;
        readonly RFGuidanceForPercutaneousReplacementOfGastrostomyOfStomach: fhir.Coding;
        readonly NMStomachViewsForGastricEmptyingSolidPhaseWTc99mSCPO: fhir.Coding;
        readonly RFPlacementCheckOfGastrostomyTubeWContrastViaGITube: fhir.Coding;
        readonly MRTemporomandibularJoint: fhir.Coding;
        readonly XRTemporomandibularJointViews: fhir.Coding;
        readonly NMScrotumAndTesticleViewsWTc99mPertechnetateIV: fhir.Coding;
        readonly USScrotumAndTesticle: fhir.Coding;
        readonly MRAThighVesselsWContrastIV: fhir.Coding;
        readonly RFAThreeVesselsViewsWContrast: fhir.Coding;
        readonly XRThumbViews: fhir.Coding;
        readonly NMThyroidGlandViewsWI131IV: fhir.Coding;
        readonly NMThyroidGlandViewsAndViewsUptakeWI131IV: fhir.Coding;
        readonly USGuidanceForBiopsyOfThyroidGland: fhir.Coding;
        readonly USThyroidGland: fhir.Coding;
        readonly XRTibiaAndFibulaViews: fhir.Coding;
        readonly DeprecatedRFAGuidanceForAngioplastyOfTibialArteryWContrastIA: fhir.Coding;
        readonly XRToesViews: fhir.Coding;
        readonly RFATwoVesselsViewsWContrast: fhir.Coding;
        readonly ReplacementOfPercutaneousGastrojejunostomyUpperGITractDocument: fhir.Coding;
        readonly RFUrethraViewsWContrastIntraUrethra: fhir.Coding;
        readonly RFUrinaryBladderAndUrethraViewsWContrastIntraBladder: fhir.Coding;
        readonly NMUrinaryBladderViews: fhir.Coding;
        readonly USUrinaryBladder: fhir.Coding;
        readonly RFUrinaryBladderAndUrethraViewsWContrastRetrogradeViaUrethra: fhir.Coding;
        readonly RFUterusAndFallopianTubesViewsWContrastIU: fhir.Coding;
        readonly RFAVeinViewsWContrastIV: fhir.Coding;
        readonly RFAGuidanceForPlacementOfPeripherallyInsertedCentralVenousCatheterInVein: fhir.Coding;
        readonly RFAVenaCavaViewsWContrastIV: fhir.Coding;
        readonly RFAGuidanceForPlacementOfVenousFilterInInferiorVenaCavaWContrastIV: fhir.Coding;
        readonly GuidanceForPlacementOfLargeBoreCVCatheterInVein: fhir.Coding;
        readonly RFAGuidanceForPlacementOfCatheterForInfusionOfThrombolyticInVesselWContrastIntravascular: fhir.Coding;
        readonly RFAGuidanceForPlacementOfCatheterForVasoconstrictorInfusionInVessels: fhir.Coding;
        readonly RFAAbdominalArteriesViewsWContrastIA: fhir.Coding;
        readonly NMBoneViews: fhir.Coding;
        readonly NMBoneViewsWIn111TaggedWBCIV: fhir.Coding;
        readonly MRWrist: fhir.Coding;
        readonly RFWristArthrogram: fhir.Coding;
        readonly MRWristWOAndWContrastIV: fhir.Coding;
        readonly USWrist: fhir.Coding;
        readonly CourtesyConsultationUnspecifiedBodyRegionDocument: fhir.Coding;
        readonly CTUnspecifiedBodyRegionLimited: fhir.Coding;
        readonly DeprecatedUnspecifiedBodyRegionCT3D: fhir.Coding;
        readonly CTGuidanceForAspirationOrBiopsyOfUnspecifiedBodyRegionWContrastIV: fhir.Coding;
        readonly CTGuidanceForAspirationOrBiopsyOfUnspecifiedBodyRegion: fhir.Coding;
        readonly CTGuidanceForFluidAspirationOfUnspecifiedBodyRegion: fhir.Coding;
        readonly CTGuidanceForBiopsyOfUnspecifiedBodyRegion: fhir.Coding;
        readonly CTUnspecifiedBodyRegion: fhir.Coding;
        readonly CTUnspecifiedBodyRegionWAnesthesia: fhir.Coding;
        readonly CTUnspecifiedBodyRegionWConsciousSedation: fhir.Coding;
        readonly DeprecatedUnspecifiedBodyRegionCT3DSagittalAndCoronalDisarticulation: fhir.Coding;
        readonly DeprecatedUnspecifiedBodyRegionCTMultisectionalSagittal: fhir.Coding;
        readonly DeprecatedUnspecifiedBodyRegionCTSagittalAndCoronal: fhir.Coding;
        readonly CTGuidanceForRadiosurgeryOfUnspecifiedBodyRegion: fhir.Coding;
        readonly CTGuidanceForRadiosurgeryOfUnspecifiedBodyRegionWContrastIV: fhir.Coding;
        readonly DeprecatedUnspecifiedBodyRegionMRAdditionalSequence: fhir.Coding;
        readonly MRUnspecifiedBodyRegion: fhir.Coding;
        readonly MRUnspecifiedBodyRegionWConsciousSedation: fhir.Coding;
        readonly MRAUnspecifiedBodyRegionWContrastIV: fhir.Coding;
        readonly USGuidanceForBiopsyOfUnspecifiedBodyRegion: fhir.Coding;
        readonly USUnspecifiedBodyRegionNoCharge: fhir.Coding;
        readonly USUnspecifiedBodyRegion: fhir.Coding;
        readonly XRUnspecifiedBodyRegionComparisonView: fhir.Coding;
        readonly RFAVesselSingleViewWContrastIA: fhir.Coding;
        readonly RFAVesselViewsForAngioplastyWContrastIA: fhir.Coding;
        readonly RF15Minutes: fhir.Coding;
        readonly RF30Minutes: fhir.Coding;
        readonly RF45Minutes: fhir.Coding;
        readonly RF1Hour: fhir.Coding;
        readonly RFGuidanceForBiopsyOfUnspecifiedBodyRegion: fhir.Coding;
        readonly RFUnspecifiedBodyRegionViewsDuringSurgery: fhir.Coding;
        readonly XRTomographyUnspecifiedBodyRegion: fhir.Coding;
        readonly GuidanceForPlacementOfInfusionPort: fhir.Coding;
        readonly RFAGuidanceForRemovalOfForeignBodyFromVessel: fhir.Coding;
        readonly XRZygomaticArchViews: fhir.Coding;
        readonly RFAHepaticArteryViewsWContrastIA: fhir.Coding;
        readonly RFAGuidanceForPlacementOfCatheterInHepaticArteryWContrastIA: fhir.Coding;
        readonly RFGuidanceForPlacementOfStentInIntrahepaticPortalSystem: fhir.Coding;
        readonly RFARenalArteriesViewsWContrastIA: fhir.Coding;
        readonly RFARenalVeinBilateralViewsForReninSamplingWContrastIV: fhir.Coding;
        readonly RFAGuidanceForAngioplastyOfRenalVesselWContrastIA: fhir.Coding;
        readonly RFAVeinBilateralViewsWContrastIV: fhir.Coding;
        readonly RFAVeinLeftViewsWContrastIV: fhir.Coding;
        readonly RFAVeinRightViewsWContrastIV: fhir.Coding;
        readonly RFSalivaryGlandBilateralViewsWContrastIntraSalivaryDuct: fhir.Coding;
        readonly RFSalivaryGlandLeftViewsWContrastIntraSalivaryDuct: fhir.Coding;
        readonly RFSalivaryGlandRightViewsWContrastIntraSalivaryDuct: fhir.Coding;
        readonly RFHipBilateralArthrogram: fhir.Coding;
        readonly RFHipLeftArthrogram: fhir.Coding;
        readonly RFHipRightArthrogram: fhir.Coding;
        readonly RFKneeBilateralArthrogram: fhir.Coding;
        readonly RFKneeLeftArthrogram: fhir.Coding;
        readonly RFKneeRightArthrogram: fhir.Coding;
        readonly RFShoulderBilateralArthrogram: fhir.Coding;
        readonly RFShoulderLeftArthrogram: fhir.Coding;
        readonly RFShoulderRightArthrogram: fhir.Coding;
        readonly RFACarotidArteriesBilateralViewsWContrastIA: fhir.Coding;
        readonly RFACarotidArteriesLeftViewsWContrastIA: fhir.Coding;
        readonly RFACarotidArteriesRightViewsWContrastIA: fhir.Coding;
        readonly RFASpinalArteryBilateralViewsWContrastIA: fhir.Coding;
        readonly RFASpinalArteryLeftViewsWContrastIA: fhir.Coding;
        readonly RFASpinalArteryRightViewsWContrastIA: fhir.Coding;
        readonly XRKneeBilateralViewsWStanding: fhir.Coding;
        readonly XRKneeLeftViewsWStanding: fhir.Coding;
        readonly XRKneeRightViewsWStanding: fhir.Coding;
        readonly NMKneeBilateralViews: fhir.Coding;
        readonly NMKneeLeftViews: fhir.Coding;
        readonly NMKneeRightViews: fhir.Coding;
        readonly NMScrotumAndTesticleBilateralViewsWTc99mPertechnetateIV: fhir.Coding;
        readonly NMScrotumAndTesticleLeftViewsWTc99mPertechnetateIV: fhir.Coding;
        readonly NMScrotumAndTesticleRightViewsWTc99mPertechnetateIV: fhir.Coding;
        readonly XRFootBilateralViewsWStanding: fhir.Coding;
        readonly XRFootLeftViewsWStanding: fhir.Coding;
        readonly XRFootRightViewsWStanding: fhir.Coding;
        readonly XRAnkleBilateralViews: fhir.Coding;
        readonly XRAnkleLeftViews: fhir.Coding;
        readonly XRAnkleRightViews: fhir.Coding;
        readonly XRCalcaneusBilateralViews: fhir.Coding;
        readonly XRCalcaneusLeftViews: fhir.Coding;
        readonly XRCalcaneusRightViews: fhir.Coding;
        readonly XRClavicleBilateralViews: fhir.Coding;
        readonly XRClavicleLeftViews: fhir.Coding;
        readonly XRClavicleRightViews: fhir.Coding;
        readonly XRElbowBilateralViews: fhir.Coding;
        readonly XRElbowLeftViews: fhir.Coding;
        readonly XRElbowRightViews: fhir.Coding;
        readonly XRLowerExtremityBilateralViews: fhir.Coding;
        readonly XRLowerExtremityLeftViews: fhir.Coding;
        readonly XRLowerExtremityRightViews: fhir.Coding;
        readonly XRUpperExtremityBilateralViews: fhir.Coding;
        readonly XRUpperExtremityLeftViews: fhir.Coding;
        readonly XRUpperExtremityRightViews: fhir.Coding;
        readonly XRFemurBilateralViews: fhir.Coding;
        readonly XRFemurLeftViews: fhir.Coding;
        readonly XRFemurRightViews: fhir.Coding;
        readonly XRFingerBilateralViews: fhir.Coding;
        readonly XRFingerLeftViews: fhir.Coding;
        readonly XRFingerRightViews: fhir.Coding;
        readonly XRFootBilateralViews: fhir.Coding;
        readonly XRFootLeftViews: fhir.Coding;
        readonly XRFootRightViews: fhir.Coding;
        readonly XRHipBilateralViews: fhir.Coding;
        readonly XRHipLeftViews: fhir.Coding;
        readonly XRHipRightViews: fhir.Coding;
        readonly XRAcetabulumBilateralViews: fhir.Coding;
        readonly XRAcetabulumLeftViews: fhir.Coding;
        readonly XRAcetabulumRightViews: fhir.Coding;
        readonly XRAcromioclavicularJointBilateralViews: fhir.Coding;
        readonly XRAcromioclavicularJointLeftViews: fhir.Coding;
        readonly XRAcromioclavicularJointRightViews: fhir.Coding;
        readonly XRMastoidBilateralViews: fhir.Coding;
        readonly XRMastoidLeftViews: fhir.Coding;
        readonly XRMastoidRightViews: fhir.Coding;
        readonly XROpticForamenBilateralViews: fhir.Coding;
        readonly XROpticForamenLeftViews: fhir.Coding;
        readonly XROpticForamenRightViews: fhir.Coding;
        readonly XRRadiusAndUlnaBilateralViews: fhir.Coding;
        readonly XRRadiusAndUlnaLeftViews: fhir.Coding;
        readonly XRRadiusAndUlnaRightViews: fhir.Coding;
        readonly XRRibsBilateralViews: fhir.Coding;
        readonly XRRibsLeftViews: fhir.Coding;
        readonly XRRibsRightViews: fhir.Coding;
        readonly XRScapulaBilateralViews: fhir.Coding;
        readonly XRScapulaLeftViews: fhir.Coding;
        readonly XRScapulaRightViews: fhir.Coding;
        readonly XRShoulderBilateralViews: fhir.Coding;
        readonly XRShoulderLeftViews: fhir.Coding;
        readonly XRShoulderRightViews: fhir.Coding;
        readonly XRThumbBilateralViews: fhir.Coding;
        readonly XRThumbLeftViews: fhir.Coding;
        readonly XRThumbRightViews: fhir.Coding;
        readonly XRTibiaAndFibulaBilateralViews: fhir.Coding;
        readonly XRTibiaAndFibulaLeftViews: fhir.Coding;
        readonly XRTibiaAndFibulaRightViews: fhir.Coding;
        readonly XRToesBilateralViews: fhir.Coding;
        readonly XRToesLeftViews: fhir.Coding;
        readonly XRToesRightViews: fhir.Coding;
        readonly XRWristBilateralViews: fhir.Coding;
        readonly XRWristLeftViews: fhir.Coding;
        readonly XRWristRightViews: fhir.Coding;
        readonly XRZygomaticArchBilateralViews: fhir.Coding;
        readonly XRZygomaticArchLeftViews: fhir.Coding;
        readonly XRZygomaticArchRightViews: fhir.Coding;
        readonly MGBreastBilateralScreening: fhir.Coding;
        readonly MGBreastLeftScreening: fhir.Coding;
        readonly MGBreastRightScreening: fhir.Coding;
        readonly RFAFemoralArteryBilateralRunoffWContrastIA: fhir.Coding;
        readonly RFAFemoralArteryLeftRunoffWContrastIA: fhir.Coding;
        readonly RFAFemoralArteryRightRunoffWContrastIA: fhir.Coding;
        readonly MRAThoracicInletVesselsBilateralWContrastIV: fhir.Coding;
        readonly MRAThoracicInletVesselsLeftWContrastIV: fhir.Coding;
        readonly MRAThoracicInletVesselsRightWContrastIV: fhir.Coding;
        readonly CTExtremityBilateralWContrastIV: fhir.Coding;
        readonly CTExtremityLeftWContrastIV: fhir.Coding;
        readonly CTExtremityRightWContrastIV: fhir.Coding;
        readonly MRAnkleBilateralWOAndWContrastIV: fhir.Coding;
        readonly MRAnkleLeftWOAndWContrastIV: fhir.Coding;
        readonly MRAnkleRightWOAndWContrastIV: fhir.Coding;
        readonly MRBrachialPlexusBilateralWOAndWContrastIV: fhir.Coding;
        readonly MRBrachialPlexusLeftWOAndWContrastIV: fhir.Coding;
        readonly MRBrachialPlexusRightWOAndWContrastIV: fhir.Coding;
        readonly MRElbowBilateralWOAndWContrastIV: fhir.Coding;
        readonly MRElbowLeftWOAndWContrastIV: fhir.Coding;
        readonly MRElbowRightWOAndWContrastIV: fhir.Coding;
        readonly MRThighBilateralWOAndWContrastIV: fhir.Coding;
        readonly MRThighLeftWOAndWContrastIV: fhir.Coding;
        readonly MRThighRightWOAndWContrastIV: fhir.Coding;
        readonly MRKneeBilateralWOAndWContrastIV: fhir.Coding;
        readonly MRKneeLeftWOAndWContrastIV: fhir.Coding;
        readonly MRKneeRightWOAndWContrastIV: fhir.Coding;
        readonly MRShoulderBilateralWOAndWContrastIV: fhir.Coding;
        readonly MRShoulderLeftWOAndWContrastIV: fhir.Coding;
        readonly MRShoulderRightWOAndWContrastIV: fhir.Coding;
        readonly MRWristBilateralWOAndWContrastIV: fhir.Coding;
        readonly MRWristLeftWOAndWContrastIV: fhir.Coding;
        readonly MRWristRightWOAndWContrastIV: fhir.Coding;
        readonly MRAnkleBilateral: fhir.Coding;
        readonly MRAnkleLeft: fhir.Coding;
        readonly MRAnkleRight: fhir.Coding;
        readonly MRBrachialPlexusBilateral: fhir.Coding;
        readonly MRBrachialPlexusLeft: fhir.Coding;
        readonly MRBrachialPlexusRight: fhir.Coding;
        readonly USBreastBilateral: fhir.Coding;
        readonly USBreastLeft: fhir.Coding;
        readonly USBreastRight: fhir.Coding;
        readonly USCarotidArteriesBilateral: fhir.Coding;
        readonly USCarotidArteriesLeft: fhir.Coding;
        readonly USCarotidArteriesRight: fhir.Coding;
        readonly MRElbowBilateral: fhir.Coding;
        readonly MRElbowLeft: fhir.Coding;
        readonly MRElbowRight: fhir.Coding;
        readonly USExtremityBilateral: fhir.Coding;
        readonly CTExtremityBilateral: fhir.Coding;
        readonly USExtremityLeft: fhir.Coding;
        readonly CTExtremityLeft: fhir.Coding;
        readonly MRLowerExtremityJointBilateral: fhir.Coding;
        readonly MRLowerExtremityJointLeft: fhir.Coding;
        readonly MRLowerExtremityJointRight: fhir.Coding;
        readonly USExtremityRight: fhir.Coding;
        readonly CTExtremityRight: fhir.Coding;
        readonly MRUpperExtremityBilateral: fhir.Coding;
        readonly MRUpperExtremityLeft: fhir.Coding;
        readonly MRUpperExtremityRight: fhir.Coding;
        readonly MRThighBilateral: fhir.Coding;
        readonly MRThighLeft: fhir.Coding;
        readonly MRThighRight: fhir.Coding;
        readonly MRFingerBilateral: fhir.Coding;
        readonly MRFingerLeft: fhir.Coding;
        readonly MRFingerRight: fhir.Coding;
        readonly MRFootBilateral: fhir.Coding;
        readonly MRFootLeft: fhir.Coding;
        readonly MRFootRight: fhir.Coding;
        readonly MRForearmBilateral: fhir.Coding;
        readonly MRForearmLeft: fhir.Coding;
        readonly MRForearmRight: fhir.Coding;
        readonly MRHandBilateral: fhir.Coding;
        readonly MRHandLeft: fhir.Coding;
        readonly MRHandRight: fhir.Coding;
        readonly USHipBilateral: fhir.Coding;
        readonly USHipLeft: fhir.Coding;
        readonly USHipRight: fhir.Coding;
        readonly XRTomographyInternalAuditoryCanalBilateral: fhir.Coding;
        readonly XRTomographyInternalAuditoryCanalLeft: fhir.Coding;
        readonly XRTomographyInternalAuditoryCanalRight: fhir.Coding;
        readonly MRKneeBilateral: fhir.Coding;
        readonly MRKneeLeft: fhir.Coding;
        readonly MRKneeRight: fhir.Coding;
        readonly MRPelvisAndHipBilateral: fhir.Coding;
        readonly MRPelvisAndHipLeft: fhir.Coding;
        readonly MRPelvisAndHipRight: fhir.Coding;
        readonly USPoplitealSpaceBilateral: fhir.Coding;
        readonly USPoplitealSpaceLeft: fhir.Coding;
        readonly USPoplitealSpaceRight: fhir.Coding;
        readonly USShoulderBilateral: fhir.Coding;
        readonly MRShoulderBilateral: fhir.Coding;
        readonly USShoulderLeft: fhir.Coding;
        readonly MRShoulderLeft: fhir.Coding;
        readonly USShoulderRight: fhir.Coding;
        readonly MRShoulderRight: fhir.Coding;
        readonly USScrotumAndTesticleBilateral: fhir.Coding;
        readonly USScrotumAndTesticleLeft: fhir.Coding;
        readonly USScrotumAndTesticleRight: fhir.Coding;
        readonly MRWristBilateral: fhir.Coding;
        readonly USWristBilateral: fhir.Coding;
        readonly MRWristLeft: fhir.Coding;
        readonly USWristLeft: fhir.Coding;
        readonly MRWristRight: fhir.Coding;
        readonly USWristRight: fhir.Coding;
        readonly XRKneeBilateralMerchants: fhir.Coding;
        readonly XRKneeLeftMerchants: fhir.Coding;
        readonly XRKneeRightMerchants: fhir.Coding;
        readonly USBreastBilateralLimited: fhir.Coding;
        readonly MGBreastBilateralLimitedViews: fhir.Coding;
        readonly USBreastLeftLimited: fhir.Coding;
        readonly MGBreastLeftLimitedViews: fhir.Coding;
        readonly USBreastRightLimited: fhir.Coding;
        readonly MGBreastRightLimitedViews: fhir.Coding;
        readonly MGStereoGuidanceForBiopsyOfBreastBilateral: fhir.Coding;
        readonly MGStereoGuidanceForBiopsyOfBreastLeft: fhir.Coding;
        readonly MGStereoGuidanceForBiopsyOfBreastRight: fhir.Coding;
        readonly RFAGuidanceForRepositionOfCVCatheterInVeinBilateralWContrastIV: fhir.Coding;
        readonly RFAGuidanceForRepositionOfCVCatheterInVeinLeftWContrastIV: fhir.Coding;
        readonly RFAGuidanceForRepositionOfCVCatheterInVeinRightWContrastIV: fhir.Coding;
        readonly RFAGuidanceForAtherectomyOfVeinBilateralWContrastIV: fhir.Coding;
        readonly RFAGuidanceForAtherectomyOfVeinLeftWContrastIV: fhir.Coding;
        readonly RFAGuidanceForAtherectomyOfVeinRightWContrastIV: fhir.Coding;
        readonly RFAGuidanceForPlacementOfStentInVeinBilateral: fhir.Coding;
        readonly RFAGuidanceForPlacementOfStentInVeinLeft: fhir.Coding;
        readonly RFAGuidanceForPlacementOfStentInVeinRight: fhir.Coding;
        readonly RFAGuidanceForPlacementOfPeripherallyInsertedCentralVenousCatheterInVeinBilateral: fhir.Coding;
        readonly RFAGuidanceForPlacementOfPeripherallyInsertedCentralVenousCatheterInVeinLeft: fhir.Coding;
        readonly RFAGuidanceForPlacementOfPeripherallyInsertedCentralVenousCatheterInVeinRight: fhir.Coding;
        readonly GuidanceForPlacementOfLargeBoreCVCatheterInVeinBilateral: fhir.Coding;
        readonly GuidanceForPlacementOfLargeBoreCVCatheterInVeinLeft: fhir.Coding;
        readonly GuidanceForPlacementOfLargeBoreCVCatheterInVeinRight: fhir.Coding;
        readonly RFAGuidanceForPlacementOfCVCatheterInVeinBilateralWContrastIV: fhir.Coding;
        readonly RFAGuidanceForPlacementOfCVCatheterInVeinLeftWContrastIV: fhir.Coding;
        readonly RFAGuidanceForPlacementOfCVCatheterInVeinRightWContrastIV: fhir.Coding;
        readonly USGuidanceForNeedleLocalizationOfBreastBilateral: fhir.Coding;
        readonly USGuidanceForNeedleLocalizationOfBreastLeft: fhir.Coding;
        readonly MGGuidanceForNeedleLocalizationOfMassOfBreastBilateral: fhir.Coding;
        readonly MGGuidanceForNeedleLocalizationOfMassOfBreastLeft: fhir.Coding;
        readonly MGGuidanceForNeedleLocalizationOfMassOfBreastRight: fhir.Coding;
        readonly USGuidanceForNeedleLocalizationOfBreastRight: fhir.Coding;
        readonly CTGuidanceForInjectionOfSacroiliacJointBilateral: fhir.Coding;
        readonly CTGuidanceForInjectionOfSacroiliacJointLeft: fhir.Coding;
        readonly CTGuidanceForInjectionOfSacroiliacJointRight: fhir.Coding;
        readonly RFGuidanceForInjectionOfSpineFacetJointBilateral: fhir.Coding;
        readonly RFGuidanceForInjectionOfSpineFacetJointLeft: fhir.Coding;
        readonly RFGuidanceForInjectionOfSpineFacetJointRight: fhir.Coding;
        readonly USGuidanceForDrainageOfExtremityBilateral: fhir.Coding;
        readonly USGuidanceForDrainageOfExtremityLeft: fhir.Coding;
        readonly USGuidanceForDrainageOfExtremityRight: fhir.Coding;
        readonly USGuidanceForDrainageOfKidneyBilateral: fhir.Coding;
        readonly USGuidanceForDrainageOfKidneyLeft: fhir.Coding;
        readonly USGuidanceForDrainageOfKidneyRight: fhir.Coding;
        readonly RFAGuidanceForChangeOfCVCatheterInVeinBilateralWContrastIV: fhir.Coding;
        readonly RFAGuidanceForChangeOfCVCatheterInVeinLeftWContrastIV: fhir.Coding;
        readonly RFAGuidanceForChangeOfCVCatheterInVeinRightWContrastIV: fhir.Coding;
        readonly MGGuidanceForPercutaneousBiopsyCoreNeedleOfBreastBilateral: fhir.Coding;
        readonly MGGuidanceForPercutaneousBiopsyCoreNeedleOfBreastLeft: fhir.Coding;
        readonly MGGuidanceForPercutaneousBiopsyCoreNeedleOfBreastRight: fhir.Coding;
        readonly MGGuidanceForBiopsyOfBreastBilateral: fhir.Coding;
        readonly MGGuidanceForBiopsyOfBreastLeft: fhir.Coding;
        readonly MGGuidanceForBiopsyOfBreastRight: fhir.Coding;
        readonly USGuidanceForBiopsyOfKidneyBilateral: fhir.Coding;
        readonly USGuidanceForBiopsyOfKidneyLeft: fhir.Coding;
        readonly USGuidanceForBiopsyOfKidneyRight: fhir.Coding;
        readonly MGGuidanceForAspirationOfCystOfBreastBilateral: fhir.Coding;
        readonly MGGuidanceForAspirationOfCystOfBreastLeft: fhir.Coding;
        readonly MGGuidanceForAspirationOfCystOfBreastRight: fhir.Coding;
        readonly MGBreastBilateralDiagnostic: fhir.Coding;
        readonly MGBreastLeftDiagnostic: fhir.Coding;
        readonly MGBreastRightDiagnostic: fhir.Coding;
        readonly MGBreastBilateralDiagnosticLimitedViews: fhir.Coding;
        readonly MGBreastLeftDiagnosticLimitedViews: fhir.Coding;
        readonly MGBreastRightDiagnosticLimitedViews: fhir.Coding;
        readonly XRWristBilateralAndHandBilateralBoneAgeViews: fhir.Coding;
        readonly XRWristLeftAndHandLeftBoneAgeViews: fhir.Coding;
        readonly XRWristRightAndHandRightBoneAgeViews: fhir.Coding;
        readonly XRHandBilateralArthritis: fhir.Coding;
        readonly XRHandLeftArthritis: fhir.Coding;
        readonly XRHandRightArthritis: fhir.Coding;
        readonly XRKneeBilateralAPWStanding: fhir.Coding;
        readonly XRKneeLeftAPWStanding: fhir.Coding;
        readonly XRKneeRightAPWStanding: fhir.Coding;
        readonly XRKneeBilateralAPAndPAWStanding: fhir.Coding;
        readonly XRKneeLeftAPAndPAWStanding: fhir.Coding;
        readonly XRKneeRightAPAndPAWStanding: fhir.Coding;
        readonly XRKneeBilateralAPAndLateralWStanding: fhir.Coding;
        readonly XRKneeLeftAPAndLateralWStanding: fhir.Coding;
        readonly XRKneeRightAPAndLateralWStanding: fhir.Coding;
        readonly DeprecatedBrachiocephalicArteryLeftFluoroscopicAngiogramAngioplastyWContrastIA: fhir.Coding;
        readonly DeprecatedBrachiocephalicArteryRightFluoroscopicAngiogramAngioplastyWContrastIA: fhir.Coding;
        readonly RFAGuidanceForAngioplastyOfIliacArteryBilateralWContrastIA: fhir.Coding;
        readonly RFAGuidanceForAngioplastyOfIliacArteryLeftWContrastIA: fhir.Coding;
        readonly RFAGuidanceForAngioplastyOfIliacArteryRightWContrastIA: fhir.Coding;
        readonly DeprecatedRFAGuidanceForAngioplastyOfTibialArteryBilateralWContrastIA: fhir.Coding;
        readonly DeprecatedRFAGuidanceForAngioplastyOfTibialArteryLeftWContrastIA: fhir.Coding;
        readonly DeprecatedRFAGuidanceForAngioplastyOfTibialArteryRightWContrastIA: fhir.Coding;
        readonly AdministrationOfVasodilatorIntoCatheterVeinBilateral: fhir.Coding;
        readonly AdministrationOfVasodilatorIntoCatheterVeinLeft: fhir.Coding;
        readonly AdministrationOfVasodilatorIntoCatheterVeinRight: fhir.Coding;
        readonly XRHandBilateral3Views: fhir.Coding;
        readonly XRHandLeft3Views: fhir.Coding;
        readonly XRHandRight3Views: fhir.Coding;
        readonly XRShoulderBilateral3Views: fhir.Coding;
        readonly XRShoulderLeft3Views: fhir.Coding;
        readonly XRShoulderRight3Views: fhir.Coding;
        readonly XRAnkleBilateral2Views: fhir.Coding;
        readonly XRAnkleLeft2Views: fhir.Coding;
        readonly XRAnkleRight2Views: fhir.Coding;
        readonly XRHandBilateral2Views: fhir.Coding;
        readonly XRHandLeft2Views: fhir.Coding;
        readonly XRHandRight2Views: fhir.Coding;
        readonly XRHumerusBilateral2Views: fhir.Coding;
        readonly XRHumerusLeft2Views: fhir.Coding;
        readonly XRHumerusRight2Views: fhir.Coding;
        readonly XRKneeBilateral2Views: fhir.Coding;
        readonly XRKneeLeft2Views: fhir.Coding;
        readonly XRKneeRight2Views: fhir.Coding;
        readonly XRPatellaBilateral2Views: fhir.Coding;
        readonly XRPatellaLeft2Views: fhir.Coding;
        readonly XRPatellaRight2Views: fhir.Coding;
        readonly XRHipBilateralSingleView: fhir.Coding;
        readonly XRHipLeftSingleView: fhir.Coding;
        readonly XRHipRightSingleView: fhir.Coding;
        readonly DeprecatedCardiacEchoStudy_280321: fhir.Coding;
        readonly XRPelvisViews: fhir.Coding;
        readonly XRSkullViews: fhir.Coding;
        readonly XRKneeViews: fhir.Coding;
        readonly CTSpine: fhir.Coding;
        readonly XRHumerusViews: fhir.Coding;
        readonly PhysicianEmergencyDepartmentNote: fhir.Coding;
        readonly PhysicianConsultingProgressNote: fhir.Coding;
        readonly ProcedureNote: fhir.Coding;
        readonly SpeechLanguagePathologyNote: fhir.Coding;
        readonly DentistryInitialEvaluationNote: fhir.Coding;
        readonly PhysicianOperationNote: fhir.Coding;
        readonly DeprecatedDischargeNote: fhir.Coding;
        readonly NursePractitionerProgressNote: fhir.Coding;
        readonly MRJoint: fhir.Coding;
        readonly DentistryProcedureNote: fhir.Coding;
        readonly OccupationalTherapyNote: fhir.Coding;
        readonly PhysicalTherapyNote: fhir.Coding;
        readonly ChiropracticMedicineProgressNote: fhir.Coding;
        readonly ChiropracticMedicineInitialEvaluationNote: fhir.Coding;
        readonly XRHandViews: fhir.Coding;
        readonly DentistOperationNote: fhir.Coding;
        readonly XRSpineViews: fhir.Coding;
        readonly USLiver: fhir.Coding;
        readonly AudiologyStudy: fhir.Coding;
        readonly PhysicianTransferNote: fhir.Coding;
        readonly DentistryProgressNote: fhir.Coding;
        readonly DentistryNote: fhir.Coding;
        readonly NursePractitionerInitialEvaluationNote: fhir.Coding;
        readonly NurseDischargeAssessment: fhir.Coding;
        readonly NurseProgressNote: fhir.Coding;
        readonly PodiatryOperationNote: fhir.Coding;
        readonly PodiatryProcedureNote: fhir.Coding;
        readonly PhysicianHistoryAndPhysicalNote: fhir.Coding;
        readonly PsychiatryProgressNote: fhir.Coding;
        readonly PsychiatryNote: fhir.Coding;
        readonly PerimetryStudy: fhir.Coding;
        readonly TonometryStudy: fhir.Coding;
        readonly VisualAcuityStudy: fhir.Coding;
        readonly HeterophoriaStudy: fhir.Coding;
        readonly PolysomnographySleepStudy: fhir.Coding;
        readonly PsychiatryInitialEvaluationNote: fhir.Coding;
        readonly InitialEvaluationNote: fhir.Coding;
        readonly NurseTransferNote: fhir.Coding;
        readonly SocialWorkNote: fhir.Coding;
        readonly PhysicianAttendingInitialEvaluationNote: fhir.Coding;
        readonly PhysicianAttendingDischargeSummary: fhir.Coding;
        readonly SocialWorkProgressNote: fhir.Coding;
        readonly SpeechTherapyServiceAttachment: fhir.Coding;
        readonly CTChestWOContrast: fhir.Coding;
        readonly EyeUltrasoundStudy: fhir.Coding;
        readonly DialysisRecords: fhir.Coding;
        readonly NeonatalIntensiveCareRecords: fhir.Coding;
        readonly CriticalCareRecords: fhir.Coding;
        readonly PerioperativeRecords: fhir.Coding;
        readonly NurseInitialEvaluationNote: fhir.Coding;
        readonly NystagmogramStudy: fhir.Coding;
        readonly NerveConductionStudy: fhir.Coding;
        readonly PeritoneoscopyStudy: fhir.Coding;
        readonly ColposcopyStudy: fhir.Coding;
        readonly DentistryDischargeSummary: fhir.Coding;
        readonly CTGuidanceForDrainageOfAbscessOfUnspecifiedBodyRegion: fhir.Coding;
        readonly CTGuidanceForInjectionOfSpineFacetJoint: fhir.Coding;
        readonly CTGuidanceForFineNeedleAspirationOfUnspecifiedBodyRegion: fhir.Coding;
        readonly CTGuidanceForRadiationTreatmentOfUnspecifiedBodyRegionWContrastIV: fhir.Coding;
        readonly CTGuidanceForRadiationTreatmentOfUnspecifiedBodyRegionWOContrast: fhir.Coding;
        readonly CTInternalAuditoryCanalWContrastIV: fhir.Coding;
        readonly CTInternalAuditoryCanalWOContrast: fhir.Coding;
        readonly CTNasopharynxAndNeckWOContrast: fhir.Coding;
        readonly CTNeckWOAndWContrastIV: fhir.Coding;
        readonly CTOrbitBilateralWOContrast: fhir.Coding;
        readonly CTSinuses: fhir.Coding;
        readonly CTPetrousPartOfTemporalBoneWOContrast: fhir.Coding;
        readonly CTPituitaryAndSellaTurcicaWContrastIV: fhir.Coding;
        readonly CTGuidanceForBiopsyOfPancreas: fhir.Coding;
        readonly CTGuidanceForFineNeedleAspirationOfPancreas: fhir.Coding;
        readonly CTGuidanceForFineNeedleAspirationOfPelvis: fhir.Coding;
        readonly CTGuidanceForBiopsyOfKidneyBilateral: fhir.Coding;
        readonly CTGuidanceForFineNeedleAspirationOfKidneyBilateral: fhir.Coding;
        readonly RFAPeritoneumViewsWContrastPercutaneousIntraperitoneal: fhir.Coding;
        readonly RFGuidanceForInjectionOfSpineLumbarFacetJoint: fhir.Coding;
        readonly RFGuidanceForPlacementOfCatheterInFallopianTubesTranscervical: fhir.Coding;
        readonly RFAEpiduralVeinsViewsWContrastIV: fhir.Coding;
    };
    /**
     * Required-bound Value Set for confidentiality (Composition.confidentiality)
     */
    static get confidentialityRequiredCodes(): {
        readonly Low: "L";
        readonly Moderate: "M";
        readonly Normal: "N";
        readonly Restricted: "R";
        readonly Unrestricted: "U";
        readonly VeryRestricted: "V";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Composition.d.ts.map