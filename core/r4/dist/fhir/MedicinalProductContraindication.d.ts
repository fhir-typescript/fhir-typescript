import * as fhir from '../fhir.js';
/**
 * Valid arguments for the MedicinalProductContraindicationOtherTherapy type.
 */
export interface MedicinalProductContraindicationOtherTherapyArgs extends fhir.BackboneElementArgs {
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
export declare class MedicinalProductContraindicationOtherTherapy extends fhir.BackboneElement {
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
     * Internal flag to properly serialize choice-type element MedicinalProductContraindication.otherTherapy.medication[x]
     */
    protected static readonly _fts_medicationIsChoice: true;
    /**
     * Default constructor for MedicinalProductContraindicationOtherTherapy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductContraindicationOtherTherapyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductContraindication type.
 */
export interface MedicinalProductContraindicationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductContraindication" | undefined;
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.ReferenceArgs[] | undefined;
    /**
     * The disease, symptom or procedure for the contraindication.
     */
    disease?: fhir.CodeableConceptArgs | undefined;
    /**
     * The status of the disease or symptom for the contraindication.
     */
    diseaseStatus?: fhir.CodeableConceptArgs | undefined;
    /**
     * A comorbidity (concurrent condition) or coinfection.
     */
    comorbidity?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies as part of the indication.
     */
    therapeuticIndication?: fhir.ReferenceArgs[] | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhir.MedicinalProductContraindicationOtherTherapyArgs[] | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhir.PopulationArgs[] | undefined;
}
/**
 * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 */
export declare class MedicinalProductContraindication extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductContraindication";
    /**
     * The medication for which this is an indication.
     */
    subject: fhir.Reference[];
    /**
     * The disease, symptom or procedure for the contraindication.
     */
    disease?: fhir.CodeableConcept | undefined;
    /**
     * The status of the disease or symptom for the contraindication.
     */
    diseaseStatus?: fhir.CodeableConcept | undefined;
    /**
     * A comorbidity (concurrent condition) or coinfection.
     */
    comorbidity: fhir.CodeableConcept[];
    /**
     * Information about the use of the medicinal product in relation to other therapies as part of the indication.
     */
    therapeuticIndication: fhir.Reference[];
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy: fhir.MedicinalProductContraindicationOtherTherapy[];
    /**
     * The population group to which this applies.
     */
    population: fhir.Population[];
    /**
     * Default constructor for MedicinalProductContraindication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductContraindicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=MedicinalProductContraindication.d.ts.map