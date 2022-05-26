// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: SubstanceReferenceInformation

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the SubstanceReferenceInformationGene type.
 */
export interface SubstanceReferenceInformationGeneArgs extends fhir.BackboneElementArgs {
  /**
   * Todo.
   */
  geneSequenceOrigin?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  gene?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  source?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Todo.
 */
export class SubstanceReferenceInformationGene extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceReferenceInformationGene';
  /**
   * Todo.
   */
  public geneSequenceOrigin?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public gene?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public source: fhir.Reference[];
  /**
   * Default constructor for SubstanceReferenceInformationGene - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceReferenceInformationGeneArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['geneSequenceOrigin']) { this.geneSequenceOrigin = new fhir.CodeableConcept(source.geneSequenceOrigin); }
    if (source['gene']) { this.gene = new fhir.CodeableConcept(source.gene); }
    if (source['source']) { this.source = source.source.map((x) => new fhir.Reference(x)); }
    else { this.source = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["geneSequenceOrigin"]) { issues.push(...this.geneSequenceOrigin.doModelValidation()); }
    if (this["gene"]) { issues.push(...this.gene.doModelValidation()); }
    if (this["source"]) { this.source.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
/**
 * Valid arguments for the SubstanceReferenceInformationGeneElement type.
 */
export interface SubstanceReferenceInformationGeneElementArgs extends fhir.BackboneElementArgs {
  /**
   * Todo.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  element?: fhir.IdentifierArgs|undefined;
  /**
   * Todo.
   */
  source?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Todo.
 */
export class SubstanceReferenceInformationGeneElement extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceReferenceInformationGeneElement';
  /**
   * Todo.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public element?: fhir.Identifier|undefined;
  /**
   * Todo.
   */
  public source: fhir.Reference[];
  /**
   * Default constructor for SubstanceReferenceInformationGeneElement - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceReferenceInformationGeneElementArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['element']) { this.element = new fhir.Identifier(source.element); }
    if (source['source']) { this.source = source.source.map((x) => new fhir.Reference(x)); }
    else { this.source = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["type"]) { issues.push(...this.type.doModelValidation()); }
    if (this["element"]) { issues.push(...this.element.doModelValidation()); }
    if (this["source"]) { this.source.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
/**
 * Valid arguments for the SubstanceReferenceInformationClassification type.
 */
export interface SubstanceReferenceInformationClassificationArgs extends fhir.BackboneElementArgs {
  /**
   * Todo.
   */
  domain?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  classification?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  subtype?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Todo.
   */
  source?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Todo.
 */
export class SubstanceReferenceInformationClassification extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceReferenceInformationClassification';
  /**
   * Todo.
   */
  public domain?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public classification?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public subtype: fhir.CodeableConcept[];
  /**
   * Todo.
   */
  public source: fhir.Reference[];
  /**
   * Default constructor for SubstanceReferenceInformationClassification - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceReferenceInformationClassificationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['domain']) { this.domain = new fhir.CodeableConcept(source.domain); }
    if (source['classification']) { this.classification = new fhir.CodeableConcept(source.classification); }
    if (source['subtype']) { this.subtype = source.subtype.map((x) => new fhir.CodeableConcept(x)); }
    else { this.subtype = []; }
    if (source['source']) { this.source = source.source.map((x) => new fhir.Reference(x)); }
    else { this.source = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["domain"]) { issues.push(...this.domain.doModelValidation()); }
    if (this["classification"]) { issues.push(...this.classification.doModelValidation()); }
    if (this["subtype"]) { this.subtype.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["source"]) { this.source.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
/**
 * Valid arguments for the SubstanceReferenceInformationTarget type.
 */
export interface SubstanceReferenceInformationTargetArgs extends fhir.BackboneElementArgs {
  /**
   * Todo.
   */
  target?: fhir.IdentifierArgs|undefined;
  /**
   * Todo.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  interaction?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  organism?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  organismType?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  amount?: fhir.Quantity|fhir.Range|fhir.FhirString|undefined;
  /**
   * Todo.
   */
  amountQuantity?: fhir.QuantityArgs|undefined;
  /**
   * Todo.
   */
  amountRange?: fhir.RangeArgs|undefined;
  /**
   * Todo.
   */
  amountString?: fhir.FhirString|string|undefined;
  /**
   * Todo.
   */
  amountType?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  source?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Todo.
 */
export class SubstanceReferenceInformationTarget extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceReferenceInformationTarget';
  /**
   * Todo.
   */
  public target?: fhir.Identifier|undefined;
  /**
   * Todo.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public interaction?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public organism?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public organismType?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public amount?: (fhir.Quantity|fhir.Range|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element SubstanceReferenceInformation.target.amount[x]
   */
  protected static readonly _fts_amountIsChoice:true = true;
  /**
   * Todo.
   */
  public amountType?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public source: fhir.Reference[];
  /**
   * Default constructor for SubstanceReferenceInformationTarget - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceReferenceInformationTargetArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['target']) { this.target = new fhir.Identifier(source.target); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['interaction']) { this.interaction = new fhir.CodeableConcept(source.interaction); }
    if (source['organism']) { this.organism = new fhir.CodeableConcept(source.organism); }
    if (source['organismType']) { this.organismType = new fhir.CodeableConcept(source.organismType); }
    if (source['amount']) { this.amount = source.amount; }
    else if (source['amountQuantity']) { this.amount = new fhir.Quantity(source.amountQuantity); }
    else if (source['amountRange']) { this.amount = new fhir.Range(source.amountRange); }
    else if (source['amountString']) { this.amount = new fhir.FhirString({value: source.amountString}); }
    if (source['amountType']) { this.amountType = new fhir.CodeableConcept(source.amountType); }
    if (source['source']) { this.source = source.source.map((x) => new fhir.Reference(x)); }
    else { this.source = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["target"]) { issues.push(...this.target.doModelValidation()); }
    if (this["type"]) { issues.push(...this.type.doModelValidation()); }
    if (this["interaction"]) { issues.push(...this.interaction.doModelValidation()); }
    if (this["organism"]) { issues.push(...this.organism.doModelValidation()); }
    if (this["organismType"]) { issues.push(...this.organismType.doModelValidation()); }
    if (this["amountType"]) { issues.push(...this.amountType.doModelValidation()); }
    if (this["source"]) { this.source.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
/**
 * Valid arguments for the SubstanceReferenceInformation type.
 */
export interface SubstanceReferenceInformationArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "SubstanceReferenceInformation"|undefined;
  /**
   * Todo.
   */
  comment?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SubstanceReferenceInformation.comment
   */
  _comment?:fhir.FhirElementArgs;
  /**
   * Todo.
   */
  gene?: fhir.SubstanceReferenceInformationGeneArgs[]|undefined;
  /**
   * Todo.
   */
  geneElement?: fhir.SubstanceReferenceInformationGeneElementArgs[]|undefined;
  /**
   * Todo.
   */
  classification?: fhir.SubstanceReferenceInformationClassificationArgs[]|undefined;
  /**
   * Todo.
   */
  target?: fhir.SubstanceReferenceInformationTargetArgs[]|undefined;
}

/**
 * Todo.
 */
export class SubstanceReferenceInformation extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceReferenceInformation';
  /**
   * Resource Type Name
   */
  public override resourceType: "SubstanceReferenceInformation";
  /**
   * Todo.
   */
  public comment?: fhir.FhirString|undefined;
  /**
   * Todo.
   */
  public gene: fhir.SubstanceReferenceInformationGene[];
  /**
   * Todo.
   */
  public geneElement: fhir.SubstanceReferenceInformationGeneElement[];
  /**
   * Todo.
   */
  public classification: fhir.SubstanceReferenceInformationClassification[];
  /**
   * Todo.
   */
  public target: fhir.SubstanceReferenceInformationTarget[];
  /**
   * Default constructor for SubstanceReferenceInformation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceReferenceInformationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'SubstanceReferenceInformation';
    if (source['comment']) { this.comment = new fhir.FhirString({value: source.comment}); }
    if (source['_comment']) {
      if (this.comment) { this.comment.addExtendedProperties(source._comment!); }
      else { this.comment = new fhir.FhirString(source._comment as Partial<fhir.FhirStringArgs>); }
    }
    if (source['gene']) { this.gene = source.gene.map((x) => new fhir.SubstanceReferenceInformationGene(x)); }
    else { this.gene = []; }
    if (source['geneElement']) { this.geneElement = source.geneElement.map((x) => new fhir.SubstanceReferenceInformationGeneElement(x)); }
    else { this.geneElement = []; }
    if (source['classification']) { this.classification = source.classification.map((x) => new fhir.SubstanceReferenceInformationClassification(x)); }
    else { this.classification = []; }
    if (source['target']) { this.target = source.target.map((x) => new fhir.SubstanceReferenceInformationTarget(x)); }
    else { this.target = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"SubstanceReferenceInformation" fhir: SubstanceReferenceInformation.resourceType:"SubstanceReferenceInformation"' });
    }
    if (this["comment"]) { issues.push(...this.comment.doModelValidation()); }
    if (this["gene"]) { this.gene.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["geneElement"]) { this.geneElement.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["classification"]) { this.classification.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["target"]) { this.target.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
