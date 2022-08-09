// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
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
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options));
        }
        else {
            this.identifier = [];
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type, options);
        }
        if (source['schedule']) {
            this.schedule = new fhir.Reference(source.schedule, options);
        }
        else {
            this.schedule = null;
        }
        if (source['freeBusyType'] !== undefined) {
            this.freeBusyType = new fhir.FhirCode({ value: source.freeBusyType }, options);
        }
        else {
            this.freeBusyType = null;
        }
        if (source['_freeBusyType']) {
            if (this.freeBusyType) {
                this.freeBusyType.addExtendedProperties(source._freeBusyType);
            }
            else {
                this.freeBusyType = new fhir.FhirCode(source._freeBusyType, options);
            }
        }
        if (source['start'] !== undefined) {
            this.start = new fhir.FhirInstant({ value: source.start }, options);
        }
        else {
            this.start = null;
        }
        if (source['_start']) {
            if (this.start) {
                this.start.addExtendedProperties(source._start);
            }
            else {
                this.start = new fhir.FhirInstant(source._start, options);
            }
        }
        if (source['end'] !== undefined) {
            this.end = new fhir.FhirInstant({ value: source.end }, options);
        }
        else {
            this.end = null;
        }
        if (source['_end']) {
            if (this.end) {
                this.end.addExtendedProperties(source._end);
            }
            else {
                this.end = new fhir.FhirInstant(source._end, options);
            }
        }
        if (source['overbooked'] !== undefined) {
            this.overbooked = new fhir.FhirBoolean({ value: source.overbooked }, options);
        }
        if (source['_overbooked']) {
            if (this.overbooked) {
                this.overbooked.addExtendedProperties(source._overbooked);
            }
            else {
                this.overbooked = new fhir.FhirBoolean(source._overbooked, options);
            }
        }
        if (source['comment'] !== undefined) {
            this.comment = new fhir.FhirString({ value: source.comment }, options);
        }
        if (source['_comment']) {
            if (this.comment) {
                this.comment.addExtendedProperties(source._comment);
            }
            else {
                this.comment = new fhir.FhirString(source._comment, options);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Slot';
        }
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vOS('type', exp));
        iss.push(...this.vRS('schedule', exp));
        iss.push(...this.vRSV('freeBusyType', exp, 'Slotstatus', SlotstatusVsValidation, 'r'));
        iss.push(...this.vRS('start', exp));
        iss.push(...this.vRS('end', exp));
        iss.push(...this.vOS('overbooked', exp));
        iss.push(...this.vOS('comment', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Slot._fts_dataType = 'Slot';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xvdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvU2xvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxzQkFBc0I7QUFFdEIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBK0RwRjs7R0FFRztBQUNILE1BQU0sT0FBTyxJQUFLLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUF5QzNDOztPQUVHO0lBQ0gsWUFBWSxTQUEyQixFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNqRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDekc7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQ25GLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO2FB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SUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBL0ZEOztHQUVHO0FBQzZCLGtCQUFhLEdBQVUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBTbG90XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTbG90c3RhdHVzQ29kZXMsICBTbG90c3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1Nsb3RzdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU2xvdHN0YXR1c1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU2xvdHN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTbG90IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3RBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJTbG90XCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIElkcyBmb3IgdGhpcyBpdGVtLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0eXBlIG9mIGFwcG9pbnRtZW50cyB0aGF0IGNhbiBiZSBib29rZWQgaW50byB0aGlzIHNsb3QgKGlkZWFsbHkgdGhpcyB3b3VsZCBiZSBhbiBpZGVudGlmaWFibGUgc2VydmljZSAtIHdoaWNoIGlzIGF0IGEgbG9jYXRpb24sIHJhdGhlciB0aGFuIHRoZSBsb2NhdGlvbiBpdHNlbGYpLiBJZiBwcm92aWRlZCB0aGVuIHRoaXMgb3ZlcnJpZGVzIHRoZSB2YWx1ZSBwcm92aWRlZCBvbiB0aGUgYXZhaWxhYmlsaXR5IHJlc291cmNlLlxyXG4gICAqL1xyXG4gIHR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzY2hlZHVsZSByZXNvdXJjZSB0aGF0IHRoaXMgc2xvdCBkZWZpbmVzIGFuIGludGVydmFsIG9mIHN0YXR1cyBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBzY2hlZHVsZTogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogYnVzeSB8IGZyZWUgfCBidXN5LXVuYXZhaWxhYmxlIHwgYnVzeS10ZW50YXRpdmUuXHJcbiAgICovXHJcbiAgZnJlZUJ1c3lUeXBlOiBmaGlyLkZoaXJDb2RlPFNsb3RzdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU2xvdC5mcmVlQnVzeVR5cGVcclxuICAgKi9cclxuICBfZnJlZUJ1c3lUeXBlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBEYXRlL1RpbWUgdGhhdCB0aGUgc2xvdCBpcyB0byBiZWdpbi5cclxuICAgKi9cclxuICBzdGFydDogZmhpci5GaGlySW5zdGFudHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTbG90LnN0YXJ0XHJcbiAgICovXHJcbiAgX3N0YXJ0PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBEYXRlL1RpbWUgdGhhdCB0aGUgc2xvdCBpcyB0byBjb25jbHVkZS5cclxuICAgKi9cclxuICBlbmQ6IGZoaXIuRmhpckluc3RhbnR8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU2xvdC5lbmRcclxuICAgKi9cclxuICBfZW5kPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGlzIHNsb3QgaGFzIGFscmVhZHkgYmVlbiBvdmVyYm9va2VkLCBhcHBvaW50bWVudHMgYXJlIHVubGlrZWx5IHRvIGJlIGFjY2VwdGVkIGZvciB0aGlzIHRpbWUuXHJcbiAgICovXHJcbiAgb3ZlcmJvb2tlZD86IGZoaXIuRmhpckJvb2xlYW58Ym9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFNsb3Qub3ZlcmJvb2tlZFxyXG4gICAqL1xyXG4gIF9vdmVyYm9va2VkPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBDb21tZW50cyBvbiB0aGUgc2xvdCB0byBkZXNjcmliZSBhbnkgZXh0ZW5kZWQgaW5mb3JtYXRpb24uIFN1Y2ggYXMgY3VzdG9tIGNvbnN0cmFpbnRzIG9uIHRoZSBzbG90LlxyXG4gICAqL1xyXG4gIGNvbW1lbnQ/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU2xvdC5jb21tZW50XHJcbiAgICovXHJcbiAgX2NvbW1lbnQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQSBzbG90IG9mIHRpbWUgb24gYSBzY2hlZHVsZSB0aGF0IG1heSBiZSBhdmFpbGFibGUgZm9yIGJvb2tpbmcgYXBwb2ludG1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNsb3QgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1Nsb3QnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiU2xvdFwiO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIElkcyBmb3IgdGhpcyBpdGVtLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiBhcHBvaW50bWVudHMgdGhhdCBjYW4gYmUgYm9va2VkIGludG8gdGhpcyBzbG90IChpZGVhbGx5IHRoaXMgd291bGQgYmUgYW4gaWRlbnRpZmlhYmxlIHNlcnZpY2UgLSB3aGljaCBpcyBhdCBhIGxvY2F0aW9uLCByYXRoZXIgdGhhbiB0aGUgbG9jYXRpb24gaXRzZWxmKS4gSWYgcHJvdmlkZWQgdGhlbiB0aGlzIG92ZXJyaWRlcyB0aGUgdmFsdWUgcHJvdmlkZWQgb24gdGhlIGF2YWlsYWJpbGl0eSByZXNvdXJjZS5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgc2NoZWR1bGUgcmVzb3VyY2UgdGhhdCB0aGlzIHNsb3QgZGVmaW5lcyBhbiBpbnRlcnZhbCBvZiBzdGF0dXMgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHNjaGVkdWxlOiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIGJ1c3kgfCBmcmVlIHwgYnVzeS11bmF2YWlsYWJsZSB8IGJ1c3ktdGVudGF0aXZlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBmcmVlQnVzeVR5cGU6IGZoaXIuRmhpckNvZGU8U2xvdHN0YXR1c0NvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIERhdGUvVGltZSB0aGF0IHRoZSBzbG90IGlzIHRvIGJlZ2luLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGFydDogZmhpci5GaGlySW5zdGFudHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIERhdGUvVGltZSB0aGF0IHRoZSBzbG90IGlzIHRvIGNvbmNsdWRlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBlbmQ6IGZoaXIuRmhpckluc3RhbnR8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGlzIHNsb3QgaGFzIGFscmVhZHkgYmVlbiBvdmVyYm9va2VkLCBhcHBvaW50bWVudHMgYXJlIHVubGlrZWx5IHRvIGJlIGFjY2VwdGVkIGZvciB0aGlzIHRpbWUuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJib29rZWQ/OiBmaGlyLkZoaXJCb29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBDb21tZW50cyBvbiB0aGUgc2xvdCB0byBkZXNjcmliZSBhbnkgZXh0ZW5kZWQgaW5mb3JtYXRpb24uIFN1Y2ggYXMgY3VzdG9tIGNvbnN0cmFpbnRzIG9uIHRoZSBzbG90LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb21tZW50PzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBTbG90IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8U2xvdEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdTbG90JztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnR5cGUsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydzY2hlZHVsZSddKSB7IHRoaXMuc2NoZWR1bGUgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnNjaGVkdWxlLCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc2NoZWR1bGUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydmcmVlQnVzeVR5cGUnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZnJlZUJ1c3lUeXBlID0gbmV3IGZoaXIuRmhpckNvZGU8U2xvdHN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5mcmVlQnVzeVR5cGV9LCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZnJlZUJ1c3lUeXBlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2ZyZWVCdXN5VHlwZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmZyZWVCdXN5VHlwZSkgeyB0aGlzLmZyZWVCdXN5VHlwZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9mcmVlQnVzeVR5cGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5mcmVlQnVzeVR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZTxTbG90c3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fZnJlZUJ1c3lUeXBlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydzdGFydCddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zdGFydCA9IG5ldyBmaGlyLkZoaXJJbnN0YW50KHt2YWx1ZTogc291cmNlLnN0YXJ0fSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXJ0ID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXJ0J10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhcnQpIHsgdGhpcy5zdGFydC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGFydCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXJ0ID0gbmV3IGZoaXIuRmhpckluc3RhbnQoc291cmNlLl9zdGFydCBhcyBQYXJ0aWFsPGZoaXIuRmhpckluc3RhbnRBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2VuZCddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5lbmQgPSBuZXcgZmhpci5GaGlySW5zdGFudCh7dmFsdWU6IHNvdXJjZS5lbmR9LCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZW5kID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2VuZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmVuZCkgeyB0aGlzLmVuZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9lbmQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5lbmQgPSBuZXcgZmhpci5GaGlySW5zdGFudChzb3VyY2UuX2VuZCBhcyBQYXJ0aWFsPGZoaXIuRmhpckluc3RhbnRBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ292ZXJib29rZWQnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMub3ZlcmJvb2tlZCA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHt2YWx1ZTogc291cmNlLm92ZXJib29rZWR9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX292ZXJib29rZWQnXSkge1xyXG4gICAgICBpZiAodGhpcy5vdmVyYm9va2VkKSB7IHRoaXMub3ZlcmJvb2tlZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9vdmVyYm9va2VkISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMub3ZlcmJvb2tlZCA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHNvdXJjZS5fb3ZlcmJvb2tlZCBhcyBQYXJ0aWFsPGZoaXIuRmhpckJvb2xlYW5BcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NvbW1lbnQnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuY29tbWVudCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuY29tbWVudH0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfY29tbWVudCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbW1lbnQpIHsgdGhpcy5jb21tZW50LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NvbW1lbnQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jb21tZW50ID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2NvbW1lbnQgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdTbG90JyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndHlwZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygnc2NoZWR1bGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlNWKCdmcmVlQnVzeVR5cGUnLGV4cCwnU2xvdHN0YXR1cycsU2xvdHN0YXR1c1ZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdzdGFydCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygnZW5kJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdvdmVyYm9va2VkJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdjb21tZW50JyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==