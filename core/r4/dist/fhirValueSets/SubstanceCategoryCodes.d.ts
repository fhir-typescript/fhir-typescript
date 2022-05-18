/**
 * Substance category codes
 */
export declare const SubstanceCategoryCodes: {
    /**
     * allergen: A substance that causes an allergic reaction.
     */
    readonly Allergen: "allergen";
    /**
     * biological: A substance that is produced by or extracted from a biological source.
     */
    readonly BiologicalSubstance: "biological";
    /**
     * body: A substance that comes directly from a human or an animal (e.g. blood, urine, feces, tears, etc.).
     */
    readonly BodySubstance: "body";
    /**
     * chemical: Any organic or inorganic substance of a particular molecular identity, including -- (i) any combination of such substances occurring in whole or in part as a result of a chemical reaction or occurring in nature and (ii) any element or uncombined radical (http://www.epa.gov/opptintr/import-export/pubs/importguide.pdf).
     */
    readonly Chemical: "chemical";
    /**
     * drug: A substance intended for use in the diagnosis, cure, mitigation, treatment, or prevention of disease in man or other animals (Federal Food Drug and Cosmetic Act).
     */
    readonly DrugOrMedicament: "drug";
    /**
     * food: A food, dietary ingredient, or dietary supplement for human or animal.
     */
    readonly DietarySubstance: "food";
    /**
     * material: A finished product which is not normally ingested, absorbed or injected (e.g. steel, iron, wood, plastic and paper).
     */
    readonly Material: "material";
};
/**
 * Substance category codes
 */
export declare type SubstanceCategoryCodeType = typeof SubstanceCategoryCodes[keyof typeof SubstanceCategoryCodes];
//# sourceMappingURL=SubstanceCategoryCodes.d.ts.map