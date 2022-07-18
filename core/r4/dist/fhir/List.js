// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: List
import * as fhir from '../fhir.js';
// @ts-ignore
import { ListStatusVsValidation } from '../fhirValueSets/ListStatusVsValidation.js';
// @ts-ignore
import { ListModeVsValidation } from '../fhirValueSets/ListModeVsValidation.js';
/**
 * If there are no entries in the list, an emptyReason SHOULD be provided.
 */
export class ListEntry extends fhir.BackboneElement {
    /**
     * Default constructor for ListEntry - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['flag']) {
            this.flag = new fhir.CodeableConcept(source.flag);
        }
        if (source['deleted']) {
            this.deleted = new fhir.FhirBoolean({ value: source.deleted });
        }
        if (source['_deleted']) {
            if (this.deleted) {
                this.deleted.addExtendedProperties(source._deleted);
            }
            else {
                this.deleted = new fhir.FhirBoolean(source._deleted);
            }
        }
        if (source['date']) {
            this.date = new fhir.FhirDateTime({ value: source.date });
        }
        if (source['_date']) {
            if (this.date) {
                this.date.addExtendedProperties(source._date);
            }
            else {
                this.date = new fhir.FhirDateTime(source._date);
            }
        }
        if (source['item']) {
            this.item = new fhir.Reference(source.item);
        }
        else {
            this.item = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'List.entry';
        }
        iss.push(...this.vOS('flag', exp));
        iss.push(...this.vOS('deleted', exp));
        iss.push(...this.vOS('date', exp));
        iss.push(...this.vRS('item', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
ListEntry._fts_dataType = 'ListEntry';
/**
 * A list is a curated collection of resources.
 */
export class List extends fhir.DomainResource {
    /**
     * Default constructor for List - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'List';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['status']) {
            this.status = new fhir.FhirCode({ value: source.status });
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status);
            }
        }
        if (source['mode']) {
            this.mode = new fhir.FhirCode({ value: source.mode });
        }
        else {
            this.mode = null;
        }
        if (source['_mode']) {
            if (this.mode) {
                this.mode.addExtendedProperties(source._mode);
            }
            else {
                this.mode = new fhir.FhirCode(source._mode);
            }
        }
        if (source['title']) {
            this.title = new fhir.FhirString({ value: source.title });
        }
        if (source['_title']) {
            if (this.title) {
                this.title.addExtendedProperties(source._title);
            }
            else {
                this.title = new fhir.FhirString(source._title);
            }
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source['date']) {
            this.date = new fhir.FhirDateTime({ value: source.date });
        }
        if (source['_date']) {
            if (this.date) {
                this.date.addExtendedProperties(source._date);
            }
            else {
                this.date = new fhir.FhirDateTime(source._date);
            }
        }
        if (source['source']) {
            this.source = new fhir.Reference(source.source);
        }
        if (source['orderedBy']) {
            this.orderedBy = new fhir.CodeableConcept(source.orderedBy);
        }
        if (source['note']) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        else {
            this.note = [];
        }
        if (source['entry']) {
            this.entry = source.entry.map((x) => new fhir.ListEntry(x));
        }
        else {
            this.entry = [];
        }
        if (source['emptyReason']) {
            this.emptyReason = new fhir.CodeableConcept(source.emptyReason);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'List';
        }
        iss.push(...this.vRPS('resourceType', exp));
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vRSV('status', exp, 'ListStatus', ListStatusVsValidation, 'r'));
        iss.push(...this.vRSV('mode', exp, 'ListMode', ListModeVsValidation, 'r'));
        iss.push(...this.vOS('title', exp));
        iss.push(...this.vOS('code', exp));
        iss.push(...this.vOS('subject', exp));
        iss.push(...this.vOS('encounter', exp));
        iss.push(...this.vOS('date', exp));
        iss.push(...this.vOS('source', exp));
        iss.push(...this.vOS('orderedBy', exp));
        iss.push(...this.vOA('note', exp));
        iss.push(...this.vOA('entry', exp));
        iss.push(...this.vOS('emptyReason', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
List._fts_dataType = 'List';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxzQkFBc0I7QUFFdEIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFRbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBR3BGLGFBQWE7QUFDYixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQTJDaEY7O0dBRUc7QUFDSCxNQUFNLE9BQU8sU0FBVSxTQUFRLElBQUksQ0FBQyxlQUFlO0lBcUJqRDs7T0FFRztJQUNILFlBQVksU0FBZ0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDdEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUFFO1FBQzFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7U0FBRTtRQUN4RixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsUUFBUyxDQUFDLENBQUM7YUFBRTtpQkFDdEU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFB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QUFDLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLFlBQVksRUFBQyxzQkFBc0IsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsVUFBVSxFQUFDLG9CQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQTFIRDs7R0FFRztBQUM2QixrQkFBYSxHQUFVLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogTGlzdFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTGlzdEl0ZW1GbGFnQ29kZXMsICBMaXN0SXRlbUZsYWdDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTGlzdEl0ZW1GbGFnQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IExpc3RJdGVtRmxhZ1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTGlzdEl0ZW1GbGFnVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBMaXN0U3RhdHVzQ29kZXMsICBMaXN0U3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xpc3RTdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTGlzdFN0YXR1c1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTGlzdFN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTGlzdE1vZGVDb2RlcywgIExpc3RNb2RlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xpc3RNb2RlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IExpc3RNb2RlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9MaXN0TW9kZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTGlzdEV4YW1wbGVDb2RlcywgIExpc3RFeGFtcGxlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xpc3RFeGFtcGxlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IExpc3RFeGFtcGxlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9MaXN0RXhhbXBsZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTGlzdE9yZGVyQ29kZXMsICBMaXN0T3JkZXJDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTGlzdE9yZGVyQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IExpc3RPcmRlclZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTGlzdE9yZGVyVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBMaXN0RW1wdHlSZWFzb25Db2RlcywgIExpc3RFbXB0eVJlYXNvbkNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9MaXN0RW1wdHlSZWFzb25Db2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTGlzdEVtcHR5UmVhc29uVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9MaXN0RW1wdHlSZWFzb25Wc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgTGlzdEVudHJ5IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExpc3RFbnRyeUFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBmbGFnIGNhbiBvbmx5IGJlIHVuZGVyc3Rvb2QgaW4gdGhlIGNvbnRleHQgb2YgdGhlIExpc3QuY29kZS4gSWYgdGhlIGZsYWcgbWVhbnMgdGhhdCB0aGUgZW50cnkgaGFzIGFjdHVhbGx5IGJlZW4gZGVsZXRlZCBmcm9tIHRoZSBsaXN0LCB0aGUgZGVsZXRlZCBlbGVtZW50IFNIQUxMIGJlIHRydWUuIERlbGV0ZWQgY2FuIG9ubHkgYmUgdXNlZCBpZiB0aGUgTGlzdC5tb2RlIGlzIFwiY2hhbmdlc1wiLlxyXG4gICAqL1xyXG4gIGZsYWc/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBmbGFnIG1lYW5zIHRoYXQgdGhlIGVudHJ5IGhhcyBhY3R1YWxseSBiZWVuIGRlbGV0ZWQgZnJvbSB0aGUgbGlzdCwgdGhlIGRlbGV0ZWQgZWxlbWVudCBTSEFMTCBiZSB0cnVlLiBCb3RoIGZsYWcgYW5kIGRlbGV0ZWQgY2FuIG9ubHkgYmUgdXNlZCBpZiB0aGUgTGlzdC5tb2RlIGlzIFwiY2hhbmdlc1wiLiBBIGRlbGV0ZWQgZW50cnkgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBuYXJyYXRpdmUgYXMgZGVsZXRlZC4gIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSBpdCBpbmRpY2F0ZXMgdGhhdCBhbiBpdGVtIGlzICh0byBiZSkgbm8gbG9uZ2VyIGluIHRoZSBsaXN0LlxyXG4gICAqL1xyXG4gIGRlbGV0ZWQ/OiBmaGlyLkZoaXJCb29sZWFufGJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBMaXN0LmVudHJ5LmRlbGV0ZWRcclxuICAgKi9cclxuICBfZGVsZXRlZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGlzIGl0ZW0gd2FzIGFkZGVkIHRvIHRoZSBsaXN0LlxyXG4gICAqL1xyXG4gIGRhdGU/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBMaXN0LmVudHJ5LmRhdGVcclxuICAgKi9cclxuICBfZGF0ZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGFjdHVhbCByZXNvdXJjZSBmcm9tIHdoaWNoIGRhdGEgd2FzIGRlcml2ZWQuXHJcbiAgICovXHJcbiAgaXRlbTogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJZiB0aGVyZSBhcmUgbm8gZW50cmllcyBpbiB0aGUgbGlzdCwgYW4gZW1wdHlSZWFzb24gU0hPVUxEIGJlIHByb3ZpZGVkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExpc3RFbnRyeSBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0xpc3RFbnRyeSc7XHJcbiAgLyoqXHJcbiAgICogVGhlIGZsYWcgY2FuIG9ubHkgYmUgdW5kZXJzdG9vZCBpbiB0aGUgY29udGV4dCBvZiB0aGUgTGlzdC5jb2RlLiBJZiB0aGUgZmxhZyBtZWFucyB0aGF0IHRoZSBlbnRyeSBoYXMgYWN0dWFsbHkgYmVlbiBkZWxldGVkIGZyb20gdGhlIGxpc3QsIHRoZSBkZWxldGVkIGVsZW1lbnQgU0hBTEwgYmUgdHJ1ZS4gRGVsZXRlZCBjYW4gb25seSBiZSB1c2VkIGlmIHRoZSBMaXN0Lm1vZGUgaXMgXCJjaGFuZ2VzXCIuXHJcbiAgICovXHJcbiAgcHVibGljIGZsYWc/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIGZsYWcgbWVhbnMgdGhhdCB0aGUgZW50cnkgaGFzIGFjdHVhbGx5IGJlZW4gZGVsZXRlZCBmcm9tIHRoZSBsaXN0LCB0aGUgZGVsZXRlZCBlbGVtZW50IFNIQUxMIGJlIHRydWUuIEJvdGggZmxhZyBhbmQgZGVsZXRlZCBjYW4gb25seSBiZSB1c2VkIGlmIHRoZSBMaXN0Lm1vZGUgaXMgXCJjaGFuZ2VzXCIuIEEgZGVsZXRlZCBlbnRyeSBzaG91bGQgYmUgZGlzcGxheWVkIGluIG5hcnJhdGl2ZSBhcyBkZWxldGVkLiAgVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIGl0IGluZGljYXRlcyB0aGF0IGFuIGl0ZW0gaXMgKHRvIGJlKSBubyBsb25nZXIgaW4gdGhlIGxpc3QuXHJcbiAgICovXHJcbiAgcHVibGljIGRlbGV0ZWQ/OiBmaGlyLkZoaXJCb29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVuIHRoaXMgaXRlbSB3YXMgYWRkZWQgdG8gdGhlIGxpc3QuXHJcbiAgICovXHJcbiAgcHVibGljIGRhdGU/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGFjdHVhbCByZXNvdXJjZSBmcm9tIHdoaWNoIGRhdGEgd2FzIGRlcml2ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGl0ZW06IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgTGlzdEVudHJ5IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8TGlzdEVudHJ5QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2ZsYWcnXSkgeyB0aGlzLmZsYWcgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmZsYWcpOyB9XHJcbiAgICBpZiAoc291cmNlWydkZWxldGVkJ10pIHsgdGhpcy5kZWxldGVkID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oe3ZhbHVlOiBzb3VyY2UuZGVsZXRlZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGVsZXRlZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRlbGV0ZWQpIHsgdGhpcy5kZWxldGVkLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2RlbGV0ZWQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kZWxldGVkID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oc291cmNlLl9kZWxldGVkIGFzIFBhcnRpYWw8Zmhpci5GaGlyQm9vbGVhbkFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGF0ZSddKSB7IHRoaXMuZGF0ZSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5kYXRlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kYXRlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZGF0ZSkgeyB0aGlzLmRhdGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZGF0ZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9kYXRlIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2l0ZW0nXSkgeyB0aGlzLml0ZW0gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLml0ZW0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pdGVtID0gbnVsbDsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0xpc3QuZW50cnknIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdmbGFnJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdkZWxldGVkJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdkYXRlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdpdGVtJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBMaXN0IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExpc3RBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJMaXN0XCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXIgZm9yIHRoZSBMaXN0IGFzc2lnbmVkIGZvciBidXNpbmVzcyBwdXJwb3NlcyBvdXRzaWRlIHRoZSBjb250ZXh0IG9mIEZISVIuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgY29kZXMgdGhhdCBtYXJrIHRoZSByZXNvdXJjZSBhcyBub3QgY3VycmVudGx5IHZhbGlkLlxyXG4gICAqL1xyXG4gIHN0YXR1czogZmhpci5GaGlyQ29kZTxMaXN0U3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IExpc3Quc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIGEgY2hhbmdlIGxpc3QgbXVzdCBub3QgYmUgbWlzdW5kZXJzdG9vZCBhcyBhIGNvbXBsZXRlIGxpc3QuXHJcbiAgICovXHJcbiAgbW9kZTogZmhpci5GaGlyQ29kZTxMaXN0TW9kZUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBMaXN0Lm1vZGVcclxuICAgKi9cclxuICBfbW9kZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSBsYWJlbCBmb3IgdGhlIGxpc3QgYXNzaWduZWQgYnkgdGhlIGF1dGhvci5cclxuICAgKi9cclxuICB0aXRsZT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBMaXN0LnRpdGxlXHJcbiAgICovXHJcbiAgX3RpdGxlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBJZiB0aGVyZSBpcyBubyBjb2RlLCB0aGUgcHVycG9zZSBvZiB0aGUgbGlzdCBpcyBpbXBsaWVkIHdoZXJlIGl0IGlzIHVzZWQsIHN1Y2ggYXMgaW4gYSBkb2N1bWVudCBzZWN0aW9uIHVzaW5nIERvY3VtZW50LnNlY3Rpb24uY29kZS5cclxuICAgKi9cclxuICBjb2RlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTb21lIHB1cmVseSBhcmJpdHJhcnkgbGlzdHMgZG8gbm90IGhhdmUgYSBjb21tb24gc3ViamVjdCwgc28gdGhpcyBpcyBvcHRpb25hbC5cclxuICAgKi9cclxuICBzdWJqZWN0PzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZW5jb3VudGVyIHRoYXQgaXMgdGhlIGNvbnRleHQgaW4gd2hpY2ggdGhpcyBsaXN0IHdhcyBjcmVhdGVkLlxyXG4gICAqL1xyXG4gIGVuY291bnRlcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFjdHVhbCBpbXBvcnRhbnQgZGF0ZSBpcyB0aGUgZGF0ZSBvZiBjdXJyZW5jeSBvZiB0aGUgcmVzb3VyY2VzIHRoYXQgd2VyZSBzdW1tYXJpemVkLCBidXQgaXQgaXMgdXN1YWxseSBhc3N1bWVkIHRoYXQgdGhlc2UgYXJlIGN1cnJlbnQgd2hlbiB0aGUgcHJlcGFyYXRpb24gb2NjdXJzLlxyXG4gICAqL1xyXG4gIGRhdGU/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBMaXN0LmRhdGVcclxuICAgKi9cclxuICBfZGF0ZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIHByaW1hcnkgc291cmNlIGlzIHRoZSBlbnRpdHkgdGhhdCBtYWRlIHRoZSBkZWNpc2lvbnMgd2hhdCBpdGVtcyBhcmUgaW4gdGhlIGxpc3QuIFRoaXMgbWF5IGJlIHNvZnR3YXJlIG9yIHVzZXIuXHJcbiAgICovXHJcbiAgc291cmNlPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBcHBsaWNhdGlvbnMgU0hPVUxEIHJlbmRlciBvcmRlcmVkIGxpc3RzIGluIHRoZSBvcmRlciBwcm92aWRlZCwgYnV0IE1BWSBhbGxvdyB1c2VycyB0byByZS1vcmRlciBiYXNlZCBvbiB0aGVpciBvd24gcHJlZmVyZW5jZXMgYXMgd2VsbC4gSWYgdGhlcmUgaXMgbm8gb3JkZXIgc3BlY2lmaWVkLCB0aGUgb3JkZXIgaXMgdW5rbm93biwgdGhvdWdoIHRoZXJlIG1heSBzdGlsbCBiZSBzb21lIG9yZGVyLlxyXG4gICAqL1xyXG4gIG9yZGVyZWRCeT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQ29tbWVudHMgdGhhdCBhcHBseSB0byB0aGUgb3ZlcmFsbCBsaXN0LlxyXG4gICAqL1xyXG4gIG5vdGU/OiBmaGlyLkFubm90YXRpb25BcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZXJlIGFyZSBubyBlbnRyaWVzIGluIHRoZSBsaXN0LCBhbiBlbXB0eVJlYXNvbiBTSE9VTEQgYmUgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgZW50cnk/OiBmaGlyLkxpc3RFbnRyeUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHZhcmlvdXMgcmVhc29ucyBmb3IgYW4gZW1wdHkgbGlzdCBtYWtlIGEgc2lnbmlmaWNhbnQgaW50ZXJwcmV0YXRpb24gdG8gaXRzIGludGVycHJldGF0aW9uLiBOb3RlIHRoYXQgdGhpcyBjb2RlIGlzIGZvciB1c2Ugd2hlbiB0aGUgZW50aXJlIGxpc3QgaGFzIGJlZW4gc3VwcHJlc3NlZCwgYW5kIG5vdCBmb3Igd2hlbiBpbmRpdmlkdWFsIGl0ZW1zIGFyZSBvbWl0dGVkIC0gaW1wbGVtZW50ZXJzIG1heSBjb25zaWRlciB1c2luZyBhIHRleHQgbm90ZSBvciBhIGZsYWcgb24gYW4gZW50cnkgaW4gdGhlc2UgY2FzZXMuXHJcbiAgICovXHJcbiAgZW1wdHlSZWFzb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBsaXN0IGlzIGEgY3VyYXRlZCBjb2xsZWN0aW9uIG9mIHJlc291cmNlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBMaXN0IGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdMaXN0JztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIkxpc3RcIjtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVyIGZvciB0aGUgTGlzdCBhc3NpZ25lZCBmb3IgYnVzaW5lc3MgcHVycG9zZXMgb3V0c2lkZSB0aGUgY29udGV4dCBvZiBGSElSLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIHJlc291cmNlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1czogZmhpci5GaGlyQ29kZTxMaXN0U3RhdHVzQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIGEgY2hhbmdlIGxpc3QgbXVzdCBub3QgYmUgbWlzdW5kZXJzdG9vZCBhcyBhIGNvbXBsZXRlIGxpc3QuXHJcbiAgICovXHJcbiAgcHVibGljIG1vZGU6IGZoaXIuRmhpckNvZGU8TGlzdE1vZGVDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBBIGxhYmVsIGZvciB0aGUgbGlzdCBhc3NpZ25lZCBieSB0aGUgYXV0aG9yLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0aXRsZT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlcmUgaXMgbm8gY29kZSwgdGhlIHB1cnBvc2Ugb2YgdGhlIGxpc3QgaXMgaW1wbGllZCB3aGVyZSBpdCBpcyB1c2VkLCBzdWNoIGFzIGluIGEgZG9jdW1lbnQgc2VjdGlvbiB1c2luZyBEb2N1bWVudC5zZWN0aW9uLmNvZGUuXHJcbiAgICovXHJcbiAgcHVibGljIGNvZGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogU29tZSBwdXJlbHkgYXJiaXRyYXJ5IGxpc3RzIGRvIG5vdCBoYXZlIGEgY29tbW9uIHN1YmplY3QsIHNvIHRoaXMgaXMgb3B0aW9uYWwuXHJcbiAgICovXHJcbiAgcHVibGljIHN1YmplY3Q/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGVuY291bnRlciB0aGF0IGlzIHRoZSBjb250ZXh0IGluIHdoaWNoIHRoaXMgbGlzdCB3YXMgY3JlYXRlZC5cclxuICAgKi9cclxuICBwdWJsaWMgZW5jb3VudGVyPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhY3R1YWwgaW1wb3J0YW50IGRhdGUgaXMgdGhlIGRhdGUgb2YgY3VycmVuY3kgb2YgdGhlIHJlc291cmNlcyB0aGF0IHdlcmUgc3VtbWFyaXplZCwgYnV0IGl0IGlzIHVzdWFsbHkgYXNzdW1lZCB0aGF0IHRoZXNlIGFyZSBjdXJyZW50IHdoZW4gdGhlIHByZXBhcmF0aW9uIG9jY3Vycy5cclxuICAgKi9cclxuICBwdWJsaWMgZGF0ZT86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcHJpbWFyeSBzb3VyY2UgaXMgdGhlIGVudGl0eSB0aGF0IG1hZGUgdGhlIGRlY2lzaW9ucyB3aGF0IGl0ZW1zIGFyZSBpbiB0aGUgbGlzdC4gVGhpcyBtYXkgYmUgc29mdHdhcmUgb3IgdXNlci5cclxuICAgKi9cclxuICBwdWJsaWMgc291cmNlPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFwcGxpY2F0aW9ucyBTSE9VTEQgcmVuZGVyIG9yZGVyZWQgbGlzdHMgaW4gdGhlIG9yZGVyIHByb3ZpZGVkLCBidXQgTUFZIGFsbG93IHVzZXJzIHRvIHJlLW9yZGVyIGJhc2VkIG9uIHRoZWlyIG93biBwcmVmZXJlbmNlcyBhcyB3ZWxsLiBJZiB0aGVyZSBpcyBubyBvcmRlciBzcGVjaWZpZWQsIHRoZSBvcmRlciBpcyB1bmtub3duLCB0aG91Z2ggdGhlcmUgbWF5IHN0aWxsIGJlIHNvbWUgb3JkZXIuXHJcbiAgICovXHJcbiAgcHVibGljIG9yZGVyZWRCeT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBDb21tZW50cyB0aGF0IGFwcGx5IHRvIHRoZSBvdmVyYWxsIGxpc3QuXHJcbiAgICovXHJcbiAgcHVibGljIG5vdGU6IGZoaXIuQW5ub3RhdGlvbltdO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZXJlIGFyZSBubyBlbnRyaWVzIGluIHRoZSBsaXN0LCBhbiBlbXB0eVJlYXNvbiBTSE9VTEQgYmUgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGVudHJ5OiBmaGlyLkxpc3RFbnRyeVtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2YXJpb3VzIHJlYXNvbnMgZm9yIGFuIGVtcHR5IGxpc3QgbWFrZSBhIHNpZ25pZmljYW50IGludGVycHJldGF0aW9uIHRvIGl0cyBpbnRlcnByZXRhdGlvbi4gTm90ZSB0aGF0IHRoaXMgY29kZSBpcyBmb3IgdXNlIHdoZW4gdGhlIGVudGlyZSBsaXN0IGhhcyBiZWVuIHN1cHByZXNzZWQsIGFuZCBub3QgZm9yIHdoZW4gaW5kaXZpZHVhbCBpdGVtcyBhcmUgb21pdHRlZCAtIGltcGxlbWVudGVycyBtYXkgY29uc2lkZXIgdXNpbmcgYSB0ZXh0IG5vdGUgb3IgYSBmbGFnIG9uIGFuIGVudHJ5IGluIHRoZXNlIGNhc2VzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBlbXB0eVJlYXNvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBMaXN0IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8TGlzdEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdMaXN0JztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8TGlzdFN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxMaXN0U3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydtb2RlJ10pIHsgdGhpcy5tb2RlID0gbmV3IGZoaXIuRmhpckNvZGU8TGlzdE1vZGVDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2UubW9kZX0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5tb2RlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX21vZGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5tb2RlKSB7IHRoaXMubW9kZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9tb2RlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubW9kZSA9IG5ldyBmaGlyLkZoaXJDb2RlPExpc3RNb2RlQ29kZVR5cGU+KHNvdXJjZS5fbW9kZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndGl0bGUnXSkgeyB0aGlzLnRpdGxlID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS50aXRsZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfdGl0bGUnXSkge1xyXG4gICAgICBpZiAodGhpcy50aXRsZSkgeyB0aGlzLnRpdGxlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3RpdGxlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudGl0bGUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fdGl0bGUgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NvZGUnXSkgeyB0aGlzLmNvZGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmNvZGUpOyB9XHJcbiAgICBpZiAoc291cmNlWydzdWJqZWN0J10pIHsgdGhpcy5zdWJqZWN0ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5zdWJqZWN0KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZW5jb3VudGVyJ10pIHsgdGhpcy5lbmNvdW50ZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmVuY291bnRlcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2RhdGUnXSkgeyB0aGlzLmRhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UuZGF0ZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGF0ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGUpIHsgdGhpcy5kYXRlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2RhdGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kYXRlID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fZGF0ZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydzb3VyY2UnXSkgeyB0aGlzLnNvdXJjZSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uuc291cmNlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnb3JkZXJlZEJ5J10pIHsgdGhpcy5vcmRlcmVkQnkgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLm9yZGVyZWRCeSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ25vdGUnXSkgeyB0aGlzLm5vdGUgPSBzb3VyY2Uubm90ZS5tYXAoKHgpID0+IG5ldyBmaGlyLkFubm90YXRpb24oeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5ub3RlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2VudHJ5J10pIHsgdGhpcy5lbnRyeSA9IHNvdXJjZS5lbnRyeS5tYXAoKHgpID0+IG5ldyBmaGlyLkxpc3RFbnRyeSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmVudHJ5ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2VtcHR5UmVhc29uJ10pIHsgdGhpcy5lbXB0eVJlYXNvbiA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuZW1wdHlSZWFzb24pOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnTGlzdCcgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlBTKCdyZXNvdXJjZVR5cGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2lkZW50aWZpZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlNWKCdzdGF0dXMnLGV4cCwnTGlzdFN0YXR1cycsTGlzdFN0YXR1c1ZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTVignbW9kZScsZXhwLCdMaXN0TW9kZScsTGlzdE1vZGVWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndGl0bGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2NvZGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3N1YmplY3QnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2VuY291bnRlcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZGF0ZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnc291cmNlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdvcmRlcmVkQnknLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ25vdGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2VudHJ5JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdlbXB0eVJlYXNvbicsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=