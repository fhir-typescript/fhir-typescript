// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: OrganizationAffiliation
import * as fhir from '../fhir.js';
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
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options));
        }
        else {
            this.identifier = [];
        }
        if (source['active'] !== undefined) {
            this.active = new fhir.FhirBoolean({ value: source.active }, options);
        }
        if (source['_active']) {
            if (this.active) {
                this.active.addExtendedProperties(source._active);
            }
            else {
                this.active = new fhir.FhirBoolean(source._active, options);
            }
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period, options);
        }
        if (source['organization']) {
            this.organization = new fhir.Reference(source.organization, options);
        }
        if (source['participatingOrganization']) {
            this.participatingOrganization = new fhir.Reference(source.participatingOrganization, options);
        }
        if (source['network']) {
            this.network = source.network.map((x) => new fhir.Reference(x, options));
        }
        else {
            this.network = [];
        }
        if (source['code']) {
            this.code = source.code.map((x) => new fhir.CodeableConcept(x, options));
        }
        else {
            this.code = [];
        }
        if (source['specialty']) {
            this.specialty = source.specialty.map((x) => new fhir.CodeableConcept(x, options));
        }
        else {
            this.specialty = [];
        }
        if (source['location']) {
            this.location = source.location.map((x) => new fhir.Reference(x, options));
        }
        else {
            this.location = [];
        }
        if (source['healthcareService']) {
            this.healthcareService = source.healthcareService.map((x) => new fhir.Reference(x, options));
        }
        else {
            this.healthcareService = [];
        }
        if (source['telecom']) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x, options));
        }
        else {
            this.telecom = [];
        }
        if (source['endpoint']) {
            this.endpoint = source.endpoint.map((x) => new fhir.Reference(x, options));
        }
        else {
            this.endpoint = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'OrganizationAffiliation';
        }
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vOS('active', exp));
        iss.push(...this.vOS('period', exp));
        iss.push(...this.vOS('organization', exp));
        iss.push(...this.vOS('participatingOrganization', exp));
        iss.push(...this.vOA('network', exp));
        iss.push(...this.vOA('code', exp));
        iss.push(...this.vOA('specialty', exp));
        iss.push(...this.vOA('location', exp));
        iss.push(...this.vOA('healthcareService', exp));
        iss.push(...this.vOA('telecom', exp));
        iss.push(...this.vOA('endpoint', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
OrganizationAffiliation._fts_dataType = 'OrganizationAffiliation';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JnYW5pemF0aW9uQWZmaWxpYXRpb24uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL09yZ2FuaXphdGlvbkFmZmlsaWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLHlDQUF5QztBQUV6QyxPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQXdFbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUF5RDlEOztPQUVHO0lBQ0gsWUFBWSxTQUE4QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNwRyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcseUJBQXlCLENBQUM7UUFDOUMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FBRTthQUN6RztZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDOUIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDNUcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsTUFBTSxD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QUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBMUdEOztHQUVHO0FBQzZCLHFDQUFhLEdBQVUseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBPcmdhbml6YXRpb25BZmZpbGlhdGlvblxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgT3JnYW5pemF0aW9uUm9sZUNvZGVzLCAgT3JnYW5pemF0aW9uUm9sZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Pcmdhbml6YXRpb25Sb2xlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IE9yZ2FuaXphdGlvblJvbGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL09yZ2FuaXphdGlvblJvbGVWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEM4MFByYWN0aWNlQ29kZXMsICBDODBQcmFjdGljZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9DODBQcmFjdGljZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBDODBQcmFjdGljZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQzgwUHJhY3RpY2VWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgT3JnYW5pemF0aW9uQWZmaWxpYXRpb24gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3JnYW5pemF0aW9uQWZmaWxpYXRpb25BcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJPcmdhbml6YXRpb25BZmZpbGlhdGlvblwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBCdXNpbmVzcyBpZGVudGlmaWVycyB0aGF0IGFyZSBzcGVjaWZpYyB0byB0aGlzIHJvbGUuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhpcyB2YWx1ZSBpcyBmYWxzZSwgeW91IG1heSByZWZlciB0byB0aGUgcGVyaW9kIHRvIHNlZSB3aGVuIHRoZSByb2xlIHdhcyBpbiBhY3RpdmUgdXNlLiBJZiB0aGVyZSBpcyBubyBwZXJpb2Qgc3BlY2lmaWVkLCBubyBpbmZlcmVuY2UgY2FuIGJlIG1hZGUgYWJvdXQgd2hlbiBpdCB3YXMgYWN0aXZlLlxyXG4gICAqL1xyXG4gIGFjdGl2ZT86IGZoaXIuRmhpckJvb2xlYW58Ym9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE9yZ2FuaXphdGlvbkFmZmlsaWF0aW9uLmFjdGl2ZVxyXG4gICAqL1xyXG4gIF9hY3RpdmU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJpb2QgZHVyaW5nIHdoaWNoIHRoZSBwYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uIGlzIGFmZmlsaWF0ZWQgd2l0aCB0aGUgcHJpbWFyeSBvcmdhbml6YXRpb24uXHJcbiAgICovXHJcbiAgcGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBPcmdhbml6YXRpb24gd2hlcmUgdGhlIHJvbGUgaXMgYXZhaWxhYmxlIChwcmltYXJ5IG9yZ2FuaXphdGlvbi9oYXMgbWVtYmVycykuXHJcbiAgICovXHJcbiAgb3JnYW5pemF0aW9uPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgUGFydGljaXBhdGluZyBPcmdhbml6YXRpb24gcHJvdmlkZXMvcGVyZm9ybXMgdGhlIHJvbGUocykgZGVmaW5lZCBieSB0aGUgY29kZSB0byB0aGUgUHJpbWFyeSBPcmdhbml6YXRpb24gKGUuZy4gcHJvdmlkaW5nIHNlcnZpY2VzIG9yIGlzIGEgbWVtYmVyIG9mKS5cclxuICAgKi9cclxuICBwYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBIZWFsdGggaW5zdXJhbmNlIHByb3ZpZGVyIG5ldHdvcmsgaW4gd2hpY2ggdGhlIHBhcnRpY2lwYXRpbmdPcmdhbml6YXRpb24gcHJvdmlkZXMgdGhlIHJvbGUncyBzZXJ2aWNlcyAoaWYgZGVmaW5lZCkgYXQgdGhlIGluZGljYXRlZCBsb2NhdGlvbnMgKGlmIGRlZmluZWQpLlxyXG4gICAqL1xyXG4gIG5ldHdvcms/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmaW5pdGlvbiBvZiB0aGUgcm9sZSB0aGUgcGFydGljaXBhdGluZ09yZ2FuaXphdGlvbiBwbGF5cyBpbiB0aGUgYXNzb2NpYXRpb24uXHJcbiAgICovXHJcbiAgY29kZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTcGVjaWZpYyBzcGVjaWFsdHkgb2YgdGhlIHBhcnRpY2lwYXRpbmdPcmdhbml6YXRpb24gaW4gdGhlIGNvbnRleHQgb2YgdGhlIHJvbGUuXHJcbiAgICovXHJcbiAgc3BlY2lhbHR5PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsb2NhdGlvbihzKSBhdCB3aGljaCB0aGUgcm9sZSBvY2N1cnMuXHJcbiAgICovXHJcbiAgbG9jYXRpb24/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSGVhbHRoY2FyZSBzZXJ2aWNlcyBwcm92aWRlZCB0aHJvdWdoIHRoZSByb2xlLlxyXG4gICAqL1xyXG4gIGhlYWx0aGNhcmVTZXJ2aWNlPzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIENvbnRhY3QgZGV0YWlscyBhdCB0aGUgcGFydGljaXBhdGluZ09yZ2FuaXphdGlvbiByZWxldmFudCB0byB0aGlzIEFmZmlsaWF0aW9uLlxyXG4gICAqL1xyXG4gIHRlbGVjb20/OiBmaGlyLkNvbnRhY3RQb2ludEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGVjaG5pY2FsIGVuZHBvaW50cyBwcm92aWRpbmcgYWNjZXNzIHRvIHNlcnZpY2VzIG9wZXJhdGVkIGZvciB0aGlzIHJvbGUuXHJcbiAgICovXHJcbiAgZW5kcG9pbnQ/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGFuIGFmZmlsaWF0aW9uL2Fzc290aWF0aW9uL3JlbGF0aW9uc2hpcCBiZXR3ZWVuIDIgZGlzdGluY3Qgb2dhbml6YXRpb25zLCB0aGF0IGlzIG5vdCBhIHBhcnQtb2YgcmVsYXRpb25zaGlwL3N1Yi1kaXZpc2lvbiByZWxhdGlvbnNoaXAuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgT3JnYW5pemF0aW9uQWZmaWxpYXRpb24gZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ09yZ2FuaXphdGlvbkFmZmlsaWF0aW9uJztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIk9yZ2FuaXphdGlvbkFmZmlsaWF0aW9uXCI7XHJcbiAgLyoqXHJcbiAgICogQnVzaW5lc3MgaWRlbnRpZmllcnMgdGhhdCBhcmUgc3BlY2lmaWMgdG8gdGhpcyByb2xlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBJZiB0aGlzIHZhbHVlIGlzIGZhbHNlLCB5b3UgbWF5IHJlZmVyIHRvIHRoZSBwZXJpb2QgdG8gc2VlIHdoZW4gdGhlIHJvbGUgd2FzIGluIGFjdGl2ZSB1c2UuIElmIHRoZXJlIGlzIG5vIHBlcmlvZCBzcGVjaWZpZWQsIG5vIGluZmVyZW5jZSBjYW4gYmUgbWFkZSBhYm91dCB3aGVuIGl0IHdhcyBhY3RpdmUuXHJcbiAgICovXHJcbiAgcHVibGljIGFjdGl2ZT86IGZoaXIuRmhpckJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJpb2QgZHVyaW5nIHdoaWNoIHRoZSBwYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uIGlzIGFmZmlsaWF0ZWQgd2l0aCB0aGUgcHJpbWFyeSBvcmdhbml6YXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHBlcmlvZD86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBPcmdhbml6YXRpb24gd2hlcmUgdGhlIHJvbGUgaXMgYXZhaWxhYmxlIChwcmltYXJ5IG9yZ2FuaXphdGlvbi9oYXMgbWVtYmVycykuXHJcbiAgICovXHJcbiAgcHVibGljIG9yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgUGFydGljaXBhdGluZyBPcmdhbml6YXRpb24gcHJvdmlkZXMvcGVyZm9ybXMgdGhlIHJvbGUocykgZGVmaW5lZCBieSB0aGUgY29kZSB0byB0aGUgUHJpbWFyeSBPcmdhbml6YXRpb24gKGUuZy4gcHJvdmlkaW5nIHNlcnZpY2VzIG9yIGlzIGEgbWVtYmVyIG9mKS5cclxuICAgKi9cclxuICBwdWJsaWMgcGFydGljaXBhdGluZ09yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBIZWFsdGggaW5zdXJhbmNlIHByb3ZpZGVyIG5ldHdvcmsgaW4gd2hpY2ggdGhlIHBhcnRpY2lwYXRpbmdPcmdhbml6YXRpb24gcHJvdmlkZXMgdGhlIHJvbGUncyBzZXJ2aWNlcyAoaWYgZGVmaW5lZCkgYXQgdGhlIGluZGljYXRlZCBsb2NhdGlvbnMgKGlmIGRlZmluZWQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBuZXR3b3JrOiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmluaXRpb24gb2YgdGhlIHJvbGUgdGhlIHBhcnRpY2lwYXRpbmdPcmdhbml6YXRpb24gcGxheXMgaW4gdGhlIGFzc29jaWF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2RlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmljIHNwZWNpYWx0eSBvZiB0aGUgcGFydGljaXBhdGluZ09yZ2FuaXphdGlvbiBpbiB0aGUgY29udGV4dCBvZiB0aGUgcm9sZS5cclxuICAgKi9cclxuICBwdWJsaWMgc3BlY2lhbHR5OiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsb2NhdGlvbihzKSBhdCB3aGljaCB0aGUgcm9sZSBvY2N1cnMuXHJcbiAgICovXHJcbiAgcHVibGljIGxvY2F0aW9uOiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIEhlYWx0aGNhcmUgc2VydmljZXMgcHJvdmlkZWQgdGhyb3VnaCB0aGUgcm9sZS5cclxuICAgKi9cclxuICBwdWJsaWMgaGVhbHRoY2FyZVNlcnZpY2U6IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogQ29udGFjdCBkZXRhaWxzIGF0IHRoZSBwYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uIHJlbGV2YW50IHRvIHRoaXMgQWZmaWxpYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHRlbGVjb206IGZoaXIuQ29udGFjdFBvaW50W107XHJcbiAgLyoqXHJcbiAgICogVGVjaG5pY2FsIGVuZHBvaW50cyBwcm92aWRpbmcgYWNjZXNzIHRvIHNlcnZpY2VzIG9wZXJhdGVkIGZvciB0aGlzIHJvbGUuXHJcbiAgICovXHJcbiAgcHVibGljIGVuZHBvaW50OiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIE9yZ2FuaXphdGlvbkFmZmlsaWF0aW9uIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8T3JnYW5pemF0aW9uQWZmaWxpYXRpb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnT3JnYW5pemF0aW9uQWZmaWxpYXRpb24nO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYWN0aXZlJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmFjdGl2ZSA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHt2YWx1ZTogc291cmNlLmFjdGl2ZX0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfYWN0aXZlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7IHRoaXMuYWN0aXZlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2FjdGl2ZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmFjdGl2ZSA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHNvdXJjZS5fYWN0aXZlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQm9vbGVhbkFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncGVyaW9kJ10pIHsgdGhpcy5wZXJpb2QgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLnBlcmlvZCwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ29yZ2FuaXphdGlvbiddKSB7IHRoaXMub3JnYW5pemF0aW9uID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5vcmdhbml6YXRpb24sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydwYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uJ10pIHsgdGhpcy5wYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5wYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnbmV0d29yayddKSB7IHRoaXMubmV0d29yayA9IHNvdXJjZS5uZXR3b3JrLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMubmV0d29yayA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydjb2RlJ10pIHsgdGhpcy5jb2RlID0gc291cmNlLmNvZGUubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb2RlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3NwZWNpYWx0eSddKSB7IHRoaXMuc3BlY2lhbHR5ID0gc291cmNlLnNwZWNpYWx0eS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnNwZWNpYWx0eSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydsb2NhdGlvbiddKSB7IHRoaXMubG9jYXRpb24gPSBzb3VyY2UubG9jYXRpb24ubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5sb2NhdGlvbiA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydoZWFsdGhjYXJlU2VydmljZSddKSB7IHRoaXMuaGVhbHRoY2FyZVNlcnZpY2UgPSBzb3VyY2UuaGVhbHRoY2FyZVNlcnZpY2UubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5oZWFsdGhjYXJlU2VydmljZSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWyd0ZWxlY29tJ10pIHsgdGhpcy50ZWxlY29tID0gc291cmNlLnRlbGVjb20ubWFwKCh4KSA9PiBuZXcgZmhpci5Db250YWN0UG9pbnQoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50ZWxlY29tID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2VuZHBvaW50J10pIHsgdGhpcy5lbmRwb2ludCA9IHNvdXJjZS5lbmRwb2ludC5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmVuZHBvaW50ID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdPcmdhbml6YXRpb25BZmZpbGlhdGlvbicgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2lkZW50aWZpZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2FjdGl2ZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncGVyaW9kJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdvcmdhbml6YXRpb24nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3BhcnRpY2lwYXRpbmdPcmdhbml6YXRpb24nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ25ldHdvcmsnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2NvZGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ3NwZWNpYWx0eScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnbG9jYXRpb24nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2hlYWx0aGNhcmVTZXJ2aWNlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCd0ZWxlY29tJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdlbmRwb2ludCcsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=