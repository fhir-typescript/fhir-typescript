import { CodingArgs } from '../fhir/Coding.js';
/**
 * Substance category codes
 */
export declare type SubstanceCategoryCodingType = {
    /**
     * allergen: A substance that causes an allergic reaction.
     */
    Allergen: CodingArgs;
    /**
     * biological: A substance that is produced by or extracted from a biological source.
     */
    BiologicalSubstance: CodingArgs;
    /**
     * body: A substance that comes directly from a human or an animal (e.g. blood, urine, feces, tears, etc.).
     */
    BodySubstance: CodingArgs;
    /**
     * chemical: Any organic or inorganic substance of a particular molecular identity, including -- (i) any combination of such substances occurring in whole or in part as a result of a chemical reaction or occurring in nature and (ii) any element or uncombined radical (http://www.epa.gov/opptintr/import-export/pubs/importguide.pdf).
     */
    Chemical: CodingArgs;
    /**
     * drug: A substance intended for use in the diagnosis, cure, mitigation, treatment, or prevention of disease in man or other animals (Federal Food Drug and Cosmetic Act).
     */
    DrugOrMedicament: CodingArgs;
    /**
     * food: A food, dietary ingredient, or dietary supplement for human or animal.
     */
    DietarySubstance: CodingArgs;
    /**
     * material: A finished product which is not normally ingested, absorbed or injected (e.g. steel, iron, wood, plastic and paper).
     */
    Material: CodingArgs;
};
/**
 * Substance category codes
 */
export declare const SubstanceCategoryCodings: SubstanceCategoryCodingType;
//# sourceMappingURL=SubstanceCategoryCodings.d.ts.map