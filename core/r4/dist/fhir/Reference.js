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
        if (source['_reference']) {
            if (this.reference) {
                this.reference.addExtendedProperties(source._reference);
            }
            else {
                this.reference = new fhir.FhirString(source._reference);
            }
        }
        if (source['type']) {
            this.type = new fhir.FhirUri({ value: source.type });
        }
        if (source['_type']) {
            if (this.type) {
                this.type.addExtendedProperties(source._type);
            }
            else {
                this.type = new fhir.FhirUri(source._type);
            }
        }
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier);
        }
        if (source['display']) {
            this.display = new fhir.FhirString({ value: source.display });
        }
        if (source['_display']) {
            if (this.display) {
                this.display.addExtendedProperties(source._display);
            }
            else {
                this.display = new fhir.FhirString(source._display);
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVmZXJlbmNlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9SZWZlcmVuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBRW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsb0JBQW9CLEdBQTJCLE1BQU0sMENBQTBDLENBQUM7QUF3Q3pHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFNBQVUsU0FBUSxJQUFJLENBQUMsV0FBVztJQXdCN0M7O09BRUc7SUFDSCxZQUFZLFNBQWdDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3RGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQzdGLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxVQUFXLENBQUMsQ0FBQzthQUFFO2lCQUM1RTtnQkFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBMEMsQ0FBQyxDQUFDO2FBQUU7U0FDbEc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1NBQUU7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TUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUU7U0FDakcsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUE5RUQ7O0dBRUc7QUFDNkIsdUJBQWEsR0FBVSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IFJlZmVyZW5jZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUmVzb3VyY2VUeXBlc0NvZGluZ3MsIFJlc291cmNlVHlwZXNDb2RpbmdUeXBlLH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9SZXNvdXJjZVR5cGVzQ29kaW5ncy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUmVzb3VyY2VUeXBlc0NvZGVzLCAgUmVzb3VyY2VUeXBlc0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9SZXNvdXJjZVR5cGVzQ29kZXMuanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgUmVmZXJlbmNlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFJlZmVyZW5jZUFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogVXNpbmcgYWJzb2x1dGUgVVJMcyBwcm92aWRlcyBhIHN0YWJsZSBzY2FsYWJsZSBhcHByb2FjaCBzdWl0YWJsZSBmb3IgYSBjbG91ZC93ZWIgY29udGV4dCwgd2hpbGUgdXNpbmcgcmVsYXRpdmUvbG9naWNhbCByZWZlcmVuY2VzIHByb3ZpZGVzIGEgZmxleGlibGUgYXBwcm9hY2ggc3VpdGFibGUgZm9yIHVzZSB3aGVuIHRyYWRpbmcgYWNyb3NzIGNsb3NlZCBlY28tc3lzdGVtIGJvdW5kYXJpZXMuICAgQWJzb2x1dGUgVVJMcyBkbyBub3QgbmVlZCB0byBwb2ludCB0byBhIEZISVIgUkVTVGZ1bCBzZXJ2ZXIsIHRob3VnaCB0aGlzIGlzIHRoZSBwcmVmZXJyZWQgYXBwcm9hY2guIElmIHRoZSBVUkwgY29uZm9ybXMgdG8gdGhlIHN0cnVjdHVyZSBcIi9bdHlwZV0vW2lkXVwiIHRoZW4gaXQgc2hvdWxkIGJlIGFzc3VtZWQgdGhhdCB0aGUgcmVmZXJlbmNlIGlzIHRvIGEgRkhJUiBSRVNUZnVsIHNlcnZlci5cclxuICAgKi9cclxuICByZWZlcmVuY2U/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUmVmZXJlbmNlLnJlZmVyZW5jZVxyXG4gICAqL1xyXG4gIF9yZWZlcmVuY2U/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIGluZGljYXRlIHRoZSB0eXBlIG9mICB0aGUgdGFyZ2V0IG9mIHRoZSByZWZlcmVuY2UuIFRoaXMgbWF5IGJlIHVzZWQgd2hpY2ggZXZlciBvZiB0aGUgb3RoZXIgZWxlbWVudHMgYXJlIHBvcHVsYXRlZCAob3Igbm90KS4gSW4gc29tZSBjYXNlcywgdGhlIHR5cGUgb2YgdGhlIHRhcmdldCBtYXkgYmUgZGV0ZXJtaW5lZCBieSBpbnNwZWN0aW9uIG9mIHRoZSByZWZlcmVuY2UgKGUuZy4gYSBSRVNUZnVsIFVSTCkgb3IgYnkgcmVzb2x2aW5nIHRoZSB0YXJnZXQgb2YgdGhlIHJlZmVyZW5jZTsgaWYgYm90aCB0aGUgdHlwZSBhbmQgYSByZWZlcmVuY2UgaXMgcHJvdmlkZWQsIHRoZSByZWZlcmVuY2UgU0hBTEwgcmVzb2x2ZSB0byBhIHJlc291cmNlIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhhdCBzcGVjaWZpZWQuXHJcbiAgICovXHJcbiAgdHlwZT86IGZoaXIuRmhpclVyaXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBSZWZlcmVuY2UudHlwZVxyXG4gICAqL1xyXG4gIF90eXBlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBXaGVuIGFuIGlkZW50aWZpZXIgaXMgcHJvdmlkZWQgaW4gcGxhY2Ugb2YgYSByZWZlcmVuY2UsIGFueSBzeXN0ZW0gcHJvY2Vzc2luZyB0aGUgcmVmZXJlbmNlIHdpbGwgb25seSBiZSBhYmxlIHRvIHJlc29sdmUgdGhlIGlkZW50aWZpZXIgdG8gYSByZWZlcmVuY2UgaWYgaXQgdW5kZXJzdGFuZHMgdGhlIGJ1c2luZXNzIGNvbnRleHQgaW4gd2hpY2ggdGhlIGlkZW50aWZpZXIgaXMgdXNlZC4gU29tZXRpbWVzIHRoaXMgaXMgZ2xvYmFsIChlLmcuIGEgbmF0aW9uYWwgaWRlbnRpZmllcikgYnV0IG9mdGVuIGl0IGlzIG5vdC4gRm9yIHRoaXMgcmVhc29uLCBub25lIG9mIHRoZSB1c2VmdWwgbWVjaGFuaXNtcyBkZXNjcmliZWQgZm9yIHdvcmtpbmcgd2l0aCByZWZlcmVuY2VzIChlLmcuIGNoYWluaW5nLCBpbmNsdWRlcykgYXJlIHBvc3NpYmxlLCBub3Igc2hvdWxkIHNlcnZlcnMgYmUgZXhwZWN0ZWQgdG8gYmUgYWJsZSByZXNvbHZlIHRoZSByZWZlcmVuY2UuIFNlcnZlcnMgbWF5IGFjY2VwdCBhbiBpZGVudGlmaWVyIGJhc2VkIHJlZmVyZW5jZSB1bnRvdWNoZWQsIHJlc29sdmUgaXQsIGFuZC9vciByZWplY3QgaXQgLSBzZWUgQ2FwYWJpbGl0eVN0YXRlbWVudC5yZXN0LnJlc291cmNlLnJlZmVyZW5jZVBvbGljeS4gXHJcbiAgICogV2hlbiBib3RoIGFuIGlkZW50aWZpZXIgYW5kIGEgbGl0ZXJhbCByZWZlcmVuY2UgYXJlIHByb3ZpZGVkLCB0aGUgbGl0ZXJhbCByZWZlcmVuY2UgaXMgcHJlZmVycmVkLiBBcHBsaWNhdGlvbnMgcHJvY2Vzc2luZyB0aGUgcmVzb3VyY2UgYXJlIGFsbG93ZWQgLSBidXQgbm90IHJlcXVpcmVkIC0gdG8gY2hlY2sgdGhhdCB0aGUgaWRlbnRpZmllciBtYXRjaGVzIHRoZSBsaXRlcmFsIHJlZmVyZW5jZVxyXG4gICAqIEFwcGxpY2F0aW9ucyBjb252ZXJ0aW5nIGEgbG9naWNhbCByZWZlcmVuY2UgdG8gYSBsaXRlcmFsIHJlZmVyZW5jZSBtYXkgY2hvb3NlIHRvIGxlYXZlIHRoZSBsb2dpY2FsIHJlZmVyZW5jZSBwcmVzZW50LCBvciByZW1vdmUgaXQuXHJcbiAgICogUmVmZXJlbmNlIGlzIGludGVuZGVkIHRvIHBvaW50IHRvIGEgc3RydWN0dXJlIHRoYXQgY2FuIHBvdGVudGlhbGx5IGJlIGV4cHJlc3NlZCBhcyBhIEZISVIgcmVzb3VyY2UsIHRob3VnaCB0aGVyZSBpcyBubyBuZWVkIGZvciBpdCB0byBleGlzdCBhcyBhbiBhY3R1YWwgRkhJUiByZXNvdXJjZSBpbnN0YW5jZSAtIGV4Y2VwdCBpbiBhcyBtdWNoIGFzIGFuIGFwcGxpY2F0aW9uIHdpc2hlcyB0byBhY3R1YWwgZmluZCB0aGUgdGFyZ2V0IG9mIHRoZSByZWZlcmVuY2UuIFRoZSBjb250ZW50IHJlZmVycmVkIHRvIGJlIHRoZSBpZGVudGlmaWVyIG11c3QgbWVldCB0aGUgbG9naWNhbCBjb25zdHJhaW50cyBpbXBsaWVkIGJ5IGFueSBsaW1pdGF0aW9ucyBvbiB3aGF0IHJlc291cmNlIHR5cGVzIGFyZSBwZXJtaXR0ZWQgZm9yIHRoZSByZWZlcmVuY2UuICBGb3IgZXhhbXBsZSwgaXQgd291bGQgbm90IGJlIGxlZ2l0aW1hdGUgdG8gc2VuZCB0aGUgaWRlbnRpZmllciBmb3IgYSBkcnVnIHByZXNjcmlwdGlvbiBpZiB0aGUgdHlwZSB3ZXJlIFJlZmVyZW5jZShPYnNlcnZhdGlvbnxEaWFnbm9zdGljUmVwb3J0KS4gIE9uZSBvZiB0aGUgdXNlLWNhc2VzIGZvciBSZWZlcmVuY2UuaWRlbnRpZmllciBpcyB0aGUgc2l0dWF0aW9uIHdoZXJlIG5vIEZISVIgcmVwcmVzZW50YXRpb24gZXhpc3RzICh3aGVyZSB0aGUgdHlwZSBpcyBSZWZlcmVuY2UgKEFueSkuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgZ2VuZXJhbGx5IG5vdCB0aGUgc2FtZSBhcyB0aGUgUmVzb3VyY2UudGV4dCBvZiB0aGUgcmVmZXJlbmNlZCByZXNvdXJjZS4gIFRoZSBwdXJwb3NlIGlzIHRvIGlkZW50aWZ5IHdoYXQncyBiZWluZyByZWZlcmVuY2VkLCBub3QgdG8gZnVsbHkgZGVzY3JpYmUgaXQuXHJcbiAgICovXHJcbiAgZGlzcGxheT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBSZWZlcmVuY2UuZGlzcGxheVxyXG4gICAqL1xyXG4gIF9kaXNwbGF5PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgcmVmZXJlbmNlIGZyb20gb25lIHJlc291cmNlIHRvIGFub3RoZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVmZXJlbmNlIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdSZWZlcmVuY2UnO1xyXG4gIC8qKlxyXG4gICAqIFVzaW5nIGFic29sdXRlIFVSTHMgcHJvdmlkZXMgYSBzdGFibGUgc2NhbGFibGUgYXBwcm9hY2ggc3VpdGFibGUgZm9yIGEgY2xvdWQvd2ViIGNvbnRleHQsIHdoaWxlIHVzaW5nIHJlbGF0aXZlL2xvZ2ljYWwgcmVmZXJlbmNlcyBwcm92aWRlcyBhIGZsZXhpYmxlIGFwcHJvYWNoIHN1aXRhYmxlIGZvciB1c2Ugd2hlbiB0cmFkaW5nIGFjcm9zcyBjbG9zZWQgZWNvLXN5c3RlbSBib3VuZGFyaWVzLiAgIEFic29sdXRlIFVSTHMgZG8gbm90IG5lZWQgdG8gcG9pbnQgdG8gYSBGSElSIFJFU1RmdWwgc2VydmVyLCB0aG91Z2ggdGhpcyBpcyB0aGUgcHJlZmVycmVkIGFwcHJvYWNoLiBJZiB0aGUgVVJMIGNvbmZvcm1zIHRvIHRoZSBzdHJ1Y3R1cmUgXCIvW3R5cGVdL1tpZF1cIiB0aGVuIGl0IHNob3VsZCBiZSBhc3N1bWVkIHRoYXQgdGhlIHJlZmVyZW5jZSBpcyB0byBhIEZISVIgUkVTVGZ1bCBzZXJ2ZXIuXHJcbiAgICovXHJcbiAgcHVibGljIHJlZmVyZW5jZT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIHVzZWQgdG8gaW5kaWNhdGUgdGhlIHR5cGUgb2YgIHRoZSB0YXJnZXQgb2YgdGhlIHJlZmVyZW5jZS4gVGhpcyBtYXkgYmUgdXNlZCB3aGljaCBldmVyIG9mIHRoZSBvdGhlciBlbGVtZW50cyBhcmUgcG9wdWxhdGVkIChvciBub3QpLiBJbiBzb21lIGNhc2VzLCB0aGUgdHlwZSBvZiB0aGUgdGFyZ2V0IG1heSBiZSBkZXRlcm1pbmVkIGJ5IGluc3BlY3Rpb24gb2YgdGhlIHJlZmVyZW5jZSAoZS5nLiBhIFJFU1RmdWwgVVJMKSBvciBieSByZXNvbHZpbmcgdGhlIHRhcmdldCBvZiB0aGUgcmVmZXJlbmNlOyBpZiBib3RoIHRoZSB0eXBlIGFuZCBhIHJlZmVyZW5jZSBpcyBwcm92aWRlZCwgdGhlIHJlZmVyZW5jZSBTSEFMTCByZXNvbHZlIHRvIGEgcmVzb3VyY2Ugb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGF0IHNwZWNpZmllZC5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZT86IGZoaXIuRmhpclVyaXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlbiBhbiBpZGVudGlmaWVyIGlzIHByb3ZpZGVkIGluIHBsYWNlIG9mIGEgcmVmZXJlbmNlLCBhbnkgc3lzdGVtIHByb2Nlc3NpbmcgdGhlIHJlZmVyZW5jZSB3aWxsIG9ubHkgYmUgYWJsZSB0byByZXNvbHZlIHRoZSBpZGVudGlmaWVyIHRvIGEgcmVmZXJlbmNlIGlmIGl0IHVuZGVyc3RhbmRzIHRoZSBidXNpbmVzcyBjb250ZXh0IGluIHdoaWNoIHRoZSBpZGVudGlmaWVyIGlzIHVzZWQuIFNvbWV0aW1lcyB0aGlzIGlzIGdsb2JhbCAoZS5nLiBhIG5hdGlvbmFsIGlkZW50aWZpZXIpIGJ1dCBvZnRlbiBpdCBpcyBub3QuIEZvciB0aGlzIHJlYXNvbiwgbm9uZSBvZiB0aGUgdXNlZnVsIG1lY2hhbmlzbXMgZGVzY3JpYmVkIGZvciB3b3JraW5nIHdpdGggcmVmZXJlbmNlcyAoZS5nLiBjaGFpbmluZywgaW5jbHVkZXMpIGFyZSBwb3NzaWJsZSwgbm9yIHNob3VsZCBzZXJ2ZXJzIGJlIGV4cGVjdGVkIHRvIGJlIGFibGUgcmVzb2x2ZSB0aGUgcmVmZXJlbmNlLiBTZXJ2ZXJzIG1heSBhY2NlcHQgYW4gaWRlbnRpZmllciBiYXNlZCByZWZlcmVuY2UgdW50b3VjaGVkLCByZXNvbHZlIGl0LCBhbmQvb3IgcmVqZWN0IGl0IC0gc2VlIENhcGFiaWxpdHlTdGF0ZW1lbnQucmVzdC5yZXNvdXJjZS5yZWZlcmVuY2VQb2xpY3kuIFxyXG4gICAqIFdoZW4gYm90aCBhbiBpZGVudGlmaWVyIGFuZCBhIGxpdGVyYWwgcmVmZXJlbmNlIGFyZSBwcm92aWRlZCwgdGhlIGxpdGVyYWwgcmVmZXJlbmNlIGlzIHByZWZlcnJlZC4gQXBwbGljYXRpb25zIHByb2Nlc3NpbmcgdGhlIHJlc291cmNlIGFyZSBhbGxvd2VkIC0gYnV0IG5vdCByZXF1aXJlZCAtIHRvIGNoZWNrIHRoYXQgdGhlIGlkZW50aWZpZXIgbWF0Y2hlcyB0aGUgbGl0ZXJhbCByZWZlcmVuY2VcclxuICAgKiBBcHBsaWNhdGlvbnMgY29udmVydGluZyBhIGxvZ2ljYWwgcmVmZXJlbmNlIHRvIGEgbGl0ZXJhbCByZWZlcmVuY2UgbWF5IGNob29zZSB0byBsZWF2ZSB0aGUgbG9naWNhbCByZWZlcmVuY2UgcHJlc2VudCwgb3IgcmVtb3ZlIGl0LlxyXG4gICAqIFJlZmVyZW5jZSBpcyBpbnRlbmRlZCB0byBwb2ludCB0byBhIHN0cnVjdHVyZSB0aGF0IGNhbiBwb3RlbnRpYWxseSBiZSBleHByZXNzZWQgYXMgYSBGSElSIHJlc291cmNlLCB0aG91Z2ggdGhlcmUgaXMgbm8gbmVlZCBmb3IgaXQgdG8gZXhpc3QgYXMgYW4gYWN0dWFsIEZISVIgcmVzb3VyY2UgaW5zdGFuY2UgLSBleGNlcHQgaW4gYXMgbXVjaCBhcyBhbiBhcHBsaWNhdGlvbiB3aXNoZXMgdG8gYWN0dWFsIGZpbmQgdGhlIHRhcmdldCBvZiB0aGUgcmVmZXJlbmNlLiBUaGUgY29udGVudCByZWZlcnJlZCB0byBiZSB0aGUgaWRlbnRpZmllciBtdXN0IG1lZXQgdGhlIGxvZ2ljYWwgY29uc3RyYWludHMgaW1wbGllZCBieSBhbnkgbGltaXRhdGlvbnMgb24gd2hhdCByZXNvdXJjZSB0eXBlcyBhcmUgcGVybWl0dGVkIGZvciB0aGUgcmVmZXJlbmNlLiAgRm9yIGV4YW1wbGUsIGl0IHdvdWxkIG5vdCBiZSBsZWdpdGltYXRlIHRvIHNlbmQgdGhlIGlkZW50aWZpZXIgZm9yIGEgZHJ1ZyBwcmVzY3JpcHRpb24gaWYgdGhlIHR5cGUgd2VyZSBSZWZlcmVuY2UoT2JzZXJ2YXRpb258RGlhZ25vc3RpY1JlcG9ydCkuICBPbmUgb2YgdGhlIHVzZS1jYXNlcyBmb3IgUmVmZXJlbmNlLmlkZW50aWZpZXIgaXMgdGhlIHNpdHVhdGlvbiB3aGVyZSBubyBGSElSIHJlcHJlc2VudGF0aW9uIGV4aXN0cyAod2hlcmUgdGhlIHR5cGUgaXMgUmVmZXJlbmNlIChBbnkpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGlzIGdlbmVyYWxseSBub3QgdGhlIHNhbWUgYXMgdGhlIFJlc291cmNlLnRleHQgb2YgdGhlIHJlZmVyZW5jZWQgcmVzb3VyY2UuICBUaGUgcHVycG9zZSBpcyB0byBpZGVudGlmeSB3aGF0J3MgYmVpbmcgcmVmZXJlbmNlZCwgbm90IHRvIGZ1bGx5IGRlc2NyaWJlIGl0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkaXNwbGF5PzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBSZWZlcmVuY2UgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxSZWZlcmVuY2VBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsncmVmZXJlbmNlJ10pIHsgdGhpcy5yZWZlcmVuY2UgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnJlZmVyZW5jZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfcmVmZXJlbmNlJ10pIHtcclxuICAgICAgaWYgKHRoaXMucmVmZXJlbmNlKSB7IHRoaXMucmVmZXJlbmNlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3JlZmVyZW5jZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnJlZmVyZW5jZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9yZWZlcmVuY2UgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyVXJpKHt2YWx1ZTogc291cmNlLnR5cGV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3R5cGUnXSkge1xyXG4gICAgICBpZiAodGhpcy50eXBlKSB7IHRoaXMudHlwZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl90eXBlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudHlwZSA9IG5ldyBmaGlyLkZoaXJVcmkoc291cmNlLl90eXBlIGFzIFBhcnRpYWw8Zmhpci5GaGlyVXJpQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gbmV3IGZoaXIuSWRlbnRpZmllcihzb3VyY2UuaWRlbnRpZmllcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2Rpc3BsYXknXSkgeyB0aGlzLmRpc3BsYXkgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmRpc3BsYXl9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Rpc3BsYXknXSkge1xyXG4gICAgICBpZiAodGhpcy5kaXNwbGF5KSB7IHRoaXMuZGlzcGxheS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kaXNwbGF5ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZGlzcGxheSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9kaXNwbGF5IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEV4dGVuc2libGUtYm91bmQgVmFsdWUgU2V0IGZvciB0eXBlIChSZWZlcmVuY2UudHlwZSlcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGdldCB0eXBlRXh0ZW5zaWJsZUNvZGluZ3MoKTpSZXNvdXJjZVR5cGVzQ29kaW5nVHlwZSB7XHJcbiAgICByZXR1cm4gUmVzb3VyY2VUeXBlc0NvZGluZ3M7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbigpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKCk7XHJcbiAgICBpZiAodGhpc1tcInJlZmVyZW5jZVwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLnJlZmVyZW5jZS5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJ0eXBlXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMudHlwZS5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJpZGVudGlmaWVyXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuaWRlbnRpZmllci5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJkaXNwbGF5XCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuZGlzcGxheS5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIHJlZmVyZW5jZSBmcm9tIGFuIGV4aXN0aW5nIHJlc291cmNlXHJcbiAgICovXHJcbiAgIHN0YXRpYyBmcm9tUmVzb3VyY2Uoc291cmNlOmZoaXIuRmhpclJlc291cmNlLCBiYXNlVXJsOnN0cmluZz0nJyk6UmVmZXJlbmNlIHtcclxuICAgIGlmIChiYXNlVXJsLmVuZHNXaXRoKCcvJykpIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZWZlcmVuY2Uoe1xyXG4gICAgICAgIHR5cGU6IHNvdXJjZS5yZXNvdXJjZVR5cGUgPz8gdW5kZWZpbmVkLFxyXG4gICAgICAgIHJlZmVyZW5jZTogYmFzZVVybCArIHNvdXJjZS5yZXNvdXJjZVR5cGUgKyAnLycgKyBzb3VyY2UuaWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUmVmZXJlbmNlKHtcclxuICAgICAgdHlwZTogc291cmNlLnJlc291cmNlVHlwZSA/PyB1bmRlZmluZWQsXHJcbiAgICAgIHJlZmVyZW5jZTogKChiYXNlVXJsLmxlbmd0aCA+IDApID8gKGJhc2VVcmwgKyAnLycpIDogJycpICsgc291cmNlLnJlc291cmNlVHlwZSArICcvJyArIHNvdXJjZS5pZCxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=