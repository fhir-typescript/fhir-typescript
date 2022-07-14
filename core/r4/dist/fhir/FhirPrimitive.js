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
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if ((this.value === undefined) && (!this.id) && ((!this.extension) || (this.extension.length === 0))) {
            issues.push({
                severity: 'error',
                code: 'required',
                details: { text: 'Primitive values must have a value, id, or extensions.' },
                expression: [expression],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpclByaW1pdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRmhpclByaW1pdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFtQm5DLE1BQU0sT0FBTyxhQUFjLFNBQVEsSUFBSSxDQUFDLFFBQVE7SUF1QjlDOzs7Ozs7T0FNRztJQUNILFlBQVksU0FBb0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDMUYsS0FBSyxFQUFFLENBQUM7UUFiVjs7WUFFSTtRQUNKLGNBQVMsR0FBb0IsRUFBRSxDQUFDO1FBVzlCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRTtnQkFDN0csSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksU0FBUyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDbkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7b0JBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFO3dCQUN4QyxJQUFJLENBQUMsRUFBRTs0QkFBRSxJQUFJLENBQUMsU0FBVSxDQUFDLElBQUksQ0FBQyxJQUFJ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O1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQ1YsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNOLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDN0MsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZCxPQUFPO2FBQ1I7WUFDRCxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RELEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxPQUFPO2FBQ1I7WUFDRCxPQUFPO1FBQ1QsQ0FBQyxFQUNELEVBQUUsQ0FBQyxDQUFDO1FBQ04sT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQXBMc0IsOEJBQWdCLEdBQVcsSUFBSSxDQUFDO0FBQ3ZEOztHQUVHO0FBQzZCLDJCQUFhLEdBQVEsZUFBZSxDQUFDO0FBQzlDLDJCQUFhLEdBQVEsS0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmhpclByaW1pdGl2ZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFZhbHVlIG9mIHRoZSBwcmltaXRpdmUgLSBjb25zdHJhaW5lZCBieSBkZWNlbmRhbnQgY2xhc3Nlcy5cclxuICAgKi9cclxuICAgdmFsdWU/OmFueXxudWxsfHVuZGVmaW5lZDtcclxuXHJcbiAgIC8qKlxyXG4gICAgICogVW5pcXVlIGlkIGZvciBpbnRlci1lbGVtZW50IHJlZmVyZW5jaW5nXHJcbiAgICAgKi9cclxuICAgaWQ/OnN0cmluZ3x1bmRlZmluZWQ7XHJcbiBcclxuICAgLyoqXHJcbiAgICAgKiBBZGRpdGlvbmFsIGNvbnRlbnQgZGVmaW5lZCBieSBpbXBsZW1lbnRhdGlvbnNcclxuICAgICAqL1xyXG4gICBleHRlbnNpb24/OihmaGlyLkV4dGVuc2lvbnxudWxsKVtdfHVuZGVmaW5lZDtcclxuIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaGlyUHJpbWl0aXZlIGV4dGVuZHMgZmhpci5GaGlyQmFzZSAge1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgX2Z0c19pc1ByaW1pdGl2ZTpib29sZWFuID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nPSdQcmltaXRpdmVUeXBlJztcclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IF9mdHNfanNvblR5cGU6c3RyaW5nPSdhbnknO1xyXG5cclxuICAvKipcclxuICAgKiBWYWx1ZSBvZiB0aGUgcHJpbWl0aXZlIC0gY29uc3RyYWluZWQgYnkgZGVjZW5kYW50IGNsYXNzZXMuXHJcbiAgICovXHJcbiAgdmFsdWU/OmJvb2xlYW58bnVtYmVyfGJpZ2ludHxzdHJpbmd8bnVsbHx1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAgKiBVbmlxdWUgaWQgZm9yIGludGVyLWVsZW1lbnQgcmVmZXJlbmNpbmdcclxuICAgICovXHJcbiAgaWQ/OnN0cmluZ3x1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAgKiBBZGRpdGlvbmFsIGNvbnRlbnQgZGVmaW5lZCBieSBpbXBsZW1lbnRhdGlvbnNcclxuICAgICovXHJcbiAgZXh0ZW5zaW9uOmZoaXIuRXh0ZW5zaW9uW10gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3IgZm9yIEZISVIgcHJpbWl0aXZlIHR5cGUgZWxlbWVudHNcclxuICAgKiBAcGFyYW0gdmFsdWUgXHJcbiAgICogQHBhcmFtIGlkIFxyXG4gICAqIEBwYXJhbSBleHRlbnNpb24gXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8RmhpclByaW1pdGl2ZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBpZiAoc291cmNlKSB7XHJcbiAgICAgIGlmICgoc291cmNlLnZhbHVlICE9PSB1bmRlZmluZWQpICYmIChzb3VyY2UudmFsdWUuY29uc3RydWN0b3IpICYmIChzb3VyY2UudmFsdWUuY29uc3RydWN0b3JbJ19mdHNfZGF0YVR5cGUnXSkpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gc291cmNlLnZhbHVlLnZhbHVlID8/IG51bGw7XHJcbiAgICAgICAgdGhpcy5pZCA9IHNvdXJjZS52YWx1ZS5pZCA/PyB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKChzb3VyY2UudmFsdWUuZXh0ZW5zaW9uKSAmJiAoc291cmNlLnZhbHVlLmV4dGVuc2lvbi5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgdGhpcy5leHRlbnNpb24gPSBbXTtcclxuICAgICAgICAgIHNvdXJjZS52YWx1ZS5leHRlbnNpb24hLmZvckVhY2goKGU6YW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlKSB7IHRoaXMuZXh0ZW5zaW9uIS5wdXNoKG5ldyBmaGlyLkV4dGVuc2lvbihlLCBvcHRpb25zKSk7IH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChzb3VyY2UudmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBzb3VyY2UudmFsdWU7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKHNvdXJjZS5pZCkgeyB0aGlzLmlkID0gc291cmNlLmlkOyB9XHJcbiAgICAgIGlmICgoc291cmNlLmV4dGVuc2lvbikgJiYgKHNvdXJjZS5leHRlbnNpb24ubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZXh0ZW5zaW9uKSB7IHRoaXMuZXh0ZW5zaW9uID0gW107IH1cclxuICAgICAgICBzb3VyY2UuZXh0ZW5zaW9uIS5mb3JFYWNoKChlOmFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGUpIHsgdGhpcy5leHRlbnNpb24hLnB1c2gobmV3IGZoaXIuRXh0ZW5zaW9uKGUsIG9wdGlvbnMpKTsgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmV4dGVuc2lvbiA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb246c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24pO1xyXG4gICAgaWYgKCh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQpICYmICghdGhpcy5pZCkgJiYgKCghdGhpcy5leHRlbnNpb24pIHx8ICh0aGlzLmV4dGVuc2lvbi5sZW5ndGggPT09IDApKSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7XHJcbiAgICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsXHJcbiAgICAgICAgY29kZTogJ3JlcXVpcmVkJyxcclxuICAgICAgICBkZXRhaWxzOiB7IHRleHQ6ICdQcmltaXRpdmUgdmFsdWVzIG11c3QgaGF2ZSBhIHZhbHVlLCBpZCwgb3IgZXh0ZW5zaW9ucy4nIH0sXHJcbiAgICAgICAgZXhwcmVzc2lvbjogW2V4cHJlc3Npb25dLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGbHVlbnQtc3R5bGUgZnVuY3Rpb24gdG8gYWRkIGV4dGVuZGVkIHByaW1pdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgICogQHBhcmFtIHNvdXJjZSBcclxuICAgKi9cclxuICAgcHVibGljIGFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2U6Zmhpci5GaGlyRWxlbWVudEFyZ3MgPSB7fSk6Zmhpci5GaGlyUHJpbWl0aXZlIHtcclxuICAgIGlmIChzb3VyY2UuaWQpIHsgdGhpcy5pZCA9IHNvdXJjZS5pZC50b1N0cmluZygpOyB9XHJcbiAgICBpZiAoc291cmNlLmV4dGVuc2lvbikge1xyXG4gICAgICBzb3VyY2UuZXh0ZW5zaW9uLmZvckVhY2goKHgpID0+IHtcclxuICAgICAgICB0aGlzLmV4dGVuc2lvbi5wdXNoKG5ldyBmaGlyLkV4dGVuc2lvbih4KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGbHVlbnQtc3R5bGUgZnVuY3Rpb24gdG8gYWRkIGV4dGVuc2lvbnNcclxuICAgKiBAcGFyYW0gZXh0XHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgIHB1YmxpYyBhZGRFeHRlbnNpb24oZXh0OmZoaXIuRXh0ZW5zaW9uQXJncyk6Zmhpci5GaGlyUHJpbWl0aXZlIHtcclxuICAgIHRoaXMuZXh0ZW5zaW9uLnB1c2gobmV3IGZoaXIuRXh0ZW5zaW9uKGV4dCkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBBTEwgaW5zdGFuY2VzIG9mIGV4dGVuc2lvbnMgd2l0aCBhIG1hdGNoaW5nIFVSTCwgb3B0aW9uYWxseSByZWN1cnNlIGludG8gZXh0ZW5zaW9uLmV4dGVuc2lvbi5cclxuICAgKiBAcGFyYW0gdXJsIFVSTCBvZiBleHRlbnNpb25zIHRvIHJlbW92ZVxyXG4gICAqIEBwYXJhbSBzZWFyY2hOZXN0ZWQgSWYgdGhlIHJlbW92YWwgc2hvdWxkIHNlYXJjaCBmb3IgbmVzdGVkIGV4dGVuc2lvbnNcclxuICAgKi9cclxuICBwdWJsaWMgcmVtb3ZlRXh0ZW5zaW9ucyh1cmw6Zmhpci5GaGlyU3RyaW5nfHN0cmluZywgc2VhcmNoTmVzdGVkOmJvb2xlYW4gPSBmYWxzZSk6Zmhpci5GaGlyUHJpbWl0aXZlIHtcclxuICAgIGlmICh0aGlzLmV4dGVuc2lvbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXRjaFVybDpzdHJpbmcgPSAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpID8gdXJsIDogKHVybCBhcyBmaGlyLkZoaXJTdHJpbmcpLnZhbHVlID8/ICcnO1xyXG4gICAgbGV0IGNsZWFuOmZoaXIuRXh0ZW5zaW9uW10gPSB0aGlzLmV4dGVuc2lvbi5maWx0ZXIoKGV4dCkgPT4gKGV4dD8udXJsPy52YWx1ZSA/PyAnJykgIT09IG1hdGNoVXJsKSA/PyBbXTtcclxuICAgIGlmIChzZWFyY2hOZXN0ZWQpIHtcclxuICAgICAgZm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgY2xlYW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjbGVhbltpXSA9IGNsZWFuW2ldLnJlbW92ZUV4dGVuc2lvbnMobWF0Y2hVcmwsIHNlYXJjaE5lc3RlZCkgYXMgZmhpci5FeHRlbnNpb247XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZXh0ZW5zaW9uID0gY2xlYW47XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgdGhlIGZpcnN0IGluc3RhbmNlIG9mIGFuIGV4dGVuc2lvbiB3aXRoIGEgbWF0Y2hpbmcgVVJMLCBvcHRpb25hbGx5IHJlY3Vyc2UgaW50byBleHRlbnNpb24uZXh0ZW5zaW9uLlxyXG4gICAqIEBwYXJhbSB1cmwgVVJMIHRvIHNlYXJjaCBmb3JcclxuICAgKiBAcGFyYW0gc2VhcmNoTmVzdGVkIElmIHRoZSBzZWFyY2ggc2hvdWxkIG5lc3QgaW50byBleHRlbnNpb25zXHJcbiAgICogQHJldHVybnMgVGhlIEZISVIgRXh0ZW5zaW9uIGlmIGZvdW5kLCBvciB1bmRlZmluZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGZpbmRFeHRlbnNpb24odXJsOmZoaXIuRmhpclN0cmluZ3xzdHJpbmcsIHNlYXJjaE5lc3RlZDpib29sZWFuID0gZmFsc2UpOmZoaXIuRXh0ZW5zaW9ufHVuZGVmaW5lZCB7XHJcbiAgICBpZiAodGhpcy5leHRlbnNpb24ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXRjaFVybDpzdHJpbmcgPSAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpID8gdXJsIDogKHVybCBhcyBmaGlyLkZoaXJTdHJpbmcpLnZhbHVlID8/ICcnO1xyXG4gICAgaWYgKHNlYXJjaE5lc3RlZCkge1xyXG4gICAgICBjb25zdCBmbGF0OmZoaXIuRXh0ZW5zaW9uW10gPSBGaGlyUHJpbWl0aXZlLnJlY3Vyc2VGb3JFeHRlbnNpb24obWF0Y2hVcmwsIHRoaXMuZXh0ZW5zaW9uKTtcclxuICAgICAgaWYgKGZsYXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmxhdFswXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbi5maW5kKChleHQpID0+IChleHQ/LnVybD8udmFsdWUgPT09IG1hdGNoVXJsKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaW5kIGFsbCBpbnN0YW5jZXMgb2YgYW4gZXh0ZW5zaW9uIHdpdGggYSBtYXRjaGluZyBVUkwsIG9wdGlvbmFsbHkgcmVjdXJzZSBpbnRvIGV4dGVuc2lvbi5leHRlbnNpb24uXHJcbiAgICogQHBhcmFtIHVybCBVUkwgdG8gc2VhcmNoIGZvclxyXG4gICAqIEBwYXJhbSBzZWFyY2hOZXN0ZWQgSWYgdGhlIHNlYXJjaCBzaG91bGQgbmVzdCBpbnRvIGV4dGVuc2lvbnNcclxuICAgKiBAcmV0dXJucyBBIG5ldyBhcnJheSBvZiBGSElSIEV4dGVuc2lvbnMsIHdpdGgganVzdCB0aGUgZGVzaXJlZCBleHRlbnNpb25zXHJcbiAgICovXHJcbiAgcHVibGljIGZpbHRlckV4dGVuc2lvbnModXJsOmZoaXIuRmhpclN0cmluZ3xzdHJpbmcsIHNlYXJjaE5lc3RlZDpib29sZWFuID0gZmFsc2UpOmZoaXIuRXh0ZW5zaW9uW10ge1xyXG4gICAgaWYgKHRoaXMuZXh0ZW5zaW9uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXRjaFVybDpzdHJpbmcgPSAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpID8gdXJsIDogKHVybCBhcyBmaGlyLkZoaXJTdHJpbmcpLnZhbHVlID8/ICcnO1xyXG4gICAgaWYgKHNlYXJjaE5lc3RlZCkge1xyXG4gICAgICByZXR1cm4gRmhpclByaW1pdGl2ZS5yZWN1cnNlRm9yRXh0ZW5zaW9uKG1hdGNoVXJsLCB0aGlzLmV4dGVuc2lvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb24uZmlsdGVyKChleHQpID0+IChleHQ/LnVybD8udmFsdWUgPT09IG1hdGNoVXJsKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIHJlY3Vyc2l2ZSBzZWFyY2ggZnVuY3Rpb25cclxuICAgKiBAcGFyYW0gdXJsIFxyXG4gICAqIEBwYXJhbSBleHRzIFxyXG4gICAqIEByZXR1cm5zIEEgbmV3IGFycmF5IChmbGF0KSBvZiBtYXRjaGluZyBleHRlbnNpb25zXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVjdXJzZUZvckV4dGVuc2lvbih1cmw6c3RyaW5nLCBleHRzOmZoaXIuRXh0ZW5zaW9uW10pOmZoaXIuRXh0ZW5zaW9uW10ge1xyXG4gICAgaWYgKCghZXh0cykgfHwgKGV4dHMubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBsZXQgdmFsOmZoaXIuRXh0ZW5zaW9uW10gPSBbXTtcclxuICAgIGV4dHMuZm9yRWFjaChcclxuICAgICAgKGV4dCkgPT4ge1xyXG4gICAgICAgIGlmIChleHQgJiYgZXh0LnVybCAmJiAoZXh0LnVybC52YWx1ZSA9PT0gdXJsKSkge1xyXG4gICAgICAgICAgdmFsLnB1c2goZXh0KTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV4dCAmJiBleHQuZXh0ZW5zaW9uICYmIChleHQuZXh0ZW5zaW9uLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICB2YWwucHVzaCguLi50aGlzLnJlY3Vyc2VGb3JFeHRlbnNpb24odXJsLCBleHQuZXh0ZW5zaW9uKSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSxcclxuICAgICAgW10pO1xyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9XHJcbn0iXX0=