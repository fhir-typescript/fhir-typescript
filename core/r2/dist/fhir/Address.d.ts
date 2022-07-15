import * as fhir from '../fhir.js';
import { AddressUseCodeType } from '../fhirValueSets/AddressUseCodes.js';
import { AddressTypeCodeType } from '../fhirValueSets/AddressTypeCodes.js';
/**
 * Valid arguments for the Address type.
 */
export interface AddressArgs extends fhir.FhirElementArgs {
    /**
     * Allows an appropriate address to be chosen from a list of many.
     */
    use?: fhir.FhirCode<AddressUseCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Address.use
     */
    _use?: fhir.FhirElementArgs;
    /**
     * Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.
     */
    type?: fhir.FhirCode<AddressTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Address.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * A renderable, unencoded form.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Address.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * home | work | temp | old - purpose of this address.
     */
    line?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Address.line
     */
    _line?: (fhir.FhirElementArgs | null)[];
    /**
     * The name of the city, town, village or other community or delivery center.
     */
    city?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Address.city
     */
    _city?: fhir.FhirElementArgs;
    /**
     * The name of the administrative area (county).
     */
    district?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Address.district
     */
    _district?: fhir.FhirElementArgs;
    /**
     * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (i.e. US 2 letter state codes).
     */
    state?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Address.state
     */
    _state?: fhir.FhirElementArgs;
    /**
     * A postal code designating a region defined by the postal service.
     */
    postalCode?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Address.postalCode
     */
    _postalCode?: fhir.FhirElementArgs;
    /**
     * Country - a nation as commonly understood or generally accepted.
     */
    country?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Address.country
     */
    _country?: fhir.FhirElementArgs;
    /**
     * Allows addresses to be placed in historical context.
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * There is a variety of postal address formats defined around the world. This format defines a superset that is the basis for all addresses around the world.
 */
export declare class Address extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Allows an appropriate address to be chosen from a list of many.
     */
    use?: fhir.FhirCode<AddressUseCodeType> | undefined;
    /**
     * Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.
     */
    type?: fhir.FhirCode<AddressTypeCodeType> | undefined;
    /**
     * A renderable, unencoded form.
     */
    text?: fhir.FhirString | undefined;
    /**
     * home | work | temp | old - purpose of this address.
     */
    line: fhir.FhirString[];
    /**
     * The name of the city, town, village or other community or delivery center.
     */
    city?: fhir.FhirString | undefined;
    /**
     * The name of the administrative area (county).
     */
    district?: fhir.FhirString | undefined;
    /**
     * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (i.e. US 2 letter state codes).
     */
    state?: fhir.FhirString | undefined;
    /**
     * A postal code designating a region defined by the postal service.
     */
    postalCode?: fhir.FhirString | undefined;
    /**
     * Country - a nation as commonly understood or generally accepted.
     */
    country?: fhir.FhirString | undefined;
    /**
     * Allows addresses to be placed in historical context.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for Address - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AddressArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Address.d.ts.map