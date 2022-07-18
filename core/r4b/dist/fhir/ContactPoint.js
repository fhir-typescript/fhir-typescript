// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdFBvaW50LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9Db250YWN0UG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBRWpDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUdwRyxhQUFhO0FBQ2IsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saURBQWlELENBQUM7QUEyQzlGOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFlBQWEsU0FBUSxJQUFJLENBQUMsV0FBVztJQXlCaEQ7O09BRUc7SUFDSCxZQUFZLFNBQW1DLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3pGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBNkIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FBRTtRQUM5RyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLENBQUM7YUFBRTtpQkFDbkU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQTZCLE1BQU0sQ0FBQyxPQUFpQyxDQUFDLENBQUM7YUFBRTtTQUNoSDtRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNqRixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsTUFBTyxDQUFDLENBQUM7YUFBRTtpQkFDaEU7Z0JBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQXNDLENBQUMsQ0FBQzthQUFFO1NBQzFGO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBMEIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNsRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsSUFBSyxDQUFDLENBQUM7YUFBRTtpQkFDMUQ7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQTBCLE1BQU0sQ0FBQyxJQUE4QixDQUFDLENBQUM7YUFBRTtTQUN2RztRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNuRixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUM7YUFBRTtpQkFDN0Q7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQTBDLENBQUMsQ0FBQzthQUFFO1NBQ2xHO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FBRTtJQUN6RSxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsY0FBYyxDQUFBO1NBQUU7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLG9CQUFvQixFQUFDLDhCQUE4QixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQy9FLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxpQkFBaUIsRUFBQywyQkFBMkIsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0RSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQS9ERDs7R0FFRztBQUM2QiwwQkFBYSxHQUFVLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IENvbnRhY3RQb2ludFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQ29udGFjdFBvaW50U3lzdGVtQ29kZXMsICBDb250YWN0UG9pbnRTeXN0ZW1Db2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQ29udGFjdFBvaW50U3lzdGVtQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IENvbnRhY3RQb2ludFN5c3RlbVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQ29udGFjdFBvaW50U3lzdGVtVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBDb250YWN0UG9pbnRVc2VDb2RlcywgIENvbnRhY3RQb2ludFVzZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Db250YWN0UG9pbnRVc2VDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQ29udGFjdFBvaW50VXNlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Db250YWN0UG9pbnRVc2VWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgQ29udGFjdFBvaW50IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhY3RQb2ludEFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogVGVsZWNvbW11bmljYXRpb25zIGZvcm0gZm9yIGNvbnRhY3QgcG9pbnQgLSB3aGF0IGNvbW11bmljYXRpb25zIHN5c3RlbSBpcyByZXF1aXJlZCB0byBtYWtlIHVzZSBvZiB0aGUgY29udGFjdC5cclxuICAgKi9cclxuICBzeXN0ZW0/OiBmaGlyLkZoaXJDb2RlPENvbnRhY3RQb2ludFN5c3RlbUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDb250YWN0UG9pbnQuc3lzdGVtXHJcbiAgICovXHJcbiAgX3N5c3RlbT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCB0ZXh0IGRhdGEgc3VjaCBhcyBwaG9uZSBleHRlbnNpb24gbnVtYmVycywgb3Igbm90ZXMgYWJvdXQgdXNlIG9mIHRoZSBjb250YWN0IGFyZSBzb21ldGltZXMgaW5jbHVkZWQgaW4gdGhlIHZhbHVlLlxyXG4gICAqL1xyXG4gIHZhbHVlPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvbnRhY3RQb2ludC52YWx1ZVxyXG4gICAqL1xyXG4gIF92YWx1ZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQXBwbGljYXRpb25zIGNhbiBhc3N1bWUgdGhhdCBhIGNvbnRhY3QgaXMgY3VycmVudCB1bmxlc3MgaXQgZXhwbGljaXRseSBzYXlzIHRoYXQgaXQgaXMgdGVtcG9yYXJ5IG9yIG9sZC5cclxuICAgKi9cclxuICB1c2U/OiBmaGlyLkZoaXJDb2RlPENvbnRhY3RQb2ludFVzZUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDb250YWN0UG9pbnQudXNlXHJcbiAgICovXHJcbiAgX3VzZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogTm90ZSB0aGF0IHJhbmsgZG9lcyBub3QgbmVjZXNzYXJpbHkgZm9sbG93IHRoZSBvcmRlciBpbiB3aGljaCB0aGUgY29udGFjdHMgYXJlIHJlcHJlc2VudGVkIGluIHRoZSBpbnN0YW5jZS5cclxuICAgKi9cclxuICByYW5rPzogZmhpci5GaGlyUG9zaXRpdmVJbnR8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29udGFjdFBvaW50LnJhbmtcclxuICAgKi9cclxuICBfcmFuaz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGltZSBwZXJpb2Qgd2hlbiB0aGUgY29udGFjdCBwb2ludCB3YXMvaXMgaW4gdXNlLlxyXG4gICAqL1xyXG4gIHBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRhaWxzIGZvciBhbGwga2luZHMgb2YgdGVjaG5vbG9neSBtZWRpYXRlZCBjb250YWN0IHBvaW50cyBmb3IgYSBwZXJzb24gb3Igb3JnYW5pemF0aW9uLCBpbmNsdWRpbmcgdGVsZXBob25lLCBlbWFpbCwgZXRjLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbnRhY3RQb2ludCBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQ29udGFjdFBvaW50JztcclxuICAvKipcclxuICAgKiBUZWxlY29tbXVuaWNhdGlvbnMgZm9ybSBmb3IgY29udGFjdCBwb2ludCAtIHdoYXQgY29tbXVuaWNhdGlvbnMgc3lzdGVtIGlzIHJlcXVpcmVkIHRvIG1ha2UgdXNlIG9mIHRoZSBjb250YWN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzeXN0ZW0/OiBmaGlyLkZoaXJDb2RlPENvbnRhY3RQb2ludFN5c3RlbUNvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCB0ZXh0IGRhdGEgc3VjaCBhcyBwaG9uZSBleHRlbnNpb24gbnVtYmVycywgb3Igbm90ZXMgYWJvdXQgdXNlIG9mIHRoZSBjb250YWN0IGFyZSBzb21ldGltZXMgaW5jbHVkZWQgaW4gdGhlIHZhbHVlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB2YWx1ZT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQXBwbGljYXRpb25zIGNhbiBhc3N1bWUgdGhhdCBhIGNvbnRhY3QgaXMgY3VycmVudCB1bmxlc3MgaXQgZXhwbGljaXRseSBzYXlzIHRoYXQgaXQgaXMgdGVtcG9yYXJ5IG9yIG9sZC5cclxuICAgKi9cclxuICBwdWJsaWMgdXNlPzogZmhpci5GaGlyQ29kZTxDb250YWN0UG9pbnRVc2VDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5vdGUgdGhhdCByYW5rIGRvZXMgbm90IG5lY2Vzc2FyaWx5IGZvbGxvdyB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlIGNvbnRhY3RzIGFyZSByZXByZXNlbnRlZCBpbiB0aGUgaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHJhbms/OiBmaGlyLkZoaXJQb3NpdGl2ZUludHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGltZSBwZXJpb2Qgd2hlbiB0aGUgY29udGFjdCBwb2ludCB3YXMvaXMgaW4gdXNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgQ29udGFjdFBvaW50IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8Q29udGFjdFBvaW50QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3N5c3RlbSddKSB7IHRoaXMuc3lzdGVtID0gbmV3IGZoaXIuRmhpckNvZGU8Q29udGFjdFBvaW50U3lzdGVtQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN5c3RlbX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3lzdGVtJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3lzdGVtKSB7IHRoaXMuc3lzdGVtLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N5c3RlbSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN5c3RlbSA9IG5ldyBmaGlyLkZoaXJDb2RlPENvbnRhY3RQb2ludFN5c3RlbUNvZGVUeXBlPihzb3VyY2UuX3N5c3RlbSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndmFsdWUnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS52YWx1ZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfdmFsdWUnXSkge1xyXG4gICAgICBpZiAodGhpcy52YWx1ZSkgeyB0aGlzLnZhbHVlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3ZhbHVlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fdmFsdWUgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3VzZSddKSB7IHRoaXMudXNlID0gbmV3IGZoaXIuRmhpckNvZGU8Q29udGFjdFBvaW50VXNlQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnVzZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfdXNlJ10pIHtcclxuICAgICAgaWYgKHRoaXMudXNlKSB7IHRoaXMudXNlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3VzZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnVzZSA9IG5ldyBmaGlyLkZoaXJDb2RlPENvbnRhY3RQb2ludFVzZUNvZGVUeXBlPihzb3VyY2UuX3VzZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncmFuayddKSB7IHRoaXMucmFuayA9IG5ldyBmaGlyLkZoaXJQb3NpdGl2ZUludCh7dmFsdWU6IHNvdXJjZS5yYW5rfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19yYW5rJ10pIHtcclxuICAgICAgaWYgKHRoaXMucmFuaykgeyB0aGlzLnJhbmsuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fcmFuayEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnJhbmsgPSBuZXcgZmhpci5GaGlyUG9zaXRpdmVJbnQoc291cmNlLl9yYW5rIGFzIFBhcnRpYWw8Zmhpci5GaGlyUG9zaXRpdmVJbnRBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3BlcmlvZCddKSB7IHRoaXMucGVyaW9kID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS5wZXJpb2QpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnQ29udGFjdFBvaW50JyB9XHJcbiAgICB0aGlzLnZPU1YoJ3N5c3RlbScsZXhwLCdDb250YWN0UG9pbnRTeXN0ZW0nLENvbnRhY3RQb2ludFN5c3RlbVZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZPUygndmFsdWUnLGV4cClcclxuICAgIHRoaXMudk9TVigndXNlJyxleHAsJ0NvbnRhY3RQb2ludFVzZScsQ29udGFjdFBvaW50VXNlVnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHRoaXMudk9TKCdyYW5rJyxleHApXHJcbiAgICB0aGlzLnZPUygncGVyaW9kJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=