// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: ContactPoint
import * as fhir from '../fhir.js';
// @ts-ignore
import { ContactPointSystemVsValidation } from '../fhirValueSets/ContactPointSystemVsValidation.js';
// @ts-ignore
import { ContactPointUseVsValidation } from '../fhirValueSets/ContactPointUseVsValidation.js';
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export class ContactPoint extends fhir.FhirElement {
    /**
     * Default constructor for ContactPoint - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['system']) {
            this.system = new fhir.FhirCode({ value: source.system });
        }
        if (source['_system']) {
            if (this.system) {
                this.system.addExtendedProperties(source._system);
            }
            else {
                this.system = new fhir.FhirCode(source._system);
            }
        }
        if (source['value']) {
            this.value = new fhir.FhirString({ value: source.value });
        }
        if (source['_value']) {
            if (this.value) {
                this.value.addExtendedProperties(source._value);
            }
            else {
                this.value = new fhir.FhirString(source._value);
            }
        }
        if (source['use']) {
            this.use = new fhir.FhirCode({ value: source.use });
        }
        if (source['_use']) {
            if (this.use) {
                this.use.addExtendedProperties(source._use);
            }
            else {
                this.use = new fhir.FhirCode(source._use);
            }
        }
        if (source['rank']) {
            this.rank = new fhir.FhirPositiveInt({ value: source.rank });
        }
        if (source['_rank']) {
            if (this.rank) {
                this.rank.addExtendedProperties(source._rank);
            }
            else {
                this.rank = new fhir.FhirPositiveInt(source._rank);
            }
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'ContactPoint';
        }
        this.vOSV('system', exp, 'ContactPointSystem', ContactPointSystemVsValidation, 'r');
        this.vOS('value', exp);
        this.vOSV('use', exp, 'ContactPointUse', ContactPointUseVsValidation, 'r');
        this.vOS('rank', exp);
        this.vOS('period', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
ContactPoint._fts_dataType = 'ContactPoint';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdFBvaW50LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9Db250YWN0UG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBRWpDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUdwRyxhQUFhO0FBQ2IsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saURBQWlELENBQUM7QUEyQzlGOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFlBQWEsU0FBUSxJQUFJLENBQUMsV0FBVztJQXlCaEQ7O09BRUc7SUFDSCxZQUFZLFNBQW1DLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3pGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBNkIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FBRTtRQUM5RyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLENBQUM7YUFBRTtpQkFDbkU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQTZCLE1BQU0sQ0FBQyxPQUFpQyxDQUFDLENBQUM7YUFBRTtTQUNoSDtRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNqRixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsTUFBTyxDQUFDLENBQUM7YUFBRTtpQkFDaEU7Z0JBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQXNDLENBQUMsQ0FBQzthQUFFO1NBQzFGO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBMEIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNsRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsSUFBSyxDQUFDLENBQUM7YUFBRTtpQkFDMUQ7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQTBCLE1BQU0sQ0FBQyxJQUE4QixDQUFDLENBQUM7YUFBRTtTQUN2RztRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNuRixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUM7YUFBRTtpQkFDN0Q7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQTBDLENBQUMsQ0FBQzthQUFFO1NBQ2xHO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FBRTtJQUN6RSxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsY0FBYyxDQUFBO1NBQUU7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLG9CQUFvQixFQUFDLDhCQUE4QixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQy9FLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxpQkFBaUIsRUFBQywyQkFBMkIsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0RSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQS9ERDs7R0FFRztBQUM2QiwwQkFBYSxHQUFVLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogQ29udGFjdFBvaW50XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBDb250YWN0UG9pbnRTeXN0ZW1Db2RlcywgIENvbnRhY3RQb2ludFN5c3RlbUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Db250YWN0UG9pbnRTeXN0ZW1Db2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQ29udGFjdFBvaW50U3lzdGVtVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Db250YWN0UG9pbnRTeXN0ZW1Wc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IENvbnRhY3RQb2ludFVzZUNvZGVzLCAgQ29udGFjdFBvaW50VXNlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0NvbnRhY3RQb2ludFVzZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBDb250YWN0UG9pbnRVc2VWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0NvbnRhY3RQb2ludFVzZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBDb250YWN0UG9pbnQgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFjdFBvaW50QXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUZWxlY29tbXVuaWNhdGlvbnMgZm9ybSBmb3IgY29udGFjdCBwb2ludCAtIHdoYXQgY29tbXVuaWNhdGlvbnMgc3lzdGVtIGlzIHJlcXVpcmVkIHRvIG1ha2UgdXNlIG9mIHRoZSBjb250YWN0LlxyXG4gICAqL1xyXG4gIHN5c3RlbT86IGZoaXIuRmhpckNvZGU8Q29udGFjdFBvaW50U3lzdGVtQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvbnRhY3RQb2ludC5zeXN0ZW1cclxuICAgKi9cclxuICBfc3lzdGVtPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHRleHQgZGF0YSBzdWNoIGFzIHBob25lIGV4dGVuc2lvbiBudW1iZXJzLCBvciBub3RlcyBhYm91dCB1c2Ugb2YgdGhlIGNvbnRhY3QgYXJlIHNvbWV0aW1lcyBpbmNsdWRlZCBpbiB0aGUgdmFsdWUuXHJcbiAgICovXHJcbiAgdmFsdWU/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29udGFjdFBvaW50LnZhbHVlXHJcbiAgICovXHJcbiAgX3ZhbHVlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGlzIGlzIGxhYmVsZWQgYXMgXCJJcyBNb2RpZmllclwiIGJlY2F1c2UgYXBwbGljYXRpb25zIHNob3VsZCBub3QgbWlzdGFrZSBhIHRlbXBvcmFyeSBvciBvbGQgY29udGFjdCBldGMuZm9yIGEgY3VycmVudC9wZXJtYW5lbnQgb25lLiBBcHBsaWNhdGlvbnMgY2FuIGFzc3VtZSB0aGF0IGEgY29udGFjdCBpcyBjdXJyZW50IHVubGVzcyBpdCBleHBsaWNpdGx5IHNheXMgdGhhdCBpdCBpcyB0ZW1wb3Jhcnkgb3Igb2xkLlxyXG4gICAqL1xyXG4gIHVzZT86IGZoaXIuRmhpckNvZGU8Q29udGFjdFBvaW50VXNlQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvbnRhY3RQb2ludC51c2VcclxuICAgKi9cclxuICBfdXNlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBOb3RlIHRoYXQgcmFuayBkb2VzIG5vdCBuZWNlc3NhcmlseSBmb2xsb3cgdGhlIG9yZGVyIGluIHdoaWNoIHRoZSBjb250YWN0cyBhcmUgcmVwcmVzZW50ZWQgaW4gdGhlIGluc3RhbmNlLlxyXG4gICAqL1xyXG4gIHJhbms/OiBmaGlyLkZoaXJQb3NpdGl2ZUludHxudW1iZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDb250YWN0UG9pbnQucmFua1xyXG4gICAqL1xyXG4gIF9yYW5rPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaW1lIHBlcmlvZCB3aGVuIHRoZSBjb250YWN0IHBvaW50IHdhcy9pcyBpbiB1c2UuXHJcbiAgICovXHJcbiAgcGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGFpbHMgZm9yIGFsbCBraW5kcyBvZiB0ZWNobm9sb2d5IG1lZGlhdGVkIGNvbnRhY3QgcG9pbnRzIGZvciBhIHBlcnNvbiBvciBvcmdhbml6YXRpb24sIGluY2x1ZGluZyB0ZWxlcGhvbmUsIGVtYWlsLCBldGMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29udGFjdFBvaW50IGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdDb250YWN0UG9pbnQnO1xyXG4gIC8qKlxyXG4gICAqIFRlbGVjb21tdW5pY2F0aW9ucyBmb3JtIGZvciBjb250YWN0IHBvaW50IC0gd2hhdCBjb21tdW5pY2F0aW9ucyBzeXN0ZW0gaXMgcmVxdWlyZWQgdG8gbWFrZSB1c2Ugb2YgdGhlIGNvbnRhY3QuXHJcbiAgICovXHJcbiAgcHVibGljIHN5c3RlbT86IGZoaXIuRmhpckNvZGU8Q29udGFjdFBvaW50U3lzdGVtQ29kZVR5cGU+fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHRleHQgZGF0YSBzdWNoIGFzIHBob25lIGV4dGVuc2lvbiBudW1iZXJzLCBvciBub3RlcyBhYm91dCB1c2Ugb2YgdGhlIGNvbnRhY3QgYXJlIHNvbWV0aW1lcyBpbmNsdWRlZCBpbiB0aGUgdmFsdWUuXHJcbiAgICovXHJcbiAgcHVibGljIHZhbHVlPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGlzIGxhYmVsZWQgYXMgXCJJcyBNb2RpZmllclwiIGJlY2F1c2UgYXBwbGljYXRpb25zIHNob3VsZCBub3QgbWlzdGFrZSBhIHRlbXBvcmFyeSBvciBvbGQgY29udGFjdCBldGMuZm9yIGEgY3VycmVudC9wZXJtYW5lbnQgb25lLiBBcHBsaWNhdGlvbnMgY2FuIGFzc3VtZSB0aGF0IGEgY29udGFjdCBpcyBjdXJyZW50IHVubGVzcyBpdCBleHBsaWNpdGx5IHNheXMgdGhhdCBpdCBpcyB0ZW1wb3Jhcnkgb3Igb2xkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1c2U/OiBmaGlyLkZoaXJDb2RlPENvbnRhY3RQb2ludFVzZUNvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogTm90ZSB0aGF0IHJhbmsgZG9lcyBub3QgbmVjZXNzYXJpbHkgZm9sbG93IHRoZSBvcmRlciBpbiB3aGljaCB0aGUgY29udGFjdHMgYXJlIHJlcHJlc2VudGVkIGluIHRoZSBpbnN0YW5jZS5cclxuICAgKi9cclxuICBwdWJsaWMgcmFuaz86IGZoaXIuRmhpclBvc2l0aXZlSW50fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaW1lIHBlcmlvZCB3aGVuIHRoZSBjb250YWN0IHBvaW50IHdhcy9pcyBpbiB1c2UuXHJcbiAgICovXHJcbiAgcHVibGljIHBlcmlvZD86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBDb250YWN0UG9pbnQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxDb250YWN0UG9pbnRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnc3lzdGVtJ10pIHsgdGhpcy5zeXN0ZW0gPSBuZXcgZmhpci5GaGlyQ29kZTxDb250YWN0UG9pbnRTeXN0ZW1Db2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3lzdGVtfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zeXN0ZW0nXSkge1xyXG4gICAgICBpZiAodGhpcy5zeXN0ZW0pIHsgdGhpcy5zeXN0ZW0uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3lzdGVtISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3lzdGVtID0gbmV3IGZoaXIuRmhpckNvZGU8Q29udGFjdFBvaW50U3lzdGVtQ29kZVR5cGU+KHNvdXJjZS5fc3lzdGVtIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd2YWx1ZSddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnZhbHVlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ192YWx1ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbHVlKSB7IHRoaXMudmFsdWUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdmFsdWUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl92YWx1ZSBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndXNlJ10pIHsgdGhpcy51c2UgPSBuZXcgZmhpci5GaGlyQ29kZTxDb250YWN0UG9pbnRVc2VDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2UudXNlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ191c2UnXSkge1xyXG4gICAgICBpZiAodGhpcy51c2UpIHsgdGhpcy51c2UuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdXNlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudXNlID0gbmV3IGZoaXIuRmhpckNvZGU8Q29udGFjdFBvaW50VXNlQ29kZVR5cGU+KHNvdXJjZS5fdXNlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydyYW5rJ10pIHsgdGhpcy5yYW5rID0gbmV3IGZoaXIuRmhpclBvc2l0aXZlSW50KHt2YWx1ZTogc291cmNlLnJhbmt9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3JhbmsnXSkge1xyXG4gICAgICBpZiAodGhpcy5yYW5rKSB7IHRoaXMucmFuay5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9yYW5rISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucmFuayA9IG5ldyBmaGlyLkZoaXJQb3NpdGl2ZUludChzb3VyY2UuX3JhbmsgYXMgUGFydGlhbDxmaGlyLkZoaXJQb3NpdGl2ZUludEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncGVyaW9kJ10pIHsgdGhpcy5wZXJpb2QgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLnBlcmlvZCk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdDb250YWN0UG9pbnQnIH1cclxuICAgIHRoaXMudk9TVignc3lzdGVtJyxleHAsJ0NvbnRhY3RQb2ludFN5c3RlbScsQ29udGFjdFBvaW50U3lzdGVtVnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHRoaXMudk9TKCd2YWx1ZScsZXhwKVxyXG4gICAgdGhpcy52T1NWKCd1c2UnLGV4cCwnQ29udGFjdFBvaW50VXNlJyxDb250YWN0UG9pbnRVc2VWc1ZhbGlkYXRpb24sJ3InKVxyXG4gICAgdGhpcy52T1MoJ3JhbmsnLGV4cClcclxuICAgIHRoaXMudk9TKCdwZXJpb2QnLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==