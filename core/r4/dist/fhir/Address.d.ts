import * as fhir from '../fhir.js';
import { AddressUseCodeType } from '../fhirValueSets/AddressUseCodes.js';
import { AddressTypeCodeType } from '../fhirValueSets/AddressTypeCodes.js';
/**
 * Valid arguments for the Address type.
 */
export interface AddressArgs extends fhir.FhirElementArgs {
    /**
     * Applications can assume that an address is current unless it explicitly says that it is temporary or old.
     */
    use?: fhir.FhirCode<AddressUseCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Address.use
     */
    _use?: fhir.FhirElementArgs;
    /**
     * The definition of Address states that "address is intended to describe postal addresses, not physical locations". However, many applications track whether an address has a dual purpose of being a location that can be visited as well as being a valid delivery destination, and Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).
     */
    type?: fhir.FhirCode<AddressTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Address.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a part.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Address.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
     */
    line?: fhir.FhirString[] | string[] | undefined;
    /**
     * Extended properties for primitive element: Address.line
     */
    _line?: (fhir.FhirElementArgs | null)[];
    /**
     * The name of the city, town, suburb, village or other community or delivery center.
     */
    city?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Address.city
     */
    _city?: fhir.FhirElementArgs;
    /**
     * District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead.
     */
    district?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Address.district
     */
    _district?: fhir.FhirElementArgs;
    /**
     * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).
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
     * ISO 3166 3 letter codes can be used in place of a human readable country name.
     */
    country?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Address.country
     */
    _country?: fhir.FhirElementArgs;
    /**
     * Time period when address was/is in use.
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
 */
export declare class Address extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Applications can assume that an address is current unless it explicitly says that it is temporary or old.
     */
    use?: fhir.FhirCode<AddressUseCodeType> | undefined;
    /**
     * The definition of Address states that "address is intended to describe postal addresses, not physical locations". However, many applications track whether an address has a dual purpose of being a location that can be visited as well as being a valid delivery destination, and Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).
     */
    type?: fhir.FhirCode<AddressTypeCodeType> | undefined;
    /**
     * Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a part.
     */
    text?: fhir.FhirString | undefined;
    /**
     * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
     */
    line: fhir.FhirString[];
    /**
     * The name of the city, town, suburb, village or other community or delivery center.
     */
    city?: fhir.FhirString | undefined;
    /**
     * District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead.
     */
    district?: fhir.FhirString | undefined;
    /**
     * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).
     */
    state?: fhir.FhirString | undefined;
    /**
     * A postal code designating a region defined by the postal service.
     */
    postalCode?: fhir.FhirString | undefined;
    /**
     * ISO 3166 3 letter codes can be used in place of a human readable country name.
     */
    country?: fhir.FhirString | undefined;
    /**
     * Time period when address was/is in use.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for Address - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AddressArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for use (Address.use)
     */
    static get useRequiredCodes(): {
        readonly Billing: "billing";
        readonly Home: "home";
        readonly OldIncorrect: "old";
        readonly Temporary: "temp";
        readonly Work: "work";
    };
    /**
     * Required-bound Value Set for type (Address.type)
     */
    static get typeRequiredCodes(): {
        readonly PostalAndPhysical: "both";
        readonly Physical: "physical";
        readonly Postal: "postal";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Address.d.ts.map