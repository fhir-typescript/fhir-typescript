// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: NamingSystem

import * as fhir from '../fhir.js';

// @ts-ignore
import { NamingsystemIdentifierTypeCodes,  NamingsystemIdentifierTypeCodeType } from '../fhirValueSets/NamingsystemIdentifierTypeCodes.js';
// @ts-ignore
import { NamingsystemIdentifierTypeVsValidation } from '../fhirValueSets/NamingsystemIdentifierTypeVsValidation.js';
// @ts-ignore
import { PublicationStatusCodes,  PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
// @ts-ignore
import { PublicationStatusVsValidation } from '../fhirValueSets/PublicationStatusVsValidation.js';
// @ts-ignore
import { NamingsystemTypeCodes,  NamingsystemTypeCodeType } from '../fhirValueSets/NamingsystemTypeCodes.js';
// @ts-ignore
import { NamingsystemTypeVsValidation } from '../fhirValueSets/NamingsystemTypeVsValidation.js';
// @ts-ignore
import { IdentifierTypeCodes,  IdentifierTypeCodeType } from '../fhirValueSets/IdentifierTypeCodes.js';
// @ts-ignore
import { IdentifierTypeVsValidation } from '../fhirValueSets/IdentifierTypeVsValidation.js';
// @ts-ignore
import { JurisdictionCodes,  JurisdictionCodeType } from '../fhirValueSets/JurisdictionCodes.js';
// @ts-ignore
import { JurisdictionVsValidation } from '../fhirValueSets/JurisdictionVsValidation.js';
/**
 * Valid arguments for the NamingSystemUniqueId type.
 */
export interface NamingSystemUniqueIdArgs extends fhir.BackboneElementArgs {
  /**
   * Different identifier types may be used in different types of communications (OIDs for v3, URIs for FHIR, etc.).  Other includes RUIDs from v3, standard v2 code name strings, etc.
   */
  type: fhir.FhirCode<NamingsystemIdentifierTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: NamingSystem.uniqueId.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * If the value is a URI intended for use as FHIR system identifier, the URI should not contain "\" or "?" or "," since this makes escaping very difficult.
   */
  value: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: NamingSystem.uniqueId.value
   */
  _value?:fhir.FhirElementArgs;
  /**
   * Indicates whether this identifier is the "preferred" identifier of this type.
   */
  preferred?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: NamingSystem.uniqueId.preferred
   */
  _preferred?:fhir.FhirElementArgs;
  /**
   * e.g. "must be used in Germany" or "was initially published in error with this value".
   */
  comment?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: NamingSystem.uniqueId.comment
   */
  _comment?:fhir.FhirElementArgs;
  /**
   * Within a registry, a given identifier should only be "active" for a single namespace at a time.  (Ideally, an identifier should only ever be associated with a single namespace across all time).
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
 */
export class NamingSystemUniqueId extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'NamingSystemUniqueId';
  /**
   * Different identifier types may be used in different types of communications (OIDs for v3, URIs for FHIR, etc.).  Other includes RUIDs from v3, standard v2 code name strings, etc.
   */
  public type: fhir.FhirCode<NamingsystemIdentifierTypeCodeType>|null;
  /**
   * If the value is a URI intended for use as FHIR system identifier, the URI should not contain "\" or "?" or "," since this makes escaping very difficult.
   */
  public value: fhir.FhirString|null;
  /**
   * Indicates whether this identifier is the "preferred" identifier of this type.
   */
  public preferred?: fhir.FhirBoolean|undefined;
  /**
   * e.g. "must be used in Germany" or "was initially published in error with this value".
   */
  public comment?: fhir.FhirString|undefined;
  /**
   * Within a registry, a given identifier should only be "active" for a single namespace at a time.  (Ideally, an identifier should only ever be associated with a single namespace across all time).
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for NamingSystemUniqueId - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<NamingSystemUniqueIdArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.FhirCode<NamingsystemIdentifierTypeCodeType>({value: source.type}); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<NamingsystemIdentifierTypeCodeType>(source._type as Partial<fhir.FhirCode>); }
    }
    if (source['value']) { this.value = new fhir.FhirString({value: source.value}); }
    else { this.value = null; }
    if (source['_value']) {
      if (this.value) { this.value.addExtendedProperties(source._value!); }
      else { this.value = new fhir.FhirString(source._value as Partial<fhir.FhirStringArgs>); }
    }
    if (source['preferred']) { this.preferred = new fhir.FhirBoolean({value: source.preferred}); }
    if (source['_preferred']) {
      if (this.preferred) { this.preferred.addExtendedProperties(source._preferred!); }
      else { this.preferred = new fhir.FhirBoolean(source._preferred as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['comment']) { this.comment = new fhir.FhirString({value: source.comment}); }
    if (source['_comment']) {
      if (this.comment) { this.comment.addExtendedProperties(source._comment!); }
      else { this.comment = new fhir.FhirString(source._comment as Partial<fhir.FhirStringArgs>); }
    }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'NamingSystem.uniqueId' }
    iss.push(...this.vRSV('type',exp,'NamingsystemIdentifierType',NamingsystemIdentifierTypeVsValidation,'r'));
    iss.push(...this.vRS('value',exp));
    iss.push(...this.vOS('preferred',exp));
    iss.push(...this.vOS('comment',exp));
    iss.push(...this.vOS('period',exp));
    return iss;
  }
}
/**
 * Valid arguments for the NamingSystem type.
 */
export interface NamingSystemArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "NamingSystem"|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly. The"symbolic name" for an OID would be captured as an extension.
   */
  name: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: NamingSystem.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Allows filtering of naming systems that are appropriate for use vs. not.  
   * This is labeled as "Is Modifier" because applications should not use a retired naming system without due consideration.
   */
  status: fhir.FhirCode<PublicationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: NamingSystem.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Indicates the purpose for the naming system - what kinds of things does it make unique?
   */
  kind: fhir.FhirCode<NamingsystemTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: NamingSystem.kind
   */
  _kind?:fhir.FhirElementArgs;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the naming system. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: NamingSystem.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Usually an organization, but may be an individual. The publisher (or steward) of the naming system is the organization or individual primarily responsible for the maintenance and upkeep of the naming system. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the naming system. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: NamingSystem.publisher
   */
  _publisher?:fhir.FhirElementArgs;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
  /**
   * This is the primary organization.  Responsibility for some aspects of a namespace may be delegated.
   */
  responsible?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: NamingSystem.responsible
   */
  _responsible?:fhir.FhirElementArgs;
  /**
   * This will most commonly be used for identifier namespaces, but categories could potentially be useful for code systems and authorities as well.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * This description can be used to capture details such as why the naming system was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the naming system as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
   */
  description?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: NamingSystem.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
   */
  useContext?: fhir.UsageContextArgs[]|undefined;
  /**
   * It may be possible for the naming system to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.
   */
  usage?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: NamingSystem.usage
   */
  _usage?:fhir.FhirElementArgs;
  /**
   * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
   */
  uniqueId: fhir.NamingSystemUniqueIdArgs[]|null;
  /**
   * For naming systems that are retired, indicates the naming system that should be used in their place (if any).
   */
  replacedBy?: fhir.ReferenceArgs|undefined;
}

/**
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
 */
export class NamingSystem extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'NamingSystem';
  /**
   * Resource Type Name
   */
  public override resourceType: "NamingSystem";
  /**
   * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly. The"symbolic name" for an OID would be captured as an extension.
   */
  public name: fhir.FhirString|null;
  /**
   * Allows filtering of naming systems that are appropriate for use vs. not.  
   * This is labeled as "Is Modifier" because applications should not use a retired naming system without due consideration.
   */
  public status: fhir.FhirCode<PublicationStatusCodeType>|null;
  /**
   * Indicates the purpose for the naming system - what kinds of things does it make unique?
   */
  public kind: fhir.FhirCode<NamingsystemTypeCodeType>|null;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the naming system. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date: fhir.FhirDateTime|null;
  /**
   * Usually an organization, but may be an individual. The publisher (or steward) of the naming system is the organization or individual primarily responsible for the maintenance and upkeep of the naming system. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the naming system. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  public contact: fhir.ContactDetail[];
  /**
   * This is the primary organization.  Responsibility for some aspects of a namespace may be delegated.
   */
  public responsible?: fhir.FhirString|undefined;
  /**
   * This will most commonly be used for identifier namespaces, but categories could potentially be useful for code systems and authorities as well.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * This description can be used to capture details such as why the naming system was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the naming system as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
   */
  public description?: fhir.FhirMarkdown|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
   */
  public useContext: fhir.UsageContext[];
  /**
   * It may be possible for the naming system to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  public jurisdiction: fhir.CodeableConcept[];
  /**
   * Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.
   */
  public usage?: fhir.FhirString|undefined;
  /**
   * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
   */
  public uniqueId: fhir.NamingSystemUniqueId[];
  /**
   * For naming systems that are retired, indicates the naming system that should be used in their place (if any).
   */
  public replacedBy?: fhir.Reference|undefined;
  /**
   * Default constructor for NamingSystem - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<NamingSystemArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'NamingSystem';
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    else { this.name = null; }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['status']) { this.status = new fhir.FhirCode<PublicationStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<PublicationStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['kind']) { this.kind = new fhir.FhirCode<NamingsystemTypeCodeType>({value: source.kind}); }
    else { this.kind = null; }
    if (source['_kind']) {
      if (this.kind) { this.kind.addExtendedProperties(source._kind!); }
      else { this.kind = new fhir.FhirCode<NamingsystemTypeCodeType>(source._kind as Partial<fhir.FhirCode>); }
    }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    else { this.date = null; }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['publisher']) { this.publisher = new fhir.FhirString({value: source.publisher}); }
    if (source['_publisher']) {
      if (this.publisher) { this.publisher.addExtendedProperties(source._publisher!); }
      else { this.publisher = new fhir.FhirString(source._publisher as Partial<fhir.FhirStringArgs>); }
    }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x)); }
    else { this.contact = []; }
    if (source['responsible']) { this.responsible = new fhir.FhirString({value: source.responsible}); }
    if (source['_responsible']) {
      if (this.responsible) { this.responsible.addExtendedProperties(source._responsible!); }
      else { this.responsible = new fhir.FhirString(source._responsible as Partial<fhir.FhirStringArgs>); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['description']) { this.description = new fhir.FhirMarkdown({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirMarkdown(source._description as Partial<fhir.FhirMarkdownArgs>); }
    }
    if (source['useContext']) { this.useContext = source.useContext.map((x) => new fhir.UsageContext(x)); }
    else { this.useContext = []; }
    if (source['jurisdiction']) { this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x)); }
    else { this.jurisdiction = []; }
    if (source['usage']) { this.usage = new fhir.FhirString({value: source.usage}); }
    if (source['_usage']) {
      if (this.usage) { this.usage.addExtendedProperties(source._usage!); }
      else { this.usage = new fhir.FhirString(source._usage as Partial<fhir.FhirStringArgs>); }
    }
    if (source['uniqueId']) { this.uniqueId = source.uniqueId.map((x) => new fhir.NamingSystemUniqueId(x)); }
    else { this.uniqueId = []; }
    if (source['replacedBy']) { this.replacedBy = new fhir.Reference(source.replacedBy); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'NamingSystem' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vRS('name',exp));
    iss.push(...this.vRSV('status',exp,'PublicationStatus',PublicationStatusVsValidation,'r'));
    iss.push(...this.vRSV('kind',exp,'NamingsystemType',NamingsystemTypeVsValidation,'r'));
    iss.push(...this.vRS('date',exp));
    iss.push(...this.vOS('publisher',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vOS('responsible',exp));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOA('useContext',exp));
    iss.push(...this.vOA('jurisdiction',exp));
    iss.push(...this.vOS('usage',exp));
    iss.push(...this.vRA('uniqueId',exp));
    iss.push(...this.vOS('replacedBy',exp));
    return iss;
  }
}