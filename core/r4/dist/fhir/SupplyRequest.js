// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: SupplyRequest
import * as fhir from '../fhir.js';
// @ts-ignore
import { SupplyrequestStatusVsValidation } from '../fhirValueSets/SupplyrequestStatusVsValidation.js';
// @ts-ignore
import { RequestPriorityVsValidation } from '../fhirValueSets/RequestPriorityVsValidation.js';
/**
 * Specific parameters for the ordered item.  For example, the size of the indicated item.
 */
export class SupplyRequestParameter extends fhir.BackboneElement {
    /**
     * Default constructor for SupplyRequestParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code, options);
        }
        if (source['value']) {
            this.value = source.value;
        }
        else if (source['valueCodeableConcept']) {
            this.value = new fhir.CodeableConcept(source.valueCodeableConcept, options);
        }
        else if (source['valueQuantity']) {
            this.value = new fhir.Quantity(source.valueQuantity, options);
        }
        else if (source['valueRange']) {
            this.value = new fhir.Range(source.valueRange, options);
        }
        else if (source['valueBoolean'] !== undefined) {
            this.value = new fhir.FhirBoolean({ value: source.valueBoolean }, options);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'SupplyRequest.parameter';
        }
        iss.push(...this.vOS('code', exp));
        iss.push(...this.vOS('value', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SupplyRequestParameter._fts_dataType = 'SupplyRequestParameter';
/**
 * Internal flag to properly serialize choice-type element SupplyRequest.parameter.value[x]
 */
SupplyRequestParameter._fts_valueIsChoice = true;
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
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options));
        }
        else {
            this.identifier = [];
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
        if (source['category']) {
            this.category = new fhir.CodeableConcept(source.category, options);
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
        if (source['item']) {
            this.item = source.item;
        }
        else if (source['itemCodeableConcept']) {
            this.item = new fhir.CodeableConcept(source.itemCodeableConcept, options);
        }
        else if (source['itemReference']) {
            this.item = new fhir.Reference(source.itemReference, options);
        }
        else {
            this.item = null;
        }
        if (source['quantity']) {
            this.quantity = new fhir.Quantity(source.quantity, options);
        }
        else {
            this.quantity = null;
        }
        if (source['parameter']) {
            this.parameter = source.parameter.map((x) => new fhir.SupplyRequestParameter(x, options));
        }
        else {
            this.parameter = [];
        }
        if (source['occurrence']) {
            this.occurrence = source.occurrence;
        }
        else if (source['occurrenceDateTime'] !== undefined) {
            this.occurrence = new fhir.FhirDateTime({ value: source.occurrenceDateTime }, options);
        }
        else if (source['occurrencePeriod']) {
            this.occurrence = new fhir.Period(source.occurrencePeriod, options);
        }
        else if (source['occurrenceTiming']) {
            this.occurrence = new fhir.Timing(source.occurrenceTiming, options);
        }
        if (source['authoredOn'] !== undefined) {
            this.authoredOn = new fhir.FhirDateTime({ value: source.authoredOn }, options);
        }
        if (source['_authoredOn']) {
            if (this.authoredOn) {
                this.authoredOn.addExtendedProperties(source._authoredOn);
            }
            else {
                this.authoredOn = new fhir.FhirDateTime(source._authoredOn, options);
            }
        }
        if (source['requester']) {
            this.requester = new fhir.Reference(source.requester, options);
        }
        if (source['supplier']) {
            this.supplier = source.supplier.map((x) => new fhir.Reference(x, options));
        }
        else {
            this.supplier = [];
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
        if (source['deliverFrom']) {
            this.deliverFrom = new fhir.Reference(source.deliverFrom, options);
        }
        if (source['deliverTo']) {
            this.deliverTo = new fhir.Reference(source.deliverTo, options);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'SupplyRequest';
        }
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vOSV('status', exp, 'SupplyrequestStatus', SupplyrequestStatusVsValidation, 'r'));
        iss.push(...this.vOS('category', exp));
        iss.push(...this.vOSV('priority', exp, 'RequestPriority', RequestPriorityVsValidation, 'r'));
        iss.push(...this.vRS('item', exp));
        iss.push(...this.vRS('quantity', exp));
        iss.push(...this.vOA('parameter', exp));
        iss.push(...this.vOS('occurrence', exp));
        iss.push(...this.vOS('authoredOn', exp));
        iss.push(...this.vOS('requester', exp));
        iss.push(...this.vOA('supplier', exp));
        iss.push(...this.vOA('reasonCode', exp));
        iss.push(...this.vOA('reasonReference', exp));
        iss.push(...this.vOS('deliverFrom', exp));
        iss.push(...this.vOS('deliverTo', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SupplyRequest._fts_dataType = 'SupplyRequest';
/**
 * Internal flag to properly serialize choice-type element SupplyRequest.item[x]
 */
SupplyRequest._fts_itemIsChoice = true;
/**
 * Internal flag to properly serialize choice-type element SupplyRequest.occurrence[x]
 */
SupplyRequest._fts_occurrenceIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VwcGx5UmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvU3VwcGx5UmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBT3RHLGFBQWE7QUFDYixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQW1DOUY7O0dBRUc7QUFDSCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsSUFBSSxDQUFDLGVBQWU7SUFpQjlEOztPQUVHO0lBQ0gsWUFBWSxTQUE2QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNuRyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQ25GLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQUU7YUFDOUMsSUFBSSxNQUFNLENBQUMsc0JBQXNCLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO2FBQ3BILElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFD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QUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBaEpEOztHQUVHO0FBQzZCLDJCQUFhLEdBQVUsZUFBZSxDQUFDO0FBeUJ2RTs7R0FFRztBQUN1QiwrQkFBaUIsR0FBUSxJQUFJLENBQUM7QUFheEQ7O0dBRUc7QUFDdUIscUNBQXVCLEdBQVEsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBTdXBwbHlSZXF1ZXN0XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdXBwbHlyZXF1ZXN0U3RhdHVzQ29kZXMsICBTdXBwbHlyZXF1ZXN0U3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1cHBseXJlcXVlc3RTdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU3VwcGx5cmVxdWVzdFN0YXR1c1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU3VwcGx5cmVxdWVzdFN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU3VwcGx5cmVxdWVzdEtpbmRDb2RlcywgIFN1cHBseXJlcXVlc3RLaW5kQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1cHBseXJlcXVlc3RLaW5kQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFN1cHBseXJlcXVlc3RLaW5kVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TdXBwbHlyZXF1ZXN0S2luZFZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUmVxdWVzdFByaW9yaXR5Q29kZXMsICBSZXF1ZXN0UHJpb3JpdHlDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVxdWVzdFByaW9yaXR5Q29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFJlcXVlc3RQcmlvcml0eVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVxdWVzdFByaW9yaXR5VnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdXBwbHlyZXF1ZXN0UmVhc29uQ29kZXMsICBTdXBwbHlyZXF1ZXN0UmVhc29uQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1cHBseXJlcXVlc3RSZWFzb25Db2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU3VwcGx5cmVxdWVzdFJlYXNvblZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU3VwcGx5cmVxdWVzdFJlYXNvblZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTdXBwbHlSZXF1ZXN0UGFyYW1ldGVyIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1cHBseVJlcXVlc3RQYXJhbWV0ZXJBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBBIGNvZGUgb3Igc3RyaW5nIHRoYXQgaWRlbnRpZmllcyB0aGUgZGV2aWNlIGRldGFpbCBiZWluZyBhc3NlcnRlZC5cclxuICAgKi9cclxuICBjb2RlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBSYW5nZSBtZWFucyBkZXZpY2Ugc2hvdWxkIGhhdmUgYSB2YWx1ZSB0aGF0IGZhbGxzIHNvbWV3aGVyZSB3aXRoaW4gdGhlIHNwZWNpZmllZCByYW5nZS5cclxuICAgKi9cclxuICB2YWx1ZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUXVhbnRpdHl8Zmhpci5SYW5nZXxmaGlyLkZoaXJCb29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBSYW5nZSBtZWFucyBkZXZpY2Ugc2hvdWxkIGhhdmUgYSB2YWx1ZSB0aGF0IGZhbGxzIHNvbWV3aGVyZSB3aXRoaW4gdGhlIHNwZWNpZmllZCByYW5nZS5cclxuICAgKi9cclxuICB2YWx1ZUNvZGVhYmxlQ29uY2VwdD86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmFuZ2UgbWVhbnMgZGV2aWNlIHNob3VsZCBoYXZlIGEgdmFsdWUgdGhhdCBmYWxscyBzb21ld2hlcmUgd2l0aGluIHRoZSBzcGVjaWZpZWQgcmFuZ2UuXHJcbiAgICovXHJcbiAgdmFsdWVRdWFudGl0eT86IGZoaXIuUXVhbnRpdHlBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBSYW5nZSBtZWFucyBkZXZpY2Ugc2hvdWxkIGhhdmUgYSB2YWx1ZSB0aGF0IGZhbGxzIHNvbWV3aGVyZSB3aXRoaW4gdGhlIHNwZWNpZmllZCByYW5nZS5cclxuICAgKi9cclxuICB2YWx1ZVJhbmdlPzogZmhpci5SYW5nZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJhbmdlIG1lYW5zIGRldmljZSBzaG91bGQgaGF2ZSBhIHZhbHVlIHRoYXQgZmFsbHMgc29tZXdoZXJlIHdpdGhpbiB0aGUgc3BlY2lmaWVkIHJhbmdlLlxyXG4gICAqL1xyXG4gIHZhbHVlQm9vbGVhbj86IGZoaXIuRmhpckJvb2xlYW58Ym9vbGVhbnx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTcGVjaWZpYyBwYXJhbWV0ZXJzIGZvciB0aGUgb3JkZXJlZCBpdGVtLiAgRm9yIGV4YW1wbGUsIHRoZSBzaXplIG9mIHRoZSBpbmRpY2F0ZWQgaXRlbS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdXBwbHlSZXF1ZXN0UGFyYW1ldGVyIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnU3VwcGx5UmVxdWVzdFBhcmFtZXRlcic7XHJcbiAgLyoqXHJcbiAgICogQSBjb2RlIG9yIHN0cmluZyB0aGF0IGlkZW50aWZpZXMgdGhlIGRldmljZSBkZXRhaWwgYmVpbmcgYXNzZXJ0ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGNvZGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmFuZ2UgbWVhbnMgZGV2aWNlIHNob3VsZCBoYXZlIGEgdmFsdWUgdGhhdCBmYWxscyBzb21ld2hlcmUgd2l0aGluIHRoZSBzcGVjaWZpZWQgcmFuZ2UuXHJcbiAgICovXHJcbiAgcHVibGljIHZhbHVlPzogKGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUXVhbnRpdHl8Zmhpci5SYW5nZXxmaGlyLkZoaXJCb29sZWFuKXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgZmxhZyB0byBwcm9wZXJseSBzZXJpYWxpemUgY2hvaWNlLXR5cGUgZWxlbWVudCBTdXBwbHlSZXF1ZXN0LnBhcmFtZXRlci52YWx1ZVt4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c192YWx1ZUlzQ2hvaWNlOnRydWUgPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFN1cHBseVJlcXVlc3RQYXJhbWV0ZXIgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxTdXBwbHlSZXF1ZXN0UGFyYW1ldGVyQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2NvZGUnXSkgeyB0aGlzLmNvZGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmNvZGUsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWyd2YWx1ZSddKSB7IHRoaXMudmFsdWUgPSBzb3VyY2UudmFsdWU7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVDb2RlYWJsZUNvbmNlcHQnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS52YWx1ZUNvZGVhYmxlQ29uY2VwdCwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVRdWFudGl0eSddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5RdWFudGl0eShzb3VyY2UudmFsdWVRdWFudGl0eSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVSYW5nZSddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5SYW5nZShzb3VyY2UudmFsdWVSYW5nZSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVCb29sZWFuJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oe3ZhbHVlOiBzb3VyY2UudmFsdWVCb29sZWFufSwgb3B0aW9ucyk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdTdXBwbHlSZXF1ZXN0LnBhcmFtZXRlcicgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2NvZGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3ZhbHVlJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTdXBwbHlSZXF1ZXN0IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1cHBseVJlcXVlc3RBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJTdXBwbHlSZXF1ZXN0XCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpZGVudGlmaWVyLnR5cGUgZWxlbWVudCBpcyB1c2VkIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gdGhlIGlkZW50aWZpZXJzIGFzc2lnbmVkIGJ5IHRoZSByZXF1ZXN0ZXIvcGxhY2VyIGFuZCB0aGUgcGVyZm9ybWVyL2ZpbGxlci5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTdGF0dXMgb2YgdGhlIHN1cHBseSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHN0YXR1cz86IGZoaXIuRmhpckNvZGU8U3VwcGx5cmVxdWVzdFN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdXBwbHlSZXF1ZXN0LnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENhdGVnb3J5IG9mIHN1cHBseSwgZS5nLiAgY2VudHJhbCwgbm9uLXN0b2NrLCBldGMuIFRoaXMgaXMgdXNlZCB0byBzdXBwb3J0IHdvcmsgZmxvd3MgYXNzb2NpYXRlZCB3aXRoIHRoZSBzdXBwbHkgcHJvY2Vzcy5cclxuICAgKi9cclxuICBjYXRlZ29yeT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGhvdyBxdWlja2x5IHRoaXMgU3VwcGx5UmVxdWVzdCBzaG91bGQgYmUgYWRkcmVzc2VkIHdpdGggcmVzcGVjdCB0byBvdGhlciByZXF1ZXN0cy5cclxuICAgKi9cclxuICBwcmlvcml0eT86IGZoaXIuRmhpckNvZGU8UmVxdWVzdFByaW9yaXR5Q29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1cHBseVJlcXVlc3QucHJpb3JpdHlcclxuICAgKi9cclxuICBfcHJpb3JpdHk/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIE5vdGUgdGhhdCB0aGVyZSdzIGEgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgcHJlc2NyaXB0aW9uIC0gYW4gaW5zdHJ1Y3Rpb24gdG8gdGFrZSBhIG1lZGljYXRpb24sIGFsb25nIHdpdGggYSAoc29tZXRpbWVzKSBpbXBsaWNpdCBzdXBwbHksIGFuZCBhbiBleHBsaWNpdCByZXF1ZXN0IHRvIHN1cHBseSwgd2l0aCBubyBleHBsaWNpdCBpbnN0cnVjdGlvbnMuXHJcbiAgICovXHJcbiAgaXRlbT86IGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOb3RlIHRoYXQgdGhlcmUncyBhIGRpZmZlcmVuY2UgYmV0d2VlbiBhIHByZXNjcmlwdGlvbiAtIGFuIGluc3RydWN0aW9uIHRvIHRha2UgYSBtZWRpY2F0aW9uLCBhbG9uZyB3aXRoIGEgKHNvbWV0aW1lcykgaW1wbGljaXQgc3VwcGx5LCBhbmQgYW4gZXhwbGljaXQgcmVxdWVzdCB0byBzdXBwbHksIHdpdGggbm8gZXhwbGljaXQgaW5zdHJ1Y3Rpb25zLlxyXG4gICAqL1xyXG4gIGl0ZW1Db2RlYWJsZUNvbmNlcHQ/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5vdGUgdGhhdCB0aGVyZSdzIGEgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgcHJlc2NyaXB0aW9uIC0gYW4gaW5zdHJ1Y3Rpb24gdG8gdGFrZSBhIG1lZGljYXRpb24sIGFsb25nIHdpdGggYSAoc29tZXRpbWVzKSBpbXBsaWNpdCBzdXBwbHksIGFuZCBhbiBleHBsaWNpdCByZXF1ZXN0IHRvIHN1cHBseSwgd2l0aCBubyBleHBsaWNpdCBpbnN0cnVjdGlvbnMuXHJcbiAgICovXHJcbiAgaXRlbVJlZmVyZW5jZT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFtb3VudCB0aGF0IGlzIGJlaW5nIG9yZGVyZWQgb2YgdGhlIGluZGljYXRlZCBpdGVtLlxyXG4gICAqL1xyXG4gIHF1YW50aXR5OiBmaGlyLlF1YW50aXR5QXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmljIHBhcmFtZXRlcnMgZm9yIHRoZSBvcmRlcmVkIGl0ZW0uICBGb3IgZXhhbXBsZSwgdGhlIHNpemUgb2YgdGhlIGluZGljYXRlZCBpdGVtLlxyXG4gICAqL1xyXG4gIHBhcmFtZXRlcj86IGZoaXIuU3VwcGx5UmVxdWVzdFBhcmFtZXRlckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGUgcmVxdWVzdCBzaG91bGQgYmUgZnVsZmlsbGVkLlxyXG4gICAqL1xyXG4gIG9jY3VycmVuY2U/OiBmaGlyLkZoaXJEYXRlVGltZXxmaGlyLlBlcmlvZHxmaGlyLlRpbWluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGUgcmVxdWVzdCBzaG91bGQgYmUgZnVsZmlsbGVkLlxyXG4gICAqL1xyXG4gIG9jY3VycmVuY2VEYXRlVGltZT86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGUgcmVxdWVzdCBzaG91bGQgYmUgZnVsZmlsbGVkLlxyXG4gICAqL1xyXG4gIG9jY3VycmVuY2VQZXJpb2Q/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdoZW4gdGhlIHJlcXVlc3Qgc2hvdWxkIGJlIGZ1bGZpbGxlZC5cclxuICAgKi9cclxuICBvY2N1cnJlbmNlVGltaW5nPzogZmhpci5UaW1pbmdBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVuIHRoZSByZXF1ZXN0IHdhcyBtYWRlLlxyXG4gICAqL1xyXG4gIGF1dGhvcmVkT24/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdXBwbHlSZXF1ZXN0LmF1dGhvcmVkT25cclxuICAgKi9cclxuICBfYXV0aG9yZWRPbj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRldmljZSwgcHJhY3RpdGlvbmVyLCBldGMuIHdobyBpbml0aWF0ZWQgdGhlIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgcmVxdWVzdGVyPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaG8gaXMgaW50ZW5kZWQgdG8gZnVsZmlsbCB0aGUgcmVxdWVzdC5cclxuICAgKi9cclxuICBzdXBwbGllcj86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcmVhc29uIHdoeSB0aGUgc3VwcGx5IGl0ZW0gd2FzIHJlcXVlc3RlZC5cclxuICAgKi9cclxuICByZWFzb25Db2RlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZWFzb24gd2h5IHRoZSBzdXBwbHkgaXRlbSB3YXMgcmVxdWVzdGVkLlxyXG4gICAqL1xyXG4gIHJlYXNvblJlZmVyZW5jZT86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVyZSB0aGUgc3VwcGx5IGlzIGV4cGVjdGVkIHRvIGNvbWUgZnJvbS5cclxuICAgKi9cclxuICBkZWxpdmVyRnJvbT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlcmUgdGhlIHN1cHBseSBpcyBkZXN0aW5lZCB0byBnby5cclxuICAgKi9cclxuICBkZWxpdmVyVG8/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSByZWNvcmQgb2YgYSByZXF1ZXN0IGZvciBhIG1lZGljYXRpb24sIHN1YnN0YW5jZSBvciBkZXZpY2UgdXNlZCBpbiB0aGUgaGVhbHRoY2FyZSBzZXR0aW5nLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN1cHBseVJlcXVlc3QgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1N1cHBseVJlcXVlc3QnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiU3VwcGx5UmVxdWVzdFwiO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpZGVudGlmaWVyLnR5cGUgZWxlbWVudCBpcyB1c2VkIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gdGhlIGlkZW50aWZpZXJzIGFzc2lnbmVkIGJ5IHRoZSByZXF1ZXN0ZXIvcGxhY2VyIGFuZCB0aGUgcGVyZm9ybWVyL2ZpbGxlci5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogU3RhdHVzIG9mIHRoZSBzdXBwbHkgcmVxdWVzdC5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzPzogZmhpci5GaGlyQ29kZTxTdXBwbHlyZXF1ZXN0U3RhdHVzQ29kZVR5cGU+fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBDYXRlZ29yeSBvZiBzdXBwbHksIGUuZy4gIGNlbnRyYWwsIG5vbi1zdG9jaywgZXRjLiBUaGlzIGlzIHVzZWQgdG8gc3VwcG9ydCB3b3JrIGZsb3dzIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3VwcGx5IHByb2Nlc3MuXHJcbiAgICovXHJcbiAgcHVibGljIGNhdGVnb3J5PzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBob3cgcXVpY2tseSB0aGlzIFN1cHBseVJlcXVlc3Qgc2hvdWxkIGJlIGFkZHJlc3NlZCB3aXRoIHJlc3BlY3QgdG8gb3RoZXIgcmVxdWVzdHMuXHJcbiAgICovXHJcbiAgcHVibGljIHByaW9yaXR5PzogZmhpci5GaGlyQ29kZTxSZXF1ZXN0UHJpb3JpdHlDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5vdGUgdGhhdCB0aGVyZSdzIGEgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgcHJlc2NyaXB0aW9uIC0gYW4gaW5zdHJ1Y3Rpb24gdG8gdGFrZSBhIG1lZGljYXRpb24sIGFsb25nIHdpdGggYSAoc29tZXRpbWVzKSBpbXBsaWNpdCBzdXBwbHksIGFuZCBhbiBleHBsaWNpdCByZXF1ZXN0IHRvIHN1cHBseSwgd2l0aCBubyBleHBsaWNpdCBpbnN0cnVjdGlvbnMuXHJcbiAgICovXHJcbiAgcHVibGljIGl0ZW06IChmaGlyLkNvZGVhYmxlQ29uY2VwdHxmaGlyLlJlZmVyZW5jZSl8bnVsbDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IFN1cHBseVJlcXVlc3QuaXRlbVt4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c19pdGVtSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFtb3VudCB0aGF0IGlzIGJlaW5nIG9yZGVyZWQgb2YgdGhlIGluZGljYXRlZCBpdGVtLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBxdWFudGl0eTogZmhpci5RdWFudGl0eXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmljIHBhcmFtZXRlcnMgZm9yIHRoZSBvcmRlcmVkIGl0ZW0uICBGb3IgZXhhbXBsZSwgdGhlIHNpemUgb2YgdGhlIGluZGljYXRlZCBpdGVtLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwYXJhbWV0ZXI6IGZoaXIuU3VwcGx5UmVxdWVzdFBhcmFtZXRlcltdO1xyXG4gIC8qKlxyXG4gICAqIFdoZW4gdGhlIHJlcXVlc3Qgc2hvdWxkIGJlIGZ1bGZpbGxlZC5cclxuICAgKi9cclxuICBwdWJsaWMgb2NjdXJyZW5jZT86IChmaGlyLkZoaXJEYXRlVGltZXxmaGlyLlBlcmlvZHxmaGlyLlRpbWluZyl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIGZsYWcgdG8gcHJvcGVybHkgc2VyaWFsaXplIGNob2ljZS10eXBlIGVsZW1lbnQgU3VwcGx5UmVxdWVzdC5vY2N1cnJlbmNlW3hdXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBfZnRzX29jY3VycmVuY2VJc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBXaGVuIHRoZSByZXF1ZXN0IHdhcyBtYWRlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhdXRob3JlZE9uPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkZXZpY2UsIHByYWN0aXRpb25lciwgZXRjLiB3aG8gaW5pdGlhdGVkIHRoZSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXF1ZXN0ZXI/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hvIGlzIGludGVuZGVkIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgcHVibGljIHN1cHBsaWVyOiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZWFzb24gd2h5IHRoZSBzdXBwbHkgaXRlbSB3YXMgcmVxdWVzdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFzb25Db2RlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZWFzb24gd2h5IHRoZSBzdXBwbHkgaXRlbSB3YXMgcmVxdWVzdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFzb25SZWZlcmVuY2U6IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogV2hlcmUgdGhlIHN1cHBseSBpcyBleHBlY3RlZCB0byBjb21lIGZyb20uXHJcbiAgICovXHJcbiAgcHVibGljIGRlbGl2ZXJGcm9tPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdoZXJlIHRoZSBzdXBwbHkgaXMgZGVzdGluZWQgdG8gZ28uXHJcbiAgICovXHJcbiAgcHVibGljIGRlbGl2ZXJUbz86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBTdXBwbHlSZXF1ZXN0IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8U3VwcGx5UmVxdWVzdEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdTdXBwbHlSZXF1ZXN0JztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxTdXBwbHlyZXF1ZXN0U3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN0YXR1c30sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzKSB7IHRoaXMuc3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPFN1cHBseXJlcXVlc3RTdGF0dXNDb2RlVHlwZT4oc291cmNlLl9zdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NhdGVnb3J5J10pIHsgdGhpcy5jYXRlZ29yeSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuY2F0ZWdvcnksIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydwcmlvcml0eSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5wcmlvcml0eSA9IG5ldyBmaGlyLkZoaXJDb2RlPFJlcXVlc3RQcmlvcml0eUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5wcmlvcml0eX0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfcHJpb3JpdHknXSkge1xyXG4gICAgICBpZiAodGhpcy5wcmlvcml0eSkgeyB0aGlzLnByaW9yaXR5LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3ByaW9yaXR5ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucHJpb3JpdHkgPSBuZXcgZmhpci5GaGlyQ29kZTxSZXF1ZXN0UHJpb3JpdHlDb2RlVHlwZT4oc291cmNlLl9wcmlvcml0eSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnaXRlbSddKSB7IHRoaXMuaXRlbSA9IHNvdXJjZS5pdGVtOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ2l0ZW1Db2RlYWJsZUNvbmNlcHQnXSkgeyB0aGlzLml0ZW0gPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLml0ZW1Db2RlYWJsZUNvbmNlcHQsIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ2l0ZW1SZWZlcmVuY2UnXSkgeyB0aGlzLml0ZW0gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLml0ZW1SZWZlcmVuY2UsIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pdGVtID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsncXVhbnRpdHknXSkgeyB0aGlzLnF1YW50aXR5ID0gbmV3IGZoaXIuUXVhbnRpdHkoc291cmNlLnF1YW50aXR5LCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucXVhbnRpdHkgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydwYXJhbWV0ZXInXSkgeyB0aGlzLnBhcmFtZXRlciA9IHNvdXJjZS5wYXJhbWV0ZXIubWFwKCh4KSA9PiBuZXcgZmhpci5TdXBwbHlSZXF1ZXN0UGFyYW1ldGVyKHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucGFyYW1ldGVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ29jY3VycmVuY2UnXSkgeyB0aGlzLm9jY3VycmVuY2UgPSBzb3VyY2Uub2NjdXJyZW5jZTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydvY2N1cnJlbmNlRGF0ZVRpbWUnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMub2NjdXJyZW5jZSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5vY2N1cnJlbmNlRGF0ZVRpbWV9LCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydvY2N1cnJlbmNlUGVyaW9kJ10pIHsgdGhpcy5vY2N1cnJlbmNlID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS5vY2N1cnJlbmNlUGVyaW9kLCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydvY2N1cnJlbmNlVGltaW5nJ10pIHsgdGhpcy5vY2N1cnJlbmNlID0gbmV3IGZoaXIuVGltaW5nKHNvdXJjZS5vY2N1cnJlbmNlVGltaW5nLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYXV0aG9yZWRPbiddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5hdXRob3JlZE9uID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLmF1dGhvcmVkT259LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2F1dGhvcmVkT24nXSkge1xyXG4gICAgICBpZiAodGhpcy5hdXRob3JlZE9uKSB7IHRoaXMuYXV0aG9yZWRPbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9hdXRob3JlZE9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuYXV0aG9yZWRPbiA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX2F1dGhvcmVkT24gYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVxdWVzdGVyJ10pIHsgdGhpcy5yZXF1ZXN0ZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnJlcXVlc3Rlciwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N1cHBsaWVyJ10pIHsgdGhpcy5zdXBwbGllciA9IHNvdXJjZS5zdXBwbGllci5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN1cHBsaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlYXNvbkNvZGUnXSkgeyB0aGlzLnJlYXNvbkNvZGUgPSBzb3VyY2UucmVhc29uQ29kZS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnJlYXNvbkNvZGUgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVhc29uUmVmZXJlbmNlJ10pIHsgdGhpcy5yZWFzb25SZWZlcmVuY2UgPSBzb3VyY2UucmVhc29uUmVmZXJlbmNlLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucmVhc29uUmVmZXJlbmNlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2RlbGl2ZXJGcm9tJ10pIHsgdGhpcy5kZWxpdmVyRnJvbSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuZGVsaXZlckZyb20sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydkZWxpdmVyVG8nXSkgeyB0aGlzLmRlbGl2ZXJUbyA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuZGVsaXZlclRvLCBvcHRpb25zKTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1N1cHBseVJlcXVlc3QnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TVignc3RhdHVzJyxleHAsJ1N1cHBseXJlcXVlc3RTdGF0dXMnLFN1cHBseXJlcXVlc3RTdGF0dXNWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnY2F0ZWdvcnknLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1NWKCdwcmlvcml0eScsZXhwLCdSZXF1ZXN0UHJpb3JpdHknLFJlcXVlc3RQcmlvcml0eVZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdpdGVtJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdxdWFudGl0eScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgncGFyYW1ldGVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdvY2N1cnJlbmNlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdhdXRob3JlZE9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdyZXF1ZXN0ZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ3N1cHBsaWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdyZWFzb25Db2RlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdyZWFzb25SZWZlcmVuY2UnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2RlbGl2ZXJGcm9tJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdkZWxpdmVyVG8nLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19