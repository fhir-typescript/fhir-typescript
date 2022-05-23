// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Organization
import * as fhir from '../fhir.js';
// @ts-ignore
import { ContactentityTypeCodings, } from '../fhirValueSets/ContactentityTypeCodings.js';
/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export class OrganizationContact extends fhir.BackboneElement {
    /**
     * Default constructor for OrganizationContact - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['purpose']) {
            this.purpose = new fhir.CodeableConcept(source.purpose);
        }
        if (source['name']) {
            this.name = new fhir.HumanName(source.name);
        }
        if (source['telecom']) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x));
        }
        else {
            this.telecom = [];
        }
        if (source['address']) {
            this.address = new fhir.Address(source.address);
        }
    }
    /**
     * Extensible-bound Value Set for purpose (Organization.contact.purpose)
     */
    static get purposeExtensibleCodings() {
        return ContactentityTypeCodings;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        let issues = super.doModelValidation();
        if (this["purpose"]) {
            issues.push(...this.purpose.doModelValidation());
        }
        if (this["name"]) {
            issues.push(...this.name.doModelValidation());
        }
        if (this["telecom"]) {
            this.telecom.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["address"]) {
            issues.push(...this.address.doModelValidation());
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
OrganizationContact._fts_dataType = 'OrganizationContact';
/**
 * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 */
export class Organization extends fhir.DomainResource {
    /**
     * Default constructor for Organization - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Organization';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['active']) {
            this.active = new fhir.FhirBoolean({ value: source.active });
        }
        if (source['type']) {
            this.type = source.type.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.type = [];
        }
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        if (source['alias']) {
            this.alias = source.alias.map((x) => new fhir.FhirString({ value: x }));
        }
        else {
            this.alias = [];
        }
        if (source['telecom']) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x));
        }
        else {
            this.telecom = [];
        }
        if (source['address']) {
            this.address = source.address.map((x) => new fhir.Address(x));
        }
        else {
            this.address = [];
        }
        if (source['partOf']) {
            this.partOf = new fhir.Reference(source.partOf);
        }
        if (source['contact']) {
            this.contact = source.contact.map((x) => new fhir.OrganizationContact(x));
        }
        else {
            this.contact = [];
        }
        if (source['endpoint']) {
            this.endpoint = source.endpoint.map((x) => new fhir.Reference(x));
        }
        else {
            this.endpoint = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        let issues = super.doModelValidation();
        if (!this['resourceType']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"Organization" fhir: Organization.resourceType:"Organization"' });
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["active"]) {
            issues.push(...this.active.doModelValidation());
        }
        if (this["type"]) {
            this.type.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["name"]) {
            issues.push(...this.name.doModelValidation());
        }
        if (this["alias"]) {
            this.alias.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["telecom"]) {
            this.telecom.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["address"]) {
            this.address.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["partOf"]) {
            issues.push(...this.partOf.doModelValidation());
        }
        if (this["contact"]) {
            this.contact.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["endpoint"]) {
            this.endpoint.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Organization._fts_dataType = 'Organization';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JnYW5pemF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9Pcmdhbml6YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBRW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsd0JBQXdCLEdBQStCLE1BQU0sOENBQThDLENBQUM7QUE2QnJIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLG1CQUFvQixTQUFRLElBQUksQ0FBQyxlQUFlO0lBcUIzRDs7T0FFRztJQUNILFlBQVksU0FBMEMsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDaEcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQ25GLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQUU7UUFDcEUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3pGO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FBRTtRQUMzQixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FB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LENBQUMsQ0FBQyxDQUFBO1NBQUU7UUFDaEcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUFFO1FBQ2xHLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBOUZEOztHQUVHO0FBQzZCLDBCQUFhLEdBQVUsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBPcmdhbml6YXRpb25cclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IENvbnRhY3RlbnRpdHlUeXBlQ29kaW5ncywgQ29udGFjdGVudGl0eVR5cGVDb2RpbmdUeXBlLH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Db250YWN0ZW50aXR5VHlwZUNvZGluZ3MuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IENvbnRhY3RlbnRpdHlUeXBlQ29kZXMsICBDb250YWN0ZW50aXR5VHlwZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Db250YWN0ZW50aXR5VHlwZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBPcmdhbml6YXRpb25UeXBlQ29kaW5ncywgT3JnYW5pemF0aW9uVHlwZUNvZGluZ1R5cGUsfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL09yZ2FuaXphdGlvblR5cGVDb2RpbmdzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBPcmdhbml6YXRpb25UeXBlQ29kZXMsICBPcmdhbml6YXRpb25UeXBlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL09yZ2FuaXphdGlvblR5cGVDb2Rlcy5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBPcmdhbml6YXRpb25Db250YWN0IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE9yZ2FuaXphdGlvbkNvbnRhY3RBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgYSBwdXJwb3NlIGZvciB3aGljaCB0aGUgY29udGFjdCBjYW4gYmUgcmVhY2hlZC5cclxuICAgKi9cclxuICBwdXJwb3NlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIG5hbWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250YWN0LlxyXG4gICAqL1xyXG4gIG5hbWU/OiBmaGlyLkh1bWFuTmFtZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgY29udGFjdCBkZXRhaWwgKGUuZy4gYSB0ZWxlcGhvbmUgbnVtYmVyIG9yIGFuIGVtYWlsIGFkZHJlc3MpIGJ5IHdoaWNoIHRoZSBwYXJ0eSBtYXkgYmUgY29udGFjdGVkLlxyXG4gICAqL1xyXG4gIHRlbGVjb20/OiBmaGlyLkNvbnRhY3RQb2ludEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVmlzaXRpbmcgb3IgcG9zdGFsIGFkZHJlc3NlcyBmb3IgdGhlIGNvbnRhY3QuXHJcbiAgICovXHJcbiAgYWRkcmVzcz86IGZoaXIuQWRkcmVzc0FyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogV2hlcmUgbXVsdGlwbGUgY29udGFjdHMgZm9yIHRoZSBzYW1lIHB1cnBvc2UgYXJlIHByb3ZpZGVkIHRoZXJlIGlzIGEgc3RhbmRhcmQgZXh0ZW5zaW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIG9uZSBpcyB0aGUgcHJlZmVycmVkIGNvbnRhY3QgdG8gdXNlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE9yZ2FuaXphdGlvbkNvbnRhY3QgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdPcmdhbml6YXRpb25Db250YWN0JztcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgYSBwdXJwb3NlIGZvciB3aGljaCB0aGUgY29udGFjdCBjYW4gYmUgcmVhY2hlZC5cclxuICAgKi9cclxuICBwdWJsaWMgcHVycG9zZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIG5hbWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250YWN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBuYW1lPzogZmhpci5IdW1hbk5hbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgY29udGFjdCBkZXRhaWwgKGUuZy4gYSB0ZWxlcGhvbmUgbnVtYmVyIG9yIGFuIGVtYWlsIGFkZHJlc3MpIGJ5IHdoaWNoIHRoZSBwYXJ0eSBtYXkgYmUgY29udGFjdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0ZWxlY29tOiBmaGlyLkNvbnRhY3RQb2ludFtdO1xyXG4gIC8qKlxyXG4gICAqIFZpc2l0aW5nIG9yIHBvc3RhbCBhZGRyZXNzZXMgZm9yIHRoZSBjb250YWN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRyZXNzPzogZmhpci5BZGRyZXNzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBPcmdhbml6YXRpb25Db250YWN0IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8T3JnYW5pemF0aW9uQ29udGFjdEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydwdXJwb3NlJ10pIHsgdGhpcy5wdXJwb3NlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5wdXJwb3NlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnbmFtZSddKSB7IHRoaXMubmFtZSA9IG5ldyBmaGlyLkh1bWFuTmFtZShzb3VyY2UubmFtZSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3RlbGVjb20nXSkgeyB0aGlzLnRlbGVjb20gPSBzb3VyY2UudGVsZWNvbS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvbnRhY3RQb2ludCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnRlbGVjb20gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYWRkcmVzcyddKSB7IHRoaXMuYWRkcmVzcyA9IG5ldyBmaGlyLkFkZHJlc3Moc291cmNlLmFkZHJlc3MpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEV4dGVuc2libGUtYm91bmQgVmFsdWUgU2V0IGZvciBwdXJwb3NlIChPcmdhbml6YXRpb24uY29udGFjdC5wdXJwb3NlKVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHB1cnBvc2VFeHRlbnNpYmxlQ29kaW5ncygpIHtcclxuICAgIHJldHVybiBDb250YWN0ZW50aXR5VHlwZUNvZGluZ3M7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbigpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKCk7XHJcbiAgICBpZiAodGhpc1tcInB1cnBvc2VcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5wdXJwb3NlLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICBpZiAodGhpc1tcIm5hbWVcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5uYW1lLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICBpZiAodGhpc1tcInRlbGVjb21cIl0pIHsgdGhpcy50ZWxlY29tLmZvckVhY2goKHgpID0+IHsgaXNzdWVzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbigpKTsgfSkgfVxyXG4gICAgaWYgKHRoaXNbXCJhZGRyZXNzXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuYWRkcmVzcy5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIE9yZ2FuaXphdGlvbiB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBPcmdhbml6YXRpb25BcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJPcmdhbml6YXRpb25cInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllciBmb3IgdGhlIG9yZ2FuaXphdGlvbiB0aGF0IGlzIHVzZWQgdG8gaWRlbnRpZnkgdGhlIG9yZ2FuaXphdGlvbiBhY3Jvc3MgbXVsdGlwbGUgZGlzcGFyYXRlIHN5c3RlbXMuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBhY3RpdmUgZmxhZyBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCB0byBtYXJrIGFuIG9yZ2FuaXphdGlvbiBhcyB0ZW1wb3JhcmlseSBjbG9zZWQgb3IgdW5kZXIgY29uc3RydWN0aW9uLiBJbnN0ZWFkIHRoZSBMb2NhdGlvbihzKSB3aXRoaW4gdGhlIE9yZ2FuaXphdGlvbiBzaG91bGQgaGF2ZSB0aGUgc3VzcGVuZGVkIHN0YXR1cy4gSWYgZnVydGhlciBkZXRhaWxzIG9mIHRoZSByZWFzb24gZm9yIHRoZSBzdXNwZW5zaW9uIGFyZSByZXF1aXJlZCwgdGhlbiBhbiBleHRlbnNpb24gb24gdGhpcyBlbGVtZW50IHNob3VsZCBiZSB1c2VkLlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSBpdCBtYXkgYmUgdXNlZCB0byBtYXJrIHRoYXQgdGhlIHJlc291cmNlIHdhcyBjcmVhdGVkIGluIGVycm9yLlxyXG4gICAqL1xyXG4gIGFjdGl2ZT86IGZoaXIuRmhpckJvb2xlYW58Ym9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogT3JnYW5pemF0aW9ucyBjYW4gYmUgY29ycG9yYXRpb25zLCB3YXJkcywgc2VjdGlvbnMsIGNsaW5pY2FsIHRlYW1zLCBnb3Zlcm5tZW50IGRlcGFydG1lbnRzLCBldGMuIE5vdGUgdGhhdCBjb2RlIGlzIGdlbmVyYWxseSBhIGNsYXNzaWZpZXIgb2YgdGhlIHR5cGUgb2Ygb3JnYW5pemF0aW9uOyBpbiBtYW55IGFwcGxpY2F0aW9ucywgY29kZXMgYXJlIHVzZWQgdG8gaWRlbnRpdHkgYSBwYXJ0aWN1bGFyIG9yZ2FuaXphdGlvbiAoc2F5LCB3YXJkKSBhcyBvcHBvc2VkIHRvIGFub3RoZXIgb2YgdGhlIHNhbWUgdHlwZSAtIHRoZXNlIGFyZSBpZGVudGlmaWVycywgbm90IGNvZGVzXHJcbiAgICogV2hlbiBjb25zaWRlcmluZyBpZiBtdWx0aXBsZSB0eXBlcyBhcmUgYXBwcm9wcmlhdGUsIHlvdSBzaG91bGQgZXZhbHVhdGUgaWYgY2hpbGQgb3JnYW5pemF0aW9ucyB3b3VsZCBiZSBhIG1vcmUgYXBwcm9wcmlhdGUgdXNlIG9mIHRoZSBjb25jZXB0LCBhcyBkaWZmZXJlbnQgdHlwZXMgbGlrZWx5IGFyZSBpbiBkaWZmZXJlbnQgc3ViLWFyZWFzIG9mIHRoZSBvcmdhbml6YXRpb24uIFRoaXMgaXMgbW9zdCBsaWtlbHkgdG8gYmUgdXNlZCB3aGVyZSB0eXBlIHZhbHVlcyBoYXZlIG9ydGhvZ29uYWwgdmFsdWVzLCBzdWNoIGFzIGEgcmVsaWdpb3VzLCBhY2FkZW1pYyBhbmQgbWVkaWNhbCBjZW50ZXIuXHJcbiAgICogV2UgZXhwZWN0IHRoYXQgc29tZSBqdXJpc2RpY3Rpb25zIHdpbGwgcHJvZmlsZSB0aGlzIG9wdGlvbmFsaXR5IHRvIGJlIGEgc2luZ2xlIGNhcmRpbmFsaXR5LlxyXG4gICAqL1xyXG4gIHR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIG5hbWUgb2YgYW4gb3JnYW5pemF0aW9uIGNoYW5nZXMsIGNvbnNpZGVyIHB1dHRpbmcgdGhlIG9sZCBuYW1lIGluIHRoZSBhbGlhcyBjb2x1bW4gc28gdGhhdCBpdCBjYW4gc3RpbGwgYmUgbG9jYXRlZCB0aHJvdWdoIHNlYXJjaGVzLlxyXG4gICAqL1xyXG4gIG5hbWU/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGVyZSBhcmUgbm8gZGF0ZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBhbGlhcy9oaXN0b3JpYyBuYW1lcywgYXMgdGhpcyBpcyBub3QgaW50ZW5kZWQgdG8gdHJhY2sgd2hlbiBuYW1lcyB3ZXJlIHVzZWQsIGJ1dCB0byBhc3Npc3QgaW4gc2VhcmNoaW5nIHNvIHRoYXQgb2xkZXIgbmFtZXMgY2FuIHN0aWxsIHJlc3VsdCBpbiBpZGVudGlmeWluZyB0aGUgb3JnYW5pemF0aW9uLlxyXG4gICAqL1xyXG4gIGFsaWFzPzogZmhpci5GaGlyU3RyaW5nW118c3RyaW5nW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB1c2UgY29kZSAnaG9tZScgaXMgbm90IHRvIGJlIHVzZWQuIE5vdGUgdGhhdCB0aGVzZSBjb250YWN0cyBhcmUgbm90IHRoZSBjb250YWN0IGRldGFpbHMgb2YgcGVvcGxlIHdobyBhcmUgZW1wbG95ZWQgYnkgb3IgcmVwcmVzZW50IHRoZSBvcmdhbml6YXRpb24sIGJ1dCBvZmZpY2lhbCBjb250YWN0cyBmb3IgdGhlIG9yZ2FuaXphdGlvbiBpdHNlbGYuXHJcbiAgICovXHJcbiAgdGVsZWNvbT86IGZoaXIuQ29udGFjdFBvaW50QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBPcmdhbml6YXRpb24gbWF5IGhhdmUgbXVsdGlwbGUgYWRkcmVzc2VzIHdpdGggZGlmZmVyZW50IHVzZXMgb3IgYXBwbGljYWJsZSBwZXJpb2RzLiBUaGUgdXNlIGNvZGUgJ2hvbWUnIGlzIG5vdCB0byBiZSB1c2VkLlxyXG4gICAqL1xyXG4gIGFkZHJlc3M/OiBmaGlyLkFkZHJlc3NBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvcmdhbml6YXRpb24gb2Ygd2hpY2ggdGhpcyBvcmdhbml6YXRpb24gZm9ybXMgYSBwYXJ0LlxyXG4gICAqL1xyXG4gIHBhcnRPZj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlcmUgbXVsdGlwbGUgY29udGFjdHMgZm9yIHRoZSBzYW1lIHB1cnBvc2UgYXJlIHByb3ZpZGVkIHRoZXJlIGlzIGEgc3RhbmRhcmQgZXh0ZW5zaW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIG9uZSBpcyB0aGUgcHJlZmVycmVkIGNvbnRhY3QgdG8gdXNlLlxyXG4gICAqL1xyXG4gIGNvbnRhY3Q/OiBmaGlyLk9yZ2FuaXphdGlvbkNvbnRhY3RBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRlY2huaWNhbCBlbmRwb2ludHMgcHJvdmlkaW5nIGFjY2VzcyB0byBzZXJ2aWNlcyBvcGVyYXRlZCBmb3IgdGhlIG9yZ2FuaXphdGlvbi5cclxuICAgKi9cclxuICBlbmRwb2ludD86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgZm9ybWFsbHkgb3IgaW5mb3JtYWxseSByZWNvZ25pemVkIGdyb3VwaW5nIG9mIHBlb3BsZSBvciBvcmdhbml6YXRpb25zIGZvcm1lZCBmb3IgdGhlIHB1cnBvc2Ugb2YgYWNoaWV2aW5nIHNvbWUgZm9ybSBvZiBjb2xsZWN0aXZlIGFjdGlvbi4gIEluY2x1ZGVzIGNvbXBhbmllcywgaW5zdGl0dXRpb25zLCBjb3Jwb3JhdGlvbnMsIGRlcGFydG1lbnRzLCBjb21tdW5pdHkgZ3JvdXBzLCBoZWFsdGhjYXJlIHByYWN0aWNlIGdyb3VwcywgcGF5ZXIvaW5zdXJlciwgZXRjLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE9yZ2FuaXphdGlvbiBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnT3JnYW5pemF0aW9uJztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIk9yZ2FuaXphdGlvblwiO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXIgZm9yIHRoZSBvcmdhbml6YXRpb24gdGhhdCBpcyB1c2VkIHRvIGlkZW50aWZ5IHRoZSBvcmdhbml6YXRpb24gYWNyb3NzIG11bHRpcGxlIGRpc3BhcmF0ZSBzeXN0ZW1zLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBUaGlzIGFjdGl2ZSBmbGFnIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIHRvIG1hcmsgYW4gb3JnYW5pemF0aW9uIGFzIHRlbXBvcmFyaWx5IGNsb3NlZCBvciB1bmRlciBjb25zdHJ1Y3Rpb24uIEluc3RlYWQgdGhlIExvY2F0aW9uKHMpIHdpdGhpbiB0aGUgT3JnYW5pemF0aW9uIHNob3VsZCBoYXZlIHRoZSBzdXNwZW5kZWQgc3RhdHVzLiBJZiBmdXJ0aGVyIGRldGFpbHMgb2YgdGhlIHJlYXNvbiBmb3IgdGhlIHN1c3BlbnNpb24gYXJlIHJlcXVpcmVkLCB0aGVuIGFuIGV4dGVuc2lvbiBvbiB0aGlzIGVsZW1lbnQgc2hvdWxkIGJlIHVzZWQuXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIGl0IG1heSBiZSB1c2VkIHRvIG1hcmsgdGhhdCB0aGUgcmVzb3VyY2Ugd2FzIGNyZWF0ZWQgaW4gZXJyb3IuXHJcbiAgICovXHJcbiAgcHVibGljIGFjdGl2ZT86IGZoaXIuRmhpckJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE9yZ2FuaXphdGlvbnMgY2FuIGJlIGNvcnBvcmF0aW9ucywgd2FyZHMsIHNlY3Rpb25zLCBjbGluaWNhbCB0ZWFtcywgZ292ZXJubWVudCBkZXBhcnRtZW50cywgZXRjLiBOb3RlIHRoYXQgY29kZSBpcyBnZW5lcmFsbHkgYSBjbGFzc2lmaWVyIG9mIHRoZSB0eXBlIG9mIG9yZ2FuaXphdGlvbjsgaW4gbWFueSBhcHBsaWNhdGlvbnMsIGNvZGVzIGFyZSB1c2VkIHRvIGlkZW50aXR5IGEgcGFydGljdWxhciBvcmdhbml6YXRpb24gKHNheSwgd2FyZCkgYXMgb3Bwb3NlZCB0byBhbm90aGVyIG9mIHRoZSBzYW1lIHR5cGUgLSB0aGVzZSBhcmUgaWRlbnRpZmllcnMsIG5vdCBjb2Rlc1xyXG4gICAqIFdoZW4gY29uc2lkZXJpbmcgaWYgbXVsdGlwbGUgdHlwZXMgYXJlIGFwcHJvcHJpYXRlLCB5b3Ugc2hvdWxkIGV2YWx1YXRlIGlmIGNoaWxkIG9yZ2FuaXphdGlvbnMgd291bGQgYmUgYSBtb3JlIGFwcHJvcHJpYXRlIHVzZSBvZiB0aGUgY29uY2VwdCwgYXMgZGlmZmVyZW50IHR5cGVzIGxpa2VseSBhcmUgaW4gZGlmZmVyZW50IHN1Yi1hcmVhcyBvZiB0aGUgb3JnYW5pemF0aW9uLiBUaGlzIGlzIG1vc3QgbGlrZWx5IHRvIGJlIHVzZWQgd2hlcmUgdHlwZSB2YWx1ZXMgaGF2ZSBvcnRob2dvbmFsIHZhbHVlcywgc3VjaCBhcyBhIHJlbGlnaW91cywgYWNhZGVtaWMgYW5kIG1lZGljYWwgY2VudGVyLlxyXG4gICAqIFdlIGV4cGVjdCB0aGF0IHNvbWUganVyaXNkaWN0aW9ucyB3aWxsIHByb2ZpbGUgdGhpcyBvcHRpb25hbGl0eSB0byBiZSBhIHNpbmdsZSBjYXJkaW5hbGl0eS5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZTogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBJZiB0aGUgbmFtZSBvZiBhbiBvcmdhbml6YXRpb24gY2hhbmdlcywgY29uc2lkZXIgcHV0dGluZyB0aGUgb2xkIG5hbWUgaW4gdGhlIGFsaWFzIGNvbHVtbiBzbyB0aGF0IGl0IGNhbiBzdGlsbCBiZSBsb2NhdGVkIHRocm91Z2ggc2VhcmNoZXMuXHJcbiAgICovXHJcbiAgcHVibGljIG5hbWU/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZXJlIGFyZSBubyBkYXRlcyBhc3NvY2lhdGVkIHdpdGggdGhlIGFsaWFzL2hpc3RvcmljIG5hbWVzLCBhcyB0aGlzIGlzIG5vdCBpbnRlbmRlZCB0byB0cmFjayB3aGVuIG5hbWVzIHdlcmUgdXNlZCwgYnV0IHRvIGFzc2lzdCBpbiBzZWFyY2hpbmcgc28gdGhhdCBvbGRlciBuYW1lcyBjYW4gc3RpbGwgcmVzdWx0IGluIGlkZW50aWZ5aW5nIHRoZSBvcmdhbml6YXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIGFsaWFzOiBmaGlyLkZoaXJTdHJpbmdbXTtcclxuICAvKipcclxuICAgKiBUaGUgdXNlIGNvZGUgJ2hvbWUnIGlzIG5vdCB0byBiZSB1c2VkLiBOb3RlIHRoYXQgdGhlc2UgY29udGFjdHMgYXJlIG5vdCB0aGUgY29udGFjdCBkZXRhaWxzIG9mIHBlb3BsZSB3aG8gYXJlIGVtcGxveWVkIGJ5IG9yIHJlcHJlc2VudCB0aGUgb3JnYW5pemF0aW9uLCBidXQgb2ZmaWNpYWwgY29udGFjdHMgZm9yIHRoZSBvcmdhbml6YXRpb24gaXRzZWxmLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0ZWxlY29tOiBmaGlyLkNvbnRhY3RQb2ludFtdO1xyXG4gIC8qKlxyXG4gICAqIE9yZ2FuaXphdGlvbiBtYXkgaGF2ZSBtdWx0aXBsZSBhZGRyZXNzZXMgd2l0aCBkaWZmZXJlbnQgdXNlcyBvciBhcHBsaWNhYmxlIHBlcmlvZHMuIFRoZSB1c2UgY29kZSAnaG9tZScgaXMgbm90IHRvIGJlIHVzZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGFkZHJlc3M6IGZoaXIuQWRkcmVzc1tdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvcmdhbml6YXRpb24gb2Ygd2hpY2ggdGhpcyBvcmdhbml6YXRpb24gZm9ybXMgYSBwYXJ0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwYXJ0T2Y/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlcmUgbXVsdGlwbGUgY29udGFjdHMgZm9yIHRoZSBzYW1lIHB1cnBvc2UgYXJlIHByb3ZpZGVkIHRoZXJlIGlzIGEgc3RhbmRhcmQgZXh0ZW5zaW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIG9uZSBpcyB0aGUgcHJlZmVycmVkIGNvbnRhY3QgdG8gdXNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb250YWN0OiBmaGlyLk9yZ2FuaXphdGlvbkNvbnRhY3RbXTtcclxuICAvKipcclxuICAgKiBUZWNobmljYWwgZW5kcG9pbnRzIHByb3ZpZGluZyBhY2Nlc3MgdG8gc2VydmljZXMgb3BlcmF0ZWQgZm9yIHRoZSBvcmdhbml6YXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIGVuZHBvaW50OiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIE9yZ2FuaXphdGlvbiAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPE9yZ2FuaXphdGlvbkFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdPcmdhbml6YXRpb24nO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYWN0aXZlJ10pIHsgdGhpcy5hY3RpdmUgPSBuZXcgZmhpci5GaGlyQm9vbGVhbih7dmFsdWU6IHNvdXJjZS5hY3RpdmV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsndHlwZSddKSB7IHRoaXMudHlwZSA9IHNvdXJjZS50eXBlLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMudHlwZSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWyduYW1lJ10pIHsgdGhpcy5uYW1lID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5uYW1lfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2FsaWFzJ10pIHsgdGhpcy5hbGlhcyA9IHNvdXJjZS5hbGlhcy5tYXAoKHgpID0+IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiB4fSkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5hbGlhcyA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWyd0ZWxlY29tJ10pIHsgdGhpcy50ZWxlY29tID0gc291cmNlLnRlbGVjb20ubWFwKCh4KSA9PiBuZXcgZmhpci5Db250YWN0UG9pbnQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50ZWxlY29tID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2FkZHJlc3MnXSkgeyB0aGlzLmFkZHJlc3MgPSBzb3VyY2UuYWRkcmVzcy5tYXAoKHgpID0+IG5ldyBmaGlyLkFkZHJlc3MoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5hZGRyZXNzID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3BhcnRPZiddKSB7IHRoaXMucGFydE9mID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5wYXJ0T2YpOyB9XHJcbiAgICBpZiAoc291cmNlWydjb250YWN0J10pIHsgdGhpcy5jb250YWN0ID0gc291cmNlLmNvbnRhY3QubWFwKCh4KSA9PiBuZXcgZmhpci5Pcmdhbml6YXRpb25Db250YWN0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29udGFjdCA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydlbmRwb2ludCddKSB7IHRoaXMuZW5kcG9pbnQgPSBzb3VyY2UuZW5kcG9pbnQubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5lbmRwb2ludCA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbigpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXNbJ3Jlc291cmNlVHlwZSddKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdyZXF1aXJlZCcsIGRpYWdub3N0aWNzOiAnTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSByZXNvdXJjZVR5cGU6XCJPcmdhbml6YXRpb25cIiBmaGlyOiBPcmdhbml6YXRpb24ucmVzb3VyY2VUeXBlOlwiT3JnYW5pemF0aW9uXCInIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXNbXCJpZGVudGlmaWVyXCJdKSB7IHRoaXMuaWRlbnRpZmllci5mb3JFYWNoKCh4KSA9PiB7IGlzc3Vlcy5wdXNoKC4uLnguZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH0pIH1cclxuICAgIGlmICh0aGlzW1wiYWN0aXZlXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuYWN0aXZlLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICBpZiAodGhpc1tcInR5cGVcIl0pIHsgdGhpcy50eXBlLmZvckVhY2goKHgpID0+IHsgaXNzdWVzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbigpKTsgfSkgfVxyXG4gICAgaWYgKHRoaXNbXCJuYW1lXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMubmFtZS5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJhbGlhc1wiXSkgeyB0aGlzLmFsaWFzLmZvckVhY2goKHgpID0+IHsgaXNzdWVzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbigpKTsgfSkgfVxyXG4gICAgaWYgKHRoaXNbXCJ0ZWxlY29tXCJdKSB7IHRoaXMudGVsZWNvbS5mb3JFYWNoKCh4KSA9PiB7IGlzc3Vlcy5wdXNoKC4uLnguZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH0pIH1cclxuICAgIGlmICh0aGlzW1wiYWRkcmVzc1wiXSkgeyB0aGlzLmFkZHJlc3MuZm9yRWFjaCgoeCkgPT4geyBpc3N1ZXMucHVzaCguLi54LmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9KSB9XHJcbiAgICBpZiAodGhpc1tcInBhcnRPZlwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLnBhcnRPZi5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJjb250YWN0XCJdKSB7IHRoaXMuY29udGFjdC5mb3JFYWNoKCh4KSA9PiB7IGlzc3Vlcy5wdXNoKC4uLnguZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH0pIH1cclxuICAgIGlmICh0aGlzW1wiZW5kcG9pbnRcIl0pIHsgdGhpcy5lbmRwb2ludC5mb3JFYWNoKCh4KSA9PiB7IGlzc3Vlcy5wdXNoKC4uLnguZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH0pIH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==