// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: EligibilityRequest
import * as fhir from '../fhir.js';
// @ts-ignore
import { FmStatusVsValidation } from '../fhirValueSets/FmStatusVsValidation.js';
/**
 * The EligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an EligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 */
export class EligibilityRequest extends fhir.DomainResource {
    /**
     * Default constructor for EligibilityRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'EligibilityRequest';
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
        if (source['priority']) {
            this.priority = new fhir.CodeableConcept(source.priority);
        }
        if (source['patient']) {
            this.patient = new fhir.Reference(source.patient);
        }
        if (source['serviced']) {
            this.serviced = source.serviced;
        }
        else if (source['servicedDate']) {
            this.serviced = new fhir.FhirDate({ value: source.servicedDate });
        }
        else if (source['servicedPeriod']) {
            this.serviced = new fhir.Period(source.servicedPeriod);
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
        if (source['enterer']) {
            this.enterer = new fhir.Reference(source.enterer);
        }
        if (source['provider']) {
            this.provider = new fhir.Reference(source.provider);
        }
        if (source['organization']) {
            this.organization = new fhir.Reference(source.organization);
        }
        if (source['insurer']) {
            this.insurer = new fhir.Reference(source.insurer);
        }
        if (source['facility']) {
            this.facility = new fhir.Reference(source.facility);
        }
        if (source['coverage']) {
            this.coverage = new fhir.Reference(source.coverage);
        }
        if (source['businessArrangement']) {
            this.businessArrangement = new fhir.FhirString({ value: source.businessArrangement });
        }
        if (source['_businessArrangement']) {
            if (this.businessArrangement) {
                this.businessArrangement.addExtendedProperties(source._businessArrangement);
            }
            else {
                this.businessArrangement = new fhir.FhirString(source._businessArrangement);
            }
        }
        if (source['benefitCategory']) {
            this.benefitCategory = new fhir.CodeableConcept(source.benefitCategory);
        }
        if (source['benefitSubCategory']) {
            this.benefitSubCategory = new fhir.CodeableConcept(source.benefitSubCategory);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'EligibilityRequest';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vOSV('status', exp, 'FmStatus', FmStatusVsValidation, 'r');
        this.vOS('priority', exp);
        this.vOS('patient', exp);
        this.vOS('serviced', exp);
        this.vOS('created', exp);
        this.vOS('enterer', exp);
        this.vOS('provider', exp);
        this.vOS('organization', exp);
        this.vOS('insurer', exp);
        this.vOS('facility', exp);
        this.vOS('coverage', exp);
        this.vOS('businessArrangement', exp);
        this.vOS('benefitCategory', exp);
        this.vOS('benefitSubCategory', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
EligibilityRequest._fts_dataType = 'EligibilityRequest';
/**
 * Internal flag to properly serialize choice-type element EligibilityRequest.serviced[x]
 */
EligibilityRequest._fts_servicedIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxpZ2liaWxpdHlSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9FbGlnaWJpbGl0eVJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQXVHaEY7O0dBRUc7QUFDSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUF5RXpEOztPQUVHO0lBQ0gsWUFBWSxTQUF5QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUMvRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQW9CLENBQUM7UUFDekMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2hHO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFtQixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3BHLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHFC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QUFHLEVBQUMsVUFBVSxFQUFDLG9CQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBcElEOztHQUVHO0FBQzZCLGdDQUFhLEdBQVUsb0JBQW9CLENBQUM7QUF5QjVFOztHQUVHO0FBQ3VCLHdDQUFxQixHQUFRLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogRWxpZ2liaWxpdHlSZXF1ZXN0XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBGbVN0YXR1c0NvZGVzLCAgRm1TdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRm1TdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRm1TdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0ZtU3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBQcm9jZXNzUHJpb3JpdHlDb2RlcywgIFByb2Nlc3NQcmlvcml0eUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Qcm9jZXNzUHJpb3JpdHlDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUHJvY2Vzc1ByaW9yaXR5VnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Qcm9jZXNzUHJpb3JpdHlWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEJlbmVmaXRDYXRlZ29yeUNvZGVzLCAgQmVuZWZpdENhdGVnb3J5Q29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0JlbmVmaXRDYXRlZ29yeUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBCZW5lZml0Q2F0ZWdvcnlWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0JlbmVmaXRDYXRlZ29yeVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQmVuZWZpdFN1YmNhdGVnb3J5Q29kZXMsICBCZW5lZml0U3ViY2F0ZWdvcnlDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQmVuZWZpdFN1YmNhdGVnb3J5Q29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEJlbmVmaXRTdWJjYXRlZ29yeVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQmVuZWZpdFN1YmNhdGVnb3J5VnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEVsaWdpYmlsaXR5UmVxdWVzdCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBFbGlnaWJpbGl0eVJlcXVlc3RBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJFbGlnaWJpbGl0eVJlcXVlc3RcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIFJlc3BvbnNlIGJ1c2luZXNzIGlkZW50aWZpZXIuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHN0YXR1cyBvZiB0aGUgcmVzb3VyY2UgaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgc3RhdHVzPzogZmhpci5GaGlyQ29kZTxGbVN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFbGlnaWJpbGl0eVJlcXVlc3Quc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogSW1tZWRpYXRlIChTVEFUKSwgYmVzdCBlZmZvcnQgKE5PUk1BTCksIGRlZmVycmVkIChERUZFUikuXHJcbiAgICovXHJcbiAgcHJpb3JpdHk/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIDEuLjEuXHJcbiAgICovXHJcbiAgcGF0aWVudD86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgb3IgZGF0ZXMgd2hlbiB0aGUgZW5jbG9zZWQgc3VpdGUgb2Ygc2VydmljZXMgd2VyZSBwZXJmb3JtZWQgb3IgY29tcGxldGVkLlxyXG4gICAqL1xyXG4gIHNlcnZpY2VkPzogZmhpci5GaGlyRGF0ZXxmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgb3IgZGF0ZXMgd2hlbiB0aGUgZW5jbG9zZWQgc3VpdGUgb2Ygc2VydmljZXMgd2VyZSBwZXJmb3JtZWQgb3IgY29tcGxldGVkLlxyXG4gICAqL1xyXG4gIHNlcnZpY2VkRGF0ZT86IGZoaXIuRmhpckRhdGV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSBvciBkYXRlcyB3aGVuIHRoZSBlbmNsb3NlZCBzdWl0ZSBvZiBzZXJ2aWNlcyB3ZXJlIHBlcmZvcm1lZCBvciBjb21wbGV0ZWQuXHJcbiAgICovXHJcbiAgc2VydmljZWRQZXJpb2Q/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHdoZW4gdGhpcyByZXNvdXJjZSB3YXMgY3JlYXRlZC5cclxuICAgKi9cclxuICBjcmVhdGVkPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRWxpZ2liaWxpdHlSZXF1ZXN0LmNyZWF0ZWRcclxuICAgKi9cclxuICBfY3JlYXRlZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogUGVyc29uIHdobyBjcmVhdGVkIHRoZSBpbnZvaWNlL2NsYWltL3ByZS1kZXRlcm1pbmF0aW9uIG9yIHByZS1hdXRob3JpemF0aW9uLlxyXG4gICAqL1xyXG4gIGVudGVyZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwcmFjdGl0aW9uZXIgd2hvIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgc2VydmljZXMgcmVuZGVyZWQgdG8gdGhlIHBhdGllbnQuXHJcbiAgICovXHJcbiAgcHJvdmlkZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvcmdhbml6YXRpb24gd2hpY2ggaXMgcmVzcG9uc2libGUgZm9yIHRoZSBzZXJ2aWNlcyByZW5kZXJlZCB0byB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBvcmdhbml6YXRpb24/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBJbnN1cmVyIHdobyBpcyB0YXJnZXQgIG9mIHRoZSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIGluc3VyZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEZhY2lsaXR5IHdoZXJlIHRoZSBzZXJ2aWNlcyB3ZXJlIHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGZhY2lsaXR5PzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiAxLi4xLlxyXG4gICAqL1xyXG4gIGNvdmVyYWdlPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgY29udHJhY3QgbnVtYmVyIG9mIGEgYnVzaW5lc3MgYWdyZWVtZW50IHdoaWNoIGRlc2NyaWJlcyB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMuXHJcbiAgICovXHJcbiAgYnVzaW5lc3NBcnJhbmdlbWVudD86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFbGlnaWJpbGl0eVJlcXVlc3QuYnVzaW5lc3NBcnJhbmdlbWVudFxyXG4gICAqL1xyXG4gIF9idXNpbmVzc0FycmFuZ2VtZW50PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBEZW50YWwsIFZpc2lvbiwgTWVkaWNhbCwgUGhhcm1hY3ksIFJlaGFiIGV0Yy5cclxuICAgKi9cclxuICBiZW5lZml0Q2F0ZWdvcnk/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlbnRhbDogYmFzaWMsIG1ham9yLCBvcnRobzsgVmlzaW9uIGV4YW0sIGdsYXNzZXMsIGNvbnRhY3RzOyBldGMuXHJcbiAgICovXHJcbiAgYmVuZWZpdFN1YkNhdGVnb3J5PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBFbGlnaWJpbGl0eVJlcXVlc3QgcHJvdmlkZXMgcGF0aWVudCBhbmQgaW5zdXJhbmNlIGNvdmVyYWdlIGluZm9ybWF0aW9uIHRvIGFuIGluc3VyZXIgZm9yIHRoZW0gdG8gcmVzcG9uZCwgaW4gdGhlIGZvcm0gb2YgYW4gRWxpZ2liaWxpdHlSZXNwb25zZSwgd2l0aCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgd2hldGhlciB0aGUgc3RhdGVkIGNvdmVyYWdlIGlzIHZhbGlkIGFuZCBpbi1mb3JjZSBhbmQgb3B0aW9uYWxseSB0byBwcm92aWRlIHRoZSBpbnN1cmFuY2UgZGV0YWlscyBvZiB0aGUgcG9saWN5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVsaWdpYmlsaXR5UmVxdWVzdCBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRWxpZ2liaWxpdHlSZXF1ZXN0JztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIkVsaWdpYmlsaXR5UmVxdWVzdFwiO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBSZXNwb25zZSBidXNpbmVzcyBpZGVudGlmaWVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBUaGUgc3RhdHVzIG9mIHRoZSByZXNvdXJjZSBpbnN0YW5jZS5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzPzogZmhpci5GaGlyQ29kZTxGbVN0YXR1c0NvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW1tZWRpYXRlIChTVEFUKSwgYmVzdCBlZmZvcnQgKE5PUk1BTCksIGRlZmVycmVkIChERUZFUikuXHJcbiAgICovXHJcbiAgcHVibGljIHByaW9yaXR5PzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIDEuLjEuXHJcbiAgICovXHJcbiAgcHVibGljIHBhdGllbnQ/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgb3IgZGF0ZXMgd2hlbiB0aGUgZW5jbG9zZWQgc3VpdGUgb2Ygc2VydmljZXMgd2VyZSBwZXJmb3JtZWQgb3IgY29tcGxldGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXJ2aWNlZD86IChmaGlyLkZoaXJEYXRlfGZoaXIuUGVyaW9kKXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgZmxhZyB0byBwcm9wZXJseSBzZXJpYWxpemUgY2hvaWNlLXR5cGUgZWxlbWVudCBFbGlnaWJpbGl0eVJlcXVlc3Quc2VydmljZWRbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfc2VydmljZWRJc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB3aGVuIHRoaXMgcmVzb3VyY2Ugd2FzIGNyZWF0ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGNyZWF0ZWQ/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUGVyc29uIHdobyBjcmVhdGVkIHRoZSBpbnZvaWNlL2NsYWltL3ByZS1kZXRlcm1pbmF0aW9uIG9yIHByZS1hdXRob3JpemF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBlbnRlcmVyPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwcmFjdGl0aW9uZXIgd2hvIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgc2VydmljZXMgcmVuZGVyZWQgdG8gdGhlIHBhdGllbnQuXHJcbiAgICovXHJcbiAgcHVibGljIHByb3ZpZGVyPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvcmdhbml6YXRpb24gd2hpY2ggaXMgcmVzcG9uc2libGUgZm9yIHRoZSBzZXJ2aWNlcyByZW5kZXJlZCB0byB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgb3JnYW5pemF0aW9uPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBJbnN1cmVyIHdobyBpcyB0YXJnZXQgIG9mIHRoZSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpbnN1cmVyPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEZhY2lsaXR5IHdoZXJlIHRoZSBzZXJ2aWNlcyB3ZXJlIHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBmYWNpbGl0eT86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiAxLi4xLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb3ZlcmFnZT86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgY29udHJhY3QgbnVtYmVyIG9mIGEgYnVzaW5lc3MgYWdyZWVtZW50IHdoaWNoIGRlc2NyaWJlcyB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMuXHJcbiAgICovXHJcbiAgcHVibGljIGJ1c2luZXNzQXJyYW5nZW1lbnQ/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlbnRhbCwgVmlzaW9uLCBNZWRpY2FsLCBQaGFybWFjeSwgUmVoYWIgZXRjLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBiZW5lZml0Q2F0ZWdvcnk/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVudGFsOiBiYXNpYywgbWFqb3IsIG9ydGhvOyBWaXNpb24gZXhhbSwgZ2xhc3NlcywgY29udGFjdHM7IGV0Yy5cclxuICAgKi9cclxuICBwdWJsaWMgYmVuZWZpdFN1YkNhdGVnb3J5PzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEVsaWdpYmlsaXR5UmVxdWVzdCAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEVsaWdpYmlsaXR5UmVxdWVzdEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdFbGlnaWJpbGl0eVJlcXVlc3QnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxGbVN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxGbVN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3N0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncHJpb3JpdHknXSkgeyB0aGlzLnByaW9yaXR5ID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5wcmlvcml0eSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3BhdGllbnQnXSkgeyB0aGlzLnBhdGllbnQgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnBhdGllbnQpOyB9XHJcbiAgICBpZiAoc291cmNlWydzZXJ2aWNlZCddKSB7IHRoaXMuc2VydmljZWQgPSBzb3VyY2Uuc2VydmljZWQ7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnc2VydmljZWREYXRlJ10pIHsgdGhpcy5zZXJ2aWNlZCA9IG5ldyBmaGlyLkZoaXJEYXRlKHt2YWx1ZTogc291cmNlLnNlcnZpY2VkRGF0ZX0pOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3NlcnZpY2VkUGVyaW9kJ10pIHsgdGhpcy5zZXJ2aWNlZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2Uuc2VydmljZWRQZXJpb2QpOyB9XHJcbiAgICBpZiAoc291cmNlWydjcmVhdGVkJ10pIHsgdGhpcy5jcmVhdGVkID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLmNyZWF0ZWR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NyZWF0ZWQnXSkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGVkKSB7IHRoaXMuY3JlYXRlZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jcmVhdGVkISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY3JlYXRlZCA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX2NyZWF0ZWQgYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZW50ZXJlciddKSB7IHRoaXMuZW50ZXJlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuZW50ZXJlcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ3Byb3ZpZGVyJ10pIHsgdGhpcy5wcm92aWRlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucHJvdmlkZXIpOyB9XHJcbiAgICBpZiAoc291cmNlWydvcmdhbml6YXRpb24nXSkgeyB0aGlzLm9yZ2FuaXphdGlvbiA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uub3JnYW5pemF0aW9uKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnaW5zdXJlciddKSB7IHRoaXMuaW5zdXJlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuaW5zdXJlcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2ZhY2lsaXR5J10pIHsgdGhpcy5mYWNpbGl0eSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuZmFjaWxpdHkpOyB9XHJcbiAgICBpZiAoc291cmNlWydjb3ZlcmFnZSddKSB7IHRoaXMuY292ZXJhZ2UgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmNvdmVyYWdlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYnVzaW5lc3NBcnJhbmdlbWVudCddKSB7IHRoaXMuYnVzaW5lc3NBcnJhbmdlbWVudCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuYnVzaW5lc3NBcnJhbmdlbWVudH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfYnVzaW5lc3NBcnJhbmdlbWVudCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmJ1c2luZXNzQXJyYW5nZW1lbnQpIHsgdGhpcy5idXNpbmVzc0FycmFuZ2VtZW50LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2J1c2luZXNzQXJyYW5nZW1lbnQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5idXNpbmVzc0FycmFuZ2VtZW50ID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2J1c2luZXNzQXJyYW5nZW1lbnQgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2JlbmVmaXRDYXRlZ29yeSddKSB7IHRoaXMuYmVuZWZpdENhdGVnb3J5ID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5iZW5lZml0Q2F0ZWdvcnkpOyB9XHJcbiAgICBpZiAoc291cmNlWydiZW5lZml0U3ViQ2F0ZWdvcnknXSkgeyB0aGlzLmJlbmVmaXRTdWJDYXRlZ29yeSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuYmVuZWZpdFN1YkNhdGVnb3J5KTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0VsaWdpYmlsaXR5UmVxdWVzdCcgfVxyXG4gICAgdGhpcy52UlMoJ3Jlc291cmNlVHlwZScsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2lkZW50aWZpZXInLGV4cClcclxuICAgIHRoaXMudk9TVignc3RhdHVzJyxleHAsJ0ZtU3RhdHVzJyxGbVN0YXR1c1ZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZPUygncHJpb3JpdHknLGV4cClcclxuICAgIHRoaXMudk9TKCdwYXRpZW50JyxleHApXHJcbiAgICB0aGlzLnZPUygnc2VydmljZWQnLGV4cClcclxuICAgIHRoaXMudk9TKCdjcmVhdGVkJyxleHApXHJcbiAgICB0aGlzLnZPUygnZW50ZXJlcicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3Byb3ZpZGVyJyxleHApXHJcbiAgICB0aGlzLnZPUygnb3JnYW5pemF0aW9uJyxleHApXHJcbiAgICB0aGlzLnZPUygnaW5zdXJlcicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2ZhY2lsaXR5JyxleHApXHJcbiAgICB0aGlzLnZPUygnY292ZXJhZ2UnLGV4cClcclxuICAgIHRoaXMudk9TKCdidXNpbmVzc0FycmFuZ2VtZW50JyxleHApXHJcbiAgICB0aGlzLnZPUygnYmVuZWZpdENhdGVnb3J5JyxleHApXHJcbiAgICB0aGlzLnZPUygnYmVuZWZpdFN1YkNhdGVnb3J5JyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=