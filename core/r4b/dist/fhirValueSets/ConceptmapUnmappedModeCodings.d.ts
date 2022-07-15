import { CodingArgs } from '../fhir/Coding.js';
/**
 * Defines which action to take if there is no match in the group.
 */
export declare type ConceptmapUnmappedModeCodingType = {
    /**
     * fixed: Use the code explicitly provided in the group.unmapped.
     */
    FixedCode: CodingArgs;
    /**
     * other-map: Use the map identified by the canonical URL in the url element.
     */
    OtherMap: CodingArgs;
    /**
     * provided: Use the code as provided in the $translate request.
     */
    ProvidedCode: CodingArgs;
};
/**
 * Defines which action to take if there is no match in the group.
 */
export declare const ConceptmapUnmappedModeCodings: ConceptmapUnmappedModeCodingType;
//# sourceMappingURL=ConceptmapUnmappedModeCodings.d.ts.map