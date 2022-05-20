// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: BiologicallyDerivedProduct

import * as fhir from '../fhir.js';

// @ts-ignore
import { ProcedureCodeCodings, ProcedureCodeCodingType,} from '../fhirValueSets/ProcedureCodeCodings.js';
// @ts-ignore
import { ProcedureCodeCodes,  ProcedureCodeCodeType } from '../fhirValueSets/ProcedureCodeCodes.js';
// @ts-ignore
import { ProductStorageScaleCodings, ProductStorageScaleCodingType,} from '../fhirValueSets/ProductStorageScaleCodings.js';
// @ts-ignore
import { ProductStorageScaleCodes,  ProductStorageScaleCodeType } from '../fhirValueSets/ProductStorageScaleCodes.js';
// @ts-ignore
import { ProductCategoryCodings, ProductCategoryCodingType,} from '../fhirValueSets/ProductCategoryCodings.js';
// @ts-ignore
import { ProductCategoryCodes,  ProductCategoryCodeType } from '../fhirValueSets/ProductCategoryCodes.js';
// @ts-ignore
import { ProductStatusCodings, ProductStatusCodingType,} from '../fhirValueSets/ProductStatusCodings.js';
// @ts-ignore
import { ProductStatusCodes,  ProductStatusCodeType } from '../fhirValueSets/ProductStatusCodes.js';
/**
 * Valid arguments for the BiologicallyDerivedProductCollection type.
 */
export interface BiologicallyDerivedProductCollectionArgs extends fhir.BackboneElementArgs {
  /**
   * Healthcare professional who is performing the collection.
   */
  collector?: fhir.ReferenceArgs|undefined;
  /**
   * The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.
   */
  source?: fhir.ReferenceArgs|undefined;
  /**
   * Time of product collection.
   */
  collected?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * Time of product collection.
   */
  collectedDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Time of product collection.
   */
  collectedPeriod?: fhir.PeriodArgs|undefined;
}

/**
 * How this product was collected.
 */
export class BiologicallyDerivedProductCollection extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'BiologicallyDerivedProductCollection';
  /**
   * Healthcare professional who is performing the collection.
   */
  public collector?: fhir.Reference|undefined;
  /**
   * The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.
   */
  public source?: fhir.Reference|undefined;
  /**
   * Time of product collection.
   */
  public collected?: (fhir.FhirDateTime|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element BiologicallyDerivedProduct.collection.collected[x]
   */
  protected static readonly _fts_collectedIsChoice:true = true;
  /**
   * Default constructor for BiologicallyDerivedProductCollection - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BiologicallyDerivedProductCollectionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['collector']) { this.collector = new fhir.Reference(source.collector); }
    if (source['source']) { this.source = new fhir.Reference(source.source); }
    if (source['collected']) { this.collected = source.collected; }
    else if (source['collectedDateTime']) { this.collected = new fhir.FhirDateTime({value: source.collectedDateTime}); }
    else if (source['collectedPeriod']) { this.collected = new fhir.Period(source.collectedPeriod); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["collector"]) { issues.push(...this.collector.doModelValidation()); }
    if (this["source"]) { issues.push(...this.source.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the BiologicallyDerivedProductProcessing type.
 */
export interface BiologicallyDerivedProductProcessingArgs extends fhir.BackboneElementArgs {
  /**
   * Description of of processing.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Procesing code.
   */
  procedure?: fhir.CodeableConceptArgs|undefined;
  /**
   * Substance added during processing.
   */
  additive?: fhir.ReferenceArgs|undefined;
  /**
   * Time of processing.
   */
  time?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * Time of processing.
   */
  timeDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Time of processing.
   */
  timePeriod?: fhir.PeriodArgs|undefined;
}

/**
 * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
 */
export class BiologicallyDerivedProductProcessing extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'BiologicallyDerivedProductProcessing';
  /**
   * Description of of processing.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Procesing code.
   */
  public procedure?: fhir.CodeableConcept|undefined;
  /**
   * Substance added during processing.
   */
  public additive?: fhir.Reference|undefined;
  /**
   * Time of processing.
   */
  public time?: (fhir.FhirDateTime|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element BiologicallyDerivedProduct.processing.time[x]
   */
  protected static readonly _fts_timeIsChoice:true = true;
  /**
   * Default constructor for BiologicallyDerivedProductProcessing - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BiologicallyDerivedProductProcessingArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['procedure']) { this.procedure = new fhir.CodeableConcept(source.procedure); }
    if (source['additive']) { this.additive = new fhir.Reference(source.additive); }
    if (source['time']) { this.time = source.time; }
    else if (source['timeDateTime']) { this.time = new fhir.FhirDateTime({value: source.timeDateTime}); }
    else if (source['timePeriod']) { this.time = new fhir.Period(source.timePeriod); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["description"]) { issues.push(...this.description.doModelValidation()); }
    if (this["procedure"]) { issues.push(...this.procedure.doModelValidation()); }
    if (this["additive"]) { issues.push(...this.additive.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the BiologicallyDerivedProductManipulation type.
 */
export interface BiologicallyDerivedProductManipulationArgs extends fhir.BackboneElementArgs {
  /**
   * Description of manipulation.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Time of manipulation.
   */
  time?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * Time of manipulation.
   */
  timeDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Time of manipulation.
   */
  timePeriod?: fhir.PeriodArgs|undefined;
}

/**
 * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
 */
export class BiologicallyDerivedProductManipulation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'BiologicallyDerivedProductManipulation';
  /**
   * Description of manipulation.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Time of manipulation.
   */
  public time?: (fhir.FhirDateTime|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element BiologicallyDerivedProduct.manipulation.time[x]
   */
  protected static readonly _fts_timeIsChoice:true = true;
  /**
   * Default constructor for BiologicallyDerivedProductManipulation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BiologicallyDerivedProductManipulationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['time']) { this.time = source.time; }
    else if (source['timeDateTime']) { this.time = new fhir.FhirDateTime({value: source.timeDateTime}); }
    else if (source['timePeriod']) { this.time = new fhir.Period(source.timePeriod); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["description"]) { issues.push(...this.description.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the BiologicallyDerivedProductStorage type.
 */
export interface BiologicallyDerivedProductStorageArgs extends fhir.BackboneElementArgs {
  /**
   * Description of storage.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Storage temperature.
   */
  temperature?: fhir.FhirDecimal|number|undefined;
  /**
   * Temperature scale used.
   */
  scale?: ProductStorageScaleCodeType|undefined;
  /**
   * Storage timeperiod.
   */
  duration?: fhir.PeriodArgs|undefined;
}

/**
 * Product storage.
 */
export class BiologicallyDerivedProductStorage extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'BiologicallyDerivedProductStorage';
  /**
   * Description of storage.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Storage temperature.
   */
  public temperature?: fhir.FhirDecimal|undefined;
  /**
   * Temperature scale used.
   */
  public scale?: ProductStorageScaleCodeType|undefined;
  /**
   * Storage timeperiod.
   */
  public duration?: fhir.Period|undefined;
  /**
   * Default constructor for BiologicallyDerivedProductStorage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BiologicallyDerivedProductStorageArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['temperature']) { this.temperature = new fhir.FhirDecimal({value: source.temperature}); }
    if (source['scale']) { this.scale = source.scale; }
    if (source['duration']) { this.duration = new fhir.Period(source.duration); }
  }
  /**
   * Required-bound Value Set for scale (BiologicallyDerivedProduct.storage.scale)
   */
  public static scaleRequiredCoding():ProductStorageScaleCodingType {
    return ProductStorageScaleCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["description"]) { issues.push(...this.description.doModelValidation()); }
    if (this["temperature"]) { issues.push(...this.temperature.doModelValidation()); }
    if (this["duration"]) { issues.push(...this.duration.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the BiologicallyDerivedProduct type.
 */
export interface BiologicallyDerivedProductArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "BiologicallyDerivedProduct"|undefined;
  /**
   * This records identifiers associated with this biologically derived product instance that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Broad category of this product.
   */
  productCategory?: ProductCategoryCodeType|undefined;
  /**
   * A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
   */
  productCode?: fhir.CodeableConceptArgs|undefined;
  /**
   * Whether the product is currently available.
   */
  status?: ProductStatusCodeType|undefined;
  /**
   * Procedure request to obtain this biologically derived product.
   */
  request?: fhir.ReferenceArgs[]|undefined;
  /**
   * Number of discrete units within this product.
   */
  quantity?: fhir.FhirInteger|number|undefined;
  /**
   * For products that have multiple collections. For example Peripheral Blood Stem Cells may be collected over several days from a single donor and the donation split into in multiple containers which must be linked to the parent donation.
   */
  parent?: fhir.ReferenceArgs[]|undefined;
  /**
   * How this product was collected.
   */
  collection?: fhir.BiologicallyDerivedProductCollectionArgs|undefined;
  /**
   * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
   */
  processing?: fhir.BiologicallyDerivedProductProcessingArgs[]|undefined;
  /**
   * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
   */
  manipulation?: fhir.BiologicallyDerivedProductManipulationArgs|undefined;
  /**
   * Product storage.
   */
  storage?: fhir.BiologicallyDerivedProductStorageArgs[]|undefined;
}

/**
 * A material substance originating from a biological entity intended to be transplanted or infused
 * into another (possibly the same) biological entity.
 */
export class BiologicallyDerivedProduct extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'BiologicallyDerivedProduct';
  /**
   * Resource Type Name
   */
  public override resourceType: "BiologicallyDerivedProduct";
  /**
   * This records identifiers associated with this biologically derived product instance that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   */
  public identifier?: fhir.Identifier[];
  /**
   * Broad category of this product.
   */
  public productCategory?: ProductCategoryCodeType|undefined;
  /**
   * A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
   */
  public productCode?: fhir.CodeableConcept|undefined;
  /**
   * Whether the product is currently available.
   */
  public status?: ProductStatusCodeType|undefined;
  /**
   * Procedure request to obtain this biologically derived product.
   */
  public request?: fhir.Reference[];
  /**
   * Number of discrete units within this product.
   */
  public quantity?: fhir.FhirInteger|undefined;
  /**
   * For products that have multiple collections. For example Peripheral Blood Stem Cells may be collected over several days from a single donor and the donation split into in multiple containers which must be linked to the parent donation.
   */
  public parent?: fhir.Reference[];
  /**
   * How this product was collected.
   */
  public collection?: fhir.BiologicallyDerivedProductCollection|undefined;
  /**
   * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
   */
  public processing?: fhir.BiologicallyDerivedProductProcessing[];
  /**
   * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
   */
  public manipulation?: fhir.BiologicallyDerivedProductManipulation|undefined;
  /**
   * Product storage.
   */
  public storage?: fhir.BiologicallyDerivedProductStorage[];
  /**
   * Default constructor for BiologicallyDerivedProduct - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BiologicallyDerivedProductArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'BiologicallyDerivedProduct';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['productCategory']) { this.productCategory = source.productCategory; }
    if (source['productCode']) { this.productCode = new fhir.CodeableConcept(source.productCode); }
    if (source['status']) { this.status = source.status; }
    if (source['request']) { this.request = source.request.map((x) => new fhir.Reference(x)); }
    else { this.request = []; }
    if (source['quantity']) { this.quantity = new fhir.FhirInteger({value: source.quantity}); }
    if (source['parent']) { this.parent = source.parent.map((x) => new fhir.Reference(x)); }
    else { this.parent = []; }
    if (source['collection']) { this.collection = new fhir.BiologicallyDerivedProductCollection(source.collection); }
    if (source['processing']) { this.processing = source.processing.map((x) => new fhir.BiologicallyDerivedProductProcessing(x)); }
    else { this.processing = []; }
    if (source['manipulation']) { this.manipulation = new fhir.BiologicallyDerivedProductManipulation(source.manipulation); }
    if (source['storage']) { this.storage = source.storage.map((x) => new fhir.BiologicallyDerivedProductStorage(x)); }
    else { this.storage = []; }
  }
  /**
   * Required-bound Value Set for productCategory (BiologicallyDerivedProduct.productCategory)
   */
  public static productCategoryRequiredCoding():ProductCategoryCodingType {
    return ProductCategoryCodings;
  }
  /**
   * Required-bound Value Set for status (BiologicallyDerivedProduct.status)
   */
  public static statusRequiredCoding():ProductStatusCodingType {
    return ProductStatusCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required',  diagnostics: 'Missing required property resourceType:"BiologicallyDerivedProduct" fhir: BiologicallyDerivedProduct.resourceType:"BiologicallyDerivedProduct"', });
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["productCode"]) { issues.push(...this.productCode.doModelValidation()); }
    if (this["request"]) { this.request.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["quantity"]) { issues.push(...this.quantity.doModelValidation()); }
    if (this["parent"]) { this.parent.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["collection"]) { issues.push(...this.collection.doModelValidation()); }
    if (this["processing"]) { this.processing.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["manipulation"]) { issues.push(...this.manipulation.doModelValidation()); }
    if (this["storage"]) { this.storage.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
