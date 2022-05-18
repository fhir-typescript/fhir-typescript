// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/note-type|4.0.1

/**
 * The presentation types of notes.
 */
export const NoteTypeCodes = {
  /**
   * display: Display the note.
   */
  Display: "display",
  /**
   * print: Print the note on the form.
   */
  PrintForm: "print",
  /**
   * printoper: Print the note for the operator.
   */
  PrintOperator: "printoper",
} as const;

/**
 * The presentation types of notes.
 */
export type NoteTypeCodeType = typeof NoteTypeCodes[keyof typeof NoteTypeCodes];