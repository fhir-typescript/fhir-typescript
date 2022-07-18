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
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Meta';
        }
        iss.push(...this.vOS('versionId', exp));
        iss.push(...this.vOS('lastUpdated', exp));
        iss.push(...this.vOS('source', exp));
        iss.push(...this.vOA('profile', exp));
        iss.push(...this.vOA('security', exp));
        iss.push(...this.vOA('tag', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Meta._fts_dataType = 'Meta';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvTWV0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFFekIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUF5RG5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLElBQUssU0FBUSxJQUFJLENBQUMsV0FBVztJQThCeEM7O09BRUc7SUFDSCxZQUFZLFNBQTJCLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ2pGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3pGLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxVQUFXLENBQUMsQ0FBQzthQUFFO2lCQUM1RTtnQkFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBc0MsQ0FBQyxDQUFDO2FBQUU7U0FDMUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDcEcsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUFFLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFlBQWEsQ0FBQyxDQUFDO2FBQUU7aUJBQ2xGO2dCQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUE2QyxDQUFDLENBQUM7YUFBRTtTQUN4RztRQUNELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNqRixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLENBQUM7YUFBRTtpQkFDbkU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQW9DLENBQUMsQ0FBQzthQUFFO1NBQ3RGO1FBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDbkc7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzNCLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFFO2dCQUM5QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFBRSxJQUFJLENBQUMsRUFBRTt3QkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUFFO2lCQUFFO3FCQUNqRjtvQkFBRSxJQUFJLENBQUMsRUFBRTt3QkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBb0MsQ0FBQyxDQUFDLENBQUM7cUJBQUU7aUJBQUU7WUFDdEcsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUN0RjtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDNUIsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3ZFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FBRTtJQUN6QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxHQUFHLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFBO1NBQUU7UUFDaEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQTNFRDs7R0FFRztBQUM2QixrQkFBYSxHQUFVLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogTWV0YVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU2VjdXJpdHlMYWJlbHNDb2RlcywgIFNlY3VyaXR5TGFiZWxzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1NlY3VyaXR5TGFiZWxzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFNlY3VyaXR5TGFiZWxzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TZWN1cml0eUxhYmVsc1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQ29tbW9uVGFnc0NvZGVzLCAgQ29tbW9uVGFnc0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Db21tb25UYWdzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IENvbW1vblRhZ3NWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0NvbW1vblRhZ3NWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgTWV0YSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNZXRhQXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgc2VydmVyIGFzc2lnbnMgdGhpcyB2YWx1ZSwgYW5kIGlnbm9yZXMgd2hhdCB0aGUgY2xpZW50IHNwZWNpZmllcywgZXhjZXB0IGluIHRoZSBjYXNlIHRoYXQgdGhlIHNlcnZlciBpcyBpbXBvc2luZyB2ZXJzaW9uIGludGVncml0eSBvbiB1cGRhdGVzL2RlbGV0ZXMuXHJcbiAgICovXHJcbiAgdmVyc2lvbklkPzogZmhpci5GaGlySWR8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWV0YS52ZXJzaW9uSWRcclxuICAgKi9cclxuICBfdmVyc2lvbklkPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGlzIHZhbHVlIGlzIGFsd2F5cyBwb3B1bGF0ZWQgZXhjZXB0IHdoZW4gdGhlIHJlc291cmNlIGlzIGZpcnN0IGJlaW5nIGNyZWF0ZWQuIFRoZSBzZXJ2ZXIgLyByZXNvdXJjZSBtYW5hZ2VyIHNldHMgdGhpcyB2YWx1ZTsgd2hhdCBhIGNsaWVudCBwcm92aWRlcyBpcyBpcnJlbGV2YW50LiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gdGhlIEhUVFAgTGFzdC1Nb2RpZmllZCBhbmQgU0hPVUxEIGhhdmUgdGhlIHNhbWUgdmFsdWUgb24gYSBbcmVhZF0oaHR0cC5odG1sI3JlYWQpIGludGVyYWN0aW9uLlxyXG4gICAqL1xyXG4gIGxhc3RVcGRhdGVkPzogZmhpci5GaGlySW5zdGFudHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZXRhLmxhc3RVcGRhdGVkXHJcbiAgICovXHJcbiAgX2xhc3RVcGRhdGVkPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBJbiB0aGUgcHJvdmVuYW5jZSByZXNvdXJjZSwgdGhpcyBjb3JyZXNwb25kcyB0byBQcm92ZW5hbmNlLmVudGl0eS53aGF0W3hdLiBUaGUgZXhhY3QgdXNlIG9mIHRoZSBzb3VyY2UgKGFuZCB0aGUgaW1wbGllZCBQcm92ZW5hbmNlLmVudGl0eS5yb2xlKSBpcyBsZWZ0IHRvIGltcGxlbWVudGVyIGRpc2NyZXRpb24uIE9ubHkgb25lIG5vbWluYXRlZCBzb3VyY2UgaXMgYWxsb3dlZDsgZm9yIGFkZGl0aW9uYWwgcHJvdmVuYW5jZSBkZXRhaWxzLCBhIGZ1bGwgUHJvdmVuYW5jZSByZXNvdXJjZSBzaG91bGQgYmUgdXNlZC4gXHJcbiAgICogVGhpcyBlbGVtZW50IGNhbiBiZSB1c2VkIHRvIGluZGljYXRlIHdoZXJlIHRoZSBjdXJyZW50IG1hc3RlciBzb3VyY2Ugb2YgYSByZXNvdXJjZSB0aGF0IGhhcyBhIGNhbm9uaWNhbCBVUkwgaWYgdGhlIHJlc291cmNlIGlzIG5vIGxvbmdlciBob3N0ZWQgYXQgdGhlIGNhbm9uaWNhbCBVUkwuXHJcbiAgICovXHJcbiAgc291cmNlPzogZmhpci5GaGlyVXJpfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1ldGEuc291cmNlXHJcbiAgICovXHJcbiAgX3NvdXJjZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogSXQgaXMgdXAgdG8gdGhlIHNlcnZlciBhbmQvb3Igb3RoZXIgaW5mcmFzdHJ1Y3R1cmUgb2YgcG9saWN5IHRvIGRldGVybWluZSB3aGV0aGVyL2hvdyB0aGVzZSBjbGFpbXMgYXJlIHZlcmlmaWVkIGFuZC9vciB1cGRhdGVkIG92ZXIgdGltZS4gIFRoZSBsaXN0IG9mIHByb2ZpbGUgVVJMcyBpcyBhIHNldC5cclxuICAgKi9cclxuICBwcm9maWxlPzogZmhpci5GaGlyQ2Fub25pY2FsW118KHN0cmluZ3xudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWV0YS5wcm9maWxlXHJcbiAgICovXHJcbiAgX3Byb2ZpbGU/OihmaGlyLkZoaXJFbGVtZW50QXJnc3xudWxsKVtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzZWN1cml0eSBsYWJlbHMgY2FuIGJlIHVwZGF0ZWQgd2l0aG91dCBjaGFuZ2luZyB0aGUgc3RhdGVkIHZlcnNpb24gb2YgdGhlIHJlc291cmNlLiBUaGUgbGlzdCBvZiBzZWN1cml0eSBsYWJlbHMgaXMgYSBzZXQuIFVuaXF1ZW5lc3MgaXMgYmFzZWQgdGhlIHN5c3RlbS9jb2RlLCBhbmQgdmVyc2lvbiBhbmQgZGlzcGxheSBhcmUgaWdub3JlZC5cclxuICAgKi9cclxuICBzZWN1cml0eT86IGZoaXIuQ29kaW5nQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdGFncyBjYW4gYmUgdXBkYXRlZCB3aXRob3V0IGNoYW5naW5nIHRoZSBzdGF0ZWQgdmVyc2lvbiBvZiB0aGUgcmVzb3VyY2UuIFRoZSBsaXN0IG9mIHRhZ3MgaXMgYSBzZXQuIFVuaXF1ZW5lc3MgaXMgYmFzZWQgdGhlIHN5c3RlbS9jb2RlLCBhbmQgdmVyc2lvbiBhbmQgZGlzcGxheSBhcmUgaWdub3JlZC5cclxuICAgKi9cclxuICB0YWc/OiBmaGlyLkNvZGluZ0FyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgbWV0YWRhdGEgYWJvdXQgYSByZXNvdXJjZS4gVGhpcyBpcyBjb250ZW50IGluIHRoZSByZXNvdXJjZSB0aGF0IGlzIG1haW50YWluZWQgYnkgdGhlIGluZnJhc3RydWN0dXJlLiBDaGFuZ2VzIHRvIHRoZSBjb250ZW50IG1pZ2h0IG5vdCBhbHdheXMgYmUgYXNzb2NpYXRlZCB3aXRoIHZlcnNpb24gY2hhbmdlcyB0byB0aGUgcmVzb3VyY2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWV0YSBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnTWV0YSc7XHJcbiAgLyoqXHJcbiAgICogVGhlIHNlcnZlciBhc3NpZ25zIHRoaXMgdmFsdWUsIGFuZCBpZ25vcmVzIHdoYXQgdGhlIGNsaWVudCBzcGVjaWZpZXMsIGV4Y2VwdCBpbiB0aGUgY2FzZSB0aGF0IHRoZSBzZXJ2ZXIgaXMgaW1wb3NpbmcgdmVyc2lvbiBpbnRlZ3JpdHkgb24gdXBkYXRlcy9kZWxldGVzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB2ZXJzaW9uSWQ/OiBmaGlyLkZoaXJJZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyB2YWx1ZSBpcyBhbHdheXMgcG9wdWxhdGVkIGV4Y2VwdCB3aGVuIHRoZSByZXNvdXJjZSBpcyBmaXJzdCBiZWluZyBjcmVhdGVkLiBUaGUgc2VydmVyIC8gcmVzb3VyY2UgbWFuYWdlciBzZXRzIHRoaXMgdmFsdWU7IHdoYXQgYSBjbGllbnQgcHJvdmlkZXMgaXMgaXJyZWxldmFudC4gVGhpcyBpcyBlcXVpdmFsZW50IHRvIHRoZSBIVFRQIExhc3QtTW9kaWZpZWQgYW5kIFNIT1VMRCBoYXZlIHRoZSBzYW1lIHZhbHVlIG9uIGEgW3JlYWRdKGh0dHAuaHRtbCNyZWFkKSBpbnRlcmFjdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgbGFzdFVwZGF0ZWQ/OiBmaGlyLkZoaXJJbnN0YW50fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbiB0aGUgcHJvdmVuYW5jZSByZXNvdXJjZSwgdGhpcyBjb3JyZXNwb25kcyB0byBQcm92ZW5hbmNlLmVudGl0eS53aGF0W3hdLiBUaGUgZXhhY3QgdXNlIG9mIHRoZSBzb3VyY2UgKGFuZCB0aGUgaW1wbGllZCBQcm92ZW5hbmNlLmVudGl0eS5yb2xlKSBpcyBsZWZ0IHRvIGltcGxlbWVudGVyIGRpc2NyZXRpb24uIE9ubHkgb25lIG5vbWluYXRlZCBzb3VyY2UgaXMgYWxsb3dlZDsgZm9yIGFkZGl0aW9uYWwgcHJvdmVuYW5jZSBkZXRhaWxzLCBhIGZ1bGwgUHJvdmVuYW5jZSByZXNvdXJjZSBzaG91bGQgYmUgdXNlZC4gXHJcbiAgICogVGhpcyBlbGVtZW50IGNhbiBiZSB1c2VkIHRvIGluZGljYXRlIHdoZXJlIHRoZSBjdXJyZW50IG1hc3RlciBzb3VyY2Ugb2YgYSByZXNvdXJjZSB0aGF0IGhhcyBhIGNhbm9uaWNhbCBVUkwgaWYgdGhlIHJlc291cmNlIGlzIG5vIGxvbmdlciBob3N0ZWQgYXQgdGhlIGNhbm9uaWNhbCBVUkwuXHJcbiAgICovXHJcbiAgcHVibGljIHNvdXJjZT86IGZoaXIuRmhpclVyaXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSXQgaXMgdXAgdG8gdGhlIHNlcnZlciBhbmQvb3Igb3RoZXIgaW5mcmFzdHJ1Y3R1cmUgb2YgcG9saWN5IHRvIGRldGVybWluZSB3aGV0aGVyL2hvdyB0aGVzZSBjbGFpbXMgYXJlIHZlcmlmaWVkIGFuZC9vciB1cGRhdGVkIG92ZXIgdGltZS4gIFRoZSBsaXN0IG9mIHByb2ZpbGUgVVJMcyBpcyBhIHNldC5cclxuICAgKi9cclxuICBwdWJsaWMgcHJvZmlsZTogZmhpci5GaGlyQ2Fub25pY2FsW107XHJcbiAgLyoqXHJcbiAgICogVGhlIHNlY3VyaXR5IGxhYmVscyBjYW4gYmUgdXBkYXRlZCB3aXRob3V0IGNoYW5naW5nIHRoZSBzdGF0ZWQgdmVyc2lvbiBvZiB0aGUgcmVzb3VyY2UuIFRoZSBsaXN0IG9mIHNlY3VyaXR5IGxhYmVscyBpcyBhIHNldC4gVW5pcXVlbmVzcyBpcyBiYXNlZCB0aGUgc3lzdGVtL2NvZGUsIGFuZCB2ZXJzaW9uIGFuZCBkaXNwbGF5IGFyZSBpZ25vcmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZWN1cml0eTogZmhpci5Db2RpbmdbXTtcclxuICAvKipcclxuICAgKiBUaGUgdGFncyBjYW4gYmUgdXBkYXRlZCB3aXRob3V0IGNoYW5naW5nIHRoZSBzdGF0ZWQgdmVyc2lvbiBvZiB0aGUgcmVzb3VyY2UuIFRoZSBsaXN0IG9mIHRhZ3MgaXMgYSBzZXQuIFVuaXF1ZW5lc3MgaXMgYmFzZWQgdGhlIHN5c3RlbS9jb2RlLCBhbmQgdmVyc2lvbiBhbmQgZGlzcGxheSBhcmUgaWdub3JlZC5cclxuICAgKi9cclxuICBwdWJsaWMgdGFnOiBmaGlyLkNvZGluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIE1ldGEgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxNZXRhQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3ZlcnNpb25JZCddKSB7IHRoaXMudmVyc2lvbklkID0gbmV3IGZoaXIuRmhpcklkKHt2YWx1ZTogc291cmNlLnZlcnNpb25JZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfdmVyc2lvbklkJ10pIHtcclxuICAgICAgaWYgKHRoaXMudmVyc2lvbklkKSB7IHRoaXMudmVyc2lvbklkLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3ZlcnNpb25JZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnZlcnNpb25JZCA9IG5ldyBmaGlyLkZoaXJJZChzb3VyY2UuX3ZlcnNpb25JZCBhcyBQYXJ0aWFsPGZoaXIuRmhpcklkQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydsYXN0VXBkYXRlZCddKSB7IHRoaXMubGFzdFVwZGF0ZWQgPSBuZXcgZmhpci5GaGlySW5zdGFudCh7dmFsdWU6IHNvdXJjZS5sYXN0VXBkYXRlZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfbGFzdFVwZGF0ZWQnXSkge1xyXG4gICAgICBpZiAodGhpcy5sYXN0VXBkYXRlZCkgeyB0aGlzLmxhc3RVcGRhdGVkLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2xhc3RVcGRhdGVkISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubGFzdFVwZGF0ZWQgPSBuZXcgZmhpci5GaGlySW5zdGFudChzb3VyY2UuX2xhc3RVcGRhdGVkIGFzIFBhcnRpYWw8Zmhpci5GaGlySW5zdGFudEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc291cmNlJ10pIHsgdGhpcy5zb3VyY2UgPSBuZXcgZmhpci5GaGlyVXJpKHt2YWx1ZTogc291cmNlLnNvdXJjZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfc291cmNlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc291cmNlKSB7IHRoaXMuc291cmNlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3NvdXJjZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnNvdXJjZSA9IG5ldyBmaGlyLkZoaXJVcmkoc291cmNlLl9zb3VyY2UgYXMgUGFydGlhbDxmaGlyLkZoaXJVcmlBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3Byb2ZpbGUnXSkgeyB0aGlzLnByb2ZpbGUgPSBzb3VyY2UucHJvZmlsZS5tYXAoKHgpID0+IG5ldyBmaGlyLkZoaXJDYW5vbmljYWwoe3ZhbHVlOiB4fSkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5wcm9maWxlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ19wcm9maWxlJ10pIHtcclxuICAgICAgc291cmNlLl9wcm9maWxlLmZvckVhY2goKHgsaSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb2ZpbGUubGVuZ3RoID49IGkpIHsgaWYgKHgpIHsgdGhpcy5wcm9maWxlW2ldLmFkZEV4dGVuZGVkUHJvcGVydGllcyh4KTsgfSB9XHJcbiAgICAgICAgZWxzZSB7IGlmICh4KSB7IHRoaXMucHJvZmlsZS5wdXNoKG5ldyBmaGlyLkZoaXJDYW5vbmljYWwoeCBhcyBQYXJ0aWFsPGZoaXIuRmhpckNhbm9uaWNhbEFyZ3M+KSk7IH0gfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3NlY3VyaXR5J10pIHsgdGhpcy5zZWN1cml0eSA9IHNvdXJjZS5zZWN1cml0eS5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGluZyh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnNlY3VyaXR5ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3RhZyddKSB7IHRoaXMudGFnID0gc291cmNlLnRhZy5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGluZyh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnRhZyA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnTWV0YScgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3ZlcnNpb25JZCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnbGFzdFVwZGF0ZWQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3NvdXJjZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgncHJvZmlsZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnc2VjdXJpdHknLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ3RhZycsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=