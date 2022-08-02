// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: Resource
import * as fhir from '../fhir.js';
/**
 * This is the base resource type for everything.
 */
export class Resource extends fhir.FhirBase {
    /**
     * Default constructor for Resource - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Resource';
        if (source['id']) {
            this.id = new fhir.FhirIdSimple({ value: source.id });
        }
        if (source['meta']) {
            this.meta = new fhir.Meta(source.meta);
        }
        if (source['implicitRules']) {
            this.implicitRules = new fhir.FhirUri({ value: source.implicitRules });
        }
        if (source['_implicitRules']) {
            if (this.implicitRules) {
                this.implicitRules.addExtendedProperties(source._implicitRules);
            }
            else {
                this.implicitRules = new fhir.FhirUri(source._implicitRules);
            }
        }
        if (source['language']) {
            this.language = new fhir.FhirCode({ value: source.language });
        }
        if (source['_language']) {
            if (this.language) {
                this.language.addExtendedProperties(source._language);
            }
            else {
                this.language = new fhir.FhirCode(source._language);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Resource';
        }
        iss.push(...this.vOS('id', exp));
        iss.push(...this.vOS('meta', exp));
        iss.push(...this.vOS('implicitRules', exp));
        iss.push(...this.vOS('language', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Resource._fts_dataType = 'Resource';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1Jlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUUxQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQWdEbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sUUFBUyxTQUFRLElBQUksQ0FBQyxRQUFRO0lBeUJ6Qzs7T0FFRztJQUNILFlBQVksU0FBK0IsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDckYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztRQUMvQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDMUUsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FBRTtRQUMvRCxJQUFJLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDdEcsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUM1QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsY0FBZSxDQUFDLENBQUM7YUFBRTtpQkFDeEY7Z0JBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQTJDLENBQUMsQ0FBQzthQUFFO1NBQ3BHO1FBQ0QsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3hGLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxTQUFVLENBQUMsQ0FBQzthQUFFO2lCQUN6RTtnQkFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBdUMsQ0FBQyxDQUFDO2FBQUU7U0FDNUY7SUFDSCxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxHQUFHLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsVUFBVSxDQUFBO1NBQUU7UUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQXRERDs7R0FFRztBQUM2QixzQkFBYSxHQUFVLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IFJlc291cmNlXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBSZXNvdXJjZVR5cGVzVmFsdWVTZXRDb2RlcywgIFJlc291cmNlVHlwZXNWYWx1ZVNldENvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9SZXNvdXJjZVR5cGVzVmFsdWVTZXRDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUmVzb3VyY2VUeXBlc1ZhbHVlU2V0VnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9SZXNvdXJjZVR5cGVzVmFsdWVTZXRWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IExhbmd1YWdlc0NvZGVzLCAgTGFuZ3VhZ2VzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xhbmd1YWdlc0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBMYW5ndWFnZXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xhbmd1YWdlc1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBSZXNvdXJjZSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZUFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJCYXNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBzdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgb25seSB0aW1lIHRoYXQgYSByZXNvdXJjZSBkb2VzIG5vdCBoYXZlIGFuIGlkIGlzIHdoZW4gaXQgaXMgYmVpbmcgc3VibWl0dGVkIHRvIHRoZSBzZXJ2ZXIgdXNpbmcgYSBjcmVhdGUgb3BlcmF0aW9uLlxyXG4gICAqL1xyXG4gIGlkPzogZmhpci5GaGlySWRTaW1wbGV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUmVzb3VyY2UuaWRcclxuICAgKi9cclxuICBfaWQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtZXRhZGF0YSBhYm91dCB0aGUgcmVzb3VyY2UuIFRoaXMgaXMgY29udGVudCB0aGF0IGlzIG1haW50YWluZWQgYnkgdGhlIGluZnJhc3RydWN0dXJlLiBDaGFuZ2VzIHRvIHRoZSBjb250ZW50IG1pZ2h0IG5vdCBhbHdheXMgYmUgYXNzb2NpYXRlZCB3aXRoIHZlcnNpb24gY2hhbmdlcyB0byB0aGUgcmVzb3VyY2UuXHJcbiAgICovXHJcbiAgbWV0YT86IGZoaXIuTWV0YUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFzc2VydGluZyB0aGlzIHJ1bGUgc2V0IHJlc3RyaWN0cyB0aGUgY29udGVudCB0byBiZSBvbmx5IHVuZGVyc3Rvb2QgYnkgYSBsaW1pdGVkIHNldCBvZiB0cmFkaW5nIHBhcnRuZXJzLiBUaGlzIGluaGVyZW50bHkgbGltaXRzIHRoZSB1c2VmdWxuZXNzIG9mIHRoZSBkYXRhIGluIHRoZSBsb25nIHRlcm0uIEhvd2V2ZXIsIHRoZSBleGlzdGluZyBoZWFsdGggZWNvLXN5c3RlbSBpcyBoaWdobHkgZnJhY3R1cmVkLCBhbmQgbm90IHlldCByZWFkeSB0byBkZWZpbmUsIGNvbGxlY3QsIGFuZCBleGNoYW5nZSBkYXRhIGluIGEgZ2VuZXJhbGx5IGNvbXB1dGFibGUgc2Vuc2UuIFdoZXJldmVyIHBvc3NpYmxlLCBpbXBsZW1lbnRlcnMgYW5kL29yIHNwZWNpZmljYXRpb24gd3JpdGVycyBzaG91bGQgYXZvaWQgdXNpbmcgdGhpcyBlbGVtZW50LiBPZnRlbiwgd2hlbiB1c2VkLCB0aGUgVVJMIGlzIGEgcmVmZXJlbmNlIHRvIGFuIGltcGxlbWVudGF0aW9uIGd1aWRlIHRoYXQgZGVmaW5lcyB0aGVzZSBzcGVjaWFsIHJ1bGVzIGFzIHBhcnQgb2YgaXQncyBuYXJyYXRpdmUgYWxvbmcgd2l0aCBvdGhlciBwcm9maWxlcywgdmFsdWUgc2V0cywgZXRjLlxyXG4gICAqL1xyXG4gIGltcGxpY2l0UnVsZXM/OiBmaGlyLkZoaXJVcml8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUmVzb3VyY2UuaW1wbGljaXRSdWxlc1xyXG4gICAqL1xyXG4gIF9pbXBsaWNpdFJ1bGVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBMYW5ndWFnZSBpcyBwcm92aWRlZCB0byBzdXBwb3J0IGluZGV4aW5nIGFuZCBhY2Nlc3NpYmlsaXR5ICh0eXBpY2FsbHksIHNlcnZpY2VzIHN1Y2ggYXMgdGV4dCB0byBzcGVlY2ggdXNlIHRoZSBsYW5ndWFnZSB0YWcpLiBUaGUgaHRtbCBsYW5ndWFnZSB0YWcgaW4gdGhlIG5hcnJhdGl2ZSBhcHBsaWVzICB0byB0aGUgbmFycmF0aXZlLiBUaGUgbGFuZ3VhZ2UgdGFnIG9uIHRoZSByZXNvdXJjZSBtYXkgYmUgdXNlZCB0byBzcGVjaWZ5IHRoZSBsYW5ndWFnZSBvZiBvdGhlciBwcmVzZW50YXRpb25zIGdlbmVyYXRlZCBmcm9tIHRoZSBkYXRhIGluIHRoZSByZXNvdXJjZS4gTm90IGFsbCB0aGUgY29udGVudCBoYXMgdG8gYmUgaW4gdGhlIGJhc2UgbGFuZ3VhZ2UuIFRoZSBSZXNvdXJjZS5sYW5ndWFnZSBzaG91bGQgbm90IGJlIGFzc3VtZWQgdG8gYXBwbHkgdG8gdGhlIG5hcnJhdGl2ZSBhdXRvbWF0aWNhbGx5LiBJZiBhIGxhbmd1YWdlIGlzIHNwZWNpZmllZCwgaXQgc2hvdWxkIGl0IGFsc28gYmUgc3BlY2lmaWVkIG9uIHRoZSBkaXYgZWxlbWVudCBpbiB0aGUgaHRtbCAoc2VlIHJ1bGVzIGluIEhUTUw1IGZvciBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW4geG1sOmxhbmcgYW5kIHRoZSBodG1sIGxhbmcgYXR0cmlidXRlKS5cclxuICAgKi9cclxuICBsYW5ndWFnZT86IGZoaXIuRmhpckNvZGV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUmVzb3VyY2UubGFuZ3VhZ2VcclxuICAgKi9cclxuICBfbGFuZ3VhZ2U/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgYmFzZSByZXNvdXJjZSB0eXBlIGZvciBldmVyeXRoaW5nLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlc291cmNlIGV4dGVuZHMgZmhpci5GaGlyQmFzZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdSZXNvdXJjZSc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIHJlc291cmNlVHlwZTogc3RyaW5nfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIG9ubHkgdGltZSB0aGF0IGEgcmVzb3VyY2UgZG9lcyBub3QgaGF2ZSBhbiBpZCBpcyB3aGVuIGl0IGlzIGJlaW5nIHN1Ym1pdHRlZCB0byB0aGUgc2VydmVyIHVzaW5nIGEgY3JlYXRlIG9wZXJhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgaWQ/OiBmaGlyLkZoaXJJZFNpbXBsZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1ldGFkYXRhIGFib3V0IHRoZSByZXNvdXJjZS4gVGhpcyBpcyBjb250ZW50IHRoYXQgaXMgbWFpbnRhaW5lZCBieSB0aGUgaW5mcmFzdHJ1Y3R1cmUuIENoYW5nZXMgdG8gdGhlIGNvbnRlbnQgbWlnaHQgbm90IGFsd2F5cyBiZSBhc3NvY2lhdGVkIHdpdGggdmVyc2lvbiBjaGFuZ2VzIHRvIHRoZSByZXNvdXJjZS5cclxuICAgKi9cclxuICBwdWJsaWMgbWV0YT86IGZoaXIuTWV0YXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQXNzZXJ0aW5nIHRoaXMgcnVsZSBzZXQgcmVzdHJpY3RzIHRoZSBjb250ZW50IHRvIGJlIG9ubHkgdW5kZXJzdG9vZCBieSBhIGxpbWl0ZWQgc2V0IG9mIHRyYWRpbmcgcGFydG5lcnMuIFRoaXMgaW5oZXJlbnRseSBsaW1pdHMgdGhlIHVzZWZ1bG5lc3Mgb2YgdGhlIGRhdGEgaW4gdGhlIGxvbmcgdGVybS4gSG93ZXZlciwgdGhlIGV4aXN0aW5nIGhlYWx0aCBlY28tc3lzdGVtIGlzIGhpZ2hseSBmcmFjdHVyZWQsIGFuZCBub3QgeWV0IHJlYWR5IHRvIGRlZmluZSwgY29sbGVjdCwgYW5kIGV4Y2hhbmdlIGRhdGEgaW4gYSBnZW5lcmFsbHkgY29tcHV0YWJsZSBzZW5zZS4gV2hlcmV2ZXIgcG9zc2libGUsIGltcGxlbWVudGVycyBhbmQvb3Igc3BlY2lmaWNhdGlvbiB3cml0ZXJzIHNob3VsZCBhdm9pZCB1c2luZyB0aGlzIGVsZW1lbnQuIE9mdGVuLCB3aGVuIHVzZWQsIHRoZSBVUkwgaXMgYSByZWZlcmVuY2UgdG8gYW4gaW1wbGVtZW50YXRpb24gZ3VpZGUgdGhhdCBkZWZpbmVzIHRoZXNlIHNwZWNpYWwgcnVsZXMgYXMgcGFydCBvZiBpdCdzIG5hcnJhdGl2ZSBhbG9uZyB3aXRoIG90aGVyIHByb2ZpbGVzLCB2YWx1ZSBzZXRzLCBldGMuXHJcbiAgICovXHJcbiAgcHVibGljIGltcGxpY2l0UnVsZXM/OiBmaGlyLkZoaXJVcml8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIExhbmd1YWdlIGlzIHByb3ZpZGVkIHRvIHN1cHBvcnQgaW5kZXhpbmcgYW5kIGFjY2Vzc2liaWxpdHkgKHR5cGljYWxseSwgc2VydmljZXMgc3VjaCBhcyB0ZXh0IHRvIHNwZWVjaCB1c2UgdGhlIGxhbmd1YWdlIHRhZykuIFRoZSBodG1sIGxhbmd1YWdlIHRhZyBpbiB0aGUgbmFycmF0aXZlIGFwcGxpZXMgIHRvIHRoZSBuYXJyYXRpdmUuIFRoZSBsYW5ndWFnZSB0YWcgb24gdGhlIHJlc291cmNlIG1heSBiZSB1c2VkIHRvIHNwZWNpZnkgdGhlIGxhbmd1YWdlIG9mIG90aGVyIHByZXNlbnRhdGlvbnMgZ2VuZXJhdGVkIGZyb20gdGhlIGRhdGEgaW4gdGhlIHJlc291cmNlLiBOb3QgYWxsIHRoZSBjb250ZW50IGhhcyB0byBiZSBpbiB0aGUgYmFzZSBsYW5ndWFnZS4gVGhlIFJlc291cmNlLmxhbmd1YWdlIHNob3VsZCBub3QgYmUgYXNzdW1lZCB0byBhcHBseSB0byB0aGUgbmFycmF0aXZlIGF1dG9tYXRpY2FsbHkuIElmIGEgbGFuZ3VhZ2UgaXMgc3BlY2lmaWVkLCBpdCBzaG91bGQgaXQgYWxzbyBiZSBzcGVjaWZpZWQgb24gdGhlIGRpdiBlbGVtZW50IGluIHRoZSBodG1sIChzZWUgcnVsZXMgaW4gSFRNTDUgZm9yIGluZm9ybWF0aW9uIGFib3V0IHRoZSByZWxhdGlvbnNoaXAgYmV0d2VlbiB4bWw6bGFuZyBhbmQgdGhlIGh0bWwgbGFuZyBhdHRyaWJ1dGUpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsYW5ndWFnZT86IGZoaXIuRmhpckNvZGV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFJlc291cmNlIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8UmVzb3VyY2VBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnUmVzb3VyY2UnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWQnXSkgeyB0aGlzLmlkID0gbmV3IGZoaXIuRmhpcklkU2ltcGxlKHt2YWx1ZTogc291cmNlLmlkfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ21ldGEnXSkgeyB0aGlzLm1ldGEgPSBuZXcgZmhpci5NZXRhKHNvdXJjZS5tZXRhKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnaW1wbGljaXRSdWxlcyddKSB7IHRoaXMuaW1wbGljaXRSdWxlcyA9IG5ldyBmaGlyLkZoaXJVcmkoe3ZhbHVlOiBzb3VyY2UuaW1wbGljaXRSdWxlc30pOyB9XHJcbiAgICBpZiAoc291cmNlWydfaW1wbGljaXRSdWxlcyddKSB7XHJcbiAgICAgIGlmICh0aGlzLmltcGxpY2l0UnVsZXMpIHsgdGhpcy5pbXBsaWNpdFJ1bGVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2ltcGxpY2l0UnVsZXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5pbXBsaWNpdFJ1bGVzID0gbmV3IGZoaXIuRmhpclVyaShzb3VyY2UuX2ltcGxpY2l0UnVsZXMgYXMgUGFydGlhbDxmaGlyLkZoaXJVcmlBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2xhbmd1YWdlJ10pIHsgdGhpcy5sYW5ndWFnZSA9IG5ldyBmaGlyLkZoaXJDb2RlKHt2YWx1ZTogc291cmNlLmxhbmd1YWdlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19sYW5ndWFnZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmxhbmd1YWdlKSB7IHRoaXMubGFuZ3VhZ2UuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fbGFuZ3VhZ2UhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5sYW5ndWFnZSA9IG5ldyBmaGlyLkZoaXJDb2RlKHNvdXJjZS5fbGFuZ3VhZ2UgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnUmVzb3VyY2UnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdpZCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnbWV0YScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnaW1wbGljaXRSdWxlcycsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnbGFuZ3VhZ2UnLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19