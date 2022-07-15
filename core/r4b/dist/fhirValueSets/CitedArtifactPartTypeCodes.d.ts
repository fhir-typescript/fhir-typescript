/**
 * To describe the reason for the variant citation, such as version number or subpart specification.
 */
export declare const CitedArtifactPartTypeCodes: {
    /**
     * article-set: Used to distinguish an individual article within an article set where the article set is a base citation.
     */
    readonly PartOfAnArticleSet: "article-set";
    /**
     * figures: Denotes specific figure or figures of an article or artifact.
     */
    readonly Figures: "figures";
    /**
     * lines: Denotes specific line or lines of an article or artifact.
     */
    readonly Lines: "lines";
    /**
     * pages: Denotes specific page or pages of an article or artifact.
     */
    readonly Pages: "pages";
    /**
     * paragraphs: Denotes specific paragraph or paragraphs of an article or artifact.
     */
    readonly Paragraphs: "paragraphs";
    /**
     * sections: Denotes specific section or sections of an article or artifact.
     */
    readonly Sections: "sections";
    /**
     * supplement: Used to denote a supplementary file, appendix, or additional part that is not a subpart of the primary article.
     */
    readonly SupplementOrAppendix: "supplement";
    /**
     * supplement-subpart: Used to denote a subpart within a supplementary file or appendix.
     */
    readonly SupplementOrAppendixSubpart: "supplement-subpart";
    /**
     * tables: Denotes specific table or tables of an article or artifact.
     */
    readonly Tables: "tables";
};
/**
 * To describe the reason for the variant citation, such as version number or subpart specification.
 */
export declare type CitedArtifactPartTypeCodeType = typeof CitedArtifactPartTypeCodes[keyof typeof CitedArtifactPartTypeCodes];
//# sourceMappingURL=CitedArtifactPartTypeCodes.d.ts.map