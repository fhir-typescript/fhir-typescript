// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Location
import * as fhir from '../fhir.js';
// @ts-ignore
import { LocationStatusVsValidation } from '../fhirValueSets/LocationStatusVsValidation.js';
// @ts-ignore
import { LocationModeVsValidation } from '../fhirValueSets/LocationModeVsValidation.js';
/**
 * For mobile applications and automated route-finding knowing the exact location of the Location is required.
 */
export class LocationPosition extends fhir.BackboneElement {
    /**
     * Default constructor for LocationPosition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['longitude']) {
            this.longitude = new fhir.FhirDecimal({ value: source.longitude });
        }
        else {
            this.longitude = null;
        }
        if (source['_longitude']) {
            if (this.longitude) {
                this.longitude.addExtendedProperties(source._longitude);
            }
            else {
                this.longitude = new fhir.FhirDecimal(source._longitude);
            }
        }
        if (source['latitude']) {
            this.latitude = new fhir.FhirDecimal({ value: source.latitude });
        }
        else {
            this.latitude = null;
        }
        if (source['_latitude']) {
            if (this.latitude) {
                this.latitude.addExtendedProperties(source._latitude);
            }
            else {
                this.latitude = new fhir.FhirDecimal(source._latitude);
            }
        }
        if (source['altitude']) {
            this.altitude = new fhir.FhirDecimal({ value: source.altitude });
        }
        if (source['_altitude']) {
            if (this.altitude) {
                this.altitude.addExtendedProperties(source._altitude);
            }
            else {
                this.altitude = new fhir.FhirDecimal(source._altitude);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Location.position';
        }
        iss.push(...this.vRS('longitude', exp));
        iss.push(...this.vRS('latitude', exp));
        iss.push(...this.vOS('altitude', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
LocationPosition._fts_dataType = 'LocationPosition';
/**
 * Details and position information for a physical place where services are provided  and resources and participants may be stored, found, contained or accommodated.
 */
export class Location extends fhir.DomainResource {
    /**
     * Default constructor for Location - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Location';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['status']) {
            this.status = new fhir.FhirCode({ value: source.status });
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status);
            }
        }
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        if (source['_name']) {
            if (this.name) {
                this.name.addExtendedProperties(source._name);
            }
            else {
                this.name = new fhir.FhirString(source._name);
            }
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['_description']) {
            if (this.description) {
                this.description.addExtendedProperties(source._description);
            }
            else {
                this.description = new fhir.FhirString(source._description);
            }
        }
        if (source['mode']) {
            this.mode = new fhir.FhirCode({ value: source.mode });
        }
        if (source['_mode']) {
            if (this.mode) {
                this.mode.addExtendedProperties(source._mode);
            }
            else {
                this.mode = new fhir.FhirCode(source._mode);
            }
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['telecom']) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x));
        }
        else {
            this.telecom = [];
        }
        if (source['address']) {
            this.address = new fhir.Address(source.address);
        }
        if (source['physicalType']) {
            this.physicalType = new fhir.CodeableConcept(source.physicalType);
        }
        if (source['position']) {
            this.position = new fhir.LocationPosition(source.position);
        }
        if (source['managingOrganization']) {
            this.managingOrganization = new fhir.Reference(source.managingOrganization);
        }
        if (source['partOf']) {
            this.partOf = new fhir.Reference(source.partOf);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Location';
        }
        iss.push(...this.vRPS('resourceType', exp));
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vOSV('status', exp, 'LocationStatus', LocationStatusVsValidation, 'r'));
        iss.push(...this.vOS('name', exp));
        iss.push(...this.vOS('description', exp));
        iss.push(...this.vOSV('mode', exp, 'LocationMode', LocationModeVsValidation, 'r'));
        iss.push(...this.vOS('type', exp));
        iss.push(...this.vOA('telecom', exp));
        iss.push(...this.vOS('address', exp));
        iss.push(...this.vOS('physicalType', exp));
        iss.push(...this.vOS('position', exp));
        iss.push(...this.vOS('managingOrganization', exp));
        iss.push(...this.vOS('partOf', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Location._fts_dataType = 'Location';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0xvY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUUxQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUluQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFHNUYsYUFBYTtBQUNiLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBK0J4Rjs7R0FFRztBQUNILE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxJQUFJLENBQUMsZUFBZTtJQWlCeEQ7O09BRUc7SUFDSCxZQUFZLFNBQXVDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQzdGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3pGO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FBRTtRQUMvQixJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsVUFBVyxDQUFDLENBQUM7YUFBRTtpQkFDNUU7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQTJDLENBQUMsQ0FBQzthQUFFO1NBQ3BHO1FBQ0QsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7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XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMi5jb3JlIHZlcnNpb246IDEuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogTG9jYXRpb25cclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IExvY2F0aW9uU3RhdHVzQ29kZXMsICBMb2NhdGlvblN0YXR1c0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Mb2NhdGlvblN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBMb2NhdGlvblN0YXR1c1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTG9jYXRpb25TdGF0dXNWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IExvY2F0aW9uTW9kZUNvZGVzLCAgTG9jYXRpb25Nb2RlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xvY2F0aW9uTW9kZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBMb2NhdGlvbk1vZGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xvY2F0aW9uTW9kZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBMb2NhdGlvblBvc2l0aW9uIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uUG9zaXRpb25BcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBMb25naXR1ZGUuIFRoZSB2YWx1ZSBkb21haW4gYW5kIHRoZSBpbnRlcnByZXRhdGlvbiBhcmUgdGhlIHNhbWUgYXMgZm9yIHRoZSB0ZXh0IG9mIHRoZSBsb25naXR1ZGUgZWxlbWVudCBpbiBLTUwgKHNlZSBub3RlcyBiZWxvdykuXHJcbiAgICovXHJcbiAgbG9uZ2l0dWRlOiBmaGlyLkZoaXJEZWNpbWFsfG51bWJlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IExvY2F0aW9uLnBvc2l0aW9uLmxvbmdpdHVkZVxyXG4gICAqL1xyXG4gIF9sb25naXR1ZGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIExhdGl0dWRlLiBUaGUgdmFsdWUgZG9tYWluIGFuZCB0aGUgaW50ZXJwcmV0YXRpb24gYXJlIHRoZSBzYW1lIGFzIGZvciB0aGUgdGV4dCBvZiB0aGUgbGF0aXR1ZGUgZWxlbWVudCBpbiBLTUwgKHNlZSBub3RlcyBiZWxvdykuXHJcbiAgICovXHJcbiAgbGF0aXR1ZGU6IGZoaXIuRmhpckRlY2ltYWx8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTG9jYXRpb24ucG9zaXRpb24ubGF0aXR1ZGVcclxuICAgKi9cclxuICBfbGF0aXR1ZGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEFsdGl0dWRlLiBUaGUgdmFsdWUgZG9tYWluIGFuZCB0aGUgaW50ZXJwcmV0YXRpb24gYXJlIHRoZSBzYW1lIGFzIGZvciB0aGUgdGV4dCBvZiB0aGUgYWx0aXR1ZGUgZWxlbWVudCBpbiBLTUwgKHNlZSBub3RlcyBiZWxvdykuXHJcbiAgICovXHJcbiAgYWx0aXR1ZGU/OiBmaGlyLkZoaXJEZWNpbWFsfG51bWJlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IExvY2F0aW9uLnBvc2l0aW9uLmFsdGl0dWRlXHJcbiAgICovXHJcbiAgX2FsdGl0dWRlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEZvciBtb2JpbGUgYXBwbGljYXRpb25zIGFuZCBhdXRvbWF0ZWQgcm91dGUtZmluZGluZyBrbm93aW5nIHRoZSBleGFjdCBsb2NhdGlvbiBvZiB0aGUgTG9jYXRpb24gaXMgcmVxdWlyZWQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Qb3NpdGlvbiBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0xvY2F0aW9uUG9zaXRpb24nO1xyXG4gIC8qKlxyXG4gICAqIExvbmdpdHVkZS4gVGhlIHZhbHVlIGRvbWFpbiBhbmQgdGhlIGludGVycHJldGF0aW9uIGFyZSB0aGUgc2FtZSBhcyBmb3IgdGhlIHRleHQgb2YgdGhlIGxvbmdpdHVkZSBlbGVtZW50IGluIEtNTCAoc2VlIG5vdGVzIGJlbG93KS5cclxuICAgKi9cclxuICBwdWJsaWMgbG9uZ2l0dWRlOiBmaGlyLkZoaXJEZWNpbWFsfG51bGw7XHJcbiAgLyoqXHJcbiAgICogTGF0aXR1ZGUuIFRoZSB2YWx1ZSBkb21haW4gYW5kIHRoZSBpbnRlcnByZXRhdGlvbiBhcmUgdGhlIHNhbWUgYXMgZm9yIHRoZSB0ZXh0IG9mIHRoZSBsYXRpdHVkZSBlbGVtZW50IGluIEtNTCAoc2VlIG5vdGVzIGJlbG93KS5cclxuICAgKi9cclxuICBwdWJsaWMgbGF0aXR1ZGU6IGZoaXIuRmhpckRlY2ltYWx8bnVsbDtcclxuICAvKipcclxuICAgKiBBbHRpdHVkZS4gVGhlIHZhbHVlIGRvbWFpbiBhbmQgdGhlIGludGVycHJldGF0aW9uIGFyZSB0aGUgc2FtZSBhcyBmb3IgdGhlIHRleHQgb2YgdGhlIGFsdGl0dWRlIGVsZW1lbnQgaW4gS01MIChzZWUgbm90ZXMgYmVsb3cpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbHRpdHVkZT86IGZoaXIuRmhpckRlY2ltYWx8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIExvY2F0aW9uUG9zaXRpb24gLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxMb2NhdGlvblBvc2l0aW9uQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2xvbmdpdHVkZSddKSB7IHRoaXMubG9uZ2l0dWRlID0gbmV3IGZoaXIuRmhpckRlY2ltYWwoe3ZhbHVlOiBzb3VyY2UubG9uZ2l0dWRlfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmxvbmdpdHVkZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19sb25naXR1ZGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5sb25naXR1ZGUpIHsgdGhpcy5sb25naXR1ZGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fbG9uZ2l0dWRlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubG9uZ2l0dWRlID0gbmV3IGZoaXIuRmhpckRlY2ltYWwoc291cmNlLl9sb25naXR1ZGUgYXMgUGFydGlhbDxmaGlyLkZoaXJEZWNpbWFsQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydsYXRpdHVkZSddKSB7IHRoaXMubGF0aXR1ZGUgPSBuZXcgZmhpci5GaGlyRGVjaW1hbCh7dmFsdWU6IHNvdXJjZS5sYXRpdHVkZX0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5sYXRpdHVkZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19sYXRpdHVkZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmxhdGl0dWRlKSB7IHRoaXMubGF0aXR1ZGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fbGF0aXR1ZGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5sYXRpdHVkZSA9IG5ldyBmaGlyLkZoaXJEZWNpbWFsKHNvdXJjZS5fbGF0aXR1ZGUgYXMgUGFydGlhbDxmaGlyLkZoaXJEZWNpbWFsQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydhbHRpdHVkZSddKSB7IHRoaXMuYWx0aXR1ZGUgPSBuZXcgZmhpci5GaGlyRGVjaW1hbCh7dmFsdWU6IHNvdXJjZS5hbHRpdHVkZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfYWx0aXR1ZGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5hbHRpdHVkZSkgeyB0aGlzLmFsdGl0dWRlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2FsdGl0dWRlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuYWx0aXR1ZGUgPSBuZXcgZmhpci5GaGlyRGVjaW1hbChzb3VyY2UuX2FsdGl0dWRlIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGVjaW1hbEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0xvY2F0aW9uLnBvc2l0aW9uJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygnbG9uZ2l0dWRlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdsYXRpdHVkZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnYWx0aXR1ZGUnLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIExvY2F0aW9uIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uQXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiTG9jYXRpb25cInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogT3JnYW5pemF0aW9uIGxhYmVsIGxvY2F0aW9ucyBpbiByZWdpc3RyaWVzLCBuZWVkIHRvIGtlZXAgdHJhY2sgb2YgdGhvc2UuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogYWN0aXZlIHwgc3VzcGVuZGVkIHwgaW5hY3RpdmUuXHJcbiAgICovXHJcbiAgc3RhdHVzPzogZmhpci5GaGlyQ29kZTxMb2NhdGlvblN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBMb2NhdGlvbi5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBOYW1lIG9mIHRoZSBsb2NhdGlvbiBhcyB1c2VkIGJ5IGh1bWFucy4gRG9lcyBub3QgbmVlZCB0byBiZSB1bmlxdWUuXHJcbiAgICovXHJcbiAgbmFtZT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBMb2NhdGlvbi5uYW1lXHJcbiAgICovXHJcbiAgX25hbWU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEh1bWFucyBuZWVkIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdG8gdmVyaWZ5IGEgY29ycmVjdCBsb2NhdGlvbiBoYXMgYmVlbiBpZGVudGlmaWVkLlxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IExvY2F0aW9uLmRlc2NyaXB0aW9uXHJcbiAgICovXHJcbiAgX2Rlc2NyaXB0aW9uPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBXaGVuIHVzaW5nIGEgTG9jYXRpb24gcmVzb3VyY2UgZm9yIHNjaGVkdWxpbmcgb3Igb3JkZXJzLCB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gcmVmZXIgdG8gYSBjbGFzcyBvZiBMb2NhdGlvbnMgaW5zdGVhZCBvZiBhIHNwZWNpZmljIExvY2F0aW9uLlxyXG4gICAqL1xyXG4gIG1vZGU/OiBmaGlyLkZoaXJDb2RlPExvY2F0aW9uTW9kZUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBMb2NhdGlvbi5tb2RlXHJcbiAgICovXHJcbiAgX21vZGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGUgdHlwZSBvZiBmdW5jdGlvbiBwZXJmb3JtZWQgYXQgdGhlIGxvY2F0aW9uLlxyXG4gICAqL1xyXG4gIHR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250YWN0IGRldGFpbHMgb2YgY29tbXVuaWNhdGlvbiBkZXZpY2VzIGF2YWlsYWJsZSBhdCB0aGUgbG9jYXRpb24uIFRoaXMgY2FuIGluY2x1ZGUgcGhvbmUgbnVtYmVycywgZmF4IG51bWJlcnMsIG1vYmlsZSBudW1iZXJzLCBlbWFpbCBhZGRyZXNzZXMgYW5kIHdlYiBzaXRlcy5cclxuICAgKi9cclxuICB0ZWxlY29tPzogZmhpci5Db250YWN0UG9pbnRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIGxvY2F0aW9ucyBjYW4gYmUgdmlzaXRlZCwgd2UgbmVlZCB0byBrZWVwIHRyYWNrIG9mIHRoZWlyIGFkZHJlc3MuXHJcbiAgICovXHJcbiAgYWRkcmVzcz86IGZoaXIuQWRkcmVzc0FyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEZvciBwdXJwb3NlcyBvZiBzaG93aW5nIHJlbGV2YW50IGxvY2F0aW9ucyBpbiBxdWVyaWVzLCB3ZSBuZWVkIHRvIGNhdGVnb3JpemUgbG9jYXRpb25zLlxyXG4gICAqL1xyXG4gIHBoeXNpY2FsVHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRm9yIG1vYmlsZSBhcHBsaWNhdGlvbnMgYW5kIGF1dG9tYXRlZCByb3V0ZS1maW5kaW5nIGtub3dpbmcgdGhlIGV4YWN0IGxvY2F0aW9uIG9mIHRoZSBMb2NhdGlvbiBpcyByZXF1aXJlZC5cclxuICAgKi9cclxuICBwb3NpdGlvbj86IGZoaXIuTG9jYXRpb25Qb3NpdGlvbkFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5lZWQgdG8ga25vdyB3aG8gbWFuYWdlcyB0aGUgbG9jYXRpb24uXHJcbiAgICovXHJcbiAgbWFuYWdpbmdPcmdhbml6YXRpb24/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEZvciBwdXJwb3NlcyBvZiBsb2NhdGlvbiwgZGlzcGxheSBhbmQgaWRlbnRpZmljYXRpb24sIGtub3dpbmcgd2hpY2ggbG9jYXRpb25zIGFyZSBsb2NhdGVkIHdpdGhpbiBvdGhlciBsb2NhdGlvbnMgaXMgaW1wb3J0YW50LlxyXG4gICAqL1xyXG4gIHBhcnRPZj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRhaWxzIGFuZCBwb3NpdGlvbiBpbmZvcm1hdGlvbiBmb3IgYSBwaHlzaWNhbCBwbGFjZSB3aGVyZSBzZXJ2aWNlcyBhcmUgcHJvdmlkZWQgIGFuZCByZXNvdXJjZXMgYW5kIHBhcnRpY2lwYW50cyBtYXkgYmUgc3RvcmVkLCBmb3VuZCwgY29udGFpbmVkIG9yIGFjY29tbW9kYXRlZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbiBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnTG9jYXRpb24nO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiTG9jYXRpb25cIjtcclxuICAvKipcclxuICAgKiBPcmdhbml6YXRpb24gbGFiZWwgbG9jYXRpb25zIGluIHJlZ2lzdHJpZXMsIG5lZWQgdG8ga2VlcCB0cmFjayBvZiB0aG9zZS5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogYWN0aXZlIHwgc3VzcGVuZGVkIHwgaW5hY3RpdmUuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1cz86IGZoaXIuRmhpckNvZGU8TG9jYXRpb25TdGF0dXNDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5hbWUgb2YgdGhlIGxvY2F0aW9uIGFzIHVzZWQgYnkgaHVtYW5zLiBEb2VzIG5vdCBuZWVkIHRvIGJlIHVuaXF1ZS5cclxuICAgKi9cclxuICBwdWJsaWMgbmFtZT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSHVtYW5zIG5lZWQgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiB0byB2ZXJpZnkgYSBjb3JyZWN0IGxvY2F0aW9uIGhhcyBiZWVuIGlkZW50aWZpZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGRlc2NyaXB0aW9uPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVuIHVzaW5nIGEgTG9jYXRpb24gcmVzb3VyY2UgZm9yIHNjaGVkdWxpbmcgb3Igb3JkZXJzLCB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gcmVmZXIgdG8gYSBjbGFzcyBvZiBMb2NhdGlvbnMgaW5zdGVhZCBvZiBhIHNwZWNpZmljIExvY2F0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBtb2RlPzogZmhpci5GaGlyQ29kZTxMb2NhdGlvbk1vZGVDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGUgdHlwZSBvZiBmdW5jdGlvbiBwZXJmb3JtZWQgYXQgdGhlIGxvY2F0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0eXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250YWN0IGRldGFpbHMgb2YgY29tbXVuaWNhdGlvbiBkZXZpY2VzIGF2YWlsYWJsZSBhdCB0aGUgbG9jYXRpb24uIFRoaXMgY2FuIGluY2x1ZGUgcGhvbmUgbnVtYmVycywgZmF4IG51bWJlcnMsIG1vYmlsZSBudW1iZXJzLCBlbWFpbCBhZGRyZXNzZXMgYW5kIHdlYiBzaXRlcy5cclxuICAgKi9cclxuICBwdWJsaWMgdGVsZWNvbTogZmhpci5Db250YWN0UG9pbnRbXTtcclxuICAvKipcclxuICAgKiBJZiBsb2NhdGlvbnMgY2FuIGJlIHZpc2l0ZWQsIHdlIG5lZWQgdG8ga2VlcCB0cmFjayBvZiB0aGVpciBhZGRyZXNzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRyZXNzPzogZmhpci5BZGRyZXNzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBGb3IgcHVycG9zZXMgb2Ygc2hvd2luZyByZWxldmFudCBsb2NhdGlvbnMgaW4gcXVlcmllcywgd2UgbmVlZCB0byBjYXRlZ29yaXplIGxvY2F0aW9ucy5cclxuICAgKi9cclxuICBwdWJsaWMgcGh5c2ljYWxUeXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEZvciBtb2JpbGUgYXBwbGljYXRpb25zIGFuZCBhdXRvbWF0ZWQgcm91dGUtZmluZGluZyBrbm93aW5nIHRoZSBleGFjdCBsb2NhdGlvbiBvZiB0aGUgTG9jYXRpb24gaXMgcmVxdWlyZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHBvc2l0aW9uPzogZmhpci5Mb2NhdGlvblBvc2l0aW9ufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOZWVkIHRvIGtub3cgd2hvIG1hbmFnZXMgdGhlIGxvY2F0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBtYW5hZ2luZ09yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBGb3IgcHVycG9zZXMgb2YgbG9jYXRpb24sIGRpc3BsYXkgYW5kIGlkZW50aWZpY2F0aW9uLCBrbm93aW5nIHdoaWNoIGxvY2F0aW9ucyBhcmUgbG9jYXRlZCB3aXRoaW4gb3RoZXIgbG9jYXRpb25zIGlzIGltcG9ydGFudC5cclxuICAgKi9cclxuICBwdWJsaWMgcGFydE9mPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIExvY2F0aW9uIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8TG9jYXRpb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnTG9jYXRpb24nO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxMb2NhdGlvblN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxMb2NhdGlvblN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3N0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbmFtZSddKSB7IHRoaXMubmFtZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UubmFtZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfbmFtZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLm5hbWUpIHsgdGhpcy5uYW1lLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX25hbWUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5uYW1lID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX25hbWUgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2Rlc2NyaXB0aW9uJ10pIHsgdGhpcy5kZXNjcmlwdGlvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZGVzY3JpcHRpb259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Rlc2NyaXB0aW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb24pIHsgdGhpcy5kZXNjcmlwdGlvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kZXNjcmlwdGlvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRlc2NyaXB0aW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Rlc2NyaXB0aW9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydtb2RlJ10pIHsgdGhpcy5tb2RlID0gbmV3IGZoaXIuRmhpckNvZGU8TG9jYXRpb25Nb2RlQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLm1vZGV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX21vZGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5tb2RlKSB7IHRoaXMubW9kZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9tb2RlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubW9kZSA9IG5ldyBmaGlyLkZoaXJDb2RlPExvY2F0aW9uTW9kZUNvZGVUeXBlPihzb3VyY2UuX21vZGUgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnR5cGUpOyB9XHJcbiAgICBpZiAoc291cmNlWyd0ZWxlY29tJ10pIHsgdGhpcy50ZWxlY29tID0gc291cmNlLnRlbGVjb20ubWFwKCh4KSA9PiBuZXcgZmhpci5Db250YWN0UG9pbnQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50ZWxlY29tID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2FkZHJlc3MnXSkgeyB0aGlzLmFkZHJlc3MgPSBuZXcgZmhpci5BZGRyZXNzKHNvdXJjZS5hZGRyZXNzKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncGh5c2ljYWxUeXBlJ10pIHsgdGhpcy5waHlzaWNhbFR5cGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnBoeXNpY2FsVHlwZSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3Bvc2l0aW9uJ10pIHsgdGhpcy5wb3NpdGlvbiA9IG5ldyBmaGlyLkxvY2F0aW9uUG9zaXRpb24oc291cmNlLnBvc2l0aW9uKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnbWFuYWdpbmdPcmdhbml6YXRpb24nXSkgeyB0aGlzLm1hbmFnaW5nT3JnYW5pemF0aW9uID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5tYW5hZ2luZ09yZ2FuaXphdGlvbik7IH1cclxuICAgIGlmIChzb3VyY2VbJ3BhcnRPZiddKSB7IHRoaXMucGFydE9mID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5wYXJ0T2YpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnTG9jYXRpb24nIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJQUygncmVzb3VyY2VUeXBlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TVignc3RhdHVzJyxleHAsJ0xvY2F0aW9uU3RhdHVzJyxMb2NhdGlvblN0YXR1c1ZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCduYW1lJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdkZXNjcmlwdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPU1YoJ21vZGUnLGV4cCwnTG9jYXRpb25Nb2RlJyxMb2NhdGlvbk1vZGVWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndHlwZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgndGVsZWNvbScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnYWRkcmVzcycsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncGh5c2ljYWxUeXBlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdwb3NpdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnbWFuYWdpbmdPcmdhbml6YXRpb24nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3BhcnRPZicsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=