// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: CarePlan

import * as fhir from '../fhir.js';

// @ts-ignore
import { CarePlanRelationshipCodes,  CarePlanRelationshipCodeType } from '../fhirValueSets/CarePlanRelationshipCodes.js';
// @ts-ignore
import { CarePlanRelationshipVsValidation } from '../fhirValueSets/CarePlanRelationshipVsValidation.js';
// @ts-ignore
import { CarePlanActivityStatusCodes,  CarePlanActivityStatusCodeType } from '../fhirValueSets/CarePlanActivityStatusCodes.js';
// @ts-ignore
import { CarePlanActivityStatusVsValidation } from '../fhirValueSets/CarePlanActivityStatusVsValidation.js';
// @ts-ignore
import { CarePlanStatusCodes,  CarePlanStatusCodeType } from '../fhirValueSets/CarePlanStatusCodes.js';
// @ts-ignore
import { CarePlanStatusVsValidation } from '../fhirValueSets/CarePlanStatusVsValidation.js';
/**
 * Valid arguments for the CarePlanRelatedPlan type.
 */
export interface CarePlanRelatedPlanArgs extends fhir.BackboneElementArgs {
  /**
   * Identifies the type of relationship this plan has to the target plan.
   */
  code?: fhir.FhirCode<CarePlanRelationshipCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: CarePlan.relatedPlan.code
   */
  _code?:fhir.FhirElementArgs;
  /**
   * A reference to the plan to which a relationship is asserted.
   */
  plan: fhir.ReferenceArgs|null;
}

/**
 * Identifies CarePlans with some sort of formal relationship to the current plan.
 */
export class CarePlanRelatedPlan extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CarePlanRelatedPlan';
  /**
   * Identifies the type of relationship this plan has to the target plan.
   */
  public code?: fhir.FhirCode<CarePlanRelationshipCodeType>|undefined;
  /**
   * A reference to the plan to which a relationship is asserted.
   */
  public plan: fhir.Reference|null;
  /**
   * Default constructor for CarePlanRelatedPlan - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CarePlanRelatedPlanArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.FhirCode<CarePlanRelationshipCodeType>({value: source.code}); }
    if (source['_code']) {
      if (this.code) { this.code.addExtendedProperties(source._code!); }
      else { this.code = new fhir.FhirCode<CarePlanRelationshipCodeType>(source._code as Partial<fhir.FhirCode>); }
    }
    if (source['plan']) { this.plan = new fhir.Reference(source.plan); }
    else { this.plan = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CarePlan.relatedPlan' }
    iss.push(...this.vOSV('code',exp,'CarePlanRelationship',CarePlanRelationshipVsValidation,'r'));
    iss.push(...this.vRS('plan',exp));
    return iss;
  }
}
/**
 * Valid arguments for the CarePlanParticipant type.
 */
export interface CarePlanParticipantArgs extends fhir.BackboneElementArgs {
  /**
   * Indicates specific responsibility of an individual within the care plan; e.g. "Primary physician", "Team coordinator", "Caregiver", etc.
   */
  role?: fhir.CodeableConceptArgs|undefined;
  /**
   * The specific person or organization who is participating/expected to participate in the care plan.
   */
  member?: fhir.ReferenceArgs|undefined;
}

/**
 * Allows representation of care teams, helps scope care plan.  In some cases may be a determiner of access permissions.
 */
export class CarePlanParticipant extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CarePlanParticipant';
  /**
   * Indicates specific responsibility of an individual within the care plan; e.g. "Primary physician", "Team coordinator", "Caregiver", etc.
   */
  public role?: fhir.CodeableConcept|undefined;
  /**
   * The specific person or organization who is participating/expected to participate in the care plan.
   */
  public member?: fhir.Reference|undefined;
  /**
   * Default constructor for CarePlanParticipant - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CarePlanParticipantArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['role']) { this.role = new fhir.CodeableConcept(source.role); }
    if (source['member']) { this.member = new fhir.Reference(source.member); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CarePlan.participant' }
    iss.push(...this.vOS('role',exp));
    iss.push(...this.vOS('member',exp));
    return iss;
  }
}
/**
 * Valid arguments for the CarePlanActivityDetail type.
 */
export interface CarePlanActivityDetailArgs extends fhir.BackboneElementArgs {
  /**
   * May determine what types of extensions are permitted.
   */
  category?: fhir.CodeableConceptArgs|undefined;
  /**
   * Allows matching performed to planned as well as validation against protocols.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * Provides the rationale that drove the inclusion of this particular activity as part of the plan.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Provides the health condition(s) that drove the inclusion of this particular activity as part of the plan.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * So that participants know the link explicitly.
   */
  goal?: fhir.ReferenceArgs[]|undefined;
  /**
   * Indicates progress against the plan, whether the activity is still relevant for the plan.
   */
  status?: fhir.FhirCode<CarePlanActivityStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: CarePlan.activity.detail.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Provides reason why the activity isn't yet started, is on hold, was cancelled, etc.
   */
  statusReason?: fhir.CodeableConceptArgs|undefined;
  /**
   * Captures intention to not do something that may have been previously typical.
   */
  prohibited: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: CarePlan.activity.detail.prohibited
   */
  _prohibited?:fhir.FhirElementArgs;
  /**
   * Allows prompting for activities and detection of missed planned activities.
   */
  scheduled?: fhir.Timing|fhir.Period|fhir.FhirString|undefined;
  /**
   * Allows prompting for activities and detection of missed planned activities.
   */
  scheduledTiming?: fhir.TimingArgs|undefined;
  /**
   * Allows prompting for activities and detection of missed planned activities.
   */
  scheduledPeriod?: fhir.PeriodArgs|undefined;
  /**
   * Allows prompting for activities and detection of missed planned activities.
   */
  scheduledString?: fhir.FhirString|string|undefined;
  /**
   * Helps in planning of activity.
   */
  location?: fhir.ReferenceArgs|undefined;
  /**
   * Helps in planning of activity.
   */
  performer?: fhir.ReferenceArgs[]|undefined;
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  product?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productReference?: fhir.ReferenceArgs|undefined;
  /**
   * Allows rough dose checking.
   */
  dailyAmount?: fhir.QuantityArgs|undefined;
  /**
   * Identifies the quantity expected to be supplied, administered or consumed by the subject.
   */
  quantity?: fhir.QuantityArgs|undefined;
  /**
   * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: CarePlan.activity.detail.description
   */
  _description?:fhir.FhirElementArgs;
}

/**
 * Details in a simple form for generic care plan systems.
 */
export class CarePlanActivityDetail extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CarePlanActivityDetail';
  /**
   * May determine what types of extensions are permitted.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * Allows matching performed to planned as well as validation against protocols.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * Provides the rationale that drove the inclusion of this particular activity as part of the plan.
   */
  public reasonCode: fhir.CodeableConcept[];
  /**
   * Provides the health condition(s) that drove the inclusion of this particular activity as part of the plan.
   */
  public reasonReference: fhir.Reference[];
  /**
   * So that participants know the link explicitly.
   */
  public goal: fhir.Reference[];
  /**
   * Indicates progress against the plan, whether the activity is still relevant for the plan.
   */
  public status?: fhir.FhirCode<CarePlanActivityStatusCodeType>|undefined;
  /**
   * Provides reason why the activity isn't yet started, is on hold, was cancelled, etc.
   */
  public statusReason?: fhir.CodeableConcept|undefined;
  /**
   * Captures intention to not do something that may have been previously typical.
   */
  public prohibited: fhir.FhirBoolean|null;
  /**
   * Allows prompting for activities and detection of missed planned activities.
   */
  public scheduled?: (fhir.Timing|fhir.Period|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element CarePlan.activity.detail.scheduled[x]
   */
  protected static readonly _fts_scheduledIsChoice:true = true;
  /**
   * Helps in planning of activity.
   */
  public location?: fhir.Reference|undefined;
  /**
   * Helps in planning of activity.
   */
  public performer: fhir.Reference[];
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  public product?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element CarePlan.activity.detail.product[x]
   */
  protected static readonly _fts_productIsChoice:true = true;
  /**
   * Allows rough dose checking.
   */
  public dailyAmount?: fhir.Quantity|undefined;
  /**
   * Identifies the quantity expected to be supplied, administered or consumed by the subject.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Default constructor for CarePlanActivityDetail - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CarePlanActivityDetailArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    else { this.reasonReference = []; }
    if (source['goal']) { this.goal = source.goal.map((x) => new fhir.Reference(x)); }
    else { this.goal = []; }
    if (source['status']) { this.status = new fhir.FhirCode<CarePlanActivityStatusCodeType>({value: source.status}); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<CarePlanActivityStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['statusReason']) { this.statusReason = new fhir.CodeableConcept(source.statusReason); }
    if (source['prohibited']) { this.prohibited = new fhir.FhirBoolean({value: source.prohibited}); }
    else { this.prohibited = null; }
    if (source['_prohibited']) {
      if (this.prohibited) { this.prohibited.addExtendedProperties(source._prohibited!); }
      else { this.prohibited = new fhir.FhirBoolean(source._prohibited as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['scheduled']) { this.scheduled = source.scheduled; }
    else if (source['scheduledTiming']) { this.scheduled = new fhir.Timing(source.scheduledTiming); }
    else if (source['scheduledPeriod']) { this.scheduled = new fhir.Period(source.scheduledPeriod); }
    else if (source['scheduledString']) { this.scheduled = new fhir.FhirString({value: source.scheduledString}); }
    if (source['location']) { this.location = new fhir.Reference(source.location); }
    if (source['performer']) { this.performer = source.performer.map((x) => new fhir.Reference(x)); }
    else { this.performer = []; }
    if (source['product']) { this.product = source.product; }
    else if (source['productCodeableConcept']) { this.product = new fhir.CodeableConcept(source.productCodeableConcept); }
    else if (source['productReference']) { this.product = new fhir.Reference(source.productReference); }
    if (source['dailyAmount']) { this.dailyAmount = new fhir.Quantity(source.dailyAmount); }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity); }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CarePlan.activity.detail' }
    iss.push(...this.vOS('category',exp));
    iss.push(...this.vOS('code',exp));
    iss.push(...this.vOA('reasonCode',exp));
    iss.push(...this.vOA('reasonReference',exp));
    iss.push(...this.vOA('goal',exp));
    iss.push(...this.vOSV('status',exp,'CarePlanActivityStatus',CarePlanActivityStatusVsValidation,'r'));
    iss.push(...this.vOS('statusReason',exp));
    iss.push(...this.vRS('prohibited',exp));
    iss.push(...this.vOS('scheduled',exp));
    iss.push(...this.vOS('location',exp));
    iss.push(...this.vOA('performer',exp));
    iss.push(...this.vOS('product',exp));
    iss.push(...this.vOS('dailyAmount',exp));
    iss.push(...this.vOS('quantity',exp));
    iss.push(...this.vOS('description',exp));
    return iss;
  }
}
/**
 * Valid arguments for the CarePlanActivity type.
 */
export interface CarePlanActivityArgs extends fhir.BackboneElementArgs {
  /**
   * Links plan to resulting actions.
   */
  actionResulting?: fhir.ReferenceArgs[]|undefined;
  /**
   * Can be used to capture information about adherence, progress, concerns, etc.
   */
  progress?: fhir.AnnotationArgs[]|undefined;
  /**
   * Details in a form consistent with other applications and contexts of use.
   */
  reference?: fhir.ReferenceArgs|undefined;
  /**
   * Details in a simple form for generic care plan systems.
   */
  detail?: fhir.CarePlanActivityDetailArgs|undefined;
}

/**
 * Allows systems to prompt for performance of planned activities, and validate plans against best practice.
 */
export class CarePlanActivity extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CarePlanActivity';
  /**
   * Links plan to resulting actions.
   */
  public actionResulting: fhir.Reference[];
  /**
   * Can be used to capture information about adherence, progress, concerns, etc.
   */
  public progress: fhir.Annotation[];
  /**
   * Details in a form consistent with other applications and contexts of use.
   */
  public reference?: fhir.Reference|undefined;
  /**
   * Details in a simple form for generic care plan systems.
   */
  public detail?: fhir.CarePlanActivityDetail|undefined;
  /**
   * Default constructor for CarePlanActivity - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CarePlanActivityArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['actionResulting']) { this.actionResulting = source.actionResulting.map((x) => new fhir.Reference(x)); }
    else { this.actionResulting = []; }
    if (source['progress']) { this.progress = source.progress.map((x) => new fhir.Annotation(x)); }
    else { this.progress = []; }
    if (source['reference']) { this.reference = new fhir.Reference(source.reference); }
    if (source['detail']) { this.detail = new fhir.CarePlanActivityDetail(source.detail); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CarePlan.activity' }
    iss.push(...this.vOA('actionResulting',exp));
    iss.push(...this.vOA('progress',exp));
    iss.push(...this.vOS('reference',exp));
    iss.push(...this.vOS('detail',exp));
    return iss;
  }
}
/**
 * Valid arguments for the CarePlan type.
 */
export interface CarePlanArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "CarePlan"|undefined;
  /**
   * Need to allow connection to a wider workflow.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Identifies the patient or group whose intended care is described by the plan.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * Allows clinicians to determine whether the plan is actionable or not.
   */
  status: fhir.FhirCode<CarePlanStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: CarePlan.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Identifies the context in which this particular CarePlan is defined.
   */
  context?: fhir.ReferenceArgs|undefined;
  /**
   * Allows tracking what plan(s) are in effect at a particular time.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * Identifies the individual(s) or ogranization who is responsible for the content of the care plan.
   */
  author?: fhir.ReferenceArgs[]|undefined;
  /**
   * Indicates how current the plan is.
   */
  modified?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: CarePlan.modified
   */
  _modified?:fhir.FhirElementArgs;
  /**
   * Used for filtering what plan(s) are retrieved and displayed to different types of users.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Provides more detail than conveyed by category.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: CarePlan.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Links plan to the conditions it manages.  Also scopes plans - multiple plans may exist addressing different concerns.
   */
  addresses?: fhir.ReferenceArgs[]|undefined;
  /**
   * Identifies barriers and other considerations associated with the care plan.
   */
  support?: fhir.ReferenceArgs[]|undefined;
  /**
   * Identifies CarePlans with some sort of formal relationship to the current plan.
   */
  relatedPlan?: fhir.CarePlanRelatedPlanArgs[]|undefined;
  /**
   * Allows representation of care teams, helps scope care plan.  In some cases may be a determiner of access permissions.
   */
  participant?: fhir.CarePlanParticipantArgs[]|undefined;
  /**
   * Provides context for plan.  Allows plan effectiveness to be evaluated by clinicians.
   */
  goal?: fhir.ReferenceArgs[]|undefined;
  /**
   * Allows systems to prompt for performance of planned activities, and validate plans against best practice.
   */
  activity?: fhir.CarePlanActivityArgs[]|undefined;
  /**
   * Used to capture information that applies to the plan as a whole that doesn't fit into discrete elements.
   */
  note?: fhir.AnnotationArgs|undefined;
}

/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
export class CarePlan extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CarePlan';
  /**
   * Resource Type Name
   */
  public override resourceType: "CarePlan";
  /**
   * Need to allow connection to a wider workflow.
   */
  public identifier: fhir.Identifier[];
  /**
   * Identifies the patient or group whose intended care is described by the plan.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Allows clinicians to determine whether the plan is actionable or not.
   */
  public status: fhir.FhirCode<CarePlanStatusCodeType>|null;
  /**
   * Identifies the context in which this particular CarePlan is defined.
   */
  public context?: fhir.Reference|undefined;
  /**
   * Allows tracking what plan(s) are in effect at a particular time.
   */
  public period?: fhir.Period|undefined;
  /**
   * Identifies the individual(s) or ogranization who is responsible for the content of the care plan.
   */
  public author: fhir.Reference[];
  /**
   * Indicates how current the plan is.
   */
  public modified?: fhir.FhirDateTime|undefined;
  /**
   * Used for filtering what plan(s) are retrieved and displayed to different types of users.
   */
  public category: fhir.CodeableConcept[];
  /**
   * Provides more detail than conveyed by category.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Links plan to the conditions it manages.  Also scopes plans - multiple plans may exist addressing different concerns.
   */
  public addresses: fhir.Reference[];
  /**
   * Identifies barriers and other considerations associated with the care plan.
   */
  public support: fhir.Reference[];
  /**
   * Identifies CarePlans with some sort of formal relationship to the current plan.
   */
  public relatedPlan: fhir.CarePlanRelatedPlan[];
  /**
   * Allows representation of care teams, helps scope care plan.  In some cases may be a determiner of access permissions.
   */
  public participant: fhir.CarePlanParticipant[];
  /**
   * Provides context for plan.  Allows plan effectiveness to be evaluated by clinicians.
   */
  public goal: fhir.Reference[];
  /**
   * Allows systems to prompt for performance of planned activities, and validate plans against best practice.
   */
  public activity: fhir.CarePlanActivity[];
  /**
   * Used to capture information that applies to the plan as a whole that doesn't fit into discrete elements.
   */
  public note?: fhir.Annotation|undefined;
  /**
   * Default constructor for CarePlan - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CarePlanArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'CarePlan';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['status']) { this.status = new fhir.FhirCode<CarePlanStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<CarePlanStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['context']) { this.context = new fhir.Reference(source.context); }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['author']) { this.author = source.author.map((x) => new fhir.Reference(x)); }
    else { this.author = []; }
    if (source['modified']) { this.modified = new fhir.FhirDateTime({value: source.modified}); }
    if (source['_modified']) {
      if (this.modified) { this.modified.addExtendedProperties(source._modified!); }
      else { this.modified = new fhir.FhirDateTime(source._modified as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    else { this.category = []; }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['addresses']) { this.addresses = source.addresses.map((x) => new fhir.Reference(x)); }
    else { this.addresses = []; }
    if (source['support']) { this.support = source.support.map((x) => new fhir.Reference(x)); }
    else { this.support = []; }
    if (source['relatedPlan']) { this.relatedPlan = source.relatedPlan.map((x) => new fhir.CarePlanRelatedPlan(x)); }
    else { this.relatedPlan = []; }
    if (source['participant']) { this.participant = source.participant.map((x) => new fhir.CarePlanParticipant(x)); }
    else { this.participant = []; }
    if (source['goal']) { this.goal = source.goal.map((x) => new fhir.Reference(x)); }
    else { this.goal = []; }
    if (source['activity']) { this.activity = source.activity.map((x) => new fhir.CarePlanActivity(x)); }
    else { this.activity = []; }
    if (source['note']) { this.note = new fhir.Annotation(source.note); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CarePlan' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vRSV('status',exp,'CarePlanStatus',CarePlanStatusVsValidation,'r'));
    iss.push(...this.vOS('context',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOA('author',exp));
    iss.push(...this.vOS('modified',exp));
    iss.push(...this.vOA('category',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOA('addresses',exp));
    iss.push(...this.vOA('support',exp));
    iss.push(...this.vOA('relatedPlan',exp));
    iss.push(...this.vOA('participant',exp));
    iss.push(...this.vOA('goal',exp));
    iss.push(...this.vOA('activity',exp));
    iss.push(...this.vOS('note',exp));
    return iss;
  }
}