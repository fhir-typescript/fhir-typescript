import * as fhir from '../fhirJson.js';
/**
 * Must register answers to questions.
 */
export interface QuestionnaireGroupQuestion extends fhir.BackboneElement {
    /**
     * [[[QuestionnaireResponse]]] does not require omitted groups to be included and may have some groups that repeat, so linkage based on position alone is not sufficient.
     */
    linkId?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.question.linkId
     */
    _linkId?: fhir.FhirElement;
    /**
     * Allows linking of questions (and their answers) to formal terminologies.
     */
    concept?: (fhir.Coding | null)[] | undefined;
    /**
     * When including text for the questionnaire, each question may contain its actual question display text.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.question.text
     */
    _text?: fhir.FhirElement;
    /**
     * Defines the format in which the user is to be prompted for the answer.
     */
    type?: 'attachment' | 'boolean' | 'choice' | 'date' | 'dateTime' | 'decimal' | 'instant' | 'integer' | 'open-choice' | 'quantity' | 'reference' | 'string' | 'text' | 'time' | 'url' | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.question.type
     */
    _type?: fhir.FhirElement;
    /**
     * If true, indicates that the question must be answered and have required groups within it also present.  If false, the question and any contained groups may be skipped when answering the questionnaire.
     */
    required?: boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.question.required
     */
    _required?: fhir.FhirElement;
    /**
     * Used for "check all that apply" types of questions or "list your top 3", etc.
     */
    repeats?: boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.question.repeats
     */
    _repeats?: fhir.FhirElement;
    /**
     * Reference to a value set containing a list of codes representing permitted answers for the question.
     */
    options?: fhir.Reference | undefined;
    /**
     * For a "choice" question, identifies one of the permitted answers for the question.
     */
    option?: (fhir.Coding | null)[] | undefined;
    /**
     * It is useful to have "sub-questions", questions which normally appear when certain answers are given and which collect additional details.
     */
    group?: (fhir.QuestionnaireGroup | null)[] | undefined;
}
/**
 * Need to be able to logically group answers to grouped questions.
 */
export interface QuestionnaireGroup extends fhir.BackboneElement {
    /**
     * [[[QuestionnaireResponse]]] does not require omitted groups to be included and may have some groups that repeat, so linkage based on position alone is not sufficient.
     */
    linkId?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.linkId
     */
    _linkId?: fhir.FhirElement;
    /**
     * When including text for the questionnaire with the answers, sections may have a section header.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.title
     */
    _title?: fhir.FhirElement;
    /**
     * Allows linking of groups of questions (and complete Questionnaire resources) to formal terminologies.
     */
    concept?: (fhir.Coding | null)[] | undefined;
    /**
     * When including text for the questionnaire, each section may contain additional explanations are background text.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.text
     */
    _text?: fhir.FhirElement;
    /**
     * If true, indicates that the group must be present and have required questions within it answered.  If false, the group may be skipped when answering the questionnaire.
     */
    required?: boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.required
     */
    _required?: fhir.FhirElement;
    /**
     * Groups may be used to create set of (related) questions that can be repeated to give multiple answers to such a set.
     */
    repeats?: boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.repeats
     */
    _repeats?: fhir.FhirElement;
    /**
     * Reports can consist of complex nested groups.
     */
    group?: (fhir.QuestionnaireGroup | null)[] | undefined;
    /**
     * Must register answers to questions.
     */
    question?: (fhir.QuestionnaireGroupQuestion | null)[] | undefined;
}
/**
 * A structured set of questions intended to guide the collection of answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.
 */
export interface Questionnaire extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Questionnaire" | null;
    /**
     * Need to allow connection to a wider workflow.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * In some cases, separate resource instances might be created for each version (if an older version can be maintained once a new version exists).
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.version
     */
    _version?: fhir.FhirElement;
    /**
     * The lifecycle status of the questionnaire as a whole.
     */
    status: 'draft' | 'published' | 'retired' | null;
    /**
     * Extended properties for primitive element: Questionnaire.status
     */
    _status?: fhir.FhirElement;
    /**
     * The date that this questionnaire was last changed.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.date
     */
    _date?: fhir.FhirElement;
    /**
     * Conveys responsibility for the questions and their organization and also helps evaluate the questionnaire's "authority".
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
    /**
     * Identifies the types of subjects that can be the subject of the questionnaire.
     */
    subjectType?: (('Account' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CarePlan' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'Communication' | 'CommunicationRequest' | 'Composition' | 'ConceptMap' | 'Condition' | 'Conformance' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceUseRequest' | 'DeviceUseStatement' | 'DiagnosticOrder' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'Group' | 'HealthcareService' | 'ImagingObjectSelection' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'List' | 'Location' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationOrder' | 'MedicationStatement' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Order' | 'OrderResponse' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'Practitioner' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'TestScript' | 'ValueSet' | 'VisionPrescription') | null)[] | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.subjectType
     */
    _subjectType?: (fhir.FhirElement | null)[];
    /**
     * Need to be able to logically group answers to grouped questions.
     */
    group: fhir.QuestionnaireGroup | null;
}
//# sourceMappingURL=Questionnaire.d.ts.map