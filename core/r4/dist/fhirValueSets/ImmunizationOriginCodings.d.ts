import { Coding } from '../fhir/Coding.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the data when the report of the immunization event is not based on information from the person, entity or organization who administered the vaccine. This value set is provided as a suggestive example.
 */
export declare const ImmunizationOriginCodings: {
    /**
     * provider: The data for the immunization event originated with another provider.
     */
    readonly OtherProvider: Coding;
    /**
     * recall: The data for the immunization event originated from the recollection of the patient or parent/guardian of the patient.
     */
    readonly ParentGuardianPatientRecall: Coding;
    /**
     * record: The data for the immunization event originated with a written record for the patient.
     */
    readonly WrittenRecord: Coding;
    /**
     * school: The data for the immunization event originated with a school record for the patient.
     */
    readonly SchoolRecord: Coding;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the data when the report of the immunization event is not based on information from the person, entity or organization who administered the vaccine. This value set is provided as a suggestive example.
 */
export declare type ImmunizationOriginCodingType = typeof ImmunizationOriginCodings;
//# sourceMappingURL=ImmunizationOriginCodings.d.ts.map