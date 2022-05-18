/**
 * Identifies the purpose of the naming system.
 */
export declare const NamingsystemTypeCodes: {
    /**
     * codesystem: The naming system is used to define concepts and symbols to represent those concepts; e.g. UCUM, LOINC, NDC code, local lab codes, etc.
     */
    readonly CodeSystem: "codesystem";
    /**
     * identifier: The naming system is used to manage identifiers (e.g. license numbers, order numbers, etc.).
     */
    readonly Identifier: "identifier";
    /**
     * root: The naming system is used as the root for other identifiers and naming systems.
     */
    readonly Root: "root";
};
/**
 * Identifies the purpose of the naming system.
 */
export declare type NamingsystemTypeCodeType = typeof NamingsystemTypeCodes[keyof typeof NamingsystemTypeCodes];
//# sourceMappingURL=NamingsystemTypeCodes.d.ts.map