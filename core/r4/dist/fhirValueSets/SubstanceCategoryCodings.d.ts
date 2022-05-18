import { Coding } from '../fhir/Coding.js';
/**
 * Substance category codes
 */
export declare const SubstanceCategoryCodings: {
    /**
     * allergen: A substance that causes an allergic reaction.
     */
    readonly Allergen: Coding;
    /**
     * biological: A substance that is produced by or extracted from a biological source.
     */
    readonly BiologicalSubstance: Coding;
    /**
     * body: A substance that comes directly from a human or an animal (e.g. blood, urine, feces, tears, etc.).
     */
    readonly BodySubstance: Coding;
    /**
     * chemical: Any organic or inorganic substance of a particular molecular identity, including -- (i) any combination of such substances occurring in whole or in part as a result of a chemical reaction or occurring in nature and (ii) any element or uncombined radical (http://www.epa.gov/opptintr/import-export/pubs/importguide.pdf).
     */
    readonly Chemical: Coding;
    /**
     * drug: A substance intended for use in the diagnosis, cure, mitigation, treatment, or prevention of disease in man or other animals (Federal Food Drug and Cosmetic Act).
     */
    readonly DrugOrMedicament: Coding;
    /**
     * food: A food, dietary ingredient, or dietary supplement for human or animal.
     */
    readonly DietarySubstance: Coding;
    /**
     * material: A finished product which is not normally ingested, absorbed or injected (e.g. steel, iron, wood, plastic and paper).
     */
    readonly Material: Coding;
};
/**
 * Substance category codes
 */
export declare type SubstanceCategoryCodingType = typeof SubstanceCategoryCodings;
//# sourceMappingURL=SubstanceCategoryCodings.d.ts.map