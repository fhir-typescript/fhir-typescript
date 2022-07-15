import * as fhir from '../fhir.js';
/**
 * Valid arguments for the ParametersParameter type.
 */
export interface ParametersParameterArgs extends fhir.BackboneElementArgs {
    /**
     * The name of the parameter (reference to the operation definition).
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * If the parameter is a data type.
     */
    value?: fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.Meta | undefined;
    /**
     * If the parameter is a data type.
     */
    valueBase64Binary?: fhir.FhirBase64Binary | string | undefined;
    /**
     * If the parameter is a data type.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCode?: fhir.FhirCode | string | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDate?: fhir.FhirDate | string | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * If the parameter is a data type.
     */
    valueId?: fhir.FhirId | string | undefined;
    /**
     * If the parameter is a data type.
     */
    valueInstant?: fhir.FhirInstant | string | undefined;
    /**
     * If the parameter is a data type.
     */
    valueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * If the parameter is a data type.
     */
    valueMarkdown?: fhir.FhirMarkdown | string | undefined;
    /**
     * If the parameter is a data type.
     */
    valueOid?: fhir.FhirOid | string | undefined;
    /**
     * If the parameter is a data type.
     */
    valuePositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * If the parameter is a data type.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * If the parameter is a data type.
     */
    valueTime?: fhir.FhirTime | string | undefined;
    /**
     * If the parameter is a data type.
     */
    valueUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * If the parameter is a data type.
     */
    valueUri?: fhir.FhirUri | string | undefined;
    /**
     * If the parameter is a data type.
     */
    valueAddress?: fhir.AddressArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueAge?: fhir.AgeArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueAnnotation?: fhir.AnnotationArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCoding?: fhir.CodingArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueContactPoint?: fhir.ContactPointArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCount?: fhir.CountArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDistance?: fhir.DistanceArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDuration?: fhir.DurationArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueHumanName?: fhir.HumanNameArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueMoney?: fhir.MoneyArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueRange?: fhir.RangeArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueRatio?: fhir.RatioArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueReference?: fhir.ReferenceArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueSignature?: fhir.SignatureArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueTiming?: fhir.TimingArgs | undefined;
    /**
     * If the parameter is a data type.
     */
    valueMeta?: fhir.MetaArgs | undefined;
    /**
     * If the parameter is a whole resource.
     */
    resource?: fhir.ResourceArgs | any | undefined;
    /**
     * Only one level of nested parameters is allowed.
     */
    part?: fhir.ParametersParameterArgs[] | undefined;
}
/**
 * A parameter passed to or received from the operation.
 */
export declare class ParametersParameter extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of the parameter (reference to the operation definition).
     */
    name: fhir.FhirString | null;
    /**
     * If the parameter is a data type.
     */
    value?: (fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.Meta) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Parameters.parameter.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * If the parameter is a whole resource.
     */
    resource?: fhir.FhirResource | undefined;
    /**
     * Only one level of nested parameters is allowed.
     */
    part: fhir.ParametersParameter[];
    /**
     * Default constructor for ParametersParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ParametersParameterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Parameters type.
 */
export interface ParametersArgs extends fhir.ResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Parameters" | undefined;
    /**
     * A parameter passed to or received from the operation.
     */
    parameter?: fhir.ParametersParameterArgs[] | undefined;
}
/**
 * This special resource type is used to represent an operation request and response (operations.html). It has no other use, and there is no RESTful endpoint associated with it.
 */
export declare class Parameters extends fhir.Resource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Parameters";
    /**
     * A parameter passed to or received from the operation.
     */
    parameter: fhir.ParametersParameter[];
    /**
     * Default constructor for Parameters - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ParametersArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Parameters.d.ts.map