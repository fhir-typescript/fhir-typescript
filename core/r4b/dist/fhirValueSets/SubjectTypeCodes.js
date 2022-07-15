// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/subject-type|4.3.0
/**
 * Possible types of subjects.
 */
export const SubjectTypeCodes = {
    /**
     * Device: A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
     */
    Device: "Device",
    /**
     * Location: Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
     */
    Location: "Location",
    /**
     * Organization: A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
     */
    Organization: "Organization",
    /**
     * Patient: Demographics and other administrative information about an individual or animal receiving care or other health-related services.
     */
    Patient: "Patient",
    /**
     * Practitioner: A person who is directly or indirectly involved in the provisioning of healthcare.
     */
    Practitioner: "Practitioner",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ViamVjdFR5cGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvU3ViamVjdFR5cGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxpRUFBaUU7QUFFakU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUM5Qjs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxZQUFZLEVBQUUsY0FBYztJQUM1Qjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsWUFBWSxFQUFFLGNBQWM7Q0FDcEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvc3ViamVjdC10eXBlfDQuMy4wXHJcblxyXG4vKipcclxuICogUG9zc2libGUgdHlwZXMgb2Ygc3ViamVjdHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU3ViamVjdFR5cGVDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBEZXZpY2U6IEEgdHlwZSBvZiBhIG1hbnVmYWN0dXJlZCBpdGVtIHRoYXQgaXMgdXNlZCBpbiB0aGUgcHJvdmlzaW9uIG9mIGhlYWx0aGNhcmUgd2l0aG91dCBiZWluZyBzdWJzdGFudGlhbGx5IGNoYW5nZWQgdGhyb3VnaCB0aGF0IGFjdGl2aXR5LiBUaGUgZGV2aWNlIG1heSBiZSBhIG1lZGljYWwgb3Igbm9uLW1lZGljYWwgZGV2aWNlLlxyXG4gICAqL1xyXG4gIERldmljZTogXCJEZXZpY2VcIixcclxuICAvKipcclxuICAgKiBMb2NhdGlvbjogRGV0YWlscyBhbmQgcG9zaXRpb24gaW5mb3JtYXRpb24gZm9yIGEgcGh5c2ljYWwgcGxhY2Ugd2hlcmUgc2VydmljZXMgYXJlIHByb3ZpZGVkIGFuZCByZXNvdXJjZXMgYW5kIHBhcnRpY2lwYW50cyBtYXkgYmUgc3RvcmVkLCBmb3VuZCwgY29udGFpbmVkLCBvciBhY2NvbW1vZGF0ZWQuXHJcbiAgICovXHJcbiAgTG9jYXRpb246IFwiTG9jYXRpb25cIixcclxuICAvKipcclxuICAgKiBPcmdhbml6YXRpb246IEEgZm9ybWFsbHkgb3IgaW5mb3JtYWxseSByZWNvZ25pemVkIGdyb3VwaW5nIG9mIHBlb3BsZSBvciBvcmdhbml6YXRpb25zIGZvcm1lZCBmb3IgdGhlIHB1cnBvc2Ugb2YgYWNoaWV2aW5nIHNvbWUgZm9ybSBvZiBjb2xsZWN0aXZlIGFjdGlvbi4gIEluY2x1ZGVzIGNvbXBhbmllcywgaW5zdGl0dXRpb25zLCBjb3Jwb3JhdGlvbnMsIGRlcGFydG1lbnRzLCBjb21tdW5pdHkgZ3JvdXBzLCBoZWFsdGhjYXJlIHByYWN0aWNlIGdyb3VwcywgcGF5ZXIvaW5zdXJlciwgZXRjLlxyXG4gICAqL1xyXG4gIE9yZ2FuaXphdGlvbjogXCJPcmdhbml6YXRpb25cIixcclxuICAvKipcclxuICAgKiBQYXRpZW50OiBEZW1vZ3JhcGhpY3MgYW5kIG90aGVyIGFkbWluaXN0cmF0aXZlIGluZm9ybWF0aW9uIGFib3V0IGFuIGluZGl2aWR1YWwgb3IgYW5pbWFsIHJlY2VpdmluZyBjYXJlIG9yIG90aGVyIGhlYWx0aC1yZWxhdGVkIHNlcnZpY2VzLlxyXG4gICAqL1xyXG4gIFBhdGllbnQ6IFwiUGF0aWVudFwiLFxyXG4gIC8qKlxyXG4gICAqIFByYWN0aXRpb25lcjogQSBwZXJzb24gd2hvIGlzIGRpcmVjdGx5IG9yIGluZGlyZWN0bHkgaW52b2x2ZWQgaW4gdGhlIHByb3Zpc2lvbmluZyBvZiBoZWFsdGhjYXJlLlxyXG4gICAqL1xyXG4gIFByYWN0aXRpb25lcjogXCJQcmFjdGl0aW9uZXJcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBQb3NzaWJsZSB0eXBlcyBvZiBzdWJqZWN0cy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFN1YmplY3RUeXBlQ29kZVR5cGUgPSB0eXBlb2YgU3ViamVjdFR5cGVDb2Rlc1trZXlvZiB0eXBlb2YgU3ViamVjdFR5cGVDb2Rlc107XHJcbiJdfQ==