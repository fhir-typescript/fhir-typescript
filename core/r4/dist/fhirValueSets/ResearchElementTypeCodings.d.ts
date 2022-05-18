import { Coding } from '../fhir/Coding.js';
/**
 * The possible types of research elements (E.g. Population, Exposure, Outcome).
 */
export declare const ResearchElementTypeCodings: {
    /**
     * exposure: The element defines an exposure within the population that is being researched.
     */
    readonly Exposure: Coding;
    /**
     * outcome: The element defines an outcome within the population that is being researched.
     */
    readonly Outcome: Coding;
    /**
     * population: The element defines the population that forms the basis for research.
     */
    readonly Population: Coding;
};
/**
 * The possible types of research elements (E.g. Population, Exposure, Outcome).
 */
export declare type ResearchElementTypeCodingType = typeof ResearchElementTypeCodings;
//# sourceMappingURL=ResearchElementTypeCodings.d.ts.map