// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DetectedIssue
import * as fhir from '../fhir.js';
// @ts-ignore
import { ObservationStatusVsValidation } from '../fhirValueSets/ObservationStatusVsValidation.js';
// @ts-ignore
import { DetectedissueSeverityVsValidation } from '../fhirValueSets/DetectedissueSeverityVsValidation.js';
/**
 * Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
 */
export class DetectedIssueMitigation extends fhir.BackboneElement {
    /**
     * Default constructor for DetectedIssueMitigation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['action']) {
            this.action = new fhir.CodeableConcept(source.action);
        }
        else {
            this.action = null;
        }
        if (source['date']) {
            this.date = new fhir.FhirDateTime({ value: source.date });
        }
        if (source['_date']) {
            if (this.date) {
                this.date.addExtendedProperties(source._date);
            }
            else {
                this.date = new fhir.FhirDateTime(source._date);
            }
        }
        if (source['author']) {
            this.author = new fhir.Reference(source.author);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'DetectedIssue.mitigation';
        }
        iss.push(...this.vRS('action', exp));
        iss.push(...this.vOS('date', exp));
        iss.push(...this.vOS('author', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
DetectedIssueMitigation._fts_dataType = 'DetectedIssueMitigation';
/**
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 */
export class DetectedIssue extends fhir.DomainResource {
    /**
     * Default constructor for DetectedIssue - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'DetectedIssue';
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier);
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
        if (source['category']) {
            this.category = new fhir.CodeableConcept(source.category);
        }
        if (source['severity']) {
            this.severity = new fhir.FhirCode({ value: source.severity });
        }
        if (source['_severity']) {
            if (this.severity) {
                this.severity.addExtendedProperties(source._severity);
            }
            else {
                this.severity = new fhir.FhirCode(source._severity);
            }
        }
        if (source['patient']) {
            this.patient = new fhir.Reference(source.patient);
        }
        if (source['date']) {
            this.date = new fhir.FhirDateTime({ value: source.date });
        }
        if (source['_date']) {
            if (this.date) {
                this.date.addExtendedProperties(source._date);
            }
            else {
                this.date = new fhir.FhirDateTime(source._date);
            }
        }
        if (source['author']) {
            this.author = new fhir.Reference(source.author);
        }
        if (source['implicated']) {
            this.implicated = source.implicated.map((x) => new fhir.Reference(x));
        }
        else {
            this.implicated = [];
        }
        if (source['detail']) {
            this.detail = new fhir.FhirString({ value: source.detail });
        }
        if (source['_detail']) {
            if (this.detail) {
                this.detail.addExtendedProperties(source._detail);
            }
            else {
                this.detail = new fhir.FhirString(source._detail);
            }
        }
        if (source['reference']) {
            this.reference = new fhir.FhirUri({ value: source.reference });
        }
        if (source['_reference']) {
            if (this.reference) {
                this.reference.addExtendedProperties(source._reference);
            }
            else {
                this.reference = new fhir.FhirUri(source._reference);
            }
        }
        if (source['mitigation']) {
            this.mitigation = source.mitigation.map((x) => new fhir.DetectedIssueMitigation(x));
        }
        else {
            this.mitigation = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'DetectedIssue';
        }
        iss.push(...this.vRPS('resourceType', exp));
        iss.push(...this.vOS('identifier', exp));
        iss.push(...this.vRSV('status', exp, 'ObservationStatus', ObservationStatusVsValidation, 'r'));
        iss.push(...this.vOS('category', exp));
        iss.push(...this.vOSV('severity', exp, 'DetectedissueSeverity', DetectedissueSeverityVsValidation, 'r'));
        iss.push(...this.vOS('patient', exp));
        iss.push(...this.vOS('date', exp));
        iss.push(...this.vOS('author', exp));
        iss.push(...this.vOA('implicated', exp));
        iss.push(...this.vOS('detail', exp));
        iss.push(...this.vOS('reference', exp));
        iss.push(...this.vOA('mitigation', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
DetectedIssue._fts_dataType = 'DetectedIssue';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV0ZWN0ZWRJc3N1ZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRGV0ZWN0ZWRJc3N1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFRbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBT2xHLGFBQWE7QUFDYixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQXVCMUc7O0dBRUc7QUFDSCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsSUFBSSxDQUFDLGVBQWU7SUFpQi9EOztPQUVHO0lBQ0gsWUFBWSxTQUE4QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNwRyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQUU7YUFDM0U7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzVCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNoRixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUM7YUFBRTtpQkFDN0Q7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQXVDLENBQUMsQ0FBQzthQUFFO1NBQzVGO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FBRTtJQUM1RSxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxHQUFHLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsMEJBQTBCLENBQUE7U0FBRTtRQUNwRCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBeENEOztHQUVHO0FBQzZCLHFDQUFhLEdBQVUseUJBQXlCLENBQUM7QUFpSG5GOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGFBQWMsU0FBUSxJQUFJLENBQUMsY0FBYztJQXFEcEQ7O09BRUc7SUFDSCxZQUFZLFNBQW9DLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQzFGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUM7UUFDcEMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7U0FBRTtRQUN2RixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUE0QixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3hHO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLENBQUM7YUFBRTtpQkFDbkU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQTRCLE1BQU0sQ0FBQyxPQUFpQyxDQUFDLENBQUM7YUFBRTtTQUMvRztRQUNELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQUU7UUFDdEYsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBZ0MsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7U0FBRTtRQUN2SCxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsU0FBVSxDQUFDLENBQUM7YUFBRTtpQkFDekU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQWdDLE1BQU0sQ0FBQyxTQUFtQyxDQUFDLENBQUM7YUFBRTtTQUN2SDtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDN0UsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ2hGLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsQ0FBQzthQUFFO2lCQUM3RDtnQkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBdUMsQ0FBQyxDQUFDO2FBQUU7U0FDNUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUFFO1FBQzFFLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUMvRjtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDOUIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3BGLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxPQUFRLENBQUMsQ0FBQzthQUFFO2lCQUNuRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBdUMsQ0FBQyxDQUFDO2FBQUU7U0FDNUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDMUYsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUFFLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFVBQVcsQ0FBQyxDQUFDO2FBQUU7aUJBQzVFO2dCQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUF1QyxDQUFDLENBQUM7YUFBRTtTQUM1RjtRQUNELElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQzdHO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FBRTtJQUNoQyxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxHQUFHLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsZUFBZSxDQUFBO1NBQUU7UUFDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyxtQkFBbUIsRUFBQyw2QkFBNkIsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxHQUFHLEVBQUMsdUJBQXVCLEVBQUMsaUNBQWlDLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBaEhEOztHQUVHO0FBQzZCLDJCQUFhLEdBQVUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBEZXRlY3RlZElzc3VlXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBEZXRlY3RlZGlzc3VlTWl0aWdhdGlvbkFjdGlvbkNvZGVzLCAgRGV0ZWN0ZWRpc3N1ZU1pdGlnYXRpb25BY3Rpb25Db2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRGV0ZWN0ZWRpc3N1ZU1pdGlnYXRpb25BY3Rpb25Db2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRGV0ZWN0ZWRpc3N1ZU1pdGlnYXRpb25BY3Rpb25Wc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0RldGVjdGVkaXNzdWVNaXRpZ2F0aW9uQWN0aW9uVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBPYnNlcnZhdGlvblN0YXR1c0NvZGVzLCAgT2JzZXJ2YXRpb25TdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvT2JzZXJ2YXRpb25TdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgT2JzZXJ2YXRpb25TdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL09ic2VydmF0aW9uU3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBEZXRlY3RlZGlzc3VlQ2F0ZWdvcnlDb2RlcywgIERldGVjdGVkaXNzdWVDYXRlZ29yeUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9EZXRlY3RlZGlzc3VlQ2F0ZWdvcnlDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRGV0ZWN0ZWRpc3N1ZUNhdGVnb3J5VnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9EZXRlY3RlZGlzc3VlQ2F0ZWdvcnlWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IERldGVjdGVkaXNzdWVTZXZlcml0eUNvZGVzLCAgRGV0ZWN0ZWRpc3N1ZVNldmVyaXR5Q29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0RldGVjdGVkaXNzdWVTZXZlcml0eUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBEZXRlY3RlZGlzc3VlU2V2ZXJpdHlWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0RldGVjdGVkaXNzdWVTZXZlcml0eVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBEZXRlY3RlZElzc3VlTWl0aWdhdGlvbiB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBEZXRlY3RlZElzc3VlTWl0aWdhdGlvbkFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBcInRleHRcIiBjb21wb25lbnQgY2FuIGJlIHVzZWQgZm9yIGRldGFpbCBvciB3aGVuIG5vIGFwcHJvcHJpYXRlIGNvZGUgZXhpc3RzLlxyXG4gICAqL1xyXG4gIGFjdGlvbjogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBtYXkgbm90IGJlIHRoZSBzYW1lIGFzIHdoZW4gdGhlIG1pdGlnYXRpbmcgc3RlcCB3YXMgYWN0dWFsbHkgdGFrZW4uXHJcbiAgICovXHJcbiAgZGF0ZT86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IERldGVjdGVkSXNzdWUubWl0aWdhdGlvbi5kYXRlXHJcbiAgICovXHJcbiAgX2RhdGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgdGhlIHByYWN0aXRpb25lciB3aG8gZGV0ZXJtaW5lZCB0aGUgbWl0aWdhdGlvbiBhbmQgdGFrZXMgcmVzcG9uc2liaWxpdHkgZm9yIHRoZSBtaXRpZ2F0aW9uIHN0ZXAgb2NjdXJyaW5nLlxyXG4gICAqL1xyXG4gIGF1dGhvcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbmRpY2F0ZXMgYW4gYWN0aW9uIHRoYXQgaGFzIGJlZW4gdGFrZW4gb3IgaXMgY29tbWl0dGVkIHRvIHRvIHJlZHVjZSBvciBlbGltaW5hdGUgdGhlIGxpa2VsaWhvb2Qgb2YgdGhlIHJpc2sgaWRlbnRpZmllZCBieSB0aGUgZGV0ZWN0ZWQgaXNzdWUgZnJvbSBtYW5pZmVzdGluZy4gIENhbiBhbHNvIHJlZmxlY3QgYW4gb2JzZXJ2YXRpb24gb2Yga25vd24gbWl0aWdhdGluZyBmYWN0b3JzIHRoYXQgbWF5IHJlZHVjZS9lbGltaW5hdGUgdGhlIG5lZWQgZm9yIGFueSBhY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRGV0ZWN0ZWRJc3N1ZU1pdGlnYXRpb24gZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdEZXRlY3RlZElzc3VlTWl0aWdhdGlvbic7XHJcbiAgLyoqXHJcbiAgICogVGhlIFwidGV4dFwiIGNvbXBvbmVudCBjYW4gYmUgdXNlZCBmb3IgZGV0YWlsIG9yIHdoZW4gbm8gYXBwcm9wcmlhdGUgY29kZSBleGlzdHMuXHJcbiAgICovXHJcbiAgcHVibGljIGFjdGlvbjogZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGlzIG1heSBub3QgYmUgdGhlIHNhbWUgYXMgd2hlbiB0aGUgbWl0aWdhdGluZyBzdGVwIHdhcyBhY3R1YWxseSB0YWtlbi5cclxuICAgKi9cclxuICBwdWJsaWMgZGF0ZT86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVzIHRoZSBwcmFjdGl0aW9uZXIgd2hvIGRldGVybWluZWQgdGhlIG1pdGlnYXRpb24gYW5kIHRha2VzIHJlc3BvbnNpYmlsaXR5IGZvciB0aGUgbWl0aWdhdGlvbiBzdGVwIG9jY3VycmluZy5cclxuICAgKi9cclxuICBwdWJsaWMgYXV0aG9yPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIERldGVjdGVkSXNzdWVNaXRpZ2F0aW9uIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8RGV0ZWN0ZWRJc3N1ZU1pdGlnYXRpb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnYWN0aW9uJ10pIHsgdGhpcy5hY3Rpb24gPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmFjdGlvbik7IH1cclxuICAgIGVsc2UgeyB0aGlzLmFjdGlvbiA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ2RhdGUnXSkgeyB0aGlzLmRhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UuZGF0ZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGF0ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGUpIHsgdGhpcy5kYXRlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2RhdGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kYXRlID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fZGF0ZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydhdXRob3InXSkgeyB0aGlzLmF1dGhvciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuYXV0aG9yKTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0RldGVjdGVkSXNzdWUubWl0aWdhdGlvbicgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ2FjdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZGF0ZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnYXV0aG9yJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBEZXRlY3RlZElzc3VlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERldGVjdGVkSXNzdWVBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJEZXRlY3RlZElzc3VlXCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEJ1c2luZXNzIGlkZW50aWZpZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBkZXRlY3RlZCBpc3N1ZSByZWNvcmQuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSB0aGUgc3RhdHVzIGNvbnRhaW5zIHRoZSBjb2RlcyBjYW5jZWxsZWQgYW5kIGVudGVyZWQtaW4tZXJyb3IgdGhhdCBtYXJrIHRoZSBpc3N1ZSBhcyBub3QgY3VycmVudGx5IHZhbGlkLlxyXG4gICAqL1xyXG4gIHN0YXR1czogZmhpci5GaGlyQ29kZTxPYnNlcnZhdGlvblN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEZXRlY3RlZElzc3VlLnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgdGhlIGdlbmVyYWwgdHlwZSBvZiBpc3N1ZSBpZGVudGlmaWVkLlxyXG4gICAqL1xyXG4gIGNhdGVnb3J5PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIGRlZ3JlZSBvZiBpbXBvcnRhbmNlIGFzc29jaWF0ZWQgd2l0aCB0aGUgaWRlbnRpZmllZCBpc3N1ZSBiYXNlZCBvbiB0aGUgcG90ZW50aWFsIGltcGFjdCBvbiB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBzZXZlcml0eT86IGZoaXIuRmhpckNvZGU8RGV0ZWN0ZWRpc3N1ZVNldmVyaXR5Q29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IERldGVjdGVkSXNzdWUuc2V2ZXJpdHlcclxuICAgKi9cclxuICBfc2V2ZXJpdHk/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGUgcGF0aWVudCB3aG9zZSByZWNvcmQgdGhlIGRldGVjdGVkIGlzc3VlIGlzIGFzc29jaWF0ZWQgd2l0aC5cclxuICAgKi9cclxuICBwYXRpZW50PzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSBvciBkYXRlLXRpbWUgd2hlbiB0aGUgZGV0ZWN0ZWQgaXNzdWUgd2FzIGluaXRpYWxseSBpZGVudGlmaWVkLlxyXG4gICAqL1xyXG4gIGRhdGU/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEZXRlY3RlZElzc3VlLmRhdGVcclxuICAgKi9cclxuICBfZGF0ZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogSW5kaXZpZHVhbCBvciBkZXZpY2UgcmVzcG9uc2libGUgZm9yIHRoZSBpc3N1ZSBiZWluZyByYWlzZWQuICBGb3IgZXhhbXBsZSwgYSBkZWNpc2lvbiBzdXBwb3J0IGFwcGxpY2F0aW9uIG9yIGEgcGhhcm1hY2lzdCBjb25kdWN0aW5nIGEgbWVkaWNhdGlvbiByZXZpZXcuXHJcbiAgICovXHJcbiAgYXV0aG9yPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGVyZSdzIGFuIGltcGxpY2l0IGNvbnN0cmFpbnQgb24gdGhlIG51bWJlciBvZiBpbXBsaWNhdGVkIHJlc291cmNlcyBiYXNlZCBvbiBEZXRlY3RlZElzc3VlLnR5cGU7IGUuZy4gRm9yIGRydWctZHJ1ZywgdGhlcmUgd291bGQgYmUgbW9yZSB0aGFuIG9uZS4gIEZvciB0aW1pbmcsIHRoZXJlIHdvdWxkIHR5cGljYWxseSBvbmx5IGJlIG9uZS5cclxuICAgKi9cclxuICBpbXBsaWNhdGVkPzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFNob3VsZCBmb2N1cyBvbiBpbmZvcm1hdGlvbiBub3QgY292ZXJlZCBlbHNld2hlcmUgYXMgZGlzY3JldGUgZGF0YSAtIG5vIG5lZWQgdG8gZHVwbGljYXRlIHRoZSBuYXJyYXRpdmUuXHJcbiAgICovXHJcbiAgZGV0YWlsPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IERldGVjdGVkSXNzdWUuZGV0YWlsXHJcbiAgICovXHJcbiAgX2RldGFpbD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxpdGVyYXR1cmUsIGtub3dsZWRnZS1iYXNlIG9yIHNpbWlsYXIgcmVmZXJlbmNlIHRoYXQgZGVzY3JpYmVzIHRoZSBwcm9wZW5zaXR5IGZvciB0aGUgZGV0ZWN0ZWQgaXNzdWUgaWRlbnRpZmllZC5cclxuICAgKi9cclxuICByZWZlcmVuY2U/OiBmaGlyLkZoaXJVcml8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRGV0ZWN0ZWRJc3N1ZS5yZWZlcmVuY2VcclxuICAgKi9cclxuICBfcmVmZXJlbmNlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgYW4gYWN0aW9uIHRoYXQgaGFzIGJlZW4gdGFrZW4gb3IgaXMgY29tbWl0dGVkIHRvIHRvIHJlZHVjZSBvciBlbGltaW5hdGUgdGhlIGxpa2VsaWhvb2Qgb2YgdGhlIHJpc2sgaWRlbnRpZmllZCBieSB0aGUgZGV0ZWN0ZWQgaXNzdWUgZnJvbSBtYW5pZmVzdGluZy4gIENhbiBhbHNvIHJlZmxlY3QgYW4gb2JzZXJ2YXRpb24gb2Yga25vd24gbWl0aWdhdGluZyBmYWN0b3JzIHRoYXQgbWF5IHJlZHVjZS9lbGltaW5hdGUgdGhlIG5lZWQgZm9yIGFueSBhY3Rpb24uXHJcbiAgICovXHJcbiAgbWl0aWdhdGlvbj86IGZoaXIuRGV0ZWN0ZWRJc3N1ZU1pdGlnYXRpb25BcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogSW5kaWNhdGVzIGFuIGFjdHVhbCBvciBwb3RlbnRpYWwgY2xpbmljYWwgaXNzdWUgd2l0aCBvciBiZXR3ZWVuIG9uZSBvciBtb3JlIGFjdGl2ZSBvciBwcm9wb3NlZCBjbGluaWNhbCBhY3Rpb25zIGZvciBhIHBhdGllbnQ7IGUuZy4gRHJ1Zy1kcnVnIGludGVyYWN0aW9uLCBJbmVmZmVjdGl2ZSB0cmVhdG1lbnQgZnJlcXVlbmN5LCBQcm9jZWR1cmUtY29uZGl0aW9uIGNvbmZsaWN0LCBldGMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRGV0ZWN0ZWRJc3N1ZSBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRGV0ZWN0ZWRJc3N1ZSc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJEZXRlY3RlZElzc3VlXCI7XHJcbiAgLyoqXHJcbiAgICogQnVzaW5lc3MgaWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIGRldGVjdGVkIGlzc3VlIHJlY29yZC5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgdGhlIGNvZGVzIGNhbmNlbGxlZCBhbmQgZW50ZXJlZC1pbi1lcnJvciB0aGF0IG1hcmsgdGhlIGlzc3VlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1czogZmhpci5GaGlyQ29kZTxPYnNlcnZhdGlvblN0YXR1c0NvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgdGhlIGdlbmVyYWwgdHlwZSBvZiBpc3N1ZSBpZGVudGlmaWVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjYXRlZ29yeT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIGRlZ3JlZSBvZiBpbXBvcnRhbmNlIGFzc29jaWF0ZWQgd2l0aCB0aGUgaWRlbnRpZmllZCBpc3N1ZSBiYXNlZCBvbiB0aGUgcG90ZW50aWFsIGltcGFjdCBvbiB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgc2V2ZXJpdHk/OiBmaGlyLkZoaXJDb2RlPERldGVjdGVkaXNzdWVTZXZlcml0eUNvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHRoZSBwYXRpZW50IHdob3NlIHJlY29yZCB0aGUgZGV0ZWN0ZWQgaXNzdWUgaXMgYXNzb2NpYXRlZCB3aXRoLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwYXRpZW50PzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIG9yIGRhdGUtdGltZSB3aGVuIHRoZSBkZXRlY3RlZCBpc3N1ZSB3YXMgaW5pdGlhbGx5IGlkZW50aWZpZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGRhdGU/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW5kaXZpZHVhbCBvciBkZXZpY2UgcmVzcG9uc2libGUgZm9yIHRoZSBpc3N1ZSBiZWluZyByYWlzZWQuICBGb3IgZXhhbXBsZSwgYSBkZWNpc2lvbiBzdXBwb3J0IGFwcGxpY2F0aW9uIG9yIGEgcGhhcm1hY2lzdCBjb25kdWN0aW5nIGEgbWVkaWNhdGlvbiByZXZpZXcuXHJcbiAgICovXHJcbiAgcHVibGljIGF1dGhvcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGVyZSdzIGFuIGltcGxpY2l0IGNvbnN0cmFpbnQgb24gdGhlIG51bWJlciBvZiBpbXBsaWNhdGVkIHJlc291cmNlcyBiYXNlZCBvbiBEZXRlY3RlZElzc3VlLnR5cGU7IGUuZy4gRm9yIGRydWctZHJ1ZywgdGhlcmUgd291bGQgYmUgbW9yZSB0aGFuIG9uZS4gIEZvciB0aW1pbmcsIHRoZXJlIHdvdWxkIHR5cGljYWxseSBvbmx5IGJlIG9uZS5cclxuICAgKi9cclxuICBwdWJsaWMgaW1wbGljYXRlZDogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBTaG91bGQgZm9jdXMgb24gaW5mb3JtYXRpb24gbm90IGNvdmVyZWQgZWxzZXdoZXJlIGFzIGRpc2NyZXRlIGRhdGEgLSBubyBuZWVkIHRvIGR1cGxpY2F0ZSB0aGUgbmFycmF0aXZlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkZXRhaWw/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsaXRlcmF0dXJlLCBrbm93bGVkZ2UtYmFzZSBvciBzaW1pbGFyIHJlZmVyZW5jZSB0aGF0IGRlc2NyaWJlcyB0aGUgcHJvcGVuc2l0eSBmb3IgdGhlIGRldGVjdGVkIGlzc3VlIGlkZW50aWZpZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHJlZmVyZW5jZT86IGZoaXIuRmhpclVyaXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGFuIGFjdGlvbiB0aGF0IGhhcyBiZWVuIHRha2VuIG9yIGlzIGNvbW1pdHRlZCB0byB0byByZWR1Y2Ugb3IgZWxpbWluYXRlIHRoZSBsaWtlbGlob29kIG9mIHRoZSByaXNrIGlkZW50aWZpZWQgYnkgdGhlIGRldGVjdGVkIGlzc3VlIGZyb20gbWFuaWZlc3RpbmcuICBDYW4gYWxzbyByZWZsZWN0IGFuIG9ic2VydmF0aW9uIG9mIGtub3duIG1pdGlnYXRpbmcgZmFjdG9ycyB0aGF0IG1heSByZWR1Y2UvZWxpbWluYXRlIHRoZSBuZWVkIGZvciBhbnkgYWN0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBtaXRpZ2F0aW9uOiBmaGlyLkRldGVjdGVkSXNzdWVNaXRpZ2F0aW9uW107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgRGV0ZWN0ZWRJc3N1ZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPERldGVjdGVkSXNzdWVBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnRGV0ZWN0ZWRJc3N1ZSc7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gbmV3IGZoaXIuSWRlbnRpZmllcihzb3VyY2UuaWRlbnRpZmllcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8T2JzZXJ2YXRpb25TdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdHVzfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMpIHsgdGhpcy5zdGF0dXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8T2JzZXJ2YXRpb25TdGF0dXNDb2RlVHlwZT4oc291cmNlLl9zdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NhdGVnb3J5J10pIHsgdGhpcy5jYXRlZ29yeSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuY2F0ZWdvcnkpOyB9XHJcbiAgICBpZiAoc291cmNlWydzZXZlcml0eSddKSB7IHRoaXMuc2V2ZXJpdHkgPSBuZXcgZmhpci5GaGlyQ29kZTxEZXRlY3RlZGlzc3VlU2V2ZXJpdHlDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc2V2ZXJpdHl9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3NldmVyaXR5J10pIHtcclxuICAgICAgaWYgKHRoaXMuc2V2ZXJpdHkpIHsgdGhpcy5zZXZlcml0eS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zZXZlcml0eSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnNldmVyaXR5ID0gbmV3IGZoaXIuRmhpckNvZGU8RGV0ZWN0ZWRpc3N1ZVNldmVyaXR5Q29kZVR5cGU+KHNvdXJjZS5fc2V2ZXJpdHkgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3BhdGllbnQnXSkgeyB0aGlzLnBhdGllbnQgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnBhdGllbnQpOyB9XHJcbiAgICBpZiAoc291cmNlWydkYXRlJ10pIHsgdGhpcy5kYXRlID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLmRhdGV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2RhdGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5kYXRlKSB7IHRoaXMuZGF0ZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kYXRlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZGF0ZSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX2RhdGUgYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnYXV0aG9yJ10pIHsgdGhpcy5hdXRob3IgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmF1dGhvcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2ltcGxpY2F0ZWQnXSkgeyB0aGlzLmltcGxpY2F0ZWQgPSBzb3VyY2UuaW1wbGljYXRlZC5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmltcGxpY2F0ZWQgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGV0YWlsJ10pIHsgdGhpcy5kZXRhaWwgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmRldGFpbH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGV0YWlsJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZGV0YWlsKSB7IHRoaXMuZGV0YWlsLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2RldGFpbCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRldGFpbCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9kZXRhaWwgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3JlZmVyZW5jZSddKSB7IHRoaXMucmVmZXJlbmNlID0gbmV3IGZoaXIuRmhpclVyaSh7dmFsdWU6IHNvdXJjZS5yZWZlcmVuY2V9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3JlZmVyZW5jZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnJlZmVyZW5jZSkgeyB0aGlzLnJlZmVyZW5jZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9yZWZlcmVuY2UhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5yZWZlcmVuY2UgPSBuZXcgZmhpci5GaGlyVXJpKHNvdXJjZS5fcmVmZXJlbmNlIGFzIFBhcnRpYWw8Zmhpci5GaGlyVXJpQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydtaXRpZ2F0aW9uJ10pIHsgdGhpcy5taXRpZ2F0aW9uID0gc291cmNlLm1pdGlnYXRpb24ubWFwKCh4KSA9PiBuZXcgZmhpci5EZXRlY3RlZElzc3VlTWl0aWdhdGlvbih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLm1pdGlnYXRpb24gPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0RldGVjdGVkSXNzdWUnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJQUygncmVzb3VyY2VUeXBlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdpZGVudGlmaWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTVignc3RhdHVzJyxleHAsJ09ic2VydmF0aW9uU3RhdHVzJyxPYnNlcnZhdGlvblN0YXR1c1ZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdjYXRlZ29yeScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPU1YoJ3NldmVyaXR5JyxleHAsJ0RldGVjdGVkaXNzdWVTZXZlcml0eScsRGV0ZWN0ZWRpc3N1ZVNldmVyaXR5VnNWYWxpZGF0aW9uLCdyJykpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3BhdGllbnQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2RhdGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2F1dGhvcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaW1wbGljYXRlZCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZGV0YWlsJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdyZWZlcmVuY2UnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ21pdGlnYXRpb24nLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19