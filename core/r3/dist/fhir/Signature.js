// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Signature
import * as fhir from '../fhir.js';
/**
 * A digital signature along with supporting context. The signature may be electronic/cryptographic in nature, or a graphical image representing a hand-written signature, or a signature process. Different signature approaches have different utilities.
 */
export class Signature extends fhir.FhirElement {
    /**
     * Default constructor for Signature - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['type']) {
            this.type = source.type.map((x) => new fhir.Coding(x));
        }
        else {
            this.type = [];
        }
        if (source['when']) {
            this.when = new fhir.FhirInstant({ value: source.when });
        }
        else {
            this.when = null;
        }
        if (source['_when']) {
            if (this.when) {
                this.when.addExtendedProperties(source._when);
            }
            else {
                this.when = new fhir.FhirInstant(source._when);
            }
        }
        if (source['who']) {
            this.who = source.who;
        }
        else if (source['whoUri']) {
            this.who = new fhir.FhirUri({ value: source.whoUri });
        }
        else if (source['whoReference']) {
            this.who = new fhir.Reference(source.whoReference);
        }
        else {
            this.who = null;
        }
        if (source['onBehalfOf']) {
            this.onBehalfOf = source.onBehalfOf;
        }
        else if (source['onBehalfOfUri']) {
            this.onBehalfOf = new fhir.FhirUri({ value: source.onBehalfOfUri });
        }
        else if (source['onBehalfOfReference']) {
            this.onBehalfOf = new fhir.Reference(source.onBehalfOfReference);
        }
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
        if (source['blob']) {
            this.blob = new fhir.FhirBase64Binary({ value: source.blob });
        }
        if (source['_blob']) {
            if (this.blob) {
                this.blob.addExtendedProperties(source._blob);
            }
            else {
                this.blob = new fhir.FhirBase64Binary(source._blob);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Signature';
        }
        iss.push(...this.vRA('type', exp));
        iss.push(...this.vRS('when', exp));
        iss.push(...this.vRS('who', exp));
        iss.push(...this.vOS('onBehalfOf', exp));
        iss.push(...this.vOS('contentType', exp));
        iss.push(...this.vOS('blob', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Signature._fts_dataType = 'Signature';
/**
 * Internal flag to properly serialize choice-type element Signature.who[x]
 */
Signature._fts_whoIsChoice = true;
/**
 * Internal flag to properly serialize choice-type element Signature.onBehalfOf[x]
 */
Signature._fts_onBehalfOfIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnbmF0dXJlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9TaWduYXR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBZ0VuQzs7R0FFRztBQUNILE1BQU0sT0FBTyxTQUFVLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUFxQzdDOztPQUVHO0lBQ0gsWUFBWSxTQUFnQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUN0RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUMxRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDeEIsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQzFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FBRTtRQUMxQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUM7YUFBRTtpQkFDN0Q7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQXNDLENBQUMsQ0FBQzthQUFFO1NBQzFGO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FBRTthQUN4QyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDOUUsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7U0FBRTthQUNuRjtZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDekIsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FBRTthQUM3RCxJQUFJLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDbkcsSUFBSSxNQUFNLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQUU7UUFDN0csSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ2pHLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxZQUFhLENBQUMsQ0FBQzthQUFFO2lCQUNsRjtnQkFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBMEMsQ0FBQyxDQUFDO2FBQUU7U0FDbEc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNwRixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUM7YUFBRTtpQkFDN0Q7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBMkMsQ0FBQyxDQUFDO2FBQUU7U0FDcEc7SUFDSCxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxHQUFHLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsV0FBVyxDQUFBO1NBQUU7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQWhGRDs7R0FFRztBQUM2Qix1QkFBYSxHQUFVLFdBQVcsQ0FBQztBQWFuRTs7R0FFRztBQUN1QiwwQkFBZ0IsR0FBUSxJQUFJLENBQUM7QUFLdkQ7O0dBRUc7QUFDdUIsaUNBQXVCLEdBQVEsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBTaWduYXR1cmVcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFNpZ25hdHVyZVR5cGVDb2RlcywgIFNpZ25hdHVyZVR5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU2lnbmF0dXJlVHlwZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTaWduYXR1cmVUeXBlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TaWduYXR1cmVUeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFNpZ25hdHVyZSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTaWduYXR1cmVBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEV4YW1wbGVzIGluY2x1ZGUgYXR0ZXN0aW5nIHRvOiBhdXRob3JzaGlwLCBjb3JyZWN0IHRyYW5zY3JpcHRpb24sIGFuZCB3aXRuZXNzIG9mIHNwZWNpZmljIGV2ZW50LiBBbHNvIGtub3duIGFzIGEgJmFtcDtxdW90O0NvbW1pdG1lbnQgVHlwZSBJbmRpY2F0aW9uJmFtcDtxdW90Oy5cclxuICAgKi9cclxuICB0eXBlOiBmaGlyLkNvZGluZ0FyZ3NbXXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgc2hvdWxkIGFncmVlIHdpdGggdGhlIGluZm9ybWF0aW9uIGluIHRoZSBzaWduYXR1cmUuXHJcbiAgICovXHJcbiAgd2hlbjogZmhpci5GaGlySW5zdGFudHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTaWduYXR1cmUud2hlblxyXG4gICAqL1xyXG4gIF93aGVuPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGlzIHNob3VsZCBhZ3JlZSB3aXRoIHRoZSBpbmZvcm1hdGlvbiBpbiB0aGUgc2lnbmF0dXJlLlxyXG4gICAqL1xyXG4gIHdobz86IGZoaXIuRmhpclVyaXxmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBzaG91bGQgYWdyZWUgd2l0aCB0aGUgaW5mb3JtYXRpb24gaW4gdGhlIHNpZ25hdHVyZS5cclxuICAgKi9cclxuICB3aG9Vcmk/OiBmaGlyLkZoaXJVcml8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIHNob3VsZCBhZ3JlZSB3aXRoIHRoZSBpbmZvcm1hdGlvbiBpbiB0aGUgc2lnbmF0dXJlLlxyXG4gICAqL1xyXG4gIHdob1JlZmVyZW5jZT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBhcnR5IHRoYXQgY2FuJ3Qgc2lnbi4gRm9yIGV4YW1wbGUgYSBjaGlsZC5cclxuICAgKi9cclxuICBvbkJlaGFsZk9mPzogZmhpci5GaGlyVXJpfGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcGFydHkgdGhhdCBjYW4ndCBzaWduLiBGb3IgZXhhbXBsZSBhIGNoaWxkLlxyXG4gICAqL1xyXG4gIG9uQmVoYWxmT2ZVcmk/OiBmaGlyLkZoaXJVcml8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcGFydHkgdGhhdCBjYW4ndCBzaWduLiBGb3IgZXhhbXBsZSBhIGNoaWxkLlxyXG4gICAqL1xyXG4gIG9uQmVoYWxmT2ZSZWZlcmVuY2U/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgbWltZSB0eXBlIHRoYXQgaW5kaWNhdGVzIHRoZSB0ZWNobmljYWwgZm9ybWF0IG9mIHRoZSBzaWduYXR1cmUuIEltcG9ydGFudCBtaW1lIHR5cGVzIGFyZSBhcHBsaWNhdGlvbi9zaWduYXR1cmUreG1sIGZvciBYIE1MIERpZ1NpZywgYXBwbGljYXRpb24vand0IGZvciBKV1QsIGFuZCBpbWFnZS8qIGZvciBhIGdyYXBoaWNhbCBpbWFnZSBvZiBhIHNpZ25hdHVyZSwgZXRjLlxyXG4gICAqL1xyXG4gIGNvbnRlbnRUeXBlPzogZmhpci5GaGlyQ29kZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTaWduYXR1cmUuY29udGVudFR5cGVcclxuICAgKi9cclxuICBfY29udGVudFR5cGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFdoZXJlIHRoZSBzaWduYXR1cmUgdHlwZSBpcyBhbiBYTUwgRGlnU2lnLCB0aGUgc2lnbmVkIGNvbnRlbnQgaXMgYSBGSElSIFJlc291cmNlKHMpLCB0aGUgc2lnbmF0dXJlIGlzIG9mIHRoZSBYTUwgZm9ybSBvZiB0aGUgUmVzb3VyY2UocykgdXNpbmcgIFhNTC1TaWduYXR1cmUgKFhNTERJRykgXCJEZXRhY2hlZCBTaWduYXR1cmVcIiBmb3JtLlxyXG4gICAqL1xyXG4gIGJsb2I/OiBmaGlyLkZoaXJCYXNlNjRCaW5hcnl8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU2lnbmF0dXJlLmJsb2JcclxuICAgKi9cclxuICBfYmxvYj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGRpZ2l0YWwgc2lnbmF0dXJlIGFsb25nIHdpdGggc3VwcG9ydGluZyBjb250ZXh0LiBUaGUgc2lnbmF0dXJlIG1heSBiZSBlbGVjdHJvbmljL2NyeXB0b2dyYXBoaWMgaW4gbmF0dXJlLCBvciBhIGdyYXBoaWNhbCBpbWFnZSByZXByZXNlbnRpbmcgYSBoYW5kLXdyaXR0ZW4gc2lnbmF0dXJlLCBvciBhIHNpZ25hdHVyZSBwcm9jZXNzLiBEaWZmZXJlbnQgc2lnbmF0dXJlIGFwcHJvYWNoZXMgaGF2ZSBkaWZmZXJlbnQgdXRpbGl0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZSBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnU2lnbmF0dXJlJztcclxuICAvKipcclxuICAgKiBFeGFtcGxlcyBpbmNsdWRlIGF0dGVzdGluZyB0bzogYXV0aG9yc2hpcCwgY29ycmVjdCB0cmFuc2NyaXB0aW9uLCBhbmQgd2l0bmVzcyBvZiBzcGVjaWZpYyBldmVudC4gQWxzbyBrbm93biBhcyBhICZhbXA7cXVvdDtDb21taXRtZW50IFR5cGUgSW5kaWNhdGlvbiZhbXA7cXVvdDsuXHJcbiAgICovXHJcbiAgcHVibGljIHR5cGU6IGZoaXIuQ29kaW5nW107XHJcbiAgLyoqXHJcbiAgICogVGhpcyBzaG91bGQgYWdyZWUgd2l0aCB0aGUgaW5mb3JtYXRpb24gaW4gdGhlIHNpZ25hdHVyZS5cclxuICAgKi9cclxuICBwdWJsaWMgd2hlbjogZmhpci5GaGlySW5zdGFudHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgc2hvdWxkIGFncmVlIHdpdGggdGhlIGluZm9ybWF0aW9uIGluIHRoZSBzaWduYXR1cmUuXHJcbiAgICovXHJcbiAgcHVibGljIHdobzogKGZoaXIuRmhpclVyaXxmaGlyLlJlZmVyZW5jZSl8bnVsbDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IFNpZ25hdHVyZS53aG9beF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfd2hvSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBhcnR5IHRoYXQgY2FuJ3Qgc2lnbi4gRm9yIGV4YW1wbGUgYSBjaGlsZC5cclxuICAgKi9cclxuICBwdWJsaWMgb25CZWhhbGZPZj86IChmaGlyLkZoaXJVcml8Zmhpci5SZWZlcmVuY2UpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IFNpZ25hdHVyZS5vbkJlaGFsZk9mW3hdXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBfZnRzX29uQmVoYWxmT2ZJc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBBIG1pbWUgdHlwZSB0aGF0IGluZGljYXRlcyB0aGUgdGVjaG5pY2FsIGZvcm1hdCBvZiB0aGUgc2lnbmF0dXJlLiBJbXBvcnRhbnQgbWltZSB0eXBlcyBhcmUgYXBwbGljYXRpb24vc2lnbmF0dXJlK3htbCBmb3IgWCBNTCBEaWdTaWcsIGFwcGxpY2F0aW9uL2p3dCBmb3IgSldULCBhbmQgaW1hZ2UvKiBmb3IgYSBncmFwaGljYWwgaW1hZ2Ugb2YgYSBzaWduYXR1cmUsIGV0Yy5cclxuICAgKi9cclxuICBwdWJsaWMgY29udGVudFR5cGU/OiBmaGlyLkZoaXJDb2RlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVyZSB0aGUgc2lnbmF0dXJlIHR5cGUgaXMgYW4gWE1MIERpZ1NpZywgdGhlIHNpZ25lZCBjb250ZW50IGlzIGEgRkhJUiBSZXNvdXJjZShzKSwgdGhlIHNpZ25hdHVyZSBpcyBvZiB0aGUgWE1MIGZvcm0gb2YgdGhlIFJlc291cmNlKHMpIHVzaW5nICBYTUwtU2lnbmF0dXJlIChYTUxESUcpIFwiRGV0YWNoZWQgU2lnbmF0dXJlXCIgZm9ybS5cclxuICAgKi9cclxuICBwdWJsaWMgYmxvYj86IGZoaXIuRmhpckJhc2U2NEJpbmFyeXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgU2lnbmF0dXJlIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8U2lnbmF0dXJlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBzb3VyY2UudHlwZS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGluZyh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnR5cGUgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnd2hlbiddKSB7IHRoaXMud2hlbiA9IG5ldyBmaGlyLkZoaXJJbnN0YW50KHt2YWx1ZTogc291cmNlLndoZW59KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMud2hlbiA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ193aGVuJ10pIHtcclxuICAgICAgaWYgKHRoaXMud2hlbikgeyB0aGlzLndoZW4uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fd2hlbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLndoZW4gPSBuZXcgZmhpci5GaGlySW5zdGFudChzb3VyY2UuX3doZW4gYXMgUGFydGlhbDxmaGlyLkZoaXJJbnN0YW50QXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd3aG8nXSkgeyB0aGlzLndobyA9IHNvdXJjZS53aG87IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnd2hvVXJpJ10pIHsgdGhpcy53aG8gPSBuZXcgZmhpci5GaGlyVXJpKHt2YWx1ZTogc291cmNlLndob1VyaX0pOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3dob1JlZmVyZW5jZSddKSB7IHRoaXMud2hvID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS53aG9SZWZlcmVuY2UpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy53aG8gPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydvbkJlaGFsZk9mJ10pIHsgdGhpcy5vbkJlaGFsZk9mID0gc291cmNlLm9uQmVoYWxmT2Y7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnb25CZWhhbGZPZlVyaSddKSB7IHRoaXMub25CZWhhbGZPZiA9IG5ldyBmaGlyLkZoaXJVcmkoe3ZhbHVlOiBzb3VyY2Uub25CZWhhbGZPZlVyaX0pOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ29uQmVoYWxmT2ZSZWZlcmVuY2UnXSkgeyB0aGlzLm9uQmVoYWxmT2YgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLm9uQmVoYWxmT2ZSZWZlcmVuY2UpOyB9XHJcbiAgICBpZiAoc291cmNlWydjb250ZW50VHlwZSddKSB7IHRoaXMuY29udGVudFR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZSh7dmFsdWU6IHNvdXJjZS5jb250ZW50VHlwZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfY29udGVudFR5cGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5jb250ZW50VHlwZSkgeyB0aGlzLmNvbnRlbnRUeXBlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NvbnRlbnRUeXBlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY29udGVudFR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZShzb3VyY2UuX2NvbnRlbnRUeXBlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnYmxvYiddKSB7IHRoaXMuYmxvYiA9IG5ldyBmaGlyLkZoaXJCYXNlNjRCaW5hcnkoe3ZhbHVlOiBzb3VyY2UuYmxvYn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfYmxvYiddKSB7XHJcbiAgICAgIGlmICh0aGlzLmJsb2IpIHsgdGhpcy5ibG9iLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2Jsb2IhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5ibG9iID0gbmV3IGZoaXIuRmhpckJhc2U2NEJpbmFyeShzb3VyY2UuX2Jsb2IgYXMgUGFydGlhbDxmaGlyLkZoaXJCYXNlNjRCaW5hcnlBcmdzPik7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdTaWduYXR1cmUnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJBKCd0eXBlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCd3aGVuJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCd3aG8nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ29uQmVoYWxmT2YnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2NvbnRlbnRUeXBlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdibG9iJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==