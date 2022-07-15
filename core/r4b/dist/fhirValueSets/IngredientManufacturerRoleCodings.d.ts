import { CodingArgs } from '../fhir/Coding.js';
/**
 * The way in which this manufacturer is associated with the ingredient. For example whether it is a possible one (others allowed), or an exclusive authorized one for this ingredient. Note that this is not the manufacturing process role.
 */
export declare type IngredientManufacturerRoleCodingType = {
    /**
     * Code: actual
     */
    ManufacturerActuallyMakesThisParticularIngredient: CodingArgs;
    /**
     * Code: allowed
     */
    ManufacturerIsSpecificallyAllowedForThisIngredient: CodingArgs;
    /**
     * Code: possible
     */
    ManufacturerIsKnownToMakeThisIngredientInGeneral: CodingArgs;
};
/**
 * The way in which this manufacturer is associated with the ingredient. For example whether it is a possible one (others allowed), or an exclusive authorized one for this ingredient. Note that this is not the manufacturing process role.
 */
export declare const IngredientManufacturerRoleCodings: IngredientManufacturerRoleCodingType;
//# sourceMappingURL=IngredientManufacturerRoleCodings.d.ts.map