// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyw0QkFBNEI7QUFFNUIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBR3BGLGFBQWE7QUFDYixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQW1GdEY7O0dBRUc7QUFDSCxNQUFNLE9BQU8sT0FBUSxTQUFRLElBQUksQ0FBQyxXQUFXO0lBNkMzQzs7T0FFRztJQUNILFlBQVksU0FBOEIsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDcEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFxQixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQzdGLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFLLENBQUMsQ0FBQzthQUFFO2lCQUMxRDtnQkFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBcUIsTUFBTSxDQUFDLElBQThCLENBQUMsQ0FBQzthQUFFO1NBQ2xHO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FB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QUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUFwSEQ7O0dBRUc7QUFDNkIscUJBQWEsR0FBVSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBBZGRyZXNzXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBBZGRyZXNzVXNlQ29kZXMsICBBZGRyZXNzVXNlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0FkZHJlc3NVc2VDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQWRkcmVzc1VzZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQWRkcmVzc1VzZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQWRkcmVzc1R5cGVDb2RlcywgIEFkZHJlc3NUeXBlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0FkZHJlc3NUeXBlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEFkZHJlc3NUeXBlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9BZGRyZXNzVHlwZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBBZGRyZXNzIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEFkZHJlc3NBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEFwcGxpY2F0aW9ucyBjYW4gYXNzdW1lIHRoYXQgYW4gYWRkcmVzcyBpcyBjdXJyZW50IHVubGVzcyBpdCBleHBsaWNpdGx5IHNheXMgdGhhdCBpdCBpcyB0ZW1wb3Jhcnkgb3Igb2xkLlxyXG4gICAqL1xyXG4gIHVzZT86IGZoaXIuRmhpckNvZGU8QWRkcmVzc1VzZUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBZGRyZXNzLnVzZVxyXG4gICAqL1xyXG4gIF91c2U/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkZWZpbml0aW9uIG9mIEFkZHJlc3Mgc3RhdGVzIHRoYXQgXCJhZGRyZXNzIGlzIGludGVuZGVkIHRvIGRlc2NyaWJlIHBvc3RhbCBhZGRyZXNzZXMsIG5vdCBwaHlzaWNhbCBsb2NhdGlvbnNcIi4gSG93ZXZlciwgbWFueSBhcHBsaWNhdGlvbnMgdHJhY2sgd2hldGhlciBhbiBhZGRyZXNzIGhhcyBhIGR1YWwgcHVycG9zZSBvZiBiZWluZyBhIGxvY2F0aW9uIHRoYXQgY2FuIGJlIHZpc2l0ZWQgYXMgd2VsbCBhcyBiZWluZyBhIHZhbGlkIGRlbGl2ZXJ5IGRlc3RpbmF0aW9uLCBhbmQgUG9zdGFsIGFkZHJlc3NlcyBhcmUgb2Z0ZW4gdXNlZCBhcyBwcm94aWVzIGZvciBwaHlzaWNhbCBsb2NhdGlvbnMgKGFsc28gc2VlIHRoZSBbTG9jYXRpb25dKGxvY2F0aW9uLmh0bWwjKSByZXNvdXJjZSkuXHJcbiAgICovXHJcbiAgdHlwZT86IGZoaXIuRmhpckNvZGU8QWRkcmVzc1R5cGVDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQWRkcmVzcy50eXBlXHJcbiAgICovXHJcbiAgX3R5cGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENhbiBwcm92aWRlIGJvdGggYSB0ZXh0IHJlcHJlc2VudGF0aW9uIGFuZCBwYXJ0cy4gQXBwbGljYXRpb25zIHVwZGF0aW5nIGFuIGFkZHJlc3MgU0hBTEwgZW5zdXJlIHRoYXQgIHdoZW4gYm90aCB0ZXh0IGFuZCBwYXJ0cyBhcmUgcHJlc2VudCwgIG5vIGNvbnRlbnQgaXMgaW5jbHVkZWQgaW4gdGhlIHRleHQgdGhhdCBpc24ndCBmb3VuZCBpbiBhIHBhcnQuXHJcbiAgICovXHJcbiAgdGV4dD86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBZGRyZXNzLnRleHRcclxuICAgKi9cclxuICBfdGV4dD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBjb21wb25lbnQgY29udGFpbnMgdGhlIGhvdXNlIG51bWJlciwgYXBhcnRtZW50IG51bWJlciwgc3RyZWV0IG5hbWUsIHN0cmVldCBkaXJlY3Rpb24sICBQLk8uIEJveCBudW1iZXIsIGRlbGl2ZXJ5IGhpbnRzLCBhbmQgc2ltaWxhciBhZGRyZXNzIGluZm9ybWF0aW9uLlxyXG4gICAqL1xyXG4gIGxpbmU/OiBmaGlyLkZoaXJTdHJpbmdbXXwoc3RyaW5nfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBZGRyZXNzLmxpbmVcclxuICAgKi9cclxuICBfbGluZT86KGZoaXIuRmhpckVsZW1lbnRBcmdzfG51bGwpW107XHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgdGhlIGNpdHksIHRvd24sIHN1YnVyYiwgdmlsbGFnZSBvciBvdGhlciBjb21tdW5pdHkgb3IgZGVsaXZlcnkgY2VudGVyLlxyXG4gICAqL1xyXG4gIGNpdHk/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQWRkcmVzcy5jaXR5XHJcbiAgICovXHJcbiAgX2NpdHk/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIERpc3RyaWN0IGlzIHNvbWV0aW1lcyBrbm93biBhcyBjb3VudHksIGJ1dCBpbiBzb21lIHJlZ2lvbnMgJ2NvdW50eScgaXMgdXNlZCBpbiBwbGFjZSBvZiBjaXR5IChtdW5pY2lwYWxpdHkpLCBzbyBjb3VudHkgbmFtZSBzaG91bGQgYmUgY29udmV5ZWQgaW4gY2l0eSBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIGRpc3RyaWN0PzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFkZHJlc3MuZGlzdHJpY3RcclxuICAgKi9cclxuICBfZGlzdHJpY3Q/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFN1Yi11bml0IG9mIGEgY291bnRyeSB3aXRoIGxpbWl0ZWQgc292ZXJlaWdudHkgaW4gYSBmZWRlcmFsbHkgb3JnYW5pemVkIGNvdW50cnkuIEEgY29kZSBtYXkgYmUgdXNlZCBpZiBjb2RlcyBhcmUgaW4gY29tbW9uIHVzZSAoZS5nLiBVUyAyIGxldHRlciBzdGF0ZSBjb2RlcykuXHJcbiAgICovXHJcbiAgc3RhdGU/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQWRkcmVzcy5zdGF0ZVxyXG4gICAqL1xyXG4gIF9zdGF0ZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQSBwb3N0YWwgY29kZSBkZXNpZ25hdGluZyBhIHJlZ2lvbiBkZWZpbmVkIGJ5IHRoZSBwb3N0YWwgc2VydmljZS5cclxuICAgKi9cclxuICBwb3N0YWxDb2RlPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFkZHJlc3MucG9zdGFsQ29kZVxyXG4gICAqL1xyXG4gIF9wb3N0YWxDb2RlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBJU08gMzE2NiAzIGxldHRlciBjb2RlcyBjYW4gYmUgdXNlZCBpbiBwbGFjZSBvZiBhIGh1bWFuIHJlYWRhYmxlIGNvdW50cnkgbmFtZS5cclxuICAgKi9cclxuICBjb3VudHJ5PzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEFkZHJlc3MuY291bnRyeVxyXG4gICAqL1xyXG4gIF9jb3VudHJ5PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaW1lIHBlcmlvZCB3aGVuIGFkZHJlc3Mgd2FzL2lzIGluIHVzZS5cclxuICAgKi9cclxuICBwZXJpb2Q/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQW4gYWRkcmVzcyBleHByZXNzZWQgdXNpbmcgcG9zdGFsIGNvbnZlbnRpb25zIChhcyBvcHBvc2VkIHRvIEdQUyBvciBvdGhlciBsb2NhdGlvbiBkZWZpbml0aW9uIGZvcm1hdHMpLiAgVGhpcyBkYXRhIHR5cGUgbWF5IGJlIHVzZWQgdG8gY29udmV5IGFkZHJlc3NlcyBmb3IgdXNlIGluIGRlbGl2ZXJpbmcgbWFpbCBhcyB3ZWxsIGFzIGZvciB2aXNpdGluZyBsb2NhdGlvbnMgd2hpY2ggbWlnaHQgbm90IGJlIHZhbGlkIGZvciBtYWlsIGRlbGl2ZXJ5LiAgVGhlcmUgYXJlIGEgdmFyaWV0eSBvZiBwb3N0YWwgYWRkcmVzcyBmb3JtYXRzIGRlZmluZWQgYXJvdW5kIHRoZSB3b3JsZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBZGRyZXNzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdBZGRyZXNzJztcclxuICAvKipcclxuICAgKiBBcHBsaWNhdGlvbnMgY2FuIGFzc3VtZSB0aGF0IGFuIGFkZHJlc3MgaXMgY3VycmVudCB1bmxlc3MgaXQgZXhwbGljaXRseSBzYXlzIHRoYXQgaXQgaXMgdGVtcG9yYXJ5IG9yIG9sZC5cclxuICAgKi9cclxuICBwdWJsaWMgdXNlPzogZmhpci5GaGlyQ29kZTxBZGRyZXNzVXNlQ29kZVR5cGU+fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGVmaW5pdGlvbiBvZiBBZGRyZXNzIHN0YXRlcyB0aGF0IFwiYWRkcmVzcyBpcyBpbnRlbmRlZCB0byBkZXNjcmliZSBwb3N0YWwgYWRkcmVzc2VzLCBub3QgcGh5c2ljYWwgbG9jYXRpb25zXCIuIEhvd2V2ZXIsIG1hbnkgYXBwbGljYXRpb25zIHRyYWNrIHdoZXRoZXIgYW4gYWRkcmVzcyBoYXMgYSBkdWFsIHB1cnBvc2Ugb2YgYmVpbmcgYSBsb2NhdGlvbiB0aGF0IGNhbiBiZSB2aXNpdGVkIGFzIHdlbGwgYXMgYmVpbmcgYSB2YWxpZCBkZWxpdmVyeSBkZXN0aW5hdGlvbiwgYW5kIFBvc3RhbCBhZGRyZXNzZXMgYXJlIG9mdGVuIHVzZWQgYXMgcHJveGllcyBmb3IgcGh5c2ljYWwgbG9jYXRpb25zIChhbHNvIHNlZSB0aGUgW0xvY2F0aW9uXShsb2NhdGlvbi5odG1sIykgcmVzb3VyY2UpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0eXBlPzogZmhpci5GaGlyQ29kZTxBZGRyZXNzVHlwZUNvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQ2FuIHByb3ZpZGUgYm90aCBhIHRleHQgcmVwcmVzZW50YXRpb24gYW5kIHBhcnRzLiBBcHBsaWNhdGlvbnMgdXBkYXRpbmcgYW4gYWRkcmVzcyBTSEFMTCBlbnN1cmUgdGhhdCAgd2hlbiBib3RoIHRleHQgYW5kIHBhcnRzIGFyZSBwcmVzZW50LCAgbm8gY29udGVudCBpcyBpbmNsdWRlZCBpbiB0aGUgdGV4dCB0aGF0IGlzbid0IGZvdW5kIGluIGEgcGFydC5cclxuICAgKi9cclxuICBwdWJsaWMgdGV4dD86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBjb21wb25lbnQgY29udGFpbnMgdGhlIGhvdXNlIG51bWJlciwgYXBhcnRtZW50IG51bWJlciwgc3RyZWV0IG5hbWUsIHN0cmVldCBkaXJlY3Rpb24sICBQLk8uIEJveCBudW1iZXIsIGRlbGl2ZXJ5IGhpbnRzLCBhbmQgc2ltaWxhciBhZGRyZXNzIGluZm9ybWF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsaW5lOiBmaGlyLkZoaXJTdHJpbmdbXTtcclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgY2l0eSwgdG93biwgc3VidXJiLCB2aWxsYWdlIG9yIG90aGVyIGNvbW11bml0eSBvciBkZWxpdmVyeSBjZW50ZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGNpdHk/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERpc3RyaWN0IGlzIHNvbWV0aW1lcyBrbm93biBhcyBjb3VudHksIGJ1dCBpbiBzb21lIHJlZ2lvbnMgJ2NvdW50eScgaXMgdXNlZCBpbiBwbGFjZSBvZiBjaXR5IChtdW5pY2lwYWxpdHkpLCBzbyBjb3VudHkgbmFtZSBzaG91bGQgYmUgY29udmV5ZWQgaW4gY2l0eSBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkaXN0cmljdD86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogU3ViLXVuaXQgb2YgYSBjb3VudHJ5IHdpdGggbGltaXRlZCBzb3ZlcmVpZ250eSBpbiBhIGZlZGVyYWxseSBvcmdhbml6ZWQgY291bnRyeS4gQSBjb2RlIG1heSBiZSB1c2VkIGlmIGNvZGVzIGFyZSBpbiBjb21tb24gdXNlIChlLmcuIFVTIDIgbGV0dGVyIHN0YXRlIGNvZGVzKS5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGU/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgcG9zdGFsIGNvZGUgZGVzaWduYXRpbmcgYSByZWdpb24gZGVmaW5lZCBieSB0aGUgcG9zdGFsIHNlcnZpY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHBvc3RhbENvZGU/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElTTyAzMTY2IDMgbGV0dGVyIGNvZGVzIGNhbiBiZSB1c2VkIGluIHBsYWNlIG9mIGEgaHVtYW4gcmVhZGFibGUgY291bnRyeSBuYW1lLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb3VudHJ5PzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaW1lIHBlcmlvZCB3aGVuIGFkZHJlc3Mgd2FzL2lzIGluIHVzZS5cclxuICAgKi9cclxuICBwdWJsaWMgcGVyaW9kPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEFkZHJlc3MgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxBZGRyZXNzQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3VzZSddKSB7IHRoaXMudXNlID0gbmV3IGZoaXIuRmhpckNvZGU8QWRkcmVzc1VzZUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS51c2V9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3VzZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnVzZSkgeyB0aGlzLnVzZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl91c2UhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy51c2UgPSBuZXcgZmhpci5GaGlyQ29kZTxBZGRyZXNzVXNlQ29kZVR5cGU+KHNvdXJjZS5fdXNlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd0eXBlJ10pIHsgdGhpcy50eXBlID0gbmV3IGZoaXIuRmhpckNvZGU8QWRkcmVzc1R5cGVDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2UudHlwZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfdHlwZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnR5cGUpIHsgdGhpcy50eXBlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3R5cGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy50eXBlID0gbmV3IGZoaXIuRmhpckNvZGU8QWRkcmVzc1R5cGVDb2RlVHlwZT4oc291cmNlLl90eXBlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd0ZXh0J10pIHsgdGhpcy50ZXh0ID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS50ZXh0fSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ190ZXh0J10pIHtcclxuICAgICAgaWYgKHRoaXMudGV4dCkgeyB0aGlzLnRleHQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdGV4dCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnRleHQgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fdGV4dCBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbGluZSddKSB7IHRoaXMubGluZSA9IHNvdXJjZS5saW5lLm1hcCgoeCkgPT4gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHh9KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmxpbmUgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2xpbmUnXSkge1xyXG4gICAgICBzb3VyY2UuX2xpbmUuZm9yRWFjaCgoeCxpKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubGluZS5sZW5ndGggPj0gaSkgeyBpZiAoeCkgeyB0aGlzLmxpbmVbaV0uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHgpOyB9IH1cclxuICAgICAgICBlbHNlIHsgaWYgKHgpIHsgdGhpcy5saW5lLnB1c2gobmV3IGZoaXIuRmhpclN0cmluZyh4IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pKTsgfSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnY2l0eSddKSB7IHRoaXMuY2l0eSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuY2l0eX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfY2l0eSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNpdHkpIHsgdGhpcy5jaXR5LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NpdHkhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jaXR5ID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2NpdHkgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2Rpc3RyaWN0J10pIHsgdGhpcy5kaXN0cmljdCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZGlzdHJpY3R9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Rpc3RyaWN0J10pIHtcclxuICAgICAgaWYgKHRoaXMuZGlzdHJpY3QpIHsgdGhpcy5kaXN0cmljdC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kaXN0cmljdCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRpc3RyaWN0ID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Rpc3RyaWN0IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydzdGF0ZSddKSB7IHRoaXMuc3RhdGUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLnN0YXRlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlKSB7IHRoaXMuc3RhdGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0ZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9zdGF0ZSBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncG9zdGFsQ29kZSddKSB7IHRoaXMucG9zdGFsQ29kZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UucG9zdGFsQ29kZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfcG9zdGFsQ29kZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnBvc3RhbENvZGUpIHsgdGhpcy5wb3N0YWxDb2RlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3Bvc3RhbENvZGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5wb3N0YWxDb2RlID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX3Bvc3RhbENvZGUgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NvdW50cnknXSkgeyB0aGlzLmNvdW50cnkgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmNvdW50cnl9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NvdW50cnknXSkge1xyXG4gICAgICBpZiAodGhpcy5jb3VudHJ5KSB7IHRoaXMuY291bnRyeS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jb3VudHJ5ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY291bnRyeSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9jb3VudHJ5IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwZXJpb2QnXSkgeyB0aGlzLnBlcmlvZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2UucGVyaW9kKTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0FkZHJlc3MnIH1cclxuICAgIHRoaXMudk9TVigndXNlJyxleHAsJ0FkZHJlc3NVc2UnLEFkZHJlc3NVc2VWc1ZhbGlkYXRpb24sJ3InKVxyXG4gICAgdGhpcy52T1NWKCd0eXBlJyxleHAsJ0FkZHJlc3NUeXBlJyxBZGRyZXNzVHlwZVZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZPUygndGV4dCcsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2xpbmUnLGV4cClcclxuICAgIHRoaXMudk9TKCdjaXR5JyxleHApXHJcbiAgICB0aGlzLnZPUygnZGlzdHJpY3QnLGV4cClcclxuICAgIHRoaXMudk9TKCdzdGF0ZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3Bvc3RhbENvZGUnLGV4cClcclxuICAgIHRoaXMudk9TKCdjb3VudHJ5JyxleHApXHJcbiAgICB0aGlzLnZPUygncGVyaW9kJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=