// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: SubstanceReferenceInformation
import * as fhir from '../fhir.js';
/**
 * Todo.
 */
export class SubstanceReferenceInformationGene extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceReferenceInformationGene - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['geneSequenceOrigin']) {
            this.geneSequenceOrigin = new fhir.CodeableConcept(source.geneSequenceOrigin);
        }
        if (source['gene']) {
            this.gene = new fhir.CodeableConcept(source.gene);
        }
        if (source['source']) {
            this.source = source.source.map((x) => new fhir.Reference(x));
        }
        else {
            this.source = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'SubstanceReferenceInformation.gene';
        }
        this.vOS('geneSequenceOrigin', exp);
        this.vOS('gene', exp);
        this.vOA('source', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SubstanceReferenceInformationGene._fts_dataType = 'SubstanceReferenceInformationGene';
/**
 * Todo.
 */
export class SubstanceReferenceInformationGeneElement extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceReferenceInformationGeneElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['element']) {
            this.element = new fhir.Identifier(source.element);
        }
        if (source['source']) {
            this.source = source.source.map((x) => new fhir.Reference(x));
        }
        else {
            this.source = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'SubstanceReferenceInformation.geneElement';
        }
        this.vOS('type', exp);
        this.vOS('element', exp);
        this.vOA('source', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SubstanceReferenceInformationGeneElement._fts_dataType = 'SubstanceReferenceInformationGeneElement';
/**
 * Todo.
 */
export class SubstanceReferenceInformationClassification extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceReferenceInformationClassification - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['domain']) {
            this.domain = new fhir.CodeableConcept(source.domain);
        }
        if (source['classification']) {
            this.classification = new fhir.CodeableConcept(source.classification);
        }
        if (source['subtype']) {
            this.subtype = source.subtype.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.subtype = [];
        }
        if (source['source']) {
            this.source = source.source.map((x) => new fhir.Reference(x));
        }
        else {
            this.source = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'SubstanceReferenceInformation.classification';
        }
        this.vOS('domain', exp);
        this.vOS('classification', exp);
        this.vOA('subtype', exp);
        this.vOA('source', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SubstanceReferenceInformationClassification._fts_dataType = 'SubstanceReferenceInformationClassification';
/**
 * Todo.
 */
export class SubstanceReferenceInformationTarget extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceReferenceInformationTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['target']) {
            this.target = new fhir.Identifier(source.target);
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['interaction']) {
            this.interaction = new fhir.CodeableConcept(source.interaction);
        }
        if (source['organism']) {
            this.organism = new fhir.CodeableConcept(source.organism);
        }
        if (source['organismType']) {
            this.organismType = new fhir.CodeableConcept(source.organismType);
        }
        if (source['amount']) {
            this.amount = source.amount;
        }
        else if (source['amountQuantity']) {
            this.amount = new fhir.Quantity(source.amountQuantity);
        }
        else if (source['amountRange']) {
            this.amount = new fhir.Range(source.amountRange);
        }
        else if (source['amountString']) {
            this.amount = new fhir.FhirString({ value: source.amountString });
        }
        if (source['amountType']) {
            this.amountType = new fhir.CodeableConcept(source.amountType);
        }
        if (source['source']) {
            this.source = source.source.map((x) => new fhir.Reference(x));
        }
        else {
            this.source = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'SubstanceReferenceInformation.target';
        }
        this.vOS('target', exp);
        this.vOS('type', exp);
        this.vOS('interaction', exp);
        this.vOS('organism', exp);
        this.vOS('organismType', exp);
        this.vOS('amount', exp);
        this.vOS('amountType', exp);
        this.vOA('source', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SubstanceReferenceInformationTarget._fts_dataType = 'SubstanceReferenceInformationTarget';
/**
 * Internal flag to properly serialize choice-type element SubstanceReferenceInformation.target.amount[x]
 */
SubstanceReferenceInformationTarget._fts_amountIsChoice = true;
/**
 * Todo.
 */
export class SubstanceReferenceInformation extends fhir.DomainResource {
    /**
     * Default constructor for SubstanceReferenceInformation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'SubstanceReferenceInformation';
        if (source['comment']) {
            this.comment = new fhir.FhirString({ value: source.comment });
        }
        if (source['_comment']) {
            if (this.comment) {
                this.comment.addExtendedProperties(source._comment);
            }
            else {
                this.comment = new fhir.FhirString(source._comment);
            }
        }
        if (source['gene']) {
            this.gene = source.gene.map((x) => new fhir.SubstanceReferenceInformationGene(x));
        }
        else {
            this.gene = [];
        }
        if (source['geneElement']) {
            this.geneElement = source.geneElement.map((x) => new fhir.SubstanceReferenceInformationGeneElement(x));
        }
        else {
            this.geneElement = [];
        }
        if (source['classification']) {
            this.classification = source.classification.map((x) => new fhir.SubstanceReferenceInformationClassification(x));
        }
        else {
            this.classification = [];
        }
        if (source['target']) {
            this.target = source.target.map((x) => new fhir.SubstanceReferenceInformationTarget(x));
        }
        else {
            this.target = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'SubstanceReferenceInformation';
        }
        this.vRS('resourceType', exp);
        this.vOS('comment', exp);
        this.vOA('gene', exp);
        this.vOA('geneElement', exp);
        this.vOA('classification', exp);
        this.vOA('target', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SubstanceReferenceInformation._fts_dataType = 'SubstanceReferenceInformation';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb24uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1N1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLCtDQUErQztBQUUvQyxPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQW9CbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8saUNBQWtDLFNBQVEsSUFBSSxDQUFDLGVBQWU7SUFpQnpFOztPQUVHO0lBQ0gsWUFBWSxTQUF3RCxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUM5RyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQUU7UUFDcEgsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FBRTtRQUMxRSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDbkY7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUFFO0lBQzVCLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLE1BQU0s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MUQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLCtCQUErQixDQUFBO1NBQUU7UUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQTdERDs7R0FFRztBQUM2QiwyQ0FBYSxHQUFVLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBTdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvblxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbkdlbmUgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb25HZW5lQXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogVG9kby5cclxuICAgKi9cclxuICBnZW5lU2VxdWVuY2VPcmlnaW4/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRvZG8uXHJcbiAgICovXHJcbiAgZ2VuZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVG9kby5cclxuICAgKi9cclxuICBzb3VyY2U/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUb2RvLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uR2VuZSBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1N1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uR2VuZSc7XHJcbiAgLyoqXHJcbiAgICogVG9kby5cclxuICAgKi9cclxuICBwdWJsaWMgZ2VuZVNlcXVlbmNlT3JpZ2luPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRvZG8uXHJcbiAgICovXHJcbiAgcHVibGljIGdlbmU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVG9kby5cclxuICAgKi9cclxuICBwdWJsaWMgc291cmNlOiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFN1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uR2VuZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFN1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uR2VuZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydnZW5lU2VxdWVuY2VPcmlnaW4nXSkgeyB0aGlzLmdlbmVTZXF1ZW5jZU9yaWdpbiA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuZ2VuZVNlcXVlbmNlT3JpZ2luKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZ2VuZSddKSB7IHRoaXMuZ2VuZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuZ2VuZSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3NvdXJjZSddKSB7IHRoaXMuc291cmNlID0gc291cmNlLnNvdXJjZS5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnNvdXJjZSA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb24uZ2VuZScgfVxyXG4gICAgdGhpcy52T1MoJ2dlbmVTZXF1ZW5jZU9yaWdpbicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2dlbmUnLGV4cClcclxuICAgIHRoaXMudk9BKCdzb3VyY2UnLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbkdlbmVFbGVtZW50IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uR2VuZUVsZW1lbnRBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIHR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRvZG8uXHJcbiAgICovXHJcbiAgZWxlbWVudD86IGZoaXIuSWRlbnRpZmllckFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRvZG8uXHJcbiAgICovXHJcbiAgc291cmNlPzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogVG9kby5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbkdlbmVFbGVtZW50IGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb25HZW5lRWxlbWVudCc7XHJcbiAgLyoqXHJcbiAgICogVG9kby5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBlbGVtZW50PzogZmhpci5JZGVudGlmaWVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzb3VyY2U6IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb25HZW5lRWxlbWVudCAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFN1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uR2VuZUVsZW1lbnRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsndHlwZSddKSB7IHRoaXMudHlwZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UudHlwZSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2VsZW1lbnQnXSkgeyB0aGlzLmVsZW1lbnQgPSBuZXcgZmhpci5JZGVudGlmaWVyKHNvdXJjZS5lbGVtZW50KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc291cmNlJ10pIHsgdGhpcy5zb3VyY2UgPSBzb3VyY2Uuc291cmNlLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc291cmNlID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdTdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbi5nZW5lRWxlbWVudCcgfVxyXG4gICAgdGhpcy52T1MoJ3R5cGUnLGV4cClcclxuICAgIHRoaXMudk9TKCdlbGVtZW50JyxleHApXHJcbiAgICB0aGlzLnZPQSgnc291cmNlJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb25DbGFzc2lmaWNhdGlvbiB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbkNsYXNzaWZpY2F0aW9uQXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogVG9kby5cclxuICAgKi9cclxuICBkb21haW4/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRvZG8uXHJcbiAgICovXHJcbiAgY2xhc3NpZmljYXRpb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRvZG8uXHJcbiAgICovXHJcbiAgc3VidHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIHNvdXJjZT86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRvZG8uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb25DbGFzc2lmaWNhdGlvbiBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1N1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uQ2xhc3NpZmljYXRpb24nO1xyXG4gIC8qKlxyXG4gICAqIFRvZG8uXHJcbiAgICovXHJcbiAgcHVibGljIGRvbWFpbj86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjbGFzc2lmaWNhdGlvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdWJ0eXBlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIFRvZG8uXHJcbiAgICovXHJcbiAgcHVibGljIHNvdXJjZTogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBTdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbkNsYXNzaWZpY2F0aW9uIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8U3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb25DbGFzc2lmaWNhdGlvbkFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydkb21haW4nXSkgeyB0aGlzLmRvbWFpbiA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuZG9tYWluKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY2xhc3NpZmljYXRpb24nXSkgeyB0aGlzLmNsYXNzaWZpY2F0aW9uID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5jbGFzc2lmaWNhdGlvbik7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N1YnR5cGUnXSkgeyB0aGlzLnN1YnR5cGUgPSBzb3VyY2Uuc3VidHlwZS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN1YnR5cGUgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc291cmNlJ10pIHsgdGhpcy5zb3VyY2UgPSBzb3VyY2Uuc291cmNlLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc291cmNlID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdTdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbi5jbGFzc2lmaWNhdGlvbicgfVxyXG4gICAgdGhpcy52T1MoJ2RvbWFpbicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2NsYXNzaWZpY2F0aW9uJyxleHApXHJcbiAgICB0aGlzLnZPQSgnc3VidHlwZScsZXhwKVxyXG4gICAgdGhpcy52T0EoJ3NvdXJjZScsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFN1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uVGFyZ2V0IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uVGFyZ2V0QXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogVG9kby5cclxuICAgKi9cclxuICB0YXJnZXQ/OiBmaGlyLklkZW50aWZpZXJBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIHR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRvZG8uXHJcbiAgICovXHJcbiAgaW50ZXJhY3Rpb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRvZG8uXHJcbiAgICovXHJcbiAgb3JnYW5pc20/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRvZG8uXHJcbiAgICovXHJcbiAgb3JnYW5pc21UeXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIGFtb3VudD86IGZoaXIuUXVhbnRpdHl8Zmhpci5SYW5nZXxmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRvZG8uXHJcbiAgICovXHJcbiAgYW1vdW50UXVhbnRpdHk/OiBmaGlyLlF1YW50aXR5QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVG9kby5cclxuICAgKi9cclxuICBhbW91bnRSYW5nZT86IGZoaXIuUmFuZ2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIGFtb3VudFN0cmluZz86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRvZG8uXHJcbiAgICovXHJcbiAgYW1vdW50VHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVG9kby5cclxuICAgKi9cclxuICBzb3VyY2U/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUb2RvLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uVGFyZ2V0IGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb25UYXJnZXQnO1xyXG4gIC8qKlxyXG4gICAqIFRvZG8uXHJcbiAgICovXHJcbiAgcHVibGljIHRhcmdldD86IGZoaXIuSWRlbnRpZmllcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVG9kby5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpbnRlcmFjdGlvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvcmdhbmlzbT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvcmdhbmlzbVR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVG9kby5cclxuICAgKi9cclxuICBwdWJsaWMgYW1vdW50PzogKGZoaXIuUXVhbnRpdHl8Zmhpci5SYW5nZXxmaGlyLkZoaXJTdHJpbmcpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IFN1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uLnRhcmdldC5hbW91bnRbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfYW1vdW50SXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogVG9kby5cclxuICAgKi9cclxuICBwdWJsaWMgYW1vdW50VHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzb3VyY2U6IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb25UYXJnZXQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxTdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvblRhcmdldEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyd0YXJnZXQnXSkgeyB0aGlzLnRhcmdldCA9IG5ldyBmaGlyLklkZW50aWZpZXIoc291cmNlLnRhcmdldCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnR5cGUpOyB9XHJcbiAgICBpZiAoc291cmNlWydpbnRlcmFjdGlvbiddKSB7IHRoaXMuaW50ZXJhY3Rpb24gPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmludGVyYWN0aW9uKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnb3JnYW5pc20nXSkgeyB0aGlzLm9yZ2FuaXNtID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5vcmdhbmlzbSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ29yZ2FuaXNtVHlwZSddKSB7IHRoaXMub3JnYW5pc21UeXBlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5vcmdhbmlzbVR5cGUpOyB9XHJcbiAgICBpZiAoc291cmNlWydhbW91bnQnXSkgeyB0aGlzLmFtb3VudCA9IHNvdXJjZS5hbW91bnQ7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnYW1vdW50UXVhbnRpdHknXSkgeyB0aGlzLmFtb3VudCA9IG5ldyBmaGlyLlF1YW50aXR5KHNvdXJjZS5hbW91bnRRdWFudGl0eSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnYW1vdW50UmFuZ2UnXSkgeyB0aGlzLmFtb3VudCA9IG5ldyBmaGlyLlJhbmdlKHNvdXJjZS5hbW91bnRSYW5nZSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnYW1vdW50U3RyaW5nJ10pIHsgdGhpcy5hbW91bnQgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmFtb3VudFN0cmluZ30pOyB9XHJcbiAgICBpZiAoc291cmNlWydhbW91bnRUeXBlJ10pIHsgdGhpcy5hbW91bnRUeXBlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5hbW91bnRUeXBlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc291cmNlJ10pIHsgdGhpcy5zb3VyY2UgPSBzb3VyY2Uuc291cmNlLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc291cmNlID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdTdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbi50YXJnZXQnIH1cclxuICAgIHRoaXMudk9TKCd0YXJnZXQnLGV4cClcclxuICAgIHRoaXMudk9TKCd0eXBlJyxleHApXHJcbiAgICB0aGlzLnZPUygnaW50ZXJhY3Rpb24nLGV4cClcclxuICAgIHRoaXMudk9TKCdvcmdhbmlzbScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ29yZ2FuaXNtVHlwZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2Ftb3VudCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2Ftb3VudFR5cGUnLGV4cClcclxuICAgIHRoaXMudk9BKCdzb3VyY2UnLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbiB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbkFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIlN1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uXCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRvZG8uXHJcbiAgICovXHJcbiAgY29tbWVudD86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbi5jb21tZW50XHJcbiAgICovXHJcbiAgX2NvbW1lbnQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRvZG8uXHJcbiAgICovXHJcbiAgZ2VuZT86IGZoaXIuU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb25HZW5lQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIGdlbmVFbGVtZW50PzogZmhpci5TdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbkdlbmVFbGVtZW50QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIGNsYXNzaWZpY2F0aW9uPzogZmhpci5TdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbkNsYXNzaWZpY2F0aW9uQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIHRhcmdldD86IGZoaXIuU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb25UYXJnZXRBcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogVG9kby5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbiBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb24nO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb25cIjtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb21tZW50PzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZW5lOiBmaGlyLlN1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uR2VuZVtdO1xyXG4gIC8qKlxyXG4gICAqIFRvZG8uXHJcbiAgICovXHJcbiAgcHVibGljIGdlbmVFbGVtZW50OiBmaGlyLlN1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uR2VuZUVsZW1lbnRbXTtcclxuICAvKipcclxuICAgKiBUb2RvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjbGFzc2lmaWNhdGlvbjogZmhpci5TdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbkNsYXNzaWZpY2F0aW9uW107XHJcbiAgLyoqXHJcbiAgICogVG9kby5cclxuICAgKi9cclxuICBwdWJsaWMgdGFyZ2V0OiBmaGlyLlN1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uVGFyZ2V0W107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb24gLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxTdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbkFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdTdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbic7XHJcbiAgICBpZiAoc291cmNlWydjb21tZW50J10pIHsgdGhpcy5jb21tZW50ID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5jb21tZW50fSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jb21tZW50J10pIHtcclxuICAgICAgaWYgKHRoaXMuY29tbWVudCkgeyB0aGlzLmNvbW1lbnQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY29tbWVudCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNvbW1lbnQgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fY29tbWVudCBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZ2VuZSddKSB7IHRoaXMuZ2VuZSA9IHNvdXJjZS5nZW5lLm1hcCgoeCkgPT4gbmV3IGZoaXIuU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb25HZW5lKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZ2VuZSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydnZW5lRWxlbWVudCddKSB7IHRoaXMuZ2VuZUVsZW1lbnQgPSBzb3VyY2UuZ2VuZUVsZW1lbnQubWFwKCh4KSA9PiBuZXcgZmhpci5TdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbkdlbmVFbGVtZW50KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZ2VuZUVsZW1lbnQgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY2xhc3NpZmljYXRpb24nXSkgeyB0aGlzLmNsYXNzaWZpY2F0aW9uID0gc291cmNlLmNsYXNzaWZpY2F0aW9uLm1hcCgoeCkgPT4gbmV3IGZoaXIuU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb25DbGFzc2lmaWNhdGlvbih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmNsYXNzaWZpY2F0aW9uID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3RhcmdldCddKSB7IHRoaXMudGFyZ2V0ID0gc291cmNlLnRhcmdldC5tYXAoKHgpID0+IG5ldyBmaGlyLlN1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uVGFyZ2V0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMudGFyZ2V0ID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdTdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbicgfVxyXG4gICAgdGhpcy52UlMoJ3Jlc291cmNlVHlwZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2NvbW1lbnQnLGV4cClcclxuICAgIHRoaXMudk9BKCdnZW5lJyxleHApXHJcbiAgICB0aGlzLnZPQSgnZ2VuZUVsZW1lbnQnLGV4cClcclxuICAgIHRoaXMudk9BKCdjbGFzc2lmaWNhdGlvbicsZXhwKVxyXG4gICAgdGhpcy52T0EoJ3RhcmdldCcsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19