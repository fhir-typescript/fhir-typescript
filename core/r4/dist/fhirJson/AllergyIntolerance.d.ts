import * as fhir from '../fhirJson.js';
/**
 * Details about each adverse reaction event linked to exposure to the identified substance.
 */
export interface AllergyIntoleranceReaction extends fhir.BackboneElement {
    /**
     * Coding of the specific substance (or pharmaceutical product) with a terminology capable of triggering decision support should be used wherever possible.  The 'code' element allows for the use of a specific substance or pharmaceutical product, or a group or class of substances. In the case of an allergy or intolerance to a class of substances, (for example, "penicillins"), the 'reaction.substance' element could be used to code the specific substance that was identified as having caused the reaction (for example, "amoxycillin"). Duplication of the value in the 'code' and 'reaction.substance' elements is acceptable when a specific substance has been recorded in 'code'.
     */
    substance?: fhir.CodeableConcept | undefined;
    /**
     * Manifestation can be expressed as a single word, phrase or brief description. For example: nausea, rash or no reaction. It is preferable that manifestation should be coded with a terminology, where possible. The values entered here may be used to display on an application screen as part of a list of adverse reactions, as recommended in the UK NHS CUI guidelines.  Terminologies commonly used include, but are not limited to, SNOMED CT or ICD10.
     */
    manifestation: (fhir.CodeableConcept | null)[] | null;
    /**
     * Use the description to provide any details of a particular event of the occurred reaction such as circumstances, reaction specifics, what happened before/after. Information, related to the event, but not describing a particular care should be captured in the comment field. For example: at the age of four, the patient was given penicillin for strep throat and subsequently developed severe hives.
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
     * It is acknowledged that this assessment is very subjective. There may be some specific practice domains where objective scales have been applied. Objective scales can be included in this model as extensions.
     */
    severity?: 'mild' | 'moderate' | 'severe' | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.reaction.severity
     */
    _severity?: fhir.FhirElement;
    /**
     * Coding of the route of exposure with a terminology should be used wherever possible.
     */
    exposureRoute?: fhir.CodeableConcept | undefined;
    /**
     * Use this field to record information indirectly related to a particular event and not captured in the description. For example: Clinical records are no longer available, recorded based on information provided to the patient by her mother and her mother is deceased.
     */
    note?: (fhir.Annotation | null)[] | undefined;
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
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Refer to [discussion](extensibility.html#Special-Case) if clincalStatus is missing data.
     * The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
     */
    clinicalStatus?: 'active' | 'inactive' | 'resolved' | undefined;
    /**
     * The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
     */
    verificationStatus?: 'confirmed' | 'entered-in-error' | 'refuted' | 'unconfirmed' | undefined;
    /**
     * Allergic (typically immune-mediated) reactions have been traditionally regarded as an indicator for potential escalation to significant future risk. Contemporary knowledge suggests that some reactions previously thought to be immune-mediated are, in fact, non-immune, but in some cases can still pose a life threatening risk. It is acknowledged that many clinicians might not be in a position to distinguish the mechanism of a particular reaction. Often the term "allergy" is used rather generically and may overlap with the use of "intolerance" - in practice the boundaries between these two concepts might not be well-defined or understood. This data element is included nevertheless, because many legacy systems have captured this attribute. Immunologic testing may provide supporting evidence for the basis of the reaction and the causative substance, but no tests are 100% sensitive or specific for sensitivity to a particular substance. If, as is commonly the case, it is unclear whether the reaction is due to an allergy or an intolerance, then the type element should be omitted from the resource.
     */
    type?: 'allergy' | 'intolerance' | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.type
     */
    _type?: fhir.FhirElement;
    /**
     * This data element has been included because it is currently being captured in some clinical systems. This data can be derived from the substance where coding systems are used, and is effectively redundant in that situation.  When searching on category, consider the implications of AllergyIntolerance resources without a category.  For example, when searching on category = medication, medication allergies that don't have a category valued will not be returned.  Refer to [search](search.html) for more information on how to search category with a :missing modifier to get allergies that don't have a category.  Additionally, category should be used with caution because category can be subjective based on the sender.
     */
    category?: (('biologic' | 'environment' | 'food' | 'medication') | null)[] | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.category
     */
    _category?: (fhir.FhirElement | null)[];
    /**
     * The default criticality value for any propensity to an adverse reaction should be 'Low Risk', indicating at the very least a relative contraindication to deliberate or voluntary exposure to the substance. 'High Risk' is flagged if the clinician has identified a propensity for a more serious or potentially life-threatening reaction, such as anaphylaxis, and implies an absolute contraindication to deliberate or voluntary exposure to the substance. If this element is missing, the criticality is unknown (though it may be known elsewhere).  Systems that capture a severity at the condition level are actually representing the concept of criticality whereas the severity documented at the reaction level is representing the true reaction severity.  Existing systems that are capturing both condition criticality and reaction severity may use the term "severity" to represent both.  Criticality is the worst it could be in the future (i.e. situation-agnostic) whereas severity is situation-dependent.
     */
    criticality?: 'high' | 'low' | 'unable-to-assess' | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.criticality
     */
    _criticality?: fhir.FhirElement;
    /**
     * It is strongly recommended that this element be populated using a terminology, where possible. For example, some terminologies used include RxNorm, SNOMED CT, DM+D, NDFRT, ICD-9, IDC-10, UNII, and ATC. Plain text should only be used if there is no appropriate terminology available. Additional details can be specified in the text.
     * When a substance or product code is specified for the 'code' element, the "default" semantic context is that this is a positive statement of an allergy or intolerance (depending on the value of the 'type' element, if present) condition to the specified substance/product.  In the corresponding SNOMED CT allergy model, the specified substance/product is the target (destination) of the "Causative agent" relationship.
     * The 'substanceExposureRisk' extension is available as a structured and more flexible alternative to the 'code' element for making positive or negative allergy or intolerance statements.  This extension provides the capability to make "no known allergy" (or "no risk of adverse reaction") statements regarding any coded substance/product (including cases when a pre-coordinated "no allergy to x" concept for that substance/product does not exist).  If the 'substanceExposureRisk' extension is present, the AllergyIntolerance.code element SHALL be omitted.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The patient who has the allergy or intolerance.
     */
    patient: fhir.Reference | null;
    /**
     * The encounter when the allergy or intolerance was asserted.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onsetDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.onset[x]
     */
    _onsetDateTime?: fhir.FhirElement;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onsetAge?: fhir.Age | undefined;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onsetPeriod?: fhir.Period | undefined;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onsetRange?: fhir.Range | undefined;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onsetString?: string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.onset[x]
     */
    _onsetString?: fhir.FhirElement;
    /**
     * The recordedDate represents when this particular AllergyIntolerance record was created in the system, which is often a system-generated date.
     */
    recordedDate?: string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.recordedDate
     */
    _recordedDate?: fhir.FhirElement;
    /**
     * Individual who recorded the record and takes responsibility for its content.
     */
    recorder?: fhir.Reference | undefined;
    /**
     * The recorder takes responsibility for the content, but can reference the source from where they got it.
     */
    asserter?: fhir.Reference | undefined;
    /**
     * This date may be replicated by one of the Onset of Reaction dates. Where a textual representation of the date of last occurrence is required e.g. 'In Childhood, '10 years ago' the Comment element should be used.
     */
    lastOccurrence?: string | undefined;
    /**
     * Extended properties for primitive element: AllergyIntolerance.lastOccurrence
     */
    _lastOccurrence?: fhir.FhirElement;
    /**
     * For example: including reason for flagging a seriousness of 'High Risk'; and instructions related to future exposure or administration of the substance, such as administration within an Intensive Care Unit or under corticosteroid cover. The notes should be related to an allergy or intolerance as a condition in general and not related to any particular episode of it. For episode notes and descriptions, use AllergyIntolerance.event.description and  AllergyIntolerance.event.notes.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * Details about each adverse reaction event linked to exposure to the identified substance.
     */
    reaction?: (fhir.AllergyIntoleranceReaction | null)[] | undefined;
}
//# sourceMappingURL=AllergyIntolerance.d.ts.map