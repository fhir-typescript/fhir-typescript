import { CodingArgs } from '../fhir/Coding.js';
/**
 * A supported modifier for a search parameter.
 */
export declare type SearchModifierCodingType = {
    /**
     * above: The search parameter tests whether the value in a resource subsumes the specified value (is-a, or hierarchical relationships).
     */
    Above: CodingArgs;
    /**
     * below: The search parameter tests whether the value in a resource is subsumed by the specified value (is-a, or hierarchical relationships).
     */
    Below: CodingArgs;
    /**
     * contains: The search parameter returns resources that include the supplied parameter value anywhere within the field being searched.
     */
    Contains: CodingArgs;
    /**
     * exact: The search parameter returns resources that have a value that exactly matches the supplied parameter (the whole string, including casing and accents).
     */
    Exact: CodingArgs;
    /**
     * in: The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is in the specified value set.
     */
    In: CodingArgs;
    /**
     * missing: The search parameter returns resources that have a value or not.
     */
    Missing: CodingArgs;
    /**
     * not: The search parameter returns resources that do not contain a match .
     */
    Not: CodingArgs;
    /**
     * not-in: The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is not in the specified value set.
     */
    NotIn: CodingArgs;
    /**
     * text: The search parameter is processed as a string that searches text associated with the code/value - either CodeableConcept.text, Coding.display, or Identifier.type.text.
     */
    Text: CodingArgs;
    /**
     * type: The search parameter only applies to the Resource Type specified as a modifier (e.g. the modifier is not actually :type, but :Patient etc.).
     */
    Type: CodingArgs;
};
/**
 * A supported modifier for a search parameter.
 */
export declare const SearchModifierCodings: SearchModifierCodingType;
//# sourceMappingURL=SearchModifierCodings.d.ts.map