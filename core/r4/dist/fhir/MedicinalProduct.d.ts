import * as fhir from '../fhir.js';
/**
 * Valid arguments for the MedicinalProductNameNamePart type.
 */
export interface MedicinalProductNameNamePartArgs extends fhir.BackboneElementArgs {
    /**
     * A fragment of a product name.
     */
    part: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProduct.name.namePart.part
     */
    _part?: fhir.FhirElementArgs;
    /**
     * Idenifying type for this part of the name (e.g. strength part).
     */
    type: fhir.CodingArgs | null;
}
/**
 * Coding words or phrases of the name.
 */
export declare class MedicinalProductNameNamePart extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A fragment of a product name.
     */
    part: fhir.FhirString | null;
    /**
     * Idenifying type for this part of the name (e.g. strength part).
     */
    type: fhir.Coding | null;
    /**
     * Default constructor for MedicinalProductNameNamePart - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductNameNamePartArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductNameCountryLanguage type.
 */
export interface MedicinalProductNameCountryLanguageArgs extends fhir.BackboneElementArgs {
    /**
     * Country code for where this name applies.
     */
    country: fhir.CodeableConceptArgs | null;
    /**
     * Jurisdiction code for where this name applies.
     */
    jurisdiction?: fhir.CodeableConceptArgs | undefined;
    /**
     * Language code for this name.
     */
    language: fhir.CodeableConceptArgs | null;
}
/**
 * Country where the name applies.
 */
export declare class MedicinalProductNameCountryLanguage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Country code for where this name applies.
     */
    country: fhir.CodeableConcept | null;
    /**
     * Jurisdiction code for where this name applies.
     */
    jurisdiction?: fhir.CodeableConcept | undefined;
    /**
     * Language code for this name.
     */
    language: fhir.CodeableConcept | null;
    /**
     * Default constructor for MedicinalProductNameCountryLanguage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductNameCountryLanguageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductName type.
 */
export interface MedicinalProductNameArgs extends fhir.BackboneElementArgs {
    /**
     * The full product name.
     */
    productName: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProduct.name.productName
     */
    _productName?: fhir.FhirElementArgs;
    /**
     * Coding words or phrases of the name.
     */
    namePart?: fhir.MedicinalProductNameNamePartArgs[] | undefined;
    /**
     * Country where the name applies.
     */
    countryLanguage?: fhir.MedicinalProductNameCountryLanguageArgs[] | undefined;
}
/**
 * The product's name, including full name and possibly coded parts.
 */
export declare class MedicinalProductName extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The full product name.
     */
    productName: fhir.FhirString | null;
    /**
     * Coding words or phrases of the name.
     */
    namePart: fhir.MedicinalProductNameNamePart[];
    /**
     * Country where the name applies.
     */
    countryLanguage: fhir.MedicinalProductNameCountryLanguage[];
    /**
     * Default constructor for MedicinalProductName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductNameArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductManufacturingBusinessOperation type.
 */
export interface MedicinalProductManufacturingBusinessOperationArgs extends fhir.BackboneElementArgs {
    /**
     * The type of manufacturing operation.
     */
    operationType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Regulatory authorization reference number.
     */
    authorisationReferenceNumber?: fhir.IdentifierArgs | undefined;
    /**
     * Regulatory authorization date.
     */
    effectiveDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProduct.manufacturingBusinessOperation.effectiveDate
     */
    _effectiveDate?: fhir.FhirElementArgs;
    /**
     * To indicate if this proces is commercially confidential.
     */
    confidentialityIndicator?: fhir.CodeableConceptArgs | undefined;
    /**
     * The manufacturer or establishment associated with the process.
     */
    manufacturer?: fhir.ReferenceArgs[] | undefined;
    /**
     * A regulator which oversees the operation.
     */
    regulator?: fhir.ReferenceArgs | undefined;
}
/**
 * An operation applied to the product, for manufacturing or adminsitrative purpose.
 */
export declare class MedicinalProductManufacturingBusinessOperation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of manufacturing operation.
     */
    operationType?: fhir.CodeableConcept | undefined;
    /**
     * Regulatory authorization reference number.
     */
    authorisationReferenceNumber?: fhir.Identifier | undefined;
    /**
     * Regulatory authorization date.
     */
    effectiveDate?: fhir.FhirDateTime | undefined;
    /**
     * To indicate if this proces is commercially confidential.
     */
    confidentialityIndicator?: fhir.CodeableConcept | undefined;
    /**
     * The manufacturer or establishment associated with the process.
     */
    manufacturer: fhir.Reference[];
    /**
     * A regulator which oversees the operation.
     */
    regulator?: fhir.Reference | undefined;
    /**
     * Default constructor for MedicinalProductManufacturingBusinessOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductManufacturingBusinessOperationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductSpecialDesignation type.
 */
export interface MedicinalProductSpecialDesignationArgs extends fhir.BackboneElementArgs {
    /**
     * Identifier for the designation, or procedure number.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The type of special designation, e.g. orphan drug, minor use.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The intended use of the product, e.g. prevention, treatment.
     */
    intendedUse?: fhir.CodeableConceptArgs | undefined;
    /**
     * Condition for which the medicinal use applies.
     */
    indication?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Condition for which the medicinal use applies.
     */
    indicationCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Condition for which the medicinal use applies.
     */
    indicationReference?: fhir.ReferenceArgs | undefined;
    /**
     * For example granted, pending, expired or withdrawn.
     */
    status?: fhir.CodeableConceptArgs | undefined;
    /**
     * Date when the designation was granted.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProduct.specialDesignation.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Animal species for which this applies.
     */
    species?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
 */
export declare class MedicinalProductSpecialDesignation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identifier for the designation, or procedure number.
     */
    identifier: fhir.Identifier[];
    /**
     * The type of special designation, e.g. orphan drug, minor use.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The intended use of the product, e.g. prevention, treatment.
     */
    intendedUse?: fhir.CodeableConcept | undefined;
    /**
     * Condition for which the medicinal use applies.
     */
    indication?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicinalProduct.specialDesignation.indication[x]
     */
    protected static readonly _fts_indicationIsChoice: true;
    /**
     * For example granted, pending, expired or withdrawn.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * Date when the designation was granted.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Animal species for which this applies.
     */
    species?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductSpecialDesignation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductSpecialDesignationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProduct type.
 */
export interface MedicinalProductArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProduct" | undefined;
    /**
     * Business identifier for this product. Could be an MPID.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Regulatory type, e.g. Investigational or Authorized.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * If this medicine applies to human or veterinary uses.
     */
    domain?: fhir.CodingArgs | undefined;
    /**
     * The dose form for a single part product, or combined form of a multiple part product.
     */
    combinedPharmaceuticalDoseForm?: fhir.CodeableConceptArgs | undefined;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhir.CodeableConceptArgs | undefined;
    /**
     * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
     */
    additionalMonitoringIndicator?: fhir.CodeableConceptArgs | undefined;
    /**
     * Whether the Medicinal Product is subject to special measures for regulatory reasons.
     */
    specialMeasures?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: MedicinalProduct.specialMeasures
     */
    _specialMeasures?: (fhir.FhirElementArgs | null)[];
    /**
     * If authorised for use in children.
     */
    paediatricUseIndicator?: fhir.CodeableConceptArgs | undefined;
    /**
     * Allows the product to be classified by various systems.
     */
    productClassification?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Marketing status of the medicinal product, in contrast to marketing authorizaton.
     */
    marketingStatus?: fhir.MarketingStatusArgs[] | undefined;
    /**
     * Pharmaceutical aspects of product.
     */
    pharmaceuticalProduct?: fhir.ReferenceArgs[] | undefined;
    /**
     * Package representation for the product.
     */
    packagedMedicinalProduct?: fhir.ReferenceArgs[] | undefined;
    /**
     * Supporting documentation, typically for regulatory submission.
     */
    attachedDocument?: fhir.ReferenceArgs[] | undefined;
    /**
     * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
     */
    masterFile?: fhir.ReferenceArgs[] | undefined;
    /**
     * A product specific contact, person (in a role), or an organization.
     */
    contact?: fhir.ReferenceArgs[] | undefined;
    /**
     * Clinical trials or studies that this product is involved in.
     */
    clinicalTrial?: fhir.ReferenceArgs[] | undefined;
    /**
     * The product's name, including full name and possibly coded parts.
     */
    name: fhir.MedicinalProductNameArgs[] | null;
    /**
     * Reference to another product, e.g. for linking authorised to investigational product.
     */
    crossReference?: fhir.IdentifierArgs[] | undefined;
    /**
     * An operation applied to the product, for manufacturing or adminsitrative purpose.
     */
    manufacturingBusinessOperation?: fhir.MedicinalProductManufacturingBusinessOperationArgs[] | undefined;
    /**
     * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
     */
    specialDesignation?: fhir.MedicinalProductSpecialDesignationArgs[] | undefined;
}
/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
export declare class MedicinalProduct extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProduct";
    /**
     * Business identifier for this product. Could be an MPID.
     */
    identifier: fhir.Identifier[];
    /**
     * Regulatory type, e.g. Investigational or Authorized.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * If this medicine applies to human or veterinary uses.
     */
    domain?: fhir.Coding | undefined;
    /**
     * The dose form for a single part product, or combined form of a multiple part product.
     */
    combinedPharmaceuticalDoseForm?: fhir.CodeableConcept | undefined;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhir.CodeableConcept | undefined;
    /**
     * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
     */
    additionalMonitoringIndicator?: fhir.CodeableConcept | undefined;
    /**
     * Whether the Medicinal Product is subject to special measures for regulatory reasons.
     */
    specialMeasures: fhir.FhirString[];
    /**
     * If authorised for use in children.
     */
    paediatricUseIndicator?: fhir.CodeableConcept | undefined;
    /**
     * Allows the product to be classified by various systems.
     */
    productClassification: fhir.CodeableConcept[];
    /**
     * Marketing status of the medicinal product, in contrast to marketing authorizaton.
     */
    marketingStatus: fhir.MarketingStatus[];
    /**
     * Pharmaceutical aspects of product.
     */
    pharmaceuticalProduct: fhir.Reference[];
    /**
     * Package representation for the product.
     */
    packagedMedicinalProduct: fhir.Reference[];
    /**
     * Supporting documentation, typically for regulatory submission.
     */
    attachedDocument: fhir.Reference[];
    /**
     * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
     */
    masterFile: fhir.Reference[];
    /**
     * A product specific contact, person (in a role), or an organization.
     */
    contact: fhir.Reference[];
    /**
     * Clinical trials or studies that this product is involved in.
     */
    clinicalTrial: fhir.Reference[];
    /**
     * The product's name, including full name and possibly coded parts.
     */
    name: fhir.MedicinalProductName[];
    /**
     * Reference to another product, e.g. for linking authorised to investigational product.
     */
    crossReference: fhir.Identifier[];
    /**
     * An operation applied to the product, for manufacturing or adminsitrative purpose.
     */
    manufacturingBusinessOperation: fhir.MedicinalProductManufacturingBusinessOperation[];
    /**
     * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
     */
    specialDesignation: fhir.MedicinalProductSpecialDesignation[];
    /**
     * Default constructor for MedicinalProduct - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=MedicinalProduct.d.ts.map