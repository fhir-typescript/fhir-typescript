/**
 * The expected format of an answer.
 */
export declare const AnswerFormatCodes: {
    /**
     * attachment: Answer is binary content such as a image, PDF, etc.
     */
    readonly Attachment: "attachment";
    /**
     * boolean: Answer is a yes/no answer.
     */
    readonly Boolean: "boolean";
    /**
     * choice: Answer is a Coding drawn from a list of options.
     */
    readonly Choice: "choice";
    /**
     * date: Answer is a date.
     */
    readonly Date: "date";
    /**
     * dateTime: Answer is a date and time.
     */
    readonly DateTime: "dateTime";
    /**
     * decimal: Answer is a floating point number.
     */
    readonly Decimal: "decimal";
    /**
     * instant: Answer is a system timestamp.
     */
    readonly Instant: "instant";
    /**
     * integer: Answer is an integer.
     */
    readonly Integer: "integer";
    /**
     * open-choice: Answer is a Coding drawn from a list of options or a free-text entry.
     */
    readonly OpenChoice: "open-choice";
    /**
     * quantity: Answer is a combination of a numeric value and unit, potentially with a comparator (&lt;, &gt;, etc.).
     */
    readonly Quantity: "quantity";
    /**
     * reference: Answer is a reference to another resource (practitioner, organization, etc.).
     */
    readonly Reference: "reference";
    /**
     * string: Answer is a short (few words to short sentence) free-text entry.
     */
    readonly String: "string";
    /**
     * text: Answer is a long (potentially multi-paragraph) free-text entry (still captured as a string).
     */
    readonly Text: "text";
    /**
     * time: Answer is a time (hour/minute/second) independent of date.
     */
    readonly Time: "time";
    /**
     * url: Answer is a url (website, FTP site, etc.).
     */
    readonly Url: "url";
};
/**
 * The expected format of an answer.
 */
export declare type AnswerFormatCodeType = typeof AnswerFormatCodes[keyof typeof AnswerFormatCodes];
//# sourceMappingURL=AnswerFormatCodes.d.ts.map