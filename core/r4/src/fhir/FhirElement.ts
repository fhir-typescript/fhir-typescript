// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Element

import * as fhir from '../fhir.js';

// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the FhirElement type.
 */
export interface FhirElementArgs extends fhir.FhirBaseArgs {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: fhir.FhirString|string|undefined;
  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   */
  extension?: fhir.ExtensionArgs[]|undefined;
}

/**
 * Base definition for all elements in a resource.
 */
export class FhirElement extends fhir.FhirBase {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'Element';
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  public id?: fhir.FhirString|undefined;
  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   */
  public extension?: fhir.Extension[];
  /**
   * Default constructor for FhirElement - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<FhirElementArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['id']) { this.id = new fhir.FhirString({value: source.id}); }
    if (source['extension']) { this.extension = source.extension.map((x) => new fhir.Extension(x)); }
    else { this.extension = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["id"]) { outcome.issue!.push(...this.id.doModelValidation().issue!); }
    if (this["extension"]) { this.extension.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}