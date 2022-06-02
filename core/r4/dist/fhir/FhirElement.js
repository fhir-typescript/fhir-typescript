// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Element
import * as fhir from '../fhir.js';
/**
 * Base definition for all elements in a resource.
 */
export class FhirElement extends fhir.FhirBase {
    /**
     * Default constructor for FhirElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['id']) {
            this.id = new fhir.FhirString({ value: source.id });
        }
        if (source['_id']) {
            if (this.id) {
                this.id.addExtendedProperties(source._id);
            }
            else {
                this.id = new fhir.FhirString(source._id);
            }
        }
        if (source['extension']) {
            this.extension = source.extension.map((x) => new fhir.Extension(x));
        }
        else {
            this.extension = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'Element';
        }
        if (this["id"]) {
            issues.push(...this.id.doModelValidation(expression + '.id'));
        }
        if (this["extension"]) {
            this.extension.forEach((x, i) => { issues.push(...x.doModelValidation(expression + `.extension[${i}]`)); });
        }
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
            const flat = FhirElement.recurseForExtension(matchUrl, this.extension);
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
            return FhirElement.recurseForExtension(matchUrl, this.extension);
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
FhirElement._fts_dataType = 'Element';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpckVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0ZoaXJFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDRCQUE0QjtBQUU1QixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQW9CbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sV0FBWSxTQUFRLElBQUksQ0FBQyxRQUFRO0lBYTVDOztPQUVHO0lBQ0gsWUFBWSxTQUFrQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUN4RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7U0FBRTtRQUN4RSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsR0FBSSxDQUFDLENBQUM7YUFBRTtpQkFDdkQ7Z0JBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQW1DLENBQUMsQ0FBQzthQUFFO1NBQ3BGO1FBQ0QsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQzVGO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FBRTtJQUMvQixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxhQUFvQixFQUFFO1FBQ3RELElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakUsSUFBSSxVQUFVLEtBQUssRUFBRSxFQUFFO1lBQUUsVUFBVSxHQUFHLFNBQVMsQ0FBQTtTQUFFO1FBQ2pELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FBRTtRQUNoRixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEdBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUFFO1FBQ25JLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksWUFBWSxDQUFDLEdBQXNCO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxnQkFBZ0IsQ0FBQyxHQUEwQixFQUFFLGVBQXVCLEtBQUs7UUFDOUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE1BQU0sUUFBUSxHQUFVLENBQUMsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUUsR0FBdUIsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQy9GLElBQUksS0FBSyxHQUFvQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEcsSUFBSSxZQUFZLEVBQUU7WUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBbUIsQ0FBQzthQUNoRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxhQUFhLENBQUMsR0FBMEIsRUFBRSxlQUF1QixLQUFLO1FBQzNFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBQ0QsTUFBTSxRQUFRLEdBQVUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBRSxHQUF1QixDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDL0YsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEdBQW9CLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hGLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sU0FBUyxDQUFDO2FBQ2xCO1lBQ0QsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEI7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksZ0JBQWdCLENBQUMsR0FBMEIsRUFBRSxlQUF1QixLQUFLO1FBQzlFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxNQUFNLFFBQVEsR0FBVSxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFFLEdBQXVCLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUMvRixJQUFJLFlBQVksRUFBRTtZQUNoQixPQUFPLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ3ZFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFVLEVBQUUsSUFBcUI7UUFDbEUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxJQUFJLEdBQUcsR0FBb0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQ1YsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNOLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDN0MsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZCxPQUFPO2FBQ1I7WUFDRCxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RELEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxPQUFPO2FBQ1I7WUFDRCxPQUFPO1FBQ1QsQ0FBQyxFQUNELEVBQUUsQ0FBQyxDQUFDO1FBQ04sT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQWhJRDs7R0FFRztBQUM2Qix5QkFBYSxHQUFVLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogRWxlbWVudFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBGaGlyRWxlbWVudCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGaGlyRWxlbWVudEFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJCYXNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogVW5pcXVlIGlkIGZvciB0aGUgZWxlbWVudCB3aXRoaW4gYSByZXNvdXJjZSAoZm9yIGludGVybmFsIHJlZmVyZW5jZXMpLiBUaGlzIG1heSBiZSBhbnkgc3RyaW5nIHZhbHVlIHRoYXQgZG9lcyBub3QgY29udGFpbiBzcGFjZXMuXHJcbiAgICovXHJcbiAgaWQ/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRWxlbWVudC5pZFxyXG4gICAqL1xyXG4gIF9pZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlcmUgY2FuIGJlIG5vIHN0aWdtYSBhc3NvY2lhdGVkIHdpdGggdGhlIHVzZSBvZiBleHRlbnNpb25zIGJ5IGFueSBhcHBsaWNhdGlvbiwgcHJvamVjdCwgb3Igc3RhbmRhcmQgLSByZWdhcmRsZXNzIG9mIHRoZSBpbnN0aXR1dGlvbiBvciBqdXJpc2RpY3Rpb24gdGhhdCB1c2VzIG9yIGRlZmluZXMgdGhlIGV4dGVuc2lvbnMuICBUaGUgdXNlIG9mIGV4dGVuc2lvbnMgaXMgd2hhdCBhbGxvd3MgdGhlIEZISVIgc3BlY2lmaWNhdGlvbiB0byByZXRhaW4gYSBjb3JlIGxldmVsIG9mIHNpbXBsaWNpdHkgZm9yIGV2ZXJ5b25lLlxyXG4gICAqL1xyXG4gIGV4dGVuc2lvbj86IGZoaXIuRXh0ZW5zaW9uQXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgZGVmaW5pdGlvbiBmb3IgYWxsIGVsZW1lbnRzIGluIGEgcmVzb3VyY2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmhpckVsZW1lbnQgZXh0ZW5kcyBmaGlyLkZoaXJCYXNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0VsZW1lbnQnO1xyXG4gIC8qKlxyXG4gICAqIFVuaXF1ZSBpZCBmb3IgdGhlIGVsZW1lbnQgd2l0aGluIGEgcmVzb3VyY2UgKGZvciBpbnRlcm5hbCByZWZlcmVuY2VzKS4gVGhpcyBtYXkgYmUgYW55IHN0cmluZyB2YWx1ZSB0aGF0IGRvZXMgbm90IGNvbnRhaW4gc3BhY2VzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZD86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlcmUgY2FuIGJlIG5vIHN0aWdtYSBhc3NvY2lhdGVkIHdpdGggdGhlIHVzZSBvZiBleHRlbnNpb25zIGJ5IGFueSBhcHBsaWNhdGlvbiwgcHJvamVjdCwgb3Igc3RhbmRhcmQgLSByZWdhcmRsZXNzIG9mIHRoZSBpbnN0aXR1dGlvbiBvciBqdXJpc2RpY3Rpb24gdGhhdCB1c2VzIG9yIGRlZmluZXMgdGhlIGV4dGVuc2lvbnMuICBUaGUgdXNlIG9mIGV4dGVuc2lvbnMgaXMgd2hhdCBhbGxvd3MgdGhlIEZISVIgc3BlY2lmaWNhdGlvbiB0byByZXRhaW4gYSBjb3JlIGxldmVsIG9mIHNpbXBsaWNpdHkgZm9yIGV2ZXJ5b25lLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBleHRlbnNpb246IGZoaXIuRXh0ZW5zaW9uW107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgRmhpckVsZW1lbnQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxGaGlyRWxlbWVudEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydpZCddKSB7IHRoaXMuaWQgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmlkfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19pZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmlkKSB7IHRoaXMuaWQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5faWQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5pZCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9pZCBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZXh0ZW5zaW9uJ10pIHsgdGhpcy5leHRlbnNpb24gPSBzb3VyY2UuZXh0ZW5zaW9uLm1hcCgoeCkgPT4gbmV3IGZoaXIuRXh0ZW5zaW9uKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZXh0ZW5zaW9uID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb246c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24pO1xyXG4gICAgaWYgKGV4cHJlc3Npb24gPT09ICcnKSB7IGV4cHJlc3Npb24gPSAnRWxlbWVudCcgfVxyXG4gICAgaWYgKHRoaXNbXCJpZFwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLmlkLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy5pZCcpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJleHRlbnNpb25cIl0pIHsgdGhpcy5leHRlbnNpb24uZm9yRWFjaCgoeCxpKSA9PiB7IGlzc3Vlcy5wdXNoKC4uLnguZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbitgLmV4dGVuc2lvblske2l9XWApKTsgfSkgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRmx1ZW50LXN0eWxlIGZ1bmN0aW9uIHRvIGFkZCBleHRlbnNpb25zXHJcbiAgICogQHBhcmFtIGV4dFxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRFeHRlbnNpb24oZXh0OmZoaXIuRXh0ZW5zaW9uQXJncyk6Zmhpci5GaGlyRWxlbWVudCB7XHJcbiAgICB0aGlzLmV4dGVuc2lvbi5wdXNoKG5ldyBmaGlyLkV4dGVuc2lvbihleHQpKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBSZW1vdmUgQUxMIGluc3RhbmNlcyBvZiBleHRlbnNpb25zIHdpdGggYSBtYXRjaGluZyBVUkwsIG9wdGlvbmFsbHkgcmVjdXJzZSBpbnRvIGV4dGVuc2lvbi5leHRlbnNpb24uXHJcbiAgICogQHBhcmFtIHVybCBVUkwgb2YgZXh0ZW5zaW9ucyB0byByZW1vdmVcclxuICAgKiBAcGFyYW0gc2VhcmNoTmVzdGVkIElmIHRoZSByZW1vdmFsIHNob3VsZCBzZWFyY2ggZm9yIG5lc3RlZCBleHRlbnNpb25zXHJcbiAgICovXHJcbiAgcHVibGljIHJlbW92ZUV4dGVuc2lvbnModXJsOmZoaXIuRmhpclN0cmluZ3xzdHJpbmcsIHNlYXJjaE5lc3RlZDpib29sZWFuID0gZmFsc2UpOmZoaXIuRmhpckVsZW1lbnQge1xyXG4gICAgaWYgKHRoaXMuZXh0ZW5zaW9uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoVXJsOnN0cmluZyA9ICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykgPyB1cmwgOiAodXJsIGFzIGZoaXIuRmhpclN0cmluZykudmFsdWUgPz8gJyc7XHJcbiAgICBsZXQgY2xlYW46Zmhpci5FeHRlbnNpb25bXSA9IHRoaXMuZXh0ZW5zaW9uLmZpbHRlcigoZXh0KSA9PiAoZXh0Py51cmw/LnZhbHVlID8/ICcnKSAhPT0gbWF0Y2hVcmwpID8/IFtdO1xyXG4gICAgaWYgKHNlYXJjaE5lc3RlZCkge1xyXG4gICAgICBmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCBjbGVhbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNsZWFuW2ldID0gY2xlYW5baV0ucmVtb3ZlRXh0ZW5zaW9ucyhtYXRjaFVybCwgc2VhcmNoTmVzdGVkKSBhcyBmaGlyLkV4dGVuc2lvbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5leHRlbnNpb24gPSBjbGVhbjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgYW4gZXh0ZW5zaW9uIHdpdGggYSBtYXRjaGluZyBVUkwsIG9wdGlvbmFsbHkgcmVjdXJzZSBpbnRvIGV4dGVuc2lvbi5leHRlbnNpb24uXHJcbiAgICogQHBhcmFtIHVybCBVUkwgdG8gc2VhcmNoIGZvclxyXG4gICAqIEBwYXJhbSBzZWFyY2hOZXN0ZWQgSWYgdGhlIHNlYXJjaCBzaG91bGQgbmVzdCBpbnRvIGV4dGVuc2lvbnNcclxuICAgKiBAcmV0dXJucyBUaGUgRkhJUiBFeHRlbnNpb24gaWYgZm91bmQsIG9yIHVuZGVmaW5lZC5cclxuICAgKi9cclxuICBwdWJsaWMgZmluZEV4dGVuc2lvbih1cmw6Zmhpci5GaGlyU3RyaW5nfHN0cmluZywgc2VhcmNoTmVzdGVkOmJvb2xlYW4gPSBmYWxzZSk6Zmhpci5FeHRlbnNpb258dW5kZWZpbmVkIHtcclxuICAgIGlmICh0aGlzLmV4dGVuc2lvbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoVXJsOnN0cmluZyA9ICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykgPyB1cmwgOiAodXJsIGFzIGZoaXIuRmhpclN0cmluZykudmFsdWUgPz8gJyc7XHJcbiAgICBpZiAoc2VhcmNoTmVzdGVkKSB7XHJcbiAgICAgIGNvbnN0IGZsYXQ6Zmhpci5FeHRlbnNpb25bXSA9IEZoaXJFbGVtZW50LnJlY3Vyc2VGb3JFeHRlbnNpb24obWF0Y2hVcmwsIHRoaXMuZXh0ZW5zaW9uKTtcclxuICAgICAgaWYgKGZsYXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmxhdFswXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbi5maW5kKChleHQpID0+IChleHQ/LnVybD8udmFsdWUgPT09IG1hdGNoVXJsKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaW5kIGFsbCBpbnN0YW5jZXMgb2YgYW4gZXh0ZW5zaW9uIHdpdGggYSBtYXRjaGluZyBVUkwsIG9wdGlvbmFsbHkgcmVjdXJzZSBpbnRvIGV4dGVuc2lvbi5leHRlbnNpb24uXHJcbiAgICogQHBhcmFtIHVybCBVUkwgdG8gc2VhcmNoIGZvclxyXG4gICAqIEBwYXJhbSBzZWFyY2hOZXN0ZWQgSWYgdGhlIHNlYXJjaCBzaG91bGQgbmVzdCBpbnRvIGV4dGVuc2lvbnNcclxuICAgKiBAcmV0dXJucyBBIG5ldyBhcnJheSBvZiBGSElSIEV4dGVuc2lvbnMsIHdpdGgganVzdCB0aGUgZGVzaXJlZCBleHRlbnNpb25zXHJcbiAgICovXHJcbiAgcHVibGljIGZpbHRlckV4dGVuc2lvbnModXJsOmZoaXIuRmhpclN0cmluZ3xzdHJpbmcsIHNlYXJjaE5lc3RlZDpib29sZWFuID0gZmFsc2UpOmZoaXIuRXh0ZW5zaW9uW10ge1xyXG4gICAgaWYgKHRoaXMuZXh0ZW5zaW9uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXRjaFVybDpzdHJpbmcgPSAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpID8gdXJsIDogKHVybCBhcyBmaGlyLkZoaXJTdHJpbmcpLnZhbHVlID8/ICcnO1xyXG4gICAgaWYgKHNlYXJjaE5lc3RlZCkge1xyXG4gICAgICByZXR1cm4gRmhpckVsZW1lbnQucmVjdXJzZUZvckV4dGVuc2lvbihtYXRjaFVybCwgdGhpcy5leHRlbnNpb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uLmZpbHRlcigoZXh0KSA9PiAoZXh0Py51cmw/LnZhbHVlID09PSBtYXRjaFVybCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbnRlcm5hbCByZWN1cnNpdmUgc2VhcmNoIGZ1bmN0aW9uXHJcbiAgICogQHBhcmFtIHVybCBcclxuICAgKiBAcGFyYW0gZXh0cyBcclxuICAgKiBAcmV0dXJucyBBIG5ldyBhcnJheSAoZmxhdCkgb2YgbWF0Y2hpbmcgZXh0ZW5zaW9uc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlY3Vyc2VGb3JFeHRlbnNpb24odXJsOnN0cmluZywgZXh0czpmaGlyLkV4dGVuc2lvbltdKTpmaGlyLkV4dGVuc2lvbltdIHtcclxuICAgIGlmICgoIWV4dHMpIHx8IChleHRzLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgbGV0IHZhbDpmaGlyLkV4dGVuc2lvbltdID0gW107XHJcbiAgICBleHRzLmZvckVhY2goXHJcbiAgICAgIChleHQpID0+IHtcclxuICAgICAgICBpZiAoZXh0ICYmIGV4dC51cmwgJiYgKGV4dC51cmwudmFsdWUgPT09IHVybCkpIHtcclxuICAgICAgICAgIHZhbC5wdXNoKGV4dCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChleHQgJiYgZXh0LmV4dGVuc2lvbiAmJiAoZXh0LmV4dGVuc2lvbi5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgdmFsLnB1c2goLi4udGhpcy5yZWN1cnNlRm9yRXh0ZW5zaW9uKHVybCwgZXh0LmV4dGVuc2lvbikpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0sXHJcbiAgICAgIFtdKTtcclxuICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG59XHJcbiJdfQ==