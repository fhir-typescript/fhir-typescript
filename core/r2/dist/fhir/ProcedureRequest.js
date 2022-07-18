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
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        else {
            this.subject = null;
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        else {
            this.code = null;
        }
        if (source['bodySite']) {
            this.bodySite = source.bodySite.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.bodySite = [];
        }
        if (source['reason']) {
            this.reason = source.reason;
        }
        else if (source['reasonCodeableConcept']) {
            this.reason = new fhir.CodeableConcept(source.reasonCodeableConcept);
        }
        else if (source['reasonReference']) {
            this.reason = new fhir.Reference(source.reasonReference);
        }
        if (source['scheduled']) {
            this.scheduled = source.scheduled;
        }
        else if (source['scheduledDateTime']) {
            this.scheduled = new fhir.FhirDateTime({ value: source.scheduledDateTime });
        }
        else if (source['scheduledPeriod']) {
            this.scheduled = new fhir.Period(source.scheduledPeriod);
        }
        else if (source['scheduledTiming']) {
            this.scheduled = new fhir.Timing(source.scheduledTiming);
        }
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source['performer']) {
            this.performer = new fhir.Reference(source.performer);
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
        if (source['notes']) {
            this.notes = source.notes.map((x) => new fhir.Annotation(x));
        }
        else {
            this.notes = [];
        }
        if (source['asNeeded']) {
            this.asNeeded = source.asNeeded;
        }
        else if (source['asNeededBoolean']) {
            this.asNeeded = new fhir.FhirBoolean({ value: source.asNeededBoolean });
        }
        else if (source['asNeededCodeableConcept']) {
            this.asNeeded = new fhir.CodeableConcept(source.asNeededCodeableConcept);
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
        if (source['orderer']) {
            this.orderer = new fhir.Reference(source.orderer);
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
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'ProcedureRequest';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vRS('subject', exp);
        this.vRS('code', exp);
        this.vOA('bodySite', exp);
        this.vOS('reason', exp);
        this.vOS('scheduled', exp);
        this.vOS('encounter', exp);
        this.vOS('performer', exp);
        this.vOSV('status', exp, 'ProcedureRequestStatus', ProcedureRequestStatusVsValidation, 'r');
        this.vOA('notes', exp);
        this.vOS('asNeeded', exp);
        this.vOS('orderedOn', exp);
        this.vOS('orderer', exp);
        this.vOSV('priority', exp, 'ProcedureRequestPriority', ProcedureRequestPriorityVsValidation, 'r');
        return issues;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2VkdXJlUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvUHJvY2VkdXJlUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRzVHLGFBQWE7QUFDYixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQTJHaEg7O0dBRUc7QUFDSCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUE2RXZEOztPQUVHO0lBQ0gsWUFBWSxTQUF1QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUM3RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2hHO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUFFO2FBQ3hFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM3QixJQUFJLE1BQU0sQ0FB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LEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLHdCQUF3QixFQUFDLGtDQUFrQyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZGLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLEdBQUcsRUFBQywwQkFBMEIsRUFBQyxvQ0FBb0MsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUM3RixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQS9JRDs7R0FFRztBQUM2Qiw4QkFBYSxHQUFVLGtCQUFrQixDQUFDO0FBeUIxRTs7R0FFRztBQUN1QixvQ0FBbUIsR0FBUSxJQUFJLENBQUM7QUFLMUQ7O0dBRUc7QUFDdUIsdUNBQXNCLEdBQVEsSUFBSSxDQUFDO0FBcUI3RDs7R0FFRztBQUN1QixzQ0FBcUIsR0FBUSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IFByb2NlZHVyZVJlcXVlc3RcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFByb2NlZHVyZVJlcXVlc3RTdGF0dXNDb2RlcywgIFByb2NlZHVyZVJlcXVlc3RTdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUHJvY2VkdXJlUmVxdWVzdFN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBQcm9jZWR1cmVSZXF1ZXN0U3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Qcm9jZWR1cmVSZXF1ZXN0U3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBQcm9jZWR1cmVSZXF1ZXN0UHJpb3JpdHlDb2RlcywgIFByb2NlZHVyZVJlcXVlc3RQcmlvcml0eUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Qcm9jZWR1cmVSZXF1ZXN0UHJpb3JpdHlDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUHJvY2VkdXJlUmVxdWVzdFByaW9yaXR5VnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Qcm9jZWR1cmVSZXF1ZXN0UHJpb3JpdHlWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgUHJvY2VkdXJlUmVxdWVzdCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBQcm9jZWR1cmVSZXF1ZXN0QXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiUHJvY2VkdXJlUmVxdWVzdFwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVycyBhc3NpZ25lZCB0byB0aGlzIG9yZGVyIGJ5IHRoZSBvcmRlciBvciBieSB0aGUgcmVjZWl2ZXIuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBlcnNvbiwgYW5pbWFsIG9yIGdyb3VwIHRoYXQgc2hvdWxkIHJlY2VpdmUgdGhlIHByb2NlZHVyZS5cclxuICAgKi9cclxuICBzdWJqZWN0OiBmaGlyLlJlZmVyZW5jZUFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgc3BlY2lmaWMgcHJvY2VkdXJlIHRoYXQgaXMgb3JkZXJlZC4gVXNlIHRleHQgaWYgdGhlIGV4YWN0IG5hdHVyZSBvZiB0aGUgcHJvY2VkdXJlIGNhbm5vdCBiZSBjb2RlZC5cclxuICAgKi9cclxuICBjb2RlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBLbm93aW5nIHdoZXJlIHRoZSBwcm9jZWR1cmUgaXMgbWFkZSBpcyBpbXBvcnRhbnQgZm9yIHRyYWNraW5nIGlmIG11bHRpcGxlIHNpdGVzIGFyZSBwb3NzaWJsZS5cclxuICAgKi9cclxuICBib2R5U2l0ZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcmVhc29uIHdoeSB0aGUgcHJvY2VkdXJlIGlzIGJlaW5nIHByb3Bvc2VkIG9yIG9yZGVyZWQuIFRoaXMgcHJvY2VkdXJlIHJlcXVlc3QgbWF5IGJlIG1vdGl2YXRlZCBieSBhIENvbmRpdGlvbiBmb3IgaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgcmVhc29uPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8Zmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZWFzb24gd2h5IHRoZSBwcm9jZWR1cmUgaXMgYmVpbmcgcHJvcG9zZWQgb3Igb3JkZXJlZC4gVGhpcyBwcm9jZWR1cmUgcmVxdWVzdCBtYXkgYmUgbW90aXZhdGVkIGJ5IGEgQ29uZGl0aW9uIGZvciBpbnN0YW5jZS5cclxuICAgKi9cclxuICByZWFzb25Db2RlYWJsZUNvbmNlcHQ/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZWFzb24gd2h5IHRoZSBwcm9jZWR1cmUgaXMgYmVpbmcgcHJvcG9zZWQgb3Igb3JkZXJlZC4gVGhpcyBwcm9jZWR1cmUgcmVxdWVzdCBtYXkgYmUgbW90aXZhdGVkIGJ5IGEgQ29uZGl0aW9uIGZvciBpbnN0YW5jZS5cclxuICAgKi9cclxuICByZWFzb25SZWZlcmVuY2U/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1pbmcgc2NoZWR1bGUgZm9yIHRoZSBwcm9wb3NlZCBvciBvcmRlcmVkIHByb2NlZHVyZS4gVGhlIFNjaGVkdWxlIGRhdGEgdHlwZSBhbGxvd3MgbWFueSBkaWZmZXJlbnQgZXhwcmVzc2lvbnMuICBFLmcuIFwiRXZlcnkgOCBob3Vyc1wiOyBcIlRocmVlIHRpbWVzIGEgZGF5XCI7IFwiMS8yIGFuIGhvdXIgYmVmb3JlIGJyZWFrZmFzdCBmb3IgMTAgZGF5cyBmcm9tIDIzLURlYyAyMDExOlwiOyBcIjE1IE9jdCAyMDEzLCAxNyBPY3QgMjAxMyBhbmQgMSBOb3YgMjAxM1wiLlxyXG4gICAqL1xyXG4gIHNjaGVkdWxlZD86IGZoaXIuRmhpckRhdGVUaW1lfGZoaXIuUGVyaW9kfGZoaXIuVGltaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdGltaW5nIHNjaGVkdWxlIGZvciB0aGUgcHJvcG9zZWQgb3Igb3JkZXJlZCBwcm9jZWR1cmUuIFRoZSBTY2hlZHVsZSBkYXRhIHR5cGUgYWxsb3dzIG1hbnkgZGlmZmVyZW50IGV4cHJlc3Npb25zLiAgRS5nLiBcIkV2ZXJ5IDggaG91cnNcIjsgXCJUaHJlZSB0aW1lcyBhIGRheVwiOyBcIjEvMiBhbiBob3VyIGJlZm9yZSBicmVha2Zhc3QgZm9yIDEwIGRheXMgZnJvbSAyMy1EZWMgMjAxMTpcIjsgXCIxNSBPY3QgMjAxMywgMTcgT2N0IDIwMTMgYW5kIDEgTm92IDIwMTNcIi5cclxuICAgKi9cclxuICBzY2hlZHVsZWREYXRlVGltZT86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWluZyBzY2hlZHVsZSBmb3IgdGhlIHByb3Bvc2VkIG9yIG9yZGVyZWQgcHJvY2VkdXJlLiBUaGUgU2NoZWR1bGUgZGF0YSB0eXBlIGFsbG93cyBtYW55IGRpZmZlcmVudCBleHByZXNzaW9ucy4gIEUuZy4gXCJFdmVyeSA4IGhvdXJzXCI7IFwiVGhyZWUgdGltZXMgYSBkYXlcIjsgXCIxLzIgYW4gaG91ciBiZWZvcmUgYnJlYWtmYXN0IGZvciAxMCBkYXlzIGZyb20gMjMtRGVjIDIwMTE6XCI7IFwiMTUgT2N0IDIwMTMsIDE3IE9jdCAyMDEzIGFuZCAxIE5vdiAyMDEzXCIuXHJcbiAgICovXHJcbiAgc2NoZWR1bGVkUGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdGltaW5nIHNjaGVkdWxlIGZvciB0aGUgcHJvcG9zZWQgb3Igb3JkZXJlZCBwcm9jZWR1cmUuIFRoZSBTY2hlZHVsZSBkYXRhIHR5cGUgYWxsb3dzIG1hbnkgZGlmZmVyZW50IGV4cHJlc3Npb25zLiAgRS5nLiBcIkV2ZXJ5IDggaG91cnNcIjsgXCJUaHJlZSB0aW1lcyBhIGRheVwiOyBcIjEvMiBhbiBob3VyIGJlZm9yZSBicmVha2Zhc3QgZm9yIDEwIGRheXMgZnJvbSAyMy1EZWMgMjAxMTpcIjsgXCIxNSBPY3QgMjAxMywgMTcgT2N0IDIwMTMgYW5kIDEgTm92IDIwMTNcIi5cclxuICAgKi9cclxuICBzY2hlZHVsZWRUaW1pbmc/OiBmaGlyLlRpbWluZ0FyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBlbmNvdW50ZXIgd2l0aGluIHdoaWNoIHRoZSBwcm9jZWR1cmUgcHJvcG9zYWwgb3IgcmVxdWVzdCB3YXMgY3JlYXRlZC5cclxuICAgKi9cclxuICBlbmNvdW50ZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEZvciBleGFtcGxlLCB0aGUgc3VyZ2VvbiwgYW5hZXRoZXRpc3QsIGVuZG9zY29waXN0LCBldGMuXHJcbiAgICovXHJcbiAgcGVyZm9ybWVyPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgc3RhdHVzIG9mIHRoZSBvcmRlci5cclxuICAgKi9cclxuICBzdGF0dXM/OiBmaGlyLkZoaXJDb2RlPFByb2NlZHVyZVJlcXVlc3RTdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUHJvY2VkdXJlUmVxdWVzdC5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBbnkgb3RoZXIgbm90ZXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgcHJvcG9zYWwgb3Igb3JkZXIgLSBlLmcuIHByb3ZpZGVyIGluc3RydWN0aW9ucy5cclxuICAgKi9cclxuICBub3Rlcz86IGZoaXIuQW5ub3RhdGlvbkFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgYSBDb2RlYWJsZUNvbmNlcHQgaXMgcHJlc2VudCwgaXQgaW5kaWNhdGVzIHRoZSBwcmUtY29uZGl0aW9uIGZvciBwZXJmb3JtaW5nIHRoZSBwcm9jZWR1cmUuXHJcbiAgICovXHJcbiAgYXNOZWVkZWQ/OiBmaGlyLkZoaXJCb29sZWFufGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiBhIENvZGVhYmxlQ29uY2VwdCBpcyBwcmVzZW50LCBpdCBpbmRpY2F0ZXMgdGhlIHByZS1jb25kaXRpb24gZm9yIHBlcmZvcm1pbmcgdGhlIHByb2NlZHVyZS5cclxuICAgKi9cclxuICBhc05lZWRlZEJvb2xlYW4/OiBmaGlyLkZoaXJCb29sZWFufGJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIGEgQ29kZWFibGVDb25jZXB0IGlzIHByZXNlbnQsIGl0IGluZGljYXRlcyB0aGUgcHJlLWNvbmRpdGlvbiBmb3IgcGVyZm9ybWluZyB0aGUgcHJvY2VkdXJlLlxyXG4gICAqL1xyXG4gIGFzTmVlZGVkQ29kZWFibGVDb25jZXB0PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdGltZSB3aGVuIHRoZSByZXF1ZXN0IHdhcyBtYWRlLlxyXG4gICAqL1xyXG4gIG9yZGVyZWRPbj86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFByb2NlZHVyZVJlcXVlc3Qub3JkZXJlZE9uXHJcbiAgICovXHJcbiAgX29yZGVyZWRPbj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIGhlYWx0aGNhcmUgcHJvZmVzc2lvbmFsIHJlc3BvbnNpYmxlIGZvciBwcm9wb3Npbmcgb3Igb3JkZXJpbmcgdGhlIHByb2NlZHVyZS5cclxuICAgKi9cclxuICBvcmRlcmVyPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgY2xpbmljYWwgcHJpb3JpdHkgYXNzb2NpYXRlZCB3aXRoIHRoaXMgb3JkZXIuXHJcbiAgICovXHJcbiAgcHJpb3JpdHk/OiBmaGlyLkZoaXJDb2RlPFByb2NlZHVyZVJlcXVlc3RQcmlvcml0eUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBQcm9jZWR1cmVSZXF1ZXN0LnByaW9yaXR5XHJcbiAgICovXHJcbiAgX3ByaW9yaXR5PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgcmVxdWVzdCBmb3IgYSBwcm9jZWR1cmUgdG8gYmUgcGVyZm9ybWVkLiBNYXkgYmUgYSBwcm9wb3NhbCBvciBhbiBvcmRlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9jZWR1cmVSZXF1ZXN0IGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdQcm9jZWR1cmVSZXF1ZXN0JztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIlByb2NlZHVyZVJlcXVlc3RcIjtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVycyBhc3NpZ25lZCB0byB0aGlzIG9yZGVyIGJ5IHRoZSBvcmRlciBvciBieSB0aGUgcmVjZWl2ZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI6IGZoaXIuSWRlbnRpZmllcltdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJzb24sIGFuaW1hbCBvciBncm91cCB0aGF0IHNob3VsZCByZWNlaXZlIHRoZSBwcm9jZWR1cmUuXHJcbiAgICovXHJcbiAgcHVibGljIHN1YmplY3Q6IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIHNwZWNpZmljIHByb2NlZHVyZSB0aGF0IGlzIG9yZGVyZWQuIFVzZSB0ZXh0IGlmIHRoZSBleGFjdCBuYXR1cmUgb2YgdGhlIHByb2NlZHVyZSBjYW5ub3QgYmUgY29kZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGNvZGU6IGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGw7XHJcbiAgLyoqXHJcbiAgICogS25vd2luZyB3aGVyZSB0aGUgcHJvY2VkdXJlIGlzIG1hZGUgaXMgaW1wb3J0YW50IGZvciB0cmFja2luZyBpZiBtdWx0aXBsZSBzaXRlcyBhcmUgcG9zc2libGUuXHJcbiAgICovXHJcbiAgcHVibGljIGJvZHlTaXRlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZWFzb24gd2h5IHRoZSBwcm9jZWR1cmUgaXMgYmVpbmcgcHJvcG9zZWQgb3Igb3JkZXJlZC4gVGhpcyBwcm9jZWR1cmUgcmVxdWVzdCBtYXkgYmUgbW90aXZhdGVkIGJ5IGEgQ29uZGl0aW9uIGZvciBpbnN0YW5jZS5cclxuICAgKi9cclxuICBwdWJsaWMgcmVhc29uPzogKGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUmVmZXJlbmNlKXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgZmxhZyB0byBwcm9wZXJseSBzZXJpYWxpemUgY2hvaWNlLXR5cGUgZWxlbWVudCBQcm9jZWR1cmVSZXF1ZXN0LnJlYXNvblt4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c19yZWFzb25Jc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBUaGUgdGltaW5nIHNjaGVkdWxlIGZvciB0aGUgcHJvcG9zZWQgb3Igb3JkZXJlZCBwcm9jZWR1cmUuIFRoZSBTY2hlZHVsZSBkYXRhIHR5cGUgYWxsb3dzIG1hbnkgZGlmZmVyZW50IGV4cHJlc3Npb25zLiAgRS5nLiBcIkV2ZXJ5IDggaG91cnNcIjsgXCJUaHJlZSB0aW1lcyBhIGRheVwiOyBcIjEvMiBhbiBob3VyIGJlZm9yZSBicmVha2Zhc3QgZm9yIDEwIGRheXMgZnJvbSAyMy1EZWMgMjAxMTpcIjsgXCIxNSBPY3QgMjAxMywgMTcgT2N0IDIwMTMgYW5kIDEgTm92IDIwMTNcIi5cclxuICAgKi9cclxuICBwdWJsaWMgc2NoZWR1bGVkPzogKGZoaXIuRmhpckRhdGVUaW1lfGZoaXIuUGVyaW9kfGZoaXIuVGltaW5nKXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgZmxhZyB0byBwcm9wZXJseSBzZXJpYWxpemUgY2hvaWNlLXR5cGUgZWxlbWVudCBQcm9jZWR1cmVSZXF1ZXN0LnNjaGVkdWxlZFt4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c19zY2hlZHVsZWRJc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBUaGUgZW5jb3VudGVyIHdpdGhpbiB3aGljaCB0aGUgcHJvY2VkdXJlIHByb3Bvc2FsIG9yIHJlcXVlc3Qgd2FzIGNyZWF0ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGVuY291bnRlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBGb3IgZXhhbXBsZSwgdGhlIHN1cmdlb24sIGFuYWV0aGV0aXN0LCBlbmRvc2NvcGlzdCwgZXRjLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJmb3JtZXI/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHN0YXR1cyBvZiB0aGUgb3JkZXIuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1cz86IGZoaXIuRmhpckNvZGU8UHJvY2VkdXJlUmVxdWVzdFN0YXR1c0NvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW55IG90aGVyIG5vdGVzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHByb3Bvc2FsIG9yIG9yZGVyIC0gZS5nLiBwcm92aWRlciBpbnN0cnVjdGlvbnMuXHJcbiAgICovXHJcbiAgcHVibGljIG5vdGVzOiBmaGlyLkFubm90YXRpb25bXTtcclxuICAvKipcclxuICAgKiBJZiBhIENvZGVhYmxlQ29uY2VwdCBpcyBwcmVzZW50LCBpdCBpbmRpY2F0ZXMgdGhlIHByZS1jb25kaXRpb24gZm9yIHBlcmZvcm1pbmcgdGhlIHByb2NlZHVyZS5cclxuICAgKi9cclxuICBwdWJsaWMgYXNOZWVkZWQ/OiAoZmhpci5GaGlyQm9vbGVhbnxmaGlyLkNvZGVhYmxlQ29uY2VwdCl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIGZsYWcgdG8gcHJvcGVybHkgc2VyaWFsaXplIGNob2ljZS10eXBlIGVsZW1lbnQgUHJvY2VkdXJlUmVxdWVzdC5hc05lZWRlZFt4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c19hc05lZWRlZElzQ2hvaWNlOnRydWUgPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lIHdoZW4gdGhlIHJlcXVlc3Qgd2FzIG1hZGUuXHJcbiAgICovXHJcbiAgcHVibGljIG9yZGVyZWRPbj86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaGVhbHRoY2FyZSBwcm9mZXNzaW9uYWwgcmVzcG9uc2libGUgZm9yIHByb3Bvc2luZyBvciBvcmRlcmluZyB0aGUgcHJvY2VkdXJlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvcmRlcmVyPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBjbGluaWNhbCBwcmlvcml0eSBhc3NvY2lhdGVkIHdpdGggdGhpcyBvcmRlci5cclxuICAgKi9cclxuICBwdWJsaWMgcHJpb3JpdHk/OiBmaGlyLkZoaXJDb2RlPFByb2NlZHVyZVJlcXVlc3RQcmlvcml0eUNvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgUHJvY2VkdXJlUmVxdWVzdCAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFByb2NlZHVyZVJlcXVlc3RBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnUHJvY2VkdXJlUmVxdWVzdCc7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gc291cmNlLmlkZW50aWZpZXIubWFwKCh4KSA9PiBuZXcgZmhpci5JZGVudGlmaWVyKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaWRlbnRpZmllciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydzdWJqZWN0J10pIHsgdGhpcy5zdWJqZWN0ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5zdWJqZWN0KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3ViamVjdCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ2NvZGUnXSkgeyB0aGlzLmNvZGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmNvZGUpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb2RlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYm9keVNpdGUnXSkgeyB0aGlzLmJvZHlTaXRlID0gc291cmNlLmJvZHlTaXRlLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuYm9keVNpdGUgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVhc29uJ10pIHsgdGhpcy5yZWFzb24gPSBzb3VyY2UucmVhc29uOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3JlYXNvbkNvZGVhYmxlQ29uY2VwdCddKSB7IHRoaXMucmVhc29uID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5yZWFzb25Db2RlYWJsZUNvbmNlcHQpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3JlYXNvblJlZmVyZW5jZSddKSB7IHRoaXMucmVhc29uID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5yZWFzb25SZWZlcmVuY2UpOyB9XHJcbiAgICBpZiAoc291cmNlWydzY2hlZHVsZWQnXSkgeyB0aGlzLnNjaGVkdWxlZCA9IHNvdXJjZS5zY2hlZHVsZWQ7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnc2NoZWR1bGVkRGF0ZVRpbWUnXSkgeyB0aGlzLnNjaGVkdWxlZCA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5zY2hlZHVsZWREYXRlVGltZX0pOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3NjaGVkdWxlZFBlcmlvZCddKSB7IHRoaXMuc2NoZWR1bGVkID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS5zY2hlZHVsZWRQZXJpb2QpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3NjaGVkdWxlZFRpbWluZyddKSB7IHRoaXMuc2NoZWR1bGVkID0gbmV3IGZoaXIuVGltaW5nKHNvdXJjZS5zY2hlZHVsZWRUaW1pbmcpOyB9XHJcbiAgICBpZiAoc291cmNlWydlbmNvdW50ZXInXSkgeyB0aGlzLmVuY291bnRlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuZW5jb3VudGVyKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncGVyZm9ybWVyJ10pIHsgdGhpcy5wZXJmb3JtZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnBlcmZvcm1lcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8UHJvY2VkdXJlUmVxdWVzdFN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxQcm9jZWR1cmVSZXF1ZXN0U3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydub3RlcyddKSB7IHRoaXMubm90ZXMgPSBzb3VyY2Uubm90ZXMubWFwKCh4KSA9PiBuZXcgZmhpci5Bbm5vdGF0aW9uKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMubm90ZXMgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYXNOZWVkZWQnXSkgeyB0aGlzLmFzTmVlZGVkID0gc291cmNlLmFzTmVlZGVkOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ2FzTmVlZGVkQm9vbGVhbiddKSB7IHRoaXMuYXNOZWVkZWQgPSBuZXcgZmhpci5GaGlyQm9vbGVhbih7dmFsdWU6IHNvdXJjZS5hc05lZWRlZEJvb2xlYW59KTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydhc05lZWRlZENvZGVhYmxlQ29uY2VwdCddKSB7IHRoaXMuYXNOZWVkZWQgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmFzTmVlZGVkQ29kZWFibGVDb25jZXB0KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnb3JkZXJlZE9uJ10pIHsgdGhpcy5vcmRlcmVkT24gPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2Uub3JkZXJlZE9ufSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19vcmRlcmVkT24nXSkge1xyXG4gICAgICBpZiAodGhpcy5vcmRlcmVkT24pIHsgdGhpcy5vcmRlcmVkT24uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fb3JkZXJlZE9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMub3JkZXJlZE9uID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fb3JkZXJlZE9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ29yZGVyZXInXSkgeyB0aGlzLm9yZGVyZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLm9yZGVyZXIpOyB9XHJcbiAgICBpZiAoc291cmNlWydwcmlvcml0eSddKSB7IHRoaXMucHJpb3JpdHkgPSBuZXcgZmhpci5GaGlyQ29kZTxQcm9jZWR1cmVSZXF1ZXN0UHJpb3JpdHlDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2UucHJpb3JpdHl9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3ByaW9yaXR5J10pIHtcclxuICAgICAgaWYgKHRoaXMucHJpb3JpdHkpIHsgdGhpcy5wcmlvcml0eS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9wcmlvcml0eSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnByaW9yaXR5ID0gbmV3IGZoaXIuRmhpckNvZGU8UHJvY2VkdXJlUmVxdWVzdFByaW9yaXR5Q29kZVR5cGU+KHNvdXJjZS5fcHJpb3JpdHkgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdQcm9jZWR1cmVSZXF1ZXN0JyB9XHJcbiAgICB0aGlzLnZSUygncmVzb3VyY2VUeXBlJyxleHApXHJcbiAgICB0aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKVxyXG4gICAgdGhpcy52UlMoJ3N1YmplY3QnLGV4cClcclxuICAgIHRoaXMudlJTKCdjb2RlJyxleHApXHJcbiAgICB0aGlzLnZPQSgnYm9keVNpdGUnLGV4cClcclxuICAgIHRoaXMudk9TKCdyZWFzb24nLGV4cClcclxuICAgIHRoaXMudk9TKCdzY2hlZHVsZWQnLGV4cClcclxuICAgIHRoaXMudk9TKCdlbmNvdW50ZXInLGV4cClcclxuICAgIHRoaXMudk9TKCdwZXJmb3JtZXInLGV4cClcclxuICAgIHRoaXMudk9TVignc3RhdHVzJyxleHAsJ1Byb2NlZHVyZVJlcXVlc3RTdGF0dXMnLFByb2NlZHVyZVJlcXVlc3RTdGF0dXNWc1ZhbGlkYXRpb24sJ3InKVxyXG4gICAgdGhpcy52T0EoJ25vdGVzJyxleHApXHJcbiAgICB0aGlzLnZPUygnYXNOZWVkZWQnLGV4cClcclxuICAgIHRoaXMudk9TKCdvcmRlcmVkT24nLGV4cClcclxuICAgIHRoaXMudk9TKCdvcmRlcmVyJyxleHApXHJcbiAgICB0aGlzLnZPU1YoJ3ByaW9yaXR5JyxleHAsJ1Byb2NlZHVyZVJlcXVlc3RQcmlvcml0eScsUHJvY2VkdXJlUmVxdWVzdFByaW9yaXR5VnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==