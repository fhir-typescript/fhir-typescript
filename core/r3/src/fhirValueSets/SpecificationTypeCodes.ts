// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/specification-type|3.0.2

/**
 * Codes for device specification types such as serial number, part number, hardware revision, software revision, etc.
 */
export const SpecificationTypeCodes = {
  /**
   * firmware-revision: Firmware Revision - MDC_ID_PROD_SPEC_FW
   */
  FirmwareRevision: "firmware-revision",
  /**
   * gmdn: GMDN - MDC_ID_PROD_SPEC_GMDN
   */
  GMDN: "gmdn",
  /**
   * hardware-revision: Hardware Revision - MDC_ID_PROD_SPEC_HW
   */
  HardwareRevision: "hardware-revision",
  /**
   * part-number: Part Number - MDC_ID_PROD_SPEC_PART
   */
  PartNumber: "part-number",
  /**
   * protocol-revision: Protocol Revision - MDC_ID_PROD_SPEC_PROTOCOL
   */
  ProtocolRevision: "protocol-revision",
  /**
   * serial-number: Serial Number - MDC_ID_PROD_SPEC_SERIAL
   */
  SerialNumber: "serial-number",
  /**
   * software-revision: Software Revision - MDC_ID_PROD_SPEC_SW
   */
  SoftwareRevision: "software-revision",
  /**
   * unspecified: Unspecified Production Specification - MDC_ID_PROD_SPEC_UNSPECIFIED
   */
  UnspecifiedProductionSpecification: "unspecified",
} as const;

/**
 * Codes for device specification types such as serial number, part number, hardware revision, software revision, etc.
 */
export type SpecificationTypeCodeType = typeof SpecificationTypeCodes[keyof typeof SpecificationTypeCodes];