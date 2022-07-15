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
     * Level of assurance that this link is actually associated with the target resource.
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
     * Level of assurance that this link is actually associated with the target resource.
     */
    assurance?: fhir.FhirCode<IdentityAssuranceLevelCodeType> | undefined;
    /**
     * Default constructor for PersonLink - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PersonLinkArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * People are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the person. Examples are national person identifier and local identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Need to be able to track the person by multiple names. Examples are your official name and a partner name.
     */
    name?: fhir.HumanNameArgs[] | undefined;
    /**
     * People have (primary) ways to contact them in some way such as phone, email.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * Needed for identification of the person, in combination with (at least) name and birth date. Gender of person drives many clinical processes.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Person.gender
     */
    _gender?: fhir.FhirElementArgs;
    /**
     * Age of person drives many clinical processes, and is often used in performing identification of the person. Times are not included so as to not confuse things with potential timezone issues.
     */
    birthDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Person.birthDate
     */
    _birthDate?: fhir.FhirElementArgs;
    /**
     * May need to keep track of person's addresses for contacting, billing or reporting requirements and also to help with identification.
     */
    address?: fhir.AddressArgs[] | undefined;
    /**
     * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
     */
    photo?: fhir.AttachmentArgs | undefined;
    /**
     * Need to know who recognizes this person record, manages and updates it.
     */
    managingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * Need to be able to mark a person record as not to be used because it was created in error.
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
     * People are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the person. Examples are national person identifier and local identifier.
     */
    identifier: fhir.Identifier[];
    /**
     * Need to be able to track the person by multiple names. Examples are your official name and a partner name.
     */
    name: fhir.HumanName[];
    /**
     * People have (primary) ways to contact them in some way such as phone, email.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Needed for identification of the person, in combination with (at least) name and birth date. Gender of person drives many clinical processes.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | undefined;
    /**
     * Age of person drives many clinical processes, and is often used in performing identification of the person. Times are not included so as to not confuse things with potential timezone issues.
     */
    birthDate?: fhir.FhirDate | undefined;
    /**
     * May need to keep track of person's addresses for contacting, billing or reporting requirements and also to help with identification.
     */
    address: fhir.Address[];
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
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Person.d.ts.map