// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: SubstancePolymer

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the SubstancePolymerMonomerSetStartingMaterial type.
 */
export interface SubstancePolymerMonomerSetStartingMaterialArgs extends fhir.BackboneElementArgs {
  /**
   * Todo.
   */
  material?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  isDefining?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Todo.
   */
  amount?: fhir.SubstanceAmountArgs|undefined;
}

/**
 * Todo.
 */
export class SubstancePolymerMonomerSetStartingMaterial extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstancePolymerMonomerSetStartingMaterial';
  /**
   * Todo.
   */
  public material?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public isDefining?: fhir.FhirBoolean|undefined;
  /**
   * Todo.
   */
  public amount?: fhir.SubstanceAmount|undefined;
  /**
   * Default constructor for SubstancePolymerMonomerSetStartingMaterial - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstancePolymerMonomerSetStartingMaterialArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['material']) { this.material = new fhir.CodeableConcept(source.material); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['isDefining']) { this.isDefining = new fhir.FhirBoolean({value: source.isDefining}); }
    if (source['amount']) { this.amount = new fhir.SubstanceAmount(source.amount); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["material"]) { issues.push(...this.material.doModelValidation()); }
    if (this["type"]) { issues.push(...this.type.doModelValidation()); }
    if (this["isDefining"]) { issues.push(...this.isDefining.doModelValidation()); }
    if (this["amount"]) { issues.push(...this.amount.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the SubstancePolymerMonomerSet type.
 */
export interface SubstancePolymerMonomerSetArgs extends fhir.BackboneElementArgs {
  /**
   * Todo.
   */
  ratioType?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  startingMaterial?: fhir.SubstancePolymerMonomerSetStartingMaterialArgs[]|undefined;
}

/**
 * Todo.
 */
export class SubstancePolymerMonomerSet extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstancePolymerMonomerSet';
  /**
   * Todo.
   */
  public ratioType?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public startingMaterial?: fhir.SubstancePolymerMonomerSetStartingMaterial[];
  /**
   * Default constructor for SubstancePolymerMonomerSet - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstancePolymerMonomerSetArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['ratioType']) { this.ratioType = new fhir.CodeableConcept(source.ratioType); }
    if (source['startingMaterial']) { this.startingMaterial = source.startingMaterial.map((x) => new fhir.SubstancePolymerMonomerSetStartingMaterial(x)); }
    else { this.startingMaterial = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["ratioType"]) { issues.push(...this.ratioType.doModelValidation()); }
    if (this["startingMaterial"]) { this.startingMaterial.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
/**
 * Valid arguments for the SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation type.
 */
export interface SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationArgs extends fhir.BackboneElementArgs {
  /**
   * Todo.
   */
  degree?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  amount?: fhir.SubstanceAmountArgs|undefined;
}

/**
 * Todo.
 */
export class SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation';
  /**
   * Todo.
   */
  public degree?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public amount?: fhir.SubstanceAmount|undefined;
  /**
   * Default constructor for SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['degree']) { this.degree = new fhir.CodeableConcept(source.degree); }
    if (source['amount']) { this.amount = new fhir.SubstanceAmount(source.amount); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["degree"]) { issues.push(...this.degree.doModelValidation()); }
    if (this["amount"]) { issues.push(...this.amount.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the SubstancePolymerRepeatRepeatUnitStructuralRepresentation type.
 */
export interface SubstancePolymerRepeatRepeatUnitStructuralRepresentationArgs extends fhir.BackboneElementArgs {
  /**
   * Todo.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  representation?: fhir.FhirString|string|undefined;
  /**
   * Todo.
   */
  attachment?: fhir.AttachmentArgs|undefined;
}

/**
 * Todo.
 */
export class SubstancePolymerRepeatRepeatUnitStructuralRepresentation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstancePolymerRepeatRepeatUnitStructuralRepresentation';
  /**
   * Todo.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public representation?: fhir.FhirString|undefined;
  /**
   * Todo.
   */
  public attachment?: fhir.Attachment|undefined;
  /**
   * Default constructor for SubstancePolymerRepeatRepeatUnitStructuralRepresentation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstancePolymerRepeatRepeatUnitStructuralRepresentationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['representation']) { this.representation = new fhir.FhirString({value: source.representation}); }
    if (source['attachment']) { this.attachment = new fhir.Attachment(source.attachment); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["type"]) { issues.push(...this.type.doModelValidation()); }
    if (this["representation"]) { issues.push(...this.representation.doModelValidation()); }
    if (this["attachment"]) { issues.push(...this.attachment.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the SubstancePolymerRepeatRepeatUnit type.
 */
export interface SubstancePolymerRepeatRepeatUnitArgs extends fhir.BackboneElementArgs {
  /**
   * Todo.
   */
  orientationOfPolymerisation?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  repeatUnit?: fhir.FhirString|string|undefined;
  /**
   * Todo.
   */
  amount?: fhir.SubstanceAmountArgs|undefined;
  /**
   * Todo.
   */
  degreeOfPolymerisation?: fhir.SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationArgs[]|undefined;
  /**
   * Todo.
   */
  structuralRepresentation?: fhir.SubstancePolymerRepeatRepeatUnitStructuralRepresentationArgs[]|undefined;
}

/**
 * Todo.
 */
export class SubstancePolymerRepeatRepeatUnit extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstancePolymerRepeatRepeatUnit';
  /**
   * Todo.
   */
  public orientationOfPolymerisation?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public repeatUnit?: fhir.FhirString|undefined;
  /**
   * Todo.
   */
  public amount?: fhir.SubstanceAmount|undefined;
  /**
   * Todo.
   */
  public degreeOfPolymerisation?: fhir.SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[];
  /**
   * Todo.
   */
  public structuralRepresentation?: fhir.SubstancePolymerRepeatRepeatUnitStructuralRepresentation[];
  /**
   * Default constructor for SubstancePolymerRepeatRepeatUnit - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstancePolymerRepeatRepeatUnitArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['orientationOfPolymerisation']) { this.orientationOfPolymerisation = new fhir.CodeableConcept(source.orientationOfPolymerisation); }
    if (source['repeatUnit']) { this.repeatUnit = new fhir.FhirString({value: source.repeatUnit}); }
    if (source['amount']) { this.amount = new fhir.SubstanceAmount(source.amount); }
    if (source['degreeOfPolymerisation']) { this.degreeOfPolymerisation = source.degreeOfPolymerisation.map((x) => new fhir.SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation(x)); }
    else { this.degreeOfPolymerisation = []; }
    if (source['structuralRepresentation']) { this.structuralRepresentation = source.structuralRepresentation.map((x) => new fhir.SubstancePolymerRepeatRepeatUnitStructuralRepresentation(x)); }
    else { this.structuralRepresentation = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["orientationOfPolymerisation"]) { issues.push(...this.orientationOfPolymerisation.doModelValidation()); }
    if (this["repeatUnit"]) { issues.push(...this.repeatUnit.doModelValidation()); }
    if (this["amount"]) { issues.push(...this.amount.doModelValidation()); }
    if (this["degreeOfPolymerisation"]) { this.degreeOfPolymerisation.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["structuralRepresentation"]) { this.structuralRepresentation.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
/**
 * Valid arguments for the SubstancePolymerRepeat type.
 */
export interface SubstancePolymerRepeatArgs extends fhir.BackboneElementArgs {
  /**
   * Todo.
   */
  numberOfUnits?: fhir.FhirInteger|number|undefined;
  /**
   * Todo.
   */
  averageMolecularFormula?: fhir.FhirString|string|undefined;
  /**
   * Todo.
   */
  repeatUnitAmountType?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  repeatUnit?: fhir.SubstancePolymerRepeatRepeatUnitArgs[]|undefined;
}

/**
 * Todo.
 */
export class SubstancePolymerRepeat extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstancePolymerRepeat';
  /**
   * Todo.
   */
  public numberOfUnits?: fhir.FhirInteger|undefined;
  /**
   * Todo.
   */
  public averageMolecularFormula?: fhir.FhirString|undefined;
  /**
   * Todo.
   */
  public repeatUnitAmountType?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public repeatUnit?: fhir.SubstancePolymerRepeatRepeatUnit[];
  /**
   * Default constructor for SubstancePolymerRepeat - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstancePolymerRepeatArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['numberOfUnits']) { this.numberOfUnits = new fhir.FhirInteger({value: source.numberOfUnits}); }
    if (source['averageMolecularFormula']) { this.averageMolecularFormula = new fhir.FhirString({value: source.averageMolecularFormula}); }
    if (source['repeatUnitAmountType']) { this.repeatUnitAmountType = new fhir.CodeableConcept(source.repeatUnitAmountType); }
    if (source['repeatUnit']) { this.repeatUnit = source.repeatUnit.map((x) => new fhir.SubstancePolymerRepeatRepeatUnit(x)); }
    else { this.repeatUnit = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["numberOfUnits"]) { issues.push(...this.numberOfUnits.doModelValidation()); }
    if (this["averageMolecularFormula"]) { issues.push(...this.averageMolecularFormula.doModelValidation()); }
    if (this["repeatUnitAmountType"]) { issues.push(...this.repeatUnitAmountType.doModelValidation()); }
    if (this["repeatUnit"]) { this.repeatUnit.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
/**
 * Valid arguments for the SubstancePolymer type.
 */
export interface SubstancePolymerArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "SubstancePolymer"|undefined;
  /**
   * Todo.
   */
  class?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  geometry?: fhir.CodeableConceptArgs|undefined;
  /**
   * Todo.
   */
  copolymerConnectivity?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Todo.
   */
  modification?: fhir.FhirString[]|string[]|undefined;
  /**
   * Todo.
   */
  monomerSet?: fhir.SubstancePolymerMonomerSetArgs[]|undefined;
  /**
   * Todo.
   */
  repeat?: fhir.SubstancePolymerRepeatArgs[]|undefined;
}

/**
 * Todo.
 */
export class SubstancePolymer extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstancePolymer';
  /**
   * Resource Type Name
   */
  public override resourceType: "SubstancePolymer";
  /**
   * Todo.
   */
  public class?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public geometry?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  public copolymerConnectivity?: fhir.CodeableConcept[];
  /**
   * Todo.
   */
  public modification?: fhir.FhirString[];
  /**
   * Todo.
   */
  public monomerSet?: fhir.SubstancePolymerMonomerSet[];
  /**
   * Todo.
   */
  public repeat?: fhir.SubstancePolymerRepeat[];
  /**
   * Default constructor for SubstancePolymer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstancePolymerArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'SubstancePolymer';
    if (source['class']) { this.class = new fhir.CodeableConcept(source.class); }
    if (source['geometry']) { this.geometry = new fhir.CodeableConcept(source.geometry); }
    if (source['copolymerConnectivity']) { this.copolymerConnectivity = source.copolymerConnectivity.map((x) => new fhir.CodeableConcept(x)); }
    else { this.copolymerConnectivity = []; }
    if (source['modification']) { this.modification = source.modification.map((x) => new fhir.FhirString({value: x})); }
    else { this.modification = []; }
    if (source['monomerSet']) { this.monomerSet = source.monomerSet.map((x) => new fhir.SubstancePolymerMonomerSet(x)); }
    else { this.monomerSet = []; }
    if (source['repeat']) { this.repeat = source.repeat.map((x) => new fhir.SubstancePolymerRepeat(x)); }
    else { this.repeat = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required',  diagnostics: 'Missing required property resourceType:"SubstancePolymer" fhir: SubstancePolymer.resourceType:"SubstancePolymer"', });
    }
    if (this["class"]) { issues.push(...this.class.doModelValidation()); }
    if (this["geometry"]) { issues.push(...this.geometry.doModelValidation()); }
    if (this["copolymerConnectivity"]) { this.copolymerConnectivity.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["modification"]) { this.modification.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["monomerSet"]) { this.monomerSet.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["repeat"]) { this.repeat.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
