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
        if (source['contentType'] !== undefined) {
            this.contentType = new fhir.FhirCode({ value: source.contentType }, options);
        }
        if (source['_contentType']) {
            if (this.contentType) {
                this.contentType.addExtendedProperties(source._contentType);
            }
            else {
                this.contentType = new fhir.FhirCode(source._contentType, options);
            }
        }
        if (source['language'] !== undefined) {
            this.language = new fhir.FhirCode({ value: source.language }, options);
        }
        if (source['_language']) {
            if (this.language) {
                this.language.addExtendedProperties(source._language);
            }
            else {
                this.language = new fhir.FhirCode(source._language, options);
            }
        }
        if (source['data'] !== undefined) {
            this.data = new fhir.FhirBase64Binary({ value: source.data }, options);
        }
        if (source['_data']) {
            if (this.data) {
                this.data.addExtendedProperties(source._data);
            }
            else {
                this.data = new fhir.FhirBase64Binary(source._data, options);
            }
        }
        if (source['url'] !== undefined) {
            this.url = new fhir.FhirUrl({ value: source.url }, options);
        }
        if (source['_url']) {
            if (this.url) {
                this.url.addExtendedProperties(source._url);
            }
            else {
                this.url = new fhir.FhirUrl(source._url, options);
            }
        }
        if (source['size'] !== undefined) {
            this.size = new fhir.FhirUnsignedInt({ value: source.size }, options);
        }
        if (source['_size']) {
            if (this.size) {
                this.size.addExtendedProperties(source._size);
            }
            else {
                this.size = new fhir.FhirUnsignedInt(source._size, options);
            }
        }
        if (source['hash'] !== undefined) {
            this.hash = new fhir.FhirBase64Binary({ value: source.hash }, options);
        }
        if (source['_hash']) {
            if (this.hash) {
                this.hash.addExtendedProperties(source._hash);
            }
            else {
                this.hash = new fhir.FhirBase64Binary(source._hash, options);
            }
        }
        if (source['title'] !== undefined) {
            this.title = new fhir.FhirString({ value: source.title }, options);
        }
        if (source['_title']) {
            if (this.title) {
                this.title.addExtendedProperties(source._title);
            }
            else {
                this.title = new fhir.FhirString(source._title, options);
            }
        }
        if (source['creation'] !== undefined) {
            this.creation = new fhir.FhirDateTime({ value: source.creation }, options);
        }
        if (source['_creation']) {
            if (this.creation) {
                this.creation.addExtendedProperties(source._creation);
            }
            else {
                this.creation = new fhir.FhirDateTime(source._creation, options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0YWNobWVudC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQXR0YWNobWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUE0RW5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFVBQVcsU0FBUSxJQUFJLENBQUMsV0FBVztJQXFDOUM7O09BRUc7SUFDSCxZQUFZLFNBQWlDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3ZGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDeEgsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUFFLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFlBQWEsQ0FBQyxDQUFDO2FBQUU7aUJBQ2xGO2dCQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUEwQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQUU7U0FDM0c7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUMv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LENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLFlBQVksQ0FBQTtTQUFFO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUFqR0Q7O0dBRUc7QUFDNkIsd0JBQWEsR0FBVSxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IEF0dGFjaG1lbnRcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IExhbmd1YWdlc0NvZGVzLCAgTGFuZ3VhZ2VzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xhbmd1YWdlc0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBMYW5ndWFnZXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xhbmd1YWdlc1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBBdHRhY2htZW50IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEF0dGFjaG1lbnRBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgdGhlIHR5cGUgb2YgdGhlIGRhdGEgaW4gdGhlIGF0dGFjaG1lbnQgYW5kIGFsbG93cyBhIG1ldGhvZCB0byBiZSBjaG9zZW4gdG8gaW50ZXJwcmV0IG9yIHJlbmRlciB0aGUgZGF0YS4gSW5jbHVkZXMgbWltZSB0eXBlIHBhcmFtZXRlcnMgc3VjaCBhcyBjaGFyc2V0IHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gICAqL1xyXG4gIGNvbnRlbnRUeXBlPzogZmhpci5GaGlyQ29kZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBdHRhY2htZW50LmNvbnRlbnRUeXBlXHJcbiAgICovXHJcbiAgX2NvbnRlbnRUeXBlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgaHVtYW4gbGFuZ3VhZ2Ugb2YgdGhlIGNvbnRlbnQuIFRoZSB2YWx1ZSBjYW4gYmUgYW55IHZhbGlkIHZhbHVlIGFjY29yZGluZyB0byBCQ1AgNDcuXHJcbiAgICovXHJcbiAgbGFuZ3VhZ2U/OiBmaGlyLkZoaXJDb2RlfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEF0dGFjaG1lbnQubGFuZ3VhZ2VcclxuICAgKi9cclxuICBfbGFuZ3VhZ2U/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBiYXNlNjQtZW5jb2RlZCBkYXRhIFNIQUxMIGJlIGV4cHJlc3NlZCBpbiB0aGUgc2FtZSBjaGFyYWN0ZXIgc2V0IGFzIHRoZSBiYXNlIHJlc291cmNlIFhNTCBvciBKU09OLlxyXG4gICAqL1xyXG4gIGRhdGE/OiBmaGlyLkZoaXJCYXNlNjRCaW5hcnl8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQXR0YWNobWVudC5kYXRhXHJcbiAgICovXHJcbiAgX2RhdGE/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIElmIGJvdGggZGF0YSBhbmQgdXJsIGFyZSBwcm92aWRlZCwgdGhlIHVybCBTSEFMTCBwb2ludCB0byB0aGUgc2FtZSBjb250ZW50IGFzIHRoZSBkYXRhIGNvbnRhaW5zLiBVcmxzIG1heSBiZSByZWxhdGl2ZSByZWZlcmVuY2VzIG9yIG1heSByZWZlcmVuY2UgdHJhbnNpZW50IGxvY2F0aW9ucyBzdWNoIGFzIGEgd3JhcHBpbmcgZW52ZWxvcGUgdXNpbmcgY2lkOiB0aG91Z2ggdGhpcyBoYXMgcmFtaWZpY2F0aW9ucyBmb3IgdXNpbmcgc2lnbmF0dXJlcy4gUmVsYXRpdmUgVVJMcyBhcmUgaW50ZXJwcmV0ZWQgcmVsYXRpdmUgdG8gdGhlIHNlcnZpY2UgdXJsLCBsaWtlIGEgcmVzb3VyY2UgcmVmZXJlbmNlLCByYXRoZXIgdGhhbiByZWxhdGl2ZSB0byB0aGUgcmVzb3VyY2UgaXRzZWxmLiBJZiBhIFVSTCBpcyBwcm92aWRlZCwgaXQgU0hBTEwgcmVzb2x2ZSB0byBhY3R1YWwgZGF0YS5cclxuICAgKi9cclxuICB1cmw/OiBmaGlyLkZoaXJVcmx8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQXR0YWNobWVudC51cmxcclxuICAgKi9cclxuICBfdXJsPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgbnVtYmVyIG9mIGJ5dGVzIGlzIHJlZHVuZGFudCBpZiB0aGUgZGF0YSBpcyBwcm92aWRlZCBhcyBhIGJhc2U2NGJpbmFyeSwgYnV0IGlzIHVzZWZ1bCBpZiB0aGUgZGF0YSBpcyBwcm92aWRlZCBhcyBhIHVybCByZWZlcmVuY2UuXHJcbiAgICovXHJcbiAgc2l6ZT86IGZoaXIuRmhpclVuc2lnbmVkSW50fG51bWJlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEF0dGFjaG1lbnQuc2l6ZVxyXG4gICAqL1xyXG4gIF9zaXplPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgaGFzaCBpcyBjYWxjdWxhdGVkIG9uIHRoZSBkYXRhIHByaW9yIHRvIGJhc2U2NCBlbmNvZGluZywgaWYgdGhlIGRhdGEgaXMgYmFzZWQ2NCBlbmNvZGVkLiBUaGUgaGFzaCBpcyBub3QgaW50ZW5kZWQgdG8gc3VwcG9ydCBkaWdpdGFsIHNpZ25hdHVyZXMuIFdoZXJlIHByb3RlY3Rpb24gYWdhaW5zdCBtYWxpY2lvdXMgdGhyZWF0cyBhIGRpZ2l0YWwgc2lnbmF0dXJlIHNob3VsZCBiZSBjb25zaWRlcmVkLCBzZWUgW1Byb3ZlbmFuY2Uuc2lnbmF0dXJlXShwcm92ZW5hbmNlLWRlZmluaXRpb25zLmh0bWwjUHJvdmVuYW5jZS5zaWduYXR1cmUpIGZvciBtZWNoYW5pc20gdG8gcHJvdGVjdCBhIHJlc291cmNlIHdpdGggYSBkaWdpdGFsIHNpZ25hdHVyZS5cclxuICAgKi9cclxuICBoYXNoPzogZmhpci5GaGlyQmFzZTY0QmluYXJ5fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEF0dGFjaG1lbnQuaGFzaFxyXG4gICAqL1xyXG4gIF9oYXNoPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIGxhYmVsIG9yIHNldCBvZiB0ZXh0IHRvIGRpc3BsYXkgaW4gcGxhY2Ugb2YgdGhlIGRhdGEuXHJcbiAgICovXHJcbiAgdGl0bGU/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQXR0YWNobWVudC50aXRsZVxyXG4gICAqL1xyXG4gIF90aXRsZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgdGhhdCB0aGUgYXR0YWNobWVudCB3YXMgZmlyc3QgY3JlYXRlZC5cclxuICAgKi9cclxuICBjcmVhdGlvbj86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEF0dGFjaG1lbnQuY3JlYXRpb25cclxuICAgKi9cclxuICBfY3JlYXRpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogRm9yIHJlZmVycmluZyB0byBkYXRhIGNvbnRlbnQgZGVmaW5lZCBpbiBvdGhlciBmb3JtYXRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEF0dGFjaG1lbnQgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0F0dGFjaG1lbnQnO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgdGhlIHR5cGUgb2YgdGhlIGRhdGEgaW4gdGhlIGF0dGFjaG1lbnQgYW5kIGFsbG93cyBhIG1ldGhvZCB0byBiZSBjaG9zZW4gdG8gaW50ZXJwcmV0IG9yIHJlbmRlciB0aGUgZGF0YS4gSW5jbHVkZXMgbWltZSB0eXBlIHBhcmFtZXRlcnMgc3VjaCBhcyBjaGFyc2V0IHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb250ZW50VHlwZT86IGZoaXIuRmhpckNvZGV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBodW1hbiBsYW5ndWFnZSBvZiB0aGUgY29udGVudC4gVGhlIHZhbHVlIGNhbiBiZSBhbnkgdmFsaWQgdmFsdWUgYWNjb3JkaW5nIHRvIEJDUCA0Ny5cclxuICAgKi9cclxuICBwdWJsaWMgbGFuZ3VhZ2U/OiBmaGlyLkZoaXJDb2RlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgYmFzZTY0LWVuY29kZWQgZGF0YSBTSEFMTCBiZSBleHByZXNzZWQgaW4gdGhlIHNhbWUgY2hhcmFjdGVyIHNldCBhcyB0aGUgYmFzZSByZXNvdXJjZSBYTUwgb3IgSlNPTi5cclxuICAgKi9cclxuICBwdWJsaWMgZGF0YT86IGZoaXIuRmhpckJhc2U2NEJpbmFyeXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgYm90aCBkYXRhIGFuZCB1cmwgYXJlIHByb3ZpZGVkLCB0aGUgdXJsIFNIQUxMIHBvaW50IHRvIHRoZSBzYW1lIGNvbnRlbnQgYXMgdGhlIGRhdGEgY29udGFpbnMuIFVybHMgbWF5IGJlIHJlbGF0aXZlIHJlZmVyZW5jZXMgb3IgbWF5IHJlZmVyZW5jZSB0cmFuc2llbnQgbG9jYXRpb25zIHN1Y2ggYXMgYSB3cmFwcGluZyBlbnZlbG9wZSB1c2luZyBjaWQ6IHRob3VnaCB0aGlzIGhhcyByYW1pZmljYXRpb25zIGZvciB1c2luZyBzaWduYXR1cmVzLiBSZWxhdGl2ZSBVUkxzIGFyZSBpbnRlcnByZXRlZCByZWxhdGl2ZSB0byB0aGUgc2VydmljZSB1cmwsIGxpa2UgYSByZXNvdXJjZSByZWZlcmVuY2UsIHJhdGhlciB0aGFuIHJlbGF0aXZlIHRvIHRoZSByZXNvdXJjZSBpdHNlbGYuIElmIGEgVVJMIGlzIHByb3ZpZGVkLCBpdCBTSEFMTCByZXNvbHZlIHRvIGFjdHVhbCBkYXRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1cmw/OiBmaGlyLkZoaXJVcmx8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBudW1iZXIgb2YgYnl0ZXMgaXMgcmVkdW5kYW50IGlmIHRoZSBkYXRhIGlzIHByb3ZpZGVkIGFzIGEgYmFzZTY0YmluYXJ5LCBidXQgaXMgdXNlZnVsIGlmIHRoZSBkYXRhIGlzIHByb3ZpZGVkIGFzIGEgdXJsIHJlZmVyZW5jZS5cclxuICAgKi9cclxuICBwdWJsaWMgc2l6ZT86IGZoaXIuRmhpclVuc2lnbmVkSW50fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaGFzaCBpcyBjYWxjdWxhdGVkIG9uIHRoZSBkYXRhIHByaW9yIHRvIGJhc2U2NCBlbmNvZGluZywgaWYgdGhlIGRhdGEgaXMgYmFzZWQ2NCBlbmNvZGVkLiBUaGUgaGFzaCBpcyBub3QgaW50ZW5kZWQgdG8gc3VwcG9ydCBkaWdpdGFsIHNpZ25hdHVyZXMuIFdoZXJlIHByb3RlY3Rpb24gYWdhaW5zdCBtYWxpY2lvdXMgdGhyZWF0cyBhIGRpZ2l0YWwgc2lnbmF0dXJlIHNob3VsZCBiZSBjb25zaWRlcmVkLCBzZWUgW1Byb3ZlbmFuY2Uuc2lnbmF0dXJlXShwcm92ZW5hbmNlLWRlZmluaXRpb25zLmh0bWwjUHJvdmVuYW5jZS5zaWduYXR1cmUpIGZvciBtZWNoYW5pc20gdG8gcHJvdGVjdCBhIHJlc291cmNlIHdpdGggYSBkaWdpdGFsIHNpZ25hdHVyZS5cclxuICAgKi9cclxuICBwdWJsaWMgaGFzaD86IGZoaXIuRmhpckJhc2U2NEJpbmFyeXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBsYWJlbCBvciBzZXQgb2YgdGV4dCB0byBkaXNwbGF5IGluIHBsYWNlIG9mIHRoZSBkYXRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0aXRsZT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgdGhhdCB0aGUgYXR0YWNobWVudCB3YXMgZmlyc3QgY3JlYXRlZC5cclxuICAgKi9cclxuICBwdWJsaWMgY3JlYXRpb24/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgQXR0YWNobWVudCAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEF0dGFjaG1lbnRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnY29udGVudFR5cGUnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuY29udGVudFR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZSh7dmFsdWU6IHNvdXJjZS5jb250ZW50VHlwZX0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfY29udGVudFR5cGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5jb250ZW50VHlwZSkgeyB0aGlzLmNvbnRlbnRUeXBlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NvbnRlbnRUeXBlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY29udGVudFR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZShzb3VyY2UuX2NvbnRlbnRUeXBlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZUFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbGFuZ3VhZ2UnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMubGFuZ3VhZ2UgPSBuZXcgZmhpci5GaGlyQ29kZSh7dmFsdWU6IHNvdXJjZS5sYW5ndWFnZX0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfbGFuZ3VhZ2UnXSkge1xyXG4gICAgICBpZiAodGhpcy5sYW5ndWFnZSkgeyB0aGlzLmxhbmd1YWdlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2xhbmd1YWdlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubGFuZ3VhZ2UgPSBuZXcgZmhpci5GaGlyQ29kZShzb3VyY2UuX2xhbmd1YWdlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZUFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGF0YSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5kYXRhID0gbmV3IGZoaXIuRmhpckJhc2U2NEJpbmFyeSh7dmFsdWU6IHNvdXJjZS5kYXRhfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kYXRhJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZGF0YSkgeyB0aGlzLmRhdGEuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZGF0YSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRhdGEgPSBuZXcgZmhpci5GaGlyQmFzZTY0QmluYXJ5KHNvdXJjZS5fZGF0YSBhcyBQYXJ0aWFsPGZoaXIuRmhpckJhc2U2NEJpbmFyeUFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndXJsJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnVybCA9IG5ldyBmaGlyLkZoaXJVcmwoe3ZhbHVlOiBzb3VyY2UudXJsfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ191cmwnXSkge1xyXG4gICAgICBpZiAodGhpcy51cmwpIHsgdGhpcy51cmwuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdXJsISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudXJsID0gbmV3IGZoaXIuRmhpclVybChzb3VyY2UuX3VybCBhcyBQYXJ0aWFsPGZoaXIuRmhpclVybEFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc2l6ZSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zaXplID0gbmV3IGZoaXIuRmhpclVuc2lnbmVkSW50KHt2YWx1ZTogc291cmNlLnNpemV9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3NpemUnXSkge1xyXG4gICAgICBpZiAodGhpcy5zaXplKSB7IHRoaXMuc2l6ZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zaXplISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc2l6ZSA9IG5ldyBmaGlyLkZoaXJVbnNpZ25lZEludChzb3VyY2UuX3NpemUgYXMgUGFydGlhbDxmaGlyLkZoaXJVbnNpZ25lZEludEFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnaGFzaCddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5oYXNoID0gbmV3IGZoaXIuRmhpckJhc2U2NEJpbmFyeSh7dmFsdWU6IHNvdXJjZS5oYXNofSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19oYXNoJ10pIHtcclxuICAgICAgaWYgKHRoaXMuaGFzaCkgeyB0aGlzLmhhc2guYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5faGFzaCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmhhc2ggPSBuZXcgZmhpci5GaGlyQmFzZTY0QmluYXJ5KHNvdXJjZS5faGFzaCBhcyBQYXJ0aWFsPGZoaXIuRmhpckJhc2U2NEJpbmFyeUFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndGl0bGUnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudGl0bGUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnRpdGxlfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ190aXRsZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnRpdGxlKSB7IHRoaXMudGl0bGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdGl0bGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy50aXRsZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl90aXRsZSBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnY3JlYXRpb24nXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuY3JlYXRpb24gPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UuY3JlYXRpb259LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NyZWF0aW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRpb24pIHsgdGhpcy5jcmVhdGlvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jcmVhdGlvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNyZWF0aW9uID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fY3JlYXRpb24gYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0F0dGFjaG1lbnQnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdjb250ZW50VHlwZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnbGFuZ3VhZ2UnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2RhdGEnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3VybCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnc2l6ZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnaGFzaCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndGl0bGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2NyZWF0aW9uJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==