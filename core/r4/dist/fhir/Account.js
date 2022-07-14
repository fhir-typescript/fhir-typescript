// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Account
import * as fhir from '../fhir.js';
// @ts-ignore
import { AccountStatusVsValidation } from '../fhirValueSets/AccountStatusVsValidation.js';
/**
 * Typically. this may be some form of insurance, internal charges, or self-pay.
 * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
 * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
 */
export class AccountCoverage extends fhir.BackboneElement {
    /**
     * Default constructor for AccountCoverage - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['coverage']) {
            this.coverage = new fhir.Reference(source.coverage);
        }
        else {
            this.coverage = null;
        }
        if (source['priority']) {
            this.priority = new fhir.FhirPositiveInt({ value: source.priority });
        }
        if (source['_priority']) {
            if (this.priority) {
                this.priority.addExtendedProperties(source._priority);
            }
            else {
                this.priority = new fhir.FhirPositiveInt(source._priority);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'Account.coverage';
        }
        this.vReqS('coverage', expression);
        this.vOptS('priority', expression);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
AccountCoverage._fts_dataType = 'AccountCoverage';
/**
 * The parties responsible for balancing the account if other payment options fall short.
 */
export class AccountGuarantor extends fhir.BackboneElement {
    /**
     * Default constructor for AccountGuarantor - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['party']) {
            this.party = new fhir.Reference(source.party);
        }
        else {
            this.party = null;
        }
        if (source['onHold']) {
            this.onHold = new fhir.FhirBoolean({ value: source.onHold });
        }
        if (source['_onHold']) {
            if (this.onHold) {
                this.onHold.addExtendedProperties(source._onHold);
            }
            else {
                this.onHold = new fhir.FhirBoolean(source._onHold);
            }
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'Account.guarantor';
        }
        this.vReqS('party', expression);
        this.vOptS('onHold', expression);
        this.vOptS('period', expression);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
AccountGuarantor._fts_dataType = 'AccountGuarantor';
/**
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
 */
export class Account extends fhir.DomainResource {
    /**
     * Default constructor for Account - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Account';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['status']) {
            this.status = new fhir.FhirCode({ value: source.status });
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status);
            }
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        if (source['_name']) {
            if (this.name) {
                this.name.addExtendedProperties(source._name);
            }
            else {
                this.name = new fhir.FhirString(source._name);
            }
        }
        if (source['subject']) {
            this.subject = source.subject.map((x) => new fhir.Reference(x));
        }
        else {
            this.subject = [];
        }
        if (source['servicePeriod']) {
            this.servicePeriod = new fhir.Period(source.servicePeriod);
        }
        if (source['coverage']) {
            this.coverage = source.coverage.map((x) => new fhir.AccountCoverage(x));
        }
        else {
            this.coverage = [];
        }
        if (source['owner']) {
            this.owner = new fhir.Reference(source.owner);
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
        if (source['guarantor']) {
            this.guarantor = source.guarantor.map((x) => new fhir.AccountGuarantor(x));
        }
        else {
            this.guarantor = [];
        }
        if (source['partOf']) {
            this.partOf = new fhir.Reference(source.partOf);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'Account';
        }
        this.vReqS('resourceType', expression);
        this.vOptA('identifier', expression);
        this.vReqSV('status', expression, 'AccountStatus', AccountStatusVsValidation, 'r');
        this.vOptS('type', expression);
        this.vOptS('name', expression);
        this.vOptA('subject', expression);
        this.vOptS('servicePeriod', expression);
        this.vOptA('coverage', expression);
        this.vOptS('owner', expression);
        this.vOptS('description', expression);
        this.vOptA('guarantor', expression);
        this.vOptS('partOf', expression);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Account._fts_dataType = 'Account';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFFekIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBd0IxRjs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLGVBQWdCLFNBQVEsSUFBSSxDQUFDLGVBQWU7SUFjdkQ7O09BRUc7SUFDSCxZQUFZLFNBQXNDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQzVGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FBRTthQUMzRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDOUIsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQy9GLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxTQUFVLENBQUMsQ0FBQzthQUFFO2lCQUN6RTtnQkFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FB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QUFDLFVBQVUsRUFBQyxlQUFlLEVBQUMseUJBQXlCLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDOUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDL0IsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUE1R0Q7O0dBRUc7QUFDNkIscUJBQWEsR0FBVSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IEFjY291bnRcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEFjY291bnRTdGF0dXNDb2RlcywgIEFjY291bnRTdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQWNjb3VudFN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBBY2NvdW50U3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9BY2NvdW50U3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBBY2NvdW50VHlwZUNvZGVzLCAgQWNjb3VudFR5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQWNjb3VudFR5cGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQWNjb3VudFR5cGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0FjY291bnRUeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEFjY291bnRDb3ZlcmFnZSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50Q292ZXJhZ2VBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgcGFydHkocykgdGhhdCBjb250cmlidXRlIHRvIHBheW1lbnQgKG9yIHBhcnQgb2YpIG9mIHRoZSBjaGFyZ2VzIGFwcGxpZWQgdG8gdGhpcyBhY2NvdW50IChpbmNsdWRpbmcgc2VsZi1wYXkpLlxyXG4gICAqIEEgY292ZXJhZ2UgbWF5IG9ubHkgYmUgcmVzcG9uc2libGUgZm9yIHNwZWNpZmljIHR5cGVzIG9mIGNoYXJnZXMsIGFuZCB0aGUgc2VxdWVuY2Ugb2YgdGhlIGNvdmVyYWdlcyBpbiB0aGUgYWNjb3VudCBjb3VsZCBiZSBpbXBvcnRhbnQgd2hlbiBwcm9jZXNzaW5nIGJpbGxpbmcuXHJcbiAgICovXHJcbiAgY292ZXJhZ2U6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIEl0IGlzIGNvbW1vbiBpbiBzb21lIGp1cmlzZGljdGlvbnMgZm9yIHRoZXJlIHRvIGJlIG11bHRpcGxlIGNvdmVyYWdlcyBhbGxvY2F0ZWQgdG8gYW4gYWNjb3VudCwgYW5kIGEgc2VxdWVuY2UgaXMgcmVxdWlyZWQgdG8gb3JkZXIgdGhlIHNldHRsaW5nIG9mIHRoZSBhY2NvdW50IChvZnRlbiB3aXRoIGluc3VyYW5jZSBjbGFpbWluZykuXHJcbiAgICovXHJcbiAgcHJpb3JpdHk/OiBmaGlyLkZoaXJQb3NpdGl2ZUludHxudW1iZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBY2NvdW50LmNvdmVyYWdlLnByaW9yaXR5XHJcbiAgICovXHJcbiAgX3ByaW9yaXR5PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFR5cGljYWxseS4gdGhpcyBtYXkgYmUgc29tZSBmb3JtIG9mIGluc3VyYW5jZSwgaW50ZXJuYWwgY2hhcmdlcywgb3Igc2VsZi1wYXkuXHJcbiAqIExvY2FsIG9yIGp1cmlzZGljdGlvbmFsIGJ1c2luZXNzIHJ1bGVzIG1heSBkZXRlcm1pbmUgd2hpY2ggY292ZXJhZ2UgY292ZXJzIHdoaWNoIHR5cGVzIG9mIGJpbGxhYmxlIGl0ZW1zIGNoYXJnZWQgdG8gdGhlIGFjY291bnQsIGFuZCBpbiB3aGljaCBvcmRlci5cclxuICogV2hlcmUgdGhlIG9yZGVyIGlzIGltcG9ydGFudCwgYSBsb2NhbC9qdXJpc2RpY3Rpb25hbCBleHRlbnNpb24gbWF5IGJlIGRlZmluZWQgdG8gc3BlY2lmeSB0aGUgb3JkZXIgZm9yIHRoZSB0eXBlIG9mIGNoYXJnZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50Q292ZXJhZ2UgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdBY2NvdW50Q292ZXJhZ2UnO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXJ0eShzKSB0aGF0IGNvbnRyaWJ1dGUgdG8gcGF5bWVudCAob3IgcGFydCBvZikgb2YgdGhlIGNoYXJnZXMgYXBwbGllZCB0byB0aGlzIGFjY291bnQgKGluY2x1ZGluZyBzZWxmLXBheSkuXHJcbiAgICogQSBjb3ZlcmFnZSBtYXkgb25seSBiZSByZXNwb25zaWJsZSBmb3Igc3BlY2lmaWMgdHlwZXMgb2YgY2hhcmdlcywgYW5kIHRoZSBzZXF1ZW5jZSBvZiB0aGUgY292ZXJhZ2VzIGluIHRoZSBhY2NvdW50IGNvdWxkIGJlIGltcG9ydGFudCB3aGVuIHByb2Nlc3NpbmcgYmlsbGluZy5cclxuICAgKi9cclxuICBwdWJsaWMgY292ZXJhZ2U6IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogSXQgaXMgY29tbW9uIGluIHNvbWUganVyaXNkaWN0aW9ucyBmb3IgdGhlcmUgdG8gYmUgbXVsdGlwbGUgY292ZXJhZ2VzIGFsbG9jYXRlZCB0byBhbiBhY2NvdW50LCBhbmQgYSBzZXF1ZW5jZSBpcyByZXF1aXJlZCB0byBvcmRlciB0aGUgc2V0dGxpbmcgb2YgdGhlIGFjY291bnQgKG9mdGVuIHdpdGggaW5zdXJhbmNlIGNsYWltaW5nKS5cclxuICAgKi9cclxuICBwdWJsaWMgcHJpb3JpdHk/OiBmaGlyLkZoaXJQb3NpdGl2ZUludHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgQWNjb3VudENvdmVyYWdlIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8QWNjb3VudENvdmVyYWdlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2NvdmVyYWdlJ10pIHsgdGhpcy5jb3ZlcmFnZSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuY292ZXJhZ2UpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb3ZlcmFnZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3ByaW9yaXR5J10pIHsgdGhpcy5wcmlvcml0eSA9IG5ldyBmaGlyLkZoaXJQb3NpdGl2ZUludCh7dmFsdWU6IHNvdXJjZS5wcmlvcml0eX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfcHJpb3JpdHknXSkge1xyXG4gICAgICBpZiAodGhpcy5wcmlvcml0eSkgeyB0aGlzLnByaW9yaXR5LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3ByaW9yaXR5ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucHJpb3JpdHkgPSBuZXcgZmhpci5GaGlyUG9zaXRpdmVJbnQoc291cmNlLl9wcmlvcml0eSBhcyBQYXJ0aWFsPGZoaXIuRmhpclBvc2l0aXZlSW50QXJncz4pOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKTtcclxuICAgIGlmIChleHByZXNzaW9uID09PSAnJykgeyBleHByZXNzaW9uID0gJ0FjY291bnQuY292ZXJhZ2UnIH1cclxuICAgIHRoaXMudlJlcVMoJ2NvdmVyYWdlJyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52T3B0UygncHJpb3JpdHknLGV4cHJlc3Npb24pXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgQWNjb3VudEd1YXJhbnRvciB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50R3VhcmFudG9yQXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGVudGl0eSB3aG8gaXMgcmVzcG9uc2libGUuXHJcbiAgICovXHJcbiAgcGFydHk6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIEEgZ3VhcmFudG9yIG1heSBiZSBwbGFjZWQgb24gY3JlZGl0IGhvbGQgb3Igb3RoZXJ3aXNlIGhhdmUgdGhlaXIgcm9sZSB0ZW1wb3JhcmlseSBzdXNwZW5kZWQuXHJcbiAgICovXHJcbiAgb25Ib2xkPzogZmhpci5GaGlyQm9vbGVhbnxib29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQWNjb3VudC5ndWFyYW50b3Iub25Ib2xkXHJcbiAgICovXHJcbiAgX29uSG9sZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWVmcmFtZSBkdXJpbmcgd2hpY2ggdGhlIGd1YXJhbnRvciBhY2NlcHRzIHJlc3BvbnNpYmlsaXR5IGZvciB0aGUgYWNjb3VudC5cclxuICAgKi9cclxuICBwZXJpb2Q/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHBhcnRpZXMgcmVzcG9uc2libGUgZm9yIGJhbGFuY2luZyB0aGUgYWNjb3VudCBpZiBvdGhlciBwYXltZW50IG9wdGlvbnMgZmFsbCBzaG9ydC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50R3VhcmFudG9yIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQWNjb3VudEd1YXJhbnRvcic7XHJcbiAgLyoqXHJcbiAgICogVGhlIGVudGl0eSB3aG8gaXMgcmVzcG9uc2libGUuXHJcbiAgICovXHJcbiAgcHVibGljIHBhcnR5OiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEEgZ3VhcmFudG9yIG1heSBiZSBwbGFjZWQgb24gY3JlZGl0IGhvbGQgb3Igb3RoZXJ3aXNlIGhhdmUgdGhlaXIgcm9sZSB0ZW1wb3JhcmlseSBzdXNwZW5kZWQuXHJcbiAgICovXHJcbiAgcHVibGljIG9uSG9sZD86IGZoaXIuRmhpckJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lZnJhbWUgZHVyaW5nIHdoaWNoIHRoZSBndWFyYW50b3IgYWNjZXB0cyByZXNwb25zaWJpbGl0eSBmb3IgdGhlIGFjY291bnQuXHJcbiAgICovXHJcbiAgcHVibGljIHBlcmlvZD86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBBY2NvdW50R3VhcmFudG9yIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8QWNjb3VudEd1YXJhbnRvckFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydwYXJ0eSddKSB7IHRoaXMucGFydHkgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnBhcnR5KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucGFydHkgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydvbkhvbGQnXSkgeyB0aGlzLm9uSG9sZCA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHt2YWx1ZTogc291cmNlLm9uSG9sZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfb25Ib2xkJ10pIHtcclxuICAgICAgaWYgKHRoaXMub25Ib2xkKSB7IHRoaXMub25Ib2xkLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX29uSG9sZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLm9uSG9sZCA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHNvdXJjZS5fb25Ib2xkIGFzIFBhcnRpYWw8Zmhpci5GaGlyQm9vbGVhbkFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncGVyaW9kJ10pIHsgdGhpcy5wZXJpb2QgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLnBlcmlvZCk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb246c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24pO1xyXG4gICAgaWYgKGV4cHJlc3Npb24gPT09ICcnKSB7IGV4cHJlc3Npb24gPSAnQWNjb3VudC5ndWFyYW50b3InIH1cclxuICAgIHRoaXMudlJlcVMoJ3BhcnR5JyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52T3B0Uygnb25Ib2xkJyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52T3B0UygncGVyaW9kJyxleHByZXNzaW9uKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEFjY291bnQgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudEFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkFjY291bnRcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVW5pcXVlIGlkZW50aWZpZXIgdXNlZCB0byByZWZlcmVuY2UgdGhlIGFjY291bnQuICBNaWdodCBvciBtaWdodCBub3QgYmUgaW50ZW5kZWQgZm9yIGh1bWFuIHVzZSAoZS5nLiBjcmVkaXQgY2FyZCBudW1iZXIpLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSB0aGUgc3RhdHVzIGNvbnRhaW5zIHRoZSBjb2RlcyBpbmFjdGl2ZSBhbmQgZW50ZXJlZC1pbi1lcnJvciB0aGF0IG1hcmsgdGhlIEFjY291bnQgYXMgbm90IGN1cnJlbnRseSB2YWxpZC5cclxuICAgKi9cclxuICBzdGF0dXM6IGZoaXIuRmhpckNvZGU8QWNjb3VudFN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBY2NvdW50LnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENhdGVnb3JpemVzIHRoZSBhY2NvdW50IGZvciByZXBvcnRpbmcgYW5kIHNlYXJjaGluZyBwdXJwb3Nlcy5cclxuICAgKi9cclxuICB0eXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOYW1lIHVzZWQgZm9yIHRoZSBhY2NvdW50IHdoZW4gZGlzcGxheWluZyBpdCB0byBodW1hbnMgaW4gcmVwb3J0cywgZXRjLlxyXG4gICAqL1xyXG4gIG5hbWU/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQWNjb3VudC5uYW1lXHJcbiAgICovXHJcbiAgX25hbWU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEFjY291bnRzIGNhbiBiZSBhcHBsaWVkIHRvIG5vbi1wYXRpZW50cyBmb3IgdHJhY2tpbmcgb3RoZXIgbm9uLXBhdGllbnQgcmVsYXRlZCBhY3Rpdml0aWVzLCBzdWNoIGFzIGdyb3VwIHNlcnZpY2VzIChwYXRpZW50cyBub3QgdHJhY2tlZCwgYW5kIGNvc3RzIGNoYXJnZWQgdG8gYW5vdGhlciBib2R5KSwgb3IgbWlnaHQgbm90IGJlIGFsbG9jYXRlZC5cclxuICAgKi9cclxuICBzdWJqZWN0PzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEl0IGlzIHBvc3NpYmxlIGZvciB0cmFuc2FjdGlvbnMgdG8gYmUgcG9zdGVkIG91dHNpZGUgdGhlIHNlcnZpY2UgcGVyaW9kLCBhcyBsb25nIGFzIHRoZSBzZXJ2aWNlIHdhcyBwcm92aWRlZCB3aXRoaW4gdGhlIGRlZmluZWQgc2VydmljZSBwZXJpb2QuXHJcbiAgICovXHJcbiAgc2VydmljZVBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVHlwaWNhbGx5LiB0aGlzIG1heSBiZSBzb21lIGZvcm0gb2YgaW5zdXJhbmNlLCBpbnRlcm5hbCBjaGFyZ2VzLCBvciBzZWxmLXBheS5cclxuICAgKiBMb2NhbCBvciBqdXJpc2RpY3Rpb25hbCBidXNpbmVzcyBydWxlcyBtYXkgZGV0ZXJtaW5lIHdoaWNoIGNvdmVyYWdlIGNvdmVycyB3aGljaCB0eXBlcyBvZiBiaWxsYWJsZSBpdGVtcyBjaGFyZ2VkIHRvIHRoZSBhY2NvdW50LCBhbmQgaW4gd2hpY2ggb3JkZXIuXHJcbiAgICogV2hlcmUgdGhlIG9yZGVyIGlzIGltcG9ydGFudCwgYSBsb2NhbC9qdXJpc2RpY3Rpb25hbCBleHRlbnNpb24gbWF5IGJlIGRlZmluZWQgdG8gc3BlY2lmeSB0aGUgb3JkZXIgZm9yIHRoZSB0eXBlIG9mIGNoYXJnZS5cclxuICAgKi9cclxuICBjb3ZlcmFnZT86IGZoaXIuQWNjb3VudENvdmVyYWdlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIHNlcnZpY2UgYXJlYSwgaG9zcGl0YWwsIGRlcGFydG1lbnQsIGV0Yy4gd2l0aCByZXNwb25zaWJpbGl0eSBmb3IgbWFuYWdpbmcgdGhlIEFjY291bnQuXHJcbiAgICovXHJcbiAgb3duZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFByb3ZpZGVzIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCB0aGUgYWNjb3VudCB0cmFja3MgYW5kIGhvdyBpdCBpcyB1c2VkLlxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFjY291bnQuZGVzY3JpcHRpb25cclxuICAgKi9cclxuICBfZGVzY3JpcHRpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXJ0aWVzIHJlc3BvbnNpYmxlIGZvciBiYWxhbmNpbmcgdGhlIGFjY291bnQgaWYgb3RoZXIgcGF5bWVudCBvcHRpb25zIGZhbGwgc2hvcnQuXHJcbiAgICovXHJcbiAgZ3VhcmFudG9yPzogZmhpci5BY2NvdW50R3VhcmFudG9yQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBSZWZlcmVuY2UgdG8gYSBwYXJlbnQgQWNjb3VudC5cclxuICAgKi9cclxuICBwYXJ0T2Y/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBmaW5hbmNpYWwgdG9vbCBmb3IgdHJhY2tpbmcgdmFsdWUgYWNjcnVlZCBmb3IgYSBwYXJ0aWN1bGFyIHB1cnBvc2UuICBJbiB0aGUgaGVhbHRoY2FyZSBmaWVsZCwgdXNlZCB0byB0cmFjayBjaGFyZ2VzIGZvciBhIHBhdGllbnQsIGNvc3QgY2VudGVycywgZXRjLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0FjY291bnQnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiQWNjb3VudFwiO1xyXG4gIC8qKlxyXG4gICAqIFVuaXF1ZSBpZGVudGlmaWVyIHVzZWQgdG8gcmVmZXJlbmNlIHRoZSBhY2NvdW50LiAgTWlnaHQgb3IgbWlnaHQgbm90IGJlIGludGVuZGVkIGZvciBodW1hbiB1c2UgKGUuZy4gY3JlZGl0IGNhcmQgbnVtYmVyKS5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgdGhlIGNvZGVzIGluYWN0aXZlIGFuZCBlbnRlcmVkLWluLWVycm9yIHRoYXQgbWFyayB0aGUgQWNjb3VudCBhcyBub3QgY3VycmVudGx5IHZhbGlkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM6IGZoaXIuRmhpckNvZGU8QWNjb3VudFN0YXR1c0NvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIENhdGVnb3JpemVzIHRoZSBhY2NvdW50IGZvciByZXBvcnRpbmcgYW5kIHNlYXJjaGluZyBwdXJwb3Nlcy5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOYW1lIHVzZWQgZm9yIHRoZSBhY2NvdW50IHdoZW4gZGlzcGxheWluZyBpdCB0byBodW1hbnMgaW4gcmVwb3J0cywgZXRjLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBuYW1lPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBY2NvdW50cyBjYW4gYmUgYXBwbGllZCB0byBub24tcGF0aWVudHMgZm9yIHRyYWNraW5nIG90aGVyIG5vbi1wYXRpZW50IHJlbGF0ZWQgYWN0aXZpdGllcywgc3VjaCBhcyBncm91cCBzZXJ2aWNlcyAocGF0aWVudHMgbm90IHRyYWNrZWQsIGFuZCBjb3N0cyBjaGFyZ2VkIHRvIGFub3RoZXIgYm9keSksIG9yIG1pZ2h0IG5vdCBiZSBhbGxvY2F0ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN1YmplY3Q6IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogSXQgaXMgcG9zc2libGUgZm9yIHRyYW5zYWN0aW9ucyB0byBiZSBwb3N0ZWQgb3V0c2lkZSB0aGUgc2VydmljZSBwZXJpb2QsIGFzIGxvbmcgYXMgdGhlIHNlcnZpY2Ugd2FzIHByb3ZpZGVkIHdpdGhpbiB0aGUgZGVmaW5lZCBzZXJ2aWNlIHBlcmlvZC5cclxuICAgKi9cclxuICBwdWJsaWMgc2VydmljZVBlcmlvZD86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUeXBpY2FsbHkuIHRoaXMgbWF5IGJlIHNvbWUgZm9ybSBvZiBpbnN1cmFuY2UsIGludGVybmFsIGNoYXJnZXMsIG9yIHNlbGYtcGF5LlxyXG4gICAqIExvY2FsIG9yIGp1cmlzZGljdGlvbmFsIGJ1c2luZXNzIHJ1bGVzIG1heSBkZXRlcm1pbmUgd2hpY2ggY292ZXJhZ2UgY292ZXJzIHdoaWNoIHR5cGVzIG9mIGJpbGxhYmxlIGl0ZW1zIGNoYXJnZWQgdG8gdGhlIGFjY291bnQsIGFuZCBpbiB3aGljaCBvcmRlci5cclxuICAgKiBXaGVyZSB0aGUgb3JkZXIgaXMgaW1wb3J0YW50LCBhIGxvY2FsL2p1cmlzZGljdGlvbmFsIGV4dGVuc2lvbiBtYXkgYmUgZGVmaW5lZCB0byBzcGVjaWZ5IHRoZSBvcmRlciBmb3IgdGhlIHR5cGUgb2YgY2hhcmdlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb3ZlcmFnZTogZmhpci5BY2NvdW50Q292ZXJhZ2VbXTtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIHNlcnZpY2UgYXJlYSwgaG9zcGl0YWwsIGRlcGFydG1lbnQsIGV0Yy4gd2l0aCByZXNwb25zaWJpbGl0eSBmb3IgbWFuYWdpbmcgdGhlIEFjY291bnQuXHJcbiAgICovXHJcbiAgcHVibGljIG93bmVyPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFByb3ZpZGVzIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCB0aGUgYWNjb3VudCB0cmFja3MgYW5kIGhvdyBpdCBpcyB1c2VkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkZXNjcmlwdGlvbj86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBhcnRpZXMgcmVzcG9uc2libGUgZm9yIGJhbGFuY2luZyB0aGUgYWNjb3VudCBpZiBvdGhlciBwYXltZW50IG9wdGlvbnMgZmFsbCBzaG9ydC5cclxuICAgKi9cclxuICBwdWJsaWMgZ3VhcmFudG9yOiBmaGlyLkFjY291bnRHdWFyYW50b3JbXTtcclxuICAvKipcclxuICAgKiBSZWZlcmVuY2UgdG8gYSBwYXJlbnQgQWNjb3VudC5cclxuICAgKi9cclxuICBwdWJsaWMgcGFydE9mPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEFjY291bnQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxBY2NvdW50QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ0FjY291bnQnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxBY2NvdW50U3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN0YXR1c30pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzKSB7IHRoaXMuc3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPEFjY291bnRTdGF0dXNDb2RlVHlwZT4oc291cmNlLl9zdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnR5cGUpOyB9XHJcbiAgICBpZiAoc291cmNlWyduYW1lJ10pIHsgdGhpcy5uYW1lID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5uYW1lfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19uYW1lJ10pIHtcclxuICAgICAgaWYgKHRoaXMubmFtZSkgeyB0aGlzLm5hbWUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fbmFtZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLm5hbWUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fbmFtZSBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3ViamVjdCddKSB7IHRoaXMuc3ViamVjdCA9IHNvdXJjZS5zdWJqZWN0Lm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3ViamVjdCA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydzZXJ2aWNlUGVyaW9kJ10pIHsgdGhpcy5zZXJ2aWNlUGVyaW9kID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS5zZXJ2aWNlUGVyaW9kKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY292ZXJhZ2UnXSkgeyB0aGlzLmNvdmVyYWdlID0gc291cmNlLmNvdmVyYWdlLm1hcCgoeCkgPT4gbmV3IGZoaXIuQWNjb3VudENvdmVyYWdlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY292ZXJhZ2UgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnb3duZXInXSkgeyB0aGlzLm93bmVyID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5vd25lcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2Rlc2NyaXB0aW9uJ10pIHsgdGhpcy5kZXNjcmlwdGlvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZGVzY3JpcHRpb259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Rlc2NyaXB0aW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb24pIHsgdGhpcy5kZXNjcmlwdGlvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kZXNjcmlwdGlvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRlc2NyaXB0aW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Rlc2NyaXB0aW9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydndWFyYW50b3InXSkgeyB0aGlzLmd1YXJhbnRvciA9IHNvdXJjZS5ndWFyYW50b3IubWFwKCh4KSA9PiBuZXcgZmhpci5BY2NvdW50R3VhcmFudG9yKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZ3VhcmFudG9yID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3BhcnRPZiddKSB7IHRoaXMucGFydE9mID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5wYXJ0T2YpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKTtcclxuICAgIGlmIChleHByZXNzaW9uID09PSAnJykgeyBleHByZXNzaW9uID0gJ0FjY291bnQnIH1cclxuICAgIHRoaXMudlJlcVMoJ3Jlc291cmNlVHlwZScsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudk9wdEEoJ2lkZW50aWZpZXInLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZSZXFTVignc3RhdHVzJyxleHByZXNzaW9uLCdBY2NvdW50U3RhdHVzJyxBY2NvdW50U3RhdHVzVnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHRoaXMudk9wdFMoJ3R5cGUnLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZPcHRTKCduYW1lJyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52T3B0QSgnc3ViamVjdCcsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudk9wdFMoJ3NlcnZpY2VQZXJpb2QnLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZPcHRBKCdjb3ZlcmFnZScsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudk9wdFMoJ293bmVyJyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52T3B0UygnZGVzY3JpcHRpb24nLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZPcHRBKCdndWFyYW50b3InLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZPcHRTKCdwYXJ0T2YnLGV4cHJlc3Npb24pXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=