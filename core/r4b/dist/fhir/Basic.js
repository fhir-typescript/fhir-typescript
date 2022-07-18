// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: Basic
import * as fhir from '../fhir.js';
/**
 * Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.
 */
export class Basic extends fhir.DomainResource {
    /**
     * Default constructor for Basic - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Basic';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        else {
            this.code = null;
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        if (source['created']) {
            this.created = new fhir.FhirDate({ value: source.created });
        }
        if (source['_created']) {
            if (this.created) {
                this.created.addExtendedProperties(source._created);
            }
            else {
                this.created = new fhir.FhirDate(source._created);
            }
        }
        if (source['author']) {
            this.author = new fhir.Reference(source.author);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Basic';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vRS('code', exp);
        this.vOS('subject', exp);
        this.vOS('created', exp);
        this.vOS('author', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Basic._fts_dataType = 'Basic';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0Jhc2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLHVCQUF1QjtBQUV2QixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQXlDbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sS0FBTSxTQUFRLElBQUksQ0FBQyxjQUFjO0lBOEI1Qzs7T0FFRztJQUNILFlBQVksU0FBNEIsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDbEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDaEc7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQUU7YUFDckU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzFCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDN0UsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3JGLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxRQUFTLENBQUMsQ0FBQzthQUFFO2lCQUN0RTtnQkFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBc0MsQ0FBQyxDQUFDO2FBQUU7U0FDMUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUFFO0lBQzVFLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxPQUFPLENBQUE7U0FBRTtRQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQTVERDs7R0FFRztBQUM2QixtQkFBYSxHQUFVLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IEJhc2ljXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBCYXNpY1Jlc291cmNlVHlwZUNvZGVzLCAgQmFzaWNSZXNvdXJjZVR5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQmFzaWNSZXNvdXJjZVR5cGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQmFzaWNSZXNvdXJjZVR5cGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0Jhc2ljUmVzb3VyY2VUeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEJhc2ljIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2ljQXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiQmFzaWNcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllciBhc3NpZ25lZCB0byB0aGUgcmVzb3VyY2UgZm9yIGJ1c2luZXNzIHB1cnBvc2VzLCBvdXRzaWRlIHRoZSBjb250ZXh0IG9mIEZISVIuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQmVjYXVzZSByZXNvdXJjZSByZWZlcmVuY2VzIHdpbGwgb25seSBiZSBhYmxlIHRvIGluZGljYXRlICdCYXNpYycsIHRoZSB0eXBlIG9mIHJlZmVyZW5jZSB3aWxsIG5lZWQgdG8gYmUgc3BlY2lmaWVkIGluIGEgUHJvZmlsZSBpZGVudGlmaWVkIGFzIHBhcnQgb2YgdGhlIHJlc291cmNlLiAgUmVmZXIgdG8gdGhlIHJlc291cmNlIG5vdGVzIHNlY3Rpb24gZm9yIGluZm9ybWF0aW9uIG9uIGFwcHJvcHJpYXRlIHRlcm1pbm9sb2dpZXMgZm9yIHRoaXMgY29kZS5cclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgaXQgZGVmaW5lcyB0aGUgbWVhbmluZyBvZiB0aGUgcmVzb3VyY2UgYW5kIGNhbm5vdCBiZSBpZ25vcmVkLlxyXG4gICAqL1xyXG4gIGNvZGU6IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIGFzIG5vdCBhbGwgcG90ZW50aWFsIHJlc291cmNlcyB3aWxsIGhhdmUgc3ViamVjdHMuICBSZXNvdXJjZXMgYXNzb2NpYXRlZCB3aXRoIG11bHRpcGxlIHN1YmplY3RzIGNhbiBoYW5kbGUgdGhpcyB2aWEgZXh0ZW5zaW9uLlxyXG4gICAqL1xyXG4gIHN1YmplY3Q/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgd2hlbiB0aGUgcmVzb3VyY2Ugd2FzIGZpcnN0IGNyZWF0ZWQuXHJcbiAgICovXHJcbiAgY3JlYXRlZD86IGZoaXIuRmhpckRhdGV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQmFzaWMuY3JlYXRlZFxyXG4gICAqL1xyXG4gIF9jcmVhdGVkPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgd2hvIHdhcyByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhlIHJlc291cmNlIGluc3RhbmNlLlxyXG4gICAqL1xyXG4gIGF1dGhvcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCYXNpYyBpcyB1c2VkIGZvciBoYW5kbGluZyBjb25jZXB0cyBub3QgeWV0IGRlZmluZWQgaW4gRkhJUiwgbmFycmF0aXZlLW9ubHkgcmVzb3VyY2VzIHRoYXQgZG9uJ3QgbWFwIHRvIGFuIGV4aXN0aW5nIHJlc291cmNlLCBhbmQgY3VzdG9tIHJlc291cmNlcyBub3QgYXBwcm9wcmlhdGUgZm9yIGluY2x1c2lvbiBpbiB0aGUgRkhJUiBzcGVjaWZpY2F0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJhc2ljIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdCYXNpYyc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJCYXNpY1wiO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXIgYXNzaWduZWQgdG8gdGhlIHJlc291cmNlIGZvciBidXNpbmVzcyBwdXJwb3Nlcywgb3V0c2lkZSB0aGUgY29udGV4dCBvZiBGSElSLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBCZWNhdXNlIHJlc291cmNlIHJlZmVyZW5jZXMgd2lsbCBvbmx5IGJlIGFibGUgdG8gaW5kaWNhdGUgJ0Jhc2ljJywgdGhlIHR5cGUgb2YgcmVmZXJlbmNlIHdpbGwgbmVlZCB0byBiZSBzcGVjaWZpZWQgaW4gYSBQcm9maWxlIGlkZW50aWZpZWQgYXMgcGFydCBvZiB0aGUgcmVzb3VyY2UuICBSZWZlciB0byB0aGUgcmVzb3VyY2Ugbm90ZXMgc2VjdGlvbiBmb3IgaW5mb3JtYXRpb24gb24gYXBwcm9wcmlhdGUgdGVybWlub2xvZ2llcyBmb3IgdGhpcyBjb2RlLlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSBpdCBkZWZpbmVzIHRoZSBtZWFuaW5nIG9mIHRoZSByZXNvdXJjZSBhbmQgY2Fubm90IGJlIGlnbm9yZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGNvZGU6IGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGw7XHJcbiAgLyoqXHJcbiAgICogT3B0aW9uYWwgYXMgbm90IGFsbCBwb3RlbnRpYWwgcmVzb3VyY2VzIHdpbGwgaGF2ZSBzdWJqZWN0cy4gIFJlc291cmNlcyBhc3NvY2lhdGVkIHdpdGggbXVsdGlwbGUgc3ViamVjdHMgY2FuIGhhbmRsZSB0aGlzIHZpYSBleHRlbnNpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHN1YmplY3Q/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcyB3aGVuIHRoZSByZXNvdXJjZSB3YXMgZmlyc3QgY3JlYXRlZC5cclxuICAgKi9cclxuICBwdWJsaWMgY3JlYXRlZD86IGZoaXIuRmhpckRhdGV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aG8gd2FzIHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGUgcmVzb3VyY2UgaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgcHVibGljIGF1dGhvcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBCYXNpYyAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEJhc2ljQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ0Jhc2ljJztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2NvZGUnXSkgeyB0aGlzLmNvZGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmNvZGUpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb2RlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3ViamVjdCddKSB7IHRoaXMuc3ViamVjdCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uuc3ViamVjdCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2NyZWF0ZWQnXSkgeyB0aGlzLmNyZWF0ZWQgPSBuZXcgZmhpci5GaGlyRGF0ZSh7dmFsdWU6IHNvdXJjZS5jcmVhdGVkfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jcmVhdGVkJ10pIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZCkgeyB0aGlzLmNyZWF0ZWQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY3JlYXRlZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNyZWF0ZWQgPSBuZXcgZmhpci5GaGlyRGF0ZShzb3VyY2UuX2NyZWF0ZWQgYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydhdXRob3InXSkgeyB0aGlzLmF1dGhvciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuYXV0aG9yKTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0Jhc2ljJyB9XHJcbiAgICB0aGlzLnZSUygncmVzb3VyY2VUeXBlJyxleHApXHJcbiAgICB0aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKVxyXG4gICAgdGhpcy52UlMoJ2NvZGUnLGV4cClcclxuICAgIHRoaXMudk9TKCdzdWJqZWN0JyxleHApXHJcbiAgICB0aGlzLnZPUygnY3JlYXRlZCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2F1dGhvcicsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19