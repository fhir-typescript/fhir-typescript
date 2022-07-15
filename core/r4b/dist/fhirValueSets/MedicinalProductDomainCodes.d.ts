/**
 * Applicable domain for this product (e.g. human, veterinary)
 */
export declare const MedicinalProductDomainCodes: {
    /**
     * Human: Product intended for use with humans
     */
    readonly HumanUse: "Human";
    /**
     * HumanAndVeterinary: Product intended for use with both humans and animals
     */
    readonly HumanAndVeterinaryUse: "HumanAndVeterinary";
    /**
     * Veterinary: Product intended for use with animals
     */
    readonly VeterinaryUse: "Veterinary";
};
/**
 * Applicable domain for this product (e.g. human, veterinary)
 */
export declare type MedicinalProductDomainCodeType = typeof MedicinalProductDomainCodes[keyof typeof MedicinalProductDomainCodes];
//# sourceMappingURL=MedicinalProductDomainCodes.d.ts.map