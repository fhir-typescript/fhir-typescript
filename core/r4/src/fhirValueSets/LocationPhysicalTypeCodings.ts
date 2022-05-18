// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/location-physical-type|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * This example value set defines a set of codes that can be used to indicate the physical form of the Location.
 */
export const LocationPhysicalTypeCodings = {
  /**
   * area: A defined physical boundary of something, such as a flood risk zone, region, postcode
   */
  Area: new Coding({
    display: "Area",
    code: "area",
    system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
  }),
  /**
   * bd: A space that is allocated for sleeping/laying on. This is not the physical bed/trolley that may be moved about, but the space it may occupy.
   */
  Bed: new Coding({
    display: "Bed",
    code: "bd",
    system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
  }),
  /**
   * bu: Any Building or structure. This may contain rooms, corridors, wings, etc. It might not have walls, or a roof, but is considered a defined/allocated space.
   */
  Building: new Coding({
    display: "Building",
    code: "bu",
    system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
  }),
  /**
   * ca: A container that can store goods, equipment, medications or other items.
   */
  Cabinet: new Coding({
    display: "Cabinet",
    code: "ca",
    system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
  }),
  /**
   * co: Any corridor within a Building, that may connect rooms.
   */
  Corridor: new Coding({
    display: "Corridor",
    code: "co",
    system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
  }),
  /**
   * ho: A residential dwelling. Usually used to reference a location that a person/patient may reside.
   */
  House: new Coding({
    display: "House",
    code: "ho",
    system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
  }),
  /**
   * jdn: A wide scope that covers a conceptual domain, such as a Nation (Country wide community or Federal Government - e.g. Ministry of Health),  Province or State (community or Government), Business (throughout the enterprise), Nation with a business scope of an agency (e.g. CDC, FDA etc.) or a Business segment (UK Pharmacy), not just an physical boundary
   */
  Jurisdiction: new Coding({
    display: "Jurisdiction",
    code: "jdn",
    system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
  }),
  /**
   * lvl: A Level in a multi-level Building/Structure.
   */
  Level: new Coding({
    display: "Level",
    code: "lvl",
    system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
  }),
  /**
   * rd: A defined path to travel between 2 points that has a known name.
   */
  Road: new Coding({
    display: "Road",
    code: "rd",
    system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
  }),
  /**
   * ro: A space that is allocated as a room, it may have walls/roof etc., but does not require these.
   */
  Room: new Coding({
    display: "Room",
    code: "ro",
    system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
  }),
  /**
   * si: A collection of buildings or other locations such as a site or a campus.
   */
  Site: new Coding({
    display: "Site",
    code: "si",
    system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
  }),
  /**
   * ve: A means of transportation.
   */
  Vehicle: new Coding({
    display: "Vehicle",
    code: "ve",
    system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
  }),
  /**
   * wa: A Ward is a section of a medical facility that may contain rooms and other types of location.
   */
  Ward: new Coding({
    display: "Ward",
    code: "wa",
    system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
  }),
  /**
   * wi: A Wing within a Building, this often contains levels, rooms and corridors.
   */
  Wing: new Coding({
    display: "Wing",
    code: "wi",
    system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
  }),
} as const;

/**
 * This example value set defines a set of codes that can be used to indicate the physical form of the Location.
 */
export type LocationPhysicalTypeCodingType = typeof LocationPhysicalTypeCodings;
