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
            if ((source.value) && (source.value.constructor) && (source.value.constructor['_fts_dataType'])) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpclByaW1pdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRmhpclByaW1pdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFtQm5DLE1BQU0sT0FBTyxhQUFjLFNBQVEsSUFBSSxDQUFDLFFBQVE7SUF1QjlDOzs7Ozs7T0FNRztJQUNILFlBQVksU0FBb0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDMUYsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRTtnQkFDL0YsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksU0FBUyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDbkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7b0JBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFO3dCQUN4QyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7NEJBQUUsSUFBSSxDQUFDLFNBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQUU7NkJBQzFDOzRCQUFFLElBQUksQ0FBQyxTQUFVLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQzt5QkFBRTtvQkFDaEUsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7YUFDRjtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUMzQjtZQUVELElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRTtnQkFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7YUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2lCQUFFO2dCQUM3QyxNQUFNLENBQUMsU0FBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFO29CQUNsQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7d0JBQUUsSUFBSSxDQUFDLFNBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQUU7eUJBQzFDO3dCQUFFLElBQUksQ0FBQyxTQUFVLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztxQkFBRTtnQkFDaEUsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ2EsaUJBQWlCO1FBQy9CLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3ZGLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLElBQUksRUFBRSxVQUFVO2dCQUNoQixXQUFXLEVBQUUsd0RBQXdEO2FBQ3RFLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxZQUFZLENBQUMsR0FBVSxFQUFFLEtBQW1CO1FBQzFDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FDckI7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOztBQW5Gc0IsOEJBQWdCLEdBQVcsSUFBSSxDQUFDO0FBQ3ZEOztHQUVHO0FBQzZCLDJCQUFhLEdBQVEsZUFBZSxDQUFDO0FBQzlDLDJCQUFhLEdBQVEsS0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmhpclByaW1pdGl2ZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFZhbHVlIG9mIHRoZSBwcmltaXRpdmUgLSBjb25zdHJhaW5lZCBieSBkZWNlbmRhbnQgY2xhc3Nlcy5cclxuICAgKi9cclxuICAgdmFsdWU/OmFueXxudWxsfHVuZGVmaW5lZDtcclxuXHJcbiAgIC8qKlxyXG4gICAgICogVW5pcXVlIGlkIGZvciBpbnRlci1lbGVtZW50IHJlZmVyZW5jaW5nXHJcbiAgICAgKi9cclxuICAgaWQ/OnN0cmluZ3x1bmRlZmluZWQ7XHJcbiBcclxuICAgLyoqXHJcbiAgICAgKiBBZGRpdGlvbmFsIGNvbnRlbnQgZGVmaW5lZCBieSBpbXBsZW1lbnRhdGlvbnNcclxuICAgICAqL1xyXG4gICBleHRlbnNpb24/OihmaGlyLkV4dGVuc2lvbnxudWxsKVtdfHVuZGVmaW5lZDtcclxuIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaGlyUHJpbWl0aXZlIGV4dGVuZHMgZmhpci5GaGlyQmFzZSAge1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgX2Z0c19pc1ByaW1pdGl2ZTpib29sZWFuID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nPSdQcmltaXRpdmVUeXBlJztcclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IF9mdHNfanNvblR5cGU6c3RyaW5nPSdhbnknO1xyXG5cclxuICAvKipcclxuICAgKiBWYWx1ZSBvZiB0aGUgcHJpbWl0aXZlIC0gY29uc3RyYWluZWQgYnkgZGVjZW5kYW50IGNsYXNzZXMuXHJcbiAgICovXHJcbiAgdmFsdWU/OmJvb2xlYW58bnVtYmVyfGJpZ2ludHxzdHJpbmd8bnVsbHx1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAgKiBVbmlxdWUgaWQgZm9yIGludGVyLWVsZW1lbnQgcmVmZXJlbmNpbmdcclxuICAgICovXHJcbiAgaWQ/OnN0cmluZ3x1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAgKiBBZGRpdGlvbmFsIGNvbnRlbnQgZGVmaW5lZCBieSBpbXBsZW1lbnRhdGlvbnNcclxuICAgICovXHJcbiAgZXh0ZW5zaW9uPzooZmhpci5FeHRlbnNpb258bnVsbClbXXx1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yIGZvciBGSElSIHByaW1pdGl2ZSB0eXBlIGVsZW1lbnRzXHJcbiAgICogQHBhcmFtIHZhbHVlIFxyXG4gICAqIEBwYXJhbSBpZCBcclxuICAgKiBAcGFyYW0gZXh0ZW5zaW9uIFxyXG4gICAqIEBwYXJhbSBvcHRpb25zIFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEZoaXJQcmltaXRpdmVBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgaWYgKHNvdXJjZSkge1xyXG4gICAgICBpZiAoKHNvdXJjZS52YWx1ZSkgJiYgKHNvdXJjZS52YWx1ZS5jb25zdHJ1Y3RvcikgJiYgKHNvdXJjZS52YWx1ZS5jb25zdHJ1Y3RvclsnX2Z0c19kYXRhVHlwZSddKSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBzb3VyY2UudmFsdWUudmFsdWUgPz8gbnVsbDtcclxuICAgICAgICB0aGlzLmlkID0gc291cmNlLnZhbHVlLmlkID8/IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoKHNvdXJjZS52YWx1ZS5leHRlbnNpb24pICYmIChzb3VyY2UudmFsdWUuZXh0ZW5zaW9uLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICB0aGlzLmV4dGVuc2lvbiA9IFtdO1xyXG4gICAgICAgICAgc291cmNlLnZhbHVlLmV4dGVuc2lvbiEuZm9yRWFjaCgoZTphbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUgPT09IG51bGwpIHsgdGhpcy5leHRlbnNpb24hLnB1c2gobnVsbCk7IH1cclxuICAgICAgICAgICAgZWxzZSB7IHRoaXMuZXh0ZW5zaW9uIS5wdXNoKG5ldyBmaGlyLkV4dGVuc2lvbihlLCBvcHRpb25zKSk7IH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChzb3VyY2UudmFsdWUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gc291cmNlLnZhbHVlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlmIChzb3VyY2UuaWQpIHsgdGhpcy5pZCA9IHNvdXJjZS5pZDsgfVxyXG4gICAgICBpZiAoKHNvdXJjZS5leHRlbnNpb24pICYmIChzb3VyY2UuZXh0ZW5zaW9uLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmV4dGVuc2lvbikgeyB0aGlzLmV4dGVuc2lvbiA9IFtdOyB9XHJcbiAgICAgICAgc291cmNlLmV4dGVuc2lvbiEuZm9yRWFjaCgoZTphbnkpID0+IHtcclxuICAgICAgICAgIGlmIChlID09PSBudWxsKSB7IHRoaXMuZXh0ZW5zaW9uIS5wdXNoKG51bGwpOyB9XHJcbiAgICAgICAgICBlbHNlIHsgdGhpcy5leHRlbnNpb24hLnB1c2gobmV3IGZoaXIuRXh0ZW5zaW9uKGUsIG9wdGlvbnMpKTsgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbigpO1xyXG4gICAgaWYgKCghdGhpcy52YWx1ZSkgJiYgKCF0aGlzLmlkKSAmJiAoKCF0aGlzLmV4dGVuc2lvbikgfHwgKHRoaXMuZXh0ZW5zaW9uLmxlbmd0aCA9PT0gMCkpKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHtcclxuICAgICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgICBjb2RlOiAncmVxdWlyZWQnLFxyXG4gICAgICAgIGRpYWdub3N0aWNzOiBcIlByaW1pdGl2ZSB2YWx1ZXMgbXVzdCBoYXZlIGEgdmFsdWUsIGlkLCBvciBleHRlbnNpb25zLlwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgYW4gZXh0ZW5zaW9uIHdpdGggdGhlIGRlc2lyZWQgVVJMIGFuZCBGSElSIHZhbHVlXHJcbiAgICogQHBhcmFtIHVybCBcclxuICAgKiBAcGFyYW0gdmFsdWUgXHJcbiAgICovXHJcbiAgYWRkRXh0ZW5zaW9uKHVybDpzdHJpbmcsIHZhbHVlOmZoaXIuRmhpckJhc2UpIHtcclxuICAgIGlmICh0aGlzLmV4dGVuc2lvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuZXh0ZW5zaW9uID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5leHRlbnNpb24ucHVzaChmaGlyLkV4dGVuc2lvbi5mcm9tVmFsdWUodXJsLCB2YWx1ZSkpO1xyXG4gIH1cclxufSJdfQ==