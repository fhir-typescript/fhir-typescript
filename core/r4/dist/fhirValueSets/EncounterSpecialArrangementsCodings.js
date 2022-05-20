// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/encounter-special-arrangements|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that can be used to indicate the kinds of special arrangements in place for a patients visit.
 */
export const EncounterSpecialArrangementsCodings = {
    /**
     * add-bed: An additional bed made available for a person accompanying the patient, for example a parent accompanying a child.
     */
    AdditionalBedding: new Coding({
        display: "Additional bedding",
        code: "add-bed",
        system: "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
    }),
    /**
     * att: A person who accompanies a patient to provide assistive services necessary for the patient's care during the encounter.
     */
    Attendant: new Coding({
        display: "Attendant",
        code: "att",
        system: "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
    }),
    /**
     * dog: The patient has a guide dog and the location used for the encounter should be able to support the presence of the service animal.
     */
    GuideDog: new Coding({
        display: "Guide dog",
        code: "dog",
        system: "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
    }),
    /**
     * int: The patient is not fluent in the local language and requires an interpreter to be available. Refer to the Patient.Language property for the type of interpreter required.
     */
    Interpreter: new Coding({
        display: "Interpreter",
        code: "int",
        system: "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
    }),
    /**
     * wheel: The patient requires a wheelchair to be made available for the encounter.
     */
    Wheelchair: new Coding({
        display: "Wheelchair",
        code: "wheel",
        system: "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5jb3VudGVyU3BlY2lhbEFycmFuZ2VtZW50c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0VuY291bnRlclNwZWNpYWxBcnJhbmdlbWVudHNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLG1GQUFtRjtBQUVuRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFMUM7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxtQ0FBbUMsR0FBRztJQUNqRDs7T0FFRztJQUNILGlCQUFpQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQzVCLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsc0VBQXNFO0tBQy9FLENBQUM7SUFDRjs7T0FFRztJQUNILFNBQVMsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNwQixPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSxzRUFBc0U7S0FDL0UsQ0FBQztJQUNGOztPQUVHO0lBQ0gsUUFBUSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ25CLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLHNFQUFzRTtLQUMvRSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxXQUFXLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDdEIsT0FBTyxFQUFFLGFBQWE7UUFDdEIsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsc0VBQXNFO0tBQy9FLENBQUM7SUFDRjs7T0FFRztJQUNILFVBQVUsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNyQixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxzRUFBc0U7S0FDL0UsQ0FBQztDQUNNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZW5jb3VudGVyLXNwZWNpYWwtYXJyYW5nZW1lbnRzfDQuMC4xXHJcblxyXG5pbXBvcnQgeyBDb2RpbmcgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHZhbHVlIHNldCBkZWZpbmVzIGEgc2V0IG9mIGNvZGVzIHRoYXQgY2FuIGJlIHVzZWQgdG8gaW5kaWNhdGUgdGhlIGtpbmRzIG9mIHNwZWNpYWwgYXJyYW5nZW1lbnRzIGluIHBsYWNlIGZvciBhIHBhdGllbnRzIHZpc2l0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEVuY291bnRlclNwZWNpYWxBcnJhbmdlbWVudHNDb2RpbmdzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFkZC1iZWQ6IEFuIGFkZGl0aW9uYWwgYmVkIG1hZGUgYXZhaWxhYmxlIGZvciBhIHBlcnNvbiBhY2NvbXBhbnlpbmcgdGhlIHBhdGllbnQsIGZvciBleGFtcGxlIGEgcGFyZW50IGFjY29tcGFueWluZyBhIGNoaWxkLlxyXG4gICAqL1xyXG4gIEFkZGl0aW9uYWxCZWRkaW5nOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiQWRkaXRpb25hbCBiZWRkaW5nXCIsXHJcbiAgICBjb2RlOiBcImFkZC1iZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2VuY291bnRlci1zcGVjaWFsLWFycmFuZ2VtZW50c1wiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIGF0dDogQSBwZXJzb24gd2hvIGFjY29tcGFuaWVzIGEgcGF0aWVudCB0byBwcm92aWRlIGFzc2lzdGl2ZSBzZXJ2aWNlcyBuZWNlc3NhcnkgZm9yIHRoZSBwYXRpZW50J3MgY2FyZSBkdXJpbmcgdGhlIGVuY291bnRlci5cclxuICAgKi9cclxuICBBdHRlbmRhbnQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJBdHRlbmRhbnRcIixcclxuICAgIGNvZGU6IFwiYXR0XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9lbmNvdW50ZXItc3BlY2lhbC1hcnJhbmdlbWVudHNcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBkb2c6IFRoZSBwYXRpZW50IGhhcyBhIGd1aWRlIGRvZyBhbmQgdGhlIGxvY2F0aW9uIHVzZWQgZm9yIHRoZSBlbmNvdW50ZXIgc2hvdWxkIGJlIGFibGUgdG8gc3VwcG9ydCB0aGUgcHJlc2VuY2Ugb2YgdGhlIHNlcnZpY2UgYW5pbWFsLlxyXG4gICAqL1xyXG4gIEd1aWRlRG9nOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiR3VpZGUgZG9nXCIsXHJcbiAgICBjb2RlOiBcImRvZ1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vZW5jb3VudGVyLXNwZWNpYWwtYXJyYW5nZW1lbnRzXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogaW50OiBUaGUgcGF0aWVudCBpcyBub3QgZmx1ZW50IGluIHRoZSBsb2NhbCBsYW5ndWFnZSBhbmQgcmVxdWlyZXMgYW4gaW50ZXJwcmV0ZXIgdG8gYmUgYXZhaWxhYmxlLiBSZWZlciB0byB0aGUgUGF0aWVudC5MYW5ndWFnZSBwcm9wZXJ0eSBmb3IgdGhlIHR5cGUgb2YgaW50ZXJwcmV0ZXIgcmVxdWlyZWQuXHJcbiAgICovXHJcbiAgSW50ZXJwcmV0ZXI6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJJbnRlcnByZXRlclwiLFxyXG4gICAgY29kZTogXCJpbnRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2VuY291bnRlci1zcGVjaWFsLWFycmFuZ2VtZW50c1wiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHdoZWVsOiBUaGUgcGF0aWVudCByZXF1aXJlcyBhIHdoZWVsY2hhaXIgdG8gYmUgbWFkZSBhdmFpbGFibGUgZm9yIHRoZSBlbmNvdW50ZXIuXHJcbiAgICovXHJcbiAgV2hlZWxjaGFpcjogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIldoZWVsY2hhaXJcIixcclxuICAgIGNvZGU6IFwid2hlZWxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2VuY291bnRlci1zcGVjaWFsLWFycmFuZ2VtZW50c1wiLFxyXG4gIH0pLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgdmFsdWUgc2V0IGRlZmluZXMgYSBzZXQgb2YgY29kZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBpbmRpY2F0ZSB0aGUga2luZHMgb2Ygc3BlY2lhbCBhcnJhbmdlbWVudHMgaW4gcGxhY2UgZm9yIGEgcGF0aWVudHMgdmlzaXQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFbmNvdW50ZXJTcGVjaWFsQXJyYW5nZW1lbnRzQ29kaW5nVHlwZSA9IHR5cGVvZiBFbmNvdW50ZXJTcGVjaWFsQXJyYW5nZW1lbnRzQ29kaW5ncztcclxuIl19