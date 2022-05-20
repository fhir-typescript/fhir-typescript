// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/search-entry-mode|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 */
export const SearchEntryModeCodings = {
    /**
     * include: This resource is returned because it is referred to from another resource in the search set.
     */
    Include: new Coding({
        display: "Include",
        code: "include",
        system: "http://hl7.org/fhir/search-entry-mode",
    }),
    /**
     * match: This resource matched the search specification.
     */
    Match: new Coding({
        display: "Match",
        code: "match",
        system: "http://hl7.org/fhir/search-entry-mode",
    }),
    /**
     * outcome: An OperationOutcome that provides additional information about the processing of a search.
     */
    Outcome: new Coding({
        display: "Outcome",
        code: "outcome",
        system: "http://hl7.org/fhir/search-entry-mode",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRW50cnlNb2RlQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvU2VhcmNoRW50cnlNb2RlQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxzRUFBc0U7QUFFdEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBRTFDOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUc7SUFDcEM7O09BRUc7SUFDSCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDbEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsdUNBQXVDO0tBQ2hELENBQUM7SUFDRjs7T0FFRztJQUNILEtBQUssRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQsQ0FBQztJQUNGOztPQUVHO0lBQ0gsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2xCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLHVDQUF1QztLQUNoRCxDQUFDO0NBQ00sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9zZWFyY2gtZW50cnktbW9kZXw0LjAuMVxyXG5cclxuaW1wb3J0IHsgQ29kaW5nIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogV2h5IGFuIGVudHJ5IGlzIGluIHRoZSByZXN1bHQgc2V0IC0gd2hldGhlciBpdCdzIGluY2x1ZGVkIGFzIGEgbWF0Y2ggb3IgYmVjYXVzZSBvZiBhbiBfaW5jbHVkZSByZXF1aXJlbWVudCwgb3IgdG8gY29udmV5IGluZm9ybWF0aW9uIG9yIHdhcm5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNlYXJjaCBwcm9jZXNzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFNlYXJjaEVudHJ5TW9kZUNvZGluZ3MgPSB7XHJcbiAgLyoqXHJcbiAgICogaW5jbHVkZTogVGhpcyByZXNvdXJjZSBpcyByZXR1cm5lZCBiZWNhdXNlIGl0IGlzIHJlZmVycmVkIHRvIGZyb20gYW5vdGhlciByZXNvdXJjZSBpbiB0aGUgc2VhcmNoIHNldC5cclxuICAgKi9cclxuICBJbmNsdWRlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiSW5jbHVkZVwiLFxyXG4gICAgY29kZTogXCJpbmNsdWRlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zZWFyY2gtZW50cnktbW9kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIG1hdGNoOiBUaGlzIHJlc291cmNlIG1hdGNoZWQgdGhlIHNlYXJjaCBzcGVjaWZpY2F0aW9uLlxyXG4gICAqL1xyXG4gIE1hdGNoOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiTWF0Y2hcIixcclxuICAgIGNvZGU6IFwibWF0Y2hcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlYXJjaC1lbnRyeS1tb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogb3V0Y29tZTogQW4gT3BlcmF0aW9uT3V0Y29tZSB0aGF0IHByb3ZpZGVzIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHByb2Nlc3Npbmcgb2YgYSBzZWFyY2guXHJcbiAgICovXHJcbiAgT3V0Y29tZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIk91dGNvbWVcIixcclxuICAgIGNvZGU6IFwib3V0Y29tZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc2VhcmNoLWVudHJ5LW1vZGVcIixcclxuICB9KSxcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBXaHkgYW4gZW50cnkgaXMgaW4gdGhlIHJlc3VsdCBzZXQgLSB3aGV0aGVyIGl0J3MgaW5jbHVkZWQgYXMgYSBtYXRjaCBvciBiZWNhdXNlIG9mIGFuIF9pbmNsdWRlIHJlcXVpcmVtZW50LCBvciB0byBjb252ZXkgaW5mb3JtYXRpb24gb3Igd2FybmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VhcmNoIHByb2Nlc3MuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTZWFyY2hFbnRyeU1vZGVDb2RpbmdUeXBlID0gdHlwZW9mIFNlYXJjaEVudHJ5TW9kZUNvZGluZ3M7XHJcbiJdfQ==