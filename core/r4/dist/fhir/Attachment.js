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
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'Attachment';
        }
        this.vOptS('contentType', expression);
        this.vOptS('language', expression);
        this.vOptS('data', expression);
        this.vOptS('url', expression);
        this.vOptS('size', expression);
        this.vOptS('hash', expression);
        this.vOptS('title', expression);
        this.vOptS('creation', expression);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Attachment._fts_dataType = 'Attachment';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0YWNobWVudC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQXR0YWNobWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUE0RW5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFVBQVcsU0FBUSxJQUFJLENBQUMsV0FBVztJQXFDOUM7O09BRUc7SUFDSCxZQUFZLFNBQWlDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3ZGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ2pHLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxZQUFhLENBQUMsQ0FBQzthQUFFO2lCQUNsRjtnQkFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBMEMsQ0FBQyxDQUFDO2FBQUU7U0FDbEc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDeEYsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxJQUFJLENB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QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxVQUFVLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxVQUFVLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxVQUFVLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBQyxVQUFVLENBQUMsQ0FBQTtRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBQyxVQUFVLENBQUMsQ0FBQTtRQUNqQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQWpHRDs7R0FFRztBQUM2Qix3QkFBYSxHQUFVLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogQXR0YWNobWVudFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTGFuZ3VhZ2VzQ29kZXMsICBMYW5ndWFnZXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTGFuZ3VhZ2VzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IExhbmd1YWdlc1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTGFuZ3VhZ2VzVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEF0dGFjaG1lbnQgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXR0YWNobWVudEFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcyB0aGUgdHlwZSBvZiB0aGUgZGF0YSBpbiB0aGUgYXR0YWNobWVudCBhbmQgYWxsb3dzIGEgbWV0aG9kIHRvIGJlIGNob3NlbiB0byBpbnRlcnByZXQgb3IgcmVuZGVyIHRoZSBkYXRhLiBJbmNsdWRlcyBtaW1lIHR5cGUgcGFyYW1ldGVycyBzdWNoIGFzIGNoYXJzZXQgd2hlcmUgYXBwcm9wcmlhdGUuXHJcbiAgICovXHJcbiAgY29udGVudFR5cGU/OiBmaGlyLkZoaXJDb2RlfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEF0dGFjaG1lbnQuY29udGVudFR5cGVcclxuICAgKi9cclxuICBfY29udGVudFR5cGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBodW1hbiBsYW5ndWFnZSBvZiB0aGUgY29udGVudC4gVGhlIHZhbHVlIGNhbiBiZSBhbnkgdmFsaWQgdmFsdWUgYWNjb3JkaW5nIHRvIEJDUCA0Ny5cclxuICAgKi9cclxuICBsYW5ndWFnZT86IGZoaXIuRmhpckNvZGV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQXR0YWNobWVudC5sYW5ndWFnZVxyXG4gICAqL1xyXG4gIF9sYW5ndWFnZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIGJhc2U2NC1lbmNvZGVkIGRhdGEgU0hBTEwgYmUgZXhwcmVzc2VkIGluIHRoZSBzYW1lIGNoYXJhY3RlciBzZXQgYXMgdGhlIGJhc2UgcmVzb3VyY2UgWE1MIG9yIEpTT04uXHJcbiAgICovXHJcbiAgZGF0YT86IGZoaXIuRmhpckJhc2U2NEJpbmFyeXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBdHRhY2htZW50LmRhdGFcclxuICAgKi9cclxuICBfZGF0YT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogSWYgYm90aCBkYXRhIGFuZCB1cmwgYXJlIHByb3ZpZGVkLCB0aGUgdXJsIFNIQUxMIHBvaW50IHRvIHRoZSBzYW1lIGNvbnRlbnQgYXMgdGhlIGRhdGEgY29udGFpbnMuIFVybHMgbWF5IGJlIHJlbGF0aXZlIHJlZmVyZW5jZXMgb3IgbWF5IHJlZmVyZW5jZSB0cmFuc2llbnQgbG9jYXRpb25zIHN1Y2ggYXMgYSB3cmFwcGluZyBlbnZlbG9wZSB1c2luZyBjaWQ6IHRob3VnaCB0aGlzIGhhcyByYW1pZmljYXRpb25zIGZvciB1c2luZyBzaWduYXR1cmVzLiBSZWxhdGl2ZSBVUkxzIGFyZSBpbnRlcnByZXRlZCByZWxhdGl2ZSB0byB0aGUgc2VydmljZSB1cmwsIGxpa2UgYSByZXNvdXJjZSByZWZlcmVuY2UsIHJhdGhlciB0aGFuIHJlbGF0aXZlIHRvIHRoZSByZXNvdXJjZSBpdHNlbGYuIElmIGEgVVJMIGlzIHByb3ZpZGVkLCBpdCBTSEFMTCByZXNvbHZlIHRvIGFjdHVhbCBkYXRhLlxyXG4gICAqL1xyXG4gIHVybD86IGZoaXIuRmhpclVybHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBdHRhY2htZW50LnVybFxyXG4gICAqL1xyXG4gIF91cmw/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBudW1iZXIgb2YgYnl0ZXMgaXMgcmVkdW5kYW50IGlmIHRoZSBkYXRhIGlzIHByb3ZpZGVkIGFzIGEgYmFzZTY0YmluYXJ5LCBidXQgaXMgdXNlZnVsIGlmIHRoZSBkYXRhIGlzIHByb3ZpZGVkIGFzIGEgdXJsIHJlZmVyZW5jZS5cclxuICAgKi9cclxuICBzaXplPzogZmhpci5GaGlyVW5zaWduZWRJbnR8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQXR0YWNobWVudC5zaXplXHJcbiAgICovXHJcbiAgX3NpemU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBoYXNoIGlzIGNhbGN1bGF0ZWQgb24gdGhlIGRhdGEgcHJpb3IgdG8gYmFzZTY0IGVuY29kaW5nLCBpZiB0aGUgZGF0YSBpcyBiYXNlZDY0IGVuY29kZWQuIFRoZSBoYXNoIGlzIG5vdCBpbnRlbmRlZCB0byBzdXBwb3J0IGRpZ2l0YWwgc2lnbmF0dXJlcy4gV2hlcmUgcHJvdGVjdGlvbiBhZ2FpbnN0IG1hbGljaW91cyB0aHJlYXRzIGEgZGlnaXRhbCBzaWduYXR1cmUgc2hvdWxkIGJlIGNvbnNpZGVyZWQsIHNlZSBbUHJvdmVuYW5jZS5zaWduYXR1cmVdKHByb3ZlbmFuY2UtZGVmaW5pdGlvbnMuaHRtbCNQcm92ZW5hbmNlLnNpZ25hdHVyZSkgZm9yIG1lY2hhbmlzbSB0byBwcm90ZWN0IGEgcmVzb3VyY2Ugd2l0aCBhIGRpZ2l0YWwgc2lnbmF0dXJlLlxyXG4gICAqL1xyXG4gIGhhc2g/OiBmaGlyLkZoaXJCYXNlNjRCaW5hcnl8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQXR0YWNobWVudC5oYXNoXHJcbiAgICovXHJcbiAgX2hhc2g/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEEgbGFiZWwgb3Igc2V0IG9mIHRleHQgdG8gZGlzcGxheSBpbiBwbGFjZSBvZiB0aGUgZGF0YS5cclxuICAgKi9cclxuICB0aXRsZT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBdHRhY2htZW50LnRpdGxlXHJcbiAgICovXHJcbiAgX3RpdGxlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB0aGF0IHRoZSBhdHRhY2htZW50IHdhcyBmaXJzdCBjcmVhdGVkLlxyXG4gICAqL1xyXG4gIGNyZWF0aW9uPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQXR0YWNobWVudC5jcmVhdGlvblxyXG4gICAqL1xyXG4gIF9jcmVhdGlvbj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGb3IgcmVmZXJyaW5nIHRvIGRhdGEgY29udGVudCBkZWZpbmVkIGluIG90aGVyIGZvcm1hdHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXR0YWNobWVudCBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQXR0YWNobWVudCc7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcyB0aGUgdHlwZSBvZiB0aGUgZGF0YSBpbiB0aGUgYXR0YWNobWVudCBhbmQgYWxsb3dzIGEgbWV0aG9kIHRvIGJlIGNob3NlbiB0byBpbnRlcnByZXQgb3IgcmVuZGVyIHRoZSBkYXRhLiBJbmNsdWRlcyBtaW1lIHR5cGUgcGFyYW1ldGVycyBzdWNoIGFzIGNoYXJzZXQgd2hlcmUgYXBwcm9wcmlhdGUuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnRlbnRUeXBlPzogZmhpci5GaGlyQ29kZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGh1bWFuIGxhbmd1YWdlIG9mIHRoZSBjb250ZW50LiBUaGUgdmFsdWUgY2FuIGJlIGFueSB2YWxpZCB2YWx1ZSBhY2NvcmRpbmcgdG8gQkNQIDQ3LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsYW5ndWFnZT86IGZoaXIuRmhpckNvZGV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBiYXNlNjQtZW5jb2RlZCBkYXRhIFNIQUxMIGJlIGV4cHJlc3NlZCBpbiB0aGUgc2FtZSBjaGFyYWN0ZXIgc2V0IGFzIHRoZSBiYXNlIHJlc291cmNlIFhNTCBvciBKU09OLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkYXRhPzogZmhpci5GaGlyQmFzZTY0QmluYXJ5fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiBib3RoIGRhdGEgYW5kIHVybCBhcmUgcHJvdmlkZWQsIHRoZSB1cmwgU0hBTEwgcG9pbnQgdG8gdGhlIHNhbWUgY29udGVudCBhcyB0aGUgZGF0YSBjb250YWlucy4gVXJscyBtYXkgYmUgcmVsYXRpdmUgcmVmZXJlbmNlcyBvciBtYXkgcmVmZXJlbmNlIHRyYW5zaWVudCBsb2NhdGlvbnMgc3VjaCBhcyBhIHdyYXBwaW5nIGVudmVsb3BlIHVzaW5nIGNpZDogdGhvdWdoIHRoaXMgaGFzIHJhbWlmaWNhdGlvbnMgZm9yIHVzaW5nIHNpZ25hdHVyZXMuIFJlbGF0aXZlIFVSTHMgYXJlIGludGVycHJldGVkIHJlbGF0aXZlIHRvIHRoZSBzZXJ2aWNlIHVybCwgbGlrZSBhIHJlc291cmNlIHJlZmVyZW5jZSwgcmF0aGVyIHRoYW4gcmVsYXRpdmUgdG8gdGhlIHJlc291cmNlIGl0c2VsZi4gSWYgYSBVUkwgaXMgcHJvdmlkZWQsIGl0IFNIQUxMIHJlc29sdmUgdG8gYWN0dWFsIGRhdGEuXHJcbiAgICovXHJcbiAgcHVibGljIHVybD86IGZoaXIuRmhpclVybHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIG51bWJlciBvZiBieXRlcyBpcyByZWR1bmRhbnQgaWYgdGhlIGRhdGEgaXMgcHJvdmlkZWQgYXMgYSBiYXNlNjRiaW5hcnksIGJ1dCBpcyB1c2VmdWwgaWYgdGhlIGRhdGEgaXMgcHJvdmlkZWQgYXMgYSB1cmwgcmVmZXJlbmNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzaXplPzogZmhpci5GaGlyVW5zaWduZWRJbnR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBoYXNoIGlzIGNhbGN1bGF0ZWQgb24gdGhlIGRhdGEgcHJpb3IgdG8gYmFzZTY0IGVuY29kaW5nLCBpZiB0aGUgZGF0YSBpcyBiYXNlZDY0IGVuY29kZWQuIFRoZSBoYXNoIGlzIG5vdCBpbnRlbmRlZCB0byBzdXBwb3J0IGRpZ2l0YWwgc2lnbmF0dXJlcy4gV2hlcmUgcHJvdGVjdGlvbiBhZ2FpbnN0IG1hbGljaW91cyB0aHJlYXRzIGEgZGlnaXRhbCBzaWduYXR1cmUgc2hvdWxkIGJlIGNvbnNpZGVyZWQsIHNlZSBbUHJvdmVuYW5jZS5zaWduYXR1cmVdKHByb3ZlbmFuY2UtZGVmaW5pdGlvbnMuaHRtbCNQcm92ZW5hbmNlLnNpZ25hdHVyZSkgZm9yIG1lY2hhbmlzbSB0byBwcm90ZWN0IGEgcmVzb3VyY2Ugd2l0aCBhIGRpZ2l0YWwgc2lnbmF0dXJlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYXNoPzogZmhpci5GaGlyQmFzZTY0QmluYXJ5fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGxhYmVsIG9yIHNldCBvZiB0ZXh0IHRvIGRpc3BsYXkgaW4gcGxhY2Ugb2YgdGhlIGRhdGEuXHJcbiAgICovXHJcbiAgcHVibGljIHRpdGxlPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB0aGF0IHRoZSBhdHRhY2htZW50IHdhcyBmaXJzdCBjcmVhdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjcmVhdGlvbj86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBBdHRhY2htZW50IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8QXR0YWNobWVudEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydjb250ZW50VHlwZSddKSB7IHRoaXMuY29udGVudFR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZSh7dmFsdWU6IHNvdXJjZS5jb250ZW50VHlwZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfY29udGVudFR5cGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5jb250ZW50VHlwZSkgeyB0aGlzLmNvbnRlbnRUeXBlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NvbnRlbnRUeXBlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY29udGVudFR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZShzb3VyY2UuX2NvbnRlbnRUeXBlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbGFuZ3VhZ2UnXSkgeyB0aGlzLmxhbmd1YWdlID0gbmV3IGZoaXIuRmhpckNvZGUoe3ZhbHVlOiBzb3VyY2UubGFuZ3VhZ2V9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2xhbmd1YWdlJ10pIHtcclxuICAgICAgaWYgKHRoaXMubGFuZ3VhZ2UpIHsgdGhpcy5sYW5ndWFnZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9sYW5ndWFnZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmxhbmd1YWdlID0gbmV3IGZoaXIuRmhpckNvZGUoc291cmNlLl9sYW5ndWFnZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2RhdGEnXSkgeyB0aGlzLmRhdGEgPSBuZXcgZmhpci5GaGlyQmFzZTY0QmluYXJ5KHt2YWx1ZTogc291cmNlLmRhdGF9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2RhdGEnXSkge1xyXG4gICAgICBpZiAodGhpcy5kYXRhKSB7IHRoaXMuZGF0YS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kYXRhISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZGF0YSA9IG5ldyBmaGlyLkZoaXJCYXNlNjRCaW5hcnkoc291cmNlLl9kYXRhIGFzIFBhcnRpYWw8Zmhpci5GaGlyQmFzZTY0QmluYXJ5QXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd1cmwnXSkgeyB0aGlzLnVybCA9IG5ldyBmaGlyLkZoaXJVcmwoe3ZhbHVlOiBzb3VyY2UudXJsfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ191cmwnXSkge1xyXG4gICAgICBpZiAodGhpcy51cmwpIHsgdGhpcy51cmwuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdXJsISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudXJsID0gbmV3IGZoaXIuRmhpclVybChzb3VyY2UuX3VybCBhcyBQYXJ0aWFsPGZoaXIuRmhpclVybEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc2l6ZSddKSB7IHRoaXMuc2l6ZSA9IG5ldyBmaGlyLkZoaXJVbnNpZ25lZEludCh7dmFsdWU6IHNvdXJjZS5zaXplfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zaXplJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc2l6ZSkgeyB0aGlzLnNpemUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc2l6ZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnNpemUgPSBuZXcgZmhpci5GaGlyVW5zaWduZWRJbnQoc291cmNlLl9zaXplIGFzIFBhcnRpYWw8Zmhpci5GaGlyVW5zaWduZWRJbnRBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2hhc2gnXSkgeyB0aGlzLmhhc2ggPSBuZXcgZmhpci5GaGlyQmFzZTY0QmluYXJ5KHt2YWx1ZTogc291cmNlLmhhc2h9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2hhc2gnXSkge1xyXG4gICAgICBpZiAodGhpcy5oYXNoKSB7IHRoaXMuaGFzaC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9oYXNoISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuaGFzaCA9IG5ldyBmaGlyLkZoaXJCYXNlNjRCaW5hcnkoc291cmNlLl9oYXNoIGFzIFBhcnRpYWw8Zmhpci5GaGlyQmFzZTY0QmluYXJ5QXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd0aXRsZSddKSB7IHRoaXMudGl0bGUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnRpdGxlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ190aXRsZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnRpdGxlKSB7IHRoaXMudGl0bGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdGl0bGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy50aXRsZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl90aXRsZSBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnY3JlYXRpb24nXSkgeyB0aGlzLmNyZWF0aW9uID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLmNyZWF0aW9ufSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jcmVhdGlvbiddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyZWF0aW9uKSB7IHRoaXMuY3JlYXRpb24uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY3JlYXRpb24hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jcmVhdGlvbiA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX2NyZWF0aW9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPik7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb246c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24pO1xyXG4gICAgaWYgKGV4cHJlc3Npb24gPT09ICcnKSB7IGV4cHJlc3Npb24gPSAnQXR0YWNobWVudCcgfVxyXG4gICAgdGhpcy52T3B0UygnY29udGVudFR5cGUnLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZPcHRTKCdsYW5ndWFnZScsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudk9wdFMoJ2RhdGEnLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZPcHRTKCd1cmwnLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZPcHRTKCdzaXplJyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52T3B0UygnaGFzaCcsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudk9wdFMoJ3RpdGxlJyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52T3B0UygnY3JlYXRpb24nLGV4cHJlc3Npb24pXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=