/**
 * The possible types of research elements (E.g. Population, Exposure, Outcome).
 */
export declare const ResearchElementTypeCodes: {
    /**
     * exposure: The element defines an exposure within the population that is being researched.
     */
    readonly Exposure: "exposure";
    /**
     * outcome: The element defines an outcome within the population that is being researched.
     */
    readonly Outcome: "outcome";
    /**
     * population: The element defines the population that forms the basis for research.
     */
    readonly Population: "population";
};
/**
 * The possible types of research elements (E.g. Population, Exposure, Outcome).
 */
export declare type ResearchElementTypeCodeType = typeof ResearchElementTypeCodes[keyof typeof ResearchElementTypeCodes];
//# sourceMappingURL=ResearchElementTypeCodes.d.ts.map