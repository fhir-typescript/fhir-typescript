// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
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
            this.citation = new fhir.FhirString({ value: source.citation });
        }
        if (source['_citation']) {
            if (this.citation) {
                this.citation.addExtendedProperties(source._citation);
            }
            else {
                this.citation = new fhir.FhirString(source._citation);
            }
        }
        if (source['url']) {
            this.url = new fhir.FhirUri({ value: source.url });
        }
        if (source['_url']) {
            if (this.url) {
                this.url.addExtendedProperties(source._url);
            }
            else {
                this.url = new fhir.FhirUri(source._url);
            }
        }
        if (source['document']) {
            this.document = new fhir.Attachment(source.document);
        }
        if (source['resource']) {
            this.resource = new fhir.Reference(source.resource);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'RelatedArtifact';
        }
        iss.push(...this.vRSV('type', exp, 'RelatedArtifactType', RelatedArtifactTypeVsValidation, 'r'));
        iss.push(...this.vOS('display', exp));
        iss.push(...this.vOS('citation', exp));
        iss.push(...this.vOS('url', exp));
        iss.push(...this.vOS('document', exp));
        iss.push(...this.vOS('resource', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
RelatedArtifact._fts_dataType = 'RelatedArtifact';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVsYXRlZEFydGlmYWN0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9SZWxhdGVkQXJ0aWZhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQStDdEc7O0dBRUc7QUFDSCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxJQUFJLENBQUMsV0FBVztJQTZCbkQ7O09BRUc7SUFDSCxZQUFZLFNBQXNDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQzVGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBOEIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7U0FBRTthQUNwRztZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDMUIsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQyxDQUFDO2FBQUU7aUJBQzdEO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUE4QixNQUFNLENBQUMsS0FBK0IsQ0FBQyxDQUFDO2FBQUU7U0FDN0c7UUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDdkYsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUFFLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFFBQVMsQ0FBQyxDQUFDO2FBQUU7aUJBQ3RFO2dCQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUF3QyxDQUFDLENBQUM7YUFBRTtTQUM5RjtRQUNELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7U0FBRTtRQUMxRixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsU0FBVSxDQUFDLENBQUM7YUFBRTtpQkFDekU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQXlDLENBQUMsQ0FBQzthQUFFO1NBQ2hHO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3hFLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFLLENBQUMsQ0FBQzthQUFFO2lCQUMxRDtnQkFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBaUMsQ0FBQyxDQUFDO2FBQUU7U0FDaEY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUFFO1FBQ2pGLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQUU7SUFDbEYsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksR0FBRyxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLGlCQUFpQixDQUFBO1NBQUU7UUFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxxQkFBcUIsRUFBQywrQkFBK0IsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdGLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUF0RUQ7O0dBRUc7QUFDNkIsNkJBQWEsR0FBVSxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogUmVsYXRlZEFydGlmYWN0XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBSZWxhdGVkQXJ0aWZhY3RUeXBlQ29kZXMsICBSZWxhdGVkQXJ0aWZhY3RUeXBlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1JlbGF0ZWRBcnRpZmFjdFR5cGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUmVsYXRlZEFydGlmYWN0VHlwZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVsYXRlZEFydGlmYWN0VHlwZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBSZWxhdGVkQXJ0aWZhY3QgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVsYXRlZEFydGlmYWN0QXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiByZWxhdGlvbnNoaXAgdG8gdGhlIHJlbGF0ZWQgYXJ0aWZhY3QuXHJcbiAgICovXHJcbiAgdHlwZTogZmhpci5GaGlyQ29kZTxSZWxhdGVkQXJ0aWZhY3RUeXBlQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFJlbGF0ZWRBcnRpZmFjdC50eXBlXHJcbiAgICovXHJcbiAgX3R5cGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEEgYnJpZWYgZGVzY3JpcHRpb24gb2YgdGhlIGRvY3VtZW50IG9yIGtub3dsZWRnZSByZXNvdXJjZSBiZWluZyByZWZlcmVuY2VkLCBzdWl0YWJsZSBmb3IgZGlzcGxheSB0byBhIGNvbnN1bWVyLlxyXG4gICAqL1xyXG4gIGRpc3BsYXk/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUmVsYXRlZEFydGlmYWN0LmRpc3BsYXlcclxuICAgKi9cclxuICBfZGlzcGxheT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBzdHJ1Y3R1cmVkIGluZm9ybWF0aW9uIGFib3V0IGNpdGF0aW9ucyBzaG91bGQgYmUgY2FwdHVyZWQgYXMgZXh0ZW5zaW9ucy5cclxuICAgKi9cclxuICBjaXRhdGlvbj86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBSZWxhdGVkQXJ0aWZhY3QuY2l0YXRpb25cclxuICAgKi9cclxuICBfY2l0YXRpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIElmIGEgZG9jdW1lbnQgb3IgcmVzb3VyY2UgZWxlbWVudCBpcyBwcmVzZW50LCB0aGlzIGVsZW1lbnQgU0hBTEwgTk9UIGJlIHByb3ZpZGVkICh1c2UgdGhlIHVybCBvciByZWZlcmVuY2UgaW4gdGhlIEF0dGFjaG1lbnQgb3IgcmVzb3VyY2UgcmVmZXJlbmNlKS5cclxuICAgKi9cclxuICB1cmw/OiBmaGlyLkZoaXJVcml8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUmVsYXRlZEFydGlmYWN0LnVybFxyXG4gICAqL1xyXG4gIF91cmw/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkb2N1bWVudCBiZWluZyByZWZlcmVuY2VkLCByZXByZXNlbnRlZCBhcyBhbiBhdHRhY2htZW50LiBUaGlzIGlzIGV4Y2x1c2l2ZSB3aXRoIHRoZSByZXNvdXJjZSBlbGVtZW50LlxyXG4gICAqL1xyXG4gIGRvY3VtZW50PzogZmhpci5BdHRhY2htZW50QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIHR5cGUgaXMgcHJlZGVjZXNzb3IsIHRoaXMgaXMgYSByZWZlcmVuY2UgdG8gdGhlIHN1Y2NlZWRpbmcga25vd2xlZGdlIHJlc291cmNlLiBJZiB0aGUgdHlwZSBpcyBzdWNjZXNzb3IsIHRoaXMgaXMgYSByZWZlcmVuY2UgdG8gdGhlIHByaW9yIGtub3dsZWRnZSByZXNvdXJjZS5cclxuICAgKi9cclxuICByZXNvdXJjZT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZWxhdGVkIGFydGlmYWN0cyBzdWNoIGFzIGFkZGl0aW9uYWwgZG9jdW1lbnRhdGlvbiwganVzdGlmaWNhdGlvbiwgb3IgYmlibGlvZ3JhcGhpYyByZWZlcmVuY2VzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlbGF0ZWRBcnRpZmFjdCBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUmVsYXRlZEFydGlmYWN0JztcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiByZWxhdGlvbnNoaXAgdG8gdGhlIHJlbGF0ZWQgYXJ0aWZhY3QuXHJcbiAgICovXHJcbiAgcHVibGljIHR5cGU6IGZoaXIuRmhpckNvZGU8UmVsYXRlZEFydGlmYWN0VHlwZUNvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEEgYnJpZWYgZGVzY3JpcHRpb24gb2YgdGhlIGRvY3VtZW50IG9yIGtub3dsZWRnZSByZXNvdXJjZSBiZWluZyByZWZlcmVuY2VkLCBzdWl0YWJsZSBmb3IgZGlzcGxheSB0byBhIGNvbnN1bWVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkaXNwbGF5PzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHN0cnVjdHVyZWQgaW5mb3JtYXRpb24gYWJvdXQgY2l0YXRpb25zIHNob3VsZCBiZSBjYXB0dXJlZCBhcyBleHRlbnNpb25zLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjaXRhdGlvbj86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgYSBkb2N1bWVudCBvciByZXNvdXJjZSBlbGVtZW50IGlzIHByZXNlbnQsIHRoaXMgZWxlbWVudCBTSEFMTCBOT1QgYmUgcHJvdmlkZWQgKHVzZSB0aGUgdXJsIG9yIHJlZmVyZW5jZSBpbiB0aGUgQXR0YWNobWVudCBvciByZXNvdXJjZSByZWZlcmVuY2UpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1cmw/OiBmaGlyLkZoaXJVcml8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkb2N1bWVudCBiZWluZyByZWZlcmVuY2VkLCByZXByZXNlbnRlZCBhcyBhbiBhdHRhY2htZW50LiBUaGlzIGlzIGV4Y2x1c2l2ZSB3aXRoIHRoZSByZXNvdXJjZSBlbGVtZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkb2N1bWVudD86IGZoaXIuQXR0YWNobWVudHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIHR5cGUgaXMgcHJlZGVjZXNzb3IsIHRoaXMgaXMgYSByZWZlcmVuY2UgdG8gdGhlIHN1Y2NlZWRpbmcga25vd2xlZGdlIHJlc291cmNlLiBJZiB0aGUgdHlwZSBpcyBzdWNjZXNzb3IsIHRoaXMgaXMgYSByZWZlcmVuY2UgdG8gdGhlIHByaW9yIGtub3dsZWRnZSByZXNvdXJjZS5cclxuICAgKi9cclxuICBwdWJsaWMgcmVzb3VyY2U/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgUmVsYXRlZEFydGlmYWN0IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8UmVsYXRlZEFydGlmYWN0QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZTxSZWxhdGVkQXJ0aWZhY3RUeXBlQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnR5cGV9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMudHlwZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ190eXBlJ10pIHtcclxuICAgICAgaWYgKHRoaXMudHlwZSkgeyB0aGlzLnR5cGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdHlwZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZTxSZWxhdGVkQXJ0aWZhY3RUeXBlQ29kZVR5cGU+KHNvdXJjZS5fdHlwZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGlzcGxheSddKSB7IHRoaXMuZGlzcGxheSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZGlzcGxheX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGlzcGxheSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRpc3BsYXkpIHsgdGhpcy5kaXNwbGF5LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2Rpc3BsYXkhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kaXNwbGF5ID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Rpc3BsYXkgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NpdGF0aW9uJ10pIHsgdGhpcy5jaXRhdGlvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuY2l0YXRpb259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NpdGF0aW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMuY2l0YXRpb24pIHsgdGhpcy5jaXRhdGlvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jaXRhdGlvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNpdGF0aW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2NpdGF0aW9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd1cmwnXSkgeyB0aGlzLnVybCA9IG5ldyBmaGlyLkZoaXJVcmkoe3ZhbHVlOiBzb3VyY2UudXJsfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ191cmwnXSkge1xyXG4gICAgICBpZiAodGhpcy51cmwpIHsgdGhpcy51cmwuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdXJsISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudXJsID0gbmV3IGZoaXIuRmhpclVyaShzb3VyY2UuX3VybCBhcyBQYXJ0aWFsPGZoaXIuRmhpclVyaUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZG9jdW1lbnQnXSkgeyB0aGlzLmRvY3VtZW50ID0gbmV3IGZoaXIuQXR0YWNobWVudChzb3VyY2UuZG9jdW1lbnQpOyB9XHJcbiAgICBpZiAoc291cmNlWydyZXNvdXJjZSddKSB7IHRoaXMucmVzb3VyY2UgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnJlc291cmNlKTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1JlbGF0ZWRBcnRpZmFjdCcgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlNWKCd0eXBlJyxleHAsJ1JlbGF0ZWRBcnRpZmFjdFR5cGUnLFJlbGF0ZWRBcnRpZmFjdFR5cGVWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZGlzcGxheScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnY2l0YXRpb24nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3VybCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZG9jdW1lbnQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3Jlc291cmNlJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==