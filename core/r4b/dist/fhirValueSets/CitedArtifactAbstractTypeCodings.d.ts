import { CodingArgs } from '../fhir/Coding.js';
/**
 * Used to express the reason and specific aspect for the variant abstract, such as language and specific language.
 */
export declare type CitedArtifactAbstractTypeCodingType = {
    /**
     * autotranslated: Machine translated form of abstract in a different language, language element codes the language into which it was translated by machine
     */
    DifferentLanguageDerivedFromAutotranslation: CodingArgs;
    /**
     * different-publisher: Abstract produced by a different publisher than the cited artifact
     */
    DifferentPublisherForAbstract: CodingArgs;
    /**
     * duplicate-pmid: Alternative form of abstract in two or more Medline entries
     */
    DifferentTextInAdditionalMedlineEntry: CodingArgs;
    /**
     * earlier-abstract: Alternative form of abstract in an earlier version such as epub ahead of print
     */
    DifferentTextInAnEarlierVersion: CodingArgs;
    /**
     * language: Additional form of abstract in a different language
     */
    DifferentLanguage: CodingArgs;
    /**
     * long-abstract: Long version of the abstract, for use when abstracts are provided in different sizes or lengths
     */
    LongAbstract: CodingArgs;
    /**
     * plain-language: Additional form of abstract written for the general public
     */
    PlainLanguage: CodingArgs;
    /**
     * primary-human-use: Human-friendly main or official abstract
     */
    PrimaryHumanUse: CodingArgs;
    /**
     * primary-machine-use: Machine-friendly main or official abstract
     */
    PrimaryMachineUse: CodingArgs;
    /**
     * short-abstract: Brief abstract, for use when abstracts are provided in different sizes or lengths
     */
    ShortAbstract: CodingArgs;
    /**
     * truncated: Truncated abstract
     */
    Truncated: CodingArgs;
};
/**
 * Used to express the reason and specific aspect for the variant abstract, such as language and specific language.
 */
export declare const CitedArtifactAbstractTypeCodings: CitedArtifactAbstractTypeCodingType;
//# sourceMappingURL=CitedArtifactAbstractTypeCodings.d.ts.map