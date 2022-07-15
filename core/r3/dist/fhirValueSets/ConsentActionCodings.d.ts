import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes sample Consent Action codes.
 */
export declare type ConsentActionCodingType = {
    /**
     * access: Provide an entity access to information to achieve a stated purpose
     */
    Access: CodingArgs;
    /**
     * collect: Gather/acquire information by an entity to achieve a stated purpose
     */
    Collect: CodingArgs;
    /**
     * correct: Allowing an entity to correct a patient's information
     */
    AccessAndCorrect: CodingArgs;
    /**
     * disclose: Release / transfer of information to an entity
     */
    Disclose: CodingArgs;
    /**
     * use: Use of stored information by an entity fo the stated purpose
     */
    Use: CodingArgs;
};
/**
 * This value set includes sample Consent Action codes.
 */
export declare const ConsentActionCodings: ConsentActionCodingType;
//# sourceMappingURL=ConsentActionCodings.d.ts.map