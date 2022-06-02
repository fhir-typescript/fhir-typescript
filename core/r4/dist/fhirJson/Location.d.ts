import * as fhir from '../fhirJson.js';
/**
 * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
 */
export interface LocationPosition extends fhir.BackboneElement {
    /**
     * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
     */
    longitude: number | null;
    /**
     * Extended properties for primitive element: Location.position.longitude
     */
    _longitude?: fhir.FhirElement;
    /**
     * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
     */
    latitude: number | null;
    /**
     * Extended properties for primitive element: Location.position.latitude
     */
    _latitude?: fhir.FhirElement;
    /**
     * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
     */
    altitude?: number | undefined;
    /**
     * Extended properties for primitive element: Location.position.altitude
     */
    _altitude?: fhir.FhirElement;
}
/**
 * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
 * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
 */
export interface LocationHoursOfOperation extends fhir.BackboneElement {
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: (('fri' | 'mon' | 'sat' | 'sun' | 'thu' | 'tue' | 'wed') | null)[] | undefined;
    /**
     * Extended properties for primitive element: Location.hoursOfOperation.daysOfWeek
     */
    _daysOfWeek?: (fhir.FhirElement | null)[];
    /**
     * The Location is open all day.
     */
    allDay?: boolean | undefined;
    /**
     * Extended properties for primitive element: Location.hoursOfOperation.allDay
     */
    _allDay?: fhir.FhirElement;
    /**
     * Time that the Location opens.
     */
    openingTime?: string | undefined;
    /**
     * Extended properties for primitive element: Location.hoursOfOperation.openingTime
     */
    _openingTime?: fhir.FhirElement;
    /**
     * Time that the Location closes.
     */
    closingTime?: string | undefined;
    /**
     * Extended properties for primitive element: Location.hoursOfOperation.closingTime
     */
    _closingTime?: fhir.FhirElement;
}
/**
 * Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 */
export interface Location extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Location" | null;
    /**
     * Unique code or number identifying the location to its users.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
     */
    status?: 'active' | 'inactive' | 'suspended' | undefined;
    /**
     * Extended properties for primitive element: Location.status
     */
    _status?: fhir.FhirElement;
    /**
     * The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such as an isolation unit/dialysis chair). This typically covers concepts such as contamination, housekeeping, and other activities like maintenance.
     */
    operationalStatus?: fhir.Coding | undefined;
    /**
     * If the name of a location changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Location.name
     */
    _name?: fhir.FhirElement;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the location.
     */
    alias?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Location.alias
     */
    _alias?: (fhir.FhirElement | null)[];
    /**
     * Description of the Location, which helps in finding or referencing the place.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Location.description
     */
    _description?: fhir.FhirElement;
    /**
     * This is labeled as a modifier because whether or not the location is a class of locations changes how it can be used and understood.
     */
    mode?: 'instance' | 'kind' | undefined;
    /**
     * Extended properties for primitive element: Location.mode
     */
    _mode?: fhir.FhirElement;
    /**
     * Indicates the type of function performed at the location.
     */
    type?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
    /**
     * Additional addresses should be recorded using another instance of the Location resource, or via the Organization.
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
     * Another Location of which this Location is physically a part of.
     */
    partOf?: fhir.Reference | undefined;
    /**
     * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
     * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
     */
    hoursOfOperation?: (fhir.LocationHoursOfOperation | null)[] | undefined;
    /**
     * A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as detailed in the opening hours Times.
     */
    availabilityExceptions?: string | undefined;
    /**
     * Extended properties for primitive element: Location.availabilityExceptions
     */
    _availabilityExceptions?: fhir.FhirElement;
    /**
     * Technical endpoints providing access to services operated for the location.
     */
    endpoint?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=Location.d.ts.map