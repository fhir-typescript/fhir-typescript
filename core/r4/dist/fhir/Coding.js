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
        if (source['version']) {
            this.version = new fhir.FhirString({ value: source.version });
        }
        if (source['_version']) {
            if (this.version) {
                this.version.addExtendedProperties(source._version);
            }
            else {
                this.version = new fhir.FhirString(source._version);
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
        if (source['display']) {
            this.display = new fhir.FhirString({ value: source.display });
        }
        if (source['_display']) {
            if (this.display) {
                this.display.addExtendedProperties(source._display);
            }
            else {
                this.display = new fhir.FhirString(source._display);
            }
        }
        if (source['userSelected']) {
            this.userSelected = new fhir.FhirBoolean({ value: source.userSelected });
        }
        if (source['_userSelected']) {
            if (this.userSelected) {
                this.userSelected.addExtendedProperties(source._userSelected);
            }
            else {
                this.userSelected = new fhir.FhirBoolean(source._userSelected);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29kaW5nLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9Db2RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsMkJBQTJCO0FBRTNCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBZ0RuQzs7R0FFRztBQUNILE1BQU0sT0FBTyxNQUFPLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUF5QjFDOztPQUVHO0lBQ0gsWUFBWSxTQUE2QixFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNuRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNqRixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLENBQUM7YUFBRTtpQkFDbkU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQW9DLENBQUMsQ0FBQzthQUFFO1NBQ3RGO1FBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3ZGLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8s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LENBQUMsY0FBYyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQW5FRDs7R0FFRztBQUM2QixvQkFBYSxHQUFVLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogQ29kaW5nXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIENvZGluZyB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDb2RpbmdBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBVUkkgbWF5IGJlIGFuIE9JRCAodXJuOm9pZDouLi4pIG9yIGEgVVVJRCAodXJuOnV1aWQ6Li4uKS4gIE9JRHMgYW5kIFVVSURzIFNIQUxMIGJlIHJlZmVyZW5jZXMgdG8gdGhlIEhMNyBPSUQgcmVnaXN0cnkuIE90aGVyd2lzZSwgdGhlIFVSSSBzaG91bGQgY29tZSBmcm9tIEhMNydzIGxpc3Qgb2YgRkhJUiBkZWZpbmVkIHNwZWNpYWwgVVJJcyBvciBpdCBzaG91bGQgcmVmZXJlbmNlIHRvIHNvbWUgZGVmaW5pdGlvbiB0aGF0IGVzdGFibGlzaGVzIHRoZSBzeXN0ZW0gY2xlYXJseSBhbmQgdW5hbWJpZ3VvdXNseS5cclxuICAgKi9cclxuICBzeXN0ZW0/OiBmaGlyLkZoaXJVcml8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29kaW5nLnN5c3RlbVxyXG4gICAqL1xyXG4gIF9zeXN0ZW0/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFdoZXJlIHRoZSB0ZXJtaW5vbG9neSBkb2VzIG5vdCBjbGVhcmx5IGRlZmluZSB3aGF0IHN0cmluZyBzaG91bGQgYmUgdXNlZCB0byBpZGVudGlmeSBjb2RlIHN5c3RlbSB2ZXJzaW9ucywgdGhlIHJlY29tbWVuZGF0aW9uIGlzIHRvIHVzZSB0aGUgZGF0ZSAoZXhwcmVzc2VkIGluIEZISVIgZGF0ZSBmb3JtYXQpIG9uIHdoaWNoIHRoYXQgdmVyc2lvbiB3YXMgb2ZmaWNpYWxseSBwdWJsaXNoZWQgYXMgdGhlIHZlcnNpb24gZGF0ZS5cclxuICAgKi9cclxuICB2ZXJzaW9uPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvZGluZy52ZXJzaW9uXHJcbiAgICovXHJcbiAgX3ZlcnNpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEEgc3ltYm9sIGluIHN5bnRheCBkZWZpbmVkIGJ5IHRoZSBzeXN0ZW0uIFRoZSBzeW1ib2wgbWF5IGJlIGEgcHJlZGVmaW5lZCBjb2RlIG9yIGFuIGV4cHJlc3Npb24gaW4gYSBzeW50YXggZGVmaW5lZCBieSB0aGUgY29kaW5nIHN5c3RlbSAoZS5nLiBwb3N0LWNvb3JkaW5hdGlvbikuXHJcbiAgICovXHJcbiAgY29kZT86IGZoaXIuRmhpckNvZGV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29kaW5nLmNvZGVcclxuICAgKi9cclxuICBfY29kZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWVhbmluZyBvZiB0aGUgY29kZSBpbiB0aGUgc3lzdGVtLCBmb2xsb3dpbmcgdGhlIHJ1bGVzIG9mIHRoZSBzeXN0ZW0uXHJcbiAgICovXHJcbiAgZGlzcGxheT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDb2RpbmcuZGlzcGxheVxyXG4gICAqL1xyXG4gIF9kaXNwbGF5PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBbW9uZ3N0IGEgc2V0IG9mIGFsdGVybmF0aXZlcywgYSBkaXJlY3RseSBjaG9zZW4gY29kZSBpcyB0aGUgbW9zdCBhcHByb3ByaWF0ZSBzdGFydGluZyBwb2ludCBmb3IgbmV3IHRyYW5zbGF0aW9ucy4gVGhlcmUgaXMgc29tZSBhbWJpZ3VpdHkgYWJvdXQgd2hhdCBleGFjdGx5ICdkaXJlY3RseSBjaG9zZW4nIGltcGxpZXMsIGFuZCB0cmFkaW5nIHBhcnRuZXIgYWdyZWVtZW50IG1heSBiZSBuZWVkZWQgdG8gY2xhcmlmeSB0aGUgdXNlIG9mIHRoaXMgZWxlbWVudCBhbmQgaXRzIGNvbnNlcXVlbmNlcyBtb3JlIGNvbXBsZXRlbHkuXHJcbiAgICovXHJcbiAgdXNlclNlbGVjdGVkPzogZmhpci5GaGlyQm9vbGVhbnxib29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29kaW5nLnVzZXJTZWxlY3RlZFxyXG4gICAqL1xyXG4gIF91c2VyU2VsZWN0ZWQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQSByZWZlcmVuY2UgdG8gYSBjb2RlIGRlZmluZWQgYnkgYSB0ZXJtaW5vbG9neSBzeXN0ZW0uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29kaW5nIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdDb2RpbmcnO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBVUkkgbWF5IGJlIGFuIE9JRCAodXJuOm9pZDouLi4pIG9yIGEgVVVJRCAodXJuOnV1aWQ6Li4uKS4gIE9JRHMgYW5kIFVVSURzIFNIQUxMIGJlIHJlZmVyZW5jZXMgdG8gdGhlIEhMNyBPSUQgcmVnaXN0cnkuIE90aGVyd2lzZSwgdGhlIFVSSSBzaG91bGQgY29tZSBmcm9tIEhMNydzIGxpc3Qgb2YgRkhJUiBkZWZpbmVkIHNwZWNpYWwgVVJJcyBvciBpdCBzaG91bGQgcmVmZXJlbmNlIHRvIHNvbWUgZGVmaW5pdGlvbiB0aGF0IGVzdGFibGlzaGVzIHRoZSBzeXN0ZW0gY2xlYXJseSBhbmQgdW5hbWJpZ3VvdXNseS5cclxuICAgKi9cclxuICBwdWJsaWMgc3lzdGVtPzogZmhpci5GaGlyVXJpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVyZSB0aGUgdGVybWlub2xvZ3kgZG9lcyBub3QgY2xlYXJseSBkZWZpbmUgd2hhdCBzdHJpbmcgc2hvdWxkIGJlIHVzZWQgdG8gaWRlbnRpZnkgY29kZSBzeXN0ZW0gdmVyc2lvbnMsIHRoZSByZWNvbW1lbmRhdGlvbiBpcyB0byB1c2UgdGhlIGRhdGUgKGV4cHJlc3NlZCBpbiBGSElSIGRhdGUgZm9ybWF0KSBvbiB3aGljaCB0aGF0IHZlcnNpb24gd2FzIG9mZmljaWFsbHkgcHVibGlzaGVkIGFzIHRoZSB2ZXJzaW9uIGRhdGUuXHJcbiAgICovXHJcbiAgcHVibGljIHZlcnNpb24/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgc3ltYm9sIGluIHN5bnRheCBkZWZpbmVkIGJ5IHRoZSBzeXN0ZW0uIFRoZSBzeW1ib2wgbWF5IGJlIGEgcHJlZGVmaW5lZCBjb2RlIG9yIGFuIGV4cHJlc3Npb24gaW4gYSBzeW50YXggZGVmaW5lZCBieSB0aGUgY29kaW5nIHN5c3RlbSAoZS5nLiBwb3N0LWNvb3JkaW5hdGlvbikuXHJcbiAgICovXHJcbiAgcHVibGljIGNvZGU/OiBmaGlyLkZoaXJDb2RlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtZWFuaW5nIG9mIHRoZSBjb2RlIGluIHRoZSBzeXN0ZW0sIGZvbGxvd2luZyB0aGUgcnVsZXMgb2YgdGhlIHN5c3RlbS5cclxuICAgKi9cclxuICBwdWJsaWMgZGlzcGxheT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW1vbmdzdCBhIHNldCBvZiBhbHRlcm5hdGl2ZXMsIGEgZGlyZWN0bHkgY2hvc2VuIGNvZGUgaXMgdGhlIG1vc3QgYXBwcm9wcmlhdGUgc3RhcnRpbmcgcG9pbnQgZm9yIG5ldyB0cmFuc2xhdGlvbnMuIFRoZXJlIGlzIHNvbWUgYW1iaWd1aXR5IGFib3V0IHdoYXQgZXhhY3RseSAnZGlyZWN0bHkgY2hvc2VuJyBpbXBsaWVzLCBhbmQgdHJhZGluZyBwYXJ0bmVyIGFncmVlbWVudCBtYXkgYmUgbmVlZGVkIHRvIGNsYXJpZnkgdGhlIHVzZSBvZiB0aGlzIGVsZW1lbnQgYW5kIGl0cyBjb25zZXF1ZW5jZXMgbW9yZSBjb21wbGV0ZWx5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1c2VyU2VsZWN0ZWQ/OiBmaGlyLkZoaXJCb29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBDb2RpbmcgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxDb2RpbmdBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnc3lzdGVtJ10pIHsgdGhpcy5zeXN0ZW0gPSBuZXcgZmhpci5GaGlyVXJpKHt2YWx1ZTogc291cmNlLnN5c3RlbX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3lzdGVtJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3lzdGVtKSB7IHRoaXMuc3lzdGVtLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N5c3RlbSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN5c3RlbSA9IG5ldyBmaGlyLkZoaXJVcmkoc291cmNlLl9zeXN0ZW0gYXMgUGFydGlhbDxmaGlyLkZoaXJVcmlBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3ZlcnNpb24nXSkgeyB0aGlzLnZlcnNpb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnZlcnNpb259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3ZlcnNpb24nXSkge1xyXG4gICAgICBpZiAodGhpcy52ZXJzaW9uKSB7IHRoaXMudmVyc2lvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl92ZXJzaW9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudmVyc2lvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl92ZXJzaW9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjb2RlJ10pIHsgdGhpcy5jb2RlID0gbmV3IGZoaXIuRmhpckNvZGUoe3ZhbHVlOiBzb3VyY2UuY29kZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfY29kZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvZGUpIHsgdGhpcy5jb2RlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NvZGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jb2RlID0gbmV3IGZoaXIuRmhpckNvZGUoc291cmNlLl9jb2RlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGlzcGxheSddKSB7IHRoaXMuZGlzcGxheSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZGlzcGxheX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGlzcGxheSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRpc3BsYXkpIHsgdGhpcy5kaXNwbGF5LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2Rpc3BsYXkhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kaXNwbGF5ID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Rpc3BsYXkgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3VzZXJTZWxlY3RlZCddKSB7IHRoaXMudXNlclNlbGVjdGVkID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oe3ZhbHVlOiBzb3VyY2UudXNlclNlbGVjdGVkfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ191c2VyU2VsZWN0ZWQnXSkge1xyXG4gICAgICBpZiAodGhpcy51c2VyU2VsZWN0ZWQpIHsgdGhpcy51c2VyU2VsZWN0ZWQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdXNlclNlbGVjdGVkISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudXNlclNlbGVjdGVkID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oc291cmNlLl91c2VyU2VsZWN0ZWQgYXMgUGFydGlhbDxmaGlyLkZoaXJCb29sZWFuQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnQ29kaW5nJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnc3lzdGVtJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd2ZXJzaW9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdjb2RlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdkaXNwbGF5JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd1c2VyU2VsZWN0ZWQnLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19