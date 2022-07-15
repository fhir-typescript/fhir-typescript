/**
 * A coded concept defining the kind of container a medication package is packaged in
 */
export declare const MedicationPackageFormCodes: {
    /**
     * ampoule: A sealed glass capsule containing a liquid
     */
    readonly Ampoule: "ampoule";
    /**
     * bottle: A container, typically made of glass or plastic and with a narrow neck, used for storing liquids.
     */
    readonly Bottle: "bottle";
    /**
     * box: A container with a flat base and sides, typically square or rectangular and having a lid.
     */
    readonly Box: "box";
    /**
     * cartridge: A device of various configuration and composition used with a syringe for the application of anesthetic or other materials to a patient.
     */
    readonly Cartridge: "cartridge";
    /**
     * container: A package intended to store pharmaceuticals.
     */
    readonly Container: "container";
    /**
     * tube: A long, hollow cylinder of metal, plastic, glass, etc., for holding medications, typically creams or ointments
     */
    readonly Tube: "tube";
    /**
     * unitdose: A dose of medicine prepared in an individual package for convenience, safety or monitoring.
     */
    readonly UnitDoseBlister: "unitdose";
    /**
     * vial: A small container, typically cylindrical and made of glass, used especially for holding liquid medications.
     */
    readonly Vial: "vial";
};
/**
 * A coded concept defining the kind of container a medication package is packaged in
 */
export declare type MedicationPackageFormCodeType = typeof MedicationPackageFormCodes[keyof typeof MedicationPackageFormCodes];
//# sourceMappingURL=MedicationPackageFormCodes.d.ts.map