// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Group
import * as fhir from '../fhir.js';
// @ts-ignore
import { GroupTypeVsValidation } from '../fhirValueSets/GroupTypeVsValidation.js';
/**
 * Needs to be a generic mechanism for identifying what individuals can be part of a group.
 */
export class GroupCharacteristic extends fhir.BackboneElement {
    /**
     * Default constructor for GroupCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code, options);
        }
        else {
            this.code = null;
        }
        if (source['value']) {
            this.value = source.value;
        }
        else if (source['valueCodeableConcept']) {
            this.value = new fhir.CodeableConcept(source.valueCodeableConcept, options);
        }
        else if (source['valueBoolean'] !== undefined) {
            this.value = new fhir.FhirBoolean({ value: source.valueBoolean }, options);
        }
        else if (source['valueQuantity']) {
            this.value = new fhir.Quantity(source.valueQuantity, options);
        }
        else if (source['valueRange']) {
            this.value = new fhir.Range(source.valueRange, options);
        }
        else {
            this.value = null;
        }
        if (source['exclude'] !== undefined) {
            this.exclude = new fhir.FhirBoolean({ value: source.exclude }, options);
        }
        else {
            this.exclude = null;
        }
        if (source['_exclude']) {
            if (this.exclude) {
                this.exclude.addExtendedProperties(source._exclude);
            }
            else {
                this.exclude = new fhir.FhirBoolean(source._exclude, options);
            }
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period, options);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Group.characteristic';
        }
        iss.push(...this.vRS('code', exp));
        iss.push(...this.vRS('value', exp));
        iss.push(...this.vRS('exclude', exp));
        iss.push(...this.vOS('period', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
GroupCharacteristic._fts_dataType = 'GroupCharacteristic';
/**
 * Internal flag to properly serialize choice-type element Group.characteristic.value[x]
 */
GroupCharacteristic._fts_valueIsChoice = true;
/**
 * Often the only thing of interest about a group is "who's in it".
 */
export class GroupMember extends fhir.BackboneElement {
    /**
     * Default constructor for GroupMember - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['entity']) {
            this.entity = new fhir.Reference(source.entity, options);
        }
        else {
            this.entity = null;
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period, options);
        }
        if (source['inactive'] !== undefined) {
            this.inactive = new fhir.FhirBoolean({ value: source.inactive }, options);
        }
        if (source['_inactive']) {
            if (this.inactive) {
                this.inactive.addExtendedProperties(source._inactive);
            }
            else {
                this.inactive = new fhir.FhirBoolean(source._inactive, options);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Group.member';
        }
        iss.push(...this.vRS('entity', exp));
        iss.push(...this.vOS('period', exp));
        iss.push(...this.vOS('inactive', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
GroupMember._fts_dataType = 'GroupMember';
/**
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 */
export class Group extends fhir.DomainResource {
    /**
     * Default constructor for Group - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Group';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options));
        }
        else {
            this.identifier = [];
        }
        if (source['type'] !== undefined) {
            this.type = new fhir.FhirCode({ value: source.type }, options);
        }
        else {
            this.type = null;
        }
        if (source['_type']) {
            if (this.type) {
                this.type.addExtendedProperties(source._type);
            }
            else {
                this.type = new fhir.FhirCode(source._type, options);
            }
        }
        if (source['actual'] !== undefined) {
            this.actual = new fhir.FhirBoolean({ value: source.actual }, options);
        }
        else {
            this.actual = null;
        }
        if (source['_actual']) {
            if (this.actual) {
                this.actual.addExtendedProperties(source._actual);
            }
            else {
                this.actual = new fhir.FhirBoolean(source._actual, options);
            }
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code, options);
        }
        if (source['name'] !== undefined) {
            this.name = new fhir.FhirString({ value: source.name }, options);
        }
        if (source['_name']) {
            if (this.name) {
                this.name.addExtendedProperties(source._name);
            }
            else {
                this.name = new fhir.FhirString(source._name, options);
            }
        }
        if (source['quantity'] !== undefined) {
            this.quantity = new fhir.FhirUnsignedInt({ value: source.quantity }, options);
        }
        if (source['_quantity']) {
            if (this.quantity) {
                this.quantity.addExtendedProperties(source._quantity);
            }
            else {
                this.quantity = new fhir.FhirUnsignedInt(source._quantity, options);
            }
        }
        if (source['characteristic']) {
            this.characteristic = source.characteristic.map((x) => new fhir.GroupCharacteristic(x, options));
        }
        else {
            this.characteristic = [];
        }
        if (source['member']) {
            this.member = source.member.map((x) => new fhir.GroupMember(x, options));
        }
        else {
            this.member = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Group';
        }
        iss.push(...this.vOA('identifier', exp));
        iss.push(...this.vRSV('type', exp, 'GroupType', GroupTypeVsValidation, 'r'));
        iss.push(...this.vRS('actual', exp));
        iss.push(...this.vOS('code', exp));
        iss.push(...this.vOS('name', exp));
        iss.push(...this.vOS('quantity', exp));
        iss.push(...this.vOA('characteristic', exp));
        iss.push(...this.vOA('member', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Group._fts_dataType = 'Group';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXAuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHVCQUF1QjtBQUV2QixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUluQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUEyQ2xGOztHQUVHO0FBQ0gsTUFBTSxPQUFPLG1CQUFvQixTQUFRLElBQUksQ0FBQyxlQUFlO0lBeUIzRDs7T0FFRztJQUNILFlBQVksU0FBMEMsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDaEcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTthQUM5RTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDMUIsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FBRTthQUM5QyxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDcEgsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDdkgsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDL0YsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDdEY7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzNCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO2FBQzFHO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM3QixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsUUFBUyxDQUFDLENBQUM7YUFBRTtpQkFDdEU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQXlDLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFBRTtTQUN6RztRQUNELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO0lBQ2xGLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLEdBQUcsR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxzQkFBc0IsQ0FBQTtTQUFFO1FBQ2hELEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUF4REQ7O0dBRUc7QUFDNkIsaUNBQWEsR0FBVSxxQkFBcUIsQ0FBQztBQVM3RTs7R0FFRztBQUN1QixzQ0FBa0IsR0FBUSxJQUFJLENBQUM7QUFpRTNEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFdBQVksU0FBUSxJQUFJLENBQUMsZUFBZTtJQWlCbkQ7O09BRUc7SUFDSCxZQUFZLFNBQWtDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3hGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDOUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzVCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQ2hGLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQ2xILElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxTQUFVLENBQUMsQ0FBQzthQUFFO2lCQUN6RTtnQkFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBMEMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1NBQzNHO0lBQ0gsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksR0FBRyxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLGNBQWMsQ0FBQTtTQUFFO1FBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUF4Q0Q7O0dBRUc7QUFDNkIseUJBQWEsR0FBVSxhQUFhLENBQUM7QUFpR3ZFOztHQUVHO0FBQ0gsTUFBTSxPQUFPLEtBQU0sU0FBUSxJQUFJLENBQUMsY0FBYztJQXlDNUM7O09BRUc7SUFDSCxZQUFZLFNBQTRCLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ2xGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDNUIsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FBRTthQUN6RztZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDOUIsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQW9CLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO2FBQ2pIO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FBRTtRQUMxQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUM7YUFBRTtpQkFDN0Q7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQW9CLE1BQU0sQ0FBQyxLQUErQixFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQUU7U0FDNUc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTthQUN2RztZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDNUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLE9BQVEsQ0FBQyxDQUFDO2FBQUU7aUJBQ25FO2dCQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUF3QyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQUU7U0FDdkc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUNuRixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUNyRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUM7YUFBRTtpQkFDN0Q7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQXFDLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFBRTtTQUNqRztRQUNELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQ3RILElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxTQUFVLENBQUMsQ0FBQzthQUFFO2lCQUN6RTtnQkFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBOEMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1NBQ25IO1FBQ0QsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDOUg7WUFBRSxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQ2xDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDOUY7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUFFO0lBQzVCLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLEdBQUcsR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxPQUFPLENBQUE7U0FBRTtRQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLFdBQVcsRUFBQyxxQkFBcUIsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQTNGRDs7R0FFRztBQUM2QixtQkFBYSxHQUFVLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMi5jb3JlIHZlcnNpb246IDEuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogR3JvdXBcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEdyb3VwVHlwZUNvZGVzLCAgR3JvdXBUeXBlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0dyb3VwVHlwZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBHcm91cFR5cGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0dyb3VwVHlwZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBHcm91cENoYXJhY3RlcmlzdGljIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VwQ2hhcmFjdGVyaXN0aWNBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBOZWVkIGEgZm9ybWFsIHdheSBvZiBpZGVudGlmeWluZyB0aGUgY2hhcmFjdGVyaXN0aWMgYmVpbmcgZGVzY3JpYmVkLlxyXG4gICAqL1xyXG4gIGNvZGU6IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgY2hhcmFjdGVyaXN0aWMgaXMgd2hhdCBkZXRlcm1pbmVzIGdyb3VwIG1lbWJlcnNoaXAuXHJcbiAgICovXHJcbiAgdmFsdWU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHxmaGlyLkZoaXJCb29sZWFufGZoaXIuUXVhbnRpdHl8Zmhpci5SYW5nZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBjaGFyYWN0ZXJpc3RpYyBpcyB3aGF0IGRldGVybWluZXMgZ3JvdXAgbWVtYmVyc2hpcC5cclxuICAgKi9cclxuICB2YWx1ZUNvZGVhYmxlQ29uY2VwdD86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBjaGFyYWN0ZXJpc3RpYyBpcyB3aGF0IGRldGVybWluZXMgZ3JvdXAgbWVtYmVyc2hpcC5cclxuICAgKi9cclxuICB2YWx1ZUJvb2xlYW4/OiBmaGlyLkZoaXJCb29sZWFufGJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgY2hhcmFjdGVyaXN0aWMgaXMgd2hhdCBkZXRlcm1pbmVzIGdyb3VwIG1lbWJlcnNoaXAuXHJcbiAgICovXHJcbiAgdmFsdWVRdWFudGl0eT86IGZoaXIuUXVhbnRpdHlBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGNoYXJhY3RlcmlzdGljIGlzIHdoYXQgZGV0ZXJtaW5lcyBncm91cCBtZW1iZXJzaGlwLlxyXG4gICAqL1xyXG4gIHZhbHVlUmFuZ2U/OiBmaGlyLlJhbmdlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogU29tZXRpbWVzIGdyb3VwIG1lbWJlcnNoaXAgaXMgZGV0ZXJtaW5lZCBieSBjaGFyYWN0ZXJpc3RpY3Mgbm90IHBvc3Nlc3NlZC5cclxuICAgKi9cclxuICBleGNsdWRlOiBmaGlyLkZoaXJCb29sZWFufGJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBHcm91cC5jaGFyYWN0ZXJpc3RpYy5leGNsdWRlXHJcbiAgICovXHJcbiAgX2V4Y2x1ZGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJpb2Qgb3ZlciB3aGljaCB0aGUgY2hhcmFjdGVyaXN0aWMgaXMgdGVzdGVkOyBlLmcuIHRoZSBwYXRpZW50IGhhZCBhbiBvcGVyYXRpb24gZHVyaW5nIHRoZSBtb250aCBvZiBKdW5lLlxyXG4gICAqL1xyXG4gIHBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBOZWVkcyB0byBiZSBhIGdlbmVyaWMgbWVjaGFuaXNtIGZvciBpZGVudGlmeWluZyB3aGF0IGluZGl2aWR1YWxzIGNhbiBiZSBwYXJ0IG9mIGEgZ3JvdXAuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JvdXBDaGFyYWN0ZXJpc3RpYyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0dyb3VwQ2hhcmFjdGVyaXN0aWMnO1xyXG4gIC8qKlxyXG4gICAqIE5lZWQgYSBmb3JtYWwgd2F5IG9mIGlkZW50aWZ5aW5nIHRoZSBjaGFyYWN0ZXJpc3RpYyBiZWluZyBkZXNjcmliZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGNvZGU6IGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBjaGFyYWN0ZXJpc3RpYyBpcyB3aGF0IGRldGVybWluZXMgZ3JvdXAgbWVtYmVyc2hpcC5cclxuICAgKi9cclxuICBwdWJsaWMgdmFsdWU6IChmaGlyLkNvZGVhYmxlQ29uY2VwdHxmaGlyLkZoaXJCb29sZWFufGZoaXIuUXVhbnRpdHl8Zmhpci5SYW5nZSl8bnVsbDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IEdyb3VwLmNoYXJhY3RlcmlzdGljLnZhbHVlW3hdXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBfZnRzX3ZhbHVlSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogU29tZXRpbWVzIGdyb3VwIG1lbWJlcnNoaXAgaXMgZGV0ZXJtaW5lZCBieSBjaGFyYWN0ZXJpc3RpY3Mgbm90IHBvc3Nlc3NlZC5cclxuICAgKi9cclxuICBwdWJsaWMgZXhjbHVkZTogZmhpci5GaGlyQm9vbGVhbnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJpb2Qgb3ZlciB3aGljaCB0aGUgY2hhcmFjdGVyaXN0aWMgaXMgdGVzdGVkOyBlLmcuIHRoZSBwYXRpZW50IGhhZCBhbiBvcGVyYXRpb24gZHVyaW5nIHRoZSBtb250aCBvZiBKdW5lLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgR3JvdXBDaGFyYWN0ZXJpc3RpYyAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEdyb3VwQ2hhcmFjdGVyaXN0aWNBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnY29kZSddKSB7IHRoaXMuY29kZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuY29kZSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmNvZGUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWyd2YWx1ZSddKSB7IHRoaXMudmFsdWUgPSBzb3VyY2UudmFsdWU7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVDb2RlYWJsZUNvbmNlcHQnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS52YWx1ZUNvZGVhYmxlQ29uY2VwdCwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVCb29sZWFuJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oe3ZhbHVlOiBzb3VyY2UudmFsdWVCb29sZWFufSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVRdWFudGl0eSddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5RdWFudGl0eShzb3VyY2UudmFsdWVRdWFudGl0eSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVSYW5nZSddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5SYW5nZShzb3VyY2UudmFsdWVSYW5nZSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnZhbHVlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZXhjbHVkZSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5leGNsdWRlID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oe3ZhbHVlOiBzb3VyY2UuZXhjbHVkZX0sIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5leGNsdWRlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2V4Y2x1ZGUnXSkge1xyXG4gICAgICBpZiAodGhpcy5leGNsdWRlKSB7IHRoaXMuZXhjbHVkZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9leGNsdWRlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZXhjbHVkZSA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHNvdXJjZS5fZXhjbHVkZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckJvb2xlYW5BcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3BlcmlvZCddKSB7IHRoaXMucGVyaW9kID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS5wZXJpb2QsIG9wdGlvbnMpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnR3JvdXAuY2hhcmFjdGVyaXN0aWMnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCdjb2RlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTKCd2YWx1ZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygnZXhjbHVkZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncGVyaW9kJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBHcm91cE1lbWJlciB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBHcm91cE1lbWJlckFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBlbnRpdHkgdGhhdCBpcyBhIG1lbWJlciBvZiB0aGUgZ3JvdXAuIE11c3QgYmUgY29uc2lzdGVudCB3aXRoIEdyb3VwLnR5cGUuXHJcbiAgICovXHJcbiAgZW50aXR5OiBmaGlyLlJlZmVyZW5jZUFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBOZWVkIHRvIHRyYWNrIHdobyB3YXMgaW4gYSBncm91cCBhdCBhICBwYXJ0aWN1bGFyIHRpbWUuXHJcbiAgICovXHJcbiAgcGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTb21ldGltZXMgeW91IGRvbid0IGtub3cgd2hlbiBzb21lb25lIHN0b3BwZWQgYmVpbmcgaW4gYSBncm91cCwgYnV0IG5vdCB3aGVuLlxyXG4gICAqL1xyXG4gIGluYWN0aXZlPzogZmhpci5GaGlyQm9vbGVhbnxib29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogR3JvdXAubWVtYmVyLmluYWN0aXZlXHJcbiAgICovXHJcbiAgX2luYWN0aXZlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIE9mdGVuIHRoZSBvbmx5IHRoaW5nIG9mIGludGVyZXN0IGFib3V0IGEgZ3JvdXAgaXMgXCJ3aG8ncyBpbiBpdFwiLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdyb3VwTWVtYmVyIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnR3JvdXBNZW1iZXInO1xyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBlbnRpdHkgdGhhdCBpcyBhIG1lbWJlciBvZiB0aGUgZ3JvdXAuIE11c3QgYmUgY29uc2lzdGVudCB3aXRoIEdyb3VwLnR5cGUuXHJcbiAgICovXHJcbiAgcHVibGljIGVudGl0eTogZmhpci5SZWZlcmVuY2V8bnVsbDtcclxuICAvKipcclxuICAgKiBOZWVkIHRvIHRyYWNrIHdobyB3YXMgaW4gYSBncm91cCBhdCBhICBwYXJ0aWN1bGFyIHRpbWUuXHJcbiAgICovXHJcbiAgcHVibGljIHBlcmlvZD86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTb21ldGltZXMgeW91IGRvbid0IGtub3cgd2hlbiBzb21lb25lIHN0b3BwZWQgYmVpbmcgaW4gYSBncm91cCwgYnV0IG5vdCB3aGVuLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpbmFjdGl2ZT86IGZoaXIuRmhpckJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEdyb3VwTWVtYmVyIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8R3JvdXBNZW1iZXJBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnZW50aXR5J10pIHsgdGhpcy5lbnRpdHkgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLmVudGl0eSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmVudGl0eSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3BlcmlvZCddKSB7IHRoaXMucGVyaW9kID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS5wZXJpb2QsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydpbmFjdGl2ZSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5pbmFjdGl2ZSA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHt2YWx1ZTogc291cmNlLmluYWN0aXZlfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19pbmFjdGl2ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmluYWN0aXZlKSB7IHRoaXMuaW5hY3RpdmUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5faW5hY3RpdmUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5pbmFjdGl2ZSA9IG5ldyBmaGlyLkZoaXJCb29sZWFuKHNvdXJjZS5faW5hY3RpdmUgYXMgUGFydGlhbDxmaGlyLkZoaXJCb29sZWFuQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnR3JvdXAubWVtYmVyJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygnZW50aXR5JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdwZXJpb2QnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2luYWN0aXZlJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBHcm91cCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBHcm91cEFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkdyb3VwXCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFsbG93cyB0aGUgZ3JvdXAgdG8gYmUgcmVmZXJlbmNlZCBmcm9tIGV4dGVybmFsIHNwZWNpZmljYXRpb25zLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgd2hhdCB0eXBlIG9mIHJlc291cmNlcyB0aGUgZ3JvdXAgaXMgbWFkZSB1cCBvZi5cclxuICAgKi9cclxuICB0eXBlOiBmaGlyLkZoaXJDb2RlPEdyb3VwVHlwZUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBHcm91cC50eXBlXHJcbiAgICovXHJcbiAgX3R5cGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZXJlIGFyZSB1c2UtY2FzZXMgZm9yIGdyb3VwcyB0aGF0IGRlZmluZSBzcGVjaWZpYyBjb2xsZWN0aW9ucyBvZiBpbmRpdmlkdWFscywgYW5kIG90aGVyIGdyb3VwcyB0aGF0IGRlZmluZSBcInR5cGVzXCIgb2YgaW50ZW5kZWQgaW5kaXZpZHVhbHMuICBUaGUgcmVxdWlyZW1lbnRzIGZvciBib3RoIGtpbmRzIG9mIGdyb3VwcyBhcmUgc2ltaWxhciwgc28gd2UgdXNlIGEgc2luZ2xlIHJlc291cmNlLCBkaXN0aW5ndWlzaGVkIGJ5IHRoaXMgZmxhZy5cclxuICAgKi9cclxuICBhY3R1YWw6IGZoaXIuRmhpckJvb2xlYW58Ym9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEdyb3VwLmFjdHVhbFxyXG4gICAqL1xyXG4gIF9hY3R1YWw/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFByb3ZpZGVzIGEgc3BlY2lmaWMgdHlwZSBvZiByZXNvdXJjZSB0aGUgZ3JvdXAgaW5jbHVkZXM7IGUuZy4gXCJjb3dcIiwgXCJzeXJpbmdlXCIsIGV0Yy5cclxuICAgKi9cclxuICBjb2RlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBVc2VkIHRvIGlkZW50aWZ5IHRoZSBncm91cCBpbiBodW1hbiBjb21tdW5pY2F0aW9uLlxyXG4gICAqL1xyXG4gIG5hbWU/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogR3JvdXAubmFtZVxyXG4gICAqL1xyXG4gIF9uYW1lPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBHcm91cCBzaXplIGlzIGEgY29tbW9uIGRlZmluaW5nIGNoYXJhY3RlcmlzdGljLlxyXG4gICAqL1xyXG4gIHF1YW50aXR5PzogZmhpci5GaGlyVW5zaWduZWRJbnR8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogR3JvdXAucXVhbnRpdHlcclxuICAgKi9cclxuICBfcXVhbnRpdHk/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIE5lZWRzIHRvIGJlIGEgZ2VuZXJpYyBtZWNoYW5pc20gZm9yIGlkZW50aWZ5aW5nIHdoYXQgaW5kaXZpZHVhbHMgY2FuIGJlIHBhcnQgb2YgYSBncm91cC5cclxuICAgKi9cclxuICBjaGFyYWN0ZXJpc3RpYz86IGZoaXIuR3JvdXBDaGFyYWN0ZXJpc3RpY0FyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogT2Z0ZW4gdGhlIG9ubHkgdGhpbmcgb2YgaW50ZXJlc3QgYWJvdXQgYSBncm91cCBpcyBcIndobydzIGluIGl0XCIuXHJcbiAgICovXHJcbiAgbWVtYmVyPzogZmhpci5Hcm91cE1lbWJlckFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgZGVmaW5lZCBjb2xsZWN0aW9uIG9mIGVudGl0aWVzIHRoYXQgbWF5IGJlIGRpc2N1c3NlZCBvciBhY3RlZCB1cG9uIGNvbGxlY3RpdmVseSBidXQgd2hpY2ggYXJlIG5vdCBleHBlY3RlZCB0byBhY3QgY29sbGVjdGl2ZWx5IGFuZCBhcmUgbm90IGZvcm1hbGx5IG9yIGxlZ2FsbHkgcmVjb2duaXplZDsgaS5lLiBhIGNvbGxlY3Rpb24gb2YgZW50aXRpZXMgdGhhdCBpc24ndCBhbiBPcmdhbml6YXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JvdXAgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0dyb3VwJztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIkdyb3VwXCI7XHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIHRoZSBncm91cCB0byBiZSByZWZlcmVuY2VkIGZyb20gZXh0ZXJuYWwgc3BlY2lmaWNhdGlvbnMuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI6IGZoaXIuSWRlbnRpZmllcltdO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgd2hhdCB0eXBlIG9mIHJlc291cmNlcyB0aGUgZ3JvdXAgaXMgbWFkZSB1cCBvZi5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZTogZmhpci5GaGlyQ29kZTxHcm91cFR5cGVDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBUaGVyZSBhcmUgdXNlLWNhc2VzIGZvciBncm91cHMgdGhhdCBkZWZpbmUgc3BlY2lmaWMgY29sbGVjdGlvbnMgb2YgaW5kaXZpZHVhbHMsIGFuZCBvdGhlciBncm91cHMgdGhhdCBkZWZpbmUgXCJ0eXBlc1wiIG9mIGludGVuZGVkIGluZGl2aWR1YWxzLiAgVGhlIHJlcXVpcmVtZW50cyBmb3IgYm90aCBraW5kcyBvZiBncm91cHMgYXJlIHNpbWlsYXIsIHNvIHdlIHVzZSBhIHNpbmdsZSByZXNvdXJjZSwgZGlzdGluZ3Vpc2hlZCBieSB0aGlzIGZsYWcuXHJcbiAgICovXHJcbiAgcHVibGljIGFjdHVhbDogZmhpci5GaGlyQm9vbGVhbnxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFByb3ZpZGVzIGEgc3BlY2lmaWMgdHlwZSBvZiByZXNvdXJjZSB0aGUgZ3JvdXAgaW5jbHVkZXM7IGUuZy4gXCJjb3dcIiwgXCJzeXJpbmdlXCIsIGV0Yy5cclxuICAgKi9cclxuICBwdWJsaWMgY29kZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBVc2VkIHRvIGlkZW50aWZ5IHRoZSBncm91cCBpbiBodW1hbiBjb21tdW5pY2F0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBuYW1lPzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBHcm91cCBzaXplIGlzIGEgY29tbW9uIGRlZmluaW5nIGNoYXJhY3RlcmlzdGljLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBxdWFudGl0eT86IGZoaXIuRmhpclVuc2lnbmVkSW50fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOZWVkcyB0byBiZSBhIGdlbmVyaWMgbWVjaGFuaXNtIGZvciBpZGVudGlmeWluZyB3aGF0IGluZGl2aWR1YWxzIGNhbiBiZSBwYXJ0IG9mIGEgZ3JvdXAuXHJcbiAgICovXHJcbiAgcHVibGljIGNoYXJhY3RlcmlzdGljOiBmaGlyLkdyb3VwQ2hhcmFjdGVyaXN0aWNbXTtcclxuICAvKipcclxuICAgKiBPZnRlbiB0aGUgb25seSB0aGluZyBvZiBpbnRlcmVzdCBhYm91dCBhIGdyb3VwIGlzIFwid2hvJ3MgaW4gaXRcIi5cclxuICAgKi9cclxuICBwdWJsaWMgbWVtYmVyOiBmaGlyLkdyb3VwTWVtYmVyW107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgR3JvdXAgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxHcm91cEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdHcm91cCc7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gc291cmNlLmlkZW50aWZpZXIubWFwKCh4KSA9PiBuZXcgZmhpci5JZGVudGlmaWVyKHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaWRlbnRpZmllciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWyd0eXBlJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZTxHcm91cFR5cGVDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2UudHlwZX0sIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50eXBlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3R5cGUnXSkge1xyXG4gICAgICBpZiAodGhpcy50eXBlKSB7IHRoaXMudHlwZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl90eXBlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudHlwZSA9IG5ldyBmaGlyLkZoaXJDb2RlPEdyb3VwVHlwZUNvZGVUeXBlPihzb3VyY2UuX3R5cGUgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2FjdHVhbCddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5hY3R1YWwgPSBuZXcgZmhpci5GaGlyQm9vbGVhbih7dmFsdWU6IHNvdXJjZS5hY3R1YWx9LCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuYWN0dWFsID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2FjdHVhbCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmFjdHVhbCkgeyB0aGlzLmFjdHVhbC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9hY3R1YWwhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5hY3R1YWwgPSBuZXcgZmhpci5GaGlyQm9vbGVhbihzb3VyY2UuX2FjdHVhbCBhcyBQYXJ0aWFsPGZoaXIuRmhpckJvb2xlYW5BcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NvZGUnXSkgeyB0aGlzLmNvZGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmNvZGUsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWyduYW1lJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLm5hbWUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLm5hbWV9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX25hbWUnXSkge1xyXG4gICAgICBpZiAodGhpcy5uYW1lKSB7IHRoaXMubmFtZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9uYW1lISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubmFtZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9uYW1lIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydxdWFudGl0eSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5xdWFudGl0eSA9IG5ldyBmaGlyLkZoaXJVbnNpZ25lZEludCh7dmFsdWU6IHNvdXJjZS5xdWFudGl0eX0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfcXVhbnRpdHknXSkge1xyXG4gICAgICBpZiAodGhpcy5xdWFudGl0eSkgeyB0aGlzLnF1YW50aXR5LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3F1YW50aXR5ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucXVhbnRpdHkgPSBuZXcgZmhpci5GaGlyVW5zaWduZWRJbnQoc291cmNlLl9xdWFudGl0eSBhcyBQYXJ0aWFsPGZoaXIuRmhpclVuc2lnbmVkSW50QXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjaGFyYWN0ZXJpc3RpYyddKSB7IHRoaXMuY2hhcmFjdGVyaXN0aWMgPSBzb3VyY2UuY2hhcmFjdGVyaXN0aWMubWFwKCh4KSA9PiBuZXcgZmhpci5Hcm91cENoYXJhY3RlcmlzdGljKHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY2hhcmFjdGVyaXN0aWMgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnbWVtYmVyJ10pIHsgdGhpcy5tZW1iZXIgPSBzb3VyY2UubWVtYmVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuR3JvdXBNZW1iZXIoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5tZW1iZXIgPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0dyb3VwJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSU1YoJ3R5cGUnLGV4cCwnR3JvdXBUeXBlJyxHcm91cFR5cGVWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygnYWN0dWFsJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdjb2RlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCduYW1lJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdxdWFudGl0eScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnY2hhcmFjdGVyaXN0aWMnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ21lbWJlcicsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=