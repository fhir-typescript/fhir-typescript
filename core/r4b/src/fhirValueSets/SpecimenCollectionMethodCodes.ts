// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/specimen-collection-method|4.3.0

/**
 *  This example value set defines a set of codes that can be used to indicate the method by which a specimen was collected.
 */
export const SpecimenCollectionMethodCodes = {
  /**
   * Code: 129300006
   */
  PunctureAction: "129300006",
  /**
   * Code: 129304002
   */
  ExcisionAction: "129304002",
  /**
   * Code: 129314006
   */
  BiopsyAction: "129314006",
  /**
   * Code: 129316008
   */
  AspirationAction: "129316008",
  /**
   * Code: 129323009
   */
  ScrapingAction: "129323009",
  /**
   * Code: 225113003
   */
  TimedUrineCollection: "225113003",
  /**
   * Code: 278450005
   */
  FingerPrickSampling: "278450005",
  /**
   * Code: 386089008
   */
  CollectionOfCoughedSputum: "386089008",
  /**
   * Code: 70777001
   */
  UrineSpecimenCollectionCatheterized: "70777001",
  /**
   * Code: 73416001
   */
  UrineSpecimenCollectionCleanCatch: "73416001",
} as const;

/**
 *  This example value set defines a set of codes that can be used to indicate the method by which a specimen was collected.
 */
export type SpecimenCollectionMethodCodeType = typeof SpecimenCollectionMethodCodes[keyof typeof SpecimenCollectionMethodCodes];
