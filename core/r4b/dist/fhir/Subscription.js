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
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Subscription._fts_dataType = 'Subscription';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9TdWJzY3JpcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUc5RyxhQUFhO0FBQ2IsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUF1Q3BHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLG1CQUFvQixTQUFRLElBQUksQ0FBQyxlQUFlO0lBcUIzRDs7T0FFRztJQUNILFlBQVksU0FBMEMsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDaEcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFrQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3hHO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FBRTtRQUMxQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUM7YUFBRTtpQkFDN0Q7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQWtDLE1BQU0sQ0FBQyxLQUErQixDQUFDLENBQUM7YUFBRTtTQUNqSDtRQUNELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7U0FBRTtRQUN2RixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsU0FBVSxDQUFDLENBQUM7YUFBRTtpQkFDekU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQXNDLENBQUMsQ0FBQzthQUFFO1NBQzFGO1FBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3JGLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxRQUFTLENBQUMsQ0FBQzthQUFFO2lCQUN0RTtnQkFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBc0MsQ0FBQyxDQUFDO2FBQUU7U0FDMUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUM3RjtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDMUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQzdCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUFFLElBQUksQ0FBQyxFQUFFO3dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQUU7aUJBQUU7cUJBQy9FO29CQUFFLElBQUksQ0FBQyxFQUFFO3dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFpQyxDQUFDLENBQUMsQ0FBQztxQkFBRTtpQkFBRTtZQUMvRixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLHNCQUFzQixDQUFBO1NBQUU7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLHlCQUF5QixFQUFDLG1DQUFtQyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZGLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBN0REOztHQUVHO0FBQzZCLGlDQUFhLEdBQVUscUJBQXFCLENBQUM7QUF1SC9FOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFlBQWEsU0FBUSxJQUFJLENBQUMsY0FBYztJQXNDbkQ7O09BRUc7SUFDSCxZQUFZLFNBQW1DLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3pGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7UUFDbkMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBNkIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FBRTthQUN6RztZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDNUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLE9BQVEsQ0FBQyxDQUFDO2FBQUU7aUJBQ25FO2dCQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUE2QixNQUFNLENBQUMsT0FBaUMsQ0FBQyxDQUFDO2FBQUU7U0FDaEg7UUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDekY7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzNCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7U0FBRTtRQUM1RSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsSUFBSyxDQUFDLENBQUM7YUFBRTtpQkFDMUQ7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQXFDLENBQUMsQ0FBQzthQUFFO1NBQ3hGO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQy9FO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLENBQUM7YUFBRTtpQkFDbkU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQXVDLENBQUMsQ0FBQzthQUFFO1NBQzVGO1FBQ0QsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3JGO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsU0FBVSxDQUFDLENBQUM7YUFBRTtpQkFDekU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQXlDLENBQUMsQ0FBQzthQUFFO1NBQ2hHO1FBQ0QsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ2pGLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxNQUFPLENBQUMsQ0FBQzthQUFFO2lCQUNoRTtnQkFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBc0MsQ0FBQyxDQUFDO2FBQUU7U0FDMUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDbEY7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUFFO0lBQy9CLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxjQUFjLENBQUE7U0FBRTtRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsb0JBQW9CLEVBQUMsOEJBQThCLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUEzRkQ7O0dBRUc7QUFDNkIsMEJBQWEsR0FBVSxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBTdWJzY3JpcHRpb25cclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNoYW5uZWxUeXBlQ29kZXMsICBTdWJzY3JpcHRpb25DaGFubmVsVHlwZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TdWJzY3JpcHRpb25DaGFubmVsVHlwZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25DaGFubmVsVHlwZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvblN0YXR1c0NvZGVzLCAgU3Vic2NyaXB0aW9uU3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1YnNjcmlwdGlvblN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25TdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1YnNjcmlwdGlvblN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTdWJzY3JpcHRpb25DaGFubmVsIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvbkNoYW5uZWxBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiBjaGFubmVsIHRvIHNlbmQgbm90aWZpY2F0aW9ucyBvbi5cclxuICAgKi9cclxuICB0eXBlOiBmaGlyLkZoaXJDb2RlPFN1YnNjcmlwdGlvbkNoYW5uZWxUeXBlQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5jaGFubmVsLnR5cGVcclxuICAgKi9cclxuICBfdHlwZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogRm9yIHJlc3QtaG9vaywgYW5kIHdlYnNvY2tldCwgdGhlIGVuZC1wb2ludCBtdXN0IGJlIGFuIGh0dHA6IG9yIGh0dHBzOiBVUkw7IGZvciBlbWFpbCwgYSBtYWlsdG86IHVybCwgZm9yIHNtcywgYSB0ZWw6IHVybCwgYW5kIGZvciBtZXNzYWdlIHRoZSBlbmRwb2ludCBjYW4gYmUgaW4gYW55IGZvcm0gb2YgdXJsIHRoZSBzZXJ2ZXIgdW5kZXJzdGFuZHMgKHVzdWFsbHksIGh0dHA6IG9yIG1sbHA6KS4gVGhlIFVSSSBpcyBhbGxvd2VkIHRvIGJlIHJlbGF0aXZlOyBpbiB3aGljaCBjYXNlLCBpdCBpcyByZWxhdGl2ZSB0byB0aGUgc2VydmVyIGVuZC1wb2ludCAoc2luY2UgdGhlcmUgbWF5IGJlIG1vcmUgdGhhbiBvbmUsIGNsaWVudHMgc2hvdWxkIGF2b2lkIHVzaW5nIHJlbGF0aXZlIFVSSXMpLlxyXG4gICAqL1xyXG4gIGVuZHBvaW50PzogZmhpci5GaGlyVXJsfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5jaGFubmVsLmVuZHBvaW50XHJcbiAgICovXHJcbiAgX2VuZHBvaW50PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBTZW5kaW5nIHRoZSBwYXlsb2FkIGhhcyBvYnZpb3VzIHNlY3VyaXR5IGltcGxpY2F0aW9ucy4gVGhlIHNlcnZlciBpcyByZXNwb25zaWJsZSBmb3IgZW5zdXJpbmcgdGhhdCB0aGUgY29udGVudCBpcyBhcHByb3ByaWF0ZWx5IHNlY3VyZWQuXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGZoaXIuRmhpckNvZGV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU3Vic2NyaXB0aW9uLmNoYW5uZWwucGF5bG9hZFxyXG4gICAqL1xyXG4gIF9wYXlsb2FkPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBFeGFjdGx5IHdoYXQgdGhlc2UgbWVhbiBkZXBlbmQgb24gdGhlIGNoYW5uZWwgdHlwZS4gVGhleSBjYW4gY29udmV5IGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdG8gdGhlIHJlY2lwaWVudCBhbmQvb3IgbWVldCBzZWN1cml0eSByZXF1aXJlbWVudHM7IGZvciBleGFtcGxlLCBzdXBwb3J0IG9mIG11bHRpcGxlIGhlYWRlcnMgaW4gdGhlIG91dGdvaW5nIG5vdGlmaWNhdGlvbnMgZm9yIHJlc3QtaG9vayB0eXBlIHN1YnNjcmlwdGlvbnMuXHJcbiAgICovXHJcbiAgaGVhZGVyPzogZmhpci5GaGlyU3RyaW5nW118KHN0cmluZ3xudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU3Vic2NyaXB0aW9uLmNoYW5uZWwuaGVhZGVyXHJcbiAgICovXHJcbiAgX2hlYWRlcj86KGZoaXIuRmhpckVsZW1lbnRBcmdzfG51bGwpW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRhaWxzIHdoZXJlIHRvIHNlbmQgbm90aWZpY2F0aW9ucyB3aGVuIHJlc291cmNlcyBhcmUgcmVjZWl2ZWQgdGhhdCBtZWV0IHRoZSBjcml0ZXJpYS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb25DaGFubmVsIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnU3Vic2NyaXB0aW9uQ2hhbm5lbCc7XHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgb2YgY2hhbm5lbCB0byBzZW5kIG5vdGlmaWNhdGlvbnMgb24uXHJcbiAgICovXHJcbiAgcHVibGljIHR5cGU6IGZoaXIuRmhpckNvZGU8U3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBGb3IgcmVzdC1ob29rLCBhbmQgd2Vic29ja2V0LCB0aGUgZW5kLXBvaW50IG11c3QgYmUgYW4gaHR0cDogb3IgaHR0cHM6IFVSTDsgZm9yIGVtYWlsLCBhIG1haWx0bzogdXJsLCBmb3Igc21zLCBhIHRlbDogdXJsLCBhbmQgZm9yIG1lc3NhZ2UgdGhlIGVuZHBvaW50IGNhbiBiZSBpbiBhbnkgZm9ybSBvZiB1cmwgdGhlIHNlcnZlciB1bmRlcnN0YW5kcyAodXN1YWxseSwgaHR0cDogb3IgbWxscDopLiBUaGUgVVJJIGlzIGFsbG93ZWQgdG8gYmUgcmVsYXRpdmU7IGluIHdoaWNoIGNhc2UsIGl0IGlzIHJlbGF0aXZlIHRvIHRoZSBzZXJ2ZXIgZW5kLXBvaW50IChzaW5jZSB0aGVyZSBtYXkgYmUgbW9yZSB0aGFuIG9uZSwgY2xpZW50cyBzaG91bGQgYXZvaWQgdXNpbmcgcmVsYXRpdmUgVVJJcykuXHJcbiAgICovXHJcbiAgcHVibGljIGVuZHBvaW50PzogZmhpci5GaGlyVXJsfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTZW5kaW5nIHRoZSBwYXlsb2FkIGhhcyBvYnZpb3VzIHNlY3VyaXR5IGltcGxpY2F0aW9ucy4gVGhlIHNlcnZlciBpcyByZXNwb25zaWJsZSBmb3IgZW5zdXJpbmcgdGhhdCB0aGUgY29udGVudCBpcyBhcHByb3ByaWF0ZWx5IHNlY3VyZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHBheWxvYWQ/OiBmaGlyLkZoaXJDb2RlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeGFjdGx5IHdoYXQgdGhlc2UgbWVhbiBkZXBlbmQgb24gdGhlIGNoYW5uZWwgdHlwZS4gVGhleSBjYW4gY29udmV5IGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdG8gdGhlIHJlY2lwaWVudCBhbmQvb3IgbWVldCBzZWN1cml0eSByZXF1aXJlbWVudHM7IGZvciBleGFtcGxlLCBzdXBwb3J0IG9mIG11bHRpcGxlIGhlYWRlcnMgaW4gdGhlIG91dGdvaW5nIG5vdGlmaWNhdGlvbnMgZm9yIHJlc3QtaG9vayB0eXBlIHN1YnNjcmlwdGlvbnMuXHJcbiAgICovXHJcbiAgcHVibGljIGhlYWRlcjogZmhpci5GaGlyU3RyaW5nW107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgU3Vic2NyaXB0aW9uQ2hhbm5lbCAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFN1YnNjcmlwdGlvbkNoYW5uZWxBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsndHlwZSddKSB7IHRoaXMudHlwZSA9IG5ldyBmaGlyLkZoaXJDb2RlPFN1YnNjcmlwdGlvbkNoYW5uZWxUeXBlQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnR5cGV9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMudHlwZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ190eXBlJ10pIHtcclxuICAgICAgaWYgKHRoaXMudHlwZSkgeyB0aGlzLnR5cGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdHlwZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZTxTdWJzY3JpcHRpb25DaGFubmVsVHlwZUNvZGVUeXBlPihzb3VyY2UuX3R5cGUgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2VuZHBvaW50J10pIHsgdGhpcy5lbmRwb2ludCA9IG5ldyBmaGlyLkZoaXJVcmwoe3ZhbHVlOiBzb3VyY2UuZW5kcG9pbnR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2VuZHBvaW50J10pIHtcclxuICAgICAgaWYgKHRoaXMuZW5kcG9pbnQpIHsgdGhpcy5lbmRwb2ludC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9lbmRwb2ludCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmVuZHBvaW50ID0gbmV3IGZoaXIuRmhpclVybChzb3VyY2UuX2VuZHBvaW50IGFzIFBhcnRpYWw8Zmhpci5GaGlyVXJsQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwYXlsb2FkJ10pIHsgdGhpcy5wYXlsb2FkID0gbmV3IGZoaXIuRmhpckNvZGUoe3ZhbHVlOiBzb3VyY2UucGF5bG9hZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfcGF5bG9hZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLnBheWxvYWQpIHsgdGhpcy5wYXlsb2FkLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3BheWxvYWQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5wYXlsb2FkID0gbmV3IGZoaXIuRmhpckNvZGUoc291cmNlLl9wYXlsb2FkIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnaGVhZGVyJ10pIHsgdGhpcy5oZWFkZXIgPSBzb3VyY2UuaGVhZGVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHh9KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmhlYWRlciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydfaGVhZGVyJ10pIHtcclxuICAgICAgc291cmNlLl9oZWFkZXIuZm9yRWFjaCgoeCxpKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyLmxlbmd0aCA+PSBpKSB7IGlmICh4KSB7IHRoaXMuaGVhZGVyW2ldLmFkZEV4dGVuZGVkUHJvcGVydGllcyh4KTsgfSB9XHJcbiAgICAgICAgZWxzZSB7IGlmICh4KSB7IHRoaXMuaGVhZGVyLnB1c2gobmV3IGZoaXIuRmhpclN0cmluZyh4IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pKTsgfSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1N1YnNjcmlwdGlvbi5jaGFubmVsJyB9XHJcbiAgICB0aGlzLnZSU1YoJ3R5cGUnLGV4cCwnU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGUnLFN1YnNjcmlwdGlvbkNoYW5uZWxUeXBlVnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHRoaXMudk9TKCdlbmRwb2ludCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3BheWxvYWQnLGV4cClcclxuICAgIHRoaXMudk9BKCdoZWFkZXInLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTdWJzY3JpcHRpb24gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3Vic2NyaXB0aW9uQXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiU3Vic2NyaXB0aW9uXCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgY2xpZW50IGNhbiBvbmx5IHN1Ym1pdCBzdWJzY3JpcHRpb24gcmVzb3VyY2VzIGluIHRoZSByZXF1ZXN0ZWQgb3Igb2ZmIHN0YXRlLiBPbmx5IHRoZSBzZXJ2ZXIgY2FuICBtb3ZlIGEgc3Vic2NyaXB0aW9uIGZyb20gcmVxdWVzdGVkIHRvIGFjdGl2ZSwgYW5kIHRoZW4gdG8gZXJyb3IuIEVpdGhlciB0aGUgc2VydmVyIG9yIHRoZSBjbGllbnQgY2FuIHR1cm4gYSBzdWJzY3JpcHRpb24gb2ZmLlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSB0aGUgc3RhdHVzIGNvbnRhaW5zIGNvZGVzIHRoYXQgbWFyayB0aGUgcmVzb3VyY2UgYXMgbm90IGN1cnJlbnRseSB2YWxpZC5cclxuICAgKi9cclxuICBzdGF0dXM6IGZoaXIuRmhpckNvZGU8U3Vic2NyaXB0aW9uU3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBDb250YWN0IGRldGFpbHMgZm9yIGEgaHVtYW4gdG8gY29udGFjdCBhYm91dCB0aGUgc3Vic2NyaXB0aW9uLiBUaGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3IgdHJvdWJsZXNob290aW5nLlxyXG4gICAqL1xyXG4gIGNvbnRhY3Q/OiBmaGlyLkNvbnRhY3RQb2ludEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHNlcnZlciBpcyBwZXJtaXR0ZWQgdG8gZGV2aWF0ZSBmcm9tIHRoaXMgdGltZSBidXQgc2hvdWxkIG9ic2VydmUgaXQuXHJcbiAgICovXHJcbiAgZW5kPzogZmhpci5GaGlySW5zdGFudHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb24uZW5kXHJcbiAgICovXHJcbiAgX2VuZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSBkZXNjcmlwdGlvbiBvZiB3aHkgdGhpcyBzdWJzY3JpcHRpb24gaXMgZGVmaW5lZC5cclxuICAgKi9cclxuICByZWFzb246IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb24ucmVhc29uXHJcbiAgICovXHJcbiAgX3JlYXNvbj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIHJ1bGVzIGFyZSBzZWFyY2ggY3JpdGVyaWEgKHdpdGhvdXQgdGhlIFtiYXNlXSBwYXJ0KS4gTGlrZSBCdW5kbGUuZW50cnkucmVxdWVzdC51cmwsIGl0IGhhcyBubyBsZWFkaW5nIFwiL1wiLlxyXG4gICAqL1xyXG4gIGNyaXRlcmlhOiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU3Vic2NyaXB0aW9uLmNyaXRlcmlhXHJcbiAgICovXHJcbiAgX2NyaXRlcmlhPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIHJlY29yZCBvZiB0aGUgbGFzdCBlcnJvciB0aGF0IG9jY3VycmVkIHdoZW4gdGhlIHNlcnZlciBwcm9jZXNzZWQgYSBub3RpZmljYXRpb24uXHJcbiAgICovXHJcbiAgZXJyb3I/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU3Vic2NyaXB0aW9uLmVycm9yXHJcbiAgICovXHJcbiAgX2Vycm9yPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBEZXRhaWxzIHdoZXJlIHRvIHNlbmQgbm90aWZpY2F0aW9ucyB3aGVuIHJlc291cmNlcyBhcmUgcmVjZWl2ZWQgdGhhdCBtZWV0IHRoZSBjcml0ZXJpYS5cclxuICAgKi9cclxuICBjaGFubmVsOiBmaGlyLlN1YnNjcmlwdGlvbkNoYW5uZWxBcmdzfG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgc3Vic2NyaXB0aW9uIHJlc291cmNlIGlzIHVzZWQgdG8gZGVmaW5lIGEgcHVzaC1iYXNlZCBzdWJzY3JpcHRpb24gZnJvbSBhIHNlcnZlciB0byBhbm90aGVyIHN5c3RlbS4gT25jZSBhIHN1YnNjcmlwdGlvbiBpcyByZWdpc3RlcmVkIHdpdGggdGhlIHNlcnZlciwgdGhlIHNlcnZlciBjaGVja3MgZXZlcnkgcmVzb3VyY2UgdGhhdCBpcyBjcmVhdGVkIG9yIHVwZGF0ZWQsIGFuZCBpZiB0aGUgcmVzb3VyY2UgbWF0Y2hlcyB0aGUgZ2l2ZW4gY3JpdGVyaWEsIGl0IHNlbmRzIGEgbWVzc2FnZSBvbiB0aGUgZGVmaW5lZCBcImNoYW5uZWxcIiBzbyB0aGF0IGFub3RoZXIgc3lzdGVtIGNhbiB0YWtlIGFuIGFwcHJvcHJpYXRlIGFjdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb24gZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1N1YnNjcmlwdGlvbic7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJTdWJzY3JpcHRpb25cIjtcclxuICAvKipcclxuICAgKiBBIGNsaWVudCBjYW4gb25seSBzdWJtaXQgc3Vic2NyaXB0aW9uIHJlc291cmNlcyBpbiB0aGUgcmVxdWVzdGVkIG9yIG9mZiBzdGF0ZS4gT25seSB0aGUgc2VydmVyIGNhbiAgbW92ZSBhIHN1YnNjcmlwdGlvbiBmcm9tIHJlcXVlc3RlZCB0byBhY3RpdmUsIGFuZCB0aGVuIHRvIGVycm9yLiBFaXRoZXIgdGhlIHNlcnZlciBvciB0aGUgY2xpZW50IGNhbiB0dXJuIGEgc3Vic2NyaXB0aW9uIG9mZi5cclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIHJlc291cmNlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1czogZmhpci5GaGlyQ29kZTxTdWJzY3JpcHRpb25TdGF0dXNDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBDb250YWN0IGRldGFpbHMgZm9yIGEgaHVtYW4gdG8gY29udGFjdCBhYm91dCB0aGUgc3Vic2NyaXB0aW9uLiBUaGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3IgdHJvdWJsZXNob290aW5nLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb250YWN0OiBmaGlyLkNvbnRhY3RQb2ludFtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2ZXIgaXMgcGVybWl0dGVkIHRvIGRldmlhdGUgZnJvbSB0aGlzIHRpbWUgYnV0IHNob3VsZCBvYnNlcnZlIGl0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBlbmQ/OiBmaGlyLkZoaXJJbnN0YW50fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGRlc2NyaXB0aW9uIG9mIHdoeSB0aGlzIHN1YnNjcmlwdGlvbiBpcyBkZWZpbmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFzb246IGZoaXIuRmhpclN0cmluZ3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBydWxlcyBhcmUgc2VhcmNoIGNyaXRlcmlhICh3aXRob3V0IHRoZSBbYmFzZV0gcGFydCkuIExpa2UgQnVuZGxlLmVudHJ5LnJlcXVlc3QudXJsLCBpdCBoYXMgbm8gbGVhZGluZyBcIi9cIi5cclxuICAgKi9cclxuICBwdWJsaWMgY3JpdGVyaWE6IGZoaXIuRmhpclN0cmluZ3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIEEgcmVjb3JkIG9mIHRoZSBsYXN0IGVycm9yIHRoYXQgb2NjdXJyZWQgd2hlbiB0aGUgc2VydmVyIHByb2Nlc3NlZCBhIG5vdGlmaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgZXJyb3I/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERldGFpbHMgd2hlcmUgdG8gc2VuZCBub3RpZmljYXRpb25zIHdoZW4gcmVzb3VyY2VzIGFyZSByZWNlaXZlZCB0aGF0IG1lZXQgdGhlIGNyaXRlcmlhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjaGFubmVsOiBmaGlyLlN1YnNjcmlwdGlvbkNoYW5uZWx8bnVsbDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBTdWJzY3JpcHRpb24gLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxTdWJzY3JpcHRpb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnU3Vic2NyaXB0aW9uJztcclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8U3Vic2NyaXB0aW9uU3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN0YXR1c30pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzKSB7IHRoaXMuc3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPFN1YnNjcmlwdGlvblN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3N0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnY29udGFjdCddKSB7IHRoaXMuY29udGFjdCA9IHNvdXJjZS5jb250YWN0Lm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29udGFjdFBvaW50KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29udGFjdCA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydlbmQnXSkgeyB0aGlzLmVuZCA9IG5ldyBmaGlyLkZoaXJJbnN0YW50KHt2YWx1ZTogc291cmNlLmVuZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZW5kJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZW5kKSB7IHRoaXMuZW5kLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2VuZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmVuZCA9IG5ldyBmaGlyLkZoaXJJbnN0YW50KHNvdXJjZS5fZW5kIGFzIFBhcnRpYWw8Zmhpci5GaGlySW5zdGFudEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVhc29uJ10pIHsgdGhpcy5yZWFzb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnJlYXNvbn0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5yZWFzb24gPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfcmVhc29uJ10pIHtcclxuICAgICAgaWYgKHRoaXMucmVhc29uKSB7IHRoaXMucmVhc29uLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3JlYXNvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnJlYXNvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9yZWFzb24gYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NyaXRlcmlhJ10pIHsgdGhpcy5jcml0ZXJpYSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuY3JpdGVyaWF9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY3JpdGVyaWEgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfY3JpdGVyaWEnXSkge1xyXG4gICAgICBpZiAodGhpcy5jcml0ZXJpYSkgeyB0aGlzLmNyaXRlcmlhLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NyaXRlcmlhISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY3JpdGVyaWEgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fY3JpdGVyaWEgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2Vycm9yJ10pIHsgdGhpcy5lcnJvciA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZXJyb3J9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Vycm9yJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZXJyb3IpIHsgdGhpcy5lcnJvci5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9lcnJvciEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmVycm9yID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Vycm9yIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjaGFubmVsJ10pIHsgdGhpcy5jaGFubmVsID0gbmV3IGZoaXIuU3Vic2NyaXB0aW9uQ2hhbm5lbChzb3VyY2UuY2hhbm5lbCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmNoYW5uZWwgPSBudWxsOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnU3Vic2NyaXB0aW9uJyB9XHJcbiAgICB0aGlzLnZSUygncmVzb3VyY2VUeXBlJyxleHApXHJcbiAgICB0aGlzLnZSU1YoJ3N0YXR1cycsZXhwLCdTdWJzY3JpcHRpb25TdGF0dXMnLFN1YnNjcmlwdGlvblN0YXR1c1ZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZPQSgnY29udGFjdCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2VuZCcsZXhwKVxyXG4gICAgdGhpcy52UlMoJ3JlYXNvbicsZXhwKVxyXG4gICAgdGhpcy52UlMoJ2NyaXRlcmlhJyxleHApXHJcbiAgICB0aGlzLnZPUygnZXJyb3InLGV4cClcclxuICAgIHRoaXMudlJTKCdjaGFubmVsJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=