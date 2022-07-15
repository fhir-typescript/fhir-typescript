// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: VisionPrescription

import * as fhir from '../fhir.js';

// @ts-ignore
import { VisionProductCodes,  VisionProductCodeType } from '../fhirValueSets/VisionProductCodes.js';
// @ts-ignore
import { VisionProductVsValidation } from '../fhirValueSets/VisionProductVsValidation.js';
// @ts-ignore
import { VisionEyeCodes,  VisionEyeCodeType } from '../fhirValueSets/VisionEyeCodes.js';
// @ts-ignore
import { VisionEyeVsValidation } from '../fhirValueSets/VisionEyeVsValidation.js';
// @ts-ignore
import { VisionBaseCodes,  VisionBaseCodeType } from '../fhirValueSets/VisionBaseCodes.js';
// @ts-ignore
import { VisionBaseVsValidation } from '../fhirValueSets/VisionBaseVsValidation.js';
// @ts-ignore
import { FmStatusCodes,  FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
// @ts-ignore
import { FmStatusVsValidation } from '../fhirValueSets/FmStatusVsValidation.js';
/**
 * Valid arguments for the VisionPrescriptionDispense type.
 */
export interface VisionPrescriptionDispenseArgs extends fhir.BackboneElementArgs {
  /**
   * Identifies the type of vision correction product which is required for the patient.
   */
  product?: fhir.CodeableConceptArgs|undefined;
  /**
   * The eye for which the lens applies.
   */
  eye?: fhir.FhirCode<VisionEyeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.dispense.eye
   */
  _eye?:fhir.FhirElementArgs;
  /**
   * Lens power measured in diopters (0.25 units).
   */
  sphere?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.dispense.sphere
   */
  _sphere?:fhir.FhirElementArgs;
  /**
   * Power adjustment for astigmatism measured in diopters (0.25 units).
   */
  cylinder?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.dispense.cylinder
   */
  _cylinder?:fhir.FhirElementArgs;
  /**
   * Adjustment for astigmatism measured in integer degrees.
   */
  axis?: fhir.FhirInteger|number|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.dispense.axis
   */
  _axis?:fhir.FhirElementArgs;
  /**
   * Amount of prism to compensate for eye alignment in fractional units.
   */
  prism?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.dispense.prism
   */
  _prism?:fhir.FhirElementArgs;
  /**
   * The relative base, or reference lens edge, for the prism.
   */
  base?: fhir.FhirCode<VisionBaseCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.dispense.base
   */
  _base?:fhir.FhirElementArgs;
  /**
   * Power adjustment for multifocal lenses measured in diopters (0.25 units).
   */
  add?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.dispense.add
   */
  _add?:fhir.FhirElementArgs;
  /**
   * Contact lens power measured in diopters (0.25 units).
   */
  power?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.dispense.power
   */
  _power?:fhir.FhirElementArgs;
  /**
   * Back curvature measured in millimeters.
   */
  backCurve?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.dispense.backCurve
   */
  _backCurve?:fhir.FhirElementArgs;
  /**
   * Contact lens diameter measured in millimeters.
   */
  diameter?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.dispense.diameter
   */
  _diameter?:fhir.FhirElementArgs;
  /**
   * The recommended maximum wear period for the lens.
   */
  duration?: fhir.QuantityArgs|undefined;
  /**
   * Special color or pattern.
   */
  color?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.dispense.color
   */
  _color?:fhir.FhirElementArgs;
  /**
   * Brand recommendations or restrictions.
   */
  brand?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.dispense.brand
   */
  _brand?:fhir.FhirElementArgs;
  /**
   * Notes for special requirements such as coatings and lens materials.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * Deals with details of the dispense part of the supply specification.
 */
export class VisionPrescriptionDispense extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'VisionPrescriptionDispense';
  /**
   * Identifies the type of vision correction product which is required for the patient.
   */
  public product?: fhir.CodeableConcept|undefined;
  /**
   * The eye for which the lens applies.
   */
  public eye?: fhir.FhirCode<VisionEyeCodeType>|undefined;
  /**
   * Lens power measured in diopters (0.25 units).
   */
  public sphere?: fhir.FhirDecimal|undefined;
  /**
   * Power adjustment for astigmatism measured in diopters (0.25 units).
   */
  public cylinder?: fhir.FhirDecimal|undefined;
  /**
   * Adjustment for astigmatism measured in integer degrees.
   */
  public axis?: fhir.FhirInteger|undefined;
  /**
   * Amount of prism to compensate for eye alignment in fractional units.
   */
  public prism?: fhir.FhirDecimal|undefined;
  /**
   * The relative base, or reference lens edge, for the prism.
   */
  public base?: fhir.FhirCode<VisionBaseCodeType>|undefined;
  /**
   * Power adjustment for multifocal lenses measured in diopters (0.25 units).
   */
  public add?: fhir.FhirDecimal|undefined;
  /**
   * Contact lens power measured in diopters (0.25 units).
   */
  public power?: fhir.FhirDecimal|undefined;
  /**
   * Back curvature measured in millimeters.
   */
  public backCurve?: fhir.FhirDecimal|undefined;
  /**
   * Contact lens diameter measured in millimeters.
   */
  public diameter?: fhir.FhirDecimal|undefined;
  /**
   * The recommended maximum wear period for the lens.
   */
  public duration?: fhir.Quantity|undefined;
  /**
   * Special color or pattern.
   */
  public color?: fhir.FhirString|undefined;
  /**
   * Brand recommendations or restrictions.
   */
  public brand?: fhir.FhirString|undefined;
  /**
   * Notes for special requirements such as coatings and lens materials.
   */
  public note: fhir.Annotation[];
  /**
   * Default constructor for VisionPrescriptionDispense - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<VisionPrescriptionDispenseArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['product']) { this.product = new fhir.CodeableConcept(source.product); }
    if (source['eye']) { this.eye = new fhir.FhirCode<VisionEyeCodeType>({value: source.eye}); }
    if (source['_eye']) {
      if (this.eye) { this.eye.addExtendedProperties(source._eye!); }
      else { this.eye = new fhir.FhirCode<VisionEyeCodeType>(source._eye as Partial<fhir.FhirCode>); }
    }
    if (source['sphere']) { this.sphere = new fhir.FhirDecimal({value: source.sphere}); }
    if (source['_sphere']) {
      if (this.sphere) { this.sphere.addExtendedProperties(source._sphere!); }
      else { this.sphere = new fhir.FhirDecimal(source._sphere as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['cylinder']) { this.cylinder = new fhir.FhirDecimal({value: source.cylinder}); }
    if (source['_cylinder']) {
      if (this.cylinder) { this.cylinder.addExtendedProperties(source._cylinder!); }
      else { this.cylinder = new fhir.FhirDecimal(source._cylinder as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['axis']) { this.axis = new fhir.FhirInteger({value: source.axis}); }
    if (source['_axis']) {
      if (this.axis) { this.axis.addExtendedProperties(source._axis!); }
      else { this.axis = new fhir.FhirInteger(source._axis as Partial<fhir.FhirIntegerArgs>); }
    }
    if (source['prism']) { this.prism = new fhir.FhirDecimal({value: source.prism}); }
    if (source['_prism']) {
      if (this.prism) { this.prism.addExtendedProperties(source._prism!); }
      else { this.prism = new fhir.FhirDecimal(source._prism as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['base']) { this.base = new fhir.FhirCode<VisionBaseCodeType>({value: source.base}); }
    if (source['_base']) {
      if (this.base) { this.base.addExtendedProperties(source._base!); }
      else { this.base = new fhir.FhirCode<VisionBaseCodeType>(source._base as Partial<fhir.FhirCode>); }
    }
    if (source['add']) { this.add = new fhir.FhirDecimal({value: source.add}); }
    if (source['_add']) {
      if (this.add) { this.add.addExtendedProperties(source._add!); }
      else { this.add = new fhir.FhirDecimal(source._add as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['power']) { this.power = new fhir.FhirDecimal({value: source.power}); }
    if (source['_power']) {
      if (this.power) { this.power.addExtendedProperties(source._power!); }
      else { this.power = new fhir.FhirDecimal(source._power as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['backCurve']) { this.backCurve = new fhir.FhirDecimal({value: source.backCurve}); }
    if (source['_backCurve']) {
      if (this.backCurve) { this.backCurve.addExtendedProperties(source._backCurve!); }
      else { this.backCurve = new fhir.FhirDecimal(source._backCurve as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['diameter']) { this.diameter = new fhir.FhirDecimal({value: source.diameter}); }
    if (source['_diameter']) {
      if (this.diameter) { this.diameter.addExtendedProperties(source._diameter!); }
      else { this.diameter = new fhir.FhirDecimal(source._diameter as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['duration']) { this.duration = new fhir.Quantity(source.duration); }
    if (source['color']) { this.color = new fhir.FhirString({value: source.color}); }
    if (source['_color']) {
      if (this.color) { this.color.addExtendedProperties(source._color!); }
      else { this.color = new fhir.FhirString(source._color as Partial<fhir.FhirStringArgs>); }
    }
    if (source['brand']) { this.brand = new fhir.FhirString({value: source.brand}); }
    if (source['_brand']) {
      if (this.brand) { this.brand.addExtendedProperties(source._brand!); }
      else { this.brand = new fhir.FhirString(source._brand as Partial<fhir.FhirStringArgs>); }
    }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'VisionPrescription.dispense' }
    this.vOS('product',exp)
    this.vOSV('eye',exp,'VisionEye',VisionEyeVsValidation,'r')
    this.vOS('sphere',exp)
    this.vOS('cylinder',exp)
    this.vOS('axis',exp)
    this.vOS('prism',exp)
    this.vOSV('base',exp,'VisionBase',VisionBaseVsValidation,'r')
    this.vOS('add',exp)
    this.vOS('power',exp)
    this.vOS('backCurve',exp)
    this.vOS('diameter',exp)
    this.vOS('duration',exp)
    this.vOS('color',exp)
    this.vOS('brand',exp)
    this.vOA('note',exp)
    return issues;
  }
}
/**
 * Valid arguments for the VisionPrescription type.
 */
export interface VisionPrescriptionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "VisionPrescription"|undefined;
  /**
   * Business identifier which may be used by other parties to reference or identify the prescription.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The status of the resource instance.
   */
  status?: fhir.FhirCode<FmStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * A link to a resource representing the person to whom the vision products will be supplied.
   */
  patient?: fhir.ReferenceArgs|undefined;
  /**
   * A link to a resource that identifies the particular occurrence of contact between patient and health care provider.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * The date (and perhaps time) when the prescription was written.
   */
  dateWritten?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.dateWritten
   */
  _dateWritten?:fhir.FhirElementArgs;
  /**
   * The healthcare professional responsible for authorizing the prescription.
   */
  prescriber?: fhir.ReferenceArgs|undefined;
  /**
   * Can be the reason or the indication for writing the prescription.
   */
  reason?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Can be the reason or the indication for writing the prescription.
   */
  reasonCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Can be the reason or the indication for writing the prescription.
   */
  reasonReference?: fhir.ReferenceArgs|undefined;
  /**
   * Deals with details of the dispense part of the supply specification.
   */
  dispense?: fhir.VisionPrescriptionDispenseArgs[]|undefined;
}

/**
 * An authorization for the supply of glasses and/or contact lenses to a patient.
 */
export class VisionPrescription extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'VisionPrescription';
  /**
   * Resource Type Name
   */
  public override resourceType: "VisionPrescription";
  /**
   * Business identifier which may be used by other parties to reference or identify the prescription.
   */
  public identifier: fhir.Identifier[];
  /**
   * The status of the resource instance.
   */
  public status?: fhir.FhirCode<FmStatusCodeType>|undefined;
  /**
   * A link to a resource representing the person to whom the vision products will be supplied.
   */
  public patient?: fhir.Reference|undefined;
  /**
   * A link to a resource that identifies the particular occurrence of contact between patient and health care provider.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * The date (and perhaps time) when the prescription was written.
   */
  public dateWritten?: fhir.FhirDateTime|undefined;
  /**
   * The healthcare professional responsible for authorizing the prescription.
   */
  public prescriber?: fhir.Reference|undefined;
  /**
   * Can be the reason or the indication for writing the prescription.
   */
  public reason?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element VisionPrescription.reason[x]
   */
  protected static readonly _fts_reasonIsChoice:true = true;
  /**
   * Deals with details of the dispense part of the supply specification.
   */
  public dispense: fhir.VisionPrescriptionDispense[];
  /**
   * Default constructor for VisionPrescription - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<VisionPrescriptionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'VisionPrescription';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<FmStatusCodeType>({value: source.status}); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<FmStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['dateWritten']) { this.dateWritten = new fhir.FhirDateTime({value: source.dateWritten}); }
    if (source['_dateWritten']) {
      if (this.dateWritten) { this.dateWritten.addExtendedProperties(source._dateWritten!); }
      else { this.dateWritten = new fhir.FhirDateTime(source._dateWritten as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['prescriber']) { this.prescriber = new fhir.Reference(source.prescriber); }
    if (source['reason']) { this.reason = source.reason; }
    else if (source['reasonCodeableConcept']) { this.reason = new fhir.CodeableConcept(source.reasonCodeableConcept); }
    else if (source['reasonReference']) { this.reason = new fhir.Reference(source.reasonReference); }
    if (source['dispense']) { this.dispense = source.dispense.map((x) => new fhir.VisionPrescriptionDispense(x)); }
    else { this.dispense = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'VisionPrescription' }
    this.vRS('resourceType',exp)
    this.vOA('identifier',exp)
    this.vOSV('status',exp,'FmStatus',FmStatusVsValidation,'r')
    this.vOS('patient',exp)
    this.vOS('encounter',exp)
    this.vOS('dateWritten',exp)
    this.vOS('prescriber',exp)
    this.vOS('reason',exp)
    this.vOA('dispense',exp)
    return issues;
  }
}
