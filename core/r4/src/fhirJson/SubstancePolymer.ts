// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: SubstancePolymer

import * as fhir from '../fhirJson.js';


/**
 * Todo.
 */
export interface SubstancePolymerMonomerSetStartingMaterial extends fhir.BackboneElement { 
  /**
   * Todo.
   */
  material?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  type?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  isDefining?: boolean|undefined;
  /**
   * Extended properties for primitive element: SubstancePolymer.monomerSet.startingMaterial.isDefining
   */
  _isDefining?:fhir.FhirElement;
  /**
   * Todo.
   */
  amount?: fhir.SubstanceAmount|undefined;
}

/**
 * Todo.
 */
export interface SubstancePolymerMonomerSet extends fhir.BackboneElement { 
  /**
   * Todo.
   */
  ratioType?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  startingMaterial?: (fhir.SubstancePolymerMonomerSetStartingMaterial|null)[]|undefined;
}

/**
 * Todo.
 */
export interface SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends fhir.BackboneElement { 
  /**
   * Todo.
   */
  degree?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  amount?: fhir.SubstanceAmount|undefined;
}

/**
 * Todo.
 */
export interface SubstancePolymerRepeatRepeatUnitStructuralRepresentation extends fhir.BackboneElement { 
  /**
   * Todo.
   */
  type?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  representation?: string|undefined;
  /**
   * Extended properties for primitive element: SubstancePolymer.repeat.repeatUnit.structuralRepresentation.representation
   */
  _representation?:fhir.FhirElement;
  /**
   * Todo.
   */
  attachment?: fhir.Attachment|undefined;
}

/**
 * Todo.
 */
export interface SubstancePolymerRepeatRepeatUnit extends fhir.BackboneElement { 
  /**
   * Todo.
   */
  orientationOfPolymerisation?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  repeatUnit?: string|undefined;
  /**
   * Extended properties for primitive element: SubstancePolymer.repeat.repeatUnit.repeatUnit
   */
  _repeatUnit?:fhir.FhirElement;
  /**
   * Todo.
   */
  amount?: fhir.SubstanceAmount|undefined;
  /**
   * Todo.
   */
  degreeOfPolymerisation?: (fhir.SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation|null)[]|undefined;
  /**
   * Todo.
   */
  structuralRepresentation?: (fhir.SubstancePolymerRepeatRepeatUnitStructuralRepresentation|null)[]|undefined;
}

/**
 * Todo.
 */
export interface SubstancePolymerRepeat extends fhir.BackboneElement { 
  /**
   * Todo.
   */
  numberOfUnits?: number|undefined;
  /**
   * Extended properties for primitive element: SubstancePolymer.repeat.numberOfUnits
   */
  _numberOfUnits?:fhir.FhirElement;
  /**
   * Todo.
   */
  averageMolecularFormula?: string|undefined;
  /**
   * Extended properties for primitive element: SubstancePolymer.repeat.averageMolecularFormula
   */
  _averageMolecularFormula?:fhir.FhirElement;
  /**
   * Todo.
   */
  repeatUnitAmountType?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  repeatUnit?: (fhir.SubstancePolymerRepeatRepeatUnit|null)[]|undefined;
}

/**
 * Todo.
 */
export interface SubstancePolymer extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "SubstancePolymer"|null;
  /**
   * Todo.
   */
  class?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  geometry?: fhir.CodeableConcept|undefined;
  /**
   * Todo.
   */
  copolymerConnectivity?: (fhir.CodeableConcept|null)[]|undefined;
  /**
   * Todo.
   */
  modification?: (string|null)[]|undefined;
  /**
   * Extended properties for primitive element: SubstancePolymer.modification
   */
  _modification?:(fhir.FhirElement|null)[];
  /**
   * Todo.
   */
  monomerSet?: (fhir.SubstancePolymerMonomerSet|null)[]|undefined;
  /**
   * Todo.
   */
  repeat?: (fhir.SubstancePolymerRepeat|null)[]|undefined;
}
