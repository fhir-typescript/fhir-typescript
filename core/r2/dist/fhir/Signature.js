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
            this.type = source.type.map((x) => new fhir.Coding(x, options));
        }
        else {
            this.type = [];
        }
        if (source['when'] !== undefined) {
            this.when = new fhir.FhirInstant({ value: source.when }, options);
        }
        else {
            this.when = null;
        }
        if (source['_when']) {
            if (this.when) {
                this.when.addExtendedProperties(source._when);
            }
            else {
                this.when = new fhir.FhirInstant(source._when, options);
            }
        }
        if (source['who']) {
            this.who = source.who;
        }
        else if (source['whoUri'] !== undefined) {
            this.who = new fhir.FhirUri({ value: source.whoUri }, options);
        }
        else if (source['whoReference']) {
            this.who = new fhir.Reference(source.whoReference, options);
        }
        else {
            this.who = null;
        }
        if (source['contentType'] !== undefined) {
            this.contentType = new fhir.FhirCode({ value: source.contentType }, options);
        }
        else {
            this.contentType = null;
        }
        if (source['_contentType']) {
            if (this.contentType) {
                this.contentType.addExtendedProperties(source._contentType);
            }
            else {
                this.contentType = new fhir.FhirCode(source._contentType, options);
            }
        }
        if (source['blob'] !== undefined) {
            this.blob = new fhir.FhirBase64Binary({ value: source.blob }, options);
        }
        else {
            this.blob = null;
        }
        if (source['_blob']) {
            if (this.blob) {
                this.blob.addExtendedProperties(source._blob);
            }
            else {
                this.blob = new fhir.FhirBase64Binary(source._blob, options);
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
        iss.push(...this.vRS('contentType', exp));
        iss.push(...this.vRS('blob', exp));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnbmF0dXJlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9TaWduYXR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBZ0RuQzs7R0FFRztBQUNILE1BQU0sT0FBTyxTQUFVLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUE2QjdDOztPQUVHO0lBQ0gsWUFBWSxTQUFnQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUN0RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDbkY7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQ3hCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO2FBQ2pHO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FBRTtRQUMxQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUM7YUFB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QUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQXRFRDs7R0FFRztBQUM2Qix1QkFBYSxHQUFVLFdBQVcsQ0FBQztBQWFuRTs7R0FFRztBQUN1QiwwQkFBZ0IsR0FBUSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IFNpZ25hdHVyZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTaWduYXR1cmUgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmF0dXJlQXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBBbiBpbmRpY2F0aW9uIG9mIHRoZSByZWFzb24gdGhhdCB0aGUgZW50aXR5IHNpZ25lZCB0aGlzIGRvY3VtZW50LiBUaGlzIG1heSBiZSBleHBsaWNpdGx5IGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIHNpZ25hdHVyZSBpbmZvcm1hdGlvbiBhbmQgY2FuIGJlIHVzZWQgd2hlbiBkZXRlcm1pbmluZyBhY2NvdW50YWJpbGl0eSBmb3IgdmFyaW91cyBhY3Rpb25zIGNvbmNlcm5pbmcgdGhlIGRvY3VtZW50LlxyXG4gICAqL1xyXG4gIHR5cGU6IGZoaXIuQ29kaW5nQXJnc1tdfG51bGw7XHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGUgZGlnaXRhbCBzaWduYXR1cmUgd2FzIHNpZ25lZC5cclxuICAgKi9cclxuICB3aGVuOiBmaGlyLkZoaXJJbnN0YW50fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFNpZ25hdHVyZS53aGVuXHJcbiAgICovXHJcbiAgX3doZW4/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIGFuIGFwcGxpY2F0aW9uLXVzYWJsZSBkZXNjcmlwdGlvbiBvZiB0aGUgcGVyc29uIHRoYXQgc2lnbmVkIHRoZSBjZXJ0aWZpY2F0ZSAoZS5nLiB0aGUgc2lnbmF0dXJlIHVzZWQgdGhlaXIgcHJpdmF0ZSBrZXkpLlxyXG4gICAqL1xyXG4gIHdobz86IGZoaXIuRmhpclVyaXxmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gYW4gYXBwbGljYXRpb24tdXNhYmxlIGRlc2NyaXB0aW9uIG9mIHRoZSBwZXJzb24gdGhhdCBzaWduZWQgdGhlIGNlcnRpZmljYXRlIChlLmcuIHRoZSBzaWduYXR1cmUgdXNlZCB0aGVpciBwcml2YXRlIGtleSkuXHJcbiAgICovXHJcbiAgd2hvVXJpPzogZmhpci5GaGlyVXJpfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gYW4gYXBwbGljYXRpb24tdXNhYmxlIGRlc2NyaXB0aW9uIG9mIHRoZSBwZXJzb24gdGhhdCBzaWduZWQgdGhlIGNlcnRpZmljYXRlIChlLmcuIHRoZSBzaWduYXR1cmUgdXNlZCB0aGVpciBwcml2YXRlIGtleSkuXHJcbiAgICovXHJcbiAgd2hvUmVmZXJlbmNlPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIG1pbWUgdHlwZSB0aGF0IGluZGljYXRlcyB0aGUgdGVjaG5pY2FsIGZvcm1hdCBvZiB0aGUgc2lnbmF0dXJlLiBJbXBvcnRhbnQgbWltZSB0eXBlcyBhcmUgYXBwbGljYXRpb24vc2lnbmF0dXJlK3htbCBmb3IgWCBNTCBEaWdTaWcsIGFwcGxpY2F0aW9uL2p3dCBmb3IgSldULCBhbmQgaW1hZ2UvKiBmb3IgYSBncmFwaGljYWwgaW1hZ2Ugb2YgYSBzaWduYXR1cmUuXHJcbiAgICovXHJcbiAgY29udGVudFR5cGU6IGZoaXIuRmhpckNvZGV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU2lnbmF0dXJlLmNvbnRlbnRUeXBlXHJcbiAgICovXHJcbiAgX2NvbnRlbnRUeXBlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgYmFzZTY0IGVuY29kaW5nIG9mIHRoZSBTaWduYXR1cmUgY29udGVudC5cclxuICAgKi9cclxuICBibG9iOiBmaGlyLkZoaXJCYXNlNjRCaW5hcnl8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU2lnbmF0dXJlLmJsb2JcclxuICAgKi9cclxuICBfYmxvYj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGRpZ2l0YWwgc2lnbmF0dXJlIGFsb25nIHdpdGggc3VwcG9ydGluZyBjb250ZXh0LiBUaGUgc2lnbmF0dXJlIG1heSBiZSBlbGVjdHJvbmljL2NyeXB0b2dyYXBoaWMgaW4gbmF0dXJlLCBvciBhIGdyYXBoaWNhbCBpbWFnZSByZXByZXNlbnRpbmcgYSBoYW5kLXdyaXR0ZW4gc2lnbmF0dXJlLCBvciBhIHNpZ25hdHVyZSBwcm9jZXNzLiBEaWZmZXJlbnQgU2lnbmF0dXJlIGFwcHJvYWNoZXMgaGF2ZSBkaWZmZXJlbnQgdXRpbGl0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZSBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnU2lnbmF0dXJlJztcclxuICAvKipcclxuICAgKiBBbiBpbmRpY2F0aW9uIG9mIHRoZSByZWFzb24gdGhhdCB0aGUgZW50aXR5IHNpZ25lZCB0aGlzIGRvY3VtZW50LiBUaGlzIG1heSBiZSBleHBsaWNpdGx5IGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIHNpZ25hdHVyZSBpbmZvcm1hdGlvbiBhbmQgY2FuIGJlIHVzZWQgd2hlbiBkZXRlcm1pbmluZyBhY2NvdW50YWJpbGl0eSBmb3IgdmFyaW91cyBhY3Rpb25zIGNvbmNlcm5pbmcgdGhlIGRvY3VtZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0eXBlOiBmaGlyLkNvZGluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIFdoZW4gdGhlIGRpZ2l0YWwgc2lnbmF0dXJlIHdhcyBzaWduZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHdoZW46IGZoaXIuRmhpckluc3RhbnR8bnVsbDtcclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byBhbiBhcHBsaWNhdGlvbi11c2FibGUgZGVzY3JpcHRpb24gb2YgdGhlIHBlcnNvbiB0aGF0IHNpZ25lZCB0aGUgY2VydGlmaWNhdGUgKGUuZy4gdGhlIHNpZ25hdHVyZSB1c2VkIHRoZWlyIHByaXZhdGUga2V5KS5cclxuICAgKi9cclxuICBwdWJsaWMgd2hvOiAoZmhpci5GaGlyVXJpfGZoaXIuUmVmZXJlbmNlKXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIGZsYWcgdG8gcHJvcGVybHkgc2VyaWFsaXplIGNob2ljZS10eXBlIGVsZW1lbnQgU2lnbmF0dXJlLndob1t4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c193aG9Jc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBBIG1pbWUgdHlwZSB0aGF0IGluZGljYXRlcyB0aGUgdGVjaG5pY2FsIGZvcm1hdCBvZiB0aGUgc2lnbmF0dXJlLiBJbXBvcnRhbnQgbWltZSB0eXBlcyBhcmUgYXBwbGljYXRpb24vc2lnbmF0dXJlK3htbCBmb3IgWCBNTCBEaWdTaWcsIGFwcGxpY2F0aW9uL2p3dCBmb3IgSldULCBhbmQgaW1hZ2UvKiBmb3IgYSBncmFwaGljYWwgaW1hZ2Ugb2YgYSBzaWduYXR1cmUuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnRlbnRUeXBlOiBmaGlyLkZoaXJDb2RlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGJhc2U2NCBlbmNvZGluZyBvZiB0aGUgU2lnbmF0dXJlIGNvbnRlbnQuXHJcbiAgICovXHJcbiAgcHVibGljIGJsb2I6IGZoaXIuRmhpckJhc2U2NEJpbmFyeXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFNpZ25hdHVyZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFNpZ25hdHVyZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyd0eXBlJ10pIHsgdGhpcy50eXBlID0gc291cmNlLnR5cGUubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RpbmcoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50eXBlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3doZW4nXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMud2hlbiA9IG5ldyBmaGlyLkZoaXJJbnN0YW50KHt2YWx1ZTogc291cmNlLndoZW59LCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMud2hlbiA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ193aGVuJ10pIHtcclxuICAgICAgaWYgKHRoaXMud2hlbikgeyB0aGlzLndoZW4uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fd2hlbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLndoZW4gPSBuZXcgZmhpci5GaGlySW5zdGFudChzb3VyY2UuX3doZW4gYXMgUGFydGlhbDxmaGlyLkZoaXJJbnN0YW50QXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd3aG8nXSkgeyB0aGlzLndobyA9IHNvdXJjZS53aG87IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnd2hvVXJpJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLndobyA9IG5ldyBmaGlyLkZoaXJVcmkoe3ZhbHVlOiBzb3VyY2Uud2hvVXJpfSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnd2hvUmVmZXJlbmNlJ10pIHsgdGhpcy53aG8gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLndob1JlZmVyZW5jZSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLndobyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ2NvbnRlbnRUeXBlJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmNvbnRlbnRUeXBlID0gbmV3IGZoaXIuRmhpckNvZGUoe3ZhbHVlOiBzb3VyY2UuY29udGVudFR5cGV9LCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29udGVudFR5cGUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfY29udGVudFR5cGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5jb250ZW50VHlwZSkgeyB0aGlzLmNvbnRlbnRUeXBlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NvbnRlbnRUeXBlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY29udGVudFR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZShzb3VyY2UuX2NvbnRlbnRUeXBlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZUFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnYmxvYiddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5ibG9iID0gbmV3IGZoaXIuRmhpckJhc2U2NEJpbmFyeSh7dmFsdWU6IHNvdXJjZS5ibG9ifSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmJsb2IgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfYmxvYiddKSB7XHJcbiAgICAgIGlmICh0aGlzLmJsb2IpIHsgdGhpcy5ibG9iLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2Jsb2IhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5ibG9iID0gbmV3IGZoaXIuRmhpckJhc2U2NEJpbmFyeShzb3VyY2UuX2Jsb2IgYXMgUGFydGlhbDxmaGlyLkZoaXJCYXNlNjRCaW5hcnlBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdTaWduYXR1cmUnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJBKCd0eXBlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCd3aGVuJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCd3aG8nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ2NvbnRlbnRUeXBlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdibG9iJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==