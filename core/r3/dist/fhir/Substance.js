// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Substance
import * as fhir from '../fhir.js';
// @ts-ignore
import { SubstanceStatusVsValidation } from '../fhirValueSets/SubstanceStatusVsValidation.js';
/**
 * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
 */
export class SubstanceInstance extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier);
        }
        if (source['expiry']) {
            this.expiry = new fhir.FhirDateTime({ value: source.expiry });
        }
        if (source['_expiry']) {
            if (this.expiry) {
                this.expiry.addExtendedProperties(source._expiry);
            }
            else {
                this.expiry = new fhir.FhirDateTime(source._expiry);
            }
        }
        if (source['quantity']) {
            this.quantity = new fhir.Quantity(source.quantity);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Substance.instance';
        }
        iss.push(...this.vOS('identifier', exp));
        iss.push(...this.vOS('expiry', exp));
        iss.push(...this.vOS('quantity', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SubstanceInstance._fts_dataType = 'SubstanceInstance';
/**
 * A substance can be composed of other substances.
 */
export class SubstanceIngredient extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceIngredient - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['quantity']) {
            this.quantity = new fhir.Ratio(source.quantity);
        }
        if (source['substance']) {
            this.substance = source.substance;
        }
        else if (source['substanceCodeableConcept']) {
            this.substance = new fhir.CodeableConcept(source.substanceCodeableConcept);
        }
        else if (source['substanceReference']) {
            this.substance = new fhir.Reference(source.substanceReference);
        }
        else {
            this.substance = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Substance.ingredient';
        }
        iss.push(...this.vOS('quantity', exp));
        iss.push(...this.vRS('substance', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SubstanceIngredient._fts_dataType = 'SubstanceIngredient';
/**
 * Internal flag to properly serialize choice-type element Substance.ingredient.substance[x]
 */
SubstanceIngredient._fts_substanceIsChoice = true;
/**
 * A homogeneous material with a definite composition.
 */
export class Substance extends fhir.DomainResource {
    /**
     * Default constructor for Substance - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Substance';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
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
        if (source['category']) {
            this.category = source.category.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.category = [];
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        else {
            this.code = null;
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['_description']) {
            if (this.description) {
                this.description.addExtendedProperties(source._description);
            }
            else {
                this.description = new fhir.FhirString(source._description);
            }
        }
        if (source['instance']) {
            this.instance = source.instance.map((x) => new fhir.SubstanceInstance(x));
        }
        else {
            this.instance = [];
        }
        if (source['ingredient']) {
            this.ingredient = source.ingredient.map((x) => new fhir.SubstanceIngredient(x));
        }
        else {
            this.ingredient = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Substance';
        }
        iss.push(...this.vRPS('resourceType', exp));
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vOSV('status', exp, 'SubstanceStatus', SubstanceStatusVsValidation, 'r'));
        iss.push(...this.vOA('category', exp));
        iss.push(...this.vRS('code', exp));
        iss.push(...this.vOS('description', exp));
        iss.push(...this.vOA('instance', exp));
        iss.push(...this.vOA('ingredient', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Substance._fts_dataType = 'Substance';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic3RhbmNlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9TdWJzdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsMkJBQTJCO0FBRTNCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQStCOUY7O0dBRUc7QUFDSCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsSUFBSSxDQUFDLGVBQWU7SUFpQnpEOztPQUVHO0lBQ0gsWUFBWSxTQUF3QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUM5RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQUU7UUFDdkYsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3RGLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxPQUFRLENBQUMsQ0FBQzthQUFFO2lCQUNuRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBeUMsQ0FBQyxDQUFDO2FBQUU7U0FDaEc7UUFDRCxJQUFJLE1BQU0sQ0FB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VSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IFN1YnN0YW5jZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU3Vic3RhbmNlU3RhdHVzQ29kZXMsICBTdWJzdGFuY2VTdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU3Vic3RhbmNlU3RhdHVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFN1YnN0YW5jZVN0YXR1c1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU3Vic3RhbmNlU3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdWJzdGFuY2VDYXRlZ29yeUNvZGVzLCAgU3Vic3RhbmNlQ2F0ZWdvcnlDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU3Vic3RhbmNlQ2F0ZWdvcnlDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU3Vic3RhbmNlQ2F0ZWdvcnlWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1YnN0YW5jZUNhdGVnb3J5VnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdWJzdGFuY2VDb2RlcywgIFN1YnN0YW5jZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TdWJzdGFuY2VDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU3Vic3RhbmNlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TdWJzdGFuY2VWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgU3Vic3RhbmNlSW5zdGFuY2UgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3Vic3RhbmNlSW5zdGFuY2VBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgcGFja2FnZS9jb250YWluZXIgKHVzdWFsbHkgYSBsYWJlbCBhZmZpeGVkIGRpcmVjdGx5KS5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGUgc3Vic3RhbmNlIGlzIG5vIGxvbmdlciB2YWxpZCB0byB1c2UuIEZvciBzb21lIHN1YnN0YW5jZXMsIGEgc2luZ2xlIGFyYml0cmFyeSBkYXRlIGlzIHVzZWQgZm9yIGV4cGlyeS5cclxuICAgKi9cclxuICBleHBpcnk/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzdGFuY2UuaW5zdGFuY2UuZXhwaXJ5XHJcbiAgICovXHJcbiAgX2V4cGlyeT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFtb3VudCBvZiB0aGUgc3Vic3RhbmNlLlxyXG4gICAqL1xyXG4gIHF1YW50aXR5PzogZmhpci5RdWFudGl0eUFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogU3Vic3RhbmNlIG1heSBiZSB1c2VkIHRvIGRlc2NyaWJlIGEga2luZCBvZiBzdWJzdGFuY2UsIG9yIGEgc3BlY2lmaWMgcGFja2FnZS9jb250YWluZXIgb2YgdGhlIHN1YnN0YW5jZTogYW4gaW5zdGFuY2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3Vic3RhbmNlSW5zdGFuY2UgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdTdWJzdGFuY2VJbnN0YW5jZSc7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIHBhY2thZ2UvY29udGFpbmVyICh1c3VhbGx5IGEgbGFiZWwgYWZmaXhlZCBkaXJlY3RseSkuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdoZW4gdGhlIHN1YnN0YW5jZSBpcyBubyBsb25nZXIgdmFsaWQgdG8gdXNlLiBGb3Igc29tZSBzdWJzdGFuY2VzLCBhIHNpbmdsZSBhcmJpdHJhcnkgZGF0ZSBpcyB1c2VkIGZvciBleHBpcnkuXHJcbiAgICovXHJcbiAgcHVibGljIGV4cGlyeT86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgYW1vdW50IG9mIHRoZSBzdWJzdGFuY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHF1YW50aXR5PzogZmhpci5RdWFudGl0eXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgU3Vic3RhbmNlSW5zdGFuY2UgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxTdWJzdGFuY2VJbnN0YW5jZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gbmV3IGZoaXIuSWRlbnRpZmllcihzb3VyY2UuaWRlbnRpZmllcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2V4cGlyeSddKSB7IHRoaXMuZXhwaXJ5ID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLmV4cGlyeX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZXhwaXJ5J10pIHtcclxuICAgICAgaWYgKHRoaXMuZXhwaXJ5KSB7IHRoaXMuZXhwaXJ5LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2V4cGlyeSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmV4cGlyeSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX2V4cGlyeSBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydxdWFudGl0eSddKSB7IHRoaXMucXVhbnRpdHkgPSBuZXcgZmhpci5RdWFudGl0eShzb3VyY2UucXVhbnRpdHkpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnU3Vic3RhbmNlLmluc3RhbmNlJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnaWRlbnRpZmllcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZXhwaXJ5JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdxdWFudGl0eScsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgU3Vic3RhbmNlSW5ncmVkaWVudCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdWJzdGFuY2VJbmdyZWRpZW50QXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFtb3VudCBvZiB0aGUgaW5ncmVkaWVudCBpbiB0aGUgc3Vic3RhbmNlIC0gYSBjb25jZW50cmF0aW9uIHJhdGlvLlxyXG4gICAqL1xyXG4gIHF1YW50aXR5PzogZmhpci5SYXRpb0FyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFub3RoZXIgc3Vic3RhbmNlIHRoYXQgaXMgYSBjb21wb25lbnQgb2YgdGhpcyBzdWJzdGFuY2UuXHJcbiAgICovXHJcbiAgc3Vic3RhbmNlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8Zmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFub3RoZXIgc3Vic3RhbmNlIHRoYXQgaXMgYSBjb21wb25lbnQgb2YgdGhpcyBzdWJzdGFuY2UuXHJcbiAgICovXHJcbiAgc3Vic3RhbmNlQ29kZWFibGVDb25jZXB0PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbm90aGVyIHN1YnN0YW5jZSB0aGF0IGlzIGEgY29tcG9uZW50IG9mIHRoaXMgc3Vic3RhbmNlLlxyXG4gICAqL1xyXG4gIHN1YnN0YW5jZVJlZmVyZW5jZT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHN1YnN0YW5jZSBjYW4gYmUgY29tcG9zZWQgb2Ygb3RoZXIgc3Vic3RhbmNlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdWJzdGFuY2VJbmdyZWRpZW50IGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnU3Vic3RhbmNlSW5ncmVkaWVudCc7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFtb3VudCBvZiB0aGUgaW5ncmVkaWVudCBpbiB0aGUgc3Vic3RhbmNlIC0gYSBjb25jZW50cmF0aW9uIHJhdGlvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBxdWFudGl0eT86IGZoaXIuUmF0aW98dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFub3RoZXIgc3Vic3RhbmNlIHRoYXQgaXMgYSBjb21wb25lbnQgb2YgdGhpcyBzdWJzdGFuY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHN1YnN0YW5jZTogKGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUmVmZXJlbmNlKXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIGZsYWcgdG8gcHJvcGVybHkgc2VyaWFsaXplIGNob2ljZS10eXBlIGVsZW1lbnQgU3Vic3RhbmNlLmluZ3JlZGllbnQuc3Vic3RhbmNlW3hdXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBfZnRzX3N1YnN0YW5jZUlzQ2hvaWNlOnRydWUgPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFN1YnN0YW5jZUluZ3JlZGllbnQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxTdWJzdGFuY2VJbmdyZWRpZW50QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3F1YW50aXR5J10pIHsgdGhpcy5xdWFudGl0eSA9IG5ldyBmaGlyLlJhdGlvKHNvdXJjZS5xdWFudGl0eSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N1YnN0YW5jZSddKSB7IHRoaXMuc3Vic3RhbmNlID0gc291cmNlLnN1YnN0YW5jZTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydzdWJzdGFuY2VDb2RlYWJsZUNvbmNlcHQnXSkgeyB0aGlzLnN1YnN0YW5jZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2Uuc3Vic3RhbmNlQ29kZWFibGVDb25jZXB0KTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydzdWJzdGFuY2VSZWZlcmVuY2UnXSkgeyB0aGlzLnN1YnN0YW5jZSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uuc3Vic3RhbmNlUmVmZXJlbmNlKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3Vic3RhbmNlID0gbnVsbDsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1N1YnN0YW5jZS5pbmdyZWRpZW50JyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncXVhbnRpdHknLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ3N1YnN0YW5jZScsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgU3Vic3RhbmNlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1YnN0YW5jZUFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIlN1YnN0YW5jZVwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGlkZW50aWZpZXIgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBraW5kIG9mIHN1YnN0YW5jZSBpbiBjb250cmFzdCB0byB0aGUgIFN1YnN0YW5jZS5pbnN0YW5jZS5pZGVudGlmaWVyIHdoaWNoIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcGFja2FnZS9jb250YWluZXIuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBjb2RlIHRvIGluZGljYXRlIGlmIHRoZSBzdWJzdGFuY2UgaXMgYWN0aXZlbHkgdXNlZC5cclxuICAgKi9cclxuICBzdGF0dXM/OiBmaGlyLkZoaXJDb2RlPFN1YnN0YW5jZVN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzdGFuY2Uuc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxldmVsIG9mIGdyYW51bGFyaXR5IGlzIGRlZmluZWQgYnkgdGhlIGNhdGVnb3J5IGNvbmNlcHRzIGluIHRoZSB2YWx1ZSBzZXQuICAgTW9yZSBmaW5lLWdyYWluZWQgZmlsdGVyaW5nIGNhbiBiZSBwZXJmb3JtZWQgdXNpbmcgdGhlIG1ldGFkYXRhIGFuZC9vciB0ZXJtaW5vbG9neSBoaWVyYXJjaHkgaW4gU3Vic3RhbmNlLmNvZGUuXHJcbiAgICovXHJcbiAgY2F0ZWdvcnk/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBjb3VsZCBiZSBhIHJlZmVyZW5jZSB0byBhbiBleHRlcm5hbGx5IGRlZmluZWQgY29kZS4gIEl0IGNvdWxkIGFsc28gYmUgYSBsb2NhbGx5IGFzc2lnbmVkIGNvZGUgKGUuZy4gYSBmb3JtdWxhcnkpLCAgb3B0aW9uYWxseSB3aXRoIHRyYW5zbGF0aW9ucyB0byB0aGUgc3RhbmRhcmQgZHJ1ZyBjb2Rlcy5cclxuICAgKi9cclxuICBjb2RlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBzdWJzdGFuY2UgLSBpdHMgYXBwZWFyYW5jZSwgaGFuZGxpbmcgcmVxdWlyZW1lbnRzLCBhbmQgb3RoZXIgdXNhZ2Ugbm90ZXMuXHJcbiAgICovXHJcbiAgZGVzY3JpcHRpb24/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU3Vic3RhbmNlLmRlc2NyaXB0aW9uXHJcbiAgICovXHJcbiAgX2Rlc2NyaXB0aW9uPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBTdWJzdGFuY2UgbWF5IGJlIHVzZWQgdG8gZGVzY3JpYmUgYSBraW5kIG9mIHN1YnN0YW5jZSwgb3IgYSBzcGVjaWZpYyBwYWNrYWdlL2NvbnRhaW5lciBvZiB0aGUgc3Vic3RhbmNlOiBhbiBpbnN0YW5jZS5cclxuICAgKi9cclxuICBpbnN0YW5jZT86IGZoaXIuU3Vic3RhbmNlSW5zdGFuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgc3Vic3RhbmNlIGNhbiBiZSBjb21wb3NlZCBvZiBvdGhlciBzdWJzdGFuY2VzLlxyXG4gICAqL1xyXG4gIGluZ3JlZGllbnQ/OiBmaGlyLlN1YnN0YW5jZUluZ3JlZGllbnRBcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBob21vZ2VuZW91cyBtYXRlcmlhbCB3aXRoIGEgZGVmaW5pdGUgY29tcG9zaXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3Vic3RhbmNlIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdTdWJzdGFuY2UnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiU3Vic3RhbmNlXCI7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBpZGVudGlmaWVyIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUga2luZCBvZiBzdWJzdGFuY2UgaW4gY29udHJhc3QgdG8gdGhlICBTdWJzdGFuY2UuaW5zdGFuY2UuaWRlbnRpZmllciB3aGljaCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIHBhY2thZ2UvY29udGFpbmVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBBIGNvZGUgdG8gaW5kaWNhdGUgaWYgdGhlIHN1YnN0YW5jZSBpcyBhY3RpdmVseSB1c2VkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM/OiBmaGlyLkZoaXJDb2RlPFN1YnN0YW5jZVN0YXR1c0NvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxldmVsIG9mIGdyYW51bGFyaXR5IGlzIGRlZmluZWQgYnkgdGhlIGNhdGVnb3J5IGNvbmNlcHRzIGluIHRoZSB2YWx1ZSBzZXQuICAgTW9yZSBmaW5lLWdyYWluZWQgZmlsdGVyaW5nIGNhbiBiZSBwZXJmb3JtZWQgdXNpbmcgdGhlIG1ldGFkYXRhIGFuZC9vciB0ZXJtaW5vbG9neSBoaWVyYXJjaHkgaW4gU3Vic3RhbmNlLmNvZGUuXHJcbiAgICovXHJcbiAgcHVibGljIGNhdGVnb3J5OiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgY291bGQgYmUgYSByZWZlcmVuY2UgdG8gYW4gZXh0ZXJuYWxseSBkZWZpbmVkIGNvZGUuICBJdCBjb3VsZCBhbHNvIGJlIGEgbG9jYWxseSBhc3NpZ25lZCBjb2RlIChlLmcuIGEgZm9ybXVsYXJ5KSwgIG9wdGlvbmFsbHkgd2l0aCB0cmFuc2xhdGlvbnMgdG8gdGhlIHN0YW5kYXJkIGRydWcgY29kZXMuXHJcbiAgICovXHJcbiAgcHVibGljIGNvZGU6IGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGw7XHJcbiAgLyoqXHJcbiAgICogQSBkZXNjcmlwdGlvbiBvZiB0aGUgc3Vic3RhbmNlIC0gaXRzIGFwcGVhcmFuY2UsIGhhbmRsaW5nIHJlcXVpcmVtZW50cywgYW5kIG90aGVyIHVzYWdlIG5vdGVzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkZXNjcmlwdGlvbj86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogU3Vic3RhbmNlIG1heSBiZSB1c2VkIHRvIGRlc2NyaWJlIGEga2luZCBvZiBzdWJzdGFuY2UsIG9yIGEgc3BlY2lmaWMgcGFja2FnZS9jb250YWluZXIgb2YgdGhlIHN1YnN0YW5jZTogYW4gaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgcHVibGljIGluc3RhbmNlOiBmaGlyLlN1YnN0YW5jZUluc3RhbmNlW107XHJcbiAgLyoqXHJcbiAgICogQSBzdWJzdGFuY2UgY2FuIGJlIGNvbXBvc2VkIG9mIG90aGVyIHN1YnN0YW5jZXMuXHJcbiAgICovXHJcbiAgcHVibGljIGluZ3JlZGllbnQ6IGZoaXIuU3Vic3RhbmNlSW5ncmVkaWVudFtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFN1YnN0YW5jZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFN1YnN0YW5jZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdTdWJzdGFuY2UnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxTdWJzdGFuY2VTdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdHVzfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMpIHsgdGhpcy5zdGF0dXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8U3Vic3RhbmNlU3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjYXRlZ29yeSddKSB7IHRoaXMuY2F0ZWdvcnkgPSBzb3VyY2UuY2F0ZWdvcnkubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jYXRlZ29yeSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydjb2RlJ10pIHsgdGhpcy5jb2RlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5jb2RlKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29kZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ2Rlc2NyaXB0aW9uJ10pIHsgdGhpcy5kZXNjcmlwdGlvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZGVzY3JpcHRpb259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Rlc2NyaXB0aW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb24pIHsgdGhpcy5kZXNjcmlwdGlvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kZXNjcmlwdGlvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRlc2NyaXB0aW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Rlc2NyaXB0aW9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydpbnN0YW5jZSddKSB7IHRoaXMuaW5zdGFuY2UgPSBzb3VyY2UuaW5zdGFuY2UubWFwKCh4KSA9PiBuZXcgZmhpci5TdWJzdGFuY2VJbnN0YW5jZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmluc3RhbmNlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2luZ3JlZGllbnQnXSkgeyB0aGlzLmluZ3JlZGllbnQgPSBzb3VyY2UuaW5ncmVkaWVudC5tYXAoKHgpID0+IG5ldyBmaGlyLlN1YnN0YW5jZUluZ3JlZGllbnQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pbmdyZWRpZW50ID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdTdWJzdGFuY2UnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJQUygncmVzb3VyY2VUeXBlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TVignc3RhdHVzJyxleHAsJ1N1YnN0YW5jZVN0YXR1cycsU3Vic3RhbmNlU3RhdHVzVnNWYWxpZGF0aW9uLCdyJykpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2NhdGVnb3J5JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdjb2RlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdkZXNjcmlwdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaW5zdGFuY2UnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2luZ3JlZGllbnQnLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19