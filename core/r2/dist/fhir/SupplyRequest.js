// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: SupplyRequest
import * as fhir from '../fhir.js';
// @ts-ignore
import { SupplyrequestStatusVsValidation } from '../fhirValueSets/SupplyrequestStatusVsValidation.js';
/**
 * When the request should be fulfilled.
 */
export class SupplyRequestWhen extends fhir.BackboneElement {
    /**
     * Default constructor for SupplyRequestWhen - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['schedule']) {
            this.schedule = new fhir.Timing(source.schedule);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'SupplyRequest.when';
        }
        this.vOS('code', exp);
        this.vOS('schedule', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SupplyRequestWhen._fts_dataType = 'SupplyRequestWhen';
/**
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
export class SupplyRequest extends fhir.DomainResource {
    /**
     * Default constructor for SupplyRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'SupplyRequest';
        if (source['patient']) {
            this.patient = new fhir.Reference(source.patient);
        }
        if (source['source']) {
            this.source = new fhir.Reference(source.source);
        }
        if (source['date']) {
            this.date = new fhir.FhirDateTime({ value: source.date });
        }
        if (source['_date']) {
            if (this.date) {
                this.date.addExtendedProperties(source._date);
            }
            else {
                this.date = new fhir.FhirDateTime(source._date);
            }
        }
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier);
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
        if (source['kind']) {
            this.kind = new fhir.CodeableConcept(source.kind);
        }
        if (source['orderedItem']) {
            this.orderedItem = new fhir.Reference(source.orderedItem);
        }
        if (source['supplier']) {
            this.supplier = source.supplier.map((x) => new fhir.Reference(x));
        }
        else {
            this.supplier = [];
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
        if (source['when']) {
            this.when = new fhir.SupplyRequestWhen(source.when);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'SupplyRequest';
        }
        this.vRS('resourceType', exp);
        this.vOS('patient', exp);
        this.vOS('source', exp);
        this.vOS('date', exp);
        this.vOS('identifier', exp);
        this.vOSV('status', exp, 'SupplyrequestStatus', SupplyrequestStatusVsValidation, 'r');
        this.vOS('kind', exp);
        this.vOS('orderedItem', exp);
        this.vOA('supplier', exp);
        this.vOS('reason', exp);
        this.vOS('when', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SupplyRequest._fts_dataType = 'SupplyRequest';
/**
 * Internal flag to properly serialize choice-type element SupplyRequest.reason[x]
 */
SupplyRequest._fts_reasonIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VwcGx5UmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvU3VwcGx5UmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBZXRHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGlCQUFrQixTQUFRLElBQUksQ0FBQyxlQUFlO0lBYXpEOztPQUVHO0lBQ0gsWUFBWSxTQUF3QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUM5RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQUU7UUFDMUUsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FBRTtJQUMvRSxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsb0JBQW9CLENBQUE7U0FBRTtRQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFH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LHFCQUFxQixFQUFDLCtCQUErQixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pGLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBbEdEOztHQUVHO0FBQzZCLDJCQUFhLEdBQVUsZUFBZSxDQUFDO0FBeUN2RTs7R0FFRztBQUN1QixpQ0FBbUIsR0FBUSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IFN1cHBseVJlcXVlc3RcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFN1cHBseXJlcXVlc3RTdGF0dXNDb2RlcywgIFN1cHBseXJlcXVlc3RTdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU3VwcGx5cmVxdWVzdFN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdXBwbHlyZXF1ZXN0U3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TdXBwbHlyZXF1ZXN0U3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFN1cHBseVJlcXVlc3RXaGVuIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1cHBseVJlcXVlc3RXaGVuQXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogQ29kZSBpbmRpY2F0aW5nIHdoZW4gdGhlIHJlcXVlc3Qgc2hvdWxkIGJlIGZ1bGZpbGxlZC5cclxuICAgKi9cclxuICBjb2RlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBGb3JtYWwgZnVsZmlsbG1lbnQgc2NoZWR1bGUuXHJcbiAgICovXHJcbiAgc2NoZWR1bGU/OiBmaGlyLlRpbWluZ0FyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogV2hlbiB0aGUgcmVxdWVzdCBzaG91bGQgYmUgZnVsZmlsbGVkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN1cHBseVJlcXVlc3RXaGVuIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnU3VwcGx5UmVxdWVzdFdoZW4nO1xyXG4gIC8qKlxyXG4gICAqIENvZGUgaW5kaWNhdGluZyB3aGVuIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBmdWxmaWxsZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGNvZGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRm9ybWFsIGZ1bGZpbGxtZW50IHNjaGVkdWxlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzY2hlZHVsZT86IGZoaXIuVGltaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBTdXBwbHlSZXF1ZXN0V2hlbiAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFN1cHBseVJlcXVlc3RXaGVuQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2NvZGUnXSkgeyB0aGlzLmNvZGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmNvZGUpOyB9XHJcbiAgICBpZiAoc291cmNlWydzY2hlZHVsZSddKSB7IHRoaXMuc2NoZWR1bGUgPSBuZXcgZmhpci5UaW1pbmcoc291cmNlLnNjaGVkdWxlKTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1N1cHBseVJlcXVlc3Qud2hlbicgfVxyXG4gICAgdGhpcy52T1MoJ2NvZGUnLGV4cClcclxuICAgIHRoaXMudk9TKCdzY2hlZHVsZScsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFN1cHBseVJlcXVlc3QgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VwcGx5UmVxdWVzdEFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIlN1cHBseVJlcXVlc3RcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBsaW5rIHRvIGEgcmVzb3VyY2UgcmVwcmVzZW50aW5nIHRoZSBwZXJzb24gd2hvbSB0aGUgb3JkZXJlZCBpdGVtIGlzIGZvci5cclxuICAgKi9cclxuICBwYXRpZW50PzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgUHJhY3RpdGlvbmVyICwgT3JnYW5pemF0aW9uIG9yIFBhdGllbnQgd2hvIGluaXRpYXRlZCB0aGlzIG9yZGVyIGZvciB0aGUgc3VwcGx5LlxyXG4gICAqL1xyXG4gIHNvdXJjZT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGUgcmVxdWVzdCB3YXMgbWFkZS5cclxuICAgKi9cclxuICBkYXRlPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU3VwcGx5UmVxdWVzdC5kYXRlXHJcbiAgICovXHJcbiAgX2RhdGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIHN1cHBseSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTdGF0dXMgb2YgdGhlIHN1cHBseSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHN0YXR1cz86IGZoaXIuRmhpckNvZGU8U3VwcGx5cmVxdWVzdFN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdXBwbHlSZXF1ZXN0LnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENhdGVnb3J5IG9mIHN1cHBseSwgZS5nLiAgY2VudHJhbCwgbm9uLXN0b2NrLCBldGMuIFRoaXMgaXMgdXNlZCB0byBzdXBwb3J0IHdvcmsgZmxvd3MgYXNzb2NpYXRlZCB3aXRoIHRoZSBzdXBwbHkgcHJvY2Vzcy5cclxuICAgKi9cclxuICBraW5kPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaXRlbSB0aGF0IGlzIHJlcXVlc3RlZCB0byBiZSBzdXBwbGllZC5cclxuICAgKi9cclxuICBvcmRlcmVkSXRlbT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hvIGlzIGludGVuZGVkIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgc3VwcGxpZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2h5IHRoZSBzdXBwbHkgaXRlbSB3YXMgcmVxdWVzdGVkLlxyXG4gICAqL1xyXG4gIHJlYXNvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaHkgdGhlIHN1cHBseSBpdGVtIHdhcyByZXF1ZXN0ZWQuXHJcbiAgICovXHJcbiAgcmVhc29uQ29kZWFibGVDb25jZXB0PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaHkgdGhlIHN1cHBseSBpdGVtIHdhcyByZXF1ZXN0ZWQuXHJcbiAgICovXHJcbiAgcmVhc29uUmVmZXJlbmNlPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVuIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBmdWxmaWxsZWQuXHJcbiAgICovXHJcbiAgd2hlbj86IGZoaXIuU3VwcGx5UmVxdWVzdFdoZW5BcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgcmVjb3JkIG9mIGEgcmVxdWVzdCBmb3IgYSBtZWRpY2F0aW9uLCBzdWJzdGFuY2Ugb3IgZGV2aWNlIHVzZWQgaW4gdGhlIGhlYWx0aGNhcmUgc2V0dGluZy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdXBwbHlSZXF1ZXN0IGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdTdXBwbHlSZXF1ZXN0JztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIlN1cHBseVJlcXVlc3RcIjtcclxuICAvKipcclxuICAgKiBBIGxpbmsgdG8gYSByZXNvdXJjZSByZXByZXNlbnRpbmcgdGhlIHBlcnNvbiB3aG9tIHRoZSBvcmRlcmVkIGl0ZW0gaXMgZm9yLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwYXRpZW50PzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBQcmFjdGl0aW9uZXIgLCBPcmdhbml6YXRpb24gb3IgUGF0aWVudCB3aG8gaW5pdGlhdGVkIHRoaXMgb3JkZXIgZm9yIHRoZSBzdXBwbHkuXHJcbiAgICovXHJcbiAgcHVibGljIHNvdXJjZT86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVuIHRoZSByZXF1ZXN0IHdhcyBtYWRlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkYXRlPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIHN1cHBseSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTdGF0dXMgb2YgdGhlIHN1cHBseSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM/OiBmaGlyLkZoaXJDb2RlPFN1cHBseXJlcXVlc3RTdGF0dXNDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIENhdGVnb3J5IG9mIHN1cHBseSwgZS5nLiAgY2VudHJhbCwgbm9uLXN0b2NrLCBldGMuIFRoaXMgaXMgdXNlZCB0byBzdXBwb3J0IHdvcmsgZmxvd3MgYXNzb2NpYXRlZCB3aXRoIHRoZSBzdXBwbHkgcHJvY2Vzcy5cclxuICAgKi9cclxuICBwdWJsaWMga2luZD86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaXRlbSB0aGF0IGlzIHJlcXVlc3RlZCB0byBiZSBzdXBwbGllZC5cclxuICAgKi9cclxuICBwdWJsaWMgb3JkZXJlZEl0ZW0/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hvIGlzIGludGVuZGVkIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgcHVibGljIHN1cHBsaWVyOiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIFdoeSB0aGUgc3VwcGx5IGl0ZW0gd2FzIHJlcXVlc3RlZC5cclxuICAgKi9cclxuICBwdWJsaWMgcmVhc29uPzogKGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUmVmZXJlbmNlKXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgZmxhZyB0byBwcm9wZXJseSBzZXJpYWxpemUgY2hvaWNlLXR5cGUgZWxlbWVudCBTdXBwbHlSZXF1ZXN0LnJlYXNvblt4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c19yZWFzb25Jc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBXaGVuIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBmdWxmaWxsZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHdoZW4/OiBmaGlyLlN1cHBseVJlcXVlc3RXaGVufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBTdXBwbHlSZXF1ZXN0IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8U3VwcGx5UmVxdWVzdEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdTdXBwbHlSZXF1ZXN0JztcclxuICAgIGlmIChzb3VyY2VbJ3BhdGllbnQnXSkgeyB0aGlzLnBhdGllbnQgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnBhdGllbnQpOyB9XHJcbiAgICBpZiAoc291cmNlWydzb3VyY2UnXSkgeyB0aGlzLnNvdXJjZSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uuc291cmNlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGF0ZSddKSB7IHRoaXMuZGF0ZSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5kYXRlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kYXRlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZGF0ZSkgeyB0aGlzLmRhdGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZGF0ZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9kYXRlIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBuZXcgZmhpci5JZGVudGlmaWVyKHNvdXJjZS5pZGVudGlmaWVyKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxTdXBwbHlyZXF1ZXN0U3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN0YXR1c30pOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzKSB7IHRoaXMuc3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPFN1cHBseXJlcXVlc3RTdGF0dXNDb2RlVHlwZT4oc291cmNlLl9zdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2tpbmQnXSkgeyB0aGlzLmtpbmQgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmtpbmQpOyB9XHJcbiAgICBpZiAoc291cmNlWydvcmRlcmVkSXRlbSddKSB7IHRoaXMub3JkZXJlZEl0ZW0gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLm9yZGVyZWRJdGVtKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3VwcGxpZXInXSkgeyB0aGlzLnN1cHBsaWVyID0gc291cmNlLnN1cHBsaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3VwcGxpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVhc29uJ10pIHsgdGhpcy5yZWFzb24gPSBzb3VyY2UucmVhc29uOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3JlYXNvbkNvZGVhYmxlQ29uY2VwdCddKSB7IHRoaXMucmVhc29uID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5yZWFzb25Db2RlYWJsZUNvbmNlcHQpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3JlYXNvblJlZmVyZW5jZSddKSB7IHRoaXMucmVhc29uID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5yZWFzb25SZWZlcmVuY2UpOyB9XHJcbiAgICBpZiAoc291cmNlWyd3aGVuJ10pIHsgdGhpcy53aGVuID0gbmV3IGZoaXIuU3VwcGx5UmVxdWVzdFdoZW4oc291cmNlLndoZW4pOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnU3VwcGx5UmVxdWVzdCcgfVxyXG4gICAgdGhpcy52UlMoJ3Jlc291cmNlVHlwZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3BhdGllbnQnLGV4cClcclxuICAgIHRoaXMudk9TKCdzb3VyY2UnLGV4cClcclxuICAgIHRoaXMudk9TKCdkYXRlJyxleHApXHJcbiAgICB0aGlzLnZPUygnaWRlbnRpZmllcicsZXhwKVxyXG4gICAgdGhpcy52T1NWKCdzdGF0dXMnLGV4cCwnU3VwcGx5cmVxdWVzdFN0YXR1cycsU3VwcGx5cmVxdWVzdFN0YXR1c1ZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZPUygna2luZCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ29yZGVyZWRJdGVtJyxleHApXHJcbiAgICB0aGlzLnZPQSgnc3VwcGxpZXInLGV4cClcclxuICAgIHRoaXMudk9TKCdyZWFzb24nLGV4cClcclxuICAgIHRoaXMudk9TKCd3aGVuJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=