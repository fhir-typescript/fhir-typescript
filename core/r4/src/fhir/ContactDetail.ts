// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: ContactDetail

import * as fhir from '../fhir.js';

// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the ContactDetail type.
 */
export interface ContactDetailArgs extends fhir.FhirElementArgs {
  /**
   * If there is no named individual, the telecom information is for the organization as a whole.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * The contact details for the individual (if a name was provided) or the organization.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
}

/**
 * Specifies contact information for a person or organization.
 */
export class ContactDetail extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'ContactDetail';
  /**
   * If there is no named individual, the telecom information is for the organization as a whole.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * The contact details for the individual (if a name was provided) or the organization.
   */
  public telecom?: fhir.ContactPoint[];
  /**
   * Default constructor for ContactDetail - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ContactDetailArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x)); }
    else { this.telecom = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["name"]) { outcome.issue!.push(...this.name.doModelValidation().issue!); }
    if (this["telecom"]) { this.telecom.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}
