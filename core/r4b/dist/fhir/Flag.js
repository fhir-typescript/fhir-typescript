// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: Flag
import * as fhir from '../fhir.js';
// @ts-ignore
import { FlagStatusVsValidation } from '../fhirValueSets/FlagStatusVsValidation.js';
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
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options));
        }
        else {
            this.identifier = [];
        }
        if (source['status'] !== undefined) {
            this.status = new fhir.FhirCode({ value: source.status }, options);
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status, options);
            }
        }
        if (source['category']) {
            this.category = source.category.map((x) => new fhir.CodeableConcept(x, options));
        }
        else {
            this.category = [];
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code, options);
        }
        else {
            this.code = null;
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject, options);
        }
        else {
            this.subject = null;
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period, options);
        }
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter, options);
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
            exp = 'Flag';
        }
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vRSV('status', exp, 'FlagStatus', FlagStatusVsValidation, 'r'));
        iss.push(...this.vOA('category', exp));
        iss.push(...this.vRS('code', exp));
        iss.push(...this.vRS('subject', exp));
        iss.push(...this.vOS('period', exp));
        iss.push(...this.vOS('encounter', exp));
        iss.push(...this.vOS('author', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Flag._fts_dataType = 'Flag';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhZy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRmxhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxzQkFBc0I7QUFFdEIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBdURwRjs7R0FFRztBQUNILE1BQU0sT0FBTyxJQUFLLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUF5QzNDOztPQUVHO0lBQ0gsWUFBWSxTQUEyQixFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNqRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDekc7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFxQixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTthQUN4SDtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDNUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckIsSUFBSSxJQUFJ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R0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBL0VEOztHQUVHO0FBQzZCLGtCQUFhLEdBQVUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogRmxhZ1xyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRmxhZ1N0YXR1c0NvZGVzLCAgRmxhZ1N0YXR1c0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9GbGFnU3RhdHVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEZsYWdTdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ZsYWdTdGF0dXNWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEZsYWdDYXRlZ29yeUNvZGVzLCAgRmxhZ0NhdGVnb3J5Q29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ZsYWdDYXRlZ29yeUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBGbGFnQ2F0ZWdvcnlWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ZsYWdDYXRlZ29yeVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRmxhZ0NvZGVzLCAgRmxhZ0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9GbGFnQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEZsYWdWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ZsYWdWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgRmxhZyB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGbGFnQXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiRmxhZ1wifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGlzIGEgYnVzaW5lc3MgaWRlbnRpZmllciwgbm90IGEgcmVzb3VyY2UgaWRlbnRpZmllciAoc2VlIFtkaXNjdXNzaW9uXShyZXNvdXJjZS5odG1sI2lkZW50aWZpZXJzKSkuICBJdCBpcyBiZXN0IHByYWN0aWNlIGZvciB0aGUgaWRlbnRpZmllciB0byBvbmx5IGFwcGVhciBvbiBhIHNpbmdsZSByZXNvdXJjZSBpbnN0YW5jZSwgaG93ZXZlciBidXNpbmVzcyBwcmFjdGljZXMgbWF5IG9jY2FzaW9uYWxseSBkaWN0YXRlIHRoYXQgbXVsdGlwbGUgcmVzb3VyY2UgaW5zdGFuY2VzIHdpdGggdGhlIHNhbWUgaWRlbnRpZmllciBjYW4gZXhpc3QgLSBwb3NzaWJseSBldmVuIHdpdGggZGlmZmVyZW50IHJlc291cmNlIHR5cGVzLiAgRm9yIGV4YW1wbGUsIG11bHRpcGxlIFBhdGllbnQgYW5kIGEgUGVyc29uIHJlc291cmNlIGluc3RhbmNlIG1pZ2h0IHNoYXJlIHRoZSBzYW1lIHNvY2lhbCBpbnN1cmFuY2UgbnVtYmVyLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSB0aGUgc3RhdHVzIGNvbnRhaW5zIGNvZGVzIHRoYXQgbWFyayB0aGUgcmVzb3VyY2UgYXMgbm90IGN1cnJlbnRseSB2YWxpZC5cclxuICAgKi9cclxuICBzdGF0dXM6IGZoaXIuRmhpckNvZGU8RmxhZ1N0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBGbGFnLnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2YWx1ZSBzZXQgd2lsbCBvZnRlbiBuZWVkIHRvIGJlIGFkanVzdGVkIGJhc2VkIG9uIGxvY2FsIGJ1c2luZXNzIHJ1bGVzIGFuZCB1c2FnZSBjb250ZXh0LlxyXG4gICAqL1xyXG4gIGNhdGVnb3J5PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIG5vbi1jb2RlZCwgdXNlIENvZGVhYmxlQ29uY2VwdC50ZXh0LiAgVGhpcyBlbGVtZW50IHNob3VsZCBhbHdheXMgYmUgaW5jbHVkZWQgaW4gdGhlIG5hcnJhdGl2ZS5cclxuICAgKi9cclxuICBjb2RlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgcGF0aWVudCwgbG9jYXRpb24sIGdyb3VwLCBvcmdhbml6YXRpb24sIG9yIHByYWN0aXRpb25lciBldGMuIHRoaXMgaXMgYWJvdXQgcmVjb3JkIHRoaXMgZmxhZyBpcyBhc3NvY2lhdGVkIHdpdGguXHJcbiAgICovXHJcbiAgc3ViamVjdDogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBlcmlvZCBvZiB0aW1lIGZyb20gdGhlIGFjdGl2YXRpb24gb2YgdGhlIGZsYWcgdG8gaW5hY3RpdmF0aW9uIG9mIHRoZSBmbGFnLiBJZiB0aGUgZmxhZyBpcyBhY3RpdmUsIHRoZSBlbmQgb2YgdGhlIHBlcmlvZCBzaG91bGQgYmUgdW5zcGVjaWZpZWQuXHJcbiAgICovXHJcbiAgcGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiBib3RoIEZsYWcuZW5jb3VudGVyIGFuZCBGbGFnLnBlcmlvZCBhcmUgdmFsdWVkLCB0aGVuIEZsYWcucGVyaW9kLnN0YXJ0IHNoYWxsIG5vdCBiZSBiZWZvcmUgRW5jb3VudGVyLnBlcmlvZC5zdGFydCBhbmQgRmxhZy5wZXJpb2QuZW5kIHNoYWxsIG5vdCBiZSBhZnRlciBFbmNvdW50ZXIucGVyaW9kLmVuZC5cclxuICAgKi9cclxuICBlbmNvdW50ZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJzb24sIG9yZ2FuaXphdGlvbiBvciBkZXZpY2UgdGhhdCBjcmVhdGVkIHRoZSBmbGFnLlxyXG4gICAqL1xyXG4gIGF1dGhvcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm9zcGVjdGl2ZSB3YXJuaW5ncyBvZiBwb3RlbnRpYWwgaXNzdWVzIHdoZW4gcHJvdmlkaW5nIGNhcmUgdG8gdGhlIHBhdGllbnQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxhZyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRmxhZyc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJGbGFnXCI7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyBhIGJ1c2luZXNzIGlkZW50aWZpZXIsIG5vdCBhIHJlc291cmNlIGlkZW50aWZpZXIgKHNlZSBbZGlzY3Vzc2lvbl0ocmVzb3VyY2UuaHRtbCNpZGVudGlmaWVycykpLiAgSXQgaXMgYmVzdCBwcmFjdGljZSBmb3IgdGhlIGlkZW50aWZpZXIgdG8gb25seSBhcHBlYXIgb24gYSBzaW5nbGUgcmVzb3VyY2UgaW5zdGFuY2UsIGhvd2V2ZXIgYnVzaW5lc3MgcHJhY3RpY2VzIG1heSBvY2Nhc2lvbmFsbHkgZGljdGF0ZSB0aGF0IG11bHRpcGxlIHJlc291cmNlIGluc3RhbmNlcyB3aXRoIHRoZSBzYW1lIGlkZW50aWZpZXIgY2FuIGV4aXN0IC0gcG9zc2libHkgZXZlbiB3aXRoIGRpZmZlcmVudCByZXNvdXJjZSB0eXBlcy4gIEZvciBleGFtcGxlLCBtdWx0aXBsZSBQYXRpZW50IGFuZCBhIFBlcnNvbiByZXNvdXJjZSBpbnN0YW5jZSBtaWdodCBzaGFyZSB0aGUgc2FtZSBzb2NpYWwgaW5zdXJhbmNlIG51bWJlci5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgY29kZXMgdGhhdCBtYXJrIHRoZSByZXNvdXJjZSBhcyBub3QgY3VycmVudGx5IHZhbGlkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM6IGZoaXIuRmhpckNvZGU8RmxhZ1N0YXR1c0NvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2YWx1ZSBzZXQgd2lsbCBvZnRlbiBuZWVkIHRvIGJlIGFkanVzdGVkIGJhc2VkIG9uIGxvY2FsIGJ1c2luZXNzIHJ1bGVzIGFuZCB1c2FnZSBjb250ZXh0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjYXRlZ29yeTogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBJZiBub24tY29kZWQsIHVzZSBDb2RlYWJsZUNvbmNlcHQudGV4dC4gIFRoaXMgZWxlbWVudCBzaG91bGQgYWx3YXlzIGJlIGluY2x1ZGVkIGluIHRoZSBuYXJyYXRpdmUuXHJcbiAgICovXHJcbiAgcHVibGljIGNvZGU6IGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBhdGllbnQsIGxvY2F0aW9uLCBncm91cCwgb3JnYW5pemF0aW9uLCBvciBwcmFjdGl0aW9uZXIgZXRjLiB0aGlzIGlzIGFib3V0IHJlY29yZCB0aGlzIGZsYWcgaXMgYXNzb2NpYXRlZCB3aXRoLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdWJqZWN0OiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJpb2Qgb2YgdGltZSBmcm9tIHRoZSBhY3RpdmF0aW9uIG9mIHRoZSBmbGFnIHRvIGluYWN0aXZhdGlvbiBvZiB0aGUgZmxhZy4gSWYgdGhlIGZsYWcgaXMgYWN0aXZlLCB0aGUgZW5kIG9mIHRoZSBwZXJpb2Qgc2hvdWxkIGJlIHVuc3BlY2lmaWVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgYm90aCBGbGFnLmVuY291bnRlciBhbmQgRmxhZy5wZXJpb2QgYXJlIHZhbHVlZCwgdGhlbiBGbGFnLnBlcmlvZC5zdGFydCBzaGFsbCBub3QgYmUgYmVmb3JlIEVuY291bnRlci5wZXJpb2Quc3RhcnQgYW5kIEZsYWcucGVyaW9kLmVuZCBzaGFsbCBub3QgYmUgYWZ0ZXIgRW5jb3VudGVyLnBlcmlvZC5lbmQuXHJcbiAgICovXHJcbiAgcHVibGljIGVuY291bnRlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcGVyc29uLCBvcmdhbml6YXRpb24gb3IgZGV2aWNlIHRoYXQgY3JlYXRlZCB0aGUgZmxhZy5cclxuICAgKi9cclxuICBwdWJsaWMgYXV0aG9yPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEZsYWcgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxGbGFnQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ0ZsYWcnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPEZsYWdTdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdHVzfSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMpIHsgdGhpcy5zdGF0dXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8RmxhZ1N0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3N0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnY2F0ZWdvcnknXSkgeyB0aGlzLmNhdGVnb3J5ID0gc291cmNlLmNhdGVnb3J5Lm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY2F0ZWdvcnkgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY29kZSddKSB7IHRoaXMuY29kZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuY29kZSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmNvZGUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydzdWJqZWN0J10pIHsgdGhpcy5zdWJqZWN0ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5zdWJqZWN0LCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3ViamVjdCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3BlcmlvZCddKSB7IHRoaXMucGVyaW9kID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS5wZXJpb2QsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydlbmNvdW50ZXInXSkgeyB0aGlzLmVuY291bnRlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuZW5jb3VudGVyLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYXV0aG9yJ10pIHsgdGhpcy5hdXRob3IgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmF1dGhvciwgb3B0aW9ucyk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdGbGFnJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSU1YoJ3N0YXR1cycsZXhwLCdGbGFnU3RhdHVzJyxGbGFnU3RhdHVzVnNWYWxpZGF0aW9uLCdyJykpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2NhdGVnb3J5JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdjb2RlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdzdWJqZWN0JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdwZXJpb2QnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2VuY291bnRlcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnYXV0aG9yJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==