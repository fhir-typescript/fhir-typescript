// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/allergy-intolerance-type|1.0.2
/**
 * Identification of the underlying physiological mechanism for a Reaction Risk.
 */
export const AllergyIntoleranceTypeCodings = {
    /**
     * allergy: A propensity for hypersensitivity reaction(s) to a substance.  These reactions are most typically type I hypersensitivity, plus other "allergy-like" reactions, including pseudoallergy.
     */
    Allergy: {
        display: "Allergy",
        code: "allergy",
        system: "http://hl7.org/fhir/allergy-intolerance-type",
    },
    /**
     * intolerance: A propensity for adverse reactions to a substance that is not judged to be allergic or "allergy-like".  These reactions are typically (but not necessarily) non-immune.  They are to some degree idiosyncratic and/or individually specific (i.e. are not a reaction that is expected to occur with most or all patients given similar circumstances).
     */
    Intolerance: {
        display: "Intolerance",
        code: "intolerance",
        system: "http://hl7.org/fhir/allergy-intolerance-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxsZXJneUludG9sZXJhbmNlVHlwZUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0FsbGVyZ3lJbnRvbGVyYW5jZVR5cGVDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDZFQUE2RTtBQWtCN0U7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBb0M7SUFDNUU7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2FsbGVyZ3ktaW50b2xlcmFuY2UtdHlwZXwxLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIElkZW50aWZpY2F0aW9uIG9mIHRoZSB1bmRlcmx5aW5nIHBoeXNpb2xvZ2ljYWwgbWVjaGFuaXNtIGZvciBhIFJlYWN0aW9uIFJpc2suXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBbGxlcmd5SW50b2xlcmFuY2VUeXBlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhbGxlcmd5OiBBIHByb3BlbnNpdHkgZm9yIGh5cGVyc2Vuc2l0aXZpdHkgcmVhY3Rpb24ocykgdG8gYSBzdWJzdGFuY2UuICBUaGVzZSByZWFjdGlvbnMgYXJlIG1vc3QgdHlwaWNhbGx5IHR5cGUgSSBoeXBlcnNlbnNpdGl2aXR5LCBwbHVzIG90aGVyIFwiYWxsZXJneS1saWtlXCIgcmVhY3Rpb25zLCBpbmNsdWRpbmcgcHNldWRvYWxsZXJneS5cclxuICAgKi9cclxuICBBbGxlcmd5OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGludG9sZXJhbmNlOiBBIHByb3BlbnNpdHkgZm9yIGFkdmVyc2UgcmVhY3Rpb25zIHRvIGEgc3Vic3RhbmNlIHRoYXQgaXMgbm90IGp1ZGdlZCB0byBiZSBhbGxlcmdpYyBvciBcImFsbGVyZ3ktbGlrZVwiLiAgVGhlc2UgcmVhY3Rpb25zIGFyZSB0eXBpY2FsbHkgKGJ1dCBub3QgbmVjZXNzYXJpbHkpIG5vbi1pbW11bmUuICBUaGV5IGFyZSB0byBzb21lIGRlZ3JlZSBpZGlvc3luY3JhdGljIGFuZC9vciBpbmRpdmlkdWFsbHkgc3BlY2lmaWMgKGkuZS4gYXJlIG5vdCBhIHJlYWN0aW9uIHRoYXQgaXMgZXhwZWN0ZWQgdG8gb2NjdXIgd2l0aCBtb3N0IG9yIGFsbCBwYXRpZW50cyBnaXZlbiBzaW1pbGFyIGNpcmN1bXN0YW5jZXMpLlxyXG4gICAqL1xyXG4gIEludG9sZXJhbmNlOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogSWRlbnRpZmljYXRpb24gb2YgdGhlIHVuZGVybHlpbmcgcGh5c2lvbG9naWNhbCBtZWNoYW5pc20gZm9yIGEgUmVhY3Rpb24gUmlzay5cclxuICovXHJcbmV4cG9ydCBjb25zdCBBbGxlcmd5SW50b2xlcmFuY2VUeXBlQ29kaW5nczpBbGxlcmd5SW50b2xlcmFuY2VUeXBlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhbGxlcmd5OiBBIHByb3BlbnNpdHkgZm9yIGh5cGVyc2Vuc2l0aXZpdHkgcmVhY3Rpb24ocykgdG8gYSBzdWJzdGFuY2UuICBUaGVzZSByZWFjdGlvbnMgYXJlIG1vc3QgdHlwaWNhbGx5IHR5cGUgSSBoeXBlcnNlbnNpdGl2aXR5LCBwbHVzIG90aGVyIFwiYWxsZXJneS1saWtlXCIgcmVhY3Rpb25zLCBpbmNsdWRpbmcgcHNldWRvYWxsZXJneS5cclxuICAgKi9cclxuICBBbGxlcmd5OiB7XHJcbiAgICBkaXNwbGF5OiBcIkFsbGVyZ3lcIixcclxuICAgIGNvZGU6IFwiYWxsZXJneVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYWxsZXJneS1pbnRvbGVyYW5jZS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBpbnRvbGVyYW5jZTogQSBwcm9wZW5zaXR5IGZvciBhZHZlcnNlIHJlYWN0aW9ucyB0byBhIHN1YnN0YW5jZSB0aGF0IGlzIG5vdCBqdWRnZWQgdG8gYmUgYWxsZXJnaWMgb3IgXCJhbGxlcmd5LWxpa2VcIi4gIFRoZXNlIHJlYWN0aW9ucyBhcmUgdHlwaWNhbGx5IChidXQgbm90IG5lY2Vzc2FyaWx5KSBub24taW1tdW5lLiAgVGhleSBhcmUgdG8gc29tZSBkZWdyZWUgaWRpb3N5bmNyYXRpYyBhbmQvb3IgaW5kaXZpZHVhbGx5IHNwZWNpZmljIChpLmUuIGFyZSBub3QgYSByZWFjdGlvbiB0aGF0IGlzIGV4cGVjdGVkIHRvIG9jY3VyIHdpdGggbW9zdCBvciBhbGwgcGF0aWVudHMgZ2l2ZW4gc2ltaWxhciBjaXJjdW1zdGFuY2VzKS5cclxuICAgKi9cclxuICBJbnRvbGVyYW5jZToge1xyXG4gICAgZGlzcGxheTogXCJJbnRvbGVyYW5jZVwiLFxyXG4gICAgY29kZTogXCJpbnRvbGVyYW5jZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYWxsZXJneS1pbnRvbGVyYW5jZS10eXBlXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19