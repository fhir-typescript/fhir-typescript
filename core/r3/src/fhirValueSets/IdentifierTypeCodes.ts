// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/identifier-type|3.0.2

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
   * FILL: The Identifier associated with the person, or service, who produces the observations or fulfills the order requested by the requestor.
   */
  FillerIdentifier: "FILL",
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
   * PLAC: The identifier associated with the person or service that requests or places an order.
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
   * SB: An identifier issued by a governmental organization to an individual for the purpose of the receipt of social services and benefits.
   */
  SocialBeneficiaryIdentifier: "SB",
  /**
   * SNO: An identifier affixed to an item by the manufacturer when it is first made, where each item has a different identifier.
   */
  SerialNumber: "SNO",
  /**
   * Code: TAX
   */
  TaxIDNumber: "TAX",
  /**
   * UDI: A identifier assigned to a device using the Universal Device Identifier framework as defined by FDA (http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/).
   */
  UniversalDeviceIdentifier: "UDI",
} as const;

/**
 * A coded type for an identifier that can be used to determine which identifier to use for a specific purpose.
 */
export type IdentifierTypeCodeType = typeof IdentifierTypeCodes[keyof typeof IdentifierTypeCodes];