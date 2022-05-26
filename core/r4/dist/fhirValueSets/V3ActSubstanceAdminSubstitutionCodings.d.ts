import { CodingArgs } from '../fhir/Coding.js';
/**
 * No Description Provided
 */
export declare type V3ActSubstanceAdminSubstitutionCodingType = {
    /**
     * BC: Description:
     *
     *
     *                         Substitution occurred or is permitted between equivalent Brands but not Generics
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Zestril  for Prinivil
     *                            Coumadin for Jantoven
     */
    BrandComposition: CodingArgs;
    /**
     * E: Description: Substitution occurred or is permitted with another bioequivalent and therapeutically equivalent product.
     */
    Equivalent: CodingArgs;
    /**
     * EC: Description:
     *
     *
     *                         Substitution occurred or is permitted with another product that is a:
     *
     *
     *                            pharmaceutical alternative containing the same active ingredient but is formulated with different salt, ester
     *                            pharmaceutical equivalent that has the same active ingredient, strength, dosage form and route of administration
     *
     *
     *                            Examples:
     *
     *
     *
     *
     *                               Pharmaceutical alternative: Erythromycin Ethylsuccinate for Erythromycin Stearate
     *
     *                               Pharmaceutical equivalent: Lisonpril for Zestril
     */
    EquivalentComposition: CodingArgs;
    /**
     * F: Description: This substitution was performed or is permitted based on formulary guidelines.
     */
    Formulary: CodingArgs;
    /**
     * G: Description: Substitution occurred or is permitted between equivalent Generics but not Brands
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Lisnopril (Lupin Corp) for Lisnopril (Wockhardt Corp)
     */
    GenericComposition: CodingArgs;
    /**
     * N: No substitution occurred or is permitted.
     */
    None: CodingArgs;
    /**
     * TB: Description: Substitution occurred or is permitted between therapeutically equivalent Brands but not Generics
     * &gt;
     *                            Examples:
     *
     *
     *
     *                            Zantac for Tagamet
     */
    TherapeuticBrand: CodingArgs;
    /**
     * TE: Description: Substitution occurred or is permitted with another product having the same therapeutic objective and safety profile.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            ranitidine for Tagamet
     */
    TherapeuticAlternative: CodingArgs;
    /**
     * TG: Description: Substitution occurred or is permitted between therapeutically equivalent Generics but not Brands
     * &gt;
     *                            Examples:
     *
     *
     *
     *                            Ranitidine  for cimetidine
     */
    TherapeuticGeneric: CodingArgs;
};
/**
 * No Description Provided
 */
export declare const V3ActSubstanceAdminSubstitutionCodings: V3ActSubstanceAdminSubstitutionCodingType;
//# sourceMappingURL=V3ActSubstanceAdminSubstitutionCodings.d.ts.map