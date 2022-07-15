import * as fhir from '../fhir.js';
import { AnswerFormatCodeType } from '../fhirValueSets/AnswerFormatCodes.js';
import { QuestionnaireStatusCodeType } from '../fhirValueSets/QuestionnaireStatusCodes.js';
/**
 * Valid arguments for the QuestionnaireGroupQuestion type.
 */
export interface QuestionnaireGroupQuestionArgs extends fhir.BackboneElementArgs {
    /**
     * [[[QuestionnaireResponse]]] does not require omitted groups to be included and may have some groups that repeat, so linkage based on position alone is not sufficient.
     */
    linkId?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.question.linkId
     */
    _linkId?: fhir.FhirElementArgs;
    /**
     * Allows linking of questions (and their answers) to formal terminologies.
     */
    concept?: fhir.CodingArgs[] | undefined;
    /**
     * When including text for the questionnaire, each question may contain its actual question display text.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.question.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * Defines the format in which the user is to be prompted for the answer.
     */
    type?: fhir.FhirCode<AnswerFormatCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.question.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * If true, indicates that the question must be answered and have required groups within it also present.  If false, the question and any contained groups may be skipped when answering the questionnaire.
     */
    required?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.question.required
     */
    _required?: fhir.FhirElementArgs;
    /**
     * Used for "check all that apply" types of questions or "list your top 3", etc.
     */
    repeats?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.question.repeats
     */
    _repeats?: fhir.FhirElementArgs;
    /**
     * Reference to a value set containing a list of codes representing permitted answers for the question.
     */
    options?: fhir.ReferenceArgs | undefined;
    /**
     * For a "choice" question, identifies one of the permitted answers for the question.
     */
    option?: fhir.CodingArgs[] | undefined;
    /**
     * It is useful to have "sub-questions", questions which normally appear when certain answers are given and which collect additional details.
     */
    group?: fhir.QuestionnaireGroupArgs[] | undefined;
}
/**
 * Must register answers to questions.
 */
export declare class QuestionnaireGroupQuestion extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * [[[QuestionnaireResponse]]] does not require omitted groups to be included and may have some groups that repeat, so linkage based on position alone is not sufficient.
     */
    linkId?: fhir.FhirString | undefined;
    /**
     * Allows linking of questions (and their answers) to formal terminologies.
     */
    concept: fhir.Coding[];
    /**
     * When including text for the questionnaire, each question may contain its actual question display text.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Defines the format in which the user is to be prompted for the answer.
     */
    type?: fhir.FhirCode<AnswerFormatCodeType> | undefined;
    /**
     * If true, indicates that the question must be answered and have required groups within it also present.  If false, the question and any contained groups may be skipped when answering the questionnaire.
     */
    required?: fhir.FhirBoolean | undefined;
    /**
     * Used for "check all that apply" types of questions or "list your top 3", etc.
     */
    repeats?: fhir.FhirBoolean | undefined;
    /**
     * Reference to a value set containing a list of codes representing permitted answers for the question.
     */
    options?: fhir.Reference | undefined;
    /**
     * For a "choice" question, identifies one of the permitted answers for the question.
     */
    option: fhir.Coding[];
    /**
     * It is useful to have "sub-questions", questions which normally appear when certain answers are given and which collect additional details.
     */
    group: fhir.QuestionnaireGroup[];
    /**
     * Default constructor for QuestionnaireGroupQuestion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireGroupQuestionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the QuestionnaireGroup type.
 */
export interface QuestionnaireGroupArgs extends fhir.BackboneElementArgs {
    /**
     * [[[QuestionnaireResponse]]] does not require omitted groups to be included and may have some groups that repeat, so linkage based on position alone is not sufficient.
     */
    linkId?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.linkId
     */
    _linkId?: fhir.FhirElementArgs;
    /**
     * When including text for the questionnaire with the answers, sections may have a section header.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Allows linking of groups of questions (and complete Questionnaire resources) to formal terminologies.
     */
    concept?: fhir.CodingArgs[] | undefined;
    /**
     * When including text for the questionnaire, each section may contain additional explanations are background text.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * If true, indicates that the group must be present and have required questions within it answered.  If false, the group may be skipped when answering the questionnaire.
     */
    required?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.required
     */
    _required?: fhir.FhirElementArgs;
    /**
     * Groups may be used to create set of (related) questions that can be repeated to give multiple answers to such a set.
     */
    repeats?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.group.repeats
     */
    _repeats?: fhir.FhirElementArgs;
    /**
     * Reports can consist of complex nested groups.
     */
    group?: fhir.QuestionnaireGroupArgs[] | undefined;
    /**
     * Must register answers to questions.
     */
    question?: fhir.QuestionnaireGroupQuestionArgs[] | undefined;
}
/**
 * Need to be able to logically group answers to grouped questions.
 */
export declare class QuestionnaireGroup extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * [[[QuestionnaireResponse]]] does not require omitted groups to be included and may have some groups that repeat, so linkage based on position alone is not sufficient.
     */
    linkId?: fhir.FhirString | undefined;
    /**
     * When including text for the questionnaire with the answers, sections may have a section header.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Allows linking of groups of questions (and complete Questionnaire resources) to formal terminologies.
     */
    concept: fhir.Coding[];
    /**
     * When including text for the questionnaire, each section may contain additional explanations are background text.
     */
    text?: fhir.FhirString | undefined;
    /**
     * If true, indicates that the group must be present and have required questions within it answered.  If false, the group may be skipped when answering the questionnaire.
     */
    required?: fhir.FhirBoolean | undefined;
    /**
     * Groups may be used to create set of (related) questions that can be repeated to give multiple answers to such a set.
     */
    repeats?: fhir.FhirBoolean | undefined;
    /**
     * Reports can consist of complex nested groups.
     */
    group: fhir.QuestionnaireGroup[];
    /**
     * Must register answers to questions.
     */
    question: fhir.QuestionnaireGroupQuestion[];
    /**
     * Default constructor for QuestionnaireGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireGroupArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Questionnaire type.
 */
export interface QuestionnaireArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Questionnaire" | undefined;
    /**
     * Need to allow connection to a wider workflow.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * In some cases, separate resource instances might be created for each version (if an older version can be maintained once a new version exists).
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The lifecycle status of the questionnaire as a whole.
     */
    status: fhir.FhirCode<QuestionnaireStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The date that this questionnaire was last changed.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Conveys responsibility for the questions and their organization and also helps evaluate the questionnaire's "authority".
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * Identifies the types of subjects that can be the subject of the questionnaire.
     */
    subjectType?: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.subjectType
     */
    _subjectType?: (fhir.FhirElementArgs | null)[];
    /**
     * Need to be able to logically group answers to grouped questions.
     */
    group: fhir.QuestionnaireGroupArgs | null;
}
/**
 * A structured set of questions intended to guide the collection of answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.
 */
export declare class Questionnaire extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Questionnaire";
    /**
     * Need to allow connection to a wider workflow.
     */
    identifier: fhir.Identifier[];
    /**
     * In some cases, separate resource instances might be created for each version (if an older version can be maintained once a new version exists).
     */
    version?: fhir.FhirString | undefined;
    /**
     * The lifecycle status of the questionnaire as a whole.
     */
    status: fhir.FhirCode<QuestionnaireStatusCodeType> | null;
    /**
     * The date that this questionnaire was last changed.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Conveys responsibility for the questions and their organization and also helps evaluate the questionnaire's "authority".
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Identifies the types of subjects that can be the subject of the questionnaire.
     */
    subjectType: fhir.FhirCode[];
    /**
     * Need to be able to logically group answers to grouped questions.
     */
    group: fhir.QuestionnaireGroup | null;
    /**
     * Default constructor for Questionnaire - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Questionnaire.d.ts.map