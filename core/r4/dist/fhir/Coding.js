// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Coding
import * as fhir from '../fhir.js';
/**
 * A reference to a code defined by a terminology system.
 */
export class Coding extends fhir.FhirElement {
    /**
     * Default constructor for Coding - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
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
        if (source['version'] !== undefined) {
            this.version = new fhir.FhirString({ value: source.version }, options);
        }
        if (source['_version']) {
            if (this.version) {
                this.version.addExtendedProperties(source._version);
            }
            else {
                this.version = new fhir.FhirString(source._version, options);
            }
        }
        if (source['code'] !== undefined) {
            this.code = new fhir.FhirCode({ value: source.code }, options);
        }
        if (source['_code']) {
            if (this.code) {
                this.code.addExtendedProperties(source._code);
            }
            else {
                this.code = new fhir.FhirCode(source._code, options);
            }
        }
        if (source['display'] !== undefined) {
            this.display = new fhir.FhirString({ value: source.display }, options);
        }
        if (source['_display']) {
            if (this.display) {
                this.display.addExtendedProperties(source._display);
            }
            else {
                this.display = new fhir.FhirString(source._display, options);
            }
        }
        if (source['userSelected'] !== undefined) {
            this.userSelected = new fhir.FhirBoolean({ value: source.userSelected }, options);
        }
        if (source['_userSelected']) {
            if (this.userSelected) {
                this.userSelected.addExtendedProperties(source._userSelected);
            }
            else {
                this.userSelected = new fhir.FhirBoolean(source._userSelected, options);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Coding';
        }
        iss.push(...this.vOS('system', exp));
        iss.push(...this.vOS('version', exp));
        iss.push(...this.vOS('code', exp));
        iss.push(...this.vOS('display', exp));
        iss.push(...this.vOS('userSelected', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Coding._fts_dataType = 'Coding';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29kaW5nLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9Db2RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsMkJBQTJCO0FBRTNCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBZ0RuQzs7R0FFRztBQUNILE1BQU0sT0FBTyxNQUFPLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUF5QjFDOztPQUVHO0lBQ0gsWUFBWSxTQUE2QixFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNuRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQ3hHLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxPQUFRLENBQUMsQ0FBQzthQUFFO2lCQUNuRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBb0MsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1NBQy9GO1FBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDOUcsSUFBSSxN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QUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQW5FRDs7R0FFRztBQUM2QixvQkFBYSxHQUFVLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogQ29kaW5nXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIENvZGluZyB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDb2RpbmdBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBVUkkgbWF5IGJlIGFuIE9JRCAodXJuOm9pZDouLi4pIG9yIGEgVVVJRCAodXJuOnV1aWQ6Li4uKS4gIE9JRHMgYW5kIFVVSURzIFNIQUxMIGJlIHJlZmVyZW5jZXMgdG8gdGhlIEhMNyBPSUQgcmVnaXN0cnkuIE90aGVyd2lzZSwgdGhlIFVSSSBzaG91bGQgY29tZSBmcm9tIEhMNydzIGxpc3Qgb2YgRkhJUiBkZWZpbmVkIHNwZWNpYWwgVVJJcyBvciBpdCBzaG91bGQgcmVmZXJlbmNlIHRvIHNvbWUgZGVmaW5pdGlvbiB0aGF0IGVzdGFibGlzaGVzIHRoZSBzeXN0ZW0gY2xlYXJseSBhbmQgdW5hbWJpZ3VvdXNseS5cclxuICAgKi9cclxuICBzeXN0ZW0/OiBmaGlyLkZoaXJVcml8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29kaW5nLnN5c3RlbVxyXG4gICAqL1xyXG4gIF9zeXN0ZW0/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFdoZXJlIHRoZSB0ZXJtaW5vbG9neSBkb2VzIG5vdCBjbGVhcmx5IGRlZmluZSB3aGF0IHN0cmluZyBzaG91bGQgYmUgdXNlZCB0byBpZGVudGlmeSBjb2RlIHN5c3RlbSB2ZXJzaW9ucywgdGhlIHJlY29tbWVuZGF0aW9uIGlzIHRvIHVzZSB0aGUgZGF0ZSAoZXhwcmVzc2VkIGluIEZISVIgZGF0ZSBmb3JtYXQpIG9uIHdoaWNoIHRoYXQgdmVyc2lvbiB3YXMgb2ZmaWNpYWxseSBwdWJsaXNoZWQgYXMgdGhlIHZlcnNpb24gZGF0ZS5cclxuICAgKi9cclxuICB2ZXJzaW9uPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvZGluZy52ZXJzaW9uXHJcbiAgICovXHJcbiAgX3ZlcnNpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEEgc3ltYm9sIGluIHN5bnRheCBkZWZpbmVkIGJ5IHRoZSBzeXN0ZW0uIFRoZSBzeW1ib2wgbWF5IGJlIGEgcHJlZGVmaW5lZCBjb2RlIG9yIGFuIGV4cHJlc3Npb24gaW4gYSBzeW50YXggZGVmaW5lZCBieSB0aGUgY29kaW5nIHN5c3RlbSAoZS5nLiBwb3N0LWNvb3JkaW5hdGlvbikuXHJcbiAgICovXHJcbiAgY29kZT86IGZoaXIuRmhpckNvZGV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29kaW5nLmNvZGVcclxuICAgKi9cclxuICBfY29kZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWVhbmluZyBvZiB0aGUgY29kZSBpbiB0aGUgc3lzdGVtLCBmb2xsb3dpbmcgdGhlIHJ1bGVzIG9mIHRoZSBzeXN0ZW0uXHJcbiAgICovXHJcbiAgZGlzcGxheT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDb2RpbmcuZGlzcGxheVxyXG4gICAqL1xyXG4gIF9kaXNwbGF5PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBbW9uZ3N0IGEgc2V0IG9mIGFsdGVybmF0aXZlcywgYSBkaXJlY3RseSBjaG9zZW4gY29kZSBpcyB0aGUgbW9zdCBhcHByb3ByaWF0ZSBzdGFydGluZyBwb2ludCBmb3IgbmV3IHRyYW5zbGF0aW9ucy4gVGhlcmUgaXMgc29tZSBhbWJpZ3VpdHkgYWJvdXQgd2hhdCBleGFjdGx5ICdkaXJlY3RseSBjaG9zZW4nIGltcGxpZXMsIGFuZCB0cmFkaW5nIHBhcnRuZXIgYWdyZWVtZW50IG1heSBiZSBuZWVkZWQgdG8gY2xhcmlmeSB0aGUgdXNlIG9mIHRoaXMgZWxlbWVudCBhbmQgaXRzIGNvbnNlcXVlbmNlcyBtb3JlIGNvbXBsZXRlbHkuXHJcbiAgICovXHJcbiAgdXNlclNlbGVjdGVkPzogZmhpci5GaGlyQm9vbGVhbnxib29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29kaW5nLnVzZXJTZWxlY3RlZFxyXG4gICAqL1xyXG4gIF91c2VyU2VsZWN0ZWQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQSByZWZlcmVuY2UgdG8gYSBjb2RlIGRlZmluZWQgYnkgYSB0ZXJtaW5vbG9neSBzeXN0ZW0uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29kaW5nIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdDb2RpbmcnO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBVUkkgbWF5IGJlIGFuIE9JRCAodXJuOm9pZDouLi4pIG9yIGEgVVVJRCAodXJuOnV1aWQ6Li4uKS4gIE9JRHMgYW5kIFVVSURzIFNIQUxMIGJlIHJlZmVyZW5jZXMgdG8gdGhlIEhMNyBPSUQgcmVnaXN0cnkuIE90aGVyd2lzZSwgdGhlIFVSSSBzaG91bGQgY29tZSBmcm9tIEhMNydzIGxpc3Qgb2YgRkhJUiBkZWZpbmVkIHNwZWNpYWwgVVJJcyBvciBpdCBzaG91bGQgcmVmZXJlbmNlIHRvIHNvbWUgZGVmaW5pdGlvbiB0aGF0IGVzdGFibGlzaGVzIHRoZSBzeXN0ZW0gY2xlYXJseSBhbmQgdW5hbWJpZ3VvdXNseS5cclxuICAgKi9cclxuICBwdWJsaWMgc3lzdGVtPzogZmhpci5GaGlyVXJpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVyZSB0aGUgdGVybWlub2xvZ3kgZG9lcyBub3QgY2xlYXJseSBkZWZpbmUgd2hhdCBzdHJpbmcgc2hvdWxkIGJlIHVzZWQgdG8gaWRlbnRpZnkgY29kZSBzeXN0ZW0gdmVyc2lvbnMsIHRoZSByZWNvbW1lbmRhdGlvbiBpcyB0byB1c2UgdGhlIGRhdGUgKGV4cHJlc3NlZCBpbiBGSElSIGRhdGUgZm9ybWF0KSBvbiB3aGljaCB0aGF0IHZlcnNpb24gd2FzIG9mZmljaWFsbHkgcHVibGlzaGVkIGFzIHRoZSB2ZXJzaW9uIGRhdGUuXHJcbiAgICovXHJcbiAgcHVibGljIHZlcnNpb24/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgc3ltYm9sIGluIHN5bnRheCBkZWZpbmVkIGJ5IHRoZSBzeXN0ZW0uIFRoZSBzeW1ib2wgbWF5IGJlIGEgcHJlZGVmaW5lZCBjb2RlIG9yIGFuIGV4cHJlc3Npb24gaW4gYSBzeW50YXggZGVmaW5lZCBieSB0aGUgY29kaW5nIHN5c3RlbSAoZS5nLiBwb3N0LWNvb3JkaW5hdGlvbikuXHJcbiAgICovXHJcbiAgcHVibGljIGNvZGU/OiBmaGlyLkZoaXJDb2RlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtZWFuaW5nIG9mIHRoZSBjb2RlIGluIHRoZSBzeXN0ZW0sIGZvbGxvd2luZyB0aGUgcnVsZXMgb2YgdGhlIHN5c3RlbS5cclxuICAgKi9cclxuICBwdWJsaWMgZGlzcGxheT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW1vbmdzdCBhIHNldCBvZiBhbHRlcm5hdGl2ZXMsIGEgZGlyZWN0bHkgY2hvc2VuIGNvZGUgaXMgdGhlIG1vc3QgYXBwcm9wcmlhdGUgc3RhcnRpbmcgcG9pbnQgZm9yIG5ldyB0cmFuc2xhdGlvbnMuIFRoZXJlIGlzIHNvbWUgYW1iaWd1aXR5IGFib3V0IHdoYXQgZXhhY3RseSAnZGlyZWN0bHkgY2hvc2VuJyBpbXBsaWVzLCBhbmQgdHJhZGluZyBwYXJ0bmVyIGFncmVlbWVudCBtYXkgYmUgbmVlZGVkIHRvIGNsYXJpZnkgdGhlIHVzZSBvZiB0aGlzIGVsZW1lbnQgYW5kIGl0cyBjb25zZXF1ZW5jZXMgbW9yZSBjb21wbGV0ZWx5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1c2VyU2VsZWN0ZWQ/OiBmaGlyLkZoaXJCb29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBDb2RpbmcgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxDb2RpbmdBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnc3lzdGVtJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnN5c3RlbSA9IG5ldyBmaGlyLkZoaXJVcmkoe3ZhbHVlOiBzb3VyY2Uuc3lzdGVtfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zeXN0ZW0nXSkge1xyXG4gICAgICBpZiAodGhpcy5zeXN0ZW0pIHsgdGhpcy5zeXN0ZW0uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3lzdGVtISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3lzdGVtID0gbmV3IGZoaXIuRmhpclVyaShzb3VyY2UuX3N5c3RlbSBhcyBQYXJ0aWFsPGZoaXIuRmhpclVyaUFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndmVyc2lvbiddICE9PSB1bmRlZmluZWQpIHsgdGhpcy52ZXJzaW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS52ZXJzaW9ufSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ192ZXJzaW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMudmVyc2lvbikgeyB0aGlzLnZlcnNpb24uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdmVyc2lvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnZlcnNpb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fdmVyc2lvbiBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnY29kZSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5jb2RlID0gbmV3IGZoaXIuRmhpckNvZGUoe3ZhbHVlOiBzb3VyY2UuY29kZX0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfY29kZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvZGUpIHsgdGhpcy5jb2RlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NvZGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jb2RlID0gbmV3IGZoaXIuRmhpckNvZGUoc291cmNlLl9jb2RlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZUFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGlzcGxheSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5kaXNwbGF5ID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5kaXNwbGF5fSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kaXNwbGF5J10pIHtcclxuICAgICAgaWYgKHRoaXMuZGlzcGxheSkgeyB0aGlzLmRpc3BsYXkuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZGlzcGxheSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRpc3BsYXkgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fZGlzcGxheSBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndXNlclNlbGVjdGVkJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnVzZXJTZWxlY3RlZCA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHt2YWx1ZTogc291cmNlLnVzZXJTZWxlY3RlZH0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfdXNlclNlbGVjdGVkJ10pIHtcclxuICAgICAgaWYgKHRoaXMudXNlclNlbGVjdGVkKSB7IHRoaXMudXNlclNlbGVjdGVkLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3VzZXJTZWxlY3RlZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnVzZXJTZWxlY3RlZCA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHNvdXJjZS5fdXNlclNlbGVjdGVkIGFzIFBhcnRpYWw8Zmhpci5GaGlyQm9vbGVhbkFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0NvZGluZycgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3N5c3RlbScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndmVyc2lvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnY29kZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZGlzcGxheScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndXNlclNlbGVjdGVkJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==