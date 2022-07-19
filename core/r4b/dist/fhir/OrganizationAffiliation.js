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
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['active']) {
            this.active = new fhir.FhirBoolean({ value: source.active });
        }
        if (source['_active']) {
            if (this.active) {
                this.active.addExtendedProperties(source._active);
            }
            else {
                this.active = new fhir.FhirBoolean(source._active);
            }
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
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'OrganizationAffiliation';
        }
        iss.push(...this.vRPS('resourceType', exp));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JnYW5pemF0aW9uQWZmaWxpYXRpb24uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL09yZ2FuaXphdGlvbkFmZmlsaWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLHlDQUF5QztBQUV6QyxPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQXdFbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUF5RDlEOztPQUVHO0lBQ0gsWUFBWSxTQUE4QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNwRyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcseUJBQXlCLENBQUM7UUFDOUMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2hHO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDckYsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLE9BQVEsQ0FBQyxDQUFDO2FBQUU7aUJBQ25F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R0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0MsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQTNHRDs7R0FFRztBQUM2QixxQ0FBYSxHQUFVLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogT3JnYW5pemF0aW9uQWZmaWxpYXRpb25cclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IE9yZ2FuaXphdGlvblJvbGVDb2RlcywgIE9yZ2FuaXphdGlvblJvbGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvT3JnYW5pemF0aW9uUm9sZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBPcmdhbml6YXRpb25Sb2xlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Pcmdhbml6YXRpb25Sb2xlVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBDODBQcmFjdGljZUNvZGVzLCAgQzgwUHJhY3RpY2VDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQzgwUHJhY3RpY2VDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQzgwUHJhY3RpY2VWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0M4MFByYWN0aWNlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIE9yZ2FuaXphdGlvbkFmZmlsaWF0aW9uIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE9yZ2FuaXphdGlvbkFmZmlsaWF0aW9uQXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiT3JnYW5pemF0aW9uQWZmaWxpYXRpb25cInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQnVzaW5lc3MgaWRlbnRpZmllcnMgdGhhdCBhcmUgc3BlY2lmaWMgdG8gdGhpcyByb2xlLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoaXMgdmFsdWUgaXMgZmFsc2UsIHlvdSBtYXkgcmVmZXIgdG8gdGhlIHBlcmlvZCB0byBzZWUgd2hlbiB0aGUgcm9sZSB3YXMgaW4gYWN0aXZlIHVzZS4gSWYgdGhlcmUgaXMgbm8gcGVyaW9kIHNwZWNpZmllZCwgbm8gaW5mZXJlbmNlIGNhbiBiZSBtYWRlIGFib3V0IHdoZW4gaXQgd2FzIGFjdGl2ZS5cclxuICAgKi9cclxuICBhY3RpdmU/OiBmaGlyLkZoaXJCb29sZWFufGJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBPcmdhbml6YXRpb25BZmZpbGlhdGlvbi5hY3RpdmVcclxuICAgKi9cclxuICBfYWN0aXZlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgcGVyaW9kIGR1cmluZyB3aGljaCB0aGUgcGFydGljaXBhdGluZ09yZ2FuaXphdGlvbiBpcyBhZmZpbGlhdGVkIHdpdGggdGhlIHByaW1hcnkgb3JnYW5pemF0aW9uLlxyXG4gICAqL1xyXG4gIHBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogT3JnYW5pemF0aW9uIHdoZXJlIHRoZSByb2xlIGlzIGF2YWlsYWJsZSAocHJpbWFyeSBvcmdhbml6YXRpb24vaGFzIG1lbWJlcnMpLlxyXG4gICAqL1xyXG4gIG9yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIFBhcnRpY2lwYXRpbmcgT3JnYW5pemF0aW9uIHByb3ZpZGVzL3BlcmZvcm1zIHRoZSByb2xlKHMpIGRlZmluZWQgYnkgdGhlIGNvZGUgdG8gdGhlIFByaW1hcnkgT3JnYW5pemF0aW9uIChlLmcuIHByb3ZpZGluZyBzZXJ2aWNlcyBvciBpcyBhIG1lbWJlciBvZikuXHJcbiAgICovXHJcbiAgcGFydGljaXBhdGluZ09yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSGVhbHRoIGluc3VyYW5jZSBwcm92aWRlciBuZXR3b3JrIGluIHdoaWNoIHRoZSBwYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uIHByb3ZpZGVzIHRoZSByb2xlJ3Mgc2VydmljZXMgKGlmIGRlZmluZWQpIGF0IHRoZSBpbmRpY2F0ZWQgbG9jYXRpb25zIChpZiBkZWZpbmVkKS5cclxuICAgKi9cclxuICBuZXR3b3JrPzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmluaXRpb24gb2YgdGhlIHJvbGUgdGhlIHBhcnRpY2lwYXRpbmdPcmdhbml6YXRpb24gcGxheXMgaW4gdGhlIGFzc29jaWF0aW9uLlxyXG4gICAqL1xyXG4gIGNvZGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogU3BlY2lmaWMgc3BlY2lhbHR5IG9mIHRoZSBwYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uIGluIHRoZSBjb250ZXh0IG9mIHRoZSByb2xlLlxyXG4gICAqL1xyXG4gIHNwZWNpYWx0eT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbG9jYXRpb24ocykgYXQgd2hpY2ggdGhlIHJvbGUgb2NjdXJzLlxyXG4gICAqL1xyXG4gIGxvY2F0aW9uPzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEhlYWx0aGNhcmUgc2VydmljZXMgcHJvdmlkZWQgdGhyb3VnaCB0aGUgcm9sZS5cclxuICAgKi9cclxuICBoZWFsdGhjYXJlU2VydmljZT86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBDb250YWN0IGRldGFpbHMgYXQgdGhlIHBhcnRpY2lwYXRpbmdPcmdhbml6YXRpb24gcmVsZXZhbnQgdG8gdGhpcyBBZmZpbGlhdGlvbi5cclxuICAgKi9cclxuICB0ZWxlY29tPzogZmhpci5Db250YWN0UG9pbnRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRlY2huaWNhbCBlbmRwb2ludHMgcHJvdmlkaW5nIGFjY2VzcyB0byBzZXJ2aWNlcyBvcGVyYXRlZCBmb3IgdGhpcyByb2xlLlxyXG4gICAqL1xyXG4gIGVuZHBvaW50PzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogRGVmaW5lcyBhbiBhZmZpbGlhdGlvbi9hc3NvdGlhdGlvbi9yZWxhdGlvbnNoaXAgYmV0d2VlbiAyIGRpc3RpbmN0IG9nYW5pemF0aW9ucywgdGhhdCBpcyBub3QgYSBwYXJ0LW9mIHJlbGF0aW9uc2hpcC9zdWItZGl2aXNpb24gcmVsYXRpb25zaGlwLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE9yZ2FuaXphdGlvbkFmZmlsaWF0aW9uIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdPcmdhbml6YXRpb25BZmZpbGlhdGlvbic7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJPcmdhbml6YXRpb25BZmZpbGlhdGlvblwiO1xyXG4gIC8qKlxyXG4gICAqIEJ1c2luZXNzIGlkZW50aWZpZXJzIHRoYXQgYXJlIHNwZWNpZmljIHRvIHRoaXMgcm9sZS5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogSWYgdGhpcyB2YWx1ZSBpcyBmYWxzZSwgeW91IG1heSByZWZlciB0byB0aGUgcGVyaW9kIHRvIHNlZSB3aGVuIHRoZSByb2xlIHdhcyBpbiBhY3RpdmUgdXNlLiBJZiB0aGVyZSBpcyBubyBwZXJpb2Qgc3BlY2lmaWVkLCBubyBpbmZlcmVuY2UgY2FuIGJlIG1hZGUgYWJvdXQgd2hlbiBpdCB3YXMgYWN0aXZlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhY3RpdmU/OiBmaGlyLkZoaXJCb29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcGVyaW9kIGR1cmluZyB3aGljaCB0aGUgcGFydGljaXBhdGluZ09yZ2FuaXphdGlvbiBpcyBhZmZpbGlhdGVkIHdpdGggdGhlIHByaW1hcnkgb3JnYW5pemF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogT3JnYW5pemF0aW9uIHdoZXJlIHRoZSByb2xlIGlzIGF2YWlsYWJsZSAocHJpbWFyeSBvcmdhbml6YXRpb24vaGFzIG1lbWJlcnMpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvcmdhbml6YXRpb24/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIFBhcnRpY2lwYXRpbmcgT3JnYW5pemF0aW9uIHByb3ZpZGVzL3BlcmZvcm1zIHRoZSByb2xlKHMpIGRlZmluZWQgYnkgdGhlIGNvZGUgdG8gdGhlIFByaW1hcnkgT3JnYW5pemF0aW9uIChlLmcuIHByb3ZpZGluZyBzZXJ2aWNlcyBvciBpcyBhIG1lbWJlciBvZikuXHJcbiAgICovXHJcbiAgcHVibGljIHBhcnRpY2lwYXRpbmdPcmdhbml6YXRpb24/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSGVhbHRoIGluc3VyYW5jZSBwcm92aWRlciBuZXR3b3JrIGluIHdoaWNoIHRoZSBwYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uIHByb3ZpZGVzIHRoZSByb2xlJ3Mgc2VydmljZXMgKGlmIGRlZmluZWQpIGF0IHRoZSBpbmRpY2F0ZWQgbG9jYXRpb25zIChpZiBkZWZpbmVkKS5cclxuICAgKi9cclxuICBwdWJsaWMgbmV0d29yazogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBEZWZpbml0aW9uIG9mIHRoZSByb2xlIHRoZSBwYXJ0aWNpcGF0aW5nT3JnYW5pemF0aW9uIHBsYXlzIGluIHRoZSBhc3NvY2lhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgY29kZTogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBTcGVjaWZpYyBzcGVjaWFsdHkgb2YgdGhlIHBhcnRpY2lwYXRpbmdPcmdhbml6YXRpb24gaW4gdGhlIGNvbnRleHQgb2YgdGhlIHJvbGUuXHJcbiAgICovXHJcbiAgcHVibGljIHNwZWNpYWx0eTogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBUaGUgbG9jYXRpb24ocykgYXQgd2hpY2ggdGhlIHJvbGUgb2NjdXJzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsb2NhdGlvbjogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBIZWFsdGhjYXJlIHNlcnZpY2VzIHByb3ZpZGVkIHRocm91Z2ggdGhlIHJvbGUuXHJcbiAgICovXHJcbiAgcHVibGljIGhlYWx0aGNhcmVTZXJ2aWNlOiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIENvbnRhY3QgZGV0YWlscyBhdCB0aGUgcGFydGljaXBhdGluZ09yZ2FuaXphdGlvbiByZWxldmFudCB0byB0aGlzIEFmZmlsaWF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0ZWxlY29tOiBmaGlyLkNvbnRhY3RQb2ludFtdO1xyXG4gIC8qKlxyXG4gICAqIFRlY2huaWNhbCBlbmRwb2ludHMgcHJvdmlkaW5nIGFjY2VzcyB0byBzZXJ2aWNlcyBvcGVyYXRlZCBmb3IgdGhpcyByb2xlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBlbmRwb2ludDogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBPcmdhbml6YXRpb25BZmZpbGlhdGlvbiAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPE9yZ2FuaXphdGlvbkFmZmlsaWF0aW9uQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ09yZ2FuaXphdGlvbkFmZmlsaWF0aW9uJztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2FjdGl2ZSddKSB7IHRoaXMuYWN0aXZlID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oe3ZhbHVlOiBzb3VyY2UuYWN0aXZlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19hY3RpdmUnXSkge1xyXG4gICAgICBpZiAodGhpcy5hY3RpdmUpIHsgdGhpcy5hY3RpdmUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fYWN0aXZlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuYWN0aXZlID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oc291cmNlLl9hY3RpdmUgYXMgUGFydGlhbDxmaGlyLkZoaXJCb29sZWFuQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwZXJpb2QnXSkgeyB0aGlzLnBlcmlvZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2UucGVyaW9kKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnb3JnYW5pemF0aW9uJ10pIHsgdGhpcy5vcmdhbml6YXRpb24gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLm9yZ2FuaXphdGlvbik7IH1cclxuICAgIGlmIChzb3VyY2VbJ3BhcnRpY2lwYXRpbmdPcmdhbml6YXRpb24nXSkgeyB0aGlzLnBhcnRpY2lwYXRpbmdPcmdhbml6YXRpb24gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnBhcnRpY2lwYXRpbmdPcmdhbml6YXRpb24pOyB9XHJcbiAgICBpZiAoc291cmNlWyduZXR3b3JrJ10pIHsgdGhpcy5uZXR3b3JrID0gc291cmNlLm5ldHdvcmsubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5uZXR3b3JrID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2NvZGUnXSkgeyB0aGlzLmNvZGUgPSBzb3VyY2UuY29kZS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmNvZGUgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3BlY2lhbHR5J10pIHsgdGhpcy5zcGVjaWFsdHkgPSBzb3VyY2Uuc3BlY2lhbHR5Lm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3BlY2lhbHR5ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2xvY2F0aW9uJ10pIHsgdGhpcy5sb2NhdGlvbiA9IHNvdXJjZS5sb2NhdGlvbi5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmxvY2F0aW9uID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2hlYWx0aGNhcmVTZXJ2aWNlJ10pIHsgdGhpcy5oZWFsdGhjYXJlU2VydmljZSA9IHNvdXJjZS5oZWFsdGhjYXJlU2VydmljZS5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmhlYWx0aGNhcmVTZXJ2aWNlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3RlbGVjb20nXSkgeyB0aGlzLnRlbGVjb20gPSBzb3VyY2UudGVsZWNvbS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvbnRhY3RQb2ludCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnRlbGVjb20gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZW5kcG9pbnQnXSkgeyB0aGlzLmVuZHBvaW50ID0gc291cmNlLmVuZHBvaW50Lm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZW5kcG9pbnQgPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ09yZ2FuaXphdGlvbkFmZmlsaWF0aW9uJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUFMoJ3Jlc291cmNlVHlwZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnYWN0aXZlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdwZXJpb2QnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ29yZ2FuaXphdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncGFydGljaXBhdGluZ09yZ2FuaXphdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnbmV0d29yaycsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnY29kZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnc3BlY2lhbHR5JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdsb2NhdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaGVhbHRoY2FyZVNlcnZpY2UnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ3RlbGVjb20nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2VuZHBvaW50JyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==