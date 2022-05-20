// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Money
import * as fhir from '../fhir.js';
// @ts-ignore
import { CurrenciesCodings, } from '../fhirValueSets/CurrenciesCodings.js';
/**
 * An amount of economic utility in some recognized currency.
 */
export class Money extends fhir.FhirElement {
    /**
     * Default constructor for Money - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['value']) {
            this.value = new fhir.FhirDecimal({ value: source.value });
        }
        if (source['currency']) {
            this.currency = new fhir.FhirCode({ value: source.currency });
        }
    }
    /**
     * Required-bound Value Set for currency (Money.currency)
     */
    static currencyRequiredCoding() {
        return CurrenciesCodings;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        let issues = super.doModelValidation();
        if (this["value"]) {
            issues.push(...this.value.doModelValidation());
        }
        if (this["currency"]) {
            issues.push(...this.currency.doModelValidation());
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Money._fts_dataType = 'Money';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9uZXkuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL01vbmV5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUUxQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUVuQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLGlCQUFpQixHQUF3QixNQUFNLHVDQUF1QyxDQUFDO0FBaUJoRzs7R0FFRztBQUNILE1BQU0sT0FBTyxLQUFNLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUFhekM7O09BRUc7SUFDSCxZQUFZLFNBQTRCLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ2xGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ2xGLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7U0FBRTtJQUMxRixDQUFDO0lBQ0Q7O09BRUc7SUFDSSxNQUFNLENBQUMsc0JBQXNCO1FBQ2xDLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCO1FBQy9CLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3RFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDNUUsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUFsQ0Q7O0dBRUc7QUFDNkIsbUJBQWEsR0FBVSxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IE1vbmV5XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBDdXJyZW5jaWVzQ29kaW5ncywgQ3VycmVuY2llc0NvZGluZ1R5cGUsfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0N1cnJlbmNpZXNDb2RpbmdzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBDdXJyZW5jaWVzQ29kZXMsICBDdXJyZW5jaWVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0N1cnJlbmNpZXNDb2Rlcy5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBNb25leSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNb25leUFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogTW9uZXRhcnkgdmFsdWVzIGhhdmUgdGhlaXIgb3duIHJ1bGVzIGZvciBoYW5kbGluZyBwcmVjaXNpb24gKHJlZmVyIHRvIHN0YW5kYXJkIGFjY291bnRpbmcgdGV4dCBib29rcykuXHJcbiAgICovXHJcbiAgdmFsdWU/OiBmaGlyLkZoaXJEZWNpbWFsfG51bWJlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSVNPIDQyMTcgQ3VycmVuY3kgQ29kZS5cclxuICAgKi9cclxuICBjdXJyZW5jeT86IGZoaXIuRmhpckNvZGV8c3RyaW5nfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGFtb3VudCBvZiBlY29ub21pYyB1dGlsaXR5IGluIHNvbWUgcmVjb2duaXplZCBjdXJyZW5jeS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNb25leSBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnTW9uZXknO1xyXG4gIC8qKlxyXG4gICAqIE1vbmV0YXJ5IHZhbHVlcyBoYXZlIHRoZWlyIG93biBydWxlcyBmb3IgaGFuZGxpbmcgcHJlY2lzaW9uIChyZWZlciB0byBzdGFuZGFyZCBhY2NvdW50aW5nIHRleHQgYm9va3MpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB2YWx1ZT86IGZoaXIuRmhpckRlY2ltYWx8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElTTyA0MjE3IEN1cnJlbmN5IENvZGUuXHJcbiAgICovXHJcbiAgcHVibGljIGN1cnJlbmN5PzogZmhpci5GaGlyQ29kZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgTW9uZXkgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxNb25leUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyd2YWx1ZSddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5GaGlyRGVjaW1hbCh7dmFsdWU6IHNvdXJjZS52YWx1ZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydjdXJyZW5jeSddKSB7IHRoaXMuY3VycmVuY3kgPSBuZXcgZmhpci5GaGlyQ29kZSh7dmFsdWU6IHNvdXJjZS5jdXJyZW5jeX0pOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJlcXVpcmVkLWJvdW5kIFZhbHVlIFNldCBmb3IgY3VycmVuY3kgKE1vbmV5LmN1cnJlbmN5KVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY3VycmVuY3lSZXF1aXJlZENvZGluZygpOkN1cnJlbmNpZXNDb2RpbmdUeXBlIHtcclxuICAgIHJldHVybiBDdXJyZW5jaWVzQ29kaW5ncztcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKCk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oKTtcclxuICAgIGlmICh0aGlzW1widmFsdWVcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy52YWx1ZS5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJjdXJyZW5jeVwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLmN1cnJlbmN5LmRvTW9kZWxWYWxpZGF0aW9uKCkpOyB9XHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=