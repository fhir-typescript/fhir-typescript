// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Meta
import * as fhir from '../fhir.js';
/**
 * The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export class Meta extends fhir.FhirElement {
    /**
     * Default constructor for Meta - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['versionId']) {
            this.versionId = new fhir.FhirId({ value: source.versionId });
        }
        if (source['_versionId']) {
            if (this.versionId) {
                this.versionId.addExtendedProperties(source._versionId);
            }
            else {
                this.versionId = new fhir.FhirId(source._versionId);
            }
        }
        if (source['lastUpdated']) {
            this.lastUpdated = new fhir.FhirInstant({ value: source.lastUpdated });
        }
        if (source['_lastUpdated']) {
            if (this.lastUpdated) {
                this.lastUpdated.addExtendedProperties(source._lastUpdated);
            }
            else {
                this.lastUpdated = new fhir.FhirInstant(source._lastUpdated);
            }
        }
        if (source['source']) {
            this.source = new fhir.FhirUri({ value: source.source });
        }
        if (source['_source']) {
            if (this.source) {
                this.source.addExtendedProperties(source._source);
            }
            else {
                this.source = new fhir.FhirUri(source._source);
            }
        }
        if (source['profile']) {
            this.profile = source.profile.map((x) => new fhir.FhirCanonical({ value: x }));
        }
        else {
            this.profile = [];
        }
        if (source['_profile']) {
            source._profile.forEach((x, i) => {
                if (this.profile.length >= i) {
                    if (x) {
                        this.profile[i].addExtendedProperties(x);
                    }
                }
                else {
                    if (x) {
                        this.profile.push(new fhir.FhirCanonical(x));
                    }
                }
            });
        }
        if (source['security']) {
            this.security = source.security.map((x) => new fhir.Coding(x));
        }
        else {
            this.security = [];
        }
        if (source['tag']) {
            this.tag = source.tag.map((x) => new fhir.Coding(x));
        }
        else {
            this.tag = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Meta';
        }
        this.vOS('versionId', exp);
        this.vOS('lastUpdated', exp);
        this.vOS('source', exp);
        this.vOA('profile', exp);
        this.vOA('security', exp);
        this.vOA('tag', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Meta._fts_dataType = 'Meta';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvTWV0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFFekIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUF5RG5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLElBQUssU0FBUSxJQUFJLENBQUMsV0FBVztJQThCeEM7O09BRUc7SUFDSCxZQUFZLFNBQTJCLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ2pGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3pGLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxVQUFXLENBQUMsQ0FBQzthQUFFO2lCQUM1RTtnQkFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBc0MsQ0FBQyxDQUFDO2FBQUU7U0FDMUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDcEcsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFF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LENBQUE7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDbkIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUEzRUQ7O0dBRUc7QUFDNkIsa0JBQWEsR0FBVSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IE1ldGFcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFNlY3VyaXR5TGFiZWxzQ29kZXMsICBTZWN1cml0eUxhYmVsc0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TZWN1cml0eUxhYmVsc0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTZWN1cml0eUxhYmVsc1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU2VjdXJpdHlMYWJlbHNWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IENvbW1vblRhZ3NDb2RlcywgIENvbW1vblRhZ3NDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQ29tbW9uVGFnc0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBDb21tb25UYWdzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Db21tb25UYWdzVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIE1ldGEgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWV0YUFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIHNlcnZlciBhc3NpZ25zIHRoaXMgdmFsdWUsIGFuZCBpZ25vcmVzIHdoYXQgdGhlIGNsaWVudCBzcGVjaWZpZXMsIGV4Y2VwdCBpbiB0aGUgY2FzZSB0aGF0IHRoZSBzZXJ2ZXIgaXMgaW1wb3NpbmcgdmVyc2lvbiBpbnRlZ3JpdHkgb24gdXBkYXRlcy9kZWxldGVzLlxyXG4gICAqL1xyXG4gIHZlcnNpb25JZD86IGZoaXIuRmhpcklkfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1ldGEudmVyc2lvbklkXHJcbiAgICovXHJcbiAgX3ZlcnNpb25JZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhpcyB2YWx1ZSBpcyBhbHdheXMgcG9wdWxhdGVkIGV4Y2VwdCB3aGVuIHRoZSByZXNvdXJjZSBpcyBmaXJzdCBiZWluZyBjcmVhdGVkLiBUaGUgc2VydmVyIC8gcmVzb3VyY2UgbWFuYWdlciBzZXRzIHRoaXMgdmFsdWU7IHdoYXQgYSBjbGllbnQgcHJvdmlkZXMgaXMgaXJyZWxldmFudC4gVGhpcyBpcyBlcXVpdmFsZW50IHRvIHRoZSBIVFRQIExhc3QtTW9kaWZpZWQgYW5kIFNIT1VMRCBoYXZlIHRoZSBzYW1lIHZhbHVlIG9uIGEgW3JlYWRdKGh0dHAuaHRtbCNyZWFkKSBpbnRlcmFjdGlvbi5cclxuICAgKi9cclxuICBsYXN0VXBkYXRlZD86IGZoaXIuRmhpckluc3RhbnR8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWV0YS5sYXN0VXBkYXRlZFxyXG4gICAqL1xyXG4gIF9sYXN0VXBkYXRlZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogSW4gdGhlIHByb3ZlbmFuY2UgcmVzb3VyY2UsIHRoaXMgY29ycmVzcG9uZHMgdG8gUHJvdmVuYW5jZS5lbnRpdHkud2hhdFt4XS4gVGhlIGV4YWN0IHVzZSBvZiB0aGUgc291cmNlIChhbmQgdGhlIGltcGxpZWQgUHJvdmVuYW5jZS5lbnRpdHkucm9sZSkgaXMgbGVmdCB0byBpbXBsZW1lbnRlciBkaXNjcmV0aW9uLiBPbmx5IG9uZSBub21pbmF0ZWQgc291cmNlIGlzIGFsbG93ZWQ7IGZvciBhZGRpdGlvbmFsIHByb3ZlbmFuY2UgZGV0YWlscywgYSBmdWxsIFByb3ZlbmFuY2UgcmVzb3VyY2Ugc2hvdWxkIGJlIHVzZWQuIFxyXG4gICAqIFRoaXMgZWxlbWVudCBjYW4gYmUgdXNlZCB0byBpbmRpY2F0ZSB3aGVyZSB0aGUgY3VycmVudCBtYXN0ZXIgc291cmNlIG9mIGEgcmVzb3VyY2UgdGhhdCBoYXMgYSBjYW5vbmljYWwgVVJMIGlmIHRoZSByZXNvdXJjZSBpcyBubyBsb25nZXIgaG9zdGVkIGF0IHRoZSBjYW5vbmljYWwgVVJMLlxyXG4gICAqL1xyXG4gIHNvdXJjZT86IGZoaXIuRmhpclVyaXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZXRhLnNvdXJjZVxyXG4gICAqL1xyXG4gIF9zb3VyY2U/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEl0IGlzIHVwIHRvIHRoZSBzZXJ2ZXIgYW5kL29yIG90aGVyIGluZnJhc3RydWN0dXJlIG9mIHBvbGljeSB0byBkZXRlcm1pbmUgd2hldGhlci9ob3cgdGhlc2UgY2xhaW1zIGFyZSB2ZXJpZmllZCBhbmQvb3IgdXBkYXRlZCBvdmVyIHRpbWUuICBUaGUgbGlzdCBvZiBwcm9maWxlIFVSTHMgaXMgYSBzZXQuXHJcbiAgICovXHJcbiAgcHJvZmlsZT86IGZoaXIuRmhpckNhbm9uaWNhbFtdfChzdHJpbmd8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1ldGEucHJvZmlsZVxyXG4gICAqL1xyXG4gIF9wcm9maWxlPzooZmhpci5GaGlyRWxlbWVudEFyZ3N8bnVsbClbXTtcclxuICAvKipcclxuICAgKiBUaGUgc2VjdXJpdHkgbGFiZWxzIGNhbiBiZSB1cGRhdGVkIHdpdGhvdXQgY2hhbmdpbmcgdGhlIHN0YXRlZCB2ZXJzaW9uIG9mIHRoZSByZXNvdXJjZS4gVGhlIGxpc3Qgb2Ygc2VjdXJpdHkgbGFiZWxzIGlzIGEgc2V0LiBVbmlxdWVuZXNzIGlzIGJhc2VkIHRoZSBzeXN0ZW0vY29kZSwgYW5kIHZlcnNpb24gYW5kIGRpc3BsYXkgYXJlIGlnbm9yZWQuXHJcbiAgICovXHJcbiAgc2VjdXJpdHk/OiBmaGlyLkNvZGluZ0FyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRhZ3MgY2FuIGJlIHVwZGF0ZWQgd2l0aG91dCBjaGFuZ2luZyB0aGUgc3RhdGVkIHZlcnNpb24gb2YgdGhlIHJlc291cmNlLiBUaGUgbGlzdCBvZiB0YWdzIGlzIGEgc2V0LiBVbmlxdWVuZXNzIGlzIGJhc2VkIHRoZSBzeXN0ZW0vY29kZSwgYW5kIHZlcnNpb24gYW5kIGRpc3BsYXkgYXJlIGlnbm9yZWQuXHJcbiAgICovXHJcbiAgdGFnPzogZmhpci5Db2RpbmdBcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIG1ldGFkYXRhIGFib3V0IGEgcmVzb3VyY2UuIFRoaXMgaXMgY29udGVudCBpbiB0aGUgcmVzb3VyY2UgdGhhdCBpcyBtYWludGFpbmVkIGJ5IHRoZSBpbmZyYXN0cnVjdHVyZS4gQ2hhbmdlcyB0byB0aGUgY29udGVudCBtaWdodCBub3QgYWx3YXlzIGJlIGFzc29jaWF0ZWQgd2l0aCB2ZXJzaW9uIGNoYW5nZXMgdG8gdGhlIHJlc291cmNlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1ldGEgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ01ldGEnO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2ZXIgYXNzaWducyB0aGlzIHZhbHVlLCBhbmQgaWdub3JlcyB3aGF0IHRoZSBjbGllbnQgc3BlY2lmaWVzLCBleGNlcHQgaW4gdGhlIGNhc2UgdGhhdCB0aGUgc2VydmVyIGlzIGltcG9zaW5nIHZlcnNpb24gaW50ZWdyaXR5IG9uIHVwZGF0ZXMvZGVsZXRlcy5cclxuICAgKi9cclxuICBwdWJsaWMgdmVyc2lvbklkPzogZmhpci5GaGlySWR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgdmFsdWUgaXMgYWx3YXlzIHBvcHVsYXRlZCBleGNlcHQgd2hlbiB0aGUgcmVzb3VyY2UgaXMgZmlyc3QgYmVpbmcgY3JlYXRlZC4gVGhlIHNlcnZlciAvIHJlc291cmNlIG1hbmFnZXIgc2V0cyB0aGlzIHZhbHVlOyB3aGF0IGEgY2xpZW50IHByb3ZpZGVzIGlzIGlycmVsZXZhbnQuIFRoaXMgaXMgZXF1aXZhbGVudCB0byB0aGUgSFRUUCBMYXN0LU1vZGlmaWVkIGFuZCBTSE9VTEQgaGF2ZSB0aGUgc2FtZSB2YWx1ZSBvbiBhIFtyZWFkXShodHRwLmh0bWwjcmVhZCkgaW50ZXJhY3Rpb24uXHJcbiAgICovXHJcbiAgcHVibGljIGxhc3RVcGRhdGVkPzogZmhpci5GaGlySW5zdGFudHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW4gdGhlIHByb3ZlbmFuY2UgcmVzb3VyY2UsIHRoaXMgY29ycmVzcG9uZHMgdG8gUHJvdmVuYW5jZS5lbnRpdHkud2hhdFt4XS4gVGhlIGV4YWN0IHVzZSBvZiB0aGUgc291cmNlIChhbmQgdGhlIGltcGxpZWQgUHJvdmVuYW5jZS5lbnRpdHkucm9sZSkgaXMgbGVmdCB0byBpbXBsZW1lbnRlciBkaXNjcmV0aW9uLiBPbmx5IG9uZSBub21pbmF0ZWQgc291cmNlIGlzIGFsbG93ZWQ7IGZvciBhZGRpdGlvbmFsIHByb3ZlbmFuY2UgZGV0YWlscywgYSBmdWxsIFByb3ZlbmFuY2UgcmVzb3VyY2Ugc2hvdWxkIGJlIHVzZWQuIFxyXG4gICAqIFRoaXMgZWxlbWVudCBjYW4gYmUgdXNlZCB0byBpbmRpY2F0ZSB3aGVyZSB0aGUgY3VycmVudCBtYXN0ZXIgc291cmNlIG9mIGEgcmVzb3VyY2UgdGhhdCBoYXMgYSBjYW5vbmljYWwgVVJMIGlmIHRoZSByZXNvdXJjZSBpcyBubyBsb25nZXIgaG9zdGVkIGF0IHRoZSBjYW5vbmljYWwgVVJMLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzb3VyY2U/OiBmaGlyLkZoaXJVcml8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEl0IGlzIHVwIHRvIHRoZSBzZXJ2ZXIgYW5kL29yIG90aGVyIGluZnJhc3RydWN0dXJlIG9mIHBvbGljeSB0byBkZXRlcm1pbmUgd2hldGhlci9ob3cgdGhlc2UgY2xhaW1zIGFyZSB2ZXJpZmllZCBhbmQvb3IgdXBkYXRlZCBvdmVyIHRpbWUuICBUaGUgbGlzdCBvZiBwcm9maWxlIFVSTHMgaXMgYSBzZXQuXHJcbiAgICovXHJcbiAgcHVibGljIHByb2ZpbGU6IGZoaXIuRmhpckNhbm9uaWNhbFtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzZWN1cml0eSBsYWJlbHMgY2FuIGJlIHVwZGF0ZWQgd2l0aG91dCBjaGFuZ2luZyB0aGUgc3RhdGVkIHZlcnNpb24gb2YgdGhlIHJlc291cmNlLiBUaGUgbGlzdCBvZiBzZWN1cml0eSBsYWJlbHMgaXMgYSBzZXQuIFVuaXF1ZW5lc3MgaXMgYmFzZWQgdGhlIHN5c3RlbS9jb2RlLCBhbmQgdmVyc2lvbiBhbmQgZGlzcGxheSBhcmUgaWdub3JlZC5cclxuICAgKi9cclxuICBwdWJsaWMgc2VjdXJpdHk6IGZoaXIuQ29kaW5nW107XHJcbiAgLyoqXHJcbiAgICogVGhlIHRhZ3MgY2FuIGJlIHVwZGF0ZWQgd2l0aG91dCBjaGFuZ2luZyB0aGUgc3RhdGVkIHZlcnNpb24gb2YgdGhlIHJlc291cmNlLiBUaGUgbGlzdCBvZiB0YWdzIGlzIGEgc2V0LiBVbmlxdWVuZXNzIGlzIGJhc2VkIHRoZSBzeXN0ZW0vY29kZSwgYW5kIHZlcnNpb24gYW5kIGRpc3BsYXkgYXJlIGlnbm9yZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHRhZzogZmhpci5Db2RpbmdbXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBNZXRhIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8TWV0YUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyd2ZXJzaW9uSWQnXSkgeyB0aGlzLnZlcnNpb25JZCA9IG5ldyBmaGlyLkZoaXJJZCh7dmFsdWU6IHNvdXJjZS52ZXJzaW9uSWR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3ZlcnNpb25JZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLnZlcnNpb25JZCkgeyB0aGlzLnZlcnNpb25JZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl92ZXJzaW9uSWQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy52ZXJzaW9uSWQgPSBuZXcgZmhpci5GaGlySWQoc291cmNlLl92ZXJzaW9uSWQgYXMgUGFydGlhbDxmaGlyLkZoaXJJZEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbGFzdFVwZGF0ZWQnXSkgeyB0aGlzLmxhc3RVcGRhdGVkID0gbmV3IGZoaXIuRmhpckluc3RhbnQoe3ZhbHVlOiBzb3VyY2UubGFzdFVwZGF0ZWR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2xhc3RVcGRhdGVkJ10pIHtcclxuICAgICAgaWYgKHRoaXMubGFzdFVwZGF0ZWQpIHsgdGhpcy5sYXN0VXBkYXRlZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9sYXN0VXBkYXRlZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmxhc3RVcGRhdGVkID0gbmV3IGZoaXIuRmhpckluc3RhbnQoc291cmNlLl9sYXN0VXBkYXRlZCBhcyBQYXJ0aWFsPGZoaXIuRmhpckluc3RhbnRBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3NvdXJjZSddKSB7IHRoaXMuc291cmNlID0gbmV3IGZoaXIuRmhpclVyaSh7dmFsdWU6IHNvdXJjZS5zb3VyY2V9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3NvdXJjZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnNvdXJjZSkgeyB0aGlzLnNvdXJjZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zb3VyY2UhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zb3VyY2UgPSBuZXcgZmhpci5GaGlyVXJpKHNvdXJjZS5fc291cmNlIGFzIFBhcnRpYWw8Zmhpci5GaGlyVXJpQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwcm9maWxlJ10pIHsgdGhpcy5wcm9maWxlID0gc291cmNlLnByb2ZpbGUubWFwKCh4KSA9PiBuZXcgZmhpci5GaGlyQ2Fub25pY2FsKHt2YWx1ZTogeH0pKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucHJvZmlsZSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydfcHJvZmlsZSddKSB7XHJcbiAgICAgIHNvdXJjZS5fcHJvZmlsZS5mb3JFYWNoKCh4LGkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9maWxlLmxlbmd0aCA+PSBpKSB7IGlmICh4KSB7IHRoaXMucHJvZmlsZVtpXS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoeCk7IH0gfVxyXG4gICAgICAgIGVsc2UgeyBpZiAoeCkgeyB0aGlzLnByb2ZpbGUucHVzaChuZXcgZmhpci5GaGlyQ2Fub25pY2FsKHggYXMgUGFydGlhbDxmaGlyLkZoaXJDYW5vbmljYWxBcmdzPikpOyB9IH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydzZWN1cml0eSddKSB7IHRoaXMuc2VjdXJpdHkgPSBzb3VyY2Uuc2VjdXJpdHkubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RpbmcoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zZWN1cml0eSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWyd0YWcnXSkgeyB0aGlzLnRhZyA9IHNvdXJjZS50YWcubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RpbmcoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50YWcgPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ01ldGEnIH1cclxuICAgIHRoaXMudk9TKCd2ZXJzaW9uSWQnLGV4cClcclxuICAgIHRoaXMudk9TKCdsYXN0VXBkYXRlZCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3NvdXJjZScsZXhwKVxyXG4gICAgdGhpcy52T0EoJ3Byb2ZpbGUnLGV4cClcclxuICAgIHRoaXMudk9BKCdzZWN1cml0eScsZXhwKVxyXG4gICAgdGhpcy52T0EoJ3RhZycsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19