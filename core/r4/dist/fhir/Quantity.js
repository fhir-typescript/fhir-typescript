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
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Quantity';
        }
        iss.push(...this.vOS('value', exp));
        iss.push(...this.vOSV('comparator', exp, 'QuantityComparator', QuantityComparatorVsValidation, 'r'));
        iss.push(...this.vOS('unit', exp));
        iss.push(...this.vOS('system', exp));
        iss.push(...this.vOS('code', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Quantity._fts_dataType = 'Quantity';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVhbnRpdHkuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1F1YW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDZCQUE2QjtBQUU3QixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUluQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUErQ3BHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFFBQVMsU0FBUSxJQUFJLENBQUMsV0FBVztJQXlCNUM7O09BRUc7SUFDSCxZQUFZLFNBQStCLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3JGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ2xGLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxNQUFPLENBQUMsQ0FBQzthQUFFO2lCQUNoRTtnQkFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBdUMsQ0FBQyxDQUFDO2FBQUU7U0FDNUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUE2QixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztTQUFFO1FB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SUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBbkVEOztHQUVHO0FBQzZCLHNCQUFhLEdBQVUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBRdWFudGl0eVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUXVhbnRpdHlDb21wYXJhdG9yQ29kZXMsICBRdWFudGl0eUNvbXBhcmF0b3JDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUXVhbnRpdHlDb21wYXJhdG9yQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFF1YW50aXR5Q29tcGFyYXRvclZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUXVhbnRpdHlDb21wYXJhdG9yVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFF1YW50aXR5IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFF1YW50aXR5QXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgaW1wbGljaXQgcHJlY2lzaW9uIGluIHRoZSB2YWx1ZSBzaG91bGQgYWx3YXlzIGJlIGhvbm9yZWQuIE1vbmV0YXJ5IHZhbHVlcyBoYXZlIHRoZWlyIG93biBydWxlcyBmb3IgaGFuZGxpbmcgcHJlY2lzaW9uIChyZWZlciB0byBzdGFuZGFyZCBhY2NvdW50aW5nIHRleHQgYm9va3MpLlxyXG4gICAqL1xyXG4gIHZhbHVlPzogZmhpci5GaGlyRGVjaW1hbHxudW1iZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBRdWFudGl0eS52YWx1ZVxyXG4gICAqL1xyXG4gIF92YWx1ZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogSG93IHRoZSB2YWx1ZSBzaG91bGQgYmUgdW5kZXJzdG9vZCBhbmQgcmVwcmVzZW50ZWQgLSB3aGV0aGVyIHRoZSBhY3R1YWwgdmFsdWUgaXMgZ3JlYXRlciBvciBsZXNzIHRoYW4gdGhlIHN0YXRlZCB2YWx1ZSBkdWUgdG8gbWVhc3VyZW1lbnQgaXNzdWVzOyBlLmcuIGlmIHRoZSBjb21wYXJhdG9yIGlzIFwiJmx0O1wiICwgdGhlbiB0aGUgcmVhbCB2YWx1ZSBpcyAmbHQ7IHN0YXRlZCB2YWx1ZS5cclxuICAgKi9cclxuICBjb21wYXJhdG9yPzogZmhpci5GaGlyQ29kZTxRdWFudGl0eUNvbXBhcmF0b3JDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUXVhbnRpdHkuY29tcGFyYXRvclxyXG4gICAqL1xyXG4gIF9jb21wYXJhdG9yPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIGh1bWFuLXJlYWRhYmxlIGZvcm0gb2YgdGhlIHVuaXQuXHJcbiAgICovXHJcbiAgdW5pdD86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBRdWFudGl0eS51bml0XHJcbiAgICovXHJcbiAgX3VuaXQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpZGVudGlmaWNhdGlvbiBvZiB0aGUgc3lzdGVtIHRoYXQgcHJvdmlkZXMgdGhlIGNvZGVkIGZvcm0gb2YgdGhlIHVuaXQuXHJcbiAgICovXHJcbiAgc3lzdGVtPzogZmhpci5GaGlyVXJpfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFF1YW50aXR5LnN5c3RlbVxyXG4gICAqL1xyXG4gIF9zeXN0ZW0/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwcmVmZXJyZWQgc3lzdGVtIGlzIFVDVU0sIGJ1dCBTTk9NRUQgQ1QgY2FuIGFsc28gYmUgdXNlZCAoZm9yIGN1c3RvbWFyeSB1bml0cykgb3IgSVNPIDQyMTcgZm9yIGN1cnJlbmN5LiAgVGhlIGNvbnRleHQgb2YgdXNlIG1heSBhZGRpdGlvbmFsbHkgcmVxdWlyZSBhIGNvZGUgZnJvbSBhIHBhcnRpY3VsYXIgc3lzdGVtLlxyXG4gICAqL1xyXG4gIGNvZGU/OiBmaGlyLkZoaXJDb2RlfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFF1YW50aXR5LmNvZGVcclxuICAgKi9cclxuICBfY29kZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIG1lYXN1cmVkIGFtb3VudCAob3IgYW4gYW1vdW50IHRoYXQgY2FuIHBvdGVudGlhbGx5IGJlIG1lYXN1cmVkKS4gTm90ZSB0aGF0IG1lYXN1cmVkIGFtb3VudHMgaW5jbHVkZSBhbW91bnRzIHRoYXQgYXJlIG5vdCBwcmVjaXNlbHkgcXVhbnRpZmllZCwgaW5jbHVkaW5nIGFtb3VudHMgaW52b2x2aW5nIGFyYml0cmFyeSB1bml0cyBhbmQgZmxvYXRpbmcgY3VycmVuY2llcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBRdWFudGl0eSBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUXVhbnRpdHknO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpbXBsaWNpdCBwcmVjaXNpb24gaW4gdGhlIHZhbHVlIHNob3VsZCBhbHdheXMgYmUgaG9ub3JlZC4gTW9uZXRhcnkgdmFsdWVzIGhhdmUgdGhlaXIgb3duIHJ1bGVzIGZvciBoYW5kbGluZyBwcmVjaXNpb24gKHJlZmVyIHRvIHN0YW5kYXJkIGFjY291bnRpbmcgdGV4dCBib29rcykuXHJcbiAgICovXHJcbiAgcHVibGljIHZhbHVlPzogZmhpci5GaGlyRGVjaW1hbHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSG93IHRoZSB2YWx1ZSBzaG91bGQgYmUgdW5kZXJzdG9vZCBhbmQgcmVwcmVzZW50ZWQgLSB3aGV0aGVyIHRoZSBhY3R1YWwgdmFsdWUgaXMgZ3JlYXRlciBvciBsZXNzIHRoYW4gdGhlIHN0YXRlZCB2YWx1ZSBkdWUgdG8gbWVhc3VyZW1lbnQgaXNzdWVzOyBlLmcuIGlmIHRoZSBjb21wYXJhdG9yIGlzIFwiJmx0O1wiICwgdGhlbiB0aGUgcmVhbCB2YWx1ZSBpcyAmbHQ7IHN0YXRlZCB2YWx1ZS5cclxuICAgKi9cclxuICBwdWJsaWMgY29tcGFyYXRvcj86IGZoaXIuRmhpckNvZGU8UXVhbnRpdHlDb21wYXJhdG9yQ29kZVR5cGU+fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGh1bWFuLXJlYWRhYmxlIGZvcm0gb2YgdGhlIHVuaXQuXHJcbiAgICovXHJcbiAgcHVibGljIHVuaXQ/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpZGVudGlmaWNhdGlvbiBvZiB0aGUgc3lzdGVtIHRoYXQgcHJvdmlkZXMgdGhlIGNvZGVkIGZvcm0gb2YgdGhlIHVuaXQuXHJcbiAgICovXHJcbiAgcHVibGljIHN5c3RlbT86IGZoaXIuRmhpclVyaXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHByZWZlcnJlZCBzeXN0ZW0gaXMgVUNVTSwgYnV0IFNOT01FRCBDVCBjYW4gYWxzbyBiZSB1c2VkIChmb3IgY3VzdG9tYXJ5IHVuaXRzKSBvciBJU08gNDIxNyBmb3IgY3VycmVuY3kuICBUaGUgY29udGV4dCBvZiB1c2UgbWF5IGFkZGl0aW9uYWxseSByZXF1aXJlIGEgY29kZSBmcm9tIGEgcGFydGljdWxhciBzeXN0ZW0uXHJcbiAgICovXHJcbiAgcHVibGljIGNvZGU/OiBmaGlyLkZoaXJDb2RlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBRdWFudGl0eSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFF1YW50aXR5QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3ZhbHVlJ10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJEZWNpbWFsKHt2YWx1ZTogc291cmNlLnZhbHVlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ192YWx1ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbHVlKSB7IHRoaXMudmFsdWUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdmFsdWUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJEZWNpbWFsKHNvdXJjZS5fdmFsdWUgYXMgUGFydGlhbDxmaGlyLkZoaXJEZWNpbWFsQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjb21wYXJhdG9yJ10pIHsgdGhpcy5jb21wYXJhdG9yID0gbmV3IGZoaXIuRmhpckNvZGU8UXVhbnRpdHlDb21wYXJhdG9yQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLmNvbXBhcmF0b3J9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NvbXBhcmF0b3InXSkge1xyXG4gICAgICBpZiAodGhpcy5jb21wYXJhdG9yKSB7IHRoaXMuY29tcGFyYXRvci5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jb21wYXJhdG9yISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY29tcGFyYXRvciA9IG5ldyBmaGlyLkZoaXJDb2RlPFF1YW50aXR5Q29tcGFyYXRvckNvZGVUeXBlPihzb3VyY2UuX2NvbXBhcmF0b3IgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3VuaXQnXSkgeyB0aGlzLnVuaXQgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnVuaXR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3VuaXQnXSkge1xyXG4gICAgICBpZiAodGhpcy51bml0KSB7IHRoaXMudW5pdC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl91bml0ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudW5pdCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl91bml0IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydzeXN0ZW0nXSkgeyB0aGlzLnN5c3RlbSA9IG5ldyBmaGlyLkZoaXJVcmkoe3ZhbHVlOiBzb3VyY2Uuc3lzdGVtfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zeXN0ZW0nXSkge1xyXG4gICAgICBpZiAodGhpcy5zeXN0ZW0pIHsgdGhpcy5zeXN0ZW0uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3lzdGVtISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3lzdGVtID0gbmV3IGZoaXIuRmhpclVyaShzb3VyY2UuX3N5c3RlbSBhcyBQYXJ0aWFsPGZoaXIuRmhpclVyaUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnY29kZSddKSB7IHRoaXMuY29kZSA9IG5ldyBmaGlyLkZoaXJDb2RlKHt2YWx1ZTogc291cmNlLmNvZGV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NvZGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5jb2RlKSB7IHRoaXMuY29kZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jb2RlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY29kZSA9IG5ldyBmaGlyLkZoaXJDb2RlKHNvdXJjZS5fY29kZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGVBcmdzPik7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdRdWFudGl0eScgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3ZhbHVlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TVignY29tcGFyYXRvcicsZXhwLCdRdWFudGl0eUNvbXBhcmF0b3InLFF1YW50aXR5Q29tcGFyYXRvclZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd1bml0JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdzeXN0ZW0nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2NvZGUnLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19