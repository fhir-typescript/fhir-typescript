import * as fhir from '../fhir.js';
import { MapModelModeCodeType } from '../fhirValueSets/MapModelModeCodes.js';
import { MapInputModeCodeType } from '../fhirValueSets/MapInputModeCodes.js';
import { MapSourceListModeCodeType } from '../fhirValueSets/MapSourceListModeCodes.js';
import { MapContextTypeCodeType } from '../fhirValueSets/MapContextTypeCodes.js';
import { MapTargetListModeCodeType } from '../fhirValueSets/MapTargetListModeCodes.js';
import { MapTransformCodeType } from '../fhirValueSets/MapTransformCodes.js';
import { MapGroupTypeModeCodeType } from '../fhirValueSets/MapGroupTypeModeCodes.js';
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
     * Extended properties for primitive element: StructureMap.structure.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * How the referenced structure is used in this mapping.
     */
    mode: fhir.FhirCode<MapModelModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.structure.mode
     */
    _mode?: fhir.FhirElementArgs;
    /**
     * This is needed if both types have the same name (e.g. version conversion).
     */
    alias?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.structure.alias
     */
    _alias?: fhir.FhirElementArgs;
    /**
     * Documentation that describes how the structure is used in the mapping.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.structure.documentation
     */
    _documentation?: fhir.FhirElementArgs;
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
    mode: fhir.FhirCode<MapModelModeCodeType> | null;
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
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * Extended properties for primitive element: StructureMap.group.input.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Type for this instance of data.
     */
    type?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.input.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * Mode for this instance of data.
     */
    mode: fhir.FhirCode<MapInputModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.input.mode
     */
    _mode?: fhir.FhirElementArgs;
    /**
     * Documentation for this instance of data.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.input.documentation
     */
    _documentation?: fhir.FhirElementArgs;
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
    mode: fhir.FhirCode<MapInputModeCodeType> | null;
    /**
     * Documentation for this instance of data.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * Default constructor for StructureMapGroupInput - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureMapGroupInputArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * Extended properties for primitive element: StructureMap.group.rule.source.context
     */
    _context?: fhir.FhirElementArgs;
    /**
     * Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
     */
    min?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.min
     */
    _min?: fhir.FhirElementArgs;
    /**
     * Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).
     */
    max?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.max
     */
    _max?: fhir.FhirElementArgs;
    /**
     * Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
     */
    type?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.type
     */
    _type?: fhir.FhirElementArgs;
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
     * Extended properties for primitive element: StructureMap.group.rule.source.element
     */
    _element?: fhir.FhirElementArgs;
    /**
     * How to handle the list mode for this element.
     */
    listMode?: fhir.FhirCode<MapSourceListModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.listMode
     */
    _listMode?: fhir.FhirElementArgs;
    /**
     * Named context for field, if a field is specified.
     */
    variable?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.variable
     */
    _variable?: fhir.FhirElementArgs;
    /**
     * FHIRPath expression  - must be true or the rule does not apply.
     */
    condition?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.condition
     */
    _condition?: fhir.FhirElementArgs;
    /**
     * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
     */
    check?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.check
     */
    _check?: fhir.FhirElementArgs;
    /**
     * This is typically used for recording that something Is not transformed to the target for some reason.
     */
    logMessage?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.logMessage
     */
    _logMessage?: fhir.FhirElementArgs;
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
    listMode?: fhir.FhirCode<MapSourceListModeCodeType> | undefined;
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
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * Extended properties for primitive element: StructureMap.group.rule.target.context
     */
    _context?: fhir.FhirElementArgs;
    /**
     * How to interpret the context.
     */
    contextType?: fhir.FhirCode<MapContextTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.contextType
     */
    _contextType?: fhir.FhirElementArgs;
    /**
     * Field to create in the context.
     */
    element?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.element
     */
    _element?: fhir.FhirElementArgs;
    /**
     * Named context for field, if desired, and a field is specified.
     */
    variable?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.variable
     */
    _variable?: fhir.FhirElementArgs;
    /**
     * If field is a list, how to manage the list.
     */
    listMode?: fhir.FhirCode<MapTargetListModeCodeType>[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.listMode
     */
    _listMode?: (fhir.FhirElementArgs | null)[];
    /**
     * Internal rule reference for shared list items.
     */
    listRuleId?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.listRuleId
     */
    _listRuleId?: fhir.FhirElementArgs;
    /**
     * How the data is copied / created.
     */
    transform?: fhir.FhirCode<MapTransformCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.transform
     */
    _transform?: fhir.FhirElementArgs;
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
    contextType?: fhir.FhirCode<MapContextTypeCodeType> | undefined;
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
    listMode: fhir.FhirCode<MapTargetListModeCodeType>[];
    /**
     * Internal rule reference for shared list items.
     */
    listRuleId?: fhir.FhirId | undefined;
    /**
     * How the data is copied / created.
     */
    transform?: fhir.FhirCode<MapTransformCodeType> | undefined;
    /**
     * Parameters to the transform.
     */
    parameter: fhir.StructureMapGroupRuleTargetParameter[];
    /**
     * Default constructor for StructureMapGroupRuleTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureMapGroupRuleTargetArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * Extended properties for primitive element: StructureMap.group.rule.dependent.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Variable to pass to the rule or group.
     */
    variable: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.dependent.variable
     */
    _variable?: (fhir.FhirElementArgs | null)[];
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
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * Extended properties for primitive element: StructureMap.group.rule.name
     */
    _name?: fhir.FhirElementArgs;
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
    /**
     * Extended properties for primitive element: StructureMap.group.rule.documentation
     */
    _documentation?: fhir.FhirElementArgs;
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
    target: fhir.StructureMapGroupRuleTarget[];
    /**
     * Rules contained in this rule.
     */
    rule: fhir.StructureMapGroupRule[];
    /**
     * Which other rules to apply in the context of this rule.
     */
    dependent: fhir.StructureMapGroupRuleDependent[];
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
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * Extended properties for primitive element: StructureMap.group.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Another group that this group adds rules to.
     */
    extends?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.extends
     */
    _extends?: fhir.FhirElementArgs;
    /**
     * Not applicable if the underlying model is untyped. There can only be one default mapping for any particular type combination.
     */
    typeMode: fhir.FhirCode<MapGroupTypeModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.typeMode
     */
    _typeMode?: fhir.FhirElementArgs;
    /**
     * Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.documentation
     */
    _documentation?: fhir.FhirElementArgs;
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
    typeMode: fhir.FhirCode<MapGroupTypeModeCodeType> | null;
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
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * Extended properties for primitive element: StructureMap.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this structure map outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different structure map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the structure map with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: StructureMap.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the structure map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the structure map is the organization or individual primarily responsible for the maintenance and upkeep of the structure map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the structure map. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the structure map was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the structure map as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the structure map is presumed to be the predominant language in the place the structure map was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.description
     */
    _description?: fhir.FhirElementArgs;
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
     * Extended properties for primitive element: StructureMap.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * A copyright statement relating to the structure map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure map.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
     */
    structure?: fhir.StructureMapStructureArgs[] | undefined;
    /**
     * Other maps used by this map (canonical URLs).
     */
    import?: fhir.FhirCanonical[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: StructureMap.import
     */
    _import?: (fhir.FhirElementArgs | null)[];
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
    identifier: fhir.Identifier[];
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
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
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
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the structure map was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the structure map as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the structure map is presumed to be the predominant language in the place the structure map was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the structure map to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
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
    structure: fhir.StructureMapStructure[];
    /**
     * Other maps used by this map (canonical URLs).
     */
    import: fhir.FhirCanonical[];
    /**
     * Organizes the mapping into manageable chunks for human review/ease of maintenance.
     */
    group: fhir.StructureMapGroup[];
    /**
     * Default constructor for StructureMap - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureMapArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=StructureMap.d.ts.map