// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DetectedIssue
import * as fhir from '../fhir.js';
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
            this.action = new fhir.CodeableConcept(source.action, options);
        }
        else {
            this.action = null;
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
        if (source['author']) {
            this.author = new fhir.Reference(source.author, options);
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
        if (source['patient']) {
            this.patient = new fhir.Reference(source.patient, options);
        }
        if (source['category']) {
            this.category = new fhir.CodeableConcept(source.category, options);
        }
        if (source['severity'] !== undefined) {
            this.severity = new fhir.FhirCode({ value: source.severity }, options);
        }
        if (source['_severity']) {
            if (this.severity) {
                this.severity.addExtendedProperties(source._severity);
            }
            else {
                this.severity = new fhir.FhirCode(source._severity, options);
            }
        }
        if (source['implicated']) {
            this.implicated = source.implicated.map((x) => new fhir.Reference(x, options));
        }
        else {
            this.implicated = [];
        }
        if (source['detail'] !== undefined) {
            this.detail = new fhir.FhirString({ value: source.detail }, options);
        }
        if (source['_detail']) {
            if (this.detail) {
                this.detail.addExtendedProperties(source._detail);
            }
            else {
                this.detail = new fhir.FhirString(source._detail, options);
            }
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
        if (source['author']) {
            this.author = new fhir.Reference(source.author, options);
        }
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier, options);
        }
        if (source['reference'] !== undefined) {
            this.reference = new fhir.FhirUri({ value: source.reference }, options);
        }
        if (source['_reference']) {
            if (this.reference) {
                this.reference.addExtendedProperties(source._reference);
            }
            else {
                this.reference = new fhir.FhirUri(source._reference, options);
            }
        }
        if (source['mitigation']) {
            this.mitigation = source.mitigation.map((x) => new fhir.DetectedIssueMitigation(x, options));
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
        iss.push(...this.vOS('patient', exp));
        iss.push(...this.vOS('category', exp));
        iss.push(...this.vOSV('severity', exp, 'DetectedissueSeverity', DetectedissueSeverityVsValidation, 'r'));
        iss.push(...this.vOA('implicated', exp));
        iss.push(...this.vOS('detail', exp));
        iss.push(...this.vOS('date', exp));
        iss.push(...this.vOS('author', exp));
        iss.push(...this.vOS('identifier', exp));
        iss.push(...this.vOS('reference', exp));
        iss.push(...this.vOA('mitigation', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
DetectedIssue._fts_dataType = 'DetectedIssue';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV0ZWN0ZWRJc3N1ZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRGV0ZWN0ZWRJc3N1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBdUIxRzs7R0FFRztBQUNILE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxJQUFJLENBQUMsZUFBZTtJQWlCL0Q7O09BRUc7SUFDSCxZQUFZLFNBQThDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3BHLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDcEY7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzVCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQ3ZHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsQ0FBQzthQUFFO2lCQUM3RDtnQkFBRSxJQUFJLENBQUMsSUFBSSxH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IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMi5jb3JlIHZlcnNpb246IDEuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogRGV0ZWN0ZWRJc3N1ZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRGV0ZWN0ZWRpc3N1ZVNldmVyaXR5Q29kZXMsICBEZXRlY3RlZGlzc3VlU2V2ZXJpdHlDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRGV0ZWN0ZWRpc3N1ZVNldmVyaXR5Q29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IERldGVjdGVkaXNzdWVTZXZlcml0eVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRGV0ZWN0ZWRpc3N1ZVNldmVyaXR5VnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIERldGVjdGVkSXNzdWVNaXRpZ2F0aW9uIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERldGVjdGVkSXNzdWVNaXRpZ2F0aW9uQXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogRGVzY3JpYmVzIHRoZSBhY3Rpb24gdGhhdCB3YXMgdGFrZW4gb3IgdGhlIG9ic2VydmF0aW9uIHRoYXQgd2FzIG1hZGUgdGhhdCByZWR1Y2VzL2VsaW1pbmF0ZXMgdGhlIHJpc2sgYXNzb2NpYXRlZCB3aXRoIHRoZSBpZGVudGlmaWVkIGlzc3VlLlxyXG4gICAqL1xyXG4gIGFjdGlvbjogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdoZW4gdGhlIG1pdGlnYXRpbmcgYWN0aW9uIHdhcyBkb2N1bWVudGVkLlxyXG4gICAqL1xyXG4gIGRhdGU/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEZXRlY3RlZElzc3VlLm1pdGlnYXRpb24uZGF0ZVxyXG4gICAqL1xyXG4gIF9kYXRlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVzIHRoZSBwcmFjdGl0aW9uZXIgd2hvIGRldGVybWluZWQgdGhlIG1pdGlnYXRpb24gYW5kIHRha2VzIHJlc3BvbnNpYmlsaXR5IGZvciB0aGUgbWl0aWdhdGlvbiBzdGVwIG9jY3VycmluZy5cclxuICAgKi9cclxuICBhdXRob3I/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogSW5kaWNhdGVzIGFuIGFjdGlvbiB0aGF0IGhhcyBiZWVuIHRha2VuIG9yIGlzIGNvbW1pdHRlZCB0byB0byByZWR1Y2Ugb3IgZWxpbWluYXRlIHRoZSBsaWtlbGlob29kIG9mIHRoZSByaXNrIGlkZW50aWZpZWQgYnkgdGhlIGRldGVjdGVkIGlzc3VlIGZyb20gbWFuaWZlc3RpbmcuICBDYW4gYWxzbyByZWZsZWN0IGFuIG9ic2VydmF0aW9uIG9mIGtub3duIG1pdGlnYXRpbmcgZmFjdG9ycyB0aGF0IG1heSByZWR1Y2UvZWxpbWluYXRlIHRoZSBuZWVkIGZvciBhbnkgYWN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERldGVjdGVkSXNzdWVNaXRpZ2F0aW9uIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRGV0ZWN0ZWRJc3N1ZU1pdGlnYXRpb24nO1xyXG4gIC8qKlxyXG4gICAqIERlc2NyaWJlcyB0aGUgYWN0aW9uIHRoYXQgd2FzIHRha2VuIG9yIHRoZSBvYnNlcnZhdGlvbiB0aGF0IHdhcyBtYWRlIHRoYXQgcmVkdWNlcy9lbGltaW5hdGVzIHRoZSByaXNrIGFzc29jaWF0ZWQgd2l0aCB0aGUgaWRlbnRpZmllZCBpc3N1ZS5cclxuICAgKi9cclxuICBwdWJsaWMgYWN0aW9uOiBmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGVuIHRoZSBtaXRpZ2F0aW5nIGFjdGlvbiB3YXMgZG9jdW1lbnRlZC5cclxuICAgKi9cclxuICBwdWJsaWMgZGF0ZT86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVzIHRoZSBwcmFjdGl0aW9uZXIgd2hvIGRldGVybWluZWQgdGhlIG1pdGlnYXRpb24gYW5kIHRha2VzIHJlc3BvbnNpYmlsaXR5IGZvciB0aGUgbWl0aWdhdGlvbiBzdGVwIG9jY3VycmluZy5cclxuICAgKi9cclxuICBwdWJsaWMgYXV0aG9yPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIERldGVjdGVkSXNzdWVNaXRpZ2F0aW9uIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8RGV0ZWN0ZWRJc3N1ZU1pdGlnYXRpb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnYWN0aW9uJ10pIHsgdGhpcy5hY3Rpb24gPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmFjdGlvbiwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmFjdGlvbiA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ2RhdGUnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZGF0ZSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5kYXRlfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kYXRlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZGF0ZSkgeyB0aGlzLmRhdGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZGF0ZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9kYXRlIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2F1dGhvciddKSB7IHRoaXMuYXV0aG9yID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5hdXRob3IsIG9wdGlvbnMpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnRGV0ZWN0ZWRJc3N1ZS5taXRpZ2F0aW9uJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygnYWN0aW9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdkYXRlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdhdXRob3InLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIERldGVjdGVkSXNzdWUgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGV0ZWN0ZWRJc3N1ZUFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkRldGVjdGVkSXNzdWVcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hpbGUgdGhlIHN1YmplY3QgY291bGQgYmUgaW5mZXJyZWQgYnkgdHJhY2luZyB0aGUgc3ViamVjdCBvZiB0aGUgaW1wbGljYXRlZCByZXNvdXJjZXMsIGl0J3MgdXNlZnVsIHRvIGhhdmUgYSBkaXJlY3QgbGluayBmb3IgcXVlcnkgcHVycG9zZXMuXHJcbiAgICovXHJcbiAgcGF0aWVudD86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcyB0aGUgZ2VuZXJhbCB0eXBlIG9mIGlzc3VlIGlkZW50aWZpZWQuXHJcbiAgICovXHJcbiAgY2F0ZWdvcnk/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGUgZGVncmVlIG9mIGltcG9ydGFuY2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBpZGVudGlmaWVkIGlzc3VlIGJhc2VkIG9uIHRoZSBwb3RlbnRpYWwgaW1wYWN0IG9uIHRoZSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIHNldmVyaXR5PzogZmhpci5GaGlyQ29kZTxEZXRlY3RlZGlzc3VlU2V2ZXJpdHlDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRGV0ZWN0ZWRJc3N1ZS5zZXZlcml0eVxyXG4gICAqL1xyXG4gIF9zZXZlcml0eT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHRoZSByZXNvdXJjZSByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgYWN0aXZpdHkgb3IgcHJvcG9zZWQgYWN0aXZpdHkgdGhhdCBpcyBwb3RlbnRpYWxseSBwcm9ibGVtYXRpYy5cclxuICAgKi9cclxuICBpbXBsaWNhdGVkPzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgdGV4dHVhbCBleHBsYW5hdGlvbiBvZiB0aGUgZGV0ZWN0ZWQgaXNzdWUuXHJcbiAgICovXHJcbiAgZGV0YWlsPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IERldGVjdGVkSXNzdWUuZGV0YWlsXHJcbiAgICovXHJcbiAgX2RldGFpbD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogTm8tb25lIGNhbiBiZSByZXNwb25zaWJsZSBmb3IgbWl0aWdhdGlvbiBwcmlvciB0byB0aGUgaXNzdWUgYmVpbmcgaWRlbnRpZmllZC5cclxuICAgKi9cclxuICBkYXRlPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRGV0ZWN0ZWRJc3N1ZS5kYXRlXHJcbiAgICovXHJcbiAgX2RhdGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEluZGl2aWR1YWwgb3IgZGV2aWNlIHJlc3BvbnNpYmxlIGZvciB0aGUgaXNzdWUgYmVpbmcgcmFpc2VkLiAgRm9yIGV4YW1wbGUsIGEgZGVjaXNpb24gc3VwcG9ydCBhcHBsaWNhdGlvbiBvciBhIHBoYXJtYWNpc3QgY29uZHVjdGluZyBhIG1lZGljYXRpb24gcmV2aWV3LlxyXG4gICAqL1xyXG4gIGF1dGhvcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIGxpbmtpbmcgaW5zdGFuY2VzIG9mIHRoZSBzYW1lIGRldGVjdGVkIGlzc3VlIGZvdW5kIG9uIGRpZmZlcmVudCBzZXJ2ZXJzLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbGl0ZXJhdHVyZSwga25vd2xlZGdlLWJhc2Ugb3Igc2ltaWxhciByZWZlcmVuY2UgdGhhdCBkZXNjcmliZXMgdGhlIHByb3BlbnNpdHkgZm9yIHRoZSBkZXRlY3RlZCBpc3N1ZSBpZGVudGlmaWVkLlxyXG4gICAqL1xyXG4gIHJlZmVyZW5jZT86IGZoaXIuRmhpclVyaXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEZXRlY3RlZElzc3VlLnJlZmVyZW5jZVxyXG4gICAqL1xyXG4gIF9yZWZlcmVuY2U/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBhbiBhY3Rpb24gdGhhdCBoYXMgYmVlbiB0YWtlbiBvciBpcyBjb21taXR0ZWQgdG8gdG8gcmVkdWNlIG9yIGVsaW1pbmF0ZSB0aGUgbGlrZWxpaG9vZCBvZiB0aGUgcmlzayBpZGVudGlmaWVkIGJ5IHRoZSBkZXRlY3RlZCBpc3N1ZSBmcm9tIG1hbmlmZXN0aW5nLiAgQ2FuIGFsc28gcmVmbGVjdCBhbiBvYnNlcnZhdGlvbiBvZiBrbm93biBtaXRpZ2F0aW5nIGZhY3RvcnMgdGhhdCBtYXkgcmVkdWNlL2VsaW1pbmF0ZSB0aGUgbmVlZCBmb3IgYW55IGFjdGlvbi5cclxuICAgKi9cclxuICBtaXRpZ2F0aW9uPzogZmhpci5EZXRlY3RlZElzc3VlTWl0aWdhdGlvbkFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbmRpY2F0ZXMgYW4gYWN0dWFsIG9yIHBvdGVudGlhbCBjbGluaWNhbCBpc3N1ZSB3aXRoIG9yIGJldHdlZW4gb25lIG9yIG1vcmUgYWN0aXZlIG9yIHByb3Bvc2VkIGNsaW5pY2FsIGFjdGlvbnMgZm9yIGEgcGF0aWVudDsgZS5nLiBEcnVnLWRydWcgaW50ZXJhY3Rpb24sIEluZWZmZWN0aXZlIHRyZWF0bWVudCBmcmVxdWVuY3ksIFByb2NlZHVyZS1jb25kaXRpb24gY29uZmxpY3QsIGV0Yy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEZXRlY3RlZElzc3VlIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdEZXRlY3RlZElzc3VlJztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIkRldGVjdGVkSXNzdWVcIjtcclxuICAvKipcclxuICAgKiBXaGlsZSB0aGUgc3ViamVjdCBjb3VsZCBiZSBpbmZlcnJlZCBieSB0cmFjaW5nIHRoZSBzdWJqZWN0IG9mIHRoZSBpbXBsaWNhdGVkIHJlc291cmNlcywgaXQncyB1c2VmdWwgdG8gaGF2ZSBhIGRpcmVjdCBsaW5rIGZvciBxdWVyeSBwdXJwb3Nlcy5cclxuICAgKi9cclxuICBwdWJsaWMgcGF0aWVudD86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVzIHRoZSBnZW5lcmFsIHR5cGUgb2YgaXNzdWUgaWRlbnRpZmllZC5cclxuICAgKi9cclxuICBwdWJsaWMgY2F0ZWdvcnk/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHRoZSBkZWdyZWUgb2YgaW1wb3J0YW5jZSBhc3NvY2lhdGVkIHdpdGggdGhlIGlkZW50aWZpZWQgaXNzdWUgYmFzZWQgb24gdGhlIHBvdGVudGlhbCBpbXBhY3Qgb24gdGhlIHBhdGllbnQuXHJcbiAgICovXHJcbiAgcHVibGljIHNldmVyaXR5PzogZmhpci5GaGlyQ29kZTxEZXRlY3RlZGlzc3VlU2V2ZXJpdHlDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGUgcmVzb3VyY2UgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IGFjdGl2aXR5IG9yIHByb3Bvc2VkIGFjdGl2aXR5IHRoYXQgaXMgcG90ZW50aWFsbHkgcHJvYmxlbWF0aWMuXHJcbiAgICovXHJcbiAgcHVibGljIGltcGxpY2F0ZWQ6IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogQSB0ZXh0dWFsIGV4cGxhbmF0aW9uIG9mIHRoZSBkZXRlY3RlZCBpc3N1ZS5cclxuICAgKi9cclxuICBwdWJsaWMgZGV0YWlsPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOby1vbmUgY2FuIGJlIHJlc3BvbnNpYmxlIGZvciBtaXRpZ2F0aW9uIHByaW9yIHRvIHRoZSBpc3N1ZSBiZWluZyBpZGVudGlmaWVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkYXRlPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGl2aWR1YWwgb3IgZGV2aWNlIHJlc3BvbnNpYmxlIGZvciB0aGUgaXNzdWUgYmVpbmcgcmFpc2VkLiAgRm9yIGV4YW1wbGUsIGEgZGVjaXNpb24gc3VwcG9ydCBhcHBsaWNhdGlvbiBvciBhIHBoYXJtYWNpc3QgY29uZHVjdGluZyBhIG1lZGljYXRpb24gcmV2aWV3LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhdXRob3I/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIGxpbmtpbmcgaW5zdGFuY2VzIG9mIHRoZSBzYW1lIGRldGVjdGVkIGlzc3VlIGZvdW5kIG9uIGRpZmZlcmVudCBzZXJ2ZXJzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbGl0ZXJhdHVyZSwga25vd2xlZGdlLWJhc2Ugb3Igc2ltaWxhciByZWZlcmVuY2UgdGhhdCBkZXNjcmliZXMgdGhlIHByb3BlbnNpdHkgZm9yIHRoZSBkZXRlY3RlZCBpc3N1ZSBpZGVudGlmaWVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWZlcmVuY2U/OiBmaGlyLkZoaXJVcml8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBhbiBhY3Rpb24gdGhhdCBoYXMgYmVlbiB0YWtlbiBvciBpcyBjb21taXR0ZWQgdG8gdG8gcmVkdWNlIG9yIGVsaW1pbmF0ZSB0aGUgbGlrZWxpaG9vZCBvZiB0aGUgcmlzayBpZGVudGlmaWVkIGJ5IHRoZSBkZXRlY3RlZCBpc3N1ZSBmcm9tIG1hbmlmZXN0aW5nLiAgQ2FuIGFsc28gcmVmbGVjdCBhbiBvYnNlcnZhdGlvbiBvZiBrbm93biBtaXRpZ2F0aW5nIGZhY3RvcnMgdGhhdCBtYXkgcmVkdWNlL2VsaW1pbmF0ZSB0aGUgbmVlZCBmb3IgYW55IGFjdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgbWl0aWdhdGlvbjogZmhpci5EZXRlY3RlZElzc3VlTWl0aWdhdGlvbltdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIERldGVjdGVkSXNzdWUgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxEZXRlY3RlZElzc3VlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ0RldGVjdGVkSXNzdWUnO1xyXG4gICAgaWYgKHNvdXJjZVsncGF0aWVudCddKSB7IHRoaXMucGF0aWVudCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucGF0aWVudCwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2NhdGVnb3J5J10pIHsgdGhpcy5jYXRlZ29yeSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuY2F0ZWdvcnksIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydzZXZlcml0eSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zZXZlcml0eSA9IG5ldyBmaGlyLkZoaXJDb2RlPERldGVjdGVkaXNzdWVTZXZlcml0eUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zZXZlcml0eX0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfc2V2ZXJpdHknXSkge1xyXG4gICAgICBpZiAodGhpcy5zZXZlcml0eSkgeyB0aGlzLnNldmVyaXR5LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3NldmVyaXR5ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc2V2ZXJpdHkgPSBuZXcgZmhpci5GaGlyQ29kZTxEZXRlY3RlZGlzc3VlU2V2ZXJpdHlDb2RlVHlwZT4oc291cmNlLl9zZXZlcml0eSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnaW1wbGljYXRlZCddKSB7IHRoaXMuaW1wbGljYXRlZCA9IHNvdXJjZS5pbXBsaWNhdGVkLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaW1wbGljYXRlZCA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydkZXRhaWwnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZGV0YWlsID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5kZXRhaWx9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2RldGFpbCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRldGFpbCkgeyB0aGlzLmRldGFpbC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kZXRhaWwhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kZXRhaWwgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fZGV0YWlsIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydkYXRlJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmRhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UuZGF0ZX0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGF0ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGUpIHsgdGhpcy5kYXRlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2RhdGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kYXRlID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fZGF0ZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydhdXRob3InXSkgeyB0aGlzLmF1dGhvciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuYXV0aG9yLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IG5ldyBmaGlyLklkZW50aWZpZXIoc291cmNlLmlkZW50aWZpZXIsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydyZWZlcmVuY2UnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMucmVmZXJlbmNlID0gbmV3IGZoaXIuRmhpclVyaSh7dmFsdWU6IHNvdXJjZS5yZWZlcmVuY2V9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3JlZmVyZW5jZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnJlZmVyZW5jZSkgeyB0aGlzLnJlZmVyZW5jZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9yZWZlcmVuY2UhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5yZWZlcmVuY2UgPSBuZXcgZmhpci5GaGlyVXJpKHNvdXJjZS5fcmVmZXJlbmNlIGFzIFBhcnRpYWw8Zmhpci5GaGlyVXJpQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydtaXRpZ2F0aW9uJ10pIHsgdGhpcy5taXRpZ2F0aW9uID0gc291cmNlLm1pdGlnYXRpb24ubWFwKCh4KSA9PiBuZXcgZmhpci5EZXRlY3RlZElzc3VlTWl0aWdhdGlvbih4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLm1pdGlnYXRpb24gPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0RldGVjdGVkSXNzdWUnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdwYXRpZW50JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdjYXRlZ29yeScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPU1YoJ3NldmVyaXR5JyxleHAsJ0RldGVjdGVkaXNzdWVTZXZlcml0eScsRGV0ZWN0ZWRpc3N1ZVNldmVyaXR5VnNWYWxpZGF0aW9uLCdyJykpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2ltcGxpY2F0ZWQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2RldGFpbCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZGF0ZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnYXV0aG9yJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdpZGVudGlmaWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdyZWZlcmVuY2UnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ21pdGlnYXRpb24nLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19