/**
 * The format for display of the citation.
 */
export declare const CitationSummaryStyleCodes: {
    /**
     * acs: Chemistry.
     */
    readonly AmericanChemicalSociety: "acs";
    /**
     * ama11: Medicine.
     */
    readonly AmericanMedicalAssociation11thEdition: "ama11";
    /**
     * apa6: APA 6th edition used by Education, Psychology and Sciences.
     */
    readonly AmericanPsychologicalAssociation6thEdition: "apa6";
    /**
     * apa7: APA 7th edition (October 2019) used by Education, Psychology and Sciences.
     */
    readonly AmericanPsychologicalAssociation7thEdition: "apa7";
    /**
     * asa6: Sociology.
     */
    readonly AmericanSociologicalAssociation6thEdition: "asa6";
    /**
     * chicago-a-17: Used by Business, History and the Fine Arts.
     */
    readonly ChicagoStyleVersion17AuthorDate: "chicago-a-17";
    /**
     * chicago-b-17: Used by Business, History and the Fine Arts.
     */
    readonly ChicagoStyleVersion17FullNote: "chicago-b-17";
    /**
     * cochrane: Used by Cochrane reviews, example: Huang, M, Tang T, Pang, P, Li, M, Ma R, Lu, J, et al. Treating COVID-19 with Chloroquine. J Mol Cell Biol 2020; 12(4):322–5.
     */
    readonly CochraneStyle: "cochrane";
    /**
     * comppub: Citation style to report human-readable and/or machine-readable access paths, example: Alper BS, Dehnbostel J, Shahin K. 14-day mortality remdesivir vs placebo meta-analysis (ACTT-1, Wang et al, WHO SOLIDARITY).  Fast Evidence Interoperability Resources (FEvIR) Platform, entry 55, version 4. Created 2020 Dec 17. Revised 2020 Dec 21. Accessed 2021 Mar 13. Computable resource at: https://fevir.net/resources/Evidence/55.
     */
    readonly ComputablePublishing: "comppub";
    /**
     * elsevier-harvard: Biology ecology.
     */
    readonly ElsevierHarvardStyle: "elsevier-harvard";
    /**
     * ieee: IT, Engineering.
     */
    readonly InstituteOfElectricalAndElectronicsEngineers: "ieee";
    /**
     * mla8: MLA 8th edition used by the Humanities.
     */
    readonly ModernLanguageAssociation8thEdition: "mla8";
    /**
     * nature: Biology.
     */
    readonly NatureReferencingStyle: "nature";
    /**
     * vancouver: Citation style used by International Committee of Medical Journal Editors and maintained by US National Library of Medicine.
     */
    readonly VancouverStyle: "vancouver";
};
/**
 * The format for display of the citation.
 */
export declare type CitationSummaryStyleCodeType = typeof CitationSummaryStyleCodes[keyof typeof CitationSummaryStyleCodes];
//# sourceMappingURL=CitationSummaryStyleCodes.d.ts.map