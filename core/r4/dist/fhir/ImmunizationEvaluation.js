// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ImmunizationEvaluation
import * as fhir from '../fhir.js';
// @ts-ignore
import { ImmunizationEvaluationStatusCodings, } from '../fhirValueSets/ImmunizationEvaluationStatusCodings.js';
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
            this.status = source.status;
        }
        else {
            this.status = null;
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
        if (source['series']) {
            this.series = new fhir.FhirString({ value: source.series });
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
    static statusRequiredCoding() {
        return ImmunizationEvaluationStatusCodings;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        let issues = super.doModelValidation();
        if (!this['resourceType']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"ImmunizationEvaluation" fhir: ImmunizationEvaluation.resourceType:"ImmunizationEvaluation"', });
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (!this['status']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status:ImmunizationEvaluationStatusCodeType fhir: ImmunizationEvaluation.status:code', });
        }
        if (!this['patient']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property patient:fhir.Reference fhir: ImmunizationEvaluation.patient:Reference', });
        }
        if (this["patient"]) {
            issues.push(...this.patient.doModelValidation());
        }
        if (this["date"]) {
            issues.push(...this.date.doModelValidation());
        }
        if (this["authority"]) {
            issues.push(...this.authority.doModelValidation());
        }
        if (!this['targetDisease']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property targetDisease:fhir.CodeableConcept fhir: ImmunizationEvaluation.targetDisease:CodeableConcept', });
        }
        if (this["targetDisease"]) {
            issues.push(...this.targetDisease.doModelValidation());
        }
        if (!this['immunizationEvent']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property immunizationEvent:fhir.Reference fhir: ImmunizationEvaluation.immunizationEvent:Reference', });
        }
        if (this["immunizationEvent"]) {
            issues.push(...this.immunizationEvent.doModelValidation());
        }
        if (!this['doseStatus']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property doseStatus:fhir.CodeableConcept fhir: ImmunizationEvaluation.doseStatus:CodeableConcept', });
        }
        if (this["doseStatus"]) {
            issues.push(...this.doseStatus.doModelValidation());
        }
        if (this["doseStatusReason"]) {
            this.doseStatusReason.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["description"]) {
            issues.push(...this.description.doModelValidation());
        }
        if (this["series"]) {
            issues.push(...this.series.doModelValidation());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1tdW5pemF0aW9uRXZhbHVhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvSW1tdW5pemF0aW9uRXZhbHVhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFFeEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFFbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxtQ0FBbUMsR0FBMEMsTUFBTSx5REFBeUQsQ0FBQztBQTZGdEo7O0dBRUc7QUFDSCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUFxRTdEOztPQUVHO0lBQ0gsWUFBWSxTQUE2QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNuRyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsd0JBQXdCLENBQUM7UUFDN0MsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2hHO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUFFO2FBQ2pEO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0s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SUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBJbW11bml6YXRpb25FdmFsdWF0aW9uXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJbW11bml6YXRpb25FdmFsdWF0aW9uU3RhdHVzQ29kaW5ncywgSW1tdW5pemF0aW9uRXZhbHVhdGlvblN0YXR1c0NvZGluZ1R5cGUsfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ltbXVuaXphdGlvbkV2YWx1YXRpb25TdGF0dXNDb2RpbmdzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJbW11bml6YXRpb25FdmFsdWF0aW9uU3RhdHVzQ29kZXMsICBJbW11bml6YXRpb25FdmFsdWF0aW9uU3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ltbXVuaXphdGlvbkV2YWx1YXRpb25TdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgSW1tdW5pemF0aW9uRXZhbHVhdGlvblRhcmdldERpc2Vhc2VDb2RpbmdzLCBJbW11bml6YXRpb25FdmFsdWF0aW9uVGFyZ2V0RGlzZWFzZUNvZGluZ1R5cGUsfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ltbXVuaXphdGlvbkV2YWx1YXRpb25UYXJnZXREaXNlYXNlQ29kaW5ncy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgSW1tdW5pemF0aW9uRXZhbHVhdGlvblRhcmdldERpc2Vhc2VDb2RlcywgIEltbXVuaXphdGlvbkV2YWx1YXRpb25UYXJnZXREaXNlYXNlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ltbXVuaXphdGlvbkV2YWx1YXRpb25UYXJnZXREaXNlYXNlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEltbXVuaXphdGlvbkV2YWx1YXRpb25Eb3NlU3RhdHVzQ29kaW5ncywgSW1tdW5pemF0aW9uRXZhbHVhdGlvbkRvc2VTdGF0dXNDb2RpbmdUeXBlLH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9JbW11bml6YXRpb25FdmFsdWF0aW9uRG9zZVN0YXR1c0NvZGluZ3MuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEltbXVuaXphdGlvbkV2YWx1YXRpb25Eb3NlU3RhdHVzQ29kZXMsICBJbW11bml6YXRpb25FdmFsdWF0aW9uRG9zZVN0YXR1c0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9JbW11bml6YXRpb25FdmFsdWF0aW9uRG9zZVN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJbW11bml6YXRpb25FdmFsdWF0aW9uRG9zZVN0YXR1c1JlYXNvbkNvZGluZ3MsIEltbXVuaXphdGlvbkV2YWx1YXRpb25Eb3NlU3RhdHVzUmVhc29uQ29kaW5nVHlwZSx9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvSW1tdW5pemF0aW9uRXZhbHVhdGlvbkRvc2VTdGF0dXNSZWFzb25Db2RpbmdzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJbW11bml6YXRpb25FdmFsdWF0aW9uRG9zZVN0YXR1c1JlYXNvbkNvZGVzLCAgSW1tdW5pemF0aW9uRXZhbHVhdGlvbkRvc2VTdGF0dXNSZWFzb25Db2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvSW1tdW5pemF0aW9uRXZhbHVhdGlvbkRvc2VTdGF0dXNSZWFzb25Db2Rlcy5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBJbW11bml6YXRpb25FdmFsdWF0aW9uIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEltbXVuaXphdGlvbkV2YWx1YXRpb25BcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJJbW11bml6YXRpb25FdmFsdWF0aW9uXCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgdW5pcXVlIGlkZW50aWZpZXIgYXNzaWduZWQgdG8gdGhpcyBpbW11bml6YXRpb24gZXZhbHVhdGlvbiByZWNvcmQuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgZXZhbHVhdGlvbiBvZiB0aGUgdmFjY2luYXRpb24gYWRtaW5pc3RyYXRpb24gZXZlbnQuXHJcbiAgICovXHJcbiAgc3RhdHVzOiBJbW11bml6YXRpb25FdmFsdWF0aW9uU3RhdHVzQ29kZVR5cGV8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgaW5kaXZpZHVhbCBmb3Igd2hvbSB0aGUgZXZhbHVhdGlvbiBpcyBiZWluZyBkb25lLlxyXG4gICAqL1xyXG4gIHBhdGllbnQ6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHRoZSBldmFsdWF0aW9uIG9mIHRoZSB2YWNjaW5lIGFkbWluaXN0cmF0aW9uIGV2ZW50IHdhcyBwZXJmb3JtZWQuXHJcbiAgICovXHJcbiAgZGF0ZT86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHRoZSBhdXRob3JpdHkgd2hvIHB1Ymxpc2hlZCB0aGUgcHJvdG9jb2wgKGUuZy4gQUNJUCkuXHJcbiAgICovXHJcbiAgYXV0aG9yaXR5PzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdmFjY2luZSBwcmV2ZW50YWJsZSBkaXNlYXNlIHRoZSBkb3NlIGlzIGJlaW5nIGV2YWx1YXRlZCBhZ2FpbnN0LlxyXG4gICAqL1xyXG4gIHRhcmdldERpc2Vhc2U6IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2YWNjaW5lIGFkbWluaXN0cmF0aW9uIGV2ZW50IGJlaW5nIGV2YWx1YXRlZC5cclxuICAgKi9cclxuICBpbW11bml6YXRpb25FdmVudDogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBkb3NlIGlzIHZhbGlkIG9yIG5vdCB2YWxpZCB3aXRoIHJlc3BlY3QgdG8gdGhlIHB1Ymxpc2hlZCByZWNvbW1lbmRhdGlvbnMuXHJcbiAgICovXHJcbiAgZG9zZVN0YXR1czogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogUHJvdmlkZXMgYW4gZXhwbGFuYXRpb24gYXMgdG8gd2h5IHRoZSB2YWNjaW5lIGFkbWluaXN0cmF0aW9uIGV2ZW50IGlzIHZhbGlkIG9yIG5vdCByZWxhdGl2ZSB0byB0aGUgcHVibGlzaGVkIHJlY29tbWVuZGF0aW9ucy5cclxuICAgKi9cclxuICBkb3NlU3RhdHVzUmVhc29uPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV2YWx1YXRpb24uXHJcbiAgICovXHJcbiAgZGVzY3JpcHRpb24/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBPbmUgcG9zc2libGUgcGF0aCB0byBhY2hpZXZlIHByZXN1bWVkIGltbXVuaXR5IGFnYWluc3QgYSBkaXNlYXNlIC0gd2l0aGluIHRoZSBjb250ZXh0IG9mIGFuIGF1dGhvcml0eS5cclxuICAgKi9cclxuICBzZXJpZXM/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdXNlIG9mIGFuIGludGVnZXIgaXMgcHJlZmVycmVkIGlmIGtub3duLiBBIHN0cmluZyBzaG91bGQgb25seSBiZSB1c2VkIGluIGNhc2VzIHdoZXJlIGFuIGludGVnZXIgaXMgbm90IGF2YWlsYWJsZSAoc3VjaCBhcyB3aGVuIGRvY3VtZW50aW5nIGEgcmVjdXJyaW5nIGJvb3N0ZXIgZG9zZSkuXHJcbiAgICovXHJcbiAgZG9zZU51bWJlcj86IGZoaXIuRmhpclBvc2l0aXZlSW50fGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHVzZSBvZiBhbiBpbnRlZ2VyIGlzIHByZWZlcnJlZCBpZiBrbm93bi4gQSBzdHJpbmcgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiBjYXNlcyB3aGVyZSBhbiBpbnRlZ2VyIGlzIG5vdCBhdmFpbGFibGUgKHN1Y2ggYXMgd2hlbiBkb2N1bWVudGluZyBhIHJlY3VycmluZyBib29zdGVyIGRvc2UpLlxyXG4gICAqL1xyXG4gIGRvc2VOdW1iZXJQb3NpdGl2ZUludD86IGZoaXIuRmhpclBvc2l0aXZlSW50fG51bWJlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHVzZSBvZiBhbiBpbnRlZ2VyIGlzIHByZWZlcnJlZCBpZiBrbm93bi4gQSBzdHJpbmcgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiBjYXNlcyB3aGVyZSBhbiBpbnRlZ2VyIGlzIG5vdCBhdmFpbGFibGUgKHN1Y2ggYXMgd2hlbiBkb2N1bWVudGluZyBhIHJlY3VycmluZyBib29zdGVyIGRvc2UpLlxyXG4gICAqL1xyXG4gIGRvc2VOdW1iZXJTdHJpbmc/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdXNlIG9mIGFuIGludGVnZXIgaXMgcHJlZmVycmVkIGlmIGtub3duLiBBIHN0cmluZyBzaG91bGQgb25seSBiZSB1c2VkIGluIGNhc2VzIHdoZXJlIGFuIGludGVnZXIgaXMgbm90IGF2YWlsYWJsZSAoc3VjaCBhcyB3aGVuIGRvY3VtZW50aW5nIGEgcmVjdXJyaW5nIGJvb3N0ZXIgZG9zZSkuXHJcbiAgICovXHJcbiAgc2VyaWVzRG9zZXM/OiBmaGlyLkZoaXJQb3NpdGl2ZUludHxmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB1c2Ugb2YgYW4gaW50ZWdlciBpcyBwcmVmZXJyZWQgaWYga25vd24uIEEgc3RyaW5nIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gY2FzZXMgd2hlcmUgYW4gaW50ZWdlciBpcyBub3QgYXZhaWxhYmxlIChzdWNoIGFzIHdoZW4gZG9jdW1lbnRpbmcgYSByZWN1cnJpbmcgYm9vc3RlciBkb3NlKS5cclxuICAgKi9cclxuICBzZXJpZXNEb3Nlc1Bvc2l0aXZlSW50PzogZmhpci5GaGlyUG9zaXRpdmVJbnR8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdXNlIG9mIGFuIGludGVnZXIgaXMgcHJlZmVycmVkIGlmIGtub3duLiBBIHN0cmluZyBzaG91bGQgb25seSBiZSB1c2VkIGluIGNhc2VzIHdoZXJlIGFuIGludGVnZXIgaXMgbm90IGF2YWlsYWJsZSAoc3VjaCBhcyB3aGVuIGRvY3VtZW50aW5nIGEgcmVjdXJyaW5nIGJvb3N0ZXIgZG9zZSkuXHJcbiAgICovXHJcbiAgc2VyaWVzRG9zZXNTdHJpbmc/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlc2NyaWJlcyBhIGNvbXBhcmlzb24gb2YgYW4gaW1tdW5pemF0aW9uIGV2ZW50IGFnYWluc3QgcHVibGlzaGVkIHJlY29tbWVuZGF0aW9ucyB0byBkZXRlcm1pbmUgaWYgdGhlIGFkbWluaXN0cmF0aW9uIGlzIFwidmFsaWRcIiBpbiByZWxhdGlvbiB0byB0aG9zZSAgcmVjb21tZW5kYXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEltbXVuaXphdGlvbkV2YWx1YXRpb24gZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0ltbXVuaXphdGlvbkV2YWx1YXRpb24nO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiSW1tdW5pemF0aW9uRXZhbHVhdGlvblwiO1xyXG4gIC8qKlxyXG4gICAqIEEgdW5pcXVlIGlkZW50aWZpZXIgYXNzaWduZWQgdG8gdGhpcyBpbW11bml6YXRpb24gZXZhbHVhdGlvbiByZWNvcmQuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBldmFsdWF0aW9uIG9mIHRoZSB2YWNjaW5hdGlvbiBhZG1pbmlzdHJhdGlvbiBldmVudC5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzOiBJbW11bml6YXRpb25FdmFsdWF0aW9uU3RhdHVzQ29kZVR5cGV8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgaW5kaXZpZHVhbCBmb3Igd2hvbSB0aGUgZXZhbHVhdGlvbiBpcyBiZWluZyBkb25lLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwYXRpZW50OiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHRoZSBldmFsdWF0aW9uIG9mIHRoZSB2YWNjaW5lIGFkbWluaXN0cmF0aW9uIGV2ZW50IHdhcyBwZXJmb3JtZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGRhdGU/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHRoZSBhdXRob3JpdHkgd2hvIHB1Ymxpc2hlZCB0aGUgcHJvdG9jb2wgKGUuZy4gQUNJUCkuXHJcbiAgICovXHJcbiAgcHVibGljIGF1dGhvcml0eT86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdmFjY2luZSBwcmV2ZW50YWJsZSBkaXNlYXNlIHRoZSBkb3NlIGlzIGJlaW5nIGV2YWx1YXRlZCBhZ2FpbnN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0YXJnZXREaXNlYXNlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2YWNjaW5lIGFkbWluaXN0cmF0aW9uIGV2ZW50IGJlaW5nIGV2YWx1YXRlZC5cclxuICAgKi9cclxuICBwdWJsaWMgaW1tdW5pemF0aW9uRXZlbnQ6IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBkb3NlIGlzIHZhbGlkIG9yIG5vdCB2YWxpZCB3aXRoIHJlc3BlY3QgdG8gdGhlIHB1Ymxpc2hlZCByZWNvbW1lbmRhdGlvbnMuXHJcbiAgICovXHJcbiAgcHVibGljIGRvc2VTdGF0dXM6IGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGw7XHJcbiAgLyoqXHJcbiAgICogUHJvdmlkZXMgYW4gZXhwbGFuYXRpb24gYXMgdG8gd2h5IHRoZSB2YWNjaW5lIGFkbWluaXN0cmF0aW9uIGV2ZW50IGlzIHZhbGlkIG9yIG5vdCByZWxhdGl2ZSB0byB0aGUgcHVibGlzaGVkIHJlY29tbWVuZGF0aW9ucy5cclxuICAgKi9cclxuICBwdWJsaWMgZG9zZVN0YXR1c1JlYXNvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXZhbHVhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgZGVzY3JpcHRpb24/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE9uZSBwb3NzaWJsZSBwYXRoIHRvIGFjaGlldmUgcHJlc3VtZWQgaW1tdW5pdHkgYWdhaW5zdCBhIGRpc2Vhc2UgLSB3aXRoaW4gdGhlIGNvbnRleHQgb2YgYW4gYXV0aG9yaXR5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXJpZXM/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB1c2Ugb2YgYW4gaW50ZWdlciBpcyBwcmVmZXJyZWQgaWYga25vd24uIEEgc3RyaW5nIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gY2FzZXMgd2hlcmUgYW4gaW50ZWdlciBpcyBub3QgYXZhaWxhYmxlIChzdWNoIGFzIHdoZW4gZG9jdW1lbnRpbmcgYSByZWN1cnJpbmcgYm9vc3RlciBkb3NlKS5cclxuICAgKi9cclxuICBwdWJsaWMgZG9zZU51bWJlcj86IChmaGlyLkZoaXJQb3NpdGl2ZUludHxmaGlyLkZoaXJTdHJpbmcpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IEltbXVuaXphdGlvbkV2YWx1YXRpb24uZG9zZU51bWJlclt4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c19kb3NlTnVtYmVySXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogVGhlIHVzZSBvZiBhbiBpbnRlZ2VyIGlzIHByZWZlcnJlZCBpZiBrbm93bi4gQSBzdHJpbmcgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiBjYXNlcyB3aGVyZSBhbiBpbnRlZ2VyIGlzIG5vdCBhdmFpbGFibGUgKHN1Y2ggYXMgd2hlbiBkb2N1bWVudGluZyBhIHJlY3VycmluZyBib29zdGVyIGRvc2UpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXJpZXNEb3Nlcz86IChmaGlyLkZoaXJQb3NpdGl2ZUludHxmaGlyLkZoaXJTdHJpbmcpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IEltbXVuaXphdGlvbkV2YWx1YXRpb24uc2VyaWVzRG9zZXNbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfc2VyaWVzRG9zZXNJc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBJbW11bml6YXRpb25FdmFsdWF0aW9uIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8SW1tdW5pemF0aW9uRXZhbHVhdGlvbkFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdJbW11bml6YXRpb25FdmFsdWF0aW9uJztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gc291cmNlLnN0YXR1czsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsncGF0aWVudCddKSB7IHRoaXMucGF0aWVudCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucGF0aWVudCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnBhdGllbnQgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydkYXRlJ10pIHsgdGhpcy5kYXRlID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLmRhdGV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYXV0aG9yaXR5J10pIHsgdGhpcy5hdXRob3JpdHkgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmF1dGhvcml0eSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3RhcmdldERpc2Vhc2UnXSkgeyB0aGlzLnRhcmdldERpc2Vhc2UgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnRhcmdldERpc2Vhc2UpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50YXJnZXREaXNlYXNlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnaW1tdW5pemF0aW9uRXZlbnQnXSkgeyB0aGlzLmltbXVuaXphdGlvbkV2ZW50ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5pbW11bml6YXRpb25FdmVudCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmltbXVuaXphdGlvbkV2ZW50ID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZG9zZVN0YXR1cyddKSB7IHRoaXMuZG9zZVN0YXR1cyA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuZG9zZVN0YXR1cyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmRvc2VTdGF0dXMgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydkb3NlU3RhdHVzUmVhc29uJ10pIHsgdGhpcy5kb3NlU3RhdHVzUmVhc29uID0gc291cmNlLmRvc2VTdGF0dXNSZWFzb24ubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5kb3NlU3RhdHVzUmVhc29uID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2Rlc2NyaXB0aW9uJ10pIHsgdGhpcy5kZXNjcmlwdGlvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZGVzY3JpcHRpb259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc2VyaWVzJ10pIHsgdGhpcy5zZXJpZXMgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnNlcmllc30pOyB9XHJcbiAgICBpZiAoc291cmNlWydkb3NlTnVtYmVyJ10pIHsgdGhpcy5kb3NlTnVtYmVyID0gc291cmNlLmRvc2VOdW1iZXI7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnZG9zZU51bWJlclBvc2l0aXZlSW50J10pIHsgdGhpcy5kb3NlTnVtYmVyID0gbmV3IGZoaXIuRmhpclBvc2l0aXZlSW50KHt2YWx1ZTogc291cmNlLmRvc2VOdW1iZXJQb3NpdGl2ZUludH0pOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ2Rvc2VOdW1iZXJTdHJpbmcnXSkgeyB0aGlzLmRvc2VOdW1iZXIgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmRvc2VOdW1iZXJTdHJpbmd9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc2VyaWVzRG9zZXMnXSkgeyB0aGlzLnNlcmllc0Rvc2VzID0gc291cmNlLnNlcmllc0Rvc2VzOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3Nlcmllc0Rvc2VzUG9zaXRpdmVJbnQnXSkgeyB0aGlzLnNlcmllc0Rvc2VzID0gbmV3IGZoaXIuRmhpclBvc2l0aXZlSW50KHt2YWx1ZTogc291cmNlLnNlcmllc0Rvc2VzUG9zaXRpdmVJbnR9KTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydzZXJpZXNEb3Nlc1N0cmluZyddKSB7IHRoaXMuc2VyaWVzRG9zZXMgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnNlcmllc0Rvc2VzU3RyaW5nfSk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmVxdWlyZWQtYm91bmQgVmFsdWUgU2V0IGZvciBzdGF0dXMgKEltbXVuaXphdGlvbkV2YWx1YXRpb24uc3RhdHVzKVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgc3RhdHVzUmVxdWlyZWRDb2RpbmcoKTpJbW11bml6YXRpb25FdmFsdWF0aW9uU3RhdHVzQ29kaW5nVHlwZSB7XHJcbiAgICByZXR1cm4gSW1tdW5pemF0aW9uRXZhbHVhdGlvblN0YXR1c0NvZGluZ3M7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbigpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXNbJ3Jlc291cmNlVHlwZSddKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdyZXF1aXJlZCcsICBkaWFnbm9zdGljczogJ01pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgcmVzb3VyY2VUeXBlOlwiSW1tdW5pemF0aW9uRXZhbHVhdGlvblwiIGZoaXI6IEltbXVuaXphdGlvbkV2YWx1YXRpb24ucmVzb3VyY2VUeXBlOlwiSW1tdW5pemF0aW9uRXZhbHVhdGlvblwiJywgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1tcImlkZW50aWZpZXJcIl0pIHsgdGhpcy5pZGVudGlmaWVyLmZvckVhY2goKHgpID0+IHsgaXNzdWVzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbigpKTsgfSkgfVxyXG4gICAgaWYgKCF0aGlzWydzdGF0dXMnXSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAncmVxdWlyZWQnLCAgZGlhZ25vc3RpY3M6ICdNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5IHN0YXR1czpJbW11bml6YXRpb25FdmFsdWF0aW9uU3RhdHVzQ29kZVR5cGUgZmhpcjogSW1tdW5pemF0aW9uRXZhbHVhdGlvbi5zdGF0dXM6Y29kZScsIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzWydwYXRpZW50J10pIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ3JlcXVpcmVkJywgIGRpYWdub3N0aWNzOiAnTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSBwYXRpZW50OmZoaXIuUmVmZXJlbmNlIGZoaXI6IEltbXVuaXphdGlvbkV2YWx1YXRpb24ucGF0aWVudDpSZWZlcmVuY2UnLCB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzW1wicGF0aWVudFwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLnBhdGllbnQuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICh0aGlzW1wiZGF0ZVwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLmRhdGUuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICh0aGlzW1wiYXV0aG9yaXR5XCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuYXV0aG9yaXR5LmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICBpZiAoIXRoaXNbJ3RhcmdldERpc2Vhc2UnXSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAncmVxdWlyZWQnLCAgZGlhZ25vc3RpY3M6ICdNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5IHRhcmdldERpc2Vhc2U6Zmhpci5Db2RlYWJsZUNvbmNlcHQgZmhpcjogSW1tdW5pemF0aW9uRXZhbHVhdGlvbi50YXJnZXREaXNlYXNlOkNvZGVhYmxlQ29uY2VwdCcsIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXNbXCJ0YXJnZXREaXNlYXNlXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMudGFyZ2V0RGlzZWFzZS5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKCF0aGlzWydpbW11bml6YXRpb25FdmVudCddKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdyZXF1aXJlZCcsICBkaWFnbm9zdGljczogJ01pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgaW1tdW5pemF0aW9uRXZlbnQ6Zmhpci5SZWZlcmVuY2UgZmhpcjogSW1tdW5pemF0aW9uRXZhbHVhdGlvbi5pbW11bml6YXRpb25FdmVudDpSZWZlcmVuY2UnLCB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzW1wiaW1tdW5pemF0aW9uRXZlbnRcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5pbW11bml6YXRpb25FdmVudC5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKCF0aGlzWydkb3NlU3RhdHVzJ10pIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ3JlcXVpcmVkJywgIGRpYWdub3N0aWNzOiAnTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSBkb3NlU3RhdHVzOmZoaXIuQ29kZWFibGVDb25jZXB0IGZoaXI6IEltbXVuaXphdGlvbkV2YWx1YXRpb24uZG9zZVN0YXR1czpDb2RlYWJsZUNvbmNlcHQnLCB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzW1wiZG9zZVN0YXR1c1wiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLmRvc2VTdGF0dXMuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICh0aGlzW1wiZG9zZVN0YXR1c1JlYXNvblwiXSkgeyB0aGlzLmRvc2VTdGF0dXNSZWFzb24uZm9yRWFjaCgoeCkgPT4geyBpc3N1ZXMucHVzaCguLi54LmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9KSB9XHJcbiAgICBpZiAodGhpc1tcImRlc2NyaXB0aW9uXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuZGVzY3JpcHRpb24uZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICh0aGlzW1wic2VyaWVzXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuc2VyaWVzLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=