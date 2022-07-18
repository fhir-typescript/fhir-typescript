// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: CatalogEntry
import * as fhir from '../fhir.js';
// @ts-ignore
import { RelationTypeVsValidation } from '../fhirValueSets/RelationTypeVsValidation.js';
// @ts-ignore
import { PublicationStatusVsValidation } from '../fhirValueSets/PublicationStatusVsValidation.js';
/**
 * Used for example, to point to a substance, or to a device used to administer a medication.
 */
export class CatalogEntryRelatedEntry extends fhir.BackboneElement {
    /**
     * Default constructor for CatalogEntryRelatedEntry - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['relationtype']) {
            this.relationtype = new fhir.FhirCode({ value: source.relationtype });
        }
        else {
            this.relationtype = null;
        }
        if (source['_relationtype']) {
            if (this.relationtype) {
                this.relationtype.addExtendedProperties(source._relationtype);
            }
            else {
                this.relationtype = new fhir.FhirCode(source._relationtype);
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
            exp = 'CatalogEntry.relatedEntry';
        }
        this.vRSV('relationtype', exp, 'RelationType', RelationTypeVsValidation, 'r');
        this.vRS('item', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
CatalogEntryRelatedEntry._fts_dataType = 'CatalogEntryRelatedEntry';
/**
 * Catalog entries are wrappers that contextualize items included in a catalog.
 */
export class CatalogEntry extends fhir.DomainResource {
    /**
     * Default constructor for CatalogEntry - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'CatalogEntry';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['orderable']) {
            this.orderable = new fhir.FhirBoolean({ value: source.orderable });
        }
        else {
            this.orderable = null;
        }
        if (source['_orderable']) {
            if (this.orderable) {
                this.orderable.addExtendedProperties(source._orderable);
            }
            else {
                this.orderable = new fhir.FhirBoolean(source._orderable);
            }
        }
        if (source['referencedItem']) {
            this.referencedItem = new fhir.Reference(source.referencedItem);
        }
        else {
            this.referencedItem = null;
        }
        if (source['additionalIdentifier']) {
            this.additionalIdentifier = source.additionalIdentifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.additionalIdentifier = [];
        }
        if (source['classification']) {
            this.classification = source.classification.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.classification = [];
        }
        if (source['status']) {
            this.status = new fhir.FhirCode({ value: source.status });
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status);
            }
        }
        if (source['validityPeriod']) {
            this.validityPeriod = new fhir.Period(source.validityPeriod);
        }
        if (source['validTo']) {
            this.validTo = new fhir.FhirDateTime({ value: source.validTo });
        }
        if (source['_validTo']) {
            if (this.validTo) {
                this.validTo.addExtendedProperties(source._validTo);
            }
            else {
                this.validTo = new fhir.FhirDateTime(source._validTo);
            }
        }
        if (source['lastUpdated']) {
            this.lastUpdated = new fhir.FhirDateTime({ value: source.lastUpdated });
        }
        if (source['_lastUpdated']) {
            if (this.lastUpdated) {
                this.lastUpdated.addExtendedProperties(source._lastUpdated);
            }
            else {
                this.lastUpdated = new fhir.FhirDateTime(source._lastUpdated);
            }
        }
        if (source['additionalCharacteristic']) {
            this.additionalCharacteristic = source.additionalCharacteristic.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.additionalCharacteristic = [];
        }
        if (source['additionalClassification']) {
            this.additionalClassification = source.additionalClassification.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.additionalClassification = [];
        }
        if (source['relatedEntry']) {
            this.relatedEntry = source.relatedEntry.map((x) => new fhir.CatalogEntryRelatedEntry(x));
        }
        else {
            this.relatedEntry = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'CatalogEntry';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vOS('type', exp);
        this.vRS('orderable', exp);
        this.vRS('referencedItem', exp);
        this.vOA('additionalIdentifier', exp);
        this.vOA('classification', exp);
        this.vOSV('status', exp, 'PublicationStatus', PublicationStatusVsValidation, 'r');
        this.vOS('validityPeriod', exp);
        this.vOS('validTo', exp);
        this.vOS('lastUpdated', exp);
        this.vOA('additionalCharacteristic', exp);
        this.vOA('additionalClassification', exp);
        this.vOA('relatedEntry', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
CatalogEntry._fts_dataType = 'CatalogEntry';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0YWxvZ0VudHJ5LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9DYXRhbG9nRW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUd4RixhQUFhO0FBQ2IsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFtQmxHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHdCQUF5QixTQUFRLElBQUksQ0FBQyxlQUFlO0lBYWhFOztPQUVHO0lBQ0gsWUFBWSxTQUErQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNyRyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQXVCLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDckg7WUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQ2xDLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxhQUFjLENBQUMsQ0FBQzthQUFFO2lCQUNyRjtnQkFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBdUIsTUFBTSxDQUFDLGFBQXVDLENBQUMsQ0FBQzthQUFFO1NBQ3RIO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxD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QyxHQUFHLENBQUMsQ0FBQTtRQUM3RSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQTdIRDs7R0FFRztBQUM2QiwwQkFBYSxHQUFVLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IENhdGFsb2dFbnRyeVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUmVsYXRpb25UeXBlQ29kZXMsICBSZWxhdGlvblR5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVsYXRpb25UeXBlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFJlbGF0aW9uVHlwZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVsYXRpb25UeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBQdWJsaWNhdGlvblN0YXR1c0NvZGVzLCAgUHVibGljYXRpb25TdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUHVibGljYXRpb25TdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUHVibGljYXRpb25TdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1B1YmxpY2F0aW9uU3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIENhdGFsb2dFbnRyeVJlbGF0ZWRFbnRyeSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDYXRhbG9nRW50cnlSZWxhdGVkRW50cnlBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiByZWxhdGlvbiB0byB0aGUgcmVsYXRlZCBpdGVtOiBjaGlsZCwgcGFyZW50LCBwYWNrYWdlQ29udGVudCwgY29udGFpbmVyUGFja2FnZSwgdXNlZEluLCB1c2VzLCByZXF1aXJlcywgZXRjLlxyXG4gICAqL1xyXG4gIHJlbGF0aW9udHlwZTogZmhpci5GaGlyQ29kZTxSZWxhdGlvblR5cGVDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ2F0YWxvZ0VudHJ5LnJlbGF0ZWRFbnRyeS5yZWxhdGlvbnR5cGVcclxuICAgKi9cclxuICBfcmVsYXRpb250eXBlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgcmVmZXJlbmNlIHRvIHRoZSByZWxhdGVkIGl0ZW0uXHJcbiAgICovXHJcbiAgaXRlbTogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVc2VkIGZvciBleGFtcGxlLCB0byBwb2ludCB0byBhIHN1YnN0YW5jZSwgb3IgdG8gYSBkZXZpY2UgdXNlZCB0byBhZG1pbmlzdGVyIGEgbWVkaWNhdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDYXRhbG9nRW50cnlSZWxhdGVkRW50cnkgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdDYXRhbG9nRW50cnlSZWxhdGVkRW50cnknO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0eXBlIG9mIHJlbGF0aW9uIHRvIHRoZSByZWxhdGVkIGl0ZW06IGNoaWxkLCBwYXJlbnQsIHBhY2thZ2VDb250ZW50LCBjb250YWluZXJQYWNrYWdlLCB1c2VkSW4sIHVzZXMsIHJlcXVpcmVzLCBldGMuXHJcbiAgICovXHJcbiAgcHVibGljIHJlbGF0aW9udHlwZTogZmhpci5GaGlyQ29kZTxSZWxhdGlvblR5cGVDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgcmVmZXJlbmNlIHRvIHRoZSByZWxhdGVkIGl0ZW0uXHJcbiAgICovXHJcbiAgcHVibGljIGl0ZW06IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgQ2F0YWxvZ0VudHJ5UmVsYXRlZEVudHJ5IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8Q2F0YWxvZ0VudHJ5UmVsYXRlZEVudHJ5QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3JlbGF0aW9udHlwZSddKSB7IHRoaXMucmVsYXRpb250eXBlID0gbmV3IGZoaXIuRmhpckNvZGU8UmVsYXRpb25UeXBlQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnJlbGF0aW9udHlwZX0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5yZWxhdGlvbnR5cGUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfcmVsYXRpb250eXBlJ10pIHtcclxuICAgICAgaWYgKHRoaXMucmVsYXRpb250eXBlKSB7IHRoaXMucmVsYXRpb250eXBlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3JlbGF0aW9udHlwZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnJlbGF0aW9udHlwZSA9IG5ldyBmaGlyLkZoaXJDb2RlPFJlbGF0aW9uVHlwZUNvZGVUeXBlPihzb3VyY2UuX3JlbGF0aW9udHlwZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnaXRlbSddKSB7IHRoaXMuaXRlbSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuaXRlbSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLml0ZW0gPSBudWxsOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnQ2F0YWxvZ0VudHJ5LnJlbGF0ZWRFbnRyeScgfVxyXG4gICAgdGhpcy52UlNWKCdyZWxhdGlvbnR5cGUnLGV4cCwnUmVsYXRpb25UeXBlJyxSZWxhdGlvblR5cGVWc1ZhbGlkYXRpb24sJ3InKVxyXG4gICAgdGhpcy52UlMoJ2l0ZW0nLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBDYXRhbG9nRW50cnkgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2F0YWxvZ0VudHJ5QXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiQ2F0YWxvZ0VudHJ5XCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgaW4gc3VwcG9ydGluZyBkaWZmZXJlbnQgaWRlbnRpZmllcnMgZm9yIHRoZSBzYW1lIHByb2R1Y3QsIGUuZy4gbWFudWZhY3R1cmVyIGNvZGUgYW5kIHJldGFpbGVyIGNvZGUuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgb2YgaXRlbSAtIG1lZGljYXRpb24sIGRldmljZSwgc2VydmljZSwgcHJvdG9jb2wgb3Igb3RoZXIuXHJcbiAgICovXHJcbiAgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgZW50cnkgcmVwcmVzZW50cyBhbiBvcmRlcmFibGUgaXRlbS5cclxuICAgKi9cclxuICBvcmRlcmFibGU6IGZoaXIuRmhpckJvb2xlYW58Ym9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENhdGFsb2dFbnRyeS5vcmRlcmFibGVcclxuICAgKi9cclxuICBfb3JkZXJhYmxlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgaXRlbSBpbiBhIGNhdGFsb2cgb3IgZGVmaW5pdGlvbi5cclxuICAgKi9cclxuICByZWZlcmVuY2VkSXRlbTogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVXNlZCBpbiBzdXBwb3J0aW5nIHJlbGF0ZWQgY29uY2VwdHMsIGUuZy4gTkRDIHRvIFJ4Tm9ybS5cclxuICAgKi9cclxuICBhZGRpdGlvbmFsSWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQ2xhc3NlcyBvZiBkZXZpY2VzLCBvciBBVEMgZm9yIG1lZGljYXRpb24uXHJcbiAgICovXHJcbiAgY2xhc3NpZmljYXRpb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVXNlZCB0byBzdXBwb3J0IGNhdGFsb2cgZXhjaGFuZ2UgZXZlbiBmb3IgdW5zdXBwb3J0ZWQgcHJvZHVjdHMsIGUuZy4gZ2V0dGluZyBsaXN0IG9mIG1lZGljYXRpb25zIGV2ZW4gaWYgbm90IHByZXNjcmliYWJsZS5cclxuICAgKi9cclxuICBzdGF0dXM/OiBmaGlyLkZoaXJDb2RlPFB1YmxpY2F0aW9uU3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENhdGFsb2dFbnRyeS5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgdGltZSBwZXJpb2QgaW4gd2hpY2ggdGhpcyBjYXRhbG9nIGVudHJ5IGlzIGV4cGVjdGVkIHRvIGJlIGFjdGl2ZS5cclxuICAgKi9cclxuICB2YWxpZGl0eVBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgdW50aWwgd2hpY2ggdGhpcyBjYXRhbG9nIGVudHJ5IGlzIGV4cGVjdGVkIHRvIGJlIGFjdGl2ZS5cclxuICAgKi9cclxuICB2YWxpZFRvPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ2F0YWxvZ0VudHJ5LnZhbGlkVG9cclxuICAgKi9cclxuICBfdmFsaWRUbz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogUGVyaGFwcyBub3QgbmVlZGVkIC0gaWYgd2UgdXNlIGZoaXIgcmVzb3VyY2UgbWV0YWRhdGEuXHJcbiAgICovXHJcbiAgbGFzdFVwZGF0ZWQ/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDYXRhbG9nRW50cnkubGFzdFVwZGF0ZWRcclxuICAgKi9cclxuICBfbGFzdFVwZGF0ZWQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgZm9yIGV4YW1wbGVmb3IgT3V0IG9mIEZvcm11bGFyeSwgb3IgYW55IHNwZWNpZmljcy5cclxuICAgKi9cclxuICBhZGRpdGlvbmFsQ2hhcmFjdGVyaXN0aWM/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVXNlciBmb3IgZXhhbXBsZSBmb3IgQVRDIGNsYXNzaWZpY2F0aW9uLCBvci5cclxuICAgKi9cclxuICBhZGRpdGlvbmFsQ2xhc3NpZmljYXRpb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVXNlZCBmb3IgZXhhbXBsZSwgdG8gcG9pbnQgdG8gYSBzdWJzdGFuY2UsIG9yIHRvIGEgZGV2aWNlIHVzZWQgdG8gYWRtaW5pc3RlciBhIG1lZGljYXRpb24uXHJcbiAgICovXHJcbiAgcmVsYXRlZEVudHJ5PzogZmhpci5DYXRhbG9nRW50cnlSZWxhdGVkRW50cnlBcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQ2F0YWxvZyBlbnRyaWVzIGFyZSB3cmFwcGVycyB0aGF0IGNvbnRleHR1YWxpemUgaXRlbXMgaW5jbHVkZWQgaW4gYSBjYXRhbG9nLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENhdGFsb2dFbnRyeSBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQ2F0YWxvZ0VudHJ5JztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIkNhdGFsb2dFbnRyeVwiO1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgaW4gc3VwcG9ydGluZyBkaWZmZXJlbnQgaWRlbnRpZmllcnMgZm9yIHRoZSBzYW1lIHByb2R1Y3QsIGUuZy4gbWFudWZhY3R1cmVyIGNvZGUgYW5kIHJldGFpbGVyIGNvZGUuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI6IGZoaXIuSWRlbnRpZmllcltdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0eXBlIG9mIGl0ZW0gLSBtZWRpY2F0aW9uLCBkZXZpY2UsIHNlcnZpY2UsIHByb3RvY29sIG9yIG90aGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0eXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIGVudHJ5IHJlcHJlc2VudHMgYW4gb3JkZXJhYmxlIGl0ZW0uXHJcbiAgICovXHJcbiAgcHVibGljIG9yZGVyYWJsZTogZmhpci5GaGlyQm9vbGVhbnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpdGVtIGluIGEgY2F0YWxvZyBvciBkZWZpbml0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWZlcmVuY2VkSXRlbTogZmhpci5SZWZlcmVuY2V8bnVsbDtcclxuICAvKipcclxuICAgKiBVc2VkIGluIHN1cHBvcnRpbmcgcmVsYXRlZCBjb25jZXB0cywgZS5nLiBOREMgdG8gUnhOb3JtLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRpdGlvbmFsSWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogQ2xhc3NlcyBvZiBkZXZpY2VzLCBvciBBVEMgZm9yIG1lZGljYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIGNsYXNzaWZpY2F0aW9uOiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gc3VwcG9ydCBjYXRhbG9nIGV4Y2hhbmdlIGV2ZW4gZm9yIHVuc3VwcG9ydGVkIHByb2R1Y3RzLCBlLmcuIGdldHRpbmcgbGlzdCBvZiBtZWRpY2F0aW9ucyBldmVuIGlmIG5vdCBwcmVzY3JpYmFibGUuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1cz86IGZoaXIuRmhpckNvZGU8UHVibGljYXRpb25TdGF0dXNDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lIHBlcmlvZCBpbiB3aGljaCB0aGlzIGNhdGFsb2cgZW50cnkgaXMgZXhwZWN0ZWQgdG8gYmUgYWN0aXZlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB2YWxpZGl0eVBlcmlvZD86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB1bnRpbCB3aGljaCB0aGlzIGNhdGFsb2cgZW50cnkgaXMgZXhwZWN0ZWQgdG8gYmUgYWN0aXZlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB2YWxpZFRvPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFBlcmhhcHMgbm90IG5lZWRlZCAtIGlmIHdlIHVzZSBmaGlyIHJlc291cmNlIG1ldGFkYXRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsYXN0VXBkYXRlZD86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBVc2VkIGZvciBleGFtcGxlZm9yIE91dCBvZiBGb3JtdWxhcnksIG9yIGFueSBzcGVjaWZpY3MuXHJcbiAgICovXHJcbiAgcHVibGljIGFkZGl0aW9uYWxDaGFyYWN0ZXJpc3RpYzogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBVc2VyIGZvciBleGFtcGxlIGZvciBBVEMgY2xhc3NpZmljYXRpb24sIG9yLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRpdGlvbmFsQ2xhc3NpZmljYXRpb246IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogVXNlZCBmb3IgZXhhbXBsZSwgdG8gcG9pbnQgdG8gYSBzdWJzdGFuY2UsIG9yIHRvIGEgZGV2aWNlIHVzZWQgdG8gYWRtaW5pc3RlciBhIG1lZGljYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHJlbGF0ZWRFbnRyeTogZmhpci5DYXRhbG9nRW50cnlSZWxhdGVkRW50cnlbXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBDYXRhbG9nRW50cnkgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxDYXRhbG9nRW50cnlBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnQ2F0YWxvZ0VudHJ5JztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnR5cGUpOyB9XHJcbiAgICBpZiAoc291cmNlWydvcmRlcmFibGUnXSkgeyB0aGlzLm9yZGVyYWJsZSA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHt2YWx1ZTogc291cmNlLm9yZGVyYWJsZX0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5vcmRlcmFibGUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfb3JkZXJhYmxlJ10pIHtcclxuICAgICAgaWYgKHRoaXMub3JkZXJhYmxlKSB7IHRoaXMub3JkZXJhYmxlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX29yZGVyYWJsZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLm9yZGVyYWJsZSA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHNvdXJjZS5fb3JkZXJhYmxlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQm9vbGVhbkFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVmZXJlbmNlZEl0ZW0nXSkgeyB0aGlzLnJlZmVyZW5jZWRJdGVtID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5yZWZlcmVuY2VkSXRlbSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnJlZmVyZW5jZWRJdGVtID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYWRkaXRpb25hbElkZW50aWZpZXInXSkgeyB0aGlzLmFkZGl0aW9uYWxJZGVudGlmaWVyID0gc291cmNlLmFkZGl0aW9uYWxJZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmFkZGl0aW9uYWxJZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2NsYXNzaWZpY2F0aW9uJ10pIHsgdGhpcy5jbGFzc2lmaWNhdGlvbiA9IHNvdXJjZS5jbGFzc2lmaWNhdGlvbi5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmNsYXNzaWZpY2F0aW9uID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8UHVibGljYXRpb25TdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdHVzfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMpIHsgdGhpcy5zdGF0dXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8UHVibGljYXRpb25TdGF0dXNDb2RlVHlwZT4oc291cmNlLl9zdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3ZhbGlkaXR5UGVyaW9kJ10pIHsgdGhpcy52YWxpZGl0eVBlcmlvZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2UudmFsaWRpdHlQZXJpb2QpOyB9XHJcbiAgICBpZiAoc291cmNlWyd2YWxpZFRvJ10pIHsgdGhpcy52YWxpZFRvID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLnZhbGlkVG99KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3ZhbGlkVG8nXSkge1xyXG4gICAgICBpZiAodGhpcy52YWxpZFRvKSB7IHRoaXMudmFsaWRUby5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl92YWxpZFRvISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudmFsaWRUbyA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX3ZhbGlkVG8gYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbGFzdFVwZGF0ZWQnXSkgeyB0aGlzLmxhc3RVcGRhdGVkID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLmxhc3RVcGRhdGVkfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19sYXN0VXBkYXRlZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmxhc3RVcGRhdGVkKSB7IHRoaXMubGFzdFVwZGF0ZWQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fbGFzdFVwZGF0ZWQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5sYXN0VXBkYXRlZCA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX2xhc3RVcGRhdGVkIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2FkZGl0aW9uYWxDaGFyYWN0ZXJpc3RpYyddKSB7IHRoaXMuYWRkaXRpb25hbENoYXJhY3RlcmlzdGljID0gc291cmNlLmFkZGl0aW9uYWxDaGFyYWN0ZXJpc3RpYy5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmFkZGl0aW9uYWxDaGFyYWN0ZXJpc3RpYyA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydhZGRpdGlvbmFsQ2xhc3NpZmljYXRpb24nXSkgeyB0aGlzLmFkZGl0aW9uYWxDbGFzc2lmaWNhdGlvbiA9IHNvdXJjZS5hZGRpdGlvbmFsQ2xhc3NpZmljYXRpb24ubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5hZGRpdGlvbmFsQ2xhc3NpZmljYXRpb24gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVsYXRlZEVudHJ5J10pIHsgdGhpcy5yZWxhdGVkRW50cnkgPSBzb3VyY2UucmVsYXRlZEVudHJ5Lm1hcCgoeCkgPT4gbmV3IGZoaXIuQ2F0YWxvZ0VudHJ5UmVsYXRlZEVudHJ5KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucmVsYXRlZEVudHJ5ID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdDYXRhbG9nRW50cnknIH1cclxuICAgIHRoaXMudlJTKCdyZXNvdXJjZVR5cGUnLGV4cClcclxuICAgIHRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApXHJcbiAgICB0aGlzLnZPUygndHlwZScsZXhwKVxyXG4gICAgdGhpcy52UlMoJ29yZGVyYWJsZScsZXhwKVxyXG4gICAgdGhpcy52UlMoJ3JlZmVyZW5jZWRJdGVtJyxleHApXHJcbiAgICB0aGlzLnZPQSgnYWRkaXRpb25hbElkZW50aWZpZXInLGV4cClcclxuICAgIHRoaXMudk9BKCdjbGFzc2lmaWNhdGlvbicsZXhwKVxyXG4gICAgdGhpcy52T1NWKCdzdGF0dXMnLGV4cCwnUHVibGljYXRpb25TdGF0dXMnLFB1YmxpY2F0aW9uU3RhdHVzVnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHRoaXMudk9TKCd2YWxpZGl0eVBlcmlvZCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3ZhbGlkVG8nLGV4cClcclxuICAgIHRoaXMudk9TKCdsYXN0VXBkYXRlZCcsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2FkZGl0aW9uYWxDaGFyYWN0ZXJpc3RpYycsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2FkZGl0aW9uYWxDbGFzc2lmaWNhdGlvbicsZXhwKVxyXG4gICAgdGhpcy52T0EoJ3JlbGF0ZWRFbnRyeScsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19