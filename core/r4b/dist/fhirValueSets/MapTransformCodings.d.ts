import { CodingArgs } from '../fhir/Coding.js';
/**
 * How data is copied/created.
 */
export declare type MapTransformCodingType = {
    /**
     * append: append(source...) - source is element or string.
     */
    Append: CodingArgs;
    /**
     * c: Create a Coding. Parameters = (system. Code[, display]).
     */
    C: CodingArgs;
    /**
     * cast: cast(source, type?) - case source from one type to another. target type can be left as implicit if there is one and only one target type known.
     */
    Cast: CodingArgs;
    /**
     * cc: Create a CodeableConcept. Parameters = (text) or (system. Code[, display]).
     */
    Cc: CodingArgs;
    /**
     * copy: copy(source).
     */
    Copy: CodingArgs;
    /**
     * cp: Create a contact details. Parameters = (value) or (system, value). If no system is provided, the system should be inferred from the content of the value.
     */
    Cp: CodingArgs;
    /**
     * create: create(type : string) - type is passed through to the application on the standard API, and must be known by it.
     */
    Create: CodingArgs;
    /**
     * dateOp: Perform a date operation. *Parameters to be documented*.
     */
    DateOp: CodingArgs;
    /**
     * escape: escape(source, fmt1, fmt2) - change source from one kind of escaping to another (plain, java, xml, json). note that this is for when the string itself is escaped.
     */
    Escape: CodingArgs;
    /**
     * evaluate: Execute the supplied FHIRPath expression and use the value returned by that.
     */
    Evaluate: CodingArgs;
    /**
     * id: Create an identifier. Parameters = (system, value[, type]) where type is a code from the identifier type value set.
     */
    Id: CodingArgs;
    /**
     * pointer: Return the appropriate string to put in a reference that refers to the resource provided as a parameter.
     */
    Pointer: CodingArgs;
    /**
     * qty: Create a quantity. Parameters = (text) or (value, unit, [system, code]) where text is the natural representation e.g. [comparator]value[space]unit.
     */
    Qty: CodingArgs;
    /**
     * reference: reference(source : object) - return a string that references the provided tree properly.
     */
    Reference: CodingArgs;
    /**
     * translate: translate(source, uri_of_map) - use the translate operation.
     */
    Translate: CodingArgs;
    /**
     * truncate: truncate(source, length) - source must be stringy type.
     */
    Truncate: CodingArgs;
    /**
     * uuid: Generate a random UUID (in lowercase). No Parameters.
     */
    Uuid: CodingArgs;
};
/**
 * How data is copied/created.
 */
export declare const MapTransformCodings: MapTransformCodingType;
//# sourceMappingURL=MapTransformCodings.d.ts.map