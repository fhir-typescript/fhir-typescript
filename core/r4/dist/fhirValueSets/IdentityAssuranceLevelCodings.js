// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/identity-assuranceLevel|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 */
export const IdentityAssuranceLevelCodings = {
    /**
     * level1: Little or no confidence in the asserted identity's accuracy.
     */
    Level1: new Coding({
        display: "Level 1",
        code: "level1",
        system: "http://hl7.org/fhir/identity-assuranceLevel",
    }),
    /**
     * level2: Some confidence in the asserted identity's accuracy.
     */
    Level2: new Coding({
        display: "Level 2",
        code: "level2",
        system: "http://hl7.org/fhir/identity-assuranceLevel",
    }),
    /**
     * level3: High confidence in the asserted identity's accuracy.
     */
    Level3: new Coding({
        display: "Level 3",
        code: "level3",
        system: "http://hl7.org/fhir/identity-assuranceLevel",
    }),
    /**
     * level4: Very high confidence in the asserted identity's accuracy.
     */
    Level4: new Coding({
        display: "Level 4",
        code: "level4",
        system: "http://hl7.org/fhir/identity-assuranceLevel",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWRlbnRpdHlBc3N1cmFuY2VMZXZlbENvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0lkZW50aXR5QXNzdXJhbmNlTGV2ZWxDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDRFQUE0RTtBQUU1RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFMUM7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBRztJQUMzQzs7T0FFRztJQUNILE1BQU0sRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNqQixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw2Q0FBNkM7S0FDdEQsQ0FBQztJQUNGOztPQUVHO0lBQ0gsTUFBTSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2pCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDZDQUE2QztLQUN0RCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxNQUFNLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDakIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsNkNBQTZDO0tBQ3RELENBQUM7SUFDRjs7T0FFRztJQUNILE1BQU0sRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNqQixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw2Q0FBNkM7S0FDdEQsQ0FBQztDQUNNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvaWRlbnRpdHktYXNzdXJhbmNlTGV2ZWx8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoZSBsZXZlbCBvZiBjb25maWRlbmNlIHRoYXQgdGhpcyBsaW5rIHJlcHJlc2VudHMgdGhlIHNhbWUgYWN0dWFsIHBlcnNvbiwgYmFzZWQgb24gTklTVCBBdXRoZW50aWNhdGlvbiBMZXZlbHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgSWRlbnRpdHlBc3N1cmFuY2VMZXZlbENvZGluZ3MgPSB7XHJcbiAgLyoqXHJcbiAgICogbGV2ZWwxOiBMaXR0bGUgb3Igbm8gY29uZmlkZW5jZSBpbiB0aGUgYXNzZXJ0ZWQgaWRlbnRpdHkncyBhY2N1cmFjeS5cclxuICAgKi9cclxuICBMZXZlbDE6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJMZXZlbCAxXCIsXHJcbiAgICBjb2RlOiBcImxldmVsMVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaWRlbnRpdHktYXNzdXJhbmNlTGV2ZWxcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBsZXZlbDI6IFNvbWUgY29uZmlkZW5jZSBpbiB0aGUgYXNzZXJ0ZWQgaWRlbnRpdHkncyBhY2N1cmFjeS5cclxuICAgKi9cclxuICBMZXZlbDI6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJMZXZlbCAyXCIsXHJcbiAgICBjb2RlOiBcImxldmVsMlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaWRlbnRpdHktYXNzdXJhbmNlTGV2ZWxcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBsZXZlbDM6IEhpZ2ggY29uZmlkZW5jZSBpbiB0aGUgYXNzZXJ0ZWQgaWRlbnRpdHkncyBhY2N1cmFjeS5cclxuICAgKi9cclxuICBMZXZlbDM6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJMZXZlbCAzXCIsXHJcbiAgICBjb2RlOiBcImxldmVsM1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaWRlbnRpdHktYXNzdXJhbmNlTGV2ZWxcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBsZXZlbDQ6IFZlcnkgaGlnaCBjb25maWRlbmNlIGluIHRoZSBhc3NlcnRlZCBpZGVudGl0eSdzIGFjY3VyYWN5LlxyXG4gICAqL1xyXG4gIExldmVsNDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkxldmVsIDRcIixcclxuICAgIGNvZGU6IFwibGV2ZWw0XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pZGVudGl0eS1hc3N1cmFuY2VMZXZlbFwiLFxyXG4gIH0pLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBsZXZlbCBvZiBjb25maWRlbmNlIHRoYXQgdGhpcyBsaW5rIHJlcHJlc2VudHMgdGhlIHNhbWUgYWN0dWFsIHBlcnNvbiwgYmFzZWQgb24gTklTVCBBdXRoZW50aWNhdGlvbiBMZXZlbHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBJZGVudGl0eUFzc3VyYW5jZUxldmVsQ29kaW5nVHlwZSA9IHR5cGVvZiBJZGVudGl0eUFzc3VyYW5jZUxldmVsQ29kaW5ncztcclxuIl19