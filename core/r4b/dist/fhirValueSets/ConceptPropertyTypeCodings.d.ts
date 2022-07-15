import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of a property value.
 */
export declare type ConceptPropertyTypeCodingType = {
    /**
     * boolean: The property value is a boolean true | false.
     */
    VALBoolean: CodingArgs;
    /**
     * code: The property value is a code that identifies a concept defined in the code system.
     */
    CodeInternalReference: CodingArgs;
    /**
     * Coding: The property  value is a code defined in an external code system. This may be used for translations, but is not the intent.
     */
    CodingExternalReference: CodingArgs;
    /**
     * dateTime: The property is a date or a date + time.
     */
    DateTime: CodingArgs;
    /**
     * decimal: The property value is a decimal number.
     */
    Decimal: CodingArgs;
    /**
     * integer: The property value is a string (often used to assign ranking values to concepts for supporting score assessments).
     */
    Integer: CodingArgs;
    /**
     * string: The property value is a string.
     */
    VALString: CodingArgs;
};
/**
 * The type of a property value.
 */
export declare const ConceptPropertyTypeCodings: ConceptPropertyTypeCodingType;
//# sourceMappingURL=ConceptPropertyTypeCodings.d.ts.map