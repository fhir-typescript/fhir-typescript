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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFuZ2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1JhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUUxQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQWdCbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sS0FBTSxTQUFRLElBQUksQ0FBQyxXQUFXO0lBYXpDOztPQUVHO0lBQ0gsWUFBWSxTQUE0QixFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNsRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQUU7UUFDaEUsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FBRTtJQUNyRSxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsT0FBTyxDQUFBO1NBQUU7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUE3QkQ7O0dBRUc7QUFDNkIsbUJBQWEsR0FBVSxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IFJhbmdlXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFJhbmdlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFJhbmdlQXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBJZiB0aGUgbG93IGVsZW1lbnQgaXMgbWlzc2luZywgdGhlIGxvdyBib3VuZGFyeSBpcyBub3Qga25vd24uXHJcbiAgICovXHJcbiAgbG93PzogZmhpci5RdWFudGl0eUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBoaWdoIGVsZW1lbnQgaXMgbWlzc2luZywgdGhlIGhpZ2ggYm91bmRhcnkgaXMgbm90IGtub3duLlxyXG4gICAqL1xyXG4gIGhpZ2g/OiBmaGlyLlF1YW50aXR5QXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHNldCBvZiBvcmRlcmVkIFF1YW50aXRpZXMgZGVmaW5lZCBieSBhIGxvdyBhbmQgaGlnaCBsaW1pdC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSYW5nZSBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUmFuZ2UnO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBsb3cgZWxlbWVudCBpcyBtaXNzaW5nLCB0aGUgbG93IGJvdW5kYXJ5IGlzIG5vdCBrbm93bi5cclxuICAgKi9cclxuICBwdWJsaWMgbG93PzogZmhpci5RdWFudGl0eXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIGhpZ2ggZWxlbWVudCBpcyBtaXNzaW5nLCB0aGUgaGlnaCBib3VuZGFyeSBpcyBub3Qga25vd24uXHJcbiAgICovXHJcbiAgcHVibGljIGhpZ2g/OiBmaGlyLlF1YW50aXR5fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBSYW5nZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFJhbmdlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2xvdyddKSB7IHRoaXMubG93ID0gbmV3IGZoaXIuUXVhbnRpdHkoc291cmNlLmxvdyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2hpZ2gnXSkgeyB0aGlzLmhpZ2ggPSBuZXcgZmhpci5RdWFudGl0eShzb3VyY2UuaGlnaCk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdSYW5nZScgfVxyXG4gICAgdGhpcy52T1MoJ2xvdycsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2hpZ2gnLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==