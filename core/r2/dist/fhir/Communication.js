// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Communication
import * as fhir from '../fhir.js';
// @ts-ignore
import { CommunicationStatusVsValidation } from '../fhirValueSets/CommunicationStatusVsValidation.js';
/**
 * Text, attachment(s), or resource(s) that was communicated to the recipient.
 */
export class CommunicationPayload extends fhir.BackboneElement {
    /**
     * Default constructor for CommunicationPayload - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['content']) {
            this.content = source.content;
        }
        else if (source['contentString'] !== undefined) {
            this.content = new fhir.FhirString({ value: source.contentString }, options);
        }
        else if (source['contentAttachment']) {
            this.content = new fhir.Attachment(source.contentAttachment, options);
        }
        else if (source['contentReference']) {
            this.content = new fhir.Reference(source.contentReference, options);
        }
        else {
            this.content = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Communication.payload';
        }
        iss.push(...this.vRS('content', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
CommunicationPayload._fts_dataType = 'CommunicationPayload';
/**
 * Internal flag to properly serialize choice-type element Communication.payload.content[x]
 */
CommunicationPayload._fts_contentIsChoice = true;
/**
 * An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency was notified about a reportable condition.
 */
export class Communication extends fhir.DomainResource {
    /**
     * Default constructor for Communication - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Communication';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options));
        }
        else {
            this.identifier = [];
        }
        if (source['category']) {
            this.category = new fhir.CodeableConcept(source.category, options);
        }
        if (source['sender']) {
            this.sender = new fhir.Reference(source.sender, options);
        }
        if (source['recipient']) {
            this.recipient = source.recipient.map((x) => new fhir.Reference(x, options));
        }
        else {
            this.recipient = [];
        }
        if (source['payload']) {
            this.payload = source.payload.map((x) => new fhir.CommunicationPayload(x, options));
        }
        else {
            this.payload = [];
        }
        if (source['medium']) {
            this.medium = source.medium.map((x) => new fhir.CodeableConcept(x, options));
        }
        else {
            this.medium = [];
        }
        if (source['status'] !== undefined) {
            this.status = new fhir.FhirCode({ value: source.status }, options);
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status, options);
            }
        }
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter, options);
        }
        if (source['sent'] !== undefined) {
            this.sent = new fhir.FhirDateTime({ value: source.sent }, options);
        }
        if (source['_sent']) {
            if (this.sent) {
                this.sent.addExtendedProperties(source._sent);
            }
            else {
                this.sent = new fhir.FhirDateTime(source._sent, options);
            }
        }
        if (source['received'] !== undefined) {
            this.received = new fhir.FhirDateTime({ value: source.received }, options);
        }
        if (source['_received']) {
            if (this.received) {
                this.received.addExtendedProperties(source._received);
            }
            else {
                this.received = new fhir.FhirDateTime(source._received, options);
            }
        }
        if (source['reason']) {
            this.reason = source.reason.map((x) => new fhir.CodeableConcept(x, options));
        }
        else {
            this.reason = [];
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject, options);
        }
        if (source['requestDetail']) {
            this.requestDetail = new fhir.Reference(source.requestDetail, options);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Communication';
        }
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vOS('category', exp));
        iss.push(...this.vOS('sender', exp));
        iss.push(...this.vOA('recipient', exp));
        iss.push(...this.vOA('payload', exp));
        iss.push(...this.vOA('medium', exp));
        iss.push(...this.vOSV('status', exp, 'CommunicationStatus', CommunicationStatusVsValidation, 'r'));
        iss.push(...this.vOS('encounter', exp));
        iss.push(...this.vOS('sent', exp));
        iss.push(...this.vOS('received', exp));
        iss.push(...this.vOA('reason', exp));
        iss.push(...this.vOS('subject', exp));
        iss.push(...this.vOS('requestDetail', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Communication._fts_dataType = 'Communication';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbXVuaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQ29tbXVuaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBdUJ0Rzs7R0FFRztBQUNILE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxJQUFJLENBQUMsZUFBZTtJQWE1RDs7T0FFRztJQUNILFlBQVksU0FBMkMsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDakcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUFFO2FBQ3BELElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxhQUFhLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO2FBQzFILElBQUksTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTthQUMzRyxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxD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QyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0MsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQXJIRDs7R0FFRztBQUM2QiwyQkFBYSxHQUFVLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMi5jb3JlIHZlcnNpb246IDEuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogQ29tbXVuaWNhdGlvblxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblN0YXR1c0NvZGVzLCAgQ29tbXVuaWNhdGlvblN0YXR1c0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Db21tdW5pY2F0aW9uU3RhdHVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0NvbW11bmljYXRpb25TdGF0dXNWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgQ29tbXVuaWNhdGlvblBheWxvYWQgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tbXVuaWNhdGlvblBheWxvYWRBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBBIGNvbW11bmljYXRlZCBjb250ZW50IChvciBmb3IgbXVsdGktcGFydCBjb21tdW5pY2F0aW9ucywgb25lIHBvcnRpb24gb2YgdGhlIGNvbW11bmljYXRpb24pLlxyXG4gICAqL1xyXG4gIGNvbnRlbnQ/OiBmaGlyLkZoaXJTdHJpbmd8Zmhpci5BdHRhY2htZW50fGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGNvbW11bmljYXRlZCBjb250ZW50IChvciBmb3IgbXVsdGktcGFydCBjb21tdW5pY2F0aW9ucywgb25lIHBvcnRpb24gb2YgdGhlIGNvbW11bmljYXRpb24pLlxyXG4gICAqL1xyXG4gIGNvbnRlbnRTdHJpbmc/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGNvbW11bmljYXRlZCBjb250ZW50IChvciBmb3IgbXVsdGktcGFydCBjb21tdW5pY2F0aW9ucywgb25lIHBvcnRpb24gb2YgdGhlIGNvbW11bmljYXRpb24pLlxyXG4gICAqL1xyXG4gIGNvbnRlbnRBdHRhY2htZW50PzogZmhpci5BdHRhY2htZW50QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBjb21tdW5pY2F0ZWQgY29udGVudCAob3IgZm9yIG11bHRpLXBhcnQgY29tbXVuaWNhdGlvbnMsIG9uZSBwb3J0aW9uIG9mIHRoZSBjb21tdW5pY2F0aW9uKS5cclxuICAgKi9cclxuICBjb250ZW50UmVmZXJlbmNlPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRleHQsIGF0dGFjaG1lbnQocyksIG9yIHJlc291cmNlKHMpIHRoYXQgd2FzIGNvbW11bmljYXRlZCB0byB0aGUgcmVjaXBpZW50LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbW11bmljYXRpb25QYXlsb2FkIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQ29tbXVuaWNhdGlvblBheWxvYWQnO1xyXG4gIC8qKlxyXG4gICAqIEEgY29tbXVuaWNhdGVkIGNvbnRlbnQgKG9yIGZvciBtdWx0aS1wYXJ0IGNvbW11bmljYXRpb25zLCBvbmUgcG9ydGlvbiBvZiB0aGUgY29tbXVuaWNhdGlvbikuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnRlbnQ6IChmaGlyLkZoaXJTdHJpbmd8Zmhpci5BdHRhY2htZW50fGZoaXIuUmVmZXJlbmNlKXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIGZsYWcgdG8gcHJvcGVybHkgc2VyaWFsaXplIGNob2ljZS10eXBlIGVsZW1lbnQgQ29tbXVuaWNhdGlvbi5wYXlsb2FkLmNvbnRlbnRbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfY29udGVudElzQ2hvaWNlOnRydWUgPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIENvbW11bmljYXRpb25QYXlsb2FkIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8Q29tbXVuaWNhdGlvblBheWxvYWRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnY29udGVudCddKSB7IHRoaXMuY29udGVudCA9IHNvdXJjZS5jb250ZW50OyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ2NvbnRlbnRTdHJpbmcnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuY29udGVudCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuY29udGVudFN0cmluZ30sIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ2NvbnRlbnRBdHRhY2htZW50J10pIHsgdGhpcy5jb250ZW50ID0gbmV3IGZoaXIuQXR0YWNobWVudChzb3VyY2UuY29udGVudEF0dGFjaG1lbnQsIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ2NvbnRlbnRSZWZlcmVuY2UnXSkgeyB0aGlzLmNvbnRlbnQgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmNvbnRlbnRSZWZlcmVuY2UsIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb250ZW50ID0gbnVsbDsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0NvbW11bmljYXRpb24ucGF5bG9hZCcgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ2NvbnRlbnQnLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIENvbW11bmljYXRpb24gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tbXVuaWNhdGlvbkFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkNvbW11bmljYXRpb25cInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcnMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgQ29tbXVuaWNhdGlvbiB0aGF0IGFyZSBkZWZpbmVkIGJ5IGJ1c2luZXNzIHByb2Nlc3NlcyBhbmQvIG9yIHVzZWQgdG8gcmVmZXIgdG8gaXQgd2hlbiBhIGRpcmVjdCBVUkwgcmVmZXJlbmNlIHRvIHRoZSByZXNvdXJjZSBpdHNlbGYgaXMgbm90IGFwcHJvcHJpYXRlIChlLmcuIGluIENEQSBkb2N1bWVudHMsIG9yIGluIHdyaXR0ZW4gLyBwcmludGVkIGRvY3VtZW50YXRpb24pLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0eXBlIG9mIG1lc3NhZ2UgY29udmV5ZWQgc3VjaCBhcyBhbGVydCwgbm90aWZpY2F0aW9uLCByZW1pbmRlciwgaW5zdHJ1Y3Rpb24sIGV0Yy5cclxuICAgKi9cclxuICBjYXRlZ29yeT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGVudGl0eSAoZS5nLiBwZXJzb24sIG9yZ2FuaXphdGlvbiwgY2xpbmljYWwgaW5mb3JtYXRpb24gc3lzdGVtLCBvciBkZXZpY2UpIHdoaWNoIHdhcyB0aGUgc291cmNlIG9mIHRoZSBjb21tdW5pY2F0aW9uLlxyXG4gICAqL1xyXG4gIHNlbmRlcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGVudGl0eSAoZS5nLiBwZXJzb24sIG9yZ2FuaXphdGlvbiwgY2xpbmljYWwgaW5mb3JtYXRpb24gc3lzdGVtLCBvciBkZXZpY2UpIHdoaWNoIHdhcyB0aGUgdGFyZ2V0IG9mIHRoZSBjb21tdW5pY2F0aW9uLiBJZiByZWNlaXB0cyBuZWVkIHRvIGJlIHRyYWNrZWQgYnkgaW5kaXZpZHVhbCwgYSBzZXBhcmF0ZSByZXNvdXJjZSBpbnN0YW5jZSB3aWxsIG5lZWQgdG8gYmUgY3JlYXRlZCBmb3IgZWFjaCByZWNpcGllbnQuIMKgTXVsdGlwbGUgcmVjaXBpZW50IGNvbW11bmljYXRpb25zIGFyZSBpbnRlbmRlZCB3aGVyZSBlaXRoZXIgYSByZWNlaXB0KHMpIGlzIG5vdCB0cmFja2VkIChlLmcuIGEgbWFzcyBtYWlsLW91dCkgb3IgaXMgY2FwdHVyZWQgaW4gYWdncmVnYXRlIChhbGwgZW1haWxzIGNvbmZpcm1lZCByZWNlaXZlZCBieSBhIHBhcnRpY3VsYXIgdGltZSkuXHJcbiAgICovXHJcbiAgcmVjaXBpZW50PzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRleHQsIGF0dGFjaG1lbnQocyksIG9yIHJlc291cmNlKHMpIHRoYXQgd2FzIGNvbW11bmljYXRlZCB0byB0aGUgcmVjaXBpZW50LlxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBmaGlyLkNvbW11bmljYXRpb25QYXlsb2FkQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGNoYW5uZWwgdGhhdCB3YXMgdXNlZCBmb3IgdGhpcyBjb21tdW5pY2F0aW9uIChlLmcuIGVtYWlsLCBmYXgpLlxyXG4gICAqL1xyXG4gIG1lZGl1bT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgc3RhdHVzIG9mIHRoZSB0cmFuc21pc3Npb24uXHJcbiAgICovXHJcbiAgc3RhdHVzPzogZmhpci5GaGlyQ29kZTxDb21tdW5pY2F0aW9uU3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvbW11bmljYXRpb24uc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIGVuY291bnRlciB3aXRoaW4gd2hpY2ggdGhlIGNvbW11bmljYXRpb24gd2FzIHNlbnQuXHJcbiAgICovXHJcbiAgZW5jb3VudGVyPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdGltZSB3aGVuIHRoaXMgY29tbXVuaWNhdGlvbiB3YXMgc2VudC5cclxuICAgKi9cclxuICBzZW50PzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29tbXVuaWNhdGlvbi5zZW50XHJcbiAgICovXHJcbiAgX3NlbnQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lIHdoZW4gdGhpcyBjb21tdW5pY2F0aW9uIGFycml2ZWQgYXQgdGhlIGRlc3RpbmF0aW9uLlxyXG4gICAqL1xyXG4gIHJlY2VpdmVkPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29tbXVuaWNhdGlvbi5yZWNlaXZlZFxyXG4gICAqL1xyXG4gIF9yZWNlaXZlZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIHJlYXNvbiBvciBqdXN0aWZpY2F0aW9uIGZvciB0aGUgY29tbXVuaWNhdGlvbi5cclxuICAgKi9cclxuICByZWFzb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBhdGllbnQgd2hvIHdhcyB0aGUgZm9jdXMgb2YgdGhpcyBjb21tdW5pY2F0aW9uLlxyXG4gICAqL1xyXG4gIHN1YmplY3Q/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBjb21tdW5pY2F0aW9uIHJlcXVlc3QgdGhhdCB3YXMgcmVzcG9uc2libGUgZm9yIHByb2R1Y2luZyB0aGlzIGNvbW11bmljYXRpb24uXHJcbiAgICovXHJcbiAgcmVxdWVzdERldGFpbD86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBvY2N1cnJlbmNlIG9mIGluZm9ybWF0aW9uIGJlaW5nIHRyYW5zbWl0dGVkOyBlLmcuIGFuIGFsZXJ0IHRoYXQgd2FzIHNlbnQgdG8gYSByZXNwb25zaWJsZSBwcm92aWRlciwgYSBwdWJsaWMgaGVhbHRoIGFnZW5jeSB3YXMgbm90aWZpZWQgYWJvdXQgYSByZXBvcnRhYmxlIGNvbmRpdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb21tdW5pY2F0aW9uIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdDb21tdW5pY2F0aW9uJztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIkNvbW11bmljYXRpb25cIjtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVycyBhc3NvY2lhdGVkIHdpdGggdGhpcyBDb21tdW5pY2F0aW9uIHRoYXQgYXJlIGRlZmluZWQgYnkgYnVzaW5lc3MgcHJvY2Vzc2VzIGFuZC8gb3IgdXNlZCB0byByZWZlciB0byBpdCB3aGVuIGEgZGlyZWN0IFVSTCByZWZlcmVuY2UgdG8gdGhlIHJlc291cmNlIGl0c2VsZiBpcyBub3QgYXBwcm9wcmlhdGUgKGUuZy4gaW4gQ0RBIGRvY3VtZW50cywgb3IgaW4gd3JpdHRlbiAvIHByaW50ZWQgZG9jdW1lbnRhdGlvbikuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI6IGZoaXIuSWRlbnRpZmllcltdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0eXBlIG9mIG1lc3NhZ2UgY29udmV5ZWQgc3VjaCBhcyBhbGVydCwgbm90aWZpY2F0aW9uLCByZW1pbmRlciwgaW5zdHJ1Y3Rpb24sIGV0Yy5cclxuICAgKi9cclxuICBwdWJsaWMgY2F0ZWdvcnk/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGVudGl0eSAoZS5nLiBwZXJzb24sIG9yZ2FuaXphdGlvbiwgY2xpbmljYWwgaW5mb3JtYXRpb24gc3lzdGVtLCBvciBkZXZpY2UpIHdoaWNoIHdhcyB0aGUgc291cmNlIG9mIHRoZSBjb21tdW5pY2F0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZW5kZXI/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGVudGl0eSAoZS5nLiBwZXJzb24sIG9yZ2FuaXphdGlvbiwgY2xpbmljYWwgaW5mb3JtYXRpb24gc3lzdGVtLCBvciBkZXZpY2UpIHdoaWNoIHdhcyB0aGUgdGFyZ2V0IG9mIHRoZSBjb21tdW5pY2F0aW9uLiBJZiByZWNlaXB0cyBuZWVkIHRvIGJlIHRyYWNrZWQgYnkgaW5kaXZpZHVhbCwgYSBzZXBhcmF0ZSByZXNvdXJjZSBpbnN0YW5jZSB3aWxsIG5lZWQgdG8gYmUgY3JlYXRlZCBmb3IgZWFjaCByZWNpcGllbnQuIMKgTXVsdGlwbGUgcmVjaXBpZW50IGNvbW11bmljYXRpb25zIGFyZSBpbnRlbmRlZCB3aGVyZSBlaXRoZXIgYSByZWNlaXB0KHMpIGlzIG5vdCB0cmFja2VkIChlLmcuIGEgbWFzcyBtYWlsLW91dCkgb3IgaXMgY2FwdHVyZWQgaW4gYWdncmVnYXRlIChhbGwgZW1haWxzIGNvbmZpcm1lZCByZWNlaXZlZCBieSBhIHBhcnRpY3VsYXIgdGltZSkuXHJcbiAgICovXHJcbiAgcHVibGljIHJlY2lwaWVudDogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBUZXh0LCBhdHRhY2htZW50KHMpLCBvciByZXNvdXJjZShzKSB0aGF0IHdhcyBjb21tdW5pY2F0ZWQgdG8gdGhlIHJlY2lwaWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgcGF5bG9hZDogZmhpci5Db21tdW5pY2F0aW9uUGF5bG9hZFtdO1xyXG4gIC8qKlxyXG4gICAqIEEgY2hhbm5lbCB0aGF0IHdhcyB1c2VkIGZvciB0aGlzIGNvbW11bmljYXRpb24gKGUuZy4gZW1haWwsIGZheCkuXHJcbiAgICovXHJcbiAgcHVibGljIG1lZGl1bTogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBUaGUgc3RhdHVzIG9mIHRoZSB0cmFuc21pc3Npb24uXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1cz86IGZoaXIuRmhpckNvZGU8Q29tbXVuaWNhdGlvblN0YXR1c0NvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGVuY291bnRlciB3aXRoaW4gd2hpY2ggdGhlIGNvbW11bmljYXRpb24gd2FzIHNlbnQuXHJcbiAgICovXHJcbiAgcHVibGljIGVuY291bnRlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdGltZSB3aGVuIHRoaXMgY29tbXVuaWNhdGlvbiB3YXMgc2VudC5cclxuICAgKi9cclxuICBwdWJsaWMgc2VudD86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdGltZSB3aGVuIHRoaXMgY29tbXVuaWNhdGlvbiBhcnJpdmVkIGF0IHRoZSBkZXN0aW5hdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgcmVjZWl2ZWQ/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHJlYXNvbiBvciBqdXN0aWZpY2F0aW9uIGZvciB0aGUgY29tbXVuaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgcmVhc29uOiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXRpZW50IHdobyB3YXMgdGhlIGZvY3VzIG9mIHRoaXMgY29tbXVuaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgc3ViamVjdD86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgY29tbXVuaWNhdGlvbiByZXF1ZXN0IHRoYXQgd2FzIHJlc3BvbnNpYmxlIGZvciBwcm9kdWNpbmcgdGhpcyBjb21tdW5pY2F0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXF1ZXN0RGV0YWlsPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIENvbW11bmljYXRpb24gLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxDb21tdW5pY2F0aW9uQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ0NvbW11bmljYXRpb24nO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY2F0ZWdvcnknXSkgeyB0aGlzLmNhdGVnb3J5ID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5jYXRlZ29yeSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3NlbmRlciddKSB7IHRoaXMuc2VuZGVyID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5zZW5kZXIsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydyZWNpcGllbnQnXSkgeyB0aGlzLnJlY2lwaWVudCA9IHNvdXJjZS5yZWNpcGllbnQubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5yZWNpcGllbnQgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncGF5bG9hZCddKSB7IHRoaXMucGF5bG9hZCA9IHNvdXJjZS5wYXlsb2FkLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29tbXVuaWNhdGlvblBheWxvYWQoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5wYXlsb2FkID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ21lZGl1bSddKSB7IHRoaXMubWVkaXVtID0gc291cmNlLm1lZGl1bS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLm1lZGl1bSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydzdGF0dXMnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8Q29tbXVuaWNhdGlvblN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxDb21tdW5pY2F0aW9uU3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydlbmNvdW50ZXInXSkgeyB0aGlzLmVuY291bnRlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuZW5jb3VudGVyLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc2VudCddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zZW50ID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLnNlbnR9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3NlbnQnXSkge1xyXG4gICAgICBpZiAodGhpcy5zZW50KSB7IHRoaXMuc2VudC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zZW50ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc2VudCA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX3NlbnQgYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVjZWl2ZWQnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMucmVjZWl2ZWQgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UucmVjZWl2ZWR9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3JlY2VpdmVkJ10pIHtcclxuICAgICAgaWYgKHRoaXMucmVjZWl2ZWQpIHsgdGhpcy5yZWNlaXZlZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9yZWNlaXZlZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnJlY2VpdmVkID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fcmVjZWl2ZWQgYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVhc29uJ10pIHsgdGhpcy5yZWFzb24gPSBzb3VyY2UucmVhc29uLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucmVhc29uID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3N1YmplY3QnXSkgeyB0aGlzLnN1YmplY3QgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnN1YmplY3QsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydyZXF1ZXN0RGV0YWlsJ10pIHsgdGhpcy5yZXF1ZXN0RGV0YWlsID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5yZXF1ZXN0RGV0YWlsLCBvcHRpb25zKTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0NvbW11bmljYXRpb24nIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdjYXRlZ29yeScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnc2VuZGVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdyZWNpcGllbnQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ3BheWxvYWQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ21lZGl1bScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPU1YoJ3N0YXR1cycsZXhwLCdDb21tdW5pY2F0aW9uU3RhdHVzJyxDb21tdW5pY2F0aW9uU3RhdHVzVnNWYWxpZGF0aW9uLCdyJykpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2VuY291bnRlcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnc2VudCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncmVjZWl2ZWQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ3JlYXNvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnc3ViamVjdCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncmVxdWVzdERldGFpbCcsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=