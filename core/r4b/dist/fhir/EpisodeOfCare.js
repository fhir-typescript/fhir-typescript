// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
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
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'EpisodeOfCare.statusHistory';
        }
        iss.push(...this.vRSV('status', exp, 'EpisodeOfCareStatus', EpisodeOfCareStatusVsValidation, 'r'));
        iss.push(...this.vRS('period', exp));
        return iss;
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
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'EpisodeOfCare.diagnosis';
        }
        iss.push(...this.vRS('condition', exp));
        iss.push(...this.vOS('role', exp));
        iss.push(...this.vOS('rank', exp));
        return iss;
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
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'EpisodeOfCare';
        }
        iss.push(...this.vRPS('resourceType', exp));
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vRSV('status', exp, 'EpisodeOfCareStatus', EpisodeOfCareStatusVsValidation, 'r'));
        iss.push(...this.vOA('statusHistory', exp));
        iss.push(...this.vOA('type', exp));
        iss.push(...this.vOA('diagnosis', exp));
        iss.push(...this.vRS('patient', exp));
        iss.push(...this.vOS('managingOrganization', exp));
        iss.push(...this.vOS('period', exp));
        iss.push(...this.vOA('referralRequest', exp));
        iss.push(...this.vOS('careManager', exp));
        iss.push(...this.vOA('team', exp));
        iss.push(...this.vOA('account', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
EpisodeOfCare._fts_dataType = 'EpisodeOfCare';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXBpc29kZU9mQ2FyZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRXBpc29kZU9mQ2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBMkJ0Rzs7R0FFRztBQUNILE1BQU0sT0FBTywwQkFBMkIsU0FBUSxJQUFJLENBQUMsZUFBZTtJQWFsRTs7T0FFRztJQUNILFlBQVksU0FBaUQsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDdkcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUE4QixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQzFHO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLENBQUM7YUFBRTtpQkFDbkU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQThCLE1BQU0sQ0FBQyxPQUFpQyxDQUFDLENBQUM7YUFBRTtTQUNqSDtRQUNELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFN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QUFDLENBQUMsQ0FBQztRQUM3QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBNUdEOztHQUVHO0FBQzZCLDJCQUFhLEdBQVUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogRXBpc29kZU9mQ2FyZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRXBpc29kZU9mQ2FyZVN0YXR1c0NvZGVzLCAgRXBpc29kZU9mQ2FyZVN0YXR1c0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9FcGlzb2RlT2ZDYXJlU3RhdHVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEVwaXNvZGVPZkNhcmVTdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0VwaXNvZGVPZkNhcmVTdGF0dXNWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IERpYWdub3Npc1JvbGVDb2RlcywgIERpYWdub3Npc1JvbGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRGlhZ25vc2lzUm9sZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBEaWFnbm9zaXNSb2xlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9EaWFnbm9zaXNSb2xlVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBFcGlzb2Rlb2ZjYXJlVHlwZUNvZGVzLCAgRXBpc29kZW9mY2FyZVR5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRXBpc29kZW9mY2FyZVR5cGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRXBpc29kZW9mY2FyZVR5cGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0VwaXNvZGVvZmNhcmVUeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEVwaXNvZGVPZkNhcmVTdGF0dXNIaXN0b3J5IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEVwaXNvZGVPZkNhcmVTdGF0dXNIaXN0b3J5QXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogcGxhbm5lZCB8IHdhaXRsaXN0IHwgYWN0aXZlIHwgb25ob2xkIHwgZmluaXNoZWQgfCBjYW5jZWxsZWQuXHJcbiAgICovXHJcbiAgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPEVwaXNvZGVPZkNhcmVTdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRXBpc29kZU9mQ2FyZS5zdGF0dXNIaXN0b3J5LnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJpb2QgZHVyaW5nIHRoaXMgRXBpc29kZU9mQ2FyZSB0aGF0IHRoZSBzcGVjaWZpYyBzdGF0dXMgYXBwbGllZC5cclxuICAgKi9cclxuICBwZXJpb2Q6IGZoaXIuUGVyaW9kQXJnc3xudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIGhpc3Rvcnkgb2Ygc3RhdHVzZXMgdGhhdCB0aGUgRXBpc29kZU9mQ2FyZSBoYXMgYmVlbiB0aHJvdWdoICh3aXRob3V0IHJlcXVpcmluZyBwcm9jZXNzaW5nIHRoZSBoaXN0b3J5IG9mIHRoZSByZXNvdXJjZSkuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRXBpc29kZU9mQ2FyZVN0YXR1c0hpc3RvcnkgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdFcGlzb2RlT2ZDYXJlU3RhdHVzSGlzdG9yeSc7XHJcbiAgLyoqXHJcbiAgICogcGxhbm5lZCB8IHdhaXRsaXN0IHwgYWN0aXZlIHwgb25ob2xkIHwgZmluaXNoZWQgfCBjYW5jZWxsZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1czogZmhpci5GaGlyQ29kZTxFcGlzb2RlT2ZDYXJlU3RhdHVzQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBlcmlvZCBkdXJpbmcgdGhpcyBFcGlzb2RlT2ZDYXJlIHRoYXQgdGhlIHNwZWNpZmljIHN0YXR1cyBhcHBsaWVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJpb2Q6IGZoaXIuUGVyaW9kfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgRXBpc29kZU9mQ2FyZVN0YXR1c0hpc3RvcnkgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxFcGlzb2RlT2ZDYXJlU3RhdHVzSGlzdG9yeUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydzdGF0dXMnXSkgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPEVwaXNvZGVPZkNhcmVTdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdHVzfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMpIHsgdGhpcy5zdGF0dXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8RXBpc29kZU9mQ2FyZVN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3N0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncGVyaW9kJ10pIHsgdGhpcy5wZXJpb2QgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLnBlcmlvZCk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnBlcmlvZCA9IG51bGw7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdFcGlzb2RlT2ZDYXJlLnN0YXR1c0hpc3RvcnknIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTVignc3RhdHVzJyxleHAsJ0VwaXNvZGVPZkNhcmVTdGF0dXMnLEVwaXNvZGVPZkNhcmVTdGF0dXNWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygncGVyaW9kJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBFcGlzb2RlT2ZDYXJlRGlhZ25vc2lzIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEVwaXNvZGVPZkNhcmVEaWFnbm9zaXNBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBBIGxpc3Qgb2YgY29uZGl0aW9ucy9wcm9ibGVtcy9kaWFnbm9zZXMgdGhhdCB0aGlzIGVwaXNvZGUgb2YgY2FyZSBpcyBpbnRlbmRlZCB0byBiZSBwcm92aWRpbmcgY2FyZSBmb3IuXHJcbiAgICovXHJcbiAgY29uZGl0aW9uOiBmaGlyLlJlZmVyZW5jZUFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBSb2xlIHRoYXQgdGhpcyBkaWFnbm9zaXMgaGFzIHdpdGhpbiB0aGUgZXBpc29kZSBvZiBjYXJlIChlLmcuIGFkbWlzc2lvbiwgYmlsbGluZywgZGlzY2hhcmdlIOKApikuXHJcbiAgICovXHJcbiAgcm9sZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmFua2luZyBvZiB0aGUgZGlhZ25vc2lzIChmb3IgZWFjaCByb2xlIHR5cGUpLlxyXG4gICAqL1xyXG4gIHJhbms/OiBmaGlyLkZoaXJQb3NpdGl2ZUludHxudW1iZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFcGlzb2RlT2ZDYXJlLmRpYWdub3Npcy5yYW5rXHJcbiAgICovXHJcbiAgX3Jhbms/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIGxpc3Qgb2YgZGlhZ25vc2lzIHJlbGV2YW50IHRvIHRoaXMgZXBpc29kZSBvZiBjYXJlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVwaXNvZGVPZkNhcmVEaWFnbm9zaXMgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdFcGlzb2RlT2ZDYXJlRGlhZ25vc2lzJztcclxuICAvKipcclxuICAgKiBBIGxpc3Qgb2YgY29uZGl0aW9ucy9wcm9ibGVtcy9kaWFnbm9zZXMgdGhhdCB0aGlzIGVwaXNvZGUgb2YgY2FyZSBpcyBpbnRlbmRlZCB0byBiZSBwcm92aWRpbmcgY2FyZSBmb3IuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbmRpdGlvbjogZmhpci5SZWZlcmVuY2V8bnVsbDtcclxuICAvKipcclxuICAgKiBSb2xlIHRoYXQgdGhpcyBkaWFnbm9zaXMgaGFzIHdpdGhpbiB0aGUgZXBpc29kZSBvZiBjYXJlIChlLmcuIGFkbWlzc2lvbiwgYmlsbGluZywgZGlzY2hhcmdlIOKApikuXHJcbiAgICovXHJcbiAgcHVibGljIHJvbGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmFua2luZyBvZiB0aGUgZGlhZ25vc2lzIChmb3IgZWFjaCByb2xlIHR5cGUpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByYW5rPzogZmhpci5GaGlyUG9zaXRpdmVJbnR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEVwaXNvZGVPZkNhcmVEaWFnbm9zaXMgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxFcGlzb2RlT2ZDYXJlRGlhZ25vc2lzQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2NvbmRpdGlvbiddKSB7IHRoaXMuY29uZGl0aW9uID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5jb25kaXRpb24pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb25kaXRpb24gPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydyb2xlJ10pIHsgdGhpcy5yb2xlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5yb2xlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmFuayddKSB7IHRoaXMucmFuayA9IG5ldyBmaGlyLkZoaXJQb3NpdGl2ZUludCh7dmFsdWU6IHNvdXJjZS5yYW5rfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19yYW5rJ10pIHtcclxuICAgICAgaWYgKHRoaXMucmFuaykgeyB0aGlzLnJhbmsuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fcmFuayEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnJhbmsgPSBuZXcgZmhpci5GaGlyUG9zaXRpdmVJbnQoc291cmNlLl9yYW5rIGFzIFBhcnRpYWw8Zmhpci5GaGlyUG9zaXRpdmVJbnRBcmdzPik7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdFcGlzb2RlT2ZDYXJlLmRpYWdub3NpcycgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ2NvbmRpdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncm9sZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncmFuaycsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgRXBpc29kZU9mQ2FyZSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBFcGlzb2RlT2ZDYXJlQXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiRXBpc29kZU9mQ2FyZVwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgRXBpc29kZU9mQ2FyZSBtYXkgYmUga25vd24gYnkgZGlmZmVyZW50IGlkZW50aWZpZXJzIGZvciBkaWZmZXJlbnQgY29udGV4dHMgb2YgdXNlLCBzdWNoIGFzIHdoZW4gYW4gZXh0ZXJuYWwgYWdlbmN5IGlzIHRyYWNraW5nIHRoZSBFcGlzb2RlIGZvciBmdW5kaW5nIHB1cnBvc2VzLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSB0aGUgc3RhdHVzIGNvbnRhaW5zIGNvZGVzIHRoYXQgbWFyayB0aGUgZXBpc29kZSBhcyBub3QgY3VycmVudGx5IHZhbGlkLlxyXG4gICAqL1xyXG4gIHN0YXR1czogZmhpci5GaGlyQ29kZTxFcGlzb2RlT2ZDYXJlU3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEVwaXNvZGVPZkNhcmUuc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIGhpc3Rvcnkgb2Ygc3RhdHVzZXMgdGhhdCB0aGUgRXBpc29kZU9mQ2FyZSBoYXMgYmVlbiB0aHJvdWdoICh3aXRob3V0IHJlcXVpcmluZyBwcm9jZXNzaW5nIHRoZSBoaXN0b3J5IG9mIHRoZSByZXNvdXJjZSkuXHJcbiAgICovXHJcbiAgc3RhdHVzSGlzdG9yeT86IGZoaXIuRXBpc29kZU9mQ2FyZVN0YXR1c0hpc3RvcnlBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0eXBlIGNhbiBiZSB2ZXJ5IGltcG9ydGFudCBpbiBwcm9jZXNzaW5nIGFzIHRoaXMgY291bGQgYmUgdXNlZCBpbiBkZXRlcm1pbmluZyBpZiB0aGUgRXBpc29kZU9mQ2FyZSBpcyByZWxldmFudCB0byBzcGVjaWZpYyBnb3Zlcm5tZW50IHJlcG9ydGluZywgb3Igb3RoZXIgdHlwZXMgb2YgY2xhc3NpZmljYXRpb25zLlxyXG4gICAqL1xyXG4gIHR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxpc3Qgb2YgZGlhZ25vc2lzIHJlbGV2YW50IHRvIHRoaXMgZXBpc29kZSBvZiBjYXJlLlxyXG4gICAqL1xyXG4gIGRpYWdub3Npcz86IGZoaXIuRXBpc29kZU9mQ2FyZURpYWdub3Npc0FyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBhdGllbnQgd2hvIGlzIHRoZSBmb2N1cyBvZiB0aGlzIGVwaXNvZGUgb2YgY2FyZS5cclxuICAgKi9cclxuICBwYXRpZW50OiBmaGlyLlJlZmVyZW5jZUFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgb3JnYW5pemF0aW9uIHRoYXQgaGFzIGFzc3VtZWQgdGhlIHNwZWNpZmljIHJlc3BvbnNpYmlsaXRpZXMgZm9yIHRoZSBzcGVjaWZpZWQgZHVyYXRpb24uXHJcbiAgICovXHJcbiAgbWFuYWdpbmdPcmdhbml6YXRpb24/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpbnRlcnZhbCBkdXJpbmcgd2hpY2ggdGhlIG1hbmFnaW5nIG9yZ2FuaXphdGlvbiBhc3N1bWVzIHRoZSBkZWZpbmVkIHJlc3BvbnNpYmlsaXR5LlxyXG4gICAqL1xyXG4gIHBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVmZXJyYWwgUmVxdWVzdChzKSB0aGF0IGFyZSBmdWxmaWxsZWQgYnkgdGhpcyBFcGlzb2RlT2ZDYXJlLCBpbmNvbWluZyByZWZlcnJhbHMuXHJcbiAgICovXHJcbiAgcmVmZXJyYWxSZXF1ZXN0PzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwcmFjdGl0aW9uZXIgdGhhdCBpcyB0aGUgY2FyZSBtYW5hZ2VyL2NhcmUgY29vcmRpbmF0b3IgZm9yIHRoaXMgcGF0aWVudC5cclxuICAgKi9cclxuICBjYXJlTWFuYWdlcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxpc3Qgb2YgcHJhY3RpdGlvbmVycyB0aGF0IG1heSBiZSBmYWNpbGl0YXRpbmcgdGhpcyBlcGlzb2RlIG9mIGNhcmUgZm9yIHNwZWNpZmljIHB1cnBvc2VzLlxyXG4gICAqL1xyXG4gIHRlYW0/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGJpbGxpbmcgc3lzdGVtIG1heSBjaG9vc2UgdG8gYWxsb2NhdGUgYmlsbGFibGUgaXRlbXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBFcGlzb2RlT2ZDYXJlIHRvIGRpZmZlcmVudCByZWZlcmVuY2VkIEFjY291bnRzIGJhc2VkIG9uIGludGVybmFsIGJ1c2luZXNzIHJ1bGVzLlxyXG4gICAqL1xyXG4gIGFjY291bnQ/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBhc3NvY2lhdGlvbiBiZXR3ZWVuIGEgcGF0aWVudCBhbmQgYW4gb3JnYW5pemF0aW9uIC8gaGVhbHRoY2FyZSBwcm92aWRlcihzKSBkdXJpbmcgd2hpY2ggdGltZSBlbmNvdW50ZXJzIG1heSBvY2N1ci4gVGhlIG1hbmFnaW5nIG9yZ2FuaXphdGlvbiBhc3N1bWVzIGEgbGV2ZWwgb2YgcmVzcG9uc2liaWxpdHkgZm9yIHRoZSBwYXRpZW50IGR1cmluZyB0aGlzIHRpbWUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRXBpc29kZU9mQ2FyZSBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRXBpc29kZU9mQ2FyZSc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJFcGlzb2RlT2ZDYXJlXCI7XHJcbiAgLyoqXHJcbiAgICogVGhlIEVwaXNvZGVPZkNhcmUgbWF5IGJlIGtub3duIGJ5IGRpZmZlcmVudCBpZGVudGlmaWVycyBmb3IgZGlmZmVyZW50IGNvbnRleHRzIG9mIHVzZSwgc3VjaCBhcyB3aGVuIGFuIGV4dGVybmFsIGFnZW5jeSBpcyB0cmFja2luZyB0aGUgRXBpc29kZSBmb3IgZnVuZGluZyBwdXJwb3Nlcy5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgY29kZXMgdGhhdCBtYXJrIHRoZSBlcGlzb2RlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1czogZmhpci5GaGlyQ29kZTxFcGlzb2RlT2ZDYXJlU3RhdHVzQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGhpc3Rvcnkgb2Ygc3RhdHVzZXMgdGhhdCB0aGUgRXBpc29kZU9mQ2FyZSBoYXMgYmVlbiB0aHJvdWdoICh3aXRob3V0IHJlcXVpcmluZyBwcm9jZXNzaW5nIHRoZSBoaXN0b3J5IG9mIHRoZSByZXNvdXJjZSkuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1c0hpc3Rvcnk6IGZoaXIuRXBpc29kZU9mQ2FyZVN0YXR1c0hpc3RvcnlbXTtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBjYW4gYmUgdmVyeSBpbXBvcnRhbnQgaW4gcHJvY2Vzc2luZyBhcyB0aGlzIGNvdWxkIGJlIHVzZWQgaW4gZGV0ZXJtaW5pbmcgaWYgdGhlIEVwaXNvZGVPZkNhcmUgaXMgcmVsZXZhbnQgdG8gc3BlY2lmaWMgZ292ZXJubWVudCByZXBvcnRpbmcsIG9yIG90aGVyIHR5cGVzIG9mIGNsYXNzaWZpY2F0aW9ucy5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZTogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBUaGUgbGlzdCBvZiBkaWFnbm9zaXMgcmVsZXZhbnQgdG8gdGhpcyBlcGlzb2RlIG9mIGNhcmUuXHJcbiAgICovXHJcbiAgcHVibGljIGRpYWdub3NpczogZmhpci5FcGlzb2RlT2ZDYXJlRGlhZ25vc2lzW107XHJcbiAgLyoqXHJcbiAgICogVGhlIHBhdGllbnQgd2hvIGlzIHRoZSBmb2N1cyBvZiB0aGlzIGVwaXNvZGUgb2YgY2FyZS5cclxuICAgKi9cclxuICBwdWJsaWMgcGF0aWVudDogZmhpci5SZWZlcmVuY2V8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgb3JnYW5pemF0aW9uIHRoYXQgaGFzIGFzc3VtZWQgdGhlIHNwZWNpZmljIHJlc3BvbnNpYmlsaXRpZXMgZm9yIHRoZSBzcGVjaWZpZWQgZHVyYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIG1hbmFnaW5nT3JnYW5pemF0aW9uPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpbnRlcnZhbCBkdXJpbmcgd2hpY2ggdGhlIG1hbmFnaW5nIG9yZ2FuaXphdGlvbiBhc3N1bWVzIHRoZSBkZWZpbmVkIHJlc3BvbnNpYmlsaXR5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVmZXJyYWwgUmVxdWVzdChzKSB0aGF0IGFyZSBmdWxmaWxsZWQgYnkgdGhpcyBFcGlzb2RlT2ZDYXJlLCBpbmNvbWluZyByZWZlcnJhbHMuXHJcbiAgICovXHJcbiAgcHVibGljIHJlZmVycmFsUmVxdWVzdDogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBUaGUgcHJhY3RpdGlvbmVyIHRoYXQgaXMgdGhlIGNhcmUgbWFuYWdlci9jYXJlIGNvb3JkaW5hdG9yIGZvciB0aGlzIHBhdGllbnQuXHJcbiAgICovXHJcbiAgcHVibGljIGNhcmVNYW5hZ2VyPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsaXN0IG9mIHByYWN0aXRpb25lcnMgdGhhdCBtYXkgYmUgZmFjaWxpdGF0aW5nIHRoaXMgZXBpc29kZSBvZiBjYXJlIGZvciBzcGVjaWZpYyBwdXJwb3Nlcy5cclxuICAgKi9cclxuICBwdWJsaWMgdGVhbTogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBUaGUgYmlsbGluZyBzeXN0ZW0gbWF5IGNob29zZSB0byBhbGxvY2F0ZSBiaWxsYWJsZSBpdGVtcyBhc3NvY2lhdGVkIHdpdGggdGhlIEVwaXNvZGVPZkNhcmUgdG8gZGlmZmVyZW50IHJlZmVyZW5jZWQgQWNjb3VudHMgYmFzZWQgb24gaW50ZXJuYWwgYnVzaW5lc3MgcnVsZXMuXHJcbiAgICovXHJcbiAgcHVibGljIGFjY291bnQ6IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgRXBpc29kZU9mQ2FyZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEVwaXNvZGVPZkNhcmVBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnRXBpc29kZU9mQ2FyZSc7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gc291cmNlLmlkZW50aWZpZXIubWFwKCh4KSA9PiBuZXcgZmhpci5JZGVudGlmaWVyKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaWRlbnRpZmllciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydzdGF0dXMnXSkgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPEVwaXNvZGVPZkNhcmVTdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdHVzfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMpIHsgdGhpcy5zdGF0dXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8RXBpc29kZU9mQ2FyZVN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3N0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzSGlzdG9yeSddKSB7IHRoaXMuc3RhdHVzSGlzdG9yeSA9IHNvdXJjZS5zdGF0dXNIaXN0b3J5Lm1hcCgoeCkgPT4gbmV3IGZoaXIuRXBpc29kZU9mQ2FyZVN0YXR1c0hpc3RvcnkoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdGF0dXNIaXN0b3J5ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBzb3VyY2UudHlwZS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnR5cGUgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGlhZ25vc2lzJ10pIHsgdGhpcy5kaWFnbm9zaXMgPSBzb3VyY2UuZGlhZ25vc2lzLm1hcCgoeCkgPT4gbmV3IGZoaXIuRXBpc29kZU9mQ2FyZURpYWdub3Npcyh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmRpYWdub3NpcyA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydwYXRpZW50J10pIHsgdGhpcy5wYXRpZW50ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5wYXRpZW50KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucGF0aWVudCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ21hbmFnaW5nT3JnYW5pemF0aW9uJ10pIHsgdGhpcy5tYW5hZ2luZ09yZ2FuaXphdGlvbiA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UubWFuYWdpbmdPcmdhbml6YXRpb24pOyB9XHJcbiAgICBpZiAoc291cmNlWydwZXJpb2QnXSkgeyB0aGlzLnBlcmlvZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2UucGVyaW9kKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVmZXJyYWxSZXF1ZXN0J10pIHsgdGhpcy5yZWZlcnJhbFJlcXVlc3QgPSBzb3VyY2UucmVmZXJyYWxSZXF1ZXN0Lm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucmVmZXJyYWxSZXF1ZXN0ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2NhcmVNYW5hZ2VyJ10pIHsgdGhpcy5jYXJlTWFuYWdlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuY2FyZU1hbmFnZXIpOyB9XHJcbiAgICBpZiAoc291cmNlWyd0ZWFtJ10pIHsgdGhpcy50ZWFtID0gc291cmNlLnRlYW0ubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50ZWFtID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2FjY291bnQnXSkgeyB0aGlzLmFjY291bnQgPSBzb3VyY2UuYWNjb3VudC5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmFjY291bnQgPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0VwaXNvZGVPZkNhcmUnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJQUygncmVzb3VyY2VUeXBlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTVignc3RhdHVzJyxleHAsJ0VwaXNvZGVPZkNhcmVTdGF0dXMnLEVwaXNvZGVPZkNhcmVTdGF0dXNWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnc3RhdHVzSGlzdG9yeScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgndHlwZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnZGlhZ25vc2lzJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdwYXRpZW50JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdtYW5hZ2luZ09yZ2FuaXphdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncGVyaW9kJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdyZWZlcnJhbFJlcXVlc3QnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2NhcmVNYW5hZ2VyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCd0ZWFtJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdhY2NvdW50JyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==