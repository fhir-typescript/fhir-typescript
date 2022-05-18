import { Coding } from '../fhir/Coding.js';
/**
 * How a rule statement is applied, such as adding additional consent or removing consent.
 */
export declare const ConsentProvisionTypeCodings: {
    /**
     * deny: Consent is denied for actions meeting these rules.
     */
    readonly OptOut: Coding;
    /**
     * permit: Consent is provided for actions meeting these rules.
     */
    readonly OptIn: Coding;
};
/**
 * How a rule statement is applied, such as adding additional consent or removing consent.
 */
export declare type ConsentProvisionTypeCodingType = typeof ConsentProvisionTypeCodings;
//# sourceMappingURL=ConsentProvisionTypeCodings.d.ts.map