import * as fhir from '../fhir.js';
/**
 * Valid arguments for the MedicinalProductIndicationOtherTherapy type.
 */
export interface MedicinalProductIndicationOtherTherapyArgs extends fhir.BackboneElementArgs {
    /**
     * The type of relationship between the medicinal product indication or contraindication and another therapy.
     */
    therapyRelationshipType: fhir.CodeableConceptArgs | null;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medication?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationReference?: fhir.ReferenceArgs | undefined;
}
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export declare class MedicinalProductIndicationOtherTherapy extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of relationship between the medicinal product indication or contraindication and another therapy.
     */
    therapyRelationshipType: fhir.CodeableConcept | null;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medication: (fhir.CodeableConcept | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element MedicinalProductIndication.otherTherapy.medication[x]
     */
    protected static readonly _fts_medicationIsChoice: true;
    /**
     * Default constructor for MedicinalProductIndicationOtherTherapy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductIndicationOtherTherapyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductIndication type.
 */
export interface MedicinalProductIndicationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductIndication" | undefined;
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.ReferenceArgs[] | undefined;
    /**
     * The disease, symptom or procedure that is the indication for treatment.
     */
    diseaseSymptomProcedure?: fhir.CodeableConceptArgs | undefined;
    /**
     * The status of the disease or symptom for which the indication applies.
     */
    diseaseStatus?: fhir.CodeableConceptArgs | undefined;
    /**
     * Comorbidity (concurrent condition) or co-infection as part of the indication.
     */
    comorbidity?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The intended effect, aim or strategy to be achieved by the indication.
     */
    intendedEffect?: fhir.CodeableConceptArgs | undefined;
    /**
     * Timing or duration information as part of the indication.
     */
    duration?: fhir.QuantityArgs | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhir.MedicinalProductIndicationOtherTherapyArgs[] | undefined;
    /**
     * Describe the undesirable effects of the medicinal product.
     */
    undesirableEffect?: fhir.ReferenceArgs[] | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhir.PopulationArgs[] | undefined;
}
/**
 * Indication for the Medicinal Product.
 */
export declare class MedicinalProductIndication extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductIndication";
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.Reference[];
    /**
     * The disease, symptom or procedure that is the indication for treatment.
     */
    diseaseSymptomProcedure?: fhir.CodeableConcept | undefined;
    /**
     * The status of the disease or symptom for which the indication applies.
     */
    diseaseStatus?: fhir.CodeableConcept | undefined;
    /**
     * Comorbidity (concurrent condition) or co-infection as part of the indication.
     */
    comorbidity?: fhir.CodeableConcept[];
    /**
     * The intended effect, aim or strategy to be achieved by the indication.
     */
    intendedEffect?: fhir.CodeableConcept | undefined;
    /**
     * Timing or duration information as part of the indication.
     */
    duration?: fhir.Quantity | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhir.MedicinalProductIndicationOtherTherapy[];
    /**
     * Describe the undesirable effects of the medicinal product.
     */
    undesirableEffect?: fhir.Reference[];
    /**
     * The population group to which this applies.
     */
    population?: fhir.Population[];
    /**
     * Default constructor for MedicinalProductIndication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductIndicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=MedicinalProductIndication.d.ts.map