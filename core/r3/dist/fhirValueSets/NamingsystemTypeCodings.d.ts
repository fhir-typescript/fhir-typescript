import { CodingArgs } from '../fhir/Coding.js';
/**
 * Identifies the purpose of the naming system.
 */
export declare type NamingsystemTypeCodingType = {
    /**
     * codesystem: The naming system is used to define concepts and symbols to represent those concepts; e.g. UCUM, LOINC, NDC code, local lab codes, etc.
     */
    CodeSystem: CodingArgs;
    /**
     * identifier: The naming system is used to manage identifiers (e.g. license numbers, order numbers, etc.).
     */
    Identifier: CodingArgs;
    /**
     * root: The naming system is used as the root for other identifiers and naming systems.
     */
    Root: CodingArgs;
};
/**
 * Identifies the purpose of the naming system.
 */
export declare const NamingsystemTypeCodings: NamingsystemTypeCodingType;
//# sourceMappingURL=NamingsystemTypeCodings.d.ts.map