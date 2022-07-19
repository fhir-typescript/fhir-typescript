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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0YWxvZ0VudHJ5LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9DYXRhbG9nRW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUd4RixhQUFhO0FBQ2IsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFtQmxHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHdCQUF5QixTQUFRLElBQUksQ0FBQyxlQUFlO0lBYWhFOztPQUVHO0lBQ0gsWUFBWSxTQUErQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNyRyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQXVCLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDckg7WUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQ2xDLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxhQUFjLENBQUMsQ0FBQzthQUFFO2lCQUNyRjtnQkFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBdUIsTUFBTSxDQUFDLGFBQXVDLENBQUMsQ0FBQzthQUFFO1NBQ3RIO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxD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LyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBDYXRhbG9nRW50cnlcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFJlbGF0aW9uVHlwZUNvZGVzLCAgUmVsYXRpb25UeXBlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1JlbGF0aW9uVHlwZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBSZWxhdGlvblR5cGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1JlbGF0aW9uVHlwZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUHVibGljYXRpb25TdGF0dXNDb2RlcywgIFB1YmxpY2F0aW9uU3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1B1YmxpY2F0aW9uU3RhdHVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFB1YmxpY2F0aW9uU3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9QdWJsaWNhdGlvblN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBDYXRhbG9nRW50cnlSZWxhdGVkRW50cnkgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2F0YWxvZ0VudHJ5UmVsYXRlZEVudHJ5QXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgb2YgcmVsYXRpb24gdG8gdGhlIHJlbGF0ZWQgaXRlbTogY2hpbGQsIHBhcmVudCwgcGFja2FnZUNvbnRlbnQsIGNvbnRhaW5lclBhY2thZ2UsIHVzZWRJbiwgdXNlcywgcmVxdWlyZXMsIGV0Yy5cclxuICAgKi9cclxuICByZWxhdGlvbnR5cGU6IGZoaXIuRmhpckNvZGU8UmVsYXRpb25UeXBlQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENhdGFsb2dFbnRyeS5yZWxhdGVkRW50cnkucmVsYXRpb250eXBlXHJcbiAgICovXHJcbiAgX3JlbGF0aW9udHlwZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIHJlZmVyZW5jZSB0byB0aGUgcmVsYXRlZCBpdGVtLlxyXG4gICAqL1xyXG4gIGl0ZW06IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogVXNlZCBmb3IgZXhhbXBsZSwgdG8gcG9pbnQgdG8gYSBzdWJzdGFuY2UsIG9yIHRvIGEgZGV2aWNlIHVzZWQgdG8gYWRtaW5pc3RlciBhIG1lZGljYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2F0YWxvZ0VudHJ5UmVsYXRlZEVudHJ5IGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQ2F0YWxvZ0VudHJ5UmVsYXRlZEVudHJ5JztcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiByZWxhdGlvbiB0byB0aGUgcmVsYXRlZCBpdGVtOiBjaGlsZCwgcGFyZW50LCBwYWNrYWdlQ29udGVudCwgY29udGFpbmVyUGFja2FnZSwgdXNlZEluLCB1c2VzLCByZXF1aXJlcywgZXRjLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWxhdGlvbnR5cGU6IGZoaXIuRmhpckNvZGU8UmVsYXRpb25UeXBlQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIHJlZmVyZW5jZSB0byB0aGUgcmVsYXRlZCBpdGVtLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpdGVtOiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIENhdGFsb2dFbnRyeVJlbGF0ZWRFbnRyeSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPENhdGFsb2dFbnRyeVJlbGF0ZWRFbnRyeUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydyZWxhdGlvbnR5cGUnXSkgeyB0aGlzLnJlbGF0aW9udHlwZSA9IG5ldyBmaGlyLkZoaXJDb2RlPFJlbGF0aW9uVHlwZUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5yZWxhdGlvbnR5cGV9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucmVsYXRpb250eXBlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3JlbGF0aW9udHlwZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnJlbGF0aW9udHlwZSkgeyB0aGlzLnJlbGF0aW9udHlwZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9yZWxhdGlvbnR5cGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5yZWxhdGlvbnR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZTxSZWxhdGlvblR5cGVDb2RlVHlwZT4oc291cmNlLl9yZWxhdGlvbnR5cGUgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2l0ZW0nXSkgeyB0aGlzLml0ZW0gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLml0ZW0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pdGVtID0gbnVsbDsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0NhdGFsb2dFbnRyeS5yZWxhdGVkRW50cnknIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTVigncmVsYXRpb250eXBlJyxleHAsJ1JlbGF0aW9uVHlwZScsUmVsYXRpb25UeXBlVnNWYWxpZGF0aW9uLCdyJykpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ2l0ZW0nLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIENhdGFsb2dFbnRyeSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDYXRhbG9nRW50cnlBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJDYXRhbG9nRW50cnlcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVXNlZCBpbiBzdXBwb3J0aW5nIGRpZmZlcmVudCBpZGVudGlmaWVycyBmb3IgdGhlIHNhbWUgcHJvZHVjdCwgZS5nLiBtYW51ZmFjdHVyZXIgY29kZSBhbmQgcmV0YWlsZXIgY29kZS5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiBpdGVtIC0gbWVkaWNhdGlvbiwgZGV2aWNlLCBzZXJ2aWNlLCBwcm90b2NvbCBvciBvdGhlci5cclxuICAgKi9cclxuICB0eXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBlbnRyeSByZXByZXNlbnRzIGFuIG9yZGVyYWJsZSBpdGVtLlxyXG4gICAqL1xyXG4gIG9yZGVyYWJsZTogZmhpci5GaGlyQm9vbGVhbnxib29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ2F0YWxvZ0VudHJ5Lm9yZGVyYWJsZVxyXG4gICAqL1xyXG4gIF9vcmRlcmFibGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpdGVtIGluIGEgY2F0YWxvZyBvciBkZWZpbml0aW9uLlxyXG4gICAqL1xyXG4gIHJlZmVyZW5jZWRJdGVtOiBmaGlyLlJlZmVyZW5jZUFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBVc2VkIGluIHN1cHBvcnRpbmcgcmVsYXRlZCBjb25jZXB0cywgZS5nLiBOREMgdG8gUnhOb3JtLlxyXG4gICAqL1xyXG4gIGFkZGl0aW9uYWxJZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBDbGFzc2VzIG9mIGRldmljZXMsIG9yIEFUQyBmb3IgbWVkaWNhdGlvbi5cclxuICAgKi9cclxuICBjbGFzc2lmaWNhdGlvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBVc2VkIHRvIHN1cHBvcnQgY2F0YWxvZyBleGNoYW5nZSBldmVuIGZvciB1bnN1cHBvcnRlZCBwcm9kdWN0cywgZS5nLiBnZXR0aW5nIGxpc3Qgb2YgbWVkaWNhdGlvbnMgZXZlbiBpZiBub3QgcHJlc2NyaWJhYmxlLlxyXG4gICAqL1xyXG4gIHN0YXR1cz86IGZoaXIuRmhpckNvZGU8UHVibGljYXRpb25TdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ2F0YWxvZ0VudHJ5LnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lIHBlcmlvZCBpbiB3aGljaCB0aGlzIGNhdGFsb2cgZW50cnkgaXMgZXhwZWN0ZWQgdG8gYmUgYWN0aXZlLlxyXG4gICAqL1xyXG4gIHZhbGlkaXR5UGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB1bnRpbCB3aGljaCB0aGlzIGNhdGFsb2cgZW50cnkgaXMgZXhwZWN0ZWQgdG8gYmUgYWN0aXZlLlxyXG4gICAqL1xyXG4gIHZhbGlkVG8/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDYXRhbG9nRW50cnkudmFsaWRUb1xyXG4gICAqL1xyXG4gIF92YWxpZFRvPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBQZXJoYXBzIG5vdCBuZWVkZWQgLSBpZiB3ZSB1c2UgZmhpciByZXNvdXJjZSBtZXRhZGF0YS5cclxuICAgKi9cclxuICBsYXN0VXBkYXRlZD86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENhdGFsb2dFbnRyeS5sYXN0VXBkYXRlZFxyXG4gICAqL1xyXG4gIF9sYXN0VXBkYXRlZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVXNlZCBmb3IgZXhhbXBsZWZvciBPdXQgb2YgRm9ybXVsYXJ5LCBvciBhbnkgc3BlY2lmaWNzLlxyXG4gICAqL1xyXG4gIGFkZGl0aW9uYWxDaGFyYWN0ZXJpc3RpYz86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBVc2VyIGZvciBleGFtcGxlIGZvciBBVEMgY2xhc3NpZmljYXRpb24sIG9yLlxyXG4gICAqL1xyXG4gIGFkZGl0aW9uYWxDbGFzc2lmaWNhdGlvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBVc2VkIGZvciBleGFtcGxlLCB0byBwb2ludCB0byBhIHN1YnN0YW5jZSwgb3IgdG8gYSBkZXZpY2UgdXNlZCB0byBhZG1pbmlzdGVyIGEgbWVkaWNhdGlvbi5cclxuICAgKi9cclxuICByZWxhdGVkRW50cnk/OiBmaGlyLkNhdGFsb2dFbnRyeVJlbGF0ZWRFbnRyeUFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYXRhbG9nIGVudHJpZXMgYXJlIHdyYXBwZXJzIHRoYXQgY29udGV4dHVhbGl6ZSBpdGVtcyBpbmNsdWRlZCBpbiBhIGNhdGFsb2cuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2F0YWxvZ0VudHJ5IGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdDYXRhbG9nRW50cnknO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiQ2F0YWxvZ0VudHJ5XCI7XHJcbiAgLyoqXHJcbiAgICogVXNlZCBpbiBzdXBwb3J0aW5nIGRpZmZlcmVudCBpZGVudGlmaWVycyBmb3IgdGhlIHNhbWUgcHJvZHVjdCwgZS5nLiBtYW51ZmFjdHVyZXIgY29kZSBhbmQgcmV0YWlsZXIgY29kZS5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgb2YgaXRlbSAtIG1lZGljYXRpb24sIGRldmljZSwgc2VydmljZSwgcHJvdG9jb2wgb3Igb3RoZXIuXHJcbiAgICovXHJcbiAgcHVibGljIHR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgZW50cnkgcmVwcmVzZW50cyBhbiBvcmRlcmFibGUgaXRlbS5cclxuICAgKi9cclxuICBwdWJsaWMgb3JkZXJhYmxlOiBmaGlyLkZoaXJCb29sZWFufG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGl0ZW0gaW4gYSBjYXRhbG9nIG9yIGRlZmluaXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHJlZmVyZW5jZWRJdGVtOiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgaW4gc3VwcG9ydGluZyByZWxhdGVkIGNvbmNlcHRzLCBlLmcuIE5EQyB0byBSeE5vcm0uXHJcbiAgICovXHJcbiAgcHVibGljIGFkZGl0aW9uYWxJZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBDbGFzc2VzIG9mIGRldmljZXMsIG9yIEFUQyBmb3IgbWVkaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgY2xhc3NpZmljYXRpb246IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogVXNlZCB0byBzdXBwb3J0IGNhdGFsb2cgZXhjaGFuZ2UgZXZlbiBmb3IgdW5zdXBwb3J0ZWQgcHJvZHVjdHMsIGUuZy4gZ2V0dGluZyBsaXN0IG9mIG1lZGljYXRpb25zIGV2ZW4gaWYgbm90IHByZXNjcmliYWJsZS5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzPzogZmhpci5GaGlyQ29kZTxQdWJsaWNhdGlvblN0YXR1c0NvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWUgcGVyaW9kIGluIHdoaWNoIHRoaXMgY2F0YWxvZyBlbnRyeSBpcyBleHBlY3RlZCB0byBiZSBhY3RpdmUuXHJcbiAgICovXHJcbiAgcHVibGljIHZhbGlkaXR5UGVyaW9kPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHVudGlsIHdoaWNoIHRoaXMgY2F0YWxvZyBlbnRyeSBpcyBleHBlY3RlZCB0byBiZSBhY3RpdmUuXHJcbiAgICovXHJcbiAgcHVibGljIHZhbGlkVG8/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUGVyaGFwcyBub3QgbmVlZGVkIC0gaWYgd2UgdXNlIGZoaXIgcmVzb3VyY2UgbWV0YWRhdGEuXHJcbiAgICovXHJcbiAgcHVibGljIGxhc3RVcGRhdGVkPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgZm9yIGV4YW1wbGVmb3IgT3V0IG9mIEZvcm11bGFyeSwgb3IgYW55IHNwZWNpZmljcy5cclxuICAgKi9cclxuICBwdWJsaWMgYWRkaXRpb25hbENoYXJhY3RlcmlzdGljOiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIFVzZXIgZm9yIGV4YW1wbGUgZm9yIEFUQyBjbGFzc2lmaWNhdGlvbiwgb3IuXHJcbiAgICovXHJcbiAgcHVibGljIGFkZGl0aW9uYWxDbGFzc2lmaWNhdGlvbjogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBVc2VkIGZvciBleGFtcGxlLCB0byBwb2ludCB0byBhIHN1YnN0YW5jZSwgb3IgdG8gYSBkZXZpY2UgdXNlZCB0byBhZG1pbmlzdGVyIGEgbWVkaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgcmVsYXRlZEVudHJ5OiBmaGlyLkNhdGFsb2dFbnRyeVJlbGF0ZWRFbnRyeVtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIENhdGFsb2dFbnRyeSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPENhdGFsb2dFbnRyeUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdDYXRhbG9nRW50cnknO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsndHlwZSddKSB7IHRoaXMudHlwZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UudHlwZSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ29yZGVyYWJsZSddKSB7IHRoaXMub3JkZXJhYmxlID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oe3ZhbHVlOiBzb3VyY2Uub3JkZXJhYmxlfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLm9yZGVyYWJsZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19vcmRlcmFibGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5vcmRlcmFibGUpIHsgdGhpcy5vcmRlcmFibGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fb3JkZXJhYmxlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMub3JkZXJhYmxlID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oc291cmNlLl9vcmRlcmFibGUgYXMgUGFydGlhbDxmaGlyLkZoaXJCb29sZWFuQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydyZWZlcmVuY2VkSXRlbSddKSB7IHRoaXMucmVmZXJlbmNlZEl0ZW0gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnJlZmVyZW5jZWRJdGVtKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucmVmZXJlbmNlZEl0ZW0gPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydhZGRpdGlvbmFsSWRlbnRpZmllciddKSB7IHRoaXMuYWRkaXRpb25hbElkZW50aWZpZXIgPSBzb3VyY2UuYWRkaXRpb25hbElkZW50aWZpZXIubWFwKCh4KSA9PiBuZXcgZmhpci5JZGVudGlmaWVyKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuYWRkaXRpb25hbElkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY2xhc3NpZmljYXRpb24nXSkgeyB0aGlzLmNsYXNzaWZpY2F0aW9uID0gc291cmNlLmNsYXNzaWZpY2F0aW9uLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY2xhc3NpZmljYXRpb24gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxQdWJsaWNhdGlvblN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxQdWJsaWNhdGlvblN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3N0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndmFsaWRpdHlQZXJpb2QnXSkgeyB0aGlzLnZhbGlkaXR5UGVyaW9kID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS52YWxpZGl0eVBlcmlvZCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3ZhbGlkVG8nXSkgeyB0aGlzLnZhbGlkVG8gPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UudmFsaWRUb30pOyB9XHJcbiAgICBpZiAoc291cmNlWydfdmFsaWRUbyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbGlkVG8pIHsgdGhpcy52YWxpZFRvLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3ZhbGlkVG8hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy52YWxpZFRvID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fdmFsaWRUbyBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydsYXN0VXBkYXRlZCddKSB7IHRoaXMubGFzdFVwZGF0ZWQgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UubGFzdFVwZGF0ZWR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2xhc3RVcGRhdGVkJ10pIHtcclxuICAgICAgaWYgKHRoaXMubGFzdFVwZGF0ZWQpIHsgdGhpcy5sYXN0VXBkYXRlZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9sYXN0VXBkYXRlZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmxhc3RVcGRhdGVkID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fbGFzdFVwZGF0ZWQgYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnYWRkaXRpb25hbENoYXJhY3RlcmlzdGljJ10pIHsgdGhpcy5hZGRpdGlvbmFsQ2hhcmFjdGVyaXN0aWMgPSBzb3VyY2UuYWRkaXRpb25hbENoYXJhY3RlcmlzdGljLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuYWRkaXRpb25hbENoYXJhY3RlcmlzdGljID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2FkZGl0aW9uYWxDbGFzc2lmaWNhdGlvbiddKSB7IHRoaXMuYWRkaXRpb25hbENsYXNzaWZpY2F0aW9uID0gc291cmNlLmFkZGl0aW9uYWxDbGFzc2lmaWNhdGlvbi5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmFkZGl0aW9uYWxDbGFzc2lmaWNhdGlvbiA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydyZWxhdGVkRW50cnknXSkgeyB0aGlzLnJlbGF0ZWRFbnRyeSA9IHNvdXJjZS5yZWxhdGVkRW50cnkubWFwKCh4KSA9PiBuZXcgZmhpci5DYXRhbG9nRW50cnlSZWxhdGVkRW50cnkoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5yZWxhdGVkRW50cnkgPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0NhdGFsb2dFbnRyeScgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlBTKCdyZXNvdXJjZVR5cGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2lkZW50aWZpZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3R5cGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ29yZGVyYWJsZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygncmVmZXJlbmNlZEl0ZW0nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2FkZGl0aW9uYWxJZGVudGlmaWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdjbGFzc2lmaWNhdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPU1YoJ3N0YXR1cycsZXhwLCdQdWJsaWNhdGlvblN0YXR1cycsUHVibGljYXRpb25TdGF0dXNWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndmFsaWRpdHlQZXJpb2QnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3ZhbGlkVG8nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2xhc3RVcGRhdGVkJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdhZGRpdGlvbmFsQ2hhcmFjdGVyaXN0aWMnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2FkZGl0aW9uYWxDbGFzc2lmaWNhdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgncmVsYXRlZEVudHJ5JyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==