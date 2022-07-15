// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Quantity
import * as fhir from '../fhir.js';
// @ts-ignore
import { QuantityComparatorVsValidation } from '../fhirValueSets/QuantityComparatorVsValidation.js';
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export class Quantity extends fhir.FhirElement {
    /**
     * Default constructor for Quantity - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['value']) {
            this.value = new fhir.FhirDecimal({ value: source.value });
        }
        if (source['_value']) {
            if (this.value) {
                this.value.addExtendedProperties(source._value);
            }
            else {
                this.value = new fhir.FhirDecimal(source._value);
            }
        }
        if (source['comparator']) {
            this.comparator = new fhir.FhirCode({ value: source.comparator });
        }
        if (source['_comparator']) {
            if (this.comparator) {
                this.comparator.addExtendedProperties(source._comparator);
            }
            else {
                this.comparator = new fhir.FhirCode(source._comparator);
            }
        }
        if (source['unit']) {
            this.unit = new fhir.FhirString({ value: source.unit });
        }
        if (source['_unit']) {
            if (this.unit) {
                this.unit.addExtendedProperties(source._unit);
            }
            else {
                this.unit = new fhir.FhirString(source._unit);
            }
        }
        if (source['system']) {
            this.system = new fhir.FhirUri({ value: source.system });
        }
        if (source['_system']) {
            if (this.system) {
                this.system.addExtendedProperties(source._system);
            }
            else {
                this.system = new fhir.FhirUri(source._system);
            }
        }
        if (source['code']) {
            this.code = new fhir.FhirCode({ value: source.code });
        }
        if (source['_code']) {
            if (this.code) {
                this.code.addExtendedProperties(source._code);
            }
            else {
                this.code = new fhir.FhirCode(source._code);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Quantity';
        }
        this.vOS('value', exp);
        this.vOSV('comparator', exp, 'QuantityComparator', QuantityComparatorVsValidation, 'r');
        this.vOS('unit', exp);
        this.vOS('system', exp);
        this.vOS('code', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Quantity._fts_dataType = 'Quantity';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVhbnRpdHkuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1F1YW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDZCQUE2QjtBQUU3QixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUluQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUErQ3BHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFFBQVMsU0FBUSxJQUFJLENBQUMsV0FBVztJQXlCNUM7O09BRUc7SUFDSCxZQUFZLFNBQStCLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3JGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ2xGLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxNQUFPLENBQUMsQ0FBQzthQUFFO2lCQUNoRTtnQkFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBdUMsQ0FBQyxDQUFDO2FBQUU7U0FDNUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUE2QixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztTQUFFO1FB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QztJQUNoQixDQUFDOztBQW5FRDs7R0FFRztBQUM2QixzQkFBYSxHQUFVLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogUXVhbnRpdHlcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFF1YW50aXR5Q29tcGFyYXRvckNvZGVzLCAgUXVhbnRpdHlDb21wYXJhdG9yQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1F1YW50aXR5Q29tcGFyYXRvckNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBRdWFudGl0eUNvbXBhcmF0b3JWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1F1YW50aXR5Q29tcGFyYXRvclZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBRdWFudGl0eSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBRdWFudGl0eUFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGltcGxpY2l0IHByZWNpc2lvbiBpbiB0aGUgdmFsdWUgc2hvdWxkIGFsd2F5cyBiZSBob25vcmVkLiBNb25ldGFyeSB2YWx1ZXMgaGF2ZSB0aGVpciBvd24gcnVsZXMgZm9yIGhhbmRsaW5nIHByZWNpc2lvbiAocmVmZXIgdG8gc3RhbmRhcmQgYWNjb3VudGluZyB0ZXh0IGJvb2tzKS5cclxuICAgKi9cclxuICB2YWx1ZT86IGZoaXIuRmhpckRlY2ltYWx8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUXVhbnRpdHkudmFsdWVcclxuICAgKi9cclxuICBfdmFsdWU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEhvdyB0aGUgdmFsdWUgc2hvdWxkIGJlIHVuZGVyc3Rvb2QgYW5kIHJlcHJlc2VudGVkIC0gd2hldGhlciB0aGUgYWN0dWFsIHZhbHVlIGlzIGdyZWF0ZXIgb3IgbGVzcyB0aGFuIHRoZSBzdGF0ZWQgdmFsdWUgZHVlIHRvIG1lYXN1cmVtZW50IGlzc3VlczsgZS5nLiBpZiB0aGUgY29tcGFyYXRvciBpcyBcIiZsdDtcIiAsIHRoZW4gdGhlIHJlYWwgdmFsdWUgaXMgJmx0OyBzdGF0ZWQgdmFsdWUuXHJcbiAgICovXHJcbiAgY29tcGFyYXRvcj86IGZoaXIuRmhpckNvZGU8UXVhbnRpdHlDb21wYXJhdG9yQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFF1YW50aXR5LmNvbXBhcmF0b3JcclxuICAgKi9cclxuICBfY29tcGFyYXRvcj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSBodW1hbi1yZWFkYWJsZSBmb3JtIG9mIHRoZSB1bml0LlxyXG4gICAqL1xyXG4gIHVuaXQ/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUXVhbnRpdHkudW5pdFxyXG4gICAqL1xyXG4gIF91bml0PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgaWRlbnRpZmljYXRpb24gb2YgdGhlIHN5c3RlbSB0aGF0IHByb3ZpZGVzIHRoZSBjb2RlZCBmb3JtIG9mIHRoZSB1bml0LlxyXG4gICAqL1xyXG4gIHN5c3RlbT86IGZoaXIuRmhpclVyaXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBRdWFudGl0eS5zeXN0ZW1cclxuICAgKi9cclxuICBfc3lzdGVtPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgcHJlZmVycmVkIHN5c3RlbSBpcyBVQ1VNLCBidXQgU05PTUVEIENUIGNhbiBhbHNvIGJlIHVzZWQgKGZvciBjdXN0b21hcnkgdW5pdHMpIG9yIElTTyA0MjE3IGZvciBjdXJyZW5jeS4gIFRoZSBjb250ZXh0IG9mIHVzZSBtYXkgYWRkaXRpb25hbGx5IHJlcXVpcmUgYSBjb2RlIGZyb20gYSBwYXJ0aWN1bGFyIHN5c3RlbS5cclxuICAgKi9cclxuICBjb2RlPzogZmhpci5GaGlyQ29kZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBRdWFudGl0eS5jb2RlXHJcbiAgICovXHJcbiAgX2NvZGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQSBtZWFzdXJlZCBhbW91bnQgKG9yIGFuIGFtb3VudCB0aGF0IGNhbiBwb3RlbnRpYWxseSBiZSBtZWFzdXJlZCkuIE5vdGUgdGhhdCBtZWFzdXJlZCBhbW91bnRzIGluY2x1ZGUgYW1vdW50cyB0aGF0IGFyZSBub3QgcHJlY2lzZWx5IHF1YW50aWZpZWQsIGluY2x1ZGluZyBhbW91bnRzIGludm9sdmluZyBhcmJpdHJhcnkgdW5pdHMgYW5kIGZsb2F0aW5nIGN1cnJlbmNpZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUXVhbnRpdHkgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1F1YW50aXR5JztcclxuICAvKipcclxuICAgKiBUaGUgaW1wbGljaXQgcHJlY2lzaW9uIGluIHRoZSB2YWx1ZSBzaG91bGQgYWx3YXlzIGJlIGhvbm9yZWQuIE1vbmV0YXJ5IHZhbHVlcyBoYXZlIHRoZWlyIG93biBydWxlcyBmb3IgaGFuZGxpbmcgcHJlY2lzaW9uIChyZWZlciB0byBzdGFuZGFyZCBhY2NvdW50aW5nIHRleHQgYm9va3MpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB2YWx1ZT86IGZoaXIuRmhpckRlY2ltYWx8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEhvdyB0aGUgdmFsdWUgc2hvdWxkIGJlIHVuZGVyc3Rvb2QgYW5kIHJlcHJlc2VudGVkIC0gd2hldGhlciB0aGUgYWN0dWFsIHZhbHVlIGlzIGdyZWF0ZXIgb3IgbGVzcyB0aGFuIHRoZSBzdGF0ZWQgdmFsdWUgZHVlIHRvIG1lYXN1cmVtZW50IGlzc3VlczsgZS5nLiBpZiB0aGUgY29tcGFyYXRvciBpcyBcIiZsdDtcIiAsIHRoZW4gdGhlIHJlYWwgdmFsdWUgaXMgJmx0OyBzdGF0ZWQgdmFsdWUuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbXBhcmF0b3I/OiBmaGlyLkZoaXJDb2RlPFF1YW50aXR5Q29tcGFyYXRvckNvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBodW1hbi1yZWFkYWJsZSBmb3JtIG9mIHRoZSB1bml0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1bml0PzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaWRlbnRpZmljYXRpb24gb2YgdGhlIHN5c3RlbSB0aGF0IHByb3ZpZGVzIHRoZSBjb2RlZCBmb3JtIG9mIHRoZSB1bml0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzeXN0ZW0/OiBmaGlyLkZoaXJVcml8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwcmVmZXJyZWQgc3lzdGVtIGlzIFVDVU0sIGJ1dCBTTk9NRUQgQ1QgY2FuIGFsc28gYmUgdXNlZCAoZm9yIGN1c3RvbWFyeSB1bml0cykgb3IgSVNPIDQyMTcgZm9yIGN1cnJlbmN5LiAgVGhlIGNvbnRleHQgb2YgdXNlIG1heSBhZGRpdGlvbmFsbHkgcmVxdWlyZSBhIGNvZGUgZnJvbSBhIHBhcnRpY3VsYXIgc3lzdGVtLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2RlPzogZmhpci5GaGlyQ29kZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgUXVhbnRpdHkgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxRdWFudGl0eUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyd2YWx1ZSddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5GaGlyRGVjaW1hbCh7dmFsdWU6IHNvdXJjZS52YWx1ZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfdmFsdWUnXSkge1xyXG4gICAgICBpZiAodGhpcy52YWx1ZSkgeyB0aGlzLnZhbHVlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3ZhbHVlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5GaGlyRGVjaW1hbChzb3VyY2UuX3ZhbHVlIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGVjaW1hbEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnY29tcGFyYXRvciddKSB7IHRoaXMuY29tcGFyYXRvciA9IG5ldyBmaGlyLkZoaXJDb2RlPFF1YW50aXR5Q29tcGFyYXRvckNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5jb21wYXJhdG9yfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jb21wYXJhdG9yJ10pIHtcclxuICAgICAgaWYgKHRoaXMuY29tcGFyYXRvcikgeyB0aGlzLmNvbXBhcmF0b3IuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY29tcGFyYXRvciEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNvbXBhcmF0b3IgPSBuZXcgZmhpci5GaGlyQ29kZTxRdWFudGl0eUNvbXBhcmF0b3JDb2RlVHlwZT4oc291cmNlLl9jb21wYXJhdG9yIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd1bml0J10pIHsgdGhpcy51bml0ID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS51bml0fSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ191bml0J10pIHtcclxuICAgICAgaWYgKHRoaXMudW5pdCkgeyB0aGlzLnVuaXQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdW5pdCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnVuaXQgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fdW5pdCBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3lzdGVtJ10pIHsgdGhpcy5zeXN0ZW0gPSBuZXcgZmhpci5GaGlyVXJpKHt2YWx1ZTogc291cmNlLnN5c3RlbX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3lzdGVtJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3lzdGVtKSB7IHRoaXMuc3lzdGVtLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N5c3RlbSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN5c3RlbSA9IG5ldyBmaGlyLkZoaXJVcmkoc291cmNlLl9zeXN0ZW0gYXMgUGFydGlhbDxmaGlyLkZoaXJVcmlBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NvZGUnXSkgeyB0aGlzLmNvZGUgPSBuZXcgZmhpci5GaGlyQ29kZSh7dmFsdWU6IHNvdXJjZS5jb2RlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jb2RlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuY29kZSkgeyB0aGlzLmNvZGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY29kZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNvZGUgPSBuZXcgZmhpci5GaGlyQ29kZShzb3VyY2UuX2NvZGUgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnUXVhbnRpdHknIH1cclxuICAgIHRoaXMudk9TKCd2YWx1ZScsZXhwKVxyXG4gICAgdGhpcy52T1NWKCdjb21wYXJhdG9yJyxleHAsJ1F1YW50aXR5Q29tcGFyYXRvcicsUXVhbnRpdHlDb21wYXJhdG9yVnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHRoaXMudk9TKCd1bml0JyxleHApXHJcbiAgICB0aGlzLnZPUygnc3lzdGVtJyxleHApXHJcbiAgICB0aGlzLnZPUygnY29kZScsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19