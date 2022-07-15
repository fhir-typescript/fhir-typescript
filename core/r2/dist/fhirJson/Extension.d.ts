import * as fhir from '../fhirJson.js';
/**
 * Optional Extensions Element - found in all resources.
 */
export interface Extension extends fhir.FhirElement {
    /**
     * Source of the definition for the extension code - a logical name or a URL.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: Extension.url
     */
    _url?: fhir.FhirElement;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueInteger?: fhir.FhirElement;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueDecimal?: fhir.FhirElement;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueBase64Binary?: fhir.FhirElement;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueInstant?: fhir.FhirElement;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueUri?: fhir.FhirElement;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueDate?: fhir.FhirElement;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueDateTime?: fhir.FhirElement;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueTime?: fhir.FhirElement;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueCode?: fhir.FhirElement;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueOid?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueOid?: fhir.FhirElement;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueId?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueId?: fhir.FhirElement;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueUnsignedInt?: fhir.FhirElement;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valuePositiveInt?: fhir.FhirElement;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueMarkdown?: fhir.FhirElement;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueAnnotation?: fhir.Annotation | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueIdentifier?: fhir.Identifier | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueRange?: fhir.Range | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valuePeriod?: fhir.Period | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueRatio?: fhir.Ratio | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueSampledData?: fhir.SampledData | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueSignature?: fhir.Signature | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueHumanName?: fhir.HumanName | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueAddress?: fhir.Address | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueContactPoint?: fhir.ContactPoint | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueTiming?: fhir.Timing | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueMeta?: fhir.Meta | undefined;
}
//# sourceMappingURL=Extension.d.ts.map