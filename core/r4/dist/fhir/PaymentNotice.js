// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: PaymentNotice
import * as fhir from '../fhir.js';
// @ts-ignore
import { FmStatusVsValidation } from '../fhirValueSets/FmStatusVsValidation.js';
/**
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 */
export class PaymentNotice extends fhir.DomainResource {
    /**
     * Default constructor for PaymentNotice - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'PaymentNotice';
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
        if (source['request']) {
            this.request = new fhir.Reference(source.request);
        }
        if (source['response']) {
            this.response = new fhir.Reference(source.response);
        }
        if (source['created']) {
            this.created = new fhir.FhirDateTime({ value: source.created });
        }
        else {
            this.created = null;
        }
        if (source['_created']) {
            if (this.created) {
                this.created.addExtendedProperties(source._created);
            }
            else {
                this.created = new fhir.FhirDateTime(source._created);
            }
        }
        if (source['provider']) {
            this.provider = new fhir.Reference(source.provider);
        }
        if (source['payment']) {
            this.payment = new fhir.Reference(source.payment);
        }
        else {
            this.payment = null;
        }
        if (source['paymentDate']) {
            this.paymentDate = new fhir.FhirDate({ value: source.paymentDate });
        }
        if (source['_paymentDate']) {
            if (this.paymentDate) {
                this.paymentDate.addExtendedProperties(source._paymentDate);
            }
            else {
                this.paymentDate = new fhir.FhirDate(source._paymentDate);
            }
        }
        if (source['payee']) {
            this.payee = new fhir.Reference(source.payee);
        }
        if (source['recipient']) {
            this.recipient = new fhir.Reference(source.recipient);
        }
        else {
            this.recipient = null;
        }
        if (source['amount']) {
            this.amount = new fhir.Money(source.amount);
        }
        else {
            this.amount = null;
        }
        if (source['paymentStatus']) {
            this.paymentStatus = new fhir.CodeableConcept(source.paymentStatus);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'PaymentNotice';
        }
        iss.push(...this.vRPS('resourceType', exp));
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vRSV('status', exp, 'FmStatus', FmStatusVsValidation, 'r'));
        iss.push(...this.vOS('request', exp));
        iss.push(...this.vOS('response', exp));
        iss.push(...this.vRS('created', exp));
        iss.push(...this.vOS('provider', exp));
        iss.push(...this.vRS('payment', exp));
        iss.push(...this.vOS('paymentDate', exp));
        iss.push(...this.vOS('payee', exp));
        iss.push(...this.vRS('recipient', exp));
        iss.push(...this.vRS('amount', exp));
        iss.push(...this.vOS('paymentStatus', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
PaymentNotice._fts_dataType = 'PaymentNotice';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudE5vdGljZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvUGF5bWVudE5vdGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBMkVoRjs7R0FFRztBQUNILE1BQU0sT0FBTyxhQUFjLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUF5RHBEOztPQUVHO0lBQ0gsWUFBWSxTQUFvQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUMxRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDO1FBQ3BDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUNoRztZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDOUIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBbUIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FBRTthQUMvRjtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDNUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLE9BQVEsQ0FBQyxDQUFDO2FBQUU7aUJBQ25FO2dCQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFtQixNQUFNLENBQUMsT0FBaUMsQ0FBQyxDQUFDO2FBQUU7U0FDdEc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQzdFLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQUU7UUFDaEYsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3BGO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM3QixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsUUFBUyxDQUFDLENBQUM7YUFBRTtpQkFDdEU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQTBDLENBQUMsQ0FBQzthQUFFO1NBQ2xHO1FBQ0QsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FBRTtRQUNoRixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUFFO2FBQ3hFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM3QixJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDakcsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUFFLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFlBQWEsQ0FBQyxDQUFDO2FBQUU7aUJBQ2xGO2dCQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUEwQyxDQUFDLENBQUM7YUFBRTtTQUNsRztRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQUU7UUFDdkUsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FBRTthQUM5RTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDL0IsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FBRTthQUNqRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDNUIsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7U0FBRTtJQUN2RyxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxHQUFHLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsZUFBZSxDQUFBO1NBQUU7UUFDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyxVQUFVLEVBQUMsb0JBQW9CLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6RSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBakhEOztHQUVHO0FBQzZCLDJCQUFhLEdBQVUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBQYXltZW50Tm90aWNlXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBGbVN0YXR1c0NvZGVzLCAgRm1TdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRm1TdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRm1TdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ZtU3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBQYXltZW50U3RhdHVzQ29kZXMsICBQYXltZW50U3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1BheW1lbnRTdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUGF5bWVudFN0YXR1c1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUGF5bWVudFN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBQYXltZW50Tm90aWNlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFBheW1lbnROb3RpY2VBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJQYXltZW50Tm90aWNlXCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgdW5pcXVlIGlkZW50aWZpZXIgYXNzaWduZWQgdG8gdGhpcyBwYXltZW50IG5vdGljZS5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIHJlc291cmNlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPEZtU3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFBheW1lbnROb3RpY2Uuc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogUmVmZXJlbmNlIG9mIHJlc291cmNlIGZvciB3aGljaCBwYXltZW50IGlzIGJlaW5nIG1hZGUuXHJcbiAgICovXHJcbiAgcmVxdWVzdD86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVmZXJlbmNlIG9mIHJlc3BvbnNlIHRvIHJlc291cmNlIGZvciB3aGljaCBwYXltZW50IGlzIGJlaW5nIG1hZGUuXHJcbiAgICovXHJcbiAgcmVzcG9uc2U/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHdoZW4gdGhpcyByZXNvdXJjZSB3YXMgY3JlYXRlZC5cclxuICAgKi9cclxuICBjcmVhdGVkOiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBQYXltZW50Tm90aWNlLmNyZWF0ZWRcclxuICAgKi9cclxuICBfY3JlYXRlZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIHByYWN0aXRpb25lciB3aG8gaXMgcmVzcG9uc2libGUgZm9yIHRoZSBzZXJ2aWNlcyByZW5kZXJlZCB0byB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBwcm92aWRlcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIHBheW1lbnQgd2hpY2ggaXMgdGhlIHN1YmplY3Qgb2YgdGhpcyBub3RpY2UuXHJcbiAgICovXHJcbiAgcGF5bWVudDogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgd2hlbiB0aGUgYWJvdmUgcGF5bWVudCBhY3Rpb24gb2NjdXJyZWQuXHJcbiAgICovXHJcbiAgcGF5bWVudERhdGU/OiBmaGlyLkZoaXJEYXRlfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFBheW1lbnROb3RpY2UucGF5bWVudERhdGVcclxuICAgKi9cclxuICBfcGF5bWVudERhdGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXJ0eSB3aG8gd2lsbCByZWNlaXZlIG9yIGhhcyByZWNlaXZlZCBwYXltZW50IHRoYXQgaXMgdGhlIHN1YmplY3Qgb2YgdGhpcyBub3RpZmljYXRpb24uXHJcbiAgICovXHJcbiAgcGF5ZWU/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXJ0eSB3aG8gaXMgbm90aWZpZWQgb2YgdGhlIHBheW1lbnQgc3RhdHVzLlxyXG4gICAqL1xyXG4gIHJlY2lwaWVudDogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFtb3VudCBzZW50IHRvIHRoZSBwYXllZS5cclxuICAgKi9cclxuICBhbW91bnQ6IGZoaXIuTW9uZXlBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVHlwaWNhbGx5IHBhaWQ6IHBheW1lbnQgc2VudCwgY2xlYXJlZDogcGF5bWVudCByZWNlaXZlZC5cclxuICAgKi9cclxuICBwYXltZW50U3RhdHVzPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgcmVzb3VyY2UgcHJvdmlkZXMgdGhlIHN0YXR1cyBvZiB0aGUgcGF5bWVudCBmb3IgZ29vZHMgYW5kIHNlcnZpY2VzIHJlbmRlcmVkLCBhbmQgdGhlIHJlcXVlc3QgYW5kIHJlc3BvbnNlIHJlc291cmNlIHJlZmVyZW5jZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGF5bWVudE5vdGljZSBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUGF5bWVudE5vdGljZSc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJQYXltZW50Tm90aWNlXCI7XHJcbiAgLyoqXHJcbiAgICogQSB1bmlxdWUgaWRlbnRpZmllciBhc3NpZ25lZCB0byB0aGlzIHBheW1lbnQgbm90aWNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIHJlc291cmNlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1czogZmhpci5GaGlyQ29kZTxGbVN0YXR1c0NvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFJlZmVyZW5jZSBvZiByZXNvdXJjZSBmb3Igd2hpY2ggcGF5bWVudCBpcyBiZWluZyBtYWRlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXF1ZXN0PzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJlZmVyZW5jZSBvZiByZXNwb25zZSB0byByZXNvdXJjZSBmb3Igd2hpY2ggcGF5bWVudCBpcyBiZWluZyBtYWRlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXNwb25zZT86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB3aGVuIHRoaXMgcmVzb3VyY2Ugd2FzIGNyZWF0ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGNyZWF0ZWQ6IGZoaXIuRmhpckRhdGVUaW1lfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIHByYWN0aXRpb25lciB3aG8gaXMgcmVzcG9uc2libGUgZm9yIHRoZSBzZXJ2aWNlcyByZW5kZXJlZCB0byB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgcHJvdmlkZXI/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIHBheW1lbnQgd2hpY2ggaXMgdGhlIHN1YmplY3Qgb2YgdGhpcyBub3RpY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHBheW1lbnQ6IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgd2hlbiB0aGUgYWJvdmUgcGF5bWVudCBhY3Rpb24gb2NjdXJyZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHBheW1lbnREYXRlPzogZmhpci5GaGlyRGF0ZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBhcnR5IHdobyB3aWxsIHJlY2VpdmUgb3IgaGFzIHJlY2VpdmVkIHBheW1lbnQgdGhhdCBpcyB0aGUgc3ViamVjdCBvZiB0aGlzIG5vdGlmaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgcGF5ZWU/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBhcnR5IHdobyBpcyBub3RpZmllZCBvZiB0aGUgcGF5bWVudCBzdGF0dXMuXHJcbiAgICovXHJcbiAgcHVibGljIHJlY2lwaWVudDogZmhpci5SZWZlcmVuY2V8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgYW1vdW50IHNlbnQgdG8gdGhlIHBheWVlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbW91bnQ6IGZoaXIuTW9uZXl8bnVsbDtcclxuICAvKipcclxuICAgKiBUeXBpY2FsbHkgcGFpZDogcGF5bWVudCBzZW50LCBjbGVhcmVkOiBwYXltZW50IHJlY2VpdmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwYXltZW50U3RhdHVzPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFBheW1lbnROb3RpY2UgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxQYXltZW50Tm90aWNlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ1BheW1lbnROb3RpY2UnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxGbVN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxGbVN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3N0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVxdWVzdCddKSB7IHRoaXMucmVxdWVzdCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucmVxdWVzdCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3Jlc3BvbnNlJ10pIHsgdGhpcy5yZXNwb25zZSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucmVzcG9uc2UpOyB9XHJcbiAgICBpZiAoc291cmNlWydjcmVhdGVkJ10pIHsgdGhpcy5jcmVhdGVkID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLmNyZWF0ZWR9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY3JlYXRlZCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jcmVhdGVkJ10pIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZCkgeyB0aGlzLmNyZWF0ZWQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY3JlYXRlZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNyZWF0ZWQgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9jcmVhdGVkIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3Byb3ZpZGVyJ10pIHsgdGhpcy5wcm92aWRlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucHJvdmlkZXIpOyB9XHJcbiAgICBpZiAoc291cmNlWydwYXltZW50J10pIHsgdGhpcy5wYXltZW50ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5wYXltZW50KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucGF5bWVudCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3BheW1lbnREYXRlJ10pIHsgdGhpcy5wYXltZW50RGF0ZSA9IG5ldyBmaGlyLkZoaXJEYXRlKHt2YWx1ZTogc291cmNlLnBheW1lbnREYXRlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19wYXltZW50RGF0ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnBheW1lbnREYXRlKSB7IHRoaXMucGF5bWVudERhdGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fcGF5bWVudERhdGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5wYXltZW50RGF0ZSA9IG5ldyBmaGlyLkZoaXJEYXRlKHNvdXJjZS5fcGF5bWVudERhdGUgYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwYXllZSddKSB7IHRoaXMucGF5ZWUgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnBheWVlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVjaXBpZW50J10pIHsgdGhpcy5yZWNpcGllbnQgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnJlY2lwaWVudCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnJlY2lwaWVudCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ2Ftb3VudCddKSB7IHRoaXMuYW1vdW50ID0gbmV3IGZoaXIuTW9uZXkoc291cmNlLmFtb3VudCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmFtb3VudCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3BheW1lbnRTdGF0dXMnXSkgeyB0aGlzLnBheW1lbnRTdGF0dXMgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnBheW1lbnRTdGF0dXMpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnUGF5bWVudE5vdGljZScgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlBTKCdyZXNvdXJjZVR5cGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2lkZW50aWZpZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlNWKCdzdGF0dXMnLGV4cCwnRm1TdGF0dXMnLEZtU3RhdHVzVnNWYWxpZGF0aW9uLCdyJykpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3JlcXVlc3QnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3Jlc3BvbnNlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdjcmVhdGVkJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdwcm92aWRlcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygncGF5bWVudCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncGF5bWVudERhdGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3BheWVlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdyZWNpcGllbnQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ2Ftb3VudCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncGF5bWVudFN0YXR1cycsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=