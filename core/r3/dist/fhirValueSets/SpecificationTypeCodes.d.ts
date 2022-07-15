/**
 * Codes for device specification types such as serial number, part number, hardware revision, software revision, etc.
 */
export declare const SpecificationTypeCodes: {
    /**
     * firmware-revision: Firmware Revision - MDC_ID_PROD_SPEC_FW
     */
    readonly FirmwareRevision: "firmware-revision";
    /**
     * gmdn: GMDN - MDC_ID_PROD_SPEC_GMDN
     */
    readonly GMDN: "gmdn";
    /**
     * hardware-revision: Hardware Revision - MDC_ID_PROD_SPEC_HW
     */
    readonly HardwareRevision: "hardware-revision";
    /**
     * part-number: Part Number - MDC_ID_PROD_SPEC_PART
     */
    readonly PartNumber: "part-number";
    /**
     * protocol-revision: Protocol Revision - MDC_ID_PROD_SPEC_PROTOCOL
     */
    readonly ProtocolRevision: "protocol-revision";
    /**
     * serial-number: Serial Number - MDC_ID_PROD_SPEC_SERIAL
     */
    readonly SerialNumber: "serial-number";
    /**
     * software-revision: Software Revision - MDC_ID_PROD_SPEC_SW
     */
    readonly SoftwareRevision: "software-revision";
    /**
     * unspecified: Unspecified Production Specification - MDC_ID_PROD_SPEC_UNSPECIFIED
     */
    readonly UnspecifiedProductionSpecification: "unspecified";
};
/**
 * Codes for device specification types such as serial number, part number, hardware revision, software revision, etc.
 */
export declare type SpecificationTypeCodeType = typeof SpecificationTypeCodes[keyof typeof SpecificationTypeCodes];
//# sourceMappingURL=SpecificationTypeCodes.d.ts.map