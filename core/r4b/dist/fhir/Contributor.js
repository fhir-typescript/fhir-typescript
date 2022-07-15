// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Contributor
import * as fhir from '../fhir.js';
// @ts-ignore
import { ContributorTypeVsValidation } from '../fhirValueSets/ContributorTypeVsValidation.js';
/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
export class Contributor extends fhir.FhirElement {
    /**
     * Default constructor for Contributor - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['type']) {
            this.type = new fhir.FhirCode({ value: source.type });
        }
        else {
            this.type = null;
        }
        if (source['_type']) {
            if (this.type) {
                this.type.addExtendedProperties(source._type);
            }
            else {
                this.type = new fhir.FhirCode(source._type);
            }
        }
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        else {
            this.name = null;
        }
        if (source['_name']) {
            if (this.name) {
                this.name.addExtendedProperties(source._name);
            }
            else {
                this.name = new fhir.FhirString(source._name);
            }
        }
        if (source['contact']) {
            this.contact = source.contact.map((x) => new fhir.ContactDetail(x));
        }
        else {
            this.contact = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Contributor';
        }
        this.vRSV('type', exp, 'ContributorType', ContributorTypeVsValidation, 'r');
        this.vRS('name', exp);
        this.vOA('contact', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Contributor._fts_dataType = 'Contributor';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJpYnV0b3IuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0NvbnRyaWJ1dG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUVoQyxPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUluQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saURBQWlELENBQUM7QUEyQjlGOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFdBQVksU0FBUSxJQUFJLENBQUMsV0FBVztJQWlCL0M7O09BRUc7SUFDSCxZQUFZLFNBQWtDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3hGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBMEIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7U0FBRTthQUNoRztZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDMUIsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQyxDQUFDO2FBQUU7aUJBQzdEO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUEwQixNQUFNLENBQUMsS0FBK0IsQ0FBQyxDQUFDO2FBQUU7U0FDekc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDekU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzFCLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsQ0FBQzthQUFFO2lCQUM3RDtnQkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBcUMsQ0FBQyxDQUFDO2FBQUU7U0FDeEY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDMUY7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUFFO0lBQzdCLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxhQUFhLENBQUE7U0FBRTtRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsaUJBQWlCLEVBQUMsMkJBQTJCLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUE5Q0Q7O0dBRUc7QUFDNkIseUJBQWEsR0FBVSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBDb250cmlidXRvclxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQ29udHJpYnV0b3JUeXBlQ29kZXMsICBDb250cmlidXRvclR5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQ29udHJpYnV0b3JUeXBlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IENvbnRyaWJ1dG9yVHlwZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQ29udHJpYnV0b3JUeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIENvbnRyaWJ1dG9yIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRyaWJ1dG9yQXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiBjb250cmlidXRvci5cclxuICAgKi9cclxuICB0eXBlOiBmaGlyLkZoaXJDb2RlPENvbnRyaWJ1dG9yVHlwZUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDb250cmlidXRvci50eXBlXHJcbiAgICovXHJcbiAgX3R5cGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBpbmRpdmlkdWFsIG9yIG9yZ2FuaXphdGlvbiByZXNwb25zaWJsZSBmb3IgdGhlIGNvbnRyaWJ1dGlvbi5cclxuICAgKi9cclxuICBuYW1lOiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29udHJpYnV0b3IubmFtZVxyXG4gICAqL1xyXG4gIF9uYW1lPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBDb250YWN0IGRldGFpbHMgdG8gYXNzaXN0IGEgdXNlciBpbiBmaW5kaW5nIGFuZCBjb21tdW5pY2F0aW5nIHdpdGggdGhlIGNvbnRyaWJ1dG9yLlxyXG4gICAqL1xyXG4gIGNvbnRhY3Q/OiBmaGlyLkNvbnRhY3REZXRhaWxBcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBjb250cmlidXRvciB0byB0aGUgY29udGVudCBvZiBhIGtub3dsZWRnZSBhc3NldCwgaW5jbHVkaW5nIGF1dGhvcnMsIGVkaXRvcnMsIHJldmlld2VycywgYW5kIGVuZG9yc2Vycy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb250cmlidXRvciBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQ29udHJpYnV0b3InO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0eXBlIG9mIGNvbnRyaWJ1dG9yLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0eXBlOiBmaGlyLkZoaXJDb2RlPENvbnRyaWJ1dG9yVHlwZUNvZGVUeXBlPnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBpbmRpdmlkdWFsIG9yIG9yZ2FuaXphdGlvbiByZXNwb25zaWJsZSBmb3IgdGhlIGNvbnRyaWJ1dGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgbmFtZTogZmhpci5GaGlyU3RyaW5nfG51bGw7XHJcbiAgLyoqXHJcbiAgICogQ29udGFjdCBkZXRhaWxzIHRvIGFzc2lzdCBhIHVzZXIgaW4gZmluZGluZyBhbmQgY29tbXVuaWNhdGluZyB3aXRoIHRoZSBjb250cmlidXRvci5cclxuICAgKi9cclxuICBwdWJsaWMgY29udGFjdDogZmhpci5Db250YWN0RGV0YWlsW107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgQ29udHJpYnV0b3IgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxDb250cmlidXRvckFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyd0eXBlJ10pIHsgdGhpcy50eXBlID0gbmV3IGZoaXIuRmhpckNvZGU8Q29udHJpYnV0b3JUeXBlQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnR5cGV9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMudHlwZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ190eXBlJ10pIHtcclxuICAgICAgaWYgKHRoaXMudHlwZSkgeyB0aGlzLnR5cGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdHlwZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZTxDb250cmlidXRvclR5cGVDb2RlVHlwZT4oc291cmNlLl90eXBlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyduYW1lJ10pIHsgdGhpcy5uYW1lID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5uYW1lfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLm5hbWUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfbmFtZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLm5hbWUpIHsgdGhpcy5uYW1lLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX25hbWUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5uYW1lID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX25hbWUgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NvbnRhY3QnXSkgeyB0aGlzLmNvbnRhY3QgPSBzb3VyY2UuY29udGFjdC5tYXAoKHgpID0+IG5ldyBmaGlyLkNvbnRhY3REZXRhaWwoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb250YWN0ID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdDb250cmlidXRvcicgfVxyXG4gICAgdGhpcy52UlNWKCd0eXBlJyxleHAsJ0NvbnRyaWJ1dG9yVHlwZScsQ29udHJpYnV0b3JUeXBlVnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHRoaXMudlJTKCduYW1lJyxleHApXHJcbiAgICB0aGlzLnZPQSgnY29udGFjdCcsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19