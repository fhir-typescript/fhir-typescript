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
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Endpoint';
        }
        iss.push(...this.vRPS('resourceType', exp));
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vRSV('status', exp, 'EndpointStatus', EndpointStatusVsValidation, 'r'));
        iss.push(...this.vRS('connectionType', exp));
        iss.push(...this.vOS('name', exp));
        iss.push(...this.vOS('managingOrganization', exp));
        iss.push(...this.vOA('contact', exp));
        iss.push(...this.vOS('period', exp));
        iss.push(...this.vRA('payloadType', exp));
        iss.push(...this.vOA('payloadMimeType', exp));
        iss.push(...this.vRS('address', exp));
        iss.push(...this.vOA('header', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Endpoint._fts_dataType = 'Endpoint';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5kcG9pbnQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0VuZHBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUUxQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUluQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFrRjVGOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFFBQVMsU0FBUSxJQUFJLENBQUMsY0FBYztJQXdEL0M7O09BRUc7SUFDSCxZQUFZLFNBQStCLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3JGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7UUFDL0IsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2hHO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUF5QixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3JHO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUs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QUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEQsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBNUhEOztHQUVHO0FBQzZCLHNCQUFhLEdBQVUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBFbmRwb2ludFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRW5kcG9pbnRTdGF0dXNDb2RlcywgIEVuZHBvaW50U3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0VuZHBvaW50U3RhdHVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEVuZHBvaW50U3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9FbmRwb2ludFN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRW5kcG9pbnRDb25uZWN0aW9uVHlwZUNvZGVzLCAgRW5kcG9pbnRDb25uZWN0aW9uVHlwZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9FbmRwb2ludENvbm5lY3Rpb25UeXBlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEVuZHBvaW50Q29ubmVjdGlvblR5cGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0VuZHBvaW50Q29ubmVjdGlvblR5cGVWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgRW5kcG9pbnQgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRW5kcG9pbnRBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJFbmRwb2ludFwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVyIGZvciB0aGUgb3JnYW5pemF0aW9uIHRoYXQgaXMgdXNlZCB0byBpZGVudGlmeSB0aGUgZW5kcG9pbnQgYWNyb3NzIG11bHRpcGxlIGRpc3BhcmF0ZSBzeXN0ZW1zLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSB0aGUgc3RhdHVzIGNvbnRhaW5zIGNvZGVzIHRoYXQgbWFyayB0aGUgZW5kcG9pbnQgYXMgbm90IGN1cnJlbnRseSB2YWxpZC5cclxuICAgKi9cclxuICBzdGF0dXM6IGZoaXIuRmhpckNvZGU8RW5kcG9pbnRTdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRW5kcG9pbnQuc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogRm9yIGFkZGl0aW9uYWwgY29ubmVjdGl2aXR5IGRldGFpbHMgZm9yIHRoZSBwcm90b2NvbCwgZXh0ZW5zaW9ucyB3aWxsIGJlIHVzZWQgYXQgdGhpcyBwb2ludCwgYXMgaW4gdGhlIFhEUyBleGFtcGxlLlxyXG4gICAqL1xyXG4gIGNvbm5lY3Rpb25UeXBlOiBmaGlyLkNvZGluZ0FyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBBIGZyaWVuZGx5IG5hbWUgdGhhdCB0aGlzIGVuZHBvaW50IGNhbiBiZSByZWZlcnJlZCB0byB3aXRoLlxyXG4gICAqL1xyXG4gIG5hbWU/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRW5kcG9pbnQubmFtZVxyXG4gICAqL1xyXG4gIF9uYW1lPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGlzIHByb3BlcnR5IGlzIG5vdCB0eXBpY2FsbHkgdXNlZCB3aGVuIHNlYXJjaGluZyBmb3IgRW5kcG9pbnQgcmVzb3VyY2VzIGZvciB1c2FnZS4gVGhlIHR5cGljYWwgdXNhZ2UgaXMgdmlhIHRoZSByZWZlcmVuY2UgZnJvbSBhbiBhcHBsaWNhYmxlIE9yZ2FuaXphdGlvbi9Mb2NhdGlvbi9QcmFjdGl0aW9uZXIgcmVzb3VyY2UsIHdoaWNoIGlzIHdoZXJlIHRoZSBjb250ZXh0IGlzIHByb3ZpZGVkLiBNdWx0aXBsZSBMb2NhdGlvbnMgbWF5IHJlZmVyZW5jZSBhIHNpbmdsZSBlbmRwb2ludCwgYW5kIGRvbid0IGhhdmUgdG8gYmUgd2l0aGluIHRoZSBzYW1lIG9yZ2FuaXphdGlvbiByZXNvdXJjZSwgYnV0IG1vc3QgbGlrZWx5IHdpdGhpbiB0aGUgc2FtZSBvcmdhbml6YXRpb25hbCBoaWVyYXJjaHkuXHJcbiAgICovXHJcbiAgbWFuYWdpbmdPcmdhbml6YXRpb24/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIENvbnRhY3QgZGV0YWlscyBmb3IgYSBodW1hbiB0byBjb250YWN0IGFib3V0IHRoZSBzdWJzY3JpcHRpb24uIFRoZSBwcmltYXJ5IHVzZSBvZiB0aGlzIGZvciBzeXN0ZW0gYWRtaW5pc3RyYXRvciB0cm91Ymxlc2hvb3RpbmcuXHJcbiAgICovXHJcbiAgY29udGFjdD86IGZoaXIuQ29udGFjdFBvaW50QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaW50ZXJ2YWwgZHVyaW5nIHdoaWNoIHRoZSBlbmRwb2ludCBpcyBleHBlY3RlZCB0byBiZSBvcGVyYXRpb25hbC5cclxuICAgKi9cclxuICBwZXJpb2Q/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXlsb2FkRm9ybWF0IGRlc2NyaWJlcyB0aGUgc2VyaWFsaXphdGlvbiBmb3JtYXQgb2YgdGhlIGRhdGEsIHdoZXJlIHRoZSBwYXlsb2FkVHlwZSBpbmRpY2F0ZXMgdGhlIHNwZWNpZmljIGRvY3VtZW50L3NjaGVtYSB0aGF0IGlzIGJlaW5nIHRyYW5zZmVycmVkOyBlLmcuIERpc2NoYXJnZVN1bW1hcnkgb3IgQ2FyZVBsYW4uXHJcbiAgICovXHJcbiAgcGF5bG9hZFR5cGU6IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfG51bGw7XHJcbiAgLyoqXHJcbiAgICogU2VuZGluZyB0aGUgcGF5bG9hZCBoYXMgb2J2aW91cyBzZWN1cml0eSBjb25zZXF1ZW5jZXMuIFRoZSBzZXJ2ZXIgaXMgcmVzcG9uc2libGUgZm9yIGVuc3VyaW5nIHRoYXQgdGhlIGNvbnRlbnQgaXMgYXBwcm9wcmlhdGVseSBzZWN1cmVkLlxyXG4gICAqL1xyXG4gIHBheWxvYWRNaW1lVHlwZT86IGZoaXIuRmhpckNvZGVbXXwoc3RyaW5nfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFbmRwb2ludC5wYXlsb2FkTWltZVR5cGVcclxuICAgKi9cclxuICBfcGF5bG9hZE1pbWVUeXBlPzooZmhpci5GaGlyRWxlbWVudEFyZ3N8bnVsbClbXTtcclxuICAvKipcclxuICAgKiBGb3IgcmVzdC1ob29rLCBhbmQgd2Vic29ja2V0LCB0aGUgZW5kLXBvaW50IG11c3QgYmUgYW4gaHR0cDogb3IgaHR0cHM6IFVSTDsgZm9yIGVtYWlsLCBhIG1haWx0bzogdXJsLCBmb3Igc21zLCBhIHRlbDogdXJsLCBhbmQgZm9yIG1lc3NhZ2UgdGhlIGVuZHBvaW50IGNhbiBiZSBpbiBhbnkgZm9ybSBvZiB1cmwgdGhlIHNlcnZlciB1bmRlcnN0YW5kcyAodXN1YWxseSwgaHR0cDogb3IgbWxscDopLiBUaGUgVVJJIGlzIGFsbG93ZWQgdG8gYmUgcmVsYXRpdmU7IGluIHdoaWNoIGNhc2UsIGl0IGlzIHJlbGF0aXZlIHRvIHRoZSBzZXJ2ZXIgZW5kLXBvaW50IChzaW5jZSB0aGVyZSBtYXkgYmUgbW9yZSB0aGFuIG9uZSwgY2xpZW50cyBzaG91bGQgYXZvaWQgdXNpbmcgcmVsYXRpdmUgVVJJcylcclxuICAgKiBUaGlzIGFkZHJlc3Mgd2lsbCBiZSB0byB0aGUgc2VydmljZSBiYXNlLCB3aXRob3V0IGFueSBwYXJhbWV0ZXJzLCBvciBzdWItc2VydmljZXMgb3IgcmVzb3VyY2VzIHRhY2tlZCBvbi5cclxuICAgKiBFLmcuIGZvciBhIFdBRE8tUlMgZW5kcG9pbnQsIHRoZSB1cmwgc2hvdWxkIGJlIFwiaHR0cHM6Ly9wYWNzLmhvc3BpdGFsLm9yZy93YWRvLXJzXCJcclxuICAgKiBhbmQgbm90IFwiaHR0cHM6Ly9wYWNzLmhvc3BpdGFsLm9yZy93YWRvLXJzL3N0dWRpZXMvMS4yLjI1MC4xLjU5LjQwMjExLjEyMzQ1Njc4LjY3ODkxMC9zZXJpZXMvMS4yLjI1MC4xLjU5LjQwMjExLjc4OTAwMTI3Ni4xNDU1NjE3Mi42Nzc4OS9pbnN0YW5jZXMvLi4uXCIuXHJcbiAgICovXHJcbiAgYWRkcmVzczogZmhpci5GaGlyVXJsfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEVuZHBvaW50LmFkZHJlc3NcclxuICAgKi9cclxuICBfYWRkcmVzcz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogRXhhY3RseSB3aGF0IHRoZXNlIG1lYW4gZGVwZW5kcyBvbiB0aGUgY2hhbm5lbCB0eXBlLiBUaGUgY2FuIGNvbnZleSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRvIHRoZSByZWNpcGllbnQgYW5kL29yIG1lZXQgc2VjdXJpdHkgcmVxdWlyZW1lbnRzLlxyXG4gICAqL1xyXG4gIGhlYWRlcj86IGZoaXIuRmhpclN0cmluZ1tdfChzdHJpbmd8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEVuZHBvaW50LmhlYWRlclxyXG4gICAqL1xyXG4gIF9oZWFkZXI/OihmaGlyLkZoaXJFbGVtZW50QXJnc3xudWxsKVtdO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHRlY2huaWNhbCBkZXRhaWxzIG9mIGFuIGVuZHBvaW50IHRoYXQgY2FuIGJlIHVzZWQgZm9yIGVsZWN0cm9uaWMgc2VydmljZXMsIHN1Y2ggYXMgZm9yIHdlYiBzZXJ2aWNlcyBwcm92aWRpbmcgWERTLmIgb3IgYSBSRVNUIGVuZHBvaW50IGZvciBhbm90aGVyIEZISVIgc2VydmVyLiBUaGlzIG1heSBpbmNsdWRlIGFueSBzZWN1cml0eSBjb250ZXh0IGluZm9ybWF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVuZHBvaW50IGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdFbmRwb2ludCc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJFbmRwb2ludFwiO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXIgZm9yIHRoZSBvcmdhbml6YXRpb24gdGhhdCBpcyB1c2VkIHRvIGlkZW50aWZ5IHRoZSBlbmRwb2ludCBhY3Jvc3MgbXVsdGlwbGUgZGlzcGFyYXRlIHN5c3RlbXMuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI6IGZoaXIuSWRlbnRpZmllcltdO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSB0aGUgc3RhdHVzIGNvbnRhaW5zIGNvZGVzIHRoYXQgbWFyayB0aGUgZW5kcG9pbnQgYXMgbm90IGN1cnJlbnRseSB2YWxpZC5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPEVuZHBvaW50U3RhdHVzQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogRm9yIGFkZGl0aW9uYWwgY29ubmVjdGl2aXR5IGRldGFpbHMgZm9yIHRoZSBwcm90b2NvbCwgZXh0ZW5zaW9ucyB3aWxsIGJlIHVzZWQgYXQgdGhpcyBwb2ludCwgYXMgaW4gdGhlIFhEUyBleGFtcGxlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25uZWN0aW9uVHlwZTogZmhpci5Db2Rpbmd8bnVsbDtcclxuICAvKipcclxuICAgKiBBIGZyaWVuZGx5IG5hbWUgdGhhdCB0aGlzIGVuZHBvaW50IGNhbiBiZSByZWZlcnJlZCB0byB3aXRoLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBuYW1lPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIHByb3BlcnR5IGlzIG5vdCB0eXBpY2FsbHkgdXNlZCB3aGVuIHNlYXJjaGluZyBmb3IgRW5kcG9pbnQgcmVzb3VyY2VzIGZvciB1c2FnZS4gVGhlIHR5cGljYWwgdXNhZ2UgaXMgdmlhIHRoZSByZWZlcmVuY2UgZnJvbSBhbiBhcHBsaWNhYmxlIE9yZ2FuaXphdGlvbi9Mb2NhdGlvbi9QcmFjdGl0aW9uZXIgcmVzb3VyY2UsIHdoaWNoIGlzIHdoZXJlIHRoZSBjb250ZXh0IGlzIHByb3ZpZGVkLiBNdWx0aXBsZSBMb2NhdGlvbnMgbWF5IHJlZmVyZW5jZSBhIHNpbmdsZSBlbmRwb2ludCwgYW5kIGRvbid0IGhhdmUgdG8gYmUgd2l0aGluIHRoZSBzYW1lIG9yZ2FuaXphdGlvbiByZXNvdXJjZSwgYnV0IG1vc3QgbGlrZWx5IHdpdGhpbiB0aGUgc2FtZSBvcmdhbml6YXRpb25hbCBoaWVyYXJjaHkuXHJcbiAgICovXHJcbiAgcHVibGljIG1hbmFnaW5nT3JnYW5pemF0aW9uPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIENvbnRhY3QgZGV0YWlscyBmb3IgYSBodW1hbiB0byBjb250YWN0IGFib3V0IHRoZSBzdWJzY3JpcHRpb24uIFRoZSBwcmltYXJ5IHVzZSBvZiB0aGlzIGZvciBzeXN0ZW0gYWRtaW5pc3RyYXRvciB0cm91Ymxlc2hvb3RpbmcuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnRhY3Q6IGZoaXIuQ29udGFjdFBvaW50W107XHJcbiAgLyoqXHJcbiAgICogVGhlIGludGVydmFsIGR1cmluZyB3aGljaCB0aGUgZW5kcG9pbnQgaXMgZXhwZWN0ZWQgdG8gYmUgb3BlcmF0aW9uYWwuXHJcbiAgICovXHJcbiAgcHVibGljIHBlcmlvZD86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcGF5bG9hZEZvcm1hdCBkZXNjcmliZXMgdGhlIHNlcmlhbGl6YXRpb24gZm9ybWF0IG9mIHRoZSBkYXRhLCB3aGVyZSB0aGUgcGF5bG9hZFR5cGUgaW5kaWNhdGVzIHRoZSBzcGVjaWZpYyBkb2N1bWVudC9zY2hlbWEgdGhhdCBpcyBiZWluZyB0cmFuc2ZlcnJlZDsgZS5nLiBEaXNjaGFyZ2VTdW1tYXJ5IG9yIENhcmVQbGFuLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwYXlsb2FkVHlwZTogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBTZW5kaW5nIHRoZSBwYXlsb2FkIGhhcyBvYnZpb3VzIHNlY3VyaXR5IGNvbnNlcXVlbmNlcy4gVGhlIHNlcnZlciBpcyByZXNwb25zaWJsZSBmb3IgZW5zdXJpbmcgdGhhdCB0aGUgY29udGVudCBpcyBhcHByb3ByaWF0ZWx5IHNlY3VyZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHBheWxvYWRNaW1lVHlwZTogZmhpci5GaGlyQ29kZVtdO1xyXG4gIC8qKlxyXG4gICAqIEZvciByZXN0LWhvb2ssIGFuZCB3ZWJzb2NrZXQsIHRoZSBlbmQtcG9pbnQgbXVzdCBiZSBhbiBodHRwOiBvciBodHRwczogVVJMOyBmb3IgZW1haWwsIGEgbWFpbHRvOiB1cmwsIGZvciBzbXMsIGEgdGVsOiB1cmwsIGFuZCBmb3IgbWVzc2FnZSB0aGUgZW5kcG9pbnQgY2FuIGJlIGluIGFueSBmb3JtIG9mIHVybCB0aGUgc2VydmVyIHVuZGVyc3RhbmRzICh1c3VhbGx5LCBodHRwOiBvciBtbGxwOikuIFRoZSBVUkkgaXMgYWxsb3dlZCB0byBiZSByZWxhdGl2ZTsgaW4gd2hpY2ggY2FzZSwgaXQgaXMgcmVsYXRpdmUgdG8gdGhlIHNlcnZlciBlbmQtcG9pbnQgKHNpbmNlIHRoZXJlIG1heSBiZSBtb3JlIHRoYW4gb25lLCBjbGllbnRzIHNob3VsZCBhdm9pZCB1c2luZyByZWxhdGl2ZSBVUklzKVxyXG4gICAqIFRoaXMgYWRkcmVzcyB3aWxsIGJlIHRvIHRoZSBzZXJ2aWNlIGJhc2UsIHdpdGhvdXQgYW55IHBhcmFtZXRlcnMsIG9yIHN1Yi1zZXJ2aWNlcyBvciByZXNvdXJjZXMgdGFja2VkIG9uLlxyXG4gICAqIEUuZy4gZm9yIGEgV0FETy1SUyBlbmRwb2ludCwgdGhlIHVybCBzaG91bGQgYmUgXCJodHRwczovL3BhY3MuaG9zcGl0YWwub3JnL3dhZG8tcnNcIlxyXG4gICAqIGFuZCBub3QgXCJodHRwczovL3BhY3MuaG9zcGl0YWwub3JnL3dhZG8tcnMvc3R1ZGllcy8xLjIuMjUwLjEuNTkuNDAyMTEuMTIzNDU2NzguNjc4OTEwL3Nlcmllcy8xLjIuMjUwLjEuNTkuNDAyMTEuNzg5MDAxMjc2LjE0NTU2MTcyLjY3Nzg5L2luc3RhbmNlcy8uLi5cIi5cclxuICAgKi9cclxuICBwdWJsaWMgYWRkcmVzczogZmhpci5GaGlyVXJsfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRXhhY3RseSB3aGF0IHRoZXNlIG1lYW4gZGVwZW5kcyBvbiB0aGUgY2hhbm5lbCB0eXBlLiBUaGUgY2FuIGNvbnZleSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRvIHRoZSByZWNpcGllbnQgYW5kL29yIG1lZXQgc2VjdXJpdHkgcmVxdWlyZW1lbnRzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBoZWFkZXI6IGZoaXIuRmhpclN0cmluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEVuZHBvaW50IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8RW5kcG9pbnRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnRW5kcG9pbnQnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxFbmRwb2ludFN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxFbmRwb2ludFN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3N0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnY29ubmVjdGlvblR5cGUnXSkgeyB0aGlzLmNvbm5lY3Rpb25UeXBlID0gbmV3IGZoaXIuQ29kaW5nKHNvdXJjZS5jb25uZWN0aW9uVHlwZSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmNvbm5lY3Rpb25UeXBlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnbmFtZSddKSB7IHRoaXMubmFtZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UubmFtZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfbmFtZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLm5hbWUpIHsgdGhpcy5uYW1lLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX25hbWUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5uYW1lID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX25hbWUgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ21hbmFnaW5nT3JnYW5pemF0aW9uJ10pIHsgdGhpcy5tYW5hZ2luZ09yZ2FuaXphdGlvbiA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UubWFuYWdpbmdPcmdhbml6YXRpb24pOyB9XHJcbiAgICBpZiAoc291cmNlWydjb250YWN0J10pIHsgdGhpcy5jb250YWN0ID0gc291cmNlLmNvbnRhY3QubWFwKCh4KSA9PiBuZXcgZmhpci5Db250YWN0UG9pbnQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb250YWN0ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3BlcmlvZCddKSB7IHRoaXMucGVyaW9kID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS5wZXJpb2QpOyB9XHJcbiAgICBpZiAoc291cmNlWydwYXlsb2FkVHlwZSddKSB7IHRoaXMucGF5bG9hZFR5cGUgPSBzb3VyY2UucGF5bG9hZFR5cGUubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5wYXlsb2FkVHlwZSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydwYXlsb2FkTWltZVR5cGUnXSkgeyB0aGlzLnBheWxvYWRNaW1lVHlwZSA9IHNvdXJjZS5wYXlsb2FkTWltZVR5cGUubWFwKCh4KSA9PiBuZXcgZmhpci5GaGlyQ29kZSh7dmFsdWU6IHh9KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnBheWxvYWRNaW1lVHlwZSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydfcGF5bG9hZE1pbWVUeXBlJ10pIHtcclxuICAgICAgc291cmNlLl9wYXlsb2FkTWltZVR5cGUuZm9yRWFjaCgoeCxpKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucGF5bG9hZE1pbWVUeXBlLmxlbmd0aCA+PSBpKSB7IGlmICh4KSB7IHRoaXMucGF5bG9hZE1pbWVUeXBlW2ldLmFkZEV4dGVuZGVkUHJvcGVydGllcyh4KTsgfSB9XHJcbiAgICAgICAgZWxzZSB7IGlmICh4KSB7IHRoaXMucGF5bG9hZE1pbWVUeXBlLnB1c2gobmV3IGZoaXIuRmhpckNvZGUoeCBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGVBcmdzPikpOyB9IH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydhZGRyZXNzJ10pIHsgdGhpcy5hZGRyZXNzID0gbmV3IGZoaXIuRmhpclVybCh7dmFsdWU6IHNvdXJjZS5hZGRyZXNzfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmFkZHJlc3MgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfYWRkcmVzcyddKSB7XHJcbiAgICAgIGlmICh0aGlzLmFkZHJlc3MpIHsgdGhpcy5hZGRyZXNzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2FkZHJlc3MhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5hZGRyZXNzID0gbmV3IGZoaXIuRmhpclVybChzb3VyY2UuX2FkZHJlc3MgYXMgUGFydGlhbDxmaGlyLkZoaXJVcmxBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2hlYWRlciddKSB7IHRoaXMuaGVhZGVyID0gc291cmNlLmhlYWRlci5tYXAoKHgpID0+IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiB4fSkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5oZWFkZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2hlYWRlciddKSB7XHJcbiAgICAgIHNvdXJjZS5faGVhZGVyLmZvckVhY2goKHgsaSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWRlci5sZW5ndGggPj0gaSkgeyBpZiAoeCkgeyB0aGlzLmhlYWRlcltpXS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoeCk7IH0gfVxyXG4gICAgICAgIGVsc2UgeyBpZiAoeCkgeyB0aGlzLmhlYWRlci5wdXNoKG5ldyBmaGlyLkZoaXJTdHJpbmcoeCBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KSk7IH0gfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdFbmRwb2ludCcgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlBTKCdyZXNvdXJjZVR5cGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2lkZW50aWZpZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlNWKCdzdGF0dXMnLGV4cCwnRW5kcG9pbnRTdGF0dXMnLEVuZHBvaW50U3RhdHVzVnNWYWxpZGF0aW9uLCdyJykpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ2Nvbm5lY3Rpb25UeXBlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCduYW1lJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdtYW5hZ2luZ09yZ2FuaXphdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnY29udGFjdCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncGVyaW9kJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJBKCdwYXlsb2FkVHlwZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgncGF5bG9hZE1pbWVUeXBlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdhZGRyZXNzJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdoZWFkZXInLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19