import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes sample Consent Action codes.
 */
export declare type ConsentActionCodingType = {
    /**
     * access: Retrieval without permitting collection, use or disclosure. e.g., no screen-scraping for collection, use or disclosure (view-only access)
     */
    Access: CodingArgs;
    /**
     * collect: Gather retrieved information for storage
     */
    Collect: CodingArgs;
    /**
     * correct: Allow retrieval of a patient's information for the purpose of update or rectify
     */
    AccessAndCorrect: CodingArgs;
    /**
     * disclose: Transfer retrieved information
     */
    Disclose: CodingArgs;
    /**
     * use: Utilize the retrieved information
     */
    Use: CodingArgs;
};
/**
 * This value set includes sample Consent Action codes.
 */
export declare const ConsentActionCodings: ConsentActionCodingType;
//# sourceMappingURL=ConsentActionCodings.d.ts.map