// Minimum TypeScript Version: 3.7
// FHIR Primitive: uuid
import * as fhir from '../fhir.js';
/**
 * See The Open Group, CDE 1.1 Remote Procedure Call specification, Appendix A.
 */
export class FhirUuid extends fhir.FhirPrimitive {
    /**
       * Create a FhirUuid
       * @param value See The Open Group, CDE 1.1 Remote Procedure Call specification, Appendix A.
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
        if ((this.value) && (!FhirUuid._fts_regex.test(this.value))) {
            issues.push({ severity: 'error', code: 'invalid', diagnostics: 'Invalid value in primitive type uuid', });
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirUuid._fts_dataType = 'Uuid';
/**
 * Mapping of this datatype to a JSON equivalent
 */
FhirUuid._fts_jsonType = 'string';
// published regex: urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}
FhirUuid._fts_regex = /^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpclV1aWQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0ZoaXJVdWlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQyx1QkFBdUI7QUFFdkIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFZbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sUUFBUyxTQUFRLElBQUksQ0FBQyxhQUFhO0lBZTlDOzs7Ozs7TUFNRTtJQUNGLFlBQVksU0FBK0IsRUFBRSxFQUFFLFVBQXNDLEVBQUc7UUFDdEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUI7UUFDL0IsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLHNDQUFzQyxHQUFHLENBQUMsQ0FBQztTQUMzRztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBakNEOztHQUVHO0FBQzZCLHNCQUFhLEdBQVUsTUFBTSxDQUFDO0FBQzlEOztHQUVHO0FBQzZCLHNCQUFhLEdBQVUsUUFBUSxDQUFDO0FBQ2hFLHlGQUF5RjtBQUN6RCxtQkFBVSxHQUFVLHlFQUF5RSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFByaW1pdGl2ZTogdXVpZFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBTZWUgVGhlIE9wZW4gR3JvdXAsIENERSAxLjEgUmVtb3RlIFByb2NlZHVyZSBDYWxsIHNwZWNpZmljYXRpb24sIEFwcGVuZGl4IEEuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZoaXJVdWlkQXJncyBleHRlbmRzIGZoaXIuRmhpclByaW1pdGl2ZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFNlZSBUaGUgT3BlbiBHcm91cCwgQ0RFIDEuMSBSZW1vdGUgUHJvY2VkdXJlIENhbGwgc3BlY2lmaWNhdGlvbiwgQXBwZW5kaXggQS5cclxuICAgKi9cclxuICB2YWx1ZT86RmhpclV1aWR8c3RyaW5nfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNlZSBUaGUgT3BlbiBHcm91cCwgQ0RFIDEuMSBSZW1vdGUgUHJvY2VkdXJlIENhbGwgc3BlY2lmaWNhdGlvbiwgQXBwZW5kaXggQS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaGlyVXVpZCBleHRlbmRzIGZoaXIuRmhpclByaW1pdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdVdWlkJztcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBKU09OIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfanNvblR5cGU6c3RyaW5nID0gJ3N0cmluZyc7XHJcbiAgLy8gcHVibGlzaGVkIHJlZ2V4OiB1cm46dXVpZDpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXsxMn1cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfcmVnZXg6UmVnRXhwID0gL151cm46dXVpZDpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXsxMn0kL1xyXG4gIC8qKlxyXG4gICAqIEEgdXVpZCB2YWx1ZSwgcmVwcmVzZW50ZWQgYXMgYSBKUyBzdHJpbmdcclxuICAgKi9cclxuICBkZWNsYXJlIHZhbHVlPzpzdHJpbmd8bnVsbHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBGaGlyVXVpZFxyXG4gICAgICogQHBhcmFtIHZhbHVlIFNlZSBUaGUgT3BlbiBHcm91cCwgQ0RFIDEuMSBSZW1vdGUgUHJvY2VkdXJlIENhbGwgc3BlY2lmaWNhdGlvbiwgQXBwZW5kaXggQS5cclxuICAgICAqIEBwYXJhbSBpZCBVbmlxdWUgaWQgZm9yIGludGVyLWVsZW1lbnQgcmVmZXJlbmNpbmcgKHVuY29tbW9uIG9uIHByaW1pdGl2ZXMpXHJcbiAgICAgKiBAcGFyYW0gZXh0ZW5zaW9uIEFkZGl0aW9uYWwgY29udGVudCBkZWZpbmVkIGJ5IGltcGxlbWVudGF0aW9uc1xyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBwYXNzIHRvIGV4dGVuc2lvbiBjb25zdHJ1Y3RvcnNcclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEZoaXJVdWlkQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7IH0gKSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbigpO1xyXG4gICAgaWYgKCh0aGlzLnZhbHVlKSAmJiAoIUZoaXJVdWlkLl9mdHNfcmVnZXgudGVzdCh0aGlzLnZhbHVlKSkpIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ2ludmFsaWQnLCBkaWFnbm9zdGljczogJ0ludmFsaWQgdmFsdWUgaW4gcHJpbWl0aXZlIHR5cGUgdXVpZCcsIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19