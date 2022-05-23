// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: VisionPrescription

import * as fhir from '../fhir.js';

// @ts-ignore
import { VisionBaseCodesCodings, VisionBaseCodesCodingType,} from '../fhirValueSets/VisionBaseCodesCodings.js';
// @ts-ignore
import { VisionBaseCodesCodes,  VisionBaseCodesCodeType } from '../fhirValueSets/VisionBaseCodesCodes.js';
// @ts-ignore
import { VisionProductCodings, VisionProductCodingType,} from '../fhirValueSets/VisionProductCodings.js';
// @ts-ignore
import { VisionProductCodes,  VisionProductCodeType } from '../fhirValueSets/VisionProductCodes.js';
// @ts-ignore
import { VisionEyeCodesCodings, VisionEyeCodesCodingType,} from '../fhirValueSets/VisionEyeCodesCodings.js';
// @ts-ignore
import { VisionEyeCodesCodes,  VisionEyeCodesCodeType } from '../fhirValueSets/VisionEyeCodesCodes.js';
// @ts-ignore
import { FmStatusCodings, FmStatusCodingType,} from '../fhirValueSets/FmStatusCodings.js';
// @ts-ignore
import { FmStatusCodes,  FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
/**
 * Valid arguments for the VisionPrescriptionLensSpecificationPrism type.
 */
export interface VisionPrescriptionLensSpecificationPrismArgs extends fhir.BackboneElementArgs {
  /**
   * Amount of prism to compensate for eye alignment in fractional units.
   */
  amount: fhir.FhirDecimal|number|undefined;
  /**
   * The relative base, or reference lens edge, for the prism.
   */
  base: fhir.FhirCode<VisionBaseCodesCodeType>|string|undefined;
}

/**
 * Allows for adjustment on two axis.
 */
export class VisionPrescriptionLensSpecificationPrism extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'VisionPrescriptionLensSpecificationPrism';
  /**
   * Amount of prism to compensate for eye alignment in fractional units.
   */
  public amount: fhir.FhirDecimal|null;
  /**
   * The relative base, or reference lens edge, for the prism.
   */
  public base: fhir.FhirCode<VisionBaseCodesCodeType>|null;
  /**
   * Default constructor for VisionPrescriptionLensSpecificationPrism - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<VisionPrescriptionLensSpecificationPrismArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['amount']) { this.amount = new fhir.FhirDecimal({value: source.amount}); }
    else { this.amount = null; }
    if (source['base']) { this.base = new fhir.FhirCode<VisionBaseCodesCodeType>({value: source.base}); }
    else { this.base = null; }
  }
  /**
   * Required-bound Value Set for base (VisionPrescription.lensSpecification.prism.base)
   */
  public static get baseRequiredCodes() {
    return VisionBaseCodesCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['amount']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property amount:fhir.FhirDecimal fhir: VisionPrescription.lensSpecification.prism.amount:decimal' });
    }
    if (this["amount"]) { issues.push(...this.amount.doModelValidation()); }
    if (!this['base']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property base:fhir.FhirCode<VisionBaseCodesCodeType> fhir: VisionPrescription.lensSpecification.prism.base:code' });
    }
    if (this['base'] && (!Object.values(VisionBaseCodesCodes).includes(this.base as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property base:fhir.FhirCode<VisionBaseCodesCodeType> fhir: VisionPrescription.lensSpecification.prism.base:code Required binding to: VisionBaseCodes' });
    }
    if (this["base"]) { issues.push(...this.base.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the VisionPrescriptionLensSpecification type.
 */
export interface VisionPrescriptionLensSpecificationArgs extends fhir.BackboneElementArgs {
  /**
   * Identifies the type of vision correction product which is required for the patient.
   */
  product: fhir.CodeableConceptArgs|null;
  /**
   * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
   */
  eye: fhir.FhirCode<VisionEyeCodesCodeType>|string|undefined;
  /**
   * The value is negative for near-sighted and positive for far sighted.
   * Often insurance will not cover a lens with power between +75 and -75.
   */
  sphere?: fhir.FhirDecimal|number|undefined;
  /**
   * Power adjustment for astigmatism measured in dioptres (0.25 units).
   */
  cylinder?: fhir.FhirDecimal|number|undefined;
  /**
   * The limits are +180 and -180 degrees.
   */
  axis?: fhir.FhirInteger|number|undefined;
  /**
   * Allows for adjustment on two axis.
   */
  prism?: fhir.VisionPrescriptionLensSpecificationPrismArgs[]|undefined;
  /**
   * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
   */
  add?: fhir.FhirDecimal|number|undefined;
  /**
   * Contact lens power measured in dioptres (0.25 units).
   */
  power?: fhir.FhirDecimal|number|undefined;
  /**
   * Back curvature measured in millimetres.
   */
  backCurve?: fhir.FhirDecimal|number|undefined;
  /**
   * Contact lens diameter measured in millimetres.
   */
  diameter?: fhir.FhirDecimal|number|undefined;
  /**
   * The recommended maximum wear period for the lens.
   */
  duration?: fhir.QuantityArgs|undefined;
  /**
   * Special color or pattern.
   */
  color?: fhir.FhirString|string|undefined;
  /**
   * Brand recommendations or restrictions.
   */
  brand?: fhir.FhirString|string|undefined;
  /**
   * Notes for special requirements such as coatings and lens materials.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
 */
export class VisionPrescriptionLensSpecification extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'VisionPrescriptionLensSpecification';
  /**
   * Identifies the type of vision correction product which is required for the patient.
   */
  public product: fhir.CodeableConcept|null;
  /**
   * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
   */
  public eye: fhir.FhirCode<VisionEyeCodesCodeType>|null;
  /**
   * The value is negative for near-sighted and positive for far sighted.
   * Often insurance will not cover a lens with power between +75 and -75.
   */
  public sphere?: fhir.FhirDecimal|undefined;
  /**
   * Power adjustment for astigmatism measured in dioptres (0.25 units).
   */
  public cylinder?: fhir.FhirDecimal|undefined;
  /**
   * The limits are +180 and -180 degrees.
   */
  public axis?: fhir.FhirInteger|undefined;
  /**
   * Allows for adjustment on two axis.
   */
  public prism: fhir.VisionPrescriptionLensSpecificationPrism[];
  /**
   * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
   */
  public add?: fhir.FhirDecimal|undefined;
  /**
   * Contact lens power measured in dioptres (0.25 units).
   */
  public power?: fhir.FhirDecimal|undefined;
  /**
   * Back curvature measured in millimetres.
   */
  public backCurve?: fhir.FhirDecimal|undefined;
  /**
   * Contact lens diameter measured in millimetres.
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
   * Default constructor for VisionPrescriptionLensSpecification - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<VisionPrescriptionLensSpecificationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['product']) { this.product = new fhir.CodeableConcept(source.product); }
    else { this.product = null; }
    if (source['eye']) { this.eye = new fhir.FhirCode<VisionEyeCodesCodeType>({value: source.eye}); }
    else { this.eye = null; }
    if (source['sphere']) { this.sphere = new fhir.FhirDecimal({value: source.sphere}); }
    if (source['cylinder']) { this.cylinder = new fhir.FhirDecimal({value: source.cylinder}); }
    if (source['axis']) { this.axis = new fhir.FhirInteger({value: source.axis}); }
    if (source['prism']) { this.prism = source.prism.map((x) => new fhir.VisionPrescriptionLensSpecificationPrism(x)); }
    else { this.prism = []; }
    if (source['add']) { this.add = new fhir.FhirDecimal({value: source.add}); }
    if (source['power']) { this.power = new fhir.FhirDecimal({value: source.power}); }
    if (source['backCurve']) { this.backCurve = new fhir.FhirDecimal({value: source.backCurve}); }
    if (source['diameter']) { this.diameter = new fhir.FhirDecimal({value: source.diameter}); }
    if (source['duration']) { this.duration = new fhir.Quantity(source.duration); }
    if (source['color']) { this.color = new fhir.FhirString({value: source.color}); }
    if (source['brand']) { this.brand = new fhir.FhirString({value: source.brand}); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
  }
  /**
   * Required-bound Value Set for eye (VisionPrescription.lensSpecification.eye)
   */
  public static get eyeRequiredCodes() {
    return VisionEyeCodesCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['product']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property product:fhir.CodeableConcept fhir: VisionPrescription.lensSpecification.product:CodeableConcept' });
    }
    if (this["product"]) { issues.push(...this.product.doModelValidation()); }
    if (!this['eye']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property eye:fhir.FhirCode<VisionEyeCodesCodeType> fhir: VisionPrescription.lensSpecification.eye:code' });
    }
    if (this['eye'] && (!Object.values(VisionEyeCodesCodes).includes(this.eye as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property eye:fhir.FhirCode<VisionEyeCodesCodeType> fhir: VisionPrescription.lensSpecification.eye:code Required binding to: VisionEyeCodes' });
    }
    if (this["eye"]) { issues.push(...this.eye.doModelValidation()); }
    if (this["sphere"]) { issues.push(...this.sphere.doModelValidation()); }
    if (this["cylinder"]) { issues.push(...this.cylinder.doModelValidation()); }
    if (this["axis"]) { issues.push(...this.axis.doModelValidation()); }
    if (this["prism"]) { this.prism.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["add"]) { issues.push(...this.add.doModelValidation()); }
    if (this["power"]) { issues.push(...this.power.doModelValidation()); }
    if (this["backCurve"]) { issues.push(...this.backCurve.doModelValidation()); }
    if (this["diameter"]) { issues.push(...this.diameter.doModelValidation()); }
    if (this["duration"]) { issues.push(...this.duration.doModelValidation()); }
    if (this["color"]) { issues.push(...this.color.doModelValidation()); }
    if (this["brand"]) { issues.push(...this.brand.doModelValidation()); }
    if (this["note"]) { this.note.forEach((x) => { issues.push(...x.doModelValidation()); }) }
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
   * A unique identifier assigned to this vision prescription.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<FmStatusCodeType>|string|undefined;
  /**
   * The date this resource was created.
   */
  created: fhir.FhirDateTime|string|undefined;
  /**
   * A resource reference to the person to whom the vision prescription applies.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
   */
  dateWritten: fhir.FhirDateTime|string|undefined;
  /**
   * The healthcare professional responsible for authorizing the prescription.
   */
  prescriber: fhir.ReferenceArgs|null;
  /**
   * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
   */
  lensSpecification: fhir.VisionPrescriptionLensSpecificationArgs[]|null;
}

/**
 * An authorization for the provision of glasses and/or contact lenses to a patient.
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
   * A unique identifier assigned to this vision prescription.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<FmStatusCodeType>|null;
  /**
   * The date this resource was created.
   */
  public created: fhir.FhirDateTime|null;
  /**
   * A resource reference to the person to whom the vision prescription applies.
   */
  public patient: fhir.Reference|null;
  /**
   * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
   */
  public dateWritten: fhir.FhirDateTime|null;
  /**
   * The healthcare professional responsible for authorizing the prescription.
   */
  public prescriber: fhir.Reference|null;
  /**
   * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
   */
  public lensSpecification: fhir.VisionPrescriptionLensSpecification[];
  /**
   * Default constructor for VisionPrescription - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<VisionPrescriptionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'VisionPrescription';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<FmStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['created']) { this.created = new fhir.FhirDateTime({value: source.created}); }
    else { this.created = null; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['dateWritten']) { this.dateWritten = new fhir.FhirDateTime({value: source.dateWritten}); }
    else { this.dateWritten = null; }
    if (source['prescriber']) { this.prescriber = new fhir.Reference(source.prescriber); }
    else { this.prescriber = null; }
    if (source['lensSpecification']) { this.lensSpecification = source.lensSpecification.map((x) => new fhir.VisionPrescriptionLensSpecification(x)); }
    else { this.lensSpecification = []; }
  }
  /**
   * Required-bound Value Set for status (VisionPrescription.status)
   */
  public static get statusRequiredCodes() {
    return FmStatusCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"VisionPrescription" fhir: VisionPrescription.resourceType:"VisionPrescription"' });
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status:fhir.FhirCode<FmStatusCodeType> fhir: VisionPrescription.status:code' });
    }
    if (this['status'] && (!Object.values(FmStatusCodes).includes(this.status as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status:fhir.FhirCode<FmStatusCodeType> fhir: VisionPrescription.status:code Required binding to: FmStatus' });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation()); }
    if (!this['created']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property created:fhir.FhirDateTime fhir: VisionPrescription.created:dateTime' });
    }
    if (this["created"]) { issues.push(...this.created.doModelValidation()); }
    if (!this['patient']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property patient:fhir.Reference fhir: VisionPrescription.patient:Reference' });
    }
    if (this["patient"]) { issues.push(...this.patient.doModelValidation()); }
    if (this["encounter"]) { issues.push(...this.encounter.doModelValidation()); }
    if (!this['dateWritten']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property dateWritten:fhir.FhirDateTime fhir: VisionPrescription.dateWritten:dateTime' });
    }
    if (this["dateWritten"]) { issues.push(...this.dateWritten.doModelValidation()); }
    if (!this['prescriber']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property prescriber:fhir.Reference fhir: VisionPrescription.prescriber:Reference' });
    }
    if (this["prescriber"]) { issues.push(...this.prescriber.doModelValidation()); }
    if (!this['lensSpecification']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property lensSpecification:fhir.VisionPrescriptionLensSpecification[] fhir: VisionPrescription.lensSpecification:lensSpecification' });
    } else if (!Array.isArray(this.lensSpecification)) {
      issues.push({ severity: 'error', code: 'structure', diagnostics: 'Found scalar in array property lensSpecification:fhir.VisionPrescriptionLensSpecification[] fhir: VisionPrescription.lensSpecification:lensSpecification' });
    } else if (this.lensSpecification.length === 0) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property lensSpecification:fhir.VisionPrescriptionLensSpecification[] fhir: VisionPrescription.lensSpecification:lensSpecification' });
    }
    if (this["lensSpecification"]) { this.lensSpecification.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
