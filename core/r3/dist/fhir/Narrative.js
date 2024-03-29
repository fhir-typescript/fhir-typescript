// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Narrative
import * as fhir from '../fhir.js';
// @ts-ignore
import { NarrativeStatusVsValidation } from '../fhirValueSets/NarrativeStatusVsValidation.js';
/**
 * A human-readable formatted text, including images.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmFycmF0aXZlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9OYXJyYXRpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQXVCOUY7O0dBRUc7QUFDSCxNQUFNLE9BQU8sU0FBVSxTQUFRLElBQUksQ0FBQyxXQUFXO0lBYTdDOztPQUVHO0lBQ0gsWUFBWSxTQUFnQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUN0RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUEwQixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTthQUM3SDtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDNUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLE9BQVEsQ0FBQyxDQUFDO2FBQUU7aUJBQ25FO2dCQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUEwQixNQUFNLENBQUMsT0FBaUMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1NBQ3RIO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDNUY7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztTQUFFO1FBQ3pCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFLLENBQUMsQ0FBQzthQUFFO2lCQUMxRDtnQkFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBbUMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1NBQzdGO0lBQ0gsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksR0FBRyxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLFdBQVcsQ0FBQTtTQUFFO1FBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsaUJBQWlCLEVBQUMsMkJBQTJCLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBdkNEOztHQUVHO0FBQzZCLHVCQUFhLEdBQVUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBOYXJyYXRpdmVcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IE5hcnJhdGl2ZVN0YXR1c0NvZGVzLCAgTmFycmF0aXZlU3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL05hcnJhdGl2ZVN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBOYXJyYXRpdmVTdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL05hcnJhdGl2ZVN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBOYXJyYXRpdmUgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmFycmF0aXZlQXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgc3RhdHVzIG9mIHRoZSBuYXJyYXRpdmUgLSB3aGV0aGVyIGl0J3MgZW50aXJlbHkgZ2VuZXJhdGVkIChmcm9tIGp1c3QgdGhlIGRlZmluZWQgZGF0YSBvciB0aGUgZXh0ZW5zaW9ucyB0b28pLCBvciB3aGV0aGVyIGEgaHVtYW4gYXV0aG9yZWQgaXQgYW5kIGl0IG1heSBjb250YWluIGFkZGl0aW9uYWwgZGF0YS5cclxuICAgKi9cclxuICBzdGF0dXM6IGZoaXIuRmhpckNvZGU8TmFycmF0aXZlU3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE5hcnJhdGl2ZS5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgY29udGVudHMgb2YgdGhlIGh0bWwgZWxlbWVudCBhcmUgYW4gWEhUTUwgZnJhZ21lbnQgY29udGFpbmluZyBvbmx5IHRoZSBiYXNpYyBodG1sIGZvcm1hdHRpbmcgZWxlbWVudHMgZGVzY3JpYmVkIGluIGNoYXB0ZXJzIDctMTEgYW5kIDE1IG9mIHRoZSBIVE1MIDQuMCBzdGFuZGFyZCwgJmx0O2EmZ3Q7IGVsZW1lbnRzIChlaXRoZXIgbmFtZSBvciBocmVmKSwgaW1hZ2VzIGFuZCBpbnRlcm5hbGx5IGNvbnRhaW5lZCBzdHlsZXNoZWV0cy4gVGhlIFhIVE1MIGNvbnRlbnQgbWF5IG5vdCBjb250YWluIGEgaGVhZCwgYSBib2R5LCBleHRlcm5hbCBzdHlsZXNoZWV0IHJlZmVyZW5jZXMsIHNjcmlwdHMsIGZvcm1zLCBiYXNlL2xpbmsveGxpbmssIGZyYW1lcywgaWZyYW1lcyBhbmQgb2JqZWN0cy5cclxuICAgKi9cclxuICBkaXY6IGZoaXIuRmhpclhodG1sfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE5hcnJhdGl2ZS5kaXZcclxuICAgKi9cclxuICBfZGl2PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgaHVtYW4tcmVhZGFibGUgZm9ybWF0dGVkIHRleHQsIGluY2x1ZGluZyBpbWFnZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTmFycmF0aXZlIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdOYXJyYXRpdmUnO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzdGF0dXMgb2YgdGhlIG5hcnJhdGl2ZSAtIHdoZXRoZXIgaXQncyBlbnRpcmVseSBnZW5lcmF0ZWQgKGZyb20ganVzdCB0aGUgZGVmaW5lZCBkYXRhIG9yIHRoZSBleHRlbnNpb25zIHRvbyksIG9yIHdoZXRoZXIgYSBodW1hbiBhdXRob3JlZCBpdCBhbmQgaXQgbWF5IGNvbnRhaW4gYWRkaXRpb25hbCBkYXRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM6IGZoaXIuRmhpckNvZGU8TmFycmF0aXZlU3RhdHVzQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRlbnRzIG9mIHRoZSBodG1sIGVsZW1lbnQgYXJlIGFuIFhIVE1MIGZyYWdtZW50IGNvbnRhaW5pbmcgb25seSB0aGUgYmFzaWMgaHRtbCBmb3JtYXR0aW5nIGVsZW1lbnRzIGRlc2NyaWJlZCBpbiBjaGFwdGVycyA3LTExIGFuZCAxNSBvZiB0aGUgSFRNTCA0LjAgc3RhbmRhcmQsICZsdDthJmd0OyBlbGVtZW50cyAoZWl0aGVyIG5hbWUgb3IgaHJlZiksIGltYWdlcyBhbmQgaW50ZXJuYWxseSBjb250YWluZWQgc3R5bGVzaGVldHMuIFRoZSBYSFRNTCBjb250ZW50IG1heSBub3QgY29udGFpbiBhIGhlYWQsIGEgYm9keSwgZXh0ZXJuYWwgc3R5bGVzaGVldCByZWZlcmVuY2VzLCBzY3JpcHRzLCBmb3JtcywgYmFzZS9saW5rL3hsaW5rLCBmcmFtZXMsIGlmcmFtZXMgYW5kIG9iamVjdHMuXHJcbiAgICovXHJcbiAgcHVibGljIGRpdjogZmhpci5GaGlyWGh0bWx8bnVsbDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBOYXJyYXRpdmUgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxOYXJyYXRpdmVBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPE5hcnJhdGl2ZVN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9LCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxOYXJyYXRpdmVTdGF0dXNDb2RlVHlwZT4oc291cmNlLl9zdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2RpdiddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5kaXYgPSBuZXcgZmhpci5GaGlyWGh0bWwoe3ZhbHVlOiBzb3VyY2UuZGl2fSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmRpdiA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kaXYnXSkge1xyXG4gICAgICBpZiAodGhpcy5kaXYpIHsgdGhpcy5kaXYuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZGl2ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZGl2ID0gbmV3IGZoaXIuRmhpclhodG1sKHNvdXJjZS5fZGl2IGFzIFBhcnRpYWw8Zmhpci5GaGlyWGh0bWxBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdOYXJyYXRpdmUnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTVignc3RhdHVzJyxleHAsJ05hcnJhdGl2ZVN0YXR1cycsTmFycmF0aXZlU3RhdHVzVnNWYWxpZGF0aW9uLCdyJykpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ2RpdicsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=