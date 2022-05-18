// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/identifier-type|4.0.1

/**
 * A coded type for an identifier that can be used to determine which identifier to use for a specific purpose.
 */
export const IdentifierTypeCodes = {
  /**
   * Code: ACSN
   */
  AccessionID: "ACSN",
  /**
   * Code: BRN
   */
  BreedRegistryNumber: "BRN",
  /**
   * Code: DL
   */
  DriverQuoteSLicenseNumber: "DL",
  /**
   * Code: DR
   */
  DonorRegistrationNumber: "DR",
  /**
   * Code: EN
   */
  EmployerNumber: "EN",
  /**
   * Code: FILL
   */
  FillerIdentifier: "FILL",
  /**
   * Code: JHN
   */
  JurisdictionalHealthNumberCanada: "JHN",
  /**
   * Code: MCN
   */
  MicrochipNumber: "MCN",
  /**
   * Code: MD
   */
  MedicalLicenseNumber: "MD",
  /**
   * Code: MR
   */
  MedicalRecordNumber: "MR",
  /**
   * Code: NIIP
   */
  NationalInsurancePayorIdentifierPayor: "NIIP",
  /**
   * Code: PLAC
   */
  PlacerIdentifier: "PLAC",
  /**
   * Code: PPN
   */
  PassportNumber: "PPN",
  /**
   * Code: PRN
   */
  ProviderNumber: "PRN",
  /**
   * Code: SB
   */
  SocialBeneficiaryIdentifier: "SB",
  /**
   * Code: SNO
   */
  SerialNumber: "SNO",
  /**
   * Code: TAX
   */
  TaxIDNumber: "TAX",
  /**
   * Code: UDI
   */
  UniversalDeviceIdentifier: "UDI",
} as const;

/**
 * A coded type for an identifier that can be used to determine which identifier to use for a specific purpose.
 */
export type IdentifierTypeCodeType = typeof IdentifierTypeCodes[keyof typeof IdentifierTypeCodes];
