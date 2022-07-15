/**
 * Distinguishes groups from questions and display text and indicates data type for questions
 */
export declare const ItemTypeCodes: {
    /**
     * attachment: Question with binary content such as a image, PDF, etc. as an answer (valueAttachment)
     */
    readonly Attachment: "attachment";
    /**
     * boolean: Question with a yes/no answer (valueBoolean)
     */
    readonly Boolean: "boolean";
    /**
     * choice: Question with a Coding drawn from a list of options (specified in either the option property, or via the valueset referenced in the options property) as an answer (valueCoding)
     */
    readonly Choice: "choice";
    /**
     * date: Question with a date answer (valueDate)
     */
    readonly Date: "date";
    /**
     * dateTime: Question with a date and time answer (valueDateTime)
     */
    readonly DateTime: "dateTime";
    /**
     * decimal: Question with is a real number answer (valueDecimal)
     */
    readonly Decimal: "decimal";
    /**
     * display: Text for display that will not capture an answer or have child items.
     */
    readonly Display: "display";
    /**
     * group: An item with no direct answer but should have at least one child item.
     */
    readonly Group: "group";
    /**
     * integer: Question with an integer answer (valueInteger)
     */
    readonly Integer: "integer";
    /**
     * open-choice: Answer is a Coding drawn from a list of options (as with the choice type) or a free-text entry in a string (valueCoding or valueString)
     */
    readonly OpenChoice: "open-choice";
    /**
     * quantity: Question with a combination of a numeric value and unit, potentially with a comparator (&lt;, &gt;, etc.) as an answer. (valueQuantity)
     * There is an extension 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit' that can be used to define what unit whould be captured (or the a unit that has a ucum conversion from the provided unit)
     */
    readonly Quantity: "quantity";
    /**
     * question: An item that defines a specific answer to be captured, and may have child items.
     * (the answer provided in the QuestionnaireResponse should be of the defined datatype)
     */
    readonly Question: "question";
    /**
     * reference: Question with a reference to another resource (practitioner, organization, etc.) as an answer (valueReference)
     */
    readonly Reference: "reference";
    /**
     * string: Question with a short (few words to short sentence) free-text entry answer (valueString)
     */
    readonly String: "string";
    /**
     * text: Question with a long (potentially multi-paragraph) free-text entry answer (valueString)
     */
    readonly Text: "text";
    /**
     * time: Question with a time (hour:minute:second) answer independent of date. (valueTime)
     */
    readonly Time: "time";
    /**
     * url: Question with a URL (website, FTP site, etc.) answer (valueUri)
     */
    readonly Url: "url";
};
/**
 * Distinguishes groups from questions and display text and indicates data type for questions
 */
export declare type ItemTypeCodeType = typeof ItemTypeCodes[keyof typeof ItemTypeCodes];
//# sourceMappingURL=ItemTypeCodes.d.ts.map