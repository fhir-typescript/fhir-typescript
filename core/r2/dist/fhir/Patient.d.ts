import * as fhir from '../fhir.js';
import { AdministrativeGenderCodeType } from '../fhirValueSets/AdministrativeGenderCodes.js';
import { LinkTypeCodeType } from '../fhirValueSets/LinkTypeCodes.js';
/**
 * Valid arguments for the PatientContact type.
 */
export interface PatientContactArgs extends fhir.BackboneElementArgs {
    /**
     * Used to determine which contact person is the most relevant to approach, depending on circumstances.
     */
    relationship?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Contact persons need to be identified by name, but it is uncommon to need details about multiple other names for that contact person.
     */
    name?: fhir.HumanNameArgs | undefined;
    /**
     * People have (primary) ways to contact them in some way such as phone, email.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * Need to keep track where the contact person can be contacted per postal mail or visited.
     */
    address?: fhir.AddressArgs | undefined;
    /**
     * Needed to address the person correctly.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Patient.contact.gender
     */
    _gender?: fhir.FhirElementArgs;
    /**
     * For guardians or business related contacts, the organization is relevant.
     */
    organization?: fhir.ReferenceArgs | undefined;
    /**
     * The period during which this contact person or organization is valid to be contacted relating to this patient.
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * Need to track people you can contact about the patient.
 */
export declare class PatientContact extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Used to determine which contact person is the most relevant to approach, depending on circumstances.
     */
    relationship: fhir.CodeableConcept[];
    /**
     * Contact persons need to be identified by name, but it is uncommon to need details about multiple other names for that contact person.
     */
    name?: fhir.HumanName | undefined;
    /**
     * People have (primary) ways to contact them in some way such as phone, email.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Need to keep track where the contact person can be contacted per postal mail or visited.
     */
    address?: fhir.Address | undefined;
    /**
     * Needed to address the person correctly.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | undefined;
    /**
     * For guardians or business related contacts, the organization is relevant.
     */
    organization?: fhir.Reference | undefined;
    /**
     * The period during which this contact person or organization is valid to be contacted relating to this patient.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for PatientContact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PatientContactArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PatientAnimal type.
 */
export interface PatientAnimalArgs extends fhir.BackboneElementArgs {
    /**
     * Need to know what kind of animal.
     */
    species: fhir.CodeableConceptArgs | null;
    /**
     * May need to know the specific kind within the species.
     */
    breed?: fhir.CodeableConceptArgs | undefined;
    /**
     * Gender status can affect housing and animal behavior.
     */
    genderStatus?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Many clinical systems are extended to care for animal patients as well as human.
 */
export declare class PatientAnimal extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Need to know what kind of animal.
     */
    species: fhir.CodeableConcept | null;
    /**
     * May need to know the specific kind within the species.
     */
    breed?: fhir.CodeableConcept | undefined;
    /**
     * Gender status can affect housing and animal behavior.
     */
    genderStatus?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for PatientAnimal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PatientAnimalArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PatientCommunication type.
 */
export interface PatientCommunicationArgs extends fhir.BackboneElementArgs {
    /**
     * Most systems in multilingual countries will want to convey language. Not all systems actually need the regional dialect.
     */
    language: fhir.CodeableConceptArgs | null;
    /**
     * People that master multiple languages up to certain level may prefer one or more, i.e. feel more confident in communicating in a particular language making other languages sort of a fall back method.
     */
    preferred?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Patient.communication.preferred
     */
    _preferred?: fhir.FhirElementArgs;
}
/**
 * If a patient does not speak the local language, interpreters may be required, so languages spoken and proficiency is an important things to keep track of both for patient and other persons of interest.
 */
export declare class PatientCommunication extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Most systems in multilingual countries will want to convey language. Not all systems actually need the regional dialect.
     */
    language: fhir.CodeableConcept | null;
    /**
     * People that master multiple languages up to certain level may prefer one or more, i.e. feel more confident in communicating in a particular language making other languages sort of a fall back method.
     */
    preferred?: fhir.FhirBoolean | undefined;
    /**
     * Default constructor for PatientCommunication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PatientCommunicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PatientLink type.
 */
export interface PatientLinkArgs extends fhir.BackboneElementArgs {
    /**
     * The other patient resource that the link refers to.
     */
    other: fhir.ReferenceArgs | null;
    /**
     * The type of link between this patient resource and another patient resource.
     */
    type: fhir.FhirCode<LinkTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Patient.link.type
     */
    _type?: fhir.FhirElementArgs;
}
/**
 * There are multiple usecases:   * Duplicate patient records due to the clerical errors associated with the difficulties of identifying humans consistently, and * Distribution of patient information across multiple servers.
 */
export declare class PatientLink extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The other patient resource that the link refers to.
     */
    other: fhir.Reference | null;
    /**
     * The type of link between this patient resource and another patient resource.
     */
    type: fhir.FhirCode<LinkTypeCodeType> | null;
    /**
     * Default constructor for PatientLink - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PatientLinkArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Patient type.
 */
export interface PatientArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Patient" | undefined;
    /**
     * Patients are almost always assigned specific numerical identifiers.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Need to be able to mark a patient record as not to be used because it was created in error.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Patient.active
     */
    _active?: fhir.FhirElementArgs;
    /**
     * Need to be able to track the patient by multiple names. Examples are your official name and a partner name.
     */
    name?: fhir.HumanNameArgs[] | undefined;
    /**
     * People have (primary) ways to contact them in some way such as phone, email.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * Needed for identification of the individual, in combination with (at least) name and birth date. Gender of individual drives many clinical processes.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Patient.gender
     */
    _gender?: fhir.FhirElementArgs;
    /**
     * Age of the individual drives many clinical processes.
     */
    birthDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Patient.birthDate
     */
    _birthDate?: fhir.FhirElementArgs;
    /**
     * The fact that a patient is deceased influences the clinical process. Also, in human communication and relation management it is necessary to know whether the person is alive.
     */
    deceased?: fhir.FhirBoolean | fhir.FhirDateTime | undefined;
    /**
     * The fact that a patient is deceased influences the clinical process. Also, in human communication and relation management it is necessary to know whether the person is alive.
     */
    deceasedBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The fact that a patient is deceased influences the clinical process. Also, in human communication and relation management it is necessary to know whether the person is alive.
     */
    deceasedDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * May need to keep track of patient addresses for contacting, billing or reporting requirements and also to help with identification.
     */
    address?: fhir.AddressArgs[] | undefined;
    /**
     * Most, if not all systems capture it.
     */
    maritalStatus?: fhir.CodeableConceptArgs | undefined;
    /**
     * For disambiguation of multiple-birth children, especially relevant where the care provider doesn't meet the patient, such as labs.
     */
    multipleBirth?: fhir.FhirBoolean | fhir.FhirInteger | undefined;
    /**
     * For disambiguation of multiple-birth children, especially relevant where the care provider doesn't meet the patient, such as labs.
     */
    multipleBirthBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * For disambiguation of multiple-birth children, especially relevant where the care provider doesn't meet the patient, such as labs.
     */
    multipleBirthInteger?: fhir.FhirInteger | number | undefined;
    /**
     * Many EHR systems have the capability to capture an image of the patient. Fits with newer social media usage too.
     */
    photo?: fhir.AttachmentArgs[] | undefined;
    /**
     * Need to track people you can contact about the patient.
     */
    contact?: fhir.PatientContactArgs[] | undefined;
    /**
     * Many clinical systems are extended to care for animal patients as well as human.
     */
    animal?: fhir.PatientAnimalArgs | undefined;
    /**
     * If a patient does not speak the local language, interpreters may be required, so languages spoken and proficiency is an important things to keep track of both for patient and other persons of interest.
     */
    communication?: fhir.PatientCommunicationArgs[] | undefined;
    /**
     * Patient's nominated care provider.
     */
    careProvider?: fhir.ReferenceArgs[] | undefined;
    /**
     * Need to know who recognizes this patient record, manages and updates it.
     */
    managingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * There are multiple usecases:   * Duplicate patient records due to the clerical errors associated with the difficulties of identifying humans consistently, and * Distribution of patient information across multiple servers.
     */
    link?: fhir.PatientLinkArgs[] | undefined;
}
/**
 * Demographics and other administrative information about an individual or animal receiving care or other health-related services.
 */
export declare class Patient extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Patient";
    /**
     * Patients are almost always assigned specific numerical identifiers.
     */
    identifier: fhir.Identifier[];
    /**
     * Need to be able to mark a patient record as not to be used because it was created in error.
     */
    active?: fhir.FhirBoolean | undefined;
    /**
     * Need to be able to track the patient by multiple names. Examples are your official name and a partner name.
     */
    name: fhir.HumanName[];
    /**
     * People have (primary) ways to contact them in some way such as phone, email.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Needed for identification of the individual, in combination with (at least) name and birth date. Gender of individual drives many clinical processes.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | undefined;
    /**
     * Age of the individual drives many clinical processes.
     */
    birthDate?: fhir.FhirDate | undefined;
    /**
     * The fact that a patient is deceased influences the clinical process. Also, in human communication and relation management it is necessary to know whether the person is alive.
     */
    deceased?: (fhir.FhirBoolean | fhir.FhirDateTime) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Patient.deceased[x]
     */
    protected static readonly _fts_deceasedIsChoice: true;
    /**
     * May need to keep track of patient addresses for contacting, billing or reporting requirements and also to help with identification.
     */
    address: fhir.Address[];
    /**
     * Most, if not all systems capture it.
     */
    maritalStatus?: fhir.CodeableConcept | undefined;
    /**
     * For disambiguation of multiple-birth children, especially relevant where the care provider doesn't meet the patient, such as labs.
     */
    multipleBirth?: (fhir.FhirBoolean | fhir.FhirInteger) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Patient.multipleBirth[x]
     */
    protected static readonly _fts_multipleBirthIsChoice: true;
    /**
     * Many EHR systems have the capability to capture an image of the patient. Fits with newer social media usage too.
     */
    photo: fhir.Attachment[];
    /**
     * Need to track people you can contact about the patient.
     */
    contact: fhir.PatientContact[];
    /**
     * Many clinical systems are extended to care for animal patients as well as human.
     */
    animal?: fhir.PatientAnimal | undefined;
    /**
     * If a patient does not speak the local language, interpreters may be required, so languages spoken and proficiency is an important things to keep track of both for patient and other persons of interest.
     */
    communication: fhir.PatientCommunication[];
    /**
     * Patient's nominated care provider.
     */
    careProvider: fhir.Reference[];
    /**
     * Need to know who recognizes this patient record, manages and updates it.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * There are multiple usecases:   * Duplicate patient records due to the clerical errors associated with the difficulties of identifying humans consistently, and * Distribution of patient information across multiple servers.
     */
    link: fhir.PatientLink[];
    /**
     * Default constructor for Patient - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PatientArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Patient.d.ts.map