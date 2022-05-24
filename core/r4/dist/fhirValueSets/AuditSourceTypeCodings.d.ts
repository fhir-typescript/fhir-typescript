import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of process where the audit event originated from.
 */
export declare type AuditSourceTypeCodingType = {
    /**
     * 1: End-user display device, diagnostic device.
     */
    UserDevice: CodingArgs;
    /**
     * 2: Data acquisition device or instrument.
     */
    DataInterface: CodingArgs;
    /**
     * 3: Web Server process or thread.
     */
    WebServer: CodingArgs;
    /**
     * 4: Application Server process or thread.
     */
    ApplicationServer: CodingArgs;
    /**
     * 5: Database Server process or thread.
     */
    DatabaseServer: CodingArgs;
    /**
     * 6: Security server, e.g. a domain controller.
     */
    SecurityServer: CodingArgs;
    /**
     * 7: ISO level 1-3 network component.
     */
    NetworkDevice: CodingArgs;
    /**
     * 8: ISO level 4-6 operating software.
     */
    NetworkRouter: CodingArgs;
    /**
     * 9: Other kind of device (defined by DICOM, but some other code/system can be used).
     */
    Other: CodingArgs;
};
/**
 * The type of process where the audit event originated from.
 */
export declare const AuditSourceTypeCodings: AuditSourceTypeCodingType;
//# sourceMappingURL=AuditSourceTypeCodings.d.ts.map