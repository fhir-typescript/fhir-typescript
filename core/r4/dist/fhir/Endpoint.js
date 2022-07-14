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
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'Endpoint';
        }
        this.vReqS('resourceType', expression);
        this.vOptA('identifier', expression);
        this.vReqSV('status', expression, 'EndpointStatus', EndpointStatusVsValidation, 'r');
        this.vReqS('connectionType', expression);
        this.vOptS('name', expression);
        this.vOptS('managingOrganization', expression);
        this.vOptA('contact', expression);
        this.vOptS('period', expression);
        this.vReqA('payloadType', expression);
        this.vOptA('payloadMimeType', expression);
        this.vReqS('address', expression);
        this.vOptA('header', expression);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Endpoint._fts_dataType = 'Endpoint';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5kcG9pbnQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0VuZHBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUUxQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUluQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFrRjVGOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFFBQVMsU0FBUSxJQUFJLENBQUMsY0FBYztJQXdEL0M7O09BRUc7SUFDSCxZQUFZLFNBQStCLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3JGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7UUFDL0IsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2hHO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUF5QixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3JHO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUs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Q2hDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDL0IsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUE1SEQ7O0dBRUc7QUFDNkIsc0JBQWEsR0FBVSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IEVuZHBvaW50XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBFbmRwb2ludFN0YXR1c0NvZGVzLCAgRW5kcG9pbnRTdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRW5kcG9pbnRTdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRW5kcG9pbnRTdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0VuZHBvaW50U3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBFbmRwb2ludENvbm5lY3Rpb25UeXBlQ29kZXMsICBFbmRwb2ludENvbm5lY3Rpb25UeXBlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0VuZHBvaW50Q29ubmVjdGlvblR5cGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRW5kcG9pbnRDb25uZWN0aW9uVHlwZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRW5kcG9pbnRDb25uZWN0aW9uVHlwZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBFbmRwb2ludCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBFbmRwb2ludEFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkVuZHBvaW50XCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXIgZm9yIHRoZSBvcmdhbml6YXRpb24gdGhhdCBpcyB1c2VkIHRvIGlkZW50aWZ5IHRoZSBlbmRwb2ludCBhY3Jvc3MgbXVsdGlwbGUgZGlzcGFyYXRlIHN5c3RlbXMuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgY29kZXMgdGhhdCBtYXJrIHRoZSBlbmRwb2ludCBhcyBub3QgY3VycmVudGx5IHZhbGlkLlxyXG4gICAqL1xyXG4gIHN0YXR1czogZmhpci5GaGlyQ29kZTxFbmRwb2ludFN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFbmRwb2ludC5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBGb3IgYWRkaXRpb25hbCBjb25uZWN0aXZpdHkgZGV0YWlscyBmb3IgdGhlIHByb3RvY29sLCBleHRlbnNpb25zIHdpbGwgYmUgdXNlZCBhdCB0aGlzIHBvaW50LCBhcyBpbiB0aGUgWERTIGV4YW1wbGUuXHJcbiAgICovXHJcbiAgY29ubmVjdGlvblR5cGU6IGZoaXIuQ29kaW5nQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIEEgZnJpZW5kbHkgbmFtZSB0aGF0IHRoaXMgZW5kcG9pbnQgY2FuIGJlIHJlZmVycmVkIHRvIHdpdGguXHJcbiAgICovXHJcbiAgbmFtZT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFbmRwb2ludC5uYW1lXHJcbiAgICovXHJcbiAgX25hbWU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgcHJvcGVydHkgaXMgbm90IHR5cGljYWxseSB1c2VkIHdoZW4gc2VhcmNoaW5nIGZvciBFbmRwb2ludCByZXNvdXJjZXMgZm9yIHVzYWdlLiBUaGUgdHlwaWNhbCB1c2FnZSBpcyB2aWEgdGhlIHJlZmVyZW5jZSBmcm9tIGFuIGFwcGxpY2FibGUgT3JnYW5pemF0aW9uL0xvY2F0aW9uL1ByYWN0aXRpb25lciByZXNvdXJjZSwgd2hpY2ggaXMgd2hlcmUgdGhlIGNvbnRleHQgaXMgcHJvdmlkZWQuIE11bHRpcGxlIExvY2F0aW9ucyBtYXkgcmVmZXJlbmNlIGEgc2luZ2xlIGVuZHBvaW50LCBhbmQgZG9uJ3QgaGF2ZSB0byBiZSB3aXRoaW4gdGhlIHNhbWUgb3JnYW5pemF0aW9uIHJlc291cmNlLCBidXQgbW9zdCBsaWtlbHkgd2l0aGluIHRoZSBzYW1lIG9yZ2FuaXphdGlvbmFsIGhpZXJhcmNoeS5cclxuICAgKi9cclxuICBtYW5hZ2luZ09yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQ29udGFjdCBkZXRhaWxzIGZvciBhIGh1bWFuIHRvIGNvbnRhY3QgYWJvdXQgdGhlIHN1YnNjcmlwdGlvbi4gVGhlIHByaW1hcnkgdXNlIG9mIHRoaXMgZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIHRyb3VibGVzaG9vdGluZy5cclxuICAgKi9cclxuICBjb250YWN0PzogZmhpci5Db250YWN0UG9pbnRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpbnRlcnZhbCBkdXJpbmcgd2hpY2ggdGhlIGVuZHBvaW50IGlzIGV4cGVjdGVkIHRvIGJlIG9wZXJhdGlvbmFsLlxyXG4gICAqL1xyXG4gIHBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBheWxvYWRGb3JtYXQgZGVzY3JpYmVzIHRoZSBzZXJpYWxpemF0aW9uIGZvcm1hdCBvZiB0aGUgZGF0YSwgd2hlcmUgdGhlIHBheWxvYWRUeXBlIGluZGljYXRlcyB0aGUgc3BlY2lmaWMgZG9jdW1lbnQvc2NoZW1hIHRoYXQgaXMgYmVpbmcgdHJhbnNmZXJyZWQ7IGUuZy4gRGlzY2hhcmdlU3VtbWFyeSBvciBDYXJlUGxhbi5cclxuICAgKi9cclxuICBwYXlsb2FkVHlwZTogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118bnVsbDtcclxuICAvKipcclxuICAgKiBTZW5kaW5nIHRoZSBwYXlsb2FkIGhhcyBvYnZpb3VzIHNlY3VyaXR5IGNvbnNlcXVlbmNlcy4gVGhlIHNlcnZlciBpcyByZXNwb25zaWJsZSBmb3IgZW5zdXJpbmcgdGhhdCB0aGUgY29udGVudCBpcyBhcHByb3ByaWF0ZWx5IHNlY3VyZWQuXHJcbiAgICovXHJcbiAgcGF5bG9hZE1pbWVUeXBlPzogZmhpci5GaGlyQ29kZVtdfChzdHJpbmd8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEVuZHBvaW50LnBheWxvYWRNaW1lVHlwZVxyXG4gICAqL1xyXG4gIF9wYXlsb2FkTWltZVR5cGU/OihmaGlyLkZoaXJFbGVtZW50QXJnc3xudWxsKVtdO1xyXG4gIC8qKlxyXG4gICAqIEZvciByZXN0LWhvb2ssIGFuZCB3ZWJzb2NrZXQsIHRoZSBlbmQtcG9pbnQgbXVzdCBiZSBhbiBodHRwOiBvciBodHRwczogVVJMOyBmb3IgZW1haWwsIGEgbWFpbHRvOiB1cmwsIGZvciBzbXMsIGEgdGVsOiB1cmwsIGFuZCBmb3IgbWVzc2FnZSB0aGUgZW5kcG9pbnQgY2FuIGJlIGluIGFueSBmb3JtIG9mIHVybCB0aGUgc2VydmVyIHVuZGVyc3RhbmRzICh1c3VhbGx5LCBodHRwOiBvciBtbGxwOikuIFRoZSBVUkkgaXMgYWxsb3dlZCB0byBiZSByZWxhdGl2ZTsgaW4gd2hpY2ggY2FzZSwgaXQgaXMgcmVsYXRpdmUgdG8gdGhlIHNlcnZlciBlbmQtcG9pbnQgKHNpbmNlIHRoZXJlIG1heSBiZSBtb3JlIHRoYW4gb25lLCBjbGllbnRzIHNob3VsZCBhdm9pZCB1c2luZyByZWxhdGl2ZSBVUklzKVxyXG4gICAqIFRoaXMgYWRkcmVzcyB3aWxsIGJlIHRvIHRoZSBzZXJ2aWNlIGJhc2UsIHdpdGhvdXQgYW55IHBhcmFtZXRlcnMsIG9yIHN1Yi1zZXJ2aWNlcyBvciByZXNvdXJjZXMgdGFja2VkIG9uLlxyXG4gICAqIEUuZy4gZm9yIGEgV0FETy1SUyBlbmRwb2ludCwgdGhlIHVybCBzaG91bGQgYmUgXCJodHRwczovL3BhY3MuaG9zcGl0YWwub3JnL3dhZG8tcnNcIlxyXG4gICAqIGFuZCBub3QgXCJodHRwczovL3BhY3MuaG9zcGl0YWwub3JnL3dhZG8tcnMvc3R1ZGllcy8xLjIuMjUwLjEuNTkuNDAyMTEuMTIzNDU2NzguNjc4OTEwL3Nlcmllcy8xLjIuMjUwLjEuNTkuNDAyMTEuNzg5MDAxMjc2LjE0NTU2MTcyLjY3Nzg5L2luc3RhbmNlcy8uLi5cIi5cclxuICAgKi9cclxuICBhZGRyZXNzOiBmaGlyLkZoaXJVcmx8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRW5kcG9pbnQuYWRkcmVzc1xyXG4gICAqL1xyXG4gIF9hZGRyZXNzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBFeGFjdGx5IHdoYXQgdGhlc2UgbWVhbiBkZXBlbmRzIG9uIHRoZSBjaGFubmVsIHR5cGUuIFRoZSBjYW4gY29udmV5IGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdG8gdGhlIHJlY2lwaWVudCBhbmQvb3IgbWVldCBzZWN1cml0eSByZXF1aXJlbWVudHMuXHJcbiAgICovXHJcbiAgaGVhZGVyPzogZmhpci5GaGlyU3RyaW5nW118KHN0cmluZ3xudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRW5kcG9pbnQuaGVhZGVyXHJcbiAgICovXHJcbiAgX2hlYWRlcj86KGZoaXIuRmhpckVsZW1lbnRBcmdzfG51bGwpW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgdGVjaG5pY2FsIGRldGFpbHMgb2YgYW4gZW5kcG9pbnQgdGhhdCBjYW4gYmUgdXNlZCBmb3IgZWxlY3Ryb25pYyBzZXJ2aWNlcywgc3VjaCBhcyBmb3Igd2ViIHNlcnZpY2VzIHByb3ZpZGluZyBYRFMuYiBvciBhIFJFU1QgZW5kcG9pbnQgZm9yIGFub3RoZXIgRkhJUiBzZXJ2ZXIuIFRoaXMgbWF5IGluY2x1ZGUgYW55IHNlY3VyaXR5IGNvbnRleHQgaW5mb3JtYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW5kcG9pbnQgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0VuZHBvaW50JztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIkVuZHBvaW50XCI7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllciBmb3IgdGhlIG9yZ2FuaXphdGlvbiB0aGF0IGlzIHVzZWQgdG8gaWRlbnRpZnkgdGhlIGVuZHBvaW50IGFjcm9zcyBtdWx0aXBsZSBkaXNwYXJhdGUgc3lzdGVtcy5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgY29kZXMgdGhhdCBtYXJrIHRoZSBlbmRwb2ludCBhcyBub3QgY3VycmVudGx5IHZhbGlkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM6IGZoaXIuRmhpckNvZGU8RW5kcG9pbnRTdGF0dXNDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBGb3IgYWRkaXRpb25hbCBjb25uZWN0aXZpdHkgZGV0YWlscyBmb3IgdGhlIHByb3RvY29sLCBleHRlbnNpb25zIHdpbGwgYmUgdXNlZCBhdCB0aGlzIHBvaW50LCBhcyBpbiB0aGUgWERTIGV4YW1wbGUuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbm5lY3Rpb25UeXBlOiBmaGlyLkNvZGluZ3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIEEgZnJpZW5kbHkgbmFtZSB0aGF0IHRoaXMgZW5kcG9pbnQgY2FuIGJlIHJlZmVycmVkIHRvIHdpdGguXHJcbiAgICovXHJcbiAgcHVibGljIG5hbWU/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgcHJvcGVydHkgaXMgbm90IHR5cGljYWxseSB1c2VkIHdoZW4gc2VhcmNoaW5nIGZvciBFbmRwb2ludCByZXNvdXJjZXMgZm9yIHVzYWdlLiBUaGUgdHlwaWNhbCB1c2FnZSBpcyB2aWEgdGhlIHJlZmVyZW5jZSBmcm9tIGFuIGFwcGxpY2FibGUgT3JnYW5pemF0aW9uL0xvY2F0aW9uL1ByYWN0aXRpb25lciByZXNvdXJjZSwgd2hpY2ggaXMgd2hlcmUgdGhlIGNvbnRleHQgaXMgcHJvdmlkZWQuIE11bHRpcGxlIExvY2F0aW9ucyBtYXkgcmVmZXJlbmNlIGEgc2luZ2xlIGVuZHBvaW50LCBhbmQgZG9uJ3QgaGF2ZSB0byBiZSB3aXRoaW4gdGhlIHNhbWUgb3JnYW5pemF0aW9uIHJlc291cmNlLCBidXQgbW9zdCBsaWtlbHkgd2l0aGluIHRoZSBzYW1lIG9yZ2FuaXphdGlvbmFsIGhpZXJhcmNoeS5cclxuICAgKi9cclxuICBwdWJsaWMgbWFuYWdpbmdPcmdhbml6YXRpb24/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQ29udGFjdCBkZXRhaWxzIGZvciBhIGh1bWFuIHRvIGNvbnRhY3QgYWJvdXQgdGhlIHN1YnNjcmlwdGlvbi4gVGhlIHByaW1hcnkgdXNlIG9mIHRoaXMgZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIHRyb3VibGVzaG9vdGluZy5cclxuICAgKi9cclxuICBwdWJsaWMgY29udGFjdDogZmhpci5Db250YWN0UG9pbnRbXTtcclxuICAvKipcclxuICAgKiBUaGUgaW50ZXJ2YWwgZHVyaW5nIHdoaWNoIHRoZSBlbmRwb2ludCBpcyBleHBlY3RlZCB0byBiZSBvcGVyYXRpb25hbC5cclxuICAgKi9cclxuICBwdWJsaWMgcGVyaW9kPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXlsb2FkRm9ybWF0IGRlc2NyaWJlcyB0aGUgc2VyaWFsaXphdGlvbiBmb3JtYXQgb2YgdGhlIGRhdGEsIHdoZXJlIHRoZSBwYXlsb2FkVHlwZSBpbmRpY2F0ZXMgdGhlIHNwZWNpZmljIGRvY3VtZW50L3NjaGVtYSB0aGF0IGlzIGJlaW5nIHRyYW5zZmVycmVkOyBlLmcuIERpc2NoYXJnZVN1bW1hcnkgb3IgQ2FyZVBsYW4uXHJcbiAgICovXHJcbiAgcHVibGljIHBheWxvYWRUeXBlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIFNlbmRpbmcgdGhlIHBheWxvYWQgaGFzIG9idmlvdXMgc2VjdXJpdHkgY29uc2VxdWVuY2VzLiBUaGUgc2VydmVyIGlzIHJlc3BvbnNpYmxlIGZvciBlbnN1cmluZyB0aGF0IHRoZSBjb250ZW50IGlzIGFwcHJvcHJpYXRlbHkgc2VjdXJlZC5cclxuICAgKi9cclxuICBwdWJsaWMgcGF5bG9hZE1pbWVUeXBlOiBmaGlyLkZoaXJDb2RlW107XHJcbiAgLyoqXHJcbiAgICogRm9yIHJlc3QtaG9vaywgYW5kIHdlYnNvY2tldCwgdGhlIGVuZC1wb2ludCBtdXN0IGJlIGFuIGh0dHA6IG9yIGh0dHBzOiBVUkw7IGZvciBlbWFpbCwgYSBtYWlsdG86IHVybCwgZm9yIHNtcywgYSB0ZWw6IHVybCwgYW5kIGZvciBtZXNzYWdlIHRoZSBlbmRwb2ludCBjYW4gYmUgaW4gYW55IGZvcm0gb2YgdXJsIHRoZSBzZXJ2ZXIgdW5kZXJzdGFuZHMgKHVzdWFsbHksIGh0dHA6IG9yIG1sbHA6KS4gVGhlIFVSSSBpcyBhbGxvd2VkIHRvIGJlIHJlbGF0aXZlOyBpbiB3aGljaCBjYXNlLCBpdCBpcyByZWxhdGl2ZSB0byB0aGUgc2VydmVyIGVuZC1wb2ludCAoc2luY2UgdGhlcmUgbWF5IGJlIG1vcmUgdGhhbiBvbmUsIGNsaWVudHMgc2hvdWxkIGF2b2lkIHVzaW5nIHJlbGF0aXZlIFVSSXMpXHJcbiAgICogVGhpcyBhZGRyZXNzIHdpbGwgYmUgdG8gdGhlIHNlcnZpY2UgYmFzZSwgd2l0aG91dCBhbnkgcGFyYW1ldGVycywgb3Igc3ViLXNlcnZpY2VzIG9yIHJlc291cmNlcyB0YWNrZWQgb24uXHJcbiAgICogRS5nLiBmb3IgYSBXQURPLVJTIGVuZHBvaW50LCB0aGUgdXJsIHNob3VsZCBiZSBcImh0dHBzOi8vcGFjcy5ob3NwaXRhbC5vcmcvd2Fkby1yc1wiXHJcbiAgICogYW5kIG5vdCBcImh0dHBzOi8vcGFjcy5ob3NwaXRhbC5vcmcvd2Fkby1ycy9zdHVkaWVzLzEuMi4yNTAuMS41OS40MDIxMS4xMjM0NTY3OC42Nzg5MTAvc2VyaWVzLzEuMi4yNTAuMS41OS40MDIxMS43ODkwMDEyNzYuMTQ1NTYxNzIuNjc3ODkvaW5zdGFuY2VzLy4uLlwiLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRyZXNzOiBmaGlyLkZoaXJVcmx8bnVsbDtcclxuICAvKipcclxuICAgKiBFeGFjdGx5IHdoYXQgdGhlc2UgbWVhbiBkZXBlbmRzIG9uIHRoZSBjaGFubmVsIHR5cGUuIFRoZSBjYW4gY29udmV5IGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdG8gdGhlIHJlY2lwaWVudCBhbmQvb3IgbWVldCBzZWN1cml0eSByZXF1aXJlbWVudHMuXHJcbiAgICovXHJcbiAgcHVibGljIGhlYWRlcjogZmhpci5GaGlyU3RyaW5nW107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgRW5kcG9pbnQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxFbmRwb2ludEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdFbmRwb2ludCc7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gc291cmNlLmlkZW50aWZpZXIubWFwKCh4KSA9PiBuZXcgZmhpci5JZGVudGlmaWVyKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaWRlbnRpZmllciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydzdGF0dXMnXSkgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPEVuZHBvaW50U3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN0YXR1c30pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzKSB7IHRoaXMuc3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPEVuZHBvaW50U3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjb25uZWN0aW9uVHlwZSddKSB7IHRoaXMuY29ubmVjdGlvblR5cGUgPSBuZXcgZmhpci5Db2Rpbmcoc291cmNlLmNvbm5lY3Rpb25UeXBlKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29ubmVjdGlvblR5cGUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWyduYW1lJ10pIHsgdGhpcy5uYW1lID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5uYW1lfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19uYW1lJ10pIHtcclxuICAgICAgaWYgKHRoaXMubmFtZSkgeyB0aGlzLm5hbWUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fbmFtZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLm5hbWUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fbmFtZSBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbWFuYWdpbmdPcmdhbml6YXRpb24nXSkgeyB0aGlzLm1hbmFnaW5nT3JnYW5pemF0aW9uID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5tYW5hZ2luZ09yZ2FuaXphdGlvbik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2NvbnRhY3QnXSkgeyB0aGlzLmNvbnRhY3QgPSBzb3VyY2UuY29udGFjdC5tYXAoKHgpID0+IG5ldyBmaGlyLkNvbnRhY3RQb2ludCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmNvbnRhY3QgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncGVyaW9kJ10pIHsgdGhpcy5wZXJpb2QgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLnBlcmlvZCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3BheWxvYWRUeXBlJ10pIHsgdGhpcy5wYXlsb2FkVHlwZSA9IHNvdXJjZS5wYXlsb2FkVHlwZS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnBheWxvYWRUeXBlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3BheWxvYWRNaW1lVHlwZSddKSB7IHRoaXMucGF5bG9hZE1pbWVUeXBlID0gc291cmNlLnBheWxvYWRNaW1lVHlwZS5tYXAoKHgpID0+IG5ldyBmaGlyLkZoaXJDb2RlKHt2YWx1ZTogeH0pKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucGF5bG9hZE1pbWVUeXBlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ19wYXlsb2FkTWltZVR5cGUnXSkge1xyXG4gICAgICBzb3VyY2UuX3BheWxvYWRNaW1lVHlwZS5mb3JFYWNoKCh4LGkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wYXlsb2FkTWltZVR5cGUubGVuZ3RoID49IGkpIHsgaWYgKHgpIHsgdGhpcy5wYXlsb2FkTWltZVR5cGVbaV0uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHgpOyB9IH1cclxuICAgICAgICBlbHNlIHsgaWYgKHgpIHsgdGhpcy5wYXlsb2FkTWltZVR5cGUucHVzaChuZXcgZmhpci5GaGlyQ29kZSh4IGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZUFyZ3M+KSk7IH0gfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2FkZHJlc3MnXSkgeyB0aGlzLmFkZHJlc3MgPSBuZXcgZmhpci5GaGlyVXJsKHt2YWx1ZTogc291cmNlLmFkZHJlc3N9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuYWRkcmVzcyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19hZGRyZXNzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuYWRkcmVzcykgeyB0aGlzLmFkZHJlc3MuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fYWRkcmVzcyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmFkZHJlc3MgPSBuZXcgZmhpci5GaGlyVXJsKHNvdXJjZS5fYWRkcmVzcyBhcyBQYXJ0aWFsPGZoaXIuRmhpclVybEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnaGVhZGVyJ10pIHsgdGhpcy5oZWFkZXIgPSBzb3VyY2UuaGVhZGVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHh9KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmhlYWRlciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydfaGVhZGVyJ10pIHtcclxuICAgICAgc291cmNlLl9oZWFkZXIuZm9yRWFjaCgoeCxpKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyLmxlbmd0aCA+PSBpKSB7IGlmICh4KSB7IHRoaXMuaGVhZGVyW2ldLmFkZEV4dGVuZGVkUHJvcGVydGllcyh4KTsgfSB9XHJcbiAgICAgICAgZWxzZSB7IGlmICh4KSB7IHRoaXMuaGVhZGVyLnB1c2gobmV3IGZoaXIuRmhpclN0cmluZyh4IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pKTsgfSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbjpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbik7XHJcbiAgICBpZiAoZXhwcmVzc2lvbiA9PT0gJycpIHsgZXhwcmVzc2lvbiA9ICdFbmRwb2ludCcgfVxyXG4gICAgdGhpcy52UmVxUygncmVzb3VyY2VUeXBlJyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52T3B0QSgnaWRlbnRpZmllcicsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudlJlcVNWKCdzdGF0dXMnLGV4cHJlc3Npb24sJ0VuZHBvaW50U3RhdHVzJyxFbmRwb2ludFN0YXR1c1ZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZSZXFTKCdjb25uZWN0aW9uVHlwZScsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudk9wdFMoJ25hbWUnLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZPcHRTKCdtYW5hZ2luZ09yZ2FuaXphdGlvbicsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudk9wdEEoJ2NvbnRhY3QnLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZPcHRTKCdwZXJpb2QnLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZSZXFBKCdwYXlsb2FkVHlwZScsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudk9wdEEoJ3BheWxvYWRNaW1lVHlwZScsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudlJlcVMoJ2FkZHJlc3MnLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZPcHRBKCdoZWFkZXInLGV4cHJlc3Npb24pXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=