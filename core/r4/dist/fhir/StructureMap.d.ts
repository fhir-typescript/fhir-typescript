import * as fhir from '../fhir.js';
import { MapModelModeCodingType } from '../fhirValueSets/MapModelModeCodings.js';
import { MapModelModeCodeType } from '../fhirValueSets/MapModelModeCodes.js';
import { MapInputModeCodingType } from '../fhirValueSets/MapInputModeCodings.js';
import { MapInputModeCodeType } from '../fhirValueSets/MapInputModeCodes.js';
import { MapSourceListModeCodingType } from '../fhirValueSets/MapSourceListModeCodings.js';
import { MapSourceListModeCodeType } from '../fhirValueSets/MapSourceListModeCodes.js';
import { MapContextTypeCodingType } from '../fhirValueSets/MapContextTypeCodings.js';
import { MapContextTypeCodeType } from '../fhirValueSets/MapContextTypeCodes.js';
import { MapTargetListModeCodingType } from '../fhirValueSets/MapTargetListModeCodings.js';
import { MapTargetListModeCodeType } from '../fhirValueSets/MapTargetListModeCodes.js';
import { MapTransformCodingType } from '../fhirValueSets/MapTransformCodings.js';
import { MapTransformCodeType } from '../fhirValueSets/MapTransformCodes.js';
import { MapGroupTypeModeCodingType } from '../fhirValueSets/MapGroupTypeModeCodings.js';
import { MapGroupTypeModeCodeType } from '../fhirValueSets/MapGroupTypeModeCodes.js';
import { PublicationStatusCodingType } from '../fhirValueSets/PublicationStatusCodings.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the StructureMapStructure type.
 */
export interface StructureMapStructureArgs extends fhir.BackboneElementArgs {
    /**
     * The canonical reference to the structure.
     */
    url: fhir.FhirCanonical | string | undefined;
    /**
     * How the referenced structure is used in this mapping.
     */
    mode: MapModelModeCodeType | null;
    /**
     * This is needed if both types have the same name (e.g. version conversion).
     */
    alias?: fhir.FhirString | string | undefined;
    /**
     * Documentation that describes how the structure is used in the mapping.
     */
    documentation?: fhir.FhirString | string | undefined;
}
/**
 * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
 */
export declare class StructureMapStructure extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The canonical reference to the structure.
     */
    url: fhir.FhirCanonical | null;
    /**
     * How the referenced structure is used in this mapping.
     */
    mode: MapModelModeCodeType | null;
    /**
     * This is needed if both types have the same name (e.g. version conversion).
     */
    alias?: fhir.FhirString | undefined;
    /**
     * Documentation that describes how the structure is used in the mapping.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * Default constructor for StructureMapStructure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureMapStructureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for mode (StructureMap.structure.mode)
     */
    static modeRequiredCoding(): MapModelModeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the StructureMapGroupInput type.
 */
export interface StructureMapGroupInputArgs extends fhir.BackboneElementArgs {
    /**
     * Name for this instance of data.
     */
    name: fhir.FhirId | string | undefined;
    /**
     * Type for this instance of data.
     */
    type?: fhir.FhirString | string | undefined;
    /**
     * Mode for this instance of data.
     */
    mode: MapInputModeCodeType | null;
    /**
     * Documentation for this instance of data.
     */
    documentation?: fhir.FhirString | string | undefined;
}
/**
 * If no inputs are named, then the entry mappings are type based.
 */
export declare class StructureMapGroupInput extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Name for this instance of data.
     */
    name: fhir.FhirId | null;
    /**
     * Type for this instance of data.
     */
    type?: fhir.FhirString | undefined;
    /**
     * Mode for this instance of data.
     */
    mode: MapInputModeCodeType | null;
    /**
     * Documentation for this instance of data.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * Default constructor for StructureMapGroupInput - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureMapGroupInputArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for mode (StructureMap.group.input.mode)
     */
    static modeRequiredCoding(): MapInputModeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the StructureMapGroupRuleSource type.
 */
export interface StructureMapGroupRuleSourceArgs extends fhir.BackboneElementArgs {
    /**
     * Type or variable this rule applies to.
     */
    context: fhir.FhirId | string | undefined;
    /**
     * Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
     */
    min?: fhir.FhirInteger | number | undefined;
    /**
     * Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).
     */
    max?: fhir.FhirString | string | undefined;
    /**
     * Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
     */
    type?: fhir.FhirString | string | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValue?: fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCanonical | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.FhirUrl | fhir.FhirUuid | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.ContactDetail | fhir.Contributor | fhir.DataRequirement | fhir.Expression | fhir.ParameterDefinition | fhir.RelatedArtifact | fhir.TriggerDefinition | fhir.UsageContext | fhir.Dosage | fhir.Meta | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueBase64Binary?: fhir.FhirBase64Binary | string | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCanonical?: fhir.FhirCanonical | string | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCode?: fhir.FhirCode | string | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDate?: fhir.FhirDate | string | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueId?: fhir.FhirId | string | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueInstant?: fhir.FhirInstant | string | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMarkdown?: fhir.FhirMarkdown | string | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueOid?: fhir.FhirOid | string | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValuePositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueString?: fhir.FhirString | string | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTime?: fhir.FhirTime | string | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUri?: fhir.FhirUri | string | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUrl?: fhir.FhirUrl | string | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUuid?: fhir.FhirUuid | string | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAddress?: fhir.AddressArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAge?: fhir.AgeArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAnnotation?: fhir.AnnotationArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCoding?: fhir.CodingArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueContactPoint?: fhir.ContactPointArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCount?: fhir.CountArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDistance?: fhir.DistanceArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDuration?: fhir.DurationArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueHumanName?: fhir.HumanNameArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMoney?: fhir.MoneyArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueRange?: fhir.RangeArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueRatio?: fhir.RatioArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueReference?: fhir.ReferenceArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueSignature?: fhir.SignatureArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTiming?: fhir.TimingArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueContactDetail?: fhir.ContactDetailArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueContributor?: fhir.ContributorArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDataRequirement?: fhir.DataRequirementArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueExpression?: fhir.ExpressionArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueParameterDefinition?: fhir.ParameterDefinitionArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueRelatedArtifact?: fhir.RelatedArtifactArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTriggerDefinition?: fhir.TriggerDefinitionArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUsageContext?: fhir.UsageContextArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDosage?: fhir.DosageArgs | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMeta?: fhir.MetaArgs | undefined;
    /**
     * Optional field for this source.
     */
    element?: fhir.FhirString | string | undefined;
    /**
     * How to handle the list mode for this element.
     */
    listMode?: MapSourceListModeCodeType | undefined;
    /**
     * Named context for field, if a field is specified.
     */
    variable?: fhir.FhirId | string | undefined;
    /**
     * FHIRPath expression  - must be true or the rule does not apply.
     */
    condition?: fhir.FhirString | string | undefined;
    /**
     * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
     */
    check?: fhir.FhirString | string | undefined;
    /**
     * This is typically used for recording that something Is not transformed to the target for some reason.
     */
    logMessage?: fhir.FhirString | string | undefined;
}
/**
 * Source inputs to the mapping.
 */
export declare class StructureMapGroupRuleSource extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Type or variable this rule applies to.
     */
    context: fhir.FhirId | null;
    /**
     * Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
     */
    min?: fhir.FhirInteger | undefined;
    /**
     * Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).
     */
    max?: fhir.FhirString | undefined;
    /**
     * Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
     */
    type?: fhir.FhirString | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValue?: (fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCanonical | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.FhirUrl | fhir.FhirUuid | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.ContactDetail | fhir.Contributor | fhir.DataRequirement | fhir.Expression | fhir.ParameterDefinition | fhir.RelatedArtifact | fhir.TriggerDefinition | fhir.UsageContext | fhir.Dosage | fhir.Meta) | undefined;
    /**
     * Internal flag to properly serialize choice-type element StructureMap.group.rule.source.defaultValue[x]
     */
    protected static readonly _fts_defaultValueIsChoice: true;
    /**
     * Optional field for this source.
     */
    element?: fhir.FhirString | undefined;
    /**
     * How to handle the list mode for this element.
     */
    listMode?: MapSourceListModeCodeType | undefined;
    /**
     * Named context for field, if a field is specified.
     */
    variable?: fhir.FhirId | undefined;
    /**
     * FHIRPath expression  - must be true or the rule does not apply.
     */
    condition?: fhir.FhirString | undefined;
    /**
     * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
     */
    check?: fhir.FhirString | undefined;
    /**
     * This is typically used for recording that something Is not transformed to the target for some reason.
     */
    logMessage?: fhir.FhirString | undefined;
    /**
     * Default constructor for StructureMapGroupRuleSource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureMapGroupRuleSourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for listMode (StructureMap.group.rule.source.listMode)
     */
    static listModeRequiredCoding(): MapSourceListModeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the StructureMapGroupRuleTargetParameter type.
 */
export interface StructureMapGroupRuleTargetParameterArgs extends fhir.BackboneElementArgs {
    /**
     * Parameter value - variable or literal.
     */
    value?: fhir.FhirId | fhir.FhirString | fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueId?: fhir.FhirId | string | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueDecimal?: fhir.FhirDecimal | number | undefined;
}
/**
 * Parameters to the transform.
 */
export declare class StructureMapGroupRuleTargetParameter extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Parameter value - variable or literal.
     */
    value: (fhir.FhirId | fhir.FhirString | fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal) | null;
    /**
     * Internal flag to properly serialize choice-type element StructureMap.group.rule.target.parameter.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for StructureMapGroupRuleTargetParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureMapGroupRuleTargetParameterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the StructureMapGroupRuleTarget type.
 */
export interface StructureMapGroupRuleTargetArgs extends fhir.BackboneElementArgs {
    /**
     * Type or variable this rule applies to.
     */
    context?: fhir.FhirId | string | undefined;
    /**
     * How to interpret the context.
     */
    contextType?: MapContextTypeCodeType | undefined;
    /**
     * Field to create in the context.
     */
    element?: fhir.FhirString | string | undefined;
    /**
     * Named context for field, if desired, and a field is specified.
     */
    variable?: fhir.FhirId | string | undefined;
    /**
     * If field is a list, how to manage the list.
     */
    listMode?: MapTargetListModeCodeType[] | undefined;
    /**
     * Internal rule reference for shared list items.
     */
    listRuleId?: fhir.FhirId | string | undefined;
    /**
     * How the data is copied / created.
     */
    transform?: MapTransformCodeType | undefined;
    /**
     * Parameters to the transform.
     */
    parameter?: fhir.StructureMapGroupRuleTargetParameterArgs[] | undefined;
}
/**
 * Content to create because of this mapping rule.
 */
export declare class StructureMapGroupRuleTarget extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Type or variable this rule applies to.
     */
    context?: fhir.FhirId | undefined;
    /**
     * How to interpret the context.
     */
    contextType?: MapContextTypeCodeType | undefined;
    /**
     * Field to create in the context.
     */
    element?: fhir.FhirString | undefined;
    /**
     * Named context for field, if desired, and a field is specified.
     */
    variable?: fhir.FhirId | undefined;
    /**
     * If field is a list, how to manage the list.
     */
    listMode?: MapTargetListModeCodeType[];
    /**
     * Internal rule reference for shared list items.
     */
    listRuleId?: fhir.FhirId | undefined;
    /**
     * How the data is copied / created.
     */
    transform?: MapTransformCodeType | undefined;
    /**
     * Parameters to the transform.
     */
    parameter?: fhir.StructureMapGroupRuleTargetParameter[];
    /**
     * Default constructor for StructureMapGroupRuleTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureMapGroupRuleTargetArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for contextType (StructureMap.group.rule.target.contextType)
     */
    static contextTypeRequiredCoding(): MapContextTypeCodingType;
    /**
     * Required-bound Value Set for listMode (StructureMap.group.rule.target.listMode)
     */
    static listModeRequiredCoding(): MapTargetListModeCodingType;
    /**
     * Required-bound Value Set for transform (StructureMap.group.rule.target.transform)
     */
    static transformRequiredCoding(): MapTransformCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the StructureMapGroupRuleDependent type.
 */
export interface StructureMapGroupRuleDependentArgs extends fhir.BackboneElementArgs {
    /**
     * Name of a rule or group to apply.
     */
    name: fhir.FhirId | string | undefined;
    /**
     * Variable to pass to the rule or group.
     */
    variable: fhir.FhirString[] | string[] | undefined;
}
/**
 * Which other rules to apply in the context of this rule.
 */
export declare class StructureMapGroupRuleDependent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Name of a rule or group to apply.
     */
    name: fhir.FhirId | null;
    /**
     * Variable to pass to the rule or group.
     */
    variable: fhir.FhirString[];
    /**
     * Default constructor for StructureMapGroupRuleDependent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureMapGroupRuleDependentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the StructureMapGroupRule type.
 */
export interface StructureMapGroupRuleArgs extends fhir.BackboneElementArgs {
    /**
     * Name of the rule for internal references.
     */
    name: fhir.FhirId | string | undefined;
    /**
     * Source inputs to the mapping.
     */
    source: fhir.StructureMapGroupRuleSourceArgs[] | null;
    /**
     * Content to create because of this mapping rule.
     */
    target?: fhir.StructureMapGroupRuleTargetArgs[] | undefined;
    /**
     * Rules contained in this rule.
     */
    rule?: fhir.StructureMapGroupRuleArgs[] | undefined;
    /**
     * Which other rules to apply in the context of this rule.
     */
    dependent?: fhir.StructureMapGroupRuleDependentArgs[] | undefined;
    /**
     * Documentation for this instance of data.
     */
    documentation?: fhir.FhirString | string | undefined;
}
/**
 * Transform Rule from source to target.
 */
export declare class StructureMapGroupRule extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Name of the rule for internal references.
     */
    name: fhir.FhirId | null;
    /**
     * Source inputs to the mapping.
     */
    source: fhir.StructureMapGroupRuleSource[];
    /**
     * Content to create because of this mapping rule.
     */
    target?: fhir.StructureMapGroupRuleTarget[];
    /**
     * Rules contained in this rule.
     */
    rule?: fhir.StructureMapGroupRule[];
    /**
     * Which other rules to apply in the context of this rule.
     */
    dependent?: fhir.StructureMapGroupRuleDependent[];
    /**
     * Documentation for this instance of data.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * Default constructor for StructureMapGroupRule - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureMapGroupRuleArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the StructureMapGroup type.
 */
export interface StructureMapGroupArgs extends fhir.BackboneElementArgs {
    /**
     * A unique name for the group for the convenience of human readers.
     */
    name: fhir.FhirId | string | undefined;
    /**
     * Another group that this group adds rules to.
     */
    extends?: fhir.FhirId | string | undefined;
    /**
     * Not applicable if the underlying model is untyped. There can only be one default mapping for any particular type combination.
     */
    typeMode: MapGroupTypeModeCodeType | null;
    /**
     * Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * If no inputs are named, then the entry mappings are type based.
     */
    input: fhir.StructureMapGroupInputArgs[] | null;
    /**
     * Transform Rule from source to target.
     */
    rule: fhir.StructureMapGroupRuleArgs[] | null;
}
/**
 * Organizes the mapping into manageable chunks for human review/ease of maintenance.
 */
export declare class StructureMapGroup extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A unique name for the group for the convenience of human readers.
     */
    name: fhir.FhirId | null;
    /**
     * Another group that this group adds rules to.
     */
    extends?: fhir.FhirId | undefined;
    /**
     * Not applicable if the underlying model is untyped. There can only be one default mapping for any particular type combination.
     */
    typeMode: MapGroupTypeModeCodeType | null;
    /**
     * Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * If no inputs are named, then the entry mappings are type based.
     */
    input: fhir.StructureMapGroupInput[];
    /**
     * Transform Rule from source to target.
     */
    rule: fhir.StructureMapGroupRule[];
    /**
     * Default constructor for StructureMapGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureMapGroupArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for typeMode (StructureMap.group.typeMode)
     */
    static typeModeRequiredCoding(): MapGroupTypeModeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the StructureMap type.
 */
export interface StructureMapArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "StructureMap" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this structure map outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different structure map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the structure map with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    status: PublicationStatusCodeType | null;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the structure map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the structure map is the organization or individual primarily responsible for the maintenance and upkeep of the structure map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the structure map. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the structure map was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the structure map as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the structure map is presumed to be the predominant language in the place the structure map was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the structure map to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the structure map. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this structure map.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * A copyright statement relating to the structure map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure map.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
     */
    structure?: fhir.StructureMapStructureArgs[] | undefined;
    /**
     * Other maps used by this map (canonical URLs).
     */
    import?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * Organizes the mapping into manageable chunks for human review/ease of maintenance.
     */
    group: fhir.StructureMapGroupArgs[] | null;
}
/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export declare class StructureMap extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "StructureMap";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | null;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this structure map outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[];
    /**
     * There may be different structure map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the structure map with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | null;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    status: PublicationStatusCodeType | null;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the structure map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the structure map is the organization or individual primarily responsible for the maintenance and upkeep of the structure map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the structure map. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the structure map was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the structure map as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the structure map is presumed to be the predominant language in the place the structure map was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[];
    /**
     * It may be possible for the structure map to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the structure map. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this structure map.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * A copyright statement relating to the structure map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure map.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
     */
    structure?: fhir.StructureMapStructure[];
    /**
     * Other maps used by this map (canonical URLs).
     */
    import?: fhir.FhirCanonical[];
    /**
     * Organizes the mapping into manageable chunks for human review/ease of maintenance.
     */
    group: fhir.StructureMapGroup[];
    /**
     * Default constructor for StructureMap - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureMapArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (StructureMap.status)
     */
    static statusRequiredCoding(): PublicationStatusCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=StructureMap.d.ts.map