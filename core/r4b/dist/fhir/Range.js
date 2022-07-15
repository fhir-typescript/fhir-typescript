// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
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
            this.low = new fhir.Quantity(source.low);
        }
        if (source['high']) {
            this.high = new fhir.Quantity(source.high);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Range';
        }
        this.vOS('low', exp);
        this.vOS('high', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Range._fts_dataType = 'Range';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFuZ2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1JhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUUxQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQWdCbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sS0FBTSxTQUFRLElBQUksQ0FBQyxXQUFXO0lBYXpDOztPQUVHO0lBQ0gsWUFBWSxTQUE0QixFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNsRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQUU7UUFDaEUsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FBRTtJQUNyRSxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsT0FBTyxDQUFBO1NBQUU7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUE3QkQ7O0dBRUc7QUFDNkIsbUJBQWEsR0FBVSxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBSYW5nZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBSYW5nZSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBSYW5nZUFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIGxvdyBlbGVtZW50IGlzIG1pc3NpbmcsIHRoZSBsb3cgYm91bmRhcnkgaXMgbm90IGtub3duLlxyXG4gICAqL1xyXG4gIGxvdz86IGZoaXIuUXVhbnRpdHlBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiB0aGUgaGlnaCBlbGVtZW50IGlzIG1pc3NpbmcsIHRoZSBoaWdoIGJvdW5kYXJ5IGlzIG5vdCBrbm93bi5cclxuICAgKi9cclxuICBoaWdoPzogZmhpci5RdWFudGl0eUFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBzZXQgb2Ygb3JkZXJlZCBRdWFudGl0aWVzIGRlZmluZWQgYnkgYSBsb3cgYW5kIGhpZ2ggbGltaXQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmFuZ2UgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1JhbmdlJztcclxuICAvKipcclxuICAgKiBJZiB0aGUgbG93IGVsZW1lbnQgaXMgbWlzc2luZywgdGhlIGxvdyBib3VuZGFyeSBpcyBub3Qga25vd24uXHJcbiAgICovXHJcbiAgcHVibGljIGxvdz86IGZoaXIuUXVhbnRpdHl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBoaWdoIGVsZW1lbnQgaXMgbWlzc2luZywgdGhlIGhpZ2ggYm91bmRhcnkgaXMgbm90IGtub3duLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBoaWdoPzogZmhpci5RdWFudGl0eXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgUmFuZ2UgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxSYW5nZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydsb3cnXSkgeyB0aGlzLmxvdyA9IG5ldyBmaGlyLlF1YW50aXR5KHNvdXJjZS5sb3cpOyB9XHJcbiAgICBpZiAoc291cmNlWydoaWdoJ10pIHsgdGhpcy5oaWdoID0gbmV3IGZoaXIuUXVhbnRpdHkoc291cmNlLmhpZ2gpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnUmFuZ2UnIH1cclxuICAgIHRoaXMudk9TKCdsb3cnLGV4cClcclxuICAgIHRoaXMudk9TKCdoaWdoJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=