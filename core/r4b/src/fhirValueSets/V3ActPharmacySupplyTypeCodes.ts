// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-ActPharmacySupplyType|2.0.0

/**
 * Identifies types of dispensing events
 */
export const V3ActPharmacySupplyTypeCodes = {
  /**
   * Code: DF
   */
  DailyFill: "DF",
  /**
   * Code: EM
   */
  EmergencySupply: "EM",
  /**
   * Code: FF
   */
  FirstFill: "FF",
  /**
   * Code: FFC
   */
  FirstFillComplete: "FFC",
  /**
   * Code: FFCS
   */
  FirstFillCompletePartialStrength: "FFCS",
  /**
   * Code: FFP
   */
  FirstFillPartFill: "FFP",
  /**
   * Code: FFPS
   */
  FirstFillPartFillPartialStrength: "FFPS",
  /**
   * Code: FFS
   */
  FeeForService: "FFS",
  /**
   * Code: FFSS
   */
  FirstFillPartialStrength: "FFSS",
  /**
   * Code: FS
   */
  FloorStock: "FS",
  /**
   * Code: MS
   */
  ManufacturerSample: "MS",
  /**
   * Code: RF
   */
  Refill: "RF",
  /**
   * Code: RFC
   */
  RefillComplete: "RFC",
  /**
   * Code: RFCS
   */
  RefillCompletePartialStrength: "RFCS",
  /**
   * Code: RFF
   */
  RefillFirstFillThisFacility: "RFF",
  /**
   * Code: RFFS
   */
  RefillPartialStrengthFirstFillThisFacility: "RFFS",
  /**
   * Code: RFP
   */
  RefillPartFill: "RFP",
  /**
   * Code: RFPS
   */
  RefillPartFillPartialStrength: "RFPS",
  /**
   * Code: RFS
   */
  RefillPartialStrength: "RFS",
  /**
   * Code: SO
   */
  ScriptOwing: "SO",
  /**
   * Code: TB
   */
  TrialBalance: "TB",
  /**
   * Code: TBS
   */
  TrialBalancePartialStrength: "TBS",
  /**
   * Code: TF
   */
  TrialFill: "TF",
  /**
   * Code: TFS
   */
  TrialFillPartialStrength: "TFS",
  /**
   * Code: UD
   */
  UnitDose: "UD",
  /**
   * Code: UDE
   */
  UnitDoseEquivalent: "UDE",
} as const;

/**
 * Identifies types of dispensing events
 */
export type V3ActPharmacySupplyTypeCodeType = typeof V3ActPharmacySupplyTypeCodes[keyof typeof V3ActPharmacySupplyTypeCodes];
