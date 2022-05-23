import * as fhir from '../fhir.js';
import { AdministrativeGenderCodeType } from '../fhirValueSets/AdministrativeGenderCodes.js';
/**
 * Valid arguments for the PractitionerQualification type.
 */
export interface PractitionerQualificationArgs extends fhir.BackboneElementArgs {
    /**
     * An identifier that applies to this person's qualification in this role.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Coded representation of the qualification.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * Period during which the qualification is valid.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Organization that regulates and issues the qualification.
     */
    issuer?: fhir.ReferenceArgs | undefined;
}
/**
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export declare class PractitionerQualification extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An identifier that applies to this person's qualification in this role.
     */
    identifier: fhir.Identifier[];
    /**
     * Coded representation of the qualification.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Period during which the qualification is valid.
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
    doModelValidation(): fhir.FtsIssue[];
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
     * An identifier that applies to this person in this role.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The selection of the use property should ensure that there is a single usual name specified, and others use the nickname (alias), old, or other values as appropriate.
     * In general, select the value to be used in the ResourceReference.display based on this:
     * 1. There is more than 1 name
     * 2. Use = usual
     * 3. Period is current to the date of the usage
     * 4. Use = official
     * 5. Other order as decided by internal business rules.
     */
    name?: fhir.HumanNameArgs[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and to help with identification.  These typically will have home numbers, or mobile numbers that are not role specific.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * The PractitionerRole does not have an address value on it, as it is expected that the location property be used for this purpose (which has an address).
     */
    address?: fhir.AddressArgs[] | undefined;
    /**
     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | string | undefined;
    /**
     * The date of birth for the practitioner.
     */
    birthDate?: fhir.FhirDate | string | undefined;
    /**
     * Image of the person.
     */
    photo?: fhir.AttachmentArgs[] | undefined;
    /**
     * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
     */
    qualification?: fhir.PractitionerQualificationArgs[] | undefined;
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
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
     * An identifier that applies to this person in this role.
     */
    identifier: fhir.Identifier[];
    /**
     * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
     */
    active?: fhir.FhirBoolean | undefined;
    /**
     * The selection of the use property should ensure that there is a single usual name specified, and others use the nickname (alias), old, or other values as appropriate.
     * In general, select the value to be used in the ResourceReference.display based on this:
     * 1. There is more than 1 name
     * 2. Use = usual
     * 3. Period is current to the date of the usage
     * 4. Use = official
     * 5. Other order as decided by internal business rules.
     */
    name: fhir.HumanName[];
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and to help with identification.  These typically will have home numbers, or mobile numbers that are not role specific.
     */
    telecom: fhir.ContactPoint[];
    /**
     * The PractitionerRole does not have an address value on it, as it is expected that the location property be used for this purpose (which has an address).
     */
    address: fhir.Address[];
    /**
     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | undefined;
    /**
     * The date of birth for the practitioner.
     */
    birthDate?: fhir.FhirDate | undefined;
    /**
     * Image of the person.
     */
    photo: fhir.Attachment[];
    /**
     * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
     */
    qualification: fhir.PractitionerQualification[];
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    communication: fhir.CodeableConcept[];
    /**
     * Default constructor for Practitioner - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PractitionerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for gender (Practitioner.gender)
     */
    static get genderRequiredCodes(): {
        readonly Female: "female";
        readonly Male: "male";
        readonly Other: "other";
        readonly Unknown: "unknown";
    };
    /**
     * Preferred-bound Value Set for communication (Practitioner.communication)
     */
    static get communicationPreferredCodings(): {
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
        readonly Frysian: fhir.Coding;
        readonly FrysianNetherlands: fhir.Coding;
        readonly Hindi: fhir.Coding;
        readonly Croatian: fhir.Coding;
        readonly Italian: fhir.Coding;
        readonly ItalianSwitzerland: fhir.Coding; /**
         * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and to help with identification.  These typically will have home numbers, or mobile numbers that are not role specific.
         */
        readonly ItalianItaly: fhir.Coding;
        readonly Japanese: fhir.Coding;
        readonly Korean: fhir.Coding;
        readonly Dutch: fhir.Coding; /**
         * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
         */
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
        readonly Chinese: fhir.Coding; /**
         * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and to help with identification.  These typically will have home numbers, or mobile numbers that are not role specific.
         */
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
//# sourceMappingURL=Practitioner.d.ts.map