import * as fhir from '../fhir.js';
/**
 * Valid arguments for the OrganizationContact type.
 */
export interface OrganizationContactArgs extends fhir.BackboneElementArgs {
    /**
     * Indicates a purpose for which the contact can be reached.
     */
    purpose?: fhir.CodeableConceptArgs | undefined;
    /**
     * A name associated with the contact.
     */
    name?: fhir.HumanNameArgs | undefined;
    /**
     * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * Visiting or postal addresses for the contact.
     */
    address?: fhir.AddressArgs | undefined;
}
/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export declare class OrganizationContact extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Indicates a purpose for which the contact can be reached.
     */
    purpose?: fhir.CodeableConcept | undefined;
    /**
     * A name associated with the contact.
     */
    name?: fhir.HumanName | undefined;
    /**
     * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Visiting or postal addresses for the contact.
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
     * Identifier for the organization that is used to identify the organization across multiple disparate systems.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Default is true.
     * This active flag is not intended to be used to mark an organizations as temporarily closed or under construction. Instead the Location(s) within the Organization should have the suspended status. If further details of the reason for the suspension are required, then an extension on this element should be used.
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Organization.active
     */
    _active?: fhir.FhirElementArgs;
    /**
     * Organizations can be corporations, wards, sections, clinical teams, government departments, etc. Note that code is generally a classifier of the type of organization; in many applications, codes are used to identity a particular organization (say, ward) as opposed to another of the same type - these are identifiers, not codes
     * When considering if multiple types are appropriate, you should evaluate if child organizations would be a more appropriate use of the concept, as different types likely are in different sub-areas of the organization. This is most likely to be used where type values have orthogonal values, such as a religious, academic and medical center.
     * We expect that some jurisdictions will profile this optionality to be a single cardinality.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * If the name of an organization changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Organization.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the organization.
     */
    alias?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Organization.alias
     */
    _alias?: (fhir.FhirElementArgs | null)[];
    /**
     * The use code home is not to be used. Note that these contacts are not the contact details of people who are employed by or represent the organization, but official contacts for the organization itself.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * Organization may have multiple addresses with different uses or applicable periods. The use code home is not to be used.
     */
    address?: fhir.AddressArgs[] | undefined;
    /**
     * The organization of which this organization forms a part.
     */
    partOf?: fhir.ReferenceArgs | undefined;
    /**
     * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
     */
    contact?: fhir.OrganizationContactArgs[] | undefined;
    /**
     * Technical endpoints providing access to services operated for the organization.
     */
    endpoint?: fhir.ReferenceArgs[] | undefined;
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
     * Identifier for the organization that is used to identify the organization across multiple disparate systems.
     */
    identifier: fhir.Identifier[];
    /**
     * Default is true.
     * This active flag is not intended to be used to mark an organizations as temporarily closed or under construction. Instead the Location(s) within the Organization should have the suspended status. If further details of the reason for the suspension are required, then an extension on this element should be used.
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: fhir.FhirBoolean | undefined;
    /**
     * Organizations can be corporations, wards, sections, clinical teams, government departments, etc. Note that code is generally a classifier of the type of organization; in many applications, codes are used to identity a particular organization (say, ward) as opposed to another of the same type - these are identifiers, not codes
     * When considering if multiple types are appropriate, you should evaluate if child organizations would be a more appropriate use of the concept, as different types likely are in different sub-areas of the organization. This is most likely to be used where type values have orthogonal values, such as a religious, academic and medical center.
     * We expect that some jurisdictions will profile this optionality to be a single cardinality.
     */
    type: fhir.CodeableConcept[];
    /**
     * If the name of an organization changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: fhir.FhirString | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the organization.
     */
    alias: fhir.FhirString[];
    /**
     * The use code home is not to be used. Note that these contacts are not the contact details of people who are employed by or represent the organization, but official contacts for the organization itself.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Organization may have multiple addresses with different uses or applicable periods. The use code home is not to be used.
     */
    address: fhir.Address[];
    /**
     * The organization of which this organization forms a part.
     */
    partOf?: fhir.Reference | undefined;
    /**
     * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
     */
    contact: fhir.OrganizationContact[];
    /**
     * Technical endpoints providing access to services operated for the organization.
     */
    endpoint: fhir.Reference[];
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