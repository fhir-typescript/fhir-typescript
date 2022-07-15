// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Address
import * as fhir from '../fhir.js';
// @ts-ignore
import { AddressUseVsValidation } from '../fhirValueSets/AddressUseVsValidation.js';
// @ts-ignore
import { AddressTypeVsValidation } from '../fhirValueSets/AddressTypeVsValidation.js';
/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyw0QkFBNEI7QUFFNUIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBR3BGLGFBQWE7QUFDYixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQW1GdEY7O0dBRUc7QUFDSCxNQUFNLE9BQU8sT0FBUSxTQUFRLElBQUksQ0FBQyxXQUFXO0lBNkMzQzs7T0FFRztJQUNILFlBQVksU0FBOEIsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDcEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFxQixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQzdGLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFLLENBQUMsQ0FBQzthQUFFO2lCQUMxRDtnQkFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBcUIsTUFBTSxDQUFDLElBQThCLENBQUMsQ0FBQzthQUFFO1NBQ2xHO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FB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QUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUFwSEQ7O0dBRUc7QUFDNkIscUJBQWEsR0FBVSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IEFkZHJlc3NcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEFkZHJlc3NVc2VDb2RlcywgIEFkZHJlc3NVc2VDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQWRkcmVzc1VzZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBBZGRyZXNzVXNlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9BZGRyZXNzVXNlVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBBZGRyZXNzVHlwZUNvZGVzLCAgQWRkcmVzc1R5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQWRkcmVzc1R5cGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQWRkcmVzc1R5cGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0FkZHJlc3NUeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEFkZHJlc3MgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzc0FyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogQXBwbGljYXRpb25zIGNhbiBhc3N1bWUgdGhhdCBhbiBhZGRyZXNzIGlzIGN1cnJlbnQgdW5sZXNzIGl0IGV4cGxpY2l0bHkgc2F5cyB0aGF0IGl0IGlzIHRlbXBvcmFyeSBvciBvbGQuXHJcbiAgICovXHJcbiAgdXNlPzogZmhpci5GaGlyQ29kZTxBZGRyZXNzVXNlQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFkZHJlc3MudXNlXHJcbiAgICovXHJcbiAgX3VzZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRlZmluaXRpb24gb2YgQWRkcmVzcyBzdGF0ZXMgdGhhdCBcImFkZHJlc3MgaXMgaW50ZW5kZWQgdG8gZGVzY3JpYmUgcG9zdGFsIGFkZHJlc3Nlcywgbm90IHBoeXNpY2FsIGxvY2F0aW9uc1wiLiBIb3dldmVyLCBtYW55IGFwcGxpY2F0aW9ucyB0cmFjayB3aGV0aGVyIGFuIGFkZHJlc3MgaGFzIGEgZHVhbCBwdXJwb3NlIG9mIGJlaW5nIGEgbG9jYXRpb24gdGhhdCBjYW4gYmUgdmlzaXRlZCBhcyB3ZWxsIGFzIGJlaW5nIGEgdmFsaWQgZGVsaXZlcnkgZGVzdGluYXRpb24sIGFuZCBQb3N0YWwgYWRkcmVzc2VzIGFyZSBvZnRlbiB1c2VkIGFzIHByb3hpZXMgZm9yIHBoeXNpY2FsIGxvY2F0aW9ucyAoYWxzbyBzZWUgdGhlIFtMb2NhdGlvbl0obG9jYXRpb24uaHRtbCMpIHJlc291cmNlKS5cclxuICAgKi9cclxuICB0eXBlPzogZmhpci5GaGlyQ29kZTxBZGRyZXNzVHlwZUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBZGRyZXNzLnR5cGVcclxuICAgKi9cclxuICBfdHlwZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ2FuIHByb3ZpZGUgYm90aCBhIHRleHQgcmVwcmVzZW50YXRpb24gYW5kIHBhcnRzLiBBcHBsaWNhdGlvbnMgdXBkYXRpbmcgYW4gYWRkcmVzcyBTSEFMTCBlbnN1cmUgdGhhdCAgd2hlbiBib3RoIHRleHQgYW5kIHBhcnRzIGFyZSBwcmVzZW50LCAgbm8gY29udGVudCBpcyBpbmNsdWRlZCBpbiB0aGUgdGV4dCB0aGF0IGlzbid0IGZvdW5kIGluIGEgcGFydC5cclxuICAgKi9cclxuICB0ZXh0PzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFkZHJlc3MudGV4dFxyXG4gICAqL1xyXG4gIF90ZXh0PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGlzIGNvbXBvbmVudCBjb250YWlucyB0aGUgaG91c2UgbnVtYmVyLCBhcGFydG1lbnQgbnVtYmVyLCBzdHJlZXQgbmFtZSwgc3RyZWV0IGRpcmVjdGlvbiwgIFAuTy4gQm94IG51bWJlciwgZGVsaXZlcnkgaGludHMsIGFuZCBzaW1pbGFyIGFkZHJlc3MgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgbGluZT86IGZoaXIuRmhpclN0cmluZ1tdfChzdHJpbmd8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFkZHJlc3MubGluZVxyXG4gICAqL1xyXG4gIF9saW5lPzooZmhpci5GaGlyRWxlbWVudEFyZ3N8bnVsbClbXTtcclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgY2l0eSwgdG93biwgc3VidXJiLCB2aWxsYWdlIG9yIG90aGVyIGNvbW11bml0eSBvciBkZWxpdmVyeSBjZW50ZXIuXHJcbiAgICovXHJcbiAgY2l0eT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBZGRyZXNzLmNpdHlcclxuICAgKi9cclxuICBfY2l0eT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogRGlzdHJpY3QgaXMgc29tZXRpbWVzIGtub3duIGFzIGNvdW50eSwgYnV0IGluIHNvbWUgcmVnaW9ucyAnY291bnR5JyBpcyB1c2VkIGluIHBsYWNlIG9mIGNpdHkgKG11bmljaXBhbGl0eSksIHNvIGNvdW50eSBuYW1lIHNob3VsZCBiZSBjb252ZXllZCBpbiBjaXR5IGluc3RlYWQuXHJcbiAgICovXHJcbiAgZGlzdHJpY3Q/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQWRkcmVzcy5kaXN0cmljdFxyXG4gICAqL1xyXG4gIF9kaXN0cmljdD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogU3ViLXVuaXQgb2YgYSBjb3VudHJ5IHdpdGggbGltaXRlZCBzb3ZlcmVpZ250eSBpbiBhIGZlZGVyYWxseSBvcmdhbml6ZWQgY291bnRyeS4gQSBjb2RlIG1heSBiZSB1c2VkIGlmIGNvZGVzIGFyZSBpbiBjb21tb24gdXNlIChlLmcuIFVTIDIgbGV0dGVyIHN0YXRlIGNvZGVzKS5cclxuICAgKi9cclxuICBzdGF0ZT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBZGRyZXNzLnN0YXRlXHJcbiAgICovXHJcbiAgX3N0YXRlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIHBvc3RhbCBjb2RlIGRlc2lnbmF0aW5nIGEgcmVnaW9uIGRlZmluZWQgYnkgdGhlIHBvc3RhbCBzZXJ2aWNlLlxyXG4gICAqL1xyXG4gIHBvc3RhbENvZGU/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQWRkcmVzcy5wb3N0YWxDb2RlXHJcbiAgICovXHJcbiAgX3Bvc3RhbENvZGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIElTTyAzMTY2IDMgbGV0dGVyIGNvZGVzIGNhbiBiZSB1c2VkIGluIHBsYWNlIG9mIGEgaHVtYW4gcmVhZGFibGUgY291bnRyeSBuYW1lLlxyXG4gICAqL1xyXG4gIGNvdW50cnk/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQWRkcmVzcy5jb3VudHJ5XHJcbiAgICovXHJcbiAgX2NvdW50cnk/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRpbWUgcGVyaW9kIHdoZW4gYWRkcmVzcyB3YXMvaXMgaW4gdXNlLlxyXG4gICAqL1xyXG4gIHBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBhZGRyZXNzIGV4cHJlc3NlZCB1c2luZyBwb3N0YWwgY29udmVudGlvbnMgKGFzIG9wcG9zZWQgdG8gR1BTIG9yIG90aGVyIGxvY2F0aW9uIGRlZmluaXRpb24gZm9ybWF0cykuICBUaGlzIGRhdGEgdHlwZSBtYXkgYmUgdXNlZCB0byBjb252ZXkgYWRkcmVzc2VzIGZvciB1c2UgaW4gZGVsaXZlcmluZyBtYWlsIGFzIHdlbGwgYXMgZm9yIHZpc2l0aW5nIGxvY2F0aW9ucyB3aGljaCBtaWdodCBub3QgYmUgdmFsaWQgZm9yIG1haWwgZGVsaXZlcnkuICBUaGVyZSBhcmUgYSB2YXJpZXR5IG9mIHBvc3RhbCBhZGRyZXNzIGZvcm1hdHMgZGVmaW5lZCBhcm91bmQgdGhlIHdvcmxkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFkZHJlc3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0FkZHJlc3MnO1xyXG4gIC8qKlxyXG4gICAqIEFwcGxpY2F0aW9ucyBjYW4gYXNzdW1lIHRoYXQgYW4gYWRkcmVzcyBpcyBjdXJyZW50IHVubGVzcyBpdCBleHBsaWNpdGx5IHNheXMgdGhhdCBpdCBpcyB0ZW1wb3Jhcnkgb3Igb2xkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1c2U/OiBmaGlyLkZoaXJDb2RlPEFkZHJlc3NVc2VDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkZWZpbml0aW9uIG9mIEFkZHJlc3Mgc3RhdGVzIHRoYXQgXCJhZGRyZXNzIGlzIGludGVuZGVkIHRvIGRlc2NyaWJlIHBvc3RhbCBhZGRyZXNzZXMsIG5vdCBwaHlzaWNhbCBsb2NhdGlvbnNcIi4gSG93ZXZlciwgbWFueSBhcHBsaWNhdGlvbnMgdHJhY2sgd2hldGhlciBhbiBhZGRyZXNzIGhhcyBhIGR1YWwgcHVycG9zZSBvZiBiZWluZyBhIGxvY2F0aW9uIHRoYXQgY2FuIGJlIHZpc2l0ZWQgYXMgd2VsbCBhcyBiZWluZyBhIHZhbGlkIGRlbGl2ZXJ5IGRlc3RpbmF0aW9uLCBhbmQgUG9zdGFsIGFkZHJlc3NlcyBhcmUgb2Z0ZW4gdXNlZCBhcyBwcm94aWVzIGZvciBwaHlzaWNhbCBsb2NhdGlvbnMgKGFsc28gc2VlIHRoZSBbTG9jYXRpb25dKGxvY2F0aW9uLmh0bWwjKSByZXNvdXJjZSkuXHJcbiAgICovXHJcbiAgcHVibGljIHR5cGU/OiBmaGlyLkZoaXJDb2RlPEFkZHJlc3NUeXBlQ29kZVR5cGU+fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBDYW4gcHJvdmlkZSBib3RoIGEgdGV4dCByZXByZXNlbnRhdGlvbiBhbmQgcGFydHMuIEFwcGxpY2F0aW9ucyB1cGRhdGluZyBhbiBhZGRyZXNzIFNIQUxMIGVuc3VyZSB0aGF0ICB3aGVuIGJvdGggdGV4dCBhbmQgcGFydHMgYXJlIHByZXNlbnQsICBubyBjb250ZW50IGlzIGluY2x1ZGVkIGluIHRoZSB0ZXh0IHRoYXQgaXNuJ3QgZm91bmQgaW4gYSBwYXJ0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0ZXh0PzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGNvbXBvbmVudCBjb250YWlucyB0aGUgaG91c2UgbnVtYmVyLCBhcGFydG1lbnQgbnVtYmVyLCBzdHJlZXQgbmFtZSwgc3RyZWV0IGRpcmVjdGlvbiwgIFAuTy4gQm94IG51bWJlciwgZGVsaXZlcnkgaGludHMsIGFuZCBzaW1pbGFyIGFkZHJlc3MgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIGxpbmU6IGZoaXIuRmhpclN0cmluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBjaXR5LCB0b3duLCBzdWJ1cmIsIHZpbGxhZ2Ugb3Igb3RoZXIgY29tbXVuaXR5IG9yIGRlbGl2ZXJ5IGNlbnRlci5cclxuICAgKi9cclxuICBwdWJsaWMgY2l0eT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGlzdHJpY3QgaXMgc29tZXRpbWVzIGtub3duIGFzIGNvdW50eSwgYnV0IGluIHNvbWUgcmVnaW9ucyAnY291bnR5JyBpcyB1c2VkIGluIHBsYWNlIG9mIGNpdHkgKG11bmljaXBhbGl0eSksIHNvIGNvdW50eSBuYW1lIHNob3VsZCBiZSBjb252ZXllZCBpbiBjaXR5IGluc3RlYWQuXHJcbiAgICovXHJcbiAgcHVibGljIGRpc3RyaWN0PzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTdWItdW5pdCBvZiBhIGNvdW50cnkgd2l0aCBsaW1pdGVkIHNvdmVyZWlnbnR5IGluIGEgZmVkZXJhbGx5IG9yZ2FuaXplZCBjb3VudHJ5LiBBIGNvZGUgbWF5IGJlIHVzZWQgaWYgY29kZXMgYXJlIGluIGNvbW1vbiB1c2UgKGUuZy4gVVMgMiBsZXR0ZXIgc3RhdGUgY29kZXMpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0ZT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBwb3N0YWwgY29kZSBkZXNpZ25hdGluZyBhIHJlZ2lvbiBkZWZpbmVkIGJ5IHRoZSBwb3N0YWwgc2VydmljZS5cclxuICAgKi9cclxuICBwdWJsaWMgcG9zdGFsQ29kZT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSVNPIDMxNjYgMyBsZXR0ZXIgY29kZXMgY2FuIGJlIHVzZWQgaW4gcGxhY2Ugb2YgYSBodW1hbiByZWFkYWJsZSBjb3VudHJ5IG5hbWUuXHJcbiAgICovXHJcbiAgcHVibGljIGNvdW50cnk/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRpbWUgcGVyaW9kIHdoZW4gYWRkcmVzcyB3YXMvaXMgaW4gdXNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgQWRkcmVzcyAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEFkZHJlc3NBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsndXNlJ10pIHsgdGhpcy51c2UgPSBuZXcgZmhpci5GaGlyQ29kZTxBZGRyZXNzVXNlQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnVzZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfdXNlJ10pIHtcclxuICAgICAgaWYgKHRoaXMudXNlKSB7IHRoaXMudXNlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3VzZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnVzZSA9IG5ldyBmaGlyLkZoaXJDb2RlPEFkZHJlc3NVc2VDb2RlVHlwZT4oc291cmNlLl91c2UgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZTxBZGRyZXNzVHlwZUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS50eXBlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ190eXBlJ10pIHtcclxuICAgICAgaWYgKHRoaXMudHlwZSkgeyB0aGlzLnR5cGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdHlwZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZTxBZGRyZXNzVHlwZUNvZGVUeXBlPihzb3VyY2UuX3R5cGUgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3RleHQnXSkgeyB0aGlzLnRleHQgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnRleHR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3RleHQnXSkge1xyXG4gICAgICBpZiAodGhpcy50ZXh0KSB7IHRoaXMudGV4dC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl90ZXh0ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudGV4dCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl90ZXh0IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydsaW5lJ10pIHsgdGhpcy5saW5lID0gc291cmNlLmxpbmUubWFwKCh4KSA9PiBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogeH0pKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMubGluZSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydfbGluZSddKSB7XHJcbiAgICAgIHNvdXJjZS5fbGluZS5mb3JFYWNoKCh4LGkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5saW5lLmxlbmd0aCA+PSBpKSB7IGlmICh4KSB7IHRoaXMubGluZVtpXS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoeCk7IH0gfVxyXG4gICAgICAgIGVsc2UgeyBpZiAoeCkgeyB0aGlzLmxpbmUucHVzaChuZXcgZmhpci5GaGlyU3RyaW5nKHggYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPikpOyB9IH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjaXR5J10pIHsgdGhpcy5jaXR5ID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5jaXR5fSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jaXR5J10pIHtcclxuICAgICAgaWYgKHRoaXMuY2l0eSkgeyB0aGlzLmNpdHkuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY2l0eSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNpdHkgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fY2l0eSBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGlzdHJpY3QnXSkgeyB0aGlzLmRpc3RyaWN0ID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5kaXN0cmljdH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGlzdHJpY3QnXSkge1xyXG4gICAgICBpZiAodGhpcy5kaXN0cmljdCkgeyB0aGlzLmRpc3RyaWN0LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2Rpc3RyaWN0ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZGlzdHJpY3QgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fZGlzdHJpY3QgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXRlJ10pIHsgdGhpcy5zdGF0ZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2Uuc3RhdGV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXRlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUpIHsgdGhpcy5zdGF0ZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0ZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXRlID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX3N0YXRlIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwb3N0YWxDb2RlJ10pIHsgdGhpcy5wb3N0YWxDb2RlID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5wb3N0YWxDb2RlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19wb3N0YWxDb2RlJ10pIHtcclxuICAgICAgaWYgKHRoaXMucG9zdGFsQ29kZSkgeyB0aGlzLnBvc3RhbENvZGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fcG9zdGFsQ29kZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnBvc3RhbENvZGUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fcG9zdGFsQ29kZSBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnY291bnRyeSddKSB7IHRoaXMuY291bnRyeSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuY291bnRyeX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfY291bnRyeSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvdW50cnkpIHsgdGhpcy5jb3VudHJ5LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NvdW50cnkhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jb3VudHJ5ID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2NvdW50cnkgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3BlcmlvZCddKSB7IHRoaXMucGVyaW9kID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS5wZXJpb2QpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnQWRkcmVzcycgfVxyXG4gICAgdGhpcy52T1NWKCd1c2UnLGV4cCwnQWRkcmVzc1VzZScsQWRkcmVzc1VzZVZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZPU1YoJ3R5cGUnLGV4cCwnQWRkcmVzc1R5cGUnLEFkZHJlc3NUeXBlVnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHRoaXMudk9TKCd0ZXh0JyxleHApXHJcbiAgICB0aGlzLnZPQSgnbGluZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2NpdHknLGV4cClcclxuICAgIHRoaXMudk9TKCdkaXN0cmljdCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3N0YXRlJyxleHApXHJcbiAgICB0aGlzLnZPUygncG9zdGFsQ29kZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2NvdW50cnknLGV4cClcclxuICAgIHRoaXMudk9TKCdwZXJpb2QnLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==