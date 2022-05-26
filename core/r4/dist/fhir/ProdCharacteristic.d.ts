import * as fhir from '../fhir.js';
/**
 * Valid arguments for the ProdCharacteristic type.
 */
export interface ProdCharacteristicArgs extends fhir.BackboneElementArgs {
    /**
     * Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    height?: fhir.QuantityArgs | undefined;
    /**
     * Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    width?: fhir.QuantityArgs | undefined;
    /**
     * Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    depth?: fhir.QuantityArgs | undefined;
    /**
     * Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    weight?: fhir.QuantityArgs | undefined;
    /**
     * Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    nominalVolume?: fhir.QuantityArgs | undefined;
    /**
     * Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    externalDiameter?: fhir.QuantityArgs | undefined;
    /**
     * Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    shape?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ProdCharacteristic.shape
     */
    _shape?: fhir.FhirElementArgs;
    /**
     * Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    color?: fhir.FhirString[] | string[] | undefined;
    /**
     * Extended properties for primitive element: ProdCharacteristic.color
     */
    _color?: (fhir.FhirElementArgs | null)[];
    /**
     * Where applicable, the imprint can be specified as text.
     */
    imprint?: fhir.FhirString[] | string[] | undefined;
    /**
     * Extended properties for primitive element: ProdCharacteristic.imprint
     */
    _imprint?: (fhir.FhirElementArgs | null)[];
    /**
     * Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations.
     */
    image?: fhir.AttachmentArgs[] | undefined;
    /**
     * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    scoring?: fhir.CodeableConceptArgs | undefined;
}
/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export declare class ProdCharacteristic extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    height?: fhir.Quantity | undefined;
    /**
     * Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    width?: fhir.Quantity | undefined;
    /**
     * Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    depth?: fhir.Quantity | undefined;
    /**
     * Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    weight?: fhir.Quantity | undefined;
    /**
     * Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    nominalVolume?: fhir.Quantity | undefined;
    /**
     * Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    externalDiameter?: fhir.Quantity | undefined;
    /**
     * Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    shape?: fhir.FhirString | undefined;
    /**
     * Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    color: fhir.FhirString[];
    /**
     * Where applicable, the imprint can be specified as text.
     */
    imprint: fhir.FhirString[];
    /**
     * Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations.
     */
    image: fhir.Attachment[];
    /**
     * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    scoring?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ProdCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProdCharacteristicArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=ProdCharacteristic.d.ts.map