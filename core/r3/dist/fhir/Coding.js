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
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Coding';
        }
        this.vOS('system', exp);
        this.vOS('version', exp);
        this.vOS('code', exp);
        this.vOS('display', exp);
        this.vOS('userSelected', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Coding._fts_dataType = 'Coding';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29kaW5nLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9Db2RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsMkJBQTJCO0FBRTNCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBZ0RuQzs7R0FFRztBQUNILE1BQU0sT0FBTyxNQUFPLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUF5QjFDOztPQUVHO0lBQ0gsWUFBWSxTQUE2QixFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNuRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNqRixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLENBQUM7YUFBRTtpQkFDbkU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQW9DLENBQUMsQ0FBQzthQUFFO1NBQ3RGO1FBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3ZGLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxRQUFTLENBQUMsQ0FBQzthQUFFO2lCQUN0RTtnQkFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBd0MsQ0FBQyxDQUFDO2FBQUU7U0FDOUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDNUUsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQyxDQUFDO2FBQUU7aUJBQzdEO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFtQyxDQUFDLENBQUM7YUFBRTtTQUNwRjtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7U0FBRTtRQUN2RixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsUUFBUyxDQUFDLENBQUM7YUFBRTtpQkFDdEU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQXdDLENBQUMsQ0FBQzthQUFFO1NBQzlGO1FBQ0QsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3ZHLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxhQUFjLENBQUMsQ0FBQzthQUFFO2lCQUNyRjtnQkFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBOEMsQ0FBQyxDQUFDO2FBQUU7U0FDMUc7SUFDSCxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFBO1NBQUU7UUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDNUIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUFuRUQ7O0dBRUc7QUFDNkIsb0JBQWEsR0FBVSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IENvZGluZ1xyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBDb2RpbmcgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29kaW5nQXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgVVJJIG1heSBiZSBhbiBPSUQgKHVybjpvaWQ6Li4uKSBvciBhIFVVSUQgKHVybjp1dWlkOi4uLikuICBPSURzIGFuZCBVVUlEcyBTSEFMTCBiZSByZWZlcmVuY2VzIHRvIHRoZSBITDcgT0lEIHJlZ2lzdHJ5LiBPdGhlcndpc2UsIHRoZSBVUkkgc2hvdWxkIGNvbWUgZnJvbSBITDcncyBsaXN0IG9mIEZISVIgZGVmaW5lZCBzcGVjaWFsIFVSSXMgb3IgaXQgc2hvdWxkIGRlLXJlZmVyZW5jZSB0byBzb21lIGRlZmluaXRpb24gdGhhdCBlc3RhYmxpc2ggdGhlIHN5c3RlbSBjbGVhcmx5IGFuZCB1bmFtYmlndW91c2x5LlxyXG4gICAqL1xyXG4gIHN5c3RlbT86IGZoaXIuRmhpclVyaXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDb2Rpbmcuc3lzdGVtXHJcbiAgICovXHJcbiAgX3N5c3RlbT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogV2hlcmUgdGhlIHRlcm1pbm9sb2d5IGRvZXMgbm90IGNsZWFybHkgZGVmaW5lIHdoYXQgc3RyaW5nIHNob3VsZCBiZSB1c2VkIHRvIGlkZW50aWZ5IGNvZGUgc3lzdGVtIHZlcnNpb25zLCB0aGUgcmVjb21tZW5kYXRpb24gaXMgdG8gdXNlIHRoZSBkYXRlIChleHByZXNzZWQgaW4gRkhJUiBkYXRlIGZvcm1hdCkgb24gd2hpY2ggdGhhdCB2ZXJzaW9uIHdhcyBvZmZpY2lhbGx5IHB1Ymxpc2hlZCBhcyB0aGUgdmVyc2lvbiBkYXRlLlxyXG4gICAqL1xyXG4gIHZlcnNpb24/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29kaW5nLnZlcnNpb25cclxuICAgKi9cclxuICBfdmVyc2lvbj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSBzeW1ib2wgaW4gc3ludGF4IGRlZmluZWQgYnkgdGhlIHN5c3RlbS4gVGhlIHN5bWJvbCBtYXkgYmUgYSBwcmVkZWZpbmVkIGNvZGUgb3IgYW4gZXhwcmVzc2lvbiBpbiBhIHN5bnRheCBkZWZpbmVkIGJ5IHRoZSBjb2Rpbmcgc3lzdGVtIChlLmcuIHBvc3QtY29vcmRpbmF0aW9uKS5cclxuICAgKi9cclxuICBjb2RlPzogZmhpci5GaGlyQ29kZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDb2RpbmcuY29kZVxyXG4gICAqL1xyXG4gIF9jb2RlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtZWFuaW5nIG9mIHRoZSBjb2RlIGluIHRoZSBzeXN0ZW0sIGZvbGxvd2luZyB0aGUgcnVsZXMgb2YgdGhlIHN5c3RlbS5cclxuICAgKi9cclxuICBkaXNwbGF5PzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvZGluZy5kaXNwbGF5XHJcbiAgICovXHJcbiAgX2Rpc3BsYXk/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEFtb25nc3QgYSBzZXQgb2YgYWx0ZXJuYXRpdmVzLCBhIGRpcmVjdGx5IGNob3NlbiBjb2RlIGlzIHRoZSBtb3N0IGFwcHJvcHJpYXRlIHN0YXJ0aW5nIHBvaW50IGZvciBuZXcgdHJhbnNsYXRpb25zLiBUaGVyZSBpcyBzb21lIGFtYmlndWl0eSBhYm91dCB3aGF0IGV4YWN0bHkgJ2RpcmVjdGx5IGNob3NlbicgaW1wbGllcywgYW5kIHRyYWRpbmcgcGFydG5lciBhZ3JlZW1lbnQgbWF5IGJlIG5lZWRlZCB0byBjbGFyaWZ5IHRoZSB1c2Ugb2YgdGhpcyBlbGVtZW50IGFuZCBpdHMgY29uc2VxdWVuY2VzIG1vcmUgY29tcGxldGVseS5cclxuICAgKi9cclxuICB1c2VyU2VsZWN0ZWQ/OiBmaGlyLkZoaXJCb29sZWFufGJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDb2RpbmcudXNlclNlbGVjdGVkXHJcbiAgICovXHJcbiAgX3VzZXJTZWxlY3RlZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHJlZmVyZW5jZSB0byBhIGNvZGUgZGVmaW5lZCBieSBhIHRlcm1pbm9sb2d5IHN5c3RlbS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2RpbmcgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0NvZGluZyc7XHJcbiAgLyoqXHJcbiAgICogVGhlIFVSSSBtYXkgYmUgYW4gT0lEICh1cm46b2lkOi4uLikgb3IgYSBVVUlEICh1cm46dXVpZDouLi4pLiAgT0lEcyBhbmQgVVVJRHMgU0hBTEwgYmUgcmVmZXJlbmNlcyB0byB0aGUgSEw3IE9JRCByZWdpc3RyeS4gT3RoZXJ3aXNlLCB0aGUgVVJJIHNob3VsZCBjb21lIGZyb20gSEw3J3MgbGlzdCBvZiBGSElSIGRlZmluZWQgc3BlY2lhbCBVUklzIG9yIGl0IHNob3VsZCBkZS1yZWZlcmVuY2UgdG8gc29tZSBkZWZpbml0aW9uIHRoYXQgZXN0YWJsaXNoIHRoZSBzeXN0ZW0gY2xlYXJseSBhbmQgdW5hbWJpZ3VvdXNseS5cclxuICAgKi9cclxuICBwdWJsaWMgc3lzdGVtPzogZmhpci5GaGlyVXJpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVyZSB0aGUgdGVybWlub2xvZ3kgZG9lcyBub3QgY2xlYXJseSBkZWZpbmUgd2hhdCBzdHJpbmcgc2hvdWxkIGJlIHVzZWQgdG8gaWRlbnRpZnkgY29kZSBzeXN0ZW0gdmVyc2lvbnMsIHRoZSByZWNvbW1lbmRhdGlvbiBpcyB0byB1c2UgdGhlIGRhdGUgKGV4cHJlc3NlZCBpbiBGSElSIGRhdGUgZm9ybWF0KSBvbiB3aGljaCB0aGF0IHZlcnNpb24gd2FzIG9mZmljaWFsbHkgcHVibGlzaGVkIGFzIHRoZSB2ZXJzaW9uIGRhdGUuXHJcbiAgICovXHJcbiAgcHVibGljIHZlcnNpb24/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgc3ltYm9sIGluIHN5bnRheCBkZWZpbmVkIGJ5IHRoZSBzeXN0ZW0uIFRoZSBzeW1ib2wgbWF5IGJlIGEgcHJlZGVmaW5lZCBjb2RlIG9yIGFuIGV4cHJlc3Npb24gaW4gYSBzeW50YXggZGVmaW5lZCBieSB0aGUgY29kaW5nIHN5c3RlbSAoZS5nLiBwb3N0LWNvb3JkaW5hdGlvbikuXHJcbiAgICovXHJcbiAgcHVibGljIGNvZGU/OiBmaGlyLkZoaXJDb2RlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtZWFuaW5nIG9mIHRoZSBjb2RlIGluIHRoZSBzeXN0ZW0sIGZvbGxvd2luZyB0aGUgcnVsZXMgb2YgdGhlIHN5c3RlbS5cclxuICAgKi9cclxuICBwdWJsaWMgZGlzcGxheT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW1vbmdzdCBhIHNldCBvZiBhbHRlcm5hdGl2ZXMsIGEgZGlyZWN0bHkgY2hvc2VuIGNvZGUgaXMgdGhlIG1vc3QgYXBwcm9wcmlhdGUgc3RhcnRpbmcgcG9pbnQgZm9yIG5ldyB0cmFuc2xhdGlvbnMuIFRoZXJlIGlzIHNvbWUgYW1iaWd1aXR5IGFib3V0IHdoYXQgZXhhY3RseSAnZGlyZWN0bHkgY2hvc2VuJyBpbXBsaWVzLCBhbmQgdHJhZGluZyBwYXJ0bmVyIGFncmVlbWVudCBtYXkgYmUgbmVlZGVkIHRvIGNsYXJpZnkgdGhlIHVzZSBvZiB0aGlzIGVsZW1lbnQgYW5kIGl0cyBjb25zZXF1ZW5jZXMgbW9yZSBjb21wbGV0ZWx5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1c2VyU2VsZWN0ZWQ/OiBmaGlyLkZoaXJCb29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBDb2RpbmcgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxDb2RpbmdBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnc3lzdGVtJ10pIHsgdGhpcy5zeXN0ZW0gPSBuZXcgZmhpci5GaGlyVXJpKHt2YWx1ZTogc291cmNlLnN5c3RlbX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3lzdGVtJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3lzdGVtKSB7IHRoaXMuc3lzdGVtLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N5c3RlbSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN5c3RlbSA9IG5ldyBmaGlyLkZoaXJVcmkoc291cmNlLl9zeXN0ZW0gYXMgUGFydGlhbDxmaGlyLkZoaXJVcmlBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3ZlcnNpb24nXSkgeyB0aGlzLnZlcnNpb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnZlcnNpb259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3ZlcnNpb24nXSkge1xyXG4gICAgICBpZiAodGhpcy52ZXJzaW9uKSB7IHRoaXMudmVyc2lvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl92ZXJzaW9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudmVyc2lvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl92ZXJzaW9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjb2RlJ10pIHsgdGhpcy5jb2RlID0gbmV3IGZoaXIuRmhpckNvZGUoe3ZhbHVlOiBzb3VyY2UuY29kZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfY29kZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvZGUpIHsgdGhpcy5jb2RlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NvZGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jb2RlID0gbmV3IGZoaXIuRmhpckNvZGUoc291cmNlLl9jb2RlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGlzcGxheSddKSB7IHRoaXMuZGlzcGxheSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZGlzcGxheX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGlzcGxheSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRpc3BsYXkpIHsgdGhpcy5kaXNwbGF5LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2Rpc3BsYXkhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kaXNwbGF5ID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Rpc3BsYXkgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3VzZXJTZWxlY3RlZCddKSB7IHRoaXMudXNlclNlbGVjdGVkID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oe3ZhbHVlOiBzb3VyY2UudXNlclNlbGVjdGVkfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ191c2VyU2VsZWN0ZWQnXSkge1xyXG4gICAgICBpZiAodGhpcy51c2VyU2VsZWN0ZWQpIHsgdGhpcy51c2VyU2VsZWN0ZWQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdXNlclNlbGVjdGVkISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudXNlclNlbGVjdGVkID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oc291cmNlLl91c2VyU2VsZWN0ZWQgYXMgUGFydGlhbDxmaGlyLkZoaXJCb29sZWFuQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnQ29kaW5nJyB9XHJcbiAgICB0aGlzLnZPUygnc3lzdGVtJyxleHApXHJcbiAgICB0aGlzLnZPUygndmVyc2lvbicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2NvZGUnLGV4cClcclxuICAgIHRoaXMudk9TKCdkaXNwbGF5JyxleHApXHJcbiAgICB0aGlzLnZPUygndXNlclNlbGVjdGVkJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=