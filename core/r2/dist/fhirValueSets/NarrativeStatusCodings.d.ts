import { CodingArgs } from '../fhir/Coding.js';
/**
 * The status of a resource narrative
 */
export declare type NarrativeStatusCodingType = {
    /**
     * additional: The contents of the narrative contain additional information not found in the structured data
     */
    Additional: CodingArgs;
    /**
     * empty: The contents of the narrative are some equivalent of "No human-readable text provided in this case"
     */
    Empty: CodingArgs;
    /**
     * extensions: The contents of the narrative are entirely generated from the structured data in the content and some of the content is generated from extensions
     */
    Extensions: CodingArgs;
    /**
     * generated: The contents of the narrative are entirely generated from the structured data in the content.
     */
    Generated: CodingArgs;
};
/**
 * The status of a resource narrative
 */
export declare const NarrativeStatusCodings: NarrativeStatusCodingType;
//# sourceMappingURL=NarrativeStatusCodings.d.ts.map