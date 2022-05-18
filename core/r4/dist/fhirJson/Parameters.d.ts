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
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueBase64Binary?: fhir.FhirElement;
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
    valueCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueCanonical?: fhir.FhirElement;
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
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueDecimal?: fhir.FhirElement;
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
    valueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueInstant?: fhir.FhirElement;
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
    valueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueMarkdown?: fhir.FhirElement;
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
    valuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valuePositiveInt?: fhir.FhirElement;
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
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueTime?: fhir.FhirElement;
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
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueUri?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueUrl?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueUrl?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueUuid?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueUuid?: fhir.FhirElement;
    /**
     * If the parameter is a data type.
     */
    valueAddress?: fhir.Address | undefined;
    /**
     * If the parameter is a data type.
     */
    valueAge?: fhir.Age | undefined;
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
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * If the parameter is a data type.
     */
    valueContactPoint?: fhir.ContactPoint | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCount?: fhir.Count | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDistance?: fhir.Distance | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDuration?: fhir.Duration | undefined;
    /**
     * If the parameter is a data type.
     */
    valueHumanName?: fhir.HumanName | undefined;
    /**
     * If the parameter is a data type.
     */
    valueIdentifier?: fhir.Identifier | undefined;
    /**
     * If the parameter is a data type.
     */
    valueMoney?: fhir.Money | undefined;
    /**
     * If the parameter is a data type.
     */
    valuePeriod?: fhir.Period | undefined;
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
    valueRatio?: fhir.Ratio | undefined;
    /**
     * If the parameter is a data type.
     */
    valueReference?: fhir.Reference | undefined;
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
    valueTiming?: fhir.Timing | undefined;
    /**
     * If the parameter is a data type.
     */
    valueContactDetail?: fhir.ContactDetail | undefined;
    /**
     * If the parameter is a data type.
     */
    valueContributor?: fhir.Contributor | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDataRequirement?: fhir.DataRequirement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueExpression?: fhir.Expression | undefined;
    /**
     * If the parameter is a data type.
     */
    valueParameterDefinition?: fhir.ParameterDefinition | undefined;
    /**
     * If the parameter is a data type.
     */
    valueRelatedArtifact?: fhir.RelatedArtifact | undefined;
    /**
     * If the parameter is a data type.
     */
    valueTriggerDefinition?: fhir.TriggerDefinition | undefined;
    /**
     * If the parameter is a data type.
     */
    valueUsageContext?: fhir.UsageContext | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDosage?: fhir.Dosage | undefined;
    /**
     * If the parameter is a data type.
     */
    valueMeta?: fhir.Meta | undefined;
    /**
     * When resolving references in resources, the operation definition may specify how references may be resolved between parameters. If a reference cannot be resolved between the parameters, the application should fall back to it's general resource resolution methods.
     */
    resource?: fhir.FhirResource | undefined;
    /**
     * Only one level of nested parameters is allowed.
     */
    part?: fhir.ParametersParameter[] | undefined;
}
/**
 * This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it.
 */
export interface Parameters extends fhir.Resource {
    /**
     * Resource Type Name
     */
    resourceType: "Parameters";
    /**
     * A parameter passed to or received from the operation.
     */
    parameter?: fhir.ParametersParameter[] | undefined;
}
//# sourceMappingURL=Parameters.d.ts.map