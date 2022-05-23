// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: DeviceUseStatement
import * as fhir from '../fhir.js';
// @ts-ignore
import { DeviceStatementStatusCodes } from '../fhirValueSets/DeviceStatementStatusCodes.js';
/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 */
export class DeviceUseStatement extends fhir.DomainResource {
    /**
     * Default constructor for DeviceUseStatement - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'DeviceUseStatement';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['basedOn']) {
            this.basedOn = source.basedOn.map((x) => new fhir.Reference(x));
        }
        else {
            this.basedOn = [];
        }
        if (source['status']) {
            this.status = new fhir.FhirCode({ value: source.status });
        }
        else {
            this.status = null;
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        else {
            this.subject = null;
        }
        if (source['derivedFrom']) {
            this.derivedFrom = source.derivedFrom.map((x) => new fhir.Reference(x));
        }
        else {
            this.derivedFrom = [];
        }
        if (source['timing']) {
            this.timing = source.timing;
        }
        else if (source['timingTiming']) {
            this.timing = new fhir.Timing(source.timingTiming);
        }
        else if (source['timingPeriod']) {
            this.timing = new fhir.Period(source.timingPeriod);
        }
        else if (source['timingDateTime']) {
            this.timing = new fhir.FhirDateTime({ value: source.timingDateTime });
        }
        if (source['recordedOn']) {
            this.recordedOn = new fhir.FhirDateTime({ value: source.recordedOn });
        }
        if (source['source']) {
            this.source = new fhir.Reference(source.source);
        }
        if (source['device']) {
            this.device = new fhir.Reference(source.device);
        }
        else {
            this.device = null;
        }
        if (source['reasonCode']) {
            this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.reasonCode = [];
        }
        if (source['reasonReference']) {
            this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x));
        }
        else {
            this.reasonReference = [];
        }
        if (source['bodySite']) {
            this.bodySite = new fhir.CodeableConcept(source.bodySite);
        }
        if (source['note']) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        else {
            this.note = [];
        }
    }
    /**
     * Required-bound Value Set for status (DeviceUseStatement.status)
     */
    static get statusRequiredCodes() {
        return DeviceStatementStatusCodes;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        let issues = super.doModelValidation();
        if (!this['resourceType']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"DeviceUseStatement" fhir: DeviceUseStatement.resourceType:"DeviceUseStatement"' });
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["basedOn"]) {
            this.basedOn.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (!this['status']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status:fhir.FhirCode<DeviceStatementStatusCodeType> fhir: DeviceUseStatement.status:code' });
        }
        if (this['status'] && (!Object.values(DeviceStatementStatusCodes).includes(this.status))) {
            issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status:fhir.FhirCode<DeviceStatementStatusCodeType> fhir: DeviceUseStatement.status:code Required binding to: DeviceStatementStatus' });
        }
        if (this["status"]) {
            issues.push(...this.status.doModelValidation());
        }
        if (!this['subject']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property subject:fhir.Reference fhir: DeviceUseStatement.subject:Reference' });
        }
        if (this["subject"]) {
            issues.push(...this.subject.doModelValidation());
        }
        if (this["derivedFrom"]) {
            this.derivedFrom.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["recordedOn"]) {
            issues.push(...this.recordedOn.doModelValidation());
        }
        if (this["source"]) {
            issues.push(...this.source.doModelValidation());
        }
        if (!this['device']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property device:fhir.Reference fhir: DeviceUseStatement.device:Reference' });
        }
        if (this["device"]) {
            issues.push(...this.device.doModelValidation());
        }
        if (this["reasonCode"]) {
            this.reasonCode.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["reasonReference"]) {
            this.reasonReference.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        if (this["bodySite"]) {
            issues.push(...this.bodySite.doModelValidation());
        }
        if (this["note"]) {
            this.note.forEach((x) => { issues.push(...x.doModelValidation()); });
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
DeviceUseStatement._fts_dataType = 'DeviceUseStatement';
/**
 * Internal flag to properly serialize choice-type element DeviceUseStatement.timing[x]
 */
DeviceUseStatement._fts_timingIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlVXNlU3RhdGVtZW50LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9EZXZpY2VVc2VTdGF0ZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sZ0RBQWdELENBQUM7QUFnRjVIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGtCQUFtQixTQUFRLElBQUksQ0FBQyxjQUFjO0lBa0V6RDs7T0FFRztJQUNILFlBQVksU0FBeUMsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDL0YsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFvQixDQUFDO1FBQ3pDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUNoRztZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDOUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3RGO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FBRTtRQUMzQixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFnQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQzVHO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUFFO2FBQ3hFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM3QixJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDbEc7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQy9CLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQUU7YUFDakQsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7U0FBRTthQUNuRixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUFFO2FBQ25GLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsY0FBYyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQzNHLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNsRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUFFO1FBQzFFLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQUU7YUFDckU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzVCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUNyRztZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDOUIsSUFBSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDOUc7WUFBRSxJ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QUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQUU7UUFDaEgsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM1RSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQUU7UUFDMUYsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUF4SUQ7O0dBRUc7QUFDNkIsZ0NBQWEsR0FBVSxvQkFBb0IsQ0FBQztBQThCNUU7O0dBRUc7QUFDdUIsc0NBQW1CLEdBQVEsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBEZXZpY2VVc2VTdGF0ZW1lbnRcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IERldmljZVN0YXRlbWVudFN0YXR1c0NvZGluZ3MsIERldmljZVN0YXRlbWVudFN0YXR1c0NvZGluZ1R5cGUsfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0RldmljZVN0YXRlbWVudFN0YXR1c0NvZGluZ3MuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IERldmljZVN0YXRlbWVudFN0YXR1c0NvZGVzLCAgRGV2aWNlU3RhdGVtZW50U3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0RldmljZVN0YXRlbWVudFN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBCb2R5U2l0ZUNvZGluZ3MsIEJvZHlTaXRlQ29kaW5nVHlwZSx9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQm9keVNpdGVDb2RpbmdzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBCb2R5U2l0ZUNvZGVzLCAgQm9keVNpdGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQm9keVNpdGVDb2Rlcy5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBEZXZpY2VVc2VTdGF0ZW1lbnQgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlVXNlU3RhdGVtZW50QXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiRGV2aWNlVXNlU3RhdGVtZW50XCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFuIGV4dGVybmFsIGlkZW50aWZpZXIgZm9yIHRoaXMgc3RhdGVtZW50IHN1Y2ggYXMgYW4gSVJJLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgcGxhbiwgcHJvcG9zYWwgb3Igb3JkZXIgdGhhdCBpcyBmdWxmaWxsZWQgaW4gd2hvbGUgb3IgaW4gcGFydCBieSB0aGlzIERldmljZVVzZVN0YXRlbWVudC5cclxuICAgKi9cclxuICBiYXNlZE9uPzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERldmljZVVzZVN0YXRtZW50IGlzIGEgc3RhdGVtZW50IGF0IGEgcG9pbnQgaW4gdGltZS4gIFRoZSBzdGF0dXMgaXMgb25seSByZXByZXNlbnRhdGl2ZSBhdCB0aGUgcG9pbnQgd2hlbiBpdCB3YXMgYXNzZXJ0ZWQuICBUaGUgdmFsdWUgc2V0IGZvciBjb250YWlucyBjb2RlcyB0aGF0IGFzc2VydCB0aGUgc3RhdHVzIG9mIHRoZSB1c2UgIGJ5IHRoZSBwYXRpZW50IChmb3IgZXhhbXBsZSwgc3RvcHBlZCBvciBvbiBob2xkKSBhcyB3ZWxsIGFzIGNvZGVzIHRoYXQgYXNzZXJ0IHRoZSBzdGF0dXMgb2YgdGhlIHJlc291cmNlIGl0c2VsZiAoZm9yIGV4YW1wbGUsIGVudGVyZWQgaW4gZXJyb3IpLlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSB0aGUgc3RhdHVzIGNvbnRhaW5zIHRoZSBjb2RlcyB0aGF0IG1hcmsgdGhlIHN0YXRlbWVudCBhcyBub3QgY3VycmVudGx5IHZhbGlkLlxyXG4gICAqL1xyXG4gIHN0YXR1czogZmhpci5GaGlyQ29kZTxEZXZpY2VTdGF0ZW1lbnRTdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcGF0aWVudCB3aG8gdXNlZCB0aGUgZGV2aWNlLlxyXG4gICAqL1xyXG4gIHN1YmplY3Q6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtb3N0IGNvbW1vbiB1c2UgY2FzZXMgZm9yIGRlcml2aW5nIGEgRGV2aWNlVXNlU3RhdGVtZW50IGNvbWVzIGZyb20gY3JlYXRpbmcgaXQgZnJvbSBhIHJlcXVlc3Qgb3IgZnJvbSBhbiBvYnNlcnZhdGlvbiBvciBhIGNsYWltLiBpdCBzaG91bGQgYmUgbm90ZWQgdGhhdCB0aGUgYW1vdW50IG9mIGluZm9ybWF0aW9uIHRoYXQgaXMgYXZhaWxhYmxlIHZhcmllcyBmcm9tIHRoZSB0eXBlIHJlc291cmNlIHRoYXQgeW91IGRlcml2ZSB0aGUgRGV2aWNlVXNlU3RhdGVtZW50IGZyb20uXHJcbiAgICovXHJcbiAgZGVyaXZlZEZyb20/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSG93IG9mdGVuIHRoZSBkZXZpY2Ugd2FzIHVzZWQuXHJcbiAgICovXHJcbiAgdGltaW5nPzogZmhpci5UaW1pbmd8Zmhpci5QZXJpb2R8Zmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEhvdyBvZnRlbiB0aGUgZGV2aWNlIHdhcyB1c2VkLlxyXG4gICAqL1xyXG4gIHRpbWluZ1RpbWluZz86IGZoaXIuVGltaW5nQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSG93IG9mdGVuIHRoZSBkZXZpY2Ugd2FzIHVzZWQuXHJcbiAgICovXHJcbiAgdGltaW5nUGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBIb3cgb2Z0ZW4gdGhlIGRldmljZSB3YXMgdXNlZC5cclxuICAgKi9cclxuICB0aW1pbmdEYXRlVGltZT86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWUgYXQgd2hpY2ggdGhlIHN0YXRlbWVudCB3YXMgbWFkZS9yZWNvcmRlZC5cclxuICAgKi9cclxuICByZWNvcmRlZE9uPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaG8gcmVwb3J0ZWQgdGhlIGRldmljZSB3YXMgYmVpbmcgdXNlZCBieSB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBzb3VyY2U/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkZXRhaWxzIG9mIHRoZSBkZXZpY2UgdXNlZC5cclxuICAgKi9cclxuICBkZXZpY2U6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFJlYXNvbiBvciBqdXN0aWZpY2F0aW9uIGZvciB0aGUgdXNlIG9mIHRoZSBkZXZpY2UuXHJcbiAgICovXHJcbiAgcmVhc29uQ29kZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgYW5vdGhlciByZXNvdXJjZSB3aG9zZSBleGlzdGVuY2UganVzdGlmaWVzIHRoaXMgRGV2aWNlVXNlU3RhdGVtZW50LlxyXG4gICAqL1xyXG4gIHJlYXNvblJlZmVyZW5jZT86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIGFub3RvbWljIGxvY2F0aW9uIG9uIHRoZSBzdWJqZWN0J3MgYm9keSB3aGVyZSB0aGUgZGV2aWNlIHdhcyB1c2VkICggaS5lLiB0aGUgdGFyZ2V0KS5cclxuICAgKi9cclxuICBib2R5U2l0ZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGV0YWlscyBhYm91dCB0aGUgZGV2aWNlIHN0YXRlbWVudCB0aGF0IHdlcmUgbm90IHJlcHJlc2VudGVkIGF0IGFsbCBvciBzdWZmaWNpZW50bHkgaW4gb25lIG9mIHRoZSBhdHRyaWJ1dGVzIHByb3ZpZGVkIGluIGEgY2xhc3MuIFRoZXNlIG1heSBpbmNsdWRlIGZvciBleGFtcGxlIGEgY29tbWVudCwgYW4gaW5zdHJ1Y3Rpb24sIG9yIGEgbm90ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHN0YXRlbWVudC5cclxuICAgKi9cclxuICBub3RlPzogZmhpci5Bbm5vdGF0aW9uQXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgcmVjb3JkIG9mIGEgZGV2aWNlIGJlaW5nIHVzZWQgYnkgYSBwYXRpZW50IHdoZXJlIHRoZSByZWNvcmQgaXMgdGhlIHJlc3VsdCBvZiBhIHJlcG9ydCBmcm9tIHRoZSBwYXRpZW50IG9yIGFub3RoZXIgY2xpbmljaWFuLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERldmljZVVzZVN0YXRlbWVudCBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRGV2aWNlVXNlU3RhdGVtZW50JztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIkRldmljZVVzZVN0YXRlbWVudFwiO1xyXG4gIC8qKlxyXG4gICAqIEFuIGV4dGVybmFsIGlkZW50aWZpZXIgZm9yIHRoaXMgc3RhdGVtZW50IHN1Y2ggYXMgYW4gSVJJLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBBIHBsYW4sIHByb3Bvc2FsIG9yIG9yZGVyIHRoYXQgaXMgZnVsZmlsbGVkIGluIHdob2xlIG9yIGluIHBhcnQgYnkgdGhpcyBEZXZpY2VVc2VTdGF0ZW1lbnQuXHJcbiAgICovXHJcbiAgcHVibGljIGJhc2VkT246IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogRGV2aWNlVXNlU3RhdG1lbnQgaXMgYSBzdGF0ZW1lbnQgYXQgYSBwb2ludCBpbiB0aW1lLiAgVGhlIHN0YXR1cyBpcyBvbmx5IHJlcHJlc2VudGF0aXZlIGF0IHRoZSBwb2ludCB3aGVuIGl0IHdhcyBhc3NlcnRlZC4gIFRoZSB2YWx1ZSBzZXQgZm9yIGNvbnRhaW5zIGNvZGVzIHRoYXQgYXNzZXJ0IHRoZSBzdGF0dXMgb2YgdGhlIHVzZSAgYnkgdGhlIHBhdGllbnQgKGZvciBleGFtcGxlLCBzdG9wcGVkIG9yIG9uIGhvbGQpIGFzIHdlbGwgYXMgY29kZXMgdGhhdCBhc3NlcnQgdGhlIHN0YXR1cyBvZiB0aGUgcmVzb3VyY2UgaXRzZWxmIChmb3IgZXhhbXBsZSwgZW50ZXJlZCBpbiBlcnJvcikuXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgdGhlIGNvZGVzIHRoYXQgbWFyayB0aGUgc3RhdGVtZW50IGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1czogZmhpci5GaGlyQ29kZTxEZXZpY2VTdGF0ZW1lbnRTdGF0dXNDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgcGF0aWVudCB3aG8gdXNlZCB0aGUgZGV2aWNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdWJqZWN0OiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtb3N0IGNvbW1vbiB1c2UgY2FzZXMgZm9yIGRlcml2aW5nIGEgRGV2aWNlVXNlU3RhdGVtZW50IGNvbWVzIGZyb20gY3JlYXRpbmcgaXQgZnJvbSBhIHJlcXVlc3Qgb3IgZnJvbSBhbiBvYnNlcnZhdGlvbiBvciBhIGNsYWltLiBpdCBzaG91bGQgYmUgbm90ZWQgdGhhdCB0aGUgYW1vdW50IG9mIGluZm9ybWF0aW9uIHRoYXQgaXMgYXZhaWxhYmxlIHZhcmllcyBmcm9tIHRoZSB0eXBlIHJlc291cmNlIHRoYXQgeW91IGRlcml2ZSB0aGUgRGV2aWNlVXNlU3RhdGVtZW50IGZyb20uXHJcbiAgICovXHJcbiAgcHVibGljIGRlcml2ZWRGcm9tOiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIEhvdyBvZnRlbiB0aGUgZGV2aWNlIHdhcyB1c2VkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0aW1pbmc/OiAoZmhpci5UaW1pbmd8Zmhpci5QZXJpb2R8Zmhpci5GaGlyRGF0ZVRpbWUpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IERldmljZVVzZVN0YXRlbWVudC50aW1pbmdbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfdGltaW5nSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWUgYXQgd2hpY2ggdGhlIHN0YXRlbWVudCB3YXMgbWFkZS9yZWNvcmRlZC5cclxuICAgKi9cclxuICBwdWJsaWMgcmVjb3JkZWRPbj86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaG8gcmVwb3J0ZWQgdGhlIGRldmljZSB3YXMgYmVpbmcgdXNlZCBieSB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgc291cmNlPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkZXRhaWxzIG9mIHRoZSBkZXZpY2UgdXNlZC5cclxuICAgKi9cclxuICBwdWJsaWMgZGV2aWNlOiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFJlYXNvbiBvciBqdXN0aWZpY2F0aW9uIGZvciB0aGUgdXNlIG9mIHRoZSBkZXZpY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHJlYXNvbkNvZGU6IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGFub3RoZXIgcmVzb3VyY2Ugd2hvc2UgZXhpc3RlbmNlIGp1c3RpZmllcyB0aGlzIERldmljZVVzZVN0YXRlbWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgcmVhc29uUmVmZXJlbmNlOiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGUgYW5vdG9taWMgbG9jYXRpb24gb24gdGhlIHN1YmplY3QncyBib2R5IHdoZXJlIHRoZSBkZXZpY2Ugd2FzIHVzZWQgKCBpLmUuIHRoZSB0YXJnZXQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBib2R5U2l0ZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZXRhaWxzIGFib3V0IHRoZSBkZXZpY2Ugc3RhdGVtZW50IHRoYXQgd2VyZSBub3QgcmVwcmVzZW50ZWQgYXQgYWxsIG9yIHN1ZmZpY2llbnRseSBpbiBvbmUgb2YgdGhlIGF0dHJpYnV0ZXMgcHJvdmlkZWQgaW4gYSBjbGFzcy4gVGhlc2UgbWF5IGluY2x1ZGUgZm9yIGV4YW1wbGUgYSBjb21tZW50LCBhbiBpbnN0cnVjdGlvbiwgb3IgYSBub3RlIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3RhdGVtZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBub3RlOiBmaGlyLkFubm90YXRpb25bXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBEZXZpY2VVc2VTdGF0ZW1lbnQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxEZXZpY2VVc2VTdGF0ZW1lbnRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnRGV2aWNlVXNlU3RhdGVtZW50JztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2Jhc2VkT24nXSkgeyB0aGlzLmJhc2VkT24gPSBzb3VyY2UuYmFzZWRPbi5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmJhc2VkT24gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxEZXZpY2VTdGF0ZW1lbnRTdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdHVzfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N1YmplY3QnXSkgeyB0aGlzLnN1YmplY3QgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnN1YmplY3QpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdWJqZWN0ID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGVyaXZlZEZyb20nXSkgeyB0aGlzLmRlcml2ZWRGcm9tID0gc291cmNlLmRlcml2ZWRGcm9tLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZGVyaXZlZEZyb20gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsndGltaW5nJ10pIHsgdGhpcy50aW1pbmcgPSBzb3VyY2UudGltaW5nOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3RpbWluZ1RpbWluZyddKSB7IHRoaXMudGltaW5nID0gbmV3IGZoaXIuVGltaW5nKHNvdXJjZS50aW1pbmdUaW1pbmcpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3RpbWluZ1BlcmlvZCddKSB7IHRoaXMudGltaW5nID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS50aW1pbmdQZXJpb2QpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3RpbWluZ0RhdGVUaW1lJ10pIHsgdGhpcy50aW1pbmcgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UudGltaW5nRGF0ZVRpbWV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVjb3JkZWRPbiddKSB7IHRoaXMucmVjb3JkZWRPbiA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5yZWNvcmRlZE9ufSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3NvdXJjZSddKSB7IHRoaXMuc291cmNlID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5zb3VyY2UpOyB9XHJcbiAgICBpZiAoc291cmNlWydkZXZpY2UnXSkgeyB0aGlzLmRldmljZSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuZGV2aWNlKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZGV2aWNlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVhc29uQ29kZSddKSB7IHRoaXMucmVhc29uQ29kZSA9IHNvdXJjZS5yZWFzb25Db2RlLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucmVhc29uQ29kZSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydyZWFzb25SZWZlcmVuY2UnXSkgeyB0aGlzLnJlYXNvblJlZmVyZW5jZSA9IHNvdXJjZS5yZWFzb25SZWZlcmVuY2UubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5yZWFzb25SZWZlcmVuY2UgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYm9keVNpdGUnXSkgeyB0aGlzLmJvZHlTaXRlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5ib2R5U2l0ZSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ25vdGUnXSkgeyB0aGlzLm5vdGUgPSBzb3VyY2Uubm90ZS5tYXAoKHgpID0+IG5ldyBmaGlyLkFubm90YXRpb24oeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5ub3RlID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmVxdWlyZWQtYm91bmQgVmFsdWUgU2V0IGZvciBzdGF0dXMgKERldmljZVVzZVN0YXRlbWVudC5zdGF0dXMpXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgc3RhdHVzUmVxdWlyZWRDb2RlcygpIHtcclxuICAgIHJldHVybiBEZXZpY2VTdGF0ZW1lbnRTdGF0dXNDb2RlcztcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKCk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oKTtcclxuICAgIGlmICghdGhpc1sncmVzb3VyY2VUeXBlJ10pIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ3JlcXVpcmVkJywgZGlhZ25vc3RpY3M6ICdNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5IHJlc291cmNlVHlwZTpcIkRldmljZVVzZVN0YXRlbWVudFwiIGZoaXI6IERldmljZVVzZVN0YXRlbWVudC5yZXNvdXJjZVR5cGU6XCJEZXZpY2VVc2VTdGF0ZW1lbnRcIicgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1tcImlkZW50aWZpZXJcIl0pIHsgdGhpcy5pZGVudGlmaWVyLmZvckVhY2goKHgpID0+IHsgaXNzdWVzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbigpKTsgfSkgfVxyXG4gICAgaWYgKHRoaXNbXCJiYXNlZE9uXCJdKSB7IHRoaXMuYmFzZWRPbi5mb3JFYWNoKCh4KSA9PiB7IGlzc3Vlcy5wdXNoKC4uLnguZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH0pIH1cclxuICAgIGlmICghdGhpc1snc3RhdHVzJ10pIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ3JlcXVpcmVkJywgZGlhZ25vc3RpY3M6ICdNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5IHN0YXR1czpmaGlyLkZoaXJDb2RlPERldmljZVN0YXRlbWVudFN0YXR1c0NvZGVUeXBlPiBmaGlyOiBEZXZpY2VVc2VTdGF0ZW1lbnQuc3RhdHVzOmNvZGUnIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXNbJ3N0YXR1cyddICYmICghT2JqZWN0LnZhbHVlcyhEZXZpY2VTdGF0ZW1lbnRTdGF0dXNDb2RlcykuaW5jbHVkZXModGhpcy5zdGF0dXMgYXMgYW55KSkpIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ2NvZGUtaW52YWxpZCcsIGRpYWdub3N0aWNzOiAnSW52YWxpZCBjb2RlIHByb3BlcnR5IHN0YXR1czpmaGlyLkZoaXJDb2RlPERldmljZVN0YXRlbWVudFN0YXR1c0NvZGVUeXBlPiBmaGlyOiBEZXZpY2VVc2VTdGF0ZW1lbnQuc3RhdHVzOmNvZGUgUmVxdWlyZWQgYmluZGluZyB0bzogRGV2aWNlU3RhdGVtZW50U3RhdHVzJyB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzW1wic3RhdHVzXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuc3RhdHVzLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICBpZiAoIXRoaXNbJ3N1YmplY3QnXSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAncmVxdWlyZWQnLCBkaWFnbm9zdGljczogJ01pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgc3ViamVjdDpmaGlyLlJlZmVyZW5jZSBmaGlyOiBEZXZpY2VVc2VTdGF0ZW1lbnQuc3ViamVjdDpSZWZlcmVuY2UnIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXNbXCJzdWJqZWN0XCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuc3ViamVjdC5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJkZXJpdmVkRnJvbVwiXSkgeyB0aGlzLmRlcml2ZWRGcm9tLmZvckVhY2goKHgpID0+IHsgaXNzdWVzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbigpKTsgfSkgfVxyXG4gICAgaWYgKHRoaXNbXCJyZWNvcmRlZE9uXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMucmVjb3JkZWRPbi5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJzb3VyY2VcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5zb3VyY2UuZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH1cclxuICAgIGlmICghdGhpc1snZGV2aWNlJ10pIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ3JlcXVpcmVkJywgZGlhZ25vc3RpY3M6ICdNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5IGRldmljZTpmaGlyLlJlZmVyZW5jZSBmaGlyOiBEZXZpY2VVc2VTdGF0ZW1lbnQuZGV2aWNlOlJlZmVyZW5jZScgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1tcImRldmljZVwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLmRldmljZS5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJyZWFzb25Db2RlXCJdKSB7IHRoaXMucmVhc29uQ29kZS5mb3JFYWNoKCh4KSA9PiB7IGlzc3Vlcy5wdXNoKC4uLnguZG9Nb2RlbFZhbGlkYXRpb24oKSk7IH0pIH1cclxuICAgIGlmICh0aGlzW1wicmVhc29uUmVmZXJlbmNlXCJdKSB7IHRoaXMucmVhc29uUmVmZXJlbmNlLmZvckVhY2goKHgpID0+IHsgaXNzdWVzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbigpKTsgfSkgfVxyXG4gICAgaWYgKHRoaXNbXCJib2R5U2l0ZVwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLmJvZHlTaXRlLmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICBpZiAodGhpc1tcIm5vdGVcIl0pIHsgdGhpcy5ub3RlLmZvckVhY2goKHgpID0+IHsgaXNzdWVzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbigpKTsgfSkgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19