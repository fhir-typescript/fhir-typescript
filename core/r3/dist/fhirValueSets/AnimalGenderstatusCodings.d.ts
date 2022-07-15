import { CodingArgs } from '../fhir/Coding.js';
/**
 * This example value set defines a set of codes that can be used to indicate the current state of the animal's reproductive organs.
 */
export declare type AnimalGenderstatusCodingType = {
    /**
     * intact: The animal's reproductive organs are intact.
     */
    Intact: CodingArgs;
    /**
     * neutered: The animal has been sterilized, castrated or otherwise made infertile.
     */
    Neutered: CodingArgs;
    /**
     * unknown: Unable to determine whether the animal has been neutered.
     */
    Unknown: CodingArgs;
};
/**
 * This example value set defines a set of codes that can be used to indicate the current state of the animal's reproductive organs.
 */
export declare const AnimalGenderstatusCodings: AnimalGenderstatusCodingType;
//# sourceMappingURL=AnimalGenderstatusCodings.d.ts.map