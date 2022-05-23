import * as fhir from '../fhirJson.js';
/**
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export interface PractitionerQualification extends fhir.BackboneElement {
    /**
     * An identifier that applies to this person's qualification in this role.
     */
    identifier?: fhir.Identifier[] | undefined;
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
    resourceType: "Practitioner";
    /**
     * An identifier that applies to this person in this role.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Practitioner.active
     */
    _active?: fhir.FhirElement;
    /**
     * The selection of the use property should ensure that there is a single usual name specified, and others use the nickname (alias), old, or other values as appropriate.
     * In general, select the value to be used in the ResourceReference.display based on this:
     * 1. There is more than 1 name
     * 2. Use = usual
     * 3. Period is current to the date of the usage
     * 4. Use = official
     * 5. Other order as decided by internal business rules.
     */
    name?: fhir.HumanName[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and to help with identification.  These typically will have home numbers, or mobile numbers that are not role specific.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * The PractitionerRole does not have an address value on it, as it is expected that the location property be used for this purpose (which has an address).
     */
    address?: fhir.Address[] | undefined;
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
    photo?: fhir.Attachment[] | undefined;
    /**
     * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
     */
    qualification?: fhir.PractitionerQualification[] | undefined;
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    communication?: fhir.CodeableConcept[] | undefined;
}
//# sourceMappingURL=Practitioner.d.ts.map