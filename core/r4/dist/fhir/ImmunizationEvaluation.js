// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ImmunizationEvaluation
import * as fhir from '../fhir.js';
// @ts-ignore
import { ImmunizationEvaluationStatusVsValidation } from '../fhirValueSets/ImmunizationEvaluationStatusVsValidation.js';
/**
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 */
export class ImmunizationEvaluation extends fhir.DomainResource {
    /**
     * Default constructor for ImmunizationEvaluation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'ImmunizationEvaluation';
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
        if (source['patient']) {
            this.patient = new fhir.Reference(source.patient);
        }
        else {
            this.patient = null;
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
        if (source['authority']) {
            this.authority = new fhir.Reference(source.authority);
        }
        if (source['targetDisease']) {
            this.targetDisease = new fhir.CodeableConcept(source.targetDisease);
        }
        else {
            this.targetDisease = null;
        }
        if (source['immunizationEvent']) {
            this.immunizationEvent = new fhir.Reference(source.immunizationEvent);
        }
        else {
            this.immunizationEvent = null;
        }
        if (source['doseStatus']) {
            this.doseStatus = new fhir.CodeableConcept(source.doseStatus);
        }
        else {
            this.doseStatus = null;
        }
        if (source['doseStatusReason']) {
            this.doseStatusReason = source.doseStatusReason.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.doseStatusReason = [];
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['_description']) {
            if (this.description) {
                this.description.addExtendedProperties(source._description);
            }
            else {
                this.description = new fhir.FhirString(source._description);
            }
        }
        if (source['series']) {
            this.series = new fhir.FhirString({ value: source.series });
        }
        if (source['_series']) {
            if (this.series) {
                this.series.addExtendedProperties(source._series);
            }
            else {
                this.series = new fhir.FhirString(source._series);
            }
        }
        if (source['doseNumber']) {
            this.doseNumber = source.doseNumber;
        }
        else if (source['doseNumberPositiveInt']) {
            this.doseNumber = new fhir.FhirPositiveInt({ value: source.doseNumberPositiveInt });
        }
        else if (source['doseNumberString']) {
            this.doseNumber = new fhir.FhirString({ value: source.doseNumberString });
        }
        if (source['seriesDoses']) {
            this.seriesDoses = source.seriesDoses;
        }
        else if (source['seriesDosesPositiveInt']) {
            this.seriesDoses = new fhir.FhirPositiveInt({ value: source.seriesDosesPositiveInt });
        }
        else if (source['seriesDosesString']) {
            this.seriesDoses = new fhir.FhirString({ value: source.seriesDosesString });
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'ImmunizationEvaluation';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vRSV('status', exp, 'ImmunizationEvaluationStatus', ImmunizationEvaluationStatusVsValidation, 'r');
        this.vRS('patient', exp);
        this.vOS('date', exp);
        this.vOS('authority', exp);
        this.vRS('targetDisease', exp);
        this.vRS('immunizationEvent', exp);
        this.vRS('doseStatus', exp);
        this.vOA('doseStatusReason', exp);
        this.vOS('description', exp);
        this.vOS('series', exp);
        this.vOS('doseNumber', exp);
        this.vOS('seriesDoses', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
ImmunizationEvaluation._fts_dataType = 'ImmunizationEvaluation';
/**
 * Internal flag to properly serialize choice-type element ImmunizationEvaluation.doseNumber[x]
 */
ImmunizationEvaluation._fts_doseNumberIsChoice = true;
/**
 * Internal flag to properly serialize choice-type element ImmunizationEvaluation.seriesDoses[x]
 */
ImmunizationEvaluation._fts_seriesDosesIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1tdW5pemF0aW9uRXZhbHVhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvSW1tdW5pemF0aW9uRXZhbHVhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFFeEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBMkd4SDs7R0FFRztBQUNILE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxJQUFJLENBQUMsY0FBYztJQXFFN0Q7O09BRUc7SUFDSCxZQUFZLFNBQTZDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ25HLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyx3QkFBd0IsQ0FBQztRQUM3QyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDaEc7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQXVDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDbkg7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzVCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JC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bUIsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBeElEOztHQUVHO0FBQzZCLG9DQUFhLEdBQVUsd0JBQXdCLENBQUM7QUFxRGhGOztHQUVHO0FBQ3VCLDhDQUF1QixHQUFRLElBQUksQ0FBQztBQUs5RDs7R0FFRztBQUN1QiwrQ0FBd0IsR0FBUSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IEltbXVuaXphdGlvbkV2YWx1YXRpb25cclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEltbXVuaXphdGlvbkV2YWx1YXRpb25TdGF0dXNDb2RlcywgIEltbXVuaXphdGlvbkV2YWx1YXRpb25TdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvSW1tdW5pemF0aW9uRXZhbHVhdGlvblN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJbW11bml6YXRpb25FdmFsdWF0aW9uU3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9JbW11bml6YXRpb25FdmFsdWF0aW9uU3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJbW11bml6YXRpb25FdmFsdWF0aW9uVGFyZ2V0RGlzZWFzZUNvZGVzLCAgSW1tdW5pemF0aW9uRXZhbHVhdGlvblRhcmdldERpc2Vhc2VDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvSW1tdW5pemF0aW9uRXZhbHVhdGlvblRhcmdldERpc2Vhc2VDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgSW1tdW5pemF0aW9uRXZhbHVhdGlvblRhcmdldERpc2Vhc2VWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ltbXVuaXphdGlvbkV2YWx1YXRpb25UYXJnZXREaXNlYXNlVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJbW11bml6YXRpb25FdmFsdWF0aW9uRG9zZVN0YXR1c0NvZGVzLCAgSW1tdW5pemF0aW9uRXZhbHVhdGlvbkRvc2VTdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvSW1tdW5pemF0aW9uRXZhbHVhdGlvbkRvc2VTdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgSW1tdW5pemF0aW9uRXZhbHVhdGlvbkRvc2VTdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ltbXVuaXphdGlvbkV2YWx1YXRpb25Eb3NlU3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJbW11bml6YXRpb25FdmFsdWF0aW9uRG9zZVN0YXR1c1JlYXNvbkNvZGVzLCAgSW1tdW5pemF0aW9uRXZhbHVhdGlvbkRvc2VTdGF0dXNSZWFzb25Db2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvSW1tdW5pemF0aW9uRXZhbHVhdGlvbkRvc2VTdGF0dXNSZWFzb25Db2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgSW1tdW5pemF0aW9uRXZhbHVhdGlvbkRvc2VTdGF0dXNSZWFzb25Wc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ltbXVuaXphdGlvbkV2YWx1YXRpb25Eb3NlU3RhdHVzUmVhc29uVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEltbXVuaXphdGlvbkV2YWx1YXRpb24gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1tdW5pemF0aW9uRXZhbHVhdGlvbkFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkltbXVuaXphdGlvbkV2YWx1YXRpb25cInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSB1bmlxdWUgaWRlbnRpZmllciBhc3NpZ25lZCB0byB0aGlzIGltbXVuaXphdGlvbiBldmFsdWF0aW9uIHJlY29yZC5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBldmFsdWF0aW9uIG9mIHRoZSB2YWNjaW5hdGlvbiBhZG1pbmlzdHJhdGlvbiBldmVudC5cclxuICAgKi9cclxuICBzdGF0dXM6IGZoaXIuRmhpckNvZGU8SW1tdW5pemF0aW9uRXZhbHVhdGlvblN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBJbW11bml6YXRpb25FdmFsdWF0aW9uLnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpbmRpdmlkdWFsIGZvciB3aG9tIHRoZSBldmFsdWF0aW9uIGlzIGJlaW5nIGRvbmUuXHJcbiAgICovXHJcbiAgcGF0aWVudDogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgdGhlIGV2YWx1YXRpb24gb2YgdGhlIHZhY2NpbmUgYWRtaW5pc3RyYXRpb24gZXZlbnQgd2FzIHBlcmZvcm1lZC5cclxuICAgKi9cclxuICBkYXRlPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogSW1tdW5pemF0aW9uRXZhbHVhdGlvbi5kYXRlXHJcbiAgICovXHJcbiAgX2RhdGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGUgYXV0aG9yaXR5IHdobyBwdWJsaXNoZWQgdGhlIHByb3RvY29sIChlLmcuIEFDSVApLlxyXG4gICAqL1xyXG4gIGF1dGhvcml0eT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHZhY2NpbmUgcHJldmVudGFibGUgZGlzZWFzZSB0aGUgZG9zZSBpcyBiZWluZyBldmFsdWF0ZWQgYWdhaW5zdC5cclxuICAgKi9cclxuICB0YXJnZXREaXNlYXNlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgdmFjY2luZSBhZG1pbmlzdHJhdGlvbiBldmVudCBiZWluZyBldmFsdWF0ZWQuXHJcbiAgICovXHJcbiAgaW1tdW5pemF0aW9uRXZlbnQ6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBpZiB0aGUgZG9zZSBpcyB2YWxpZCBvciBub3QgdmFsaWQgd2l0aCByZXNwZWN0IHRvIHRoZSBwdWJsaXNoZWQgcmVjb21tZW5kYXRpb25zLlxyXG4gICAqL1xyXG4gIGRvc2VTdGF0dXM6IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFByb3ZpZGVzIGFuIGV4cGxhbmF0aW9uIGFzIHRvIHdoeSB0aGUgdmFjY2luZSBhZG1pbmlzdHJhdGlvbiBldmVudCBpcyB2YWxpZCBvciBub3QgcmVsYXRpdmUgdG8gdGhlIHB1Ymxpc2hlZCByZWNvbW1lbmRhdGlvbnMuXHJcbiAgICovXHJcbiAgZG9zZVN0YXR1c1JlYXNvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBldmFsdWF0aW9uLlxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEltbXVuaXphdGlvbkV2YWx1YXRpb24uZGVzY3JpcHRpb25cclxuICAgKi9cclxuICBfZGVzY3JpcHRpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIE9uZSBwb3NzaWJsZSBwYXRoIHRvIGFjaGlldmUgcHJlc3VtZWQgaW1tdW5pdHkgYWdhaW5zdCBhIGRpc2Vhc2UgLSB3aXRoaW4gdGhlIGNvbnRleHQgb2YgYW4gYXV0aG9yaXR5LlxyXG4gICAqL1xyXG4gIHNlcmllcz86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBJbW11bml6YXRpb25FdmFsdWF0aW9uLnNlcmllc1xyXG4gICAqL1xyXG4gIF9zZXJpZXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB1c2Ugb2YgYW4gaW50ZWdlciBpcyBwcmVmZXJyZWQgaWYga25vd24uIEEgc3RyaW5nIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gY2FzZXMgd2hlcmUgYW4gaW50ZWdlciBpcyBub3QgYXZhaWxhYmxlIChzdWNoIGFzIHdoZW4gZG9jdW1lbnRpbmcgYSByZWN1cnJpbmcgYm9vc3RlciBkb3NlKS5cclxuICAgKi9cclxuICBkb3NlTnVtYmVyPzogZmhpci5GaGlyUG9zaXRpdmVJbnR8Zmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdXNlIG9mIGFuIGludGVnZXIgaXMgcHJlZmVycmVkIGlmIGtub3duLiBBIHN0cmluZyBzaG91bGQgb25seSBiZSB1c2VkIGluIGNhc2VzIHdoZXJlIGFuIGludGVnZXIgaXMgbm90IGF2YWlsYWJsZSAoc3VjaCBhcyB3aGVuIGRvY3VtZW50aW5nIGEgcmVjdXJyaW5nIGJvb3N0ZXIgZG9zZSkuXHJcbiAgICovXHJcbiAgZG9zZU51bWJlclBvc2l0aXZlSW50PzogZmhpci5GaGlyUG9zaXRpdmVJbnR8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdXNlIG9mIGFuIGludGVnZXIgaXMgcHJlZmVycmVkIGlmIGtub3duLiBBIHN0cmluZyBzaG91bGQgb25seSBiZSB1c2VkIGluIGNhc2VzIHdoZXJlIGFuIGludGVnZXIgaXMgbm90IGF2YWlsYWJsZSAoc3VjaCBhcyB3aGVuIGRvY3VtZW50aW5nIGEgcmVjdXJyaW5nIGJvb3N0ZXIgZG9zZSkuXHJcbiAgICovXHJcbiAgZG9zZU51bWJlclN0cmluZz86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB1c2Ugb2YgYW4gaW50ZWdlciBpcyBwcmVmZXJyZWQgaWYga25vd24uIEEgc3RyaW5nIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gY2FzZXMgd2hlcmUgYW4gaW50ZWdlciBpcyBub3QgYXZhaWxhYmxlIChzdWNoIGFzIHdoZW4gZG9jdW1lbnRpbmcgYSByZWN1cnJpbmcgYm9vc3RlciBkb3NlKS5cclxuICAgKi9cclxuICBzZXJpZXNEb3Nlcz86IGZoaXIuRmhpclBvc2l0aXZlSW50fGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHVzZSBvZiBhbiBpbnRlZ2VyIGlzIHByZWZlcnJlZCBpZiBrbm93bi4gQSBzdHJpbmcgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiBjYXNlcyB3aGVyZSBhbiBpbnRlZ2VyIGlzIG5vdCBhdmFpbGFibGUgKHN1Y2ggYXMgd2hlbiBkb2N1bWVudGluZyBhIHJlY3VycmluZyBib29zdGVyIGRvc2UpLlxyXG4gICAqL1xyXG4gIHNlcmllc0Rvc2VzUG9zaXRpdmVJbnQ/OiBmaGlyLkZoaXJQb3NpdGl2ZUludHxudW1iZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB1c2Ugb2YgYW4gaW50ZWdlciBpcyBwcmVmZXJyZWQgaWYga25vd24uIEEgc3RyaW5nIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gY2FzZXMgd2hlcmUgYW4gaW50ZWdlciBpcyBub3QgYXZhaWxhYmxlIChzdWNoIGFzIHdoZW4gZG9jdW1lbnRpbmcgYSByZWN1cnJpbmcgYm9vc3RlciBkb3NlKS5cclxuICAgKi9cclxuICBzZXJpZXNEb3Nlc1N0cmluZz86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogRGVzY3JpYmVzIGEgY29tcGFyaXNvbiBvZiBhbiBpbW11bml6YXRpb24gZXZlbnQgYWdhaW5zdCBwdWJsaXNoZWQgcmVjb21tZW5kYXRpb25zIHRvIGRldGVybWluZSBpZiB0aGUgYWRtaW5pc3RyYXRpb24gaXMgXCJ2YWxpZFwiIGluIHJlbGF0aW9uIHRvIHRob3NlICByZWNvbW1lbmRhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW1tdW5pemF0aW9uRXZhbHVhdGlvbiBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnSW1tdW5pemF0aW9uRXZhbHVhdGlvbic7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJJbW11bml6YXRpb25FdmFsdWF0aW9uXCI7XHJcbiAgLyoqXHJcbiAgICogQSB1bmlxdWUgaWRlbnRpZmllciBhc3NpZ25lZCB0byB0aGlzIGltbXVuaXphdGlvbiBldmFsdWF0aW9uIHJlY29yZC5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgZXZhbHVhdGlvbiBvZiB0aGUgdmFjY2luYXRpb24gYWRtaW5pc3RyYXRpb24gZXZlbnQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1czogZmhpci5GaGlyQ29kZTxJbW11bml6YXRpb25FdmFsdWF0aW9uU3RhdHVzQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGluZGl2aWR1YWwgZm9yIHdob20gdGhlIGV2YWx1YXRpb24gaXMgYmVpbmcgZG9uZS5cclxuICAgKi9cclxuICBwdWJsaWMgcGF0aWVudDogZmhpci5SZWZlcmVuY2V8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB0aGUgZXZhbHVhdGlvbiBvZiB0aGUgdmFjY2luZSBhZG1pbmlzdHJhdGlvbiBldmVudCB3YXMgcGVyZm9ybWVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkYXRlPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGUgYXV0aG9yaXR5IHdobyBwdWJsaXNoZWQgdGhlIHByb3RvY29sIChlLmcuIEFDSVApLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhdXRob3JpdHk/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHZhY2NpbmUgcHJldmVudGFibGUgZGlzZWFzZSB0aGUgZG9zZSBpcyBiZWluZyBldmFsdWF0ZWQgYWdhaW5zdC5cclxuICAgKi9cclxuICBwdWJsaWMgdGFyZ2V0RGlzZWFzZTogZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgdmFjY2luZSBhZG1pbmlzdHJhdGlvbiBldmVudCBiZWluZyBldmFsdWF0ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGltbXVuaXphdGlvbkV2ZW50OiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBpZiB0aGUgZG9zZSBpcyB2YWxpZCBvciBub3QgdmFsaWQgd2l0aCByZXNwZWN0IHRvIHRoZSBwdWJsaXNoZWQgcmVjb21tZW5kYXRpb25zLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkb3NlU3RhdHVzOiBmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFByb3ZpZGVzIGFuIGV4cGxhbmF0aW9uIGFzIHRvIHdoeSB0aGUgdmFjY2luZSBhZG1pbmlzdHJhdGlvbiBldmVudCBpcyB2YWxpZCBvciBub3QgcmVsYXRpdmUgdG8gdGhlIHB1Ymxpc2hlZCByZWNvbW1lbmRhdGlvbnMuXHJcbiAgICovXHJcbiAgcHVibGljIGRvc2VTdGF0dXNSZWFzb246IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXZhbHVhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgZGVzY3JpcHRpb24/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE9uZSBwb3NzaWJsZSBwYXRoIHRvIGFjaGlldmUgcHJlc3VtZWQgaW1tdW5pdHkgYWdhaW5zdCBhIGRpc2Vhc2UgLSB3aXRoaW4gdGhlIGNvbnRleHQgb2YgYW4gYXV0aG9yaXR5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXJpZXM/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB1c2Ugb2YgYW4gaW50ZWdlciBpcyBwcmVmZXJyZWQgaWYga25vd24uIEEgc3RyaW5nIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gY2FzZXMgd2hlcmUgYW4gaW50ZWdlciBpcyBub3QgYXZhaWxhYmxlIChzdWNoIGFzIHdoZW4gZG9jdW1lbnRpbmcgYSByZWN1cnJpbmcgYm9vc3RlciBkb3NlKS5cclxuICAgKi9cclxuICBwdWJsaWMgZG9zZU51bWJlcj86IChmaGlyLkZoaXJQb3NpdGl2ZUludHxmaGlyLkZoaXJTdHJpbmcpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IEltbXVuaXphdGlvbkV2YWx1YXRpb24uZG9zZU51bWJlclt4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c19kb3NlTnVtYmVySXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogVGhlIHVzZSBvZiBhbiBpbnRlZ2VyIGlzIHByZWZlcnJlZCBpZiBrbm93bi4gQSBzdHJpbmcgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiBjYXNlcyB3aGVyZSBhbiBpbnRlZ2VyIGlzIG5vdCBhdmFpbGFibGUgKHN1Y2ggYXMgd2hlbiBkb2N1bWVudGluZyBhIHJlY3VycmluZyBib29zdGVyIGRvc2UpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXJpZXNEb3Nlcz86IChmaGlyLkZoaXJQb3NpdGl2ZUludHxmaGlyLkZoaXJTdHJpbmcpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IEltbXVuaXphdGlvbkV2YWx1YXRpb24uc2VyaWVzRG9zZXNbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfc2VyaWVzRG9zZXNJc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBJbW11bml6YXRpb25FdmFsdWF0aW9uIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8SW1tdW5pemF0aW9uRXZhbHVhdGlvbkFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdJbW11bml6YXRpb25FdmFsdWF0aW9uJztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8SW1tdW5pemF0aW9uRXZhbHVhdGlvblN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxJbW11bml6YXRpb25FdmFsdWF0aW9uU3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwYXRpZW50J10pIHsgdGhpcy5wYXRpZW50ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5wYXRpZW50KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucGF0aWVudCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ2RhdGUnXSkgeyB0aGlzLmRhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UuZGF0ZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGF0ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGUpIHsgdGhpcy5kYXRlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2RhdGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kYXRlID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fZGF0ZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydhdXRob3JpdHknXSkgeyB0aGlzLmF1dGhvcml0eSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuYXV0aG9yaXR5KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsndGFyZ2V0RGlzZWFzZSddKSB7IHRoaXMudGFyZ2V0RGlzZWFzZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UudGFyZ2V0RGlzZWFzZSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnRhcmdldERpc2Vhc2UgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydpbW11bml6YXRpb25FdmVudCddKSB7IHRoaXMuaW1tdW5pemF0aW9uRXZlbnQgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmltbXVuaXphdGlvbkV2ZW50KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaW1tdW5pemF0aW9uRXZlbnQgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydkb3NlU3RhdHVzJ10pIHsgdGhpcy5kb3NlU3RhdHVzID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5kb3NlU3RhdHVzKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZG9zZVN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ2Rvc2VTdGF0dXNSZWFzb24nXSkgeyB0aGlzLmRvc2VTdGF0dXNSZWFzb24gPSBzb3VyY2UuZG9zZVN0YXR1c1JlYXNvbi5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmRvc2VTdGF0dXNSZWFzb24gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGVzY3JpcHRpb24nXSkgeyB0aGlzLmRlc2NyaXB0aW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5kZXNjcmlwdGlvbn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGVzY3JpcHRpb24nXSkge1xyXG4gICAgICBpZiAodGhpcy5kZXNjcmlwdGlvbikgeyB0aGlzLmRlc2NyaXB0aW9uLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2Rlc2NyaXB0aW9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZGVzY3JpcHRpb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fZGVzY3JpcHRpb24gYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3NlcmllcyddKSB7IHRoaXMuc2VyaWVzID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5zZXJpZXN9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3NlcmllcyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnNlcmllcykgeyB0aGlzLnNlcmllcy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zZXJpZXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zZXJpZXMgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fc2VyaWVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydkb3NlTnVtYmVyJ10pIHsgdGhpcy5kb3NlTnVtYmVyID0gc291cmNlLmRvc2VOdW1iZXI7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnZG9zZU51bWJlclBvc2l0aXZlSW50J10pIHsgdGhpcy5kb3NlTnVtYmVyID0gbmV3IGZoaXIuRmhpclBvc2l0aXZlSW50KHt2YWx1ZTogc291cmNlLmRvc2VOdW1iZXJQb3NpdGl2ZUludH0pOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ2Rvc2VOdW1iZXJTdHJpbmcnXSkgeyB0aGlzLmRvc2VOdW1iZXIgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmRvc2VOdW1iZXJTdHJpbmd9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc2VyaWVzRG9zZXMnXSkgeyB0aGlzLnNlcmllc0Rvc2VzID0gc291cmNlLnNlcmllc0Rvc2VzOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3Nlcmllc0Rvc2VzUG9zaXRpdmVJbnQnXSkgeyB0aGlzLnNlcmllc0Rvc2VzID0gbmV3IGZoaXIuRmhpclBvc2l0aXZlSW50KHt2YWx1ZTogc291cmNlLnNlcmllc0Rvc2VzUG9zaXRpdmVJbnR9KTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydzZXJpZXNEb3Nlc1N0cmluZyddKSB7IHRoaXMuc2VyaWVzRG9zZXMgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnNlcmllc0Rvc2VzU3RyaW5nfSk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdJbW11bml6YXRpb25FdmFsdWF0aW9uJyB9XHJcbiAgICB0aGlzLnZSUygncmVzb3VyY2VUeXBlJyxleHApXHJcbiAgICB0aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKVxyXG4gICAgdGhpcy52UlNWKCdzdGF0dXMnLGV4cCwnSW1tdW5pemF0aW9uRXZhbHVhdGlvblN0YXR1cycsSW1tdW5pemF0aW9uRXZhbHVhdGlvblN0YXR1c1ZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZSUygncGF0aWVudCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2RhdGUnLGV4cClcclxuICAgIHRoaXMudk9TKCdhdXRob3JpdHknLGV4cClcclxuICAgIHRoaXMudlJTKCd0YXJnZXREaXNlYXNlJyxleHApXHJcbiAgICB0aGlzLnZSUygnaW1tdW5pemF0aW9uRXZlbnQnLGV4cClcclxuICAgIHRoaXMudlJTKCdkb3NlU3RhdHVzJyxleHApXHJcbiAgICB0aGlzLnZPQSgnZG9zZVN0YXR1c1JlYXNvbicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2Rlc2NyaXB0aW9uJyxleHApXHJcbiAgICB0aGlzLnZPUygnc2VyaWVzJyxleHApXHJcbiAgICB0aGlzLnZPUygnZG9zZU51bWJlcicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3Nlcmllc0Rvc2VzJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=