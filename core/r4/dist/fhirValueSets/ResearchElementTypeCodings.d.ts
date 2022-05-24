import { CodingArgs } from '../fhir/Coding.js';
/**
 * The possible types of research elements (E.g. Population, Exposure, Outcome).
 */
export declare type ResearchElementTypeCodingType = {
    /**
     * exposure: The element defines an exposure within the population that is being researched.
     */
    Exposure: CodingArgs;
    /**
     * outcome: The element defines an outcome within the population that is being researched.
     */
    Outcome: CodingArgs;
    /**
     * population: The element defines the population that forms the basis for research.
     */
    Population: CodingArgs;
};
/**
 * The possible types of research elements (E.g. Population, Exposure, Outcome).
 */
export declare const ResearchElementTypeCodings: ResearchElementTypeCodingType;
//# sourceMappingURL=ResearchElementTypeCodings.d.ts.map