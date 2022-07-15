// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: EpisodeOfCare
import * as fhir from '../fhir.js';
// @ts-ignore
import { EpisodeOfCareStatusVsValidation } from '../fhirValueSets/EpisodeOfCareStatusVsValidation.js';
/**
 * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
 */
export class EpisodeOfCareStatusHistory extends fhir.BackboneElement {
    /**
     * Default constructor for EpisodeOfCareStatusHistory - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['status']) {
            this.status = new fhir.FhirCode({ value: source.status });
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status);
            }
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        else {
            this.period = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'EpisodeOfCare.statusHistory';
        }
        this.vRSV('status', exp, 'EpisodeOfCareStatus', EpisodeOfCareStatusVsValidation, 'r');
        this.vRS('period', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
EpisodeOfCareStatusHistory._fts_dataType = 'EpisodeOfCareStatusHistory';
/**
 * The list of diagnosis relevant to this episode of care.
 */
export class EpisodeOfCareDiagnosis extends fhir.BackboneElement {
    /**
     * Default constructor for EpisodeOfCareDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['condition']) {
            this.condition = new fhir.Reference(source.condition);
        }
        else {
            this.condition = null;
        }
        if (source['role']) {
            this.role = new fhir.CodeableConcept(source.role);
        }
        if (source['rank']) {
            this.rank = new fhir.FhirPositiveInt({ value: source.rank });
        }
        if (source['_rank']) {
            if (this.rank) {
                this.rank.addExtendedProperties(source._rank);
            }
            else {
                this.rank = new fhir.FhirPositiveInt(source._rank);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'EpisodeOfCare.diagnosis';
        }
        this.vRS('condition', exp);
        this.vOS('role', exp);
        this.vOS('rank', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
EpisodeOfCareDiagnosis._fts_dataType = 'EpisodeOfCareDiagnosis';
/**
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
export class EpisodeOfCare extends fhir.DomainResource {
    /**
     * Default constructor for EpisodeOfCare - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'EpisodeOfCare';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['status']) {
            this.status = new fhir.FhirCode({ value: source.status });
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status);
            }
        }
        if (source['statusHistory']) {
            this.statusHistory = source.statusHistory.map((x) => new fhir.EpisodeOfCareStatusHistory(x));
        }
        else {
            this.statusHistory = [];
        }
        if (source['type']) {
            this.type = source.type.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.type = [];
        }
        if (source['diagnosis']) {
            this.diagnosis = source.diagnosis.map((x) => new fhir.EpisodeOfCareDiagnosis(x));
        }
        else {
            this.diagnosis = [];
        }
        if (source['patient']) {
            this.patient = new fhir.Reference(source.patient);
        }
        else {
            this.patient = null;
        }
        if (source['managingOrganization']) {
            this.managingOrganization = new fhir.Reference(source.managingOrganization);
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['referralRequest']) {
            this.referralRequest = source.referralRequest.map((x) => new fhir.Reference(x));
        }
        else {
            this.referralRequest = [];
        }
        if (source['careManager']) {
            this.careManager = new fhir.Reference(source.careManager);
        }
        if (source['team']) {
            this.team = source.team.map((x) => new fhir.Reference(x));
        }
        else {
            this.team = [];
        }
        if (source['account']) {
            this.account = source.account.map((x) => new fhir.Reference(x));
        }
        else {
            this.account = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'EpisodeOfCare';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vRSV('status', exp, 'EpisodeOfCareStatus', EpisodeOfCareStatusVsValidation, 'r');
        this.vOA('statusHistory', exp);
        this.vOA('type', exp);
        this.vOA('diagnosis', exp);
        this.vRS('patient', exp);
        this.vOS('managingOrganization', exp);
        this.vOS('period', exp);
        this.vOA('referralRequest', exp);
        this.vOS('careManager', exp);
        this.vOA('team', exp);
        this.vOA('account', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
EpisodeOfCare._fts_dataType = 'EpisodeOfCare';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXBpc29kZU9mQ2FyZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRXBpc29kZU9mQ2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBMkJ0Rzs7R0FFRztBQUNILE1BQU0sT0FBTywwQkFBMkIsU0FBUSxJQUFJLENBQUMsZUFBZTtJQWFsRTs7T0FFRztJQUNILFlBQVksU0FBaUQsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDdkcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUE4QixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQzFHO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLENBQUM7YUFBRTtpQkFDbkU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQThCLE1BQU0sQ0FBQyxPQUFpQyxDQUFDLENBQUM7YUFBRTtTQUNqSDtRQUNELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFN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RUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMscUJBQXFCLEVBQUMsK0JBQStCLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDakYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBNUdEOztHQUVHO0FBQzZCLDJCQUFhLEdBQVUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBFcGlzb2RlT2ZDYXJlXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBFcGlzb2RlT2ZDYXJlU3RhdHVzQ29kZXMsICBFcGlzb2RlT2ZDYXJlU3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0VwaXNvZGVPZkNhcmVTdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRXBpc29kZU9mQ2FyZVN0YXR1c1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRXBpc29kZU9mQ2FyZVN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRGlhZ25vc2lzUm9sZUNvZGVzLCAgRGlhZ25vc2lzUm9sZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9EaWFnbm9zaXNSb2xlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IERpYWdub3Npc1JvbGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0RpYWdub3Npc1JvbGVWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEVwaXNvZGVvZmNhcmVUeXBlQ29kZXMsICBFcGlzb2Rlb2ZjYXJlVHlwZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9FcGlzb2Rlb2ZjYXJlVHlwZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBFcGlzb2Rlb2ZjYXJlVHlwZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRXBpc29kZW9mY2FyZVR5cGVWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgRXBpc29kZU9mQ2FyZVN0YXR1c0hpc3RvcnkgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXBpc29kZU9mQ2FyZVN0YXR1c0hpc3RvcnlBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBwbGFubmVkIHwgd2FpdGxpc3QgfCBhY3RpdmUgfCBvbmhvbGQgfCBmaW5pc2hlZCB8IGNhbmNlbGxlZC5cclxuICAgKi9cclxuICBzdGF0dXM6IGZoaXIuRmhpckNvZGU8RXBpc29kZU9mQ2FyZVN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFcGlzb2RlT2ZDYXJlLnN0YXR1c0hpc3Rvcnkuc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBlcmlvZCBkdXJpbmcgdGhpcyBFcGlzb2RlT2ZDYXJlIHRoYXQgdGhlIHNwZWNpZmljIHN0YXR1cyBhcHBsaWVkLlxyXG4gICAqL1xyXG4gIHBlcmlvZDogZmhpci5QZXJpb2RBcmdzfG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgaGlzdG9yeSBvZiBzdGF0dXNlcyB0aGF0IHRoZSBFcGlzb2RlT2ZDYXJlIGhhcyBiZWVuIHRocm91Z2ggKHdpdGhvdXQgcmVxdWlyaW5nIHByb2Nlc3NpbmcgdGhlIGhpc3Rvcnkgb2YgdGhlIHJlc291cmNlKS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBFcGlzb2RlT2ZDYXJlU3RhdHVzSGlzdG9yeSBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0VwaXNvZGVPZkNhcmVTdGF0dXNIaXN0b3J5JztcclxuICAvKipcclxuICAgKiBwbGFubmVkIHwgd2FpdGxpc3QgfCBhY3RpdmUgfCBvbmhvbGQgfCBmaW5pc2hlZCB8IGNhbmNlbGxlZC5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPEVwaXNvZGVPZkNhcmVTdGF0dXNDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgcGVyaW9kIGR1cmluZyB0aGlzIEVwaXNvZGVPZkNhcmUgdGhhdCB0aGUgc3BlY2lmaWMgc3RhdHVzIGFwcGxpZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHBlcmlvZDogZmhpci5QZXJpb2R8bnVsbDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBFcGlzb2RlT2ZDYXJlU3RhdHVzSGlzdG9yeSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEVwaXNvZGVPZkNhcmVTdGF0dXNIaXN0b3J5QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8RXBpc29kZU9mQ2FyZVN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxFcGlzb2RlT2ZDYXJlU3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwZXJpb2QnXSkgeyB0aGlzLnBlcmlvZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2UucGVyaW9kKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucGVyaW9kID0gbnVsbDsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0VwaXNvZGVPZkNhcmUuc3RhdHVzSGlzdG9yeScgfVxyXG4gICAgdGhpcy52UlNWKCdzdGF0dXMnLGV4cCwnRXBpc29kZU9mQ2FyZVN0YXR1cycsRXBpc29kZU9mQ2FyZVN0YXR1c1ZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZSUygncGVyaW9kJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgRXBpc29kZU9mQ2FyZURpYWdub3NpcyB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBFcGlzb2RlT2ZDYXJlRGlhZ25vc2lzQXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogQSBsaXN0IG9mIGNvbmRpdGlvbnMvcHJvYmxlbXMvZGlhZ25vc2VzIHRoYXQgdGhpcyBlcGlzb2RlIG9mIGNhcmUgaXMgaW50ZW5kZWQgdG8gYmUgcHJvdmlkaW5nIGNhcmUgZm9yLlxyXG4gICAqL1xyXG4gIGNvbmRpdGlvbjogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogUm9sZSB0aGF0IHRoaXMgZGlhZ25vc2lzIGhhcyB3aXRoaW4gdGhlIGVwaXNvZGUgb2YgY2FyZSAoZS5nLiBhZG1pc3Npb24sIGJpbGxpbmcsIGRpc2NoYXJnZSDigKYpLlxyXG4gICAqL1xyXG4gIHJvbGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJhbmtpbmcgb2YgdGhlIGRpYWdub3NpcyAoZm9yIGVhY2ggcm9sZSB0eXBlKS5cclxuICAgKi9cclxuICByYW5rPzogZmhpci5GaGlyUG9zaXRpdmVJbnR8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRXBpc29kZU9mQ2FyZS5kaWFnbm9zaXMucmFua1xyXG4gICAqL1xyXG4gIF9yYW5rPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBsaXN0IG9mIGRpYWdub3NpcyByZWxldmFudCB0byB0aGlzIGVwaXNvZGUgb2YgY2FyZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBFcGlzb2RlT2ZDYXJlRGlhZ25vc2lzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRXBpc29kZU9mQ2FyZURpYWdub3Npcyc7XHJcbiAgLyoqXHJcbiAgICogQSBsaXN0IG9mIGNvbmRpdGlvbnMvcHJvYmxlbXMvZGlhZ25vc2VzIHRoYXQgdGhpcyBlcGlzb2RlIG9mIGNhcmUgaXMgaW50ZW5kZWQgdG8gYmUgcHJvdmlkaW5nIGNhcmUgZm9yLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25kaXRpb246IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogUm9sZSB0aGF0IHRoaXMgZGlhZ25vc2lzIGhhcyB3aXRoaW4gdGhlIGVwaXNvZGUgb2YgY2FyZSAoZS5nLiBhZG1pc3Npb24sIGJpbGxpbmcsIGRpc2NoYXJnZSDigKYpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByb2xlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJhbmtpbmcgb2YgdGhlIGRpYWdub3NpcyAoZm9yIGVhY2ggcm9sZSB0eXBlKS5cclxuICAgKi9cclxuICBwdWJsaWMgcmFuaz86IGZoaXIuRmhpclBvc2l0aXZlSW50fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBFcGlzb2RlT2ZDYXJlRGlhZ25vc2lzIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8RXBpc29kZU9mQ2FyZURpYWdub3Npc0FyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydjb25kaXRpb24nXSkgeyB0aGlzLmNvbmRpdGlvbiA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuY29uZGl0aW9uKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29uZGl0aW9uID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsncm9sZSddKSB7IHRoaXMucm9sZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2Uucm9sZSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3JhbmsnXSkgeyB0aGlzLnJhbmsgPSBuZXcgZmhpci5GaGlyUG9zaXRpdmVJbnQoe3ZhbHVlOiBzb3VyY2UucmFua30pOyB9XHJcbiAgICBpZiAoc291cmNlWydfcmFuayddKSB7XHJcbiAgICAgIGlmICh0aGlzLnJhbmspIHsgdGhpcy5yYW5rLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3JhbmshKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5yYW5rID0gbmV3IGZoaXIuRmhpclBvc2l0aXZlSW50KHNvdXJjZS5fcmFuayBhcyBQYXJ0aWFsPGZoaXIuRmhpclBvc2l0aXZlSW50QXJncz4pOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnRXBpc29kZU9mQ2FyZS5kaWFnbm9zaXMnIH1cclxuICAgIHRoaXMudlJTKCdjb25kaXRpb24nLGV4cClcclxuICAgIHRoaXMudk9TKCdyb2xlJyxleHApXHJcbiAgICB0aGlzLnZPUygncmFuaycsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEVwaXNvZGVPZkNhcmUgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXBpc29kZU9mQ2FyZUFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkVwaXNvZGVPZkNhcmVcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIEVwaXNvZGVPZkNhcmUgbWF5IGJlIGtub3duIGJ5IGRpZmZlcmVudCBpZGVudGlmaWVycyBmb3IgZGlmZmVyZW50IGNvbnRleHRzIG9mIHVzZSwgc3VjaCBhcyB3aGVuIGFuIGV4dGVybmFsIGFnZW5jeSBpcyB0cmFja2luZyB0aGUgRXBpc29kZSBmb3IgZnVuZGluZyBwdXJwb3Nlcy5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIGVwaXNvZGUgYXMgbm90IGN1cnJlbnRseSB2YWxpZC5cclxuICAgKi9cclxuICBzdGF0dXM6IGZoaXIuRmhpckNvZGU8RXBpc29kZU9mQ2FyZVN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFcGlzb2RlT2ZDYXJlLnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBoaXN0b3J5IG9mIHN0YXR1c2VzIHRoYXQgdGhlIEVwaXNvZGVPZkNhcmUgaGFzIGJlZW4gdGhyb3VnaCAod2l0aG91dCByZXF1aXJpbmcgcHJvY2Vzc2luZyB0aGUgaGlzdG9yeSBvZiB0aGUgcmVzb3VyY2UpLlxyXG4gICAqL1xyXG4gIHN0YXR1c0hpc3Rvcnk/OiBmaGlyLkVwaXNvZGVPZkNhcmVTdGF0dXNIaXN0b3J5QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBjYW4gYmUgdmVyeSBpbXBvcnRhbnQgaW4gcHJvY2Vzc2luZyBhcyB0aGlzIGNvdWxkIGJlIHVzZWQgaW4gZGV0ZXJtaW5pbmcgaWYgdGhlIEVwaXNvZGVPZkNhcmUgaXMgcmVsZXZhbnQgdG8gc3BlY2lmaWMgZ292ZXJubWVudCByZXBvcnRpbmcsIG9yIG90aGVyIHR5cGVzIG9mIGNsYXNzaWZpY2F0aW9ucy5cclxuICAgKi9cclxuICB0eXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsaXN0IG9mIGRpYWdub3NpcyByZWxldmFudCB0byB0aGlzIGVwaXNvZGUgb2YgY2FyZS5cclxuICAgKi9cclxuICBkaWFnbm9zaXM/OiBmaGlyLkVwaXNvZGVPZkNhcmVEaWFnbm9zaXNBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXRpZW50IHdobyBpcyB0aGUgZm9jdXMgb2YgdGhpcyBlcGlzb2RlIG9mIGNhcmUuXHJcbiAgICovXHJcbiAgcGF0aWVudDogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIG9yZ2FuaXphdGlvbiB0aGF0IGhhcyBhc3N1bWVkIHRoZSBzcGVjaWZpYyByZXNwb25zaWJpbGl0aWVzIGZvciB0aGUgc3BlY2lmaWVkIGR1cmF0aW9uLlxyXG4gICAqL1xyXG4gIG1hbmFnaW5nT3JnYW5pemF0aW9uPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaW50ZXJ2YWwgZHVyaW5nIHdoaWNoIHRoZSBtYW5hZ2luZyBvcmdhbml6YXRpb24gYXNzdW1lcyB0aGUgZGVmaW5lZCByZXNwb25zaWJpbGl0eS5cclxuICAgKi9cclxuICBwZXJpb2Q/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJlZmVycmFsIFJlcXVlc3QocykgdGhhdCBhcmUgZnVsZmlsbGVkIGJ5IHRoaXMgRXBpc29kZU9mQ2FyZSwgaW5jb21pbmcgcmVmZXJyYWxzLlxyXG4gICAqL1xyXG4gIHJlZmVycmFsUmVxdWVzdD86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcHJhY3RpdGlvbmVyIHRoYXQgaXMgdGhlIGNhcmUgbWFuYWdlci9jYXJlIGNvb3JkaW5hdG9yIGZvciB0aGlzIHBhdGllbnQuXHJcbiAgICovXHJcbiAgY2FyZU1hbmFnZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsaXN0IG9mIHByYWN0aXRpb25lcnMgdGhhdCBtYXkgYmUgZmFjaWxpdGF0aW5nIHRoaXMgZXBpc29kZSBvZiBjYXJlIGZvciBzcGVjaWZpYyBwdXJwb3Nlcy5cclxuICAgKi9cclxuICB0ZWFtPzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBiaWxsaW5nIHN5c3RlbSBtYXkgY2hvb3NlIHRvIGFsbG9jYXRlIGJpbGxhYmxlIGl0ZW1zIGFzc29jaWF0ZWQgd2l0aCB0aGUgRXBpc29kZU9mQ2FyZSB0byBkaWZmZXJlbnQgcmVmZXJlbmNlZCBBY2NvdW50cyBiYXNlZCBvbiBpbnRlcm5hbCBidXNpbmVzcyBydWxlcy5cclxuICAgKi9cclxuICBhY2NvdW50PzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQW4gYXNzb2NpYXRpb24gYmV0d2VlbiBhIHBhdGllbnQgYW5kIGFuIG9yZ2FuaXphdGlvbiAvIGhlYWx0aGNhcmUgcHJvdmlkZXIocykgZHVyaW5nIHdoaWNoIHRpbWUgZW5jb3VudGVycyBtYXkgb2NjdXIuIFRoZSBtYW5hZ2luZyBvcmdhbml6YXRpb24gYXNzdW1lcyBhIGxldmVsIG9mIHJlc3BvbnNpYmlsaXR5IGZvciB0aGUgcGF0aWVudCBkdXJpbmcgdGhpcyB0aW1lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVwaXNvZGVPZkNhcmUgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0VwaXNvZGVPZkNhcmUnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiRXBpc29kZU9mQ2FyZVwiO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBFcGlzb2RlT2ZDYXJlIG1heSBiZSBrbm93biBieSBkaWZmZXJlbnQgaWRlbnRpZmllcnMgZm9yIGRpZmZlcmVudCBjb250ZXh0cyBvZiB1c2UsIHN1Y2ggYXMgd2hlbiBhbiBleHRlcm5hbCBhZ2VuY3kgaXMgdHJhY2tpbmcgdGhlIEVwaXNvZGUgZm9yIGZ1bmRpbmcgcHVycG9zZXMuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI6IGZoaXIuSWRlbnRpZmllcltdO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSB0aGUgc3RhdHVzIGNvbnRhaW5zIGNvZGVzIHRoYXQgbWFyayB0aGUgZXBpc29kZSBhcyBub3QgY3VycmVudGx5IHZhbGlkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM6IGZoaXIuRmhpckNvZGU8RXBpc29kZU9mQ2FyZVN0YXR1c0NvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBoaXN0b3J5IG9mIHN0YXR1c2VzIHRoYXQgdGhlIEVwaXNvZGVPZkNhcmUgaGFzIGJlZW4gdGhyb3VnaCAod2l0aG91dCByZXF1aXJpbmcgcHJvY2Vzc2luZyB0aGUgaGlzdG9yeSBvZiB0aGUgcmVzb3VyY2UpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXNIaXN0b3J5OiBmaGlyLkVwaXNvZGVPZkNhcmVTdGF0dXNIaXN0b3J5W107XHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgY2FuIGJlIHZlcnkgaW1wb3J0YW50IGluIHByb2Nlc3NpbmcgYXMgdGhpcyBjb3VsZCBiZSB1c2VkIGluIGRldGVybWluaW5nIGlmIHRoZSBFcGlzb2RlT2ZDYXJlIGlzIHJlbGV2YW50IHRvIHNwZWNpZmljIGdvdmVybm1lbnQgcmVwb3J0aW5nLCBvciBvdGhlciB0eXBlcyBvZiBjbGFzc2lmaWNhdGlvbnMuXHJcbiAgICovXHJcbiAgcHVibGljIHR5cGU6IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogVGhlIGxpc3Qgb2YgZGlhZ25vc2lzIHJlbGV2YW50IHRvIHRoaXMgZXBpc29kZSBvZiBjYXJlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkaWFnbm9zaXM6IGZoaXIuRXBpc29kZU9mQ2FyZURpYWdub3Npc1tdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXRpZW50IHdobyBpcyB0aGUgZm9jdXMgb2YgdGhpcyBlcGlzb2RlIG9mIGNhcmUuXHJcbiAgICovXHJcbiAgcHVibGljIHBhdGllbnQ6IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIG9yZ2FuaXphdGlvbiB0aGF0IGhhcyBhc3N1bWVkIHRoZSBzcGVjaWZpYyByZXNwb25zaWJpbGl0aWVzIGZvciB0aGUgc3BlY2lmaWVkIGR1cmF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBtYW5hZ2luZ09yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaW50ZXJ2YWwgZHVyaW5nIHdoaWNoIHRoZSBtYW5hZ2luZyBvcmdhbml6YXRpb24gYXNzdW1lcyB0aGUgZGVmaW5lZCByZXNwb25zaWJpbGl0eS5cclxuICAgKi9cclxuICBwdWJsaWMgcGVyaW9kPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJlZmVycmFsIFJlcXVlc3QocykgdGhhdCBhcmUgZnVsZmlsbGVkIGJ5IHRoaXMgRXBpc29kZU9mQ2FyZSwgaW5jb21pbmcgcmVmZXJyYWxzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWZlcnJhbFJlcXVlc3Q6IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogVGhlIHByYWN0aXRpb25lciB0aGF0IGlzIHRoZSBjYXJlIG1hbmFnZXIvY2FyZSBjb29yZGluYXRvciBmb3IgdGhpcyBwYXRpZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjYXJlTWFuYWdlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbGlzdCBvZiBwcmFjdGl0aW9uZXJzIHRoYXQgbWF5IGJlIGZhY2lsaXRhdGluZyB0aGlzIGVwaXNvZGUgb2YgY2FyZSBmb3Igc3BlY2lmaWMgcHVycG9zZXMuXHJcbiAgICovXHJcbiAgcHVibGljIHRlYW06IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogVGhlIGJpbGxpbmcgc3lzdGVtIG1heSBjaG9vc2UgdG8gYWxsb2NhdGUgYmlsbGFibGUgaXRlbXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBFcGlzb2RlT2ZDYXJlIHRvIGRpZmZlcmVudCByZWZlcmVuY2VkIEFjY291bnRzIGJhc2VkIG9uIGludGVybmFsIGJ1c2luZXNzIHJ1bGVzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhY2NvdW50OiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEVwaXNvZGVPZkNhcmUgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxFcGlzb2RlT2ZDYXJlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ0VwaXNvZGVPZkNhcmUnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxFcGlzb2RlT2ZDYXJlU3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN0YXR1c30pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzKSB7IHRoaXMuc3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPEVwaXNvZGVPZkNhcmVTdGF0dXNDb2RlVHlwZT4oc291cmNlLl9zdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1c0hpc3RvcnknXSkgeyB0aGlzLnN0YXR1c0hpc3RvcnkgPSBzb3VyY2Uuc3RhdHVzSGlzdG9yeS5tYXAoKHgpID0+IG5ldyBmaGlyLkVwaXNvZGVPZkNhcmVTdGF0dXNIaXN0b3J5KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3RhdHVzSGlzdG9yeSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWyd0eXBlJ10pIHsgdGhpcy50eXBlID0gc291cmNlLnR5cGUubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50eXBlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2RpYWdub3NpcyddKSB7IHRoaXMuZGlhZ25vc2lzID0gc291cmNlLmRpYWdub3Npcy5tYXAoKHgpID0+IG5ldyBmaGlyLkVwaXNvZGVPZkNhcmVEaWFnbm9zaXMoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5kaWFnbm9zaXMgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncGF0aWVudCddKSB7IHRoaXMucGF0aWVudCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucGF0aWVudCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnBhdGllbnQgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydtYW5hZ2luZ09yZ2FuaXphdGlvbiddKSB7IHRoaXMubWFuYWdpbmdPcmdhbml6YXRpb24gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLm1hbmFnaW5nT3JnYW5pemF0aW9uKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncGVyaW9kJ10pIHsgdGhpcy5wZXJpb2QgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLnBlcmlvZCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlZmVycmFsUmVxdWVzdCddKSB7IHRoaXMucmVmZXJyYWxSZXF1ZXN0ID0gc291cmNlLnJlZmVycmFsUmVxdWVzdC5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnJlZmVycmFsUmVxdWVzdCA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydjYXJlTWFuYWdlciddKSB7IHRoaXMuY2FyZU1hbmFnZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmNhcmVNYW5hZ2VyKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsndGVhbSddKSB7IHRoaXMudGVhbSA9IHNvdXJjZS50ZWFtLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMudGVhbSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydhY2NvdW50J10pIHsgdGhpcy5hY2NvdW50ID0gc291cmNlLmFjY291bnQubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5hY2NvdW50ID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdFcGlzb2RlT2ZDYXJlJyB9XHJcbiAgICB0aGlzLnZSUygncmVzb3VyY2VUeXBlJyxleHApXHJcbiAgICB0aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKVxyXG4gICAgdGhpcy52UlNWKCdzdGF0dXMnLGV4cCwnRXBpc29kZU9mQ2FyZVN0YXR1cycsRXBpc29kZU9mQ2FyZVN0YXR1c1ZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZPQSgnc3RhdHVzSGlzdG9yeScsZXhwKVxyXG4gICAgdGhpcy52T0EoJ3R5cGUnLGV4cClcclxuICAgIHRoaXMudk9BKCdkaWFnbm9zaXMnLGV4cClcclxuICAgIHRoaXMudlJTKCdwYXRpZW50JyxleHApXHJcbiAgICB0aGlzLnZPUygnbWFuYWdpbmdPcmdhbml6YXRpb24nLGV4cClcclxuICAgIHRoaXMudk9TKCdwZXJpb2QnLGV4cClcclxuICAgIHRoaXMudk9BKCdyZWZlcnJhbFJlcXVlc3QnLGV4cClcclxuICAgIHRoaXMudk9TKCdjYXJlTWFuYWdlcicsZXhwKVxyXG4gICAgdGhpcy52T0EoJ3RlYW0nLGV4cClcclxuICAgIHRoaXMudk9BKCdhY2NvdW50JyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=