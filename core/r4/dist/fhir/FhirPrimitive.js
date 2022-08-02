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
        super({}, options);
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
        let iss = super.doModelValidation(exp);
        if ((this.value === undefined) && (!this.id) && ((!this.extension) || (this.extension.length === 0))) {
            iss.push({
                severity: 'error',
                code: 'required',
                details: { text: 'Primitive values must have a value, id, or extensions.' },
                expression: [exp],
            });
        }
        return iss;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpclByaW1pdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRmhpclByaW1pdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFtQm5DLE1BQU0sT0FBTyxhQUFjLFNBQVEsSUFBSSxDQUFDLFFBQVE7SUF1QjlDOzs7Ozs7T0FNRztJQUNILFlBQVksU0FBb0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDMUYsS0FBSyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQWJyQjs7WUFFSTtRQUNKLGNBQVMsR0FBb0IsRUFBRSxDQUFDO1FBVzlCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRTtnQkFDN0csSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksU0FBUyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDbkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7b0JBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFO3dCQUN4QyxJQUFJLENBQUMsRUFBRTs0QkFBRSxJQUFJLENBQUMsU0FB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QUFHLEdBQW9CLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUNWLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDTixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQzdDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2QsT0FBTzthQUNSO1lBQ0QsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUN0RCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDMUQsT0FBTzthQUNSO1lBQ0QsT0FBTztRQUNULENBQUMsRUFDRCxFQUFFLENBQUMsQ0FBQztRQUNOLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUFwTHNCLDhCQUFnQixHQUFXLElBQUksQ0FBQztBQUN2RDs7R0FFRztBQUM2QiwyQkFBYSxHQUFRLGVBQWUsQ0FBQztBQUM5QywyQkFBYSxHQUFRLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZoaXJQcmltaXRpdmVBcmdzIHtcclxuICAvKipcclxuICAgKiBWYWx1ZSBvZiB0aGUgcHJpbWl0aXZlIC0gY29uc3RyYWluZWQgYnkgZGVjZW5kYW50IGNsYXNzZXMuXHJcbiAgICovXHJcbiAgIHZhbHVlPzphbnl8bnVsbHx1bmRlZmluZWQ7XHJcblxyXG4gICAvKipcclxuICAgICAqIFVuaXF1ZSBpZCBmb3IgaW50ZXItZWxlbWVudCByZWZlcmVuY2luZ1xyXG4gICAgICovXHJcbiAgIGlkPzpzdHJpbmd8dW5kZWZpbmVkO1xyXG4gXHJcbiAgIC8qKlxyXG4gICAgICogQWRkaXRpb25hbCBjb250ZW50IGRlZmluZWQgYnkgaW1wbGVtZW50YXRpb25zXHJcbiAgICAgKi9cclxuICAgZXh0ZW5zaW9uPzooZmhpci5FeHRlbnNpb258bnVsbClbXXx1bmRlZmluZWQ7XHJcbiB9XHJcblxyXG5leHBvcnQgY2xhc3MgRmhpclByaW1pdGl2ZSBleHRlbmRzIGZoaXIuRmhpckJhc2UgIHtcclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IF9mdHNfaXNQcmltaXRpdmU6Ym9vbGVhbiA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZz0nUHJpbWl0aXZlVHlwZSc7XHJcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBfZnRzX2pzb25UeXBlOnN0cmluZz0nYW55JztcclxuXHJcbiAgLyoqXHJcbiAgICogVmFsdWUgb2YgdGhlIHByaW1pdGl2ZSAtIGNvbnN0cmFpbmVkIGJ5IGRlY2VuZGFudCBjbGFzc2VzLlxyXG4gICAqL1xyXG4gIHZhbHVlPzpib29sZWFufG51bWJlcnxiaWdpbnR8c3RyaW5nfG51bGx8dW5kZWZpbmVkO1xyXG5cclxuICAvKipcclxuICAgICogVW5pcXVlIGlkIGZvciBpbnRlci1lbGVtZW50IHJlZmVyZW5jaW5nXHJcbiAgICAqL1xyXG4gIGlkPzpzdHJpbmd8dW5kZWZpbmVkO1xyXG5cclxuICAvKipcclxuICAgICogQWRkaXRpb25hbCBjb250ZW50IGRlZmluZWQgYnkgaW1wbGVtZW50YXRpb25zXHJcbiAgICAqL1xyXG4gIGV4dGVuc2lvbjpmaGlyLkV4dGVuc2lvbltdID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yIGZvciBGSElSIHByaW1pdGl2ZSB0eXBlIGVsZW1lbnRzXHJcbiAgICogQHBhcmFtIHZhbHVlIFxyXG4gICAqIEBwYXJhbSBpZCBcclxuICAgKiBAcGFyYW0gZXh0ZW5zaW9uIFxyXG4gICAqIEBwYXJhbSBvcHRpb25zIFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEZoaXJQcmltaXRpdmVBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcih7fSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlKSB7XHJcbiAgICAgIGlmICgoc291cmNlLnZhbHVlICE9PSB1bmRlZmluZWQpICYmIChzb3VyY2UudmFsdWUuY29uc3RydWN0b3IpICYmIChzb3VyY2UudmFsdWUuY29uc3RydWN0b3JbJ19mdHNfZGF0YVR5cGUnXSkpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gc291cmNlLnZhbHVlLnZhbHVlID8/IG51bGw7XHJcbiAgICAgICAgdGhpcy5pZCA9IHNvdXJjZS52YWx1ZS5pZCA/PyB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKChzb3VyY2UudmFsdWUuZXh0ZW5zaW9uKSAmJiAoc291cmNlLnZhbHVlLmV4dGVuc2lvbi5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgdGhpcy5leHRlbnNpb24gPSBbXTtcclxuICAgICAgICAgIHNvdXJjZS52YWx1ZS5leHRlbnNpb24hLmZvckVhY2goKGU6YW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlKSB7IHRoaXMuZXh0ZW5zaW9uIS5wdXNoKG5ldyBmaGlyLkV4dGVuc2lvbihlLCBvcHRpb25zKSk7IH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChzb3VyY2UudmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBzb3VyY2UudmFsdWU7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKHNvdXJjZS5pZCkgeyB0aGlzLmlkID0gc291cmNlLmlkOyB9XHJcbiAgICAgIGlmICgoc291cmNlLmV4dGVuc2lvbikgJiYgKHNvdXJjZS5leHRlbnNpb24ubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZXh0ZW5zaW9uKSB7IHRoaXMuZXh0ZW5zaW9uID0gW107IH1cclxuICAgICAgICBzb3VyY2UuZXh0ZW5zaW9uIS5mb3JFYWNoKChlOmFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGUpIHsgdGhpcy5leHRlbnNpb24hLnB1c2gobmV3IGZoaXIuRXh0ZW5zaW9uKGUsIG9wdGlvbnMpKTsgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmV4dGVuc2lvbiA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmICgodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSAmJiAoIXRoaXMuaWQpICYmICgoIXRoaXMuZXh0ZW5zaW9uKSB8fCAodGhpcy5leHRlbnNpb24ubGVuZ3RoID09PSAwKSkpIHtcclxuICAgICAgaXNzLnB1c2goe1xyXG4gICAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxyXG4gICAgICAgIGNvZGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgICAgZGV0YWlsczogeyB0ZXh0OiAnUHJpbWl0aXZlIHZhbHVlcyBtdXN0IGhhdmUgYSB2YWx1ZSwgaWQsIG9yIGV4dGVuc2lvbnMuJyB9LFxyXG4gICAgICAgIGV4cHJlc3Npb246IFtleHBdLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGbHVlbnQtc3R5bGUgZnVuY3Rpb24gdG8gYWRkIGV4dGVuZGVkIHByaW1pdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgICogQHBhcmFtIHNvdXJjZSBcclxuICAgKi9cclxuICAgcHVibGljIGFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2U6Zmhpci5GaGlyRWxlbWVudEFyZ3MgPSB7fSk6Zmhpci5GaGlyUHJpbWl0aXZlIHtcclxuICAgIGlmIChzb3VyY2UuaWQpIHsgdGhpcy5pZCA9IHNvdXJjZS5pZC50b1N0cmluZygpOyB9XHJcbiAgICBpZiAoc291cmNlLmV4dGVuc2lvbikge1xyXG4gICAgICBzb3VyY2UuZXh0ZW5zaW9uLmZvckVhY2goKHgpID0+IHtcclxuICAgICAgICB0aGlzLmV4dGVuc2lvbi5wdXNoKG5ldyBmaGlyLkV4dGVuc2lvbih4KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGbHVlbnQtc3R5bGUgZnVuY3Rpb24gdG8gYWRkIGV4dGVuc2lvbnNcclxuICAgKiBAcGFyYW0gZXh0XHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgIHB1YmxpYyBhZGRFeHRlbnNpb24oZXh0OmZoaXIuRXh0ZW5zaW9uQXJncyk6Zmhpci5GaGlyUHJpbWl0aXZlIHtcclxuICAgIHRoaXMuZXh0ZW5zaW9uLnB1c2gobmV3IGZoaXIuRXh0ZW5zaW9uKGV4dCkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBBTEwgaW5zdGFuY2VzIG9mIGV4dGVuc2lvbnMgd2l0aCBhIG1hdGNoaW5nIFVSTCwgb3B0aW9uYWxseSByZWN1cnNlIGludG8gZXh0ZW5zaW9uLmV4dGVuc2lvbi5cclxuICAgKiBAcGFyYW0gdXJsIFVSTCBvZiBleHRlbnNpb25zIHRvIHJlbW92ZVxyXG4gICAqIEBwYXJhbSBzZWFyY2hOZXN0ZWQgSWYgdGhlIHJlbW92YWwgc2hvdWxkIHNlYXJjaCBmb3IgbmVzdGVkIGV4dGVuc2lvbnNcclxuICAgKi9cclxuICBwdWJsaWMgcmVtb3ZlRXh0ZW5zaW9ucyh1cmw6Zmhpci5GaGlyU3RyaW5nfHN0cmluZywgc2VhcmNoTmVzdGVkOmJvb2xlYW4gPSBmYWxzZSk6Zmhpci5GaGlyUHJpbWl0aXZlIHtcclxuICAgIGlmICh0aGlzLmV4dGVuc2lvbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXRjaFVybDpzdHJpbmcgPSAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpID8gdXJsIDogKHVybCBhcyBmaGlyLkZoaXJTdHJpbmcpLnZhbHVlID8/ICcnO1xyXG4gICAgbGV0IGNsZWFuOmZoaXIuRXh0ZW5zaW9uW10gPSB0aGlzLmV4dGVuc2lvbi5maWx0ZXIoKGV4dCkgPT4gKGV4dD8udXJsPy52YWx1ZSA/PyAnJykgIT09IG1hdGNoVXJsKSA/PyBbXTtcclxuICAgIGlmIChzZWFyY2hOZXN0ZWQpIHtcclxuICAgICAgZm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgY2xlYW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjbGVhbltpXSA9IGNsZWFuW2ldLnJlbW92ZUV4dGVuc2lvbnMobWF0Y2hVcmwsIHNlYXJjaE5lc3RlZCkgYXMgZmhpci5FeHRlbnNpb247XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZXh0ZW5zaW9uID0gY2xlYW47XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgdGhlIGZpcnN0IGluc3RhbmNlIG9mIGFuIGV4dGVuc2lvbiB3aXRoIGEgbWF0Y2hpbmcgVVJMLCBvcHRpb25hbGx5IHJlY3Vyc2UgaW50byBleHRlbnNpb24uZXh0ZW5zaW9uLlxyXG4gICAqIEBwYXJhbSB1cmwgVVJMIHRvIHNlYXJjaCBmb3JcclxuICAgKiBAcGFyYW0gc2VhcmNoTmVzdGVkIElmIHRoZSBzZWFyY2ggc2hvdWxkIG5lc3QgaW50byBleHRlbnNpb25zXHJcbiAgICogQHJldHVybnMgVGhlIEZISVIgRXh0ZW5zaW9uIGlmIGZvdW5kLCBvciB1bmRlZmluZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGZpbmRFeHRlbnNpb24odXJsOmZoaXIuRmhpclN0cmluZ3xzdHJpbmcsIHNlYXJjaE5lc3RlZDpib29sZWFuID0gZmFsc2UpOmZoaXIuRXh0ZW5zaW9ufHVuZGVmaW5lZCB7XHJcbiAgICBpZiAodGhpcy5leHRlbnNpb24ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXRjaFVybDpzdHJpbmcgPSAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpID8gdXJsIDogKHVybCBhcyBmaGlyLkZoaXJTdHJpbmcpLnZhbHVlID8/ICcnO1xyXG4gICAgaWYgKHNlYXJjaE5lc3RlZCkge1xyXG4gICAgICBjb25zdCBmbGF0OmZoaXIuRXh0ZW5zaW9uW10gPSBGaGlyUHJpbWl0aXZlLnJlY3Vyc2VGb3JFeHRlbnNpb24obWF0Y2hVcmwsIHRoaXMuZXh0ZW5zaW9uKTtcclxuICAgICAgaWYgKGZsYXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmxhdFswXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbi5maW5kKChleHQpID0+IChleHQ/LnVybD8udmFsdWUgPT09IG1hdGNoVXJsKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaW5kIGFsbCBpbnN0YW5jZXMgb2YgYW4gZXh0ZW5zaW9uIHdpdGggYSBtYXRjaGluZyBVUkwsIG9wdGlvbmFsbHkgcmVjdXJzZSBpbnRvIGV4dGVuc2lvbi5leHRlbnNpb24uXHJcbiAgICogQHBhcmFtIHVybCBVUkwgdG8gc2VhcmNoIGZvclxyXG4gICAqIEBwYXJhbSBzZWFyY2hOZXN0ZWQgSWYgdGhlIHNlYXJjaCBzaG91bGQgbmVzdCBpbnRvIGV4dGVuc2lvbnNcclxuICAgKiBAcmV0dXJucyBBIG5ldyBhcnJheSBvZiBGSElSIEV4dGVuc2lvbnMsIHdpdGgganVzdCB0aGUgZGVzaXJlZCBleHRlbnNpb25zXHJcbiAgICovXHJcbiAgcHVibGljIGZpbHRlckV4dGVuc2lvbnModXJsOmZoaXIuRmhpclN0cmluZ3xzdHJpbmcsIHNlYXJjaE5lc3RlZDpib29sZWFuID0gZmFsc2UpOmZoaXIuRXh0ZW5zaW9uW10ge1xyXG4gICAgaWYgKHRoaXMuZXh0ZW5zaW9uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXRjaFVybDpzdHJpbmcgPSAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpID8gdXJsIDogKHVybCBhcyBmaGlyLkZoaXJTdHJpbmcpLnZhbHVlID8/ICcnO1xyXG4gICAgaWYgKHNlYXJjaE5lc3RlZCkge1xyXG4gICAgICByZXR1cm4gRmhpclByaW1pdGl2ZS5yZWN1cnNlRm9yRXh0ZW5zaW9uKG1hdGNoVXJsLCB0aGlzLmV4dGVuc2lvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb24uZmlsdGVyKChleHQpID0+IChleHQ/LnVybD8udmFsdWUgPT09IG1hdGNoVXJsKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIHJlY3Vyc2l2ZSBzZWFyY2ggZnVuY3Rpb25cclxuICAgKiBAcGFyYW0gdXJsIFxyXG4gICAqIEBwYXJhbSBleHRzIFxyXG4gICAqIEByZXR1cm5zIEEgbmV3IGFycmF5IChmbGF0KSBvZiBtYXRjaGluZyBleHRlbnNpb25zXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVjdXJzZUZvckV4dGVuc2lvbih1cmw6c3RyaW5nLCBleHRzOmZoaXIuRXh0ZW5zaW9uW10pOmZoaXIuRXh0ZW5zaW9uW10ge1xyXG4gICAgaWYgKCghZXh0cykgfHwgKGV4dHMubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBsZXQgdmFsOmZoaXIuRXh0ZW5zaW9uW10gPSBbXTtcclxuICAgIGV4dHMuZm9yRWFjaChcclxuICAgICAgKGV4dCkgPT4ge1xyXG4gICAgICAgIGlmIChleHQgJiYgZXh0LnVybCAmJiAoZXh0LnVybC52YWx1ZSA9PT0gdXJsKSkge1xyXG4gICAgICAgICAgdmFsLnB1c2goZXh0KTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV4dCAmJiBleHQuZXh0ZW5zaW9uICYmIChleHQuZXh0ZW5zaW9uLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICB2YWwucHVzaCguLi50aGlzLnJlY3Vyc2VGb3JFeHRlbnNpb24odXJsLCBleHQuZXh0ZW5zaW9uKSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSxcclxuICAgICAgW10pO1xyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9XHJcbn0iXX0=