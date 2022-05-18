import { Coding } from '../fhir/Coding.js';
/**
 * This example value set defines a set of codes that can be used to indicate the physical form of the Location.
 */
export declare const LocationPhysicalTypeCodings: {
    /**
     * area: A defined physical boundary of something, such as a flood risk zone, region, postcode
     */
    readonly Area: Coding;
    /**
     * bd: A space that is allocated for sleeping/laying on. This is not the physical bed/trolley that may be moved about, but the space it may occupy.
     */
    readonly Bed: Coding;
    /**
     * bu: Any Building or structure. This may contain rooms, corridors, wings, etc. It might not have walls, or a roof, but is considered a defined/allocated space.
     */
    readonly Building: Coding;
    /**
     * ca: A container that can store goods, equipment, medications or other items.
     */
    readonly Cabinet: Coding;
    /**
     * co: Any corridor within a Building, that may connect rooms.
     */
    readonly Corridor: Coding;
    /**
     * ho: A residential dwelling. Usually used to reference a location that a person/patient may reside.
     */
    readonly House: Coding;
    /**
     * jdn: A wide scope that covers a conceptual domain, such as a Nation (Country wide community or Federal Government - e.g. Ministry of Health),  Province or State (community or Government), Business (throughout the enterprise), Nation with a business scope of an agency (e.g. CDC, FDA etc.) or a Business segment (UK Pharmacy), not just an physical boundary
     */
    readonly Jurisdiction: Coding;
    /**
     * lvl: A Level in a multi-level Building/Structure.
     */
    readonly Level: Coding;
    /**
     * rd: A defined path to travel between 2 points that has a known name.
     */
    readonly Road: Coding;
    /**
     * ro: A space that is allocated as a room, it may have walls/roof etc., but does not require these.
     */
    readonly Room: Coding;
    /**
     * si: A collection of buildings or other locations such as a site or a campus.
     */
    readonly Site: Coding;
    /**
     * ve: A means of transportation.
     */
    readonly Vehicle: Coding;
    /**
     * wa: A Ward is a section of a medical facility that may contain rooms and other types of location.
     */
    readonly Ward: Coding;
    /**
     * wi: A Wing within a Building, this often contains levels, rooms and corridors.
     */
    readonly Wing: Coding;
};
/**
 * This example value set defines a set of codes that can be used to indicate the physical form of the Location.
 */
export declare type LocationPhysicalTypeCodingType = typeof LocationPhysicalTypeCodings;
//# sourceMappingURL=LocationPhysicalTypeCodings.d.ts.map