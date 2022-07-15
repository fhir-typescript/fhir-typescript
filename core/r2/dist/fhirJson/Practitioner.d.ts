import * as fhir from '../fhirJson.js';
/**
 * The list of roles/organizations that the practitioner is associated with.
 */
export interface PractitionerPractitionerRole extends fhir.BackboneElement {
    /**
     * The organization where the Practitioner performs the roles associated.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * Need to know what authority the practitioner has - what can they do?
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Specific specialty of the practitioner.
     */
    specialty?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Even after the agencies is revoked, the fact that it existed must still be recorded.
     */
    period?: fhir.Period | undefined;
    /**
     * The location(s) at which this practitioner provides care.
     */
    location?: (fhir.Reference | null)[] | undefined;
    /**
     * The list of healthcare services that this worker provides for this role's Organization/Location(s).
     */
    healthcareService?: (fhir.Reference | null)[] | undefined;
}
/**
 * Qualifications obtained by training and certification.
 */
export interface PractitionerQualification extends fhir.BackboneElement {
    /**
     * Often, specific identities are assigned for the qualification.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Coded representation of the qualification.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Qualifications are often for a limited period of time, and can be revoked.
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
     * Often, specific identities are assigned for the agent.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Need to be able to mark a practitioner record as not to be used because it was created in error.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Practitioner.active
     */
    _active?: fhir.FhirElement;
    /**
     * Contact persons need to be identified by name, but it is uncommon to need details about multiple other names for that person.
     */
    name?: fhir.HumanName | undefined;
    /**
     * Need to know how to reach a practitioner.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
    /**
     * Need to keep track where the practitioner can found during work or for directing mail.
     */
    address?: (fhir.Address | null)[] | undefined;
    /**
     * Needed to address the person correctly.
     */
    gender?: 'female' | 'male' | 'other' | 'unknown' | undefined;
    /**
     * Extended properties for primitive element: Practitioner.gender
     */
    _gender?: fhir.FhirElement;
    /**
     * Needed for identification.
     */
    birthDate?: string | undefined;
    /**
     * Extended properties for primitive element: Practitioner.birthDate
     */
    _birthDate?: fhir.FhirElement;
    /**
     * Many EHR systems have the capability to capture an image of patients and personnel. Fits with newer social media usage too.
     */
    photo?: (fhir.Attachment | null)[] | undefined;
    /**
     * The list of roles/organizations that the practitioner is associated with.
     */
    practitionerRole?: (fhir.PractitionerPractitionerRole | null)[] | undefined;
    /**
     * Qualifications obtained by training and certification.
     */
    qualification?: (fhir.PractitionerQualification | null)[] | undefined;
    /**
     * Knowing which language a practitioner speaks can help in facilitating communication with patients.
     */
    communication?: (fhir.CodeableConcept | null)[] | undefined;
}
//# sourceMappingURL=Practitioner.d.ts.map