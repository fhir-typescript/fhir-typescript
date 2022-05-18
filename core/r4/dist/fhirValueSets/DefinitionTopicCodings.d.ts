import { Coding } from '../fhir/Coding.js';
/**
 * High-level categorization of the definition, used for searching, sorting, and filtering.
 */
export declare const DefinitionTopicCodings: {
    /**
     * assessment: The definition is related to assessment of the patient.
     */
    readonly Assessment: Coding;
    /**
     * education: The definition is related to education of the patient.
     */
    readonly Education: Coding;
    /**
     * treatment: The definition is related to treatment of the patient.
     */
    readonly Treatment: Coding;
};
/**
 * High-level categorization of the definition, used for searching, sorting, and filtering.
 */
export declare type DefinitionTopicCodingType = typeof DefinitionTopicCodings;
//# sourceMappingURL=DefinitionTopicCodings.d.ts.map