// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/ex-revenue-center|3.0.2

/**
 * This value set includes sample Revenue Center codes.
 */
export const ExRevenueCenterCodes = {
  /**
   * 0010: Vision Clinic
   */
  VisionClinic: "0010",
  /**
   * 0370: Anaesthesia.
   */
  Anaesthesia: "0370",
  /**
   * 0420: Physical Therapy.
   */
  PhysicalTherapy: "0420",
  /**
   * 0421: Physical Therapy - visit charge.
   */
  PhysicalTherapy_0421: "0421",
  /**
   * 0440: Speech-Language Pathology.
   */
  SpeechLanguagePathology: "0440",
  /**
   * 0441: Speech-Language Pathology- visit charge
   */
  SpeechLanguagePathologyVisit: "0441",
  /**
   * 0450: Emergency Room
   */
  EmergencyRoom: "0450",
  /**
   * 0451: Emergency Room - EM/EMTALA
   */
  EmergencyRoomEMEMTALA: "0451",
  /**
   * 0452: Emergency Room - beyond EMTALA
   */
  EmergencyRoomBeyondEMTALA: "0452",
} as const;

/**
 * This value set includes sample Revenue Center codes.
 */
export type ExRevenueCenterCodeType = typeof ExRevenueCenterCodes[keyof typeof ExRevenueCenterCodes];
