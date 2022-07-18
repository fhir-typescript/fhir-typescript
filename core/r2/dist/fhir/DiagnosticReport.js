// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DiagnosticReport
import * as fhir from '../fhir.js';
// @ts-ignore
import { DiagnosticReportStatusVsValidation } from '../fhirValueSets/DiagnosticReportStatusVsValidation.js';
/**
 * Many diagnostic services include images in the report as part of their service.
 */
export class DiagnosticReportImage extends fhir.BackboneElement {
    /**
     * Default constructor for DiagnosticReportImage - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['comment']) {
            this.comment = new fhir.FhirString({ value: source.comment });
        }
        if (source['_comment']) {
            if (this.comment) {
                this.comment.addExtendedProperties(source._comment);
            }
            else {
                this.comment = new fhir.FhirString(source._comment);
            }
        }
        if (source['link']) {
            this.link = new fhir.Reference(source.link);
        }
        else {
            this.link = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'DiagnosticReport.image';
        }
        this.vOS('comment', exp);
        this.vRS('link', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
DiagnosticReportImage._fts_dataType = 'DiagnosticReportImage';
/**
 * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 */
export class DiagnosticReport extends fhir.DomainResource {
    /**
     * Default constructor for DiagnosticReport - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'DiagnosticReport';
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
        if (source['category']) {
            this.category = new fhir.CodeableConcept(source.category);
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        else {
            this.code = null;
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        else {
            this.subject = null;
        }
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source['effective']) {
            this.effective = source.effective;
        }
        else if (source['effectiveDateTime']) {
            this.effective = new fhir.FhirDateTime({ value: source.effectiveDateTime });
        }
        else if (source['effectivePeriod']) {
            this.effective = new fhir.Period(source.effectivePeriod);
        }
        else {
            this.effective = null;
        }
        if (source['issued']) {
            this.issued = new fhir.FhirInstant({ value: source.issued });
        }
        else {
            this.issued = null;
        }
        if (source['_issued']) {
            if (this.issued) {
                this.issued.addExtendedProperties(source._issued);
            }
            else {
                this.issued = new fhir.FhirInstant(source._issued);
            }
        }
        if (source['performer']) {
            this.performer = new fhir.Reference(source.performer);
        }
        else {
            this.performer = null;
        }
        if (source['request']) {
            this.request = source.request.map((x) => new fhir.Reference(x));
        }
        else {
            this.request = [];
        }
        if (source['specimen']) {
            this.specimen = source.specimen.map((x) => new fhir.Reference(x));
        }
        else {
            this.specimen = [];
        }
        if (source['result']) {
            this.result = source.result.map((x) => new fhir.Reference(x));
        }
        else {
            this.result = [];
        }
        if (source['imagingStudy']) {
            this.imagingStudy = source.imagingStudy.map((x) => new fhir.Reference(x));
        }
        else {
            this.imagingStudy = [];
        }
        if (source['image']) {
            this.image = source.image.map((x) => new fhir.DiagnosticReportImage(x));
        }
        else {
            this.image = [];
        }
        if (source['conclusion']) {
            this.conclusion = new fhir.FhirString({ value: source.conclusion });
        }
        if (source['_conclusion']) {
            if (this.conclusion) {
                this.conclusion.addExtendedProperties(source._conclusion);
            }
            else {
                this.conclusion = new fhir.FhirString(source._conclusion);
            }
        }
        if (source['codedDiagnosis']) {
            this.codedDiagnosis = source.codedDiagnosis.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.codedDiagnosis = [];
        }
        if (source['presentedForm']) {
            this.presentedForm = source.presentedForm.map((x) => new fhir.Attachment(x));
        }
        else {
            this.presentedForm = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'DiagnosticReport';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vRSV('status', exp, 'DiagnosticReportStatus', DiagnosticReportStatusVsValidation, 'r');
        this.vOS('category', exp);
        this.vRS('code', exp);
        this.vRS('subject', exp);
        this.vOS('encounter', exp);
        this.vRS('effective', exp);
        this.vRS('issued', exp);
        this.vRS('performer', exp);
        this.vOA('request', exp);
        this.vOA('specimen', exp);
        this.vOA('result', exp);
        this.vOA('imagingStudy', exp);
        this.vOA('image', exp);
        this.vOS('conclusion', exp);
        this.vOA('codedDiagnosis', exp);
        this.vOA('presentedForm', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
DiagnosticReport._fts_dataType = 'DiagnosticReport';
/**
 * Internal flag to properly serialize choice-type element DiagnosticReport.effective[x]
 */
DiagnosticReport._fts_effectiveIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlhZ25vc3RpY1JlcG9ydC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRGlhZ25vc3RpY1JlcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBbUI1Rzs7R0FFRztBQUNILE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxJQUFJLENBQUMsZUFBZTtJQWE3RDs7T0FFRztJQUNILFlBQVksU0FBNEMsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDbEcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDdkYsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUFFLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFFBQVMsQ0FBQyxDQUFDO2FBQUU7aUJBQ3RFO2dCQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUF3QyxDQUFDLENBQUM7YUFBRTtTQUM5RjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQUU7YUFDL0Q7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LEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUM3QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQTdKRDs7R0FFRztBQUM2Qiw4QkFBYSxHQUFVLGtCQUFrQixDQUFDO0FBaUMxRTs7R0FFRztBQUN1Qix1Q0FBc0IsR0FBUSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IERpYWdub3N0aWNSZXBvcnRcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IERpYWdub3N0aWNSZXBvcnRTdGF0dXNDb2RlcywgIERpYWdub3N0aWNSZXBvcnRTdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRGlhZ25vc3RpY1JlcG9ydFN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBEaWFnbm9zdGljUmVwb3J0U3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9EaWFnbm9zdGljUmVwb3J0U3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIERpYWdub3N0aWNSZXBvcnRJbWFnZSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBEaWFnbm9zdGljUmVwb3J0SW1hZ2VBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgcHJvdmlkZXIgb2YgdGhlIHJlcG9ydCBzaG91bGQgbWFrZSBhIGNvbW1lbnQgYWJvdXQgZWFjaCBpbWFnZSBpbmNsdWRlZCBpbiB0aGUgcmVwb3J0LlxyXG4gICAqL1xyXG4gIGNvbW1lbnQ/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRGlhZ25vc3RpY1JlcG9ydC5pbWFnZS5jb21tZW50XHJcbiAgICovXHJcbiAgX2NvbW1lbnQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgaW1hZ2Ugc291cmNlLlxyXG4gICAqL1xyXG4gIGxpbms6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogTWFueSBkaWFnbm9zdGljIHNlcnZpY2VzIGluY2x1ZGUgaW1hZ2VzIGluIHRoZSByZXBvcnQgYXMgcGFydCBvZiB0aGVpciBzZXJ2aWNlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERpYWdub3N0aWNSZXBvcnRJbWFnZSBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0RpYWdub3N0aWNSZXBvcnRJbWFnZSc7XHJcbiAgLyoqXHJcbiAgICogVGhlIHByb3ZpZGVyIG9mIHRoZSByZXBvcnQgc2hvdWxkIG1ha2UgYSBjb21tZW50IGFib3V0IGVhY2ggaW1hZ2UgaW5jbHVkZWQgaW4gdGhlIHJlcG9ydC5cclxuICAgKi9cclxuICBwdWJsaWMgY29tbWVudD86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVmZXJlbmNlIHRvIHRoZSBpbWFnZSBzb3VyY2UuXHJcbiAgICovXHJcbiAgcHVibGljIGxpbms6IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgRGlhZ25vc3RpY1JlcG9ydEltYWdlIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8RGlhZ25vc3RpY1JlcG9ydEltYWdlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2NvbW1lbnQnXSkgeyB0aGlzLmNvbW1lbnQgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmNvbW1lbnR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NvbW1lbnQnXSkge1xyXG4gICAgICBpZiAodGhpcy5jb21tZW50KSB7IHRoaXMuY29tbWVudC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jb21tZW50ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY29tbWVudCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9jb21tZW50IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydsaW5rJ10pIHsgdGhpcy5saW5rID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5saW5rKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMubGluayA9IG51bGw7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdEaWFnbm9zdGljUmVwb3J0LmltYWdlJyB9XHJcbiAgICB0aGlzLnZPUygnY29tbWVudCcsZXhwKVxyXG4gICAgdGhpcy52UlMoJ2xpbmsnLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBEaWFnbm9zdGljUmVwb3J0IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERpYWdub3N0aWNSZXBvcnRBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJEaWFnbm9zdGljUmVwb3J0XCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5lZWQgdG8ga25vdyB3aGF0IGlkZW50aWZpZXIgdG8gdXNlIHdoZW4gbWFraW5nIHF1ZXJpZXMgYWJvdXQgdGhpcyByZXBvcnQgZnJvbSB0aGUgc291cmNlIGxhYm9yYXRvcnksIGFuZCBmb3IgbGlua2luZyB0byB0aGUgcmVwb3J0IG91dHNpZGUgRkhJUiBjb250ZXh0LlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERpYWdub3N0aWMgc2VydmljZXMgcm91dGluZWx5IGlzc3VlIHByb3Zpc2lvbmFsL2luY29tcGxldGUgcmVwb3J0cywgYW5kIHNvbWV0aW1lcyB3aXRoZHJhdyBwcmV2aW91c2x5IHJlbGVhc2VkIHJlcG9ydHMuXHJcbiAgICovXHJcbiAgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPERpYWdub3N0aWNSZXBvcnRTdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRGlhZ25vc3RpY1JlcG9ydC5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIGNvZGUgdGhhdCBjbGFzc2lmaWVzIHRoZSBjbGluaWNhbCBkaXNjaXBsaW5lLCBkZXBhcnRtZW50IG9yIGRpYWdub3N0aWMgc2VydmljZSB0aGF0IGNyZWF0ZWQgdGhlIHJlcG9ydCAoZS5nLiBjYXJkaW9sb2d5LCBiaW9jaGVtaXN0cnksIGhlbWF0b2xvZ3ksIE1SSSkuIFRoaXMgaXMgdXNlZCBmb3Igc2VhcmNoaW5nLCBzb3J0aW5nIGFuZCBkaXNwbGF5IHB1cnBvc2VzLlxyXG4gICAqL1xyXG4gIGNhdGVnb3J5PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGNvZGUgb3IgbmFtZSB0aGF0IGRlc2NyaWJlcyB0aGlzIGRpYWdub3N0aWMgcmVwb3J0LlxyXG4gICAqL1xyXG4gIGNvZGU6IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFNIQUxMIGtub3cgdGhlIHN1YmplY3QgY29udGV4dC5cclxuICAgKi9cclxuICBzdWJqZWN0OiBmaGlyLlJlZmVyZW5jZUFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgbGluayB0byB0aGUgaGVhbHRoIGNhcmUgZXZlbnQgKGVuY291bnRlcikgd2hlbiB0aGUgb3JkZXIgd2FzIG1hZGUuXHJcbiAgICovXHJcbiAgZW5jb3VudGVyPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOZWVkIHRvIGtub3cgd2hlcmUgaW4gdGhlIHBhdGllbnQgaGlzdG9yeSB0byBmaWxlL3ByZXNlbnQgdGhpcyByZXBvcnQuXHJcbiAgICovXHJcbiAgZWZmZWN0aXZlPzogZmhpci5GaGlyRGF0ZVRpbWV8Zmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5lZWQgdG8ga25vdyB3aGVyZSBpbiB0aGUgcGF0aWVudCBoaXN0b3J5IHRvIGZpbGUvcHJlc2VudCB0aGlzIHJlcG9ydC5cclxuICAgKi9cclxuICBlZmZlY3RpdmVEYXRlVGltZT86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogTmVlZCB0byBrbm93IHdoZXJlIGluIHRoZSBwYXRpZW50IGhpc3RvcnkgdG8gZmlsZS9wcmVzZW50IHRoaXMgcmVwb3J0LlxyXG4gICAqL1xyXG4gIGVmZmVjdGl2ZVBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQ2xpbmljaWFucyBuZWVkIHRvIGJlIGFibGUgdG8gY2hlY2sgdGhlIGRhdGUgdGhhdCB0aGUgcmVwb3J0IHdhcyByZWxlYXNlZC5cclxuICAgKi9cclxuICBpc3N1ZWQ6IGZoaXIuRmhpckluc3RhbnR8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRGlhZ25vc3RpY1JlcG9ydC5pc3N1ZWRcclxuICAgKi9cclxuICBfaXNzdWVkPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBOZWVkIHRvIGtub3cgd2hvbSB0byBjb250YWN0IGlmIHRoZXJlIGFyZSBxdWVyaWVzIGFib3V0IHRoZSByZXN1bHRzLiBBbHNvIG1heSBuZWVkIHRvIHRyYWNrIHRoZSBzb3VyY2Ugb2YgcmVwb3J0cyBmb3Igc2Vjb25kYXJ5IGRhdGEgYW5hbHlzaXMuXHJcbiAgICovXHJcbiAgcGVyZm9ybWVyOiBmaGlyLlJlZmVyZW5jZUFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBOZWVkIHRvIGJlIGFibGUgdG8gdHJhY2sgY29tcGxldGlvbiBvZiByZXF1ZXN0cyBiYXNlZCBvbiByZXBvcnRzIGlzc3VlZCBhbmQgYWxzbyB0byByZXBvcnQgd2hhdCBkaWFnbm9zdGljIHRlc3RzIHdlcmUgcmVxdWVzdGVkIChub3QgYWx3YXlzIHRoZSBzYW1lIGFzIHdoYXQgaXMgZGVsaXZlcmVkKS5cclxuICAgKi9cclxuICByZXF1ZXN0PzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5lZWQgdG8gYmUgYWJsZSB0byByZXBvcnQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvbGxlY3RlZCBzcGVjaW1lbnMgb24gd2hpY2ggdGhlIHJlcG9ydCBpcyBiYXNlZC5cclxuICAgKi9cclxuICBzcGVjaW1lbj86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOZWVkIHRvIHN1cHBvcnQgaW5kaXZpZHVhbCByZXN1bHRzLCBvciByZXBvcnQgZ3JvdXBzIG9mIHJlc3VsdHMsIHdoZXJlIHRoZSByZXN1bHQgZ3JvdXBpbmcgaXMgYXJiaXRyYXJ5LCBidXQgbWVhbmluZ2Z1bC4gVGhpcyBzdHJ1Y3R1cmUgaXMgcmVjdXJzaXZlIC0gb2JzZXJ2YXRpb25zIGNhbiBjb250YWluIG9ic2VydmF0aW9ucy5cclxuICAgKi9cclxuICByZXN1bHQ/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogT25lIG9yIG1vcmUgbGlua3MgdG8gZnVsbCBkZXRhaWxzIG9mIGFueSBpbWFnaW5nIHBlcmZvcm1lZCBkdXJpbmcgdGhlIGRpYWdub3N0aWMgaW52ZXN0aWdhdGlvbi4gVHlwaWNhbGx5LCB0aGlzIGlzIGltYWdpbmcgcGVyZm9ybWVkIGJ5IERJQ09NIGVuYWJsZWQgbW9kYWxpdGllcywgYnV0IHRoaXMgaXMgbm90IHJlcXVpcmVkLiBBIGZ1bGx5IGVuYWJsZWQgUEFDUyB2aWV3ZXIgY2FuIHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIHByb3ZpZGUgdmlld3Mgb2YgdGhlIHNvdXJjZSBpbWFnZXMuXHJcbiAgICovXHJcbiAgaW1hZ2luZ1N0dWR5PzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE1hbnkgZGlhZ25vc3RpYyBzZXJ2aWNlcyBpbmNsdWRlIGltYWdlcyBpbiB0aGUgcmVwb3J0IGFzIHBhcnQgb2YgdGhlaXIgc2VydmljZS5cclxuICAgKi9cclxuICBpbWFnZT86IGZoaXIuRGlhZ25vc3RpY1JlcG9ydEltYWdlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOZWVkIHRvIGJlIGFibGUgdG8gcHJvdmlkZSBhIGNvbmNsdXNpb24gdGhhdCBpcyBub3QgbG9zdCBhbW9uZyB0aGUgYmFzaWMgcmVzdWx0IGRhdGEuXHJcbiAgICovXHJcbiAgY29uY2x1c2lvbj86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEaWFnbm9zdGljUmVwb3J0LmNvbmNsdXNpb25cclxuICAgKi9cclxuICBfY29uY2x1c2lvbj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ29kZXMgZm9yIHRoZSBjb25jbHVzaW9uLlxyXG4gICAqL1xyXG4gIGNvZGVkRGlhZ25vc2lzPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEdpdmVzIExhYm9yYXRvcnkgdGhlIGFiaWxpdHkgdG8gcHJvdmlkZSBpdHMgb3duIGZ1bGx5IGZvcm1hdHRlZCByZXBvcnQgZm9yIGNsaW5pY2FsIGZpZGVsaXR5LlxyXG4gICAqL1xyXG4gIHByZXNlbnRlZEZvcm0/OiBmaGlyLkF0dGFjaG1lbnRBcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIGZpbmRpbmdzIGFuZCBpbnRlcnByZXRhdGlvbiBvZiBkaWFnbm9zdGljICB0ZXN0cyBwZXJmb3JtZWQgb24gcGF0aWVudHMsIGdyb3VwcyBvZiBwYXRpZW50cywgZGV2aWNlcywgYW5kIGxvY2F0aW9ucywgYW5kL29yIHNwZWNpbWVucyBkZXJpdmVkIGZyb20gdGhlc2UuIFRoZSByZXBvcnQgaW5jbHVkZXMgY2xpbmljYWwgY29udGV4dCBzdWNoIGFzIHJlcXVlc3RpbmcgYW5kIHByb3ZpZGVyIGluZm9ybWF0aW9uLCBhbmQgc29tZSBtaXggb2YgYXRvbWljIHJlc3VsdHMsIGltYWdlcywgdGV4dHVhbCBhbmQgY29kZWQgaW50ZXJwcmV0YXRpb25zLCBhbmQgZm9ybWF0dGVkIHJlcHJlc2VudGF0aW9uIG9mIGRpYWdub3N0aWMgcmVwb3J0cy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEaWFnbm9zdGljUmVwb3J0IGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdEaWFnbm9zdGljUmVwb3J0JztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIkRpYWdub3N0aWNSZXBvcnRcIjtcclxuICAvKipcclxuICAgKiBOZWVkIHRvIGtub3cgd2hhdCBpZGVudGlmaWVyIHRvIHVzZSB3aGVuIG1ha2luZyBxdWVyaWVzIGFib3V0IHRoaXMgcmVwb3J0IGZyb20gdGhlIHNvdXJjZSBsYWJvcmF0b3J5LCBhbmQgZm9yIGxpbmtpbmcgdG8gdGhlIHJlcG9ydCBvdXRzaWRlIEZISVIgY29udGV4dC5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogRGlhZ25vc3RpYyBzZXJ2aWNlcyByb3V0aW5lbHkgaXNzdWUgcHJvdmlzaW9uYWwvaW5jb21wbGV0ZSByZXBvcnRzLCBhbmQgc29tZXRpbWVzIHdpdGhkcmF3IHByZXZpb3VzbHkgcmVsZWFzZWQgcmVwb3J0cy5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPERpYWdub3N0aWNSZXBvcnRTdGF0dXNDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBBIGNvZGUgdGhhdCBjbGFzc2lmaWVzIHRoZSBjbGluaWNhbCBkaXNjaXBsaW5lLCBkZXBhcnRtZW50IG9yIGRpYWdub3N0aWMgc2VydmljZSB0aGF0IGNyZWF0ZWQgdGhlIHJlcG9ydCAoZS5nLiBjYXJkaW9sb2d5LCBiaW9jaGVtaXN0cnksIGhlbWF0b2xvZ3ksIE1SSSkuIFRoaXMgaXMgdXNlZCBmb3Igc2VhcmNoaW5nLCBzb3J0aW5nIGFuZCBkaXNwbGF5IHB1cnBvc2VzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjYXRlZ29yeT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGNvZGUgb3IgbmFtZSB0aGF0IGRlc2NyaWJlcyB0aGlzIGRpYWdub3N0aWMgcmVwb3J0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2RlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFNIQUxMIGtub3cgdGhlIHN1YmplY3QgY29udGV4dC5cclxuICAgKi9cclxuICBwdWJsaWMgc3ViamVjdDogZmhpci5SZWZlcmVuY2V8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgbGluayB0byB0aGUgaGVhbHRoIGNhcmUgZXZlbnQgKGVuY291bnRlcikgd2hlbiB0aGUgb3JkZXIgd2FzIG1hZGUuXHJcbiAgICovXHJcbiAgcHVibGljIGVuY291bnRlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOZWVkIHRvIGtub3cgd2hlcmUgaW4gdGhlIHBhdGllbnQgaGlzdG9yeSB0byBmaWxlL3ByZXNlbnQgdGhpcyByZXBvcnQuXHJcbiAgICovXHJcbiAgcHVibGljIGVmZmVjdGl2ZTogKGZoaXIuRmhpckRhdGVUaW1lfGZoaXIuUGVyaW9kKXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIGZsYWcgdG8gcHJvcGVybHkgc2VyaWFsaXplIGNob2ljZS10eXBlIGVsZW1lbnQgRGlhZ25vc3RpY1JlcG9ydC5lZmZlY3RpdmVbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfZWZmZWN0aXZlSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogQ2xpbmljaWFucyBuZWVkIHRvIGJlIGFibGUgdG8gY2hlY2sgdGhlIGRhdGUgdGhhdCB0aGUgcmVwb3J0IHdhcyByZWxlYXNlZC5cclxuICAgKi9cclxuICBwdWJsaWMgaXNzdWVkOiBmaGlyLkZoaXJJbnN0YW50fG51bGw7XHJcbiAgLyoqXHJcbiAgICogTmVlZCB0byBrbm93IHdob20gdG8gY29udGFjdCBpZiB0aGVyZSBhcmUgcXVlcmllcyBhYm91dCB0aGUgcmVzdWx0cy4gQWxzbyBtYXkgbmVlZCB0byB0cmFjayB0aGUgc291cmNlIG9mIHJlcG9ydHMgZm9yIHNlY29uZGFyeSBkYXRhIGFuYWx5c2lzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJmb3JtZXI6IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogTmVlZCB0byBiZSBhYmxlIHRvIHRyYWNrIGNvbXBsZXRpb24gb2YgcmVxdWVzdHMgYmFzZWQgb24gcmVwb3J0cyBpc3N1ZWQgYW5kIGFsc28gdG8gcmVwb3J0IHdoYXQgZGlhZ25vc3RpYyB0ZXN0cyB3ZXJlIHJlcXVlc3RlZCAobm90IGFsd2F5cyB0aGUgc2FtZSBhcyB3aGF0IGlzIGRlbGl2ZXJlZCkuXHJcbiAgICovXHJcbiAgcHVibGljIHJlcXVlc3Q6IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogTmVlZCB0byBiZSBhYmxlIHRvIHJlcG9ydCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY29sbGVjdGVkIHNwZWNpbWVucyBvbiB3aGljaCB0aGUgcmVwb3J0IGlzIGJhc2VkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzcGVjaW1lbjogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBOZWVkIHRvIHN1cHBvcnQgaW5kaXZpZHVhbCByZXN1bHRzLCBvciByZXBvcnQgZ3JvdXBzIG9mIHJlc3VsdHMsIHdoZXJlIHRoZSByZXN1bHQgZ3JvdXBpbmcgaXMgYXJiaXRyYXJ5LCBidXQgbWVhbmluZ2Z1bC4gVGhpcyBzdHJ1Y3R1cmUgaXMgcmVjdXJzaXZlIC0gb2JzZXJ2YXRpb25zIGNhbiBjb250YWluIG9ic2VydmF0aW9ucy5cclxuICAgKi9cclxuICBwdWJsaWMgcmVzdWx0OiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIE9uZSBvciBtb3JlIGxpbmtzIHRvIGZ1bGwgZGV0YWlscyBvZiBhbnkgaW1hZ2luZyBwZXJmb3JtZWQgZHVyaW5nIHRoZSBkaWFnbm9zdGljIGludmVzdGlnYXRpb24uIFR5cGljYWxseSwgdGhpcyBpcyBpbWFnaW5nIHBlcmZvcm1lZCBieSBESUNPTSBlbmFibGVkIG1vZGFsaXRpZXMsIGJ1dCB0aGlzIGlzIG5vdCByZXF1aXJlZC4gQSBmdWxseSBlbmFibGVkIFBBQ1Mgdmlld2VyIGNhbiB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBwcm92aWRlIHZpZXdzIG9mIHRoZSBzb3VyY2UgaW1hZ2VzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpbWFnaW5nU3R1ZHk6IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogTWFueSBkaWFnbm9zdGljIHNlcnZpY2VzIGluY2x1ZGUgaW1hZ2VzIGluIHRoZSByZXBvcnQgYXMgcGFydCBvZiB0aGVpciBzZXJ2aWNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpbWFnZTogZmhpci5EaWFnbm9zdGljUmVwb3J0SW1hZ2VbXTtcclxuICAvKipcclxuICAgKiBOZWVkIHRvIGJlIGFibGUgdG8gcHJvdmlkZSBhIGNvbmNsdXNpb24gdGhhdCBpcyBub3QgbG9zdCBhbW9uZyB0aGUgYmFzaWMgcmVzdWx0IGRhdGEuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbmNsdXNpb24/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIENvZGVzIGZvciB0aGUgY29uY2x1c2lvbi5cclxuICAgKi9cclxuICBwdWJsaWMgY29kZWREaWFnbm9zaXM6IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogR2l2ZXMgTGFib3JhdG9yeSB0aGUgYWJpbGl0eSB0byBwcm92aWRlIGl0cyBvd24gZnVsbHkgZm9ybWF0dGVkIHJlcG9ydCBmb3IgY2xpbmljYWwgZmlkZWxpdHkuXHJcbiAgICovXHJcbiAgcHVibGljIHByZXNlbnRlZEZvcm06IGZoaXIuQXR0YWNobWVudFtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIERpYWdub3N0aWNSZXBvcnQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxEaWFnbm9zdGljUmVwb3J0QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ0RpYWdub3N0aWNSZXBvcnQnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxEaWFnbm9zdGljUmVwb3J0U3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN0YXR1c30pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzKSB7IHRoaXMuc3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPERpYWdub3N0aWNSZXBvcnRTdGF0dXNDb2RlVHlwZT4oc291cmNlLl9zdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NhdGVnb3J5J10pIHsgdGhpcy5jYXRlZ29yeSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuY2F0ZWdvcnkpOyB9XHJcbiAgICBpZiAoc291cmNlWydjb2RlJ10pIHsgdGhpcy5jb2RlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5jb2RlKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29kZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N1YmplY3QnXSkgeyB0aGlzLnN1YmplY3QgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnN1YmplY3QpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdWJqZWN0ID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZW5jb3VudGVyJ10pIHsgdGhpcy5lbmNvdW50ZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmVuY291bnRlcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2VmZmVjdGl2ZSddKSB7IHRoaXMuZWZmZWN0aXZlID0gc291cmNlLmVmZmVjdGl2ZTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydlZmZlY3RpdmVEYXRlVGltZSddKSB7IHRoaXMuZWZmZWN0aXZlID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLmVmZmVjdGl2ZURhdGVUaW1lfSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnZWZmZWN0aXZlUGVyaW9kJ10pIHsgdGhpcy5lZmZlY3RpdmUgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLmVmZmVjdGl2ZVBlcmlvZCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmVmZmVjdGl2ZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ2lzc3VlZCddKSB7IHRoaXMuaXNzdWVkID0gbmV3IGZoaXIuRmhpckluc3RhbnQoe3ZhbHVlOiBzb3VyY2UuaXNzdWVkfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlzc3VlZCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19pc3N1ZWQnXSkge1xyXG4gICAgICBpZiAodGhpcy5pc3N1ZWQpIHsgdGhpcy5pc3N1ZWQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5faXNzdWVkISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuaXNzdWVkID0gbmV3IGZoaXIuRmhpckluc3RhbnQoc291cmNlLl9pc3N1ZWQgYXMgUGFydGlhbDxmaGlyLkZoaXJJbnN0YW50QXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwZXJmb3JtZXInXSkgeyB0aGlzLnBlcmZvcm1lciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucGVyZm9ybWVyKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucGVyZm9ybWVyID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVxdWVzdCddKSB7IHRoaXMucmVxdWVzdCA9IHNvdXJjZS5yZXF1ZXN0Lm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucmVxdWVzdCA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydzcGVjaW1lbiddKSB7IHRoaXMuc3BlY2ltZW4gPSBzb3VyY2Uuc3BlY2ltZW4ubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zcGVjaW1lbiA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydyZXN1bHQnXSkgeyB0aGlzLnJlc3VsdCA9IHNvdXJjZS5yZXN1bHQubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5yZXN1bHQgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnaW1hZ2luZ1N0dWR5J10pIHsgdGhpcy5pbWFnaW5nU3R1ZHkgPSBzb3VyY2UuaW1hZ2luZ1N0dWR5Lm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaW1hZ2luZ1N0dWR5ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2ltYWdlJ10pIHsgdGhpcy5pbWFnZSA9IHNvdXJjZS5pbWFnZS5tYXAoKHgpID0+IG5ldyBmaGlyLkRpYWdub3N0aWNSZXBvcnRJbWFnZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmltYWdlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2NvbmNsdXNpb24nXSkgeyB0aGlzLmNvbmNsdXNpb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmNvbmNsdXNpb259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NvbmNsdXNpb24nXSkge1xyXG4gICAgICBpZiAodGhpcy5jb25jbHVzaW9uKSB7IHRoaXMuY29uY2x1c2lvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jb25jbHVzaW9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY29uY2x1c2lvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9jb25jbHVzaW9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjb2RlZERpYWdub3NpcyddKSB7IHRoaXMuY29kZWREaWFnbm9zaXMgPSBzb3VyY2UuY29kZWREaWFnbm9zaXMubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb2RlZERpYWdub3NpcyA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydwcmVzZW50ZWRGb3JtJ10pIHsgdGhpcy5wcmVzZW50ZWRGb3JtID0gc291cmNlLnByZXNlbnRlZEZvcm0ubWFwKCh4KSA9PiBuZXcgZmhpci5BdHRhY2htZW50KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucHJlc2VudGVkRm9ybSA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnRGlhZ25vc3RpY1JlcG9ydCcgfVxyXG4gICAgdGhpcy52UlMoJ3Jlc291cmNlVHlwZScsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2lkZW50aWZpZXInLGV4cClcclxuICAgIHRoaXMudlJTVignc3RhdHVzJyxleHAsJ0RpYWdub3N0aWNSZXBvcnRTdGF0dXMnLERpYWdub3N0aWNSZXBvcnRTdGF0dXNWc1ZhbGlkYXRpb24sJ3InKVxyXG4gICAgdGhpcy52T1MoJ2NhdGVnb3J5JyxleHApXHJcbiAgICB0aGlzLnZSUygnY29kZScsZXhwKVxyXG4gICAgdGhpcy52UlMoJ3N1YmplY3QnLGV4cClcclxuICAgIHRoaXMudk9TKCdlbmNvdW50ZXInLGV4cClcclxuICAgIHRoaXMudlJTKCdlZmZlY3RpdmUnLGV4cClcclxuICAgIHRoaXMudlJTKCdpc3N1ZWQnLGV4cClcclxuICAgIHRoaXMudlJTKCdwZXJmb3JtZXInLGV4cClcclxuICAgIHRoaXMudk9BKCdyZXF1ZXN0JyxleHApXHJcbiAgICB0aGlzLnZPQSgnc3BlY2ltZW4nLGV4cClcclxuICAgIHRoaXMudk9BKCdyZXN1bHQnLGV4cClcclxuICAgIHRoaXMudk9BKCdpbWFnaW5nU3R1ZHknLGV4cClcclxuICAgIHRoaXMudk9BKCdpbWFnZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2NvbmNsdXNpb24nLGV4cClcclxuICAgIHRoaXMudk9BKCdjb2RlZERpYWdub3NpcycsZXhwKVxyXG4gICAgdGhpcy52T0EoJ3ByZXNlbnRlZEZvcm0nLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==