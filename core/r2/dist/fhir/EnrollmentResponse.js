// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: EnrollmentResponse
import * as fhir from '../fhir.js';
// @ts-ignore
import { RemittanceOutcomeVsValidation } from '../fhirValueSets/RemittanceOutcomeVsValidation.js';
/**
 * This resource provides enrollment and plan details from the processing of an Enrollment resource.
 */
export class EnrollmentResponse extends fhir.DomainResource {
    /**
     * Default constructor for EnrollmentResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'EnrollmentResponse';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['request']) {
            this.request = new fhir.Reference(source.request);
        }
        if (source['outcome']) {
            this.outcome = new fhir.FhirCode({ value: source.outcome });
        }
        if (source['_outcome']) {
            if (this.outcome) {
                this.outcome.addExtendedProperties(source._outcome);
            }
            else {
                this.outcome = new fhir.FhirCode(source._outcome);
            }
        }
        if (source['disposition']) {
            this.disposition = new fhir.FhirString({ value: source.disposition });
        }
        if (source['_disposition']) {
            if (this.disposition) {
                this.disposition.addExtendedProperties(source._disposition);
            }
            else {
                this.disposition = new fhir.FhirString(source._disposition);
            }
        }
        if (source['ruleset']) {
            this.ruleset = new fhir.Coding(source.ruleset);
        }
        if (source['originalRuleset']) {
            this.originalRuleset = new fhir.Coding(source.originalRuleset);
        }
        if (source['created']) {
            this.created = new fhir.FhirDateTime({ value: source.created });
        }
        if (source['_created']) {
            if (this.created) {
                this.created.addExtendedProperties(source._created);
            }
            else {
                this.created = new fhir.FhirDateTime(source._created);
            }
        }
        if (source['organization']) {
            this.organization = new fhir.Reference(source.organization);
        }
        if (source['requestProvider']) {
            this.requestProvider = new fhir.Reference(source.requestProvider);
        }
        if (source['requestOrganization']) {
            this.requestOrganization = new fhir.Reference(source.requestOrganization);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'EnrollmentResponse';
        }
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vOS('request', exp));
        iss.push(...this.vOSV('outcome', exp, 'RemittanceOutcome', RemittanceOutcomeVsValidation, 'r'));
        iss.push(...this.vOS('disposition', exp));
        iss.push(...this.vOS('ruleset', exp));
        iss.push(...this.vOS('originalRuleset', exp));
        iss.push(...this.vOS('created', exp));
        iss.push(...this.vOS('organization', exp));
        iss.push(...this.vOS('requestProvider', exp));
        iss.push(...this.vOS('requestOrganization', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
EnrollmentResponse._fts_dataType = 'EnrollmentResponse';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5yb2xsbWVudFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9FbnJvbGxtZW50UmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQStEbEc7O0dBRUc7QUFDSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUFpRHpEOztPQUVHO0lBQ0gsWUFBWSxTQUF5QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUMvRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQW9CLENBQUM7UUFDekMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2hHO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQzdFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQTRCLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFP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dGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBFbnJvbGxtZW50UmVzcG9uc2VcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFJlbWl0dGFuY2VPdXRjb21lQ29kZXMsICBSZW1pdHRhbmNlT3V0Y29tZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9SZW1pdHRhbmNlT3V0Y29tZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBSZW1pdHRhbmNlT3V0Y29tZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVtaXR0YW5jZU91dGNvbWVWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgRW5yb2xsbWVudFJlc3BvbnNlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEVucm9sbG1lbnRSZXNwb25zZUFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkVucm9sbG1lbnRSZXNwb25zZVwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgUmVzcG9uc2UgYnVzaW5lc3MgaWRlbnRpZmllci5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBPcmlnaW5hbCByZXF1ZXN0IHJlc291cmNlIHJlZmVyZW5jZS5cclxuICAgKi9cclxuICByZXF1ZXN0PzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUcmFuc2FjdGlvbiBzdGF0dXM6IGVycm9yLCBjb21wbGV0ZS5cclxuICAgKi9cclxuICBvdXRjb21lPzogZmhpci5GaGlyQ29kZTxSZW1pdHRhbmNlT3V0Y29tZUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFbnJvbGxtZW50UmVzcG9uc2Uub3V0Y29tZVxyXG4gICAqL1xyXG4gIF9vdXRjb21lPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBzdGF0dXMgb2YgdGhlIGFkanVkaWNhdGlvbi5cclxuICAgKi9cclxuICBkaXNwb3NpdGlvbj86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFbnJvbGxtZW50UmVzcG9uc2UuZGlzcG9zaXRpb25cclxuICAgKi9cclxuICBfZGlzcG9zaXRpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBzdHlsZSBvZiByZXNvdXJjZSBjb250ZW50cy4gVGhpcyBzaG91bGQgYmUgbWFwcGVkIHRvIHRoZSBhbGxvd2FibGUgcHJvZmlsZXMgZm9yIHRoaXMgYW5kIHN1cHBvcnRpbmcgcmVzb3VyY2VzLlxyXG4gICAqL1xyXG4gIHJ1bGVzZXQ/OiBmaGlyLkNvZGluZ0FyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEtub3dsZWRnZSBvZiB0aGUgb3JpZ2luYWwgdmVyc2lvbiBjYW4gaW5mb3JtIHRoZSBwcm9jZXNzaW5nIG9mIHRoaXMgaW5zdGFuY2Ugc28gdGhhdCBpbmZvcm1hdGlvbiB3aGljaCBpcyBwcm9jZXNzYWJsZSBieSB0aGUgb3JpZ2luYXRpbmcgc3lzdGVtIG1heSBiZSBnZW5lcmF0ZWQuXHJcbiAgICovXHJcbiAgb3JpZ2luYWxSdWxlc2V0PzogZmhpci5Db2RpbmdBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB3aGVuIHRoZSBlbmNsb3NlZCBzdWl0ZSBvZiBzZXJ2aWNlcyB3ZXJlIHBlcmZvcm1lZCBvciBjb21wbGV0ZWQuXHJcbiAgICovXHJcbiAgY3JlYXRlZD86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEVucm9sbG1lbnRSZXNwb25zZS5jcmVhdGVkXHJcbiAgICovXHJcbiAgX2NyZWF0ZWQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBJbnN1cmVyIHdobyBwcm9kdWNlZCB0aGlzIGFkanVkaWNhdGVkIHJlc3BvbnNlLlxyXG4gICAqL1xyXG4gIG9yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHByYWN0aXRpb25lciB3aG8gaXMgcmVzcG9uc2libGUgZm9yIHRoZSBzZXJ2aWNlcyByZW5kZXJlZCB0byB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICByZXF1ZXN0UHJvdmlkZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvcmdhbml6YXRpb24gd2hpY2ggaXMgcmVzcG9uc2libGUgZm9yIHRoZSBzZXJ2aWNlcyByZW5kZXJlZCB0byB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICByZXF1ZXN0T3JnYW5pemF0aW9uPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgcmVzb3VyY2UgcHJvdmlkZXMgZW5yb2xsbWVudCBhbmQgcGxhbiBkZXRhaWxzIGZyb20gdGhlIHByb2Nlc3Npbmcgb2YgYW4gRW5yb2xsbWVudCByZXNvdXJjZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBFbnJvbGxtZW50UmVzcG9uc2UgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0Vucm9sbG1lbnRSZXNwb25zZSc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJFbnJvbGxtZW50UmVzcG9uc2VcIjtcclxuICAvKipcclxuICAgKiBUaGUgUmVzcG9uc2UgYnVzaW5lc3MgaWRlbnRpZmllci5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogT3JpZ2luYWwgcmVxdWVzdCByZXNvdXJjZSByZWZlcmVuY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHJlcXVlc3Q/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVHJhbnNhY3Rpb24gc3RhdHVzOiBlcnJvciwgY29tcGxldGUuXHJcbiAgICovXHJcbiAgcHVibGljIG91dGNvbWU/OiBmaGlyLkZoaXJDb2RlPFJlbWl0dGFuY2VPdXRjb21lQ29kZVR5cGU+fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBzdGF0dXMgb2YgdGhlIGFkanVkaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgZGlzcG9zaXRpb24/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBzdHlsZSBvZiByZXNvdXJjZSBjb250ZW50cy4gVGhpcyBzaG91bGQgYmUgbWFwcGVkIHRvIHRoZSBhbGxvd2FibGUgcHJvZmlsZXMgZm9yIHRoaXMgYW5kIHN1cHBvcnRpbmcgcmVzb3VyY2VzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBydWxlc2V0PzogZmhpci5Db2Rpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEtub3dsZWRnZSBvZiB0aGUgb3JpZ2luYWwgdmVyc2lvbiBjYW4gaW5mb3JtIHRoZSBwcm9jZXNzaW5nIG9mIHRoaXMgaW5zdGFuY2Ugc28gdGhhdCBpbmZvcm1hdGlvbiB3aGljaCBpcyBwcm9jZXNzYWJsZSBieSB0aGUgb3JpZ2luYXRpbmcgc3lzdGVtIG1heSBiZSBnZW5lcmF0ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIG9yaWdpbmFsUnVsZXNldD86IGZoaXIuQ29kaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB3aGVuIHRoZSBlbmNsb3NlZCBzdWl0ZSBvZiBzZXJ2aWNlcyB3ZXJlIHBlcmZvcm1lZCBvciBjb21wbGV0ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGNyZWF0ZWQ/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIEluc3VyZXIgd2hvIHByb2R1Y2VkIHRoaXMgYWRqdWRpY2F0ZWQgcmVzcG9uc2UuXHJcbiAgICovXHJcbiAgcHVibGljIG9yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcHJhY3RpdGlvbmVyIHdobyBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHNlcnZpY2VzIHJlbmRlcmVkIHRvIHRoZSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXF1ZXN0UHJvdmlkZXI/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIG9yZ2FuaXphdGlvbiB3aGljaCBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHNlcnZpY2VzIHJlbmRlcmVkIHRvIHRoZSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXF1ZXN0T3JnYW5pemF0aW9uPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEVucm9sbG1lbnRSZXNwb25zZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEVucm9sbG1lbnRSZXNwb25zZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdFbnJvbGxtZW50UmVzcG9uc2UnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVxdWVzdCddKSB7IHRoaXMucmVxdWVzdCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucmVxdWVzdCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ291dGNvbWUnXSkgeyB0aGlzLm91dGNvbWUgPSBuZXcgZmhpci5GaGlyQ29kZTxSZW1pdHRhbmNlT3V0Y29tZUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5vdXRjb21lfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19vdXRjb21lJ10pIHtcclxuICAgICAgaWYgKHRoaXMub3V0Y29tZSkgeyB0aGlzLm91dGNvbWUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fb3V0Y29tZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLm91dGNvbWUgPSBuZXcgZmhpci5GaGlyQ29kZTxSZW1pdHRhbmNlT3V0Y29tZUNvZGVUeXBlPihzb3VyY2UuX291dGNvbWUgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2Rpc3Bvc2l0aW9uJ10pIHsgdGhpcy5kaXNwb3NpdGlvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZGlzcG9zaXRpb259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Rpc3Bvc2l0aW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZGlzcG9zaXRpb24pIHsgdGhpcy5kaXNwb3NpdGlvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kaXNwb3NpdGlvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRpc3Bvc2l0aW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Rpc3Bvc2l0aW9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydydWxlc2V0J10pIHsgdGhpcy5ydWxlc2V0ID0gbmV3IGZoaXIuQ29kaW5nKHNvdXJjZS5ydWxlc2V0KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnb3JpZ2luYWxSdWxlc2V0J10pIHsgdGhpcy5vcmlnaW5hbFJ1bGVzZXQgPSBuZXcgZmhpci5Db2Rpbmcoc291cmNlLm9yaWdpbmFsUnVsZXNldCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2NyZWF0ZWQnXSkgeyB0aGlzLmNyZWF0ZWQgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UuY3JlYXRlZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfY3JlYXRlZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyZWF0ZWQpIHsgdGhpcy5jcmVhdGVkLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NyZWF0ZWQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jcmVhdGVkID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fY3JlYXRlZCBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydvcmdhbml6YXRpb24nXSkgeyB0aGlzLm9yZ2FuaXphdGlvbiA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uub3JnYW5pemF0aW9uKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVxdWVzdFByb3ZpZGVyJ10pIHsgdGhpcy5yZXF1ZXN0UHJvdmlkZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnJlcXVlc3RQcm92aWRlcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlcXVlc3RPcmdhbml6YXRpb24nXSkgeyB0aGlzLnJlcXVlc3RPcmdhbml6YXRpb24gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnJlcXVlc3RPcmdhbml6YXRpb24pOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnRW5yb2xsbWVudFJlc3BvbnNlJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncmVxdWVzdCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPU1YoJ291dGNvbWUnLGV4cCwnUmVtaXR0YW5jZU91dGNvbWUnLFJlbWl0dGFuY2VPdXRjb21lVnNWYWxpZGF0aW9uLCdyJykpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2Rpc3Bvc2l0aW9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdydWxlc2V0JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdvcmlnaW5hbFJ1bGVzZXQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2NyZWF0ZWQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ29yZ2FuaXphdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncmVxdWVzdFByb3ZpZGVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdyZXF1ZXN0T3JnYW5pemF0aW9uJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==