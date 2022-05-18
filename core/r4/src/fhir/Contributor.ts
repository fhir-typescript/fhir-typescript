// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Contributor

import * as fhir from '../fhir.js';

// @ts-ignore
import { ContributorTypeCodings, ContributorTypeCodingType,} from '../fhirValueSets/ContributorTypeCodings.js';
// @ts-ignore
import { ContributorTypeCodes,  ContributorTypeCodeType } from '../fhirValueSets/ContributorTypeCodes.js';
// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the Contributor type.
 */
export interface ContributorArgs extends fhir.FhirElementArgs {
  /**
   * The type of contributor.
   */
  type: ContributorTypeCodeType|null;
  /**
   * The name of the individual or organization responsible for the contribution.
   */
  name: fhir.FhirString|string|undefined;
  /**
   * Contact details to assist a user in finding and communicating with the contributor.
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
}

/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
export class Contributor extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'Contributor';
  /**
   * The type of contributor.
   */
  public type: ContributorTypeCodeType|null;
  /**
   * The name of the individual or organization responsible for the contribution.
   */
  public name: fhir.FhirString|null;
  /**
   * Contact details to assist a user in finding and communicating with the contributor.
   */
  public contact?: fhir.ContactDetail[];
  /**
   * Default constructor for Contributor - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ContributorArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = source.type; }
    else { this.type = null; }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    else { this.name = null; }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x)); }
    else { this.contact = []; }
  }
  /**
   * Required-bound Value Set for type (Contributor.type)
   */
  public static typeRequiredCoding():ContributorTypeCodingType {
    return ContributorTypeCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['type']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property type:ContributorTypeCodeType fhir: Contributor.type:code', }));
    }
    if (!this['name']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property name:fhir.FhirString fhir: Contributor.name:string', }));
    }
    if (this["name"]) { outcome.issue!.push(...this.name.doModelValidation().issue!); }
    if (this["contact"]) { this.contact.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}