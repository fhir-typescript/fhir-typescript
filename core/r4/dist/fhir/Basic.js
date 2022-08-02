// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
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
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Basic';
        }
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vRS('code', exp));
        iss.push(...this.vOS('subject', exp));
        iss.push(...this.vOS('created', exp));
        iss.push(...this.vOS('author', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Basic._fts_dataType = 'Basic';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0Jhc2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHVCQUF1QjtBQUV2QixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQXlDbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sS0FBTSxTQUFRLElBQUksQ0FBQyxjQUFjO0lBOEI1Qzs7T0FFRztJQUNILFlBQVksU0FBNEIsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDbEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDaEc7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQUU7YUFDckU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzFCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDN0UsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3JGLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxRQUFTLENBQUMsQ0FBQzthQUFFO2lCQUN0RTtnQkFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBc0MsQ0FBQyxDQUFDO2FBQUU7U0FDMUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUFFO0lBQzVFLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLEdBQUcsR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxPQUFPLENBQUE7U0FBRTtRQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBM0REOztHQUVHO0FBQzZCLG1CQUFhLEdBQVUsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBCYXNpY1xyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQmFzaWNSZXNvdXJjZVR5cGVDb2RlcywgIEJhc2ljUmVzb3VyY2VUeXBlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0Jhc2ljUmVzb3VyY2VUeXBlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEJhc2ljUmVzb3VyY2VUeXBlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9CYXNpY1Jlc291cmNlVHlwZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBCYXNpYyB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBCYXNpY0FyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkJhc2ljXCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXIgYXNzaWduZWQgdG8gdGhlIHJlc291cmNlIGZvciBidXNpbmVzcyBwdXJwb3Nlcywgb3V0c2lkZSB0aGUgY29udGV4dCBvZiBGSElSLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEJlY2F1c2UgcmVzb3VyY2UgcmVmZXJlbmNlcyB3aWxsIG9ubHkgYmUgYWJsZSB0byBpbmRpY2F0ZSAnQmFzaWMnLCB0aGUgdHlwZSBvZiByZWZlcmVuY2Ugd2lsbCBuZWVkIHRvIGJlIHNwZWNpZmllZCBpbiBhIFByb2ZpbGUgaWRlbnRpZmllZCBhcyBwYXJ0IG9mIHRoZSByZXNvdXJjZS4gIFJlZmVyIHRvIHRoZSByZXNvdXJjZSBub3RlcyBzZWN0aW9uIGZvciBpbmZvcm1hdGlvbiBvbiBhcHByb3ByaWF0ZSB0ZXJtaW5vbG9naWVzIGZvciB0aGlzIGNvZGUuXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIGl0IGRlZmluZXMgdGhlIG1lYW5pbmcgb2YgdGhlIHJlc291cmNlIGFuZCBjYW5ub3QgYmUgaWdub3JlZC5cclxuICAgKi9cclxuICBjb2RlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBPcHRpb25hbCBhcyBub3QgYWxsIHBvdGVudGlhbCByZXNvdXJjZXMgd2lsbCBoYXZlIHN1YmplY3RzLiAgUmVzb3VyY2VzIGFzc29jaWF0ZWQgd2l0aCBtdWx0aXBsZSBzdWJqZWN0cyBjYW4gaGFuZGxlIHRoaXMgdmlhIGV4dGVuc2lvbi5cclxuICAgKi9cclxuICBzdWJqZWN0PzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVzIHdoZW4gdGhlIHJlc291cmNlIHdhcyBmaXJzdCBjcmVhdGVkLlxyXG4gICAqL1xyXG4gIGNyZWF0ZWQ/OiBmaGlyLkZoaXJEYXRlfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEJhc2ljLmNyZWF0ZWRcclxuICAgKi9cclxuICBfY3JlYXRlZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdobyB3YXMgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoZSByZXNvdXJjZSBpbnN0YW5jZS5cclxuICAgKi9cclxuICBhdXRob3I/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQmFzaWMgaXMgdXNlZCBmb3IgaGFuZGxpbmcgY29uY2VwdHMgbm90IHlldCBkZWZpbmVkIGluIEZISVIsIG5hcnJhdGl2ZS1vbmx5IHJlc291cmNlcyB0aGF0IGRvbid0IG1hcCB0byBhbiBleGlzdGluZyByZXNvdXJjZSwgYW5kIGN1c3RvbSByZXNvdXJjZXMgbm90IGFwcHJvcHJpYXRlIGZvciBpbmNsdXNpb24gaW4gdGhlIEZISVIgc3BlY2lmaWNhdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXNpYyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQmFzaWMnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiQmFzaWNcIjtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVyIGFzc2lnbmVkIHRvIHRoZSByZXNvdXJjZSBmb3IgYnVzaW5lc3MgcHVycG9zZXMsIG91dHNpZGUgdGhlIGNvbnRleHQgb2YgRkhJUi5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogQmVjYXVzZSByZXNvdXJjZSByZWZlcmVuY2VzIHdpbGwgb25seSBiZSBhYmxlIHRvIGluZGljYXRlICdCYXNpYycsIHRoZSB0eXBlIG9mIHJlZmVyZW5jZSB3aWxsIG5lZWQgdG8gYmUgc3BlY2lmaWVkIGluIGEgUHJvZmlsZSBpZGVudGlmaWVkIGFzIHBhcnQgb2YgdGhlIHJlc291cmNlLiAgUmVmZXIgdG8gdGhlIHJlc291cmNlIG5vdGVzIHNlY3Rpb24gZm9yIGluZm9ybWF0aW9uIG9uIGFwcHJvcHJpYXRlIHRlcm1pbm9sb2dpZXMgZm9yIHRoaXMgY29kZS5cclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgaXQgZGVmaW5lcyB0aGUgbWVhbmluZyBvZiB0aGUgcmVzb3VyY2UgYW5kIGNhbm5vdCBiZSBpZ25vcmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2RlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIGFzIG5vdCBhbGwgcG90ZW50aWFsIHJlc291cmNlcyB3aWxsIGhhdmUgc3ViamVjdHMuICBSZXNvdXJjZXMgYXNzb2NpYXRlZCB3aXRoIG11bHRpcGxlIHN1YmplY3RzIGNhbiBoYW5kbGUgdGhpcyB2aWEgZXh0ZW5zaW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdWJqZWN0PzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgd2hlbiB0aGUgcmVzb3VyY2Ugd2FzIGZpcnN0IGNyZWF0ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGNyZWF0ZWQ/OiBmaGlyLkZoaXJEYXRlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgd2hvIHdhcyByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhlIHJlc291cmNlIGluc3RhbmNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhdXRob3I/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgQmFzaWMgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxCYXNpY0FyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdCYXNpYyc7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gc291cmNlLmlkZW50aWZpZXIubWFwKCh4KSA9PiBuZXcgZmhpci5JZGVudGlmaWVyKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaWRlbnRpZmllciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydjb2RlJ10pIHsgdGhpcy5jb2RlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5jb2RlKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29kZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N1YmplY3QnXSkgeyB0aGlzLnN1YmplY3QgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnN1YmplY3QpOyB9XHJcbiAgICBpZiAoc291cmNlWydjcmVhdGVkJ10pIHsgdGhpcy5jcmVhdGVkID0gbmV3IGZoaXIuRmhpckRhdGUoe3ZhbHVlOiBzb3VyY2UuY3JlYXRlZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfY3JlYXRlZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyZWF0ZWQpIHsgdGhpcy5jcmVhdGVkLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NyZWF0ZWQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jcmVhdGVkID0gbmV3IGZoaXIuRmhpckRhdGUoc291cmNlLl9jcmVhdGVkIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnYXV0aG9yJ10pIHsgdGhpcy5hdXRob3IgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmF1dGhvcik7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdCYXNpYycgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2lkZW50aWZpZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ2NvZGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3N1YmplY3QnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2NyZWF0ZWQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2F1dGhvcicsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=