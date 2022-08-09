// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
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
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options));
        }
        else {
            this.identifier = [];
        }
        if (source['basedOn']) {
            this.basedOn = source.basedOn.map((x) => new fhir.Reference(x, options));
        }
        else {
            this.basedOn = [];
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
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject, options);
        }
        else {
            this.subject = null;
        }
        if (source['derivedFrom']) {
            this.derivedFrom = source.derivedFrom.map((x) => new fhir.Reference(x, options));
        }
        else {
            this.derivedFrom = [];
        }
        if (source['timing']) {
            this.timing = source.timing;
        }
        else if (source['timingTiming']) {
            this.timing = new fhir.Timing(source.timingTiming, options);
        }
        else if (source['timingPeriod']) {
            this.timing = new fhir.Period(source.timingPeriod, options);
        }
        else if (source['timingDateTime'] !== undefined) {
            this.timing = new fhir.FhirDateTime({ value: source.timingDateTime }, options);
        }
        if (source['recordedOn'] !== undefined) {
            this.recordedOn = new fhir.FhirDateTime({ value: source.recordedOn }, options);
        }
        if (source['_recordedOn']) {
            if (this.recordedOn) {
                this.recordedOn.addExtendedProperties(source._recordedOn);
            }
            else {
                this.recordedOn = new fhir.FhirDateTime(source._recordedOn, options);
            }
        }
        if (source['source']) {
            this.source = new fhir.Reference(source.source, options);
        }
        if (source['device']) {
            this.device = new fhir.Reference(source.device, options);
        }
        else {
            this.device = null;
        }
        if (source['reasonCode']) {
            this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x, options));
        }
        else {
            this.reasonCode = [];
        }
        if (source['reasonReference']) {
            this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x, options));
        }
        else {
            this.reasonReference = [];
        }
        if (source['bodySite']) {
            this.bodySite = new fhir.CodeableConcept(source.bodySite, options);
        }
        if (source['note']) {
            this.note = source.note.map((x) => new fhir.Annotation(x, options));
        }
        else {
            this.note = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'DeviceUseStatement';
        }
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vOA('basedOn', exp));
        iss.push(...this.vRSV('status', exp, 'DeviceStatementStatus', DeviceStatementStatusVsValidation, 'r'));
        iss.push(...this.vRS('subject', exp));
        iss.push(...this.vOA('derivedFrom', exp));
        iss.push(...this.vOS('timing', exp));
        iss.push(...this.vOS('recordedOn', exp));
        iss.push(...this.vOS('source', exp));
        iss.push(...this.vRS('device', exp));
        iss.push(...this.vOA('reasonCode', exp));
        iss.push(...this.vOA('reasonReference', exp));
        iss.push(...this.vOS('bodySite', exp));
        iss.push(...this.vOA('note', exp));
        return iss;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlVXNlU3RhdGVtZW50LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9EZXZpY2VVc2VTdGF0ZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQXdGMUc7O0dBRUc7QUFDSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUFrRXpEOztPQUVHO0lBQ0gsWUFBWSxTQUF5QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUMvRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQW9CLENBQUM7UUFDekMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FBRTthQUN6RztZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDOUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FBRTthQUMvRjtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQUU7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QUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQTdIRDs7R0FFRztBQUM2QixnQ0FBYSxHQUFVLG9CQUFvQixDQUFDO0FBOEI1RTs7R0FFRztBQUN1QixzQ0FBbUIsR0FBUSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBEZXZpY2VVc2VTdGF0ZW1lbnRcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IERldmljZVN0YXRlbWVudFN0YXR1c0NvZGVzLCAgRGV2aWNlU3RhdGVtZW50U3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0RldmljZVN0YXRlbWVudFN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBEZXZpY2VTdGF0ZW1lbnRTdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0RldmljZVN0YXRlbWVudFN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQm9keVNpdGVDb2RlcywgIEJvZHlTaXRlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0JvZHlTaXRlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEJvZHlTaXRlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Cb2R5U2l0ZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBEZXZpY2VVc2VTdGF0ZW1lbnQgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlVXNlU3RhdGVtZW50QXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiRGV2aWNlVXNlU3RhdGVtZW50XCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFuIGV4dGVybmFsIGlkZW50aWZpZXIgZm9yIHRoaXMgc3RhdGVtZW50IHN1Y2ggYXMgYW4gSVJJLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgcGxhbiwgcHJvcG9zYWwgb3Igb3JkZXIgdGhhdCBpcyBmdWxmaWxsZWQgaW4gd2hvbGUgb3IgaW4gcGFydCBieSB0aGlzIERldmljZVVzZVN0YXRlbWVudC5cclxuICAgKi9cclxuICBiYXNlZE9uPzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERldmljZVVzZVN0YXRtZW50IGlzIGEgc3RhdGVtZW50IGF0IGEgcG9pbnQgaW4gdGltZS4gIFRoZSBzdGF0dXMgaXMgb25seSByZXByZXNlbnRhdGl2ZSBhdCB0aGUgcG9pbnQgd2hlbiBpdCB3YXMgYXNzZXJ0ZWQuICBUaGUgdmFsdWUgc2V0IGZvciBjb250YWlucyBjb2RlcyB0aGF0IGFzc2VydCB0aGUgc3RhdHVzIG9mIHRoZSB1c2UgIGJ5IHRoZSBwYXRpZW50IChmb3IgZXhhbXBsZSwgc3RvcHBlZCBvciBvbiBob2xkKSBhcyB3ZWxsIGFzIGNvZGVzIHRoYXQgYXNzZXJ0IHRoZSBzdGF0dXMgb2YgdGhlIHJlc291cmNlIGl0c2VsZiAoZm9yIGV4YW1wbGUsIGVudGVyZWQgaW4gZXJyb3IpLlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSB0aGUgc3RhdHVzIGNvbnRhaW5zIHRoZSBjb2RlcyB0aGF0IG1hcmsgdGhlIHN0YXRlbWVudCBhcyBub3QgY3VycmVudGx5IHZhbGlkLlxyXG4gICAqL1xyXG4gIHN0YXR1czogZmhpci5GaGlyQ29kZTxEZXZpY2VTdGF0ZW1lbnRTdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRGV2aWNlVXNlU3RhdGVtZW50LnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXRpZW50IHdobyB1c2VkIHRoZSBkZXZpY2UuXHJcbiAgICovXHJcbiAgc3ViamVjdDogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1vc3QgY29tbW9uIHVzZSBjYXNlcyBmb3IgZGVyaXZpbmcgYSBEZXZpY2VVc2VTdGF0ZW1lbnQgY29tZXMgZnJvbSBjcmVhdGluZyBpdCBmcm9tIGEgcmVxdWVzdCBvciBmcm9tIGFuIG9ic2VydmF0aW9uIG9yIGEgY2xhaW0uIGl0IHNob3VsZCBiZSBub3RlZCB0aGF0IHRoZSBhbW91bnQgb2YgaW5mb3JtYXRpb24gdGhhdCBpcyBhdmFpbGFibGUgdmFyaWVzIGZyb20gdGhlIHR5cGUgcmVzb3VyY2UgdGhhdCB5b3UgZGVyaXZlIHRoZSBEZXZpY2VVc2VTdGF0ZW1lbnQgZnJvbS5cclxuICAgKi9cclxuICBkZXJpdmVkRnJvbT86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBIb3cgb2Z0ZW4gdGhlIGRldmljZSB3YXMgdXNlZC5cclxuICAgKi9cclxuICB0aW1pbmc/OiBmaGlyLlRpbWluZ3xmaGlyLlBlcmlvZHxmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSG93IG9mdGVuIHRoZSBkZXZpY2Ugd2FzIHVzZWQuXHJcbiAgICovXHJcbiAgdGltaW5nVGltaW5nPzogZmhpci5UaW1pbmdBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBIb3cgb2Z0ZW4gdGhlIGRldmljZSB3YXMgdXNlZC5cclxuICAgKi9cclxuICB0aW1pbmdQZXJpb2Q/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEhvdyBvZnRlbiB0aGUgZGV2aWNlIHdhcyB1c2VkLlxyXG4gICAqL1xyXG4gIHRpbWluZ0RhdGVUaW1lPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdGltZSBhdCB3aGljaCB0aGUgc3RhdGVtZW50IHdhcyBtYWRlL3JlY29yZGVkLlxyXG4gICAqL1xyXG4gIHJlY29yZGVkT24/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEZXZpY2VVc2VTdGF0ZW1lbnQucmVjb3JkZWRPblxyXG4gICAqL1xyXG4gIF9yZWNvcmRlZE9uPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBXaG8gcmVwb3J0ZWQgdGhlIGRldmljZSB3YXMgYmVpbmcgdXNlZCBieSB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBzb3VyY2U/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkZXRhaWxzIG9mIHRoZSBkZXZpY2UgdXNlZC5cclxuICAgKi9cclxuICBkZXZpY2U6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFJlYXNvbiBvciBqdXN0aWZpY2F0aW9uIGZvciB0aGUgdXNlIG9mIHRoZSBkZXZpY2UuXHJcbiAgICovXHJcbiAgcmVhc29uQ29kZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgYW5vdGhlciByZXNvdXJjZSB3aG9zZSBleGlzdGVuY2UganVzdGlmaWVzIHRoaXMgRGV2aWNlVXNlU3RhdGVtZW50LlxyXG4gICAqL1xyXG4gIHJlYXNvblJlZmVyZW5jZT86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIGFub3RvbWljIGxvY2F0aW9uIG9uIHRoZSBzdWJqZWN0J3MgYm9keSB3aGVyZSB0aGUgZGV2aWNlIHdhcyB1c2VkICggaS5lLiB0aGUgdGFyZ2V0KS5cclxuICAgKi9cclxuICBib2R5U2l0ZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGV0YWlscyBhYm91dCB0aGUgZGV2aWNlIHN0YXRlbWVudCB0aGF0IHdlcmUgbm90IHJlcHJlc2VudGVkIGF0IGFsbCBvciBzdWZmaWNpZW50bHkgaW4gb25lIG9mIHRoZSBhdHRyaWJ1dGVzIHByb3ZpZGVkIGluIGEgY2xhc3MuIFRoZXNlIG1heSBpbmNsdWRlIGZvciBleGFtcGxlIGEgY29tbWVudCwgYW4gaW5zdHJ1Y3Rpb24sIG9yIGEgbm90ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHN0YXRlbWVudC5cclxuICAgKi9cclxuICBub3RlPzogZmhpci5Bbm5vdGF0aW9uQXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgcmVjb3JkIG9mIGEgZGV2aWNlIGJlaW5nIHVzZWQgYnkgYSBwYXRpZW50IHdoZXJlIHRoZSByZWNvcmQgaXMgdGhlIHJlc3VsdCBvZiBhIHJlcG9ydCBmcm9tIHRoZSBwYXRpZW50IG9yIGFub3RoZXIgY2xpbmljaWFuLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERldmljZVVzZVN0YXRlbWVudCBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRGV2aWNlVXNlU3RhdGVtZW50JztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIkRldmljZVVzZVN0YXRlbWVudFwiO1xyXG4gIC8qKlxyXG4gICAqIEFuIGV4dGVybmFsIGlkZW50aWZpZXIgZm9yIHRoaXMgc3RhdGVtZW50IHN1Y2ggYXMgYW4gSVJJLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBBIHBsYW4sIHByb3Bvc2FsIG9yIG9yZGVyIHRoYXQgaXMgZnVsZmlsbGVkIGluIHdob2xlIG9yIGluIHBhcnQgYnkgdGhpcyBEZXZpY2VVc2VTdGF0ZW1lbnQuXHJcbiAgICovXHJcbiAgcHVibGljIGJhc2VkT246IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogRGV2aWNlVXNlU3RhdG1lbnQgaXMgYSBzdGF0ZW1lbnQgYXQgYSBwb2ludCBpbiB0aW1lLiAgVGhlIHN0YXR1cyBpcyBvbmx5IHJlcHJlc2VudGF0aXZlIGF0IHRoZSBwb2ludCB3aGVuIGl0IHdhcyBhc3NlcnRlZC4gIFRoZSB2YWx1ZSBzZXQgZm9yIGNvbnRhaW5zIGNvZGVzIHRoYXQgYXNzZXJ0IHRoZSBzdGF0dXMgb2YgdGhlIHVzZSAgYnkgdGhlIHBhdGllbnQgKGZvciBleGFtcGxlLCBzdG9wcGVkIG9yIG9uIGhvbGQpIGFzIHdlbGwgYXMgY29kZXMgdGhhdCBhc3NlcnQgdGhlIHN0YXR1cyBvZiB0aGUgcmVzb3VyY2UgaXRzZWxmIChmb3IgZXhhbXBsZSwgZW50ZXJlZCBpbiBlcnJvcikuXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgdGhlIGNvZGVzIHRoYXQgbWFyayB0aGUgc3RhdGVtZW50IGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1czogZmhpci5GaGlyQ29kZTxEZXZpY2VTdGF0ZW1lbnRTdGF0dXNDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgcGF0aWVudCB3aG8gdXNlZCB0aGUgZGV2aWNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdWJqZWN0OiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtb3N0IGNvbW1vbiB1c2UgY2FzZXMgZm9yIGRlcml2aW5nIGEgRGV2aWNlVXNlU3RhdGVtZW50IGNvbWVzIGZyb20gY3JlYXRpbmcgaXQgZnJvbSBhIHJlcXVlc3Qgb3IgZnJvbSBhbiBvYnNlcnZhdGlvbiBvciBhIGNsYWltLiBpdCBzaG91bGQgYmUgbm90ZWQgdGhhdCB0aGUgYW1vdW50IG9mIGluZm9ybWF0aW9uIHRoYXQgaXMgYXZhaWxhYmxlIHZhcmllcyBmcm9tIHRoZSB0eXBlIHJlc291cmNlIHRoYXQgeW91IGRlcml2ZSB0aGUgRGV2aWNlVXNlU3RhdGVtZW50IGZyb20uXHJcbiAgICovXHJcbiAgcHVibGljIGRlcml2ZWRGcm9tOiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIEhvdyBvZnRlbiB0aGUgZGV2aWNlIHdhcyB1c2VkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0aW1pbmc/OiAoZmhpci5UaW1pbmd8Zmhpci5QZXJpb2R8Zmhpci5GaGlyRGF0ZVRpbWUpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IERldmljZVVzZVN0YXRlbWVudC50aW1pbmdbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfdGltaW5nSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWUgYXQgd2hpY2ggdGhlIHN0YXRlbWVudCB3YXMgbWFkZS9yZWNvcmRlZC5cclxuICAgKi9cclxuICBwdWJsaWMgcmVjb3JkZWRPbj86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaG8gcmVwb3J0ZWQgdGhlIGRldmljZSB3YXMgYmVpbmcgdXNlZCBieSB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgc291cmNlPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkZXRhaWxzIG9mIHRoZSBkZXZpY2UgdXNlZC5cclxuICAgKi9cclxuICBwdWJsaWMgZGV2aWNlOiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFJlYXNvbiBvciBqdXN0aWZpY2F0aW9uIGZvciB0aGUgdXNlIG9mIHRoZSBkZXZpY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHJlYXNvbkNvZGU6IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGFub3RoZXIgcmVzb3VyY2Ugd2hvc2UgZXhpc3RlbmNlIGp1c3RpZmllcyB0aGlzIERldmljZVVzZVN0YXRlbWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgcmVhc29uUmVmZXJlbmNlOiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGUgYW5vdG9taWMgbG9jYXRpb24gb24gdGhlIHN1YmplY3QncyBib2R5IHdoZXJlIHRoZSBkZXZpY2Ugd2FzIHVzZWQgKCBpLmUuIHRoZSB0YXJnZXQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBib2R5U2l0ZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZXRhaWxzIGFib3V0IHRoZSBkZXZpY2Ugc3RhdGVtZW50IHRoYXQgd2VyZSBub3QgcmVwcmVzZW50ZWQgYXQgYWxsIG9yIHN1ZmZpY2llbnRseSBpbiBvbmUgb2YgdGhlIGF0dHJpYnV0ZXMgcHJvdmlkZWQgaW4gYSBjbGFzcy4gVGhlc2UgbWF5IGluY2x1ZGUgZm9yIGV4YW1wbGUgYSBjb21tZW50LCBhbiBpbnN0cnVjdGlvbiwgb3IgYSBub3RlIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3RhdGVtZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBub3RlOiBmaGlyLkFubm90YXRpb25bXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBEZXZpY2VVc2VTdGF0ZW1lbnQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxEZXZpY2VVc2VTdGF0ZW1lbnRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnRGV2aWNlVXNlU3RhdGVtZW50JztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2Jhc2VkT24nXSkgeyB0aGlzLmJhc2VkT24gPSBzb3VyY2UuYmFzZWRPbi5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmJhc2VkT24gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPERldmljZVN0YXRlbWVudFN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9LCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxEZXZpY2VTdGF0ZW1lbnRTdGF0dXNDb2RlVHlwZT4oc291cmNlLl9zdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3N1YmplY3QnXSkgeyB0aGlzLnN1YmplY3QgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnN1YmplY3QsIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdWJqZWN0ID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGVyaXZlZEZyb20nXSkgeyB0aGlzLmRlcml2ZWRGcm9tID0gc291cmNlLmRlcml2ZWRGcm9tLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZGVyaXZlZEZyb20gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsndGltaW5nJ10pIHsgdGhpcy50aW1pbmcgPSBzb3VyY2UudGltaW5nOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3RpbWluZ1RpbWluZyddKSB7IHRoaXMudGltaW5nID0gbmV3IGZoaXIuVGltaW5nKHNvdXJjZS50aW1pbmdUaW1pbmcsIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3RpbWluZ1BlcmlvZCddKSB7IHRoaXMudGltaW5nID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS50aW1pbmdQZXJpb2QsIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3RpbWluZ0RhdGVUaW1lJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnRpbWluZyA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS50aW1pbmdEYXRlVGltZX0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydyZWNvcmRlZE9uJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnJlY29yZGVkT24gPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UucmVjb3JkZWRPbn0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfcmVjb3JkZWRPbiddKSB7XHJcbiAgICAgIGlmICh0aGlzLnJlY29yZGVkT24pIHsgdGhpcy5yZWNvcmRlZE9uLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3JlY29yZGVkT24hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5yZWNvcmRlZE9uID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fcmVjb3JkZWRPbiBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydzb3VyY2UnXSkgeyB0aGlzLnNvdXJjZSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uuc291cmNlLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGV2aWNlJ10pIHsgdGhpcy5kZXZpY2UgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmRldmljZSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmRldmljZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlYXNvbkNvZGUnXSkgeyB0aGlzLnJlYXNvbkNvZGUgPSBzb3VyY2UucmVhc29uQ29kZS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnJlYXNvbkNvZGUgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVhc29uUmVmZXJlbmNlJ10pIHsgdGhpcy5yZWFzb25SZWZlcmVuY2UgPSBzb3VyY2UucmVhc29uUmVmZXJlbmNlLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucmVhc29uUmVmZXJlbmNlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2JvZHlTaXRlJ10pIHsgdGhpcy5ib2R5U2l0ZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuYm9keVNpdGUsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydub3RlJ10pIHsgdGhpcy5ub3RlID0gc291cmNlLm5vdGUubWFwKCh4KSA9PiBuZXcgZmhpci5Bbm5vdGF0aW9uKHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMubm90ZSA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnRGV2aWNlVXNlU3RhdGVtZW50JyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnYmFzZWRPbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSU1YoJ3N0YXR1cycsZXhwLCdEZXZpY2VTdGF0ZW1lbnRTdGF0dXMnLERldmljZVN0YXRlbWVudFN0YXR1c1ZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdzdWJqZWN0JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdkZXJpdmVkRnJvbScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndGltaW5nJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdyZWNvcmRlZE9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdzb3VyY2UnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ2RldmljZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgncmVhc29uQ29kZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgncmVhc29uUmVmZXJlbmNlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdib2R5U2l0ZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnbm90ZScsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=