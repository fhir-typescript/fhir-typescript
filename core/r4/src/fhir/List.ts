// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: List

import * as fhir from '../fhir.js';

// @ts-ignore
import { ListItemFlagCodings, ListItemFlagCodingType,} from '../fhirValueSets/ListItemFlagCodings.js';
// @ts-ignore
import { ListItemFlagCodes,  ListItemFlagCodeType } from '../fhirValueSets/ListItemFlagCodes.js';
// @ts-ignore
import { ListStatusCodings, ListStatusCodingType,} from '../fhirValueSets/ListStatusCodings.js';
// @ts-ignore
import { ListStatusCodes,  ListStatusCodeType } from '../fhirValueSets/ListStatusCodes.js';
// @ts-ignore
import { ListModeCodings, ListModeCodingType,} from '../fhirValueSets/ListModeCodings.js';
// @ts-ignore
import { ListModeCodes,  ListModeCodeType } from '../fhirValueSets/ListModeCodes.js';
// @ts-ignore
import { ListExampleCodesCodings, ListExampleCodesCodingType,} from '../fhirValueSets/ListExampleCodesCodings.js';
// @ts-ignore
import { ListExampleCodesCodes,  ListExampleCodesCodeType } from '../fhirValueSets/ListExampleCodesCodes.js';
// @ts-ignore
import { ListOrderCodings, ListOrderCodingType,} from '../fhirValueSets/ListOrderCodings.js';
// @ts-ignore
import { ListOrderCodes,  ListOrderCodeType } from '../fhirValueSets/ListOrderCodes.js';
// @ts-ignore
import { ListEmptyReasonCodings, ListEmptyReasonCodingType,} from '../fhirValueSets/ListEmptyReasonCodings.js';
// @ts-ignore
import { ListEmptyReasonCodes,  ListEmptyReasonCodeType } from '../fhirValueSets/ListEmptyReasonCodes.js';
// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the ListEntry type.
 */
export interface ListEntryArgs extends fhir.BackboneElementArgs {
  /**
   * The flag can only be understood in the context of the List.code. If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Deleted can only be used if the List.mode is "changes".
   */
  flag?: fhir.CodeableConceptArgs|undefined;
  /**
   * If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Both flag and deleted can only be used if the List.mode is "changes". A deleted entry should be displayed in narrative as deleted.  This element is labeled as a modifier because it indicates that an item is (to be) no longer in the list.
   */
  deleted?: fhir.FhirBoolean|boolean|undefined;
  /**
   * When this item was added to the list.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * A reference to the actual resource from which data was derived.
   */
  item: fhir.ReferenceArgs|null;
}

/**
 * If there are no entries in the list, an emptyReason SHOULD be provided.
 */
export class ListEntry extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'ListEntry';
  /**
   * The flag can only be understood in the context of the List.code. If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Deleted can only be used if the List.mode is "changes".
   */
  public flag?: fhir.CodeableConcept|undefined;
  /**
   * If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Both flag and deleted can only be used if the List.mode is "changes". A deleted entry should be displayed in narrative as deleted.  This element is labeled as a modifier because it indicates that an item is (to be) no longer in the list.
   */
  public deleted?: fhir.FhirBoolean|undefined;
  /**
   * When this item was added to the list.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * A reference to the actual resource from which data was derived.
   */
  public item: fhir.Reference|null;
  /**
   * Default constructor for ListEntry - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ListEntryArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['flag']) { this.flag = new fhir.CodeableConcept(source.flag); }
    if (source['deleted']) { this.deleted = new fhir.FhirBoolean({value: source.deleted}); }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['item']) { this.item = new fhir.Reference(source.item); }
    else { this.item = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["flag"]) { outcome.issue!.push(...this.flag.doModelValidation().issue!); }
    if (this["deleted"]) { outcome.issue!.push(...this.deleted.doModelValidation().issue!); }
    if (this["date"]) { outcome.issue!.push(...this.date.doModelValidation().issue!); }
    if (!this['item']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property item:fhir.Reference fhir: List.entry.item:Reference', }));
    }
    if (this["item"]) { outcome.issue!.push(...this.item.doModelValidation().issue!); }
    return outcome;
  }
}
/**
 * Valid arguments for the List type.
 */
export interface ListArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "List"|undefined;
  /**
   * Identifier for the List assigned for business purposes outside the context of FHIR.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ListStatusCodeType|null;
  /**
   * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
   */
  mode: ListModeCodeType|null;
  /**
   * A label for the list assigned by the author.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * If there is no code, the purpose of the list is implied where it is used, such as in a document section using Document.section.code.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * Some purely arbitrary lists do not have a common subject, so this is optional.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * The encounter that is the context in which this list was created.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * The actual important date is the date of currency of the resources that were summarized, but it is usually assumed that these are current when the preparation occurs.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * The primary source is the entity that made the decisions what items are in the list. This may be software or user.
   */
  source?: fhir.ReferenceArgs|undefined;
  /**
   * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
   */
  orderedBy?: fhir.CodeableConceptArgs|undefined;
  /**
   * Comments that apply to the overall list.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * If there are no entries in the list, an emptyReason SHOULD be provided.
   */
  entry?: fhir.ListEntryArgs[]|undefined;
  /**
   * The various reasons for an empty list make a significant interpretation to its interpretation. Note that this code is for use when the entire list has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
   */
  emptyReason?: fhir.CodeableConceptArgs|undefined;
}

/**
 * A list is a curated collection of resources.
 */
export class List extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'List';
  /**
   * Resource Type Name
   */
  public resourceType: "List";
  /**
   * Identifier for the List assigned for business purposes outside the context of FHIR.
   */
  public identifier?: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: ListStatusCodeType|null;
  /**
   * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
   */
  public mode: ListModeCodeType|null;
  /**
   * A label for the list assigned by the author.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * If there is no code, the purpose of the list is implied where it is used, such as in a document section using Document.section.code.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * Some purely arbitrary lists do not have a common subject, so this is optional.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * The encounter that is the context in which this list was created.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * The actual important date is the date of currency of the resources that were summarized, but it is usually assumed that these are current when the preparation occurs.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * The primary source is the entity that made the decisions what items are in the list. This may be software or user.
   */
  public source?: fhir.Reference|undefined;
  /**
   * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
   */
  public orderedBy?: fhir.CodeableConcept|undefined;
  /**
   * Comments that apply to the overall list.
   */
  public note?: fhir.Annotation[];
  /**
   * If there are no entries in the list, an emptyReason SHOULD be provided.
   */
  public entry?: fhir.ListEntry[];
  /**
   * The various reasons for an empty list make a significant interpretation to its interpretation. Note that this code is for use when the entire list has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
   */
  public emptyReason?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for List - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ListArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'List';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['mode']) { this.mode = source.mode; }
    else { this.mode = null; }
    if (source['title']) { this.title = new fhir.FhirString({value: source.title}); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['source']) { this.source = new fhir.Reference(source.source); }
    if (source['orderedBy']) { this.orderedBy = new fhir.CodeableConcept(source.orderedBy); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
    if (source['entry']) { this.entry = source.entry.map((x) => new fhir.ListEntry(x)); }
    else { this.entry = []; }
    if (source['emptyReason']) { this.emptyReason = new fhir.CodeableConcept(source.emptyReason); }
  }
  /**
   * Required-bound Value Set for status (List.status)
   */
  public static statusRequiredCoding():ListStatusCodingType {
    return ListStatusCodings;
  }
  /**
   * Required-bound Value Set for mode (List.mode)
   */
  public static modeRequiredCoding():ListModeCodingType {
    return ListModeCodings;
  }
  /**
   * Preferred-bound Value Set for orderedBy (List.orderedBy)
   */
  public static orderedByPreferredCoding():ListOrderCodingType {
    return ListOrderCodings;
  }
  /**
   * Preferred-bound Value Set for emptyReason (List.emptyReason)
   */
  public static emptyReasonPreferredCoding():ListEmptyReasonCodingType {
    return ListEmptyReasonCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property resourceType:"List" fhir: List.resourceType:"List"', }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property status:ListStatusCodeType fhir: List.status:code', }));
    }
    if (!this['mode']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property mode:ListModeCodeType fhir: List.mode:code', }));
    }
    if (this["title"]) { outcome.issue!.push(...this.title.doModelValidation().issue!); }
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (this["subject"]) { outcome.issue!.push(...this.subject.doModelValidation().issue!); }
    if (this["encounter"]) { outcome.issue!.push(...this.encounter.doModelValidation().issue!); }
    if (this["date"]) { outcome.issue!.push(...this.date.doModelValidation().issue!); }
    if (this["source"]) { outcome.issue!.push(...this.source.doModelValidation().issue!); }
    if (this["orderedBy"]) { outcome.issue!.push(...this.orderedBy.doModelValidation().issue!); }
    if (this["note"]) { this.note.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["entry"]) { this.entry.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["emptyReason"]) { outcome.issue!.push(...this.emptyReason.doModelValidation().issue!); }
    return outcome;
  }
}