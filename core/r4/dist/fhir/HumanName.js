// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: HumanName
import * as fhir from '../fhir.js';
// @ts-ignore
import { NameUseCodes } from '../fhirValueSets/NameUseCodes.js';
/**
 * A human's name with the ability to identify parts and usage.
 */
export class HumanName extends fhir.FhirElement {
    /**
     * Default constructor for HumanName - initializes any required elements to null if a value is not provided.
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
        if (source['text']) {
            this.text = new fhir.FhirString({ value: source.text });
        }
        if (source['_text']) {
            if (this.text) {
                this.text.addExtendedProperties(source._text);
            }
            else {
                this.text = new fhir.FhirString(source._text);
            }
        }
        if (source['family']) {
            this.family = new fhir.FhirString({ value: source.family });
        }
        if (source['_family']) {
            if (this.family) {
                this.family.addExtendedProperties(source._family);
            }
            else {
                this.family = new fhir.FhirString(source._family);
            }
        }
        if (source['given']) {
            this.given = source.given.map((x) => new fhir.FhirString({ value: x }));
        }
        else {
            this.given = [];
        }
        if (source['_given']) {
            source._given.forEach((x, i) => {
                if (this.given.length >= i) {
                    if (x) {
                        this.given[i].addExtendedProperties(x);
                    }
                }
                else {
                    if (x) {
                        this.given.push(new fhir.FhirString(x));
                    }
                }
            });
        }
        if (source['prefix']) {
            this.prefix = source.prefix.map((x) => new fhir.FhirString({ value: x }));
        }
        else {
            this.prefix = [];
        }
        if (source['_prefix']) {
            source._prefix.forEach((x, i) => {
                if (this.prefix.length >= i) {
                    if (x) {
                        this.prefix[i].addExtendedProperties(x);
                    }
                }
                else {
                    if (x) {
                        this.prefix.push(new fhir.FhirString(x));
                    }
                }
            });
        }
        if (source['suffix']) {
            this.suffix = source.suffix.map((x) => new fhir.FhirString({ value: x }));
        }
        else {
            this.suffix = [];
        }
        if (source['_suffix']) {
            source._suffix.forEach((x, i) => {
                if (this.suffix.length >= i) {
                    if (x) {
                        this.suffix[i].addExtendedProperties(x);
                    }
                }
                else {
                    if (x) {
                        this.suffix.push(new fhir.FhirString(x));
                    }
                }
            });
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
    }
    /**
     * Required-bound Value Set for use (HumanName.use)
     */
    static get useRequiredCodes() {
        return NameUseCodes;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'HumanName';
        }
        if (this['use'] && (!Object.values(NameUseCodes).includes(this.use.value))) {
            issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property use fhir: HumanName.use:code Required binding to: NameUse', expression: [expression] });
        }
        if (this["use"]) {
            issues.push(...this.use.doModelValidation(expression + '.use'));
        }
        if (this["text"]) {
            issues.push(...this.text.doModelValidation(expression + '.text'));
        }
        if (this["family"]) {
            issues.push(...this.family.doModelValidation(expression + '.family'));
        }
        if (this["given"]) {
            this.given.forEach((x, i) => { issues.push(...x.doModelValidation(expression + `.given[${i}]`)); });
        }
        if (this["prefix"]) {
            this.prefix.forEach((x, i) => { issues.push(...x.doModelValidation(expression + `.prefix[${i}]`)); });
        }
        if (this["suffix"]) {
            this.suffix.forEach((x, i) => { issues.push(...x.doModelValidation(expression + `.suffix[${i}]`)); });
        }
        if (this["period"]) {
            issues.push(...this.period.doModelValidation(expression + '.period'));
        }
        return issues;
    }
    /**
     * Convert a HumanName into a displayable string
     */
    toDisplay(familyFirst = true, includeAnnotations = false) {
        if ((this.text) && (this.text.length > 0)) {
            return this.text.toString();
        }
        var val = '';
        if (familyFirst) {
            if (this.family) {
                val = this.family.toString();
            }
            if (this.given) {
                val += (val.length > 0 ? ', ' : '') + this.given.join(' ');
            }
            if (includeAnnotations) {
                if (this.suffix) {
                    val += (val.length > 0 ? ', ' : '') + this.suffix.join(', ');
                }
                if (this.prefix) {
                    val += (val.length > 0 ? ', ' : '') + this.prefix.join(', ');
                }
            }
            return val;
        }
        if ((includeAnnotations) && (this.prefix)) {
            val += this.prefix.join(', ');
        }
        if (this.given) {
            val = (val.length > 0 ? ' ' : '') + this.given.join(' ');
        }
        if (this.family) {
            val += (val.length > 0 ? ' ' : '') + this.family;
        }
        if ((includeAnnotations) && (this.suffix)) {
            val += (val.length > 0 ? ', ' : '') + this.suffix.join(', ');
        }
        return val;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
HumanName._fts_dataType = 'HumanName';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHVtYW5OYW1lLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9IdW1hbk5hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsWUFBWSxFQUFvQixNQUFNLGtDQUFrQyxDQUFDO0FBMkRsRjs7R0FFRztBQUNILE1BQU0sT0FBTyxTQUFVLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUFpQzdDOztPQUVHO0lBQ0gsWUFBWSxTQUFnQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUN0RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQWtCLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDMUYsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUFFLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLElBQUssQ0FBQyxDQUFDO2FBQUU7aUJBQzFEO2dCQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFrQixNQUFNLENBQUMsSUFBOEIsQ0FBQyxDQUFDO2FBQUU7U0FDL0Y7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1NBQUU7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LENBQUMsS0FBSyxFQUFFO1lBQ2QsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUQ7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBdkpDOztHQUVHO0FBQzZCLHVCQUFhLEdBQVUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBIdW1hbk5hbWVcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IE5hbWVVc2VDb2RpbmdzLCBOYW1lVXNlQ29kaW5nVHlwZSx9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTmFtZVVzZUNvZGluZ3MuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IE5hbWVVc2VDb2RlcywgIE5hbWVVc2VDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTmFtZVVzZUNvZGVzLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEh1bWFuTmFtZSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBIdW1hbk5hbWVBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEFwcGxpY2F0aW9ucyBjYW4gYXNzdW1lIHRoYXQgYSBuYW1lIGlzIGN1cnJlbnQgdW5sZXNzIGl0IGV4cGxpY2l0bHkgc2F5cyB0aGF0IGl0IGlzIHRlbXBvcmFyeSBvciBvbGQuXHJcbiAgICovXHJcbiAgdXNlPzogZmhpci5GaGlyQ29kZTxOYW1lVXNlQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEh1bWFuTmFtZS51c2VcclxuICAgKi9cclxuICBfdXNlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBDYW4gcHJvdmlkZSBib3RoIGEgdGV4dCByZXByZXNlbnRhdGlvbiBhbmQgcGFydHMuIEFwcGxpY2F0aW9ucyB1cGRhdGluZyBhIG5hbWUgU0hBTEwgZW5zdXJlIHRoYXQgd2hlbiBib3RoIHRleHQgYW5kIHBhcnRzIGFyZSBwcmVzZW50LCAgbm8gY29udGVudCBpcyBpbmNsdWRlZCBpbiB0aGUgdGV4dCB0aGF0IGlzbid0IGZvdW5kIGluIGEgcGFydC5cclxuICAgKi9cclxuICB0ZXh0PzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEh1bWFuTmFtZS50ZXh0XHJcbiAgICovXHJcbiAgX3RleHQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEZhbWlseSBOYW1lIG1heSBiZSBkZWNvbXBvc2VkIGludG8gc3BlY2lmaWMgcGFydHMgdXNpbmcgZXh0ZW5zaW9ucyAoZGUsIG5sLCBlcyByZWxhdGVkIGN1bHR1cmVzKS5cclxuICAgKi9cclxuICBmYW1pbHk/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogSHVtYW5OYW1lLmZhbWlseVxyXG4gICAqL1xyXG4gIF9mYW1pbHk/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIElmIG9ubHkgaW5pdGlhbHMgYXJlIHJlY29yZGVkLCB0aGV5IG1heSBiZSB1c2VkIGluIHBsYWNlIG9mIHRoZSBmdWxsIG5hbWUgcGFydHMuIEluaXRpYWxzIG1heSBiZSBzZXBhcmF0ZWQgaW50byBtdWx0aXBsZSBnaXZlbiBuYW1lcyBidXQgb2Z0ZW4gYXJlbid0IGR1ZSB0byBwYXJhY3RpY2FsIGxpbWl0YXRpb25zLiAgVGhpcyBlbGVtZW50IGlzIG5vdCBjYWxsZWQgXCJmaXJzdCBuYW1lXCIgc2luY2UgZ2l2ZW4gbmFtZXMgZG8gbm90IGFsd2F5cyBjb21lIGZpcnN0LlxyXG4gICAqL1xyXG4gIGdpdmVuPzogZmhpci5GaGlyU3RyaW5nW118c3RyaW5nW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBIdW1hbk5hbWUuZ2l2ZW5cclxuICAgKi9cclxuICBfZ2l2ZW4/OihmaGlyLkZoaXJFbGVtZW50QXJnc3xudWxsKVtdO1xyXG4gIC8qKlxyXG4gICAqIFBhcnQgb2YgdGhlIG5hbWUgdGhhdCBpcyBhY3F1aXJlZCBhcyBhIHRpdGxlIGR1ZSB0byBhY2FkZW1pYywgbGVnYWwsIGVtcGxveW1lbnQgb3Igbm9iaWxpdHkgc3RhdHVzLCBldGMuIGFuZCB0aGF0IGFwcGVhcnMgYXQgdGhlIHN0YXJ0IG9mIHRoZSBuYW1lLlxyXG4gICAqL1xyXG4gIHByZWZpeD86IGZoaXIuRmhpclN0cmluZ1tdfHN0cmluZ1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogSHVtYW5OYW1lLnByZWZpeFxyXG4gICAqL1xyXG4gIF9wcmVmaXg/OihmaGlyLkZoaXJFbGVtZW50QXJnc3xudWxsKVtdO1xyXG4gIC8qKlxyXG4gICAqIFBhcnQgb2YgdGhlIG5hbWUgdGhhdCBpcyBhY3F1aXJlZCBhcyBhIHRpdGxlIGR1ZSB0byBhY2FkZW1pYywgbGVnYWwsIGVtcGxveW1lbnQgb3Igbm9iaWxpdHkgc3RhdHVzLCBldGMuIGFuZCB0aGF0IGFwcGVhcnMgYXQgdGhlIGVuZCBvZiB0aGUgbmFtZS5cclxuICAgKi9cclxuICBzdWZmaXg/OiBmaGlyLkZoaXJTdHJpbmdbXXxzdHJpbmdbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEh1bWFuTmFtZS5zdWZmaXhcclxuICAgKi9cclxuICBfc3VmZml4PzooZmhpci5GaGlyRWxlbWVudEFyZ3N8bnVsbClbXTtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIHBlcmlvZCBvZiB0aW1lIHdoZW4gdGhpcyBuYW1lIHdhcyB2YWxpZCBmb3IgdGhlIG5hbWVkIHBlcnNvbi5cclxuICAgKi9cclxuICBwZXJpb2Q/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBodW1hbidzIG5hbWUgd2l0aCB0aGUgYWJpbGl0eSB0byBpZGVudGlmeSBwYXJ0cyBhbmQgdXNhZ2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSHVtYW5OYW1lIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdIdW1hbk5hbWUnO1xyXG4gIC8qKlxyXG4gICAqIEFwcGxpY2F0aW9ucyBjYW4gYXNzdW1lIHRoYXQgYSBuYW1lIGlzIGN1cnJlbnQgdW5sZXNzIGl0IGV4cGxpY2l0bHkgc2F5cyB0aGF0IGl0IGlzIHRlbXBvcmFyeSBvciBvbGQuXHJcbiAgICovXHJcbiAgcHVibGljIHVzZT86IGZoaXIuRmhpckNvZGU8TmFtZVVzZUNvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQ2FuIHByb3ZpZGUgYm90aCBhIHRleHQgcmVwcmVzZW50YXRpb24gYW5kIHBhcnRzLiBBcHBsaWNhdGlvbnMgdXBkYXRpbmcgYSBuYW1lIFNIQUxMIGVuc3VyZSB0aGF0IHdoZW4gYm90aCB0ZXh0IGFuZCBwYXJ0cyBhcmUgcHJlc2VudCwgIG5vIGNvbnRlbnQgaXMgaW5jbHVkZWQgaW4gdGhlIHRleHQgdGhhdCBpc24ndCBmb3VuZCBpbiBhIHBhcnQuXHJcbiAgICovXHJcbiAgcHVibGljIHRleHQ/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEZhbWlseSBOYW1lIG1heSBiZSBkZWNvbXBvc2VkIGludG8gc3BlY2lmaWMgcGFydHMgdXNpbmcgZXh0ZW5zaW9ucyAoZGUsIG5sLCBlcyByZWxhdGVkIGN1bHR1cmVzKS5cclxuICAgKi9cclxuICBwdWJsaWMgZmFtaWx5PzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiBvbmx5IGluaXRpYWxzIGFyZSByZWNvcmRlZCwgdGhleSBtYXkgYmUgdXNlZCBpbiBwbGFjZSBvZiB0aGUgZnVsbCBuYW1lIHBhcnRzLiBJbml0aWFscyBtYXkgYmUgc2VwYXJhdGVkIGludG8gbXVsdGlwbGUgZ2l2ZW4gbmFtZXMgYnV0IG9mdGVuIGFyZW4ndCBkdWUgdG8gcGFyYWN0aWNhbCBsaW1pdGF0aW9ucy4gIFRoaXMgZWxlbWVudCBpcyBub3QgY2FsbGVkIFwiZmlyc3QgbmFtZVwiIHNpbmNlIGdpdmVuIG5hbWVzIGRvIG5vdCBhbHdheXMgY29tZSBmaXJzdC5cclxuICAgKi9cclxuICBwdWJsaWMgZ2l2ZW46IGZoaXIuRmhpclN0cmluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIFBhcnQgb2YgdGhlIG5hbWUgdGhhdCBpcyBhY3F1aXJlZCBhcyBhIHRpdGxlIGR1ZSB0byBhY2FkZW1pYywgbGVnYWwsIGVtcGxveW1lbnQgb3Igbm9iaWxpdHkgc3RhdHVzLCBldGMuIGFuZCB0aGF0IGFwcGVhcnMgYXQgdGhlIHN0YXJ0IG9mIHRoZSBuYW1lLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwcmVmaXg6IGZoaXIuRmhpclN0cmluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIFBhcnQgb2YgdGhlIG5hbWUgdGhhdCBpcyBhY3F1aXJlZCBhcyBhIHRpdGxlIGR1ZSB0byBhY2FkZW1pYywgbGVnYWwsIGVtcGxveW1lbnQgb3Igbm9iaWxpdHkgc3RhdHVzLCBldGMuIGFuZCB0aGF0IGFwcGVhcnMgYXQgdGhlIGVuZCBvZiB0aGUgbmFtZS5cclxuICAgKi9cclxuICBwdWJsaWMgc3VmZml4OiBmaGlyLkZoaXJTdHJpbmdbXTtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIHBlcmlvZCBvZiB0aW1lIHdoZW4gdGhpcyBuYW1lIHdhcyB2YWxpZCBmb3IgdGhlIG5hbWVkIHBlcnNvbi5cclxuICAgKi9cclxuICBwdWJsaWMgcGVyaW9kPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEh1bWFuTmFtZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEh1bWFuTmFtZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyd1c2UnXSkgeyB0aGlzLnVzZSA9IG5ldyBmaGlyLkZoaXJDb2RlPE5hbWVVc2VDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2UudXNlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ191c2UnXSkge1xyXG4gICAgICBpZiAodGhpcy51c2UpIHsgdGhpcy51c2UuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdXNlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudXNlID0gbmV3IGZoaXIuRmhpckNvZGU8TmFtZVVzZUNvZGVUeXBlPihzb3VyY2UuX3VzZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndGV4dCddKSB7IHRoaXMudGV4dCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UudGV4dH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfdGV4dCddKSB7XHJcbiAgICAgIGlmICh0aGlzLnRleHQpIHsgdGhpcy50ZXh0LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3RleHQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy50ZXh0ID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX3RleHQgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2ZhbWlseSddKSB7IHRoaXMuZmFtaWx5ID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5mYW1pbHl9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2ZhbWlseSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmZhbWlseSkgeyB0aGlzLmZhbWlseS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9mYW1pbHkhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5mYW1pbHkgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fZmFtaWx5IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydnaXZlbiddKSB7IHRoaXMuZ2l2ZW4gPSBzb3VyY2UuZ2l2ZW4ubWFwKCh4KSA9PiBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogeH0pKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZ2l2ZW4gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2dpdmVuJ10pIHtcclxuICAgICAgc291cmNlLl9naXZlbi5mb3JFYWNoKCh4LGkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5naXZlbi5sZW5ndGggPj0gaSkgeyBpZiAoeCkgeyB0aGlzLmdpdmVuW2ldLmFkZEV4dGVuZGVkUHJvcGVydGllcyh4KTsgfSB9XHJcbiAgICAgICAgZWxzZSB7IGlmICh4KSB7IHRoaXMuZ2l2ZW4ucHVzaChuZXcgZmhpci5GaGlyU3RyaW5nKHggYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPikpOyB9IH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwcmVmaXgnXSkgeyB0aGlzLnByZWZpeCA9IHNvdXJjZS5wcmVmaXgubWFwKCh4KSA9PiBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogeH0pKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucHJlZml4ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ19wcmVmaXgnXSkge1xyXG4gICAgICBzb3VyY2UuX3ByZWZpeC5mb3JFYWNoKCh4LGkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcmVmaXgubGVuZ3RoID49IGkpIHsgaWYgKHgpIHsgdGhpcy5wcmVmaXhbaV0uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHgpOyB9IH1cclxuICAgICAgICBlbHNlIHsgaWYgKHgpIHsgdGhpcy5wcmVmaXgucHVzaChuZXcgZmhpci5GaGlyU3RyaW5nKHggYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPikpOyB9IH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydzdWZmaXgnXSkgeyB0aGlzLnN1ZmZpeCA9IHNvdXJjZS5zdWZmaXgubWFwKCh4KSA9PiBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogeH0pKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3VmZml4ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdWZmaXgnXSkge1xyXG4gICAgICBzb3VyY2UuX3N1ZmZpeC5mb3JFYWNoKCh4LGkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdWZmaXgubGVuZ3RoID49IGkpIHsgaWYgKHgpIHsgdGhpcy5zdWZmaXhbaV0uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHgpOyB9IH1cclxuICAgICAgICBlbHNlIHsgaWYgKHgpIHsgdGhpcy5zdWZmaXgucHVzaChuZXcgZmhpci5GaGlyU3RyaW5nKHggYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPikpOyB9IH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwZXJpb2QnXSkgeyB0aGlzLnBlcmlvZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2UucGVyaW9kKTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBSZXF1aXJlZC1ib3VuZCBWYWx1ZSBTZXQgZm9yIHVzZSAoSHVtYW5OYW1lLnVzZSlcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGdldCB1c2VSZXF1aXJlZENvZGVzKCkge1xyXG4gICAgcmV0dXJuIE5hbWVVc2VDb2RlcztcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb246c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24pO1xyXG4gICAgaWYgKGV4cHJlc3Npb24gPT09ICcnKSB7IGV4cHJlc3Npb24gPSAnSHVtYW5OYW1lJyB9XHJcbiAgICBpZiAodGhpc1sndXNlJ10gJiYgKCFPYmplY3QudmFsdWVzKE5hbWVVc2VDb2RlcykuaW5jbHVkZXModGhpcy51c2UudmFsdWUgYXMgYW55KSkpIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ2NvZGUtaW52YWxpZCcsIGRpYWdub3N0aWNzOiAnSW52YWxpZCBjb2RlIHByb3BlcnR5IHVzZSBmaGlyOiBIdW1hbk5hbWUudXNlOmNvZGUgUmVxdWlyZWQgYmluZGluZyB0bzogTmFtZVVzZScsIGV4cHJlc3Npb246IFtleHByZXNzaW9uXSB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzW1widXNlXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMudXNlLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy51c2UnKSk7IH1cclxuICAgIGlmICh0aGlzW1widGV4dFwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLnRleHQuZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbisnLnRleHQnKSk7IH1cclxuICAgIGlmICh0aGlzW1wiZmFtaWx5XCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuZmFtaWx5LmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy5mYW1pbHknKSk7IH1cclxuICAgIGlmICh0aGlzW1wiZ2l2ZW5cIl0pIHsgdGhpcy5naXZlbi5mb3JFYWNoKCh4LGkpID0+IHsgaXNzdWVzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uK2AuZ2l2ZW5bJHtpfV1gKSk7IH0pIH1cclxuICAgIGlmICh0aGlzW1wicHJlZml4XCJdKSB7IHRoaXMucHJlZml4LmZvckVhY2goKHgsaSkgPT4geyBpc3N1ZXMucHVzaCguLi54LmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rYC5wcmVmaXhbJHtpfV1gKSk7IH0pIH1cclxuICAgIGlmICh0aGlzW1wic3VmZml4XCJdKSB7IHRoaXMuc3VmZml4LmZvckVhY2goKHgsaSkgPT4geyBpc3N1ZXMucHVzaCguLi54LmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rYC5zdWZmaXhbJHtpfV1gKSk7IH0pIH1cclxuICAgIGlmICh0aGlzW1wicGVyaW9kXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMucGVyaW9kLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy5wZXJpb2QnKSk7IH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgYSBIdW1hbk5hbWUgaW50byBhIGRpc3BsYXlhYmxlIHN0cmluZ1xyXG4gKi9cclxudG9EaXNwbGF5KGZhbWlseUZpcnN0OmJvb2xlYW4gPSB0cnVlLCBpbmNsdWRlQW5ub3RhdGlvbnM6Ym9vbGVhbiA9IGZhbHNlKTpzdHJpbmcge1xyXG4gIGlmICgodGhpcy50ZXh0KSAmJiAodGhpcy50ZXh0Lmxlbmd0aCA+IDApKSB7XHJcbiAgICByZXR1cm4gdGhpcy50ZXh0LnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgdmFsOnN0cmluZyA9ICcnO1xyXG5cclxuICBpZiAoZmFtaWx5Rmlyc3QpIHtcclxuICAgIGlmICh0aGlzLmZhbWlseSkge1xyXG4gICAgICB2YWwgPSB0aGlzLmZhbWlseS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmdpdmVuKSB7XHJcbiAgICAgIHZhbCArPSAodmFsLmxlbmd0aCA+IDAgPyAnLCAnIDogJycpICsgdGhpcy5naXZlbi5qb2luKCcgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGluY2x1ZGVBbm5vdGF0aW9ucykge1xyXG4gICAgICBpZiAodGhpcy5zdWZmaXgpIHtcclxuICAgICAgICB2YWwgKz0gKHZhbC5sZW5ndGggPiAwID8gJywgJyA6ICcnKSArIHRoaXMuc3VmZml4LmpvaW4oJywgJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnByZWZpeCkge1xyXG4gICAgICAgIHZhbCArPSAodmFsLmxlbmd0aCA+IDAgPyAnLCAnIDogJycpICsgdGhpcy5wcmVmaXguam9pbignLCAnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG5cclxuICBpZiAoKGluY2x1ZGVBbm5vdGF0aW9ucykgJiYgKHRoaXMucHJlZml4KSkge1xyXG4gICAgdmFsICs9IHRoaXMucHJlZml4LmpvaW4oJywgJyk7XHJcbiAgfVxyXG5cclxuICBpZiAodGhpcy5naXZlbikge1xyXG4gICAgdmFsID0gKHZhbC5sZW5ndGggPiAwID8gJyAnIDogJycpICsgdGhpcy5naXZlbi5qb2luKCcgJyk7XHJcbiAgfVxyXG4gIGlmICh0aGlzLmZhbWlseSkge1xyXG4gICAgdmFsICs9ICh2YWwubGVuZ3RoID4gMCA/ICcgJyA6ICcnKSArIHRoaXMuZmFtaWx5O1xyXG4gIH1cclxuXHJcbiAgaWYgKChpbmNsdWRlQW5ub3RhdGlvbnMpICYmICh0aGlzLnN1ZmZpeCkpIHtcclxuICAgIHZhbCArPSAodmFsLmxlbmd0aCA+IDAgPyAnLCAnIDogJycpICsgdGhpcy5zdWZmaXguam9pbignLCAnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB2YWw7XHJcbn1cclxufVxyXG4iXX0=