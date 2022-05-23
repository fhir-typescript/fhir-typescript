// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Slot
import * as fhir from '../fhir.js';
// @ts-ignore
import { C80PracticeCodesCodings, } from '../fhirValueSets/C80PracticeCodesCodings.js';
// @ts-ignore
import { V20276Codings, } from '../fhirValueSets/V20276Codings.js';
// @ts-ignore
import { SlotstatusCodes } from '../fhirValueSets/SlotstatusCodes.js';
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
        if (source['start']) {
            this.start = new fhir.FhirInstant({ value: source.start });
        }
        else {
            this.start = null;
        }
        if (source['end']) {
            this.end = new fhir.FhirInstant({ value: source.end });
        }
        else {
            this.end = null;
        }
        if (source['overbooked']) {
            this.overbooked = new fhir.FhirBoolean({ value: source.overbooked });
        }
        if (source['comment']) {
            this.comment = new fhir.FhirString({ value: source.comment });
        }
    }
    /**
     * Preferred-bound Value Set for specialty (Slot.specialty)
     */
    static get specialtyPreferredCodings() {
        return C80PracticeCodesCodings;
    }
    /**
     * Preferred-bound Value Set for appointmentType (Slot.appointmentType)
     */
    static get appointmentTypePreferredCodings() {
        return V20276Codings;
    }
    /**
     * Required-bound Value Set for status (Slot.status)
     */
    static get statusRequiredCodes() {
        return SlotstatusCodes;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        let issues = super.doModelValidation();
        if (!this['resourceType']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"Slot" fhir: Slot.resourceType:"Slot"' });
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["serviceCategory"]) {
            this.serviceCategory.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["serviceType"]) {
            this.serviceType.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["specialty"]) {
            this.specialty.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["appointmentType"]) {
            issues.push(...this.appointmentType.doModelValidation());
        }
        if (!this['schedule']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property schedule:fhir.Reference fhir: Slot.schedule:Reference' });
        }
        if (this["schedule"]) {
            issues.push(...this.schedule.doModelValidation());
        }
        if (!this['status']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status:fhir.FhirCode<SlotstatusCodeType> fhir: Slot.status:code' });
        }
        if (this['status'] && (!Object.values(SlotstatusCodes).includes(this.status))) {
            issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status:fhir.FhirCode<SlotstatusCodeType> fhir: Slot.status:code Required binding to: Slotstatus' });
        }
        if (this["status"]) {
            issues.push(...this.status.doModelValidation());
        }
        if (!this['start']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property start:fhir.FhirInstant fhir: Slot.start:instant' });
        }
        if (this["start"]) {
            issues.push(...this.start.doModelValidation());
        }
        if (!this['end']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property end:fhir.FhirInstant fhir: Slot.end:instant' });
        }
        if (this["end"]) {
            issues.push(...this.end.doModelValidation());
        }
        if (this["overbooked"]) {
            issues.push(...this.overbooked.doModelValidation());
        }
        if (this["comment"]) {
            issues.push(...this.comment.doModelValidation());
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Slot._fts_dataType = 'Slot';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xvdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvU2xvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxzQkFBc0I7QUFFdEIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFVbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSx1QkFBdUIsR0FBOEIsTUFBTSw2Q0FBNkMsQ0FBQztBQUdsSCxhQUFhO0FBQ2IsT0FBTyxFQUFFLGFBQWEsR0FBb0IsTUFBTSxtQ0FBbUMsQ0FBQztBQUtwRixhQUFhO0FBQ2IsT0FBTyxFQUFFLGVBQWUsRUFBdUIsTUFBTSxxQ0FBcUMsQ0FBQztBQXVEM0Y7O0dBRUc7QUFDSCxNQUFNLE9BQU8sSUFBSyxTQUFRLElBQUksQ0FBQyxjQUFjO0lBcUQzQzs7T0FFRztJQUNILFlBQVksU0FBMkIsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDakYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDaEc7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENB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QUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLDJFQUEyRSxFQUFFLENBQUMsQ0FBQztTQUNoSjtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSx1RUFBdUUsRUFBRSxDQUFDLENBQUM7U0FDNUk7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xFLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDaEYsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUMxRSxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQW5JRDs7R0FFRztBQUM2QixrQkFBYSxHQUFVLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogU2xvdFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU2VydmljZUNhdGVnb3J5Q29kaW5ncywgU2VydmljZUNhdGVnb3J5Q29kaW5nVHlwZSx9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU2VydmljZUNhdGVnb3J5Q29kaW5ncy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU2VydmljZUNhdGVnb3J5Q29kZXMsICBTZXJ2aWNlQ2F0ZWdvcnlDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU2VydmljZUNhdGVnb3J5Q29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFNlcnZpY2VUeXBlQ29kaW5ncywgU2VydmljZVR5cGVDb2RpbmdUeXBlLH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TZXJ2aWNlVHlwZUNvZGluZ3MuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFNlcnZpY2VUeXBlQ29kZXMsICBTZXJ2aWNlVHlwZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TZXJ2aWNlVHlwZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBDODBQcmFjdGljZUNvZGVzQ29kaW5ncywgQzgwUHJhY3RpY2VDb2Rlc0NvZGluZ1R5cGUsfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0M4MFByYWN0aWNlQ29kZXNDb2RpbmdzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBDODBQcmFjdGljZUNvZGVzQ29kZXMsICBDODBQcmFjdGljZUNvZGVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0M4MFByYWN0aWNlQ29kZXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgVjIwMjc2Q29kaW5ncywgVjIwMjc2Q29kaW5nVHlwZSx9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvVjIwMjc2Q29kaW5ncy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgVjIwMjc2Q29kZXMsICBWMjAyNzZDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvVjIwMjc2Q29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFNsb3RzdGF0dXNDb2RpbmdzLCBTbG90c3RhdHVzQ29kaW5nVHlwZSx9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU2xvdHN0YXR1c0NvZGluZ3MuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFNsb3RzdGF0dXNDb2RlcywgIFNsb3RzdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU2xvdHN0YXR1c0NvZGVzLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFNsb3QgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdEFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIlNsb3RcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgSWRzIGZvciB0aGlzIGl0ZW0uXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBicm9hZCBjYXRlZ29yaXphdGlvbiBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHRvIGJlIHBlcmZvcm1lZCBkdXJpbmcgdGhpcyBhcHBvaW50bWVudC5cclxuICAgKi9cclxuICBzZXJ2aWNlQ2F0ZWdvcnk/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgb2YgYXBwb2ludG1lbnRzIHRoYXQgY2FuIGJlIGJvb2tlZCBpbnRvIHRoaXMgc2xvdCAoaWRlYWxseSB0aGlzIHdvdWxkIGJlIGFuIGlkZW50aWZpYWJsZSBzZXJ2aWNlIC0gd2hpY2ggaXMgYXQgYSBsb2NhdGlvbiwgcmF0aGVyIHRoYW4gdGhlIGxvY2F0aW9uIGl0c2VsZikuIElmIHByb3ZpZGVkIHRoZW4gdGhpcyBvdmVycmlkZXMgdGhlIHZhbHVlIHByb3ZpZGVkIG9uIHRoZSBhdmFpbGFiaWxpdHkgcmVzb3VyY2UuXHJcbiAgICovXHJcbiAgc2VydmljZVR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHNwZWNpYWx0eSBvZiBhIHByYWN0aXRpb25lciB0aGF0IHdvdWxkIGJlIHJlcXVpcmVkIHRvIHBlcmZvcm0gdGhlIHNlcnZpY2UgcmVxdWVzdGVkIGluIHRoaXMgYXBwb2ludG1lbnQuXHJcbiAgICovXHJcbiAgc3BlY2lhbHR5PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzdHlsZSBvZiBhcHBvaW50bWVudCBvciBwYXRpZW50IHRoYXQgbWF5IGJlIGJvb2tlZCBpbiB0aGUgc2xvdCAobm90IHNlcnZpY2UgdHlwZSkuXHJcbiAgICovXHJcbiAgYXBwb2ludG1lbnRUeXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgc2NoZWR1bGUgcmVzb3VyY2UgdGhhdCB0aGlzIHNsb3QgZGVmaW5lcyBhbiBpbnRlcnZhbCBvZiBzdGF0dXMgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgc2NoZWR1bGU6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIGJ1c3kgfCBmcmVlIHwgYnVzeS11bmF2YWlsYWJsZSB8IGJ1c3ktdGVudGF0aXZlIHwgZW50ZXJlZC1pbi1lcnJvci5cclxuICAgKi9cclxuICBzdGF0dXM6IGZoaXIuRmhpckNvZGU8U2xvdHN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERhdGUvVGltZSB0aGF0IHRoZSBzbG90IGlzIHRvIGJlZ2luLlxyXG4gICAqL1xyXG4gIHN0YXJ0OiBmaGlyLkZoaXJJbnN0YW50fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGF0ZS9UaW1lIHRoYXQgdGhlIHNsb3QgaXMgdG8gY29uY2x1ZGUuXHJcbiAgICovXHJcbiAgZW5kOiBmaGlyLkZoaXJJbnN0YW50fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBzbG90IGhhcyBhbHJlYWR5IGJlZW4gb3ZlcmJvb2tlZCwgYXBwb2ludG1lbnRzIGFyZSB1bmxpa2VseSB0byBiZSBhY2NlcHRlZCBmb3IgdGhpcyB0aW1lLlxyXG4gICAqL1xyXG4gIG92ZXJib29rZWQ/OiBmaGlyLkZoaXJCb29sZWFufGJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIENvbW1lbnRzIG9uIHRoZSBzbG90IHRvIGRlc2NyaWJlIGFueSBleHRlbmRlZCBpbmZvcm1hdGlvbi4gU3VjaCBhcyBjdXN0b20gY29uc3RyYWludHMgb24gdGhlIHNsb3QuXHJcbiAgICovXHJcbiAgY29tbWVudD86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBzbG90IG9mIHRpbWUgb24gYSBzY2hlZHVsZSB0aGF0IG1heSBiZSBhdmFpbGFibGUgZm9yIGJvb2tpbmcgYXBwb2ludG1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNsb3QgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1Nsb3QnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiU2xvdFwiO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIElkcyBmb3IgdGhpcyBpdGVtLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBBIGJyb2FkIGNhdGVnb3JpemF0aW9uIG9mIHRoZSBzZXJ2aWNlIHRoYXQgaXMgdG8gYmUgcGVyZm9ybWVkIGR1cmluZyB0aGlzIGFwcG9pbnRtZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXJ2aWNlQ2F0ZWdvcnk6IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgb2YgYXBwb2ludG1lbnRzIHRoYXQgY2FuIGJlIGJvb2tlZCBpbnRvIHRoaXMgc2xvdCAoaWRlYWxseSB0aGlzIHdvdWxkIGJlIGFuIGlkZW50aWZpYWJsZSBzZXJ2aWNlIC0gd2hpY2ggaXMgYXQgYSBsb2NhdGlvbiwgcmF0aGVyIHRoYW4gdGhlIGxvY2F0aW9uIGl0c2VsZikuIElmIHByb3ZpZGVkIHRoZW4gdGhpcyBvdmVycmlkZXMgdGhlIHZhbHVlIHByb3ZpZGVkIG9uIHRoZSBhdmFpbGFiaWxpdHkgcmVzb3VyY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHNlcnZpY2VUeXBlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzcGVjaWFsdHkgb2YgYSBwcmFjdGl0aW9uZXIgdGhhdCB3b3VsZCBiZSByZXF1aXJlZCB0byBwZXJmb3JtIHRoZSBzZXJ2aWNlIHJlcXVlc3RlZCBpbiB0aGlzIGFwcG9pbnRtZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzcGVjaWFsdHk6IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogVGhlIHN0eWxlIG9mIGFwcG9pbnRtZW50IG9yIHBhdGllbnQgdGhhdCBtYXkgYmUgYm9va2VkIGluIHRoZSBzbG90IChub3Qgc2VydmljZSB0eXBlKS5cclxuICAgKi9cclxuICBwdWJsaWMgYXBwb2ludG1lbnRUeXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzY2hlZHVsZSByZXNvdXJjZSB0aGF0IHRoaXMgc2xvdCBkZWZpbmVzIGFuIGludGVydmFsIG9mIHN0YXR1cyBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgc2NoZWR1bGU6IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogYnVzeSB8IGZyZWUgfCBidXN5LXVuYXZhaWxhYmxlIHwgYnVzeS10ZW50YXRpdmUgfCBlbnRlcmVkLWluLWVycm9yLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM6IGZoaXIuRmhpckNvZGU8U2xvdHN0YXR1c0NvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIERhdGUvVGltZSB0aGF0IHRoZSBzbG90IGlzIHRvIGJlZ2luLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGFydDogZmhpci5GaGlySW5zdGFudHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIERhdGUvVGltZSB0aGF0IHRoZSBzbG90IGlzIHRvIGNvbmNsdWRlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBlbmQ6IGZoaXIuRmhpckluc3RhbnR8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGlzIHNsb3QgaGFzIGFscmVhZHkgYmVlbiBvdmVyYm9va2VkLCBhcHBvaW50bWVudHMgYXJlIHVubGlrZWx5IHRvIGJlIGFjY2VwdGVkIGZvciB0aGlzIHRpbWUuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJib29rZWQ/OiBmaGlyLkZoaXJCb29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBDb21tZW50cyBvbiB0aGUgc2xvdCB0byBkZXNjcmliZSBhbnkgZXh0ZW5kZWQgaW5mb3JtYXRpb24uIFN1Y2ggYXMgY3VzdG9tIGNvbnN0cmFpbnRzIG9uIHRoZSBzbG90LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb21tZW50PzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBTbG90IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8U2xvdEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdTbG90JztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3NlcnZpY2VDYXRlZ29yeSddKSB7IHRoaXMuc2VydmljZUNhdGVnb3J5ID0gc291cmNlLnNlcnZpY2VDYXRlZ29yeS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnNlcnZpY2VDYXRlZ29yeSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydzZXJ2aWNlVHlwZSddKSB7IHRoaXMuc2VydmljZVR5cGUgPSBzb3VyY2Uuc2VydmljZVR5cGUubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zZXJ2aWNlVHlwZSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydzcGVjaWFsdHknXSkgeyB0aGlzLnNwZWNpYWx0eSA9IHNvdXJjZS5zcGVjaWFsdHkubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zcGVjaWFsdHkgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYXBwb2ludG1lbnRUeXBlJ10pIHsgdGhpcy5hcHBvaW50bWVudFR5cGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmFwcG9pbnRtZW50VHlwZSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3NjaGVkdWxlJ10pIHsgdGhpcy5zY2hlZHVsZSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uuc2NoZWR1bGUpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zY2hlZHVsZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8U2xvdHN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhcnQnXSkgeyB0aGlzLnN0YXJ0ID0gbmV3IGZoaXIuRmhpckluc3RhbnQoe3ZhbHVlOiBzb3VyY2Uuc3RhcnR9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3RhcnQgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydlbmQnXSkgeyB0aGlzLmVuZCA9IG5ldyBmaGlyLkZoaXJJbnN0YW50KHt2YWx1ZTogc291cmNlLmVuZH0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5lbmQgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydvdmVyYm9va2VkJ10pIHsgdGhpcy5vdmVyYm9va2VkID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oe3ZhbHVlOiBzb3VyY2Uub3ZlcmJvb2tlZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydjb21tZW50J10pIHsgdGhpcy5jb21tZW50ID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5jb21tZW50fSk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogUHJlZmVycmVkLWJvdW5kIFZhbHVlIFNldCBmb3Igc3BlY2lhbHR5IChTbG90LnNwZWNpYWx0eSlcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGdldCBzcGVjaWFsdHlQcmVmZXJyZWRDb2RpbmdzKCkge1xyXG4gICAgcmV0dXJuIEM4MFByYWN0aWNlQ29kZXNDb2RpbmdzO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBQcmVmZXJyZWQtYm91bmQgVmFsdWUgU2V0IGZvciBhcHBvaW50bWVudFR5cGUgKFNsb3QuYXBwb2ludG1lbnRUeXBlKVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGFwcG9pbnRtZW50VHlwZVByZWZlcnJlZENvZGluZ3MoKSB7XHJcbiAgICByZXR1cm4gVjIwMjc2Q29kaW5ncztcclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmVxdWlyZWQtYm91bmQgVmFsdWUgU2V0IGZvciBzdGF0dXMgKFNsb3Quc3RhdHVzKVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHN0YXR1c1JlcXVpcmVkQ29kZXMoKSB7XHJcbiAgICByZXR1cm4gU2xvdHN0YXR1c0NvZGVzO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzWydyZXNvdXJjZVR5cGUnXSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAncmVxdWlyZWQnLCBkaWFnbm9zdGljczogJ01pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgcmVzb3VyY2VUeXBlOlwiU2xvdFwiIGZoaXI6IFNsb3QucmVzb3VyY2VUeXBlOlwiU2xvdFwiJyB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzW1wiaWRlbnRpZmllclwiXSkgeyB0aGlzLmlkZW50aWZpZXIuZm9yRWFjaCgoeCkgPT4geyBpc3N1ZXMucHVzaCguLi54LmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9KSB9XHJcbiAgICBpZiAodGhpc1tcInNlcnZpY2VDYXRlZ29yeVwiXSkgeyB0aGlzLnNlcnZpY2VDYXRlZ29yeS5mb3JFYWNoKCh4KSA9PiB7IGlzc3Vlcy5wdXNoKC4uLnguZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH0pIH1cclxuICAgIGlmICh0aGlzW1wic2VydmljZVR5cGVcIl0pIHsgdGhpcy5zZXJ2aWNlVHlwZS5mb3JFYWNoKCh4KSA9PiB7IGlzc3Vlcy5wdXNoKC4uLnguZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH0pIH1cclxuICAgIGlmICh0aGlzW1wic3BlY2lhbHR5XCJdKSB7IHRoaXMuc3BlY2lhbHR5LmZvckVhY2goKHgpID0+IHsgaXNzdWVzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbigpKTsgfSkgfVxyXG4gICAgaWYgKHRoaXNbXCJhcHBvaW50bWVudFR5cGVcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5hcHBvaW50bWVudFR5cGUuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICghdGhpc1snc2NoZWR1bGUnXSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAncmVxdWlyZWQnLCBkaWFnbm9zdGljczogJ01pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgc2NoZWR1bGU6Zmhpci5SZWZlcmVuY2UgZmhpcjogU2xvdC5zY2hlZHVsZTpSZWZlcmVuY2UnIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXNbXCJzY2hlZHVsZVwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLnNjaGVkdWxlLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICBpZiAoIXRoaXNbJ3N0YXR1cyddKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdyZXF1aXJlZCcsIGRpYWdub3N0aWNzOiAnTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSBzdGF0dXM6Zmhpci5GaGlyQ29kZTxTbG90c3RhdHVzQ29kZVR5cGU+IGZoaXI6IFNsb3Quc3RhdHVzOmNvZGUnIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXNbJ3N0YXR1cyddICYmICghT2JqZWN0LnZhbHVlcyhTbG90c3RhdHVzQ29kZXMpLmluY2x1ZGVzKHRoaXMuc3RhdHVzIGFzIGFueSkpKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdjb2RlLWludmFsaWQnLCBkaWFnbm9zdGljczogJ0ludmFsaWQgY29kZSBwcm9wZXJ0eSBzdGF0dXM6Zmhpci5GaGlyQ29kZTxTbG90c3RhdHVzQ29kZVR5cGU+IGZoaXI6IFNsb3Quc3RhdHVzOmNvZGUgUmVxdWlyZWQgYmluZGluZyB0bzogU2xvdHN0YXR1cycgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1tcInN0YXR1c1wiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLnN0YXR1cy5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKCF0aGlzWydzdGFydCddKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdyZXF1aXJlZCcsIGRpYWdub3N0aWNzOiAnTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSBzdGFydDpmaGlyLkZoaXJJbnN0YW50IGZoaXI6IFNsb3Quc3RhcnQ6aW5zdGFudCcgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1tcInN0YXJ0XCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuc3RhcnQuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICghdGhpc1snZW5kJ10pIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ3JlcXVpcmVkJywgZGlhZ25vc3RpY3M6ICdNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5IGVuZDpmaGlyLkZoaXJJbnN0YW50IGZoaXI6IFNsb3QuZW5kOmluc3RhbnQnIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXNbXCJlbmRcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5lbmQuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICh0aGlzW1wib3ZlcmJvb2tlZFwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLm92ZXJib29rZWQuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICh0aGlzW1wiY29tbWVudFwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLmNvbW1lbnQuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==