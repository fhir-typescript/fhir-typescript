// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Identifier
import * as fhir from '../fhir.js';
// @ts-ignore
import { IdentifierUseVsValidation } from '../fhirValueSets/IdentifierUseVsValidation.js';
/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export class Identifier extends fhir.FhirElement {
    /**
     * Default constructor for Identifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['use'] !== undefined) {
            this.use = new fhir.FhirCode({ value: source.use }, options);
        }
        if (source['_use']) {
            if (this.use) {
                this.use.addExtendedProperties(source._use);
            }
            else {
                this.use = new fhir.FhirCode(source._use, options);
            }
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type, options);
        }
        if (source['system'] !== undefined) {
            this.system = new fhir.FhirUri({ value: source.system }, options);
        }
        if (source['_system']) {
            if (this.system) {
                this.system.addExtendedProperties(source._system);
            }
            else {
                this.system = new fhir.FhirUri(source._system, options);
            }
        }
        if (source['value'] !== undefined) {
            this.value = new fhir.FhirString({ value: source.value }, options);
        }
        if (source['_value']) {
            if (this.value) {
                this.value.addExtendedProperties(source._value);
            }
            else {
                this.value = new fhir.FhirString(source._value, options);
            }
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period, options);
        }
        if (source['assigner']) {
            this.assigner = new fhir.Reference(source.assigner, options);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Identifier';
        }
        iss.push(...this.vOSV('use', exp, 'IdentifierUse', IdentifierUseVsValidation, 'r'));
        iss.push(...this.vOS('type', exp));
        iss.push(...this.vOS('system', exp));
        iss.push(...this.vOS('value', exp));
        iss.push(...this.vOS('period', exp));
        iss.push(...this.vOS('assigner', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Identifier._fts_dataType = 'Identifier';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWRlbnRpZmllci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvSWRlbnRpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBK0MxRjs7R0FFRztBQUNILE1BQU0sT0FBTyxVQUFXLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUE2QjlDOztPQUVHO0lBQ0gsWUFBWSxTQUFpQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUN2RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUF3QixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUN2SCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsSUFBSyxDQUFDLENBQUM7YUFBRTtpQkFDMUQ7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQXdCLE1BQU0sQ0FBQyxJQUE4QixFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQUU7U0FDOUc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVB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Qix3QkFBYSxHQUFVLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IElkZW50aWZpZXJcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IElkZW50aWZpZXJVc2VDb2RlcywgIElkZW50aWZpZXJVc2VDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvSWRlbnRpZmllclVzZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJZGVudGlmaWVyVXNlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9JZGVudGlmaWVyVXNlVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJZGVudGlmaWVyVHlwZUNvZGVzLCAgSWRlbnRpZmllclR5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvSWRlbnRpZmllclR5cGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgSWRlbnRpZmllclR5cGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0lkZW50aWZpZXJUeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIElkZW50aWZpZXIgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSWRlbnRpZmllckFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogQXBwbGljYXRpb25zIGNhbiBhc3N1bWUgdGhhdCBhbiBpZGVudGlmaWVyIGlzIHBlcm1hbmVudCB1bmxlc3MgaXQgZXhwbGljaXRseSBzYXlzIHRoYXQgaXQgaXMgdGVtcG9yYXJ5LlxyXG4gICAqL1xyXG4gIHVzZT86IGZoaXIuRmhpckNvZGU8SWRlbnRpZmllclVzZUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBJZGVudGlmaWVyLnVzZVxyXG4gICAqL1xyXG4gIF91c2U/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBkZWFscyBvbmx5IHdpdGggZ2VuZXJhbCBjYXRlZ29yaWVzIG9mIGlkZW50aWZpZXJzLiAgSXQgU0hPVUxEIG5vdCBiZSB1c2VkIGZvciBjb2RlcyB0aGF0IGNvcnJlc3BvbmQgMS4uMSB3aXRoIHRoZSBJZGVudGlmaWVyLnN5c3RlbS4gU29tZSBpZGVudGlmaWVycyBtYXkgZmFsbCBpbnRvIG11bHRpcGxlIGNhdGVnb3JpZXMgZHVlIHRvIGNvbW1vbiB1c2FnZS4gICBXaGVyZSB0aGUgc3lzdGVtIGlzIGtub3duLCBhIHR5cGUgaXMgdW5uZWNlc3NhcnkgYmVjYXVzZSB0aGUgdHlwZSBpcyBhbHdheXMgcGFydCBvZiB0aGUgc3lzdGVtIGRlZmluaXRpb24uIEhvd2V2ZXIgc3lzdGVtcyBvZnRlbiBuZWVkIHRvIGhhbmRsZSBpZGVudGlmaWVycyB3aGVyZSB0aGUgc3lzdGVtIGlzIG5vdCBrbm93bi4gVGhlcmUgaXMgbm90IGEgMToxIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHR5cGUgYW5kIHN5c3RlbSwgc2luY2UgbWFueSBkaWZmZXJlbnQgc3lzdGVtcyBoYXZlIHRoZSBzYW1lIHR5cGUuXHJcbiAgICovXHJcbiAgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllci5zeXN0ZW0gaXMgYWx3YXlzIGNhc2Ugc2Vuc2l0aXZlLlxyXG4gICAqL1xyXG4gIHN5c3RlbT86IGZoaXIuRmhpclVyaXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBJZGVudGlmaWVyLnN5c3RlbVxyXG4gICAqL1xyXG4gIF9zeXN0ZW0/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSB2YWx1ZSBpcyBhIGZ1bGwgVVJJLCB0aGVuIHRoZSBzeXN0ZW0gU0hBTEwgYmUgdXJuOmlldGY6cmZjOjM5ODYuICBUaGUgdmFsdWUncyBwcmltYXJ5IHB1cnBvc2UgaXMgY29tcHV0YXRpb25hbCBtYXBwaW5nLiAgQXMgYSByZXN1bHQsIGl0IG1heSBiZSBub3JtYWxpemVkIGZvciBjb21wYXJpc29uIHB1cnBvc2VzIChlLmcuIHJlbW92aW5nIG5vbi1zaWduaWZpY2FudCB3aGl0ZXNwYWNlLCBkYXNoZXMsIGV0Yy4pICBBIHZhbHVlIGZvcm1hdHRlZCBmb3IgaHVtYW4gZGlzcGxheSBjYW4gYmUgY29udmV5ZWQgdXNpbmcgdGhlIFtSZW5kZXJlZCBWYWx1ZSBleHRlbnNpb25dKGV4dGVuc2lvbi1yZW5kZXJlZC12YWx1ZS5odG1sKS4gSWRlbnRpZmllci52YWx1ZSBpcyB0byBiZSB0cmVhdGVkIGFzIGNhc2Ugc2Vuc2l0aXZlIHVubGVzcyBrbm93bGVkZ2Ugb2YgdGhlIElkZW50aWZpZXIuc3lzdGVtIGFsbG93cyB0aGUgcHJvY2Vzc2VyIHRvIGJlIGNvbmZpZGVudCB0aGF0IG5vbi1jYXNlLXNlbnNpdGl2ZSBwcm9jZXNzaW5nIGlzIHNhZmUuXHJcbiAgICovXHJcbiAgdmFsdWU/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogSWRlbnRpZmllci52YWx1ZVxyXG4gICAqL1xyXG4gIF92YWx1ZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGltZSBwZXJpb2QgZHVyaW5nIHdoaWNoIGlkZW50aWZpZXIgaXMvd2FzIHZhbGlkIGZvciB1c2UuXHJcbiAgICovXHJcbiAgcGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgSWRlbnRpZmllci5hc3NpZ25lciBtYXkgb21pdCB0aGUgLnJlZmVyZW5jZSBlbGVtZW50IGFuZCBvbmx5IGNvbnRhaW4gYSAuZGlzcGxheSBlbGVtZW50IHJlZmxlY3RpbmcgdGhlIG5hbWUgb3Igb3RoZXIgdGV4dHVhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYXNzaWduaW5nIG9yZ2FuaXphdGlvbi5cclxuICAgKi9cclxuICBhc3NpZ25lcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBpZGVudGlmaWVyIC0gaWRlbnRpZmllcyBzb21lIGVudGl0eSB1bmlxdWVseSBhbmQgdW5hbWJpZ3VvdXNseS4gVHlwaWNhbGx5IHRoaXMgaXMgdXNlZCBmb3IgYnVzaW5lc3MgaWRlbnRpZmllcnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllciBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnSWRlbnRpZmllcic7XHJcbiAgLyoqXHJcbiAgICogQXBwbGljYXRpb25zIGNhbiBhc3N1bWUgdGhhdCBhbiBpZGVudGlmaWVyIGlzIHBlcm1hbmVudCB1bmxlc3MgaXQgZXhwbGljaXRseSBzYXlzIHRoYXQgaXQgaXMgdGVtcG9yYXJ5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1c2U/OiBmaGlyLkZoaXJDb2RlPElkZW50aWZpZXJVc2VDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBkZWFscyBvbmx5IHdpdGggZ2VuZXJhbCBjYXRlZ29yaWVzIG9mIGlkZW50aWZpZXJzLiAgSXQgU0hPVUxEIG5vdCBiZSB1c2VkIGZvciBjb2RlcyB0aGF0IGNvcnJlc3BvbmQgMS4uMSB3aXRoIHRoZSBJZGVudGlmaWVyLnN5c3RlbS4gU29tZSBpZGVudGlmaWVycyBtYXkgZmFsbCBpbnRvIG11bHRpcGxlIGNhdGVnb3JpZXMgZHVlIHRvIGNvbW1vbiB1c2FnZS4gICBXaGVyZSB0aGUgc3lzdGVtIGlzIGtub3duLCBhIHR5cGUgaXMgdW5uZWNlc3NhcnkgYmVjYXVzZSB0aGUgdHlwZSBpcyBhbHdheXMgcGFydCBvZiB0aGUgc3lzdGVtIGRlZmluaXRpb24uIEhvd2V2ZXIgc3lzdGVtcyBvZnRlbiBuZWVkIHRvIGhhbmRsZSBpZGVudGlmaWVycyB3aGVyZSB0aGUgc3lzdGVtIGlzIG5vdCBrbm93bi4gVGhlcmUgaXMgbm90IGEgMToxIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHR5cGUgYW5kIHN5c3RlbSwgc2luY2UgbWFueSBkaWZmZXJlbnQgc3lzdGVtcyBoYXZlIHRoZSBzYW1lIHR5cGUuXHJcbiAgICovXHJcbiAgcHVibGljIHR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllci5zeXN0ZW0gaXMgYWx3YXlzIGNhc2Ugc2Vuc2l0aXZlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzeXN0ZW0/OiBmaGlyLkZoaXJVcml8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSB2YWx1ZSBpcyBhIGZ1bGwgVVJJLCB0aGVuIHRoZSBzeXN0ZW0gU0hBTEwgYmUgdXJuOmlldGY6cmZjOjM5ODYuICBUaGUgdmFsdWUncyBwcmltYXJ5IHB1cnBvc2UgaXMgY29tcHV0YXRpb25hbCBtYXBwaW5nLiAgQXMgYSByZXN1bHQsIGl0IG1heSBiZSBub3JtYWxpemVkIGZvciBjb21wYXJpc29uIHB1cnBvc2VzIChlLmcuIHJlbW92aW5nIG5vbi1zaWduaWZpY2FudCB3aGl0ZXNwYWNlLCBkYXNoZXMsIGV0Yy4pICBBIHZhbHVlIGZvcm1hdHRlZCBmb3IgaHVtYW4gZGlzcGxheSBjYW4gYmUgY29udmV5ZWQgdXNpbmcgdGhlIFtSZW5kZXJlZCBWYWx1ZSBleHRlbnNpb25dKGV4dGVuc2lvbi1yZW5kZXJlZC12YWx1ZS5odG1sKS4gSWRlbnRpZmllci52YWx1ZSBpcyB0byBiZSB0cmVhdGVkIGFzIGNhc2Ugc2Vuc2l0aXZlIHVubGVzcyBrbm93bGVkZ2Ugb2YgdGhlIElkZW50aWZpZXIuc3lzdGVtIGFsbG93cyB0aGUgcHJvY2Vzc2VyIHRvIGJlIGNvbmZpZGVudCB0aGF0IG5vbi1jYXNlLXNlbnNpdGl2ZSBwcm9jZXNzaW5nIGlzIHNhZmUuXHJcbiAgICovXHJcbiAgcHVibGljIHZhbHVlPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaW1lIHBlcmlvZCBkdXJpbmcgd2hpY2ggaWRlbnRpZmllciBpcy93YXMgdmFsaWQgZm9yIHVzZS5cclxuICAgKi9cclxuICBwdWJsaWMgcGVyaW9kPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBJZGVudGlmaWVyLmFzc2lnbmVyIG1heSBvbWl0IHRoZSAucmVmZXJlbmNlIGVsZW1lbnQgYW5kIG9ubHkgY29udGFpbiBhIC5kaXNwbGF5IGVsZW1lbnQgcmVmbGVjdGluZyB0aGUgbmFtZSBvciBvdGhlciB0ZXh0dWFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhc3NpZ25pbmcgb3JnYW5pemF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhc3NpZ25lcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBJZGVudGlmaWVyIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8SWRlbnRpZmllckFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyd1c2UnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudXNlID0gbmV3IGZoaXIuRmhpckNvZGU8SWRlbnRpZmllclVzZUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS51c2V9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3VzZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnVzZSkgeyB0aGlzLnVzZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl91c2UhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy51c2UgPSBuZXcgZmhpci5GaGlyQ29kZTxJZGVudGlmaWVyVXNlQ29kZVR5cGU+KHNvdXJjZS5fdXNlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd0eXBlJ10pIHsgdGhpcy50eXBlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS50eXBlLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3lzdGVtJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnN5c3RlbSA9IG5ldyBmaGlyLkZoaXJVcmkoe3ZhbHVlOiBzb3VyY2Uuc3lzdGVtfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zeXN0ZW0nXSkge1xyXG4gICAgICBpZiAodGhpcy5zeXN0ZW0pIHsgdGhpcy5zeXN0ZW0uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3lzdGVtISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3lzdGVtID0gbmV3IGZoaXIuRmhpclVyaShzb3VyY2UuX3N5c3RlbSBhcyBQYXJ0aWFsPGZoaXIuRmhpclVyaUFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndmFsdWUnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnZhbHVlfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ192YWx1ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbHVlKSB7IHRoaXMudmFsdWUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdmFsdWUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl92YWx1ZSBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncGVyaW9kJ10pIHsgdGhpcy5wZXJpb2QgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLnBlcmlvZCwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2Fzc2lnbmVyJ10pIHsgdGhpcy5hc3NpZ25lciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuYXNzaWduZXIsIG9wdGlvbnMpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnSWRlbnRpZmllcicgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1NWKCd1c2UnLGV4cCwnSWRlbnRpZmllclVzZScsSWRlbnRpZmllclVzZVZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd0eXBlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdzeXN0ZW0nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3ZhbHVlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdwZXJpb2QnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2Fzc2lnbmVyJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==