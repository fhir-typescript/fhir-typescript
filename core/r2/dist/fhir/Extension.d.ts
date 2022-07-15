import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Extension type.
 */
export interface ExtensionArgs extends fhir.FhirElementArgs {
    /**
     * Source of the definition for the extension code - a logical name or a URL.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Extension.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    value?: fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal | fhir.FhirBase64Binary | fhir.FhirInstant | fhir.FhirString | fhir.FhirUri | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirCode | fhir.FhirOid | fhir.FhirId | fhir.FhirUnsignedInt | fhir.FhirPositiveInt | fhir.FhirMarkdown | fhir.Annotation | fhir.Attachment | fhir.Identifier | fhir.CodeableConcept | fhir.Coding | fhir.Quantity | fhir.Range | fhir.Period | fhir.Ratio | fhir.SampledData | fhir.Signature | fhir.HumanName | fhir.Address | fhir.ContactPoint | fhir.Timing | fhir.Reference | fhir.Meta | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueBase64Binary?: fhir.FhirBase64Binary | string | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueInstant?: fhir.FhirInstant | string | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueUri?: fhir.FhirUri | string | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueDate?: fhir.FhirDate | string | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueTime?: fhir.FhirTime | string | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueCode?: fhir.FhirCode | string | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueOid?: fhir.FhirOid | string | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueId?: fhir.FhirId | string | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valuePositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueMarkdown?: fhir.FhirMarkdown | string | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueAnnotation?: fhir.AnnotationArgs | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueCoding?: fhir.CodingArgs | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueRange?: fhir.RangeArgs | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueRatio?: fhir.RatioArgs | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueSignature?: fhir.SignatureArgs | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueHumanName?: fhir.HumanNameArgs | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueAddress?: fhir.AddressArgs | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueContactPoint?: fhir.ContactPointArgs | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueTiming?: fhir.TimingArgs | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueReference?: fhir.ReferenceArgs | undefined;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    valueMeta?: fhir.MetaArgs | undefined;
}
/**
 * Optional Extensions Element - found in all resources.
 */
export declare class Extension extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Source of the definition for the extension code - a logical name or a URL.
     */
    url: fhir.FhirUri | null;
    /**
     * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
    value?: (fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal | fhir.FhirBase64Binary | fhir.FhirInstant | fhir.FhirString | fhir.FhirUri | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirCode | fhir.FhirOid | fhir.FhirId | fhir.FhirUnsignedInt | fhir.FhirPositiveInt | fhir.FhirMarkdown | fhir.Annotation | fhir.Attachment | fhir.Identifier | fhir.CodeableConcept | fhir.Coding | fhir.Quantity | fhir.Range | fhir.Period | fhir.Ratio | fhir.SampledData | fhir.Signature | fhir.HumanName | fhir.Address | fhir.ContactPoint | fhir.Timing | fhir.Reference | fhir.Meta) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Extension.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for Extension - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExtensionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Extension.d.ts.map