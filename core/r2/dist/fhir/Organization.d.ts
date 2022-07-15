import * as fhir from '../fhir.js';
/**
 * Valid arguments for the OrganizationContact type.
 */
export interface OrganizationContactArgs extends fhir.BackboneElementArgs {
    /**
     * Need to distinguish between multiple contact persons.
     */
    purpose?: fhir.CodeableConceptArgs | undefined;
    /**
     * Need to be able to track the person by name.
     */
    name?: fhir.HumanNameArgs | undefined;
    /**
     * People have (primary) ways to contact them in some way such as phone, email.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * May need to keep track of a contact party's address for contacting, billing or reporting requirements.
     */
    address?: fhir.AddressArgs | undefined;
}
/**
 * Need to keep track of assigned contact points within bigger organization.
 */
export declare class OrganizationContact extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    telecom: fhir.ContactPoint[];
    /**
     * May need to keep track of a contact party's address for contacting, billing or reporting requirements.
     */
    address?: fhir.Address | undefined;
    /**
     * Default constructor for OrganizationContact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OrganizationContactArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Organization type.
 */
export interface OrganizationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Organization" | undefined;
    /**
     * Organizations are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the organization.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Need a flag to indicate a record is no longer to be used and should generally be hidden for the user in the UI.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Organization.active
     */
    _active?: fhir.FhirElementArgs;
    /**
     * Need to be able to track the kind of organization that this is - different organization types have different uses.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Need to use the name as the label of the organization.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Organization.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Human contact for the organization.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * May need to keep track of the organization's addresses for contacting, billing or reporting requirements.
     */
    address?: fhir.AddressArgs[] | undefined;
    /**
     * Need to be able to track the hierarchy of organizations within an organization.
     */
    partOf?: fhir.ReferenceArgs | undefined;
    /**
     * Need to keep track of assigned contact points within bigger organization.
     */
    contact?: fhir.OrganizationContactArgs[] | undefined;
}
/**
 * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, etc.
 */
export declare class Organization extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Organization";
    /**
     * Organizations are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the organization.
     */
    identifier: fhir.Identifier[];
    /**
     * Need a flag to indicate a record is no longer to be used and should generally be hidden for the user in the UI.
     */
    active?: fhir.FhirBoolean | undefined;
    /**
     * Need to be able to track the kind of organization that this is - different organization types have different uses.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Need to use the name as the label of the organization.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Human contact for the organization.
     */
    telecom: fhir.ContactPoint[];
    /**
     * May need to keep track of the organization's addresses for contacting, billing or reporting requirements.
     */
    address: fhir.Address[];
    /**
     * Need to be able to track the hierarchy of organizations within an organization.
     */
    partOf?: fhir.Reference | undefined;
    /**
     * Need to keep track of assigned contact points within bigger organization.
     */
    contact: fhir.OrganizationContact[];
    /**
     * Default constructor for Organization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OrganizationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Organization.d.ts.map