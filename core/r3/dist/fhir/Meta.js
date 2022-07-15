// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Meta
import * as fhir from '../fhir.js';
/**
 * The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.
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
        if (source['profile']) {
            this.profile = source.profile.map((x) => new fhir.FhirUri({ value: x }));
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
                        this.profile.push(new fhir.FhirUri(x));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvTWV0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFFekIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFnRG5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLElBQUssU0FBUSxJQUFJLENBQUMsV0FBVztJQXlCeEM7O09BRUc7SUFDSCxZQUFZLFNBQTJCLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ2pGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3pGLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxVQUFXLENBQUMsQ0FBQzthQUFFO2lCQUM1RTtnQkFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBc0MsQ0FBQyxDQUFDO2FBQUU7U0FDMUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDcEcsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUFFLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFlBQWEsQ0FBQyxDQUFDO2FBQUU7aUJBQ2xGO2dCQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUE2QyxDQUFDLENBQUM7YUFBRTtTQUN4RztRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQzdGO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FBRTtRQUMzQixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBQUUsSUFBSSxDQUFDLEVBQUU7d0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFBRTtpQkFBRTtxQkFDakY7b0JBQUUsSUFBSSxDQUFDLEVBQUU7d0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQThCLENBQUMsQ0FBQyxDQUFDO3FCQUFFO2lCQUFFO1lBQzFGLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDdEY7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzVCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUN2RTtZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQUU7SUFDekIsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQTtTQUFFO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ25CLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBaEVEOztHQUVHO0FBQzZCLGtCQUFhLEdBQVUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBNZXRhXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTZWN1cml0eUxhYmVsc0NvZGVzLCAgU2VjdXJpdHlMYWJlbHNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU2VjdXJpdHlMYWJlbHNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU2VjdXJpdHlMYWJlbHNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1NlY3VyaXR5TGFiZWxzVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBDb21tb25UYWdzQ29kZXMsICBDb21tb25UYWdzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0NvbW1vblRhZ3NDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQ29tbW9uVGFnc1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQ29tbW9uVGFnc1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBNZXRhIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2ZXIgYXNzaWducyB0aGlzIHZhbHVlLCBhbmQgaWdub3JlcyB3aGF0IHRoZSBjbGllbnQgc3BlY2lmaWVzLCBleGNlcHQgaW4gdGhlIGNhc2UgdGhhdCB0aGUgc2VydmVyIGlzIGltcG9zaW5nIHZlcnNpb24gaW50ZWdyaXR5IG9uIHVwZGF0ZXMvZGVsZXRlcy5cclxuICAgKi9cclxuICB2ZXJzaW9uSWQ/OiBmaGlyLkZoaXJJZHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZXRhLnZlcnNpb25JZFxyXG4gICAqL1xyXG4gIF92ZXJzaW9uSWQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgdmFsdWUgaXMgYWx3YXlzIHBvcHVsYXRlZCBleGNlcHQgd2hlbiB0aGUgcmVzb3VyY2UgaXMgZmlyc3QgYmVpbmcgY3JlYXRlZC4gVGhlIHNlcnZlciAvIHJlc291cmNlIG1hbmFnZXIgc2V0cyB0aGlzIHZhbHVlOyB3aGF0IGEgY2xpZW50IHByb3ZpZGVzIGlzIGlycmVsZXZhbnQuXHJcbiAgICovXHJcbiAgbGFzdFVwZGF0ZWQ/OiBmaGlyLkZoaXJJbnN0YW50fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1ldGEubGFzdFVwZGF0ZWRcclxuICAgKi9cclxuICBfbGFzdFVwZGF0ZWQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEl0IGlzIHVwIHRvIHRoZSBzZXJ2ZXIgYW5kL29yIG90aGVyIGluZnJhc3RydWN0dXJlIG9mIHBvbGljeSB0byBkZXRlcm1pbmUgd2hldGhlci9ob3cgdGhlc2UgY2xhaW1zIGFyZSB2ZXJpZmllZCBhbmQvb3IgdXBkYXRlZCBvdmVyIHRpbWUuICBUaGUgbGlzdCBvZiBwcm9maWxlIFVSTHMgaXMgYSBzZXQuXHJcbiAgICovXHJcbiAgcHJvZmlsZT86IGZoaXIuRmhpclVyaVtdfChzdHJpbmd8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1ldGEucHJvZmlsZVxyXG4gICAqL1xyXG4gIF9wcm9maWxlPzooZmhpci5GaGlyRWxlbWVudEFyZ3N8bnVsbClbXTtcclxuICAvKipcclxuICAgKiBUaGUgc2VjdXJpdHkgbGFiZWxzIGNhbiBiZSB1cGRhdGVkIHdpdGhvdXQgY2hhbmdpbmcgdGhlIHN0YXRlZCB2ZXJzaW9uIG9mIHRoZSByZXNvdXJjZSAgVGhlIGxpc3Qgb2Ygc2VjdXJpdHkgbGFiZWxzIGlzIGEgc2V0LiBVbmlxdWVuZXNzIGlzIGJhc2VkIHRoZSBzeXN0ZW0vY29kZSwgYW5kIHZlcnNpb24gYW5kIGRpc3BsYXkgYXJlIGlnbm9yZWQuXHJcbiAgICovXHJcbiAgc2VjdXJpdHk/OiBmaGlyLkNvZGluZ0FyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRhZ3MgY2FuIGJlIHVwZGF0ZWQgd2l0aG91dCBjaGFuZ2luZyB0aGUgc3RhdGVkIHZlcnNpb24gb2YgdGhlIHJlc291cmNlLiAgVGhlIGxpc3Qgb2YgdGFncyBpcyBhIHNldC4gVW5pcXVlbmVzcyBpcyBiYXNlZCB0aGUgc3lzdGVtL2NvZGUsIGFuZCB2ZXJzaW9uIGFuZCBkaXNwbGF5IGFyZSBpZ25vcmVkLlxyXG4gICAqL1xyXG4gIHRhZz86IGZoaXIuQ29kaW5nQXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBtZXRhZGF0YSBhYm91dCBhIHJlc291cmNlLiBUaGlzIGlzIGNvbnRlbnQgaW4gdGhlIHJlc291cmNlIHRoYXQgaXMgbWFpbnRhaW5lZCBieSB0aGUgaW5mcmFzdHJ1Y3R1cmUuIENoYW5nZXMgdG8gdGhlIGNvbnRlbnQgbWF5IG5vdCBhbHdheXMgYmUgYXNzb2NpYXRlZCB3aXRoIHZlcnNpb24gY2hhbmdlcyB0byB0aGUgcmVzb3VyY2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWV0YSBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnTWV0YSc7XHJcbiAgLyoqXHJcbiAgICogVGhlIHNlcnZlciBhc3NpZ25zIHRoaXMgdmFsdWUsIGFuZCBpZ25vcmVzIHdoYXQgdGhlIGNsaWVudCBzcGVjaWZpZXMsIGV4Y2VwdCBpbiB0aGUgY2FzZSB0aGF0IHRoZSBzZXJ2ZXIgaXMgaW1wb3NpbmcgdmVyc2lvbiBpbnRlZ3JpdHkgb24gdXBkYXRlcy9kZWxldGVzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB2ZXJzaW9uSWQ/OiBmaGlyLkZoaXJJZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyB2YWx1ZSBpcyBhbHdheXMgcG9wdWxhdGVkIGV4Y2VwdCB3aGVuIHRoZSByZXNvdXJjZSBpcyBmaXJzdCBiZWluZyBjcmVhdGVkLiBUaGUgc2VydmVyIC8gcmVzb3VyY2UgbWFuYWdlciBzZXRzIHRoaXMgdmFsdWU7IHdoYXQgYSBjbGllbnQgcHJvdmlkZXMgaXMgaXJyZWxldmFudC5cclxuICAgKi9cclxuICBwdWJsaWMgbGFzdFVwZGF0ZWQ/OiBmaGlyLkZoaXJJbnN0YW50fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJdCBpcyB1cCB0byB0aGUgc2VydmVyIGFuZC9vciBvdGhlciBpbmZyYXN0cnVjdHVyZSBvZiBwb2xpY3kgdG8gZGV0ZXJtaW5lIHdoZXRoZXIvaG93IHRoZXNlIGNsYWltcyBhcmUgdmVyaWZpZWQgYW5kL29yIHVwZGF0ZWQgb3ZlciB0aW1lLiAgVGhlIGxpc3Qgb2YgcHJvZmlsZSBVUkxzIGlzIGEgc2V0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwcm9maWxlOiBmaGlyLkZoaXJVcmlbXTtcclxuICAvKipcclxuICAgKiBUaGUgc2VjdXJpdHkgbGFiZWxzIGNhbiBiZSB1cGRhdGVkIHdpdGhvdXQgY2hhbmdpbmcgdGhlIHN0YXRlZCB2ZXJzaW9uIG9mIHRoZSByZXNvdXJjZSAgVGhlIGxpc3Qgb2Ygc2VjdXJpdHkgbGFiZWxzIGlzIGEgc2V0LiBVbmlxdWVuZXNzIGlzIGJhc2VkIHRoZSBzeXN0ZW0vY29kZSwgYW5kIHZlcnNpb24gYW5kIGRpc3BsYXkgYXJlIGlnbm9yZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHNlY3VyaXR5OiBmaGlyLkNvZGluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0YWdzIGNhbiBiZSB1cGRhdGVkIHdpdGhvdXQgY2hhbmdpbmcgdGhlIHN0YXRlZCB2ZXJzaW9uIG9mIHRoZSByZXNvdXJjZS4gIFRoZSBsaXN0IG9mIHRhZ3MgaXMgYSBzZXQuIFVuaXF1ZW5lc3MgaXMgYmFzZWQgdGhlIHN5c3RlbS9jb2RlLCBhbmQgdmVyc2lvbiBhbmQgZGlzcGxheSBhcmUgaWdub3JlZC5cclxuICAgKi9cclxuICBwdWJsaWMgdGFnOiBmaGlyLkNvZGluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIE1ldGEgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxNZXRhQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3ZlcnNpb25JZCddKSB7IHRoaXMudmVyc2lvbklkID0gbmV3IGZoaXIuRmhpcklkKHt2YWx1ZTogc291cmNlLnZlcnNpb25JZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfdmVyc2lvbklkJ10pIHtcclxuICAgICAgaWYgKHRoaXMudmVyc2lvbklkKSB7IHRoaXMudmVyc2lvbklkLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3ZlcnNpb25JZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnZlcnNpb25JZCA9IG5ldyBmaGlyLkZoaXJJZChzb3VyY2UuX3ZlcnNpb25JZCBhcyBQYXJ0aWFsPGZoaXIuRmhpcklkQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydsYXN0VXBkYXRlZCddKSB7IHRoaXMubGFzdFVwZGF0ZWQgPSBuZXcgZmhpci5GaGlySW5zdGFudCh7dmFsdWU6IHNvdXJjZS5sYXN0VXBkYXRlZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfbGFzdFVwZGF0ZWQnXSkge1xyXG4gICAgICBpZiAodGhpcy5sYXN0VXBkYXRlZCkgeyB0aGlzLmxhc3RVcGRhdGVkLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2xhc3RVcGRhdGVkISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubGFzdFVwZGF0ZWQgPSBuZXcgZmhpci5GaGlySW5zdGFudChzb3VyY2UuX2xhc3RVcGRhdGVkIGFzIFBhcnRpYWw8Zmhpci5GaGlySW5zdGFudEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncHJvZmlsZSddKSB7IHRoaXMucHJvZmlsZSA9IHNvdXJjZS5wcm9maWxlLm1hcCgoeCkgPT4gbmV3IGZoaXIuRmhpclVyaSh7dmFsdWU6IHh9KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnByb2ZpbGUgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3Byb2ZpbGUnXSkge1xyXG4gICAgICBzb3VyY2UuX3Byb2ZpbGUuZm9yRWFjaCgoeCxpKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZmlsZS5sZW5ndGggPj0gaSkgeyBpZiAoeCkgeyB0aGlzLnByb2ZpbGVbaV0uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHgpOyB9IH1cclxuICAgICAgICBlbHNlIHsgaWYgKHgpIHsgdGhpcy5wcm9maWxlLnB1c2gobmV3IGZoaXIuRmhpclVyaSh4IGFzIFBhcnRpYWw8Zmhpci5GaGlyVXJpQXJncz4pKTsgfSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc2VjdXJpdHknXSkgeyB0aGlzLnNlY3VyaXR5ID0gc291cmNlLnNlY3VyaXR5Lm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kaW5nKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc2VjdXJpdHkgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsndGFnJ10pIHsgdGhpcy50YWcgPSBzb3VyY2UudGFnLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kaW5nKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMudGFnID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdNZXRhJyB9XHJcbiAgICB0aGlzLnZPUygndmVyc2lvbklkJyxleHApXHJcbiAgICB0aGlzLnZPUygnbGFzdFVwZGF0ZWQnLGV4cClcclxuICAgIHRoaXMudk9BKCdwcm9maWxlJyxleHApXHJcbiAgICB0aGlzLnZPQSgnc2VjdXJpdHknLGV4cClcclxuICAgIHRoaXMudk9BKCd0YWcnLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==