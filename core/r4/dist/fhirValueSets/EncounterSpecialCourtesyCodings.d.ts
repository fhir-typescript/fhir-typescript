import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that can be used to indicate special courtesies provided to the patient.
 */
export declare type EncounterSpecialCourtesyCodingType = {
    /**
     * EXT: extended courtesy
     */
    ExtendedCourtesy: CodingArgs;
    /**
     * NRM: normal courtesy
     */
    NormalCourtesy: CodingArgs;
    /**
     * PRF: professional courtesy
     */
    ProfessionalCourtesy: CodingArgs;
    /**
     * STF: Courtesies extended to the staff of the entity providing service.
     */
    Staff: CodingArgs;
    /**
     * UNK: Description:A proper value is applicable, but not known.
     *
     *
     *                            Usage Notes: This means the actual value is not known.  If the only thing that is unknown is how to properly express the value in the necessary constraints (value set, datatype, etc.), then the OTH or UNC flavor should be used.  No properties should be included for a datatype with this property unless:
     *
     *
     *                            Those properties themselves directly translate to a semantic of "unknown".  (E.g. a local code sent as a translation that conveys 'unknown')
     *                            Those properties further qualify the nature of what is unknown.  (E.g. specifying a use code of "H" and a URL prefix of "tel:" to convey that it is the home phone number that is unknown.)
     */
    Unknown: CodingArgs;
    /**
     * VIP: very important person
     */
    VeryImportantPerson: CodingArgs;
};
/**
 * This value set defines a set of codes that can be used to indicate special courtesies provided to the patient.
 */
export declare const EncounterSpecialCourtesyCodings: EncounterSpecialCourtesyCodingType;
//# sourceMappingURL=EncounterSpecialCourtesyCodings.d.ts.map