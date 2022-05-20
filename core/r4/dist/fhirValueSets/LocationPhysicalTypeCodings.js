// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/location-physical-type|4.0.1
import { Coding } from '../fhir/Coding.js';
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9jYXRpb25QaHlzaWNhbFR5cGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9Mb2NhdGlvblBoeXNpY2FsVHlwZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsMkVBQTJFO0FBRTNFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUUxQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFHO0lBQ3pDOztPQUVHO0lBQ0gsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2YsT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSw4REFBOEQ7S0FDdkUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsR0FBRyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2QsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSw4REFBOEQ7S0FDdkUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsUUFBUSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ25CLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLDhEQUE4RDtLQUN2RSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDbEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsOERBQThEO0tBQ3ZFLENBQUM7SUFDRjs7T0FFRztJQUNILFFBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNuQixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSw4REFBOEQ7S0FDdkUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLDhEQUE4RDtLQUN2RSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxZQUFZLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDdkIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsOERBQThEO0tBQ3ZFLENBQUM7SUFDRjs7T0FFRztJQUNILEtBQUssRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSw4REFBOEQ7S0FDdkUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2YsT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSw4REFBOEQ7S0FDdkUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2YsT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSw4REFBOEQ7S0FDdkUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2YsT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSw4REFBOEQ7S0FDdkUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2xCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLDhEQUE4RDtLQUN2RSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDZixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLDhEQUE4RDtLQUN2RSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDZixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLDhEQUE4RDtLQUN2RSxDQUFDO0NBQ00sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9sb2NhdGlvbi1waHlzaWNhbC10eXBlfDQuMC4xXHJcblxyXG5pbXBvcnQgeyBDb2RpbmcgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGV4YW1wbGUgdmFsdWUgc2V0IGRlZmluZXMgYSBzZXQgb2YgY29kZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBpbmRpY2F0ZSB0aGUgcGh5c2ljYWwgZm9ybSBvZiB0aGUgTG9jYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTG9jYXRpb25QaHlzaWNhbFR5cGVDb2RpbmdzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFyZWE6IEEgZGVmaW5lZCBwaHlzaWNhbCBib3VuZGFyeSBvZiBzb21ldGhpbmcsIHN1Y2ggYXMgYSBmbG9vZCByaXNrIHpvbmUsIHJlZ2lvbiwgcG9zdGNvZGVcclxuICAgKi9cclxuICBBcmVhOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiQXJlYVwiLFxyXG4gICAgY29kZTogXCJhcmVhXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9sb2NhdGlvbi1waHlzaWNhbC10eXBlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogYmQ6IEEgc3BhY2UgdGhhdCBpcyBhbGxvY2F0ZWQgZm9yIHNsZWVwaW5nL2xheWluZyBvbi4gVGhpcyBpcyBub3QgdGhlIHBoeXNpY2FsIGJlZC90cm9sbGV5IHRoYXQgbWF5IGJlIG1vdmVkIGFib3V0LCBidXQgdGhlIHNwYWNlIGl0IG1heSBvY2N1cHkuXHJcbiAgICovXHJcbiAgQmVkOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiQmVkXCIsXHJcbiAgICBjb2RlOiBcImJkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9sb2NhdGlvbi1waHlzaWNhbC10eXBlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogYnU6IEFueSBCdWlsZGluZyBvciBzdHJ1Y3R1cmUuIFRoaXMgbWF5IGNvbnRhaW4gcm9vbXMsIGNvcnJpZG9ycywgd2luZ3MsIGV0Yy4gSXQgbWlnaHQgbm90IGhhdmUgd2FsbHMsIG9yIGEgcm9vZiwgYnV0IGlzIGNvbnNpZGVyZWQgYSBkZWZpbmVkL2FsbG9jYXRlZCBzcGFjZS5cclxuICAgKi9cclxuICBCdWlsZGluZzogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkJ1aWxkaW5nXCIsXHJcbiAgICBjb2RlOiBcImJ1XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9sb2NhdGlvbi1waHlzaWNhbC10eXBlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogY2E6IEEgY29udGFpbmVyIHRoYXQgY2FuIHN0b3JlIGdvb2RzLCBlcXVpcG1lbnQsIG1lZGljYXRpb25zIG9yIG90aGVyIGl0ZW1zLlxyXG4gICAqL1xyXG4gIENhYmluZXQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJDYWJpbmV0XCIsXHJcbiAgICBjb2RlOiBcImNhXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9sb2NhdGlvbi1waHlzaWNhbC10eXBlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogY286IEFueSBjb3JyaWRvciB3aXRoaW4gYSBCdWlsZGluZywgdGhhdCBtYXkgY29ubmVjdCByb29tcy5cclxuICAgKi9cclxuICBDb3JyaWRvcjogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkNvcnJpZG9yXCIsXHJcbiAgICBjb2RlOiBcImNvXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9sb2NhdGlvbi1waHlzaWNhbC10eXBlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogaG86IEEgcmVzaWRlbnRpYWwgZHdlbGxpbmcuIFVzdWFsbHkgdXNlZCB0byByZWZlcmVuY2UgYSBsb2NhdGlvbiB0aGF0IGEgcGVyc29uL3BhdGllbnQgbWF5IHJlc2lkZS5cclxuICAgKi9cclxuICBIb3VzZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkhvdXNlXCIsXHJcbiAgICBjb2RlOiBcImhvXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9sb2NhdGlvbi1waHlzaWNhbC10eXBlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogamRuOiBBIHdpZGUgc2NvcGUgdGhhdCBjb3ZlcnMgYSBjb25jZXB0dWFsIGRvbWFpbiwgc3VjaCBhcyBhIE5hdGlvbiAoQ291bnRyeSB3aWRlIGNvbW11bml0eSBvciBGZWRlcmFsIEdvdmVybm1lbnQgLSBlLmcuIE1pbmlzdHJ5IG9mIEhlYWx0aCksICBQcm92aW5jZSBvciBTdGF0ZSAoY29tbXVuaXR5IG9yIEdvdmVybm1lbnQpLCBCdXNpbmVzcyAodGhyb3VnaG91dCB0aGUgZW50ZXJwcmlzZSksIE5hdGlvbiB3aXRoIGEgYnVzaW5lc3Mgc2NvcGUgb2YgYW4gYWdlbmN5IChlLmcuIENEQywgRkRBIGV0Yy4pIG9yIGEgQnVzaW5lc3Mgc2VnbWVudCAoVUsgUGhhcm1hY3kpLCBub3QganVzdCBhbiBwaHlzaWNhbCBib3VuZGFyeVxyXG4gICAqL1xyXG4gIEp1cmlzZGljdGlvbjogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkp1cmlzZGljdGlvblwiLFxyXG4gICAgY29kZTogXCJqZG5cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2xvY2F0aW9uLXBoeXNpY2FsLXR5cGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBsdmw6IEEgTGV2ZWwgaW4gYSBtdWx0aS1sZXZlbCBCdWlsZGluZy9TdHJ1Y3R1cmUuXHJcbiAgICovXHJcbiAgTGV2ZWw6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJMZXZlbFwiLFxyXG4gICAgY29kZTogXCJsdmxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2xvY2F0aW9uLXBoeXNpY2FsLXR5cGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiByZDogQSBkZWZpbmVkIHBhdGggdG8gdHJhdmVsIGJldHdlZW4gMiBwb2ludHMgdGhhdCBoYXMgYSBrbm93biBuYW1lLlxyXG4gICAqL1xyXG4gIFJvYWQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJSb2FkXCIsXHJcbiAgICBjb2RlOiBcInJkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9sb2NhdGlvbi1waHlzaWNhbC10eXBlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogcm86IEEgc3BhY2UgdGhhdCBpcyBhbGxvY2F0ZWQgYXMgYSByb29tLCBpdCBtYXkgaGF2ZSB3YWxscy9yb29mIGV0Yy4sIGJ1dCBkb2VzIG5vdCByZXF1aXJlIHRoZXNlLlxyXG4gICAqL1xyXG4gIFJvb206IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJSb29tXCIsXHJcbiAgICBjb2RlOiBcInJvXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9sb2NhdGlvbi1waHlzaWNhbC10eXBlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogc2k6IEEgY29sbGVjdGlvbiBvZiBidWlsZGluZ3Mgb3Igb3RoZXIgbG9jYXRpb25zIHN1Y2ggYXMgYSBzaXRlIG9yIGEgY2FtcHVzLlxyXG4gICAqL1xyXG4gIFNpdGU6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJTaXRlXCIsXHJcbiAgICBjb2RlOiBcInNpXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9sb2NhdGlvbi1waHlzaWNhbC10eXBlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogdmU6IEEgbWVhbnMgb2YgdHJhbnNwb3J0YXRpb24uXHJcbiAgICovXHJcbiAgVmVoaWNsZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlZlaGljbGVcIixcclxuICAgIGNvZGU6IFwidmVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2xvY2F0aW9uLXBoeXNpY2FsLXR5cGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiB3YTogQSBXYXJkIGlzIGEgc2VjdGlvbiBvZiBhIG1lZGljYWwgZmFjaWxpdHkgdGhhdCBtYXkgY29udGFpbiByb29tcyBhbmQgb3RoZXIgdHlwZXMgb2YgbG9jYXRpb24uXHJcbiAgICovXHJcbiAgV2FyZDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIldhcmRcIixcclxuICAgIGNvZGU6IFwid2FcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2xvY2F0aW9uLXBoeXNpY2FsLXR5cGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiB3aTogQSBXaW5nIHdpdGhpbiBhIEJ1aWxkaW5nLCB0aGlzIG9mdGVuIGNvbnRhaW5zIGxldmVscywgcm9vbXMgYW5kIGNvcnJpZG9ycy5cclxuICAgKi9cclxuICBXaW5nOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiV2luZ1wiLFxyXG4gICAgY29kZTogXCJ3aVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vbG9jYXRpb24tcGh5c2ljYWwtdHlwZVwiLFxyXG4gIH0pLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhhbXBsZSB2YWx1ZSBzZXQgZGVmaW5lcyBhIHNldCBvZiBjb2RlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGluZGljYXRlIHRoZSBwaHlzaWNhbCBmb3JtIG9mIHRoZSBMb2NhdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIExvY2F0aW9uUGh5c2ljYWxUeXBlQ29kaW5nVHlwZSA9IHR5cGVvZiBMb2NhdGlvblBoeXNpY2FsVHlwZUNvZGluZ3M7XHJcbiJdfQ==