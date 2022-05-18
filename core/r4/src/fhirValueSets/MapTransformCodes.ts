// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/map-transform|4.0.1

/**
 * How data is copied/created.
 */
export const MapTransformCodes = {
  /**
   * append: append(source...) - source is element or string.
   */
  Append: "append",
  /**
   * c: Create a Coding. Parameters = (system. Code[, display]).
   */
  C: "c",
  /**
   * cast: cast(source, type?) - case source from one type to another. target type can be left as implicit if there is one and only one target type known.
   */
  Cast: "cast",
  /**
   * cc: Create a CodeableConcept. Parameters = (text) or (system. Code[, display]).
   */
  Cc: "cc",
  /**
   * copy: copy(source).
   */
  Copy: "copy",
  /**
   * cp: Create a contact details. Parameters = (value) or (system, value). If no system is provided, the system should be inferred from the content of the value.
   */
  Cp: "cp",
  /**
   * create: create(type : string) - type is passed through to the application on the standard API, and must be known by it.
   */
  Create: "create",
  /**
   * dateOp: Perform a date operation. *Parameters to be documented*.
   */
  DateOp: "dateOp",
  /**
   * escape: escape(source, fmt1, fmt2) - change source from one kind of escaping to another (plain, java, xml, json). note that this is for when the string itself is escaped.
   */
  Escape: "escape",
  /**
   * evaluate: Execute the supplied FHIRPath expression and use the value returned by that.
   */
  Evaluate: "evaluate",
  /**
   * id: Create an identifier. Parameters = (system, value[, type]) where type is a code from the identifier type value set.
   */
  Id: "id",
  /**
   * pointer: Return the appropriate string to put in a reference that refers to the resource provided as a parameter.
   */
  Pointer: "pointer",
  /**
   * qty: Create a quantity. Parameters = (text) or (value, unit, [system, code]) where text is the natural representation e.g. [comparator]value[space]unit.
   */
  Qty: "qty",
  /**
   * reference: reference(source : object) - return a string that references the provided tree properly.
   */
  Reference: "reference",
  /**
   * translate: translate(source, uri_of_map) - use the translate operation.
   */
  Translate: "translate",
  /**
   * truncate: truncate(source, length) - source must be stringy type.
   */
  Truncate: "truncate",
  /**
   * uuid: Generate a random UUID (in lowercase). No Parameters.
   */
  Uuid: "uuid",
} as const;

/**
 * How data is copied/created.
 */
export type MapTransformCodeType = typeof MapTransformCodes[keyof typeof MapTransformCodes];
