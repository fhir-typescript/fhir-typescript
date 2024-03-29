// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Location

import * as fhir from '../fhir.js';

// @ts-ignore
import { LocationStatusCodes,  LocationStatusCodeType } from '../fhirValueSets/LocationStatusCodes.js';
// @ts-ignore
import { LocationStatusVsValidation } from '../fhirValueSets/LocationStatusVsValidation.js';
// @ts-ignore
import { LocationModeCodes,  LocationModeCodeType } from '../fhirValueSets/LocationModeCodes.js';
// @ts-ignore
import { LocationModeVsValidation } from '../fhirValueSets/LocationModeVsValidation.js';
/**
 * Valid arguments for the LocationPosition type.
 */
export interface LocationPositionArgs extends fhir.BackboneElementArgs {
  /**
   * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
   */
  longitude: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: Location.position.longitude
   */
  _longitude?:fhir.FhirElementArgs;
  /**
   * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
   */
  latitude: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: Location.position.latitude
   */
  _latitude?:fhir.FhirElementArgs;
  /**
   * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
   */
  altitude?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: Location.position.altitude
   */
  _altitude?:fhir.FhirElementArgs;
}

/**
 * For mobile applications and automated route-finding knowing the exact location of the Location is required.
 */
export class LocationPosition extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'LocationPosition';
  /**
   * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
   */
  public longitude: fhir.FhirDecimal|null;
  /**
   * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
   */
  public latitude: fhir.FhirDecimal|null;
  /**
   * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
   */
  public altitude?: fhir.FhirDecimal|undefined;
  /**
   * Default constructor for LocationPosition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<LocationPositionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['longitude'] !== undefined) { this.longitude = new fhir.FhirDecimal({value: source.longitude}, options); }
    else { this.longitude = null; }
    if (source['_longitude']) {
      if (this.longitude) { this.longitude.addExtendedProperties(source._longitude!); }
      else { this.longitude = new fhir.FhirDecimal(source._longitude as Partial<fhir.FhirDecimalArgs>, options); }
    }
    if (source['latitude'] !== undefined) { this.latitude = new fhir.FhirDecimal({value: source.latitude}, options); }
    else { this.latitude = null; }
    if (source['_latitude']) {
      if (this.latitude) { this.latitude.addExtendedProperties(source._latitude!); }
      else { this.latitude = new fhir.FhirDecimal(source._latitude as Partial<fhir.FhirDecimalArgs>, options); }
    }
    if (source['altitude'] !== undefined) { this.altitude = new fhir.FhirDecimal({value: source.altitude}, options); }
    if (source['_altitude']) {
      if (this.altitude) { this.altitude.addExtendedProperties(source._altitude!); }
      else { this.altitude = new fhir.FhirDecimal(source._altitude as Partial<fhir.FhirDecimalArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Location.position' }
    iss.push(...this.vRS('longitude',exp));
    iss.push(...this.vRS('latitude',exp));
    iss.push(...this.vOS('altitude',exp));
    return iss;
  }
}
/**
 * Valid arguments for the Location type.
 */
export interface LocationArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Location"|undefined;
  /**
   * Organization label locations in registries, need to keep track of those.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * active | suspended | inactive.
   */
  status?: fhir.FhirCode<LocationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Location.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Name of the location as used by humans. Does not need to be unique.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Location.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Humans need additional information to verify a correct location has been identified.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Location.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * When using a Location resource for scheduling or orders, we need to be able to refer to a class of Locations instead of a specific Location.
   */
  mode?: fhir.FhirCode<LocationModeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Location.mode
   */
  _mode?:fhir.FhirElementArgs;
  /**
   * Indicates the type of function performed at the location.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
  /**
   * If locations can be visited, we need to keep track of their address.
   */
  address?: fhir.AddressArgs|undefined;
  /**
   * For purposes of showing relevant locations in queries, we need to categorize locations.
   */
  physicalType?: fhir.CodeableConceptArgs|undefined;
  /**
   * For mobile applications and automated route-finding knowing the exact location of the Location is required.
   */
  position?: fhir.LocationPositionArgs|undefined;
  /**
   * Need to know who manages the location.
   */
  managingOrganization?: fhir.ReferenceArgs|undefined;
  /**
   * For purposes of location, display and identification, knowing which locations are located within other locations is important.
   */
  partOf?: fhir.ReferenceArgs|undefined;
}

/**
 * Details and position information for a physical place where services are provided  and resources and participants may be stored, found, contained or accommodated.
 */
export class Location extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Location';
  /**
   * Resource Type Name
   */
  public override resourceType: "Location";
  /**
   * Organization label locations in registries, need to keep track of those.
   */
  public identifier: fhir.Identifier[];
  /**
   * active | suspended | inactive.
   */
  public status?: fhir.FhirCode<LocationStatusCodeType>|undefined;
  /**
   * Name of the location as used by humans. Does not need to be unique.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * Humans need additional information to verify a correct location has been identified.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * When using a Location resource for scheduling or orders, we need to be able to refer to a class of Locations instead of a specific Location.
   */
  public mode?: fhir.FhirCode<LocationModeCodeType>|undefined;
  /**
   * Indicates the type of function performed at the location.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * If locations can be visited, we need to keep track of their address.
   */
  public address?: fhir.Address|undefined;
  /**
   * For purposes of showing relevant locations in queries, we need to categorize locations.
   */
  public physicalType?: fhir.CodeableConcept|undefined;
  /**
   * For mobile applications and automated route-finding knowing the exact location of the Location is required.
   */
  public position?: fhir.LocationPosition|undefined;
  /**
   * Need to know who manages the location.
   */
  public managingOrganization?: fhir.Reference|undefined;
  /**
   * For purposes of location, display and identification, knowing which locations are located within other locations is important.
   */
  public partOf?: fhir.Reference|undefined;
  /**
   * Default constructor for Location - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<LocationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Location';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<LocationStatusCodeType>({value: source.status}, options); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<LocationStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['name'] !== undefined) { this.name = new fhir.FhirString({value: source.name}, options); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['mode'] !== undefined) { this.mode = new fhir.FhirCode<LocationModeCodeType>({value: source.mode}, options); }
    if (source['_mode']) {
      if (this.mode) { this.mode.addExtendedProperties(source._mode!); }
      else { this.mode = new fhir.FhirCode<LocationModeCodeType>(source._mode as Partial<fhir.FhirCode>, options); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x, options)); }
    else { this.telecom = []; }
    if (source['address']) { this.address = new fhir.Address(source.address, options); }
    if (source['physicalType']) { this.physicalType = new fhir.CodeableConcept(source.physicalType, options); }
    if (source['position']) { this.position = new fhir.LocationPosition(source.position, options); }
    if (source['managingOrganization']) { this.managingOrganization = new fhir.Reference(source.managingOrganization, options); }
    if (source['partOf']) { this.partOf = new fhir.Reference(source.partOf, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Location' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOSV('status',exp,'LocationStatus',LocationStatusVsValidation,'r'));
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOSV('mode',exp,'LocationMode',LocationModeVsValidation,'r'));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOA('telecom',exp));
    iss.push(...this.vOS('address',exp));
    iss.push(...this.vOS('physicalType',exp));
    iss.push(...this.vOS('position',exp));
    iss.push(...this.vOS('managingOrganization',exp));
    iss.push(...this.vOS('partOf',exp));
    return iss;
  }
}
