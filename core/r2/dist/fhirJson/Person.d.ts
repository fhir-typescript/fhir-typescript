import * as fhir from '../fhirJson.js';
/**
 * Link to a resource that concerns the same actual person.
 */
export interface PersonLink extends fhir.BackboneElement {
    /**
     * The resource to which this actual person is associated.
     */
    target: fhir.Reference | null;
    /**
     * Level of assurance that this link is actually associated with the target resource.
     */
    assurance?: 'level1' | 'level2' | 'level3' | 'level4' | undefined;
    /**
     * Extended properties for primitive element: Person.link.assurance
     */
    _assurance?: fhir.FhirElement;
}
/**
 * Demographics and administrative information about a person independent of a specific health-related context.
 */
export interface Person extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Person" | null;
    /**
     * People are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the person. Examples are national person identifier and local identifier.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Need to be able to track the person by multiple names. Examples are your official name and a partner name.
     */
    name?: (fhir.HumanName | null)[] | undefined;
    /**
     * People have (primary) ways to contact them in some way such as phone, email.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
    /**
     * Needed for identification of the person, in combination with (at least) name and birth date. Gender of person drives many clinical processes.
     */
    gender?: 'female' | 'male' | 'other' | 'unknown' | undefined;
    /**
     * Extended properties for primitive element: Person.gender
     */
    _gender?: fhir.FhirElement;
    /**
     * Age of person drives many clinical processes, and is often used in performing identification of the person. Times are not included so as to not confuse things with potential timezone issues.
     */
    birthDate?: string | undefined;
    /**
     * Extended properties for primitive element: Person.birthDate
     */
    _birthDate?: fhir.FhirElement;
    /**
     * May need to keep track of person's addresses for contacting, billing or reporting requirements and also to help with identification.
     */
    address?: (fhir.Address | null)[] | undefined;
    /**
     * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
     */
    photo?: fhir.Attachment | undefined;
    /**
     * Need to know who recognizes this person record, manages and updates it.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * Need to be able to mark a person record as not to be used because it was created in error.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Person.active
     */
    _active?: fhir.FhirElement;
    /**
     * Link to a resource that concerns the same actual person.
     */
    link?: (fhir.PersonLink | null)[] | undefined;
}
//# sourceMappingURL=Person.d.ts.map