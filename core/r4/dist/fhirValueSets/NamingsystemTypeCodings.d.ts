import { Coding } from '../fhir/Coding.js';
/**
 * Identifies the purpose of the naming system.
 */
export declare const NamingsystemTypeCodings: {
    /**
     * codesystem: The naming system is used to define concepts and symbols to represent those concepts; e.g. UCUM, LOINC, NDC code, local lab codes, etc.
     */
    readonly CodeSystem: Coding;
    /**
     * identifier: The naming system is used to manage identifiers (e.g. license numbers, order numbers, etc.).
     */
    readonly Identifier: Coding;
    /**
     * root: The naming system is used as the root for other identifiers and naming systems.
     */
    readonly Root: Coding;
};
/**
 * Identifies the purpose of the naming system.
 */
export declare type NamingsystemTypeCodingType = typeof NamingsystemTypeCodings;
//# sourceMappingURL=NamingsystemTypeCodings.d.ts.map