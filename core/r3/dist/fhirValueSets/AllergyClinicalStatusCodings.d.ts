import { CodingArgs } from '../fhir/Coding.js';
/**
 * The clinical status of the allergy or intolerance.
 */
export declare type AllergyClinicalStatusCodingType = {
    /**
     * active: An active record of a risk of a reaction to the identified substance.
     */
    Active: CodingArgs;
    /**
     * inactive: An inactivated record of a risk of a reaction to the identified substance.
     */
    Inactive: CodingArgs;
    /**
     * resolved: A reaction to the identified substance has been clinically reassessed by testing or re-exposure and considered to be resolved.
     */
    Resolved: CodingArgs;
};
/**
 * The clinical status of the allergy or intolerance.
 */
export declare const AllergyClinicalStatusCodings: AllergyClinicalStatusCodingType;
//# sourceMappingURL=AllergyClinicalStatusCodings.d.ts.map