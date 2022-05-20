// Minimum TypeScript Version: 3.7
// FHIR Primitive: instant
import * as fhir from '../fhir.js';
/**
 * Note: This is intended for where precisely observed times are required, typically system logs etc., and not human-reported times - for them, see date and dateTime (which can be as precise as instant, but is not required to be) below. Time zone is always required
 */
export class FhirInstant extends fhir.FhirPrimitive {
    /**
       * Create a FhirInstant
       * @param value Note: This is intended for where precisely observed times are required, typically system logs etc., and not human-reported times - for them, see date and dateTime (which can be as precise as instant, but is not required to be) below. Time zone is always required
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
        if ((this.value) && (!FhirInstant._fts_regex.test(this.value))) {
            issues.push({ severity: 'error', code: 'invalid', diagnostics: 'Invalid value in primitive type instant', });
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirInstant._fts_dataType = 'Instant';
/**
 * Mapping of this datatype to a JSON equivalent
 */
FhirInstant._fts_jsonType = 'string';
// published regex: ([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))
FhirInstant._fts_regex = /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpckluc3RhbnQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0ZoaXJJbnN0YW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQywwQkFBMEI7QUFFMUIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFZbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sV0FBWSxTQUFRLElBQUksQ0FBQyxhQUFhO0lBZWpEOzs7Ozs7TUFNRTtJQUNGLFlBQVksU0FBa0MsRUFBRSxFQUFFLFVBQXNDLEVBQUc7UUFDekYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUI7UUFDL0IsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUcsV0FBVyxFQUFFLHlDQUF5QyxHQUFHLENBQUMsQ0FBQztTQUMvRztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBakNEOztHQUVHO0FBQzZCLHlCQUFhLEdBQVUsU0FBUyxDQUFDO0FBQ2pFOztHQUVHO0FBQzZCLHlCQUFhLEdBQVUsUUFBUSxDQUFDO0FBQ2hFLHNOQUFzTjtBQUN0TCxzQkFBVSxHQUFVLHNNQUFzTSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFByaW1pdGl2ZTogaW5zdGFudFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBOb3RlOiBUaGlzIGlzIGludGVuZGVkIGZvciB3aGVyZSBwcmVjaXNlbHkgb2JzZXJ2ZWQgdGltZXMgYXJlIHJlcXVpcmVkLCB0eXBpY2FsbHkgc3lzdGVtIGxvZ3MgZXRjLiwgYW5kIG5vdCBodW1hbi1yZXBvcnRlZCB0aW1lcyAtIGZvciB0aGVtLCBzZWUgZGF0ZSBhbmQgZGF0ZVRpbWUgKHdoaWNoIGNhbiBiZSBhcyBwcmVjaXNlIGFzIGluc3RhbnQsIGJ1dCBpcyBub3QgcmVxdWlyZWQgdG8gYmUpIGJlbG93LiBUaW1lIHpvbmUgaXMgYWx3YXlzIHJlcXVpcmVkXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZoaXJJbnN0YW50QXJncyBleHRlbmRzIGZoaXIuRmhpclByaW1pdGl2ZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIE5vdGU6IFRoaXMgaXMgaW50ZW5kZWQgZm9yIHdoZXJlIHByZWNpc2VseSBvYnNlcnZlZCB0aW1lcyBhcmUgcmVxdWlyZWQsIHR5cGljYWxseSBzeXN0ZW0gbG9ncyBldGMuLCBhbmQgbm90IGh1bWFuLXJlcG9ydGVkIHRpbWVzIC0gZm9yIHRoZW0sIHNlZSBkYXRlIGFuZCBkYXRlVGltZSAod2hpY2ggY2FuIGJlIGFzIHByZWNpc2UgYXMgaW5zdGFudCwgYnV0IGlzIG5vdCByZXF1aXJlZCB0byBiZSkgYmVsb3cuIFRpbWUgem9uZSBpcyBhbHdheXMgcmVxdWlyZWRcclxuICAgKi9cclxuICB2YWx1ZT86Rmhpckluc3RhbnR8c3RyaW5nfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE5vdGU6IFRoaXMgaXMgaW50ZW5kZWQgZm9yIHdoZXJlIHByZWNpc2VseSBvYnNlcnZlZCB0aW1lcyBhcmUgcmVxdWlyZWQsIHR5cGljYWxseSBzeXN0ZW0gbG9ncyBldGMuLCBhbmQgbm90IGh1bWFuLXJlcG9ydGVkIHRpbWVzIC0gZm9yIHRoZW0sIHNlZSBkYXRlIGFuZCBkYXRlVGltZSAod2hpY2ggY2FuIGJlIGFzIHByZWNpc2UgYXMgaW5zdGFudCwgYnV0IGlzIG5vdCByZXF1aXJlZCB0byBiZSkgYmVsb3cuIFRpbWUgem9uZSBpcyBhbHdheXMgcmVxdWlyZWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaGlySW5zdGFudCBleHRlbmRzIGZoaXIuRmhpclByaW1pdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdJbnN0YW50JztcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBKU09OIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfanNvblR5cGU6c3RyaW5nID0gJ3N0cmluZyc7XHJcbiAgLy8gcHVibGlzaGVkIHJlZ2V4OiAoWzAtOV0oWzAtOV0oWzAtOV1bMS05XXxbMS05XTApfFsxLTldMDApfFsxLTldMDAwKS0oMFsxLTldfDFbMC0yXSktKDBbMS05XXxbMS0yXVswLTldfDNbMC0xXSlUKFswMV1bMC05XXwyWzAtM10pOlswLTVdWzAtOV06KFswLTVdWzAtOV18NjApKFxcLlswLTldKyk/KFp8KFxcK3wtKSgoMFswLTldfDFbMC0zXSk6WzAtNV1bMC05XXwxNDowMCkpXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX3JlZ2V4OlJlZ0V4cCA9IC9eKFswLTldKFswLTldKFswLTldWzEtOV18WzEtOV0wKXxbMS05XTAwKXxbMS05XTAwMCktKDBbMS05XXwxWzAtMl0pLSgwWzEtOV18WzEtMl1bMC05XXwzWzAtMV0pVChbMDFdWzAtOV18MlswLTNdKTpbMC01XVswLTldOihbMC01XVswLTldfDYwKShcXC5bMC05XSspPyhafChcXCt8LSkoKDBbMC05XXwxWzAtM10pOlswLTVdWzAtOV18MTQ6MDApKSQvXHJcbiAgLyoqXHJcbiAgICogQSBpbnN0YW50IHZhbHVlLCByZXByZXNlbnRlZCBhcyBhIEpTIHN0cmluZ1xyXG4gICAqL1xyXG4gIGRlY2xhcmUgdmFsdWU/OnN0cmluZ3xudWxsfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgICAqIENyZWF0ZSBhIEZoaXJJbnN0YW50XHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgTm90ZTogVGhpcyBpcyBpbnRlbmRlZCBmb3Igd2hlcmUgcHJlY2lzZWx5IG9ic2VydmVkIHRpbWVzIGFyZSByZXF1aXJlZCwgdHlwaWNhbGx5IHN5c3RlbSBsb2dzIGV0Yy4sIGFuZCBub3QgaHVtYW4tcmVwb3J0ZWQgdGltZXMgLSBmb3IgdGhlbSwgc2VlIGRhdGUgYW5kIGRhdGVUaW1lICh3aGljaCBjYW4gYmUgYXMgcHJlY2lzZSBhcyBpbnN0YW50LCBidXQgaXMgbm90IHJlcXVpcmVkIHRvIGJlKSBiZWxvdy4gVGltZSB6b25lIGlzIGFsd2F5cyByZXF1aXJlZFxyXG4gICAgICogQHBhcmFtIGlkIFVuaXF1ZSBpZCBmb3IgaW50ZXItZWxlbWVudCByZWZlcmVuY2luZyAodW5jb21tb24gb24gcHJpbWl0aXZlcylcclxuICAgICAqIEBwYXJhbSBleHRlbnNpb24gQWRkaXRpb25hbCBjb250ZW50IGRlZmluZWQgYnkgaW1wbGVtZW50YXRpb25zXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIHBhc3MgdG8gZXh0ZW5zaW9uIGNvbnN0cnVjdG9yc1xyXG4gICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8Rmhpckluc3RhbnRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHsgfSApIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbigpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKCk7XHJcbiAgICBpZiAoKHRoaXMudmFsdWUpICYmICghRmhpckluc3RhbnQuX2Z0c19yZWdleC50ZXN0KHRoaXMudmFsdWUpKSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAnaW52YWxpZCcsICBkaWFnbm9zdGljczogJ0ludmFsaWQgdmFsdWUgaW4gcHJpbWl0aXZlIHR5cGUgaW5zdGFudCcsIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19