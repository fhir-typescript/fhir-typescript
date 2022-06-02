// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ImmunizationEvaluation
import * as fhir from '../fhir.js';
// @ts-ignore
import { ImmunizationEvaluationStatusCodes } from '../fhirValueSets/ImmunizationEvaluationStatusCodes.js';
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
     * Required-bound Value Set for status (ImmunizationEvaluation.status)
     */
    static get statusRequiredCodes() {
        return ImmunizationEvaluationStatusCodes;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'ImmunizationEvaluation';
        }
        if (!this['resourceType']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType fhir: ImmunizationEvaluation.resourceType:"ImmunizationEvaluation"', expression: [expression] });
        }
        if (this["identifier"]) {
            this.identifier.forEach((x, i) => { issues.push(...x.doModelValidation(expression + `.identifier[${i}]`)); });
        }
        if (!this['status']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status fhir: ImmunizationEvaluation.status:code', expression: [expression] });
        }
        if (this['status'] && (!Object.values(ImmunizationEvaluationStatusCodes).includes(this.status.value))) {
            issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'status (ImmunizationEvaluation.status) of type code is missing code for Required binding to: ImmunizationEvaluationStatus', expression: [expression] });
        }
        if (this["status"]) {
            issues.push(...this.status.doModelValidation(expression + '.status'));
        }
        if (!this['patient']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property patient fhir: ImmunizationEvaluation.patient:Reference', expression: [expression] });
        }
        if (this["patient"]) {
            issues.push(...this.patient.doModelValidation(expression + '.patient'));
        }
        if (this["date"]) {
            issues.push(...this.date.doModelValidation(expression + '.date'));
        }
        if (this["authority"]) {
            issues.push(...this.authority.doModelValidation(expression + '.authority'));
        }
        if (!this['targetDisease']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property targetDisease fhir: ImmunizationEvaluation.targetDisease:CodeableConcept', expression: [expression] });
        }
        if (this["targetDisease"]) {
            issues.push(...this.targetDisease.doModelValidation(expression + '.targetDisease'));
        }
        if (!this['immunizationEvent']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property immunizationEvent fhir: ImmunizationEvaluation.immunizationEvent:Reference', expression: [expression] });
        }
        if (this["immunizationEvent"]) {
            issues.push(...this.immunizationEvent.doModelValidation(expression + '.immunizationEvent'));
        }
        if (!this['doseStatus']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property doseStatus fhir: ImmunizationEvaluation.doseStatus:CodeableConcept', expression: [expression] });
        }
        if (this["doseStatus"]) {
            issues.push(...this.doseStatus.doModelValidation(expression + '.doseStatus'));
        }
        if (this["doseStatusReason"]) {
            this.doseStatusReason.forEach((x, i) => { issues.push(...x.doModelValidation(expression + `.doseStatusReason[${i}]`)); });
        }
        if (this["description"]) {
            issues.push(...this.description.doModelValidation(expression + '.description'));
        }
        if (this["series"]) {
            issues.push(...this.series.doModelValidation(expression + '.series'));
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1tdW5pemF0aW9uRXZhbHVhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvSW1tdW5pemF0aW9uRXZhbHVhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFFeEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxpQ0FBaUMsRUFBeUMsTUFBTSx1REFBdUQsQ0FBQztBQTJHako7O0dBRUc7QUFDSCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUFxRTdEOztPQUVHO0lBQ0gsWUFBWSxTQUE2QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNuRyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsd0JBQXdCLENBQUM7UUFDN0MsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2hHO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUF1QyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQ25IO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNy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QUFVLHdCQUF3QixDQUFDO0FBcURoRjs7R0FFRztBQUN1Qiw4Q0FBdUIsR0FBUSxJQUFJLENBQUM7QUFLOUQ7O0dBRUc7QUFDdUIsK0NBQXdCLEdBQVEsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBJbW11bml6YXRpb25FdmFsdWF0aW9uXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJbW11bml6YXRpb25FdmFsdWF0aW9uU3RhdHVzQ29kaW5ncywgSW1tdW5pemF0aW9uRXZhbHVhdGlvblN0YXR1c0NvZGluZ1R5cGUsfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ltbXVuaXphdGlvbkV2YWx1YXRpb25TdGF0dXNDb2RpbmdzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJbW11bml6YXRpb25FdmFsdWF0aW9uU3RhdHVzQ29kZXMsICBJbW11bml6YXRpb25FdmFsdWF0aW9uU3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ltbXVuaXphdGlvbkV2YWx1YXRpb25TdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgSW1tdW5pemF0aW9uRXZhbHVhdGlvblRhcmdldERpc2Vhc2VDb2RpbmdzLCBJbW11bml6YXRpb25FdmFsdWF0aW9uVGFyZ2V0RGlzZWFzZUNvZGluZ1R5cGUsfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ltbXVuaXphdGlvbkV2YWx1YXRpb25UYXJnZXREaXNlYXNlQ29kaW5ncy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgSW1tdW5pemF0aW9uRXZhbHVhdGlvblRhcmdldERpc2Vhc2VDb2RlcywgIEltbXVuaXphdGlvbkV2YWx1YXRpb25UYXJnZXREaXNlYXNlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ltbXVuaXphdGlvbkV2YWx1YXRpb25UYXJnZXREaXNlYXNlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEltbXVuaXphdGlvbkV2YWx1YXRpb25Eb3NlU3RhdHVzQ29kaW5ncywgSW1tdW5pemF0aW9uRXZhbHVhdGlvbkRvc2VTdGF0dXNDb2RpbmdUeXBlLH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9JbW11bml6YXRpb25FdmFsdWF0aW9uRG9zZVN0YXR1c0NvZGluZ3MuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEltbXVuaXphdGlvbkV2YWx1YXRpb25Eb3NlU3RhdHVzQ29kZXMsICBJbW11bml6YXRpb25FdmFsdWF0aW9uRG9zZVN0YXR1c0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9JbW11bml6YXRpb25FdmFsdWF0aW9uRG9zZVN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJbW11bml6YXRpb25FdmFsdWF0aW9uRG9zZVN0YXR1c1JlYXNvbkNvZGluZ3MsIEltbXVuaXphdGlvbkV2YWx1YXRpb25Eb3NlU3RhdHVzUmVhc29uQ29kaW5nVHlwZSx9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvSW1tdW5pemF0aW9uRXZhbHVhdGlvbkRvc2VTdGF0dXNSZWFzb25Db2RpbmdzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJbW11bml6YXRpb25FdmFsdWF0aW9uRG9zZVN0YXR1c1JlYXNvbkNvZGVzLCAgSW1tdW5pemF0aW9uRXZhbHVhdGlvbkRvc2VTdGF0dXNSZWFzb25Db2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvSW1tdW5pemF0aW9uRXZhbHVhdGlvbkRvc2VTdGF0dXNSZWFzb25Db2Rlcy5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBJbW11bml6YXRpb25FdmFsdWF0aW9uIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEltbXVuaXphdGlvbkV2YWx1YXRpb25BcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJJbW11bml6YXRpb25FdmFsdWF0aW9uXCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgdW5pcXVlIGlkZW50aWZpZXIgYXNzaWduZWQgdG8gdGhpcyBpbW11bml6YXRpb24gZXZhbHVhdGlvbiByZWNvcmQuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgZXZhbHVhdGlvbiBvZiB0aGUgdmFjY2luYXRpb24gYWRtaW5pc3RyYXRpb24gZXZlbnQuXHJcbiAgICovXHJcbiAgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPEltbXVuaXphdGlvbkV2YWx1YXRpb25TdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogSW1tdW5pemF0aW9uRXZhbHVhdGlvbi5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgaW5kaXZpZHVhbCBmb3Igd2hvbSB0aGUgZXZhbHVhdGlvbiBpcyBiZWluZyBkb25lLlxyXG4gICAqL1xyXG4gIHBhdGllbnQ6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHRoZSBldmFsdWF0aW9uIG9mIHRoZSB2YWNjaW5lIGFkbWluaXN0cmF0aW9uIGV2ZW50IHdhcyBwZXJmb3JtZWQuXHJcbiAgICovXHJcbiAgZGF0ZT86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEltbXVuaXphdGlvbkV2YWx1YXRpb24uZGF0ZVxyXG4gICAqL1xyXG4gIF9kYXRlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIGF1dGhvcml0eSB3aG8gcHVibGlzaGVkIHRoZSBwcm90b2NvbCAoZS5nLiBBQ0lQKS5cclxuICAgKi9cclxuICBhdXRob3JpdHk/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2YWNjaW5lIHByZXZlbnRhYmxlIGRpc2Vhc2UgdGhlIGRvc2UgaXMgYmVpbmcgZXZhbHVhdGVkIGFnYWluc3QuXHJcbiAgICovXHJcbiAgdGFyZ2V0RGlzZWFzZTogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIHZhY2NpbmUgYWRtaW5pc3RyYXRpb24gZXZlbnQgYmVpbmcgZXZhbHVhdGVkLlxyXG4gICAqL1xyXG4gIGltbXVuaXphdGlvbkV2ZW50OiBmaGlyLlJlZmVyZW5jZUFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIGRvc2UgaXMgdmFsaWQgb3Igbm90IHZhbGlkIHdpdGggcmVzcGVjdCB0byB0aGUgcHVibGlzaGVkIHJlY29tbWVuZGF0aW9ucy5cclxuICAgKi9cclxuICBkb3NlU3RhdHVzOiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBQcm92aWRlcyBhbiBleHBsYW5hdGlvbiBhcyB0byB3aHkgdGhlIHZhY2NpbmUgYWRtaW5pc3RyYXRpb24gZXZlbnQgaXMgdmFsaWQgb3Igbm90IHJlbGF0aXZlIHRvIHRoZSBwdWJsaXNoZWQgcmVjb21tZW5kYXRpb25zLlxyXG4gICAqL1xyXG4gIGRvc2VTdGF0dXNSZWFzb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXZhbHVhdGlvbi5cclxuICAgKi9cclxuICBkZXNjcmlwdGlvbj86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBJbW11bml6YXRpb25FdmFsdWF0aW9uLmRlc2NyaXB0aW9uXHJcbiAgICovXHJcbiAgX2Rlc2NyaXB0aW9uPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBPbmUgcG9zc2libGUgcGF0aCB0byBhY2hpZXZlIHByZXN1bWVkIGltbXVuaXR5IGFnYWluc3QgYSBkaXNlYXNlIC0gd2l0aGluIHRoZSBjb250ZXh0IG9mIGFuIGF1dGhvcml0eS5cclxuICAgKi9cclxuICBzZXJpZXM/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogSW1tdW5pemF0aW9uRXZhbHVhdGlvbi5zZXJpZXNcclxuICAgKi9cclxuICBfc2VyaWVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgdXNlIG9mIGFuIGludGVnZXIgaXMgcHJlZmVycmVkIGlmIGtub3duLiBBIHN0cmluZyBzaG91bGQgb25seSBiZSB1c2VkIGluIGNhc2VzIHdoZXJlIGFuIGludGVnZXIgaXMgbm90IGF2YWlsYWJsZSAoc3VjaCBhcyB3aGVuIGRvY3VtZW50aW5nIGEgcmVjdXJyaW5nIGJvb3N0ZXIgZG9zZSkuXHJcbiAgICovXHJcbiAgZG9zZU51bWJlcj86IGZoaXIuRmhpclBvc2l0aXZlSW50fGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHVzZSBvZiBhbiBpbnRlZ2VyIGlzIHByZWZlcnJlZCBpZiBrbm93bi4gQSBzdHJpbmcgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiBjYXNlcyB3aGVyZSBhbiBpbnRlZ2VyIGlzIG5vdCBhdmFpbGFibGUgKHN1Y2ggYXMgd2hlbiBkb2N1bWVudGluZyBhIHJlY3VycmluZyBib29zdGVyIGRvc2UpLlxyXG4gICAqL1xyXG4gIGRvc2VOdW1iZXJQb3NpdGl2ZUludD86IGZoaXIuRmhpclBvc2l0aXZlSW50fG51bWJlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHVzZSBvZiBhbiBpbnRlZ2VyIGlzIHByZWZlcnJlZCBpZiBrbm93bi4gQSBzdHJpbmcgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiBjYXNlcyB3aGVyZSBhbiBpbnRlZ2VyIGlzIG5vdCBhdmFpbGFibGUgKHN1Y2ggYXMgd2hlbiBkb2N1bWVudGluZyBhIHJlY3VycmluZyBib29zdGVyIGRvc2UpLlxyXG4gICAqL1xyXG4gIGRvc2VOdW1iZXJTdHJpbmc/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdXNlIG9mIGFuIGludGVnZXIgaXMgcHJlZmVycmVkIGlmIGtub3duLiBBIHN0cmluZyBzaG91bGQgb25seSBiZSB1c2VkIGluIGNhc2VzIHdoZXJlIGFuIGludGVnZXIgaXMgbm90IGF2YWlsYWJsZSAoc3VjaCBhcyB3aGVuIGRvY3VtZW50aW5nIGEgcmVjdXJyaW5nIGJvb3N0ZXIgZG9zZSkuXHJcbiAgICovXHJcbiAgc2VyaWVzRG9zZXM/OiBmaGlyLkZoaXJQb3NpdGl2ZUludHxmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB1c2Ugb2YgYW4gaW50ZWdlciBpcyBwcmVmZXJyZWQgaWYga25vd24uIEEgc3RyaW5nIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gY2FzZXMgd2hlcmUgYW4gaW50ZWdlciBpcyBub3QgYXZhaWxhYmxlIChzdWNoIGFzIHdoZW4gZG9jdW1lbnRpbmcgYSByZWN1cnJpbmcgYm9vc3RlciBkb3NlKS5cclxuICAgKi9cclxuICBzZXJpZXNEb3Nlc1Bvc2l0aXZlSW50PzogZmhpci5GaGlyUG9zaXRpdmVJbnR8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdXNlIG9mIGFuIGludGVnZXIgaXMgcHJlZmVycmVkIGlmIGtub3duLiBBIHN0cmluZyBzaG91bGQgb25seSBiZSB1c2VkIGluIGNhc2VzIHdoZXJlIGFuIGludGVnZXIgaXMgbm90IGF2YWlsYWJsZSAoc3VjaCBhcyB3aGVuIGRvY3VtZW50aW5nIGEgcmVjdXJyaW5nIGJvb3N0ZXIgZG9zZSkuXHJcbiAgICovXHJcbiAgc2VyaWVzRG9zZXNTdHJpbmc/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlc2NyaWJlcyBhIGNvbXBhcmlzb24gb2YgYW4gaW1tdW5pemF0aW9uIGV2ZW50IGFnYWluc3QgcHVibGlzaGVkIHJlY29tbWVuZGF0aW9ucyB0byBkZXRlcm1pbmUgaWYgdGhlIGFkbWluaXN0cmF0aW9uIGlzIFwidmFsaWRcIiBpbiByZWxhdGlvbiB0byB0aG9zZSAgcmVjb21tZW5kYXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEltbXVuaXphdGlvbkV2YWx1YXRpb24gZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0ltbXVuaXphdGlvbkV2YWx1YXRpb24nO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiSW1tdW5pemF0aW9uRXZhbHVhdGlvblwiO1xyXG4gIC8qKlxyXG4gICAqIEEgdW5pcXVlIGlkZW50aWZpZXIgYXNzaWduZWQgdG8gdGhpcyBpbW11bml6YXRpb24gZXZhbHVhdGlvbiByZWNvcmQuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI6IGZoaXIuSWRlbnRpZmllcltdO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIGV2YWx1YXRpb24gb2YgdGhlIHZhY2NpbmF0aW9uIGFkbWluaXN0cmF0aW9uIGV2ZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM6IGZoaXIuRmhpckNvZGU8SW1tdW5pemF0aW9uRXZhbHVhdGlvblN0YXR1c0NvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpbmRpdmlkdWFsIGZvciB3aG9tIHRoZSBldmFsdWF0aW9uIGlzIGJlaW5nIGRvbmUuXHJcbiAgICovXHJcbiAgcHVibGljIHBhdGllbnQ6IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgdGhlIGV2YWx1YXRpb24gb2YgdGhlIHZhY2NpbmUgYWRtaW5pc3RyYXRpb24gZXZlbnQgd2FzIHBlcmZvcm1lZC5cclxuICAgKi9cclxuICBwdWJsaWMgZGF0ZT86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIGF1dGhvcml0eSB3aG8gcHVibGlzaGVkIHRoZSBwcm90b2NvbCAoZS5nLiBBQ0lQKS5cclxuICAgKi9cclxuICBwdWJsaWMgYXV0aG9yaXR5PzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2YWNjaW5lIHByZXZlbnRhYmxlIGRpc2Vhc2UgdGhlIGRvc2UgaXMgYmVpbmcgZXZhbHVhdGVkIGFnYWluc3QuXHJcbiAgICovXHJcbiAgcHVibGljIHRhcmdldERpc2Vhc2U6IGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIHZhY2NpbmUgYWRtaW5pc3RyYXRpb24gZXZlbnQgYmVpbmcgZXZhbHVhdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpbW11bml6YXRpb25FdmVudDogZmhpci5SZWZlcmVuY2V8bnVsbDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIGRvc2UgaXMgdmFsaWQgb3Igbm90IHZhbGlkIHdpdGggcmVzcGVjdCB0byB0aGUgcHVibGlzaGVkIHJlY29tbWVuZGF0aW9ucy5cclxuICAgKi9cclxuICBwdWJsaWMgZG9zZVN0YXR1czogZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbDtcclxuICAvKipcclxuICAgKiBQcm92aWRlcyBhbiBleHBsYW5hdGlvbiBhcyB0byB3aHkgdGhlIHZhY2NpbmUgYWRtaW5pc3RyYXRpb24gZXZlbnQgaXMgdmFsaWQgb3Igbm90IHJlbGF0aXZlIHRvIHRoZSBwdWJsaXNoZWQgcmVjb21tZW5kYXRpb25zLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkb3NlU3RhdHVzUmVhc29uOiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV2YWx1YXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIGRlc2NyaXB0aW9uPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBPbmUgcG9zc2libGUgcGF0aCB0byBhY2hpZXZlIHByZXN1bWVkIGltbXVuaXR5IGFnYWluc3QgYSBkaXNlYXNlIC0gd2l0aGluIHRoZSBjb250ZXh0IG9mIGFuIGF1dGhvcml0eS5cclxuICAgKi9cclxuICBwdWJsaWMgc2VyaWVzPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdXNlIG9mIGFuIGludGVnZXIgaXMgcHJlZmVycmVkIGlmIGtub3duLiBBIHN0cmluZyBzaG91bGQgb25seSBiZSB1c2VkIGluIGNhc2VzIHdoZXJlIGFuIGludGVnZXIgaXMgbm90IGF2YWlsYWJsZSAoc3VjaCBhcyB3aGVuIGRvY3VtZW50aW5nIGEgcmVjdXJyaW5nIGJvb3N0ZXIgZG9zZSkuXHJcbiAgICovXHJcbiAgcHVibGljIGRvc2VOdW1iZXI/OiAoZmhpci5GaGlyUG9zaXRpdmVJbnR8Zmhpci5GaGlyU3RyaW5nKXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgZmxhZyB0byBwcm9wZXJseSBzZXJpYWxpemUgY2hvaWNlLXR5cGUgZWxlbWVudCBJbW11bml6YXRpb25FdmFsdWF0aW9uLmRvc2VOdW1iZXJbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfZG9zZU51bWJlcklzQ2hvaWNlOnRydWUgPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB1c2Ugb2YgYW4gaW50ZWdlciBpcyBwcmVmZXJyZWQgaWYga25vd24uIEEgc3RyaW5nIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gY2FzZXMgd2hlcmUgYW4gaW50ZWdlciBpcyBub3QgYXZhaWxhYmxlIChzdWNoIGFzIHdoZW4gZG9jdW1lbnRpbmcgYSByZWN1cnJpbmcgYm9vc3RlciBkb3NlKS5cclxuICAgKi9cclxuICBwdWJsaWMgc2VyaWVzRG9zZXM/OiAoZmhpci5GaGlyUG9zaXRpdmVJbnR8Zmhpci5GaGlyU3RyaW5nKXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgZmxhZyB0byBwcm9wZXJseSBzZXJpYWxpemUgY2hvaWNlLXR5cGUgZWxlbWVudCBJbW11bml6YXRpb25FdmFsdWF0aW9uLnNlcmllc0Rvc2VzW3hdXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBfZnRzX3Nlcmllc0Rvc2VzSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgSW1tdW5pemF0aW9uRXZhbHVhdGlvbiAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEltbXVuaXphdGlvbkV2YWx1YXRpb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnSW1tdW5pemF0aW9uRXZhbHVhdGlvbic7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gc291cmNlLmlkZW50aWZpZXIubWFwKCh4KSA9PiBuZXcgZmhpci5JZGVudGlmaWVyKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaWRlbnRpZmllciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydzdGF0dXMnXSkgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPEltbXVuaXphdGlvbkV2YWx1YXRpb25TdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdHVzfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMpIHsgdGhpcy5zdGF0dXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8SW1tdW5pemF0aW9uRXZhbHVhdGlvblN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3N0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncGF0aWVudCddKSB7IHRoaXMucGF0aWVudCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucGF0aWVudCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnBhdGllbnQgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydkYXRlJ10pIHsgdGhpcy5kYXRlID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLmRhdGV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2RhdGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5kYXRlKSB7IHRoaXMuZGF0ZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kYXRlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZGF0ZSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX2RhdGUgYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnYXV0aG9yaXR5J10pIHsgdGhpcy5hdXRob3JpdHkgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmF1dGhvcml0eSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3RhcmdldERpc2Vhc2UnXSkgeyB0aGlzLnRhcmdldERpc2Vhc2UgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnRhcmdldERpc2Vhc2UpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50YXJnZXREaXNlYXNlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnaW1tdW5pemF0aW9uRXZlbnQnXSkgeyB0aGlzLmltbXVuaXphdGlvbkV2ZW50ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5pbW11bml6YXRpb25FdmVudCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmltbXVuaXphdGlvbkV2ZW50ID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZG9zZVN0YXR1cyddKSB7IHRoaXMuZG9zZVN0YXR1cyA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuZG9zZVN0YXR1cyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmRvc2VTdGF0dXMgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydkb3NlU3RhdHVzUmVhc29uJ10pIHsgdGhpcy5kb3NlU3RhdHVzUmVhc29uID0gc291cmNlLmRvc2VTdGF0dXNSZWFzb24ubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5kb3NlU3RhdHVzUmVhc29uID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2Rlc2NyaXB0aW9uJ10pIHsgdGhpcy5kZXNjcmlwdGlvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZGVzY3JpcHRpb259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Rlc2NyaXB0aW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb24pIHsgdGhpcy5kZXNjcmlwdGlvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kZXNjcmlwdGlvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRlc2NyaXB0aW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Rlc2NyaXB0aW9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydzZXJpZXMnXSkgeyB0aGlzLnNlcmllcyA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2Uuc2VyaWVzfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zZXJpZXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5zZXJpZXMpIHsgdGhpcy5zZXJpZXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc2VyaWVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc2VyaWVzID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX3NlcmllcyBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZG9zZU51bWJlciddKSB7IHRoaXMuZG9zZU51bWJlciA9IHNvdXJjZS5kb3NlTnVtYmVyOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ2Rvc2VOdW1iZXJQb3NpdGl2ZUludCddKSB7IHRoaXMuZG9zZU51bWJlciA9IG5ldyBmaGlyLkZoaXJQb3NpdGl2ZUludCh7dmFsdWU6IHNvdXJjZS5kb3NlTnVtYmVyUG9zaXRpdmVJbnR9KTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydkb3NlTnVtYmVyU3RyaW5nJ10pIHsgdGhpcy5kb3NlTnVtYmVyID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5kb3NlTnVtYmVyU3RyaW5nfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3Nlcmllc0Rvc2VzJ10pIHsgdGhpcy5zZXJpZXNEb3NlcyA9IHNvdXJjZS5zZXJpZXNEb3NlczsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydzZXJpZXNEb3Nlc1Bvc2l0aXZlSW50J10pIHsgdGhpcy5zZXJpZXNEb3NlcyA9IG5ldyBmaGlyLkZoaXJQb3NpdGl2ZUludCh7dmFsdWU6IHNvdXJjZS5zZXJpZXNEb3Nlc1Bvc2l0aXZlSW50fSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnc2VyaWVzRG9zZXNTdHJpbmcnXSkgeyB0aGlzLnNlcmllc0Rvc2VzID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5zZXJpZXNEb3Nlc1N0cmluZ30pOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJlcXVpcmVkLWJvdW5kIFZhbHVlIFNldCBmb3Igc3RhdHVzIChJbW11bml6YXRpb25FdmFsdWF0aW9uLnN0YXR1cylcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGdldCBzdGF0dXNSZXF1aXJlZENvZGVzKCkge1xyXG4gICAgcmV0dXJuIEltbXVuaXphdGlvbkV2YWx1YXRpb25TdGF0dXNDb2RlcztcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb246c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24pO1xyXG4gICAgaWYgKGV4cHJlc3Npb24gPT09ICcnKSB7IGV4cHJlc3Npb24gPSAnSW1tdW5pemF0aW9uRXZhbHVhdGlvbicgfVxyXG4gICAgaWYgKCF0aGlzWydyZXNvdXJjZVR5cGUnXSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAncmVxdWlyZWQnLCBkaWFnbm9zdGljczogJ01pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgcmVzb3VyY2VUeXBlIGZoaXI6IEltbXVuaXphdGlvbkV2YWx1YXRpb24ucmVzb3VyY2VUeXBlOlwiSW1tdW5pemF0aW9uRXZhbHVhdGlvblwiJywgZXhwcmVzc2lvbjogW2V4cHJlc3Npb25dIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXNbXCJpZGVudGlmaWVyXCJdKSB7IHRoaXMuaWRlbnRpZmllci5mb3JFYWNoKCh4LGkpID0+IHsgaXNzdWVzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uK2AuaWRlbnRpZmllclske2l9XWApKTsgfSkgfVxyXG4gICAgaWYgKCF0aGlzWydzdGF0dXMnXSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAncmVxdWlyZWQnLCBkaWFnbm9zdGljczogJ01pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgc3RhdHVzIGZoaXI6IEltbXVuaXphdGlvbkV2YWx1YXRpb24uc3RhdHVzOmNvZGUnLCBleHByZXNzaW9uOiBbZXhwcmVzc2lvbl0gfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1snc3RhdHVzJ10gJiYgKCFPYmplY3QudmFsdWVzKEltbXVuaXphdGlvbkV2YWx1YXRpb25TdGF0dXNDb2RlcykuaW5jbHVkZXModGhpcy5zdGF0dXMudmFsdWUgYXMgYW55KSkpIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ2NvZGUtaW52YWxpZCcsIGRpYWdub3N0aWNzOiAnc3RhdHVzIChJbW11bml6YXRpb25FdmFsdWF0aW9uLnN0YXR1cykgb2YgdHlwZSBjb2RlIGlzIG1pc3NpbmcgY29kZSBmb3IgUmVxdWlyZWQgYmluZGluZyB0bzogSW1tdW5pemF0aW9uRXZhbHVhdGlvblN0YXR1cycsIGV4cHJlc3Npb246IFtleHByZXNzaW9uXSB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzW1wic3RhdHVzXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuc3RhdHVzLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy5zdGF0dXMnKSk7IH1cclxuICAgIGlmICghdGhpc1sncGF0aWVudCddKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdyZXF1aXJlZCcsIGRpYWdub3N0aWNzOiAnTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSBwYXRpZW50IGZoaXI6IEltbXVuaXphdGlvbkV2YWx1YXRpb24ucGF0aWVudDpSZWZlcmVuY2UnLCBleHByZXNzaW9uOiBbZXhwcmVzc2lvbl0gfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1tcInBhdGllbnRcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5wYXRpZW50LmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy5wYXRpZW50JykpOyB9XHJcbiAgICBpZiAodGhpc1tcImRhdGVcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5kYXRlLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy5kYXRlJykpOyB9XHJcbiAgICBpZiAodGhpc1tcImF1dGhvcml0eVwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLmF1dGhvcml0eS5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKycuYXV0aG9yaXR5JykpOyB9XHJcbiAgICBpZiAoIXRoaXNbJ3RhcmdldERpc2Vhc2UnXSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAncmVxdWlyZWQnLCBkaWFnbm9zdGljczogJ01pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgdGFyZ2V0RGlzZWFzZSBmaGlyOiBJbW11bml6YXRpb25FdmFsdWF0aW9uLnRhcmdldERpc2Vhc2U6Q29kZWFibGVDb25jZXB0JywgZXhwcmVzc2lvbjogW2V4cHJlc3Npb25dIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXNbXCJ0YXJnZXREaXNlYXNlXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMudGFyZ2V0RGlzZWFzZS5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKycudGFyZ2V0RGlzZWFzZScpKTsgfVxyXG4gICAgaWYgKCF0aGlzWydpbW11bml6YXRpb25FdmVudCddKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdyZXF1aXJlZCcsIGRpYWdub3N0aWNzOiAnTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSBpbW11bml6YXRpb25FdmVudCBmaGlyOiBJbW11bml6YXRpb25FdmFsdWF0aW9uLmltbXVuaXphdGlvbkV2ZW50OlJlZmVyZW5jZScsIGV4cHJlc3Npb246IFtleHByZXNzaW9uXSB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzW1wiaW1tdW5pemF0aW9uRXZlbnRcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5pbW11bml6YXRpb25FdmVudC5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKycuaW1tdW5pemF0aW9uRXZlbnQnKSk7IH1cclxuICAgIGlmICghdGhpc1snZG9zZVN0YXR1cyddKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdyZXF1aXJlZCcsIGRpYWdub3N0aWNzOiAnTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSBkb3NlU3RhdHVzIGZoaXI6IEltbXVuaXphdGlvbkV2YWx1YXRpb24uZG9zZVN0YXR1czpDb2RlYWJsZUNvbmNlcHQnLCBleHByZXNzaW9uOiBbZXhwcmVzc2lvbl0gfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1tcImRvc2VTdGF0dXNcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5kb3NlU3RhdHVzLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy5kb3NlU3RhdHVzJykpOyB9XHJcbiAgICBpZiAodGhpc1tcImRvc2VTdGF0dXNSZWFzb25cIl0pIHsgdGhpcy5kb3NlU3RhdHVzUmVhc29uLmZvckVhY2goKHgsaSkgPT4geyBpc3N1ZXMucHVzaCguLi54LmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rYC5kb3NlU3RhdHVzUmVhc29uWyR7aX1dYCkpOyB9KSB9XHJcbiAgICBpZiAodGhpc1tcImRlc2NyaXB0aW9uXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuZGVzY3JpcHRpb24uZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbisnLmRlc2NyaXB0aW9uJykpOyB9XHJcbiAgICBpZiAodGhpc1tcInNlcmllc1wiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLnNlcmllcy5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKycuc2VyaWVzJykpOyB9XHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=