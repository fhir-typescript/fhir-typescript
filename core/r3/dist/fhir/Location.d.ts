import * as fhir from '../fhir.js';
import { LocationStatusCodeType } from '../fhirValueSets/LocationStatusCodes.js';
import { LocationModeCodeType } from '../fhirValueSets/LocationModeCodes.js';
/**
 * Valid arguments for the LocationPosition type.
 */
export interface LocationPositionArgs extends fhir.BackboneElementArgs {
    /**
     * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
     */
    longitude: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Location.position.longitude
     */
    _longitude?: fhir.FhirElementArgs;
    /**
     * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
     */
    latitude: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Location.position.latitude
     */
    _latitude?: fhir.FhirElementArgs;
    /**
     * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
     */
    altitude?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Location.position.altitude
     */
    _altitude?: fhir.FhirElementArgs;
}
/**
 * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
 */
export declare class LocationPosition extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
     */
    longitude: fhir.FhirDecimal | null;
    /**
     * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
     */
    latitude: fhir.FhirDecimal | null;
    /**
     * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
     */
    altitude?: fhir.FhirDecimal | undefined;
    /**
     * Default constructor for LocationPosition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<LocationPositionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Location type.
 */
export interface LocationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Location" | undefined;
    /**
     * Unique code or number identifying the location to its users.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<LocationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Location.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The Operational status covers operation values most relevant to beds (but can also apply to rooms/units/chair/etc such as an isolation unit/dialisys chair). This typically covers concepts such as contamination, housekeeping and other activities like maintenance.
     */
    operationalStatus?: fhir.CodingArgs | undefined;
    /**
     * If the name of an location changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Location.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the location.
     */
    alias?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Location.alias
     */
    _alias?: (fhir.FhirElementArgs | null)[];
    /**
     * Description of the Location, which helps in finding or referencing the place.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Location.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * This is labeled as a modifer because whether or not the location is a class of locations changes how it can be used and understood.
     */
    mode?: fhir.FhirCode<LocationModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Location.mode
     */
    _mode?: fhir.FhirElementArgs;
    /**
     * Indicates the type of function performed at the location.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * This was kept as 0..1 as there is no use property on the address, so wouldn't be able to identify different address types.
     */
    address?: fhir.AddressArgs | undefined;
    /**
     * Physical form of the location, e.g. building, room, vehicle, road.
     */
    physicalType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
     */
    position?: fhir.LocationPositionArgs | undefined;
    /**
     * This can also be used as the part of the organization hierarchy where this location provides services. These services can be defined through the HealthcareService resource.
     */
    managingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * Another Location which this Location is physically part of.
     */
    partOf?: fhir.ReferenceArgs | undefined;
    /**
     * Technical endpoints providing access to services operated for the location.
     */
    endpoint?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Details and position information for a physical place where services are provided  and resources and participants may be stored, found, contained or accommodated.
 */
export declare class Location extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Location";
    /**
     * Unique code or number identifying the location to its users.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<LocationStatusCodeType> | undefined;
    /**
     * The Operational status covers operation values most relevant to beds (but can also apply to rooms/units/chair/etc such as an isolation unit/dialisys chair). This typically covers concepts such as contamination, housekeeping and other activities like maintenance.
     */
    operationalStatus?: fhir.Coding | undefined;
    /**
     * If the name of an location changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: fhir.FhirString | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the location.
     */
    alias: fhir.FhirString[];
    /**
     * Description of the Location, which helps in finding or referencing the place.
     */
    description?: fhir.FhirString | undefined;
    /**
     * This is labeled as a modifer because whether or not the location is a class of locations changes how it can be used and understood.
     */
    mode?: fhir.FhirCode<LocationModeCodeType> | undefined;
    /**
     * Indicates the type of function performed at the location.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
     */
    telecom: fhir.ContactPoint[];
    /**
     * This was kept as 0..1 as there is no use property on the address, so wouldn't be able to identify different address types.
     */
    address?: fhir.Address | undefined;
    /**
     * Physical form of the location, e.g. building, room, vehicle, road.
     */
    physicalType?: fhir.CodeableConcept | undefined;
    /**
     * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
     */
    position?: fhir.LocationPosition | undefined;
    /**
     * This can also be used as the part of the organization hierarchy where this location provides services. These services can be defined through the HealthcareService resource.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * Another Location which this Location is physically part of.
     */
    partOf?: fhir.Reference | undefined;
    /**
     * Technical endpoints providing access to services operated for the location.
     */
    endpoint: fhir.Reference[];
    /**
     * Default constructor for Location - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<LocationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Location.d.ts.map