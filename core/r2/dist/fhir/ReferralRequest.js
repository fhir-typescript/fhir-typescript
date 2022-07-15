// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: ReferralRequest
import * as fhir from '../fhir.js';
// @ts-ignore
import { ReferralstatusVsValidation } from '../fhirValueSets/ReferralstatusVsValidation.js';
/**
 * Used to record and send details about a request for referral service or transfer of a patient to the care of another provider or provider organization.
 */
export class ReferralRequest extends fhir.DomainResource {
    /**
     * Default constructor for ReferralRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'ReferralRequest';
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
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['date']) {
            this.date = new fhir.FhirDateTime({ value: source.date });
        }
        if (source['_date']) {
            if (this.date) {
                this.date.addExtendedProperties(source._date);
            }
            else {
                this.date = new fhir.FhirDateTime(source._date);
            }
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['specialty']) {
            this.specialty = new fhir.CodeableConcept(source.specialty);
        }
        if (source['priority']) {
            this.priority = new fhir.CodeableConcept(source.priority);
        }
        if (source['patient']) {
            this.patient = new fhir.Reference(source.patient);
        }
        if (source['requester']) {
            this.requester = new fhir.Reference(source.requester);
        }
        if (source['recipient']) {
            this.recipient = source.recipient.map((x) => new fhir.Reference(x));
        }
        else {
            this.recipient = [];
        }
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source['dateSent']) {
            this.dateSent = new fhir.FhirDateTime({ value: source.dateSent });
        }
        if (source['_dateSent']) {
            if (this.dateSent) {
                this.dateSent.addExtendedProperties(source._dateSent);
            }
            else {
                this.dateSent = new fhir.FhirDateTime(source._dateSent);
            }
        }
        if (source['reason']) {
            this.reason = new fhir.CodeableConcept(source.reason);
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['_description']) {
            if (this.description) {
                this.description.addExtendedProperties(source._description);
            }
            else {
                this.description = new fhir.FhirString(source._description);
            }
        }
        if (source['serviceRequested']) {
            this.serviceRequested = source.serviceRequested.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.serviceRequested = [];
        }
        if (source['supportingInformation']) {
            this.supportingInformation = source.supportingInformation.map((x) => new fhir.Reference(x));
        }
        else {
            this.supportingInformation = [];
        }
        if (source['fulfillmentTime']) {
            this.fulfillmentTime = new fhir.Period(source.fulfillmentTime);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'ReferralRequest';
        }
        this.vRS('resourceType', exp);
        this.vRSV('status', exp, 'Referralstatus', ReferralstatusVsValidation, 'r');
        this.vOA('identifier', exp);
        this.vOS('date', exp);
        this.vOS('type', exp);
        this.vOS('specialty', exp);
        this.vOS('priority', exp);
        this.vOS('patient', exp);
        this.vOS('requester', exp);
        this.vOA('recipient', exp);
        this.vOS('encounter', exp);
        this.vOS('dateSent', exp);
        this.vOS('reason', exp);
        this.vOS('description', exp);
        this.vOA('serviceRequested', exp);
        this.vOA('supportingInformation', exp);
        this.vOS('fulfillmentTime', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
ReferralRequest._fts_dataType = 'ReferralRequest';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVmZXJyYWxSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9SZWZlcnJhbFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBRWpDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQStGNUY7O0dBRUc7QUFDSCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxJQUFJLENBQUMsY0FBYztJQXlFdEQ7O09BRUc7SUFDSCxZQUFZLFNBQXNDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQzVGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQztRQUN0QyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUF5QixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3JHO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLENBQUM7YUFBRTtpQkFDbkU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQXlCLE1BQU0sQ0FBQyxPQUFpQyxDQUFDLENBQUM7YUFBRTtTQUM1RztRQUNELElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lB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QyxHQUFHLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMvQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQTVJRDs7R0FFRztBQUM2Qiw2QkFBYSxHQUFVLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBSZWZlcnJhbFJlcXVlc3RcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFJlZmVycmFsc3RhdHVzQ29kZXMsICBSZWZlcnJhbHN0YXR1c0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9SZWZlcnJhbHN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBSZWZlcnJhbHN0YXR1c1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVmZXJyYWxzdGF0dXNWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IERpYWdub3N0aWNPcmRlclByaW9yaXR5Q29kZXMsICBEaWFnbm9zdGljT3JkZXJQcmlvcml0eUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9EaWFnbm9zdGljT3JkZXJQcmlvcml0eUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBEaWFnbm9zdGljT3JkZXJQcmlvcml0eVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRGlhZ25vc3RpY09yZGVyUHJpb3JpdHlWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgUmVmZXJyYWxSZXF1ZXN0IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFJlZmVycmFsUmVxdWVzdEFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIlJlZmVycmFsUmVxdWVzdFwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgd29ya2Zsb3cgc3RhdHVzIG9mIHRoZSByZWZlcnJhbCBvciB0cmFuc2ZlciBvZiBjYXJlIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPFJlZmVycmFsc3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFJlZmVycmFsUmVxdWVzdC5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBCdXNpbmVzcyBpZGVudGlmaWVyIHRoYXQgdW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgcmVmZXJyYWwvY2FyZSB0cmFuc2ZlciByZXF1ZXN0IGluc3RhbmNlLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERhdGUvRGF0ZVRpbWUgb2YgY3JlYXRpb24gZm9yIGRyYWZ0IHJlcXVlc3RzIGFuZCBkYXRlIG9mIGFjdGl2YXRpb24gZm9yIGFjdGl2ZSByZXF1ZXN0cy5cclxuICAgKi9cclxuICBkYXRlPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUmVmZXJyYWxSZXF1ZXN0LmRhdGVcclxuICAgKi9cclxuICBfZGF0ZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQW4gaW5kaWNhdGlvbiBvZiB0aGUgdHlwZSBvZiByZWZlcnJhbCAob3Igd2hlcmUgYXBwbGljYWJsZSB0aGUgdHlwZSBvZiB0cmFuc2ZlciBvZiBjYXJlKSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRpb24gb2YgdGhlIGNsaW5pY2FsIGRvbWFpbiBvciBkaXNjaXBsaW5lIHRvIHdoaWNoIHRoZSByZWZlcnJhbCBvciB0cmFuc2ZlciBvZiBjYXJlIHJlcXVlc3QgaXMgc2VudC4gIEZvciBleGFtcGxlOiBDYXJkaW9sb2d5IEdhc3Ryb2VudGVyb2xvZ3kgRGlhYmV0b2xvZ3kuXHJcbiAgICovXHJcbiAgc3BlY2lhbHR5PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbiBpbmRpY2F0aW9uIG9mIHRoZSB1cmdlbmN5IG9mIHJlZmVycmFsIChvciB3aGVyZSBhcHBsaWNhYmxlIHRoZSB0eXBlIG9mIHRyYW5zZmVyIG9mIGNhcmUpIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgcHJpb3JpdHk/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXRpZW50IHdobyBpcyB0aGUgc3ViamVjdCBvZiBhIHJlZmVycmFsIG9yIHRyYW5zZmVyIG9mIGNhcmUgcmVxdWVzdC5cclxuICAgKi9cclxuICBwYXRpZW50PzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaGVhbHRoY2FyZSBwcm92aWRlciBvciBwcm92aWRlciBvcmdhbml6YXRpb24gd2hvL3doaWNoIGluaXRpYXRlZCB0aGUgcmVmZXJyYWwvdHJhbnNmZXIgb2YgY2FyZSByZXF1ZXN0LiBDYW4gYWxzbyBiZSAgUGF0aWVudCAoYSBzZWxmIHJlZmVycmFsKS5cclxuICAgKi9cclxuICByZXF1ZXN0ZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBoZWFsdGhjYXJlIHByb3ZpZGVyKHMpIG9yIHByb3ZpZGVyIG9yZ2FuaXphdGlvbihzKSB3aG8vd2hpY2ggaXMgdG8gcmVjZWl2ZSB0aGUgcmVmZXJyYWwvdHJhbnNmZXIgb2YgY2FyZSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHJlY2lwaWVudD86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZW5jb3VudGVyIGF0IHdoaWNoIHRoZSByZXF1ZXN0IGZvciByZWZlcnJhbCBvciB0cmFuc2ZlciBvZiBjYXJlIGlzIGluaXRpYXRlZC5cclxuICAgKi9cclxuICBlbmNvdW50ZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERhdGUvRGF0ZVRpbWUgdGhlIHJlcXVlc3QgZm9yIHJlZmVycmFsIG9yIHRyYW5zZmVyIG9mIGNhcmUgaXMgc2VudCBieSB0aGUgYXV0aG9yLlxyXG4gICAqL1xyXG4gIGRhdGVTZW50PzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUmVmZXJyYWxSZXF1ZXN0LmRhdGVTZW50XHJcbiAgICovXHJcbiAgX2RhdGVTZW50PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBEZXNjcmlwdGlvbiBvZiBjbGluaWNhbCBjb25kaXRpb24gaW5kaWNhdGluZyB3aHkgcmVmZXJyYWwvdHJhbnNmZXIgb2YgY2FyZSBpcyByZXF1ZXN0ZWQuICBGb3IgZXhhbXBsZTogIFBhdGhvbG9naWNhbCBBbm9tYWxpZXMsIERpc2FibGVkIChwaHlzaWNhbCBvciBtZW50YWwpLCAgQmVoYXZpb3JhbCBNYW5hZ2VtZW50LlxyXG4gICAqL1xyXG4gIHJlYXNvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHJlYXNvbiBlbGVtZW50IGdpdmVzIGEgc2hvcnQgZGVzY3JpcHRpb24gb2Ygd2h5IHRoZSByZWZlcnJhbCBpcyBiZWluZyBtYWRlLCB0aGUgZGVzY3JpcHRpb24gZXhwYW5kcyBvbiB0aGlzIHRvIHN1cHBvcnQgYSBtb3JlIGNvbXBsZXRlIGNsaW5pY2FsIHN1bW1hcnkuXHJcbiAgICovXHJcbiAgZGVzY3JpcHRpb24/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUmVmZXJyYWxSZXF1ZXN0LmRlc2NyaXB0aW9uXHJcbiAgICovXHJcbiAgX2Rlc2NyaXB0aW9uPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgc2VydmljZShzKSB0aGF0IGlzL2FyZSByZXF1ZXN0ZWQgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIHBhdGllbnQuICBGb3IgZXhhbXBsZTogY2FyZGlhYyBwYWNlbWFrZXIgaW5zZXJ0aW9uLlxyXG4gICAqL1xyXG4gIHNlcnZpY2VSZXF1ZXN0ZWQ/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW55IGFkZGl0aW9uYWwgKGFkbWluaXN0cmF0aXZlLCBmaW5hbmNpYWwgb3IgY2xpbmljYWwpIGluZm9ybWF0aW9uIHJlcXVpcmVkIHRvIHN1cHBvcnQgcmVxdWVzdCBmb3IgcmVmZXJyYWwgb3IgdHJhbnNmZXIgb2YgY2FyZS4gIEZvciBleGFtcGxlOiBQcmVzZW50aW5nIHByb2JsZW1zL2NoaWVmIGNvbXBsYWludHMgTWVkaWNhbCBIaXN0b3J5IEZhbWlseSBIaXN0b3J5IEFsZXJ0cyBBbGxlcmd5L0ludG9sZXJhbmNlIGFuZCBBZHZlcnNlIFJlYWN0aW9ucyBNZWRpY2F0aW9ucyBPYnNlcnZhdGlvbnMvQXNzZXNzbWVudHMgKG1heSBpbmNsdWRlIGNvZ25pdGl2ZSBhbmQgZnVuZHRpb25hbCBhc3Nlc3NtZW50cykgRGlhZ25vc3RpYyBSZXBvcnRzIENhcmUgUGxhbi5cclxuICAgKi9cclxuICBzdXBwb3J0aW5nSW5mb3JtYXRpb24/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVXNlIGNhc2VzOiAoMSkgdG8gaW5kaWNhdGUgdGhhdCB0aGUgcmVxdWVzdGVkIHNlcnZpY2UgaXMgbm90IHRvIGhhcHBlbiBiZWZvcmUgYSBzcGVjaWZpZWQgZGF0ZSwgYW5kIHNhdmluZyB0aGUgc3RhcnQgZGF0ZSBpbiBQZXJpb2Quc3RhcnQ7ICgyKSB0byBpbmRpY2F0ZSB0aGF0IHRoZSByZXF1ZXN0ZWQgc2VydmljZSBtdXN0IGhhcHBlbiBiZWZvcmUgYSBzcGVjaWZpZWQgZGF0ZSwgYW5kIHNhdmluZyB0aGUgZW5kIGRhdGUgaW4gUGVyaW9kLmVuZDsgKDMpIHRvIGluZGljYXRlIHRoYXQgdGhlIHJlcXVlc3RlZCBzZXJ2aWNlIG11c3QgaGFwcGVuIGR1cmluZyB0aGUgc3BlY2lmaWVkIGRhdGVzIChcInN0YXJ0XCIgYW5kIFwiZW5kXCIgdmFsdWVzKS5cclxuICAgKi9cclxuICBmdWxmaWxsbWVudFRpbWU/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogVXNlZCB0byByZWNvcmQgYW5kIHNlbmQgZGV0YWlscyBhYm91dCBhIHJlcXVlc3QgZm9yIHJlZmVycmFsIHNlcnZpY2Ugb3IgdHJhbnNmZXIgb2YgYSBwYXRpZW50IHRvIHRoZSBjYXJlIG9mIGFub3RoZXIgcHJvdmlkZXIgb3IgcHJvdmlkZXIgb3JnYW5pemF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlZmVycmFsUmVxdWVzdCBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUmVmZXJyYWxSZXF1ZXN0JztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIlJlZmVycmFsUmVxdWVzdFwiO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB3b3JrZmxvdyBzdGF0dXMgb2YgdGhlIHJlZmVycmFsIG9yIHRyYW5zZmVyIG9mIGNhcmUgcmVxdWVzdC5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPFJlZmVycmFsc3RhdHVzQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogQnVzaW5lc3MgaWRlbnRpZmllciB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIHJlZmVycmFsL2NhcmUgdHJhbnNmZXIgcmVxdWVzdCBpbnN0YW5jZS5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogRGF0ZS9EYXRlVGltZSBvZiBjcmVhdGlvbiBmb3IgZHJhZnQgcmVxdWVzdHMgYW5kIGRhdGUgb2YgYWN0aXZhdGlvbiBmb3IgYWN0aXZlIHJlcXVlc3RzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkYXRlPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFuIGluZGljYXRpb24gb2YgdGhlIHR5cGUgb2YgcmVmZXJyYWwgKG9yIHdoZXJlIGFwcGxpY2FibGUgdGhlIHR5cGUgb2YgdHJhbnNmZXIgb2YgY2FyZSkgcmVxdWVzdC5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0aW9uIG9mIHRoZSBjbGluaWNhbCBkb21haW4gb3IgZGlzY2lwbGluZSB0byB3aGljaCB0aGUgcmVmZXJyYWwgb3IgdHJhbnNmZXIgb2YgY2FyZSByZXF1ZXN0IGlzIHNlbnQuICBGb3IgZXhhbXBsZTogQ2FyZGlvbG9neSBHYXN0cm9lbnRlcm9sb2d5IERpYWJldG9sb2d5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzcGVjaWFsdHk/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW4gaW5kaWNhdGlvbiBvZiB0aGUgdXJnZW5jeSBvZiByZWZlcnJhbCAob3Igd2hlcmUgYXBwbGljYWJsZSB0aGUgdHlwZSBvZiB0cmFuc2ZlciBvZiBjYXJlKSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwcmlvcml0eT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcGF0aWVudCB3aG8gaXMgdGhlIHN1YmplY3Qgb2YgYSByZWZlcnJhbCBvciB0cmFuc2ZlciBvZiBjYXJlIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgcHVibGljIHBhdGllbnQ/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGhlYWx0aGNhcmUgcHJvdmlkZXIgb3IgcHJvdmlkZXIgb3JnYW5pemF0aW9uIHdoby93aGljaCBpbml0aWF0ZWQgdGhlIHJlZmVycmFsL3RyYW5zZmVyIG9mIGNhcmUgcmVxdWVzdC4gQ2FuIGFsc28gYmUgIFBhdGllbnQgKGEgc2VsZiByZWZlcnJhbCkuXHJcbiAgICovXHJcbiAgcHVibGljIHJlcXVlc3Rlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaGVhbHRoY2FyZSBwcm92aWRlcihzKSBvciBwcm92aWRlciBvcmdhbml6YXRpb24ocykgd2hvL3doaWNoIGlzIHRvIHJlY2VpdmUgdGhlIHJlZmVycmFsL3RyYW5zZmVyIG9mIGNhcmUgcmVxdWVzdC5cclxuICAgKi9cclxuICBwdWJsaWMgcmVjaXBpZW50OiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBlbmNvdW50ZXIgYXQgd2hpY2ggdGhlIHJlcXVlc3QgZm9yIHJlZmVycmFsIG9yIHRyYW5zZmVyIG9mIGNhcmUgaXMgaW5pdGlhdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBlbmNvdW50ZXI/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGF0ZS9EYXRlVGltZSB0aGUgcmVxdWVzdCBmb3IgcmVmZXJyYWwgb3IgdHJhbnNmZXIgb2YgY2FyZSBpcyBzZW50IGJ5IHRoZSBhdXRob3IuXHJcbiAgICovXHJcbiAgcHVibGljIGRhdGVTZW50PzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlc2NyaXB0aW9uIG9mIGNsaW5pY2FsIGNvbmRpdGlvbiBpbmRpY2F0aW5nIHdoeSByZWZlcnJhbC90cmFuc2ZlciBvZiBjYXJlIGlzIHJlcXVlc3RlZC4gIEZvciBleGFtcGxlOiAgUGF0aG9sb2dpY2FsIEFub21hbGllcywgRGlzYWJsZWQgKHBoeXNpY2FsIG9yIG1lbnRhbCksICBCZWhhdmlvcmFsIE1hbmFnZW1lbnQuXHJcbiAgICovXHJcbiAgcHVibGljIHJlYXNvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcmVhc29uIGVsZW1lbnQgZ2l2ZXMgYSBzaG9ydCBkZXNjcmlwdGlvbiBvZiB3aHkgdGhlIHJlZmVycmFsIGlzIGJlaW5nIG1hZGUsIHRoZSBkZXNjcmlwdGlvbiBleHBhbmRzIG9uIHRoaXMgdG8gc3VwcG9ydCBhIG1vcmUgY29tcGxldGUgY2xpbmljYWwgc3VtbWFyeS5cclxuICAgKi9cclxuICBwdWJsaWMgZGVzY3JpcHRpb24/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2aWNlKHMpIHRoYXQgaXMvYXJlIHJlcXVlc3RlZCB0byBiZSBwcm92aWRlZCB0byB0aGUgcGF0aWVudC4gIEZvciBleGFtcGxlOiBjYXJkaWFjIHBhY2VtYWtlciBpbnNlcnRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHNlcnZpY2VSZXF1ZXN0ZWQ6IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogQW55IGFkZGl0aW9uYWwgKGFkbWluaXN0cmF0aXZlLCBmaW5hbmNpYWwgb3IgY2xpbmljYWwpIGluZm9ybWF0aW9uIHJlcXVpcmVkIHRvIHN1cHBvcnQgcmVxdWVzdCBmb3IgcmVmZXJyYWwgb3IgdHJhbnNmZXIgb2YgY2FyZS4gIEZvciBleGFtcGxlOiBQcmVzZW50aW5nIHByb2JsZW1zL2NoaWVmIGNvbXBsYWludHMgTWVkaWNhbCBIaXN0b3J5IEZhbWlseSBIaXN0b3J5IEFsZXJ0cyBBbGxlcmd5L0ludG9sZXJhbmNlIGFuZCBBZHZlcnNlIFJlYWN0aW9ucyBNZWRpY2F0aW9ucyBPYnNlcnZhdGlvbnMvQXNzZXNzbWVudHMgKG1heSBpbmNsdWRlIGNvZ25pdGl2ZSBhbmQgZnVuZHRpb25hbCBhc3Nlc3NtZW50cykgRGlhZ25vc3RpYyBSZXBvcnRzIENhcmUgUGxhbi5cclxuICAgKi9cclxuICBwdWJsaWMgc3VwcG9ydGluZ0luZm9ybWF0aW9uOiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIFVzZSBjYXNlczogKDEpIHRvIGluZGljYXRlIHRoYXQgdGhlIHJlcXVlc3RlZCBzZXJ2aWNlIGlzIG5vdCB0byBoYXBwZW4gYmVmb3JlIGEgc3BlY2lmaWVkIGRhdGUsIGFuZCBzYXZpbmcgdGhlIHN0YXJ0IGRhdGUgaW4gUGVyaW9kLnN0YXJ0OyAoMikgdG8gaW5kaWNhdGUgdGhhdCB0aGUgcmVxdWVzdGVkIHNlcnZpY2UgbXVzdCBoYXBwZW4gYmVmb3JlIGEgc3BlY2lmaWVkIGRhdGUsIGFuZCBzYXZpbmcgdGhlIGVuZCBkYXRlIGluIFBlcmlvZC5lbmQ7ICgzKSB0byBpbmRpY2F0ZSB0aGF0IHRoZSByZXF1ZXN0ZWQgc2VydmljZSBtdXN0IGhhcHBlbiBkdXJpbmcgdGhlIHNwZWNpZmllZCBkYXRlcyAoXCJzdGFydFwiIGFuZCBcImVuZFwiIHZhbHVlcykuXHJcbiAgICovXHJcbiAgcHVibGljIGZ1bGZpbGxtZW50VGltZT86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBSZWZlcnJhbFJlcXVlc3QgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxSZWZlcnJhbFJlcXVlc3RBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnUmVmZXJyYWxSZXF1ZXN0JztcclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8UmVmZXJyYWxzdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdHVzfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMpIHsgdGhpcy5zdGF0dXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8UmVmZXJyYWxzdGF0dXNDb2RlVHlwZT4oc291cmNlLl9zdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2RhdGUnXSkgeyB0aGlzLmRhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UuZGF0ZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGF0ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGUpIHsgdGhpcy5kYXRlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2RhdGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kYXRlID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fZGF0ZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd0eXBlJ10pIHsgdGhpcy50eXBlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS50eXBlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3BlY2lhbHR5J10pIHsgdGhpcy5zcGVjaWFsdHkgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnNwZWNpYWx0eSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3ByaW9yaXR5J10pIHsgdGhpcy5wcmlvcml0eSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UucHJpb3JpdHkpOyB9XHJcbiAgICBpZiAoc291cmNlWydwYXRpZW50J10pIHsgdGhpcy5wYXRpZW50ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5wYXRpZW50KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVxdWVzdGVyJ10pIHsgdGhpcy5yZXF1ZXN0ZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnJlcXVlc3Rlcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlY2lwaWVudCddKSB7IHRoaXMucmVjaXBpZW50ID0gc291cmNlLnJlY2lwaWVudC5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnJlY2lwaWVudCA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydlbmNvdW50ZXInXSkgeyB0aGlzLmVuY291bnRlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuZW5jb3VudGVyKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGF0ZVNlbnQnXSkgeyB0aGlzLmRhdGVTZW50ID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLmRhdGVTZW50fSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kYXRlU2VudCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGVTZW50KSB7IHRoaXMuZGF0ZVNlbnQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZGF0ZVNlbnQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kYXRlU2VudCA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX2RhdGVTZW50IGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3JlYXNvbiddKSB7IHRoaXMucmVhc29uID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5yZWFzb24pOyB9XHJcbiAgICBpZiAoc291cmNlWydkZXNjcmlwdGlvbiddKSB7IHRoaXMuZGVzY3JpcHRpb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmRlc2NyaXB0aW9ufSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kZXNjcmlwdGlvbiddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uKSB7IHRoaXMuZGVzY3JpcHRpb24uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZGVzY3JpcHRpb24hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kZXNjcmlwdGlvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9kZXNjcmlwdGlvbiBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc2VydmljZVJlcXVlc3RlZCddKSB7IHRoaXMuc2VydmljZVJlcXVlc3RlZCA9IHNvdXJjZS5zZXJ2aWNlUmVxdWVzdGVkLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc2VydmljZVJlcXVlc3RlZCA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydzdXBwb3J0aW5nSW5mb3JtYXRpb24nXSkgeyB0aGlzLnN1cHBvcnRpbmdJbmZvcm1hdGlvbiA9IHNvdXJjZS5zdXBwb3J0aW5nSW5mb3JtYXRpb24ubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdXBwb3J0aW5nSW5mb3JtYXRpb24gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZnVsZmlsbG1lbnRUaW1lJ10pIHsgdGhpcy5mdWxmaWxsbWVudFRpbWUgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLmZ1bGZpbGxtZW50VGltZSk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdSZWZlcnJhbFJlcXVlc3QnIH1cclxuICAgIHRoaXMudlJTKCdyZXNvdXJjZVR5cGUnLGV4cClcclxuICAgIHRoaXMudlJTVignc3RhdHVzJyxleHAsJ1JlZmVycmFsc3RhdHVzJyxSZWZlcnJhbHN0YXR1c1ZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2RhdGUnLGV4cClcclxuICAgIHRoaXMudk9TKCd0eXBlJyxleHApXHJcbiAgICB0aGlzLnZPUygnc3BlY2lhbHR5JyxleHApXHJcbiAgICB0aGlzLnZPUygncHJpb3JpdHknLGV4cClcclxuICAgIHRoaXMudk9TKCdwYXRpZW50JyxleHApXHJcbiAgICB0aGlzLnZPUygncmVxdWVzdGVyJyxleHApXHJcbiAgICB0aGlzLnZPQSgncmVjaXBpZW50JyxleHApXHJcbiAgICB0aGlzLnZPUygnZW5jb3VudGVyJyxleHApXHJcbiAgICB0aGlzLnZPUygnZGF0ZVNlbnQnLGV4cClcclxuICAgIHRoaXMudk9TKCdyZWFzb24nLGV4cClcclxuICAgIHRoaXMudk9TKCdkZXNjcmlwdGlvbicsZXhwKVxyXG4gICAgdGhpcy52T0EoJ3NlcnZpY2VSZXF1ZXN0ZWQnLGV4cClcclxuICAgIHRoaXMudk9BKCdzdXBwb3J0aW5nSW5mb3JtYXRpb24nLGV4cClcclxuICAgIHRoaXMudk9TKCdmdWxmaWxsbWVudFRpbWUnLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==