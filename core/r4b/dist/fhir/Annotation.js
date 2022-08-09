// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Annotation
import * as fhir from '../fhir.js';
/**
 * A  text note which also  contains information about who made the statement and when.
 */
export class Annotation extends fhir.FhirElement {
    /**
     * Default constructor for Annotation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['author']) {
            this.author = source.author;
        }
        else if (source['authorReference']) {
            this.author = new fhir.Reference(source.authorReference, options);
        }
        else if (source['authorString'] !== undefined) {
            this.author = new fhir.FhirString({ value: source.authorString }, options);
        }
        if (source['time'] !== undefined) {
            this.time = new fhir.FhirDateTime({ value: source.time }, options);
        }
        if (source['_time']) {
            if (this.time) {
                this.time.addExtendedProperties(source._time);
            }
            else {
                this.time = new fhir.FhirDateTime(source._time, options);
            }
        }
        if (source['text'] !== undefined) {
            this.text = new fhir.FhirMarkdown({ value: source.text }, options);
        }
        else {
            this.text = null;
        }
        if (source['_text']) {
            if (this.text) {
                this.text.addExtendedProperties(source._text);
            }
            else {
                this.text = new fhir.FhirMarkdown(source._text, options);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Annotation';
        }
        iss.push(...this.vOS('author', exp));
        iss.push(...this.vOS('time', exp));
        iss.push(...this.vRS('text', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Annotation._fts_dataType = 'Annotation';
/**
 * Internal flag to properly serialize choice-type element Annotation.author[x]
 */
Annotation._fts_authorIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQW5ub3RhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFvQ25DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFVBQVcsU0FBUSxJQUFJLENBQUMsV0FBVztJQXFCOUM7O09BRUc7SUFDSCxZQUFZLFNBQWlDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3ZGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FBRTthQUNqRCxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO2FBQ3JHLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQzVILElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQ3ZHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsQ0FBQzthQUFFO2lCQUM3RDtnQkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBdUMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1NBQ3JHO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDbEc7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzFCLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsQ0FBQzthQUFFO2lCQUM3RDtnQkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBdUMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1NBQ3JHO0lBQ0gsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksR0FBRyxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLFlBQVksQ0FBQTtTQUFFO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUFsREQ7O0dBRUc7QUFDNkIsd0JBQWEsR0FBVSxZQUFZLENBQUM7QUFLcEU7O0dBRUc7QUFDdUIsOEJBQW1CLEdBQVEsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogQW5ub3RhdGlvblxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBBbm5vdGF0aW9uIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEFubm90YXRpb25BcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIE9yZ2FuaXphdGlvbiBpcyB1c2VkIHdoZW4gdGhlcmUncyBubyBuZWVkIGZvciBzcGVjaWZpYyBhdHRyaWJ1dGlvbiBhcyB0byB3aG8gbWFkZSB0aGUgY29tbWVudC5cclxuICAgKi9cclxuICBhdXRob3I/OiBmaGlyLlJlZmVyZW5jZXxmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE9yZ2FuaXphdGlvbiBpcyB1c2VkIHdoZW4gdGhlcmUncyBubyBuZWVkIGZvciBzcGVjaWZpYyBhdHRyaWJ1dGlvbiBhcyB0byB3aG8gbWFkZSB0aGUgY29tbWVudC5cclxuICAgKi9cclxuICBhdXRob3JSZWZlcmVuY2U/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE9yZ2FuaXphdGlvbiBpcyB1c2VkIHdoZW4gdGhlcmUncyBubyBuZWVkIGZvciBzcGVjaWZpYyBhdHRyaWJ1dGlvbiBhcyB0byB3aG8gbWFkZSB0aGUgY29tbWVudC5cclxuICAgKi9cclxuICBhdXRob3JTdHJpbmc/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgd2hlbiB0aGlzIHBhcnRpY3VsYXIgYW5ub3RhdGlvbiB3YXMgbWFkZS5cclxuICAgKi9cclxuICB0aW1lPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQW5ub3RhdGlvbi50aW1lXHJcbiAgICovXHJcbiAgX3RpbWU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0ZXh0IG9mIHRoZSBhbm5vdGF0aW9uIGluIG1hcmtkb3duIGZvcm1hdC5cclxuICAgKi9cclxuICB0ZXh0OiBmaGlyLkZoaXJNYXJrZG93bnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBbm5vdGF0aW9uLnRleHRcclxuICAgKi9cclxuICBfdGV4dD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBICB0ZXh0IG5vdGUgd2hpY2ggYWxzbyAgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgd2hvIG1hZGUgdGhlIHN0YXRlbWVudCBhbmQgd2hlbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdBbm5vdGF0aW9uJztcclxuICAvKipcclxuICAgKiBPcmdhbml6YXRpb24gaXMgdXNlZCB3aGVuIHRoZXJlJ3Mgbm8gbmVlZCBmb3Igc3BlY2lmaWMgYXR0cmlidXRpb24gYXMgdG8gd2hvIG1hZGUgdGhlIGNvbW1lbnQuXHJcbiAgICovXHJcbiAgcHVibGljIGF1dGhvcj86IChmaGlyLlJlZmVyZW5jZXxmaGlyLkZoaXJTdHJpbmcpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IEFubm90YXRpb24uYXV0aG9yW3hdXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBfZnRzX2F1dGhvcklzQ2hvaWNlOnRydWUgPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGVuIHRoaXMgcGFydGljdWxhciBhbm5vdGF0aW9uIHdhcyBtYWRlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0aW1lPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0ZXh0IG9mIHRoZSBhbm5vdGF0aW9uIGluIG1hcmtkb3duIGZvcm1hdC5cclxuICAgKi9cclxuICBwdWJsaWMgdGV4dDogZmhpci5GaGlyTWFya2Rvd258bnVsbDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBBbm5vdGF0aW9uIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8QW5ub3RhdGlvbkFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydhdXRob3InXSkgeyB0aGlzLmF1dGhvciA9IHNvdXJjZS5hdXRob3I7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnYXV0aG9yUmVmZXJlbmNlJ10pIHsgdGhpcy5hdXRob3IgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmF1dGhvclJlZmVyZW5jZSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnYXV0aG9yU3RyaW5nJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmF1dGhvciA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuYXV0aG9yU3RyaW5nfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3RpbWUnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudGltZSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS50aW1lfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ190aW1lJ10pIHtcclxuICAgICAgaWYgKHRoaXMudGltZSkgeyB0aGlzLnRpbWUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdGltZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnRpbWUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl90aW1lIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3RleHQnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudGV4dCA9IG5ldyBmaGlyLkZoaXJNYXJrZG93bih7dmFsdWU6IHNvdXJjZS50ZXh0fSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnRleHQgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfdGV4dCddKSB7XHJcbiAgICAgIGlmICh0aGlzLnRleHQpIHsgdGhpcy50ZXh0LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3RleHQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy50ZXh0ID0gbmV3IGZoaXIuRmhpck1hcmtkb3duKHNvdXJjZS5fdGV4dCBhcyBQYXJ0aWFsPGZoaXIuRmhpck1hcmtkb3duQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnQW5ub3RhdGlvbicgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2F1dGhvcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndGltZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygndGV4dCcsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=