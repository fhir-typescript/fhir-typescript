// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: ManufacturedItemDefinition
import * as fhir from '../fhir.js';
// @ts-ignore
import { PublicationStatusVsValidation } from '../fhirValueSets/PublicationStatusVsValidation.js';
/**
 * General characteristics of this item.
 */
export class ManufacturedItemDefinitionProperty extends fhir.BackboneElement {
    /**
     * Default constructor for ManufacturedItemDefinitionProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        else {
            this.type = null;
        }
        if (source['value']) {
            this.value = source.value;
        }
        else if (source['valueCodeableConcept']) {
            this.value = new fhir.CodeableConcept(source.valueCodeableConcept);
        }
        else if (source['valueQuantity']) {
            this.value = new fhir.Quantity(source.valueQuantity);
        }
        else if (source['valueDate']) {
            this.value = new fhir.FhirDate({ value: source.valueDate });
        }
        else if (source['valueBoolean']) {
            this.value = new fhir.FhirBoolean({ value: source.valueBoolean });
        }
        else if (source['valueAttachment']) {
            this.value = new fhir.Attachment(source.valueAttachment);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'ManufacturedItemDefinition.property';
        }
        this.vRS('type', exp);
        this.vOS('value', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
ManufacturedItemDefinitionProperty._fts_dataType = 'ManufacturedItemDefinitionProperty';
/**
 * Internal flag to properly serialize choice-type element ManufacturedItemDefinition.property.value[x]
 */
ManufacturedItemDefinitionProperty._fts_valueIsChoice = true;
/**
 * The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product.
 */
export class ManufacturedItemDefinition extends fhir.DomainResource {
    /**
     * Default constructor for ManufacturedItemDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'ManufacturedItemDefinition';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['status']) {
            this.status = new fhir.FhirCode({ value: source.status });
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status);
            }
        }
        if (source['manufacturedDoseForm']) {
            this.manufacturedDoseForm = new fhir.CodeableConcept(source.manufacturedDoseForm);
        }
        else {
            this.manufacturedDoseForm = null;
        }
        if (source['unitOfPresentation']) {
            this.unitOfPresentation = new fhir.CodeableConcept(source.unitOfPresentation);
        }
        if (source['manufacturer']) {
            this.manufacturer = source.manufacturer.map((x) => new fhir.Reference(x));
        }
        else {
            this.manufacturer = [];
        }
        if (source['ingredient']) {
            this.ingredient = source.ingredient.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.ingredient = [];
        }
        if (source['property']) {
            this.property = source.property.map((x) => new fhir.ManufacturedItemDefinitionProperty(x));
        }
        else {
            this.property = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'ManufacturedItemDefinition';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vRSV('status', exp, 'PublicationStatus', PublicationStatusVsValidation, 'r');
        this.vRS('manufacturedDoseForm', exp);
        this.vOS('unitOfPresentation', exp);
        this.vOA('manufacturer', exp);
        this.vOA('ingredient', exp);
        this.vOA('property', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
ManufacturedItemDefinition._fts_dataType = 'ManufacturedItemDefinition';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFudWZhY3R1cmVkSXRlbURlZmluaXRpb24uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL01hbnVmYWN0dXJlZEl0ZW1EZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLDRDQUE0QztBQUU1QyxPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUluQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUF1Q2xHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLElBQUksQ0FBQyxlQUFlO0lBaUIxRTs7T0FFRztJQUNILFlBQVksU0FBeUQsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDL0csS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUFFO2FBQ3JFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FBRTtRQUMxQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUFFO2FBQzlDLElBQUksTUFBTSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUFFO2FBQzNHLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQUU7YUFDdEYsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3ZGLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7U0FBRTthQUNoRyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQUU7SUFDbkcsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLHFDQUFxQyxDQUFBO1NBQUU7UUFDL0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDckIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUF2Q0Q7O0dBRUc7QUFDNkIsZ0RBQWEsR0FBVSxvQ0FBb0MsQ0FBQztBQVM1Rjs7R0FFRztBQUN1QixxREFBa0IsR0FBUSxJQUFJLENBQUM7QUFvRTNEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLDBCQUEyQixTQUFRLElBQUksQ0FBQyxjQUFjO0lBcUNqRTs7T0FFRztJQUNILFlBQVksU0FBaUQsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDdkcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLDRCQUE0QixDQUFDO1FBQ2pELElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUNoRztZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDOUIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBNEIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FBRTthQUN4RztZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDNUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLE9BQVEsQ0FBQyxDQUFDO2FBQUU7aUJBQ25FO2dCQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUE0QixNQUFNLENBQUMsT0FBaUMsQ0FBQyxDQUFDO2FBQUU7U0FDL0c7UUFDRCxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUFFO2FBQ3JIO1lBQUUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztTQUFFO1FBQzFDLElBQUksTUFBTSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQUU7UUFDcEgsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3JHO1lBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FBRTtRQUNoQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDckc7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2xIO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FBRTtJQUM5QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsNEJBQTRCLENBQUE7U0FBRTtRQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsbUJBQW1CLEVBQUMsNkJBQTZCLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDN0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBM0VEOztHQUVHO0FBQzZCLHdDQUFhLEdBQVUsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBNYW51ZmFjdHVyZWRJdGVtRGVmaW5pdGlvblxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgUHVibGljYXRpb25TdGF0dXNDb2RlcywgIFB1YmxpY2F0aW9uU3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1B1YmxpY2F0aW9uU3RhdHVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFB1YmxpY2F0aW9uU3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9QdWJsaWNhdGlvblN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgVW5pdE9mUHJlc2VudGF0aW9uQ29kZXMsICBVbml0T2ZQcmVzZW50YXRpb25Db2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvVW5pdE9mUHJlc2VudGF0aW9uQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFVuaXRPZlByZXNlbnRhdGlvblZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvVW5pdE9mUHJlc2VudGF0aW9uVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIE1hbnVmYWN0dXJlZEl0ZW1EZWZpbml0aW9uUHJvcGVydHkgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFudWZhY3R1cmVkSXRlbURlZmluaXRpb25Qcm9wZXJ0eUFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEEgY29kZSBleHByZXNzaW5nIHRoZSB0eXBlIG9mIGNoYXJhY3RlcmlzdGljLlxyXG4gICAqL1xyXG4gIHR5cGU6IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIEEgdmFsdWUgZm9yIHRoZSBjaGFyYWN0ZXJpc3RpYy5cclxuICAgKi9cclxuICB2YWx1ZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUXVhbnRpdHl8Zmhpci5GaGlyRGF0ZXxmaGlyLkZoaXJCb29sZWFufGZoaXIuQXR0YWNobWVudHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSB2YWx1ZSBmb3IgdGhlIGNoYXJhY3RlcmlzdGljLlxyXG4gICAqL1xyXG4gIHZhbHVlQ29kZWFibGVDb25jZXB0PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIHZhbHVlIGZvciB0aGUgY2hhcmFjdGVyaXN0aWMuXHJcbiAgICovXHJcbiAgdmFsdWVRdWFudGl0eT86IGZoaXIuUXVhbnRpdHlBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIHZhbHVlIGZvciB0aGUgY2hhcmFjdGVyaXN0aWMuXHJcbiAgICovXHJcbiAgdmFsdWVEYXRlPzogZmhpci5GaGlyRGF0ZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgdmFsdWUgZm9yIHRoZSBjaGFyYWN0ZXJpc3RpYy5cclxuICAgKi9cclxuICB2YWx1ZUJvb2xlYW4/OiBmaGlyLkZoaXJCb29sZWFufGJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgdmFsdWUgZm9yIHRoZSBjaGFyYWN0ZXJpc3RpYy5cclxuICAgKi9cclxuICB2YWx1ZUF0dGFjaG1lbnQ/OiBmaGlyLkF0dGFjaG1lbnRBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYWwgY2hhcmFjdGVyaXN0aWNzIG9mIHRoaXMgaXRlbS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNYW51ZmFjdHVyZWRJdGVtRGVmaW5pdGlvblByb3BlcnR5IGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnTWFudWZhY3R1cmVkSXRlbURlZmluaXRpb25Qcm9wZXJ0eSc7XHJcbiAgLyoqXHJcbiAgICogQSBjb2RlIGV4cHJlc3NpbmcgdGhlIHR5cGUgb2YgY2hhcmFjdGVyaXN0aWMuXHJcbiAgICovXHJcbiAgcHVibGljIHR5cGU6IGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGw7XHJcbiAgLyoqXHJcbiAgICogQSB2YWx1ZSBmb3IgdGhlIGNoYXJhY3RlcmlzdGljLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB2YWx1ZT86IChmaGlyLkNvZGVhYmxlQ29uY2VwdHxmaGlyLlF1YW50aXR5fGZoaXIuRmhpckRhdGV8Zmhpci5GaGlyQm9vbGVhbnxmaGlyLkF0dGFjaG1lbnQpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IE1hbnVmYWN0dXJlZEl0ZW1EZWZpbml0aW9uLnByb3BlcnR5LnZhbHVlW3hdXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBfZnRzX3ZhbHVlSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgTWFudWZhY3R1cmVkSXRlbURlZmluaXRpb25Qcm9wZXJ0eSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPE1hbnVmYWN0dXJlZEl0ZW1EZWZpbml0aW9uUHJvcGVydHlBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsndHlwZSddKSB7IHRoaXMudHlwZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UudHlwZSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnR5cGUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWyd2YWx1ZSddKSB7IHRoaXMudmFsdWUgPSBzb3VyY2UudmFsdWU7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVDb2RlYWJsZUNvbmNlcHQnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS52YWx1ZUNvZGVhYmxlQ29uY2VwdCk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVRdWFudGl0eSddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5RdWFudGl0eShzb3VyY2UudmFsdWVRdWFudGl0eSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVEYXRlJ10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJEYXRlKHt2YWx1ZTogc291cmNlLnZhbHVlRGF0ZX0pOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ3ZhbHVlQm9vbGVhbiddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5GaGlyQm9vbGVhbih7dmFsdWU6IHNvdXJjZS52YWx1ZUJvb2xlYW59KTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWyd2YWx1ZUF0dGFjaG1lbnQnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuQXR0YWNobWVudChzb3VyY2UudmFsdWVBdHRhY2htZW50KTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ01hbnVmYWN0dXJlZEl0ZW1EZWZpbml0aW9uLnByb3BlcnR5JyB9XHJcbiAgICB0aGlzLnZSUygndHlwZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3ZhbHVlJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgTWFudWZhY3R1cmVkSXRlbURlZmluaXRpb24gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFudWZhY3R1cmVkSXRlbURlZmluaXRpb25BcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJNYW51ZmFjdHVyZWRJdGVtRGVmaW5pdGlvblwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBVbmlxdWUgaWRlbnRpZmllci5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbGxvd3MgZmlsdGVyaW5nIG9mIG1hbnVmYWN0dXJlZCBpdGVtcyB0aGF0IGFyZSBhcHByb3ByaWF0ZSBmb3IgdXNlIHZlcnN1cyBub3QuXHJcbiAgICovXHJcbiAgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPFB1YmxpY2F0aW9uU3RhdHVzQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1hbnVmYWN0dXJlZEl0ZW1EZWZpbml0aW9uLnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIERvc2UgZm9ybSBhcyBtYW51ZmFjdHVyZWQgYW5kIGJlZm9yZSBhbnkgdHJhbnNmb3JtYXRpb24gaW50byB0aGUgcGhhcm1hY2V1dGljYWwgcHJvZHVjdC5cclxuICAgKi9cclxuICBtYW51ZmFjdHVyZWREb3NlRm9ybTogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIOKAnHJlYWwgd29ybGTigJ0gdW5pdHMgaW4gd2hpY2ggdGhlIHF1YW50aXR5IG9mIHRoZSBtYW51ZmFjdHVyZWQgaXRlbSBpcyBkZXNjcmliZWQuXHJcbiAgICovXHJcbiAgdW5pdE9mUHJlc2VudGF0aW9uPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBNYW51ZmFjdHVyZXIgb2YgdGhlIGl0ZW0gKE5vdGUgdGhhdCB0aGlzIHNob3VsZCBiZSBuYW1lZCBcIm1hbnVmYWN0dXJlclwiIGJ1dCBpdCBjdXJyZW50bHkgY2F1c2VzIHRlY2huaWNhbCBpc3N1ZXMpLlxyXG4gICAqL1xyXG4gIG1hbnVmYWN0dXJlcj86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaW5ncmVkaWVudHMgb2YgdGhpcyBtYW51ZmFjdHVyZWQgaXRlbS4gVGhpcyBpcyBvbmx5IG5lZWRlZCBpZiB0aGUgaW5ncmVkaWVudHMgYXJlIG5vdCBzcGVjaWZpZWQgYnkgaW5jb21pbmcgcmVmZXJlbmNlcyBmcm9tIHRoZSBJbmdyZWRpZW50IHJlc291cmNlLlxyXG4gICAqL1xyXG4gIGluZ3JlZGllbnQ/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogR2VuZXJhbCBjaGFyYWN0ZXJpc3RpY3Mgb2YgdGhpcyBpdGVtLlxyXG4gICAqL1xyXG4gIHByb3BlcnR5PzogZmhpci5NYW51ZmFjdHVyZWRJdGVtRGVmaW5pdGlvblByb3BlcnR5QXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBkZWZpbml0aW9uIGFuZCBjaGFyYWN0ZXJpc3RpY3Mgb2YgYSBtZWRpY2luYWwgbWFudWZhY3R1cmVkIGl0ZW0sIHN1Y2ggYXMgYSB0YWJsZXQgb3IgY2Fwc3VsZSwgYXMgY29udGFpbmVkIGluIGEgcGFja2FnZWQgbWVkaWNpbmFsIHByb2R1Y3QuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWFudWZhY3R1cmVkSXRlbURlZmluaXRpb24gZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ01hbnVmYWN0dXJlZEl0ZW1EZWZpbml0aW9uJztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIk1hbnVmYWN0dXJlZEl0ZW1EZWZpbml0aW9uXCI7XHJcbiAgLyoqXHJcbiAgICogVW5pcXVlIGlkZW50aWZpZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI6IGZoaXIuSWRlbnRpZmllcltdO1xyXG4gIC8qKlxyXG4gICAqIEFsbG93cyBmaWx0ZXJpbmcgb2YgbWFudWZhY3R1cmVkIGl0ZW1zIHRoYXQgYXJlIGFwcHJvcHJpYXRlIGZvciB1c2UgdmVyc3VzIG5vdC5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPFB1YmxpY2F0aW9uU3RhdHVzQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogRG9zZSBmb3JtIGFzIG1hbnVmYWN0dXJlZCBhbmQgYmVmb3JlIGFueSB0cmFuc2Zvcm1hdGlvbiBpbnRvIHRoZSBwaGFybWFjZXV0aWNhbCBwcm9kdWN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBtYW51ZmFjdHVyZWREb3NlRm9ybTogZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUg4oCccmVhbCB3b3JsZOKAnSB1bml0cyBpbiB3aGljaCB0aGUgcXVhbnRpdHkgb2YgdGhlIG1hbnVmYWN0dXJlZCBpdGVtIGlzIGRlc2NyaWJlZC5cclxuICAgKi9cclxuICBwdWJsaWMgdW5pdE9mUHJlc2VudGF0aW9uPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE1hbnVmYWN0dXJlciBvZiB0aGUgaXRlbSAoTm90ZSB0aGF0IHRoaXMgc2hvdWxkIGJlIG5hbWVkIFwibWFudWZhY3R1cmVyXCIgYnV0IGl0IGN1cnJlbnRseSBjYXVzZXMgdGVjaG5pY2FsIGlzc3VlcykuXHJcbiAgICovXHJcbiAgcHVibGljIG1hbnVmYWN0dXJlcjogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBUaGUgaW5ncmVkaWVudHMgb2YgdGhpcyBtYW51ZmFjdHVyZWQgaXRlbS4gVGhpcyBpcyBvbmx5IG5lZWRlZCBpZiB0aGUgaW5ncmVkaWVudHMgYXJlIG5vdCBzcGVjaWZpZWQgYnkgaW5jb21pbmcgcmVmZXJlbmNlcyBmcm9tIHRoZSBJbmdyZWRpZW50IHJlc291cmNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpbmdyZWRpZW50OiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIEdlbmVyYWwgY2hhcmFjdGVyaXN0aWNzIG9mIHRoaXMgaXRlbS5cclxuICAgKi9cclxuICBwdWJsaWMgcHJvcGVydHk6IGZoaXIuTWFudWZhY3R1cmVkSXRlbURlZmluaXRpb25Qcm9wZXJ0eVtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIE1hbnVmYWN0dXJlZEl0ZW1EZWZpbml0aW9uIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8TWFudWZhY3R1cmVkSXRlbURlZmluaXRpb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnTWFudWZhY3R1cmVkSXRlbURlZmluaXRpb24nO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxQdWJsaWNhdGlvblN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxQdWJsaWNhdGlvblN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3N0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbWFudWZhY3R1cmVkRG9zZUZvcm0nXSkgeyB0aGlzLm1hbnVmYWN0dXJlZERvc2VGb3JtID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5tYW51ZmFjdHVyZWREb3NlRm9ybSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLm1hbnVmYWN0dXJlZERvc2VGb3JtID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsndW5pdE9mUHJlc2VudGF0aW9uJ10pIHsgdGhpcy51bml0T2ZQcmVzZW50YXRpb24gPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnVuaXRPZlByZXNlbnRhdGlvbik7IH1cclxuICAgIGlmIChzb3VyY2VbJ21hbnVmYWN0dXJlciddKSB7IHRoaXMubWFudWZhY3R1cmVyID0gc291cmNlLm1hbnVmYWN0dXJlci5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLm1hbnVmYWN0dXJlciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydpbmdyZWRpZW50J10pIHsgdGhpcy5pbmdyZWRpZW50ID0gc291cmNlLmluZ3JlZGllbnQubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pbmdyZWRpZW50ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3Byb3BlcnR5J10pIHsgdGhpcy5wcm9wZXJ0eSA9IHNvdXJjZS5wcm9wZXJ0eS5tYXAoKHgpID0+IG5ldyBmaGlyLk1hbnVmYWN0dXJlZEl0ZW1EZWZpbml0aW9uUHJvcGVydHkoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5wcm9wZXJ0eSA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnTWFudWZhY3R1cmVkSXRlbURlZmluaXRpb24nIH1cclxuICAgIHRoaXMudlJTKCdyZXNvdXJjZVR5cGUnLGV4cClcclxuICAgIHRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApXHJcbiAgICB0aGlzLnZSU1YoJ3N0YXR1cycsZXhwLCdQdWJsaWNhdGlvblN0YXR1cycsUHVibGljYXRpb25TdGF0dXNWc1ZhbGlkYXRpb24sJ3InKVxyXG4gICAgdGhpcy52UlMoJ21hbnVmYWN0dXJlZERvc2VGb3JtJyxleHApXHJcbiAgICB0aGlzLnZPUygndW5pdE9mUHJlc2VudGF0aW9uJyxleHApXHJcbiAgICB0aGlzLnZPQSgnbWFudWZhY3R1cmVyJyxleHApXHJcbiAgICB0aGlzLnZPQSgnaW5ncmVkaWVudCcsZXhwKVxyXG4gICAgdGhpcy52T0EoJ3Byb3BlcnR5JyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=