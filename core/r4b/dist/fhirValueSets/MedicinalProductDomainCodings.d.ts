import { CodingArgs } from '../fhir/Coding.js';
/**
 * Applicable domain for this product (e.g. human, veterinary)
 */
export declare type MedicinalProductDomainCodingType = {
    /**
     * Human: Product intended for use with humans
     */
    HumanUse: CodingArgs;
    /**
     * HumanAndVeterinary: Product intended for use with both humans and animals
     */
    HumanAndVeterinaryUse: CodingArgs;
    /**
     * Veterinary: Product intended for use with animals
     */
    VeterinaryUse: CodingArgs;
};
/**
 * Applicable domain for this product (e.g. human, veterinary)
 */
export declare const MedicinalProductDomainCodings: MedicinalProductDomainCodingType;
//# sourceMappingURL=MedicinalProductDomainCodings.d.ts.map