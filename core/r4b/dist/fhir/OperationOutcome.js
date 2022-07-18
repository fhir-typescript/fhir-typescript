// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: OperationOutcome
import * as fhir from '../fhir.js';
// @ts-ignore
import { IssueSeverityVsValidation } from '../fhirValueSets/IssueSeverityVsValidation.js';
// @ts-ignore
import { IssueTypeVsValidation } from '../fhirValueSets/IssueTypeVsValidation.js';
/**
 * An error, warning, or information message that results from a system action.
 */
export class OperationOutcomeIssue extends fhir.BackboneElement {
    /**
     * Default constructor for OperationOutcomeIssue - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['severity']) {
            this.severity = new fhir.FhirCode({ value: source.severity });
        }
        else {
            this.severity = null;
        }
        if (source['_severity']) {
            if (this.severity) {
                this.severity.addExtendedProperties(source._severity);
            }
            else {
                this.severity = new fhir.FhirCode(source._severity);
            }
        }
        if (source['code']) {
            this.code = new fhir.FhirCode({ value: source.code });
        }
        else {
            this.code = null;
        }
        if (source['_code']) {
            if (this.code) {
                this.code.addExtendedProperties(source._code);
            }
            else {
                this.code = new fhir.FhirCode(source._code);
            }
        }
        if (source['details']) {
            this.details = new fhir.CodeableConcept(source.details);
        }
        if (source['diagnostics']) {
            this.diagnostics = new fhir.FhirString({ value: source.diagnostics });
        }
        if (source['_diagnostics']) {
            if (this.diagnostics) {
                this.diagnostics.addExtendedProperties(source._diagnostics);
            }
            else {
                this.diagnostics = new fhir.FhirString(source._diagnostics);
            }
        }
        if (source['location']) {
            this.location = source.location.map((x) => new fhir.FhirString({ value: x }));
        }
        else {
            this.location = [];
        }
        if (source['_location']) {
            source._location.forEach((x, i) => {
                if (this.location.length >= i) {
                    if (x) {
                        this.location[i].addExtendedProperties(x);
                    }
                }
                else {
                    if (x) {
                        this.location.push(new fhir.FhirString(x));
                    }
                }
            });
        }
        if (source['expression']) {
            this.expression = source.expression.map((x) => new fhir.FhirString({ value: x }));
        }
        else {
            this.expression = [];
        }
        if (source['_expression']) {
            source._expression.forEach((x, i) => {
                if (this.expression.length >= i) {
                    if (x) {
                        this.expression[i].addExtendedProperties(x);
                    }
                }
                else {
                    if (x) {
                        this.expression.push(new fhir.FhirString(x));
                    }
                }
            });
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'OperationOutcome.issue';
        }
        this.vRSV('severity', exp, 'IssueSeverity', IssueSeverityVsValidation, 'r');
        this.vRSV('code', exp, 'IssueType', IssueTypeVsValidation, 'r');
        this.vOS('details', exp);
        this.vOS('diagnostics', exp);
        this.vOA('location', exp);
        this.vOA('expression', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
OperationOutcomeIssue._fts_dataType = 'OperationOutcomeIssue';
/**
 * A collection of error, warning, or information messages that result from a system action.
 */
export class OperationOutcome extends fhir.DomainResource {
    /**
     * Default constructor for OperationOutcome - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'OperationOutcome';
        if (source['issue']) {
            this.issue = source.issue.map((x) => new fhir.OperationOutcomeIssue(x));
        }
        else {
            this.issue = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'OperationOutcome';
        }
        this.vRS('resourceType', exp);
        this.vRA('issue', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
OperationOutcome._fts_dataType = 'OperationOutcome';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlcmF0aW9uT3V0Y29tZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvT3BlcmF0aW9uT3V0Y29tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRzFGLGFBQWE7QUFDYixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQW1EbEY7O0dBRUc7QUFDSCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsSUFBSSxDQUFDLGVBQWU7SUE2QjdEOztPQUVHO0lBQ0gsWUFBWSxTQUE0QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNsRyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQXdCLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDMUc7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxTQUFVLENBQUMsQ0FBQzthQUFFO2lCQUN6RTtnQkFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBd0IsTUFBTSxDQUFDLFNBQW1DLENBQUMsQ0FBQzthQUFFO1NBQy9HO1FBQ0QsSUFBSSxNQUFNLENB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QUFDO0lBQ2hCLENBQUM7O0FBakZEOztHQUVHO0FBQzZCLG1DQUFhLEdBQVUsdUJBQXVCLENBQUM7QUE4RmpGOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGdCQUFpQixTQUFRLElBQUksQ0FBQyxjQUFjO0lBYXZEOztPQUVHO0lBQ0gsWUFBWSxTQUF1QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUM3RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDNUY7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUFFO0lBQzNCLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQTtTQUFFO1FBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBOUJEOztHQUVHO0FBQzZCLDhCQUFhLEdBQVUsa0JBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBPcGVyYXRpb25PdXRjb21lXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJc3N1ZVNldmVyaXR5Q29kZXMsICBJc3N1ZVNldmVyaXR5Q29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0lzc3VlU2V2ZXJpdHlDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgSXNzdWVTZXZlcml0eVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvSXNzdWVTZXZlcml0eVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgSXNzdWVUeXBlQ29kZXMsICBJc3N1ZVR5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvSXNzdWVUeXBlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IElzc3VlVHlwZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvSXNzdWVUeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIE9wZXJhdGlvbk91dGNvbWVJc3N1ZSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBPcGVyYXRpb25PdXRjb21lSXNzdWVBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGlzIGlzIGxhYmVsZWQgYXMgXCJJcyBNb2RpZmllclwiIGJlY2F1c2UgYXBwbGljYXRpb25zIHNob3VsZCBub3QgY29uZnVzZSBoaW50cyBhbmQgd2FybmluZ3Mgd2l0aCBlcnJvcnMuXHJcbiAgICovXHJcbiAgc2V2ZXJpdHk6IGZoaXIuRmhpckNvZGU8SXNzdWVTZXZlcml0eUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBPcGVyYXRpb25PdXRjb21lLmlzc3VlLnNldmVyaXR5XHJcbiAgICovXHJcbiAgX3NldmVyaXR5PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBEZXNjcmliZXMgdGhlIHR5cGUgb2YgdGhlIGlzc3VlLiBUaGUgc3lzdGVtIHRoYXQgY3JlYXRlcyBhbiBPcGVyYXRpb25PdXRjb21lIFNIQUxMIGNob29zZSB0aGUgbW9zdCBhcHBsaWNhYmxlIGNvZGUgZnJvbSB0aGUgSXNzdWVUeXBlIHZhbHVlIHNldCwgYW5kIG1heSBhZGRpdGlvbmFsIHByb3ZpZGUgaXRzIG93biBjb2RlIGZvciB0aGUgZXJyb3IgaW4gdGhlIGRldGFpbHMgZWxlbWVudC5cclxuICAgKi9cclxuICBjb2RlOiBmaGlyLkZoaXJDb2RlfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE9wZXJhdGlvbk91dGNvbWUuaXNzdWUuY29kZVxyXG4gICAqL1xyXG4gIF9jb2RlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIGh1bWFuIHJlYWRhYmxlIGRlc2NyaXB0aW9uIG9mIHRoZSBlcnJvciBpc3N1ZSBTSE9VTEQgYmUgcGxhY2VkIGluIGRldGFpbHMudGV4dC5cclxuICAgKi9cclxuICBkZXRhaWxzPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIG1heSBiZSBhIGRlc2NyaXB0aW9uIG9mIGhvdyBhIHZhbHVlIGlzIGVycm9uZW91cywgYSBzdGFjayBkdW1wIHRvIGhlbHAgdHJhY2UgdGhlIGlzc3VlIG9yIG90aGVyIHRyb3VibGVzaG9vdGluZyBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBkaWFnbm9zdGljcz86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBPcGVyYXRpb25PdXRjb21lLmlzc3VlLmRpYWdub3N0aWNzXHJcbiAgICovXHJcbiAgX2RpYWdub3N0aWNzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgcm9vdCBvZiB0aGUgWFBhdGggaXMgdGhlIHJlc291cmNlIG9yIGJ1bmRsZSB0aGF0IGdlbmVyYXRlZCBPcGVyYXRpb25PdXRjb21lLiAgRWFjaCBYUGF0aCBTSEFMTCByZXNvbHZlIHRvIGEgc2luZ2xlIG5vZGUuICBUaGlzIGVsZW1lbnQgaXMgZGVwcmVjYXRlZCwgYW5kIGlzIGJlaW5nIHJlcGxhY2VkIGJ5IGV4cHJlc3Npb24uXHJcbiAgICovXHJcbiAgbG9jYXRpb24/OiBmaGlyLkZoaXJTdHJpbmdbXXwoc3RyaW5nfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBPcGVyYXRpb25PdXRjb21lLmlzc3VlLmxvY2F0aW9uXHJcbiAgICovXHJcbiAgX2xvY2F0aW9uPzooZmhpci5GaGlyRWxlbWVudEFyZ3N8bnVsbClbXTtcclxuICAvKipcclxuICAgKiBUaGUgcm9vdCBvZiB0aGUgRkhJUlBhdGggaXMgdGhlIHJlc291cmNlIG9yIGJ1bmRsZSB0aGF0IGdlbmVyYXRlZCBPcGVyYXRpb25PdXRjb21lLiAgRWFjaCBGSElSUGF0aCBTSEFMTCByZXNvbHZlIHRvIGEgc2luZ2xlIG5vZGUuXHJcbiAgICovXHJcbiAgZXhwcmVzc2lvbj86IGZoaXIuRmhpclN0cmluZ1tdfChzdHJpbmd8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE9wZXJhdGlvbk91dGNvbWUuaXNzdWUuZXhwcmVzc2lvblxyXG4gICAqL1xyXG4gIF9leHByZXNzaW9uPzooZmhpci5GaGlyRWxlbWVudEFyZ3N8bnVsbClbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGVycm9yLCB3YXJuaW5nLCBvciBpbmZvcm1hdGlvbiBtZXNzYWdlIHRoYXQgcmVzdWx0cyBmcm9tIGEgc3lzdGVtIGFjdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBPcGVyYXRpb25PdXRjb21lSXNzdWUgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdPcGVyYXRpb25PdXRjb21lSXNzdWUnO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgbGFiZWxlZCBhcyBcIklzIE1vZGlmaWVyXCIgYmVjYXVzZSBhcHBsaWNhdGlvbnMgc2hvdWxkIG5vdCBjb25mdXNlIGhpbnRzIGFuZCB3YXJuaW5ncyB3aXRoIGVycm9ycy5cclxuICAgKi9cclxuICBwdWJsaWMgc2V2ZXJpdHk6IGZoaXIuRmhpckNvZGU8SXNzdWVTZXZlcml0eUNvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIERlc2NyaWJlcyB0aGUgdHlwZSBvZiB0aGUgaXNzdWUuIFRoZSBzeXN0ZW0gdGhhdCBjcmVhdGVzIGFuIE9wZXJhdGlvbk91dGNvbWUgU0hBTEwgY2hvb3NlIHRoZSBtb3N0IGFwcGxpY2FibGUgY29kZSBmcm9tIHRoZSBJc3N1ZVR5cGUgdmFsdWUgc2V0LCBhbmQgbWF5IGFkZGl0aW9uYWwgcHJvdmlkZSBpdHMgb3duIGNvZGUgZm9yIHRoZSBlcnJvciBpbiB0aGUgZGV0YWlscyBlbGVtZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2RlOiBmaGlyLkZoaXJDb2RlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogQSBodW1hbiByZWFkYWJsZSBkZXNjcmlwdGlvbiBvZiB0aGUgZXJyb3IgaXNzdWUgU0hPVUxEIGJlIHBsYWNlZCBpbiBkZXRhaWxzLnRleHQuXHJcbiAgICovXHJcbiAgcHVibGljIGRldGFpbHM/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBtYXkgYmUgYSBkZXNjcmlwdGlvbiBvZiBob3cgYSB2YWx1ZSBpcyBlcnJvbmVvdXMsIGEgc3RhY2sgZHVtcCB0byBoZWxwIHRyYWNlIHRoZSBpc3N1ZSBvciBvdGhlciB0cm91Ymxlc2hvb3RpbmcgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIGRpYWdub3N0aWNzPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcm9vdCBvZiB0aGUgWFBhdGggaXMgdGhlIHJlc291cmNlIG9yIGJ1bmRsZSB0aGF0IGdlbmVyYXRlZCBPcGVyYXRpb25PdXRjb21lLiAgRWFjaCBYUGF0aCBTSEFMTCByZXNvbHZlIHRvIGEgc2luZ2xlIG5vZGUuICBUaGlzIGVsZW1lbnQgaXMgZGVwcmVjYXRlZCwgYW5kIGlzIGJlaW5nIHJlcGxhY2VkIGJ5IGV4cHJlc3Npb24uXHJcbiAgICovXHJcbiAgcHVibGljIGxvY2F0aW9uOiBmaGlyLkZoaXJTdHJpbmdbXTtcclxuICAvKipcclxuICAgKiBUaGUgcm9vdCBvZiB0aGUgRkhJUlBhdGggaXMgdGhlIHJlc291cmNlIG9yIGJ1bmRsZSB0aGF0IGdlbmVyYXRlZCBPcGVyYXRpb25PdXRjb21lLiAgRWFjaCBGSElSUGF0aCBTSEFMTCByZXNvbHZlIHRvIGEgc2luZ2xlIG5vZGUuXHJcbiAgICovXHJcbiAgcHVibGljIGV4cHJlc3Npb246IGZoaXIuRmhpclN0cmluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIE9wZXJhdGlvbk91dGNvbWVJc3N1ZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPE9wZXJhdGlvbk91dGNvbWVJc3N1ZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydzZXZlcml0eSddKSB7IHRoaXMuc2V2ZXJpdHkgPSBuZXcgZmhpci5GaGlyQ29kZTxJc3N1ZVNldmVyaXR5Q29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnNldmVyaXR5fSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnNldmVyaXR5ID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3NldmVyaXR5J10pIHtcclxuICAgICAgaWYgKHRoaXMuc2V2ZXJpdHkpIHsgdGhpcy5zZXZlcml0eS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zZXZlcml0eSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnNldmVyaXR5ID0gbmV3IGZoaXIuRmhpckNvZGU8SXNzdWVTZXZlcml0eUNvZGVUeXBlPihzb3VyY2UuX3NldmVyaXR5IGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjb2RlJ10pIHsgdGhpcy5jb2RlID0gbmV3IGZoaXIuRmhpckNvZGUoe3ZhbHVlOiBzb3VyY2UuY29kZX0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb2RlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NvZGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5jb2RlKSB7IHRoaXMuY29kZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jb2RlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY29kZSA9IG5ldyBmaGlyLkZoaXJDb2RlKHNvdXJjZS5fY29kZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2RldGFpbHMnXSkgeyB0aGlzLmRldGFpbHMgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmRldGFpbHMpOyB9XHJcbiAgICBpZiAoc291cmNlWydkaWFnbm9zdGljcyddKSB7IHRoaXMuZGlhZ25vc3RpY3MgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmRpYWdub3N0aWNzfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kaWFnbm9zdGljcyddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRpYWdub3N0aWNzKSB7IHRoaXMuZGlhZ25vc3RpY3MuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZGlhZ25vc3RpY3MhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kaWFnbm9zdGljcyA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9kaWFnbm9zdGljcyBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbG9jYXRpb24nXSkgeyB0aGlzLmxvY2F0aW9uID0gc291cmNlLmxvY2F0aW9uLm1hcCgoeCkgPT4gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHh9KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmxvY2F0aW9uID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ19sb2NhdGlvbiddKSB7XHJcbiAgICAgIHNvdXJjZS5fbG9jYXRpb24uZm9yRWFjaCgoeCxpKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYXRpb24ubGVuZ3RoID49IGkpIHsgaWYgKHgpIHsgdGhpcy5sb2NhdGlvbltpXS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoeCk7IH0gfVxyXG4gICAgICAgIGVsc2UgeyBpZiAoeCkgeyB0aGlzLmxvY2F0aW9uLnB1c2gobmV3IGZoaXIuRmhpclN0cmluZyh4IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pKTsgfSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZXhwcmVzc2lvbiddKSB7IHRoaXMuZXhwcmVzc2lvbiA9IHNvdXJjZS5leHByZXNzaW9uLm1hcCgoeCkgPT4gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHh9KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmV4cHJlc3Npb24gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2V4cHJlc3Npb24nXSkge1xyXG4gICAgICBzb3VyY2UuX2V4cHJlc3Npb24uZm9yRWFjaCgoeCxpKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwcmVzc2lvbi5sZW5ndGggPj0gaSkgeyBpZiAoeCkgeyB0aGlzLmV4cHJlc3Npb25baV0uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHgpOyB9IH1cclxuICAgICAgICBlbHNlIHsgaWYgKHgpIHsgdGhpcy5leHByZXNzaW9uLnB1c2gobmV3IGZoaXIuRmhpclN0cmluZyh4IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pKTsgfSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ09wZXJhdGlvbk91dGNvbWUuaXNzdWUnIH1cclxuICAgIHRoaXMudlJTVignc2V2ZXJpdHknLGV4cCwnSXNzdWVTZXZlcml0eScsSXNzdWVTZXZlcml0eVZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZSU1YoJ2NvZGUnLGV4cCwnSXNzdWVUeXBlJyxJc3N1ZVR5cGVWc1ZhbGlkYXRpb24sJ3InKVxyXG4gICAgdGhpcy52T1MoJ2RldGFpbHMnLGV4cClcclxuICAgIHRoaXMudk9TKCdkaWFnbm9zdGljcycsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2xvY2F0aW9uJyxleHApXHJcbiAgICB0aGlzLnZPQSgnZXhwcmVzc2lvbicsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIE9wZXJhdGlvbk91dGNvbWUgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3BlcmF0aW9uT3V0Y29tZUFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIk9wZXJhdGlvbk91dGNvbWVcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW4gZXJyb3IsIHdhcm5pbmcsIG9yIGluZm9ybWF0aW9uIG1lc3NhZ2UgdGhhdCByZXN1bHRzIGZyb20gYSBzeXN0ZW0gYWN0aW9uLlxyXG4gICAqL1xyXG4gIGlzc3VlOiBmaGlyLk9wZXJhdGlvbk91dGNvbWVJc3N1ZUFyZ3NbXXxudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQSBjb2xsZWN0aW9uIG9mIGVycm9yLCB3YXJuaW5nLCBvciBpbmZvcm1hdGlvbiBtZXNzYWdlcyB0aGF0IHJlc3VsdCBmcm9tIGEgc3lzdGVtIGFjdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBPcGVyYXRpb25PdXRjb21lIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdPcGVyYXRpb25PdXRjb21lJztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIk9wZXJhdGlvbk91dGNvbWVcIjtcclxuICAvKipcclxuICAgKiBBbiBlcnJvciwgd2FybmluZywgb3IgaW5mb3JtYXRpb24gbWVzc2FnZSB0aGF0IHJlc3VsdHMgZnJvbSBhIHN5c3RlbSBhY3Rpb24uXHJcbiAgICovXHJcbiAgcHVibGljIGlzc3VlOiBmaGlyLk9wZXJhdGlvbk91dGNvbWVJc3N1ZVtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIE9wZXJhdGlvbk91dGNvbWUgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxPcGVyYXRpb25PdXRjb21lQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ09wZXJhdGlvbk91dGNvbWUnO1xyXG4gICAgaWYgKHNvdXJjZVsnaXNzdWUnXSkgeyB0aGlzLmlzc3VlID0gc291cmNlLmlzc3VlLm1hcCgoeCkgPT4gbmV3IGZoaXIuT3BlcmF0aW9uT3V0Y29tZUlzc3VlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaXNzdWUgPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ09wZXJhdGlvbk91dGNvbWUnIH1cclxuICAgIHRoaXMudlJTKCdyZXNvdXJjZVR5cGUnLGV4cClcclxuICAgIHRoaXMudlJBKCdpc3N1ZScsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19