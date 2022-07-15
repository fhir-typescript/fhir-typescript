// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir.js';
export class FhirPrimitive extends fhir.FhirBase {
    /**
     * Constructor for FHIR primitive type elements
     * @param value
     * @param id
     * @param extension
     * @param options
     */
    constructor(source = {}, options = {}) {
        super();
        /**
          * Additional content defined by implementations
          */
        this.extension = [];
        if (source) {
            if ((source.value !== undefined) && (source.value.constructor) && (source.value.constructor['_fts_dataType'])) {
                this.value = source.value.value ?? null;
                this.id = source.value.id ?? undefined;
                if ((source.value.extension) && (source.value.extension.length > 0)) {
                    this.extension = [];
                    source.value.extension.forEach((e) => {
                        if (e) {
                            this.extension.push(new fhir.Extension(e, options));
                        }
                    });
                }
            }
            else if (source.value !== undefined) {
                this.value = source.value;
            }
            if (source.id) {
                this.id = source.id;
            }
            if ((source.extension) && (source.extension.length > 0)) {
                if (!this.extension) {
                    this.extension = [];
                }
                source.extension.forEach((e) => {
                    if (e) {
                        this.extension.push(new fhir.Extension(e, options));
                    }
                });
            }
        }
        else {
            this.extension = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if ((this.value === undefined) && (!this.id) && ((!this.extension) || (this.extension.length === 0))) {
            issues.push({
                severity: 'error',
                code: 'required',
                details: { text: 'Primitive values must have a value, id, or extensions.' },
                expression: [exp],
            });
        }
        return issues;
    }
    /**
     * Fluent-style function to add extended primitive properties
     * @param source
     */
    addExtendedProperties(source = {}) {
        if (source.id) {
            this.id = source.id.toString();
        }
        if (source.extension) {
            source.extension.forEach((x) => {
                this.extension.push(new fhir.Extension(x));
            });
        }
        return this;
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
            const flat = FhirPrimitive.recurseForExtension(matchUrl, this.extension);
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
            return FhirPrimitive.recurseForExtension(matchUrl, this.extension);
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
FhirPrimitive._fts_isPrimitive = true;
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirPrimitive._fts_dataType = 'PrimitiveType';
FhirPrimitive._fts_jsonType = 'any';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpclByaW1pdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRmhpclByaW1pdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFtQm5DLE1BQU0sT0FBTyxhQUFjLFNBQVEsSUFBSSxDQUFDLFFBQVE7SUF1QjlDOzs7Ozs7T0FNRztJQUNILFlBQVksU0FBb0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDMUYsS0FBSyxFQUFFLENBQUM7UUFiVjs7WUFFSTtRQUNKLGNBQVMsR0FBb0IsRUFBRSxDQUFDO1FBVzlCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRTtnQkFDN0csSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksU0FBUyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDbkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7b0JBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFO3dCQUN4QyxJQUFJLENBQUMsRUFBRTs0QkFBRSxJQUFJLENBQUMsU0FBVSxDQUFDLElBQUksQ0FBQyxJQUFJ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UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FDVixDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ04sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLE9BQU87YUFDUjtZQUNELElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDdEQsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELE9BQU87YUFDUjtZQUNELE9BQU87UUFDVCxDQUFDLEVBQ0QsRUFBRSxDQUFDLENBQUM7UUFDTixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBcExzQiw4QkFBZ0IsR0FBVyxJQUFJLENBQUM7QUFDdkQ7O0dBRUc7QUFDNkIsMkJBQWEsR0FBUSxlQUFlLENBQUM7QUFDOUMsMkJBQWEsR0FBUSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaGlyUHJpbWl0aXZlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogVmFsdWUgb2YgdGhlIHByaW1pdGl2ZSAtIGNvbnN0cmFpbmVkIGJ5IGRlY2VuZGFudCBjbGFzc2VzLlxyXG4gICAqL1xyXG4gICB2YWx1ZT86YW55fG51bGx8dW5kZWZpbmVkO1xyXG5cclxuICAgLyoqXHJcbiAgICAgKiBVbmlxdWUgaWQgZm9yIGludGVyLWVsZW1lbnQgcmVmZXJlbmNpbmdcclxuICAgICAqL1xyXG4gICBpZD86c3RyaW5nfHVuZGVmaW5lZDtcclxuIFxyXG4gICAvKipcclxuICAgICAqIEFkZGl0aW9uYWwgY29udGVudCBkZWZpbmVkIGJ5IGltcGxlbWVudGF0aW9uc1xyXG4gICAgICovXHJcbiAgIGV4dGVuc2lvbj86KGZoaXIuRXh0ZW5zaW9ufG51bGwpW118dW5kZWZpbmVkO1xyXG4gfVxyXG5cclxuZXhwb3J0IGNsYXNzIEZoaXJQcmltaXRpdmUgZXh0ZW5kcyBmaGlyLkZoaXJCYXNlICB7XHJcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBfZnRzX2lzUHJpbWl0aXZlOmJvb2xlYW4gPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmc9J1ByaW1pdGl2ZVR5cGUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgX2Z0c19qc29uVHlwZTpzdHJpbmc9J2FueSc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbHVlIG9mIHRoZSBwcmltaXRpdmUgLSBjb25zdHJhaW5lZCBieSBkZWNlbmRhbnQgY2xhc3Nlcy5cclxuICAgKi9cclxuICB2YWx1ZT86Ym9vbGVhbnxudW1iZXJ8YmlnaW50fHN0cmluZ3xudWxsfHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqXHJcbiAgICAqIFVuaXF1ZSBpZCBmb3IgaW50ZXItZWxlbWVudCByZWZlcmVuY2luZ1xyXG4gICAgKi9cclxuICBpZD86c3RyaW5nfHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqXHJcbiAgICAqIEFkZGl0aW9uYWwgY29udGVudCBkZWZpbmVkIGJ5IGltcGxlbWVudGF0aW9uc1xyXG4gICAgKi9cclxuICBleHRlbnNpb246Zmhpci5FeHRlbnNpb25bXSA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvciBmb3IgRkhJUiBwcmltaXRpdmUgdHlwZSBlbGVtZW50c1xyXG4gICAqIEBwYXJhbSB2YWx1ZSBcclxuICAgKiBAcGFyYW0gaWQgXHJcbiAgICogQHBhcmFtIGV4dGVuc2lvbiBcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxGaGlyUHJpbWl0aXZlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGlmIChzb3VyY2UpIHtcclxuICAgICAgaWYgKChzb3VyY2UudmFsdWUgIT09IHVuZGVmaW5lZCkgJiYgKHNvdXJjZS52YWx1ZS5jb25zdHJ1Y3RvcikgJiYgKHNvdXJjZS52YWx1ZS5jb25zdHJ1Y3RvclsnX2Z0c19kYXRhVHlwZSddKSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBzb3VyY2UudmFsdWUudmFsdWUgPz8gbnVsbDtcclxuICAgICAgICB0aGlzLmlkID0gc291cmNlLnZhbHVlLmlkID8/IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoKHNvdXJjZS52YWx1ZS5leHRlbnNpb24pICYmIChzb3VyY2UudmFsdWUuZXh0ZW5zaW9uLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICB0aGlzLmV4dGVuc2lvbiA9IFtdO1xyXG4gICAgICAgICAgc291cmNlLnZhbHVlLmV4dGVuc2lvbiEuZm9yRWFjaCgoZTphbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUpIHsgdGhpcy5leHRlbnNpb24hLnB1c2gobmV3IGZoaXIuRXh0ZW5zaW9uKGUsIG9wdGlvbnMpKTsgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHNvdXJjZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHNvdXJjZS52YWx1ZTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpZiAoc291cmNlLmlkKSB7IHRoaXMuaWQgPSBzb3VyY2UuaWQ7IH1cclxuICAgICAgaWYgKChzb3VyY2UuZXh0ZW5zaW9uKSAmJiAoc291cmNlLmV4dGVuc2lvbi5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgIGlmICghdGhpcy5leHRlbnNpb24pIHsgdGhpcy5leHRlbnNpb24gPSBbXTsgfVxyXG4gICAgICAgIHNvdXJjZS5leHRlbnNpb24hLmZvckVhY2goKGU6YW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoZSkgeyB0aGlzLmV4dGVuc2lvbiEucHVzaChuZXcgZmhpci5FeHRlbnNpb24oZSwgb3B0aW9ucykpOyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZXh0ZW5zaW9uID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKCh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQpICYmICghdGhpcy5pZCkgJiYgKCghdGhpcy5leHRlbnNpb24pIHx8ICh0aGlzLmV4dGVuc2lvbi5sZW5ndGggPT09IDApKSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7XHJcbiAgICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsXHJcbiAgICAgICAgY29kZTogJ3JlcXVpcmVkJyxcclxuICAgICAgICBkZXRhaWxzOiB7IHRleHQ6ICdQcmltaXRpdmUgdmFsdWVzIG11c3QgaGF2ZSBhIHZhbHVlLCBpZCwgb3IgZXh0ZW5zaW9ucy4nIH0sXHJcbiAgICAgICAgZXhwcmVzc2lvbjogW2V4cF0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZsdWVudC1zdHlsZSBmdW5jdGlvbiB0byBhZGQgZXh0ZW5kZWQgcHJpbWl0aXZlIHByb3BlcnRpZXNcclxuICAgKiBAcGFyYW0gc291cmNlIFxyXG4gICAqL1xyXG4gICBwdWJsaWMgYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZTpmaGlyLkZoaXJFbGVtZW50QXJncyA9IHt9KTpmaGlyLkZoaXJQcmltaXRpdmUge1xyXG4gICAgaWYgKHNvdXJjZS5pZCkgeyB0aGlzLmlkID0gc291cmNlLmlkLnRvU3RyaW5nKCk7IH1cclxuICAgIGlmIChzb3VyY2UuZXh0ZW5zaW9uKSB7XHJcbiAgICAgIHNvdXJjZS5leHRlbnNpb24uZm9yRWFjaCgoeCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uLnB1c2gobmV3IGZoaXIuRXh0ZW5zaW9uKHgpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZsdWVudC1zdHlsZSBmdW5jdGlvbiB0byBhZGQgZXh0ZW5zaW9uc1xyXG4gICAqIEBwYXJhbSBleHRcclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICAgcHVibGljIGFkZEV4dGVuc2lvbihleHQ6Zmhpci5FeHRlbnNpb25BcmdzKTpmaGlyLkZoaXJQcmltaXRpdmUge1xyXG4gICAgdGhpcy5leHRlbnNpb24ucHVzaChuZXcgZmhpci5FeHRlbnNpb24oZXh0KSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIEFMTCBpbnN0YW5jZXMgb2YgZXh0ZW5zaW9ucyB3aXRoIGEgbWF0Y2hpbmcgVVJMLCBvcHRpb25hbGx5IHJlY3Vyc2UgaW50byBleHRlbnNpb24uZXh0ZW5zaW9uLlxyXG4gICAqIEBwYXJhbSB1cmwgVVJMIG9mIGV4dGVuc2lvbnMgdG8gcmVtb3ZlXHJcbiAgICogQHBhcmFtIHNlYXJjaE5lc3RlZCBJZiB0aGUgcmVtb3ZhbCBzaG91bGQgc2VhcmNoIGZvciBuZXN0ZWQgZXh0ZW5zaW9uc1xyXG4gICAqL1xyXG4gIHB1YmxpYyByZW1vdmVFeHRlbnNpb25zKHVybDpmaGlyLkZoaXJTdHJpbmd8c3RyaW5nLCBzZWFyY2hOZXN0ZWQ6Ym9vbGVhbiA9IGZhbHNlKTpmaGlyLkZoaXJQcmltaXRpdmUge1xyXG4gICAgaWYgKHRoaXMuZXh0ZW5zaW9uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoVXJsOnN0cmluZyA9ICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykgPyB1cmwgOiAodXJsIGFzIGZoaXIuRmhpclN0cmluZykudmFsdWUgPz8gJyc7XHJcbiAgICBsZXQgY2xlYW46Zmhpci5FeHRlbnNpb25bXSA9IHRoaXMuZXh0ZW5zaW9uLmZpbHRlcigoZXh0KSA9PiAoZXh0Py51cmw/LnZhbHVlID8/ICcnKSAhPT0gbWF0Y2hVcmwpID8/IFtdO1xyXG4gICAgaWYgKHNlYXJjaE5lc3RlZCkge1xyXG4gICAgICBmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCBjbGVhbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNsZWFuW2ldID0gY2xlYW5baV0ucmVtb3ZlRXh0ZW5zaW9ucyhtYXRjaFVybCwgc2VhcmNoTmVzdGVkKSBhcyBmaGlyLkV4dGVuc2lvbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5leHRlbnNpb24gPSBjbGVhbjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgYW4gZXh0ZW5zaW9uIHdpdGggYSBtYXRjaGluZyBVUkwsIG9wdGlvbmFsbHkgcmVjdXJzZSBpbnRvIGV4dGVuc2lvbi5leHRlbnNpb24uXHJcbiAgICogQHBhcmFtIHVybCBVUkwgdG8gc2VhcmNoIGZvclxyXG4gICAqIEBwYXJhbSBzZWFyY2hOZXN0ZWQgSWYgdGhlIHNlYXJjaCBzaG91bGQgbmVzdCBpbnRvIGV4dGVuc2lvbnNcclxuICAgKiBAcmV0dXJucyBUaGUgRkhJUiBFeHRlbnNpb24gaWYgZm91bmQsIG9yIHVuZGVmaW5lZC5cclxuICAgKi9cclxuICBwdWJsaWMgZmluZEV4dGVuc2lvbih1cmw6Zmhpci5GaGlyU3RyaW5nfHN0cmluZywgc2VhcmNoTmVzdGVkOmJvb2xlYW4gPSBmYWxzZSk6Zmhpci5FeHRlbnNpb258dW5kZWZpbmVkIHtcclxuICAgIGlmICh0aGlzLmV4dGVuc2lvbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoVXJsOnN0cmluZyA9ICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykgPyB1cmwgOiAodXJsIGFzIGZoaXIuRmhpclN0cmluZykudmFsdWUgPz8gJyc7XHJcbiAgICBpZiAoc2VhcmNoTmVzdGVkKSB7XHJcbiAgICAgIGNvbnN0IGZsYXQ6Zmhpci5FeHRlbnNpb25bXSA9IEZoaXJQcmltaXRpdmUucmVjdXJzZUZvckV4dGVuc2lvbihtYXRjaFVybCwgdGhpcy5leHRlbnNpb24pO1xyXG4gICAgICBpZiAoZmxhdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmbGF0WzBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uLmZpbmQoKGV4dCkgPT4gKGV4dD8udXJsPy52YWx1ZSA9PT0gbWF0Y2hVcmwpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgYWxsIGluc3RhbmNlcyBvZiBhbiBleHRlbnNpb24gd2l0aCBhIG1hdGNoaW5nIFVSTCwgb3B0aW9uYWxseSByZWN1cnNlIGludG8gZXh0ZW5zaW9uLmV4dGVuc2lvbi5cclxuICAgKiBAcGFyYW0gdXJsIFVSTCB0byBzZWFyY2ggZm9yXHJcbiAgICogQHBhcmFtIHNlYXJjaE5lc3RlZCBJZiB0aGUgc2VhcmNoIHNob3VsZCBuZXN0IGludG8gZXh0ZW5zaW9uc1xyXG4gICAqIEByZXR1cm5zIEEgbmV3IGFycmF5IG9mIEZISVIgRXh0ZW5zaW9ucywgd2l0aCBqdXN0IHRoZSBkZXNpcmVkIGV4dGVuc2lvbnNcclxuICAgKi9cclxuICBwdWJsaWMgZmlsdGVyRXh0ZW5zaW9ucyh1cmw6Zmhpci5GaGlyU3RyaW5nfHN0cmluZywgc2VhcmNoTmVzdGVkOmJvb2xlYW4gPSBmYWxzZSk6Zmhpci5FeHRlbnNpb25bXSB7XHJcbiAgICBpZiAodGhpcy5leHRlbnNpb24ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoVXJsOnN0cmluZyA9ICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykgPyB1cmwgOiAodXJsIGFzIGZoaXIuRmhpclN0cmluZykudmFsdWUgPz8gJyc7XHJcbiAgICBpZiAoc2VhcmNoTmVzdGVkKSB7XHJcbiAgICAgIHJldHVybiBGaGlyUHJpbWl0aXZlLnJlY3Vyc2VGb3JFeHRlbnNpb24obWF0Y2hVcmwsIHRoaXMuZXh0ZW5zaW9uKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbi5maWx0ZXIoKGV4dCkgPT4gKGV4dD8udXJsPy52YWx1ZSA9PT0gbWF0Y2hVcmwpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgcmVjdXJzaXZlIHNlYXJjaCBmdW5jdGlvblxyXG4gICAqIEBwYXJhbSB1cmwgXHJcbiAgICogQHBhcmFtIGV4dHMgXHJcbiAgICogQHJldHVybnMgQSBuZXcgYXJyYXkgKGZsYXQpIG9mIG1hdGNoaW5nIGV4dGVuc2lvbnNcclxuICAgKi9cclxuICBwcml2YXRlIHN0YXRpYyByZWN1cnNlRm9yRXh0ZW5zaW9uKHVybDpzdHJpbmcsIGV4dHM6Zmhpci5FeHRlbnNpb25bXSk6Zmhpci5FeHRlbnNpb25bXSB7XHJcbiAgICBpZiAoKCFleHRzKSB8fCAoZXh0cy5sZW5ndGggPT09IDApKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGxldCB2YWw6Zmhpci5FeHRlbnNpb25bXSA9IFtdO1xyXG4gICAgZXh0cy5mb3JFYWNoKFxyXG4gICAgICAoZXh0KSA9PiB7XHJcbiAgICAgICAgaWYgKGV4dCAmJiBleHQudXJsICYmIChleHQudXJsLnZhbHVlID09PSB1cmwpKSB7XHJcbiAgICAgICAgICB2YWwucHVzaChleHQpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXh0ICYmIGV4dC5leHRlbnNpb24gJiYgKGV4dC5leHRlbnNpb24ubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgIHZhbC5wdXNoKC4uLnRoaXMucmVjdXJzZUZvckV4dGVuc2lvbih1cmwsIGV4dC5leHRlbnNpb24pKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9LFxyXG4gICAgICBbXSk7XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxufSJdfQ==