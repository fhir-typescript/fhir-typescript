// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29kaW5nLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9Db2RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsMkJBQTJCO0FBRTNCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBZ0RuQzs7R0FFRztBQUNILE1BQU0sT0FBTyxNQUFPLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUF5QjFDOztPQUVHO0lBQ0gsWUFBWSxTQUE2QixFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNuRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQ3hHLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxPQUFRLENBQUMsQ0FBQzthQUFFO2lCQUNuRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBb0MsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1NBQy9GO1FBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDOUcsSUFBSSxN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QUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQW5FRDs7R0FFRztBQUM2QixvQkFBYSxHQUFVLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogQ29kaW5nXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIENvZGluZyB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDb2RpbmdBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBVUkkgbWF5IGJlIGFuIE9JRCAodXJuOm9pZDouLi4pIG9yIGEgVVVJRCAodXJuOnV1aWQ6Li4uKS4gIE9JRHMgYW5kIFVVSURzIFNIQUxMIGJlIHJlZmVyZW5jZXMgdG8gdGhlIEhMNyBPSUQgcmVnaXN0cnkuIE90aGVyd2lzZSwgdGhlIFVSSSBzaG91bGQgY29tZSBmcm9tIEhMNydzIGxpc3Qgb2YgRkhJUiBkZWZpbmVkIHNwZWNpYWwgVVJJcyBvciBpdCBzaG91bGQgZGUtcmVmZXJlbmNlIHRvIHNvbWUgZGVmaW5pdGlvbiB0aGF0IGVzdGFibGlzaCB0aGUgc3lzdGVtIGNsZWFybHkgYW5kIHVuYW1iaWd1b3VzbHkuXHJcbiAgICovXHJcbiAgc3lzdGVtPzogZmhpci5GaGlyVXJpfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvZGluZy5zeXN0ZW1cclxuICAgKi9cclxuICBfc3lzdGVtPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBXaGVyZSB0aGUgdGVybWlub2xvZ3kgZG9lcyBub3QgY2xlYXJseSBkZWZpbmUgd2hhdCBzdHJpbmcgc2hvdWxkIGJlIHVzZWQgdG8gaWRlbnRpZnkgY29kZSBzeXN0ZW0gdmVyc2lvbnMsIHRoZSByZWNvbW1lbmRhdGlvbiBpcyB0byB1c2UgdGhlIGRhdGUgKGV4cHJlc3NlZCBpbiBGSElSIGRhdGUgZm9ybWF0KSBvbiB3aGljaCB0aGF0IHZlcnNpb24gd2FzIG9mZmljaWFsbHkgcHVibGlzaGVkIGFzIHRoZSB2ZXJzaW9uIGRhdGUuXHJcbiAgICovXHJcbiAgdmVyc2lvbj86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDb2RpbmcudmVyc2lvblxyXG4gICAqL1xyXG4gIF92ZXJzaW9uPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIHN5bWJvbCBpbiBzeW50YXggZGVmaW5lZCBieSB0aGUgc3lzdGVtLiBUaGUgc3ltYm9sIG1heSBiZSBhIHByZWRlZmluZWQgY29kZSBvciBhbiBleHByZXNzaW9uIGluIGEgc3ludGF4IGRlZmluZWQgYnkgdGhlIGNvZGluZyBzeXN0ZW0gKGUuZy4gcG9zdC1jb29yZGluYXRpb24pLlxyXG4gICAqL1xyXG4gIGNvZGU/OiBmaGlyLkZoaXJDb2RlfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvZGluZy5jb2RlXHJcbiAgICovXHJcbiAgX2NvZGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEEgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1lYW5pbmcgb2YgdGhlIGNvZGUgaW4gdGhlIHN5c3RlbSwgZm9sbG93aW5nIHRoZSBydWxlcyBvZiB0aGUgc3lzdGVtLlxyXG4gICAqL1xyXG4gIGRpc3BsYXk/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29kaW5nLmRpc3BsYXlcclxuICAgKi9cclxuICBfZGlzcGxheT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQW1vbmdzdCBhIHNldCBvZiBhbHRlcm5hdGl2ZXMsIGEgZGlyZWN0bHkgY2hvc2VuIGNvZGUgaXMgdGhlIG1vc3QgYXBwcm9wcmlhdGUgc3RhcnRpbmcgcG9pbnQgZm9yIG5ldyB0cmFuc2xhdGlvbnMuIFRoZXJlIGlzIHNvbWUgYW1iaWd1aXR5IGFib3V0IHdoYXQgZXhhY3RseSAnZGlyZWN0bHkgY2hvc2VuJyBpbXBsaWVzLCBhbmQgdHJhZGluZyBwYXJ0bmVyIGFncmVlbWVudCBtYXkgYmUgbmVlZGVkIHRvIGNsYXJpZnkgdGhlIHVzZSBvZiB0aGlzIGVsZW1lbnQgYW5kIGl0cyBjb25zZXF1ZW5jZXMgbW9yZSBjb21wbGV0ZWx5LlxyXG4gICAqL1xyXG4gIHVzZXJTZWxlY3RlZD86IGZoaXIuRmhpckJvb2xlYW58Ym9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvZGluZy51c2VyU2VsZWN0ZWRcclxuICAgKi9cclxuICBfdXNlclNlbGVjdGVkPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgcmVmZXJlbmNlIHRvIGEgY29kZSBkZWZpbmVkIGJ5IGEgdGVybWlub2xvZ3kgc3lzdGVtLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvZGluZyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQ29kaW5nJztcclxuICAvKipcclxuICAgKiBUaGUgVVJJIG1heSBiZSBhbiBPSUQgKHVybjpvaWQ6Li4uKSBvciBhIFVVSUQgKHVybjp1dWlkOi4uLikuICBPSURzIGFuZCBVVUlEcyBTSEFMTCBiZSByZWZlcmVuY2VzIHRvIHRoZSBITDcgT0lEIHJlZ2lzdHJ5LiBPdGhlcndpc2UsIHRoZSBVUkkgc2hvdWxkIGNvbWUgZnJvbSBITDcncyBsaXN0IG9mIEZISVIgZGVmaW5lZCBzcGVjaWFsIFVSSXMgb3IgaXQgc2hvdWxkIGRlLXJlZmVyZW5jZSB0byBzb21lIGRlZmluaXRpb24gdGhhdCBlc3RhYmxpc2ggdGhlIHN5c3RlbSBjbGVhcmx5IGFuZCB1bmFtYmlndW91c2x5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzeXN0ZW0/OiBmaGlyLkZoaXJVcml8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdoZXJlIHRoZSB0ZXJtaW5vbG9neSBkb2VzIG5vdCBjbGVhcmx5IGRlZmluZSB3aGF0IHN0cmluZyBzaG91bGQgYmUgdXNlZCB0byBpZGVudGlmeSBjb2RlIHN5c3RlbSB2ZXJzaW9ucywgdGhlIHJlY29tbWVuZGF0aW9uIGlzIHRvIHVzZSB0aGUgZGF0ZSAoZXhwcmVzc2VkIGluIEZISVIgZGF0ZSBmb3JtYXQpIG9uIHdoaWNoIHRoYXQgdmVyc2lvbiB3YXMgb2ZmaWNpYWxseSBwdWJsaXNoZWQgYXMgdGhlIHZlcnNpb24gZGF0ZS5cclxuICAgKi9cclxuICBwdWJsaWMgdmVyc2lvbj86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBzeW1ib2wgaW4gc3ludGF4IGRlZmluZWQgYnkgdGhlIHN5c3RlbS4gVGhlIHN5bWJvbCBtYXkgYmUgYSBwcmVkZWZpbmVkIGNvZGUgb3IgYW4gZXhwcmVzc2lvbiBpbiBhIHN5bnRheCBkZWZpbmVkIGJ5IHRoZSBjb2Rpbmcgc3lzdGVtIChlLmcuIHBvc3QtY29vcmRpbmF0aW9uKS5cclxuICAgKi9cclxuICBwdWJsaWMgY29kZT86IGZoaXIuRmhpckNvZGV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1lYW5pbmcgb2YgdGhlIGNvZGUgaW4gdGhlIHN5c3RlbSwgZm9sbG93aW5nIHRoZSBydWxlcyBvZiB0aGUgc3lzdGVtLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkaXNwbGF5PzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbW9uZ3N0IGEgc2V0IG9mIGFsdGVybmF0aXZlcywgYSBkaXJlY3RseSBjaG9zZW4gY29kZSBpcyB0aGUgbW9zdCBhcHByb3ByaWF0ZSBzdGFydGluZyBwb2ludCBmb3IgbmV3IHRyYW5zbGF0aW9ucy4gVGhlcmUgaXMgc29tZSBhbWJpZ3VpdHkgYWJvdXQgd2hhdCBleGFjdGx5ICdkaXJlY3RseSBjaG9zZW4nIGltcGxpZXMsIGFuZCB0cmFkaW5nIHBhcnRuZXIgYWdyZWVtZW50IG1heSBiZSBuZWVkZWQgdG8gY2xhcmlmeSB0aGUgdXNlIG9mIHRoaXMgZWxlbWVudCBhbmQgaXRzIGNvbnNlcXVlbmNlcyBtb3JlIGNvbXBsZXRlbHkuXHJcbiAgICovXHJcbiAgcHVibGljIHVzZXJTZWxlY3RlZD86IGZoaXIuRmhpckJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIENvZGluZyAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPENvZGluZ0FyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydzeXN0ZW0nXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc3lzdGVtID0gbmV3IGZoaXIuRmhpclVyaSh7dmFsdWU6IHNvdXJjZS5zeXN0ZW19LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N5c3RlbSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN5c3RlbSkgeyB0aGlzLnN5c3RlbS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zeXN0ZW0hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zeXN0ZW0gPSBuZXcgZmhpci5GaGlyVXJpKHNvdXJjZS5fc3lzdGVtIGFzIFBhcnRpYWw8Zmhpci5GaGlyVXJpQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd2ZXJzaW9uJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnZlcnNpb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnZlcnNpb259LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3ZlcnNpb24nXSkge1xyXG4gICAgICBpZiAodGhpcy52ZXJzaW9uKSB7IHRoaXMudmVyc2lvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl92ZXJzaW9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudmVyc2lvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl92ZXJzaW9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjb2RlJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmNvZGUgPSBuZXcgZmhpci5GaGlyQ29kZSh7dmFsdWU6IHNvdXJjZS5jb2RlfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jb2RlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuY29kZSkgeyB0aGlzLmNvZGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY29kZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNvZGUgPSBuZXcgZmhpci5GaGlyQ29kZShzb3VyY2UuX2NvZGUgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydkaXNwbGF5J10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmRpc3BsYXkgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmRpc3BsYXl9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Rpc3BsYXknXSkge1xyXG4gICAgICBpZiAodGhpcy5kaXNwbGF5KSB7IHRoaXMuZGlzcGxheS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kaXNwbGF5ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZGlzcGxheSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9kaXNwbGF5IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd1c2VyU2VsZWN0ZWQnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudXNlclNlbGVjdGVkID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oe3ZhbHVlOiBzb3VyY2UudXNlclNlbGVjdGVkfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ191c2VyU2VsZWN0ZWQnXSkge1xyXG4gICAgICBpZiAodGhpcy51c2VyU2VsZWN0ZWQpIHsgdGhpcy51c2VyU2VsZWN0ZWQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdXNlclNlbGVjdGVkISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudXNlclNlbGVjdGVkID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oc291cmNlLl91c2VyU2VsZWN0ZWQgYXMgUGFydGlhbDxmaGlyLkZoaXJCb29sZWFuQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnQ29kaW5nJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnc3lzdGVtJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd2ZXJzaW9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdjb2RlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdkaXNwbGF5JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd1c2VyU2VsZWN0ZWQnLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19