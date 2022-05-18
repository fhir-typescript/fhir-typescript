import { Coding } from '../fhir/Coding.js';
/**
 * A code that indicates how the server supports conditional delete.
 */
export declare const ConditionalDeleteStatusCodings: {
    /**
     * multiple: Conditional deletes are supported, and multiple resources can be deleted in a single interaction.
     */
    readonly MultipleDeletesSupported: Coding;
    /**
     * not-supported: No support for conditional deletes.
     */
    readonly NotSupported: Coding;
    /**
     * single: Conditional deletes are supported, but only single resources at a time.
     */
    readonly SingleDeletesSupported: Coding;
};
/**
 * A code that indicates how the server supports conditional delete.
 */
export declare type ConditionalDeleteStatusCodingType = typeof ConditionalDeleteStatusCodings;
//# sourceMappingURL=ConditionalDeleteStatusCodings.d.ts.map