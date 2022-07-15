import { CodingArgs } from '../fhir/Coding.js';
/**
 * A coded type for an identifier that can be used to determine which identifier to use for a specific purpose.
 */
export declare type IdentifierTypeCodingType = {
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
};
/**
 * A coded type for an identifier that can be used to determine which identifier to use for a specific purpose.
 */
export declare const IdentifierTypeCodings: IdentifierTypeCodingType;
//# sourceMappingURL=IdentifierTypeCodings.d.ts.map