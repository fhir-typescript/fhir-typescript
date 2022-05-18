/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * Substance category codes
 */
var SubstanceCategoryCodings = {
    /**
     * allergen: A substance that causes an allergic reaction.
     */
    Allergen: new Coding({
        display: "Allergen",
        code: "allergen",
        system: "http://terminology.hl7.org/CodeSystem/substance-category",
    }),
    /**
     * biological: A substance that is produced by or extracted from a biological source.
     */
    BiologicalSubstance: new Coding({
        display: "Biological Substance",
        code: "biological",
        system: "http://terminology.hl7.org/CodeSystem/substance-category",
    }),
    /**
     * body: A substance that comes directly from a human or an animal (e.g. blood, urine, feces, tears, etc.).
     */
    BodySubstance: new Coding({
        display: "Body Substance",
        code: "body",
        system: "http://terminology.hl7.org/CodeSystem/substance-category",
    }),
    /**
     * chemical: Any organic or inorganic substance of a particular molecular identity, including -- (i) any combination of such substances occurring in whole or in part as a result of a chemical reaction or occurring in nature and (ii) any element or uncombined radical (http://www.epa.gov/opptintr/import-export/pubs/importguide.pdf).
     */
    Chemical: new Coding({
        display: "Chemical",
        code: "chemical",
        system: "http://terminology.hl7.org/CodeSystem/substance-category",
    }),
    /**
     * drug: A substance intended for use in the diagnosis, cure, mitigation, treatment, or prevention of disease in man or other animals (Federal Food Drug and Cosmetic Act).
     */
    DrugOrMedicament: new Coding({
        display: "Drug or Medicament",
        code: "drug",
        system: "http://terminology.hl7.org/CodeSystem/substance-category",
    }),
    /**
     * food: A food, dietary ingredient, or dietary supplement for human or animal.
     */
    DietarySubstance: new Coding({
        display: "Dietary Substance",
        code: "food",
        system: "http://terminology.hl7.org/CodeSystem/substance-category",
    }),
    /**
     * material: A finished product which is not normally ingested, absorbed or injected (e.g. steel, iron, wood, plastic and paper).
     */
    Material: new Coding({
        display: "Material",
        code: "material",
        system: "http://terminology.hl7.org/CodeSystem/substance-category",
    }),
};

export { SubstanceCategoryCodings };
//# sourceMappingURL=SubstanceCategoryCodings.js.map
