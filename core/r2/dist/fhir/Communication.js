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
        else if (source['contentString']) {
            this.content = new fhir.FhirString({ value: source.contentString });
        }
        else if (source['contentAttachment']) {
            this.content = new fhir.Attachment(source.contentAttachment);
        }
        else if (source['contentReference']) {
            this.content = new fhir.Reference(source.contentReference);
        }
        else {
            this.content = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Communication.payload';
        }
        this.vRS('content', exp);
        return issues;
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
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['category']) {
            this.category = new fhir.CodeableConcept(source.category);
        }
        if (source['sender']) {
            this.sender = new fhir.Reference(source.sender);
        }
        if (source['recipient']) {
            this.recipient = source.recipient.map((x) => new fhir.Reference(x));
        }
        else {
            this.recipient = [];
        }
        if (source['payload']) {
            this.payload = source.payload.map((x) => new fhir.CommunicationPayload(x));
        }
        else {
            this.payload = [];
        }
        if (source['medium']) {
            this.medium = source.medium.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.medium = [];
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
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source['sent']) {
            this.sent = new fhir.FhirDateTime({ value: source.sent });
        }
        if (source['_sent']) {
            if (this.sent) {
                this.sent.addExtendedProperties(source._sent);
            }
            else {
                this.sent = new fhir.FhirDateTime(source._sent);
            }
        }
        if (source['received']) {
            this.received = new fhir.FhirDateTime({ value: source.received });
        }
        if (source['_received']) {
            if (this.received) {
                this.received.addExtendedProperties(source._received);
            }
            else {
                this.received = new fhir.FhirDateTime(source._received);
            }
        }
        if (source['reason']) {
            this.reason = source.reason.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.reason = [];
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        if (source['requestDetail']) {
            this.requestDetail = new fhir.Reference(source.requestDetail);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Communication';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vOS('category', exp);
        this.vOS('sender', exp);
        this.vOA('recipient', exp);
        this.vOA('payload', exp);
        this.vOA('medium', exp);
        this.vOSV('status', exp, 'CommunicationStatus', CommunicationStatusVsValidation, 'r');
        this.vOS('encounter', exp);
        this.vOS('sent', exp);
        this.vOS('received', exp);
        this.vOA('reason', exp);
        this.vOS('subject', exp);
        this.vOS('requestDetail', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Communication._fts_dataType = 'Communication';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbXVuaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQ29tbXVuaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBdUJ0Rzs7R0FFRztBQUNILE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxJQUFJLENBQUMsZUFBZTtJQWE1RDs7T0FFRztJQUNILFlBQVksU0FBMkMsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDakcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUFFO2FBQ3BELElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGFBQWEsRUFBQyxDQUFDLENBQUM7U0FBRTthQUNuRyxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FBRTthQUNsRyxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FBRTthQUMvRjtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcs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QUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyxxQkFBcUIsRUFBQywrQkFBK0IsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNqRixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUM3QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQXRIRDs7R0FFRztBQUM2QiwyQkFBYSxHQUFVLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMi5jb3JlIHZlcnNpb246IDEuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogQ29tbXVuaWNhdGlvblxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblN0YXR1c0NvZGVzLCAgQ29tbXVuaWNhdGlvblN0YXR1c0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Db21tdW5pY2F0aW9uU3RhdHVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0NvbW11bmljYXRpb25TdGF0dXNWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgQ29tbXVuaWNhdGlvblBheWxvYWQgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tbXVuaWNhdGlvblBheWxvYWRBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBBIGNvbW11bmljYXRlZCBjb250ZW50IChvciBmb3IgbXVsdGktcGFydCBjb21tdW5pY2F0aW9ucywgb25lIHBvcnRpb24gb2YgdGhlIGNvbW11bmljYXRpb24pLlxyXG4gICAqL1xyXG4gIGNvbnRlbnQ/OiBmaGlyLkZoaXJTdHJpbmd8Zmhpci5BdHRhY2htZW50fGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGNvbW11bmljYXRlZCBjb250ZW50IChvciBmb3IgbXVsdGktcGFydCBjb21tdW5pY2F0aW9ucywgb25lIHBvcnRpb24gb2YgdGhlIGNvbW11bmljYXRpb24pLlxyXG4gICAqL1xyXG4gIGNvbnRlbnRTdHJpbmc/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGNvbW11bmljYXRlZCBjb250ZW50IChvciBmb3IgbXVsdGktcGFydCBjb21tdW5pY2F0aW9ucywgb25lIHBvcnRpb24gb2YgdGhlIGNvbW11bmljYXRpb24pLlxyXG4gICAqL1xyXG4gIGNvbnRlbnRBdHRhY2htZW50PzogZmhpci5BdHRhY2htZW50QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBjb21tdW5pY2F0ZWQgY29udGVudCAob3IgZm9yIG11bHRpLXBhcnQgY29tbXVuaWNhdGlvbnMsIG9uZSBwb3J0aW9uIG9mIHRoZSBjb21tdW5pY2F0aW9uKS5cclxuICAgKi9cclxuICBjb250ZW50UmVmZXJlbmNlPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRleHQsIGF0dGFjaG1lbnQocyksIG9yIHJlc291cmNlKHMpIHRoYXQgd2FzIGNvbW11bmljYXRlZCB0byB0aGUgcmVjaXBpZW50LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbW11bmljYXRpb25QYXlsb2FkIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQ29tbXVuaWNhdGlvblBheWxvYWQnO1xyXG4gIC8qKlxyXG4gICAqIEEgY29tbXVuaWNhdGVkIGNvbnRlbnQgKG9yIGZvciBtdWx0aS1wYXJ0IGNvbW11bmljYXRpb25zLCBvbmUgcG9ydGlvbiBvZiB0aGUgY29tbXVuaWNhdGlvbikuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnRlbnQ6IChmaGlyLkZoaXJTdHJpbmd8Zmhpci5BdHRhY2htZW50fGZoaXIuUmVmZXJlbmNlKXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIGZsYWcgdG8gcHJvcGVybHkgc2VyaWFsaXplIGNob2ljZS10eXBlIGVsZW1lbnQgQ29tbXVuaWNhdGlvbi5wYXlsb2FkLmNvbnRlbnRbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfY29udGVudElzQ2hvaWNlOnRydWUgPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIENvbW11bmljYXRpb25QYXlsb2FkIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8Q29tbXVuaWNhdGlvblBheWxvYWRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnY29udGVudCddKSB7IHRoaXMuY29udGVudCA9IHNvdXJjZS5jb250ZW50OyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ2NvbnRlbnRTdHJpbmcnXSkgeyB0aGlzLmNvbnRlbnQgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmNvbnRlbnRTdHJpbmd9KTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydjb250ZW50QXR0YWNobWVudCddKSB7IHRoaXMuY29udGVudCA9IG5ldyBmaGlyLkF0dGFjaG1lbnQoc291cmNlLmNvbnRlbnRBdHRhY2htZW50KTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydjb250ZW50UmVmZXJlbmNlJ10pIHsgdGhpcy5jb250ZW50ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5jb250ZW50UmVmZXJlbmNlKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29udGVudCA9IG51bGw7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdDb21tdW5pY2F0aW9uLnBheWxvYWQnIH1cclxuICAgIHRoaXMudlJTKCdjb250ZW50JyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgQ29tbXVuaWNhdGlvbiB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDb21tdW5pY2F0aW9uQXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiQ29tbXVuaWNhdGlvblwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVycyBhc3NvY2lhdGVkIHdpdGggdGhpcyBDb21tdW5pY2F0aW9uIHRoYXQgYXJlIGRlZmluZWQgYnkgYnVzaW5lc3MgcHJvY2Vzc2VzIGFuZC8gb3IgdXNlZCB0byByZWZlciB0byBpdCB3aGVuIGEgZGlyZWN0IFVSTCByZWZlcmVuY2UgdG8gdGhlIHJlc291cmNlIGl0c2VsZiBpcyBub3QgYXBwcm9wcmlhdGUgKGUuZy4gaW4gQ0RBIGRvY3VtZW50cywgb3IgaW4gd3JpdHRlbiAvIHByaW50ZWQgZG9jdW1lbnRhdGlvbikuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgb2YgbWVzc2FnZSBjb252ZXllZCBzdWNoIGFzIGFsZXJ0LCBub3RpZmljYXRpb24sIHJlbWluZGVyLCBpbnN0cnVjdGlvbiwgZXRjLlxyXG4gICAqL1xyXG4gIGNhdGVnb3J5PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZW50aXR5IChlLmcuIHBlcnNvbiwgb3JnYW5pemF0aW9uLCBjbGluaWNhbCBpbmZvcm1hdGlvbiBzeXN0ZW0sIG9yIGRldmljZSkgd2hpY2ggd2FzIHRoZSBzb3VyY2Ugb2YgdGhlIGNvbW11bmljYXRpb24uXHJcbiAgICovXHJcbiAgc2VuZGVyPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZW50aXR5IChlLmcuIHBlcnNvbiwgb3JnYW5pemF0aW9uLCBjbGluaWNhbCBpbmZvcm1hdGlvbiBzeXN0ZW0sIG9yIGRldmljZSkgd2hpY2ggd2FzIHRoZSB0YXJnZXQgb2YgdGhlIGNvbW11bmljYXRpb24uIElmIHJlY2VpcHRzIG5lZWQgdG8gYmUgdHJhY2tlZCBieSBpbmRpdmlkdWFsLCBhIHNlcGFyYXRlIHJlc291cmNlIGluc3RhbmNlIHdpbGwgbmVlZCB0byBiZSBjcmVhdGVkIGZvciBlYWNoIHJlY2lwaWVudC4gwqBNdWx0aXBsZSByZWNpcGllbnQgY29tbXVuaWNhdGlvbnMgYXJlIGludGVuZGVkIHdoZXJlIGVpdGhlciBhIHJlY2VpcHQocykgaXMgbm90IHRyYWNrZWQgKGUuZy4gYSBtYXNzIG1haWwtb3V0KSBvciBpcyBjYXB0dXJlZCBpbiBhZ2dyZWdhdGUgKGFsbCBlbWFpbHMgY29uZmlybWVkIHJlY2VpdmVkIGJ5IGEgcGFydGljdWxhciB0aW1lKS5cclxuICAgKi9cclxuICByZWNpcGllbnQ/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGV4dCwgYXR0YWNobWVudChzKSwgb3IgcmVzb3VyY2UocykgdGhhdCB3YXMgY29tbXVuaWNhdGVkIHRvIHRoZSByZWNpcGllbnQuXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGZoaXIuQ29tbXVuaWNhdGlvblBheWxvYWRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgY2hhbm5lbCB0aGF0IHdhcyB1c2VkIGZvciB0aGlzIGNvbW11bmljYXRpb24gKGUuZy4gZW1haWwsIGZheCkuXHJcbiAgICovXHJcbiAgbWVkaXVtPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzdGF0dXMgb2YgdGhlIHRyYW5zbWlzc2lvbi5cclxuICAgKi9cclxuICBzdGF0dXM/OiBmaGlyLkZoaXJDb2RlPENvbW11bmljYXRpb25TdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29tbXVuaWNhdGlvbi5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgZW5jb3VudGVyIHdpdGhpbiB3aGljaCB0aGUgY29tbXVuaWNhdGlvbiB3YXMgc2VudC5cclxuICAgKi9cclxuICBlbmNvdW50ZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lIHdoZW4gdGhpcyBjb21tdW5pY2F0aW9uIHdhcyBzZW50LlxyXG4gICAqL1xyXG4gIHNlbnQ/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDb21tdW5pY2F0aW9uLnNlbnRcclxuICAgKi9cclxuICBfc2VudD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWUgd2hlbiB0aGlzIGNvbW11bmljYXRpb24gYXJyaXZlZCBhdCB0aGUgZGVzdGluYXRpb24uXHJcbiAgICovXHJcbiAgcmVjZWl2ZWQ/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDb21tdW5pY2F0aW9uLnJlY2VpdmVkXHJcbiAgICovXHJcbiAgX3JlY2VpdmVkPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgcmVhc29uIG9yIGp1c3RpZmljYXRpb24gZm9yIHRoZSBjb21tdW5pY2F0aW9uLlxyXG4gICAqL1xyXG4gIHJlYXNvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcGF0aWVudCB3aG8gd2FzIHRoZSBmb2N1cyBvZiB0aGlzIGNvbW11bmljYXRpb24uXHJcbiAgICovXHJcbiAgc3ViamVjdD86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbW11bmljYXRpb24gcmVxdWVzdCB0aGF0IHdhcyByZXNwb25zaWJsZSBmb3IgcHJvZHVjaW5nIHRoaXMgY29tbXVuaWNhdGlvbi5cclxuICAgKi9cclxuICByZXF1ZXN0RGV0YWlsPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIG9jY3VycmVuY2Ugb2YgaW5mb3JtYXRpb24gYmVpbmcgdHJhbnNtaXR0ZWQ7IGUuZy4gYW4gYWxlcnQgdGhhdCB3YXMgc2VudCB0byBhIHJlc3BvbnNpYmxlIHByb3ZpZGVyLCBhIHB1YmxpYyBoZWFsdGggYWdlbmN5IHdhcyBub3RpZmllZCBhYm91dCBhIHJlcG9ydGFibGUgY29uZGl0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbW11bmljYXRpb24gZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0NvbW11bmljYXRpb24nO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiQ29tbXVuaWNhdGlvblwiO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXJzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIENvbW11bmljYXRpb24gdGhhdCBhcmUgZGVmaW5lZCBieSBidXNpbmVzcyBwcm9jZXNzZXMgYW5kLyBvciB1c2VkIHRvIHJlZmVyIHRvIGl0IHdoZW4gYSBkaXJlY3QgVVJMIHJlZmVyZW5jZSB0byB0aGUgcmVzb3VyY2UgaXRzZWxmIGlzIG5vdCBhcHByb3ByaWF0ZSAoZS5nLiBpbiBDREEgZG9jdW1lbnRzLCBvciBpbiB3cml0dGVuIC8gcHJpbnRlZCBkb2N1bWVudGF0aW9uKS5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgb2YgbWVzc2FnZSBjb252ZXllZCBzdWNoIGFzIGFsZXJ0LCBub3RpZmljYXRpb24sIHJlbWluZGVyLCBpbnN0cnVjdGlvbiwgZXRjLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjYXRlZ29yeT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZW50aXR5IChlLmcuIHBlcnNvbiwgb3JnYW5pemF0aW9uLCBjbGluaWNhbCBpbmZvcm1hdGlvbiBzeXN0ZW0sIG9yIGRldmljZSkgd2hpY2ggd2FzIHRoZSBzb3VyY2Ugb2YgdGhlIGNvbW11bmljYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHNlbmRlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZW50aXR5IChlLmcuIHBlcnNvbiwgb3JnYW5pemF0aW9uLCBjbGluaWNhbCBpbmZvcm1hdGlvbiBzeXN0ZW0sIG9yIGRldmljZSkgd2hpY2ggd2FzIHRoZSB0YXJnZXQgb2YgdGhlIGNvbW11bmljYXRpb24uIElmIHJlY2VpcHRzIG5lZWQgdG8gYmUgdHJhY2tlZCBieSBpbmRpdmlkdWFsLCBhIHNlcGFyYXRlIHJlc291cmNlIGluc3RhbmNlIHdpbGwgbmVlZCB0byBiZSBjcmVhdGVkIGZvciBlYWNoIHJlY2lwaWVudC4gwqBNdWx0aXBsZSByZWNpcGllbnQgY29tbXVuaWNhdGlvbnMgYXJlIGludGVuZGVkIHdoZXJlIGVpdGhlciBhIHJlY2VpcHQocykgaXMgbm90IHRyYWNrZWQgKGUuZy4gYSBtYXNzIG1haWwtb3V0KSBvciBpcyBjYXB0dXJlZCBpbiBhZ2dyZWdhdGUgKGFsbCBlbWFpbHMgY29uZmlybWVkIHJlY2VpdmVkIGJ5IGEgcGFydGljdWxhciB0aW1lKS5cclxuICAgKi9cclxuICBwdWJsaWMgcmVjaXBpZW50OiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIFRleHQsIGF0dGFjaG1lbnQocyksIG9yIHJlc291cmNlKHMpIHRoYXQgd2FzIGNvbW11bmljYXRlZCB0byB0aGUgcmVjaXBpZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwYXlsb2FkOiBmaGlyLkNvbW11bmljYXRpb25QYXlsb2FkW107XHJcbiAgLyoqXHJcbiAgICogQSBjaGFubmVsIHRoYXQgd2FzIHVzZWQgZm9yIHRoaXMgY29tbXVuaWNhdGlvbiAoZS5nLiBlbWFpbCwgZmF4KS5cclxuICAgKi9cclxuICBwdWJsaWMgbWVkaXVtOiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzdGF0dXMgb2YgdGhlIHRyYW5zbWlzc2lvbi5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzPzogZmhpci5GaGlyQ29kZTxDb21tdW5pY2F0aW9uU3RhdHVzQ29kZVR5cGU+fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZW5jb3VudGVyIHdpdGhpbiB3aGljaCB0aGUgY29tbXVuaWNhdGlvbiB3YXMgc2VudC5cclxuICAgKi9cclxuICBwdWJsaWMgZW5jb3VudGVyPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lIHdoZW4gdGhpcyBjb21tdW5pY2F0aW9uIHdhcyBzZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZW50PzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lIHdoZW4gdGhpcyBjb21tdW5pY2F0aW9uIGFycml2ZWQgYXQgdGhlIGRlc3RpbmF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWNlaXZlZD86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcmVhc29uIG9yIGp1c3RpZmljYXRpb24gZm9yIHRoZSBjb21tdW5pY2F0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFzb246IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogVGhlIHBhdGllbnQgd2hvIHdhcyB0aGUgZm9jdXMgb2YgdGhpcyBjb21tdW5pY2F0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdWJqZWN0PzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBjb21tdW5pY2F0aW9uIHJlcXVlc3QgdGhhdCB3YXMgcmVzcG9uc2libGUgZm9yIHByb2R1Y2luZyB0aGlzIGNvbW11bmljYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHJlcXVlc3REZXRhaWw/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgQ29tbXVuaWNhdGlvbiAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPENvbW11bmljYXRpb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnQ29tbXVuaWNhdGlvbic7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gc291cmNlLmlkZW50aWZpZXIubWFwKCh4KSA9PiBuZXcgZmhpci5JZGVudGlmaWVyKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaWRlbnRpZmllciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydjYXRlZ29yeSddKSB7IHRoaXMuY2F0ZWdvcnkgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmNhdGVnb3J5KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc2VuZGVyJ10pIHsgdGhpcy5zZW5kZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnNlbmRlcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlY2lwaWVudCddKSB7IHRoaXMucmVjaXBpZW50ID0gc291cmNlLnJlY2lwaWVudC5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnJlY2lwaWVudCA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydwYXlsb2FkJ10pIHsgdGhpcy5wYXlsb2FkID0gc291cmNlLnBheWxvYWQubWFwKCh4KSA9PiBuZXcgZmhpci5Db21tdW5pY2F0aW9uUGF5bG9hZCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnBheWxvYWQgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnbWVkaXVtJ10pIHsgdGhpcy5tZWRpdW0gPSBzb3VyY2UubWVkaXVtLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMubWVkaXVtID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8Q29tbXVuaWNhdGlvblN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxDb21tdW5pY2F0aW9uU3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydlbmNvdW50ZXInXSkgeyB0aGlzLmVuY291bnRlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuZW5jb3VudGVyKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc2VudCddKSB7IHRoaXMuc2VudCA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5zZW50fSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zZW50J10pIHtcclxuICAgICAgaWYgKHRoaXMuc2VudCkgeyB0aGlzLnNlbnQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc2VudCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnNlbnQgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9zZW50IGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3JlY2VpdmVkJ10pIHsgdGhpcy5yZWNlaXZlZCA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5yZWNlaXZlZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfcmVjZWl2ZWQnXSkge1xyXG4gICAgICBpZiAodGhpcy5yZWNlaXZlZCkgeyB0aGlzLnJlY2VpdmVkLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3JlY2VpdmVkISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucmVjZWl2ZWQgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9yZWNlaXZlZCBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydyZWFzb24nXSkgeyB0aGlzLnJlYXNvbiA9IHNvdXJjZS5yZWFzb24ubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5yZWFzb24gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3ViamVjdCddKSB7IHRoaXMuc3ViamVjdCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uuc3ViamVjdCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlcXVlc3REZXRhaWwnXSkgeyB0aGlzLnJlcXVlc3REZXRhaWwgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnJlcXVlc3REZXRhaWwpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnQ29tbXVuaWNhdGlvbicgfVxyXG4gICAgdGhpcy52UlMoJ3Jlc291cmNlVHlwZScsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2lkZW50aWZpZXInLGV4cClcclxuICAgIHRoaXMudk9TKCdjYXRlZ29yeScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3NlbmRlcicsZXhwKVxyXG4gICAgdGhpcy52T0EoJ3JlY2lwaWVudCcsZXhwKVxyXG4gICAgdGhpcy52T0EoJ3BheWxvYWQnLGV4cClcclxuICAgIHRoaXMudk9BKCdtZWRpdW0nLGV4cClcclxuICAgIHRoaXMudk9TVignc3RhdHVzJyxleHAsJ0NvbW11bmljYXRpb25TdGF0dXMnLENvbW11bmljYXRpb25TdGF0dXNWc1ZhbGlkYXRpb24sJ3InKVxyXG4gICAgdGhpcy52T1MoJ2VuY291bnRlcicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3NlbnQnLGV4cClcclxuICAgIHRoaXMudk9TKCdyZWNlaXZlZCcsZXhwKVxyXG4gICAgdGhpcy52T0EoJ3JlYXNvbicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3N1YmplY3QnLGV4cClcclxuICAgIHRoaXMudk9TKCdyZXF1ZXN0RGV0YWlsJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=