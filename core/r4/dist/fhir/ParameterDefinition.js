// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: ParameterDefinition
import * as fhir from '../fhir.js';
// @ts-ignore
import { OperationParameterUseVsValidation } from '../fhirValueSets/OperationParameterUseVsValidation.js';
// @ts-ignore
import { AllTypesVsValidation } from '../fhirValueSets/AllTypesVsValidation.js';
/**
 * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
 */
export class ParameterDefinition extends fhir.FhirElement {
    /**
     * Default constructor for ParameterDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['name']) {
            this.name = new fhir.FhirCode({ value: source.name });
        }
        if (source['_name']) {
            if (this.name) {
                this.name.addExtendedProperties(source._name);
            }
            else {
                this.name = new fhir.FhirCode(source._name);
            }
        }
        if (source['use']) {
            this.use = new fhir.FhirCode({ value: source.use });
        }
        else {
            this.use = null;
        }
        if (source['_use']) {
            if (this.use) {
                this.use.addExtendedProperties(source._use);
            }
            else {
                this.use = new fhir.FhirCode(source._use);
            }
        }
        if (source['min']) {
            this.min = new fhir.FhirInteger({ value: source.min });
        }
        if (source['_min']) {
            if (this.min) {
                this.min.addExtendedProperties(source._min);
            }
            else {
                this.min = new fhir.FhirInteger(source._min);
            }
        }
        if (source['max']) {
            this.max = new fhir.FhirString({ value: source.max });
        }
        if (source['_max']) {
            if (this.max) {
                this.max.addExtendedProperties(source._max);
            }
            else {
                this.max = new fhir.FhirString(source._max);
            }
        }
        if (source['documentation']) {
            this.documentation = new fhir.FhirString({ value: source.documentation });
        }
        if (source['_documentation']) {
            if (this.documentation) {
                this.documentation.addExtendedProperties(source._documentation);
            }
            else {
                this.documentation = new fhir.FhirString(source._documentation);
            }
        }
        if (source['type']) {
            this.type = new fhir.FhirCode({ value: source.type });
        }
        else {
            this.type = null;
        }
        if (source['_type']) {
            if (this.type) {
                this.type.addExtendedProperties(source._type);
            }
            else {
                this.type = new fhir.FhirCode(source._type);
            }
        }
        if (source['profile']) {
            this.profile = new fhir.FhirCanonical({ value: source.profile });
        }
        if (source['_profile']) {
            if (this.profile) {
                this.profile.addExtendedProperties(source._profile);
            }
            else {
                this.profile = new fhir.FhirCanonical(source._profile);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'ParameterDefinition';
        }
        this.vOptS('name', expression);
        this.vReqSV('use', expression, 'OperationParameterUse', OperationParameterUseVsValidation, 'r');
        this.vOptS('min', expression);
        this.vOptS('max', expression);
        this.vOptS('documentation', expression);
        this.vReqSV('type', expression, 'AllTypes', AllTypesVsValidation, 'r');
        this.vOptS('profile', expression);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
ParameterDefinition._fts_dataType = 'ParameterDefinition';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1ldGVyRGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvUGFyYW1ldGVyRGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFFeEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRzFHLGFBQWE7QUFDYixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQStEaEY7O0dBRUc7QUFDSCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUFpQ3ZEOztPQUVHO0lBQ0gsWUFBWSxTQUEwQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNoRyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7U0FBRTtRQUM1RSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUM7YUFBRTtpQkFDN0Q7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQW1DLENBQUMsQ0FBQzthQUFFO1NBQ3BGO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBZ0MsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7U0FBRTthQUNuRztZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDekIsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUFFLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLElBQUssQ0FBQyxDQUFDO2FBQUU7aUJBQzFEO2dCQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFnQyxNQUFNLENBQUMsSUFBOEIsQ0FBQyxDQUFDO2FBQUU7U0FDN0c7UUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDNUUsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUFFLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLElBQUssQ0FBQyxDQUFDO2FBQUU7aUJBQzFEO2dCQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFxQyxDQUFDLENBQUM7YUFBRTtTQUN4RjtRQUNELElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7U0FBRTtRQUMzRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsSUFBSyxDQUFDLENBQUM7YUFBRTtpQkFDMUQ7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQW9DLENBQUMsQ0FBQzthQUFFO1NBQ3RGO1FBQ0QsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3pHLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDNUIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUFFLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLGNBQWUsQ0FBQyxDQUFDO2FBQUU7aUJBQ3hGO2dCQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxjQUE4QyxDQUFDLENBQUM7YUFBRTtTQUMxRztRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7U0FBRTthQUN2RTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDMUIsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQyxDQUFDO2FBQUU7aUJBQzdEO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFtQyxDQUFDLENBQUM7YUFBRTtTQUNwRjtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7U0FBRTtRQUMxRixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsUUFBUyxDQUFDLENBQUM7YUFBRTtpQkFDdEU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQTJDLENBQUMsQ0FBQzthQUFFO1NBQ3BHO0lBQ0gsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsYUFBb0IsRUFBRTtRQUN0RCxJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pFLElBQUksVUFBVSxLQUFLLEVBQUUsRUFBRTtZQUFFLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQTtTQUFFO1FBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQyxpQ0FBaUMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMzRixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxVQUFVLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxVQUFVLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBQyxVQUFVLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLG9CQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ2hDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBekZEOztHQUVHO0FBQzZCLGlDQUFhLEdBQVUscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IFBhcmFtZXRlckRlZmluaXRpb25cclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IE9wZXJhdGlvblBhcmFtZXRlclVzZUNvZGVzLCAgT3BlcmF0aW9uUGFyYW1ldGVyVXNlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL09wZXJhdGlvblBhcmFtZXRlclVzZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBPcGVyYXRpb25QYXJhbWV0ZXJVc2VWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL09wZXJhdGlvblBhcmFtZXRlclVzZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQWxsVHlwZXNDb2RlcywgIEFsbFR5cGVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0FsbFR5cGVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEFsbFR5cGVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9BbGxUeXBlc1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBQYXJhbWV0ZXJEZWZpbml0aW9uIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFtZXRlckRlZmluaXRpb25BcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXIgdXNlZCB0byBhbGxvdyBhY2Nlc3MgdG8gdGhlIHZhbHVlIG9mIHRoZSBwYXJhbWV0ZXIgaW4gZXZhbHVhdGlvbiBjb250ZXh0cy5cclxuICAgKi9cclxuICBuYW1lPzogZmhpci5GaGlyQ29kZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBQYXJhbWV0ZXJEZWZpbml0aW9uLm5hbWVcclxuICAgKi9cclxuICBfbmFtZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgcGFyYW1ldGVyIGlzIGlucHV0IG9yIG91dHB1dCBmb3IgdGhlIG1vZHVsZS5cclxuICAgKi9cclxuICB1c2U6IGZoaXIuRmhpckNvZGU8T3BlcmF0aW9uUGFyYW1ldGVyVXNlQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFBhcmFtZXRlckRlZmluaXRpb24udXNlXHJcbiAgICovXHJcbiAgX3VzZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1pbmltdW0gbnVtYmVyIG9mIHRpbWVzIHRoaXMgcGFyYW1ldGVyIFNIQUxMIGFwcGVhciBpbiB0aGUgcmVxdWVzdCBvciByZXNwb25zZS5cclxuICAgKi9cclxuICBtaW4/OiBmaGlyLkZoaXJJbnRlZ2VyfG51bWJlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFBhcmFtZXRlckRlZmluaXRpb24ubWluXHJcbiAgICovXHJcbiAgX21pbj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIHRpbWVzIHRoaXMgZWxlbWVudCBpcyBwZXJtaXR0ZWQgdG8gYXBwZWFyIGluIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlLlxyXG4gICAqL1xyXG4gIG1heD86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBQYXJhbWV0ZXJEZWZpbml0aW9uLm1heFxyXG4gICAqL1xyXG4gIF9tYXg/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEEgYnJpZWYgZGlzY3Vzc2lvbiBvZiB3aGF0IHRoZSBwYXJhbWV0ZXIgaXMgZm9yIGFuZCBob3cgaXQgaXMgdXNlZCBieSB0aGUgbW9kdWxlLlxyXG4gICAqL1xyXG4gIGRvY3VtZW50YXRpb24/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUGFyYW1ldGVyRGVmaW5pdGlvbi5kb2N1bWVudGF0aW9uXHJcbiAgICovXHJcbiAgX2RvY3VtZW50YXRpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0eXBlIG9mIHRoZSBwYXJhbWV0ZXIuXHJcbiAgICovXHJcbiAgdHlwZTogZmhpci5GaGlyQ29kZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBQYXJhbWV0ZXJEZWZpbml0aW9uLnR5cGVcclxuICAgKi9cclxuICBfdHlwZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogSWYgc3BlY2lmaWVkLCB0aGlzIGluZGljYXRlcyBhIHByb2ZpbGUgdGhhdCB0aGUgaW5wdXQgZGF0YSBtdXN0IGNvbmZvcm0gdG8sIG9yIHRoYXQgdGhlIG91dHB1dCBkYXRhIHdpbGwgY29uZm9ybSB0by5cclxuICAgKi9cclxuICBwcm9maWxlPzogZmhpci5GaGlyQ2Fub25pY2FsfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFBhcmFtZXRlckRlZmluaXRpb24ucHJvZmlsZVxyXG4gICAqL1xyXG4gIF9wcm9maWxlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBwYXJhbWV0ZXJzIHRvIHRoZSBtb2R1bGUuIFRoaXMgY29sbGVjdGlvbiBzcGVjaWZpZXMgYm90aCB0aGUgaW5wdXQgYW5kIG91dHB1dCBwYXJhbWV0ZXJzLiBJbnB1dCBwYXJhbWV0ZXJzIGFyZSBwcm92aWRlZCBieSB0aGUgY2FsbGVyIGFzIHBhcnQgb2YgdGhlICRldmFsdWF0ZSBvcGVyYXRpb24uIE91dHB1dCBwYXJhbWV0ZXJzIGFyZSBpbmNsdWRlZCBpbiB0aGUgR3VpZGFuY2VSZXNwb25zZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJEZWZpbml0aW9uIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdQYXJhbWV0ZXJEZWZpbml0aW9uJztcclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyIHVzZWQgdG8gYWxsb3cgYWNjZXNzIHRvIHRoZSB2YWx1ZSBvZiB0aGUgcGFyYW1ldGVyIGluIGV2YWx1YXRpb24gY29udGV4dHMuXHJcbiAgICovXHJcbiAgcHVibGljIG5hbWU/OiBmaGlyLkZoaXJDb2RlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBwYXJhbWV0ZXIgaXMgaW5wdXQgb3Igb3V0cHV0IGZvciB0aGUgbW9kdWxlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1c2U6IGZoaXIuRmhpckNvZGU8T3BlcmF0aW9uUGFyYW1ldGVyVXNlQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1pbmltdW0gbnVtYmVyIG9mIHRpbWVzIHRoaXMgcGFyYW1ldGVyIFNIQUxMIGFwcGVhciBpbiB0aGUgcmVxdWVzdCBvciByZXNwb25zZS5cclxuICAgKi9cclxuICBwdWJsaWMgbWluPzogZmhpci5GaGlySW50ZWdlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIHRpbWVzIHRoaXMgZWxlbWVudCBpcyBwZXJtaXR0ZWQgdG8gYXBwZWFyIGluIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBtYXg/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgYnJpZWYgZGlzY3Vzc2lvbiBvZiB3aGF0IHRoZSBwYXJhbWV0ZXIgaXMgZm9yIGFuZCBob3cgaXQgaXMgdXNlZCBieSB0aGUgbW9kdWxlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkb2N1bWVudGF0aW9uPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiB0aGUgcGFyYW1ldGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0eXBlOiBmaGlyLkZoaXJDb2RlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogSWYgc3BlY2lmaWVkLCB0aGlzIGluZGljYXRlcyBhIHByb2ZpbGUgdGhhdCB0aGUgaW5wdXQgZGF0YSBtdXN0IGNvbmZvcm0gdG8sIG9yIHRoYXQgdGhlIG91dHB1dCBkYXRhIHdpbGwgY29uZm9ybSB0by5cclxuICAgKi9cclxuICBwdWJsaWMgcHJvZmlsZT86IGZoaXIuRmhpckNhbm9uaWNhbHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgUGFyYW1ldGVyRGVmaW5pdGlvbiAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFBhcmFtZXRlckRlZmluaXRpb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnbmFtZSddKSB7IHRoaXMubmFtZSA9IG5ldyBmaGlyLkZoaXJDb2RlKHt2YWx1ZTogc291cmNlLm5hbWV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX25hbWUnXSkge1xyXG4gICAgICBpZiAodGhpcy5uYW1lKSB7IHRoaXMubmFtZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9uYW1lISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubmFtZSA9IG5ldyBmaGlyLkZoaXJDb2RlKHNvdXJjZS5fbmFtZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3VzZSddKSB7IHRoaXMudXNlID0gbmV3IGZoaXIuRmhpckNvZGU8T3BlcmF0aW9uUGFyYW1ldGVyVXNlQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnVzZX0pOyB9XHJcbiAgICBlbHNlIHsgdGhpcy51c2UgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfdXNlJ10pIHtcclxuICAgICAgaWYgKHRoaXMudXNlKSB7IHRoaXMudXNlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3VzZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnVzZSA9IG5ldyBmaGlyLkZoaXJDb2RlPE9wZXJhdGlvblBhcmFtZXRlclVzZUNvZGVUeXBlPihzb3VyY2UuX3VzZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbWluJ10pIHsgdGhpcy5taW4gPSBuZXcgZmhpci5GaGlySW50ZWdlcih7dmFsdWU6IHNvdXJjZS5taW59KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX21pbiddKSB7XHJcbiAgICAgIGlmICh0aGlzLm1pbikgeyB0aGlzLm1pbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9taW4hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5taW4gPSBuZXcgZmhpci5GaGlySW50ZWdlcihzb3VyY2UuX21pbiBhcyBQYXJ0aWFsPGZoaXIuRmhpckludGVnZXJBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ21heCddKSB7IHRoaXMubWF4ID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5tYXh9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX21heCddKSB7XHJcbiAgICAgIGlmICh0aGlzLm1heCkgeyB0aGlzLm1heC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9tYXghKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5tYXggPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fbWF4IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydkb2N1bWVudGF0aW9uJ10pIHsgdGhpcy5kb2N1bWVudGF0aW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5kb2N1bWVudGF0aW9ufSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kb2N1bWVudGF0aW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZG9jdW1lbnRhdGlvbikgeyB0aGlzLmRvY3VtZW50YXRpb24uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZG9jdW1lbnRhdGlvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRvY3VtZW50YXRpb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fZG9jdW1lbnRhdGlvbiBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndHlwZSddKSB7IHRoaXMudHlwZSA9IG5ldyBmaGlyLkZoaXJDb2RlKHt2YWx1ZTogc291cmNlLnR5cGV9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMudHlwZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ190eXBlJ10pIHtcclxuICAgICAgaWYgKHRoaXMudHlwZSkgeyB0aGlzLnR5cGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdHlwZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZShzb3VyY2UuX3R5cGUgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwcm9maWxlJ10pIHsgdGhpcy5wcm9maWxlID0gbmV3IGZoaXIuRmhpckNhbm9uaWNhbCh7dmFsdWU6IHNvdXJjZS5wcm9maWxlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19wcm9maWxlJ10pIHtcclxuICAgICAgaWYgKHRoaXMucHJvZmlsZSkgeyB0aGlzLnByb2ZpbGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fcHJvZmlsZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnByb2ZpbGUgPSBuZXcgZmhpci5GaGlyQ2Fub25pY2FsKHNvdXJjZS5fcHJvZmlsZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNhbm9uaWNhbEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbjpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbik7XHJcbiAgICBpZiAoZXhwcmVzc2lvbiA9PT0gJycpIHsgZXhwcmVzc2lvbiA9ICdQYXJhbWV0ZXJEZWZpbml0aW9uJyB9XHJcbiAgICB0aGlzLnZPcHRTKCduYW1lJyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52UmVxU1YoJ3VzZScsZXhwcmVzc2lvbiwnT3BlcmF0aW9uUGFyYW1ldGVyVXNlJyxPcGVyYXRpb25QYXJhbWV0ZXJVc2VWc1ZhbGlkYXRpb24sJ3InKVxyXG4gICAgdGhpcy52T3B0UygnbWluJyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52T3B0UygnbWF4JyxleHByZXNzaW9uKVxyXG4gICAgdGhpcy52T3B0UygnZG9jdW1lbnRhdGlvbicsZXhwcmVzc2lvbilcclxuICAgIHRoaXMudlJlcVNWKCd0eXBlJyxleHByZXNzaW9uLCdBbGxUeXBlcycsQWxsVHlwZXNWc1ZhbGlkYXRpb24sJ3InKVxyXG4gICAgdGhpcy52T3B0UygncHJvZmlsZScsZXhwcmVzc2lvbilcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==