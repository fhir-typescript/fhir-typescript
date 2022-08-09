// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Questionnaire

import * as fhir from '../fhir.js';

// @ts-ignore
import { AnswerFormatCodes,  AnswerFormatCodeType } from '../fhirValueSets/AnswerFormatCodes.js';
// @ts-ignore
import { AnswerFormatVsValidation } from '../fhirValueSets/AnswerFormatVsValidation.js';
// @ts-ignore
import { QuestionnaireStatusCodes,  QuestionnaireStatusCodeType } from '../fhirValueSets/QuestionnaireStatusCodes.js';
// @ts-ignore
import { QuestionnaireStatusVsValidation } from '../fhirValueSets/QuestionnaireStatusVsValidation.js';
// @ts-ignore
import { ResourceTypesCodes,  ResourceTypesCodeType } from '../fhirValueSets/ResourceTypesCodes.js';
// @ts-ignore
import { ResourceTypesVsValidation } from '../fhirValueSets/ResourceTypesVsValidation.js';
/**
 * Valid arguments for the QuestionnaireGroupQuestion type.
 */
export interface QuestionnaireGroupQuestionArgs extends fhir.BackboneElementArgs {
  /**
   * [[[QuestionnaireResponse]]] does not require omitted groups to be included and may have some groups that repeat, so linkage based on position alone is not sufficient.
   */
  linkId?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Questionnaire.group.question.linkId
   */
  _linkId?:fhir.FhirElementArgs;
  /**
   * Allows linking of questions (and their answers) to formal terminologies.
   */
  concept?: fhir.CodingArgs[]|undefined;
  /**
   * When including text for the questionnaire, each question may contain its actual question display text.
   */
  text?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Questionnaire.group.question.text
   */
  _text?:fhir.FhirElementArgs;
  /**
   * Defines the format in which the user is to be prompted for the answer.
   */
  type?: fhir.FhirCode<AnswerFormatCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Questionnaire.group.question.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * If true, indicates that the question must be answered and have required groups within it also present.  If false, the question and any contained groups may be skipped when answering the questionnaire.
   */
  required?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Questionnaire.group.question.required
   */
  _required?:fhir.FhirElementArgs;
  /**
   * Used for "check all that apply" types of questions or "list your top 3", etc.
   */
  repeats?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Questionnaire.group.question.repeats
   */
  _repeats?:fhir.FhirElementArgs;
  /**
   * Reference to a value set containing a list of codes representing permitted answers for the question.
   */
  options?: fhir.ReferenceArgs|undefined;
  /**
   * For a "choice" question, identifies one of the permitted answers for the question.
   */
  option?: fhir.CodingArgs[]|undefined;
  /**
   * It is useful to have "sub-questions", questions which normally appear when certain answers are given and which collect additional details.
   */
  group?: fhir.QuestionnaireGroupArgs[]|undefined;
}

/**
 * Must register answers to questions.
 */
export class QuestionnaireGroupQuestion extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'QuestionnaireGroupQuestion';
  /**
   * [[[QuestionnaireResponse]]] does not require omitted groups to be included and may have some groups that repeat, so linkage based on position alone is not sufficient.
   */
  public linkId?: fhir.FhirString|undefined;
  /**
   * Allows linking of questions (and their answers) to formal terminologies.
   */
  public concept: fhir.Coding[];
  /**
   * When including text for the questionnaire, each question may contain its actual question display text.
   */
  public text?: fhir.FhirString|undefined;
  /**
   * Defines the format in which the user is to be prompted for the answer.
   */
  public type?: fhir.FhirCode<AnswerFormatCodeType>|undefined;
  /**
   * If true, indicates that the question must be answered and have required groups within it also present.  If false, the question and any contained groups may be skipped when answering the questionnaire.
   */
  public required?: fhir.FhirBoolean|undefined;
  /**
   * Used for "check all that apply" types of questions or "list your top 3", etc.
   */
  public repeats?: fhir.FhirBoolean|undefined;
  /**
   * Reference to a value set containing a list of codes representing permitted answers for the question.
   */
  public options?: fhir.Reference|undefined;
  /**
   * For a "choice" question, identifies one of the permitted answers for the question.
   */
  public option: fhir.Coding[];
  /**
   * It is useful to have "sub-questions", questions which normally appear when certain answers are given and which collect additional details.
   */
  public group: fhir.QuestionnaireGroup[];
  /**
   * Default constructor for QuestionnaireGroupQuestion - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<QuestionnaireGroupQuestionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['linkId'] !== undefined) { this.linkId = new fhir.FhirString({value: source.linkId}, options); }
    if (source['_linkId']) {
      if (this.linkId) { this.linkId.addExtendedProperties(source._linkId!); }
      else { this.linkId = new fhir.FhirString(source._linkId as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['concept']) { this.concept = source.concept.map((x) => new fhir.Coding(x, options)); }
    else { this.concept = []; }
    if (source['text'] !== undefined) { this.text = new fhir.FhirString({value: source.text}, options); }
    if (source['_text']) {
      if (this.text) { this.text.addExtendedProperties(source._text!); }
      else { this.text = new fhir.FhirString(source._text as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['type'] !== undefined) { this.type = new fhir.FhirCode<AnswerFormatCodeType>({value: source.type}, options); }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<AnswerFormatCodeType>(source._type as Partial<fhir.FhirCode>, options); }
    }
    if (source['required'] !== undefined) { this.required = new fhir.FhirBoolean({value: source.required}, options); }
    if (source['_required']) {
      if (this.required) { this.required.addExtendedProperties(source._required!); }
      else { this.required = new fhir.FhirBoolean(source._required as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['repeats'] !== undefined) { this.repeats = new fhir.FhirBoolean({value: source.repeats}, options); }
    if (source['_repeats']) {
      if (this.repeats) { this.repeats.addExtendedProperties(source._repeats!); }
      else { this.repeats = new fhir.FhirBoolean(source._repeats as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['options']) { this.options = new fhir.Reference(source.options, options); }
    if (source['option']) { this.option = source.option.map((x) => new fhir.Coding(x, options)); }
    else { this.option = []; }
    if (source['group']) { this.group = source.group.map((x) => new fhir.QuestionnaireGroup(x, options)); }
    else { this.group = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Questionnaire.group.question' }
    iss.push(...this.vOS('linkId',exp));
    iss.push(...this.vOA('concept',exp));
    iss.push(...this.vOS('text',exp));
    iss.push(...this.vOSV('type',exp,'AnswerFormat',AnswerFormatVsValidation,'r'));
    iss.push(...this.vOS('required',exp));
    iss.push(...this.vOS('repeats',exp));
    iss.push(...this.vOS('options',exp));
    iss.push(...this.vOA('option',exp));
    iss.push(...this.vOA('group',exp));
    return iss;
  }
}
/**
 * Valid arguments for the QuestionnaireGroup type.
 */
export interface QuestionnaireGroupArgs extends fhir.BackboneElementArgs {
  /**
   * [[[QuestionnaireResponse]]] does not require omitted groups to be included and may have some groups that repeat, so linkage based on position alone is not sufficient.
   */
  linkId?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Questionnaire.group.linkId
   */
  _linkId?:fhir.FhirElementArgs;
  /**
   * When including text for the questionnaire with the answers, sections may have a section header.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Questionnaire.group.title
   */
  _title?:fhir.FhirElementArgs;
  /**
   * Allows linking of groups of questions (and complete Questionnaire resources) to formal terminologies.
   */
  concept?: fhir.CodingArgs[]|undefined;
  /**
   * When including text for the questionnaire, each section may contain additional explanations are background text.
   */
  text?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Questionnaire.group.text
   */
  _text?:fhir.FhirElementArgs;
  /**
   * If true, indicates that the group must be present and have required questions within it answered.  If false, the group may be skipped when answering the questionnaire.
   */
  required?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Questionnaire.group.required
   */
  _required?:fhir.FhirElementArgs;
  /**
   * Groups may be used to create set of (related) questions that can be repeated to give multiple answers to such a set.
   */
  repeats?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Questionnaire.group.repeats
   */
  _repeats?:fhir.FhirElementArgs;
  /**
   * Reports can consist of complex nested groups.
   */
  group?: fhir.QuestionnaireGroupArgs[]|undefined;
  /**
   * Must register answers to questions.
   */
  question?: fhir.QuestionnaireGroupQuestionArgs[]|undefined;
}

/**
 * Need to be able to logically group answers to grouped questions.
 */
export class QuestionnaireGroup extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'QuestionnaireGroup';
  /**
   * [[[QuestionnaireResponse]]] does not require omitted groups to be included and may have some groups that repeat, so linkage based on position alone is not sufficient.
   */
  public linkId?: fhir.FhirString|undefined;
  /**
   * When including text for the questionnaire with the answers, sections may have a section header.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * Allows linking of groups of questions (and complete Questionnaire resources) to formal terminologies.
   */
  public concept: fhir.Coding[];
  /**
   * When including text for the questionnaire, each section may contain additional explanations are background text.
   */
  public text?: fhir.FhirString|undefined;
  /**
   * If true, indicates that the group must be present and have required questions within it answered.  If false, the group may be skipped when answering the questionnaire.
   */
  public required?: fhir.FhirBoolean|undefined;
  /**
   * Groups may be used to create set of (related) questions that can be repeated to give multiple answers to such a set.
   */
  public repeats?: fhir.FhirBoolean|undefined;
  /**
   * Reports can consist of complex nested groups.
   */
  public group: fhir.QuestionnaireGroup[];
  /**
   * Must register answers to questions.
   */
  public question: fhir.QuestionnaireGroupQuestion[];
  /**
   * Default constructor for QuestionnaireGroup - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<QuestionnaireGroupArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['linkId'] !== undefined) { this.linkId = new fhir.FhirString({value: source.linkId}, options); }
    if (source['_linkId']) {
      if (this.linkId) { this.linkId.addExtendedProperties(source._linkId!); }
      else { this.linkId = new fhir.FhirString(source._linkId as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['title'] !== undefined) { this.title = new fhir.FhirString({value: source.title}, options); }
    if (source['_title']) {
      if (this.title) { this.title.addExtendedProperties(source._title!); }
      else { this.title = new fhir.FhirString(source._title as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['concept']) { this.concept = source.concept.map((x) => new fhir.Coding(x, options)); }
    else { this.concept = []; }
    if (source['text'] !== undefined) { this.text = new fhir.FhirString({value: source.text}, options); }
    if (source['_text']) {
      if (this.text) { this.text.addExtendedProperties(source._text!); }
      else { this.text = new fhir.FhirString(source._text as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['required'] !== undefined) { this.required = new fhir.FhirBoolean({value: source.required}, options); }
    if (source['_required']) {
      if (this.required) { this.required.addExtendedProperties(source._required!); }
      else { this.required = new fhir.FhirBoolean(source._required as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['repeats'] !== undefined) { this.repeats = new fhir.FhirBoolean({value: source.repeats}, options); }
    if (source['_repeats']) {
      if (this.repeats) { this.repeats.addExtendedProperties(source._repeats!); }
      else { this.repeats = new fhir.FhirBoolean(source._repeats as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['group']) { this.group = source.group.map((x) => new fhir.QuestionnaireGroup(x, options)); }
    else { this.group = []; }
    if (source['question']) { this.question = source.question.map((x) => new fhir.QuestionnaireGroupQuestion(x, options)); }
    else { this.question = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Questionnaire.group' }
    iss.push(...this.vOS('linkId',exp));
    iss.push(...this.vOS('title',exp));
    iss.push(...this.vOA('concept',exp));
    iss.push(...this.vOS('text',exp));
    iss.push(...this.vOS('required',exp));
    iss.push(...this.vOS('repeats',exp));
    iss.push(...this.vOA('group',exp));
    iss.push(...this.vOA('question',exp));
    return iss;
  }
}
/**
 * Valid arguments for the Questionnaire type.
 */
export interface QuestionnaireArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Questionnaire"|undefined;
  /**
   * Need to allow connection to a wider workflow.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * In some cases, separate resource instances might be created for each version (if an older version can be maintained once a new version exists).
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Questionnaire.version
   */
  _version?:fhir.FhirElementArgs;
  /**
   * The lifecycle status of the questionnaire as a whole.
   */
  status: fhir.FhirCode<QuestionnaireStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Questionnaire.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The date that this questionnaire was last changed.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Questionnaire.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Conveys responsibility for the questions and their organization and also helps evaluate the questionnaire's "authority".
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Questionnaire.publisher
   */
  _publisher?:fhir.FhirElementArgs;
  /**
   * Contact details to assist a user in finding and communicating with the publisher.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
  /**
   * Identifies the types of subjects that can be the subject of the questionnaire.
   */
  subjectType?: fhir.FhirCode[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: Questionnaire.subjectType
   */
  _subjectType?:(fhir.FhirElementArgs|null)[];
  /**
   * Need to be able to logically group answers to grouped questions.
   */
  group: fhir.QuestionnaireGroupArgs|null;
}

/**
 * A structured set of questions intended to guide the collection of answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.
 */
export class Questionnaire extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Questionnaire';
  /**
   * Resource Type Name
   */
  public override resourceType: "Questionnaire";
  /**
   * Need to allow connection to a wider workflow.
   */
  public identifier: fhir.Identifier[];
  /**
   * In some cases, separate resource instances might be created for each version (if an older version can be maintained once a new version exists).
   */
  public version?: fhir.FhirString|undefined;
  /**
   * The lifecycle status of the questionnaire as a whole.
   */
  public status: fhir.FhirCode<QuestionnaireStatusCodeType>|null;
  /**
   * The date that this questionnaire was last changed.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Conveys responsibility for the questions and their organization and also helps evaluate the questionnaire's "authority".
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * Contact details to assist a user in finding and communicating with the publisher.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * Identifies the types of subjects that can be the subject of the questionnaire.
   */
  public subjectType: fhir.FhirCode[];
  /**
   * Need to be able to logically group answers to grouped questions.
   */
  public group: fhir.QuestionnaireGroup|null;
  /**
   * Default constructor for Questionnaire - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<QuestionnaireArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Questionnaire';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['version'] !== undefined) { this.version = new fhir.FhirString({value: source.version}, options); }
    if (source['_version']) {
      if (this.version) { this.version.addExtendedProperties(source._version!); }
      else { this.version = new fhir.FhirString(source._version as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<QuestionnaireStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<QuestionnaireStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['date'] !== undefined) { this.date = new fhir.FhirDateTime({value: source.date}, options); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['publisher'] !== undefined) { this.publisher = new fhir.FhirString({value: source.publisher}, options); }
    if (source['_publisher']) {
      if (this.publisher) { this.publisher.addExtendedProperties(source._publisher!); }
      else { this.publisher = new fhir.FhirString(source._publisher as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x, options)); }
    else { this.telecom = []; }
    if (source['subjectType'] !== undefined) { this.subjectType = source.subjectType.map((x) => new fhir.FhirCode({value: x}, options)); }
    else { this.subjectType = []; }
    if (source['_subjectType']) {
      source._subjectType.forEach((x,i) => {
        if (this.subjectType.length >= i) { if (x) { this.subjectType[i].addExtendedProperties(x); } }
        else { if (x) { this.subjectType.push(new fhir.FhirCode(x as Partial<fhir.FhirCodeArgs>)); } }
      });
    }
    if (source['group']) { this.group = new fhir.QuestionnaireGroup(source.group, options); }
    else { this.group = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Questionnaire' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('version',exp));
    iss.push(...this.vRSV('status',exp,'QuestionnaireStatus',QuestionnaireStatusVsValidation,'r'));
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vOS('publisher',exp));
    iss.push(...this.vOA('telecom',exp));
    iss.push(...this.vOAV('subjectType',exp,'ResourceTypes',ResourceTypesVsValidation,'r'));
    iss.push(...this.vRS('group',exp));
    return iss;
  }
}
