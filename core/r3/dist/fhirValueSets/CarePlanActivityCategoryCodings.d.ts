import { CodingArgs } from '../fhir/Coding.js';
/**
 * High-level categorization of the type of activity in a care plan.
 */
export declare type CarePlanActivityCategoryCodingType = {
    /**
     * diet: Plan for the patient to consume food of a specified nature
     */
    Diet: CodingArgs;
    /**
     * drug: Plan for the patient to consume/receive a drug, vaccine or other product
     */
    Drug: CodingArgs;
    /**
     * encounter: Plan to meet or communicate with the patient (in-patient, out-patient, phone call, etc.)
     */
    Encounter: CodingArgs;
    /**
     * observation: Plan to capture information about a patient (vitals, labs, diagnostic images, etc.)
     */
    Observation: CodingArgs;
    /**
     * other: Some other form of action
     */
    Other: CodingArgs;
    /**
     * procedure: Plan to modify the patient in some way (surgery, physiotherapy, education, counseling, etc.)
     */
    Procedure: CodingArgs;
    /**
     * supply: Plan to provide something to the patient (medication, medical supply, etc.)
     */
    Supply: CodingArgs;
};
/**
 * High-level categorization of the type of activity in a care plan.
 */
export declare const CarePlanActivityCategoryCodings: CarePlanActivityCategoryCodingType;
//# sourceMappingURL=CarePlanActivityCategoryCodings.d.ts.map