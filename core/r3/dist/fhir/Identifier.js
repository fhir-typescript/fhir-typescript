// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Identifier
import * as fhir from '../fhir.js';
// @ts-ignore
import { IdentifierUseVsValidation } from '../fhirValueSets/IdentifierUseVsValidation.js';
/**
 * A technical identifier - identifies some entity uniquely and unambiguously.
 */
export class Identifier extends fhir.FhirElement {
    /**
     * Default constructor for Identifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['use']) {
            this.use = new fhir.FhirCode({ value: source.use });
        }
        if (source['_use']) {
            if (this.use) {
                this.use.addExtendedProperties(source._use);
            }
            else {
                this.use = new fhir.FhirCode(source._use);
            }
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
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
        if (source['value']) {
            this.value = new fhir.FhirString({ value: source.value });
        }
        if (source['_value']) {
            if (this.value) {
                this.value.addExtendedProperties(source._value);
            }
            else {
                this.value = new fhir.FhirString(source._value);
            }
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['assigner']) {
            this.assigner = new fhir.Reference(source.assigner);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWRlbnRpZmllci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvSWRlbnRpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBZ0QxRjs7R0FFRztBQUNILE1BQU0sT0FBTyxVQUFXLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUE4QjlDOztPQUVHO0lBQ0gsWUFBWSxTQUFpQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUN2RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQXdCLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDaEcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUFFLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLElBQUssQ0FBQyxDQUFDO2FBQUU7aUJBQzFEO2dCQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUF3QixNQUFNLENBQUMsSUFBOEIsQ0FBQyxDQUFDO2FBQUU7U0FDckc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUFFO1FBQzFFLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNqRixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLENBQUM7YUFBRTtpQkFDbkU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQW9DLENBQUMsQ0FBQzthQUFFO1NBQ3RGO1FBQ0QsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ2pGLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxNQUFPLENBQUMsQ0FBQzthQUFFO2lCQUNoRTtnQkFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBc0MsQ0FBQyxDQUFDO2FBQUU7U0FDMUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUFFO1FBQ3ZFLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQUU7SUFDbEYsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksR0FBRyxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLFlBQVksQ0FBQTtTQUFFO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsZUFBZSxFQUFDLHlCQUF5QixFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEYsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQWxFRDs7R0FFRztBQUM2Qix3QkFBYSxHQUFVLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogSWRlbnRpZmllclxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgSWRlbnRpZmllclVzZUNvZGVzLCAgSWRlbnRpZmllclVzZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9JZGVudGlmaWVyVXNlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IElkZW50aWZpZXJVc2VWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0lkZW50aWZpZXJVc2VWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IElkZW50aWZpZXJUeXBlQ29kZXMsICBJZGVudGlmaWVyVHlwZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9JZGVudGlmaWVyVHlwZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJZGVudGlmaWVyVHlwZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvSWRlbnRpZmllclR5cGVWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgSWRlbnRpZmllciB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJZGVudGlmaWVyQXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGlzIGlzIGxhYmVsZWQgYXMgXCJJcyBNb2RpZmllclwiIGJlY2F1c2UgYXBwbGljYXRpb25zIHNob3VsZCBub3QgbWlzdGFrZSBhIHRlbXBvcmFyeSBpZCBmb3IgYSBwZXJtYW5lbnQgb25lLiBBcHBsaWNhdGlvbnMgY2FuIGFzc3VtZSB0aGF0IGFuIGlkZW50aWZpZXIgaXMgcGVybWFuZW50IHVubGVzcyBpdCBleHBsaWNpdGx5IHNheXMgdGhhdCBpdCBpcyB0ZW1wb3JhcnkuXHJcbiAgICovXHJcbiAgdXNlPzogZmhpci5GaGlyQ29kZTxJZGVudGlmaWVyVXNlQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IElkZW50aWZpZXIudXNlXHJcbiAgICovXHJcbiAgX3VzZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGRlYWxzIG9ubHkgd2l0aCBnZW5lcmFsIGNhdGVnb3JpZXMgb2YgaWRlbnRpZmllcnMuICBJdCBTSE9VTEQgbm90IGJlIHVzZWQgZm9yIGNvZGVzIHRoYXQgY29ycmVzcG9uZCAxLi4xIHdpdGggdGhlIElkZW50aWZpZXIuc3lzdGVtLiBTb21lIGlkZW50aWZpZXJzIG1heSBmYWxsIGludG8gbXVsdGlwbGUgY2F0ZWdvcmllcyBkdWUgdG8gY29tbW9uIHVzYWdlLiBcclxuICAgKiBXaGVyZSB0aGUgc3lzdGVtIGlzIGtub3duLCBhIHR5cGUgaXMgdW5uZWNlc3NhcnkgYmVjYXVzZSB0aGUgdHlwZSBpcyBhbHdheXMgcGFydCBvZiB0aGUgc3lzdGVtIGRlZmluaXRpb24uIEhvd2V2ZXIgc3lzdGVtcyBvZnRlbiBuZWVkIHRvIGhhbmRsZSBpZGVudGlmaWVycyB3aGVyZSB0aGUgc3lzdGVtIGlzIG5vdCBrbm93bi4gVGhlcmUgaXMgbm90IGEgMToxIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHR5cGUgYW5kIHN5c3RlbSwgc2luY2UgbWFueSBkaWZmZXJlbnQgc3lzdGVtcyBoYXZlIHRoZSBzYW1lIHR5cGUuXHJcbiAgICovXHJcbiAgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXN0YWJsaXNoZXMgdGhlIG5hbWVzcGFjZSBmb3IgdGhlIHZhbHVlIC0gdGhhdCBpcywgYSBVUkwgdGhhdCBkZXNjcmliZXMgYSBzZXQgdmFsdWVzIHRoYXQgYXJlIHVuaXF1ZS5cclxuICAgKi9cclxuICBzeXN0ZW0/OiBmaGlyLkZoaXJVcml8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogSWRlbnRpZmllci5zeXN0ZW1cclxuICAgKi9cclxuICBfc3lzdGVtPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBJZiB0aGUgdmFsdWUgaXMgYSBmdWxsIFVSSSwgdGhlbiB0aGUgc3lzdGVtIFNIQUxMIGJlIHVybjppZXRmOnJmYzozOTg2LiAgVGhlIHZhbHVlJ3MgcHJpbWFyeSBwdXJwb3NlIGlzIGNvbXB1dGF0aW9uYWwgbWFwcGluZy4gIEFzIGEgcmVzdWx0LCBpdCBtYXkgYmUgbm9ybWFsaXplZCBmb3IgY29tcGFyaXNvbiBwdXJwb3NlcyAoZS5nLiByZW1vdmluZyBub24tc2lnbmlmaWNhbnQgd2hpdGVzcGFjZSwgZGFzaGVzLCBldGMuKSAgQSB2YWx1ZSBmb3JtYXR0ZWQgZm9yIGh1bWFuIGRpc3BsYXkgY2FuIGJlIGNvbnZleWVkIHVzaW5nIHRoZSBbUmVuZGVyZWQgVmFsdWUgZXh0ZW5zaW9uXShleHRlbnNpb24tcmVuZGVyZWQtdmFsdWUuaHRtbCkuXHJcbiAgICovXHJcbiAgdmFsdWU/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogSWRlbnRpZmllci52YWx1ZVxyXG4gICAqL1xyXG4gIF92YWx1ZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGltZSBwZXJpb2QgZHVyaW5nIHdoaWNoIGlkZW50aWZpZXIgaXMvd2FzIHZhbGlkIGZvciB1c2UuXHJcbiAgICovXHJcbiAgcGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgSWRlbnRpZmllci5hc3NpZ25lciBtYXkgb21pdCB0aGUgLnJlZmVyZW5jZSBlbGVtZW50IGFuZCBvbmx5IGNvbnRhaW4gYSAuZGlzcGxheSBlbGVtZW50IHJlZmxlY3RpbmcgdGhlIG5hbWUgb3Igb3RoZXIgdGV4dHVhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYXNzaWduaW5nIG9yZ2FuaXphdGlvbi5cclxuICAgKi9cclxuICBhc3NpZ25lcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHRlY2huaWNhbCBpZGVudGlmaWVyIC0gaWRlbnRpZmllcyBzb21lIGVudGl0eSB1bmlxdWVseSBhbmQgdW5hbWJpZ3VvdXNseS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdJZGVudGlmaWVyJztcclxuICAvKipcclxuICAgKiBUaGlzIGlzIGxhYmVsZWQgYXMgXCJJcyBNb2RpZmllclwiIGJlY2F1c2UgYXBwbGljYXRpb25zIHNob3VsZCBub3QgbWlzdGFrZSBhIHRlbXBvcmFyeSBpZCBmb3IgYSBwZXJtYW5lbnQgb25lLiBBcHBsaWNhdGlvbnMgY2FuIGFzc3VtZSB0aGF0IGFuIGlkZW50aWZpZXIgaXMgcGVybWFuZW50IHVubGVzcyBpdCBleHBsaWNpdGx5IHNheXMgdGhhdCBpdCBpcyB0ZW1wb3JhcnkuXHJcbiAgICovXHJcbiAgcHVibGljIHVzZT86IGZoaXIuRmhpckNvZGU8SWRlbnRpZmllclVzZUNvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGRlYWxzIG9ubHkgd2l0aCBnZW5lcmFsIGNhdGVnb3JpZXMgb2YgaWRlbnRpZmllcnMuICBJdCBTSE9VTEQgbm90IGJlIHVzZWQgZm9yIGNvZGVzIHRoYXQgY29ycmVzcG9uZCAxLi4xIHdpdGggdGhlIElkZW50aWZpZXIuc3lzdGVtLiBTb21lIGlkZW50aWZpZXJzIG1heSBmYWxsIGludG8gbXVsdGlwbGUgY2F0ZWdvcmllcyBkdWUgdG8gY29tbW9uIHVzYWdlLiBcclxuICAgKiBXaGVyZSB0aGUgc3lzdGVtIGlzIGtub3duLCBhIHR5cGUgaXMgdW5uZWNlc3NhcnkgYmVjYXVzZSB0aGUgdHlwZSBpcyBhbHdheXMgcGFydCBvZiB0aGUgc3lzdGVtIGRlZmluaXRpb24uIEhvd2V2ZXIgc3lzdGVtcyBvZnRlbiBuZWVkIHRvIGhhbmRsZSBpZGVudGlmaWVycyB3aGVyZSB0aGUgc3lzdGVtIGlzIG5vdCBrbm93bi4gVGhlcmUgaXMgbm90IGEgMToxIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHR5cGUgYW5kIHN5c3RlbSwgc2luY2UgbWFueSBkaWZmZXJlbnQgc3lzdGVtcyBoYXZlIHRoZSBzYW1lIHR5cGUuXHJcbiAgICovXHJcbiAgcHVibGljIHR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXN0YWJsaXNoZXMgdGhlIG5hbWVzcGFjZSBmb3IgdGhlIHZhbHVlIC0gdGhhdCBpcywgYSBVUkwgdGhhdCBkZXNjcmliZXMgYSBzZXQgdmFsdWVzIHRoYXQgYXJlIHVuaXF1ZS5cclxuICAgKi9cclxuICBwdWJsaWMgc3lzdGVtPzogZmhpci5GaGlyVXJpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiB0aGUgdmFsdWUgaXMgYSBmdWxsIFVSSSwgdGhlbiB0aGUgc3lzdGVtIFNIQUxMIGJlIHVybjppZXRmOnJmYzozOTg2LiAgVGhlIHZhbHVlJ3MgcHJpbWFyeSBwdXJwb3NlIGlzIGNvbXB1dGF0aW9uYWwgbWFwcGluZy4gIEFzIGEgcmVzdWx0LCBpdCBtYXkgYmUgbm9ybWFsaXplZCBmb3IgY29tcGFyaXNvbiBwdXJwb3NlcyAoZS5nLiByZW1vdmluZyBub24tc2lnbmlmaWNhbnQgd2hpdGVzcGFjZSwgZGFzaGVzLCBldGMuKSAgQSB2YWx1ZSBmb3JtYXR0ZWQgZm9yIGh1bWFuIGRpc3BsYXkgY2FuIGJlIGNvbnZleWVkIHVzaW5nIHRoZSBbUmVuZGVyZWQgVmFsdWUgZXh0ZW5zaW9uXShleHRlbnNpb24tcmVuZGVyZWQtdmFsdWUuaHRtbCkuXHJcbiAgICovXHJcbiAgcHVibGljIHZhbHVlPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaW1lIHBlcmlvZCBkdXJpbmcgd2hpY2ggaWRlbnRpZmllciBpcy93YXMgdmFsaWQgZm9yIHVzZS5cclxuICAgKi9cclxuICBwdWJsaWMgcGVyaW9kPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBJZGVudGlmaWVyLmFzc2lnbmVyIG1heSBvbWl0IHRoZSAucmVmZXJlbmNlIGVsZW1lbnQgYW5kIG9ubHkgY29udGFpbiBhIC5kaXNwbGF5IGVsZW1lbnQgcmVmbGVjdGluZyB0aGUgbmFtZSBvciBvdGhlciB0ZXh0dWFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhc3NpZ25pbmcgb3JnYW5pemF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhc3NpZ25lcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBJZGVudGlmaWVyIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8SWRlbnRpZmllckFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyd1c2UnXSkgeyB0aGlzLnVzZSA9IG5ldyBmaGlyLkZoaXJDb2RlPElkZW50aWZpZXJVc2VDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2UudXNlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ191c2UnXSkge1xyXG4gICAgICBpZiAodGhpcy51c2UpIHsgdGhpcy51c2UuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdXNlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudXNlID0gbmV3IGZoaXIuRmhpckNvZGU8SWRlbnRpZmllclVzZUNvZGVUeXBlPihzb3VyY2UuX3VzZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndHlwZSddKSB7IHRoaXMudHlwZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UudHlwZSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N5c3RlbSddKSB7IHRoaXMuc3lzdGVtID0gbmV3IGZoaXIuRmhpclVyaSh7dmFsdWU6IHNvdXJjZS5zeXN0ZW19KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N5c3RlbSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN5c3RlbSkgeyB0aGlzLnN5c3RlbS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zeXN0ZW0hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zeXN0ZW0gPSBuZXcgZmhpci5GaGlyVXJpKHNvdXJjZS5fc3lzdGVtIGFzIFBhcnRpYWw8Zmhpci5GaGlyVXJpQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd2YWx1ZSddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnZhbHVlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ192YWx1ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbHVlKSB7IHRoaXMudmFsdWUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdmFsdWUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl92YWx1ZSBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncGVyaW9kJ10pIHsgdGhpcy5wZXJpb2QgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLnBlcmlvZCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2Fzc2lnbmVyJ10pIHsgdGhpcy5hc3NpZ25lciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuYXNzaWduZXIpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnSWRlbnRpZmllcicgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1NWKCd1c2UnLGV4cCwnSWRlbnRpZmllclVzZScsSWRlbnRpZmllclVzZVZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd0eXBlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdzeXN0ZW0nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3ZhbHVlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdwZXJpb2QnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2Fzc2lnbmVyJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==