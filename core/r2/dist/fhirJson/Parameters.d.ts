import * as fhir from '../fhirJson.js';
/**
 * A parameter passed to or received from the operation.
 */
export interface ParametersParameter extends fhir.BackboneElement {
    /**
     * The name of the parameter (reference to the operation definition).
     */
    name: string | null;
    /**
     * Extended properties for primitive element: Parameters.parameter.name
     */
    _name?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueInteger?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueDecimal?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueBase64Binary?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueInstant?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueUri?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueDate?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueDateTime?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueTime?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueCode?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueOid?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueOid?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueId?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueId?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueUnsignedInt?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valuePositiveInt?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueMarkdown?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueAnnotation?: fhir.Annotation | undefined;
    /**
     * If the parameter is a data type.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * If the parameter is a data type.
     */
    valueIdentifier?: fhir.Identifier | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * If the parameter is a data type.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * If the parameter is a data type.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * If the parameter is a data type.
     */
    valuePeriod?: fhir.Period | undefined;
    /**
     * If the parameter is a data type.
     */
    valueRatio?: fhir.Ratio | undefined;
    /**
     * If the parameter is a data type.
     */
    valueSampledData?: fhir.SampledData | undefined;
    /**
     * If the parameter is a data type.
     */
    valueSignature?: fhir.Signature | undefined;
    /**
     * If the parameter is a data type.
     */
    valueHumanName?: fhir.HumanName | undefined;
    /**
     * If the parameter is a data type.
     */
    valueAddress?: fhir.Address | undefined;
    /**
     * If the parameter is a data type.
     */
    valueContactPoint?: fhir.ContactPoint | undefined;
    /**
     * If the parameter is a data type.
     */
    valueTiming?: fhir.Timing | undefined;
    /**
     * If the parameter is a data type.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * If the parameter is a data type.
     */
    valueMeta?: fhir.Meta | undefined;
    /**
     * If the parameter is a whole resource.
     */
    resource?: fhir.FhirResource | undefined;
    /**
     * A named part of a parameter. In many implementation context, a set of named parts is known as a "Tuple".
     */
    part?: (fhir.ParametersParameter | null)[] | undefined;
}
/**
 * This special resource type is used to represent an operation request and response (operations.html). It has no other use, and there is no RESTful endpoint associated with it.
 */
export interface Parameters extends fhir.Resource {
    /**
     * Resource Type Name
     */
    resourceType: "Parameters" | null;
    /**
     * A parameter passed to or received from the operation.
     */
    parameter?: (fhir.ParametersParameter | null)[] | undefined;
}
//# sourceMappingURL=Parameters.d.ts.map