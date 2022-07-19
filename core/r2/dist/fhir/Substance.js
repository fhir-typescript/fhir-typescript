// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Substance
import * as fhir from '../fhir.js';
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
            this.substance = new fhir.Reference(source.substance);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic3RhbmNlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9TdWJzdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsMkJBQTJCO0FBRTNCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBd0JuQzs7R0FFRztBQUNILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxJQUFJLENBQUMsZUFBZTtJQWlCekQ7O09BRUc7SUFDSCxZQUFZLFNBQXdDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQzlGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7U0FBRTtRQUN2RixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDdEYsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLE9BQVEsQ0FBQyxDQUFDO2FBQUU7aUJBQ25FO2dCQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUF5QyxDQUFDLENBQUM7YUFBRTtTQUNoRztRQUNELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FB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QUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBcEVEOztHQUVHO0FBQzZCLHVCQUFhLEdBQVUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBTdWJzdGFuY2VcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgU3Vic3RhbmNlSW5zdGFuY2UgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3Vic3RhbmNlSW5zdGFuY2VBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgcGFja2FnZS9jb250YWluZXIgKHVzdWFsbHkgYSBsYWJlbCBhZmZpeGVkIGRpcmVjdGx5KS5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGUgc3Vic3RhbmNlIGlzIG5vIGxvbmdlciB2YWxpZCB0byB1c2UuIEZvciBzb21lIHN1YnN0YW5jZXMsIGEgc2luZ2xlIGFyYml0cmFyeSBkYXRlIGlzIHVzZWQgZm9yIGV4cGlyeS5cclxuICAgKi9cclxuICBleHBpcnk/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzdGFuY2UuaW5zdGFuY2UuZXhwaXJ5XHJcbiAgICovXHJcbiAgX2V4cGlyeT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFtb3VudCBvZiB0aGUgc3Vic3RhbmNlLlxyXG4gICAqL1xyXG4gIHF1YW50aXR5PzogZmhpci5RdWFudGl0eUFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogU3Vic3RhbmNlIG1heSBiZSB1c2VkIHRvIGRlc2NyaWJlIGEga2luZCBvZiBzdWJzdGFuY2UsIG9yIGEgc3BlY2lmaWMgcGFja2FnZS9jb250YWluZXIgb2YgdGhlIHN1YnN0YW5jZTogYW4gaW5zdGFuY2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3Vic3RhbmNlSW5zdGFuY2UgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdTdWJzdGFuY2VJbnN0YW5jZSc7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIHBhY2thZ2UvY29udGFpbmVyICh1c3VhbGx5IGEgbGFiZWwgYWZmaXhlZCBkaXJlY3RseSkuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdoZW4gdGhlIHN1YnN0YW5jZSBpcyBubyBsb25nZXIgdmFsaWQgdG8gdXNlLiBGb3Igc29tZSBzdWJzdGFuY2VzLCBhIHNpbmdsZSBhcmJpdHJhcnkgZGF0ZSBpcyB1c2VkIGZvciBleHBpcnkuXHJcbiAgICovXHJcbiAgcHVibGljIGV4cGlyeT86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgYW1vdW50IG9mIHRoZSBzdWJzdGFuY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHF1YW50aXR5PzogZmhpci5RdWFudGl0eXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgU3Vic3RhbmNlSW5zdGFuY2UgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxTdWJzdGFuY2VJbnN0YW5jZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gbmV3IGZoaXIuSWRlbnRpZmllcihzb3VyY2UuaWRlbnRpZmllcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2V4cGlyeSddKSB7IHRoaXMuZXhwaXJ5ID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLmV4cGlyeX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZXhwaXJ5J10pIHtcclxuICAgICAgaWYgKHRoaXMuZXhwaXJ5KSB7IHRoaXMuZXhwaXJ5LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2V4cGlyeSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmV4cGlyeSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX2V4cGlyeSBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydxdWFudGl0eSddKSB7IHRoaXMucXVhbnRpdHkgPSBuZXcgZmhpci5RdWFudGl0eShzb3VyY2UucXVhbnRpdHkpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnU3Vic3RhbmNlLmluc3RhbmNlJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnaWRlbnRpZmllcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZXhwaXJ5JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdxdWFudGl0eScsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgU3Vic3RhbmNlSW5ncmVkaWVudCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdWJzdGFuY2VJbmdyZWRpZW50QXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFtb3VudCBvZiB0aGUgaW5ncmVkaWVudCBpbiB0aGUgc3Vic3RhbmNlIC0gYSBjb25jZW50cmF0aW9uIHJhdGlvLlxyXG4gICAqL1xyXG4gIHF1YW50aXR5PzogZmhpci5SYXRpb0FyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFub3RoZXIgc3Vic3RhbmNlIHRoYXQgaXMgYSBjb21wb25lbnQgb2YgdGhpcyBzdWJzdGFuY2UuXHJcbiAgICovXHJcbiAgc3Vic3RhbmNlOiBmaGlyLlJlZmVyZW5jZUFyZ3N8bnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgc3Vic3RhbmNlIGNhbiBiZSBjb21wb3NlZCBvZiBvdGhlciBzdWJzdGFuY2VzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN1YnN0YW5jZUluZ3JlZGllbnQgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdTdWJzdGFuY2VJbmdyZWRpZW50JztcclxuICAvKipcclxuICAgKiBUaGUgYW1vdW50IG9mIHRoZSBpbmdyZWRpZW50IGluIHRoZSBzdWJzdGFuY2UgLSBhIGNvbmNlbnRyYXRpb24gcmF0aW8uXHJcbiAgICovXHJcbiAgcHVibGljIHF1YW50aXR5PzogZmhpci5SYXRpb3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW5vdGhlciBzdWJzdGFuY2UgdGhhdCBpcyBhIGNvbXBvbmVudCBvZiB0aGlzIHN1YnN0YW5jZS5cclxuICAgKi9cclxuICBwdWJsaWMgc3Vic3RhbmNlOiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFN1YnN0YW5jZUluZ3JlZGllbnQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxTdWJzdGFuY2VJbmdyZWRpZW50QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3F1YW50aXR5J10pIHsgdGhpcy5xdWFudGl0eSA9IG5ldyBmaGlyLlJhdGlvKHNvdXJjZS5xdWFudGl0eSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N1YnN0YW5jZSddKSB7IHRoaXMuc3Vic3RhbmNlID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5zdWJzdGFuY2UpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdWJzdGFuY2UgPSBudWxsOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnU3Vic3RhbmNlLmluZ3JlZGllbnQnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdxdWFudGl0eScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygnc3Vic3RhbmNlJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTdWJzdGFuY2UgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3Vic3RhbmNlQXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiU3Vic3RhbmNlXCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgc3Vic3RhbmNlLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgY29kZSB0aGF0IGNsYXNzaWZpZXMgdGhlIGdlbmVyYWwgdHlwZSBvZiBzdWJzdGFuY2UuICBUaGlzIGlzIHVzZWQgIGZvciBzZWFyY2hpbmcsIHNvcnRpbmcgYW5kIGRpc3BsYXkgcHVycG9zZXMuXHJcbiAgICovXHJcbiAgY2F0ZWdvcnk/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBjb2RlIChvciBzZXQgb2YgY29kZXMpIHRoYXQgaWRlbnRpZnkgdGhpcyBzdWJzdGFuY2UuXHJcbiAgICovXHJcbiAgY29kZTogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogQSBkZXNjcmlwdGlvbiBvZiB0aGUgc3Vic3RhbmNlIC0gaXRzIGFwcGVhcmFuY2UsIGhhbmRsaW5nIHJlcXVpcmVtZW50cywgYW5kIG90aGVyIHVzYWdlIG5vdGVzLlxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnN0YW5jZS5kZXNjcmlwdGlvblxyXG4gICAqL1xyXG4gIF9kZXNjcmlwdGlvbj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogU3Vic3RhbmNlIG1heSBiZSB1c2VkIHRvIGRlc2NyaWJlIGEga2luZCBvZiBzdWJzdGFuY2UsIG9yIGEgc3BlY2lmaWMgcGFja2FnZS9jb250YWluZXIgb2YgdGhlIHN1YnN0YW5jZTogYW4gaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgaW5zdGFuY2U/OiBmaGlyLlN1YnN0YW5jZUluc3RhbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIHN1YnN0YW5jZSBjYW4gYmUgY29tcG9zZWQgb2Ygb3RoZXIgc3Vic3RhbmNlcy5cclxuICAgKi9cclxuICBpbmdyZWRpZW50PzogZmhpci5TdWJzdGFuY2VJbmdyZWRpZW50QXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgaG9tb2dlbmVvdXMgbWF0ZXJpYWwgd2l0aCBhIGRlZmluaXRlIGNvbXBvc2l0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN1YnN0YW5jZSBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnU3Vic3RhbmNlJztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIlN1YnN0YW5jZVwiO1xyXG4gIC8qKlxyXG4gICAqIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgc3Vic3RhbmNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBBIGNvZGUgdGhhdCBjbGFzc2lmaWVzIHRoZSBnZW5lcmFsIHR5cGUgb2Ygc3Vic3RhbmNlLiAgVGhpcyBpcyB1c2VkICBmb3Igc2VhcmNoaW5nLCBzb3J0aW5nIGFuZCBkaXNwbGF5IHB1cnBvc2VzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjYXRlZ29yeTogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBBIGNvZGUgKG9yIHNldCBvZiBjb2RlcykgdGhhdCBpZGVudGlmeSB0aGlzIHN1YnN0YW5jZS5cclxuICAgKi9cclxuICBwdWJsaWMgY29kZTogZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbDtcclxuICAvKipcclxuICAgKiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBzdWJzdGFuY2UgLSBpdHMgYXBwZWFyYW5jZSwgaGFuZGxpbmcgcmVxdWlyZW1lbnRzLCBhbmQgb3RoZXIgdXNhZ2Ugbm90ZXMuXHJcbiAgICovXHJcbiAgcHVibGljIGRlc2NyaXB0aW9uPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTdWJzdGFuY2UgbWF5IGJlIHVzZWQgdG8gZGVzY3JpYmUgYSBraW5kIG9mIHN1YnN0YW5jZSwgb3IgYSBzcGVjaWZpYyBwYWNrYWdlL2NvbnRhaW5lciBvZiB0aGUgc3Vic3RhbmNlOiBhbiBpbnN0YW5jZS5cclxuICAgKi9cclxuICBwdWJsaWMgaW5zdGFuY2U6IGZoaXIuU3Vic3RhbmNlSW5zdGFuY2VbXTtcclxuICAvKipcclxuICAgKiBBIHN1YnN0YW5jZSBjYW4gYmUgY29tcG9zZWQgb2Ygb3RoZXIgc3Vic3RhbmNlcy5cclxuICAgKi9cclxuICBwdWJsaWMgaW5ncmVkaWVudDogZmhpci5TdWJzdGFuY2VJbmdyZWRpZW50W107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgU3Vic3RhbmNlIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8U3Vic3RhbmNlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ1N1YnN0YW5jZSc7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gc291cmNlLmlkZW50aWZpZXIubWFwKCh4KSA9PiBuZXcgZmhpci5JZGVudGlmaWVyKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaWRlbnRpZmllciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydjYXRlZ29yeSddKSB7IHRoaXMuY2F0ZWdvcnkgPSBzb3VyY2UuY2F0ZWdvcnkubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jYXRlZ29yeSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydjb2RlJ10pIHsgdGhpcy5jb2RlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5jb2RlKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29kZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ2Rlc2NyaXB0aW9uJ10pIHsgdGhpcy5kZXNjcmlwdGlvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZGVzY3JpcHRpb259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Rlc2NyaXB0aW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb24pIHsgdGhpcy5kZXNjcmlwdGlvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kZXNjcmlwdGlvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRlc2NyaXB0aW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Rlc2NyaXB0aW9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydpbnN0YW5jZSddKSB7IHRoaXMuaW5zdGFuY2UgPSBzb3VyY2UuaW5zdGFuY2UubWFwKCh4KSA9PiBuZXcgZmhpci5TdWJzdGFuY2VJbnN0YW5jZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmluc3RhbmNlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2luZ3JlZGllbnQnXSkgeyB0aGlzLmluZ3JlZGllbnQgPSBzb3VyY2UuaW5ncmVkaWVudC5tYXAoKHgpID0+IG5ldyBmaGlyLlN1YnN0YW5jZUluZ3JlZGllbnQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pbmdyZWRpZW50ID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdTdWJzdGFuY2UnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJQUygncmVzb3VyY2VUeXBlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdjYXRlZ29yeScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygnY29kZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZGVzY3JpcHRpb24nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2luc3RhbmNlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdpbmdyZWRpZW50JyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==