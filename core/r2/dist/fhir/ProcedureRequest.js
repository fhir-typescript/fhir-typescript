// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: ProcedureRequest
import * as fhir from '../fhir.js';
// @ts-ignore
import { ProcedureRequestStatusVsValidation } from '../fhirValueSets/ProcedureRequestStatusVsValidation.js';
// @ts-ignore
import { ProcedureRequestPriorityVsValidation } from '../fhirValueSets/ProcedureRequestPriorityVsValidation.js';
/**
 * A request for a procedure to be performed. May be a proposal or an order.
 */
export class ProcedureRequest extends fhir.DomainResource {
    /**
     * Default constructor for ProcedureRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'ProcedureRequest';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options));
        }
        else {
            this.identifier = [];
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject, options);
        }
        else {
            this.subject = null;
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code, options);
        }
        else {
            this.code = null;
        }
        if (source['bodySite']) {
            this.bodySite = source.bodySite.map((x) => new fhir.CodeableConcept(x, options));
        }
        else {
            this.bodySite = [];
        }
        if (source['reason']) {
            this.reason = source.reason;
        }
        else if (source['reasonCodeableConcept']) {
            this.reason = new fhir.CodeableConcept(source.reasonCodeableConcept, options);
        }
        else if (source['reasonReference']) {
            this.reason = new fhir.Reference(source.reasonReference, options);
        }
        if (source['scheduled']) {
            this.scheduled = source.scheduled;
        }
        else if (source['scheduledDateTime'] !== undefined) {
            this.scheduled = new fhir.FhirDateTime({ value: source.scheduledDateTime }, options);
        }
        else if (source['scheduledPeriod']) {
            this.scheduled = new fhir.Period(source.scheduledPeriod, options);
        }
        else if (source['scheduledTiming']) {
            this.scheduled = new fhir.Timing(source.scheduledTiming, options);
        }
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter, options);
        }
        if (source['performer']) {
            this.performer = new fhir.Reference(source.performer, options);
        }
        if (source['status'] !== undefined) {
            this.status = new fhir.FhirCode({ value: source.status }, options);
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status, options);
            }
        }
        if (source['notes']) {
            this.notes = source.notes.map((x) => new fhir.Annotation(x, options));
        }
        else {
            this.notes = [];
        }
        if (source['asNeeded']) {
            this.asNeeded = source.asNeeded;
        }
        else if (source['asNeededBoolean'] !== undefined) {
            this.asNeeded = new fhir.FhirBoolean({ value: source.asNeededBoolean }, options);
        }
        else if (source['asNeededCodeableConcept']) {
            this.asNeeded = new fhir.CodeableConcept(source.asNeededCodeableConcept, options);
        }
        if (source['orderedOn'] !== undefined) {
            this.orderedOn = new fhir.FhirDateTime({ value: source.orderedOn }, options);
        }
        if (source['_orderedOn']) {
            if (this.orderedOn) {
                this.orderedOn.addExtendedProperties(source._orderedOn);
            }
            else {
                this.orderedOn = new fhir.FhirDateTime(source._orderedOn, options);
            }
        }
        if (source['orderer']) {
            this.orderer = new fhir.Reference(source.orderer, options);
        }
        if (source['priority'] !== undefined) {
            this.priority = new fhir.FhirCode({ value: source.priority }, options);
        }
        if (source['_priority']) {
            if (this.priority) {
                this.priority.addExtendedProperties(source._priority);
            }
            else {
                this.priority = new fhir.FhirCode(source._priority, options);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'ProcedureRequest';
        }
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vRS('subject', exp));
        iss.push(...this.vRS('code', exp));
        iss.push(...this.vOA('bodySite', exp));
        iss.push(...this.vOS('reason', exp));
        iss.push(...this.vOS('scheduled', exp));
        iss.push(...this.vOS('encounter', exp));
        iss.push(...this.vOS('performer', exp));
        iss.push(...this.vOSV('status', exp, 'ProcedureRequestStatus', ProcedureRequestStatusVsValidation, 'r'));
        iss.push(...this.vOA('notes', exp));
        iss.push(...this.vOS('asNeeded', exp));
        iss.push(...this.vOS('orderedOn', exp));
        iss.push(...this.vOS('orderer', exp));
        iss.push(...this.vOSV('priority', exp, 'ProcedureRequestPriority', ProcedureRequestPriorityVsValidation, 'r'));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
ProcedureRequest._fts_dataType = 'ProcedureRequest';
/**
 * Internal flag to properly serialize choice-type element ProcedureRequest.reason[x]
 */
ProcedureRequest._fts_reasonIsChoice = true;
/**
 * Internal flag to properly serialize choice-type element ProcedureRequest.scheduled[x]
 */
ProcedureRequest._fts_scheduledIsChoice = true;
/**
 * Internal flag to properly serialize choice-type element ProcedureRequest.asNeeded[x]
 */
ProcedureRequest._fts_asNeededIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2VkdXJlUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvUHJvY2VkdXJlUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRzVHLGFBQWE7QUFDYixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQTJHaEg7O0dBRUc7QUFDSCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUE2RXZEOztPQUVHO0lBQ0gsWUFBWSxTQUF1QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUM3RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FBRTthQUN6RztZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDOUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDakY7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUFF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LEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLHdCQUF3QixFQUFDLGtDQUFrQyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLEdBQUcsRUFBQywwQkFBMEIsRUFBQyxvQ0FBb0MsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNHLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUE5SUQ7O0dBRUc7QUFDNkIsOEJBQWEsR0FBVSxrQkFBa0IsQ0FBQztBQXlCMUU7O0dBRUc7QUFDdUIsb0NBQW1CLEdBQVEsSUFBSSxDQUFDO0FBSzFEOztHQUVHO0FBQ3VCLHVDQUFzQixHQUFRLElBQUksQ0FBQztBQXFCN0Q7O0dBRUc7QUFDdUIsc0NBQXFCLEdBQVEsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBQcm9jZWR1cmVSZXF1ZXN0XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBQcm9jZWR1cmVSZXF1ZXN0U3RhdHVzQ29kZXMsICBQcm9jZWR1cmVSZXF1ZXN0U3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1Byb2NlZHVyZVJlcXVlc3RTdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUHJvY2VkdXJlUmVxdWVzdFN0YXR1c1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUHJvY2VkdXJlUmVxdWVzdFN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUHJvY2VkdXJlUmVxdWVzdFByaW9yaXR5Q29kZXMsICBQcm9jZWR1cmVSZXF1ZXN0UHJpb3JpdHlDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUHJvY2VkdXJlUmVxdWVzdFByaW9yaXR5Q29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFByb2NlZHVyZVJlcXVlc3RQcmlvcml0eVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUHJvY2VkdXJlUmVxdWVzdFByaW9yaXR5VnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFByb2NlZHVyZVJlcXVlc3QgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvY2VkdXJlUmVxdWVzdEFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIlByb2NlZHVyZVJlcXVlc3RcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcnMgYXNzaWduZWQgdG8gdGhpcyBvcmRlciBieSB0aGUgb3JkZXIgb3IgYnkgdGhlIHJlY2VpdmVyLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJzb24sIGFuaW1hbCBvciBncm91cCB0aGF0IHNob3VsZCByZWNlaXZlIHRoZSBwcm9jZWR1cmUuXHJcbiAgICovXHJcbiAgc3ViamVjdDogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIHNwZWNpZmljIHByb2NlZHVyZSB0aGF0IGlzIG9yZGVyZWQuIFVzZSB0ZXh0IGlmIHRoZSBleGFjdCBuYXR1cmUgb2YgdGhlIHByb2NlZHVyZSBjYW5ub3QgYmUgY29kZWQuXHJcbiAgICovXHJcbiAgY29kZTogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogS25vd2luZyB3aGVyZSB0aGUgcHJvY2VkdXJlIGlzIG1hZGUgaXMgaW1wb3J0YW50IGZvciB0cmFja2luZyBpZiBtdWx0aXBsZSBzaXRlcyBhcmUgcG9zc2libGUuXHJcbiAgICovXHJcbiAgYm9keVNpdGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHJlYXNvbiB3aHkgdGhlIHByb2NlZHVyZSBpcyBiZWluZyBwcm9wb3NlZCBvciBvcmRlcmVkLiBUaGlzIHByb2NlZHVyZSByZXF1ZXN0IG1heSBiZSBtb3RpdmF0ZWQgYnkgYSBDb25kaXRpb24gZm9yIGluc3RhbmNlLlxyXG4gICAqL1xyXG4gIHJlYXNvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcmVhc29uIHdoeSB0aGUgcHJvY2VkdXJlIGlzIGJlaW5nIHByb3Bvc2VkIG9yIG9yZGVyZWQuIFRoaXMgcHJvY2VkdXJlIHJlcXVlc3QgbWF5IGJlIG1vdGl2YXRlZCBieSBhIENvbmRpdGlvbiBmb3IgaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgcmVhc29uQ29kZWFibGVDb25jZXB0PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcmVhc29uIHdoeSB0aGUgcHJvY2VkdXJlIGlzIGJlaW5nIHByb3Bvc2VkIG9yIG9yZGVyZWQuIFRoaXMgcHJvY2VkdXJlIHJlcXVlc3QgbWF5IGJlIG1vdGl2YXRlZCBieSBhIENvbmRpdGlvbiBmb3IgaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgcmVhc29uUmVmZXJlbmNlPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdGltaW5nIHNjaGVkdWxlIGZvciB0aGUgcHJvcG9zZWQgb3Igb3JkZXJlZCBwcm9jZWR1cmUuIFRoZSBTY2hlZHVsZSBkYXRhIHR5cGUgYWxsb3dzIG1hbnkgZGlmZmVyZW50IGV4cHJlc3Npb25zLiAgRS5nLiBcIkV2ZXJ5IDggaG91cnNcIjsgXCJUaHJlZSB0aW1lcyBhIGRheVwiOyBcIjEvMiBhbiBob3VyIGJlZm9yZSBicmVha2Zhc3QgZm9yIDEwIGRheXMgZnJvbSAyMy1EZWMgMjAxMTpcIjsgXCIxNSBPY3QgMjAxMywgMTcgT2N0IDIwMTMgYW5kIDEgTm92IDIwMTNcIi5cclxuICAgKi9cclxuICBzY2hlZHVsZWQ/OiBmaGlyLkZoaXJEYXRlVGltZXxmaGlyLlBlcmlvZHxmaGlyLlRpbWluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWluZyBzY2hlZHVsZSBmb3IgdGhlIHByb3Bvc2VkIG9yIG9yZGVyZWQgcHJvY2VkdXJlLiBUaGUgU2NoZWR1bGUgZGF0YSB0eXBlIGFsbG93cyBtYW55IGRpZmZlcmVudCBleHByZXNzaW9ucy4gIEUuZy4gXCJFdmVyeSA4IGhvdXJzXCI7IFwiVGhyZWUgdGltZXMgYSBkYXlcIjsgXCIxLzIgYW4gaG91ciBiZWZvcmUgYnJlYWtmYXN0IGZvciAxMCBkYXlzIGZyb20gMjMtRGVjIDIwMTE6XCI7IFwiMTUgT2N0IDIwMTMsIDE3IE9jdCAyMDEzIGFuZCAxIE5vdiAyMDEzXCIuXHJcbiAgICovXHJcbiAgc2NoZWR1bGVkRGF0ZVRpbWU/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1pbmcgc2NoZWR1bGUgZm9yIHRoZSBwcm9wb3NlZCBvciBvcmRlcmVkIHByb2NlZHVyZS4gVGhlIFNjaGVkdWxlIGRhdGEgdHlwZSBhbGxvd3MgbWFueSBkaWZmZXJlbnQgZXhwcmVzc2lvbnMuICBFLmcuIFwiRXZlcnkgOCBob3Vyc1wiOyBcIlRocmVlIHRpbWVzIGEgZGF5XCI7IFwiMS8yIGFuIGhvdXIgYmVmb3JlIGJyZWFrZmFzdCBmb3IgMTAgZGF5cyBmcm9tIDIzLURlYyAyMDExOlwiOyBcIjE1IE9jdCAyMDEzLCAxNyBPY3QgMjAxMyBhbmQgMSBOb3YgMjAxM1wiLlxyXG4gICAqL1xyXG4gIHNjaGVkdWxlZFBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWluZyBzY2hlZHVsZSBmb3IgdGhlIHByb3Bvc2VkIG9yIG9yZGVyZWQgcHJvY2VkdXJlLiBUaGUgU2NoZWR1bGUgZGF0YSB0eXBlIGFsbG93cyBtYW55IGRpZmZlcmVudCBleHByZXNzaW9ucy4gIEUuZy4gXCJFdmVyeSA4IGhvdXJzXCI7IFwiVGhyZWUgdGltZXMgYSBkYXlcIjsgXCIxLzIgYW4gaG91ciBiZWZvcmUgYnJlYWtmYXN0IGZvciAxMCBkYXlzIGZyb20gMjMtRGVjIDIwMTE6XCI7IFwiMTUgT2N0IDIwMTMsIDE3IE9jdCAyMDEzIGFuZCAxIE5vdiAyMDEzXCIuXHJcbiAgICovXHJcbiAgc2NoZWR1bGVkVGltaW5nPzogZmhpci5UaW1pbmdBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZW5jb3VudGVyIHdpdGhpbiB3aGljaCB0aGUgcHJvY2VkdXJlIHByb3Bvc2FsIG9yIHJlcXVlc3Qgd2FzIGNyZWF0ZWQuXHJcbiAgICovXHJcbiAgZW5jb3VudGVyPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBGb3IgZXhhbXBsZSwgdGhlIHN1cmdlb24sIGFuYWV0aGV0aXN0LCBlbmRvc2NvcGlzdCwgZXRjLlxyXG4gICAqL1xyXG4gIHBlcmZvcm1lcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHN0YXR1cyBvZiB0aGUgb3JkZXIuXHJcbiAgICovXHJcbiAgc3RhdHVzPzogZmhpci5GaGlyQ29kZTxQcm9jZWR1cmVSZXF1ZXN0U3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFByb2NlZHVyZVJlcXVlc3Quc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQW55IG90aGVyIG5vdGVzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHByb3Bvc2FsIG9yIG9yZGVyIC0gZS5nLiBwcm92aWRlciBpbnN0cnVjdGlvbnMuXHJcbiAgICovXHJcbiAgbm90ZXM/OiBmaGlyLkFubm90YXRpb25BcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIGEgQ29kZWFibGVDb25jZXB0IGlzIHByZXNlbnQsIGl0IGluZGljYXRlcyB0aGUgcHJlLWNvbmRpdGlvbiBmb3IgcGVyZm9ybWluZyB0aGUgcHJvY2VkdXJlLlxyXG4gICAqL1xyXG4gIGFzTmVlZGVkPzogZmhpci5GaGlyQm9vbGVhbnxmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgYSBDb2RlYWJsZUNvbmNlcHQgaXMgcHJlc2VudCwgaXQgaW5kaWNhdGVzIHRoZSBwcmUtY29uZGl0aW9uIGZvciBwZXJmb3JtaW5nIHRoZSBwcm9jZWR1cmUuXHJcbiAgICovXHJcbiAgYXNOZWVkZWRCb29sZWFuPzogZmhpci5GaGlyQm9vbGVhbnxib29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiBhIENvZGVhYmxlQ29uY2VwdCBpcyBwcmVzZW50LCBpdCBpbmRpY2F0ZXMgdGhlIHByZS1jb25kaXRpb24gZm9yIHBlcmZvcm1pbmcgdGhlIHByb2NlZHVyZS5cclxuICAgKi9cclxuICBhc05lZWRlZENvZGVhYmxlQ29uY2VwdD86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWUgd2hlbiB0aGUgcmVxdWVzdCB3YXMgbWFkZS5cclxuICAgKi9cclxuICBvcmRlcmVkT24/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBQcm9jZWR1cmVSZXF1ZXN0Lm9yZGVyZWRPblxyXG4gICAqL1xyXG4gIF9vcmRlcmVkT24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBoZWFsdGhjYXJlIHByb2Zlc3Npb25hbCByZXNwb25zaWJsZSBmb3IgcHJvcG9zaW5nIG9yIG9yZGVyaW5nIHRoZSBwcm9jZWR1cmUuXHJcbiAgICovXHJcbiAgb3JkZXJlcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNsaW5pY2FsIHByaW9yaXR5IGFzc29jaWF0ZWQgd2l0aCB0aGlzIG9yZGVyLlxyXG4gICAqL1xyXG4gIHByaW9yaXR5PzogZmhpci5GaGlyQ29kZTxQcm9jZWR1cmVSZXF1ZXN0UHJpb3JpdHlDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUHJvY2VkdXJlUmVxdWVzdC5wcmlvcml0eVxyXG4gICAqL1xyXG4gIF9wcmlvcml0eT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHJlcXVlc3QgZm9yIGEgcHJvY2VkdXJlIHRvIGJlIHBlcmZvcm1lZC4gTWF5IGJlIGEgcHJvcG9zYWwgb3IgYW4gb3JkZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvY2VkdXJlUmVxdWVzdCBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUHJvY2VkdXJlUmVxdWVzdCc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJQcm9jZWR1cmVSZXF1ZXN0XCI7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcnMgYXNzaWduZWQgdG8gdGhpcyBvcmRlciBieSB0aGUgb3JkZXIgb3IgYnkgdGhlIHJlY2VpdmVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBUaGUgcGVyc29uLCBhbmltYWwgb3IgZ3JvdXAgdGhhdCBzaG91bGQgcmVjZWl2ZSB0aGUgcHJvY2VkdXJlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdWJqZWN0OiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzcGVjaWZpYyBwcm9jZWR1cmUgdGhhdCBpcyBvcmRlcmVkLiBVc2UgdGV4dCBpZiB0aGUgZXhhY3QgbmF0dXJlIG9mIHRoZSBwcm9jZWR1cmUgY2Fubm90IGJlIGNvZGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2RlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEtub3dpbmcgd2hlcmUgdGhlIHByb2NlZHVyZSBpcyBtYWRlIGlzIGltcG9ydGFudCBmb3IgdHJhY2tpbmcgaWYgbXVsdGlwbGUgc2l0ZXMgYXJlIHBvc3NpYmxlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBib2R5U2l0ZTogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBUaGUgcmVhc29uIHdoeSB0aGUgcHJvY2VkdXJlIGlzIGJlaW5nIHByb3Bvc2VkIG9yIG9yZGVyZWQuIFRoaXMgcHJvY2VkdXJlIHJlcXVlc3QgbWF5IGJlIG1vdGl2YXRlZCBieSBhIENvbmRpdGlvbiBmb3IgaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHJlYXNvbj86IChmaGlyLkNvZGVhYmxlQ29uY2VwdHxmaGlyLlJlZmVyZW5jZSl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIGZsYWcgdG8gcHJvcGVybHkgc2VyaWFsaXplIGNob2ljZS10eXBlIGVsZW1lbnQgUHJvY2VkdXJlUmVxdWVzdC5yZWFzb25beF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfcmVhc29uSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWluZyBzY2hlZHVsZSBmb3IgdGhlIHByb3Bvc2VkIG9yIG9yZGVyZWQgcHJvY2VkdXJlLiBUaGUgU2NoZWR1bGUgZGF0YSB0eXBlIGFsbG93cyBtYW55IGRpZmZlcmVudCBleHByZXNzaW9ucy4gIEUuZy4gXCJFdmVyeSA4IGhvdXJzXCI7IFwiVGhyZWUgdGltZXMgYSBkYXlcIjsgXCIxLzIgYW4gaG91ciBiZWZvcmUgYnJlYWtmYXN0IGZvciAxMCBkYXlzIGZyb20gMjMtRGVjIDIwMTE6XCI7IFwiMTUgT2N0IDIwMTMsIDE3IE9jdCAyMDEzIGFuZCAxIE5vdiAyMDEzXCIuXHJcbiAgICovXHJcbiAgcHVibGljIHNjaGVkdWxlZD86IChmaGlyLkZoaXJEYXRlVGltZXxmaGlyLlBlcmlvZHxmaGlyLlRpbWluZyl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIGZsYWcgdG8gcHJvcGVybHkgc2VyaWFsaXplIGNob2ljZS10eXBlIGVsZW1lbnQgUHJvY2VkdXJlUmVxdWVzdC5zY2hlZHVsZWRbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfc2NoZWR1bGVkSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogVGhlIGVuY291bnRlciB3aXRoaW4gd2hpY2ggdGhlIHByb2NlZHVyZSBwcm9wb3NhbCBvciByZXF1ZXN0IHdhcyBjcmVhdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBlbmNvdW50ZXI/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRm9yIGV4YW1wbGUsIHRoZSBzdXJnZW9uLCBhbmFldGhldGlzdCwgZW5kb3Njb3Bpc3QsIGV0Yy5cclxuICAgKi9cclxuICBwdWJsaWMgcGVyZm9ybWVyPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzdGF0dXMgb2YgdGhlIG9yZGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM/OiBmaGlyLkZoaXJDb2RlPFByb2NlZHVyZVJlcXVlc3RTdGF0dXNDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFueSBvdGhlciBub3RlcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBwcm9wb3NhbCBvciBvcmRlciAtIGUuZy4gcHJvdmlkZXIgaW5zdHJ1Y3Rpb25zLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBub3RlczogZmhpci5Bbm5vdGF0aW9uW107XHJcbiAgLyoqXHJcbiAgICogSWYgYSBDb2RlYWJsZUNvbmNlcHQgaXMgcHJlc2VudCwgaXQgaW5kaWNhdGVzIHRoZSBwcmUtY29uZGl0aW9uIGZvciBwZXJmb3JtaW5nIHRoZSBwcm9jZWR1cmUuXHJcbiAgICovXHJcbiAgcHVibGljIGFzTmVlZGVkPzogKGZoaXIuRmhpckJvb2xlYW58Zmhpci5Db2RlYWJsZUNvbmNlcHQpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IFByb2NlZHVyZVJlcXVlc3QuYXNOZWVkZWRbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfYXNOZWVkZWRJc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBUaGUgdGltZSB3aGVuIHRoZSByZXF1ZXN0IHdhcyBtYWRlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvcmRlcmVkT24/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGhlYWx0aGNhcmUgcHJvZmVzc2lvbmFsIHJlc3BvbnNpYmxlIGZvciBwcm9wb3Npbmcgb3Igb3JkZXJpbmcgdGhlIHByb2NlZHVyZS5cclxuICAgKi9cclxuICBwdWJsaWMgb3JkZXJlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgY2xpbmljYWwgcHJpb3JpdHkgYXNzb2NpYXRlZCB3aXRoIHRoaXMgb3JkZXIuXHJcbiAgICovXHJcbiAgcHVibGljIHByaW9yaXR5PzogZmhpci5GaGlyQ29kZTxQcm9jZWR1cmVSZXF1ZXN0UHJpb3JpdHlDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFByb2NlZHVyZVJlcXVlc3QgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxQcm9jZWR1cmVSZXF1ZXN0QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ1Byb2NlZHVyZVJlcXVlc3QnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3ViamVjdCddKSB7IHRoaXMuc3ViamVjdCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uuc3ViamVjdCwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN1YmplY3QgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydjb2RlJ10pIHsgdGhpcy5jb2RlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5jb2RlLCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29kZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ2JvZHlTaXRlJ10pIHsgdGhpcy5ib2R5U2l0ZSA9IHNvdXJjZS5ib2R5U2l0ZS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmJvZHlTaXRlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlYXNvbiddKSB7IHRoaXMucmVhc29uID0gc291cmNlLnJlYXNvbjsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydyZWFzb25Db2RlYWJsZUNvbmNlcHQnXSkgeyB0aGlzLnJlYXNvbiA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UucmVhc29uQ29kZWFibGVDb25jZXB0LCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydyZWFzb25SZWZlcmVuY2UnXSkgeyB0aGlzLnJlYXNvbiA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucmVhc29uUmVmZXJlbmNlLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc2NoZWR1bGVkJ10pIHsgdGhpcy5zY2hlZHVsZWQgPSBzb3VyY2Uuc2NoZWR1bGVkOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3NjaGVkdWxlZERhdGVUaW1lJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnNjaGVkdWxlZCA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5zY2hlZHVsZWREYXRlVGltZX0sIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3NjaGVkdWxlZFBlcmlvZCddKSB7IHRoaXMuc2NoZWR1bGVkID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS5zY2hlZHVsZWRQZXJpb2QsIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3NjaGVkdWxlZFRpbWluZyddKSB7IHRoaXMuc2NoZWR1bGVkID0gbmV3IGZoaXIuVGltaW5nKHNvdXJjZS5zY2hlZHVsZWRUaW1pbmcsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydlbmNvdW50ZXInXSkgeyB0aGlzLmVuY291bnRlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuZW5jb3VudGVyLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncGVyZm9ybWVyJ10pIHsgdGhpcy5wZXJmb3JtZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnBlcmZvcm1lciwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxQcm9jZWR1cmVSZXF1ZXN0U3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN0YXR1c30sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzKSB7IHRoaXMuc3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPFByb2NlZHVyZVJlcXVlc3RTdGF0dXNDb2RlVHlwZT4oc291cmNlLl9zdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ25vdGVzJ10pIHsgdGhpcy5ub3RlcyA9IHNvdXJjZS5ub3Rlcy5tYXAoKHgpID0+IG5ldyBmaGlyLkFubm90YXRpb24oeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5ub3RlcyA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydhc05lZWRlZCddKSB7IHRoaXMuYXNOZWVkZWQgPSBzb3VyY2UuYXNOZWVkZWQ7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnYXNOZWVkZWRCb29sZWFuJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmFzTmVlZGVkID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oe3ZhbHVlOiBzb3VyY2UuYXNOZWVkZWRCb29sZWFufSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnYXNOZWVkZWRDb2RlYWJsZUNvbmNlcHQnXSkgeyB0aGlzLmFzTmVlZGVkID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5hc05lZWRlZENvZGVhYmxlQ29uY2VwdCwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ29yZGVyZWRPbiddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5vcmRlcmVkT24gPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2Uub3JkZXJlZE9ufSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19vcmRlcmVkT24nXSkge1xyXG4gICAgICBpZiAodGhpcy5vcmRlcmVkT24pIHsgdGhpcy5vcmRlcmVkT24uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fb3JkZXJlZE9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMub3JkZXJlZE9uID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fb3JkZXJlZE9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ29yZGVyZXInXSkgeyB0aGlzLm9yZGVyZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLm9yZGVyZXIsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydwcmlvcml0eSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5wcmlvcml0eSA9IG5ldyBmaGlyLkZoaXJDb2RlPFByb2NlZHVyZVJlcXVlc3RQcmlvcml0eUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5wcmlvcml0eX0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfcHJpb3JpdHknXSkge1xyXG4gICAgICBpZiAodGhpcy5wcmlvcml0eSkgeyB0aGlzLnByaW9yaXR5LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3ByaW9yaXR5ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucHJpb3JpdHkgPSBuZXcgZmhpci5GaGlyQ29kZTxQcm9jZWR1cmVSZXF1ZXN0UHJpb3JpdHlDb2RlVHlwZT4oc291cmNlLl9wcmlvcml0eSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1Byb2NlZHVyZVJlcXVlc3QnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdzdWJqZWN0JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdjb2RlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdib2R5U2l0ZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncmVhc29uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdzY2hlZHVsZWQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2VuY291bnRlcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncGVyZm9ybWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TVignc3RhdHVzJyxleHAsJ1Byb2NlZHVyZVJlcXVlc3RTdGF0dXMnLFByb2NlZHVyZVJlcXVlc3RTdGF0dXNWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnbm90ZXMnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2FzTmVlZGVkJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdvcmRlcmVkT24nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ29yZGVyZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1NWKCdwcmlvcml0eScsZXhwLCdQcm9jZWR1cmVSZXF1ZXN0UHJpb3JpdHknLFByb2NlZHVyZVJlcXVlc3RQcmlvcml0eVZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==