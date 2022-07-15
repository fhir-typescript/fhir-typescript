import { CodingArgs } from '../fhir/Coding.js';
/**
 * How an exception statement is applied, such as adding additional consent or removing consent
 */
export declare type ConsentExceptTypeCodingType = {
    /**
     * deny: Consent is denied for actions meeting these rules
     */
    OptOut: CodingArgs;
    /**
     * permit: Consent is provided for actions meeting these rules
     */
    OptIn: CodingArgs;
};
/**
 * How an exception statement is applied, such as adding additional consent or removing consent
 */
export declare const ConsentExceptTypeCodings: ConsentExceptTypeCodingType;
//# sourceMappingURL=ConsentExceptTypeCodings.d.ts.map