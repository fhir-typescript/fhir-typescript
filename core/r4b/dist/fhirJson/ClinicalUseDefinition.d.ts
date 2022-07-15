import * as fhir from '../fhirJson.js';
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the contraindication.
 */
export interface ClinicalUseDefinitionContraindicationOtherTherapy extends fhir.BackboneElement {
    /**
     * The type of relationship between the medicinal product indication or contraindication and another therapy.
     */
    relationshipType: fhir.CodeableConcept | null;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    therapy: fhir.CodeableReference | null;
}
/**
 * Specifics for when this is a contraindication.
 */
export interface ClinicalUseDefinitionContraindication extends fhir.BackboneElement {
    /**
     * The situation that is being documented as contraindicating against this item.
     */
    diseaseSymptomProcedure?: fhir.CodeableReference | undefined;
    /**
     * The status of the disease or symptom for the contraindication, for example "chronic" or "metastatic".
     */
    diseaseStatus?: fhir.CodeableReference | undefined;
    /**
     * A comorbidity (concurrent condition) or coinfection.
     */
    comorbidity?: (fhir.CodeableReference | null)[] | undefined;
    /**
     * The indication which this is a contraidication for.
     */
    indication?: (fhir.Reference | null)[] | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the contraindication.
     */
    otherTherapy?: (fhir.ClinicalUseDefinitionContraindicationOtherTherapy | null)[] | undefined;
}
/**
 * Specifics for when this is an indication.
 */
export interface ClinicalUseDefinitionIndication extends fhir.BackboneElement {
    /**
     * The situation that is being documented as an indicaton for this item.
     */
    diseaseSymptomProcedure?: fhir.CodeableReference | undefined;
    /**
     * The status of the disease or symptom for the indication, for example "chronic" or "metastatic".
     */
    diseaseStatus?: fhir.CodeableReference | undefined;
    /**
     * A comorbidity (concurrent condition) or coinfection as part of the indication.
     */
    comorbidity?: (fhir.CodeableReference | null)[] | undefined;
    /**
     * The intended effect, aim or strategy to be achieved.
     */
    intendedEffect?: fhir.CodeableReference | undefined;
    /**
     * Timing or duration information, that may be associated with use with the indicated condition e.g. Adult patients suffering from myocardial infarction (from a few days until less than 35 days), ischaemic stroke (from 7 days until less than 6 months).
     */
    durationRange?: fhir.Range | undefined;
    /**
     * Timing or duration information, that may be associated with use with the indicated condition e.g. Adult patients suffering from myocardial infarction (from a few days until less than 35 days), ischaemic stroke (from 7 days until less than 6 months).
     */
    durationString?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalUseDefinition.indication.duration[x]
     */
    _durationString?: fhir.FhirElement;
    /**
     * An unwanted side effect or negative outcome that may happen if you use the drug (or other subject of this resource) for this indication.
     */
    undesirableEffect?: (fhir.Reference | null)[] | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: (fhir.ClinicalUseDefinitionContraindicationOtherTherapy | null)[] | undefined;
}
/**
 * The specific medication, food, substance or laboratory test that interacts.
 */
export interface ClinicalUseDefinitionInteractionInteractant extends fhir.BackboneElement {
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    itemReference?: fhir.Reference | undefined;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    itemCodeableConcept?: fhir.CodeableConcept | undefined;
}
/**
 * Specifics for when this is an interaction.
 */
export interface ClinicalUseDefinitionInteraction extends fhir.BackboneElement {
    /**
     * The specific medication, food, substance or laboratory test that interacts.
     */
    interactant?: (fhir.ClinicalUseDefinitionInteractionInteractant | null)[] | undefined;
    /**
     * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The effect of the interaction, for example "reduced gastric absorption of primary medication".
     */
    effect?: fhir.CodeableReference | undefined;
    /**
     * The incidence of the interaction, e.g. theoretical, observed.
     */
    incidence?: fhir.CodeableConcept | undefined;
    /**
     * Actions for managing the interaction.
     */
    management?: (fhir.CodeableConcept | null)[] | undefined;
}
/**
 * Describe the possible undesirable effects (negative outcomes) from the use of the medicinal product as treatment.
 */
export interface ClinicalUseDefinitionUndesirableEffect extends fhir.BackboneElement {
    /**
     * The situation in which the undesirable effect may manifest.
     */
    symptomConditionEffect?: fhir.CodeableReference | undefined;
    /**
     * High level classification of the effect.
     */
    classification?: fhir.CodeableConcept | undefined;
    /**
     * How often the effect is seen.
     */
    frequencyOfOccurrence?: fhir.CodeableConcept | undefined;
}
/**
 * A critical piece of information about environmental, health or physical risks or hazards that serve as caution to the user. For example 'Do not operate heavy machinery', 'May cause drowsiness', or 'Get medical advice/attention if you feel unwell'.
 */
export interface ClinicalUseDefinitionWarning extends fhir.BackboneElement {
    /**
     * A textual definition of this warning, with formatting.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalUseDefinition.warning.description
     */
    _description?: fhir.FhirElement;
    /**
     * A coded or unformatted textual definition of this warning.
     */
    code?: fhir.CodeableConcept | undefined;
}
/**
 * A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.
 */
export interface ClinicalUseDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ClinicalUseDefinition" | null;
    /**
     * Business identifier for this issue.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * indication | contraindication | interaction | undesirable-effect | warning.
     */
    type: 'contraindication' | 'indication' | 'interaction' | 'undesirable-effect' | 'warning' | null;
    /**
     * Extended properties for primitive element: ClinicalUseDefinition.type
     */
    _type?: fhir.FhirElement;
    /**
     * A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy and Lactation", "Overdose", "Effects on Ability to Drive and Use Machines".
     */
    category?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The medication or procedure for which this is an indication.
     */
    subject?: (fhir.Reference | null)[] | undefined;
    /**
     * Whether this is a current issue or one that has been retired etc.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * Specifics for when this is a contraindication.
     */
    contraindication?: fhir.ClinicalUseDefinitionContraindication | undefined;
    /**
     * Specifics for when this is an indication.
     */
    indication?: fhir.ClinicalUseDefinitionIndication | undefined;
    /**
     * Specifics for when this is an interaction.
     */
    interaction?: fhir.ClinicalUseDefinitionInteraction | undefined;
    /**
     * The population group to which this applies.
     */
    population?: (fhir.Reference | null)[] | undefined;
    /**
     * Describe the possible undesirable effects (negative outcomes) from the use of the medicinal product as treatment.
     */
    undesirableEffect?: fhir.ClinicalUseDefinitionUndesirableEffect | undefined;
    /**
     * A critical piece of information about environmental, health or physical risks or hazards that serve as caution to the user. For example 'Do not operate heavy machinery', 'May cause drowsiness', or 'Get medical advice/attention if you feel unwell'.
     */
    warning?: fhir.ClinicalUseDefinitionWarning | undefined;
}
//# sourceMappingURL=ClinicalUseDefinition.d.ts.map