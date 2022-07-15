import * as fhir from '../fhirJson.js';
/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
export interface RelatedPerson extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "RelatedPerson" | null;
    /**
     * People are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the patient. Examples are national person identifier and local identifier.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * We need to know which patient this RelatedPerson is related to.
     */
    patient: fhir.Reference | null;
    /**
     * We need to know the relationship with the patient since it influences the interpretation of the information attributed to this person.
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * Related persons need to be identified by name, but it is uncommon to need details about multiple other names for that person.
     */
    name?: fhir.HumanName | undefined;
    /**
     * People have (primary) ways to contact them in some way such as phone, email.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
    /**
     * Needed for identification of the person, in combination with (at least) name and birth date.
     */
    gender?: 'female' | 'male' | 'other' | 'unknown' | undefined;
    /**
     * Extended properties for primitive element: RelatedPerson.gender
     */
    _gender?: fhir.FhirElement;
    /**
     * The date on which the related person was born.
     */
    birthDate?: string | undefined;
    /**
     * Extended properties for primitive element: RelatedPerson.birthDate
     */
    _birthDate?: fhir.FhirElement;
    /**
     * Need to keep track where the related person can be contacted per postal mail or visited.
     */
    address?: (fhir.Address | null)[] | undefined;
    /**
     * Many EHR systems have the capability to capture an image of persons. Fits with newer social media usage too.
     */
    photo?: (fhir.Attachment | null)[] | undefined;
    /**
     * The period of time that this relationship is considered to be valid. If there are no dates defined, then the interval is unknown.
     */
    period?: fhir.Period | undefined;
}
//# sourceMappingURL=RelatedPerson.d.ts.map