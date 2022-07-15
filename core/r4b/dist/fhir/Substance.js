// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
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
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Substance.instance';
        }
        this.vOS('identifier', exp);
        this.vOS('expiry', exp);
        this.vOS('quantity', exp);
        return issues;
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
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Substance.ingredient';
        }
        this.vOS('quantity', exp);
        this.vRS('substance', exp);
        return issues;
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
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Substance';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vOSV('status', exp, 'SubstanceStatus', SubstanceStatusVsValidation, 'r');
        this.vOA('category', exp);
        this.vRS('code', exp);
        this.vOS('description', exp);
        this.vOA('instance', exp);
        this.vOA('ingredient', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Substance._fts_dataType = 'Substance';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic3RhbmNlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9TdWJzdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsMkJBQTJCO0FBRTNCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQStCOUY7O0dBRUc7QUFDSCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsSUFBSSxDQUFDLGVBQWU7SUFpQnpEOztPQUVHO0lBQ0gsWUFBWSxTQUF3QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUM5RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQUU7UUFDdkYsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3RGLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxPQUFRLENBQUMsQ0FBQzthQUFFO2lCQUNuRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBeUMsQ0FBQyxDQUFDO2FBQUU7U0FDaEc7UUFDRCxJQUFJLE1BQU0sQ0FB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LENBQUE7U0FBRTtRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsaUJBQWlCLEVBQUMsMkJBQTJCLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDekUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDMUIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUE5RUQ7O0dBRUc7QUFDNkIsdUJBQWEsR0FBVSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBTdWJzdGFuY2VcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFN1YnN0YW5jZVN0YXR1c0NvZGVzLCAgU3Vic3RhbmNlU3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1YnN0YW5jZVN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdWJzdGFuY2VTdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1YnN0YW5jZVN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU3Vic3RhbmNlQ2F0ZWdvcnlDb2RlcywgIFN1YnN0YW5jZUNhdGVnb3J5Q29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1YnN0YW5jZUNhdGVnb3J5Q29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFN1YnN0YW5jZUNhdGVnb3J5VnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TdWJzdGFuY2VDYXRlZ29yeVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU3Vic3RhbmNlQ29kZXMsICBTdWJzdGFuY2VDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU3Vic3RhbmNlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFN1YnN0YW5jZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU3Vic3RhbmNlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFN1YnN0YW5jZUluc3RhbmNlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1YnN0YW5jZUluc3RhbmNlQXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIHBhY2thZ2UvY29udGFpbmVyICh1c3VhbGx5IGEgbGFiZWwgYWZmaXhlZCBkaXJlY3RseSkuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdoZW4gdGhlIHN1YnN0YW5jZSBpcyBubyBsb25nZXIgdmFsaWQgdG8gdXNlLiBGb3Igc29tZSBzdWJzdGFuY2VzLCBhIHNpbmdsZSBhcmJpdHJhcnkgZGF0ZSBpcyB1c2VkIGZvciBleHBpcnkuXHJcbiAgICovXHJcbiAgZXhwaXJ5PzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU3Vic3RhbmNlLmluc3RhbmNlLmV4cGlyeVxyXG4gICAqL1xyXG4gIF9leHBpcnk/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhbW91bnQgb2YgdGhlIHN1YnN0YW5jZS5cclxuICAgKi9cclxuICBxdWFudGl0eT86IGZoaXIuUXVhbnRpdHlBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFN1YnN0YW5jZSBtYXkgYmUgdXNlZCB0byBkZXNjcmliZSBhIGtpbmQgb2Ygc3Vic3RhbmNlLCBvciBhIHNwZWNpZmljIHBhY2thZ2UvY29udGFpbmVyIG9mIHRoZSBzdWJzdGFuY2U6IGFuIGluc3RhbmNlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN1YnN0YW5jZUluc3RhbmNlIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnU3Vic3RhbmNlSW5zdGFuY2UnO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBwYWNrYWdlL2NvbnRhaW5lciAodXN1YWxseSBhIGxhYmVsIGFmZml4ZWQgZGlyZWN0bHkpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVuIHRoZSBzdWJzdGFuY2UgaXMgbm8gbG9uZ2VyIHZhbGlkIHRvIHVzZS4gRm9yIHNvbWUgc3Vic3RhbmNlcywgYSBzaW5nbGUgYXJiaXRyYXJ5IGRhdGUgaXMgdXNlZCBmb3IgZXhwaXJ5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBleHBpcnk/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFtb3VudCBvZiB0aGUgc3Vic3RhbmNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBxdWFudGl0eT86IGZoaXIuUXVhbnRpdHl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFN1YnN0YW5jZUluc3RhbmNlIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8U3Vic3RhbmNlSW5zdGFuY2VBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IG5ldyBmaGlyLklkZW50aWZpZXIoc291cmNlLmlkZW50aWZpZXIpOyB9XHJcbiAgICBpZiAoc291cmNlWydleHBpcnknXSkgeyB0aGlzLmV4cGlyeSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5leHBpcnl9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2V4cGlyeSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmV4cGlyeSkgeyB0aGlzLmV4cGlyeS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9leHBpcnkhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5leHBpcnkgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9leHBpcnkgYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncXVhbnRpdHknXSkgeyB0aGlzLnF1YW50aXR5ID0gbmV3IGZoaXIuUXVhbnRpdHkoc291cmNlLnF1YW50aXR5KTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1N1YnN0YW5jZS5pbnN0YW5jZScgfVxyXG4gICAgdGhpcy52T1MoJ2lkZW50aWZpZXInLGV4cClcclxuICAgIHRoaXMudk9TKCdleHBpcnknLGV4cClcclxuICAgIHRoaXMudk9TKCdxdWFudGl0eScsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFN1YnN0YW5jZUluZ3JlZGllbnQgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3Vic3RhbmNlSW5ncmVkaWVudEFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhbW91bnQgb2YgdGhlIGluZ3JlZGllbnQgaW4gdGhlIHN1YnN0YW5jZSAtIGEgY29uY2VudHJhdGlvbiByYXRpby5cclxuICAgKi9cclxuICBxdWFudGl0eT86IGZoaXIuUmF0aW9BcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbm90aGVyIHN1YnN0YW5jZSB0aGF0IGlzIGEgY29tcG9uZW50IG9mIHRoaXMgc3Vic3RhbmNlLlxyXG4gICAqL1xyXG4gIHN1YnN0YW5jZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbm90aGVyIHN1YnN0YW5jZSB0aGF0IGlzIGEgY29tcG9uZW50IG9mIHRoaXMgc3Vic3RhbmNlLlxyXG4gICAqL1xyXG4gIHN1YnN0YW5jZUNvZGVhYmxlQ29uY2VwdD86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW5vdGhlciBzdWJzdGFuY2UgdGhhdCBpcyBhIGNvbXBvbmVudCBvZiB0aGlzIHN1YnN0YW5jZS5cclxuICAgKi9cclxuICBzdWJzdGFuY2VSZWZlcmVuY2U/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBzdWJzdGFuY2UgY2FuIGJlIGNvbXBvc2VkIG9mIG90aGVyIHN1YnN0YW5jZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3Vic3RhbmNlSW5ncmVkaWVudCBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1N1YnN0YW5jZUluZ3JlZGllbnQnO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhbW91bnQgb2YgdGhlIGluZ3JlZGllbnQgaW4gdGhlIHN1YnN0YW5jZSAtIGEgY29uY2VudHJhdGlvbiByYXRpby5cclxuICAgKi9cclxuICBwdWJsaWMgcXVhbnRpdHk/OiBmaGlyLlJhdGlvfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbm90aGVyIHN1YnN0YW5jZSB0aGF0IGlzIGEgY29tcG9uZW50IG9mIHRoaXMgc3Vic3RhbmNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdWJzdGFuY2U6IChmaGlyLkNvZGVhYmxlQ29uY2VwdHxmaGlyLlJlZmVyZW5jZSl8bnVsbDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IFN1YnN0YW5jZS5pbmdyZWRpZW50LnN1YnN0YW5jZVt4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c19zdWJzdGFuY2VJc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBTdWJzdGFuY2VJbmdyZWRpZW50IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8U3Vic3RhbmNlSW5ncmVkaWVudEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydxdWFudGl0eSddKSB7IHRoaXMucXVhbnRpdHkgPSBuZXcgZmhpci5SYXRpbyhzb3VyY2UucXVhbnRpdHkpOyB9XHJcbiAgICBpZiAoc291cmNlWydzdWJzdGFuY2UnXSkgeyB0aGlzLnN1YnN0YW5jZSA9IHNvdXJjZS5zdWJzdGFuY2U7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnc3Vic3RhbmNlQ29kZWFibGVDb25jZXB0J10pIHsgdGhpcy5zdWJzdGFuY2UgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnN1YnN0YW5jZUNvZGVhYmxlQ29uY2VwdCk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnc3Vic3RhbmNlUmVmZXJlbmNlJ10pIHsgdGhpcy5zdWJzdGFuY2UgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnN1YnN0YW5jZVJlZmVyZW5jZSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN1YnN0YW5jZSA9IG51bGw7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdTdWJzdGFuY2UuaW5ncmVkaWVudCcgfVxyXG4gICAgdGhpcy52T1MoJ3F1YW50aXR5JyxleHApXHJcbiAgICB0aGlzLnZSUygnc3Vic3RhbmNlJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgU3Vic3RhbmNlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1YnN0YW5jZUFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIlN1YnN0YW5jZVwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGlkZW50aWZpZXIgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBraW5kIG9mIHN1YnN0YW5jZSBpbiBjb250cmFzdCB0byB0aGUgU3Vic3RhbmNlLmluc3RhbmNlLmlkZW50aWZpZXIgd2hpY2ggaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBwYWNrYWdlL2NvbnRhaW5lci5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGNvZGUgdG8gaW5kaWNhdGUgaWYgdGhlIHN1YnN0YW5jZSBpcyBhY3RpdmVseSB1c2VkLlxyXG4gICAqL1xyXG4gIHN0YXR1cz86IGZoaXIuRmhpckNvZGU8U3Vic3RhbmNlU3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnN0YW5jZS5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgbGV2ZWwgb2YgZ3JhbnVsYXJpdHkgaXMgZGVmaW5lZCBieSB0aGUgY2F0ZWdvcnkgY29uY2VwdHMgaW4gdGhlIHZhbHVlIHNldC4gICBNb3JlIGZpbmUtZ3JhaW5lZCBmaWx0ZXJpbmcgY2FuIGJlIHBlcmZvcm1lZCB1c2luZyB0aGUgbWV0YWRhdGEgYW5kL29yIHRlcm1pbm9sb2d5IGhpZXJhcmNoeSBpbiBTdWJzdGFuY2UuY29kZS5cclxuICAgKi9cclxuICBjYXRlZ29yeT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGNvdWxkIGJlIGEgcmVmZXJlbmNlIHRvIGFuIGV4dGVybmFsbHkgZGVmaW5lZCBjb2RlLiAgSXQgY291bGQgYWxzbyBiZSBhIGxvY2FsbHkgYXNzaWduZWQgY29kZSAoZS5nLiBhIGZvcm11bGFyeSksICBvcHRpb25hbGx5IHdpdGggdHJhbnNsYXRpb25zIHRvIHRoZSBzdGFuZGFyZCBkcnVnIGNvZGVzLlxyXG4gICAqL1xyXG4gIGNvZGU6IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIEEgZGVzY3JpcHRpb24gb2YgdGhlIHN1YnN0YW5jZSAtIGl0cyBhcHBlYXJhbmNlLCBoYW5kbGluZyByZXF1aXJlbWVudHMsIGFuZCBvdGhlciB1c2FnZSBub3Rlcy5cclxuICAgKi9cclxuICBkZXNjcmlwdGlvbj86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzdGFuY2UuZGVzY3JpcHRpb25cclxuICAgKi9cclxuICBfZGVzY3JpcHRpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFN1YnN0YW5jZSBtYXkgYmUgdXNlZCB0byBkZXNjcmliZSBhIGtpbmQgb2Ygc3Vic3RhbmNlLCBvciBhIHNwZWNpZmljIHBhY2thZ2UvY29udGFpbmVyIG9mIHRoZSBzdWJzdGFuY2U6IGFuIGluc3RhbmNlLlxyXG4gICAqL1xyXG4gIGluc3RhbmNlPzogZmhpci5TdWJzdGFuY2VJbnN0YW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBzdWJzdGFuY2UgY2FuIGJlIGNvbXBvc2VkIG9mIG90aGVyIHN1YnN0YW5jZXMuXHJcbiAgICovXHJcbiAgaW5ncmVkaWVudD86IGZoaXIuU3Vic3RhbmNlSW5ncmVkaWVudEFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGhvbW9nZW5lb3VzIG1hdGVyaWFsIHdpdGggYSBkZWZpbml0ZSBjb21wb3NpdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdWJzdGFuY2UgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1N1YnN0YW5jZSc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJTdWJzdGFuY2VcIjtcclxuICAvKipcclxuICAgKiBUaGlzIGlkZW50aWZpZXIgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBraW5kIG9mIHN1YnN0YW5jZSBpbiBjb250cmFzdCB0byB0aGUgU3Vic3RhbmNlLmluc3RhbmNlLmlkZW50aWZpZXIgd2hpY2ggaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBwYWNrYWdlL2NvbnRhaW5lci5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogQSBjb2RlIHRvIGluZGljYXRlIGlmIHRoZSBzdWJzdGFuY2UgaXMgYWN0aXZlbHkgdXNlZC5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzPzogZmhpci5GaGlyQ29kZTxTdWJzdGFuY2VTdGF0dXNDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsZXZlbCBvZiBncmFudWxhcml0eSBpcyBkZWZpbmVkIGJ5IHRoZSBjYXRlZ29yeSBjb25jZXB0cyBpbiB0aGUgdmFsdWUgc2V0LiAgIE1vcmUgZmluZS1ncmFpbmVkIGZpbHRlcmluZyBjYW4gYmUgcGVyZm9ybWVkIHVzaW5nIHRoZSBtZXRhZGF0YSBhbmQvb3IgdGVybWlub2xvZ3kgaGllcmFyY2h5IGluIFN1YnN0YW5jZS5jb2RlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjYXRlZ29yeTogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBUaGlzIGNvdWxkIGJlIGEgcmVmZXJlbmNlIHRvIGFuIGV4dGVybmFsbHkgZGVmaW5lZCBjb2RlLiAgSXQgY291bGQgYWxzbyBiZSBhIGxvY2FsbHkgYXNzaWduZWQgY29kZSAoZS5nLiBhIGZvcm11bGFyeSksICBvcHRpb25hbGx5IHdpdGggdHJhbnNsYXRpb25zIHRvIHRoZSBzdGFuZGFyZCBkcnVnIGNvZGVzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2RlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEEgZGVzY3JpcHRpb24gb2YgdGhlIHN1YnN0YW5jZSAtIGl0cyBhcHBlYXJhbmNlLCBoYW5kbGluZyByZXF1aXJlbWVudHMsIGFuZCBvdGhlciB1c2FnZSBub3Rlcy5cclxuICAgKi9cclxuICBwdWJsaWMgZGVzY3JpcHRpb24/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFN1YnN0YW5jZSBtYXkgYmUgdXNlZCB0byBkZXNjcmliZSBhIGtpbmQgb2Ygc3Vic3RhbmNlLCBvciBhIHNwZWNpZmljIHBhY2thZ2UvY29udGFpbmVyIG9mIHRoZSBzdWJzdGFuY2U6IGFuIGluc3RhbmNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogZmhpci5TdWJzdGFuY2VJbnN0YW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIEEgc3Vic3RhbmNlIGNhbiBiZSBjb21wb3NlZCBvZiBvdGhlciBzdWJzdGFuY2VzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpbmdyZWRpZW50OiBmaGlyLlN1YnN0YW5jZUluZ3JlZGllbnRbXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBTdWJzdGFuY2UgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxTdWJzdGFuY2VBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnU3Vic3RhbmNlJztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8U3Vic3RhbmNlU3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN0YXR1c30pOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzKSB7IHRoaXMuc3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPFN1YnN0YW5jZVN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3N0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnY2F0ZWdvcnknXSkgeyB0aGlzLmNhdGVnb3J5ID0gc291cmNlLmNhdGVnb3J5Lm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY2F0ZWdvcnkgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY29kZSddKSB7IHRoaXMuY29kZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuY29kZSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmNvZGUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydkZXNjcmlwdGlvbiddKSB7IHRoaXMuZGVzY3JpcHRpb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmRlc2NyaXB0aW9ufSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kZXNjcmlwdGlvbiddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uKSB7IHRoaXMuZGVzY3JpcHRpb24uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZGVzY3JpcHRpb24hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kZXNjcmlwdGlvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9kZXNjcmlwdGlvbiBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnaW5zdGFuY2UnXSkgeyB0aGlzLmluc3RhbmNlID0gc291cmNlLmluc3RhbmNlLm1hcCgoeCkgPT4gbmV3IGZoaXIuU3Vic3RhbmNlSW5zdGFuY2UoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pbnN0YW5jZSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydpbmdyZWRpZW50J10pIHsgdGhpcy5pbmdyZWRpZW50ID0gc291cmNlLmluZ3JlZGllbnQubWFwKCh4KSA9PiBuZXcgZmhpci5TdWJzdGFuY2VJbmdyZWRpZW50KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaW5ncmVkaWVudCA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnU3Vic3RhbmNlJyB9XHJcbiAgICB0aGlzLnZSUygncmVzb3VyY2VUeXBlJyxleHApXHJcbiAgICB0aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKVxyXG4gICAgdGhpcy52T1NWKCdzdGF0dXMnLGV4cCwnU3Vic3RhbmNlU3RhdHVzJyxTdWJzdGFuY2VTdGF0dXNWc1ZhbGlkYXRpb24sJ3InKVxyXG4gICAgdGhpcy52T0EoJ2NhdGVnb3J5JyxleHApXHJcbiAgICB0aGlzLnZSUygnY29kZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2Rlc2NyaXB0aW9uJyxleHApXHJcbiAgICB0aGlzLnZPQSgnaW5zdGFuY2UnLGV4cClcclxuICAgIHRoaXMudk9BKCdpbmdyZWRpZW50JyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=