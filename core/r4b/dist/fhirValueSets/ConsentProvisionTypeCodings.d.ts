import { CodingArgs } from '../fhir/Coding.js';
/**
 * How a rule statement is applied, such as adding additional consent or removing consent.
 */
export declare type ConsentProvisionTypeCodingType = {
    /**
     * deny: Consent is denied for actions meeting these rules.
     */
    OptOut: CodingArgs;
    /**
     * permit: Consent is provided for actions meeting these rules.
     */
    OptIn: CodingArgs;
};
/**
 * How a rule statement is applied, such as adding additional consent or removing consent.
 */
export declare const ConsentProvisionTypeCodings: ConsentProvisionTypeCodingType;
//# sourceMappingURL=ConsentProvisionTypeCodings.d.ts.map