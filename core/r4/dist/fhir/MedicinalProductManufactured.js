// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MedicinalProductManufactured
import * as fhir from '../fhir.js';
/**
 * The manufactured item as contained in the packaged medicinal product.
 */
export class MedicinalProductManufactured extends fhir.DomainResource {
    /**
     * Default constructor for MedicinalProductManufactured - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'MedicinalProductManufactured';
        if (source['manufacturedDoseForm']) {
            this.manufacturedDoseForm = new fhir.CodeableConcept(source.manufacturedDoseForm);
        }
        else {
            this.manufacturedDoseForm = null;
        }
        if (source['unitOfPresentation']) {
            this.unitOfPresentation = new fhir.CodeableConcept(source.unitOfPresentation);
        }
        if (source['quantity']) {
            this.quantity = new fhir.Quantity(source.quantity);
        }
        else {
            this.quantity = null;
        }
        if (source['manufacturer']) {
            this.manufacturer = source.manufacturer.map((x) => new fhir.Reference(x));
        }
        else {
            this.manufacturer = [];
        }
        if (source['ingredient']) {
            this.ingredient = source.ingredient.map((x) => new fhir.Reference(x));
        }
        else {
            this.ingredient = [];
        }
        if (source['physicalCharacteristics']) {
            this.physicalCharacteristics = new fhir.ProdCharacteristic(source.physicalCharacteristics);
        }
        if (source['otherCharacteristics']) {
            this.otherCharacteristics = source.otherCharacteristics.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.otherCharacteristics = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'MedicinalProductManufactured';
        }
        this.vReqS('resourceType', expression);
        this.vReqS('manufacturedDoseForm', expression);
        this.vOptS('unitOfPresentation', expression);
        this.vReqS('quantity', expression);
        this.vOptA('manufacturer', expression);
        this.vOptA('ingredient', expression);
        this.vOptS('physicalCharacteristics', expression);
        this.vOptA('otherCharacteristics', expression);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
MedicinalProductManufactured._fts_dataType = 'MedicinalProductManufactured';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWNpbmFsUHJvZHVjdE1hbnVmYWN0dXJlZC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvTWVkaWNpbmFsUHJvZHVjdE1hbnVmYWN0dXJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyw4Q0FBOEM7QUFFOUMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUF3Q25DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLDRCQUE2QixTQUFRLElBQUksQ0FBQyxjQUFjO0lBcUNuRTs7T0FFRztJQUNILFlBQVksU0FBbUQsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDekcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLDhCQUE4QixDQUFDO1FBQ25ELElBQUksTUFBTSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQUU7YUFDckg7WUFBRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDMUMsSUFBSSxNQUFNLENBQUMsb0JBQW9CLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FBRTtRQUNwSCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUFFO2FBQzFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDckc7WUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQ2hDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUMvRjtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDOUIsSUFBSSxNQUFNLENBQUMseUJBQXlCLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUFFO1FBQ3RJLElBQUksTUFBTSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUNuSTtZQUFFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUM7U0FBRTtJQUMxQyxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxhQUFvQixFQUFFO1FBQ3RELElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakUsSUFBSSxVQUFVLEtBQUssRUFBRSxFQUFFO1lBQUUsVUFBVSxHQUFHLDhCQUE4QixDQUFBO1NBQUU7UUFDdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBQyxVQUFVLENBQUMsQ0FBQTtRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMseUJBQXlCLEVBQUMsVUFBVSxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBQyxVQUFVLENBQUMsQ0FBQTtRQUM3QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQXRFRDs7R0FFRztBQUM2QiwwQ0FBYSxHQUFVLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBNZWRpY2luYWxQcm9kdWN0TWFudWZhY3R1cmVkXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIE1lZGljaW5hbFByb2R1Y3RNYW51ZmFjdHVyZWQgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWNpbmFsUHJvZHVjdE1hbnVmYWN0dXJlZEFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIk1lZGljaW5hbFByb2R1Y3RNYW51ZmFjdHVyZWRcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRG9zZSBmb3JtIGFzIG1hbnVmYWN0dXJlZCBhbmQgYmVmb3JlIGFueSB0cmFuc2Zvcm1hdGlvbiBpbnRvIHRoZSBwaGFybWFjZXV0aWNhbCBwcm9kdWN0LlxyXG4gICAqL1xyXG4gIG1hbnVmYWN0dXJlZERvc2VGb3JtOiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUg4oCccmVhbCB3b3JsZOKAnSB1bml0cyBpbiB3aGljaCB0aGUgcXVhbnRpdHkgb2YgdGhlIG1hbnVmYWN0dXJlZCBpdGVtIGlzIGRlc2NyaWJlZC5cclxuICAgKi9cclxuICB1bml0T2ZQcmVzZW50YXRpb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBxdWFudGl0eSBvciBcImNvdW50IG51bWJlclwiIG9mIHRoZSBtYW51ZmFjdHVyZWQgaXRlbS5cclxuICAgKi9cclxuICBxdWFudGl0eTogZmhpci5RdWFudGl0eUFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBNYW51ZmFjdHVyZXIgb2YgdGhlIGl0ZW0gKE5vdGUgdGhhdCB0aGlzIHNob3VsZCBiZSBuYW1lZCBcIm1hbnVmYWN0dXJlclwiIGJ1dCBpdCBjdXJyZW50bHkgY2F1c2VzIHRlY2huaWNhbCBpc3N1ZXMpLlxyXG4gICAqL1xyXG4gIG1hbnVmYWN0dXJlcj86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmdyZWRpZW50LlxyXG4gICAqL1xyXG4gIGluZ3JlZGllbnQ/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGltZW5zaW9ucywgY29sb3IgZXRjLlxyXG4gICAqL1xyXG4gIHBoeXNpY2FsQ2hhcmFjdGVyaXN0aWNzPzogZmhpci5Qcm9kQ2hhcmFjdGVyaXN0aWNBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBPdGhlciBjb2RlYWJsZSBjaGFyYWN0ZXJpc3RpY3MuXHJcbiAgICovXHJcbiAgb3RoZXJDaGFyYWN0ZXJpc3RpY3M/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgbWFudWZhY3R1cmVkIGl0ZW0gYXMgY29udGFpbmVkIGluIHRoZSBwYWNrYWdlZCBtZWRpY2luYWwgcHJvZHVjdC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZWRpY2luYWxQcm9kdWN0TWFudWZhY3R1cmVkIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdNZWRpY2luYWxQcm9kdWN0TWFudWZhY3R1cmVkJztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIk1lZGljaW5hbFByb2R1Y3RNYW51ZmFjdHVyZWRcIjtcclxuICAvKipcclxuICAgKiBEb3NlIGZvcm0gYXMgbWFudWZhY3R1cmVkIGFuZCBiZWZvcmUgYW55IHRyYW5zZm9ybWF0aW9uIGludG8gdGhlIHBoYXJtYWNldXRpY2FsIHByb2R1Y3QuXHJcbiAgICovXHJcbiAgcHVibGljIG1hbnVmYWN0dXJlZERvc2VGb3JtOiBmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSDigJxyZWFsIHdvcmxk4oCdIHVuaXRzIGluIHdoaWNoIHRoZSBxdWFudGl0eSBvZiB0aGUgbWFudWZhY3R1cmVkIGl0ZW0gaXMgZGVzY3JpYmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1bml0T2ZQcmVzZW50YXRpb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHF1YW50aXR5IG9yIFwiY291bnQgbnVtYmVyXCIgb2YgdGhlIG1hbnVmYWN0dXJlZCBpdGVtLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBxdWFudGl0eTogZmhpci5RdWFudGl0eXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIE1hbnVmYWN0dXJlciBvZiB0aGUgaXRlbSAoTm90ZSB0aGF0IHRoaXMgc2hvdWxkIGJlIG5hbWVkIFwibWFudWZhY3R1cmVyXCIgYnV0IGl0IGN1cnJlbnRseSBjYXVzZXMgdGVjaG5pY2FsIGlzc3VlcykuXHJcbiAgICovXHJcbiAgcHVibGljIG1hbnVmYWN0dXJlcjogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBJbmdyZWRpZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpbmdyZWRpZW50OiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIERpbWVuc2lvbnMsIGNvbG9yIGV0Yy5cclxuICAgKi9cclxuICBwdWJsaWMgcGh5c2ljYWxDaGFyYWN0ZXJpc3RpY3M/OiBmaGlyLlByb2RDaGFyYWN0ZXJpc3RpY3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogT3RoZXIgY29kZWFibGUgY2hhcmFjdGVyaXN0aWNzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdGhlckNoYXJhY3RlcmlzdGljczogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBNZWRpY2luYWxQcm9kdWN0TWFudWZhY3R1cmVkIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8TWVkaWNpbmFsUHJvZHVjdE1hbnVmYWN0dXJlZEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdNZWRpY2luYWxQcm9kdWN0TWFudWZhY3R1cmVkJztcclxuICAgIGlmIChzb3VyY2VbJ21hbnVmYWN0dXJlZERvc2VGb3JtJ10pIHsgdGhpcy5tYW51ZmFjdHVyZWREb3NlRm9ybSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UubWFudWZhY3R1cmVkRG9zZUZvcm0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5tYW51ZmFjdHVyZWREb3NlRm9ybSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3VuaXRPZlByZXNlbnRhdGlvbiddKSB7IHRoaXMudW5pdE9mUHJlc2VudGF0aW9uID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS51bml0T2ZQcmVzZW50YXRpb24pOyB9XHJcbiAgICBpZiAoc291cmNlWydxdWFudGl0eSddKSB7IHRoaXMucXVhbnRpdHkgPSBuZXcgZmhpci5RdWFudGl0eShzb3VyY2UucXVhbnRpdHkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5xdWFudGl0eSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ21hbnVmYWN0dXJlciddKSB7IHRoaXMubWFudWZhY3R1cmVyID0gc291cmNlLm1hbnVmYWN0dXJlci5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLm1hbnVmYWN0dXJlciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydpbmdyZWRpZW50J10pIHsgdGhpcy5pbmdyZWRpZW50ID0gc291cmNlLmluZ3JlZGllbnQubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pbmdyZWRpZW50ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3BoeXNpY2FsQ2hhcmFjdGVyaXN0aWNzJ10pIHsgdGhpcy5waHlzaWNhbENoYXJhY3RlcmlzdGljcyA9IG5ldyBmaGlyLlByb2RDaGFyYWN0ZXJpc3RpYyhzb3VyY2UucGh5c2ljYWxDaGFyYWN0ZXJpc3RpY3MpOyB9XHJcbiAgICBpZiAoc291cmNlWydvdGhlckNoYXJhY3RlcmlzdGljcyddKSB7IHRoaXMub3RoZXJDaGFyYWN0ZXJpc3RpY3MgPSBzb3VyY2Uub3RoZXJDaGFyYWN0ZXJpc3RpY3MubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5vdGhlckNoYXJhY3RlcmlzdGljcyA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKTtcclxuICAgIGlmIChleHByZXNzaW9uID09PSAnJykgeyBleHByZXNzaW9uID0gJ01lZGljaW5hbFByb2R1Y3RNYW51ZmFjdHVyZWQnIH1cclxuICAgIHRoaXMudlJlcVMoJ3Jlc291cmNlVHlwZScsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudlJlcVMoJ21hbnVmYWN0dXJlZERvc2VGb3JtJyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52T3B0UygndW5pdE9mUHJlc2VudGF0aW9uJyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52UmVxUygncXVhbnRpdHknLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZPcHRBKCdtYW51ZmFjdHVyZXInLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZPcHRBKCdpbmdyZWRpZW50JyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52T3B0UygncGh5c2ljYWxDaGFyYWN0ZXJpc3RpY3MnLGV4cHJlc3Npb24pXHJcbiAgICB0aGlzLnZPcHRBKCdvdGhlckNoYXJhY3RlcmlzdGljcycsZXhwcmVzc2lvbilcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==