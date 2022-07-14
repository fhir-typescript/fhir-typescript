// Minimum TypeScript Version: 3.7
// FHIR Primitive: time
import * as fhir from '../fhir.js';
/**
 * A time during the day, with no date specified
 */
export class FhirTime extends fhir.FhirPrimitive {
    /**
       * Create a FhirTime
       * @param value A time during the day, with no date specified
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source = {}, options = {}) {
        super(source, options);
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if ((this.value !== undefined) && (this.value !== null) && ((this.value === '') || (typeof this.value !== 'string') || (!FhirTime._fts_regex.test(this.value)))) {
            issues.push({ severity: 'error', code: 'invalid', details: { text: 'Invalid value in primitive type time' }, expression: [expression] });
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirTime._fts_dataType = 'Time';
/**
 * Mapping of this datatype to a JSON equivalent
 */
FhirTime._fts_jsonType = 'string';
// published regex: ([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?
FhirTime._fts_regex = /^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpclRpbWUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0ZoaXJUaW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQyx1QkFBdUI7QUFFdkIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFZbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sUUFBUyxTQUFRLElBQUksQ0FBQyxhQUFhO0lBZTlDOzs7Ozs7TUFNRTtJQUNGLFlBQVksU0FBK0IsRUFBRSxFQUFFLFVBQXNDLEVBQUc7UUFDdEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxhQUFvQixFQUFFO1FBQ3RELElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9KLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLHNDQUFzQyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ3pJO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUFqQ0Q7O0dBRUc7QUFDNkIsc0JBQWEsR0FBVSxNQUFNLENBQUM7QUFDOUQ7O0dBRUc7QUFDNkIsc0JBQWEsR0FBVSxRQUFRLENBQUM7QUFDaEUsNEVBQTRFO0FBQzVDLG1CQUFVLEdBQVUsNERBQTRELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUHJpbWl0aXZlOiB0aW1lXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIEEgdGltZSBkdXJpbmcgdGhlIGRheSwgd2l0aCBubyBkYXRlIHNwZWNpZmllZFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGaGlyVGltZUFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJQcmltaXRpdmVBcmdzIHtcclxuICAvKipcclxuICAgKiBBIHRpbWUgZHVyaW5nIHRoZSBkYXksIHdpdGggbm8gZGF0ZSBzcGVjaWZpZWRcclxuICAgKi9cclxuICB2YWx1ZT86RmhpclRpbWV8c3RyaW5nfHVuZGVmaW5lZHxudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQSB0aW1lIGR1cmluZyB0aGUgZGF5LCB3aXRoIG5vIGRhdGUgc3BlY2lmaWVkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmhpclRpbWUgZXh0ZW5kcyBmaGlyLkZoaXJQcmltaXRpdmUge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnVGltZSc7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgSlNPTiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2pzb25UeXBlOnN0cmluZyA9ICdzdHJpbmcnO1xyXG4gIC8vIHB1Ymxpc2hlZCByZWdleDogKFswMV1bMC05XXwyWzAtM10pOlswLTVdWzAtOV06KFswLTVdWzAtOV18NjApKFxcLlswLTldKyk/XHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX3JlZ2V4OlJlZ0V4cCA9IC9eKFswMV1bMC05XXwyWzAtM10pOlswLTVdWzAtOV06KFswLTVdWzAtOV18NjApKFxcLlswLTldKyk/JC9cclxuICAvKipcclxuICAgKiBBIHRpbWUgdmFsdWUsIHJlcHJlc2VudGVkIGFzIGEgSlMgc3RyaW5nXHJcbiAgICovXHJcbiAgZGVjbGFyZSB2YWx1ZT86c3RyaW5nfG51bGx8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgRmhpclRpbWVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIHRpbWUgZHVyaW5nIHRoZSBkYXksIHdpdGggbm8gZGF0ZSBzcGVjaWZpZWRcclxuICAgICAqIEBwYXJhbSBpZCBVbmlxdWUgaWQgZm9yIGludGVyLWVsZW1lbnQgcmVmZXJlbmNpbmcgKHVuY29tbW9uIG9uIHByaW1pdGl2ZXMpXHJcbiAgICAgKiBAcGFyYW0gZXh0ZW5zaW9uIEFkZGl0aW9uYWwgY29udGVudCBkZWZpbmVkIGJ5IGltcGxlbWVudGF0aW9uc1xyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBwYXNzIHRvIGV4dGVuc2lvbiBjb25zdHJ1Y3RvcnNcclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEZoaXJUaW1lQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7IH0gKSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbjpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbik7XHJcbiAgICBpZiAoKHRoaXMudmFsdWUgIT09IHVuZGVmaW5lZCkgJiYgKHRoaXMudmFsdWUgIT09IG51bGwpICYmICgodGhpcy52YWx1ZSA9PT0gJycpIHx8ICh0eXBlb2YgdGhpcy52YWx1ZSAhPT0gJ3N0cmluZycpIHx8ICghRmhpclRpbWUuX2Z0c19yZWdleC50ZXN0KHRoaXMudmFsdWUpKSkpIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ2ludmFsaWQnLCBkZXRhaWxzOiB7IHRleHQ6ICdJbnZhbGlkIHZhbHVlIGluIHByaW1pdGl2ZSB0eXBlIHRpbWUnIH0sIGV4cHJlc3Npb246IFtleHByZXNzaW9uXX0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19