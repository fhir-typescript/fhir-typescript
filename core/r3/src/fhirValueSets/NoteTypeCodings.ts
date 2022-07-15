// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/note-type|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The presentation types of notes.
 */
export type NoteTypeCodingType = {
  /**
   * display: Display the note.
   */
  Display: CodingArgs;
  /**
   * print: Print the note on the form.
   */
  PrintForm: CodingArgs;
  /**
   * printoper: Print the note for the operator.
   */
  PrintOperator: CodingArgs;
}

/**
 * The presentation types of notes.
 */
export const NoteTypeCodings:NoteTypeCodingType = {
  /**
   * display: Display the note.
   */
  Display: {
    display: "Display",
    code: "display",
    system: "http://hl7.org/fhir/note-type",
  },
  /**
   * print: Print the note on the form.
   */
  PrintForm: {
    display: "Print (Form)",
    code: "print",
    system: "http://hl7.org/fhir/note-type",
  },
  /**
   * printoper: Print the note for the operator.
   */
  PrintOperator: {
    display: "Print (Operator)",
    code: "printoper",
    system: "http://hl7.org/fhir/note-type",
  },
} as const;
