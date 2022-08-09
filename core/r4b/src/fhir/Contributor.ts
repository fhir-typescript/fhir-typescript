// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Contributor

import * as fhir from '../fhir.js';

// @ts-ignore
import { ContributorTypeCodes,  ContributorTypeCodeType } from '../fhirValueSets/ContributorTypeCodes.js';
// @ts-ignore
import { ContributorTypeVsValidation } from '../fhirValueSets/ContributorTypeVsValidation.js';
/**
 * Valid arguments for the Contributor type.
 */
export interface ContributorArgs extends fhir.FhirElementArgs {
  /**
   * The type of contributor.
   */
  type: fhir.FhirCode<ContributorTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Contributor.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * The name of the individual or organization responsible for the contribution.
   */
  name: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Contributor.name
   */
  _name?:fhir.FhirElementArgs;
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
  public static override readonly _fts_dataType:string = 'Contributor';
  /**
   * The type of contributor.
   */
  public type: fhir.FhirCode<ContributorTypeCodeType>|null;
  /**
   * The name of the individual or organization responsible for the contribution.
   */
  public name: fhir.FhirString|null;
  /**
   * Contact details to assist a user in finding and communicating with the contributor.
   */
  public contact: fhir.ContactDetail[];
  /**
   * Default constructor for Contributor - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ContributorArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type'] !== undefined) { this.type = new fhir.FhirCode<ContributorTypeCodeType>({value: source.type}, options); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<ContributorTypeCodeType>(source._type as Partial<fhir.FhirCode>, options); }
    }
    if (source['name'] !== undefined) { this.name = new fhir.FhirString({value: source.name}, options); }
    else { this.name = null; }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x, options)); }
    else { this.contact = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Contributor' }
    iss.push(...this.vRSV('type',exp,'ContributorType',ContributorTypeVsValidation,'r'));
    iss.push(...this.vRS('name',exp));
    iss.push(...this.vOA('contact',exp));
    return iss;
  }
}
