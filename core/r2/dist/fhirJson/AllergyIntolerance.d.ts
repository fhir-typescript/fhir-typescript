import * as fhir from '../fhirJson.js';
/**
 * Details about each adverse reaction event linked to exposure to the identified Substance.
 */
export interface AllergyIntoleranceReaction extends fhir.BackboneElement {
    /**
     * Identification of the specific substance considered to be responsible for the Adverse Reaction event. Note: the substance for a specific reaction may be different to the substance identified as the cause of the risk, but must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite substance that includes the identified substance. It must be clinically safe to only process the AllergyIntolerance.substance and ignore the AllergyIntolerance.event.substance.
     */
    substance?: fhir.CodeableConcept | undefined;
    /**
     * Statement about the degree of clinical certainty that the specific substance was the cause of the manifestation in this reaction event.
     */
    certainty?: 'confirmed' | 'likely' | 'unlikely' | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.reaction.certainty
     */
    _certainty?: fhir.FhirElement;
    /**
     * Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.
     */
    manifestation: (fhir.CodeableConcept | null)[] | null;
    /**
     * Text description about the reaction as a whole, including details of the manifestation if required.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.reaction.description
     */
    _description?: fhir.FhirElement;
    /**
     * Record of the date and/or time of the onset of the Reaction.
     */
    onset?: string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.reaction.onset
     */
    _onset?: fhir.FhirElement;
    /**
     * Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.
     */
    severity?: 'mild' | 'moderate' | 'severe' | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.reaction.severity
     */
    _severity?: fhir.FhirElement;
    /**
     * Identification of the route by which the subject was exposed to the substance.
     */
    exposureRoute?: fhir.CodeableConcept | undefined;
    /**
     * Additional text about the adverse reaction event not captured in other fields.
     */
    note?: fhir.Annotation | undefined;
}
/**
 * Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.
 */
export interface AllergyIntolerance extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "AllergyIntolerance" | null;
    /**
     * This records identifiers associated with this allergy/intolerance concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Record of the date and/or time of the onset of the Allergy or Intolerance.
     */
    onset?: string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.onset
     */
    _onset?: fhir.FhirElement;
    /**
     * Date when the sensitivity was recorded.
     */
    recordedDate?: string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.recordedDate
     */
    _recordedDate?: fhir.FhirElement;
    /**
     * Individual who recorded the record and takes responsibility for its conten.
     */
    recorder?: fhir.Reference | undefined;
    /**
     * The patient who has the allergy or intolerance.
     */
    patient: fhir.Reference | null;
    /**
     * The source of the information about the allergy that is recorded.
     */
    reporter?: fhir.Reference | undefined;
    /**
     * Identification of a substance, or a class of substances, that is considered to be responsible for the adverse reaction risk.
     */
    substance: fhir.CodeableConcept | null;
    /**
     * Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified Substance.
     */
    status?: 'active' | 'confirmed' | 'entered-in-error' | 'inactive' | 'refuted' | 'resolved' | 'unconfirmed' | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.status
     */
    _status?: fhir.FhirElement;
    /**
     * Estimate of the potential clinical harm, or seriousness, of the reaction to the identified Substance.
     */
    criticality?: 'CRITH' | 'CRITL' | 'CRITU' | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.criticality
     */
    _criticality?: fhir.FhirElement;
    /**
     * Identification of the underlying physiological mechanism for the reaction risk.
     */
    type?: 'allergy' | 'intolerance' | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.type
     */
    _type?: fhir.FhirElement;
    /**
     * Category of the identified Substance.
     */
    category?: 'environment' | 'food' | 'medication' | 'other' | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.category
     */
    _category?: fhir.FhirElement;
    /**
     * Represents the date and/or time of the last known occurrence of a reaction event.
     */
    lastOccurence?: string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.lastOccurence
     */
    _lastOccurence?: fhir.FhirElement;
    /**
     * Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.
     */
    note?: fhir.Annotation | undefined;
    /**
     * Details about each adverse reaction event linked to exposure to the identified Substance.
     */
    reaction?: (fhir.AllergyIntoleranceReaction | null)[] | undefined;
}
//# sourceMappingURL=AllergyIntolerance.d.ts.map