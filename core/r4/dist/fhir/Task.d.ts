import * as fhir from '../fhir.js';
import { TaskStatusCodeType } from '../fhirValueSets/TaskStatusCodes.js';
import { TaskIntentCodeType } from '../fhirValueSets/TaskIntentCodes.js';
import { RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
/**
 * Valid arguments for the TaskRestriction type.
 */
export interface TaskRestrictionArgs extends fhir.BackboneElementArgs {
    /**
     * Indicates the number of times the requested action should occur.
     */
    repetitions?: fhir.FhirPositiveInt | number | undefined;
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
 * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
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
    doModelValidation(): fhir.FtsIssue[];
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
    value?: fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCanonical | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.FhirUrl | fhir.FhirUuid | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.ContactDetail | fhir.Contributor | fhir.DataRequirement | fhir.Expression | fhir.ParameterDefinition | fhir.RelatedArtifact | fhir.TriggerDefinition | fhir.UsageContext | fhir.Dosage | fhir.Meta | undefined;
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
    valueCanonical?: fhir.FhirCanonical | string | undefined;
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
    valueUrl?: fhir.FhirUrl | string | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUuid?: fhir.FhirUuid | string | undefined;
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
    valueContactDetail?: fhir.ContactDetailArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContributor?: fhir.ContributorArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDataRequirement?: fhir.DataRequirementArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueExpression?: fhir.ExpressionArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueParameterDefinition?: fhir.ParameterDefinitionArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRelatedArtifact?: fhir.RelatedArtifactArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTriggerDefinition?: fhir.TriggerDefinitionArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUsageContext?: fhir.UsageContextArgs | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDosage?: fhir.DosageArgs | undefined;
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
    value: (fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCanonical | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.FhirUrl | fhir.FhirUuid | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.ContactDetail | fhir.Contributor | fhir.DataRequirement | fhir.Expression | fhir.ParameterDefinition | fhir.RelatedArtifact | fhir.TriggerDefinition | fhir.UsageContext | fhir.Dosage | fhir.Meta) | null;
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
    doModelValidation(): fhir.FtsIssue[];
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
    value?: fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCanonical | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.FhirUrl | fhir.FhirUuid | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.ContactDetail | fhir.Contributor | fhir.DataRequirement | fhir.Expression | fhir.ParameterDefinition | fhir.RelatedArtifact | fhir.TriggerDefinition | fhir.UsageContext | fhir.Dosage | fhir.Meta | undefined;
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
    valueCanonical?: fhir.FhirCanonical | string | undefined;
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
    valueUrl?: fhir.FhirUrl | string | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUuid?: fhir.FhirUuid | string | undefined;
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
    valueContactDetail?: fhir.ContactDetailArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContributor?: fhir.ContributorArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDataRequirement?: fhir.DataRequirementArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueExpression?: fhir.ExpressionArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueParameterDefinition?: fhir.ParameterDefinitionArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRelatedArtifact?: fhir.RelatedArtifactArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTriggerDefinition?: fhir.TriggerDefinitionArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUsageContext?: fhir.UsageContextArgs | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDosage?: fhir.DosageArgs | undefined;
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
    value: (fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCanonical | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.FhirUrl | fhir.FhirUuid | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.ContactDetail | fhir.Contributor | fhir.DataRequirement | fhir.Expression | fhir.ParameterDefinition | fhir.RelatedArtifact | fhir.TriggerDefinition | fhir.UsageContext | fhir.Dosage | fhir.Meta) | null;
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
    doModelValidation(): fhir.FtsIssue[];
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
     * The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesCanonical?: fhir.FhirCanonical | string | undefined;
    /**
     * The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesUri?: fhir.FhirUri | string | undefined;
    /**
     * BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
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
    intent: fhir.FhirCode<TaskIntentCodeType> | string | undefined;
    /**
     * Indicates how quickly the Task should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | string | undefined;
    /**
     * The title (eg "My Tasks", "Outstanding Tasks for Patient X") should go into the code.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * A free-text description of what is to be performed.
     */
    description?: fhir.FhirString | string | undefined;
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
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).
     */
    executionPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The date and time this task was created.
     */
    authoredOn?: fhir.FhirDateTime | string | undefined;
    /**
     * The date and time of last modification to this task.
     */
    lastModified?: fhir.FhirDateTime | string | undefined;
    /**
     * The creator of the task.
     */
    requester?: fhir.ReferenceArgs | undefined;
    /**
     * The kind of participant that should perform the task.
     */
    performerType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Tasks may be created with an owner not yet identified.
     */
    owner?: fhir.ReferenceArgs | undefined;
    /**
     * Principal physical location where the this task is performed.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * This should only be included if there is no focus or if it differs from the reason indicated on the focus.
     */
    reasonCode?: fhir.CodeableConceptArgs | undefined;
    /**
     * Tasks might be justified based on an Observation, a Condition, a past or planned procedure, etc.   This should only be included if there is no focus or if it differs from the reason indicated on the focus.    Use the CodeableConcept text element in `Task.reasonCode` if the data is free (uncoded) text.
     */
    reasonReference?: fhir.ReferenceArgs | undefined;
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task.
     */
    insurance?: fhir.ReferenceArgs[] | undefined;
    /**
     * Free-text information captured about the task as it progresses.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
     */
    relevantHistory?: fhir.ReferenceArgs[] | undefined;
    /**
     * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
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
     * The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesCanonical?: fhir.FhirCanonical | undefined;
    /**
     * The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesUri?: fhir.FhirUri | undefined;
    /**
     * BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
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
    intent: fhir.FhirCode<TaskIntentCodeType> | null;
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
    encounter?: fhir.Reference | undefined;
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
    requester?: fhir.Reference | undefined;
    /**
     * The kind of participant that should perform the task.
     */
    performerType: fhir.CodeableConcept[];
    /**
     * Tasks may be created with an owner not yet identified.
     */
    owner?: fhir.Reference | undefined;
    /**
     * Principal physical location where the this task is performed.
     */
    location?: fhir.Reference | undefined;
    /**
     * This should only be included if there is no focus or if it differs from the reason indicated on the focus.
     */
    reasonCode?: fhir.CodeableConcept | undefined;
    /**
     * Tasks might be justified based on an Observation, a Condition, a past or planned procedure, etc.   This should only be included if there is no focus or if it differs from the reason indicated on the focus.    Use the CodeableConcept text element in `Task.reasonCode` if the data is free (uncoded) text.
     */
    reasonReference?: fhir.Reference | undefined;
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task.
     */
    insurance: fhir.Reference[];
    /**
     * Free-text information captured about the task as it progresses.
     */
    note: fhir.Annotation[];
    /**
     * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
     */
    relevantHistory: fhir.Reference[];
    /**
     * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
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
     * Required-bound Value Set for status (Task.status)
     */
    static get statusRequiredCodes(): {
        readonly Accepted: "accepted";
        readonly Cancelled: "cancelled";
        readonly Completed: "completed";
        readonly Draft: "draft";
        readonly EnteredInError: "entered-in-error";
        readonly Failed: "failed";
        readonly InProgress: "in-progress";
        readonly OnHold: "on-hold";
        readonly Ready: "ready";
        readonly Received: "received";
        readonly Rejected: "rejected";
        readonly Requested: "requested";
    };
    /**
     * Required-bound Value Set for intent (Task.intent)
     */
    static get intentRequiredCodes(): {
        readonly FillerOrder: "filler-order";
        readonly InstanceOrder: "instance-order";
        readonly Option: "option";
        readonly Order: "order";
        readonly OriginalOrder: "original-order";
        readonly Plan: "plan";
        readonly Proposal: "proposal";
        readonly ReflexOrder: "reflex-order";
        readonly Unknown: "unknown";
    };
    /**
     * Required-bound Value Set for priority (Task.priority)
     */
    static get priorityRequiredCodes(): {
        readonly ASAP: "asap";
        readonly Routine: "routine";
        readonly STAT: "stat";
        readonly Urgent: "urgent";
    };
    /**
     * Preferred-bound Value Set for performerType (Task.performerType)
     */
    static get performerTypePreferredCodings(): {
        readonly DentalSurgeon: fhir.Coding;
        readonly DieticianANDORPublicHealthNutritionist: fhir.Coding;
        readonly Nurse: fhir.Coding;
        readonly NursingPersonnel: fhir.Coding;
        readonly MidwiferyPersonnel: fhir.Coding;
        readonly PhysiotherapistANDOROccupationalTherapist: fhir.Coding;
        readonly PhilologistTranslatorANDORInterpreter: fhir.Coding;
        readonly MedicalDoctor: fhir.Coding;
        readonly Neuropathologist: fhir.Coding;
        readonly Nephrologist: fhir.Coding;
        readonly Obstetrician: fhir.Coding;
        readonly SchoolDentalAssistant: fhir.Coding;
        readonly SpecializedSurgeon: fhir.Coding;
        readonly MedicalMicrobiologist: fhir.Coding;
        readonly MedicalPractitioner: fhir.Coding;
        readonly MedicalAdministratorNational: fhir.Coding;
        readonly ConsultantPhysician: fhir.Coding;
        readonly ConsultantSurgeon: fhir.Coding;
        readonly ConsultantGynecologyAndObstetrics: fhir.Coding;
        readonly Anesthetist: fhir.Coding;
        readonly HospitalRegistrar: fhir.Coding;
        readonly HouseOfficer: fhir.Coding;
        readonly OccupationalPhysician: fhir.Coding;
        readonly ClinicalMedicalOfficer: fhir.Coding;
        readonly MedicalPractitionerTeaching: fhir.Coding;
        readonly DentalAdministrator: fhir.Coding;
        readonly DentalConsultant: fhir.Coding;
        readonly DentalGeneralPractitioner: fhir.Coding;
        readonly DentalPractitionerTeaching: fhir.Coding;
        readonly NurseAdministratorNational: fhir.Coding;
        readonly NursingOfficerRegion: fhir.Coding;
        readonly NursingOfficerDistrict: fhir.Coding;
        readonly NursingAdministratorProfessionalBody: fhir.Coding;
        readonly NursingOfficerDivision: fhir.Coding;
        readonly NurseEducationDirector: fhir.Coding;
        readonly OccupationalHealthNursingOfficer: fhir.Coding;
        readonly NursingOfficer: fhir.Coding;
        readonly MidwiferySister: fhir.Coding;
        readonly NursingSisterTheatre: fhir.Coding;
        readonly StaffNurse: fhir.Coding;
        readonly StaffMidwife: fhir.Coding;
        readonly StateEnrolledNurse: fhir.Coding;
        readonly DistrictNurse: fhir.Coding; /**
         * The value of the input parameter as a basic type.
         */
        readonly PrivateNurse: fhir.Coding;
        readonly CommunityMidwife: fhir.Coding;
        readonly ClinicNurse: fhir.Coding;
        readonly PracticeNurse: fhir.Coding;
        readonly SchoolNurse: fhir.Coding;
        readonly NurseTeaching: fhir.Coding;
        readonly StudentNurse: fhir.Coding;
        readonly DentalNurse: fhir.Coding;
        readonly CommunityPediatricNurse: fhir.Coding;
        readonly HospitalPharmacist: fhir.Coding;
        readonly RetailPharmacist: fhir.Coding; /**
         * The value of the input parameter as a basic type.
         */
        readonly IndustrialPharmacist: fhir.Coding;
        readonly PharmaceuticalOfficerHA: fhir.Coding;
        readonly TraineePharmacist: fhir.Coding;
        readonly MedicalRadiographer: fhir.Coding;
        readonly DiagnosticRadiographer: fhir.Coding;
        readonly TherapeuticRadiographer: fhir.Coding;
        readonly TraineeRadiographer: fhir.Coding;
        readonly OphthalmicOptician: fhir.Coding;
        readonly TraineeOptician: fhir.Coding;
        readonly RemedialGymnast: fhir.Coding;
        readonly SpeechAndLanguageTherapist: fhir.Coding;
        readonly Orthoptist: fhir.Coding;
        readonly TraineeRemedialTherapist: fhir.Coding;
        readonly Dietician: fhir.Coding;
        readonly Podiatrist: fhir.Coding;
        readonly DentalAuxiliary: fhir.Coding;
        readonly ECGTechnician: fhir.Coding;
        readonly EEGTechnician: fhir.Coding;
        readonly ArtificialLimbFitter: fhir.Coding;
        readonly ATAudiologyTechnician: fhir.Coding;
        readonly PharmacyTechnician: fhir.Coding;
        readonly TraineeMedicalTechnician: fhir.Coding;
        readonly Geneticist: fhir.Coding;
        readonly SurgicalCorsetFitter: fhir.Coding;
        readonly DentalTechnician: fhir.Coding;
        readonly Cardiologist: fhir.Coding;
        readonly Dermatologist: fhir.Coding;
        readonly LaboratoryHematologist: fhir.Coding;
        readonly Gerodontist: fhir.Coding;
        readonly RemovableProsthodontist: fhir.Coding;
        readonly SpecializedDentist: fhir.Coding;
        readonly Neuropsychiatrist: fhir.Coding;
        readonly ClinicalAssistant: fhir.Coding;
        readonly SeniorRegistrar: fhir.Coding;
        readonly Registrar: fhir.Coding;
        readonly SeniorHouseOfficer: fhir.Coding;
        readonly MOMedicalOfficer: fhir.Coding;
        readonly HealthVisitorNurseMidwife: fhir.Coding;
        readonly RegisteredNurse: fhir.Coding;
        readonly MidwiferyTutor: fhir.Coding;
        readonly AccidentAndEmergencyNurse: fhir.Coding;
        readonly TriageNurse: fhir.Coding;
        readonly CommunityNurse: fhir.Coding;
        readonly NursingContinenceAdvisor: fhir.Coding;
        readonly CoronaryCareNurse: fhir.Coding;
        readonly DiabeticNurse: fhir.Coding;
        readonly FamilyPlanningNurse: fhir.Coding;
        readonly CareOfTheElderlyNurse: fhir.Coding;
        readonly ICNInfectionControlNurse: fhir.Coding;
        readonly IntensiveTherapyNurse: fhir.Coding;
        readonly LearningDisabilitiesNurse: fhir.Coding;
        readonly NeonatalNurse: fhir.Coding;
        readonly NeurologyNurse: fhir.Coding;
        readonly IndustrialNurse: fhir.Coding;
        readonly OncologyNurse: fhir.Coding;
        readonly MacmillanNurse: fhir.Coding;
        readonly MarieCurieNurse: fhir.Coding;
        readonly PainControlNurse: fhir.Coding;
        /**
         * The value of the Output parameter as a basic type.
         */
        readonly PalliativeCareNurse: fhir.Coding;
        readonly ChemotherapyNurse: fhir.Coding;
        readonly RadiotherapyNurse: fhir.Coding;
        readonly PACUNurse: fhir.Coding;
        readonly Stomatherapist: fhir.Coding;
        readonly TheatreNurse: fhir.Coding;
        readonly PediatricNurse: fhir.Coding;
        readonly PsychiatricNurse: fhir.Coding;
        readonly CommunityMentalHealthNurse: fhir.Coding;
        readonly RenalNurse: fhir.Coding;
        readonly HemodialysisNurse: fhir.Coding;
        readonly WoundCareNurse: fhir.Coding;
        readonly NurseGrade: fhir.Coding;
        readonly ClinicalNurseSpecialist: fhir.Coding;
        readonly NursePractitioner: fhir.Coding;
        readonly NursingSister: fhir.Coding;
        readonly CNChargeNurse: fhir.Coding;
        readonly WardManager: fhir.Coding;
        readonly NursingTeamLeader: fhir.Coding;
        readonly NursingAssistant: fhir.Coding;
        readonly HealthcareAssistant: fhir.Coding;
        readonly NurseryNurse: fhir.Coding;
        readonly HealthcareServiceManager: fhir.Coding;
        readonly OccupationalHealthServiceManager: fhir.Coding;
        readonly CommunityNurseManager: fhir.Coding;
        readonly BehaviorTherapist: fhir.Coding;
        readonly BehaviorTherapyAssistant: fhir.Coding;
        readonly DramaTherapist: fhir.Coding; /**
         * The value of the Output parameter as a basic type.
         */
        readonly DomiciliaryOccupationalTherapist: fhir.Coding;
        readonly OccupationalTherapyHelper: fhir.Coding;
        readonly Psychotherapist: fhir.Coding;
        readonly CommunityBasedPhysiotherapist: fhir.Coding;
        readonly PlayTherapist: fhir.Coding;
        readonly PlaySpecialist: fhir.Coding;
        readonly PlayLeader: fhir.Coding;
        readonly CommunityBasedSpeechLanguageTherapist: fhir.Coding;
        readonly SpeechLanguageAssistant: fhir.Coding;
        readonly ProfessionalCounselor: fhir.Coding;
        readonly MarriageGuidanceCounselor: fhir.Coding;
        readonly TrainedNurseCounselor: fhir.Coding;
        readonly TrainedSocialWorkerCounselor: fhir.Coding;
        readonly TrainedPersonnelCounselor: fhir.Coding;
        readonly Psychoanalyst: fhir.Coding;
        readonly AssistantPsychologist: fhir.Coding;
        readonly CommunityBasedPodiatrist: fhir.Coding;
        readonly FootCareWorker: fhir.Coding;
        readonly Audiometrician: fhir.Coding;
        readonly Audiometrist: fhir.Coding;
        readonly TechnicalHealthcareOccupation: fhir.Coding;
        readonly OccupationalTherapyTechnicalInstructor: fhir.Coding;
        readonly AdministrativeHealthcareStaff: fhir.Coding;
        readonly ComplementaryHealthWorker: fhir.Coding;
        readonly SupportingServicesPersonnel: fhir.Coding;
        readonly ResearchAssociate: fhir.Coding;
        readonly ResearchNurse: fhir.Coding;
        readonly HumanAidToCommunication: fhir.Coding;
        readonly Palantypist: fhir.Coding;
        readonly NoteTaker: fhir.Coding;
        readonly Cuer: fhir.Coding;
        readonly Lipspeaker: fhir.Coding;
        readonly InterpreterForBritishSignLanguage: fhir.Coding;
        readonly InterpreterForSignsSupportingEnglish: fhir.Coding;
        readonly GeneralPractitionerLocum: fhir.Coding;
        readonly MedicalAssistant: fhir.Coding;
        readonly LactationConsultant: fhir.Coding;
        readonly MidwifeCounselor: fhir.Coding;
        readonly OrthopedicSurgeon: fhir.Coding;
        readonly ThoracicSurgeon: fhir.Coding;
        readonly Naturopath: fhir.Coding;
        readonly CommunityHealthPhysician: fhir.Coding;
        readonly Prosthetist: fhir.Coding;
        readonly PhysicalMedicineSpecialist: fhir.Coding;
        readonly Urologist: fhir.Coding;
        readonly HipAndKneeSurgeon: fhir.Coding;
        readonly ElectroencephalographySpecialist: fhir.Coding;
        readonly DentalHygienist: fhir.Coding;
        readonly Hepatologist: fhir.Coding;
        readonly PublicHealthNurse: fhir.Coding;
        readonly NursingOccupation: fhir.Coding;
        readonly MedicalDentalTechnicians: fhir.Coding;
        readonly Optometrist: fhir.Coding;
        readonly ParkinsonDiseaseNurse: fhir.Coding;
        readonly Neonatologist: fhir.Coding;
        readonly ChemicalPathologist: fhir.Coding;
        readonly ShoulderSurgeon: fhir.Coding;
        readonly InterventionalRadiologist: fhir.Coding;
        readonly SpecialistRegistrar: fhir.Coding;
        readonly MemberOfMentalHealthReviewTribunal: fhir.Coding;
        readonly HospitalManager: fhir.Coding;
        readonly ResponsibleMedicalOfficer: fhir.Coding;
        readonly IndependentDoctor: fhir.Coding;
        readonly BereavementCounselor: fhir.Coding;
        readonly Surgeon: fhir.Coding;
        readonly MedicalTechnician: fhir.Coding;
        readonly RemedialTherapist: fhir.Coding;
        readonly AccidentAndEmergencyDoctor: fhir.Coding;
        readonly ClinicalOncologist: fhir.Coding;
        readonly FamilyPlanningDoctor: fhir.Coding;
        readonly AssociateGeneralPractitioner: fhir.Coding;
        readonly PartnerOfGeneralPractitioner: fhir.Coding;
        readonly AssistantGP: fhir.Coding;
        readonly DeputizingGeneralPractitioner: fhir.Coding;
        readonly GeneralPractitionerRegistrar: fhir.Coding;
        readonly AmbulatoryPediatrician: fhir.Coding;
        /**
         * Additional information that may be needed in the execution of the task.
         */
        readonly CommunityPediatrician: fhir.Coding;
        readonly PediatricCardiologist: fhir.Coding;
        readonly PediatricEndocrinologist: fhir.Coding;
        readonly PediatricGastroenterologist: fhir.Coding;
        readonly PediatricNephrologist: fhir.Coding;
        readonly PediatricNeurologist: fhir.Coding;
        readonly PediatricRheumatologist: fhir.Coding;
        readonly PediatricOncologist: fhir.Coding;
        readonly PainManagementSpecialist: fhir.Coding;
        readonly IntensiveCareSpecialist: fhir.Coding;
        readonly AdultIntensiveCareSpecialist: fhir.Coding;
        readonly PediatricIntensiveCareSpecialist: fhir.Coding;
        readonly BloodTransfusionDoctor: fhir.Coding;
        readonly Histopathologist: fhir.Coding;
        readonly Physician: fhir.Coding;
        readonly ChestPhysician: fhir.Coding;
        readonly ThoracicPhysician: fhir.Coding;
        readonly ClinicalHematologist: fhir.Coding;
        readonly ClinicalNeurophysiologist: fhir.Coding;
        readonly ClinicalPhysiologist: fhir.Coding;
        readonly Diabetologist: fhir.Coding;
        readonly Andrologist: fhir.Coding;
        readonly Neuroendocrinologist: fhir.Coding;
        readonly ReproductiveEndocrinologist: fhir.Coding;
        readonly Thyroidologist: fhir.Coding;
        readonly ClinicalGeneticist: fhir.Coding;
        readonly ClinicalCytogeneticist: fhir.Coding;
        readonly ClinicalMolecularGeneticist: fhir.Coding;
        readonly GenitourinaryMedicinePhysician: fhir.Coding;
        readonly PalliativeCarePhysician: fhir.Coding;
        readonly RehabilitationPhysician: fhir.Coding;
        readonly ChildAndAdolescentPsychiatrist: fhir.Coding;
        readonly ForensicPsychiatrist: fhir.Coding;
        readonly LiaisonPsychiatrist: fhir.Coding;
        readonly Psychogeriatrician: fhir.Coding;
        readonly PsychiatristForMentalHandicap: fhir.Coding;
        readonly RehabilitationPsychiatrist: fhir.Coding;
        readonly ObstetricianAndGynecologist: fhir.Coding;
        readonly BreastSurgeon: fhir.Coding;
        readonly CardiothoracicSurgeon: fhir.Coding;
        readonly CardiacSurgeon: fhir.Coding;
        readonly EarNoseAndThroatSurgeon: fhir.Coding;
        readonly EndocrineSurgeon: fhir.Coding;
        readonly ThyroidSurgeon: fhir.Coding;
        readonly PituitarySurgeon: fhir.Coding;
        readonly GastrointestinalSurgeon: fhir.Coding;
        readonly GeneralGastrointestinalSurgeon: fhir.Coding;
        readonly UpperGastrointestinalSurgeon: fhir.Coding;
        readonly ColorectalSurgeon: fhir.Coding;
        readonly HandSurgeon: fhir.Coding;
        readonly HepatobiliarySurgeon: fhir.Coding;
        readonly OphthalmicSurgeon: fhir.Coding;
        readonly PediatricSurgeon: fhir.Coding;
        readonly PancreaticSurgeon: fhir.Coding;
        readonly TransplantSurgeon: fhir.Coding;
        readonly TraumaSurgeon: fhir.Coding;
        readonly VascularSurgeon: fhir.Coding;
        readonly MedicalPractitionerGrade: fhir.Coding;
        readonly HospitalConsultant: fhir.Coding;
        readonly VisitingSpecialistRegistrar: fhir.Coding;
        readonly ResearchRegistrar: fhir.Coding;
        readonly GeneralPractitionerGrade: fhir.Coding;
        readonly GeneralPractitionerPrincipal: fhir.Coding;
        readonly HospitalSpecialist: fhir.Coding;
        readonly AssociateSpecialist: fhir.Coding;
        readonly ResearchFellow: fhir.Coding;
        readonly AlliedHealthProfessional: fhir.Coding;
        readonly HospitalDietitian: fhir.Coding;
        readonly DomiciliaryPhysiotherapist: fhir.Coding;
        readonly GeneralPractitionerBasedPhysiotherapist: fhir.Coding;
        readonly HospitalBasedPhysiotherapist: fhir.Coding;
        readonly PrivatePhysiotherapist: fhir.Coding;
        readonly PhysiotherapyAssistant: fhir.Coding;
        readonly HospitalBasedSpeechAndLanguageTherapist: fhir.Coding;
        readonly ArtsTherapist: fhir.Coding;
        readonly DanceTherapist: fhir.Coding;
        readonly MusicTherapist: fhir.Coding;
        readonly RenalDietitian: fhir.Coding;
        readonly LiverDietitian: fhir.Coding;
        readonly OncologyDietitian: fhir.Coding;
        readonly PediatricDietitian: fhir.Coding;
        readonly DiabetesDietitian: fhir.Coding;
        readonly Audiologist: fhir.Coding;
        readonly HearingTherapist: fhir.Coding;
        readonly AudiologicalScientist: fhir.Coding;
        readonly HearingAidDispenser: fhir.Coding;
        readonly CommunityBasedOccupationalTherapist: fhir.Coding;
        readonly HospitalOccupationalTherapist: fhir.Coding;
        readonly SocialServicesOccupationalTherapist: fhir.Coding;
        readonly Orthotist: fhir.Coding;
        readonly SurgicalFitter: fhir.Coding;
        readonly HospitalBasedPodiatrist: fhir.Coding;
        readonly PodiatryAssistant: fhir.Coding;
        readonly LymphedemaNurse: fhir.Coding;
        readonly CommunityLearningDisabilitiesNurse: fhir.Coding;
        readonly ClinicalNurseTeacher: fhir.Coding;
        readonly CommunityPracticeNurseTeacher: fhir.Coding;
        readonly NurseTutor: fhir.Coding;
        readonly NurseTeacherPractitioner: fhir.Coding;
        readonly NurseLecturerPractitioner: fhir.Coding;
        readonly OutreachNurse: fhir.Coding;
        readonly AnestheticNurse: fhir.Coding;
        readonly NurseManager: fhir.Coding;
        readonly NurseAdministrator: fhir.Coding;
        readonly MidwiferyGrade: fhir.Coding;
        readonly Midwife: fhir.Coding;
        readonly StudentMidwife: fhir.Coding;
        readonly ParentcraftSister: fhir.Coding;
        readonly HealthcareProfessionalGrade: fhir.Coding;
        readonly RestorativeDentist: fhir.Coding;
        readonly PediatricAudiologist: fhir.Coding;
        readonly Immunopathologist: fhir.Coding;
        readonly AudiologicalPhysician: fhir.Coding;
        readonly ClinicalPharmacologist: fhir.Coding;
        readonly PrivateDoctor: fhir.Coding;
        readonly AgencyNurse: fhir.Coding;
        readonly BehavioralTherapistNurse: fhir.Coding;
        readonly CardiacRehabilitationNurse: fhir.Coding;
        readonly GenitourinaryNurse: fhir.Coding;
        readonly RheumatologyNurseSpecialist: fhir.Coding;
        readonly ContinenceNurse: fhir.Coding;
        readonly ContactTracingNurse: fhir.Coding;
        readonly GeneralNurse: fhir.Coding;
        readonly NurseForTheMentallyHandicapped: fhir.Coding;
        readonly LiaisonNurse: fhir.Coding;
        readonly DiabeticLiaisonNurse: fhir.Coding;
        readonly NursePsychotherapist: fhir.Coding;
        readonly CompanyNurse: fhir.Coding;
        readonly HospitalMidwife: fhir.Coding;
        readonly GeneticCounselor: fhir.Coding;
        readonly MentalHealthCounselor: fhir.Coding;
        readonly ClinicalPsychologist: fhir.Coding;
        readonly EducationalPsychologist: fhir.Coding;
        readonly Coroner: fhir.Coding;
        readonly ApplianceOfficer: fhir.Coding;
        readonly MedicalOncologist: fhir.Coding;
        readonly SchoolMedicalOfficer: fhir.Coding;
        readonly IntegratedMidwife: fhir.Coding;
        readonly PediatricRadiologist: fhir.Coding;
        readonly RadiationTherapist: fhir.Coding;
        readonly PTPhysiotherapist: fhir.Coding;
        readonly EmergencyMedicineSpecialist: fhir.Coding;
        readonly Periodontist: fhir.Coding;
        readonly RNFirstAssist: fhir.Coding;
        readonly Orthodontist: fhir.Coding;
        readonly Chiropractor: fhir.Coding;
        readonly Optician: fhir.Coding;
        readonly MedicalSecretary: fhir.Coding;
        readonly HospitalNurse: fhir.Coding;
        readonly InternalMedicineSpecialist: fhir.Coding;
        readonly ConsultantAnesthetist: fhir.Coding;
        readonly Paramedic: fhir.Coding;
        readonly StaffGradeObstetrician: fhir.Coding;
        readonly StaffGradePractitioner: fhir.Coding;
        readonly NurseComplexCaseManager: fhir.Coding;
        readonly MedicalStudent: fhir.Coding;
        readonly ActingObstetricRegistrar: fhir.Coding;
        readonly FamilyMedicineSpecialistPalliativeCare: fhir.Coding;
        readonly DietitianGeneral: fhir.Coding;
        readonly Hematologist: fhir.Coding;
        readonly PhysiotherapistTechnicalInstructor: fhir.Coding;
        readonly ResidentPhysician: fhir.Coding;
        readonly CertifiedRegisteredNurseAnesthetist: fhir.Coding;
        readonly AttendingPhysician: fhir.Coding;
        readonly AssignedPractitioner: fhir.Coding;
        readonly ProfessionalInitiatingSurgicalCase: fhir.Coding;
        readonly ProfessionalProvidingStaffReliefDuringSurgicalProcedure: fhir.Coding;
        readonly Interpreter: fhir.Coding;
        readonly ConsultantPediatrician: fhir.Coding;
        readonly ConsultantNeonatologist: fhir.Coding;
        readonly HealthEducator: fhir.Coding;
        readonly CertifiedHealthEducationSpecialist: fhir.Coding;
        readonly CirculatingNurse: fhir.Coding;
        readonly PerioperativeNurse: fhir.Coding;
        readonly ScrubNurse: fhir.Coding;
        readonly FellowOfAmericanAcademyOfOsteopathy: fhir.Coding;
        readonly SurgicalOncologist: fhir.Coding;
        readonly DentalAssistant: fhir.Coding;
        readonly RespiratoryPhysician: fhir.Coding;
        readonly MedicalXRayTechnician: fhir.Coding;
        readonly OculoplasticSurgeon: fhir.Coding;
        readonly RetinalSurgeon: fhir.Coding;
        readonly AdmittingPhysician: fhir.Coding;
        readonly MedicalOphthalmologist: fhir.Coding;
        readonly Ophthalmologist: fhir.Coding;
        readonly HealthCoach: fhir.Coding;
        readonly OccupationalHealthNurse: fhir.Coding;
        readonly RespiratoryTherapist: fhir.Coding;
        readonly PodiatricSurgeon: fhir.Coding;
        readonly Hypnotherapist: fhir.Coding;
        readonly AsthmaNurseSpecialist: fhir.Coding;
        readonly NurseCaseManager: fhir.Coding;
        readonly PCPPrimaryCarePhysician: fhir.Coding;
        readonly PharmaceuticalAssistant: fhir.Coding;
        readonly AddictionMedicineSpecialist: fhir.Coding;
        readonly PAPhysicianAssistant: fhir.Coding;
        readonly Acupuncturist: fhir.Coding;
        readonly Masseur: fhir.Coding;
        readonly Rheumatologist: fhir.Coding;
        readonly Neurosurgeon: fhir.Coding;
        readonly Sanitarian: fhir.Coding;
        readonly Pharmacist: fhir.Coding;
        readonly PediatricOrthopedicSurgeon: fhir.Coding;
        readonly GovernmentMidwife: fhir.Coding;
        readonly Philologist: fhir.Coding;
        readonly DispensingOptometrist: fhir.Coding;
        readonly PediatricHematologist: fhir.Coding;
        readonly MaxillofacialSurgeon: fhir.Coding;
        readonly Endodontist: fhir.Coding;
        readonly NANursingAuxiliary: fhir.Coding;
        readonly FaithHealer: fhir.Coding;
        readonly Neurologist: fhir.Coding;
        readonly CommunityPhysician: fhir.Coding;
        readonly MedicalRecordAdministrator: fhir.Coding;
        readonly CardiovascularSurgeon: fhir.Coding;
        readonly FixedProsthodontist: fhir.Coding;
        readonly GeneralPhysician: fhir.Coding;
        readonly OrthopedicTechnician: fhir.Coding;
        readonly Psychologist: fhir.Coding;
        readonly CommunityBasedDietitian: fhir.Coding;
        readonly MedicalPathologist: fhir.Coding;
        readonly LaboratoryMedicineSpecialist: fhir.Coding;
        readonly Otorhinolaryngologist: fhir.Coding;
        readonly Endocrinologist: fhir.Coding;
        readonly Neuroradiologist: fhir.Coding;
        readonly FamilyMedicineSpecialist: fhir.Coding;
        readonly FamilyMedicineSpecialistAnesthetist: fhir.Coding;
        readonly ClinicalImmunologist: fhir.Coding;
        readonly OralPathologist: fhir.Coding;
        readonly Doula: fhir.Coding;
        readonly Radiologist: fhir.Coding;
        readonly TraditionalHerbalMedicineSpecialist: fhir.Coding;
        readonly SpecializedNurse: fhir.Coding;
        readonly OccupationalMedicineSpecialist: fhir.Coding;
        readonly HospitalAdministrator: fhir.Coding;
        readonly PublicHealthDentist: fhir.Coding;
        readonly Prosthodontist: fhir.Coding;
        readonly SpecializedPhysician: fhir.Coding;
        readonly Gastroenterologist: fhir.Coding;
        readonly PediatricEmergencyMedicineSpecialist: fhir.Coding;
        readonly NursingAid: fhir.Coding;
        readonly FamilyMedicineSpecialistCareOfTheElderly: fhir.Coding;
        readonly MWMidwife: fhir.Coding;
        readonly PracticalAidPharmacy: fhir.Coding;
        readonly Osteopath: fhir.Coding;
        readonly TravelMedicineSpecialist: fhir.Coding;
        readonly SpineSurgeon: fhir.Coding;
        readonly InfectiousDiseasesPhysician: fhir.Coding;
        readonly GeneralSurgeon: fhir.Coding;
        readonly DiagnosticRadiologist: fhir.Coding;
        readonly AuxiliaryMidwife: fhir.Coding;
        readonly Translator: fhir.Coding;
        readonly OTOccupationalTherapist: fhir.Coding;
        readonly Psychiatrist: fhir.Coding;
        readonly NuclearMedicinePhysician: fhir.Coding;
        readonly MaternalOrFetalMedicineSpecialist: fhir.Coding;
        readonly ClinicalPathologist: fhir.Coding;
        readonly MassageTherapist: fhir.Coding;
        readonly Pediatrician: fhir.Coding;
        readonly OtherProfessionalNurse: fhir.Coding;
        readonly AnatomicPathologist: fhir.Coding;
        readonly Gynecologist: fhir.Coding;
        readonly Hospitalist: fhir.Coding;
        readonly SportsMedicineSpecialist: fhir.Coding;
        readonly GeneralPathologist: fhir.Coding;
        readonly PlasticSurgeon: fhir.Coding;
        readonly Anesthesiologist: fhir.Coding;
        readonly OtherDietitiansAndPublicHealthNutritionists: fhir.Coding;
        readonly PediatricDentist: fhir.Coding;
        readonly CareOfTheElderlyPhysician: fhir.Coding;
        readonly PediatricRespirologist: fhir.Coding;
        readonly Homeopath: fhir.Coding;
        readonly FamilyMedicineSpecialistEmergencyMedicine: fhir.Coding;
        readonly PediatricHematologistOrOncologist: fhir.Coding;
        readonly FootAndAnkleSurgeon: fhir.Coding;
        readonly InvasiveCardiologist: fhir.Coding;
        readonly CaseManager: fhir.Coding;
        readonly Kinesthesiologist: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Task.d.ts.map