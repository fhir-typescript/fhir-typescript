import * as fhir from '../fhir.js';
import { CarePlanRelationshipCodeType } from '../fhirValueSets/CarePlanRelationshipCodes.js';
import { CarePlanActivityStatusCodeType } from '../fhirValueSets/CarePlanActivityStatusCodes.js';
import { CarePlanStatusCodeType } from '../fhirValueSets/CarePlanStatusCodes.js';
/**
 * Valid arguments for the CarePlanRelatedPlan type.
 */
export interface CarePlanRelatedPlanArgs extends fhir.BackboneElementArgs {
    /**
     * Identifies the type of relationship this plan has to the target plan.
     */
    code?: fhir.FhirCode<CarePlanRelationshipCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CarePlan.relatedPlan.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * A reference to the plan to which a relationship is asserted.
     */
    plan: fhir.ReferenceArgs | null;
}
/**
 * Identifies CarePlans with some sort of formal relationship to the current plan.
 */
export declare class CarePlanRelatedPlan extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identifies the type of relationship this plan has to the target plan.
     */
    code?: fhir.FhirCode<CarePlanRelationshipCodeType> | undefined;
    /**
     * A reference to the plan to which a relationship is asserted.
     */
    plan: fhir.Reference | null;
    /**
     * Default constructor for CarePlanRelatedPlan - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CarePlanRelatedPlanArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CarePlanParticipant type.
 */
export interface CarePlanParticipantArgs extends fhir.BackboneElementArgs {
    /**
     * Indicates specific responsibility of an individual within the care plan; e.g. "Primary physician", "Team coordinator", "Caregiver", etc.
     */
    role?: fhir.CodeableConceptArgs | undefined;
    /**
     * The specific person or organization who is participating/expected to participate in the care plan.
     */
    member?: fhir.ReferenceArgs | undefined;
}
/**
 * Allows representation of care teams, helps scope care plan.  In some cases may be a determiner of access permissions.
 */
export declare class CarePlanParticipant extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Indicates specific responsibility of an individual within the care plan; e.g. "Primary physician", "Team coordinator", "Caregiver", etc.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * The specific person or organization who is participating/expected to participate in the care plan.
     */
    member?: fhir.Reference | undefined;
    /**
     * Default constructor for CarePlanParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CarePlanParticipantArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CarePlanActivityDetail type.
 */
export interface CarePlanActivityDetailArgs extends fhir.BackboneElementArgs {
    /**
     * May determine what types of extensions are permitted.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * Allows matching performed to planned as well as validation against protocols.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Provides the rationale that drove the inclusion of this particular activity as part of the plan.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Provides the health condition(s) that drove the inclusion of this particular activity as part of the plan.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * So that participants know the link explicitly.
     */
    goal?: fhir.ReferenceArgs[] | undefined;
    /**
     * Indicates progress against the plan, whether the activity is still relevant for the plan.
     */
    status?: fhir.FhirCode<CarePlanActivityStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CarePlan.activity.detail.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Provides reason why the activity isn't yet started, is on hold, was cancelled, etc.
     */
    statusReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Captures intention to not do something that may have been previously typical.
     */
    prohibited: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CarePlan.activity.detail.prohibited
     */
    _prohibited?: fhir.FhirElementArgs;
    /**
     * Allows prompting for activities and detection of missed planned activities.
     */
    scheduled?: fhir.Timing | fhir.Period | fhir.FhirString | undefined;
    /**
     * Allows prompting for activities and detection of missed planned activities.
     */
    scheduledTiming?: fhir.TimingArgs | undefined;
    /**
     * Allows prompting for activities and detection of missed planned activities.
     */
    scheduledPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Allows prompting for activities and detection of missed planned activities.
     */
    scheduledString?: fhir.FhirString | string | undefined;
    /**
     * Helps in planning of activity.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * Helps in planning of activity.
     */
    performer?: fhir.ReferenceArgs[] | undefined;
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    product?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    productCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    productReference?: fhir.ReferenceArgs | undefined;
    /**
     * Allows rough dose checking.
     */
    dailyAmount?: fhir.QuantityArgs | undefined;
    /**
     * Identifies the quantity expected to be supplied, administered or consumed by the subject.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CarePlan.activity.detail.description
     */
    _description?: fhir.FhirElementArgs;
}
/**
 * Details in a simple form for generic care plan systems.
 */
export declare class CarePlanActivityDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * May determine what types of extensions are permitted.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Allows matching performed to planned as well as validation against protocols.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Provides the rationale that drove the inclusion of this particular activity as part of the plan.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * Provides the health condition(s) that drove the inclusion of this particular activity as part of the plan.
     */
    reasonReference: fhir.Reference[];
    /**
     * So that participants know the link explicitly.
     */
    goal: fhir.Reference[];
    /**
     * Indicates progress against the plan, whether the activity is still relevant for the plan.
     */
    status?: fhir.FhirCode<CarePlanActivityStatusCodeType> | undefined;
    /**
     * Provides reason why the activity isn't yet started, is on hold, was cancelled, etc.
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * Captures intention to not do something that may have been previously typical.
     */
    prohibited: fhir.FhirBoolean | null;
    /**
     * Allows prompting for activities and detection of missed planned activities.
     */
    scheduled?: (fhir.Timing | fhir.Period | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element CarePlan.activity.detail.scheduled[x]
     */
    protected static readonly _fts_scheduledIsChoice: true;
    /**
     * Helps in planning of activity.
     */
    location?: fhir.Reference | undefined;
    /**
     * Helps in planning of activity.
     */
    performer: fhir.Reference[];
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    product?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element CarePlan.activity.detail.product[x]
     */
    protected static readonly _fts_productIsChoice: true;
    /**
     * Allows rough dose checking.
     */
    dailyAmount?: fhir.Quantity | undefined;
    /**
     * Identifies the quantity expected to be supplied, administered or consumed by the subject.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Default constructor for CarePlanActivityDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CarePlanActivityDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CarePlanActivity type.
 */
export interface CarePlanActivityArgs extends fhir.BackboneElementArgs {
    /**
     * Links plan to resulting actions.
     */
    actionResulting?: fhir.ReferenceArgs[] | undefined;
    /**
     * Can be used to capture information about adherence, progress, concerns, etc.
     */
    progress?: fhir.AnnotationArgs[] | undefined;
    /**
     * Details in a form consistent with other applications and contexts of use.
     */
    reference?: fhir.ReferenceArgs | undefined;
    /**
     * Details in a simple form for generic care plan systems.
     */
    detail?: fhir.CarePlanActivityDetailArgs | undefined;
}
/**
 * Allows systems to prompt for performance of planned activities, and validate plans against best practice.
 */
export declare class CarePlanActivity extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Links plan to resulting actions.
     */
    actionResulting: fhir.Reference[];
    /**
     * Can be used to capture information about adherence, progress, concerns, etc.
     */
    progress: fhir.Annotation[];
    /**
     * Details in a form consistent with other applications and contexts of use.
     */
    reference?: fhir.Reference | undefined;
    /**
     * Details in a simple form for generic care plan systems.
     */
    detail?: fhir.CarePlanActivityDetail | undefined;
    /**
     * Default constructor for CarePlanActivity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CarePlanActivityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CarePlan type.
 */
export interface CarePlanArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "CarePlan" | undefined;
    /**
     * Need to allow connection to a wider workflow.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Identifies the patient or group whose intended care is described by the plan.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Allows clinicians to determine whether the plan is actionable or not.
     */
    status: fhir.FhirCode<CarePlanStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CarePlan.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Identifies the context in which this particular CarePlan is defined.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * Allows tracking what plan(s) are in effect at a particular time.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Identifies the individual(s) or ogranization who is responsible for the content of the care plan.
     */
    author?: fhir.ReferenceArgs[] | undefined;
    /**
     * Indicates how current the plan is.
     */
    modified?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: CarePlan.modified
     */
    _modified?: fhir.FhirElementArgs;
    /**
     * Used for filtering what plan(s) are retrieved and displayed to different types of users.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Provides more detail than conveyed by category.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CarePlan.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Links plan to the conditions it manages.  Also scopes plans - multiple plans may exist addressing different concerns.
     */
    addresses?: fhir.ReferenceArgs[] | undefined;
    /**
     * Identifies barriers and other considerations associated with the care plan.
     */
    support?: fhir.ReferenceArgs[] | undefined;
    /**
     * Identifies CarePlans with some sort of formal relationship to the current plan.
     */
    relatedPlan?: fhir.CarePlanRelatedPlanArgs[] | undefined;
    /**
     * Allows representation of care teams, helps scope care plan.  In some cases may be a determiner of access permissions.
     */
    participant?: fhir.CarePlanParticipantArgs[] | undefined;
    /**
     * Provides context for plan.  Allows plan effectiveness to be evaluated by clinicians.
     */
    goal?: fhir.ReferenceArgs[] | undefined;
    /**
     * Allows systems to prompt for performance of planned activities, and validate plans against best practice.
     */
    activity?: fhir.CarePlanActivityArgs[] | undefined;
    /**
     * Used to capture information that applies to the plan as a whole that doesn't fit into discrete elements.
     */
    note?: fhir.AnnotationArgs | undefined;
}
/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
export declare class CarePlan extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "CarePlan";
    /**
     * Need to allow connection to a wider workflow.
     */
    identifier: fhir.Identifier[];
    /**
     * Identifies the patient or group whose intended care is described by the plan.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Allows clinicians to determine whether the plan is actionable or not.
     */
    status: fhir.FhirCode<CarePlanStatusCodeType> | null;
    /**
     * Identifies the context in which this particular CarePlan is defined.
     */
    context?: fhir.Reference | undefined;
    /**
     * Allows tracking what plan(s) are in effect at a particular time.
     */
    period?: fhir.Period | undefined;
    /**
     * Identifies the individual(s) or ogranization who is responsible for the content of the care plan.
     */
    author: fhir.Reference[];
    /**
     * Indicates how current the plan is.
     */
    modified?: fhir.FhirDateTime | undefined;
    /**
     * Used for filtering what plan(s) are retrieved and displayed to different types of users.
     */
    category: fhir.CodeableConcept[];
    /**
     * Provides more detail than conveyed by category.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Links plan to the conditions it manages.  Also scopes plans - multiple plans may exist addressing different concerns.
     */
    addresses: fhir.Reference[];
    /**
     * Identifies barriers and other considerations associated with the care plan.
     */
    support: fhir.Reference[];
    /**
     * Identifies CarePlans with some sort of formal relationship to the current plan.
     */
    relatedPlan: fhir.CarePlanRelatedPlan[];
    /**
     * Allows representation of care teams, helps scope care plan.  In some cases may be a determiner of access permissions.
     */
    participant: fhir.CarePlanParticipant[];
    /**
     * Provides context for plan.  Allows plan effectiveness to be evaluated by clinicians.
     */
    goal: fhir.Reference[];
    /**
     * Allows systems to prompt for performance of planned activities, and validate plans against best practice.
     */
    activity: fhir.CarePlanActivity[];
    /**
     * Used to capture information that applies to the plan as a whole that doesn't fit into discrete elements.
     */
    note?: fhir.Annotation | undefined;
    /**
     * Default constructor for CarePlan - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CarePlanArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=CarePlan.d.ts.map