import { CodingArgs } from '../fhir/Coding.js';
/**
 * This example value set defines a set of codes that can be used to indicate the physical form of the Location.
 */
export declare type LocationPhysicalTypeCodingType = {
    /**
     * area: A defined physical boundary of something, such as a flood risk zone, region, postcode
     */
    Area: CodingArgs;
    /**
     * bd: A space that is allocated for sleeping/laying on. This is not the physical bed/trolley that may be moved about, but the space it may occupy.
     */
    Bed: CodingArgs;
    /**
     * bu: Any Building or structure. This may contain rooms, corridors, wings, etc. It may not have walls, or a roof, but is considered a defined/allocated space.
     */
    Building: CodingArgs;
    /**
     * ca: A container that can store goods, equipment, medications or other items.
     */
    Cabinet: CodingArgs;
    /**
     * co: Any corridor within a Building, that may connect rooms.
     */
    Corridor: CodingArgs;
    /**
     * ho: A residential dwelling. Usually used to reference a location that a person/patient may reside.
     */
    House: CodingArgs;
    /**
     * jdn: A wide scope that covers a conceptual domain, such as a Nation (Country wide community or Federal Government - e.g. Ministry of Health),  Province or State (community or Government), Business (throughout the enterprise), Nation with a business scope of an agency (e.g. CDC, FDA etc.) or a Business segment (UK Pharmacy), not just an physical boundry
     */
    Jurisdiction: CodingArgs;
    /**
     * lvl: A Level in a multi-level Building/Structure.
     */
    Level: CodingArgs;
    /**
     * rd: A defined path to travel between 2 points that has a known name.
     */
    Road: CodingArgs;
    /**
     * ro: A space that is allocated as a room, it may have walls/roof etc., but does not require these.
     */
    Room: CodingArgs;
    /**
     * si: A collection of buildings or other locations such as a site or a campus.
     */
    Site: CodingArgs;
    /**
     * ve: A means of transportation.
     */
    Vehicle: CodingArgs;
    /**
     * wa: A Ward is a section of a medical facility that may contain rooms and other types of location.
     */
    Ward: CodingArgs;
    /**
     * wi: A Wing within a Building, this often contains levels, rooms and corridors.
     */
    Wing: CodingArgs;
};
/**
 * This example value set defines a set of codes that can be used to indicate the physical form of the Location.
 */
export declare const LocationPhysicalTypeCodings: LocationPhysicalTypeCodingType;
//# sourceMappingURL=LocationPhysicalTypeCodings.d.ts.map