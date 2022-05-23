// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Person
import * as fhir from '../fhir.js';
// @ts-ignore
import { IdentityAssuranceLevelCodes } from '../fhirValueSets/IdentityAssuranceLevelCodes.js';
// @ts-ignore
import { AdministrativeGenderCodes } from '../fhirValueSets/AdministrativeGenderCodes.js';
/**
 * Link to a resource that concerns the same actual person.
 */
export class PersonLink extends fhir.BackboneElement {
    /**
     * Default constructor for PersonLink - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['target']) {
            this.target = new fhir.Reference(source.target);
        }
        else {
            this.target = null;
        }
        if (source['assurance']) {
            this.assurance = new fhir.FhirCode({ value: source.assurance });
        }
    }
    /**
     * Required-bound Value Set for assurance (Person.link.assurance)
     */
    static get assuranceRequiredCodes() {
        return IdentityAssuranceLevelCodes;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        let issues = super.doModelValidation();
        if (!this['target']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property target:fhir.Reference fhir: Person.link.target:Reference' });
        }
        if (this["target"]) {
            issues.push(...this.target.doModelValidation());
        }
        if (this['assurance'] && (!Object.values(IdentityAssuranceLevelCodes).includes(this.assurance))) {
            issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property assurance?:fhir.FhirCode<IdentityAssuranceLevelCodeType> fhir: Person.link.assurance:code Required binding to: IdentityAssuranceLevel' });
        }
        if (this["assurance"]) {
            issues.push(...this.assurance.doModelValidation());
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
PersonLink._fts_dataType = 'PersonLink';
/**
 * Demographics and administrative information about a person independent of a specific health-related context.
 */
export class Person extends fhir.DomainResource {
    /**
     * Default constructor for Person - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Person';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['name']) {
            this.name = source.name.map((x) => new fhir.HumanName(x));
        }
        else {
            this.name = [];
        }
        if (source['telecom']) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x));
        }
        else {
            this.telecom = [];
        }
        if (source['gender']) {
            this.gender = new fhir.FhirCode({ value: source.gender });
        }
        if (source['birthDate']) {
            this.birthDate = new fhir.FhirDate({ value: source.birthDate });
        }
        if (source['address']) {
            this.address = source.address.map((x) => new fhir.Address(x));
        }
        else {
            this.address = [];
        }
        if (source['photo']) {
            this.photo = new fhir.Attachment(source.photo);
        }
        if (source['managingOrganization']) {
            this.managingOrganization = new fhir.Reference(source.managingOrganization);
        }
        if (source['active']) {
            this.active = new fhir.FhirBoolean({ value: source.active });
        }
        if (source['link']) {
            this.link = source.link.map((x) => new fhir.PersonLink(x));
        }
        else {
            this.link = [];
        }
    }
    /**
     * Required-bound Value Set for gender (Person.gender)
     */
    static get genderRequiredCodes() {
        return AdministrativeGenderCodes;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        let issues = super.doModelValidation();
        if (!this['resourceType']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"Person" fhir: Person.resourceType:"Person"' });
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["name"]) {
            this.name.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["telecom"]) {
            this.telecom.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this['gender'] && (!Object.values(AdministrativeGenderCodes).includes(this.gender))) {
            issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property gender?:fhir.FhirCode<AdministrativeGenderCodeType> fhir: Person.gender:code Required binding to: AdministrativeGender' });
        }
        if (this["gender"]) {
            issues.push(...this.gender.doModelValidation());
        }
        if (this["birthDate"]) {
            issues.push(...this.birthDate.doModelValidation());
        }
        if (this["address"]) {
            this.address.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["photo"]) {
            issues.push(...this.photo.doModelValidation());
        }
        if (this["managingOrganization"]) {
            issues.push(...this.managingOrganization.doModelValidation());
        }
        if (this["active"]) {
            issues.push(...this.active.doModelValidation());
        }
        if (this["link"]) {
            this.link.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Person._fts_dataType = 'Person';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc29uLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9QZXJzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsd0JBQXdCO0FBRXhCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsMkJBQTJCLEVBQW1DLE1BQU0saURBQWlELENBQUM7QUFHL0gsYUFBYTtBQUNiLE9BQU8sRUFBRSx5QkFBeUIsRUFBaUMsTUFBTSwrQ0FBK0MsQ0FBQztBQWV6SDs7R0FFRztBQUNILE1BQU0sT0FBTyxVQUFXLFNBQVEsSUFBSSxDQUFDLGVBQWU7SUFhbEQ7O09BRUc7SUFDSCxZQUFZLFNBQWlDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3ZGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FBRTthQUNyRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDNUIsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBaUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7U0FBRTtJQUM3SCxDQUFDO0lBQ0Q7O09BRUc7SUFDSSxNQUFNLEtBQUssc0JBQXNCO1FBQ3RDLE9BQU8sMkJBQTJCLENBQUM7SUFDckMsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCO1FBQy9CLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN2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QUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQUU7UUFDMUYsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUFsR0Q7O0dBRUc7QUFDNkIsb0JBQWEsR0FBVSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IFBlcnNvblxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgSWRlbnRpdHlBc3N1cmFuY2VMZXZlbENvZGluZ3MsIElkZW50aXR5QXNzdXJhbmNlTGV2ZWxDb2RpbmdUeXBlLH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9JZGVudGl0eUFzc3VyYW5jZUxldmVsQ29kaW5ncy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgSWRlbnRpdHlBc3N1cmFuY2VMZXZlbENvZGVzLCAgSWRlbnRpdHlBc3N1cmFuY2VMZXZlbENvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9JZGVudGl0eUFzc3VyYW5jZUxldmVsQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEFkbWluaXN0cmF0aXZlR2VuZGVyQ29kaW5ncywgQWRtaW5pc3RyYXRpdmVHZW5kZXJDb2RpbmdUeXBlLH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9BZG1pbmlzdHJhdGl2ZUdlbmRlckNvZGluZ3MuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEFkbWluaXN0cmF0aXZlR2VuZGVyQ29kZXMsICBBZG1pbmlzdHJhdGl2ZUdlbmRlckNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9BZG1pbmlzdHJhdGl2ZUdlbmRlckNvZGVzLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFBlcnNvbkxpbmsgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uTGlua0FyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZXNvdXJjZSB0byB3aGljaCB0aGlzIGFjdHVhbCBwZXJzb24gaXMgYXNzb2NpYXRlZC5cclxuICAgKi9cclxuICB0YXJnZXQ6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIExldmVsIG9mIGFzc3VyYW5jZSB0aGF0IHRoaXMgbGluayBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIHRhcmdldCByZXNvdXJjZS5cclxuICAgKi9cclxuICBhc3N1cmFuY2U/OiBmaGlyLkZoaXJDb2RlPElkZW50aXR5QXNzdXJhbmNlTGV2ZWxDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIExpbmsgdG8gYSByZXNvdXJjZSB0aGF0IGNvbmNlcm5zIHRoZSBzYW1lIGFjdHVhbCBwZXJzb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGVyc29uTGluayBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1BlcnNvbkxpbmsnO1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZXNvdXJjZSB0byB3aGljaCB0aGlzIGFjdHVhbCBwZXJzb24gaXMgYXNzb2NpYXRlZC5cclxuICAgKi9cclxuICBwdWJsaWMgdGFyZ2V0OiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIExldmVsIG9mIGFzc3VyYW5jZSB0aGF0IHRoaXMgbGluayBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIHRhcmdldCByZXNvdXJjZS5cclxuICAgKi9cclxuICBwdWJsaWMgYXNzdXJhbmNlPzogZmhpci5GaGlyQ29kZTxJZGVudGl0eUFzc3VyYW5jZUxldmVsQ29kZVR5cGU+fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBQZXJzb25MaW5rIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8UGVyc29uTGlua0FyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyd0YXJnZXQnXSkgeyB0aGlzLnRhcmdldCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UudGFyZ2V0KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMudGFyZ2V0ID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYXNzdXJhbmNlJ10pIHsgdGhpcy5hc3N1cmFuY2UgPSBuZXcgZmhpci5GaGlyQ29kZTxJZGVudGl0eUFzc3VyYW5jZUxldmVsQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLmFzc3VyYW5jZX0pOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJlcXVpcmVkLWJvdW5kIFZhbHVlIFNldCBmb3IgYXNzdXJhbmNlIChQZXJzb24ubGluay5hc3N1cmFuY2UpXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgYXNzdXJhbmNlUmVxdWlyZWRDb2RlcygpIHtcclxuICAgIHJldHVybiBJZGVudGl0eUFzc3VyYW5jZUxldmVsQ29kZXM7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbigpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXNbJ3RhcmdldCddKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdyZXF1aXJlZCcsIGRpYWdub3N0aWNzOiAnTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSB0YXJnZXQ6Zmhpci5SZWZlcmVuY2UgZmhpcjogUGVyc29uLmxpbmsudGFyZ2V0OlJlZmVyZW5jZScgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1tcInRhcmdldFwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLnRhcmdldC5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKHRoaXNbJ2Fzc3VyYW5jZSddICYmICghT2JqZWN0LnZhbHVlcyhJZGVudGl0eUFzc3VyYW5jZUxldmVsQ29kZXMpLmluY2x1ZGVzKHRoaXMuYXNzdXJhbmNlIGFzIGFueSkpKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdjb2RlLWludmFsaWQnLCBkaWFnbm9zdGljczogJ0ludmFsaWQgY29kZSBwcm9wZXJ0eSBhc3N1cmFuY2U/OmZoaXIuRmhpckNvZGU8SWRlbnRpdHlBc3N1cmFuY2VMZXZlbENvZGVUeXBlPiBmaGlyOiBQZXJzb24ubGluay5hc3N1cmFuY2U6Y29kZSBSZXF1aXJlZCBiaW5kaW5nIHRvOiBJZGVudGl0eUFzc3VyYW5jZUxldmVsJyB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzW1wiYXNzdXJhbmNlXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuYXNzdXJhbmNlLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgUGVyc29uIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFBlcnNvbkFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIlBlcnNvblwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVyIGZvciBhIHBlcnNvbiB3aXRoaW4gYSBwYXJ0aWN1bGFyIHNjb3BlLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFBlcnNvbiBtYXkgaGF2ZSBtdWx0aXBsZSBuYW1lcyB3aXRoIGRpZmZlcmVudCB1c2VzIG9yIGFwcGxpY2FibGUgcGVyaW9kcy5cclxuICAgKi9cclxuICBuYW1lPzogZmhpci5IdW1hbk5hbWVBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFBlcnNvbiBtYXkgaGF2ZSBtdWx0aXBsZSB3YXlzIHRvIGJlIGNvbnRhY3RlZCB3aXRoIGRpZmZlcmVudCB1c2VzIG9yIGFwcGxpY2FibGUgcGVyaW9kcy4gIE1heSBuZWVkIHRvIGhhdmUgb3B0aW9ucyBmb3IgY29udGFjdGluZyB0aGUgcGVyc29uIHVyZ2VudGx5IGFuZCBhbHNvIHRvIGhlbHAgd2l0aCBpZGVudGlmaWNhdGlvbi5cclxuICAgKi9cclxuICB0ZWxlY29tPzogZmhpci5Db250YWN0UG9pbnRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBnZW5kZXIgbWlnaHQgbm90IG1hdGNoIHRoZSBiaW9sb2dpY2FsIHNleCBhcyBkZXRlcm1pbmVkIGJ5IGdlbmV0aWNzLCBvciB0aGUgaW5kaXZpZHVhbCdzIHByZWZlcnJlZCBpZGVudGlmaWNhdGlvbi4gTm90ZSB0aGF0IGZvciBib3RoIGh1bWFucyBhbmQgcGFydGljdWxhcmx5IGFuaW1hbHMsIHRoZXJlIGFyZSBvdGhlciBsZWdpdGltYXRlIHBvc3NpYmlsaXRpZXMgdGhhbiBNIGFuZCBGLCB0aG91Z2ggYSBjbGVhciBtYWpvcml0eSBvZiBzeXN0ZW1zIGFuZCBjb250ZXh0cyBvbmx5IHN1cHBvcnQgTSBhbmQgRi5cclxuICAgKi9cclxuICBnZW5kZXI/OiBmaGlyLkZoaXJDb2RlPEFkbWluaXN0cmF0aXZlR2VuZGVyQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQXQgbGVhc3QgYW4gZXN0aW1hdGVkIHllYXIgc2hvdWxkIGJlIHByb3ZpZGVkIGFzIGEgZ3Vlc3MgaWYgdGhlIHJlYWwgRE9CIGlzIHVua25vd24uXHJcbiAgICovXHJcbiAgYmlydGhEYXRlPzogZmhpci5GaGlyRGF0ZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFBlcnNvbiBtYXkgaGF2ZSBtdWx0aXBsZSBhZGRyZXNzZXMgd2l0aCBkaWZmZXJlbnQgdXNlcyBvciBhcHBsaWNhYmxlIHBlcmlvZHMuXHJcbiAgICovXHJcbiAgYWRkcmVzcz86IGZoaXIuQWRkcmVzc0FyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW4gaW1hZ2UgdGhhdCBjYW4gYmUgZGlzcGxheWVkIGFzIGEgdGh1bWJuYWlsIG9mIHRoZSBwZXJzb24gdG8gZW5oYW5jZSB0aGUgaWRlbnRpZmljYXRpb24gb2YgdGhlIGluZGl2aWR1YWwuXHJcbiAgICovXHJcbiAgcGhvdG8/OiBmaGlyLkF0dGFjaG1lbnRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgb3JnYW5pemF0aW9uIHRoYXQgaXMgdGhlIGN1c3RvZGlhbiBvZiB0aGUgcGVyc29uIHJlY29yZC5cclxuICAgKi9cclxuICBtYW5hZ2luZ09yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGlzIHBlcnNvbidzIHJlY29yZCBpcyBpbiBhY3RpdmUgdXNlLlxyXG4gICAqL1xyXG4gIGFjdGl2ZT86IGZoaXIuRmhpckJvb2xlYW58Ym9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogTGluayB0byBhIHJlc291cmNlIHRoYXQgY29uY2VybnMgdGhlIHNhbWUgYWN0dWFsIHBlcnNvbi5cclxuICAgKi9cclxuICBsaW5rPzogZmhpci5QZXJzb25MaW5rQXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlbW9ncmFwaGljcyBhbmQgYWRtaW5pc3RyYXRpdmUgaW5mb3JtYXRpb24gYWJvdXQgYSBwZXJzb24gaW5kZXBlbmRlbnQgb2YgYSBzcGVjaWZpYyBoZWFsdGgtcmVsYXRlZCBjb250ZXh0LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBlcnNvbiBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUGVyc29uJztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIlBlcnNvblwiO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXIgZm9yIGEgcGVyc29uIHdpdGhpbiBhIHBhcnRpY3VsYXIgc2NvcGUuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI6IGZoaXIuSWRlbnRpZmllcltdO1xyXG4gIC8qKlxyXG4gICAqIFBlcnNvbiBtYXkgaGF2ZSBtdWx0aXBsZSBuYW1lcyB3aXRoIGRpZmZlcmVudCB1c2VzIG9yIGFwcGxpY2FibGUgcGVyaW9kcy5cclxuICAgKi9cclxuICBwdWJsaWMgbmFtZTogZmhpci5IdW1hbk5hbWVbXTtcclxuICAvKipcclxuICAgKiBQZXJzb24gbWF5IGhhdmUgbXVsdGlwbGUgd2F5cyB0byBiZSBjb250YWN0ZWQgd2l0aCBkaWZmZXJlbnQgdXNlcyBvciBhcHBsaWNhYmxlIHBlcmlvZHMuICBNYXkgbmVlZCB0byBoYXZlIG9wdGlvbnMgZm9yIGNvbnRhY3RpbmcgdGhlIHBlcnNvbiB1cmdlbnRseSBhbmQgYWxzbyB0byBoZWxwIHdpdGggaWRlbnRpZmljYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHRlbGVjb206IGZoaXIuQ29udGFjdFBvaW50W107XHJcbiAgLyoqXHJcbiAgICogVGhlIGdlbmRlciBtaWdodCBub3QgbWF0Y2ggdGhlIGJpb2xvZ2ljYWwgc2V4IGFzIGRldGVybWluZWQgYnkgZ2VuZXRpY3MsIG9yIHRoZSBpbmRpdmlkdWFsJ3MgcHJlZmVycmVkIGlkZW50aWZpY2F0aW9uLiBOb3RlIHRoYXQgZm9yIGJvdGggaHVtYW5zIGFuZCBwYXJ0aWN1bGFybHkgYW5pbWFscywgdGhlcmUgYXJlIG90aGVyIGxlZ2l0aW1hdGUgcG9zc2liaWxpdGllcyB0aGFuIE0gYW5kIEYsIHRob3VnaCBhIGNsZWFyIG1ham9yaXR5IG9mIHN5c3RlbXMgYW5kIGNvbnRleHRzIG9ubHkgc3VwcG9ydCBNIGFuZCBGLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZW5kZXI/OiBmaGlyLkZoaXJDb2RlPEFkbWluaXN0cmF0aXZlR2VuZGVyQ29kZVR5cGU+fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBdCBsZWFzdCBhbiBlc3RpbWF0ZWQgeWVhciBzaG91bGQgYmUgcHJvdmlkZWQgYXMgYSBndWVzcyBpZiB0aGUgcmVhbCBET0IgaXMgdW5rbm93bi5cclxuICAgKi9cclxuICBwdWJsaWMgYmlydGhEYXRlPzogZmhpci5GaGlyRGF0ZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUGVyc29uIG1heSBoYXZlIG11bHRpcGxlIGFkZHJlc3NlcyB3aXRoIGRpZmZlcmVudCB1c2VzIG9yIGFwcGxpY2FibGUgcGVyaW9kcy5cclxuICAgKi9cclxuICBwdWJsaWMgYWRkcmVzczogZmhpci5BZGRyZXNzW107XHJcbiAgLyoqXHJcbiAgICogQW4gaW1hZ2UgdGhhdCBjYW4gYmUgZGlzcGxheWVkIGFzIGEgdGh1bWJuYWlsIG9mIHRoZSBwZXJzb24gdG8gZW5oYW5jZSB0aGUgaWRlbnRpZmljYXRpb24gb2YgdGhlIGluZGl2aWR1YWwuXHJcbiAgICovXHJcbiAgcHVibGljIHBob3RvPzogZmhpci5BdHRhY2htZW50fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgb3JnYW5pemF0aW9uIHRoYXQgaXMgdGhlIGN1c3RvZGlhbiBvZiB0aGUgcGVyc29uIHJlY29yZC5cclxuICAgKi9cclxuICBwdWJsaWMgbWFuYWdpbmdPcmdhbml6YXRpb24/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGlzIHBlcnNvbidzIHJlY29yZCBpcyBpbiBhY3RpdmUgdXNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhY3RpdmU/OiBmaGlyLkZoaXJCb29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBMaW5rIHRvIGEgcmVzb3VyY2UgdGhhdCBjb25jZXJucyB0aGUgc2FtZSBhY3R1YWwgcGVyc29uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsaW5rOiBmaGlyLlBlcnNvbkxpbmtbXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBQZXJzb24gLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxQZXJzb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnUGVyc29uJztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ25hbWUnXSkgeyB0aGlzLm5hbWUgPSBzb3VyY2UubmFtZS5tYXAoKHgpID0+IG5ldyBmaGlyLkh1bWFuTmFtZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLm5hbWUgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsndGVsZWNvbSddKSB7IHRoaXMudGVsZWNvbSA9IHNvdXJjZS50ZWxlY29tLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29udGFjdFBvaW50KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMudGVsZWNvbSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydnZW5kZXInXSkgeyB0aGlzLmdlbmRlciA9IG5ldyBmaGlyLkZoaXJDb2RlPEFkbWluaXN0cmF0aXZlR2VuZGVyQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLmdlbmRlcn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydiaXJ0aERhdGUnXSkgeyB0aGlzLmJpcnRoRGF0ZSA9IG5ldyBmaGlyLkZoaXJEYXRlKHt2YWx1ZTogc291cmNlLmJpcnRoRGF0ZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydhZGRyZXNzJ10pIHsgdGhpcy5hZGRyZXNzID0gc291cmNlLmFkZHJlc3MubWFwKCh4KSA9PiBuZXcgZmhpci5BZGRyZXNzKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuYWRkcmVzcyA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydwaG90byddKSB7IHRoaXMucGhvdG8gPSBuZXcgZmhpci5BdHRhY2htZW50KHNvdXJjZS5waG90byk7IH1cclxuICAgIGlmIChzb3VyY2VbJ21hbmFnaW5nT3JnYW5pemF0aW9uJ10pIHsgdGhpcy5tYW5hZ2luZ09yZ2FuaXphdGlvbiA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UubWFuYWdpbmdPcmdhbml6YXRpb24pOyB9XHJcbiAgICBpZiAoc291cmNlWydhY3RpdmUnXSkgeyB0aGlzLmFjdGl2ZSA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHt2YWx1ZTogc291cmNlLmFjdGl2ZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydsaW5rJ10pIHsgdGhpcy5saW5rID0gc291cmNlLmxpbmsubWFwKCh4KSA9PiBuZXcgZmhpci5QZXJzb25MaW5rKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMubGluayA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJlcXVpcmVkLWJvdW5kIFZhbHVlIFNldCBmb3IgZ2VuZGVyIChQZXJzb24uZ2VuZGVyKVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGdlbmRlclJlcXVpcmVkQ29kZXMoKSB7XHJcbiAgICByZXR1cm4gQWRtaW5pc3RyYXRpdmVHZW5kZXJDb2RlcztcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKCk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oKTtcclxuICAgIGlmICghdGhpc1sncmVzb3VyY2VUeXBlJ10pIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ3JlcXVpcmVkJywgZGlhZ25vc3RpY3M6ICdNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5IHJlc291cmNlVHlwZTpcIlBlcnNvblwiIGZoaXI6IFBlcnNvbi5yZXNvdXJjZVR5cGU6XCJQZXJzb25cIicgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1tcImlkZW50aWZpZXJcIl0pIHsgdGhpcy5pZGVudGlmaWVyLmZvckVhY2goKHgpID0+IHsgaXNzdWVzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbigpKTsgfSkgfVxyXG4gICAgaWYgKHRoaXNbXCJuYW1lXCJdKSB7IHRoaXMubmFtZS5mb3JFYWNoKCh4KSA9PiB7IGlzc3Vlcy5wdXNoKC4uLnguZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH0pIH1cclxuICAgIGlmICh0aGlzW1widGVsZWNvbVwiXSkgeyB0aGlzLnRlbGVjb20uZm9yRWFjaCgoeCkgPT4geyBpc3N1ZXMucHVzaCguLi54LmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9KSB9XHJcbiAgICBpZiAodGhpc1snZ2VuZGVyJ10gJiYgKCFPYmplY3QudmFsdWVzKEFkbWluaXN0cmF0aXZlR2VuZGVyQ29kZXMpLmluY2x1ZGVzKHRoaXMuZ2VuZGVyIGFzIGFueSkpKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdjb2RlLWludmFsaWQnLCBkaWFnbm9zdGljczogJ0ludmFsaWQgY29kZSBwcm9wZXJ0eSBnZW5kZXI/OmZoaXIuRmhpckNvZGU8QWRtaW5pc3RyYXRpdmVHZW5kZXJDb2RlVHlwZT4gZmhpcjogUGVyc29uLmdlbmRlcjpjb2RlIFJlcXVpcmVkIGJpbmRpbmcgdG86IEFkbWluaXN0cmF0aXZlR2VuZGVyJyB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzW1wiZ2VuZGVyXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuZ2VuZGVyLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICBpZiAodGhpc1tcImJpcnRoRGF0ZVwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLmJpcnRoRGF0ZS5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJhZGRyZXNzXCJdKSB7IHRoaXMuYWRkcmVzcy5mb3JFYWNoKCh4KSA9PiB7IGlzc3Vlcy5wdXNoKC4uLnguZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH0pIH1cclxuICAgIGlmICh0aGlzW1wicGhvdG9cIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5waG90by5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJtYW5hZ2luZ09yZ2FuaXphdGlvblwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLm1hbmFnaW5nT3JnYW5pemF0aW9uLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICBpZiAodGhpc1tcImFjdGl2ZVwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLmFjdGl2ZS5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJsaW5rXCJdKSB7IHRoaXMubGluay5mb3JFYWNoKCh4KSA9PiB7IGlzc3Vlcy5wdXNoKC4uLnguZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH0pIH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==