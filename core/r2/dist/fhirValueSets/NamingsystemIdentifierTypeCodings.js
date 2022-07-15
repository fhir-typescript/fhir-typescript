// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/namingsystem-identifier-type|1.0.2
/**
 * Identifies the style of unique identifier used to identify a namespace.
 */
export const NamingsystemIdentifierTypeCodings = {
    /**
     * oid: An ISO object identifier; e.g. 1.2.3.4.5.
     */
    OID: {
        display: "OID",
        code: "oid",
        system: "http://hl7.org/fhir/namingsystem-identifier-type",
    },
    /**
     * other: Some other type of unique identifier; e.g. HL7-assigned reserved string such as LN for LOINC.
     */
    Other: {
        display: "Other",
        code: "other",
        system: "http://hl7.org/fhir/namingsystem-identifier-type",
    },
    /**
     * uri: A uniform resource identifier (ideally a URL - uniform resource locator); e.g. http://unitsofmeasure.org.
     */
    URI: {
        display: "URI",
        code: "uri",
        system: "http://hl7.org/fhir/namingsystem-identifier-type",
    },
    /**
     * uuid: A universally unique identifier of the form a5afddf4-e880-459b-876e-e4591b0acc11.
     */
    UUID: {
        display: "UUID",
        code: "uuid",
        system: "http://hl7.org/fhir/namingsystem-identifier-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmFtaW5nc3lzdGVtSWRlbnRpZmllclR5cGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9OYW1pbmdzeXN0ZW1JZGVudGlmaWVyVHlwZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsaUZBQWlGO0FBMEJqRjs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlDQUFpQyxHQUF3QztJQUNwRjs7T0FFRztJQUNILEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsa0RBQWtEO0tBQzNEO0lBQ0Q7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxrREFBa0Q7S0FDM0Q7SUFDRDs7T0FFRztJQUNILEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsa0RBQWtEO0tBQzNEO0lBQ0Q7O09BRUc7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLGtEQUFrRDtLQUMzRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbmFtaW5nc3lzdGVtLWlkZW50aWZpZXItdHlwZXwxLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIElkZW50aWZpZXMgdGhlIHN0eWxlIG9mIHVuaXF1ZSBpZGVudGlmaWVyIHVzZWQgdG8gaWRlbnRpZnkgYSBuYW1lc3BhY2UuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBOYW1pbmdzeXN0ZW1JZGVudGlmaWVyVHlwZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogb2lkOiBBbiBJU08gb2JqZWN0IGlkZW50aWZpZXI7IGUuZy4gMS4yLjMuNC41LlxyXG4gICAqL1xyXG4gIE9JRDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBvdGhlcjogU29tZSBvdGhlciB0eXBlIG9mIHVuaXF1ZSBpZGVudGlmaWVyOyBlLmcuIEhMNy1hc3NpZ25lZCByZXNlcnZlZCBzdHJpbmcgc3VjaCBhcyBMTiBmb3IgTE9JTkMuXHJcbiAgICovXHJcbiAgT3RoZXI6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdXJpOiBBIHVuaWZvcm0gcmVzb3VyY2UgaWRlbnRpZmllciAoaWRlYWxseSBhIFVSTCAtIHVuaWZvcm0gcmVzb3VyY2UgbG9jYXRvcik7IGUuZy4gaHR0cDovL3VuaXRzb2ZtZWFzdXJlLm9yZy5cclxuICAgKi9cclxuICBVUkk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdXVpZDogQSB1bml2ZXJzYWxseSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgZm9ybSBhNWFmZGRmNC1lODgwLTQ1OWItODc2ZS1lNDU5MWIwYWNjMTEuXHJcbiAgICovXHJcbiAgVVVJRDogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIElkZW50aWZpZXMgdGhlIHN0eWxlIG9mIHVuaXF1ZSBpZGVudGlmaWVyIHVzZWQgdG8gaWRlbnRpZnkgYSBuYW1lc3BhY2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTmFtaW5nc3lzdGVtSWRlbnRpZmllclR5cGVDb2RpbmdzOk5hbWluZ3N5c3RlbUlkZW50aWZpZXJUeXBlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBvaWQ6IEFuIElTTyBvYmplY3QgaWRlbnRpZmllcjsgZS5nLiAxLjIuMy40LjUuXHJcbiAgICovXHJcbiAgT0lEOiB7XHJcbiAgICBkaXNwbGF5OiBcIk9JRFwiLFxyXG4gICAgY29kZTogXCJvaWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL25hbWluZ3N5c3RlbS1pZGVudGlmaWVyLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG90aGVyOiBTb21lIG90aGVyIHR5cGUgb2YgdW5pcXVlIGlkZW50aWZpZXI7IGUuZy4gSEw3LWFzc2lnbmVkIHJlc2VydmVkIHN0cmluZyBzdWNoIGFzIExOIGZvciBMT0lOQy5cclxuICAgKi9cclxuICBPdGhlcjoge1xyXG4gICAgZGlzcGxheTogXCJPdGhlclwiLFxyXG4gICAgY29kZTogXCJvdGhlclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbmFtaW5nc3lzdGVtLWlkZW50aWZpZXItdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdXJpOiBBIHVuaWZvcm0gcmVzb3VyY2UgaWRlbnRpZmllciAoaWRlYWxseSBhIFVSTCAtIHVuaWZvcm0gcmVzb3VyY2UgbG9jYXRvcik7IGUuZy4gaHR0cDovL3VuaXRzb2ZtZWFzdXJlLm9yZy5cclxuICAgKi9cclxuICBVUkk6IHtcclxuICAgIGRpc3BsYXk6IFwiVVJJXCIsXHJcbiAgICBjb2RlOiBcInVyaVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbmFtaW5nc3lzdGVtLWlkZW50aWZpZXItdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdXVpZDogQSB1bml2ZXJzYWxseSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgZm9ybSBhNWFmZGRmNC1lODgwLTQ1OWItODc2ZS1lNDU5MWIwYWNjMTEuXHJcbiAgICovXHJcbiAgVVVJRDoge1xyXG4gICAgZGlzcGxheTogXCJVVUlEXCIsXHJcbiAgICBjb2RlOiBcInV1aWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL25hbWluZ3N5c3RlbS1pZGVudGlmaWVyLXR5cGVcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=