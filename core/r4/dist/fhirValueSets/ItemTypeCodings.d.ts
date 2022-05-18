import { Coding } from '../fhir/Coding.js';
/**
 * Distinguishes groups from questions and display text and indicates data type for questions.
 */
export declare const ItemTypeCodings: {
    /**
     * attachment: Question with binary content such as an image, PDF, etc. as an answer (valueAttachment).
     */
    readonly Attachment: Coding;
    /**
     * boolean: Question with a yes/no answer (valueBoolean).
     */
    readonly Boolean: Coding;
    /**
     * choice: Question with a Coding drawn from a list of possible answers (specified in either the answerOption property, or via the valueset referenced in the answerValueSet property) as an answer (valueCoding).
     */
    readonly Choice: Coding;
    /**
     * date: Question with a date answer (valueDate).
     */
    readonly Date: Coding;
    /**
     * dateTime: Question with a date and time answer (valueDateTime).
     */
    readonly DateTime: Coding;
    /**
     * decimal: Question with is a real number answer (valueDecimal).
     */
    readonly Decimal: Coding;
    /**
     * display: Text for display that will not capture an answer or have child items.
     */
    readonly Display: Coding;
    /**
     * group: An item with no direct answer but should have at least one child item.
     */
    readonly Group: Coding;
    /**
     * integer: Question with an integer answer (valueInteger).
     */
    readonly Integer: Coding;
    /**
     * open-choice: Answer is a Coding drawn from a list of possible answers (as with the choice type) or a free-text entry in a string (valueCoding or valueString).
     */
    readonly OpenChoice: Coding;
    /**
     * quantity: Question with a combination of a numeric value and unit, potentially with a comparator (&lt;, &gt;, etc.) as an answer. (valueQuantity) There is an extension 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit' that can be used to define what unit should be captured (or the unit that has a ucum conversion from the provided unit).
     */
    readonly Quantity: Coding;
    /**
     * question: An item that defines a specific answer to be captured, and which may have child items. (the answer provided in the QuestionnaireResponse should be of the defined datatype).
     */
    readonly Question: Coding;
    /**
     * reference: Question with a reference to another resource (practitioner, organization, etc.) as an answer (valueReference).
     */
    readonly Reference: Coding;
    /**
     * string: Question with a short (few words to short sentence) free-text entry answer (valueString).
     */
    readonly String: Coding;
    /**
     * text: Question with a long (potentially multi-paragraph) free-text entry answer (valueString).
     */
    readonly Text: Coding;
    /**
     * time: Question with a time (hour:minute:second) answer independent of date. (valueTime).
     */
    readonly Time: Coding;
    /**
     * url: Question with a URL (website, FTP site, etc.) answer (valueUri).
     */
    readonly Url: Coding;
};
/**
 * Distinguishes groups from questions and display text and indicates data type for questions.
 */
export declare type ItemTypeCodingType = typeof ItemTypeCodings;
//# sourceMappingURL=ItemTypeCodings.d.ts.map