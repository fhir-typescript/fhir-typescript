import * as fhir from '../fhir.js';
import { AdministrativeGenderCodeType } from '../fhirValueSets/AdministrativeGenderCodes.js';
/**
 * Valid arguments for the RelatedPersonCommunication type.
 */
export interface RelatedPersonCommunicationArgs extends fhir.BackboneElementArgs {
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    language: fhir.CodeableConceptArgs | null;
    /**
     * This language is specifically identified for communicating healthcare information.
     */
    preferred?: fhir.FhirBoolean | boolean | undefined;
}
/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export declare class RelatedPersonCommunication extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    language: fhir.CodeableConcept | null;
    /**
     * This language is specifically identified for communicating healthcare information.
     */
    preferred?: fhir.FhirBoolean | undefined;
    /**
     * Default constructor for RelatedPersonCommunication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RelatedPersonCommunicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for language (RelatedPerson.communication.language)
     */
    static get languagePreferredCodings(): {
        readonly Arabic: fhir.Coding;
        readonly Bengali: fhir.Coding;
        readonly Czech: fhir.Coding;
        readonly Danish: fhir.Coding;
        readonly German: fhir.Coding;
        readonly GermanAustria: fhir.Coding;
        readonly GermanSwitzerland: fhir.Coding;
        readonly GermanGermany: fhir.Coding;
        readonly Greek: fhir.Coding;
        readonly English: fhir.Coding;
        readonly EnglishAustralia: fhir.Coding;
        readonly EnglishCanada: fhir.Coding;
        readonly EnglishGreatBritain: fhir.Coding;
        readonly EnglishIndia: fhir.Coding;
        readonly EnglishNewZeland: fhir.Coding;
        readonly EnglishSingapore: fhir.Coding;
        readonly EnglishUnitedStates: fhir.Coding;
        readonly Spanish: fhir.Coding;
        readonly SpanishArgentina: fhir.Coding;
        readonly SpanishSpain: fhir.Coding;
        readonly SpanishUruguay: fhir.Coding;
        readonly Finnish: fhir.Coding;
        readonly French: fhir.Coding;
        readonly FrenchBelgium: fhir.Coding;
        readonly FrenchSwitzerland: fhir.Coding;
        readonly FrenchFrance: fhir.Coding;
        /**
         * Identifier for a person within a particular scope.
         */
        readonly Frysian: fhir.Coding;
        readonly FrysianNetherlands: fhir.Coding; /**
         * The patient this person is related to.
         */
        readonly Hindi: fhir.Coding;
        readonly Croatian: fhir.Coding;
        readonly Italian: fhir.Coding;
        readonly ItalianSwitzerland: fhir.Coding;
        readonly ItalianItaly: fhir.Coding;
        readonly Japanese: fhir.Coding;
        readonly Korean: fhir.Coding;
        readonly Dutch: fhir.Coding;
        readonly DutchBelgium: fhir.Coding;
        readonly DutchNetherlands: fhir.Coding;
        readonly Norwegian: fhir.Coding;
        readonly NorwegianNorway: fhir.Coding;
        readonly Punjabi: fhir.Coding;
        readonly Polish: fhir.Coding;
        readonly Portuguese: fhir.Coding;
        readonly PortugueseBrazil: fhir.Coding;
        readonly Russian: fhir.Coding;
        readonly RussianRussia: fhir.Coding;
        readonly Serbian: fhir.Coding;
        readonly SerbianSerbia: fhir.Coding;
        readonly Swedish: fhir.Coding;
        readonly SwedishSweden: fhir.Coding;
        readonly Telegu: fhir.Coding;
        readonly Chinese: fhir.Coding;
        readonly ChineseChina: fhir.Coding;
        readonly ChineseHongKong: fhir.Coding;
        readonly ChineseSingapore: fhir.Coding;
        readonly ChineseTaiwan: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
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
     * The patient this person is related to.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * The nature of the relationship between a patient and the related person.
     */
    relationship?: fhir.CodeableConceptArgs[] | undefined;
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
     * The date on which the related person was born.
     */
    birthDate?: fhir.FhirDate | string | undefined;
    /**
     * Address where the related person can be contacted or visited.
     */
    address?: fhir.AddressArgs[] | undefined;
    /**
     * Image of the person.
     */
    photo?: fhir.AttachmentArgs[] | undefined;
    /**
     * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
     */
    communication?: fhir.RelatedPersonCommunicationArgs[] | undefined;
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
    relationship: fhir.CodeableConcept[];
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
     * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
     */
    period?: fhir.Period | undefined;
    /**
     * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
     */
    communication: fhir.RelatedPersonCommunication[];
    /**
     * Default constructor for RelatedPerson - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RelatedPersonArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for relationship (RelatedPerson.relationship)
     */
    static get relationshipPreferredCodings(): {
        readonly PersonalRelationshipRoleType: fhir.Coding;
        readonly AdoptiveFather: fhir.Coding;
        readonly AdoptiveMother: fhir.Coding;
        readonly AdoptiveParent: fhir.Coding;
        readonly Aunt: fhir.Coding;
        readonly Brother: fhir.Coding;
        readonly BrotherInLaw: fhir.Coding;
        readonly EmergencyContact: fhir.Coding;
        readonly Child: fhir.Coding;
        readonly AdoptedChild: fhir.Coding;
        readonly FosterChild: fhir.Coding;
        readonly ChildInLaw: fhir.Coding;
        readonly Cousin: fhir.Coding;
        readonly NaturalDaughter: fhir.Coding;
        readonly AdoptedDaughter: fhir.Coding;
        readonly Daughter: fhir.Coding;
        readonly FosterDaughter: fhir.Coding;
        readonly DaughterInLaw: fhir.Coding;
        readonly DomesticPartner: fhir.Coding;
        readonly Employer: fhir.Coding;
        readonly ExtendedFamilyMember: fhir.Coding;
        readonly FederalAgency: fhir.Coding;
        readonly FamilyMember: fhir.Coding;
        readonly FormerSpouse: fhir.Coding;
        readonly UnrelatedFriend: fhir.Coding;
        readonly Father: fhir.Coding;
        readonly FosterFather: fhir.Coding;
        readonly FatherInLaw: fhir.Coding;
        readonly FraternalTwin: fhir.Coding;
        readonly FraternalTwinBrother: fhir.Coding;
        readonly FraternalTwinSister: fhir.Coding;
        readonly GestationalMother: fhir.Coding;
        readonly GreatGrandfather: fhir.Coding;
        readonly GreatGrandmother: fhir.Coding;
        readonly GreatGrandparent: fhir.Coding;
        readonly Grandfather: fhir.Coding;
        readonly Grandmother: fhir.Coding;
        readonly Grandchild: fhir.Coding;
        readonly Granddaughter: fhir.Coding;
        readonly Grandson: fhir.Coding;
        readonly Grandparent: fhir.Coding;
        readonly HalfBrother: fhir.Coding;
        readonly HalfSibling: fhir.Coding;
        readonly HalfSister: fhir.Coding;
        readonly Husband: fhir.Coding;
        readonly InsuranceCompany: fhir.Coding;
        readonly Inlaw: fhir.Coding;
        readonly IdenticalTwin: fhir.Coding;
        readonly IdenticalTwinBrother: fhir.Coding;
        readonly IdenticalTwinSister: fhir.Coding;
        readonly MaternalAunt: fhir.Coding;
        readonly MaternalCousin: fhir.Coding;
        readonly MaternalGreatGrandfather: fhir.Coding;
        readonly MaternalGreatGrandmother: fhir.Coding;
        readonly MaternalGreatGrandparent: fhir.Coding;
        readonly MaternalGrandfather: fhir.Coding;
        readonly MaternalGrandmother: fhir.Coding;
        readonly MaternalGrandparent: fhir.Coding;
        readonly Mother: fhir.Coding;
        readonly FosterMother: fhir.Coding;
        readonly MotherInLaw: fhir.Coding;
        readonly MaternalUncle: fhir.Coding;
        readonly NextOfKin: fhir.Coding;
        readonly Neighbor: fhir.Coding;
        readonly NaturalBrother: fhir.Coding;
        readonly NaturalChild: fhir.Coding;
        readonly Nephew: fhir.Coding;
        readonly NaturalFather: fhir.Coding;
        readonly NaturalFatherOfFetus: fhir.Coding;
        readonly Niece: fhir.Coding;
        readonly NieceNephew: fhir.Coding;
        readonly NaturalMother: fhir.Coding;
        readonly NaturalMotherOfFetus: fhir.Coding;
        readonly NaturalParent: fhir.Coding;
        readonly NaturalSibling: fhir.Coding;
        readonly NaturalSister: fhir.Coding;
        readonly Other: fhir.Coding;
        readonly Self: fhir.Coding;
        readonly PaternalAunt: fhir.Coding;
        readonly PaternalCousin: fhir.Coding;
        readonly PaternalGreatGrandfather: fhir.Coding;
        readonly PaternalGreatGrandmother: fhir.Coding;
        readonly PaternalGreatGrandparent: fhir.Coding;
        readonly PaternalGrandfather: fhir.Coding;
        readonly PaternalGrandmother: fhir.Coding;
        readonly PaternalGrandparent: fhir.Coding;
        readonly Parent: fhir.Coding;
        readonly FosterParent: fhir.Coding;
        readonly ParentInLaw: fhir.Coding;
        readonly PaternalUncle: fhir.Coding;
        readonly Roommate: fhir.Coding;
        readonly StateAgency: fhir.Coding;
        readonly Sibling: fhir.Coding;
        readonly SiblingInLaw: fhir.Coding;
        readonly SignificantOther: fhir.Coding;
        readonly Sister: fhir.Coding;
        readonly SisterInLaw: fhir.Coding;
        readonly NaturalSon: fhir.Coding;
        readonly AdoptedSon: fhir.Coding;
        readonly Son: fhir.Coding;
        readonly FosterSon: fhir.Coding;
        readonly SonInLaw: fhir.Coding;
        readonly Spouse: fhir.Coding;
        readonly Stepbrother: fhir.Coding;
        readonly StepChild: fhir.Coding;
        readonly Stepdaughter: fhir.Coding;
        readonly Stepfather: fhir.Coding;
        readonly Stepmother: fhir.Coding;
        readonly StepParent: fhir.Coding;
        readonly StepSibling: fhir.Coding;
        readonly Stepsister: fhir.Coding;
        readonly Stepson: fhir.Coding;
        readonly Twin: fhir.Coding;
        readonly TwinBrother: fhir.Coding;
        readonly TwinSister: fhir.Coding;
        readonly Unknown: fhir.Coding;
        readonly Uncle: fhir.Coding;
        readonly Wife: fhir.Coding;
    };
    /**
     * Required-bound Value Set for gender (RelatedPerson.gender)
     */
    static get genderRequiredCodes(): {
        readonly Female: "female";
        readonly Male: "male";
        readonly Other: "other";
        readonly Unknown: "unknown";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=RelatedPerson.d.ts.map