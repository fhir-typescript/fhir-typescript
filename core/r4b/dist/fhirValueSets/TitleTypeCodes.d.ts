/**
 * Used to express the reason and specific aspect for the variant title, such as language and specific language.
 */
export declare const TitleTypeCodes: {
    /**
     * acronym: Abbreviation used as title
     */
    readonly Acronym: "acronym";
    /**
     * autotranslated: Machine translated form of title in a different language, language element codes the language into which it was translated by machine.
     */
    readonly DifferentLanguageDerivedFromAutotranslation: "autotranslated";
    /**
     * duplicate-uid: An alternative form of the title in two or more entries, e.g. in multiple medline entries
     */
    readonly DifferentTextForTheSameObjectWithADifferentIdentifier: "duplicate-uid";
    /**
     * earlier-title: Alternative form of title in an earlier version such as epub ahead of print.
     */
    readonly DifferentTextInAnEarlierVersion: "earlier-title";
    /**
     * human-use: Human-friendly title
     */
    readonly HumanUse: "human-use";
    /**
     * language: Additional form of title in a different language.
     */
    readonly DifferentLanguage: "language";
    /**
     * machine-use: Machine-friendly title
     */
    readonly MachineUse: "machine-use";
    /**
     * official: The official or authoritative title.
     */
    readonly OfficialTitle: "official";
    /**
     * plain-language: Title using language common to lay public discourse.
     */
    readonly PlainLanguageTitle: "plain-language";
    /**
     * primary: Main title for common use. The primary title used for representation if multiple titles exist.
     */
    readonly PrimaryTitle: "primary";
    /**
     * scientific: Title using scientific terminology.
     */
    readonly ScientificTitle: "scientific";
    /**
     * short-title: Brief title (e.g. 'running title' or title used in page headers)
     */
    readonly ShortTitle: "short-title";
    /**
     * subtitle: Subtitle or secondary title.
     */
    readonly Subtitle: "subtitle";
};
/**
 * Used to express the reason and specific aspect for the variant title, such as language and specific language.
 */
export declare type TitleTypeCodeType = typeof TitleTypeCodes[keyof typeof TitleTypeCodes];
//# sourceMappingURL=TitleTypeCodes.d.ts.map