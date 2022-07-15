// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: RiskAssessment
import * as fhir from '../fhir.js';
/**
 * Describes the expected outcome for the subject.
 */
export class RiskAssessmentPrediction extends fhir.BackboneElement {
    /**
     * Default constructor for RiskAssessmentPrediction - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['outcome']) {
            this.outcome = new fhir.CodeableConcept(source.outcome);
        }
        else {
            this.outcome = null;
        }
        if (source['probability']) {
            this.probability = source.probability;
        }
        else if (source['probabilityDecimal']) {
            this.probability = new fhir.FhirDecimal({ value: source.probabilityDecimal });
        }
        else if (source['probabilityRange']) {
            this.probability = new fhir.Range(source.probabilityRange);
        }
        else if (source['probabilityCodeableConcept']) {
            this.probability = new fhir.CodeableConcept(source.probabilityCodeableConcept);
        }
        if (source['relativeRisk']) {
            this.relativeRisk = new fhir.FhirDecimal({ value: source.relativeRisk });
        }
        if (source['_relativeRisk']) {
            if (this.relativeRisk) {
                this.relativeRisk.addExtendedProperties(source._relativeRisk);
            }
            else {
                this.relativeRisk = new fhir.FhirDecimal(source._relativeRisk);
            }
        }
        if (source['when']) {
            this.when = source.when;
        }
        else if (source['whenPeriod']) {
            this.when = new fhir.Period(source.whenPeriod);
        }
        else if (source['whenRange']) {
            this.when = new fhir.Range(source.whenRange);
        }
        if (source['rationale']) {
            this.rationale = new fhir.FhirString({ value: source.rationale });
        }
        if (source['_rationale']) {
            if (this.rationale) {
                this.rationale.addExtendedProperties(source._rationale);
            }
            else {
                this.rationale = new fhir.FhirString(source._rationale);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'RiskAssessment.prediction';
        }
        this.vRS('outcome', exp);
        this.vOS('probability', exp);
        this.vOS('relativeRisk', exp);
        this.vOS('when', exp);
        this.vOS('rationale', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
RiskAssessmentPrediction._fts_dataType = 'RiskAssessmentPrediction';
/**
 * Internal flag to properly serialize choice-type element RiskAssessment.prediction.probability[x]
 */
RiskAssessmentPrediction._fts_probabilityIsChoice = true;
/**
 * Internal flag to properly serialize choice-type element RiskAssessment.prediction.when[x]
 */
RiskAssessmentPrediction._fts_whenIsChoice = true;
/**
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 */
export class RiskAssessment extends fhir.DomainResource {
    /**
     * Default constructor for RiskAssessment - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'RiskAssessment';
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
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
        if (source['condition']) {
            this.condition = new fhir.Reference(source.condition);
        }
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source['performer']) {
            this.performer = new fhir.Reference(source.performer);
        }
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier);
        }
        if (source['method']) {
            this.method = new fhir.CodeableConcept(source.method);
        }
        if (source['basis']) {
            this.basis = source.basis.map((x) => new fhir.Reference(x));
        }
        else {
            this.basis = [];
        }
        if (source['prediction']) {
            this.prediction = source.prediction.map((x) => new fhir.RiskAssessmentPrediction(x));
        }
        else {
            this.prediction = [];
        }
        if (source['mitigation']) {
            this.mitigation = new fhir.FhirString({ value: source.mitigation });
        }
        if (source['_mitigation']) {
            if (this.mitigation) {
                this.mitigation.addExtendedProperties(source._mitigation);
            }
            else {
                this.mitigation = new fhir.FhirString(source._mitigation);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'RiskAssessment';
        }
        this.vRS('resourceType', exp);
        this.vOS('subject', exp);
        this.vOS('date', exp);
        this.vOS('condition', exp);
        this.vOS('encounter', exp);
        this.vOS('performer', exp);
        this.vOS('identifier', exp);
        this.vOS('method', exp);
        this.vOA('basis', exp);
        this.vOA('prediction', exp);
        this.vOS('mitigation', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
RiskAssessment._fts_dataType = 'RiskAssessment';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmlza0Fzc2Vzc21lbnQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1Jpc2tBc3Nlc3NtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUVoQyxPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQXdEbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsSUFBSSxDQUFDLGVBQWU7SUFpQ2hFOztPQUVHO0lBQ0gsWUFBWSxTQUErQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNyRyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDOUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzdCLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1NBQUU7YUFDaEUsSUFBSSxNQUFNLENBQUMsb0JBQW9CLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsRUFBQyxDQUFDLENBQUM7U0FBRTthQUNsSCxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FBRTthQUMvRixJQUFJLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxFQUFF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Q2hCLENBQUM7O0FBN0ZEOztHQUVHO0FBQzZCLDRCQUFhLEdBQVUsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IFJpc2tBc3Nlc3NtZW50XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFJpc2tBc3Nlc3NtZW50UHJlZGljdGlvbiB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBSaXNrQXNzZXNzbWVudFByZWRpY3Rpb25BcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBPbmUgb2YgdGhlIHBvdGVudGlhbCBvdXRjb21lcyBmb3IgdGhlIHBhdGllbnQgKGUuZy4gcmVtaXNzaW9uLCBkZWF0aCwgIGEgcGFydGljdWxhciBjb25kaXRpb24pLlxyXG4gICAqL1xyXG4gIG91dGNvbWU6IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIEhvdyBsaWtlbHkgaXMgdGhlIG91dGNvbWUgKGluIHRoZSBzcGVjaWZpZWQgdGltZWZyYW1lKS5cclxuICAgKi9cclxuICBwcm9iYWJpbGl0eT86IGZoaXIuRmhpckRlY2ltYWx8Zmhpci5SYW5nZXxmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSG93IGxpa2VseSBpcyB0aGUgb3V0Y29tZSAoaW4gdGhlIHNwZWNpZmllZCB0aW1lZnJhbWUpLlxyXG4gICAqL1xyXG4gIHByb2JhYmlsaXR5RGVjaW1hbD86IGZoaXIuRmhpckRlY2ltYWx8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBIb3cgbGlrZWx5IGlzIHRoZSBvdXRjb21lIChpbiB0aGUgc3BlY2lmaWVkIHRpbWVmcmFtZSkuXHJcbiAgICovXHJcbiAgcHJvYmFiaWxpdHlSYW5nZT86IGZoaXIuUmFuZ2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBIb3cgbGlrZWx5IGlzIHRoZSBvdXRjb21lIChpbiB0aGUgc3BlY2lmaWVkIHRpbWVmcmFtZSkuXHJcbiAgICovXHJcbiAgcHJvYmFiaWxpdHlDb2RlYWJsZUNvbmNlcHQ/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFic29sdXRlIHJpc2sgaXMgbGVzcyBtZWFuaW5nZnVsIHRoYW4gcmVsYXRpdmUgcmlzay5cclxuICAgKi9cclxuICByZWxhdGl2ZVJpc2s/OiBmaGlyLkZoaXJEZWNpbWFsfG51bWJlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFJpc2tBc3Nlc3NtZW50LnByZWRpY3Rpb24ucmVsYXRpdmVSaXNrXHJcbiAgICovXHJcbiAgX3JlbGF0aXZlUmlzaz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHRoZSBwZXJpb2Qgb2YgdGltZSBvciBhZ2UgcmFuZ2Ugb2YgdGhlIHN1YmplY3QgdG8gd2hpY2ggdGhlIHNwZWNpZmllZCBwcm9iYWJpbGl0eSBhcHBsaWVzLlxyXG4gICAqL1xyXG4gIHdoZW4/OiBmaGlyLlBlcmlvZHxmaGlyLlJhbmdlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIHBlcmlvZCBvZiB0aW1lIG9yIGFnZSByYW5nZSBvZiB0aGUgc3ViamVjdCB0byB3aGljaCB0aGUgc3BlY2lmaWVkIHByb2JhYmlsaXR5IGFwcGxpZXMuXHJcbiAgICovXHJcbiAgd2hlblBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHRoZSBwZXJpb2Qgb2YgdGltZSBvciBhZ2UgcmFuZ2Ugb2YgdGhlIHN1YmplY3QgdG8gd2hpY2ggdGhlIHNwZWNpZmllZCBwcm9iYWJpbGl0eSBhcHBsaWVzLlxyXG4gICAqL1xyXG4gIHdoZW5SYW5nZT86IGZoaXIuUmFuZ2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGV4cGxhaW5pbmcgdGhlIGJhc2lzIGZvciB0aGUgcHJlZGljdGlvbi5cclxuICAgKi9cclxuICByYXRpb25hbGU/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUmlza0Fzc2Vzc21lbnQucHJlZGljdGlvbi5yYXRpb25hbGVcclxuICAgKi9cclxuICBfcmF0aW9uYWxlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIERlc2NyaWJlcyB0aGUgZXhwZWN0ZWQgb3V0Y29tZSBmb3IgdGhlIHN1YmplY3QuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmlza0Fzc2Vzc21lbnRQcmVkaWN0aW9uIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUmlza0Fzc2Vzc21lbnRQcmVkaWN0aW9uJztcclxuICAvKipcclxuICAgKiBPbmUgb2YgdGhlIHBvdGVudGlhbCBvdXRjb21lcyBmb3IgdGhlIHBhdGllbnQgKGUuZy4gcmVtaXNzaW9uLCBkZWF0aCwgIGEgcGFydGljdWxhciBjb25kaXRpb24pLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdXRjb21lOiBmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEhvdyBsaWtlbHkgaXMgdGhlIG91dGNvbWUgKGluIHRoZSBzcGVjaWZpZWQgdGltZWZyYW1lKS5cclxuICAgKi9cclxuICBwdWJsaWMgcHJvYmFiaWxpdHk/OiAoZmhpci5GaGlyRGVjaW1hbHxmaGlyLlJhbmdlfGZoaXIuQ29kZWFibGVDb25jZXB0KXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgZmxhZyB0byBwcm9wZXJseSBzZXJpYWxpemUgY2hvaWNlLXR5cGUgZWxlbWVudCBSaXNrQXNzZXNzbWVudC5wcmVkaWN0aW9uLnByb2JhYmlsaXR5W3hdXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBfZnRzX3Byb2JhYmlsaXR5SXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogQWJzb2x1dGUgcmlzayBpcyBsZXNzIG1lYW5pbmdmdWwgdGhhbiByZWxhdGl2ZSByaXNrLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWxhdGl2ZVJpc2s/OiBmaGlyLkZoaXJEZWNpbWFsfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIHBlcmlvZCBvZiB0aW1lIG9yIGFnZSByYW5nZSBvZiB0aGUgc3ViamVjdCB0byB3aGljaCB0aGUgc3BlY2lmaWVkIHByb2JhYmlsaXR5IGFwcGxpZXMuXHJcbiAgICovXHJcbiAgcHVibGljIHdoZW4/OiAoZmhpci5QZXJpb2R8Zmhpci5SYW5nZSl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIGZsYWcgdG8gcHJvcGVybHkgc2VyaWFsaXplIGNob2ljZS10eXBlIGVsZW1lbnQgUmlza0Fzc2Vzc21lbnQucHJlZGljdGlvbi53aGVuW3hdXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBfZnRzX3doZW5Jc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGV4cGxhaW5pbmcgdGhlIGJhc2lzIGZvciB0aGUgcHJlZGljdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgcmF0aW9uYWxlPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBSaXNrQXNzZXNzbWVudFByZWRpY3Rpb24gLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxSaXNrQXNzZXNzbWVudFByZWRpY3Rpb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnb3V0Y29tZSddKSB7IHRoaXMub3V0Y29tZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2Uub3V0Y29tZSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLm91dGNvbWUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydwcm9iYWJpbGl0eSddKSB7IHRoaXMucHJvYmFiaWxpdHkgPSBzb3VyY2UucHJvYmFiaWxpdHk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsncHJvYmFiaWxpdHlEZWNpbWFsJ10pIHsgdGhpcy5wcm9iYWJpbGl0eSA9IG5ldyBmaGlyLkZoaXJEZWNpbWFsKHt2YWx1ZTogc291cmNlLnByb2JhYmlsaXR5RGVjaW1hbH0pOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3Byb2JhYmlsaXR5UmFuZ2UnXSkgeyB0aGlzLnByb2JhYmlsaXR5ID0gbmV3IGZoaXIuUmFuZ2Uoc291cmNlLnByb2JhYmlsaXR5UmFuZ2UpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3Byb2JhYmlsaXR5Q29kZWFibGVDb25jZXB0J10pIHsgdGhpcy5wcm9iYWJpbGl0eSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UucHJvYmFiaWxpdHlDb2RlYWJsZUNvbmNlcHQpOyB9XHJcbiAgICBpZiAoc291cmNlWydyZWxhdGl2ZVJpc2snXSkgeyB0aGlzLnJlbGF0aXZlUmlzayA9IG5ldyBmaGlyLkZoaXJEZWNpbWFsKHt2YWx1ZTogc291cmNlLnJlbGF0aXZlUmlza30pOyB9XHJcbiAgICBpZiAoc291cmNlWydfcmVsYXRpdmVSaXNrJ10pIHtcclxuICAgICAgaWYgKHRoaXMucmVsYXRpdmVSaXNrKSB7IHRoaXMucmVsYXRpdmVSaXNrLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3JlbGF0aXZlUmlzayEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnJlbGF0aXZlUmlzayA9IG5ldyBmaGlyLkZoaXJEZWNpbWFsKHNvdXJjZS5fcmVsYXRpdmVSaXNrIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGVjaW1hbEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnd2hlbiddKSB7IHRoaXMud2hlbiA9IHNvdXJjZS53aGVuOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3doZW5QZXJpb2QnXSkgeyB0aGlzLndoZW4gPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLndoZW5QZXJpb2QpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3doZW5SYW5nZSddKSB7IHRoaXMud2hlbiA9IG5ldyBmaGlyLlJhbmdlKHNvdXJjZS53aGVuUmFuZ2UpOyB9XHJcbiAgICBpZiAoc291cmNlWydyYXRpb25hbGUnXSkgeyB0aGlzLnJhdGlvbmFsZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UucmF0aW9uYWxlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19yYXRpb25hbGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5yYXRpb25hbGUpIHsgdGhpcy5yYXRpb25hbGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fcmF0aW9uYWxlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucmF0aW9uYWxlID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX3JhdGlvbmFsZSBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1Jpc2tBc3Nlc3NtZW50LnByZWRpY3Rpb24nIH1cclxuICAgIHRoaXMudlJTKCdvdXRjb21lJyxleHApXHJcbiAgICB0aGlzLnZPUygncHJvYmFiaWxpdHknLGV4cClcclxuICAgIHRoaXMudk9TKCdyZWxhdGl2ZVJpc2snLGV4cClcclxuICAgIHRoaXMudk9TKCd3aGVuJyxleHApXHJcbiAgICB0aGlzLnZPUygncmF0aW9uYWxlJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgUmlza0Fzc2Vzc21lbnQgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmlza0Fzc2Vzc21lbnRBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJSaXNrQXNzZXNzbWVudFwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcGF0aWVudCBvciBncm91cCB0aGUgcmlzayBhc3Nlc3NtZW50IGFwcGxpZXMgdG8uXHJcbiAgICovXHJcbiAgc3ViamVjdD86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFzc2Vzc21lbnQgcmVzdWx0cyBsb3NlIHZhbGlkaXR5IHRoZSBtb3JlIHRpbWUgZWxhcHNlcyBmcm9tIHdoZW4gdGhleSBhcmUgZmlyc3QgbWFkZS5cclxuICAgKi9cclxuICBkYXRlPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUmlza0Fzc2Vzc21lbnQuZGF0ZVxyXG4gICAqL1xyXG4gIF9kYXRlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBGb3IgYXNzZXNzbWVudHMgb3IgcHJvZ25vc2lzIHNwZWNpZmljIHRvIGEgcGFydGljdWxhciBjb25kaXRpb24sIGluZGljYXRlcyB0aGUgY29uZGl0aW9uIGJlaW5nIGFzc2Vzc2VkLlxyXG4gICAqL1xyXG4gIGNvbmRpdGlvbj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGVuY291bnRlciB3aGVyZSB0aGUgYXNzZXNzbWVudCB3YXMgcGVyZm9ybWVkLlxyXG4gICAqL1xyXG4gIGVuY291bnRlcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHByb3ZpZGVyIG9yIHNvZnR3YXJlIGFwcGxpY2F0aW9uIHRoYXQgcGVyZm9ybWVkIHRoZSBhc3Nlc3NtZW50LlxyXG4gICAqL1xyXG4gIHBlcmZvcm1lcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQnVzaW5lc3MgaWRlbnRpZmllciBhc3NpZ25lZCB0byB0aGUgcmlzayBhc3Nlc3NtZW50LlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbWV0aG9kIGNhbiBpbmZsdWVuY2UgdGhlIHJlc3VsdHMgb2YgdGhlIGFzc2Vzc21lbnQuXHJcbiAgICovXHJcbiAgbWV0aG9kPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIHNvdXJjZSBkYXRhIGNvbnNpZGVyZWQgYXMgcGFydCBvZiB0aGUgYXNzZXNzbWVudCAoRmFtaWx5SGlzdG9yeSwgT2JzZXJ2YXRpb25zLCBQcm9jZWR1cmVzLCBDb25kaXRpb25zLCBldGMuKS5cclxuICAgKi9cclxuICBiYXNpcz86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZXNjcmliZXMgdGhlIGV4cGVjdGVkIG91dGNvbWUgZm9yIHRoZSBzdWJqZWN0LlxyXG4gICAqL1xyXG4gIHByZWRpY3Rpb24/OiBmaGlyLlJpc2tBc3Nlc3NtZW50UHJlZGljdGlvbkFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogT25lIG9mIHRoZSBtYWluIHJlYXNvbnMgZm9yIGFzc2Vzc2luZyByaXNrcyBpcyB0byBpZGVudGlmeSB3aGV0aGVyIGludGVydmVudGlvbmFsIHN0ZXBzIGFyZSBuZWVkZWQgdG8gcmVkdWNlIHJpc2suXHJcbiAgICovXHJcbiAgbWl0aWdhdGlvbj86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBSaXNrQXNzZXNzbWVudC5taXRpZ2F0aW9uXHJcbiAgICovXHJcbiAgX21pdGlnYXRpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQW4gYXNzZXNzbWVudCBvZiB0aGUgbGlrZWx5IG91dGNvbWUocykgZm9yIGEgcGF0aWVudCBvciBvdGhlciBzdWJqZWN0IGFzIHdlbGwgYXMgdGhlIGxpa2VsaWhvb2Qgb2YgZWFjaCBvdXRjb21lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJpc2tBc3Nlc3NtZW50IGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdSaXNrQXNzZXNzbWVudCc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJSaXNrQXNzZXNzbWVudFwiO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXRpZW50IG9yIGdyb3VwIHRoZSByaXNrIGFzc2Vzc21lbnQgYXBwbGllcyB0by5cclxuICAgKi9cclxuICBwdWJsaWMgc3ViamVjdD86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgYXNzZXNzbWVudCByZXN1bHRzIGxvc2UgdmFsaWRpdHkgdGhlIG1vcmUgdGltZSBlbGFwc2VzIGZyb20gd2hlbiB0aGV5IGFyZSBmaXJzdCBtYWRlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkYXRlPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEZvciBhc3Nlc3NtZW50cyBvciBwcm9nbm9zaXMgc3BlY2lmaWMgdG8gYSBwYXJ0aWN1bGFyIGNvbmRpdGlvbiwgaW5kaWNhdGVzIHRoZSBjb25kaXRpb24gYmVpbmcgYXNzZXNzZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbmRpdGlvbj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZW5jb3VudGVyIHdoZXJlIHRoZSBhc3Nlc3NtZW50IHdhcyBwZXJmb3JtZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGVuY291bnRlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcHJvdmlkZXIgb3Igc29mdHdhcmUgYXBwbGljYXRpb24gdGhhdCBwZXJmb3JtZWQgdGhlIGFzc2Vzc21lbnQuXHJcbiAgICovXHJcbiAgcHVibGljIHBlcmZvcm1lcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBCdXNpbmVzcyBpZGVudGlmaWVyIGFzc2lnbmVkIHRvIHRoZSByaXNrIGFzc2Vzc21lbnQuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtZXRob2QgY2FuIGluZmx1ZW5jZSB0aGUgcmVzdWx0cyBvZiB0aGUgYXNzZXNzbWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgbWV0aG9kPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGUgc291cmNlIGRhdGEgY29uc2lkZXJlZCBhcyBwYXJ0IG9mIHRoZSBhc3Nlc3NtZW50IChGYW1pbHlIaXN0b3J5LCBPYnNlcnZhdGlvbnMsIFByb2NlZHVyZXMsIENvbmRpdGlvbnMsIGV0Yy4pLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBiYXNpczogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBEZXNjcmliZXMgdGhlIGV4cGVjdGVkIG91dGNvbWUgZm9yIHRoZSBzdWJqZWN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwcmVkaWN0aW9uOiBmaGlyLlJpc2tBc3Nlc3NtZW50UHJlZGljdGlvbltdO1xyXG4gIC8qKlxyXG4gICAqIE9uZSBvZiB0aGUgbWFpbiByZWFzb25zIGZvciBhc3Nlc3Npbmcgcmlza3MgaXMgdG8gaWRlbnRpZnkgd2hldGhlciBpbnRlcnZlbnRpb25hbCBzdGVwcyBhcmUgbmVlZGVkIHRvIHJlZHVjZSByaXNrLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBtaXRpZ2F0aW9uPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBSaXNrQXNzZXNzbWVudCAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFJpc2tBc3Nlc3NtZW50QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ1Jpc2tBc3Nlc3NtZW50JztcclxuICAgIGlmIChzb3VyY2VbJ3N1YmplY3QnXSkgeyB0aGlzLnN1YmplY3QgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnN1YmplY3QpOyB9XHJcbiAgICBpZiAoc291cmNlWydkYXRlJ10pIHsgdGhpcy5kYXRlID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLmRhdGV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2RhdGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5kYXRlKSB7IHRoaXMuZGF0ZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kYXRlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZGF0ZSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX2RhdGUgYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnY29uZGl0aW9uJ10pIHsgdGhpcy5jb25kaXRpb24gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmNvbmRpdGlvbik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2VuY291bnRlciddKSB7IHRoaXMuZW5jb3VudGVyID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5lbmNvdW50ZXIpOyB9XHJcbiAgICBpZiAoc291cmNlWydwZXJmb3JtZXInXSkgeyB0aGlzLnBlcmZvcm1lciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucGVyZm9ybWVyKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IG5ldyBmaGlyLklkZW50aWZpZXIoc291cmNlLmlkZW50aWZpZXIpOyB9XHJcbiAgICBpZiAoc291cmNlWydtZXRob2QnXSkgeyB0aGlzLm1ldGhvZCA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UubWV0aG9kKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYmFzaXMnXSkgeyB0aGlzLmJhc2lzID0gc291cmNlLmJhc2lzLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuYmFzaXMgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncHJlZGljdGlvbiddKSB7IHRoaXMucHJlZGljdGlvbiA9IHNvdXJjZS5wcmVkaWN0aW9uLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmlza0Fzc2Vzc21lbnRQcmVkaWN0aW9uKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucHJlZGljdGlvbiA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydtaXRpZ2F0aW9uJ10pIHsgdGhpcy5taXRpZ2F0aW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5taXRpZ2F0aW9ufSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19taXRpZ2F0aW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMubWl0aWdhdGlvbikgeyB0aGlzLm1pdGlnYXRpb24uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fbWl0aWdhdGlvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLm1pdGlnYXRpb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fbWl0aWdhdGlvbiBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1Jpc2tBc3Nlc3NtZW50JyB9XHJcbiAgICB0aGlzLnZSUygncmVzb3VyY2VUeXBlJyxleHApXHJcbiAgICB0aGlzLnZPUygnc3ViamVjdCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2RhdGUnLGV4cClcclxuICAgIHRoaXMudk9TKCdjb25kaXRpb24nLGV4cClcclxuICAgIHRoaXMudk9TKCdlbmNvdW50ZXInLGV4cClcclxuICAgIHRoaXMudk9TKCdwZXJmb3JtZXInLGV4cClcclxuICAgIHRoaXMudk9TKCdpZGVudGlmaWVyJyxleHApXHJcbiAgICB0aGlzLnZPUygnbWV0aG9kJyxleHApXHJcbiAgICB0aGlzLnZPQSgnYmFzaXMnLGV4cClcclxuICAgIHRoaXMudk9BKCdwcmVkaWN0aW9uJyxleHApXHJcbiAgICB0aGlzLnZPUygnbWl0aWdhdGlvbicsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19