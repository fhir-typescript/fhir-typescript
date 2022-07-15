/**
 * The way in which this manufacturer is associated with the ingredient. For example whether it is a possible one (others allowed), or an exclusive authorized one for this ingredient. Note that this is not the manufacturing process role.
 */
export declare const IngredientManufacturerRoleCodes: {
    /**
     * Code: actual
     */
    readonly ManufacturerActuallyMakesThisParticularIngredient: "actual";
    /**
     * Code: allowed
     */
    readonly ManufacturerIsSpecificallyAllowedForThisIngredient: "allowed";
    /**
     * Code: possible
     */
    readonly ManufacturerIsKnownToMakeThisIngredientInGeneral: "possible";
};
/**
 * The way in which this manufacturer is associated with the ingredient. For example whether it is a possible one (others allowed), or an exclusive authorized one for this ingredient. Note that this is not the manufacturing process role.
 */
export declare type IngredientManufacturerRoleCodeType = typeof IngredientManufacturerRoleCodes[keyof typeof IngredientManufacturerRoleCodes];
//# sourceMappingURL=IngredientManufacturerRoleCodes.d.ts.map