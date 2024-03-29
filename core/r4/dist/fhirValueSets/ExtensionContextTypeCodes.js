// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/extension-context-type|4.0.1
/**
 * How an extension context is interpreted.
 */
export const ExtensionContextTypeCodes = {
    /**
     * element: The context is any element that has an ElementDefinition.id that matches that found in the expression. This includes ElementDefinition Ids that have slicing identifiers. The full path for the element is [url]#[elementid]. If there is no #, the Element id is one defined in the base specification.
     */
    ElementID: "element",
    /**
     * extension: The context is a particular extension from a particular StructureDefinition, and the expression is just a uri that identifies the extension.
     */
    ExtensionURL: "extension",
    /**
     * fhirpath: The context is all elements that match the FHIRPath query found in the expression.
     */
    FHIRPath: "fhirpath",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZW5zaW9uQ29udGV4dFR5cGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvRXh0ZW5zaW9uQ29udGV4dFR5cGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywyRUFBMkU7QUFFM0U7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRztJQUN2Qzs7T0FFRztJQUNILFNBQVMsRUFBRSxTQUFTO0lBQ3BCOztPQUVHO0lBQ0gsWUFBWSxFQUFFLFdBQVc7SUFDekI7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtDQUNaLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZXh0ZW5zaW9uLWNvbnRleHQtdHlwZXw0LjAuMVxyXG5cclxuLyoqXHJcbiAqIEhvdyBhbiBleHRlbnNpb24gY29udGV4dCBpcyBpbnRlcnByZXRlZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBFeHRlbnNpb25Db250ZXh0VHlwZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGVsZW1lbnQ6IFRoZSBjb250ZXh0IGlzIGFueSBlbGVtZW50IHRoYXQgaGFzIGFuIEVsZW1lbnREZWZpbml0aW9uLmlkIHRoYXQgbWF0Y2hlcyB0aGF0IGZvdW5kIGluIHRoZSBleHByZXNzaW9uLiBUaGlzIGluY2x1ZGVzIEVsZW1lbnREZWZpbml0aW9uIElkcyB0aGF0IGhhdmUgc2xpY2luZyBpZGVudGlmaWVycy4gVGhlIGZ1bGwgcGF0aCBmb3IgdGhlIGVsZW1lbnQgaXMgW3VybF0jW2VsZW1lbnRpZF0uIElmIHRoZXJlIGlzIG5vICMsIHRoZSBFbGVtZW50IGlkIGlzIG9uZSBkZWZpbmVkIGluIHRoZSBiYXNlIHNwZWNpZmljYXRpb24uXHJcbiAgICovXHJcbiAgRWxlbWVudElEOiBcImVsZW1lbnRcIixcclxuICAvKipcclxuICAgKiBleHRlbnNpb246IFRoZSBjb250ZXh0IGlzIGEgcGFydGljdWxhciBleHRlbnNpb24gZnJvbSBhIHBhcnRpY3VsYXIgU3RydWN0dXJlRGVmaW5pdGlvbiwgYW5kIHRoZSBleHByZXNzaW9uIGlzIGp1c3QgYSB1cmkgdGhhdCBpZGVudGlmaWVzIHRoZSBleHRlbnNpb24uXHJcbiAgICovXHJcbiAgRXh0ZW5zaW9uVVJMOiBcImV4dGVuc2lvblwiLFxyXG4gIC8qKlxyXG4gICAqIGZoaXJwYXRoOiBUaGUgY29udGV4dCBpcyBhbGwgZWxlbWVudHMgdGhhdCBtYXRjaCB0aGUgRkhJUlBhdGggcXVlcnkgZm91bmQgaW4gdGhlIGV4cHJlc3Npb24uXHJcbiAgICovXHJcbiAgRkhJUlBhdGg6IFwiZmhpcnBhdGhcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBIb3cgYW4gZXh0ZW5zaW9uIGNvbnRleHQgaXMgaW50ZXJwcmV0ZWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFeHRlbnNpb25Db250ZXh0VHlwZUNvZGVUeXBlID0gdHlwZW9mIEV4dGVuc2lvbkNvbnRleHRUeXBlQ29kZXNba2V5b2YgdHlwZW9mIEV4dGVuc2lvbkNvbnRleHRUeXBlQ29kZXNdO1xyXG4iXX0=