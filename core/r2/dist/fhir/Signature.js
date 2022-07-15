// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Signature
import * as fhir from '../fhir.js';
/**
 * A digital signature along with supporting context. The signature may be electronic/cryptographic in nature, or a graphical image representing a hand-written signature, or a signature process. Different Signature approaches have different utilities.
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
        if (source['contentType']) {
            this.contentType = new fhir.FhirCode({ value: source.contentType });
        }
        else {
            this.contentType = null;
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
        else {
            this.blob = null;
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
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Signature';
        }
        this.vRA('type', exp);
        this.vRS('when', exp);
        this.vRS('who', exp);
        this.vRS('contentType', exp);
        this.vRS('blob', exp);
        return issues;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnbmF0dXJlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9TaWduYXR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBZ0RuQzs7R0FFRztBQUNILE1BQU0sT0FBTyxTQUFVLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUE2QjdDOztPQUVHO0lBQ0gsWUFBWSxTQUFnQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUN0RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUMxRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDeEIsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQzFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FBRTtRQUMxQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUM7YUFBRTtpQkFDN0Q7Z0JBQUUsSUFBSSxDQUFDLElBQUks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USxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IFNpZ25hdHVyZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTaWduYXR1cmUgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmF0dXJlQXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBBbiBpbmRpY2F0aW9uIG9mIHRoZSByZWFzb24gdGhhdCB0aGUgZW50aXR5IHNpZ25lZCB0aGlzIGRvY3VtZW50LiBUaGlzIG1heSBiZSBleHBsaWNpdGx5IGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIHNpZ25hdHVyZSBpbmZvcm1hdGlvbiBhbmQgY2FuIGJlIHVzZWQgd2hlbiBkZXRlcm1pbmluZyBhY2NvdW50YWJpbGl0eSBmb3IgdmFyaW91cyBhY3Rpb25zIGNvbmNlcm5pbmcgdGhlIGRvY3VtZW50LlxyXG4gICAqL1xyXG4gIHR5cGU6IGZoaXIuQ29kaW5nQXJnc1tdfG51bGw7XHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGUgZGlnaXRhbCBzaWduYXR1cmUgd2FzIHNpZ25lZC5cclxuICAgKi9cclxuICB3aGVuOiBmaGlyLkZoaXJJbnN0YW50fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFNpZ25hdHVyZS53aGVuXHJcbiAgICovXHJcbiAgX3doZW4/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIGFuIGFwcGxpY2F0aW9uLXVzYWJsZSBkZXNjcmlwdGlvbiBvZiB0aGUgcGVyc29uIHRoYXQgc2lnbmVkIHRoZSBjZXJ0aWZpY2F0ZSAoZS5nLiB0aGUgc2lnbmF0dXJlIHVzZWQgdGhlaXIgcHJpdmF0ZSBrZXkpLlxyXG4gICAqL1xyXG4gIHdobz86IGZoaXIuRmhpclVyaXxmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gYW4gYXBwbGljYXRpb24tdXNhYmxlIGRlc2NyaXB0aW9uIG9mIHRoZSBwZXJzb24gdGhhdCBzaWduZWQgdGhlIGNlcnRpZmljYXRlIChlLmcuIHRoZSBzaWduYXR1cmUgdXNlZCB0aGVpciBwcml2YXRlIGtleSkuXHJcbiAgICovXHJcbiAgd2hvVXJpPzogZmhpci5GaGlyVXJpfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gYW4gYXBwbGljYXRpb24tdXNhYmxlIGRlc2NyaXB0aW9uIG9mIHRoZSBwZXJzb24gdGhhdCBzaWduZWQgdGhlIGNlcnRpZmljYXRlIChlLmcuIHRoZSBzaWduYXR1cmUgdXNlZCB0aGVpciBwcml2YXRlIGtleSkuXHJcbiAgICovXHJcbiAgd2hvUmVmZXJlbmNlPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIG1pbWUgdHlwZSB0aGF0IGluZGljYXRlcyB0aGUgdGVjaG5pY2FsIGZvcm1hdCBvZiB0aGUgc2lnbmF0dXJlLiBJbXBvcnRhbnQgbWltZSB0eXBlcyBhcmUgYXBwbGljYXRpb24vc2lnbmF0dXJlK3htbCBmb3IgWCBNTCBEaWdTaWcsIGFwcGxpY2F0aW9uL2p3dCBmb3IgSldULCBhbmQgaW1hZ2UvKiBmb3IgYSBncmFwaGljYWwgaW1hZ2Ugb2YgYSBzaWduYXR1cmUuXHJcbiAgICovXHJcbiAgY29udGVudFR5cGU6IGZoaXIuRmhpckNvZGV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU2lnbmF0dXJlLmNvbnRlbnRUeXBlXHJcbiAgICovXHJcbiAgX2NvbnRlbnRUeXBlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgYmFzZTY0IGVuY29kaW5nIG9mIHRoZSBTaWduYXR1cmUgY29udGVudC5cclxuICAgKi9cclxuICBibG9iOiBmaGlyLkZoaXJCYXNlNjRCaW5hcnl8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU2lnbmF0dXJlLmJsb2JcclxuICAgKi9cclxuICBfYmxvYj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGRpZ2l0YWwgc2lnbmF0dXJlIGFsb25nIHdpdGggc3VwcG9ydGluZyBjb250ZXh0LiBUaGUgc2lnbmF0dXJlIG1heSBiZSBlbGVjdHJvbmljL2NyeXB0b2dyYXBoaWMgaW4gbmF0dXJlLCBvciBhIGdyYXBoaWNhbCBpbWFnZSByZXByZXNlbnRpbmcgYSBoYW5kLXdyaXR0ZW4gc2lnbmF0dXJlLCBvciBhIHNpZ25hdHVyZSBwcm9jZXNzLiBEaWZmZXJlbnQgU2lnbmF0dXJlIGFwcHJvYWNoZXMgaGF2ZSBkaWZmZXJlbnQgdXRpbGl0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZSBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnU2lnbmF0dXJlJztcclxuICAvKipcclxuICAgKiBBbiBpbmRpY2F0aW9uIG9mIHRoZSByZWFzb24gdGhhdCB0aGUgZW50aXR5IHNpZ25lZCB0aGlzIGRvY3VtZW50LiBUaGlzIG1heSBiZSBleHBsaWNpdGx5IGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIHNpZ25hdHVyZSBpbmZvcm1hdGlvbiBhbmQgY2FuIGJlIHVzZWQgd2hlbiBkZXRlcm1pbmluZyBhY2NvdW50YWJpbGl0eSBmb3IgdmFyaW91cyBhY3Rpb25zIGNvbmNlcm5pbmcgdGhlIGRvY3VtZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0eXBlOiBmaGlyLkNvZGluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIFdoZW4gdGhlIGRpZ2l0YWwgc2lnbmF0dXJlIHdhcyBzaWduZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHdoZW46IGZoaXIuRmhpckluc3RhbnR8bnVsbDtcclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byBhbiBhcHBsaWNhdGlvbi11c2FibGUgZGVzY3JpcHRpb24gb2YgdGhlIHBlcnNvbiB0aGF0IHNpZ25lZCB0aGUgY2VydGlmaWNhdGUgKGUuZy4gdGhlIHNpZ25hdHVyZSB1c2VkIHRoZWlyIHByaXZhdGUga2V5KS5cclxuICAgKi9cclxuICBwdWJsaWMgd2hvOiAoZmhpci5GaGlyVXJpfGZoaXIuUmVmZXJlbmNlKXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIGZsYWcgdG8gcHJvcGVybHkgc2VyaWFsaXplIGNob2ljZS10eXBlIGVsZW1lbnQgU2lnbmF0dXJlLndob1t4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c193aG9Jc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBBIG1pbWUgdHlwZSB0aGF0IGluZGljYXRlcyB0aGUgdGVjaG5pY2FsIGZvcm1hdCBvZiB0aGUgc2lnbmF0dXJlLiBJbXBvcnRhbnQgbWltZSB0eXBlcyBhcmUgYXBwbGljYXRpb24vc2lnbmF0dXJlK3htbCBmb3IgWCBNTCBEaWdTaWcsIGFwcGxpY2F0aW9uL2p3dCBmb3IgSldULCBhbmQgaW1hZ2UvKiBmb3IgYSBncmFwaGljYWwgaW1hZ2Ugb2YgYSBzaWduYXR1cmUuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnRlbnRUeXBlOiBmaGlyLkZoaXJDb2RlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGJhc2U2NCBlbmNvZGluZyBvZiB0aGUgU2lnbmF0dXJlIGNvbnRlbnQuXHJcbiAgICovXHJcbiAgcHVibGljIGJsb2I6IGZoaXIuRmhpckJhc2U2NEJpbmFyeXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFNpZ25hdHVyZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFNpZ25hdHVyZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyd0eXBlJ10pIHsgdGhpcy50eXBlID0gc291cmNlLnR5cGUubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RpbmcoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50eXBlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3doZW4nXSkgeyB0aGlzLndoZW4gPSBuZXcgZmhpci5GaGlySW5zdGFudCh7dmFsdWU6IHNvdXJjZS53aGVufSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLndoZW4gPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfd2hlbiddKSB7XHJcbiAgICAgIGlmICh0aGlzLndoZW4pIHsgdGhpcy53aGVuLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3doZW4hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy53aGVuID0gbmV3IGZoaXIuRmhpckluc3RhbnQoc291cmNlLl93aGVuIGFzIFBhcnRpYWw8Zmhpci5GaGlySW5zdGFudEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnd2hvJ10pIHsgdGhpcy53aG8gPSBzb3VyY2Uud2hvOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3dob1VyaSddKSB7IHRoaXMud2hvID0gbmV3IGZoaXIuRmhpclVyaSh7dmFsdWU6IHNvdXJjZS53aG9Vcml9KTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWyd3aG9SZWZlcmVuY2UnXSkgeyB0aGlzLndobyA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uud2hvUmVmZXJlbmNlKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMud2hvID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY29udGVudFR5cGUnXSkgeyB0aGlzLmNvbnRlbnRUeXBlID0gbmV3IGZoaXIuRmhpckNvZGUoe3ZhbHVlOiBzb3VyY2UuY29udGVudFR5cGV9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29udGVudFR5cGUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfY29udGVudFR5cGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5jb250ZW50VHlwZSkgeyB0aGlzLmNvbnRlbnRUeXBlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NvbnRlbnRUeXBlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY29udGVudFR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZShzb3VyY2UuX2NvbnRlbnRUeXBlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnYmxvYiddKSB7IHRoaXMuYmxvYiA9IG5ldyBmaGlyLkZoaXJCYXNlNjRCaW5hcnkoe3ZhbHVlOiBzb3VyY2UuYmxvYn0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5ibG9iID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Jsb2InXSkge1xyXG4gICAgICBpZiAodGhpcy5ibG9iKSB7IHRoaXMuYmxvYi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9ibG9iISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuYmxvYiA9IG5ldyBmaGlyLkZoaXJCYXNlNjRCaW5hcnkoc291cmNlLl9ibG9iIGFzIFBhcnRpYWw8Zmhpci5GaGlyQmFzZTY0QmluYXJ5QXJncz4pOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnU2lnbmF0dXJlJyB9XHJcbiAgICB0aGlzLnZSQSgndHlwZScsZXhwKVxyXG4gICAgdGhpcy52UlMoJ3doZW4nLGV4cClcclxuICAgIHRoaXMudlJTKCd3aG8nLGV4cClcclxuICAgIHRoaXMudlJTKCdjb250ZW50VHlwZScsZXhwKVxyXG4gICAgdGhpcy52UlMoJ2Jsb2InLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==