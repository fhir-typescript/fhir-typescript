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
        if ((this.value !== undefined) && ((this.value === '') || (typeof this.value !== 'string') || (!FhirTime._fts_regex.test(this.value)))) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpclRpbWUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0ZoaXJUaW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQyx1QkFBdUI7QUFFdkIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFZbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sUUFBUyxTQUFRLElBQUksQ0FBQyxhQUFhO0lBZTlDOzs7Ozs7TUFNRTtJQUNGLFlBQVksU0FBK0IsRUFBRSxFQUFFLFVBQXNDLEVBQUc7UUFDdEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUI7UUFDL0IsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLHNDQUFzQyxHQUFHLENBQUMsQ0FBQztTQUMzRztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBakNEOztHQUVHO0FBQzZCLHNCQUFhLEdBQVUsTUFBTSxDQUFDO0FBQzlEOztHQUVHO0FBQzZCLHNCQUFhLEdBQVUsUUFBUSxDQUFDO0FBQ2hFLDRFQUE0RTtBQUM1QyxtQkFBVSxHQUFVLDREQUE0RCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFByaW1pdGl2ZTogdGltZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBBIHRpbWUgZHVyaW5nIHRoZSBkYXksIHdpdGggbm8gZGF0ZSBzcGVjaWZpZWRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmhpclRpbWVBcmdzIGV4dGVuZHMgZmhpci5GaGlyUHJpbWl0aXZlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogQSB0aW1lIGR1cmluZyB0aGUgZGF5LCB3aXRoIG5vIGRhdGUgc3BlY2lmaWVkXHJcbiAgICovXHJcbiAgdmFsdWU/OkZoaXJUaW1lfHN0cmluZ3x1bmRlZmluZWR8bnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgdGltZSBkdXJpbmcgdGhlIGRheSwgd2l0aCBubyBkYXRlIHNwZWNpZmllZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZoaXJUaW1lIGV4dGVuZHMgZmhpci5GaGlyUHJpbWl0aXZlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1RpbWUnO1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEpTT04gZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19qc29uVHlwZTpzdHJpbmcgPSAnc3RyaW5nJztcclxuICAvLyBwdWJsaXNoZWQgcmVnZXg6IChbMDFdWzAtOV18MlswLTNdKTpbMC01XVswLTldOihbMC01XVswLTldfDYwKShcXC5bMC05XSspP1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19yZWdleDpSZWdFeHAgPSAvXihbMDFdWzAtOV18MlswLTNdKTpbMC01XVswLTldOihbMC01XVswLTldfDYwKShcXC5bMC05XSspPyQvXHJcbiAgLyoqXHJcbiAgICogQSB0aW1lIHZhbHVlLCByZXByZXNlbnRlZCBhcyBhIEpTIHN0cmluZ1xyXG4gICAqL1xyXG4gIGRlY2xhcmUgdmFsdWU/OnN0cmluZ3xudWxsfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgICAqIENyZWF0ZSBhIEZoaXJUaW1lXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSB0aW1lIGR1cmluZyB0aGUgZGF5LCB3aXRoIG5vIGRhdGUgc3BlY2lmaWVkXHJcbiAgICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkIGZvciBpbnRlci1lbGVtZW50IHJlZmVyZW5jaW5nICh1bmNvbW1vbiBvbiBwcmltaXRpdmVzKVxyXG4gICAgICogQHBhcmFtIGV4dGVuc2lvbiBBZGRpdGlvbmFsIGNvbnRlbnQgZGVmaW5lZCBieSBpbXBsZW1lbnRhdGlvbnNcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gcGFzcyB0byBleHRlbnNpb24gY29uc3RydWN0b3JzXHJcbiAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxGaGlyVGltZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0geyB9ICkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKCk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oKTtcclxuICAgIGlmICgodGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSAmJiAoKHRoaXMudmFsdWUgPT09ICcnKSB8fCAodHlwZW9mIHRoaXMudmFsdWUgIT09ICdzdHJpbmcnKSB8fCAoIUZoaXJUaW1lLl9mdHNfcmVnZXgudGVzdCh0aGlzLnZhbHVlKSkpKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdpbnZhbGlkJywgZGlhZ25vc3RpY3M6ICdJbnZhbGlkIHZhbHVlIGluIHByaW1pdGl2ZSB0eXBlIHRpbWUnLCB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==