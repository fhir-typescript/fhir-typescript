// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/package-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * A high level categorisation of a package.
 */
export type PackageTypeCodingType = {
  /**
   * Code: MedicinalProductPack
   */
  MedicinalProductPack: CodingArgs;
  /**
   * Code: RawMaterialPackage
   */
  RawMaterialPackage: CodingArgs;
  /**
   * Code: Shipping-TransportContainer
   */
  ShippingOrTransportContainer: CodingArgs;
}

/**
 * A high level categorisation of a package.
 */
export const PackageTypeCodings:PackageTypeCodingType = {
  /**
   * Code: MedicinalProductPack
   */
  MedicinalProductPack: {
    display: "Medicinal product pack",
    code: "MedicinalProductPack",
    system: "http://hl7.org/fhir/package-type",
  },
  /**
   * Code: RawMaterialPackage
   */
  RawMaterialPackage: {
    display: "Raw material package",
    code: "RawMaterialPackage",
    system: "http://hl7.org/fhir/package-type",
  },
  /**
   * Code: Shipping-TransportContainer
   */
  ShippingOrTransportContainer: {
    display: "Shipping or transport container",
    code: "Shipping-TransportContainer",
    system: "http://hl7.org/fhir/package-type",
  },
} as const;
