import * as fhir from '../fhir.js';
import { AdministrativeGenderCodeType } from '../fhirValueSets/AdministrativeGenderCodes.js';
/**
 * Valid arguments for the PractitionerPractitionerRole type.
 */
export interface PractitionerPractitionerRoleArgs extends fhir.BackboneElementArgs {
    /**
     * The organization where the Practitioner performs the roles associated.
     */
    managingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * Need to know what authority the practitioner has - what can they do?
     */
    role?: fhir.CodeableConceptArgs | undefined;
    /**
     * Specific specialty of the practitioner.
     */
    specialty?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Even after the agencies is revoked, the fact that it existed must still be recorded.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * The location(s) at which this practitioner provides care.
     */
    location?: fhir.ReferenceArgs[] | undefined;
    /**
     * The list of healthcare services that this worker provides for this role's Organization/Location(s).
     */
    healthcareService?: fhir.ReferenceArgs[] | undefined;
}
/**
 * The list of roles/organizations that the practitioner is associated with.
 */
export declare class PractitionerPractitionerRole extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The organization where the Practitioner performs the roles associated.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * Need to know what authority the practitioner has - what can they do?
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Specific specialty of the practitioner.
     */
    specialty: fhir.CodeableConcept[];
    /**
     * Even after the agencies is revoked, the fact that it existed must still be recorded.
     */
    period?: fhir.Period | undefined;
    /**
     * The location(s) at which this practitioner provides care.
     */
    location: fhir.Reference[];
    /**
     * The list of healthcare services that this worker provides for this role's Organization/Location(s).
     */
    healthcareService: fhir.Reference[];
    /**
     * Default constructor for PractitionerPractitionerRole - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PractitionerPractitionerRoleArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PractitionerQualification type.
 */
export interface PractitionerQualificationArgs extends fhir.BackboneElementArgs {
    /**
     * Often, specific identities are assigned for the qualification.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Coded representation of the qualification.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * Qualifications are often for a limited period of time, and can be revoked.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Organization that regulates and issues the qualification.
     */
    issuer?: fhir.ReferenceArgs | undefined;
}
/**
 * Qualifications obtained by training and certification.
 */
export declare class PractitionerQualification extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Often, specific identities are assigned for the qualification.
     */
    identifier: fhir.Identifier[];
    /**
     * Coded representation of the qualification.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Qualifications are often for a limited period of time, and can be revoked.
     */
    period?: fhir.Period | undefined;
    /**
     * Organization that regulates and issues the qualification.
     */
    issuer?: fhir.Reference | undefined;
    /**
     * Default constructor for PractitionerQualification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PractitionerQualificationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Practitioner type.
 */
export interface PractitionerArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Practitioner" | undefined;
    /**
     * Often, specific identities are assigned for the agent.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Need to be able to mark a practitioner record as not to be used because it was created in error.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Practitioner.active
     */
    _active?: fhir.FhirElementArgs;
    /**
     * Contact persons need to be identified by name, but it is uncommon to need details about multiple other names for that person.
     */
    name?: fhir.HumanNameArgs | undefined;
    /**
     * Need to know how to reach a practitioner.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * Need to keep track where the practitioner can found during work or for directing mail.
     */
    address?: fhir.AddressArgs[] | undefined;
    /**
     * Needed to address the person correctly.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Practitioner.gender
     */
    _gender?: fhir.FhirElementArgs;
    /**
     * Needed for identification.
     */
    birthDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Practitioner.birthDate
     */
    _birthDate?: fhir.FhirElementArgs;
    /**
     * Many EHR systems have the capability to capture an image of patients and personnel. Fits with newer social media usage too.
     */
    photo?: fhir.AttachmentArgs[] | undefined;
    /**
     * The list of roles/organizations that the practitioner is associated with.
     */
    practitionerRole?: fhir.PractitionerPractitionerRoleArgs[] | undefined;
    /**
     * Qualifications obtained by training and certification.
     */
    qualification?: fhir.PractitionerQualificationArgs[] | undefined;
    /**
     * Knowing which language a practitioner speaks can help in facilitating communication with patients.
     */
    communication?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * A person who is directly or indirectly involved in the provisioning of healthcare.
 */
export declare class Practitioner extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Practitioner";
    /**
     * Often, specific identities are assigned for the agent.
     */
    identifier: fhir.Identifier[];
    /**
     * Need to be able to mark a practitioner record as not to be used because it was created in error.
     */
    active?: fhir.FhirBoolean | undefined;
    /**
     * Contact persons need to be identified by name, but it is uncommon to need details about multiple other names for that person.
     */
    name?: fhir.HumanName | undefined;
    /**
     * Need to know how to reach a practitioner.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Need to keep track where the practitioner can found during work or for directing mail.
     */
    address: fhir.Address[];
    /**
     * Needed to address the person correctly.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | undefined;
    /**
     * Needed for identification.
     */
    birthDate?: fhir.FhirDate | undefined;
    /**
     * Many EHR systems have the capability to capture an image of patients and personnel. Fits with newer social media usage too.
     */
    photo: fhir.Attachment[];
    /**
     * The list of roles/organizations that the practitioner is associated with.
     */
    practitionerRole: fhir.PractitionerPractitionerRole[];
    /**
     * Qualifications obtained by training and certification.
     */
    qualification: fhir.PractitionerQualification[];
    /**
     * Knowing which language a practitioner speaks can help in facilitating communication with patients.
     */
    communication: fhir.CodeableConcept[];
    /**
     * Default constructor for Practitioner - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PractitionerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Practitioner.d.ts.map