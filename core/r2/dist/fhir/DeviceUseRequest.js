// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DeviceUseRequest
import * as fhir from '../fhir.js';
// @ts-ignore
import { DeviceUseRequestStatusVsValidation } from '../fhirValueSets/DeviceUseRequestStatusVsValidation.js';
// @ts-ignore
import { DeviceUseRequestPriorityVsValidation } from '../fhirValueSets/DeviceUseRequestPriorityVsValidation.js';
/**
 * Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
 */
export class DeviceUseRequest extends fhir.DomainResource {
    /**
     * Default constructor for DeviceUseRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'DeviceUseRequest';
        if (source['bodySite']) {
            this.bodySite = source.bodySite;
        }
        else if (source['bodySiteCodeableConcept']) {
            this.bodySite = new fhir.CodeableConcept(source.bodySiteCodeableConcept);
        }
        else if (source['bodySiteReference']) {
            this.bodySite = new fhir.Reference(source.bodySiteReference);
        }
        if (source['status']) {
            this.status = new fhir.FhirCode({ value: source.status });
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status);
            }
        }
        if (source['device']) {
            this.device = new fhir.Reference(source.device);
        }
        else {
            this.device = null;
        }
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['indication']) {
            this.indication = source.indication.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.indication = [];
        }
        if (source['notes']) {
            this.notes = source.notes.map((x) => new fhir.FhirString({ value: x }));
        }
        else {
            this.notes = [];
        }
        if (source['_notes']) {
            source._notes.forEach((x, i) => {
                if (this.notes.length >= i) {
                    if (x) {
                        this.notes[i].addExtendedProperties(x);
                    }
                }
                else {
                    if (x) {
                        this.notes.push(new fhir.FhirString(x));
                    }
                }
            });
        }
        if (source['prnReason']) {
            this.prnReason = source.prnReason.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.prnReason = [];
        }
        if (source['orderedOn']) {
            this.orderedOn = new fhir.FhirDateTime({ value: source.orderedOn });
        }
        if (source['_orderedOn']) {
            if (this.orderedOn) {
                this.orderedOn.addExtendedProperties(source._orderedOn);
            }
            else {
                this.orderedOn = new fhir.FhirDateTime(source._orderedOn);
            }
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
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        else {
            this.subject = null;
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
        if (source['priority']) {
            this.priority = new fhir.FhirCode({ value: source.priority });
        }
        if (source['_priority']) {
            if (this.priority) {
                this.priority.addExtendedProperties(source._priority);
            }
            else {
                this.priority = new fhir.FhirCode(source._priority);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'DeviceUseRequest';
        }
        iss.push(...this.vRPS('resourceType', exp));
        iss.push(...this.vOS('bodySite', exp));
        iss.push(...this.vOSV('status', exp, 'DeviceUseRequestStatus', DeviceUseRequestStatusVsValidation, 'r'));
        iss.push(...this.vRS('device', exp));
        iss.push(...this.vOS('encounter', exp));
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vOA('indication', exp));
        iss.push(...this.vOA('notes', exp));
        iss.push(...this.vOA('prnReason', exp));
        iss.push(...this.vOS('orderedOn', exp));
        iss.push(...this.vOS('recordedOn', exp));
        iss.push(...this.vRS('subject', exp));
        iss.push(...this.vOS('timing', exp));
        iss.push(...this.vOSV('priority', exp, 'DeviceUseRequestPriority', DeviceUseRequestPriorityVsValidation, 'r'));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
DeviceUseRequest._fts_dataType = 'DeviceUseRequest';
/**
 * Internal flag to properly serialize choice-type element DeviceUseRequest.bodySite[x]
 */
DeviceUseRequest._fts_bodySiteIsChoice = true;
/**
 * Internal flag to properly serialize choice-type element DeviceUseRequest.timing[x]
 */
DeviceUseRequest._fts_timingIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlVXNlUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRGV2aWNlVXNlUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRzVHLGFBQWE7QUFDYixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQXVHaEg7O0dBRUc7QUFDSCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUFxRXZEOztPQUVHO0lBQ0gsWUFBWSxTQUF1QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUM3RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FBRTthQUN2RCxJQUFJLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FBRTthQUNwSCxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FBRTtRQUN2RyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJ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dkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLEdBQUcsRUFBQywwQkFBMEIsRUFBQyxvQ0FBb0MsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNHLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUE5SUQ7O0dBRUc7QUFDNkIsOEJBQWEsR0FBVSxrQkFBa0IsQ0FBQztBQVMxRTs7R0FFRztBQUN1QixzQ0FBcUIsR0FBUSxJQUFJLENBQUM7QUE2QzVEOztHQUVHO0FBQ3VCLG9DQUFtQixHQUFRLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMi5jb3JlIHZlcnNpb246IDEuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogRGV2aWNlVXNlUmVxdWVzdFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRGV2aWNlVXNlUmVxdWVzdFN0YXR1c0NvZGVzLCAgRGV2aWNlVXNlUmVxdWVzdFN0YXR1c0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9EZXZpY2VVc2VSZXF1ZXN0U3RhdHVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IERldmljZVVzZVJlcXVlc3RTdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0RldmljZVVzZVJlcXVlc3RTdGF0dXNWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IERldmljZVVzZVJlcXVlc3RQcmlvcml0eUNvZGVzLCAgRGV2aWNlVXNlUmVxdWVzdFByaW9yaXR5Q29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0RldmljZVVzZVJlcXVlc3RQcmlvcml0eUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBEZXZpY2VVc2VSZXF1ZXN0UHJpb3JpdHlWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0RldmljZVVzZVJlcXVlc3RQcmlvcml0eVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBEZXZpY2VVc2VSZXF1ZXN0IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERldmljZVVzZVJlcXVlc3RBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJEZXZpY2VVc2VSZXF1ZXN0XCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEtub3dpbmcgd2hlcmUgdGhlIGRldmljZSBpcyB0YXJnZXRlZCBpcyBpbXBvcnRhbnQgZm9yIHRyYWNraW5nIGlmIG11bHRpcGxlIHNpdGVzIGFyZSBwb3NzaWJsZS5cclxuICAgKi9cclxuICBib2R5U2l0ZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBLbm93aW5nIHdoZXJlIHRoZSBkZXZpY2UgaXMgdGFyZ2V0ZWQgaXMgaW1wb3J0YW50IGZvciB0cmFja2luZyBpZiBtdWx0aXBsZSBzaXRlcyBhcmUgcG9zc2libGUuXHJcbiAgICovXHJcbiAgYm9keVNpdGVDb2RlYWJsZUNvbmNlcHQ/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEtub3dpbmcgd2hlcmUgdGhlIGRldmljZSBpcyB0YXJnZXRlZCBpcyBpbXBvcnRhbnQgZm9yIHRyYWNraW5nIGlmIG11bHRpcGxlIHNpdGVzIGFyZSBwb3NzaWJsZS5cclxuICAgKi9cclxuICBib2R5U2l0ZVJlZmVyZW5jZT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHN0YXR1cyBvZiB0aGUgcmVxdWVzdC5cclxuICAgKi9cclxuICBzdGF0dXM/OiBmaGlyLkZoaXJDb2RlPERldmljZVVzZVJlcXVlc3RTdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRGV2aWNlVXNlUmVxdWVzdC5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgZGV0YWlscyBvZiB0aGUgZGV2aWNlICB0byBiZSB1c2VkLlxyXG4gICAqL1xyXG4gIGRldmljZTogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogQW4gZW5jb3VudGVyIHRoYXQgcHJvdmlkZXMgYWRkaXRpb25hbCBjb250ZXh0IGluIHdoaWNoIHRoaXMgcmVxdWVzdCBpcyBtYWRlLlxyXG4gICAqL1xyXG4gIGVuY291bnRlcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcnMgYXNzaWduZWQgdG8gdGhpcyBvcmRlciBieSB0aGUgb3JkZXJlciBvciBieSB0aGUgcmVjZWl2ZXIuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVhc29uIG9yIGp1c3RpZmljYXRpb24gZm9yIHRoZSB1c2Ugb2YgdGhpcyBkZXZpY2UuXHJcbiAgICovXHJcbiAgaW5kaWNhdGlvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZXRhaWxzIGFib3V0IHRoaXMgcmVxdWVzdCB0aGF0IHdlcmUgbm90IHJlcHJlc2VudGVkIGF0IGFsbCBvciBzdWZmaWNpZW50bHkgaW4gb25lIG9mIHRoZSBhdHRyaWJ1dGVzIHByb3ZpZGVkIGluIGEgY2xhc3MuIFRoZXNlIG1heSBpbmNsdWRlIGZvciBleGFtcGxlIGEgY29tbWVudCwgYW4gaW5zdHJ1Y3Rpb24sIG9yIGEgbm90ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHN0YXRlbWVudC5cclxuICAgKi9cclxuICBub3Rlcz86IGZoaXIuRmhpclN0cmluZ1tdfChzdHJpbmd8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IERldmljZVVzZVJlcXVlc3Qubm90ZXNcclxuICAgKi9cclxuICBfbm90ZXM/OihmaGlyLkZoaXJFbGVtZW50QXJnc3xudWxsKVtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwcm9wb3NlZCBhY3QgbXVzdCBiZSBwZXJmb3JtZWQgaWYgdGhlIGluZGljYXRlZCBjb25kaXRpb25zIG9jY3VyLCBlLmcuLiwgc2hvcnRuZXNzIG9mIGJyZWF0aCwgU3BPMiBsZXNzIHRoYW4geCUuXHJcbiAgICovXHJcbiAgcHJuUmVhc29uPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lIHdoZW4gdGhlIHJlcXVlc3Qgd2FzIG1hZGUuXHJcbiAgICovXHJcbiAgb3JkZXJlZE9uPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRGV2aWNlVXNlUmVxdWVzdC5vcmRlcmVkT25cclxuICAgKi9cclxuICBfb3JkZXJlZE9uPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgdGltZSBhdCB3aGljaCB0aGUgcmVxdWVzdCB3YXMgbWFkZS9yZWNvcmRlZC5cclxuICAgKi9cclxuICByZWNvcmRlZE9uPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRGV2aWNlVXNlUmVxdWVzdC5yZWNvcmRlZE9uXHJcbiAgICovXHJcbiAgX3JlY29yZGVkT24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXRpZW50IHdobyB3aWxsIHVzZSB0aGUgZGV2aWNlLlxyXG4gICAqL1xyXG4gIHN1YmplY3Q6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1pbmcgc2NoZWR1bGUgZm9yIHRoZSB1c2Ugb2YgdGhlIGRldmljZSBUaGUgU2NoZWR1bGUgZGF0YSB0eXBlIGFsbG93cyBtYW55IGRpZmZlcmVudCBleHByZXNzaW9ucywgZm9yIGV4YW1wbGUuIFwiRXZlcnkgOCBob3Vyc1wiOyBcIlRocmVlIHRpbWVzIGEgZGF5XCI7IFwiMS8yIGFuIGhvdXIgYmVmb3JlIGJyZWFrZmFzdCBmb3IgMTAgZGF5cyBmcm9tIDIzLURlYyAyMDExOlwiOyBcIjE1IE9jdCAyMDEzLCAxNyBPY3QgMjAxMyBhbmQgMSBOb3YgMjAxM1wiLlxyXG4gICAqL1xyXG4gIHRpbWluZz86IGZoaXIuVGltaW5nfGZoaXIuUGVyaW9kfGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdGltaW5nIHNjaGVkdWxlIGZvciB0aGUgdXNlIG9mIHRoZSBkZXZpY2UgVGhlIFNjaGVkdWxlIGRhdGEgdHlwZSBhbGxvd3MgbWFueSBkaWZmZXJlbnQgZXhwcmVzc2lvbnMsIGZvciBleGFtcGxlLiBcIkV2ZXJ5IDggaG91cnNcIjsgXCJUaHJlZSB0aW1lcyBhIGRheVwiOyBcIjEvMiBhbiBob3VyIGJlZm9yZSBicmVha2Zhc3QgZm9yIDEwIGRheXMgZnJvbSAyMy1EZWMgMjAxMTpcIjsgXCIxNSBPY3QgMjAxMywgMTcgT2N0IDIwMTMgYW5kIDEgTm92IDIwMTNcIi5cclxuICAgKi9cclxuICB0aW1pbmdUaW1pbmc/OiBmaGlyLlRpbWluZ0FyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1pbmcgc2NoZWR1bGUgZm9yIHRoZSB1c2Ugb2YgdGhlIGRldmljZSBUaGUgU2NoZWR1bGUgZGF0YSB0eXBlIGFsbG93cyBtYW55IGRpZmZlcmVudCBleHByZXNzaW9ucywgZm9yIGV4YW1wbGUuIFwiRXZlcnkgOCBob3Vyc1wiOyBcIlRocmVlIHRpbWVzIGEgZGF5XCI7IFwiMS8yIGFuIGhvdXIgYmVmb3JlIGJyZWFrZmFzdCBmb3IgMTAgZGF5cyBmcm9tIDIzLURlYyAyMDExOlwiOyBcIjE1IE9jdCAyMDEzLCAxNyBPY3QgMjAxMyBhbmQgMSBOb3YgMjAxM1wiLlxyXG4gICAqL1xyXG4gIHRpbWluZ1BlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWluZyBzY2hlZHVsZSBmb3IgdGhlIHVzZSBvZiB0aGUgZGV2aWNlIFRoZSBTY2hlZHVsZSBkYXRhIHR5cGUgYWxsb3dzIG1hbnkgZGlmZmVyZW50IGV4cHJlc3Npb25zLCBmb3IgZXhhbXBsZS4gXCJFdmVyeSA4IGhvdXJzXCI7IFwiVGhyZWUgdGltZXMgYSBkYXlcIjsgXCIxLzIgYW4gaG91ciBiZWZvcmUgYnJlYWtmYXN0IGZvciAxMCBkYXlzIGZyb20gMjMtRGVjIDIwMTE6XCI7IFwiMTUgT2N0IDIwMTMsIDE3IE9jdCAyMDEzIGFuZCAxIE5vdiAyMDEzXCIuXHJcbiAgICovXHJcbiAgdGltaW5nRGF0ZVRpbWU/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIENoYXJhY3Rlcml6ZXMgaG93IHF1aWNrbHkgdGhlICB1c2Ugb2YgZGV2aWNlIG11c3QgYmUgaW5pdGlhdGVkLiBJbmNsdWRlcyBjb25jZXB0cyBzdWNoIGFzIHN0YXQsIHVyZ2VudCwgcm91dGluZS5cclxuICAgKi9cclxuICBwcmlvcml0eT86IGZoaXIuRmhpckNvZGU8RGV2aWNlVXNlUmVxdWVzdFByaW9yaXR5Q29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IERldmljZVVzZVJlcXVlc3QucHJpb3JpdHlcclxuICAgKi9cclxuICBfcHJpb3JpdHk/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHJlcXVlc3QgZm9yIGEgcGF0aWVudCB0byBlbXBsb3kgYSBtZWRpY2FsIGRldmljZS4gVGhlIGRldmljZSBtYXkgYmUgYW4gaW1wbGFudGFibGUgZGV2aWNlLCBvciBhbiBleHRlcm5hbCBhc3Npc3RpdmUgZGV2aWNlLCBzdWNoIGFzIGEgd2Fsa2VyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERldmljZVVzZVJlcXVlc3QgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0RldmljZVVzZVJlcXVlc3QnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiRGV2aWNlVXNlUmVxdWVzdFwiO1xyXG4gIC8qKlxyXG4gICAqIEtub3dpbmcgd2hlcmUgdGhlIGRldmljZSBpcyB0YXJnZXRlZCBpcyBpbXBvcnRhbnQgZm9yIHRyYWNraW5nIGlmIG11bHRpcGxlIHNpdGVzIGFyZSBwb3NzaWJsZS5cclxuICAgKi9cclxuICBwdWJsaWMgYm9keVNpdGU/OiAoZmhpci5Db2RlYWJsZUNvbmNlcHR8Zmhpci5SZWZlcmVuY2UpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IERldmljZVVzZVJlcXVlc3QuYm9keVNpdGVbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfYm9keVNpdGVJc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBUaGUgc3RhdHVzIG9mIHRoZSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM/OiBmaGlyLkZoaXJDb2RlPERldmljZVVzZVJlcXVlc3RTdGF0dXNDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkZXRhaWxzIG9mIHRoZSBkZXZpY2UgIHRvIGJlIHVzZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGRldmljZTogZmhpci5SZWZlcmVuY2V8bnVsbDtcclxuICAvKipcclxuICAgKiBBbiBlbmNvdW50ZXIgdGhhdCBwcm92aWRlcyBhZGRpdGlvbmFsIGNvbnRleHQgaW4gd2hpY2ggdGhpcyByZXF1ZXN0IGlzIG1hZGUuXHJcbiAgICovXHJcbiAgcHVibGljIGVuY291bnRlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVycyBhc3NpZ25lZCB0byB0aGlzIG9yZGVyIGJ5IHRoZSBvcmRlcmVyIG9yIGJ5IHRoZSByZWNlaXZlci5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogUmVhc29uIG9yIGp1c3RpZmljYXRpb24gZm9yIHRoZSB1c2Ugb2YgdGhpcyBkZXZpY2UuXHJcbiAgICovXHJcbiAgcHVibGljIGluZGljYXRpb246IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogRGV0YWlscyBhYm91dCB0aGlzIHJlcXVlc3QgdGhhdCB3ZXJlIG5vdCByZXByZXNlbnRlZCBhdCBhbGwgb3Igc3VmZmljaWVudGx5IGluIG9uZSBvZiB0aGUgYXR0cmlidXRlcyBwcm92aWRlZCBpbiBhIGNsYXNzLiBUaGVzZSBtYXkgaW5jbHVkZSBmb3IgZXhhbXBsZSBhIGNvbW1lbnQsIGFuIGluc3RydWN0aW9uLCBvciBhIG5vdGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBzdGF0ZW1lbnQuXHJcbiAgICovXHJcbiAgcHVibGljIG5vdGVzOiBmaGlyLkZoaXJTdHJpbmdbXTtcclxuICAvKipcclxuICAgKiBUaGUgcHJvcG9zZWQgYWN0IG11c3QgYmUgcGVyZm9ybWVkIGlmIHRoZSBpbmRpY2F0ZWQgY29uZGl0aW9ucyBvY2N1ciwgZS5nLi4sIHNob3J0bmVzcyBvZiBicmVhdGgsIFNwTzIgbGVzcyB0aGFuIHglLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwcm5SZWFzb246IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWUgd2hlbiB0aGUgcmVxdWVzdCB3YXMgbWFkZS5cclxuICAgKi9cclxuICBwdWJsaWMgb3JkZXJlZE9uPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lIGF0IHdoaWNoIHRoZSByZXF1ZXN0IHdhcyBtYWRlL3JlY29yZGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWNvcmRlZE9uPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXRpZW50IHdobyB3aWxsIHVzZSB0aGUgZGV2aWNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdWJqZWN0OiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1pbmcgc2NoZWR1bGUgZm9yIHRoZSB1c2Ugb2YgdGhlIGRldmljZSBUaGUgU2NoZWR1bGUgZGF0YSB0eXBlIGFsbG93cyBtYW55IGRpZmZlcmVudCBleHByZXNzaW9ucywgZm9yIGV4YW1wbGUuIFwiRXZlcnkgOCBob3Vyc1wiOyBcIlRocmVlIHRpbWVzIGEgZGF5XCI7IFwiMS8yIGFuIGhvdXIgYmVmb3JlIGJyZWFrZmFzdCBmb3IgMTAgZGF5cyBmcm9tIDIzLURlYyAyMDExOlwiOyBcIjE1IE9jdCAyMDEzLCAxNyBPY3QgMjAxMyBhbmQgMSBOb3YgMjAxM1wiLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0aW1pbmc/OiAoZmhpci5UaW1pbmd8Zmhpci5QZXJpb2R8Zmhpci5GaGlyRGF0ZVRpbWUpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IERldmljZVVzZVJlcXVlc3QudGltaW5nW3hdXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBfZnRzX3RpbWluZ0lzQ2hvaWNlOnRydWUgPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIENoYXJhY3Rlcml6ZXMgaG93IHF1aWNrbHkgdGhlICB1c2Ugb2YgZGV2aWNlIG11c3QgYmUgaW5pdGlhdGVkLiBJbmNsdWRlcyBjb25jZXB0cyBzdWNoIGFzIHN0YXQsIHVyZ2VudCwgcm91dGluZS5cclxuICAgKi9cclxuICBwdWJsaWMgcHJpb3JpdHk/OiBmaGlyLkZoaXJDb2RlPERldmljZVVzZVJlcXVlc3RQcmlvcml0eUNvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgRGV2aWNlVXNlUmVxdWVzdCAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPERldmljZVVzZVJlcXVlc3RBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnRGV2aWNlVXNlUmVxdWVzdCc7XHJcbiAgICBpZiAoc291cmNlWydib2R5U2l0ZSddKSB7IHRoaXMuYm9keVNpdGUgPSBzb3VyY2UuYm9keVNpdGU7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnYm9keVNpdGVDb2RlYWJsZUNvbmNlcHQnXSkgeyB0aGlzLmJvZHlTaXRlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5ib2R5U2l0ZUNvZGVhYmxlQ29uY2VwdCk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnYm9keVNpdGVSZWZlcmVuY2UnXSkgeyB0aGlzLmJvZHlTaXRlID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5ib2R5U2l0ZVJlZmVyZW5jZSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8RGV2aWNlVXNlUmVxdWVzdFN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxEZXZpY2VVc2VSZXF1ZXN0U3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydkZXZpY2UnXSkgeyB0aGlzLmRldmljZSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuZGV2aWNlKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZGV2aWNlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZW5jb3VudGVyJ10pIHsgdGhpcy5lbmNvdW50ZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmVuY291bnRlcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2luZGljYXRpb24nXSkgeyB0aGlzLmluZGljYXRpb24gPSBzb3VyY2UuaW5kaWNhdGlvbi5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmluZGljYXRpb24gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnbm90ZXMnXSkgeyB0aGlzLm5vdGVzID0gc291cmNlLm5vdGVzLm1hcCgoeCkgPT4gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHh9KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLm5vdGVzID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ19ub3RlcyddKSB7XHJcbiAgICAgIHNvdXJjZS5fbm90ZXMuZm9yRWFjaCgoeCxpKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubm90ZXMubGVuZ3RoID49IGkpIHsgaWYgKHgpIHsgdGhpcy5ub3Rlc1tpXS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoeCk7IH0gfVxyXG4gICAgICAgIGVsc2UgeyBpZiAoeCkgeyB0aGlzLm5vdGVzLnB1c2gobmV3IGZoaXIuRmhpclN0cmluZyh4IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pKTsgfSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncHJuUmVhc29uJ10pIHsgdGhpcy5wcm5SZWFzb24gPSBzb3VyY2UucHJuUmVhc29uLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucHJuUmVhc29uID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ29yZGVyZWRPbiddKSB7IHRoaXMub3JkZXJlZE9uID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLm9yZGVyZWRPbn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfb3JkZXJlZE9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMub3JkZXJlZE9uKSB7IHRoaXMub3JkZXJlZE9uLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX29yZGVyZWRPbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLm9yZGVyZWRPbiA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX29yZGVyZWRPbiBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydyZWNvcmRlZE9uJ10pIHsgdGhpcy5yZWNvcmRlZE9uID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLnJlY29yZGVkT259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3JlY29yZGVkT24nXSkge1xyXG4gICAgICBpZiAodGhpcy5yZWNvcmRlZE9uKSB7IHRoaXMucmVjb3JkZWRPbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9yZWNvcmRlZE9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucmVjb3JkZWRPbiA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX3JlY29yZGVkT24gYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3ViamVjdCddKSB7IHRoaXMuc3ViamVjdCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uuc3ViamVjdCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN1YmplY3QgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWyd0aW1pbmcnXSkgeyB0aGlzLnRpbWluZyA9IHNvdXJjZS50aW1pbmc7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndGltaW5nVGltaW5nJ10pIHsgdGhpcy50aW1pbmcgPSBuZXcgZmhpci5UaW1pbmcoc291cmNlLnRpbWluZ1RpbWluZyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndGltaW5nUGVyaW9kJ10pIHsgdGhpcy50aW1pbmcgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLnRpbWluZ1BlcmlvZCk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndGltaW5nRGF0ZVRpbWUnXSkgeyB0aGlzLnRpbWluZyA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS50aW1pbmdEYXRlVGltZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydwcmlvcml0eSddKSB7IHRoaXMucHJpb3JpdHkgPSBuZXcgZmhpci5GaGlyQ29kZTxEZXZpY2VVc2VSZXF1ZXN0UHJpb3JpdHlDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2UucHJpb3JpdHl9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3ByaW9yaXR5J10pIHtcclxuICAgICAgaWYgKHRoaXMucHJpb3JpdHkpIHsgdGhpcy5wcmlvcml0eS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9wcmlvcml0eSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnByaW9yaXR5ID0gbmV3IGZoaXIuRmhpckNvZGU8RGV2aWNlVXNlUmVxdWVzdFByaW9yaXR5Q29kZVR5cGU+KHNvdXJjZS5fcHJpb3JpdHkgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdEZXZpY2VVc2VSZXF1ZXN0JyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUFMoJ3Jlc291cmNlVHlwZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnYm9keVNpdGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1NWKCdzdGF0dXMnLGV4cCwnRGV2aWNlVXNlUmVxdWVzdFN0YXR1cycsRGV2aWNlVXNlUmVxdWVzdFN0YXR1c1ZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdkZXZpY2UnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2VuY291bnRlcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaW5kaWNhdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnbm90ZXMnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ3ByblJlYXNvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnb3JkZXJlZE9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdyZWNvcmRlZE9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdzdWJqZWN0JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd0aW1pbmcnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1NWKCdwcmlvcml0eScsZXhwLCdEZXZpY2VVc2VSZXF1ZXN0UHJpb3JpdHknLERldmljZVVzZVJlcXVlc3RQcmlvcml0eVZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==