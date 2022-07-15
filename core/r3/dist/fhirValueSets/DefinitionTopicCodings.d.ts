import { CodingArgs } from '../fhir/Coding.js';
/**
 * High-level categorization of the definition, used for searching, sorting, and filtering
 */
export declare type DefinitionTopicCodingType = {
    /**
     * assessment: The definition is related to assessment of the patient
     */
    Assessment: CodingArgs;
    /**
     * education: The definition is related to education of the patient
     */
    Education: CodingArgs;
    /**
     * treatment: The definition is related to treatment of the patient
     */
    Treatment: CodingArgs;
};
/**
 * High-level categorization of the definition, used for searching, sorting, and filtering
 */
export declare const DefinitionTopicCodings: DefinitionTopicCodingType;
//# sourceMappingURL=DefinitionTopicCodings.d.ts.map