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
        if (source) {
            if ((source.value) && (source.value['_fts_dataType'])) {
                this.value = source.value.value ?? null;
                this.id = source.value.id ?? undefined;
                if ((source.value.extension) && (source.value.extension.length > 0)) {
                    this.extension = [];
                    source.value.extension.forEach((e) => {
                        if (e === null) {
                            this.extension.push(null);
                        }
                        else {
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
                    if (e === null) {
                        this.extension.push(null);
                    }
                    else {
                        this.extension.push(new fhir.Extension(e, options));
                    }
                });
            }
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
     * Add an extension with the desired URL and FHIR value
     * @param url
     * @param value
     */
    addExtension(url, value) {
        if (this.extension === undefined) {
            this.extension = [];
        }
        this.extension.push(fhir.Extension.fromValue(url, value));
    }
}
FhirPrimitive._fts_isPrimitive = true;
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirPrimitive._fts_dataType = 'PrimitiveType';
FhirPrimitive._fts_jsonType = 'any';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpclByaW1pdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRmhpclByaW1pdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFtQm5DLE1BQU0sT0FBTyxhQUFjLFNBQVEsSUFBSSxDQUFDLFFBQVE7SUF1QjlDOzs7Ozs7T0FNRztJQUNILFlBQVksU0FBb0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDMUYsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLFNBQVMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ25FLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFLLEVBQUUsRUFBRTt3QkFDeEMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFOzRCQUFFLElBQUksQ0FBQyxTQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUFFOzZCQUMxQzs0QkFBRSxJQUFJLENBQUMsU0FBVSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7eUJBQUU7b0JBQ2hFLENBQUMsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7aUJBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDM0I7WUFFRCxJQUFJLE1BQU0sQ0FBQyxFQUFFLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO2FBQUU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztpQkFBRTtnQkFDN0MsTUFBTSxDQUFDLFNBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFLLEVBQUUsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO3dCQUFFLElBQUksQ0FBQyxTQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUFFO3lCQUMxQzt3QkFBRSxJQUFJLENBQUMsU0FBVSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7cUJBQUU7Z0JBQ2hFLENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNhLGlCQUFpQjtRQUMvQixJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2RixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNWLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsV0FBVyxFQUFFLHdEQUF3RDthQUN0RSxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsWUFBWSxDQUFDLEdBQVUsRUFBRSxLQUFtQjtRQUMxQyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7QUFuRnNCLDhCQUFnQixHQUFXLElBQUksQ0FBQztBQUN2RDs7R0FFRztBQUM2QiwyQkFBYSxHQUFRLGVBQWUsQ0FBQztBQUM5QywyQkFBYSxHQUFRLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZoaXJQcmltaXRpdmVBcmdzIHtcclxuICAvKipcclxuICAgKiBWYWx1ZSBvZiB0aGUgcHJpbWl0aXZlIC0gY29uc3RyYWluZWQgYnkgZGVjZW5kYW50IGNsYXNzZXMuXHJcbiAgICovXHJcbiAgIHZhbHVlPzphbnl8bnVsbHx1bmRlZmluZWQ7XHJcblxyXG4gICAvKipcclxuICAgICAqIFVuaXF1ZSBpZCBmb3IgaW50ZXItZWxlbWVudCByZWZlcmVuY2luZ1xyXG4gICAgICovXHJcbiAgIGlkPzpzdHJpbmd8dW5kZWZpbmVkO1xyXG4gXHJcbiAgIC8qKlxyXG4gICAgICogQWRkaXRpb25hbCBjb250ZW50IGRlZmluZWQgYnkgaW1wbGVtZW50YXRpb25zXHJcbiAgICAgKi9cclxuICAgZXh0ZW5zaW9uPzooZmhpci5FeHRlbnNpb258bnVsbClbXXx1bmRlZmluZWQ7XHJcbiB9XHJcblxyXG5leHBvcnQgY2xhc3MgRmhpclByaW1pdGl2ZSBleHRlbmRzIGZoaXIuRmhpckJhc2UgIHtcclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IF9mdHNfaXNQcmltaXRpdmU6Ym9vbGVhbiA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZz0nUHJpbWl0aXZlVHlwZSc7XHJcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBfZnRzX2pzb25UeXBlOnN0cmluZz0nYW55JztcclxuXHJcbiAgLyoqXHJcbiAgICogVmFsdWUgb2YgdGhlIHByaW1pdGl2ZSAtIGNvbnN0cmFpbmVkIGJ5IGRlY2VuZGFudCBjbGFzc2VzLlxyXG4gICAqL1xyXG4gIHZhbHVlPzpib29sZWFufG51bWJlcnxiaWdpbnR8c3RyaW5nfG51bGx8dW5kZWZpbmVkO1xyXG5cclxuICAvKipcclxuICAgICogVW5pcXVlIGlkIGZvciBpbnRlci1lbGVtZW50IHJlZmVyZW5jaW5nXHJcbiAgICAqL1xyXG4gIGlkPzpzdHJpbmd8dW5kZWZpbmVkO1xyXG5cclxuICAvKipcclxuICAgICogQWRkaXRpb25hbCBjb250ZW50IGRlZmluZWQgYnkgaW1wbGVtZW50YXRpb25zXHJcbiAgICAqL1xyXG4gIGV4dGVuc2lvbj86KGZoaXIuRXh0ZW5zaW9ufG51bGwpW118dW5kZWZpbmVkO1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvciBmb3IgRkhJUiBwcmltaXRpdmUgdHlwZSBlbGVtZW50c1xyXG4gICAqIEBwYXJhbSB2YWx1ZSBcclxuICAgKiBAcGFyYW0gaWQgXHJcbiAgICogQHBhcmFtIGV4dGVuc2lvbiBcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxGaGlyUHJpbWl0aXZlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGlmIChzb3VyY2UpIHtcclxuICAgICAgaWYgKChzb3VyY2UudmFsdWUpICYmIChzb3VyY2UudmFsdWVbJ19mdHNfZGF0YVR5cGUnXSkpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gc291cmNlLnZhbHVlLnZhbHVlID8/IG51bGw7XHJcbiAgICAgICAgdGhpcy5pZCA9IHNvdXJjZS52YWx1ZS5pZCA/PyB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKChzb3VyY2UudmFsdWUuZXh0ZW5zaW9uKSAmJiAoc291cmNlLnZhbHVlLmV4dGVuc2lvbi5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgdGhpcy5leHRlbnNpb24gPSBbXTtcclxuICAgICAgICAgIHNvdXJjZS52YWx1ZS5leHRlbnNpb24hLmZvckVhY2goKGU6YW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlID09PSBudWxsKSB7IHRoaXMuZXh0ZW5zaW9uIS5wdXNoKG51bGwpOyB9XHJcbiAgICAgICAgICAgIGVsc2UgeyB0aGlzLmV4dGVuc2lvbiEucHVzaChuZXcgZmhpci5FeHRlbnNpb24oZSwgb3B0aW9ucykpOyB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoc291cmNlLnZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHNvdXJjZS52YWx1ZTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpZiAoc291cmNlLmlkKSB7IHRoaXMuaWQgPSBzb3VyY2UuaWQ7IH1cclxuICAgICAgaWYgKChzb3VyY2UuZXh0ZW5zaW9uKSAmJiAoc291cmNlLmV4dGVuc2lvbi5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgIGlmICghdGhpcy5leHRlbnNpb24pIHsgdGhpcy5leHRlbnNpb24gPSBbXTsgfVxyXG4gICAgICAgIHNvdXJjZS5leHRlbnNpb24hLmZvckVhY2goKGU6YW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoZSA9PT0gbnVsbCkgeyB0aGlzLmV4dGVuc2lvbiEucHVzaChudWxsKTsgfVxyXG4gICAgICAgICAgZWxzZSB7IHRoaXMuZXh0ZW5zaW9uIS5wdXNoKG5ldyBmaGlyLkV4dGVuc2lvbihlLCBvcHRpb25zKSk7IH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKCk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oKTtcclxuICAgIGlmICgoIXRoaXMudmFsdWUpICYmICghdGhpcy5pZCkgJiYgKCghdGhpcy5leHRlbnNpb24pIHx8ICh0aGlzLmV4dGVuc2lvbi5sZW5ndGggPT09IDApKSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7XHJcbiAgICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsXHJcbiAgICAgICAgY29kZTogJ3JlcXVpcmVkJyxcclxuICAgICAgICBkaWFnbm9zdGljczogXCJQcmltaXRpdmUgdmFsdWVzIG11c3QgaGF2ZSBhIHZhbHVlLCBpZCwgb3IgZXh0ZW5zaW9ucy5cIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGFuIGV4dGVuc2lvbiB3aXRoIHRoZSBkZXNpcmVkIFVSTCBhbmQgRkhJUiB2YWx1ZVxyXG4gICAqIEBwYXJhbSB1cmwgXHJcbiAgICogQHBhcmFtIHZhbHVlIFxyXG4gICAqL1xyXG4gIGFkZEV4dGVuc2lvbih1cmw6c3RyaW5nLCB2YWx1ZTpmaGlyLkZoaXJCYXNlKSB7XHJcbiAgICBpZiAodGhpcy5leHRlbnNpb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmV4dGVuc2lvbiA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXh0ZW5zaW9uLnB1c2goZmhpci5FeHRlbnNpb24uZnJvbVZhbHVlKHVybCwgdmFsdWUpKTtcclxuICB9XHJcbn0iXX0=