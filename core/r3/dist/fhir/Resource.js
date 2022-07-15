// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1Jlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUUxQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQWlEbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sUUFBUyxTQUFRLElBQUksQ0FBQyxRQUFRO0lBMEJ6Qzs7T0FFRztJQUNILFlBQVksU0FBK0IsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDckYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztRQUMvQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDcEUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUFFLElBQUksQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEdBQUksQ0FBQyxDQUFDO2FBQUU7aUJBQ3ZEO2dCQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUErQixDQUFDLENBQUM7YUFBRTtTQUM1RTtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQUU7UUFDL0QsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3RHLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDNUIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUFFLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLGNBQWUsQ0FBQyxDQUFDO2FBQUU7aUJBQ3hGO2dCQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUEyQyxDQUFDLENBQUM7YUFBRTtTQUNwRztRQUNELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7U0FBRTtRQUN4RixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsU0FBVSxDQUFDLENBQUM7YUFBRTtpQkFDekU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQXVDLENBQUMsQ0FBQzthQUFFO1NBQzVGO0lBQ0gsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLFVBQVUsQ0FBQTtTQUFFO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBNUREOztHQUVHO0FBQzZCLHNCQUFhLEdBQVUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBSZXNvdXJjZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUmVzb3VyY2VUeXBlc1ZhbHVlU2V0Q29kZXMsICBSZXNvdXJjZVR5cGVzVmFsdWVTZXRDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVzb3VyY2VUeXBlc1ZhbHVlU2V0Q29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFJlc291cmNlVHlwZXNWYWx1ZVNldFZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVzb3VyY2VUeXBlc1ZhbHVlU2V0VnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBMYW5ndWFnZXNDb2RlcywgIExhbmd1YWdlc0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9MYW5ndWFnZXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTGFuZ3VhZ2VzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9MYW5ndWFnZXNWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgUmVzb3VyY2UgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2VBcmdzIGV4dGVuZHMgZmhpci5GaGlyQmFzZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogc3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIG9ubHkgdGltZSB0aGF0IGEgcmVzb3VyY2UgZG9lcyBub3QgaGF2ZSBhbiBpZCBpcyB3aGVuIGl0IGlzIGJlaW5nIHN1Ym1pdHRlZCB0byB0aGUgc2VydmVyIHVzaW5nIGEgY3JlYXRlIG9wZXJhdGlvbi5cclxuICAgKi9cclxuICBpZD86IGZoaXIuRmhpcklkfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFJlc291cmNlLmlkXHJcbiAgICovXHJcbiAgX2lkPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgbWV0YWRhdGEgYWJvdXQgdGhlIHJlc291cmNlLiBUaGlzIGlzIGNvbnRlbnQgdGhhdCBpcyBtYWludGFpbmVkIGJ5IHRoZSBpbmZyYXN0cnVjdHVyZS4gQ2hhbmdlcyB0byB0aGUgY29udGVudCBtYXkgbm90IGFsd2F5cyBiZSBhc3NvY2lhdGVkIHdpdGggdmVyc2lvbiBjaGFuZ2VzIHRvIHRoZSByZXNvdXJjZS5cclxuICAgKi9cclxuICBtZXRhPzogZmhpci5NZXRhQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQXNzZXJ0aW5nIHRoaXMgcnVsZSBzZXQgcmVzdHJpY3RzIHRoZSBjb250ZW50IHRvIGJlIG9ubHkgdW5kZXJzdG9vZCBieSBhIGxpbWl0ZWQgc2V0IG9mIHRyYWRpbmcgcGFydG5lcnMuIFRoaXMgaW5oZXJlbnRseSBsaW1pdHMgdGhlIHVzZWZ1bG5lc3Mgb2YgdGhlIGRhdGEgaW4gdGhlIGxvbmcgdGVybS4gSG93ZXZlciwgdGhlIGV4aXN0aW5nIGhlYWx0aCBlY28tc3lzdGVtIGlzIGhpZ2hseSBmcmFjdHVyZWQsIGFuZCBub3QgeWV0IHJlYWR5IHRvIGRlZmluZSwgY29sbGVjdCwgYW5kIGV4Y2hhbmdlIGRhdGEgaW4gYSBnZW5lcmFsbHkgY29tcHV0YWJsZSBzZW5zZS4gV2hlcmV2ZXIgcG9zc2libGUsIGltcGxlbWVudGVycyBhbmQvb3Igc3BlY2lmaWNhdGlvbiB3cml0ZXJzIHNob3VsZCBhdm9pZCB1c2luZyB0aGlzIGVsZW1lbnQuIFxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIGltcGxpY2l0IHJ1bGVzIG1heSBwcm92aWRlIGFkZGl0aW9uYWwga25vd2xlZGdlIGFib3V0IHRoZSByZXNvdXJjZSB0aGF0IG1vZGlmaWVzIGl0J3MgbWVhbmluZyBvciBpbnRlcnByZXRhdGlvbi5cclxuICAgKi9cclxuICBpbXBsaWNpdFJ1bGVzPzogZmhpci5GaGlyVXJpfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFJlc291cmNlLmltcGxpY2l0UnVsZXNcclxuICAgKi9cclxuICBfaW1wbGljaXRSdWxlcz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogTGFuZ3VhZ2UgaXMgcHJvdmlkZWQgdG8gc3VwcG9ydCBpbmRleGluZyBhbmQgYWNjZXNzaWJpbGl0eSAodHlwaWNhbGx5LCBzZXJ2aWNlcyBzdWNoIGFzIHRleHQgdG8gc3BlZWNoIHVzZSB0aGUgbGFuZ3VhZ2UgdGFnKS4gVGhlIGh0bWwgbGFuZ3VhZ2UgdGFnIGluIHRoZSBuYXJyYXRpdmUgYXBwbGllcyAgdG8gdGhlIG5hcnJhdGl2ZS4gVGhlIGxhbmd1YWdlIHRhZyBvbiB0aGUgcmVzb3VyY2UgbWF5IGJlIHVzZWQgdG8gc3BlY2lmeSB0aGUgbGFuZ3VhZ2Ugb2Ygb3RoZXIgcHJlc2VudGF0aW9ucyBnZW5lcmF0ZWQgZnJvbSB0aGUgZGF0YSBpbiB0aGUgcmVzb3VyY2UgIE5vdCBhbGwgdGhlIGNvbnRlbnQgaGFzIHRvIGJlIGluIHRoZSBiYXNlIGxhbmd1YWdlLiBUaGUgUmVzb3VyY2UubGFuZ3VhZ2Ugc2hvdWxkIG5vdCBiZSBhc3N1bWVkIHRvIGFwcGx5IHRvIHRoZSBuYXJyYXRpdmUgYXV0b21hdGljYWxseS4gSWYgYSBsYW5ndWFnZSBpcyBzcGVjaWZpZWQsIGl0IHNob3VsZCBpdCBhbHNvIGJlIHNwZWNpZmllZCBvbiB0aGUgZGl2IGVsZW1lbnQgaW4gdGhlIGh0bWwgKHNlZSBydWxlcyBpbiBIVE1MNSBmb3IgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHhtbDpsYW5nIGFuZCB0aGUgaHRtbCBsYW5nIGF0dHJpYnV0ZSkuXHJcbiAgICovXHJcbiAgbGFuZ3VhZ2U/OiBmaGlyLkZoaXJDb2RlfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFJlc291cmNlLmxhbmd1YWdlXHJcbiAgICovXHJcbiAgX2xhbmd1YWdlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIGJhc2UgcmVzb3VyY2UgdHlwZSBmb3IgZXZlcnl0aGluZy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZSBleHRlbmRzIGZoaXIuRmhpckJhc2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUmVzb3VyY2UnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXNvdXJjZVR5cGU6IHN0cmluZ3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvbmx5IHRpbWUgdGhhdCBhIHJlc291cmNlIGRvZXMgbm90IGhhdmUgYW4gaWQgaXMgd2hlbiBpdCBpcyBiZWluZyBzdWJtaXR0ZWQgdG8gdGhlIHNlcnZlciB1c2luZyBhIGNyZWF0ZSBvcGVyYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIGlkPzogZmhpci5GaGlySWR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtZXRhZGF0YSBhYm91dCB0aGUgcmVzb3VyY2UuIFRoaXMgaXMgY29udGVudCB0aGF0IGlzIG1haW50YWluZWQgYnkgdGhlIGluZnJhc3RydWN0dXJlLiBDaGFuZ2VzIHRvIHRoZSBjb250ZW50IG1heSBub3QgYWx3YXlzIGJlIGFzc29jaWF0ZWQgd2l0aCB2ZXJzaW9uIGNoYW5nZXMgdG8gdGhlIHJlc291cmNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBtZXRhPzogZmhpci5NZXRhfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBc3NlcnRpbmcgdGhpcyBydWxlIHNldCByZXN0cmljdHMgdGhlIGNvbnRlbnQgdG8gYmUgb25seSB1bmRlcnN0b29kIGJ5IGEgbGltaXRlZCBzZXQgb2YgdHJhZGluZyBwYXJ0bmVycy4gVGhpcyBpbmhlcmVudGx5IGxpbWl0cyB0aGUgdXNlZnVsbmVzcyBvZiB0aGUgZGF0YSBpbiB0aGUgbG9uZyB0ZXJtLiBIb3dldmVyLCB0aGUgZXhpc3RpbmcgaGVhbHRoIGVjby1zeXN0ZW0gaXMgaGlnaGx5IGZyYWN0dXJlZCwgYW5kIG5vdCB5ZXQgcmVhZHkgdG8gZGVmaW5lLCBjb2xsZWN0LCBhbmQgZXhjaGFuZ2UgZGF0YSBpbiBhIGdlbmVyYWxseSBjb21wdXRhYmxlIHNlbnNlLiBXaGVyZXZlciBwb3NzaWJsZSwgaW1wbGVtZW50ZXJzIGFuZC9vciBzcGVjaWZpY2F0aW9uIHdyaXRlcnMgc2hvdWxkIGF2b2lkIHVzaW5nIHRoaXMgZWxlbWVudC4gXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSB0aGUgaW1wbGljaXQgcnVsZXMgbWF5IHByb3ZpZGUgYWRkaXRpb25hbCBrbm93bGVkZ2UgYWJvdXQgdGhlIHJlc291cmNlIHRoYXQgbW9kaWZpZXMgaXQncyBtZWFuaW5nIG9yIGludGVycHJldGF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpbXBsaWNpdFJ1bGVzPzogZmhpci5GaGlyVXJpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBMYW5ndWFnZSBpcyBwcm92aWRlZCB0byBzdXBwb3J0IGluZGV4aW5nIGFuZCBhY2Nlc3NpYmlsaXR5ICh0eXBpY2FsbHksIHNlcnZpY2VzIHN1Y2ggYXMgdGV4dCB0byBzcGVlY2ggdXNlIHRoZSBsYW5ndWFnZSB0YWcpLiBUaGUgaHRtbCBsYW5ndWFnZSB0YWcgaW4gdGhlIG5hcnJhdGl2ZSBhcHBsaWVzICB0byB0aGUgbmFycmF0aXZlLiBUaGUgbGFuZ3VhZ2UgdGFnIG9uIHRoZSByZXNvdXJjZSBtYXkgYmUgdXNlZCB0byBzcGVjaWZ5IHRoZSBsYW5ndWFnZSBvZiBvdGhlciBwcmVzZW50YXRpb25zIGdlbmVyYXRlZCBmcm9tIHRoZSBkYXRhIGluIHRoZSByZXNvdXJjZSAgTm90IGFsbCB0aGUgY29udGVudCBoYXMgdG8gYmUgaW4gdGhlIGJhc2UgbGFuZ3VhZ2UuIFRoZSBSZXNvdXJjZS5sYW5ndWFnZSBzaG91bGQgbm90IGJlIGFzc3VtZWQgdG8gYXBwbHkgdG8gdGhlIG5hcnJhdGl2ZSBhdXRvbWF0aWNhbGx5LiBJZiBhIGxhbmd1YWdlIGlzIHNwZWNpZmllZCwgaXQgc2hvdWxkIGl0IGFsc28gYmUgc3BlY2lmaWVkIG9uIHRoZSBkaXYgZWxlbWVudCBpbiB0aGUgaHRtbCAoc2VlIHJ1bGVzIGluIEhUTUw1IGZvciBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW4geG1sOmxhbmcgYW5kIHRoZSBodG1sIGxhbmcgYXR0cmlidXRlKS5cclxuICAgKi9cclxuICBwdWJsaWMgbGFuZ3VhZ2U/OiBmaGlyLkZoaXJDb2RlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBSZXNvdXJjZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFJlc291cmNlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ1Jlc291cmNlJztcclxuICAgIGlmIChzb3VyY2VbJ2lkJ10pIHsgdGhpcy5pZCA9IG5ldyBmaGlyLkZoaXJJZCh7dmFsdWU6IHNvdXJjZS5pZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfaWQnXSkge1xyXG4gICAgICBpZiAodGhpcy5pZCkgeyB0aGlzLmlkLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2lkISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuaWQgPSBuZXcgZmhpci5GaGlySWQoc291cmNlLl9pZCBhcyBQYXJ0aWFsPGZoaXIuRmhpcklkQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydtZXRhJ10pIHsgdGhpcy5tZXRhID0gbmV3IGZoaXIuTWV0YShzb3VyY2UubWV0YSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2ltcGxpY2l0UnVsZXMnXSkgeyB0aGlzLmltcGxpY2l0UnVsZXMgPSBuZXcgZmhpci5GaGlyVXJpKHt2YWx1ZTogc291cmNlLmltcGxpY2l0UnVsZXN9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2ltcGxpY2l0UnVsZXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5pbXBsaWNpdFJ1bGVzKSB7IHRoaXMuaW1wbGljaXRSdWxlcy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9pbXBsaWNpdFJ1bGVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuaW1wbGljaXRSdWxlcyA9IG5ldyBmaGlyLkZoaXJVcmkoc291cmNlLl9pbXBsaWNpdFJ1bGVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyVXJpQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydsYW5ndWFnZSddKSB7IHRoaXMubGFuZ3VhZ2UgPSBuZXcgZmhpci5GaGlyQ29kZSh7dmFsdWU6IHNvdXJjZS5sYW5ndWFnZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfbGFuZ3VhZ2UnXSkge1xyXG4gICAgICBpZiAodGhpcy5sYW5ndWFnZSkgeyB0aGlzLmxhbmd1YWdlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2xhbmd1YWdlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubGFuZ3VhZ2UgPSBuZXcgZmhpci5GaGlyQ29kZShzb3VyY2UuX2xhbmd1YWdlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1Jlc291cmNlJyB9XHJcbiAgICB0aGlzLnZSUygncmVzb3VyY2VUeXBlJyxleHApXHJcbiAgICB0aGlzLnZPUygnaWQnLGV4cClcclxuICAgIHRoaXMudk9TKCdtZXRhJyxleHApXHJcbiAgICB0aGlzLnZPUygnaW1wbGljaXRSdWxlcycsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2xhbmd1YWdlJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=