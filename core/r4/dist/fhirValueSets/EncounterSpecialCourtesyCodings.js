// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/encounter-special-courtesy|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that can be used to indicate special courtesies provided to the patient.
 */
export const EncounterSpecialCourtesyCodings = {
    /**
     * EXT: extended courtesy
     */
    ExtendedCourtesy: new Coding({
        display: "extended courtesy",
        code: "EXT",
        system: "http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy",
    }),
    /**
     * NRM: normal courtesy
     */
    NormalCourtesy: new Coding({
        display: "normal courtesy",
        code: "NRM",
        system: "http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy",
    }),
    /**
     * PRF: professional courtesy
     */
    ProfessionalCourtesy: new Coding({
        display: "professional courtesy",
        code: "PRF",
        system: "http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy",
    }),
    /**
     * STF: Courtesies extended to the staff of the entity providing service.
     */
    Staff: new Coding({
        display: "staff",
        code: "STF",
        system: "http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy",
    }),
    /**
     * UNK: Description:A proper value is applicable, but not known.
     *
     *
     *                            Usage Notes: This means the actual value is not known.  If the only thing that is unknown is how to properly express the value in the necessary constraints (value set, datatype, etc.), then the OTH or UNC flavor should be used.  No properties should be included for a datatype with this property unless:
     *
     *
     *                            Those properties themselves directly translate to a semantic of "unknown".  (E.g. a local code sent as a translation that conveys 'unknown')
     *                            Those properties further qualify the nature of what is unknown.  (E.g. specifying a use code of "H" and a URL prefix of "tel:" to convey that it is the home phone number that is unknown.)
     */
    Unknown: new Coding({
        display: "unknown",
        code: "UNK",
        system: "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
    }),
    /**
     * VIP: very important person
     */
    VeryImportantPerson: new Coding({
        display: "very important person",
        code: "VIP",
        system: "http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5jb3VudGVyU3BlY2lhbENvdXJ0ZXN5Q29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvRW5jb3VudGVyU3BlY2lhbENvdXJ0ZXN5Q29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrRUFBK0U7QUFFL0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBRTFDOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQUc7SUFDN0M7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUMzQixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLG1FQUFtRTtLQUM1RSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxjQUFjLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDekIsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSxtRUFBbUU7S0FDNUUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsb0JBQW9CLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDL0IsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSxtRUFBbUU7S0FDNUUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLG1FQUFtRTtLQUM1RSxDQUFDO0lBQ0Y7Ozs7Ozs7OztPQVNHO0lBQ0gsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2xCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLHFEQUFxRDtLQUM5RCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxtQkFBbUIsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUM5QixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLG1FQUFtRTtLQUM1RSxDQUFDO0NBQ00sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9lbmNvdW50ZXItc3BlY2lhbC1jb3VydGVzeXw0LjAuMVxyXG5cclxuaW1wb3J0IHsgQ29kaW5nIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogVGhpcyB2YWx1ZSBzZXQgZGVmaW5lcyBhIHNldCBvZiBjb2RlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGluZGljYXRlIHNwZWNpYWwgY291cnRlc2llcyBwcm92aWRlZCB0byB0aGUgcGF0aWVudC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBFbmNvdW50ZXJTcGVjaWFsQ291cnRlc3lDb2RpbmdzID0ge1xyXG4gIC8qKlxyXG4gICAqIEVYVDogZXh0ZW5kZWQgY291cnRlc3lcclxuICAgKi9cclxuICBFeHRlbmRlZENvdXJ0ZXN5OiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiZXh0ZW5kZWQgY291cnRlc3lcIixcclxuICAgIGNvZGU6IFwiRVhUXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1FbmNvdW50ZXJTcGVjaWFsQ291cnRlc3lcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBOUk06IG5vcm1hbCBjb3VydGVzeVxyXG4gICAqL1xyXG4gIE5vcm1hbENvdXJ0ZXN5OiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwibm9ybWFsIGNvdXJ0ZXN5XCIsXHJcbiAgICBjb2RlOiBcIk5STVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtRW5jb3VudGVyU3BlY2lhbENvdXJ0ZXN5XCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogUFJGOiBwcm9mZXNzaW9uYWwgY291cnRlc3lcclxuICAgKi9cclxuICBQcm9mZXNzaW9uYWxDb3VydGVzeTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcInByb2Zlc3Npb25hbCBjb3VydGVzeVwiLFxyXG4gICAgY29kZTogXCJQUkZcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUVuY291bnRlclNwZWNpYWxDb3VydGVzeVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIFNURjogQ291cnRlc2llcyBleHRlbmRlZCB0byB0aGUgc3RhZmYgb2YgdGhlIGVudGl0eSBwcm92aWRpbmcgc2VydmljZS5cclxuICAgKi9cclxuICBTdGFmZjogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcInN0YWZmXCIsXHJcbiAgICBjb2RlOiBcIlNURlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtRW5jb3VudGVyU3BlY2lhbENvdXJ0ZXN5XCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogVU5LOiBEZXNjcmlwdGlvbjpBIHByb3BlciB2YWx1ZSBpcyBhcHBsaWNhYmxlLCBidXQgbm90IGtub3duLlxyXG4gICAqIFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzYWdlIE5vdGVzOiBUaGlzIG1lYW5zIHRoZSBhY3R1YWwgdmFsdWUgaXMgbm90IGtub3duLiAgSWYgdGhlIG9ubHkgdGhpbmcgdGhhdCBpcyB1bmtub3duIGlzIGhvdyB0byBwcm9wZXJseSBleHByZXNzIHRoZSB2YWx1ZSBpbiB0aGUgbmVjZXNzYXJ5IGNvbnN0cmFpbnRzICh2YWx1ZSBzZXQsIGRhdGF0eXBlLCBldGMuKSwgdGhlbiB0aGUgT1RIIG9yIFVOQyBmbGF2b3Igc2hvdWxkIGJlIHVzZWQuICBObyBwcm9wZXJ0aWVzIHNob3VsZCBiZSBpbmNsdWRlZCBmb3IgYSBkYXRhdHlwZSB3aXRoIHRoaXMgcHJvcGVydHkgdW5sZXNzOlxyXG4gICAqIFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRob3NlIHByb3BlcnRpZXMgdGhlbXNlbHZlcyBkaXJlY3RseSB0cmFuc2xhdGUgdG8gYSBzZW1hbnRpYyBvZiBcInVua25vd25cIi4gIChFLmcuIGEgbG9jYWwgY29kZSBzZW50IGFzIGEgdHJhbnNsYXRpb24gdGhhdCBjb252ZXlzICd1bmtub3duJylcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaG9zZSBwcm9wZXJ0aWVzIGZ1cnRoZXIgcXVhbGlmeSB0aGUgbmF0dXJlIG9mIHdoYXQgaXMgdW5rbm93bi4gIChFLmcuIHNwZWNpZnlpbmcgYSB1c2UgY29kZSBvZiBcIkhcIiBhbmQgYSBVUkwgcHJlZml4IG9mIFwidGVsOlwiIHRvIGNvbnZleSB0aGF0IGl0IGlzIHRoZSBob21lIHBob25lIG51bWJlciB0aGF0IGlzIHVua25vd24uKVxyXG4gICAqL1xyXG4gIFVua25vd246IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJ1bmtub3duXCIsXHJcbiAgICBjb2RlOiBcIlVOS1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtTnVsbEZsYXZvclwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIFZJUDogdmVyeSBpbXBvcnRhbnQgcGVyc29uXHJcbiAgICovXHJcbiAgVmVyeUltcG9ydGFudFBlcnNvbjogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcInZlcnkgaW1wb3J0YW50IHBlcnNvblwiLFxyXG4gICAgY29kZTogXCJWSVBcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUVuY291bnRlclNwZWNpYWxDb3VydGVzeVwiLFxyXG4gIH0pLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgdmFsdWUgc2V0IGRlZmluZXMgYSBzZXQgb2YgY29kZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBpbmRpY2F0ZSBzcGVjaWFsIGNvdXJ0ZXNpZXMgcHJvdmlkZWQgdG8gdGhlIHBhdGllbnQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFbmNvdW50ZXJTcGVjaWFsQ291cnRlc3lDb2RpbmdUeXBlID0gdHlwZW9mIEVuY291bnRlclNwZWNpYWxDb3VydGVzeUNvZGluZ3M7XHJcbiJdfQ==