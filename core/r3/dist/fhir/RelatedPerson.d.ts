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
     * Identifier for a person within a particular scope.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: RelatedPerson.active
     */
    _active?: fhir.FhirElementArgs;
    /**
     * The patient this person is related to.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * The nature of the relationship between a patient and the related person.
     */
    relationship?: fhir.CodeableConceptArgs | undefined;
    /**
     * A name associated with the person.
     */
    name?: fhir.HumanNameArgs[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
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
     * Address where the related person can be contacted or visited.
     */
    address?: fhir.AddressArgs[] | undefined;
    /**
     * Image of the person.
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
     * Identifier for a person within a particular scope.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: fhir.FhirBoolean | undefined;
    /**
     * The patient this person is related to.
     */
    patient: fhir.Reference | null;
    /**
     * The nature of the relationship between a patient and the related person.
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * A name associated with the person.
     */
    name: fhir.HumanName[];
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | undefined;
    /**
     * The date on which the related person was born.
     */
    birthDate?: fhir.FhirDate | undefined;
    /**
     * Address where the related person can be contacted or visited.
     */
    address: fhir.Address[];
    /**
     * Image of the person.
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