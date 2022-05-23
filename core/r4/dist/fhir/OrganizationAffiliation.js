// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: OrganizationAffiliation
import * as fhir from '../fhir.js';
// @ts-ignore
import { C80PracticeCodesCodings, } from '../fhirValueSets/C80PracticeCodesCodings.js';
/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 */
export class OrganizationAffiliation extends fhir.DomainResource {
    /**
     * Default constructor for OrganizationAffiliation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'OrganizationAffiliation';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['active']) {
            this.active = new fhir.FhirBoolean({ value: source.active });
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['organization']) {
            this.organization = new fhir.Reference(source.organization);
        }
        if (source['participatingOrganization']) {
            this.participatingOrganization = new fhir.Reference(source.participatingOrganization);
        }
        if (source['network']) {
            this.network = source.network.map((x) => new fhir.Reference(x));
        }
        else {
            this.network = [];
        }
        if (source['code']) {
            this.code = source.code.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.code = [];
        }
        if (source['specialty']) {
            this.specialty = source.specialty.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.specialty = [];
        }
        if (source['location']) {
            this.location = source.location.map((x) => new fhir.Reference(x));
        }
        else {
            this.location = [];
        }
        if (source['healthcareService']) {
            this.healthcareService = source.healthcareService.map((x) => new fhir.Reference(x));
        }
        else {
            this.healthcareService = [];
        }
        if (source['telecom']) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x));
        }
        else {
            this.telecom = [];
        }
        if (source['endpoint']) {
            this.endpoint = source.endpoint.map((x) => new fhir.Reference(x));
        }
        else {
            this.endpoint = [];
        }
    }
    /**
     * Preferred-bound Value Set for specialty (OrganizationAffiliation.specialty)
     */
    static get specialtyPreferredCodings() {
        return C80PracticeCodesCodings;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        let issues = super.doModelValidation();
        if (!this['resourceType']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"OrganizationAffiliation" fhir: OrganizationAffiliation.resourceType:"OrganizationAffiliation"' });
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["active"]) {
            issues.push(...this.active.doModelValidation());
        }
        if (this["period"]) {
            issues.push(...this.period.doModelValidation());
        }
        if (this["organization"]) {
            issues.push(...this.organization.doModelValidation());
        }
        if (this["participatingOrganization"]) {
            issues.push(...this.participatingOrganization.doModelValidation());
        }
        if (this["network"]) {
            this.network.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["code"]) {
            this.code.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["specialty"]) {
            this.specialty.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["location"]) {
            this.location.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["healthcareService"]) {
            this.healthcareService.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["telecom"]) {
            this.telecom.forEach((x) => { issues.push(...x.doModelValidation()); });
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
OrganizationAffiliation._fts_dataType = 'OrganizationAffiliation';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JnYW5pemF0aW9uQWZmaWxpYXRpb24uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL09yZ2FuaXphdGlvbkFmZmlsaWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHlDQUF5QztBQUV6QyxPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQU1uQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLHVCQUF1QixHQUE4QixNQUFNLDZDQUE2QyxDQUFDO0FBNkRsSDs7R0FFRztBQUNILE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxJQUFJLENBQUMsY0FBYztJQXlEOUQ7O09BRUc7SUFDSCxZQUFZLFNBQThDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3BHLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyx5QkFBeUIsQ0FBQztRQUM5QyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDaEc7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNyRixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUFFO1FBQ3ZFLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQUU7UUFDNUYsSUFBSSxNQUFNLENBQUMsMkJBQTJCLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FBRTtRQUNuSSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDdEY7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzNCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUNuRjtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDeEIsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2xHO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM3QixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDekY7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzVCLElBQUksTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUNwSDtZQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUNyQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDekY7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzNCLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUN6RjtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQUU7SUFDOUIsQ0FBQztJQUNEOztPQUVHO0lBQ0ksTUFBTSxLQUFLLHlCQUF5QjtRQUN6QyxPQUFPLHVCQUF1QixDQUFDO0lBQ2pDLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQjtRQUMvQixJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSx1SUFBdUksRUFBRSxDQUFDLENBQUM7U0FDNU07UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQUU7UUFDdEcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hFLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDcEYsSUFBSSxJQUFJLENBQUMsMkJBQTJCLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUFFO1FBQ2hHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FBRTtRQUMxRixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQUU7UUFDcEcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUFFO1FBQ2xHLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQUU7UUFDcEgsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUFFO1FBQ2hHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FBRTtRQUNsRyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQTlHRDs7R0FFRztBQUM2QixxQ0FBYSxHQUFVLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBPcmdhbml6YXRpb25BZmZpbGlhdGlvblxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgT3JnYW5pemF0aW9uUm9sZUNvZGluZ3MsIE9yZ2FuaXphdGlvblJvbGVDb2RpbmdUeXBlLH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Pcmdhbml6YXRpb25Sb2xlQ29kaW5ncy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgT3JnYW5pemF0aW9uUm9sZUNvZGVzLCAgT3JnYW5pemF0aW9uUm9sZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Pcmdhbml6YXRpb25Sb2xlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEM4MFByYWN0aWNlQ29kZXNDb2RpbmdzLCBDODBQcmFjdGljZUNvZGVzQ29kaW5nVHlwZSx9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQzgwUHJhY3RpY2VDb2Rlc0NvZGluZ3MuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEM4MFByYWN0aWNlQ29kZXNDb2RlcywgIEM4MFByYWN0aWNlQ29kZXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQzgwUHJhY3RpY2VDb2Rlc0NvZGVzLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIE9yZ2FuaXphdGlvbkFmZmlsaWF0aW9uIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE9yZ2FuaXphdGlvbkFmZmlsaWF0aW9uQXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiT3JnYW5pemF0aW9uQWZmaWxpYXRpb25cInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQnVzaW5lc3MgaWRlbnRpZmllcnMgdGhhdCBhcmUgc3BlY2lmaWMgdG8gdGhpcyByb2xlLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoaXMgdmFsdWUgaXMgZmFsc2UsIHlvdSBtYXkgcmVmZXIgdG8gdGhlIHBlcmlvZCB0byBzZWUgd2hlbiB0aGUgcm9sZSB3YXMgaW4gYWN0aXZlIHVzZS4gSWYgdGhlcmUgaXMgbm8gcGVyaW9kIHNwZWNpZmllZCwgbm8gaW5mZXJlbmNlIGNhbiBiZSBtYWRlIGFib3V0IHdoZW4gaXQgd2FzIGFjdGl2ZS5cclxuICAgKi9cclxuICBhY3RpdmU/OiBmaGlyLkZoaXJCb29sZWFufGJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJpb2QgZHVyaW5nIHdoaWNoIHRoZSBwYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uIGlzIGFmZmlsaWF0ZWQgd2l0aCB0aGUgcHJpbWFyeSBvcmdhbml6YXRpb24uXHJcbiAgICovXHJcbiAgcGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBPcmdhbml6YXRpb24gd2hlcmUgdGhlIHJvbGUgaXMgYXZhaWxhYmxlIChwcmltYXJ5IG9yZ2FuaXphdGlvbi9oYXMgbWVtYmVycykuXHJcbiAgICovXHJcbiAgb3JnYW5pemF0aW9uPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgUGFydGljaXBhdGluZyBPcmdhbml6YXRpb24gcHJvdmlkZXMvcGVyZm9ybXMgdGhlIHJvbGUocykgZGVmaW5lZCBieSB0aGUgY29kZSB0byB0aGUgUHJpbWFyeSBPcmdhbml6YXRpb24gKGUuZy4gcHJvdmlkaW5nIHNlcnZpY2VzIG9yIGlzIGEgbWVtYmVyIG9mKS5cclxuICAgKi9cclxuICBwYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBIZWFsdGggaW5zdXJhbmNlIHByb3ZpZGVyIG5ldHdvcmsgaW4gd2hpY2ggdGhlIHBhcnRpY2lwYXRpbmdPcmdhbml6YXRpb24gcHJvdmlkZXMgdGhlIHJvbGUncyBzZXJ2aWNlcyAoaWYgZGVmaW5lZCkgYXQgdGhlIGluZGljYXRlZCBsb2NhdGlvbnMgKGlmIGRlZmluZWQpLlxyXG4gICAqL1xyXG4gIG5ldHdvcms/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmaW5pdGlvbiBvZiB0aGUgcm9sZSB0aGUgcGFydGljaXBhdGluZ09yZ2FuaXphdGlvbiBwbGF5cyBpbiB0aGUgYXNzb2NpYXRpb24uXHJcbiAgICovXHJcbiAgY29kZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTcGVjaWZpYyBzcGVjaWFsdHkgb2YgdGhlIHBhcnRpY2lwYXRpbmdPcmdhbml6YXRpb24gaW4gdGhlIGNvbnRleHQgb2YgdGhlIHJvbGUuXHJcbiAgICovXHJcbiAgc3BlY2lhbHR5PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsb2NhdGlvbihzKSBhdCB3aGljaCB0aGUgcm9sZSBvY2N1cnMuXHJcbiAgICovXHJcbiAgbG9jYXRpb24/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSGVhbHRoY2FyZSBzZXJ2aWNlcyBwcm92aWRlZCB0aHJvdWdoIHRoZSByb2xlLlxyXG4gICAqL1xyXG4gIGhlYWx0aGNhcmVTZXJ2aWNlPzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIENvbnRhY3QgZGV0YWlscyBhdCB0aGUgcGFydGljaXBhdGluZ09yZ2FuaXphdGlvbiByZWxldmFudCB0byB0aGlzIEFmZmlsaWF0aW9uLlxyXG4gICAqL1xyXG4gIHRlbGVjb20/OiBmaGlyLkNvbnRhY3RQb2ludEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGVjaG5pY2FsIGVuZHBvaW50cyBwcm92aWRpbmcgYWNjZXNzIHRvIHNlcnZpY2VzIG9wZXJhdGVkIGZvciB0aGlzIHJvbGUuXHJcbiAgICovXHJcbiAgZW5kcG9pbnQ/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGFuIGFmZmlsaWF0aW9uL2Fzc290aWF0aW9uL3JlbGF0aW9uc2hpcCBiZXR3ZWVuIDIgZGlzdGluY3Qgb2dhbml6YXRpb25zLCB0aGF0IGlzIG5vdCBhIHBhcnQtb2YgcmVsYXRpb25zaGlwL3N1Yi1kaXZpc2lvbiByZWxhdGlvbnNoaXAuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgT3JnYW5pemF0aW9uQWZmaWxpYXRpb24gZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ09yZ2FuaXphdGlvbkFmZmlsaWF0aW9uJztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIk9yZ2FuaXphdGlvbkFmZmlsaWF0aW9uXCI7XHJcbiAgLyoqXHJcbiAgICogQnVzaW5lc3MgaWRlbnRpZmllcnMgdGhhdCBhcmUgc3BlY2lmaWMgdG8gdGhpcyByb2xlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBJZiB0aGlzIHZhbHVlIGlzIGZhbHNlLCB5b3UgbWF5IHJlZmVyIHRvIHRoZSBwZXJpb2QgdG8gc2VlIHdoZW4gdGhlIHJvbGUgd2FzIGluIGFjdGl2ZSB1c2UuIElmIHRoZXJlIGlzIG5vIHBlcmlvZCBzcGVjaWZpZWQsIG5vIGluZmVyZW5jZSBjYW4gYmUgbWFkZSBhYm91dCB3aGVuIGl0IHdhcyBhY3RpdmUuXHJcbiAgICovXHJcbiAgcHVibGljIGFjdGl2ZT86IGZoaXIuRmhpckJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJpb2QgZHVyaW5nIHdoaWNoIHRoZSBwYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uIGlzIGFmZmlsaWF0ZWQgd2l0aCB0aGUgcHJpbWFyeSBvcmdhbml6YXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHBlcmlvZD86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBPcmdhbml6YXRpb24gd2hlcmUgdGhlIHJvbGUgaXMgYXZhaWxhYmxlIChwcmltYXJ5IG9yZ2FuaXphdGlvbi9oYXMgbWVtYmVycykuXHJcbiAgICovXHJcbiAgcHVibGljIG9yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgUGFydGljaXBhdGluZyBPcmdhbml6YXRpb24gcHJvdmlkZXMvcGVyZm9ybXMgdGhlIHJvbGUocykgZGVmaW5lZCBieSB0aGUgY29kZSB0byB0aGUgUHJpbWFyeSBPcmdhbml6YXRpb24gKGUuZy4gcHJvdmlkaW5nIHNlcnZpY2VzIG9yIGlzIGEgbWVtYmVyIG9mKS5cclxuICAgKi9cclxuICBwdWJsaWMgcGFydGljaXBhdGluZ09yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBIZWFsdGggaW5zdXJhbmNlIHByb3ZpZGVyIG5ldHdvcmsgaW4gd2hpY2ggdGhlIHBhcnRpY2lwYXRpbmdPcmdhbml6YXRpb24gcHJvdmlkZXMgdGhlIHJvbGUncyBzZXJ2aWNlcyAoaWYgZGVmaW5lZCkgYXQgdGhlIGluZGljYXRlZCBsb2NhdGlvbnMgKGlmIGRlZmluZWQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBuZXR3b3JrOiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmluaXRpb24gb2YgdGhlIHJvbGUgdGhlIHBhcnRpY2lwYXRpbmdPcmdhbml6YXRpb24gcGxheXMgaW4gdGhlIGFzc29jaWF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2RlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmljIHNwZWNpYWx0eSBvZiB0aGUgcGFydGljaXBhdGluZ09yZ2FuaXphdGlvbiBpbiB0aGUgY29udGV4dCBvZiB0aGUgcm9sZS5cclxuICAgKi9cclxuICBwdWJsaWMgc3BlY2lhbHR5OiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsb2NhdGlvbihzKSBhdCB3aGljaCB0aGUgcm9sZSBvY2N1cnMuXHJcbiAgICovXHJcbiAgcHVibGljIGxvY2F0aW9uOiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIEhlYWx0aGNhcmUgc2VydmljZXMgcHJvdmlkZWQgdGhyb3VnaCB0aGUgcm9sZS5cclxuICAgKi9cclxuICBwdWJsaWMgaGVhbHRoY2FyZVNlcnZpY2U6IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogQ29udGFjdCBkZXRhaWxzIGF0IHRoZSBwYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uIHJlbGV2YW50IHRvIHRoaXMgQWZmaWxpYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHRlbGVjb206IGZoaXIuQ29udGFjdFBvaW50W107XHJcbiAgLyoqXHJcbiAgICogVGVjaG5pY2FsIGVuZHBvaW50cyBwcm92aWRpbmcgYWNjZXNzIHRvIHNlcnZpY2VzIG9wZXJhdGVkIGZvciB0aGlzIHJvbGUuXHJcbiAgICovXHJcbiAgcHVibGljIGVuZHBvaW50OiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIE9yZ2FuaXphdGlvbkFmZmlsaWF0aW9uIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8T3JnYW5pemF0aW9uQWZmaWxpYXRpb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnT3JnYW5pemF0aW9uQWZmaWxpYXRpb24nO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYWN0aXZlJ10pIHsgdGhpcy5hY3RpdmUgPSBuZXcgZmhpci5GaGlyQm9vbGVhbih7dmFsdWU6IHNvdXJjZS5hY3RpdmV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncGVyaW9kJ10pIHsgdGhpcy5wZXJpb2QgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLnBlcmlvZCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ29yZ2FuaXphdGlvbiddKSB7IHRoaXMub3JnYW5pemF0aW9uID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5vcmdhbml6YXRpb24pOyB9XHJcbiAgICBpZiAoc291cmNlWydwYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uJ10pIHsgdGhpcy5wYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5wYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnbmV0d29yayddKSB7IHRoaXMubmV0d29yayA9IHNvdXJjZS5uZXR3b3JrLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMubmV0d29yayA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydjb2RlJ10pIHsgdGhpcy5jb2RlID0gc291cmNlLmNvZGUubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb2RlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3NwZWNpYWx0eSddKSB7IHRoaXMuc3BlY2lhbHR5ID0gc291cmNlLnNwZWNpYWx0eS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnNwZWNpYWx0eSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydsb2NhdGlvbiddKSB7IHRoaXMubG9jYXRpb24gPSBzb3VyY2UubG9jYXRpb24ubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5sb2NhdGlvbiA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydoZWFsdGhjYXJlU2VydmljZSddKSB7IHRoaXMuaGVhbHRoY2FyZVNlcnZpY2UgPSBzb3VyY2UuaGVhbHRoY2FyZVNlcnZpY2UubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5oZWFsdGhjYXJlU2VydmljZSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWyd0ZWxlY29tJ10pIHsgdGhpcy50ZWxlY29tID0gc291cmNlLnRlbGVjb20ubWFwKCh4KSA9PiBuZXcgZmhpci5Db250YWN0UG9pbnQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50ZWxlY29tID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2VuZHBvaW50J10pIHsgdGhpcy5lbmRwb2ludCA9IHNvdXJjZS5lbmRwb2ludC5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmVuZHBvaW50ID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogUHJlZmVycmVkLWJvdW5kIFZhbHVlIFNldCBmb3Igc3BlY2lhbHR5IChPcmdhbml6YXRpb25BZmZpbGlhdGlvbi5zcGVjaWFsdHkpXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgc3BlY2lhbHR5UHJlZmVycmVkQ29kaW5ncygpIHtcclxuICAgIHJldHVybiBDODBQcmFjdGljZUNvZGVzQ29kaW5ncztcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKCk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oKTtcclxuICAgIGlmICghdGhpc1sncmVzb3VyY2VUeXBlJ10pIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ3JlcXVpcmVkJywgZGlhZ25vc3RpY3M6ICdNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5IHJlc291cmNlVHlwZTpcIk9yZ2FuaXphdGlvbkFmZmlsaWF0aW9uXCIgZmhpcjogT3JnYW5pemF0aW9uQWZmaWxpYXRpb24ucmVzb3VyY2VUeXBlOlwiT3JnYW5pemF0aW9uQWZmaWxpYXRpb25cIicgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1tcImlkZW50aWZpZXJcIl0pIHsgdGhpcy5pZGVudGlmaWVyLmZvckVhY2goKHgpID0+IHsgaXNzdWVzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbigpKTsgfSkgfVxyXG4gICAgaWYgKHRoaXNbXCJhY3RpdmVcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5hY3RpdmUuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICh0aGlzW1wicGVyaW9kXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMucGVyaW9kLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICBpZiAodGhpc1tcIm9yZ2FuaXphdGlvblwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLm9yZ2FuaXphdGlvbi5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJwYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMucGFydGljaXBhdGluZ09yZ2FuaXphdGlvbi5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJuZXR3b3JrXCJdKSB7IHRoaXMubmV0d29yay5mb3JFYWNoKCh4KSA9PiB7IGlzc3Vlcy5wdXNoKC4uLnguZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH0pIH1cclxuICAgIGlmICh0aGlzW1wiY29kZVwiXSkgeyB0aGlzLmNvZGUuZm9yRWFjaCgoeCkgPT4geyBpc3N1ZXMucHVzaCguLi54LmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9KSB9XHJcbiAgICBpZiAodGhpc1tcInNwZWNpYWx0eVwiXSkgeyB0aGlzLnNwZWNpYWx0eS5mb3JFYWNoKCh4KSA9PiB7IGlzc3Vlcy5wdXNoKC4uLnguZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH0pIH1cclxuICAgIGlmICh0aGlzW1wibG9jYXRpb25cIl0pIHsgdGhpcy5sb2NhdGlvbi5mb3JFYWNoKCh4KSA9PiB7IGlzc3Vlcy5wdXNoKC4uLnguZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH0pIH1cclxuICAgIGlmICh0aGlzW1wiaGVhbHRoY2FyZVNlcnZpY2VcIl0pIHsgdGhpcy5oZWFsdGhjYXJlU2VydmljZS5mb3JFYWNoKCh4KSA9PiB7IGlzc3Vlcy5wdXNoKC4uLnguZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH0pIH1cclxuICAgIGlmICh0aGlzW1widGVsZWNvbVwiXSkgeyB0aGlzLnRlbGVjb20uZm9yRWFjaCgoeCkgPT4geyBpc3N1ZXMucHVzaCguLi54LmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9KSB9XHJcbiAgICBpZiAodGhpc1tcImVuZHBvaW50XCJdKSB7IHRoaXMuZW5kcG9pbnQuZm9yRWFjaCgoeCkgPT4geyBpc3N1ZXMucHVzaCguLi54LmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9KSB9XHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=