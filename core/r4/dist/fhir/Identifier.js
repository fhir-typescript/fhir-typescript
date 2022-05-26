// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Identifier
import * as fhir from '../fhir.js';
// @ts-ignore
import { IdentifierUseCodes } from '../fhirValueSets/IdentifierUseCodes.js';
// @ts-ignore
import { IdentifierTypeCodings, } from '../fhirValueSets/IdentifierTypeCodings.js';
/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export class Identifier extends fhir.FhirElement {
    /**
     * Default constructor for Identifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['use']) {
            this.use = new fhir.FhirCode({ value: source.use });
        }
        if (source['_use']) {
            if (this.use) {
                this.use.addExtendedProperties(source._use);
            }
            else {
                this.use = new fhir.FhirCode(source._use);
            }
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['system']) {
            this.system = new fhir.FhirUri({ value: source.system });
        }
        if (source['_system']) {
            if (this.system) {
                this.system.addExtendedProperties(source._system);
            }
            else {
                this.system = new fhir.FhirUri(source._system);
            }
        }
        if (source['value']) {
            this.value = new fhir.FhirString({ value: source.value });
        }
        if (source['_value']) {
            if (this.value) {
                this.value.addExtendedProperties(source._value);
            }
            else {
                this.value = new fhir.FhirString(source._value);
            }
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['assigner']) {
            this.assigner = new fhir.Reference(source.assigner);
        }
    }
    /**
     * Required-bound Value Set for use (Identifier.use)
     */
    static get useRequiredCodes() {
        return IdentifierUseCodes;
    }
    /**
     * Extensible-bound Value Set for type (Identifier.type)
     */
    static get typeExtensibleCodings() {
        return IdentifierTypeCodings;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        let issues = super.doModelValidation();
        if (this['use'] && (!Object.values(IdentifierUseCodes).includes(this.use))) {
            issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property use?:fhir.FhirCode<IdentifierUseCodeType> fhir: Identifier.use:code Required binding to: IdentifierUse' });
        }
        if (this["use"]) {
            issues.push(...this.use.doModelValidation());
        }
        if (this["type"]) {
            issues.push(...this.type.doModelValidation());
        }
        if (this["system"]) {
            issues.push(...this.system.doModelValidation());
        }
        if (this["value"]) {
            issues.push(...this.value.doModelValidation());
        }
        if (this["period"]) {
            issues.push(...this.period.doModelValidation());
        }
        if (this["assigner"]) {
            issues.push(...this.assigner.doModelValidation());
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Identifier._fts_dataType = 'Identifier';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWRlbnRpZmllci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvSWRlbnRpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRyxhQUFhO0FBQ2IsT0FBTyxFQUFFLHFCQUFxQixHQUE0QixNQUFNLDJDQUEyQyxDQUFDO0FBNkM1Rzs7R0FFRztBQUNILE1BQU0sT0FBTyxVQUFXLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUE2QjlDOztPQUVHO0lBQ0gsWUFBWSxTQUFpQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUN2RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQXdCLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDaEcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUFFLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLElBQUssQ0FBQyxDQUFDO2FBQUU7aUJBQzFEO2dCQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUF3QixNQUFNLENBQUMsSUFBOEIsQ0FBQyxDQUFDO2FBQUU7U0FDckc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMs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SUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDdEUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzVFLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBL0VEOztHQUVHO0FBQzZCLHdCQUFhLEdBQVUsWUFBWSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBJZGVudGlmaWVyXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJZGVudGlmaWVyVXNlQ29kaW5ncywgSWRlbnRpZmllclVzZUNvZGluZ1R5cGUsfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0lkZW50aWZpZXJVc2VDb2RpbmdzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBJZGVudGlmaWVyVXNlQ29kZXMsICBJZGVudGlmaWVyVXNlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0lkZW50aWZpZXJVc2VDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgSWRlbnRpZmllclR5cGVDb2RpbmdzLCBJZGVudGlmaWVyVHlwZUNvZGluZ1R5cGUsfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0lkZW50aWZpZXJUeXBlQ29kaW5ncy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgSWRlbnRpZmllclR5cGVDb2RlcywgIElkZW50aWZpZXJUeXBlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0lkZW50aWZpZXJUeXBlQ29kZXMuanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgSWRlbnRpZmllciB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJZGVudGlmaWVyQXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBBcHBsaWNhdGlvbnMgY2FuIGFzc3VtZSB0aGF0IGFuIGlkZW50aWZpZXIgaXMgcGVybWFuZW50IHVubGVzcyBpdCBleHBsaWNpdGx5IHNheXMgdGhhdCBpdCBpcyB0ZW1wb3JhcnkuXHJcbiAgICovXHJcbiAgdXNlPzogZmhpci5GaGlyQ29kZTxJZGVudGlmaWVyVXNlQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IElkZW50aWZpZXIudXNlXHJcbiAgICovXHJcbiAgX3VzZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGRlYWxzIG9ubHkgd2l0aCBnZW5lcmFsIGNhdGVnb3JpZXMgb2YgaWRlbnRpZmllcnMuICBJdCBTSE9VTEQgbm90IGJlIHVzZWQgZm9yIGNvZGVzIHRoYXQgY29ycmVzcG9uZCAxLi4xIHdpdGggdGhlIElkZW50aWZpZXIuc3lzdGVtLiBTb21lIGlkZW50aWZpZXJzIG1heSBmYWxsIGludG8gbXVsdGlwbGUgY2F0ZWdvcmllcyBkdWUgdG8gY29tbW9uIHVzYWdlLiAgIFdoZXJlIHRoZSBzeXN0ZW0gaXMga25vd24sIGEgdHlwZSBpcyB1bm5lY2Vzc2FyeSBiZWNhdXNlIHRoZSB0eXBlIGlzIGFsd2F5cyBwYXJ0IG9mIHRoZSBzeXN0ZW0gZGVmaW5pdGlvbi4gSG93ZXZlciBzeXN0ZW1zIG9mdGVuIG5lZWQgdG8gaGFuZGxlIGlkZW50aWZpZXJzIHdoZXJlIHRoZSBzeXN0ZW0gaXMgbm90IGtub3duLiBUaGVyZSBpcyBub3QgYSAxOjEgcmVsYXRpb25zaGlwIGJldHdlZW4gdHlwZSBhbmQgc3lzdGVtLCBzaW5jZSBtYW55IGRpZmZlcmVudCBzeXN0ZW1zIGhhdmUgdGhlIHNhbWUgdHlwZS5cclxuICAgKi9cclxuICB0eXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVyLnN5c3RlbSBpcyBhbHdheXMgY2FzZSBzZW5zaXRpdmUuXHJcbiAgICovXHJcbiAgc3lzdGVtPzogZmhpci5GaGlyVXJpfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IElkZW50aWZpZXIuc3lzdGVtXHJcbiAgICovXHJcbiAgX3N5c3RlbT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIHZhbHVlIGlzIGEgZnVsbCBVUkksIHRoZW4gdGhlIHN5c3RlbSBTSEFMTCBiZSB1cm46aWV0ZjpyZmM6Mzk4Ni4gIFRoZSB2YWx1ZSdzIHByaW1hcnkgcHVycG9zZSBpcyBjb21wdXRhdGlvbmFsIG1hcHBpbmcuICBBcyBhIHJlc3VsdCwgaXQgbWF5IGJlIG5vcm1hbGl6ZWQgZm9yIGNvbXBhcmlzb24gcHVycG9zZXMgKGUuZy4gcmVtb3Zpbmcgbm9uLXNpZ25pZmljYW50IHdoaXRlc3BhY2UsIGRhc2hlcywgZXRjLikgIEEgdmFsdWUgZm9ybWF0dGVkIGZvciBodW1hbiBkaXNwbGF5IGNhbiBiZSBjb252ZXllZCB1c2luZyB0aGUgW1JlbmRlcmVkIFZhbHVlIGV4dGVuc2lvbl0oZXh0ZW5zaW9uLXJlbmRlcmVkLXZhbHVlLmh0bWwpLiBJZGVudGlmaWVyLnZhbHVlIGlzIHRvIGJlIHRyZWF0ZWQgYXMgY2FzZSBzZW5zaXRpdmUgdW5sZXNzIGtub3dsZWRnZSBvZiB0aGUgSWRlbnRpZmllci5zeXN0ZW0gYWxsb3dzIHRoZSBwcm9jZXNzZXIgdG8gYmUgY29uZmlkZW50IHRoYXQgbm9uLWNhc2Utc2Vuc2l0aXZlIHByb2Nlc3NpbmcgaXMgc2FmZS5cclxuICAgKi9cclxuICB2YWx1ZT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBJZGVudGlmaWVyLnZhbHVlXHJcbiAgICovXHJcbiAgX3ZhbHVlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaW1lIHBlcmlvZCBkdXJpbmcgd2hpY2ggaWRlbnRpZmllciBpcy93YXMgdmFsaWQgZm9yIHVzZS5cclxuICAgKi9cclxuICBwZXJpb2Q/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBJZGVudGlmaWVyLmFzc2lnbmVyIG1heSBvbWl0IHRoZSAucmVmZXJlbmNlIGVsZW1lbnQgYW5kIG9ubHkgY29udGFpbiBhIC5kaXNwbGF5IGVsZW1lbnQgcmVmbGVjdGluZyB0aGUgbmFtZSBvciBvdGhlciB0ZXh0dWFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhc3NpZ25pbmcgb3JnYW5pemF0aW9uLlxyXG4gICAqL1xyXG4gIGFzc2lnbmVyPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGlkZW50aWZpZXIgLSBpZGVudGlmaWVzIHNvbWUgZW50aXR5IHVuaXF1ZWx5IGFuZCB1bmFtYmlndW91c2x5LiBUeXBpY2FsbHkgdGhpcyBpcyB1c2VkIGZvciBidXNpbmVzcyBpZGVudGlmaWVycy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdJZGVudGlmaWVyJztcclxuICAvKipcclxuICAgKiBBcHBsaWNhdGlvbnMgY2FuIGFzc3VtZSB0aGF0IGFuIGlkZW50aWZpZXIgaXMgcGVybWFuZW50IHVubGVzcyBpdCBleHBsaWNpdGx5IHNheXMgdGhhdCBpdCBpcyB0ZW1wb3JhcnkuXHJcbiAgICovXHJcbiAgcHVibGljIHVzZT86IGZoaXIuRmhpckNvZGU8SWRlbnRpZmllclVzZUNvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGRlYWxzIG9ubHkgd2l0aCBnZW5lcmFsIGNhdGVnb3JpZXMgb2YgaWRlbnRpZmllcnMuICBJdCBTSE9VTEQgbm90IGJlIHVzZWQgZm9yIGNvZGVzIHRoYXQgY29ycmVzcG9uZCAxLi4xIHdpdGggdGhlIElkZW50aWZpZXIuc3lzdGVtLiBTb21lIGlkZW50aWZpZXJzIG1heSBmYWxsIGludG8gbXVsdGlwbGUgY2F0ZWdvcmllcyBkdWUgdG8gY29tbW9uIHVzYWdlLiAgIFdoZXJlIHRoZSBzeXN0ZW0gaXMga25vd24sIGEgdHlwZSBpcyB1bm5lY2Vzc2FyeSBiZWNhdXNlIHRoZSB0eXBlIGlzIGFsd2F5cyBwYXJ0IG9mIHRoZSBzeXN0ZW0gZGVmaW5pdGlvbi4gSG93ZXZlciBzeXN0ZW1zIG9mdGVuIG5lZWQgdG8gaGFuZGxlIGlkZW50aWZpZXJzIHdoZXJlIHRoZSBzeXN0ZW0gaXMgbm90IGtub3duLiBUaGVyZSBpcyBub3QgYSAxOjEgcmVsYXRpb25zaGlwIGJldHdlZW4gdHlwZSBhbmQgc3lzdGVtLCBzaW5jZSBtYW55IGRpZmZlcmVudCBzeXN0ZW1zIGhhdmUgdGhlIHNhbWUgdHlwZS5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVyLnN5c3RlbSBpcyBhbHdheXMgY2FzZSBzZW5zaXRpdmUuXHJcbiAgICovXHJcbiAgcHVibGljIHN5c3RlbT86IGZoaXIuRmhpclVyaXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIHZhbHVlIGlzIGEgZnVsbCBVUkksIHRoZW4gdGhlIHN5c3RlbSBTSEFMTCBiZSB1cm46aWV0ZjpyZmM6Mzk4Ni4gIFRoZSB2YWx1ZSdzIHByaW1hcnkgcHVycG9zZSBpcyBjb21wdXRhdGlvbmFsIG1hcHBpbmcuICBBcyBhIHJlc3VsdCwgaXQgbWF5IGJlIG5vcm1hbGl6ZWQgZm9yIGNvbXBhcmlzb24gcHVycG9zZXMgKGUuZy4gcmVtb3Zpbmcgbm9uLXNpZ25pZmljYW50IHdoaXRlc3BhY2UsIGRhc2hlcywgZXRjLikgIEEgdmFsdWUgZm9ybWF0dGVkIGZvciBodW1hbiBkaXNwbGF5IGNhbiBiZSBjb252ZXllZCB1c2luZyB0aGUgW1JlbmRlcmVkIFZhbHVlIGV4dGVuc2lvbl0oZXh0ZW5zaW9uLXJlbmRlcmVkLXZhbHVlLmh0bWwpLiBJZGVudGlmaWVyLnZhbHVlIGlzIHRvIGJlIHRyZWF0ZWQgYXMgY2FzZSBzZW5zaXRpdmUgdW5sZXNzIGtub3dsZWRnZSBvZiB0aGUgSWRlbnRpZmllci5zeXN0ZW0gYWxsb3dzIHRoZSBwcm9jZXNzZXIgdG8gYmUgY29uZmlkZW50IHRoYXQgbm9uLWNhc2Utc2Vuc2l0aXZlIHByb2Nlc3NpbmcgaXMgc2FmZS5cclxuICAgKi9cclxuICBwdWJsaWMgdmFsdWU/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRpbWUgcGVyaW9kIGR1cmluZyB3aGljaCBpZGVudGlmaWVyIGlzL3dhcyB2YWxpZCBmb3IgdXNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIElkZW50aWZpZXIuYXNzaWduZXIgbWF5IG9taXQgdGhlIC5yZWZlcmVuY2UgZWxlbWVudCBhbmQgb25seSBjb250YWluIGEgLmRpc3BsYXkgZWxlbWVudCByZWZsZWN0aW5nIHRoZSBuYW1lIG9yIG90aGVyIHRleHR1YWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFzc2lnbmluZyBvcmdhbml6YXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIGFzc2lnbmVyPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIElkZW50aWZpZXIgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxJZGVudGlmaWVyQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3VzZSddKSB7IHRoaXMudXNlID0gbmV3IGZoaXIuRmhpckNvZGU8SWRlbnRpZmllclVzZUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS51c2V9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3VzZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnVzZSkgeyB0aGlzLnVzZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl91c2UhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy51c2UgPSBuZXcgZmhpci5GaGlyQ29kZTxJZGVudGlmaWVyVXNlQ29kZVR5cGU+KHNvdXJjZS5fdXNlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd0eXBlJ10pIHsgdGhpcy50eXBlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS50eXBlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3lzdGVtJ10pIHsgdGhpcy5zeXN0ZW0gPSBuZXcgZmhpci5GaGlyVXJpKHt2YWx1ZTogc291cmNlLnN5c3RlbX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3lzdGVtJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3lzdGVtKSB7IHRoaXMuc3lzdGVtLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N5c3RlbSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN5c3RlbSA9IG5ldyBmaGlyLkZoaXJVcmkoc291cmNlLl9zeXN0ZW0gYXMgUGFydGlhbDxmaGlyLkZoaXJVcmlBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3ZhbHVlJ10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UudmFsdWV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3ZhbHVlJ10pIHtcclxuICAgICAgaWYgKHRoaXMudmFsdWUpIHsgdGhpcy52YWx1ZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl92YWx1ZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX3ZhbHVlIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwZXJpb2QnXSkgeyB0aGlzLnBlcmlvZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2UucGVyaW9kKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYXNzaWduZXInXSkgeyB0aGlzLmFzc2lnbmVyID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5hc3NpZ25lcik7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmVxdWlyZWQtYm91bmQgVmFsdWUgU2V0IGZvciB1c2UgKElkZW50aWZpZXIudXNlKVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHVzZVJlcXVpcmVkQ29kZXMoKSB7XHJcbiAgICByZXR1cm4gSWRlbnRpZmllclVzZUNvZGVzO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBFeHRlbnNpYmxlLWJvdW5kIFZhbHVlIFNldCBmb3IgdHlwZSAoSWRlbnRpZmllci50eXBlKVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHR5cGVFeHRlbnNpYmxlQ29kaW5ncygpOklkZW50aWZpZXJUeXBlQ29kaW5nVHlwZSB7XHJcbiAgICByZXR1cm4gSWRlbnRpZmllclR5cGVDb2RpbmdzO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbigpO1xyXG4gICAgaWYgKHRoaXNbJ3VzZSddICYmICghT2JqZWN0LnZhbHVlcyhJZGVudGlmaWVyVXNlQ29kZXMpLmluY2x1ZGVzKHRoaXMudXNlIGFzIGFueSkpKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdjb2RlLWludmFsaWQnLCBkaWFnbm9zdGljczogJ0ludmFsaWQgY29kZSBwcm9wZXJ0eSB1c2U/OmZoaXIuRmhpckNvZGU8SWRlbnRpZmllclVzZUNvZGVUeXBlPiBmaGlyOiBJZGVudGlmaWVyLnVzZTpjb2RlIFJlcXVpcmVkIGJpbmRpbmcgdG86IElkZW50aWZpZXJVc2UnIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXNbXCJ1c2VcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy51c2UuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICh0aGlzW1widHlwZVwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLnR5cGUuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICh0aGlzW1wic3lzdGVtXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuc3lzdGVtLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICBpZiAodGhpc1tcInZhbHVlXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMudmFsdWUuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICh0aGlzW1wicGVyaW9kXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMucGVyaW9kLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICBpZiAodGhpc1tcImFzc2lnbmVyXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuYXNzaWduZXIuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==