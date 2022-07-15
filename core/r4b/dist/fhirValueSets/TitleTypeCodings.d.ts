import { CodingArgs } from '../fhir/Coding.js';
/**
 * Used to express the reason and specific aspect for the variant title, such as language and specific language.
 */
export declare type TitleTypeCodingType = {
    /**
     * acronym: Abbreviation used as title
     */
    Acronym: CodingArgs;
    /**
     * autotranslated: Machine translated form of title in a different language, language element codes the language into which it was translated by machine.
     */
    DifferentLanguageDerivedFromAutotranslation: CodingArgs;
    /**
     * duplicate-uid: An alternative form of the title in two or more entries, e.g. in multiple medline entries
     */
    DifferentTextForTheSameObjectWithADifferentIdentifier: CodingArgs;
    /**
     * earlier-title: Alternative form of title in an earlier version such as epub ahead of print.
     */
    DifferentTextInAnEarlierVersion: CodingArgs;
    /**
     * human-use: Human-friendly title
     */
    HumanUse: CodingArgs;
    /**
     * language: Additional form of title in a different language.
     */
    DifferentLanguage: CodingArgs;
    /**
     * machine-use: Machine-friendly title
     */
    MachineUse: CodingArgs;
    /**
     * official: The official or authoritative title.
     */
    OfficialTitle: CodingArgs;
    /**
     * plain-language: Title using language common to lay public discourse.
     */
    PlainLanguageTitle: CodingArgs;
    /**
     * primary: Main title for common use. The primary title used for representation if multiple titles exist.
     */
    PrimaryTitle: CodingArgs;
    /**
     * scientific: Title using scientific terminology.
     */
    ScientificTitle: CodingArgs;
    /**
     * short-title: Brief title (e.g. 'running title' or title used in page headers)
     */
    ShortTitle: CodingArgs;
    /**
     * subtitle: Subtitle or secondary title.
     */
    Subtitle: CodingArgs;
};
/**
 * Used to express the reason and specific aspect for the variant title, such as language and specific language.
 */
export declare const TitleTypeCodings: TitleTypeCodingType;
//# sourceMappingURL=TitleTypeCodings.d.ts.map