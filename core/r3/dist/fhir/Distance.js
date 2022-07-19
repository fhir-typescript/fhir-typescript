// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Distance
import * as fhir from '../fhir.js';
/**
 * A length - a value with a unit that is a physical distance.
 */
export class Distance extends fhir.Quantity {
    /**
     * Default constructor for Distance - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Distance';
        }
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Distance._fts_dataType = 'Distance';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzdGFuY2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0Rpc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDZCQUE2QjtBQUU3QixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQVFuQzs7R0FFRztBQUNILE1BQU0sT0FBTyxRQUFTLFNBQVEsSUFBSSxDQUFDLFFBQVE7SUFLekM7O09BRUc7SUFDSCxZQUFZLFNBQStCLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3JGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksR0FBRyxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLFVBQVUsQ0FBQTtTQUFFO1FBQ3BDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUFqQkQ7O0dBRUc7QUFDNkIsc0JBQWEsR0FBVSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IERpc3RhbmNlXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIERpc3RhbmNlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERpc3RhbmNlQXJncyBleHRlbmRzIGZoaXIuUXVhbnRpdHlBcmdzIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgbGVuZ3RoIC0gYSB2YWx1ZSB3aXRoIGEgdW5pdCB0aGF0IGlzIGEgcGh5c2ljYWwgZGlzdGFuY2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRGlzdGFuY2UgZXh0ZW5kcyBmaGlyLlF1YW50aXR5IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0Rpc3RhbmNlJztcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBEaXN0YW5jZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPERpc3RhbmNlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdEaXN0YW5jZScgfVxyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19