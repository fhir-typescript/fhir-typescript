// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Attachment
import * as fhir from '../fhir.js';
/**
 * For referring to data content defined in other formats.
 */
export class Attachment extends fhir.FhirElement {
    /**
     * Default constructor for Attachment - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['contentType']) {
            this.contentType = new fhir.FhirCode({ value: source.contentType });
        }
        if (source['_contentType']) {
            if (this.contentType) {
                this.contentType.addExtendedProperties(source._contentType);
            }
            else {
                this.contentType = new fhir.FhirCode(source._contentType);
            }
        }
        if (source['language']) {
            this.language = new fhir.FhirCode({ value: source.language });
        }
        if (source['_language']) {
            if (this.language) {
                this.language.addExtendedProperties(source._language);
            }
            else {
                this.language = new fhir.FhirCode(source._language);
            }
        }
        if (source['data']) {
            this.data = new fhir.FhirBase64Binary({ value: source.data });
        }
        if (source['_data']) {
            if (this.data) {
                this.data.addExtendedProperties(source._data);
            }
            else {
                this.data = new fhir.FhirBase64Binary(source._data);
            }
        }
        if (source['url']) {
            this.url = new fhir.FhirUrl({ value: source.url });
        }
        if (source['_url']) {
            if (this.url) {
                this.url.addExtendedProperties(source._url);
            }
            else {
                this.url = new fhir.FhirUrl(source._url);
            }
        }
        if (source['size']) {
            this.size = new fhir.FhirUnsignedInt({ value: source.size });
        }
        if (source['_size']) {
            if (this.size) {
                this.size.addExtendedProperties(source._size);
            }
            else {
                this.size = new fhir.FhirUnsignedInt(source._size);
            }
        }
        if (source['hash']) {
            this.hash = new fhir.FhirBase64Binary({ value: source.hash });
        }
        if (source['_hash']) {
            if (this.hash) {
                this.hash.addExtendedProperties(source._hash);
            }
            else {
                this.hash = new fhir.FhirBase64Binary(source._hash);
            }
        }
        if (source['title']) {
            this.title = new fhir.FhirString({ value: source.title });
        }
        if (source['_title']) {
            if (this.title) {
                this.title.addExtendedProperties(source._title);
            }
            else {
                this.title = new fhir.FhirString(source._title);
            }
        }
        if (source['creation']) {
            this.creation = new fhir.FhirDateTime({ value: source.creation });
        }
        if (source['_creation']) {
            if (this.creation) {
                this.creation.addExtendedProperties(source._creation);
            }
            else {
                this.creation = new fhir.FhirDateTime(source._creation);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Attachment';
        }
        iss.push(...this.vOS('contentType', exp));
        iss.push(...this.vOS('language', exp));
        iss.push(...this.vOS('data', exp));
        iss.push(...this.vOS('url', exp));
        iss.push(...this.vOS('size', exp));
        iss.push(...this.vOS('hash', exp));
        iss.push(...this.vOS('title', exp));
        iss.push(...this.vOS('creation', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Attachment._fts_dataType = 'Attachment';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0YWNobWVudC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQXR0YWNobWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUE0RW5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFVBQVcsU0FBUSxJQUFJLENBQUMsV0FBVztJQXFDOUM7O09BRUc7SUFDSCxZQUFZLFNBQWlDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3ZGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ2pHLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxZQUFhLENBQUMsQ0FBQzthQUFFO2lCQUNsRjtnQkFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBMEMsQ0FBQyxDQUFDO2FBQUU7U0FDbEc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDeEYsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxJQUFJLENB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QUFDO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUFqR0Q7O0dBRUc7QUFDNkIsd0JBQWEsR0FBVSxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IEF0dGFjaG1lbnRcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IExhbmd1YWdlc0NvZGVzLCAgTGFuZ3VhZ2VzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xhbmd1YWdlc0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBMYW5ndWFnZXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xhbmd1YWdlc1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBBdHRhY2htZW50IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEF0dGFjaG1lbnRBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgdGhlIHR5cGUgb2YgdGhlIGRhdGEgaW4gdGhlIGF0dGFjaG1lbnQgYW5kIGFsbG93cyBhIG1ldGhvZCB0byBiZSBjaG9zZW4gdG8gaW50ZXJwcmV0IG9yIHJlbmRlciB0aGUgZGF0YS4gSW5jbHVkZXMgbWltZSB0eXBlIHBhcmFtZXRlcnMgc3VjaCBhcyBjaGFyc2V0IHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gICAqL1xyXG4gIGNvbnRlbnRUeXBlPzogZmhpci5GaGlyQ29kZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBdHRhY2htZW50LmNvbnRlbnRUeXBlXHJcbiAgICovXHJcbiAgX2NvbnRlbnRUeXBlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgaHVtYW4gbGFuZ3VhZ2Ugb2YgdGhlIGNvbnRlbnQuIFRoZSB2YWx1ZSBjYW4gYmUgYW55IHZhbGlkIHZhbHVlIGFjY29yZGluZyB0byBCQ1AgNDcuXHJcbiAgICovXHJcbiAgbGFuZ3VhZ2U/OiBmaGlyLkZoaXJDb2RlfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEF0dGFjaG1lbnQubGFuZ3VhZ2VcclxuICAgKi9cclxuICBfbGFuZ3VhZ2U/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBiYXNlNjQtZW5jb2RlZCBkYXRhIFNIQUxMIGJlIGV4cHJlc3NlZCBpbiB0aGUgc2FtZSBjaGFyYWN0ZXIgc2V0IGFzIHRoZSBiYXNlIHJlc291cmNlIFhNTCBvciBKU09OLlxyXG4gICAqL1xyXG4gIGRhdGE/OiBmaGlyLkZoaXJCYXNlNjRCaW5hcnl8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQXR0YWNobWVudC5kYXRhXHJcbiAgICovXHJcbiAgX2RhdGE/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIElmIGJvdGggZGF0YSBhbmQgdXJsIGFyZSBwcm92aWRlZCwgdGhlIHVybCBTSEFMTCBwb2ludCB0byB0aGUgc2FtZSBjb250ZW50IGFzIHRoZSBkYXRhIGNvbnRhaW5zLiBVcmxzIG1heSBiZSByZWxhdGl2ZSByZWZlcmVuY2VzIG9yIG1heSByZWZlcmVuY2UgdHJhbnNpZW50IGxvY2F0aW9ucyBzdWNoIGFzIGEgd3JhcHBpbmcgZW52ZWxvcGUgdXNpbmcgY2lkOiB0aG91Z2ggdGhpcyBoYXMgcmFtaWZpY2F0aW9ucyBmb3IgdXNpbmcgc2lnbmF0dXJlcy4gUmVsYXRpdmUgVVJMcyBhcmUgaW50ZXJwcmV0ZWQgcmVsYXRpdmUgdG8gdGhlIHNlcnZpY2UgdXJsLCBsaWtlIGEgcmVzb3VyY2UgcmVmZXJlbmNlLCByYXRoZXIgdGhhbiByZWxhdGl2ZSB0byB0aGUgcmVzb3VyY2UgaXRzZWxmLiBJZiBhIFVSTCBpcyBwcm92aWRlZCwgaXQgU0hBTEwgcmVzb2x2ZSB0byBhY3R1YWwgZGF0YS5cclxuICAgKi9cclxuICB1cmw/OiBmaGlyLkZoaXJVcmx8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQXR0YWNobWVudC51cmxcclxuICAgKi9cclxuICBfdXJsPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgbnVtYmVyIG9mIGJ5dGVzIGlzIHJlZHVuZGFudCBpZiB0aGUgZGF0YSBpcyBwcm92aWRlZCBhcyBhIGJhc2U2NGJpbmFyeSwgYnV0IGlzIHVzZWZ1bCBpZiB0aGUgZGF0YSBpcyBwcm92aWRlZCBhcyBhIHVybCByZWZlcmVuY2UuXHJcbiAgICovXHJcbiAgc2l6ZT86IGZoaXIuRmhpclVuc2lnbmVkSW50fG51bWJlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEF0dGFjaG1lbnQuc2l6ZVxyXG4gICAqL1xyXG4gIF9zaXplPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgaGFzaCBpcyBjYWxjdWxhdGVkIG9uIHRoZSBkYXRhIHByaW9yIHRvIGJhc2U2NCBlbmNvZGluZywgaWYgdGhlIGRhdGEgaXMgYmFzZWQ2NCBlbmNvZGVkLiBUaGUgaGFzaCBpcyBub3QgaW50ZW5kZWQgdG8gc3VwcG9ydCBkaWdpdGFsIHNpZ25hdHVyZXMuIFdoZXJlIHByb3RlY3Rpb24gYWdhaW5zdCBtYWxpY2lvdXMgdGhyZWF0cyBhIGRpZ2l0YWwgc2lnbmF0dXJlIHNob3VsZCBiZSBjb25zaWRlcmVkLCBzZWUgW1Byb3ZlbmFuY2Uuc2lnbmF0dXJlXShwcm92ZW5hbmNlLWRlZmluaXRpb25zLmh0bWwjUHJvdmVuYW5jZS5zaWduYXR1cmUpIGZvciBtZWNoYW5pc20gdG8gcHJvdGVjdCBhIHJlc291cmNlIHdpdGggYSBkaWdpdGFsIHNpZ25hdHVyZS5cclxuICAgKi9cclxuICBoYXNoPzogZmhpci5GaGlyQmFzZTY0QmluYXJ5fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEF0dGFjaG1lbnQuaGFzaFxyXG4gICAqL1xyXG4gIF9oYXNoPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIGxhYmVsIG9yIHNldCBvZiB0ZXh0IHRvIGRpc3BsYXkgaW4gcGxhY2Ugb2YgdGhlIGRhdGEuXHJcbiAgICovXHJcbiAgdGl0bGU/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQXR0YWNobWVudC50aXRsZVxyXG4gICAqL1xyXG4gIF90aXRsZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgdGhhdCB0aGUgYXR0YWNobWVudCB3YXMgZmlyc3QgY3JlYXRlZC5cclxuICAgKi9cclxuICBjcmVhdGlvbj86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEF0dGFjaG1lbnQuY3JlYXRpb25cclxuICAgKi9cclxuICBfY3JlYXRpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogRm9yIHJlZmVycmluZyB0byBkYXRhIGNvbnRlbnQgZGVmaW5lZCBpbiBvdGhlciBmb3JtYXRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEF0dGFjaG1lbnQgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0F0dGFjaG1lbnQnO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgdGhlIHR5cGUgb2YgdGhlIGRhdGEgaW4gdGhlIGF0dGFjaG1lbnQgYW5kIGFsbG93cyBhIG1ldGhvZCB0byBiZSBjaG9zZW4gdG8gaW50ZXJwcmV0IG9yIHJlbmRlciB0aGUgZGF0YS4gSW5jbHVkZXMgbWltZSB0eXBlIHBhcmFtZXRlcnMgc3VjaCBhcyBjaGFyc2V0IHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb250ZW50VHlwZT86IGZoaXIuRmhpckNvZGV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBodW1hbiBsYW5ndWFnZSBvZiB0aGUgY29udGVudC4gVGhlIHZhbHVlIGNhbiBiZSBhbnkgdmFsaWQgdmFsdWUgYWNjb3JkaW5nIHRvIEJDUCA0Ny5cclxuICAgKi9cclxuICBwdWJsaWMgbGFuZ3VhZ2U/OiBmaGlyLkZoaXJDb2RlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgYmFzZTY0LWVuY29kZWQgZGF0YSBTSEFMTCBiZSBleHByZXNzZWQgaW4gdGhlIHNhbWUgY2hhcmFjdGVyIHNldCBhcyB0aGUgYmFzZSByZXNvdXJjZSBYTUwgb3IgSlNPTi5cclxuICAgKi9cclxuICBwdWJsaWMgZGF0YT86IGZoaXIuRmhpckJhc2U2NEJpbmFyeXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgYm90aCBkYXRhIGFuZCB1cmwgYXJlIHByb3ZpZGVkLCB0aGUgdXJsIFNIQUxMIHBvaW50IHRvIHRoZSBzYW1lIGNvbnRlbnQgYXMgdGhlIGRhdGEgY29udGFpbnMuIFVybHMgbWF5IGJlIHJlbGF0aXZlIHJlZmVyZW5jZXMgb3IgbWF5IHJlZmVyZW5jZSB0cmFuc2llbnQgbG9jYXRpb25zIHN1Y2ggYXMgYSB3cmFwcGluZyBlbnZlbG9wZSB1c2luZyBjaWQ6IHRob3VnaCB0aGlzIGhhcyByYW1pZmljYXRpb25zIGZvciB1c2luZyBzaWduYXR1cmVzLiBSZWxhdGl2ZSBVUkxzIGFyZSBpbnRlcnByZXRlZCByZWxhdGl2ZSB0byB0aGUgc2VydmljZSB1cmwsIGxpa2UgYSByZXNvdXJjZSByZWZlcmVuY2UsIHJhdGhlciB0aGFuIHJlbGF0aXZlIHRvIHRoZSByZXNvdXJjZSBpdHNlbGYuIElmIGEgVVJMIGlzIHByb3ZpZGVkLCBpdCBTSEFMTCByZXNvbHZlIHRvIGFjdHVhbCBkYXRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1cmw/OiBmaGlyLkZoaXJVcmx8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBudW1iZXIgb2YgYnl0ZXMgaXMgcmVkdW5kYW50IGlmIHRoZSBkYXRhIGlzIHByb3ZpZGVkIGFzIGEgYmFzZTY0YmluYXJ5LCBidXQgaXMgdXNlZnVsIGlmIHRoZSBkYXRhIGlzIHByb3ZpZGVkIGFzIGEgdXJsIHJlZmVyZW5jZS5cclxuICAgKi9cclxuICBwdWJsaWMgc2l6ZT86IGZoaXIuRmhpclVuc2lnbmVkSW50fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaGFzaCBpcyBjYWxjdWxhdGVkIG9uIHRoZSBkYXRhIHByaW9yIHRvIGJhc2U2NCBlbmNvZGluZywgaWYgdGhlIGRhdGEgaXMgYmFzZWQ2NCBlbmNvZGVkLiBUaGUgaGFzaCBpcyBub3QgaW50ZW5kZWQgdG8gc3VwcG9ydCBkaWdpdGFsIHNpZ25hdHVyZXMuIFdoZXJlIHByb3RlY3Rpb24gYWdhaW5zdCBtYWxpY2lvdXMgdGhyZWF0cyBhIGRpZ2l0YWwgc2lnbmF0dXJlIHNob3VsZCBiZSBjb25zaWRlcmVkLCBzZWUgW1Byb3ZlbmFuY2Uuc2lnbmF0dXJlXShwcm92ZW5hbmNlLWRlZmluaXRpb25zLmh0bWwjUHJvdmVuYW5jZS5zaWduYXR1cmUpIGZvciBtZWNoYW5pc20gdG8gcHJvdGVjdCBhIHJlc291cmNlIHdpdGggYSBkaWdpdGFsIHNpZ25hdHVyZS5cclxuICAgKi9cclxuICBwdWJsaWMgaGFzaD86IGZoaXIuRmhpckJhc2U2NEJpbmFyeXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBsYWJlbCBvciBzZXQgb2YgdGV4dCB0byBkaXNwbGF5IGluIHBsYWNlIG9mIHRoZSBkYXRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0aXRsZT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgdGhhdCB0aGUgYXR0YWNobWVudCB3YXMgZmlyc3QgY3JlYXRlZC5cclxuICAgKi9cclxuICBwdWJsaWMgY3JlYXRpb24/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgQXR0YWNobWVudCAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEF0dGFjaG1lbnRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnY29udGVudFR5cGUnXSkgeyB0aGlzLmNvbnRlbnRUeXBlID0gbmV3IGZoaXIuRmhpckNvZGUoe3ZhbHVlOiBzb3VyY2UuY29udGVudFR5cGV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NvbnRlbnRUeXBlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuY29udGVudFR5cGUpIHsgdGhpcy5jb250ZW50VHlwZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jb250ZW50VHlwZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNvbnRlbnRUeXBlID0gbmV3IGZoaXIuRmhpckNvZGUoc291cmNlLl9jb250ZW50VHlwZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2xhbmd1YWdlJ10pIHsgdGhpcy5sYW5ndWFnZSA9IG5ldyBmaGlyLkZoaXJDb2RlKHt2YWx1ZTogc291cmNlLmxhbmd1YWdlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19sYW5ndWFnZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmxhbmd1YWdlKSB7IHRoaXMubGFuZ3VhZ2UuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fbGFuZ3VhZ2UhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5sYW5ndWFnZSA9IG5ldyBmaGlyLkZoaXJDb2RlKHNvdXJjZS5fbGFuZ3VhZ2UgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydkYXRhJ10pIHsgdGhpcy5kYXRhID0gbmV3IGZoaXIuRmhpckJhc2U2NEJpbmFyeSh7dmFsdWU6IHNvdXJjZS5kYXRhfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kYXRhJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZGF0YSkgeyB0aGlzLmRhdGEuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZGF0YSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRhdGEgPSBuZXcgZmhpci5GaGlyQmFzZTY0QmluYXJ5KHNvdXJjZS5fZGF0YSBhcyBQYXJ0aWFsPGZoaXIuRmhpckJhc2U2NEJpbmFyeUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndXJsJ10pIHsgdGhpcy51cmwgPSBuZXcgZmhpci5GaGlyVXJsKHt2YWx1ZTogc291cmNlLnVybH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfdXJsJ10pIHtcclxuICAgICAgaWYgKHRoaXMudXJsKSB7IHRoaXMudXJsLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3VybCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnVybCA9IG5ldyBmaGlyLkZoaXJVcmwoc291cmNlLl91cmwgYXMgUGFydGlhbDxmaGlyLkZoaXJVcmxBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3NpemUnXSkgeyB0aGlzLnNpemUgPSBuZXcgZmhpci5GaGlyVW5zaWduZWRJbnQoe3ZhbHVlOiBzb3VyY2Uuc2l6ZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfc2l6ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnNpemUpIHsgdGhpcy5zaXplLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3NpemUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zaXplID0gbmV3IGZoaXIuRmhpclVuc2lnbmVkSW50KHNvdXJjZS5fc2l6ZSBhcyBQYXJ0aWFsPGZoaXIuRmhpclVuc2lnbmVkSW50QXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydoYXNoJ10pIHsgdGhpcy5oYXNoID0gbmV3IGZoaXIuRmhpckJhc2U2NEJpbmFyeSh7dmFsdWU6IHNvdXJjZS5oYXNofSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19oYXNoJ10pIHtcclxuICAgICAgaWYgKHRoaXMuaGFzaCkgeyB0aGlzLmhhc2guYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5faGFzaCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmhhc2ggPSBuZXcgZmhpci5GaGlyQmFzZTY0QmluYXJ5KHNvdXJjZS5faGFzaCBhcyBQYXJ0aWFsPGZoaXIuRmhpckJhc2U2NEJpbmFyeUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndGl0bGUnXSkgeyB0aGlzLnRpdGxlID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS50aXRsZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfdGl0bGUnXSkge1xyXG4gICAgICBpZiAodGhpcy50aXRsZSkgeyB0aGlzLnRpdGxlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3RpdGxlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudGl0bGUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fdGl0bGUgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NyZWF0aW9uJ10pIHsgdGhpcy5jcmVhdGlvbiA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5jcmVhdGlvbn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfY3JlYXRpb24nXSkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGlvbikgeyB0aGlzLmNyZWF0aW9uLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NyZWF0aW9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY3JlYXRpb24gPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9jcmVhdGlvbiBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnQXR0YWNobWVudCcgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2NvbnRlbnRUeXBlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdsYW5ndWFnZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZGF0YScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndXJsJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdzaXplJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdoYXNoJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd0aXRsZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnY3JlYXRpb24nLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19