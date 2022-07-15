import * as fhir from '../fhir.js';
import { AdministrativeGenderCodeType } from '../fhirValueSets/AdministrativeGenderCodes.js';
/**
 * Valid arguments for the RelatedPerson type.
 */
export interface RelatedPersonArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "RelatedPerson" | undefined;
    /**
     * People are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the patient. Examples are national person identifier and local identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * We need to know which patient this RelatedPerson is related to.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * We need to know the relationship with the patient since it influences the interpretation of the information attributed to this person.
     */
    relationship?: fhir.CodeableConceptArgs | undefined;
    /**
     * Related persons need to be identified by name, but it is uncommon to need details about multiple other names for that person.
     */
    name?: fhir.HumanNameArgs | undefined;
    /**
     * People have (primary) ways to contact them in some way such as phone, email.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * Needed for identification of the person, in combination with (at least) name and birth date.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RelatedPerson.gender
     */
    _gender?: fhir.FhirElementArgs;
    /**
     * The date on which the related person was born.
     */
    birthDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: RelatedPerson.birthDate
     */
    _birthDate?: fhir.FhirElementArgs;
    /**
     * Need to keep track where the related person can be contacted per postal mail or visited.
     */
    address?: fhir.AddressArgs[] | undefined;
    /**
     * Many EHR systems have the capability to capture an image of persons. Fits with newer social media usage too.
     */
    photo?: fhir.AttachmentArgs[] | undefined;
    /**
     * The period of time that this relationship is considered to be valid. If there are no dates defined, then the interval is unknown.
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
export declare class RelatedPerson extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "RelatedPerson";
    /**
     * People are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the patient. Examples are national person identifier and local identifier.
     */
    identifier: fhir.Identifier[];
    /**
     * We need to know which patient this RelatedPerson is related to.
     */
    patient: fhir.Reference | null;
    /**
     * We need to know the relationship with the patient since it influences the interpretation of the information attributed to this person.
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * Related persons need to be identified by name, but it is uncommon to need details about multiple other names for that person.
     */
    name?: fhir.HumanName | undefined;
    /**
     * People have (primary) ways to contact them in some way such as phone, email.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Needed for identification of the person, in combination with (at least) name and birth date.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | undefined;
    /**
     * The date on which the related person was born.
     */
    birthDate?: fhir.FhirDate | undefined;
    /**
     * Need to keep track where the related person can be contacted per postal mail or visited.
     */
    address: fhir.Address[];
    /**
     * Many EHR systems have the capability to capture an image of persons. Fits with newer social media usage too.
     */
    photo: fhir.Attachment[];
    /**
     * The period of time that this relationship is considered to be valid. If there are no dates defined, then the interval is unknown.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for RelatedPerson - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RelatedPersonArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=RelatedPerson.d.ts.map