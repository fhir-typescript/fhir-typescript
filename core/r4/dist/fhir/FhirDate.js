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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpckRhdGUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0ZoaXJEYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQyx1QkFBdUI7QUFFdkIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFZbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sUUFBUyxTQUFRLElBQUksQ0FBQyxhQUFhO0lBZTlDOzs7Ozs7TUFNRTtJQUNGLFlBQVksU0FBK0IsRUFBRSxFQUFFLFVBQXNDLEVBQUc7UUFDdEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUI7UUFDL0IsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUcsV0FBVyxFQUFFLHNDQUFzQyxHQUFHLENBQUMsQ0FBQztTQUM1RztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBakNEOztHQUVHO0FBQzZCLHNCQUFhLEdBQVUsTUFBTSxDQUFDO0FBQzlEOztHQUVHO0FBQzZCLHNCQUFhLEdBQVUsUUFBUSxDQUFDO0FBQ2hFLHVIQUF1SDtBQUN2RixtQkFBVSxHQUFVLHVHQUF1RyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFByaW1pdGl2ZTogZGF0ZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBBIGRhdGUgb3IgcGFydGlhbCBkYXRlIChlLmcuIGp1c3QgeWVhciBvciB5ZWFyICsgbW9udGgpLiBUaGVyZSBpcyBubyB0aW1lIHpvbmUuIFRoZSBmb3JtYXQgaXMgYSB1bmlvbiBvZiB0aGUgc2NoZW1hIHR5cGVzIGdZZWFyLCBnWWVhck1vbnRoIGFuZCBkYXRlLiAgRGF0ZXMgU0hBTEwgYmUgdmFsaWQgZGF0ZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZoaXJEYXRlQXJncyBleHRlbmRzIGZoaXIuRmhpclByaW1pdGl2ZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEEgZGF0ZSBvciBwYXJ0aWFsIGRhdGUgKGUuZy4ganVzdCB5ZWFyIG9yIHllYXIgKyBtb250aCkuIFRoZXJlIGlzIG5vIHRpbWUgem9uZS4gVGhlIGZvcm1hdCBpcyBhIHVuaW9uIG9mIHRoZSBzY2hlbWEgdHlwZXMgZ1llYXIsIGdZZWFyTW9udGggYW5kIGRhdGUuICBEYXRlcyBTSEFMTCBiZSB2YWxpZCBkYXRlcy5cclxuICAgKi9cclxuICB2YWx1ZT86RmhpckRhdGV8c3RyaW5nfHVuZGVmaW5lZHxudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQSBkYXRlIG9yIHBhcnRpYWwgZGF0ZSAoZS5nLiBqdXN0IHllYXIgb3IgeWVhciArIG1vbnRoKS4gVGhlcmUgaXMgbm8gdGltZSB6b25lLiBUaGUgZm9ybWF0IGlzIGEgdW5pb24gb2YgdGhlIHNjaGVtYSB0eXBlcyBnWWVhciwgZ1llYXJNb250aCBhbmQgZGF0ZS4gIERhdGVzIFNIQUxMIGJlIHZhbGlkIGRhdGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZoaXJEYXRlIGV4dGVuZHMgZmhpci5GaGlyUHJpbWl0aXZlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0RhdGUnO1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEpTT04gZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19qc29uVHlwZTpzdHJpbmcgPSAnc3RyaW5nJztcclxuICAvLyBwdWJsaXNoZWQgcmVnZXg6IChbMC05XShbMC05XShbMC05XVsxLTldfFsxLTldMCl8WzEtOV0wMCl8WzEtOV0wMDApKC0oMFsxLTldfDFbMC0yXSkoLSgwWzEtOV18WzEtMl1bMC05XXwzWzAtMV0pKT8pP1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19yZWdleDpSZWdFeHAgPSAvXihbMC05XShbMC05XShbMC05XVsxLTldfFsxLTldMCl8WzEtOV0wMCl8WzEtOV0wMDApKC0oMFsxLTldfDFbMC0yXSkoLSgwWzEtOV18WzEtMl1bMC05XXwzWzAtMV0pKT8pPyQvXHJcbiAgLyoqXHJcbiAgICogQSBkYXRlIHZhbHVlLCByZXByZXNlbnRlZCBhcyBhIEpTIHN0cmluZ1xyXG4gICAqL1xyXG4gIGRlY2xhcmUgdmFsdWU/OnN0cmluZ3xudWxsfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgICAqIENyZWF0ZSBhIEZoaXJEYXRlXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBkYXRlIG9yIHBhcnRpYWwgZGF0ZSAoZS5nLiBqdXN0IHllYXIgb3IgeWVhciArIG1vbnRoKS4gVGhlcmUgaXMgbm8gdGltZSB6b25lLiBUaGUgZm9ybWF0IGlzIGEgdW5pb24gb2YgdGhlIHNjaGVtYSB0eXBlcyBnWWVhciwgZ1llYXJNb250aCBhbmQgZGF0ZS4gIERhdGVzIFNIQUxMIGJlIHZhbGlkIGRhdGVzLlxyXG4gICAgICogQHBhcmFtIGlkIFVuaXF1ZSBpZCBmb3IgaW50ZXItZWxlbWVudCByZWZlcmVuY2luZyAodW5jb21tb24gb24gcHJpbWl0aXZlcylcclxuICAgICAqIEBwYXJhbSBleHRlbnNpb24gQWRkaXRpb25hbCBjb250ZW50IGRlZmluZWQgYnkgaW1wbGVtZW50YXRpb25zXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIHBhc3MgdG8gZXh0ZW5zaW9uIGNvbnN0cnVjdG9yc1xyXG4gICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8RmhpckRhdGVBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHsgfSApIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbigpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKCk7XHJcbiAgICBpZiAoKHRoaXMudmFsdWUpICYmICghRmhpckRhdGUuX2Z0c19yZWdleC50ZXN0KHRoaXMudmFsdWUpKSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAnaW52YWxpZCcsICBkaWFnbm9zdGljczogJ0ludmFsaWQgdmFsdWUgaW4gcHJpbWl0aXZlIHR5cGUgZGF0ZScsIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19