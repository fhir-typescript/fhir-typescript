// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Quantity
import * as fhir from '../fhir.js';
// @ts-ignore
import { QuantityComparatorCodes } from '../fhirValueSets/QuantityComparatorCodes.js';
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
     * Required-bound Value Set for comparator (Quantity.comparator)
     */
    static get comparatorRequiredCodes() {
        return QuantityComparatorCodes;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'Quantity';
        }
        if (this["value"]) {
            issues.push(...this.value.doModelValidation(expression + '.value'));
        }
        if (this['comparator'] && (!Object.values(QuantityComparatorCodes).includes(this.comparator.value))) {
            issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property comparator fhir: Quantity.comparator:code Required binding to: QuantityComparator', expression: [expression] });
        }
        if (this["comparator"]) {
            issues.push(...this.comparator.doModelValidation(expression + '.comparator'));
        }
        if (this["unit"]) {
            issues.push(...this.unit.doModelValidation(expression + '.unit'));
        }
        if (this["system"]) {
            issues.push(...this.system.doModelValidation(expression + '.system'));
        }
        if (this["code"]) {
            issues.push(...this.code.doModelValidation(expression + '.code'));
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Quantity._fts_dataType = 'Quantity';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVhbnRpdHkuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1F1YW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDZCQUE2QjtBQUU3QixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUluQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLHVCQUF1QixFQUErQixNQUFNLDZDQUE2QyxDQUFDO0FBK0NuSDs7R0FFRztBQUNILE1BQU0sT0FBTyxRQUFTLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUF5QjVDOztPQUVHO0lBQ0gsWUFBWSxTQUErQixFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNyRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNsRixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsTUFBTyxDQUFDLENBQUM7YUFBRTtpQkFDaEU7Z0JBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQXVDLENBQUMsQ0FBQzthQUFFO1NBQzVGO1FBQ0QsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBNkIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7U0FBRTtR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VSxDQUFDLEtBQVksQ0FBQyxDQUFDLEVBQUU7WUFDMUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUseUdBQXlHLEVBQUUsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVNO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEdBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3hHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FBRTtRQUN0RixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDNUYsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEdBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3RGLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBNUVEOztHQUVHO0FBQzZCLHNCQUFhLEdBQVUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBRdWFudGl0eVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUXVhbnRpdHlDb21wYXJhdG9yQ29kaW5ncywgUXVhbnRpdHlDb21wYXJhdG9yQ29kaW5nVHlwZSx9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUXVhbnRpdHlDb21wYXJhdG9yQ29kaW5ncy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUXVhbnRpdHlDb21wYXJhdG9yQ29kZXMsICBRdWFudGl0eUNvbXBhcmF0b3JDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUXVhbnRpdHlDb21wYXJhdG9yQ29kZXMuanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgUXVhbnRpdHkgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUXVhbnRpdHlBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpbXBsaWNpdCBwcmVjaXNpb24gaW4gdGhlIHZhbHVlIHNob3VsZCBhbHdheXMgYmUgaG9ub3JlZC4gTW9uZXRhcnkgdmFsdWVzIGhhdmUgdGhlaXIgb3duIHJ1bGVzIGZvciBoYW5kbGluZyBwcmVjaXNpb24gKHJlZmVyIHRvIHN0YW5kYXJkIGFjY291bnRpbmcgdGV4dCBib29rcykuXHJcbiAgICovXHJcbiAgdmFsdWU/OiBmaGlyLkZoaXJEZWNpbWFsfG51bWJlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFF1YW50aXR5LnZhbHVlXHJcbiAgICovXHJcbiAgX3ZhbHVlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBIb3cgdGhlIHZhbHVlIHNob3VsZCBiZSB1bmRlcnN0b29kIGFuZCByZXByZXNlbnRlZCAtIHdoZXRoZXIgdGhlIGFjdHVhbCB2YWx1ZSBpcyBncmVhdGVyIG9yIGxlc3MgdGhhbiB0aGUgc3RhdGVkIHZhbHVlIGR1ZSB0byBtZWFzdXJlbWVudCBpc3N1ZXM7IGUuZy4gaWYgdGhlIGNvbXBhcmF0b3IgaXMgXCImbHQ7XCIgLCB0aGVuIHRoZSByZWFsIHZhbHVlIGlzICZsdDsgc3RhdGVkIHZhbHVlLlxyXG4gICAqL1xyXG4gIGNvbXBhcmF0b3I/OiBmaGlyLkZoaXJDb2RlPFF1YW50aXR5Q29tcGFyYXRvckNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBRdWFudGl0eS5jb21wYXJhdG9yXHJcbiAgICovXHJcbiAgX2NvbXBhcmF0b3I/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEEgaHVtYW4tcmVhZGFibGUgZm9ybSBvZiB0aGUgdW5pdC5cclxuICAgKi9cclxuICB1bml0PzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFF1YW50aXR5LnVuaXRcclxuICAgKi9cclxuICBfdW5pdD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIGlkZW50aWZpY2F0aW9uIG9mIHRoZSBzeXN0ZW0gdGhhdCBwcm92aWRlcyB0aGUgY29kZWQgZm9ybSBvZiB0aGUgdW5pdC5cclxuICAgKi9cclxuICBzeXN0ZW0/OiBmaGlyLkZoaXJVcml8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUXVhbnRpdHkuc3lzdGVtXHJcbiAgICovXHJcbiAgX3N5c3RlbT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIHByZWZlcnJlZCBzeXN0ZW0gaXMgVUNVTSwgYnV0IFNOT01FRCBDVCBjYW4gYWxzbyBiZSB1c2VkIChmb3IgY3VzdG9tYXJ5IHVuaXRzKSBvciBJU08gNDIxNyBmb3IgY3VycmVuY3kuICBUaGUgY29udGV4dCBvZiB1c2UgbWF5IGFkZGl0aW9uYWxseSByZXF1aXJlIGEgY29kZSBmcm9tIGEgcGFydGljdWxhciBzeXN0ZW0uXHJcbiAgICovXHJcbiAgY29kZT86IGZoaXIuRmhpckNvZGV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUXVhbnRpdHkuY29kZVxyXG4gICAqL1xyXG4gIF9jb2RlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgbWVhc3VyZWQgYW1vdW50IChvciBhbiBhbW91bnQgdGhhdCBjYW4gcG90ZW50aWFsbHkgYmUgbWVhc3VyZWQpLiBOb3RlIHRoYXQgbWVhc3VyZWQgYW1vdW50cyBpbmNsdWRlIGFtb3VudHMgdGhhdCBhcmUgbm90IHByZWNpc2VseSBxdWFudGlmaWVkLCBpbmNsdWRpbmcgYW1vdW50cyBpbnZvbHZpbmcgYXJiaXRyYXJ5IHVuaXRzIGFuZCBmbG9hdGluZyBjdXJyZW5jaWVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFF1YW50aXR5IGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdRdWFudGl0eSc7XHJcbiAgLyoqXHJcbiAgICogVGhlIGltcGxpY2l0IHByZWNpc2lvbiBpbiB0aGUgdmFsdWUgc2hvdWxkIGFsd2F5cyBiZSBob25vcmVkLiBNb25ldGFyeSB2YWx1ZXMgaGF2ZSB0aGVpciBvd24gcnVsZXMgZm9yIGhhbmRsaW5nIHByZWNpc2lvbiAocmVmZXIgdG8gc3RhbmRhcmQgYWNjb3VudGluZyB0ZXh0IGJvb2tzKS5cclxuICAgKi9cclxuICBwdWJsaWMgdmFsdWU/OiBmaGlyLkZoaXJEZWNpbWFsfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBIb3cgdGhlIHZhbHVlIHNob3VsZCBiZSB1bmRlcnN0b29kIGFuZCByZXByZXNlbnRlZCAtIHdoZXRoZXIgdGhlIGFjdHVhbCB2YWx1ZSBpcyBncmVhdGVyIG9yIGxlc3MgdGhhbiB0aGUgc3RhdGVkIHZhbHVlIGR1ZSB0byBtZWFzdXJlbWVudCBpc3N1ZXM7IGUuZy4gaWYgdGhlIGNvbXBhcmF0b3IgaXMgXCImbHQ7XCIgLCB0aGVuIHRoZSByZWFsIHZhbHVlIGlzICZsdDsgc3RhdGVkIHZhbHVlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb21wYXJhdG9yPzogZmhpci5GaGlyQ29kZTxRdWFudGl0eUNvbXBhcmF0b3JDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgaHVtYW4tcmVhZGFibGUgZm9ybSBvZiB0aGUgdW5pdC5cclxuICAgKi9cclxuICBwdWJsaWMgdW5pdD86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGlkZW50aWZpY2F0aW9uIG9mIHRoZSBzeXN0ZW0gdGhhdCBwcm92aWRlcyB0aGUgY29kZWQgZm9ybSBvZiB0aGUgdW5pdC5cclxuICAgKi9cclxuICBwdWJsaWMgc3lzdGVtPzogZmhpci5GaGlyVXJpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcHJlZmVycmVkIHN5c3RlbSBpcyBVQ1VNLCBidXQgU05PTUVEIENUIGNhbiBhbHNvIGJlIHVzZWQgKGZvciBjdXN0b21hcnkgdW5pdHMpIG9yIElTTyA0MjE3IGZvciBjdXJyZW5jeS4gIFRoZSBjb250ZXh0IG9mIHVzZSBtYXkgYWRkaXRpb25hbGx5IHJlcXVpcmUgYSBjb2RlIGZyb20gYSBwYXJ0aWN1bGFyIHN5c3RlbS5cclxuICAgKi9cclxuICBwdWJsaWMgY29kZT86IGZoaXIuRmhpckNvZGV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFF1YW50aXR5IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8UXVhbnRpdHlBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsndmFsdWUnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuRmhpckRlY2ltYWwoe3ZhbHVlOiBzb3VyY2UudmFsdWV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3ZhbHVlJ10pIHtcclxuICAgICAgaWYgKHRoaXMudmFsdWUpIHsgdGhpcy52YWx1ZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl92YWx1ZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuRmhpckRlY2ltYWwoc291cmNlLl92YWx1ZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckRlY2ltYWxBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NvbXBhcmF0b3InXSkgeyB0aGlzLmNvbXBhcmF0b3IgPSBuZXcgZmhpci5GaGlyQ29kZTxRdWFudGl0eUNvbXBhcmF0b3JDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2UuY29tcGFyYXRvcn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfY29tcGFyYXRvciddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbXBhcmF0b3IpIHsgdGhpcy5jb21wYXJhdG9yLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NvbXBhcmF0b3IhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jb21wYXJhdG9yID0gbmV3IGZoaXIuRmhpckNvZGU8UXVhbnRpdHlDb21wYXJhdG9yQ29kZVR5cGU+KHNvdXJjZS5fY29tcGFyYXRvciBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndW5pdCddKSB7IHRoaXMudW5pdCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UudW5pdH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfdW5pdCddKSB7XHJcbiAgICAgIGlmICh0aGlzLnVuaXQpIHsgdGhpcy51bml0LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3VuaXQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy51bml0ID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX3VuaXQgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3N5c3RlbSddKSB7IHRoaXMuc3lzdGVtID0gbmV3IGZoaXIuRmhpclVyaSh7dmFsdWU6IHNvdXJjZS5zeXN0ZW19KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N5c3RlbSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN5c3RlbSkgeyB0aGlzLnN5c3RlbS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zeXN0ZW0hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zeXN0ZW0gPSBuZXcgZmhpci5GaGlyVXJpKHNvdXJjZS5fc3lzdGVtIGFzIFBhcnRpYWw8Zmhpci5GaGlyVXJpQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjb2RlJ10pIHsgdGhpcy5jb2RlID0gbmV3IGZoaXIuRmhpckNvZGUoe3ZhbHVlOiBzb3VyY2UuY29kZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfY29kZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvZGUpIHsgdGhpcy5jb2RlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NvZGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jb2RlID0gbmV3IGZoaXIuRmhpckNvZGUoc291cmNlLl9jb2RlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBSZXF1aXJlZC1ib3VuZCBWYWx1ZSBTZXQgZm9yIGNvbXBhcmF0b3IgKFF1YW50aXR5LmNvbXBhcmF0b3IpXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgY29tcGFyYXRvclJlcXVpcmVkQ29kZXMoKSB7XHJcbiAgICByZXR1cm4gUXVhbnRpdHlDb21wYXJhdG9yQ29kZXM7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKTtcclxuICAgIGlmIChleHByZXNzaW9uID09PSAnJykgeyBleHByZXNzaW9uID0gJ1F1YW50aXR5JyB9XHJcbiAgICBpZiAodGhpc1tcInZhbHVlXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMudmFsdWUuZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbisnLnZhbHVlJykpOyB9XHJcbiAgICBpZiAodGhpc1snY29tcGFyYXRvciddICYmICghT2JqZWN0LnZhbHVlcyhRdWFudGl0eUNvbXBhcmF0b3JDb2RlcykuaW5jbHVkZXModGhpcy5jb21wYXJhdG9yLnZhbHVlIGFzIGFueSkpKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdjb2RlLWludmFsaWQnLCBkaWFnbm9zdGljczogJ0ludmFsaWQgY29kZSBwcm9wZXJ0eSBjb21wYXJhdG9yIGZoaXI6IFF1YW50aXR5LmNvbXBhcmF0b3I6Y29kZSBSZXF1aXJlZCBiaW5kaW5nIHRvOiBRdWFudGl0eUNvbXBhcmF0b3InLCBleHByZXNzaW9uOiBbZXhwcmVzc2lvbl0gfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1tcImNvbXBhcmF0b3JcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5jb21wYXJhdG9yLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy5jb21wYXJhdG9yJykpOyB9XHJcbiAgICBpZiAodGhpc1tcInVuaXRcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy51bml0LmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy51bml0JykpOyB9XHJcbiAgICBpZiAodGhpc1tcInN5c3RlbVwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLnN5c3RlbS5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKycuc3lzdGVtJykpOyB9XHJcbiAgICBpZiAodGhpc1tcImNvZGVcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5jb2RlLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy5jb2RlJykpOyB9XHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=