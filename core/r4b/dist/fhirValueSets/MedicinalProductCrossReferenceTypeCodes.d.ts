/**
 * Relationship to another Medicinal Product.
 */
export declare const MedicinalProductCrossReferenceTypeCodes: {
    /**
     * ActualProduct: Link Virtual to Actual Product
     */
    readonly LinkVirtualToActualProduct: "ActualProduct";
    /**
     * BrandedProduct: Link Generic to Branded Product
     */
    readonly LinkGenericToBrandedProduct: "BrandedProduct";
    /**
     * GenericProduct: Link Branded to Generic Product
     */
    readonly LinkBrandedToGenericProduct: "GenericProduct";
    /**
     * InvestigationalProduct: Link to Investigational (Development) Product
     */
    readonly LinkToInvestigationalProduct: "InvestigationalProduct";
    /**
     * Parallel: Link to Parallel Import Product
     */
    readonly LinkToParallelImportProduct: "Parallel";
    /**
     * VirtualProduct: Link Actual to Virtual Product
     */
    readonly LinkActualToVirtualProduct: "VirtualProduct";
};
/**
 * Relationship to another Medicinal Product.
 */
export declare type MedicinalProductCrossReferenceTypeCodeType = typeof MedicinalProductCrossReferenceTypeCodes[keyof typeof MedicinalProductCrossReferenceTypeCodes];
//# sourceMappingURL=MedicinalProductCrossReferenceTypeCodes.d.ts.map