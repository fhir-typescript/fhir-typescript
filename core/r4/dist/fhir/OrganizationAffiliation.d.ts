import * as fhir from '../fhir.js';
/**
 * Valid arguments for the OrganizationAffiliation type.
 */
export interface OrganizationAffiliationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "OrganizationAffiliation" | undefined;
    /**
     * Business identifiers that are specific to this role.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: OrganizationAffiliation.active
     */
    _active?: fhir.FhirElementArgs;
    /**
     * The period during which the participatingOrganization is affiliated with the primary organization.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Organization where the role is available (primary organization/has members).
     */
    organization?: fhir.ReferenceArgs | undefined;
    /**
     * The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of).
     */
    participatingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined).
     */
    network?: fhir.ReferenceArgs[] | undefined;
    /**
     * Definition of the role the participatingOrganization plays in the association.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Specific specialty of the participatingOrganization in the context of the role.
     */
    specialty?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The location(s) at which the role occurs.
     */
    location?: fhir.ReferenceArgs[] | undefined;
    /**
     * Healthcare services provided through the role.
     */
    healthcareService?: fhir.ReferenceArgs[] | undefined;
    /**
     * Contact details at the participatingOrganization relevant to this Affiliation.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * Technical endpoints providing access to services operated for this role.
     */
    endpoint?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 */
export declare class OrganizationAffiliation extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "OrganizationAffiliation";
    /**
     * Business identifiers that are specific to this role.
     */
    identifier: fhir.Identifier[];
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: fhir.FhirBoolean | undefined;
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
    network: fhir.Reference[];
    /**
     * Definition of the role the participatingOrganization plays in the association.
     */
    code: fhir.CodeableConcept[];
    /**
     * Specific specialty of the participatingOrganization in the context of the role.
     */
    specialty: fhir.CodeableConcept[];
    /**
     * The location(s) at which the role occurs.
     */
    location: fhir.Reference[];
    /**
     * Healthcare services provided through the role.
     */
    healthcareService: fhir.Reference[];
    /**
     * Contact details at the participatingOrganization relevant to this Affiliation.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Technical endpoints providing access to services operated for this role.
     */
    endpoint: fhir.Reference[];
    /**
     * Default constructor for OrganizationAffiliation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OrganizationAffiliationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=OrganizationAffiliation.d.ts.map