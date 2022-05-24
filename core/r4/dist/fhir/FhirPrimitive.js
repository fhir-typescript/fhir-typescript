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
            if ((source.value) && (source.value.constructor) && (source.value.constructor['_fts_dataType'])) {
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
            else if (source.value) {
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
        if ((!this.value) && (!this.id) && ((!this.extension) || (this.extension.length === 0))) {
            issues.push({
                severity: 'error',
                code: 'required',
                diagnostics: "Primitive values must have a value, id, or extensions.",
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpclByaW1pdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRmhpclByaW1pdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFtQm5DLE1BQU0sT0FBTyxhQUFjLFNBQVEsSUFBSSxDQUFDLFFBQVE7SUF1QjlDOzs7Ozs7T0FNRztJQUNILFlBQVksU0FBb0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDMUYsS0FBSyxFQUFFLENBQUM7UUFiVjs7WUFFSTtRQUNKLGNBQVMsR0FBb0IsRUFBRSxDQUFDO1FBVzlCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFO2dCQUMvRixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztnQkFDeEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxTQUFTLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztvQkFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBSyxFQUFFLEVBQUU7d0JBQ3hDLElBQUksQ0FBQyxFQUFFOzRCQUFFLElBQUksQ0FBQyxTQUFVLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFD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Qzs7QUF0S3NCLDhCQUFnQixHQUFXLElBQUksQ0FBQztBQUN2RDs7R0FFRztBQUM2QiwyQkFBYSxHQUFRLGVBQWUsQ0FBQztBQUM5QywyQkFBYSxHQUFRLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZoaXJQcmltaXRpdmVBcmdzIHtcclxuICAvKipcclxuICAgKiBWYWx1ZSBvZiB0aGUgcHJpbWl0aXZlIC0gY29uc3RyYWluZWQgYnkgZGVjZW5kYW50IGNsYXNzZXMuXHJcbiAgICovXHJcbiAgIHZhbHVlPzphbnl8bnVsbHx1bmRlZmluZWQ7XHJcblxyXG4gICAvKipcclxuICAgICAqIFVuaXF1ZSBpZCBmb3IgaW50ZXItZWxlbWVudCByZWZlcmVuY2luZ1xyXG4gICAgICovXHJcbiAgIGlkPzpzdHJpbmd8dW5kZWZpbmVkO1xyXG4gXHJcbiAgIC8qKlxyXG4gICAgICogQWRkaXRpb25hbCBjb250ZW50IGRlZmluZWQgYnkgaW1wbGVtZW50YXRpb25zXHJcbiAgICAgKi9cclxuICAgZXh0ZW5zaW9uPzooZmhpci5FeHRlbnNpb258bnVsbClbXXx1bmRlZmluZWQ7XHJcbiB9XHJcblxyXG5leHBvcnQgY2xhc3MgRmhpclByaW1pdGl2ZSBleHRlbmRzIGZoaXIuRmhpckJhc2UgIHtcclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IF9mdHNfaXNQcmltaXRpdmU6Ym9vbGVhbiA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZz0nUHJpbWl0aXZlVHlwZSc7XHJcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBfZnRzX2pzb25UeXBlOnN0cmluZz0nYW55JztcclxuXHJcbiAgLyoqXHJcbiAgICogVmFsdWUgb2YgdGhlIHByaW1pdGl2ZSAtIGNvbnN0cmFpbmVkIGJ5IGRlY2VuZGFudCBjbGFzc2VzLlxyXG4gICAqL1xyXG4gIHZhbHVlPzpib29sZWFufG51bWJlcnxiaWdpbnR8c3RyaW5nfG51bGx8dW5kZWZpbmVkO1xyXG5cclxuICAvKipcclxuICAgICogVW5pcXVlIGlkIGZvciBpbnRlci1lbGVtZW50IHJlZmVyZW5jaW5nXHJcbiAgICAqL1xyXG4gIGlkPzpzdHJpbmd8dW5kZWZpbmVkO1xyXG5cclxuICAvKipcclxuICAgICogQWRkaXRpb25hbCBjb250ZW50IGRlZmluZWQgYnkgaW1wbGVtZW50YXRpb25zXHJcbiAgICAqL1xyXG4gIGV4dGVuc2lvbjpmaGlyLkV4dGVuc2lvbltdID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yIGZvciBGSElSIHByaW1pdGl2ZSB0eXBlIGVsZW1lbnRzXHJcbiAgICogQHBhcmFtIHZhbHVlIFxyXG4gICAqIEBwYXJhbSBpZCBcclxuICAgKiBAcGFyYW0gZXh0ZW5zaW9uIFxyXG4gICAqIEBwYXJhbSBvcHRpb25zIFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEZoaXJQcmltaXRpdmVBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgaWYgKHNvdXJjZSkge1xyXG4gICAgICBpZiAoKHNvdXJjZS52YWx1ZSkgJiYgKHNvdXJjZS52YWx1ZS5jb25zdHJ1Y3RvcikgJiYgKHNvdXJjZS52YWx1ZS5jb25zdHJ1Y3RvclsnX2Z0c19kYXRhVHlwZSddKSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBzb3VyY2UudmFsdWUudmFsdWUgPz8gbnVsbDtcclxuICAgICAgICB0aGlzLmlkID0gc291cmNlLnZhbHVlLmlkID8/IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoKHNvdXJjZS52YWx1ZS5leHRlbnNpb24pICYmIChzb3VyY2UudmFsdWUuZXh0ZW5zaW9uLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICB0aGlzLmV4dGVuc2lvbiA9IFtdO1xyXG4gICAgICAgICAgc291cmNlLnZhbHVlLmV4dGVuc2lvbiEuZm9yRWFjaCgoZTphbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUpIHsgdGhpcy5leHRlbnNpb24hLnB1c2gobmV3IGZoaXIuRXh0ZW5zaW9uKGUsIG9wdGlvbnMpKTsgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHNvdXJjZS52YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBzb3VyY2UudmFsdWU7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKHNvdXJjZS5pZCkgeyB0aGlzLmlkID0gc291cmNlLmlkOyB9XHJcbiAgICAgIGlmICgoc291cmNlLmV4dGVuc2lvbikgJiYgKHNvdXJjZS5leHRlbnNpb24ubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZXh0ZW5zaW9uKSB7IHRoaXMuZXh0ZW5zaW9uID0gW107IH1cclxuICAgICAgICBzb3VyY2UuZXh0ZW5zaW9uIS5mb3JFYWNoKChlOmFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGUpIHsgdGhpcy5leHRlbnNpb24hLnB1c2gobmV3IGZoaXIuRXh0ZW5zaW9uKGUsIG9wdGlvbnMpKTsgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmV4dGVuc2lvbiA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKCk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oKTtcclxuICAgIGlmICgoIXRoaXMudmFsdWUpICYmICghdGhpcy5pZCkgJiYgKCghdGhpcy5leHRlbnNpb24pIHx8ICh0aGlzLmV4dGVuc2lvbi5sZW5ndGggPT09IDApKSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7XHJcbiAgICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsXHJcbiAgICAgICAgY29kZTogJ3JlcXVpcmVkJyxcclxuICAgICAgICBkaWFnbm9zdGljczogXCJQcmltaXRpdmUgdmFsdWVzIG11c3QgaGF2ZSBhIHZhbHVlLCBpZCwgb3IgZXh0ZW5zaW9ucy5cIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEZsdWVudC1zdHlsZSBmdW5jdGlvbiB0byBhZGQgZXh0ZW5zaW9uc1xyXG4gICAqIEBwYXJhbSBleHRcclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICAgcHVibGljIGFkZEV4dGVuc2lvbihleHQ6Zmhpci5FeHRlbnNpb25BcmdzKTpmaGlyLkZoaXJQcmltaXRpdmUge1xyXG4gICAgdGhpcy5leHRlbnNpb24ucHVzaChuZXcgZmhpci5FeHRlbnNpb24oZXh0KSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIEFMTCBpbnN0YW5jZXMgb2YgZXh0ZW5zaW9ucyB3aXRoIGEgbWF0Y2hpbmcgVVJMLCBvcHRpb25hbGx5IHJlY3Vyc2UgaW50byBleHRlbnNpb24uZXh0ZW5zaW9uLlxyXG4gICAqIEBwYXJhbSB1cmwgVVJMIG9mIGV4dGVuc2lvbnMgdG8gcmVtb3ZlXHJcbiAgICogQHBhcmFtIHNlYXJjaE5lc3RlZCBJZiB0aGUgcmVtb3ZhbCBzaG91bGQgc2VhcmNoIGZvciBuZXN0ZWQgZXh0ZW5zaW9uc1xyXG4gICAqL1xyXG4gIHB1YmxpYyByZW1vdmVFeHRlbnNpb25zKHVybDpmaGlyLkZoaXJTdHJpbmd8c3RyaW5nLCBzZWFyY2hOZXN0ZWQ6Ym9vbGVhbiA9IGZhbHNlKTpmaGlyLkZoaXJQcmltaXRpdmUge1xyXG4gICAgaWYgKHRoaXMuZXh0ZW5zaW9uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoVXJsOnN0cmluZyA9ICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykgPyB1cmwgOiAodXJsIGFzIGZoaXIuRmhpclN0cmluZykudmFsdWUgPz8gJyc7XHJcbiAgICBsZXQgY2xlYW46Zmhpci5FeHRlbnNpb25bXSA9IHRoaXMuZXh0ZW5zaW9uLmZpbHRlcigoZXh0KSA9PiAoZXh0Py51cmw/LnZhbHVlID8/ICcnKSAhPT0gbWF0Y2hVcmwpID8/IFtdO1xyXG4gICAgaWYgKHNlYXJjaE5lc3RlZCkge1xyXG4gICAgICBmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCBjbGVhbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNsZWFuW2ldID0gY2xlYW5baV0ucmVtb3ZlRXh0ZW5zaW9ucyhtYXRjaFVybCwgc2VhcmNoTmVzdGVkKSBhcyBmaGlyLkV4dGVuc2lvbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5leHRlbnNpb24gPSBjbGVhbjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgYW4gZXh0ZW5zaW9uIHdpdGggYSBtYXRjaGluZyBVUkwsIG9wdGlvbmFsbHkgcmVjdXJzZSBpbnRvIGV4dGVuc2lvbi5leHRlbnNpb24uXHJcbiAgICogQHBhcmFtIHVybCBVUkwgdG8gc2VhcmNoIGZvclxyXG4gICAqIEBwYXJhbSBzZWFyY2hOZXN0ZWQgSWYgdGhlIHNlYXJjaCBzaG91bGQgbmVzdCBpbnRvIGV4dGVuc2lvbnNcclxuICAgKiBAcmV0dXJucyBUaGUgRkhJUiBFeHRlbnNpb24gaWYgZm91bmQsIG9yIHVuZGVmaW5lZC5cclxuICAgKi9cclxuICBwdWJsaWMgZmluZEV4dGVuc2lvbih1cmw6Zmhpci5GaGlyU3RyaW5nfHN0cmluZywgc2VhcmNoTmVzdGVkOmJvb2xlYW4gPSBmYWxzZSk6Zmhpci5FeHRlbnNpb258dW5kZWZpbmVkIHtcclxuICAgIGlmICh0aGlzLmV4dGVuc2lvbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoVXJsOnN0cmluZyA9ICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykgPyB1cmwgOiAodXJsIGFzIGZoaXIuRmhpclN0cmluZykudmFsdWUgPz8gJyc7XHJcbiAgICBpZiAoc2VhcmNoTmVzdGVkKSB7XHJcbiAgICAgIGNvbnN0IGZsYXQ6Zmhpci5FeHRlbnNpb25bXSA9IEZoaXJQcmltaXRpdmUucmVjdXJzZUZvckV4dGVuc2lvbihtYXRjaFVybCwgdGhpcy5leHRlbnNpb24pO1xyXG4gICAgICBpZiAoZmxhdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmbGF0WzBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uLmZpbmQoKGV4dCkgPT4gKGV4dD8udXJsPy52YWx1ZSA9PT0gbWF0Y2hVcmwpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgYWxsIGluc3RhbmNlcyBvZiBhbiBleHRlbnNpb24gd2l0aCBhIG1hdGNoaW5nIFVSTCwgb3B0aW9uYWxseSByZWN1cnNlIGludG8gZXh0ZW5zaW9uLmV4dGVuc2lvbi5cclxuICAgKiBAcGFyYW0gdXJsIFVSTCB0byBzZWFyY2ggZm9yXHJcbiAgICogQHBhcmFtIHNlYXJjaE5lc3RlZCBJZiB0aGUgc2VhcmNoIHNob3VsZCBuZXN0IGludG8gZXh0ZW5zaW9uc1xyXG4gICAqIEByZXR1cm5zIEEgbmV3IGFycmF5IG9mIEZISVIgRXh0ZW5zaW9ucywgd2l0aCBqdXN0IHRoZSBkZXNpcmVkIGV4dGVuc2lvbnNcclxuICAgKi9cclxuICBwdWJsaWMgZmlsdGVyRXh0ZW5zaW9ucyh1cmw6Zmhpci5GaGlyU3RyaW5nfHN0cmluZywgc2VhcmNoTmVzdGVkOmJvb2xlYW4gPSBmYWxzZSk6Zmhpci5FeHRlbnNpb25bXSB7XHJcbiAgICBpZiAodGhpcy5leHRlbnNpb24ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoVXJsOnN0cmluZyA9ICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykgPyB1cmwgOiAodXJsIGFzIGZoaXIuRmhpclN0cmluZykudmFsdWUgPz8gJyc7XHJcbiAgICBpZiAoc2VhcmNoTmVzdGVkKSB7XHJcbiAgICAgIHJldHVybiBGaGlyUHJpbWl0aXZlLnJlY3Vyc2VGb3JFeHRlbnNpb24obWF0Y2hVcmwsIHRoaXMuZXh0ZW5zaW9uKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbi5maWx0ZXIoKGV4dCkgPT4gKGV4dD8udXJsPy52YWx1ZSA9PT0gbWF0Y2hVcmwpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgcmVjdXJzaXZlIHNlYXJjaCBmdW5jdGlvblxyXG4gICAqIEBwYXJhbSB1cmwgXHJcbiAgICogQHBhcmFtIGV4dHMgXHJcbiAgICogQHJldHVybnMgQSBuZXcgYXJyYXkgKGZsYXQpIG9mIG1hdGNoaW5nIGV4dGVuc2lvbnNcclxuICAgKi9cclxuICBwcml2YXRlIHN0YXRpYyByZWN1cnNlRm9yRXh0ZW5zaW9uKHVybDpzdHJpbmcsIGV4dHM6Zmhpci5FeHRlbnNpb25bXSk6Zmhpci5FeHRlbnNpb25bXSB7XHJcbiAgICBpZiAoKCFleHRzKSB8fCAoZXh0cy5sZW5ndGggPT09IDApKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGxldCB2YWw6Zmhpci5FeHRlbnNpb25bXSA9IFtdO1xyXG4gICAgZXh0cy5mb3JFYWNoKFxyXG4gICAgICAoZXh0KSA9PiB7XHJcbiAgICAgICAgaWYgKGV4dCAmJiBleHQudXJsICYmIChleHQudXJsLnZhbHVlID09PSB1cmwpKSB7XHJcbiAgICAgICAgICB2YWwucHVzaChleHQpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXh0ICYmIGV4dC5leHRlbnNpb24gJiYgKGV4dC5leHRlbnNpb24ubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgIHZhbC5wdXNoKC4uLnRoaXMucmVjdXJzZUZvckV4dGVuc2lvbih1cmwsIGV4dC5leHRlbnNpb24pKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9LFxyXG4gICAgICBbXSk7XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxufSJdfQ==