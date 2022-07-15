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
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'AppointmentResponse';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vRS('appointment', exp);
        this.vOS('start', exp);
        this.vOS('end', exp);
        this.vOA('participantType', exp);
        this.vOS('actor', exp);
        this.vRSV('participantStatus', exp, 'Participantstatus', ParticipantstatusVsValidation, 'r');
        this.vOS('comment', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
AppointmentResponse._fts_dataType = 'AppointmentResponse';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwb2ludG1lbnRSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQXBwb2ludG1lbnRSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxxQ0FBcUM7QUFFckMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBMkRsRzs7R0FFRztBQUNILE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxJQUFJLENBQUMsY0FBYztJQXlDMUQ7O09BRUc7SUFDSCxZQUFZLFNBQTBDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ2hHLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxxQkFBcUIsQ0FBQztRQUMxQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDaEc7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQUU7YUFDcEY7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUFFO1FBQ2pDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElB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SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQTtTQUFFO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBQyxHQUFHLEVBQUMsbUJBQW1CLEVBQUMsNkJBQTZCLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUEzRkQ7O0dBRUc7QUFDNkIsaUNBQWEsR0FBVSxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMi5jb3JlIHZlcnNpb246IDEuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogQXBwb2ludG1lbnRSZXNwb25zZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUGFydGljaXBhbnRzdGF0dXNDb2RlcywgIFBhcnRpY2lwYW50c3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1BhcnRpY2lwYW50c3RhdHVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFBhcnRpY2lwYW50c3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9QYXJ0aWNpcGFudHN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBBcHBvaW50bWVudFJlc3BvbnNlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEFwcG9pbnRtZW50UmVzcG9uc2VBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJBcHBvaW50bWVudFJlc3BvbnNlXCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgcmVjb3JkcyBpZGVudGlmaWVycyBhc3NvY2lhdGVkIHdpdGggdGhpcyBhcHBvaW50bWVudCByZXNwb25zZSBjb25jZXJuIHRoYXQgYXJlIGRlZmluZWQgYnkgYnVzaW5lc3MgcHJvY2Vzc2VzIGFuZC8gb3IgdXNlZCB0byByZWZlciB0byBpdCB3aGVuIGEgZGlyZWN0IFVSTCByZWZlcmVuY2UgdG8gdGhlIHJlc291cmNlIGl0c2VsZiBpcyBub3QgYXBwcm9wcmlhdGUuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQXBwb2ludG1lbnQgdGhhdCB0aGlzIHJlc3BvbnNlIGlzIHJlcGx5aW5nIHRvLlxyXG4gICAqL1xyXG4gIGFwcG9pbnRtZW50OiBmaGlyLlJlZmVyZW5jZUFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBEYXRlL1RpbWUgdGhhdCB0aGUgYXBwb2ludG1lbnQgaXMgdG8gdGFrZSBwbGFjZSwgb3IgcmVxdWVzdGVkIG5ldyBzdGFydCB0aW1lLlxyXG4gICAqL1xyXG4gIHN0YXJ0PzogZmhpci5GaGlySW5zdGFudHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBcHBvaW50bWVudFJlc3BvbnNlLnN0YXJ0XHJcbiAgICovXHJcbiAgX3N0YXJ0PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGlzIG1heSBiZSBlaXRoZXIgdGhlIHNhbWUgYXMgdGhlIGFwcG9pbnRtZW50IHJlcXVlc3QgdG8gY29uZmlybSB0aGUgZGV0YWlscyBvZiB0aGUgYXBwb2ludG1lbnQsIG9yIGFsdGVybmF0ZWx5IGEgbmV3IHRpbWUgdG8gcmVxdWVzdCBhIHJlLW5lZ290aWF0aW9uIG9mIHRoZSBlbmQgdGltZS5cclxuICAgKi9cclxuICBlbmQ/OiBmaGlyLkZoaXJJbnN0YW50fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFwcG9pbnRtZW50UmVzcG9uc2UuZW5kXHJcbiAgICovXHJcbiAgX2VuZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogUm9sZSBvZiBwYXJ0aWNpcGFudCBpbiB0aGUgYXBwb2ludG1lbnQuXHJcbiAgICovXHJcbiAgcGFydGljaXBhbnRUeXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgUGVyc29uLCBMb2NhdGlvbi9IZWFsdGhjYXJlU2VydmljZSBvciBEZXZpY2UgdGhhdCBpcyBwYXJ0aWNpcGF0aW5nIGluIHRoZSBhcHBvaW50bWVudC5cclxuICAgKi9cclxuICBhY3Rvcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUGFydGljaXBhdGlvbiBzdGF0dXMgb2YgdGhlIHBhcnRpY2lwYW50LiBXaGVuIHRoZSBzdGF0dXMgaXMgZGVjbGluZWQgb3IgdGVudGF0aXZlIGlmIHRoZSBzdGFydC9lbmQgdGltZXMgYXJlIGRpZmZlcmVudCB0byB0aGUgYXBwb2ludG1lbnQsIHRoZW4gdGhlc2UgdGltZXMgc2hvdWxkIGJlIGludGVycHJldGVkIGFzIGEgcmVxdWVzdGVkIHRpbWUgY2hhbmdlLiBXaGVuIHRoZSBzdGF0dXMgaXMgYWNjZXB0ZWQsIHRoZSB0aW1lcyBjYW4gZWl0aGVyIGJlIHRoZSB0aW1lIG9mIHRoZSBhcHBvaW50bWVudCAoYXMgYSBjb25maXJtYXRpb24gb2YgdGhlIHRpbWUpIG9yIGNhbiBiZSBlbXB0eS5cclxuICAgKi9cclxuICBwYXJ0aWNpcGFudFN0YXR1czogZmhpci5GaGlyQ29kZTxQYXJ0aWNpcGFudHN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBcHBvaW50bWVudFJlc3BvbnNlLnBhcnRpY2lwYW50U3RhdHVzXHJcbiAgICovXHJcbiAgX3BhcnRpY2lwYW50U3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIGNvbW1lbnRzIGFib3V0IHRoZSBhcHBvaW50bWVudC5cclxuICAgKi9cclxuICBjb21tZW50PzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFwcG9pbnRtZW50UmVzcG9uc2UuY29tbWVudFxyXG4gICAqL1xyXG4gIF9jb21tZW50PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgcmVwbHkgdG8gYW4gYXBwb2ludG1lbnQgcmVxdWVzdCBmb3IgYSBwYXRpZW50IGFuZC9vciBwcmFjdGl0aW9uZXIocyksIHN1Y2ggYXMgYSBjb25maXJtYXRpb24gb3IgcmVqZWN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFwcG9pbnRtZW50UmVzcG9uc2UgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0FwcG9pbnRtZW50UmVzcG9uc2UnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiQXBwb2ludG1lbnRSZXNwb25zZVwiO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgcmVjb3JkcyBpZGVudGlmaWVycyBhc3NvY2lhdGVkIHdpdGggdGhpcyBhcHBvaW50bWVudCByZXNwb25zZSBjb25jZXJuIHRoYXQgYXJlIGRlZmluZWQgYnkgYnVzaW5lc3MgcHJvY2Vzc2VzIGFuZC8gb3IgdXNlZCB0byByZWZlciB0byBpdCB3aGVuIGEgZGlyZWN0IFVSTCByZWZlcmVuY2UgdG8gdGhlIHJlc291cmNlIGl0c2VsZiBpcyBub3QgYXBwcm9wcmlhdGUuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI6IGZoaXIuSWRlbnRpZmllcltdO1xyXG4gIC8qKlxyXG4gICAqIEFwcG9pbnRtZW50IHRoYXQgdGhpcyByZXNwb25zZSBpcyByZXBseWluZyB0by5cclxuICAgKi9cclxuICBwdWJsaWMgYXBwb2ludG1lbnQ6IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRGF0ZS9UaW1lIHRoYXQgdGhlIGFwcG9pbnRtZW50IGlzIHRvIHRha2UgcGxhY2UsIG9yIHJlcXVlc3RlZCBuZXcgc3RhcnQgdGltZS5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhcnQ/OiBmaGlyLkZoaXJJbnN0YW50fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIG1heSBiZSBlaXRoZXIgdGhlIHNhbWUgYXMgdGhlIGFwcG9pbnRtZW50IHJlcXVlc3QgdG8gY29uZmlybSB0aGUgZGV0YWlscyBvZiB0aGUgYXBwb2ludG1lbnQsIG9yIGFsdGVybmF0ZWx5IGEgbmV3IHRpbWUgdG8gcmVxdWVzdCBhIHJlLW5lZ290aWF0aW9uIG9mIHRoZSBlbmQgdGltZS5cclxuICAgKi9cclxuICBwdWJsaWMgZW5kPzogZmhpci5GaGlySW5zdGFudHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUm9sZSBvZiBwYXJ0aWNpcGFudCBpbiB0aGUgYXBwb2ludG1lbnQuXHJcbiAgICovXHJcbiAgcHVibGljIHBhcnRpY2lwYW50VHlwZTogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBBIFBlcnNvbiwgTG9jYXRpb24vSGVhbHRoY2FyZVNlcnZpY2Ugb3IgRGV2aWNlIHRoYXQgaXMgcGFydGljaXBhdGluZyBpbiB0aGUgYXBwb2ludG1lbnQuXHJcbiAgICovXHJcbiAgcHVibGljIGFjdG9yPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFBhcnRpY2lwYXRpb24gc3RhdHVzIG9mIHRoZSBwYXJ0aWNpcGFudC4gV2hlbiB0aGUgc3RhdHVzIGlzIGRlY2xpbmVkIG9yIHRlbnRhdGl2ZSBpZiB0aGUgc3RhcnQvZW5kIHRpbWVzIGFyZSBkaWZmZXJlbnQgdG8gdGhlIGFwcG9pbnRtZW50LCB0aGVuIHRoZXNlIHRpbWVzIHNob3VsZCBiZSBpbnRlcnByZXRlZCBhcyBhIHJlcXVlc3RlZCB0aW1lIGNoYW5nZS4gV2hlbiB0aGUgc3RhdHVzIGlzIGFjY2VwdGVkLCB0aGUgdGltZXMgY2FuIGVpdGhlciBiZSB0aGUgdGltZSBvZiB0aGUgYXBwb2ludG1lbnQgKGFzIGEgY29uZmlybWF0aW9uIG9mIHRoZSB0aW1lKSBvciBjYW4gYmUgZW1wdHkuXHJcbiAgICovXHJcbiAgcHVibGljIHBhcnRpY2lwYW50U3RhdHVzOiBmaGlyLkZoaXJDb2RlPFBhcnRpY2lwYW50c3RhdHVzQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBjb21tZW50cyBhYm91dCB0aGUgYXBwb2ludG1lbnQuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbW1lbnQ/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEFwcG9pbnRtZW50UmVzcG9uc2UgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxBcHBvaW50bWVudFJlc3BvbnNlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ0FwcG9pbnRtZW50UmVzcG9uc2UnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYXBwb2ludG1lbnQnXSkgeyB0aGlzLmFwcG9pbnRtZW50ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5hcHBvaW50bWVudCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmFwcG9pbnRtZW50ID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhcnQnXSkgeyB0aGlzLnN0YXJ0ID0gbmV3IGZoaXIuRmhpckluc3RhbnQoe3ZhbHVlOiBzb3VyY2Uuc3RhcnR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXJ0J10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhcnQpIHsgdGhpcy5zdGFydC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGFydCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXJ0ID0gbmV3IGZoaXIuRmhpckluc3RhbnQoc291cmNlLl9zdGFydCBhcyBQYXJ0aWFsPGZoaXIuRmhpckluc3RhbnRBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2VuZCddKSB7IHRoaXMuZW5kID0gbmV3IGZoaXIuRmhpckluc3RhbnQoe3ZhbHVlOiBzb3VyY2UuZW5kfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19lbmQnXSkge1xyXG4gICAgICBpZiAodGhpcy5lbmQpIHsgdGhpcy5lbmQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZW5kISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZW5kID0gbmV3IGZoaXIuRmhpckluc3RhbnQoc291cmNlLl9lbmQgYXMgUGFydGlhbDxmaGlyLkZoaXJJbnN0YW50QXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwYXJ0aWNpcGFudFR5cGUnXSkgeyB0aGlzLnBhcnRpY2lwYW50VHlwZSA9IHNvdXJjZS5wYXJ0aWNpcGFudFR5cGUubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5wYXJ0aWNpcGFudFR5cGUgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYWN0b3InXSkgeyB0aGlzLmFjdG9yID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5hY3Rvcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ3BhcnRpY2lwYW50U3RhdHVzJ10pIHsgdGhpcy5wYXJ0aWNpcGFudFN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPFBhcnRpY2lwYW50c3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnBhcnRpY2lwYW50U3RhdHVzfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnBhcnRpY2lwYW50U3RhdHVzID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3BhcnRpY2lwYW50U3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMucGFydGljaXBhbnRTdGF0dXMpIHsgdGhpcy5wYXJ0aWNpcGFudFN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9wYXJ0aWNpcGFudFN0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnBhcnRpY2lwYW50U3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8UGFydGljaXBhbnRzdGF0dXNDb2RlVHlwZT4oc291cmNlLl9wYXJ0aWNpcGFudFN0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnY29tbWVudCddKSB7IHRoaXMuY29tbWVudCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuY29tbWVudH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfY29tbWVudCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbW1lbnQpIHsgdGhpcy5jb21tZW50LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NvbW1lbnQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jb21tZW50ID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2NvbW1lbnQgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdBcHBvaW50bWVudFJlc3BvbnNlJyB9XHJcbiAgICB0aGlzLnZSUygncmVzb3VyY2VUeXBlJyxleHApXHJcbiAgICB0aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKVxyXG4gICAgdGhpcy52UlMoJ2FwcG9pbnRtZW50JyxleHApXHJcbiAgICB0aGlzLnZPUygnc3RhcnQnLGV4cClcclxuICAgIHRoaXMudk9TKCdlbmQnLGV4cClcclxuICAgIHRoaXMudk9BKCdwYXJ0aWNpcGFudFR5cGUnLGV4cClcclxuICAgIHRoaXMudk9TKCdhY3RvcicsZXhwKVxyXG4gICAgdGhpcy52UlNWKCdwYXJ0aWNpcGFudFN0YXR1cycsZXhwLCdQYXJ0aWNpcGFudHN0YXR1cycsUGFydGljaXBhbnRzdGF0dXNWc1ZhbGlkYXRpb24sJ3InKVxyXG4gICAgdGhpcy52T1MoJ2NvbW1lbnQnLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==