// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: RequestGroup

import * as fhir from '../fhir.js';

// @ts-ignore
import { ActionConditionKindCodes,  ActionConditionKindCodeType } from '../fhirValueSets/ActionConditionKindCodes.js';
// @ts-ignore
import { ActionConditionKindVsValidation } from '../fhirValueSets/ActionConditionKindVsValidation.js';
// @ts-ignore
import { ActionRelationshipTypeCodes,  ActionRelationshipTypeCodeType } from '../fhirValueSets/ActionRelationshipTypeCodes.js';
// @ts-ignore
import { ActionRelationshipTypeVsValidation } from '../fhirValueSets/ActionRelationshipTypeVsValidation.js';
// @ts-ignore
import { ActionTypeCodes,  ActionTypeCodeType } from '../fhirValueSets/ActionTypeCodes.js';
// @ts-ignore
import { ActionTypeVsValidation } from '../fhirValueSets/ActionTypeVsValidation.js';
// @ts-ignore
import { ActionGroupingBehaviorCodes,  ActionGroupingBehaviorCodeType } from '../fhirValueSets/ActionGroupingBehaviorCodes.js';
// @ts-ignore
import { ActionGroupingBehaviorVsValidation } from '../fhirValueSets/ActionGroupingBehaviorVsValidation.js';
// @ts-ignore
import { ActionSelectionBehaviorCodes,  ActionSelectionBehaviorCodeType } from '../fhirValueSets/ActionSelectionBehaviorCodes.js';
// @ts-ignore
import { ActionSelectionBehaviorVsValidation } from '../fhirValueSets/ActionSelectionBehaviorVsValidation.js';
// @ts-ignore
import { ActionRequiredBehaviorCodes,  ActionRequiredBehaviorCodeType } from '../fhirValueSets/ActionRequiredBehaviorCodes.js';
// @ts-ignore
import { ActionRequiredBehaviorVsValidation } from '../fhirValueSets/ActionRequiredBehaviorVsValidation.js';
// @ts-ignore
import { ActionPrecheckBehaviorCodes,  ActionPrecheckBehaviorCodeType } from '../fhirValueSets/ActionPrecheckBehaviorCodes.js';
// @ts-ignore
import { ActionPrecheckBehaviorVsValidation } from '../fhirValueSets/ActionPrecheckBehaviorVsValidation.js';
// @ts-ignore
import { ActionCardinalityBehaviorCodes,  ActionCardinalityBehaviorCodeType } from '../fhirValueSets/ActionCardinalityBehaviorCodes.js';
// @ts-ignore
import { ActionCardinalityBehaviorVsValidation } from '../fhirValueSets/ActionCardinalityBehaviorVsValidation.js';
// @ts-ignore
import { RequestStatusCodes,  RequestStatusCodeType } from '../fhirValueSets/RequestStatusCodes.js';
// @ts-ignore
import { RequestStatusVsValidation } from '../fhirValueSets/RequestStatusVsValidation.js';
// @ts-ignore
import { RequestIntentCodes,  RequestIntentCodeType } from '../fhirValueSets/RequestIntentCodes.js';
// @ts-ignore
import { RequestIntentVsValidation } from '../fhirValueSets/RequestIntentVsValidation.js';
// @ts-ignore
import { RequestPriorityCodes,  RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
// @ts-ignore
import { RequestPriorityVsValidation } from '../fhirValueSets/RequestPriorityVsValidation.js';
/**
 * Valid arguments for the RequestGroupActionCondition type.
 */
export interface RequestGroupActionConditionArgs extends fhir.BackboneElementArgs {
  /**
   * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe when enter/exit criteria for an action.
   */
  kind: fhir.FhirCode<ActionConditionKindCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.action.condition.kind
   */
  _kind?:fhir.FhirElementArgs;
  /**
   * A brief, natural language description of the condition that effectively communicates the intended semantics.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.action.condition.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * The media type of the language for the expression.
   */
  language?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.action.condition.language
   */
  _language?:fhir.FhirElementArgs;
  /**
   * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
   */
  expression?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.action.condition.expression
   */
  _expression?:fhir.FhirElementArgs;
}

/**
 * An expression that describes applicability criteria, or start/stop conditions for the action.
 */
export class RequestGroupActionCondition extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'RequestGroupActionCondition';
  /**
   * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe when enter/exit criteria for an action.
   */
  public kind: fhir.FhirCode<ActionConditionKindCodeType>|null;
  /**
   * A brief, natural language description of the condition that effectively communicates the intended semantics.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * The media type of the language for the expression.
   */
  public language?: fhir.FhirString|undefined;
  /**
   * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
   */
  public expression?: fhir.FhirString|undefined;
  /**
   * Default constructor for RequestGroupActionCondition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<RequestGroupActionConditionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['kind']) { this.kind = new fhir.FhirCode<ActionConditionKindCodeType>({value: source.kind}); }
    else { this.kind = null; }
    if (source['_kind']) {
      if (this.kind) { this.kind.addExtendedProperties(source._kind!); }
      else { this.kind = new fhir.FhirCode<ActionConditionKindCodeType>(source._kind as Partial<fhir.FhirCode>); }
    }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['language']) { this.language = new fhir.FhirString({value: source.language}); }
    if (source['_language']) {
      if (this.language) { this.language.addExtendedProperties(source._language!); }
      else { this.language = new fhir.FhirString(source._language as Partial<fhir.FhirStringArgs>); }
    }
    if (source['expression']) { this.expression = new fhir.FhirString({value: source.expression}); }
    if (source['_expression']) {
      if (this.expression) { this.expression.addExtendedProperties(source._expression!); }
      else { this.expression = new fhir.FhirString(source._expression as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'RequestGroup.action.condition' }
    iss.push(...this.vRSV('kind',exp,'ActionConditionKind',ActionConditionKindVsValidation,'r'));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOS('language',exp));
    iss.push(...this.vOS('expression',exp));
    return iss;
  }
}
/**
 * Valid arguments for the RequestGroupActionRelatedAction type.
 */
export interface RequestGroupActionRelatedActionArgs extends fhir.BackboneElementArgs {
  /**
   * The element id of the action this is related to.
   */
  actionId: fhir.FhirId|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.action.relatedAction.actionId
   */
  _actionId?:fhir.FhirElementArgs;
  /**
   * The relationship of this action to the related action.
   */
  relationship: fhir.FhirCode<ActionRelationshipTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.action.relatedAction.relationship
   */
  _relationship?:fhir.FhirElementArgs;
  /**
   * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
   */
  offset?: fhir.Duration|fhir.Range|undefined;
  /**
   * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
   */
  offsetDuration?: fhir.DurationArgs|undefined;
  /**
   * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
   */
  offsetRange?: fhir.RangeArgs|undefined;
}

/**
 * A relationship to another action such as "before" or "30-60 minutes after start of".
 */
export class RequestGroupActionRelatedAction extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'RequestGroupActionRelatedAction';
  /**
   * The element id of the action this is related to.
   */
  public actionId: fhir.FhirId|null;
  /**
   * The relationship of this action to the related action.
   */
  public relationship: fhir.FhirCode<ActionRelationshipTypeCodeType>|null;
  /**
   * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
   */
  public offset?: (fhir.Duration|fhir.Range)|undefined;
  /**
   * Internal flag to properly serialize choice-type element RequestGroup.action.relatedAction.offset[x]
   */
  protected static readonly _fts_offsetIsChoice:true = true;
  /**
   * Default constructor for RequestGroupActionRelatedAction - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<RequestGroupActionRelatedActionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['actionId']) { this.actionId = new fhir.FhirId({value: source.actionId}); }
    else { this.actionId = null; }
    if (source['_actionId']) {
      if (this.actionId) { this.actionId.addExtendedProperties(source._actionId!); }
      else { this.actionId = new fhir.FhirId(source._actionId as Partial<fhir.FhirIdArgs>); }
    }
    if (source['relationship']) { this.relationship = new fhir.FhirCode<ActionRelationshipTypeCodeType>({value: source.relationship}); }
    else { this.relationship = null; }
    if (source['_relationship']) {
      if (this.relationship) { this.relationship.addExtendedProperties(source._relationship!); }
      else { this.relationship = new fhir.FhirCode<ActionRelationshipTypeCodeType>(source._relationship as Partial<fhir.FhirCode>); }
    }
    if (source['offset']) { this.offset = source.offset; }
    else if (source['offsetDuration']) { this.offset = new fhir.Duration(source.offsetDuration); }
    else if (source['offsetRange']) { this.offset = new fhir.Range(source.offsetRange); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'RequestGroup.action.relatedAction' }
    iss.push(...this.vRS('actionId',exp));
    iss.push(...this.vRSV('relationship',exp,'ActionRelationshipType',ActionRelationshipTypeVsValidation,'r'));
    iss.push(...this.vOS('offset',exp));
    return iss;
  }
}
/**
 * Valid arguments for the RequestGroupAction type.
 */
export interface RequestGroupActionArgs extends fhir.BackboneElementArgs {
  /**
   * A user-visible label for the action.
   */
  label?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.action.label
   */
  _label?:fhir.FhirElementArgs;
  /**
   * The title of the action displayed to a user.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.action.title
   */
  _title?:fhir.FhirElementArgs;
  /**
   * A short description of the action used to provide a summary to display to the user.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.action.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that may not be capable of interpreting it dynamically.
   */
  textEquivalent?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.action.textEquivalent
   */
  _textEquivalent?:fhir.FhirElementArgs;
  /**
   * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a the section of a documentation template.
   */
  code?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
   */
  documentation?: fhir.RelatedArtifactArgs[]|undefined;
  /**
   * An expression that describes applicability criteria, or start/stop conditions for the action.
   */
  condition?: fhir.RequestGroupActionConditionArgs[]|undefined;
  /**
   * A relationship to another action such as "before" or "30-60 minutes after start of".
   */
  relatedAction?: fhir.RequestGroupActionRelatedActionArgs[]|undefined;
  /**
   * An optional value describing when the action should be performed.
   */
  timing?: fhir.FhirDateTime|fhir.Period|fhir.Duration|fhir.Range|fhir.Timing|undefined;
  /**
   * An optional value describing when the action should be performed.
   */
  timingDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * An optional value describing when the action should be performed.
   */
  timingPeriod?: fhir.PeriodArgs|undefined;
  /**
   * An optional value describing when the action should be performed.
   */
  timingDuration?: fhir.DurationArgs|undefined;
  /**
   * An optional value describing when the action should be performed.
   */
  timingRange?: fhir.RangeArgs|undefined;
  /**
   * An optional value describing when the action should be performed.
   */
  timingTiming?: fhir.TimingArgs|undefined;
  /**
   * The participant that should perform or be responsible for this action.
   */
  participant?: fhir.ReferenceArgs[]|undefined;
  /**
   * The type of action to perform (create, update, remove).
   */
  type?: fhir.CodingArgs|undefined;
  /**
   * Defines the grouping behavior for the action and its children.
   */
  groupingBehavior?: fhir.FhirCode<ActionGroupingBehaviorCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.action.groupingBehavior
   */
  _groupingBehavior?:fhir.FhirElementArgs;
  /**
   * Defines the selection behavior for the action and its children.
   */
  selectionBehavior?: fhir.FhirCode<ActionSelectionBehaviorCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.action.selectionBehavior
   */
  _selectionBehavior?:fhir.FhirElementArgs;
  /**
   * Defines the requiredness behavior for the action.
   */
  requiredBehavior?: fhir.FhirCode<ActionRequiredBehaviorCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.action.requiredBehavior
   */
  _requiredBehavior?:fhir.FhirElementArgs;
  /**
   * Defines whether the action should usually be preselected.
   */
  precheckBehavior?: fhir.FhirCode<ActionPrecheckBehaviorCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.action.precheckBehavior
   */
  _precheckBehavior?:fhir.FhirElementArgs;
  /**
   * Defines whether the action can be selected multiple times.
   */
  cardinalityBehavior?: fhir.FhirCode<ActionCardinalityBehaviorCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.action.cardinalityBehavior
   */
  _cardinalityBehavior?:fhir.FhirElementArgs;
  /**
   * The target resource SHALL be a [Request](request.html) resource with a Request.intent set to "option".
   */
  resource?: fhir.ReferenceArgs|undefined;
  /**
   * Sub actions.
   */
  action?: fhir.RequestGroupActionArgs[]|undefined;
}

/**
 * The actions, if any, produced by the evaluation of the artifact.
 */
export class RequestGroupAction extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'RequestGroupAction';
  /**
   * A user-visible label for the action.
   */
  public label?: fhir.FhirString|undefined;
  /**
   * The title of the action displayed to a user.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * A short description of the action used to provide a summary to display to the user.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that may not be capable of interpreting it dynamically.
   */
  public textEquivalent?: fhir.FhirString|undefined;
  /**
   * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a the section of a documentation template.
   */
  public code: fhir.CodeableConcept[];
  /**
   * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
   */
  public documentation: fhir.RelatedArtifact[];
  /**
   * An expression that describes applicability criteria, or start/stop conditions for the action.
   */
  public condition: fhir.RequestGroupActionCondition[];
  /**
   * A relationship to another action such as "before" or "30-60 minutes after start of".
   */
  public relatedAction: fhir.RequestGroupActionRelatedAction[];
  /**
   * An optional value describing when the action should be performed.
   */
  public timing?: (fhir.FhirDateTime|fhir.Period|fhir.Duration|fhir.Range|fhir.Timing)|undefined;
  /**
   * Internal flag to properly serialize choice-type element RequestGroup.action.timing[x]
   */
  protected static readonly _fts_timingIsChoice:true = true;
  /**
   * The participant that should perform or be responsible for this action.
   */
  public participant: fhir.Reference[];
  /**
   * The type of action to perform (create, update, remove).
   */
  public type?: fhir.Coding|undefined;
  /**
   * Defines the grouping behavior for the action and its children.
   */
  public groupingBehavior?: fhir.FhirCode<ActionGroupingBehaviorCodeType>|undefined;
  /**
   * Defines the selection behavior for the action and its children.
   */
  public selectionBehavior?: fhir.FhirCode<ActionSelectionBehaviorCodeType>|undefined;
  /**
   * Defines the requiredness behavior for the action.
   */
  public requiredBehavior?: fhir.FhirCode<ActionRequiredBehaviorCodeType>|undefined;
  /**
   * Defines whether the action should usually be preselected.
   */
  public precheckBehavior?: fhir.FhirCode<ActionPrecheckBehaviorCodeType>|undefined;
  /**
   * Defines whether the action can be selected multiple times.
   */
  public cardinalityBehavior?: fhir.FhirCode<ActionCardinalityBehaviorCodeType>|undefined;
  /**
   * The target resource SHALL be a [Request](request.html) resource with a Request.intent set to "option".
   */
  public resource?: fhir.Reference|undefined;
  /**
   * Sub actions.
   */
  public action: fhir.RequestGroupAction[];
  /**
   * Default constructor for RequestGroupAction - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<RequestGroupActionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['label']) { this.label = new fhir.FhirString({value: source.label}); }
    if (source['_label']) {
      if (this.label) { this.label.addExtendedProperties(source._label!); }
      else { this.label = new fhir.FhirString(source._label as Partial<fhir.FhirStringArgs>); }
    }
    if (source['title']) { this.title = new fhir.FhirString({value: source.title}); }
    if (source['_title']) {
      if (this.title) { this.title.addExtendedProperties(source._title!); }
      else { this.title = new fhir.FhirString(source._title as Partial<fhir.FhirStringArgs>); }
    }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['textEquivalent']) { this.textEquivalent = new fhir.FhirString({value: source.textEquivalent}); }
    if (source['_textEquivalent']) {
      if (this.textEquivalent) { this.textEquivalent.addExtendedProperties(source._textEquivalent!); }
      else { this.textEquivalent = new fhir.FhirString(source._textEquivalent as Partial<fhir.FhirStringArgs>); }
    }
    if (source['code']) { this.code = source.code.map((x) => new fhir.CodeableConcept(x)); }
    else { this.code = []; }
    if (source['documentation']) { this.documentation = source.documentation.map((x) => new fhir.RelatedArtifact(x)); }
    else { this.documentation = []; }
    if (source['condition']) { this.condition = source.condition.map((x) => new fhir.RequestGroupActionCondition(x)); }
    else { this.condition = []; }
    if (source['relatedAction']) { this.relatedAction = source.relatedAction.map((x) => new fhir.RequestGroupActionRelatedAction(x)); }
    else { this.relatedAction = []; }
    if (source['timing']) { this.timing = source.timing; }
    else if (source['timingDateTime']) { this.timing = new fhir.FhirDateTime({value: source.timingDateTime}); }
    else if (source['timingPeriod']) { this.timing = new fhir.Period(source.timingPeriod); }
    else if (source['timingDuration']) { this.timing = new fhir.Duration(source.timingDuration); }
    else if (source['timingRange']) { this.timing = new fhir.Range(source.timingRange); }
    else if (source['timingTiming']) { this.timing = new fhir.Timing(source.timingTiming); }
    if (source['participant']) { this.participant = source.participant.map((x) => new fhir.Reference(x)); }
    else { this.participant = []; }
    if (source['type']) { this.type = new fhir.Coding(source.type); }
    if (source['groupingBehavior']) { this.groupingBehavior = new fhir.FhirCode<ActionGroupingBehaviorCodeType>({value: source.groupingBehavior}); }
    if (source['_groupingBehavior']) {
      if (this.groupingBehavior) { this.groupingBehavior.addExtendedProperties(source._groupingBehavior!); }
      else { this.groupingBehavior = new fhir.FhirCode<ActionGroupingBehaviorCodeType>(source._groupingBehavior as Partial<fhir.FhirCode>); }
    }
    if (source['selectionBehavior']) { this.selectionBehavior = new fhir.FhirCode<ActionSelectionBehaviorCodeType>({value: source.selectionBehavior}); }
    if (source['_selectionBehavior']) {
      if (this.selectionBehavior) { this.selectionBehavior.addExtendedProperties(source._selectionBehavior!); }
      else { this.selectionBehavior = new fhir.FhirCode<ActionSelectionBehaviorCodeType>(source._selectionBehavior as Partial<fhir.FhirCode>); }
    }
    if (source['requiredBehavior']) { this.requiredBehavior = new fhir.FhirCode<ActionRequiredBehaviorCodeType>({value: source.requiredBehavior}); }
    if (source['_requiredBehavior']) {
      if (this.requiredBehavior) { this.requiredBehavior.addExtendedProperties(source._requiredBehavior!); }
      else { this.requiredBehavior = new fhir.FhirCode<ActionRequiredBehaviorCodeType>(source._requiredBehavior as Partial<fhir.FhirCode>); }
    }
    if (source['precheckBehavior']) { this.precheckBehavior = new fhir.FhirCode<ActionPrecheckBehaviorCodeType>({value: source.precheckBehavior}); }
    if (source['_precheckBehavior']) {
      if (this.precheckBehavior) { this.precheckBehavior.addExtendedProperties(source._precheckBehavior!); }
      else { this.precheckBehavior = new fhir.FhirCode<ActionPrecheckBehaviorCodeType>(source._precheckBehavior as Partial<fhir.FhirCode>); }
    }
    if (source['cardinalityBehavior']) { this.cardinalityBehavior = new fhir.FhirCode<ActionCardinalityBehaviorCodeType>({value: source.cardinalityBehavior}); }
    if (source['_cardinalityBehavior']) {
      if (this.cardinalityBehavior) { this.cardinalityBehavior.addExtendedProperties(source._cardinalityBehavior!); }
      else { this.cardinalityBehavior = new fhir.FhirCode<ActionCardinalityBehaviorCodeType>(source._cardinalityBehavior as Partial<fhir.FhirCode>); }
    }
    if (source['resource']) { this.resource = new fhir.Reference(source.resource); }
    if (source['action']) { this.action = source.action.map((x) => new fhir.RequestGroupAction(x)); }
    else { this.action = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'RequestGroup.action' }
    iss.push(...this.vOS('label',exp));
    iss.push(...this.vOS('title',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOS('textEquivalent',exp));
    iss.push(...this.vOA('code',exp));
    iss.push(...this.vOA('documentation',exp));
    iss.push(...this.vOA('condition',exp));
    iss.push(...this.vOA('relatedAction',exp));
    iss.push(...this.vOS('timing',exp));
    iss.push(...this.vOA('participant',exp));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOSV('groupingBehavior',exp,'ActionGroupingBehavior',ActionGroupingBehaviorVsValidation,'r'));
    iss.push(...this.vOSV('selectionBehavior',exp,'ActionSelectionBehavior',ActionSelectionBehaviorVsValidation,'r'));
    iss.push(...this.vOSV('requiredBehavior',exp,'ActionRequiredBehavior',ActionRequiredBehaviorVsValidation,'r'));
    iss.push(...this.vOSV('precheckBehavior',exp,'ActionPrecheckBehavior',ActionPrecheckBehaviorVsValidation,'r'));
    iss.push(...this.vOSV('cardinalityBehavior',exp,'ActionCardinalityBehavior',ActionCardinalityBehaviorVsValidation,'r'));
    iss.push(...this.vOS('resource',exp));
    iss.push(...this.vOA('action',exp));
    return iss;
  }
}
/**
 * Valid arguments for the RequestGroup type.
 */
export interface RequestGroupArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "RequestGroup"|undefined;
  /**
   * Allows a service to provide a unique, business identifier for the request.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * A protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
   */
  definition?: fhir.ReferenceArgs[]|undefined;
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this request.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
   */
  replaces?: fhir.ReferenceArgs[]|undefined;
  /**
   * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
   */
  groupIdentifier?: fhir.IdentifierArgs|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<RequestStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
   */
  intent: fhir.FhirCode<RequestIntentCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.intent
   */
  _intent?:fhir.FhirElementArgs;
  /**
   * Indicates how quickly the request should be addressed with respect to other requests.
   */
  priority?: fhir.FhirCode<RequestPriorityCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.priority
   */
  _priority?:fhir.FhirElementArgs;
  /**
   * The subject for which the request group was created.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * Describes the context of the request group, if any.
   */
  context?: fhir.ReferenceArgs|undefined;
  /**
   * Indicates when the request group was created.
   */
  authoredOn?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: RequestGroup.authoredOn
   */
  _authoredOn?:fhir.FhirElementArgs;
  /**
   * Provides a reference to the author of the request group.
   */
  author?: fhir.ReferenceArgs|undefined;
  /**
   * Indicates the reason the request group was created. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
   */
  reason?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Indicates the reason the request group was created. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
   */
  reasonCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates the reason the request group was created. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
   */
  reasonReference?: fhir.ReferenceArgs|undefined;
  /**
   * Provides a mechanism to communicate additional information about the response.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * The actions, if any, produced by the evaluation of the artifact.
   */
  action?: fhir.RequestGroupActionArgs[]|undefined;
}

/**
 * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 */
export class RequestGroup extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'RequestGroup';
  /**
   * Resource Type Name
   */
  public override resourceType: "RequestGroup";
  /**
   * Allows a service to provide a unique, business identifier for the request.
   */
  public identifier: fhir.Identifier[];
  /**
   * A protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
   */
  public definition: fhir.Reference[];
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this request.
   */
  public basedOn: fhir.Reference[];
  /**
   * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
   */
  public replaces: fhir.Reference[];
  /**
   * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
   */
  public groupIdentifier?: fhir.Identifier|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<RequestStatusCodeType>|null;
  /**
   * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
   */
  public intent: fhir.FhirCode<RequestIntentCodeType>|null;
  /**
   * Indicates how quickly the request should be addressed with respect to other requests.
   */
  public priority?: fhir.FhirCode<RequestPriorityCodeType>|undefined;
  /**
   * The subject for which the request group was created.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Describes the context of the request group, if any.
   */
  public context?: fhir.Reference|undefined;
  /**
   * Indicates when the request group was created.
   */
  public authoredOn?: fhir.FhirDateTime|undefined;
  /**
   * Provides a reference to the author of the request group.
   */
  public author?: fhir.Reference|undefined;
  /**
   * Indicates the reason the request group was created. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
   */
  public reason?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element RequestGroup.reason[x]
   */
  protected static readonly _fts_reasonIsChoice:true = true;
  /**
   * Provides a mechanism to communicate additional information about the response.
   */
  public note: fhir.Annotation[];
  /**
   * The actions, if any, produced by the evaluation of the artifact.
   */
  public action: fhir.RequestGroupAction[];
  /**
   * Default constructor for RequestGroup - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<RequestGroupArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'RequestGroup';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['definition']) { this.definition = source.definition.map((x) => new fhir.Reference(x)); }
    else { this.definition = []; }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    else { this.basedOn = []; }
    if (source['replaces']) { this.replaces = source.replaces.map((x) => new fhir.Reference(x)); }
    else { this.replaces = []; }
    if (source['groupIdentifier']) { this.groupIdentifier = new fhir.Identifier(source.groupIdentifier); }
    if (source['status']) { this.status = new fhir.FhirCode<RequestStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<RequestStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['intent']) { this.intent = new fhir.FhirCode<RequestIntentCodeType>({value: source.intent}); }
    else { this.intent = null; }
    if (source['_intent']) {
      if (this.intent) { this.intent.addExtendedProperties(source._intent!); }
      else { this.intent = new fhir.FhirCode<RequestIntentCodeType>(source._intent as Partial<fhir.FhirCode>); }
    }
    if (source['priority']) { this.priority = new fhir.FhirCode<RequestPriorityCodeType>({value: source.priority}); }
    if (source['_priority']) {
      if (this.priority) { this.priority.addExtendedProperties(source._priority!); }
      else { this.priority = new fhir.FhirCode<RequestPriorityCodeType>(source._priority as Partial<fhir.FhirCode>); }
    }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['context']) { this.context = new fhir.Reference(source.context); }
    if (source['authoredOn']) { this.authoredOn = new fhir.FhirDateTime({value: source.authoredOn}); }
    if (source['_authoredOn']) {
      if (this.authoredOn) { this.authoredOn.addExtendedProperties(source._authoredOn!); }
      else { this.authoredOn = new fhir.FhirDateTime(source._authoredOn as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['author']) { this.author = new fhir.Reference(source.author); }
    if (source['reason']) { this.reason = source.reason; }
    else if (source['reasonCodeableConcept']) { this.reason = new fhir.CodeableConcept(source.reasonCodeableConcept); }
    else if (source['reasonReference']) { this.reason = new fhir.Reference(source.reasonReference); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
    if (source['action']) { this.action = source.action.map((x) => new fhir.RequestGroupAction(x)); }
    else { this.action = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'RequestGroup' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOA('definition',exp));
    iss.push(...this.vOA('basedOn',exp));
    iss.push(...this.vOA('replaces',exp));
    iss.push(...this.vOS('groupIdentifier',exp));
    iss.push(...this.vRSV('status',exp,'RequestStatus',RequestStatusVsValidation,'r'));
    iss.push(...this.vRSV('intent',exp,'RequestIntent',RequestIntentVsValidation,'r'));
    iss.push(...this.vOSV('priority',exp,'RequestPriority',RequestPriorityVsValidation,'r'));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vOS('context',exp));
    iss.push(...this.vOS('authoredOn',exp));
    iss.push(...this.vOS('author',exp));
    iss.push(...this.vOS('reason',exp));
    iss.push(...this.vOA('note',exp));
    iss.push(...this.vOA('action',exp));
    return iss;
  }
}