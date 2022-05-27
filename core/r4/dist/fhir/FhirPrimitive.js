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
    doModelValidation() {
        let issues = super.doModelValidation();
        if ((this.value === undefined) && (!this.id) && ((!this.extension) || (this.extension.length === 0))) {
            issues.push({
                severity: 'error',
                code: 'required',
                diagnostics: "Primitive values must have a value, id, or extensions.",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpclByaW1pdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRmhpclByaW1pdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFtQm5DLE1BQU0sT0FBTyxhQUFjLFNBQVEsSUFBSSxDQUFDLFFBQVE7SUF1QjlDOzs7Ozs7T0FNRztJQUNILFlBQVksU0FBb0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDMUYsS0FBSyxFQUFFLENBQUM7UUFiVjs7WUFFSTtRQUNKLGNBQVMsR0FBb0IsRUFBRSxDQUFDO1FBVzlCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRTtnQkFDN0csSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksU0FBUyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDbkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7b0JBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFO3dCQUN4QyxJQUFJLENBQUMsRUFBRTs0QkFBRSxJQUFJLENBQUMsU0FBVSxDQUFDLElBQUksQ0FBQyxJQUFJ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QUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDN0MsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZCxPQUFPO2FBQ1I7WUFDRCxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RELEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxPQUFPO2FBQ1I7WUFDRCxPQUFPO1FBQ1QsQ0FBQyxFQUNELEVBQUUsQ0FBQyxDQUFDO1FBQ04sT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQW5Mc0IsOEJBQWdCLEdBQVcsSUFBSSxDQUFDO0FBQ3ZEOztHQUVHO0FBQzZCLDJCQUFhLEdBQVEsZUFBZSxDQUFDO0FBQzlDLDJCQUFhLEdBQVEsS0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmhpclByaW1pdGl2ZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFZhbHVlIG9mIHRoZSBwcmltaXRpdmUgLSBjb25zdHJhaW5lZCBieSBkZWNlbmRhbnQgY2xhc3Nlcy5cclxuICAgKi9cclxuICAgdmFsdWU/OmFueXxudWxsfHVuZGVmaW5lZDtcclxuXHJcbiAgIC8qKlxyXG4gICAgICogVW5pcXVlIGlkIGZvciBpbnRlci1lbGVtZW50IHJlZmVyZW5jaW5nXHJcbiAgICAgKi9cclxuICAgaWQ/OnN0cmluZ3x1bmRlZmluZWQ7XHJcbiBcclxuICAgLyoqXHJcbiAgICAgKiBBZGRpdGlvbmFsIGNvbnRlbnQgZGVmaW5lZCBieSBpbXBsZW1lbnRhdGlvbnNcclxuICAgICAqL1xyXG4gICBleHRlbnNpb24/OihmaGlyLkV4dGVuc2lvbnxudWxsKVtdfHVuZGVmaW5lZDtcclxuIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaGlyUHJpbWl0aXZlIGV4dGVuZHMgZmhpci5GaGlyQmFzZSAge1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgX2Z0c19pc1ByaW1pdGl2ZTpib29sZWFuID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nPSdQcmltaXRpdmVUeXBlJztcclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IF9mdHNfanNvblR5cGU6c3RyaW5nPSdhbnknO1xyXG5cclxuICAvKipcclxuICAgKiBWYWx1ZSBvZiB0aGUgcHJpbWl0aXZlIC0gY29uc3RyYWluZWQgYnkgZGVjZW5kYW50IGNsYXNzZXMuXHJcbiAgICovXHJcbiAgdmFsdWU/OmJvb2xlYW58bnVtYmVyfGJpZ2ludHxzdHJpbmd8bnVsbHx1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAgKiBVbmlxdWUgaWQgZm9yIGludGVyLWVsZW1lbnQgcmVmZXJlbmNpbmdcclxuICAgICovXHJcbiAgaWQ/OnN0cmluZ3x1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAgKiBBZGRpdGlvbmFsIGNvbnRlbnQgZGVmaW5lZCBieSBpbXBsZW1lbnRhdGlvbnNcclxuICAgICovXHJcbiAgZXh0ZW5zaW9uOmZoaXIuRXh0ZW5zaW9uW10gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3IgZm9yIEZISVIgcHJpbWl0aXZlIHR5cGUgZWxlbWVudHNcclxuICAgKiBAcGFyYW0gdmFsdWUgXHJcbiAgICogQHBhcmFtIGlkIFxyXG4gICAqIEBwYXJhbSBleHRlbnNpb24gXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8RmhpclByaW1pdGl2ZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBpZiAoc291cmNlKSB7XHJcbiAgICAgIGlmICgoc291cmNlLnZhbHVlICE9PSB1bmRlZmluZWQpICYmIChzb3VyY2UudmFsdWUuY29uc3RydWN0b3IpICYmIChzb3VyY2UudmFsdWUuY29uc3RydWN0b3JbJ19mdHNfZGF0YVR5cGUnXSkpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gc291cmNlLnZhbHVlLnZhbHVlID8/IG51bGw7XHJcbiAgICAgICAgdGhpcy5pZCA9IHNvdXJjZS52YWx1ZS5pZCA/PyB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKChzb3VyY2UudmFsdWUuZXh0ZW5zaW9uKSAmJiAoc291cmNlLnZhbHVlLmV4dGVuc2lvbi5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgdGhpcy5leHRlbnNpb24gPSBbXTtcclxuICAgICAgICAgIHNvdXJjZS52YWx1ZS5leHRlbnNpb24hLmZvckVhY2goKGU6YW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlKSB7IHRoaXMuZXh0ZW5zaW9uIS5wdXNoKG5ldyBmaGlyLkV4dGVuc2lvbihlLCBvcHRpb25zKSk7IH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChzb3VyY2UudmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBzb3VyY2UudmFsdWU7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKHNvdXJjZS5pZCkgeyB0aGlzLmlkID0gc291cmNlLmlkOyB9XHJcbiAgICAgIGlmICgoc291cmNlLmV4dGVuc2lvbikgJiYgKHNvdXJjZS5leHRlbnNpb24ubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZXh0ZW5zaW9uKSB7IHRoaXMuZXh0ZW5zaW9uID0gW107IH1cclxuICAgICAgICBzb3VyY2UuZXh0ZW5zaW9uIS5mb3JFYWNoKChlOmFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGUpIHsgdGhpcy5leHRlbnNpb24hLnB1c2gobmV3IGZoaXIuRXh0ZW5zaW9uKGUsIG9wdGlvbnMpKTsgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmV4dGVuc2lvbiA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKCk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oKTtcclxuICAgIGlmICgodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSAmJiAoIXRoaXMuaWQpICYmICgoIXRoaXMuZXh0ZW5zaW9uKSB8fCAodGhpcy5leHRlbnNpb24ubGVuZ3RoID09PSAwKSkpIHtcclxuICAgICAgaXNzdWVzLnB1c2goe1xyXG4gICAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxyXG4gICAgICAgIGNvZGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgICAgZGlhZ25vc3RpY3M6IFwiUHJpbWl0aXZlIHZhbHVlcyBtdXN0IGhhdmUgYSB2YWx1ZSwgaWQsIG9yIGV4dGVuc2lvbnMuXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZsdWVudC1zdHlsZSBmdW5jdGlvbiB0byBhZGQgZXh0ZW5kZWQgcHJpbWl0aXZlIHByb3BlcnRpZXNcclxuICAgKiBAcGFyYW0gc291cmNlIFxyXG4gICAqL1xyXG4gICBwdWJsaWMgYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZTpmaGlyLkZoaXJFbGVtZW50QXJncyA9IHt9KTpmaGlyLkZoaXJQcmltaXRpdmUge1xyXG4gICAgaWYgKHNvdXJjZS5pZCkgeyB0aGlzLmlkID0gc291cmNlLmlkLnRvU3RyaW5nKCk7IH1cclxuICAgIGlmIChzb3VyY2UuZXh0ZW5zaW9uKSB7XHJcbiAgICAgIHNvdXJjZS5leHRlbnNpb24uZm9yRWFjaCgoeCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uLnB1c2gobmV3IGZoaXIuRXh0ZW5zaW9uKHgpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZsdWVudC1zdHlsZSBmdW5jdGlvbiB0byBhZGQgZXh0ZW5zaW9uc1xyXG4gICAqIEBwYXJhbSBleHRcclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICAgcHVibGljIGFkZEV4dGVuc2lvbihleHQ6Zmhpci5FeHRlbnNpb25BcmdzKTpmaGlyLkZoaXJQcmltaXRpdmUge1xyXG4gICAgdGhpcy5leHRlbnNpb24ucHVzaChuZXcgZmhpci5FeHRlbnNpb24oZXh0KSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIEFMTCBpbnN0YW5jZXMgb2YgZXh0ZW5zaW9ucyB3aXRoIGEgbWF0Y2hpbmcgVVJMLCBvcHRpb25hbGx5IHJlY3Vyc2UgaW50byBleHRlbnNpb24uZXh0ZW5zaW9uLlxyXG4gICAqIEBwYXJhbSB1cmwgVVJMIG9mIGV4dGVuc2lvbnMgdG8gcmVtb3ZlXHJcbiAgICogQHBhcmFtIHNlYXJjaE5lc3RlZCBJZiB0aGUgcmVtb3ZhbCBzaG91bGQgc2VhcmNoIGZvciBuZXN0ZWQgZXh0ZW5zaW9uc1xyXG4gICAqL1xyXG4gIHB1YmxpYyByZW1vdmVFeHRlbnNpb25zKHVybDpmaGlyLkZoaXJTdHJpbmd8c3RyaW5nLCBzZWFyY2hOZXN0ZWQ6Ym9vbGVhbiA9IGZhbHNlKTpmaGlyLkZoaXJQcmltaXRpdmUge1xyXG4gICAgaWYgKHRoaXMuZXh0ZW5zaW9uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoVXJsOnN0cmluZyA9ICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykgPyB1cmwgOiAodXJsIGFzIGZoaXIuRmhpclN0cmluZykudmFsdWUgPz8gJyc7XHJcbiAgICBsZXQgY2xlYW46Zmhpci5FeHRlbnNpb25bXSA9IHRoaXMuZXh0ZW5zaW9uLmZpbHRlcigoZXh0KSA9PiAoZXh0Py51cmw/LnZhbHVlID8/ICcnKSAhPT0gbWF0Y2hVcmwpID8/IFtdO1xyXG4gICAgaWYgKHNlYXJjaE5lc3RlZCkge1xyXG4gICAgICBmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCBjbGVhbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNsZWFuW2ldID0gY2xlYW5baV0ucmVtb3ZlRXh0ZW5zaW9ucyhtYXRjaFVybCwgc2VhcmNoTmVzdGVkKSBhcyBmaGlyLkV4dGVuc2lvbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5leHRlbnNpb24gPSBjbGVhbjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgYW4gZXh0ZW5zaW9uIHdpdGggYSBtYXRjaGluZyBVUkwsIG9wdGlvbmFsbHkgcmVjdXJzZSBpbnRvIGV4dGVuc2lvbi5leHRlbnNpb24uXHJcbiAgICogQHBhcmFtIHVybCBVUkwgdG8gc2VhcmNoIGZvclxyXG4gICAqIEBwYXJhbSBzZWFyY2hOZXN0ZWQgSWYgdGhlIHNlYXJjaCBzaG91bGQgbmVzdCBpbnRvIGV4dGVuc2lvbnNcclxuICAgKiBAcmV0dXJucyBUaGUgRkhJUiBFeHRlbnNpb24gaWYgZm91bmQsIG9yIHVuZGVmaW5lZC5cclxuICAgKi9cclxuICBwdWJsaWMgZmluZEV4dGVuc2lvbih1cmw6Zmhpci5GaGlyU3RyaW5nfHN0cmluZywgc2VhcmNoTmVzdGVkOmJvb2xlYW4gPSBmYWxzZSk6Zmhpci5FeHRlbnNpb258dW5kZWZpbmVkIHtcclxuICAgIGlmICh0aGlzLmV4dGVuc2lvbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoVXJsOnN0cmluZyA9ICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykgPyB1cmwgOiAodXJsIGFzIGZoaXIuRmhpclN0cmluZykudmFsdWUgPz8gJyc7XHJcbiAgICBpZiAoc2VhcmNoTmVzdGVkKSB7XHJcbiAgICAgIGNvbnN0IGZsYXQ6Zmhpci5FeHRlbnNpb25bXSA9IEZoaXJQcmltaXRpdmUucmVjdXJzZUZvckV4dGVuc2lvbihtYXRjaFVybCwgdGhpcy5leHRlbnNpb24pO1xyXG4gICAgICBpZiAoZmxhdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmbGF0WzBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uLmZpbmQoKGV4dCkgPT4gKGV4dD8udXJsPy52YWx1ZSA9PT0gbWF0Y2hVcmwpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgYWxsIGluc3RhbmNlcyBvZiBhbiBleHRlbnNpb24gd2l0aCBhIG1hdGNoaW5nIFVSTCwgb3B0aW9uYWxseSByZWN1cnNlIGludG8gZXh0ZW5zaW9uLmV4dGVuc2lvbi5cclxuICAgKiBAcGFyYW0gdXJsIFVSTCB0byBzZWFyY2ggZm9yXHJcbiAgICogQHBhcmFtIHNlYXJjaE5lc3RlZCBJZiB0aGUgc2VhcmNoIHNob3VsZCBuZXN0IGludG8gZXh0ZW5zaW9uc1xyXG4gICAqIEByZXR1cm5zIEEgbmV3IGFycmF5IG9mIEZISVIgRXh0ZW5zaW9ucywgd2l0aCBqdXN0IHRoZSBkZXNpcmVkIGV4dGVuc2lvbnNcclxuICAgKi9cclxuICBwdWJsaWMgZmlsdGVyRXh0ZW5zaW9ucyh1cmw6Zmhpci5GaGlyU3RyaW5nfHN0cmluZywgc2VhcmNoTmVzdGVkOmJvb2xlYW4gPSBmYWxzZSk6Zmhpci5FeHRlbnNpb25bXSB7XHJcbiAgICBpZiAodGhpcy5leHRlbnNpb24ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoVXJsOnN0cmluZyA9ICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykgPyB1cmwgOiAodXJsIGFzIGZoaXIuRmhpclN0cmluZykudmFsdWUgPz8gJyc7XHJcbiAgICBpZiAoc2VhcmNoTmVzdGVkKSB7XHJcbiAgICAgIHJldHVybiBGaGlyUHJpbWl0aXZlLnJlY3Vyc2VGb3JFeHRlbnNpb24obWF0Y2hVcmwsIHRoaXMuZXh0ZW5zaW9uKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbi5maWx0ZXIoKGV4dCkgPT4gKGV4dD8udXJsPy52YWx1ZSA9PT0gbWF0Y2hVcmwpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgcmVjdXJzaXZlIHNlYXJjaCBmdW5jdGlvblxyXG4gICAqIEBwYXJhbSB1cmwgXHJcbiAgICogQHBhcmFtIGV4dHMgXHJcbiAgICogQHJldHVybnMgQSBuZXcgYXJyYXkgKGZsYXQpIG9mIG1hdGNoaW5nIGV4dGVuc2lvbnNcclxuICAgKi9cclxuICBwcml2YXRlIHN0YXRpYyByZWN1cnNlRm9yRXh0ZW5zaW9uKHVybDpzdHJpbmcsIGV4dHM6Zmhpci5FeHRlbnNpb25bXSk6Zmhpci5FeHRlbnNpb25bXSB7XHJcbiAgICBpZiAoKCFleHRzKSB8fCAoZXh0cy5sZW5ndGggPT09IDApKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGxldCB2YWw6Zmhpci5FeHRlbnNpb25bXSA9IFtdO1xyXG4gICAgZXh0cy5mb3JFYWNoKFxyXG4gICAgICAoZXh0KSA9PiB7XHJcbiAgICAgICAgaWYgKGV4dCAmJiBleHQudXJsICYmIChleHQudXJsLnZhbHVlID09PSB1cmwpKSB7XHJcbiAgICAgICAgICB2YWwucHVzaChleHQpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXh0ICYmIGV4dC5leHRlbnNpb24gJiYgKGV4dC5leHRlbnNpb24ubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgIHZhbC5wdXNoKC4uLnRoaXMucmVjdXJzZUZvckV4dGVuc2lvbih1cmwsIGV4dC5leHRlbnNpb24pKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9LFxyXG4gICAgICBbXSk7XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxufSJdfQ==