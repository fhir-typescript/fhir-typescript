// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Narrative
import * as fhir from '../fhir.js';
// @ts-ignore
import { NarrativeStatusVsValidation } from '../fhirValueSets/NarrativeStatusVsValidation.js';
/**
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 */
export class Narrative extends fhir.FhirElement {
    /**
     * Default constructor for Narrative - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
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
        if (source['div'] !== undefined) {
            this.div = new fhir.FhirXhtml({ value: source.div }, options);
        }
        else {
            this.div = null;
        }
        if (source['_div']) {
            if (this.div) {
                this.div.addExtendedProperties(source._div);
            }
            else {
                this.div = new fhir.FhirXhtml(source._div, options);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Narrative';
        }
        iss.push(...this.vRSV('status', exp, 'NarrativeStatus', NarrativeStatusVsValidation, 'r'));
        iss.push(...this.vRS('div', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Narrative._fts_dataType = 'Narrative';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmFycmF0aXZlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9OYXJyYXRpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQXVCOUY7O0dBRUc7QUFDSCxNQUFNLE9BQU8sU0FBVSxTQUFRLElBQUksQ0FBQyxXQUFXO0lBYTdDOztPQUVHO0lBQ0gsWUFBWSxTQUFnQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUN0RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUEwQixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTthQUM3SDtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDNUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLE9BQVEsQ0FBQyxDQUFDO2FBQUU7aUJBQ25FO2dCQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUEwQixNQUFNLENBQUMsT0FBaUMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1NBQ3RIO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDNUY7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztTQUFFO1FBQ3pCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFLLENBQUMsQ0FBQzthQUFFO2lCQUMxRDtnQkFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBbUMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1NBQzdGO0lBQ0gsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksR0FBRyxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLFdBQVcsQ0FBQTtTQUFFO1FBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsaUJBQWlCLEVBQUMsMkJBQTJCLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBdkNEOztHQUVHO0FBQzZCLHVCQUFhLEdBQVUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBOYXJyYXRpdmVcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IE5hcnJhdGl2ZVN0YXR1c0NvZGVzLCAgTmFycmF0aXZlU3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL05hcnJhdGl2ZVN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBOYXJyYXRpdmVTdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL05hcnJhdGl2ZVN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBOYXJyYXRpdmUgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmFycmF0aXZlQXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgc3RhdHVzIG9mIHRoZSBuYXJyYXRpdmUgLSB3aGV0aGVyIGl0J3MgZW50aXJlbHkgZ2VuZXJhdGVkIChmcm9tIGp1c3QgdGhlIGRlZmluZWQgZGF0YSBvciB0aGUgZXh0ZW5zaW9ucyB0b28pLCBvciB3aGV0aGVyIGEgaHVtYW4gYXV0aG9yZWQgaXQgYW5kIGl0IG1heSBjb250YWluIGFkZGl0aW9uYWwgZGF0YS5cclxuICAgKi9cclxuICBzdGF0dXM6IGZoaXIuRmhpckNvZGU8TmFycmF0aXZlU3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE5hcnJhdGl2ZS5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgY29udGVudHMgb2YgdGhlIGh0bWwgZWxlbWVudCBhcmUgYW4gWEhUTUwgZnJhZ21lbnQgY29udGFpbmluZyBvbmx5IHRoZSBiYXNpYyBodG1sIGZvcm1hdHRpbmcgZWxlbWVudHMgZGVzY3JpYmVkIGluIGNoYXB0ZXJzIDctMTEgYW5kIDE1IG9mIHRoZSBIVE1MIDQuMCBzdGFuZGFyZCwgJmx0O2EmZ3Q7IGVsZW1lbnRzIChlaXRoZXIgbmFtZSBvciBocmVmKSwgaW1hZ2VzIGFuZCBpbnRlcm5hbGx5IGNvbnRhaW5lZCBzdHlsZXNoZWV0cy4gVGhlIFhIVE1MIGNvbnRlbnQgU0hBTEwgTk9UIGNvbnRhaW4gYSBoZWFkLCBhIGJvZHksIGV4dGVybmFsIHN0eWxlc2hlZXQgcmVmZXJlbmNlcywgc2NyaXB0cywgZm9ybXMsIGJhc2UvbGluay94bGluaywgZnJhbWVzLCBpZnJhbWVzIGFuZCBvYmplY3RzLlxyXG4gICAqL1xyXG4gIGRpdjogZmhpci5GaGlyWGh0bWx8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTmFycmF0aXZlLmRpdlxyXG4gICAqL1xyXG4gIF9kaXY/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQSBodW1hbi1yZWFkYWJsZSBzdW1tYXJ5IG9mIHRoZSByZXNvdXJjZSBjb252ZXlpbmcgdGhlIGVzc2VudGlhbCBjbGluaWNhbCBhbmQgYnVzaW5lc3MgaW5mb3JtYXRpb24gZm9yIHRoZSByZXNvdXJjZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBOYXJyYXRpdmUgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ05hcnJhdGl2ZSc7XHJcbiAgLyoqXHJcbiAgICogVGhlIHN0YXR1cyBvZiB0aGUgbmFycmF0aXZlIC0gd2hldGhlciBpdCdzIGVudGlyZWx5IGdlbmVyYXRlZCAoZnJvbSBqdXN0IHRoZSBkZWZpbmVkIGRhdGEgb3IgdGhlIGV4dGVuc2lvbnMgdG9vKSwgb3Igd2hldGhlciBhIGh1bWFuIGF1dGhvcmVkIGl0IGFuZCBpdCBtYXkgY29udGFpbiBhZGRpdGlvbmFsIGRhdGEuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1czogZmhpci5GaGlyQ29kZTxOYXJyYXRpdmVTdGF0dXNDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgY29udGVudHMgb2YgdGhlIGh0bWwgZWxlbWVudCBhcmUgYW4gWEhUTUwgZnJhZ21lbnQgY29udGFpbmluZyBvbmx5IHRoZSBiYXNpYyBodG1sIGZvcm1hdHRpbmcgZWxlbWVudHMgZGVzY3JpYmVkIGluIGNoYXB0ZXJzIDctMTEgYW5kIDE1IG9mIHRoZSBIVE1MIDQuMCBzdGFuZGFyZCwgJmx0O2EmZ3Q7IGVsZW1lbnRzIChlaXRoZXIgbmFtZSBvciBocmVmKSwgaW1hZ2VzIGFuZCBpbnRlcm5hbGx5IGNvbnRhaW5lZCBzdHlsZXNoZWV0cy4gVGhlIFhIVE1MIGNvbnRlbnQgU0hBTEwgTk9UIGNvbnRhaW4gYSBoZWFkLCBhIGJvZHksIGV4dGVybmFsIHN0eWxlc2hlZXQgcmVmZXJlbmNlcywgc2NyaXB0cywgZm9ybXMsIGJhc2UvbGluay94bGluaywgZnJhbWVzLCBpZnJhbWVzIGFuZCBvYmplY3RzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkaXY6IGZoaXIuRmhpclhodG1sfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgTmFycmF0aXZlIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8TmFycmF0aXZlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxOYXJyYXRpdmVTdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdHVzfSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMpIHsgdGhpcy5zdGF0dXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8TmFycmF0aXZlU3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydkaXYnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZGl2ID0gbmV3IGZoaXIuRmhpclhodG1sKHt2YWx1ZTogc291cmNlLmRpdn0sIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5kaXYgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGl2J10pIHtcclxuICAgICAgaWYgKHRoaXMuZGl2KSB7IHRoaXMuZGl2LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2RpdiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRpdiA9IG5ldyBmaGlyLkZoaXJYaHRtbChzb3VyY2UuX2RpdiBhcyBQYXJ0aWFsPGZoaXIuRmhpclhodG1sQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnTmFycmF0aXZlJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSU1YoJ3N0YXR1cycsZXhwLCdOYXJyYXRpdmVTdGF0dXMnLE5hcnJhdGl2ZVN0YXR1c1ZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdkaXYnLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19