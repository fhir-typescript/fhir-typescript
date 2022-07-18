// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/extension-context|1.0.2
/**
 * How an extension context is interpreted.
 */
export const ExtensionContextCodings = {
    /**
     * datatype: The context is all nodes matching a particular data type element path (root or repeating element) or all elements referencing a particular primitive data type (expressed as the datatype name).
     */
    Datatype: {
        display: "Datatype",
        code: "datatype",
        system: "http://hl7.org/fhir/extension-context",
    },
    /**
     * extension: The context is a particular extension from a particular profile, a uri that identifies the extension definition.
     */
    Extension: {
        display: "Extension",
        code: "extension",
        system: "http://hl7.org/fhir/extension-context",
    },
    /**
     * mapping: The context is all nodes whose mapping to a specified reference model corresponds to a particular mapping structure.  The context identifies the mapping target. The mapping should clearly identify where such an extension could be used.
     */
    Mapping: {
        display: "Mapping",
        code: "mapping",
        system: "http://hl7.org/fhir/extension-context",
    },
    /**
     * resource: The context is all elements matching a particular resource element path.
     */
    Resource: {
        display: "Resource",
        code: "resource",
        system: "http://hl7.org/fhir/extension-context",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZW5zaW9uQ29udGV4dENvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0V4dGVuc2lvbkNvbnRleHRDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHNFQUFzRTtBQTBCdEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBOEI7SUFDaEU7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsdUNBQXVDO0tBQ2hEO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsdUNBQXVDO0tBQ2hEO0lBQ0Q7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQ7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2V4dGVuc2lvbi1jb250ZXh0fDEuMC4yXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogSG93IGFuIGV4dGVuc2lvbiBjb250ZXh0IGlzIGludGVycHJldGVkLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXh0ZW5zaW9uQ29udGV4dENvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZGF0YXR5cGU6IFRoZSBjb250ZXh0IGlzIGFsbCBub2RlcyBtYXRjaGluZyBhIHBhcnRpY3VsYXIgZGF0YSB0eXBlIGVsZW1lbnQgcGF0aCAocm9vdCBvciByZXBlYXRpbmcgZWxlbWVudCkgb3IgYWxsIGVsZW1lbnRzIHJlZmVyZW5jaW5nIGEgcGFydGljdWxhciBwcmltaXRpdmUgZGF0YSB0eXBlIChleHByZXNzZWQgYXMgdGhlIGRhdGF0eXBlIG5hbWUpLlxyXG4gICAqL1xyXG4gIERhdGF0eXBlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGV4dGVuc2lvbjogVGhlIGNvbnRleHQgaXMgYSBwYXJ0aWN1bGFyIGV4dGVuc2lvbiBmcm9tIGEgcGFydGljdWxhciBwcm9maWxlLCBhIHVyaSB0aGF0IGlkZW50aWZpZXMgdGhlIGV4dGVuc2lvbiBkZWZpbml0aW9uLlxyXG4gICAqL1xyXG4gIEV4dGVuc2lvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBtYXBwaW5nOiBUaGUgY29udGV4dCBpcyBhbGwgbm9kZXMgd2hvc2UgbWFwcGluZyB0byBhIHNwZWNpZmllZCByZWZlcmVuY2UgbW9kZWwgY29ycmVzcG9uZHMgdG8gYSBwYXJ0aWN1bGFyIG1hcHBpbmcgc3RydWN0dXJlLiAgVGhlIGNvbnRleHQgaWRlbnRpZmllcyB0aGUgbWFwcGluZyB0YXJnZXQuIFRoZSBtYXBwaW5nIHNob3VsZCBjbGVhcmx5IGlkZW50aWZ5IHdoZXJlIHN1Y2ggYW4gZXh0ZW5zaW9uIGNvdWxkIGJlIHVzZWQuXHJcbiAgICovXHJcbiAgTWFwcGluZzogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZXNvdXJjZTogVGhlIGNvbnRleHQgaXMgYWxsIGVsZW1lbnRzIG1hdGNoaW5nIGEgcGFydGljdWxhciByZXNvdXJjZSBlbGVtZW50IHBhdGguXHJcbiAgICovXHJcbiAgUmVzb3VyY2U6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIb3cgYW4gZXh0ZW5zaW9uIGNvbnRleHQgaXMgaW50ZXJwcmV0ZWQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRXh0ZW5zaW9uQ29udGV4dENvZGluZ3M6RXh0ZW5zaW9uQ29udGV4dENvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZGF0YXR5cGU6IFRoZSBjb250ZXh0IGlzIGFsbCBub2RlcyBtYXRjaGluZyBhIHBhcnRpY3VsYXIgZGF0YSB0eXBlIGVsZW1lbnQgcGF0aCAocm9vdCBvciByZXBlYXRpbmcgZWxlbWVudCkgb3IgYWxsIGVsZW1lbnRzIHJlZmVyZW5jaW5nIGEgcGFydGljdWxhciBwcmltaXRpdmUgZGF0YSB0eXBlIChleHByZXNzZWQgYXMgdGhlIGRhdGF0eXBlIG5hbWUpLlxyXG4gICAqL1xyXG4gIERhdGF0eXBlOiB7XHJcbiAgICBkaXNwbGF5OiBcIkRhdGF0eXBlXCIsXHJcbiAgICBjb2RlOiBcImRhdGF0eXBlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9leHRlbnNpb24tY29udGV4dFwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZXh0ZW5zaW9uOiBUaGUgY29udGV4dCBpcyBhIHBhcnRpY3VsYXIgZXh0ZW5zaW9uIGZyb20gYSBwYXJ0aWN1bGFyIHByb2ZpbGUsIGEgdXJpIHRoYXQgaWRlbnRpZmllcyB0aGUgZXh0ZW5zaW9uIGRlZmluaXRpb24uXHJcbiAgICovXHJcbiAgRXh0ZW5zaW9uOiB7XHJcbiAgICBkaXNwbGF5OiBcIkV4dGVuc2lvblwiLFxyXG4gICAgY29kZTogXCJleHRlbnNpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2V4dGVuc2lvbi1jb250ZXh0XCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBtYXBwaW5nOiBUaGUgY29udGV4dCBpcyBhbGwgbm9kZXMgd2hvc2UgbWFwcGluZyB0byBhIHNwZWNpZmllZCByZWZlcmVuY2UgbW9kZWwgY29ycmVzcG9uZHMgdG8gYSBwYXJ0aWN1bGFyIG1hcHBpbmcgc3RydWN0dXJlLiAgVGhlIGNvbnRleHQgaWRlbnRpZmllcyB0aGUgbWFwcGluZyB0YXJnZXQuIFRoZSBtYXBwaW5nIHNob3VsZCBjbGVhcmx5IGlkZW50aWZ5IHdoZXJlIHN1Y2ggYW4gZXh0ZW5zaW9uIGNvdWxkIGJlIHVzZWQuXHJcbiAgICovXHJcbiAgTWFwcGluZzoge1xyXG4gICAgZGlzcGxheTogXCJNYXBwaW5nXCIsXHJcbiAgICBjb2RlOiBcIm1hcHBpbmdcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2V4dGVuc2lvbi1jb250ZXh0XCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZXNvdXJjZTogVGhlIGNvbnRleHQgaXMgYWxsIGVsZW1lbnRzIG1hdGNoaW5nIGEgcGFydGljdWxhciByZXNvdXJjZSBlbGVtZW50IHBhdGguXHJcbiAgICovXHJcbiAgUmVzb3VyY2U6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVzb3VyY2VcIixcclxuICAgIGNvZGU6IFwicmVzb3VyY2VcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2V4dGVuc2lvbi1jb250ZXh0XCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19