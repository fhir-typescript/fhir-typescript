// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
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
            this.endpoint = new fhir.FhirUrl({ value: source.endpoint });
        }
        if (source['_endpoint']) {
            if (this.endpoint) {
                this.endpoint.addExtendedProperties(source._endpoint);
            }
            else {
                this.endpoint = new fhir.FhirUrl(source._endpoint);
            }
        }
        if (source['payload']) {
            this.payload = new fhir.FhirCode({ value: source.payload });
        }
        if (source['_payload']) {
            if (this.payload) {
                this.payload.addExtendedProperties(source._payload);
            }
            else {
                this.payload = new fhir.FhirCode(source._payload);
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
            exp = 'Subscription.channel';
        }
        iss.push(...this.vRSV('type', exp, 'SubscriptionChannelType', SubscriptionChannelTypeVsValidation, 'r'));
        iss.push(...this.vOS('endpoint', exp));
        iss.push(...this.vOS('payload', exp));
        iss.push(...this.vOA('header', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SubscriptionChannel._fts_dataType = 'SubscriptionChannel';
/**
 * The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
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
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Subscription';
        }
        iss.push(...this.vRPS('resourceType', exp));
        iss.push(...this.vRSV('status', exp, 'SubscriptionStatus', SubscriptionStatusVsValidation, 'r'));
        iss.push(...this.vOA('contact', exp));
        iss.push(...this.vOS('end', exp));
        iss.push(...this.vRS('reason', exp));
        iss.push(...this.vRS('criteria', exp));
        iss.push(...this.vOS('error', exp));
        iss.push(...this.vRS('channel', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Subscription._fts_dataType = 'Subscription';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9TdWJzY3JpcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUc5RyxhQUFhO0FBQ2IsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUF1Q3BHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLG1CQUFvQixTQUFRLElBQUksQ0FBQyxlQUFlO0lBcUIzRDs7T0FFRztJQUNILFlBQVksU0FBMEMsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDaEcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFrQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3hHO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FBRTtRQUMxQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUM7YUFBRTtpQkFDN0Q7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQWtDLE1BQU0sQ0FBQyxLQUErQixDQUFDLENBQUM7YUFBRTtTQUNqSDtRQUNELElBQUksTUFBTSxDQUFDLFVBQVUs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OlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogU3Vic2NyaXB0aW9uXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25DaGFubmVsVHlwZUNvZGVzLCAgU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1YnNjcmlwdGlvbkNoYW5uZWxUeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25TdGF0dXNDb2RlcywgIFN1YnNjcmlwdGlvblN0YXR1c0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TdWJzY3JpcHRpb25TdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uU3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TdWJzY3JpcHRpb25TdGF0dXNWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgU3Vic2NyaXB0aW9uQ2hhbm5lbCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdWJzY3JpcHRpb25DaGFubmVsQXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgb2YgY2hhbm5lbCB0byBzZW5kIG5vdGlmaWNhdGlvbnMgb24uXHJcbiAgICovXHJcbiAgdHlwZTogZmhpci5GaGlyQ29kZTxTdWJzY3JpcHRpb25DaGFubmVsVHlwZUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb24uY2hhbm5lbC50eXBlXHJcbiAgICovXHJcbiAgX3R5cGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEZvciByZXN0LWhvb2ssIGFuZCB3ZWJzb2NrZXQsIHRoZSBlbmQtcG9pbnQgbXVzdCBiZSBhbiBodHRwOiBvciBodHRwczogVVJMOyBmb3IgZW1haWwsIGEgbWFpbHRvOiB1cmwsIGZvciBzbXMsIGEgdGVsOiB1cmwsIGFuZCBmb3IgbWVzc2FnZSB0aGUgZW5kcG9pbnQgY2FuIGJlIGluIGFueSBmb3JtIG9mIHVybCB0aGUgc2VydmVyIHVuZGVyc3RhbmRzICh1c3VhbGx5LCBodHRwOiBvciBtbGxwOikuIFRoZSBVUkkgaXMgYWxsb3dlZCB0byBiZSByZWxhdGl2ZTsgaW4gd2hpY2ggY2FzZSwgaXQgaXMgcmVsYXRpdmUgdG8gdGhlIHNlcnZlciBlbmQtcG9pbnQgKHNpbmNlIHRoZXJlIG1heSBiZSBtb3JlIHRoYW4gb25lLCBjbGllbnRzIHNob3VsZCBhdm9pZCB1c2luZyByZWxhdGl2ZSBVUklzKS5cclxuICAgKi9cclxuICBlbmRwb2ludD86IGZoaXIuRmhpclVybHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb24uY2hhbm5lbC5lbmRwb2ludFxyXG4gICAqL1xyXG4gIF9lbmRwb2ludD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogU2VuZGluZyB0aGUgcGF5bG9hZCBoYXMgb2J2aW91cyBzZWN1cml0eSBpbXBsaWNhdGlvbnMuIFRoZSBzZXJ2ZXIgaXMgcmVzcG9uc2libGUgZm9yIGVuc3VyaW5nIHRoYXQgdGhlIGNvbnRlbnQgaXMgYXBwcm9wcmlhdGVseSBzZWN1cmVkLlxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBmaGlyLkZoaXJDb2RlfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5jaGFubmVsLnBheWxvYWRcclxuICAgKi9cclxuICBfcGF5bG9hZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogRXhhY3RseSB3aGF0IHRoZXNlIG1lYW4gZGVwZW5kIG9uIHRoZSBjaGFubmVsIHR5cGUuIFRoZXkgY2FuIGNvbnZleSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRvIHRoZSByZWNpcGllbnQgYW5kL29yIG1lZXQgc2VjdXJpdHkgcmVxdWlyZW1lbnRzOyBmb3IgZXhhbXBsZSwgc3VwcG9ydCBvZiBtdWx0aXBsZSBoZWFkZXJzIGluIHRoZSBvdXRnb2luZyBub3RpZmljYXRpb25zIGZvciByZXN0LWhvb2sgdHlwZSBzdWJzY3JpcHRpb25zLlxyXG4gICAqL1xyXG4gIGhlYWRlcj86IGZoaXIuRmhpclN0cmluZ1tdfChzdHJpbmd8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5jaGFubmVsLmhlYWRlclxyXG4gICAqL1xyXG4gIF9oZWFkZXI/OihmaGlyLkZoaXJFbGVtZW50QXJnc3xudWxsKVtdO1xyXG59XHJcblxyXG4vKipcclxuICogRGV0YWlscyB3aGVyZSB0byBzZW5kIG5vdGlmaWNhdGlvbnMgd2hlbiByZXNvdXJjZXMgYXJlIHJlY2VpdmVkIHRoYXQgbWVldCB0aGUgY3JpdGVyaWEuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uQ2hhbm5lbCBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1N1YnNjcmlwdGlvbkNoYW5uZWwnO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0eXBlIG9mIGNoYW5uZWwgdG8gc2VuZCBub3RpZmljYXRpb25zIG9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0eXBlOiBmaGlyLkZoaXJDb2RlPFN1YnNjcmlwdGlvbkNoYW5uZWxUeXBlQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogRm9yIHJlc3QtaG9vaywgYW5kIHdlYnNvY2tldCwgdGhlIGVuZC1wb2ludCBtdXN0IGJlIGFuIGh0dHA6IG9yIGh0dHBzOiBVUkw7IGZvciBlbWFpbCwgYSBtYWlsdG86IHVybCwgZm9yIHNtcywgYSB0ZWw6IHVybCwgYW5kIGZvciBtZXNzYWdlIHRoZSBlbmRwb2ludCBjYW4gYmUgaW4gYW55IGZvcm0gb2YgdXJsIHRoZSBzZXJ2ZXIgdW5kZXJzdGFuZHMgKHVzdWFsbHksIGh0dHA6IG9yIG1sbHA6KS4gVGhlIFVSSSBpcyBhbGxvd2VkIHRvIGJlIHJlbGF0aXZlOyBpbiB3aGljaCBjYXNlLCBpdCBpcyByZWxhdGl2ZSB0byB0aGUgc2VydmVyIGVuZC1wb2ludCAoc2luY2UgdGhlcmUgbWF5IGJlIG1vcmUgdGhhbiBvbmUsIGNsaWVudHMgc2hvdWxkIGF2b2lkIHVzaW5nIHJlbGF0aXZlIFVSSXMpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBlbmRwb2ludD86IGZoaXIuRmhpclVybHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogU2VuZGluZyB0aGUgcGF5bG9hZCBoYXMgb2J2aW91cyBzZWN1cml0eSBpbXBsaWNhdGlvbnMuIFRoZSBzZXJ2ZXIgaXMgcmVzcG9uc2libGUgZm9yIGVuc3VyaW5nIHRoYXQgdGhlIGNvbnRlbnQgaXMgYXBwcm9wcmlhdGVseSBzZWN1cmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwYXlsb2FkPzogZmhpci5GaGlyQ29kZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXhhY3RseSB3aGF0IHRoZXNlIG1lYW4gZGVwZW5kIG9uIHRoZSBjaGFubmVsIHR5cGUuIFRoZXkgY2FuIGNvbnZleSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRvIHRoZSByZWNpcGllbnQgYW5kL29yIG1lZXQgc2VjdXJpdHkgcmVxdWlyZW1lbnRzOyBmb3IgZXhhbXBsZSwgc3VwcG9ydCBvZiBtdWx0aXBsZSBoZWFkZXJzIGluIHRoZSBvdXRnb2luZyBub3RpZmljYXRpb25zIGZvciByZXN0LWhvb2sgdHlwZSBzdWJzY3JpcHRpb25zLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBoZWFkZXI6IGZoaXIuRmhpclN0cmluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFN1YnNjcmlwdGlvbkNoYW5uZWwgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxTdWJzY3JpcHRpb25DaGFubmVsQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZTxTdWJzY3JpcHRpb25DaGFubmVsVHlwZUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS50eXBlfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnR5cGUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfdHlwZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnR5cGUpIHsgdGhpcy50eXBlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3R5cGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy50eXBlID0gbmV3IGZoaXIuRmhpckNvZGU8U3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVDb2RlVHlwZT4oc291cmNlLl90eXBlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydlbmRwb2ludCddKSB7IHRoaXMuZW5kcG9pbnQgPSBuZXcgZmhpci5GaGlyVXJsKHt2YWx1ZTogc291cmNlLmVuZHBvaW50fSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19lbmRwb2ludCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmVuZHBvaW50KSB7IHRoaXMuZW5kcG9pbnQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZW5kcG9pbnQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5lbmRwb2ludCA9IG5ldyBmaGlyLkZoaXJVcmwoc291cmNlLl9lbmRwb2ludCBhcyBQYXJ0aWFsPGZoaXIuRmhpclVybEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncGF5bG9hZCddKSB7IHRoaXMucGF5bG9hZCA9IG5ldyBmaGlyLkZoaXJDb2RlKHt2YWx1ZTogc291cmNlLnBheWxvYWR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3BheWxvYWQnXSkge1xyXG4gICAgICBpZiAodGhpcy5wYXlsb2FkKSB7IHRoaXMucGF5bG9hZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9wYXlsb2FkISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucGF5bG9hZCA9IG5ldyBmaGlyLkZoaXJDb2RlKHNvdXJjZS5fcGF5bG9hZCBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2hlYWRlciddKSB7IHRoaXMuaGVhZGVyID0gc291cmNlLmhlYWRlci5tYXAoKHgpID0+IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiB4fSkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5oZWFkZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2hlYWRlciddKSB7XHJcbiAgICAgIHNvdXJjZS5faGVhZGVyLmZvckVhY2goKHgsaSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWRlci5sZW5ndGggPj0gaSkgeyBpZiAoeCkgeyB0aGlzLmhlYWRlcltpXS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoeCk7IH0gfVxyXG4gICAgICAgIGVsc2UgeyBpZiAoeCkgeyB0aGlzLmhlYWRlci5wdXNoKG5ldyBmaGlyLkZoaXJTdHJpbmcoeCBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KSk7IH0gfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdTdWJzY3JpcHRpb24uY2hhbm5lbCcgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlNWKCd0eXBlJyxleHAsJ1N1YnNjcmlwdGlvbkNoYW5uZWxUeXBlJyxTdWJzY3JpcHRpb25DaGFubmVsVHlwZVZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdlbmRwb2ludCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncGF5bG9hZCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaGVhZGVyJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTdWJzY3JpcHRpb24gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3Vic2NyaXB0aW9uQXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiU3Vic2NyaXB0aW9uXCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgY2xpZW50IGNhbiBvbmx5IHN1Ym1pdCBzdWJzY3JpcHRpb24gcmVzb3VyY2VzIGluIHRoZSByZXF1ZXN0ZWQgb3Igb2ZmIHN0YXRlLiBPbmx5IHRoZSBzZXJ2ZXIgY2FuICBtb3ZlIGEgc3Vic2NyaXB0aW9uIGZyb20gcmVxdWVzdGVkIHRvIGFjdGl2ZSwgYW5kIHRoZW4gdG8gZXJyb3IuIEVpdGhlciB0aGUgc2VydmVyIG9yIHRoZSBjbGllbnQgY2FuIHR1cm4gYSBzdWJzY3JpcHRpb24gb2ZmLlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSB0aGUgc3RhdHVzIGNvbnRhaW5zIGNvZGVzIHRoYXQgbWFyayB0aGUgcmVzb3VyY2UgYXMgbm90IGN1cnJlbnRseSB2YWxpZC5cclxuICAgKi9cclxuICBzdGF0dXM6IGZoaXIuRmhpckNvZGU8U3Vic2NyaXB0aW9uU3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBDb250YWN0IGRldGFpbHMgZm9yIGEgaHVtYW4gdG8gY29udGFjdCBhYm91dCB0aGUgc3Vic2NyaXB0aW9uLiBUaGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3IgdHJvdWJsZXNob290aW5nLlxyXG4gICAqL1xyXG4gIGNvbnRhY3Q/OiBmaGlyLkNvbnRhY3RQb2ludEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHNlcnZlciBpcyBwZXJtaXR0ZWQgdG8gZGV2aWF0ZSBmcm9tIHRoaXMgdGltZSBidXQgc2hvdWxkIG9ic2VydmUgaXQuXHJcbiAgICovXHJcbiAgZW5kPzogZmhpci5GaGlySW5zdGFudHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb24uZW5kXHJcbiAgICovXHJcbiAgX2VuZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSBkZXNjcmlwdGlvbiBvZiB3aHkgdGhpcyBzdWJzY3JpcHRpb24gaXMgZGVmaW5lZC5cclxuICAgKi9cclxuICByZWFzb246IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb24ucmVhc29uXHJcbiAgICovXHJcbiAgX3JlYXNvbj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIHJ1bGVzIGFyZSBzZWFyY2ggY3JpdGVyaWEgKHdpdGhvdXQgdGhlIFtiYXNlXSBwYXJ0KS4gTGlrZSBCdW5kbGUuZW50cnkucmVxdWVzdC51cmwsIGl0IGhhcyBubyBsZWFkaW5nIFwiL1wiLlxyXG4gICAqL1xyXG4gIGNyaXRlcmlhOiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU3Vic2NyaXB0aW9uLmNyaXRlcmlhXHJcbiAgICovXHJcbiAgX2NyaXRlcmlhPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIHJlY29yZCBvZiB0aGUgbGFzdCBlcnJvciB0aGF0IG9jY3VycmVkIHdoZW4gdGhlIHNlcnZlciBwcm9jZXNzZWQgYSBub3RpZmljYXRpb24uXHJcbiAgICovXHJcbiAgZXJyb3I/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU3Vic2NyaXB0aW9uLmVycm9yXHJcbiAgICovXHJcbiAgX2Vycm9yPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBEZXRhaWxzIHdoZXJlIHRvIHNlbmQgbm90aWZpY2F0aW9ucyB3aGVuIHJlc291cmNlcyBhcmUgcmVjZWl2ZWQgdGhhdCBtZWV0IHRoZSBjcml0ZXJpYS5cclxuICAgKi9cclxuICBjaGFubmVsOiBmaGlyLlN1YnNjcmlwdGlvbkNoYW5uZWxBcmdzfG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgc3Vic2NyaXB0aW9uIHJlc291cmNlIGlzIHVzZWQgdG8gZGVmaW5lIGEgcHVzaC1iYXNlZCBzdWJzY3JpcHRpb24gZnJvbSBhIHNlcnZlciB0byBhbm90aGVyIHN5c3RlbS4gT25jZSBhIHN1YnNjcmlwdGlvbiBpcyByZWdpc3RlcmVkIHdpdGggdGhlIHNlcnZlciwgdGhlIHNlcnZlciBjaGVja3MgZXZlcnkgcmVzb3VyY2UgdGhhdCBpcyBjcmVhdGVkIG9yIHVwZGF0ZWQsIGFuZCBpZiB0aGUgcmVzb3VyY2UgbWF0Y2hlcyB0aGUgZ2l2ZW4gY3JpdGVyaWEsIGl0IHNlbmRzIGEgbWVzc2FnZSBvbiB0aGUgZGVmaW5lZCBcImNoYW5uZWxcIiBzbyB0aGF0IGFub3RoZXIgc3lzdGVtIGNhbiB0YWtlIGFuIGFwcHJvcHJpYXRlIGFjdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb24gZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1N1YnNjcmlwdGlvbic7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJTdWJzY3JpcHRpb25cIjtcclxuICAvKipcclxuICAgKiBBIGNsaWVudCBjYW4gb25seSBzdWJtaXQgc3Vic2NyaXB0aW9uIHJlc291cmNlcyBpbiB0aGUgcmVxdWVzdGVkIG9yIG9mZiBzdGF0ZS4gT25seSB0aGUgc2VydmVyIGNhbiAgbW92ZSBhIHN1YnNjcmlwdGlvbiBmcm9tIHJlcXVlc3RlZCB0byBhY3RpdmUsIGFuZCB0aGVuIHRvIGVycm9yLiBFaXRoZXIgdGhlIHNlcnZlciBvciB0aGUgY2xpZW50IGNhbiB0dXJuIGEgc3Vic2NyaXB0aW9uIG9mZi5cclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIHJlc291cmNlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1czogZmhpci5GaGlyQ29kZTxTdWJzY3JpcHRpb25TdGF0dXNDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBDb250YWN0IGRldGFpbHMgZm9yIGEgaHVtYW4gdG8gY29udGFjdCBhYm91dCB0aGUgc3Vic2NyaXB0aW9uLiBUaGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3IgdHJvdWJsZXNob290aW5nLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb250YWN0OiBmaGlyLkNvbnRhY3RQb2ludFtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2ZXIgaXMgcGVybWl0dGVkIHRvIGRldmlhdGUgZnJvbSB0aGlzIHRpbWUgYnV0IHNob3VsZCBvYnNlcnZlIGl0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBlbmQ/OiBmaGlyLkZoaXJJbnN0YW50fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGRlc2NyaXB0aW9uIG9mIHdoeSB0aGlzIHN1YnNjcmlwdGlvbiBpcyBkZWZpbmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFzb246IGZoaXIuRmhpclN0cmluZ3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBydWxlcyBhcmUgc2VhcmNoIGNyaXRlcmlhICh3aXRob3V0IHRoZSBbYmFzZV0gcGFydCkuIExpa2UgQnVuZGxlLmVudHJ5LnJlcXVlc3QudXJsLCBpdCBoYXMgbm8gbGVhZGluZyBcIi9cIi5cclxuICAgKi9cclxuICBwdWJsaWMgY3JpdGVyaWE6IGZoaXIuRmhpclN0cmluZ3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIEEgcmVjb3JkIG9mIHRoZSBsYXN0IGVycm9yIHRoYXQgb2NjdXJyZWQgd2hlbiB0aGUgc2VydmVyIHByb2Nlc3NlZCBhIG5vdGlmaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgZXJyb3I/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERldGFpbHMgd2hlcmUgdG8gc2VuZCBub3RpZmljYXRpb25zIHdoZW4gcmVzb3VyY2VzIGFyZSByZWNlaXZlZCB0aGF0IG1lZXQgdGhlIGNyaXRlcmlhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjaGFubmVsOiBmaGlyLlN1YnNjcmlwdGlvbkNoYW5uZWx8bnVsbDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBTdWJzY3JpcHRpb24gLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxTdWJzY3JpcHRpb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnU3Vic2NyaXB0aW9uJztcclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8U3Vic2NyaXB0aW9uU3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN0YXR1c30pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzKSB7IHRoaXMuc3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPFN1YnNjcmlwdGlvblN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3N0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnY29udGFjdCddKSB7IHRoaXMuY29udGFjdCA9IHNvdXJjZS5jb250YWN0Lm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29udGFjdFBvaW50KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29udGFjdCA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydlbmQnXSkgeyB0aGlzLmVuZCA9IG5ldyBmaGlyLkZoaXJJbnN0YW50KHt2YWx1ZTogc291cmNlLmVuZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZW5kJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZW5kKSB7IHRoaXMuZW5kLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2VuZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmVuZCA9IG5ldyBmaGlyLkZoaXJJbnN0YW50KHNvdXJjZS5fZW5kIGFzIFBhcnRpYWw8Zmhpci5GaGlySW5zdGFudEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVhc29uJ10pIHsgdGhpcy5yZWFzb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnJlYXNvbn0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5yZWFzb24gPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfcmVhc29uJ10pIHtcclxuICAgICAgaWYgKHRoaXMucmVhc29uKSB7IHRoaXMucmVhc29uLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3JlYXNvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnJlYXNvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9yZWFzb24gYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NyaXRlcmlhJ10pIHsgdGhpcy5jcml0ZXJpYSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuY3JpdGVyaWF9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY3JpdGVyaWEgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfY3JpdGVyaWEnXSkge1xyXG4gICAgICBpZiAodGhpcy5jcml0ZXJpYSkgeyB0aGlzLmNyaXRlcmlhLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NyaXRlcmlhISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY3JpdGVyaWEgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fY3JpdGVyaWEgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2Vycm9yJ10pIHsgdGhpcy5lcnJvciA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZXJyb3J9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Vycm9yJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZXJyb3IpIHsgdGhpcy5lcnJvci5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9lcnJvciEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmVycm9yID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Vycm9yIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjaGFubmVsJ10pIHsgdGhpcy5jaGFubmVsID0gbmV3IGZoaXIuU3Vic2NyaXB0aW9uQ2hhbm5lbChzb3VyY2UuY2hhbm5lbCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmNoYW5uZWwgPSBudWxsOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnU3Vic2NyaXB0aW9uJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUFMoJ3Jlc291cmNlVHlwZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSU1YoJ3N0YXR1cycsZXhwLCdTdWJzY3JpcHRpb25TdGF0dXMnLFN1YnNjcmlwdGlvblN0YXR1c1ZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdjb250YWN0JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdlbmQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ3JlYXNvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygnY3JpdGVyaWEnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2Vycm9yJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdjaGFubmVsJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==