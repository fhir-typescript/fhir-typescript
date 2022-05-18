import { Coding } from '../fhir/Coding.js';
/**
 * The type of a property value.
 */
export declare const ConceptPropertyTypeCodings: {
    /**
     * boolean: The property value is a boolean true | false.
     */
    readonly VALBoolean: Coding;
    /**
     * code: The property value is a code that identifies a concept defined in the code system.
     */
    readonly CodeInternalReference: Coding;
    /**
     * Coding: The property  value is a code defined in an external code system. This may be used for translations, but is not the intent.
     */
    readonly CodingExternalReference: Coding;
    /**
     * dateTime: The property is a date or a date + time.
     */
    readonly DateTime: Coding;
    /**
     * decimal: The property value is a decimal number.
     */
    readonly Decimal: Coding;
    /**
     * integer: The property value is a string (often used to assign ranking values to concepts for supporting score assessments).
     */
    readonly Integer: Coding;
    /**
     * string: The property value is a string.
     */
    readonly VALString: Coding;
};
/**
 * The type of a property value.
 */
export declare type ConceptPropertyTypeCodingType = typeof ConceptPropertyTypeCodings;
//# sourceMappingURL=ConceptPropertyTypeCodings.d.ts.map