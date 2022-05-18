import { Coding } from '../fhir/Coding.js';
/**
 * How data is copied/created.
 */
export declare const MapTransformCodings: {
    /**
     * append: append(source...) - source is element or string.
     */
    readonly Append: Coding;
    /**
     * c: Create a Coding. Parameters = (system. Code[, display]).
     */
    readonly C: Coding;
    /**
     * cast: cast(source, type?) - case source from one type to another. target type can be left as implicit if there is one and only one target type known.
     */
    readonly Cast: Coding;
    /**
     * cc: Create a CodeableConcept. Parameters = (text) or (system. Code[, display]).
     */
    readonly Cc: Coding;
    /**
     * copy: copy(source).
     */
    readonly Copy: Coding;
    /**
     * cp: Create a contact details. Parameters = (value) or (system, value). If no system is provided, the system should be inferred from the content of the value.
     */
    readonly Cp: Coding;
    /**
     * create: create(type : string) - type is passed through to the application on the standard API, and must be known by it.
     */
    readonly Create: Coding;
    /**
     * dateOp: Perform a date operation. *Parameters to be documented*.
     */
    readonly DateOp: Coding;
    /**
     * escape: escape(source, fmt1, fmt2) - change source from one kind of escaping to another (plain, java, xml, json). note that this is for when the string itself is escaped.
     */
    readonly Escape: Coding;
    /**
     * evaluate: Execute the supplied FHIRPath expression and use the value returned by that.
     */
    readonly Evaluate: Coding;
    /**
     * id: Create an identifier. Parameters = (system, value[, type]) where type is a code from the identifier type value set.
     */
    readonly Id: Coding;
    /**
     * pointer: Return the appropriate string to put in a reference that refers to the resource provided as a parameter.
     */
    readonly Pointer: Coding;
    /**
     * qty: Create a quantity. Parameters = (text) or (value, unit, [system, code]) where text is the natural representation e.g. [comparator]value[space]unit.
     */
    readonly Qty: Coding;
    /**
     * reference: reference(source : object) - return a string that references the provided tree properly.
     */
    readonly Reference: Coding;
    /**
     * translate: translate(source, uri_of_map) - use the translate operation.
     */
    readonly Translate: Coding;
    /**
     * truncate: truncate(source, length) - source must be stringy type.
     */
    readonly Truncate: Coding;
    /**
     * uuid: Generate a random UUID (in lowercase). No Parameters.
     */
    readonly Uuid: Coding;
};
/**
 * How data is copied/created.
 */
export declare type MapTransformCodingType = typeof MapTransformCodings;
//# sourceMappingURL=MapTransformCodings.d.ts.map