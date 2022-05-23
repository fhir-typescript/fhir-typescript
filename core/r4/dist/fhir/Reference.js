// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Reference
import * as fhir from '../fhir.js';
// @ts-ignore
import { ResourceTypesCodings, } from '../fhirValueSets/ResourceTypesCodings.js';
/**
 * A reference from one resource to another.
 */
export class Reference extends fhir.FhirElement {
    /**
     * Default constructor for Reference - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['reference']) {
            this.reference = new fhir.FhirString({ value: source.reference });
        }
        if (source['type']) {
            this.type = new fhir.FhirUri({ value: source.type });
        }
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier);
        }
        if (source['display']) {
            this.display = new fhir.FhirString({ value: source.display });
        }
    }
    /**
     * Extensible-bound Value Set for type (Reference.type)
     */
    static get typeExtensibleCodings() {
        return ResourceTypesCodings;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        let issues = super.doModelValidation();
        if (this["reference"]) {
            issues.push(...this.reference.doModelValidation());
        }
        if (this["type"]) {
            issues.push(...this.type.doModelValidation());
        }
        if (this["identifier"]) {
            issues.push(...this.identifier.doModelValidation());
        }
        if (this["display"]) {
            issues.push(...this.display.doModelValidation());
        }
        return issues;
    }
    /**
     * Create a reference from an existing resource
     */
    static fromResource(source, baseUrl = '') {
        if (baseUrl.endsWith('/')) {
            return new Reference({
                type: source.resourceType ?? undefined,
                reference: baseUrl + source.resourceType + '/' + source.id,
            });
        }
        return new Reference({
            type: source.resourceType ?? undefined,
            reference: ((baseUrl.length > 0) ? (baseUrl + '/') : '') + source.resourceType + '/' + source.id,
        });
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Reference._fts_dataType = 'Reference';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVmZXJlbmNlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9SZWZlcmVuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBRW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsb0JBQW9CLEdBQTJCLE1BQU0sMENBQTBDLENBQUM7QUE0QnpHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFNBQVUsU0FBUSxJQUFJLENBQUMsV0FBVztJQXdCN0M7O09BRUc7SUFDSCxZQUFZLFNBQWdDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3RGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQzdGLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7U0FBRTtRQUMzRSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUFFO1FBQ3ZGLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7U0FBRTtJQUN6RixDQUFDO0lBQ0Q7O09BRUc7SUFDSSxNQUFNLEtBQUsscUJBQXFCO1FBQ3JDLE9BQU8sb0JBQW9CLENBQUM7SUFDOUIsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCO1FBQy9CLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDcEUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNoRixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzFFLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNGLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBd0IsRUFBRSxVQUFlLEVBQUU7UUFDOUQsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxTQUFTLENBQUM7Z0JBQ25CLElBQUksRUFBRSxNQUFNLENBQUMsWUFBWSxJQUFJLFNBQVM7Z0JBQ3RDLFNBQVMsRUFBRSxPQUFPLEdBQUcsTUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUU7YUFDM0QsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksU0FBUyxDQUFDO1lBQ25CLElBQUksRUFBRSxNQUFNLENBQUMsWUFBWSxJQUFJLFNBQVM7WUFDdEMsU0FBUyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUU7U0FDakcsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUFsRUQ7O0dBRUc7QUFDNkIsdUJBQWEsR0FBVSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IFJlZmVyZW5jZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUmVzb3VyY2VUeXBlc0NvZGluZ3MsIFJlc291cmNlVHlwZXNDb2RpbmdUeXBlLH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9SZXNvdXJjZVR5cGVzQ29kaW5ncy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUmVzb3VyY2VUeXBlc0NvZGVzLCAgUmVzb3VyY2VUeXBlc0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9SZXNvdXJjZVR5cGVzQ29kZXMuanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgUmVmZXJlbmNlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFJlZmVyZW5jZUFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogVXNpbmcgYWJzb2x1dGUgVVJMcyBwcm92aWRlcyBhIHN0YWJsZSBzY2FsYWJsZSBhcHByb2FjaCBzdWl0YWJsZSBmb3IgYSBjbG91ZC93ZWIgY29udGV4dCwgd2hpbGUgdXNpbmcgcmVsYXRpdmUvbG9naWNhbCByZWZlcmVuY2VzIHByb3ZpZGVzIGEgZmxleGlibGUgYXBwcm9hY2ggc3VpdGFibGUgZm9yIHVzZSB3aGVuIHRyYWRpbmcgYWNyb3NzIGNsb3NlZCBlY28tc3lzdGVtIGJvdW5kYXJpZXMuICAgQWJzb2x1dGUgVVJMcyBkbyBub3QgbmVlZCB0byBwb2ludCB0byBhIEZISVIgUkVTVGZ1bCBzZXJ2ZXIsIHRob3VnaCB0aGlzIGlzIHRoZSBwcmVmZXJyZWQgYXBwcm9hY2guIElmIHRoZSBVUkwgY29uZm9ybXMgdG8gdGhlIHN0cnVjdHVyZSBcIi9bdHlwZV0vW2lkXVwiIHRoZW4gaXQgc2hvdWxkIGJlIGFzc3VtZWQgdGhhdCB0aGUgcmVmZXJlbmNlIGlzIHRvIGEgRkhJUiBSRVNUZnVsIHNlcnZlci5cclxuICAgKi9cclxuICByZWZlcmVuY2U/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgdXNlZCB0byBpbmRpY2F0ZSB0aGUgdHlwZSBvZiAgdGhlIHRhcmdldCBvZiB0aGUgcmVmZXJlbmNlLiBUaGlzIG1heSBiZSB1c2VkIHdoaWNoIGV2ZXIgb2YgdGhlIG90aGVyIGVsZW1lbnRzIGFyZSBwb3B1bGF0ZWQgKG9yIG5vdCkuIEluIHNvbWUgY2FzZXMsIHRoZSB0eXBlIG9mIHRoZSB0YXJnZXQgbWF5IGJlIGRldGVybWluZWQgYnkgaW5zcGVjdGlvbiBvZiB0aGUgcmVmZXJlbmNlIChlLmcuIGEgUkVTVGZ1bCBVUkwpIG9yIGJ5IHJlc29sdmluZyB0aGUgdGFyZ2V0IG9mIHRoZSByZWZlcmVuY2U7IGlmIGJvdGggdGhlIHR5cGUgYW5kIGEgcmVmZXJlbmNlIGlzIHByb3ZpZGVkLCB0aGUgcmVmZXJlbmNlIFNIQUxMIHJlc29sdmUgdG8gYSByZXNvdXJjZSBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoYXQgc3BlY2lmaWVkLlxyXG4gICAqL1xyXG4gIHR5cGU/OiBmaGlyLkZoaXJVcml8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVuIGFuIGlkZW50aWZpZXIgaXMgcHJvdmlkZWQgaW4gcGxhY2Ugb2YgYSByZWZlcmVuY2UsIGFueSBzeXN0ZW0gcHJvY2Vzc2luZyB0aGUgcmVmZXJlbmNlIHdpbGwgb25seSBiZSBhYmxlIHRvIHJlc29sdmUgdGhlIGlkZW50aWZpZXIgdG8gYSByZWZlcmVuY2UgaWYgaXQgdW5kZXJzdGFuZHMgdGhlIGJ1c2luZXNzIGNvbnRleHQgaW4gd2hpY2ggdGhlIGlkZW50aWZpZXIgaXMgdXNlZC4gU29tZXRpbWVzIHRoaXMgaXMgZ2xvYmFsIChlLmcuIGEgbmF0aW9uYWwgaWRlbnRpZmllcikgYnV0IG9mdGVuIGl0IGlzIG5vdC4gRm9yIHRoaXMgcmVhc29uLCBub25lIG9mIHRoZSB1c2VmdWwgbWVjaGFuaXNtcyBkZXNjcmliZWQgZm9yIHdvcmtpbmcgd2l0aCByZWZlcmVuY2VzIChlLmcuIGNoYWluaW5nLCBpbmNsdWRlcykgYXJlIHBvc3NpYmxlLCBub3Igc2hvdWxkIHNlcnZlcnMgYmUgZXhwZWN0ZWQgdG8gYmUgYWJsZSByZXNvbHZlIHRoZSByZWZlcmVuY2UuIFNlcnZlcnMgbWF5IGFjY2VwdCBhbiBpZGVudGlmaWVyIGJhc2VkIHJlZmVyZW5jZSB1bnRvdWNoZWQsIHJlc29sdmUgaXQsIGFuZC9vciByZWplY3QgaXQgLSBzZWUgQ2FwYWJpbGl0eVN0YXRlbWVudC5yZXN0LnJlc291cmNlLnJlZmVyZW5jZVBvbGljeS4gXHJcbiAgICogV2hlbiBib3RoIGFuIGlkZW50aWZpZXIgYW5kIGEgbGl0ZXJhbCByZWZlcmVuY2UgYXJlIHByb3ZpZGVkLCB0aGUgbGl0ZXJhbCByZWZlcmVuY2UgaXMgcHJlZmVycmVkLiBBcHBsaWNhdGlvbnMgcHJvY2Vzc2luZyB0aGUgcmVzb3VyY2UgYXJlIGFsbG93ZWQgLSBidXQgbm90IHJlcXVpcmVkIC0gdG8gY2hlY2sgdGhhdCB0aGUgaWRlbnRpZmllciBtYXRjaGVzIHRoZSBsaXRlcmFsIHJlZmVyZW5jZVxyXG4gICAqIEFwcGxpY2F0aW9ucyBjb252ZXJ0aW5nIGEgbG9naWNhbCByZWZlcmVuY2UgdG8gYSBsaXRlcmFsIHJlZmVyZW5jZSBtYXkgY2hvb3NlIHRvIGxlYXZlIHRoZSBsb2dpY2FsIHJlZmVyZW5jZSBwcmVzZW50LCBvciByZW1vdmUgaXQuXHJcbiAgICogUmVmZXJlbmNlIGlzIGludGVuZGVkIHRvIHBvaW50IHRvIGEgc3RydWN0dXJlIHRoYXQgY2FuIHBvdGVudGlhbGx5IGJlIGV4cHJlc3NlZCBhcyBhIEZISVIgcmVzb3VyY2UsIHRob3VnaCB0aGVyZSBpcyBubyBuZWVkIGZvciBpdCB0byBleGlzdCBhcyBhbiBhY3R1YWwgRkhJUiByZXNvdXJjZSBpbnN0YW5jZSAtIGV4Y2VwdCBpbiBhcyBtdWNoIGFzIGFuIGFwcGxpY2F0aW9uIHdpc2hlcyB0byBhY3R1YWwgZmluZCB0aGUgdGFyZ2V0IG9mIHRoZSByZWZlcmVuY2UuIFRoZSBjb250ZW50IHJlZmVycmVkIHRvIGJlIHRoZSBpZGVudGlmaWVyIG11c3QgbWVldCB0aGUgbG9naWNhbCBjb25zdHJhaW50cyBpbXBsaWVkIGJ5IGFueSBsaW1pdGF0aW9ucyBvbiB3aGF0IHJlc291cmNlIHR5cGVzIGFyZSBwZXJtaXR0ZWQgZm9yIHRoZSByZWZlcmVuY2UuICBGb3IgZXhhbXBsZSwgaXQgd291bGQgbm90IGJlIGxlZ2l0aW1hdGUgdG8gc2VuZCB0aGUgaWRlbnRpZmllciBmb3IgYSBkcnVnIHByZXNjcmlwdGlvbiBpZiB0aGUgdHlwZSB3ZXJlIFJlZmVyZW5jZShPYnNlcnZhdGlvbnxEaWFnbm9zdGljUmVwb3J0KS4gIE9uZSBvZiB0aGUgdXNlLWNhc2VzIGZvciBSZWZlcmVuY2UuaWRlbnRpZmllciBpcyB0aGUgc2l0dWF0aW9uIHdoZXJlIG5vIEZISVIgcmVwcmVzZW50YXRpb24gZXhpc3RzICh3aGVyZSB0aGUgdHlwZSBpcyBSZWZlcmVuY2UgKEFueSkuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgZ2VuZXJhbGx5IG5vdCB0aGUgc2FtZSBhcyB0aGUgUmVzb3VyY2UudGV4dCBvZiB0aGUgcmVmZXJlbmNlZCByZXNvdXJjZS4gIFRoZSBwdXJwb3NlIGlzIHRvIGlkZW50aWZ5IHdoYXQncyBiZWluZyByZWZlcmVuY2VkLCBub3QgdG8gZnVsbHkgZGVzY3JpYmUgaXQuXHJcbiAgICovXHJcbiAgZGlzcGxheT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSByZWZlcmVuY2UgZnJvbSBvbmUgcmVzb3VyY2UgdG8gYW5vdGhlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWZlcmVuY2UgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1JlZmVyZW5jZSc7XHJcbiAgLyoqXHJcbiAgICogVXNpbmcgYWJzb2x1dGUgVVJMcyBwcm92aWRlcyBhIHN0YWJsZSBzY2FsYWJsZSBhcHByb2FjaCBzdWl0YWJsZSBmb3IgYSBjbG91ZC93ZWIgY29udGV4dCwgd2hpbGUgdXNpbmcgcmVsYXRpdmUvbG9naWNhbCByZWZlcmVuY2VzIHByb3ZpZGVzIGEgZmxleGlibGUgYXBwcm9hY2ggc3VpdGFibGUgZm9yIHVzZSB3aGVuIHRyYWRpbmcgYWNyb3NzIGNsb3NlZCBlY28tc3lzdGVtIGJvdW5kYXJpZXMuICAgQWJzb2x1dGUgVVJMcyBkbyBub3QgbmVlZCB0byBwb2ludCB0byBhIEZISVIgUkVTVGZ1bCBzZXJ2ZXIsIHRob3VnaCB0aGlzIGlzIHRoZSBwcmVmZXJyZWQgYXBwcm9hY2guIElmIHRoZSBVUkwgY29uZm9ybXMgdG8gdGhlIHN0cnVjdHVyZSBcIi9bdHlwZV0vW2lkXVwiIHRoZW4gaXQgc2hvdWxkIGJlIGFzc3VtZWQgdGhhdCB0aGUgcmVmZXJlbmNlIGlzIHRvIGEgRkhJUiBSRVNUZnVsIHNlcnZlci5cclxuICAgKi9cclxuICBwdWJsaWMgcmVmZXJlbmNlPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgdXNlZCB0byBpbmRpY2F0ZSB0aGUgdHlwZSBvZiAgdGhlIHRhcmdldCBvZiB0aGUgcmVmZXJlbmNlLiBUaGlzIG1heSBiZSB1c2VkIHdoaWNoIGV2ZXIgb2YgdGhlIG90aGVyIGVsZW1lbnRzIGFyZSBwb3B1bGF0ZWQgKG9yIG5vdCkuIEluIHNvbWUgY2FzZXMsIHRoZSB0eXBlIG9mIHRoZSB0YXJnZXQgbWF5IGJlIGRldGVybWluZWQgYnkgaW5zcGVjdGlvbiBvZiB0aGUgcmVmZXJlbmNlIChlLmcuIGEgUkVTVGZ1bCBVUkwpIG9yIGJ5IHJlc29sdmluZyB0aGUgdGFyZ2V0IG9mIHRoZSByZWZlcmVuY2U7IGlmIGJvdGggdGhlIHR5cGUgYW5kIGEgcmVmZXJlbmNlIGlzIHByb3ZpZGVkLCB0aGUgcmVmZXJlbmNlIFNIQUxMIHJlc29sdmUgdG8gYSByZXNvdXJjZSBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoYXQgc3BlY2lmaWVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0eXBlPzogZmhpci5GaGlyVXJpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVuIGFuIGlkZW50aWZpZXIgaXMgcHJvdmlkZWQgaW4gcGxhY2Ugb2YgYSByZWZlcmVuY2UsIGFueSBzeXN0ZW0gcHJvY2Vzc2luZyB0aGUgcmVmZXJlbmNlIHdpbGwgb25seSBiZSBhYmxlIHRvIHJlc29sdmUgdGhlIGlkZW50aWZpZXIgdG8gYSByZWZlcmVuY2UgaWYgaXQgdW5kZXJzdGFuZHMgdGhlIGJ1c2luZXNzIGNvbnRleHQgaW4gd2hpY2ggdGhlIGlkZW50aWZpZXIgaXMgdXNlZC4gU29tZXRpbWVzIHRoaXMgaXMgZ2xvYmFsIChlLmcuIGEgbmF0aW9uYWwgaWRlbnRpZmllcikgYnV0IG9mdGVuIGl0IGlzIG5vdC4gRm9yIHRoaXMgcmVhc29uLCBub25lIG9mIHRoZSB1c2VmdWwgbWVjaGFuaXNtcyBkZXNjcmliZWQgZm9yIHdvcmtpbmcgd2l0aCByZWZlcmVuY2VzIChlLmcuIGNoYWluaW5nLCBpbmNsdWRlcykgYXJlIHBvc3NpYmxlLCBub3Igc2hvdWxkIHNlcnZlcnMgYmUgZXhwZWN0ZWQgdG8gYmUgYWJsZSByZXNvbHZlIHRoZSByZWZlcmVuY2UuIFNlcnZlcnMgbWF5IGFjY2VwdCBhbiBpZGVudGlmaWVyIGJhc2VkIHJlZmVyZW5jZSB1bnRvdWNoZWQsIHJlc29sdmUgaXQsIGFuZC9vciByZWplY3QgaXQgLSBzZWUgQ2FwYWJpbGl0eVN0YXRlbWVudC5yZXN0LnJlc291cmNlLnJlZmVyZW5jZVBvbGljeS4gXHJcbiAgICogV2hlbiBib3RoIGFuIGlkZW50aWZpZXIgYW5kIGEgbGl0ZXJhbCByZWZlcmVuY2UgYXJlIHByb3ZpZGVkLCB0aGUgbGl0ZXJhbCByZWZlcmVuY2UgaXMgcHJlZmVycmVkLiBBcHBsaWNhdGlvbnMgcHJvY2Vzc2luZyB0aGUgcmVzb3VyY2UgYXJlIGFsbG93ZWQgLSBidXQgbm90IHJlcXVpcmVkIC0gdG8gY2hlY2sgdGhhdCB0aGUgaWRlbnRpZmllciBtYXRjaGVzIHRoZSBsaXRlcmFsIHJlZmVyZW5jZVxyXG4gICAqIEFwcGxpY2F0aW9ucyBjb252ZXJ0aW5nIGEgbG9naWNhbCByZWZlcmVuY2UgdG8gYSBsaXRlcmFsIHJlZmVyZW5jZSBtYXkgY2hvb3NlIHRvIGxlYXZlIHRoZSBsb2dpY2FsIHJlZmVyZW5jZSBwcmVzZW50LCBvciByZW1vdmUgaXQuXHJcbiAgICogUmVmZXJlbmNlIGlzIGludGVuZGVkIHRvIHBvaW50IHRvIGEgc3RydWN0dXJlIHRoYXQgY2FuIHBvdGVudGlhbGx5IGJlIGV4cHJlc3NlZCBhcyBhIEZISVIgcmVzb3VyY2UsIHRob3VnaCB0aGVyZSBpcyBubyBuZWVkIGZvciBpdCB0byBleGlzdCBhcyBhbiBhY3R1YWwgRkhJUiByZXNvdXJjZSBpbnN0YW5jZSAtIGV4Y2VwdCBpbiBhcyBtdWNoIGFzIGFuIGFwcGxpY2F0aW9uIHdpc2hlcyB0byBhY3R1YWwgZmluZCB0aGUgdGFyZ2V0IG9mIHRoZSByZWZlcmVuY2UuIFRoZSBjb250ZW50IHJlZmVycmVkIHRvIGJlIHRoZSBpZGVudGlmaWVyIG11c3QgbWVldCB0aGUgbG9naWNhbCBjb25zdHJhaW50cyBpbXBsaWVkIGJ5IGFueSBsaW1pdGF0aW9ucyBvbiB3aGF0IHJlc291cmNlIHR5cGVzIGFyZSBwZXJtaXR0ZWQgZm9yIHRoZSByZWZlcmVuY2UuICBGb3IgZXhhbXBsZSwgaXQgd291bGQgbm90IGJlIGxlZ2l0aW1hdGUgdG8gc2VuZCB0aGUgaWRlbnRpZmllciBmb3IgYSBkcnVnIHByZXNjcmlwdGlvbiBpZiB0aGUgdHlwZSB3ZXJlIFJlZmVyZW5jZShPYnNlcnZhdGlvbnxEaWFnbm9zdGljUmVwb3J0KS4gIE9uZSBvZiB0aGUgdXNlLWNhc2VzIGZvciBSZWZlcmVuY2UuaWRlbnRpZmllciBpcyB0aGUgc2l0dWF0aW9uIHdoZXJlIG5vIEZISVIgcmVwcmVzZW50YXRpb24gZXhpc3RzICh3aGVyZSB0aGUgdHlwZSBpcyBSZWZlcmVuY2UgKEFueSkuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgZ2VuZXJhbGx5IG5vdCB0aGUgc2FtZSBhcyB0aGUgUmVzb3VyY2UudGV4dCBvZiB0aGUgcmVmZXJlbmNlZCByZXNvdXJjZS4gIFRoZSBwdXJwb3NlIGlzIHRvIGlkZW50aWZ5IHdoYXQncyBiZWluZyByZWZlcmVuY2VkLCBub3QgdG8gZnVsbHkgZGVzY3JpYmUgaXQuXHJcbiAgICovXHJcbiAgcHVibGljIGRpc3BsYXk/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFJlZmVyZW5jZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFJlZmVyZW5jZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydyZWZlcmVuY2UnXSkgeyB0aGlzLnJlZmVyZW5jZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UucmVmZXJlbmNlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyVXJpKHt2YWx1ZTogc291cmNlLnR5cGV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IG5ldyBmaGlyLklkZW50aWZpZXIoc291cmNlLmlkZW50aWZpZXIpOyB9XHJcbiAgICBpZiAoc291cmNlWydkaXNwbGF5J10pIHsgdGhpcy5kaXNwbGF5ID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5kaXNwbGF5fSk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5zaWJsZS1ib3VuZCBWYWx1ZSBTZXQgZm9yIHR5cGUgKFJlZmVyZW5jZS50eXBlKVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHR5cGVFeHRlbnNpYmxlQ29kaW5ncygpIHtcclxuICAgIHJldHVybiBSZXNvdXJjZVR5cGVzQ29kaW5ncztcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKCk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oKTtcclxuICAgIGlmICh0aGlzW1wicmVmZXJlbmNlXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMucmVmZXJlbmNlLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICBpZiAodGhpc1tcInR5cGVcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy50eXBlLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICBpZiAodGhpc1tcImlkZW50aWZpZXJcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5pZGVudGlmaWVyLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICBpZiAodGhpc1tcImRpc3BsYXlcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5kaXNwbGF5LmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgcmVmZXJlbmNlIGZyb20gYW4gZXhpc3RpbmcgcmVzb3VyY2VcclxuICAgKi9cclxuICAgc3RhdGljIGZyb21SZXNvdXJjZShzb3VyY2U6Zmhpci5GaGlyUmVzb3VyY2UsIGJhc2VVcmw6c3RyaW5nPScnKTpSZWZlcmVuY2Uge1xyXG4gICAgaWYgKGJhc2VVcmwuZW5kc1dpdGgoJy8nKSkge1xyXG4gICAgICByZXR1cm4gbmV3IFJlZmVyZW5jZSh7XHJcbiAgICAgICAgdHlwZTogc291cmNlLnJlc291cmNlVHlwZSA/PyB1bmRlZmluZWQsXHJcbiAgICAgICAgcmVmZXJlbmNlOiBiYXNlVXJsICsgc291cmNlLnJlc291cmNlVHlwZSArICcvJyArIHNvdXJjZS5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBSZWZlcmVuY2Uoe1xyXG4gICAgICB0eXBlOiBzb3VyY2UucmVzb3VyY2VUeXBlID8/IHVuZGVmaW5lZCxcclxuICAgICAgcmVmZXJlbmNlOiAoKGJhc2VVcmwubGVuZ3RoID4gMCkgPyAoYmFzZVVybCArICcvJykgOiAnJykgKyBzb3VyY2UucmVzb3VyY2VUeXBlICsgJy8nICsgc291cmNlLmlkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==