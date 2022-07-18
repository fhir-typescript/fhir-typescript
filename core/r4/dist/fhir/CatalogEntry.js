// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
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
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'CatalogEntry.relatedEntry';
        }
        iss.push(...this.vRSV('relationtype', exp, 'RelationType', RelationTypeVsValidation, 'r'));
        iss.push(...this.vRS('item', exp));
        return iss;
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
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'CatalogEntry';
        }
        iss.push(...this.vRPS('resourceType', exp));
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vOS('type', exp));
        iss.push(...this.vRS('orderable', exp));
        iss.push(...this.vRS('referencedItem', exp));
        iss.push(...this.vOA('additionalIdentifier', exp));
        iss.push(...this.vOA('classification', exp));
        iss.push(...this.vOSV('status', exp, 'PublicationStatus', PublicationStatusVsValidation, 'r'));
        iss.push(...this.vOS('validityPeriod', exp));
        iss.push(...this.vOS('validTo', exp));
        iss.push(...this.vOS('lastUpdated', exp));
        iss.push(...this.vOA('additionalCharacteristic', exp));
        iss.push(...this.vOA('additionalClassification', exp));
        iss.push(...this.vOA('relatedEntry', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
CatalogEntry._fts_dataType = 'CatalogEntry';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0YWxvZ0VudHJ5LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9DYXRhbG9nRW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUd4RixhQUFhO0FBQ2IsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFtQmxHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHdCQUF5QixTQUFRLElBQUksQ0FBQyxlQUFlO0lBYWhFOztPQUVHO0lBQ0gsWUFBWSxTQUErQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNyRyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQXVCLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDckg7WUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQ2xDLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxhQUFjLENBQUMsQ0FBQzthQUFFO2lCQUNyRjtnQkFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBdUIsTUFBTSxDQUFDLGFBQXVDLENBQUMsQ0FBQzthQUFFO1NBQ3RIO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxD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LyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IENhdGFsb2dFbnRyeVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUmVsYXRpb25UeXBlQ29kZXMsICBSZWxhdGlvblR5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVsYXRpb25UeXBlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFJlbGF0aW9uVHlwZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVsYXRpb25UeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBQdWJsaWNhdGlvblN0YXR1c0NvZGVzLCAgUHVibGljYXRpb25TdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUHVibGljYXRpb25TdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUHVibGljYXRpb25TdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1B1YmxpY2F0aW9uU3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIENhdGFsb2dFbnRyeVJlbGF0ZWRFbnRyeSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDYXRhbG9nRW50cnlSZWxhdGVkRW50cnlBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiByZWxhdGlvbiB0byB0aGUgcmVsYXRlZCBpdGVtOiBjaGlsZCwgcGFyZW50LCBwYWNrYWdlQ29udGVudCwgY29udGFpbmVyUGFja2FnZSwgdXNlZEluLCB1c2VzLCByZXF1aXJlcywgZXRjLlxyXG4gICAqL1xyXG4gIHJlbGF0aW9udHlwZTogZmhpci5GaGlyQ29kZTxSZWxhdGlvblR5cGVDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ2F0YWxvZ0VudHJ5LnJlbGF0ZWRFbnRyeS5yZWxhdGlvbnR5cGVcclxuICAgKi9cclxuICBfcmVsYXRpb250eXBlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgcmVmZXJlbmNlIHRvIHRoZSByZWxhdGVkIGl0ZW0uXHJcbiAgICovXHJcbiAgaXRlbTogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVc2VkIGZvciBleGFtcGxlLCB0byBwb2ludCB0byBhIHN1YnN0YW5jZSwgb3IgdG8gYSBkZXZpY2UgdXNlZCB0byBhZG1pbmlzdGVyIGEgbWVkaWNhdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDYXRhbG9nRW50cnlSZWxhdGVkRW50cnkgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdDYXRhbG9nRW50cnlSZWxhdGVkRW50cnknO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0eXBlIG9mIHJlbGF0aW9uIHRvIHRoZSByZWxhdGVkIGl0ZW06IGNoaWxkLCBwYXJlbnQsIHBhY2thZ2VDb250ZW50LCBjb250YWluZXJQYWNrYWdlLCB1c2VkSW4sIHVzZXMsIHJlcXVpcmVzLCBldGMuXHJcbiAgICovXHJcbiAgcHVibGljIHJlbGF0aW9udHlwZTogZmhpci5GaGlyQ29kZTxSZWxhdGlvblR5cGVDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgcmVmZXJlbmNlIHRvIHRoZSByZWxhdGVkIGl0ZW0uXHJcbiAgICovXHJcbiAgcHVibGljIGl0ZW06IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgQ2F0YWxvZ0VudHJ5UmVsYXRlZEVudHJ5IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8Q2F0YWxvZ0VudHJ5UmVsYXRlZEVudHJ5QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3JlbGF0aW9udHlwZSddKSB7IHRoaXMucmVsYXRpb250eXBlID0gbmV3IGZoaXIuRmhpckNvZGU8UmVsYXRpb25UeXBlQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnJlbGF0aW9udHlwZX0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5yZWxhdGlvbnR5cGUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfcmVsYXRpb250eXBlJ10pIHtcclxuICAgICAgaWYgKHRoaXMucmVsYXRpb250eXBlKSB7IHRoaXMucmVsYXRpb250eXBlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3JlbGF0aW9udHlwZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnJlbGF0aW9udHlwZSA9IG5ldyBmaGlyLkZoaXJDb2RlPFJlbGF0aW9uVHlwZUNvZGVUeXBlPihzb3VyY2UuX3JlbGF0aW9udHlwZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnaXRlbSddKSB7IHRoaXMuaXRlbSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuaXRlbSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLml0ZW0gPSBudWxsOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnQ2F0YWxvZ0VudHJ5LnJlbGF0ZWRFbnRyeScgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlNWKCdyZWxhdGlvbnR5cGUnLGV4cCwnUmVsYXRpb25UeXBlJyxSZWxhdGlvblR5cGVWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygnaXRlbScsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgQ2F0YWxvZ0VudHJ5IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENhdGFsb2dFbnRyeUFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkNhdGFsb2dFbnRyeVwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBVc2VkIGluIHN1cHBvcnRpbmcgZGlmZmVyZW50IGlkZW50aWZpZXJzIGZvciB0aGUgc2FtZSBwcm9kdWN0LCBlLmcuIG1hbnVmYWN0dXJlciBjb2RlIGFuZCByZXRhaWxlciBjb2RlLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0eXBlIG9mIGl0ZW0gLSBtZWRpY2F0aW9uLCBkZXZpY2UsIHNlcnZpY2UsIHByb3RvY29sIG9yIG90aGVyLlxyXG4gICAqL1xyXG4gIHR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIGVudHJ5IHJlcHJlc2VudHMgYW4gb3JkZXJhYmxlIGl0ZW0uXHJcbiAgICovXHJcbiAgb3JkZXJhYmxlOiBmaGlyLkZoaXJCb29sZWFufGJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDYXRhbG9nRW50cnkub3JkZXJhYmxlXHJcbiAgICovXHJcbiAgX29yZGVyYWJsZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIGl0ZW0gaW4gYSBjYXRhbG9nIG9yIGRlZmluaXRpb24uXHJcbiAgICovXHJcbiAgcmVmZXJlbmNlZEl0ZW06IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgaW4gc3VwcG9ydGluZyByZWxhdGVkIGNvbmNlcHRzLCBlLmcuIE5EQyB0byBSeE5vcm0uXHJcbiAgICovXHJcbiAgYWRkaXRpb25hbElkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIENsYXNzZXMgb2YgZGV2aWNlcywgb3IgQVRDIGZvciBtZWRpY2F0aW9uLlxyXG4gICAqL1xyXG4gIGNsYXNzaWZpY2F0aW9uPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gc3VwcG9ydCBjYXRhbG9nIGV4Y2hhbmdlIGV2ZW4gZm9yIHVuc3VwcG9ydGVkIHByb2R1Y3RzLCBlLmcuIGdldHRpbmcgbGlzdCBvZiBtZWRpY2F0aW9ucyBldmVuIGlmIG5vdCBwcmVzY3JpYmFibGUuXHJcbiAgICovXHJcbiAgc3RhdHVzPzogZmhpci5GaGlyQ29kZTxQdWJsaWNhdGlvblN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDYXRhbG9nRW50cnkuc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWUgcGVyaW9kIGluIHdoaWNoIHRoaXMgY2F0YWxvZyBlbnRyeSBpcyBleHBlY3RlZCB0byBiZSBhY3RpdmUuXHJcbiAgICovXHJcbiAgdmFsaWRpdHlQZXJpb2Q/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHVudGlsIHdoaWNoIHRoaXMgY2F0YWxvZyBlbnRyeSBpcyBleHBlY3RlZCB0byBiZSBhY3RpdmUuXHJcbiAgICovXHJcbiAgdmFsaWRUbz86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENhdGFsb2dFbnRyeS52YWxpZFRvXHJcbiAgICovXHJcbiAgX3ZhbGlkVG8/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFBlcmhhcHMgbm90IG5lZWRlZCAtIGlmIHdlIHVzZSBmaGlyIHJlc291cmNlIG1ldGFkYXRhLlxyXG4gICAqL1xyXG4gIGxhc3RVcGRhdGVkPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ2F0YWxvZ0VudHJ5Lmxhc3RVcGRhdGVkXHJcbiAgICovXHJcbiAgX2xhc3RVcGRhdGVkPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBVc2VkIGZvciBleGFtcGxlZm9yIE91dCBvZiBGb3JtdWxhcnksIG9yIGFueSBzcGVjaWZpY3MuXHJcbiAgICovXHJcbiAgYWRkaXRpb25hbENoYXJhY3RlcmlzdGljPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFVzZXIgZm9yIGV4YW1wbGUgZm9yIEFUQyBjbGFzc2lmaWNhdGlvbiwgb3IuXHJcbiAgICovXHJcbiAgYWRkaXRpb25hbENsYXNzaWZpY2F0aW9uPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgZm9yIGV4YW1wbGUsIHRvIHBvaW50IHRvIGEgc3Vic3RhbmNlLCBvciB0byBhIGRldmljZSB1c2VkIHRvIGFkbWluaXN0ZXIgYSBtZWRpY2F0aW9uLlxyXG4gICAqL1xyXG4gIHJlbGF0ZWRFbnRyeT86IGZoaXIuQ2F0YWxvZ0VudHJ5UmVsYXRlZEVudHJ5QXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhdGFsb2cgZW50cmllcyBhcmUgd3JhcHBlcnMgdGhhdCBjb250ZXh0dWFsaXplIGl0ZW1zIGluY2x1ZGVkIGluIGEgY2F0YWxvZy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDYXRhbG9nRW50cnkgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0NhdGFsb2dFbnRyeSc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJDYXRhbG9nRW50cnlcIjtcclxuICAvKipcclxuICAgKiBVc2VkIGluIHN1cHBvcnRpbmcgZGlmZmVyZW50IGlkZW50aWZpZXJzIGZvciB0aGUgc2FtZSBwcm9kdWN0LCBlLmcuIG1hbnVmYWN0dXJlciBjb2RlIGFuZCByZXRhaWxlciBjb2RlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiBpdGVtIC0gbWVkaWNhdGlvbiwgZGV2aWNlLCBzZXJ2aWNlLCBwcm90b2NvbCBvciBvdGhlci5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBlbnRyeSByZXByZXNlbnRzIGFuIG9yZGVyYWJsZSBpdGVtLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvcmRlcmFibGU6IGZoaXIuRmhpckJvb2xlYW58bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgaXRlbSBpbiBhIGNhdGFsb2cgb3IgZGVmaW5pdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgcmVmZXJlbmNlZEl0ZW06IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVXNlZCBpbiBzdXBwb3J0aW5nIHJlbGF0ZWQgY29uY2VwdHMsIGUuZy4gTkRDIHRvIFJ4Tm9ybS5cclxuICAgKi9cclxuICBwdWJsaWMgYWRkaXRpb25hbElkZW50aWZpZXI6IGZoaXIuSWRlbnRpZmllcltdO1xyXG4gIC8qKlxyXG4gICAqIENsYXNzZXMgb2YgZGV2aWNlcywgb3IgQVRDIGZvciBtZWRpY2F0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjbGFzc2lmaWNhdGlvbjogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBVc2VkIHRvIHN1cHBvcnQgY2F0YWxvZyBleGNoYW5nZSBldmVuIGZvciB1bnN1cHBvcnRlZCBwcm9kdWN0cywgZS5nLiBnZXR0aW5nIGxpc3Qgb2YgbWVkaWNhdGlvbnMgZXZlbiBpZiBub3QgcHJlc2NyaWJhYmxlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM/OiBmaGlyLkZoaXJDb2RlPFB1YmxpY2F0aW9uU3RhdHVzQ29kZVR5cGU+fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdGltZSBwZXJpb2QgaW4gd2hpY2ggdGhpcyBjYXRhbG9nIGVudHJ5IGlzIGV4cGVjdGVkIHRvIGJlIGFjdGl2ZS5cclxuICAgKi9cclxuICBwdWJsaWMgdmFsaWRpdHlQZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgdW50aWwgd2hpY2ggdGhpcyBjYXRhbG9nIGVudHJ5IGlzIGV4cGVjdGVkIHRvIGJlIGFjdGl2ZS5cclxuICAgKi9cclxuICBwdWJsaWMgdmFsaWRUbz86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBQZXJoYXBzIG5vdCBuZWVkZWQgLSBpZiB3ZSB1c2UgZmhpciByZXNvdXJjZSBtZXRhZGF0YS5cclxuICAgKi9cclxuICBwdWJsaWMgbGFzdFVwZGF0ZWQ/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVXNlZCBmb3IgZXhhbXBsZWZvciBPdXQgb2YgRm9ybXVsYXJ5LCBvciBhbnkgc3BlY2lmaWNzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRpdGlvbmFsQ2hhcmFjdGVyaXN0aWM6IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogVXNlciBmb3IgZXhhbXBsZSBmb3IgQVRDIGNsYXNzaWZpY2F0aW9uLCBvci5cclxuICAgKi9cclxuICBwdWJsaWMgYWRkaXRpb25hbENsYXNzaWZpY2F0aW9uOiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgZm9yIGV4YW1wbGUsIHRvIHBvaW50IHRvIGEgc3Vic3RhbmNlLCBvciB0byBhIGRldmljZSB1c2VkIHRvIGFkbWluaXN0ZXIgYSBtZWRpY2F0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWxhdGVkRW50cnk6IGZoaXIuQ2F0YWxvZ0VudHJ5UmVsYXRlZEVudHJ5W107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgQ2F0YWxvZ0VudHJ5IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8Q2F0YWxvZ0VudHJ5QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ0NhdGFsb2dFbnRyeSc7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gc291cmNlLmlkZW50aWZpZXIubWFwKCh4KSA9PiBuZXcgZmhpci5JZGVudGlmaWVyKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaWRlbnRpZmllciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWyd0eXBlJ10pIHsgdGhpcy50eXBlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS50eXBlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnb3JkZXJhYmxlJ10pIHsgdGhpcy5vcmRlcmFibGUgPSBuZXcgZmhpci5GaGlyQm9vbGVhbih7dmFsdWU6IHNvdXJjZS5vcmRlcmFibGV9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMub3JkZXJhYmxlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX29yZGVyYWJsZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLm9yZGVyYWJsZSkgeyB0aGlzLm9yZGVyYWJsZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9vcmRlcmFibGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5vcmRlcmFibGUgPSBuZXcgZmhpci5GaGlyQm9vbGVhbihzb3VyY2UuX29yZGVyYWJsZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckJvb2xlYW5BcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3JlZmVyZW5jZWRJdGVtJ10pIHsgdGhpcy5yZWZlcmVuY2VkSXRlbSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucmVmZXJlbmNlZEl0ZW0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5yZWZlcmVuY2VkSXRlbSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ2FkZGl0aW9uYWxJZGVudGlmaWVyJ10pIHsgdGhpcy5hZGRpdGlvbmFsSWRlbnRpZmllciA9IHNvdXJjZS5hZGRpdGlvbmFsSWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5hZGRpdGlvbmFsSWRlbnRpZmllciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydjbGFzc2lmaWNhdGlvbiddKSB7IHRoaXMuY2xhc3NpZmljYXRpb24gPSBzb3VyY2UuY2xhc3NpZmljYXRpb24ubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jbGFzc2lmaWNhdGlvbiA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydzdGF0dXMnXSkgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPFB1YmxpY2F0aW9uU3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN0YXR1c30pOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzKSB7IHRoaXMuc3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPFB1YmxpY2F0aW9uU3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd2YWxpZGl0eVBlcmlvZCddKSB7IHRoaXMudmFsaWRpdHlQZXJpb2QgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLnZhbGlkaXR5UGVyaW9kKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsndmFsaWRUbyddKSB7IHRoaXMudmFsaWRUbyA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS52YWxpZFRvfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ192YWxpZFRvJ10pIHtcclxuICAgICAgaWYgKHRoaXMudmFsaWRUbykgeyB0aGlzLnZhbGlkVG8uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdmFsaWRUbyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnZhbGlkVG8gPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl92YWxpZFRvIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2xhc3RVcGRhdGVkJ10pIHsgdGhpcy5sYXN0VXBkYXRlZCA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5sYXN0VXBkYXRlZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfbGFzdFVwZGF0ZWQnXSkge1xyXG4gICAgICBpZiAodGhpcy5sYXN0VXBkYXRlZCkgeyB0aGlzLmxhc3RVcGRhdGVkLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2xhc3RVcGRhdGVkISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubGFzdFVwZGF0ZWQgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9sYXN0VXBkYXRlZCBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydhZGRpdGlvbmFsQ2hhcmFjdGVyaXN0aWMnXSkgeyB0aGlzLmFkZGl0aW9uYWxDaGFyYWN0ZXJpc3RpYyA9IHNvdXJjZS5hZGRpdGlvbmFsQ2hhcmFjdGVyaXN0aWMubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5hZGRpdGlvbmFsQ2hhcmFjdGVyaXN0aWMgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYWRkaXRpb25hbENsYXNzaWZpY2F0aW9uJ10pIHsgdGhpcy5hZGRpdGlvbmFsQ2xhc3NpZmljYXRpb24gPSBzb3VyY2UuYWRkaXRpb25hbENsYXNzaWZpY2F0aW9uLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuYWRkaXRpb25hbENsYXNzaWZpY2F0aW9uID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlbGF0ZWRFbnRyeSddKSB7IHRoaXMucmVsYXRlZEVudHJ5ID0gc291cmNlLnJlbGF0ZWRFbnRyeS5tYXAoKHgpID0+IG5ldyBmaGlyLkNhdGFsb2dFbnRyeVJlbGF0ZWRFbnRyeSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnJlbGF0ZWRFbnRyeSA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnQ2F0YWxvZ0VudHJ5JyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUFMoJ3Jlc291cmNlVHlwZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndHlwZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygnb3JkZXJhYmxlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdyZWZlcmVuY2VkSXRlbScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnYWRkaXRpb25hbElkZW50aWZpZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2NsYXNzaWZpY2F0aW9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TVignc3RhdHVzJyxleHAsJ1B1YmxpY2F0aW9uU3RhdHVzJyxQdWJsaWNhdGlvblN0YXR1c1ZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd2YWxpZGl0eVBlcmlvZCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndmFsaWRUbycsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnbGFzdFVwZGF0ZWQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2FkZGl0aW9uYWxDaGFyYWN0ZXJpc3RpYycsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnYWRkaXRpb25hbENsYXNzaWZpY2F0aW9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdyZWxhdGVkRW50cnknLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19