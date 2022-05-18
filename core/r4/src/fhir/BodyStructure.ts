// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: BodyStructure

import * as fhir from '../fhir.js';

// @ts-ignore
import { BodystructureCodeCodings, BodystructureCodeCodingType,} from '../fhirValueSets/BodystructureCodeCodings.js';
// @ts-ignore
import { BodystructureCodeCodes,  BodystructureCodeCodeType } from '../fhirValueSets/BodystructureCodeCodes.js';
// @ts-ignore
import { BodySiteCodings, BodySiteCodingType,} from '../fhirValueSets/BodySiteCodings.js';
// @ts-ignore
import { BodySiteCodes,  BodySiteCodeType } from '../fhirValueSets/BodySiteCodes.js';
// @ts-ignore
import { BodystructureRelativeLocationCodings, BodystructureRelativeLocationCodingType,} from '../fhirValueSets/BodystructureRelativeLocationCodings.js';
// @ts-ignore
import { BodystructureRelativeLocationCodes,  BodystructureRelativeLocationCodeType } from '../fhirValueSets/BodystructureRelativeLocationCodes.js';
// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the BodyStructure type.
 */
export interface BodyStructureArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "BodyStructure"|undefined;
  /**
   * Identifier for this instance of the anatomical structure.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  active?: fhir.FhirBoolean|boolean|undefined;
  /**
   * The minimum cardinality of 0 supports the use case of specifying a location without defining a morphology.
   */
  morphology?: fhir.CodeableConceptArgs|undefined;
  /**
   * The anatomical location or region of the specimen, lesion, or body structure.
   */
  location?: fhir.CodeableConceptArgs|undefined;
  /**
   * Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.
   */
  locationQualifier?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This description could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.
   */
  description?: fhir.FhirString|string|undefined;
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
 * Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 */
export class BodyStructure extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'BodyStructure';
  /**
   * Resource Type Name
   */
  public resourceType: "BodyStructure";
  /**
   * Identifier for this instance of the anatomical structure.
   */
  public identifier?: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  public active?: fhir.FhirBoolean|undefined;
  /**
   * The minimum cardinality of 0 supports the use case of specifying a location without defining a morphology.
   */
  public morphology?: fhir.CodeableConcept|undefined;
  /**
   * The anatomical location or region of the specimen, lesion, or body structure.
   */
  public location?: fhir.CodeableConcept|undefined;
  /**
   * Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.
   */
  public locationQualifier?: fhir.CodeableConcept[];
  /**
   * This description could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Image or images used to identify a location.
   */
  public image?: fhir.Attachment[];
  /**
   * The person to which the body site belongs.
   */
  public patient: fhir.Reference|null;
  /**
   * Default constructor for BodyStructure - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BodyStructureArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'BodyStructure';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['active']) { this.active = new fhir.FhirBoolean({value: source.active}); }
    if (source['morphology']) { this.morphology = new fhir.CodeableConcept(source.morphology); }
    if (source['location']) { this.location = new fhir.CodeableConcept(source.location); }
    if (source['locationQualifier']) { this.locationQualifier = source.locationQualifier.map((x) => new fhir.CodeableConcept(x)); }
    else { this.locationQualifier = []; }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['image']) { this.image = source.image.map((x) => new fhir.Attachment(x)); }
    else { this.image = []; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property resourceType:"BodyStructure" fhir: BodyStructure.resourceType:"BodyStructure"', }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["active"]) { outcome.issue!.push(...this.active.doModelValidation().issue!); }
    if (this["morphology"]) { outcome.issue!.push(...this.morphology.doModelValidation().issue!); }
    if (this["location"]) { outcome.issue!.push(...this.location.doModelValidation().issue!); }
    if (this["locationQualifier"]) { this.locationQualifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["image"]) { this.image.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['patient']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property patient:fhir.Reference fhir: BodyStructure.patient:Reference', }));
    }
    if (this["patient"]) { outcome.issue!.push(...this.patient.doModelValidation().issue!); }
    return outcome;
  }
}