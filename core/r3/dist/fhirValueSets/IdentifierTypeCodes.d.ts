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
     * FILL: The Identifier associated with the person, or service, who produces the observations or fulfills the order requested by the requestor.
     */
    readonly FillerIdentifier: "FILL";
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
     * PLAC: The identifier associated with the person or service that requests or places an order.
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
     * SB: An identifier issued by a governmental organization to an individual for the purpose of the receipt of social services and benefits.
     */
    readonly SocialBeneficiaryIdentifier: "SB";
    /**
     * SNO: An identifier affixed to an item by the manufacturer when it is first made, where each item has a different identifier.
     */
    readonly SerialNumber: "SNO";
    /**
     * Code: TAX
     */
    readonly TaxIDNumber: "TAX";
    /**
     * UDI: A identifier assigned to a device using the Universal Device Identifier framework as defined by FDA (http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/).
     */
    readonly UniversalDeviceIdentifier: "UDI";
};
/**
 * A coded type for an identifier that can be used to determine which identifier to use for a specific purpose.
 */
export declare type IdentifierTypeCodeType = typeof IdentifierTypeCodes[keyof typeof IdentifierTypeCodes];
//# sourceMappingURL=IdentifierTypeCodes.d.ts.map