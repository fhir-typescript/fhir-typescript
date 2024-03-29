// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/identifier-use|4.0.1
/**
 * Identifies the purpose for this identifier, if known .
 */
export const IdentifierUseCodings = {
    /**
     * official: The identifier considered to be most trusted for the identification of this item. Sometimes also known as "primary" and "main". The determination of "official" is subjective and implementation guides often provide additional guidelines for use.
     */
    Official: {
        display: "Official",
        code: "official",
        system: "http://hl7.org/fhir/identifier-use",
    },
    /**
     * old: The identifier id no longer considered valid, but may be relevant for search purposes.  E.g. Changes to identifier schemes, account merges, etc.
     */
    Old: {
        display: "Old",
        code: "old",
        system: "http://hl7.org/fhir/identifier-use",
    },
    /**
     * secondary: An identifier that was assigned in secondary use - it serves to identify the object in a relative context, but cannot be consistently assigned to the same object again in a different context.
     */
    Secondary: {
        display: "Secondary",
        code: "secondary",
        system: "http://hl7.org/fhir/identifier-use",
    },
    /**
     * temp: A temporary identifier.
     */
    Temp: {
        display: "Temp",
        code: "temp",
        system: "http://hl7.org/fhir/identifier-use",
    },
    /**
     * usual: The identifier recommended for display and use in real-world interactions.
     */
    Usual: {
        display: "Usual",
        code: "usual",
        system: "http://hl7.org/fhir/identifier-use",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWRlbnRpZmllclVzZUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0lkZW50aWZpZXJVc2VDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLG1FQUFtRTtBQThCbkU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBMkI7SUFDMUQ7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsb0NBQW9DO0tBQzdDO0lBQ0Q7O09BRUc7SUFDSCxHQUFHLEVBQUU7UUFDSCxPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLG9DQUFvQztLQUM3QztJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLG9DQUFvQztLQUM3QztJQUNEOztPQUVHO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxvQ0FBb0M7S0FDN0M7SUFDRDs7T0FFRztJQUNILEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLG9DQUFvQztLQUM3QztDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvaWRlbnRpZmllci11c2V8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBJZGVudGlmaWVzIHRoZSBwdXJwb3NlIGZvciB0aGlzIGlkZW50aWZpZXIsIGlmIGtub3duIC5cclxuICovXHJcbmV4cG9ydCB0eXBlIElkZW50aWZpZXJVc2VDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIG9mZmljaWFsOiBUaGUgaWRlbnRpZmllciBjb25zaWRlcmVkIHRvIGJlIG1vc3QgdHJ1c3RlZCBmb3IgdGhlIGlkZW50aWZpY2F0aW9uIG9mIHRoaXMgaXRlbS4gU29tZXRpbWVzIGFsc28ga25vd24gYXMgXCJwcmltYXJ5XCIgYW5kIFwibWFpblwiLiBUaGUgZGV0ZXJtaW5hdGlvbiBvZiBcIm9mZmljaWFsXCIgaXMgc3ViamVjdGl2ZSBhbmQgaW1wbGVtZW50YXRpb24gZ3VpZGVzIG9mdGVuIHByb3ZpZGUgYWRkaXRpb25hbCBndWlkZWxpbmVzIGZvciB1c2UuXHJcbiAgICovXHJcbiAgT2ZmaWNpYWw6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogb2xkOiBUaGUgaWRlbnRpZmllciBpZCBubyBsb25nZXIgY29uc2lkZXJlZCB2YWxpZCwgYnV0IG1heSBiZSByZWxldmFudCBmb3Igc2VhcmNoIHB1cnBvc2VzLiAgRS5nLiBDaGFuZ2VzIHRvIGlkZW50aWZpZXIgc2NoZW1lcywgYWNjb3VudCBtZXJnZXMsIGV0Yy5cclxuICAgKi9cclxuICBPbGQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogc2Vjb25kYXJ5OiBBbiBpZGVudGlmaWVyIHRoYXQgd2FzIGFzc2lnbmVkIGluIHNlY29uZGFyeSB1c2UgLSBpdCBzZXJ2ZXMgdG8gaWRlbnRpZnkgdGhlIG9iamVjdCBpbiBhIHJlbGF0aXZlIGNvbnRleHQsIGJ1dCBjYW5ub3QgYmUgY29uc2lzdGVudGx5IGFzc2lnbmVkIHRvIHRoZSBzYW1lIG9iamVjdCBhZ2FpbiBpbiBhIGRpZmZlcmVudCBjb250ZXh0LlxyXG4gICAqL1xyXG4gIFNlY29uZGFyeTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB0ZW1wOiBBIHRlbXBvcmFyeSBpZGVudGlmaWVyLlxyXG4gICAqL1xyXG4gIFRlbXA6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdXN1YWw6IFRoZSBpZGVudGlmaWVyIHJlY29tbWVuZGVkIGZvciBkaXNwbGF5IGFuZCB1c2UgaW4gcmVhbC13b3JsZCBpbnRlcmFjdGlvbnMuXHJcbiAgICovXHJcbiAgVXN1YWw6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJZGVudGlmaWVzIHRoZSBwdXJwb3NlIGZvciB0aGlzIGlkZW50aWZpZXIsIGlmIGtub3duIC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBJZGVudGlmaWVyVXNlQ29kaW5nczpJZGVudGlmaWVyVXNlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBvZmZpY2lhbDogVGhlIGlkZW50aWZpZXIgY29uc2lkZXJlZCB0byBiZSBtb3N0IHRydXN0ZWQgZm9yIHRoZSBpZGVudGlmaWNhdGlvbiBvZiB0aGlzIGl0ZW0uIFNvbWV0aW1lcyBhbHNvIGtub3duIGFzIFwicHJpbWFyeVwiIGFuZCBcIm1haW5cIi4gVGhlIGRldGVybWluYXRpb24gb2YgXCJvZmZpY2lhbFwiIGlzIHN1YmplY3RpdmUgYW5kIGltcGxlbWVudGF0aW9uIGd1aWRlcyBvZnRlbiBwcm92aWRlIGFkZGl0aW9uYWwgZ3VpZGVsaW5lcyBmb3IgdXNlLlxyXG4gICAqL1xyXG4gIE9mZmljaWFsOiB7XHJcbiAgICBkaXNwbGF5OiBcIk9mZmljaWFsXCIsXHJcbiAgICBjb2RlOiBcIm9mZmljaWFsXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pZGVudGlmaWVyLXVzZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogb2xkOiBUaGUgaWRlbnRpZmllciBpZCBubyBsb25nZXIgY29uc2lkZXJlZCB2YWxpZCwgYnV0IG1heSBiZSByZWxldmFudCBmb3Igc2VhcmNoIHB1cnBvc2VzLiAgRS5nLiBDaGFuZ2VzIHRvIGlkZW50aWZpZXIgc2NoZW1lcywgYWNjb3VudCBtZXJnZXMsIGV0Yy5cclxuICAgKi9cclxuICBPbGQ6IHtcclxuICAgIGRpc3BsYXk6IFwiT2xkXCIsXHJcbiAgICBjb2RlOiBcIm9sZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaWRlbnRpZmllci11c2VcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHNlY29uZGFyeTogQW4gaWRlbnRpZmllciB0aGF0IHdhcyBhc3NpZ25lZCBpbiBzZWNvbmRhcnkgdXNlIC0gaXQgc2VydmVzIHRvIGlkZW50aWZ5IHRoZSBvYmplY3QgaW4gYSByZWxhdGl2ZSBjb250ZXh0LCBidXQgY2Fubm90IGJlIGNvbnNpc3RlbnRseSBhc3NpZ25lZCB0byB0aGUgc2FtZSBvYmplY3QgYWdhaW4gaW4gYSBkaWZmZXJlbnQgY29udGV4dC5cclxuICAgKi9cclxuICBTZWNvbmRhcnk6IHtcclxuICAgIGRpc3BsYXk6IFwiU2Vjb25kYXJ5XCIsXHJcbiAgICBjb2RlOiBcInNlY29uZGFyeVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaWRlbnRpZmllci11c2VcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHRlbXA6IEEgdGVtcG9yYXJ5IGlkZW50aWZpZXIuXHJcbiAgICovXHJcbiAgVGVtcDoge1xyXG4gICAgZGlzcGxheTogXCJUZW1wXCIsXHJcbiAgICBjb2RlOiBcInRlbXBcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2lkZW50aWZpZXItdXNlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiB1c3VhbDogVGhlIGlkZW50aWZpZXIgcmVjb21tZW5kZWQgZm9yIGRpc3BsYXkgYW5kIHVzZSBpbiByZWFsLXdvcmxkIGludGVyYWN0aW9ucy5cclxuICAgKi9cclxuICBVc3VhbDoge1xyXG4gICAgZGlzcGxheTogXCJVc3VhbFwiLFxyXG4gICAgY29kZTogXCJ1c3VhbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaWRlbnRpZmllci11c2VcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=