// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: ResearchSubject
import * as fhir from '../fhir.js';
// @ts-ignore
import { ResearchSubjectStatusVsValidation } from '../fhirValueSets/ResearchSubjectStatusVsValidation.js';
/**
 * A physical entity which is the primary unit of operational and/or administrative interest in a study.
 */
export class ResearchSubject extends fhir.DomainResource {
    /**
     * Default constructor for ResearchSubject - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'ResearchSubject';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options));
        }
        else {
            this.identifier = [];
        }
        if (source['status'] !== undefined) {
            this.status = new fhir.FhirCode({ value: source.status }, options);
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status, options);
            }
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period, options);
        }
        if (source['study']) {
            this.study = new fhir.Reference(source.study, options);
        }
        else {
            this.study = null;
        }
        if (source['individual']) {
            this.individual = new fhir.Reference(source.individual, options);
        }
        else {
            this.individual = null;
        }
        if (source['assignedArm'] !== undefined) {
            this.assignedArm = new fhir.FhirString({ value: source.assignedArm }, options);
        }
        if (source['_assignedArm']) {
            if (this.assignedArm) {
                this.assignedArm.addExtendedProperties(source._assignedArm);
            }
            else {
                this.assignedArm = new fhir.FhirString(source._assignedArm, options);
            }
        }
        if (source['actualArm'] !== undefined) {
            this.actualArm = new fhir.FhirString({ value: source.actualArm }, options);
        }
        if (source['_actualArm']) {
            if (this.actualArm) {
                this.actualArm.addExtendedProperties(source._actualArm);
            }
            else {
                this.actualArm = new fhir.FhirString(source._actualArm, options);
            }
        }
        if (source['consent']) {
            this.consent = new fhir.Reference(source.consent, options);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'ResearchSubject';
        }
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vRSV('status', exp, 'ResearchSubjectStatus', ResearchSubjectStatusVsValidation, 'r'));
        iss.push(...this.vOS('period', exp));
        iss.push(...this.vRS('study', exp));
        iss.push(...this.vRS('individual', exp));
        iss.push(...this.vOS('assignedArm', exp));
        iss.push(...this.vOS('actualArm', exp));
        iss.push(...this.vOS('consent', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
ResearchSubject._fts_dataType = 'ResearchSubject';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzZWFyY2hTdWJqZWN0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9SZXNlYXJjaFN1YmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBRWpDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQXVEMUc7O0dBRUc7QUFDSCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxJQUFJLENBQUMsY0FBYztJQXlDdEQ7O09BRUc7SUFDSCxZQUFZLFNBQXNDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQzVGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQztRQUN0QyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3pHO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBZ0MsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDbkk7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzVCLElBQUksTUFBTSxDQUFDLFNBQVMs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RyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsdUJBQXVCLEVBQUMsaUNBQWlDLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBdEZEOztHQUVHO0FBQzZCLDZCQUFhLEdBQVUsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBSZXNlYXJjaFN1YmplY3RcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFJlc2VhcmNoU3ViamVjdFN0YXR1c0NvZGVzLCAgUmVzZWFyY2hTdWJqZWN0U3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1Jlc2VhcmNoU3ViamVjdFN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBSZXNlYXJjaFN1YmplY3RTdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1Jlc2VhcmNoU3ViamVjdFN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBSZXNlYXJjaFN1YmplY3QgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzZWFyY2hTdWJqZWN0QXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiUmVzZWFyY2hTdWJqZWN0XCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXJzIGFzc2lnbmVkIHRvIHRoaXMgcmVzZWFyY2ggc3ViamVjdCBmb3IgYSBzdHVkeS5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc3ViamVjdC5cclxuICAgKi9cclxuICBzdGF0dXM6IGZoaXIuRmhpckNvZGU8UmVzZWFyY2hTdWJqZWN0U3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFJlc2VhcmNoU3ViamVjdC5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZXMgdGhlIHN1YmplY3QgYmVnYW4gYW5kIGVuZGVkIHRoZWlyIHBhcnRpY2lwYXRpb24gaW4gdGhlIHN0dWR5LlxyXG4gICAqL1xyXG4gIHBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVmZXJlbmNlIHRvIHRoZSBzdHVkeSB0aGUgc3ViamVjdCBpcyBwYXJ0aWNpcGF0aW5nIGluLlxyXG4gICAqL1xyXG4gIHN0dWR5OiBmaGlyLlJlZmVyZW5jZUFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgcmVjb3JkIG9mIHRoZSBwZXJzb24gb3IgYW5pbWFsIHdobyBpcyBpbnZvbHZlZCBpbiB0aGUgc3R1ZHkuXHJcbiAgICovXHJcbiAgaW5kaXZpZHVhbDogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgdGhlIGFybSBpbiB0aGUgc3R1ZHkgdGhlIHN1YmplY3QgaXMgZXhwZWN0ZWQgdG8gZm9sbG93IGFzIHBhcnQgb2YgdGhpcyBzdHVkeS5cclxuICAgKi9cclxuICBhc3NpZ25lZEFybT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBSZXNlYXJjaFN1YmplY3QuYXNzaWduZWRBcm1cclxuICAgKi9cclxuICBfYXNzaWduZWRBcm0/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBhcm0gaW4gdGhlIHN0dWR5IHRoZSBzdWJqZWN0IGFjdHVhbGx5IGZvbGxvd2VkIGFzIHBhcnQgb2YgdGhpcyBzdHVkeS5cclxuICAgKi9cclxuICBhY3R1YWxBcm0/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUmVzZWFyY2hTdWJqZWN0LmFjdHVhbEFybVxyXG4gICAqL1xyXG4gIF9hY3R1YWxBcm0/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEEgcmVjb3JkIG9mIHRoZSBwYXRpZW50J3MgaW5mb3JtZWQgYWdyZWVtZW50IHRvIHBhcnRpY2lwYXRlIGluIHRoZSBzdHVkeS5cclxuICAgKi9cclxuICBjb25zZW50PzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgcGh5c2ljYWwgZW50aXR5IHdoaWNoIGlzIHRoZSBwcmltYXJ5IHVuaXQgb2Ygb3BlcmF0aW9uYWwgYW5kL29yIGFkbWluaXN0cmF0aXZlIGludGVyZXN0IGluIGEgc3R1ZHkuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVzZWFyY2hTdWJqZWN0IGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdSZXNlYXJjaFN1YmplY3QnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiUmVzZWFyY2hTdWJqZWN0XCI7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcnMgYXNzaWduZWQgdG8gdGhpcyByZXNlYXJjaCBzdWJqZWN0IGZvciBhIHN0dWR5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc3ViamVjdC5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPFJlc2VhcmNoU3ViamVjdFN0YXR1c0NvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlcyB0aGUgc3ViamVjdCBiZWdhbiBhbmQgZW5kZWQgdGhlaXIgcGFydGljaXBhdGlvbiBpbiB0aGUgc3R1ZHkuXHJcbiAgICovXHJcbiAgcHVibGljIHBlcmlvZD86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBSZWZlcmVuY2UgdG8gdGhlIHN0dWR5IHRoZSBzdWJqZWN0IGlzIHBhcnRpY2lwYXRpbmcgaW4uXHJcbiAgICovXHJcbiAgcHVibGljIHN0dWR5OiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZWNvcmQgb2YgdGhlIHBlcnNvbiBvciBhbmltYWwgd2hvIGlzIGludm9sdmVkIGluIHRoZSBzdHVkeS5cclxuICAgKi9cclxuICBwdWJsaWMgaW5kaXZpZHVhbDogZmhpci5SZWZlcmVuY2V8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgYXJtIGluIHRoZSBzdHVkeSB0aGUgc3ViamVjdCBpcyBleHBlY3RlZCB0byBmb2xsb3cgYXMgcGFydCBvZiB0aGlzIHN0dWR5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhc3NpZ25lZEFybT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgdGhlIGFybSBpbiB0aGUgc3R1ZHkgdGhlIHN1YmplY3QgYWN0dWFsbHkgZm9sbG93ZWQgYXMgcGFydCBvZiB0aGlzIHN0dWR5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhY3R1YWxBcm0/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgcmVjb3JkIG9mIHRoZSBwYXRpZW50J3MgaW5mb3JtZWQgYWdyZWVtZW50IHRvIHBhcnRpY2lwYXRlIGluIHRoZSBzdHVkeS5cclxuICAgKi9cclxuICBwdWJsaWMgY29uc2VudD86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBSZXNlYXJjaFN1YmplY3QgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxSZXNlYXJjaFN1YmplY3RBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnUmVzZWFyY2hTdWJqZWN0JztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxSZXNlYXJjaFN1YmplY3RTdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdHVzfSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMpIHsgdGhpcy5zdGF0dXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8UmVzZWFyY2hTdWJqZWN0U3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwZXJpb2QnXSkgeyB0aGlzLnBlcmlvZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2UucGVyaW9kLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3R1ZHknXSkgeyB0aGlzLnN0dWR5ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5zdHVkeSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0dWR5ID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnaW5kaXZpZHVhbCddKSB7IHRoaXMuaW5kaXZpZHVhbCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuaW5kaXZpZHVhbCwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmluZGl2aWR1YWwgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydhc3NpZ25lZEFybSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5hc3NpZ25lZEFybSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuYXNzaWduZWRBcm19LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Fzc2lnbmVkQXJtJ10pIHtcclxuICAgICAgaWYgKHRoaXMuYXNzaWduZWRBcm0pIHsgdGhpcy5hc3NpZ25lZEFybS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9hc3NpZ25lZEFybSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmFzc2lnbmVkQXJtID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Fzc2lnbmVkQXJtIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydhY3R1YWxBcm0nXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuYWN0dWFsQXJtID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5hY3R1YWxBcm19LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2FjdHVhbEFybSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmFjdHVhbEFybSkgeyB0aGlzLmFjdHVhbEFybS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9hY3R1YWxBcm0hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5hY3R1YWxBcm0gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fYWN0dWFsQXJtIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjb25zZW50J10pIHsgdGhpcy5jb25zZW50ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5jb25zZW50LCBvcHRpb25zKTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1Jlc2VhcmNoU3ViamVjdCcgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2lkZW50aWZpZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlNWKCdzdGF0dXMnLGV4cCwnUmVzZWFyY2hTdWJqZWN0U3RhdHVzJyxSZXNlYXJjaFN1YmplY3RTdGF0dXNWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncGVyaW9kJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdzdHVkeScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygnaW5kaXZpZHVhbCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnYXNzaWduZWRBcm0nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2FjdHVhbEFybScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnY29uc2VudCcsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=