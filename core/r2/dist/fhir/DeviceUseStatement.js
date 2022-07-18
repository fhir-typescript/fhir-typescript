// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DeviceUseStatement
import * as fhir from '../fhir.js';
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
        if (source['bodySite']) {
            this.bodySite = source.bodySite;
        }
        else if (source['bodySiteCodeableConcept']) {
            this.bodySite = new fhir.CodeableConcept(source.bodySiteCodeableConcept);
        }
        else if (source['bodySiteReference']) {
            this.bodySite = new fhir.Reference(source.bodySiteReference);
        }
        if (source['whenUsed']) {
            this.whenUsed = new fhir.Period(source.whenUsed);
        }
        if (source['device']) {
            this.device = new fhir.Reference(source.device);
        }
        else {
            this.device = null;
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
        this.vOS('bodySite', exp);
        this.vOS('whenUsed', exp);
        this.vRS('device', exp);
        this.vOA('identifier', exp);
        this.vOA('indication', exp);
        this.vOA('notes', exp);
        this.vOS('recordedOn', exp);
        this.vRS('subject', exp);
        this.vOS('timing', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
DeviceUseStatement._fts_dataType = 'DeviceUseStatement';
/**
 * Internal flag to properly serialize choice-type element DeviceUseStatement.bodySite[x]
 */
DeviceUseStatement._fts_bodySiteIsChoice = true;
/**
 * Internal flag to properly serialize choice-type element DeviceUseStatement.timing[x]
 */
DeviceUseStatement._fts_timingIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlVXNlU3RhdGVtZW50LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9EZXZpY2VVc2VTdGF0ZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBNEVuQzs7R0FFRztBQUNILE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxJQUFJLENBQUMsY0FBYztJQXFEekQ7O09BRUc7SUFDSCxZQUFZLFNBQXlDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQy9GLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBb0IsQ0FBQztRQUN6QyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUFFO2FBQ3ZELElBQUksTUFBTSxDQUFDLHlCQUF5QixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUFFO2FBQ3BILElBQUksTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUFFO1FBQ3ZHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQUU7UUFDN0UsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxH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WUFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBekdEOztHQUVHO0FBQzZCLGdDQUFhLEdBQVUsb0JBQW9CLENBQUM7QUFTNUU7O0dBRUc7QUFDdUIsd0NBQXFCLEdBQVEsSUFBSSxDQUFDO0FBaUM1RDs7R0FFRztBQUN1QixzQ0FBbUIsR0FBUSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IERldmljZVVzZVN0YXRlbWVudFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBEZXZpY2VVc2VTdGF0ZW1lbnQgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlVXNlU3RhdGVtZW50QXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiRGV2aWNlVXNlU3RhdGVtZW50XCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEtub3dpbmcgd2hlcmUgdGhlIGRldmljZSBpcyB0YXJnZXRlZCBpcyBpbXBvcnRhbnQgZm9yIHRyYWNraW5nIGlmIG11bHRpcGxlIHNpdGVzIGFyZSBwb3NzaWJsZS5cclxuICAgKi9cclxuICBib2R5U2l0ZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBLbm93aW5nIHdoZXJlIHRoZSBkZXZpY2UgaXMgdGFyZ2V0ZWQgaXMgaW1wb3J0YW50IGZvciB0cmFja2luZyBpZiBtdWx0aXBsZSBzaXRlcyBhcmUgcG9zc2libGUuXHJcbiAgICovXHJcbiAgYm9keVNpdGVDb2RlYWJsZUNvbmNlcHQ/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEtub3dpbmcgd2hlcmUgdGhlIGRldmljZSBpcyB0YXJnZXRlZCBpcyBpbXBvcnRhbnQgZm9yIHRyYWNraW5nIGlmIG11bHRpcGxlIHNpdGVzIGFyZSBwb3NzaWJsZS5cclxuICAgKi9cclxuICBib2R5U2l0ZVJlZmVyZW5jZT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWUgcGVyaW9kIG92ZXIgd2hpY2ggdGhlIGRldmljZSB3YXMgdXNlZC5cclxuICAgKi9cclxuICB3aGVuVXNlZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRldGFpbHMgb2YgdGhlIGRldmljZSB1c2VkLlxyXG4gICAqL1xyXG4gIGRldmljZTogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogQW4gZXh0ZXJuYWwgaWRlbnRpZmllciBmb3IgdGhpcyBzdGF0ZW1lbnQgc3VjaCBhcyBhbiBJUkkuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVhc29uIG9yIGp1c3RpZmljYXRpb24gZm9yIHRoZSB1c2Ugb2YgdGhlIGRldmljZS5cclxuICAgKi9cclxuICBpbmRpY2F0aW9uPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERldGFpbHMgYWJvdXQgdGhlIGRldmljZSBzdGF0ZW1lbnQgdGhhdCB3ZXJlIG5vdCByZXByZXNlbnRlZCBhdCBhbGwgb3Igc3VmZmljaWVudGx5IGluIG9uZSBvZiB0aGUgYXR0cmlidXRlcyBwcm92aWRlZCBpbiBhIGNsYXNzLiBUaGVzZSBtYXkgaW5jbHVkZSBmb3IgZXhhbXBsZSBhIGNvbW1lbnQsIGFuIGluc3RydWN0aW9uLCBvciBhIG5vdGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBzdGF0ZW1lbnQuXHJcbiAgICovXHJcbiAgbm90ZXM/OiBmaGlyLkZoaXJTdHJpbmdbXXwoc3RyaW5nfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEZXZpY2VVc2VTdGF0ZW1lbnQubm90ZXNcclxuICAgKi9cclxuICBfbm90ZXM/OihmaGlyLkZoaXJFbGVtZW50QXJnc3xudWxsKVtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lIGF0IHdoaWNoIHRoZSBzdGF0ZW1lbnQgd2FzIG1hZGUvcmVjb3JkZWQuXHJcbiAgICovXHJcbiAgcmVjb3JkZWRPbj86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IERldmljZVVzZVN0YXRlbWVudC5yZWNvcmRlZE9uXHJcbiAgICovXHJcbiAgX3JlY29yZGVkT24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXRpZW50IHdobyB1c2VkIHRoZSBkZXZpY2UuXHJcbiAgICovXHJcbiAgc3ViamVjdDogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogSG93IG9mdGVuIHRoZSBkZXZpY2Ugd2FzIHVzZWQuXHJcbiAgICovXHJcbiAgdGltaW5nPzogZmhpci5UaW1pbmd8Zmhpci5QZXJpb2R8Zmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEhvdyBvZnRlbiB0aGUgZGV2aWNlIHdhcyB1c2VkLlxyXG4gICAqL1xyXG4gIHRpbWluZ1RpbWluZz86IGZoaXIuVGltaW5nQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSG93IG9mdGVuIHRoZSBkZXZpY2Ugd2FzIHVzZWQuXHJcbiAgICovXHJcbiAgdGltaW5nUGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBIb3cgb2Z0ZW4gdGhlIGRldmljZSB3YXMgdXNlZC5cclxuICAgKi9cclxuICB0aW1pbmdEYXRlVGltZT86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHJlY29yZCBvZiBhIGRldmljZSBiZWluZyB1c2VkIGJ5IGEgcGF0aWVudCB3aGVyZSB0aGUgcmVjb3JkIGlzIHRoZSByZXN1bHQgb2YgYSByZXBvcnQgZnJvbSB0aGUgcGF0aWVudCBvciBhbm90aGVyIGNsaW5pY2lhbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEZXZpY2VVc2VTdGF0ZW1lbnQgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0RldmljZVVzZVN0YXRlbWVudCc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJEZXZpY2VVc2VTdGF0ZW1lbnRcIjtcclxuICAvKipcclxuICAgKiBLbm93aW5nIHdoZXJlIHRoZSBkZXZpY2UgaXMgdGFyZ2V0ZWQgaXMgaW1wb3J0YW50IGZvciB0cmFja2luZyBpZiBtdWx0aXBsZSBzaXRlcyBhcmUgcG9zc2libGUuXHJcbiAgICovXHJcbiAgcHVibGljIGJvZHlTaXRlPzogKGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUmVmZXJlbmNlKXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgZmxhZyB0byBwcm9wZXJseSBzZXJpYWxpemUgY2hvaWNlLXR5cGUgZWxlbWVudCBEZXZpY2VVc2VTdGF0ZW1lbnQuYm9keVNpdGVbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfYm9keVNpdGVJc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBUaGUgdGltZSBwZXJpb2Qgb3ZlciB3aGljaCB0aGUgZGV2aWNlIHdhcyB1c2VkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB3aGVuVXNlZD86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGV0YWlscyBvZiB0aGUgZGV2aWNlIHVzZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGRldmljZTogZmhpci5SZWZlcmVuY2V8bnVsbDtcclxuICAvKipcclxuICAgKiBBbiBleHRlcm5hbCBpZGVudGlmaWVyIGZvciB0aGlzIHN0YXRlbWVudCBzdWNoIGFzIGFuIElSSS5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogUmVhc29uIG9yIGp1c3RpZmljYXRpb24gZm9yIHRoZSB1c2Ugb2YgdGhlIGRldmljZS5cclxuICAgKi9cclxuICBwdWJsaWMgaW5kaWNhdGlvbjogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBEZXRhaWxzIGFib3V0IHRoZSBkZXZpY2Ugc3RhdGVtZW50IHRoYXQgd2VyZSBub3QgcmVwcmVzZW50ZWQgYXQgYWxsIG9yIHN1ZmZpY2llbnRseSBpbiBvbmUgb2YgdGhlIGF0dHJpYnV0ZXMgcHJvdmlkZWQgaW4gYSBjbGFzcy4gVGhlc2UgbWF5IGluY2x1ZGUgZm9yIGV4YW1wbGUgYSBjb21tZW50LCBhbiBpbnN0cnVjdGlvbiwgb3IgYSBub3RlIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3RhdGVtZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBub3RlczogZmhpci5GaGlyU3RyaW5nW107XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWUgYXQgd2hpY2ggdGhlIHN0YXRlbWVudCB3YXMgbWFkZS9yZWNvcmRlZC5cclxuICAgKi9cclxuICBwdWJsaWMgcmVjb3JkZWRPbj86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcGF0aWVudCB3aG8gdXNlZCB0aGUgZGV2aWNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdWJqZWN0OiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEhvdyBvZnRlbiB0aGUgZGV2aWNlIHdhcyB1c2VkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0aW1pbmc/OiAoZmhpci5UaW1pbmd8Zmhpci5QZXJpb2R8Zmhpci5GaGlyRGF0ZVRpbWUpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IERldmljZVVzZVN0YXRlbWVudC50aW1pbmdbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfdGltaW5nSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgRGV2aWNlVXNlU3RhdGVtZW50IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8RGV2aWNlVXNlU3RhdGVtZW50QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ0RldmljZVVzZVN0YXRlbWVudCc7XHJcbiAgICBpZiAoc291cmNlWydib2R5U2l0ZSddKSB7IHRoaXMuYm9keVNpdGUgPSBzb3VyY2UuYm9keVNpdGU7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnYm9keVNpdGVDb2RlYWJsZUNvbmNlcHQnXSkgeyB0aGlzLmJvZHlTaXRlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5ib2R5U2l0ZUNvZGVhYmxlQ29uY2VwdCk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnYm9keVNpdGVSZWZlcmVuY2UnXSkgeyB0aGlzLmJvZHlTaXRlID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5ib2R5U2l0ZVJlZmVyZW5jZSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3doZW5Vc2VkJ10pIHsgdGhpcy53aGVuVXNlZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2Uud2hlblVzZWQpOyB9XHJcbiAgICBpZiAoc291cmNlWydkZXZpY2UnXSkgeyB0aGlzLmRldmljZSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuZGV2aWNlKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZGV2aWNlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnaW5kaWNhdGlvbiddKSB7IHRoaXMuaW5kaWNhdGlvbiA9IHNvdXJjZS5pbmRpY2F0aW9uLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaW5kaWNhdGlvbiA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydub3RlcyddKSB7IHRoaXMubm90ZXMgPSBzb3VyY2Uubm90ZXMubWFwKCh4KSA9PiBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogeH0pKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMubm90ZXMgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX25vdGVzJ10pIHtcclxuICAgICAgc291cmNlLl9ub3Rlcy5mb3JFYWNoKCh4LGkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5ub3Rlcy5sZW5ndGggPj0gaSkgeyBpZiAoeCkgeyB0aGlzLm5vdGVzW2ldLmFkZEV4dGVuZGVkUHJvcGVydGllcyh4KTsgfSB9XHJcbiAgICAgICAgZWxzZSB7IGlmICh4KSB7IHRoaXMubm90ZXMucHVzaChuZXcgZmhpci5GaGlyU3RyaW5nKHggYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPikpOyB9IH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydyZWNvcmRlZE9uJ10pIHsgdGhpcy5yZWNvcmRlZE9uID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLnJlY29yZGVkT259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3JlY29yZGVkT24nXSkge1xyXG4gICAgICBpZiAodGhpcy5yZWNvcmRlZE9uKSB7IHRoaXMucmVjb3JkZWRPbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9yZWNvcmRlZE9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucmVjb3JkZWRPbiA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX3JlY29yZGVkT24gYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3ViamVjdCddKSB7IHRoaXMuc3ViamVjdCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uuc3ViamVjdCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN1YmplY3QgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWyd0aW1pbmcnXSkgeyB0aGlzLnRpbWluZyA9IHNvdXJjZS50aW1pbmc7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndGltaW5nVGltaW5nJ10pIHsgdGhpcy50aW1pbmcgPSBuZXcgZmhpci5UaW1pbmcoc291cmNlLnRpbWluZ1RpbWluZyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndGltaW5nUGVyaW9kJ10pIHsgdGhpcy50aW1pbmcgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLnRpbWluZ1BlcmlvZCk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndGltaW5nRGF0ZVRpbWUnXSkgeyB0aGlzLnRpbWluZyA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS50aW1pbmdEYXRlVGltZX0pOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnRGV2aWNlVXNlU3RhdGVtZW50JyB9XHJcbiAgICB0aGlzLnZSUygncmVzb3VyY2VUeXBlJyxleHApXHJcbiAgICB0aGlzLnZPUygnYm9keVNpdGUnLGV4cClcclxuICAgIHRoaXMudk9TKCd3aGVuVXNlZCcsZXhwKVxyXG4gICAgdGhpcy52UlMoJ2RldmljZScsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2lkZW50aWZpZXInLGV4cClcclxuICAgIHRoaXMudk9BKCdpbmRpY2F0aW9uJyxleHApXHJcbiAgICB0aGlzLnZPQSgnbm90ZXMnLGV4cClcclxuICAgIHRoaXMudk9TKCdyZWNvcmRlZE9uJyxleHApXHJcbiAgICB0aGlzLnZSUygnc3ViamVjdCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3RpbWluZycsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19