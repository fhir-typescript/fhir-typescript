import { CodingArgs } from '../fhir/Coding.js';
/**
 * A code that indicates how the server supports conditional delete.
 */
export declare type ConditionalDeleteStatusCodingType = {
    /**
     * multiple: Conditional deletes are supported, and multiple resources can be deleted in a single interaction.
     */
    MultipleDeletesSupported: CodingArgs;
    /**
     * not-supported: No support for conditional deletes.
     */
    NotSupported: CodingArgs;
    /**
     * single: Conditional deletes are supported, but only single resources at a time.
     */
    SingleDeletesSupported: CodingArgs;
};
/**
 * A code that indicates how the server supports conditional delete.
 */
export declare const ConditionalDeleteStatusCodings: ConditionalDeleteStatusCodingType;
//# sourceMappingURL=ConditionalDeleteStatusCodings.d.ts.map