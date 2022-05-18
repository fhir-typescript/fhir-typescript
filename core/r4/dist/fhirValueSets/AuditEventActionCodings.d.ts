import { Coding } from '../fhir/Coding.js';
/**
 * Indicator for type of action performed during the event that generated the event.
 */
export declare const AuditEventActionCodings: {
    /**
     * C: Create a new database object, such as placing an order.
     */
    readonly Create: Coding;
    /**
     * D: Delete items, such as a doctor master file record.
     */
    readonly Delete: Coding;
    /**
     * E: Perform a system or application function such as log-on, program execution or use of an object's method, or perform a query/search operation.
     */
    readonly Execute: Coding;
    /**
     * R: Display or print data, such as a doctor census.
     */
    readonly ReadViewPrint: Coding;
    /**
     * U: Update data, such as revise patient information.
     */
    readonly Update: Coding;
};
/**
 * Indicator for type of action performed during the event that generated the event.
 */
export declare type AuditEventActionCodingType = typeof AuditEventActionCodings;
//# sourceMappingURL=AuditEventActionCodings.d.ts.map