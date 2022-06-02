import * as fhir from '../fhir.js';
import { ProductStorageScaleCodeType } from '../fhirValueSets/ProductStorageScaleCodes.js';
import { ProductCategoryCodeType } from '../fhirValueSets/ProductCategoryCodes.js';
import { ProductStatusCodeType } from '../fhirValueSets/ProductStatusCodes.js';
/**
 * Valid arguments for the BiologicallyDerivedProductCollection type.
 */
export interface BiologicallyDerivedProductCollectionArgs extends fhir.BackboneElementArgs {
    /**
     * Healthcare professional who is performing the collection.
     */
    collector?: fhir.ReferenceArgs | undefined;
    /**
     * The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.
     */
    source?: fhir.ReferenceArgs | undefined;
    /**
     * Time of product collection.
     */
    collected?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * Time of product collection.
     */
    collectedDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Time of product collection.
     */
    collectedPeriod?: fhir.PeriodArgs | undefined;
}
/**
 * How this product was collected.
 */
export declare class BiologicallyDerivedProductCollection extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Healthcare professional who is performing the collection.
     */
    collector?: fhir.Reference | undefined;
    /**
     * The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.
     */
    source?: fhir.Reference | undefined;
    /**
     * Time of product collection.
     */
    collected?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element BiologicallyDerivedProduct.collection.collected[x]
     */
    protected static readonly _fts_collectedIsChoice: true;
    /**
     * Default constructor for BiologicallyDerivedProductCollection - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BiologicallyDerivedProductCollectionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the BiologicallyDerivedProductProcessing type.
 */
export interface BiologicallyDerivedProductProcessingArgs extends fhir.BackboneElementArgs {
    /**
     * Description of of processing.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.processing.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Procesing code.
     */
    procedure?: fhir.CodeableConceptArgs | undefined;
    /**
     * Substance added during processing.
     */
    additive?: fhir.ReferenceArgs | undefined;
    /**
     * Time of processing.
     */
    time?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * Time of processing.
     */
    timeDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Time of processing.
     */
    timePeriod?: fhir.PeriodArgs | undefined;
}
/**
 * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
 */
export declare class BiologicallyDerivedProductProcessing extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Description of of processing.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Procesing code.
     */
    procedure?: fhir.CodeableConcept | undefined;
    /**
     * Substance added during processing.
     */
    additive?: fhir.Reference | undefined;
    /**
     * Time of processing.
     */
    time?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element BiologicallyDerivedProduct.processing.time[x]
     */
    protected static readonly _fts_timeIsChoice: true;
    /**
     * Default constructor for BiologicallyDerivedProductProcessing - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BiologicallyDerivedProductProcessingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the BiologicallyDerivedProductManipulation type.
 */
export interface BiologicallyDerivedProductManipulationArgs extends fhir.BackboneElementArgs {
    /**
     * Description of manipulation.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.manipulation.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Time of manipulation.
     */
    time?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * Time of manipulation.
     */
    timeDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Time of manipulation.
     */
    timePeriod?: fhir.PeriodArgs | undefined;
}
/**
 * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
 */
export declare class BiologicallyDerivedProductManipulation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Description of manipulation.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Time of manipulation.
     */
    time?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element BiologicallyDerivedProduct.manipulation.time[x]
     */
    protected static readonly _fts_timeIsChoice: true;
    /**
     * Default constructor for BiologicallyDerivedProductManipulation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BiologicallyDerivedProductManipulationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the BiologicallyDerivedProductStorage type.
 */
export interface BiologicallyDerivedProductStorageArgs extends fhir.BackboneElementArgs {
    /**
     * Description of storage.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.storage.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Storage temperature.
     */
    temperature?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.storage.temperature
     */
    _temperature?: fhir.FhirElementArgs;
    /**
     * Temperature scale used.
     */
    scale?: fhir.FhirCode<ProductStorageScaleCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.storage.scale
     */
    _scale?: fhir.FhirElementArgs;
    /**
     * Storage timeperiod.
     */
    duration?: fhir.PeriodArgs | undefined;
}
/**
 * Product storage.
 */
export declare class BiologicallyDerivedProductStorage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Description of storage.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Storage temperature.
     */
    temperature?: fhir.FhirDecimal | undefined;
    /**
     * Temperature scale used.
     */
    scale?: fhir.FhirCode<ProductStorageScaleCodeType> | undefined;
    /**
     * Storage timeperiod.
     */
    duration?: fhir.Period | undefined;
    /**
     * Default constructor for BiologicallyDerivedProductStorage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BiologicallyDerivedProductStorageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for scale (BiologicallyDerivedProduct.storage.scale)
     */
    static get scaleRequiredCodes(): {
        readonly Celsius: "celsius";
        readonly Fahrenheit: "farenheit";
        readonly Kelvin: "kelvin";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the BiologicallyDerivedProduct type.
 */
export interface BiologicallyDerivedProductArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "BiologicallyDerivedProduct" | undefined;
    /**
     * This records identifiers associated with this biologically derived product instance that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Broad category of this product.
     */
    productCategory?: fhir.FhirCode<ProductCategoryCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.productCategory
     */
    _productCategory?: fhir.FhirElementArgs;
    /**
     * A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
     */
    productCode?: fhir.CodeableConceptArgs | undefined;
    /**
     * Whether the product is currently available.
     */
    status?: fhir.FhirCode<ProductStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Procedure request to obtain this biologically derived product.
     */
    request?: fhir.ReferenceArgs[] | undefined;
    /**
     * Number of discrete units within this product.
     */
    quantity?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.quantity
     */
    _quantity?: fhir.FhirElementArgs;
    /**
     * For products that have multiple collections. For example Peripheral Blood Stem Cells may be collected over several days from a single donor and the donation split into in multiple containers which must be linked to the parent donation.
     */
    parent?: fhir.ReferenceArgs[] | undefined;
    /**
     * How this product was collected.
     */
    collection?: fhir.BiologicallyDerivedProductCollectionArgs | undefined;
    /**
     * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
     */
    processing?: fhir.BiologicallyDerivedProductProcessingArgs[] | undefined;
    /**
     * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
     */
    manipulation?: fhir.BiologicallyDerivedProductManipulationArgs | undefined;
    /**
     * Product storage.
     */
    storage?: fhir.BiologicallyDerivedProductStorageArgs[] | undefined;
}
/**
 * A material substance originating from a biological entity intended to be transplanted or infused
 * into another (possibly the same) biological entity.
 */
export declare class BiologicallyDerivedProduct extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "BiologicallyDerivedProduct";
    /**
     * This records identifiers associated with this biologically derived product instance that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier: fhir.Identifier[];
    /**
     * Broad category of this product.
     */
    productCategory?: fhir.FhirCode<ProductCategoryCodeType> | undefined;
    /**
     * A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
     */
    productCode?: fhir.CodeableConcept | undefined;
    /**
     * Whether the product is currently available.
     */
    status?: fhir.FhirCode<ProductStatusCodeType> | undefined;
    /**
     * Procedure request to obtain this biologically derived product.
     */
    request: fhir.Reference[];
    /**
     * Number of discrete units within this product.
     */
    quantity?: fhir.FhirInteger | undefined;
    /**
     * For products that have multiple collections. For example Peripheral Blood Stem Cells may be collected over several days from a single donor and the donation split into in multiple containers which must be linked to the parent donation.
     */
    parent: fhir.Reference[];
    /**
     * How this product was collected.
     */
    collection?: fhir.BiologicallyDerivedProductCollection | undefined;
    /**
     * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
     */
    processing: fhir.BiologicallyDerivedProductProcessing[];
    /**
     * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
     */
    manipulation?: fhir.BiologicallyDerivedProductManipulation | undefined;
    /**
     * Product storage.
     */
    storage: fhir.BiologicallyDerivedProductStorage[];
    /**
     * Default constructor for BiologicallyDerivedProduct - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BiologicallyDerivedProductArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for productCategory (BiologicallyDerivedProduct.productCategory)
     */
    static get productCategoryRequiredCodes(): {
        readonly BiologicalAgent: "biologicalAgent";
        readonly Cells: "cells";
        readonly Fluid: "fluid";
        readonly Organ: "organ";
        readonly Tissue: "tissue";
    };
    /**
     * Required-bound Value Set for status (BiologicallyDerivedProduct.status)
     */
    static get statusRequiredCodes(): {
        readonly Available: "available";
        readonly Unavailable: "unavailable";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=BiologicallyDerivedProduct.d.ts.map