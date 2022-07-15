// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/operational-status|3.0.2

/**
 * Codes representing the current status of the device - on, off, suspended, etc.
 */
export const OperationalStatusCodes = {
  /**
   * entered-in-error: The device was entered in error.
   */
  EnteredInError: "entered-in-error",
  /**
   * hw-discon: The device hardware is disconnected.
   */
  HardwareDisconnectd: "hw-discon",
  /**
   * not-ready: The device is not ready.
   */
  NotReady: "not-ready",
  /**
   * off: The device is off.
   */
  Off: "off",
  /**
   * on: The device is fully operational.
   */
  On: "on",
  /**
   * standby: The device is ready but not actively operating.
   */
  Standby: "standby",
  /**
   * transduc-discon: The device transducer is diconnected.
   */
  TransducerDiconnected: "transduc-discon",
} as const;

/**
 * Codes representing the current status of the device - on, off, suspended, etc.
 */
export type OperationalStatusCodeType = typeof OperationalStatusCodes[keyof typeof OperationalStatusCodes];
