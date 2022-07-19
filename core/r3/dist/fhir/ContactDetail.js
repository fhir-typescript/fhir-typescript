// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: ContactDetail
import * as fhir from '../fhir.js';
/**
 * Specifies contact information for a person or organization.
 */
export class ContactDetail extends fhir.FhirElement {
    /**
     * Default constructor for ContactDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        if (source['_name']) {
            if (this.name) {
                this.name.addExtendedProperties(source._name);
            }
            else {
                this.name = new fhir.FhirString(source._name);
            }
        }
        if (source['telecom']) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x));
        }
        else {
            this.telecom = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'ContactDetail';
        }
        iss.push(...this.vOS('name', exp));
        iss.push(...this.vOA('telecom', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
ContactDetail._fts_dataType = 'ContactDetail';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdERldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQ29udGFjdERldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFvQm5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGFBQWMsU0FBUSxJQUFJLENBQUMsV0FBVztJQWFqRDs7T0FFRztJQUNILFlBQVksU0FBb0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDMUYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDOUUsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQyxDQUFDO2FBQUU7aUJBQzdEO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFxQyxDQUFDLENBQUM7YUFBRTtTQUN4RjtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUN6RjtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQUU7SUFDN0IsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksR0FBRyxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLGVBQWUsQ0FBQTtTQUFFO1FBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUFsQ0Q7O0dBRUc7QUFDNkIsMkJBQWEsR0FBVSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IENvbnRhY3REZXRhaWxcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgQ29udGFjdERldGFpbCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDb250YWN0RGV0YWlsQXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBJZiB0aGVyZSBpcyBubyBuYW1lZCBpbmRpdmlkdWFsLCB0aGUgdGVsZWNvbSBpbmZvcm1hdGlvbiBpcyBmb3IgdGhlIG9yZ2FuaXphdGlvbiBhcyBhIHdob2xlLlxyXG4gICAqL1xyXG4gIG5hbWU/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29udGFjdERldGFpbC5uYW1lXHJcbiAgICovXHJcbiAgX25hbWU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250YWN0IGRldGFpbHMgZm9yIHRoZSBpbmRpdmlkdWFsIChpZiBhIG5hbWUgd2FzIHByb3ZpZGVkKSBvciB0aGUgb3JnYW5pemF0aW9uLlxyXG4gICAqL1xyXG4gIHRlbGVjb20/OiBmaGlyLkNvbnRhY3RQb2ludEFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTcGVjaWZpZXMgY29udGFjdCBpbmZvcm1hdGlvbiBmb3IgYSBwZXJzb24gb3Igb3JnYW5pemF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbnRhY3REZXRhaWwgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0NvbnRhY3REZXRhaWwnO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZXJlIGlzIG5vIG5hbWVkIGluZGl2aWR1YWwsIHRoZSB0ZWxlY29tIGluZm9ybWF0aW9uIGlzIGZvciB0aGUgb3JnYW5pemF0aW9uIGFzIGEgd2hvbGUuXHJcbiAgICovXHJcbiAgcHVibGljIG5hbWU/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250YWN0IGRldGFpbHMgZm9yIHRoZSBpbmRpdmlkdWFsIChpZiBhIG5hbWUgd2FzIHByb3ZpZGVkKSBvciB0aGUgb3JnYW5pemF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0ZWxlY29tOiBmaGlyLkNvbnRhY3RQb2ludFtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIENvbnRhY3REZXRhaWwgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxDb250YWN0RGV0YWlsQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ25hbWUnXSkgeyB0aGlzLm5hbWUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLm5hbWV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX25hbWUnXSkge1xyXG4gICAgICBpZiAodGhpcy5uYW1lKSB7IHRoaXMubmFtZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9uYW1lISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubmFtZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9uYW1lIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd0ZWxlY29tJ10pIHsgdGhpcy50ZWxlY29tID0gc291cmNlLnRlbGVjb20ubWFwKCh4KSA9PiBuZXcgZmhpci5Db250YWN0UG9pbnQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50ZWxlY29tID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdDb250YWN0RGV0YWlsJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnbmFtZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgndGVsZWNvbScsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=