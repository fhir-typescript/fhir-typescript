import * as fhir from '../fhir.js';
import { ClinicalUseDefinitionTypeCodeType } from '../fhirValueSets/ClinicalUseDefinitionTypeCodes.js';
/**
 * Valid arguments for the ClinicalUseDefinitionContraindicationOtherTherapy type.
 */
export interface ClinicalUseDefinitionContraindicationOtherTherapyArgs extends fhir.BackboneElementArgs {
    /**
     * The type of relationship between the medicinal product indication or contraindication and another therapy.
     */
    relationshipType: fhir.CodeableConceptArgs | null;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    therapy: fhir.CodeableReferenceArgs | null;
}
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the contraindication.
 */
export declare class ClinicalUseDefinitionContraindicationOtherTherapy extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of relationship between the medicinal product indication or contraindication and another therapy.
     */
    relationshipType: fhir.CodeableConcept | null;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    therapy: fhir.CodeableReference | null;
    /**
     * Default constructor for ClinicalUseDefinitionContraindicationOtherTherapy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClinicalUseDefinitionContraindicationOtherTherapyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClinicalUseDefinitionContraindication type.
 */
export interface ClinicalUseDefinitionContraindicationArgs extends fhir.BackboneElementArgs {
    /**
     * The situation that is being documented as contraindicating against this item.
     */
    diseaseSymptomProcedure?: fhir.CodeableReferenceArgs | undefined;
    /**
     * The status of the disease or symptom for the contraindication, for example "chronic" or "metastatic".
     */
    diseaseStatus?: fhir.CodeableReferenceArgs | undefined;
    /**
     * A comorbidity (concurrent condition) or coinfection.
     */
    comorbidity?: fhir.CodeableReferenceArgs[] | undefined;
    /**
     * The indication which this is a contraidication for.
     */
    indication?: fhir.ReferenceArgs[] | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the contraindication.
     */
    otherTherapy?: fhir.ClinicalUseDefinitionContraindicationOtherTherapyArgs[] | undefined;
}
/**
 * Specifics for when this is a contraindication.
 */
export declare class ClinicalUseDefinitionContraindication extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    comorbidity: fhir.CodeableReference[];
    /**
     * The indication which this is a contraidication for.
     */
    indication: fhir.Reference[];
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the contraindication.
     */
    otherTherapy: fhir.ClinicalUseDefinitionContraindicationOtherTherapy[];
    /**
     * Default constructor for ClinicalUseDefinitionContraindication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClinicalUseDefinitionContraindicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClinicalUseDefinitionIndication type.
 */
export interface ClinicalUseDefinitionIndicationArgs extends fhir.BackboneElementArgs {
    /**
     * The situation that is being documented as an indicaton for this item.
     */
    diseaseSymptomProcedure?: fhir.CodeableReferenceArgs | undefined;
    /**
     * The status of the disease or symptom for the indication, for example "chronic" or "metastatic".
     */
    diseaseStatus?: fhir.CodeableReferenceArgs | undefined;
    /**
     * A comorbidity (concurrent condition) or coinfection as part of the indication.
     */
    comorbidity?: fhir.CodeableReferenceArgs[] | undefined;
    /**
     * The intended effect, aim or strategy to be achieved.
     */
    intendedEffect?: fhir.CodeableReferenceArgs | undefined;
    /**
     * Timing or duration information, that may be associated with use with the indicated condition e.g. Adult patients suffering from myocardial infarction (from a few days until less than 35 days), ischaemic stroke (from 7 days until less than 6 months).
     */
    duration?: fhir.Range | fhir.FhirString | undefined;
    /**
     * Timing or duration information, that may be associated with use with the indicated condition e.g. Adult patients suffering from myocardial infarction (from a few days until less than 35 days), ischaemic stroke (from 7 days until less than 6 months).
     */
    durationRange?: fhir.RangeArgs | undefined;
    /**
     * Timing or duration information, that may be associated with use with the indicated condition e.g. Adult patients suffering from myocardial infarction (from a few days until less than 35 days), ischaemic stroke (from 7 days until less than 6 months).
     */
    durationString?: fhir.FhirString | string | undefined;
    /**
     * An unwanted side effect or negative outcome that may happen if you use the drug (or other subject of this resource) for this indication.
     */
    undesirableEffect?: fhir.ReferenceArgs[] | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhir.ClinicalUseDefinitionContraindicationOtherTherapyArgs[] | undefined;
}
/**
 * Specifics for when this is an indication.
 */
export declare class ClinicalUseDefinitionIndication extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    comorbidity: fhir.CodeableReference[];
    /**
     * The intended effect, aim or strategy to be achieved.
     */
    intendedEffect?: fhir.CodeableReference | undefined;
    /**
     * Timing or duration information, that may be associated with use with the indicated condition e.g. Adult patients suffering from myocardial infarction (from a few days until less than 35 days), ischaemic stroke (from 7 days until less than 6 months).
     */
    duration?: (fhir.Range | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ClinicalUseDefinition.indication.duration[x]
     */
    protected static readonly _fts_durationIsChoice: true;
    /**
     * An unwanted side effect or negative outcome that may happen if you use the drug (or other subject of this resource) for this indication.
     */
    undesirableEffect: fhir.Reference[];
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy: fhir.ClinicalUseDefinitionContraindicationOtherTherapy[];
    /**
     * Default constructor for ClinicalUseDefinitionIndication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClinicalUseDefinitionIndicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClinicalUseDefinitionInteractionInteractant type.
 */
export interface ClinicalUseDefinitionInteractionInteractantArgs extends fhir.BackboneElementArgs {
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    item?: fhir.Reference | fhir.CodeableConcept | undefined;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    itemReference?: fhir.ReferenceArgs | undefined;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    itemCodeableConcept?: fhir.CodeableConceptArgs | undefined;
}
/**
 * The specific medication, food, substance or laboratory test that interacts.
 */
export declare class ClinicalUseDefinitionInteractionInteractant extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    item: (fhir.Reference | fhir.CodeableConcept) | null;
    /**
     * Internal flag to properly serialize choice-type element ClinicalUseDefinition.interaction.interactant.item[x]
     */
    protected static readonly _fts_itemIsChoice: true;
    /**
     * Default constructor for ClinicalUseDefinitionInteractionInteractant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClinicalUseDefinitionInteractionInteractantArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClinicalUseDefinitionInteraction type.
 */
export interface ClinicalUseDefinitionInteractionArgs extends fhir.BackboneElementArgs {
    /**
     * The specific medication, food, substance or laboratory test that interacts.
     */
    interactant?: fhir.ClinicalUseDefinitionInteractionInteractantArgs[] | undefined;
    /**
     * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The effect of the interaction, for example "reduced gastric absorption of primary medication".
     */
    effect?: fhir.CodeableReferenceArgs | undefined;
    /**
     * The incidence of the interaction, e.g. theoretical, observed.
     */
    incidence?: fhir.CodeableConceptArgs | undefined;
    /**
     * Actions for managing the interaction.
     */
    management?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * Specifics for when this is an interaction.
 */
export declare class ClinicalUseDefinitionInteraction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The specific medication, food, substance or laboratory test that interacts.
     */
    interactant: fhir.ClinicalUseDefinitionInteractionInteractant[];
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
    management: fhir.CodeableConcept[];
    /**
     * Default constructor for ClinicalUseDefinitionInteraction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClinicalUseDefinitionInteractionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClinicalUseDefinitionUndesirableEffect type.
 */
export interface ClinicalUseDefinitionUndesirableEffectArgs extends fhir.BackboneElementArgs {
    /**
     * The situation in which the undesirable effect may manifest.
     */
    symptomConditionEffect?: fhir.CodeableReferenceArgs | undefined;
    /**
     * High level classification of the effect.
     */
    classification?: fhir.CodeableConceptArgs | undefined;
    /**
     * How often the effect is seen.
     */
    frequencyOfOccurrence?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Describe the possible undesirable effects (negative outcomes) from the use of the medicinal product as treatment.
 */
export declare class ClinicalUseDefinitionUndesirableEffect extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    /**
     * Default constructor for ClinicalUseDefinitionUndesirableEffect - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClinicalUseDefinitionUndesirableEffectArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClinicalUseDefinitionWarning type.
 */
export interface ClinicalUseDefinitionWarningArgs extends fhir.BackboneElementArgs {
    /**
     * A textual definition of this warning, with formatting.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ClinicalUseDefinition.warning.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * A coded or unformatted textual definition of this warning.
     */
    code?: fhir.CodeableConceptArgs | undefined;
}
/**
 * A critical piece of information about environmental, health or physical risks or hazards that serve as caution to the user. For example 'Do not operate heavy machinery', 'May cause drowsiness', or 'Get medical advice/attention if you feel unwell'.
 */
export declare class ClinicalUseDefinitionWarning extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A textual definition of this warning, with formatting.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * A coded or unformatted textual definition of this warning.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ClinicalUseDefinitionWarning - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClinicalUseDefinitionWarningArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClinicalUseDefinition type.
 */
export interface ClinicalUseDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ClinicalUseDefinition" | undefined;
    /**
     * Business identifier for this issue.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * indication | contraindication | interaction | undesirable-effect | warning.
     */
    type: fhir.FhirCode<ClinicalUseDefinitionTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ClinicalUseDefinition.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy and Lactation", "Overdose", "Effects on Ability to Drive and Use Machines".
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The medication or procedure for which this is an indication.
     */
    subject?: fhir.ReferenceArgs[] | undefined;
    /**
     * Whether this is a current issue or one that has been retired etc.
     */
    status?: fhir.CodeableConceptArgs | undefined;
    /**
     * Specifics for when this is a contraindication.
     */
    contraindication?: fhir.ClinicalUseDefinitionContraindicationArgs | undefined;
    /**
     * Specifics for when this is an indication.
     */
    indication?: fhir.ClinicalUseDefinitionIndicationArgs | undefined;
    /**
     * Specifics for when this is an interaction.
     */
    interaction?: fhir.ClinicalUseDefinitionInteractionArgs | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhir.ReferenceArgs[] | undefined;
    /**
     * Describe the possible undesirable effects (negative outcomes) from the use of the medicinal product as treatment.
     */
    undesirableEffect?: fhir.ClinicalUseDefinitionUndesirableEffectArgs | undefined;
    /**
     * A critical piece of information about environmental, health or physical risks or hazards that serve as caution to the user. For example 'Do not operate heavy machinery', 'May cause drowsiness', or 'Get medical advice/attention if you feel unwell'.
     */
    warning?: fhir.ClinicalUseDefinitionWarningArgs | undefined;
}
/**
 * A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.
 */
export declare class ClinicalUseDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ClinicalUseDefinition";
    /**
     * Business identifier for this issue.
     */
    identifier: fhir.Identifier[];
    /**
     * indication | contraindication | interaction | undesirable-effect | warning.
     */
    type: fhir.FhirCode<ClinicalUseDefinitionTypeCodeType> | null;
    /**
     * A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy and Lactation", "Overdose", "Effects on Ability to Drive and Use Machines".
     */
    category: fhir.CodeableConcept[];
    /**
     * The medication or procedure for which this is an indication.
     */
    subject: fhir.Reference[];
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
    population: fhir.Reference[];
    /**
     * Describe the possible undesirable effects (negative outcomes) from the use of the medicinal product as treatment.
     */
    undesirableEffect?: fhir.ClinicalUseDefinitionUndesirableEffect | undefined;
    /**
     * A critical piece of information about environmental, health or physical risks or hazards that serve as caution to the user. For example 'Do not operate heavy machinery', 'May cause drowsiness', or 'Get medical advice/attention if you feel unwell'.
     */
    warning?: fhir.ClinicalUseDefinitionWarning | undefined;
    /**
     * Default constructor for ClinicalUseDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClinicalUseDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ClinicalUseDefinition.d.ts.map