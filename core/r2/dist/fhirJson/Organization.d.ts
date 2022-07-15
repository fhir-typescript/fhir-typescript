import * as fhir from '../fhirJson.js';
/**
 * Need to keep track of assigned contact points within bigger organization.
 */
export interface OrganizationContact extends fhir.BackboneElement {
    /**
     * Need to distinguish between multiple contact persons.
     */
    purpose?: fhir.CodeableConcept | undefined;
    /**
     * Need to be able to track the person by name.
     */
    name?: fhir.HumanName | undefined;
    /**
     * People have (primary) ways to contact them in some way such as phone, email.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
    /**
     * May need to keep track of a contact party's address for contacting, billing or reporting requirements.
     */
    address?: fhir.Address | undefined;
}
/**
 * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, etc.
 */
export interface Organization extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Organization" | null;
    /**
     * Organizations are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the organization.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Need a flag to indicate a record is no longer to be used and should generally be hidden for the user in the UI.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Organization.active
     */
    _active?: fhir.FhirElement;
    /**
     * Need to be able to track the kind of organization that this is - different organization types have different uses.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Need to use the name as the label of the organization.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Organization.name
     */
    _name?: fhir.FhirElement;
    /**
     * Human contact for the organization.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
    /**
     * May need to keep track of the organization's addresses for contacting, billing or reporting requirements.
     */
    address?: (fhir.Address | null)[] | undefined;
    /**
     * Need to be able to track the hierarchy of organizations within an organization.
     */
    partOf?: fhir.Reference | undefined;
    /**
     * Need to keep track of assigned contact points within bigger organization.
     */
    contact?: (fhir.OrganizationContact | null)[] | undefined;
}
//# sourceMappingURL=Organization.d.ts.map