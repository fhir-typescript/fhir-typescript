// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Practitioner
import * as fhir from '../fhir.js';
// @ts-ignore
import { AdministrativeGenderVsValidation } from '../fhirValueSets/AdministrativeGenderVsValidation.js';
/**
 * The list of roles/organizations that the practitioner is associated with.
 */
export class PractitionerPractitionerRole extends fhir.BackboneElement {
    /**
     * Default constructor for PractitionerPractitionerRole - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['managingOrganization']) {
            this.managingOrganization = new fhir.Reference(source.managingOrganization);
        }
        if (source['role']) {
            this.role = new fhir.CodeableConcept(source.role);
        }
        if (source['specialty']) {
            this.specialty = source.specialty.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.specialty = [];
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['location']) {
            this.location = source.location.map((x) => new fhir.Reference(x));
        }
        else {
            this.location = [];
        }
        if (source['healthcareService']) {
            this.healthcareService = source.healthcareService.map((x) => new fhir.Reference(x));
        }
        else {
            this.healthcareService = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Practitioner.practitionerRole';
        }
        this.vOS('managingOrganization', exp);
        this.vOS('role', exp);
        this.vOA('specialty', exp);
        this.vOS('period', exp);
        this.vOA('location', exp);
        this.vOA('healthcareService', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
PractitionerPractitionerRole._fts_dataType = 'PractitionerPractitionerRole';
/**
 * Qualifications obtained by training and certification.
 */
export class PractitionerQualification extends fhir.BackboneElement {
    /**
     * Default constructor for PractitionerQualification - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        else {
            this.code = null;
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['issuer']) {
            this.issuer = new fhir.Reference(source.issuer);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Practitioner.qualification';
        }
        this.vOA('identifier', exp);
        this.vRS('code', exp);
        this.vOS('period', exp);
        this.vOS('issuer', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
PractitionerQualification._fts_dataType = 'PractitionerQualification';
/**
 * A person who is directly or indirectly involved in the provisioning of healthcare.
 */
export class Practitioner extends fhir.DomainResource {
    /**
     * Default constructor for Practitioner - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Practitioner';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['active']) {
            this.active = new fhir.FhirBoolean({ value: source.active });
        }
        if (source['_active']) {
            if (this.active) {
                this.active.addExtendedProperties(source._active);
            }
            else {
                this.active = new fhir.FhirBoolean(source._active);
            }
        }
        if (source['name']) {
            this.name = new fhir.HumanName(source.name);
        }
        if (source['telecom']) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x));
        }
        else {
            this.telecom = [];
        }
        if (source['address']) {
            this.address = source.address.map((x) => new fhir.Address(x));
        }
        else {
            this.address = [];
        }
        if (source['gender']) {
            this.gender = new fhir.FhirCode({ value: source.gender });
        }
        if (source['_gender']) {
            if (this.gender) {
                this.gender.addExtendedProperties(source._gender);
            }
            else {
                this.gender = new fhir.FhirCode(source._gender);
            }
        }
        if (source['birthDate']) {
            this.birthDate = new fhir.FhirDate({ value: source.birthDate });
        }
        if (source['_birthDate']) {
            if (this.birthDate) {
                this.birthDate.addExtendedProperties(source._birthDate);
            }
            else {
                this.birthDate = new fhir.FhirDate(source._birthDate);
            }
        }
        if (source['photo']) {
            this.photo = source.photo.map((x) => new fhir.Attachment(x));
        }
        else {
            this.photo = [];
        }
        if (source['practitionerRole']) {
            this.practitionerRole = source.practitionerRole.map((x) => new fhir.PractitionerPractitionerRole(x));
        }
        else {
            this.practitionerRole = [];
        }
        if (source['qualification']) {
            this.qualification = source.qualification.map((x) => new fhir.PractitionerQualification(x));
        }
        else {
            this.qualification = [];
        }
        if (source['communication']) {
            this.communication = source.communication.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.communication = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Practitioner';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vOS('active', exp);
        this.vOS('name', exp);
        this.vOA('telecom', exp);
        this.vOA('address', exp);
        this.vOSV('gender', exp, 'AdministrativeGender', AdministrativeGenderVsValidation, 'r');
        this.vOS('birthDate', exp);
        this.vOA('photo', exp);
        this.vOA('practitionerRole', exp);
        this.vOA('qualification', exp);
        this.vOA('communication', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Practitioner._fts_dataType = 'Practitioner';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJhY3RpdGlvbmVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9QcmFjdGl0aW9uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQStCeEc7O0dBRUc7QUFDSCxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsSUFBSSxDQUFDLGVBQWU7SUE2QnBFOztPQUVHO0lBQ0gsWUFBWSxTQUFtRCxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUN6RyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQUU7UUFDcEgsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FBRTtRQUMxRSxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDbEc7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzdCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQUU7UUFDdkUsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3pGO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDcEg7WUFBRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1NBQUU7SUFDdkMsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLCtCQUErQixDQUFBO1NBQUU7UUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBeEREOztHQUVHO0FBQzZCLDBDQUFhLEdBQVUsOEJBQThCLENBQUM7QUE2RXhGOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHlCQUEwQixTQUFRLElBQUksQ0FBQyxlQUFlO0lBcUJqRTs7T0FFRztJQUNILFlBQVksU0FBZ0QsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDdEcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDaEc7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQUU7YUFDckU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzFCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQUU7UUFDdkUsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FBRTtJQUM1RSxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsNEJBQTRCLENBQUE7U0FBRTtRQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQTNDRDs7R0FFRztBQUM2Qix1Q0FBYSxHQUFVLDJCQUEyQixDQUFDO0FBNEdyRjs7R0FFRztBQUNILE1BQU0sT0FBTyxZQUFhLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUFxRG5EOztPQUVHO0lBQ0gsWUFBWSxTQUFtQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUN6RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFDO1FBQ25DLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUNoRztZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDOUIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3JGLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxPQUFRLENBQUMsQ0FBQzthQUFFO2lCQUNuRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBd0MsQ0FBQyxDQUFDO2FBQUU7U0FDOUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUFFO1FBQ3BFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUN6RjtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDM0IsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3BGO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FBRTtRQUMzQixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUErQixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ2hILElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxPQUFRLENBQUMsQ0FBQzthQUFFO2lCQUNuRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBK0IsTUFBTSxDQUFDLE9BQWlDLENBQUMsQ0FBQzthQUFFO1NBQ2xIO1FBQ0QsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQzNGLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxVQUFXLENBQUMsQ0FBQzthQUFFO2lCQUM1RTtnQkFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBd0MsQ0FBQyxDQUFDO2FBQUU7U0FDOUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDakY7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQ3pCLElBQUksTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3BJO1lBQUUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQ3BDLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3hIO1lBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUNqQyxJQUFJLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDOUc7WUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztTQUFFO0lBQ25DLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxjQUFjLENBQUE7U0FBRTtRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsc0JBQXNCLEVBQUMsZ0NBQWdDLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDbkYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUM3QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQTVHRDs7R0FFRztBQUM2QiwwQkFBYSxHQUFVLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMi5jb3JlIHZlcnNpb246IDEuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogUHJhY3RpdGlvbmVyXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBBZG1pbmlzdHJhdGl2ZUdlbmRlckNvZGVzLCAgQWRtaW5pc3RyYXRpdmVHZW5kZXJDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQWRtaW5pc3RyYXRpdmVHZW5kZXJDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQWRtaW5pc3RyYXRpdmVHZW5kZXJWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0FkbWluaXN0cmF0aXZlR2VuZGVyVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFByYWN0aXRpb25lclByYWN0aXRpb25lclJvbGUgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJhY3RpdGlvbmVyUHJhY3RpdGlvbmVyUm9sZUFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvcmdhbml6YXRpb24gd2hlcmUgdGhlIFByYWN0aXRpb25lciBwZXJmb3JtcyB0aGUgcm9sZXMgYXNzb2NpYXRlZC5cclxuICAgKi9cclxuICBtYW5hZ2luZ09yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogTmVlZCB0byBrbm93IHdoYXQgYXV0aG9yaXR5IHRoZSBwcmFjdGl0aW9uZXIgaGFzIC0gd2hhdCBjYW4gdGhleSBkbz9cclxuICAgKi9cclxuICByb2xlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTcGVjaWZpYyBzcGVjaWFsdHkgb2YgdGhlIHByYWN0aXRpb25lci5cclxuICAgKi9cclxuICBzcGVjaWFsdHk/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXZlbiBhZnRlciB0aGUgYWdlbmNpZXMgaXMgcmV2b2tlZCwgdGhlIGZhY3QgdGhhdCBpdCBleGlzdGVkIG11c3Qgc3RpbGwgYmUgcmVjb3JkZWQuXHJcbiAgICovXHJcbiAgcGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbG9jYXRpb24ocykgYXQgd2hpY2ggdGhpcyBwcmFjdGl0aW9uZXIgcHJvdmlkZXMgY2FyZS5cclxuICAgKi9cclxuICBsb2NhdGlvbj86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbGlzdCBvZiBoZWFsdGhjYXJlIHNlcnZpY2VzIHRoYXQgdGhpcyB3b3JrZXIgcHJvdmlkZXMgZm9yIHRoaXMgcm9sZSdzIE9yZ2FuaXphdGlvbi9Mb2NhdGlvbihzKS5cclxuICAgKi9cclxuICBoZWFsdGhjYXJlU2VydmljZT86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBsaXN0IG9mIHJvbGVzL29yZ2FuaXphdGlvbnMgdGhhdCB0aGUgcHJhY3RpdGlvbmVyIGlzIGFzc29jaWF0ZWQgd2l0aC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcmFjdGl0aW9uZXJQcmFjdGl0aW9uZXJSb2xlIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUHJhY3RpdGlvbmVyUHJhY3RpdGlvbmVyUm9sZSc7XHJcbiAgLyoqXHJcbiAgICogVGhlIG9yZ2FuaXphdGlvbiB3aGVyZSB0aGUgUHJhY3RpdGlvbmVyIHBlcmZvcm1zIHRoZSByb2xlcyBhc3NvY2lhdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBtYW5hZ2luZ09yZ2FuaXphdGlvbj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOZWVkIHRvIGtub3cgd2hhdCBhdXRob3JpdHkgdGhlIHByYWN0aXRpb25lciBoYXMgLSB3aGF0IGNhbiB0aGV5IGRvP1xyXG4gICAqL1xyXG4gIHB1YmxpYyByb2xlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmljIHNwZWNpYWx0eSBvZiB0aGUgcHJhY3RpdGlvbmVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzcGVjaWFsdHk6IGZoaXIuQ29kZWFibGVDb25jZXB0W107XHJcbiAgLyoqXHJcbiAgICogRXZlbiBhZnRlciB0aGUgYWdlbmNpZXMgaXMgcmV2b2tlZCwgdGhlIGZhY3QgdGhhdCBpdCBleGlzdGVkIG11c3Qgc3RpbGwgYmUgcmVjb3JkZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHBlcmlvZD86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbG9jYXRpb24ocykgYXQgd2hpY2ggdGhpcyBwcmFjdGl0aW9uZXIgcHJvdmlkZXMgY2FyZS5cclxuICAgKi9cclxuICBwdWJsaWMgbG9jYXRpb246IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogVGhlIGxpc3Qgb2YgaGVhbHRoY2FyZSBzZXJ2aWNlcyB0aGF0IHRoaXMgd29ya2VyIHByb3ZpZGVzIGZvciB0aGlzIHJvbGUncyBPcmdhbml6YXRpb24vTG9jYXRpb24ocykuXHJcbiAgICovXHJcbiAgcHVibGljIGhlYWx0aGNhcmVTZXJ2aWNlOiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFByYWN0aXRpb25lclByYWN0aXRpb25lclJvbGUgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxQcmFjdGl0aW9uZXJQcmFjdGl0aW9uZXJSb2xlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ21hbmFnaW5nT3JnYW5pemF0aW9uJ10pIHsgdGhpcy5tYW5hZ2luZ09yZ2FuaXphdGlvbiA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UubWFuYWdpbmdPcmdhbml6YXRpb24pOyB9XHJcbiAgICBpZiAoc291cmNlWydyb2xlJ10pIHsgdGhpcy5yb2xlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5yb2xlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3BlY2lhbHR5J10pIHsgdGhpcy5zcGVjaWFsdHkgPSBzb3VyY2Uuc3BlY2lhbHR5Lm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3BlY2lhbHR5ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3BlcmlvZCddKSB7IHRoaXMucGVyaW9kID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS5wZXJpb2QpOyB9XHJcbiAgICBpZiAoc291cmNlWydsb2NhdGlvbiddKSB7IHRoaXMubG9jYXRpb24gPSBzb3VyY2UubG9jYXRpb24ubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5sb2NhdGlvbiA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydoZWFsdGhjYXJlU2VydmljZSddKSB7IHRoaXMuaGVhbHRoY2FyZVNlcnZpY2UgPSBzb3VyY2UuaGVhbHRoY2FyZVNlcnZpY2UubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5oZWFsdGhjYXJlU2VydmljZSA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnUHJhY3RpdGlvbmVyLnByYWN0aXRpb25lclJvbGUnIH1cclxuICAgIHRoaXMudk9TKCdtYW5hZ2luZ09yZ2FuaXphdGlvbicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3JvbGUnLGV4cClcclxuICAgIHRoaXMudk9BKCdzcGVjaWFsdHknLGV4cClcclxuICAgIHRoaXMudk9TKCdwZXJpb2QnLGV4cClcclxuICAgIHRoaXMudk9BKCdsb2NhdGlvbicsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2hlYWx0aGNhcmVTZXJ2aWNlJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgUHJhY3RpdGlvbmVyUXVhbGlmaWNhdGlvbiB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBQcmFjdGl0aW9uZXJRdWFsaWZpY2F0aW9uQXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogT2Z0ZW4sIHNwZWNpZmljIGlkZW50aXRpZXMgYXJlIGFzc2lnbmVkIGZvciB0aGUgcXVhbGlmaWNhdGlvbi5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBDb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgcXVhbGlmaWNhdGlvbi5cclxuICAgKi9cclxuICBjb2RlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8bnVsbDtcclxuICAvKipcclxuICAgKiBRdWFsaWZpY2F0aW9ucyBhcmUgb2Z0ZW4gZm9yIGEgbGltaXRlZCBwZXJpb2Qgb2YgdGltZSwgYW5kIGNhbiBiZSByZXZva2VkLlxyXG4gICAqL1xyXG4gIHBlcmlvZD86IGZoaXIuUGVyaW9kQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogT3JnYW5pemF0aW9uIHRoYXQgcmVndWxhdGVzIGFuZCBpc3N1ZXMgdGhlIHF1YWxpZmljYXRpb24uXHJcbiAgICovXHJcbiAgaXNzdWVyPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFF1YWxpZmljYXRpb25zIG9idGFpbmVkIGJ5IHRyYWluaW5nIGFuZCBjZXJ0aWZpY2F0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByYWN0aXRpb25lclF1YWxpZmljYXRpb24gZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdQcmFjdGl0aW9uZXJRdWFsaWZpY2F0aW9uJztcclxuICAvKipcclxuICAgKiBPZnRlbiwgc3BlY2lmaWMgaWRlbnRpdGllcyBhcmUgYXNzaWduZWQgZm9yIHRoZSBxdWFsaWZpY2F0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBDb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgcXVhbGlmaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgY29kZTogZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbDtcclxuICAvKipcclxuICAgKiBRdWFsaWZpY2F0aW9ucyBhcmUgb2Z0ZW4gZm9yIGEgbGltaXRlZCBwZXJpb2Qgb2YgdGltZSwgYW5kIGNhbiBiZSByZXZva2VkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogT3JnYW5pemF0aW9uIHRoYXQgcmVndWxhdGVzIGFuZCBpc3N1ZXMgdGhlIHF1YWxpZmljYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIGlzc3Vlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBQcmFjdGl0aW9uZXJRdWFsaWZpY2F0aW9uIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8UHJhY3RpdGlvbmVyUXVhbGlmaWNhdGlvbkFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gc291cmNlLmlkZW50aWZpZXIubWFwKCh4KSA9PiBuZXcgZmhpci5JZGVudGlmaWVyKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaWRlbnRpZmllciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydjb2RlJ10pIHsgdGhpcy5jb2RlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5jb2RlKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29kZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3BlcmlvZCddKSB7IHRoaXMucGVyaW9kID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS5wZXJpb2QpOyB9XHJcbiAgICBpZiAoc291cmNlWydpc3N1ZXInXSkgeyB0aGlzLmlzc3VlciA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuaXNzdWVyKTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1ByYWN0aXRpb25lci5xdWFsaWZpY2F0aW9uJyB9XHJcbiAgICB0aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKVxyXG4gICAgdGhpcy52UlMoJ2NvZGUnLGV4cClcclxuICAgIHRoaXMudk9TKCdwZXJpb2QnLGV4cClcclxuICAgIHRoaXMudk9TKCdpc3N1ZXInLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBQcmFjdGl0aW9uZXIgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJhY3RpdGlvbmVyQXJncyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2VBcmdzIHtcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiUHJhY3RpdGlvbmVyXCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE9mdGVuLCBzcGVjaWZpYyBpZGVudGl0aWVzIGFyZSBhc3NpZ25lZCBmb3IgdGhlIGFnZW50LlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5lZWQgdG8gYmUgYWJsZSB0byBtYXJrIGEgcHJhY3RpdGlvbmVyIHJlY29yZCBhcyBub3QgdG8gYmUgdXNlZCBiZWNhdXNlIGl0IHdhcyBjcmVhdGVkIGluIGVycm9yLlxyXG4gICAqL1xyXG4gIGFjdGl2ZT86IGZoaXIuRmhpckJvb2xlYW58Ym9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFByYWN0aXRpb25lci5hY3RpdmVcclxuICAgKi9cclxuICBfYWN0aXZlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBDb250YWN0IHBlcnNvbnMgbmVlZCB0byBiZSBpZGVudGlmaWVkIGJ5IG5hbWUsIGJ1dCBpdCBpcyB1bmNvbW1vbiB0byBuZWVkIGRldGFpbHMgYWJvdXQgbXVsdGlwbGUgb3RoZXIgbmFtZXMgZm9yIHRoYXQgcGVyc29uLlxyXG4gICAqL1xyXG4gIG5hbWU/OiBmaGlyLkh1bWFuTmFtZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5lZWQgdG8ga25vdyBob3cgdG8gcmVhY2ggYSBwcmFjdGl0aW9uZXIuXHJcbiAgICovXHJcbiAgdGVsZWNvbT86IGZoaXIuQ29udGFjdFBvaW50QXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOZWVkIHRvIGtlZXAgdHJhY2sgd2hlcmUgdGhlIHByYWN0aXRpb25lciBjYW4gZm91bmQgZHVyaW5nIHdvcmsgb3IgZm9yIGRpcmVjdGluZyBtYWlsLlxyXG4gICAqL1xyXG4gIGFkZHJlc3M/OiBmaGlyLkFkZHJlc3NBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5lZWRlZCB0byBhZGRyZXNzIHRoZSBwZXJzb24gY29ycmVjdGx5LlxyXG4gICAqL1xyXG4gIGdlbmRlcj86IGZoaXIuRmhpckNvZGU8QWRtaW5pc3RyYXRpdmVHZW5kZXJDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogUHJhY3RpdGlvbmVyLmdlbmRlclxyXG4gICAqL1xyXG4gIF9nZW5kZXI/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIE5lZWRlZCBmb3IgaWRlbnRpZmljYXRpb24uXHJcbiAgICovXHJcbiAgYmlydGhEYXRlPzogZmhpci5GaGlyRGF0ZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBQcmFjdGl0aW9uZXIuYmlydGhEYXRlXHJcbiAgICovXHJcbiAgX2JpcnRoRGF0ZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogTWFueSBFSFIgc3lzdGVtcyBoYXZlIHRoZSBjYXBhYmlsaXR5IHRvIGNhcHR1cmUgYW4gaW1hZ2Ugb2YgcGF0aWVudHMgYW5kIHBlcnNvbm5lbC4gRml0cyB3aXRoIG5ld2VyIHNvY2lhbCBtZWRpYSB1c2FnZSB0b28uXHJcbiAgICovXHJcbiAgcGhvdG8/OiBmaGlyLkF0dGFjaG1lbnRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsaXN0IG9mIHJvbGVzL29yZ2FuaXphdGlvbnMgdGhhdCB0aGUgcHJhY3RpdGlvbmVyIGlzIGFzc29jaWF0ZWQgd2l0aC5cclxuICAgKi9cclxuICBwcmFjdGl0aW9uZXJSb2xlPzogZmhpci5QcmFjdGl0aW9uZXJQcmFjdGl0aW9uZXJSb2xlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBRdWFsaWZpY2F0aW9ucyBvYnRhaW5lZCBieSB0cmFpbmluZyBhbmQgY2VydGlmaWNhdGlvbi5cclxuICAgKi9cclxuICBxdWFsaWZpY2F0aW9uPzogZmhpci5QcmFjdGl0aW9uZXJRdWFsaWZpY2F0aW9uQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBLbm93aW5nIHdoaWNoIGxhbmd1YWdlIGEgcHJhY3RpdGlvbmVyIHNwZWFrcyBjYW4gaGVscCBpbiBmYWNpbGl0YXRpbmcgY29tbXVuaWNhdGlvbiB3aXRoIHBhdGllbnRzLlxyXG4gICAqL1xyXG4gIGNvbW11bmljYXRpb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHBlcnNvbiB3aG8gaXMgZGlyZWN0bHkgb3IgaW5kaXJlY3RseSBpbnZvbHZlZCBpbiB0aGUgcHJvdmlzaW9uaW5nIG9mIGhlYWx0aGNhcmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJhY3RpdGlvbmVyIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdQcmFjdGl0aW9uZXInO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiUHJhY3RpdGlvbmVyXCI7XHJcbiAgLyoqXHJcbiAgICogT2Z0ZW4sIHNwZWNpZmljIGlkZW50aXRpZXMgYXJlIGFzc2lnbmVkIGZvciB0aGUgYWdlbnQuXHJcbiAgICovXHJcbiAgcHVibGljIGlkZW50aWZpZXI6IGZoaXIuSWRlbnRpZmllcltdO1xyXG4gIC8qKlxyXG4gICAqIE5lZWQgdG8gYmUgYWJsZSB0byBtYXJrIGEgcHJhY3RpdGlvbmVyIHJlY29yZCBhcyBub3QgdG8gYmUgdXNlZCBiZWNhdXNlIGl0IHdhcyBjcmVhdGVkIGluIGVycm9yLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhY3RpdmU/OiBmaGlyLkZoaXJCb29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBDb250YWN0IHBlcnNvbnMgbmVlZCB0byBiZSBpZGVudGlmaWVkIGJ5IG5hbWUsIGJ1dCBpdCBpcyB1bmNvbW1vbiB0byBuZWVkIGRldGFpbHMgYWJvdXQgbXVsdGlwbGUgb3RoZXIgbmFtZXMgZm9yIHRoYXQgcGVyc29uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBuYW1lPzogZmhpci5IdW1hbk5hbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5lZWQgdG8ga25vdyBob3cgdG8gcmVhY2ggYSBwcmFjdGl0aW9uZXIuXHJcbiAgICovXHJcbiAgcHVibGljIHRlbGVjb206IGZoaXIuQ29udGFjdFBvaW50W107XHJcbiAgLyoqXHJcbiAgICogTmVlZCB0byBrZWVwIHRyYWNrIHdoZXJlIHRoZSBwcmFjdGl0aW9uZXIgY2FuIGZvdW5kIGR1cmluZyB3b3JrIG9yIGZvciBkaXJlY3RpbmcgbWFpbC5cclxuICAgKi9cclxuICBwdWJsaWMgYWRkcmVzczogZmhpci5BZGRyZXNzW107XHJcbiAgLyoqXHJcbiAgICogTmVlZGVkIHRvIGFkZHJlc3MgdGhlIHBlcnNvbiBjb3JyZWN0bHkuXHJcbiAgICovXHJcbiAgcHVibGljIGdlbmRlcj86IGZoaXIuRmhpckNvZGU8QWRtaW5pc3RyYXRpdmVHZW5kZXJDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5lZWRlZCBmb3IgaWRlbnRpZmljYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIGJpcnRoRGF0ZT86IGZoaXIuRmhpckRhdGV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE1hbnkgRUhSIHN5c3RlbXMgaGF2ZSB0aGUgY2FwYWJpbGl0eSB0byBjYXB0dXJlIGFuIGltYWdlIG9mIHBhdGllbnRzIGFuZCBwZXJzb25uZWwuIEZpdHMgd2l0aCBuZXdlciBzb2NpYWwgbWVkaWEgdXNhZ2UgdG9vLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwaG90bzogZmhpci5BdHRhY2htZW50W107XHJcbiAgLyoqXHJcbiAgICogVGhlIGxpc3Qgb2Ygcm9sZXMvb3JnYW5pemF0aW9ucyB0aGF0IHRoZSBwcmFjdGl0aW9uZXIgaXMgYXNzb2NpYXRlZCB3aXRoLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwcmFjdGl0aW9uZXJSb2xlOiBmaGlyLlByYWN0aXRpb25lclByYWN0aXRpb25lclJvbGVbXTtcclxuICAvKipcclxuICAgKiBRdWFsaWZpY2F0aW9ucyBvYnRhaW5lZCBieSB0cmFpbmluZyBhbmQgY2VydGlmaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgcXVhbGlmaWNhdGlvbjogZmhpci5QcmFjdGl0aW9uZXJRdWFsaWZpY2F0aW9uW107XHJcbiAgLyoqXHJcbiAgICogS25vd2luZyB3aGljaCBsYW5ndWFnZSBhIHByYWN0aXRpb25lciBzcGVha3MgY2FuIGhlbHAgaW4gZmFjaWxpdGF0aW5nIGNvbW11bmljYXRpb24gd2l0aCBwYXRpZW50cy5cclxuICAgKi9cclxuICBwdWJsaWMgY29tbXVuaWNhdGlvbjogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBQcmFjdGl0aW9uZXIgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxQcmFjdGl0aW9uZXJBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnUHJhY3RpdGlvbmVyJztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2FjdGl2ZSddKSB7IHRoaXMuYWN0aXZlID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oe3ZhbHVlOiBzb3VyY2UuYWN0aXZlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19hY3RpdmUnXSkge1xyXG4gICAgICBpZiAodGhpcy5hY3RpdmUpIHsgdGhpcy5hY3RpdmUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fYWN0aXZlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuYWN0aXZlID0gbmV3IGZoaXIuRmhpckJvb2xlYW4oc291cmNlLl9hY3RpdmUgYXMgUGFydGlhbDxmaGlyLkZoaXJCb29sZWFuQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyduYW1lJ10pIHsgdGhpcy5uYW1lID0gbmV3IGZoaXIuSHVtYW5OYW1lKHNvdXJjZS5uYW1lKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsndGVsZWNvbSddKSB7IHRoaXMudGVsZWNvbSA9IHNvdXJjZS50ZWxlY29tLm1hcCgoeCkgPT4gbmV3IGZoaXIuQ29udGFjdFBvaW50KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMudGVsZWNvbSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydhZGRyZXNzJ10pIHsgdGhpcy5hZGRyZXNzID0gc291cmNlLmFkZHJlc3MubWFwKCh4KSA9PiBuZXcgZmhpci5BZGRyZXNzKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuYWRkcmVzcyA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydnZW5kZXInXSkgeyB0aGlzLmdlbmRlciA9IG5ldyBmaGlyLkZoaXJDb2RlPEFkbWluaXN0cmF0aXZlR2VuZGVyQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLmdlbmRlcn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZ2VuZGVyJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZ2VuZGVyKSB7IHRoaXMuZ2VuZGVyLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2dlbmRlciEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmdlbmRlciA9IG5ldyBmaGlyLkZoaXJDb2RlPEFkbWluaXN0cmF0aXZlR2VuZGVyQ29kZVR5cGU+KHNvdXJjZS5fZ2VuZGVyIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydiaXJ0aERhdGUnXSkgeyB0aGlzLmJpcnRoRGF0ZSA9IG5ldyBmaGlyLkZoaXJEYXRlKHt2YWx1ZTogc291cmNlLmJpcnRoRGF0ZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfYmlydGhEYXRlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuYmlydGhEYXRlKSB7IHRoaXMuYmlydGhEYXRlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2JpcnRoRGF0ZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmJpcnRoRGF0ZSA9IG5ldyBmaGlyLkZoaXJEYXRlKHNvdXJjZS5fYmlydGhEYXRlIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncGhvdG8nXSkgeyB0aGlzLnBob3RvID0gc291cmNlLnBob3RvLm1hcCgoeCkgPT4gbmV3IGZoaXIuQXR0YWNobWVudCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnBob3RvID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3ByYWN0aXRpb25lclJvbGUnXSkgeyB0aGlzLnByYWN0aXRpb25lclJvbGUgPSBzb3VyY2UucHJhY3RpdGlvbmVyUm9sZS5tYXAoKHgpID0+IG5ldyBmaGlyLlByYWN0aXRpb25lclByYWN0aXRpb25lclJvbGUoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5wcmFjdGl0aW9uZXJSb2xlID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3F1YWxpZmljYXRpb24nXSkgeyB0aGlzLnF1YWxpZmljYXRpb24gPSBzb3VyY2UucXVhbGlmaWNhdGlvbi5tYXAoKHgpID0+IG5ldyBmaGlyLlByYWN0aXRpb25lclF1YWxpZmljYXRpb24oeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5xdWFsaWZpY2F0aW9uID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2NvbW11bmljYXRpb24nXSkgeyB0aGlzLmNvbW11bmljYXRpb24gPSBzb3VyY2UuY29tbXVuaWNhdGlvbi5tYXAoKHgpID0+IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmNvbW11bmljYXRpb24gPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1ByYWN0aXRpb25lcicgfVxyXG4gICAgdGhpcy52UlMoJ3Jlc291cmNlVHlwZScsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2lkZW50aWZpZXInLGV4cClcclxuICAgIHRoaXMudk9TKCdhY3RpdmUnLGV4cClcclxuICAgIHRoaXMudk9TKCduYW1lJyxleHApXHJcbiAgICB0aGlzLnZPQSgndGVsZWNvbScsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2FkZHJlc3MnLGV4cClcclxuICAgIHRoaXMudk9TVignZ2VuZGVyJyxleHAsJ0FkbWluaXN0cmF0aXZlR2VuZGVyJyxBZG1pbmlzdHJhdGl2ZUdlbmRlclZzVmFsaWRhdGlvbiwncicpXHJcbiAgICB0aGlzLnZPUygnYmlydGhEYXRlJyxleHApXHJcbiAgICB0aGlzLnZPQSgncGhvdG8nLGV4cClcclxuICAgIHRoaXMudk9BKCdwcmFjdGl0aW9uZXJSb2xlJyxleHApXHJcbiAgICB0aGlzLnZPQSgncXVhbGlmaWNhdGlvbicsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2NvbW11bmljYXRpb24nLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==