import * as fhir from '../fhirJson.js';
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export interface MedicinalProductContraindicationOtherTherapy extends fhir.BackboneElement {
    /**
     * The type of relationship between the medicinal product indication or contraindication and another therapy.
     */
    therapyRelationshipType: fhir.CodeableConcept | null;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationReference?: fhir.Reference | undefined;
}
/**
 * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 */
export interface MedicinalProductContraindication extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductContraindication";
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.Reference[] | undefined;
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
    comorbidity?: fhir.CodeableConcept[] | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies as part of the indication.
     */
    therapeuticIndication?: fhir.Reference[] | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhir.MedicinalProductContraindicationOtherTherapy[] | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhir.Population[] | undefined;
}
//# sourceMappingURL=MedicinalProductContraindication.d.ts.map