// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQW5ub3RhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFvQ25DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFVBQVcsU0FBUSxJQUFJLENBQUMsV0FBVztJQXFCOUM7O09BRUc7SUFDSCxZQUFZLFNBQWlDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3ZGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FBRTthQUNqRCxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO2FBQ3JHLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQzVILElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQ3ZHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsQ0FBQzthQUFFO2lCQUM3RDtnQkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBdUMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1NBQ3JHO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDbEc7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzFCLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsQ0FBQzthQUFFO2lCQUM3RDtnQkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBdUMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1NBQ3JHO0lBQ0gsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksR0FBRyxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLFlBQVksQ0FBQTtTQUFFO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUFsREQ7O0dBRUc7QUFDNkIsd0JBQWEsR0FBVSxZQUFZLENBQUM7QUFLcEU7O0dBRUc7QUFDdUIsOEJBQW1CLEdBQVEsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBBbm5vdGF0aW9uXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEFubm90YXRpb24gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW5ub3RhdGlvbkFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogT3JnYW5pemF0aW9uIGlzIHVzZWQgd2hlbiB0aGVyZSdzIG5vIG5lZWQgZm9yIHNwZWNpZmljIGF0dHJpYnV0aW9uIGFzIHRvIHdobyBtYWRlIHRoZSBjb21tZW50LlxyXG4gICAqL1xyXG4gIGF1dGhvcj86IGZoaXIuUmVmZXJlbmNlfGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogT3JnYW5pemF0aW9uIGlzIHVzZWQgd2hlbiB0aGVyZSdzIG5vIG5lZWQgZm9yIHNwZWNpZmljIGF0dHJpYnV0aW9uIGFzIHRvIHdobyBtYWRlIHRoZSBjb21tZW50LlxyXG4gICAqL1xyXG4gIGF1dGhvclJlZmVyZW5jZT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogT3JnYW5pemF0aW9uIGlzIHVzZWQgd2hlbiB0aGVyZSdzIG5vIG5lZWQgZm9yIHNwZWNpZmljIGF0dHJpYnV0aW9uIGFzIHRvIHdobyBtYWRlIHRoZSBjb21tZW50LlxyXG4gICAqL1xyXG4gIGF1dGhvclN0cmluZz86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGVuIHRoaXMgcGFydGljdWxhciBhbm5vdGF0aW9uIHdhcyBtYWRlLlxyXG4gICAqL1xyXG4gIHRpbWU/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBbm5vdGF0aW9uLnRpbWVcclxuICAgKi9cclxuICBfdGltZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRleHQgb2YgdGhlIGFubm90YXRpb24gaW4gbWFya2Rvd24gZm9ybWF0LlxyXG4gICAqL1xyXG4gIHRleHQ6IGZoaXIuRmhpck1hcmtkb3dufHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFubm90YXRpb24udGV4dFxyXG4gICAqL1xyXG4gIF90ZXh0PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgIHRleHQgbm90ZSB3aGljaCBhbHNvICBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB3aG8gbWFkZSB0aGUgc3RhdGVtZW50IGFuZCB3aGVuLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFubm90YXRpb24gZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0Fubm90YXRpb24nO1xyXG4gIC8qKlxyXG4gICAqIE9yZ2FuaXphdGlvbiBpcyB1c2VkIHdoZW4gdGhlcmUncyBubyBuZWVkIGZvciBzcGVjaWZpYyBhdHRyaWJ1dGlvbiBhcyB0byB3aG8gbWFkZSB0aGUgY29tbWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgYXV0aG9yPzogKGZoaXIuUmVmZXJlbmNlfGZoaXIuRmhpclN0cmluZyl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIGZsYWcgdG8gcHJvcGVybHkgc2VyaWFsaXplIGNob2ljZS10eXBlIGVsZW1lbnQgQW5ub3RhdGlvbi5hdXRob3JbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfYXV0aG9ySXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdoZW4gdGhpcyBwYXJ0aWN1bGFyIGFubm90YXRpb24gd2FzIG1hZGUuXHJcbiAgICovXHJcbiAgcHVibGljIHRpbWU/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRleHQgb2YgdGhlIGFubm90YXRpb24gaW4gbWFya2Rvd24gZm9ybWF0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0ZXh0OiBmaGlyLkZoaXJNYXJrZG93bnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEFubm90YXRpb24gLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxBbm5vdGF0aW9uQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2F1dGhvciddKSB7IHRoaXMuYXV0aG9yID0gc291cmNlLmF1dGhvcjsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydhdXRob3JSZWZlcmVuY2UnXSkgeyB0aGlzLmF1dGhvciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuYXV0aG9yUmVmZXJlbmNlLCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydhdXRob3JTdHJpbmcnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuYXV0aG9yID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5hdXRob3JTdHJpbmd9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsndGltZSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy50aW1lID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLnRpbWV9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3RpbWUnXSkge1xyXG4gICAgICBpZiAodGhpcy50aW1lKSB7IHRoaXMudGltZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl90aW1lISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudGltZSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX3RpbWUgYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndGV4dCddICE9PSB1bmRlZmluZWQpIHsgdGhpcy50ZXh0ID0gbmV3IGZoaXIuRmhpck1hcmtkb3duKHt2YWx1ZTogc291cmNlLnRleHR9LCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMudGV4dCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ190ZXh0J10pIHtcclxuICAgICAgaWYgKHRoaXMudGV4dCkgeyB0aGlzLnRleHQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdGV4dCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnRleHQgPSBuZXcgZmhpci5GaGlyTWFya2Rvd24oc291cmNlLl90ZXh0IGFzIFBhcnRpYWw8Zmhpci5GaGlyTWFya2Rvd25BcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdBbm5vdGF0aW9uJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnYXV0aG9yJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd0aW1lJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCd0ZXh0JyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==