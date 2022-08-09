// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29kaW5nLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9Db2RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsMkJBQTJCO0FBRTNCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBZ0RuQzs7R0FFRztBQUNILE1BQU0sT0FBTyxNQUFPLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUF5QjFDOztPQUVHO0lBQ0gsWUFBWSxTQUE2QixFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNuRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQ3hHLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxPQUFRLENBQUMsQ0FBQzthQUFFO2lCQUNuRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBb0MsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1NBQy9GO1FBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDOUcsSUFBSSxN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QUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQW5FRDs7R0FFRztBQUM2QixvQkFBYSxHQUFVLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IENvZGluZ1xyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBDb2RpbmcgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29kaW5nQXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgVVJJIG1heSBiZSBhbiBPSUQgKHVybjpvaWQ6Li4uKSBvciBhIFVVSUQgKHVybjp1dWlkOi4uLikuICBPSURzIGFuZCBVVUlEcyBTSEFMTCBiZSByZWZlcmVuY2VzIHRvIHRoZSBITDcgT0lEIHJlZ2lzdHJ5LiBPdGhlcndpc2UsIHRoZSBVUkkgc2hvdWxkIGNvbWUgZnJvbSBITDcncyBsaXN0IG9mIEZISVIgZGVmaW5lZCBzcGVjaWFsIFVSSXMgb3IgaXQgc2hvdWxkIHJlZmVyZW5jZSB0byBzb21lIGRlZmluaXRpb24gdGhhdCBlc3RhYmxpc2hlcyB0aGUgc3lzdGVtIGNsZWFybHkgYW5kIHVuYW1iaWd1b3VzbHkuXHJcbiAgICovXHJcbiAgc3lzdGVtPzogZmhpci5GaGlyVXJpfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvZGluZy5zeXN0ZW1cclxuICAgKi9cclxuICBfc3lzdGVtPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBXaGVyZSB0aGUgdGVybWlub2xvZ3kgZG9lcyBub3QgY2xlYXJseSBkZWZpbmUgd2hhdCBzdHJpbmcgc2hvdWxkIGJlIHVzZWQgdG8gaWRlbnRpZnkgY29kZSBzeXN0ZW0gdmVyc2lvbnMsIHRoZSByZWNvbW1lbmRhdGlvbiBpcyB0byB1c2UgdGhlIGRhdGUgKGV4cHJlc3NlZCBpbiBGSElSIGRhdGUgZm9ybWF0KSBvbiB3aGljaCB0aGF0IHZlcnNpb24gd2FzIG9mZmljaWFsbHkgcHVibGlzaGVkIGFzIHRoZSB2ZXJzaW9uIGRhdGUuXHJcbiAgICovXHJcbiAgdmVyc2lvbj86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDb2RpbmcudmVyc2lvblxyXG4gICAqL1xyXG4gIF92ZXJzaW9uPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIHN5bWJvbCBpbiBzeW50YXggZGVmaW5lZCBieSB0aGUgc3lzdGVtLiBUaGUgc3ltYm9sIG1heSBiZSBhIHByZWRlZmluZWQgY29kZSBvciBhbiBleHByZXNzaW9uIGluIGEgc3ludGF4IGRlZmluZWQgYnkgdGhlIGNvZGluZyBzeXN0ZW0gKGUuZy4gcG9zdC1jb29yZGluYXRpb24pLlxyXG4gICAqL1xyXG4gIGNvZGU/OiBmaGlyLkZoaXJDb2RlfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvZGluZy5jb2RlXHJcbiAgICovXHJcbiAgX2NvZGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEEgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1lYW5pbmcgb2YgdGhlIGNvZGUgaW4gdGhlIHN5c3RlbSwgZm9sbG93aW5nIHRoZSBydWxlcyBvZiB0aGUgc3lzdGVtLlxyXG4gICAqL1xyXG4gIGRpc3BsYXk/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29kaW5nLmRpc3BsYXlcclxuICAgKi9cclxuICBfZGlzcGxheT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQW1vbmdzdCBhIHNldCBvZiBhbHRlcm5hdGl2ZXMsIGEgZGlyZWN0bHkgY2hvc2VuIGNvZGUgaXMgdGhlIG1vc3QgYXBwcm9wcmlhdGUgc3RhcnRpbmcgcG9pbnQgZm9yIG5ldyB0cmFuc2xhdGlvbnMuIFRoZXJlIGlzIHNvbWUgYW1iaWd1aXR5IGFib3V0IHdoYXQgZXhhY3RseSAnZGlyZWN0bHkgY2hvc2VuJyBpbXBsaWVzLCBhbmQgdHJhZGluZyBwYXJ0bmVyIGFncmVlbWVudCBtYXkgYmUgbmVlZGVkIHRvIGNsYXJpZnkgdGhlIHVzZSBvZiB0aGlzIGVsZW1lbnQgYW5kIGl0cyBjb25zZXF1ZW5jZXMgbW9yZSBjb21wbGV0ZWx5LlxyXG4gICAqL1xyXG4gIHVzZXJTZWxlY3RlZD86IGZoaXIuRmhpckJvb2xlYW58Ym9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvZGluZy51c2VyU2VsZWN0ZWRcclxuICAgKi9cclxuICBfdXNlclNlbGVjdGVkPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgcmVmZXJlbmNlIHRvIGEgY29kZSBkZWZpbmVkIGJ5IGEgdGVybWlub2xvZ3kgc3lzdGVtLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvZGluZyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQ29kaW5nJztcclxuICAvKipcclxuICAgKiBUaGUgVVJJIG1heSBiZSBhbiBPSUQgKHVybjpvaWQ6Li4uKSBvciBhIFVVSUQgKHVybjp1dWlkOi4uLikuICBPSURzIGFuZCBVVUlEcyBTSEFMTCBiZSByZWZlcmVuY2VzIHRvIHRoZSBITDcgT0lEIHJlZ2lzdHJ5LiBPdGhlcndpc2UsIHRoZSBVUkkgc2hvdWxkIGNvbWUgZnJvbSBITDcncyBsaXN0IG9mIEZISVIgZGVmaW5lZCBzcGVjaWFsIFVSSXMgb3IgaXQgc2hvdWxkIHJlZmVyZW5jZSB0byBzb21lIGRlZmluaXRpb24gdGhhdCBlc3RhYmxpc2hlcyB0aGUgc3lzdGVtIGNsZWFybHkgYW5kIHVuYW1iaWd1b3VzbHkuXHJcbiAgICovXHJcbiAgcHVibGljIHN5c3RlbT86IGZoaXIuRmhpclVyaXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlcmUgdGhlIHRlcm1pbm9sb2d5IGRvZXMgbm90IGNsZWFybHkgZGVmaW5lIHdoYXQgc3RyaW5nIHNob3VsZCBiZSB1c2VkIHRvIGlkZW50aWZ5IGNvZGUgc3lzdGVtIHZlcnNpb25zLCB0aGUgcmVjb21tZW5kYXRpb24gaXMgdG8gdXNlIHRoZSBkYXRlIChleHByZXNzZWQgaW4gRkhJUiBkYXRlIGZvcm1hdCkgb24gd2hpY2ggdGhhdCB2ZXJzaW9uIHdhcyBvZmZpY2lhbGx5IHB1Ymxpc2hlZCBhcyB0aGUgdmVyc2lvbiBkYXRlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB2ZXJzaW9uPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIHN5bWJvbCBpbiBzeW50YXggZGVmaW5lZCBieSB0aGUgc3lzdGVtLiBUaGUgc3ltYm9sIG1heSBiZSBhIHByZWRlZmluZWQgY29kZSBvciBhbiBleHByZXNzaW9uIGluIGEgc3ludGF4IGRlZmluZWQgYnkgdGhlIGNvZGluZyBzeXN0ZW0gKGUuZy4gcG9zdC1jb29yZGluYXRpb24pLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2RlPzogZmhpci5GaGlyQ29kZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWVhbmluZyBvZiB0aGUgY29kZSBpbiB0aGUgc3lzdGVtLCBmb2xsb3dpbmcgdGhlIHJ1bGVzIG9mIHRoZSBzeXN0ZW0uXHJcbiAgICovXHJcbiAgcHVibGljIGRpc3BsYXk/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFtb25nc3QgYSBzZXQgb2YgYWx0ZXJuYXRpdmVzLCBhIGRpcmVjdGx5IGNob3NlbiBjb2RlIGlzIHRoZSBtb3N0IGFwcHJvcHJpYXRlIHN0YXJ0aW5nIHBvaW50IGZvciBuZXcgdHJhbnNsYXRpb25zLiBUaGVyZSBpcyBzb21lIGFtYmlndWl0eSBhYm91dCB3aGF0IGV4YWN0bHkgJ2RpcmVjdGx5IGNob3NlbicgaW1wbGllcywgYW5kIHRyYWRpbmcgcGFydG5lciBhZ3JlZW1lbnQgbWF5IGJlIG5lZWRlZCB0byBjbGFyaWZ5IHRoZSB1c2Ugb2YgdGhpcyBlbGVtZW50IGFuZCBpdHMgY29uc2VxdWVuY2VzIG1vcmUgY29tcGxldGVseS5cclxuICAgKi9cclxuICBwdWJsaWMgdXNlclNlbGVjdGVkPzogZmhpci5GaGlyQm9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgQ29kaW5nIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8Q29kaW5nQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3N5c3RlbSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zeXN0ZW0gPSBuZXcgZmhpci5GaGlyVXJpKHt2YWx1ZTogc291cmNlLnN5c3RlbX0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3lzdGVtJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3lzdGVtKSB7IHRoaXMuc3lzdGVtLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N5c3RlbSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN5c3RlbSA9IG5ldyBmaGlyLkZoaXJVcmkoc291cmNlLl9zeXN0ZW0gYXMgUGFydGlhbDxmaGlyLkZoaXJVcmlBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3ZlcnNpb24nXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudmVyc2lvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UudmVyc2lvbn0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfdmVyc2lvbiddKSB7XHJcbiAgICAgIGlmICh0aGlzLnZlcnNpb24pIHsgdGhpcy52ZXJzaW9uLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3ZlcnNpb24hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy52ZXJzaW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX3ZlcnNpb24gYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NvZGUnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuY29kZSA9IG5ldyBmaGlyLkZoaXJDb2RlKHt2YWx1ZTogc291cmNlLmNvZGV9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NvZGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5jb2RlKSB7IHRoaXMuY29kZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jb2RlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY29kZSA9IG5ldyBmaGlyLkZoaXJDb2RlKHNvdXJjZS5fY29kZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGVBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2Rpc3BsYXknXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZGlzcGxheSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZGlzcGxheX0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGlzcGxheSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRpc3BsYXkpIHsgdGhpcy5kaXNwbGF5LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2Rpc3BsYXkhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kaXNwbGF5ID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Rpc3BsYXkgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3VzZXJTZWxlY3RlZCddICE9PSB1bmRlZmluZWQpIHsgdGhpcy51c2VyU2VsZWN0ZWQgPSBuZXcgZmhpci5GaGlyQm9vbGVhbih7dmFsdWU6IHNvdXJjZS51c2VyU2VsZWN0ZWR9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3VzZXJTZWxlY3RlZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLnVzZXJTZWxlY3RlZCkgeyB0aGlzLnVzZXJTZWxlY3RlZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl91c2VyU2VsZWN0ZWQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy51c2VyU2VsZWN0ZWQgPSBuZXcgZmhpci5GaGlyQm9vbGVhbihzb3VyY2UuX3VzZXJTZWxlY3RlZCBhcyBQYXJ0aWFsPGZoaXIuRmhpckJvb2xlYW5BcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdDb2RpbmcnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdzeXN0ZW0nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3ZlcnNpb24nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2NvZGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2Rpc3BsYXknLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3VzZXJTZWxlY3RlZCcsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=