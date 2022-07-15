// Minimum TypeScript Version: 3.7
// FHIR Primitive: dateTime
import * as fhir from '../fhir.js';
/**
 * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.
 */
export class FhirDateTime extends fhir.FhirPrimitive {
    /**
       * Create a FhirDateTime
       * @param value A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.
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
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if ((this.value !== undefined) && (this.value !== null) && ((this.value === '') || (typeof this.value !== 'string') || (!FhirDateTime._fts_regex.test(this.value)))) {
            issues.push({ severity: 'error', code: 'invalid', details: { text: 'Invalid value in primitive type dateTime' }, expression: [exp] });
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirDateTime._fts_dataType = 'DateTime';
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirDateTime._fts_jsonType = 'string';
// published regex: ([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?
FhirDateTime._fts_regex = /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpckRhdGVUaW1lLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9GaGlyRGF0ZVRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBQ2xDLDJCQUEyQjtBQUUzQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQVluQzs7R0FFRztBQUNILE1BQU0sT0FBTyxZQUFhLFNBQVEsSUFBSSxDQUFDLGFBQWE7SUFlbEQ7Ozs7OztNQU1FO0lBQ0YsWUFBWSxTQUFtQyxFQUFFLEVBQUUsVUFBc0MsRUFBRztRQUMxRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuSyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSwwQ0FBMEMsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUN0STtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBakNEOztHQUVHO0FBQzZCLDBCQUFhLEdBQVUsVUFBVSxDQUFDO0FBQ2xFOztHQUVHO0FBQzZCLDBCQUFhLEdBQVUsUUFBUSxDQUFDO0FBQ2hFLCtOQUErTjtBQUMvTCx1QkFBVSxHQUFVLCtNQUErTSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFByaW1pdGl2ZTogZGF0ZVRpbWVcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vKipcclxuICogQSBkYXRlLCBkYXRlLXRpbWUgb3IgcGFydGlhbCBkYXRlIChlLmcuIGp1c3QgeWVhciBvciB5ZWFyICsgbW9udGgpLiAgSWYgaG91cnMgYW5kIG1pbnV0ZXMgYXJlIHNwZWNpZmllZCwgYSB0aW1lIHpvbmUgU0hBTEwgYmUgcG9wdWxhdGVkLiBUaGUgZm9ybWF0IGlzIGEgdW5pb24gb2YgdGhlIHNjaGVtYSB0eXBlcyBnWWVhciwgZ1llYXJNb250aCwgZGF0ZSBhbmQgZGF0ZVRpbWUuIFNlY29uZHMgbXVzdCBiZSBwcm92aWRlZCBkdWUgdG8gc2NoZW1hIHR5cGUgY29uc3RyYWludHMgYnV0IG1heSBiZSB6ZXJvLWZpbGxlZCBhbmQgbWF5IGJlIGlnbm9yZWQuICAgICAgICAgICAgICAgICBEYXRlcyBTSEFMTCBiZSB2YWxpZCBkYXRlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmhpckRhdGVUaW1lQXJncyBleHRlbmRzIGZoaXIuRmhpclByaW1pdGl2ZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEEgZGF0ZSwgZGF0ZS10aW1lIG9yIHBhcnRpYWwgZGF0ZSAoZS5nLiBqdXN0IHllYXIgb3IgeWVhciArIG1vbnRoKS4gIElmIGhvdXJzIGFuZCBtaW51dGVzIGFyZSBzcGVjaWZpZWQsIGEgdGltZSB6b25lIFNIQUxMIGJlIHBvcHVsYXRlZC4gVGhlIGZvcm1hdCBpcyBhIHVuaW9uIG9mIHRoZSBzY2hlbWEgdHlwZXMgZ1llYXIsIGdZZWFyTW9udGgsIGRhdGUgYW5kIGRhdGVUaW1lLiBTZWNvbmRzIG11c3QgYmUgcHJvdmlkZWQgZHVlIHRvIHNjaGVtYSB0eXBlIGNvbnN0cmFpbnRzIGJ1dCBtYXkgYmUgemVyby1maWxsZWQgYW5kIG1heSBiZSBpZ25vcmVkLiAgICAgICAgICAgICAgICAgRGF0ZXMgU0hBTEwgYmUgdmFsaWQgZGF0ZXMuXHJcbiAgICovXHJcbiAgdmFsdWU/OkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkfG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGRhdGUsIGRhdGUtdGltZSBvciBwYXJ0aWFsIGRhdGUgKGUuZy4ganVzdCB5ZWFyIG9yIHllYXIgKyBtb250aCkuICBJZiBob3VycyBhbmQgbWludXRlcyBhcmUgc3BlY2lmaWVkLCBhIHRpbWUgem9uZSBTSEFMTCBiZSBwb3B1bGF0ZWQuIFRoZSBmb3JtYXQgaXMgYSB1bmlvbiBvZiB0aGUgc2NoZW1hIHR5cGVzIGdZZWFyLCBnWWVhck1vbnRoLCBkYXRlIGFuZCBkYXRlVGltZS4gU2Vjb25kcyBtdXN0IGJlIHByb3ZpZGVkIGR1ZSB0byBzY2hlbWEgdHlwZSBjb25zdHJhaW50cyBidXQgbWF5IGJlIHplcm8tZmlsbGVkIGFuZCBtYXkgYmUgaWdub3JlZC4gICAgICAgICAgICAgICAgIERhdGVzIFNIQUxMIGJlIHZhbGlkIGRhdGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZoaXJEYXRlVGltZSBleHRlbmRzIGZoaXIuRmhpclByaW1pdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdEYXRlVGltZSc7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2pzb25UeXBlOnN0cmluZyA9ICdzdHJpbmcnO1xyXG4gIC8vIHB1Ymxpc2hlZCByZWdleDogKFswLTldKFswLTldKFswLTldWzEtOV18WzEtOV0wKXxbMS05XTAwKXxbMS05XTAwMCkoLSgwWzEtOV18MVswLTJdKSgtKDBbMS05XXxbMS0yXVswLTldfDNbMC0xXSkoVChbMDFdWzAtOV18MlswLTNdKTpbMC01XVswLTldOihbMC01XVswLTldfDYwKShcXC5bMC05XSspPyhafChcXCt8LSkoKDBbMC05XXwxWzAtM10pOlswLTVdWzAtOV18MTQ6MDApKSk/KT8pP1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19yZWdleDpSZWdFeHAgPSAvXihbMC05XShbMC05XShbMC05XVsxLTldfFsxLTldMCl8WzEtOV0wMCl8WzEtOV0wMDApKC0oMFsxLTldfDFbMC0yXSkoLSgwWzEtOV18WzEtMl1bMC05XXwzWzAtMV0pKFQoWzAxXVswLTldfDJbMC0zXSk6WzAtNV1bMC05XTooWzAtNV1bMC05XXw2MCkoXFwuWzAtOV0rKT8oWnwoXFwrfC0pKCgwWzAtOV18MVswLTNdKTpbMC01XVswLTldfDE0OjAwKSkpPyk/KT8kL1xyXG4gIC8qKlxyXG4gICAqIEEgZGF0ZVRpbWUgdmFsdWUsIHJlcHJlc2VudGVkIGFzIGEgSlMgc3RyaW5nXHJcbiAgICovXHJcbiAgZGVjbGFyZSB2YWx1ZT86c3RyaW5nfG51bGx8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgRmhpckRhdGVUaW1lXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBkYXRlLCBkYXRlLXRpbWUgb3IgcGFydGlhbCBkYXRlIChlLmcuIGp1c3QgeWVhciBvciB5ZWFyICsgbW9udGgpLiAgSWYgaG91cnMgYW5kIG1pbnV0ZXMgYXJlIHNwZWNpZmllZCwgYSB0aW1lIHpvbmUgU0hBTEwgYmUgcG9wdWxhdGVkLiBUaGUgZm9ybWF0IGlzIGEgdW5pb24gb2YgdGhlIHNjaGVtYSB0eXBlcyBnWWVhciwgZ1llYXJNb250aCwgZGF0ZSBhbmQgZGF0ZVRpbWUuIFNlY29uZHMgbXVzdCBiZSBwcm92aWRlZCBkdWUgdG8gc2NoZW1hIHR5cGUgY29uc3RyYWludHMgYnV0IG1heSBiZSB6ZXJvLWZpbGxlZCBhbmQgbWF5IGJlIGlnbm9yZWQuICAgICAgICAgICAgICAgICBEYXRlcyBTSEFMTCBiZSB2YWxpZCBkYXRlcy5cclxuICAgICAqIEBwYXJhbSBpZCBVbmlxdWUgaWQgZm9yIGludGVyLWVsZW1lbnQgcmVmZXJlbmNpbmcgKHVuY29tbW9uIG9uIHByaW1pdGl2ZXMpXHJcbiAgICAgKiBAcGFyYW0gZXh0ZW5zaW9uIEFkZGl0aW9uYWwgY29udGVudCBkZWZpbmVkIGJ5IGltcGxlbWVudGF0aW9uc1xyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBwYXNzIHRvIGV4dGVuc2lvbiBjb25zdHJ1Y3RvcnNcclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEZoaXJEYXRlVGltZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0geyB9ICkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmICgodGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSAmJiAodGhpcy52YWx1ZSAhPT0gbnVsbCkgJiYgKCh0aGlzLnZhbHVlID09PSAnJykgfHwgKHR5cGVvZiB0aGlzLnZhbHVlICE9PSAnc3RyaW5nJykgfHwgKCFGaGlyRGF0ZVRpbWUuX2Z0c19yZWdleC50ZXN0KHRoaXMudmFsdWUpKSkpIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ2ludmFsaWQnLCBkZXRhaWxzOiB7IHRleHQ6ICdJbnZhbGlkIHZhbHVlIGluIHByaW1pdGl2ZSB0eXBlIGRhdGVUaW1lJyB9LCBleHByZXNzaW9uOiBbZXhwXX0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19