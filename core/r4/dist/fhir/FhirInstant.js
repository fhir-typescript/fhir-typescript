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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpckluc3RhbnQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0ZoaXJJbnN0YW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQywwQkFBMEI7QUFFMUIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFZbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sV0FBWSxTQUFRLElBQUksQ0FBQyxhQUFhO0lBZWpEOzs7Ozs7TUFNRTtJQUNGLFlBQVksU0FBa0MsRUFBRSxFQUFFLFVBQXNDLEVBQUc7UUFDekYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUI7UUFDL0IsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUcsV0FBVyxFQUFFLHlDQUF5QyxHQUFHLENBQUMsQ0FBQztTQUMvRztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBakNEOztHQUVHO0FBQzZCLHlCQUFhLEdBQVUsU0FBUyxDQUFDO0FBQ2pFOztHQUVHO0FBQzZCLHlCQUFhLEdBQVUsUUFBUSxDQUFDO0FBQ2hFLHNOQUFzTjtBQUN0TCxzQkFBVSxHQUFVLHNNQUFzTSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFByaW1pdGl2ZTogaW5zdGFudFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBOb3RlOiBUaGlzIGlzIGludGVuZGVkIGZvciB3aGVyZSBwcmVjaXNlbHkgb2JzZXJ2ZWQgdGltZXMgYXJlIHJlcXVpcmVkLCB0eXBpY2FsbHkgc3lzdGVtIGxvZ3MgZXRjLiwgYW5kIG5vdCBodW1hbi1yZXBvcnRlZCB0aW1lcyAtIGZvciB0aGVtLCBzZWUgZGF0ZSBhbmQgZGF0ZVRpbWUgKHdoaWNoIGNhbiBiZSBhcyBwcmVjaXNlIGFzIGluc3RhbnQsIGJ1dCBpcyBub3QgcmVxdWlyZWQgdG8gYmUpIGJlbG93LiBUaW1lIHpvbmUgaXMgYWx3YXlzIHJlcXVpcmVkXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZoaXJJbnN0YW50QXJncyBleHRlbmRzIGZoaXIuRmhpclByaW1pdGl2ZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIE5vdGU6IFRoaXMgaXMgaW50ZW5kZWQgZm9yIHdoZXJlIHByZWNpc2VseSBvYnNlcnZlZCB0aW1lcyBhcmUgcmVxdWlyZWQsIHR5cGljYWxseSBzeXN0ZW0gbG9ncyBldGMuLCBhbmQgbm90IGh1bWFuLXJlcG9ydGVkIHRpbWVzIC0gZm9yIHRoZW0sIHNlZSBkYXRlIGFuZCBkYXRlVGltZSAod2hpY2ggY2FuIGJlIGFzIHByZWNpc2UgYXMgaW5zdGFudCwgYnV0IGlzIG5vdCByZXF1aXJlZCB0byBiZSkgYmVsb3cuIFRpbWUgem9uZSBpcyBhbHdheXMgcmVxdWlyZWRcclxuICAgKi9cclxuICB2YWx1ZT86Rmhpckluc3RhbnR8c3RyaW5nfHVuZGVmaW5lZHxudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogTm90ZTogVGhpcyBpcyBpbnRlbmRlZCBmb3Igd2hlcmUgcHJlY2lzZWx5IG9ic2VydmVkIHRpbWVzIGFyZSByZXF1aXJlZCwgdHlwaWNhbGx5IHN5c3RlbSBsb2dzIGV0Yy4sIGFuZCBub3QgaHVtYW4tcmVwb3J0ZWQgdGltZXMgLSBmb3IgdGhlbSwgc2VlIGRhdGUgYW5kIGRhdGVUaW1lICh3aGljaCBjYW4gYmUgYXMgcHJlY2lzZSBhcyBpbnN0YW50LCBidXQgaXMgbm90IHJlcXVpcmVkIHRvIGJlKSBiZWxvdy4gVGltZSB6b25lIGlzIGFsd2F5cyByZXF1aXJlZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZoaXJJbnN0YW50IGV4dGVuZHMgZmhpci5GaGlyUHJpbWl0aXZlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0luc3RhbnQnO1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEpTT04gZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19qc29uVHlwZTpzdHJpbmcgPSAnc3RyaW5nJztcclxuICAvLyBwdWJsaXNoZWQgcmVnZXg6IChbMC05XShbMC05XShbMC05XVsxLTldfFsxLTldMCl8WzEtOV0wMCl8WzEtOV0wMDApLSgwWzEtOV18MVswLTJdKS0oMFsxLTldfFsxLTJdWzAtOV18M1swLTFdKVQoWzAxXVswLTldfDJbMC0zXSk6WzAtNV1bMC05XTooWzAtNV1bMC05XXw2MCkoXFwuWzAtOV0rKT8oWnwoXFwrfC0pKCgwWzAtOV18MVswLTNdKTpbMC01XVswLTldfDE0OjAwKSlcclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfcmVnZXg6UmVnRXhwID0gL14oWzAtOV0oWzAtOV0oWzAtOV1bMS05XXxbMS05XTApfFsxLTldMDApfFsxLTldMDAwKS0oMFsxLTldfDFbMC0yXSktKDBbMS05XXxbMS0yXVswLTldfDNbMC0xXSlUKFswMV1bMC05XXwyWzAtM10pOlswLTVdWzAtOV06KFswLTVdWzAtOV18NjApKFxcLlswLTldKyk/KFp8KFxcK3wtKSgoMFswLTldfDFbMC0zXSk6WzAtNV1bMC05XXwxNDowMCkpJC9cclxuICAvKipcclxuICAgKiBBIGluc3RhbnQgdmFsdWUsIHJlcHJlc2VudGVkIGFzIGEgSlMgc3RyaW5nXHJcbiAgICovXHJcbiAgZGVjbGFyZSB2YWx1ZT86c3RyaW5nfG51bGx8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgRmhpckluc3RhbnRcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBOb3RlOiBUaGlzIGlzIGludGVuZGVkIGZvciB3aGVyZSBwcmVjaXNlbHkgb2JzZXJ2ZWQgdGltZXMgYXJlIHJlcXVpcmVkLCB0eXBpY2FsbHkgc3lzdGVtIGxvZ3MgZXRjLiwgYW5kIG5vdCBodW1hbi1yZXBvcnRlZCB0aW1lcyAtIGZvciB0aGVtLCBzZWUgZGF0ZSBhbmQgZGF0ZVRpbWUgKHdoaWNoIGNhbiBiZSBhcyBwcmVjaXNlIGFzIGluc3RhbnQsIGJ1dCBpcyBub3QgcmVxdWlyZWQgdG8gYmUpIGJlbG93LiBUaW1lIHpvbmUgaXMgYWx3YXlzIHJlcXVpcmVkXHJcbiAgICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkIGZvciBpbnRlci1lbGVtZW50IHJlZmVyZW5jaW5nICh1bmNvbW1vbiBvbiBwcmltaXRpdmVzKVxyXG4gICAgICogQHBhcmFtIGV4dGVuc2lvbiBBZGRpdGlvbmFsIGNvbnRlbnQgZGVmaW5lZCBieSBpbXBsZW1lbnRhdGlvbnNcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gcGFzcyB0byBleHRlbnNpb24gY29uc3RydWN0b3JzXHJcbiAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxGaGlySW5zdGFudEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0geyB9ICkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKCk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oKTtcclxuICAgIGlmICgodGhpcy52YWx1ZSkgJiYgKCFGaGlySW5zdGFudC5fZnRzX3JlZ2V4LnRlc3QodGhpcy52YWx1ZSkpKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdpbnZhbGlkJywgIGRpYWdub3N0aWNzOiAnSW52YWxpZCB2YWx1ZSBpbiBwcmltaXRpdmUgdHlwZSBpbnN0YW50JywgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=