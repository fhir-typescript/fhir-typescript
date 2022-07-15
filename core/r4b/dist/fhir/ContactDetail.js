// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: ContactDetail
import * as fhir from '../fhir.js';
/**
 * Specifies contact information for a person or organization.
 */
export class ContactDetail extends fhir.FhirElement {
    /**
     * Default constructor for ContactDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        if (source['_name']) {
            if (this.name) {
                this.name.addExtendedProperties(source._name);
            }
            else {
                this.name = new fhir.FhirString(source._name);
            }
        }
        if (source['telecom']) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x));
        }
        else {
            this.telecom = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'ContactDetail';
        }
        this.vOS('name', exp);
        this.vOA('telecom', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
ContactDetail._fts_dataType = 'ContactDetail';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdERldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQ29udGFjdERldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFvQm5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGFBQWMsU0FBUSxJQUFJLENBQUMsV0FBVztJQWFqRDs7T0FFRztJQUNILFlBQVksU0FBb0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDMUYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDOUUsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQyxDQUFDO2FBQUU7aUJBQzdEO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFxQyxDQUFDLENBQUM7YUFBRTtTQUN4RjtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUN6RjtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQUU7SUFDN0IsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLGVBQWUsQ0FBQTtTQUFFO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBbENEOztHQUVHO0FBQzZCLDJCQUFhLEdBQVUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogQ29udGFjdERldGFpbFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBDb250YWN0RGV0YWlsIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhY3REZXRhaWxBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZXJlIGlzIG5vIG5hbWVkIGluZGl2aWR1YWwsIHRoZSB0ZWxlY29tIGluZm9ybWF0aW9uIGlzIGZvciB0aGUgb3JnYW5pemF0aW9uIGFzIGEgd2hvbGUuXHJcbiAgICovXHJcbiAgbmFtZT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDb250YWN0RGV0YWlsLm5hbWVcclxuICAgKi9cclxuICBfbmFtZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRhY3QgZGV0YWlscyBmb3IgdGhlIGluZGl2aWR1YWwgKGlmIGEgbmFtZSB3YXMgcHJvdmlkZWQpIG9yIHRoZSBvcmdhbml6YXRpb24uXHJcbiAgICovXHJcbiAgdGVsZWNvbT86IGZoaXIuQ29udGFjdFBvaW50QXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNwZWNpZmllcyBjb250YWN0IGluZm9ybWF0aW9uIGZvciBhIHBlcnNvbiBvciBvcmdhbml6YXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29udGFjdERldGFpbCBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQ29udGFjdERldGFpbCc7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlcmUgaXMgbm8gbmFtZWQgaW5kaXZpZHVhbCwgdGhlIHRlbGVjb20gaW5mb3JtYXRpb24gaXMgZm9yIHRoZSBvcmdhbml6YXRpb24gYXMgYSB3aG9sZS5cclxuICAgKi9cclxuICBwdWJsaWMgbmFtZT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRhY3QgZGV0YWlscyBmb3IgdGhlIGluZGl2aWR1YWwgKGlmIGEgbmFtZSB3YXMgcHJvdmlkZWQpIG9yIHRoZSBvcmdhbml6YXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHRlbGVjb206IGZoaXIuQ29udGFjdFBvaW50W107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgQ29udGFjdERldGFpbCAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPENvbnRhY3REZXRhaWxBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnbmFtZSddKSB7IHRoaXMubmFtZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UubmFtZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfbmFtZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLm5hbWUpIHsgdGhpcy5uYW1lLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX25hbWUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5uYW1lID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX25hbWUgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3RlbGVjb20nXSkgeyB0aGlzLnRlbGVjb20gPSBzb3VyY2UudGVsZWNvbS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvbnRhY3RQb2ludCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnRlbGVjb20gPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0NvbnRhY3REZXRhaWwnIH1cclxuICAgIHRoaXMudk9TKCduYW1lJyxleHApXHJcbiAgICB0aGlzLnZPQSgndGVsZWNvbScsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19