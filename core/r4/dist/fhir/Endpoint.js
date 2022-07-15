// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Endpoint
import * as fhir from '../fhir.js';
// @ts-ignore
import { EndpointStatusVsValidation } from '../fhirValueSets/EndpointStatusVsValidation.js';
/**
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
 */
export class Endpoint extends fhir.DomainResource {
    /**
     * Default constructor for Endpoint - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Endpoint';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['status']) {
            this.status = new fhir.FhirCode({ value: source.status });
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status);
            }
        }
        if (source['connectionType']) {
            this.connectionType = new fhir.Coding(source.connectionType);
        }
        else {
            this.connectionType = null;
        }
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        if (source['_name']) {
            if (this.name) {
                this.name.addExtendedProperties(source._name);
            }
            else {
                this.name = new fhir.FhirString(source._name);
            }
        }
        if (source['managingOrganization']) {
            this.managingOrganization = new fhir.Reference(source.managingOrganization);
        }
        if (source['contact']) {
            this.contact = source.contact.map((x) => new fhir.ContactPoint(x));
        }
        else {
            this.contact = [];
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['payloadType']) {
            this.payloadType = source.payloadType.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.payloadType = [];
        }
        if (source['payloadMimeType']) {
            this.payloadMimeType = source.payloadMimeType.map((x) => new fhir.FhirCode({ value: x }));
        }
        else {
            this.payloadMimeType = [];
        }
        if (source['_payloadMimeType']) {
            source._payloadMimeType.forEach((x, i) => {
                if (this.payloadMimeType.length >= i) {
                    if (x) {
                        this.payloadMimeType[i].addExtendedProperties(x);
                    }
                }
                else {
                    if (x) {
                        this.payloadMimeType.push(new fhir.FhirCode(x));
                    }
                }
            });
        }
        if (source['address']) {
            this.address = new fhir.FhirUrl({ value: source.address });
        }
        else {
            this.address = null;
        }
        if (source['_address']) {
            if (this.address) {
                this.address.addExtendedProperties(source._address);
            }
            else {
                this.address = new fhir.FhirUrl(source._address);
            }
        }
        if (source['header']) {
            this.header = source.header.map((x) => new fhir.FhirString({ value: x }));
        }
        else {
            this.header = [];
        }
        if (source['_header']) {
            source._header.forEach((x, i) => {
                if (this.header.length >= i) {
                    if (x) {
                        this.header[i].addExtendedProperties(x);
                    }
                }
                else {
                    if (x) {
                        this.header.push(new fhir.FhirString(x));
                    }
                }
            });
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Endpoint';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vRSV('status', exp, 'EndpointStatus', EndpointStatusVsValidation, 'r');
        this.vRS('connectionType', exp);
        this.vOS('name', exp);
        this.vOS('managingOrganization', exp);
        this.vOA('contact', exp);
        this.vOS('period', exp);
        this.vRA('payloadType', exp);
        this.vOA('payloadMimeType', exp);
        this.vRS('address', exp);
        this.vOA('header', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Endpoint._fts_dataType = 'Endpoint';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5kcG9pbnQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0VuZHBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUUxQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUluQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFrRjVGOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFFBQVMsU0FBUSxJQUFJLENBQUMsY0FBYztJQXdEL0M7O09BRUc7SUFDSCxZQUFZLFNBQStCLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3JGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7UUFDL0IsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2hHO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUF5QixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3JHO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUs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dkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQTVIRDs7R0FFRztBQUM2QixzQkFBYSxHQUFVLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogRW5kcG9pbnRcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEVuZHBvaW50U3RhdHVzQ29kZXMsICBFbmRwb2ludFN0YXR1c0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9FbmRwb2ludFN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBFbmRwb2ludFN0YXR1c1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRW5kcG9pbnRTdGF0dXNWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEVuZHBvaW50Q29ubmVjdGlvblR5cGVDb2RlcywgIEVuZHBvaW50Q29ubmVjdGlvblR5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRW5kcG9pbnRDb25uZWN0aW9uVHlwZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBFbmRwb2ludENvbm5lY3Rpb25UeXBlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9FbmRwb2ludENvbm5lY3Rpb25UeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEVuZHBvaW50IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEVuZHBvaW50QXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiRW5kcG9pbnRcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllciBmb3IgdGhlIG9yZ2FuaXphdGlvbiB0aGF0IGlzIHVzZWQgdG8gaWRlbnRpZnkgdGhlIGVuZHBvaW50IGFjcm9zcyBtdWx0aXBsZSBkaXNwYXJhdGUgc3lzdGVtcy5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIGVuZHBvaW50IGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPEVuZHBvaW50U3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEVuZHBvaW50LnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEZvciBhZGRpdGlvbmFsIGNvbm5lY3Rpdml0eSBkZXRhaWxzIGZvciB0aGUgcHJvdG9jb2wsIGV4dGVuc2lvbnMgd2lsbCBiZSB1c2VkIGF0IHRoaXMgcG9pbnQsIGFzIGluIHRoZSBYRFMgZXhhbXBsZS5cclxuICAgKi9cclxuICBjb25uZWN0aW9uVHlwZTogZmhpci5Db2RpbmdBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogQSBmcmllbmRseSBuYW1lIHRoYXQgdGhpcyBlbmRwb2ludCBjYW4gYmUgcmVmZXJyZWQgdG8gd2l0aC5cclxuICAgKi9cclxuICBuYW1lPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEVuZHBvaW50Lm5hbWVcclxuICAgKi9cclxuICBfbmFtZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBub3QgdHlwaWNhbGx5IHVzZWQgd2hlbiBzZWFyY2hpbmcgZm9yIEVuZHBvaW50IHJlc291cmNlcyBmb3IgdXNhZ2UuIFRoZSB0eXBpY2FsIHVzYWdlIGlzIHZpYSB0aGUgcmVmZXJlbmNlIGZyb20gYW4gYXBwbGljYWJsZSBPcmdhbml6YXRpb24vTG9jYXRpb24vUHJhY3RpdGlvbmVyIHJlc291cmNlLCB3aGljaCBpcyB3aGVyZSB0aGUgY29udGV4dCBpcyBwcm92aWRlZC4gTXVsdGlwbGUgTG9jYXRpb25zIG1heSByZWZlcmVuY2UgYSBzaW5nbGUgZW5kcG9pbnQsIGFuZCBkb24ndCBoYXZlIHRvIGJlIHdpdGhpbiB0aGUgc2FtZSBvcmdhbml6YXRpb24gcmVzb3VyY2UsIGJ1dCBtb3N0IGxpa2VseSB3aXRoaW4gdGhlIHNhbWUgb3JnYW5pemF0aW9uYWwgaGllcmFyY2h5LlxyXG4gICAqL1xyXG4gIG1hbmFnaW5nT3JnYW5pemF0aW9uPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBDb250YWN0IGRldGFpbHMgZm9yIGEgaHVtYW4gdG8gY29udGFjdCBhYm91dCB0aGUgc3Vic2NyaXB0aW9uLiBUaGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3IgdHJvdWJsZXNob290aW5nLlxyXG4gICAqL1xyXG4gIGNvbnRhY3Q/OiBmaGlyLkNvbnRhY3RQb2ludEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGludGVydmFsIGR1cmluZyB3aGljaCB0aGUgZW5kcG9pbnQgaXMgZXhwZWN0ZWQgdG8gYmUgb3BlcmF0aW9uYWwuXHJcbiAgICovXHJcbiAgcGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcGF5bG9hZEZvcm1hdCBkZXNjcmliZXMgdGhlIHNlcmlhbGl6YXRpb24gZm9ybWF0IG9mIHRoZSBkYXRhLCB3aGVyZSB0aGUgcGF5bG9hZFR5cGUgaW5kaWNhdGVzIHRoZSBzcGVjaWZpYyBkb2N1bWVudC9zY2hlbWEgdGhhdCBpcyBiZWluZyB0cmFuc2ZlcnJlZDsgZS5nLiBEaXNjaGFyZ2VTdW1tYXJ5IG9yIENhcmVQbGFuLlxyXG4gICAqL1xyXG4gIHBheWxvYWRUeXBlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFNlbmRpbmcgdGhlIHBheWxvYWQgaGFzIG9idmlvdXMgc2VjdXJpdHkgY29uc2VxdWVuY2VzLiBUaGUgc2VydmVyIGlzIHJlc3BvbnNpYmxlIGZvciBlbnN1cmluZyB0aGF0IHRoZSBjb250ZW50IGlzIGFwcHJvcHJpYXRlbHkgc2VjdXJlZC5cclxuICAgKi9cclxuICBwYXlsb2FkTWltZVR5cGU/OiBmaGlyLkZoaXJDb2RlW118KHN0cmluZ3xudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRW5kcG9pbnQucGF5bG9hZE1pbWVUeXBlXHJcbiAgICovXHJcbiAgX3BheWxvYWRNaW1lVHlwZT86KGZoaXIuRmhpckVsZW1lbnRBcmdzfG51bGwpW107XHJcbiAgLyoqXHJcbiAgICogRm9yIHJlc3QtaG9vaywgYW5kIHdlYnNvY2tldCwgdGhlIGVuZC1wb2ludCBtdXN0IGJlIGFuIGh0dHA6IG9yIGh0dHBzOiBVUkw7IGZvciBlbWFpbCwgYSBtYWlsdG86IHVybCwgZm9yIHNtcywgYSB0ZWw6IHVybCwgYW5kIGZvciBtZXNzYWdlIHRoZSBlbmRwb2ludCBjYW4gYmUgaW4gYW55IGZvcm0gb2YgdXJsIHRoZSBzZXJ2ZXIgdW5kZXJzdGFuZHMgKHVzdWFsbHksIGh0dHA6IG9yIG1sbHA6KS4gVGhlIFVSSSBpcyBhbGxvd2VkIHRvIGJlIHJlbGF0aXZlOyBpbiB3aGljaCBjYXNlLCBpdCBpcyByZWxhdGl2ZSB0byB0aGUgc2VydmVyIGVuZC1wb2ludCAoc2luY2UgdGhlcmUgbWF5IGJlIG1vcmUgdGhhbiBvbmUsIGNsaWVudHMgc2hvdWxkIGF2b2lkIHVzaW5nIHJlbGF0aXZlIFVSSXMpXHJcbiAgICogVGhpcyBhZGRyZXNzIHdpbGwgYmUgdG8gdGhlIHNlcnZpY2UgYmFzZSwgd2l0aG91dCBhbnkgcGFyYW1ldGVycywgb3Igc3ViLXNlcnZpY2VzIG9yIHJlc291cmNlcyB0YWNrZWQgb24uXHJcbiAgICogRS5nLiBmb3IgYSBXQURPLVJTIGVuZHBvaW50LCB0aGUgdXJsIHNob3VsZCBiZSBcImh0dHBzOi8vcGFjcy5ob3NwaXRhbC5vcmcvd2Fkby1yc1wiXHJcbiAgICogYW5kIG5vdCBcImh0dHBzOi8vcGFjcy5ob3NwaXRhbC5vcmcvd2Fkby1ycy9zdHVkaWVzLzEuMi4yNTAuMS41OS40MDIxMS4xMjM0NTY3OC42Nzg5MTAvc2VyaWVzLzEuMi4yNTAuMS41OS40MDIxMS43ODkwMDEyNzYuMTQ1NTYxNzIuNjc3ODkvaW5zdGFuY2VzLy4uLlwiLlxyXG4gICAqL1xyXG4gIGFkZHJlc3M6IGZoaXIuRmhpclVybHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFbmRwb2ludC5hZGRyZXNzXHJcbiAgICovXHJcbiAgX2FkZHJlc3M/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEV4YWN0bHkgd2hhdCB0aGVzZSBtZWFuIGRlcGVuZHMgb24gdGhlIGNoYW5uZWwgdHlwZS4gVGhlIGNhbiBjb252ZXkgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiB0byB0aGUgcmVjaXBpZW50IGFuZC9vciBtZWV0IHNlY3VyaXR5IHJlcXVpcmVtZW50cy5cclxuICAgKi9cclxuICBoZWFkZXI/OiBmaGlyLkZoaXJTdHJpbmdbXXwoc3RyaW5nfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFbmRwb2ludC5oZWFkZXJcclxuICAgKi9cclxuICBfaGVhZGVyPzooZmhpci5GaGlyRWxlbWVudEFyZ3N8bnVsbClbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSB0ZWNobmljYWwgZGV0YWlscyBvZiBhbiBlbmRwb2ludCB0aGF0IGNhbiBiZSB1c2VkIGZvciBlbGVjdHJvbmljIHNlcnZpY2VzLCBzdWNoIGFzIGZvciB3ZWIgc2VydmljZXMgcHJvdmlkaW5nIFhEUy5iIG9yIGEgUkVTVCBlbmRwb2ludCBmb3IgYW5vdGhlciBGSElSIHNlcnZlci4gVGhpcyBtYXkgaW5jbHVkZSBhbnkgc2VjdXJpdHkgY29udGV4dCBpbmZvcm1hdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBFbmRwb2ludCBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRW5kcG9pbnQnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiRW5kcG9pbnRcIjtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVyIGZvciB0aGUgb3JnYW5pemF0aW9uIHRoYXQgaXMgdXNlZCB0byBpZGVudGlmeSB0aGUgZW5kcG9pbnQgYWNyb3NzIG11bHRpcGxlIGRpc3BhcmF0ZSBzeXN0ZW1zLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIGVuZHBvaW50IGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1czogZmhpci5GaGlyQ29kZTxFbmRwb2ludFN0YXR1c0NvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEZvciBhZGRpdGlvbmFsIGNvbm5lY3Rpdml0eSBkZXRhaWxzIGZvciB0aGUgcHJvdG9jb2wsIGV4dGVuc2lvbnMgd2lsbCBiZSB1c2VkIGF0IHRoaXMgcG9pbnQsIGFzIGluIHRoZSBYRFMgZXhhbXBsZS5cclxuICAgKi9cclxuICBwdWJsaWMgY29ubmVjdGlvblR5cGU6IGZoaXIuQ29kaW5nfG51bGw7XHJcbiAgLyoqXHJcbiAgICogQSBmcmllbmRseSBuYW1lIHRoYXQgdGhpcyBlbmRwb2ludCBjYW4gYmUgcmVmZXJyZWQgdG8gd2l0aC5cclxuICAgKi9cclxuICBwdWJsaWMgbmFtZT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBub3QgdHlwaWNhbGx5IHVzZWQgd2hlbiBzZWFyY2hpbmcgZm9yIEVuZHBvaW50IHJlc291cmNlcyBmb3IgdXNhZ2UuIFRoZSB0eXBpY2FsIHVzYWdlIGlzIHZpYSB0aGUgcmVmZXJlbmNlIGZyb20gYW4gYXBwbGljYWJsZSBPcmdhbml6YXRpb24vTG9jYXRpb24vUHJhY3RpdGlvbmVyIHJlc291cmNlLCB3aGljaCBpcyB3aGVyZSB0aGUgY29udGV4dCBpcyBwcm92aWRlZC4gTXVsdGlwbGUgTG9jYXRpb25zIG1heSByZWZlcmVuY2UgYSBzaW5nbGUgZW5kcG9pbnQsIGFuZCBkb24ndCBoYXZlIHRvIGJlIHdpdGhpbiB0aGUgc2FtZSBvcmdhbml6YXRpb24gcmVzb3VyY2UsIGJ1dCBtb3N0IGxpa2VseSB3aXRoaW4gdGhlIHNhbWUgb3JnYW5pemF0aW9uYWwgaGllcmFyY2h5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBtYW5hZ2luZ09yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBDb250YWN0IGRldGFpbHMgZm9yIGEgaHVtYW4gdG8gY29udGFjdCBhYm91dCB0aGUgc3Vic2NyaXB0aW9uLiBUaGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3IgdHJvdWJsZXNob290aW5nLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb250YWN0OiBmaGlyLkNvbnRhY3RQb2ludFtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpbnRlcnZhbCBkdXJpbmcgd2hpY2ggdGhlIGVuZHBvaW50IGlzIGV4cGVjdGVkIHRvIGJlIG9wZXJhdGlvbmFsLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBheWxvYWRGb3JtYXQgZGVzY3JpYmVzIHRoZSBzZXJpYWxpemF0aW9uIGZvcm1hdCBvZiB0aGUgZGF0YSwgd2hlcmUgdGhlIHBheWxvYWRUeXBlIGluZGljYXRlcyB0aGUgc3BlY2lmaWMgZG9jdW1lbnQvc2NoZW1hIHRoYXQgaXMgYmVpbmcgdHJhbnNmZXJyZWQ7IGUuZy4gRGlzY2hhcmdlU3VtbWFyeSBvciBDYXJlUGxhbi5cclxuICAgKi9cclxuICBwdWJsaWMgcGF5bG9hZFR5cGU6IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogU2VuZGluZyB0aGUgcGF5bG9hZCBoYXMgb2J2aW91cyBzZWN1cml0eSBjb25zZXF1ZW5jZXMuIFRoZSBzZXJ2ZXIgaXMgcmVzcG9uc2libGUgZm9yIGVuc3VyaW5nIHRoYXQgdGhlIGNvbnRlbnQgaXMgYXBwcm9wcmlhdGVseSBzZWN1cmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwYXlsb2FkTWltZVR5cGU6IGZoaXIuRmhpckNvZGVbXTtcclxuICAvKipcclxuICAgKiBGb3IgcmVzdC1ob29rLCBhbmQgd2Vic29ja2V0LCB0aGUgZW5kLXBvaW50IG11c3QgYmUgYW4gaHR0cDogb3IgaHR0cHM6IFVSTDsgZm9yIGVtYWlsLCBhIG1haWx0bzogdXJsLCBmb3Igc21zLCBhIHRlbDogdXJsLCBhbmQgZm9yIG1lc3NhZ2UgdGhlIGVuZHBvaW50IGNhbiBiZSBpbiBhbnkgZm9ybSBvZiB1cmwgdGhlIHNlcnZlciB1bmRlcnN0YW5kcyAodXN1YWxseSwgaHR0cDogb3IgbWxscDopLiBUaGUgVVJJIGlzIGFsbG93ZWQgdG8gYmUgcmVsYXRpdmU7IGluIHdoaWNoIGNhc2UsIGl0IGlzIHJlbGF0aXZlIHRvIHRoZSBzZXJ2ZXIgZW5kLXBvaW50IChzaW5jZSB0aGVyZSBtYXkgYmUgbW9yZSB0aGFuIG9uZSwgY2xpZW50cyBzaG91bGQgYXZvaWQgdXNpbmcgcmVsYXRpdmUgVVJJcylcclxuICAgKiBUaGlzIGFkZHJlc3Mgd2lsbCBiZSB0byB0aGUgc2VydmljZSBiYXNlLCB3aXRob3V0IGFueSBwYXJhbWV0ZXJzLCBvciBzdWItc2VydmljZXMgb3IgcmVzb3VyY2VzIHRhY2tlZCBvbi5cclxuICAgKiBFLmcuIGZvciBhIFdBRE8tUlMgZW5kcG9pbnQsIHRoZSB1cmwgc2hvdWxkIGJlIFwiaHR0cHM6Ly9wYWNzLmhvc3BpdGFsLm9yZy93YWRvLXJzXCJcclxuICAgKiBhbmQgbm90IFwiaHR0cHM6Ly9wYWNzLmhvc3BpdGFsLm9yZy93YWRvLXJzL3N0dWRpZXMvMS4yLjI1MC4xLjU5LjQwMjExLjEyMzQ1Njc4LjY3ODkxMC9zZXJpZXMvMS4yLjI1MC4xLjU5LjQwMjExLjc4OTAwMTI3Ni4xNDU1NjE3Mi42Nzc4OS9pbnN0YW5jZXMvLi4uXCIuXHJcbiAgICovXHJcbiAgcHVibGljIGFkZHJlc3M6IGZoaXIuRmhpclVybHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEV4YWN0bHkgd2hhdCB0aGVzZSBtZWFuIGRlcGVuZHMgb24gdGhlIGNoYW5uZWwgdHlwZS4gVGhlIGNhbiBjb252ZXkgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiB0byB0aGUgcmVjaXBpZW50IGFuZC9vciBtZWV0IHNlY3VyaXR5IHJlcXVpcmVtZW50cy5cclxuICAgKi9cclxuICBwdWJsaWMgaGVhZGVyOiBmaGlyLkZoaXJTdHJpbmdbXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBFbmRwb2ludCAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEVuZHBvaW50QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ0VuZHBvaW50JztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8RW5kcG9pbnRTdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdHVzfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMpIHsgdGhpcy5zdGF0dXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8RW5kcG9pbnRTdGF0dXNDb2RlVHlwZT4oc291cmNlLl9zdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2Nvbm5lY3Rpb25UeXBlJ10pIHsgdGhpcy5jb25uZWN0aW9uVHlwZSA9IG5ldyBmaGlyLkNvZGluZyhzb3VyY2UuY29ubmVjdGlvblR5cGUpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb25uZWN0aW9uVHlwZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ25hbWUnXSkgeyB0aGlzLm5hbWUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLm5hbWV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX25hbWUnXSkge1xyXG4gICAgICBpZiAodGhpcy5uYW1lKSB7IHRoaXMubmFtZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9uYW1lISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubmFtZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9uYW1lIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydtYW5hZ2luZ09yZ2FuaXphdGlvbiddKSB7IHRoaXMubWFuYWdpbmdPcmdhbml6YXRpb24gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLm1hbmFnaW5nT3JnYW5pemF0aW9uKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY29udGFjdCddKSB7IHRoaXMuY29udGFjdCA9IHNvdXJjZS5jb250YWN0Lm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29udGFjdFBvaW50KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29udGFjdCA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydwZXJpb2QnXSkgeyB0aGlzLnBlcmlvZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2UucGVyaW9kKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncGF5bG9hZFR5cGUnXSkgeyB0aGlzLnBheWxvYWRUeXBlID0gc291cmNlLnBheWxvYWRUeXBlLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucGF5bG9hZFR5cGUgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncGF5bG9hZE1pbWVUeXBlJ10pIHsgdGhpcy5wYXlsb2FkTWltZVR5cGUgPSBzb3VyY2UucGF5bG9hZE1pbWVUeXBlLm1hcCgoeCkgPT4gbmV3IGZoaXIuRmhpckNvZGUoe3ZhbHVlOiB4fSkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5wYXlsb2FkTWltZVR5cGUgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3BheWxvYWRNaW1lVHlwZSddKSB7XHJcbiAgICAgIHNvdXJjZS5fcGF5bG9hZE1pbWVUeXBlLmZvckVhY2goKHgsaSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnBheWxvYWRNaW1lVHlwZS5sZW5ndGggPj0gaSkgeyBpZiAoeCkgeyB0aGlzLnBheWxvYWRNaW1lVHlwZVtpXS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoeCk7IH0gfVxyXG4gICAgICAgIGVsc2UgeyBpZiAoeCkgeyB0aGlzLnBheWxvYWRNaW1lVHlwZS5wdXNoKG5ldyBmaGlyLkZoaXJDb2RlKHggYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlQXJncz4pKTsgfSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnYWRkcmVzcyddKSB7IHRoaXMuYWRkcmVzcyA9IG5ldyBmaGlyLkZoaXJVcmwoe3ZhbHVlOiBzb3VyY2UuYWRkcmVzc30pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5hZGRyZXNzID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2FkZHJlc3MnXSkge1xyXG4gICAgICBpZiAodGhpcy5hZGRyZXNzKSB7IHRoaXMuYWRkcmVzcy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9hZGRyZXNzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuYWRkcmVzcyA9IG5ldyBmaGlyLkZoaXJVcmwoc291cmNlLl9hZGRyZXNzIGFzIFBhcnRpYWw8Zmhpci5GaGlyVXJsQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydoZWFkZXInXSkgeyB0aGlzLmhlYWRlciA9IHNvdXJjZS5oZWFkZXIubWFwKCh4KSA9PiBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogeH0pKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaGVhZGVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ19oZWFkZXInXSkge1xyXG4gICAgICBzb3VyY2UuX2hlYWRlci5mb3JFYWNoKCh4LGkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5oZWFkZXIubGVuZ3RoID49IGkpIHsgaWYgKHgpIHsgdGhpcy5oZWFkZXJbaV0uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHgpOyB9IH1cclxuICAgICAgICBlbHNlIHsgaWYgKHgpIHsgdGhpcy5oZWFkZXIucHVzaChuZXcgZmhpci5GaGlyU3RyaW5nKHggYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPikpOyB9IH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnRW5kcG9pbnQnIH1cclxuICAgIHRoaXMudlJTKCdyZXNvdXJjZVR5cGUnLGV4cClcclxuICAgIHRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApXHJcbiAgICB0aGlzLnZSU1YoJ3N0YXR1cycsZXhwLCdFbmRwb2ludFN0YXR1cycsRW5kcG9pbnRTdGF0dXNWc1ZhbGlkYXRpb24sJ3InKVxyXG4gICAgdGhpcy52UlMoJ2Nvbm5lY3Rpb25UeXBlJyxleHApXHJcbiAgICB0aGlzLnZPUygnbmFtZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ21hbmFnaW5nT3JnYW5pemF0aW9uJyxleHApXHJcbiAgICB0aGlzLnZPQSgnY29udGFjdCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3BlcmlvZCcsZXhwKVxyXG4gICAgdGhpcy52UkEoJ3BheWxvYWRUeXBlJyxleHApXHJcbiAgICB0aGlzLnZPQSgncGF5bG9hZE1pbWVUeXBlJyxleHApXHJcbiAgICB0aGlzLnZSUygnYWRkcmVzcycsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2hlYWRlcicsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19