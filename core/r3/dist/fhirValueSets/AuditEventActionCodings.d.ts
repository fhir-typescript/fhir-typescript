import { CodingArgs } from '../fhir/Coding.js';
/**
 * Indicator for type of action performed during the event that generated the event
 */
export declare type AuditEventActionCodingType = {
    /**
     * C: Create a new database object, such as placing an order.
     */
    Create: CodingArgs;
    /**
     * D: Delete items, such as a doctor master file record.
     */
    Delete: CodingArgs;
    /**
     * E: Perform a system or application function such as log-on, program execution or use of an object's method, or perform a query/search operation.
     */
    Execute: CodingArgs;
    /**
     * R: Display or print data, such as a doctor census.
     */
    ReadViewPrint: CodingArgs;
    /**
     * U: Update data, such as revise patient information.
     */
    Update: CodingArgs;
};
/**
 * Indicator for type of action performed during the event that generated the event
 */
export declare const AuditEventActionCodings: AuditEventActionCodingType;
//# sourceMappingURL=AuditEventActionCodings.d.ts.map