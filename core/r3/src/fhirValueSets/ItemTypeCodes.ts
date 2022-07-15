// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/item-type|3.0.2

/**
 * Distinguishes groups from questions and display text and indicates data type for questions
 */
export const ItemTypeCodes = {
  /**
   * attachment: Question with binary content such as a image, PDF, etc. as an answer (valueAttachment)
   */
  Attachment: "attachment",
  /**
   * boolean: Question with a yes/no answer (valueBoolean)
   */
  Boolean: "boolean",
  /**
   * choice: Question with a Coding drawn from a list of options (specified in either the option property, or via the valueset referenced in the options property) as an answer (valueCoding)
   */
  Choice: "choice",
  /**
   * date: Question with a date answer (valueDate)
   */
  Date: "date",
  /**
   * dateTime: Question with a date and time answer (valueDateTime)
   */
  DateTime: "dateTime",
  /**
   * decimal: Question with is a real number answer (valueDecimal)
   */
  Decimal: "decimal",
  /**
   * display: Text for display that will not capture an answer or have child items.
   */
  Display: "display",
  /**
   * group: An item with no direct answer but should have at least one child item.
   */
  Group: "group",
  /**
   * integer: Question with an integer answer (valueInteger)
   */
  Integer: "integer",
  /**
   * open-choice: Answer is a Coding drawn from a list of options (as with the choice type) or a free-text entry in a string (valueCoding or valueString)
   */
  OpenChoice: "open-choice",
  /**
   * quantity: Question with a combination of a numeric value and unit, potentially with a comparator (&lt;, &gt;, etc.) as an answer. (valueQuantity)
   * There is an extension 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit' that can be used to define what unit whould be captured (or the a unit that has a ucum conversion from the provided unit)
   */
  Quantity: "quantity",
  /**
   * question: An item that defines a specific answer to be captured, and may have child items.
   * (the answer provided in the QuestionnaireResponse should be of the defined datatype)
   */
  Question: "question",
  /**
   * reference: Question with a reference to another resource (practitioner, organization, etc.) as an answer (valueReference)
   */
  Reference: "reference",
  /**
   * string: Question with a short (few words to short sentence) free-text entry answer (valueString)
   */
  String: "string",
  /**
   * text: Question with a long (potentially multi-paragraph) free-text entry answer (valueString)
   */
  Text: "text",
  /**
   * time: Question with a time (hour:minute:second) answer independent of date. (valueTime)
   */
  Time: "time",
  /**
   * url: Question with a URL (website, FTP site, etc.) answer (valueUri)
   */
  Url: "url",
} as const;

/**
 * Distinguishes groups from questions and display text and indicates data type for questions
 */
export type ItemTypeCodeType = typeof ItemTypeCodes[keyof typeof ItemTypeCodes];
