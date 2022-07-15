import * as fhir from '../fhir.js';
import { ReactionEventCertaintyCodeType } from '../fhirValueSets/ReactionEventCertaintyCodes.js';
import { ReactionEventSeverityCodeType } from '../fhirValueSets/ReactionEventSeverityCodes.js';
import { AllergyIntoleranceStatusCodeType } from '../fhirValueSets/AllergyIntoleranceStatusCodes.js';
import { AllergyIntoleranceCriticalityCodeType } from '../fhirValueSets/AllergyIntoleranceCriticalityCodes.js';
import { AllergyIntoleranceTypeCodeType } from '../fhirValueSets/AllergyIntoleranceTypeCodes.js';
import { AllergyIntoleranceCategoryCodeType } from '../fhirValueSets/AllergyIntoleranceCategoryCodes.js';
/**
 * Valid arguments for the AllergyIntoleranceReaction type.
 */
export interface AllergyIntoleranceReactionArgs extends fhir.BackboneElementArgs {
    /**
     * Identification of the specific substance considered to be responsible for the Adverse Reaction event. Note: the substance for a specific reaction may be different to the substance identified as the cause of the risk, but must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite substance that includes the identified substance. It must be clinically safe to only process the AllergyIntolerance.substance and ignore the AllergyIntolerance.event.substance.
     */
    substance?: fhir.CodeableConceptArgs | undefined;
    /**
     * Statement about the degree of clinical certainty that the specific substance was the cause of the manifestation in this reaction event.
     */
    certainty?: fhir.FhirCode<ReactionEventCertaintyCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.reaction.certainty
     */
    _certainty?: fhir.FhirElementArgs;
    /**
     * Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.
     */
    manifestation: fhir.CodeableConceptArgs[] | null;
    /**
     * Text description about the reaction as a whole, including details of the manifestation if required.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.reaction.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Record of the date and/or time of the onset of the Reaction.
     */
    onset?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.reaction.onset
     */
    _onset?: fhir.FhirElementArgs;
    /**
     * Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.
     */
    severity?: fhir.FhirCode<ReactionEventSeverityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.reaction.severity
     */
    _severity?: fhir.FhirElementArgs;
    /**
     * Identification of the route by which the subject was exposed to the substance.
     */
    exposureRoute?: fhir.CodeableConceptArgs | undefined;
    /**
     * Additional text about the adverse reaction event not captured in other fields.
     */
    note?: fhir.AnnotationArgs | undefined;
}
/**
 * Details about each adverse reaction event linked to exposure to the identified Substance.
 */
export declare class AllergyIntoleranceReaction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identification of the specific substance considered to be responsible for the Adverse Reaction event. Note: the substance for a specific reaction may be different to the substance identified as the cause of the risk, but must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite substance that includes the identified substance. It must be clinically safe to only process the AllergyIntolerance.substance and ignore the AllergyIntolerance.event.substance.
     */
    substance?: fhir.CodeableConcept | undefined;
    /**
     * Statement about the degree of clinical certainty that the specific substance was the cause of the manifestation in this reaction event.
     */
    certainty?: fhir.FhirCode<ReactionEventCertaintyCodeType> | undefined;
    /**
     * Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.
     */
    manifestation: fhir.CodeableConcept[];
    /**
     * Text description about the reaction as a whole, including details of the manifestation if required.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Record of the date and/or time of the onset of the Reaction.
     */
    onset?: fhir.FhirDateTime | undefined;
    /**
     * Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.
     */
    severity?: fhir.FhirCode<ReactionEventSeverityCodeType> | undefined;
    /**
     * Identification of the route by which the subject was exposed to the substance.
     */
    exposureRoute?: fhir.CodeableConcept | undefined;
    /**
     * Additional text about the adverse reaction event not captured in other fields.
     */
    note?: fhir.Annotation | undefined;
    /**
     * Default constructor for AllergyIntoleranceReaction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AllergyIntoleranceReactionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AllergyIntolerance type.
 */
export interface AllergyIntoleranceArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "AllergyIntolerance" | undefined;
    /**
     * This records identifiers associated with this allergy/intolerance concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Record of the date and/or time of the onset of the Allergy or Intolerance.
     */
    onset?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.onset
     */
    _onset?: fhir.FhirElementArgs;
    /**
     * Date when the sensitivity was recorded.
     */
    recordedDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.recordedDate
     */
    _recordedDate?: fhir.FhirElementArgs;
    /**
     * Individual who recorded the record and takes responsibility for its conten.
     */
    recorder?: fhir.ReferenceArgs | undefined;
    /**
     * The patient who has the allergy or intolerance.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * The source of the information about the allergy that is recorded.
     */
    reporter?: fhir.ReferenceArgs | undefined;
    /**
     * Identification of a substance, or a class of substances, that is considered to be responsible for the adverse reaction risk.
     */
    substance: fhir.CodeableConceptArgs | null;
    /**
     * Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified Substance.
     */
    status?: fhir.FhirCode<AllergyIntoleranceStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Estimate of the potential clinical harm, or seriousness, of the reaction to the identified Substance.
     */
    criticality?: fhir.FhirCode<AllergyIntoleranceCriticalityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.criticality
     */
    _criticality?: fhir.FhirElementArgs;
    /**
     * Identification of the underlying physiological mechanism for the reaction risk.
     */
    type?: fhir.FhirCode<AllergyIntoleranceTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * Category of the identified Substance.
     */
    category?: fhir.FhirCode<AllergyIntoleranceCategoryCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.category
     */
    _category?: fhir.FhirElementArgs;
    /**
     * Represents the date and/or time of the last known occurrence of a reaction event.
     */
    lastOccurence?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.lastOccurence
     */
    _lastOccurence?: fhir.FhirElementArgs;
    /**
     * Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.
     */
    note?: fhir.AnnotationArgs | undefined;
    /**
     * Details about each adverse reaction event linked to exposure to the identified Substance.
     */
    reaction?: fhir.AllergyIntoleranceReactionArgs[] | undefined;
}
/**
 * Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.
 */
export declare class AllergyIntolerance extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "AllergyIntolerance";
    /**
     * This records identifiers associated with this allergy/intolerance concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier: fhir.Identifier[];
    /**
     * Record of the date and/or time of the onset of the Allergy or Intolerance.
     */
    onset?: fhir.FhirDateTime | undefined;
    /**
     * Date when the sensitivity was recorded.
     */
    recordedDate?: fhir.FhirDateTime | undefined;
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
    status?: fhir.FhirCode<AllergyIntoleranceStatusCodeType> | undefined;
    /**
     * Estimate of the potential clinical harm, or seriousness, of the reaction to the identified Substance.
     */
    criticality?: fhir.FhirCode<AllergyIntoleranceCriticalityCodeType> | undefined;
    /**
     * Identification of the underlying physiological mechanism for the reaction risk.
     */
    type?: fhir.FhirCode<AllergyIntoleranceTypeCodeType> | undefined;
    /**
     * Category of the identified Substance.
     */
    category?: fhir.FhirCode<AllergyIntoleranceCategoryCodeType> | undefined;
    /**
     * Represents the date and/or time of the last known occurrence of a reaction event.
     */
    lastOccurence?: fhir.FhirDateTime | undefined;
    /**
     * Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.
     */
    note?: fhir.Annotation | undefined;
    /**
     * Details about each adverse reaction event linked to exposure to the identified Substance.
     */
    reaction: fhir.AllergyIntoleranceReaction[];
    /**
     * Default constructor for AllergyIntolerance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AllergyIntoleranceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=AllergyIntolerance.d.ts.map