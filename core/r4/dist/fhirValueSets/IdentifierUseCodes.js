// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/identifier-use|4.0.1
/**
 * Identifies the purpose for this identifier, if known .
 */
export const IdentifierUseCodes = {
    /**
     * official: The identifier considered to be most trusted for the identification of this item. Sometimes also known as "primary" and "main". The determination of "official" is subjective and implementation guides often provide additional guidelines for use.
     */
    Official: "official",
    /**
     * old: The identifier id no longer considered valid, but may be relevant for search purposes.  E.g. Changes to identifier schemes, account merges, etc.
     */
    Old: "old",
    /**
     * secondary: An identifier that was assigned in secondary use - it serves to identify the object in a relative context, but cannot be consistently assigned to the same object again in a different context.
     */
    Secondary: "secondary",
    /**
     * temp: A temporary identifier.
     */
    Temp: "temp",
    /**
     * usual: The identifier recommended for display and use in real-world interactions.
     */
    Usual: "usual",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWRlbnRpZmllclVzZUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9JZGVudGlmaWVyVXNlQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsbUVBQW1FO0FBRW5FOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUc7SUFDaEM7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILEdBQUcsRUFBRSxLQUFLO0lBQ1Y7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILElBQUksRUFBRSxNQUFNO0lBQ1o7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztDQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvaWRlbnRpZmllci11c2V8NC4wLjFcclxuXHJcbi8qKlxyXG4gKiBJZGVudGlmaWVzIHRoZSBwdXJwb3NlIGZvciB0aGlzIGlkZW50aWZpZXIsIGlmIGtub3duIC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBJZGVudGlmaWVyVXNlQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogb2ZmaWNpYWw6IFRoZSBpZGVudGlmaWVyIGNvbnNpZGVyZWQgdG8gYmUgbW9zdCB0cnVzdGVkIGZvciB0aGUgaWRlbnRpZmljYXRpb24gb2YgdGhpcyBpdGVtLiBTb21ldGltZXMgYWxzbyBrbm93biBhcyBcInByaW1hcnlcIiBhbmQgXCJtYWluXCIuIFRoZSBkZXRlcm1pbmF0aW9uIG9mIFwib2ZmaWNpYWxcIiBpcyBzdWJqZWN0aXZlIGFuZCBpbXBsZW1lbnRhdGlvbiBndWlkZXMgb2Z0ZW4gcHJvdmlkZSBhZGRpdGlvbmFsIGd1aWRlbGluZXMgZm9yIHVzZS5cclxuICAgKi9cclxuICBPZmZpY2lhbDogXCJvZmZpY2lhbFwiLFxyXG4gIC8qKlxyXG4gICAqIG9sZDogVGhlIGlkZW50aWZpZXIgaWQgbm8gbG9uZ2VyIGNvbnNpZGVyZWQgdmFsaWQsIGJ1dCBtYXkgYmUgcmVsZXZhbnQgZm9yIHNlYXJjaCBwdXJwb3Nlcy4gIEUuZy4gQ2hhbmdlcyB0byBpZGVudGlmaWVyIHNjaGVtZXMsIGFjY291bnQgbWVyZ2VzLCBldGMuXHJcbiAgICovXHJcbiAgT2xkOiBcIm9sZFwiLFxyXG4gIC8qKlxyXG4gICAqIHNlY29uZGFyeTogQW4gaWRlbnRpZmllciB0aGF0IHdhcyBhc3NpZ25lZCBpbiBzZWNvbmRhcnkgdXNlIC0gaXQgc2VydmVzIHRvIGlkZW50aWZ5IHRoZSBvYmplY3QgaW4gYSByZWxhdGl2ZSBjb250ZXh0LCBidXQgY2Fubm90IGJlIGNvbnNpc3RlbnRseSBhc3NpZ25lZCB0byB0aGUgc2FtZSBvYmplY3QgYWdhaW4gaW4gYSBkaWZmZXJlbnQgY29udGV4dC5cclxuICAgKi9cclxuICBTZWNvbmRhcnk6IFwic2Vjb25kYXJ5XCIsXHJcbiAgLyoqXHJcbiAgICogdGVtcDogQSB0ZW1wb3JhcnkgaWRlbnRpZmllci5cclxuICAgKi9cclxuICBUZW1wOiBcInRlbXBcIixcclxuICAvKipcclxuICAgKiB1c3VhbDogVGhlIGlkZW50aWZpZXIgcmVjb21tZW5kZWQgZm9yIGRpc3BsYXkgYW5kIHVzZSBpbiByZWFsLXdvcmxkIGludGVyYWN0aW9ucy5cclxuICAgKi9cclxuICBVc3VhbDogXCJ1c3VhbFwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIElkZW50aWZpZXMgdGhlIHB1cnBvc2UgZm9yIHRoaXMgaWRlbnRpZmllciwgaWYga25vd24gLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgSWRlbnRpZmllclVzZUNvZGVUeXBlID0gdHlwZW9mIElkZW50aWZpZXJVc2VDb2Rlc1trZXlvZiB0eXBlb2YgSWRlbnRpZmllclVzZUNvZGVzXTtcclxuIl19