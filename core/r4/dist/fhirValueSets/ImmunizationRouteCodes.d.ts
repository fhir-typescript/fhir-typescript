/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the administrative routes used during vaccination. This value set is provided as a suggestive example.
 */
export declare const ImmunizationRouteCodes: {
    /**
     * IDINJ: Injection, intradermal
     */
    readonly InjectionIntradermal: "IDINJ";
    /**
     * IM: Injection, intramuscular
     */
    readonly InjectionIntramuscular: "IM";
    /**
     * IVINJ: Injection, intravenous
     */
    readonly InjectionIntravenous: "IVINJ";
    /**
     * NASINHLC: Inhalation, nasal, prongs
     */
    readonly InhalationNasalCannula: "NASINHLC";
    /**
     * PO: Swallow, oral
     */
    readonly SwallowOral: "PO";
    /**
     * SQ: Injection, subcutaneous
     */
    readonly InjectionSubcutaneous: "SQ";
    /**
     * TRNSDERM: Transdermal
     */
    readonly Transdermal: "TRNSDERM";
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the administrative routes used during vaccination. This value set is provided as a suggestive example.
 */
export declare type ImmunizationRouteCodeType = typeof ImmunizationRouteCodes[keyof typeof ImmunizationRouteCodes];
//# sourceMappingURL=ImmunizationRouteCodes.d.ts.map