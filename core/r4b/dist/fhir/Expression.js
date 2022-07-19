// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Expression
import * as fhir from '../fhir.js';
/**
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 */
export class Expression extends fhir.FhirElement {
    /**
     * Default constructor for Expression - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['_description']) {
            if (this.description) {
                this.description.addExtendedProperties(source._description);
            }
            else {
                this.description = new fhir.FhirString(source._description);
            }
        }
        if (source['name']) {
            this.name = new fhir.FhirId({ value: source.name });
        }
        if (source['_name']) {
            if (this.name) {
                this.name.addExtendedProperties(source._name);
            }
            else {
                this.name = new fhir.FhirId(source._name);
            }
        }
        if (source['language']) {
            this.language = new fhir.FhirCode({ value: source.language });
        }
        else {
            this.language = null;
        }
        if (source['_language']) {
            if (this.language) {
                this.language.addExtendedProperties(source._language);
            }
            else {
                this.language = new fhir.FhirCode(source._language);
            }
        }
        if (source['expression']) {
            this.expression = new fhir.FhirString({ value: source.expression });
        }
        if (source['_expression']) {
            if (this.expression) {
                this.expression.addExtendedProperties(source._expression);
            }
            else {
                this.expression = new fhir.FhirString(source._expression);
            }
        }
        if (source['reference']) {
            this.reference = new fhir.FhirUri({ value: source.reference });
        }
        if (source['_reference']) {
            if (this.reference) {
                this.reference.addExtendedProperties(source._reference);
            }
            else {
                this.reference = new fhir.FhirUri(source._reference);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Expression';
        }
        iss.push(...this.vOS('description', exp));
        iss.push(...this.vOS('name', exp));
        iss.push(...this.vRS('language', exp));
        iss.push(...this.vOS('expression', exp));
        iss.push(...this.vOS('reference', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Expression._fts_dataType = 'Expression';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhwcmVzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRXhwcmVzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFvRG5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFVBQVcsU0FBUSxJQUFJLENBQUMsV0FBVztJQXlCOUM7O09BRUc7SUFDSCxZQUFZLFNBQWlDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3ZGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ25HLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxZQUFhLENBQUMsQ0FBQzthQUFFO2lCQUNsRjtnQkFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBNEMsQ0FBQyxDQUFDO2FBQUU7U0FDdEc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDMUUsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENB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QUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQXBFRDs7R0FFRztBQUM2Qix3QkFBYSxHQUFVLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IEV4cHJlc3Npb25cclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEV4cHJlc3Npb25MYW5ndWFnZUNvZGVzLCAgRXhwcmVzc2lvbkxhbmd1YWdlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0V4cHJlc3Npb25MYW5ndWFnZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBFeHByZXNzaW9uTGFuZ3VhZ2VWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0V4cHJlc3Npb25MYW5ndWFnZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBFeHByZXNzaW9uIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEV4cHJlc3Npb25BcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEEgYnJpZWYsIG5hdHVyYWwgbGFuZ3VhZ2UgZGVzY3JpcHRpb24gb2YgdGhlIGNvbmRpdGlvbiB0aGF0IGVmZmVjdGl2ZWx5IGNvbW11bmljYXRlcyB0aGUgaW50ZW5kZWQgc2VtYW50aWNzLlxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEV4cHJlc3Npb24uZGVzY3JpcHRpb25cclxuICAgKi9cclxuICBfZGVzY3JpcHRpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEEgc2hvcnQgbmFtZSBhc3NpZ25lZCB0byB0aGUgZXhwcmVzc2lvbiB0byBhbGxvdyBmb3IgbXVsdGlwbGUgcmV1c2Ugb2YgdGhlIGV4cHJlc3Npb24gaW4gdGhlIGNvbnRleHQgd2hlcmUgaXQgaXMgZGVmaW5lZC5cclxuICAgKi9cclxuICBuYW1lPzogZmhpci5GaGlySWR8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRXhwcmVzc2lvbi5uYW1lXHJcbiAgICovXHJcbiAgX25hbWU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtZWRpYSB0eXBlIG9mIHRoZSBsYW5ndWFnZSBmb3IgdGhlIGV4cHJlc3Npb24uXHJcbiAgICovXHJcbiAgbGFuZ3VhZ2U6IGZoaXIuRmhpckNvZGV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRXhwcmVzc2lvbi5sYW5ndWFnZVxyXG4gICAqL1xyXG4gIF9sYW5ndWFnZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQW4gZXhwcmVzc2lvbiBpbiB0aGUgc3BlY2lmaWVkIGxhbmd1YWdlIHRoYXQgcmV0dXJucyBhIHZhbHVlLlxyXG4gICAqL1xyXG4gIGV4cHJlc3Npb24/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRXhwcmVzc2lvbi5leHByZXNzaW9uXHJcbiAgICovXHJcbiAgX2V4cHJlc3Npb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIElmIGJvdGggYSByZWZlcmVuY2UgYW5kIGFuIGV4cHJlc3Npb24gaXMgZm91bmQsIHRoZSByZWZlcmVuY2UgU0hBTEwgcG9pbnQgdG8gdGhlIHNhbWUgZXhwcmVzc2lvbi5cclxuICAgKi9cclxuICByZWZlcmVuY2U/OiBmaGlyLkZoaXJVcml8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRXhwcmVzc2lvbi5yZWZlcmVuY2VcclxuICAgKi9cclxuICBfcmVmZXJlbmNlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgZXhwcmVzc2lvbiB0aGF0IGlzIGV2YWx1YXRlZCBpbiBhIHNwZWNpZmllZCBjb250ZXh0IGFuZCByZXR1cm5zIGEgdmFsdWUuIFRoZSBjb250ZXh0IG9mIHVzZSBvZiB0aGUgZXhwcmVzc2lvbiBtdXN0IHNwZWNpZnkgdGhlIGNvbnRleHQgaW4gd2hpY2ggdGhlIGV4cHJlc3Npb24gaXMgZXZhbHVhdGVkLCBhbmQgaG93IHRoZSByZXN1bHQgb2YgdGhlIGV4cHJlc3Npb24gaXMgdXNlZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdFeHByZXNzaW9uJztcclxuICAvKipcclxuICAgKiBBIGJyaWVmLCBuYXR1cmFsIGxhbmd1YWdlIGRlc2NyaXB0aW9uIG9mIHRoZSBjb25kaXRpb24gdGhhdCBlZmZlY3RpdmVseSBjb21tdW5pY2F0ZXMgdGhlIGludGVuZGVkIHNlbWFudGljcy5cclxuICAgKi9cclxuICBwdWJsaWMgZGVzY3JpcHRpb24/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgc2hvcnQgbmFtZSBhc3NpZ25lZCB0byB0aGUgZXhwcmVzc2lvbiB0byBhbGxvdyBmb3IgbXVsdGlwbGUgcmV1c2Ugb2YgdGhlIGV4cHJlc3Npb24gaW4gdGhlIGNvbnRleHQgd2hlcmUgaXQgaXMgZGVmaW5lZC5cclxuICAgKi9cclxuICBwdWJsaWMgbmFtZT86IGZoaXIuRmhpcklkfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbWVkaWEgdHlwZSBvZiB0aGUgbGFuZ3VhZ2UgZm9yIHRoZSBleHByZXNzaW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsYW5ndWFnZTogZmhpci5GaGlyQ29kZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEFuIGV4cHJlc3Npb24gaW4gdGhlIHNwZWNpZmllZCBsYW5ndWFnZSB0aGF0IHJldHVybnMgYSB2YWx1ZS5cclxuICAgKi9cclxuICBwdWJsaWMgZXhwcmVzc2lvbj86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgYm90aCBhIHJlZmVyZW5jZSBhbmQgYW4gZXhwcmVzc2lvbiBpcyBmb3VuZCwgdGhlIHJlZmVyZW5jZSBTSEFMTCBwb2ludCB0byB0aGUgc2FtZSBleHByZXNzaW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWZlcmVuY2U/OiBmaGlyLkZoaXJVcml8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEV4cHJlc3Npb24gLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxFeHByZXNzaW9uQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2Rlc2NyaXB0aW9uJ10pIHsgdGhpcy5kZXNjcmlwdGlvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZGVzY3JpcHRpb259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Rlc2NyaXB0aW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb24pIHsgdGhpcy5kZXNjcmlwdGlvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kZXNjcmlwdGlvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRlc2NyaXB0aW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Rlc2NyaXB0aW9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyduYW1lJ10pIHsgdGhpcy5uYW1lID0gbmV3IGZoaXIuRmhpcklkKHt2YWx1ZTogc291cmNlLm5hbWV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX25hbWUnXSkge1xyXG4gICAgICBpZiAodGhpcy5uYW1lKSB7IHRoaXMubmFtZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9uYW1lISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubmFtZSA9IG5ldyBmaGlyLkZoaXJJZChzb3VyY2UuX25hbWUgYXMgUGFydGlhbDxmaGlyLkZoaXJJZEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbGFuZ3VhZ2UnXSkgeyB0aGlzLmxhbmd1YWdlID0gbmV3IGZoaXIuRmhpckNvZGUoe3ZhbHVlOiBzb3VyY2UubGFuZ3VhZ2V9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMubGFuZ3VhZ2UgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfbGFuZ3VhZ2UnXSkge1xyXG4gICAgICBpZiAodGhpcy5sYW5ndWFnZSkgeyB0aGlzLmxhbmd1YWdlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2xhbmd1YWdlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubGFuZ3VhZ2UgPSBuZXcgZmhpci5GaGlyQ29kZShzb3VyY2UuX2xhbmd1YWdlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZXhwcmVzc2lvbiddKSB7IHRoaXMuZXhwcmVzc2lvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZXhwcmVzc2lvbn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZXhwcmVzc2lvbiddKSB7XHJcbiAgICAgIGlmICh0aGlzLmV4cHJlc3Npb24pIHsgdGhpcy5leHByZXNzaW9uLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2V4cHJlc3Npb24hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5leHByZXNzaW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2V4cHJlc3Npb24gYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3JlZmVyZW5jZSddKSB7IHRoaXMucmVmZXJlbmNlID0gbmV3IGZoaXIuRmhpclVyaSh7dmFsdWU6IHNvdXJjZS5yZWZlcmVuY2V9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3JlZmVyZW5jZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnJlZmVyZW5jZSkgeyB0aGlzLnJlZmVyZW5jZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9yZWZlcmVuY2UhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5yZWZlcmVuY2UgPSBuZXcgZmhpci5GaGlyVXJpKHNvdXJjZS5fcmVmZXJlbmNlIGFzIFBhcnRpYWw8Zmhpci5GaGlyVXJpQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnRXhwcmVzc2lvbicgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2Rlc2NyaXB0aW9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCduYW1lJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdsYW5ndWFnZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZXhwcmVzc2lvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncmVmZXJlbmNlJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==