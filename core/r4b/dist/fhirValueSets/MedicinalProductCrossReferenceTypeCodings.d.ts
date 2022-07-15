import { CodingArgs } from '../fhir/Coding.js';
/**
 * Relationship to another Medicinal Product.
 */
export declare type MedicinalProductCrossReferenceTypeCodingType = {
    /**
     * ActualProduct: Link Virtual to Actual Product
     */
    LinkVirtualToActualProduct: CodingArgs;
    /**
     * BrandedProduct: Link Generic to Branded Product
     */
    LinkGenericToBrandedProduct: CodingArgs;
    /**
     * GenericProduct: Link Branded to Generic Product
     */
    LinkBrandedToGenericProduct: CodingArgs;
    /**
     * InvestigationalProduct: Link to Investigational (Development) Product
     */
    LinkToInvestigationalProduct: CodingArgs;
    /**
     * Parallel: Link to Parallel Import Product
     */
    LinkToParallelImportProduct: CodingArgs;
    /**
     * VirtualProduct: Link Actual to Virtual Product
     */
    LinkActualToVirtualProduct: CodingArgs;
};
/**
 * Relationship to another Medicinal Product.
 */
export declare const MedicinalProductCrossReferenceTypeCodings: MedicinalProductCrossReferenceTypeCodingType;
//# sourceMappingURL=MedicinalProductCrossReferenceTypeCodings.d.ts.map