// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
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
        if (source['statusDate']) {
            this.statusDate = new fhir.FhirDate({ value: source.statusDate });
        }
        if (source['_statusDate']) {
            if (this.statusDate) {
                this.statusDate.addExtendedProperties(source._statusDate);
            }
            else {
                this.statusDate = new fhir.FhirDate(source._statusDate);
            }
        }
        if (source['created']) {
            this.created = new fhir.FhirDateTime({ value: source.created });
        }
        if (source['_created']) {
            if (this.created) {
                this.created.addExtendedProperties(source._created);
            }
            else {
                this.created = new fhir.FhirDateTime(source._created);
            }
        }
        if (source['target']) {
            this.target = new fhir.Reference(source.target);
        }
        if (source['provider']) {
            this.provider = new fhir.Reference(source.provider);
        }
        if (source['organization']) {
            this.organization = new fhir.Reference(source.organization);
        }
        if (source['paymentStatus']) {
            this.paymentStatus = new fhir.CodeableConcept(source.paymentStatus);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'PaymentNotice';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vOSV('status', exp, 'FmStatus', FmStatusVsValidation, 'r');
        this.vOS('request', exp);
        this.vOS('response', exp);
        this.vOS('statusDate', exp);
        this.vOS('created', exp);
        this.vOS('target', exp);
        this.vOS('provider', exp);
        this.vOS('organization', exp);
        this.vOS('paymentStatus', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
PaymentNotice._fts_dataType = 'PaymentNotice';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudE5vdGljZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvUGF5bWVudE5vdGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBbUVoRjs7R0FFRztBQUNILE1BQU0sT0FBTyxhQUFjLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUFpRHBEOztPQUVHO0lBQ0gsWUFBWSxTQUFvQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUMxRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDO1FBQ3BDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUNoRztZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDOUIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBbUIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNwRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLENBQUM7YUFBRTtpQkFDbkU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQW1CLE1BQU0sQ0FBQyxPQUFpQyxDQUFDLENBQUM7YUFBRTtTQUN0RztRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDN0UsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FBRTtRQUNoRixJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDOUYsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDekIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUFFLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFdBQVksQ0FBQyxDQUFDO2FBQUU7aUJBQy9FO2dCQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUF5QyxDQUFDLENBQUM7YUFBRTtTQUNoRztRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7U0FBRTtRQUN6RixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsUUFBUyxDQUFDLENBQUM7YUFBRTtpQkFDdEU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQTBDLENBQUMsQ0FBQzthQUFFO1NBQ2xHO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FBRTtRQUMxRSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUFFO1FBQ2hGLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQUU7UUFDNUYsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7U0FBRTtJQUN2RyxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsZUFBZSxDQUFBO1NBQUU7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLFVBQVUsRUFBQyxvQkFBb0IsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMzRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUM3QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQWhHRDs7R0FFRztBQUM2QiwyQkFBYSxHQUFVLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogUGF5bWVudE5vdGljZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRm1TdGF0dXNDb2RlcywgIEZtU3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ZtU3RhdHVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEZtU3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9GbVN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUGF5bWVudFN0YXR1c0NvZGVzLCAgUGF5bWVudFN0YXR1c0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9QYXltZW50U3RhdHVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFBheW1lbnRTdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1BheW1lbnRTdGF0dXNWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgUGF5bWVudE5vdGljZSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBQYXltZW50Tm90aWNlQXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiUGF5bWVudE5vdGljZVwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbm90aWNlIGJ1c2luZXNzIGlkZW50aWZpZXIuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgY29kZXMgdGhhdCBtYXJrIHRoZSByZXNvdXJjZSBhcyBub3QgY3VycmVudGx5IHZhbGlkLlxyXG4gICAqL1xyXG4gIHN0YXR1cz86IGZoaXIuRmhpckNvZGU8Rm1TdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUGF5bWVudE5vdGljZS5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBSZWZlcmVuY2Ugb2YgcmVzb3VyY2UgZm9yIHdoaWNoIHBheW1lbnQgaXMgYmVpbmcgbWFkZS5cclxuICAgKi9cclxuICByZXF1ZXN0PzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBSZWZlcmVuY2Ugb2YgcmVzcG9uc2UgdG8gcmVzb3VyY2UgZm9yIHdoaWNoIHBheW1lbnQgaXMgYmVpbmcgbWFkZS5cclxuICAgKi9cclxuICByZXNwb25zZT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgd2hlbiB0aGUgYWJvdmUgcGF5bWVudCBhY3Rpb24gb2NjdXJycmVkLlxyXG4gICAqL1xyXG4gIHN0YXR1c0RhdGU/OiBmaGlyLkZoaXJEYXRlfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFBheW1lbnROb3RpY2Uuc3RhdHVzRGF0ZVxyXG4gICAqL1xyXG4gIF9zdGF0dXNEYXRlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB3aGVuIHRoaXMgcmVzb3VyY2Ugd2FzIGNyZWF0ZWQuXHJcbiAgICovXHJcbiAgY3JlYXRlZD86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFBheW1lbnROb3RpY2UuY3JlYXRlZFxyXG4gICAqL1xyXG4gIF9jcmVhdGVkPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgSW5zdXJlciB3aG8gaXMgdGFyZ2V0ICBvZiB0aGUgcmVxdWVzdC5cclxuICAgKi9cclxuICB0YXJnZXQ/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwcmFjdGl0aW9uZXIgd2hvIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgc2VydmljZXMgcmVuZGVyZWQgdG8gdGhlIHBhdGllbnQuXHJcbiAgICovXHJcbiAgcHJvdmlkZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvcmdhbml6YXRpb24gd2hpY2ggaXMgcmVzcG9uc2libGUgZm9yIHRoZSBzZXJ2aWNlcyByZW5kZXJlZCB0byB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBvcmdhbml6YXRpb24/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXltZW50IHN0YXR1cywgdHlwaWNhbGx5IHBhaWQ6IHBheW1lbnQgc2VudCwgY2xlYXJlZDogcGF5bWVudCByZWNlaXZlZC5cclxuICAgKi9cclxuICBwYXltZW50U3RhdHVzPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgcmVzb3VyY2UgcHJvdmlkZXMgdGhlIHN0YXR1cyBvZiB0aGUgcGF5bWVudCBmb3IgZ29vZHMgYW5kIHNlcnZpY2VzIHJlbmRlcmVkLCBhbmQgdGhlIHJlcXVlc3QgYW5kIHJlc3BvbnNlIHJlc291cmNlIHJlZmVyZW5jZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGF5bWVudE5vdGljZSBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUGF5bWVudE5vdGljZSc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJQYXltZW50Tm90aWNlXCI7XHJcbiAgLyoqXHJcbiAgICogVGhlIG5vdGljZSBidXNpbmVzcyBpZGVudGlmaWVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIHJlc291cmNlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1cz86IGZoaXIuRmhpckNvZGU8Rm1TdGF0dXNDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJlZmVyZW5jZSBvZiByZXNvdXJjZSBmb3Igd2hpY2ggcGF5bWVudCBpcyBiZWluZyBtYWRlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXF1ZXN0PzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJlZmVyZW5jZSBvZiByZXNwb25zZSB0byByZXNvdXJjZSBmb3Igd2hpY2ggcGF5bWVudCBpcyBiZWluZyBtYWRlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXNwb25zZT86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB3aGVuIHRoZSBhYm92ZSBwYXltZW50IGFjdGlvbiBvY2N1cnJyZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1c0RhdGU/OiBmaGlyLkZoaXJEYXRlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB3aGVuIHRoaXMgcmVzb3VyY2Ugd2FzIGNyZWF0ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGNyZWF0ZWQ/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIEluc3VyZXIgd2hvIGlzIHRhcmdldCAgb2YgdGhlIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgcHVibGljIHRhcmdldD86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcHJhY3RpdGlvbmVyIHdobyBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHNlcnZpY2VzIHJlbmRlcmVkIHRvIHRoZSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwcm92aWRlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgb3JnYW5pemF0aW9uIHdoaWNoIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgc2VydmljZXMgcmVuZGVyZWQgdG8gdGhlIHBhdGllbnQuXHJcbiAgICovXHJcbiAgcHVibGljIG9yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcGF5bWVudCBzdGF0dXMsIHR5cGljYWxseSBwYWlkOiBwYXltZW50IHNlbnQsIGNsZWFyZWQ6IHBheW1lbnQgcmVjZWl2ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHBheW1lbnRTdGF0dXM/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgUGF5bWVudE5vdGljZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFBheW1lbnROb3RpY2VBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnUGF5bWVudE5vdGljZSc7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gc291cmNlLmlkZW50aWZpZXIubWFwKCh4KSA9PiBuZXcgZmhpci5JZGVudGlmaWVyKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaWRlbnRpZmllciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydzdGF0dXMnXSkgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPEZtU3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN0YXR1c30pOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzKSB7IHRoaXMuc3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPEZtU3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydyZXF1ZXN0J10pIHsgdGhpcy5yZXF1ZXN0ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5yZXF1ZXN0KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVzcG9uc2UnXSkgeyB0aGlzLnJlc3BvbnNlID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5yZXNwb25zZSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1c0RhdGUnXSkgeyB0aGlzLnN0YXR1c0RhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZSh7dmFsdWU6IHNvdXJjZS5zdGF0dXNEYXRlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXNEYXRlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzRGF0ZSkgeyB0aGlzLnN0YXR1c0RhdGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzRGF0ZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1c0RhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZShzb3VyY2UuX3N0YXR1c0RhdGUgYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjcmVhdGVkJ10pIHsgdGhpcy5jcmVhdGVkID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLmNyZWF0ZWR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NyZWF0ZWQnXSkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGVkKSB7IHRoaXMuY3JlYXRlZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jcmVhdGVkISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY3JlYXRlZCA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX2NyZWF0ZWQgYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndGFyZ2V0J10pIHsgdGhpcy50YXJnZXQgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnRhcmdldCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3Byb3ZpZGVyJ10pIHsgdGhpcy5wcm92aWRlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucHJvdmlkZXIpOyB9XHJcbiAgICBpZiAoc291cmNlWydvcmdhbml6YXRpb24nXSkgeyB0aGlzLm9yZ2FuaXphdGlvbiA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uub3JnYW5pemF0aW9uKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncGF5bWVudFN0YXR1cyddKSB7IHRoaXMucGF5bWVudFN0YXR1cyA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UucGF5bWVudFN0YXR1cyk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdQYXltZW50Tm90aWNlJyB9XHJcbiAgICB0aGlzLnZSUygncmVzb3VyY2VUeXBlJyxleHApXHJcbiAgICB0aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKVxyXG4gICAgdGhpcy52T1NWKCdzdGF0dXMnLGV4cCwnRm1TdGF0dXMnLEZtU3RhdHVzVnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHRoaXMudk9TKCdyZXF1ZXN0JyxleHApXHJcbiAgICB0aGlzLnZPUygncmVzcG9uc2UnLGV4cClcclxuICAgIHRoaXMudk9TKCdzdGF0dXNEYXRlJyxleHApXHJcbiAgICB0aGlzLnZPUygnY3JlYXRlZCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3RhcmdldCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3Byb3ZpZGVyJyxleHApXHJcbiAgICB0aGlzLnZPUygnb3JnYW5pemF0aW9uJyxleHApXHJcbiAgICB0aGlzLnZPUygncGF5bWVudFN0YXR1cycsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19