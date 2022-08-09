// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Order
import * as fhir from '../fhir.js';
/**
 * When order should be fulfilled.
 */
export class OrderWhen extends fhir.BackboneElement {
    /**
     * Default constructor for OrderWhen - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code, options);
        }
        if (source['schedule']) {
            this.schedule = new fhir.Timing(source.schedule, options);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Order.when';
        }
        iss.push(...this.vOS('code', exp));
        iss.push(...this.vOS('schedule', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
OrderWhen._fts_dataType = 'OrderWhen';
/**
 * A request to perform an action.
 */
export class Order extends fhir.DomainResource {
    /**
     * Default constructor for Order - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Order';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options));
        }
        else {
            this.identifier = [];
        }
        if (source['date'] !== undefined) {
            this.date = new fhir.FhirDateTime({ value: source.date }, options);
        }
        if (source['_date']) {
            if (this.date) {
                this.date.addExtendedProperties(source._date);
            }
            else {
                this.date = new fhir.FhirDateTime(source._date, options);
            }
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject, options);
        }
        if (source['source']) {
            this.source = new fhir.Reference(source.source, options);
        }
        if (source['target']) {
            this.target = new fhir.Reference(source.target, options);
        }
        if (source['reason']) {
            this.reason = source.reason;
        }
        else if (source['reasonCodeableConcept']) {
            this.reason = new fhir.CodeableConcept(source.reasonCodeableConcept, options);
        }
        else if (source['reasonReference']) {
            this.reason = new fhir.Reference(source.reasonReference, options);
        }
        if (source['when']) {
            this.when = new fhir.OrderWhen(source.when, options);
        }
        if (source['detail']) {
            this.detail = source.detail.map((x) => new fhir.Reference(x, options));
        }
        else {
            this.detail = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Order';
        }
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vOS('date', exp));
        iss.push(...this.vOS('subject', exp));
        iss.push(...this.vOS('source', exp));
        iss.push(...this.vOS('target', exp));
        iss.push(...this.vOS('reason', exp));
        iss.push(...this.vOS('when', exp));
        iss.push(...this.vRA('detail', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Order._fts_dataType = 'Order';
/**
 * Internal flag to properly serialize choice-type element Order.reason[x]
 */
Order._fts_reasonIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL09yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHVCQUF1QjtBQUV2QixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQWdCbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sU0FBVSxTQUFRLElBQUksQ0FBQyxlQUFlO0lBYWpEOztPQUVHO0lBQ0gsWUFBWSxTQUFnQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUN0RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQ25GLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO0lBQ3hGLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLEdBQUcsR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxZQUFZLENBQUE7U0FBRTtRQUN0QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBN0JEOztHQUVHO0FBQzZCLHVCQUFhLEdBQVUsV0FBVyxDQUFDO0FBa0ZyRTs7R0FFRztBQUNILE1BQU0sT0FBTyxLQUFNLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUE2QzVDOztPQUVHO0lBQ0gsWUFBWSxTQUE0QixFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNsRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1FBQzVCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDekc7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQ3ZHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsQ0FBQzthQUFFO2lCQUM3RDtnQkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBdUMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1NBQ3JHO1FBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDdEYsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDbkYsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDbkYsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FBRTthQUNqRCxJQUFJLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDdkgsSUFBSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUMxRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUM3RSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQzVGO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FBRTtJQUM1QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxHQUFHLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsT0FBTyxDQUFBO1NBQUU7UUFDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQWxGRDs7R0FFRztBQUM2QixtQkFBYSxHQUFVLE9BQU8sQ0FBQztBQTZCL0Q7O0dBRUc7QUFDdUIseUJBQW1CLEdBQVEsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBPcmRlclxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBPcmRlcldoZW4gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3JkZXJXaGVuQXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogQ29kZSBzcGVjaWZpZXMgd2hlbiByZXF1ZXN0IHNob3VsZCBiZSBkb25lLiBUaGUgY29kZSBtYXkgc2ltcGx5IGJlIGEgcHJpb3JpdHkgY29kZS5cclxuICAgKi9cclxuICBjb2RlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGZvcm1hbCBzY2hlZHVsZS5cclxuICAgKi9cclxuICBzY2hlZHVsZT86IGZoaXIuVGltaW5nQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXaGVuIG9yZGVyIHNob3VsZCBiZSBmdWxmaWxsZWQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgT3JkZXJXaGVuIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnT3JkZXJXaGVuJztcclxuICAvKipcclxuICAgKiBDb2RlIHNwZWNpZmllcyB3aGVuIHJlcXVlc3Qgc2hvdWxkIGJlIGRvbmUuIFRoZSBjb2RlIG1heSBzaW1wbHkgYmUgYSBwcmlvcml0eSBjb2RlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2RlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgZm9ybWFsIHNjaGVkdWxlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzY2hlZHVsZT86IGZoaXIuVGltaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBPcmRlcldoZW4gLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxPcmRlcldoZW5BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnY29kZSddKSB7IHRoaXMuY29kZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuY29kZSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3NjaGVkdWxlJ10pIHsgdGhpcy5zY2hlZHVsZSA9IG5ldyBmaGlyLlRpbWluZyhzb3VyY2Uuc2NoZWR1bGUsIG9wdGlvbnMpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnT3JkZXIud2hlbicgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2NvZGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3NjaGVkdWxlJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBPcmRlciB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBPcmRlckFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIk9yZGVyXCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXJzIGFzc2lnbmVkIHRvIHRoaXMgb3JkZXIgYnkgdGhlIG9yZGVyZXIgb3IgYnkgdGhlIHJlY2VpdmVyLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdoZW4gdGhlIG9yZGVyIHdhcyBtYWRlLlxyXG4gICAqL1xyXG4gIGRhdGU/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBPcmRlci5kYXRlXHJcbiAgICovXHJcbiAgX2RhdGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFBhdGllbnQgdGhpcyBvcmRlciBpcyBhYm91dC5cclxuICAgKi9cclxuICBzdWJqZWN0PzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaG8gaW5pdGlhdGVkIHRoZSBvcmRlci5cclxuICAgKi9cclxuICBzb3VyY2U/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdobyBpcyBpbnRlbmRlZCB0byBmdWxmaWxsIHRoZSBvcmRlci5cclxuICAgKi9cclxuICB0YXJnZXQ/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRleHQgLSB3aHkgdGhlIG9yZGVyIHdhcyBtYWRlLlxyXG4gICAqL1xyXG4gIHJlYXNvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUZXh0IC0gd2h5IHRoZSBvcmRlciB3YXMgbWFkZS5cclxuICAgKi9cclxuICByZWFzb25Db2RlYWJsZUNvbmNlcHQ/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRleHQgLSB3aHkgdGhlIG9yZGVyIHdhcyBtYWRlLlxyXG4gICAqL1xyXG4gIHJlYXNvblJlZmVyZW5jZT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlbiBvcmRlciBzaG91bGQgYmUgZnVsZmlsbGVkLlxyXG4gICAqL1xyXG4gIHdoZW4/OiBmaGlyLk9yZGVyV2hlbkFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdoYXQgYWN0aW9uIGlzIGJlaW5nIG9yZGVyZWQuXHJcbiAgICovXHJcbiAgZGV0YWlsOiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXxudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQSByZXF1ZXN0IHRvIHBlcmZvcm0gYW4gYWN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE9yZGVyIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdPcmRlcic7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJPcmRlclwiO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXJzIGFzc2lnbmVkIHRvIHRoaXMgb3JkZXIgYnkgdGhlIG9yZGVyZXIgb3IgYnkgdGhlIHJlY2VpdmVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBXaGVuIHRoZSBvcmRlciB3YXMgbWFkZS5cclxuICAgKi9cclxuICBwdWJsaWMgZGF0ZT86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBQYXRpZW50IHRoaXMgb3JkZXIgaXMgYWJvdXQuXHJcbiAgICovXHJcbiAgcHVibGljIHN1YmplY3Q/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hvIGluaXRpYXRlZCB0aGUgb3JkZXIuXHJcbiAgICovXHJcbiAgcHVibGljIHNvdXJjZT86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaG8gaXMgaW50ZW5kZWQgdG8gZnVsZmlsbCB0aGUgb3JkZXIuXHJcbiAgICovXHJcbiAgcHVibGljIHRhcmdldD86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUZXh0IC0gd2h5IHRoZSBvcmRlciB3YXMgbWFkZS5cclxuICAgKi9cclxuICBwdWJsaWMgcmVhc29uPzogKGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUmVmZXJlbmNlKXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgZmxhZyB0byBwcm9wZXJseSBzZXJpYWxpemUgY2hvaWNlLXR5cGUgZWxlbWVudCBPcmRlci5yZWFzb25beF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfcmVhc29uSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogV2hlbiBvcmRlciBzaG91bGQgYmUgZnVsZmlsbGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB3aGVuPzogZmhpci5PcmRlcldoZW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdoYXQgYWN0aW9uIGlzIGJlaW5nIG9yZGVyZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGRldGFpbDogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBPcmRlciAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPE9yZGVyQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ09yZGVyJztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2RhdGUnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZGF0ZSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5kYXRlfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kYXRlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZGF0ZSkgeyB0aGlzLmRhdGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZGF0ZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9kYXRlIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3N1YmplY3QnXSkgeyB0aGlzLnN1YmplY3QgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnN1YmplY3QsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydzb3VyY2UnXSkgeyB0aGlzLnNvdXJjZSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uuc291cmNlLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsndGFyZ2V0J10pIHsgdGhpcy50YXJnZXQgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnRhcmdldCwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlYXNvbiddKSB7IHRoaXMucmVhc29uID0gc291cmNlLnJlYXNvbjsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydyZWFzb25Db2RlYWJsZUNvbmNlcHQnXSkgeyB0aGlzLnJlYXNvbiA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UucmVhc29uQ29kZWFibGVDb25jZXB0LCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydyZWFzb25SZWZlcmVuY2UnXSkgeyB0aGlzLnJlYXNvbiA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucmVhc29uUmVmZXJlbmNlLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnd2hlbiddKSB7IHRoaXMud2hlbiA9IG5ldyBmaGlyLk9yZGVyV2hlbihzb3VyY2Uud2hlbiwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2RldGFpbCddKSB7IHRoaXMuZGV0YWlsID0gc291cmNlLmRldGFpbC5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmRldGFpbCA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnT3JkZXInIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdkYXRlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdzdWJqZWN0JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdzb3VyY2UnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3RhcmdldCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncmVhc29uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd3aGVuJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJBKCdkZXRhaWwnLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19