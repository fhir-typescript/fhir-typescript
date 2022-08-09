// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
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
        if (source['status'] !== undefined) {
            this.status = new fhir.FhirCode({ value: source.status }, options);
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status, options);
            }
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period, options);
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
            this.condition = new fhir.Reference(source.condition, options);
        }
        else {
            this.condition = null;
        }
        if (source['role']) {
            this.role = new fhir.CodeableConcept(source.role, options);
        }
        if (source['rank'] !== undefined) {
            this.rank = new fhir.FhirPositiveInt({ value: source.rank }, options);
        }
        if (source['_rank']) {
            if (this.rank) {
                this.rank.addExtendedProperties(source._rank);
            }
            else {
                this.rank = new fhir.FhirPositiveInt(source._rank, options);
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
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options));
        }
        else {
            this.identifier = [];
        }
        if (source['status'] !== undefined) {
            this.status = new fhir.FhirCode({ value: source.status }, options);
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status, options);
            }
        }
        if (source['statusHistory']) {
            this.statusHistory = source.statusHistory.map((x) => new fhir.EpisodeOfCareStatusHistory(x, options));
        }
        else {
            this.statusHistory = [];
        }
        if (source['type']) {
            this.type = source.type.map((x) => new fhir.CodeableConcept(x, options));
        }
        else {
            this.type = [];
        }
        if (source['diagnosis']) {
            this.diagnosis = source.diagnosis.map((x) => new fhir.EpisodeOfCareDiagnosis(x, options));
        }
        else {
            this.diagnosis = [];
        }
        if (source['patient']) {
            this.patient = new fhir.Reference(source.patient, options);
        }
        else {
            this.patient = null;
        }
        if (source['managingOrganization']) {
            this.managingOrganization = new fhir.Reference(source.managingOrganization, options);
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period, options);
        }
        if (source['referralRequest']) {
            this.referralRequest = source.referralRequest.map((x) => new fhir.Reference(x, options));
        }
        else {
            this.referralRequest = [];
        }
        if (source['careManager']) {
            this.careManager = new fhir.Reference(source.careManager, options);
        }
        if (source['team']) {
            this.team = source.team.map((x) => new fhir.Reference(x, options));
        }
        else {
            this.team = [];
        }
        if (source['account']) {
            this.account = source.account.map((x) => new fhir.Reference(x, options));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXBpc29kZU9mQ2FyZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRXBpc29kZU9mQ2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBMkJ0Rzs7R0FFRztBQUNILE1BQU0sT0FBTywwQkFBMkIsU0FBUSxJQUFJLENBQUMsZUFBZTtJQWFsRTs7T0FFRztJQUNILFlBQVksU0FBaUQsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDdkcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBOEIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDakk7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzVCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxPQUFRLENBQUMsQ0FBQzthQUFFO2lCQUNuRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBOEIsTUFBTSxDQUFDLE9BQWlDLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFBRTtTQUMxSDtRQUNELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFD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QUNsRCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUEzR0Q7O0dBRUc7QUFDNkIsMkJBQWEsR0FBVSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IEVwaXNvZGVPZkNhcmVcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEVwaXNvZGVPZkNhcmVTdGF0dXNDb2RlcywgIEVwaXNvZGVPZkNhcmVTdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRXBpc29kZU9mQ2FyZVN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBFcGlzb2RlT2ZDYXJlU3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9FcGlzb2RlT2ZDYXJlU3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBEaWFnbm9zaXNSb2xlQ29kZXMsICBEaWFnbm9zaXNSb2xlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0RpYWdub3Npc1JvbGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRGlhZ25vc2lzUm9sZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRGlhZ25vc2lzUm9sZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRXBpc29kZW9mY2FyZVR5cGVDb2RlcywgIEVwaXNvZGVvZmNhcmVUeXBlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0VwaXNvZGVvZmNhcmVUeXBlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEVwaXNvZGVvZmNhcmVUeXBlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9FcGlzb2Rlb2ZjYXJlVHlwZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBFcGlzb2RlT2ZDYXJlU3RhdHVzSGlzdG9yeSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBFcGlzb2RlT2ZDYXJlU3RhdHVzSGlzdG9yeUFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIHBsYW5uZWQgfCB3YWl0bGlzdCB8IGFjdGl2ZSB8IG9uaG9sZCB8IGZpbmlzaGVkIHwgY2FuY2VsbGVkLlxyXG4gICAqL1xyXG4gIHN0YXR1czogZmhpci5GaGlyQ29kZTxFcGlzb2RlT2ZDYXJlU3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEVwaXNvZGVPZkNhcmUuc3RhdHVzSGlzdG9yeS5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgcGVyaW9kIGR1cmluZyB0aGlzIEVwaXNvZGVPZkNhcmUgdGhhdCB0aGUgc3BlY2lmaWMgc3RhdHVzIGFwcGxpZWQuXHJcbiAgICovXHJcbiAgcGVyaW9kOiBmaGlyLlBlcmlvZEFyZ3N8bnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBoaXN0b3J5IG9mIHN0YXR1c2VzIHRoYXQgdGhlIEVwaXNvZGVPZkNhcmUgaGFzIGJlZW4gdGhyb3VnaCAod2l0aG91dCByZXF1aXJpbmcgcHJvY2Vzc2luZyB0aGUgaGlzdG9yeSBvZiB0aGUgcmVzb3VyY2UpLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVwaXNvZGVPZkNhcmVTdGF0dXNIaXN0b3J5IGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRXBpc29kZU9mQ2FyZVN0YXR1c0hpc3RvcnknO1xyXG4gIC8qKlxyXG4gICAqIHBsYW5uZWQgfCB3YWl0bGlzdCB8IGFjdGl2ZSB8IG9uaG9sZCB8IGZpbmlzaGVkIHwgY2FuY2VsbGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM6IGZoaXIuRmhpckNvZGU8RXBpc29kZU9mQ2FyZVN0YXR1c0NvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJpb2QgZHVyaW5nIHRoaXMgRXBpc29kZU9mQ2FyZSB0aGF0IHRoZSBzcGVjaWZpYyBzdGF0dXMgYXBwbGllZC5cclxuICAgKi9cclxuICBwdWJsaWMgcGVyaW9kOiBmaGlyLlBlcmlvZHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEVwaXNvZGVPZkNhcmVTdGF0dXNIaXN0b3J5IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8RXBpc29kZU9mQ2FyZVN0YXR1c0hpc3RvcnlBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPEVwaXNvZGVPZkNhcmVTdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdHVzfSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMpIHsgdGhpcy5zdGF0dXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8RXBpc29kZU9mQ2FyZVN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3N0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncGVyaW9kJ10pIHsgdGhpcy5wZXJpb2QgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLnBlcmlvZCwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnBlcmlvZCA9IG51bGw7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdFcGlzb2RlT2ZDYXJlLnN0YXR1c0hpc3RvcnknIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTVignc3RhdHVzJyxleHAsJ0VwaXNvZGVPZkNhcmVTdGF0dXMnLEVwaXNvZGVPZkNhcmVTdGF0dXNWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygncGVyaW9kJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBFcGlzb2RlT2ZDYXJlRGlhZ25vc2lzIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEVwaXNvZGVPZkNhcmVEaWFnbm9zaXNBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBBIGxpc3Qgb2YgY29uZGl0aW9ucy9wcm9ibGVtcy9kaWFnbm9zZXMgdGhhdCB0aGlzIGVwaXNvZGUgb2YgY2FyZSBpcyBpbnRlbmRlZCB0byBiZSBwcm92aWRpbmcgY2FyZSBmb3IuXHJcbiAgICovXHJcbiAgY29uZGl0aW9uOiBmaGlyLlJlZmVyZW5jZUFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBSb2xlIHRoYXQgdGhpcyBkaWFnbm9zaXMgaGFzIHdpdGhpbiB0aGUgZXBpc29kZSBvZiBjYXJlIChlLmcuIGFkbWlzc2lvbiwgYmlsbGluZywgZGlzY2hhcmdlIOKApikuXHJcbiAgICovXHJcbiAgcm9sZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmFua2luZyBvZiB0aGUgZGlhZ25vc2lzIChmb3IgZWFjaCByb2xlIHR5cGUpLlxyXG4gICAqL1xyXG4gIHJhbms/OiBmaGlyLkZoaXJQb3NpdGl2ZUludHxudW1iZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFcGlzb2RlT2ZDYXJlLmRpYWdub3Npcy5yYW5rXHJcbiAgICovXHJcbiAgX3Jhbms/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIGxpc3Qgb2YgZGlhZ25vc2lzIHJlbGV2YW50IHRvIHRoaXMgZXBpc29kZSBvZiBjYXJlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVwaXNvZGVPZkNhcmVEaWFnbm9zaXMgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdFcGlzb2RlT2ZDYXJlRGlhZ25vc2lzJztcclxuICAvKipcclxuICAgKiBBIGxpc3Qgb2YgY29uZGl0aW9ucy9wcm9ibGVtcy9kaWFnbm9zZXMgdGhhdCB0aGlzIGVwaXNvZGUgb2YgY2FyZSBpcyBpbnRlbmRlZCB0byBiZSBwcm92aWRpbmcgY2FyZSBmb3IuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbmRpdGlvbjogZmhpci5SZWZlcmVuY2V8bnVsbDtcclxuICAvKipcclxuICAgKiBSb2xlIHRoYXQgdGhpcyBkaWFnbm9zaXMgaGFzIHdpdGhpbiB0aGUgZXBpc29kZSBvZiBjYXJlIChlLmcuIGFkbWlzc2lvbiwgYmlsbGluZywgZGlzY2hhcmdlIOKApikuXHJcbiAgICovXHJcbiAgcHVibGljIHJvbGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmFua2luZyBvZiB0aGUgZGlhZ25vc2lzIChmb3IgZWFjaCByb2xlIHR5cGUpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByYW5rPzogZmhpci5GaGlyUG9zaXRpdmVJbnR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEVwaXNvZGVPZkNhcmVEaWFnbm9zaXMgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxFcGlzb2RlT2ZDYXJlRGlhZ25vc2lzQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2NvbmRpdGlvbiddKSB7IHRoaXMuY29uZGl0aW9uID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5jb25kaXRpb24sIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb25kaXRpb24gPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydyb2xlJ10pIHsgdGhpcy5yb2xlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5yb2xlLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmFuayddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5yYW5rID0gbmV3IGZoaXIuRmhpclBvc2l0aXZlSW50KHt2YWx1ZTogc291cmNlLnJhbmt9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3JhbmsnXSkge1xyXG4gICAgICBpZiAodGhpcy5yYW5rKSB7IHRoaXMucmFuay5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9yYW5rISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucmFuayA9IG5ldyBmaGlyLkZoaXJQb3NpdGl2ZUludChzb3VyY2UuX3JhbmsgYXMgUGFydGlhbDxmaGlyLkZoaXJQb3NpdGl2ZUludEFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0VwaXNvZGVPZkNhcmUuZGlhZ25vc2lzJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygnY29uZGl0aW9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdyb2xlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdyYW5rJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBFcGlzb2RlT2ZDYXJlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEVwaXNvZGVPZkNhcmVBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJFcGlzb2RlT2ZDYXJlXCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBFcGlzb2RlT2ZDYXJlIG1heSBiZSBrbm93biBieSBkaWZmZXJlbnQgaWRlbnRpZmllcnMgZm9yIGRpZmZlcmVudCBjb250ZXh0cyBvZiB1c2UsIHN1Y2ggYXMgd2hlbiBhbiBleHRlcm5hbCBhZ2VuY3kgaXMgdHJhY2tpbmcgdGhlIEVwaXNvZGUgZm9yIGZ1bmRpbmcgcHVycG9zZXMuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgY29kZXMgdGhhdCBtYXJrIHRoZSBlcGlzb2RlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPEVwaXNvZGVPZkNhcmVTdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRXBpc29kZU9mQ2FyZS5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgaGlzdG9yeSBvZiBzdGF0dXNlcyB0aGF0IHRoZSBFcGlzb2RlT2ZDYXJlIGhhcyBiZWVuIHRocm91Z2ggKHdpdGhvdXQgcmVxdWlyaW5nIHByb2Nlc3NpbmcgdGhlIGhpc3Rvcnkgb2YgdGhlIHJlc291cmNlKS5cclxuICAgKi9cclxuICBzdGF0dXNIaXN0b3J5PzogZmhpci5FcGlzb2RlT2ZDYXJlU3RhdHVzSGlzdG9yeUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgY2FuIGJlIHZlcnkgaW1wb3J0YW50IGluIHByb2Nlc3NpbmcgYXMgdGhpcyBjb3VsZCBiZSB1c2VkIGluIGRldGVybWluaW5nIGlmIHRoZSBFcGlzb2RlT2ZDYXJlIGlzIHJlbGV2YW50IHRvIHNwZWNpZmljIGdvdmVybm1lbnQgcmVwb3J0aW5nLCBvciBvdGhlciB0eXBlcyBvZiBjbGFzc2lmaWNhdGlvbnMuXHJcbiAgICovXHJcbiAgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbGlzdCBvZiBkaWFnbm9zaXMgcmVsZXZhbnQgdG8gdGhpcyBlcGlzb2RlIG9mIGNhcmUuXHJcbiAgICovXHJcbiAgZGlhZ25vc2lzPzogZmhpci5FcGlzb2RlT2ZDYXJlRGlhZ25vc2lzQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcGF0aWVudCB3aG8gaXMgdGhlIGZvY3VzIG9mIHRoaXMgZXBpc29kZSBvZiBjYXJlLlxyXG4gICAqL1xyXG4gIHBhdGllbnQ6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvcmdhbml6YXRpb24gdGhhdCBoYXMgYXNzdW1lZCB0aGUgc3BlY2lmaWMgcmVzcG9uc2liaWxpdGllcyBmb3IgdGhlIHNwZWNpZmllZCBkdXJhdGlvbi5cclxuICAgKi9cclxuICBtYW5hZ2luZ09yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGludGVydmFsIGR1cmluZyB3aGljaCB0aGUgbWFuYWdpbmcgb3JnYW5pemF0aW9uIGFzc3VtZXMgdGhlIGRlZmluZWQgcmVzcG9uc2liaWxpdHkuXHJcbiAgICovXHJcbiAgcGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBSZWZlcnJhbCBSZXF1ZXN0KHMpIHRoYXQgYXJlIGZ1bGZpbGxlZCBieSB0aGlzIEVwaXNvZGVPZkNhcmUsIGluY29taW5nIHJlZmVycmFscy5cclxuICAgKi9cclxuICByZWZlcnJhbFJlcXVlc3Q/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHByYWN0aXRpb25lciB0aGF0IGlzIHRoZSBjYXJlIG1hbmFnZXIvY2FyZSBjby1vcmRpbmF0b3IgZm9yIHRoaXMgcGF0aWVudC5cclxuICAgKi9cclxuICBjYXJlTWFuYWdlcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxpc3Qgb2YgcHJhY3RpdGlvbmVycyB0aGF0IG1heSBiZSBmYWNpbGl0YXRpbmcgdGhpcyBlcGlzb2RlIG9mIGNhcmUgZm9yIHNwZWNpZmljIHB1cnBvc2VzLlxyXG4gICAqL1xyXG4gIHRlYW0/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGJpbGxpbmcgc3lzdGVtIG1heSBjaG9vc2UgdG8gYWxsb2NhdGUgYmlsbGFibGUgaXRlbXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBFcGlzb2RlT2ZDYXJlIHRvIGRpZmZlcmVudCByZWZlcmVuY2VkIEFjY291bnRzIGJhc2VkIG9uIGludGVybmFsIGJ1c2luZXNzIHJ1bGVzLlxyXG4gICAqL1xyXG4gIGFjY291bnQ/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBhc3NvY2lhdGlvbiBiZXR3ZWVuIGEgcGF0aWVudCBhbmQgYW4gb3JnYW5pemF0aW9uIC8gaGVhbHRoY2FyZSBwcm92aWRlcihzKSBkdXJpbmcgd2hpY2ggdGltZSBlbmNvdW50ZXJzIG1heSBvY2N1ci4gVGhlIG1hbmFnaW5nIG9yZ2FuaXphdGlvbiBhc3N1bWVzIGEgbGV2ZWwgb2YgcmVzcG9uc2liaWxpdHkgZm9yIHRoZSBwYXRpZW50IGR1cmluZyB0aGlzIHRpbWUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRXBpc29kZU9mQ2FyZSBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRXBpc29kZU9mQ2FyZSc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJFcGlzb2RlT2ZDYXJlXCI7XHJcbiAgLyoqXHJcbiAgICogVGhlIEVwaXNvZGVPZkNhcmUgbWF5IGJlIGtub3duIGJ5IGRpZmZlcmVudCBpZGVudGlmaWVycyBmb3IgZGlmZmVyZW50IGNvbnRleHRzIG9mIHVzZSwgc3VjaCBhcyB3aGVuIGFuIGV4dGVybmFsIGFnZW5jeSBpcyB0cmFja2luZyB0aGUgRXBpc29kZSBmb3IgZnVuZGluZyBwdXJwb3Nlcy5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgY29kZXMgdGhhdCBtYXJrIHRoZSBlcGlzb2RlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1czogZmhpci5GaGlyQ29kZTxFcGlzb2RlT2ZDYXJlU3RhdHVzQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGhpc3Rvcnkgb2Ygc3RhdHVzZXMgdGhhdCB0aGUgRXBpc29kZU9mQ2FyZSBoYXMgYmVlbiB0aHJvdWdoICh3aXRob3V0IHJlcXVpcmluZyBwcm9jZXNzaW5nIHRoZSBoaXN0b3J5IG9mIHRoZSByZXNvdXJjZSkuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1c0hpc3Rvcnk6IGZoaXIuRXBpc29kZU9mQ2FyZVN0YXR1c0hpc3RvcnlbXTtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBjYW4gYmUgdmVyeSBpbXBvcnRhbnQgaW4gcHJvY2Vzc2luZyBhcyB0aGlzIGNvdWxkIGJlIHVzZWQgaW4gZGV0ZXJtaW5pbmcgaWYgdGhlIEVwaXNvZGVPZkNhcmUgaXMgcmVsZXZhbnQgdG8gc3BlY2lmaWMgZ292ZXJubWVudCByZXBvcnRpbmcsIG9yIG90aGVyIHR5cGVzIG9mIGNsYXNzaWZpY2F0aW9ucy5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZTogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBUaGUgbGlzdCBvZiBkaWFnbm9zaXMgcmVsZXZhbnQgdG8gdGhpcyBlcGlzb2RlIG9mIGNhcmUuXHJcbiAgICovXHJcbiAgcHVibGljIGRpYWdub3NpczogZmhpci5FcGlzb2RlT2ZDYXJlRGlhZ25vc2lzW107XHJcbiAgLyoqXHJcbiAgICogVGhlIHBhdGllbnQgd2hvIGlzIHRoZSBmb2N1cyBvZiB0aGlzIGVwaXNvZGUgb2YgY2FyZS5cclxuICAgKi9cclxuICBwdWJsaWMgcGF0aWVudDogZmhpci5SZWZlcmVuY2V8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgb3JnYW5pemF0aW9uIHRoYXQgaGFzIGFzc3VtZWQgdGhlIHNwZWNpZmljIHJlc3BvbnNpYmlsaXRpZXMgZm9yIHRoZSBzcGVjaWZpZWQgZHVyYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIG1hbmFnaW5nT3JnYW5pemF0aW9uPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpbnRlcnZhbCBkdXJpbmcgd2hpY2ggdGhlIG1hbmFnaW5nIG9yZ2FuaXphdGlvbiBhc3N1bWVzIHRoZSBkZWZpbmVkIHJlc3BvbnNpYmlsaXR5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVmZXJyYWwgUmVxdWVzdChzKSB0aGF0IGFyZSBmdWxmaWxsZWQgYnkgdGhpcyBFcGlzb2RlT2ZDYXJlLCBpbmNvbWluZyByZWZlcnJhbHMuXHJcbiAgICovXHJcbiAgcHVibGljIHJlZmVycmFsUmVxdWVzdDogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBUaGUgcHJhY3RpdGlvbmVyIHRoYXQgaXMgdGhlIGNhcmUgbWFuYWdlci9jYXJlIGNvLW9yZGluYXRvciBmb3IgdGhpcyBwYXRpZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjYXJlTWFuYWdlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbGlzdCBvZiBwcmFjdGl0aW9uZXJzIHRoYXQgbWF5IGJlIGZhY2lsaXRhdGluZyB0aGlzIGVwaXNvZGUgb2YgY2FyZSBmb3Igc3BlY2lmaWMgcHVycG9zZXMuXHJcbiAgICovXHJcbiAgcHVibGljIHRlYW06IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogVGhlIGJpbGxpbmcgc3lzdGVtIG1heSBjaG9vc2UgdG8gYWxsb2NhdGUgYmlsbGFibGUgaXRlbXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBFcGlzb2RlT2ZDYXJlIHRvIGRpZmZlcmVudCByZWZlcmVuY2VkIEFjY291bnRzIGJhc2VkIG9uIGludGVybmFsIGJ1c2luZXNzIHJ1bGVzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhY2NvdW50OiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEVwaXNvZGVPZkNhcmUgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxFcGlzb2RlT2ZDYXJlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ0VwaXNvZGVPZkNhcmUnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPEVwaXNvZGVPZkNhcmVTdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdHVzfSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMpIHsgdGhpcy5zdGF0dXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8RXBpc29kZU9mQ2FyZVN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3N0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzSGlzdG9yeSddKSB7IHRoaXMuc3RhdHVzSGlzdG9yeSA9IHNvdXJjZS5zdGF0dXNIaXN0b3J5Lm1hcCgoeCkgPT4gbmV3IGZoaXIuRXBpc29kZU9mQ2FyZVN0YXR1c0hpc3RvcnkoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdGF0dXNIaXN0b3J5ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBzb3VyY2UudHlwZS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnR5cGUgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGlhZ25vc2lzJ10pIHsgdGhpcy5kaWFnbm9zaXMgPSBzb3VyY2UuZGlhZ25vc2lzLm1hcCgoeCkgPT4gbmV3IGZoaXIuRXBpc29kZU9mQ2FyZURpYWdub3Npcyh4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmRpYWdub3NpcyA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydwYXRpZW50J10pIHsgdGhpcy5wYXRpZW50ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5wYXRpZW50LCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucGF0aWVudCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ21hbmFnaW5nT3JnYW5pemF0aW9uJ10pIHsgdGhpcy5tYW5hZ2luZ09yZ2FuaXphdGlvbiA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UubWFuYWdpbmdPcmdhbml6YXRpb24sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydwZXJpb2QnXSkgeyB0aGlzLnBlcmlvZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2UucGVyaW9kLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVmZXJyYWxSZXF1ZXN0J10pIHsgdGhpcy5yZWZlcnJhbFJlcXVlc3QgPSBzb3VyY2UucmVmZXJyYWxSZXF1ZXN0Lm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucmVmZXJyYWxSZXF1ZXN0ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2NhcmVNYW5hZ2VyJ10pIHsgdGhpcy5jYXJlTWFuYWdlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuY2FyZU1hbmFnZXIsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWyd0ZWFtJ10pIHsgdGhpcy50ZWFtID0gc291cmNlLnRlYW0ubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50ZWFtID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2FjY291bnQnXSkgeyB0aGlzLmFjY291bnQgPSBzb3VyY2UuYWNjb3VudC5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmFjY291bnQgPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0VwaXNvZGVPZkNhcmUnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTVignc3RhdHVzJyxleHAsJ0VwaXNvZGVPZkNhcmVTdGF0dXMnLEVwaXNvZGVPZkNhcmVTdGF0dXNWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnc3RhdHVzSGlzdG9yeScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgndHlwZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnZGlhZ25vc2lzJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdwYXRpZW50JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdtYW5hZ2luZ09yZ2FuaXphdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncGVyaW9kJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdyZWZlcnJhbFJlcXVlc3QnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2NhcmVNYW5hZ2VyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCd0ZWFtJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdhY2NvdW50JyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==