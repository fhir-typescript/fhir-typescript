/**
 * A legal or regulatory framework against which an authorization is granted, or other reasons for it.
 */
export declare const RegulatedAuthorizationBasisCodes: {
    /**
     * Code: Bibliographical
     */
    readonly BibliographicalApplicationStandAlone: "Bibliographical";
    /**
     * Code: Full
     */
    readonly FullApplication: "Full";
    /**
     * Code: KnownHumanBlood
     */
    readonly KnownHumanBloodPlasmaDerivedAncillaryMedicinalSubstance: "KnownHumanBlood";
    /**
     * Code: KnownSubstance
     */
    readonly KnownActiveSubstance: "KnownSubstance";
    /**
     * Code: NewSubstance
     */
    readonly NewActiveSubstance: "NewSubstance";
    /**
     * Code: ParallelTrade
     */
    readonly ParallelTradedProducts: "ParallelTrade";
    /**
     * Code: SimilarBiological
     */
    readonly SimilarBiologicalApplication: "SimilarBiological";
    /**
     * Code: TemporaryUse
     */
    readonly AuthorisationsForTemporaryUse: "TemporaryUse";
    /**
     * Code: TraditionalUse
     */
    readonly TraditionalUseRegistrationForHerbalMedicinalProductApplication: "TraditionalUse";
    /**
     * Code: Well-establishedUse
     */
    readonly WellEstablishedUseApplication: "Well-establishedUse";
};
/**
 * A legal or regulatory framework against which an authorization is granted, or other reasons for it.
 */
export declare type RegulatedAuthorizationBasisCodeType = typeof RegulatedAuthorizationBasisCodes[keyof typeof RegulatedAuthorizationBasisCodes];
//# sourceMappingURL=RegulatedAuthorizationBasisCodes.d.ts.map