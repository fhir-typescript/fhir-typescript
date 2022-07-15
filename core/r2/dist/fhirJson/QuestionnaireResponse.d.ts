import * as fhir from '../fhirJson.js';
/**
 * The respondent's answer(s) to the question.
 */
export interface QuestionnaireResponseGroupQuestionAnswer extends fhir.BackboneElement {
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.question.answer.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.question.answer.value[x]
     */
    _valueDecimal?: fhir.FhirElement;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.question.answer.value[x]
     */
    _valueInteger?: fhir.FhirElement;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.question.answer.value[x]
     */
    _valueDate?: fhir.FhirElement;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.question.answer.value[x]
     */
    _valueDateTime?: fhir.FhirElement;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.question.answer.value[x]
     */
    _valueInstant?: fhir.FhirElement;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.question.answer.value[x]
     */
    _valueTime?: fhir.FhirElement;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.question.answer.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.question.answer.value[x]
     */
    _valueUri?: fhir.FhirElement;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * It is useful to have "sub-questions", questions which normally appear when certain answers are given and which collect additional details.
     */
    group?: (fhir.QuestionnaireResponseGroup | null)[] | undefined;
}
/**
 * Must register answers to questions.
 */
export interface QuestionnaireResponseGroupQuestion extends fhir.BackboneElement {
    /**
     * Groups can repeat in the answers, so a direct 1..1 correspondence may not exist - requiring correspondence by id.
     */
    linkId?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.question.linkId
     */
    _linkId?: fhir.FhirElement;
    /**
     * When including text for the questionnaire, each question may contain its actual question display text.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.question.text
     */
    _text?: fhir.FhirElement;
    /**
     * The respondent's answer(s) to the question.
     */
    answer?: (fhir.QuestionnaireResponseGroupQuestionAnswer | null)[] | undefined;
}
/**
 * Need to be able to logically group answers to grouped questions.
 */
export interface QuestionnaireResponseGroup extends fhir.BackboneElement {
    /**
     * Groups can repeat in the answers, so a direct 1..1 correspondence may not exist - requiring correspondence by identifier.
     */
    linkId?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.linkId
     */
    _linkId?: fhir.FhirElement;
    /**
     * When including text for the questionnaire with the answers, sections may have a section header.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.title
     */
    _title?: fhir.FhirElement;
    /**
     * When including text for the questionnaire, each section may contain additional explanations are background text.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.text
     */
    _text?: fhir.FhirElement;
    /**
     * Sometimes a group of answers is about a specific participant, artifact or piece of information in the patient's care or record, e.g. a specific Problem, RelatedPerson, Allergy etc.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Reports can consist of complex nested groups.
     */
    group?: (fhir.QuestionnaireResponseGroup | null)[] | undefined;
    /**
     * Must register answers to questions.
     */
    question?: (fhir.QuestionnaireResponseGroupQuestion | null)[] | undefined;
}
/**
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.
 */
export interface QuestionnaireResponse extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "QuestionnaireResponse" | null;
    /**
     * Used for tracking, registration and other business purposes.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Needed to allow editing of the questionnaire in a manner that enforces the constraints of the original form.
     */
    questionnaire?: fhir.Reference | undefined;
    /**
     * The information on Questionnaire resources  may possibly be gathered during multiple sessions and altered after considered being finished. Questionnaire resources with just questions may serve as template forms, with the applicable publication statuses.
     */
    status: 'amended' | 'completed' | 'in-progress' | null;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.status
     */
    _status?: fhir.FhirElement;
    /**
     * The subject context must be known.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Need to know who interpreted the subject's answers to the questions in the questionnaire, and selected the appropriate options for answers.
     */
    author?: fhir.Reference | undefined;
    /**
     * Clinicians need to be able to check the date that the information in the questionnaire was collected, to derive the context of the answers.
     */
    authored?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.authored
     */
    _authored?: fhir.FhirElement;
    /**
     * When answering questions about a subject that is minor, incapable of answering or an animal, another human source is used to answer the questions.
     */
    source?: fhir.Reference | undefined;
    /**
     * Some institutions track questionnaires under a specific encounter.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Need to be able to logically group answers to grouped questions.
     */
    group?: fhir.QuestionnaireResponseGroup | undefined;
}
//# sourceMappingURL=QuestionnaireResponse.d.ts.map