// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/substance-category|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Substance category codes
 */
export type SubstanceCategoryCodingType = {
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
}

/**
 * Substance category codes
 */
export const SubstanceCategoryCodings:SubstanceCategoryCodingType = {
  /**
   * allergen: A substance that causes an allergic reaction.
   */
  Allergen: {
    display: "Allergen",
    code: "allergen",
    system: "http://hl7.org/fhir/substance-category",
  },
  /**
   * biological: A substance that is produced by or extracted from a biological source.
   */
  BiologicalSubstance: {
    display: "Biological Substance",
    code: "biological",
    system: "http://hl7.org/fhir/substance-category",
  },
  /**
   * body: A substance that comes directly from a human or an animal (e.g. blood, urine, feces, tears, etc.).
   */
  BodySubstance: {
    display: "Body Substance",
    code: "body",
    system: "http://hl7.org/fhir/substance-category",
  },
  /**
   * chemical: Any organic or inorganic substance of a particular molecular identity, including -- (i) any combination of such substances occurring in whole or in part as a result of a chemical reaction or occurring in nature and (ii) any element or uncombined radical (http://www.epa.gov/opptintr/import-export/pubs/importguide.pdf).
   */
  Chemical: {
    display: "Chemical",
    code: "chemical",
    system: "http://hl7.org/fhir/substance-category",
  },
  /**
   * drug: A substance intended for use in the diagnosis, cure, mitigation, treatment, or prevention of disease in man or other animals (Federal Food Drug and Cosmetic Act).
   */
  DrugOrMedicament: {
    display: "Drug or Medicament",
    code: "drug",
    system: "http://hl7.org/fhir/substance-category",
  },
  /**
   * food: A food, dietary ingredient, or dietary supplement for human or animal.
   */
  DietarySubstance: {
    display: "Dietary Substance",
    code: "food",
    system: "http://hl7.org/fhir/substance-category",
  },
  /**
   * material: A finished product which is not normally ingested, absorbed or injected (e.g. steel, iron, wood, plastic and paper).
   */
  Material: {
    display: "Material",
    code: "material",
    system: "http://hl7.org/fhir/substance-category",
  },
} as const;
