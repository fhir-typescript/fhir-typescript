import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes a smattering of Network type codes.
 */
export declare type BenefitNetworkCodingType = {
    /**
     * in: Services rendered by a Network provider
     */
    InNetwork: CodingArgs;
    /**
     * out: Services rendered by a provider who is not in the Network
     */
    OutOfNetwork: CodingArgs;
};
/**
 * This value set includes a smattering of Network type codes.
 */
export declare const BenefitNetworkCodings: BenefitNetworkCodingType;
//# sourceMappingURL=BenefitNetworkCodings.d.ts.map