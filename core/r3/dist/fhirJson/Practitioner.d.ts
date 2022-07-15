import * as fhir from '../fhirJson.js';
/**
 * Qualifications obtained by training and certification.
 */
export interface PractitionerQualification extends fhir.BackboneElement {
    /**
     * An identifier that applies to this person's qualification in this role.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Coded representation of the qualification.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Period during which the qualification is valid.
     */
    period?: fhir.Period | undefined;
    /**
     * Organization that regulates and issues the qualification.
     */
    issuer?: fhir.Reference | undefined;
}
/**
 * A person who is directly or indirectly involved in the provisioning of healthcare.
 */
export interface Practitioner extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Practitioner" | null;
    /**
     * An identifier that applies to this person in this role.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Default is true.
     * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Practitioner.active
     */
    _active?: fhir.FhirElement;
    /**
     * The selection of the use property should ensure that there is a single usual name specified, and others use the nickname (alias), old, or other values as appropriate.
     * In general select the value to be used in the ResourceReference.display based on this:
     * 1. There is more than 1 name
     * 2. Use = usual
     * 3. Period is current to the date of the usage
     * 4. Use = official
     * 5. Other order as decided by internal business rules.
     */
    name?: (fhir.HumanName | null)[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification
     * These typically will have home numbers, or mobile numbers that are not role specific.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
    /**
     * The PractitionerRole does not have an address value on it, as it is expected that the location property be used for this purpose (which has an address).
     */
    address?: (fhir.Address | null)[] | undefined;
    /**
     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
     */
    gender?: 'female' | 'male' | 'other' | 'unknown' | undefined;
    /**
     * Extended properties for primitive element: Practitioner.gender
     */
    _gender?: fhir.FhirElement;
    /**
     * The date of birth for the practitioner.
     */
    birthDate?: string | undefined;
    /**
     * Extended properties for primitive element: Practitioner.birthDate
     */
    _birthDate?: fhir.FhirElement;
    /**
     * Image of the person.
     */
    photo?: (fhir.Attachment | null)[] | undefined;
    /**
     * Qualifications obtained by training and certification.
     */
    qualification?: (fhir.PractitionerQualification | null)[] | undefined;
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    communication?: (fhir.CodeableConcept | null)[] | undefined;
}
//# sourceMappingURL=Practitioner.d.ts.map