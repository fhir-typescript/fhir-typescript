// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: RelatedPerson
import * as fhir from '../fhir.js';
// @ts-ignore
import { AdministrativeGenderVsValidation } from '../fhirValueSets/AdministrativeGenderVsValidation.js';
/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export class RelatedPersonCommunication extends fhir.BackboneElement {
    /**
     * Default constructor for RelatedPersonCommunication - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['language']) {
            this.language = new fhir.CodeableConcept(source.language);
        }
        else {
            this.language = null;
        }
        if (source['preferred']) {
            this.preferred = new fhir.FhirBoolean({ value: source.preferred });
        }
        if (source['_preferred']) {
            if (this.preferred) {
                this.preferred.addExtendedProperties(source._preferred);
            }
            else {
                this.preferred = new fhir.FhirBoolean(source._preferred);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'RelatedPerson.communication';
        }
        this.vRS('language', exp);
        this.vOS('preferred', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
RelatedPersonCommunication._fts_dataType = 'RelatedPersonCommunication';
/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
export class RelatedPerson extends fhir.DomainResource {
    /**
     * Default constructor for RelatedPerson - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'RelatedPerson';
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
        if (source['patient']) {
            this.patient = new fhir.Reference(source.patient);
        }
        else {
            this.patient = null;
        }
        if (source['relationship']) {
            this.relationship = source.relationship.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.relationship = [];
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
        if (source['_gender']) {
            if (this.gender) {
                this.gender.addExtendedProperties(source._gender);
            }
            else {
                this.gender = new fhir.FhirCode(source._gender);
            }
        }
        if (source['birthDate']) {
            this.birthDate = new fhir.FhirDate({ value: source.birthDate });
        }
        if (source['_birthDate']) {
            if (this.birthDate) {
                this.birthDate.addExtendedProperties(source._birthDate);
            }
            else {
                this.birthDate = new fhir.FhirDate(source._birthDate);
            }
        }
        if (source['address']) {
            this.address = source.address.map((x) => new fhir.Address(x));
        }
        else {
            this.address = [];
        }
        if (source['photo']) {
            this.photo = source.photo.map((x) => new fhir.Attachment(x));
        }
        else {
            this.photo = [];
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['communication']) {
            this.communication = source.communication.map((x) => new fhir.RelatedPersonCommunication(x));
        }
        else {
            this.communication = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'RelatedPerson';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vOS('active', exp);
        this.vRS('patient', exp);
        this.vOA('relationship', exp);
        this.vOA('name', exp);
        this.vOA('telecom', exp);
        this.vOSV('gender', exp, 'AdministrativeGender', AdministrativeGenderVsValidation, 'r');
        this.vOS('birthDate', exp);
        this.vOA('address', exp);
        this.vOA('photo', exp);
        this.vOS('period', exp);
        this.vOA('communication', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
RelatedPerson._fts_dataType = 'RelatedPerson';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVsYXRlZFBlcnNvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvUmVsYXRlZFBlcnNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFZbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBbUJ4Rzs7R0FFRztBQUNILE1BQU0sT0FBTywwQkFBMkIsU0FBUSxJQUFJLENBQUMsZUFBZTtJQWFsRTs7T0FFRztJQUNILFlBQVksU0FBaUQsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDdkcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUFFO2FBQ2pGO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDOUYsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUFFLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFVBQVcsQ0FBQyxDQUFDO2FBQUU7aUJBQzVFO2dCQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1B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SSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLHNCQUFzQixFQUFDLGdDQUFnQyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ25GLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzdCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBbkhEOztHQUVHO0FBQzZCLDJCQUFhLEdBQVUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBSZWxhdGVkUGVyc29uXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBMYW5ndWFnZXNDb2RlcywgIExhbmd1YWdlc0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9MYW5ndWFnZXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTGFuZ3VhZ2VzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9MYW5ndWFnZXNWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFJlbGF0ZWRwZXJzb25SZWxhdGlvbnNoaXB0eXBlQ29kZXMsICBSZWxhdGVkcGVyc29uUmVsYXRpb25zaGlwdHlwZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9SZWxhdGVkcGVyc29uUmVsYXRpb25zaGlwdHlwZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBSZWxhdGVkcGVyc29uUmVsYXRpb25zaGlwdHlwZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVsYXRlZHBlcnNvblJlbGF0aW9uc2hpcHR5cGVWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEFkbWluaXN0cmF0aXZlR2VuZGVyQ29kZXMsICBBZG1pbmlzdHJhdGl2ZUdlbmRlckNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9BZG1pbmlzdHJhdGl2ZUdlbmRlckNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBBZG1pbmlzdHJhdGl2ZUdlbmRlclZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQWRtaW5pc3RyYXRpdmVHZW5kZXJWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgUmVsYXRlZFBlcnNvbkNvbW11bmljYXRpb24gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVsYXRlZFBlcnNvbkNvbW11bmljYXRpb25BcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgc3RydWN0dXJlIGFhLUJCIHdpdGggdGhpcyBleGFjdCBjYXNpbmcgaXMgb25lIHRoZSBtb3N0IHdpZGVseSB1c2VkIG5vdGF0aW9ucyBmb3IgbG9jYWxlLiBIb3dldmVyIG5vdCBhbGwgc3lzdGVtcyBhY3R1YWxseSBjb2RlIHRoaXMgYnV0IGluc3RlYWQgaGF2ZSBpdCBhcyBmcmVlIHRleHQuIEhlbmNlIENvZGVhYmxlQ29uY2VwdCBpbnN0ZWFkIG9mIGNvZGUgYXMgdGhlIGRhdGEgdHlwZS5cclxuICAgKi9cclxuICBsYW5ndWFnZTogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBsYW5ndWFnZSBpcyBzcGVjaWZpY2FsbHkgaWRlbnRpZmllZCBmb3IgY29tbXVuaWNhdGluZyBoZWFsdGhjYXJlIGluZm9ybWF0aW9uLlxyXG4gICAqL1xyXG4gIHByZWZlcnJlZD86IGZoaXIuRmhpckJvb2xlYW58Ym9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFJlbGF0ZWRQZXJzb24uY29tbXVuaWNhdGlvbi5wcmVmZXJyZWRcclxuICAgKi9cclxuICBfcHJlZmVycmVkPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIElmIG5vIGxhbmd1YWdlIGlzIHNwZWNpZmllZCwgdGhpcyAqaW1wbGllcyogdGhhdCB0aGUgZGVmYXVsdCBsb2NhbCBsYW5ndWFnZSBpcyBzcG9rZW4uICBJZiB5b3UgbmVlZCB0byBjb252ZXkgcHJvZmljaWVuY3kgZm9yIG11bHRpcGxlIG1vZGVzLCB0aGVuIHlvdSBuZWVkIG11bHRpcGxlIFJlbGF0ZWRQZXJzb24uQ29tbXVuaWNhdGlvbiBhc3NvY2lhdGlvbnMuICAgSWYgdGhlIFJlbGF0ZWRQZXJzb24gZG9lcyBub3Qgc3BlYWsgdGhlIGRlZmF1bHQgbG9jYWwgbGFuZ3VhZ2UsIHRoZW4gdGhlIEludGVycHJldGVyIFJlcXVpcmVkIFN0YW5kYXJkIGNhbiBiZSB1c2VkIHRvIGV4cGxpY2l0bHkgZGVjbGFyZSB0aGF0IGFuIGludGVycHJldGVyIGlzIHJlcXVpcmVkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlbGF0ZWRQZXJzb25Db21tdW5pY2F0aW9uIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUmVsYXRlZFBlcnNvbkNvbW11bmljYXRpb24nO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzdHJ1Y3R1cmUgYWEtQkIgd2l0aCB0aGlzIGV4YWN0IGNhc2luZyBpcyBvbmUgdGhlIG1vc3Qgd2lkZWx5IHVzZWQgbm90YXRpb25zIGZvciBsb2NhbGUuIEhvd2V2ZXIgbm90IGFsbCBzeXN0ZW1zIGFjdHVhbGx5IGNvZGUgdGhpcyBidXQgaW5zdGVhZCBoYXZlIGl0IGFzIGZyZWUgdGV4dC4gSGVuY2UgQ29kZWFibGVDb25jZXB0IGluc3RlYWQgb2YgY29kZSBhcyB0aGUgZGF0YSB0eXBlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsYW5ndWFnZTogZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGlzIGxhbmd1YWdlIGlzIHNwZWNpZmljYWxseSBpZGVudGlmaWVkIGZvciBjb21tdW5pY2F0aW5nIGhlYWx0aGNhcmUgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHByZWZlcnJlZD86IGZoaXIuRmhpckJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFJlbGF0ZWRQZXJzb25Db21tdW5pY2F0aW9uIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8UmVsYXRlZFBlcnNvbkNvbW11bmljYXRpb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnbGFuZ3VhZ2UnXSkgeyB0aGlzLmxhbmd1YWdlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5sYW5ndWFnZSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmxhbmd1YWdlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsncHJlZmVycmVkJ10pIHsgdGhpcy5wcmVmZXJyZWQgPSBuZXcgZmhpci5GaGlyQm9vbGVhbih7dmFsdWU6IHNvdXJjZS5wcmVmZXJyZWR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3ByZWZlcnJlZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLnByZWZlcnJlZCkgeyB0aGlzLnByZWZlcnJlZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9wcmVmZXJyZWQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5wcmVmZXJyZWQgPSBuZXcgZmhpci5GaGlyQm9vbGVhbihzb3VyY2UuX3ByZWZlcnJlZCBhcyBQYXJ0aWFsPGZoaXIuRmhpckJvb2xlYW5BcmdzPik7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdSZWxhdGVkUGVyc29uLmNvbW11bmljYXRpb24nIH1cclxuICAgIHRoaXMudlJTKCdsYW5ndWFnZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3ByZWZlcnJlZCcsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFJlbGF0ZWRQZXJzb24gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVsYXRlZFBlcnNvbkFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIlJlbGF0ZWRQZXJzb25cInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllciBmb3IgYSBwZXJzb24gd2l0aGluIGEgcGFydGljdWxhciBzY29wZS5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgaXQgbWF5IGJlIHVzZWQgdG8gbWFyayB0aGF0IHRoZSByZXNvdXJjZSB3YXMgY3JlYXRlZCBpbiBlcnJvci5cclxuICAgKi9cclxuICBhY3RpdmU/OiBmaGlyLkZoaXJCb29sZWFufGJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBSZWxhdGVkUGVyc29uLmFjdGl2ZVxyXG4gICAqL1xyXG4gIF9hY3RpdmU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXRpZW50IHRoaXMgcGVyc29uIGlzIHJlbGF0ZWQgdG8uXHJcbiAgICovXHJcbiAgcGF0aWVudDogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIG5hdHVyZSBvZiB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW4gYSBwYXRpZW50IGFuZCB0aGUgcmVsYXRlZCBwZXJzb24uXHJcbiAgICovXHJcbiAgcmVsYXRpb25zaGlwPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgbmFtZSBhc3NvY2lhdGVkIHdpdGggdGhlIHBlcnNvbi5cclxuICAgKi9cclxuICBuYW1lPzogZmhpci5IdW1hbk5hbWVBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFBlcnNvbiBtYXkgaGF2ZSBtdWx0aXBsZSB3YXlzIHRvIGJlIGNvbnRhY3RlZCB3aXRoIGRpZmZlcmVudCB1c2VzIG9yIGFwcGxpY2FibGUgcGVyaW9kcy4gIE1heSBuZWVkIHRvIGhhdmUgb3B0aW9ucyBmb3IgY29udGFjdGluZyB0aGUgcGVyc29uIHVyZ2VudGx5LCBhbmQgYWxzbyB0byBoZWxwIHdpdGggaWRlbnRpZmljYXRpb24uXHJcbiAgICovXHJcbiAgdGVsZWNvbT86IGZoaXIuQ29udGFjdFBvaW50QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBZG1pbmlzdHJhdGl2ZSBHZW5kZXIgLSB0aGUgZ2VuZGVyIHRoYXQgdGhlIHBlcnNvbiBpcyBjb25zaWRlcmVkIHRvIGhhdmUgZm9yIGFkbWluaXN0cmF0aW9uIGFuZCByZWNvcmQga2VlcGluZyBwdXJwb3Nlcy5cclxuICAgKi9cclxuICBnZW5kZXI/OiBmaGlyLkZoaXJDb2RlPEFkbWluaXN0cmF0aXZlR2VuZGVyQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFJlbGF0ZWRQZXJzb24uZ2VuZGVyXHJcbiAgICovXHJcbiAgX2dlbmRlcj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgb24gd2hpY2ggdGhlIHJlbGF0ZWQgcGVyc29uIHdhcyBib3JuLlxyXG4gICAqL1xyXG4gIGJpcnRoRGF0ZT86IGZoaXIuRmhpckRhdGV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUmVsYXRlZFBlcnNvbi5iaXJ0aERhdGVcclxuICAgKi9cclxuICBfYmlydGhEYXRlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBZGRyZXNzIHdoZXJlIHRoZSByZWxhdGVkIHBlcnNvbiBjYW4gYmUgY29udGFjdGVkIG9yIHZpc2l0ZWQuXHJcbiAgICovXHJcbiAgYWRkcmVzcz86IGZoaXIuQWRkcmVzc0FyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW1hZ2Ugb2YgdGhlIHBlcnNvbi5cclxuICAgKi9cclxuICBwaG90bz86IGZoaXIuQXR0YWNobWVudEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBlcmlvZCBvZiB0aW1lIGR1cmluZyB3aGljaCB0aGlzIHJlbGF0aW9uc2hpcCBpcyBvciB3YXMgYWN0aXZlLiBJZiB0aGVyZSBhcmUgbm8gZGF0ZXMgZGVmaW5lZCwgdGhlbiB0aGUgaW50ZXJ2YWwgaXMgdW5rbm93bi5cclxuICAgKi9cclxuICBwZXJpb2Q/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIG5vIGxhbmd1YWdlIGlzIHNwZWNpZmllZCwgdGhpcyAqaW1wbGllcyogdGhhdCB0aGUgZGVmYXVsdCBsb2NhbCBsYW5ndWFnZSBpcyBzcG9rZW4uICBJZiB5b3UgbmVlZCB0byBjb252ZXkgcHJvZmljaWVuY3kgZm9yIG11bHRpcGxlIG1vZGVzLCB0aGVuIHlvdSBuZWVkIG11bHRpcGxlIFJlbGF0ZWRQZXJzb24uQ29tbXVuaWNhdGlvbiBhc3NvY2lhdGlvbnMuICAgSWYgdGhlIFJlbGF0ZWRQZXJzb24gZG9lcyBub3Qgc3BlYWsgdGhlIGRlZmF1bHQgbG9jYWwgbGFuZ3VhZ2UsIHRoZW4gdGhlIEludGVycHJldGVyIFJlcXVpcmVkIFN0YW5kYXJkIGNhbiBiZSB1c2VkIHRvIGV4cGxpY2l0bHkgZGVjbGFyZSB0aGF0IGFuIGludGVycHJldGVyIGlzIHJlcXVpcmVkLlxyXG4gICAqL1xyXG4gIGNvbW11bmljYXRpb24/OiBmaGlyLlJlbGF0ZWRQZXJzb25Db21tdW5pY2F0aW9uQXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluZm9ybWF0aW9uIGFib3V0IGEgcGVyc29uIHRoYXQgaXMgaW52b2x2ZWQgaW4gdGhlIGNhcmUgZm9yIGEgcGF0aWVudCwgYnV0IHdobyBpcyBub3QgdGhlIHRhcmdldCBvZiBoZWFsdGhjYXJlLCBub3IgaGFzIGEgZm9ybWFsIHJlc3BvbnNpYmlsaXR5IGluIHRoZSBjYXJlIHByb2Nlc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVsYXRlZFBlcnNvbiBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUmVsYXRlZFBlcnNvbic7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJSZWxhdGVkUGVyc29uXCI7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllciBmb3IgYSBwZXJzb24gd2l0aGluIGEgcGFydGljdWxhciBzY29wZS5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIGl0IG1heSBiZSB1c2VkIHRvIG1hcmsgdGhhdCB0aGUgcmVzb3VyY2Ugd2FzIGNyZWF0ZWQgaW4gZXJyb3IuXHJcbiAgICovXHJcbiAgcHVibGljIGFjdGl2ZT86IGZoaXIuRmhpckJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXRpZW50IHRoaXMgcGVyc29uIGlzIHJlbGF0ZWQgdG8uXHJcbiAgICovXHJcbiAgcHVibGljIHBhdGllbnQ6IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIG5hdHVyZSBvZiB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW4gYSBwYXRpZW50IGFuZCB0aGUgcmVsYXRlZCBwZXJzb24uXHJcbiAgICovXHJcbiAgcHVibGljIHJlbGF0aW9uc2hpcDogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBBIG5hbWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBwZXJzb24uXHJcbiAgICovXHJcbiAgcHVibGljIG5hbWU6IGZoaXIuSHVtYW5OYW1lW107XHJcbiAgLyoqXHJcbiAgICogUGVyc29uIG1heSBoYXZlIG11bHRpcGxlIHdheXMgdG8gYmUgY29udGFjdGVkIHdpdGggZGlmZmVyZW50IHVzZXMgb3IgYXBwbGljYWJsZSBwZXJpb2RzLiAgTWF5IG5lZWQgdG8gaGF2ZSBvcHRpb25zIGZvciBjb250YWN0aW5nIHRoZSBwZXJzb24gdXJnZW50bHksIGFuZCBhbHNvIHRvIGhlbHAgd2l0aCBpZGVudGlmaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgdGVsZWNvbTogZmhpci5Db250YWN0UG9pbnRbXTtcclxuICAvKipcclxuICAgKiBBZG1pbmlzdHJhdGl2ZSBHZW5kZXIgLSB0aGUgZ2VuZGVyIHRoYXQgdGhlIHBlcnNvbiBpcyBjb25zaWRlcmVkIHRvIGhhdmUgZm9yIGFkbWluaXN0cmF0aW9uIGFuZCByZWNvcmQga2VlcGluZyBwdXJwb3Nlcy5cclxuICAgKi9cclxuICBwdWJsaWMgZ2VuZGVyPzogZmhpci5GaGlyQ29kZTxBZG1pbmlzdHJhdGl2ZUdlbmRlckNvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgb24gd2hpY2ggdGhlIHJlbGF0ZWQgcGVyc29uIHdhcyBib3JuLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBiaXJ0aERhdGU/OiBmaGlyLkZoaXJEYXRlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBZGRyZXNzIHdoZXJlIHRoZSByZWxhdGVkIHBlcnNvbiBjYW4gYmUgY29udGFjdGVkIG9yIHZpc2l0ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGFkZHJlc3M6IGZoaXIuQWRkcmVzc1tdO1xyXG4gIC8qKlxyXG4gICAqIEltYWdlIG9mIHRoZSBwZXJzb24uXHJcbiAgICovXHJcbiAgcHVibGljIHBob3RvOiBmaGlyLkF0dGFjaG1lbnRbXTtcclxuICAvKipcclxuICAgKiBUaGUgcGVyaW9kIG9mIHRpbWUgZHVyaW5nIHdoaWNoIHRoaXMgcmVsYXRpb25zaGlwIGlzIG9yIHdhcyBhY3RpdmUuIElmIHRoZXJlIGFyZSBubyBkYXRlcyBkZWZpbmVkLCB0aGVuIHRoZSBpbnRlcnZhbCBpcyB1bmtub3duLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgbm8gbGFuZ3VhZ2UgaXMgc3BlY2lmaWVkLCB0aGlzICppbXBsaWVzKiB0aGF0IHRoZSBkZWZhdWx0IGxvY2FsIGxhbmd1YWdlIGlzIHNwb2tlbi4gIElmIHlvdSBuZWVkIHRvIGNvbnZleSBwcm9maWNpZW5jeSBmb3IgbXVsdGlwbGUgbW9kZXMsIHRoZW4geW91IG5lZWQgbXVsdGlwbGUgUmVsYXRlZFBlcnNvbi5Db21tdW5pY2F0aW9uIGFzc29jaWF0aW9ucy4gICBJZiB0aGUgUmVsYXRlZFBlcnNvbiBkb2VzIG5vdCBzcGVhayB0aGUgZGVmYXVsdCBsb2NhbCBsYW5ndWFnZSwgdGhlbiB0aGUgSW50ZXJwcmV0ZXIgUmVxdWlyZWQgU3RhbmRhcmQgY2FuIGJlIHVzZWQgdG8gZXhwbGljaXRseSBkZWNsYXJlIHRoYXQgYW4gaW50ZXJwcmV0ZXIgaXMgcmVxdWlyZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbW11bmljYXRpb246IGZoaXIuUmVsYXRlZFBlcnNvbkNvbW11bmljYXRpb25bXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBSZWxhdGVkUGVyc29uIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8UmVsYXRlZFBlcnNvbkFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdSZWxhdGVkUGVyc29uJztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2FjdGl2ZSddKSB7IHRoaXMuYWN0aXZlID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oe3ZhbHVlOiBzb3VyY2UuYWN0aXZlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19hY3RpdmUnXSkge1xyXG4gICAgICBpZiAodGhpcy5hY3RpdmUpIHsgdGhpcy5hY3RpdmUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fYWN0aXZlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuYWN0aXZlID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oc291cmNlLl9hY3RpdmUgYXMgUGFydGlhbDxmaGlyLkZoaXJCb29sZWFuQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwYXRpZW50J10pIHsgdGhpcy5wYXRpZW50ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5wYXRpZW50KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucGF0aWVudCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlbGF0aW9uc2hpcCddKSB7IHRoaXMucmVsYXRpb25zaGlwID0gc291cmNlLnJlbGF0aW9uc2hpcC5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnJlbGF0aW9uc2hpcCA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWyduYW1lJ10pIHsgdGhpcy5uYW1lID0gc291cmNlLm5hbWUubWFwKCh4KSA9PiBuZXcgZmhpci5IdW1hbk5hbWUoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5uYW1lID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3RlbGVjb20nXSkgeyB0aGlzLnRlbGVjb20gPSBzb3VyY2UudGVsZWNvbS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvbnRhY3RQb2ludCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnRlbGVjb20gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZ2VuZGVyJ10pIHsgdGhpcy5nZW5kZXIgPSBuZXcgZmhpci5GaGlyQ29kZTxBZG1pbmlzdHJhdGl2ZUdlbmRlckNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5nZW5kZXJ9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2dlbmRlciddKSB7XHJcbiAgICAgIGlmICh0aGlzLmdlbmRlcikgeyB0aGlzLmdlbmRlci5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9nZW5kZXIhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5nZW5kZXIgPSBuZXcgZmhpci5GaGlyQ29kZTxBZG1pbmlzdHJhdGl2ZUdlbmRlckNvZGVUeXBlPihzb3VyY2UuX2dlbmRlciBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnYmlydGhEYXRlJ10pIHsgdGhpcy5iaXJ0aERhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZSh7dmFsdWU6IHNvdXJjZS5iaXJ0aERhdGV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2JpcnRoRGF0ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmJpcnRoRGF0ZSkgeyB0aGlzLmJpcnRoRGF0ZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9iaXJ0aERhdGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5iaXJ0aERhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZShzb3VyY2UuX2JpcnRoRGF0ZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2FkZHJlc3MnXSkgeyB0aGlzLmFkZHJlc3MgPSBzb3VyY2UuYWRkcmVzcy5tYXAoKHgpID0+IG5ldyBmaGlyLkFkZHJlc3MoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5hZGRyZXNzID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3Bob3RvJ10pIHsgdGhpcy5waG90byA9IHNvdXJjZS5waG90by5tYXAoKHgpID0+IG5ldyBmaGlyLkF0dGFjaG1lbnQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5waG90byA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydwZXJpb2QnXSkgeyB0aGlzLnBlcmlvZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2UucGVyaW9kKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY29tbXVuaWNhdGlvbiddKSB7IHRoaXMuY29tbXVuaWNhdGlvbiA9IHNvdXJjZS5jb21tdW5pY2F0aW9uLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVsYXRlZFBlcnNvbkNvbW11bmljYXRpb24oeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb21tdW5pY2F0aW9uID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdSZWxhdGVkUGVyc29uJyB9XHJcbiAgICB0aGlzLnZSUygncmVzb3VyY2VUeXBlJyxleHApXHJcbiAgICB0aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2FjdGl2ZScsZXhwKVxyXG4gICAgdGhpcy52UlMoJ3BhdGllbnQnLGV4cClcclxuICAgIHRoaXMudk9BKCdyZWxhdGlvbnNoaXAnLGV4cClcclxuICAgIHRoaXMudk9BKCduYW1lJyxleHApXHJcbiAgICB0aGlzLnZPQSgndGVsZWNvbScsZXhwKVxyXG4gICAgdGhpcy52T1NWKCdnZW5kZXInLGV4cCwnQWRtaW5pc3RyYXRpdmVHZW5kZXInLEFkbWluaXN0cmF0aXZlR2VuZGVyVnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHRoaXMudk9TKCdiaXJ0aERhdGUnLGV4cClcclxuICAgIHRoaXMudk9BKCdhZGRyZXNzJyxleHApXHJcbiAgICB0aGlzLnZPQSgncGhvdG8nLGV4cClcclxuICAgIHRoaXMudk9TKCdwZXJpb2QnLGV4cClcclxuICAgIHRoaXMudk9BKCdjb21tdW5pY2F0aW9uJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=