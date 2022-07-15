import * as fhir from '../fhirJson.js';
/**
 * For mobile applications and automated route-finding knowing the exact location of the Location is required.
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
 * Details and position information for a physical place where services are provided  and resources and participants may be stored, found, contained or accommodated.
 */
export interface Location extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Location" | null;
    /**
     * Organization label locations in registries, need to keep track of those.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * active | suspended | inactive.
     */
    status?: 'active' | 'inactive' | 'suspended' | undefined;
    /**
     * Extended properties for primitive element: Location.status
     */
    _status?: fhir.FhirElement;
    /**
     * Name of the location as used by humans. Does not need to be unique.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Location.name
     */
    _name?: fhir.FhirElement;
    /**
     * Humans need additional information to verify a correct location has been identified.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Location.description
     */
    _description?: fhir.FhirElement;
    /**
     * When using a Location resource for scheduling or orders, we need to be able to refer to a class of Locations instead of a specific Location.
     */
    mode?: 'instance' | 'kind' | undefined;
    /**
     * Extended properties for primitive element: Location.mode
     */
    _mode?: fhir.FhirElement;
    /**
     * Indicates the type of function performed at the location.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
    /**
     * If locations can be visited, we need to keep track of their address.
     */
    address?: fhir.Address | undefined;
    /**
     * For purposes of showing relevant locations in queries, we need to categorize locations.
     */
    physicalType?: fhir.CodeableConcept | undefined;
    /**
     * For mobile applications and automated route-finding knowing the exact location of the Location is required.
     */
    position?: fhir.LocationPosition | undefined;
    /**
     * Need to know who manages the location.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * For purposes of location, display and identification, knowing which locations are located within other locations is important.
     */
    partOf?: fhir.Reference | undefined;
}
//# sourceMappingURL=Location.d.ts.map