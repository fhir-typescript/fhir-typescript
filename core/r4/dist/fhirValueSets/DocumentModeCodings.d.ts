import { Coding } from '../fhir/Coding.js';
/**
 * Whether the application produces or consumes documents.
 */
export declare const DocumentModeCodings: {
    /**
     * consumer: The application consumes documents of the specified type.
     */
    readonly Consumer: Coding;
    /**
     * producer: The application produces documents of the specified type.
     */
    readonly Producer: Coding;
};
/**
 * Whether the application produces or consumes documents.
 */
export declare type DocumentModeCodingType = typeof DocumentModeCodings;
//# sourceMappingURL=DocumentModeCodings.d.ts.map