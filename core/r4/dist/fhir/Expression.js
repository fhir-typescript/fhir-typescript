// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhwcmVzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRXhwcmVzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFvRG5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFVBQVcsU0FBUSxJQUFJLENBQUMsV0FBVztJQXlCOUM7O09BRUc7SUFDSCxZQUFZLFNBQWlDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3ZGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ25HLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxZQUFhLENBQUMsQ0FBQzthQUFFO2lCQUNsRjtnQkFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBNEMsQ0FBQyxDQUFDO2FBQUU7U0FDdEc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDMUUsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENB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QUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQXBFRDs7R0FFRztBQUM2Qix3QkFBYSxHQUFVLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogRXhwcmVzc2lvblxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRXhwcmVzc2lvbkxhbmd1YWdlQ29kZXMsICBFeHByZXNzaW9uTGFuZ3VhZ2VDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRXhwcmVzc2lvbkxhbmd1YWdlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEV4cHJlc3Npb25MYW5ndWFnZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRXhwcmVzc2lvbkxhbmd1YWdlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEV4cHJlc3Npb24gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXhwcmVzc2lvbkFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogQSBicmllZiwgbmF0dXJhbCBsYW5ndWFnZSBkZXNjcmlwdGlvbiBvZiB0aGUgY29uZGl0aW9uIHRoYXQgZWZmZWN0aXZlbHkgY29tbXVuaWNhdGVzIHRoZSBpbnRlbmRlZCBzZW1hbnRpY3MuXHJcbiAgICovXHJcbiAgZGVzY3JpcHRpb24/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRXhwcmVzc2lvbi5kZXNjcmlwdGlvblxyXG4gICAqL1xyXG4gIF9kZXNjcmlwdGlvbj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSBzaG9ydCBuYW1lIGFzc2lnbmVkIHRvIHRoZSBleHByZXNzaW9uIHRvIGFsbG93IGZvciBtdWx0aXBsZSByZXVzZSBvZiB0aGUgZXhwcmVzc2lvbiBpbiB0aGUgY29udGV4dCB3aGVyZSBpdCBpcyBkZWZpbmVkLlxyXG4gICAqL1xyXG4gIG5hbWU/OiBmaGlyLkZoaXJJZHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFeHByZXNzaW9uLm5hbWVcclxuICAgKi9cclxuICBfbmFtZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1lZGlhIHR5cGUgb2YgdGhlIGxhbmd1YWdlIGZvciB0aGUgZXhwcmVzc2lvbi5cclxuICAgKi9cclxuICBsYW5ndWFnZTogZmhpci5GaGlyQ29kZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFeHByZXNzaW9uLmxhbmd1YWdlXHJcbiAgICovXHJcbiAgX2xhbmd1YWdlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBbiBleHByZXNzaW9uIGluIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2UgdGhhdCByZXR1cm5zIGEgdmFsdWUuXHJcbiAgICovXHJcbiAgZXhwcmVzc2lvbj86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFeHByZXNzaW9uLmV4cHJlc3Npb25cclxuICAgKi9cclxuICBfZXhwcmVzc2lvbj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogSWYgYm90aCBhIHJlZmVyZW5jZSBhbmQgYW4gZXhwcmVzc2lvbiBpcyBmb3VuZCwgdGhlIHJlZmVyZW5jZSBTSEFMTCBwb2ludCB0byB0aGUgc2FtZSBleHByZXNzaW9uLlxyXG4gICAqL1xyXG4gIHJlZmVyZW5jZT86IGZoaXIuRmhpclVyaXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFeHByZXNzaW9uLnJlZmVyZW5jZVxyXG4gICAqL1xyXG4gIF9yZWZlcmVuY2U/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQSBleHByZXNzaW9uIHRoYXQgaXMgZXZhbHVhdGVkIGluIGEgc3BlY2lmaWVkIGNvbnRleHQgYW5kIHJldHVybnMgYSB2YWx1ZS4gVGhlIGNvbnRleHQgb2YgdXNlIG9mIHRoZSBleHByZXNzaW9uIG11c3Qgc3BlY2lmeSB0aGUgY29udGV4dCBpbiB3aGljaCB0aGUgZXhwcmVzc2lvbiBpcyBldmFsdWF0ZWQsIGFuZCBob3cgdGhlIHJlc3VsdCBvZiB0aGUgZXhwcmVzc2lvbiBpcyB1c2VkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0V4cHJlc3Npb24nO1xyXG4gIC8qKlxyXG4gICAqIEEgYnJpZWYsIG5hdHVyYWwgbGFuZ3VhZ2UgZGVzY3JpcHRpb24gb2YgdGhlIGNvbmRpdGlvbiB0aGF0IGVmZmVjdGl2ZWx5IGNvbW11bmljYXRlcyB0aGUgaW50ZW5kZWQgc2VtYW50aWNzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkZXNjcmlwdGlvbj86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBzaG9ydCBuYW1lIGFzc2lnbmVkIHRvIHRoZSBleHByZXNzaW9uIHRvIGFsbG93IGZvciBtdWx0aXBsZSByZXVzZSBvZiB0aGUgZXhwcmVzc2lvbiBpbiB0aGUgY29udGV4dCB3aGVyZSBpdCBpcyBkZWZpbmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBuYW1lPzogZmhpci5GaGlySWR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtZWRpYSB0eXBlIG9mIHRoZSBsYW5ndWFnZSBmb3IgdGhlIGV4cHJlc3Npb24uXHJcbiAgICovXHJcbiAgcHVibGljIGxhbmd1YWdlOiBmaGlyLkZoaXJDb2RlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogQW4gZXhwcmVzc2lvbiBpbiB0aGUgc3BlY2lmaWVkIGxhbmd1YWdlIHRoYXQgcmV0dXJucyBhIHZhbHVlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBleHByZXNzaW9uPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiBib3RoIGEgcmVmZXJlbmNlIGFuZCBhbiBleHByZXNzaW9uIGlzIGZvdW5kLCB0aGUgcmVmZXJlbmNlIFNIQUxMIHBvaW50IHRvIHRoZSBzYW1lIGV4cHJlc3Npb24uXHJcbiAgICovXHJcbiAgcHVibGljIHJlZmVyZW5jZT86IGZoaXIuRmhpclVyaXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgRXhwcmVzc2lvbiAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEV4cHJlc3Npb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnZGVzY3JpcHRpb24nXSkgeyB0aGlzLmRlc2NyaXB0aW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5kZXNjcmlwdGlvbn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGVzY3JpcHRpb24nXSkge1xyXG4gICAgICBpZiAodGhpcy5kZXNjcmlwdGlvbikgeyB0aGlzLmRlc2NyaXB0aW9uLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2Rlc2NyaXB0aW9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZGVzY3JpcHRpb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fZGVzY3JpcHRpb24gYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ25hbWUnXSkgeyB0aGlzLm5hbWUgPSBuZXcgZmhpci5GaGlySWQoe3ZhbHVlOiBzb3VyY2UubmFtZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfbmFtZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLm5hbWUpIHsgdGhpcy5uYW1lLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX25hbWUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5uYW1lID0gbmV3IGZoaXIuRmhpcklkKHNvdXJjZS5fbmFtZSBhcyBQYXJ0aWFsPGZoaXIuRmhpcklkQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydsYW5ndWFnZSddKSB7IHRoaXMubGFuZ3VhZ2UgPSBuZXcgZmhpci5GaGlyQ29kZSh7dmFsdWU6IHNvdXJjZS5sYW5ndWFnZX0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5sYW5ndWFnZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19sYW5ndWFnZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmxhbmd1YWdlKSB7IHRoaXMubGFuZ3VhZ2UuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fbGFuZ3VhZ2UhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5sYW5ndWFnZSA9IG5ldyBmaGlyLkZoaXJDb2RlKHNvdXJjZS5fbGFuZ3VhZ2UgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydleHByZXNzaW9uJ10pIHsgdGhpcy5leHByZXNzaW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5leHByZXNzaW9ufSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19leHByZXNzaW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZXhwcmVzc2lvbikgeyB0aGlzLmV4cHJlc3Npb24uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZXhwcmVzc2lvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmV4cHJlc3Npb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fZXhwcmVzc2lvbiBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVmZXJlbmNlJ10pIHsgdGhpcy5yZWZlcmVuY2UgPSBuZXcgZmhpci5GaGlyVXJpKHt2YWx1ZTogc291cmNlLnJlZmVyZW5jZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfcmVmZXJlbmNlJ10pIHtcclxuICAgICAgaWYgKHRoaXMucmVmZXJlbmNlKSB7IHRoaXMucmVmZXJlbmNlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3JlZmVyZW5jZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnJlZmVyZW5jZSA9IG5ldyBmaGlyLkZoaXJVcmkoc291cmNlLl9yZWZlcmVuY2UgYXMgUGFydGlhbDxmaGlyLkZoaXJVcmlBcmdzPik7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdFeHByZXNzaW9uJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZGVzY3JpcHRpb24nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ25hbWUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ2xhbmd1YWdlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdleHByZXNzaW9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdyZWZlcmVuY2UnLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19