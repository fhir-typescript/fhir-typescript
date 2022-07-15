// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: MarketingStatus
import * as fhir from '../fhir.js';
/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export class MarketingStatus extends fhir.BackboneElement {
    /**
     * Default constructor for MarketingStatus - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['country']) {
            this.country = new fhir.CodeableConcept(source.country);
        }
        if (source['jurisdiction']) {
            this.jurisdiction = new fhir.CodeableConcept(source.jurisdiction);
        }
        if (source['status']) {
            this.status = new fhir.CodeableConcept(source.status);
        }
        else {
            this.status = null;
        }
        if (source['dateRange']) {
            this.dateRange = new fhir.Period(source.dateRange);
        }
        if (source['restoreDate']) {
            this.restoreDate = new fhir.FhirDateTime({ value: source.restoreDate });
        }
        if (source['_restoreDate']) {
            if (this.restoreDate) {
                this.restoreDate.addExtendedProperties(source._restoreDate);
            }
            else {
                this.restoreDate = new fhir.FhirDateTime(source._restoreDate);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'MarketingStatus';
        }
        this.vOS('country', exp);
        this.vOS('jurisdiction', exp);
        this.vRS('status', exp);
        this.vOS('dateRange', exp);
        this.vOS('restoreDate', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
MarketingStatus._fts_dataType = 'MarketingStatus';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFya2V0aW5nU3RhdHVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9NYXJrZXRpbmdTdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBZ0NuQzs7R0FFRztBQUNILE1BQU0sT0FBTyxlQUFnQixTQUFRLElBQUksQ0FBQyxlQUFlO0lBeUJ2RDs7T0FFRztJQUNILFlBQVksU0FBc0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDNUYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQ25GLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQUU7UUFDbEcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FBRTthQUMzRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDNUIsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FBRTtRQUNoRixJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDckcsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUFFLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFlBQWEsQ0FBQyxDQUFDO2FBQUU7aUJBQ2xGO2dCQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxZQUE4QyxDQUFDLENBQUM7YUFBRTtTQUMxRztJQUNILENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQTtTQUFFO1FBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBcEREOztHQUVHO0FBQzZCLDZCQUFhLEdBQVUsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBNYXJrZXRpbmdTdGF0dXNcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgTWFya2V0aW5nU3RhdHVzIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtldGluZ1N0YXR1c0FyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBjb3VudHJ5IGluIHdoaWNoIHRoZSBtYXJrZXRpbmcgYXV0aG9yaXNhdGlvbiBoYXMgYmVlbiBncmFudGVkIHNoYWxsIGJlIHNwZWNpZmllZCBJdCBzaG91bGQgYmUgc3BlY2lmaWVkIHVzaW5nIHRoZSBJU08gMzE2NiDigJEgMSBhbHBoYS0yIGNvZGUgZWxlbWVudHMuXHJcbiAgICovXHJcbiAgY291bnRyeT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlcmUgYSBNZWRpY2luZXMgUmVndWxhdG9yeSBBZ2VuY3kgaGFzIGdyYW50ZWQgYSBtYXJrZXRpbmcgYXV0aG9yaXNhdGlvbiBmb3Igd2hpY2ggc3BlY2lmaWMgcHJvdmlzaW9ucyB3aXRoaW4gYSBqdXJpc2RpY3Rpb24gYXBwbHksIHRoZSBqdXJpc2RpY3Rpb24gY2FuIGJlIHNwZWNpZmllZCB1c2luZyBhbiBhcHByb3ByaWF0ZSBjb250cm9sbGVkIHRlcm1pbm9sb2d5IFRoZSBjb250cm9sbGVkIHRlcm0gYW5kIHRoZSBjb250cm9sbGVkIHRlcm0gaWRlbnRpZmllciBzaGFsbCBiZSBzcGVjaWZpZWQuXHJcbiAgICovXHJcbiAganVyaXNkaWN0aW9uPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGF0dHJpYnV0ZSBwcm92aWRlcyBpbmZvcm1hdGlvbiBvbiB0aGUgc3RhdHVzIG9mIHRoZSBtYXJrZXRpbmcgb2YgdGhlIG1lZGljaW5hbCBwcm9kdWN0IFNlZSBJU08vVFMgMjA0NDMgZm9yIG1vcmUgaW5mb3JtYXRpb24gYW5kIGV4YW1wbGVzLlxyXG4gICAqL1xyXG4gIHN0YXR1czogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgd2hlbiB0aGUgTWVkaWNpbmFsIFByb2R1Y3QgaXMgcGxhY2VkIG9uIHRoZSBtYXJrZXQgYnkgdGhlIE1hcmtldGluZyBBdXRob3Jpc2F0aW9uIEhvbGRlciAob3Igd2hlcmUgYXBwbGljYWJsZSwgdGhlIG1hbnVmYWN0dXJlci9kaXN0cmlidXRvcikgaW4gYSBjb3VudHJ5IGFuZC9vciBqdXJpc2RpY3Rpb24gc2hhbGwgYmUgcHJvdmlkZWQgQSBjb21wbGV0ZSBkYXRlIGNvbnNpc3Rpbmcgb2YgZGF5LCBtb250aCBhbmQgeWVhciBzaGFsbCBiZSBzcGVjaWZpZWQgdXNpbmcgdGhlIElTTyA4NjAxIGRhdGUgZm9ybWF0IE5PVEUg4oCcUGxhY2VkIG9uIHRoZSBtYXJrZXTigJ0gcmVmZXJzIHRvIHRoZSByZWxlYXNlIG9mIHRoZSBNZWRpY2luYWwgUHJvZHVjdCBpbnRvIHRoZSBkaXN0cmlidXRpb24gY2hhaW4uXHJcbiAgICovXHJcbiAgZGF0ZVJhbmdlPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB3aGVuIHRoZSBNZWRpY2luYWwgUHJvZHVjdCBpcyBwbGFjZWQgb24gdGhlIG1hcmtldCBieSB0aGUgTWFya2V0aW5nIEF1dGhvcmlzYXRpb24gSG9sZGVyIChvciB3aGVyZSBhcHBsaWNhYmxlLCB0aGUgbWFudWZhY3R1cmVyL2Rpc3RyaWJ1dG9yKSBpbiBhIGNvdW50cnkgYW5kL29yIGp1cmlzZGljdGlvbiBzaGFsbCBiZSBwcm92aWRlZCBBIGNvbXBsZXRlIGRhdGUgY29uc2lzdGluZyBvZiBkYXksIG1vbnRoIGFuZCB5ZWFyIHNoYWxsIGJlIHNwZWNpZmllZCB1c2luZyB0aGUgSVNPIDg2MDEgZGF0ZSBmb3JtYXQgTk9URSDigJxQbGFjZWQgb24gdGhlIG1hcmtldOKAnSByZWZlcnMgdG8gdGhlIHJlbGVhc2Ugb2YgdGhlIE1lZGljaW5hbCBQcm9kdWN0IGludG8gdGhlIGRpc3RyaWJ1dGlvbiBjaGFpbi5cclxuICAgKi9cclxuICByZXN0b3JlRGF0ZT86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1hcmtldGluZ1N0YXR1cy5yZXN0b3JlRGF0ZVxyXG4gICAqL1xyXG4gIF9yZXN0b3JlRGF0ZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgbWFya2V0aW5nIHN0YXR1cyBkZXNjcmliZXMgdGhlIGRhdGUgd2hlbiBhIG1lZGljaW5hbCBwcm9kdWN0IGlzIGFjdHVhbGx5IHB1dCBvbiB0aGUgbWFya2V0IG9yIHRoZSBkYXRlIGFzIG9mIHdoaWNoIGl0IGlzIG5vIGxvbmdlciBhdmFpbGFibGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWFya2V0aW5nU3RhdHVzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnTWFya2V0aW5nU3RhdHVzJztcclxuICAvKipcclxuICAgKiBUaGUgY291bnRyeSBpbiB3aGljaCB0aGUgbWFya2V0aW5nIGF1dGhvcmlzYXRpb24gaGFzIGJlZW4gZ3JhbnRlZCBzaGFsbCBiZSBzcGVjaWZpZWQgSXQgc2hvdWxkIGJlIHNwZWNpZmllZCB1c2luZyB0aGUgSVNPIDMxNjYg4oCRIDEgYWxwaGEtMiBjb2RlIGVsZW1lbnRzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb3VudHJ5PzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdoZXJlIGEgTWVkaWNpbmVzIFJlZ3VsYXRvcnkgQWdlbmN5IGhhcyBncmFudGVkIGEgbWFya2V0aW5nIGF1dGhvcmlzYXRpb24gZm9yIHdoaWNoIHNwZWNpZmljIHByb3Zpc2lvbnMgd2l0aGluIGEganVyaXNkaWN0aW9uIGFwcGx5LCB0aGUganVyaXNkaWN0aW9uIGNhbiBiZSBzcGVjaWZpZWQgdXNpbmcgYW4gYXBwcm9wcmlhdGUgY29udHJvbGxlZCB0ZXJtaW5vbG9neSBUaGUgY29udHJvbGxlZCB0ZXJtIGFuZCB0aGUgY29udHJvbGxlZCB0ZXJtIGlkZW50aWZpZXIgc2hhbGwgYmUgc3BlY2lmaWVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBqdXJpc2RpY3Rpb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBhdHRyaWJ1dGUgcHJvdmlkZXMgaW5mb3JtYXRpb24gb24gdGhlIHN0YXR1cyBvZiB0aGUgbWFya2V0aW5nIG9mIHRoZSBtZWRpY2luYWwgcHJvZHVjdCBTZWUgSVNPL1RTIDIwNDQzIGZvciBtb3JlIGluZm9ybWF0aW9uIGFuZCBleGFtcGxlcy5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzOiBmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHdoZW4gdGhlIE1lZGljaW5hbCBQcm9kdWN0IGlzIHBsYWNlZCBvbiB0aGUgbWFya2V0IGJ5IHRoZSBNYXJrZXRpbmcgQXV0aG9yaXNhdGlvbiBIb2xkZXIgKG9yIHdoZXJlIGFwcGxpY2FibGUsIHRoZSBtYW51ZmFjdHVyZXIvZGlzdHJpYnV0b3IpIGluIGEgY291bnRyeSBhbmQvb3IganVyaXNkaWN0aW9uIHNoYWxsIGJlIHByb3ZpZGVkIEEgY29tcGxldGUgZGF0ZSBjb25zaXN0aW5nIG9mIGRheSwgbW9udGggYW5kIHllYXIgc2hhbGwgYmUgc3BlY2lmaWVkIHVzaW5nIHRoZSBJU08gODYwMSBkYXRlIGZvcm1hdCBOT1RFIOKAnFBsYWNlZCBvbiB0aGUgbWFya2V04oCdIHJlZmVycyB0byB0aGUgcmVsZWFzZSBvZiB0aGUgTWVkaWNpbmFsIFByb2R1Y3QgaW50byB0aGUgZGlzdHJpYnV0aW9uIGNoYWluLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkYXRlUmFuZ2U/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgd2hlbiB0aGUgTWVkaWNpbmFsIFByb2R1Y3QgaXMgcGxhY2VkIG9uIHRoZSBtYXJrZXQgYnkgdGhlIE1hcmtldGluZyBBdXRob3Jpc2F0aW9uIEhvbGRlciAob3Igd2hlcmUgYXBwbGljYWJsZSwgdGhlIG1hbnVmYWN0dXJlci9kaXN0cmlidXRvcikgaW4gYSBjb3VudHJ5IGFuZC9vciBqdXJpc2RpY3Rpb24gc2hhbGwgYmUgcHJvdmlkZWQgQSBjb21wbGV0ZSBkYXRlIGNvbnNpc3Rpbmcgb2YgZGF5LCBtb250aCBhbmQgeWVhciBzaGFsbCBiZSBzcGVjaWZpZWQgdXNpbmcgdGhlIElTTyA4NjAxIGRhdGUgZm9ybWF0IE5PVEUg4oCcUGxhY2VkIG9uIHRoZSBtYXJrZXTigJ0gcmVmZXJzIHRvIHRoZSByZWxlYXNlIG9mIHRoZSBNZWRpY2luYWwgUHJvZHVjdCBpbnRvIHRoZSBkaXN0cmlidXRpb24gY2hhaW4uXHJcbiAgICovXHJcbiAgcHVibGljIHJlc3RvcmVEYXRlPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIE1hcmtldGluZ1N0YXR1cyAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPE1hcmtldGluZ1N0YXR1c0FyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydjb3VudHJ5J10pIHsgdGhpcy5jb3VudHJ5ID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5jb3VudHJ5KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnanVyaXNkaWN0aW9uJ10pIHsgdGhpcy5qdXJpc2RpY3Rpb24gPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmp1cmlzZGljdGlvbik7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5zdGF0dXMpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydkYXRlUmFuZ2UnXSkgeyB0aGlzLmRhdGVSYW5nZSA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2UuZGF0ZVJhbmdlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVzdG9yZURhdGUnXSkgeyB0aGlzLnJlc3RvcmVEYXRlID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLnJlc3RvcmVEYXRlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19yZXN0b3JlRGF0ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnJlc3RvcmVEYXRlKSB7IHRoaXMucmVzdG9yZURhdGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fcmVzdG9yZURhdGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5yZXN0b3JlRGF0ZSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX3Jlc3RvcmVEYXRlIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPik7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdNYXJrZXRpbmdTdGF0dXMnIH1cclxuICAgIHRoaXMudk9TKCdjb3VudHJ5JyxleHApXHJcbiAgICB0aGlzLnZPUygnanVyaXNkaWN0aW9uJyxleHApXHJcbiAgICB0aGlzLnZSUygnc3RhdHVzJyxleHApXHJcbiAgICB0aGlzLnZPUygnZGF0ZVJhbmdlJyxleHApXHJcbiAgICB0aGlzLnZPUygncmVzdG9yZURhdGUnLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==