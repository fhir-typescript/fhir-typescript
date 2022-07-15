// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/map-transform|4.3.0
/**
 * How data is copied/created.
 */
export const MapTransformCodings = {
    /**
     * append: append(source...) - source is element or string.
     */
    Append: {
        display: "append",
        code: "append",
        system: "http://hl7.org/fhir/map-transform",
    },
    /**
     * c: Create a Coding. Parameters = (system. Code[, display]).
     */
    C: {
        display: "c",
        code: "c",
        system: "http://hl7.org/fhir/map-transform",
    },
    /**
     * cast: cast(source, type?) - case source from one type to another. target type can be left as implicit if there is one and only one target type known.
     */
    Cast: {
        display: "cast",
        code: "cast",
        system: "http://hl7.org/fhir/map-transform",
    },
    /**
     * cc: Create a CodeableConcept. Parameters = (text) or (system. Code[, display]).
     */
    Cc: {
        display: "cc",
        code: "cc",
        system: "http://hl7.org/fhir/map-transform",
    },
    /**
     * copy: copy(source).
     */
    Copy: {
        display: "copy",
        code: "copy",
        system: "http://hl7.org/fhir/map-transform",
    },
    /**
     * cp: Create a contact details. Parameters = (value) or (system, value). If no system is provided, the system should be inferred from the content of the value.
     */
    Cp: {
        display: "cp",
        code: "cp",
        system: "http://hl7.org/fhir/map-transform",
    },
    /**
     * create: create(type : string) - type is passed through to the application on the standard API, and must be known by it.
     */
    Create: {
        display: "create",
        code: "create",
        system: "http://hl7.org/fhir/map-transform",
    },
    /**
     * dateOp: Perform a date operation. *Parameters to be documented*.
     */
    DateOp: {
        display: "dateOp",
        code: "dateOp",
        system: "http://hl7.org/fhir/map-transform",
    },
    /**
     * escape: escape(source, fmt1, fmt2) - change source from one kind of escaping to another (plain, java, xml, json). note that this is for when the string itself is escaped.
     */
    Escape: {
        display: "escape",
        code: "escape",
        system: "http://hl7.org/fhir/map-transform",
    },
    /**
     * evaluate: Execute the supplied FHIRPath expression and use the value returned by that.
     */
    Evaluate: {
        display: "evaluate",
        code: "evaluate",
        system: "http://hl7.org/fhir/map-transform",
    },
    /**
     * id: Create an identifier. Parameters = (system, value[, type]) where type is a code from the identifier type value set.
     */
    Id: {
        display: "id",
        code: "id",
        system: "http://hl7.org/fhir/map-transform",
    },
    /**
     * pointer: Return the appropriate string to put in a reference that refers to the resource provided as a parameter.
     */
    Pointer: {
        display: "pointer",
        code: "pointer",
        system: "http://hl7.org/fhir/map-transform",
    },
    /**
     * qty: Create a quantity. Parameters = (text) or (value, unit, [system, code]) where text is the natural representation e.g. [comparator]value[space]unit.
     */
    Qty: {
        display: "qty",
        code: "qty",
        system: "http://hl7.org/fhir/map-transform",
    },
    /**
     * reference: reference(source : object) - return a string that references the provided tree properly.
     */
    Reference: {
        display: "reference",
        code: "reference",
        system: "http://hl7.org/fhir/map-transform",
    },
    /**
     * translate: translate(source, uri_of_map) - use the translate operation.
     */
    Translate: {
        display: "translate",
        code: "translate",
        system: "http://hl7.org/fhir/map-transform",
    },
    /**
     * truncate: truncate(source, length) - source must be stringy type.
     */
    Truncate: {
        display: "truncate",
        code: "truncate",
        system: "http://hl7.org/fhir/map-transform",
    },
    /**
     * uuid: Generate a random UUID (in lowercase). No Parameters.
     */
    Uuid: {
        display: "uuid",
        code: "uuid",
        system: "http://hl7.org/fhir/map-transform",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwVHJhbnNmb3JtQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvTWFwVHJhbnNmb3JtQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxrRUFBa0U7QUE4RWxFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQTBCO0lBQ3hEOztPQUVHO0lBQ0gsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsbUNBQW1DO0tBQzVDO0lBQ0Q7O09BRUc7SUFDSCxDQUFDLEVBQUU7UUFDRCxPQUFPLEVBQUUsR0FBRztRQUNaLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLG1DQUFtQztLQUM1QztJQUNEOztPQUVHO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxtQ0FBbUM7S0FDNUM7SUFDRDs7T0FFRztJQUNILEVBQUUsRUFBRTtRQUNGLE9BQU8sRUFBRSxJQUFJO1FBQ2IsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsbUNBQW1DO0tBQzVDO0lBQ0Q7O09BRUc7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLG1DQUFtQztLQUM1QztJQUNEOztPQUVHO0lBQ0gsRUFBRSxFQUFFO1FBQ0YsT0FBTyxFQUFFLElBQUk7UUFDYixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxtQ0FBbUM7S0FDNUM7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLG1DQUFtQztLQUM1QztJQUNEOztPQUVHO0lBQ0gsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsbUNBQW1DO0tBQzVDO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxtQ0FBbUM7S0FDNUM7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxtQ0FBbUM7S0FDNUM7SUFDRDs7T0FFRztJQUNILEVBQUUsRUFBRTtRQUNGLE9BQU8sRUFBRSxJQUFJO1FBQ2IsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsbUNBQW1DO0tBQzVDO0lBQ0Q7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxtQ0FBbUM7S0FDNUM7SUFDRDs7T0FFRztJQUNILEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsbUNBQW1DO0tBQzVDO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsbUNBQW1DO0tBQzVDO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsbUNBQW1DO0tBQzVDO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsbUNBQW1DO0tBQzVDO0lBQ0Q7O09BRUc7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLG1DQUFtQztLQUM1QztDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L21hcC10cmFuc2Zvcm18NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBIb3cgZGF0YSBpcyBjb3BpZWQvY3JlYXRlZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIE1hcFRyYW5zZm9ybUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYXBwZW5kOiBhcHBlbmQoc291cmNlLi4uKSAtIHNvdXJjZSBpcyBlbGVtZW50IG9yIHN0cmluZy5cclxuICAgKi9cclxuICBBcHBlbmQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogYzogQ3JlYXRlIGEgQ29kaW5nLiBQYXJhbWV0ZXJzID0gKHN5c3RlbS4gQ29kZVssIGRpc3BsYXldKS5cclxuICAgKi9cclxuICBDOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGNhc3Q6IGNhc3Qoc291cmNlLCB0eXBlPykgLSBjYXNlIHNvdXJjZSBmcm9tIG9uZSB0eXBlIHRvIGFub3RoZXIuIHRhcmdldCB0eXBlIGNhbiBiZSBsZWZ0IGFzIGltcGxpY2l0IGlmIHRoZXJlIGlzIG9uZSBhbmQgb25seSBvbmUgdGFyZ2V0IHR5cGUga25vd24uXHJcbiAgICovXHJcbiAgQ2FzdDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBjYzogQ3JlYXRlIGEgQ29kZWFibGVDb25jZXB0LiBQYXJhbWV0ZXJzID0gKHRleHQpIG9yIChzeXN0ZW0uIENvZGVbLCBkaXNwbGF5XSkuXHJcbiAgICovXHJcbiAgQ2M6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogY29weTogY29weShzb3VyY2UpLlxyXG4gICAqL1xyXG4gIENvcHk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogY3A6IENyZWF0ZSBhIGNvbnRhY3QgZGV0YWlscy4gUGFyYW1ldGVycyA9ICh2YWx1ZSkgb3IgKHN5c3RlbSwgdmFsdWUpLiBJZiBubyBzeXN0ZW0gaXMgcHJvdmlkZWQsIHRoZSBzeXN0ZW0gc2hvdWxkIGJlIGluZmVycmVkIGZyb20gdGhlIGNvbnRlbnQgb2YgdGhlIHZhbHVlLlxyXG4gICAqL1xyXG4gIENwOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGNyZWF0ZTogY3JlYXRlKHR5cGUgOiBzdHJpbmcpIC0gdHlwZSBpcyBwYXNzZWQgdGhyb3VnaCB0byB0aGUgYXBwbGljYXRpb24gb24gdGhlIHN0YW5kYXJkIEFQSSwgYW5kIG11c3QgYmUga25vd24gYnkgaXQuXHJcbiAgICovXHJcbiAgQ3JlYXRlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGRhdGVPcDogUGVyZm9ybSBhIGRhdGUgb3BlcmF0aW9uLiAqUGFyYW1ldGVycyB0byBiZSBkb2N1bWVudGVkKi5cclxuICAgKi9cclxuICBEYXRlT3A6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZXNjYXBlOiBlc2NhcGUoc291cmNlLCBmbXQxLCBmbXQyKSAtIGNoYW5nZSBzb3VyY2UgZnJvbSBvbmUga2luZCBvZiBlc2NhcGluZyB0byBhbm90aGVyIChwbGFpbiwgamF2YSwgeG1sLCBqc29uKS4gbm90ZSB0aGF0IHRoaXMgaXMgZm9yIHdoZW4gdGhlIHN0cmluZyBpdHNlbGYgaXMgZXNjYXBlZC5cclxuICAgKi9cclxuICBFc2NhcGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZXZhbHVhdGU6IEV4ZWN1dGUgdGhlIHN1cHBsaWVkIEZISVJQYXRoIGV4cHJlc3Npb24gYW5kIHVzZSB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgdGhhdC5cclxuICAgKi9cclxuICBFdmFsdWF0ZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBpZDogQ3JlYXRlIGFuIGlkZW50aWZpZXIuIFBhcmFtZXRlcnMgPSAoc3lzdGVtLCB2YWx1ZVssIHR5cGVdKSB3aGVyZSB0eXBlIGlzIGEgY29kZSBmcm9tIHRoZSBpZGVudGlmaWVyIHR5cGUgdmFsdWUgc2V0LlxyXG4gICAqL1xyXG4gIElkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHBvaW50ZXI6IFJldHVybiB0aGUgYXBwcm9wcmlhdGUgc3RyaW5nIHRvIHB1dCBpbiBhIHJlZmVyZW5jZSB0aGF0IHJlZmVycyB0byB0aGUgcmVzb3VyY2UgcHJvdmlkZWQgYXMgYSBwYXJhbWV0ZXIuXHJcbiAgICovXHJcbiAgUG9pbnRlcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBxdHk6IENyZWF0ZSBhIHF1YW50aXR5LiBQYXJhbWV0ZXJzID0gKHRleHQpIG9yICh2YWx1ZSwgdW5pdCwgW3N5c3RlbSwgY29kZV0pIHdoZXJlIHRleHQgaXMgdGhlIG5hdHVyYWwgcmVwcmVzZW50YXRpb24gZS5nLiBbY29tcGFyYXRvcl12YWx1ZVtzcGFjZV11bml0LlxyXG4gICAqL1xyXG4gIFF0eTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZWZlcmVuY2U6IHJlZmVyZW5jZShzb3VyY2UgOiBvYmplY3QpIC0gcmV0dXJuIGEgc3RyaW5nIHRoYXQgcmVmZXJlbmNlcyB0aGUgcHJvdmlkZWQgdHJlZSBwcm9wZXJseS5cclxuICAgKi9cclxuICBSZWZlcmVuY2U6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdHJhbnNsYXRlOiB0cmFuc2xhdGUoc291cmNlLCB1cmlfb2ZfbWFwKSAtIHVzZSB0aGUgdHJhbnNsYXRlIG9wZXJhdGlvbi5cclxuICAgKi9cclxuICBUcmFuc2xhdGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdHJ1bmNhdGU6IHRydW5jYXRlKHNvdXJjZSwgbGVuZ3RoKSAtIHNvdXJjZSBtdXN0IGJlIHN0cmluZ3kgdHlwZS5cclxuICAgKi9cclxuICBUcnVuY2F0ZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB1dWlkOiBHZW5lcmF0ZSBhIHJhbmRvbSBVVUlEIChpbiBsb3dlcmNhc2UpLiBObyBQYXJhbWV0ZXJzLlxyXG4gICAqL1xyXG4gIFV1aWQ6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIb3cgZGF0YSBpcyBjb3BpZWQvY3JlYXRlZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBNYXBUcmFuc2Zvcm1Db2RpbmdzOk1hcFRyYW5zZm9ybUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYXBwZW5kOiBhcHBlbmQoc291cmNlLi4uKSAtIHNvdXJjZSBpcyBlbGVtZW50IG9yIHN0cmluZy5cclxuICAgKi9cclxuICBBcHBlbmQ6IHtcclxuICAgIGRpc3BsYXk6IFwiYXBwZW5kXCIsXHJcbiAgICBjb2RlOiBcImFwcGVuZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWFwLXRyYW5zZm9ybVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogYzogQ3JlYXRlIGEgQ29kaW5nLiBQYXJhbWV0ZXJzID0gKHN5c3RlbS4gQ29kZVssIGRpc3BsYXldKS5cclxuICAgKi9cclxuICBDOiB7XHJcbiAgICBkaXNwbGF5OiBcImNcIixcclxuICAgIGNvZGU6IFwiY1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWFwLXRyYW5zZm9ybVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY2FzdDogY2FzdChzb3VyY2UsIHR5cGU/KSAtIGNhc2Ugc291cmNlIGZyb20gb25lIHR5cGUgdG8gYW5vdGhlci4gdGFyZ2V0IHR5cGUgY2FuIGJlIGxlZnQgYXMgaW1wbGljaXQgaWYgdGhlcmUgaXMgb25lIGFuZCBvbmx5IG9uZSB0YXJnZXQgdHlwZSBrbm93bi5cclxuICAgKi9cclxuICBDYXN0OiB7XHJcbiAgICBkaXNwbGF5OiBcImNhc3RcIixcclxuICAgIGNvZGU6IFwiY2FzdFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWFwLXRyYW5zZm9ybVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY2M6IENyZWF0ZSBhIENvZGVhYmxlQ29uY2VwdC4gUGFyYW1ldGVycyA9ICh0ZXh0KSBvciAoc3lzdGVtLiBDb2RlWywgZGlzcGxheV0pLlxyXG4gICAqL1xyXG4gIENjOiB7XHJcbiAgICBkaXNwbGF5OiBcImNjXCIsXHJcbiAgICBjb2RlOiBcImNjXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9tYXAtdHJhbnNmb3JtXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBjb3B5OiBjb3B5KHNvdXJjZSkuXHJcbiAgICovXHJcbiAgQ29weToge1xyXG4gICAgZGlzcGxheTogXCJjb3B5XCIsXHJcbiAgICBjb2RlOiBcImNvcHlcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21hcC10cmFuc2Zvcm1cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGNwOiBDcmVhdGUgYSBjb250YWN0IGRldGFpbHMuIFBhcmFtZXRlcnMgPSAodmFsdWUpIG9yIChzeXN0ZW0sIHZhbHVlKS4gSWYgbm8gc3lzdGVtIGlzIHByb3ZpZGVkLCB0aGUgc3lzdGVtIHNob3VsZCBiZSBpbmZlcnJlZCBmcm9tIHRoZSBjb250ZW50IG9mIHRoZSB2YWx1ZS5cclxuICAgKi9cclxuICBDcDoge1xyXG4gICAgZGlzcGxheTogXCJjcFwiLFxyXG4gICAgY29kZTogXCJjcFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWFwLXRyYW5zZm9ybVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY3JlYXRlOiBjcmVhdGUodHlwZSA6IHN0cmluZykgLSB0eXBlIGlzIHBhc3NlZCB0aHJvdWdoIHRvIHRoZSBhcHBsaWNhdGlvbiBvbiB0aGUgc3RhbmRhcmQgQVBJLCBhbmQgbXVzdCBiZSBrbm93biBieSBpdC5cclxuICAgKi9cclxuICBDcmVhdGU6IHtcclxuICAgIGRpc3BsYXk6IFwiY3JlYXRlXCIsXHJcbiAgICBjb2RlOiBcImNyZWF0ZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWFwLXRyYW5zZm9ybVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZGF0ZU9wOiBQZXJmb3JtIGEgZGF0ZSBvcGVyYXRpb24uICpQYXJhbWV0ZXJzIHRvIGJlIGRvY3VtZW50ZWQqLlxyXG4gICAqL1xyXG4gIERhdGVPcDoge1xyXG4gICAgZGlzcGxheTogXCJkYXRlT3BcIixcclxuICAgIGNvZGU6IFwiZGF0ZU9wXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9tYXAtdHJhbnNmb3JtXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBlc2NhcGU6IGVzY2FwZShzb3VyY2UsIGZtdDEsIGZtdDIpIC0gY2hhbmdlIHNvdXJjZSBmcm9tIG9uZSBraW5kIG9mIGVzY2FwaW5nIHRvIGFub3RoZXIgKHBsYWluLCBqYXZhLCB4bWwsIGpzb24pLiBub3RlIHRoYXQgdGhpcyBpcyBmb3Igd2hlbiB0aGUgc3RyaW5nIGl0c2VsZiBpcyBlc2NhcGVkLlxyXG4gICAqL1xyXG4gIEVzY2FwZToge1xyXG4gICAgZGlzcGxheTogXCJlc2NhcGVcIixcclxuICAgIGNvZGU6IFwiZXNjYXBlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9tYXAtdHJhbnNmb3JtXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBldmFsdWF0ZTogRXhlY3V0ZSB0aGUgc3VwcGxpZWQgRkhJUlBhdGggZXhwcmVzc2lvbiBhbmQgdXNlIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGF0LlxyXG4gICAqL1xyXG4gIEV2YWx1YXRlOiB7XHJcbiAgICBkaXNwbGF5OiBcImV2YWx1YXRlXCIsXHJcbiAgICBjb2RlOiBcImV2YWx1YXRlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9tYXAtdHJhbnNmb3JtXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBpZDogQ3JlYXRlIGFuIGlkZW50aWZpZXIuIFBhcmFtZXRlcnMgPSAoc3lzdGVtLCB2YWx1ZVssIHR5cGVdKSB3aGVyZSB0eXBlIGlzIGEgY29kZSBmcm9tIHRoZSBpZGVudGlmaWVyIHR5cGUgdmFsdWUgc2V0LlxyXG4gICAqL1xyXG4gIElkOiB7XHJcbiAgICBkaXNwbGF5OiBcImlkXCIsXHJcbiAgICBjb2RlOiBcImlkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9tYXAtdHJhbnNmb3JtXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBwb2ludGVyOiBSZXR1cm4gdGhlIGFwcHJvcHJpYXRlIHN0cmluZyB0byBwdXQgaW4gYSByZWZlcmVuY2UgdGhhdCByZWZlcnMgdG8gdGhlIHJlc291cmNlIHByb3ZpZGVkIGFzIGEgcGFyYW1ldGVyLlxyXG4gICAqL1xyXG4gIFBvaW50ZXI6IHtcclxuICAgIGRpc3BsYXk6IFwicG9pbnRlclwiLFxyXG4gICAgY29kZTogXCJwb2ludGVyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9tYXAtdHJhbnNmb3JtXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBxdHk6IENyZWF0ZSBhIHF1YW50aXR5LiBQYXJhbWV0ZXJzID0gKHRleHQpIG9yICh2YWx1ZSwgdW5pdCwgW3N5c3RlbSwgY29kZV0pIHdoZXJlIHRleHQgaXMgdGhlIG5hdHVyYWwgcmVwcmVzZW50YXRpb24gZS5nLiBbY29tcGFyYXRvcl12YWx1ZVtzcGFjZV11bml0LlxyXG4gICAqL1xyXG4gIFF0eToge1xyXG4gICAgZGlzcGxheTogXCJxdHlcIixcclxuICAgIGNvZGU6IFwicXR5XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9tYXAtdHJhbnNmb3JtXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZWZlcmVuY2U6IHJlZmVyZW5jZShzb3VyY2UgOiBvYmplY3QpIC0gcmV0dXJuIGEgc3RyaW5nIHRoYXQgcmVmZXJlbmNlcyB0aGUgcHJvdmlkZWQgdHJlZSBwcm9wZXJseS5cclxuICAgKi9cclxuICBSZWZlcmVuY2U6IHtcclxuICAgIGRpc3BsYXk6IFwicmVmZXJlbmNlXCIsXHJcbiAgICBjb2RlOiBcInJlZmVyZW5jZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWFwLXRyYW5zZm9ybVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdHJhbnNsYXRlOiB0cmFuc2xhdGUoc291cmNlLCB1cmlfb2ZfbWFwKSAtIHVzZSB0aGUgdHJhbnNsYXRlIG9wZXJhdGlvbi5cclxuICAgKi9cclxuICBUcmFuc2xhdGU6IHtcclxuICAgIGRpc3BsYXk6IFwidHJhbnNsYXRlXCIsXHJcbiAgICBjb2RlOiBcInRyYW5zbGF0ZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWFwLXRyYW5zZm9ybVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdHJ1bmNhdGU6IHRydW5jYXRlKHNvdXJjZSwgbGVuZ3RoKSAtIHNvdXJjZSBtdXN0IGJlIHN0cmluZ3kgdHlwZS5cclxuICAgKi9cclxuICBUcnVuY2F0ZToge1xyXG4gICAgZGlzcGxheTogXCJ0cnVuY2F0ZVwiLFxyXG4gICAgY29kZTogXCJ0cnVuY2F0ZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWFwLXRyYW5zZm9ybVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdXVpZDogR2VuZXJhdGUgYSByYW5kb20gVVVJRCAoaW4gbG93ZXJjYXNlKS4gTm8gUGFyYW1ldGVycy5cclxuICAgKi9cclxuICBVdWlkOiB7XHJcbiAgICBkaXNwbGF5OiBcInV1aWRcIixcclxuICAgIGNvZGU6IFwidXVpZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWFwLXRyYW5zZm9ybVwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==