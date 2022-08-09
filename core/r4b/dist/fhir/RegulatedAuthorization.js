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
            this.identifier = new fhir.Identifier(source.identifier, options);
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type, options);
        }
        if (source['status']) {
            this.status = new fhir.CodeableConcept(source.status, options);
        }
        if (source['date']) {
            this.date = source.date;
        }
        else if (source['datePeriod']) {
            this.date = new fhir.Period(source.datePeriod, options);
        }
        else if (source['dateDateTime'] !== undefined) {
            this.date = new fhir.FhirDateTime({ value: source.dateDateTime }, options);
        }
        if (source['application']) {
            this.application = source.application.map((x) => new fhir.RegulatedAuthorizationCase(x, options));
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
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options));
        }
        else {
            this.identifier = [];
        }
        if (source['subject']) {
            this.subject = source.subject.map((x) => new fhir.Reference(x, options));
        }
        else {
            this.subject = [];
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type, options);
        }
        if (source['description'] !== undefined) {
            this.description = new fhir.FhirMarkdown({ value: source.description }, options);
        }
        if (source['_description']) {
            if (this.description) {
                this.description.addExtendedProperties(source._description);
            }
            else {
                this.description = new fhir.FhirMarkdown(source._description, options);
            }
        }
        if (source['region']) {
            this.region = source.region.map((x) => new fhir.CodeableConcept(x, options));
        }
        else {
            this.region = [];
        }
        if (source['status']) {
            this.status = new fhir.CodeableConcept(source.status, options);
        }
        if (source['statusDate'] !== undefined) {
            this.statusDate = new fhir.FhirDateTime({ value: source.statusDate }, options);
        }
        if (source['_statusDate']) {
            if (this.statusDate) {
                this.statusDate.addExtendedProperties(source._statusDate);
            }
            else {
                this.statusDate = new fhir.FhirDateTime(source._statusDate, options);
            }
        }
        if (source['validityPeriod']) {
            this.validityPeriod = new fhir.Period(source.validityPeriod, options);
        }
        if (source['indication']) {
            this.indication = new fhir.CodeableReference(source.indication, options);
        }
        if (source['intendedUse']) {
            this.intendedUse = new fhir.CodeableConcept(source.intendedUse, options);
        }
        if (source['basis']) {
            this.basis = source.basis.map((x) => new fhir.CodeableConcept(x, options));
        }
        else {
            this.basis = [];
        }
        if (source['holder']) {
            this.holder = new fhir.Reference(source.holder, options);
        }
        if (source['regulator']) {
            this.regulator = new fhir.Reference(source.regulator, options);
        }
        if (source['case']) {
            this.case = new fhir.RegulatedAuthorizationCase(source.case, options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVndWxhdGVkQXV0aG9yaXphdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvUmVndWxhdGVkQXV0aG9yaXphdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFFeEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUE0RG5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLDBCQUEyQixTQUFRLElBQUksQ0FBQyxlQUFlO0lBNkJsRTs7T0FFRztJQUNILFlBQVksU0FBaUQsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDdkcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUNoRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUNuRixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUN6RixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztTQUFFO2FBQzNDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJ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ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IFJlZ3VsYXRlZEF1dGhvcml6YXRpb25cclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFJlZ3VsYXRlZEF1dGhvcml6YXRpb25DYXNlVHlwZUNvZGVzLCAgUmVndWxhdGVkQXV0aG9yaXphdGlvbkNhc2VUeXBlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1JlZ3VsYXRlZEF1dGhvcml6YXRpb25DYXNlVHlwZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBSZWd1bGF0ZWRBdXRob3JpemF0aW9uQ2FzZVR5cGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1JlZ3VsYXRlZEF1dGhvcml6YXRpb25DYXNlVHlwZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUHVibGljYXRpb25TdGF0dXNDb2RlcywgIFB1YmxpY2F0aW9uU3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1B1YmxpY2F0aW9uU3RhdHVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFB1YmxpY2F0aW9uU3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9QdWJsaWNhdGlvblN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUmVndWxhdGVkQXV0aG9yaXphdGlvblR5cGVDb2RlcywgIFJlZ3VsYXRlZEF1dGhvcml6YXRpb25UeXBlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1JlZ3VsYXRlZEF1dGhvcml6YXRpb25UeXBlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFJlZ3VsYXRlZEF1dGhvcml6YXRpb25UeXBlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9SZWd1bGF0ZWRBdXRob3JpemF0aW9uVHlwZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgSnVyaXNkaWN0aW9uQ29kZXMsICBKdXJpc2RpY3Rpb25Db2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvSnVyaXNkaWN0aW9uQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEp1cmlzZGljdGlvblZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvSnVyaXNkaWN0aW9uVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBQcm9kdWN0SW50ZW5kZWRVc2VDb2RlcywgIFByb2R1Y3RJbnRlbmRlZFVzZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Qcm9kdWN0SW50ZW5kZWRVc2VDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUHJvZHVjdEludGVuZGVkVXNlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Qcm9kdWN0SW50ZW5kZWRVc2VWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFJlZ3VsYXRlZEF1dGhvcml6YXRpb25CYXNpc0NvZGVzLCAgUmVndWxhdGVkQXV0aG9yaXphdGlvbkJhc2lzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1JlZ3VsYXRlZEF1dGhvcml6YXRpb25CYXNpc0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBSZWd1bGF0ZWRBdXRob3JpemF0aW9uQmFzaXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1JlZ3VsYXRlZEF1dGhvcml6YXRpb25CYXNpc1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBSZWd1bGF0ZWRBdXRob3JpemF0aW9uQ2FzZSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBSZWd1bGF0ZWRBdXRob3JpemF0aW9uQ2FzZUFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXIgYnkgd2hpY2ggdGhpcyBjYXNlIGNhbiBiZSByZWZlcmVuY2VkLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGVmaW5pbmcgdHlwZSBvZiBjYXNlLlxyXG4gICAqL1xyXG4gIHR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzdGF0dXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjYXNlLlxyXG4gICAqL1xyXG4gIHN0YXR1cz86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVsZXZhbnQgZGF0ZSBmb3IgdGhpcyBjYXNlLlxyXG4gICAqL1xyXG4gIGRhdGU/OiBmaGlyLlBlcmlvZHxmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVsZXZhbnQgZGF0ZSBmb3IgdGhpcyBjYXNlLlxyXG4gICAqL1xyXG4gIGRhdGVQZXJpb2Q/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJlbGV2YW50IGRhdGUgZm9yIHRoaXMgY2FzZS5cclxuICAgKi9cclxuICBkYXRlRGF0ZVRpbWU/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgcmVndWxhdG9yeSBzdWJtaXNzaW9uIGZyb20gYW4gb3JnYW5pemF0aW9uIHRvIGEgcmVndWxhdG9yLCBhcyBwYXJ0IG9mIGFuIGFzc2Vzc2luZyBjYXNlLiBNdWx0aXBsZSBhcHBsaWNhdGlvbnMgbWF5IG9jY3VyIG92ZXIgdGltZSwgd2l0aCBtb3JlIG9yIGRpZmZlcmVudCBpbmZvcm1hdGlvbiB0byBzdXBwb3J0IG9yIG1vZGlmeSB0aGUgc3VibWlzc2lvbiBvciB0aGUgYXV0aG9yaXphdGlvbi4gVGhlIGFwcGxpY2F0aW9ucyBjYW4gYmUgY29uc2lkZXJlZCBhcyBzdGVwcyB3aXRoaW4gdGhlIGxvbmdlciBydW5uaW5nIGNhc2Ugb3IgcHJvY2VkdXJlIGZvciB0aGlzIGF1dGhvcml6YXRpb24gcHJvY2Vzcy5cclxuICAgKi9cclxuICBhcHBsaWNhdGlvbj86IGZoaXIuUmVndWxhdGVkQXV0aG9yaXphdGlvbkNhc2VBcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIGNhc2Ugb3IgcmVndWxhdG9yeSBwcm9jZWR1cmUgZm9yIGdyYW50aW5nIG9yIGFtZW5kaW5nIGEgcmVndWxhdGVkIGF1dGhvcml6YXRpb24uIEFuIGF1dGhvcml6YXRpb24gaXMgZ3JhbnRlZCBpbiByZXNwb25zZSB0byBzdWJtaXNzaW9ucy9hcHBsaWNhdGlvbnMgYnkgdGhvc2Ugc2Vla2luZyBhdXRob3JpemF0aW9uLiBBIGNhc2UgaXMgdGhlIGFkbWluaXN0cmF0aXZlIHByb2Nlc3MgdGhhdCBkZWFscyB3aXRoIHRoZSBhcHBsaWNhdGlvbihzKSB0aGF0IHJlbGF0ZSB0byB0aGlzIGFuZCBhc3Nlc3NlcyB0aGVtLiBOb3RlOiBUaGlzIGFyZWEgaXMgc3ViamVjdCB0byBvbmdvaW5nIHJldmlldyBhbmQgdGhlIHdvcmtncm91cCBpcyBzZWVraW5nIGltcGxlbWVudGVyIGZlZWRiYWNrIG9uIGl0cyB1c2UgKHNlZSBsaW5rIGF0IGJvdHRvbSBvZiBwYWdlKS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWd1bGF0ZWRBdXRob3JpemF0aW9uQ2FzZSBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1JlZ3VsYXRlZEF1dGhvcml6YXRpb25DYXNlJztcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVyIGJ5IHdoaWNoIHRoaXMgY2FzZSBjYW4gYmUgcmVmZXJlbmNlZC5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRlZmluaW5nIHR5cGUgb2YgY2FzZS5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgc3RhdHVzIGFzc29jaWF0ZWQgd2l0aCB0aGUgY2FzZS5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJlbGV2YW50IGRhdGUgZm9yIHRoaXMgY2FzZS5cclxuICAgKi9cclxuICBwdWJsaWMgZGF0ZT86IChmaGlyLlBlcmlvZHxmaGlyLkZoaXJEYXRlVGltZSl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIGZsYWcgdG8gcHJvcGVybHkgc2VyaWFsaXplIGNob2ljZS10eXBlIGVsZW1lbnQgUmVndWxhdGVkQXV0aG9yaXphdGlvbi5jYXNlLmRhdGVbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfZGF0ZUlzQ2hvaWNlOnRydWUgPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIEEgcmVndWxhdG9yeSBzdWJtaXNzaW9uIGZyb20gYW4gb3JnYW5pemF0aW9uIHRvIGEgcmVndWxhdG9yLCBhcyBwYXJ0IG9mIGFuIGFzc2Vzc2luZyBjYXNlLiBNdWx0aXBsZSBhcHBsaWNhdGlvbnMgbWF5IG9jY3VyIG92ZXIgdGltZSwgd2l0aCBtb3JlIG9yIGRpZmZlcmVudCBpbmZvcm1hdGlvbiB0byBzdXBwb3J0IG9yIG1vZGlmeSB0aGUgc3VibWlzc2lvbiBvciB0aGUgYXV0aG9yaXphdGlvbi4gVGhlIGFwcGxpY2F0aW9ucyBjYW4gYmUgY29uc2lkZXJlZCBhcyBzdGVwcyB3aXRoaW4gdGhlIGxvbmdlciBydW5uaW5nIGNhc2Ugb3IgcHJvY2VkdXJlIGZvciB0aGlzIGF1dGhvcml6YXRpb24gcHJvY2Vzcy5cclxuICAgKi9cclxuICBwdWJsaWMgYXBwbGljYXRpb246IGZoaXIuUmVndWxhdGVkQXV0aG9yaXphdGlvbkNhc2VbXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBSZWd1bGF0ZWRBdXRob3JpemF0aW9uQ2FzZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFJlZ3VsYXRlZEF1dGhvcml6YXRpb25DYXNlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBuZXcgZmhpci5JZGVudGlmaWVyKHNvdXJjZS5pZGVudGlmaWVyLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsndHlwZSddKSB7IHRoaXMudHlwZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UudHlwZSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5zdGF0dXMsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydkYXRlJ10pIHsgdGhpcy5kYXRlID0gc291cmNlLmRhdGU7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnZGF0ZVBlcmlvZCddKSB7IHRoaXMuZGF0ZSA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2UuZGF0ZVBlcmlvZCwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnZGF0ZURhdGVUaW1lJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmRhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UuZGF0ZURhdGVUaW1lfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2FwcGxpY2F0aW9uJ10pIHsgdGhpcy5hcHBsaWNhdGlvbiA9IHNvdXJjZS5hcHBsaWNhdGlvbi5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZ3VsYXRlZEF1dGhvcml6YXRpb25DYXNlKHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuYXBwbGljYXRpb24gPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1JlZ3VsYXRlZEF1dGhvcml6YXRpb24uY2FzZScgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2lkZW50aWZpZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3R5cGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3N0YXR1cycsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZGF0ZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnYXBwbGljYXRpb24nLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFJlZ3VsYXRlZEF1dGhvcml6YXRpb24gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVndWxhdGVkQXV0aG9yaXphdGlvbkFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIlJlZ3VsYXRlZEF1dGhvcml6YXRpb25cInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQnVzaW5lc3MgaWRlbnRpZmllciBmb3IgdGhlIGF1dGhvcml6YXRpb24sIHR5cGljYWxseSBhc3NpZ25lZCBieSB0aGUgYXV0aG9yaXppbmcgYm9keS5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcHJvZHVjdCB0eXBlLCB0cmVhdG1lbnQsIGZhY2lsaXR5IG9yIGFjdGl2aXR5IHRoYXQgaXMgYmVpbmcgYXV0aG9yaXplZC5cclxuICAgKi9cclxuICBzdWJqZWN0PzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE92ZXJhbGwgdHlwZSBvZiB0aGlzIGF1dGhvcml6YXRpb24sIGZvciBleGFtcGxlIGRydWcgbWFya2V0aW5nIGFwcHJvdmFsLCBvcnBoYW4gZHJ1ZyBkZXNpZ25hdGlvbi5cclxuICAgKi9cclxuICB0eXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBHZW5lcmFsIHRleHR1YWwgc3VwcG9ydGluZyBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBkZXNjcmlwdGlvbj86IGZoaXIuRmhpck1hcmtkb3dufHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFJlZ3VsYXRlZEF1dGhvcml6YXRpb24uZGVzY3JpcHRpb25cclxuICAgKi9cclxuICBfZGVzY3JpcHRpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0ZXJyaXRvcnkgKGUuZy4sIGNvdW50cnksIGp1cmlzZGljdGlvbiBldGMuKSBpbiB3aGljaCB0aGUgYXV0aG9yaXphdGlvbiBoYXMgYmVlbiBncmFudGVkLlxyXG4gICAqL1xyXG4gIHJlZ2lvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgc3RhdHVzIHRoYXQgaXMgYXV0aG9yaXNlZCBlLmcuIGFwcHJvdmVkLiBJbnRlcm1lZGlhdGUgc3RhdGVzIGFuZCBhY3Rpb25zIGNhbiBiZSB0cmFja2VkIHdpdGggY2FzZXMgYW5kIGFwcGxpY2F0aW9ucy5cclxuICAgKi9cclxuICBzdGF0dXM/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIGF0IHdoaWNoIHRoZSBjdXJyZW50IHN0YXR1cyB3YXMgYXNzaWduZWQuXHJcbiAgICovXHJcbiAgc3RhdHVzRGF0ZT86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFJlZ3VsYXRlZEF1dGhvcml6YXRpb24uc3RhdHVzRGF0ZVxyXG4gICAqL1xyXG4gIF9zdGF0dXNEYXRlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgdGltZSBwZXJpb2QgaW4gd2hpY2ggdGhlIHJlZ3VsYXRvcnkgYXBwcm92YWwsIGNsZWFyYW5jZSBvciBsaWNlbmNpbmcgaXMgaW4gZWZmZWN0LiBBcyBhbiBleGFtcGxlLCBhIE1hcmtldGluZyBBdXRob3JpemF0aW9uIGluY2x1ZGVzIHRoZSBkYXRlIG9mIGF1dGhvcml6YXRpb24gYW5kL29yIGFuIGV4cGlyYXRpb24gZGF0ZS5cclxuICAgKi9cclxuICB2YWxpZGl0eVBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQ29uZGl0aW9uIGZvciB3aGljaCB0aGUgdXNlIG9mIHRoZSByZWd1bGF0ZWQgcHJvZHVjdCBhcHBsaWVzLlxyXG4gICAqL1xyXG4gIGluZGljYXRpb24/OiBmaGlyLkNvZGVhYmxlUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGludGVuZGVkIHVzZSBvZiB0aGUgcHJvZHVjdCwgZS5nLiBwcmV2ZW50aW9uLCB0cmVhdG1lbnQsIGRpYWdub3Npcy5cclxuICAgKi9cclxuICBpbnRlbmRlZFVzZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxlZ2FsIG9yIHJlZ3VsYXRvcnkgZnJhbWV3b3JrIGFnYWluc3Qgd2hpY2ggdGhpcyBhdXRob3JpemF0aW9uIGlzIGdyYW50ZWQsIG9yIG90aGVyIHJlYXNvbnMgZm9yIGl0LlxyXG4gICAqL1xyXG4gIGJhc2lzPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvcmdhbml6YXRpb24gdGhhdCBoYXMgYmVlbiBncmFudGVkIHRoaXMgYXV0aG9yaXphdGlvbiwgYnkgc29tZSBhdXRob3JpdGF0aXZlIGJvZHkgKHRoZSAncmVndWxhdG9yJykuXHJcbiAgICovXHJcbiAgaG9sZGVyPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcmVndWxhdG9yeSBhdXRob3JpdHkgb3IgYXV0aG9yaXppbmcgYm9keSBncmFudGluZyB0aGUgYXV0aG9yaXphdGlvbi4gRm9yIGV4YW1wbGUsIEV1cm9wZWFuIE1lZGljaW5lcyBBZ2VuY3kgKEVNQSksIEZvb2QgYW5kIERydWcgQWRtaW5pc3RyYXRpb24gKEZEQSksIEhlYWx0aCBDYW5hZGEgKEhDKSwgZXRjLlxyXG4gICAqL1xyXG4gIHJlZ3VsYXRvcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNhc2Ugb3IgcmVndWxhdG9yeSBwcm9jZWR1cmUgZm9yIGdyYW50aW5nIG9yIGFtZW5kaW5nIGEgcmVndWxhdGVkIGF1dGhvcml6YXRpb24uIEFuIGF1dGhvcml6YXRpb24gaXMgZ3JhbnRlZCBpbiByZXNwb25zZSB0byBzdWJtaXNzaW9ucy9hcHBsaWNhdGlvbnMgYnkgdGhvc2Ugc2Vla2luZyBhdXRob3JpemF0aW9uLiBBIGNhc2UgaXMgdGhlIGFkbWluaXN0cmF0aXZlIHByb2Nlc3MgdGhhdCBkZWFscyB3aXRoIHRoZSBhcHBsaWNhdGlvbihzKSB0aGF0IHJlbGF0ZSB0byB0aGlzIGFuZCBhc3Nlc3NlcyB0aGVtLiBOb3RlOiBUaGlzIGFyZWEgaXMgc3ViamVjdCB0byBvbmdvaW5nIHJldmlldyBhbmQgdGhlIHdvcmtncm91cCBpcyBzZWVraW5nIGltcGxlbWVudGVyIGZlZWRiYWNrIG9uIGl0cyB1c2UgKHNlZSBsaW5rIGF0IGJvdHRvbSBvZiBwYWdlKS5cclxuICAgKi9cclxuICBjYXNlPzogZmhpci5SZWd1bGF0ZWRBdXRob3JpemF0aW9uQ2FzZUFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogUmVndWxhdG9yeSBhcHByb3ZhbCwgY2xlYXJhbmNlIG9yIGxpY2VuY2luZyByZWxhdGVkIHRvIGEgcmVndWxhdGVkIHByb2R1Y3QsIHRyZWF0bWVudCwgZmFjaWxpdHkgb3IgYWN0aXZpdHkgdGhhdCBpcyBjaXRlZCBpbiBhIGd1aWRhbmNlLCByZWd1bGF0aW9uLCBydWxlIG9yIGxlZ2lzbGF0aXZlIGFjdC4gQW4gZXhhbXBsZSBpcyBNYXJrZXQgQXV0aG9yaXphdGlvbiByZWxhdGluZyB0byBhIE1lZGljaW5hbCBQcm9kdWN0LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlZ3VsYXRlZEF1dGhvcml6YXRpb24gZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1JlZ3VsYXRlZEF1dGhvcml6YXRpb24nO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiUmVndWxhdGVkQXV0aG9yaXphdGlvblwiO1xyXG4gIC8qKlxyXG4gICAqIEJ1c2luZXNzIGlkZW50aWZpZXIgZm9yIHRoZSBhdXRob3JpemF0aW9uLCB0eXBpY2FsbHkgYXNzaWduZWQgYnkgdGhlIGF1dGhvcml6aW5nIGJvZHkuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI6IGZoaXIuSWRlbnRpZmllcltdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwcm9kdWN0IHR5cGUsIHRyZWF0bWVudCwgZmFjaWxpdHkgb3IgYWN0aXZpdHkgdGhhdCBpcyBiZWluZyBhdXRob3JpemVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdWJqZWN0OiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIE92ZXJhbGwgdHlwZSBvZiB0aGlzIGF1dGhvcml6YXRpb24sIGZvciBleGFtcGxlIGRydWcgbWFya2V0aW5nIGFwcHJvdmFsLCBvcnBoYW4gZHJ1ZyBkZXNpZ25hdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBHZW5lcmFsIHRleHR1YWwgc3VwcG9ydGluZyBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgZGVzY3JpcHRpb24/OiBmaGlyLkZoaXJNYXJrZG93bnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRlcnJpdG9yeSAoZS5nLiwgY291bnRyeSwganVyaXNkaWN0aW9uIGV0Yy4pIGluIHdoaWNoIHRoZSBhdXRob3JpemF0aW9uIGhhcyBiZWVuIGdyYW50ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHJlZ2lvbjogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBUaGUgc3RhdHVzIHRoYXQgaXMgYXV0aG9yaXNlZCBlLmcuIGFwcHJvdmVkLiBJbnRlcm1lZGlhdGUgc3RhdGVzIGFuZCBhY3Rpb25zIGNhbiBiZSB0cmFja2VkIHdpdGggY2FzZXMgYW5kIGFwcGxpY2F0aW9ucy5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIGF0IHdoaWNoIHRoZSBjdXJyZW50IHN0YXR1cyB3YXMgYXNzaWduZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1c0RhdGU/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWUgcGVyaW9kIGluIHdoaWNoIHRoZSByZWd1bGF0b3J5IGFwcHJvdmFsLCBjbGVhcmFuY2Ugb3IgbGljZW5jaW5nIGlzIGluIGVmZmVjdC4gQXMgYW4gZXhhbXBsZSwgYSBNYXJrZXRpbmcgQXV0aG9yaXphdGlvbiBpbmNsdWRlcyB0aGUgZGF0ZSBvZiBhdXRob3JpemF0aW9uIGFuZC9vciBhbiBleHBpcmF0aW9uIGRhdGUuXHJcbiAgICovXHJcbiAgcHVibGljIHZhbGlkaXR5UGVyaW9kPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIENvbmRpdGlvbiBmb3Igd2hpY2ggdGhlIHVzZSBvZiB0aGUgcmVndWxhdGVkIHByb2R1Y3QgYXBwbGllcy5cclxuICAgKi9cclxuICBwdWJsaWMgaW5kaWNhdGlvbj86IGZoaXIuQ29kZWFibGVSZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpbnRlbmRlZCB1c2Ugb2YgdGhlIHByb2R1Y3QsIGUuZy4gcHJldmVudGlvbiwgdHJlYXRtZW50LCBkaWFnbm9zaXMuXHJcbiAgICovXHJcbiAgcHVibGljIGludGVuZGVkVXNlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsZWdhbCBvciByZWd1bGF0b3J5IGZyYW1ld29yayBhZ2FpbnN0IHdoaWNoIHRoaXMgYXV0aG9yaXphdGlvbiBpcyBncmFudGVkLCBvciBvdGhlciByZWFzb25zIGZvciBpdC5cclxuICAgKi9cclxuICBwdWJsaWMgYmFzaXM6IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogVGhlIG9yZ2FuaXphdGlvbiB0aGF0IGhhcyBiZWVuIGdyYW50ZWQgdGhpcyBhdXRob3JpemF0aW9uLCBieSBzb21lIGF1dGhvcml0YXRpdmUgYm9keSAodGhlICdyZWd1bGF0b3InKS5cclxuICAgKi9cclxuICBwdWJsaWMgaG9sZGVyPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZWd1bGF0b3J5IGF1dGhvcml0eSBvciBhdXRob3JpemluZyBib2R5IGdyYW50aW5nIHRoZSBhdXRob3JpemF0aW9uLiBGb3IgZXhhbXBsZSwgRXVyb3BlYW4gTWVkaWNpbmVzIEFnZW5jeSAoRU1BKSwgRm9vZCBhbmQgRHJ1ZyBBZG1pbmlzdHJhdGlvbiAoRkRBKSwgSGVhbHRoIENhbmFkYSAoSEMpLCBldGMuXHJcbiAgICovXHJcbiAgcHVibGljIHJlZ3VsYXRvcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgY2FzZSBvciByZWd1bGF0b3J5IHByb2NlZHVyZSBmb3IgZ3JhbnRpbmcgb3IgYW1lbmRpbmcgYSByZWd1bGF0ZWQgYXV0aG9yaXphdGlvbi4gQW4gYXV0aG9yaXphdGlvbiBpcyBncmFudGVkIGluIHJlc3BvbnNlIHRvIHN1Ym1pc3Npb25zL2FwcGxpY2F0aW9ucyBieSB0aG9zZSBzZWVraW5nIGF1dGhvcml6YXRpb24uIEEgY2FzZSBpcyB0aGUgYWRtaW5pc3RyYXRpdmUgcHJvY2VzcyB0aGF0IGRlYWxzIHdpdGggdGhlIGFwcGxpY2F0aW9uKHMpIHRoYXQgcmVsYXRlIHRvIHRoaXMgYW5kIGFzc2Vzc2VzIHRoZW0uIE5vdGU6IFRoaXMgYXJlYSBpcyBzdWJqZWN0IHRvIG9uZ29pbmcgcmV2aWV3IGFuZCB0aGUgd29ya2dyb3VwIGlzIHNlZWtpbmcgaW1wbGVtZW50ZXIgZmVlZGJhY2sgb24gaXRzIHVzZSAoc2VlIGxpbmsgYXQgYm90dG9tIG9mIHBhZ2UpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjYXNlPzogZmhpci5SZWd1bGF0ZWRBdXRob3JpemF0aW9uQ2FzZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgUmVndWxhdGVkQXV0aG9yaXphdGlvbiAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFJlZ3VsYXRlZEF1dGhvcml6YXRpb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnUmVndWxhdGVkQXV0aG9yaXphdGlvbic7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gc291cmNlLmlkZW50aWZpZXIubWFwKCh4KSA9PiBuZXcgZmhpci5JZGVudGlmaWVyKHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaWRlbnRpZmllciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydzdWJqZWN0J10pIHsgdGhpcy5zdWJqZWN0ID0gc291cmNlLnN1YmplY3QubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zdWJqZWN0ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnR5cGUsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydkZXNjcmlwdGlvbiddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5kZXNjcmlwdGlvbiA9IG5ldyBmaGlyLkZoaXJNYXJrZG93bih7dmFsdWU6IHNvdXJjZS5kZXNjcmlwdGlvbn0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGVzY3JpcHRpb24nXSkge1xyXG4gICAgICBpZiAodGhpcy5kZXNjcmlwdGlvbikgeyB0aGlzLmRlc2NyaXB0aW9uLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2Rlc2NyaXB0aW9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZGVzY3JpcHRpb24gPSBuZXcgZmhpci5GaGlyTWFya2Rvd24oc291cmNlLl9kZXNjcmlwdGlvbiBhcyBQYXJ0aWFsPGZoaXIuRmhpck1hcmtkb3duQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydyZWdpb24nXSkgeyB0aGlzLnJlZ2lvbiA9IHNvdXJjZS5yZWdpb24ubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5yZWdpb24gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnN0YXR1cywgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1c0RhdGUnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc3RhdHVzRGF0ZSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5zdGF0dXNEYXRlfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXNEYXRlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzRGF0ZSkgeyB0aGlzLnN0YXR1c0RhdGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzRGF0ZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1c0RhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9zdGF0dXNEYXRlIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3ZhbGlkaXR5UGVyaW9kJ10pIHsgdGhpcy52YWxpZGl0eVBlcmlvZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2UudmFsaWRpdHlQZXJpb2QsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydpbmRpY2F0aW9uJ10pIHsgdGhpcy5pbmRpY2F0aW9uID0gbmV3IGZoaXIuQ29kZWFibGVSZWZlcmVuY2Uoc291cmNlLmluZGljYXRpb24sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydpbnRlbmRlZFVzZSddKSB7IHRoaXMuaW50ZW5kZWRVc2UgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmludGVuZGVkVXNlLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYmFzaXMnXSkgeyB0aGlzLmJhc2lzID0gc291cmNlLmJhc2lzLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuYmFzaXMgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnaG9sZGVyJ10pIHsgdGhpcy5ob2xkZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmhvbGRlciwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlZ3VsYXRvciddKSB7IHRoaXMucmVndWxhdG9yID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5yZWd1bGF0b3IsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydjYXNlJ10pIHsgdGhpcy5jYXNlID0gbmV3IGZoaXIuUmVndWxhdGVkQXV0aG9yaXphdGlvbkNhc2Uoc291cmNlLmNhc2UsIG9wdGlvbnMpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnUmVndWxhdGVkQXV0aG9yaXphdGlvbicgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2lkZW50aWZpZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ3N1YmplY3QnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3R5cGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2Rlc2NyaXB0aW9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdyZWdpb24nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3N0YXR1cycsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnc3RhdHVzRGF0ZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndmFsaWRpdHlQZXJpb2QnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2luZGljYXRpb24nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2ludGVuZGVkVXNlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdiYXNpcycsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnaG9sZGVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdyZWd1bGF0b3InLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2Nhc2UnLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19