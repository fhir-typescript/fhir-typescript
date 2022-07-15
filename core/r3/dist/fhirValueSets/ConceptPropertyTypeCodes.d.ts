/**
 * The type of a property value
 */
export declare const ConceptPropertyTypeCodes: {
    /**
     * boolean: The property value is a boolean true | false
     */
    readonly VALBoolean: "boolean";
    /**
     * code: The property value is a code that identifies a concept defined in the code system
     */
    readonly CodeInternalReference: "code";
    /**
     * Coding: The property  value is a code defined in an external code system. This may be used for translations, but is not the intent
     */
    readonly CodingExternalReference: "Coding";
    /**
     * dateTime: The property is a date or a date + time
     */
    readonly DateTime: "dateTime";
    /**
     * integer: The property value is a string (often used to assign ranking values to concepts for supporting score assessments)
     */
    readonly Integer: "integer";
    /**
     * string: The property value is a string
     */
    readonly VALString: "string";
};
/**
 * The type of a property value
 */
export declare type ConceptPropertyTypeCodeType = typeof ConceptPropertyTypeCodes[keyof typeof ConceptPropertyTypeCodes];
//# sourceMappingURL=ConceptPropertyTypeCodes.d.ts.map