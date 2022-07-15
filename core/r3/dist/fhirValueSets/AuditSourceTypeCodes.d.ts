/**
 * The type of process where the audit event originated from.
 */
export declare const AuditSourceTypeCodes: {
    /**
     * 1: End-user display device, diagnostic device.
     */
    readonly UserDevice: "1";
    /**
     * 2: Data acquisition device or instrument.
     */
    readonly DataInterface: "2";
    /**
     * 3: Web Server process or thread.
     */
    readonly WebServer: "3";
    /**
     * 4: Application Server process or thread.
     */
    readonly ApplicationServer: "4";
    /**
     * 5: Database Server process or thread.
     */
    readonly DatabaseServer: "5";
    /**
     * 6: Security server, e.g. a domain controller.
     */
    readonly SecurityServer: "6";
    /**
     * 7: ISO level 1-3 network component.
     */
    readonly NetworkDevice: "7";
    /**
     * 8: ISO level 4-6 operating software.
     */
    readonly NetworkRouter: "8";
    /**
     * 9: other kind of device (defined by DICOM, but some other code/system can be used).
     */
    readonly Other: "9";
};
/**
 * The type of process where the audit event originated from.
 */
export declare type AuditSourceTypeCodeType = typeof AuditSourceTypeCodes[keyof typeof AuditSourceTypeCodes];
//# sourceMappingURL=AuditSourceTypeCodes.d.ts.map