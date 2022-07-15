import { CodingArgs } from '../fhir/Coding.js';
/**
 * To describe the reason for the variant citation, such as version number or subpart specification.
 */
export declare type CitedArtifactPartTypeCodingType = {
    /**
     * article-set: Used to distinguish an individual article within an article set where the article set is a base citation.
     */
    PartOfAnArticleSet: CodingArgs;
    /**
     * figures: Denotes specific figure or figures of an article or artifact.
     */
    Figures: CodingArgs;
    /**
     * lines: Denotes specific line or lines of an article or artifact.
     */
    Lines: CodingArgs;
    /**
     * pages: Denotes specific page or pages of an article or artifact.
     */
    Pages: CodingArgs;
    /**
     * paragraphs: Denotes specific paragraph or paragraphs of an article or artifact.
     */
    Paragraphs: CodingArgs;
    /**
     * sections: Denotes specific section or sections of an article or artifact.
     */
    Sections: CodingArgs;
    /**
     * supplement: Used to denote a supplementary file, appendix, or additional part that is not a subpart of the primary article.
     */
    SupplementOrAppendix: CodingArgs;
    /**
     * supplement-subpart: Used to denote a subpart within a supplementary file or appendix.
     */
    SupplementOrAppendixSubpart: CodingArgs;
    /**
     * tables: Denotes specific table or tables of an article or artifact.
     */
    Tables: CodingArgs;
};
/**
 * To describe the reason for the variant citation, such as version number or subpart specification.
 */
export declare const CitedArtifactPartTypeCodings: CitedArtifactPartTypeCodingType;
//# sourceMappingURL=CitedArtifactPartTypeCodings.d.ts.map