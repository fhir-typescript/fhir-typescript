// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: BodyStructure
import * as fhir from '../fhir.js';
/**
 * Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 */
export class BodyStructure extends fhir.DomainResource {
    /**
     * Default constructor for BodyStructure - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'BodyStructure';
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
        if (source['morphology']) {
            this.morphology = new fhir.CodeableConcept(source.morphology);
        }
        if (source['location']) {
            this.location = new fhir.CodeableConcept(source.location);
        }
        if (source['locationQualifier']) {
            this.locationQualifier = source.locationQualifier.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.locationQualifier = [];
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['_description']) {
            if (this.description) {
                this.description.addExtendedProperties(source._description);
            }
            else {
                this.description = new fhir.FhirString(source._description);
            }
        }
        if (source['image']) {
            this.image = source.image.map((x) => new fhir.Attachment(x));
        }
        else {
            this.image = [];
        }
        if (source['patient']) {
            this.patient = new fhir.Reference(source.patient);
        }
        else {
            this.patient = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'BodyStructure';
        }
        iss.push(...this.vRPS('resourceType', exp));
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vOS('active', exp));
        iss.push(...this.vOS('morphology', exp));
        iss.push(...this.vOS('location', exp));
        iss.push(...this.vOA('locationQualifier', exp));
        iss.push(...this.vOS('description', exp));
        iss.push(...this.vOA('image', exp));
        iss.push(...this.vRS('patient', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
BodyStructure._fts_dataType = 'BodyStructure';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9keVN0cnVjdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQm9keVN0cnVjdHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFnRW5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGFBQWMsU0FBUSxJQUFJLENBQUMsY0FBYztJQXlDcEQ7O09BRUc7SUFDSCxZQUFZLFNBQW9DLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQzFGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUM7UUFDcEMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2hHO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDckYsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLE9BQVEsQ0FBQyxDQUFDO2FBQUU7aUJBQ25FO2dCQUFFLElBQUksQ0FBQyxNQUFNLEdB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QUFVLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUFuRkQ7O0dBRUc7QUFDNkIsMkJBQWEsR0FBVSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBCb2R5U3RydWN0dXJlXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBCb2R5c3RydWN0dXJlQ29kZXMsICBCb2R5c3RydWN0dXJlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0JvZHlzdHJ1Y3R1cmVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQm9keXN0cnVjdHVyZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQm9keXN0cnVjdHVyZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQm9keVNpdGVDb2RlcywgIEJvZHlTaXRlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0JvZHlTaXRlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEJvZHlTaXRlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Cb2R5U2l0ZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQm9keXN0cnVjdHVyZVJlbGF0aXZlTG9jYXRpb25Db2RlcywgIEJvZHlzdHJ1Y3R1cmVSZWxhdGl2ZUxvY2F0aW9uQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0JvZHlzdHJ1Y3R1cmVSZWxhdGl2ZUxvY2F0aW9uQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEJvZHlzdHJ1Y3R1cmVSZWxhdGl2ZUxvY2F0aW9uVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Cb2R5c3RydWN0dXJlUmVsYXRpdmVMb2NhdGlvblZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBCb2R5U3RydWN0dXJlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEJvZHlTdHJ1Y3R1cmVBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJCb2R5U3RydWN0dXJlXCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXIgZm9yIHRoaXMgaW5zdGFuY2Ugb2YgdGhlIGFuYXRvbWljYWwgc3RydWN0dXJlLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSBpdCBtYXkgYmUgdXNlZCB0byBtYXJrIHRoYXQgdGhlIHJlc291cmNlIHdhcyBjcmVhdGVkIGluIGVycm9yLlxyXG4gICAqL1xyXG4gIGFjdGl2ZT86IGZoaXIuRmhpckJvb2xlYW58Ym9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEJvZHlTdHJ1Y3R1cmUuYWN0aXZlXHJcbiAgICovXHJcbiAgX2FjdGl2ZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1pbmltdW0gY2FyZGluYWxpdHkgb2YgMCBzdXBwb3J0cyB0aGUgdXNlIGNhc2Ugb2Ygc3BlY2lmeWluZyBhIGxvY2F0aW9uIHdpdGhvdXQgZGVmaW5pbmcgYSBtb3JwaG9sb2d5LlxyXG4gICAqL1xyXG4gIG1vcnBob2xvZ3k/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhbmF0b21pY2FsIGxvY2F0aW9uIG9yIHJlZ2lvbiBvZiB0aGUgc3BlY2ltZW4sIGxlc2lvbiwgb3IgYm9keSBzdHJ1Y3R1cmUuXHJcbiAgICovXHJcbiAgbG9jYXRpb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFF1YWxpZmllciB0byByZWZpbmUgdGhlIGFuYXRvbWljYWwgbG9jYXRpb24uICBUaGVzZSBpbmNsdWRlIHF1YWxpZmllcnMgZm9yIGxhdGVyYWxpdHksIHJlbGF0aXZlIGxvY2F0aW9uLCBkaXJlY3Rpb25hbGl0eSwgbnVtYmVyLCBhbmQgcGxhbmUuXHJcbiAgICovXHJcbiAgbG9jYXRpb25RdWFsaWZpZXI/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBkZXNjcmlwdGlvbiBjb3VsZCBpbmNsdWRlIGFueSB2aXN1YWwgbWFya2luZ3MgdXNlZCB0byBvcmllbnRhdGUgdGhlIHZpZXdlciBlLmcuIGV4dGVybmFsIHJlZmVyZW5jZSBwb2ludHMsIHNwZWNpYWwgc3V0dXJlcywgaW5rIG1hcmtpbmdzLlxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEJvZHlTdHJ1Y3R1cmUuZGVzY3JpcHRpb25cclxuICAgKi9cclxuICBfZGVzY3JpcHRpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEltYWdlIG9yIGltYWdlcyB1c2VkIHRvIGlkZW50aWZ5IGEgbG9jYXRpb24uXHJcbiAgICovXHJcbiAgaW1hZ2U/OiBmaGlyLkF0dGFjaG1lbnRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJzb24gdG8gd2hpY2ggdGhlIGJvZHkgc2l0ZSBiZWxvbmdzLlxyXG4gICAqL1xyXG4gIHBhdGllbnQ6IGZoaXIuUmVmZXJlbmNlQXJnc3xudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogUmVjb3JkIGRldGFpbHMgYWJvdXQgYW4gYW5hdG9taWNhbCBzdHJ1Y3R1cmUuICBUaGlzIHJlc291cmNlIG1heSBiZSB1c2VkIHdoZW4gYSBjb2RlZCBjb25jZXB0IGRvZXMgbm90IHByb3ZpZGUgdGhlIG5lY2Vzc2FyeSBkZXRhaWwgbmVlZGVkIGZvciB0aGUgdXNlIGNhc2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQm9keVN0cnVjdHVyZSBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQm9keVN0cnVjdHVyZSc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJCb2R5U3RydWN0dXJlXCI7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllciBmb3IgdGhpcyBpbnN0YW5jZSBvZiB0aGUgYW5hdG9taWNhbCBzdHJ1Y3R1cmUuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI6IGZoaXIuSWRlbnRpZmllcltdO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSBpdCBtYXkgYmUgdXNlZCB0byBtYXJrIHRoYXQgdGhlIHJlc291cmNlIHdhcyBjcmVhdGVkIGluIGVycm9yLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhY3RpdmU/OiBmaGlyLkZoaXJCb29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbWluaW11bSBjYXJkaW5hbGl0eSBvZiAwIHN1cHBvcnRzIHRoZSB1c2UgY2FzZSBvZiBzcGVjaWZ5aW5nIGEgbG9jYXRpb24gd2l0aG91dCBkZWZpbmluZyBhIG1vcnBob2xvZ3kuXHJcbiAgICovXHJcbiAgcHVibGljIG1vcnBob2xvZ3k/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFuYXRvbWljYWwgbG9jYXRpb24gb3IgcmVnaW9uIG9mIHRoZSBzcGVjaW1lbiwgbGVzaW9uLCBvciBib2R5IHN0cnVjdHVyZS5cclxuICAgKi9cclxuICBwdWJsaWMgbG9jYXRpb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUXVhbGlmaWVyIHRvIHJlZmluZSB0aGUgYW5hdG9taWNhbCBsb2NhdGlvbi4gIFRoZXNlIGluY2x1ZGUgcXVhbGlmaWVycyBmb3IgbGF0ZXJhbGl0eSwgcmVsYXRpdmUgbG9jYXRpb24sIGRpcmVjdGlvbmFsaXR5LCBudW1iZXIsIGFuZCBwbGFuZS5cclxuICAgKi9cclxuICBwdWJsaWMgbG9jYXRpb25RdWFsaWZpZXI6IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogVGhpcyBkZXNjcmlwdGlvbiBjb3VsZCBpbmNsdWRlIGFueSB2aXN1YWwgbWFya2luZ3MgdXNlZCB0byBvcmllbnRhdGUgdGhlIHZpZXdlciBlLmcuIGV4dGVybmFsIHJlZmVyZW5jZSBwb2ludHMsIHNwZWNpYWwgc3V0dXJlcywgaW5rIG1hcmtpbmdzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkZXNjcmlwdGlvbj86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW1hZ2Ugb3IgaW1hZ2VzIHVzZWQgdG8gaWRlbnRpZnkgYSBsb2NhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgaW1hZ2U6IGZoaXIuQXR0YWNobWVudFtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJzb24gdG8gd2hpY2ggdGhlIGJvZHkgc2l0ZSBiZWxvbmdzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwYXRpZW50OiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEJvZHlTdHJ1Y3R1cmUgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxCb2R5U3RydWN0dXJlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ0JvZHlTdHJ1Y3R1cmUnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYWN0aXZlJ10pIHsgdGhpcy5hY3RpdmUgPSBuZXcgZmhpci5GaGlyQm9vbGVhbih7dmFsdWU6IHNvdXJjZS5hY3RpdmV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2FjdGl2ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkgeyB0aGlzLmFjdGl2ZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9hY3RpdmUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5hY3RpdmUgPSBuZXcgZmhpci5GaGlyQm9vbGVhbihzb3VyY2UuX2FjdGl2ZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckJvb2xlYW5BcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ21vcnBob2xvZ3knXSkgeyB0aGlzLm1vcnBob2xvZ3kgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLm1vcnBob2xvZ3kpOyB9XHJcbiAgICBpZiAoc291cmNlWydsb2NhdGlvbiddKSB7IHRoaXMubG9jYXRpb24gPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmxvY2F0aW9uKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnbG9jYXRpb25RdWFsaWZpZXInXSkgeyB0aGlzLmxvY2F0aW9uUXVhbGlmaWVyID0gc291cmNlLmxvY2F0aW9uUXVhbGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMubG9jYXRpb25RdWFsaWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGVzY3JpcHRpb24nXSkgeyB0aGlzLmRlc2NyaXB0aW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5kZXNjcmlwdGlvbn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGVzY3JpcHRpb24nXSkge1xyXG4gICAgICBpZiAodGhpcy5kZXNjcmlwdGlvbikgeyB0aGlzLmRlc2NyaXB0aW9uLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2Rlc2NyaXB0aW9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZGVzY3JpcHRpb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fZGVzY3JpcHRpb24gYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2ltYWdlJ10pIHsgdGhpcy5pbWFnZSA9IHNvdXJjZS5pbWFnZS5tYXAoKHgpID0+IG5ldyBmaGlyLkF0dGFjaG1lbnQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pbWFnZSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydwYXRpZW50J10pIHsgdGhpcy5wYXRpZW50ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5wYXRpZW50KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucGF0aWVudCA9IG51bGw7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdCb2R5U3RydWN0dXJlJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUFMoJ3Jlc291cmNlVHlwZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnYWN0aXZlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdtb3JwaG9sb2d5JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdsb2NhdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnbG9jYXRpb25RdWFsaWZpZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2Rlc2NyaXB0aW9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdpbWFnZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygncGF0aWVudCcsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=