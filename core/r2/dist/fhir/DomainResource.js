// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
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
            this.text = new fhir.Narrative(source.text, options);
        }
        if (source['contained']) {
            this.contained = [];
            source.contained.forEach((x) => {
                var r = fhir.resourceFactory(x, options);
                if (r) {
                    this.contained.push(r);
                }
            });
        }
        else {
            this.contained = [];
        }
        if (source['extension']) {
            this.extension = source.extension.map((x) => new fhir.Extension(x, options));
        }
        else {
            this.extension = [];
        }
        if (source['modifierExtension']) {
            this.modifierExtension = source.modifierExtension.map((x) => new fhir.Extension(x, options));
        }
        else {
            this.modifierExtension = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'DomainResource';
        }
        iss.push(...this.vOS('text', exp));
        iss.push(...this.vOA('contained', exp));
        iss.push(...this.vOA('extension', exp));
        iss.push(...this.vOA('modifierExtension', exp));
        return iss;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluUmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0RvbWFpblJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUVoQyxPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQXdCbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sY0FBZSxTQUFRLElBQUksQ0FBQyxRQUFRO0lBcUIvQzs7T0FFRztJQUNILFlBQVksU0FBcUMsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDM0YsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUM3RSxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNwQixNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUM3QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLEVBQUU7b0JBQUUsSUFBSSxDQUFDLFNBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQUU7WUFDckMsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUNJO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM3QixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3JHO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM3QixJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQzdIO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztTQUFFO0lBQ3ZDLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLEdBQUcsR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQTtTQUFFO1FBQzFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0MsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLFlBQVksQ0FBQyxHQUFzQjtRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksZ0JBQWdCLENBQUMsR0FBMEIsRUFBRSxlQUF1QixLQUFLO1FBQzlFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxNQUFNLFFBQVEsR0FBVSxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFFLEdBQXVCLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUMvRixJQUFJLEtBQUssR0FBb0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLEtBQUssUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hHLElBQUksWUFBWSxFQUFFO1lBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFZLENBQW1CLENBQUM7YUFDaEY7U0FDRjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksYUFBYSxDQUFDLEdBQTBCLEVBQUUsZUFBdUIsS0FBSztRQUMzRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMvQixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELE1BQU0sUUFBUSxHQUFVLENBQUMsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUUsR0FBdUIsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQy9GLElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxHQUFvQixjQUFjLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzRixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNyQixPQUFPLFNBQVMsQ0FBQzthQUNsQjtZQUNELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLGdCQUFnQixDQUFDLEdBQTBCLEVBQUUsZUFBdUIsS0FBSztRQUM5RSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMvQixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsTUFBTSxRQUFRLEdBQVUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBRSxHQUF1QixDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDL0YsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxjQUFjLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyRTtRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUN2RSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBVSxFQUFFLElBQXFCO1FBQ2xFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNsQyxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsSUFBSSxHQUFHLEdBQW9CLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUNWLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDTixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQzdDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2QsT0FBTzthQUNSO1lBQ0QsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUN0RCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDMUQsT0FBTzthQUNSO1lBQ0QsT0FBTztRQUNULENBQUMsRUFDRCxFQUFFLENBQUMsQ0FBQztRQUNOLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUFoSkQ7O0dBRUc7QUFDNkIsNEJBQWEsR0FBVSxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMi5jb3JlIHZlcnNpb246IDEuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogRG9tYWluUmVzb3VyY2VcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgRG9tYWluUmVzb3VyY2UgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9tYWluUmVzb3VyY2VBcmdzIGV4dGVuZHMgZmhpci5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEEgaHVtYW4tcmVhZGFibGUgbmFycmF0aXZlIHRoYXQgY29udGFpbnMgYSBzdW1tYXJ5IG9mIHRoZSByZXNvdXJjZSwgYW5kIG1heSBiZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgY29udGVudCBvZiB0aGUgcmVzb3VyY2UgdG8gYSBodW1hbi4gVGhlIG5hcnJhdGl2ZSBuZWVkIG5vdCBlbmNvZGUgYWxsIHRoZSBzdHJ1Y3R1cmVkIGRhdGEsIGJ1dCBpcyByZXF1aXJlZCB0byBjb250YWluIHN1ZmZpY2llbnQgZGV0YWlsIHRvIG1ha2UgaXQgXCJjbGluaWNhbGx5IHNhZmVcIiBmb3IgYSBodW1hbiB0byBqdXN0IHJlYWQgdGhlIG5hcnJhdGl2ZS4gUmVzb3VyY2UgZGVmaW5pdGlvbnMgbWF5IGRlZmluZSB3aGF0IGNvbnRlbnQgc2hvdWxkIGJlIHJlcHJlc2VudGVkIGluIHRoZSBuYXJyYXRpdmUgdG8gZW5zdXJlIGNsaW5pY2FsIHNhZmV0eS5cclxuICAgKi9cclxuICB0ZXh0PzogZmhpci5OYXJyYXRpdmVBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGVzZSByZXNvdXJjZXMgZG8gbm90IGhhdmUgYW4gaW5kZXBlbmRlbnQgZXhpc3RlbmNlIGFwYXJ0IGZyb20gdGhlIHJlc291cmNlIHRoYXQgY29udGFpbnMgdGhlbSAtIHRoZXkgY2Fubm90IGJlIGlkZW50aWZpZWQgaW5kZXBlbmRlbnRseSwgYW5kIG5vciBjYW4gdGhleSBoYXZlIHRoZWlyIG93biBpbmRlcGVuZGVudCB0cmFuc2FjdGlvbiBzY29wZS5cclxuICAgKi9cclxuICBjb250YWluZWQ/OiBmaGlyLlJlc291cmNlQXJnc1tdfGFueVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBNYXkgYmUgdXNlZCB0byByZXByZXNlbnQgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiB0aGF0IGlzIG5vdCBwYXJ0IG9mIHRoZSBiYXNpYyBkZWZpbml0aW9uIG9mIHRoZSByZXNvdXJjZS4gSW4gb3JkZXIgdG8gbWFrZSB0aGUgdXNlIG9mIGV4dGVuc2lvbnMgc2FmZSBhbmQgbWFuYWdlYWJsZSwgdGhlcmUgaXMgYSBzdHJpY3Qgc2V0IG9mIGdvdmVybmFuY2UgIGFwcGxpZWQgdG8gdGhlIGRlZmluaXRpb24gYW5kIHVzZSBvZiBleHRlbnNpb25zLiBUaG91Z2ggYW55IGltcGxlbWVudGVyIGlzIGFsbG93ZWQgdG8gZGVmaW5lIGFuIGV4dGVuc2lvbiwgdGhlcmUgaXMgYSBzZXQgb2YgcmVxdWlyZW1lbnRzIHRoYXQgU0hBTEwgYmUgbWV0IGFzIHBhcnQgb2YgdGhlIGRlZmluaXRpb24gb2YgdGhlIGV4dGVuc2lvbi5cclxuICAgKi9cclxuICBleHRlbnNpb24/OiBmaGlyLkV4dGVuc2lvbkFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogTWF5IGJlIHVzZWQgdG8gcmVwcmVzZW50IGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdGhhdCBpcyBub3QgcGFydCBvZiB0aGUgYmFzaWMgZGVmaW5pdGlvbiBvZiB0aGUgcmVzb3VyY2UsIGFuZCB0aGF0IG1vZGlmaWVzIHRoZSB1bmRlcnN0YW5kaW5nIG9mIHRoZSBlbGVtZW50IHRoYXQgY29udGFpbnMgaXQuIFVzdWFsbHkgbW9kaWZpZXIgZWxlbWVudHMgcHJvdmlkZSBuZWdhdGlvbiBvciBxdWFsaWZpY2F0aW9uLiBJbiBvcmRlciB0byBtYWtlIHRoZSB1c2Ugb2YgZXh0ZW5zaW9ucyBzYWZlIGFuZCBtYW5hZ2VhYmxlLCB0aGVyZSBpcyBhIHN0cmljdCBzZXQgb2YgZ292ZXJuYW5jZSBhcHBsaWVkIHRvIHRoZSBkZWZpbml0aW9uIGFuZCB1c2Ugb2YgZXh0ZW5zaW9ucy4gVGhvdWdoIGFueSBpbXBsZW1lbnRlciBpcyBhbGxvd2VkIHRvIGRlZmluZSBhbiBleHRlbnNpb24sIHRoZXJlIGlzIGEgc2V0IG9mIHJlcXVpcmVtZW50cyB0aGF0IFNIQUxMIGJlIG1ldCBhcyBwYXJ0IG9mIHRoZSBkZWZpbml0aW9uIG9mIHRoZSBleHRlbnNpb24uIEFwcGxpY2F0aW9ucyBwcm9jZXNzaW5nIGEgcmVzb3VyY2UgYXJlIHJlcXVpcmVkIHRvIGNoZWNrIGZvciBtb2RpZmllciBleHRlbnNpb25zLlxyXG4gICAqL1xyXG4gIG1vZGlmaWVyRXh0ZW5zaW9uPzogZmhpci5FeHRlbnNpb25BcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSByZXNvdXJjZSB0aGF0IGluY2x1ZGVzIG5hcnJhdGl2ZSwgZXh0ZW5zaW9ucywgYW5kIGNvbnRhaW5lZCByZXNvdXJjZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRG9tYWluUmVzb3VyY2UgZXh0ZW5kcyBmaGlyLlJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0RvbWFpblJlc291cmNlJztcclxuICAvKipcclxuICAgKiBBIGh1bWFuLXJlYWRhYmxlIG5hcnJhdGl2ZSB0aGF0IGNvbnRhaW5zIGEgc3VtbWFyeSBvZiB0aGUgcmVzb3VyY2UsIGFuZCBtYXkgYmUgdXNlZCB0byByZXByZXNlbnQgdGhlIGNvbnRlbnQgb2YgdGhlIHJlc291cmNlIHRvIGEgaHVtYW4uIFRoZSBuYXJyYXRpdmUgbmVlZCBub3QgZW5jb2RlIGFsbCB0aGUgc3RydWN0dXJlZCBkYXRhLCBidXQgaXMgcmVxdWlyZWQgdG8gY29udGFpbiBzdWZmaWNpZW50IGRldGFpbCB0byBtYWtlIGl0IFwiY2xpbmljYWxseSBzYWZlXCIgZm9yIGEgaHVtYW4gdG8ganVzdCByZWFkIHRoZSBuYXJyYXRpdmUuIFJlc291cmNlIGRlZmluaXRpb25zIG1heSBkZWZpbmUgd2hhdCBjb250ZW50IHNob3VsZCBiZSByZXByZXNlbnRlZCBpbiB0aGUgbmFycmF0aXZlIHRvIGVuc3VyZSBjbGluaWNhbCBzYWZldHkuXHJcbiAgICovXHJcbiAgcHVibGljIHRleHQ/OiBmaGlyLk5hcnJhdGl2ZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlc2UgcmVzb3VyY2VzIGRvIG5vdCBoYXZlIGFuIGluZGVwZW5kZW50IGV4aXN0ZW5jZSBhcGFydCBmcm9tIHRoZSByZXNvdXJjZSB0aGF0IGNvbnRhaW5zIHRoZW0gLSB0aGV5IGNhbm5vdCBiZSBpZGVudGlmaWVkIGluZGVwZW5kZW50bHksIGFuZCBub3IgY2FuIHRoZXkgaGF2ZSB0aGVpciBvd24gaW5kZXBlbmRlbnQgdHJhbnNhY3Rpb24gc2NvcGUuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnRhaW5lZDogZmhpci5GaGlyUmVzb3VyY2VbXTtcclxuICAvKipcclxuICAgKiBNYXkgYmUgdXNlZCB0byByZXByZXNlbnQgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiB0aGF0IGlzIG5vdCBwYXJ0IG9mIHRoZSBiYXNpYyBkZWZpbml0aW9uIG9mIHRoZSByZXNvdXJjZS4gSW4gb3JkZXIgdG8gbWFrZSB0aGUgdXNlIG9mIGV4dGVuc2lvbnMgc2FmZSBhbmQgbWFuYWdlYWJsZSwgdGhlcmUgaXMgYSBzdHJpY3Qgc2V0IG9mIGdvdmVybmFuY2UgIGFwcGxpZWQgdG8gdGhlIGRlZmluaXRpb24gYW5kIHVzZSBvZiBleHRlbnNpb25zLiBUaG91Z2ggYW55IGltcGxlbWVudGVyIGlzIGFsbG93ZWQgdG8gZGVmaW5lIGFuIGV4dGVuc2lvbiwgdGhlcmUgaXMgYSBzZXQgb2YgcmVxdWlyZW1lbnRzIHRoYXQgU0hBTEwgYmUgbWV0IGFzIHBhcnQgb2YgdGhlIGRlZmluaXRpb24gb2YgdGhlIGV4dGVuc2lvbi5cclxuICAgKi9cclxuICBwdWJsaWMgZXh0ZW5zaW9uOiBmaGlyLkV4dGVuc2lvbltdO1xyXG4gIC8qKlxyXG4gICAqIE1heSBiZSB1c2VkIHRvIHJlcHJlc2VudCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRoYXQgaXMgbm90IHBhcnQgb2YgdGhlIGJhc2ljIGRlZmluaXRpb24gb2YgdGhlIHJlc291cmNlLCBhbmQgdGhhdCBtb2RpZmllcyB0aGUgdW5kZXJzdGFuZGluZyBvZiB0aGUgZWxlbWVudCB0aGF0IGNvbnRhaW5zIGl0LiBVc3VhbGx5IG1vZGlmaWVyIGVsZW1lbnRzIHByb3ZpZGUgbmVnYXRpb24gb3IgcXVhbGlmaWNhdGlvbi4gSW4gb3JkZXIgdG8gbWFrZSB0aGUgdXNlIG9mIGV4dGVuc2lvbnMgc2FmZSBhbmQgbWFuYWdlYWJsZSwgdGhlcmUgaXMgYSBzdHJpY3Qgc2V0IG9mIGdvdmVybmFuY2UgYXBwbGllZCB0byB0aGUgZGVmaW5pdGlvbiBhbmQgdXNlIG9mIGV4dGVuc2lvbnMuIFRob3VnaCBhbnkgaW1wbGVtZW50ZXIgaXMgYWxsb3dlZCB0byBkZWZpbmUgYW4gZXh0ZW5zaW9uLCB0aGVyZSBpcyBhIHNldCBvZiByZXF1aXJlbWVudHMgdGhhdCBTSEFMTCBiZSBtZXQgYXMgcGFydCBvZiB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgZXh0ZW5zaW9uLiBBcHBsaWNhdGlvbnMgcHJvY2Vzc2luZyBhIHJlc291cmNlIGFyZSByZXF1aXJlZCB0byBjaGVjayBmb3IgbW9kaWZpZXIgZXh0ZW5zaW9ucy5cclxuICAgKi9cclxuICBwdWJsaWMgbW9kaWZpZXJFeHRlbnNpb246IGZoaXIuRXh0ZW5zaW9uW107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgRG9tYWluUmVzb3VyY2UgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxEb21haW5SZXNvdXJjZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyd0ZXh0J10pIHsgdGhpcy50ZXh0ID0gbmV3IGZoaXIuTmFycmF0aXZlKHNvdXJjZS50ZXh0LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY29udGFpbmVkJ10pIHtcclxuICAgICAgdGhpcy5jb250YWluZWQgPSBbXTtcclxuICAgICAgc291cmNlLmNvbnRhaW5lZC5mb3JFYWNoKCh4KSA9PiB7XHJcbiAgICAgICAgdmFyIHIgPSBmaGlyLnJlc291cmNlRmFjdG9yeSh4LCBvcHRpb25zKTtcclxuICAgICAgICBpZiAocikgeyB0aGlzLmNvbnRhaW5lZCEucHVzaChyKTsgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgeyB0aGlzLmNvbnRhaW5lZCA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydleHRlbnNpb24nXSkgeyB0aGlzLmV4dGVuc2lvbiA9IHNvdXJjZS5leHRlbnNpb24ubWFwKCh4KSA9PiBuZXcgZmhpci5FeHRlbnNpb24oeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5leHRlbnNpb24gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnbW9kaWZpZXJFeHRlbnNpb24nXSkgeyB0aGlzLm1vZGlmaWVyRXh0ZW5zaW9uID0gc291cmNlLm1vZGlmaWVyRXh0ZW5zaW9uLm1hcCgoeCkgPT4gbmV3IGZoaXIuRXh0ZW5zaW9uKHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMubW9kaWZpZXJFeHRlbnNpb24gPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0RvbWFpblJlc291cmNlJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndGV4dCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnY29udGFpbmVkJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdleHRlbnNpb24nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ21vZGlmaWVyRXh0ZW5zaW9uJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZsdWVudC1zdHlsZSBmdW5jdGlvbiB0byBhZGQgZXh0ZW5zaW9uc1xyXG4gICAqIEBwYXJhbSBleHRcclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBwdWJsaWMgYWRkRXh0ZW5zaW9uKGV4dDpmaGlyLkV4dGVuc2lvbkFyZ3MpOkRvbWFpblJlc291cmNlIHtcclxuICAgIHRoaXMuZXh0ZW5zaW9uLnB1c2gobmV3IGZoaXIuRXh0ZW5zaW9uKGV4dCkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBBTEwgaW5zdGFuY2VzIG9mIGV4dGVuc2lvbnMgd2l0aCBhIG1hdGNoaW5nIFVSTCwgb3B0aW9uYWxseSByZWN1cnNlIGludG8gZXh0ZW5zaW9uLmV4dGVuc2lvbi5cclxuICAgKiBAcGFyYW0gdXJsIFVSTCBvZiBleHRlbnNpb25zIHRvIHJlbW92ZVxyXG4gICAqIEBwYXJhbSBzZWFyY2hOZXN0ZWQgSWYgdGhlIHJlbW92YWwgc2hvdWxkIHNlYXJjaCBmb3IgbmVzdGVkIGV4dGVuc2lvbnNcclxuICAgKi9cclxuICBwdWJsaWMgcmVtb3ZlRXh0ZW5zaW9ucyh1cmw6Zmhpci5GaGlyU3RyaW5nfHN0cmluZywgc2VhcmNoTmVzdGVkOmJvb2xlYW4gPSBmYWxzZSk6RG9tYWluUmVzb3VyY2Uge1xyXG4gICAgaWYgKHRoaXMuZXh0ZW5zaW9uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoVXJsOnN0cmluZyA9ICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykgPyB1cmwgOiAodXJsIGFzIGZoaXIuRmhpclN0cmluZykudmFsdWUgPz8gJyc7XHJcbiAgICBsZXQgY2xlYW46Zmhpci5FeHRlbnNpb25bXSA9IHRoaXMuZXh0ZW5zaW9uLmZpbHRlcigoZXh0KSA9PiAoZXh0Py51cmw/LnZhbHVlID8/ICcnKSAhPT0gbWF0Y2hVcmwpID8/IFtdO1xyXG4gICAgaWYgKHNlYXJjaE5lc3RlZCkge1xyXG4gICAgICBmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCBjbGVhbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNsZWFuW2ldID0gY2xlYW5baV0ucmVtb3ZlRXh0ZW5zaW9ucyhtYXRjaFVybCwgc2VhcmNoTmVzdGVkKSBhcyBmaGlyLkV4dGVuc2lvbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5leHRlbnNpb24gPSBjbGVhbjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgYW4gZXh0ZW5zaW9uIHdpdGggYSBtYXRjaGluZyBVUkwsIG9wdGlvbmFsbHkgcmVjdXJzZSBpbnRvIGV4dGVuc2lvbi5leHRlbnNpb24uXHJcbiAgICogQHBhcmFtIHVybCBVUkwgdG8gc2VhcmNoIGZvclxyXG4gICAqIEBwYXJhbSBzZWFyY2hOZXN0ZWQgSWYgdGhlIHNlYXJjaCBzaG91bGQgbmVzdCBpbnRvIGV4dGVuc2lvbnNcclxuICAgKiBAcmV0dXJucyBUaGUgRkhJUiBFeHRlbnNpb24gaWYgZm91bmQsIG9yIHVuZGVmaW5lZC5cclxuICAgKi9cclxuICBwdWJsaWMgZmluZEV4dGVuc2lvbih1cmw6Zmhpci5GaGlyU3RyaW5nfHN0cmluZywgc2VhcmNoTmVzdGVkOmJvb2xlYW4gPSBmYWxzZSk6Zmhpci5FeHRlbnNpb258dW5kZWZpbmVkIHtcclxuICAgIGlmICh0aGlzLmV4dGVuc2lvbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoVXJsOnN0cmluZyA9ICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykgPyB1cmwgOiAodXJsIGFzIGZoaXIuRmhpclN0cmluZykudmFsdWUgPz8gJyc7XHJcbiAgICBpZiAoc2VhcmNoTmVzdGVkKSB7XHJcbiAgICAgIGNvbnN0IGZsYXQ6Zmhpci5FeHRlbnNpb25bXSA9IERvbWFpblJlc291cmNlLnJlY3Vyc2VGb3JFeHRlbnNpb24obWF0Y2hVcmwsIHRoaXMuZXh0ZW5zaW9uKTtcclxuICAgICAgaWYgKGZsYXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmxhdFswXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbi5maW5kKChleHQpID0+IChleHQ/LnVybD8udmFsdWUgPT09IG1hdGNoVXJsKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaW5kIGFsbCBpbnN0YW5jZXMgb2YgYW4gZXh0ZW5zaW9uIHdpdGggYSBtYXRjaGluZyBVUkwsIG9wdGlvbmFsbHkgcmVjdXJzZSBpbnRvIGV4dGVuc2lvbi5leHRlbnNpb24uXHJcbiAgICogQHBhcmFtIHVybCBVUkwgdG8gc2VhcmNoIGZvclxyXG4gICAqIEBwYXJhbSBzZWFyY2hOZXN0ZWQgSWYgdGhlIHNlYXJjaCBzaG91bGQgbmVzdCBpbnRvIGV4dGVuc2lvbnNcclxuICAgKiBAcmV0dXJucyBBIG5ldyBhcnJheSBvZiBGSElSIEV4dGVuc2lvbnMsIHdpdGgganVzdCB0aGUgZGVzaXJlZCBleHRlbnNpb25zXHJcbiAgICovXHJcbiAgcHVibGljIGZpbHRlckV4dGVuc2lvbnModXJsOmZoaXIuRmhpclN0cmluZ3xzdHJpbmcsIHNlYXJjaE5lc3RlZDpib29sZWFuID0gZmFsc2UpOmZoaXIuRXh0ZW5zaW9uW10ge1xyXG4gICAgaWYgKHRoaXMuZXh0ZW5zaW9uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXRjaFVybDpzdHJpbmcgPSAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpID8gdXJsIDogKHVybCBhcyBmaGlyLkZoaXJTdHJpbmcpLnZhbHVlID8/ICcnO1xyXG4gICAgaWYgKHNlYXJjaE5lc3RlZCkge1xyXG4gICAgICByZXR1cm4gRG9tYWluUmVzb3VyY2UucmVjdXJzZUZvckV4dGVuc2lvbihtYXRjaFVybCwgdGhpcy5leHRlbnNpb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uLmZpbHRlcigoZXh0KSA9PiAoZXh0Py51cmw/LnZhbHVlID09PSBtYXRjaFVybCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbnRlcm5hbCByZWN1cnNpdmUgc2VhcmNoIGZ1bmN0aW9uXHJcbiAgICogQHBhcmFtIHVybCBcclxuICAgKiBAcGFyYW0gZXh0cyBcclxuICAgKiBAcmV0dXJucyBBIG5ldyBhcnJheSAoZmxhdCkgb2YgbWF0Y2hpbmcgZXh0ZW5zaW9uc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlY3Vyc2VGb3JFeHRlbnNpb24odXJsOnN0cmluZywgZXh0czpmaGlyLkV4dGVuc2lvbltdKTpmaGlyLkV4dGVuc2lvbltdIHtcclxuICAgIGlmICgoIWV4dHMpIHx8IChleHRzLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgbGV0IHZhbDpmaGlyLkV4dGVuc2lvbltdID0gW107XHJcbiAgICBleHRzLmZvckVhY2goXHJcbiAgICAgIChleHQpID0+IHtcclxuICAgICAgICBpZiAoZXh0ICYmIGV4dC51cmwgJiYgKGV4dC51cmwudmFsdWUgPT09IHVybCkpIHtcclxuICAgICAgICAgIHZhbC5wdXNoKGV4dCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChleHQgJiYgZXh0LmV4dGVuc2lvbiAmJiAoZXh0LmV4dGVuc2lvbi5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgdmFsLnB1c2goLi4udGhpcy5yZWN1cnNlRm9yRXh0ZW5zaW9uKHVybCwgZXh0LmV4dGVuc2lvbikpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0sXHJcbiAgICAgIFtdKTtcclxuICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=