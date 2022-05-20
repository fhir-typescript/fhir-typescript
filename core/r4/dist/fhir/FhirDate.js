// Minimum TypeScript Version: 3.7
// FHIR Primitive: date
import * as fhir from '../fhir.js';
/**
 * A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.
 */
export class FhirDate extends fhir.FhirPrimitive {
    /**
       * Create a FhirDate
       * @param value A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.
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
    doModelValidation() {
        let issues = super.doModelValidation();
        if ((this.value) && (!FhirDate._fts_regex.test(this.value))) {
            issues.push({ severity: 'error', code: 'invalid', diagnostics: 'Invalid value in primitive type date', });
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirDate._fts_dataType = 'Date';
/**
 * Mapping of this datatype to a JSON equivalent
 */
FhirDate._fts_jsonType = 'string';
// published regex: ([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?
FhirDate._fts_regex = /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpckRhdGUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0ZoaXJEYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQyx1QkFBdUI7QUFFdkIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFZbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sUUFBUyxTQUFRLElBQUksQ0FBQyxhQUFhO0lBZTlDOzs7Ozs7TUFNRTtJQUNGLFlBQVksU0FBK0IsRUFBRSxFQUFFLFVBQXNDLEVBQUc7UUFDdEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUI7UUFDL0IsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUcsV0FBVyxFQUFFLHNDQUFzQyxHQUFHLENBQUMsQ0FBQztTQUM1RztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBakNEOztHQUVHO0FBQzZCLHNCQUFhLEdBQVUsTUFBTSxDQUFDO0FBQzlEOztHQUVHO0FBQzZCLHNCQUFhLEdBQVUsUUFBUSxDQUFDO0FBQ2hFLHVIQUF1SDtBQUN2RixtQkFBVSxHQUFVLHVHQUF1RyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFByaW1pdGl2ZTogZGF0ZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBBIGRhdGUgb3IgcGFydGlhbCBkYXRlIChlLmcuIGp1c3QgeWVhciBvciB5ZWFyICsgbW9udGgpLiBUaGVyZSBpcyBubyB0aW1lIHpvbmUuIFRoZSBmb3JtYXQgaXMgYSB1bmlvbiBvZiB0aGUgc2NoZW1hIHR5cGVzIGdZZWFyLCBnWWVhck1vbnRoIGFuZCBkYXRlLiAgRGF0ZXMgU0hBTEwgYmUgdmFsaWQgZGF0ZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZoaXJEYXRlQXJncyBleHRlbmRzIGZoaXIuRmhpclByaW1pdGl2ZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEEgZGF0ZSBvciBwYXJ0aWFsIGRhdGUgKGUuZy4ganVzdCB5ZWFyIG9yIHllYXIgKyBtb250aCkuIFRoZXJlIGlzIG5vIHRpbWUgem9uZS4gVGhlIGZvcm1hdCBpcyBhIHVuaW9uIG9mIHRoZSBzY2hlbWEgdHlwZXMgZ1llYXIsIGdZZWFyTW9udGggYW5kIGRhdGUuICBEYXRlcyBTSEFMTCBiZSB2YWxpZCBkYXRlcy5cclxuICAgKi9cclxuICB2YWx1ZT86RmhpckRhdGV8c3RyaW5nfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgZGF0ZSBvciBwYXJ0aWFsIGRhdGUgKGUuZy4ganVzdCB5ZWFyIG9yIHllYXIgKyBtb250aCkuIFRoZXJlIGlzIG5vIHRpbWUgem9uZS4gVGhlIGZvcm1hdCBpcyBhIHVuaW9uIG9mIHRoZSBzY2hlbWEgdHlwZXMgZ1llYXIsIGdZZWFyTW9udGggYW5kIGRhdGUuICBEYXRlcyBTSEFMTCBiZSB2YWxpZCBkYXRlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaGlyRGF0ZSBleHRlbmRzIGZoaXIuRmhpclByaW1pdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdEYXRlJztcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBKU09OIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfanNvblR5cGU6c3RyaW5nID0gJ3N0cmluZyc7XHJcbiAgLy8gcHVibGlzaGVkIHJlZ2V4OiAoWzAtOV0oWzAtOV0oWzAtOV1bMS05XXxbMS05XTApfFsxLTldMDApfFsxLTldMDAwKSgtKDBbMS05XXwxWzAtMl0pKC0oMFsxLTldfFsxLTJdWzAtOV18M1swLTFdKSk/KT9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfcmVnZXg6UmVnRXhwID0gL14oWzAtOV0oWzAtOV0oWzAtOV1bMS05XXxbMS05XTApfFsxLTldMDApfFsxLTldMDAwKSgtKDBbMS05XXwxWzAtMl0pKC0oMFsxLTldfFsxLTJdWzAtOV18M1swLTFdKSk/KT8kL1xyXG4gIC8qKlxyXG4gICAqIEEgZGF0ZSB2YWx1ZSwgcmVwcmVzZW50ZWQgYXMgYSBKUyBzdHJpbmdcclxuICAgKi9cclxuICBkZWNsYXJlIHZhbHVlPzpzdHJpbmd8bnVsbHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBGaGlyRGF0ZVxyXG4gICAgICogQHBhcmFtIHZhbHVlIEEgZGF0ZSBvciBwYXJ0aWFsIGRhdGUgKGUuZy4ganVzdCB5ZWFyIG9yIHllYXIgKyBtb250aCkuIFRoZXJlIGlzIG5vIHRpbWUgem9uZS4gVGhlIGZvcm1hdCBpcyBhIHVuaW9uIG9mIHRoZSBzY2hlbWEgdHlwZXMgZ1llYXIsIGdZZWFyTW9udGggYW5kIGRhdGUuICBEYXRlcyBTSEFMTCBiZSB2YWxpZCBkYXRlcy5cclxuICAgICAqIEBwYXJhbSBpZCBVbmlxdWUgaWQgZm9yIGludGVyLWVsZW1lbnQgcmVmZXJlbmNpbmcgKHVuY29tbW9uIG9uIHByaW1pdGl2ZXMpXHJcbiAgICAgKiBAcGFyYW0gZXh0ZW5zaW9uIEFkZGl0aW9uYWwgY29udGVudCBkZWZpbmVkIGJ5IGltcGxlbWVudGF0aW9uc1xyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBwYXNzIHRvIGV4dGVuc2lvbiBjb25zdHJ1Y3RvcnNcclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEZoaXJEYXRlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7IH0gKSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbigpO1xyXG4gICAgaWYgKCh0aGlzLnZhbHVlKSAmJiAoIUZoaXJEYXRlLl9mdHNfcmVnZXgudGVzdCh0aGlzLnZhbHVlKSkpIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ2ludmFsaWQnLCAgZGlhZ25vc3RpY3M6ICdJbnZhbGlkIHZhbHVlIGluIHByaW1pdGl2ZSB0eXBlIGRhdGUnLCB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==