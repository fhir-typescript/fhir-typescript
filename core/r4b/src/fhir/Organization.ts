// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: Organization

import * as fhir from '../fhir.js';

// @ts-ignore
import { ContactentityTypeCodes,  ContactentityTypeCodeType } from '../fhirValueSets/ContactentityTypeCodes.js';
// @ts-ignore
import { ContactentityTypeVsValidation } from '../fhirValueSets/ContactentityTypeVsValidation.js';
// @ts-ignore
import { OrganizationTypeCodes,  OrganizationTypeCodeType } from '../fhirValueSets/OrganizationTypeCodes.js';
// @ts-ignore
import { OrganizationTypeVsValidation } from '../fhirValueSets/OrganizationTypeVsValidation.js';
/**
 * Valid arguments for the OrganizationContact type.
 */
export interface OrganizationContactArgs extends fhir.BackboneElementArgs {
  /**
   * Indicates a purpose for which the contact can be reached.
   */
  purpose?: fhir.CodeableConceptArgs|undefined;
  /**
   * A name associated with the contact.
   */
  name?: fhir.HumanNameArgs|undefined;
  /**
   * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
  /**
   * Visiting or postal addresses for the contact.
   */
  address?: fhir.AddressArgs|undefined;
}

/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export class OrganizationContact extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'OrganizationContact';
  /**
   * Indicates a purpose for which the contact can be reached.
   */
  public purpose?: fhir.CodeableConcept|undefined;
  /**
   * A name associated with the contact.
   */
  public name?: fhir.HumanName|undefined;
  /**
   * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * Visiting or postal addresses for the contact.
   */
  public address?: fhir.Address|undefined;
  /**
   * Default constructor for OrganizationContact - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<OrganizationContactArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['purpose']) { this.purpose = new fhir.CodeableConcept(source.purpose, options); }
    if (source['name']) { this.name = new fhir.HumanName(source.name, options); }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x, options)); }
    else { this.telecom = []; }
    if (source['address']) { this.address = new fhir.Address(source.address, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Organization.contact' }
    iss.push(...this.vOS('purpose',exp));
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOA('telecom',exp));
    iss.push(...this.vOS('address',exp));
    return iss;
  }
}
/**
 * Valid arguments for the Organization type.
 */
export interface OrganizationArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Organization"|undefined;
  /**
   * Identifier for the organization that is used to identify the organization across multiple disparate systems.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This active flag is not intended to be used to mark an organization as temporarily closed or under construction. Instead the Location(s) within the Organization should have the suspended status. If further details of the reason for the suspension are required, then an extension on this element should be used.
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  active?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Organization.active
   */
  _active?:fhir.FhirElementArgs;
  /**
   * Organizations can be corporations, wards, sections, clinical teams, government departments, etc. Note that code is generally a classifier of the type of organization; in many applications, codes are used to identity a particular organization (say, ward) as opposed to another of the same type - these are identifiers, not codes
   * When considering if multiple types are appropriate, you should evaluate if child organizations would be a more appropriate use of the concept, as different types likely are in different sub-areas of the organization. This is most likely to be used where type values have orthogonal values, such as a religious, academic and medical center.
   * We expect that some jurisdictions will profile this optionality to be a single cardinality.
   */
  type?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * If the name of an organization changes, consider putting the old name in the alias column so that it can still be located through searches.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Organization.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the organization.
   */
  alias?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: Organization.alias
   */
  _alias?:(fhir.FhirElementArgs|null)[];
  /**
   * The use code 'home' is not to be used. Note that these contacts are not the contact details of people who are employed by or represent the organization, but official contacts for the organization itself.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
  /**
   * Organization may have multiple addresses with different uses or applicable periods. The use code 'home' is not to be used.
   */
  address?: fhir.AddressArgs[]|undefined;
  /**
   * The organization of which this organization forms a part.
   */
  partOf?: fhir.ReferenceArgs|undefined;
  /**
   * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
   */
  contact?: fhir.OrganizationContactArgs[]|undefined;
  /**
   * Technical endpoints providing access to services operated for the organization.
   */
  endpoint?: fhir.ReferenceArgs[]|undefined;
}

/**
 * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 */
export class Organization extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Organization';
  /**
   * Resource Type Name
   */
  public override resourceType: "Organization";
  /**
   * Identifier for the organization that is used to identify the organization across multiple disparate systems.
   */
  public identifier: fhir.Identifier[];
  /**
   * This active flag is not intended to be used to mark an organization as temporarily closed or under construction. Instead the Location(s) within the Organization should have the suspended status. If further details of the reason for the suspension are required, then an extension on this element should be used.
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  public active?: fhir.FhirBoolean|undefined;
  /**
   * Organizations can be corporations, wards, sections, clinical teams, government departments, etc. Note that code is generally a classifier of the type of organization; in many applications, codes are used to identity a particular organization (say, ward) as opposed to another of the same type - these are identifiers, not codes
   * When considering if multiple types are appropriate, you should evaluate if child organizations would be a more appropriate use of the concept, as different types likely are in different sub-areas of the organization. This is most likely to be used where type values have orthogonal values, such as a religious, academic and medical center.
   * We expect that some jurisdictions will profile this optionality to be a single cardinality.
   */
  public type: fhir.CodeableConcept[];
  /**
   * If the name of an organization changes, consider putting the old name in the alias column so that it can still be located through searches.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the organization.
   */
  public alias: fhir.FhirString[];
  /**
   * The use code 'home' is not to be used. Note that these contacts are not the contact details of people who are employed by or represent the organization, but official contacts for the organization itself.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * Organization may have multiple addresses with different uses or applicable periods. The use code 'home' is not to be used.
   */
  public address: fhir.Address[];
  /**
   * The organization of which this organization forms a part.
   */
  public partOf?: fhir.Reference|undefined;
  /**
   * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
   */
  public contact: fhir.OrganizationContact[];
  /**
   * Technical endpoints providing access to services operated for the organization.
   */
  public endpoint: fhir.Reference[];
  /**
   * Default constructor for Organization - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<OrganizationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Organization';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['active'] !== undefined) { this.active = new fhir.FhirBoolean({value: source.active}, options); }
    if (source['_active']) {
      if (this.active) { this.active.addExtendedProperties(source._active!); }
      else { this.active = new fhir.FhirBoolean(source._active as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['type']) { this.type = source.type.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.type = []; }
    if (source['name'] !== undefined) { this.name = new fhir.FhirString({value: source.name}, options); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['alias'] !== undefined) { this.alias = source.alias.map((x) => new fhir.FhirString({value: x}, options)); }
    else { this.alias = []; }
    if (source['_alias']) {
      source._alias.forEach((x,i) => {
        if (this.alias.length >= i) { if (x) { this.alias[i].addExtendedProperties(x); } }
        else { if (x) { this.alias.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x, options)); }
    else { this.telecom = []; }
    if (source['address']) { this.address = source.address.map((x) => new fhir.Address(x, options)); }
    else { this.address = []; }
    if (source['partOf']) { this.partOf = new fhir.Reference(source.partOf, options); }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.OrganizationContact(x, options)); }
    else { this.contact = []; }
    if (source['endpoint']) { this.endpoint = source.endpoint.map((x) => new fhir.Reference(x, options)); }
    else { this.endpoint = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Organization' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('active',exp));
    iss.push(...this.vOA('type',exp));
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOA('alias',exp));
    iss.push(...this.vOA('telecom',exp));
    iss.push(...this.vOA('address',exp));
    iss.push(...this.vOS('partOf',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vOA('endpoint',exp));
    return iss;
  }
}
