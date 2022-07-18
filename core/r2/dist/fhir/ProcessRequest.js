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
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'ProcessRequest.item';
        }
        this.vRS('sequenceLinkId', exp);
        return issues;
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
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'ProcessRequest';
        }
        this.vRS('resourceType', exp);
        this.vRSV('action', exp, 'Actionlist', ActionlistVsValidation, 'r');
        this.vOA('identifier', exp);
        this.vOS('ruleset', exp);
        this.vOS('originalRuleset', exp);
        this.vOS('created', exp);
        this.vOS('target', exp);
        this.vOS('provider', exp);
        this.vOS('organization', exp);
        this.vOS('request', exp);
        this.vOS('response', exp);
        this.vOS('nullify', exp);
        this.vOS('reference', exp);
        this.vOA('item', exp);
        this.vOA('include', exp);
        this.vOA('exclude', exp);
        this.vOS('period', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
ProcessRequest._fts_dataType = 'ProcessRequest';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc1JlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1Byb2Nlc3NSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUVoQyxPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUluQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFlcEY7O0dBRUc7QUFDSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsSUFBSSxDQUFDLGVBQWU7SUFTMUQ7O09BRUc7SUFDSCxZQUFZLFNBQXlDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQy9GLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxjQUFjLEVBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDeEc7WUFBRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUFFO1FBQ3BDLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDN0IsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUFFLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLGVBQWdCLENBQUMsQ0FBQzthQUFFO2lCQUMzRjtnQkFBRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsZUFBZ0QsQ0FBQyxDQUFDO2FBQUU7U0FDOUc7SUFDSCxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxNQUFNLEdBQW1CLEtBQUss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QUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBeEpEOztHQUVHO0FBQzZCLDRCQUFhLEdBQVUsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IFByb2Nlc3NSZXF1ZXN0XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBBY3Rpb25saXN0Q29kZXMsICBBY3Rpb25saXN0Q29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0FjdGlvbmxpc3RDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQWN0aW9ubGlzdFZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQWN0aW9ubGlzdFZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBQcm9jZXNzUmVxdWVzdEl0ZW0gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvY2Vzc1JlcXVlc3RJdGVtQXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogQSBzZXJ2aWNlIGxpbmUgbnVtYmVyLlxyXG4gICAqL1xyXG4gIHNlcXVlbmNlTGlua0lkOiBmaGlyLkZoaXJJbnRlZ2VyfG51bWJlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFByb2Nlc3NSZXF1ZXN0Lml0ZW0uc2VxdWVuY2VMaW5rSWRcclxuICAgKi9cclxuICBfc2VxdWVuY2VMaW5rSWQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogTGlzdCBvZiB0b3AgbGV2ZWwgaXRlbXMgdG8gYmUgcmUtYWRqdWRpY2F0ZWQsIGlmIG5vbmUgc3BlY2lmaWVkIHRoZW4gdGhlIGVudGlyZSBzdWJtaXNzaW9uIGlzIHJlLWFkanVkaWNhdGVkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByb2Nlc3NSZXF1ZXN0SXRlbSBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1Byb2Nlc3NSZXF1ZXN0SXRlbSc7XHJcbiAgLyoqXHJcbiAgICogQSBzZXJ2aWNlIGxpbmUgbnVtYmVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXF1ZW5jZUxpbmtJZDogZmhpci5GaGlySW50ZWdlcnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFByb2Nlc3NSZXF1ZXN0SXRlbSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFByb2Nlc3NSZXF1ZXN0SXRlbUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydzZXF1ZW5jZUxpbmtJZCddKSB7IHRoaXMuc2VxdWVuY2VMaW5rSWQgPSBuZXcgZmhpci5GaGlySW50ZWdlcih7dmFsdWU6IHNvdXJjZS5zZXF1ZW5jZUxpbmtJZH0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zZXF1ZW5jZUxpbmtJZCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zZXF1ZW5jZUxpbmtJZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLnNlcXVlbmNlTGlua0lkKSB7IHRoaXMuc2VxdWVuY2VMaW5rSWQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc2VxdWVuY2VMaW5rSWQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zZXF1ZW5jZUxpbmtJZCA9IG5ldyBmaGlyLkZoaXJJbnRlZ2VyKHNvdXJjZS5fc2VxdWVuY2VMaW5rSWQgYXMgUGFydGlhbDxmaGlyLkZoaXJJbnRlZ2VyQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnUHJvY2Vzc1JlcXVlc3QuaXRlbScgfVxyXG4gICAgdGhpcy52UlMoJ3NlcXVlbmNlTGlua0lkJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgUHJvY2Vzc1JlcXVlc3QgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvY2Vzc1JlcXVlc3RBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJQcm9jZXNzUmVxdWVzdFwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiBwcm9jZXNzaW5nIGFjdGlvbiBiZWluZyByZXF1ZXN0ZWQsIGZvciBleGFtcGxlIFJldmVyc2FsLCBSZWFkanVkaWNhdGlvbiwgU3RhdHVzUmVxdWVzdCxQZW5kZWRSZXF1ZXN0LlxyXG4gICAqL1xyXG4gIGFjdGlvbjogZmhpci5GaGlyQ29kZTxBY3Rpb25saXN0Q29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFByb2Nlc3NSZXF1ZXN0LmFjdGlvblxyXG4gICAqL1xyXG4gIF9hY3Rpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBQcm9jZXNzUmVxdWVzdCBidXNpbmVzcyBpZGVudGlmaWVyLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBzdHlsZSBvZiByZXNvdXJjZSBjb250ZW50cy4gVGhpcyBzaG91bGQgYmUgbWFwcGVkIHRvIHRoZSBhbGxvd2FibGUgcHJvZmlsZXMgZm9yIHRoaXMgYW5kIHN1cHBvcnRpbmcgcmVzb3VyY2VzLlxyXG4gICAqL1xyXG4gIHJ1bGVzZXQ/OiBmaGlyLkNvZGluZ0FyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEtub3dsZWRnZSBvZiB0aGUgb3JpZ2luYWwgdmVyc2lvbiBjYW4gaW5mb3JtIHRoZSBwcm9jZXNzaW5nIG9mIHRoaXMgaW5zdGFuY2Ugc28gdGhhdCBpbmZvcm1hdGlvbiB3aGljaCBpcyBwcm9jZXNzYWJsZSBieSB0aGUgb3JpZ2luYXRpbmcgc3lzdGVtIG1heSBiZSBnZW5lcmF0ZWQuXHJcbiAgICovXHJcbiAgb3JpZ2luYWxSdWxlc2V0PzogZmhpci5Db2RpbmdBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB3aGVuIHRoaXMgcmVzb3VyY2Ugd2FzIGNyZWF0ZWQuXHJcbiAgICovXHJcbiAgY3JlYXRlZD86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFByb2Nlc3NSZXF1ZXN0LmNyZWF0ZWRcclxuICAgKi9cclxuICBfY3JlYXRlZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIG9yZ2FuaXphdGlvbiB3aGljaCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHRhcmdldD86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHByYWN0aXRpb25lciB3aG8gaXMgcmVzcG9uc2libGUgZm9yIHRoZSBhY3Rpb24gc3BlY2lmaWVkIGluIHRoaXNlIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgcHJvdmlkZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvcmdhbml6YXRpb24gd2hpY2ggaXMgcmVzcG9uc2libGUgZm9yIHRoZSBhY3Rpb24gc3BlY2NpZmllZCBpbiB0aGlzZSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIG9yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVmZXJlbmNlIG9mIHJlc291cmNlIHdoaWNoIGlzIHRoZSB0YXJnZXQgb3Igc3ViamVjdCBvZiB0aGlzIGFjdGlvbi5cclxuICAgKi9cclxuICByZXF1ZXN0PzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBSZWZlcmVuY2Ugb2YgYSBwcmlvciByZXNwb25zZSB0byByZXNvdXJjZSB3aGljaCBpcyB0aGUgdGFyZ2V0IG9yIHN1YmplY3Qgb2YgdGhpcyBhY3Rpb24uXHJcbiAgICovXHJcbiAgcmVzcG9uc2U/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFNvbWUgcmVzb3VyY2VzIG11c3Qgbm90IHNpbXBseSBiZSByZXZlcnNlZCBpbiBhIHByb2Nlc3Npbmcgb3IgYWNjb3VudGluZyBzZW5zZSBidXQgcmF0aGVyIG11c3QgaGF2ZSBhbGwgaGlzdG9yeSByZW1vdmVkLCBzdWNoIGFzIHRoZSBhY2NpZGVudGFsIHN1Ym1pc3Npb24gb2Ygc2Vuc2l0aXZlIGFuZC9vciB3cm9uZyBpbmZvcm1hdGlvbi4gSWYgdGhlIHJlY2VpdmVyIGNhbm5vdCBjb21wbHkgd2l0aCBhIE51bGxpZnkgcmVxdWVzdCB0aGVuIHRoZXkgbXVzdCByZWplY3QgdGhlIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgbnVsbGlmeT86IGZoaXIuRmhpckJvb2xlYW58Ym9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFByb2Nlc3NSZXF1ZXN0Lm51bGxpZnlcclxuICAgKi9cclxuICBfbnVsbGlmeT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gc3VwcGx5IHdoaWNoIGF1dGhlbnRpY2F0ZXMgdGhlIHByb2Nlc3MuXHJcbiAgICovXHJcbiAgcmVmZXJlbmNlPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFByb2Nlc3NSZXF1ZXN0LnJlZmVyZW5jZVxyXG4gICAqL1xyXG4gIF9yZWZlcmVuY2U/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIExpc3Qgb2YgdG9wIGxldmVsIGl0ZW1zIHRvIGJlIHJlLWFkanVkaWNhdGVkLCBpZiBub25lIHNwZWNpZmllZCB0aGVuIHRoZSBlbnRpcmUgc3VibWlzc2lvbiBpcyByZS1hZGp1ZGljYXRlZC5cclxuICAgKi9cclxuICBpdGVtPzogZmhpci5Qcm9jZXNzUmVxdWVzdEl0ZW1BcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5hbWVzIG9mIHJlc291cmNlIHR5cGVzIHRvIGluY2x1ZGUuXHJcbiAgICovXHJcbiAgaW5jbHVkZT86IGZoaXIuRmhpclN0cmluZ1tdfChzdHJpbmd8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFByb2Nlc3NSZXF1ZXN0LmluY2x1ZGVcclxuICAgKi9cclxuICBfaW5jbHVkZT86KGZoaXIuRmhpckVsZW1lbnRBcmdzfG51bGwpW107XHJcbiAgLyoqXHJcbiAgICogTmFtZXMgb2YgcmVzb3VyY2UgdHlwZXMgdG8gZXhjbHVkZS5cclxuICAgKi9cclxuICBleGNsdWRlPzogZmhpci5GaGlyU3RyaW5nW118KHN0cmluZ3xudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUHJvY2Vzc1JlcXVlc3QuZXhjbHVkZVxyXG4gICAqL1xyXG4gIF9leGNsdWRlPzooZmhpci5GaGlyRWxlbWVudEFyZ3N8bnVsbClbXTtcclxuICAvKipcclxuICAgKiBBIHBlcmlvZCBvZiB0aW1lIGR1cmluZyB3aGljaCB0aGUgZnVsZmlsbGluZyByZXNvdXJjZXMgd291bGQgaGF2ZSBiZWVuIGNyZWF0ZWQuXHJcbiAgICovXHJcbiAgcGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgcmVzb3VyY2UgcHJvdmlkZXMgdGhlIHRhcmdldCwgcmVxdWVzdCBhbmQgcmVzcG9uc2UsIGFuZCBhY3Rpb24gZGV0YWlscyBmb3IgYW4gYWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBieSB0aGUgdGFyZ2V0IG9uIG9yIGFib3V0IGV4aXN0aW5nIHJlc291cmNlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9jZXNzUmVxdWVzdCBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUHJvY2Vzc1JlcXVlc3QnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiUHJvY2Vzc1JlcXVlc3RcIjtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiBwcm9jZXNzaW5nIGFjdGlvbiBiZWluZyByZXF1ZXN0ZWQsIGZvciBleGFtcGxlIFJldmVyc2FsLCBSZWFkanVkaWNhdGlvbiwgU3RhdHVzUmVxdWVzdCxQZW5kZWRSZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhY3Rpb246IGZoaXIuRmhpckNvZGU8QWN0aW9ubGlzdENvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBQcm9jZXNzUmVxdWVzdCBidXNpbmVzcyBpZGVudGlmaWVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgc3R5bGUgb2YgcmVzb3VyY2UgY29udGVudHMuIFRoaXMgc2hvdWxkIGJlIG1hcHBlZCB0byB0aGUgYWxsb3dhYmxlIHByb2ZpbGVzIGZvciB0aGlzIGFuZCBzdXBwb3J0aW5nIHJlc291cmNlcy5cclxuICAgKi9cclxuICBwdWJsaWMgcnVsZXNldD86IGZoaXIuQ29kaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBLbm93bGVkZ2Ugb2YgdGhlIG9yaWdpbmFsIHZlcnNpb24gY2FuIGluZm9ybSB0aGUgcHJvY2Vzc2luZyBvZiB0aGlzIGluc3RhbmNlIHNvIHRoYXQgaW5mb3JtYXRpb24gd2hpY2ggaXMgcHJvY2Vzc2FibGUgYnkgdGhlIG9yaWdpbmF0aW5nIHN5c3RlbSBtYXkgYmUgZ2VuZXJhdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvcmlnaW5hbFJ1bGVzZXQ/OiBmaGlyLkNvZGluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgd2hlbiB0aGlzIHJlc291cmNlIHdhcyBjcmVhdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjcmVhdGVkPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvcmdhbml6YXRpb24gd2hpY2ggaXMgdGhlIHRhcmdldCBvZiB0aGUgcmVxdWVzdC5cclxuICAgKi9cclxuICBwdWJsaWMgdGFyZ2V0PzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwcmFjdGl0aW9uZXIgd2hvIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgYWN0aW9uIHNwZWNpZmllZCBpbiB0aGlzZSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwcm92aWRlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgb3JnYW5pemF0aW9uIHdoaWNoIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgYWN0aW9uIHNwZWNjaWZpZWQgaW4gdGhpc2UgcmVxdWVzdC5cclxuICAgKi9cclxuICBwdWJsaWMgb3JnYW5pemF0aW9uPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJlZmVyZW5jZSBvZiByZXNvdXJjZSB3aGljaCBpcyB0aGUgdGFyZ2V0IG9yIHN1YmplY3Qgb2YgdGhpcyBhY3Rpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHJlcXVlc3Q/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVmZXJlbmNlIG9mIGEgcHJpb3IgcmVzcG9uc2UgdG8gcmVzb3VyY2Ugd2hpY2ggaXMgdGhlIHRhcmdldCBvciBzdWJqZWN0IG9mIHRoaXMgYWN0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXNwb25zZT86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTb21lIHJlc291cmNlcyBtdXN0IG5vdCBzaW1wbHkgYmUgcmV2ZXJzZWQgaW4gYSBwcm9jZXNzaW5nIG9yIGFjY291bnRpbmcgc2Vuc2UgYnV0IHJhdGhlciBtdXN0IGhhdmUgYWxsIGhpc3RvcnkgcmVtb3ZlZCwgc3VjaCBhcyB0aGUgYWNjaWRlbnRhbCBzdWJtaXNzaW9uIG9mIHNlbnNpdGl2ZSBhbmQvb3Igd3JvbmcgaW5mb3JtYXRpb24uIElmIHRoZSByZWNlaXZlciBjYW5ub3QgY29tcGx5IHdpdGggYSBOdWxsaWZ5IHJlcXVlc3QgdGhlbiB0aGV5IG11c3QgcmVqZWN0IHRoZSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBudWxsaWZ5PzogZmhpci5GaGlyQm9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gc3VwcGx5IHdoaWNoIGF1dGhlbnRpY2F0ZXMgdGhlIHByb2Nlc3MuXHJcbiAgICovXHJcbiAgcHVibGljIHJlZmVyZW5jZT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogTGlzdCBvZiB0b3AgbGV2ZWwgaXRlbXMgdG8gYmUgcmUtYWRqdWRpY2F0ZWQsIGlmIG5vbmUgc3BlY2lmaWVkIHRoZW4gdGhlIGVudGlyZSBzdWJtaXNzaW9uIGlzIHJlLWFkanVkaWNhdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpdGVtOiBmaGlyLlByb2Nlc3NSZXF1ZXN0SXRlbVtdO1xyXG4gIC8qKlxyXG4gICAqIE5hbWVzIG9mIHJlc291cmNlIHR5cGVzIHRvIGluY2x1ZGUuXHJcbiAgICovXHJcbiAgcHVibGljIGluY2x1ZGU6IGZoaXIuRmhpclN0cmluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIE5hbWVzIG9mIHJlc291cmNlIHR5cGVzIHRvIGV4Y2x1ZGUuXHJcbiAgICovXHJcbiAgcHVibGljIGV4Y2x1ZGU6IGZoaXIuRmhpclN0cmluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIEEgcGVyaW9kIG9mIHRpbWUgZHVyaW5nIHdoaWNoIHRoZSBmdWxmaWxsaW5nIHJlc291cmNlcyB3b3VsZCBoYXZlIGJlZW4gY3JlYXRlZC5cclxuICAgKi9cclxuICBwdWJsaWMgcGVyaW9kPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFByb2Nlc3NSZXF1ZXN0IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8UHJvY2Vzc1JlcXVlc3RBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnUHJvY2Vzc1JlcXVlc3QnO1xyXG4gICAgaWYgKHNvdXJjZVsnYWN0aW9uJ10pIHsgdGhpcy5hY3Rpb24gPSBuZXcgZmhpci5GaGlyQ29kZTxBY3Rpb25saXN0Q29kZVR5cGU+KHt2YWx1ZTogc291cmNlLmFjdGlvbn0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5hY3Rpb24gPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfYWN0aW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMuYWN0aW9uKSB7IHRoaXMuYWN0aW9uLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2FjdGlvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmFjdGlvbiA9IG5ldyBmaGlyLkZoaXJDb2RlPEFjdGlvbmxpc3RDb2RlVHlwZT4oc291cmNlLl9hY3Rpb24gYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3J1bGVzZXQnXSkgeyB0aGlzLnJ1bGVzZXQgPSBuZXcgZmhpci5Db2Rpbmcoc291cmNlLnJ1bGVzZXQpOyB9XHJcbiAgICBpZiAoc291cmNlWydvcmlnaW5hbFJ1bGVzZXQnXSkgeyB0aGlzLm9yaWdpbmFsUnVsZXNldCA9IG5ldyBmaGlyLkNvZGluZyhzb3VyY2Uub3JpZ2luYWxSdWxlc2V0KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY3JlYXRlZCddKSB7IHRoaXMuY3JlYXRlZCA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5jcmVhdGVkfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jcmVhdGVkJ10pIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZCkgeyB0aGlzLmNyZWF0ZWQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY3JlYXRlZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNyZWF0ZWQgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9jcmVhdGVkIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3RhcmdldCddKSB7IHRoaXMudGFyZ2V0ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS50YXJnZXQpOyB9XHJcbiAgICBpZiAoc291cmNlWydwcm92aWRlciddKSB7IHRoaXMucHJvdmlkZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnByb3ZpZGVyKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnb3JnYW5pemF0aW9uJ10pIHsgdGhpcy5vcmdhbml6YXRpb24gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLm9yZ2FuaXphdGlvbik7IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlcXVlc3QnXSkgeyB0aGlzLnJlcXVlc3QgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnJlcXVlc3QpOyB9XHJcbiAgICBpZiAoc291cmNlWydyZXNwb25zZSddKSB7IHRoaXMucmVzcG9uc2UgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnJlc3BvbnNlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnbnVsbGlmeSddKSB7IHRoaXMubnVsbGlmeSA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHt2YWx1ZTogc291cmNlLm51bGxpZnl9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX251bGxpZnknXSkge1xyXG4gICAgICBpZiAodGhpcy5udWxsaWZ5KSB7IHRoaXMubnVsbGlmeS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9udWxsaWZ5ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubnVsbGlmeSA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHNvdXJjZS5fbnVsbGlmeSBhcyBQYXJ0aWFsPGZoaXIuRmhpckJvb2xlYW5BcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3JlZmVyZW5jZSddKSB7IHRoaXMucmVmZXJlbmNlID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5yZWZlcmVuY2V9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3JlZmVyZW5jZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnJlZmVyZW5jZSkgeyB0aGlzLnJlZmVyZW5jZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9yZWZlcmVuY2UhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5yZWZlcmVuY2UgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fcmVmZXJlbmNlIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydpdGVtJ10pIHsgdGhpcy5pdGVtID0gc291cmNlLml0ZW0ubWFwKCh4KSA9PiBuZXcgZmhpci5Qcm9jZXNzUmVxdWVzdEl0ZW0oeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pdGVtID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2luY2x1ZGUnXSkgeyB0aGlzLmluY2x1ZGUgPSBzb3VyY2UuaW5jbHVkZS5tYXAoKHgpID0+IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiB4fSkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pbmNsdWRlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ19pbmNsdWRlJ10pIHtcclxuICAgICAgc291cmNlLl9pbmNsdWRlLmZvckVhY2goKHgsaSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmluY2x1ZGUubGVuZ3RoID49IGkpIHsgaWYgKHgpIHsgdGhpcy5pbmNsdWRlW2ldLmFkZEV4dGVuZGVkUHJvcGVydGllcyh4KTsgfSB9XHJcbiAgICAgICAgZWxzZSB7IGlmICh4KSB7IHRoaXMuaW5jbHVkZS5wdXNoKG5ldyBmaGlyLkZoaXJTdHJpbmcoeCBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KSk7IH0gfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2V4Y2x1ZGUnXSkgeyB0aGlzLmV4Y2x1ZGUgPSBzb3VyY2UuZXhjbHVkZS5tYXAoKHgpID0+IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiB4fSkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5leGNsdWRlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ19leGNsdWRlJ10pIHtcclxuICAgICAgc291cmNlLl9leGNsdWRlLmZvckVhY2goKHgsaSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmV4Y2x1ZGUubGVuZ3RoID49IGkpIHsgaWYgKHgpIHsgdGhpcy5leGNsdWRlW2ldLmFkZEV4dGVuZGVkUHJvcGVydGllcyh4KTsgfSB9XHJcbiAgICAgICAgZWxzZSB7IGlmICh4KSB7IHRoaXMuZXhjbHVkZS5wdXNoKG5ldyBmaGlyLkZoaXJTdHJpbmcoeCBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KSk7IH0gfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3BlcmlvZCddKSB7IHRoaXMucGVyaW9kID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS5wZXJpb2QpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnUHJvY2Vzc1JlcXVlc3QnIH1cclxuICAgIHRoaXMudlJTKCdyZXNvdXJjZVR5cGUnLGV4cClcclxuICAgIHRoaXMudlJTVignYWN0aW9uJyxleHAsJ0FjdGlvbmxpc3QnLEFjdGlvbmxpc3RWc1ZhbGlkYXRpb24sJ3InKVxyXG4gICAgdGhpcy52T0EoJ2lkZW50aWZpZXInLGV4cClcclxuICAgIHRoaXMudk9TKCdydWxlc2V0JyxleHApXHJcbiAgICB0aGlzLnZPUygnb3JpZ2luYWxSdWxlc2V0JyxleHApXHJcbiAgICB0aGlzLnZPUygnY3JlYXRlZCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3RhcmdldCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3Byb3ZpZGVyJyxleHApXHJcbiAgICB0aGlzLnZPUygnb3JnYW5pemF0aW9uJyxleHApXHJcbiAgICB0aGlzLnZPUygncmVxdWVzdCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3Jlc3BvbnNlJyxleHApXHJcbiAgICB0aGlzLnZPUygnbnVsbGlmeScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3JlZmVyZW5jZScsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2l0ZW0nLGV4cClcclxuICAgIHRoaXMudk9BKCdpbmNsdWRlJyxleHApXHJcbiAgICB0aGlzLnZPQSgnZXhjbHVkZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3BlcmlvZCcsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19