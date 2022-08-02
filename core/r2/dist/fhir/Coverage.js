// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Coverage
import * as fhir from '../fhir.js';
/**
 * Financial instrument which may be used to pay for or reimburse health care products and services.
 */
export class Coverage extends fhir.DomainResource {
    /**
     * Default constructor for Coverage - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Coverage';
        if (source['issuer']) {
            this.issuer = new fhir.Reference(source.issuer);
        }
        if (source['bin']) {
            this.bin = new fhir.Identifier(source.bin);
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['type']) {
            this.type = new fhir.Coding(source.type);
        }
        if (source['subscriberId']) {
            this.subscriberId = new fhir.Identifier(source.subscriberId);
        }
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['group']) {
            this.group = new fhir.FhirString({ value: source.group });
        }
        if (source['_group']) {
            if (this.group) {
                this.group.addExtendedProperties(source._group);
            }
            else {
                this.group = new fhir.FhirString(source._group);
            }
        }
        if (source['plan']) {
            this.plan = new fhir.FhirString({ value: source.plan });
        }
        if (source['_plan']) {
            if (this.plan) {
                this.plan.addExtendedProperties(source._plan);
            }
            else {
                this.plan = new fhir.FhirString(source._plan);
            }
        }
        if (source['subPlan']) {
            this.subPlan = new fhir.FhirString({ value: source.subPlan });
        }
        if (source['_subPlan']) {
            if (this.subPlan) {
                this.subPlan.addExtendedProperties(source._subPlan);
            }
            else {
                this.subPlan = new fhir.FhirString(source._subPlan);
            }
        }
        if (source['dependent']) {
            this.dependent = new fhir.FhirPositiveInt({ value: source.dependent });
        }
        if (source['_dependent']) {
            if (this.dependent) {
                this.dependent.addExtendedProperties(source._dependent);
            }
            else {
                this.dependent = new fhir.FhirPositiveInt(source._dependent);
            }
        }
        if (source['sequence']) {
            this.sequence = new fhir.FhirPositiveInt({ value: source.sequence });
        }
        if (source['_sequence']) {
            if (this.sequence) {
                this.sequence.addExtendedProperties(source._sequence);
            }
            else {
                this.sequence = new fhir.FhirPositiveInt(source._sequence);
            }
        }
        if (source['subscriber']) {
            this.subscriber = new fhir.Reference(source.subscriber);
        }
        if (source['network']) {
            this.network = new fhir.Identifier(source.network);
        }
        if (source['contract']) {
            this.contract = source.contract.map((x) => new fhir.Reference(x));
        }
        else {
            this.contract = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Coverage';
        }
        iss.push(...this.vOS('issuer', exp));
        iss.push(...this.vOS('bin', exp));
        iss.push(...this.vOS('period', exp));
        iss.push(...this.vOS('type', exp));
        iss.push(...this.vOS('subscriberId', exp));
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vOS('group', exp));
        iss.push(...this.vOS('plan', exp));
        iss.push(...this.vOS('subPlan', exp));
        iss.push(...this.vOS('dependent', exp));
        iss.push(...this.vOS('sequence', exp));
        iss.push(...this.vOS('subscriber', exp));
        iss.push(...this.vOS('network', exp));
        iss.push(...this.vOA('contract', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Coverage._fts_dataType = 'Coverage';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ292ZXJhZ2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0NvdmVyYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUUxQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQXdGbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sUUFBUyxTQUFRLElBQUksQ0FBQyxjQUFjO0lBaUUvQzs7T0FFRztJQUNILFlBQVksU0FBK0IsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDckYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztRQUMvQixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUFFO1FBQzFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQUU7UUFDbEUsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FBRTtRQUN2RSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUFFO1FBQ2pFLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFlBQVksR0FB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QTtTQUFFO1FBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUFoSUQ7O0dBRUc7QUFDNkIsc0JBQWEsR0FBVSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IENvdmVyYWdlXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIENvdmVyYWdlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENvdmVyYWdlQXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiQ292ZXJhZ2VcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogTmVlZCB0byBpZGVudGlmeSB0aGUgaXNzdWVyIHRvIHRhcmdldCBmb3IgcHJvY2Vzc2luZyBhbmQgZm9yIGNvb3JkaW5hdGlvbiBvZiBiZW5lZml0IHByb2Nlc3NpbmcuXHJcbiAgICovXHJcbiAgaXNzdWVyPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBCdXNpbmVzcyBJZGVudGlmaWNhdGlvbiBOdW1iZXIgKEJJTiBudW1iZXIpIHVzZWQgdG8gaWRlbnRpZnkgdGhlIHJvdXRpbmcgIG9mIGVjbGFpbXMgaWYgdGhlIGluc3VyZXIgdGhlbXNlbHZlcyBkb24ndCBoYXZlIGEgQklOIG51bWJlciBmb3IgYWxsIG9mIHRoZWlyIGJ1c2luZXNzLlxyXG4gICAqL1xyXG4gIGJpbj86IGZoaXIuSWRlbnRpZmllckFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRpbWUgcGVyaW9kIGR1cmluZyB3aGljaCB0aGUgY292ZXJhZ2UgaXMgaW4gZm9yY2UuIEEgbWlzc2luZyBzdGFydCBkYXRlIGluZGljYXRlcyB0aGUgc3RhcnQgZGF0ZSBpc24ndCBrbm93biwgYSBtaXNzaW5nIGVuZCBkYXRlIG1lYW5zIHRoZSBjb3ZlcmFnZSBpcyBjb250aW51aW5nIHRvIGJlIGluIGZvcmNlLlxyXG4gICAqL1xyXG4gIHBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIG9yZGVyIG9mIGFwcGxpY2F0aW9uIG9mIGNvdmVyYWdlcyBpcyBkZXBlbmRlbnQgb24gdGhlIHR5cGVzIG9mIGNvdmVyYWdlLlxyXG4gICAqL1xyXG4gIHR5cGU/OiBmaGlyLkNvZGluZ0FyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpZCBpc3N1ZWQgdG8gdGhlIHN1YnNjcmliZXIuXHJcbiAgICovXHJcbiAgc3Vic2NyaWJlcklkPzogZmhpci5JZGVudGlmaWVyQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyB2YWx1ZSBtYXkgdW5pcXVlbHkgaWRlbnRpZnkgdGhlIGNvdmVyYWdlIG9yIGl0IG1heSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIGFkZGl0aW9uYWwgaWRlbnRpZmllcnMgYmVsb3cuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcyBhIHN0eWxlIG9yIGNvbGxlY3RpdmUgb2YgY292ZXJhZ2UgaXNzdWVzIGJ5IHRoZSB1bmRlcndyaXRlciwgZm9yIGV4YW1wbGUgbWF5IGJlIHVzZWQgdG8gaWRlbnRpZnkgYSBjbGFzcyBvZiBjb3ZlcmFnZSBvciBlbXBsb3llciBncm91cC4gTWF5IGFsc28gYmUgcmVmZXJyZWQgdG8gYXMgYSBQb2xpY3kgb3IgR3JvdXAgSUQuXHJcbiAgICovXHJcbiAgZ3JvdXA/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ292ZXJhZ2UuZ3JvdXBcclxuICAgKi9cclxuICBfZ3JvdXA/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgYSBzdHlsZSBvciBjb2xsZWN0aXZlIG9mIGNvdmVyYWdlIGlzc3VlcyBieSB0aGUgdW5kZXJ3cml0ZXIsIGZvciBleGFtcGxlIG1heSBiZSB1c2VkIHRvIGlkZW50aWZ5IGEgY2xhc3Mgb2YgY292ZXJhZ2Ugb3IgZW1wbG95ZXIgZ3JvdXAuIE1heSBhbHNvIGJlIHJlZmVycmVkIHRvIGFzIGEgUG9saWN5IG9yIEdyb3VwIElELlxyXG4gICAqL1xyXG4gIHBsYW4/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ292ZXJhZ2UucGxhblxyXG4gICAqL1xyXG4gIF9wbGFuPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVzIGEgc3ViLXN0eWxlIG9yIHN1Yi1jb2xsZWN0aXZlIG9mIGNvdmVyYWdlIGlzc3VlcyBieSB0aGUgdW5kZXJ3cml0ZXIsIGZvciBleGFtcGxlIG1heSBiZSB1c2VkIHRvIGlkZW50aWZ5IGEgc3BlY2lmaWMgZW1wbG95ZXIgZ3JvdXAgd2l0aGluIGEgY2xhc3Mgb2YgZW1wbG95ZXJzLiBNYXkgYmUgcmVmZXJyZWQgdG8gYXMgYSBTZWN0aW9uIG9yIERpdmlzaW9uIElELlxyXG4gICAqL1xyXG4gIHN1YlBsYW4/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ292ZXJhZ2Uuc3ViUGxhblxyXG4gICAqL1xyXG4gIF9zdWJQbGFuPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBGb3Igc29tZSBjb3ZlcmFnZSBhIHNpbmdsZSBpZGVudGlmaWVyIGlzIGlzc3VlZCB0byB0aGUgUG9saWN5SG9sZGVyIGFuZCBkZXBlbmRlbnQgbnVtYmVyIGlzc3VlcyB0byBlYWNoIHRvIGVhY2ggb2YgdGhlaXIgZGVwZW5kZW50cyB0byB0cmFjayBhbmQgbWFuYWdlIHRoZSBwbGFuLlxyXG4gICAqL1xyXG4gIGRlcGVuZGVudD86IGZoaXIuRmhpclBvc2l0aXZlSW50fG51bWJlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvdmVyYWdlLmRlcGVuZGVudFxyXG4gICAqL1xyXG4gIF9kZXBlbmRlbnQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFNvbWUgY292ZXJhZ2UsIGZvciBleGFtcGxlIHNvY2lhbCBwbGFucywgbWF5IGJlIG9mZmVyZWQgaW4gc2hvcnQgdGltZSBpbmNyZW1lbnRzLCBmb3IgZXhhbXBsZSBmb3IgYSB3ZWVrIG9yIGEgbW9udGggYXQgYSB0aW1lLCBzbyB3aGlsZSB0aGUgcmVzdCBvZiB0aGUgcGxhbiBkZXRhaWxzIGFuZCBpZGVudGlmaWVycyBtYXkgcmVtYWluIGNvbnN0YW50IG92ZXIgdGltZSwgdGhlIGluc3RhbmNlIGlzIGluY3JlbWVudGVkIHdpdGggZWFjaCByZW5ld2FsIGFuZCBwcm92aWRlZCB0byB0aGUgY292ZXJlZCBwYXJ0eSBvbiB0aGVpciAnY2FyZCcuXHJcbiAgICovXHJcbiAgc2VxdWVuY2U/OiBmaGlyLkZoaXJQb3NpdGl2ZUludHxudW1iZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDb3ZlcmFnZS5zZXF1ZW5jZVxyXG4gICAqL1xyXG4gIF9zZXF1ZW5jZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBhcnR5IHdobyAnb3ducycgdGhlIGluc3VyYW5jZSBjb250cmFjdHVhbCByZWxhdGlvbnNoaXAgdG8gdGhlIHBvbGljeSBvciB0byB3aG9tIHRoZSBiZW5lZml0IG9mIHRoZSBwb2xpY3kgaXMgZHVlLlxyXG4gICAqL1xyXG4gIHN1YnNjcmliZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpZGVudGlmaWVyIGZvciBhIGNvbW11bml0eSBvZiBwcm92aWRlcnMuXHJcbiAgICovXHJcbiAgbmV0d29yaz86IGZoaXIuSWRlbnRpZmllckFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwb2xpY3kocykgd2hpY2ggY29uc3RpdHV0ZSB0aGlzIGluc3VyYW5jZSBjb3ZlcmFnZS5cclxuICAgKi9cclxuICBjb250cmFjdD86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmFuY2lhbCBpbnN0cnVtZW50IHdoaWNoIG1heSBiZSB1c2VkIHRvIHBheSBmb3Igb3IgcmVpbWJ1cnNlIGhlYWx0aCBjYXJlIHByb2R1Y3RzIGFuZCBzZXJ2aWNlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb3ZlcmFnZSBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQ292ZXJhZ2UnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiQ292ZXJhZ2VcIjtcclxuICAvKipcclxuICAgKiBOZWVkIHRvIGlkZW50aWZ5IHRoZSBpc3N1ZXIgdG8gdGFyZ2V0IGZvciBwcm9jZXNzaW5nIGFuZCBmb3IgY29vcmRpbmF0aW9uIG9mIGJlbmVmaXQgcHJvY2Vzc2luZy5cclxuICAgKi9cclxuICBwdWJsaWMgaXNzdWVyPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEJ1c2luZXNzIElkZW50aWZpY2F0aW9uIE51bWJlciAoQklOIG51bWJlcikgdXNlZCB0byBpZGVudGlmeSB0aGUgcm91dGluZyAgb2YgZWNsYWltcyBpZiB0aGUgaW5zdXJlciB0aGVtc2VsdmVzIGRvbid0IGhhdmUgYSBCSU4gbnVtYmVyIGZvciBhbGwgb2YgdGhlaXIgYnVzaW5lc3MuXHJcbiAgICovXHJcbiAgcHVibGljIGJpbj86IGZoaXIuSWRlbnRpZmllcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGltZSBwZXJpb2QgZHVyaW5nIHdoaWNoIHRoZSBjb3ZlcmFnZSBpcyBpbiBmb3JjZS4gQSBtaXNzaW5nIHN0YXJ0IGRhdGUgaW5kaWNhdGVzIHRoZSBzdGFydCBkYXRlIGlzbid0IGtub3duLCBhIG1pc3NpbmcgZW5kIGRhdGUgbWVhbnMgdGhlIGNvdmVyYWdlIGlzIGNvbnRpbnVpbmcgdG8gYmUgaW4gZm9yY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHBlcmlvZD86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgb3JkZXIgb2YgYXBwbGljYXRpb24gb2YgY292ZXJhZ2VzIGlzIGRlcGVuZGVudCBvbiB0aGUgdHlwZXMgb2YgY292ZXJhZ2UuXHJcbiAgICovXHJcbiAgcHVibGljIHR5cGU/OiBmaGlyLkNvZGluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGlkIGlzc3VlZCB0byB0aGUgc3Vic2NyaWJlci5cclxuICAgKi9cclxuICBwdWJsaWMgc3Vic2NyaWJlcklkPzogZmhpci5JZGVudGlmaWVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIHZhbHVlIG1heSB1bmlxdWVseSBpZGVudGlmeSB0aGUgY292ZXJhZ2Ugb3IgaXQgbWF5IGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgYWRkaXRpb25hbCBpZGVudGlmaWVycyBiZWxvdy5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcyBhIHN0eWxlIG9yIGNvbGxlY3RpdmUgb2YgY292ZXJhZ2UgaXNzdWVzIGJ5IHRoZSB1bmRlcndyaXRlciwgZm9yIGV4YW1wbGUgbWF5IGJlIHVzZWQgdG8gaWRlbnRpZnkgYSBjbGFzcyBvZiBjb3ZlcmFnZSBvciBlbXBsb3llciBncm91cC4gTWF5IGFsc28gYmUgcmVmZXJyZWQgdG8gYXMgYSBQb2xpY3kgb3IgR3JvdXAgSUQuXHJcbiAgICovXHJcbiAgcHVibGljIGdyb3VwPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVzIGEgc3R5bGUgb3IgY29sbGVjdGl2ZSBvZiBjb3ZlcmFnZSBpc3N1ZXMgYnkgdGhlIHVuZGVyd3JpdGVyLCBmb3IgZXhhbXBsZSBtYXkgYmUgdXNlZCB0byBpZGVudGlmeSBhIGNsYXNzIG9mIGNvdmVyYWdlIG9yIGVtcGxveWVyIGdyb3VwLiBNYXkgYWxzbyBiZSByZWZlcnJlZCB0byBhcyBhIFBvbGljeSBvciBHcm91cCBJRC5cclxuICAgKi9cclxuICBwdWJsaWMgcGxhbj86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcyBhIHN1Yi1zdHlsZSBvciBzdWItY29sbGVjdGl2ZSBvZiBjb3ZlcmFnZSBpc3N1ZXMgYnkgdGhlIHVuZGVyd3JpdGVyLCBmb3IgZXhhbXBsZSBtYXkgYmUgdXNlZCB0byBpZGVudGlmeSBhIHNwZWNpZmljIGVtcGxveWVyIGdyb3VwIHdpdGhpbiBhIGNsYXNzIG9mIGVtcGxveWVycy4gTWF5IGJlIHJlZmVycmVkIHRvIGFzIGEgU2VjdGlvbiBvciBEaXZpc2lvbiBJRC5cclxuICAgKi9cclxuICBwdWJsaWMgc3ViUGxhbj86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRm9yIHNvbWUgY292ZXJhZ2UgYSBzaW5nbGUgaWRlbnRpZmllciBpcyBpc3N1ZWQgdG8gdGhlIFBvbGljeUhvbGRlciBhbmQgZGVwZW5kZW50IG51bWJlciBpc3N1ZXMgdG8gZWFjaCB0byBlYWNoIG9mIHRoZWlyIGRlcGVuZGVudHMgdG8gdHJhY2sgYW5kIG1hbmFnZSB0aGUgcGxhbi5cclxuICAgKi9cclxuICBwdWJsaWMgZGVwZW5kZW50PzogZmhpci5GaGlyUG9zaXRpdmVJbnR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFNvbWUgY292ZXJhZ2UsIGZvciBleGFtcGxlIHNvY2lhbCBwbGFucywgbWF5IGJlIG9mZmVyZWQgaW4gc2hvcnQgdGltZSBpbmNyZW1lbnRzLCBmb3IgZXhhbXBsZSBmb3IgYSB3ZWVrIG9yIGEgbW9udGggYXQgYSB0aW1lLCBzbyB3aGlsZSB0aGUgcmVzdCBvZiB0aGUgcGxhbiBkZXRhaWxzIGFuZCBpZGVudGlmaWVycyBtYXkgcmVtYWluIGNvbnN0YW50IG92ZXIgdGltZSwgdGhlIGluc3RhbmNlIGlzIGluY3JlbWVudGVkIHdpdGggZWFjaCByZW5ld2FsIGFuZCBwcm92aWRlZCB0byB0aGUgY292ZXJlZCBwYXJ0eSBvbiB0aGVpciAnY2FyZCcuXHJcbiAgICovXHJcbiAgcHVibGljIHNlcXVlbmNlPzogZmhpci5GaGlyUG9zaXRpdmVJbnR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXJ0eSB3aG8gJ293bnMnIHRoZSBpbnN1cmFuY2UgY29udHJhY3R1YWwgcmVsYXRpb25zaGlwIHRvIHRoZSBwb2xpY3kgb3IgdG8gd2hvbSB0aGUgYmVuZWZpdCBvZiB0aGUgcG9saWN5IGlzIGR1ZS5cclxuICAgKi9cclxuICBwdWJsaWMgc3Vic2NyaWJlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaWRlbnRpZmllciBmb3IgYSBjb21tdW5pdHkgb2YgcHJvdmlkZXJzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBuZXR3b3JrPzogZmhpci5JZGVudGlmaWVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcG9saWN5KHMpIHdoaWNoIGNvbnN0aXR1dGUgdGhpcyBpbnN1cmFuY2UgY292ZXJhZ2UuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnRyYWN0OiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIENvdmVyYWdlIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8Q292ZXJhZ2VBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnQ292ZXJhZ2UnO1xyXG4gICAgaWYgKHNvdXJjZVsnaXNzdWVyJ10pIHsgdGhpcy5pc3N1ZXIgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmlzc3Vlcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2JpbiddKSB7IHRoaXMuYmluID0gbmV3IGZoaXIuSWRlbnRpZmllcihzb3VyY2UuYmluKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncGVyaW9kJ10pIHsgdGhpcy5wZXJpb2QgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLnBlcmlvZCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5Db2Rpbmcoc291cmNlLnR5cGUpOyB9XHJcbiAgICBpZiAoc291cmNlWydzdWJzY3JpYmVySWQnXSkgeyB0aGlzLnN1YnNjcmliZXJJZCA9IG5ldyBmaGlyLklkZW50aWZpZXIoc291cmNlLnN1YnNjcmliZXJJZCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2dyb3VwJ10pIHsgdGhpcy5ncm91cCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZ3JvdXB9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2dyb3VwJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZ3JvdXApIHsgdGhpcy5ncm91cC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9ncm91cCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmdyb3VwID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2dyb3VwIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwbGFuJ10pIHsgdGhpcy5wbGFuID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5wbGFufSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19wbGFuJ10pIHtcclxuICAgICAgaWYgKHRoaXMucGxhbikgeyB0aGlzLnBsYW4uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fcGxhbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnBsYW4gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fcGxhbiBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3ViUGxhbiddKSB7IHRoaXMuc3ViUGxhbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2Uuc3ViUGxhbn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3ViUGxhbiddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN1YlBsYW4pIHsgdGhpcy5zdWJQbGFuLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N1YlBsYW4hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdWJQbGFuID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX3N1YlBsYW4gYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2RlcGVuZGVudCddKSB7IHRoaXMuZGVwZW5kZW50ID0gbmV3IGZoaXIuRmhpclBvc2l0aXZlSW50KHt2YWx1ZTogc291cmNlLmRlcGVuZGVudH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGVwZW5kZW50J10pIHtcclxuICAgICAgaWYgKHRoaXMuZGVwZW5kZW50KSB7IHRoaXMuZGVwZW5kZW50LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2RlcGVuZGVudCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRlcGVuZGVudCA9IG5ldyBmaGlyLkZoaXJQb3NpdGl2ZUludChzb3VyY2UuX2RlcGVuZGVudCBhcyBQYXJ0aWFsPGZoaXIuRmhpclBvc2l0aXZlSW50QXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydzZXF1ZW5jZSddKSB7IHRoaXMuc2VxdWVuY2UgPSBuZXcgZmhpci5GaGlyUG9zaXRpdmVJbnQoe3ZhbHVlOiBzb3VyY2Uuc2VxdWVuY2V9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3NlcXVlbmNlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc2VxdWVuY2UpIHsgdGhpcy5zZXF1ZW5jZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zZXF1ZW5jZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnNlcXVlbmNlID0gbmV3IGZoaXIuRmhpclBvc2l0aXZlSW50KHNvdXJjZS5fc2VxdWVuY2UgYXMgUGFydGlhbDxmaGlyLkZoaXJQb3NpdGl2ZUludEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3Vic2NyaWJlciddKSB7IHRoaXMuc3Vic2NyaWJlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uuc3Vic2NyaWJlcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ25ldHdvcmsnXSkgeyB0aGlzLm5ldHdvcmsgPSBuZXcgZmhpci5JZGVudGlmaWVyKHNvdXJjZS5uZXR3b3JrKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY29udHJhY3QnXSkgeyB0aGlzLmNvbnRyYWN0ID0gc291cmNlLmNvbnRyYWN0Lm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29udHJhY3QgPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0NvdmVyYWdlJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnaXNzdWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdiaW4nLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3BlcmlvZCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndHlwZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnc3Vic2NyaWJlcklkJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdncm91cCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncGxhbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnc3ViUGxhbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZGVwZW5kZW50JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdzZXF1ZW5jZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnc3Vic2NyaWJlcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnbmV0d29yaycsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnY29udHJhY3QnLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19