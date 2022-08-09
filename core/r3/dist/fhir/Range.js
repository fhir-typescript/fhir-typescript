// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Range
import * as fhir from '../fhir.js';
/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export class Range extends fhir.FhirElement {
    /**
     * Default constructor for Range - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['low']) {
            this.low = new fhir.Quantity(source.low, options);
        }
        if (source['high']) {
            this.high = new fhir.Quantity(source.high, options);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Range';
        }
        iss.push(...this.vOS('low', exp));
        iss.push(...this.vOS('high', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Range._fts_dataType = 'Range';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFuZ2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1JhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUUxQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQWdCbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sS0FBTSxTQUFRLElBQUksQ0FBQyxXQUFXO0lBYXpDOztPQUVHO0lBQ0gsWUFBWSxTQUE0QixFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNsRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQ3pFLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO0lBQzlFLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLEdBQUcsR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxPQUFPLENBQUE7U0FBRTtRQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBN0JEOztHQUVHO0FBQzZCLG1CQUFhLEdBQVUsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBSYW5nZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBSYW5nZSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBSYW5nZUFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIGxvdyBlbGVtZW50IGlzIG1pc3NpbmcsIHRoZSBsb3cgYm91bmRhcnkgaXMgbm90IGtub3duLlxyXG4gICAqL1xyXG4gIGxvdz86IGZoaXIuUXVhbnRpdHlBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiB0aGUgaGlnaCBlbGVtZW50IGlzIG1pc3NpbmcsIHRoZSBoaWdoIGJvdW5kYXJ5IGlzIG5vdCBrbm93bi5cclxuICAgKi9cclxuICBoaWdoPzogZmhpci5RdWFudGl0eUFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBzZXQgb2Ygb3JkZXJlZCBRdWFudGl0aWVzIGRlZmluZWQgYnkgYSBsb3cgYW5kIGhpZ2ggbGltaXQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmFuZ2UgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1JhbmdlJztcclxuICAvKipcclxuICAgKiBJZiB0aGUgbG93IGVsZW1lbnQgaXMgbWlzc2luZywgdGhlIGxvdyBib3VuZGFyeSBpcyBub3Qga25vd24uXHJcbiAgICovXHJcbiAgcHVibGljIGxvdz86IGZoaXIuUXVhbnRpdHl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBoaWdoIGVsZW1lbnQgaXMgbWlzc2luZywgdGhlIGhpZ2ggYm91bmRhcnkgaXMgbm90IGtub3duLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBoaWdoPzogZmhpci5RdWFudGl0eXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgUmFuZ2UgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxSYW5nZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydsb3cnXSkgeyB0aGlzLmxvdyA9IG5ldyBmaGlyLlF1YW50aXR5KHNvdXJjZS5sb3csIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydoaWdoJ10pIHsgdGhpcy5oaWdoID0gbmV3IGZoaXIuUXVhbnRpdHkoc291cmNlLmhpZ2gsIG9wdGlvbnMpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnUmFuZ2UnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdsb3cnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2hpZ2gnLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19