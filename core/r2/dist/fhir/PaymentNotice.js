// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: PaymentNotice
import * as fhir from '../fhir.js';
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
        if (source['ruleset']) {
            this.ruleset = new fhir.Coding(source.ruleset);
        }
        if (source['originalRuleset']) {
            this.originalRuleset = new fhir.Coding(source.originalRuleset);
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
        if (source['request']) {
            this.request = new fhir.Reference(source.request);
        }
        if (source['response']) {
            this.response = new fhir.Reference(source.response);
        }
        if (source['paymentStatus']) {
            this.paymentStatus = new fhir.Coding(source.paymentStatus);
        }
        else {
            this.paymentStatus = null;
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
        this.vOS('ruleset', exp);
        this.vOS('originalRuleset', exp);
        this.vOS('created', exp);
        this.vOS('target', exp);
        this.vOS('provider', exp);
        this.vOS('organization', exp);
        this.vOS('request', exp);
        this.vOS('response', exp);
        this.vRS('paymentStatus', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
PaymentNotice._fts_dataType = 'PaymentNotice';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudE5vdGljZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvUGF5bWVudE5vdGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUF3RG5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGFBQWMsU0FBUSxJQUFJLENBQUMsY0FBYztJQWlEcEQ7O09BRUc7SUFDSCxZQUFZLFNBQW9DLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQzFGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUM7UUFDcEMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2hHO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQzFFLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7U0FBRTtRQUNsRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJ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QUFDOztBQXpGRDs7R0FFRztBQUM2QiwyQkFBYSxHQUFVLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMi5jb3JlIHZlcnNpb246IDEuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogUGF5bWVudE5vdGljZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBQYXltZW50Tm90aWNlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFBheW1lbnROb3RpY2VBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJQYXltZW50Tm90aWNlXCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBSZXNwb25zZSBidXNpbmVzcyBpZGVudGlmaWVyLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBzdHlsZSBvZiByZXNvdXJjZSBjb250ZW50cy4gVGhpcyBzaG91bGQgYmUgbWFwcGVkIHRvIHRoZSBhbGxvd2FibGUgcHJvZmlsZXMgZm9yIHRoaXMgYW5kIHN1cHBvcnRpbmcgcmVzb3VyY2VzLlxyXG4gICAqL1xyXG4gIHJ1bGVzZXQ/OiBmaGlyLkNvZGluZ0FyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEtub3dsZWRnZSBvZiB0aGUgb3JpZ2luYWwgdmVyc2lvbiBjYW4gaW5mb3JtIHRoZSBwcm9jZXNzaW5nIG9mIHRoaXMgaW5zdGFuY2Ugc28gdGhhdCBpbmZvcm1hdGlvbiB3aGljaCBpcyBwcm9jZXNzYWJsZSBieSB0aGUgb3JpZ2luYXRpbmcgc3lzdGVtIG1heSBiZSBnZW5lcmF0ZWQuXHJcbiAgICovXHJcbiAgb3JpZ2luYWxSdWxlc2V0PzogZmhpci5Db2RpbmdBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB3aGVuIHRoaXMgcmVzb3VyY2Ugd2FzIGNyZWF0ZWQuXHJcbiAgICovXHJcbiAgY3JlYXRlZD86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFBheW1lbnROb3RpY2UuY3JlYXRlZFxyXG4gICAqL1xyXG4gIF9jcmVhdGVkPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgSW5zdXJlciB3aG8gaXMgdGFyZ2V0ICBvZiB0aGUgcmVxdWVzdC5cclxuICAgKi9cclxuICB0YXJnZXQ/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwcmFjdGl0aW9uZXIgd2hvIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgc2VydmljZXMgcmVuZGVyZWQgdG8gdGhlIHBhdGllbnQuXHJcbiAgICovXHJcbiAgcHJvdmlkZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvcmdhbml6YXRpb24gd2hpY2ggaXMgcmVzcG9uc2libGUgZm9yIHRoZSBzZXJ2aWNlcyByZW5kZXJlZCB0byB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBvcmdhbml6YXRpb24/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJlZmVyZW5jZSBvZiByZXNvdXJjZSB0byByZXZlcnNlLlxyXG4gICAqL1xyXG4gIHJlcXVlc3Q/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJlZmVyZW5jZSBvZiByZXNwb25zZSB0byByZXNvdXJjZSB0byByZXZlcnNlLlxyXG4gICAqL1xyXG4gIHJlc3BvbnNlPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcGF5bWVudCBzdGF0dXMsIHR5cGljYWxseSBwYWlkOiBwYXltZW50IHNlbnQsIGNsZWFyZWQ6IHBheW1lbnQgcmVjZWl2ZWQuXHJcbiAgICovXHJcbiAgcGF5bWVudFN0YXR1czogZmhpci5Db2RpbmdBcmdzfG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIHJlc291cmNlIHByb3ZpZGVzIHRoZSBzdGF0dXMgb2YgdGhlIHBheW1lbnQgZm9yIGdvb2RzIGFuZCBzZXJ2aWNlcyByZW5kZXJlZCwgYW5kIHRoZSByZXF1ZXN0IGFuZCByZXNwb25zZSByZXNvdXJjZSByZWZlcmVuY2VzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBheW1lbnROb3RpY2UgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1BheW1lbnROb3RpY2UnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiUGF5bWVudE5vdGljZVwiO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBSZXNwb25zZSBidXNpbmVzcyBpZGVudGlmaWVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgc3R5bGUgb2YgcmVzb3VyY2UgY29udGVudHMuIFRoaXMgc2hvdWxkIGJlIG1hcHBlZCB0byB0aGUgYWxsb3dhYmxlIHByb2ZpbGVzIGZvciB0aGlzIGFuZCBzdXBwb3J0aW5nIHJlc291cmNlcy5cclxuICAgKi9cclxuICBwdWJsaWMgcnVsZXNldD86IGZoaXIuQ29kaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBLbm93bGVkZ2Ugb2YgdGhlIG9yaWdpbmFsIHZlcnNpb24gY2FuIGluZm9ybSB0aGUgcHJvY2Vzc2luZyBvZiB0aGlzIGluc3RhbmNlIHNvIHRoYXQgaW5mb3JtYXRpb24gd2hpY2ggaXMgcHJvY2Vzc2FibGUgYnkgdGhlIG9yaWdpbmF0aW5nIHN5c3RlbSBtYXkgYmUgZ2VuZXJhdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvcmlnaW5hbFJ1bGVzZXQ/OiBmaGlyLkNvZGluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgd2hlbiB0aGlzIHJlc291cmNlIHdhcyBjcmVhdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjcmVhdGVkPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBJbnN1cmVyIHdobyBpcyB0YXJnZXQgIG9mIHRoZSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0YXJnZXQ/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHByYWN0aXRpb25lciB3aG8gaXMgcmVzcG9uc2libGUgZm9yIHRoZSBzZXJ2aWNlcyByZW5kZXJlZCB0byB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgcHJvdmlkZXI/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIG9yZ2FuaXphdGlvbiB3aGljaCBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHNlcnZpY2VzIHJlbmRlcmVkIHRvIHRoZSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvcmdhbml6YXRpb24/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVmZXJlbmNlIG9mIHJlc291cmNlIHRvIHJldmVyc2UuXHJcbiAgICovXHJcbiAgcHVibGljIHJlcXVlc3Q/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVmZXJlbmNlIG9mIHJlc3BvbnNlIHRvIHJlc291cmNlIHRvIHJldmVyc2UuXHJcbiAgICovXHJcbiAgcHVibGljIHJlc3BvbnNlPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXltZW50IHN0YXR1cywgdHlwaWNhbGx5IHBhaWQ6IHBheW1lbnQgc2VudCwgY2xlYXJlZDogcGF5bWVudCByZWNlaXZlZC5cclxuICAgKi9cclxuICBwdWJsaWMgcGF5bWVudFN0YXR1czogZmhpci5Db2Rpbmd8bnVsbDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBQYXltZW50Tm90aWNlIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8UGF5bWVudE5vdGljZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdQYXltZW50Tm90aWNlJztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3J1bGVzZXQnXSkgeyB0aGlzLnJ1bGVzZXQgPSBuZXcgZmhpci5Db2Rpbmcoc291cmNlLnJ1bGVzZXQpOyB9XHJcbiAgICBpZiAoc291cmNlWydvcmlnaW5hbFJ1bGVzZXQnXSkgeyB0aGlzLm9yaWdpbmFsUnVsZXNldCA9IG5ldyBmaGlyLkNvZGluZyhzb3VyY2Uub3JpZ2luYWxSdWxlc2V0KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY3JlYXRlZCddKSB7IHRoaXMuY3JlYXRlZCA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5jcmVhdGVkfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jcmVhdGVkJ10pIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZCkgeyB0aGlzLmNyZWF0ZWQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY3JlYXRlZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNyZWF0ZWQgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9jcmVhdGVkIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3RhcmdldCddKSB7IHRoaXMudGFyZ2V0ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS50YXJnZXQpOyB9XHJcbiAgICBpZiAoc291cmNlWydwcm92aWRlciddKSB7IHRoaXMucHJvdmlkZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnByb3ZpZGVyKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnb3JnYW5pemF0aW9uJ10pIHsgdGhpcy5vcmdhbml6YXRpb24gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLm9yZ2FuaXphdGlvbik7IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlcXVlc3QnXSkgeyB0aGlzLnJlcXVlc3QgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnJlcXVlc3QpOyB9XHJcbiAgICBpZiAoc291cmNlWydyZXNwb25zZSddKSB7IHRoaXMucmVzcG9uc2UgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnJlc3BvbnNlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncGF5bWVudFN0YXR1cyddKSB7IHRoaXMucGF5bWVudFN0YXR1cyA9IG5ldyBmaGlyLkNvZGluZyhzb3VyY2UucGF5bWVudFN0YXR1cyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnBheW1lbnRTdGF0dXMgPSBudWxsOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnUGF5bWVudE5vdGljZScgfVxyXG4gICAgdGhpcy52UlMoJ3Jlc291cmNlVHlwZScsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2lkZW50aWZpZXInLGV4cClcclxuICAgIHRoaXMudk9TKCdydWxlc2V0JyxleHApXHJcbiAgICB0aGlzLnZPUygnb3JpZ2luYWxSdWxlc2V0JyxleHApXHJcbiAgICB0aGlzLnZPUygnY3JlYXRlZCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3RhcmdldCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3Byb3ZpZGVyJyxleHApXHJcbiAgICB0aGlzLnZPUygnb3JnYW5pemF0aW9uJyxleHApXHJcbiAgICB0aGlzLnZPUygncmVxdWVzdCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3Jlc3BvbnNlJyxleHApXHJcbiAgICB0aGlzLnZSUygncGF5bWVudFN0YXR1cycsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19