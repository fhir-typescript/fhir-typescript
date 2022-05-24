// Minimum TypeScript Version: 3.7
// FHIR Primitive: base64Binary
import * as fhir from '../fhir.js';
/**
 * A stream of bytes, base64 encoded
 */
export class FhirBase64Binary extends fhir.FhirPrimitive {
    /**
       * Create a FhirBase64Binary
       * @param value A stream of bytes, base64 encoded
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
        if ((this.value) && ((typeof this.value !== 'string') || (!FhirBase64Binary._fts_regex.test(this.value)))) {
            issues.push({ severity: 'error', code: 'invalid', diagnostics: 'Invalid value in primitive type base64Binary', });
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirBase64Binary._fts_dataType = 'Base64Binary';
/**
 * Mapping of this datatype to a JSON equivalent
 */
FhirBase64Binary._fts_jsonType = 'string';
// published regex: (\s*([0-9a-zA-Z\+/=]){4}\s*)+
FhirBase64Binary._fts_regex = /^(\s*([0-9a-zA-Z\+/=]){4}\s*)+$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpckJhc2U2NEJpbmFyeS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRmhpckJhc2U2NEJpbmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFDbEMsK0JBQStCO0FBRS9CLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBWW5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGdCQUFpQixTQUFRLElBQUksQ0FBQyxhQUFhO0lBZXREOzs7Ozs7TUFNRTtJQUNGLFlBQVksU0FBdUMsRUFBRSxFQUFFLFVBQXNDLEVBQUc7UUFDOUYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUI7UUFDL0IsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3pHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUcsV0FBVyxFQUFFLDhDQUE4QyxHQUFHLENBQUMsQ0FBQztTQUNwSDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBakNEOztHQUVHO0FBQzZCLDhCQUFhLEdBQVUsY0FBYyxDQUFDO0FBQ3RFOztHQUVHO0FBQzZCLDhCQUFhLEdBQVUsUUFBUSxDQUFDO0FBQ2hFLGlEQUFpRDtBQUNqQiwyQkFBVSxHQUFVLGlDQUFpQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFByaW1pdGl2ZTogYmFzZTY0QmluYXJ5XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIEEgc3RyZWFtIG9mIGJ5dGVzLCBiYXNlNjQgZW5jb2RlZFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGaGlyQmFzZTY0QmluYXJ5QXJncyBleHRlbmRzIGZoaXIuRmhpclByaW1pdGl2ZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEEgc3RyZWFtIG9mIGJ5dGVzLCBiYXNlNjQgZW5jb2RlZFxyXG4gICAqL1xyXG4gIHZhbHVlPzpGaGlyQmFzZTY0QmluYXJ5fHN0cmluZ3x1bmRlZmluZWR8bnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgc3RyZWFtIG9mIGJ5dGVzLCBiYXNlNjQgZW5jb2RlZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZoaXJCYXNlNjRCaW5hcnkgZXh0ZW5kcyBmaGlyLkZoaXJQcmltaXRpdmUge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQmFzZTY0QmluYXJ5JztcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBKU09OIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfanNvblR5cGU6c3RyaW5nID0gJ3N0cmluZyc7XHJcbiAgLy8gcHVibGlzaGVkIHJlZ2V4OiAoXFxzKihbMC05YS16QS1aXFwrLz1dKXs0fVxccyopK1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19yZWdleDpSZWdFeHAgPSAvXihcXHMqKFswLTlhLXpBLVpcXCsvPV0pezR9XFxzKikrJC9cclxuICAvKipcclxuICAgKiBBIGJhc2U2NEJpbmFyeSB2YWx1ZSwgcmVwcmVzZW50ZWQgYXMgYSBKUyBzdHJpbmdcclxuICAgKi9cclxuICBkZWNsYXJlIHZhbHVlPzpzdHJpbmd8bnVsbHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBGaGlyQmFzZTY0QmluYXJ5XHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBzdHJlYW0gb2YgYnl0ZXMsIGJhc2U2NCBlbmNvZGVkXHJcbiAgICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkIGZvciBpbnRlci1lbGVtZW50IHJlZmVyZW5jaW5nICh1bmNvbW1vbiBvbiBwcmltaXRpdmVzKVxyXG4gICAgICogQHBhcmFtIGV4dGVuc2lvbiBBZGRpdGlvbmFsIGNvbnRlbnQgZGVmaW5lZCBieSBpbXBsZW1lbnRhdGlvbnNcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gcGFzcyB0byBleHRlbnNpb24gY29uc3RydWN0b3JzXHJcbiAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxGaGlyQmFzZTY0QmluYXJ5QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7IH0gKSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbigpO1xyXG4gICAgaWYgKCh0aGlzLnZhbHVlKSAmJiAoKHR5cGVvZiB0aGlzLnZhbHVlICE9PSAnc3RyaW5nJykgfHwgKCFGaGlyQmFzZTY0QmluYXJ5Ll9mdHNfcmVnZXgudGVzdCh0aGlzLnZhbHVlKSkpKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdpbnZhbGlkJywgIGRpYWdub3N0aWNzOiAnSW52YWxpZCB2YWx1ZSBpbiBwcmltaXRpdmUgdHlwZSBiYXNlNjRCaW5hcnknLCB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==