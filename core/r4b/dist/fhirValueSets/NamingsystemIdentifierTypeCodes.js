// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/namingsystem-identifier-type|4.3.0
/**
 * Identifies the style of unique identifier used to identify a namespace.
 */
export const NamingsystemIdentifierTypeCodes = {
    /**
     * oid: An ISO object identifier; e.g. 1.2.3.4.5.
     */
    OID: "oid",
    /**
     * other: Some other type of unique identifier; e.g. HL7-assigned reserved string such as LN for LOINC.
     */
    Other: "other",
    /**
     * uri: A uniform resource identifier (ideally a URL - uniform resource locator); e.g. http://unitsofmeasure.org.
     */
    URI: "uri",
    /**
     * uuid: A universally unique identifier of the form a5afddf4-e880-459b-876e-e4591b0acc11.
     */
    UUID: "uuid",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmFtaW5nc3lzdGVtSWRlbnRpZmllclR5cGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvTmFtaW5nc3lzdGVtSWRlbnRpZmllclR5cGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxpRkFBaUY7QUFFakY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FBRztJQUM3Qzs7T0FFRztJQUNILEdBQUcsRUFBRSxLQUFLO0lBQ1Y7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsR0FBRyxFQUFFLEtBQUs7SUFDVjs7T0FFRztJQUNILElBQUksRUFBRSxNQUFNO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbmFtaW5nc3lzdGVtLWlkZW50aWZpZXItdHlwZXw0LjMuMFxyXG5cclxuLyoqXHJcbiAqIElkZW50aWZpZXMgdGhlIHN0eWxlIG9mIHVuaXF1ZSBpZGVudGlmaWVyIHVzZWQgdG8gaWRlbnRpZnkgYSBuYW1lc3BhY2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTmFtaW5nc3lzdGVtSWRlbnRpZmllclR5cGVDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBvaWQ6IEFuIElTTyBvYmplY3QgaWRlbnRpZmllcjsgZS5nLiAxLjIuMy40LjUuXHJcbiAgICovXHJcbiAgT0lEOiBcIm9pZFwiLFxyXG4gIC8qKlxyXG4gICAqIG90aGVyOiBTb21lIG90aGVyIHR5cGUgb2YgdW5pcXVlIGlkZW50aWZpZXI7IGUuZy4gSEw3LWFzc2lnbmVkIHJlc2VydmVkIHN0cmluZyBzdWNoIGFzIExOIGZvciBMT0lOQy5cclxuICAgKi9cclxuICBPdGhlcjogXCJvdGhlclwiLFxyXG4gIC8qKlxyXG4gICAqIHVyaTogQSB1bmlmb3JtIHJlc291cmNlIGlkZW50aWZpZXIgKGlkZWFsbHkgYSBVUkwgLSB1bmlmb3JtIHJlc291cmNlIGxvY2F0b3IpOyBlLmcuIGh0dHA6Ly91bml0c29mbWVhc3VyZS5vcmcuXHJcbiAgICovXHJcbiAgVVJJOiBcInVyaVwiLFxyXG4gIC8qKlxyXG4gICAqIHV1aWQ6IEEgdW5pdmVyc2FsbHkgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGZvcm0gYTVhZmRkZjQtZTg4MC00NTliLTg3NmUtZTQ1OTFiMGFjYzExLlxyXG4gICAqL1xyXG4gIFVVSUQ6IFwidXVpZFwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIElkZW50aWZpZXMgdGhlIHN0eWxlIG9mIHVuaXF1ZSBpZGVudGlmaWVyIHVzZWQgdG8gaWRlbnRpZnkgYSBuYW1lc3BhY2UuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBOYW1pbmdzeXN0ZW1JZGVudGlmaWVyVHlwZUNvZGVUeXBlID0gdHlwZW9mIE5hbWluZ3N5c3RlbUlkZW50aWZpZXJUeXBlQ29kZXNba2V5b2YgdHlwZW9mIE5hbWluZ3N5c3RlbUlkZW50aWZpZXJUeXBlQ29kZXNdO1xyXG4iXX0=