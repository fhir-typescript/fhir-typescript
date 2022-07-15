// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Address
import * as fhir from '../fhir.js';
// @ts-ignore
import { AddressUseVsValidation } from '../fhirValueSets/AddressUseVsValidation.js';
// @ts-ignore
import { AddressTypeVsValidation } from '../fhirValueSets/AddressTypeVsValidation.js';
/**
 * There is a variety of postal address formats defined around the world. This format defines a superset that is the basis for all addresses around the world.
 */
export class Address extends fhir.FhirElement {
    /**
     * Default constructor for Address - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['use']) {
            this.use = new fhir.FhirCode({ value: source.use });
        }
        if (source['_use']) {
            if (this.use) {
                this.use.addExtendedProperties(source._use);
            }
            else {
                this.use = new fhir.FhirCode(source._use);
            }
        }
        if (source['type']) {
            this.type = new fhir.FhirCode({ value: source.type });
        }
        if (source['_type']) {
            if (this.type) {
                this.type.addExtendedProperties(source._type);
            }
            else {
                this.type = new fhir.FhirCode(source._type);
            }
        }
        if (source['text']) {
            this.text = new fhir.FhirString({ value: source.text });
        }
        if (source['_text']) {
            if (this.text) {
                this.text.addExtendedProperties(source._text);
            }
            else {
                this.text = new fhir.FhirString(source._text);
            }
        }
        if (source['line']) {
            this.line = source.line.map((x) => new fhir.FhirString({ value: x }));
        }
        else {
            this.line = [];
        }
        if (source['_line']) {
            source._line.forEach((x, i) => {
                if (this.line.length >= i) {
                    if (x) {
                        this.line[i].addExtendedProperties(x);
                    }
                }
                else {
                    if (x) {
                        this.line.push(new fhir.FhirString(x));
                    }
                }
            });
        }
        if (source['city']) {
            this.city = new fhir.FhirString({ value: source.city });
        }
        if (source['_city']) {
            if (this.city) {
                this.city.addExtendedProperties(source._city);
            }
            else {
                this.city = new fhir.FhirString(source._city);
            }
        }
        if (source['district']) {
            this.district = new fhir.FhirString({ value: source.district });
        }
        if (source['_district']) {
            if (this.district) {
                this.district.addExtendedProperties(source._district);
            }
            else {
                this.district = new fhir.FhirString(source._district);
            }
        }
        if (source['state']) {
            this.state = new fhir.FhirString({ value: source.state });
        }
        if (source['_state']) {
            if (this.state) {
                this.state.addExtendedProperties(source._state);
            }
            else {
                this.state = new fhir.FhirString(source._state);
            }
        }
        if (source['postalCode']) {
            this.postalCode = new fhir.FhirString({ value: source.postalCode });
        }
        if (source['_postalCode']) {
            if (this.postalCode) {
                this.postalCode.addExtendedProperties(source._postalCode);
            }
            else {
                this.postalCode = new fhir.FhirString(source._postalCode);
            }
        }
        if (source['country']) {
            this.country = new fhir.FhirString({ value: source.country });
        }
        if (source['_country']) {
            if (this.country) {
                this.country.addExtendedProperties(source._country);
            }
            else {
                this.country = new fhir.FhirString(source._country);
            }
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
            exp = 'Address';
        }
        this.vOSV('use', exp, 'AddressUse', AddressUseVsValidation, 'r');
        this.vOSV('type', exp, 'AddressType', AddressTypeVsValidation, 'r');
        this.vOS('text', exp);
        this.vOA('line', exp);
        this.vOS('city', exp);
        this.vOS('district', exp);
        this.vOS('state', exp);
        this.vOS('postalCode', exp);
        this.vOS('country', exp);
        this.vOS('period', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Address._fts_dataType = 'Address';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyw0QkFBNEI7QUFFNUIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBR3BGLGFBQWE7QUFDYixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQW1GdEY7O0dBRUc7QUFDSCxNQUFNLE9BQU8sT0FBUSxTQUFRLElBQUksQ0FBQyxXQUFXO0lBNkMzQzs7T0FFRztJQUNILFlBQVksU0FBOEIsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDcEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFxQixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQzdGLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFLLENBQUMsQ0FBQzthQUFFO2lCQUMxRDtnQkFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBcUIsTUFBTSxDQUFDLElBQThCLENBQUMsQ0FBQzthQUFFO1NBQ2xHO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FB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QUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUFwSEQ7O0dBRUc7QUFDNkIscUJBQWEsR0FBVSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IEFkZHJlc3NcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEFkZHJlc3NVc2VDb2RlcywgIEFkZHJlc3NVc2VDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQWRkcmVzc1VzZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBBZGRyZXNzVXNlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9BZGRyZXNzVXNlVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBBZGRyZXNzVHlwZUNvZGVzLCAgQWRkcmVzc1R5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQWRkcmVzc1R5cGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQWRkcmVzc1R5cGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0FkZHJlc3NUeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEFkZHJlc3MgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzc0FyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIGFuIGFwcHJvcHJpYXRlIGFkZHJlc3MgdG8gYmUgY2hvc2VuIGZyb20gYSBsaXN0IG9mIG1hbnkuXHJcbiAgICovXHJcbiAgdXNlPzogZmhpci5GaGlyQ29kZTxBZGRyZXNzVXNlQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFkZHJlc3MudXNlXHJcbiAgICovXHJcbiAgX3VzZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogRGlzdGluZ3Vpc2hlcyBiZXR3ZWVuIHBoeXNpY2FsIGFkZHJlc3NlcyAodGhvc2UgeW91IGNhbiB2aXNpdCkgYW5kIG1haWxpbmcgYWRkcmVzc2VzIChlLmcuIFBPIEJveGVzIGFuZCBjYXJlLW9mIGFkZHJlc3NlcykuIE1vc3QgYWRkcmVzc2VzIGFyZSBib3RoLlxyXG4gICAqL1xyXG4gIHR5cGU/OiBmaGlyLkZoaXJDb2RlPEFkZHJlc3NUeXBlQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFkZHJlc3MudHlwZVxyXG4gICAqL1xyXG4gIF90eXBlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIHJlbmRlcmFibGUsIHVuZW5jb2RlZCBmb3JtLlxyXG4gICAqL1xyXG4gIHRleHQ/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQWRkcmVzcy50ZXh0XHJcbiAgICovXHJcbiAgX3RleHQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGhvbWUgfCB3b3JrIHwgdGVtcCB8IG9sZCAtIHB1cnBvc2Ugb2YgdGhpcyBhZGRyZXNzLlxyXG4gICAqL1xyXG4gIGxpbmU/OiBmaGlyLkZoaXJTdHJpbmdbXXwoc3RyaW5nfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBZGRyZXNzLmxpbmVcclxuICAgKi9cclxuICBfbGluZT86KGZoaXIuRmhpckVsZW1lbnRBcmdzfG51bGwpW107XHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgdGhlIGNpdHksIHRvd24sIHZpbGxhZ2Ugb3Igb3RoZXIgY29tbXVuaXR5IG9yIGRlbGl2ZXJ5IGNlbnRlci5cclxuICAgKi9cclxuICBjaXR5PzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFkZHJlc3MuY2l0eVxyXG4gICAqL1xyXG4gIF9jaXR5PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgYWRtaW5pc3RyYXRpdmUgYXJlYSAoY291bnR5KS5cclxuICAgKi9cclxuICBkaXN0cmljdD86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBZGRyZXNzLmRpc3RyaWN0XHJcbiAgICovXHJcbiAgX2Rpc3RyaWN0PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBTdWItdW5pdCBvZiBhIGNvdW50cnkgd2l0aCBsaW1pdGVkIHNvdmVyZWlnbnR5IGluIGEgZmVkZXJhbGx5IG9yZ2FuaXplZCBjb3VudHJ5LiBBIGNvZGUgbWF5IGJlIHVzZWQgaWYgY29kZXMgYXJlIGluIGNvbW1vbiB1c2UgKGkuZS4gVVMgMiBsZXR0ZXIgc3RhdGUgY29kZXMpLlxyXG4gICAqL1xyXG4gIHN0YXRlPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFkZHJlc3Muc3RhdGVcclxuICAgKi9cclxuICBfc3RhdGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEEgcG9zdGFsIGNvZGUgZGVzaWduYXRpbmcgYSByZWdpb24gZGVmaW5lZCBieSB0aGUgcG9zdGFsIHNlcnZpY2UuXHJcbiAgICovXHJcbiAgcG9zdGFsQ29kZT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBZGRyZXNzLnBvc3RhbENvZGVcclxuICAgKi9cclxuICBfcG9zdGFsQ29kZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ291bnRyeSAtIGEgbmF0aW9uIGFzIGNvbW1vbmx5IHVuZGVyc3Rvb2Qgb3IgZ2VuZXJhbGx5IGFjY2VwdGVkLlxyXG4gICAqL1xyXG4gIGNvdW50cnk/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQWRkcmVzcy5jb3VudHJ5XHJcbiAgICovXHJcbiAgX2NvdW50cnk/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEFsbG93cyBhZGRyZXNzZXMgdG8gYmUgcGxhY2VkIGluIGhpc3RvcmljYWwgY29udGV4dC5cclxuICAgKi9cclxuICBwZXJpb2Q/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlcmUgaXMgYSB2YXJpZXR5IG9mIHBvc3RhbCBhZGRyZXNzIGZvcm1hdHMgZGVmaW5lZCBhcm91bmQgdGhlIHdvcmxkLiBUaGlzIGZvcm1hdCBkZWZpbmVzIGEgc3VwZXJzZXQgdGhhdCBpcyB0aGUgYmFzaXMgZm9yIGFsbCBhZGRyZXNzZXMgYXJvdW5kIHRoZSB3b3JsZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBZGRyZXNzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdBZGRyZXNzJztcclxuICAvKipcclxuICAgKiBBbGxvd3MgYW4gYXBwcm9wcmlhdGUgYWRkcmVzcyB0byBiZSBjaG9zZW4gZnJvbSBhIGxpc3Qgb2YgbWFueS5cclxuICAgKi9cclxuICBwdWJsaWMgdXNlPzogZmhpci5GaGlyQ29kZTxBZGRyZXNzVXNlQ29kZVR5cGU+fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEaXN0aW5ndWlzaGVzIGJldHdlZW4gcGh5c2ljYWwgYWRkcmVzc2VzICh0aG9zZSB5b3UgY2FuIHZpc2l0KSBhbmQgbWFpbGluZyBhZGRyZXNzZXMgKGUuZy4gUE8gQm94ZXMgYW5kIGNhcmUtb2YgYWRkcmVzc2VzKS4gTW9zdCBhZGRyZXNzZXMgYXJlIGJvdGguXHJcbiAgICovXHJcbiAgcHVibGljIHR5cGU/OiBmaGlyLkZoaXJDb2RlPEFkZHJlc3NUeXBlQ29kZVR5cGU+fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIHJlbmRlcmFibGUsIHVuZW5jb2RlZCBmb3JtLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0ZXh0PzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBob21lIHwgd29yayB8IHRlbXAgfCBvbGQgLSBwdXJwb3NlIG9mIHRoaXMgYWRkcmVzcy5cclxuICAgKi9cclxuICBwdWJsaWMgbGluZTogZmhpci5GaGlyU3RyaW5nW107XHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgdGhlIGNpdHksIHRvd24sIHZpbGxhZ2Ugb3Igb3RoZXIgY29tbXVuaXR5IG9yIGRlbGl2ZXJ5IGNlbnRlci5cclxuICAgKi9cclxuICBwdWJsaWMgY2l0eT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgdGhlIGFkbWluaXN0cmF0aXZlIGFyZWEgKGNvdW50eSkuXHJcbiAgICovXHJcbiAgcHVibGljIGRpc3RyaWN0PzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTdWItdW5pdCBvZiBhIGNvdW50cnkgd2l0aCBsaW1pdGVkIHNvdmVyZWlnbnR5IGluIGEgZmVkZXJhbGx5IG9yZ2FuaXplZCBjb3VudHJ5LiBBIGNvZGUgbWF5IGJlIHVzZWQgaWYgY29kZXMgYXJlIGluIGNvbW1vbiB1c2UgKGkuZS4gVVMgMiBsZXR0ZXIgc3RhdGUgY29kZXMpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0ZT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBwb3N0YWwgY29kZSBkZXNpZ25hdGluZyBhIHJlZ2lvbiBkZWZpbmVkIGJ5IHRoZSBwb3N0YWwgc2VydmljZS5cclxuICAgKi9cclxuICBwdWJsaWMgcG9zdGFsQ29kZT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQ291bnRyeSAtIGEgbmF0aW9uIGFzIGNvbW1vbmx5IHVuZGVyc3Rvb2Qgb3IgZ2VuZXJhbGx5IGFjY2VwdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb3VudHJ5PzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbGxvd3MgYWRkcmVzc2VzIHRvIGJlIHBsYWNlZCBpbiBoaXN0b3JpY2FsIGNvbnRleHQuXHJcbiAgICovXHJcbiAgcHVibGljIHBlcmlvZD86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBBZGRyZXNzIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8QWRkcmVzc0FyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyd1c2UnXSkgeyB0aGlzLnVzZSA9IG5ldyBmaGlyLkZoaXJDb2RlPEFkZHJlc3NVc2VDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2UudXNlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ191c2UnXSkge1xyXG4gICAgICBpZiAodGhpcy51c2UpIHsgdGhpcy51c2UuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdXNlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudXNlID0gbmV3IGZoaXIuRmhpckNvZGU8QWRkcmVzc1VzZUNvZGVUeXBlPihzb3VyY2UuX3VzZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndHlwZSddKSB7IHRoaXMudHlwZSA9IG5ldyBmaGlyLkZoaXJDb2RlPEFkZHJlc3NUeXBlQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnR5cGV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3R5cGUnXSkge1xyXG4gICAgICBpZiAodGhpcy50eXBlKSB7IHRoaXMudHlwZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl90eXBlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudHlwZSA9IG5ldyBmaGlyLkZoaXJDb2RlPEFkZHJlc3NUeXBlQ29kZVR5cGU+KHNvdXJjZS5fdHlwZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndGV4dCddKSB7IHRoaXMudGV4dCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UudGV4dH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfdGV4dCddKSB7XHJcbiAgICAgIGlmICh0aGlzLnRleHQpIHsgdGhpcy50ZXh0LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3RleHQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy50ZXh0ID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX3RleHQgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2xpbmUnXSkgeyB0aGlzLmxpbmUgPSBzb3VyY2UubGluZS5tYXAoKHgpID0+IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiB4fSkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5saW5lID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ19saW5lJ10pIHtcclxuICAgICAgc291cmNlLl9saW5lLmZvckVhY2goKHgsaSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmxpbmUubGVuZ3RoID49IGkpIHsgaWYgKHgpIHsgdGhpcy5saW5lW2ldLmFkZEV4dGVuZGVkUHJvcGVydGllcyh4KTsgfSB9XHJcbiAgICAgICAgZWxzZSB7IGlmICh4KSB7IHRoaXMubGluZS5wdXNoKG5ldyBmaGlyLkZoaXJTdHJpbmcoeCBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KSk7IH0gfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NpdHknXSkgeyB0aGlzLmNpdHkgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmNpdHl9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NpdHknXSkge1xyXG4gICAgICBpZiAodGhpcy5jaXR5KSB7IHRoaXMuY2l0eS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jaXR5ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY2l0eSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9jaXR5IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydkaXN0cmljdCddKSB7IHRoaXMuZGlzdHJpY3QgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmRpc3RyaWN0fSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kaXN0cmljdCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRpc3RyaWN0KSB7IHRoaXMuZGlzdHJpY3QuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZGlzdHJpY3QhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kaXN0cmljdCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9kaXN0cmljdCBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdGUnXSkgeyB0aGlzLnN0YXRlID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5zdGF0ZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZSkgeyB0aGlzLnN0YXRlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXRlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdGUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fc3RhdGUgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3Bvc3RhbENvZGUnXSkgeyB0aGlzLnBvc3RhbENvZGUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnBvc3RhbENvZGV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3Bvc3RhbENvZGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5wb3N0YWxDb2RlKSB7IHRoaXMucG9zdGFsQ29kZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9wb3N0YWxDb2RlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucG9zdGFsQ29kZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9wb3N0YWxDb2RlIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjb3VudHJ5J10pIHsgdGhpcy5jb3VudHJ5ID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5jb3VudHJ5fSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jb3VudHJ5J10pIHtcclxuICAgICAgaWYgKHRoaXMuY291bnRyeSkgeyB0aGlzLmNvdW50cnkuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY291bnRyeSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNvdW50cnkgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fY291bnRyeSBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncGVyaW9kJ10pIHsgdGhpcy5wZXJpb2QgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLnBlcmlvZCk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdBZGRyZXNzJyB9XHJcbiAgICB0aGlzLnZPU1YoJ3VzZScsZXhwLCdBZGRyZXNzVXNlJyxBZGRyZXNzVXNlVnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHRoaXMudk9TVigndHlwZScsZXhwLCdBZGRyZXNzVHlwZScsQWRkcmVzc1R5cGVWc1ZhbGlkYXRpb24sJ3InKVxyXG4gICAgdGhpcy52T1MoJ3RleHQnLGV4cClcclxuICAgIHRoaXMudk9BKCdsaW5lJyxleHApXHJcbiAgICB0aGlzLnZPUygnY2l0eScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2Rpc3RyaWN0JyxleHApXHJcbiAgICB0aGlzLnZPUygnc3RhdGUnLGV4cClcclxuICAgIHRoaXMudk9TKCdwb3N0YWxDb2RlJyxleHApXHJcbiAgICB0aGlzLnZPUygnY291bnRyeScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3BlcmlvZCcsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19