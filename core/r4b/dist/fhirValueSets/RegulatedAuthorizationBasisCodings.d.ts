import { CodingArgs } from '../fhir/Coding.js';
/**
 * A legal or regulatory framework against which an authorization is granted, or other reasons for it.
 */
export declare type RegulatedAuthorizationBasisCodingType = {
    /**
     * Code: Bibliographical
     */
    BibliographicalApplicationStandAlone: CodingArgs;
    /**
     * Code: Full
     */
    FullApplication: CodingArgs;
    /**
     * Code: KnownHumanBlood
     */
    KnownHumanBloodPlasmaDerivedAncillaryMedicinalSubstance: CodingArgs;
    /**
     * Code: KnownSubstance
     */
    KnownActiveSubstance: CodingArgs;
    /**
     * Code: NewSubstance
     */
    NewActiveSubstance: CodingArgs;
    /**
     * Code: ParallelTrade
     */
    ParallelTradedProducts: CodingArgs;
    /**
     * Code: SimilarBiological
     */
    SimilarBiologicalApplication: CodingArgs;
    /**
     * Code: TemporaryUse
     */
    AuthorisationsForTemporaryUse: CodingArgs;
    /**
     * Code: TraditionalUse
     */
    TraditionalUseRegistrationForHerbalMedicinalProductApplication: CodingArgs;
    /**
     * Code: Well-establishedUse
     */
    WellEstablishedUseApplication: CodingArgs;
};
/**
 * A legal or regulatory framework against which an authorization is granted, or other reasons for it.
 */
export declare const RegulatedAuthorizationBasisCodings: RegulatedAuthorizationBasisCodingType;
//# sourceMappingURL=RegulatedAuthorizationBasisCodings.d.ts.map