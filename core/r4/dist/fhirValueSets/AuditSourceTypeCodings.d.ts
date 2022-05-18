import { Coding } from '../fhir/Coding.js';
/**
 * The type of process where the audit event originated from.
 */
export declare const AuditSourceTypeCodings: {
    /**
     * 1: End-user display device, diagnostic device.
     */
    readonly UserDevice: Coding;
    /**
     * 2: Data acquisition device or instrument.
     */
    readonly DataInterface: Coding;
    /**
     * 3: Web Server process or thread.
     */
    readonly WebServer: Coding;
    /**
     * 4: Application Server process or thread.
     */
    readonly ApplicationServer: Coding;
    /**
     * 5: Database Server process or thread.
     */
    readonly DatabaseServer: Coding;
    /**
     * 6: Security server, e.g. a domain controller.
     */
    readonly SecurityServer: Coding;
    /**
     * 7: ISO level 1-3 network component.
     */
    readonly NetworkDevice: Coding;
    /**
     * 8: ISO level 4-6 operating software.
     */
    readonly NetworkRouter: Coding;
    /**
     * 9: Other kind of device (defined by DICOM, but some other code/system can be used).
     */
    readonly Other: Coding;
};
/**
 * The type of process where the audit event originated from.
 */
export declare type AuditSourceTypeCodingType = typeof AuditSourceTypeCodings;
//# sourceMappingURL=AuditSourceTypeCodings.d.ts.map