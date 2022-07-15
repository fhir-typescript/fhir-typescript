import { CodingArgs } from '../fhir/Coding.js';
/**
 * Distinguishes groups from questions and display text and indicates data type for questions
 */
export declare type ItemTypeCodingType = {
    /**
     * attachment: Question with binary content such as a image, PDF, etc. as an answer (valueAttachment)
     */
    Attachment: CodingArgs;
    /**
     * boolean: Question with a yes/no answer (valueBoolean)
     */
    Boolean: CodingArgs;
    /**
     * choice: Question with a Coding drawn from a list of options (specified in either the option property, or via the valueset referenced in the options property) as an answer (valueCoding)
     */
    Choice: CodingArgs;
    /**
     * date: Question with a date answer (valueDate)
     */
    Date: CodingArgs;
    /**
     * dateTime: Question with a date and time answer (valueDateTime)
     */
    DateTime: CodingArgs;
    /**
     * decimal: Question with is a real number answer (valueDecimal)
     */
    Decimal: CodingArgs;
    /**
     * display: Text for display that will not capture an answer or have child items.
     */
    Display: CodingArgs;
    /**
     * group: An item with no direct answer but should have at least one child item.
     */
    Group: CodingArgs;
    /**
     * integer: Question with an integer answer (valueInteger)
     */
    Integer: CodingArgs;
    /**
     * open-choice: Answer is a Coding drawn from a list of options (as with the choice type) or a free-text entry in a string (valueCoding or valueString)
     */
    OpenChoice: CodingArgs;
    /**
     * quantity: Question with a combination of a numeric value and unit, potentially with a comparator (&lt;, &gt;, etc.) as an answer. (valueQuantity)
     * There is an extension 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit' that can be used to define what unit whould be captured (or the a unit that has a ucum conversion from the provided unit)
     */
    Quantity: CodingArgs;
    /**
     * question: An item that defines a specific answer to be captured, and may have child items.
     * (the answer provided in the QuestionnaireResponse should be of the defined datatype)
     */
    Question: CodingArgs;
    /**
     * reference: Question with a reference to another resource (practitioner, organization, etc.) as an answer (valueReference)
     */
    Reference: CodingArgs;
    /**
     * string: Question with a short (few words to short sentence) free-text entry answer (valueString)
     */
    String: CodingArgs;
    /**
     * text: Question with a long (potentially multi-paragraph) free-text entry answer (valueString)
     */
    Text: CodingArgs;
    /**
     * time: Question with a time (hour:minute:second) answer independent of date. (valueTime)
     */
    Time: CodingArgs;
    /**
     * url: Question with a URL (website, FTP site, etc.) answer (valueUri)
     */
    Url: CodingArgs;
};
/**
 * Distinguishes groups from questions and display text and indicates data type for questions
 */
export declare const ItemTypeCodings: ItemTypeCodingType;
//# sourceMappingURL=ItemTypeCodings.d.ts.map