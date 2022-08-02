// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DeviceUseStatement
import * as fhir from '../fhir.js';
// @ts-ignore
import { DeviceStatementStatusVsValidation } from '../fhirValueSets/DeviceStatementStatusVsValidation.js';
/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 */
export class DeviceUseStatement extends fhir.DomainResource {
    /**
     * Default constructor for DeviceUseStatement - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'DeviceUseStatement';
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
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        else {
            this.subject = null;
        }
        if (source['whenUsed']) {
            this.whenUsed = new fhir.Period(source.whenUsed);
        }
        if (source['timing']) {
            this.timing = source.timing;
        }
        else if (source['timingTiming']) {
            this.timing = new fhir.Timing(source.timingTiming);
        }
        else if (source['timingPeriod']) {
            this.timing = new fhir.Period(source.timingPeriod);
        }
        else if (source['timingDateTime']) {
            this.timing = new fhir.FhirDateTime({ value: source.timingDateTime });
        }
        if (source['recordedOn']) {
            this.recordedOn = new fhir.FhirDateTime({ value: source.recordedOn });
        }
        if (source['_recordedOn']) {
            if (this.recordedOn) {
                this.recordedOn.addExtendedProperties(source._recordedOn);
            }
            else {
                this.recordedOn = new fhir.FhirDateTime(source._recordedOn);
            }
        }
        if (source['source']) {
            this.source = new fhir.Reference(source.source);
        }
        if (source['device']) {
            this.device = new fhir.Reference(source.device);
        }
        else {
            this.device = null;
        }
        if (source['indication']) {
            this.indication = source.indication.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.indication = [];
        }
        if (source['bodySite']) {
            this.bodySite = new fhir.CodeableConcept(source.bodySite);
        }
        if (source['note']) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        else {
            this.note = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'DeviceUseStatement';
        }
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vRSV('status', exp, 'DeviceStatementStatus', DeviceStatementStatusVsValidation, 'r'));
        iss.push(...this.vRS('subject', exp));
        iss.push(...this.vOS('whenUsed', exp));
        iss.push(...this.vOS('timing', exp));
        iss.push(...this.vOS('recordedOn', exp));
        iss.push(...this.vOS('source', exp));
        iss.push(...this.vRS('device', exp));
        iss.push(...this.vOA('indication', exp));
        iss.push(...this.vOS('bodySite', exp));
        iss.push(...this.vOA('note', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
DeviceUseStatement._fts_dataType = 'DeviceUseStatement';
/**
 * Internal flag to properly serialize choice-type element DeviceUseStatement.timing[x]
 */
DeviceUseStatement._fts_timingIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlVXNlU3RhdGVtZW50LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9EZXZpY2VVc2VTdGF0ZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQWdGMUc7O0dBRUc7QUFDSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUEwRHpEOztPQUVHO0lBQ0gsWUFBWSxTQUF5QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUMvRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQW9CLENBQUM7UUFDekMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2hHO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFnQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQzVHO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLENBQUM7YUFBRTtpQkFDbkU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQWdDLE1BQU0sQ0FBQyxPQUFpQyxDQUFDLENBQUM7YUFBRTtTQUNuSDtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDeEU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzdCLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQUU7UUFDN0UsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FBRTthQUNqRCxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUFFO2FBQ25GLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQUU7YUFDbkYsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxjQUFjLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDM0csSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ2xHLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3pCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxXQUFZLENBQUMsQ0FBQzthQUFFO2lCQUMvRTtnQkFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBNkMsQ0FBQyxDQUFDO2FBQUU7U0FDeEc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUFFO1FBQzFFLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQUU7YUFDckU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzVCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUNyRztZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDOUIsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FBRTtRQUN0RixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDOUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUFFO0lBQzFCLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLEdBQUcsR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxvQkFBb0IsQ0FBQTtTQUFFO1FBQzlDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsdUJBQXVCLEVBQUMsaUNBQWlDLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBOUdEOztHQUVHO0FBQzZCLGdDQUFhLEdBQVUsb0JBQW9CLENBQUM7QUEwQjVFOztHQUVHO0FBQ3VCLHNDQUFtQixHQUFRLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogRGV2aWNlVXNlU3RhdGVtZW50XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBEZXZpY2VTdGF0ZW1lbnRTdGF0dXNDb2RlcywgIERldmljZVN0YXRlbWVudFN0YXR1c0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9EZXZpY2VTdGF0ZW1lbnRTdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRGV2aWNlU3RhdGVtZW50U3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9EZXZpY2VTdGF0ZW1lbnRTdGF0dXNWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEJvZHlTaXRlQ29kZXMsICBCb2R5U2l0ZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Cb2R5U2l0ZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBCb2R5U2l0ZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQm9keVNpdGVWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgRGV2aWNlVXNlU3RhdGVtZW50IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERldmljZVVzZVN0YXRlbWVudEFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkRldmljZVVzZVN0YXRlbWVudFwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbiBleHRlcm5hbCBpZGVudGlmaWVyIGZvciB0aGlzIHN0YXRlbWVudCBzdWNoIGFzIGFuIElSSS5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZXZpY2VVc2VTdGF0bWVudCBpcyBhIHN0YXRlbWVudCBhdCBhIHBvaW50IGluIHRpbWUuICBUaGUgc3RhdHVzIGlzIG9ubHkgcmVwcmVzZW50YXRpdmUgYXQgdGhlIHBvaW50IHdoZW4gaXQgd2FzIGFzc2VydGVkLiAgVGhlIHZhbHVlIHNldCBmb3IgY29udGFpbnMgY29kZXMgdGhhdCBhc3NlcnQgdGhlIHN0YXR1cyBvZiB0aGUgdXNlICBieSB0aGUgcGF0aWVudCAoZm9yIGV4YW1wbGUsIHN0b3BwZWQgb3Igb24gaG9sZCkgYXMgd2VsbCBhcyBjb2RlcyB0aGF0IGFzc2VydCB0aGUgc3RhdHVzIG9mIHRoZSByZXNvdXJjZSBpdHNlbGYgKGZvciBleGFtcGxlLCBlbnRlcmVkIGluIGVycm9yKS5cclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyB0aGUgY29kZXMgdGhhdCBtYXJrIHRoZSBzdGF0ZW1lbnQgYXMgbm90IGN1cnJlbnRseSB2YWxpZC5cclxuICAgKi9cclxuICBzdGF0dXM6IGZoaXIuRmhpckNvZGU8RGV2aWNlU3RhdGVtZW50U3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IERldmljZVVzZVN0YXRlbWVudC5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgcGF0aWVudCB3aG8gdXNlZCB0aGUgZGV2aWNlLlxyXG4gICAqL1xyXG4gIHN1YmplY3Q6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lIHBlcmlvZCBvdmVyIHdoaWNoIHRoZSBkZXZpY2Ugd2FzIHVzZWQuXHJcbiAgICovXHJcbiAgd2hlblVzZWQ/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEhvdyBvZnRlbiB0aGUgZGV2aWNlIHdhcyB1c2VkLlxyXG4gICAqL1xyXG4gIHRpbWluZz86IGZoaXIuVGltaW5nfGZoaXIuUGVyaW9kfGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBIb3cgb2Z0ZW4gdGhlIGRldmljZSB3YXMgdXNlZC5cclxuICAgKi9cclxuICB0aW1pbmdUaW1pbmc/OiBmaGlyLlRpbWluZ0FyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEhvdyBvZnRlbiB0aGUgZGV2aWNlIHdhcyB1c2VkLlxyXG4gICAqL1xyXG4gIHRpbWluZ1BlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSG93IG9mdGVuIHRoZSBkZXZpY2Ugd2FzIHVzZWQuXHJcbiAgICovXHJcbiAgdGltaW5nRGF0ZVRpbWU/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lIGF0IHdoaWNoIHRoZSBzdGF0ZW1lbnQgd2FzIG1hZGUvcmVjb3JkZWQuXHJcbiAgICovXHJcbiAgcmVjb3JkZWRPbj86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IERldmljZVVzZVN0YXRlbWVudC5yZWNvcmRlZE9uXHJcbiAgICovXHJcbiAgX3JlY29yZGVkT24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFdobyByZXBvcnRlZCB0aGUgZGV2aWNlIHdhcyBiZWluZyB1c2VkIGJ5IHRoZSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIHNvdXJjZT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRldGFpbHMgb2YgdGhlIGRldmljZSB1c2VkLlxyXG4gICAqL1xyXG4gIGRldmljZTogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogUmVhc29uIG9yIGp1c3RpZmljYXRpb24gZm9yIHRoZSB1c2Ugb2YgdGhlIGRldmljZS5cclxuICAgKi9cclxuICBpbmRpY2F0aW9uPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGUgc2l0ZSBvbiB0aGUgc3ViamVjdCdzIGJvZHkgd2hlcmUgdGhlIGRldmljZSB3YXMgdXNlZCAoIGkuZS4gdGhlIHRhcmdldCBzaXRlKS5cclxuICAgKi9cclxuICBib2R5U2l0ZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGV0YWlscyBhYm91dCB0aGUgZGV2aWNlIHN0YXRlbWVudCB0aGF0IHdlcmUgbm90IHJlcHJlc2VudGVkIGF0IGFsbCBvciBzdWZmaWNpZW50bHkgaW4gb25lIG9mIHRoZSBhdHRyaWJ1dGVzIHByb3ZpZGVkIGluIGEgY2xhc3MuIFRoZXNlIG1heSBpbmNsdWRlIGZvciBleGFtcGxlIGEgY29tbWVudCwgYW4gaW5zdHJ1Y3Rpb24sIG9yIGEgbm90ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHN0YXRlbWVudC5cclxuICAgKi9cclxuICBub3RlPzogZmhpci5Bbm5vdGF0aW9uQXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgcmVjb3JkIG9mIGEgZGV2aWNlIGJlaW5nIHVzZWQgYnkgYSBwYXRpZW50IHdoZXJlIHRoZSByZWNvcmQgaXMgdGhlIHJlc3VsdCBvZiBhIHJlcG9ydCBmcm9tIHRoZSBwYXRpZW50IG9yIGFub3RoZXIgY2xpbmljaWFuLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERldmljZVVzZVN0YXRlbWVudCBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRGV2aWNlVXNlU3RhdGVtZW50JztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIkRldmljZVVzZVN0YXRlbWVudFwiO1xyXG4gIC8qKlxyXG4gICAqIEFuIGV4dGVybmFsIGlkZW50aWZpZXIgZm9yIHRoaXMgc3RhdGVtZW50IHN1Y2ggYXMgYW4gSVJJLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBEZXZpY2VVc2VTdGF0bWVudCBpcyBhIHN0YXRlbWVudCBhdCBhIHBvaW50IGluIHRpbWUuICBUaGUgc3RhdHVzIGlzIG9ubHkgcmVwcmVzZW50YXRpdmUgYXQgdGhlIHBvaW50IHdoZW4gaXQgd2FzIGFzc2VydGVkLiAgVGhlIHZhbHVlIHNldCBmb3IgY29udGFpbnMgY29kZXMgdGhhdCBhc3NlcnQgdGhlIHN0YXR1cyBvZiB0aGUgdXNlICBieSB0aGUgcGF0aWVudCAoZm9yIGV4YW1wbGUsIHN0b3BwZWQgb3Igb24gaG9sZCkgYXMgd2VsbCBhcyBjb2RlcyB0aGF0IGFzc2VydCB0aGUgc3RhdHVzIG9mIHRoZSByZXNvdXJjZSBpdHNlbGYgKGZvciBleGFtcGxlLCBlbnRlcmVkIGluIGVycm9yKS5cclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyB0aGUgY29kZXMgdGhhdCBtYXJrIHRoZSBzdGF0ZW1lbnQgYXMgbm90IGN1cnJlbnRseSB2YWxpZC5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPERldmljZVN0YXRlbWVudFN0YXR1c0NvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXRpZW50IHdobyB1c2VkIHRoZSBkZXZpY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHN1YmplY3Q6IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWUgcGVyaW9kIG92ZXIgd2hpY2ggdGhlIGRldmljZSB3YXMgdXNlZC5cclxuICAgKi9cclxuICBwdWJsaWMgd2hlblVzZWQ/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSG93IG9mdGVuIHRoZSBkZXZpY2Ugd2FzIHVzZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHRpbWluZz86IChmaGlyLlRpbWluZ3xmaGlyLlBlcmlvZHxmaGlyLkZoaXJEYXRlVGltZSl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIGZsYWcgdG8gcHJvcGVybHkgc2VyaWFsaXplIGNob2ljZS10eXBlIGVsZW1lbnQgRGV2aWNlVXNlU3RhdGVtZW50LnRpbWluZ1t4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c190aW1pbmdJc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBUaGUgdGltZSBhdCB3aGljaCB0aGUgc3RhdGVtZW50IHdhcyBtYWRlL3JlY29yZGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWNvcmRlZE9uPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdobyByZXBvcnRlZCB0aGUgZGV2aWNlIHdhcyBiZWluZyB1c2VkIGJ5IHRoZSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzb3VyY2U/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRldGFpbHMgb2YgdGhlIGRldmljZSB1c2VkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkZXZpY2U6IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogUmVhc29uIG9yIGp1c3RpZmljYXRpb24gZm9yIHRoZSB1c2Ugb2YgdGhlIGRldmljZS5cclxuICAgKi9cclxuICBwdWJsaWMgaW5kaWNhdGlvbjogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIHNpdGUgb24gdGhlIHN1YmplY3QncyBib2R5IHdoZXJlIHRoZSBkZXZpY2Ugd2FzIHVzZWQgKCBpLmUuIHRoZSB0YXJnZXQgc2l0ZSkuXHJcbiAgICovXHJcbiAgcHVibGljIGJvZHlTaXRlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERldGFpbHMgYWJvdXQgdGhlIGRldmljZSBzdGF0ZW1lbnQgdGhhdCB3ZXJlIG5vdCByZXByZXNlbnRlZCBhdCBhbGwgb3Igc3VmZmljaWVudGx5IGluIG9uZSBvZiB0aGUgYXR0cmlidXRlcyBwcm92aWRlZCBpbiBhIGNsYXNzLiBUaGVzZSBtYXkgaW5jbHVkZSBmb3IgZXhhbXBsZSBhIGNvbW1lbnQsIGFuIGluc3RydWN0aW9uLCBvciBhIG5vdGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBzdGF0ZW1lbnQuXHJcbiAgICovXHJcbiAgcHVibGljIG5vdGU6IGZoaXIuQW5ub3RhdGlvbltdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIERldmljZVVzZVN0YXRlbWVudCAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPERldmljZVVzZVN0YXRlbWVudEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdEZXZpY2VVc2VTdGF0ZW1lbnQnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxEZXZpY2VTdGF0ZW1lbnRTdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdHVzfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMpIHsgdGhpcy5zdGF0dXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8RGV2aWNlU3RhdGVtZW50U3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydzdWJqZWN0J10pIHsgdGhpcy5zdWJqZWN0ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5zdWJqZWN0KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3ViamVjdCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3doZW5Vc2VkJ10pIHsgdGhpcy53aGVuVXNlZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2Uud2hlblVzZWQpOyB9XHJcbiAgICBpZiAoc291cmNlWyd0aW1pbmcnXSkgeyB0aGlzLnRpbWluZyA9IHNvdXJjZS50aW1pbmc7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndGltaW5nVGltaW5nJ10pIHsgdGhpcy50aW1pbmcgPSBuZXcgZmhpci5UaW1pbmcoc291cmNlLnRpbWluZ1RpbWluZyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndGltaW5nUGVyaW9kJ10pIHsgdGhpcy50aW1pbmcgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLnRpbWluZ1BlcmlvZCk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndGltaW5nRGF0ZVRpbWUnXSkgeyB0aGlzLnRpbWluZyA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS50aW1pbmdEYXRlVGltZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydyZWNvcmRlZE9uJ10pIHsgdGhpcy5yZWNvcmRlZE9uID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLnJlY29yZGVkT259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3JlY29yZGVkT24nXSkge1xyXG4gICAgICBpZiAodGhpcy5yZWNvcmRlZE9uKSB7IHRoaXMucmVjb3JkZWRPbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9yZWNvcmRlZE9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucmVjb3JkZWRPbiA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX3JlY29yZGVkT24gYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc291cmNlJ10pIHsgdGhpcy5zb3VyY2UgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnNvdXJjZSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2RldmljZSddKSB7IHRoaXMuZGV2aWNlID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5kZXZpY2UpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5kZXZpY2UgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydpbmRpY2F0aW9uJ10pIHsgdGhpcy5pbmRpY2F0aW9uID0gc291cmNlLmluZGljYXRpb24ubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pbmRpY2F0aW9uID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2JvZHlTaXRlJ10pIHsgdGhpcy5ib2R5U2l0ZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuYm9keVNpdGUpOyB9XHJcbiAgICBpZiAoc291cmNlWydub3RlJ10pIHsgdGhpcy5ub3RlID0gc291cmNlLm5vdGUubWFwKCh4KSA9PiBuZXcgZmhpci5Bbm5vdGF0aW9uKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMubm90ZSA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnRGV2aWNlVXNlU3RhdGVtZW50JyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSU1YoJ3N0YXR1cycsZXhwLCdEZXZpY2VTdGF0ZW1lbnRTdGF0dXMnLERldmljZVN0YXRlbWVudFN0YXR1c1ZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdzdWJqZWN0JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd3aGVuVXNlZCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndGltaW5nJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdyZWNvcmRlZE9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdzb3VyY2UnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ2RldmljZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaW5kaWNhdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnYm9keVNpdGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ25vdGUnLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19