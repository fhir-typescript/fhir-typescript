import * as fhir from '../fhir.js';
import { ReactionEventSeverityCodeType } from '../fhirValueSets/ReactionEventSeverityCodes.js';
import { AllergyClinicalStatusCodeType } from '../fhirValueSets/AllergyClinicalStatusCodes.js';
import { AllergyVerificationStatusCodeType } from '../fhirValueSets/AllergyVerificationStatusCodes.js';
import { AllergyIntoleranceTypeCodeType } from '../fhirValueSets/AllergyIntoleranceTypeCodes.js';
import { AllergyIntoleranceCategoryCodeType } from '../fhirValueSets/AllergyIntoleranceCategoryCodes.js';
import { AllergyIntoleranceCriticalityCodeType } from '../fhirValueSets/AllergyIntoleranceCriticalityCodes.js';
/**
 * Valid arguments for the AllergyIntoleranceReaction type.
 */
export interface AllergyIntoleranceReactionArgs extends fhir.BackboneElementArgs {
    /**
     * Coding of the specific substance (or pharmaceutical product) with a terminology capable of triggering decision support should be used wherever possible.  The 'code' element allows for the use of a specific substance or pharmaceutical product, or a group or class of substances. In the case of an allergy or intolerance to a class of substances, (for example, "penicillins"), the 'reaction.substance' element could be used to code the specific substance that was identifed as having caused the reaction (for example, "amoxycillin"). Duplication of the value in the 'code' and 'reaction.substance' elements is acceptable when a specific substance has been recorded in 'code'.
     */
    substance?: fhir.CodeableConceptArgs | undefined;
    /**
     * Manifestation can be expressed as a single word, phrase or brief description. For example: nausea, rash or no reaction. It is preferable that manifestation should be coded with a terminology, where possible. The values entered here may be used to display on an application screen as part of a list of adverse reactions, as recommended in the UK NHS CUI guidelines.  Terminologies commonly used include, but are not limited to, SNOMED CT or ICD10.
     */
    manifestation: fhir.CodeableConceptArgs[] | null;
    /**
     * Use the description to provide any details of a particular event of the occurred reaction such as circumstances, reaction specifics, what happened before/after. Information, related to the event, but not describing a particular care should be captured in the comment field. For example: at the age of four, the patient was given penicillin for strep throat and subsequently developed severe hives.
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
     * It is acknowledged that this assessment is very subjective. There may be some some specific practice domains where objective scales have been applied. Objective scales can be included in this model as extensions.
     */
    severity?: fhir.FhirCode<ReactionEventSeverityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.reaction.severity
     */
    _severity?: fhir.FhirElementArgs;
    /**
     * Coding of the route of exposure with a terminology should be used wherever possible.
     */
    exposureRoute?: fhir.CodeableConceptArgs | undefined;
    /**
     * Use this field to record information indirectly related to a particular event and not captured in the description. For example: Clinical records are no longer available, recorded based on information provided to the patient by her mother and her mother is deceased.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * Details about each adverse reaction event linked to exposure to the identified substance.
 */
export declare class AllergyIntoleranceReaction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Coding of the specific substance (or pharmaceutical product) with a terminology capable of triggering decision support should be used wherever possible.  The 'code' element allows for the use of a specific substance or pharmaceutical product, or a group or class of substances. In the case of an allergy or intolerance to a class of substances, (for example, "penicillins"), the 'reaction.substance' element could be used to code the specific substance that was identifed as having caused the reaction (for example, "amoxycillin"). Duplication of the value in the 'code' and 'reaction.substance' elements is acceptable when a specific substance has been recorded in 'code'.
     */
    substance?: fhir.CodeableConcept | undefined;
    /**
     * Manifestation can be expressed as a single word, phrase or brief description. For example: nausea, rash or no reaction. It is preferable that manifestation should be coded with a terminology, where possible. The values entered here may be used to display on an application screen as part of a list of adverse reactions, as recommended in the UK NHS CUI guidelines.  Terminologies commonly used include, but are not limited to, SNOMED CT or ICD10.
     */
    manifestation: fhir.CodeableConcept[];
    /**
     * Use the description to provide any details of a particular event of the occurred reaction such as circumstances, reaction specifics, what happened before/after. Information, related to the event, but not describing a particular care should be captured in the comment field. For example: at the age of four, the patient was given penicillin for strep throat and subsequently developed severe hives.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Record of the date and/or time of the onset of the Reaction.
     */
    onset?: fhir.FhirDateTime | undefined;
    /**
     * It is acknowledged that this assessment is very subjective. There may be some some specific practice domains where objective scales have been applied. Objective scales can be included in this model as extensions.
     */
    severity?: fhir.FhirCode<ReactionEventSeverityCodeType> | undefined;
    /**
     * Coding of the route of exposure with a terminology should be used wherever possible.
     */
    exposureRoute?: fhir.CodeableConcept | undefined;
    /**
     * Use this field to record information indirectly related to a particular event and not captured in the description. For example: Clinical records are no longer available, recorded based on information provided to the patient by her mother and her mother is deceased.
     */
    note: fhir.Annotation[];
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
     * This element is labeled as a modifier because the status contains the codes inactive and resolved that mark the AllergyIntolerance as not currently valid.
     */
    clinicalStatus?: fhir.FhirCode<AllergyClinicalStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.clinicalStatus
     */
    _clinicalStatus?: fhir.FhirElementArgs;
    /**
     * This element is labeled as a modifier because the status contains the codes refuted and entered-in-error that mark the AllergyIntolerance as not currently valid.
     */
    verificationStatus: fhir.FhirCode<AllergyVerificationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.verificationStatus
     */
    _verificationStatus?: fhir.FhirElementArgs;
    /**
     * Allergic (typically immune-mediated) reactions have been traditionally regarded as an indicator for potential escalation to significant future risk. Contemporary knowledge suggests that some reactions previously thought to be immune-mediated are, in fact, non-immune, but in some cases can still pose a life threatening risk. It is acknowledged that many clinicians may not be in a position to distinguish the mechanism of a particular reaction. Often the term "allergy" is used rather generically and may overlap with the use of "intolerance" - in practice the boundaries between these two concepts may not be well-defined or understood. This data element is included nevertheless, because many legacy systems have captured this attribute. Immunologic testing may provide supporting evidence for the basis of the reaction and the causative substance, but no tests are 100% sensitive or specific for sensitivity to a particular substance. If, as is commonly the case, it is unclear whether the reaction is due to an allergy or an intolerance, then the type element should be omitted from the resource.
     */
    type?: fhir.FhirCode<AllergyIntoleranceTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * This data element has been included because it is currently being captured in some clinical systems. This data can be derived from the substance where coding systems are used, and is effectively redundant in that situation.  When searching on category, consider the implications of AllergyIntolerance resources without a category.  For example, when searching on category = medication, medication allergies that don't have a category valued will not be returned.  Refer to [search](search.html) for more information on how to search category with a :missing modifier to get allergies that don't have a category.  Additionally, category should be used with caution because category can be subjective based on the sender.
     */
    category?: fhir.FhirCode<AllergyIntoleranceCategoryCodeType>[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.category
     */
    _category?: (fhir.FhirElementArgs | null)[];
    /**
     * The default criticality value for any propensity to an adverse reaction should be 'Low Risk', indicating at the very least a relative contraindication to deliberate or voluntary exposure to the substance. 'High Risk' is flagged if the clinician has identified a propensity for a more serious or potentially life-threatening reaction, such as anaphylaxis, and implies an absolute contraindication to deliberate or voluntary exposure to the substance. If this element is missing, the criticality is unknown (though it may be known elsewhere).
     * Systems that capture a severity at the condition level are actually representing the concept of criticality whereas the severity documented at the reaction level is representing the true reaction severity.  Existing systems that are capturing both condition criticality and reaction severity may use the term "severity" to represent both.  Criticality is the worst it could be in the future (i.e. situation-agnostic) whereas severity is situation-dependent.
     */
    criticality?: fhir.FhirCode<AllergyIntoleranceCriticalityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.criticality
     */
    _criticality?: fhir.FhirElementArgs;
    /**
     * It is strongly recommended that this element be populated using a terminology, where possible. For example, some terminologies used include RxNorm, SNOMED CT, DM+D, NDFRT, ICD-9, IDC-10, UNI, ATC and CPT. Plain text should only be used if there is no appropriate terminology available. Additional details can be specified in the text.
     * When a substance or product code is specified for the 'code' element, the "default" semantic context is that this is a positive statement of an allergy or intolerance (depending on the value of the 'type' element, if present) condition to the specified substance/product.  In the corresponding SNOMED CT allergy model, the specified substance/product is the target (destination) of the "Causative agent" relationship.
     * The 'substanceExposureRisk' extension is available as a structured and more flexible alternative to the 'code' element for making positive or negative allergy or intolerance statements.  This extension provides the capability to make "no known allergy" (or "no risk of adverse reaction") statements regarding any coded substance/product (including cases when a pre-coordinated "no allergy to x" concept for that substance/product does not exist).  If the 'substanceExposureRisk' extension is present, the AllergyIntolerance.code element SHALL be omitted.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The patient who has the allergy or intolerance.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onset?: fhir.FhirDateTime | fhir.Age | fhir.Period | fhir.Range | fhir.FhirString | undefined;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onsetDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onsetAge?: fhir.AgeArgs | undefined;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onsetPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onsetRange?: fhir.RangeArgs | undefined;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onsetString?: fhir.FhirString | string | undefined;
    /**
     * The date on which the existance of the AllergyIntolerance was first asserted or acknowledged.
     */
    assertedDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.assertedDate
     */
    _assertedDate?: fhir.FhirElementArgs;
    /**
     * Individual who recorded the record and takes responsibility for its content.
     */
    recorder?: fhir.ReferenceArgs | undefined;
    /**
     * The recorder takes repsonsibility for the content, but can reference the source from where they got it.
     */
    asserter?: fhir.ReferenceArgs | undefined;
    /**
     * This date may be replicated by one of the Onset of Reaction dates. Where a textual representation of the date of last occurrence is required e.g. 'In Childhood, '10 years ago' the Comment element should be used.
     */
    lastOccurrence?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.lastOccurrence
     */
    _lastOccurrence?: fhir.FhirElementArgs;
    /**
     * For example: including reason for flagging a seriousness of 'High Risk'; and instructions related to future exposure or administration of the substance, such as administration within an Intensive Care Unit or under corticosteroid cover. The notes should be related to an allergy or intolerance as a condition in general and not related to any particular episode of it. For episode notes and descriptions, use AllergyIntolerance.event.description and  AllergyIntolerance.event.notes.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Details about each adverse reaction event linked to exposure to the identified substance.
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
     * This element is labeled as a modifier because the status contains the codes inactive and resolved that mark the AllergyIntolerance as not currently valid.
     */
    clinicalStatus?: fhir.FhirCode<AllergyClinicalStatusCodeType> | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes refuted and entered-in-error that mark the AllergyIntolerance as not currently valid.
     */
    verificationStatus: fhir.FhirCode<AllergyVerificationStatusCodeType> | null;
    /**
     * Allergic (typically immune-mediated) reactions have been traditionally regarded as an indicator for potential escalation to significant future risk. Contemporary knowledge suggests that some reactions previously thought to be immune-mediated are, in fact, non-immune, but in some cases can still pose a life threatening risk. It is acknowledged that many clinicians may not be in a position to distinguish the mechanism of a particular reaction. Often the term "allergy" is used rather generically and may overlap with the use of "intolerance" - in practice the boundaries between these two concepts may not be well-defined or understood. This data element is included nevertheless, because many legacy systems have captured this attribute. Immunologic testing may provide supporting evidence for the basis of the reaction and the causative substance, but no tests are 100% sensitive or specific for sensitivity to a particular substance. If, as is commonly the case, it is unclear whether the reaction is due to an allergy or an intolerance, then the type element should be omitted from the resource.
     */
    type?: fhir.FhirCode<AllergyIntoleranceTypeCodeType> | undefined;
    /**
     * This data element has been included because it is currently being captured in some clinical systems. This data can be derived from the substance where coding systems are used, and is effectively redundant in that situation.  When searching on category, consider the implications of AllergyIntolerance resources without a category.  For example, when searching on category = medication, medication allergies that don't have a category valued will not be returned.  Refer to [search](search.html) for more information on how to search category with a :missing modifier to get allergies that don't have a category.  Additionally, category should be used with caution because category can be subjective based on the sender.
     */
    category: fhir.FhirCode<AllergyIntoleranceCategoryCodeType>[];
    /**
     * The default criticality value for any propensity to an adverse reaction should be 'Low Risk', indicating at the very least a relative contraindication to deliberate or voluntary exposure to the substance. 'High Risk' is flagged if the clinician has identified a propensity for a more serious or potentially life-threatening reaction, such as anaphylaxis, and implies an absolute contraindication to deliberate or voluntary exposure to the substance. If this element is missing, the criticality is unknown (though it may be known elsewhere).
     * Systems that capture a severity at the condition level are actually representing the concept of criticality whereas the severity documented at the reaction level is representing the true reaction severity.  Existing systems that are capturing both condition criticality and reaction severity may use the term "severity" to represent both.  Criticality is the worst it could be in the future (i.e. situation-agnostic) whereas severity is situation-dependent.
     */
    criticality?: fhir.FhirCode<AllergyIntoleranceCriticalityCodeType> | undefined;
    /**
     * It is strongly recommended that this element be populated using a terminology, where possible. For example, some terminologies used include RxNorm, SNOMED CT, DM+D, NDFRT, ICD-9, IDC-10, UNI, ATC and CPT. Plain text should only be used if there is no appropriate terminology available. Additional details can be specified in the text.
     * When a substance or product code is specified for the 'code' element, the "default" semantic context is that this is a positive statement of an allergy or intolerance (depending on the value of the 'type' element, if present) condition to the specified substance/product.  In the corresponding SNOMED CT allergy model, the specified substance/product is the target (destination) of the "Causative agent" relationship.
     * The 'substanceExposureRisk' extension is available as a structured and more flexible alternative to the 'code' element for making positive or negative allergy or intolerance statements.  This extension provides the capability to make "no known allergy" (or "no risk of adverse reaction") statements regarding any coded substance/product (including cases when a pre-coordinated "no allergy to x" concept for that substance/product does not exist).  If the 'substanceExposureRisk' extension is present, the AllergyIntolerance.code element SHALL be omitted.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The patient who has the allergy or intolerance.
     */
    patient: fhir.Reference | null;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onset?: (fhir.FhirDateTime | fhir.Age | fhir.Period | fhir.Range | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element AllergyIntolerance.onset[x]
     */
    protected static readonly _fts_onsetIsChoice: true;
    /**
     * The date on which the existance of the AllergyIntolerance was first asserted or acknowledged.
     */
    assertedDate?: fhir.FhirDateTime | undefined;
    /**
     * Individual who recorded the record and takes responsibility for its content.
     */
    recorder?: fhir.Reference | undefined;
    /**
     * The recorder takes repsonsibility for the content, but can reference the source from where they got it.
     */
    asserter?: fhir.Reference | undefined;
    /**
     * This date may be replicated by one of the Onset of Reaction dates. Where a textual representation of the date of last occurrence is required e.g. 'In Childhood, '10 years ago' the Comment element should be used.
     */
    lastOccurrence?: fhir.FhirDateTime | undefined;
    /**
     * For example: including reason for flagging a seriousness of 'High Risk'; and instructions related to future exposure or administration of the substance, such as administration within an Intensive Care Unit or under corticosteroid cover. The notes should be related to an allergy or intolerance as a condition in general and not related to any particular episode of it. For episode notes and descriptions, use AllergyIntolerance.event.description and  AllergyIntolerance.event.notes.
     */
    note: fhir.Annotation[];
    /**
     * Details about each adverse reaction event linked to exposure to the identified substance.
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