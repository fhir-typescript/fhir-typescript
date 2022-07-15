import { CodingArgs } from '../fhir/Coding.js';
/**
 * Types of resources that are part of group
 */
export declare type GroupTypeCodingType = {
    /**
     * animal: Group contains "animal" Patient resources
     */
    Animal: CodingArgs;
    /**
     * device: Group contains Device resources
     */
    Device: CodingArgs;
    /**
     * medication: Group contains Medication resources
     */
    Medication: CodingArgs;
    /**
     * person: Group contains "person" Patient resources
     */
    Person: CodingArgs;
    /**
     * practitioner: Group contains healthcare practitioner resources
     */
    Practitioner: CodingArgs;
    /**
     * substance: Group contains Substance resources
     */
    Substance: CodingArgs;
};
/**
 * Types of resources that are part of group
 */
export declare const GroupTypeCodings: GroupTypeCodingType;
//# sourceMappingURL=GroupTypeCodings.d.ts.map