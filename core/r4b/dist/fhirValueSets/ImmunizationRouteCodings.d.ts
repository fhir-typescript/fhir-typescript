import { CodingArgs } from '../fhir/Coding.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the administrative routes used during vaccination. This value set is provided as a suggestive example.
 */
export declare type ImmunizationRouteCodingType = {
    /**
     * Code: IDINJ
     */
    InjectionIntradermal: CodingArgs;
    /**
     * Code: IM
     */
    InjectionIntramuscular: CodingArgs;
    /**
     * Code: IVINJ
     */
    InjectionIntravenous: CodingArgs;
    /**
     * Code: NASINHLC
     */
    InhalationNasal: CodingArgs;
    /**
     * Code: PO
     */
    SwallowOral: CodingArgs;
    /**
     * Code: SQ
     */
    InjectionSubcutaneous: CodingArgs;
    /**
     * Code: TRNSDERM
     */
    Transdermal: CodingArgs;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the administrative routes used during vaccination. This value set is provided as a suggestive example.
 */
export declare const ImmunizationRouteCodings: ImmunizationRouteCodingType;
//# sourceMappingURL=ImmunizationRouteCodings.d.ts.map