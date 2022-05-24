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
    doModelValidation() {
        let issues = super.doModelValidation();
        if ((this.value) && ((typeof this.value !== 'string') || (!FhirTime._fts_regex.test(this.value)))) {
            issues.push({ severity: 'error', code: 'invalid', diagnostics: 'Invalid value in primitive type time', });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpclRpbWUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0ZoaXJUaW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQyx1QkFBdUI7QUFFdkIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFZbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sUUFBUyxTQUFRLElBQUksQ0FBQyxhQUFhO0lBZTlDOzs7Ozs7TUFNRTtJQUNGLFlBQVksU0FBK0IsRUFBRSxFQUFFLFVBQXNDLEVBQUc7UUFDdEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUI7UUFDL0IsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxzQ0FBc0MsR0FBRyxDQUFDLENBQUM7U0FDM0c7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQWpDRDs7R0FFRztBQUM2QixzQkFBYSxHQUFVLE1BQU0sQ0FBQztBQUM5RDs7R0FFRztBQUM2QixzQkFBYSxHQUFVLFFBQVEsQ0FBQztBQUNoRSw0RUFBNEU7QUFDNUMsbUJBQVUsR0FBVSw0REFBNEQsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBQcmltaXRpdmU6IHRpbWVcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vKipcclxuICogQSB0aW1lIGR1cmluZyB0aGUgZGF5LCB3aXRoIG5vIGRhdGUgc3BlY2lmaWVkXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZoaXJUaW1lQXJncyBleHRlbmRzIGZoaXIuRmhpclByaW1pdGl2ZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEEgdGltZSBkdXJpbmcgdGhlIGRheSwgd2l0aCBubyBkYXRlIHNwZWNpZmllZFxyXG4gICAqL1xyXG4gIHZhbHVlPzpGaGlyVGltZXxzdHJpbmd8dW5kZWZpbmVkfG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHRpbWUgZHVyaW5nIHRoZSBkYXksIHdpdGggbm8gZGF0ZSBzcGVjaWZpZWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaGlyVGltZSBleHRlbmRzIGZoaXIuRmhpclByaW1pdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdUaW1lJztcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBKU09OIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfanNvblR5cGU6c3RyaW5nID0gJ3N0cmluZyc7XHJcbiAgLy8gcHVibGlzaGVkIHJlZ2V4OiAoWzAxXVswLTldfDJbMC0zXSk6WzAtNV1bMC05XTooWzAtNV1bMC05XXw2MCkoXFwuWzAtOV0rKT9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfcmVnZXg6UmVnRXhwID0gL14oWzAxXVswLTldfDJbMC0zXSk6WzAtNV1bMC05XTooWzAtNV1bMC05XXw2MCkoXFwuWzAtOV0rKT8kL1xyXG4gIC8qKlxyXG4gICAqIEEgdGltZSB2YWx1ZSwgcmVwcmVzZW50ZWQgYXMgYSBKUyBzdHJpbmdcclxuICAgKi9cclxuICBkZWNsYXJlIHZhbHVlPzpzdHJpbmd8bnVsbHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBGaGlyVGltZVxyXG4gICAgICogQHBhcmFtIHZhbHVlIEEgdGltZSBkdXJpbmcgdGhlIGRheSwgd2l0aCBubyBkYXRlIHNwZWNpZmllZFxyXG4gICAgICogQHBhcmFtIGlkIFVuaXF1ZSBpZCBmb3IgaW50ZXItZWxlbWVudCByZWZlcmVuY2luZyAodW5jb21tb24gb24gcHJpbWl0aXZlcylcclxuICAgICAqIEBwYXJhbSBleHRlbnNpb24gQWRkaXRpb25hbCBjb250ZW50IGRlZmluZWQgYnkgaW1wbGVtZW50YXRpb25zXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIHBhc3MgdG8gZXh0ZW5zaW9uIGNvbnN0cnVjdG9yc1xyXG4gICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8RmhpclRpbWVBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHsgfSApIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbigpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKCk7XHJcbiAgICBpZiAoKHRoaXMudmFsdWUpICYmICgodHlwZW9mIHRoaXMudmFsdWUgIT09ICdzdHJpbmcnKSB8fCAoIUZoaXJUaW1lLl9mdHNfcmVnZXgudGVzdCh0aGlzLnZhbHVlKSkpKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdpbnZhbGlkJywgZGlhZ25vc3RpY3M6ICdJbnZhbGlkIHZhbHVlIGluIHByaW1pdGl2ZSB0eXBlIHRpbWUnLCB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==