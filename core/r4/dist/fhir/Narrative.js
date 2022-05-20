// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Narrative
import * as fhir from '../fhir.js';
// @ts-ignore
import { NarrativeStatusCodings, } from '../fhirValueSets/NarrativeStatusCodings.js';
/**
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 */
export class Narrative extends fhir.FhirElement {
    /**
     * Default constructor for Narrative - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['div']) {
            this.div = new fhir.FhirXhtml({ value: source.div });
        }
        else {
            this.div = null;
        }
    }
    /**
     * Required-bound Value Set for status (Narrative.status)
     */
    static statusRequiredCoding() {
        return NarrativeStatusCodings;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        let issues = super.doModelValidation();
        if (!this['status']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status:NarrativeStatusCodeType fhir: Narrative.status:code', });
        }
        if (!this['div']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property div:fhir.FhirXhtml fhir: Narrative.div:xhtml', });
        }
        if (this["div"]) {
            issues.push(...this.div.doModelValidation());
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Narrative._fts_dataType = 'Narrative';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmFycmF0aXZlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9OYXJyYXRpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBRW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsc0JBQXNCLEdBQTZCLE1BQU0sNENBQTRDLENBQUM7QUFpQi9HOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFNBQVUsU0FBUSxJQUFJLENBQUMsV0FBVztJQWE3Qzs7T0FFRztJQUNILFlBQVksU0FBZ0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDdEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUFFO2FBQ2pEO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDckU7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztTQUFFO0lBQzNCLENBQUM7SUFDRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxvQkFBb0I7UUFDaEMsT0FBTyxzQkFBc0IsQ0FBQztJQUNoQyxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUI7UUFDL0IsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRyxXQUFXLEVBQUUsc0ZBQXNGLEdBQUcsQ0FBQyxDQUFDO1NBQzdKO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFHLFdBQVcsRUFBRSx3RUFBd0UsR0FBRyxDQUFDLENBQUM7U0FDL0k7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xFLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBekNEOztHQUVHO0FBQzZCLHVCQUFhLEdBQVUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBOYXJyYXRpdmVcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IE5hcnJhdGl2ZVN0YXR1c0NvZGluZ3MsIE5hcnJhdGl2ZVN0YXR1c0NvZGluZ1R5cGUsfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL05hcnJhdGl2ZVN0YXR1c0NvZGluZ3MuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IE5hcnJhdGl2ZVN0YXR1c0NvZGVzLCAgTmFycmF0aXZlU3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL05hcnJhdGl2ZVN0YXR1c0NvZGVzLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIE5hcnJhdGl2ZSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBOYXJyYXRpdmVBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzdGF0dXMgb2YgdGhlIG5hcnJhdGl2ZSAtIHdoZXRoZXIgaXQncyBlbnRpcmVseSBnZW5lcmF0ZWQgKGZyb20ganVzdCB0aGUgZGVmaW5lZCBkYXRhIG9yIHRoZSBleHRlbnNpb25zIHRvbyksIG9yIHdoZXRoZXIgYSBodW1hbiBhdXRob3JlZCBpdCBhbmQgaXQgbWF5IGNvbnRhaW4gYWRkaXRpb25hbCBkYXRhLlxyXG4gICAqL1xyXG4gIHN0YXR1czogTmFycmF0aXZlU3RhdHVzQ29kZVR5cGV8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgY29udGVudHMgb2YgdGhlIGh0bWwgZWxlbWVudCBhcmUgYW4gWEhUTUwgZnJhZ21lbnQgY29udGFpbmluZyBvbmx5IHRoZSBiYXNpYyBodG1sIGZvcm1hdHRpbmcgZWxlbWVudHMgZGVzY3JpYmVkIGluIGNoYXB0ZXJzIDctMTEgYW5kIDE1IG9mIHRoZSBIVE1MIDQuMCBzdGFuZGFyZCwgJmx0O2EmZ3Q7IGVsZW1lbnRzIChlaXRoZXIgbmFtZSBvciBocmVmKSwgaW1hZ2VzIGFuZCBpbnRlcm5hbGx5IGNvbnRhaW5lZCBzdHlsZXNoZWV0cy4gVGhlIFhIVE1MIGNvbnRlbnQgU0hBTEwgTk9UIGNvbnRhaW4gYSBoZWFkLCBhIGJvZHksIGV4dGVybmFsIHN0eWxlc2hlZXQgcmVmZXJlbmNlcywgc2NyaXB0cywgZm9ybXMsIGJhc2UvbGluay94bGluaywgZnJhbWVzLCBpZnJhbWVzIGFuZCBvYmplY3RzLlxyXG4gICAqL1xyXG4gIGRpdjogZmhpci5GaGlyWGh0bWx8c3RyaW5nfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgaHVtYW4tcmVhZGFibGUgc3VtbWFyeSBvZiB0aGUgcmVzb3VyY2UgY29udmV5aW5nIHRoZSBlc3NlbnRpYWwgY2xpbmljYWwgYW5kIGJ1c2luZXNzIGluZm9ybWF0aW9uIGZvciB0aGUgcmVzb3VyY2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTmFycmF0aXZlIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdOYXJyYXRpdmUnO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzdGF0dXMgb2YgdGhlIG5hcnJhdGl2ZSAtIHdoZXRoZXIgaXQncyBlbnRpcmVseSBnZW5lcmF0ZWQgKGZyb20ganVzdCB0aGUgZGVmaW5lZCBkYXRhIG9yIHRoZSBleHRlbnNpb25zIHRvbyksIG9yIHdoZXRoZXIgYSBodW1hbiBhdXRob3JlZCBpdCBhbmQgaXQgbWF5IGNvbnRhaW4gYWRkaXRpb25hbCBkYXRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM6IE5hcnJhdGl2ZVN0YXR1c0NvZGVUeXBlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRlbnRzIG9mIHRoZSBodG1sIGVsZW1lbnQgYXJlIGFuIFhIVE1MIGZyYWdtZW50IGNvbnRhaW5pbmcgb25seSB0aGUgYmFzaWMgaHRtbCBmb3JtYXR0aW5nIGVsZW1lbnRzIGRlc2NyaWJlZCBpbiBjaGFwdGVycyA3LTExIGFuZCAxNSBvZiB0aGUgSFRNTCA0LjAgc3RhbmRhcmQsICZsdDthJmd0OyBlbGVtZW50cyAoZWl0aGVyIG5hbWUgb3IgaHJlZiksIGltYWdlcyBhbmQgaW50ZXJuYWxseSBjb250YWluZWQgc3R5bGVzaGVldHMuIFRoZSBYSFRNTCBjb250ZW50IFNIQUxMIE5PVCBjb250YWluIGEgaGVhZCwgYSBib2R5LCBleHRlcm5hbCBzdHlsZXNoZWV0IHJlZmVyZW5jZXMsIHNjcmlwdHMsIGZvcm1zLCBiYXNlL2xpbmsveGxpbmssIGZyYW1lcywgaWZyYW1lcyBhbmQgb2JqZWN0cy5cclxuICAgKi9cclxuICBwdWJsaWMgZGl2OiBmaGlyLkZoaXJYaHRtbHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIE5hcnJhdGl2ZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPE5hcnJhdGl2ZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydzdGF0dXMnXSkgeyB0aGlzLnN0YXR1cyA9IHNvdXJjZS5zdGF0dXM7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ2RpdiddKSB7IHRoaXMuZGl2ID0gbmV3IGZoaXIuRmhpclhodG1sKHt2YWx1ZTogc291cmNlLmRpdn0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5kaXYgPSBudWxsOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJlcXVpcmVkLWJvdW5kIFZhbHVlIFNldCBmb3Igc3RhdHVzIChOYXJyYXRpdmUuc3RhdHVzKVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgc3RhdHVzUmVxdWlyZWRDb2RpbmcoKTpOYXJyYXRpdmVTdGF0dXNDb2RpbmdUeXBlIHtcclxuICAgIHJldHVybiBOYXJyYXRpdmVTdGF0dXNDb2RpbmdzO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzWydzdGF0dXMnXSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAncmVxdWlyZWQnLCAgZGlhZ25vc3RpY3M6ICdNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5IHN0YXR1czpOYXJyYXRpdmVTdGF0dXNDb2RlVHlwZSBmaGlyOiBOYXJyYXRpdmUuc3RhdHVzOmNvZGUnLCB9KTtcclxuICAgIH1cclxuICAgIGlmICghdGhpc1snZGl2J10pIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ3JlcXVpcmVkJywgIGRpYWdub3N0aWNzOiAnTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSBkaXY6Zmhpci5GaGlyWGh0bWwgZmhpcjogTmFycmF0aXZlLmRpdjp4aHRtbCcsIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXNbXCJkaXZcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5kaXYuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==