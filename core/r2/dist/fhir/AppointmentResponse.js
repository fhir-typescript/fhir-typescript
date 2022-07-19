// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: AppointmentResponse
import * as fhir from '../fhir.js';
// @ts-ignore
import { ParticipantstatusVsValidation } from '../fhirValueSets/ParticipantstatusVsValidation.js';
/**
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 */
export class AppointmentResponse extends fhir.DomainResource {
    /**
     * Default constructor for AppointmentResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'AppointmentResponse';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['appointment']) {
            this.appointment = new fhir.Reference(source.appointment);
        }
        else {
            this.appointment = null;
        }
        if (source['start']) {
            this.start = new fhir.FhirInstant({ value: source.start });
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
        if (source['_end']) {
            if (this.end) {
                this.end.addExtendedProperties(source._end);
            }
            else {
                this.end = new fhir.FhirInstant(source._end);
            }
        }
        if (source['participantType']) {
            this.participantType = source.participantType.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.participantType = [];
        }
        if (source['actor']) {
            this.actor = new fhir.Reference(source.actor);
        }
        if (source['participantStatus']) {
            this.participantStatus = new fhir.FhirCode({ value: source.participantStatus });
        }
        else {
            this.participantStatus = null;
        }
        if (source['_participantStatus']) {
            if (this.participantStatus) {
                this.participantStatus.addExtendedProperties(source._participantStatus);
            }
            else {
                this.participantStatus = new fhir.FhirCode(source._participantStatus);
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
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'AppointmentResponse';
        }
        iss.push(...this.vRPS('resourceType', exp));
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vRS('appointment', exp));
        iss.push(...this.vOS('start', exp));
        iss.push(...this.vOS('end', exp));
        iss.push(...this.vOA('participantType', exp));
        iss.push(...this.vOS('actor', exp));
        iss.push(...this.vRSV('participantStatus', exp, 'Participantstatus', ParticipantstatusVsValidation, 'r'));
        iss.push(...this.vOS('comment', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
AppointmentResponse._fts_dataType = 'AppointmentResponse';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwb2ludG1lbnRSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQXBwb2ludG1lbnRSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxxQ0FBcUM7QUFFckMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBMkRsRzs7R0FFRztBQUNILE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxJQUFJLENBQUMsY0FBYztJQXlDMUQ7O09BRUc7SUFDSCxZQUFZLFNBQTBDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ2hHLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxxQkFBcUIsQ0FBQztRQUMxQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDaEc7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQUU7YUFDcEY7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUFFO1FBQ2pDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElB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UyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQTNGRDs7R0FFRztBQUM2QixpQ0FBYSxHQUFVLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBBcHBvaW50bWVudFJlc3BvbnNlXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBQYXJ0aWNpcGFudHN0YXR1c0NvZGVzLCAgUGFydGljaXBhbnRzdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUGFydGljaXBhbnRzdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUGFydGljaXBhbnRzdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1BhcnRpY2lwYW50c3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEFwcG9pbnRtZW50UmVzcG9uc2UgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwb2ludG1lbnRSZXNwb25zZUFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkFwcG9pbnRtZW50UmVzcG9uc2VcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyByZWNvcmRzIGlkZW50aWZpZXJzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGFwcG9pbnRtZW50IHJlc3BvbnNlIGNvbmNlcm4gdGhhdCBhcmUgZGVmaW5lZCBieSBidXNpbmVzcyBwcm9jZXNzZXMgYW5kLyBvciB1c2VkIHRvIHJlZmVyIHRvIGl0IHdoZW4gYSBkaXJlY3QgVVJMIHJlZmVyZW5jZSB0byB0aGUgcmVzb3VyY2UgaXRzZWxmIGlzIG5vdCBhcHByb3ByaWF0ZS5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBcHBvaW50bWVudCB0aGF0IHRoaXMgcmVzcG9uc2UgaXMgcmVwbHlpbmcgdG8uXHJcbiAgICovXHJcbiAgYXBwb2ludG1lbnQ6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIERhdGUvVGltZSB0aGF0IHRoZSBhcHBvaW50bWVudCBpcyB0byB0YWtlIHBsYWNlLCBvciByZXF1ZXN0ZWQgbmV3IHN0YXJ0IHRpbWUuXHJcbiAgICovXHJcbiAgc3RhcnQ/OiBmaGlyLkZoaXJJbnN0YW50fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFwcG9pbnRtZW50UmVzcG9uc2Uuc3RhcnRcclxuICAgKi9cclxuICBfc3RhcnQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWF5IGJlIGVpdGhlciB0aGUgc2FtZSBhcyB0aGUgYXBwb2ludG1lbnQgcmVxdWVzdCB0byBjb25maXJtIHRoZSBkZXRhaWxzIG9mIHRoZSBhcHBvaW50bWVudCwgb3IgYWx0ZXJuYXRlbHkgYSBuZXcgdGltZSB0byByZXF1ZXN0IGEgcmUtbmVnb3RpYXRpb24gb2YgdGhlIGVuZCB0aW1lLlxyXG4gICAqL1xyXG4gIGVuZD86IGZoaXIuRmhpckluc3RhbnR8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQXBwb2ludG1lbnRSZXNwb25zZS5lbmRcclxuICAgKi9cclxuICBfZW5kPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBSb2xlIG9mIHBhcnRpY2lwYW50IGluIHRoZSBhcHBvaW50bWVudC5cclxuICAgKi9cclxuICBwYXJ0aWNpcGFudFR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBQZXJzb24sIExvY2F0aW9uL0hlYWx0aGNhcmVTZXJ2aWNlIG9yIERldmljZSB0aGF0IGlzIHBhcnRpY2lwYXRpbmcgaW4gdGhlIGFwcG9pbnRtZW50LlxyXG4gICAqL1xyXG4gIGFjdG9yPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBQYXJ0aWNpcGF0aW9uIHN0YXR1cyBvZiB0aGUgcGFydGljaXBhbnQuIFdoZW4gdGhlIHN0YXR1cyBpcyBkZWNsaW5lZCBvciB0ZW50YXRpdmUgaWYgdGhlIHN0YXJ0L2VuZCB0aW1lcyBhcmUgZGlmZmVyZW50IHRvIHRoZSBhcHBvaW50bWVudCwgdGhlbiB0aGVzZSB0aW1lcyBzaG91bGQgYmUgaW50ZXJwcmV0ZWQgYXMgYSByZXF1ZXN0ZWQgdGltZSBjaGFuZ2UuIFdoZW4gdGhlIHN0YXR1cyBpcyBhY2NlcHRlZCwgdGhlIHRpbWVzIGNhbiBlaXRoZXIgYmUgdGhlIHRpbWUgb2YgdGhlIGFwcG9pbnRtZW50IChhcyBhIGNvbmZpcm1hdGlvbiBvZiB0aGUgdGltZSkgb3IgY2FuIGJlIGVtcHR5LlxyXG4gICAqL1xyXG4gIHBhcnRpY2lwYW50U3RhdHVzOiBmaGlyLkZoaXJDb2RlPFBhcnRpY2lwYW50c3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFwcG9pbnRtZW50UmVzcG9uc2UucGFydGljaXBhbnRTdGF0dXNcclxuICAgKi9cclxuICBfcGFydGljaXBhbnRTdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgY29tbWVudHMgYWJvdXQgdGhlIGFwcG9pbnRtZW50LlxyXG4gICAqL1xyXG4gIGNvbW1lbnQ/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQXBwb2ludG1lbnRSZXNwb25zZS5jb21tZW50XHJcbiAgICovXHJcbiAgX2NvbW1lbnQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQSByZXBseSB0byBhbiBhcHBvaW50bWVudCByZXF1ZXN0IGZvciBhIHBhdGllbnQgYW5kL29yIHByYWN0aXRpb25lcihzKSwgc3VjaCBhcyBhIGNvbmZpcm1hdGlvbiBvciByZWplY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXBwb2ludG1lbnRSZXNwb25zZSBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQXBwb2ludG1lbnRSZXNwb25zZSc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJBcHBvaW50bWVudFJlc3BvbnNlXCI7XHJcbiAgLyoqXHJcbiAgICogVGhpcyByZWNvcmRzIGlkZW50aWZpZXJzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGFwcG9pbnRtZW50IHJlc3BvbnNlIGNvbmNlcm4gdGhhdCBhcmUgZGVmaW5lZCBieSBidXNpbmVzcyBwcm9jZXNzZXMgYW5kLyBvciB1c2VkIHRvIHJlZmVyIHRvIGl0IHdoZW4gYSBkaXJlY3QgVVJMIHJlZmVyZW5jZSB0byB0aGUgcmVzb3VyY2UgaXRzZWxmIGlzIG5vdCBhcHByb3ByaWF0ZS5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogQXBwb2ludG1lbnQgdGhhdCB0aGlzIHJlc3BvbnNlIGlzIHJlcGx5aW5nIHRvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhcHBvaW50bWVudDogZmhpci5SZWZlcmVuY2V8bnVsbDtcclxuICAvKipcclxuICAgKiBEYXRlL1RpbWUgdGhhdCB0aGUgYXBwb2ludG1lbnQgaXMgdG8gdGFrZSBwbGFjZSwgb3IgcmVxdWVzdGVkIG5ldyBzdGFydCB0aW1lLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGFydD86IGZoaXIuRmhpckluc3RhbnR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWF5IGJlIGVpdGhlciB0aGUgc2FtZSBhcyB0aGUgYXBwb2ludG1lbnQgcmVxdWVzdCB0byBjb25maXJtIHRoZSBkZXRhaWxzIG9mIHRoZSBhcHBvaW50bWVudCwgb3IgYWx0ZXJuYXRlbHkgYSBuZXcgdGltZSB0byByZXF1ZXN0IGEgcmUtbmVnb3RpYXRpb24gb2YgdGhlIGVuZCB0aW1lLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBlbmQ/OiBmaGlyLkZoaXJJbnN0YW50fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBSb2xlIG9mIHBhcnRpY2lwYW50IGluIHRoZSBhcHBvaW50bWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgcGFydGljaXBhbnRUeXBlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIEEgUGVyc29uLCBMb2NhdGlvbi9IZWFsdGhjYXJlU2VydmljZSBvciBEZXZpY2UgdGhhdCBpcyBwYXJ0aWNpcGF0aW5nIGluIHRoZSBhcHBvaW50bWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgYWN0b3I/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUGFydGljaXBhdGlvbiBzdGF0dXMgb2YgdGhlIHBhcnRpY2lwYW50LiBXaGVuIHRoZSBzdGF0dXMgaXMgZGVjbGluZWQgb3IgdGVudGF0aXZlIGlmIHRoZSBzdGFydC9lbmQgdGltZXMgYXJlIGRpZmZlcmVudCB0byB0aGUgYXBwb2ludG1lbnQsIHRoZW4gdGhlc2UgdGltZXMgc2hvdWxkIGJlIGludGVycHJldGVkIGFzIGEgcmVxdWVzdGVkIHRpbWUgY2hhbmdlLiBXaGVuIHRoZSBzdGF0dXMgaXMgYWNjZXB0ZWQsIHRoZSB0aW1lcyBjYW4gZWl0aGVyIGJlIHRoZSB0aW1lIG9mIHRoZSBhcHBvaW50bWVudCAoYXMgYSBjb25maXJtYXRpb24gb2YgdGhlIHRpbWUpIG9yIGNhbiBiZSBlbXB0eS5cclxuICAgKi9cclxuICBwdWJsaWMgcGFydGljaXBhbnRTdGF0dXM6IGZoaXIuRmhpckNvZGU8UGFydGljaXBhbnRzdGF0dXNDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIGNvbW1lbnRzIGFib3V0IHRoZSBhcHBvaW50bWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgY29tbWVudD86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgQXBwb2ludG1lbnRSZXNwb25zZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEFwcG9pbnRtZW50UmVzcG9uc2VBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnQXBwb2ludG1lbnRSZXNwb25zZSc7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gc291cmNlLmlkZW50aWZpZXIubWFwKCh4KSA9PiBuZXcgZmhpci5JZGVudGlmaWVyKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaWRlbnRpZmllciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydhcHBvaW50bWVudCddKSB7IHRoaXMuYXBwb2ludG1lbnQgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmFwcG9pbnRtZW50KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuYXBwb2ludG1lbnQgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydzdGFydCddKSB7IHRoaXMuc3RhcnQgPSBuZXcgZmhpci5GaGlySW5zdGFudCh7dmFsdWU6IHNvdXJjZS5zdGFydH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhcnQnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGFydCkgeyB0aGlzLnN0YXJ0LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXJ0ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhcnQgPSBuZXcgZmhpci5GaGlySW5zdGFudChzb3VyY2UuX3N0YXJ0IGFzIFBhcnRpYWw8Zmhpci5GaGlySW5zdGFudEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZW5kJ10pIHsgdGhpcy5lbmQgPSBuZXcgZmhpci5GaGlySW5zdGFudCh7dmFsdWU6IHNvdXJjZS5lbmR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2VuZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmVuZCkgeyB0aGlzLmVuZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9lbmQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5lbmQgPSBuZXcgZmhpci5GaGlySW5zdGFudChzb3VyY2UuX2VuZCBhcyBQYXJ0aWFsPGZoaXIuRmhpckluc3RhbnRBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3BhcnRpY2lwYW50VHlwZSddKSB7IHRoaXMucGFydGljaXBhbnRUeXBlID0gc291cmNlLnBhcnRpY2lwYW50VHlwZS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnBhcnRpY2lwYW50VHlwZSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydhY3RvciddKSB7IHRoaXMuYWN0b3IgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmFjdG9yKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncGFydGljaXBhbnRTdGF0dXMnXSkgeyB0aGlzLnBhcnRpY2lwYW50U3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8UGFydGljaXBhbnRzdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2UucGFydGljaXBhbnRTdGF0dXN9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucGFydGljaXBhbnRTdGF0dXMgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfcGFydGljaXBhbnRTdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5wYXJ0aWNpcGFudFN0YXR1cykgeyB0aGlzLnBhcnRpY2lwYW50U3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3BhcnRpY2lwYW50U3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucGFydGljaXBhbnRTdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxQYXJ0aWNpcGFudHN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3BhcnRpY2lwYW50U3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjb21tZW50J10pIHsgdGhpcy5jb21tZW50ID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5jb21tZW50fSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jb21tZW50J10pIHtcclxuICAgICAgaWYgKHRoaXMuY29tbWVudCkgeyB0aGlzLmNvbW1lbnQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY29tbWVudCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNvbW1lbnQgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fY29tbWVudCBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0FwcG9pbnRtZW50UmVzcG9uc2UnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJQUygncmVzb3VyY2VUeXBlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdhcHBvaW50bWVudCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnc3RhcnQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2VuZCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgncGFydGljaXBhbnRUeXBlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdhY3RvcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSU1YoJ3BhcnRpY2lwYW50U3RhdHVzJyxleHAsJ1BhcnRpY2lwYW50c3RhdHVzJyxQYXJ0aWNpcGFudHN0YXR1c1ZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdjb21tZW50JyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==