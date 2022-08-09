// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Period
import * as fhir from '../fhir.js';
/**
 * A time period defined by a start and end date and optionally time.
 */
export class Period extends fhir.FhirElement {
    /**
     * Default constructor for Period - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['start'] !== undefined) {
            this.start = new fhir.FhirDateTime({ value: source.start }, options);
        }
        if (source['_start']) {
            if (this.start) {
                this.start.addExtendedProperties(source._start);
            }
            else {
                this.start = new fhir.FhirDateTime(source._start, options);
            }
        }
        if (source['end'] !== undefined) {
            this.end = new fhir.FhirDateTime({ value: source.end }, options);
        }
        if (source['_end']) {
            if (this.end) {
                this.end.addExtendedProperties(source._end);
            }
            else {
                this.end = new fhir.FhirDateTime(source._end, options);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Period';
        }
        iss.push(...this.vOS('start', exp));
        iss.push(...this.vOS('end', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Period._fts_dataType = 'Period';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyaW9kLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9QZXJpb2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsMkJBQTJCO0FBRTNCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBd0JuQzs7R0FFRztBQUNILE1BQU0sT0FBTyxNQUFPLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUFhMUM7O09BRUc7SUFDSCxZQUFZLFNBQTZCLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ25GLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDMUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLE1BQU8sQ0FBQyxDQUFDO2FBQUU7aUJBQ2hFO2dCQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUF3QyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQUU7U0FDdkc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUNwRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsSUFBSyxDQUFDLENBQUM7YUFBRTtpQkFDMUQ7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQXNDLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFBRTtTQUNuRztJQUNILENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLEdBQUcsR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxRQUFRLENBQUE7U0FBRTtRQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBckNEOztHQUVHO0FBQzZCLG9CQUFhLEdBQVUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBQZXJpb2RcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgUGVyaW9kIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZEFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIGxvdyBlbGVtZW50IGlzIG1pc3NpbmcsIHRoZSBtZWFuaW5nIGlzIHRoYXQgdGhlIGxvdyBib3VuZGFyeSBpcyBub3Qga25vd24uXHJcbiAgICovXHJcbiAgc3RhcnQ/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBQZXJpb2Quc3RhcnRcclxuICAgKi9cclxuICBfc3RhcnQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBoaWdoIHZhbHVlIGluY2x1ZGVzIGFueSBtYXRjaGluZyBkYXRlL3RpbWUuIGkuZS4gMjAxMi0wMi0wM1QxMDowMDowMCBpcyBpbiBhIHBlcmlvZCB0aGF0IGhhcyBhIGVuZCB2YWx1ZSBvZiAyMDEyLTAyLTAzLlxyXG4gICAqL1xyXG4gIGVuZD86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFBlcmlvZC5lbmRcclxuICAgKi9cclxuICBfZW5kPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgdGltZSBwZXJpb2QgZGVmaW5lZCBieSBhIHN0YXJ0IGFuZCBlbmQgZGF0ZSBhbmQgb3B0aW9uYWxseSB0aW1lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBlcmlvZCBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUGVyaW9kJztcclxuICAvKipcclxuICAgKiBJZiB0aGUgbG93IGVsZW1lbnQgaXMgbWlzc2luZywgdGhlIG1lYW5pbmcgaXMgdGhhdCB0aGUgbG93IGJvdW5kYXJ5IGlzIG5vdCBrbm93bi5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhcnQ/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGhpZ2ggdmFsdWUgaW5jbHVkZXMgYW55IG1hdGNoaW5nIGRhdGUvdGltZS4gaS5lLiAyMDEyLTAyLTAzVDEwOjAwOjAwIGlzIGluIGEgcGVyaW9kIHRoYXQgaGFzIGEgZW5kIHZhbHVlIG9mIDIwMTItMDItMDMuXHJcbiAgICovXHJcbiAgcHVibGljIGVuZD86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBQZXJpb2QgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxQZXJpb2RBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnc3RhcnQnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc3RhcnQgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2Uuc3RhcnR9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXJ0J10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhcnQpIHsgdGhpcy5zdGFydC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGFydCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXJ0ID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fc3RhcnQgYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZW5kJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmVuZCA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5lbmR9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2VuZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmVuZCkgeyB0aGlzLmVuZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9lbmQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5lbmQgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9lbmQgYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1BlcmlvZCcgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3N0YXJ0JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdlbmQnLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19