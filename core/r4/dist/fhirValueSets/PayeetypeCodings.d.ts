import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes sample Payee Type codes.
 */
export declare const PayeetypeCodings: {
    /**
     * other: Any benefit payable will be paid to a third party such as a guarrantor.
     */
    readonly Provider: Coding;
    /**
     * provider: Any benefit payable will be paid to the provider (Assignment of Benefit).
     */
    readonly ProviderProvider: Coding;
    /**
     * subscriber: The subscriber (policy holder) will be reimbursed.
     */
    readonly Subscriber: Coding;
};
/**
 * This value set includes sample Payee Type codes.
 */
export declare type PayeetypeCodingType = typeof PayeetypeCodings;
//# sourceMappingURL=PayeetypeCodings.d.ts.map