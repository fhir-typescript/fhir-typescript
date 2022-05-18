import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes a smattering of Network type codes.
 */
export declare const BenefitNetworkCodings: {
    /**
     * in: Services rendered by a Network provider
     */
    readonly InNetwork: Coding;
    /**
     * out: Services rendered by a provider who is not in the Network
     */
    readonly OutOfNetwork: Coding;
};
/**
 * This value set includes a smattering of Network type codes.
 */
export declare type BenefitNetworkCodingType = typeof BenefitNetworkCodings;
//# sourceMappingURL=BenefitNetworkCodings.d.ts.map