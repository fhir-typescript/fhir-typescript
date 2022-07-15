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
 * For mobile applications and automated route-finding knowing the exact location of the Location is required.
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
     * Organization label locations in registries, need to keep track of those.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * active | suspended | inactive.
     */
    status?: fhir.FhirCode<LocationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Location.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Name of the location as used by humans. Does not need to be unique.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Location.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Humans need additional information to verify a correct location has been identified.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Location.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When using a Location resource for scheduling or orders, we need to be able to refer to a class of Locations instead of a specific Location.
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
     * If locations can be visited, we need to keep track of their address.
     */
    address?: fhir.AddressArgs | undefined;
    /**
     * For purposes of showing relevant locations in queries, we need to categorize locations.
     */
    physicalType?: fhir.CodeableConceptArgs | undefined;
    /**
     * For mobile applications and automated route-finding knowing the exact location of the Location is required.
     */
    position?: fhir.LocationPositionArgs | undefined;
    /**
     * Need to know who manages the location.
     */
    managingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * For purposes of location, display and identification, knowing which locations are located within other locations is important.
     */
    partOf?: fhir.ReferenceArgs | undefined;
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
     * Organization label locations in registries, need to keep track of those.
     */
    identifier: fhir.Identifier[];
    /**
     * active | suspended | inactive.
     */
    status?: fhir.FhirCode<LocationStatusCodeType> | undefined;
    /**
     * Name of the location as used by humans. Does not need to be unique.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Humans need additional information to verify a correct location has been identified.
     */
    description?: fhir.FhirString | undefined;
    /**
     * When using a Location resource for scheduling or orders, we need to be able to refer to a class of Locations instead of a specific Location.
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