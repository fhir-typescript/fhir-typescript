import { CodingArgs } from '../fhir/Coding.js';
/**
 * Identifies the style of unique identifier used to identify a namespace.
 */
export declare type NamingsystemIdentifierTypeCodingType = {
    /**
     * oid: An ISO object identifier; e.g. 1.2.3.4.5.
     */
    OID: CodingArgs;
    /**
     * other: Some other type of unique identifier; e.g. HL7-assigned reserved string such as LN for LOINC.
     */
    Other: CodingArgs;
    /**
     * uri: A uniform resource identifier (ideally a URL - uniform resource locator); e.g. http://unitsofmeasure.org.
     */
    URI: CodingArgs;
    /**
     * uuid: A universally unique identifier of the form a5afddf4-e880-459b-876e-e4591b0acc11.
     */
    UUID: CodingArgs;
};
/**
 * Identifies the style of unique identifier used to identify a namespace.
 */
export declare const NamingsystemIdentifierTypeCodings: NamingsystemIdentifierTypeCodingType;
//# sourceMappingURL=NamingsystemIdentifierTypeCodings.d.ts.map