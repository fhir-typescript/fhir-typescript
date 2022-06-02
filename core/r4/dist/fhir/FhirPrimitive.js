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
                diagnostics: 'Primitive values must have a value, id, or extensions.',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpclByaW1pdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRmhpclByaW1pdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFtQm5DLE1BQU0sT0FBTyxhQUFjLFNBQVEsSUFBSSxDQUFDLFFBQVE7SUF1QjlDOzs7Ozs7T0FNRztJQUNILFlBQVksU0FBb0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDMUYsS0FBSyxFQUFFLENBQUM7UUFiVjs7WUFFSTtRQUNKLGNBQVMsR0FBb0IsRUFBRSxDQUFDO1FBVzlCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRTtnQkFDN0csSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksU0FBUyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDbkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7b0JBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFO3dCQUN4QyxJQUFJLENBQUMsRUFBRTs0QkFBRSxJQUFJLENBQUMsU0FBVSxDQUFDLElBQUksQ0FBQyxJQUFJ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TyxDQUNWLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDTixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQzdDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2QsT0FBTzthQUNSO1lBQ0QsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUN0RCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDMUQsT0FBTzthQUNSO1lBQ0QsT0FBTztRQUNULENBQUMsRUFDRCxFQUFFLENBQUMsQ0FBQztRQUNOLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUFwTHNCLDhCQUFnQixHQUFXLElBQUksQ0FBQztBQUN2RDs7R0FFRztBQUM2QiwyQkFBYSxHQUFRLGVBQWUsQ0FBQztBQUM5QywyQkFBYSxHQUFRLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZoaXJQcmltaXRpdmVBcmdzIHtcclxuICAvKipcclxuICAgKiBWYWx1ZSBvZiB0aGUgcHJpbWl0aXZlIC0gY29uc3RyYWluZWQgYnkgZGVjZW5kYW50IGNsYXNzZXMuXHJcbiAgICovXHJcbiAgIHZhbHVlPzphbnl8bnVsbHx1bmRlZmluZWQ7XHJcblxyXG4gICAvKipcclxuICAgICAqIFVuaXF1ZSBpZCBmb3IgaW50ZXItZWxlbWVudCByZWZlcmVuY2luZ1xyXG4gICAgICovXHJcbiAgIGlkPzpzdHJpbmd8dW5kZWZpbmVkO1xyXG4gXHJcbiAgIC8qKlxyXG4gICAgICogQWRkaXRpb25hbCBjb250ZW50IGRlZmluZWQgYnkgaW1wbGVtZW50YXRpb25zXHJcbiAgICAgKi9cclxuICAgZXh0ZW5zaW9uPzooZmhpci5FeHRlbnNpb258bnVsbClbXXx1bmRlZmluZWQ7XHJcbiB9XHJcblxyXG5leHBvcnQgY2xhc3MgRmhpclByaW1pdGl2ZSBleHRlbmRzIGZoaXIuRmhpckJhc2UgIHtcclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IF9mdHNfaXNQcmltaXRpdmU6Ym9vbGVhbiA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZz0nUHJpbWl0aXZlVHlwZSc7XHJcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBfZnRzX2pzb25UeXBlOnN0cmluZz0nYW55JztcclxuXHJcbiAgLyoqXHJcbiAgICogVmFsdWUgb2YgdGhlIHByaW1pdGl2ZSAtIGNvbnN0cmFpbmVkIGJ5IGRlY2VuZGFudCBjbGFzc2VzLlxyXG4gICAqL1xyXG4gIHZhbHVlPzpib29sZWFufG51bWJlcnxiaWdpbnR8c3RyaW5nfG51bGx8dW5kZWZpbmVkO1xyXG5cclxuICAvKipcclxuICAgICogVW5pcXVlIGlkIGZvciBpbnRlci1lbGVtZW50IHJlZmVyZW5jaW5nXHJcbiAgICAqL1xyXG4gIGlkPzpzdHJpbmd8dW5kZWZpbmVkO1xyXG5cclxuICAvKipcclxuICAgICogQWRkaXRpb25hbCBjb250ZW50IGRlZmluZWQgYnkgaW1wbGVtZW50YXRpb25zXHJcbiAgICAqL1xyXG4gIGV4dGVuc2lvbjpmaGlyLkV4dGVuc2lvbltdID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yIGZvciBGSElSIHByaW1pdGl2ZSB0eXBlIGVsZW1lbnRzXHJcbiAgICogQHBhcmFtIHZhbHVlIFxyXG4gICAqIEBwYXJhbSBpZCBcclxuICAgKiBAcGFyYW0gZXh0ZW5zaW9uIFxyXG4gICAqIEBwYXJhbSBvcHRpb25zIFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEZoaXJQcmltaXRpdmVBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgaWYgKHNvdXJjZSkge1xyXG4gICAgICBpZiAoKHNvdXJjZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSAmJiAoc291cmNlLnZhbHVlLmNvbnN0cnVjdG9yKSAmJiAoc291cmNlLnZhbHVlLmNvbnN0cnVjdG9yWydfZnRzX2RhdGFUeXBlJ10pKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHNvdXJjZS52YWx1ZS52YWx1ZSA/PyBudWxsO1xyXG4gICAgICAgIHRoaXMuaWQgPSBzb3VyY2UudmFsdWUuaWQgPz8gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICgoc291cmNlLnZhbHVlLmV4dGVuc2lvbikgJiYgKHNvdXJjZS52YWx1ZS5leHRlbnNpb24ubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgIHRoaXMuZXh0ZW5zaW9uID0gW107XHJcbiAgICAgICAgICBzb3VyY2UudmFsdWUuZXh0ZW5zaW9uIS5mb3JFYWNoKChlOmFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZSkgeyB0aGlzLmV4dGVuc2lvbiEucHVzaChuZXcgZmhpci5FeHRlbnNpb24oZSwgb3B0aW9ucykpOyB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoc291cmNlLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gc291cmNlLnZhbHVlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlmIChzb3VyY2UuaWQpIHsgdGhpcy5pZCA9IHNvdXJjZS5pZDsgfVxyXG4gICAgICBpZiAoKHNvdXJjZS5leHRlbnNpb24pICYmIChzb3VyY2UuZXh0ZW5zaW9uLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmV4dGVuc2lvbikgeyB0aGlzLmV4dGVuc2lvbiA9IFtdOyB9XHJcbiAgICAgICAgc291cmNlLmV4dGVuc2lvbiEuZm9yRWFjaCgoZTphbnkpID0+IHtcclxuICAgICAgICAgIGlmIChlKSB7IHRoaXMuZXh0ZW5zaW9uIS5wdXNoKG5ldyBmaGlyLkV4dGVuc2lvbihlLCBvcHRpb25zKSk7IH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5leHRlbnNpb24gPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKTtcclxuICAgIGlmICgodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSAmJiAoIXRoaXMuaWQpICYmICgoIXRoaXMuZXh0ZW5zaW9uKSB8fCAodGhpcy5leHRlbnNpb24ubGVuZ3RoID09PSAwKSkpIHtcclxuICAgICAgaXNzdWVzLnB1c2goe1xyXG4gICAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxyXG4gICAgICAgIGNvZGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgICAgZGlhZ25vc3RpY3M6ICdQcmltaXRpdmUgdmFsdWVzIG11c3QgaGF2ZSBhIHZhbHVlLCBpZCwgb3IgZXh0ZW5zaW9ucy4nLFxyXG4gICAgICAgIGV4cHJlc3Npb246IFtleHByZXNzaW9uXSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmx1ZW50LXN0eWxlIGZ1bmN0aW9uIHRvIGFkZCBleHRlbmRlZCBwcmltaXRpdmUgcHJvcGVydGllc1xyXG4gICAqIEBwYXJhbSBzb3VyY2UgXHJcbiAgICovXHJcbiAgIHB1YmxpYyBhZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlOmZoaXIuRmhpckVsZW1lbnRBcmdzID0ge30pOmZoaXIuRmhpclByaW1pdGl2ZSB7XHJcbiAgICBpZiAoc291cmNlLmlkKSB7IHRoaXMuaWQgPSBzb3VyY2UuaWQudG9TdHJpbmcoKTsgfVxyXG4gICAgaWYgKHNvdXJjZS5leHRlbnNpb24pIHtcclxuICAgICAgc291cmNlLmV4dGVuc2lvbi5mb3JFYWNoKCh4KSA9PiB7XHJcbiAgICAgICAgdGhpcy5leHRlbnNpb24ucHVzaChuZXcgZmhpci5FeHRlbnNpb24oeCkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmx1ZW50LXN0eWxlIGZ1bmN0aW9uIHRvIGFkZCBleHRlbnNpb25zXHJcbiAgICogQHBhcmFtIGV4dFxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gICBwdWJsaWMgYWRkRXh0ZW5zaW9uKGV4dDpmaGlyLkV4dGVuc2lvbkFyZ3MpOmZoaXIuRmhpclByaW1pdGl2ZSB7XHJcbiAgICB0aGlzLmV4dGVuc2lvbi5wdXNoKG5ldyBmaGlyLkV4dGVuc2lvbihleHQpKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBSZW1vdmUgQUxMIGluc3RhbmNlcyBvZiBleHRlbnNpb25zIHdpdGggYSBtYXRjaGluZyBVUkwsIG9wdGlvbmFsbHkgcmVjdXJzZSBpbnRvIGV4dGVuc2lvbi5leHRlbnNpb24uXHJcbiAgICogQHBhcmFtIHVybCBVUkwgb2YgZXh0ZW5zaW9ucyB0byByZW1vdmVcclxuICAgKiBAcGFyYW0gc2VhcmNoTmVzdGVkIElmIHRoZSByZW1vdmFsIHNob3VsZCBzZWFyY2ggZm9yIG5lc3RlZCBleHRlbnNpb25zXHJcbiAgICovXHJcbiAgcHVibGljIHJlbW92ZUV4dGVuc2lvbnModXJsOmZoaXIuRmhpclN0cmluZ3xzdHJpbmcsIHNlYXJjaE5lc3RlZDpib29sZWFuID0gZmFsc2UpOmZoaXIuRmhpclByaW1pdGl2ZSB7XHJcbiAgICBpZiAodGhpcy5leHRlbnNpb24ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWF0Y2hVcmw6c3RyaW5nID0gKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSA/IHVybCA6ICh1cmwgYXMgZmhpci5GaGlyU3RyaW5nKS52YWx1ZSA/PyAnJztcclxuICAgIGxldCBjbGVhbjpmaGlyLkV4dGVuc2lvbltdID0gdGhpcy5leHRlbnNpb24uZmlsdGVyKChleHQpID0+IChleHQ/LnVybD8udmFsdWUgPz8gJycpICE9PSBtYXRjaFVybCkgPz8gW107XHJcbiAgICBpZiAoc2VhcmNoTmVzdGVkKSB7XHJcbiAgICAgIGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IGNsZWFuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY2xlYW5baV0gPSBjbGVhbltpXS5yZW1vdmVFeHRlbnNpb25zKG1hdGNoVXJsLCBzZWFyY2hOZXN0ZWQpIGFzIGZoaXIuRXh0ZW5zaW9uO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmV4dGVuc2lvbiA9IGNsZWFuO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaW5kIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiBhbiBleHRlbnNpb24gd2l0aCBhIG1hdGNoaW5nIFVSTCwgb3B0aW9uYWxseSByZWN1cnNlIGludG8gZXh0ZW5zaW9uLmV4dGVuc2lvbi5cclxuICAgKiBAcGFyYW0gdXJsIFVSTCB0byBzZWFyY2ggZm9yXHJcbiAgICogQHBhcmFtIHNlYXJjaE5lc3RlZCBJZiB0aGUgc2VhcmNoIHNob3VsZCBuZXN0IGludG8gZXh0ZW5zaW9uc1xyXG4gICAqIEByZXR1cm5zIFRoZSBGSElSIEV4dGVuc2lvbiBpZiBmb3VuZCwgb3IgdW5kZWZpbmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBmaW5kRXh0ZW5zaW9uKHVybDpmaGlyLkZoaXJTdHJpbmd8c3RyaW5nLCBzZWFyY2hOZXN0ZWQ6Ym9vbGVhbiA9IGZhbHNlKTpmaGlyLkV4dGVuc2lvbnx1bmRlZmluZWQge1xyXG4gICAgaWYgKHRoaXMuZXh0ZW5zaW9uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWF0Y2hVcmw6c3RyaW5nID0gKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSA/IHVybCA6ICh1cmwgYXMgZmhpci5GaGlyU3RyaW5nKS52YWx1ZSA/PyAnJztcclxuICAgIGlmIChzZWFyY2hOZXN0ZWQpIHtcclxuICAgICAgY29uc3QgZmxhdDpmaGlyLkV4dGVuc2lvbltdID0gRmhpclByaW1pdGl2ZS5yZWN1cnNlRm9yRXh0ZW5zaW9uKG1hdGNoVXJsLCB0aGlzLmV4dGVuc2lvbik7XHJcbiAgICAgIGlmIChmbGF0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZsYXRbMF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb24uZmluZCgoZXh0KSA9PiAoZXh0Py51cmw/LnZhbHVlID09PSBtYXRjaFVybCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCBhbGwgaW5zdGFuY2VzIG9mIGFuIGV4dGVuc2lvbiB3aXRoIGEgbWF0Y2hpbmcgVVJMLCBvcHRpb25hbGx5IHJlY3Vyc2UgaW50byBleHRlbnNpb24uZXh0ZW5zaW9uLlxyXG4gICAqIEBwYXJhbSB1cmwgVVJMIHRvIHNlYXJjaCBmb3JcclxuICAgKiBAcGFyYW0gc2VhcmNoTmVzdGVkIElmIHRoZSBzZWFyY2ggc2hvdWxkIG5lc3QgaW50byBleHRlbnNpb25zXHJcbiAgICogQHJldHVybnMgQSBuZXcgYXJyYXkgb2YgRkhJUiBFeHRlbnNpb25zLCB3aXRoIGp1c3QgdGhlIGRlc2lyZWQgZXh0ZW5zaW9uc1xyXG4gICAqL1xyXG4gIHB1YmxpYyBmaWx0ZXJFeHRlbnNpb25zKHVybDpmaGlyLkZoaXJTdHJpbmd8c3RyaW5nLCBzZWFyY2hOZXN0ZWQ6Ym9vbGVhbiA9IGZhbHNlKTpmaGlyLkV4dGVuc2lvbltdIHtcclxuICAgIGlmICh0aGlzLmV4dGVuc2lvbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWF0Y2hVcmw6c3RyaW5nID0gKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSA/IHVybCA6ICh1cmwgYXMgZmhpci5GaGlyU3RyaW5nKS52YWx1ZSA/PyAnJztcclxuICAgIGlmIChzZWFyY2hOZXN0ZWQpIHtcclxuICAgICAgcmV0dXJuIEZoaXJQcmltaXRpdmUucmVjdXJzZUZvckV4dGVuc2lvbihtYXRjaFVybCwgdGhpcy5leHRlbnNpb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uLmZpbHRlcigoZXh0KSA9PiAoZXh0Py51cmw/LnZhbHVlID09PSBtYXRjaFVybCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbnRlcm5hbCByZWN1cnNpdmUgc2VhcmNoIGZ1bmN0aW9uXHJcbiAgICogQHBhcmFtIHVybCBcclxuICAgKiBAcGFyYW0gZXh0cyBcclxuICAgKiBAcmV0dXJucyBBIG5ldyBhcnJheSAoZmxhdCkgb2YgbWF0Y2hpbmcgZXh0ZW5zaW9uc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlY3Vyc2VGb3JFeHRlbnNpb24odXJsOnN0cmluZywgZXh0czpmaGlyLkV4dGVuc2lvbltdKTpmaGlyLkV4dGVuc2lvbltdIHtcclxuICAgIGlmICgoIWV4dHMpIHx8IChleHRzLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgbGV0IHZhbDpmaGlyLkV4dGVuc2lvbltdID0gW107XHJcbiAgICBleHRzLmZvckVhY2goXHJcbiAgICAgIChleHQpID0+IHtcclxuICAgICAgICBpZiAoZXh0ICYmIGV4dC51cmwgJiYgKGV4dC51cmwudmFsdWUgPT09IHVybCkpIHtcclxuICAgICAgICAgIHZhbC5wdXNoKGV4dCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChleHQgJiYgZXh0LmV4dGVuc2lvbiAmJiAoZXh0LmV4dGVuc2lvbi5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgdmFsLnB1c2goLi4udGhpcy5yZWN1cnNlRm9yRXh0ZW5zaW9uKHVybCwgZXh0LmV4dGVuc2lvbikpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0sXHJcbiAgICAgIFtdKTtcclxuICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG59Il19