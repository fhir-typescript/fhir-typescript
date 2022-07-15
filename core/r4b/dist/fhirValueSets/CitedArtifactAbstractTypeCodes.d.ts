/**
 * Used to express the reason and specific aspect for the variant abstract, such as language and specific language.
 */
export declare const CitedArtifactAbstractTypeCodes: {
    /**
     * autotranslated: Machine translated form of abstract in a different language, language element codes the language into which it was translated by machine
     */
    readonly DifferentLanguageDerivedFromAutotranslation: "autotranslated";
    /**
     * different-publisher: Abstract produced by a different publisher than the cited artifact
     */
    readonly DifferentPublisherForAbstract: "different-publisher";
    /**
     * duplicate-pmid: Alternative form of abstract in two or more Medline entries
     */
    readonly DifferentTextInAdditionalMedlineEntry: "duplicate-pmid";
    /**
     * earlier-abstract: Alternative form of abstract in an earlier version such as epub ahead of print
     */
    readonly DifferentTextInAnEarlierVersion: "earlier-abstract";
    /**
     * language: Additional form of abstract in a different language
     */
    readonly DifferentLanguage: "language";
    /**
     * long-abstract: Long version of the abstract, for use when abstracts are provided in different sizes or lengths
     */
    readonly LongAbstract: "long-abstract";
    /**
     * plain-language: Additional form of abstract written for the general public
     */
    readonly PlainLanguage: "plain-language";
    /**
     * primary-human-use: Human-friendly main or official abstract
     */
    readonly PrimaryHumanUse: "primary-human-use";
    /**
     * primary-machine-use: Machine-friendly main or official abstract
     */
    readonly PrimaryMachineUse: "primary-machine-use";
    /**
     * short-abstract: Brief abstract, for use when abstracts are provided in different sizes or lengths
     */
    readonly ShortAbstract: "short-abstract";
    /**
     * truncated: Truncated abstract
     */
    readonly Truncated: "truncated";
};
/**
 * Used to express the reason and specific aspect for the variant abstract, such as language and specific language.
 */
export declare type CitedArtifactAbstractTypeCodeType = typeof CitedArtifactAbstractTypeCodes[keyof typeof CitedArtifactAbstractTypeCodes];
//# sourceMappingURL=CitedArtifactAbstractTypeCodes.d.ts.map