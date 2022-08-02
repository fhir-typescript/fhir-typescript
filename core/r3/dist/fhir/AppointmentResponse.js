// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: AppointmentResponse
import * as fhir from '../fhir.js';
// @ts-ignore
import { ParticipationstatusVsValidation } from '../fhirValueSets/ParticipationstatusVsValidation.js';
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
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vRS('appointment', exp));
        iss.push(...this.vOS('start', exp));
        iss.push(...this.vOS('end', exp));
        iss.push(...this.vOA('participantType', exp));
        iss.push(...this.vOS('actor', exp));
        iss.push(...this.vRSV('participantStatus', exp, 'Participationstatus', ParticipationstatusVsValidation, 'r'));
        iss.push(...this.vOS('comment', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
AppointmentResponse._fts_dataType = 'AppointmentResponse';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwb2ludG1lbnRSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQXBwb2ludG1lbnRSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxxQ0FBcUM7QUFFckMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFRbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBNkR0Rzs7R0FFRztBQUNILE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxJQUFJLENBQUMsY0FBYztJQTJDMUQ7O09BRUc7SUFDSCxZQUFZLFNBQTBDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ2hHLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxxQkFBcUIsQ0FBQztRQUMxQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDaEc7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQUU7YUFDcEY7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUFFO1FBQ2pDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElB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YSxHQUFVLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBBcHBvaW50bWVudFJlc3BvbnNlXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBFbmNvdW50ZXJQYXJ0aWNpcGFudFR5cGVDb2RlcywgIEVuY291bnRlclBhcnRpY2lwYW50VHlwZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9FbmNvdW50ZXJQYXJ0aWNpcGFudFR5cGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRW5jb3VudGVyUGFydGljaXBhbnRUeXBlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9FbmNvdW50ZXJQYXJ0aWNpcGFudFR5cGVWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFBhcnRpY2lwYXRpb25zdGF0dXNDb2RlcywgIFBhcnRpY2lwYXRpb25zdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUGFydGljaXBhdGlvbnN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBQYXJ0aWNpcGF0aW9uc3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9QYXJ0aWNpcGF0aW9uc3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEFwcG9pbnRtZW50UmVzcG9uc2UgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwb2ludG1lbnRSZXNwb25zZUFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkFwcG9pbnRtZW50UmVzcG9uc2VcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyByZWNvcmRzIGlkZW50aWZpZXJzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGFwcG9pbnRtZW50IHJlc3BvbnNlIGNvbmNlcm4gdGhhdCBhcmUgZGVmaW5lZCBieSBidXNpbmVzcyBwcm9jZXNzZXMgYW5kLyBvciB1c2VkIHRvIHJlZmVyIHRvIGl0IHdoZW4gYSBkaXJlY3QgVVJMIHJlZmVyZW5jZSB0byB0aGUgcmVzb3VyY2UgaXRzZWxmIGlzIG5vdCBhcHByb3ByaWF0ZS5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBcHBvaW50bWVudCB0aGF0IHRoaXMgcmVzcG9uc2UgaXMgcmVwbHlpbmcgdG8uXHJcbiAgICovXHJcbiAgYXBwb2ludG1lbnQ6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWF5IGJlIGVpdGhlciB0aGUgc2FtZSBhcyB0aGUgYXBwb2ludG1lbnQgcmVxdWVzdCB0byBjb25maXJtIHRoZSBkZXRhaWxzIG9mIHRoZSBhcHBvaW50bWVudCwgb3IgYWx0ZXJuYXRlbHkgYSBuZXcgdGltZSB0byByZXF1ZXN0IGEgcmUtbmVnb3RpYXRpb24gb2YgdGhlIHN0YXJ0IHRpbWUuXHJcbiAgICovXHJcbiAgc3RhcnQ/OiBmaGlyLkZoaXJJbnN0YW50fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFwcG9pbnRtZW50UmVzcG9uc2Uuc3RhcnRcclxuICAgKi9cclxuICBfc3RhcnQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWF5IGJlIGVpdGhlciB0aGUgc2FtZSBhcyB0aGUgYXBwb2ludG1lbnQgcmVxdWVzdCB0byBjb25maXJtIHRoZSBkZXRhaWxzIG9mIHRoZSBhcHBvaW50bWVudCwgb3IgYWx0ZXJuYXRlbHkgYSBuZXcgdGltZSB0byByZXF1ZXN0IGEgcmUtbmVnb3RpYXRpb24gb2YgdGhlIGVuZCB0aW1lLlxyXG4gICAqL1xyXG4gIGVuZD86IGZoaXIuRmhpckluc3RhbnR8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQXBwb2ludG1lbnRSZXNwb25zZS5lbmRcclxuICAgKi9cclxuICBfZW5kPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgcm9sZSBvZiB0aGUgcGFydGljaXBhbnQgY2FuIGJlIHVzZWQgdG8gZGVjbGFyZSB3aGF0IHRoZSBhY3RvciB3aWxsIGJlIGRvaW5nIGluIHRoZSBzY29wZSBvZiB0aGUgcmVmZXJlbmNlZCBhcHBvaW50bWVudC5cclxuICAgKiBJZiB0aGUgYWN0b3IgaXMgbm90IHNwZWNpZmllZCwgdGhlbiBpdCBpcyBleHBlY3RlZCB0aGF0IHRoZSBhY3RvciB3aWxsIGJlIGZpbGxlZCBpbiBhdCBhIGxhdGVyIHN0YWdlIG9mIHBsYW5uaW5nLlxyXG4gICAqIFRoaXMgdmFsdWUgU0hBTEwgYmUgdGhlIHNhbWUgYXMgc3BlY2lmaWVkIG9uIHRoZSByZWZlcmVuY2VkIEFwcG9pbnRtZW50IHNvIHRoYXQgdGhleSBjYW4gYmUgbWF0Y2hlZCwgYW5kIHN1YnNlcXVlbnRseSB1cGRhdGVkLlxyXG4gICAqL1xyXG4gIHBhcnRpY2lwYW50VHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIFBlcnNvbiwgTG9jYXRpb24vSGVhbHRoY2FyZVNlcnZpY2Ugb3IgRGV2aWNlIHRoYXQgaXMgcGFydGljaXBhdGluZyBpbiB0aGUgYXBwb2ludG1lbnQuXHJcbiAgICovXHJcbiAgYWN0b3I/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSB0aGUgc3RhdHVzIGNvbnRhaW5zIHRoZSBjb2RlIGVudGVyZWQtaW4tZXJyb3IgdGhhdCBtYXJrcyB0aGUgcGFydGljaXBhbnQgYXMgbm90IGN1cnJlbnRseSB2YWxpZC5cclxuICAgKi9cclxuICBwYXJ0aWNpcGFudFN0YXR1czogZmhpci5GaGlyQ29kZTxQYXJ0aWNpcGF0aW9uc3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFwcG9pbnRtZW50UmVzcG9uc2UucGFydGljaXBhbnRTdGF0dXNcclxuICAgKi9cclxuICBfcGFydGljaXBhbnRTdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgY29tbWVudCBpcyBwYXJ0aWN1bGFybHkgaW1wb3J0YW50IHdoZW4gdGhlIHJlc3BvbmRlciBpcyBkZWNsaW5pbmcsIHRlbnRhdGl2ZWx5IGFjY2VwdGluZyBvciByZXF1ZXN0aW5nIGFub3RoZXIgdGltZSB0byBpbmRpY2F0ZSB0aGUgcmVhc29ucyB3aHkuXHJcbiAgICovXHJcbiAgY29tbWVudD86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBcHBvaW50bWVudFJlc3BvbnNlLmNvbW1lbnRcclxuICAgKi9cclxuICBfY29tbWVudD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHJlcGx5IHRvIGFuIGFwcG9pbnRtZW50IHJlcXVlc3QgZm9yIGEgcGF0aWVudCBhbmQvb3IgcHJhY3RpdGlvbmVyKHMpLCBzdWNoIGFzIGEgY29uZmlybWF0aW9uIG9yIHJlamVjdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBcHBvaW50bWVudFJlc3BvbnNlIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdBcHBvaW50bWVudFJlc3BvbnNlJztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIkFwcG9pbnRtZW50UmVzcG9uc2VcIjtcclxuICAvKipcclxuICAgKiBUaGlzIHJlY29yZHMgaWRlbnRpZmllcnMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgYXBwb2ludG1lbnQgcmVzcG9uc2UgY29uY2VybiB0aGF0IGFyZSBkZWZpbmVkIGJ5IGJ1c2luZXNzIHByb2Nlc3NlcyBhbmQvIG9yIHVzZWQgdG8gcmVmZXIgdG8gaXQgd2hlbiBhIGRpcmVjdCBVUkwgcmVmZXJlbmNlIHRvIHRoZSByZXNvdXJjZSBpdHNlbGYgaXMgbm90IGFwcHJvcHJpYXRlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBBcHBvaW50bWVudCB0aGF0IHRoaXMgcmVzcG9uc2UgaXMgcmVwbHlpbmcgdG8uXHJcbiAgICovXHJcbiAgcHVibGljIGFwcG9pbnRtZW50OiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWF5IGJlIGVpdGhlciB0aGUgc2FtZSBhcyB0aGUgYXBwb2ludG1lbnQgcmVxdWVzdCB0byBjb25maXJtIHRoZSBkZXRhaWxzIG9mIHRoZSBhcHBvaW50bWVudCwgb3IgYWx0ZXJuYXRlbHkgYSBuZXcgdGltZSB0byByZXF1ZXN0IGEgcmUtbmVnb3RpYXRpb24gb2YgdGhlIHN0YXJ0IHRpbWUuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXJ0PzogZmhpci5GaGlySW5zdGFudHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBtYXkgYmUgZWl0aGVyIHRoZSBzYW1lIGFzIHRoZSBhcHBvaW50bWVudCByZXF1ZXN0IHRvIGNvbmZpcm0gdGhlIGRldGFpbHMgb2YgdGhlIGFwcG9pbnRtZW50LCBvciBhbHRlcm5hdGVseSBhIG5ldyB0aW1lIHRvIHJlcXVlc3QgYSByZS1uZWdvdGlhdGlvbiBvZiB0aGUgZW5kIHRpbWUuXHJcbiAgICovXHJcbiAgcHVibGljIGVuZD86IGZoaXIuRmhpckluc3RhbnR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSByb2xlIG9mIHRoZSBwYXJ0aWNpcGFudCBjYW4gYmUgdXNlZCB0byBkZWNsYXJlIHdoYXQgdGhlIGFjdG9yIHdpbGwgYmUgZG9pbmcgaW4gdGhlIHNjb3BlIG9mIHRoZSByZWZlcmVuY2VkIGFwcG9pbnRtZW50LlxyXG4gICAqIElmIHRoZSBhY3RvciBpcyBub3Qgc3BlY2lmaWVkLCB0aGVuIGl0IGlzIGV4cGVjdGVkIHRoYXQgdGhlIGFjdG9yIHdpbGwgYmUgZmlsbGVkIGluIGF0IGEgbGF0ZXIgc3RhZ2Ugb2YgcGxhbm5pbmcuXHJcbiAgICogVGhpcyB2YWx1ZSBTSEFMTCBiZSB0aGUgc2FtZSBhcyBzcGVjaWZpZWQgb24gdGhlIHJlZmVyZW5jZWQgQXBwb2ludG1lbnQgc28gdGhhdCB0aGV5IGNhbiBiZSBtYXRjaGVkLCBhbmQgc3Vic2VxdWVudGx5IHVwZGF0ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHBhcnRpY2lwYW50VHlwZTogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBBIFBlcnNvbiwgTG9jYXRpb24vSGVhbHRoY2FyZVNlcnZpY2Ugb3IgRGV2aWNlIHRoYXQgaXMgcGFydGljaXBhdGluZyBpbiB0aGUgYXBwb2ludG1lbnQuXHJcbiAgICovXHJcbiAgcHVibGljIGFjdG9yPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSB0aGUgc3RhdHVzIGNvbnRhaW5zIHRoZSBjb2RlIGVudGVyZWQtaW4tZXJyb3IgdGhhdCBtYXJrcyB0aGUgcGFydGljaXBhbnQgYXMgbm90IGN1cnJlbnRseSB2YWxpZC5cclxuICAgKi9cclxuICBwdWJsaWMgcGFydGljaXBhbnRTdGF0dXM6IGZoaXIuRmhpckNvZGU8UGFydGljaXBhdGlvbnN0YXR1c0NvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgY29tbWVudCBpcyBwYXJ0aWN1bGFybHkgaW1wb3J0YW50IHdoZW4gdGhlIHJlc3BvbmRlciBpcyBkZWNsaW5pbmcsIHRlbnRhdGl2ZWx5IGFjY2VwdGluZyBvciByZXF1ZXN0aW5nIGFub3RoZXIgdGltZSB0byBpbmRpY2F0ZSB0aGUgcmVhc29ucyB3aHkuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbW1lbnQ/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEFwcG9pbnRtZW50UmVzcG9uc2UgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxBcHBvaW50bWVudFJlc3BvbnNlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ0FwcG9pbnRtZW50UmVzcG9uc2UnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYXBwb2ludG1lbnQnXSkgeyB0aGlzLmFwcG9pbnRtZW50ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5hcHBvaW50bWVudCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmFwcG9pbnRtZW50ID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhcnQnXSkgeyB0aGlzLnN0YXJ0ID0gbmV3IGZoaXIuRmhpckluc3RhbnQoe3ZhbHVlOiBzb3VyY2Uuc3RhcnR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXJ0J10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhcnQpIHsgdGhpcy5zdGFydC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGFydCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXJ0ID0gbmV3IGZoaXIuRmhpckluc3RhbnQoc291cmNlLl9zdGFydCBhcyBQYXJ0aWFsPGZoaXIuRmhpckluc3RhbnRBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2VuZCddKSB7IHRoaXMuZW5kID0gbmV3IGZoaXIuRmhpckluc3RhbnQoe3ZhbHVlOiBzb3VyY2UuZW5kfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19lbmQnXSkge1xyXG4gICAgICBpZiAodGhpcy5lbmQpIHsgdGhpcy5lbmQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZW5kISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZW5kID0gbmV3IGZoaXIuRmhpckluc3RhbnQoc291cmNlLl9lbmQgYXMgUGFydGlhbDxmaGlyLkZoaXJJbnN0YW50QXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwYXJ0aWNpcGFudFR5cGUnXSkgeyB0aGlzLnBhcnRpY2lwYW50VHlwZSA9IHNvdXJjZS5wYXJ0aWNpcGFudFR5cGUubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5wYXJ0aWNpcGFudFR5cGUgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYWN0b3InXSkgeyB0aGlzLmFjdG9yID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5hY3Rvcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ3BhcnRpY2lwYW50U3RhdHVzJ10pIHsgdGhpcy5wYXJ0aWNpcGFudFN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPFBhcnRpY2lwYXRpb25zdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2UucGFydGljaXBhbnRTdGF0dXN9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucGFydGljaXBhbnRTdGF0dXMgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfcGFydGljaXBhbnRTdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5wYXJ0aWNpcGFudFN0YXR1cykgeyB0aGlzLnBhcnRpY2lwYW50U3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3BhcnRpY2lwYW50U3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucGFydGljaXBhbnRTdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxQYXJ0aWNpcGF0aW9uc3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fcGFydGljaXBhbnRTdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NvbW1lbnQnXSkgeyB0aGlzLmNvbW1lbnQgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmNvbW1lbnR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NvbW1lbnQnXSkge1xyXG4gICAgICBpZiAodGhpcy5jb21tZW50KSB7IHRoaXMuY29tbWVudC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jb21tZW50ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY29tbWVudCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9jb21tZW50IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnQXBwb2ludG1lbnRSZXNwb25zZScgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2lkZW50aWZpZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ2FwcG9pbnRtZW50JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdzdGFydCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZW5kJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdwYXJ0aWNpcGFudFR5cGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2FjdG9yJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTVigncGFydGljaXBhbnRTdGF0dXMnLGV4cCwnUGFydGljaXBhdGlvbnN0YXR1cycsUGFydGljaXBhdGlvbnN0YXR1c1ZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdjb21tZW50JyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==