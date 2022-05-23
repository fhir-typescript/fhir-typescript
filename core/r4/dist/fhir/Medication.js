// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Medication
import * as fhir from '../fhir.js';
// @ts-ignore
import { MedicationStatusCodes } from '../fhirValueSets/MedicationStatusCodes.js';
/**
 * The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingredient is present or absent.  If an ingredient is specified it does not mean that all ingredients are specified.  It is possible to specify both inactive and active ingredients.
 */
export class MedicationIngredient extends fhir.BackboneElement {
    /**
     * Default constructor for MedicationIngredient - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['item']) {
            this.item = source.item;
        }
        else if (source['itemCodeableConcept']) {
            this.item = new fhir.CodeableConcept(source.itemCodeableConcept);
        }
        else if (source['itemReference']) {
            this.item = new fhir.Reference(source.itemReference);
        }
        else {
            this.item = null;
        }
        if (source['isActive']) {
            this.isActive = new fhir.FhirBoolean({ value: source.isActive });
        }
        if (source['strength']) {
            this.strength = new fhir.Ratio(source.strength);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        let issues = super.doModelValidation();
        if (!this['item']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property item: fhir: Medication.ingredient.item[x]:' });
        }
        if (this["isActive"]) {
            issues.push(...this.isActive.doModelValidation());
        }
        if (this["strength"]) {
            issues.push(...this.strength.doModelValidation());
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
MedicationIngredient._fts_dataType = 'MedicationIngredient';
/**
 * Internal flag to properly serialize choice-type element Medication.ingredient.item[x]
 */
MedicationIngredient._fts_itemIsChoice = true;
/**
 * Information that only applies to packages (not products).
 */
export class MedicationBatch extends fhir.BackboneElement {
    /**
     * Default constructor for MedicationBatch - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['lotNumber']) {
            this.lotNumber = new fhir.FhirString({ value: source.lotNumber });
        }
        if (source['expirationDate']) {
            this.expirationDate = new fhir.FhirDateTime({ value: source.expirationDate });
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        let issues = super.doModelValidation();
        if (this["lotNumber"]) {
            issues.push(...this.lotNumber.doModelValidation());
        }
        if (this["expirationDate"]) {
            issues.push(...this.expirationDate.doModelValidation());
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
MedicationBatch._fts_dataType = 'MedicationBatch';
/**
 * This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 */
export class Medication extends fhir.DomainResource {
    /**
     * Default constructor for Medication - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Medication';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['status']) {
            this.status = new fhir.FhirCode({ value: source.status });
        }
        if (source['manufacturer']) {
            this.manufacturer = new fhir.Reference(source.manufacturer);
        }
        if (source['form']) {
            this.form = new fhir.CodeableConcept(source.form);
        }
        if (source['amount']) {
            this.amount = new fhir.Ratio(source.amount);
        }
        if (source['ingredient']) {
            this.ingredient = source.ingredient.map((x) => new fhir.MedicationIngredient(x));
        }
        else {
            this.ingredient = [];
        }
        if (source['batch']) {
            this.batch = new fhir.MedicationBatch(source.batch);
        }
    }
    /**
     * Required-bound Value Set for status (Medication.status)
     */
    static get statusRequiredCodes() {
        return MedicationStatusCodes;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        let issues = super.doModelValidation();
        if (!this['resourceType']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"Medication" fhir: Medication.resourceType:"Medication"' });
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["code"]) {
            issues.push(...this.code.doModelValidation());
        }
        if (this['status'] && (!Object.values(MedicationStatusCodes).includes(this.status))) {
            issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status?:fhir.FhirCode<MedicationStatusCodeType> fhir: Medication.status:code Required binding to: MedicationStatus' });
        }
        if (this["status"]) {
            issues.push(...this.status.doModelValidation());
        }
        if (this["manufacturer"]) {
            issues.push(...this.manufacturer.doModelValidation());
        }
        if (this["form"]) {
            issues.push(...this.form.doModelValidation());
        }
        if (this["amount"]) {
            issues.push(...this.amount.doModelValidation());
        }
        if (this["ingredient"]) {
            this.ingredient.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["batch"]) {
            issues.push(...this.batch.doModelValidation());
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Medication._fts_dataType = 'Medication';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvTWVkaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyw0QkFBNEI7QUFFNUIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFRbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSwyQ0FBMkMsQ0FBQztBQStCN0c7O0dBRUc7QUFDSCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsSUFBSSxDQUFDLGVBQWU7SUFxQjVEOztPQUVHO0lBQ0gsWUFBWSxTQUEyQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNqRyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQUU7YUFDM0MsSUFBSSxNQUFNLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQUU7YUFDeEcsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7U0FBRTthQUN0RjtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDMUIsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FB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bi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogTWVkaWNhdGlvblxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTWVkaWNhdGlvbkNvZGVzQ29kaW5ncywgTWVkaWNhdGlvbkNvZGVzQ29kaW5nVHlwZSx9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTWVkaWNhdGlvbkNvZGVzQ29kaW5ncy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTWVkaWNhdGlvbkNvZGVzQ29kZXMsICBNZWRpY2F0aW9uQ29kZXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTWVkaWNhdGlvbkNvZGVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IE1lZGljYXRpb25TdGF0dXNDb2RpbmdzLCBNZWRpY2F0aW9uU3RhdHVzQ29kaW5nVHlwZSx9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTWVkaWNhdGlvblN0YXR1c0NvZGluZ3MuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IE1lZGljYXRpb25TdGF0dXNDb2RlcywgIE1lZGljYXRpb25TdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTWVkaWNhdGlvblN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBNZWRpY2F0aW9uRm9ybUNvZGVzQ29kaW5ncywgTWVkaWNhdGlvbkZvcm1Db2Rlc0NvZGluZ1R5cGUsfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL01lZGljYXRpb25Gb3JtQ29kZXNDb2RpbmdzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBNZWRpY2F0aW9uRm9ybUNvZGVzQ29kZXMsICBNZWRpY2F0aW9uRm9ybUNvZGVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL01lZGljYXRpb25Gb3JtQ29kZXNDb2Rlcy5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBNZWRpY2F0aW9uSW5ncmVkaWVudCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNZWRpY2F0aW9uSW5ncmVkaWVudEFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhY3R1YWwgaW5ncmVkaWVudCAtIGVpdGhlciBhIHN1YnN0YW5jZSAoc2ltcGxlIGluZ3JlZGllbnQpIG9yIGFub3RoZXIgbWVkaWNhdGlvbiBvZiBhIG1lZGljYXRpb24uXHJcbiAgICovXHJcbiAgaXRlbT86IGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgYWN0dWFsIGluZ3JlZGllbnQgLSBlaXRoZXIgYSBzdWJzdGFuY2UgKHNpbXBsZSBpbmdyZWRpZW50KSBvciBhbm90aGVyIG1lZGljYXRpb24gb2YgYSBtZWRpY2F0aW9uLlxyXG4gICAqL1xyXG4gIGl0ZW1Db2RlYWJsZUNvbmNlcHQ/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhY3R1YWwgaW5ncmVkaWVudCAtIGVpdGhlciBhIHN1YnN0YW5jZSAoc2ltcGxlIGluZ3JlZGllbnQpIG9yIGFub3RoZXIgbWVkaWNhdGlvbiBvZiBhIG1lZGljYXRpb24uXHJcbiAgICovXHJcbiAgaXRlbVJlZmVyZW5jZT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGlvbiBvZiB3aGV0aGVyIHRoaXMgaW5ncmVkaWVudCBhZmZlY3RzIHRoZSB0aGVyYXBldXRpYyBhY3Rpb24gb2YgdGhlIGRydWcuXHJcbiAgICovXHJcbiAgaXNBY3RpdmU/OiBmaGlyLkZoaXJCb29sZWFufGJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmllcyBob3cgbWFueSAob3IgaG93IG11Y2gpIG9mIHRoZSBpdGVtcyB0aGVyZSBhcmUgaW4gdGhpcyBNZWRpY2F0aW9uLiAgRm9yIGV4YW1wbGUsIDI1MCBtZyBwZXIgdGFibGV0LiAgVGhpcyBpcyBleHByZXNzZWQgYXMgYSByYXRpbyB3aGVyZSB0aGUgbnVtZXJhdG9yIGlzIDI1MG1nIGFuZCB0aGUgZGVub21pbmF0b3IgaXMgMSB0YWJsZXQuXHJcbiAgICovXHJcbiAgc3RyZW5ndGg/OiBmaGlyLlJhdGlvQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgaW5ncmVkaWVudHMgbmVlZCBub3QgYmUgYSBjb21wbGV0ZSBsaXN0LiAgSWYgYW4gaW5ncmVkaWVudCBpcyBub3Qgc3BlY2lmaWVkLCB0aGlzIGRvZXMgbm90IGluZGljYXRlIHdoZXRoZXIgYW4gaW5ncmVkaWVudCBpcyBwcmVzZW50IG9yIGFic2VudC4gIElmIGFuIGluZ3JlZGllbnQgaXMgc3BlY2lmaWVkIGl0IGRvZXMgbm90IG1lYW4gdGhhdCBhbGwgaW5ncmVkaWVudHMgYXJlIHNwZWNpZmllZC4gIEl0IGlzIHBvc3NpYmxlIHRvIHNwZWNpZnkgYm90aCBpbmFjdGl2ZSBhbmQgYWN0aXZlIGluZ3JlZGllbnRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1lZGljYXRpb25JbmdyZWRpZW50IGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnTWVkaWNhdGlvbkluZ3JlZGllbnQnO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhY3R1YWwgaW5ncmVkaWVudCAtIGVpdGhlciBhIHN1YnN0YW5jZSAoc2ltcGxlIGluZ3JlZGllbnQpIG9yIGFub3RoZXIgbWVkaWNhdGlvbiBvZiBhIG1lZGljYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIGl0ZW06IChmaGlyLkNvZGVhYmxlQ29uY2VwdHxmaGlyLlJlZmVyZW5jZSl8bnVsbDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IE1lZGljYXRpb24uaW5ncmVkaWVudC5pdGVtW3hdXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBfZnRzX2l0ZW1Jc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBJbmRpY2F0aW9uIG9mIHdoZXRoZXIgdGhpcyBpbmdyZWRpZW50IGFmZmVjdHMgdGhlIHRoZXJhcGV1dGljIGFjdGlvbiBvZiB0aGUgZHJ1Zy5cclxuICAgKi9cclxuICBwdWJsaWMgaXNBY3RpdmU/OiBmaGlyLkZoaXJCb29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTcGVjaWZpZXMgaG93IG1hbnkgKG9yIGhvdyBtdWNoKSBvZiB0aGUgaXRlbXMgdGhlcmUgYXJlIGluIHRoaXMgTWVkaWNhdGlvbi4gIEZvciBleGFtcGxlLCAyNTAgbWcgcGVyIHRhYmxldC4gIFRoaXMgaXMgZXhwcmVzc2VkIGFzIGEgcmF0aW8gd2hlcmUgdGhlIG51bWVyYXRvciBpcyAyNTBtZyBhbmQgdGhlIGRlbm9taW5hdG9yIGlzIDEgdGFibGV0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdHJlbmd0aD86IGZoaXIuUmF0aW98dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIE1lZGljYXRpb25JbmdyZWRpZW50IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8TWVkaWNhdGlvbkluZ3JlZGllbnRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnaXRlbSddKSB7IHRoaXMuaXRlbSA9IHNvdXJjZS5pdGVtOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ2l0ZW1Db2RlYWJsZUNvbmNlcHQnXSkgeyB0aGlzLml0ZW0gPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLml0ZW1Db2RlYWJsZUNvbmNlcHQpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ2l0ZW1SZWZlcmVuY2UnXSkgeyB0aGlzLml0ZW0gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLml0ZW1SZWZlcmVuY2UpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pdGVtID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnaXNBY3RpdmUnXSkgeyB0aGlzLmlzQWN0aXZlID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oe3ZhbHVlOiBzb3VyY2UuaXNBY3RpdmV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RyZW5ndGgnXSkgeyB0aGlzLnN0cmVuZ3RoID0gbmV3IGZoaXIuUmF0aW8oc291cmNlLnN0cmVuZ3RoKTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzWydpdGVtJ10pIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ3JlcXVpcmVkJywgZGlhZ25vc3RpY3M6ICdNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5IGl0ZW06IGZoaXI6IE1lZGljYXRpb24uaW5ncmVkaWVudC5pdGVtW3hdOicgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1tcImlzQWN0aXZlXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuaXNBY3RpdmUuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICh0aGlzW1wic3RyZW5ndGhcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5zdHJlbmd0aC5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIE1lZGljYXRpb25CYXRjaCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNZWRpY2F0aW9uQmF0Y2hBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgYXNzaWduZWQgbG90IG51bWJlciBvZiBhIGJhdGNoIG9mIHRoZSBzcGVjaWZpZWQgcHJvZHVjdC5cclxuICAgKi9cclxuICBsb3ROdW1iZXI/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVuIHRoaXMgc3BlY2lmaWMgYmF0Y2ggb2YgcHJvZHVjdCB3aWxsIGV4cGlyZS5cclxuICAgKi9cclxuICBleHBpcmF0aW9uRGF0ZT86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbmZvcm1hdGlvbiB0aGF0IG9ubHkgYXBwbGllcyB0byBwYWNrYWdlcyAobm90IHByb2R1Y3RzKS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZWRpY2F0aW9uQmF0Y2ggZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdNZWRpY2F0aW9uQmF0Y2gnO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhc3NpZ25lZCBsb3QgbnVtYmVyIG9mIGEgYmF0Y2ggb2YgdGhlIHNwZWNpZmllZCBwcm9kdWN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsb3ROdW1iZXI/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdoZW4gdGhpcyBzcGVjaWZpYyBiYXRjaCBvZiBwcm9kdWN0IHdpbGwgZXhwaXJlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBleHBpcmF0aW9uRGF0ZT86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBNZWRpY2F0aW9uQmF0Y2ggLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxNZWRpY2F0aW9uQmF0Y2hBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnbG90TnVtYmVyJ10pIHsgdGhpcy5sb3ROdW1iZXIgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmxvdE51bWJlcn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydleHBpcmF0aW9uRGF0ZSddKSB7IHRoaXMuZXhwaXJhdGlvbkRhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UuZXhwaXJhdGlvbkRhdGV9KTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbigpO1xyXG4gICAgaWYgKHRoaXNbXCJsb3ROdW1iZXJcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5sb3ROdW1iZXIuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICh0aGlzW1wiZXhwaXJhdGlvbkRhdGVcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5leHBpcmF0aW9uRGF0ZS5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIE1lZGljYXRpb24gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWNhdGlvbkFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIk1lZGljYXRpb25cInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHNlcmlhbCBudW1iZXIgY291bGQgYmUgaW5jbHVkZWQgYXMgYW4gaWRlbnRpZmllci5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZXBlbmRpbmcgb24gdGhlIGNvbnRleHQgb2YgdXNlLCB0aGUgY29kZSB0aGF0IHdhcyBhY3R1YWxseSBzZWxlY3RlZCBieSB0aGUgdXNlciAocHJlc2NyaWJlciwgZGlzcGVuc2VyLCBldGMuKSB3aWxsIGhhdmUgdGhlIGNvZGluZy51c2VyU2VsZWN0ZWQgc2V0IHRvIHRydWUuICBBcyBkZXNjcmliZWQgaW4gdGhlIGNvZGluZyBkYXRhdHlwZTogXCJBIGNvZGluZyBtYXkgYmUgbWFya2VkIGFzIGEgXCJ1c2VyU2VsZWN0ZWRcIiBpZiBhIHVzZXIgc2VsZWN0ZWQgdGhlIHBhcnRpY3VsYXIgY29kZWQgdmFsdWUgaW4gYSB1c2VyIGludGVyZmFjZSAoZS5nLiB0aGUgdXNlciBzZWxlY3RzIGFuIGl0ZW0gaW4gYSBwaWNrLWxpc3QpLiBJZiBhIHVzZXIgc2VsZWN0ZWQgY29kaW5nIGV4aXN0cywgaXQgaXMgdGhlIHByZWZlcnJlZCBjaG9pY2UgZm9yIHBlcmZvcm1pbmcgdHJhbnNsYXRpb25zIGV0Yy4gT3RoZXIgY29kZXMgY2FuIG9ubHkgYmUgbGl0ZXJhbCB0cmFuc2xhdGlvbnMgdG8gYWx0ZXJuYXRpdmUgY29kZSBzeXN0ZW1zLCBvciBjb2RlcyBhdCBhIGxvd2VyIGxldmVsIG9mIGdyYW51bGFyaXR5IChlLmcuIGEgZ2VuZXJpYyBjb2RlIGZvciBhIHZlbmRvci1zcGVjaWZpYyBwcmltYXJ5IG9uZSkuXHJcbiAgICovXHJcbiAgY29kZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBzdGF0dXMgaXMgaW50ZW5kZWQgdG8gaWRlbnRpZnkgaWYgdGhlIG1lZGljYXRpb24gaW4gYSBsb2NhbCBzeXN0ZW0gaXMgaW4gYWN0aXZlIHVzZSB3aXRoaW4gYSBkcnVnIGRhdGFiYXNlIG9yIGludmVudG9yeS4gIEZvciBleGFtcGxlLCBhIHBoYXJtYWN5IHN5c3RlbSBtYXkgY3JlYXRlIGEgbmV3IGRydWcgZmlsZSByZWNvcmQgZm9yIGEgY29tcG91bmRlZCBwcm9kdWN0IFwiQUJDIEhvc3BpdGFsIFNwZWNpYWwgQ3JlYW1cIiB3aXRoIGFuIGFjdGl2ZSBzdGF0dXMuICBBdCBzb21lIHBvaW50IGluIHRoZSBmdXR1cmUsIGl0IG1heSBiZSBkZXRlcm1pbmVkIHRoYXQgdGhlIGRydWcgcmVjb3JkIHdhcyBjcmVhdGVkIHdpdGggYW4gZXJyb3IgYW5kIHRoZSBzdGF0dXMgaXMgY2hhbmdlZCB0byBcImVudGVyZWQgaW4gZXJyb3JcIi4gICBUaGlzIHN0YXR1cyBpcyBub3QgaW50ZW5kZWQgdG8gc3BlY2lmeSBpZiBhIG1lZGljYXRpb24gaXMgcGFydCBvZiBhIHBhcnRpY3VsYXIgZm9ybXVsYXJ5LiAgSXQgaXMgcG9zc2libGUgdGhhdCB0aGUgZHJ1ZyByZWNvcmQgbWF5IGJlIHJlZmVyZW5jZWQgYnkgbXVsdGlwbGUgZm9ybXVsYXJpZXMgb3IgY2F0YWxvZ3VlcyBhbmQgZWFjaCBvZiB0aG9zZSBlbnRyaWVzIHdvdWxkIGhhdmUgYSBzZXBhcmF0ZSBzdGF0dXMuXHJcbiAgICovXHJcbiAgc3RhdHVzPzogZmhpci5GaGlyQ29kZTxNZWRpY2F0aW9uU3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVzY3JpYmVzIHRoZSBkZXRhaWxzIG9mIHRoZSBtYW51ZmFjdHVyZXIgb2YgdGhlIG1lZGljYXRpb24gcHJvZHVjdC4gIFRoaXMgaXMgbm90IGludGVuZGVkIHRvIHJlcHJlc2VudCB0aGUgZGlzdHJpYnV0b3Igb2YgYSBtZWRpY2F0aW9uIHByb2R1Y3QuXHJcbiAgICovXHJcbiAgbWFudWZhY3R1cmVyPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVuIE1lZGljYXRpb24gaXMgcmVmZXJlbmNlZCBmcm9tIE1lZGljYXRpb25SZXF1ZXN0LCB0aGlzIGlzIHRoZSBvcmRlcmVkIGZvcm0uICBXaGVuIE1lZGljYXRpb24gaXMgcmVmZXJlbmNlZCB3aXRoaW4gTWVkaWNhdGlvbkRpc3BlbnNlLCB0aGlzIGlzIHRoZSBkaXNwZW5zZWQgZm9ybS4gIFdoZW4gTWVkaWNhdGlvbiBpcyByZWZlcmVuY2VkIHdpdGhpbiBNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24sIHRoaXMgaXMgYWRtaW5pc3RlcmVkIGZvcm0uXHJcbiAgICovXHJcbiAgZm9ybT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogU3BlY2lmaWMgYW1vdW50IG9mIHRoZSBkcnVnIGluIHRoZSBwYWNrYWdlZCBwcm9kdWN0LiAgRm9yIGV4YW1wbGUsIHdoZW4gc3BlY2lmeWluZyBhIHByb2R1Y3QgdGhhdCBoYXMgdGhlIHNhbWUgc3RyZW5ndGggKEZvciBleGFtcGxlLCBJbnN1bGluIGdsYXJnaW5lIDEwMCB1bml0IHBlciBtTCBzb2x1dGlvbiBmb3IgaW5qZWN0aW9uKSwgdGhpcyBhdHRyaWJ1dGUgcHJvdmlkZXMgYWRkaXRpb25hbCBjbGFyaWZpY2F0aW9uIG9mIHRoZSBwYWNrYWdlIGFtb3VudCAoRm9yIGV4YW1wbGUsIDMgbUwsIDEwbUwsIGV0Yy4pLlxyXG4gICAqL1xyXG4gIGFtb3VudD86IGZoaXIuUmF0aW9BcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaW5ncmVkaWVudHMgbmVlZCBub3QgYmUgYSBjb21wbGV0ZSBsaXN0LiAgSWYgYW4gaW5ncmVkaWVudCBpcyBub3Qgc3BlY2lmaWVkLCB0aGlzIGRvZXMgbm90IGluZGljYXRlIHdoZXRoZXIgYW4gaW5ncmVkaWVudCBpcyBwcmVzZW50IG9yIGFic2VudC4gIElmIGFuIGluZ3JlZGllbnQgaXMgc3BlY2lmaWVkIGl0IGRvZXMgbm90IG1lYW4gdGhhdCBhbGwgaW5ncmVkaWVudHMgYXJlIHNwZWNpZmllZC4gIEl0IGlzIHBvc3NpYmxlIHRvIHNwZWNpZnkgYm90aCBpbmFjdGl2ZSBhbmQgYWN0aXZlIGluZ3JlZGllbnRzLlxyXG4gICAqL1xyXG4gIGluZ3JlZGllbnQ/OiBmaGlyLk1lZGljYXRpb25JbmdyZWRpZW50QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmZvcm1hdGlvbiB0aGF0IG9ubHkgYXBwbGllcyB0byBwYWNrYWdlcyAobm90IHByb2R1Y3RzKS5cclxuICAgKi9cclxuICBiYXRjaD86IGZoaXIuTWVkaWNhdGlvbkJhdGNoQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIHJlc291cmNlIGlzIHByaW1hcmlseSB1c2VkIGZvciB0aGUgaWRlbnRpZmljYXRpb24gYW5kIGRlZmluaXRpb24gb2YgYSBtZWRpY2F0aW9uIGZvciB0aGUgcHVycG9zZXMgb2YgcHJlc2NyaWJpbmcsIGRpc3BlbnNpbmcsIGFuZCBhZG1pbmlzdGVyaW5nIGEgbWVkaWNhdGlvbiBhcyB3ZWxsIGFzIGZvciBtYWtpbmcgc3RhdGVtZW50cyBhYm91dCBtZWRpY2F0aW9uIHVzZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZWRpY2F0aW9uIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdNZWRpY2F0aW9uJztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIk1lZGljYXRpb25cIjtcclxuICAvKipcclxuICAgKiBUaGUgc2VyaWFsIG51bWJlciBjb3VsZCBiZSBpbmNsdWRlZCBhcyBhbiBpZGVudGlmaWVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBEZXBlbmRpbmcgb24gdGhlIGNvbnRleHQgb2YgdXNlLCB0aGUgY29kZSB0aGF0IHdhcyBhY3R1YWxseSBzZWxlY3RlZCBieSB0aGUgdXNlciAocHJlc2NyaWJlciwgZGlzcGVuc2VyLCBldGMuKSB3aWxsIGhhdmUgdGhlIGNvZGluZy51c2VyU2VsZWN0ZWQgc2V0IHRvIHRydWUuICBBcyBkZXNjcmliZWQgaW4gdGhlIGNvZGluZyBkYXRhdHlwZTogXCJBIGNvZGluZyBtYXkgYmUgbWFya2VkIGFzIGEgXCJ1c2VyU2VsZWN0ZWRcIiBpZiBhIHVzZXIgc2VsZWN0ZWQgdGhlIHBhcnRpY3VsYXIgY29kZWQgdmFsdWUgaW4gYSB1c2VyIGludGVyZmFjZSAoZS5nLiB0aGUgdXNlciBzZWxlY3RzIGFuIGl0ZW0gaW4gYSBwaWNrLWxpc3QpLiBJZiBhIHVzZXIgc2VsZWN0ZWQgY29kaW5nIGV4aXN0cywgaXQgaXMgdGhlIHByZWZlcnJlZCBjaG9pY2UgZm9yIHBlcmZvcm1pbmcgdHJhbnNsYXRpb25zIGV0Yy4gT3RoZXIgY29kZXMgY2FuIG9ubHkgYmUgbGl0ZXJhbCB0cmFuc2xhdGlvbnMgdG8gYWx0ZXJuYXRpdmUgY29kZSBzeXN0ZW1zLCBvciBjb2RlcyBhdCBhIGxvd2VyIGxldmVsIG9mIGdyYW51bGFyaXR5IChlLmcuIGEgZ2VuZXJpYyBjb2RlIGZvciBhIHZlbmRvci1zcGVjaWZpYyBwcmltYXJ5IG9uZSkuXHJcbiAgICovXHJcbiAgcHVibGljIGNvZGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBzdGF0dXMgaXMgaW50ZW5kZWQgdG8gaWRlbnRpZnkgaWYgdGhlIG1lZGljYXRpb24gaW4gYSBsb2NhbCBzeXN0ZW0gaXMgaW4gYWN0aXZlIHVzZSB3aXRoaW4gYSBkcnVnIGRhdGFiYXNlIG9yIGludmVudG9yeS4gIEZvciBleGFtcGxlLCBhIHBoYXJtYWN5IHN5c3RlbSBtYXkgY3JlYXRlIGEgbmV3IGRydWcgZmlsZSByZWNvcmQgZm9yIGEgY29tcG91bmRlZCBwcm9kdWN0IFwiQUJDIEhvc3BpdGFsIFNwZWNpYWwgQ3JlYW1cIiB3aXRoIGFuIGFjdGl2ZSBzdGF0dXMuICBBdCBzb21lIHBvaW50IGluIHRoZSBmdXR1cmUsIGl0IG1heSBiZSBkZXRlcm1pbmVkIHRoYXQgdGhlIGRydWcgcmVjb3JkIHdhcyBjcmVhdGVkIHdpdGggYW4gZXJyb3IgYW5kIHRoZSBzdGF0dXMgaXMgY2hhbmdlZCB0byBcImVudGVyZWQgaW4gZXJyb3JcIi4gICBUaGlzIHN0YXR1cyBpcyBub3QgaW50ZW5kZWQgdG8gc3BlY2lmeSBpZiBhIG1lZGljYXRpb24gaXMgcGFydCBvZiBhIHBhcnRpY3VsYXIgZm9ybXVsYXJ5LiAgSXQgaXMgcG9zc2libGUgdGhhdCB0aGUgZHJ1ZyByZWNvcmQgbWF5IGJlIHJlZmVyZW5jZWQgYnkgbXVsdGlwbGUgZm9ybXVsYXJpZXMgb3IgY2F0YWxvZ3VlcyBhbmQgZWFjaCBvZiB0aG9zZSBlbnRyaWVzIHdvdWxkIGhhdmUgYSBzZXBhcmF0ZSBzdGF0dXMuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1cz86IGZoaXIuRmhpckNvZGU8TWVkaWNhdGlvblN0YXR1c0NvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVzY3JpYmVzIHRoZSBkZXRhaWxzIG9mIHRoZSBtYW51ZmFjdHVyZXIgb2YgdGhlIG1lZGljYXRpb24gcHJvZHVjdC4gIFRoaXMgaXMgbm90IGludGVuZGVkIHRvIHJlcHJlc2VudCB0aGUgZGlzdHJpYnV0b3Igb2YgYSBtZWRpY2F0aW9uIHByb2R1Y3QuXHJcbiAgICovXHJcbiAgcHVibGljIG1hbnVmYWN0dXJlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVuIE1lZGljYXRpb24gaXMgcmVmZXJlbmNlZCBmcm9tIE1lZGljYXRpb25SZXF1ZXN0LCB0aGlzIGlzIHRoZSBvcmRlcmVkIGZvcm0uICBXaGVuIE1lZGljYXRpb24gaXMgcmVmZXJlbmNlZCB3aXRoaW4gTWVkaWNhdGlvbkRpc3BlbnNlLCB0aGlzIGlzIHRoZSBkaXNwZW5zZWQgZm9ybS4gIFdoZW4gTWVkaWNhdGlvbiBpcyByZWZlcmVuY2VkIHdpdGhpbiBNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24sIHRoaXMgaXMgYWRtaW5pc3RlcmVkIGZvcm0uXHJcbiAgICovXHJcbiAgcHVibGljIGZvcm0/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogU3BlY2lmaWMgYW1vdW50IG9mIHRoZSBkcnVnIGluIHRoZSBwYWNrYWdlZCBwcm9kdWN0LiAgRm9yIGV4YW1wbGUsIHdoZW4gc3BlY2lmeWluZyBhIHByb2R1Y3QgdGhhdCBoYXMgdGhlIHNhbWUgc3RyZW5ndGggKEZvciBleGFtcGxlLCBJbnN1bGluIGdsYXJnaW5lIDEwMCB1bml0IHBlciBtTCBzb2x1dGlvbiBmb3IgaW5qZWN0aW9uKSwgdGhpcyBhdHRyaWJ1dGUgcHJvdmlkZXMgYWRkaXRpb25hbCBjbGFyaWZpY2F0aW9uIG9mIHRoZSBwYWNrYWdlIGFtb3VudCAoRm9yIGV4YW1wbGUsIDMgbUwsIDEwbUwsIGV0Yy4pLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbW91bnQ/OiBmaGlyLlJhdGlvfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaW5ncmVkaWVudHMgbmVlZCBub3QgYmUgYSBjb21wbGV0ZSBsaXN0LiAgSWYgYW4gaW5ncmVkaWVudCBpcyBub3Qgc3BlY2lmaWVkLCB0aGlzIGRvZXMgbm90IGluZGljYXRlIHdoZXRoZXIgYW4gaW5ncmVkaWVudCBpcyBwcmVzZW50IG9yIGFic2VudC4gIElmIGFuIGluZ3JlZGllbnQgaXMgc3BlY2lmaWVkIGl0IGRvZXMgbm90IG1lYW4gdGhhdCBhbGwgaW5ncmVkaWVudHMgYXJlIHNwZWNpZmllZC4gIEl0IGlzIHBvc3NpYmxlIHRvIHNwZWNpZnkgYm90aCBpbmFjdGl2ZSBhbmQgYWN0aXZlIGluZ3JlZGllbnRzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpbmdyZWRpZW50OiBmaGlyLk1lZGljYXRpb25JbmdyZWRpZW50W107XHJcbiAgLyoqXHJcbiAgICogSW5mb3JtYXRpb24gdGhhdCBvbmx5IGFwcGxpZXMgdG8gcGFja2FnZXMgKG5vdCBwcm9kdWN0cykuXHJcbiAgICovXHJcbiAgcHVibGljIGJhdGNoPzogZmhpci5NZWRpY2F0aW9uQmF0Y2h8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIE1lZGljYXRpb24gLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxNZWRpY2F0aW9uQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ01lZGljYXRpb24nO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY29kZSddKSB7IHRoaXMuY29kZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuY29kZSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8TWVkaWNhdGlvblN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnbWFudWZhY3R1cmVyJ10pIHsgdGhpcy5tYW51ZmFjdHVyZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLm1hbnVmYWN0dXJlcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2Zvcm0nXSkgeyB0aGlzLmZvcm0gPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmZvcm0pOyB9XHJcbiAgICBpZiAoc291cmNlWydhbW91bnQnXSkgeyB0aGlzLmFtb3VudCA9IG5ldyBmaGlyLlJhdGlvKHNvdXJjZS5hbW91bnQpOyB9XHJcbiAgICBpZiAoc291cmNlWydpbmdyZWRpZW50J10pIHsgdGhpcy5pbmdyZWRpZW50ID0gc291cmNlLmluZ3JlZGllbnQubWFwKCh4KSA9PiBuZXcgZmhpci5NZWRpY2F0aW9uSW5ncmVkaWVudCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmluZ3JlZGllbnQgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYmF0Y2gnXSkgeyB0aGlzLmJhdGNoID0gbmV3IGZoaXIuTWVkaWNhdGlvbkJhdGNoKHNvdXJjZS5iYXRjaCk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmVxdWlyZWQtYm91bmQgVmFsdWUgU2V0IGZvciBzdGF0dXMgKE1lZGljYXRpb24uc3RhdHVzKVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHN0YXR1c1JlcXVpcmVkQ29kZXMoKSB7XHJcbiAgICByZXR1cm4gTWVkaWNhdGlvblN0YXR1c0NvZGVzO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzWydyZXNvdXJjZVR5cGUnXSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAncmVxdWlyZWQnLCBkaWFnbm9zdGljczogJ01pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgcmVzb3VyY2VUeXBlOlwiTWVkaWNhdGlvblwiIGZoaXI6IE1lZGljYXRpb24ucmVzb3VyY2VUeXBlOlwiTWVkaWNhdGlvblwiJyB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzW1wiaWRlbnRpZmllclwiXSkgeyB0aGlzLmlkZW50aWZpZXIuZm9yRWFjaCgoeCkgPT4geyBpc3N1ZXMucHVzaCguLi54LmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9KSB9XHJcbiAgICBpZiAodGhpc1tcImNvZGVcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5jb2RlLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICBpZiAodGhpc1snc3RhdHVzJ10gJiYgKCFPYmplY3QudmFsdWVzKE1lZGljYXRpb25TdGF0dXNDb2RlcykuaW5jbHVkZXModGhpcy5zdGF0dXMgYXMgYW55KSkpIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ2NvZGUtaW52YWxpZCcsIGRpYWdub3N0aWNzOiAnSW52YWxpZCBjb2RlIHByb3BlcnR5IHN0YXR1cz86Zmhpci5GaGlyQ29kZTxNZWRpY2F0aW9uU3RhdHVzQ29kZVR5cGU+IGZoaXI6IE1lZGljYXRpb24uc3RhdHVzOmNvZGUgUmVxdWlyZWQgYmluZGluZyB0bzogTWVkaWNhdGlvblN0YXR1cycgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1tcInN0YXR1c1wiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLnN0YXR1cy5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJtYW51ZmFjdHVyZXJcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5tYW51ZmFjdHVyZXIuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICh0aGlzW1wiZm9ybVwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLmZvcm0uZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICh0aGlzW1wiYW1vdW50XCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuYW1vdW50LmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICBpZiAodGhpc1tcImluZ3JlZGllbnRcIl0pIHsgdGhpcy5pbmdyZWRpZW50LmZvckVhY2goKHgpID0+IHsgaXNzdWVzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbigpKTsgfSkgfVxyXG4gICAgaWYgKHRoaXNbXCJiYXRjaFwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLmJhdGNoLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=