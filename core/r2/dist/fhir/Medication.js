// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Medication
import * as fhir from '../fhir.js';
/**
 * Identifies a particular constituent of interest in the product.
 */
export class MedicationProductIngredient extends fhir.BackboneElement {
    /**
     * Default constructor for MedicationProductIngredient - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['item']) {
            this.item = new fhir.Reference(source.item, options);
        }
        else {
            this.item = null;
        }
        if (source['amount']) {
            this.amount = new fhir.Ratio(source.amount, options);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Medication.product.ingredient';
        }
        iss.push(...this.vRS('item', exp));
        iss.push(...this.vOS('amount', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
MedicationProductIngredient._fts_dataType = 'MedicationProductIngredient';
/**
 * Information about a group of medication produced or packaged from one production run.
 */
export class MedicationProductBatch extends fhir.BackboneElement {
    /**
     * Default constructor for MedicationProductBatch - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['lotNumber'] !== undefined) {
            this.lotNumber = new fhir.FhirString({ value: source.lotNumber }, options);
        }
        if (source['_lotNumber']) {
            if (this.lotNumber) {
                this.lotNumber.addExtendedProperties(source._lotNumber);
            }
            else {
                this.lotNumber = new fhir.FhirString(source._lotNumber, options);
            }
        }
        if (source['expirationDate'] !== undefined) {
            this.expirationDate = new fhir.FhirDateTime({ value: source.expirationDate }, options);
        }
        if (source['_expirationDate']) {
            if (this.expirationDate) {
                this.expirationDate.addExtendedProperties(source._expirationDate);
            }
            else {
                this.expirationDate = new fhir.FhirDateTime(source._expirationDate, options);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Medication.product.batch';
        }
        iss.push(...this.vOS('lotNumber', exp));
        iss.push(...this.vOS('expirationDate', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
MedicationProductBatch._fts_dataType = 'MedicationProductBatch';
/**
 * Information that only applies to products (not packages).
 */
export class MedicationProduct extends fhir.BackboneElement {
    /**
     * Default constructor for MedicationProduct - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['form']) {
            this.form = new fhir.CodeableConcept(source.form, options);
        }
        if (source['ingredient']) {
            this.ingredient = source.ingredient.map((x) => new fhir.MedicationProductIngredient(x, options));
        }
        else {
            this.ingredient = [];
        }
        if (source['batch']) {
            this.batch = source.batch.map((x) => new fhir.MedicationProductBatch(x, options));
        }
        else {
            this.batch = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Medication.product';
        }
        iss.push(...this.vOS('form', exp));
        iss.push(...this.vOA('ingredient', exp));
        iss.push(...this.vOA('batch', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
MedicationProduct._fts_dataType = 'MedicationProduct';
/**
 * A set of components that go to make up the described item.
 */
export class MedicationPackageContent extends fhir.BackboneElement {
    /**
     * Default constructor for MedicationPackageContent - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['item']) {
            this.item = new fhir.Reference(source.item, options);
        }
        else {
            this.item = null;
        }
        if (source['amount']) {
            this.amount = new fhir.Quantity(source.amount, options);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Medication.package.content';
        }
        iss.push(...this.vRS('item', exp));
        iss.push(...this.vOS('amount', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
MedicationPackageContent._fts_dataType = 'MedicationPackageContent';
/**
 * Information that only applies to packages (not products).
 */
export class MedicationPackage extends fhir.BackboneElement {
    /**
     * Default constructor for MedicationPackage - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['container']) {
            this.container = new fhir.CodeableConcept(source.container, options);
        }
        if (source['content']) {
            this.content = source.content.map((x) => new fhir.MedicationPackageContent(x, options));
        }
        else {
            this.content = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Medication.package';
        }
        iss.push(...this.vOS('container', exp));
        iss.push(...this.vOA('content', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
MedicationPackage._fts_dataType = 'MedicationPackage';
/**
 * This resource is primarily used for the identification and definition of a medication. It covers the ingredients and the packaging for a medication.
 */
export class Medication extends fhir.DomainResource {
    /**
     * Default constructor for Medication - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Medication';
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code, options);
        }
        if (source['isBrand'] !== undefined) {
            this.isBrand = new fhir.FhirBoolean({ value: source.isBrand }, options);
        }
        if (source['_isBrand']) {
            if (this.isBrand) {
                this.isBrand.addExtendedProperties(source._isBrand);
            }
            else {
                this.isBrand = new fhir.FhirBoolean(source._isBrand, options);
            }
        }
        if (source['manufacturer']) {
            this.manufacturer = new fhir.Reference(source.manufacturer, options);
        }
        if (source['product']) {
            this.product = new fhir.MedicationProduct(source.product, options);
        }
        if (source['package']) {
            this.package = new fhir.MedicationPackage(source.package, options);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Medication';
        }
        iss.push(...this.vOS('code', exp));
        iss.push(...this.vOS('isBrand', exp));
        iss.push(...this.vOS('manufacturer', exp));
        iss.push(...this.vOS('product', exp));
        iss.push(...this.vOS('package', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Medication._fts_dataType = 'Medication';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvTWVkaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyw0QkFBNEI7QUFFNUIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFnQm5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLDJCQUE0QixTQUFRLElBQUksQ0FBQyxlQUFlO0lBYW5FOztPQUVHO0lBQ0gsWUFBWSxTQUFrRCxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUN4RyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO2FBQ3hFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FBRTtRQUMxQixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtJQUNqRixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxHQUFHLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsK0JBQStCLENBQUE7U0FBRTtRQUN6RCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNs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Q0FBQztTQUFFO1FBQzlGLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7SUFDaEcsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksR0FBRyxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLFlBQVksQ0FBQTtTQUFFO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUF4REQ7O0dBRUc7QUFDNkIsd0JBQWEsR0FBVSxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IE1lZGljYXRpb25cclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgTWVkaWNhdGlvblByb2R1Y3RJbmdyZWRpZW50IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1lZGljYXRpb25Qcm9kdWN0SW5ncmVkaWVudEFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhY3R1YWwgaW5ncmVkaWVudCAtIGVpdGhlciBhIHN1YnN0YW5jZSAoc2ltcGxlIGluZ3JlZGllbnQpIG9yIGFub3RoZXIgbWVkaWNhdGlvbi5cclxuICAgKi9cclxuICBpdGVtOiBmaGlyLlJlZmVyZW5jZUFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBTcGVjaWZpZXMgaG93IG1hbnkgKG9yIGhvdyBtdWNoKSBvZiB0aGUgaXRlbXMgdGhlcmUgYXJlIGluIHRoaXMgTWVkaWNhdGlvbi4gIEZvciBleGFtcGxlLCAyNTAgbWcgcGVyIHRhYmxldC5cclxuICAgKi9cclxuICBhbW91bnQ/OiBmaGlyLlJhdGlvQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJZGVudGlmaWVzIGEgcGFydGljdWxhciBjb25zdGl0dWVudCBvZiBpbnRlcmVzdCBpbiB0aGUgcHJvZHVjdC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZWRpY2F0aW9uUHJvZHVjdEluZ3JlZGllbnQgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdNZWRpY2F0aW9uUHJvZHVjdEluZ3JlZGllbnQnO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhY3R1YWwgaW5ncmVkaWVudCAtIGVpdGhlciBhIHN1YnN0YW5jZSAoc2ltcGxlIGluZ3JlZGllbnQpIG9yIGFub3RoZXIgbWVkaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgaXRlbTogZmhpci5SZWZlcmVuY2V8bnVsbDtcclxuICAvKipcclxuICAgKiBTcGVjaWZpZXMgaG93IG1hbnkgKG9yIGhvdyBtdWNoKSBvZiB0aGUgaXRlbXMgdGhlcmUgYXJlIGluIHRoaXMgTWVkaWNhdGlvbi4gIEZvciBleGFtcGxlLCAyNTAgbWcgcGVyIHRhYmxldC5cclxuICAgKi9cclxuICBwdWJsaWMgYW1vdW50PzogZmhpci5SYXRpb3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgTWVkaWNhdGlvblByb2R1Y3RJbmdyZWRpZW50IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8TWVkaWNhdGlvblByb2R1Y3RJbmdyZWRpZW50QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2l0ZW0nXSkgeyB0aGlzLml0ZW0gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLml0ZW0sIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pdGVtID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYW1vdW50J10pIHsgdGhpcy5hbW91bnQgPSBuZXcgZmhpci5SYXRpbyhzb3VyY2UuYW1vdW50LCBvcHRpb25zKTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ01lZGljYXRpb24ucHJvZHVjdC5pbmdyZWRpZW50JyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygnaXRlbScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnYW1vdW50JyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBNZWRpY2F0aW9uUHJvZHVjdEJhdGNoIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1lZGljYXRpb25Qcm9kdWN0QmF0Y2hBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgYXNzaWduZWQgbG90IG51bWJlciBvZiBhIGJhdGNoIG9mIHRoZSBzcGVjaWZpZWQgcHJvZHVjdC5cclxuICAgKi9cclxuICBsb3ROdW1iZXI/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVkaWNhdGlvbi5wcm9kdWN0LmJhdGNoLmxvdE51bWJlclxyXG4gICAqL1xyXG4gIF9sb3ROdW1iZXI/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFdoZW4gdGhpcyBzcGVjaWZpYyBiYXRjaCBvZiBwcm9kdWN0IHdpbGwgZXhwaXJlLlxyXG4gICAqL1xyXG4gIGV4cGlyYXRpb25EYXRlPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVkaWNhdGlvbi5wcm9kdWN0LmJhdGNoLmV4cGlyYXRpb25EYXRlXHJcbiAgICovXHJcbiAgX2V4cGlyYXRpb25EYXRlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEluZm9ybWF0aW9uIGFib3V0IGEgZ3JvdXAgb2YgbWVkaWNhdGlvbiBwcm9kdWNlZCBvciBwYWNrYWdlZCBmcm9tIG9uZSBwcm9kdWN0aW9uIHJ1bi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZWRpY2F0aW9uUHJvZHVjdEJhdGNoIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnTWVkaWNhdGlvblByb2R1Y3RCYXRjaCc7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFzc2lnbmVkIGxvdCBudW1iZXIgb2YgYSBiYXRjaCBvZiB0aGUgc3BlY2lmaWVkIHByb2R1Y3QuXHJcbiAgICovXHJcbiAgcHVibGljIGxvdE51bWJlcj86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGlzIHNwZWNpZmljIGJhdGNoIG9mIHByb2R1Y3Qgd2lsbCBleHBpcmUuXHJcbiAgICovXHJcbiAgcHVibGljIGV4cGlyYXRpb25EYXRlPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIE1lZGljYXRpb25Qcm9kdWN0QmF0Y2ggLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxNZWRpY2F0aW9uUHJvZHVjdEJhdGNoQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2xvdE51bWJlciddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5sb3ROdW1iZXIgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmxvdE51bWJlcn0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfbG90TnVtYmVyJ10pIHtcclxuICAgICAgaWYgKHRoaXMubG90TnVtYmVyKSB7IHRoaXMubG90TnVtYmVyLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2xvdE51bWJlciEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmxvdE51bWJlciA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9sb3ROdW1iZXIgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2V4cGlyYXRpb25EYXRlJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmV4cGlyYXRpb25EYXRlID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLmV4cGlyYXRpb25EYXRlfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19leHBpcmF0aW9uRGF0ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmV4cGlyYXRpb25EYXRlKSB7IHRoaXMuZXhwaXJhdGlvbkRhdGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZXhwaXJhdGlvbkRhdGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5leHBpcmF0aW9uRGF0ZSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX2V4cGlyYXRpb25EYXRlIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdNZWRpY2F0aW9uLnByb2R1Y3QuYmF0Y2gnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdsb3ROdW1iZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2V4cGlyYXRpb25EYXRlJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBNZWRpY2F0aW9uUHJvZHVjdCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNZWRpY2F0aW9uUHJvZHVjdEFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIERlc2NyaWJlcyB0aGUgZm9ybSBvZiB0aGUgaXRlbS4gIFBvd2RlcjsgdGFibGV0czsgY2FydG9uLlxyXG4gICAqL1xyXG4gIGZvcm0/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgYSBwYXJ0aWN1bGFyIGNvbnN0aXR1ZW50IG9mIGludGVyZXN0IGluIHRoZSBwcm9kdWN0LlxyXG4gICAqL1xyXG4gIGluZ3JlZGllbnQ/OiBmaGlyLk1lZGljYXRpb25Qcm9kdWN0SW5ncmVkaWVudEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW5mb3JtYXRpb24gYWJvdXQgYSBncm91cCBvZiBtZWRpY2F0aW9uIHByb2R1Y2VkIG9yIHBhY2thZ2VkIGZyb20gb25lIHByb2R1Y3Rpb24gcnVuLlxyXG4gICAqL1xyXG4gIGJhdGNoPzogZmhpci5NZWRpY2F0aW9uUHJvZHVjdEJhdGNoQXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluZm9ybWF0aW9uIHRoYXQgb25seSBhcHBsaWVzIHRvIHByb2R1Y3RzIChub3QgcGFja2FnZXMpLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1lZGljYXRpb25Qcm9kdWN0IGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnTWVkaWNhdGlvblByb2R1Y3QnO1xyXG4gIC8qKlxyXG4gICAqIERlc2NyaWJlcyB0aGUgZm9ybSBvZiB0aGUgaXRlbS4gIFBvd2RlcjsgdGFibGV0czsgY2FydG9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBmb3JtPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgYSBwYXJ0aWN1bGFyIGNvbnN0aXR1ZW50IG9mIGludGVyZXN0IGluIHRoZSBwcm9kdWN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpbmdyZWRpZW50OiBmaGlyLk1lZGljYXRpb25Qcm9kdWN0SW5ncmVkaWVudFtdO1xyXG4gIC8qKlxyXG4gICAqIEluZm9ybWF0aW9uIGFib3V0IGEgZ3JvdXAgb2YgbWVkaWNhdGlvbiBwcm9kdWNlZCBvciBwYWNrYWdlZCBmcm9tIG9uZSBwcm9kdWN0aW9uIHJ1bi5cclxuICAgKi9cclxuICBwdWJsaWMgYmF0Y2g6IGZoaXIuTWVkaWNhdGlvblByb2R1Y3RCYXRjaFtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIE1lZGljYXRpb25Qcm9kdWN0IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8TWVkaWNhdGlvblByb2R1Y3RBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnZm9ybSddKSB7IHRoaXMuZm9ybSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuZm9ybSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2luZ3JlZGllbnQnXSkgeyB0aGlzLmluZ3JlZGllbnQgPSBzb3VyY2UuaW5ncmVkaWVudC5tYXAoKHgpID0+IG5ldyBmaGlyLk1lZGljYXRpb25Qcm9kdWN0SW5ncmVkaWVudCh4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmluZ3JlZGllbnQgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYmF0Y2gnXSkgeyB0aGlzLmJhdGNoID0gc291cmNlLmJhdGNoLm1hcCgoeCkgPT4gbmV3IGZoaXIuTWVkaWNhdGlvblByb2R1Y3RCYXRjaCh4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmJhdGNoID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdNZWRpY2F0aW9uLnByb2R1Y3QnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdmb3JtJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdpbmdyZWRpZW50JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdiYXRjaCcsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgTWVkaWNhdGlvblBhY2thZ2VDb250ZW50IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1lZGljYXRpb25QYWNrYWdlQ29udGVudEFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgb25lIG9mIHRoZSBpdGVtcyBpbiB0aGUgcGFja2FnZS5cclxuICAgKi9cclxuICBpdGVtOiBmaGlyLlJlZmVyZW5jZUFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgYW1vdW50IG9mIHRoZSBwcm9kdWN0IHRoYXQgaXMgaW4gdGhlIHBhY2thZ2UuXHJcbiAgICovXHJcbiAgYW1vdW50PzogZmhpci5RdWFudGl0eUFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBzZXQgb2YgY29tcG9uZW50cyB0aGF0IGdvIHRvIG1ha2UgdXAgdGhlIGRlc2NyaWJlZCBpdGVtLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1lZGljYXRpb25QYWNrYWdlQ29udGVudCBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ01lZGljYXRpb25QYWNrYWdlQ29udGVudCc7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcyBvbmUgb2YgdGhlIGl0ZW1zIGluIHRoZSBwYWNrYWdlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpdGVtOiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhbW91bnQgb2YgdGhlIHByb2R1Y3QgdGhhdCBpcyBpbiB0aGUgcGFja2FnZS5cclxuICAgKi9cclxuICBwdWJsaWMgYW1vdW50PzogZmhpci5RdWFudGl0eXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgTWVkaWNhdGlvblBhY2thZ2VDb250ZW50IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8TWVkaWNhdGlvblBhY2thZ2VDb250ZW50QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2l0ZW0nXSkgeyB0aGlzLml0ZW0gPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLml0ZW0sIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pdGVtID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYW1vdW50J10pIHsgdGhpcy5hbW91bnQgPSBuZXcgZmhpci5RdWFudGl0eShzb3VyY2UuYW1vdW50LCBvcHRpb25zKTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ01lZGljYXRpb24ucGFja2FnZS5jb250ZW50JyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygnaXRlbScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnYW1vdW50JyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBNZWRpY2F0aW9uUGFja2FnZSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNZWRpY2F0aW9uUGFja2FnZUFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBraW5kIG9mIGNvbnRhaW5lciB0aGF0IHRoaXMgcGFja2FnZSBjb21lcyBhcy5cclxuICAgKi9cclxuICBjb250YWluZXI/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgc2V0IG9mIGNvbXBvbmVudHMgdGhhdCBnbyB0byBtYWtlIHVwIHRoZSBkZXNjcmliZWQgaXRlbS5cclxuICAgKi9cclxuICBjb250ZW50PzogZmhpci5NZWRpY2F0aW9uUGFja2FnZUNvbnRlbnRBcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogSW5mb3JtYXRpb24gdGhhdCBvbmx5IGFwcGxpZXMgdG8gcGFja2FnZXMgKG5vdCBwcm9kdWN0cykuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWVkaWNhdGlvblBhY2thZ2UgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdNZWRpY2F0aW9uUGFja2FnZSc7XHJcbiAgLyoqXHJcbiAgICogVGhlIGtpbmQgb2YgY29udGFpbmVyIHRoYXQgdGhpcyBwYWNrYWdlIGNvbWVzIGFzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb250YWluZXI/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBzZXQgb2YgY29tcG9uZW50cyB0aGF0IGdvIHRvIG1ha2UgdXAgdGhlIGRlc2NyaWJlZCBpdGVtLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb250ZW50OiBmaGlyLk1lZGljYXRpb25QYWNrYWdlQ29udGVudFtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIE1lZGljYXRpb25QYWNrYWdlIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8TWVkaWNhdGlvblBhY2thZ2VBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnY29udGFpbmVyJ10pIHsgdGhpcy5jb250YWluZXIgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmNvbnRhaW5lciwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2NvbnRlbnQnXSkgeyB0aGlzLmNvbnRlbnQgPSBzb3VyY2UuY29udGVudC5tYXAoKHgpID0+IG5ldyBmaGlyLk1lZGljYXRpb25QYWNrYWdlQ29udGVudCh4LCBvcHRpb25zKSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmNvbnRlbnQgPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ01lZGljYXRpb24ucGFja2FnZScgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2NvbnRhaW5lcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnY29udGVudCcsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgTWVkaWNhdGlvbiB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNZWRpY2F0aW9uQXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiTWVkaWNhdGlvblwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGNvZGUgKG9yIHNldCBvZiBjb2RlcykgdGhhdCBzcGVjaWZ5IHRoaXMgbWVkaWNhdGlvbiwgb3IgYSB0ZXh0dWFsIGRlc2NyaXB0aW9uIGlmIG5vIGNvZGUgaXMgYXZhaWxhYmxlLiBVc2FnZSBub3RlOiBUaGlzIGNvdWxkIGJlIGEgc3RhbmRhcmQgbWVkaWNhdGlvbiBjb2RlIHN1Y2ggYXMgYSBjb2RlIGZyb20gUnhOb3JtLCBTTk9NRUQgQ1QsIElETVAgZXRjLiBJdCBjb3VsZCBhbHNvIGJlIGEgbmF0aW9uYWwgb3IgbG9jYWwgZm9ybXVsYXJ5IGNvZGUsIG9wdGlvbmFsbHkgd2l0aCB0cmFuc2xhdGlvbnMgdG8gb3RoZXIgY29kZSBzeXN0ZW1zLlxyXG4gICAqL1xyXG4gIGNvZGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFNldCB0byB0cnVlIGlmIHRoZSBpdGVtIGlzIGF0dHJpYnV0YWJsZSB0byBhIHNwZWNpZmljIG1hbnVmYWN0dXJlci5cclxuICAgKi9cclxuICBpc0JyYW5kPzogZmhpci5GaGlyQm9vbGVhbnxib29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVkaWNhdGlvbi5pc0JyYW5kXHJcbiAgICovXHJcbiAgX2lzQnJhbmQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIERlc2NyaWJlcyB0aGUgZGV0YWlscyBvZiB0aGUgbWFudWZhY3R1cmVyLlxyXG4gICAqL1xyXG4gIG1hbnVmYWN0dXJlcj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW5mb3JtYXRpb24gdGhhdCBvbmx5IGFwcGxpZXMgdG8gcHJvZHVjdHMgKG5vdCBwYWNrYWdlcykuXHJcbiAgICovXHJcbiAgcHJvZHVjdD86IGZoaXIuTWVkaWNhdGlvblByb2R1Y3RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmZvcm1hdGlvbiB0aGF0IG9ubHkgYXBwbGllcyB0byBwYWNrYWdlcyAobm90IHByb2R1Y3RzKS5cclxuICAgKi9cclxuICBwYWNrYWdlPzogZmhpci5NZWRpY2F0aW9uUGFja2FnZUFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyByZXNvdXJjZSBpcyBwcmltYXJpbHkgdXNlZCBmb3IgdGhlIGlkZW50aWZpY2F0aW9uIGFuZCBkZWZpbml0aW9uIG9mIGEgbWVkaWNhdGlvbi4gSXQgY292ZXJzIHRoZSBpbmdyZWRpZW50cyBhbmQgdGhlIHBhY2thZ2luZyBmb3IgYSBtZWRpY2F0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1lZGljYXRpb24gZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ01lZGljYXRpb24nO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiTWVkaWNhdGlvblwiO1xyXG4gIC8qKlxyXG4gICAqIEEgY29kZSAob3Igc2V0IG9mIGNvZGVzKSB0aGF0IHNwZWNpZnkgdGhpcyBtZWRpY2F0aW9uLCBvciBhIHRleHR1YWwgZGVzY3JpcHRpb24gaWYgbm8gY29kZSBpcyBhdmFpbGFibGUuIFVzYWdlIG5vdGU6IFRoaXMgY291bGQgYmUgYSBzdGFuZGFyZCBtZWRpY2F0aW9uIGNvZGUgc3VjaCBhcyBhIGNvZGUgZnJvbSBSeE5vcm0sIFNOT01FRCBDVCwgSURNUCBldGMuIEl0IGNvdWxkIGFsc28gYmUgYSBuYXRpb25hbCBvciBsb2NhbCBmb3JtdWxhcnkgY29kZSwgb3B0aW9uYWxseSB3aXRoIHRyYW5zbGF0aW9ucyB0byBvdGhlciBjb2RlIHN5c3RlbXMuXHJcbiAgICovXHJcbiAgcHVibGljIGNvZGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogU2V0IHRvIHRydWUgaWYgdGhlIGl0ZW0gaXMgYXR0cmlidXRhYmxlIHRvIGEgc3BlY2lmaWMgbWFudWZhY3R1cmVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc0JyYW5kPzogZmhpci5GaGlyQm9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVzY3JpYmVzIHRoZSBkZXRhaWxzIG9mIHRoZSBtYW51ZmFjdHVyZXIuXHJcbiAgICovXHJcbiAgcHVibGljIG1hbnVmYWN0dXJlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmZvcm1hdGlvbiB0aGF0IG9ubHkgYXBwbGllcyB0byBwcm9kdWN0cyAobm90IHBhY2thZ2VzKS5cclxuICAgKi9cclxuICBwdWJsaWMgcHJvZHVjdD86IGZoaXIuTWVkaWNhdGlvblByb2R1Y3R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZm9ybWF0aW9uIHRoYXQgb25seSBhcHBsaWVzIHRvIHBhY2thZ2VzIChub3QgcHJvZHVjdHMpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwYWNrYWdlPzogZmhpci5NZWRpY2F0aW9uUGFja2FnZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgTWVkaWNhdGlvbiAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPE1lZGljYXRpb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnTWVkaWNhdGlvbic7XHJcbiAgICBpZiAoc291cmNlWydjb2RlJ10pIHsgdGhpcy5jb2RlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5jb2RlLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnaXNCcmFuZCddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5pc0JyYW5kID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oe3ZhbHVlOiBzb3VyY2UuaXNCcmFuZH0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfaXNCcmFuZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzQnJhbmQpIHsgdGhpcy5pc0JyYW5kLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2lzQnJhbmQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5pc0JyYW5kID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oc291cmNlLl9pc0JyYW5kIGFzIFBhcnRpYWw8Zmhpci5GaGlyQm9vbGVhbkFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbWFudWZhY3R1cmVyJ10pIHsgdGhpcy5tYW51ZmFjdHVyZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLm1hbnVmYWN0dXJlciwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3Byb2R1Y3QnXSkgeyB0aGlzLnByb2R1Y3QgPSBuZXcgZmhpci5NZWRpY2F0aW9uUHJvZHVjdChzb3VyY2UucHJvZHVjdCwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3BhY2thZ2UnXSkgeyB0aGlzLnBhY2thZ2UgPSBuZXcgZmhpci5NZWRpY2F0aW9uUGFja2FnZShzb3VyY2UucGFja2FnZSwgb3B0aW9ucyk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdNZWRpY2F0aW9uJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnY29kZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnaXNCcmFuZCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnbWFudWZhY3R1cmVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdwcm9kdWN0JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdwYWNrYWdlJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==