// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Address

import * as fhir from '../fhir.js';

// @ts-ignore
import { AddressUseCodings, AddressUseCodingType,} from '../fhirValueSets/AddressUseCodings.js';
// @ts-ignore
import { AddressUseCodes,  AddressUseCodeType } from '../fhirValueSets/AddressUseCodes.js';
// @ts-ignore
import { AddressTypeCodings, AddressTypeCodingType,} from '../fhirValueSets/AddressTypeCodings.js';
// @ts-ignore
import { AddressTypeCodes,  AddressTypeCodeType } from '../fhirValueSets/AddressTypeCodes.js';
/**
 * Valid arguments for the Address type.
 */
export interface AddressArgs extends fhir.FhirElementArgs {
  /**
   * Applications can assume that an address is current unless it explicitly says that it is temporary or old.
   */
  use?: fhir.FhirCode<AddressUseCodeType>|string|undefined;
  /**
   * The definition of Address states that "address is intended to describe postal addresses, not physical locations". However, many applications track whether an address has a dual purpose of being a location that can be visited as well as being a valid delivery destination, and Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).
   */
  type?: fhir.FhirCode<AddressTypeCodeType>|string|undefined;
  /**
   * Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a part.
   */
  text?: fhir.FhirString|string|undefined;
  /**
   * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
   */
  line?: fhir.FhirString[]|string[]|undefined;
  /**
   * The name of the city, town, suburb, village or other community or delivery center.
   */
  city?: fhir.FhirString|string|undefined;
  /**
   * District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead.
   */
  district?: fhir.FhirString|string|undefined;
  /**
   * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).
   */
  state?: fhir.FhirString|string|undefined;
  /**
   * A postal code designating a region defined by the postal service.
   */
  postalCode?: fhir.FhirString|string|undefined;
  /**
   * ISO 3166 3 letter codes can be used in place of a human readable country name.
   */
  country?: fhir.FhirString|string|undefined;
  /**
   * Time period when address was/is in use.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
 */
export class Address extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Address';
  /**
   * Applications can assume that an address is current unless it explicitly says that it is temporary or old.
   */
  public use?: fhir.FhirCode<AddressUseCodeType>|undefined;
  /**
   * The definition of Address states that "address is intended to describe postal addresses, not physical locations". However, many applications track whether an address has a dual purpose of being a location that can be visited as well as being a valid delivery destination, and Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).
   */
  public type?: fhir.FhirCode<AddressTypeCodeType>|undefined;
  /**
   * Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a part.
   */
  public text?: fhir.FhirString|undefined;
  /**
   * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
   */
  public line: fhir.FhirString[];
  /**
   * The name of the city, town, suburb, village or other community or delivery center.
   */
  public city?: fhir.FhirString|undefined;
  /**
   * District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead.
   */
  public district?: fhir.FhirString|undefined;
  /**
   * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).
   */
  public state?: fhir.FhirString|undefined;
  /**
   * A postal code designating a region defined by the postal service.
   */
  public postalCode?: fhir.FhirString|undefined;
  /**
   * ISO 3166 3 letter codes can be used in place of a human readable country name.
   */
  public country?: fhir.FhirString|undefined;
  /**
   * Time period when address was/is in use.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for Address - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AddressArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['use']) { this.use = new fhir.FhirCode<AddressUseCodeType>({value: source.use}); }
    if (source['type']) { this.type = new fhir.FhirCode<AddressTypeCodeType>({value: source.type}); }
    if (source['text']) { this.text = new fhir.FhirString({value: source.text}); }
    if (source['line']) { this.line = source.line.map((x) => new fhir.FhirString({value: x})); }
    else { this.line = []; }
    if (source['city']) { this.city = new fhir.FhirString({value: source.city}); }
    if (source['district']) { this.district = new fhir.FhirString({value: source.district}); }
    if (source['state']) { this.state = new fhir.FhirString({value: source.state}); }
    if (source['postalCode']) { this.postalCode = new fhir.FhirString({value: source.postalCode}); }
    if (source['country']) { this.country = new fhir.FhirString({value: source.country}); }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Required-bound Value Set for use (Address.use)
   */
  public static get useRequiredCodes() {
    return AddressUseCodes;
  }
  /**
   * Required-bound Value Set for type (Address.type)
   */
  public static get typeRequiredCodes() {
    return AddressTypeCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this['use'] && (!Object.values(AddressUseCodes).includes(this.use as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property use?:fhir.FhirCode<AddressUseCodeType> fhir: Address.use:code Required binding to: AddressUse' });
    }
    if (this["use"]) { issues.push(...this.use.doModelValidation()); }
    if (this['type'] && (!Object.values(AddressTypeCodes).includes(this.type as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property type?:fhir.FhirCode<AddressTypeCodeType> fhir: Address.type:code Required binding to: AddressType' });
    }
    if (this["type"]) { issues.push(...this.type.doModelValidation()); }
    if (this["text"]) { issues.push(...this.text.doModelValidation()); }
    if (this["line"]) { this.line.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["city"]) { issues.push(...this.city.doModelValidation()); }
    if (this["district"]) { issues.push(...this.district.doModelValidation()); }
    if (this["state"]) { issues.push(...this.state.doModelValidation()); }
    if (this["postalCode"]) { issues.push(...this.postalCode.doModelValidation()); }
    if (this["country"]) { issues.push(...this.country.doModelValidation()); }
    if (this["period"]) { issues.push(...this.period.doModelValidation()); }
    return issues;
  }
}
