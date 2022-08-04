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
        if (source['description'] !== undefined) {
            this.description = new fhir.FhirString({ value: source.description }, options);
        }
        if (source['_description']) {
            if (this.description) {
                this.description.addExtendedProperties(source._description);
            }
            else {
                this.description = new fhir.FhirString(source._description, options);
            }
        }
        if (source['name'] !== undefined) {
            this.name = new fhir.FhirId({ value: source.name }, options);
        }
        if (source['_name']) {
            if (this.name) {
                this.name.addExtendedProperties(source._name);
            }
            else {
                this.name = new fhir.FhirId(source._name, options);
            }
        }
        if (source['language'] !== undefined) {
            this.language = new fhir.FhirCode({ value: source.language }, options);
        }
        else {
            this.language = null;
        }
        if (source['_language']) {
            if (this.language) {
                this.language.addExtendedProperties(source._language);
            }
            else {
                this.language = new fhir.FhirCode(source._language, options);
            }
        }
        if (source['expression'] !== undefined) {
            this.expression = new fhir.FhirString({ value: source.expression }, options);
        }
        if (source['_expression']) {
            if (this.expression) {
                this.expression.addExtendedProperties(source._expression);
            }
            else {
                this.expression = new fhir.FhirString(source._expression, options);
            }
        }
        if (source['reference'] !== undefined) {
            this.reference = new fhir.FhirUri({ value: source.reference }, options);
        }
        if (source['_reference']) {
            if (this.reference) {
                this.reference.addExtendedProperties(source._reference);
            }
            else {
                this.reference = new fhir.FhirUri(source._reference, options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhwcmVzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRXhwcmVzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFvRG5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFVBQVcsU0FBUSxJQUFJLENBQUMsV0FBVztJQXlCOUM7O09BRUc7SUFDSCxZQUFZLFNBQWlDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3ZGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDMUgsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUFFLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFlBQWEsQ0FBQyxDQUFDO2FBQUU7aUJBQ2xGO2dCQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUE0QyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQUU7U0FDL0c7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUNq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bEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQXBFRDs7R0FFRztBQUM2Qix3QkFBYSxHQUFVLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogRXhwcmVzc2lvblxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRXhwcmVzc2lvbkxhbmd1YWdlQ29kZXMsICBFeHByZXNzaW9uTGFuZ3VhZ2VDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRXhwcmVzc2lvbkxhbmd1YWdlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEV4cHJlc3Npb25MYW5ndWFnZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRXhwcmVzc2lvbkxhbmd1YWdlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEV4cHJlc3Npb24gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXhwcmVzc2lvbkFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogQSBicmllZiwgbmF0dXJhbCBsYW5ndWFnZSBkZXNjcmlwdGlvbiBvZiB0aGUgY29uZGl0aW9uIHRoYXQgZWZmZWN0aXZlbHkgY29tbXVuaWNhdGVzIHRoZSBpbnRlbmRlZCBzZW1hbnRpY3MuXHJcbiAgICovXHJcbiAgZGVzY3JpcHRpb24/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRXhwcmVzc2lvbi5kZXNjcmlwdGlvblxyXG4gICAqL1xyXG4gIF9kZXNjcmlwdGlvbj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSBzaG9ydCBuYW1lIGFzc2lnbmVkIHRvIHRoZSBleHByZXNzaW9uIHRvIGFsbG93IGZvciBtdWx0aXBsZSByZXVzZSBvZiB0aGUgZXhwcmVzc2lvbiBpbiB0aGUgY29udGV4dCB3aGVyZSBpdCBpcyBkZWZpbmVkLlxyXG4gICAqL1xyXG4gIG5hbWU/OiBmaGlyLkZoaXJJZHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFeHByZXNzaW9uLm5hbWVcclxuICAgKi9cclxuICBfbmFtZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1lZGlhIHR5cGUgb2YgdGhlIGxhbmd1YWdlIGZvciB0aGUgZXhwcmVzc2lvbi5cclxuICAgKi9cclxuICBsYW5ndWFnZTogZmhpci5GaGlyQ29kZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFeHByZXNzaW9uLmxhbmd1YWdlXHJcbiAgICovXHJcbiAgX2xhbmd1YWdlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBbiBleHByZXNzaW9uIGluIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2UgdGhhdCByZXR1cm5zIGEgdmFsdWUuXHJcbiAgICovXHJcbiAgZXhwcmVzc2lvbj86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFeHByZXNzaW9uLmV4cHJlc3Npb25cclxuICAgKi9cclxuICBfZXhwcmVzc2lvbj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogSWYgYm90aCBhIHJlZmVyZW5jZSBhbmQgYW4gZXhwcmVzc2lvbiBpcyBmb3VuZCwgdGhlIHJlZmVyZW5jZSBTSEFMTCBwb2ludCB0byB0aGUgc2FtZSBleHByZXNzaW9uLlxyXG4gICAqL1xyXG4gIHJlZmVyZW5jZT86IGZoaXIuRmhpclVyaXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFeHByZXNzaW9uLnJlZmVyZW5jZVxyXG4gICAqL1xyXG4gIF9yZWZlcmVuY2U/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQSBleHByZXNzaW9uIHRoYXQgaXMgZXZhbHVhdGVkIGluIGEgc3BlY2lmaWVkIGNvbnRleHQgYW5kIHJldHVybnMgYSB2YWx1ZS4gVGhlIGNvbnRleHQgb2YgdXNlIG9mIHRoZSBleHByZXNzaW9uIG11c3Qgc3BlY2lmeSB0aGUgY29udGV4dCBpbiB3aGljaCB0aGUgZXhwcmVzc2lvbiBpcyBldmFsdWF0ZWQsIGFuZCBob3cgdGhlIHJlc3VsdCBvZiB0aGUgZXhwcmVzc2lvbiBpcyB1c2VkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0V4cHJlc3Npb24nO1xyXG4gIC8qKlxyXG4gICAqIEEgYnJpZWYsIG5hdHVyYWwgbGFuZ3VhZ2UgZGVzY3JpcHRpb24gb2YgdGhlIGNvbmRpdGlvbiB0aGF0IGVmZmVjdGl2ZWx5IGNvbW11bmljYXRlcyB0aGUgaW50ZW5kZWQgc2VtYW50aWNzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkZXNjcmlwdGlvbj86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBzaG9ydCBuYW1lIGFzc2lnbmVkIHRvIHRoZSBleHByZXNzaW9uIHRvIGFsbG93IGZvciBtdWx0aXBsZSByZXVzZSBvZiB0aGUgZXhwcmVzc2lvbiBpbiB0aGUgY29udGV4dCB3aGVyZSBpdCBpcyBkZWZpbmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBuYW1lPzogZmhpci5GaGlySWR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtZWRpYSB0eXBlIG9mIHRoZSBsYW5ndWFnZSBmb3IgdGhlIGV4cHJlc3Npb24uXHJcbiAgICovXHJcbiAgcHVibGljIGxhbmd1YWdlOiBmaGlyLkZoaXJDb2RlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogQW4gZXhwcmVzc2lvbiBpbiB0aGUgc3BlY2lmaWVkIGxhbmd1YWdlIHRoYXQgcmV0dXJucyBhIHZhbHVlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBleHByZXNzaW9uPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiBib3RoIGEgcmVmZXJlbmNlIGFuZCBhbiBleHByZXNzaW9uIGlzIGZvdW5kLCB0aGUgcmVmZXJlbmNlIFNIQUxMIHBvaW50IHRvIHRoZSBzYW1lIGV4cHJlc3Npb24uXHJcbiAgICovXHJcbiAgcHVibGljIHJlZmVyZW5jZT86IGZoaXIuRmhpclVyaXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgRXhwcmVzc2lvbiAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEV4cHJlc3Npb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnZGVzY3JpcHRpb24nXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZGVzY3JpcHRpb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmRlc2NyaXB0aW9ufSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kZXNjcmlwdGlvbiddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uKSB7IHRoaXMuZGVzY3JpcHRpb24uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZGVzY3JpcHRpb24hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kZXNjcmlwdGlvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9kZXNjcmlwdGlvbiBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbmFtZSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5uYW1lID0gbmV3IGZoaXIuRmhpcklkKHt2YWx1ZTogc291cmNlLm5hbWV9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX25hbWUnXSkge1xyXG4gICAgICBpZiAodGhpcy5uYW1lKSB7IHRoaXMubmFtZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9uYW1lISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubmFtZSA9IG5ldyBmaGlyLkZoaXJJZChzb3VyY2UuX25hbWUgYXMgUGFydGlhbDxmaGlyLkZoaXJJZEFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbGFuZ3VhZ2UnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMubGFuZ3VhZ2UgPSBuZXcgZmhpci5GaGlyQ29kZSh7dmFsdWU6IHNvdXJjZS5sYW5ndWFnZX0sIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5sYW5ndWFnZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19sYW5ndWFnZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmxhbmd1YWdlKSB7IHRoaXMubGFuZ3VhZ2UuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fbGFuZ3VhZ2UhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5sYW5ndWFnZSA9IG5ldyBmaGlyLkZoaXJDb2RlKHNvdXJjZS5fbGFuZ3VhZ2UgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydleHByZXNzaW9uJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmV4cHJlc3Npb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmV4cHJlc3Npb259LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2V4cHJlc3Npb24nXSkge1xyXG4gICAgICBpZiAodGhpcy5leHByZXNzaW9uKSB7IHRoaXMuZXhwcmVzc2lvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9leHByZXNzaW9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZXhwcmVzc2lvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9leHByZXNzaW9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydyZWZlcmVuY2UnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMucmVmZXJlbmNlID0gbmV3IGZoaXIuRmhpclVyaSh7dmFsdWU6IHNvdXJjZS5yZWZlcmVuY2V9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3JlZmVyZW5jZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnJlZmVyZW5jZSkgeyB0aGlzLnJlZmVyZW5jZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9yZWZlcmVuY2UhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5yZWZlcmVuY2UgPSBuZXcgZmhpci5GaGlyVXJpKHNvdXJjZS5fcmVmZXJlbmNlIGFzIFBhcnRpYWw8Zmhpci5GaGlyVXJpQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnRXhwcmVzc2lvbicgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2Rlc2NyaXB0aW9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCduYW1lJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdsYW5ndWFnZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZXhwcmVzc2lvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncmVmZXJlbmNlJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==