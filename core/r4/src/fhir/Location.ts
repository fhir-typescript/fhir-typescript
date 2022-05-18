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
// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the LocationPosition type.
 */
export interface LocationPositionArgs extends fhir.BackboneElementArgs {
  /**
   * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
   */
  longitude: fhir.FhirDecimal|number|undefined;
  /**
   * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
   */
  latitude: fhir.FhirDecimal|number|undefined;
  /**
   * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
   */
  altitude?: fhir.FhirDecimal|number|undefined;
}

/**
 * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
 */
export class LocationPosition extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'LocationPosition';
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
    if (source['latitude']) { this.latitude = new fhir.FhirDecimal({value: source.latitude}); }
    else { this.latitude = null; }
    if (source['altitude']) { this.altitude = new fhir.FhirDecimal({value: source.altitude}); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['longitude']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property longitude:fhir.FhirDecimal fhir: Location.position.longitude:decimal', }));
    }
    if (this["longitude"]) { outcome.issue!.push(...this.longitude.doModelValidation().issue!); }
    if (!this['latitude']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property latitude:fhir.FhirDecimal fhir: Location.position.latitude:decimal', }));
    }
    if (this["latitude"]) { outcome.issue!.push(...this.latitude.doModelValidation().issue!); }
    if (this["altitude"]) { outcome.issue!.push(...this.altitude.doModelValidation().issue!); }
    return outcome;
  }
}
/**
 * Valid arguments for the LocationHoursOfOperation type.
 */
export interface LocationHoursOfOperationArgs extends fhir.BackboneElementArgs {
  /**
   * Indicates which days of the week are available between the start and end Times.
   */
  daysOfWeek?: DaysOfWeekCodeType[]|undefined;
  /**
   * The Location is open all day.
   */
  allDay?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Time that the Location opens.
   */
  openingTime?: fhir.FhirTime|string|undefined;
  /**
   * Time that the Location closes.
   */
  closingTime?: fhir.FhirTime|string|undefined;
}

/**
 * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
 * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
 */
export class LocationHoursOfOperation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'LocationHoursOfOperation';
  /**
   * Indicates which days of the week are available between the start and end Times.
   */
  public daysOfWeek?: DaysOfWeekCodeType[];
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
    if (source['daysOfWeek']) { this.daysOfWeek = source.daysOfWeek.map((x) => x); }
    else { this.daysOfWeek = []; }
    if (source['allDay']) { this.allDay = new fhir.FhirBoolean({value: source.allDay}); }
    if (source['openingTime']) { this.openingTime = new fhir.FhirTime({value: source.openingTime}); }
    if (source['closingTime']) { this.closingTime = new fhir.FhirTime({value: source.closingTime}); }
  }
  /**
   * Required-bound Value Set for daysOfWeek (Location.hoursOfOperation.daysOfWeek)
   */
  public static daysOfWeekRequiredCoding():DaysOfWeekCodingType {
    return DaysOfWeekCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["allDay"]) { outcome.issue!.push(...this.allDay.doModelValidation().issue!); }
    if (this["openingTime"]) { outcome.issue!.push(...this.openingTime.doModelValidation().issue!); }
    if (this["closingTime"]) { outcome.issue!.push(...this.closingTime.doModelValidation().issue!); }
    return outcome;
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
  status?: LocationStatusCodeType|undefined;
  /**
   * The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such as an isolation unit/dialysis chair). This typically covers concepts such as contamination, housekeeping, and other activities like maintenance.
   */
  operationalStatus?: fhir.CodingArgs|undefined;
  /**
   * If the name of a location changes, consider putting the old name in the alias column so that it can still be located through searches.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the location.
   */
  alias?: fhir.FhirString[]|string[]|undefined;
  /**
   * Description of the Location, which helps in finding or referencing the place.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * This is labeled as a modifier because whether or not the location is a class of locations changes how it can be used and understood.
   */
  mode?: LocationModeCodeType|undefined;
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
  public static readonly _fts_dataType:string = 'Location';
  /**
   * Resource Type Name
   */
  public resourceType: "Location";
  /**
   * Unique code or number identifying the location to its users.
   */
  public identifier?: fhir.Identifier[];
  /**
   * The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
   */
  public status?: LocationStatusCodeType|undefined;
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
  public alias?: fhir.FhirString[];
  /**
   * Description of the Location, which helps in finding or referencing the place.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * This is labeled as a modifier because whether or not the location is a class of locations changes how it can be used and understood.
   */
  public mode?: LocationModeCodeType|undefined;
  /**
   * Indicates the type of function performed at the location.
   */
  public type?: fhir.CodeableConcept[];
  /**
   * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
   */
  public telecom?: fhir.ContactPoint[];
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
  public hoursOfOperation?: fhir.LocationHoursOfOperation[];
  /**
   * A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as detailed in the opening hours Times.
   */
  public availabilityExceptions?: fhir.FhirString|undefined;
  /**
   * Technical endpoints providing access to services operated for the location.
   */
  public endpoint?: fhir.Reference[];
  /**
   * Default constructor for Location - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<LocationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Location';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = source.status; }
    if (source['operationalStatus']) { this.operationalStatus = new fhir.Coding(source.operationalStatus); }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['alias']) { this.alias = source.alias.map((x) => new fhir.FhirString({value: x})); }
    else { this.alias = []; }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['mode']) { this.mode = source.mode; }
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
    if (source['endpoint']) { this.endpoint = source.endpoint.map((x) => new fhir.Reference(x)); }
    else { this.endpoint = []; }
  }
  /**
   * Required-bound Value Set for status (Location.status)
   */
  public static statusRequiredCoding():LocationStatusCodingType {
    return LocationStatusCodings;
  }
  /**
   * Preferred-bound Value Set for operationalStatus (Location.operationalStatus)
   */
  public static operationalStatusPreferredCoding():V20116CodingType {
    return V20116Codings;
  }
  /**
   * Required-bound Value Set for mode (Location.mode)
   */
  public static modeRequiredCoding():LocationModeCodingType {
    return LocationModeCodings;
  }
  /**
   * Extensible-bound Value Set for type (Location.type)
   */
  public static typeExtensibleCoding():V3ServiceDeliveryLocationRoleTypeCodingType {
    return V3ServiceDeliveryLocationRoleTypeCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property resourceType:"Location" fhir: Location.resourceType:"Location"', }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["operationalStatus"]) { outcome.issue!.push(...this.operationalStatus.doModelValidation().issue!); }
    if (this["name"]) { outcome.issue!.push(...this.name.doModelValidation().issue!); }
    if (this["alias"]) { this.alias.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["type"]) { this.type.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["telecom"]) { this.telecom.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["address"]) { outcome.issue!.push(...this.address.doModelValidation().issue!); }
    if (this["physicalType"]) { outcome.issue!.push(...this.physicalType.doModelValidation().issue!); }
    if (this["position"]) { outcome.issue!.push(...this.position.doModelValidation().issue!); }
    if (this["managingOrganization"]) { outcome.issue!.push(...this.managingOrganization.doModelValidation().issue!); }
    if (this["partOf"]) { outcome.issue!.push(...this.partOf.doModelValidation().issue!); }
    if (this["hoursOfOperation"]) { this.hoursOfOperation.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["availabilityExceptions"]) { outcome.issue!.push(...this.availabilityExceptions.doModelValidation().issue!); }
    if (this["endpoint"]) { this.endpoint.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}