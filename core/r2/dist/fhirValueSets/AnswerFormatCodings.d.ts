import { CodingArgs } from '../fhir/Coding.js';
/**
 * The expected format of an answer.
 */
export declare type AnswerFormatCodingType = {
    /**
     * attachment: Answer is binary content such as a image, PDF, etc.
     */
    Attachment: CodingArgs;
    /**
     * boolean: Answer is a yes/no answer.
     */
    Boolean: CodingArgs;
    /**
     * choice: Answer is a Coding drawn from a list of options.
     */
    Choice: CodingArgs;
    /**
     * date: Answer is a date.
     */
    Date: CodingArgs;
    /**
     * dateTime: Answer is a date and time.
     */
    DateTime: CodingArgs;
    /**
     * decimal: Answer is a floating point number.
     */
    Decimal: CodingArgs;
    /**
     * instant: Answer is a system timestamp.
     */
    Instant: CodingArgs;
    /**
     * integer: Answer is an integer.
     */
    Integer: CodingArgs;
    /**
     * open-choice: Answer is a Coding drawn from a list of options or a free-text entry.
     */
    OpenChoice: CodingArgs;
    /**
     * quantity: Answer is a combination of a numeric value and unit, potentially with a comparator (&lt;, &gt;, etc.).
     */
    Quantity: CodingArgs;
    /**
     * reference: Answer is a reference to another resource (practitioner, organization, etc.).
     */
    Reference: CodingArgs;
    /**
     * string: Answer is a short (few words to short sentence) free-text entry.
     */
    String: CodingArgs;
    /**
     * text: Answer is a long (potentially multi-paragraph) free-text entry (still captured as a string).
     */
    Text: CodingArgs;
    /**
     * time: Answer is a time (hour/minute/second) independent of date.
     */
    Time: CodingArgs;
    /**
     * url: Answer is a url (website, FTP site, etc.).
     */
    Url: CodingArgs;
};
/**
 * The expected format of an answer.
 */
export declare const AnswerFormatCodings: AnswerFormatCodingType;
//# sourceMappingURL=AnswerFormatCodings.d.ts.map