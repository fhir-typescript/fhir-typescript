// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: QuestionnaireResponse

import * as fhir from '../fhir.js';

// @ts-ignore
import { QuestionnaireAnswersStatusCodes,  QuestionnaireAnswersStatusCodeType } from '../fhirValueSets/QuestionnaireAnswersStatusCodes.js';
// @ts-ignore
import { QuestionnaireAnswersStatusVsValidation } from '../fhirValueSets/QuestionnaireAnswersStatusVsValidation.js';
/**
 * Valid arguments for the QuestionnaireResponseGroupQuestionAnswer type.
 */
export interface QuestionnaireResponseGroupQuestionAnswerArgs extends fhir.BackboneElementArgs {
  /**
   * Ability to retain a single-valued answer to a question.
   */
  value?: fhir.FhirBoolean|fhir.FhirDecimal|fhir.FhirInteger|fhir.FhirDate|fhir.FhirDateTime|fhir.FhirInstant|fhir.FhirTime|fhir.FhirString|fhir.FhirUri|fhir.Attachment|fhir.Coding|fhir.Quantity|fhir.Reference|undefined;
  /**
   * Ability to retain a single-valued answer to a question.
   */
  valueBoolean?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Ability to retain a single-valued answer to a question.
   */
  valueDecimal?: fhir.FhirDecimal|number|undefined;
  /**
   * Ability to retain a single-valued answer to a question.
   */
  valueInteger?: fhir.FhirInteger|number|undefined;
  /**
   * Ability to retain a single-valued answer to a question.
   */
  valueDate?: fhir.FhirDate|string|undefined;
  /**
   * Ability to retain a single-valued answer to a question.
   */
  valueDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Ability to retain a single-valued answer to a question.
   */
  valueInstant?: fhir.FhirInstant|string|undefined;
  /**
   * Ability to retain a single-valued answer to a question.
   */
  valueTime?: fhir.FhirTime|string|undefined;
  /**
   * Ability to retain a single-valued answer to a question.
   */
  valueString?: fhir.FhirString|string|undefined;
  /**
   * Ability to retain a single-valued answer to a question.
   */
  valueUri?: fhir.FhirUri|string|undefined;
  /**
   * Ability to retain a single-valued answer to a question.
   */
  valueAttachment?: fhir.AttachmentArgs|undefined;
  /**
   * Ability to retain a single-valued answer to a question.
   */
  valueCoding?: fhir.CodingArgs|undefined;
  /**
   * Ability to retain a single-valued answer to a question.
   */
  valueQuantity?: fhir.QuantityArgs|undefined;
  /**
   * Ability to retain a single-valued answer to a question.
   */
  valueReference?: fhir.ReferenceArgs|undefined;
  /**
   * It is useful to have "sub-questions", questions which normally appear when certain answers are given and which collect additional details.
   */
  group?: fhir.QuestionnaireResponseGroupArgs[]|undefined;
}

/**
 * The respondent's answer(s) to the question.
 */
export class QuestionnaireResponseGroupQuestionAnswer extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'QuestionnaireResponseGroupQuestionAnswer';
  /**
   * Ability to retain a single-valued answer to a question.
   */
  public value?: (fhir.FhirBoolean|fhir.FhirDecimal|fhir.FhirInteger|fhir.FhirDate|fhir.FhirDateTime|fhir.FhirInstant|fhir.FhirTime|fhir.FhirString|fhir.FhirUri|fhir.Attachment|fhir.Coding|fhir.Quantity|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element QuestionnaireResponse.group.question.answer.value[x]
   */
  protected static readonly _fts_valueIsChoice:true = true;
  /**
   * It is useful to have "sub-questions", questions which normally appear when certain answers are given and which collect additional details.
   */
  public group: fhir.QuestionnaireResponseGroup[];
  /**
   * Default constructor for QuestionnaireResponseGroupQuestionAnswer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<QuestionnaireResponseGroupQuestionAnswerArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['value']) { this.value = source.value; }
    else if (source['valueBoolean']) { this.value = new fhir.FhirBoolean({value: source.valueBoolean}); }
    else if (source['valueDecimal']) { this.value = new fhir.FhirDecimal({value: source.valueDecimal}); }
    else if (source['valueInteger']) { this.value = new fhir.FhirInteger({value: source.valueInteger}); }
    else if (source['valueDate']) { this.value = new fhir.FhirDate({value: source.valueDate}); }
    else if (source['valueDateTime']) { this.value = new fhir.FhirDateTime({value: source.valueDateTime}); }
    else if (source['valueInstant']) { this.value = new fhir.FhirInstant({value: source.valueInstant}); }
    else if (source['valueTime']) { this.value = new fhir.FhirTime({value: source.valueTime}); }
    else if (source['valueString']) { this.value = new fhir.FhirString({value: source.valueString}); }
    else if (source['valueUri']) { this.value = new fhir.FhirUri({value: source.valueUri}); }
    else if (source['valueAttachment']) { this.value = new fhir.Attachment(source.valueAttachment); }
    else if (source['valueCoding']) { this.value = new fhir.Coding(source.valueCoding); }
    else if (source['valueQuantity']) { this.value = new fhir.Quantity(source.valueQuantity); }
    else if (source['valueReference']) { this.value = new fhir.Reference(source.valueReference); }
    if (source['group']) { this.group = source.group.map((x) => new fhir.QuestionnaireResponseGroup(x)); }
    else { this.group = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'QuestionnaireResponse.group.question.answer' }
    iss.push(...this.vOS('value',exp));
    iss.push(...this.vOA('group',exp));
    return iss;
  }
}
/**
 * Valid arguments for the QuestionnaireResponseGroupQuestion type.
 */
export interface QuestionnaireResponseGroupQuestionArgs extends fhir.BackboneElementArgs {
  /**
   * Groups can repeat in the answers, so a direct 1..1 correspondence may not exist - requiring correspondence by id.
   */
  linkId?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.group.question.linkId
   */
  _linkId?:fhir.FhirElementArgs;
  /**
   * When including text for the questionnaire, each question may contain its actual question display text.
   */
  text?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.group.question.text
   */
  _text?:fhir.FhirElementArgs;
  /**
   * The respondent's answer(s) to the question.
   */
  answer?: fhir.QuestionnaireResponseGroupQuestionAnswerArgs[]|undefined;
}

/**
 * Must register answers to questions.
 */
export class QuestionnaireResponseGroupQuestion extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'QuestionnaireResponseGroupQuestion';
  /**
   * Groups can repeat in the answers, so a direct 1..1 correspondence may not exist - requiring correspondence by id.
   */
  public linkId?: fhir.FhirString|undefined;
  /**
   * When including text for the questionnaire, each question may contain its actual question display text.
   */
  public text?: fhir.FhirString|undefined;
  /**
   * The respondent's answer(s) to the question.
   */
  public answer: fhir.QuestionnaireResponseGroupQuestionAnswer[];
  /**
   * Default constructor for QuestionnaireResponseGroupQuestion - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<QuestionnaireResponseGroupQuestionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['linkId']) { this.linkId = new fhir.FhirString({value: source.linkId}); }
    if (source['_linkId']) {
      if (this.linkId) { this.linkId.addExtendedProperties(source._linkId!); }
      else { this.linkId = new fhir.FhirString(source._linkId as Partial<fhir.FhirStringArgs>); }
    }
    if (source['text']) { this.text = new fhir.FhirString({value: source.text}); }
    if (source['_text']) {
      if (this.text) { this.text.addExtendedProperties(source._text!); }
      else { this.text = new fhir.FhirString(source._text as Partial<fhir.FhirStringArgs>); }
    }
    if (source['answer']) { this.answer = source.answer.map((x) => new fhir.QuestionnaireResponseGroupQuestionAnswer(x)); }
    else { this.answer = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'QuestionnaireResponse.group.question' }
    iss.push(...this.vOS('linkId',exp));
    iss.push(...this.vOS('text',exp));
    iss.push(...this.vOA('answer',exp));
    return iss;
  }
}
/**
 * Valid arguments for the QuestionnaireResponseGroup type.
 */
export interface QuestionnaireResponseGroupArgs extends fhir.BackboneElementArgs {
  /**
   * Groups can repeat in the answers, so a direct 1..1 correspondence may not exist - requiring correspondence by identifier.
   */
  linkId?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.group.linkId
   */
  _linkId?:fhir.FhirElementArgs;
  /**
   * When including text for the questionnaire with the answers, sections may have a section header.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.group.title
   */
  _title?:fhir.FhirElementArgs;
  /**
   * When including text for the questionnaire, each section may contain additional explanations are background text.
   */
  text?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.group.text
   */
  _text?:fhir.FhirElementArgs;
  /**
   * Sometimes a group of answers is about a specific participant, artifact or piece of information in the patient's care or record, e.g. a specific Problem, RelatedPerson, Allergy etc.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * Reports can consist of complex nested groups.
   */
  group?: fhir.QuestionnaireResponseGroupArgs[]|undefined;
  /**
   * Must register answers to questions.
   */
  question?: fhir.QuestionnaireResponseGroupQuestionArgs[]|undefined;
}

/**
 * Need to be able to logically group answers to grouped questions.
 */
export class QuestionnaireResponseGroup extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'QuestionnaireResponseGroup';
  /**
   * Groups can repeat in the answers, so a direct 1..1 correspondence may not exist - requiring correspondence by identifier.
   */
  public linkId?: fhir.FhirString|undefined;
  /**
   * When including text for the questionnaire with the answers, sections may have a section header.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * When including text for the questionnaire, each section may contain additional explanations are background text.
   */
  public text?: fhir.FhirString|undefined;
  /**
   * Sometimes a group of answers is about a specific participant, artifact or piece of information in the patient's care or record, e.g. a specific Problem, RelatedPerson, Allergy etc.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Reports can consist of complex nested groups.
   */
  public group: fhir.QuestionnaireResponseGroup[];
  /**
   * Must register answers to questions.
   */
  public question: fhir.QuestionnaireResponseGroupQuestion[];
  /**
   * Default constructor for QuestionnaireResponseGroup - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<QuestionnaireResponseGroupArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['linkId']) { this.linkId = new fhir.FhirString({value: source.linkId}); }
    if (source['_linkId']) {
      if (this.linkId) { this.linkId.addExtendedProperties(source._linkId!); }
      else { this.linkId = new fhir.FhirString(source._linkId as Partial<fhir.FhirStringArgs>); }
    }
    if (source['title']) { this.title = new fhir.FhirString({value: source.title}); }
    if (source['_title']) {
      if (this.title) { this.title.addExtendedProperties(source._title!); }
      else { this.title = new fhir.FhirString(source._title as Partial<fhir.FhirStringArgs>); }
    }
    if (source['text']) { this.text = new fhir.FhirString({value: source.text}); }
    if (source['_text']) {
      if (this.text) { this.text.addExtendedProperties(source._text!); }
      else { this.text = new fhir.FhirString(source._text as Partial<fhir.FhirStringArgs>); }
    }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['group']) { this.group = source.group.map((x) => new fhir.QuestionnaireResponseGroup(x)); }
    else { this.group = []; }
    if (source['question']) { this.question = source.question.map((x) => new fhir.QuestionnaireResponseGroupQuestion(x)); }
    else { this.question = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'QuestionnaireResponse.group' }
    iss.push(...this.vOS('linkId',exp));
    iss.push(...this.vOS('title',exp));
    iss.push(...this.vOS('text',exp));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vOA('group',exp));
    iss.push(...this.vOA('question',exp));
    return iss;
  }
}
/**
 * Valid arguments for the QuestionnaireResponse type.
 */
export interface QuestionnaireResponseArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "QuestionnaireResponse"|undefined;
  /**
   * Used for tracking, registration and other business purposes.
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * Needed to allow editing of the questionnaire in a manner that enforces the constraints of the original form.
   */
  questionnaire?: fhir.ReferenceArgs|undefined;
  /**
   * The information on Questionnaire resources  may possibly be gathered during multiple sessions and altered after considered being finished. Questionnaire resources with just questions may serve as template forms, with the applicable publication statuses.
   */
  status: fhir.FhirCode<QuestionnaireAnswersStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The subject context must be known.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * Need to know who interpreted the subject's answers to the questions in the questionnaire, and selected the appropriate options for answers.
   */
  author?: fhir.ReferenceArgs|undefined;
  /**
   * Clinicians need to be able to check the date that the information in the questionnaire was collected, to derive the context of the answers.
   */
  authored?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.authored
   */
  _authored?:fhir.FhirElementArgs;
  /**
   * When answering questions about a subject that is minor, incapable of answering or an animal, another human source is used to answer the questions.
   */
  source?: fhir.ReferenceArgs|undefined;
  /**
   * Some institutions track questionnaires under a specific encounter.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * Need to be able to logically group answers to grouped questions.
   */
  group?: fhir.QuestionnaireResponseGroupArgs|undefined;
}

/**
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.
 */
export class QuestionnaireResponse extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'QuestionnaireResponse';
  /**
   * Resource Type Name
   */
  public override resourceType: "QuestionnaireResponse";
  /**
   * Used for tracking, registration and other business purposes.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * Needed to allow editing of the questionnaire in a manner that enforces the constraints of the original form.
   */
  public questionnaire?: fhir.Reference|undefined;
  /**
   * The information on Questionnaire resources  may possibly be gathered during multiple sessions and altered after considered being finished. Questionnaire resources with just questions may serve as template forms, with the applicable publication statuses.
   */
  public status: fhir.FhirCode<QuestionnaireAnswersStatusCodeType>|null;
  /**
   * The subject context must be known.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Need to know who interpreted the subject's answers to the questions in the questionnaire, and selected the appropriate options for answers.
   */
  public author?: fhir.Reference|undefined;
  /**
   * Clinicians need to be able to check the date that the information in the questionnaire was collected, to derive the context of the answers.
   */
  public authored?: fhir.FhirDateTime|undefined;
  /**
   * When answering questions about a subject that is minor, incapable of answering or an animal, another human source is used to answer the questions.
   */
  public source?: fhir.Reference|undefined;
  /**
   * Some institutions track questionnaires under a specific encounter.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Need to be able to logically group answers to grouped questions.
   */
  public group?: fhir.QuestionnaireResponseGroup|undefined;
  /**
   * Default constructor for QuestionnaireResponse - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<QuestionnaireResponseArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'QuestionnaireResponse';
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier); }
    if (source['questionnaire']) { this.questionnaire = new fhir.Reference(source.questionnaire); }
    if (source['status']) { this.status = new fhir.FhirCode<QuestionnaireAnswersStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<QuestionnaireAnswersStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['author']) { this.author = new fhir.Reference(source.author); }
    if (source['authored']) { this.authored = new fhir.FhirDateTime({value: source.authored}); }
    if (source['_authored']) {
      if (this.authored) { this.authored.addExtendedProperties(source._authored!); }
      else { this.authored = new fhir.FhirDateTime(source._authored as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['source']) { this.source = new fhir.Reference(source.source); }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['group']) { this.group = new fhir.QuestionnaireResponseGroup(source.group); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'QuestionnaireResponse' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOS('identifier',exp));
    iss.push(...this.vOS('questionnaire',exp));
    iss.push(...this.vRSV('status',exp,'QuestionnaireAnswersStatus',QuestionnaireAnswersStatusVsValidation,'r'));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vOS('author',exp));
    iss.push(...this.vOS('authored',exp));
    iss.push(...this.vOS('source',exp));
    iss.push(...this.vOS('encounter',exp));
    iss.push(...this.vOS('group',exp));
    return iss;
  }
}
