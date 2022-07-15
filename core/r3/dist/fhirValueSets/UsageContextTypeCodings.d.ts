import { CodingArgs } from '../fhir/Coding.js';
/**
 * A code that specifies a type of context being specified by a usage context
 */
export declare type UsageContextTypeCodingType = {
    /**
     * age: The age of the patient. For this context type, the value should be a range the specifies the applicable ages or a code from the MeSH value set http://hl7.org/fhir/ValueSet/v3-AgeGroupObservationValue
     */
    AgeRange: CodingArgs;
    /**
     * focus: The clinical concept(s) addressed by the artifact. For example, disease, diagnostic test interpretation, medication ordering as in http://hl7.org/fhir/ValueSet/condition-code.
     */
    ClinicalFocus: CodingArgs;
    /**
     * gender: The gender of the patient. For this context type, the value should be a code taken from the http://hl7.org/fhir/ValueSet/administrative-gender value set
     */
    Gender: CodingArgs;
    /**
     * species: The species to which an artifact applies. For example, SNOMED - 387961004 | Kingdom Animalia (organism).
     */
    Species: CodingArgs;
    /**
     * task: The context for the clinical task(s) represented by this artifact. Can be any task context represented by the HL7 ActTaskCode value set http://hl7.org/fhir/ValueSet/v3-ActTaskCode. General categories include: order entry, patient documentation and patient information review.
     */
    WorkflowTask: CodingArgs;
    /**
     * user: The clinical specialty of the context in which the patient is being treated - For example, PCP, Patient, Cardiologist, Behavioral Professional, Oral Health Professional, Prescriber, etc... taken from the NUCC Health Care provider taxonomy value set http://hl7.org/fhir/ValueSet/provider-taxonomy.
     */
    UserType: CodingArgs;
    /**
     * venue: The venue in which an artifact could be used. For example, Outpatient, Inpatient, Home, Nursing home. The code value may originate from either the HL7 ActEncounterCode http://hl7.org/fhir/ValueSet/v3-ActEncounterCode or NUCC non-individual provider codes http://hl7.org/fhir/ValueSet/provider-taxonomy
     */
    ClinicalVenue: CodingArgs;
    /**
     * workflow: The settings in which the artifact is intended for use. For example, admission, pre-op, etc. For example, the ActEncounterCode value set http://hl7.org/fhir/ValueSet/v3-ActEncounterCode
     */
    WorkflowSetting: CodingArgs;
};
/**
 * A code that specifies a type of context being specified by a usage context
 */
export declare const UsageContextTypeCodings: UsageContextTypeCodingType;
//# sourceMappingURL=UsageContextTypeCodings.d.ts.map