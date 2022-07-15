// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/identifier-type|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * A coded type for an identifier that can be used to determine which identifier to use for a specific purpose.
 */
export type IdentifierTypeCodingType = {
  /**
   * Code: ACSN
   */
  AccessionID: CodingArgs;
  /**
   * Code: BRN
   */
  BreedRegistryNumber: CodingArgs;
  /**
   * Code: DL
   */
  DriverQuoteSLicenseNumber: CodingArgs;
  /**
   * Code: DR
   */
  DonorRegistrationNumber: CodingArgs;
  /**
   * Code: EN
   */
  EmployerNumber: CodingArgs;
  /**
   * FILL: The Identifier associated with the person, or service, who produces the observations or fulfills the order requested by the requestor.
   */
  FillerIdentifier: CodingArgs;
  /**
   * Code: MCN
   */
  MicrochipNumber: CodingArgs;
  /**
   * Code: MD
   */
  MedicalLicenseNumber: CodingArgs;
  /**
   * Code: MR
   */
  MedicalRecordNumber: CodingArgs;
  /**
   * Code: NIIP
   */
  NationalInsurancePayorIdentifierPayor: CodingArgs;
  /**
   * PLAC: The identifier associated with the person or service that requests or places an order.
   */
  PlacerIdentifier: CodingArgs;
  /**
   * Code: PPN
   */
  PassportNumber: CodingArgs;
  /**
   * Code: PRN
   */
  ProviderNumber: CodingArgs;
  /**
   * SB: An identifier issued by a governmental organization to an individual for the purpose of the receipt of social services and benefits.
   */
  SocialBeneficiaryIdentifier: CodingArgs;
  /**
   * SNO: An identifier affixed to an item by the manufacturer when it is first made, where each item has a different identifier.
   */
  SerialNumber: CodingArgs;
  /**
   * Code: TAX
   */
  TaxIDNumber: CodingArgs;
  /**
   * UDI: A identifier assigned to a device using the Universal Device Identifier framework as defined by FDA (http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/).
   */
  UniversalDeviceIdentifier: CodingArgs;
}

/**
 * A coded type for an identifier that can be used to determine which identifier to use for a specific purpose.
 */
export const IdentifierTypeCodings:IdentifierTypeCodingType = {
  /**
   * Code: ACSN
   */
  AccessionID: {
    display: "Accession ID",
    code: "ACSN",
    system: "http://hl7.org/fhir/v2/0203",
  },
  /**
   * Code: BRN
   */
  BreedRegistryNumber: {
    display: "Breed Registry Number",
    code: "BRN",
    system: "http://hl7.org/fhir/v2/0203",
  },
  /**
   * Code: DL
   */
  DriverQuoteSLicenseNumber: {
    display: "Driver's license number",
    code: "DL",
    system: "http://hl7.org/fhir/v2/0203",
  },
  /**
   * Code: DR
   */
  DonorRegistrationNumber: {
    display: "Donor Registration Number",
    code: "DR",
    system: "http://hl7.org/fhir/v2/0203",
  },
  /**
   * Code: EN
   */
  EmployerNumber: {
    display: "Employer number",
    code: "EN",
    system: "http://hl7.org/fhir/v2/0203",
  },
  /**
   * FILL: The Identifier associated with the person, or service, who produces the observations or fulfills the order requested by the requestor.
   */
  FillerIdentifier: {
    display: "Filler Identifier",
    code: "FILL",
    system: "http://hl7.org/fhir/identifier-type",
  },
  /**
   * Code: MCN
   */
  MicrochipNumber: {
    display: "Microchip Number",
    code: "MCN",
    system: "http://hl7.org/fhir/v2/0203",
  },
  /**
   * Code: MD
   */
  MedicalLicenseNumber: {
    display: "Medical License number",
    code: "MD",
    system: "http://hl7.org/fhir/v2/0203",
  },
  /**
   * Code: MR
   */
  MedicalRecordNumber: {
    display: "Medical record number",
    code: "MR",
    system: "http://hl7.org/fhir/v2/0203",
  },
  /**
   * Code: NIIP
   */
  NationalInsurancePayorIdentifierPayor: {
    display: "National Insurance Payor Identifier (Payor)",
    code: "NIIP",
    system: "http://hl7.org/fhir/v2/0203",
  },
  /**
   * PLAC: The identifier associated with the person or service that requests or places an order.
   */
  PlacerIdentifier: {
    display: "Placer Identifier",
    code: "PLAC",
    system: "http://hl7.org/fhir/identifier-type",
  },
  /**
   * Code: PPN
   */
  PassportNumber: {
    display: "Passport number",
    code: "PPN",
    system: "http://hl7.org/fhir/v2/0203",
  },
  /**
   * Code: PRN
   */
  ProviderNumber: {
    display: "Provider number",
    code: "PRN",
    system: "http://hl7.org/fhir/v2/0203",
  },
  /**
   * SB: An identifier issued by a governmental organization to an individual for the purpose of the receipt of social services and benefits.
   */
  SocialBeneficiaryIdentifier: {
    display: "Social Beneficiary Identifier",
    code: "SB",
    system: "http://hl7.org/fhir/identifier-type",
  },
  /**
   * SNO: An identifier affixed to an item by the manufacturer when it is first made, where each item has a different identifier.
   */
  SerialNumber: {
    display: "Serial Number",
    code: "SNO",
    system: "http://hl7.org/fhir/identifier-type",
  },
  /**
   * Code: TAX
   */
  TaxIDNumber: {
    display: "Tax ID number",
    code: "TAX",
    system: "http://hl7.org/fhir/v2/0203",
  },
  /**
   * UDI: A identifier assigned to a device using the Universal Device Identifier framework as defined by FDA (http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/).
   */
  UniversalDeviceIdentifier: {
    display: "Universal Device Identifier",
    code: "UDI",
    system: "http://hl7.org/fhir/identifier-type",
  },
} as const;
