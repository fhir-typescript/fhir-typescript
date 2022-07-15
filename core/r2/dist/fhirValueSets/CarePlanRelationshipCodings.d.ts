import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes identifying the types of relationships between two plans.
 */
export declare type CarePlanRelationshipCodingType = {
    /**
     * fulfills: This plan provides details about how to perform activities defined at a higher level by the referenced plan.
     */
    Fulfills: CodingArgs;
    /**
     * includes: The referenced plan is considered to be part of this plan.
     */
    Includes: CodingArgs;
    /**
     * replaces: This plan takes the places of the referenced plan.
     */
    Replaces: CodingArgs;
};
/**
 * Codes identifying the types of relationships between two plans.
 */
export declare const CarePlanRelationshipCodings: CarePlanRelationshipCodingType;
//# sourceMappingURL=CarePlanRelationshipCodings.d.ts.map