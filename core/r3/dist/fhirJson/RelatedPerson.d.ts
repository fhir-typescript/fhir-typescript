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
     * Identifier for a person within a particular scope.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: RelatedPerson.active
     */
    _active?: fhir.FhirElement;
    /**
     * The patient this person is related to.
     */
    patient: fhir.Reference | null;
    /**
     * The nature of the relationship between a patient and the related person.
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * A name associated with the person.
     */
    name?: (fhir.HumanName | null)[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
    /**
     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
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
     * Address where the related person can be contacted or visited.
     */
    address?: (fhir.Address | null)[] | undefined;
    /**
     * Image of the person.
     */
    photo?: (fhir.Attachment | null)[] | undefined;
    /**
     * The period of time that this relationship is considered to be valid. If there are no dates defined, then the interval is unknown.
     */
    period?: fhir.Period | undefined;
}
//# sourceMappingURL=RelatedPerson.d.ts.map