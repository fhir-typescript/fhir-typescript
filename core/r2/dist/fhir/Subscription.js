// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
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
        else {
            this.payload = null;
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
            this.header = new fhir.FhirString({ value: source.header });
        }
        if (source['_header']) {
            if (this.header) {
                this.header.addExtendedProperties(source._header);
            }
            else {
                this.header = new fhir.FhirString(source._header);
            }
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
        this.vRS('payload', exp);
        this.vOS('header', exp);
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
        if (source['contact']) {
            this.contact = source.contact.map((x) => new fhir.ContactPoint(x));
        }
        else {
            this.contact = [];
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
        this.vRS('criteria', exp);
        this.vOA('contact', exp);
        this.vRS('reason', exp);
        this.vRSV('status', exp, 'SubscriptionStatus', SubscriptionStatusVsValidation, 'r');
        this.vOS('error', exp);
        this.vRS('channel', exp);
        this.vOS('end', exp);
        this.vOA('tag', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Subscription._fts_dataType = 'Subscription';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9TdWJzY3JpcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUc5RyxhQUFhO0FBQ2IsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUF1Q3BHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLG1CQUFvQixTQUFRLElBQUksQ0FBQyxlQUFlO0lBcUIzRDs7T0FFRztJQUNILFlBQVksU0FBMEMsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDaEcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFrQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3hHO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FBRTtRQUMxQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUM7YUFBRTtpQkFDN0Q7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQWtDLE1BQU0sQ0FBQyxLQUErQixDQUFDLENBQUM7YUFBRTtTQUNqSDtRQUNELElBQUksTUFBTSxDQUFDLFVBQVUs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UUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLG9CQUFvQixFQUFDLDhCQUE4QixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQy9FLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ25CLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBakdEOztHQUVHO0FBQzZCLDBCQUFhLEdBQVUsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBTdWJzY3JpcHRpb25cclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNoYW5uZWxUeXBlQ29kZXMsICBTdWJzY3JpcHRpb25DaGFubmVsVHlwZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TdWJzY3JpcHRpb25DaGFubmVsVHlwZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25DaGFubmVsVHlwZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvblN0YXR1c0NvZGVzLCAgU3Vic2NyaXB0aW9uU3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1YnNjcmlwdGlvblN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25TdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1YnNjcmlwdGlvblN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTdWJzY3JpcHRpb25DaGFubmVsIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvbkNoYW5uZWxBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiBjaGFubmVsIHRvIHNlbmQgbm90aWZpY2F0aW9ucyBvbi5cclxuICAgKi9cclxuICB0eXBlOiBmaGlyLkZoaXJDb2RlPFN1YnNjcmlwdGlvbkNoYW5uZWxUeXBlQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5jaGFubmVsLnR5cGVcclxuICAgKi9cclxuICBfdHlwZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIHVyaSB0aGF0IGRlc2NyaWJlcyB0aGUgYWN0dWFsIGVuZC1wb2ludCB0byBzZW5kIG1lc3NhZ2VzIHRvLlxyXG4gICAqL1xyXG4gIGVuZHBvaW50PzogZmhpci5GaGlyVXJpfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5jaGFubmVsLmVuZHBvaW50XHJcbiAgICovXHJcbiAgX2VuZHBvaW50PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgbWltZSB0eXBlIHRvIHNlbmQgdGhlIHBheWxvYWQgaW4gLSBlaXRoZXIgYXBwbGljYXRpb24veG1sK2ZoaXIsIG9yIGFwcGxpY2F0aW9uL2pzb24rZmhpci4gSWYgdGhlIG1pbWUgdHlwZSBpcyBibGFuaywgdGhlbiB0aGVyZSBpcyBubyBwYXlsb2FkIGluIHRoZSBub3RpZmljYXRpb24sIGp1c3QgYSBub3RpZmljYXRpb24uXHJcbiAgICovXHJcbiAgcGF5bG9hZDogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5jaGFubmVsLnBheWxvYWRcclxuICAgKi9cclxuICBfcGF5bG9hZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBoZWFkZXJzIC8gaW5mb3JtYXRpb24gdG8gc2VuZCBhcyBwYXJ0IG9mIHRoZSBub3RpZmljYXRpb24uXHJcbiAgICovXHJcbiAgaGVhZGVyPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5jaGFubmVsLmhlYWRlclxyXG4gICAqL1xyXG4gIF9oZWFkZXI/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogRGV0YWlscyB3aGVyZSB0byBzZW5kIG5vdGlmaWNhdGlvbnMgd2hlbiByZXNvdXJjZXMgYXJlIHJlY2VpdmVkIHRoYXQgbWVldCB0aGUgY3JpdGVyaWEuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uQ2hhbm5lbCBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1N1YnNjcmlwdGlvbkNoYW5uZWwnO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0eXBlIG9mIGNoYW5uZWwgdG8gc2VuZCBub3RpZmljYXRpb25zIG9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0eXBlOiBmaGlyLkZoaXJDb2RlPFN1YnNjcmlwdGlvbkNoYW5uZWxUeXBlQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIHVyaSB0aGF0IGRlc2NyaWJlcyB0aGUgYWN0dWFsIGVuZC1wb2ludCB0byBzZW5kIG1lc3NhZ2VzIHRvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBlbmRwb2ludD86IGZoaXIuRmhpclVyaXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1pbWUgdHlwZSB0byBzZW5kIHRoZSBwYXlsb2FkIGluIC0gZWl0aGVyIGFwcGxpY2F0aW9uL3htbCtmaGlyLCBvciBhcHBsaWNhdGlvbi9qc29uK2ZoaXIuIElmIHRoZSBtaW1lIHR5cGUgaXMgYmxhbmssIHRoZW4gdGhlcmUgaXMgbm8gcGF5bG9hZCBpbiB0aGUgbm90aWZpY2F0aW9uLCBqdXN0IGEgbm90aWZpY2F0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwYXlsb2FkOiBmaGlyLkZoaXJTdHJpbmd8bnVsbDtcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIGhlYWRlcnMgLyBpbmZvcm1hdGlvbiB0byBzZW5kIGFzIHBhcnQgb2YgdGhlIG5vdGlmaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgaGVhZGVyPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBTdWJzY3JpcHRpb25DaGFubmVsIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8U3Vic2NyaXB0aW9uQ2hhbm5lbEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyd0eXBlJ10pIHsgdGhpcy50eXBlID0gbmV3IGZoaXIuRmhpckNvZGU8U3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2UudHlwZX0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50eXBlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3R5cGUnXSkge1xyXG4gICAgICBpZiAodGhpcy50eXBlKSB7IHRoaXMudHlwZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl90eXBlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudHlwZSA9IG5ldyBmaGlyLkZoaXJDb2RlPFN1YnNjcmlwdGlvbkNoYW5uZWxUeXBlQ29kZVR5cGU+KHNvdXJjZS5fdHlwZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZW5kcG9pbnQnXSkgeyB0aGlzLmVuZHBvaW50ID0gbmV3IGZoaXIuRmhpclVyaSh7dmFsdWU6IHNvdXJjZS5lbmRwb2ludH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZW5kcG9pbnQnXSkge1xyXG4gICAgICBpZiAodGhpcy5lbmRwb2ludCkgeyB0aGlzLmVuZHBvaW50LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2VuZHBvaW50ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZW5kcG9pbnQgPSBuZXcgZmhpci5GaGlyVXJpKHNvdXJjZS5fZW5kcG9pbnQgYXMgUGFydGlhbDxmaGlyLkZoaXJVcmlBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3BheWxvYWQnXSkgeyB0aGlzLnBheWxvYWQgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnBheWxvYWR9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucGF5bG9hZCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19wYXlsb2FkJ10pIHtcclxuICAgICAgaWYgKHRoaXMucGF5bG9hZCkgeyB0aGlzLnBheWxvYWQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fcGF5bG9hZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnBheWxvYWQgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fcGF5bG9hZCBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnaGVhZGVyJ10pIHsgdGhpcy5oZWFkZXIgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmhlYWRlcn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfaGVhZGVyJ10pIHtcclxuICAgICAgaWYgKHRoaXMuaGVhZGVyKSB7IHRoaXMuaGVhZGVyLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2hlYWRlciEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmhlYWRlciA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9oZWFkZXIgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdTdWJzY3JpcHRpb24uY2hhbm5lbCcgfVxyXG4gICAgdGhpcy52UlNWKCd0eXBlJyxleHAsJ1N1YnNjcmlwdGlvbkNoYW5uZWxUeXBlJyxTdWJzY3JpcHRpb25DaGFubmVsVHlwZVZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZPUygnZW5kcG9pbnQnLGV4cClcclxuICAgIHRoaXMudlJTKCdwYXlsb2FkJyxleHApXHJcbiAgICB0aGlzLnZPUygnaGVhZGVyJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgU3Vic2NyaXB0aW9uIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvbkFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIlN1YnNjcmlwdGlvblwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcnVsZXMgdGhhdCB0aGUgc2VydmVyIHNob3VsZCB1c2UgdG8gZGV0ZXJtaW5lIHdoZW4gdG8gZ2VuZXJhdGUgbm90aWZpY2F0aW9ucyBmb3IgdGhpcyBzdWJzY3JpcHRpb24uXHJcbiAgICovXHJcbiAgY3JpdGVyaWE6IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb24uY3JpdGVyaWFcclxuICAgKi9cclxuICBfY3JpdGVyaWE/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvbnRhY3QgZGV0YWlscyBmb3IgYSBodW1hbiB0byBjb250YWN0IGFib3V0IHRoZSBzdWJzY3JpcHRpb24uIFRoZSBwcmltYXJ5IHVzZSBvZiB0aGlzIGZvciBzeXN0ZW0gYWRtaW5pc3RyYXRvciB0cm91Ymxlc2hvb3RpbmcuXHJcbiAgICovXHJcbiAgY29udGFjdD86IGZoaXIuQ29udGFjdFBvaW50QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGRlc2NyaXB0aW9uIG9mIHdoeSB0aGlzIHN1YnNjcmlwdGlvbiBpcyBkZWZpbmVkLlxyXG4gICAqL1xyXG4gIHJlYXNvbjogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5yZWFzb25cclxuICAgKi9cclxuICBfcmVhc29uPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgc3RhdHVzIG9mIHRoZSBzdWJzY3JpcHRpb24sIHdoaWNoIG1hcmtzIHRoZSBzZXJ2ZXIgc3RhdGUgZm9yIG1hbmFnaW5nIHRoZSBzdWJzY3JpcHRpb24uXHJcbiAgICovXHJcbiAgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPFN1YnNjcmlwdGlvblN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb24uc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSByZWNvcmQgb2YgdGhlIGxhc3QgZXJyb3IgdGhhdCBvY2N1cnJlZCB3aGVuIHRoZSBzZXJ2ZXIgcHJvY2Vzc2VkIGEgbm90aWZpY2F0aW9uLlxyXG4gICAqL1xyXG4gIGVycm9yPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5lcnJvclxyXG4gICAqL1xyXG4gIF9lcnJvcj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogRGV0YWlscyB3aGVyZSB0byBzZW5kIG5vdGlmaWNhdGlvbnMgd2hlbiByZXNvdXJjZXMgYXJlIHJlY2VpdmVkIHRoYXQgbWVldCB0aGUgY3JpdGVyaWEuXHJcbiAgICovXHJcbiAgY2hhbm5lbDogZmhpci5TdWJzY3JpcHRpb25DaGFubmVsQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lIGZvciB0aGUgc2VydmVyIHRvIHR1cm4gdGhlIHN1YnNjcmlwdGlvbiBvZmYuXHJcbiAgICovXHJcbiAgZW5kPzogZmhpci5GaGlySW5zdGFudHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb24uZW5kXHJcbiAgICovXHJcbiAgX2VuZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSB0YWcgdG8gYWRkIHRvIGFueSByZXNvdXJjZSB0aGF0IG1hdGNoZXMgdGhlIGNyaXRlcmlhLCBhZnRlciB0aGUgc3Vic2NyaXB0aW9uIGlzIHByb2Nlc3NlZC5cclxuICAgKi9cclxuICB0YWc/OiBmaGlyLkNvZGluZ0FyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgc3Vic2NyaXB0aW9uIHJlc291cmNlIGlzIHVzZWQgdG8gZGVmaW5lIGEgcHVzaCBiYXNlZCBzdWJzY3JpcHRpb24gZnJvbSBhIHNlcnZlciB0byBhbm90aGVyIHN5c3RlbS4gT25jZSBhIHN1YnNjcmlwdGlvbiBpcyByZWdpc3RlcmVkIHdpdGggdGhlIHNlcnZlciwgdGhlIHNlcnZlciBjaGVja3MgZXZlcnkgcmVzb3VyY2UgdGhhdCBpcyBjcmVhdGVkIG9yIHVwZGF0ZWQsIGFuZCBpZiB0aGUgcmVzb3VyY2UgbWF0Y2hlcyB0aGUgZ2l2ZW4gY3JpdGVyaWEsIGl0IHNlbmRzIGEgbWVzc2FnZSBvbiB0aGUgZGVmaW5lZCBcImNoYW5uZWxcIiBzbyB0aGF0IGFub3RoZXIgc3lzdGVtIGlzIGFibGUgdG8gdGFrZSBhbiBhcHByb3ByaWF0ZSBhY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdTdWJzY3JpcHRpb24nO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiU3Vic2NyaXB0aW9uXCI7XHJcbiAgLyoqXHJcbiAgICogVGhlIHJ1bGVzIHRoYXQgdGhlIHNlcnZlciBzaG91bGQgdXNlIHRvIGRldGVybWluZSB3aGVuIHRvIGdlbmVyYXRlIG5vdGlmaWNhdGlvbnMgZm9yIHRoaXMgc3Vic2NyaXB0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjcml0ZXJpYTogZmhpci5GaGlyU3RyaW5nfG51bGw7XHJcbiAgLyoqXHJcbiAgICogQ29udGFjdCBkZXRhaWxzIGZvciBhIGh1bWFuIHRvIGNvbnRhY3QgYWJvdXQgdGhlIHN1YnNjcmlwdGlvbi4gVGhlIHByaW1hcnkgdXNlIG9mIHRoaXMgZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIHRyb3VibGVzaG9vdGluZy5cclxuICAgKi9cclxuICBwdWJsaWMgY29udGFjdDogZmhpci5Db250YWN0UG9pbnRbXTtcclxuICAvKipcclxuICAgKiBBIGRlc2NyaXB0aW9uIG9mIHdoeSB0aGlzIHN1YnNjcmlwdGlvbiBpcyBkZWZpbmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFzb246IGZoaXIuRmhpclN0cmluZ3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzdGF0dXMgb2YgdGhlIHN1YnNjcmlwdGlvbiwgd2hpY2ggbWFya3MgdGhlIHNlcnZlciBzdGF0ZSBmb3IgbWFuYWdpbmcgdGhlIHN1YnNjcmlwdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPFN1YnNjcmlwdGlvblN0YXR1c0NvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEEgcmVjb3JkIG9mIHRoZSBsYXN0IGVycm9yIHRoYXQgb2NjdXJyZWQgd2hlbiB0aGUgc2VydmVyIHByb2Nlc3NlZCBhIG5vdGlmaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgZXJyb3I/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERldGFpbHMgd2hlcmUgdG8gc2VuZCBub3RpZmljYXRpb25zIHdoZW4gcmVzb3VyY2VzIGFyZSByZWNlaXZlZCB0aGF0IG1lZXQgdGhlIGNyaXRlcmlhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjaGFubmVsOiBmaGlyLlN1YnNjcmlwdGlvbkNoYW5uZWx8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgdGltZSBmb3IgdGhlIHNlcnZlciB0byB0dXJuIHRoZSBzdWJzY3JpcHRpb24gb2ZmLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBlbmQ/OiBmaGlyLkZoaXJJbnN0YW50fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIHRhZyB0byBhZGQgdG8gYW55IHJlc291cmNlIHRoYXQgbWF0Y2hlcyB0aGUgY3JpdGVyaWEsIGFmdGVyIHRoZSBzdWJzY3JpcHRpb24gaXMgcHJvY2Vzc2VkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0YWc6IGZoaXIuQ29kaW5nW107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgU3Vic2NyaXB0aW9uIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8U3Vic2NyaXB0aW9uQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ1N1YnNjcmlwdGlvbic7XHJcbiAgICBpZiAoc291cmNlWydjcml0ZXJpYSddKSB7IHRoaXMuY3JpdGVyaWEgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmNyaXRlcmlhfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmNyaXRlcmlhID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NyaXRlcmlhJ10pIHtcclxuICAgICAgaWYgKHRoaXMuY3JpdGVyaWEpIHsgdGhpcy5jcml0ZXJpYS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jcml0ZXJpYSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNyaXRlcmlhID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2NyaXRlcmlhIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjb250YWN0J10pIHsgdGhpcy5jb250YWN0ID0gc291cmNlLmNvbnRhY3QubWFwKCh4KSA9PiBuZXcgZmhpci5Db250YWN0UG9pbnQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb250YWN0ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlYXNvbiddKSB7IHRoaXMucmVhc29uID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5yZWFzb259KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucmVhc29uID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3JlYXNvbiddKSB7XHJcbiAgICAgIGlmICh0aGlzLnJlYXNvbikgeyB0aGlzLnJlYXNvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9yZWFzb24hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5yZWFzb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fcmVhc29uIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydzdGF0dXMnXSkgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPFN1YnNjcmlwdGlvblN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxTdWJzY3JpcHRpb25TdGF0dXNDb2RlVHlwZT4oc291cmNlLl9zdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2Vycm9yJ10pIHsgdGhpcy5lcnJvciA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZXJyb3J9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Vycm9yJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZXJyb3IpIHsgdGhpcy5lcnJvci5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9lcnJvciEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmVycm9yID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Vycm9yIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjaGFubmVsJ10pIHsgdGhpcy5jaGFubmVsID0gbmV3IGZoaXIuU3Vic2NyaXB0aW9uQ2hhbm5lbChzb3VyY2UuY2hhbm5lbCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmNoYW5uZWwgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydlbmQnXSkgeyB0aGlzLmVuZCA9IG5ldyBmaGlyLkZoaXJJbnN0YW50KHt2YWx1ZTogc291cmNlLmVuZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZW5kJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZW5kKSB7IHRoaXMuZW5kLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2VuZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmVuZCA9IG5ldyBmaGlyLkZoaXJJbnN0YW50KHNvdXJjZS5fZW5kIGFzIFBhcnRpYWw8Zmhpci5GaGlySW5zdGFudEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndGFnJ10pIHsgdGhpcy50YWcgPSBzb3VyY2UudGFnLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kaW5nKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMudGFnID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdTdWJzY3JpcHRpb24nIH1cclxuICAgIHRoaXMudlJTKCdyZXNvdXJjZVR5cGUnLGV4cClcclxuICAgIHRoaXMudlJTKCdjcml0ZXJpYScsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2NvbnRhY3QnLGV4cClcclxuICAgIHRoaXMudlJTKCdyZWFzb24nLGV4cClcclxuICAgIHRoaXMudlJTVignc3RhdHVzJyxleHAsJ1N1YnNjcmlwdGlvblN0YXR1cycsU3Vic2NyaXB0aW9uU3RhdHVzVnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHRoaXMudk9TKCdlcnJvcicsZXhwKVxyXG4gICAgdGhpcy52UlMoJ2NoYW5uZWwnLGV4cClcclxuICAgIHRoaXMudk9TKCdlbmQnLGV4cClcclxuICAgIHRoaXMudk9BKCd0YWcnLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==