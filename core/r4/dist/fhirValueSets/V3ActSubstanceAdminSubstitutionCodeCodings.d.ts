import { Coding } from '../fhir/Coding.js';
/**
 * No Description Provided
 */
export declare const V3ActSubstanceAdminSubstitutionCodeCodings: {
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
    readonly BrandComposition: Coding;
    /**
     * E: Description: Substitution occurred or is permitted with another bioequivalent and therapeutically equivalent product.
     */
    readonly Equivalent: Coding;
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
    readonly EquivalentComposition: Coding;
    /**
     * F: Description: This substitution was performed or is permitted based on formulary guidelines.
     */
    readonly Formulary: Coding;
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
    readonly GenericComposition: Coding;
    /**
     * N: No substitution occurred or is permitted.
     */
    readonly None: Coding;
    /**
     * TB: Description: Substitution occurred or is permitted between therapeutically equivalent Brands but not Generics
     * &gt;
     *                            Examples:
     *
     *
     *
     *                            Zantac for Tagamet
     */
    readonly TherapeuticBrand: Coding;
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
    readonly TherapeuticAlternative: Coding;
    /**
     * TG: Description: Substitution occurred or is permitted between therapeutically equivalent Generics but not Brands
     * &gt;
     *                            Examples:
     *
     *
     *
     *                            Ranitidine  for cimetidine
     */
    readonly TherapeuticGeneric: Coding;
};
/**
 * No Description Provided
 */
export declare type V3ActSubstanceAdminSubstitutionCodeCodingType = typeof V3ActSubstanceAdminSubstitutionCodeCodings;
//# sourceMappingURL=V3ActSubstanceAdminSubstitutionCodeCodings.d.ts.map