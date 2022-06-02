// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Flag
import * as fhir from '../fhir.js';
// @ts-ignore
import { FlagStatusCodes } from '../fhirValueSets/FlagStatusCodes.js';
/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
export class Flag extends fhir.DomainResource {
    /**
     * Default constructor for Flag - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Flag';
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
            this.category = source.category.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.category = [];
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
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source['author']) {
            this.author = new fhir.Reference(source.author);
        }
    }
    /**
     * Required-bound Value Set for status (Flag.status)
     */
    static get statusRequiredCodes() {
        return FlagStatusCodes;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'Flag';
        }
        if (!this['resourceType']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType fhir: Flag.resourceType:"Flag"', expression: [expression] });
        }
        if (this["identifier"]) {
            this.identifier.forEach((x, i) => { issues.push(...x.doModelValidation(expression + `.identifier[${i}]`)); });
        }
        if (!this['status']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status fhir: Flag.status:code', expression: [expression] });
        }
        if (this['status'] && (!Object.values(FlagStatusCodes).includes(this.status.value))) {
            issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'status (Flag.status) of type code is missing code for Required binding to: FlagStatus', expression: [expression] });
        }
        if (this["status"]) {
            issues.push(...this.status.doModelValidation(expression + '.status'));
        }
        if (this["category"]) {
            this.category.forEach((x, i) => { issues.push(...x.doModelValidation(expression + `.category[${i}]`)); });
        }
        if (!this['code']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property code fhir: Flag.code:CodeableConcept', expression: [expression] });
        }
        if (this["code"]) {
            issues.push(...this.code.doModelValidation(expression + '.code'));
        }
        if (!this['subject']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property subject fhir: Flag.subject:Reference', expression: [expression] });
        }
        if (this["subject"]) {
            issues.push(...this.subject.doModelValidation(expression + '.subject'));
        }
        if (this["period"]) {
            issues.push(...this.period.doModelValidation(expression + '.period'));
        }
        if (this["encounter"]) {
            issues.push(...this.encounter.doModelValidation(expression + '.encounter'));
        }
        if (this["author"]) {
            issues.push(...this.author.doModelValidation(expression + '.author'));
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Flag._fts_dataType = 'Flag';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhZy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRmxhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxzQkFBc0I7QUFFdEIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxlQUFlLEVBQXVCLE1BQU0scUNBQXFDLENBQUM7QUF1RDNGOztHQUVHO0FBQ0gsTUFBTSxPQUFPLElBQUssU0FBUSxJQUFJLENBQUMsY0FBYztJQXlDM0M7O09BRUc7SUFDSCxZQUFZLFNBQTJCLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ2pGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2hHO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFxQixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2pHO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFD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XG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IEZsYWdcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEZsYWdTdGF0dXNDb2RpbmdzLCBGbGFnU3RhdHVzQ29kaW5nVHlwZSx9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRmxhZ1N0YXR1c0NvZGluZ3MuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEZsYWdTdGF0dXNDb2RlcywgIEZsYWdTdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRmxhZ1N0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBGbGFnQ2F0ZWdvcnlDb2RpbmdzLCBGbGFnQ2F0ZWdvcnlDb2RpbmdUeXBlLH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9GbGFnQ2F0ZWdvcnlDb2RpbmdzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBGbGFnQ2F0ZWdvcnlDb2RlcywgIEZsYWdDYXRlZ29yeUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9GbGFnQ2F0ZWdvcnlDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRmxhZ0NvZGluZ3MsIEZsYWdDb2RpbmdUeXBlLH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9GbGFnQ29kaW5ncy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRmxhZ0NvZGVzLCAgRmxhZ0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9GbGFnQ29kZXMuanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgRmxhZyB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGbGFnQXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiRmxhZ1wifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGlzIGEgYnVzaW5lc3MgaWRlbnRpZmllciwgbm90IGEgcmVzb3VyY2UgaWRlbnRpZmllciAoc2VlIFtkaXNjdXNzaW9uXShyZXNvdXJjZS5odG1sI2lkZW50aWZpZXJzKSkuICBJdCBpcyBiZXN0IHByYWN0aWNlIGZvciB0aGUgaWRlbnRpZmllciB0byBvbmx5IGFwcGVhciBvbiBhIHNpbmdsZSByZXNvdXJjZSBpbnN0YW5jZSwgaG93ZXZlciBidXNpbmVzcyBwcmFjdGljZXMgbWF5IG9jY2FzaW9uYWxseSBkaWN0YXRlIHRoYXQgbXVsdGlwbGUgcmVzb3VyY2UgaW5zdGFuY2VzIHdpdGggdGhlIHNhbWUgaWRlbnRpZmllciBjYW4gZXhpc3QgLSBwb3NzaWJseSBldmVuIHdpdGggZGlmZmVyZW50IHJlc291cmNlIHR5cGVzLiAgRm9yIGV4YW1wbGUsIG11bHRpcGxlIFBhdGllbnQgYW5kIGEgUGVyc29uIHJlc291cmNlIGluc3RhbmNlIG1pZ2h0IHNoYXJlIHRoZSBzYW1lIHNvY2lhbCBpbnN1cmFuY2UgbnVtYmVyLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSB0aGUgc3RhdHVzIGNvbnRhaW5zIGNvZGVzIHRoYXQgbWFyayB0aGUgcmVzb3VyY2UgYXMgbm90IGN1cnJlbnRseSB2YWxpZC5cclxuICAgKi9cclxuICBzdGF0dXM6IGZoaXIuRmhpckNvZGU8RmxhZ1N0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBGbGFnLnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2YWx1ZSBzZXQgd2lsbCBvZnRlbiBuZWVkIHRvIGJlIGFkanVzdGVkIGJhc2VkIG9uIGxvY2FsIGJ1c2luZXNzIHJ1bGVzIGFuZCB1c2FnZSBjb250ZXh0LlxyXG4gICAqL1xyXG4gIGNhdGVnb3J5PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIG5vbi1jb2RlZCwgdXNlIENvZGVhYmxlQ29uY2VwdC50ZXh0LiAgVGhpcyBlbGVtZW50IHNob3VsZCBhbHdheXMgYmUgaW5jbHVkZWQgaW4gdGhlIG5hcnJhdGl2ZS5cclxuICAgKi9cclxuICBjb2RlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgcGF0aWVudCwgbG9jYXRpb24sIGdyb3VwLCBvcmdhbml6YXRpb24sIG9yIHByYWN0aXRpb25lciBldGMuIHRoaXMgaXMgYWJvdXQgcmVjb3JkIHRoaXMgZmxhZyBpcyBhc3NvY2lhdGVkIHdpdGguXHJcbiAgICovXHJcbiAgc3ViamVjdDogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBlcmlvZCBvZiB0aW1lIGZyb20gdGhlIGFjdGl2YXRpb24gb2YgdGhlIGZsYWcgdG8gaW5hY3RpdmF0aW9uIG9mIHRoZSBmbGFnLiBJZiB0aGUgZmxhZyBpcyBhY3RpdmUsIHRoZSBlbmQgb2YgdGhlIHBlcmlvZCBzaG91bGQgYmUgdW5zcGVjaWZpZWQuXHJcbiAgICovXHJcbiAgcGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiBib3RoIEZsYWcuZW5jb3VudGVyIGFuZCBGbGFnLnBlcmlvZCBhcmUgdmFsdWVkLCB0aGVuIEZsYWcucGVyaW9kLnN0YXJ0IHNoYWxsIG5vdCBiZSBiZWZvcmUgRW5jb3VudGVyLnBlcmlvZC5zdGFydCBhbmQgRmxhZy5wZXJpb2QuZW5kIHNoYWxsIG5vdCBiZSBhZnRlciBFbmNvdW50ZXIucGVyaW9kLmVuZC5cclxuICAgKi9cclxuICBlbmNvdW50ZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJzb24sIG9yZ2FuaXphdGlvbiBvciBkZXZpY2UgdGhhdCBjcmVhdGVkIHRoZSBmbGFnLlxyXG4gICAqL1xyXG4gIGF1dGhvcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm9zcGVjdGl2ZSB3YXJuaW5ncyBvZiBwb3RlbnRpYWwgaXNzdWVzIHdoZW4gcHJvdmlkaW5nIGNhcmUgdG8gdGhlIHBhdGllbnQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxhZyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRmxhZyc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJGbGFnXCI7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyBhIGJ1c2luZXNzIGlkZW50aWZpZXIsIG5vdCBhIHJlc291cmNlIGlkZW50aWZpZXIgKHNlZSBbZGlzY3Vzc2lvbl0ocmVzb3VyY2UuaHRtbCNpZGVudGlmaWVycykpLiAgSXQgaXMgYmVzdCBwcmFjdGljZSBmb3IgdGhlIGlkZW50aWZpZXIgdG8gb25seSBhcHBlYXIgb24gYSBzaW5nbGUgcmVzb3VyY2UgaW5zdGFuY2UsIGhvd2V2ZXIgYnVzaW5lc3MgcHJhY3RpY2VzIG1heSBvY2Nhc2lvbmFsbHkgZGljdGF0ZSB0aGF0IG11bHRpcGxlIHJlc291cmNlIGluc3RhbmNlcyB3aXRoIHRoZSBzYW1lIGlkZW50aWZpZXIgY2FuIGV4aXN0IC0gcG9zc2libHkgZXZlbiB3aXRoIGRpZmZlcmVudCByZXNvdXJjZSB0eXBlcy4gIEZvciBleGFtcGxlLCBtdWx0aXBsZSBQYXRpZW50IGFuZCBhIFBlcnNvbiByZXNvdXJjZSBpbnN0YW5jZSBtaWdodCBzaGFyZSB0aGUgc2FtZSBzb2NpYWwgaW5zdXJhbmNlIG51bWJlci5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgY29kZXMgdGhhdCBtYXJrIHRoZSByZXNvdXJjZSBhcyBub3QgY3VycmVudGx5IHZhbGlkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM6IGZoaXIuRmhpckNvZGU8RmxhZ1N0YXR1c0NvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2YWx1ZSBzZXQgd2lsbCBvZnRlbiBuZWVkIHRvIGJlIGFkanVzdGVkIGJhc2VkIG9uIGxvY2FsIGJ1c2luZXNzIHJ1bGVzIGFuZCB1c2FnZSBjb250ZXh0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjYXRlZ29yeTogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBJZiBub24tY29kZWQsIHVzZSBDb2RlYWJsZUNvbmNlcHQudGV4dC4gIFRoaXMgZWxlbWVudCBzaG91bGQgYWx3YXlzIGJlIGluY2x1ZGVkIGluIHRoZSBuYXJyYXRpdmUuXHJcbiAgICovXHJcbiAgcHVibGljIGNvZGU6IGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBhdGllbnQsIGxvY2F0aW9uLCBncm91cCwgb3JnYW5pemF0aW9uLCBvciBwcmFjdGl0aW9uZXIgZXRjLiB0aGlzIGlzIGFib3V0IHJlY29yZCB0aGlzIGZsYWcgaXMgYXNzb2NpYXRlZCB3aXRoLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdWJqZWN0OiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJpb2Qgb2YgdGltZSBmcm9tIHRoZSBhY3RpdmF0aW9uIG9mIHRoZSBmbGFnIHRvIGluYWN0aXZhdGlvbiBvZiB0aGUgZmxhZy4gSWYgdGhlIGZsYWcgaXMgYWN0aXZlLCB0aGUgZW5kIG9mIHRoZSBwZXJpb2Qgc2hvdWxkIGJlIHVuc3BlY2lmaWVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgYm90aCBGbGFnLmVuY291bnRlciBhbmQgRmxhZy5wZXJpb2QgYXJlIHZhbHVlZCwgdGhlbiBGbGFnLnBlcmlvZC5zdGFydCBzaGFsbCBub3QgYmUgYmVmb3JlIEVuY291bnRlci5wZXJpb2Quc3RhcnQgYW5kIEZsYWcucGVyaW9kLmVuZCBzaGFsbCBub3QgYmUgYWZ0ZXIgRW5jb3VudGVyLnBlcmlvZC5lbmQuXHJcbiAgICovXHJcbiAgcHVibGljIGVuY291bnRlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcGVyc29uLCBvcmdhbml6YXRpb24gb3IgZGV2aWNlIHRoYXQgY3JlYXRlZCB0aGUgZmxhZy5cclxuICAgKi9cclxuICBwdWJsaWMgYXV0aG9yPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEZsYWcgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxGbGFnQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ0ZsYWcnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxGbGFnU3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN0YXR1c30pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzKSB7IHRoaXMuc3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPEZsYWdTdGF0dXNDb2RlVHlwZT4oc291cmNlLl9zdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NhdGVnb3J5J10pIHsgdGhpcy5jYXRlZ29yeSA9IHNvdXJjZS5jYXRlZ29yeS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmNhdGVnb3J5ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2NvZGUnXSkgeyB0aGlzLmNvZGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmNvZGUpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb2RlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3ViamVjdCddKSB7IHRoaXMuc3ViamVjdCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uuc3ViamVjdCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN1YmplY3QgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydwZXJpb2QnXSkgeyB0aGlzLnBlcmlvZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2UucGVyaW9kKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZW5jb3VudGVyJ10pIHsgdGhpcy5lbmNvdW50ZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmVuY291bnRlcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2F1dGhvciddKSB7IHRoaXMuYXV0aG9yID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5hdXRob3IpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJlcXVpcmVkLWJvdW5kIFZhbHVlIFNldCBmb3Igc3RhdHVzIChGbGFnLnN0YXR1cylcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGdldCBzdGF0dXNSZXF1aXJlZENvZGVzKCkge1xyXG4gICAgcmV0dXJuIEZsYWdTdGF0dXNDb2RlcztcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb246c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24pO1xyXG4gICAgaWYgKGV4cHJlc3Npb24gPT09ICcnKSB7IGV4cHJlc3Npb24gPSAnRmxhZycgfVxyXG4gICAgaWYgKCF0aGlzWydyZXNvdXJjZVR5cGUnXSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAncmVxdWlyZWQnLCBkaWFnbm9zdGljczogJ01pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgcmVzb3VyY2VUeXBlIGZoaXI6IEZsYWcucmVzb3VyY2VUeXBlOlwiRmxhZ1wiJywgZXhwcmVzc2lvbjogW2V4cHJlc3Npb25dIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXNbXCJpZGVudGlmaWVyXCJdKSB7IHRoaXMuaWRlbnRpZmllci5mb3JFYWNoKCh4LGkpID0+IHsgaXNzdWVzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uK2AuaWRlbnRpZmllclske2l9XWApKTsgfSkgfVxyXG4gICAgaWYgKCF0aGlzWydzdGF0dXMnXSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAncmVxdWlyZWQnLCBkaWFnbm9zdGljczogJ01pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgc3RhdHVzIGZoaXI6IEZsYWcuc3RhdHVzOmNvZGUnLCBleHByZXNzaW9uOiBbZXhwcmVzc2lvbl0gfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1snc3RhdHVzJ10gJiYgKCFPYmplY3QudmFsdWVzKEZsYWdTdGF0dXNDb2RlcykuaW5jbHVkZXModGhpcy5zdGF0dXMudmFsdWUgYXMgYW55KSkpIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ2NvZGUtaW52YWxpZCcsIGRpYWdub3N0aWNzOiAnc3RhdHVzIChGbGFnLnN0YXR1cykgb2YgdHlwZSBjb2RlIGlzIG1pc3NpbmcgY29kZSBmb3IgUmVxdWlyZWQgYmluZGluZyB0bzogRmxhZ1N0YXR1cycsIGV4cHJlc3Npb246IFtleHByZXNzaW9uXSB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzW1wic3RhdHVzXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuc3RhdHVzLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy5zdGF0dXMnKSk7IH1cclxuICAgIGlmICh0aGlzW1wiY2F0ZWdvcnlcIl0pIHsgdGhpcy5jYXRlZ29yeS5mb3JFYWNoKCh4LGkpID0+IHsgaXNzdWVzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uK2AuY2F0ZWdvcnlbJHtpfV1gKSk7IH0pIH1cclxuICAgIGlmICghdGhpc1snY29kZSddKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdyZXF1aXJlZCcsIGRpYWdub3N0aWNzOiAnTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSBjb2RlIGZoaXI6IEZsYWcuY29kZTpDb2RlYWJsZUNvbmNlcHQnLCBleHByZXNzaW9uOiBbZXhwcmVzc2lvbl0gfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1tcImNvZGVcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5jb2RlLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy5jb2RlJykpOyB9XHJcbiAgICBpZiAoIXRoaXNbJ3N1YmplY3QnXSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAncmVxdWlyZWQnLCBkaWFnbm9zdGljczogJ01pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgc3ViamVjdCBmaGlyOiBGbGFnLnN1YmplY3Q6UmVmZXJlbmNlJywgZXhwcmVzc2lvbjogW2V4cHJlc3Npb25dIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXNbXCJzdWJqZWN0XCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuc3ViamVjdC5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKycuc3ViamVjdCcpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJwZXJpb2RcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5wZXJpb2QuZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbisnLnBlcmlvZCcpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJlbmNvdW50ZXJcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5lbmNvdW50ZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbisnLmVuY291bnRlcicpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJhdXRob3JcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5hdXRob3IuZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbisnLmF1dGhvcicpKTsgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19