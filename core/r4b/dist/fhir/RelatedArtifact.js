// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: RelatedArtifact
import * as fhir from '../fhir.js';
// @ts-ignore
import { RelatedArtifactTypeVsValidation } from '../fhirValueSets/RelatedArtifactTypeVsValidation.js';
/**
 * Related artifacts such as additional documentation, justification, or bibliographic references.
 */
export class RelatedArtifact extends fhir.FhirElement {
    /**
     * Default constructor for RelatedArtifact - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['type']) {
            this.type = new fhir.FhirCode({ value: source.type });
        }
        else {
            this.type = null;
        }
        if (source['_type']) {
            if (this.type) {
                this.type.addExtendedProperties(source._type);
            }
            else {
                this.type = new fhir.FhirCode(source._type);
            }
        }
        if (source['label']) {
            this.label = new fhir.FhirString({ value: source.label });
        }
        if (source['_label']) {
            if (this.label) {
                this.label.addExtendedProperties(source._label);
            }
            else {
                this.label = new fhir.FhirString(source._label);
            }
        }
        if (source['display']) {
            this.display = new fhir.FhirString({ value: source.display });
        }
        if (source['_display']) {
            if (this.display) {
                this.display.addExtendedProperties(source._display);
            }
            else {
                this.display = new fhir.FhirString(source._display);
            }
        }
        if (source['citation']) {
            this.citation = new fhir.FhirMarkdown({ value: source.citation });
        }
        if (source['_citation']) {
            if (this.citation) {
                this.citation.addExtendedProperties(source._citation);
            }
            else {
                this.citation = new fhir.FhirMarkdown(source._citation);
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
        if (source['document']) {
            this.document = new fhir.Attachment(source.document);
        }
        if (source['resource']) {
            this.resource = new fhir.FhirCanonical({ value: source.resource });
        }
        if (source['_resource']) {
            if (this.resource) {
                this.resource.addExtendedProperties(source._resource);
            }
            else {
                this.resource = new fhir.FhirCanonical(source._resource);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'RelatedArtifact';
        }
        this.vRSV('type', exp, 'RelatedArtifactType', RelatedArtifactTypeVsValidation, 'r');
        this.vOS('label', exp);
        this.vOS('display', exp);
        this.vOS('citation', exp);
        this.vOS('url', exp);
        this.vOS('document', exp);
        this.vOS('resource', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
RelatedArtifact._fts_dataType = 'RelatedArtifact';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVsYXRlZEFydGlmYWN0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9SZWxhdGVkQXJ0aWZhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQTJEdEc7O0dBRUc7QUFDSCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxJQUFJLENBQUMsV0FBVztJQWlDbkQ7O09BRUc7SUFDSCxZQUFZLFNBQXNDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQzVGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBOEIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7U0FBRTthQUNwRztZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDMUIsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQyxDQUFDO2FBQUU7aUJBQzdEO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUE4QixNQUFNLENBQUMsS0FBK0IsQ0FBQyxDQUFDO2FBQUU7U0FDN0c7UUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMs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QUFHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsU0FBNEMsQ0FBQyxDQUFDO2FBQUU7U0FDdEc7SUFDSCxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsaUJBQWlCLENBQUE7U0FBRTtRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMscUJBQXFCLEVBQUMsK0JBQStCLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUFwRkQ7O0dBRUc7QUFDNkIsNkJBQWEsR0FBVSxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IFJlbGF0ZWRBcnRpZmFjdFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUmVsYXRlZEFydGlmYWN0VHlwZUNvZGVzLCAgUmVsYXRlZEFydGlmYWN0VHlwZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9SZWxhdGVkQXJ0aWZhY3RUeXBlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFJlbGF0ZWRBcnRpZmFjdFR5cGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1JlbGF0ZWRBcnRpZmFjdFR5cGVWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgUmVsYXRlZEFydGlmYWN0IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFJlbGF0ZWRBcnRpZmFjdEFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgb2YgcmVsYXRpb25zaGlwIHRvIHRoZSByZWxhdGVkIGFydGlmYWN0LlxyXG4gICAqL1xyXG4gIHR5cGU6IGZoaXIuRmhpckNvZGU8UmVsYXRlZEFydGlmYWN0VHlwZUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBSZWxhdGVkQXJ0aWZhY3QudHlwZVxyXG4gICAqL1xyXG4gIF90eXBlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIHNob3J0IGxhYmVsIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVmZXJlbmNlIHRoZSBjaXRhdGlvbiBmcm9tIGVsc2V3aGVyZSBpbiB0aGUgY29udGFpbmluZyBhcnRpZmFjdCwgc3VjaCBhcyBhIGZvb3Rub3RlIGluZGV4LlxyXG4gICAqL1xyXG4gIGxhYmVsPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFJlbGF0ZWRBcnRpZmFjdC5sYWJlbFxyXG4gICAqL1xyXG4gIF9sYWJlbD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSBicmllZiBkZXNjcmlwdGlvbiBvZiB0aGUgZG9jdW1lbnQgb3Iga25vd2xlZGdlIHJlc291cmNlIGJlaW5nIHJlZmVyZW5jZWQsIHN1aXRhYmxlIGZvciBkaXNwbGF5IHRvIGEgY29uc3VtZXIuXHJcbiAgICovXHJcbiAgZGlzcGxheT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBSZWxhdGVkQXJ0aWZhY3QuZGlzcGxheVxyXG4gICAqL1xyXG4gIF9kaXNwbGF5PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHN0cnVjdHVyZWQgaW5mb3JtYXRpb24gYWJvdXQgY2l0YXRpb25zIHNob3VsZCBiZSBjYXB0dXJlZCBhcyBleHRlbnNpb25zLlxyXG4gICAqL1xyXG4gIGNpdGF0aW9uPzogZmhpci5GaGlyTWFya2Rvd258c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUmVsYXRlZEFydGlmYWN0LmNpdGF0aW9uXHJcbiAgICovXHJcbiAgX2NpdGF0aW9uPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBJZiBhIGRvY3VtZW50IG9yIHJlc291cmNlIGVsZW1lbnQgaXMgcHJlc2VudCwgdGhpcyBlbGVtZW50IFNIQUxMIE5PVCBiZSBwcm92aWRlZCAodXNlIHRoZSB1cmwgb3IgcmVmZXJlbmNlIGluIHRoZSBBdHRhY2htZW50IG9yIHJlc291cmNlIHJlZmVyZW5jZSkuXHJcbiAgICovXHJcbiAgdXJsPzogZmhpci5GaGlyVXJsfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFJlbGF0ZWRBcnRpZmFjdC51cmxcclxuICAgKi9cclxuICBfdXJsPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgZG9jdW1lbnQgYmVpbmcgcmVmZXJlbmNlZCwgcmVwcmVzZW50ZWQgYXMgYW4gYXR0YWNobWVudC4gVGhpcyBpcyBleGNsdXNpdmUgd2l0aCB0aGUgcmVzb3VyY2UgZWxlbWVudC5cclxuICAgKi9cclxuICBkb2N1bWVudD86IGZoaXIuQXR0YWNobWVudEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSB0eXBlIGlzIHByZWRlY2Vzc29yLCB0aGlzIGlzIGEgcmVmZXJlbmNlIHRvIHRoZSBzdWNjZWVkaW5nIGtub3dsZWRnZSByZXNvdXJjZS4gSWYgdGhlIHR5cGUgaXMgc3VjY2Vzc29yLCB0aGlzIGlzIGEgcmVmZXJlbmNlIHRvIHRoZSBwcmlvciBrbm93bGVkZ2UgcmVzb3VyY2UuXHJcbiAgICovXHJcbiAgcmVzb3VyY2U/OiBmaGlyLkZoaXJDYW5vbmljYWx8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUmVsYXRlZEFydGlmYWN0LnJlc291cmNlXHJcbiAgICovXHJcbiAgX3Jlc291cmNlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbGF0ZWQgYXJ0aWZhY3RzIHN1Y2ggYXMgYWRkaXRpb25hbCBkb2N1bWVudGF0aW9uLCBqdXN0aWZpY2F0aW9uLCBvciBiaWJsaW9ncmFwaGljIHJlZmVyZW5jZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVsYXRlZEFydGlmYWN0IGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdSZWxhdGVkQXJ0aWZhY3QnO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0eXBlIG9mIHJlbGF0aW9uc2hpcCB0byB0aGUgcmVsYXRlZCBhcnRpZmFjdC5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZTogZmhpci5GaGlyQ29kZTxSZWxhdGVkQXJ0aWZhY3RUeXBlQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogQSBzaG9ydCBsYWJlbCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlZmVyZW5jZSB0aGUgY2l0YXRpb24gZnJvbSBlbHNld2hlcmUgaW4gdGhlIGNvbnRhaW5pbmcgYXJ0aWZhY3QsIHN1Y2ggYXMgYSBmb290bm90ZSBpbmRleC5cclxuICAgKi9cclxuICBwdWJsaWMgbGFiZWw/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgYnJpZWYgZGVzY3JpcHRpb24gb2YgdGhlIGRvY3VtZW50IG9yIGtub3dsZWRnZSByZXNvdXJjZSBiZWluZyByZWZlcmVuY2VkLCBzdWl0YWJsZSBmb3IgZGlzcGxheSB0byBhIGNvbnN1bWVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkaXNwbGF5PzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHN0cnVjdHVyZWQgaW5mb3JtYXRpb24gYWJvdXQgY2l0YXRpb25zIHNob3VsZCBiZSBjYXB0dXJlZCBhcyBleHRlbnNpb25zLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjaXRhdGlvbj86IGZoaXIuRmhpck1hcmtkb3dufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiBhIGRvY3VtZW50IG9yIHJlc291cmNlIGVsZW1lbnQgaXMgcHJlc2VudCwgdGhpcyBlbGVtZW50IFNIQUxMIE5PVCBiZSBwcm92aWRlZCAodXNlIHRoZSB1cmwgb3IgcmVmZXJlbmNlIGluIHRoZSBBdHRhY2htZW50IG9yIHJlc291cmNlIHJlZmVyZW5jZSkuXHJcbiAgICovXHJcbiAgcHVibGljIHVybD86IGZoaXIuRmhpclVybHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRvY3VtZW50IGJlaW5nIHJlZmVyZW5jZWQsIHJlcHJlc2VudGVkIGFzIGFuIGF0dGFjaG1lbnQuIFRoaXMgaXMgZXhjbHVzaXZlIHdpdGggdGhlIHJlc291cmNlIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgcHVibGljIGRvY3VtZW50PzogZmhpci5BdHRhY2htZW50fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiB0aGUgdHlwZSBpcyBwcmVkZWNlc3NvciwgdGhpcyBpcyBhIHJlZmVyZW5jZSB0byB0aGUgc3VjY2VlZGluZyBrbm93bGVkZ2UgcmVzb3VyY2UuIElmIHRoZSB0eXBlIGlzIHN1Y2Nlc3NvciwgdGhpcyBpcyBhIHJlZmVyZW5jZSB0byB0aGUgcHJpb3Iga25vd2xlZGdlIHJlc291cmNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXNvdXJjZT86IGZoaXIuRmhpckNhbm9uaWNhbHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgUmVsYXRlZEFydGlmYWN0IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8UmVsYXRlZEFydGlmYWN0QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZTxSZWxhdGVkQXJ0aWZhY3RUeXBlQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnR5cGV9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMudHlwZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ190eXBlJ10pIHtcclxuICAgICAgaWYgKHRoaXMudHlwZSkgeyB0aGlzLnR5cGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdHlwZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZTxSZWxhdGVkQXJ0aWZhY3RUeXBlQ29kZVR5cGU+KHNvdXJjZS5fdHlwZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbGFiZWwnXSkgeyB0aGlzLmxhYmVsID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5sYWJlbH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfbGFiZWwnXSkge1xyXG4gICAgICBpZiAodGhpcy5sYWJlbCkgeyB0aGlzLmxhYmVsLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2xhYmVsISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubGFiZWwgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fbGFiZWwgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2Rpc3BsYXknXSkgeyB0aGlzLmRpc3BsYXkgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmRpc3BsYXl9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Rpc3BsYXknXSkge1xyXG4gICAgICBpZiAodGhpcy5kaXNwbGF5KSB7IHRoaXMuZGlzcGxheS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kaXNwbGF5ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZGlzcGxheSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9kaXNwbGF5IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjaXRhdGlvbiddKSB7IHRoaXMuY2l0YXRpb24gPSBuZXcgZmhpci5GaGlyTWFya2Rvd24oe3ZhbHVlOiBzb3VyY2UuY2l0YXRpb259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NpdGF0aW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMuY2l0YXRpb24pIHsgdGhpcy5jaXRhdGlvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jaXRhdGlvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNpdGF0aW9uID0gbmV3IGZoaXIuRmhpck1hcmtkb3duKHNvdXJjZS5fY2l0YXRpb24gYXMgUGFydGlhbDxmaGlyLkZoaXJNYXJrZG93bkFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndXJsJ10pIHsgdGhpcy51cmwgPSBuZXcgZmhpci5GaGlyVXJsKHt2YWx1ZTogc291cmNlLnVybH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfdXJsJ10pIHtcclxuICAgICAgaWYgKHRoaXMudXJsKSB7IHRoaXMudXJsLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3VybCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnVybCA9IG5ldyBmaGlyLkZoaXJVcmwoc291cmNlLl91cmwgYXMgUGFydGlhbDxmaGlyLkZoaXJVcmxBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2RvY3VtZW50J10pIHsgdGhpcy5kb2N1bWVudCA9IG5ldyBmaGlyLkF0dGFjaG1lbnQoc291cmNlLmRvY3VtZW50KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVzb3VyY2UnXSkgeyB0aGlzLnJlc291cmNlID0gbmV3IGZoaXIuRmhpckNhbm9uaWNhbCh7dmFsdWU6IHNvdXJjZS5yZXNvdXJjZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfcmVzb3VyY2UnXSkge1xyXG4gICAgICBpZiAodGhpcy5yZXNvdXJjZSkgeyB0aGlzLnJlc291cmNlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3Jlc291cmNlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucmVzb3VyY2UgPSBuZXcgZmhpci5GaGlyQ2Fub25pY2FsKHNvdXJjZS5fcmVzb3VyY2UgYXMgUGFydGlhbDxmaGlyLkZoaXJDYW5vbmljYWxBcmdzPik7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdSZWxhdGVkQXJ0aWZhY3QnIH1cclxuICAgIHRoaXMudlJTVigndHlwZScsZXhwLCdSZWxhdGVkQXJ0aWZhY3RUeXBlJyxSZWxhdGVkQXJ0aWZhY3RUeXBlVnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHRoaXMudk9TKCdsYWJlbCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2Rpc3BsYXknLGV4cClcclxuICAgIHRoaXMudk9TKCdjaXRhdGlvbicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3VybCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2RvY3VtZW50JyxleHApXHJcbiAgICB0aGlzLnZPUygncmVzb3VyY2UnLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==