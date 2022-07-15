import * as fhir from '../fhir.js';
import { TaskStatusCodeType } from '../fhirValueSets/TaskStatusCodes.js';
import { RequestIntentCodeType } from '../fhirValueSets/RequestIntentCodes.js';
import { RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
/**
 * Valid arguments for the TaskRequester type.
 */
export interface TaskRequesterArgs extends fhir.BackboneElementArgs {
    /**
     * The device, practitioner, etc. who initiated the task.
     */
    agent: fhir.ReferenceArgs | null;
    /**
     * The organization the device or practitioner was acting on behalf of when they initiated the task.
     */
    onBehalfOf?: fhir.ReferenceArgs | undefined;
}
/**
 * The creator of the task.
 */
export declare class TaskRequester extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The device, practitioner, etc. who initiated the task.
     */
    agent: fhir.Reference | null;
    /**
     * The organization the device or practitioner was acting on behalf of when they initiated the task.
     */
    onBehalfOf?: fhir.Reference | undefined;
    /**
     * Default constructor for TaskRequester - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TaskRequesterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TaskRestriction type.
 */
export interface TaskRestrictionArgs extends fhir.BackboneElementArgs {
    /**
     * Indicates the number of times the requested action should occur.
     */
    repetitions?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Task.restriction.repetitions
     */
    _repetitions?: fhir.FhirElementArgs;
    /**
     * Note that period.high is the due date representing the time by which the task should be completed.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?
     */
    recipient?: fhir.ReferenceArgs[] | undefined;
}
/**
 * If the Task.focus is a request resource and the task is seeking fulfillment (i.e is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
 */
export declare class TaskRestriction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Indicates the number of times the requested action should occur.
     */
    repetitions?: fhir.FhirPositiveInt | undefined;
    /**
     * Note that period.high is the due date representing the time by which the task should be completed.
     */
    period?: fhir.Period | undefined;
    /**
     * For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?
     */
    recipient: fhir.Reference[];
    /**
     * Default constructor for TaskRestriction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TaskRestrictionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TaskInput type.
 */
export interface TaskInputArgs extends fhir.BackboneElementArgs {
    /**
     * If referencing a BPMN workflow or Protocol, the "system" is the URL for the workflow definition and the code is the "name" of the required input.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * The value of the input parameter as a basic type.
     */
    value?: fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.Meta | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueBase64Binary?: fhir.FhirBase64Binary | string | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCode?: fhir.FhirCode | string | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDate?: fhir.FhirDate | string | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueId?: fhir.FhirId | string | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInstant?: fhir.FhirInstant | string | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMarkdown?: fhir.FhirMarkdown | string | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueOid?: fhir.FhirOid | string | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTime?: fhir.FhirTime | string | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUri?: fhir.FhirUri | string | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAddress?: fhir.AddressArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAge?: fhir.AgeArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAnnotation?: fhir.AnnotationArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCoding?: fhir.CodingArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContactPoint?: fhir.ContactPointArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCount?: fhir.CountArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDistance?: fhir.DistanceArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDuration?: fhir.DurationArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueHumanName?: fhir.HumanNameArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMoney?: fhir.MoneyArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRange?: fhir.RangeArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRatio?: fhir.RatioArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueReference?: fhir.ReferenceArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueSignature?: fhir.SignatureArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTiming?: fhir.TimingArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMeta?: fhir.MetaArgs | undefined;
}
/**
 * Additional information that may be needed in the execution of the task.
 */
export declare class TaskInput extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If referencing a BPMN workflow or Protocol, the "system" is the URL for the workflow definition and the code is the "name" of the required input.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The value of the input parameter as a basic type.
     */
    value: (fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.Meta) | null;
    /**
     * Internal flag to properly serialize choice-type element Task.input.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for TaskInput - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TaskInputArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TaskOutput type.
 */
export interface TaskOutputArgs extends fhir.BackboneElementArgs {
    /**
     * The name of the Output parameter.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * The value of the Output parameter as a basic type.
     */
    value?: fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.Meta | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBase64Binary?: fhir.FhirBase64Binary | string | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCode?: fhir.FhirCode | string | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDate?: fhir.FhirDate | string | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueId?: fhir.FhirId | string | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInstant?: fhir.FhirInstant | string | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMarkdown?: fhir.FhirMarkdown | string | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueOid?: fhir.FhirOid | string | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTime?: fhir.FhirTime | string | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUri?: fhir.FhirUri | string | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAddress?: fhir.AddressArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAge?: fhir.AgeArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAnnotation?: fhir.AnnotationArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCoding?: fhir.CodingArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContactPoint?: fhir.ContactPointArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCount?: fhir.CountArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDistance?: fhir.DistanceArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDuration?: fhir.DurationArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueHumanName?: fhir.HumanNameArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMoney?: fhir.MoneyArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRange?: fhir.RangeArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRatio?: fhir.RatioArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueReference?: fhir.ReferenceArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueSignature?: fhir.SignatureArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTiming?: fhir.TimingArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMeta?: fhir.MetaArgs | undefined;
}
/**
 * Outputs produced by the Task.
 */
export declare class TaskOutput extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of the Output parameter.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The value of the Output parameter as a basic type.
     */
    value: (fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.Meta) | null;
    /**
     * Internal flag to properly serialize choice-type element Task.output.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for TaskOutput - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TaskOutputArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Task type.
 */
export interface TaskArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Task" | undefined;
    /**
     * The business identifier for this task.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc.
     */
    definition?: fhir.FhirUri | fhir.Reference | undefined;
    /**
     * A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc.
     */
    definitionUri?: fhir.FhirUri | string | undefined;
    /**
     * A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc.
     */
    definitionReference?: fhir.ReferenceArgs | undefined;
    /**
     * BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ProcedureRequest, MedicationRequest, ProcedureRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfil.  This latter resource is referenced by FocusOn.  For example, based on a ProcedureRequest (= BasedOn), a task is created to fulfil a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * An identifier that links together multiple tasks and other requests that were created in the same context.
     */
    groupIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * This should usually be 0..1.
     */
    partOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * The current status of the task.
     */
    status: fhir.FhirCode<TaskStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Task.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * This applies to the current status.  Look at the history of the task to see reasons for past statuses.
     */
    statusReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Contains business-specific nuances of the business state.
     */
    businessStatus?: fhir.CodeableConceptArgs | undefined;
    /**
     * This element is immutable.  Proposed tasks, planned tasks, etc. must be distinct instances.
     * In most cases, Tasks will have an intent of "order".
     */
    intent: fhir.FhirCode<RequestIntentCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Task.intent
     */
    _intent?: fhir.FhirElementArgs;
    /**
     * Indicates how quickly the Task should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Task.priority
     */
    _priority?: fhir.FhirElementArgs;
    /**
     * The title (eg "My Tasks", "Outstanding Tasks for Patient X") should go into the code.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * A free-text description of what is to be performed.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Task.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * If multiple resources need to be manipulated, use sub-tasks.  (This ensures that status can be tracked independently for each referenced resource.).
     */
    focus?: fhir.ReferenceArgs | undefined;
    /**
     * The entity who benefits from the performance of the service specified in the task (e.g., the patient).
     */
    for?: fhir.ReferenceArgs | undefined;
    /**
     * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).
     */
    executionPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The date and time this task was created.
     */
    authoredOn?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Task.authoredOn
     */
    _authoredOn?: fhir.FhirElementArgs;
    /**
     * The date and time of last modification to this task.
     */
    lastModified?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Task.lastModified
     */
    _lastModified?: fhir.FhirElementArgs;
    /**
     * The creator of the task.
     */
    requester?: fhir.TaskRequesterArgs | undefined;
    /**
     * The type of participant that can execute the task.
     */
    performerType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Tasks may be created with an owner not yet identified.
     */
    owner?: fhir.ReferenceArgs | undefined;
    /**
     * This should only be included if there is no focus or if it differs from the reason indicated on the focus.
     */
    reason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Free-text information captured about the task as it progresses.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
     */
    relevantHistory?: fhir.ReferenceArgs[] | undefined;
    /**
     * If the Task.focus is a request resource and the task is seeking fulfillment (i.e is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
     */
    restriction?: fhir.TaskRestrictionArgs | undefined;
    /**
     * Additional information that may be needed in the execution of the task.
     */
    input?: fhir.TaskInputArgs[] | undefined;
    /**
     * Outputs produced by the Task.
     */
    output?: fhir.TaskOutputArgs[] | undefined;
}
/**
 * A task to be performed.
 */
export declare class Task extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Task";
    /**
     * The business identifier for this task.
     */
    identifier: fhir.Identifier[];
    /**
     * A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc.
     */
    definition?: (fhir.FhirUri | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Task.definition[x]
     */
    protected static readonly _fts_definitionIsChoice: true;
    /**
     * BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ProcedureRequest, MedicationRequest, ProcedureRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfil.  This latter resource is referenced by FocusOn.  For example, based on a ProcedureRequest (= BasedOn), a task is created to fulfil a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
     */
    basedOn: fhir.Reference[];
    /**
     * An identifier that links together multiple tasks and other requests that were created in the same context.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * This should usually be 0..1.
     */
    partOf: fhir.Reference[];
    /**
     * The current status of the task.
     */
    status: fhir.FhirCode<TaskStatusCodeType> | null;
    /**
     * This applies to the current status.  Look at the history of the task to see reasons for past statuses.
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * Contains business-specific nuances of the business state.
     */
    businessStatus?: fhir.CodeableConcept | undefined;
    /**
     * This element is immutable.  Proposed tasks, planned tasks, etc. must be distinct instances.
     * In most cases, Tasks will have an intent of "order".
     */
    intent: fhir.FhirCode<RequestIntentCodeType> | null;
    /**
     * Indicates how quickly the Task should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | undefined;
    /**
     * The title (eg "My Tasks", "Outstanding Tasks for Patient X") should go into the code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * A free-text description of what is to be performed.
     */
    description?: fhir.FhirString | undefined;
    /**
     * If multiple resources need to be manipulated, use sub-tasks.  (This ensures that status can be tracked independently for each referenced resource.).
     */
    focus?: fhir.Reference | undefined;
    /**
     * The entity who benefits from the performance of the service specified in the task (e.g., the patient).
     */
    for?: fhir.Reference | undefined;
    /**
     * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.
     */
    context?: fhir.Reference | undefined;
    /**
     * Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).
     */
    executionPeriod?: fhir.Period | undefined;
    /**
     * The date and time this task was created.
     */
    authoredOn?: fhir.FhirDateTime | undefined;
    /**
     * The date and time of last modification to this task.
     */
    lastModified?: fhir.FhirDateTime | undefined;
    /**
     * The creator of the task.
     */
    requester?: fhir.TaskRequester | undefined;
    /**
     * The type of participant that can execute the task.
     */
    performerType: fhir.CodeableConcept[];
    /**
     * Tasks may be created with an owner not yet identified.
     */
    owner?: fhir.Reference | undefined;
    /**
     * This should only be included if there is no focus or if it differs from the reason indicated on the focus.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * Free-text information captured about the task as it progresses.
     */
    note: fhir.Annotation[];
    /**
     * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
     */
    relevantHistory: fhir.Reference[];
    /**
     * If the Task.focus is a request resource and the task is seeking fulfillment (i.e is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
     */
    restriction?: fhir.TaskRestriction | undefined;
    /**
     * Additional information that may be needed in the execution of the task.
     */
    input: fhir.TaskInput[];
    /**
     * Outputs produced by the Task.
     */
    output: fhir.TaskOutput[];
    /**
     * Default constructor for Task - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TaskArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Task.d.ts.map