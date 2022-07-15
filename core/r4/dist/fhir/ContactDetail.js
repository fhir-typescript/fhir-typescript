// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdERldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQ29udGFjdERldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFvQm5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGFBQWMsU0FBUSxJQUFJLENBQUMsV0FBVztJQWFqRDs7T0FFRztJQUNILFlBQVksU0FBb0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDMUYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDOUUsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQyxDQUFDO2FBQUU7aUJBQzdEO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFxQyxDQUFDLENBQUM7YUFBRTtTQUN4RjtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUN6RjtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQUU7SUFDN0IsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLGVBQWUsQ0FBQTtTQUFFO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBbENEOztHQUVHO0FBQzZCLDJCQUFhLEdBQVUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBDb250YWN0RGV0YWlsXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIENvbnRhY3REZXRhaWwgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFjdERldGFpbEFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlcmUgaXMgbm8gbmFtZWQgaW5kaXZpZHVhbCwgdGhlIHRlbGVjb20gaW5mb3JtYXRpb24gaXMgZm9yIHRoZSBvcmdhbml6YXRpb24gYXMgYSB3aG9sZS5cclxuICAgKi9cclxuICBuYW1lPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvbnRhY3REZXRhaWwubmFtZVxyXG4gICAqL1xyXG4gIF9uYW1lPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgY29udGFjdCBkZXRhaWxzIGZvciB0aGUgaW5kaXZpZHVhbCAoaWYgYSBuYW1lIHdhcyBwcm92aWRlZCkgb3IgdGhlIG9yZ2FuaXphdGlvbi5cclxuICAgKi9cclxuICB0ZWxlY29tPzogZmhpci5Db250YWN0UG9pbnRBcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogU3BlY2lmaWVzIGNvbnRhY3QgaW5mb3JtYXRpb24gZm9yIGEgcGVyc29uIG9yIG9yZ2FuaXphdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0RGV0YWlsIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdDb250YWN0RGV0YWlsJztcclxuICAvKipcclxuICAgKiBJZiB0aGVyZSBpcyBubyBuYW1lZCBpbmRpdmlkdWFsLCB0aGUgdGVsZWNvbSBpbmZvcm1hdGlvbiBpcyBmb3IgdGhlIG9yZ2FuaXphdGlvbiBhcyBhIHdob2xlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBuYW1lPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgY29udGFjdCBkZXRhaWxzIGZvciB0aGUgaW5kaXZpZHVhbCAoaWYgYSBuYW1lIHdhcyBwcm92aWRlZCkgb3IgdGhlIG9yZ2FuaXphdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgdGVsZWNvbTogZmhpci5Db250YWN0UG9pbnRbXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBDb250YWN0RGV0YWlsIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8Q29udGFjdERldGFpbEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyduYW1lJ10pIHsgdGhpcy5uYW1lID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5uYW1lfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19uYW1lJ10pIHtcclxuICAgICAgaWYgKHRoaXMubmFtZSkgeyB0aGlzLm5hbWUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fbmFtZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLm5hbWUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fbmFtZSBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndGVsZWNvbSddKSB7IHRoaXMudGVsZWNvbSA9IHNvdXJjZS50ZWxlY29tLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29udGFjdFBvaW50KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMudGVsZWNvbSA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnQ29udGFjdERldGFpbCcgfVxyXG4gICAgdGhpcy52T1MoJ25hbWUnLGV4cClcclxuICAgIHRoaXMudk9BKCd0ZWxlY29tJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=