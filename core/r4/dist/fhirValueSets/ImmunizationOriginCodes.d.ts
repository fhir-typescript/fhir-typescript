/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the data when the report of the immunization event is not based on information from the person, entity or organization who administered the vaccine. This value set is provided as a suggestive example.
 */
export declare const ImmunizationOriginCodes: {
    /**
     * provider: The data for the immunization event originated with another provider.
     */
    readonly OtherProvider: "provider";
    /**
     * recall: The data for the immunization event originated from the recollection of the patient or parent/guardian of the patient.
     */
    readonly ParentGuardianPatientRecall: "recall";
    /**
     * record: The data for the immunization event originated with a written record for the patient.
     */
    readonly WrittenRecord: "record";
    /**
     * school: The data for the immunization event originated with a school record for the patient.
     */
    readonly SchoolRecord: "school";
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the data when the report of the immunization event is not based on information from the person, entity or organization who administered the vaccine. This value set is provided as a suggestive example.
 */
export declare type ImmunizationOriginCodeType = typeof ImmunizationOriginCodes[keyof typeof ImmunizationOriginCodes];
//# sourceMappingURL=ImmunizationOriginCodes.d.ts.map