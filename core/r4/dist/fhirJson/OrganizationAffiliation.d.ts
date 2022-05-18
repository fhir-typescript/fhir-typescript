import * as fhir from '../fhirJson.js';
/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 */
export interface OrganizationAffiliation extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "OrganizationAffiliation";
    /**
     * Business identifiers that are specific to this role.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: OrganizationAffiliation.active
     */
    _active?: fhir.FhirElement;
    /**
     * The period during which the participatingOrganization is affiliated with the primary organization.
     */
    period?: fhir.Period | undefined;
    /**
     * Organization where the role is available (primary organization/has members).
     */
    organization?: fhir.Reference | undefined;
    /**
     * The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of).
     */
    participatingOrganization?: fhir.Reference | undefined;
    /**
     * Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined).
     */
    network?: fhir.Reference[] | undefined;
    /**
     * Definition of the role the participatingOrganization plays in the association.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * Specific specialty of the participatingOrganization in the context of the role.
     */
    specialty?: fhir.CodeableConcept[] | undefined;
    /**
     * The location(s) at which the role occurs.
     */
    location?: fhir.Reference[] | undefined;
    /**
     * Healthcare services provided through the role.
     */
    healthcareService?: fhir.Reference[] | undefined;
    /**
     * Contact details at the participatingOrganization relevant to this Affiliation.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Technical endpoints providing access to services operated for this role.
     */
    endpoint?: fhir.Reference[] | undefined;
}
//# sourceMappingURL=OrganizationAffiliation.d.ts.map