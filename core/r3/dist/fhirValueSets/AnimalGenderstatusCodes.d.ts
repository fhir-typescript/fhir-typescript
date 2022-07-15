/**
 * This example value set defines a set of codes that can be used to indicate the current state of the animal's reproductive organs.
 */
export declare const AnimalGenderstatusCodes: {
    /**
     * intact: The animal's reproductive organs are intact.
     */
    readonly Intact: "intact";
    /**
     * neutered: The animal has been sterilized, castrated or otherwise made infertile.
     */
    readonly Neutered: "neutered";
    /**
     * unknown: Unable to determine whether the animal has been neutered.
     */
    readonly Unknown: "unknown";
};
/**
 * This example value set defines a set of codes that can be used to indicate the current state of the animal's reproductive organs.
 */
export declare type AnimalGenderstatusCodeType = typeof AnimalGenderstatusCodes[keyof typeof AnimalGenderstatusCodes];
//# sourceMappingURL=AnimalGenderstatusCodes.d.ts.map