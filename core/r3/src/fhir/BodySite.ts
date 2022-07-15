// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: BodySite

import * as fhir from '../fhir.js';

// @ts-ignore
import { BodySiteCodes,  BodySiteCodeType } from '../fhirValueSets/BodySiteCodes.js';
// @ts-ignore
import { BodySiteVsValidation } from '../fhirValueSets/BodySiteVsValidation.js';
// @ts-ignore
import { BodysiteRelativeLocationCodes,  BodysiteRelativeLocationCodeType } from '../fhirValueSets/BodysiteRelativeLocationCodes.js';
// @ts-ignore
import { BodysiteRelativeLocationVsValidation } from '../fhirValueSets/BodysiteRelativeLocationVsValidation.js';
/**
 * Valid arguments for the BodySite type.
 */
export interface BodySiteArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "BodySite"|undefined;
  /**
   * Identifier for this instance of the anatomical location.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  active?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: BodySite.active
   */
  _active?:fhir.FhirElementArgs;
  /**
   * Named anatomical location - ideally coded where possible.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.
   */
  qualifier?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This description could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.
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
  /**
   * The person to which the body site belongs.
   */
  patient: fhir.ReferenceArgs|null;
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
   * Identifier for this instance of the anatomical location.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  public active?: fhir.FhirBoolean|undefined;
  /**
   * Named anatomical location - ideally coded where possible.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.
   */
  public qualifier: fhir.CodeableConcept[];
  /**
   * This description could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Image or images used to identify a location.
   */
  public image: fhir.Attachment[];
  /**
   * The person to which the body site belongs.
   */
  public patient: fhir.Reference|null;
  /**
   * Default constructor for BodySite - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BodySiteArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'BodySite';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['active']) { this.active = new fhir.FhirBoolean({value: source.active}); }
    if (source['_active']) {
      if (this.active) { this.active.addExtendedProperties(source._active!); }
      else { this.active = new fhir.FhirBoolean(source._active as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['qualifier']) { this.qualifier = source.qualifier.map((x) => new fhir.CodeableConcept(x)); }
    else { this.qualifier = []; }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['image']) { this.image = source.image.map((x) => new fhir.Attachment(x)); }
    else { this.image = []; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'BodySite' }
    this.vRS('resourceType',exp)
    this.vOA('identifier',exp)
    this.vOS('active',exp)
    this.vOS('code',exp)
    this.vOA('qualifier',exp)
    this.vOS('description',exp)
    this.vOA('image',exp)
    this.vRS('patient',exp)
    return issues;
  }
}
