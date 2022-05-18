// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MedicinalProduct

import * as fhir from '../fhir.js';

// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the MedicinalProductNameNamePart type.
 */
export interface MedicinalProductNameNamePartArgs extends fhir.BackboneElementArgs {
  /**
   * A fragment of a product name.
   */
  part: fhir.FhirString|string|undefined;
  /**
   * Idenifying type for this part of the name (e.g. strength part).
   */
  type: fhir.CodingArgs|null;
}

/**
 * Coding words or phrases of the name.
 */
export class MedicinalProductNameNamePart extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'MedicinalProductNameNamePart';
  /**
   * A fragment of a product name.
   */
  public part: fhir.FhirString|null;
  /**
   * Idenifying type for this part of the name (e.g. strength part).
   */
  public type: fhir.Coding|null;
  /**
   * Default constructor for MedicinalProductNameNamePart - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductNameNamePartArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['part']) { this.part = new fhir.FhirString({value: source.part}); }
    else { this.part = null; }
    if (source['type']) { this.type = new fhir.Coding(source.type); }
    else { this.type = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['part']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property part:fhir.FhirString fhir: MedicinalProduct.name.namePart.part:string', }));
    }
    if (this["part"]) { outcome.issue!.push(...this.part.doModelValidation().issue!); }
    if (!this['type']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property type:fhir.Coding fhir: MedicinalProduct.name.namePart.type:Coding', }));
    }
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    return outcome;
  }
}
/**
 * Valid arguments for the MedicinalProductNameCountryLanguage type.
 */
export interface MedicinalProductNameCountryLanguageArgs extends fhir.BackboneElementArgs {
  /**
   * Country code for where this name applies.
   */
  country: fhir.CodeableConceptArgs|null;
  /**
   * Jurisdiction code for where this name applies.
   */
  jurisdiction?: fhir.CodeableConceptArgs|undefined;
  /**
   * Language code for this name.
   */
  language: fhir.CodeableConceptArgs|null;
}

/**
 * Country where the name applies.
 */
export class MedicinalProductNameCountryLanguage extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'MedicinalProductNameCountryLanguage';
  /**
   * Country code for where this name applies.
   */
  public country: fhir.CodeableConcept|null;
  /**
   * Jurisdiction code for where this name applies.
   */
  public jurisdiction?: fhir.CodeableConcept|undefined;
  /**
   * Language code for this name.
   */
  public language: fhir.CodeableConcept|null;
  /**
   * Default constructor for MedicinalProductNameCountryLanguage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductNameCountryLanguageArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['country']) { this.country = new fhir.CodeableConcept(source.country); }
    else { this.country = null; }
    if (source['jurisdiction']) { this.jurisdiction = new fhir.CodeableConcept(source.jurisdiction); }
    if (source['language']) { this.language = new fhir.CodeableConcept(source.language); }
    else { this.language = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['country']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property country:fhir.CodeableConcept fhir: MedicinalProduct.name.countryLanguage.country:CodeableConcept', }));
    }
    if (this["country"]) { outcome.issue!.push(...this.country.doModelValidation().issue!); }
    if (this["jurisdiction"]) { outcome.issue!.push(...this.jurisdiction.doModelValidation().issue!); }
    if (!this['language']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property language:fhir.CodeableConcept fhir: MedicinalProduct.name.countryLanguage.language:CodeableConcept', }));
    }
    if (this["language"]) { outcome.issue!.push(...this.language.doModelValidation().issue!); }
    return outcome;
  }
}
/**
 * Valid arguments for the MedicinalProductName type.
 */
export interface MedicinalProductNameArgs extends fhir.BackboneElementArgs {
  /**
   * The full product name.
   */
  productName: fhir.FhirString|string|undefined;
  /**
   * Coding words or phrases of the name.
   */
  namePart?: fhir.MedicinalProductNameNamePartArgs[]|undefined;
  /**
   * Country where the name applies.
   */
  countryLanguage?: fhir.MedicinalProductNameCountryLanguageArgs[]|undefined;
}

/**
 * The product's name, including full name and possibly coded parts.
 */
export class MedicinalProductName extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'MedicinalProductName';
  /**
   * The full product name.
   */
  public productName: fhir.FhirString|null;
  /**
   * Coding words or phrases of the name.
   */
  public namePart?: fhir.MedicinalProductNameNamePart[];
  /**
   * Country where the name applies.
   */
  public countryLanguage?: fhir.MedicinalProductNameCountryLanguage[];
  /**
   * Default constructor for MedicinalProductName - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductNameArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['productName']) { this.productName = new fhir.FhirString({value: source.productName}); }
    else { this.productName = null; }
    if (source['namePart']) { this.namePart = source.namePart.map((x) => new fhir.MedicinalProductNameNamePart(x)); }
    else { this.namePart = []; }
    if (source['countryLanguage']) { this.countryLanguage = source.countryLanguage.map((x) => new fhir.MedicinalProductNameCountryLanguage(x)); }
    else { this.countryLanguage = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['productName']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property productName:fhir.FhirString fhir: MedicinalProduct.name.productName:string', }));
    }
    if (this["productName"]) { outcome.issue!.push(...this.productName.doModelValidation().issue!); }
    if (this["namePart"]) { this.namePart.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["countryLanguage"]) { this.countryLanguage.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}
/**
 * Valid arguments for the MedicinalProductManufacturingBusinessOperation type.
 */
export interface MedicinalProductManufacturingBusinessOperationArgs extends fhir.BackboneElementArgs {
  /**
   * The type of manufacturing operation.
   */
  operationType?: fhir.CodeableConceptArgs|undefined;
  /**
   * Regulatory authorization reference number.
   */
  authorisationReferenceNumber?: fhir.IdentifierArgs|undefined;
  /**
   * Regulatory authorization date.
   */
  effectiveDate?: fhir.FhirDateTime|string|undefined;
  /**
   * To indicate if this proces is commercially confidential.
   */
  confidentialityIndicator?: fhir.CodeableConceptArgs|undefined;
  /**
   * The manufacturer or establishment associated with the process.
   */
  manufacturer?: fhir.ReferenceArgs[]|undefined;
  /**
   * A regulator which oversees the operation.
   */
  regulator?: fhir.ReferenceArgs|undefined;
}

/**
 * An operation applied to the product, for manufacturing or adminsitrative purpose.
 */
export class MedicinalProductManufacturingBusinessOperation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'MedicinalProductManufacturingBusinessOperation';
  /**
   * The type of manufacturing operation.
   */
  public operationType?: fhir.CodeableConcept|undefined;
  /**
   * Regulatory authorization reference number.
   */
  public authorisationReferenceNumber?: fhir.Identifier|undefined;
  /**
   * Regulatory authorization date.
   */
  public effectiveDate?: fhir.FhirDateTime|undefined;
  /**
   * To indicate if this proces is commercially confidential.
   */
  public confidentialityIndicator?: fhir.CodeableConcept|undefined;
  /**
   * The manufacturer or establishment associated with the process.
   */
  public manufacturer?: fhir.Reference[];
  /**
   * A regulator which oversees the operation.
   */
  public regulator?: fhir.Reference|undefined;
  /**
   * Default constructor for MedicinalProductManufacturingBusinessOperation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductManufacturingBusinessOperationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['operationType']) { this.operationType = new fhir.CodeableConcept(source.operationType); }
    if (source['authorisationReferenceNumber']) { this.authorisationReferenceNumber = new fhir.Identifier(source.authorisationReferenceNumber); }
    if (source['effectiveDate']) { this.effectiveDate = new fhir.FhirDateTime({value: source.effectiveDate}); }
    if (source['confidentialityIndicator']) { this.confidentialityIndicator = new fhir.CodeableConcept(source.confidentialityIndicator); }
    if (source['manufacturer']) { this.manufacturer = source.manufacturer.map((x) => new fhir.Reference(x)); }
    else { this.manufacturer = []; }
    if (source['regulator']) { this.regulator = new fhir.Reference(source.regulator); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["operationType"]) { outcome.issue!.push(...this.operationType.doModelValidation().issue!); }
    if (this["authorisationReferenceNumber"]) { outcome.issue!.push(...this.authorisationReferenceNumber.doModelValidation().issue!); }
    if (this["effectiveDate"]) { outcome.issue!.push(...this.effectiveDate.doModelValidation().issue!); }
    if (this["confidentialityIndicator"]) { outcome.issue!.push(...this.confidentialityIndicator.doModelValidation().issue!); }
    if (this["manufacturer"]) { this.manufacturer.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["regulator"]) { outcome.issue!.push(...this.regulator.doModelValidation().issue!); }
    return outcome;
  }
}
/**
 * Valid arguments for the MedicinalProductSpecialDesignation type.
 */
export interface MedicinalProductSpecialDesignationArgs extends fhir.BackboneElementArgs {
  /**
   * Identifier for the designation, or procedure number.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The type of special designation, e.g. orphan drug, minor use.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * The intended use of the product, e.g. prevention, treatment.
   */
  intendedUse?: fhir.CodeableConceptArgs|undefined;
  /**
   * Condition for which the medicinal use applies.
   */
  indication?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Condition for which the medicinal use applies.
   */
  indicationCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Condition for which the medicinal use applies.
   */
  indicationReference?: fhir.ReferenceArgs|undefined;
  /**
   * For example granted, pending, expired or withdrawn.
   */
  status?: fhir.CodeableConceptArgs|undefined;
  /**
   * Date when the designation was granted.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Animal species for which this applies.
   */
  species?: fhir.CodeableConceptArgs|undefined;
}

/**
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
 */
export class MedicinalProductSpecialDesignation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'MedicinalProductSpecialDesignation';
  /**
   * Identifier for the designation, or procedure number.
   */
  public identifier?: fhir.Identifier[];
  /**
   * The type of special designation, e.g. orphan drug, minor use.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The intended use of the product, e.g. prevention, treatment.
   */
  public intendedUse?: fhir.CodeableConcept|undefined;
  /**
   * Condition for which the medicinal use applies.
   */
  public indication?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element MedicinalProduct.specialDesignation.indication[x]
   */
  protected static readonly _fts_indicationIsChoice:true = true;
  /**
   * For example granted, pending, expired or withdrawn.
   */
  public status?: fhir.CodeableConcept|undefined;
  /**
   * Date when the designation was granted.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Animal species for which this applies.
   */
  public species?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for MedicinalProductSpecialDesignation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductSpecialDesignationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['intendedUse']) { this.intendedUse = new fhir.CodeableConcept(source.intendedUse); }
    if (source['indication']) { this.indication = source.indication; }
    else if (source['indicationCodeableConcept']) { this.indication = new fhir.CodeableConcept(source.indicationCodeableConcept); }
    else if (source['indicationReference']) { this.indication = new fhir.Reference(source.indicationReference); }
    if (source['status']) { this.status = new fhir.CodeableConcept(source.status); }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['species']) { this.species = new fhir.CodeableConcept(source.species); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    if (this["intendedUse"]) { outcome.issue!.push(...this.intendedUse.doModelValidation().issue!); }
    if (this["status"]) { outcome.issue!.push(...this.status.doModelValidation().issue!); }
    if (this["date"]) { outcome.issue!.push(...this.date.doModelValidation().issue!); }
    if (this["species"]) { outcome.issue!.push(...this.species.doModelValidation().issue!); }
    return outcome;
  }
}
/**
 * Valid arguments for the MedicinalProduct type.
 */
export interface MedicinalProductArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "MedicinalProduct"|undefined;
  /**
   * Business identifier for this product. Could be an MPID.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Regulatory type, e.g. Investigational or Authorized.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * If this medicine applies to human or veterinary uses.
   */
  domain?: fhir.CodingArgs|undefined;
  /**
   * The dose form for a single part product, or combined form of a multiple part product.
   */
  combinedPharmaceuticalDoseForm?: fhir.CodeableConceptArgs|undefined;
  /**
   * The legal status of supply of the medicinal product as classified by the regulator.
   */
  legalStatusOfSupply?: fhir.CodeableConceptArgs|undefined;
  /**
   * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
   */
  additionalMonitoringIndicator?: fhir.CodeableConceptArgs|undefined;
  /**
   * Whether the Medicinal Product is subject to special measures for regulatory reasons.
   */
  specialMeasures?: fhir.FhirString[]|string[]|undefined;
  /**
   * If authorised for use in children.
   */
  paediatricUseIndicator?: fhir.CodeableConceptArgs|undefined;
  /**
   * Allows the product to be classified by various systems.
   */
  productClassification?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Marketing status of the medicinal product, in contrast to marketing authorizaton.
   */
  marketingStatus?: fhir.MarketingStatusArgs[]|undefined;
  /**
   * Pharmaceutical aspects of product.
   */
  pharmaceuticalProduct?: fhir.ReferenceArgs[]|undefined;
  /**
   * Package representation for the product.
   */
  packagedMedicinalProduct?: fhir.ReferenceArgs[]|undefined;
  /**
   * Supporting documentation, typically for regulatory submission.
   */
  attachedDocument?: fhir.ReferenceArgs[]|undefined;
  /**
   * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
   */
  masterFile?: fhir.ReferenceArgs[]|undefined;
  /**
   * A product specific contact, person (in a role), or an organization.
   */
  contact?: fhir.ReferenceArgs[]|undefined;
  /**
   * Clinical trials or studies that this product is involved in.
   */
  clinicalTrial?: fhir.ReferenceArgs[]|undefined;
  /**
   * The product's name, including full name and possibly coded parts.
   */
  name: fhir.MedicinalProductNameArgs[]|null;
  /**
   * Reference to another product, e.g. for linking authorised to investigational product.
   */
  crossReference?: fhir.IdentifierArgs[]|undefined;
  /**
   * An operation applied to the product, for manufacturing or adminsitrative purpose.
   */
  manufacturingBusinessOperation?: fhir.MedicinalProductManufacturingBusinessOperationArgs[]|undefined;
  /**
   * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
   */
  specialDesignation?: fhir.MedicinalProductSpecialDesignationArgs[]|undefined;
}

/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
export class MedicinalProduct extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'MedicinalProduct';
  /**
   * Resource Type Name
   */
  public resourceType: "MedicinalProduct";
  /**
   * Business identifier for this product. Could be an MPID.
   */
  public identifier?: fhir.Identifier[];
  /**
   * Regulatory type, e.g. Investigational or Authorized.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * If this medicine applies to human or veterinary uses.
   */
  public domain?: fhir.Coding|undefined;
  /**
   * The dose form for a single part product, or combined form of a multiple part product.
   */
  public combinedPharmaceuticalDoseForm?: fhir.CodeableConcept|undefined;
  /**
   * The legal status of supply of the medicinal product as classified by the regulator.
   */
  public legalStatusOfSupply?: fhir.CodeableConcept|undefined;
  /**
   * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
   */
  public additionalMonitoringIndicator?: fhir.CodeableConcept|undefined;
  /**
   * Whether the Medicinal Product is subject to special measures for regulatory reasons.
   */
  public specialMeasures?: fhir.FhirString[];
  /**
   * If authorised for use in children.
   */
  public paediatricUseIndicator?: fhir.CodeableConcept|undefined;
  /**
   * Allows the product to be classified by various systems.
   */
  public productClassification?: fhir.CodeableConcept[];
  /**
   * Marketing status of the medicinal product, in contrast to marketing authorizaton.
   */
  public marketingStatus?: fhir.MarketingStatus[];
  /**
   * Pharmaceutical aspects of product.
   */
  public pharmaceuticalProduct?: fhir.Reference[];
  /**
   * Package representation for the product.
   */
  public packagedMedicinalProduct?: fhir.Reference[];
  /**
   * Supporting documentation, typically for regulatory submission.
   */
  public attachedDocument?: fhir.Reference[];
  /**
   * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
   */
  public masterFile?: fhir.Reference[];
  /**
   * A product specific contact, person (in a role), or an organization.
   */
  public contact?: fhir.Reference[];
  /**
   * Clinical trials or studies that this product is involved in.
   */
  public clinicalTrial?: fhir.Reference[];
  /**
   * The product's name, including full name and possibly coded parts.
   */
  public name: fhir.MedicinalProductName[];
  /**
   * Reference to another product, e.g. for linking authorised to investigational product.
   */
  public crossReference?: fhir.Identifier[];
  /**
   * An operation applied to the product, for manufacturing or adminsitrative purpose.
   */
  public manufacturingBusinessOperation?: fhir.MedicinalProductManufacturingBusinessOperation[];
  /**
   * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
   */
  public specialDesignation?: fhir.MedicinalProductSpecialDesignation[];
  /**
   * Default constructor for MedicinalProduct - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'MedicinalProduct';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['domain']) { this.domain = new fhir.Coding(source.domain); }
    if (source['combinedPharmaceuticalDoseForm']) { this.combinedPharmaceuticalDoseForm = new fhir.CodeableConcept(source.combinedPharmaceuticalDoseForm); }
    if (source['legalStatusOfSupply']) { this.legalStatusOfSupply = new fhir.CodeableConcept(source.legalStatusOfSupply); }
    if (source['additionalMonitoringIndicator']) { this.additionalMonitoringIndicator = new fhir.CodeableConcept(source.additionalMonitoringIndicator); }
    if (source['specialMeasures']) { this.specialMeasures = source.specialMeasures.map((x) => new fhir.FhirString({value: x})); }
    else { this.specialMeasures = []; }
    if (source['paediatricUseIndicator']) { this.paediatricUseIndicator = new fhir.CodeableConcept(source.paediatricUseIndicator); }
    if (source['productClassification']) { this.productClassification = source.productClassification.map((x) => new fhir.CodeableConcept(x)); }
    else { this.productClassification = []; }
    if (source['marketingStatus']) { this.marketingStatus = source.marketingStatus.map((x) => new fhir.MarketingStatus(x)); }
    else { this.marketingStatus = []; }
    if (source['pharmaceuticalProduct']) { this.pharmaceuticalProduct = source.pharmaceuticalProduct.map((x) => new fhir.Reference(x)); }
    else { this.pharmaceuticalProduct = []; }
    if (source['packagedMedicinalProduct']) { this.packagedMedicinalProduct = source.packagedMedicinalProduct.map((x) => new fhir.Reference(x)); }
    else { this.packagedMedicinalProduct = []; }
    if (source['attachedDocument']) { this.attachedDocument = source.attachedDocument.map((x) => new fhir.Reference(x)); }
    else { this.attachedDocument = []; }
    if (source['masterFile']) { this.masterFile = source.masterFile.map((x) => new fhir.Reference(x)); }
    else { this.masterFile = []; }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.Reference(x)); }
    else { this.contact = []; }
    if (source['clinicalTrial']) { this.clinicalTrial = source.clinicalTrial.map((x) => new fhir.Reference(x)); }
    else { this.clinicalTrial = []; }
    if (source['name']) { this.name = source.name.map((x) => new fhir.MedicinalProductName(x)); }
    else { this.name = []; }
    if (source['crossReference']) { this.crossReference = source.crossReference.map((x) => new fhir.Identifier(x)); }
    else { this.crossReference = []; }
    if (source['manufacturingBusinessOperation']) { this.manufacturingBusinessOperation = source.manufacturingBusinessOperation.map((x) => new fhir.MedicinalProductManufacturingBusinessOperation(x)); }
    else { this.manufacturingBusinessOperation = []; }
    if (source['specialDesignation']) { this.specialDesignation = source.specialDesignation.map((x) => new fhir.MedicinalProductSpecialDesignation(x)); }
    else { this.specialDesignation = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property resourceType:"MedicinalProduct" fhir: MedicinalProduct.resourceType:"MedicinalProduct"', }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    if (this["domain"]) { outcome.issue!.push(...this.domain.doModelValidation().issue!); }
    if (this["combinedPharmaceuticalDoseForm"]) { outcome.issue!.push(...this.combinedPharmaceuticalDoseForm.doModelValidation().issue!); }
    if (this["legalStatusOfSupply"]) { outcome.issue!.push(...this.legalStatusOfSupply.doModelValidation().issue!); }
    if (this["additionalMonitoringIndicator"]) { outcome.issue!.push(...this.additionalMonitoringIndicator.doModelValidation().issue!); }
    if (this["specialMeasures"]) { this.specialMeasures.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["paediatricUseIndicator"]) { outcome.issue!.push(...this.paediatricUseIndicator.doModelValidation().issue!); }
    if (this["productClassification"]) { this.productClassification.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["marketingStatus"]) { this.marketingStatus.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["pharmaceuticalProduct"]) { this.pharmaceuticalProduct.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["packagedMedicinalProduct"]) { this.packagedMedicinalProduct.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["attachedDocument"]) { this.attachedDocument.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["masterFile"]) { this.masterFile.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["contact"]) { this.contact.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["clinicalTrial"]) { this.clinicalTrial.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['name']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property name:fhir.MedicinalProductName[] fhir: MedicinalProduct.name:name', }));
    } else if (!Array.isArray(this.name)) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.StructuralIssue,  diagnostics: 'Found scalar in array property name:fhir.MedicinalProductName[] fhir: MedicinalProduct.name:name', }));
    } else if (this.name.length === 0) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property name:fhir.MedicinalProductName[] fhir: MedicinalProduct.name:name', }));
    }
    if (this["name"]) { this.name.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["crossReference"]) { this.crossReference.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["manufacturingBusinessOperation"]) { this.manufacturingBusinessOperation.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["specialDesignation"]) { this.specialDesignation.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}
