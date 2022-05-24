import { CodingArgs } from '../fhir/Coding.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the administrative routes used during vaccination. This value set is provided as a suggestive example.
 */
export declare type ImmunizationRouteCodingType = {
    /**
     * IDINJ: Injection, intradermal
     */
    InjectionIntradermal: CodingArgs;
    /**
     * IM: Injection, intramuscular
     */
    InjectionIntramuscular: CodingArgs;
    /**
     * IVINJ: Injection, intravenous
     */
    InjectionIntravenous: CodingArgs;
    /**
     * NASINHLC: Inhalation, nasal, prongs
     */
    InhalationNasalCannula: CodingArgs;
    /**
     * PO: Swallow, oral
     */
    SwallowOral: CodingArgs;
    /**
     * SQ: Injection, subcutaneous
     */
    InjectionSubcutaneous: CodingArgs;
    /**
     * TRNSDERM: Transdermal
     */
    Transdermal: CodingArgs;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the administrative routes used during vaccination. This value set is provided as a suggestive example.
 */
export declare const ImmunizationRouteCodings: ImmunizationRouteCodingType;
//# sourceMappingURL=ImmunizationRouteCodings.d.ts.map