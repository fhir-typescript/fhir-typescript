// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Location

import * as fhir from '../fhir.js';

// @ts-ignore
import { DaysOfWeekCodings, DaysOfWeekCodingType,} from '../fhirValueSets/DaysOfWeekCodings.js';
// @ts-ignore
import { DaysOfWeekCodes,  DaysOfWeekCodeType } from '../fhirValueSets/DaysOfWeekCodes.js';
// @ts-ignore
import { LocationStatusCodings, LocationStatusCodingType,} from '../fhirValueSets/LocationStatusCodings.js';
// @ts-ignore
import { LocationStatusCodes,  LocationStatusCodeType } from '../fhirValueSets/LocationStatusCodes.js';
// @ts-ignore
import { V20116Codings, V20116CodingType,} from '../fhirValueSets/V20116Codings.js';
// @ts-ignore
import { V20116Codes,  V20116CodeType } from '../fhirValueSets/V20116Codes.js';
// @ts-ignore
import { LocationModeCodings, LocationModeCodingType,} from '../fhirValueSets/LocationModeCodings.js';
// @ts-ignore
import { LocationModeCodes,  LocationModeCodeType } from '../fhirValueSets/LocationModeCodes.js';
// @ts-ignore
import { V3ServiceDeliveryLocationRoleTypeCodings, V3ServiceDeliveryLocationRoleTypeCodingType,} from '../fhirValueSets/V3ServiceDeliveryLocationRoleTypeCodings.js';
// @ts-ignore
import { V3ServiceDeliveryLocationRoleTypeCodes,  V3ServiceDeliveryLocationRoleTypeCodeType } from '../fhirValueSets/V3ServiceDeliveryLocationRoleTypeCodes.js';
// @ts-ignore
import { LocationPhysicalTypeCodings, LocationPhysicalTypeCodingType,} from '../fhirValueSets/LocationPhysicalTypeCodings.js';
// @ts-ignore
import { LocationPhysicalTypeCodes,  LocationPhysicalTypeCodeType } from '../fhirValueSets/LocationPhysicalTypeCodes.js';
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
 * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
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
    if (source['longitude']) { this.longitude = new fhir.FhirDecimal({value: source.longitude}); }
    else { this.longitude = null; }
    if (source['_longitude']) {
      if (this.longitude) { this.longitude.addExtendedProperties(source._longitude!); }
      else { this.longitude = new fhir.FhirDecimal(source._longitude as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['latitude']) { this.latitude = new fhir.FhirDecimal({value: source.latitude}); }
    else { this.latitude = null; }
    if (source['_latitude']) {
      if (this.latitude) { this.latitude.addExtendedProperties(source._latitude!); }
      else { this.latitude = new fhir.FhirDecimal(source._latitude as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['altitude']) { this.altitude = new fhir.FhirDecimal({value: source.altitude}); }
    if (source['_altitude']) {
      if (this.altitude) { this.altitude.addExtendedProperties(source._altitude!); }
      else { this.altitude = new fhir.FhirDecimal(source._altitude as Partial<fhir.FhirDecimalArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['longitude']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property longitude:fhir.FhirDecimal fhir: Location.position.longitude:decimal' });
    }
    if (this["longitude"]) { issues.push(...this.longitude.doModelValidation()); }
    if (!this['latitude']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property latitude:fhir.FhirDecimal fhir: Location.position.latitude:decimal' });
    }
    if (this["latitude"]) { issues.push(...this.latitude.doModelValidation()); }
    if (this["altitude"]) { issues.push(...this.altitude.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the LocationHoursOfOperation type.
 */
export interface LocationHoursOfOperationArgs extends fhir.BackboneElementArgs {
  /**
   * Indicates which days of the week are available between the start and end Times.
   */
  daysOfWeek?: fhir.FhirCode<DaysOfWeekCodeType>[]|string[]|undefined;
  /**
   * Extended properties for primitive element: Location.hoursOfOperation.daysOfWeek
   */
  _daysOfWeek?:(fhir.FhirElementArgs|null)[];
  /**
   * The Location is open all day.
   */
  allDay?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Location.hoursOfOperation.allDay
   */
  _allDay?:fhir.FhirElementArgs;
  /**
   * Time that the Location opens.
   */
  openingTime?: fhir.FhirTime|string|undefined;
  /**
   * Extended properties for primitive element: Location.hoursOfOperation.openingTime
   */
  _openingTime?:fhir.FhirElementArgs;
  /**
   * Time that the Location closes.
   */
  closingTime?: fhir.FhirTime|string|undefined;
  /**
   * Extended properties for primitive element: Location.hoursOfOperation.closingTime
   */
  _closingTime?:fhir.FhirElementArgs;
}

/**
 * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
 * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
 */
export class LocationHoursOfOperation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'LocationHoursOfOperation';
  /**
   * Indicates which days of the week are available between the start and end Times.
   */
  public daysOfWeek: fhir.FhirCode<DaysOfWeekCodeType>[];
  /**
   * The Location is open all day.
   */
  public allDay?: fhir.FhirBoolean|undefined;
  /**
   * Time that the Location opens.
   */
  public openingTime?: fhir.FhirTime|undefined;
  /**
   * Time that the Location closes.
   */
  public closingTime?: fhir.FhirTime|undefined;
  /**
   * Default constructor for LocationHoursOfOperation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<LocationHoursOfOperationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['daysOfWeek']) { this.daysOfWeek = source.daysOfWeek.map((x) => new fhir.FhirCode<DaysOfWeekCodeType>({value: x})); }
    else { this.daysOfWeek = []; }
    if (source['_daysOfWeek']) {
      source._daysOfWeek.forEach((x,i) => {
        if (this.daysOfWeek.length >= i) { if (x) { this.daysOfWeek[i].addExtendedProperties(x); } }
        else { if (x) { this.daysOfWeek.push(new fhir.FhirCode<DaysOfWeekCodeType>(x as Partial<fhir.FhirCode>)); } }
      });
    }
    if (source['allDay']) { this.allDay = new fhir.FhirBoolean({value: source.allDay}); }
    if (source['_allDay']) {
      if (this.allDay) { this.allDay.addExtendedProperties(source._allDay!); }
      else { this.allDay = new fhir.FhirBoolean(source._allDay as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['openingTime']) { this.openingTime = new fhir.FhirTime({value: source.openingTime}); }
    if (source['_openingTime']) {
      if (this.openingTime) { this.openingTime.addExtendedProperties(source._openingTime!); }
      else { this.openingTime = new fhir.FhirTime(source._openingTime as Partial<fhir.FhirTimeArgs>); }
    }
    if (source['closingTime']) { this.closingTime = new fhir.FhirTime({value: source.closingTime}); }
    if (source['_closingTime']) {
      if (this.closingTime) { this.closingTime.addExtendedProperties(source._closingTime!); }
      else { this.closingTime = new fhir.FhirTime(source._closingTime as Partial<fhir.FhirTimeArgs>); }
    }
  }
  /**
   * Required-bound Value Set for daysOfWeek (Location.hoursOfOperation.daysOfWeek)
   */
  public static get daysOfWeekRequiredCodes() {
    return DaysOfWeekCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this['daysOfWeek']) {
      this.daysOfWeek.forEach((v) => {
        if (!Object.values(DaysOfWeekCodes).includes(v as any)) {
          issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property daysOfWeek?:fhir.FhirCode<DaysOfWeekCodeType>[] fhir: Location.hoursOfOperation.daysOfWeek:code Required binding to: DaysOfWeek' });
        }
      });
    }
    if (this["daysOfWeek"]) { this.daysOfWeek.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["allDay"]) { issues.push(...this.allDay.doModelValidation()); }
    if (this["openingTime"]) { issues.push(...this.openingTime.doModelValidation()); }
    if (this["closingTime"]) { issues.push(...this.closingTime.doModelValidation()); }
    return issues;
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
   * Unique code or number identifying the location to its users.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
   */
  status?: fhir.FhirCode<LocationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Location.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such as an isolation unit/dialysis chair). This typically covers concepts such as contamination, housekeeping, and other activities like maintenance.
   */
  operationalStatus?: fhir.CodingArgs|undefined;
  /**
   * If the name of a location changes, consider putting the old name in the alias column so that it can still be located through searches.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Location.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the location.
   */
  alias?: fhir.FhirString[]|string[]|undefined;
  /**
   * Extended properties for primitive element: Location.alias
   */
  _alias?:(fhir.FhirElementArgs|null)[];
  /**
   * Description of the Location, which helps in finding or referencing the place.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Location.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * This is labeled as a modifier because whether or not the location is a class of locations changes how it can be used and understood.
   */
  mode?: fhir.FhirCode<LocationModeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Location.mode
   */
  _mode?:fhir.FhirElementArgs;
  /**
   * Indicates the type of function performed at the location.
   */
  type?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
  /**
   * Additional addresses should be recorded using another instance of the Location resource, or via the Organization.
   */
  address?: fhir.AddressArgs|undefined;
  /**
   * Physical form of the location, e.g. building, room, vehicle, road.
   */
  physicalType?: fhir.CodeableConceptArgs|undefined;
  /**
   * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
   */
  position?: fhir.LocationPositionArgs|undefined;
  /**
   * This can also be used as the part of the organization hierarchy where this location provides services. These services can be defined through the HealthcareService resource.
   */
  managingOrganization?: fhir.ReferenceArgs|undefined;
  /**
   * Another Location of which this Location is physically a part of.
   */
  partOf?: fhir.ReferenceArgs|undefined;
  /**
   * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
   * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
   */
  hoursOfOperation?: fhir.LocationHoursOfOperationArgs[]|undefined;
  /**
   * A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as detailed in the opening hours Times.
   */
  availabilityExceptions?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Location.availabilityExceptions
   */
  _availabilityExceptions?:fhir.FhirElementArgs;
  /**
   * Technical endpoints providing access to services operated for the location.
   */
  endpoint?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
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
   * Unique code or number identifying the location to its users.
   */
  public identifier: fhir.Identifier[];
  /**
   * The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
   */
  public status?: fhir.FhirCode<LocationStatusCodeType>|undefined;
  /**
   * The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such as an isolation unit/dialysis chair). This typically covers concepts such as contamination, housekeeping, and other activities like maintenance.
   */
  public operationalStatus?: fhir.Coding|undefined;
  /**
   * If the name of a location changes, consider putting the old name in the alias column so that it can still be located through searches.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the location.
   */
  public alias: fhir.FhirString[];
  /**
   * Description of the Location, which helps in finding or referencing the place.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * This is labeled as a modifier because whether or not the location is a class of locations changes how it can be used and understood.
   */
  public mode?: fhir.FhirCode<LocationModeCodeType>|undefined;
  /**
   * Indicates the type of function performed at the location.
   */
  public type: fhir.CodeableConcept[];
  /**
   * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * Additional addresses should be recorded using another instance of the Location resource, or via the Organization.
   */
  public address?: fhir.Address|undefined;
  /**
   * Physical form of the location, e.g. building, room, vehicle, road.
   */
  public physicalType?: fhir.CodeableConcept|undefined;
  /**
   * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
   */
  public position?: fhir.LocationPosition|undefined;
  /**
   * This can also be used as the part of the organization hierarchy where this location provides services. These services can be defined through the HealthcareService resource.
   */
  public managingOrganization?: fhir.Reference|undefined;
  /**
   * Another Location of which this Location is physically a part of.
   */
  public partOf?: fhir.Reference|undefined;
  /**
   * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
   * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
   */
  public hoursOfOperation: fhir.LocationHoursOfOperation[];
  /**
   * A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as detailed in the opening hours Times.
   */
  public availabilityExceptions?: fhir.FhirString|undefined;
  /**
   * Technical endpoints providing access to services operated for the location.
   */
  public endpoint: fhir.Reference[];
  /**
   * Default constructor for Location - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<LocationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Location';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<LocationStatusCodeType>({value: source.status}); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<LocationStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['operationalStatus']) { this.operationalStatus = new fhir.Coding(source.operationalStatus); }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['alias']) { this.alias = source.alias.map((x) => new fhir.FhirString({value: x})); }
    else { this.alias = []; }
    if (source['_alias']) {
      source._alias.forEach((x,i) => {
        if (this.alias.length >= i) { if (x) { this.alias[i].addExtendedProperties(x); } }
        else { if (x) { this.alias.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['mode']) { this.mode = new fhir.FhirCode<LocationModeCodeType>({value: source.mode}); }
    if (source['_mode']) {
      if (this.mode) { this.mode.addExtendedProperties(source._mode!); }
      else { this.mode = new fhir.FhirCode<LocationModeCodeType>(source._mode as Partial<fhir.FhirCode>); }
    }
    if (source['type']) { this.type = source.type.map((x) => new fhir.CodeableConcept(x)); }
    else { this.type = []; }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x)); }
    else { this.telecom = []; }
    if (source['address']) { this.address = new fhir.Address(source.address); }
    if (source['physicalType']) { this.physicalType = new fhir.CodeableConcept(source.physicalType); }
    if (source['position']) { this.position = new fhir.LocationPosition(source.position); }
    if (source['managingOrganization']) { this.managingOrganization = new fhir.Reference(source.managingOrganization); }
    if (source['partOf']) { this.partOf = new fhir.Reference(source.partOf); }
    if (source['hoursOfOperation']) { this.hoursOfOperation = source.hoursOfOperation.map((x) => new fhir.LocationHoursOfOperation(x)); }
    else { this.hoursOfOperation = []; }
    if (source['availabilityExceptions']) { this.availabilityExceptions = new fhir.FhirString({value: source.availabilityExceptions}); }
    if (source['_availabilityExceptions']) {
      if (this.availabilityExceptions) { this.availabilityExceptions.addExtendedProperties(source._availabilityExceptions!); }
      else { this.availabilityExceptions = new fhir.FhirString(source._availabilityExceptions as Partial<fhir.FhirStringArgs>); }
    }
    if (source['endpoint']) { this.endpoint = source.endpoint.map((x) => new fhir.Reference(x)); }
    else { this.endpoint = []; }
  }
  /**
   * Required-bound Value Set for status (Location.status)
   */
  public static get statusRequiredCodes() {
    return LocationStatusCodes;
  }
  /**
   * Preferred-bound Value Set for operationalStatus (Location.operationalStatus)
   */
  public static get operationalStatusPreferredCodings():V20116CodingType {
    return V20116Codings;
  }
  /**
   * Required-bound Value Set for mode (Location.mode)
   */
  public static get modeRequiredCodes() {
    return LocationModeCodes;
  }
  /**
   * Extensible-bound Value Set for type (Location.type)
   */
  public static get typeExtensibleCodings():V3ServiceDeliveryLocationRoleTypeCodingType {
    return V3ServiceDeliveryLocationRoleTypeCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"Location" fhir: Location.resourceType:"Location"' });
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this['status'] && (!Object.values(LocationStatusCodes).includes(this.status as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status?:fhir.FhirCode<LocationStatusCodeType> fhir: Location.status:code Required binding to: LocationStatus' });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation()); }
    if (this["operationalStatus"]) { issues.push(...this.operationalStatus.doModelValidation()); }
    if (this["name"]) { issues.push(...this.name.doModelValidation()); }
    if (this["alias"]) { this.alias.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["description"]) { issues.push(...this.description.doModelValidation()); }
    if (this['mode'] && (!Object.values(LocationModeCodes).includes(this.mode as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property mode?:fhir.FhirCode<LocationModeCodeType> fhir: Location.mode:code Required binding to: LocationMode' });
    }
    if (this["mode"]) { issues.push(...this.mode.doModelValidation()); }
    if (this["type"]) { this.type.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["telecom"]) { this.telecom.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["address"]) { issues.push(...this.address.doModelValidation()); }
    if (this["physicalType"]) { issues.push(...this.physicalType.doModelValidation()); }
    if (this["position"]) { issues.push(...this.position.doModelValidation()); }
    if (this["managingOrganization"]) { issues.push(...this.managingOrganization.doModelValidation()); }
    if (this["partOf"]) { issues.push(...this.partOf.doModelValidation()); }
    if (this["hoursOfOperation"]) { this.hoursOfOperation.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["availabilityExceptions"]) { issues.push(...this.availabilityExceptions.doModelValidation()); }
    if (this["endpoint"]) { this.endpoint.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
