// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Parameters
import * as fhir from '../fhir.js';
/**
 * A parameter passed to or received from the operation.
 */
export class ParametersParameter extends fhir.BackboneElement {
    /**
     * Default constructor for ParametersParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        else {
            this.name = null;
        }
        if (source['_name']) {
            if (this.name) {
                this.name.addExtendedProperties(source._name);
            }
            else {
                this.name = new fhir.FhirString(source._name);
            }
        }
        if (source['value']) {
            this.value = source.value;
        }
        else if (source['valueBoolean']) {
            this.value = new fhir.FhirBoolean({ value: source.valueBoolean });
        }
        else if (source['valueInteger']) {
            this.value = new fhir.FhirInteger({ value: source.valueInteger });
        }
        else if (source['valueDecimal']) {
            this.value = new fhir.FhirDecimal({ value: source.valueDecimal });
        }
        else if (source['valueBase64Binary']) {
            this.value = new fhir.FhirBase64Binary({ value: source.valueBase64Binary });
        }
        else if (source['valueInstant']) {
            this.value = new fhir.FhirInstant({ value: source.valueInstant });
        }
        else if (source['valueString']) {
            this.value = new fhir.FhirString({ value: source.valueString });
        }
        else if (source['valueUri']) {
            this.value = new fhir.FhirUri({ value: source.valueUri });
        }
        else if (source['valueDate']) {
            this.value = new fhir.FhirDate({ value: source.valueDate });
        }
        else if (source['valueDateTime']) {
            this.value = new fhir.FhirDateTime({ value: source.valueDateTime });
        }
        else if (source['valueTime']) {
            this.value = new fhir.FhirTime({ value: source.valueTime });
        }
        else if (source['valueCode']) {
            this.value = new fhir.FhirCode({ value: source.valueCode });
        }
        else if (source['valueOid']) {
            this.value = new fhir.FhirOid({ value: source.valueOid });
        }
        else if (source['valueId']) {
            this.value = new fhir.FhirId({ value: source.valueId });
        }
        else if (source['valueUnsignedInt']) {
            this.value = new fhir.FhirUnsignedInt({ value: source.valueUnsignedInt });
        }
        else if (source['valuePositiveInt']) {
            this.value = new fhir.FhirPositiveInt({ value: source.valuePositiveInt });
        }
        else if (source['valueMarkdown']) {
            this.value = new fhir.FhirMarkdown({ value: source.valueMarkdown });
        }
        else if (source['valueAnnotation']) {
            this.value = new fhir.Annotation(source.valueAnnotation);
        }
        else if (source['valueAttachment']) {
            this.value = new fhir.Attachment(source.valueAttachment);
        }
        else if (source['valueIdentifier']) {
            this.value = new fhir.Identifier(source.valueIdentifier);
        }
        else if (source['valueCodeableConcept']) {
            this.value = new fhir.CodeableConcept(source.valueCodeableConcept);
        }
        else if (source['valueCoding']) {
            this.value = new fhir.Coding(source.valueCoding);
        }
        else if (source['valueQuantity']) {
            this.value = new fhir.Quantity(source.valueQuantity);
        }
        else if (source['valueRange']) {
            this.value = new fhir.Range(source.valueRange);
        }
        else if (source['valuePeriod']) {
            this.value = new fhir.Period(source.valuePeriod);
        }
        else if (source['valueRatio']) {
            this.value = new fhir.Ratio(source.valueRatio);
        }
        else if (source['valueSampledData']) {
            this.value = new fhir.SampledData(source.valueSampledData);
        }
        else if (source['valueSignature']) {
            this.value = new fhir.Signature(source.valueSignature);
        }
        else if (source['valueHumanName']) {
            this.value = new fhir.HumanName(source.valueHumanName);
        }
        else if (source['valueAddress']) {
            this.value = new fhir.Address(source.valueAddress);
        }
        else if (source['valueContactPoint']) {
            this.value = new fhir.ContactPoint(source.valueContactPoint);
        }
        else if (source['valueTiming']) {
            this.value = new fhir.Timing(source.valueTiming);
        }
        else if (source['valueReference']) {
            this.value = new fhir.Reference(source.valueReference);
        }
        else if (source['valueMeta']) {
            this.value = new fhir.Meta(source.valueMeta);
        }
        if (source['resource']) {
            this.resource = (fhir.resourceFactory(source.resource) ?? undefined);
        }
        if (source['part']) {
            this.part = source.part.map((x) => new fhir.ParametersParameter(x));
        }
        else {
            this.part = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Parameters.parameter';
        }
        iss.push(...this.vRS('name', exp));
        iss.push(...this.vOS('value', exp));
        iss.push(...this.vOS('resource', exp));
        iss.push(...this.vOA('part', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
ParametersParameter._fts_dataType = 'ParametersParameter';
/**
 * Internal flag to properly serialize choice-type element Parameters.parameter.value[x]
 */
ParametersParameter._fts_valueIsChoice = true;
/**
 * This special resource type is used to represent an operation request and response (operations.html). It has no other use, and there is no RESTful endpoint associated with it.
 */
export class Parameters extends fhir.Resource {
    /**
     * Default constructor for Parameters - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Parameters';
        if (source['parameter']) {
            this.parameter = source.parameter.map((x) => new fhir.ParametersParameter(x));
        }
        else {
            this.parameter = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Parameters';
        }
        iss.push(...this.vOA('parameter', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Parameters._fts_dataType = 'Parameters';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1ldGVycy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvUGFyYW1ldGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyw0QkFBNEI7QUFFNUIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFnS25DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLG1CQUFvQixTQUFRLElBQUksQ0FBQyxlQUFlO0lBeUIzRDs7T0FFRztJQUNILFlBQVksU0FBMEMsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDaEcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDekU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzFCLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsQ0FBQzthQUFFO2lCQUM3RDtnQkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBcUMsQ0FBQyxDQUFDO2FBQUU7U0FDeEY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUFFO2FBQzlDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUss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Q0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDdEc7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztTQUFFO0lBQy9CLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLEdBQUcsR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxZQUFZLENBQUE7U0FBRTtRQUN0QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBN0JEOztHQUVHO0FBQzZCLHdCQUFhLEdBQVUsWUFBWSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBQYXJhbWV0ZXJzXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFBhcmFtZXRlcnNQYXJhbWV0ZXIgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFyYW1ldGVyc1BhcmFtZXRlckFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXIgKHJlZmVyZW5jZSB0byB0aGUgb3BlcmF0aW9uIGRlZmluaXRpb24pLlxyXG4gICAqL1xyXG4gIG5hbWU6IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBQYXJhbWV0ZXJzLnBhcmFtZXRlci5uYW1lXHJcbiAgICovXHJcbiAgX25hbWU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBkYXRhIHR5cGUuXHJcbiAgICovXHJcbiAgdmFsdWU/OiBmaGlyLkZoaXJCb29sZWFufGZoaXIuRmhpckludGVnZXJ8Zmhpci5GaGlyRGVjaW1hbHxmaGlyLkZoaXJCYXNlNjRCaW5hcnl8Zmhpci5GaGlySW5zdGFudHxmaGlyLkZoaXJTdHJpbmd8Zmhpci5GaGlyVXJpfGZoaXIuRmhpckRhdGV8Zmhpci5GaGlyRGF0ZVRpbWV8Zmhpci5GaGlyVGltZXxmaGlyLkZoaXJDb2RlfGZoaXIuRmhpck9pZHxmaGlyLkZoaXJJZHxmaGlyLkZoaXJVbnNpZ25lZEludHxmaGlyLkZoaXJQb3NpdGl2ZUludHxmaGlyLkZoaXJNYXJrZG93bnxmaGlyLkFubm90YXRpb258Zmhpci5BdHRhY2htZW50fGZoaXIuSWRlbnRpZmllcnxmaGlyLkNvZGVhYmxlQ29uY2VwdHxmaGlyLkNvZGluZ3xmaGlyLlF1YW50aXR5fGZoaXIuUmFuZ2V8Zmhpci5QZXJpb2R8Zmhpci5SYXRpb3xmaGlyLlNhbXBsZWREYXRhfGZoaXIuU2lnbmF0dXJlfGZoaXIuSHVtYW5OYW1lfGZoaXIuQWRkcmVzc3xmaGlyLkNvbnRhY3RQb2ludHxmaGlyLlRpbWluZ3xmaGlyLlJlZmVyZW5jZXxmaGlyLk1ldGF8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBkYXRhIHR5cGUuXHJcbiAgICovXHJcbiAgdmFsdWVCb29sZWFuPzogZmhpci5GaGlyQm9vbGVhbnxib29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGEgZGF0YSB0eXBlLlxyXG4gICAqL1xyXG4gIHZhbHVlSW50ZWdlcj86IGZoaXIuRmhpckludGVnZXJ8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGEgZGF0YSB0eXBlLlxyXG4gICAqL1xyXG4gIHZhbHVlRGVjaW1hbD86IGZoaXIuRmhpckRlY2ltYWx8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGEgZGF0YSB0eXBlLlxyXG4gICAqL1xyXG4gIHZhbHVlQmFzZTY0QmluYXJ5PzogZmhpci5GaGlyQmFzZTY0QmluYXJ5fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIHBhcmFtZXRlciBpcyBhIGRhdGEgdHlwZS5cclxuICAgKi9cclxuICB2YWx1ZUluc3RhbnQ/OiBmaGlyLkZoaXJJbnN0YW50fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIHBhcmFtZXRlciBpcyBhIGRhdGEgdHlwZS5cclxuICAgKi9cclxuICB2YWx1ZVN0cmluZz86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBkYXRhIHR5cGUuXHJcbiAgICovXHJcbiAgdmFsdWVVcmk/OiBmaGlyLkZoaXJVcml8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGEgZGF0YSB0eXBlLlxyXG4gICAqL1xyXG4gIHZhbHVlRGF0ZT86IGZoaXIuRmhpckRhdGV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGEgZGF0YSB0eXBlLlxyXG4gICAqL1xyXG4gIHZhbHVlRGF0ZVRpbWU/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBkYXRhIHR5cGUuXHJcbiAgICovXHJcbiAgdmFsdWVUaW1lPzogZmhpci5GaGlyVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBkYXRhIHR5cGUuXHJcbiAgICovXHJcbiAgdmFsdWVDb2RlPzogZmhpci5GaGlyQ29kZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBkYXRhIHR5cGUuXHJcbiAgICovXHJcbiAgdmFsdWVPaWQ/OiBmaGlyLkZoaXJPaWR8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGEgZGF0YSB0eXBlLlxyXG4gICAqL1xyXG4gIHZhbHVlSWQ/OiBmaGlyLkZoaXJJZHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBkYXRhIHR5cGUuXHJcbiAgICovXHJcbiAgdmFsdWVVbnNpZ25lZEludD86IGZoaXIuRmhpclVuc2lnbmVkSW50fG51bWJlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIHBhcmFtZXRlciBpcyBhIGRhdGEgdHlwZS5cclxuICAgKi9cclxuICB2YWx1ZVBvc2l0aXZlSW50PzogZmhpci5GaGlyUG9zaXRpdmVJbnR8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGEgZGF0YSB0eXBlLlxyXG4gICAqL1xyXG4gIHZhbHVlTWFya2Rvd24/OiBmaGlyLkZoaXJNYXJrZG93bnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBkYXRhIHR5cGUuXHJcbiAgICovXHJcbiAgdmFsdWVBbm5vdGF0aW9uPzogZmhpci5Bbm5vdGF0aW9uQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIHBhcmFtZXRlciBpcyBhIGRhdGEgdHlwZS5cclxuICAgKi9cclxuICB2YWx1ZUF0dGFjaG1lbnQ/OiBmaGlyLkF0dGFjaG1lbnRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGEgZGF0YSB0eXBlLlxyXG4gICAqL1xyXG4gIHZhbHVlSWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBkYXRhIHR5cGUuXHJcbiAgICovXHJcbiAgdmFsdWVDb2RlYWJsZUNvbmNlcHQ/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBkYXRhIHR5cGUuXHJcbiAgICovXHJcbiAgdmFsdWVDb2Rpbmc/OiBmaGlyLkNvZGluZ0FyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBkYXRhIHR5cGUuXHJcbiAgICovXHJcbiAgdmFsdWVRdWFudGl0eT86IGZoaXIuUXVhbnRpdHlBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGEgZGF0YSB0eXBlLlxyXG4gICAqL1xyXG4gIHZhbHVlUmFuZ2U/OiBmaGlyLlJhbmdlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIHBhcmFtZXRlciBpcyBhIGRhdGEgdHlwZS5cclxuICAgKi9cclxuICB2YWx1ZVBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIHBhcmFtZXRlciBpcyBhIGRhdGEgdHlwZS5cclxuICAgKi9cclxuICB2YWx1ZVJhdGlvPzogZmhpci5SYXRpb0FyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBkYXRhIHR5cGUuXHJcbiAgICovXHJcbiAgdmFsdWVTYW1wbGVkRGF0YT86IGZoaXIuU2FtcGxlZERhdGFBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGEgZGF0YSB0eXBlLlxyXG4gICAqL1xyXG4gIHZhbHVlU2lnbmF0dXJlPzogZmhpci5TaWduYXR1cmVBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGEgZGF0YSB0eXBlLlxyXG4gICAqL1xyXG4gIHZhbHVlSHVtYW5OYW1lPzogZmhpci5IdW1hbk5hbWVBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGEgZGF0YSB0eXBlLlxyXG4gICAqL1xyXG4gIHZhbHVlQWRkcmVzcz86IGZoaXIuQWRkcmVzc0FyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBkYXRhIHR5cGUuXHJcbiAgICovXHJcbiAgdmFsdWVDb250YWN0UG9pbnQ/OiBmaGlyLkNvbnRhY3RQb2ludEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBkYXRhIHR5cGUuXHJcbiAgICovXHJcbiAgdmFsdWVUaW1pbmc/OiBmaGlyLlRpbWluZ0FyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBkYXRhIHR5cGUuXHJcbiAgICovXHJcbiAgdmFsdWVSZWZlcmVuY2U/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBkYXRhIHR5cGUuXHJcbiAgICovXHJcbiAgdmFsdWVNZXRhPzogZmhpci5NZXRhQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIHBhcmFtZXRlciBpcyBhIHdob2xlIHJlc291cmNlLlxyXG4gICAqL1xyXG4gIHJlc291cmNlPzogZmhpci5SZXNvdXJjZUFyZ3N8YW55fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIG5hbWVkIHBhcnQgb2YgYSBwYXJhbWV0ZXIuIEluIG1hbnkgaW1wbGVtZW50YXRpb24gY29udGV4dCwgYSBzZXQgb2YgbmFtZWQgcGFydHMgaXMga25vd24gYXMgYSBcIlR1cGxlXCIuXHJcbiAgICovXHJcbiAgcGFydD86IGZoaXIuUGFyYW1ldGVyc1BhcmFtZXRlckFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHBhcmFtZXRlciBwYXNzZWQgdG8gb3IgcmVjZWl2ZWQgZnJvbSB0aGUgb3BlcmF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlcnNQYXJhbWV0ZXIgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdQYXJhbWV0ZXJzUGFyYW1ldGVyJztcclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyIChyZWZlcmVuY2UgdG8gdGhlIG9wZXJhdGlvbiBkZWZpbml0aW9uKS5cclxuICAgKi9cclxuICBwdWJsaWMgbmFtZTogZmhpci5GaGlyU3RyaW5nfG51bGw7XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIHBhcmFtZXRlciBpcyBhIGRhdGEgdHlwZS5cclxuICAgKi9cclxuICBwdWJsaWMgdmFsdWU/OiAoZmhpci5GaGlyQm9vbGVhbnxmaGlyLkZoaXJJbnRlZ2VyfGZoaXIuRmhpckRlY2ltYWx8Zmhpci5GaGlyQmFzZTY0QmluYXJ5fGZoaXIuRmhpckluc3RhbnR8Zmhpci5GaGlyU3RyaW5nfGZoaXIuRmhpclVyaXxmaGlyLkZoaXJEYXRlfGZoaXIuRmhpckRhdGVUaW1lfGZoaXIuRmhpclRpbWV8Zmhpci5GaGlyQ29kZXxmaGlyLkZoaXJPaWR8Zmhpci5GaGlySWR8Zmhpci5GaGlyVW5zaWduZWRJbnR8Zmhpci5GaGlyUG9zaXRpdmVJbnR8Zmhpci5GaGlyTWFya2Rvd258Zmhpci5Bbm5vdGF0aW9ufGZoaXIuQXR0YWNobWVudHxmaGlyLklkZW50aWZpZXJ8Zmhpci5Db2RlYWJsZUNvbmNlcHR8Zmhpci5Db2Rpbmd8Zmhpci5RdWFudGl0eXxmaGlyLlJhbmdlfGZoaXIuUGVyaW9kfGZoaXIuUmF0aW98Zmhpci5TYW1wbGVkRGF0YXxmaGlyLlNpZ25hdHVyZXxmaGlyLkh1bWFuTmFtZXxmaGlyLkFkZHJlc3N8Zmhpci5Db250YWN0UG9pbnR8Zmhpci5UaW1pbmd8Zmhpci5SZWZlcmVuY2V8Zmhpci5NZXRhKXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgZmxhZyB0byBwcm9wZXJseSBzZXJpYWxpemUgY2hvaWNlLXR5cGUgZWxlbWVudCBQYXJhbWV0ZXJzLnBhcmFtZXRlci52YWx1ZVt4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c192YWx1ZUlzQ2hvaWNlOnRydWUgPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSB3aG9sZSByZXNvdXJjZS5cclxuICAgKi9cclxuICBwdWJsaWMgcmVzb3VyY2U/OiBmaGlyLkZoaXJSZXNvdXJjZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBuYW1lZCBwYXJ0IG9mIGEgcGFyYW1ldGVyLiBJbiBtYW55IGltcGxlbWVudGF0aW9uIGNvbnRleHQsIGEgc2V0IG9mIG5hbWVkIHBhcnRzIGlzIGtub3duIGFzIGEgXCJUdXBsZVwiLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwYXJ0OiBmaGlyLlBhcmFtZXRlcnNQYXJhbWV0ZXJbXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBQYXJhbWV0ZXJzUGFyYW1ldGVyIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8UGFyYW1ldGVyc1BhcmFtZXRlckFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyduYW1lJ10pIHsgdGhpcy5uYW1lID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5uYW1lfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLm5hbWUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfbmFtZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLm5hbWUpIHsgdGhpcy5uYW1lLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX25hbWUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5uYW1lID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX25hbWUgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3ZhbHVlJ10pIHsgdGhpcy52YWx1ZSA9IHNvdXJjZS52YWx1ZTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWyd2YWx1ZUJvb2xlYW4nXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oe3ZhbHVlOiBzb3VyY2UudmFsdWVCb29sZWFufSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVJbnRlZ2VyJ10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJJbnRlZ2VyKHt2YWx1ZTogc291cmNlLnZhbHVlSW50ZWdlcn0pOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3ZhbHVlRGVjaW1hbCddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5GaGlyRGVjaW1hbCh7dmFsdWU6IHNvdXJjZS52YWx1ZURlY2ltYWx9KTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWyd2YWx1ZUJhc2U2NEJpbmFyeSddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5GaGlyQmFzZTY0QmluYXJ5KHt2YWx1ZTogc291cmNlLnZhbHVlQmFzZTY0QmluYXJ5fSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVJbnN0YW50J10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJJbnN0YW50KHt2YWx1ZTogc291cmNlLnZhbHVlSW5zdGFudH0pOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3ZhbHVlU3RyaW5nJ10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UudmFsdWVTdHJpbmd9KTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWyd2YWx1ZVVyaSddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5GaGlyVXJpKHt2YWx1ZTogc291cmNlLnZhbHVlVXJpfSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVEYXRlJ10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJEYXRlKHt2YWx1ZTogc291cmNlLnZhbHVlRGF0ZX0pOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3ZhbHVlRGF0ZVRpbWUnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLnZhbHVlRGF0ZVRpbWV9KTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWyd2YWx1ZVRpbWUnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuRmhpclRpbWUoe3ZhbHVlOiBzb3VyY2UudmFsdWVUaW1lfSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVDb2RlJ10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJDb2RlKHt2YWx1ZTogc291cmNlLnZhbHVlQ29kZX0pOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3ZhbHVlT2lkJ10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJPaWQoe3ZhbHVlOiBzb3VyY2UudmFsdWVPaWR9KTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWyd2YWx1ZUlkJ10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJJZCh7dmFsdWU6IHNvdXJjZS52YWx1ZUlkfSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVVbnNpZ25lZEludCddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5GaGlyVW5zaWduZWRJbnQoe3ZhbHVlOiBzb3VyY2UudmFsdWVVbnNpZ25lZEludH0pOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3ZhbHVlUG9zaXRpdmVJbnQnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuRmhpclBvc2l0aXZlSW50KHt2YWx1ZTogc291cmNlLnZhbHVlUG9zaXRpdmVJbnR9KTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWyd2YWx1ZU1hcmtkb3duJ10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJNYXJrZG93bih7dmFsdWU6IHNvdXJjZS52YWx1ZU1hcmtkb3dufSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVBbm5vdGF0aW9uJ10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkFubm90YXRpb24oc291cmNlLnZhbHVlQW5ub3RhdGlvbik7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVBdHRhY2htZW50J10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkF0dGFjaG1lbnQoc291cmNlLnZhbHVlQXR0YWNobWVudCk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVJZGVudGlmaWVyJ10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLklkZW50aWZpZXIoc291cmNlLnZhbHVlSWRlbnRpZmllcik7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVDb2RlYWJsZUNvbmNlcHQnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS52YWx1ZUNvZGVhYmxlQ29uY2VwdCk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVDb2RpbmcnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuQ29kaW5nKHNvdXJjZS52YWx1ZUNvZGluZyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVRdWFudGl0eSddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5RdWFudGl0eShzb3VyY2UudmFsdWVRdWFudGl0eSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVSYW5nZSddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5SYW5nZShzb3VyY2UudmFsdWVSYW5nZSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVQZXJpb2QnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS52YWx1ZVBlcmlvZCk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVSYXRpbyddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5SYXRpbyhzb3VyY2UudmFsdWVSYXRpbyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVTYW1wbGVkRGF0YSddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5TYW1wbGVkRGF0YShzb3VyY2UudmFsdWVTYW1wbGVkRGF0YSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVTaWduYXR1cmUnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuU2lnbmF0dXJlKHNvdXJjZS52YWx1ZVNpZ25hdHVyZSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVIdW1hbk5hbWUnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuSHVtYW5OYW1lKHNvdXJjZS52YWx1ZUh1bWFuTmFtZSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVBZGRyZXNzJ10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkFkZHJlc3Moc291cmNlLnZhbHVlQWRkcmVzcyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVDb250YWN0UG9pbnQnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuQ29udGFjdFBvaW50KHNvdXJjZS52YWx1ZUNvbnRhY3RQb2ludCk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVUaW1pbmcnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuVGltaW5nKHNvdXJjZS52YWx1ZVRpbWluZyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVSZWZlcmVuY2UnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS52YWx1ZVJlZmVyZW5jZSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVNZXRhJ10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLk1ldGEoc291cmNlLnZhbHVlTWV0YSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3Jlc291cmNlJ10pIHsgdGhpcy5yZXNvdXJjZSA9IChmaGlyLnJlc291cmNlRmFjdG9yeShzb3VyY2UucmVzb3VyY2UpID8/IHVuZGVmaW5lZCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3BhcnQnXSkgeyB0aGlzLnBhcnQgPSBzb3VyY2UucGFydC5tYXAoKHgpID0+IG5ldyBmaGlyLlBhcmFtZXRlcnNQYXJhbWV0ZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5wYXJ0ID0gW107IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdQYXJhbWV0ZXJzLnBhcmFtZXRlcicgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ25hbWUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3ZhbHVlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdyZXNvdXJjZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgncGFydCcsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgUGFyYW1ldGVycyB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBQYXJhbWV0ZXJzQXJncyBleHRlbmRzIGZoaXIuUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiUGFyYW1ldGVyc1wifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIHBhcmFtZXRlciBwYXNzZWQgdG8gb3IgcmVjZWl2ZWQgZnJvbSB0aGUgb3BlcmF0aW9uLlxyXG4gICAqL1xyXG4gIHBhcmFtZXRlcj86IGZoaXIuUGFyYW1ldGVyc1BhcmFtZXRlckFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIHNwZWNpYWwgcmVzb3VyY2UgdHlwZSBpcyB1c2VkIHRvIHJlcHJlc2VudCBhbiBvcGVyYXRpb24gcmVxdWVzdCBhbmQgcmVzcG9uc2UgKG9wZXJhdGlvbnMuaHRtbCkuIEl0IGhhcyBubyBvdGhlciB1c2UsIGFuZCB0aGVyZSBpcyBubyBSRVNUZnVsIGVuZHBvaW50IGFzc29jaWF0ZWQgd2l0aCBpdC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJzIGV4dGVuZHMgZmhpci5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdQYXJhbWV0ZXJzJztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIlBhcmFtZXRlcnNcIjtcclxuICAvKipcclxuICAgKiBBIHBhcmFtZXRlciBwYXNzZWQgdG8gb3IgcmVjZWl2ZWQgZnJvbSB0aGUgb3BlcmF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwYXJhbWV0ZXI6IGZoaXIuUGFyYW1ldGVyc1BhcmFtZXRlcltdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFBhcmFtZXRlcnMgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxQYXJhbWV0ZXJzQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ1BhcmFtZXRlcnMnO1xyXG4gICAgaWYgKHNvdXJjZVsncGFyYW1ldGVyJ10pIHsgdGhpcy5wYXJhbWV0ZXIgPSBzb3VyY2UucGFyYW1ldGVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuUGFyYW1ldGVyc1BhcmFtZXRlcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnBhcmFtZXRlciA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnUGFyYW1ldGVycycgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ3BhcmFtZXRlcicsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=