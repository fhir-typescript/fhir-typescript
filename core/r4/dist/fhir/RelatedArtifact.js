// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: RelatedArtifact
import * as fhir from '../fhir.js';
// @ts-ignore
import { RelatedArtifactTypeCodes } from '../fhirValueSets/RelatedArtifactTypeCodes.js';
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
     * Required-bound Value Set for type (RelatedArtifact.type)
     */
    static get typeRequiredCodes() {
        return RelatedArtifactTypeCodes;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'RelatedArtifact';
        }
        if (!this['type']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property type fhir: RelatedArtifact.type:code', expression: [expression] });
        }
        if (this['type'] && (!Object.values(RelatedArtifactTypeCodes).includes(this.type.value))) {
            issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'type (RelatedArtifact.type) of type code is missing code for Required binding to: RelatedArtifactType', expression: [expression] });
        }
        if (this["type"]) {
            issues.push(...this.type.doModelValidation(expression + '.type'));
        }
        if (this["label"]) {
            issues.push(...this.label.doModelValidation(expression + '.label'));
        }
        if (this["display"]) {
            issues.push(...this.display.doModelValidation(expression + '.display'));
        }
        if (this["citation"]) {
            issues.push(...this.citation.doModelValidation(expression + '.citation'));
        }
        if (this["url"]) {
            issues.push(...this.url.doModelValidation(expression + '.url'));
        }
        if (this["document"]) {
            issues.push(...this.document.doModelValidation(expression + '.document'));
        }
        if (this["resource"]) {
            issues.push(...this.resource.doModelValidation(expression + '.resource'));
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
RelatedArtifact._fts_dataType = 'RelatedArtifact';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVsYXRlZEFydGlmYWN0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9SZWxhdGVkQXJ0aWZhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsd0JBQXdCLEVBQWdDLE1BQU0sOENBQThDLENBQUM7QUEyRHRIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGVBQWdCLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUFpQ25EOztPQUVHO0lBQ0gsWUFBWSxTQUFzQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUM1RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQThCLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDcEc7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzFCLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsQ0FBQzthQUFFO2lCQUM3RDtnQkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBOEIsTUFBTSxDQUFDLEtBQStCLENBQUMsQ0FBQzthQUFFO1NBQzdHO1FBQ0QsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ2pGLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxNQUFPLENBQUMsQ0FBQzthQUFFO2lCQUNoRTtnQkFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBc0MsQ0FBQyxDQUFDO2FBQUU7U0FDMUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDdkYsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUFFLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFFBQVMsQ0FBQyxDQUFDO2FBQUU7aUJBQ3RFO2dCQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUF3QyxDQUFDLENBQUM7YUFBRTtTQUM5RjtRQUNELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7U0FBRTtRQUM1RixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsU0FBVSxDQUFDLENBQUM7YUFBRTtpQkFDekU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQTJDLENBQUMsQ0FBQzthQUFFO1NBQ3BHO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3hFLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFLLENBQUMsQ0FBQzthQUFFO2lCQUMxRDtnQkFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBaUMsQ0FBQyxDQUFDO2FBQUU7U0FDaEY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUFFO1FBQ2pGLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7U0FBRTtRQUM3RixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsU0FBVSxDQUFDLENBQUM7YUFBRTtpQkFDekU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFNBQTRDLENBQUMsQ0FBQzthQUFFO1NBQ3RHO0lBQ0gsQ0FBQztJQUNEOztPQUVHO0lBQ0ksTUFBTSxLQUFLLGlCQUFpQjtRQUNqQyxPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLGFBQW9CLEVBQUU7UUFDdEQsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRSxJQUFJLFVBQVUsS0FBSyxFQUFFLEVBQUU7WUFBRSxVQUFVLEdBQUcsaUJBQWlCLENBQUE7U0FBRTtRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGdFQUFnRSxFQUFFLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMvSjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBWSxDQUFDLENBQUMsRUFBRTtZQUMvRixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSx1R0FBdUcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDMU07UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDdEYsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEdBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3pGLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FBRTtRQUMvRixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDbEcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUFFO1FBQ25GLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FBRTtRQUNsRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDbEcsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUFoR0Q7O0dBRUc7QUFDNkIsNkJBQWEsR0FBVSxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogUmVsYXRlZEFydGlmYWN0XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBSZWxhdGVkQXJ0aWZhY3RUeXBlQ29kaW5ncywgUmVsYXRlZEFydGlmYWN0VHlwZUNvZGluZ1R5cGUsfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1JlbGF0ZWRBcnRpZmFjdFR5cGVDb2RpbmdzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBSZWxhdGVkQXJ0aWZhY3RUeXBlQ29kZXMsICBSZWxhdGVkQXJ0aWZhY3RUeXBlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1JlbGF0ZWRBcnRpZmFjdFR5cGVDb2Rlcy5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBSZWxhdGVkQXJ0aWZhY3QgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVsYXRlZEFydGlmYWN0QXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiByZWxhdGlvbnNoaXAgdG8gdGhlIHJlbGF0ZWQgYXJ0aWZhY3QuXHJcbiAgICovXHJcbiAgdHlwZTogZmhpci5GaGlyQ29kZTxSZWxhdGVkQXJ0aWZhY3RUeXBlQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFJlbGF0ZWRBcnRpZmFjdC50eXBlXHJcbiAgICovXHJcbiAgX3R5cGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEEgc2hvcnQgbGFiZWwgdGhhdCBjYW4gYmUgdXNlZCB0byByZWZlcmVuY2UgdGhlIGNpdGF0aW9uIGZyb20gZWxzZXdoZXJlIGluIHRoZSBjb250YWluaW5nIGFydGlmYWN0LCBzdWNoIGFzIGEgZm9vdG5vdGUgaW5kZXguXHJcbiAgICovXHJcbiAgbGFiZWw/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUmVsYXRlZEFydGlmYWN0LmxhYmVsXHJcbiAgICovXHJcbiAgX2xhYmVsPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIGJyaWVmIGRlc2NyaXB0aW9uIG9mIHRoZSBkb2N1bWVudCBvciBrbm93bGVkZ2UgcmVzb3VyY2UgYmVpbmcgcmVmZXJlbmNlZCwgc3VpdGFibGUgZm9yIGRpc3BsYXkgdG8gYSBjb25zdW1lci5cclxuICAgKi9cclxuICBkaXNwbGF5PzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFJlbGF0ZWRBcnRpZmFjdC5kaXNwbGF5XHJcbiAgICovXHJcbiAgX2Rpc3BsYXk/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgc3RydWN0dXJlZCBpbmZvcm1hdGlvbiBhYm91dCBjaXRhdGlvbnMgc2hvdWxkIGJlIGNhcHR1cmVkIGFzIGV4dGVuc2lvbnMuXHJcbiAgICovXHJcbiAgY2l0YXRpb24/OiBmaGlyLkZoaXJNYXJrZG93bnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBSZWxhdGVkQXJ0aWZhY3QuY2l0YXRpb25cclxuICAgKi9cclxuICBfY2l0YXRpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIElmIGEgZG9jdW1lbnQgb3IgcmVzb3VyY2UgZWxlbWVudCBpcyBwcmVzZW50LCB0aGlzIGVsZW1lbnQgU0hBTEwgTk9UIGJlIHByb3ZpZGVkICh1c2UgdGhlIHVybCBvciByZWZlcmVuY2UgaW4gdGhlIEF0dGFjaG1lbnQgb3IgcmVzb3VyY2UgcmVmZXJlbmNlKS5cclxuICAgKi9cclxuICB1cmw/OiBmaGlyLkZoaXJVcmx8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUmVsYXRlZEFydGlmYWN0LnVybFxyXG4gICAqL1xyXG4gIF91cmw/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkb2N1bWVudCBiZWluZyByZWZlcmVuY2VkLCByZXByZXNlbnRlZCBhcyBhbiBhdHRhY2htZW50LiBUaGlzIGlzIGV4Y2x1c2l2ZSB3aXRoIHRoZSByZXNvdXJjZSBlbGVtZW50LlxyXG4gICAqL1xyXG4gIGRvY3VtZW50PzogZmhpci5BdHRhY2htZW50QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIHR5cGUgaXMgcHJlZGVjZXNzb3IsIHRoaXMgaXMgYSByZWZlcmVuY2UgdG8gdGhlIHN1Y2NlZWRpbmcga25vd2xlZGdlIHJlc291cmNlLiBJZiB0aGUgdHlwZSBpcyBzdWNjZXNzb3IsIHRoaXMgaXMgYSByZWZlcmVuY2UgdG8gdGhlIHByaW9yIGtub3dsZWRnZSByZXNvdXJjZS5cclxuICAgKi9cclxuICByZXNvdXJjZT86IGZoaXIuRmhpckNhbm9uaWNhbHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBSZWxhdGVkQXJ0aWZhY3QucmVzb3VyY2VcclxuICAgKi9cclxuICBfcmVzb3VyY2U/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogUmVsYXRlZCBhcnRpZmFjdHMgc3VjaCBhcyBhZGRpdGlvbmFsIGRvY3VtZW50YXRpb24sIGp1c3RpZmljYXRpb24sIG9yIGJpYmxpb2dyYXBoaWMgcmVmZXJlbmNlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWxhdGVkQXJ0aWZhY3QgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1JlbGF0ZWRBcnRpZmFjdCc7XHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgb2YgcmVsYXRpb25zaGlwIHRvIHRoZSByZWxhdGVkIGFydGlmYWN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0eXBlOiBmaGlyLkZoaXJDb2RlPFJlbGF0ZWRBcnRpZmFjdFR5cGVDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBBIHNob3J0IGxhYmVsIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVmZXJlbmNlIHRoZSBjaXRhdGlvbiBmcm9tIGVsc2V3aGVyZSBpbiB0aGUgY29udGFpbmluZyBhcnRpZmFjdCwgc3VjaCBhcyBhIGZvb3Rub3RlIGluZGV4LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsYWJlbD86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBicmllZiBkZXNjcmlwdGlvbiBvZiB0aGUgZG9jdW1lbnQgb3Iga25vd2xlZGdlIHJlc291cmNlIGJlaW5nIHJlZmVyZW5jZWQsIHN1aXRhYmxlIGZvciBkaXNwbGF5IHRvIGEgY29uc3VtZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGRpc3BsYXk/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgc3RydWN0dXJlZCBpbmZvcm1hdGlvbiBhYm91dCBjaXRhdGlvbnMgc2hvdWxkIGJlIGNhcHR1cmVkIGFzIGV4dGVuc2lvbnMuXHJcbiAgICovXHJcbiAgcHVibGljIGNpdGF0aW9uPzogZmhpci5GaGlyTWFya2Rvd258dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIGEgZG9jdW1lbnQgb3IgcmVzb3VyY2UgZWxlbWVudCBpcyBwcmVzZW50LCB0aGlzIGVsZW1lbnQgU0hBTEwgTk9UIGJlIHByb3ZpZGVkICh1c2UgdGhlIHVybCBvciByZWZlcmVuY2UgaW4gdGhlIEF0dGFjaG1lbnQgb3IgcmVzb3VyY2UgcmVmZXJlbmNlKS5cclxuICAgKi9cclxuICBwdWJsaWMgdXJsPzogZmhpci5GaGlyVXJsfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZG9jdW1lbnQgYmVpbmcgcmVmZXJlbmNlZCwgcmVwcmVzZW50ZWQgYXMgYW4gYXR0YWNobWVudC4gVGhpcyBpcyBleGNsdXNpdmUgd2l0aCB0aGUgcmVzb3VyY2UgZWxlbWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgZG9jdW1lbnQ/OiBmaGlyLkF0dGFjaG1lbnR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSB0eXBlIGlzIHByZWRlY2Vzc29yLCB0aGlzIGlzIGEgcmVmZXJlbmNlIHRvIHRoZSBzdWNjZWVkaW5nIGtub3dsZWRnZSByZXNvdXJjZS4gSWYgdGhlIHR5cGUgaXMgc3VjY2Vzc29yLCB0aGlzIGlzIGEgcmVmZXJlbmNlIHRvIHRoZSBwcmlvciBrbm93bGVkZ2UgcmVzb3VyY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHJlc291cmNlPzogZmhpci5GaGlyQ2Fub25pY2FsfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBSZWxhdGVkQXJ0aWZhY3QgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxSZWxhdGVkQXJ0aWZhY3RBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsndHlwZSddKSB7IHRoaXMudHlwZSA9IG5ldyBmaGlyLkZoaXJDb2RlPFJlbGF0ZWRBcnRpZmFjdFR5cGVDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2UudHlwZX0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50eXBlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3R5cGUnXSkge1xyXG4gICAgICBpZiAodGhpcy50eXBlKSB7IHRoaXMudHlwZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl90eXBlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudHlwZSA9IG5ldyBmaGlyLkZoaXJDb2RlPFJlbGF0ZWRBcnRpZmFjdFR5cGVDb2RlVHlwZT4oc291cmNlLl90eXBlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydsYWJlbCddKSB7IHRoaXMubGFiZWwgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmxhYmVsfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19sYWJlbCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmxhYmVsKSB7IHRoaXMubGFiZWwuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fbGFiZWwhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5sYWJlbCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9sYWJlbCBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGlzcGxheSddKSB7IHRoaXMuZGlzcGxheSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZGlzcGxheX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGlzcGxheSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRpc3BsYXkpIHsgdGhpcy5kaXNwbGF5LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2Rpc3BsYXkhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kaXNwbGF5ID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Rpc3BsYXkgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NpdGF0aW9uJ10pIHsgdGhpcy5jaXRhdGlvbiA9IG5ldyBmaGlyLkZoaXJNYXJrZG93bih7dmFsdWU6IHNvdXJjZS5jaXRhdGlvbn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfY2l0YXRpb24nXSkge1xyXG4gICAgICBpZiAodGhpcy5jaXRhdGlvbikgeyB0aGlzLmNpdGF0aW9uLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NpdGF0aW9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY2l0YXRpb24gPSBuZXcgZmhpci5GaGlyTWFya2Rvd24oc291cmNlLl9jaXRhdGlvbiBhcyBQYXJ0aWFsPGZoaXIuRmhpck1hcmtkb3duQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd1cmwnXSkgeyB0aGlzLnVybCA9IG5ldyBmaGlyLkZoaXJVcmwoe3ZhbHVlOiBzb3VyY2UudXJsfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ191cmwnXSkge1xyXG4gICAgICBpZiAodGhpcy51cmwpIHsgdGhpcy51cmwuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdXJsISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudXJsID0gbmV3IGZoaXIuRmhpclVybChzb3VyY2UuX3VybCBhcyBQYXJ0aWFsPGZoaXIuRmhpclVybEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZG9jdW1lbnQnXSkgeyB0aGlzLmRvY3VtZW50ID0gbmV3IGZoaXIuQXR0YWNobWVudChzb3VyY2UuZG9jdW1lbnQpOyB9XHJcbiAgICBpZiAoc291cmNlWydyZXNvdXJjZSddKSB7IHRoaXMucmVzb3VyY2UgPSBuZXcgZmhpci5GaGlyQ2Fub25pY2FsKHt2YWx1ZTogc291cmNlLnJlc291cmNlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19yZXNvdXJjZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnJlc291cmNlKSB7IHRoaXMucmVzb3VyY2UuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fcmVzb3VyY2UhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5yZXNvdXJjZSA9IG5ldyBmaGlyLkZoaXJDYW5vbmljYWwoc291cmNlLl9yZXNvdXJjZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNhbm9uaWNhbEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBSZXF1aXJlZC1ib3VuZCBWYWx1ZSBTZXQgZm9yIHR5cGUgKFJlbGF0ZWRBcnRpZmFjdC50eXBlKVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHR5cGVSZXF1aXJlZENvZGVzKCkge1xyXG4gICAgcmV0dXJuIFJlbGF0ZWRBcnRpZmFjdFR5cGVDb2RlcztcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb246c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24pO1xyXG4gICAgaWYgKGV4cHJlc3Npb24gPT09ICcnKSB7IGV4cHJlc3Npb24gPSAnUmVsYXRlZEFydGlmYWN0JyB9XHJcbiAgICBpZiAoIXRoaXNbJ3R5cGUnXSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAncmVxdWlyZWQnLCBkaWFnbm9zdGljczogJ01pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgdHlwZSBmaGlyOiBSZWxhdGVkQXJ0aWZhY3QudHlwZTpjb2RlJywgZXhwcmVzc2lvbjogW2V4cHJlc3Npb25dIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXNbJ3R5cGUnXSAmJiAoIU9iamVjdC52YWx1ZXMoUmVsYXRlZEFydGlmYWN0VHlwZUNvZGVzKS5pbmNsdWRlcyh0aGlzLnR5cGUudmFsdWUgYXMgYW55KSkpIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ2NvZGUtaW52YWxpZCcsIGRpYWdub3N0aWNzOiAndHlwZSAoUmVsYXRlZEFydGlmYWN0LnR5cGUpIG9mIHR5cGUgY29kZSBpcyBtaXNzaW5nIGNvZGUgZm9yIFJlcXVpcmVkIGJpbmRpbmcgdG86IFJlbGF0ZWRBcnRpZmFjdFR5cGUnLCBleHByZXNzaW9uOiBbZXhwcmVzc2lvbl0gfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1tcInR5cGVcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy50eXBlLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy50eXBlJykpOyB9XHJcbiAgICBpZiAodGhpc1tcImxhYmVsXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMubGFiZWwuZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbisnLmxhYmVsJykpOyB9XHJcbiAgICBpZiAodGhpc1tcImRpc3BsYXlcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5kaXNwbGF5LmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy5kaXNwbGF5JykpOyB9XHJcbiAgICBpZiAodGhpc1tcImNpdGF0aW9uXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuY2l0YXRpb24uZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbisnLmNpdGF0aW9uJykpOyB9XHJcbiAgICBpZiAodGhpc1tcInVybFwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLnVybC5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKycudXJsJykpOyB9XHJcbiAgICBpZiAodGhpc1tcImRvY3VtZW50XCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuZG9jdW1lbnQuZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbisnLmRvY3VtZW50JykpOyB9XHJcbiAgICBpZiAodGhpc1tcInJlc291cmNlXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMucmVzb3VyY2UuZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbisnLnJlc291cmNlJykpOyB9XHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=