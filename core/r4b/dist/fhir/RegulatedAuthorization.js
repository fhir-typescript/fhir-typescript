// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: RegulatedAuthorization
import * as fhir from '../fhir.js';
/**
 * The case or regulatory procedure for granting or amending a regulated authorization. An authorization is granted in response to submissions/applications by those seeking authorization. A case is the administrative process that deals with the application(s) that relate to this and assesses them. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page).
 */
export class RegulatedAuthorizationCase extends fhir.BackboneElement {
    /**
     * Default constructor for RegulatedAuthorizationCase - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier);
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['status']) {
            this.status = new fhir.CodeableConcept(source.status);
        }
        if (source['date']) {
            this.date = source.date;
        }
        else if (source['datePeriod']) {
            this.date = new fhir.Period(source.datePeriod);
        }
        else if (source['dateDateTime']) {
            this.date = new fhir.FhirDateTime({ value: source.dateDateTime });
        }
        if (source['application']) {
            this.application = source.application.map((x) => new fhir.RegulatedAuthorizationCase(x));
        }
        else {
            this.application = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'RegulatedAuthorization.case';
        }
        iss.push(...this.vOS('identifier', exp));
        iss.push(...this.vOS('type', exp));
        iss.push(...this.vOS('status', exp));
        iss.push(...this.vOS('date', exp));
        iss.push(...this.vOA('application', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
RegulatedAuthorizationCase._fts_dataType = 'RegulatedAuthorizationCase';
/**
 * Internal flag to properly serialize choice-type element RegulatedAuthorization.case.date[x]
 */
RegulatedAuthorizationCase._fts_dateIsChoice = true;
/**
 * Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.
 */
export class RegulatedAuthorization extends fhir.DomainResource {
    /**
     * Default constructor for RegulatedAuthorization - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'RegulatedAuthorization';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['subject']) {
            this.subject = source.subject.map((x) => new fhir.Reference(x));
        }
        else {
            this.subject = [];
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['description']) {
            this.description = new fhir.FhirMarkdown({ value: source.description });
        }
        if (source['_description']) {
            if (this.description) {
                this.description.addExtendedProperties(source._description);
            }
            else {
                this.description = new fhir.FhirMarkdown(source._description);
            }
        }
        if (source['region']) {
            this.region = source.region.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.region = [];
        }
        if (source['status']) {
            this.status = new fhir.CodeableConcept(source.status);
        }
        if (source['statusDate']) {
            this.statusDate = new fhir.FhirDateTime({ value: source.statusDate });
        }
        if (source['_statusDate']) {
            if (this.statusDate) {
                this.statusDate.addExtendedProperties(source._statusDate);
            }
            else {
                this.statusDate = new fhir.FhirDateTime(source._statusDate);
            }
        }
        if (source['validityPeriod']) {
            this.validityPeriod = new fhir.Period(source.validityPeriod);
        }
        if (source['indication']) {
            this.indication = new fhir.CodeableReference(source.indication);
        }
        if (source['intendedUse']) {
            this.intendedUse = new fhir.CodeableConcept(source.intendedUse);
        }
        if (source['basis']) {
            this.basis = source.basis.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.basis = [];
        }
        if (source['holder']) {
            this.holder = new fhir.Reference(source.holder);
        }
        if (source['regulator']) {
            this.regulator = new fhir.Reference(source.regulator);
        }
        if (source['case']) {
            this.case = new fhir.RegulatedAuthorizationCase(source.case);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'RegulatedAuthorization';
        }
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vOA('subject', exp));
        iss.push(...this.vOS('type', exp));
        iss.push(...this.vOS('description', exp));
        iss.push(...this.vOA('region', exp));
        iss.push(...this.vOS('status', exp));
        iss.push(...this.vOS('statusDate', exp));
        iss.push(...this.vOS('validityPeriod', exp));
        iss.push(...this.vOS('indication', exp));
        iss.push(...this.vOS('intendedUse', exp));
        iss.push(...this.vOA('basis', exp));
        iss.push(...this.vOS('holder', exp));
        iss.push(...this.vOS('regulator', exp));
        iss.push(...this.vOS('case', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
RegulatedAuthorization._fts_dataType = 'RegulatedAuthorization';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVndWxhdGVkQXV0aG9yaXphdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvUmVndWxhdGVkQXV0aG9yaXphdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFFeEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUE0RG5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLDBCQUEyQixTQUFRLElBQUksQ0FBQyxlQUFlO0lBNkJsRTs7T0FFRztJQUNILFlBQVksU0FBaUQsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDdkcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUFFO1FBQ3ZGLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQUU7UUFDMUUsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FBRTtRQUNoRixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztTQUFFO2FBQzNDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFD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LEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQXRIRDs7R0FFRztBQUM2QixvQ0FBYSxHQUFVLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogUmVndWxhdGVkQXV0aG9yaXphdGlvblxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUmVndWxhdGVkQXV0aG9yaXphdGlvbkNhc2VUeXBlQ29kZXMsICBSZWd1bGF0ZWRBdXRob3JpemF0aW9uQ2FzZVR5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVndWxhdGVkQXV0aG9yaXphdGlvbkNhc2VUeXBlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFJlZ3VsYXRlZEF1dGhvcml6YXRpb25DYXNlVHlwZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVndWxhdGVkQXV0aG9yaXphdGlvbkNhc2VUeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBQdWJsaWNhdGlvblN0YXR1c0NvZGVzLCAgUHVibGljYXRpb25TdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUHVibGljYXRpb25TdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUHVibGljYXRpb25TdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1B1YmxpY2F0aW9uU3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBSZWd1bGF0ZWRBdXRob3JpemF0aW9uVHlwZUNvZGVzLCAgUmVndWxhdGVkQXV0aG9yaXphdGlvblR5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVndWxhdGVkQXV0aG9yaXphdGlvblR5cGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUmVndWxhdGVkQXV0aG9yaXphdGlvblR5cGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1JlZ3VsYXRlZEF1dGhvcml6YXRpb25UeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBKdXJpc2RpY3Rpb25Db2RlcywgIEp1cmlzZGljdGlvbkNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9KdXJpc2RpY3Rpb25Db2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgSnVyaXNkaWN0aW9uVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9KdXJpc2RpY3Rpb25Wc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFByb2R1Y3RJbnRlbmRlZFVzZUNvZGVzLCAgUHJvZHVjdEludGVuZGVkVXNlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1Byb2R1Y3RJbnRlbmRlZFVzZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBQcm9kdWN0SW50ZW5kZWRVc2VWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1Byb2R1Y3RJbnRlbmRlZFVzZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUmVndWxhdGVkQXV0aG9yaXphdGlvbkJhc2lzQ29kZXMsICBSZWd1bGF0ZWRBdXRob3JpemF0aW9uQmFzaXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVndWxhdGVkQXV0aG9yaXphdGlvbkJhc2lzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFJlZ3VsYXRlZEF1dGhvcml6YXRpb25CYXNpc1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvUmVndWxhdGVkQXV0aG9yaXphdGlvbkJhc2lzVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFJlZ3VsYXRlZEF1dGhvcml6YXRpb25DYXNlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFJlZ3VsYXRlZEF1dGhvcml6YXRpb25DYXNlQXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllciBieSB3aGljaCB0aGlzIGNhc2UgY2FuIGJlIHJlZmVyZW5jZWQuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkZWZpbmluZyB0eXBlIG9mIGNhc2UuXHJcbiAgICovXHJcbiAgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHN0YXR1cyBhc3NvY2lhdGVkIHdpdGggdGhlIGNhc2UuXHJcbiAgICovXHJcbiAgc3RhdHVzPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBSZWxldmFudCBkYXRlIGZvciB0aGlzIGNhc2UuXHJcbiAgICovXHJcbiAgZGF0ZT86IGZoaXIuUGVyaW9kfGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBSZWxldmFudCBkYXRlIGZvciB0aGlzIGNhc2UuXHJcbiAgICovXHJcbiAgZGF0ZVBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVsZXZhbnQgZGF0ZSBmb3IgdGhpcyBjYXNlLlxyXG4gICAqL1xyXG4gIGRhdGVEYXRlVGltZT86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSByZWd1bGF0b3J5IHN1Ym1pc3Npb24gZnJvbSBhbiBvcmdhbml6YXRpb24gdG8gYSByZWd1bGF0b3IsIGFzIHBhcnQgb2YgYW4gYXNzZXNzaW5nIGNhc2UuIE11bHRpcGxlIGFwcGxpY2F0aW9ucyBtYXkgb2NjdXIgb3ZlciB0aW1lLCB3aXRoIG1vcmUgb3IgZGlmZmVyZW50IGluZm9ybWF0aW9uIHRvIHN1cHBvcnQgb3IgbW9kaWZ5IHRoZSBzdWJtaXNzaW9uIG9yIHRoZSBhdXRob3JpemF0aW9uLiBUaGUgYXBwbGljYXRpb25zIGNhbiBiZSBjb25zaWRlcmVkIGFzIHN0ZXBzIHdpdGhpbiB0aGUgbG9uZ2VyIHJ1bm5pbmcgY2FzZSBvciBwcm9jZWR1cmUgZm9yIHRoaXMgYXV0aG9yaXphdGlvbiBwcm9jZXNzLlxyXG4gICAqL1xyXG4gIGFwcGxpY2F0aW9uPzogZmhpci5SZWd1bGF0ZWRBdXRob3JpemF0aW9uQ2FzZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgY2FzZSBvciByZWd1bGF0b3J5IHByb2NlZHVyZSBmb3IgZ3JhbnRpbmcgb3IgYW1lbmRpbmcgYSByZWd1bGF0ZWQgYXV0aG9yaXphdGlvbi4gQW4gYXV0aG9yaXphdGlvbiBpcyBncmFudGVkIGluIHJlc3BvbnNlIHRvIHN1Ym1pc3Npb25zL2FwcGxpY2F0aW9ucyBieSB0aG9zZSBzZWVraW5nIGF1dGhvcml6YXRpb24uIEEgY2FzZSBpcyB0aGUgYWRtaW5pc3RyYXRpdmUgcHJvY2VzcyB0aGF0IGRlYWxzIHdpdGggdGhlIGFwcGxpY2F0aW9uKHMpIHRoYXQgcmVsYXRlIHRvIHRoaXMgYW5kIGFzc2Vzc2VzIHRoZW0uIE5vdGU6IFRoaXMgYXJlYSBpcyBzdWJqZWN0IHRvIG9uZ29pbmcgcmV2aWV3IGFuZCB0aGUgd29ya2dyb3VwIGlzIHNlZWtpbmcgaW1wbGVtZW50ZXIgZmVlZGJhY2sgb24gaXRzIHVzZSAoc2VlIGxpbmsgYXQgYm90dG9tIG9mIHBhZ2UpLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlZ3VsYXRlZEF1dGhvcml6YXRpb25DYXNlIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUmVndWxhdGVkQXV0aG9yaXphdGlvbkNhc2UnO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXIgYnkgd2hpY2ggdGhpcyBjYXNlIGNhbiBiZSByZWZlcmVuY2VkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGVmaW5pbmcgdHlwZSBvZiBjYXNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0eXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzdGF0dXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjYXNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0dXM/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVsZXZhbnQgZGF0ZSBmb3IgdGhpcyBjYXNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkYXRlPzogKGZoaXIuUGVyaW9kfGZoaXIuRmhpckRhdGVUaW1lKXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgZmxhZyB0byBwcm9wZXJseSBzZXJpYWxpemUgY2hvaWNlLXR5cGUgZWxlbWVudCBSZWd1bGF0ZWRBdXRob3JpemF0aW9uLmNhc2UuZGF0ZVt4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c19kYXRlSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogQSByZWd1bGF0b3J5IHN1Ym1pc3Npb24gZnJvbSBhbiBvcmdhbml6YXRpb24gdG8gYSByZWd1bGF0b3IsIGFzIHBhcnQgb2YgYW4gYXNzZXNzaW5nIGNhc2UuIE11bHRpcGxlIGFwcGxpY2F0aW9ucyBtYXkgb2NjdXIgb3ZlciB0aW1lLCB3aXRoIG1vcmUgb3IgZGlmZmVyZW50IGluZm9ybWF0aW9uIHRvIHN1cHBvcnQgb3IgbW9kaWZ5IHRoZSBzdWJtaXNzaW9uIG9yIHRoZSBhdXRob3JpemF0aW9uLiBUaGUgYXBwbGljYXRpb25zIGNhbiBiZSBjb25zaWRlcmVkIGFzIHN0ZXBzIHdpdGhpbiB0aGUgbG9uZ2VyIHJ1bm5pbmcgY2FzZSBvciBwcm9jZWR1cmUgZm9yIHRoaXMgYXV0aG9yaXphdGlvbiBwcm9jZXNzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhcHBsaWNhdGlvbjogZmhpci5SZWd1bGF0ZWRBdXRob3JpemF0aW9uQ2FzZVtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFJlZ3VsYXRlZEF1dGhvcml6YXRpb25DYXNlIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8UmVndWxhdGVkQXV0aG9yaXphdGlvbkNhc2VBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IG5ldyBmaGlyLklkZW50aWZpZXIoc291cmNlLmlkZW50aWZpZXIpOyB9XHJcbiAgICBpZiAoc291cmNlWyd0eXBlJ10pIHsgdGhpcy50eXBlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS50eXBlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnN0YXR1cyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2RhdGUnXSkgeyB0aGlzLmRhdGUgPSBzb3VyY2UuZGF0ZTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydkYXRlUGVyaW9kJ10pIHsgdGhpcy5kYXRlID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS5kYXRlUGVyaW9kKTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydkYXRlRGF0ZVRpbWUnXSkgeyB0aGlzLmRhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UuZGF0ZURhdGVUaW1lfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2FwcGxpY2F0aW9uJ10pIHsgdGhpcy5hcHBsaWNhdGlvbiA9IHNvdXJjZS5hcHBsaWNhdGlvbi5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZ3VsYXRlZEF1dGhvcml6YXRpb25DYXNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuYXBwbGljYXRpb24gPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1JlZ3VsYXRlZEF1dGhvcml6YXRpb24uY2FzZScgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2lkZW50aWZpZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3R5cGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3N0YXR1cycsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZGF0ZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnYXBwbGljYXRpb24nLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFJlZ3VsYXRlZEF1dGhvcml6YXRpb24gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVndWxhdGVkQXV0aG9yaXphdGlvbkFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIlJlZ3VsYXRlZEF1dGhvcml6YXRpb25cInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQnVzaW5lc3MgaWRlbnRpZmllciBmb3IgdGhlIGF1dGhvcml6YXRpb24sIHR5cGljYWxseSBhc3NpZ25lZCBieSB0aGUgYXV0aG9yaXppbmcgYm9keS5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcHJvZHVjdCB0eXBlLCB0cmVhdG1lbnQsIGZhY2lsaXR5IG9yIGFjdGl2aXR5IHRoYXQgaXMgYmVpbmcgYXV0aG9yaXplZC5cclxuICAgKi9cclxuICBzdWJqZWN0PzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE92ZXJhbGwgdHlwZSBvZiB0aGlzIGF1dGhvcml6YXRpb24sIGZvciBleGFtcGxlIGRydWcgbWFya2V0aW5nIGFwcHJvdmFsLCBvcnBoYW4gZHJ1ZyBkZXNpZ25hdGlvbi5cclxuICAgKi9cclxuICB0eXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBHZW5lcmFsIHRleHR1YWwgc3VwcG9ydGluZyBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBkZXNjcmlwdGlvbj86IGZoaXIuRmhpck1hcmtkb3dufHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFJlZ3VsYXRlZEF1dGhvcml6YXRpb24uZGVzY3JpcHRpb25cclxuICAgKi9cclxuICBfZGVzY3JpcHRpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0ZXJyaXRvcnkgKGUuZy4sIGNvdW50cnksIGp1cmlzZGljdGlvbiBldGMuKSBpbiB3aGljaCB0aGUgYXV0aG9yaXphdGlvbiBoYXMgYmVlbiBncmFudGVkLlxyXG4gICAqL1xyXG4gIHJlZ2lvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgc3RhdHVzIHRoYXQgaXMgYXV0aG9yaXNlZCBlLmcuIGFwcHJvdmVkLiBJbnRlcm1lZGlhdGUgc3RhdGVzIGFuZCBhY3Rpb25zIGNhbiBiZSB0cmFja2VkIHdpdGggY2FzZXMgYW5kIGFwcGxpY2F0aW9ucy5cclxuICAgKi9cclxuICBzdGF0dXM/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIGF0IHdoaWNoIHRoZSBjdXJyZW50IHN0YXR1cyB3YXMgYXNzaWduZWQuXHJcbiAgICovXHJcbiAgc3RhdHVzRGF0ZT86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFJlZ3VsYXRlZEF1dGhvcml6YXRpb24uc3RhdHVzRGF0ZVxyXG4gICAqL1xyXG4gIF9zdGF0dXNEYXRlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgdGltZSBwZXJpb2QgaW4gd2hpY2ggdGhlIHJlZ3VsYXRvcnkgYXBwcm92YWwsIGNsZWFyYW5jZSBvciBsaWNlbmNpbmcgaXMgaW4gZWZmZWN0LiBBcyBhbiBleGFtcGxlLCBhIE1hcmtldGluZyBBdXRob3JpemF0aW9uIGluY2x1ZGVzIHRoZSBkYXRlIG9mIGF1dGhvcml6YXRpb24gYW5kL29yIGFuIGV4cGlyYXRpb24gZGF0ZS5cclxuICAgKi9cclxuICB2YWxpZGl0eVBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQ29uZGl0aW9uIGZvciB3aGljaCB0aGUgdXNlIG9mIHRoZSByZWd1bGF0ZWQgcHJvZHVjdCBhcHBsaWVzLlxyXG4gICAqL1xyXG4gIGluZGljYXRpb24/OiBmaGlyLkNvZGVhYmxlUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGludGVuZGVkIHVzZSBvZiB0aGUgcHJvZHVjdCwgZS5nLiBwcmV2ZW50aW9uLCB0cmVhdG1lbnQsIGRpYWdub3Npcy5cclxuICAgKi9cclxuICBpbnRlbmRlZFVzZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxlZ2FsIG9yIHJlZ3VsYXRvcnkgZnJhbWV3b3JrIGFnYWluc3Qgd2hpY2ggdGhpcyBhdXRob3JpemF0aW9uIGlzIGdyYW50ZWQsIG9yIG90aGVyIHJlYXNvbnMgZm9yIGl0LlxyXG4gICAqL1xyXG4gIGJhc2lzPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvcmdhbml6YXRpb24gdGhhdCBoYXMgYmVlbiBncmFudGVkIHRoaXMgYXV0aG9yaXphdGlvbiwgYnkgc29tZSBhdXRob3JpdGF0aXZlIGJvZHkgKHRoZSAncmVndWxhdG9yJykuXHJcbiAgICovXHJcbiAgaG9sZGVyPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcmVndWxhdG9yeSBhdXRob3JpdHkgb3IgYXV0aG9yaXppbmcgYm9keSBncmFudGluZyB0aGUgYXV0aG9yaXphdGlvbi4gRm9yIGV4YW1wbGUsIEV1cm9wZWFuIE1lZGljaW5lcyBBZ2VuY3kgKEVNQSksIEZvb2QgYW5kIERydWcgQWRtaW5pc3RyYXRpb24gKEZEQSksIEhlYWx0aCBDYW5hZGEgKEhDKSwgZXRjLlxyXG4gICAqL1xyXG4gIHJlZ3VsYXRvcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNhc2Ugb3IgcmVndWxhdG9yeSBwcm9jZWR1cmUgZm9yIGdyYW50aW5nIG9yIGFtZW5kaW5nIGEgcmVndWxhdGVkIGF1dGhvcml6YXRpb24uIEFuIGF1dGhvcml6YXRpb24gaXMgZ3JhbnRlZCBpbiByZXNwb25zZSB0byBzdWJtaXNzaW9ucy9hcHBsaWNhdGlvbnMgYnkgdGhvc2Ugc2Vla2luZyBhdXRob3JpemF0aW9uLiBBIGNhc2UgaXMgdGhlIGFkbWluaXN0cmF0aXZlIHByb2Nlc3MgdGhhdCBkZWFscyB3aXRoIHRoZSBhcHBsaWNhdGlvbihzKSB0aGF0IHJlbGF0ZSB0byB0aGlzIGFuZCBhc3Nlc3NlcyB0aGVtLiBOb3RlOiBUaGlzIGFyZWEgaXMgc3ViamVjdCB0byBvbmdvaW5nIHJldmlldyBhbmQgdGhlIHdvcmtncm91cCBpcyBzZWVraW5nIGltcGxlbWVudGVyIGZlZWRiYWNrIG9uIGl0cyB1c2UgKHNlZSBsaW5rIGF0IGJvdHRvbSBvZiBwYWdlKS5cclxuICAgKi9cclxuICBjYXNlPzogZmhpci5SZWd1bGF0ZWRBdXRob3JpemF0aW9uQ2FzZUFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogUmVndWxhdG9yeSBhcHByb3ZhbCwgY2xlYXJhbmNlIG9yIGxpY2VuY2luZyByZWxhdGVkIHRvIGEgcmVndWxhdGVkIHByb2R1Y3QsIHRyZWF0bWVudCwgZmFjaWxpdHkgb3IgYWN0aXZpdHkgdGhhdCBpcyBjaXRlZCBpbiBhIGd1aWRhbmNlLCByZWd1bGF0aW9uLCBydWxlIG9yIGxlZ2lzbGF0aXZlIGFjdC4gQW4gZXhhbXBsZSBpcyBNYXJrZXQgQXV0aG9yaXphdGlvbiByZWxhdGluZyB0byBhIE1lZGljaW5hbCBQcm9kdWN0LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlZ3VsYXRlZEF1dGhvcml6YXRpb24gZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1JlZ3VsYXRlZEF1dGhvcml6YXRpb24nO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiUmVndWxhdGVkQXV0aG9yaXphdGlvblwiO1xyXG4gIC8qKlxyXG4gICAqIEJ1c2luZXNzIGlkZW50aWZpZXIgZm9yIHRoZSBhdXRob3JpemF0aW9uLCB0eXBpY2FsbHkgYXNzaWduZWQgYnkgdGhlIGF1dGhvcml6aW5nIGJvZHkuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI6IGZoaXIuSWRlbnRpZmllcltdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwcm9kdWN0IHR5cGUsIHRyZWF0bWVudCwgZmFjaWxpdHkgb3IgYWN0aXZpdHkgdGhhdCBpcyBiZWluZyBhdXRob3JpemVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdWJqZWN0OiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIE92ZXJhbGwgdHlwZSBvZiB0aGlzIGF1dGhvcml6YXRpb24sIGZvciBleGFtcGxlIGRydWcgbWFya2V0aW5nIGFwcHJvdmFsLCBvcnBoYW4gZHJ1ZyBkZXNpZ25hdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBHZW5lcmFsIHRleHR1YWwgc3VwcG9ydGluZyBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgZGVzY3JpcHRpb24/OiBmaGlyLkZoaXJNYXJrZG93bnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRlcnJpdG9yeSAoZS5nLiwgY291bnRyeSwganVyaXNkaWN0aW9uIGV0Yy4pIGluIHdoaWNoIHRoZSBhdXRob3JpemF0aW9uIGhhcyBiZWVuIGdyYW50ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHJlZ2lvbjogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBUaGUgc3RhdHVzIHRoYXQgaXMgYXV0aG9yaXNlZCBlLmcuIGFwcHJvdmVkLiBJbnRlcm1lZGlhdGUgc3RhdGVzIGFuZCBhY3Rpb25zIGNhbiBiZSB0cmFja2VkIHdpdGggY2FzZXMgYW5kIGFwcGxpY2F0aW9ucy5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIGF0IHdoaWNoIHRoZSBjdXJyZW50IHN0YXR1cyB3YXMgYXNzaWduZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1c0RhdGU/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWUgcGVyaW9kIGluIHdoaWNoIHRoZSByZWd1bGF0b3J5IGFwcHJvdmFsLCBjbGVhcmFuY2Ugb3IgbGljZW5jaW5nIGlzIGluIGVmZmVjdC4gQXMgYW4gZXhhbXBsZSwgYSBNYXJrZXRpbmcgQXV0aG9yaXphdGlvbiBpbmNsdWRlcyB0aGUgZGF0ZSBvZiBhdXRob3JpemF0aW9uIGFuZC9vciBhbiBleHBpcmF0aW9uIGRhdGUuXHJcbiAgICovXHJcbiAgcHVibGljIHZhbGlkaXR5UGVyaW9kPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIENvbmRpdGlvbiBmb3Igd2hpY2ggdGhlIHVzZSBvZiB0aGUgcmVndWxhdGVkIHByb2R1Y3QgYXBwbGllcy5cclxuICAgKi9cclxuICBwdWJsaWMgaW5kaWNhdGlvbj86IGZoaXIuQ29kZWFibGVSZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpbnRlbmRlZCB1c2Ugb2YgdGhlIHByb2R1Y3QsIGUuZy4gcHJldmVudGlvbiwgdHJlYXRtZW50LCBkaWFnbm9zaXMuXHJcbiAgICovXHJcbiAgcHVibGljIGludGVuZGVkVXNlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsZWdhbCBvciByZWd1bGF0b3J5IGZyYW1ld29yayBhZ2FpbnN0IHdoaWNoIHRoaXMgYXV0aG9yaXphdGlvbiBpcyBncmFudGVkLCBvciBvdGhlciByZWFzb25zIGZvciBpdC5cclxuICAgKi9cclxuICBwdWJsaWMgYmFzaXM6IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogVGhlIG9yZ2FuaXphdGlvbiB0aGF0IGhhcyBiZWVuIGdyYW50ZWQgdGhpcyBhdXRob3JpemF0aW9uLCBieSBzb21lIGF1dGhvcml0YXRpdmUgYm9keSAodGhlICdyZWd1bGF0b3InKS5cclxuICAgKi9cclxuICBwdWJsaWMgaG9sZGVyPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZWd1bGF0b3J5IGF1dGhvcml0eSBvciBhdXRob3JpemluZyBib2R5IGdyYW50aW5nIHRoZSBhdXRob3JpemF0aW9uLiBGb3IgZXhhbXBsZSwgRXVyb3BlYW4gTWVkaWNpbmVzIEFnZW5jeSAoRU1BKSwgRm9vZCBhbmQgRHJ1ZyBBZG1pbmlzdHJhdGlvbiAoRkRBKSwgSGVhbHRoIENhbmFkYSAoSEMpLCBldGMuXHJcbiAgICovXHJcbiAgcHVibGljIHJlZ3VsYXRvcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgY2FzZSBvciByZWd1bGF0b3J5IHByb2NlZHVyZSBmb3IgZ3JhbnRpbmcgb3IgYW1lbmRpbmcgYSByZWd1bGF0ZWQgYXV0aG9yaXphdGlvbi4gQW4gYXV0aG9yaXphdGlvbiBpcyBncmFudGVkIGluIHJlc3BvbnNlIHRvIHN1Ym1pc3Npb25zL2FwcGxpY2F0aW9ucyBieSB0aG9zZSBzZWVraW5nIGF1dGhvcml6YXRpb24uIEEgY2FzZSBpcyB0aGUgYWRtaW5pc3RyYXRpdmUgcHJvY2VzcyB0aGF0IGRlYWxzIHdpdGggdGhlIGFwcGxpY2F0aW9uKHMpIHRoYXQgcmVsYXRlIHRvIHRoaXMgYW5kIGFzc2Vzc2VzIHRoZW0uIE5vdGU6IFRoaXMgYXJlYSBpcyBzdWJqZWN0IHRvIG9uZ29pbmcgcmV2aWV3IGFuZCB0aGUgd29ya2dyb3VwIGlzIHNlZWtpbmcgaW1wbGVtZW50ZXIgZmVlZGJhY2sgb24gaXRzIHVzZSAoc2VlIGxpbmsgYXQgYm90dG9tIG9mIHBhZ2UpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjYXNlPzogZmhpci5SZWd1bGF0ZWRBdXRob3JpemF0aW9uQ2FzZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgUmVndWxhdGVkQXV0aG9yaXphdGlvbiAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFJlZ3VsYXRlZEF1dGhvcml6YXRpb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnUmVndWxhdGVkQXV0aG9yaXphdGlvbic7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gc291cmNlLmlkZW50aWZpZXIubWFwKCh4KSA9PiBuZXcgZmhpci5JZGVudGlmaWVyKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaWRlbnRpZmllciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydzdWJqZWN0J10pIHsgdGhpcy5zdWJqZWN0ID0gc291cmNlLnN1YmplY3QubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdWJqZWN0ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnR5cGUpOyB9XHJcbiAgICBpZiAoc291cmNlWydkZXNjcmlwdGlvbiddKSB7IHRoaXMuZGVzY3JpcHRpb24gPSBuZXcgZmhpci5GaGlyTWFya2Rvd24oe3ZhbHVlOiBzb3VyY2UuZGVzY3JpcHRpb259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Rlc2NyaXB0aW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb24pIHsgdGhpcy5kZXNjcmlwdGlvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kZXNjcmlwdGlvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRlc2NyaXB0aW9uID0gbmV3IGZoaXIuRmhpck1hcmtkb3duKHNvdXJjZS5fZGVzY3JpcHRpb24gYXMgUGFydGlhbDxmaGlyLkZoaXJNYXJrZG93bkFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVnaW9uJ10pIHsgdGhpcy5yZWdpb24gPSBzb3VyY2UucmVnaW9uLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucmVnaW9uID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5zdGF0dXMpOyB9XHJcbiAgICBpZiAoc291cmNlWydzdGF0dXNEYXRlJ10pIHsgdGhpcy5zdGF0dXNEYXRlID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLnN0YXR1c0RhdGV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1c0RhdGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXNEYXRlKSB7IHRoaXMuc3RhdHVzRGF0ZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXNEYXRlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdHVzRGF0ZSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX3N0YXR1c0RhdGUgYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndmFsaWRpdHlQZXJpb2QnXSkgeyB0aGlzLnZhbGlkaXR5UGVyaW9kID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS52YWxpZGl0eVBlcmlvZCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2luZGljYXRpb24nXSkgeyB0aGlzLmluZGljYXRpb24gPSBuZXcgZmhpci5Db2RlYWJsZVJlZmVyZW5jZShzb3VyY2UuaW5kaWNhdGlvbik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2ludGVuZGVkVXNlJ10pIHsgdGhpcy5pbnRlbmRlZFVzZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuaW50ZW5kZWRVc2UpOyB9XHJcbiAgICBpZiAoc291cmNlWydiYXNpcyddKSB7IHRoaXMuYmFzaXMgPSBzb3VyY2UuYmFzaXMubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5iYXNpcyA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydob2xkZXInXSkgeyB0aGlzLmhvbGRlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuaG9sZGVyKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVndWxhdG9yJ10pIHsgdGhpcy5yZWd1bGF0b3IgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnJlZ3VsYXRvcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2Nhc2UnXSkgeyB0aGlzLmNhc2UgPSBuZXcgZmhpci5SZWd1bGF0ZWRBdXRob3JpemF0aW9uQ2FzZShzb3VyY2UuY2FzZSk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdSZWd1bGF0ZWRBdXRob3JpemF0aW9uJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnc3ViamVjdCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndHlwZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZGVzY3JpcHRpb24nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ3JlZ2lvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnc3RhdHVzJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdzdGF0dXNEYXRlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd2YWxpZGl0eVBlcmlvZCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnaW5kaWNhdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnaW50ZW5kZWRVc2UnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2Jhc2lzJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdob2xkZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3JlZ3VsYXRvcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnY2FzZScsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=