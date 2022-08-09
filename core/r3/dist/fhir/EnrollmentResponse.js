// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: EnrollmentResponse
import * as fhir from '../fhir.js';
// @ts-ignore
import { FmStatusVsValidation } from '../fhirValueSets/FmStatusVsValidation.js';
// @ts-ignore
import { RemittanceOutcomeVsValidation } from '../fhirValueSets/RemittanceOutcomeVsValidation.js';
/**
 * This resource provides enrollment and plan details from the processing of an Enrollment resource.
 */
export class EnrollmentResponse extends fhir.DomainResource {
    /**
     * Default constructor for EnrollmentResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'EnrollmentResponse';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options));
        }
        else {
            this.identifier = [];
        }
        if (source['status'] !== undefined) {
            this.status = new fhir.FhirCode({ value: source.status }, options);
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status, options);
            }
        }
        if (source['request']) {
            this.request = new fhir.Reference(source.request, options);
        }
        if (source['outcome']) {
            this.outcome = new fhir.CodeableConcept(source.outcome, options);
        }
        if (source['disposition'] !== undefined) {
            this.disposition = new fhir.FhirString({ value: source.disposition }, options);
        }
        if (source['_disposition']) {
            if (this.disposition) {
                this.disposition.addExtendedProperties(source._disposition);
            }
            else {
                this.disposition = new fhir.FhirString(source._disposition, options);
            }
        }
        if (source['created'] !== undefined) {
            this.created = new fhir.FhirDateTime({ value: source.created }, options);
        }
        if (source['_created']) {
            if (this.created) {
                this.created.addExtendedProperties(source._created);
            }
            else {
                this.created = new fhir.FhirDateTime(source._created, options);
            }
        }
        if (source['organization']) {
            this.organization = new fhir.Reference(source.organization, options);
        }
        if (source['requestProvider']) {
            this.requestProvider = new fhir.Reference(source.requestProvider, options);
        }
        if (source['requestOrganization']) {
            this.requestOrganization = new fhir.Reference(source.requestOrganization, options);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'EnrollmentResponse';
        }
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vOSV('status', exp, 'FmStatus', FmStatusVsValidation, 'r'));
        iss.push(...this.vOS('request', exp));
        iss.push(...this.vOSV('outcome', exp, 'RemittanceOutcome', RemittanceOutcomeVsValidation, 'r'));
        iss.push(...this.vOS('disposition', exp));
        iss.push(...this.vOS('created', exp));
        iss.push(...this.vOS('organization', exp));
        iss.push(...this.vOS('requestProvider', exp));
        iss.push(...this.vOS('requestOrganization', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
EnrollmentResponse._fts_dataType = 'EnrollmentResponse';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5yb2xsbWVudFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9FbnJvbGxtZW50UmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUdoRixhQUFhO0FBQ2IsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUEyRGxHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGtCQUFtQixTQUFRLElBQUksQ0FBQyxjQUFjO0lBNkN6RDs7T0FFRztJQUNILFlBQVksU0FBeUMsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDL0YsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFvQixDQUFDO1FBQ3pDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDekc7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFtQixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUMzSCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLENBQUM7YUFBRTtpQkFDbkU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQW1CLE1BQU0sQ0FBQyxPQUFpQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQUU7U0FDL0c7UUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUN0RixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUM1RixJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUMxSCxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUMxQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsWUFBYSxDQUFDLENBQUM7YUFBRTtpQkFDbEY7Z0JBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQTRDLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFBRTtTQUMvRztRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQ2hILElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxRQUFTLENBQUMsQ0FBQzthQUFFO2lCQUN0RTtnQkFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBMEMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1NBQzNHO1FBQ0QsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDckcsSUFBSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUM5RyxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtJQUM1SCxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxHQUFHLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsb0JBQW9CLENBQUE7U0FBRTtRQUM5QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLFVBQVUsRUFBQyxvQkFBb0IsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxHQUFHLEVBQUMsbUJBQW1CLEVBQUMsNkJBQTZCLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQXpGRDs7R0FFRztBQUM2QixnQ0FBYSxHQUFVLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBFbnJvbGxtZW50UmVzcG9uc2VcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEZtU3RhdHVzQ29kZXMsICBGbVN0YXR1c0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9GbVN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBGbVN0YXR1c1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRm1TdGF0dXNWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFJlbWl0dGFuY2VPdXRjb21lQ29kZXMsICBSZW1pdHRhbmNlT3V0Y29tZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9SZW1pdHRhbmNlT3V0Y29tZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBSZW1pdHRhbmNlT3V0Y29tZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVtaXR0YW5jZU91dGNvbWVWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgRW5yb2xsbWVudFJlc3BvbnNlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEVucm9sbG1lbnRSZXNwb25zZUFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkVucm9sbG1lbnRSZXNwb25zZVwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgUmVzcG9uc2UgYnVzaW5lc3MgaWRlbnRpZmllci5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIHJlc3BvbnNlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgc3RhdHVzPzogZmhpci5GaGlyQ29kZTxGbVN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFbnJvbGxtZW50UmVzcG9uc2Uuc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogT3JpZ2luYWwgcmVxdWVzdCByZXNvdXJjZSByZWZlcmVuY2UuXHJcbiAgICovXHJcbiAgcmVxdWVzdD86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUHJvY2Vzc2luZyBzdGF0dXM6IGVycm9yLCBjb21wbGV0ZS5cclxuICAgKi9cclxuICBvdXRjb21lPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBzdGF0dXMgb2YgdGhlIGFkanVkaWNhdGlvbi5cclxuICAgKi9cclxuICBkaXNwb3NpdGlvbj86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFbnJvbGxtZW50UmVzcG9uc2UuZGlzcG9zaXRpb25cclxuICAgKi9cclxuICBfZGlzcG9zaXRpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHdoZW4gdGhlIGVuY2xvc2VkIHN1aXRlIG9mIHNlcnZpY2VzIHdlcmUgcGVyZm9ybWVkIG9yIGNvbXBsZXRlZC5cclxuICAgKi9cclxuICBjcmVhdGVkPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRW5yb2xsbWVudFJlc3BvbnNlLmNyZWF0ZWRcclxuICAgKi9cclxuICBfY3JlYXRlZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIEluc3VyZXIgd2hvIHByb2R1Y2VkIHRoaXMgYWRqdWRpY2F0ZWQgcmVzcG9uc2UuXHJcbiAgICovXHJcbiAgb3JnYW5pemF0aW9uPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcHJhY3RpdGlvbmVyIHdobyBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHNlcnZpY2VzIHJlbmRlcmVkIHRvIHRoZSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIHJlcXVlc3RQcm92aWRlcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIG9yZ2FuaXphdGlvbiB3aGljaCBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHNlcnZpY2VzIHJlbmRlcmVkIHRvIHRoZSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIHJlcXVlc3RPcmdhbml6YXRpb24/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyByZXNvdXJjZSBwcm92aWRlcyBlbnJvbGxtZW50IGFuZCBwbGFuIGRldGFpbHMgZnJvbSB0aGUgcHJvY2Vzc2luZyBvZiBhbiBFbnJvbGxtZW50IHJlc291cmNlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVucm9sbG1lbnRSZXNwb25zZSBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRW5yb2xsbWVudFJlc3BvbnNlJztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIkVucm9sbG1lbnRSZXNwb25zZVwiO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBSZXNwb25zZSBidXNpbmVzcyBpZGVudGlmaWVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIHJlc3BvbnNlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1cz86IGZoaXIuRmhpckNvZGU8Rm1TdGF0dXNDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE9yaWdpbmFsIHJlcXVlc3QgcmVzb3VyY2UgcmVmZXJlbmNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXF1ZXN0PzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFByb2Nlc3Npbmcgc3RhdHVzOiBlcnJvciwgY29tcGxldGUuXHJcbiAgICovXHJcbiAgcHVibGljIG91dGNvbWU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBkZXNjcmlwdGlvbiBvZiB0aGUgc3RhdHVzIG9mIHRoZSBhZGp1ZGljYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIGRpc3Bvc2l0aW9uPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB3aGVuIHRoZSBlbmNsb3NlZCBzdWl0ZSBvZiBzZXJ2aWNlcyB3ZXJlIHBlcmZvcm1lZCBvciBjb21wbGV0ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGNyZWF0ZWQ/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIEluc3VyZXIgd2hvIHByb2R1Y2VkIHRoaXMgYWRqdWRpY2F0ZWQgcmVzcG9uc2UuXHJcbiAgICovXHJcbiAgcHVibGljIG9yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcHJhY3RpdGlvbmVyIHdobyBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHNlcnZpY2VzIHJlbmRlcmVkIHRvIHRoZSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXF1ZXN0UHJvdmlkZXI/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIG9yZ2FuaXphdGlvbiB3aGljaCBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHNlcnZpY2VzIHJlbmRlcmVkIHRvIHRoZSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXF1ZXN0T3JnYW5pemF0aW9uPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEVucm9sbG1lbnRSZXNwb25zZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEVucm9sbG1lbnRSZXNwb25zZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdFbnJvbGxtZW50UmVzcG9uc2UnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPEZtU3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN0YXR1c30sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzKSB7IHRoaXMuc3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPEZtU3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydyZXF1ZXN0J10pIHsgdGhpcy5yZXF1ZXN0ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5yZXF1ZXN0LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnb3V0Y29tZSddKSB7IHRoaXMub3V0Y29tZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2Uub3V0Y29tZSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2Rpc3Bvc2l0aW9uJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmRpc3Bvc2l0aW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5kaXNwb3NpdGlvbn0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGlzcG9zaXRpb24nXSkge1xyXG4gICAgICBpZiAodGhpcy5kaXNwb3NpdGlvbikgeyB0aGlzLmRpc3Bvc2l0aW9uLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2Rpc3Bvc2l0aW9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZGlzcG9zaXRpb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fZGlzcG9zaXRpb24gYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NyZWF0ZWQnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuY3JlYXRlZCA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5jcmVhdGVkfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jcmVhdGVkJ10pIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZCkgeyB0aGlzLmNyZWF0ZWQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY3JlYXRlZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNyZWF0ZWQgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9jcmVhdGVkIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ29yZ2FuaXphdGlvbiddKSB7IHRoaXMub3JnYW5pemF0aW9uID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5vcmdhbml6YXRpb24sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydyZXF1ZXN0UHJvdmlkZXInXSkgeyB0aGlzLnJlcXVlc3RQcm92aWRlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucmVxdWVzdFByb3ZpZGVyLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVxdWVzdE9yZ2FuaXphdGlvbiddKSB7IHRoaXMucmVxdWVzdE9yZ2FuaXphdGlvbiA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucmVxdWVzdE9yZ2FuaXphdGlvbiwgb3B0aW9ucyk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdFbnJvbGxtZW50UmVzcG9uc2UnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TVignc3RhdHVzJyxleHAsJ0ZtU3RhdHVzJyxGbVN0YXR1c1ZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdyZXF1ZXN0JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TVignb3V0Y29tZScsZXhwLCdSZW1pdHRhbmNlT3V0Y29tZScsUmVtaXR0YW5jZU91dGNvbWVWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZGlzcG9zaXRpb24nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2NyZWF0ZWQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ29yZ2FuaXphdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncmVxdWVzdFByb3ZpZGVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdyZXF1ZXN0T3JnYW5pemF0aW9uJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==