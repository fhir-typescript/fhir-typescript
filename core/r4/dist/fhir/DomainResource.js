// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: DomainResource
import * as fhir from '../fhir.js';
/**
 * A resource that includes narrative, extensions, and contained resources.
 */
export class DomainResource extends fhir.Resource {
    /**
     * Default constructor for DomainResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['text']) {
            this.text = new fhir.Narrative(source.text);
        }
        if (source['contained']) {
            this.contained = [];
            source.contained.forEach((x) => {
                var r = fhir.resourceFactory(x);
                if (r) {
                    this.contained.push(r);
                }
            });
        }
        else {
            this.contained = [];
        }
        if (source['extension']) {
            this.extension = source.extension.map((x) => new fhir.Extension(x));
        }
        else {
            this.extension = [];
        }
        if (source['modifierExtension']) {
            this.modifierExtension = source.modifierExtension.map((x) => new fhir.Extension(x));
        }
        else {
            this.modifierExtension = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'DomainResource';
        }
        this.vOptS('text', expression);
        this.vOptA('contained', expression);
        this.vOptA('extension', expression);
        this.vOptA('modifierExtension', expression);
        return issues;
    }
    /**
     * Fluent-style function to add extensions
     * @param ext
     * @returns
     */
    addExtension(ext) {
        this.extension.push(new fhir.Extension(ext));
        return this;
    }
    /**
     * Remove ALL instances of extensions with a matching URL, optionally recurse into extension.extension.
     * @param url URL of extensions to remove
     * @param searchNested If the removal should search for nested extensions
     */
    removeExtensions(url, searchNested = false) {
        if (this.extension.length === 0) {
            return this;
        }
        const matchUrl = (typeof url === 'string') ? url : url.value ?? '';
        let clean = this.extension.filter((ext) => (ext?.url?.value ?? '') !== matchUrl) ?? [];
        if (searchNested) {
            for (let i = 0; i < clean.length; i++) {
                clean[i] = clean[i].removeExtensions(matchUrl, searchNested);
            }
        }
        this.extension = clean;
        return this;
    }
    /**
     * Find the first instance of an extension with a matching URL, optionally recurse into extension.extension.
     * @param url URL to search for
     * @param searchNested If the search should nest into extensions
     * @returns The FHIR Extension if found, or undefined.
     */
    findExtension(url, searchNested = false) {
        if (this.extension.length === 0) {
            return undefined;
        }
        const matchUrl = (typeof url === 'string') ? url : url.value ?? '';
        if (searchNested) {
            const flat = DomainResource.recurseForExtension(matchUrl, this.extension);
            if (flat.length === 0) {
                return undefined;
            }
            return flat[0];
        }
        return this.extension.find((ext) => (ext?.url?.value === matchUrl));
    }
    /**
     * Find all instances of an extension with a matching URL, optionally recurse into extension.extension.
     * @param url URL to search for
     * @param searchNested If the search should nest into extensions
     * @returns A new array of FHIR Extensions, with just the desired extensions
     */
    filterExtensions(url, searchNested = false) {
        if (this.extension.length === 0) {
            return [];
        }
        const matchUrl = (typeof url === 'string') ? url : url.value ?? '';
        if (searchNested) {
            return DomainResource.recurseForExtension(matchUrl, this.extension);
        }
        return this.extension.filter((ext) => (ext?.url?.value === matchUrl));
    }
    /**
     * Internal recursive search function
     * @param url
     * @param exts
     * @returns A new array (flat) of matching extensions
     */
    static recurseForExtension(url, exts) {
        if ((!exts) || (exts.length === 0)) {
            return [];
        }
        let val = [];
        exts.forEach((ext) => {
            if (ext && ext.url && (ext.url.value === url)) {
                val.push(ext);
                return;
            }
            if (ext && ext.extension && (ext.extension.length > 0)) {
                val.push(...this.recurseForExtension(url, ext.extension));
                return;
            }
            return;
        }, []);
        return val;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
DomainResource._fts_dataType = 'DomainResource';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluUmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0RvbWFpblJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUVoQyxPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQXdCbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sY0FBZSxTQUFRLElBQUksQ0FBQyxRQUFRO0lBcUIvQzs7T0FFRztJQUNILFlBQVksU0FBcUMsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDM0YsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUFFO1FBQ3BFLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxFQUFFO29CQUFFLElBQUksQ0FBQyxTQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUFFO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFDSTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDN0IsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMs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QUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDbEMsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELElBQUksR0FBRyxHQUFvQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FDVixDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ04sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLE9BQU87YUFDUjtZQUNELElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDdEQsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELE9BQU87YUFDUjtZQUNELE9BQU87UUFDVCxDQUFDLEVBQ0QsRUFBRSxDQUFDLENBQUM7UUFDTixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBaEpEOztHQUVHO0FBQzZCLDRCQUFhLEdBQVUsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IERvbWFpblJlc291cmNlXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIERvbWFpblJlc291cmNlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERvbWFpblJlc291cmNlQXJncyBleHRlbmRzIGZoaXIuUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBDb250YWluZWQgcmVzb3VyY2VzIGRvIG5vdCBoYXZlIG5hcnJhdGl2ZS4gUmVzb3VyY2VzIHRoYXQgYXJlIG5vdCBjb250YWluZWQgU0hPVUxEIGhhdmUgYSBuYXJyYXRpdmUuIEluIHNvbWUgY2FzZXMsIGEgcmVzb3VyY2UgbWF5IG9ubHkgaGF2ZSB0ZXh0IHdpdGggbGl0dGxlIG9yIG5vIGFkZGl0aW9uYWwgZGlzY3JldGUgZGF0YSAoYXMgbG9uZyBhcyBhbGwgbWluT2NjdXJzPTEgZWxlbWVudHMgYXJlIHNhdGlzZmllZCkuICBUaGlzIG1heSBiZSBuZWNlc3NhcnkgZm9yIGRhdGEgZnJvbSBsZWdhY3kgc3lzdGVtcyB3aGVyZSBpbmZvcm1hdGlvbiBpcyBjYXB0dXJlZCBhcyBhIFwidGV4dCBibG9iXCIgb3Igd2hlcmUgdGV4dCBpcyBhZGRpdGlvbmFsbHkgZW50ZXJlZCByYXcgb3IgbmFycmF0ZWQgYW5kIGVuY29kZWQgaW5mb3JtYXRpb24gaXMgYWRkZWQgbGF0ZXIuXHJcbiAgICovXHJcbiAgdGV4dD86IGZoaXIuTmFycmF0aXZlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBzaG91bGQgbmV2ZXIgYmUgZG9uZSB3aGVuIHRoZSBjb250ZW50IGNhbiBiZSBpZGVudGlmaWVkIHByb3Blcmx5LCBhcyBvbmNlIGlkZW50aWZpY2F0aW9uIGlzIGxvc3QsIGl0IGlzIGV4dHJlbWVseSBkaWZmaWN1bHQgKGFuZCBjb250ZXh0IGRlcGVuZGVudCkgdG8gcmVzdG9yZSBpdCBhZ2Fpbi4gQ29udGFpbmVkIHJlc291cmNlcyBtYXkgaGF2ZSBwcm9maWxlcyBhbmQgdGFncyBJbiB0aGVpciBtZXRhIGVsZW1lbnRzLCBidXQgU0hBTEwgTk9UIGhhdmUgc2VjdXJpdHkgbGFiZWxzLlxyXG4gICAqL1xyXG4gIGNvbnRhaW5lZD86IGZoaXIuUmVzb3VyY2VBcmdzW118YW55W118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZXJlIGNhbiBiZSBubyBzdGlnbWEgYXNzb2NpYXRlZCB3aXRoIHRoZSB1c2Ugb2YgZXh0ZW5zaW9ucyBieSBhbnkgYXBwbGljYXRpb24sIHByb2plY3QsIG9yIHN0YW5kYXJkIC0gcmVnYXJkbGVzcyBvZiB0aGUgaW5zdGl0dXRpb24gb3IganVyaXNkaWN0aW9uIHRoYXQgdXNlcyBvciBkZWZpbmVzIHRoZSBleHRlbnNpb25zLiAgVGhlIHVzZSBvZiBleHRlbnNpb25zIGlzIHdoYXQgYWxsb3dzIHRoZSBGSElSIHNwZWNpZmljYXRpb24gdG8gcmV0YWluIGEgY29yZSBsZXZlbCBvZiBzaW1wbGljaXR5IGZvciBldmVyeW9uZS5cclxuICAgKi9cclxuICBleHRlbnNpb24/OiBmaGlyLkV4dGVuc2lvbkFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlcmUgY2FuIGJlIG5vIHN0aWdtYSBhc3NvY2lhdGVkIHdpdGggdGhlIHVzZSBvZiBleHRlbnNpb25zIGJ5IGFueSBhcHBsaWNhdGlvbiwgcHJvamVjdCwgb3Igc3RhbmRhcmQgLSByZWdhcmRsZXNzIG9mIHRoZSBpbnN0aXR1dGlvbiBvciBqdXJpc2RpY3Rpb24gdGhhdCB1c2VzIG9yIGRlZmluZXMgdGhlIGV4dGVuc2lvbnMuICBUaGUgdXNlIG9mIGV4dGVuc2lvbnMgaXMgd2hhdCBhbGxvd3MgdGhlIEZISVIgc3BlY2lmaWNhdGlvbiB0byByZXRhaW4gYSBjb3JlIGxldmVsIG9mIHNpbXBsaWNpdHkgZm9yIGV2ZXJ5b25lLlxyXG4gICAqL1xyXG4gIG1vZGlmaWVyRXh0ZW5zaW9uPzogZmhpci5FeHRlbnNpb25BcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSByZXNvdXJjZSB0aGF0IGluY2x1ZGVzIG5hcnJhdGl2ZSwgZXh0ZW5zaW9ucywgYW5kIGNvbnRhaW5lZCByZXNvdXJjZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRG9tYWluUmVzb3VyY2UgZXh0ZW5kcyBmaGlyLlJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0RvbWFpblJlc291cmNlJztcclxuICAvKipcclxuICAgKiBDb250YWluZWQgcmVzb3VyY2VzIGRvIG5vdCBoYXZlIG5hcnJhdGl2ZS4gUmVzb3VyY2VzIHRoYXQgYXJlIG5vdCBjb250YWluZWQgU0hPVUxEIGhhdmUgYSBuYXJyYXRpdmUuIEluIHNvbWUgY2FzZXMsIGEgcmVzb3VyY2UgbWF5IG9ubHkgaGF2ZSB0ZXh0IHdpdGggbGl0dGxlIG9yIG5vIGFkZGl0aW9uYWwgZGlzY3JldGUgZGF0YSAoYXMgbG9uZyBhcyBhbGwgbWluT2NjdXJzPTEgZWxlbWVudHMgYXJlIHNhdGlzZmllZCkuICBUaGlzIG1heSBiZSBuZWNlc3NhcnkgZm9yIGRhdGEgZnJvbSBsZWdhY3kgc3lzdGVtcyB3aGVyZSBpbmZvcm1hdGlvbiBpcyBjYXB0dXJlZCBhcyBhIFwidGV4dCBibG9iXCIgb3Igd2hlcmUgdGV4dCBpcyBhZGRpdGlvbmFsbHkgZW50ZXJlZCByYXcgb3IgbmFycmF0ZWQgYW5kIGVuY29kZWQgaW5mb3JtYXRpb24gaXMgYWRkZWQgbGF0ZXIuXHJcbiAgICovXHJcbiAgcHVibGljIHRleHQ/OiBmaGlyLk5hcnJhdGl2ZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBzaG91bGQgbmV2ZXIgYmUgZG9uZSB3aGVuIHRoZSBjb250ZW50IGNhbiBiZSBpZGVudGlmaWVkIHByb3Blcmx5LCBhcyBvbmNlIGlkZW50aWZpY2F0aW9uIGlzIGxvc3QsIGl0IGlzIGV4dHJlbWVseSBkaWZmaWN1bHQgKGFuZCBjb250ZXh0IGRlcGVuZGVudCkgdG8gcmVzdG9yZSBpdCBhZ2Fpbi4gQ29udGFpbmVkIHJlc291cmNlcyBtYXkgaGF2ZSBwcm9maWxlcyBhbmQgdGFncyBJbiB0aGVpciBtZXRhIGVsZW1lbnRzLCBidXQgU0hBTEwgTk9UIGhhdmUgc2VjdXJpdHkgbGFiZWxzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb250YWluZWQ6IGZoaXIuRmhpclJlc291cmNlW107XHJcbiAgLyoqXHJcbiAgICogVGhlcmUgY2FuIGJlIG5vIHN0aWdtYSBhc3NvY2lhdGVkIHdpdGggdGhlIHVzZSBvZiBleHRlbnNpb25zIGJ5IGFueSBhcHBsaWNhdGlvbiwgcHJvamVjdCwgb3Igc3RhbmRhcmQgLSByZWdhcmRsZXNzIG9mIHRoZSBpbnN0aXR1dGlvbiBvciBqdXJpc2RpY3Rpb24gdGhhdCB1c2VzIG9yIGRlZmluZXMgdGhlIGV4dGVuc2lvbnMuICBUaGUgdXNlIG9mIGV4dGVuc2lvbnMgaXMgd2hhdCBhbGxvd3MgdGhlIEZISVIgc3BlY2lmaWNhdGlvbiB0byByZXRhaW4gYSBjb3JlIGxldmVsIG9mIHNpbXBsaWNpdHkgZm9yIGV2ZXJ5b25lLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBleHRlbnNpb246IGZoaXIuRXh0ZW5zaW9uW107XHJcbiAgLyoqXHJcbiAgICogVGhlcmUgY2FuIGJlIG5vIHN0aWdtYSBhc3NvY2lhdGVkIHdpdGggdGhlIHVzZSBvZiBleHRlbnNpb25zIGJ5IGFueSBhcHBsaWNhdGlvbiwgcHJvamVjdCwgb3Igc3RhbmRhcmQgLSByZWdhcmRsZXNzIG9mIHRoZSBpbnN0aXR1dGlvbiBvciBqdXJpc2RpY3Rpb24gdGhhdCB1c2VzIG9yIGRlZmluZXMgdGhlIGV4dGVuc2lvbnMuICBUaGUgdXNlIG9mIGV4dGVuc2lvbnMgaXMgd2hhdCBhbGxvd3MgdGhlIEZISVIgc3BlY2lmaWNhdGlvbiB0byByZXRhaW4gYSBjb3JlIGxldmVsIG9mIHNpbXBsaWNpdHkgZm9yIGV2ZXJ5b25lLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBtb2RpZmllckV4dGVuc2lvbjogZmhpci5FeHRlbnNpb25bXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBEb21haW5SZXNvdXJjZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPERvbWFpblJlc291cmNlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3RleHQnXSkgeyB0aGlzLnRleHQgPSBuZXcgZmhpci5OYXJyYXRpdmUoc291cmNlLnRleHQpOyB9XHJcbiAgICBpZiAoc291cmNlWydjb250YWluZWQnXSkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lZCA9IFtdO1xyXG4gICAgICBzb3VyY2UuY29udGFpbmVkLmZvckVhY2goKHgpID0+IHtcclxuICAgICAgICB2YXIgciA9IGZoaXIucmVzb3VyY2VGYWN0b3J5KHgpO1xyXG4gICAgICAgIGlmIChyKSB7IHRoaXMuY29udGFpbmVkIS5wdXNoKHIpOyB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29udGFpbmVkID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2V4dGVuc2lvbiddKSB7IHRoaXMuZXh0ZW5zaW9uID0gc291cmNlLmV4dGVuc2lvbi5tYXAoKHgpID0+IG5ldyBmaGlyLkV4dGVuc2lvbih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmV4dGVuc2lvbiA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydtb2RpZmllckV4dGVuc2lvbiddKSB7IHRoaXMubW9kaWZpZXJFeHRlbnNpb24gPSBzb3VyY2UubW9kaWZpZXJFeHRlbnNpb24ubWFwKCh4KSA9PiBuZXcgZmhpci5FeHRlbnNpb24oeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5tb2RpZmllckV4dGVuc2lvbiA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKTtcclxuICAgIGlmIChleHByZXNzaW9uID09PSAnJykgeyBleHByZXNzaW9uID0gJ0RvbWFpblJlc291cmNlJyB9XHJcbiAgICB0aGlzLnZPcHRTKCd0ZXh0JyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52T3B0QSgnY29udGFpbmVkJyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52T3B0QSgnZXh0ZW5zaW9uJyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52T3B0QSgnbW9kaWZpZXJFeHRlbnNpb24nLGV4cHJlc3Npb24pXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGbHVlbnQtc3R5bGUgZnVuY3Rpb24gdG8gYWRkIGV4dGVuc2lvbnNcclxuICAgKiBAcGFyYW0gZXh0XHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgcHVibGljIGFkZEV4dGVuc2lvbihleHQ6Zmhpci5FeHRlbnNpb25BcmdzKTpEb21haW5SZXNvdXJjZSB7XHJcbiAgICB0aGlzLmV4dGVuc2lvbi5wdXNoKG5ldyBmaGlyLkV4dGVuc2lvbihleHQpKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBSZW1vdmUgQUxMIGluc3RhbmNlcyBvZiBleHRlbnNpb25zIHdpdGggYSBtYXRjaGluZyBVUkwsIG9wdGlvbmFsbHkgcmVjdXJzZSBpbnRvIGV4dGVuc2lvbi5leHRlbnNpb24uXHJcbiAgICogQHBhcmFtIHVybCBVUkwgb2YgZXh0ZW5zaW9ucyB0byByZW1vdmVcclxuICAgKiBAcGFyYW0gc2VhcmNoTmVzdGVkIElmIHRoZSByZW1vdmFsIHNob3VsZCBzZWFyY2ggZm9yIG5lc3RlZCBleHRlbnNpb25zXHJcbiAgICovXHJcbiAgcHVibGljIHJlbW92ZUV4dGVuc2lvbnModXJsOmZoaXIuRmhpclN0cmluZ3xzdHJpbmcsIHNlYXJjaE5lc3RlZDpib29sZWFuID0gZmFsc2UpOkRvbWFpblJlc291cmNlIHtcclxuICAgIGlmICh0aGlzLmV4dGVuc2lvbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXRjaFVybDpzdHJpbmcgPSAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpID8gdXJsIDogKHVybCBhcyBmaGlyLkZoaXJTdHJpbmcpLnZhbHVlID8/ICcnO1xyXG4gICAgbGV0IGNsZWFuOmZoaXIuRXh0ZW5zaW9uW10gPSB0aGlzLmV4dGVuc2lvbi5maWx0ZXIoKGV4dCkgPT4gKGV4dD8udXJsPy52YWx1ZSA/PyAnJykgIT09IG1hdGNoVXJsKSA/PyBbXTtcclxuICAgIGlmIChzZWFyY2hOZXN0ZWQpIHtcclxuICAgICAgZm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgY2xlYW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjbGVhbltpXSA9IGNsZWFuW2ldLnJlbW92ZUV4dGVuc2lvbnMobWF0Y2hVcmwsIHNlYXJjaE5lc3RlZCkgYXMgZmhpci5FeHRlbnNpb247XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZXh0ZW5zaW9uID0gY2xlYW47XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgdGhlIGZpcnN0IGluc3RhbmNlIG9mIGFuIGV4dGVuc2lvbiB3aXRoIGEgbWF0Y2hpbmcgVVJMLCBvcHRpb25hbGx5IHJlY3Vyc2UgaW50byBleHRlbnNpb24uZXh0ZW5zaW9uLlxyXG4gICAqIEBwYXJhbSB1cmwgVVJMIHRvIHNlYXJjaCBmb3JcclxuICAgKiBAcGFyYW0gc2VhcmNoTmVzdGVkIElmIHRoZSBzZWFyY2ggc2hvdWxkIG5lc3QgaW50byBleHRlbnNpb25zXHJcbiAgICogQHJldHVybnMgVGhlIEZISVIgRXh0ZW5zaW9uIGlmIGZvdW5kLCBvciB1bmRlZmluZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGZpbmRFeHRlbnNpb24odXJsOmZoaXIuRmhpclN0cmluZ3xzdHJpbmcsIHNlYXJjaE5lc3RlZDpib29sZWFuID0gZmFsc2UpOmZoaXIuRXh0ZW5zaW9ufHVuZGVmaW5lZCB7XHJcbiAgICBpZiAodGhpcy5leHRlbnNpb24ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXRjaFVybDpzdHJpbmcgPSAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpID8gdXJsIDogKHVybCBhcyBmaGlyLkZoaXJTdHJpbmcpLnZhbHVlID8/ICcnO1xyXG4gICAgaWYgKHNlYXJjaE5lc3RlZCkge1xyXG4gICAgICBjb25zdCBmbGF0OmZoaXIuRXh0ZW5zaW9uW10gPSBEb21haW5SZXNvdXJjZS5yZWN1cnNlRm9yRXh0ZW5zaW9uKG1hdGNoVXJsLCB0aGlzLmV4dGVuc2lvbik7XHJcbiAgICAgIGlmIChmbGF0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZsYXRbMF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb24uZmluZCgoZXh0KSA9PiAoZXh0Py51cmw/LnZhbHVlID09PSBtYXRjaFVybCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCBhbGwgaW5zdGFuY2VzIG9mIGFuIGV4dGVuc2lvbiB3aXRoIGEgbWF0Y2hpbmcgVVJMLCBvcHRpb25hbGx5IHJlY3Vyc2UgaW50byBleHRlbnNpb24uZXh0ZW5zaW9uLlxyXG4gICAqIEBwYXJhbSB1cmwgVVJMIHRvIHNlYXJjaCBmb3JcclxuICAgKiBAcGFyYW0gc2VhcmNoTmVzdGVkIElmIHRoZSBzZWFyY2ggc2hvdWxkIG5lc3QgaW50byBleHRlbnNpb25zXHJcbiAgICogQHJldHVybnMgQSBuZXcgYXJyYXkgb2YgRkhJUiBFeHRlbnNpb25zLCB3aXRoIGp1c3QgdGhlIGRlc2lyZWQgZXh0ZW5zaW9uc1xyXG4gICAqL1xyXG4gIHB1YmxpYyBmaWx0ZXJFeHRlbnNpb25zKHVybDpmaGlyLkZoaXJTdHJpbmd8c3RyaW5nLCBzZWFyY2hOZXN0ZWQ6Ym9vbGVhbiA9IGZhbHNlKTpmaGlyLkV4dGVuc2lvbltdIHtcclxuICAgIGlmICh0aGlzLmV4dGVuc2lvbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWF0Y2hVcmw6c3RyaW5nID0gKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSA/IHVybCA6ICh1cmwgYXMgZmhpci5GaGlyU3RyaW5nKS52YWx1ZSA/PyAnJztcclxuICAgIGlmIChzZWFyY2hOZXN0ZWQpIHtcclxuICAgICAgcmV0dXJuIERvbWFpblJlc291cmNlLnJlY3Vyc2VGb3JFeHRlbnNpb24obWF0Y2hVcmwsIHRoaXMuZXh0ZW5zaW9uKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbi5maWx0ZXIoKGV4dCkgPT4gKGV4dD8udXJsPy52YWx1ZSA9PT0gbWF0Y2hVcmwpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgcmVjdXJzaXZlIHNlYXJjaCBmdW5jdGlvblxyXG4gICAqIEBwYXJhbSB1cmwgXHJcbiAgICogQHBhcmFtIGV4dHMgXHJcbiAgICogQHJldHVybnMgQSBuZXcgYXJyYXkgKGZsYXQpIG9mIG1hdGNoaW5nIGV4dGVuc2lvbnNcclxuICAgKi9cclxuICBwcml2YXRlIHN0YXRpYyByZWN1cnNlRm9yRXh0ZW5zaW9uKHVybDpzdHJpbmcsIGV4dHM6Zmhpci5FeHRlbnNpb25bXSk6Zmhpci5FeHRlbnNpb25bXSB7XHJcbiAgICBpZiAoKCFleHRzKSB8fCAoZXh0cy5sZW5ndGggPT09IDApKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGxldCB2YWw6Zmhpci5FeHRlbnNpb25bXSA9IFtdO1xyXG4gICAgZXh0cy5mb3JFYWNoKFxyXG4gICAgICAoZXh0KSA9PiB7XHJcbiAgICAgICAgaWYgKGV4dCAmJiBleHQudXJsICYmIChleHQudXJsLnZhbHVlID09PSB1cmwpKSB7XHJcbiAgICAgICAgICB2YWwucHVzaChleHQpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXh0ICYmIGV4dC5leHRlbnNpb24gJiYgKGV4dC5leHRlbnNpb24ubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgIHZhbC5wdXNoKC4uLnRoaXMucmVjdXJzZUZvckV4dGVuc2lvbih1cmwsIGV4dC5leHRlbnNpb24pKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9LFxyXG4gICAgICBbXSk7XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuXHJcbn1cclxuIl19