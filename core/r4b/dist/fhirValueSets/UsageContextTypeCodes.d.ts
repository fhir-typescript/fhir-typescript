/**
 * A code that specifies a type of context being specified by a usage context.
 */
export declare const UsageContextTypeCodes: {
    /**
     * age: The age of the patient. For this context type, the value could be a range that specifies the applicable ages or a code from an appropriate value set such as the MeSH value set http://terminology.hl7.org/ValueSet/v3-AgeGroupObservationValue.
     */
    readonly AgeRange: "age";
    /**
     * focus: The clinical concept(s) addressed by the artifact. For example, disease, diagnostic test interpretation, medication ordering as in http://hl7.org/fhir/ValueSet/condition-code.
     */
    readonly ClinicalFocus: "focus";
    /**
     * gender: The gender of the patient. For this context type, appropriate values can be found in the http://hl7.org/fhir/ValueSet/administrative-gender value set.
     */
    readonly Gender: "gender";
    /**
     * program: A program/project of work for which this artifact is applicable.
     */
    readonly Program: "program";
    /**
     * species: The species to which an artifact applies. For example, SNOMED - 387961004 | Kingdom Animalia (organism).
     */
    readonly Species: "species";
    /**
     * task: The context for the clinical task(s) represented by this artifact. For example, this could be any task context represented by the HL7 ActTaskCode value set http://terminology.hl7.org/ValueSet/v3-ActTaskCode. General categories include: order entry, patient documentation and patient information review.
     */
    readonly WorkflowTask: "task";
    /**
     * user: The clinical specialty of the context in which the patient is being treated - For example, PCP, Patient, Cardiologist, Behavioral Professional, Oral Health Professional, Prescriber, etc... taken from a specialty value set such as the NUCC Health Care provider taxonomy value set http://hl7.org/fhir/ValueSet/provider-taxonomy.
     */
    readonly UserType: "user";
    /**
     * venue: The venue in which an artifact could be used. For example, Outpatient, Inpatient, Home, Nursing home. The code value may originate from the HL7 ServiceDeliveryLocationRoleType value set (http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType).
     */
    readonly ClinicalVenue: "venue";
    /**
     * workflow: The settings in which the artifact is intended for use. For example, admission, pre-op, etc. For example, the ActEncounterCode value set http://terminology.hl7.org/ValueSet/v3-ActEncounterCode.
     */
    readonly WorkflowSetting: "workflow";
};
/**
 * A code that specifies a type of context being specified by a usage context.
 */
export declare type UsageContextTypeCodeType = typeof UsageContextTypeCodes[keyof typeof UsageContextTypeCodes];
//# sourceMappingURL=UsageContextTypeCodes.d.ts.map