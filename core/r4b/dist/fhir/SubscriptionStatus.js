// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: SubscriptionStatus
import * as fhir from '../fhir.js';
// @ts-ignore
import { SubscriptionStatusVsValidation } from '../fhirValueSets/SubscriptionStatusVsValidation.js';
// @ts-ignore
import { SubscriptionNotificationTypeVsValidation } from '../fhirValueSets/SubscriptionNotificationTypeVsValidation.js';
/**
 * Detailed information about events relevant to this subscription notification.
 */
export class SubscriptionStatusNotificationEvent extends fhir.BackboneElement {
    /**
     * Default constructor for SubscriptionStatusNotificationEvent - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['eventNumber']) {
            this.eventNumber = new fhir.FhirString({ value: source.eventNumber });
        }
        else {
            this.eventNumber = null;
        }
        if (source['_eventNumber']) {
            if (this.eventNumber) {
                this.eventNumber.addExtendedProperties(source._eventNumber);
            }
            else {
                this.eventNumber = new fhir.FhirString(source._eventNumber);
            }
        }
        if (source['timestamp']) {
            this.timestamp = new fhir.FhirInstant({ value: source.timestamp });
        }
        if (source['_timestamp']) {
            if (this.timestamp) {
                this.timestamp.addExtendedProperties(source._timestamp);
            }
            else {
                this.timestamp = new fhir.FhirInstant(source._timestamp);
            }
        }
        if (source['focus']) {
            this.focus = new fhir.Reference(source.focus);
        }
        if (source['additionalContext']) {
            this.additionalContext = source.additionalContext.map((x) => new fhir.Reference(x));
        }
        else {
            this.additionalContext = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'SubscriptionStatus.notificationEvent';
        }
        iss.push(...this.vRS('eventNumber', exp));
        iss.push(...this.vOS('timestamp', exp));
        iss.push(...this.vOS('focus', exp));
        iss.push(...this.vOA('additionalContext', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SubscriptionStatusNotificationEvent._fts_dataType = 'SubscriptionStatusNotificationEvent';
/**
 * The SubscriptionStatus resource describes the state of a Subscription during notifications.
 */
export class SubscriptionStatus extends fhir.DomainResource {
    /**
     * Default constructor for SubscriptionStatus - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'SubscriptionStatus';
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
        if (source['eventsSinceSubscriptionStart']) {
            this.eventsSinceSubscriptionStart = new fhir.FhirString({ value: source.eventsSinceSubscriptionStart });
        }
        if (source['_eventsSinceSubscriptionStart']) {
            if (this.eventsSinceSubscriptionStart) {
                this.eventsSinceSubscriptionStart.addExtendedProperties(source._eventsSinceSubscriptionStart);
            }
            else {
                this.eventsSinceSubscriptionStart = new fhir.FhirString(source._eventsSinceSubscriptionStart);
            }
        }
        if (source['notificationEvent']) {
            this.notificationEvent = source.notificationEvent.map((x) => new fhir.SubscriptionStatusNotificationEvent(x));
        }
        else {
            this.notificationEvent = [];
        }
        if (source['subscription']) {
            this.subscription = new fhir.Reference(source.subscription);
        }
        else {
            this.subscription = null;
        }
        if (source['topic']) {
            this.topic = new fhir.FhirCanonical({ value: source.topic });
        }
        if (source['_topic']) {
            if (this.topic) {
                this.topic.addExtendedProperties(source._topic);
            }
            else {
                this.topic = new fhir.FhirCanonical(source._topic);
            }
        }
        if (source['error']) {
            this.error = source.error.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.error = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'SubscriptionStatus';
        }
        iss.push(...this.vOSV('status', exp, 'SubscriptionStatus', SubscriptionStatusVsValidation, 'r'));
        iss.push(...this.vRSV('type', exp, 'SubscriptionNotificationType', SubscriptionNotificationTypeVsValidation, 'r'));
        iss.push(...this.vOS('eventsSinceSubscriptionStart', exp));
        iss.push(...this.vOA('notificationEvent', exp));
        iss.push(...this.vRS('subscription', exp));
        iss.push(...this.vOS('topic', exp));
        iss.push(...this.vOA('error', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SubscriptionStatus._fts_dataType = 'SubscriptionStatus';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaXB0aW9uU3RhdHVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9TdWJzY3JpcHRpb25TdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUdwRyxhQUFhO0FBQ2IsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sOERBQThELENBQUM7QUFtQ3hIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLElBQUksQ0FBQyxlQUFlO0lBcUIzRTs7T0FFRztJQUNILFlBQVksU0FBMEQsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDaEgsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDOUY7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUFFO1FBQ2pDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxZQUFhLENBQUMsQ0FBQzthQUFFO2lCQUNsRjtnQkFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBNEMsQ0FBQyxDQUFDO2FBQUU7U0FDdEc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDOUYsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUFFLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFVBQVcsQ0FBQyxDQUFDO2FBQUU7aUJBQzVFO2dCQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUEyQyxDQUFDLENBQUM7YUFBRTtTQUNwRztRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQUU7UUFDdkUsSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3BIO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztTQUFFO0lBQ3ZDLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLEdBQUcsR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxzQ0FBc0MsQ0FBQTtTQUFFO1FBQ2hFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0MsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQW5ERDs7R0FFRztBQUM2QixpREFBYSxHQUFVLHFDQUFxQyxDQUFDO0FBd0cvRjs7R0FFRztBQUNILE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxJQUFJLENBQUMsY0FBYztJQXFDekQ7O09BRUc7SUFDSCxZQUFZLFNBQXlDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQy9GLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBb0IsQ0FBQztRQUN6QyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUE2QixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQzlHLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxPQUFRLENBQUMsQ0FBQzthQUFFO2lCQUNuRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBNkIsTUFBTSxDQUFDLE9BQWlDLENBQUMsQ0FBQzthQUFFO1NBQ2hIO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBdUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7U0FBRTthQUM3RztZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDMUIsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQyxDQUFDO2FBQUU7aUJBQzdEO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUF1QyxNQUFNLENBQUMsS0FBK0IsQ0FBQyxDQUFDO2FBQUU7U0FDdEg7UUFDRCxJQUFJLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLDRCQUE0QixHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsNEJBQTRCLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDdEosSUFBSSxNQUFNLENBQUMsK0JBQStCLENBQUMsRUFBRTtZQUMzQyxJQUFJLElBQUksQ0FBQyw0QkFBNEIsRUFBRTtnQkFBRSxJQUFJLENBQUMsNEJBQTRCLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLDZCQUE4QixDQUFDLENBQUM7YUFBRTtpQkFDckk7Z0JBQUUsSUFBSSxDQUFDLDRCQUE0QixHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsNkJBQTZELENBQUMsQ0FBQzthQUFFO1NBQ3hJO1FBQ0QsSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDOUk7WUFBRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDckMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7U0FBRTthQUN2RjtZQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDbEMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3BGLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxNQUFPLENBQUMsQ0FBQzthQUFFO2lCQUNoRTtnQkFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBeUMsQ0FBQyxDQUFDO2FBQUU7U0FDaEc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDdEY7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUFFO0lBQzNCLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLEdBQUcsR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxvQkFBb0IsQ0FBQTtTQUFFO1FBQzlDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsb0JBQW9CLEVBQUMsOEJBQThCLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3RixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLDhCQUE4QixFQUFDLHdDQUF3QyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0csR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxRCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUFwRkQ7O0dBRUc7QUFDNkIsZ0NBQWEsR0FBVSxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IFN1YnNjcmlwdGlvblN0YXR1c1xyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uU3RhdHVzQ29kZXMsICBTdWJzY3JpcHRpb25TdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU3Vic2NyaXB0aW9uU3RhdHVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvblN0YXR1c1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU3Vic2NyaXB0aW9uU3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25Ob3RpZmljYXRpb25UeXBlQ29kZXMsICBTdWJzY3JpcHRpb25Ob3RpZmljYXRpb25UeXBlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1YnNjcmlwdGlvbk5vdGlmaWNhdGlvblR5cGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uTm90aWZpY2F0aW9uVHlwZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU3Vic2NyaXB0aW9uTm90aWZpY2F0aW9uVHlwZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uRXJyb3JDb2RlcywgIFN1YnNjcmlwdGlvbkVycm9yQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1YnNjcmlwdGlvbkVycm9yQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkVycm9yVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TdWJzY3JpcHRpb25FcnJvclZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTdWJzY3JpcHRpb25TdGF0dXNOb3RpZmljYXRpb25FdmVudCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdWJzY3JpcHRpb25TdGF0dXNOb3RpZmljYXRpb25FdmVudEFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXF1ZW50aWFsIG51bWJlciBvZiB0aGlzIGV2ZW50IGluIHRoaXMgc3Vic2NyaXB0aW9uIGNvbnRleHQuIE5vdGUgdGhhdCB0aGlzIHZhbHVlIGlzIGEgNjQtYml0IGludGVnZXIgdmFsdWUsIGVuY29kZWQgYXMgYSBzdHJpbmcuXHJcbiAgICovXHJcbiAgZXZlbnROdW1iZXI6IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb25TdGF0dXMubm90aWZpY2F0aW9uRXZlbnQuZXZlbnROdW1iZXJcclxuICAgKi9cclxuICBfZXZlbnROdW1iZXI/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhY3R1YWwgdGltZSB0aGlzIGV2ZW50IG9jY3VyZWQgb24gdGhlIHNlcnZlci5cclxuICAgKi9cclxuICB0aW1lc3RhbXA/OiBmaGlyLkZoaXJJbnN0YW50fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvblN0YXR1cy5ub3RpZmljYXRpb25FdmVudC50aW1lc3RhbXBcclxuICAgKi9cclxuICBfdGltZXN0YW1wPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgZm9jdXMgb2YgdGhpcyBldmVudC4gV2hpbGUgdGhpcyB3aWxsIHVzdWFsbHkgYmUgYSByZWZlcmVuY2UgdG8gdGhlIGZvY3VzIHJlc291cmNlIG9mIHRoZSBldmVudCwgaXQgTUFZIGNvbnRhaW4gYSByZWZlcmVuY2UgdG8gYSBub24tRkhJUiBvYmplY3QuXHJcbiAgICovXHJcbiAgZm9jdXM/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgY29udGV4dCBpbmZvcm1hdGlvbiBmb3IgdGhpcyBldmVudC4gR2VuZXJhbGx5LCB0aGlzIHdpbGwgY29udGFpbiByZWZlcmVuY2VzIHRvIGFkZGl0aW9uYWwgcmVzb3VyY2VzIGluY2x1ZGVkIHdpdGggdGhlIGV2ZW50IChlLmcuLCB0aGUgUGF0aWVudCByZWxldmFudCB0byBhbiBFbmNvdW50ZXIpLCBob3dldmVyIGl0IE1BWSByZWZlciB0byBub24tRkhJUiBvYmplY3RzLlxyXG4gICAqL1xyXG4gIGFkZGl0aW9uYWxDb250ZXh0PzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogRGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgZXZlbnRzIHJlbGV2YW50IHRvIHRoaXMgc3Vic2NyaXB0aW9uIG5vdGlmaWNhdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb25TdGF0dXNOb3RpZmljYXRpb25FdmVudCBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1N1YnNjcmlwdGlvblN0YXR1c05vdGlmaWNhdGlvbkV2ZW50JztcclxuICAvKipcclxuICAgKiBUaGUgc2VxdWVudGlhbCBudW1iZXIgb2YgdGhpcyBldmVudCBpbiB0aGlzIHN1YnNjcmlwdGlvbiBjb250ZXh0LiBOb3RlIHRoYXQgdGhpcyB2YWx1ZSBpcyBhIDY0LWJpdCBpbnRlZ2VyIHZhbHVlLCBlbmNvZGVkIGFzIGEgc3RyaW5nLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBldmVudE51bWJlcjogZmhpci5GaGlyU3RyaW5nfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFjdHVhbCB0aW1lIHRoaXMgZXZlbnQgb2NjdXJlZCBvbiB0aGUgc2VydmVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0aW1lc3RhbXA/OiBmaGlyLkZoaXJJbnN0YW50fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZm9jdXMgb2YgdGhpcyBldmVudC4gV2hpbGUgdGhpcyB3aWxsIHVzdWFsbHkgYmUgYSByZWZlcmVuY2UgdG8gdGhlIGZvY3VzIHJlc291cmNlIG9mIHRoZSBldmVudCwgaXQgTUFZIGNvbnRhaW4gYSByZWZlcmVuY2UgdG8gYSBub24tRkhJUiBvYmplY3QuXHJcbiAgICovXHJcbiAgcHVibGljIGZvY3VzPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgY29udGV4dCBpbmZvcm1hdGlvbiBmb3IgdGhpcyBldmVudC4gR2VuZXJhbGx5LCB0aGlzIHdpbGwgY29udGFpbiByZWZlcmVuY2VzIHRvIGFkZGl0aW9uYWwgcmVzb3VyY2VzIGluY2x1ZGVkIHdpdGggdGhlIGV2ZW50IChlLmcuLCB0aGUgUGF0aWVudCByZWxldmFudCB0byBhbiBFbmNvdW50ZXIpLCBob3dldmVyIGl0IE1BWSByZWZlciB0byBub24tRkhJUiBvYmplY3RzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRpdGlvbmFsQ29udGV4dDogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBTdWJzY3JpcHRpb25TdGF0dXNOb3RpZmljYXRpb25FdmVudCAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFN1YnNjcmlwdGlvblN0YXR1c05vdGlmaWNhdGlvbkV2ZW50QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2V2ZW50TnVtYmVyJ10pIHsgdGhpcy5ldmVudE51bWJlciA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZXZlbnROdW1iZXJ9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZXZlbnROdW1iZXIgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfZXZlbnROdW1iZXInXSkge1xyXG4gICAgICBpZiAodGhpcy5ldmVudE51bWJlcikgeyB0aGlzLmV2ZW50TnVtYmVyLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2V2ZW50TnVtYmVyISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZXZlbnROdW1iZXIgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fZXZlbnROdW1iZXIgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3RpbWVzdGFtcCddKSB7IHRoaXMudGltZXN0YW1wID0gbmV3IGZoaXIuRmhpckluc3RhbnQoe3ZhbHVlOiBzb3VyY2UudGltZXN0YW1wfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ190aW1lc3RhbXAnXSkge1xyXG4gICAgICBpZiAodGhpcy50aW1lc3RhbXApIHsgdGhpcy50aW1lc3RhbXAuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdGltZXN0YW1wISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudGltZXN0YW1wID0gbmV3IGZoaXIuRmhpckluc3RhbnQoc291cmNlLl90aW1lc3RhbXAgYXMgUGFydGlhbDxmaGlyLkZoaXJJbnN0YW50QXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydmb2N1cyddKSB7IHRoaXMuZm9jdXMgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmZvY3VzKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYWRkaXRpb25hbENvbnRleHQnXSkgeyB0aGlzLmFkZGl0aW9uYWxDb250ZXh0ID0gc291cmNlLmFkZGl0aW9uYWxDb250ZXh0Lm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuYWRkaXRpb25hbENvbnRleHQgPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1N1YnNjcmlwdGlvblN0YXR1cy5ub3RpZmljYXRpb25FdmVudCcgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ2V2ZW50TnVtYmVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd0aW1lc3RhbXAnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2ZvY3VzJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdhZGRpdGlvbmFsQ29udGV4dCcsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgU3Vic2NyaXB0aW9uU3RhdHVzIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvblN0YXR1c0FyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIlN1YnNjcmlwdGlvblN0YXR1c1wifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgc3RhdHVzIG9mIHRoZSBzdWJzY3JpcHRpb24sIHdoaWNoIG1hcmtzIHRoZSBzZXJ2ZXIgc3RhdGUgZm9yIG1hbmFnaW5nIHRoZSBzdWJzY3JpcHRpb24uXHJcbiAgICovXHJcbiAgc3RhdHVzPzogZmhpci5GaGlyQ29kZTxTdWJzY3JpcHRpb25TdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU3Vic2NyaXB0aW9uU3RhdHVzLnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0eXBlIG9mIGV2ZW50IGJlaW5nIGNvbnZleWVkIHdpdGggdGhpcyBub3RpZmljYWl0b24uXHJcbiAgICovXHJcbiAgdHlwZTogZmhpci5GaGlyQ29kZTxTdWJzY3JpcHRpb25Ob3RpZmljYXRpb25UeXBlQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvblN0YXR1cy50eXBlXHJcbiAgICovXHJcbiAgX3R5cGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0b3RhbCBudW1iZXIgb2YgYWN0dWFsIGV2ZW50cyB3aGljaCBoYXZlIGJlZW4gZ2VuZXJhdGVkIHNpbmNlIHRoZSBTdWJzY3JpcHRpb24gd2FzIGNyZWF0ZWQgKGluY2x1c2l2ZSBvZiB0aGlzIG5vdGlmaWNhdGlvbikgLSByZWdhcmRsZXNzIG9mIGhvdyBtYW55IGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgY29tbXVuaWNhdGVkLiAgVGhpcyBudW1iZXIgaXMgTk9UIGluY3JlbWVudGVkIGZvciBoYW5kc2hha2UgYW5kIGhlYXJ0YmVhdCBub3RpZmljYXRpb25zLlxyXG4gICAqL1xyXG4gIGV2ZW50c1NpbmNlU3Vic2NyaXB0aW9uU3RhcnQ/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU3Vic2NyaXB0aW9uU3RhdHVzLmV2ZW50c1NpbmNlU3Vic2NyaXB0aW9uU3RhcnRcclxuICAgKi9cclxuICBfZXZlbnRzU2luY2VTdWJzY3JpcHRpb25TdGFydD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogRGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgZXZlbnRzIHJlbGV2YW50IHRvIHRoaXMgc3Vic2NyaXB0aW9uIG5vdGlmaWNhdGlvbi5cclxuICAgKi9cclxuICBub3RpZmljYXRpb25FdmVudD86IGZoaXIuU3Vic2NyaXB0aW9uU3RhdHVzTm90aWZpY2F0aW9uRXZlbnRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZWZlcmVuY2UgdG8gdGhlIFN1YnNjcmlwdGlvbiB3aGljaCBnZW5lcmF0ZWQgdGhpcyBub3RpZmljYXRpb24uXHJcbiAgICovXHJcbiAgc3Vic2NyaXB0aW9uOiBmaGlyLlJlZmVyZW5jZUFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGlzIHZhbHVlIFNIT1VMRCBOT1QgYmUgcHJlc2VudCB3aGVuIHVzaW5nIGBlbXB0eWAgcGF5bG9hZHMsIE1BWSBiZSBwcmVzZW50IHdoZW4gdXNpbmcgYGlkLW9ubHlgIHBheWxvYWRzLCBhbmQgU0hPVUxEIGJlIHByZXNlbnQgd2hlbiB1c2luZyBgZnVsbC1yZXNvdXJjZWAgcGF5bG9hZHMuXHJcbiAgICovXHJcbiAgdG9waWM/OiBmaGlyLkZoaXJDYW5vbmljYWx8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU3Vic2NyaXB0aW9uU3RhdHVzLnRvcGljXHJcbiAgICovXHJcbiAgX3RvcGljPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBSZWNvbW1lbmRlZCBwcmFjdGljZTogY2xlYXIgZXJyb3JzIHdoZW4gc3RhdHVzIGlzIHVwZGF0ZWQuXHJcbiAgICovXHJcbiAgZXJyb3I/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3Vic2NyaXB0aW9uU3RhdHVzIHJlc291cmNlIGRlc2NyaWJlcyB0aGUgc3RhdGUgb2YgYSBTdWJzY3JpcHRpb24gZHVyaW5nIG5vdGlmaWNhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uU3RhdHVzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdTdWJzY3JpcHRpb25TdGF0dXMnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiU3Vic2NyaXB0aW9uU3RhdHVzXCI7XHJcbiAgLyoqXHJcbiAgICogVGhlIHN0YXR1cyBvZiB0aGUgc3Vic2NyaXB0aW9uLCB3aGljaCBtYXJrcyB0aGUgc2VydmVyIHN0YXRlIGZvciBtYW5hZ2luZyB0aGUgc3Vic2NyaXB0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM/OiBmaGlyLkZoaXJDb2RlPFN1YnNjcmlwdGlvblN0YXR1c0NvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgb2YgZXZlbnQgYmVpbmcgY29udmV5ZWQgd2l0aCB0aGlzIG5vdGlmaWNhaXRvbi5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZTogZmhpci5GaGlyQ29kZTxTdWJzY3JpcHRpb25Ob3RpZmljYXRpb25UeXBlQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRvdGFsIG51bWJlciBvZiBhY3R1YWwgZXZlbnRzIHdoaWNoIGhhdmUgYmVlbiBnZW5lcmF0ZWQgc2luY2UgdGhlIFN1YnNjcmlwdGlvbiB3YXMgY3JlYXRlZCAoaW5jbHVzaXZlIG9mIHRoaXMgbm90aWZpY2F0aW9uKSAtIHJlZ2FyZGxlc3Mgb2YgaG93IG1hbnkgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSBjb21tdW5pY2F0ZWQuICBUaGlzIG51bWJlciBpcyBOT1QgaW5jcmVtZW50ZWQgZm9yIGhhbmRzaGFrZSBhbmQgaGVhcnRiZWF0IG5vdGlmaWNhdGlvbnMuXHJcbiAgICovXHJcbiAgcHVibGljIGV2ZW50c1NpbmNlU3Vic2NyaXB0aW9uU3RhcnQ/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERldGFpbGVkIGluZm9ybWF0aW9uIGFib3V0IGV2ZW50cyByZWxldmFudCB0byB0aGlzIHN1YnNjcmlwdGlvbiBub3RpZmljYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIG5vdGlmaWNhdGlvbkV2ZW50OiBmaGlyLlN1YnNjcmlwdGlvblN0YXR1c05vdGlmaWNhdGlvbkV2ZW50W107XHJcbiAgLyoqXHJcbiAgICogVGhlIHJlZmVyZW5jZSB0byB0aGUgU3Vic2NyaXB0aW9uIHdoaWNoIGdlbmVyYXRlZCB0aGlzIG5vdGlmaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgc3Vic2NyaXB0aW9uOiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgdmFsdWUgU0hPVUxEIE5PVCBiZSBwcmVzZW50IHdoZW4gdXNpbmcgYGVtcHR5YCBwYXlsb2FkcywgTUFZIGJlIHByZXNlbnQgd2hlbiB1c2luZyBgaWQtb25seWAgcGF5bG9hZHMsIGFuZCBTSE9VTEQgYmUgcHJlc2VudCB3aGVuIHVzaW5nIGBmdWxsLXJlc291cmNlYCBwYXlsb2Fkcy5cclxuICAgKi9cclxuICBwdWJsaWMgdG9waWM/OiBmaGlyLkZoaXJDYW5vbmljYWx8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJlY29tbWVuZGVkIHByYWN0aWNlOiBjbGVhciBlcnJvcnMgd2hlbiBzdGF0dXMgaXMgdXBkYXRlZC5cclxuICAgKi9cclxuICBwdWJsaWMgZXJyb3I6IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgU3Vic2NyaXB0aW9uU3RhdHVzIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8U3Vic2NyaXB0aW9uU3RhdHVzQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ1N1YnNjcmlwdGlvblN0YXR1cyc7XHJcbiAgICBpZiAoc291cmNlWydzdGF0dXMnXSkgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPFN1YnNjcmlwdGlvblN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxTdWJzY3JpcHRpb25TdGF0dXNDb2RlVHlwZT4oc291cmNlLl9zdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZTxTdWJzY3JpcHRpb25Ob3RpZmljYXRpb25UeXBlQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnR5cGV9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMudHlwZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ190eXBlJ10pIHtcclxuICAgICAgaWYgKHRoaXMudHlwZSkgeyB0aGlzLnR5cGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdHlwZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZTxTdWJzY3JpcHRpb25Ob3RpZmljYXRpb25UeXBlQ29kZVR5cGU+KHNvdXJjZS5fdHlwZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZXZlbnRzU2luY2VTdWJzY3JpcHRpb25TdGFydCddKSB7IHRoaXMuZXZlbnRzU2luY2VTdWJzY3JpcHRpb25TdGFydCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZXZlbnRzU2luY2VTdWJzY3JpcHRpb25TdGFydH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZXZlbnRzU2luY2VTdWJzY3JpcHRpb25TdGFydCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmV2ZW50c1NpbmNlU3Vic2NyaXB0aW9uU3RhcnQpIHsgdGhpcy5ldmVudHNTaW5jZVN1YnNjcmlwdGlvblN0YXJ0LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2V2ZW50c1NpbmNlU3Vic2NyaXB0aW9uU3RhcnQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5ldmVudHNTaW5jZVN1YnNjcmlwdGlvblN0YXJ0ID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2V2ZW50c1NpbmNlU3Vic2NyaXB0aW9uU3RhcnQgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ25vdGlmaWNhdGlvbkV2ZW50J10pIHsgdGhpcy5ub3RpZmljYXRpb25FdmVudCA9IHNvdXJjZS5ub3RpZmljYXRpb25FdmVudC5tYXAoKHgpID0+IG5ldyBmaGlyLlN1YnNjcmlwdGlvblN0YXR1c05vdGlmaWNhdGlvbkV2ZW50KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMubm90aWZpY2F0aW9uRXZlbnQgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3Vic2NyaXB0aW9uJ10pIHsgdGhpcy5zdWJzY3JpcHRpb24gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnN1YnNjcmlwdGlvbik7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN1YnNjcmlwdGlvbiA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3RvcGljJ10pIHsgdGhpcy50b3BpYyA9IG5ldyBmaGlyLkZoaXJDYW5vbmljYWwoe3ZhbHVlOiBzb3VyY2UudG9waWN9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3RvcGljJ10pIHtcclxuICAgICAgaWYgKHRoaXMudG9waWMpIHsgdGhpcy50b3BpYy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl90b3BpYyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnRvcGljID0gbmV3IGZoaXIuRmhpckNhbm9uaWNhbChzb3VyY2UuX3RvcGljIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ2Fub25pY2FsQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydlcnJvciddKSB7IHRoaXMuZXJyb3IgPSBzb3VyY2UuZXJyb3IubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5lcnJvciA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnU3Vic2NyaXB0aW9uU3RhdHVzJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPU1YoJ3N0YXR1cycsZXhwLCdTdWJzY3JpcHRpb25TdGF0dXMnLFN1YnNjcmlwdGlvblN0YXR1c1ZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTVigndHlwZScsZXhwLCdTdWJzY3JpcHRpb25Ob3RpZmljYXRpb25UeXBlJyxTdWJzY3JpcHRpb25Ob3RpZmljYXRpb25UeXBlVnNWYWxpZGF0aW9uLCdyJykpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2V2ZW50c1NpbmNlU3Vic2NyaXB0aW9uU3RhcnQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ25vdGlmaWNhdGlvbkV2ZW50JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdzdWJzY3JpcHRpb24nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3RvcGljJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdlcnJvcicsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=