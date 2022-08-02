// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: EvidenceVariable

import * as fhir from '../fhir.js';

// @ts-ignore
import { CharacteristicMethodCodes,  CharacteristicMethodCodeType } from '../fhirValueSets/CharacteristicMethodCodes.js';
// @ts-ignore
import { CharacteristicMethodVsValidation } from '../fhirValueSets/CharacteristicMethodVsValidation.js';
// @ts-ignore
import { GroupMeasureCodes,  GroupMeasureCodeType } from '../fhirValueSets/GroupMeasureCodes.js';
// @ts-ignore
import { GroupMeasureVsValidation } from '../fhirValueSets/GroupMeasureVsValidation.js';
// @ts-ignore
import { PublicationStatusCodes,  PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
// @ts-ignore
import { PublicationStatusVsValidation } from '../fhirValueSets/PublicationStatusVsValidation.js';
// @ts-ignore
import { CharacteristicCombinationCodes,  CharacteristicCombinationCodeType } from '../fhirValueSets/CharacteristicCombinationCodes.js';
// @ts-ignore
import { CharacteristicCombinationVsValidation } from '../fhirValueSets/CharacteristicCombinationVsValidation.js';
// @ts-ignore
import { VariableHandlingCodes,  VariableHandlingCodeType } from '../fhirValueSets/VariableHandlingCodes.js';
// @ts-ignore
import { VariableHandlingVsValidation } from '../fhirValueSets/VariableHandlingVsValidation.js';
/**
 * Valid arguments for the EvidenceVariableCharacteristicTimeFromStart type.
 */
export interface EvidenceVariableCharacteristicTimeFromStartArgs extends fhir.BackboneElementArgs {
  /**
   * A short, natural language description.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.characteristic.timeFromStart.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Used to express the observation at a defined amount of time after the study start.
   */
  quantity?: fhir.QuantityArgs|undefined;
  /**
   * Used to express the observation within a period after the study start.
   */
  range?: fhir.RangeArgs|undefined;
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * Indicates duration, period, or point of observation from the participant's study entry.
 */
export class EvidenceVariableCharacteristicTimeFromStart extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EvidenceVariableCharacteristicTimeFromStart';
  /**
   * A short, natural language description.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Used to express the observation at a defined amount of time after the study start.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * Used to express the observation within a period after the study start.
   */
  public range?: fhir.Range|undefined;
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  public note: fhir.Annotation[];
  /**
   * Default constructor for EvidenceVariableCharacteristicTimeFromStart - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EvidenceVariableCharacteristicTimeFromStartArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity); }
    if (source['range']) { this.range = new fhir.Range(source.range); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'EvidenceVariable.characteristic.timeFromStart' }
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOS('quantity',exp));
    iss.push(...this.vOS('range',exp));
    iss.push(...this.vOA('note',exp));
    return iss;
  }
}
/**
 * Valid arguments for the EvidenceVariableCharacteristic type.
 */
export interface EvidenceVariableCharacteristicArgs extends fhir.BackboneElementArgs {
  /**
   * A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.characteristic.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definition?: fhir.Reference|fhir.FhirCanonical|fhir.CodeableConcept|fhir.Expression|undefined;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionReference?: fhir.ReferenceArgs|undefined;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionCanonical?: fhir.FhirCanonical|string|undefined;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionExpression?: fhir.ExpressionArgs|undefined;
  /**
   * Method used for describing characteristic.
   */
  method?: fhir.CodeableConceptArgs|undefined;
  /**
   * Device used for determining characteristic.
   */
  device?: fhir.ReferenceArgs|undefined;
  /**
   * When true, members with this characteristic are excluded from the element.
   */
  exclude?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.characteristic.exclude
   */
  _exclude?:fhir.FhirElementArgs;
  /**
   * Indicates duration, period, or point of observation from the participant's study entry.
   */
  timeFromStart?: fhir.EvidenceVariableCharacteristicTimeFromStartArgs|undefined;
  /**
   * Indicates how elements are aggregated within the study effective period.
   */
  groupMeasure?: fhir.FhirCode<GroupMeasureCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.characteristic.groupMeasure
   */
  _groupMeasure?:fhir.FhirElementArgs;
}

/**
 * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 */
export class EvidenceVariableCharacteristic extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EvidenceVariableCharacteristic';
  /**
   * A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  public definition: (fhir.Reference|fhir.FhirCanonical|fhir.CodeableConcept|fhir.Expression)|null;
  /**
   * Internal flag to properly serialize choice-type element EvidenceVariable.characteristic.definition[x]
   */
  protected static readonly _fts_definitionIsChoice:true = true;
  /**
   * Method used for describing characteristic.
   */
  public method?: fhir.CodeableConcept|undefined;
  /**
   * Device used for determining characteristic.
   */
  public device?: fhir.Reference|undefined;
  /**
   * When true, members with this characteristic are excluded from the element.
   */
  public exclude?: fhir.FhirBoolean|undefined;
  /**
   * Indicates duration, period, or point of observation from the participant's study entry.
   */
  public timeFromStart?: fhir.EvidenceVariableCharacteristicTimeFromStart|undefined;
  /**
   * Indicates how elements are aggregated within the study effective period.
   */
  public groupMeasure?: fhir.FhirCode<GroupMeasureCodeType>|undefined;
  /**
   * Default constructor for EvidenceVariableCharacteristic - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EvidenceVariableCharacteristicArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['definition']) { this.definition = source.definition; }
    else if (source['definitionReference']) { this.definition = new fhir.Reference(source.definitionReference); }
    else if (source['definitionCanonical']) { this.definition = new fhir.FhirCanonical({value: source.definitionCanonical}); }
    else if (source['definitionCodeableConcept']) { this.definition = new fhir.CodeableConcept(source.definitionCodeableConcept); }
    else if (source['definitionExpression']) { this.definition = new fhir.Expression(source.definitionExpression); }
    else { this.definition = null; }
    if (source['method']) { this.method = new fhir.CodeableConcept(source.method); }
    if (source['device']) { this.device = new fhir.Reference(source.device); }
    if (source['exclude']) { this.exclude = new fhir.FhirBoolean({value: source.exclude}); }
    if (source['_exclude']) {
      if (this.exclude) { this.exclude.addExtendedProperties(source._exclude!); }
      else { this.exclude = new fhir.FhirBoolean(source._exclude as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['timeFromStart']) { this.timeFromStart = new fhir.EvidenceVariableCharacteristicTimeFromStart(source.timeFromStart); }
    if (source['groupMeasure']) { this.groupMeasure = new fhir.FhirCode<GroupMeasureCodeType>({value: source.groupMeasure}); }
    if (source['_groupMeasure']) {
      if (this.groupMeasure) { this.groupMeasure.addExtendedProperties(source._groupMeasure!); }
      else { this.groupMeasure = new fhir.FhirCode<GroupMeasureCodeType>(source._groupMeasure as Partial<fhir.FhirCode>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'EvidenceVariable.characteristic' }
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vRS('definition',exp));
    iss.push(...this.vOS('method',exp));
    iss.push(...this.vOS('device',exp));
    iss.push(...this.vOS('exclude',exp));
    iss.push(...this.vOS('timeFromStart',exp));
    iss.push(...this.vOSV('groupMeasure',exp,'GroupMeasure',GroupMeasureVsValidation,'r'));
    return iss;
  }
}
/**
 * Valid arguments for the EvidenceVariableCategory type.
 */
export interface EvidenceVariableCategoryArgs extends fhir.BackboneElementArgs {
  /**
   * A human-readable title or representation of the grouping.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.category.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Value or set of values that define the grouping.
   */
  value?: fhir.CodeableConcept|fhir.Quantity|fhir.Range|undefined;
  /**
   * Value or set of values that define the grouping.
   */
  valueCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Value or set of values that define the grouping.
   */
  valueQuantity?: fhir.QuantityArgs|undefined;
  /**
   * Value or set of values that define the grouping.
   */
  valueRange?: fhir.RangeArgs|undefined;
}

/**
 * A grouping (or set of values) described along with other groupings to specify the set of groupings allowed for the variable.
 */
export class EvidenceVariableCategory extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EvidenceVariableCategory';
  /**
   * A human-readable title or representation of the grouping.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * Value or set of values that define the grouping.
   */
  public value?: (fhir.CodeableConcept|fhir.Quantity|fhir.Range)|undefined;
  /**
   * Internal flag to properly serialize choice-type element EvidenceVariable.category.value[x]
   */
  protected static readonly _fts_valueIsChoice:true = true;
  /**
   * Default constructor for EvidenceVariableCategory - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EvidenceVariableCategoryArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['value']) { this.value = source.value; }
    else if (source['valueCodeableConcept']) { this.value = new fhir.CodeableConcept(source.valueCodeableConcept); }
    else if (source['valueQuantity']) { this.value = new fhir.Quantity(source.valueQuantity); }
    else if (source['valueRange']) { this.value = new fhir.Range(source.valueRange); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'EvidenceVariable.category' }
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOS('value',exp));
    return iss;
  }
}
/**
 * Valid arguments for the EvidenceVariable type.
 */
export interface EvidenceVariableArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "EvidenceVariable"|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this evidence variable outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * There may be different evidence variable instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the evidence variable with the format [url]|[version].
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.version
   */
  _version?:fhir.FhirElementArgs;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.title
   */
  _title?:fhir.FhirElementArgs;
  /**
   * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
   */
  shortTitle?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.shortTitle
   */
  _shortTitle?:fhir.FhirElementArgs;
  /**
   * An explanatory or alternate title for the EvidenceVariable giving additional information about its content.
   */
  subtitle?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.subtitle
   */
  _subtitle?:fhir.FhirElementArgs;
  /**
   * Allows filtering of evidence variables that are appropriate for use versus not.
   */
  status: fhir.FhirCode<PublicationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the evidence variable. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * This description can be used to capture details such as why the evidence variable was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence variable as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence variable is presumed to be the predominant language in the place the evidence variable was created).
   */
  description?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhir.UsageContextArgs[]|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the evidence variable is the organization or individual primarily responsible for the maintenance and upkeep of the evidence variable. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence variable. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.publisher
   */
  _publisher?:fhir.FhirElementArgs;
  /**
   * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
  /**
   * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
   */
  author?: fhir.ContactDetailArgs[]|undefined;
  /**
   * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
   */
  editor?: fhir.ContactDetailArgs[]|undefined;
  /**
   * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
   */
  reviewer?: fhir.ContactDetailArgs[]|undefined;
  /**
   * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
   */
  endorser?: fhir.ContactDetailArgs[]|undefined;
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  relatedArtifact?: fhir.RelatedArtifactArgs[]|undefined;
  /**
   * True if the actual variable measured, false if a conceptual representation of the intended variable.
   */
  actual?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.actual
   */
  _actual?:fhir.FhirElementArgs;
  /**
   * Used to specify if two or more characteristics are combined with OR or AND.
   */
  characteristicCombination?: fhir.FhirCode<CharacteristicCombinationCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.characteristicCombination
   */
  _characteristicCombination?:fhir.FhirElementArgs;
  /**
   * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
   */
  characteristic?: fhir.EvidenceVariableCharacteristicArgs[]|undefined;
  /**
   * Used for an outcome to classify.
   */
  handling?: fhir.FhirCode<VariableHandlingCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: EvidenceVariable.handling
   */
  _handling?:fhir.FhirElementArgs;
  /**
   * A grouping (or set of values) described along with other groupings to specify the set of groupings allowed for the variable.
   */
  category?: fhir.EvidenceVariableCategoryArgs[]|undefined;
}

/**
 * The EvidenceVariable resource describes an element that knowledge (Evidence) is about.
 */
export class EvidenceVariable extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EvidenceVariable';
  /**
   * Resource Type Name
   */
  public override resourceType: "EvidenceVariable";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this evidence variable outside of FHIR, where it is not possible to use the logical URI.
   */
  public identifier: fhir.Identifier[];
  /**
   * There may be different evidence variable instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the evidence variable with the format [url]|[version].
   */
  public version?: fhir.FhirString|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
   */
  public shortTitle?: fhir.FhirString|undefined;
  /**
   * An explanatory or alternate title for the EvidenceVariable giving additional information about its content.
   */
  public subtitle?: fhir.FhirString|undefined;
  /**
   * Allows filtering of evidence variables that are appropriate for use versus not.
   */
  public status: fhir.FhirCode<PublicationStatusCodeType>|null;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the evidence variable. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * This description can be used to capture details such as why the evidence variable was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence variable as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence variable is presumed to be the predominant language in the place the evidence variable was created).
   */
  public description?: fhir.FhirMarkdown|undefined;
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  public note: fhir.Annotation[];
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  public useContext: fhir.UsageContext[];
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the evidence variable is the organization or individual primarily responsible for the maintenance and upkeep of the evidence variable. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence variable. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
   */
  public contact: fhir.ContactDetail[];
  /**
   * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
   */
  public author: fhir.ContactDetail[];
  /**
   * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
   */
  public editor: fhir.ContactDetail[];
  /**
   * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
   */
  public reviewer: fhir.ContactDetail[];
  /**
   * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
   */
  public endorser: fhir.ContactDetail[];
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  public relatedArtifact: fhir.RelatedArtifact[];
  /**
   * True if the actual variable measured, false if a conceptual representation of the intended variable.
   */
  public actual?: fhir.FhirBoolean|undefined;
  /**
   * Used to specify if two or more characteristics are combined with OR or AND.
   */
  public characteristicCombination?: fhir.FhirCode<CharacteristicCombinationCodeType>|undefined;
  /**
   * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
   */
  public characteristic: fhir.EvidenceVariableCharacteristic[];
  /**
   * Used for an outcome to classify.
   */
  public handling?: fhir.FhirCode<VariableHandlingCodeType>|undefined;
  /**
   * A grouping (or set of values) described along with other groupings to specify the set of groupings allowed for the variable.
   */
  public category: fhir.EvidenceVariableCategory[];
  /**
   * Default constructor for EvidenceVariable - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EvidenceVariableArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'EvidenceVariable';
    if (source['url']) { this.url = new fhir.FhirUri({value: source.url}); }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>); }
    }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['version']) { this.version = new fhir.FhirString({value: source.version}); }
    if (source['_version']) {
      if (this.version) { this.version.addExtendedProperties(source._version!); }
      else { this.version = new fhir.FhirString(source._version as Partial<fhir.FhirStringArgs>); }
    }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['title']) { this.title = new fhir.FhirString({value: source.title}); }
    if (source['_title']) {
      if (this.title) { this.title.addExtendedProperties(source._title!); }
      else { this.title = new fhir.FhirString(source._title as Partial<fhir.FhirStringArgs>); }
    }
    if (source['shortTitle']) { this.shortTitle = new fhir.FhirString({value: source.shortTitle}); }
    if (source['_shortTitle']) {
      if (this.shortTitle) { this.shortTitle.addExtendedProperties(source._shortTitle!); }
      else { this.shortTitle = new fhir.FhirString(source._shortTitle as Partial<fhir.FhirStringArgs>); }
    }
    if (source['subtitle']) { this.subtitle = new fhir.FhirString({value: source.subtitle}); }
    if (source['_subtitle']) {
      if (this.subtitle) { this.subtitle.addExtendedProperties(source._subtitle!); }
      else { this.subtitle = new fhir.FhirString(source._subtitle as Partial<fhir.FhirStringArgs>); }
    }
    if (source['status']) { this.status = new fhir.FhirCode<PublicationStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<PublicationStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['description']) { this.description = new fhir.FhirMarkdown({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirMarkdown(source._description as Partial<fhir.FhirMarkdownArgs>); }
    }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
    if (source['useContext']) { this.useContext = source.useContext.map((x) => new fhir.UsageContext(x)); }
    else { this.useContext = []; }
    if (source['publisher']) { this.publisher = new fhir.FhirString({value: source.publisher}); }
    if (source['_publisher']) {
      if (this.publisher) { this.publisher.addExtendedProperties(source._publisher!); }
      else { this.publisher = new fhir.FhirString(source._publisher as Partial<fhir.FhirStringArgs>); }
    }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x)); }
    else { this.contact = []; }
    if (source['author']) { this.author = source.author.map((x) => new fhir.ContactDetail(x)); }
    else { this.author = []; }
    if (source['editor']) { this.editor = source.editor.map((x) => new fhir.ContactDetail(x)); }
    else { this.editor = []; }
    if (source['reviewer']) { this.reviewer = source.reviewer.map((x) => new fhir.ContactDetail(x)); }
    else { this.reviewer = []; }
    if (source['endorser']) { this.endorser = source.endorser.map((x) => new fhir.ContactDetail(x)); }
    else { this.endorser = []; }
    if (source['relatedArtifact']) { this.relatedArtifact = source.relatedArtifact.map((x) => new fhir.RelatedArtifact(x)); }
    else { this.relatedArtifact = []; }
    if (source['actual']) { this.actual = new fhir.FhirBoolean({value: source.actual}); }
    if (source['_actual']) {
      if (this.actual) { this.actual.addExtendedProperties(source._actual!); }
      else { this.actual = new fhir.FhirBoolean(source._actual as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['characteristicCombination']) { this.characteristicCombination = new fhir.FhirCode<CharacteristicCombinationCodeType>({value: source.characteristicCombination}); }
    if (source['_characteristicCombination']) {
      if (this.characteristicCombination) { this.characteristicCombination.addExtendedProperties(source._characteristicCombination!); }
      else { this.characteristicCombination = new fhir.FhirCode<CharacteristicCombinationCodeType>(source._characteristicCombination as Partial<fhir.FhirCode>); }
    }
    if (source['characteristic']) { this.characteristic = source.characteristic.map((x) => new fhir.EvidenceVariableCharacteristic(x)); }
    else { this.characteristic = []; }
    if (source['handling']) { this.handling = new fhir.FhirCode<VariableHandlingCodeType>({value: source.handling}); }
    if (source['_handling']) {
      if (this.handling) { this.handling.addExtendedProperties(source._handling!); }
      else { this.handling = new fhir.FhirCode<VariableHandlingCodeType>(source._handling as Partial<fhir.FhirCode>); }
    }
    if (source['category']) { this.category = source.category.map((x) => new fhir.EvidenceVariableCategory(x)); }
    else { this.category = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'EvidenceVariable' }
    iss.push(...this.vOS('url',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('version',exp));
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOS('title',exp));
    iss.push(...this.vOS('shortTitle',exp));
    iss.push(...this.vOS('subtitle',exp));
    iss.push(...this.vRSV('status',exp,'PublicationStatus',PublicationStatusVsValidation,'r'));
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOA('note',exp));
    iss.push(...this.vOA('useContext',exp));
    iss.push(...this.vOS('publisher',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vOA('author',exp));
    iss.push(...this.vOA('editor',exp));
    iss.push(...this.vOA('reviewer',exp));
    iss.push(...this.vOA('endorser',exp));
    iss.push(...this.vOA('relatedArtifact',exp));
    iss.push(...this.vOS('actual',exp));
    iss.push(...this.vOSV('characteristicCombination',exp,'CharacteristicCombination',CharacteristicCombinationVsValidation,'r'));
    iss.push(...this.vOA('characteristic',exp));
    iss.push(...this.vOSV('handling',exp,'VariableHandling',VariableHandlingVsValidation,'r'));
    iss.push(...this.vOA('category',exp));
    return iss;
  }
}
