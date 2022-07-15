import * as fhir from '../fhir.js';
import { QuestionnaireAnswersStatusCodeType } from '../fhirValueSets/QuestionnaireAnswersStatusCodes.js';
/**
 * Valid arguments for the QuestionnaireResponseGroupQuestionAnswer type.
 */
export interface QuestionnaireResponseGroupQuestionAnswerArgs extends fhir.BackboneElementArgs {
    /**
     * Ability to retain a single-valued answer to a question.
     */
    value?: fhir.FhirBoolean | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirInstant | fhir.FhirTime | fhir.FhirString | fhir.FhirUri | fhir.Attachment | fhir.Coding | fhir.Quantity | fhir.Reference | undefined;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueDate?: fhir.FhirDate | string | undefined;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueInstant?: fhir.FhirInstant | string | undefined;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueTime?: fhir.FhirTime | string | undefined;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueUri?: fhir.FhirUri | string | undefined;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueCoding?: fhir.CodingArgs | undefined;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    valueReference?: fhir.ReferenceArgs | undefined;
    /**
     * It is useful to have "sub-questions", questions which normally appear when certain answers are given and which collect additional details.
     */
    group?: fhir.QuestionnaireResponseGroupArgs[] | undefined;
}
/**
 * The respondent's answer(s) to the question.
 */
export declare class QuestionnaireResponseGroupQuestionAnswer extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Ability to retain a single-valued answer to a question.
     */
    value?: (fhir.FhirBoolean | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirInstant | fhir.FhirTime | fhir.FhirString | fhir.FhirUri | fhir.Attachment | fhir.Coding | fhir.Quantity | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element QuestionnaireResponse.group.question.answer.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * It is useful to have "sub-questions", questions which normally appear when certain answers are given and which collect additional details.
     */
    group: fhir.QuestionnaireResponseGroup[];
    /**
     * Default constructor for QuestionnaireResponseGroupQuestionAnswer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireResponseGroupQuestionAnswerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the QuestionnaireResponseGroupQuestion type.
 */
export interface QuestionnaireResponseGroupQuestionArgs extends fhir.BackboneElementArgs {
    /**
     * Groups can repeat in the answers, so a direct 1..1 correspondence may not exist - requiring correspondence by id.
     */
    linkId?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.question.linkId
     */
    _linkId?: fhir.FhirElementArgs;
    /**
     * When including text for the questionnaire, each question may contain its actual question display text.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.question.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * The respondent's answer(s) to the question.
     */
    answer?: fhir.QuestionnaireResponseGroupQuestionAnswerArgs[] | undefined;
}
/**
 * Must register answers to questions.
 */
export declare class QuestionnaireResponseGroupQuestion extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Groups can repeat in the answers, so a direct 1..1 correspondence may not exist - requiring correspondence by id.
     */
    linkId?: fhir.FhirString | undefined;
    /**
     * When including text for the questionnaire, each question may contain its actual question display text.
     */
    text?: fhir.FhirString | undefined;
    /**
     * The respondent's answer(s) to the question.
     */
    answer: fhir.QuestionnaireResponseGroupQuestionAnswer[];
    /**
     * Default constructor for QuestionnaireResponseGroupQuestion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireResponseGroupQuestionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the QuestionnaireResponseGroup type.
 */
export interface QuestionnaireResponseGroupArgs extends fhir.BackboneElementArgs {
    /**
     * Groups can repeat in the answers, so a direct 1..1 correspondence may not exist - requiring correspondence by identifier.
     */
    linkId?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.linkId
     */
    _linkId?: fhir.FhirElementArgs;
    /**
     * When including text for the questionnaire with the answers, sections may have a section header.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * When including text for the questionnaire, each section may contain additional explanations are background text.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.group.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * Sometimes a group of answers is about a specific participant, artifact or piece of information in the patient's care or record, e.g. a specific Problem, RelatedPerson, Allergy etc.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Reports can consist of complex nested groups.
     */
    group?: fhir.QuestionnaireResponseGroupArgs[] | undefined;
    /**
     * Must register answers to questions.
     */
    question?: fhir.QuestionnaireResponseGroupQuestionArgs[] | undefined;
}
/**
 * Need to be able to logically group answers to grouped questions.
 */
export declare class QuestionnaireResponseGroup extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Groups can repeat in the answers, so a direct 1..1 correspondence may not exist - requiring correspondence by identifier.
     */
    linkId?: fhir.FhirString | undefined;
    /**
     * When including text for the questionnaire with the answers, sections may have a section header.
     */
    title?: fhir.FhirString | undefined;
    /**
     * When including text for the questionnaire, each section may contain additional explanations are background text.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Sometimes a group of answers is about a specific participant, artifact or piece of information in the patient's care or record, e.g. a specific Problem, RelatedPerson, Allergy etc.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Reports can consist of complex nested groups.
     */
    group: fhir.QuestionnaireResponseGroup[];
    /**
     * Must register answers to questions.
     */
    question: fhir.QuestionnaireResponseGroupQuestion[];
    /**
     * Default constructor for QuestionnaireResponseGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireResponseGroupArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the QuestionnaireResponse type.
 */
export interface QuestionnaireResponseArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "QuestionnaireResponse" | undefined;
    /**
     * Used for tracking, registration and other business purposes.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Needed to allow editing of the questionnaire in a manner that enforces the constraints of the original form.
     */
    questionnaire?: fhir.ReferenceArgs | undefined;
    /**
     * The information on Questionnaire resources  may possibly be gathered during multiple sessions and altered after considered being finished. Questionnaire resources with just questions may serve as template forms, with the applicable publication statuses.
     */
    status: fhir.FhirCode<QuestionnaireAnswersStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The subject context must be known.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Need to know who interpreted the subject's answers to the questions in the questionnaire, and selected the appropriate options for answers.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * Clinicians need to be able to check the date that the information in the questionnaire was collected, to derive the context of the answers.
     */
    authored?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.authored
     */
    _authored?: fhir.FhirElementArgs;
    /**
     * When answering questions about a subject that is minor, incapable of answering or an animal, another human source is used to answer the questions.
     */
    source?: fhir.ReferenceArgs | undefined;
    /**
     * Some institutions track questionnaires under a specific encounter.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Need to be able to logically group answers to grouped questions.
     */
    group?: fhir.QuestionnaireResponseGroupArgs | undefined;
}
/**
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.
 */
export declare class QuestionnaireResponse extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "QuestionnaireResponse";
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
    status: fhir.FhirCode<QuestionnaireAnswersStatusCodeType> | null;
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
    authored?: fhir.FhirDateTime | undefined;
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
    /**
     * Default constructor for QuestionnaireResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=QuestionnaireResponse.d.ts.map