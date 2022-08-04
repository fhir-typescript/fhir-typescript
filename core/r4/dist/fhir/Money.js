// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Money
import * as fhir from '../fhir.js';
// @ts-ignore
import { CurrenciesVsValidation } from '../fhirValueSets/CurrenciesVsValidation.js';
/**
 * An amount of economic utility in some recognized currency.
 */
export class Money extends fhir.FhirElement {
    /**
     * Default constructor for Money - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['value'] !== undefined) {
            this.value = new fhir.FhirDecimal({ value: source.value }, options);
        }
        if (source['_value']) {
            if (this.value) {
                this.value.addExtendedProperties(source._value);
            }
            else {
                this.value = new fhir.FhirDecimal(source._value, options);
            }
        }
        if (source['currency'] !== undefined) {
            this.currency = new fhir.FhirCode({ value: source.currency }, options);
        }
        if (source['_currency']) {
            if (this.currency) {
                this.currency.addExtendedProperties(source._currency);
            }
            else {
                this.currency = new fhir.FhirCode(source._currency, options);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Money';
        }
        iss.push(...this.vOS('value', exp));
        iss.push(...this.vOSV('currency', exp, 'Currencies', CurrenciesVsValidation, 'r'));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Money._fts_dataType = 'Money';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9uZXkuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL01vbmV5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUUxQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUluQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUF1QnBGOztHQUVHO0FBQ0gsTUFBTSxPQUFPLEtBQU0sU0FBUSxJQUFJLENBQUMsV0FBVztJQWF6Qzs7T0FFRztJQUNILFlBQVksU0FBNEIsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDbEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUN6RyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsTUFBTyxDQUFDLENBQUM7YUFBRTtpQkFDaEU7Z0JBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQXVDLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFBRTtTQUNyRztRQUNELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQy9HLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxTQUFVLENBQUMsQ0FBQzthQUFFO2lCQUN6RTtnQkFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBdUMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1NBQ3JHO0lBQ0gsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksR0FBRyxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLE9BQU8sQ0FBQTtTQUFFO1FBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxHQUFHLEVBQUMsWUFBWSxFQUFDLHNCQUFzQixFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0UsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQXJDRDs7R0FFRztBQUM2QixtQkFBYSxHQUFVLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogTW9uZXlcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEN1cnJlbmNpZXNDb2RlcywgIEN1cnJlbmNpZXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQ3VycmVuY2llc0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBDdXJyZW5jaWVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9DdXJyZW5jaWVzVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIE1vbmV5IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1vbmV5QXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBNb25ldGFyeSB2YWx1ZXMgaGF2ZSB0aGVpciBvd24gcnVsZXMgZm9yIGhhbmRsaW5nIHByZWNpc2lvbiAocmVmZXIgdG8gc3RhbmRhcmQgYWNjb3VudGluZyB0ZXh0IGJvb2tzKS5cclxuICAgKi9cclxuICB2YWx1ZT86IGZoaXIuRmhpckRlY2ltYWx8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTW9uZXkudmFsdWVcclxuICAgKi9cclxuICBfdmFsdWU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIElTTyA0MjE3IEN1cnJlbmN5IENvZGUuXHJcbiAgICovXHJcbiAgY3VycmVuY3k/OiBmaGlyLkZoaXJDb2RlfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1vbmV5LmN1cnJlbmN5XHJcbiAgICovXHJcbiAgX2N1cnJlbmN5PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGFtb3VudCBvZiBlY29ub21pYyB1dGlsaXR5IGluIHNvbWUgcmVjb2duaXplZCBjdXJyZW5jeS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNb25leSBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnTW9uZXknO1xyXG4gIC8qKlxyXG4gICAqIE1vbmV0YXJ5IHZhbHVlcyBoYXZlIHRoZWlyIG93biBydWxlcyBmb3IgaGFuZGxpbmcgcHJlY2lzaW9uIChyZWZlciB0byBzdGFuZGFyZCBhY2NvdW50aW5nIHRleHQgYm9va3MpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB2YWx1ZT86IGZoaXIuRmhpckRlY2ltYWx8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElTTyA0MjE3IEN1cnJlbmN5IENvZGUuXHJcbiAgICovXHJcbiAgcHVibGljIGN1cnJlbmN5PzogZmhpci5GaGlyQ29kZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgTW9uZXkgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxNb25leUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyd2YWx1ZSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJEZWNpbWFsKHt2YWx1ZTogc291cmNlLnZhbHVlfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ192YWx1ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbHVlKSB7IHRoaXMudmFsdWUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdmFsdWUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJEZWNpbWFsKHNvdXJjZS5fdmFsdWUgYXMgUGFydGlhbDxmaGlyLkZoaXJEZWNpbWFsQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjdXJyZW5jeSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5jdXJyZW5jeSA9IG5ldyBmaGlyLkZoaXJDb2RlKHt2YWx1ZTogc291cmNlLmN1cnJlbmN5fSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jdXJyZW5jeSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbmN5KSB7IHRoaXMuY3VycmVuY3kuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY3VycmVuY3khKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jdXJyZW5jeSA9IG5ldyBmaGlyLkZoaXJDb2RlKHNvdXJjZS5fY3VycmVuY3kgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnTW9uZXknIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd2YWx1ZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPU1YoJ2N1cnJlbmN5JyxleHAsJ0N1cnJlbmNpZXMnLEN1cnJlbmNpZXNWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=