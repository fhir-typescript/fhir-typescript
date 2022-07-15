// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DeviceUseStatement
import * as fhir from '../fhir.js';
// @ts-ignore
import { DeviceStatementStatusVsValidation } from '../fhirValueSets/DeviceStatementStatusVsValidation.js';
/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 */
export class DeviceUseStatement extends fhir.DomainResource {
    /**
     * Default constructor for DeviceUseStatement - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'DeviceUseStatement';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
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
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        else {
            this.subject = null;
        }
        if (source['whenUsed']) {
            this.whenUsed = new fhir.Period(source.whenUsed);
        }
        if (source['timing']) {
            this.timing = source.timing;
        }
        else if (source['timingTiming']) {
            this.timing = new fhir.Timing(source.timingTiming);
        }
        else if (source['timingPeriod']) {
            this.timing = new fhir.Period(source.timingPeriod);
        }
        else if (source['timingDateTime']) {
            this.timing = new fhir.FhirDateTime({ value: source.timingDateTime });
        }
        if (source['recordedOn']) {
            this.recordedOn = new fhir.FhirDateTime({ value: source.recordedOn });
        }
        if (source['_recordedOn']) {
            if (this.recordedOn) {
                this.recordedOn.addExtendedProperties(source._recordedOn);
            }
            else {
                this.recordedOn = new fhir.FhirDateTime(source._recordedOn);
            }
        }
        if (source['source']) {
            this.source = new fhir.Reference(source.source);
        }
        if (source['device']) {
            this.device = new fhir.Reference(source.device);
        }
        else {
            this.device = null;
        }
        if (source['indication']) {
            this.indication = source.indication.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.indication = [];
        }
        if (source['bodySite']) {
            this.bodySite = new fhir.CodeableConcept(source.bodySite);
        }
        if (source['note']) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        else {
            this.note = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'DeviceUseStatement';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vRSV('status', exp, 'DeviceStatementStatus', DeviceStatementStatusVsValidation, 'r');
        this.vRS('subject', exp);
        this.vOS('whenUsed', exp);
        this.vOS('timing', exp);
        this.vOS('recordedOn', exp);
        this.vOS('source', exp);
        this.vRS('device', exp);
        this.vOA('indication', exp);
        this.vOS('bodySite', exp);
        this.vOA('note', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
DeviceUseStatement._fts_dataType = 'DeviceUseStatement';
/**
 * Internal flag to properly serialize choice-type element DeviceUseStatement.timing[x]
 */
DeviceUseStatement._fts_timingIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlVXNlU3RhdGVtZW50LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9EZXZpY2VVc2VTdGF0ZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQWdGMUc7O0dBRUc7QUFDSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUEwRHpEOztPQUVHO0lBQ0gsWUFBWSxTQUF5QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUMvRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQW9CLENBQUM7UUFDekMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2hHO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFnQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQzVHO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElB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LENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQS9HRDs7R0FFRztBQUM2QixnQ0FBYSxHQUFVLG9CQUFvQixDQUFDO0FBMEI1RTs7R0FFRztBQUN1QixzQ0FBbUIsR0FBUSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IERldmljZVVzZVN0YXRlbWVudFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRGV2aWNlU3RhdGVtZW50U3RhdHVzQ29kZXMsICBEZXZpY2VTdGF0ZW1lbnRTdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRGV2aWNlU3RhdGVtZW50U3RhdHVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IERldmljZVN0YXRlbWVudFN0YXR1c1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRGV2aWNlU3RhdGVtZW50U3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBCb2R5U2l0ZUNvZGVzLCAgQm9keVNpdGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQm9keVNpdGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQm9keVNpdGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0JvZHlTaXRlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIERldmljZVVzZVN0YXRlbWVudCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VVc2VTdGF0ZW1lbnRBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJEZXZpY2VVc2VTdGF0ZW1lbnRcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW4gZXh0ZXJuYWwgaWRlbnRpZmllciBmb3IgdGhpcyBzdGF0ZW1lbnQgc3VjaCBhcyBhbiBJUkkuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGV2aWNlVXNlU3RhdG1lbnQgaXMgYSBzdGF0ZW1lbnQgYXQgYSBwb2ludCBpbiB0aW1lLiAgVGhlIHN0YXR1cyBpcyBvbmx5IHJlcHJlc2VudGF0aXZlIGF0IHRoZSBwb2ludCB3aGVuIGl0IHdhcyBhc3NlcnRlZC4gIFRoZSB2YWx1ZSBzZXQgZm9yIGNvbnRhaW5zIGNvZGVzIHRoYXQgYXNzZXJ0IHRoZSBzdGF0dXMgb2YgdGhlIHVzZSAgYnkgdGhlIHBhdGllbnQgKGZvciBleGFtcGxlLCBzdG9wcGVkIG9yIG9uIGhvbGQpIGFzIHdlbGwgYXMgY29kZXMgdGhhdCBhc3NlcnQgdGhlIHN0YXR1cyBvZiB0aGUgcmVzb3VyY2UgaXRzZWxmIChmb3IgZXhhbXBsZSwgZW50ZXJlZCBpbiBlcnJvcikuXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgdGhlIGNvZGVzIHRoYXQgbWFyayB0aGUgc3RhdGVtZW50IGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPERldmljZVN0YXRlbWVudFN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEZXZpY2VVc2VTdGF0ZW1lbnQuc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBhdGllbnQgd2hvIHVzZWQgdGhlIGRldmljZS5cclxuICAgKi9cclxuICBzdWJqZWN0OiBmaGlyLlJlZmVyZW5jZUFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgdGltZSBwZXJpb2Qgb3ZlciB3aGljaCB0aGUgZGV2aWNlIHdhcyB1c2VkLlxyXG4gICAqL1xyXG4gIHdoZW5Vc2VkPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBIb3cgb2Z0ZW4gdGhlIGRldmljZSB3YXMgdXNlZC5cclxuICAgKi9cclxuICB0aW1pbmc/OiBmaGlyLlRpbWluZ3xmaGlyLlBlcmlvZHxmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSG93IG9mdGVuIHRoZSBkZXZpY2Ugd2FzIHVzZWQuXHJcbiAgICovXHJcbiAgdGltaW5nVGltaW5nPzogZmhpci5UaW1pbmdBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBIb3cgb2Z0ZW4gdGhlIGRldmljZSB3YXMgdXNlZC5cclxuICAgKi9cclxuICB0aW1pbmdQZXJpb2Q/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEhvdyBvZnRlbiB0aGUgZGV2aWNlIHdhcyB1c2VkLlxyXG4gICAqL1xyXG4gIHRpbWluZ0RhdGVUaW1lPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdGltZSBhdCB3aGljaCB0aGUgc3RhdGVtZW50IHdhcyBtYWRlL3JlY29yZGVkLlxyXG4gICAqL1xyXG4gIHJlY29yZGVkT24/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEZXZpY2VVc2VTdGF0ZW1lbnQucmVjb3JkZWRPblxyXG4gICAqL1xyXG4gIF9yZWNvcmRlZE9uPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBXaG8gcmVwb3J0ZWQgdGhlIGRldmljZSB3YXMgYmVpbmcgdXNlZCBieSB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBzb3VyY2U/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkZXRhaWxzIG9mIHRoZSBkZXZpY2UgdXNlZC5cclxuICAgKi9cclxuICBkZXZpY2U6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFJlYXNvbiBvciBqdXN0aWZpY2F0aW9uIGZvciB0aGUgdXNlIG9mIHRoZSBkZXZpY2UuXHJcbiAgICovXHJcbiAgaW5kaWNhdGlvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIHNpdGUgb24gdGhlIHN1YmplY3QncyBib2R5IHdoZXJlIHRoZSBkZXZpY2Ugd2FzIHVzZWQgKCBpLmUuIHRoZSB0YXJnZXQgc2l0ZSkuXHJcbiAgICovXHJcbiAgYm9keVNpdGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERldGFpbHMgYWJvdXQgdGhlIGRldmljZSBzdGF0ZW1lbnQgdGhhdCB3ZXJlIG5vdCByZXByZXNlbnRlZCBhdCBhbGwgb3Igc3VmZmljaWVudGx5IGluIG9uZSBvZiB0aGUgYXR0cmlidXRlcyBwcm92aWRlZCBpbiBhIGNsYXNzLiBUaGVzZSBtYXkgaW5jbHVkZSBmb3IgZXhhbXBsZSBhIGNvbW1lbnQsIGFuIGluc3RydWN0aW9uLCBvciBhIG5vdGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBzdGF0ZW1lbnQuXHJcbiAgICovXHJcbiAgbm90ZT86IGZoaXIuQW5ub3RhdGlvbkFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHJlY29yZCBvZiBhIGRldmljZSBiZWluZyB1c2VkIGJ5IGEgcGF0aWVudCB3aGVyZSB0aGUgcmVjb3JkIGlzIHRoZSByZXN1bHQgb2YgYSByZXBvcnQgZnJvbSB0aGUgcGF0aWVudCBvciBhbm90aGVyIGNsaW5pY2lhbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEZXZpY2VVc2VTdGF0ZW1lbnQgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0RldmljZVVzZVN0YXRlbWVudCc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJEZXZpY2VVc2VTdGF0ZW1lbnRcIjtcclxuICAvKipcclxuICAgKiBBbiBleHRlcm5hbCBpZGVudGlmaWVyIGZvciB0aGlzIHN0YXRlbWVudCBzdWNoIGFzIGFuIElSSS5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogRGV2aWNlVXNlU3RhdG1lbnQgaXMgYSBzdGF0ZW1lbnQgYXQgYSBwb2ludCBpbiB0aW1lLiAgVGhlIHN0YXR1cyBpcyBvbmx5IHJlcHJlc2VudGF0aXZlIGF0IHRoZSBwb2ludCB3aGVuIGl0IHdhcyBhc3NlcnRlZC4gIFRoZSB2YWx1ZSBzZXQgZm9yIGNvbnRhaW5zIGNvZGVzIHRoYXQgYXNzZXJ0IHRoZSBzdGF0dXMgb2YgdGhlIHVzZSAgYnkgdGhlIHBhdGllbnQgKGZvciBleGFtcGxlLCBzdG9wcGVkIG9yIG9uIGhvbGQpIGFzIHdlbGwgYXMgY29kZXMgdGhhdCBhc3NlcnQgdGhlIHN0YXR1cyBvZiB0aGUgcmVzb3VyY2UgaXRzZWxmIChmb3IgZXhhbXBsZSwgZW50ZXJlZCBpbiBlcnJvcikuXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgdGhlIGNvZGVzIHRoYXQgbWFyayB0aGUgc3RhdGVtZW50IGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1czogZmhpci5GaGlyQ29kZTxEZXZpY2VTdGF0ZW1lbnRTdGF0dXNDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgcGF0aWVudCB3aG8gdXNlZCB0aGUgZGV2aWNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdWJqZWN0OiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lIHBlcmlvZCBvdmVyIHdoaWNoIHRoZSBkZXZpY2Ugd2FzIHVzZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHdoZW5Vc2VkPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEhvdyBvZnRlbiB0aGUgZGV2aWNlIHdhcyB1c2VkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0aW1pbmc/OiAoZmhpci5UaW1pbmd8Zmhpci5QZXJpb2R8Zmhpci5GaGlyRGF0ZVRpbWUpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IERldmljZVVzZVN0YXRlbWVudC50aW1pbmdbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfdGltaW5nSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWUgYXQgd2hpY2ggdGhlIHN0YXRlbWVudCB3YXMgbWFkZS9yZWNvcmRlZC5cclxuICAgKi9cclxuICBwdWJsaWMgcmVjb3JkZWRPbj86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaG8gcmVwb3J0ZWQgdGhlIGRldmljZSB3YXMgYmVpbmcgdXNlZCBieSB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgc291cmNlPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkZXRhaWxzIG9mIHRoZSBkZXZpY2UgdXNlZC5cclxuICAgKi9cclxuICBwdWJsaWMgZGV2aWNlOiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFJlYXNvbiBvciBqdXN0aWZpY2F0aW9uIGZvciB0aGUgdXNlIG9mIHRoZSBkZXZpY2UuXHJcbiAgICovXHJcbiAgcHVibGljIGluZGljYXRpb246IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHRoZSBzaXRlIG9uIHRoZSBzdWJqZWN0J3MgYm9keSB3aGVyZSB0aGUgZGV2aWNlIHdhcyB1c2VkICggaS5lLiB0aGUgdGFyZ2V0IHNpdGUpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBib2R5U2l0ZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZXRhaWxzIGFib3V0IHRoZSBkZXZpY2Ugc3RhdGVtZW50IHRoYXQgd2VyZSBub3QgcmVwcmVzZW50ZWQgYXQgYWxsIG9yIHN1ZmZpY2llbnRseSBpbiBvbmUgb2YgdGhlIGF0dHJpYnV0ZXMgcHJvdmlkZWQgaW4gYSBjbGFzcy4gVGhlc2UgbWF5IGluY2x1ZGUgZm9yIGV4YW1wbGUgYSBjb21tZW50LCBhbiBpbnN0cnVjdGlvbiwgb3IgYSBub3RlIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3RhdGVtZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBub3RlOiBmaGlyLkFubm90YXRpb25bXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBEZXZpY2VVc2VTdGF0ZW1lbnQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxEZXZpY2VVc2VTdGF0ZW1lbnRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnRGV2aWNlVXNlU3RhdGVtZW50JztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8RGV2aWNlU3RhdGVtZW50U3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN0YXR1c30pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzKSB7IHRoaXMuc3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPERldmljZVN0YXRlbWVudFN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3N0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3ViamVjdCddKSB7IHRoaXMuc3ViamVjdCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uuc3ViamVjdCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN1YmplY3QgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWyd3aGVuVXNlZCddKSB7IHRoaXMud2hlblVzZWQgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLndoZW5Vc2VkKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsndGltaW5nJ10pIHsgdGhpcy50aW1pbmcgPSBzb3VyY2UudGltaW5nOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3RpbWluZ1RpbWluZyddKSB7IHRoaXMudGltaW5nID0gbmV3IGZoaXIuVGltaW5nKHNvdXJjZS50aW1pbmdUaW1pbmcpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3RpbWluZ1BlcmlvZCddKSB7IHRoaXMudGltaW5nID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS50aW1pbmdQZXJpb2QpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3RpbWluZ0RhdGVUaW1lJ10pIHsgdGhpcy50aW1pbmcgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UudGltaW5nRGF0ZVRpbWV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVjb3JkZWRPbiddKSB7IHRoaXMucmVjb3JkZWRPbiA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5yZWNvcmRlZE9ufSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19yZWNvcmRlZE9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMucmVjb3JkZWRPbikgeyB0aGlzLnJlY29yZGVkT24uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fcmVjb3JkZWRPbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnJlY29yZGVkT24gPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9yZWNvcmRlZE9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3NvdXJjZSddKSB7IHRoaXMuc291cmNlID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5zb3VyY2UpOyB9XHJcbiAgICBpZiAoc291cmNlWydkZXZpY2UnXSkgeyB0aGlzLmRldmljZSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuZGV2aWNlKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZGV2aWNlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnaW5kaWNhdGlvbiddKSB7IHRoaXMuaW5kaWNhdGlvbiA9IHNvdXJjZS5pbmRpY2F0aW9uLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaW5kaWNhdGlvbiA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydib2R5U2l0ZSddKSB7IHRoaXMuYm9keVNpdGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmJvZHlTaXRlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnbm90ZSddKSB7IHRoaXMubm90ZSA9IHNvdXJjZS5ub3RlLm1hcCgoeCkgPT4gbmV3IGZoaXIuQW5ub3RhdGlvbih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLm5vdGUgPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0RldmljZVVzZVN0YXRlbWVudCcgfVxyXG4gICAgdGhpcy52UlMoJ3Jlc291cmNlVHlwZScsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2lkZW50aWZpZXInLGV4cClcclxuICAgIHRoaXMudlJTVignc3RhdHVzJyxleHAsJ0RldmljZVN0YXRlbWVudFN0YXR1cycsRGV2aWNlU3RhdGVtZW50U3RhdHVzVnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHRoaXMudlJTKCdzdWJqZWN0JyxleHApXHJcbiAgICB0aGlzLnZPUygnd2hlblVzZWQnLGV4cClcclxuICAgIHRoaXMudk9TKCd0aW1pbmcnLGV4cClcclxuICAgIHRoaXMudk9TKCdyZWNvcmRlZE9uJyxleHApXHJcbiAgICB0aGlzLnZPUygnc291cmNlJyxleHApXHJcbiAgICB0aGlzLnZSUygnZGV2aWNlJyxleHApXHJcbiAgICB0aGlzLnZPQSgnaW5kaWNhdGlvbicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2JvZHlTaXRlJyxleHApXHJcbiAgICB0aGlzLnZPQSgnbm90ZScsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19