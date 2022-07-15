import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes sample Payee Type codes.
 */
export declare type PayeetypeCodingType = {
    /**
     * other: Any benefit payable will be paid to a third party such as a guarrantor.
     */
    Provider: CodingArgs;
    /**
     * provider: Any benefit payable will be paid to the provider (Assignment of Benefit).
     */
    ProviderProvider: CodingArgs;
    /**
     * subscriber: The subscriber (policy holder) will be reimbursed.
     */
    Subscriber: CodingArgs;
};
/**
 * This value set includes sample Payee Type codes.
 */
export declare const PayeetypeCodings: PayeetypeCodingType;
//# sourceMappingURL=PayeetypeCodings.d.ts.map