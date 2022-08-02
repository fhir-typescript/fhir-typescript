// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir.js';
export class FhirPrimitiveSimple extends fhir.FhirBase {
    /**
     * Constructor for FHIR primitive type elements that do not allow extended properties
     * @param source
     * @param options
     */
    constructor(source = {}, options = {}) {
        super({}, options);
        this.value = source?.value ?? undefined;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (this.value === undefined) {
            iss.push({
                severity: 'error',
                code: 'required',
                details: { text: 'Simple Primitive values must have a value.' },
                expression: [exp],
            });
        }
        return iss;
    }
}
FhirPrimitiveSimple._fts_isPrimitive = true;
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirPrimitiveSimple._fts_dataType = 'PrimitiveType';
FhirPrimitiveSimple._fts_jsonType = 'any';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpclByaW1pdGl2ZVNpbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRmhpclByaW1pdGl2ZVNpbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFTbkMsTUFBTSxPQUFPLG1CQUFvQixTQUFRLElBQUksQ0FBQyxRQUFRO0lBYXBEOzs7O09BSUc7SUFDSCxZQUFZLFNBQTBDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ2hHLEtBQUssQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxJQUFJLFNBQVMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxHQUFHLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ1AsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLElBQUksRUFBRSxVQUFVO2dCQUNoQixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsNENBQTRDLEVBQUU7Z0JBQy9ELFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQzthQUNsQixDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUFwQ3NCLG9DQUFnQixHQUFXLElBQUksQ0FBQztBQUN2RDs7R0FFRztBQUM2QixpQ0FBYSxHQUFRLGVBQWUsQ0FBQztBQUM5QyxpQ0FBYSxHQUFRLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZoaXJQcmltaXRpdmVTaW1wbGVBcmdzIHtcclxuICAvKipcclxuICAgKiBWYWx1ZSBvZiB0aGUgcHJpbWl0aXZlIC0gY29uc3RyYWluZWQgYnkgZGVjZW5kYW50IGNsYXNzZXMuXHJcbiAgICovXHJcbiAgIHZhbHVlPzphbnl8bnVsbHx1bmRlZmluZWQ7XHJcbiB9XHJcblxyXG5leHBvcnQgY2xhc3MgRmhpclByaW1pdGl2ZVNpbXBsZSBleHRlbmRzIGZoaXIuRmhpckJhc2UgIHtcclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IF9mdHNfaXNQcmltaXRpdmU6Ym9vbGVhbiA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZz0nUHJpbWl0aXZlVHlwZSc7XHJcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBfZnRzX2pzb25UeXBlOnN0cmluZz0nYW55JztcclxuXHJcbiAgLyoqXHJcbiAgICogVmFsdWUgb2YgdGhlIHByaW1pdGl2ZSAtIGNvbnN0cmFpbmVkIGJ5IGRlY2VuZGFudCBjbGFzc2VzLlxyXG4gICAqL1xyXG4gIHZhbHVlPzpib29sZWFufG51bWJlcnxiaWdpbnR8c3RyaW5nfG51bGx8dW5kZWZpbmVkO1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvciBmb3IgRkhJUiBwcmltaXRpdmUgdHlwZSBlbGVtZW50cyB0aGF0IGRvIG5vdCBhbGxvdyBleHRlbmRlZCBwcm9wZXJ0aWVzXHJcbiAgICogQHBhcmFtIHNvdXJjZSBcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxGaGlyUHJpbWl0aXZlU2ltcGxlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoe30sIG9wdGlvbnMpO1xyXG4gICAgdGhpcy52YWx1ZSA9IHNvdXJjZT8udmFsdWUgPz8gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmICh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgaXNzLnB1c2goe1xyXG4gICAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxyXG4gICAgICAgIGNvZGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgICAgZGV0YWlsczogeyB0ZXh0OiAnU2ltcGxlIFByaW1pdGl2ZSB2YWx1ZXMgbXVzdCBoYXZlIGEgdmFsdWUuJyB9LFxyXG4gICAgICAgIGV4cHJlc3Npb246IFtleHBdLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59Il19