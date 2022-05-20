// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Resource
import * as fhir from '../fhir.js';
// @ts-ignore
import { LanguagesCodings, } from '../fhirValueSets/LanguagesCodings.js';
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
        if (source['meta']) {
            this.meta = new fhir.Meta(source.meta);
        }
        if (source['implicitRules']) {
            this.implicitRules = new fhir.FhirUri({ value: source.implicitRules });
        }
        if (source['language']) {
            this.language = new fhir.FhirCode({ value: source.language });
        }
    }
    /**
     * Preferred-bound Value Set for language (Resource.language)
     */
    static languagePreferredCoding() {
        return LanguagesCodings;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        let issues = super.doModelValidation();
        if (!this['resourceType']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:string fhir: Resource.resourceType:string', });
        }
        if (this["id"]) {
            issues.push(...this.id.doModelValidation());
        }
        if (this["meta"]) {
            issues.push(...this.meta.doModelValidation());
        }
        if (this["implicitRules"]) {
            issues.push(...this.implicitRules.doModelValidation());
        }
        if (this["language"]) {
            issues.push(...this.language.doModelValidation());
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Resource._fts_dataType = 'Resource';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1Jlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUUxQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQU1uQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLGdCQUFnQixHQUF1QixNQUFNLHNDQUFzQyxDQUFDO0FBNkI3Rjs7R0FFRztBQUNILE1BQU0sT0FBTyxRQUFTLFNBQVEsSUFBSSxDQUFDLFFBQVE7SUF5QnpDOztPQUVHO0lBQ0gsWUFBWSxTQUErQixFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNyRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO1FBQy9CLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNwRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUFFO1FBQy9ELElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGFBQWEsRUFBQyxDQUFDLENBQUM7U0FBRTtRQUN0RyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1NBQUU7SUFDMUYsQ0FBQztJQUNEOztPQUVHO0lBQ0ksTUFBTSxDQUFDLHVCQUF1QjtRQUNuQyxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQjtRQUMvQixJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFHLFdBQVcsRUFBRSxrRkFBa0YsR0FBRyxDQUFDLENBQUM7U0FDeko7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2hFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDcEUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN0RixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzVFLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBdEREOztHQUVHO0FBQzZCLHNCQUFhLEdBQVUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBSZXNvdXJjZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUmVzb3VyY2VUeXBlc1ZhbHVlU2V0Q29kaW5ncywgUmVzb3VyY2VUeXBlc1ZhbHVlU2V0Q29kaW5nVHlwZSx9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVzb3VyY2VUeXBlc1ZhbHVlU2V0Q29kaW5ncy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUmVzb3VyY2VUeXBlc1ZhbHVlU2V0Q29kZXMsICBSZXNvdXJjZVR5cGVzVmFsdWVTZXRDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVzb3VyY2VUeXBlc1ZhbHVlU2V0Q29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IExhbmd1YWdlc0NvZGluZ3MsIExhbmd1YWdlc0NvZGluZ1R5cGUsfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xhbmd1YWdlc0NvZGluZ3MuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IExhbmd1YWdlc0NvZGVzLCAgTGFuZ3VhZ2VzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xhbmd1YWdlc0NvZGVzLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFJlc291cmNlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlQXJncyBleHRlbmRzIGZoaXIuRmhpckJhc2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IHN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvbmx5IHRpbWUgdGhhdCBhIHJlc291cmNlIGRvZXMgbm90IGhhdmUgYW4gaWQgaXMgd2hlbiBpdCBpcyBiZWluZyBzdWJtaXR0ZWQgdG8gdGhlIHNlcnZlciB1c2luZyBhIGNyZWF0ZSBvcGVyYXRpb24uXHJcbiAgICovXHJcbiAgaWQ/OiBmaGlyLkZoaXJJZHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtZXRhZGF0YSBhYm91dCB0aGUgcmVzb3VyY2UuIFRoaXMgaXMgY29udGVudCB0aGF0IGlzIG1haW50YWluZWQgYnkgdGhlIGluZnJhc3RydWN0dXJlLiBDaGFuZ2VzIHRvIHRoZSBjb250ZW50IG1pZ2h0IG5vdCBhbHdheXMgYmUgYXNzb2NpYXRlZCB3aXRoIHZlcnNpb24gY2hhbmdlcyB0byB0aGUgcmVzb3VyY2UuXHJcbiAgICovXHJcbiAgbWV0YT86IGZoaXIuTWV0YUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFzc2VydGluZyB0aGlzIHJ1bGUgc2V0IHJlc3RyaWN0cyB0aGUgY29udGVudCB0byBiZSBvbmx5IHVuZGVyc3Rvb2QgYnkgYSBsaW1pdGVkIHNldCBvZiB0cmFkaW5nIHBhcnRuZXJzLiBUaGlzIGluaGVyZW50bHkgbGltaXRzIHRoZSB1c2VmdWxuZXNzIG9mIHRoZSBkYXRhIGluIHRoZSBsb25nIHRlcm0uIEhvd2V2ZXIsIHRoZSBleGlzdGluZyBoZWFsdGggZWNvLXN5c3RlbSBpcyBoaWdobHkgZnJhY3R1cmVkLCBhbmQgbm90IHlldCByZWFkeSB0byBkZWZpbmUsIGNvbGxlY3QsIGFuZCBleGNoYW5nZSBkYXRhIGluIGEgZ2VuZXJhbGx5IGNvbXB1dGFibGUgc2Vuc2UuIFdoZXJldmVyIHBvc3NpYmxlLCBpbXBsZW1lbnRlcnMgYW5kL29yIHNwZWNpZmljYXRpb24gd3JpdGVycyBzaG91bGQgYXZvaWQgdXNpbmcgdGhpcyBlbGVtZW50LiBPZnRlbiwgd2hlbiB1c2VkLCB0aGUgVVJMIGlzIGEgcmVmZXJlbmNlIHRvIGFuIGltcGxlbWVudGF0aW9uIGd1aWRlIHRoYXQgZGVmaW5lcyB0aGVzZSBzcGVjaWFsIHJ1bGVzIGFzIHBhcnQgb2YgaXQncyBuYXJyYXRpdmUgYWxvbmcgd2l0aCBvdGhlciBwcm9maWxlcywgdmFsdWUgc2V0cywgZXRjLlxyXG4gICAqL1xyXG4gIGltcGxpY2l0UnVsZXM/OiBmaGlyLkZoaXJVcml8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBMYW5ndWFnZSBpcyBwcm92aWRlZCB0byBzdXBwb3J0IGluZGV4aW5nIGFuZCBhY2Nlc3NpYmlsaXR5ICh0eXBpY2FsbHksIHNlcnZpY2VzIHN1Y2ggYXMgdGV4dCB0byBzcGVlY2ggdXNlIHRoZSBsYW5ndWFnZSB0YWcpLiBUaGUgaHRtbCBsYW5ndWFnZSB0YWcgaW4gdGhlIG5hcnJhdGl2ZSBhcHBsaWVzICB0byB0aGUgbmFycmF0aXZlLiBUaGUgbGFuZ3VhZ2UgdGFnIG9uIHRoZSByZXNvdXJjZSBtYXkgYmUgdXNlZCB0byBzcGVjaWZ5IHRoZSBsYW5ndWFnZSBvZiBvdGhlciBwcmVzZW50YXRpb25zIGdlbmVyYXRlZCBmcm9tIHRoZSBkYXRhIGluIHRoZSByZXNvdXJjZS4gTm90IGFsbCB0aGUgY29udGVudCBoYXMgdG8gYmUgaW4gdGhlIGJhc2UgbGFuZ3VhZ2UuIFRoZSBSZXNvdXJjZS5sYW5ndWFnZSBzaG91bGQgbm90IGJlIGFzc3VtZWQgdG8gYXBwbHkgdG8gdGhlIG5hcnJhdGl2ZSBhdXRvbWF0aWNhbGx5LiBJZiBhIGxhbmd1YWdlIGlzIHNwZWNpZmllZCwgaXQgc2hvdWxkIGl0IGFsc28gYmUgc3BlY2lmaWVkIG9uIHRoZSBkaXYgZWxlbWVudCBpbiB0aGUgaHRtbCAoc2VlIHJ1bGVzIGluIEhUTUw1IGZvciBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW4geG1sOmxhbmcgYW5kIHRoZSBodG1sIGxhbmcgYXR0cmlidXRlKS5cclxuICAgKi9cclxuICBsYW5ndWFnZT86IGZoaXIuRmhpckNvZGV8c3RyaW5nfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIGJhc2UgcmVzb3VyY2UgdHlwZSBmb3IgZXZlcnl0aGluZy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZSBleHRlbmRzIGZoaXIuRmhpckJhc2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUmVzb3VyY2UnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXNvdXJjZVR5cGU6IHN0cmluZ3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvbmx5IHRpbWUgdGhhdCBhIHJlc291cmNlIGRvZXMgbm90IGhhdmUgYW4gaWQgaXMgd2hlbiBpdCBpcyBiZWluZyBzdWJtaXR0ZWQgdG8gdGhlIHNlcnZlciB1c2luZyBhIGNyZWF0ZSBvcGVyYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIGlkPzogZmhpci5GaGlySWR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtZXRhZGF0YSBhYm91dCB0aGUgcmVzb3VyY2UuIFRoaXMgaXMgY29udGVudCB0aGF0IGlzIG1haW50YWluZWQgYnkgdGhlIGluZnJhc3RydWN0dXJlLiBDaGFuZ2VzIHRvIHRoZSBjb250ZW50IG1pZ2h0IG5vdCBhbHdheXMgYmUgYXNzb2NpYXRlZCB3aXRoIHZlcnNpb24gY2hhbmdlcyB0byB0aGUgcmVzb3VyY2UuXHJcbiAgICovXHJcbiAgcHVibGljIG1ldGE/OiBmaGlyLk1ldGF8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFzc2VydGluZyB0aGlzIHJ1bGUgc2V0IHJlc3RyaWN0cyB0aGUgY29udGVudCB0byBiZSBvbmx5IHVuZGVyc3Rvb2QgYnkgYSBsaW1pdGVkIHNldCBvZiB0cmFkaW5nIHBhcnRuZXJzLiBUaGlzIGluaGVyZW50bHkgbGltaXRzIHRoZSB1c2VmdWxuZXNzIG9mIHRoZSBkYXRhIGluIHRoZSBsb25nIHRlcm0uIEhvd2V2ZXIsIHRoZSBleGlzdGluZyBoZWFsdGggZWNvLXN5c3RlbSBpcyBoaWdobHkgZnJhY3R1cmVkLCBhbmQgbm90IHlldCByZWFkeSB0byBkZWZpbmUsIGNvbGxlY3QsIGFuZCBleGNoYW5nZSBkYXRhIGluIGEgZ2VuZXJhbGx5IGNvbXB1dGFibGUgc2Vuc2UuIFdoZXJldmVyIHBvc3NpYmxlLCBpbXBsZW1lbnRlcnMgYW5kL29yIHNwZWNpZmljYXRpb24gd3JpdGVycyBzaG91bGQgYXZvaWQgdXNpbmcgdGhpcyBlbGVtZW50LiBPZnRlbiwgd2hlbiB1c2VkLCB0aGUgVVJMIGlzIGEgcmVmZXJlbmNlIHRvIGFuIGltcGxlbWVudGF0aW9uIGd1aWRlIHRoYXQgZGVmaW5lcyB0aGVzZSBzcGVjaWFsIHJ1bGVzIGFzIHBhcnQgb2YgaXQncyBuYXJyYXRpdmUgYWxvbmcgd2l0aCBvdGhlciBwcm9maWxlcywgdmFsdWUgc2V0cywgZXRjLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpbXBsaWNpdFJ1bGVzPzogZmhpci5GaGlyVXJpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBMYW5ndWFnZSBpcyBwcm92aWRlZCB0byBzdXBwb3J0IGluZGV4aW5nIGFuZCBhY2Nlc3NpYmlsaXR5ICh0eXBpY2FsbHksIHNlcnZpY2VzIHN1Y2ggYXMgdGV4dCB0byBzcGVlY2ggdXNlIHRoZSBsYW5ndWFnZSB0YWcpLiBUaGUgaHRtbCBsYW5ndWFnZSB0YWcgaW4gdGhlIG5hcnJhdGl2ZSBhcHBsaWVzICB0byB0aGUgbmFycmF0aXZlLiBUaGUgbGFuZ3VhZ2UgdGFnIG9uIHRoZSByZXNvdXJjZSBtYXkgYmUgdXNlZCB0byBzcGVjaWZ5IHRoZSBsYW5ndWFnZSBvZiBvdGhlciBwcmVzZW50YXRpb25zIGdlbmVyYXRlZCBmcm9tIHRoZSBkYXRhIGluIHRoZSByZXNvdXJjZS4gTm90IGFsbCB0aGUgY29udGVudCBoYXMgdG8gYmUgaW4gdGhlIGJhc2UgbGFuZ3VhZ2UuIFRoZSBSZXNvdXJjZS5sYW5ndWFnZSBzaG91bGQgbm90IGJlIGFzc3VtZWQgdG8gYXBwbHkgdG8gdGhlIG5hcnJhdGl2ZSBhdXRvbWF0aWNhbGx5LiBJZiBhIGxhbmd1YWdlIGlzIHNwZWNpZmllZCwgaXQgc2hvdWxkIGl0IGFsc28gYmUgc3BlY2lmaWVkIG9uIHRoZSBkaXYgZWxlbWVudCBpbiB0aGUgaHRtbCAoc2VlIHJ1bGVzIGluIEhUTUw1IGZvciBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW4geG1sOmxhbmcgYW5kIHRoZSBodG1sIGxhbmcgYXR0cmlidXRlKS5cclxuICAgKi9cclxuICBwdWJsaWMgbGFuZ3VhZ2U/OiBmaGlyLkZoaXJDb2RlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBSZXNvdXJjZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFJlc291cmNlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ1Jlc291cmNlJztcclxuICAgIGlmIChzb3VyY2VbJ2lkJ10pIHsgdGhpcy5pZCA9IG5ldyBmaGlyLkZoaXJJZCh7dmFsdWU6IHNvdXJjZS5pZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydtZXRhJ10pIHsgdGhpcy5tZXRhID0gbmV3IGZoaXIuTWV0YShzb3VyY2UubWV0YSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2ltcGxpY2l0UnVsZXMnXSkgeyB0aGlzLmltcGxpY2l0UnVsZXMgPSBuZXcgZmhpci5GaGlyVXJpKHt2YWx1ZTogc291cmNlLmltcGxpY2l0UnVsZXN9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnbGFuZ3VhZ2UnXSkgeyB0aGlzLmxhbmd1YWdlID0gbmV3IGZoaXIuRmhpckNvZGUoe3ZhbHVlOiBzb3VyY2UubGFuZ3VhZ2V9KTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBQcmVmZXJyZWQtYm91bmQgVmFsdWUgU2V0IGZvciBsYW5ndWFnZSAoUmVzb3VyY2UubGFuZ3VhZ2UpXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBsYW5ndWFnZVByZWZlcnJlZENvZGluZygpOkxhbmd1YWdlc0NvZGluZ1R5cGUge1xyXG4gICAgcmV0dXJuIExhbmd1YWdlc0NvZGluZ3M7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbigpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXNbJ3Jlc291cmNlVHlwZSddKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdyZXF1aXJlZCcsICBkaWFnbm9zdGljczogJ01pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgcmVzb3VyY2VUeXBlOnN0cmluZyBmaGlyOiBSZXNvdXJjZS5yZXNvdXJjZVR5cGU6c3RyaW5nJywgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1tcImlkXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuaWQuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICh0aGlzW1wibWV0YVwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLm1ldGEuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICh0aGlzW1wiaW1wbGljaXRSdWxlc1wiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLmltcGxpY2l0UnVsZXMuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICh0aGlzW1wibGFuZ3VhZ2VcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5sYW5ndWFnZS5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19