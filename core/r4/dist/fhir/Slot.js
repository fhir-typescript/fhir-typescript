// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Slot
import * as fhir from '../fhir.js';
// @ts-ignore
import { SlotstatusVsValidation } from '../fhirValueSets/SlotstatusVsValidation.js';
/**
 * A slot of time on a schedule that may be available for booking appointments.
 */
export class Slot extends fhir.DomainResource {
    /**
     * Default constructor for Slot - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Slot';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['serviceCategory']) {
            this.serviceCategory = source.serviceCategory.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.serviceCategory = [];
        }
        if (source['serviceType']) {
            this.serviceType = source.serviceType.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.serviceType = [];
        }
        if (source['specialty']) {
            this.specialty = source.specialty.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.specialty = [];
        }
        if (source['appointmentType']) {
            this.appointmentType = new fhir.CodeableConcept(source.appointmentType);
        }
        if (source['schedule']) {
            this.schedule = new fhir.Reference(source.schedule);
        }
        else {
            this.schedule = null;
        }
        if (source['status']) {
            this.status = new fhir.FhirCode({ value: source.status });
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status);
            }
        }
        if (source['start']) {
            this.start = new fhir.FhirInstant({ value: source.start });
        }
        else {
            this.start = null;
        }
        if (source['_start']) {
            if (this.start) {
                this.start.addExtendedProperties(source._start);
            }
            else {
                this.start = new fhir.FhirInstant(source._start);
            }
        }
        if (source['end']) {
            this.end = new fhir.FhirInstant({ value: source.end });
        }
        else {
            this.end = null;
        }
        if (source['_end']) {
            if (this.end) {
                this.end.addExtendedProperties(source._end);
            }
            else {
                this.end = new fhir.FhirInstant(source._end);
            }
        }
        if (source['overbooked']) {
            this.overbooked = new fhir.FhirBoolean({ value: source.overbooked });
        }
        if (source['_overbooked']) {
            if (this.overbooked) {
                this.overbooked.addExtendedProperties(source._overbooked);
            }
            else {
                this.overbooked = new fhir.FhirBoolean(source._overbooked);
            }
        }
        if (source['comment']) {
            this.comment = new fhir.FhirString({ value: source.comment });
        }
        if (source['_comment']) {
            if (this.comment) {
                this.comment.addExtendedProperties(source._comment);
            }
            else {
                this.comment = new fhir.FhirString(source._comment);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'Slot';
        }
        this.vReqS('resourceType', expression);
        this.vOptA('identifier', expression);
        this.vOptA('serviceCategory', expression);
        this.vOptA('serviceType', expression);
        this.vOptA('specialty', expression);
        this.vOptS('appointmentType', expression);
        this.vReqS('schedule', expression);
        this.vReqSV('status', expression, 'Slotstatus', SlotstatusVsValidation, 'r');
        this.vReqS('start', expression);
        this.vReqS('end', expression);
        this.vOptS('overbooked', expression);
        this.vOptS('comment', expression);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Slot._fts_dataType = 'Slot';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xvdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvU2xvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxzQkFBc0I7QUFFdEIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFvQm5DLGFBQWE7QUFDYixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQTJFcEY7O0dBRUc7QUFDSCxNQUFNLE9BQU8sSUFBSyxTQUFRLElBQUksQ0FBQyxjQUFjO0lBcUQzQzs7T0FFRztJQUNILFlBQVksU0FBMkIsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDakYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDaEc7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3BIO1lBQUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUNuQyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUFFLElBQUksQ0FB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QyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRSxJQUFJLFVBQVUsS0FBSyxFQUFFLEVBQUU7WUFBRSxVQUFVLEdBQUcsTUFBTSxDQUFBO1NBQUU7UUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBQyxVQUFVLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBQyxVQUFVLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBQyxVQUFVLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsc0JBQXNCLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDaEMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUFySEQ7O0dBRUc7QUFDNkIsa0JBQWEsR0FBVSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IFNsb3RcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFNlcnZpY2VDYXRlZ29yeUNvZGVzLCAgU2VydmljZUNhdGVnb3J5Q29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1NlcnZpY2VDYXRlZ29yeUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTZXJ2aWNlQ2F0ZWdvcnlWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1NlcnZpY2VDYXRlZ29yeVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU2VydmljZVR5cGVDb2RlcywgIFNlcnZpY2VUeXBlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1NlcnZpY2VUeXBlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFNlcnZpY2VUeXBlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TZXJ2aWNlVHlwZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQzgwUHJhY3RpY2VDb2RlcywgIEM4MFByYWN0aWNlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0M4MFByYWN0aWNlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEM4MFByYWN0aWNlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9DODBQcmFjdGljZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgVjIwMjc2Q29kZXMsICBWMjAyNzZDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvVjIwMjc2Q29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFYyMDI3NlZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvVjIwMjc2VnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTbG90c3RhdHVzQ29kZXMsICBTbG90c3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1Nsb3RzdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU2xvdHN0YXR1c1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU2xvdHN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTbG90IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3RBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJTbG90XCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIElkcyBmb3IgdGhpcyBpdGVtLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgYnJvYWQgY2F0ZWdvcml6YXRpb24gb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyB0byBiZSBwZXJmb3JtZWQgZHVyaW5nIHRoaXMgYXBwb2ludG1lbnQuXHJcbiAgICovXHJcbiAgc2VydmljZUNhdGVnb3J5PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0eXBlIG9mIGFwcG9pbnRtZW50cyB0aGF0IGNhbiBiZSBib29rZWQgaW50byB0aGlzIHNsb3QgKGlkZWFsbHkgdGhpcyB3b3VsZCBiZSBhbiBpZGVudGlmaWFibGUgc2VydmljZSAtIHdoaWNoIGlzIGF0IGEgbG9jYXRpb24sIHJhdGhlciB0aGFuIHRoZSBsb2NhdGlvbiBpdHNlbGYpLiBJZiBwcm92aWRlZCB0aGVuIHRoaXMgb3ZlcnJpZGVzIHRoZSB2YWx1ZSBwcm92aWRlZCBvbiB0aGUgYXZhaWxhYmlsaXR5IHJlc291cmNlLlxyXG4gICAqL1xyXG4gIHNlcnZpY2VUeXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzcGVjaWFsdHkgb2YgYSBwcmFjdGl0aW9uZXIgdGhhdCB3b3VsZCBiZSByZXF1aXJlZCB0byBwZXJmb3JtIHRoZSBzZXJ2aWNlIHJlcXVlc3RlZCBpbiB0aGlzIGFwcG9pbnRtZW50LlxyXG4gICAqL1xyXG4gIHNwZWNpYWx0eT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgc3R5bGUgb2YgYXBwb2ludG1lbnQgb3IgcGF0aWVudCB0aGF0IG1heSBiZSBib29rZWQgaW4gdGhlIHNsb3QgKG5vdCBzZXJ2aWNlIHR5cGUpLlxyXG4gICAqL1xyXG4gIGFwcG9pbnRtZW50VHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHNjaGVkdWxlIHJlc291cmNlIHRoYXQgdGhpcyBzbG90IGRlZmluZXMgYW4gaW50ZXJ2YWwgb2Ygc3RhdHVzIGluZm9ybWF0aW9uLlxyXG4gICAqL1xyXG4gIHNjaGVkdWxlOiBmaGlyLlJlZmVyZW5jZUFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBidXN5IHwgZnJlZSB8IGJ1c3ktdW5hdmFpbGFibGUgfCBidXN5LXRlbnRhdGl2ZSB8IGVudGVyZWQtaW4tZXJyb3IuXHJcbiAgICovXHJcbiAgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPFNsb3RzdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU2xvdC5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBEYXRlL1RpbWUgdGhhdCB0aGUgc2xvdCBpcyB0byBiZWdpbi5cclxuICAgKi9cclxuICBzdGFydDogZmhpci5GaGlySW5zdGFudHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTbG90LnN0YXJ0XHJcbiAgICovXHJcbiAgX3N0YXJ0PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBEYXRlL1RpbWUgdGhhdCB0aGUgc2xvdCBpcyB0byBjb25jbHVkZS5cclxuICAgKi9cclxuICBlbmQ6IGZoaXIuRmhpckluc3RhbnR8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU2xvdC5lbmRcclxuICAgKi9cclxuICBfZW5kPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGlzIHNsb3QgaGFzIGFscmVhZHkgYmVlbiBvdmVyYm9va2VkLCBhcHBvaW50bWVudHMgYXJlIHVubGlrZWx5IHRvIGJlIGFjY2VwdGVkIGZvciB0aGlzIHRpbWUuXHJcbiAgICovXHJcbiAgb3ZlcmJvb2tlZD86IGZoaXIuRmhpckJvb2xlYW58Ym9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFNsb3Qub3ZlcmJvb2tlZFxyXG4gICAqL1xyXG4gIF9vdmVyYm9va2VkPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBDb21tZW50cyBvbiB0aGUgc2xvdCB0byBkZXNjcmliZSBhbnkgZXh0ZW5kZWQgaW5mb3JtYXRpb24uIFN1Y2ggYXMgY3VzdG9tIGNvbnN0cmFpbnRzIG9uIHRoZSBzbG90LlxyXG4gICAqL1xyXG4gIGNvbW1lbnQ/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU2xvdC5jb21tZW50XHJcbiAgICovXHJcbiAgX2NvbW1lbnQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQSBzbG90IG9mIHRpbWUgb24gYSBzY2hlZHVsZSB0aGF0IG1heSBiZSBhdmFpbGFibGUgZm9yIGJvb2tpbmcgYXBwb2ludG1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNsb3QgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1Nsb3QnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiU2xvdFwiO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIElkcyBmb3IgdGhpcyBpdGVtLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBBIGJyb2FkIGNhdGVnb3JpemF0aW9uIG9mIHRoZSBzZXJ2aWNlIHRoYXQgaXMgdG8gYmUgcGVyZm9ybWVkIGR1cmluZyB0aGlzIGFwcG9pbnRtZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXJ2aWNlQ2F0ZWdvcnk6IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgb2YgYXBwb2ludG1lbnRzIHRoYXQgY2FuIGJlIGJvb2tlZCBpbnRvIHRoaXMgc2xvdCAoaWRlYWxseSB0aGlzIHdvdWxkIGJlIGFuIGlkZW50aWZpYWJsZSBzZXJ2aWNlIC0gd2hpY2ggaXMgYXQgYSBsb2NhdGlvbiwgcmF0aGVyIHRoYW4gdGhlIGxvY2F0aW9uIGl0c2VsZikuIElmIHByb3ZpZGVkIHRoZW4gdGhpcyBvdmVycmlkZXMgdGhlIHZhbHVlIHByb3ZpZGVkIG9uIHRoZSBhdmFpbGFiaWxpdHkgcmVzb3VyY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHNlcnZpY2VUeXBlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzcGVjaWFsdHkgb2YgYSBwcmFjdGl0aW9uZXIgdGhhdCB3b3VsZCBiZSByZXF1aXJlZCB0byBwZXJmb3JtIHRoZSBzZXJ2aWNlIHJlcXVlc3RlZCBpbiB0aGlzIGFwcG9pbnRtZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzcGVjaWFsdHk6IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogVGhlIHN0eWxlIG9mIGFwcG9pbnRtZW50IG9yIHBhdGllbnQgdGhhdCBtYXkgYmUgYm9va2VkIGluIHRoZSBzbG90IChub3Qgc2VydmljZSB0eXBlKS5cclxuICAgKi9cclxuICBwdWJsaWMgYXBwb2ludG1lbnRUeXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzY2hlZHVsZSByZXNvdXJjZSB0aGF0IHRoaXMgc2xvdCBkZWZpbmVzIGFuIGludGVydmFsIG9mIHN0YXR1cyBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgc2NoZWR1bGU6IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogYnVzeSB8IGZyZWUgfCBidXN5LXVuYXZhaWxhYmxlIHwgYnVzeS10ZW50YXRpdmUgfCBlbnRlcmVkLWluLWVycm9yLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM6IGZoaXIuRmhpckNvZGU8U2xvdHN0YXR1c0NvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIERhdGUvVGltZSB0aGF0IHRoZSBzbG90IGlzIHRvIGJlZ2luLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGFydDogZmhpci5GaGlySW5zdGFudHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIERhdGUvVGltZSB0aGF0IHRoZSBzbG90IGlzIHRvIGNvbmNsdWRlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBlbmQ6IGZoaXIuRmhpckluc3RhbnR8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGlzIHNsb3QgaGFzIGFscmVhZHkgYmVlbiBvdmVyYm9va2VkLCBhcHBvaW50bWVudHMgYXJlIHVubGlrZWx5IHRvIGJlIGFjY2VwdGVkIGZvciB0aGlzIHRpbWUuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJib29rZWQ/OiBmaGlyLkZoaXJCb29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBDb21tZW50cyBvbiB0aGUgc2xvdCB0byBkZXNjcmliZSBhbnkgZXh0ZW5kZWQgaW5mb3JtYXRpb24uIFN1Y2ggYXMgY3VzdG9tIGNvbnN0cmFpbnRzIG9uIHRoZSBzbG90LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb21tZW50PzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBTbG90IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8U2xvdEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdTbG90JztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3NlcnZpY2VDYXRlZ29yeSddKSB7IHRoaXMuc2VydmljZUNhdGVnb3J5ID0gc291cmNlLnNlcnZpY2VDYXRlZ29yeS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnNlcnZpY2VDYXRlZ29yeSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydzZXJ2aWNlVHlwZSddKSB7IHRoaXMuc2VydmljZVR5cGUgPSBzb3VyY2Uuc2VydmljZVR5cGUubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zZXJ2aWNlVHlwZSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydzcGVjaWFsdHknXSkgeyB0aGlzLnNwZWNpYWx0eSA9IHNvdXJjZS5zcGVjaWFsdHkubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zcGVjaWFsdHkgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYXBwb2ludG1lbnRUeXBlJ10pIHsgdGhpcy5hcHBvaW50bWVudFR5cGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmFwcG9pbnRtZW50VHlwZSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3NjaGVkdWxlJ10pIHsgdGhpcy5zY2hlZHVsZSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uuc2NoZWR1bGUpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zY2hlZHVsZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8U2xvdHN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxTbG90c3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydzdGFydCddKSB7IHRoaXMuc3RhcnQgPSBuZXcgZmhpci5GaGlySW5zdGFudCh7dmFsdWU6IHNvdXJjZS5zdGFydH0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdGFydCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGFydCddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXJ0KSB7IHRoaXMuc3RhcnQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhcnQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGFydCA9IG5ldyBmaGlyLkZoaXJJbnN0YW50KHNvdXJjZS5fc3RhcnQgYXMgUGFydGlhbDxmaGlyLkZoaXJJbnN0YW50QXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydlbmQnXSkgeyB0aGlzLmVuZCA9IG5ldyBmaGlyLkZoaXJJbnN0YW50KHt2YWx1ZTogc291cmNlLmVuZH0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5lbmQgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfZW5kJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZW5kKSB7IHRoaXMuZW5kLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2VuZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmVuZCA9IG5ldyBmaGlyLkZoaXJJbnN0YW50KHNvdXJjZS5fZW5kIGFzIFBhcnRpYWw8Zmhpci5GaGlySW5zdGFudEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnb3ZlcmJvb2tlZCddKSB7IHRoaXMub3ZlcmJvb2tlZCA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHt2YWx1ZTogc291cmNlLm92ZXJib29rZWR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX292ZXJib29rZWQnXSkge1xyXG4gICAgICBpZiAodGhpcy5vdmVyYm9va2VkKSB7IHRoaXMub3ZlcmJvb2tlZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9vdmVyYm9va2VkISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMub3ZlcmJvb2tlZCA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHNvdXJjZS5fb3ZlcmJvb2tlZCBhcyBQYXJ0aWFsPGZoaXIuRmhpckJvb2xlYW5BcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NvbW1lbnQnXSkgeyB0aGlzLmNvbW1lbnQgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmNvbW1lbnR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NvbW1lbnQnXSkge1xyXG4gICAgICBpZiAodGhpcy5jb21tZW50KSB7IHRoaXMuY29tbWVudC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jb21tZW50ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY29tbWVudCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9jb21tZW50IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKTtcclxuICAgIGlmIChleHByZXNzaW9uID09PSAnJykgeyBleHByZXNzaW9uID0gJ1Nsb3QnIH1cclxuICAgIHRoaXMudlJlcVMoJ3Jlc291cmNlVHlwZScsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudk9wdEEoJ2lkZW50aWZpZXInLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZPcHRBKCdzZXJ2aWNlQ2F0ZWdvcnknLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZPcHRBKCdzZXJ2aWNlVHlwZScsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudk9wdEEoJ3NwZWNpYWx0eScsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudk9wdFMoJ2FwcG9pbnRtZW50VHlwZScsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudlJlcVMoJ3NjaGVkdWxlJyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52UmVxU1YoJ3N0YXR1cycsZXhwcmVzc2lvbiwnU2xvdHN0YXR1cycsU2xvdHN0YXR1c1ZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZSZXFTKCdzdGFydCcsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudlJlcVMoJ2VuZCcsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudk9wdFMoJ292ZXJib29rZWQnLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZPcHRTKCdjb21tZW50JyxleHByZXNzaW9uKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19