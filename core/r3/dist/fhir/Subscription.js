// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Subscription
import * as fhir from '../fhir.js';
// @ts-ignore
import { SubscriptionChannelTypeVsValidation } from '../fhirValueSets/SubscriptionChannelTypeVsValidation.js';
// @ts-ignore
import { SubscriptionStatusVsValidation } from '../fhirValueSets/SubscriptionStatusVsValidation.js';
/**
 * Details where to send notifications when resources are received that meet the criteria.
 */
export class SubscriptionChannel extends fhir.BackboneElement {
    /**
     * Default constructor for SubscriptionChannel - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['type']) {
            this.type = new fhir.FhirCode({ value: source.type });
        }
        else {
            this.type = null;
        }
        if (source['_type']) {
            if (this.type) {
                this.type.addExtendedProperties(source._type);
            }
            else {
                this.type = new fhir.FhirCode(source._type);
            }
        }
        if (source['endpoint']) {
            this.endpoint = new fhir.FhirUri({ value: source.endpoint });
        }
        if (source['_endpoint']) {
            if (this.endpoint) {
                this.endpoint.addExtendedProperties(source._endpoint);
            }
            else {
                this.endpoint = new fhir.FhirUri(source._endpoint);
            }
        }
        if (source['payload']) {
            this.payload = new fhir.FhirString({ value: source.payload });
        }
        if (source['_payload']) {
            if (this.payload) {
                this.payload.addExtendedProperties(source._payload);
            }
            else {
                this.payload = new fhir.FhirString(source._payload);
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
            exp = 'Subscription.channel';
        }
        this.vRSV('type', exp, 'SubscriptionChannelType', SubscriptionChannelTypeVsValidation, 'r');
        this.vOS('endpoint', exp);
        this.vOS('payload', exp);
        this.vOA('header', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SubscriptionChannel._fts_dataType = 'SubscriptionChannel';
/**
 * The subscription resource is used to define a push based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system is able to take an appropriate action.
 */
export class Subscription extends fhir.DomainResource {
    /**
     * Default constructor for Subscription - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Subscription';
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
        if (source['contact']) {
            this.contact = source.contact.map((x) => new fhir.ContactPoint(x));
        }
        else {
            this.contact = [];
        }
        if (source['end']) {
            this.end = new fhir.FhirInstant({ value: source.end });
        }
        if (source['_end']) {
            if (this.end) {
                this.end.addExtendedProperties(source._end);
            }
            else {
                this.end = new fhir.FhirInstant(source._end);
            }
        }
        if (source['reason']) {
            this.reason = new fhir.FhirString({ value: source.reason });
        }
        else {
            this.reason = null;
        }
        if (source['_reason']) {
            if (this.reason) {
                this.reason.addExtendedProperties(source._reason);
            }
            else {
                this.reason = new fhir.FhirString(source._reason);
            }
        }
        if (source['criteria']) {
            this.criteria = new fhir.FhirString({ value: source.criteria });
        }
        else {
            this.criteria = null;
        }
        if (source['_criteria']) {
            if (this.criteria) {
                this.criteria.addExtendedProperties(source._criteria);
            }
            else {
                this.criteria = new fhir.FhirString(source._criteria);
            }
        }
        if (source['error']) {
            this.error = new fhir.FhirString({ value: source.error });
        }
        if (source['_error']) {
            if (this.error) {
                this.error.addExtendedProperties(source._error);
            }
            else {
                this.error = new fhir.FhirString(source._error);
            }
        }
        if (source['channel']) {
            this.channel = new fhir.SubscriptionChannel(source.channel);
        }
        else {
            this.channel = null;
        }
        if (source['tag']) {
            this.tag = source.tag.map((x) => new fhir.Coding(x));
        }
        else {
            this.tag = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Subscription';
        }
        this.vRS('resourceType', exp);
        this.vRSV('status', exp, 'SubscriptionStatus', SubscriptionStatusVsValidation, 'r');
        this.vOA('contact', exp);
        this.vOS('end', exp);
        this.vRS('reason', exp);
        this.vRS('criteria', exp);
        this.vOS('error', exp);
        this.vRS('channel', exp);
        this.vOA('tag', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Subscription._fts_dataType = 'Subscription';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9TdWJzY3JpcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUc5RyxhQUFhO0FBQ2IsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUEyQ3BHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLG1CQUFvQixTQUFRLElBQUksQ0FBQyxlQUFlO0lBcUIzRDs7T0FFRztJQUNILFlBQVksU0FBMEMsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDaEcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFrQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3hHO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FBRTtRQUMxQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUM7YUFBRTtpQkFDN0Q7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQWtDLE1BQU0sQ0FBQyxLQUErQixDQUFDLENBQUM7YUFBRTtTQUNqSDtRQUNELElBQUksTUFBTSxDQUFDLFVBQVUs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QUM7U0FBRTthQUN2RTtZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQUU7SUFDekIsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLGNBQWMsQ0FBQTtTQUFFO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyxvQkFBb0IsRUFBQyw4QkFBOEIsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMvRSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNuQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQWxHRDs7R0FFRztBQUM2QiwwQkFBYSxHQUFVLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogU3Vic2NyaXB0aW9uXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25DaGFubmVsVHlwZUNvZGVzLCAgU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1YnNjcmlwdGlvbkNoYW5uZWxUeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25TdGF0dXNDb2RlcywgIFN1YnNjcmlwdGlvblN0YXR1c0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TdWJzY3JpcHRpb25TdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uU3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TdWJzY3JpcHRpb25TdGF0dXNWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvblRhZ0NvZGVzLCAgU3Vic2NyaXB0aW9uVGFnQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1YnNjcmlwdGlvblRhZ0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25UYWdWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1YnNjcmlwdGlvblRhZ1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTdWJzY3JpcHRpb25DaGFubmVsIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvbkNoYW5uZWxBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiBjaGFubmVsIHRvIHNlbmQgbm90aWZpY2F0aW9ucyBvbi5cclxuICAgKi9cclxuICB0eXBlOiBmaGlyLkZoaXJDb2RlPFN1YnNjcmlwdGlvbkNoYW5uZWxUeXBlQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5jaGFubmVsLnR5cGVcclxuICAgKi9cclxuICBfdHlwZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogRm9yIHJlc3QtaG9vaywgYW5kIHdlYnNvY2tldCwgdGhlIGVuZC1wb2ludCBtdXN0IGJlIGFuIGh0dHA6IG9yIGh0dHBzOiBVUkw7IGZvciBlbWFpbCwgYSBtYWlsdG86IHVybCwgZm9yIHNtcywgYSB0ZWw6IHVybCwgYW5kIGZvciBtZXNzYWdlIHRoZSBlbmRwb2ludCBjYW4gYmUgaW4gYW55IGZvcm0gb2YgdXJsIHRoZSBzZXJ2ZXIgdW5kZXJzdGFuZHMgKHVzdWFsbHksIGh0dHA6IG9yIG1sbHA6KS4gVGhlIFVSSSBpcyBhbGxvd2VkIHRvIGJlIHJlbGF0aXZlOyBpbiB3aGljaCBjYXNlLCBpdCBpcyByZWxhdGl2ZSB0byB0aGUgc2VydmVyIGVuZC1wb2ludCAoc2luY2UgdGhlaXIgbWF5IGJlIG1vcmUgdGhhbiBvbmUsIGNsaWVudHMgc2hvdWxkIGF2b2lkIHVzaW5nIHJlbGF0aXZlIFVSSXMpLlxyXG4gICAqL1xyXG4gIGVuZHBvaW50PzogZmhpci5GaGlyVXJpfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5jaGFubmVsLmVuZHBvaW50XHJcbiAgICovXHJcbiAgX2VuZHBvaW50PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBTZW5kaW5nIHRoZSBwYXlsb2FkIGhhcyBvYnZpb3VzIHNlY3VyaXR5IGltcGxpY2F0aW9ucy4gVGhlIHNlcnZlciBpcyByZXNwb25zaWJsZSBmb3IgZW5zdXJpbmcgdGhhdCB0aGUgY29udGVudCBpcyBhcHByb3ByaWF0ZWx5IHNlY3VyZWQuXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb24uY2hhbm5lbC5wYXlsb2FkXHJcbiAgICovXHJcbiAgX3BheWxvYWQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEV4YWN0bHkgd2hhdCB0aGVzZSBtZWFuIGRlcGVuZCBvbiB0aGUgY2hhbm5lbCB0eXBlLiBUaGV5IGNhbiBjb252ZXkgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiB0byB0aGUgcmVjaXBpZW50IGFuZC9vciBtZWV0IHNlY3VyaXR5IHJlcXVpcmVtZW50czsgZm9yIGV4YW1wbGUsIHN1cHBvcnQgb2YgbXVsdGlwbGUgaGVhZGVycyBpbiB0aGUgb3V0Z29pbmcgbm90aWZpY2F0aW9ucyBmb3IgcmVzdC1ob29rIHR5cGUgc3Vic2NyaXB0aW9ucy5cclxuICAgKi9cclxuICBoZWFkZXI/OiBmaGlyLkZoaXJTdHJpbmdbXXwoc3RyaW5nfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb24uY2hhbm5lbC5oZWFkZXJcclxuICAgKi9cclxuICBfaGVhZGVyPzooZmhpci5GaGlyRWxlbWVudEFyZ3N8bnVsbClbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGFpbHMgd2hlcmUgdG8gc2VuZCBub3RpZmljYXRpb25zIHdoZW4gcmVzb3VyY2VzIGFyZSByZWNlaXZlZCB0aGF0IG1lZXQgdGhlIGNyaXRlcmlhLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN1YnNjcmlwdGlvbkNoYW5uZWwgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdTdWJzY3JpcHRpb25DaGFubmVsJztcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiBjaGFubmVsIHRvIHNlbmQgbm90aWZpY2F0aW9ucyBvbi5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZTogZmhpci5GaGlyQ29kZTxTdWJzY3JpcHRpb25DaGFubmVsVHlwZUNvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEZvciByZXN0LWhvb2ssIGFuZCB3ZWJzb2NrZXQsIHRoZSBlbmQtcG9pbnQgbXVzdCBiZSBhbiBodHRwOiBvciBodHRwczogVVJMOyBmb3IgZW1haWwsIGEgbWFpbHRvOiB1cmwsIGZvciBzbXMsIGEgdGVsOiB1cmwsIGFuZCBmb3IgbWVzc2FnZSB0aGUgZW5kcG9pbnQgY2FuIGJlIGluIGFueSBmb3JtIG9mIHVybCB0aGUgc2VydmVyIHVuZGVyc3RhbmRzICh1c3VhbGx5LCBodHRwOiBvciBtbGxwOikuIFRoZSBVUkkgaXMgYWxsb3dlZCB0byBiZSByZWxhdGl2ZTsgaW4gd2hpY2ggY2FzZSwgaXQgaXMgcmVsYXRpdmUgdG8gdGhlIHNlcnZlciBlbmQtcG9pbnQgKHNpbmNlIHRoZWlyIG1heSBiZSBtb3JlIHRoYW4gb25lLCBjbGllbnRzIHNob3VsZCBhdm9pZCB1c2luZyByZWxhdGl2ZSBVUklzKS5cclxuICAgKi9cclxuICBwdWJsaWMgZW5kcG9pbnQ/OiBmaGlyLkZoaXJVcml8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFNlbmRpbmcgdGhlIHBheWxvYWQgaGFzIG9idmlvdXMgc2VjdXJpdHkgaW1wbGljYXRpb25zLiBUaGUgc2VydmVyIGlzIHJlc3BvbnNpYmxlIGZvciBlbnN1cmluZyB0aGF0IHRoZSBjb250ZW50IGlzIGFwcHJvcHJpYXRlbHkgc2VjdXJlZC5cclxuICAgKi9cclxuICBwdWJsaWMgcGF5bG9hZD86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXhhY3RseSB3aGF0IHRoZXNlIG1lYW4gZGVwZW5kIG9uIHRoZSBjaGFubmVsIHR5cGUuIFRoZXkgY2FuIGNvbnZleSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRvIHRoZSByZWNpcGllbnQgYW5kL29yIG1lZXQgc2VjdXJpdHkgcmVxdWlyZW1lbnRzOyBmb3IgZXhhbXBsZSwgc3VwcG9ydCBvZiBtdWx0aXBsZSBoZWFkZXJzIGluIHRoZSBvdXRnb2luZyBub3RpZmljYXRpb25zIGZvciByZXN0LWhvb2sgdHlwZSBzdWJzY3JpcHRpb25zLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBoZWFkZXI6IGZoaXIuRmhpclN0cmluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFN1YnNjcmlwdGlvbkNoYW5uZWwgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxTdWJzY3JpcHRpb25DaGFubmVsQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZTxTdWJzY3JpcHRpb25DaGFubmVsVHlwZUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS50eXBlfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnR5cGUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfdHlwZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnR5cGUpIHsgdGhpcy50eXBlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3R5cGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy50eXBlID0gbmV3IGZoaXIuRmhpckNvZGU8U3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVDb2RlVHlwZT4oc291cmNlLl90eXBlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydlbmRwb2ludCddKSB7IHRoaXMuZW5kcG9pbnQgPSBuZXcgZmhpci5GaGlyVXJpKHt2YWx1ZTogc291cmNlLmVuZHBvaW50fSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19lbmRwb2ludCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmVuZHBvaW50KSB7IHRoaXMuZW5kcG9pbnQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZW5kcG9pbnQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5lbmRwb2ludCA9IG5ldyBmaGlyLkZoaXJVcmkoc291cmNlLl9lbmRwb2ludCBhcyBQYXJ0aWFsPGZoaXIuRmhpclVyaUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncGF5bG9hZCddKSB7IHRoaXMucGF5bG9hZCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UucGF5bG9hZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfcGF5bG9hZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLnBheWxvYWQpIHsgdGhpcy5wYXlsb2FkLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3BheWxvYWQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5wYXlsb2FkID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX3BheWxvYWQgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2hlYWRlciddKSB7IHRoaXMuaGVhZGVyID0gc291cmNlLmhlYWRlci5tYXAoKHgpID0+IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiB4fSkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5oZWFkZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2hlYWRlciddKSB7XHJcbiAgICAgIHNvdXJjZS5faGVhZGVyLmZvckVhY2goKHgsaSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWRlci5sZW5ndGggPj0gaSkgeyBpZiAoeCkgeyB0aGlzLmhlYWRlcltpXS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoeCk7IH0gfVxyXG4gICAgICAgIGVsc2UgeyBpZiAoeCkgeyB0aGlzLmhlYWRlci5wdXNoKG5ldyBmaGlyLkZoaXJTdHJpbmcoeCBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KSk7IH0gfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdTdWJzY3JpcHRpb24uY2hhbm5lbCcgfVxyXG4gICAgdGhpcy52UlNWKCd0eXBlJyxleHAsJ1N1YnNjcmlwdGlvbkNoYW5uZWxUeXBlJyxTdWJzY3JpcHRpb25DaGFubmVsVHlwZVZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZPUygnZW5kcG9pbnQnLGV4cClcclxuICAgIHRoaXMudk9TKCdwYXlsb2FkJyxleHApXHJcbiAgICB0aGlzLnZPQSgnaGVhZGVyJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgU3Vic2NyaXB0aW9uIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvbkFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIlN1YnNjcmlwdGlvblwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGNsaWVudCBjYW4gb25seSBzdWJtaXQgc3Vic2NyaXB0aW9uIHJlc291cmNlcyBpbiB0aGUgcmVxdWVzdGVkIG9yIG9mZiBzdGF0ZS4gT25seSB0aGUgc2VydmVyIGNhbiAgbW92ZSBhIHN1YnNjcmlwdGlvbiBmcm9tIHJlcXVlc3RlZCB0byBhY3RpdmUsIGFuZCB0aGVuIHRvIGVycm9yLiBFaXRoZXIgdGhlIHNlcnZlciBvciB0aGUgY2xpZW50IGNhbiB0dXJuIGEgc3Vic2NyaXB0aW9uIG9mZi5cclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIHJlc291cmNlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPFN1YnNjcmlwdGlvblN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb24uc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ29udGFjdCBkZXRhaWxzIGZvciBhIGh1bWFuIHRvIGNvbnRhY3QgYWJvdXQgdGhlIHN1YnNjcmlwdGlvbi4gVGhlIHByaW1hcnkgdXNlIG9mIHRoaXMgZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIHRyb3VibGVzaG9vdGluZy5cclxuICAgKi9cclxuICBjb250YWN0PzogZmhpci5Db250YWN0UG9pbnRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2ZXIgaXMgcGVybWl0dGVkIHRvIGRldmlhdGUgZnJvbSB0aGlzIHRpbWUsIGJ1dCBzaG91bGQgb2JzZXJ2ZSBpdC5cclxuICAgKi9cclxuICBlbmQ/OiBmaGlyLkZoaXJJbnN0YW50fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5lbmRcclxuICAgKi9cclxuICBfZW5kPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIGRlc2NyaXB0aW9uIG9mIHdoeSB0aGlzIHN1YnNjcmlwdGlvbiBpcyBkZWZpbmVkLlxyXG4gICAqL1xyXG4gIHJlYXNvbjogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5yZWFzb25cclxuICAgKi9cclxuICBfcmVhc29uPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgcnVsZXMgYXJlIGEgc2VhcmNoIGNyaXRlcmlhICh3aXRob3V0IHRoZSBbYmFzZV0gcGFydCkuIExpa2UgQnVuZGxlLmVudHJ5LnJlcXVlc3QudXJsLCBpdCBoYXMgbm8gbGVhZGluZyBcIi9cIi5cclxuICAgKi9cclxuICBjcml0ZXJpYTogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5jcml0ZXJpYVxyXG4gICAqL1xyXG4gIF9jcml0ZXJpYT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSByZWNvcmQgb2YgdGhlIGxhc3QgZXJyb3IgdGhhdCBvY2N1cnJlZCB3aGVuIHRoZSBzZXJ2ZXIgcHJvY2Vzc2VkIGEgbm90aWZpY2F0aW9uLlxyXG4gICAqL1xyXG4gIGVycm9yPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5lcnJvclxyXG4gICAqL1xyXG4gIF9lcnJvcj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogRGV0YWlscyB3aGVyZSB0byBzZW5kIG5vdGlmaWNhdGlvbnMgd2hlbiByZXNvdXJjZXMgYXJlIHJlY2VpdmVkIHRoYXQgbWVldCB0aGUgY3JpdGVyaWEuXHJcbiAgICovXHJcbiAgY2hhbm5lbDogZmhpci5TdWJzY3JpcHRpb25DaGFubmVsQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFNvIHRoYXQgb3RoZXIgc3lzdGVtcyBjYW4gdGVsbCB3aGljaCByZXNvdXJjZXMgaGF2ZSBiZWVuIHRoZSBzdWJqZWN0IG9mIGEgbm90aWZpY2F0aW9uLlxyXG4gICAqL1xyXG4gIHRhZz86IGZoaXIuQ29kaW5nQXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBzdWJzY3JpcHRpb24gcmVzb3VyY2UgaXMgdXNlZCB0byBkZWZpbmUgYSBwdXNoIGJhc2VkIHN1YnNjcmlwdGlvbiBmcm9tIGEgc2VydmVyIHRvIGFub3RoZXIgc3lzdGVtLiBPbmNlIGEgc3Vic2NyaXB0aW9uIGlzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgc2VydmVyLCB0aGUgc2VydmVyIGNoZWNrcyBldmVyeSByZXNvdXJjZSB0aGF0IGlzIGNyZWF0ZWQgb3IgdXBkYXRlZCwgYW5kIGlmIHRoZSByZXNvdXJjZSBtYXRjaGVzIHRoZSBnaXZlbiBjcml0ZXJpYSwgaXQgc2VuZHMgYSBtZXNzYWdlIG9uIHRoZSBkZWZpbmVkIFwiY2hhbm5lbFwiIHNvIHRoYXQgYW5vdGhlciBzeXN0ZW0gaXMgYWJsZSB0byB0YWtlIGFuIGFwcHJvcHJpYXRlIGFjdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb24gZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1N1YnNjcmlwdGlvbic7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJTdWJzY3JpcHRpb25cIjtcclxuICAvKipcclxuICAgKiBBIGNsaWVudCBjYW4gb25seSBzdWJtaXQgc3Vic2NyaXB0aW9uIHJlc291cmNlcyBpbiB0aGUgcmVxdWVzdGVkIG9yIG9mZiBzdGF0ZS4gT25seSB0aGUgc2VydmVyIGNhbiAgbW92ZSBhIHN1YnNjcmlwdGlvbiBmcm9tIHJlcXVlc3RlZCB0byBhY3RpdmUsIGFuZCB0aGVuIHRvIGVycm9yLiBFaXRoZXIgdGhlIHNlcnZlciBvciB0aGUgY2xpZW50IGNhbiB0dXJuIGEgc3Vic2NyaXB0aW9uIG9mZi5cclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIHJlc291cmNlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1czogZmhpci5GaGlyQ29kZTxTdWJzY3JpcHRpb25TdGF0dXNDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBDb250YWN0IGRldGFpbHMgZm9yIGEgaHVtYW4gdG8gY29udGFjdCBhYm91dCB0aGUgc3Vic2NyaXB0aW9uLiBUaGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3IgdHJvdWJsZXNob290aW5nLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb250YWN0OiBmaGlyLkNvbnRhY3RQb2ludFtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2ZXIgaXMgcGVybWl0dGVkIHRvIGRldmlhdGUgZnJvbSB0aGlzIHRpbWUsIGJ1dCBzaG91bGQgb2JzZXJ2ZSBpdC5cclxuICAgKi9cclxuICBwdWJsaWMgZW5kPzogZmhpci5GaGlySW5zdGFudHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBkZXNjcmlwdGlvbiBvZiB3aHkgdGhpcyBzdWJzY3JpcHRpb24gaXMgZGVmaW5lZC5cclxuICAgKi9cclxuICBwdWJsaWMgcmVhc29uOiBmaGlyLkZoaXJTdHJpbmd8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgcnVsZXMgYXJlIGEgc2VhcmNoIGNyaXRlcmlhICh3aXRob3V0IHRoZSBbYmFzZV0gcGFydCkuIExpa2UgQnVuZGxlLmVudHJ5LnJlcXVlc3QudXJsLCBpdCBoYXMgbm8gbGVhZGluZyBcIi9cIi5cclxuICAgKi9cclxuICBwdWJsaWMgY3JpdGVyaWE6IGZoaXIuRmhpclN0cmluZ3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIEEgcmVjb3JkIG9mIHRoZSBsYXN0IGVycm9yIHRoYXQgb2NjdXJyZWQgd2hlbiB0aGUgc2VydmVyIHByb2Nlc3NlZCBhIG5vdGlmaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgZXJyb3I/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERldGFpbHMgd2hlcmUgdG8gc2VuZCBub3RpZmljYXRpb25zIHdoZW4gcmVzb3VyY2VzIGFyZSByZWNlaXZlZCB0aGF0IG1lZXQgdGhlIGNyaXRlcmlhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjaGFubmVsOiBmaGlyLlN1YnNjcmlwdGlvbkNoYW5uZWx8bnVsbDtcclxuICAvKipcclxuICAgKiBTbyB0aGF0IG90aGVyIHN5c3RlbXMgY2FuIHRlbGwgd2hpY2ggcmVzb3VyY2VzIGhhdmUgYmVlbiB0aGUgc3ViamVjdCBvZiBhIG5vdGlmaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgdGFnOiBmaGlyLkNvZGluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFN1YnNjcmlwdGlvbiAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFN1YnNjcmlwdGlvbkFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdTdWJzY3JpcHRpb24nO1xyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxTdWJzY3JpcHRpb25TdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdHVzfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMpIHsgdGhpcy5zdGF0dXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8U3Vic2NyaXB0aW9uU3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjb250YWN0J10pIHsgdGhpcy5jb250YWN0ID0gc291cmNlLmNvbnRhY3QubWFwKCh4KSA9PiBuZXcgZmhpci5Db250YWN0UG9pbnQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb250YWN0ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2VuZCddKSB7IHRoaXMuZW5kID0gbmV3IGZoaXIuRmhpckluc3RhbnQoe3ZhbHVlOiBzb3VyY2UuZW5kfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19lbmQnXSkge1xyXG4gICAgICBpZiAodGhpcy5lbmQpIHsgdGhpcy5lbmQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZW5kISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZW5kID0gbmV3IGZoaXIuRmhpckluc3RhbnQoc291cmNlLl9lbmQgYXMgUGFydGlhbDxmaGlyLkZoaXJJbnN0YW50QXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydyZWFzb24nXSkgeyB0aGlzLnJlYXNvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UucmVhc29ufSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnJlYXNvbiA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19yZWFzb24nXSkge1xyXG4gICAgICBpZiAodGhpcy5yZWFzb24pIHsgdGhpcy5yZWFzb24uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fcmVhc29uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucmVhc29uID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX3JlYXNvbiBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnY3JpdGVyaWEnXSkgeyB0aGlzLmNyaXRlcmlhID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5jcml0ZXJpYX0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jcml0ZXJpYSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jcml0ZXJpYSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyaXRlcmlhKSB7IHRoaXMuY3JpdGVyaWEuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY3JpdGVyaWEhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jcml0ZXJpYSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9jcml0ZXJpYSBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZXJyb3InXSkgeyB0aGlzLmVycm9yID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5lcnJvcn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZXJyb3InXSkge1xyXG4gICAgICBpZiAodGhpcy5lcnJvcikgeyB0aGlzLmVycm9yLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2Vycm9yISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZXJyb3IgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fZXJyb3IgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NoYW5uZWwnXSkgeyB0aGlzLmNoYW5uZWwgPSBuZXcgZmhpci5TdWJzY3JpcHRpb25DaGFubmVsKHNvdXJjZS5jaGFubmVsKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY2hhbm5lbCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3RhZyddKSB7IHRoaXMudGFnID0gc291cmNlLnRhZy5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGluZyh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnRhZyA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnU3Vic2NyaXB0aW9uJyB9XHJcbiAgICB0aGlzLnZSUygncmVzb3VyY2VUeXBlJyxleHApXHJcbiAgICB0aGlzLnZSU1YoJ3N0YXR1cycsZXhwLCdTdWJzY3JpcHRpb25TdGF0dXMnLFN1YnNjcmlwdGlvblN0YXR1c1ZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZPQSgnY29udGFjdCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2VuZCcsZXhwKVxyXG4gICAgdGhpcy52UlMoJ3JlYXNvbicsZXhwKVxyXG4gICAgdGhpcy52UlMoJ2NyaXRlcmlhJyxleHApXHJcbiAgICB0aGlzLnZPUygnZXJyb3InLGV4cClcclxuICAgIHRoaXMudlJTKCdjaGFubmVsJyxleHApXHJcbiAgICB0aGlzLnZPQSgndGFnJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=