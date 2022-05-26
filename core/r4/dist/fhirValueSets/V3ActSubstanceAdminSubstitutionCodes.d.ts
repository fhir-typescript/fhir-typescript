/**
 * No Description Provided
 */
export declare const V3ActSubstanceAdminSubstitutionCodes: {
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
    readonly BrandComposition: "BC";
    /**
     * E: Description: Substitution occurred or is permitted with another bioequivalent and therapeutically equivalent product.
     */
    readonly Equivalent: "E";
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
    readonly EquivalentComposition: "EC";
    /**
     * F: Description: This substitution was performed or is permitted based on formulary guidelines.
     */
    readonly Formulary: "F";
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
    readonly GenericComposition: "G";
    /**
     * N: No substitution occurred or is permitted.
     */
    readonly None: "N";
    /**
     * TB: Description: Substitution occurred or is permitted between therapeutically equivalent Brands but not Generics
     * &gt;
     *                            Examples:
     *
     *
     *
     *                            Zantac for Tagamet
     */
    readonly TherapeuticBrand: "TB";
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
    readonly TherapeuticAlternative: "TE";
    /**
     * TG: Description: Substitution occurred or is permitted between therapeutically equivalent Generics but not Brands
     * &gt;
     *                            Examples:
     *
     *
     *
     *                            Ranitidine  for cimetidine
     */
    readonly TherapeuticGeneric: "TG";
};
/**
 * No Description Provided
 */
export declare type V3ActSubstanceAdminSubstitutionCodeType = typeof V3ActSubstanceAdminSubstitutionCodes[keyof typeof V3ActSubstanceAdminSubstitutionCodes];
//# sourceMappingURL=V3ActSubstanceAdminSubstitutionCodes.d.ts.map