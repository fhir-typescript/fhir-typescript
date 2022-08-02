// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: ProcessRequest
import * as fhir from '../fhir.js';
// @ts-ignore
import { ActionlistVsValidation } from '../fhirValueSets/ActionlistVsValidation.js';
/**
 * List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.
 */
export class ProcessRequestItem extends fhir.BackboneElement {
    /**
     * Default constructor for ProcessRequestItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['sequenceLinkId']) {
            this.sequenceLinkId = new fhir.FhirInteger({ value: source.sequenceLinkId });
        }
        else {
            this.sequenceLinkId = null;
        }
        if (source['_sequenceLinkId']) {
            if (this.sequenceLinkId) {
                this.sequenceLinkId.addExtendedProperties(source._sequenceLinkId);
            }
            else {
                this.sequenceLinkId = new fhir.FhirInteger(source._sequenceLinkId);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'ProcessRequest.item';
        }
        iss.push(...this.vRS('sequenceLinkId', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
ProcessRequestItem._fts_dataType = 'ProcessRequestItem';
/**
 * This resource provides the target, request and response, and action details for an action to be performed by the target on or about existing resources.
 */
export class ProcessRequest extends fhir.DomainResource {
    /**
     * Default constructor for ProcessRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'ProcessRequest';
        if (source['action']) {
            this.action = new fhir.FhirCode({ value: source.action });
        }
        else {
            this.action = null;
        }
        if (source['_action']) {
            if (this.action) {
                this.action.addExtendedProperties(source._action);
            }
            else {
                this.action = new fhir.FhirCode(source._action);
            }
        }
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['ruleset']) {
            this.ruleset = new fhir.Coding(source.ruleset);
        }
        if (source['originalRuleset']) {
            this.originalRuleset = new fhir.Coding(source.originalRuleset);
        }
        if (source['created']) {
            this.created = new fhir.FhirDateTime({ value: source.created });
        }
        if (source['_created']) {
            if (this.created) {
                this.created.addExtendedProperties(source._created);
            }
            else {
                this.created = new fhir.FhirDateTime(source._created);
            }
        }
        if (source['target']) {
            this.target = new fhir.Reference(source.target);
        }
        if (source['provider']) {
            this.provider = new fhir.Reference(source.provider);
        }
        if (source['organization']) {
            this.organization = new fhir.Reference(source.organization);
        }
        if (source['request']) {
            this.request = new fhir.Reference(source.request);
        }
        if (source['response']) {
            this.response = new fhir.Reference(source.response);
        }
        if (source['nullify']) {
            this.nullify = new fhir.FhirBoolean({ value: source.nullify });
        }
        if (source['_nullify']) {
            if (this.nullify) {
                this.nullify.addExtendedProperties(source._nullify);
            }
            else {
                this.nullify = new fhir.FhirBoolean(source._nullify);
            }
        }
        if (source['reference']) {
            this.reference = new fhir.FhirString({ value: source.reference });
        }
        if (source['_reference']) {
            if (this.reference) {
                this.reference.addExtendedProperties(source._reference);
            }
            else {
                this.reference = new fhir.FhirString(source._reference);
            }
        }
        if (source['item']) {
            this.item = source.item.map((x) => new fhir.ProcessRequestItem(x));
        }
        else {
            this.item = [];
        }
        if (source['include']) {
            this.include = source.include.map((x) => new fhir.FhirString({ value: x }));
        }
        else {
            this.include = [];
        }
        if (source['_include']) {
            source._include.forEach((x, i) => {
                if (this.include.length >= i) {
                    if (x) {
                        this.include[i].addExtendedProperties(x);
                    }
                }
                else {
                    if (x) {
                        this.include.push(new fhir.FhirString(x));
                    }
                }
            });
        }
        if (source['exclude']) {
            this.exclude = source.exclude.map((x) => new fhir.FhirString({ value: x }));
        }
        else {
            this.exclude = [];
        }
        if (source['_exclude']) {
            source._exclude.forEach((x, i) => {
                if (this.exclude.length >= i) {
                    if (x) {
                        this.exclude[i].addExtendedProperties(x);
                    }
                }
                else {
                    if (x) {
                        this.exclude.push(new fhir.FhirString(x));
                    }
                }
            });
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'ProcessRequest';
        }
        iss.push(...this.vRSV('action', exp, 'Actionlist', ActionlistVsValidation, 'r'));
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vOS('ruleset', exp));
        iss.push(...this.vOS('originalRuleset', exp));
        iss.push(...this.vOS('created', exp));
        iss.push(...this.vOS('target', exp));
        iss.push(...this.vOS('provider', exp));
        iss.push(...this.vOS('organization', exp));
        iss.push(...this.vOS('request', exp));
        iss.push(...this.vOS('response', exp));
        iss.push(...this.vOS('nullify', exp));
        iss.push(...this.vOS('reference', exp));
        iss.push(...this.vOA('item', exp));
        iss.push(...this.vOA('include', exp));
        iss.push(...this.vOA('exclude', exp));
        iss.push(...this.vOS('period', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
ProcessRequest._fts_dataType = 'ProcessRequest';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc1JlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1Byb2Nlc3NSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUVoQyxPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUluQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFlcEY7O0dBRUc7QUFDSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsSUFBSSxDQUFDLGVBQWU7SUFTMUQ7O09BRUc7SUFDSCxZQUFZLFNBQXlDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQy9GLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxjQUFjLEVBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDeEc7WUFBRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUFFO1FBQ3BDLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDN0IsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUFFLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLGVBQWdCLENBQUMsQ0FBQzthQUFFO2lCQUMzRjtnQkFBRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsZUFBZ0QsQ0FBQyxDQUFDO2FBQUU7U0FDOUc7SUFDSCxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxHQUFHLEdBQW1CLEtBQUss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QUcsQ0FBQyxDQUFDLENBQUM7UUFDMUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQXZKRDs7R0FFRztBQUM2Qiw0QkFBYSxHQUFVLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBQcm9jZXNzUmVxdWVzdFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQWN0aW9ubGlzdENvZGVzLCAgQWN0aW9ubGlzdENvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9BY3Rpb25saXN0Q29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEFjdGlvbmxpc3RWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0FjdGlvbmxpc3RWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgUHJvY2Vzc1JlcXVlc3RJdGVtIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFByb2Nlc3NSZXF1ZXN0SXRlbUFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEEgc2VydmljZSBsaW5lIG51bWJlci5cclxuICAgKi9cclxuICBzZXF1ZW5jZUxpbmtJZDogZmhpci5GaGlySW50ZWdlcnxudW1iZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBQcm9jZXNzUmVxdWVzdC5pdGVtLnNlcXVlbmNlTGlua0lkXHJcbiAgICovXHJcbiAgX3NlcXVlbmNlTGlua0lkPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIExpc3Qgb2YgdG9wIGxldmVsIGl0ZW1zIHRvIGJlIHJlLWFkanVkaWNhdGVkLCBpZiBub25lIHNwZWNpZmllZCB0aGVuIHRoZSBlbnRpcmUgc3VibWlzc2lvbiBpcyByZS1hZGp1ZGljYXRlZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9jZXNzUmVxdWVzdEl0ZW0gZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdQcm9jZXNzUmVxdWVzdEl0ZW0nO1xyXG4gIC8qKlxyXG4gICAqIEEgc2VydmljZSBsaW5lIG51bWJlci5cclxuICAgKi9cclxuICBwdWJsaWMgc2VxdWVuY2VMaW5rSWQ6IGZoaXIuRmhpckludGVnZXJ8bnVsbDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBQcm9jZXNzUmVxdWVzdEl0ZW0gLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxQcm9jZXNzUmVxdWVzdEl0ZW1BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnc2VxdWVuY2VMaW5rSWQnXSkgeyB0aGlzLnNlcXVlbmNlTGlua0lkID0gbmV3IGZoaXIuRmhpckludGVnZXIoe3ZhbHVlOiBzb3VyY2Uuc2VxdWVuY2VMaW5rSWR9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc2VxdWVuY2VMaW5rSWQgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfc2VxdWVuY2VMaW5rSWQnXSkge1xyXG4gICAgICBpZiAodGhpcy5zZXF1ZW5jZUxpbmtJZCkgeyB0aGlzLnNlcXVlbmNlTGlua0lkLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3NlcXVlbmNlTGlua0lkISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc2VxdWVuY2VMaW5rSWQgPSBuZXcgZmhpci5GaGlySW50ZWdlcihzb3VyY2UuX3NlcXVlbmNlTGlua0lkIGFzIFBhcnRpYWw8Zmhpci5GaGlySW50ZWdlckFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1Byb2Nlc3NSZXF1ZXN0Lml0ZW0nIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdzZXF1ZW5jZUxpbmtJZCcsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgUHJvY2Vzc1JlcXVlc3QgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvY2Vzc1JlcXVlc3RBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJQcm9jZXNzUmVxdWVzdFwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiBwcm9jZXNzaW5nIGFjdGlvbiBiZWluZyByZXF1ZXN0ZWQsIGZvciBleGFtcGxlIFJldmVyc2FsLCBSZWFkanVkaWNhdGlvbiwgU3RhdHVzUmVxdWVzdCxQZW5kZWRSZXF1ZXN0LlxyXG4gICAqL1xyXG4gIGFjdGlvbjogZmhpci5GaGlyQ29kZTxBY3Rpb25saXN0Q29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFByb2Nlc3NSZXF1ZXN0LmFjdGlvblxyXG4gICAqL1xyXG4gIF9hY3Rpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBQcm9jZXNzUmVxdWVzdCBidXNpbmVzcyBpZGVudGlmaWVyLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBzdHlsZSBvZiByZXNvdXJjZSBjb250ZW50cy4gVGhpcyBzaG91bGQgYmUgbWFwcGVkIHRvIHRoZSBhbGxvd2FibGUgcHJvZmlsZXMgZm9yIHRoaXMgYW5kIHN1cHBvcnRpbmcgcmVzb3VyY2VzLlxyXG4gICAqL1xyXG4gIHJ1bGVzZXQ/OiBmaGlyLkNvZGluZ0FyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEtub3dsZWRnZSBvZiB0aGUgb3JpZ2luYWwgdmVyc2lvbiBjYW4gaW5mb3JtIHRoZSBwcm9jZXNzaW5nIG9mIHRoaXMgaW5zdGFuY2Ugc28gdGhhdCBpbmZvcm1hdGlvbiB3aGljaCBpcyBwcm9jZXNzYWJsZSBieSB0aGUgb3JpZ2luYXRpbmcgc3lzdGVtIG1heSBiZSBnZW5lcmF0ZWQuXHJcbiAgICovXHJcbiAgb3JpZ2luYWxSdWxlc2V0PzogZmhpci5Db2RpbmdBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB3aGVuIHRoaXMgcmVzb3VyY2Ugd2FzIGNyZWF0ZWQuXHJcbiAgICovXHJcbiAgY3JlYXRlZD86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFByb2Nlc3NSZXF1ZXN0LmNyZWF0ZWRcclxuICAgKi9cclxuICBfY3JlYXRlZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIG9yZ2FuaXphdGlvbiB3aGljaCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHRhcmdldD86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHByYWN0aXRpb25lciB3aG8gaXMgcmVzcG9uc2libGUgZm9yIHRoZSBhY3Rpb24gc3BlY2lmaWVkIGluIHRoaXNlIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgcHJvdmlkZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvcmdhbml6YXRpb24gd2hpY2ggaXMgcmVzcG9uc2libGUgZm9yIHRoZSBhY3Rpb24gc3BlY2NpZmllZCBpbiB0aGlzZSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIG9yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVmZXJlbmNlIG9mIHJlc291cmNlIHdoaWNoIGlzIHRoZSB0YXJnZXQgb3Igc3ViamVjdCBvZiB0aGlzIGFjdGlvbi5cclxuICAgKi9cclxuICByZXF1ZXN0PzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBSZWZlcmVuY2Ugb2YgYSBwcmlvciByZXNwb25zZSB0byByZXNvdXJjZSB3aGljaCBpcyB0aGUgdGFyZ2V0IG9yIHN1YmplY3Qgb2YgdGhpcyBhY3Rpb24uXHJcbiAgICovXHJcbiAgcmVzcG9uc2U/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFNvbWUgcmVzb3VyY2VzIG11c3Qgbm90IHNpbXBseSBiZSByZXZlcnNlZCBpbiBhIHByb2Nlc3Npbmcgb3IgYWNjb3VudGluZyBzZW5zZSBidXQgcmF0aGVyIG11c3QgaGF2ZSBhbGwgaGlzdG9yeSByZW1vdmVkLCBzdWNoIGFzIHRoZSBhY2NpZGVudGFsIHN1Ym1pc3Npb24gb2Ygc2Vuc2l0aXZlIGFuZC9vciB3cm9uZyBpbmZvcm1hdGlvbi4gSWYgdGhlIHJlY2VpdmVyIGNhbm5vdCBjb21wbHkgd2l0aCBhIE51bGxpZnkgcmVxdWVzdCB0aGVuIHRoZXkgbXVzdCByZWplY3QgdGhlIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgbnVsbGlmeT86IGZoaXIuRmhpckJvb2xlYW58Ym9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFByb2Nlc3NSZXF1ZXN0Lm51bGxpZnlcclxuICAgKi9cclxuICBfbnVsbGlmeT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gc3VwcGx5IHdoaWNoIGF1dGhlbnRpY2F0ZXMgdGhlIHByb2Nlc3MuXHJcbiAgICovXHJcbiAgcmVmZXJlbmNlPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFByb2Nlc3NSZXF1ZXN0LnJlZmVyZW5jZVxyXG4gICAqL1xyXG4gIF9yZWZlcmVuY2U/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIExpc3Qgb2YgdG9wIGxldmVsIGl0ZW1zIHRvIGJlIHJlLWFkanVkaWNhdGVkLCBpZiBub25lIHNwZWNpZmllZCB0aGVuIHRoZSBlbnRpcmUgc3VibWlzc2lvbiBpcyByZS1hZGp1ZGljYXRlZC5cclxuICAgKi9cclxuICBpdGVtPzogZmhpci5Qcm9jZXNzUmVxdWVzdEl0ZW1BcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5hbWVzIG9mIHJlc291cmNlIHR5cGVzIHRvIGluY2x1ZGUuXHJcbiAgICovXHJcbiAgaW5jbHVkZT86IGZoaXIuRmhpclN0cmluZ1tdfChzdHJpbmd8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFByb2Nlc3NSZXF1ZXN0LmluY2x1ZGVcclxuICAgKi9cclxuICBfaW5jbHVkZT86KGZoaXIuRmhpckVsZW1lbnRBcmdzfG51bGwpW107XHJcbiAgLyoqXHJcbiAgICogTmFtZXMgb2YgcmVzb3VyY2UgdHlwZXMgdG8gZXhjbHVkZS5cclxuICAgKi9cclxuICBleGNsdWRlPzogZmhpci5GaGlyU3RyaW5nW118KHN0cmluZ3xudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUHJvY2Vzc1JlcXVlc3QuZXhjbHVkZVxyXG4gICAqL1xyXG4gIF9leGNsdWRlPzooZmhpci5GaGlyRWxlbWVudEFyZ3N8bnVsbClbXTtcclxuICAvKipcclxuICAgKiBBIHBlcmlvZCBvZiB0aW1lIGR1cmluZyB3aGljaCB0aGUgZnVsZmlsbGluZyByZXNvdXJjZXMgd291bGQgaGF2ZSBiZWVuIGNyZWF0ZWQuXHJcbiAgICovXHJcbiAgcGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgcmVzb3VyY2UgcHJvdmlkZXMgdGhlIHRhcmdldCwgcmVxdWVzdCBhbmQgcmVzcG9uc2UsIGFuZCBhY3Rpb24gZGV0YWlscyBmb3IgYW4gYWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBieSB0aGUgdGFyZ2V0IG9uIG9yIGFib3V0IGV4aXN0aW5nIHJlc291cmNlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9jZXNzUmVxdWVzdCBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUHJvY2Vzc1JlcXVlc3QnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiUHJvY2Vzc1JlcXVlc3RcIjtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiBwcm9jZXNzaW5nIGFjdGlvbiBiZWluZyByZXF1ZXN0ZWQsIGZvciBleGFtcGxlIFJldmVyc2FsLCBSZWFkanVkaWNhdGlvbiwgU3RhdHVzUmVxdWVzdCxQZW5kZWRSZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhY3Rpb246IGZoaXIuRmhpckNvZGU8QWN0aW9ubGlzdENvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBQcm9jZXNzUmVxdWVzdCBidXNpbmVzcyBpZGVudGlmaWVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgc3R5bGUgb2YgcmVzb3VyY2UgY29udGVudHMuIFRoaXMgc2hvdWxkIGJlIG1hcHBlZCB0byB0aGUgYWxsb3dhYmxlIHByb2ZpbGVzIGZvciB0aGlzIGFuZCBzdXBwb3J0aW5nIHJlc291cmNlcy5cclxuICAgKi9cclxuICBwdWJsaWMgcnVsZXNldD86IGZoaXIuQ29kaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBLbm93bGVkZ2Ugb2YgdGhlIG9yaWdpbmFsIHZlcnNpb24gY2FuIGluZm9ybSB0aGUgcHJvY2Vzc2luZyBvZiB0aGlzIGluc3RhbmNlIHNvIHRoYXQgaW5mb3JtYXRpb24gd2hpY2ggaXMgcHJvY2Vzc2FibGUgYnkgdGhlIG9yaWdpbmF0aW5nIHN5c3RlbSBtYXkgYmUgZ2VuZXJhdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvcmlnaW5hbFJ1bGVzZXQ/OiBmaGlyLkNvZGluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgd2hlbiB0aGlzIHJlc291cmNlIHdhcyBjcmVhdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjcmVhdGVkPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvcmdhbml6YXRpb24gd2hpY2ggaXMgdGhlIHRhcmdldCBvZiB0aGUgcmVxdWVzdC5cclxuICAgKi9cclxuICBwdWJsaWMgdGFyZ2V0PzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwcmFjdGl0aW9uZXIgd2hvIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgYWN0aW9uIHNwZWNpZmllZCBpbiB0aGlzZSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwcm92aWRlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgb3JnYW5pemF0aW9uIHdoaWNoIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgYWN0aW9uIHNwZWNjaWZpZWQgaW4gdGhpc2UgcmVxdWVzdC5cclxuICAgKi9cclxuICBwdWJsaWMgb3JnYW5pemF0aW9uPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJlZmVyZW5jZSBvZiByZXNvdXJjZSB3aGljaCBpcyB0aGUgdGFyZ2V0IG9yIHN1YmplY3Qgb2YgdGhpcyBhY3Rpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHJlcXVlc3Q/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVmZXJlbmNlIG9mIGEgcHJpb3IgcmVzcG9uc2UgdG8gcmVzb3VyY2Ugd2hpY2ggaXMgdGhlIHRhcmdldCBvciBzdWJqZWN0IG9mIHRoaXMgYWN0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXNwb25zZT86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTb21lIHJlc291cmNlcyBtdXN0IG5vdCBzaW1wbHkgYmUgcmV2ZXJzZWQgaW4gYSBwcm9jZXNzaW5nIG9yIGFjY291bnRpbmcgc2Vuc2UgYnV0IHJhdGhlciBtdXN0IGhhdmUgYWxsIGhpc3RvcnkgcmVtb3ZlZCwgc3VjaCBhcyB0aGUgYWNjaWRlbnRhbCBzdWJtaXNzaW9uIG9mIHNlbnNpdGl2ZSBhbmQvb3Igd3JvbmcgaW5mb3JtYXRpb24uIElmIHRoZSByZWNlaXZlciBjYW5ub3QgY29tcGx5IHdpdGggYSBOdWxsaWZ5IHJlcXVlc3QgdGhlbiB0aGV5IG11c3QgcmVqZWN0IHRoZSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBudWxsaWZ5PzogZmhpci5GaGlyQm9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gc3VwcGx5IHdoaWNoIGF1dGhlbnRpY2F0ZXMgdGhlIHByb2Nlc3MuXHJcbiAgICovXHJcbiAgcHVibGljIHJlZmVyZW5jZT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogTGlzdCBvZiB0b3AgbGV2ZWwgaXRlbXMgdG8gYmUgcmUtYWRqdWRpY2F0ZWQsIGlmIG5vbmUgc3BlY2lmaWVkIHRoZW4gdGhlIGVudGlyZSBzdWJtaXNzaW9uIGlzIHJlLWFkanVkaWNhdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpdGVtOiBmaGlyLlByb2Nlc3NSZXF1ZXN0SXRlbVtdO1xyXG4gIC8qKlxyXG4gICAqIE5hbWVzIG9mIHJlc291cmNlIHR5cGVzIHRvIGluY2x1ZGUuXHJcbiAgICovXHJcbiAgcHVibGljIGluY2x1ZGU6IGZoaXIuRmhpclN0cmluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIE5hbWVzIG9mIHJlc291cmNlIHR5cGVzIHRvIGV4Y2x1ZGUuXHJcbiAgICovXHJcbiAgcHVibGljIGV4Y2x1ZGU6IGZoaXIuRmhpclN0cmluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIEEgcGVyaW9kIG9mIHRpbWUgZHVyaW5nIHdoaWNoIHRoZSBmdWxmaWxsaW5nIHJlc291cmNlcyB3b3VsZCBoYXZlIGJlZW4gY3JlYXRlZC5cclxuICAgKi9cclxuICBwdWJsaWMgcGVyaW9kPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFByb2Nlc3NSZXF1ZXN0IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8UHJvY2Vzc1JlcXVlc3RBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnUHJvY2Vzc1JlcXVlc3QnO1xyXG4gICAgaWYgKHNvdXJjZVsnYWN0aW9uJ10pIHsgdGhpcy5hY3Rpb24gPSBuZXcgZmhpci5GaGlyQ29kZTxBY3Rpb25saXN0Q29kZVR5cGU+KHt2YWx1ZTogc291cmNlLmFjdGlvbn0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5hY3Rpb24gPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfYWN0aW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMuYWN0aW9uKSB7IHRoaXMuYWN0aW9uLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2FjdGlvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmFjdGlvbiA9IG5ldyBmaGlyLkZoaXJDb2RlPEFjdGlvbmxpc3RDb2RlVHlwZT4oc291cmNlLl9hY3Rpb24gYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3J1bGVzZXQnXSkgeyB0aGlzLnJ1bGVzZXQgPSBuZXcgZmhpci5Db2Rpbmcoc291cmNlLnJ1bGVzZXQpOyB9XHJcbiAgICBpZiAoc291cmNlWydvcmlnaW5hbFJ1bGVzZXQnXSkgeyB0aGlzLm9yaWdpbmFsUnVsZXNldCA9IG5ldyBmaGlyLkNvZGluZyhzb3VyY2Uub3JpZ2luYWxSdWxlc2V0KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY3JlYXRlZCddKSB7IHRoaXMuY3JlYXRlZCA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5jcmVhdGVkfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jcmVhdGVkJ10pIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZCkgeyB0aGlzLmNyZWF0ZWQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY3JlYXRlZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNyZWF0ZWQgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9jcmVhdGVkIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3RhcmdldCddKSB7IHRoaXMudGFyZ2V0ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS50YXJnZXQpOyB9XHJcbiAgICBpZiAoc291cmNlWydwcm92aWRlciddKSB7IHRoaXMucHJvdmlkZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnByb3ZpZGVyKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnb3JnYW5pemF0aW9uJ10pIHsgdGhpcy5vcmdhbml6YXRpb24gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLm9yZ2FuaXphdGlvbik7IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlcXVlc3QnXSkgeyB0aGlzLnJlcXVlc3QgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnJlcXVlc3QpOyB9XHJcbiAgICBpZiAoc291cmNlWydyZXNwb25zZSddKSB7IHRoaXMucmVzcG9uc2UgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnJlc3BvbnNlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnbnVsbGlmeSddKSB7IHRoaXMubnVsbGlmeSA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHt2YWx1ZTogc291cmNlLm51bGxpZnl9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX251bGxpZnknXSkge1xyXG4gICAgICBpZiAodGhpcy5udWxsaWZ5KSB7IHRoaXMubnVsbGlmeS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9udWxsaWZ5ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubnVsbGlmeSA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHNvdXJjZS5fbnVsbGlmeSBhcyBQYXJ0aWFsPGZoaXIuRmhpckJvb2xlYW5BcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3JlZmVyZW5jZSddKSB7IHRoaXMucmVmZXJlbmNlID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5yZWZlcmVuY2V9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3JlZmVyZW5jZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnJlZmVyZW5jZSkgeyB0aGlzLnJlZmVyZW5jZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9yZWZlcmVuY2UhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5yZWZlcmVuY2UgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fcmVmZXJlbmNlIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydpdGVtJ10pIHsgdGhpcy5pdGVtID0gc291cmNlLml0ZW0ubWFwKCh4KSA9PiBuZXcgZmhpci5Qcm9jZXNzUmVxdWVzdEl0ZW0oeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pdGVtID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2luY2x1ZGUnXSkgeyB0aGlzLmluY2x1ZGUgPSBzb3VyY2UuaW5jbHVkZS5tYXAoKHgpID0+IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiB4fSkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pbmNsdWRlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ19pbmNsdWRlJ10pIHtcclxuICAgICAgc291cmNlLl9pbmNsdWRlLmZvckVhY2goKHgsaSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmluY2x1ZGUubGVuZ3RoID49IGkpIHsgaWYgKHgpIHsgdGhpcy5pbmNsdWRlW2ldLmFkZEV4dGVuZGVkUHJvcGVydGllcyh4KTsgfSB9XHJcbiAgICAgICAgZWxzZSB7IGlmICh4KSB7IHRoaXMuaW5jbHVkZS5wdXNoKG5ldyBmaGlyLkZoaXJTdHJpbmcoeCBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KSk7IH0gfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2V4Y2x1ZGUnXSkgeyB0aGlzLmV4Y2x1ZGUgPSBzb3VyY2UuZXhjbHVkZS5tYXAoKHgpID0+IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiB4fSkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5leGNsdWRlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ19leGNsdWRlJ10pIHtcclxuICAgICAgc291cmNlLl9leGNsdWRlLmZvckVhY2goKHgsaSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmV4Y2x1ZGUubGVuZ3RoID49IGkpIHsgaWYgKHgpIHsgdGhpcy5leGNsdWRlW2ldLmFkZEV4dGVuZGVkUHJvcGVydGllcyh4KTsgfSB9XHJcbiAgICAgICAgZWxzZSB7IGlmICh4KSB7IHRoaXMuZXhjbHVkZS5wdXNoKG5ldyBmaGlyLkZoaXJTdHJpbmcoeCBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KSk7IH0gfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3BlcmlvZCddKSB7IHRoaXMucGVyaW9kID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS5wZXJpb2QpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnUHJvY2Vzc1JlcXVlc3QnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTVignYWN0aW9uJyxleHAsJ0FjdGlvbmxpc3QnLEFjdGlvbmxpc3RWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncnVsZXNldCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnb3JpZ2luYWxSdWxlc2V0JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdjcmVhdGVkJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd0YXJnZXQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3Byb3ZpZGVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdvcmdhbml6YXRpb24nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3JlcXVlc3QnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3Jlc3BvbnNlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdudWxsaWZ5JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdyZWZlcmVuY2UnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2l0ZW0nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2luY2x1ZGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2V4Y2x1ZGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3BlcmlvZCcsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=