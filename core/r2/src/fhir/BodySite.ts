// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: BodySite

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the BodySite type.
 */
export interface BodySiteArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "BodySite"|undefined;
  /**
   * The person to which the body site belongs.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * Identifier for this instance of the anatomical location.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Named anatomical location - ideally coded where possible.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * Modifier to refine the anatomical location.  These include modifiers for laterality, relative location, directionality, number, and plane.
   */
  modifier?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Description of anatomical location.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: BodySite.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Image or images used to identify a location.
   */
  image?: fhir.AttachmentArgs[]|undefined;
}

/**
 * Record details about the anatomical location of a specimen or body part.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 */
export class BodySite extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'BodySite';
  /**
   * Resource Type Name
   */
  public override resourceType: "BodySite";
  /**
   * The person to which the body site belongs.
   */
  public patient: fhir.Reference|null;
  /**
   * Identifier for this instance of the anatomical location.
   */
  public identifier: fhir.Identifier[];
  /**
   * Named anatomical location - ideally coded where possible.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * Modifier to refine the anatomical location.  These include modifiers for laterality, relative location, directionality, number, and plane.
   */
  public modifier: fhir.CodeableConcept[];
  /**
   * Description of anatomical location.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Image or images used to identify a location.
   */
  public image: fhir.Attachment[];
  /**
   * Default constructor for BodySite - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BodySiteArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'BodySite';
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['modifier']) { this.modifier = source.modifier.map((x) => new fhir.CodeableConcept(x)); }
    else { this.modifier = []; }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['image']) { this.image = source.image.map((x) => new fhir.Attachment(x)); }
    else { this.image = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'BodySite' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vRS('patient',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('code',exp));
    iss.push(...this.vOA('modifier',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOA('image',exp));
    return iss;
  }
}