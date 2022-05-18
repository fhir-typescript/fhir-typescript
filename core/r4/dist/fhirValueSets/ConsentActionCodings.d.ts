import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes sample Consent Action codes.
 */
export declare const ConsentActionCodings: {
    /**
     * access: Retrieval without permitting collection, use or disclosure. e.g., no screen-scraping for collection, use or disclosure (view-only access)
     */
    readonly Access: Coding;
    /**
     * collect: Gather retrieved information for storage
     */
    readonly Collect: Coding;
    /**
     * correct: Allow retrieval of a patient's information for the purpose of update or rectify
     */
    readonly AccessAndCorrect: Coding;
    /**
     * disclose: Transfer retrieved information
     */
    readonly Disclose: Coding;
    /**
     * use: Utilize the retrieved information
     */
    readonly Use: Coding;
};
/**
 * This value set includes sample Consent Action codes.
 */
export declare type ConsentActionCodingType = typeof ConsentActionCodings;
//# sourceMappingURL=ConsentActionCodings.d.ts.map