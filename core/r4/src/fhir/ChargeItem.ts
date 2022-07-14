// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ChargeItem

import * as fhir from '../fhir.js';

// @ts-ignore
import { PerformerRoleCodes,  PerformerRoleCodeType } from '../fhirValueSets/PerformerRoleCodes.js';
// @ts-ignore
import { PerformerRoleVsValidation } from '../fhirValueSets/PerformerRoleVsValidation.js';
// @ts-ignore
import { ChargeitemStatusCodes,  ChargeitemStatusCodeType } from '../fhirValueSets/ChargeitemStatusCodes.js';
// @ts-ignore
import { ChargeitemStatusVsValidation } from '../fhirValueSets/ChargeitemStatusVsValidation.js';
// @ts-ignore
import { ChargeitemBillingCodes,  ChargeitemBillingCodeType } from '../fhirValueSets/ChargeitemBillingCodes.js';
// @ts-ignore
import { ChargeitemBillingVsValidation } from '../fhirValueSets/ChargeitemBillingVsValidation.js';
// @ts-ignore
import { BodySiteCodes,  BodySiteCodeType } from '../fhirValueSets/BodySiteCodes.js';
// @ts-ignore
import { BodySiteVsValidation } from '../fhirValueSets/BodySiteVsValidation.js';
/**
 * Valid arguments for the ChargeItemPerformer type.
 */
export interface ChargeItemPerformerArgs extends fhir.BackboneElementArgs {
  /**
   * Describes the type of performance or participation(e.g. primary surgeon, anesthesiologiest, etc.).
   */
  function?: fhir.CodeableConceptArgs|undefined;
  /**
   * The device, practitioner, etc. who performed or participated in the service.
   */
  actor: fhir.ReferenceArgs|null;
}

/**
 * Indicates who or what performed or participated in the charged service.
 */
export class ChargeItemPerformer extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ChargeItemPerformer';
  /**
   * Describes the type of performance or participation(e.g. primary surgeon, anesthesiologiest, etc.).
   */
  public function?: fhir.CodeableConcept|undefined;
  /**
   * The device, practitioner, etc. who performed or participated in the service.
   */
  public actor: fhir.Reference|null;
  /**
   * Default constructor for ChargeItemPerformer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ChargeItemPerformerArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['function']) { this.function = new fhir.CodeableConcept(source.function); }
    if (source['actor']) { this.actor = new fhir.Reference(source.actor); }
    else { this.actor = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'ChargeItem.performer' }
    this.vOptS('function',expression)
    this.vReqS('actor',expression)
    return issues;
  }
}
/**
 * Valid arguments for the ChargeItem type.
 */
export interface ChargeItemArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ChargeItem"|undefined;
  /**
   * Identifiers assigned to this event performer or other systems.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * References the (external) source of pricing information, rules of application for the code this ChargeItem uses.
   */
  definitionUri?: fhir.FhirUri[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.definitionUri
   */
  _definitionUri?:(fhir.FhirElementArgs|null)[];
  /**
   * References the source of pricing information, rules of application for the code this ChargeItem uses.
   */
  definitionCanonical?: fhir.FhirCanonical[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.definitionCanonical
   */
  _definitionCanonical?:(fhir.FhirElementArgs|null)[];
  /**
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the charge item as not currently valid.
   */
  status: fhir.FhirCode<ChargeitemStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * ChargeItems can be grouped to larger ChargeItems covering the whole set.
   */
  partOf?: fhir.ReferenceArgs[]|undefined;
  /**
   * A code that identifies the charge, like a billing code.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * The individual or set of individuals the action is being or was performed on.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * The encounter or episode of care that establishes the context for this event.
   */
  context?: fhir.ReferenceArgs|undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  occurrence?: fhir.FhirDateTime|fhir.Period|fhir.Timing|undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  occurrenceDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  occurrencePeriod?: fhir.PeriodArgs|undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  occurrenceTiming?: fhir.TimingArgs|undefined;
  /**
   * Indicates who or what performed or participated in the charged service.
   */
  performer?: fhir.ChargeItemPerformerArgs[]|undefined;
  /**
   * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
   */
  performingOrganization?: fhir.ReferenceArgs|undefined;
  /**
   * The rendered Service might not be associated with a Request. This property indicates which Organization requested the services to be rendered. (In many cases, this may just be the Department associated with the Encounter.location).
   */
  requestingOrganization?: fhir.ReferenceArgs|undefined;
  /**
   * The costCenter could either be given as a reference to an Organization(Role) resource or as the identifier of the cost center determined by Reference.identifier.value and Reference.identifier.system, depending on use case requirements.
   */
  costCenter?: fhir.ReferenceArgs|undefined;
  /**
   * In many cases this may just be a value, if the underlying units are implicit in the definition of the charge item code.
   */
  quantity?: fhir.QuantityArgs|undefined;
  /**
   * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  bodysite?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * There is no reason to carry the factor in the instance of a ChargeItem unless special circumstances require a manual override. The factors are usually defined by a set of rules in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  factorOverride?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.factorOverride
   */
  _factorOverride?:fhir.FhirElementArgs;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  priceOverride?: fhir.MoneyArgs|undefined;
  /**
   * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
   */
  overrideReason?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.overrideReason
   */
  _overrideReason?:fhir.FhirElementArgs;
  /**
   * The enterer is also the person considered responsible for factor/price overrides if applicable.
   */
  enterer?: fhir.ReferenceArgs|undefined;
  /**
   * The actual date when the service associated with the charge has been rendered is captured in occurrence[x].
   */
  enteredDate?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.enteredDate
   */
  _enteredDate?:fhir.FhirElementArgs;
  /**
   * If the application of the charge item requires a reason to be given, it can be captured here. Textual reasons can be captured using reasonCode.text.
   */
  reason?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicated the rendered service that caused this charge.
   */
  service?: fhir.ReferenceArgs[]|undefined;
  /**
   * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
   */
  product?: fhir.Reference|fhir.CodeableConcept|undefined;
  /**
   * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
   */
  productReference?: fhir.ReferenceArgs|undefined;
  /**
   * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
   */
  productCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the postprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
   */
  account?: fhir.ReferenceArgs[]|undefined;
  /**
   * Comments made about the event by the performer, subject or other participants.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * Further information supporting this charge.
   */
  supportingInformation?: fhir.ReferenceArgs[]|undefined;
}

/**
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 */
export class ChargeItem extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ChargeItem';
  /**
   * Resource Type Name
   */
  public override resourceType: "ChargeItem";
  /**
   * Identifiers assigned to this event performer or other systems.
   */
  public identifier: fhir.Identifier[];
  /**
   * References the (external) source of pricing information, rules of application for the code this ChargeItem uses.
   */
  public definitionUri: fhir.FhirUri[];
  /**
   * References the source of pricing information, rules of application for the code this ChargeItem uses.
   */
  public definitionCanonical: fhir.FhirCanonical[];
  /**
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the charge item as not currently valid.
   */
  public status: fhir.FhirCode<ChargeitemStatusCodeType>|null;
  /**
   * ChargeItems can be grouped to larger ChargeItems covering the whole set.
   */
  public partOf: fhir.Reference[];
  /**
   * A code that identifies the charge, like a billing code.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * The individual or set of individuals the action is being or was performed on.
   */
  public subject: fhir.Reference|null;
  /**
   * The encounter or episode of care that establishes the context for this event.
   */
  public context?: fhir.Reference|undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  public occurrence?: (fhir.FhirDateTime|fhir.Period|fhir.Timing)|undefined;
  /**
   * Internal flag to properly serialize choice-type element ChargeItem.occurrence[x]
   */
  protected static readonly _fts_occurrenceIsChoice:true = true;
  /**
   * Indicates who or what performed or participated in the charged service.
   */
  public performer: fhir.ChargeItemPerformer[];
  /**
   * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
   */
  public performingOrganization?: fhir.Reference|undefined;
  /**
   * The rendered Service might not be associated with a Request. This property indicates which Organization requested the services to be rendered. (In many cases, this may just be the Department associated with the Encounter.location).
   */
  public requestingOrganization?: fhir.Reference|undefined;
  /**
   * The costCenter could either be given as a reference to an Organization(Role) resource or as the identifier of the cost center determined by Reference.identifier.value and Reference.identifier.system, depending on use case requirements.
   */
  public costCenter?: fhir.Reference|undefined;
  /**
   * In many cases this may just be a value, if the underlying units are implicit in the definition of the charge item code.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  public bodysite: fhir.CodeableConcept[];
  /**
   * There is no reason to carry the factor in the instance of a ChargeItem unless special circumstances require a manual override. The factors are usually defined by a set of rules in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  public factorOverride?: fhir.FhirDecimal|undefined;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  public priceOverride?: fhir.Money|undefined;
  /**
   * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
   */
  public overrideReason?: fhir.FhirString|undefined;
  /**
   * The enterer is also the person considered responsible for factor/price overrides if applicable.
   */
  public enterer?: fhir.Reference|undefined;
  /**
   * The actual date when the service associated with the charge has been rendered is captured in occurrence[x].
   */
  public enteredDate?: fhir.FhirDateTime|undefined;
  /**
   * If the application of the charge item requires a reason to be given, it can be captured here. Textual reasons can be captured using reasonCode.text.
   */
  public reason: fhir.CodeableConcept[];
  /**
   * Indicated the rendered service that caused this charge.
   */
  public service: fhir.Reference[];
  /**
   * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
   */
  public product?: (fhir.Reference|fhir.CodeableConcept)|undefined;
  /**
   * Internal flag to properly serialize choice-type element ChargeItem.product[x]
   */
  protected static readonly _fts_productIsChoice:true = true;
  /**
   * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the postprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
   */
  public account: fhir.Reference[];
  /**
   * Comments made about the event by the performer, subject or other participants.
   */
  public note: fhir.Annotation[];
  /**
   * Further information supporting this charge.
   */
  public supportingInformation: fhir.Reference[];
  /**
   * Default constructor for ChargeItem - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ChargeItemArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ChargeItem';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['definitionUri']) { this.definitionUri = source.definitionUri.map((x) => new fhir.FhirUri({value: x})); }
    else { this.definitionUri = []; }
    if (source['_definitionUri']) {
      source._definitionUri.forEach((x,i) => {
        if (this.definitionUri.length >= i) { if (x) { this.definitionUri[i].addExtendedProperties(x); } }
        else { if (x) { this.definitionUri.push(new fhir.FhirUri(x as Partial<fhir.FhirUriArgs>)); } }
      });
    }
    if (source['definitionCanonical']) { this.definitionCanonical = source.definitionCanonical.map((x) => new fhir.FhirCanonical({value: x})); }
    else { this.definitionCanonical = []; }
    if (source['_definitionCanonical']) {
      source._definitionCanonical.forEach((x,i) => {
        if (this.definitionCanonical.length >= i) { if (x) { this.definitionCanonical[i].addExtendedProperties(x); } }
        else { if (x) { this.definitionCanonical.push(new fhir.FhirCanonical(x as Partial<fhir.FhirCanonicalArgs>)); } }
      });
    }
    if (source['status']) { this.status = new fhir.FhirCode<ChargeitemStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ChargeitemStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x)); }
    else { this.partOf = []; }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['context']) { this.context = new fhir.Reference(source.context); }
    if (source['occurrence']) { this.occurrence = source.occurrence; }
    else if (source['occurrenceDateTime']) { this.occurrence = new fhir.FhirDateTime({value: source.occurrenceDateTime}); }
    else if (source['occurrencePeriod']) { this.occurrence = new fhir.Period(source.occurrencePeriod); }
    else if (source['occurrenceTiming']) { this.occurrence = new fhir.Timing(source.occurrenceTiming); }
    if (source['performer']) { this.performer = source.performer.map((x) => new fhir.ChargeItemPerformer(x)); }
    else { this.performer = []; }
    if (source['performingOrganization']) { this.performingOrganization = new fhir.Reference(source.performingOrganization); }
    if (source['requestingOrganization']) { this.requestingOrganization = new fhir.Reference(source.requestingOrganization); }
    if (source['costCenter']) { this.costCenter = new fhir.Reference(source.costCenter); }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity); }
    if (source['bodysite']) { this.bodysite = source.bodysite.map((x) => new fhir.CodeableConcept(x)); }
    else { this.bodysite = []; }
    if (source['factorOverride']) { this.factorOverride = new fhir.FhirDecimal({value: source.factorOverride}); }
    if (source['_factorOverride']) {
      if (this.factorOverride) { this.factorOverride.addExtendedProperties(source._factorOverride!); }
      else { this.factorOverride = new fhir.FhirDecimal(source._factorOverride as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['priceOverride']) { this.priceOverride = new fhir.Money(source.priceOverride); }
    if (source['overrideReason']) { this.overrideReason = new fhir.FhirString({value: source.overrideReason}); }
    if (source['_overrideReason']) {
      if (this.overrideReason) { this.overrideReason.addExtendedProperties(source._overrideReason!); }
      else { this.overrideReason = new fhir.FhirString(source._overrideReason as Partial<fhir.FhirStringArgs>); }
    }
    if (source['enterer']) { this.enterer = new fhir.Reference(source.enterer); }
    if (source['enteredDate']) { this.enteredDate = new fhir.FhirDateTime({value: source.enteredDate}); }
    if (source['_enteredDate']) {
      if (this.enteredDate) { this.enteredDate.addExtendedProperties(source._enteredDate!); }
      else { this.enteredDate = new fhir.FhirDateTime(source._enteredDate as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['reason']) { this.reason = source.reason.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reason = []; }
    if (source['service']) { this.service = source.service.map((x) => new fhir.Reference(x)); }
    else { this.service = []; }
    if (source['product']) { this.product = source.product; }
    else if (source['productReference']) { this.product = new fhir.Reference(source.productReference); }
    else if (source['productCodeableConcept']) { this.product = new fhir.CodeableConcept(source.productCodeableConcept); }
    if (source['account']) { this.account = source.account.map((x) => new fhir.Reference(x)); }
    else { this.account = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
    if (source['supportingInformation']) { this.supportingInformation = source.supportingInformation.map((x) => new fhir.Reference(x)); }
    else { this.supportingInformation = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'ChargeItem' }
    this.vReqS('resourceType',expression)
    this.vOptA('identifier',expression)
    this.vOptA('definitionUri',expression)
    this.vOptA('definitionCanonical',expression)
    this.vReqSV('status',expression,'ChargeitemStatus',ChargeitemStatusVsValidation,'r')
    this.vOptA('partOf',expression)
    this.vReqS('code',expression)
    this.vReqS('subject',expression)
    this.vOptS('context',expression)
    this.vOptS('occurrence',expression)
    this.vOptA('performer',expression)
    this.vOptS('performingOrganization',expression)
    this.vOptS('requestingOrganization',expression)
    this.vOptS('costCenter',expression)
    this.vOptS('quantity',expression)
    this.vOptA('bodysite',expression)
    this.vOptS('factorOverride',expression)
    this.vOptS('priceOverride',expression)
    this.vOptS('overrideReason',expression)
    this.vOptS('enterer',expression)
    this.vOptS('enteredDate',expression)
    this.vOptA('reason',expression)
    this.vOptA('service',expression)
    this.vOptS('product',expression)
    this.vOptA('account',expression)
    this.vOptA('note',expression)
    this.vOptA('supportingInformation',expression)
    return issues;
  }
}
