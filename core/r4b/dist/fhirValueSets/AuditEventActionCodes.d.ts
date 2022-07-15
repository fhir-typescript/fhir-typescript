/**
 * Indicator for type of action performed during the event that generated the event.
 */
export declare const AuditEventActionCodes: {
    /**
     * C: Create a new database object, such as placing an order.
     */
    readonly Create: "C";
    /**
     * D: Delete items, such as a doctor master file record.
     */
    readonly Delete: "D";
    /**
     * E: Perform a system or application function such as log-on, program execution or use of an object's method, or perform a query/search operation.
     */
    readonly Execute: "E";
    /**
     * R: Display or print data, such as a doctor census.
     */
    readonly ReadViewPrint: "R";
    /**
     * U: Update data, such as revise patient information.
     */
    readonly Update: "U";
};
/**
 * Indicator for type of action performed during the event that generated the event.
 */
export declare type AuditEventActionCodeType = typeof AuditEventActionCodes[keyof typeof AuditEventActionCodes];
//# sourceMappingURL=AuditEventActionCodes.d.ts.map