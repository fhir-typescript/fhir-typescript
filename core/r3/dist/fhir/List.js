// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
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
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'List.entry';
        }
        this.vOS('flag', exp);
        this.vOS('deleted', exp);
        this.vOS('date', exp);
        this.vRS('item', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
ListEntry._fts_dataType = 'ListEntry';
/**
 * A set of information summarized from a list of other resources.
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
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'List';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vRSV('status', exp, 'ListStatus', ListStatusVsValidation, 'r');
        this.vRSV('mode', exp, 'ListMode', ListModeVsValidation, 'r');
        this.vOS('title', exp);
        this.vOS('code', exp);
        this.vOS('subject', exp);
        this.vOS('encounter', exp);
        this.vOS('date', exp);
        this.vOS('source', exp);
        this.vOS('orderedBy', exp);
        this.vOA('note', exp);
        this.vOA('entry', exp);
        this.vOS('emptyReason', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
List._fts_dataType = 'List';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxzQkFBc0I7QUFFdEIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFRbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBR3BGLGFBQWE7QUFDYixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQTRDaEY7O0dBRUc7QUFDSCxNQUFNLE9BQU8sU0FBVSxTQUFRLElBQUksQ0FBQyxlQUFlO0lBc0JqRDs7T0FFRztJQUNILFlBQVksU0FBZ0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDdEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUFFO1FBQzFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7U0FBRTtRQUN4RixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsUUFBUyxDQUFDLENBQUM7YUFBRTtpQkFDdEU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFB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O1FBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBMUhEOztHQUVHO0FBQzZCLGtCQUFhLEdBQVUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBMaXN0XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBMaXN0SXRlbUZsYWdDb2RlcywgIExpc3RJdGVtRmxhZ0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9MaXN0SXRlbUZsYWdDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTGlzdEl0ZW1GbGFnVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9MaXN0SXRlbUZsYWdWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IExpc3RTdGF0dXNDb2RlcywgIExpc3RTdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTGlzdFN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBMaXN0U3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9MaXN0U3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBMaXN0TW9kZUNvZGVzLCAgTGlzdE1vZGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTGlzdE1vZGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTGlzdE1vZGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xpc3RNb2RlVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBMaXN0RXhhbXBsZUNvZGVzLCAgTGlzdEV4YW1wbGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTGlzdEV4YW1wbGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTGlzdEV4YW1wbGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xpc3RFeGFtcGxlVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBMaXN0T3JkZXJDb2RlcywgIExpc3RPcmRlckNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9MaXN0T3JkZXJDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTGlzdE9yZGVyVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9MaXN0T3JkZXJWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IExpc3RFbXB0eVJlYXNvbkNvZGVzLCAgTGlzdEVtcHR5UmVhc29uQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xpc3RFbXB0eVJlYXNvbkNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBMaXN0RW1wdHlSZWFzb25Wc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xpc3RFbXB0eVJlYXNvblZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBMaXN0RW50cnkgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlzdEVudHJ5QXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGZsYWcgY2FuIG9ubHkgYmUgdW5kZXJzdG9vZCBpbiB0aGUgY29udGV4dCBvZiB0aGUgTGlzdC5jb2RlLiBJZiB0aGUgZmxhZyBtZWFucyB0aGF0IHRoZSBlbnRyeSBoYXMgYWN0dWFsbHkgYmVlbiBkZWxldGVkIGZyb20gdGhlIGxpc3QsIHRoZSBkZWxldGVkIGVsZW1lbnQgU0hBTEwgYmUgdHJ1ZS4gRGVsZXRlZCBjYW4gb25seSBiZSB1c2VkIGlmIHRoZSBMaXN0Lm1vZGUgaXMgXCJjaGFuZ2VzXCIuXHJcbiAgICovXHJcbiAgZmxhZz86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIGZsYWcgbWVhbnMgdGhhdCB0aGUgZW50cnkgaGFzIGFjdHVhbGx5IGJlZW4gZGVsZXRlZCBmcm9tIHRoZSBsaXN0LCB0aGUgZGVsZXRlZCBlbGVtZW50IFNIQUxMIGJlIHRydWUuIEJvdGggZmxhZyBhbmQgZGVsZXRlZCBjYW4gb25seSBiZSB1c2VkIGlmIHRoZSBMaXN0Lm1vZGUgaXMgXCJjaGFuZ2VzXCIuIEEgZGVsZXRlZCBlbnRyeSBzaG91bGQgYmUgZGlzcGxheWVkIGluIG5hcnJhdGl2ZSBhcyBkZWxldGVkLlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSBpdCBpbmRpY2F0ZXMgdGhhdCBhbiBpdGVtIGlzICh0byBiZSkgbm8gbG9uZ2VyIGluIHRoZSBsaXN0LlxyXG4gICAqL1xyXG4gIGRlbGV0ZWQ/OiBmaGlyLkZoaXJCb29sZWFufGJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBMaXN0LmVudHJ5LmRlbGV0ZWRcclxuICAgKi9cclxuICBfZGVsZXRlZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyBvbmx5IHVzZWZ1bCBhbmQgbWVhbmluZ2Z1bCB3aGVuIHRoZSBtb2RlIGlzIFwid29ya2luZ1wiLlxyXG4gICAqL1xyXG4gIGRhdGU/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBMaXN0LmVudHJ5LmRhdGVcclxuICAgKi9cclxuICBfZGF0ZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGFjdHVhbCByZXNvdXJjZSBmcm9tIHdoaWNoIGRhdGEgd2FzIGRlcml2ZWQuXHJcbiAgICovXHJcbiAgaXRlbTogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJZiB0aGVyZSBhcmUgbm8gZW50cmllcyBpbiB0aGUgbGlzdCwgYW4gZW1wdHlSZWFzb24gU0hPVUxEIGJlIHByb3ZpZGVkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExpc3RFbnRyeSBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0xpc3RFbnRyeSc7XHJcbiAgLyoqXHJcbiAgICogVGhlIGZsYWcgY2FuIG9ubHkgYmUgdW5kZXJzdG9vZCBpbiB0aGUgY29udGV4dCBvZiB0aGUgTGlzdC5jb2RlLiBJZiB0aGUgZmxhZyBtZWFucyB0aGF0IHRoZSBlbnRyeSBoYXMgYWN0dWFsbHkgYmVlbiBkZWxldGVkIGZyb20gdGhlIGxpc3QsIHRoZSBkZWxldGVkIGVsZW1lbnQgU0hBTEwgYmUgdHJ1ZS4gRGVsZXRlZCBjYW4gb25seSBiZSB1c2VkIGlmIHRoZSBMaXN0Lm1vZGUgaXMgXCJjaGFuZ2VzXCIuXHJcbiAgICovXHJcbiAgcHVibGljIGZsYWc/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIGZsYWcgbWVhbnMgdGhhdCB0aGUgZW50cnkgaGFzIGFjdHVhbGx5IGJlZW4gZGVsZXRlZCBmcm9tIHRoZSBsaXN0LCB0aGUgZGVsZXRlZCBlbGVtZW50IFNIQUxMIGJlIHRydWUuIEJvdGggZmxhZyBhbmQgZGVsZXRlZCBjYW4gb25seSBiZSB1c2VkIGlmIHRoZSBMaXN0Lm1vZGUgaXMgXCJjaGFuZ2VzXCIuIEEgZGVsZXRlZCBlbnRyeSBzaG91bGQgYmUgZGlzcGxheWVkIGluIG5hcnJhdGl2ZSBhcyBkZWxldGVkLlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSBpdCBpbmRpY2F0ZXMgdGhhdCBhbiBpdGVtIGlzICh0byBiZSkgbm8gbG9uZ2VyIGluIHRoZSBsaXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkZWxldGVkPzogZmhpci5GaGlyQm9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyBvbmx5IHVzZWZ1bCBhbmQgbWVhbmluZ2Z1bCB3aGVuIHRoZSBtb2RlIGlzIFwid29ya2luZ1wiLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkYXRlPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBhY3R1YWwgcmVzb3VyY2UgZnJvbSB3aGljaCBkYXRhIHdhcyBkZXJpdmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpdGVtOiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIExpc3RFbnRyeSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPExpc3RFbnRyeUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydmbGFnJ10pIHsgdGhpcy5mbGFnID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5mbGFnKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGVsZXRlZCddKSB7IHRoaXMuZGVsZXRlZCA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHt2YWx1ZTogc291cmNlLmRlbGV0ZWR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2RlbGV0ZWQnXSkge1xyXG4gICAgICBpZiAodGhpcy5kZWxldGVkKSB7IHRoaXMuZGVsZXRlZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kZWxldGVkISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZGVsZXRlZCA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHNvdXJjZS5fZGVsZXRlZCBhcyBQYXJ0aWFsPGZoaXIuRmhpckJvb2xlYW5BcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2RhdGUnXSkgeyB0aGlzLmRhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UuZGF0ZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGF0ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGUpIHsgdGhpcy5kYXRlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2RhdGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kYXRlID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fZGF0ZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydpdGVtJ10pIHsgdGhpcy5pdGVtID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5pdGVtKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaXRlbSA9IG51bGw7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdMaXN0LmVudHJ5JyB9XHJcbiAgICB0aGlzLnZPUygnZmxhZycsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2RlbGV0ZWQnLGV4cClcclxuICAgIHRoaXMudk9TKCdkYXRlJyxleHApXHJcbiAgICB0aGlzLnZSUygnaXRlbScsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIExpc3QgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlzdEFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkxpc3RcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllciBmb3IgdGhlIExpc3QgYXNzaWduZWQgZm9yIGJ1c2luZXNzIHB1cnBvc2VzIG91dHNpZGUgdGhlIGNvbnRleHQgb2YgRkhJUi5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIHJlc291cmNlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPExpc3RTdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTGlzdC5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgYSBjaGFuZ2UgbGlzdCBtdXN0IG5vdCBiZSBtaXMtdW5kZXJzdG9vZCBhcyBhIGNvbXBsZXRlIGxpc3QuXHJcbiAgICovXHJcbiAgbW9kZTogZmhpci5GaGlyQ29kZTxMaXN0TW9kZUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBMaXN0Lm1vZGVcclxuICAgKi9cclxuICBfbW9kZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSBsYWJlbCBmb3IgdGhlIGxpc3QgYXNzaWduZWQgYnkgdGhlIGF1dGhvci5cclxuICAgKi9cclxuICB0aXRsZT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBMaXN0LnRpdGxlXHJcbiAgICovXHJcbiAgX3RpdGxlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBJZiB0aGVyZSBpcyBubyBjb2RlLCB0aGUgcHVycG9zZSBvZiB0aGUgbGlzdCBpcyBpbXBsaWVkIHdoZXJlIGl0IGlzIHVzZWQsIHN1Y2ggYXMgaW4gYSBkb2N1bWVudCBzZWN0aW9uIHVzaW5nIERvY3VtZW50LnNlY3Rpb24uY29kZS5cclxuICAgKi9cclxuICBjb2RlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTb21lIHB1cmVseSBhcmJpdHJhcnkgbGlzdHMgZG8gbm90IGhhdmUgYSBjb21tb24gc3ViamVjdCwgc28gdGhpcyBpcyBvcHRpb25hbC5cclxuICAgKi9cclxuICBzdWJqZWN0PzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZW5jb3VudGVyIHRoYXQgaXMgdGhlIGNvbnRleHQgaW4gd2hpY2ggdGhpcyBsaXN0IHdhcyBjcmVhdGVkLlxyXG4gICAqL1xyXG4gIGVuY291bnRlcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFjdHVhbCBpbXBvcnRhbnQgZGF0ZSBpcyB0aGUgZGF0ZSBvZiBjdXJyZW5jeSBvZiB0aGUgcmVzb3VyY2VzIHRoYXQgd2VyZSBzdW1tYXJpemVkLCBidXQgaXQgaXMgdXN1YWxseSBhc3N1bWVkIHRoYXQgdGhlc2UgYXJlIGN1cnJlbnQgd2hlbiB0aGUgcHJlcGFyYXRpb24gb2NjdXJzLlxyXG4gICAqL1xyXG4gIGRhdGU/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBMaXN0LmRhdGVcclxuICAgKi9cclxuICBfZGF0ZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIHByaW1hcnkgc291cmNlIGlzIHRoZSBlbnRpdHkgdGhhdCBtYWRlIHRoZSBkZWNpc2lvbnMgd2hhdCBpdGVtcyBhcmUgaW4gdGhlIGxpc3QuIFRoaXMgbWF5IGJlIHNvZnR3YXJlIG9yIHVzZXIuXHJcbiAgICovXHJcbiAgc291cmNlPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBcHBsaWNhdGlvbnMgU0hPVUxEIHJlbmRlciBvcmRlcmVkIGxpc3RzIGluIHRoZSBvcmRlciBwcm92aWRlZCwgYnV0IE1BWSBhbGxvdyB1c2VycyB0byByZS1vcmRlciBiYXNlZCBvbiB0aGVpciBvd24gcHJlZmVyZW5jZXMgYXMgd2VsbC4gSWYgdGhlcmUgaXMgbm8gb3JkZXIgc3BlY2lmaWVkLCB0aGUgb3JkZXIgaXMgdW5rbm93biwgdGhvdWdoIHRoZXJlIG1heSBzdGlsbCBiZSBzb21lIG9yZGVyLlxyXG4gICAqL1xyXG4gIG9yZGVyZWRCeT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQ29tbWVudHMgdGhhdCBhcHBseSB0byB0aGUgb3ZlcmFsbCBsaXN0LlxyXG4gICAqL1xyXG4gIG5vdGU/OiBmaGlyLkFubm90YXRpb25BcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZXJlIGFyZSBubyBlbnRyaWVzIGluIHRoZSBsaXN0LCBhbiBlbXB0eVJlYXNvbiBTSE9VTEQgYmUgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgZW50cnk/OiBmaGlyLkxpc3RFbnRyeUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHZhcmlvdXMgcmVhc29ucyBmb3IgYW4gZW1wdHkgbGlzdCBtYWtlIGEgc2lnbmlmaWNhbnQgaW50ZXJwcmV0YXRpb24gdG8gaXRzIGludGVycHJldGF0aW9uLiBOb3RlIHRoYXQgdGhpcyBjb2RlIGlzIGZvciB1c2Ugd2hlbiB0aGUgZW50aXJlIGxpc3QgaGFzIGJlZW4gc3VwcHJlc3NlZCwgYW5kIG5vdCBmb3Igd2hlbiBpbmRpdmlkdWFsIGl0ZW1zIGFyZSBvbWl0dGVkIC0gaW1wbGVtZW50ZXJzIG1heSBjb25zaWRlciB1c2luZyBhIHRleHQgbm90ZSBvciBhIGZsYWcgb24gYW4gZW50cnkgaW4gdGhlc2UgY2FzZXMuXHJcbiAgICovXHJcbiAgZW1wdHlSZWFzb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBzZXQgb2YgaW5mb3JtYXRpb24gc3VtbWFyaXplZCBmcm9tIGEgbGlzdCBvZiBvdGhlciByZXNvdXJjZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTGlzdCBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnTGlzdCc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJMaXN0XCI7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllciBmb3IgdGhlIExpc3QgYXNzaWduZWQgZm9yIGJ1c2luZXNzIHB1cnBvc2VzIG91dHNpZGUgdGhlIGNvbnRleHQgb2YgRkhJUi5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgY29kZXMgdGhhdCBtYXJrIHRoZSByZXNvdXJjZSBhcyBub3QgY3VycmVudGx5IHZhbGlkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM6IGZoaXIuRmhpckNvZGU8TGlzdFN0YXR1c0NvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSBhIGNoYW5nZSBsaXN0IG11c3Qgbm90IGJlIG1pcy11bmRlcnN0b29kIGFzIGEgY29tcGxldGUgbGlzdC5cclxuICAgKi9cclxuICBwdWJsaWMgbW9kZTogZmhpci5GaGlyQ29kZTxMaXN0TW9kZUNvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEEgbGFiZWwgZm9yIHRoZSBsaXN0IGFzc2lnbmVkIGJ5IHRoZSBhdXRob3IuXHJcbiAgICovXHJcbiAgcHVibGljIHRpdGxlPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiB0aGVyZSBpcyBubyBjb2RlLCB0aGUgcHVycG9zZSBvZiB0aGUgbGlzdCBpcyBpbXBsaWVkIHdoZXJlIGl0IGlzIHVzZWQsIHN1Y2ggYXMgaW4gYSBkb2N1bWVudCBzZWN0aW9uIHVzaW5nIERvY3VtZW50LnNlY3Rpb24uY29kZS5cclxuICAgKi9cclxuICBwdWJsaWMgY29kZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTb21lIHB1cmVseSBhcmJpdHJhcnkgbGlzdHMgZG8gbm90IGhhdmUgYSBjb21tb24gc3ViamVjdCwgc28gdGhpcyBpcyBvcHRpb25hbC5cclxuICAgKi9cclxuICBwdWJsaWMgc3ViamVjdD86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZW5jb3VudGVyIHRoYXQgaXMgdGhlIGNvbnRleHQgaW4gd2hpY2ggdGhpcyBsaXN0IHdhcyBjcmVhdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBlbmNvdW50ZXI/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFjdHVhbCBpbXBvcnRhbnQgZGF0ZSBpcyB0aGUgZGF0ZSBvZiBjdXJyZW5jeSBvZiB0aGUgcmVzb3VyY2VzIHRoYXQgd2VyZSBzdW1tYXJpemVkLCBidXQgaXQgaXMgdXN1YWxseSBhc3N1bWVkIHRoYXQgdGhlc2UgYXJlIGN1cnJlbnQgd2hlbiB0aGUgcHJlcGFyYXRpb24gb2NjdXJzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkYXRlPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwcmltYXJ5IHNvdXJjZSBpcyB0aGUgZW50aXR5IHRoYXQgbWFkZSB0aGUgZGVjaXNpb25zIHdoYXQgaXRlbXMgYXJlIGluIHRoZSBsaXN0LiBUaGlzIG1heSBiZSBzb2Z0d2FyZSBvciB1c2VyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzb3VyY2U/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQXBwbGljYXRpb25zIFNIT1VMRCByZW5kZXIgb3JkZXJlZCBsaXN0cyBpbiB0aGUgb3JkZXIgcHJvdmlkZWQsIGJ1dCBNQVkgYWxsb3cgdXNlcnMgdG8gcmUtb3JkZXIgYmFzZWQgb24gdGhlaXIgb3duIHByZWZlcmVuY2VzIGFzIHdlbGwuIElmIHRoZXJlIGlzIG5vIG9yZGVyIHNwZWNpZmllZCwgdGhlIG9yZGVyIGlzIHVua25vd24sIHRob3VnaCB0aGVyZSBtYXkgc3RpbGwgYmUgc29tZSBvcmRlci5cclxuICAgKi9cclxuICBwdWJsaWMgb3JkZXJlZEJ5PzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIENvbW1lbnRzIHRoYXQgYXBwbHkgdG8gdGhlIG92ZXJhbGwgbGlzdC5cclxuICAgKi9cclxuICBwdWJsaWMgbm90ZTogZmhpci5Bbm5vdGF0aW9uW107XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlcmUgYXJlIG5vIGVudHJpZXMgaW4gdGhlIGxpc3QsIGFuIGVtcHR5UmVhc29uIFNIT1VMRCBiZSBwcm92aWRlZC5cclxuICAgKi9cclxuICBwdWJsaWMgZW50cnk6IGZoaXIuTGlzdEVudHJ5W107XHJcbiAgLyoqXHJcbiAgICogVGhlIHZhcmlvdXMgcmVhc29ucyBmb3IgYW4gZW1wdHkgbGlzdCBtYWtlIGEgc2lnbmlmaWNhbnQgaW50ZXJwcmV0YXRpb24gdG8gaXRzIGludGVycHJldGF0aW9uLiBOb3RlIHRoYXQgdGhpcyBjb2RlIGlzIGZvciB1c2Ugd2hlbiB0aGUgZW50aXJlIGxpc3QgaGFzIGJlZW4gc3VwcHJlc3NlZCwgYW5kIG5vdCBmb3Igd2hlbiBpbmRpdmlkdWFsIGl0ZW1zIGFyZSBvbWl0dGVkIC0gaW1wbGVtZW50ZXJzIG1heSBjb25zaWRlciB1c2luZyBhIHRleHQgbm90ZSBvciBhIGZsYWcgb24gYW4gZW50cnkgaW4gdGhlc2UgY2FzZXMuXHJcbiAgICovXHJcbiAgcHVibGljIGVtcHR5UmVhc29uPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIExpc3QgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxMaXN0QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ0xpc3QnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxMaXN0U3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN0YXR1c30pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzKSB7IHRoaXMuc3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPExpc3RTdGF0dXNDb2RlVHlwZT4oc291cmNlLl9zdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ21vZGUnXSkgeyB0aGlzLm1vZGUgPSBuZXcgZmhpci5GaGlyQ29kZTxMaXN0TW9kZUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5tb2RlfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLm1vZGUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfbW9kZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLm1vZGUpIHsgdGhpcy5tb2RlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX21vZGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5tb2RlID0gbmV3IGZoaXIuRmhpckNvZGU8TGlzdE1vZGVDb2RlVHlwZT4oc291cmNlLl9tb2RlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd0aXRsZSddKSB7IHRoaXMudGl0bGUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnRpdGxlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ190aXRsZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnRpdGxlKSB7IHRoaXMudGl0bGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdGl0bGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy50aXRsZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl90aXRsZSBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnY29kZSddKSB7IHRoaXMuY29kZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuY29kZSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N1YmplY3QnXSkgeyB0aGlzLnN1YmplY3QgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnN1YmplY3QpOyB9XHJcbiAgICBpZiAoc291cmNlWydlbmNvdW50ZXInXSkgeyB0aGlzLmVuY291bnRlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuZW5jb3VudGVyKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGF0ZSddKSB7IHRoaXMuZGF0ZSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5kYXRlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kYXRlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZGF0ZSkgeyB0aGlzLmRhdGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZGF0ZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9kYXRlIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3NvdXJjZSddKSB7IHRoaXMuc291cmNlID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5zb3VyY2UpOyB9XHJcbiAgICBpZiAoc291cmNlWydvcmRlcmVkQnknXSkgeyB0aGlzLm9yZGVyZWRCeSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2Uub3JkZXJlZEJ5KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnbm90ZSddKSB7IHRoaXMubm90ZSA9IHNvdXJjZS5ub3RlLm1hcCgoeCkgPT4gbmV3IGZoaXIuQW5ub3RhdGlvbih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLm5vdGUgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZW50cnknXSkgeyB0aGlzLmVudHJ5ID0gc291cmNlLmVudHJ5Lm1hcCgoeCkgPT4gbmV3IGZoaXIuTGlzdEVudHJ5KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZW50cnkgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZW1wdHlSZWFzb24nXSkgeyB0aGlzLmVtcHR5UmVhc29uID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5lbXB0eVJlYXNvbik7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdMaXN0JyB9XHJcbiAgICB0aGlzLnZSUygncmVzb3VyY2VUeXBlJyxleHApXHJcbiAgICB0aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKVxyXG4gICAgdGhpcy52UlNWKCdzdGF0dXMnLGV4cCwnTGlzdFN0YXR1cycsTGlzdFN0YXR1c1ZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZSU1YoJ21vZGUnLGV4cCwnTGlzdE1vZGUnLExpc3RNb2RlVnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHRoaXMudk9TKCd0aXRsZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2NvZGUnLGV4cClcclxuICAgIHRoaXMudk9TKCdzdWJqZWN0JyxleHApXHJcbiAgICB0aGlzLnZPUygnZW5jb3VudGVyJyxleHApXHJcbiAgICB0aGlzLnZPUygnZGF0ZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3NvdXJjZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ29yZGVyZWRCeScsZXhwKVxyXG4gICAgdGhpcy52T0EoJ25vdGUnLGV4cClcclxuICAgIHRoaXMudk9BKCdlbnRyeScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2VtcHR5UmVhc29uJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=