// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: Resource
import * as fhir from '../fhir.js';
/**
 * This is the base resource type for everything.
 */
export class Resource extends fhir.FhirBase {
    /**
     * Default constructor for Resource - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Resource';
        if (source['id']) {
            this.id = new fhir.FhirId({ value: source.id });
        }
        if (source['_id']) {
            if (this.id) {
                this.id.addExtendedProperties(source._id);
            }
            else {
                this.id = new fhir.FhirId(source._id);
            }
        }
        if (source['meta']) {
            this.meta = new fhir.Meta(source.meta);
        }
        if (source['implicitRules']) {
            this.implicitRules = new fhir.FhirUri({ value: source.implicitRules });
        }
        if (source['_implicitRules']) {
            if (this.implicitRules) {
                this.implicitRules.addExtendedProperties(source._implicitRules);
            }
            else {
                this.implicitRules = new fhir.FhirUri(source._implicitRules);
            }
        }
        if (source['language']) {
            this.language = new fhir.FhirCode({ value: source.language });
        }
        if (source['_language']) {
            if (this.language) {
                this.language.addExtendedProperties(source._language);
            }
            else {
                this.language = new fhir.FhirCode(source._language);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Resource';
        }
        this.vRS('resourceType', exp);
        this.vOS('id', exp);
        this.vOS('meta', exp);
        this.vOS('implicitRules', exp);
        this.vOS('language', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Resource._fts_dataType = 'Resource';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1Jlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUUxQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQWdEbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sUUFBUyxTQUFRLElBQUksQ0FBQyxRQUFRO0lBeUJ6Qzs7T0FFRztJQUNILFlBQVksU0FBK0IsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDckYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztRQUMvQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDcEUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUFFLElBQUksQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEdBQUksQ0FBQyxDQUFDO2FBQUU7aUJBQ3ZEO2dCQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUErQixDQUFDLENBQUM7YUFBRTtTQUM1RTtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQUU7UUFDL0QsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3RHLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDNUIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUFFLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLGNBQWUsQ0FBQyxDQUFDO2FBQUU7aUJBQ3hGO2dCQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUEyQyxDQUFDLENBQUM7YUFBRTtTQUNwRztRQUNELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7U0FBRTtRQUN4RixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsU0FBVSxDQUFDLENBQUM7YUFBRTtpQkFDekU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQXVDLENBQUMsQ0FBQzthQUFFO1NBQzVGO0lBQ0gsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLFVBQVUsQ0FBQTtTQUFFO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBM0REOztHQUVHO0FBQzZCLHNCQUFhLEdBQVUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogUmVzb3VyY2VcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFJlc291cmNlVHlwZXNWYWx1ZVNldENvZGVzLCAgUmVzb3VyY2VUeXBlc1ZhbHVlU2V0Q29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1Jlc291cmNlVHlwZXNWYWx1ZVNldENvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBSZXNvdXJjZVR5cGVzVmFsdWVTZXRWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1Jlc291cmNlVHlwZXNWYWx1ZVNldFZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTGFuZ3VhZ2VzQ29kZXMsICBMYW5ndWFnZXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTGFuZ3VhZ2VzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IExhbmd1YWdlc1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTGFuZ3VhZ2VzVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFJlc291cmNlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlQXJncyBleHRlbmRzIGZoaXIuRmhpckJhc2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IHN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvbmx5IHRpbWUgdGhhdCBhIHJlc291cmNlIGRvZXMgbm90IGhhdmUgYW4gaWQgaXMgd2hlbiBpdCBpcyBiZWluZyBzdWJtaXR0ZWQgdG8gdGhlIHNlcnZlciB1c2luZyBhIGNyZWF0ZSBvcGVyYXRpb24uXHJcbiAgICovXHJcbiAgaWQ/OiBmaGlyLkZoaXJJZHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBSZXNvdXJjZS5pZFxyXG4gICAqL1xyXG4gIF9pZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1ldGFkYXRhIGFib3V0IHRoZSByZXNvdXJjZS4gVGhpcyBpcyBjb250ZW50IHRoYXQgaXMgbWFpbnRhaW5lZCBieSB0aGUgaW5mcmFzdHJ1Y3R1cmUuIENoYW5nZXMgdG8gdGhlIGNvbnRlbnQgbWlnaHQgbm90IGFsd2F5cyBiZSBhc3NvY2lhdGVkIHdpdGggdmVyc2lvbiBjaGFuZ2VzIHRvIHRoZSByZXNvdXJjZS5cclxuICAgKi9cclxuICBtZXRhPzogZmhpci5NZXRhQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQXNzZXJ0aW5nIHRoaXMgcnVsZSBzZXQgcmVzdHJpY3RzIHRoZSBjb250ZW50IHRvIGJlIG9ubHkgdW5kZXJzdG9vZCBieSBhIGxpbWl0ZWQgc2V0IG9mIHRyYWRpbmcgcGFydG5lcnMuIFRoaXMgaW5oZXJlbnRseSBsaW1pdHMgdGhlIHVzZWZ1bG5lc3Mgb2YgdGhlIGRhdGEgaW4gdGhlIGxvbmcgdGVybS4gSG93ZXZlciwgdGhlIGV4aXN0aW5nIGhlYWx0aCBlY28tc3lzdGVtIGlzIGhpZ2hseSBmcmFjdHVyZWQsIGFuZCBub3QgeWV0IHJlYWR5IHRvIGRlZmluZSwgY29sbGVjdCwgYW5kIGV4Y2hhbmdlIGRhdGEgaW4gYSBnZW5lcmFsbHkgY29tcHV0YWJsZSBzZW5zZS4gV2hlcmV2ZXIgcG9zc2libGUsIGltcGxlbWVudGVycyBhbmQvb3Igc3BlY2lmaWNhdGlvbiB3cml0ZXJzIHNob3VsZCBhdm9pZCB1c2luZyB0aGlzIGVsZW1lbnQuIE9mdGVuLCB3aGVuIHVzZWQsIHRoZSBVUkwgaXMgYSByZWZlcmVuY2UgdG8gYW4gaW1wbGVtZW50YXRpb24gZ3VpZGUgdGhhdCBkZWZpbmVzIHRoZXNlIHNwZWNpYWwgcnVsZXMgYXMgcGFydCBvZiBpdCdzIG5hcnJhdGl2ZSBhbG9uZyB3aXRoIG90aGVyIHByb2ZpbGVzLCB2YWx1ZSBzZXRzLCBldGMuXHJcbiAgICovXHJcbiAgaW1wbGljaXRSdWxlcz86IGZoaXIuRmhpclVyaXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBSZXNvdXJjZS5pbXBsaWNpdFJ1bGVzXHJcbiAgICovXHJcbiAgX2ltcGxpY2l0UnVsZXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIExhbmd1YWdlIGlzIHByb3ZpZGVkIHRvIHN1cHBvcnQgaW5kZXhpbmcgYW5kIGFjY2Vzc2liaWxpdHkgKHR5cGljYWxseSwgc2VydmljZXMgc3VjaCBhcyB0ZXh0IHRvIHNwZWVjaCB1c2UgdGhlIGxhbmd1YWdlIHRhZykuIFRoZSBodG1sIGxhbmd1YWdlIHRhZyBpbiB0aGUgbmFycmF0aXZlIGFwcGxpZXMgIHRvIHRoZSBuYXJyYXRpdmUuIFRoZSBsYW5ndWFnZSB0YWcgb24gdGhlIHJlc291cmNlIG1heSBiZSB1c2VkIHRvIHNwZWNpZnkgdGhlIGxhbmd1YWdlIG9mIG90aGVyIHByZXNlbnRhdGlvbnMgZ2VuZXJhdGVkIGZyb20gdGhlIGRhdGEgaW4gdGhlIHJlc291cmNlLiBOb3QgYWxsIHRoZSBjb250ZW50IGhhcyB0byBiZSBpbiB0aGUgYmFzZSBsYW5ndWFnZS4gVGhlIFJlc291cmNlLmxhbmd1YWdlIHNob3VsZCBub3QgYmUgYXNzdW1lZCB0byBhcHBseSB0byB0aGUgbmFycmF0aXZlIGF1dG9tYXRpY2FsbHkuIElmIGEgbGFuZ3VhZ2UgaXMgc3BlY2lmaWVkLCBpdCBzaG91bGQgaXQgYWxzbyBiZSBzcGVjaWZpZWQgb24gdGhlIGRpdiBlbGVtZW50IGluIHRoZSBodG1sIChzZWUgcnVsZXMgaW4gSFRNTDUgZm9yIGluZm9ybWF0aW9uIGFib3V0IHRoZSByZWxhdGlvbnNoaXAgYmV0d2VlbiB4bWw6bGFuZyBhbmQgdGhlIGh0bWwgbGFuZyBhdHRyaWJ1dGUpLlxyXG4gICAqL1xyXG4gIGxhbmd1YWdlPzogZmhpci5GaGlyQ29kZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBSZXNvdXJjZS5sYW5ndWFnZVxyXG4gICAqL1xyXG4gIF9sYW5ndWFnZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBiYXNlIHJlc291cmNlIHR5cGUgZm9yIGV2ZXJ5dGhpbmcuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVzb3VyY2UgZXh0ZW5kcyBmaGlyLkZoaXJCYXNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1Jlc291cmNlJztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgcmVzb3VyY2VUeXBlOiBzdHJpbmd8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgb25seSB0aW1lIHRoYXQgYSByZXNvdXJjZSBkb2VzIG5vdCBoYXZlIGFuIGlkIGlzIHdoZW4gaXQgaXMgYmVpbmcgc3VibWl0dGVkIHRvIHRoZSBzZXJ2ZXIgdXNpbmcgYSBjcmVhdGUgb3BlcmF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZD86IGZoaXIuRmhpcklkfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbWV0YWRhdGEgYWJvdXQgdGhlIHJlc291cmNlLiBUaGlzIGlzIGNvbnRlbnQgdGhhdCBpcyBtYWludGFpbmVkIGJ5IHRoZSBpbmZyYXN0cnVjdHVyZS4gQ2hhbmdlcyB0byB0aGUgY29udGVudCBtaWdodCBub3QgYWx3YXlzIGJlIGFzc29jaWF0ZWQgd2l0aCB2ZXJzaW9uIGNoYW5nZXMgdG8gdGhlIHJlc291cmNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBtZXRhPzogZmhpci5NZXRhfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBc3NlcnRpbmcgdGhpcyBydWxlIHNldCByZXN0cmljdHMgdGhlIGNvbnRlbnQgdG8gYmUgb25seSB1bmRlcnN0b29kIGJ5IGEgbGltaXRlZCBzZXQgb2YgdHJhZGluZyBwYXJ0bmVycy4gVGhpcyBpbmhlcmVudGx5IGxpbWl0cyB0aGUgdXNlZnVsbmVzcyBvZiB0aGUgZGF0YSBpbiB0aGUgbG9uZyB0ZXJtLiBIb3dldmVyLCB0aGUgZXhpc3RpbmcgaGVhbHRoIGVjby1zeXN0ZW0gaXMgaGlnaGx5IGZyYWN0dXJlZCwgYW5kIG5vdCB5ZXQgcmVhZHkgdG8gZGVmaW5lLCBjb2xsZWN0LCBhbmQgZXhjaGFuZ2UgZGF0YSBpbiBhIGdlbmVyYWxseSBjb21wdXRhYmxlIHNlbnNlLiBXaGVyZXZlciBwb3NzaWJsZSwgaW1wbGVtZW50ZXJzIGFuZC9vciBzcGVjaWZpY2F0aW9uIHdyaXRlcnMgc2hvdWxkIGF2b2lkIHVzaW5nIHRoaXMgZWxlbWVudC4gT2Z0ZW4sIHdoZW4gdXNlZCwgdGhlIFVSTCBpcyBhIHJlZmVyZW5jZSB0byBhbiBpbXBsZW1lbnRhdGlvbiBndWlkZSB0aGF0IGRlZmluZXMgdGhlc2Ugc3BlY2lhbCBydWxlcyBhcyBwYXJ0IG9mIGl0J3MgbmFycmF0aXZlIGFsb25nIHdpdGggb3RoZXIgcHJvZmlsZXMsIHZhbHVlIHNldHMsIGV0Yy5cclxuICAgKi9cclxuICBwdWJsaWMgaW1wbGljaXRSdWxlcz86IGZoaXIuRmhpclVyaXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogTGFuZ3VhZ2UgaXMgcHJvdmlkZWQgdG8gc3VwcG9ydCBpbmRleGluZyBhbmQgYWNjZXNzaWJpbGl0eSAodHlwaWNhbGx5LCBzZXJ2aWNlcyBzdWNoIGFzIHRleHQgdG8gc3BlZWNoIHVzZSB0aGUgbGFuZ3VhZ2UgdGFnKS4gVGhlIGh0bWwgbGFuZ3VhZ2UgdGFnIGluIHRoZSBuYXJyYXRpdmUgYXBwbGllcyAgdG8gdGhlIG5hcnJhdGl2ZS4gVGhlIGxhbmd1YWdlIHRhZyBvbiB0aGUgcmVzb3VyY2UgbWF5IGJlIHVzZWQgdG8gc3BlY2lmeSB0aGUgbGFuZ3VhZ2Ugb2Ygb3RoZXIgcHJlc2VudGF0aW9ucyBnZW5lcmF0ZWQgZnJvbSB0aGUgZGF0YSBpbiB0aGUgcmVzb3VyY2UuIE5vdCBhbGwgdGhlIGNvbnRlbnQgaGFzIHRvIGJlIGluIHRoZSBiYXNlIGxhbmd1YWdlLiBUaGUgUmVzb3VyY2UubGFuZ3VhZ2Ugc2hvdWxkIG5vdCBiZSBhc3N1bWVkIHRvIGFwcGx5IHRvIHRoZSBuYXJyYXRpdmUgYXV0b21hdGljYWxseS4gSWYgYSBsYW5ndWFnZSBpcyBzcGVjaWZpZWQsIGl0IHNob3VsZCBpdCBhbHNvIGJlIHNwZWNpZmllZCBvbiB0aGUgZGl2IGVsZW1lbnQgaW4gdGhlIGh0bWwgKHNlZSBydWxlcyBpbiBIVE1MNSBmb3IgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHhtbDpsYW5nIGFuZCB0aGUgaHRtbCBsYW5nIGF0dHJpYnV0ZSkuXHJcbiAgICovXHJcbiAgcHVibGljIGxhbmd1YWdlPzogZmhpci5GaGlyQ29kZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgUmVzb3VyY2UgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxSZXNvdXJjZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdSZXNvdXJjZSc7XHJcbiAgICBpZiAoc291cmNlWydpZCddKSB7IHRoaXMuaWQgPSBuZXcgZmhpci5GaGlySWQoe3ZhbHVlOiBzb3VyY2UuaWR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2lkJ10pIHtcclxuICAgICAgaWYgKHRoaXMuaWQpIHsgdGhpcy5pZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9pZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmlkID0gbmV3IGZoaXIuRmhpcklkKHNvdXJjZS5faWQgYXMgUGFydGlhbDxmaGlyLkZoaXJJZEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbWV0YSddKSB7IHRoaXMubWV0YSA9IG5ldyBmaGlyLk1ldGEoc291cmNlLm1ldGEpOyB9XHJcbiAgICBpZiAoc291cmNlWydpbXBsaWNpdFJ1bGVzJ10pIHsgdGhpcy5pbXBsaWNpdFJ1bGVzID0gbmV3IGZoaXIuRmhpclVyaSh7dmFsdWU6IHNvdXJjZS5pbXBsaWNpdFJ1bGVzfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19pbXBsaWNpdFJ1bGVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuaW1wbGljaXRSdWxlcykgeyB0aGlzLmltcGxpY2l0UnVsZXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5faW1wbGljaXRSdWxlcyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmltcGxpY2l0UnVsZXMgPSBuZXcgZmhpci5GaGlyVXJpKHNvdXJjZS5faW1wbGljaXRSdWxlcyBhcyBQYXJ0aWFsPGZoaXIuRmhpclVyaUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbGFuZ3VhZ2UnXSkgeyB0aGlzLmxhbmd1YWdlID0gbmV3IGZoaXIuRmhpckNvZGUoe3ZhbHVlOiBzb3VyY2UubGFuZ3VhZ2V9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2xhbmd1YWdlJ10pIHtcclxuICAgICAgaWYgKHRoaXMubGFuZ3VhZ2UpIHsgdGhpcy5sYW5ndWFnZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9sYW5ndWFnZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmxhbmd1YWdlID0gbmV3IGZoaXIuRmhpckNvZGUoc291cmNlLl9sYW5ndWFnZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGVBcmdzPik7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdSZXNvdXJjZScgfVxyXG4gICAgdGhpcy52UlMoJ3Jlc291cmNlVHlwZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2lkJyxleHApXHJcbiAgICB0aGlzLnZPUygnbWV0YScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2ltcGxpY2l0UnVsZXMnLGV4cClcclxuICAgIHRoaXMudk9TKCdsYW5ndWFnZScsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19