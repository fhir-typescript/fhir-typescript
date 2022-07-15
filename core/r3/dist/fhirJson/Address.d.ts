import * as fhir from '../fhirJson.js';
/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
 */
export interface Address extends fhir.FhirElement {
    /**
     * This is labeled as "Is Modifier" because applications should not mistake a temporary or old address etc.for a current/permanent one. Applications can assume that an address is current unless it explicitly says that it is temporary or old.
     */
    use?: 'home' | 'old' | 'temp' | 'work' | undefined;
    /**
     * Extended properties for primitive element: Address.use
     */
    _use?: fhir.FhirElement;
    /**
     * Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.
     */
    type?: 'both' | 'physical' | 'postal' | undefined;
    /**
     * Extended properties for primitive element: Address.type
     */
    _type?: fhir.FhirElement;
    /**
     * Can provide both a text representation and parts.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: Address.text
     */
    _text?: fhir.FhirElement;
    /**
     * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
     */
    line?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Address.line
     */
    _line?: (fhir.FhirElement | null)[];
    /**
     * The name of the city, town, village or other community or delivery center.
     */
    city?: string | undefined;
    /**
     * Extended properties for primitive element: Address.city
     */
    _city?: fhir.FhirElement;
    /**
     * District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead.
     */
    district?: string | undefined;
    /**
     * Extended properties for primitive element: Address.district
     */
    _district?: fhir.FhirElement;
    /**
     * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (i.e. US 2 letter state codes).
     */
    state?: string | undefined;
    /**
     * Extended properties for primitive element: Address.state
     */
    _state?: fhir.FhirElement;
    /**
     * A postal code designating a region defined by the postal service.
     */
    postalCode?: string | undefined;
    /**
     * Extended properties for primitive element: Address.postalCode
     */
    _postalCode?: fhir.FhirElement;
    /**
     * ISO 3166 3 letter codes can be used in place of a full country name.
     */
    country?: string | undefined;
    /**
     * Extended properties for primitive element: Address.country
     */
    _country?: fhir.FhirElement;
    /**
     * Time period when address was/is in use.
     */
    period?: fhir.Period | undefined;
}
//# sourceMappingURL=Address.d.ts.map