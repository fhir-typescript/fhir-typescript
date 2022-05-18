/**
 * A coded type for an identifier that can be used to determine which identifier to use for a specific purpose.
 */
export declare const IdentifierTypeCodes: {
    /**
     * Code: ACSN
     */
    readonly AccessionID: "ACSN";
    /**
     * Code: BRN
     */
    readonly BreedRegistryNumber: "BRN";
    /**
     * Code: DL
     */
    readonly DriverQuoteSLicenseNumber: "DL";
    /**
     * Code: DR
     */
    readonly DonorRegistrationNumber: "DR";
    /**
     * Code: EN
     */
    readonly EmployerNumber: "EN";
    /**
     * Code: FILL
     */
    readonly FillerIdentifier: "FILL";
    /**
     * Code: JHN
     */
    readonly JurisdictionalHealthNumberCanada: "JHN";
    /**
     * Code: MCN
     */
    readonly MicrochipNumber: "MCN";
    /**
     * Code: MD
     */
    readonly MedicalLicenseNumber: "MD";
    /**
     * Code: MR
     */
    readonly MedicalRecordNumber: "MR";
    /**
     * Code: NIIP
     */
    readonly NationalInsurancePayorIdentifierPayor: "NIIP";
    /**
     * Code: PLAC
     */
    readonly PlacerIdentifier: "PLAC";
    /**
     * Code: PPN
     */
    readonly PassportNumber: "PPN";
    /**
     * Code: PRN
     */
    readonly ProviderNumber: "PRN";
    /**
     * Code: SB
     */
    readonly SocialBeneficiaryIdentifier: "SB";
    /**
     * Code: SNO
     */
    readonly SerialNumber: "SNO";
    /**
     * Code: TAX
     */
    readonly TaxIDNumber: "TAX";
    /**
     * Code: UDI
     */
    readonly UniversalDeviceIdentifier: "UDI";
};
/**
 * A coded type for an identifier that can be used to determine which identifier to use for a specific purpose.
 */
export declare type IdentifierTypeCodeType = typeof IdentifierTypeCodes[keyof typeof IdentifierTypeCodes];
//# sourceMappingURL=IdentifierTypeCodes.d.ts.map