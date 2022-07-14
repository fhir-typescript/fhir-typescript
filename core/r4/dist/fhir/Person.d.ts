import * as fhir from '../fhir.js';
import { IdentityAssuranceLevelCodeType } from '../fhirValueSets/IdentityAssuranceLevelCodes.js';
import { AdministrativeGenderCodeType } from '../fhirValueSets/AdministrativeGenderCodes.js';
/**
 * Valid arguments for the PersonLink type.
 */
export interface PersonLinkArgs extends fhir.BackboneElementArgs {
    /**
     * The resource to which this actual person is associated.
     */
    target: fhir.ReferenceArgs | null;
    /**
     * Level of assurance that this link is associated with the target resource.
     */
    assurance?: fhir.FhirCode<IdentityAssuranceLevelCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Person.link.assurance
     */
    _assurance?: fhir.FhirElementArgs;
}
/**
 * Link to a resource that concerns the same actual person.
 */
export declare class PersonLink extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The resource to which this actual person is associated.
     */
    target: fhir.Reference | null;
    /**
     * Level of assurance that this link is associated with the target resource.
     */
    assurance?: fhir.FhirCode<IdentityAssuranceLevelCodeType> | undefined;
    /**
     * Default constructor for PersonLink - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PersonLinkArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Person type.
 */
export interface PersonArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Person" | undefined;
    /**
     * Identifier for a person within a particular scope.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Person may have multiple names with different uses or applicable periods.
     */
    name?: fhir.HumanNameArgs[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * The gender might not match the biological sex as determined by genetics, or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than M and F, though a clear majority of systems and contexts only support M and F.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Person.gender
     */
    _gender?: fhir.FhirElementArgs;
    /**
     * At least an estimated year should be provided as a guess if the real DOB is unknown.
     */
    birthDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Person.birthDate
     */
    _birthDate?: fhir.FhirElementArgs;
    /**
     * Person may have multiple addresses with different uses or applicable periods.
     */
    address?: fhir.AddressArgs[] | undefined;
    /**
     * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
     */
    photo?: fhir.AttachmentArgs | undefined;
    /**
     * The organization that is the custodian of the person record.
     */
    managingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * Whether this person's record is in active use.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Person.active
     */
    _active?: fhir.FhirElementArgs;
    /**
     * Link to a resource that concerns the same actual person.
     */
    link?: fhir.PersonLinkArgs[] | undefined;
}
/**
 * Demographics and administrative information about a person independent of a specific health-related context.
 */
export declare class Person extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Person";
    /**
     * Identifier for a person within a particular scope.
     */
    identifier: fhir.Identifier[];
    /**
     * Person may have multiple names with different uses or applicable periods.
     */
    name: fhir.HumanName[];
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification.
     */
    telecom: fhir.ContactPoint[];
    /**
     * The gender might not match the biological sex as determined by genetics, or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than M and F, though a clear majority of systems and contexts only support M and F.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | undefined;
    /**
     * At least an estimated year should be provided as a guess if the real DOB is unknown.
     */
    birthDate?: fhir.FhirDate | undefined;
    /**
     * Person may have multiple addresses with different uses or applicable periods.
     */
    address: fhir.Address[];
    /**
     * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
     */
    photo?: fhir.Attachment | undefined;
    /**
     * The organization that is the custodian of the person record.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * Whether this person's record is in active use.
     */
    active?: fhir.FhirBoolean | undefined;
    /**
     * Link to a resource that concerns the same actual person.
     */
    link: fhir.PersonLink[];
    /**
     * Default constructor for Person - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PersonArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Person.d.ts.map