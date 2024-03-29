// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/answer-format|1.0.2

/**
 * The expected format of an answer.
 */
export const AnswerFormatCodes = {
  /**
   * attachment: Answer is binary content such as a image, PDF, etc.
   */
  Attachment: "attachment",
  /**
   * boolean: Answer is a yes/no answer.
   */
  Boolean: "boolean",
  /**
   * choice: Answer is a Coding drawn from a list of options.
   */
  Choice: "choice",
  /**
   * date: Answer is a date.
   */
  Date: "date",
  /**
   * dateTime: Answer is a date and time.
   */
  DateTime: "dateTime",
  /**
   * decimal: Answer is a floating point number.
   */
  Decimal: "decimal",
  /**
   * instant: Answer is a system timestamp.
   */
  Instant: "instant",
  /**
   * integer: Answer is an integer.
   */
  Integer: "integer",
  /**
   * open-choice: Answer is a Coding drawn from a list of options or a free-text entry.
   */
  OpenChoice: "open-choice",
  /**
   * quantity: Answer is a combination of a numeric value and unit, potentially with a comparator (&lt;, &gt;, etc.).
   */
  Quantity: "quantity",
  /**
   * reference: Answer is a reference to another resource (practitioner, organization, etc.).
   */
  Reference: "reference",
  /**
   * string: Answer is a short (few words to short sentence) free-text entry.
   */
  String: "string",
  /**
   * text: Answer is a long (potentially multi-paragraph) free-text entry (still captured as a string).
   */
  Text: "text",
  /**
   * time: Answer is a time (hour/minute/second) independent of date.
   */
  Time: "time",
  /**
   * url: Answer is a url (website, FTP site, etc.).
   */
  Url: "url",
} as const;

/**
 * The expected format of an answer.
 */
export type AnswerFormatCodeType = typeof AnswerFormatCodes[keyof typeof AnswerFormatCodes];
