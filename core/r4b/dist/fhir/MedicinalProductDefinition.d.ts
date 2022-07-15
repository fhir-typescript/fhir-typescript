import * as fhir from '../fhir.js';
/**
 * Valid arguments for the MedicinalProductDefinitionContact type.
 */
export interface MedicinalProductDefinitionContactArgs extends fhir.BackboneElementArgs {
    /**
     * Allows the contact to be classified, for example QPPV, Pharmacovigilance Enquiry Information.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * A product specific contact, person (in a role), or an organization.
     */
    contact: fhir.ReferenceArgs | null;
}
/**
 * A product specific contact, person (in a role), or an organization.
 */
export declare class MedicinalProductDefinitionContact extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Allows the contact to be classified, for example QPPV, Pharmacovigilance Enquiry Information.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * A product specific contact, person (in a role), or an organization.
     */
    contact: fhir.Reference | null;
    /**
     * Default constructor for MedicinalProductDefinitionContact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductDefinitionContactArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductDefinitionNameNamePart type.
 */
export interface MedicinalProductDefinitionNameNamePartArgs extends fhir.BackboneElementArgs {
    /**
     * A fragment of a product name.
     */
    part: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductDefinition.name.namePart.part
     */
    _part?: fhir.FhirElementArgs;
    /**
     * Identifying type for this part of the name (e.g. strength part).
     */
    type: fhir.CodeableConceptArgs | null;
}
/**
 * Coding words or phrases of the name.
 */
export declare class MedicinalProductDefinitionNameNamePart extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A fragment of a product name.
     */
    part: fhir.FhirString | null;
    /**
     * Identifying type for this part of the name (e.g. strength part).
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for MedicinalProductDefinitionNameNamePart - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductDefinitionNameNamePartArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductDefinitionNameCountryLanguage type.
 */
export interface MedicinalProductDefinitionNameCountryLanguageArgs extends fhir.BackboneElementArgs {
    /**
     * Country code for where this name applies.
     */
    country: fhir.CodeableConceptArgs | null;
    /**
     * Jurisdiction code for where this name applies. A jurisdiction may be a sub- or supra-national entity (e.g. a state or a geographic region).
     */
    jurisdiction?: fhir.CodeableConceptArgs | undefined;
    /**
     * Language code for this name.
     */
    language: fhir.CodeableConceptArgs | null;
}
/**
 * Country and jurisdiction where the name applies, and associated language.
 */
export declare class MedicinalProductDefinitionNameCountryLanguage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Country code for where this name applies.
     */
    country: fhir.CodeableConcept | null;
    /**
     * Jurisdiction code for where this name applies. A jurisdiction may be a sub- or supra-national entity (e.g. a state or a geographic region).
     */
    jurisdiction?: fhir.CodeableConcept | undefined;
    /**
     * Language code for this name.
     */
    language: fhir.CodeableConcept | null;
    /**
     * Default constructor for MedicinalProductDefinitionNameCountryLanguage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductDefinitionNameCountryLanguageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductDefinitionName type.
 */
export interface MedicinalProductDefinitionNameArgs extends fhir.BackboneElementArgs {
    /**
     * The full product name.
     */
    productName: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductDefinition.name.productName
     */
    _productName?: fhir.FhirElementArgs;
    /**
     * Type of product name, such as rINN, BAN, Proprietary, Non-Proprietary.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Coding words or phrases of the name.
     */
    namePart?: fhir.MedicinalProductDefinitionNameNamePartArgs[] | undefined;
    /**
     * Country and jurisdiction where the name applies, and associated language.
     */
    countryLanguage?: fhir.MedicinalProductDefinitionNameCountryLanguageArgs[] | undefined;
}
/**
 * The product's name, including full name and possibly coded parts.
 */
export declare class MedicinalProductDefinitionName extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The full product name.
     */
    productName: fhir.FhirString | null;
    /**
     * Type of product name, such as rINN, BAN, Proprietary, Non-Proprietary.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Coding words or phrases of the name.
     */
    namePart: fhir.MedicinalProductDefinitionNameNamePart[];
    /**
     * Country and jurisdiction where the name applies, and associated language.
     */
    countryLanguage: fhir.MedicinalProductDefinitionNameCountryLanguage[];
    /**
     * Default constructor for MedicinalProductDefinitionName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductDefinitionNameArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductDefinitionCrossReference type.
 */
export interface MedicinalProductDefinitionCrossReferenceArgs extends fhir.BackboneElementArgs {
    /**
     * Reference to another product, e.g. for linking authorised to investigational product.
     */
    product: fhir.CodeableReferenceArgs | null;
    /**
     * The type of relationship, for instance branded to generic, virtual to actual product, product to development product (investigational), parallel import version.
     */
    type?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Reference to another product, e.g. for linking authorised to investigational product, or a virtual product.
 */
export declare class MedicinalProductDefinitionCrossReference extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Reference to another product, e.g. for linking authorised to investigational product.
     */
    product: fhir.CodeableReference | null;
    /**
     * The type of relationship, for instance branded to generic, virtual to actual product, product to development product (investigational), parallel import version.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductDefinitionCrossReference - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductDefinitionCrossReferenceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductDefinitionOperation type.
 */
export interface MedicinalProductDefinitionOperationArgs extends fhir.BackboneElementArgs {
    /**
     * The type of manufacturing operation e.g. manufacturing itself, re-packaging. For the authorization of this, a RegulatedAuthorization would point to the same plan or activity referenced here.
     */
    type?: fhir.CodeableReferenceArgs | undefined;
    /**
     * Date range of applicability.
     */
    effectiveDate?: fhir.PeriodArgs | undefined;
    /**
     * The organization or establishment responsible for (or associated with) the particular process or step, examples include the manufacturer, importer, agent.
     */
    organization?: fhir.ReferenceArgs[] | undefined;
    /**
     * Specifies whether this particular business or manufacturing process is considered proprietary or confidential.
     */
    confidentialityIndicator?: fhir.CodeableConceptArgs | undefined;
}
/**
 * A manufacturing or administrative process or step associated with (or performed on) the medicinal product.
 */
export declare class MedicinalProductDefinitionOperation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of manufacturing operation e.g. manufacturing itself, re-packaging. For the authorization of this, a RegulatedAuthorization would point to the same plan or activity referenced here.
     */
    type?: fhir.CodeableReference | undefined;
    /**
     * Date range of applicability.
     */
    effectiveDate?: fhir.Period | undefined;
    /**
     * The organization or establishment responsible for (or associated with) the particular process or step, examples include the manufacturer, importer, agent.
     */
    organization: fhir.Reference[];
    /**
     * Specifies whether this particular business or manufacturing process is considered proprietary or confidential.
     */
    confidentialityIndicator?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductDefinitionOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductDefinitionOperationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductDefinitionCharacteristic type.
 */
export interface MedicinalProductDefinitionCharacteristicArgs extends fhir.BackboneElementArgs {
    /**
     * A code expressing the type of characteristic.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * A value for the characteristic.
     */
    value?: fhir.CodeableConcept | fhir.Quantity | fhir.FhirDate | fhir.FhirBoolean | fhir.Attachment | undefined;
    /**
     * A value for the characteristic.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * A value for the characteristic.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * A value for the characteristic.
     */
    valueDate?: fhir.FhirDate | string | undefined;
    /**
     * A value for the characteristic.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * A value for the characteristic.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
}
/**
 * Allows the key product features to be recorded, such as "sugar free", "modified release", "parallel import".
 */
export declare class MedicinalProductDefinitionCharacteristic extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A code expressing the type of characteristic.
     */
    type: fhir.CodeableConcept | null;
    /**
     * A value for the characteristic.
     */
    value?: (fhir.CodeableConcept | fhir.Quantity | fhir.FhirDate | fhir.FhirBoolean | fhir.Attachment) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicinalProductDefinition.characteristic.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for MedicinalProductDefinitionCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductDefinitionCharacteristicArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductDefinition type.
 */
export interface MedicinalProductDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductDefinition" | undefined;
    /**
     * Business identifier for this product. Could be an MPID. When in development or being regulated, products are typically referenced by official identifiers, assigned by a manufacturer or regulator, and unique to a product (which, when compared to a product instance being prescribed, is actually a product type). See also MedicinalProductDefinition.code.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Regulatory type, e.g. Investigational or Authorized.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * If this medicine applies to human or veterinary uses.
     */
    domain?: fhir.CodeableConceptArgs | undefined;
    /**
     * A business identifier relating to a specific version of the product, this is commonly used to support revisions to an existing product.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductDefinition.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The status within the lifecycle of this product record. A high-level status, this is not intended to duplicate details carried elsewhere such as legal status, or authorization status.
     */
    status?: fhir.CodeableConceptArgs | undefined;
    /**
     * The date at which the given status became applicable.
     */
    statusDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductDefinition.statusDate
     */
    _statusDate?: fhir.FhirElementArgs;
    /**
     * General description of this product.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductDefinition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * The dose form for a single part product, or combined form of a multiple part product. This is one concept that describes all the components. It does not represent the form with components physically mixed, if that might be necessary, for which see (AdministrableProductDefinition.administrableDoseForm).
     */
    combinedPharmaceuticalDoseForm?: fhir.CodeableConceptArgs | undefined;
    /**
     * The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route. See also AdministrableProductDefinition resource. MedicinalProductDefinition.route is the same concept as AdministrableProductDefinition.routeOfAdministration.code, and they cannot be used together.
     */
    route?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Description of indication(s) for this product, used when structured indications are not required. In cases where structured indications are required, they are captured using the ClinicalUseDefinition resource. An indication is a medical situation for which using the product is appropriate.
     */
    indication?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductDefinition.indication
     */
    _indication?: fhir.FhirElementArgs;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhir.CodeableConceptArgs | undefined;
    /**
     * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons, such as heightened reporting requirements.
     */
    additionalMonitoringIndicator?: fhir.CodeableConceptArgs | undefined;
    /**
     * Whether the Medicinal Product is subject to special measures for regulatory reasons, such as a requirement to conduct post-authorisation studies.
     */
    specialMeasures?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * If authorised for use in children, or infants, neonates etc.
     */
    pediatricUseIndicator?: fhir.CodeableConceptArgs | undefined;
    /**
     * Allows the product to be classified by various systems, commonly WHO ATC.
     */
    classification?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Marketing status of the medicinal product, in contrast to marketing authorization. This refers to the product being actually 'on the market' as opposed to being allowed to be on the market (which is an authorization).
     */
    marketingStatus?: fhir.MarketingStatusArgs[] | undefined;
    /**
     * Package type for the product. See also the PackagedProductDefinition resource.
     */
    packagedMedicinalProduct?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The ingredients of this medicinal product - when not detailed in other resources. This is only needed if the ingredients are not specified by incoming references from the Ingredient resource, or indirectly via incoming AdministrableProductDefinition, PackagedProductDefinition or ManufacturedItemDefinition references. In cases where those levels of detail are not used, the ingredients may be specified directly here as codes.
     */
    ingredient?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Any component of the drug product which is not the chemical entity defined as the drug substance, or an excipient in the drug product. This includes process-related impurities and contaminants, product-related impurities including degradation products.
     */
    impurity?: fhir.CodeableReferenceArgs[] | undefined;
    /**
     * Additional information or supporting documentation about the medicinal product.
     */
    attachedDocument?: fhir.ReferenceArgs[] | undefined;
    /**
     * A master file for the medicinal product (e.g. Pharmacovigilance System Master File). Drug master files (DMFs) are documents submitted to regulatory agencies to provide confidential detailed information about facilities, processes or articles used in the manufacturing, processing, packaging and storing of drug products.
     */
    masterFile?: fhir.ReferenceArgs[] | undefined;
    /**
     * A product specific contact, person (in a role), or an organization.
     */
    contact?: fhir.MedicinalProductDefinitionContactArgs[] | undefined;
    /**
     * Clinical trials or studies that this product is involved in.
     */
    clinicalTrial?: fhir.ReferenceArgs[] | undefined;
    /**
     * A code that this product is known by, usually within some formal terminology, perhaps assigned by a third party (i.e. not the manufacturer or regulator). Products (types of medications) tend to be known by identifiers during development and within regulatory process. However when they are prescribed they tend to be identified by codes. The same product may be have multiple codes, applied to it by multiple organizations.
     */
    code?: fhir.CodingArgs[] | undefined;
    /**
     * The product's name, including full name and possibly coded parts.
     */
    name: fhir.MedicinalProductDefinitionNameArgs[] | null;
    /**
     * Reference to another product, e.g. for linking authorised to investigational product, or a virtual product.
     */
    crossReference?: fhir.MedicinalProductDefinitionCrossReferenceArgs[] | undefined;
    /**
     * A manufacturing or administrative process or step associated with (or performed on) the medicinal product.
     */
    operation?: fhir.MedicinalProductDefinitionOperationArgs[] | undefined;
    /**
     * Allows the key product features to be recorded, such as "sugar free", "modified release", "parallel import".
     */
    characteristic?: fhir.MedicinalProductDefinitionCharacteristicArgs[] | undefined;
}
/**
 * A medicinal product, being a substance or combination of substances that is intended to treat, prevent or diagnose a disease, or to restore, correct or modify physiological functions by exerting a pharmacological, immunological or metabolic action. This resource is intended to define and detail such products and their properties, for uses other than direct patient care (e.g. regulatory use, or drug catalogs).
 */
export declare class MedicinalProductDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductDefinition";
    /**
     * Business identifier for this product. Could be an MPID. When in development or being regulated, products are typically referenced by official identifiers, assigned by a manufacturer or regulator, and unique to a product (which, when compared to a product instance being prescribed, is actually a product type). See also MedicinalProductDefinition.code.
     */
    identifier: fhir.Identifier[];
    /**
     * Regulatory type, e.g. Investigational or Authorized.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * If this medicine applies to human or veterinary uses.
     */
    domain?: fhir.CodeableConcept | undefined;
    /**
     * A business identifier relating to a specific version of the product, this is commonly used to support revisions to an existing product.
     */
    version?: fhir.FhirString | undefined;
    /**
     * The status within the lifecycle of this product record. A high-level status, this is not intended to duplicate details carried elsewhere such as legal status, or authorization status.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * The date at which the given status became applicable.
     */
    statusDate?: fhir.FhirDateTime | undefined;
    /**
     * General description of this product.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * The dose form for a single part product, or combined form of a multiple part product. This is one concept that describes all the components. It does not represent the form with components physically mixed, if that might be necessary, for which see (AdministrableProductDefinition.administrableDoseForm).
     */
    combinedPharmaceuticalDoseForm?: fhir.CodeableConcept | undefined;
    /**
     * The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route. See also AdministrableProductDefinition resource. MedicinalProductDefinition.route is the same concept as AdministrableProductDefinition.routeOfAdministration.code, and they cannot be used together.
     */
    route: fhir.CodeableConcept[];
    /**
     * Description of indication(s) for this product, used when structured indications are not required. In cases where structured indications are required, they are captured using the ClinicalUseDefinition resource. An indication is a medical situation for which using the product is appropriate.
     */
    indication?: fhir.FhirMarkdown | undefined;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhir.CodeableConcept | undefined;
    /**
     * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons, such as heightened reporting requirements.
     */
    additionalMonitoringIndicator?: fhir.CodeableConcept | undefined;
    /**
     * Whether the Medicinal Product is subject to special measures for regulatory reasons, such as a requirement to conduct post-authorisation studies.
     */
    specialMeasures: fhir.CodeableConcept[];
    /**
     * If authorised for use in children, or infants, neonates etc.
     */
    pediatricUseIndicator?: fhir.CodeableConcept | undefined;
    /**
     * Allows the product to be classified by various systems, commonly WHO ATC.
     */
    classification: fhir.CodeableConcept[];
    /**
     * Marketing status of the medicinal product, in contrast to marketing authorization. This refers to the product being actually 'on the market' as opposed to being allowed to be on the market (which is an authorization).
     */
    marketingStatus: fhir.MarketingStatus[];
    /**
     * Package type for the product. See also the PackagedProductDefinition resource.
     */
    packagedMedicinalProduct: fhir.CodeableConcept[];
    /**
     * The ingredients of this medicinal product - when not detailed in other resources. This is only needed if the ingredients are not specified by incoming references from the Ingredient resource, or indirectly via incoming AdministrableProductDefinition, PackagedProductDefinition or ManufacturedItemDefinition references. In cases where those levels of detail are not used, the ingredients may be specified directly here as codes.
     */
    ingredient: fhir.CodeableConcept[];
    /**
     * Any component of the drug product which is not the chemical entity defined as the drug substance, or an excipient in the drug product. This includes process-related impurities and contaminants, product-related impurities including degradation products.
     */
    impurity: fhir.CodeableReference[];
    /**
     * Additional information or supporting documentation about the medicinal product.
     */
    attachedDocument: fhir.Reference[];
    /**
     * A master file for the medicinal product (e.g. Pharmacovigilance System Master File). Drug master files (DMFs) are documents submitted to regulatory agencies to provide confidential detailed information about facilities, processes or articles used in the manufacturing, processing, packaging and storing of drug products.
     */
    masterFile: fhir.Reference[];
    /**
     * A product specific contact, person (in a role), or an organization.
     */
    contact: fhir.MedicinalProductDefinitionContact[];
    /**
     * Clinical trials or studies that this product is involved in.
     */
    clinicalTrial: fhir.Reference[];
    /**
     * A code that this product is known by, usually within some formal terminology, perhaps assigned by a third party (i.e. not the manufacturer or regulator). Products (types of medications) tend to be known by identifiers during development and within regulatory process. However when they are prescribed they tend to be identified by codes. The same product may be have multiple codes, applied to it by multiple organizations.
     */
    code: fhir.Coding[];
    /**
     * The product's name, including full name and possibly coded parts.
     */
    name: fhir.MedicinalProductDefinitionName[];
    /**
     * Reference to another product, e.g. for linking authorised to investigational product, or a virtual product.
     */
    crossReference: fhir.MedicinalProductDefinitionCrossReference[];
    /**
     * A manufacturing or administrative process or step associated with (or performed on) the medicinal product.
     */
    operation: fhir.MedicinalProductDefinitionOperation[];
    /**
     * Allows the key product features to be recorded, such as "sugar free", "modified release", "parallel import".
     */
    characteristic: fhir.MedicinalProductDefinitionCharacteristic[];
    /**
     * Default constructor for MedicinalProductDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=MedicinalProductDefinition.d.ts.map