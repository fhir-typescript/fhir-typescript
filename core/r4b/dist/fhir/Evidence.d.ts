import * as fhir from '../fhir.js';
import { VariableHandlingCodeType } from '../fhirValueSets/VariableHandlingCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the EvidenceVariableDefinition type.
 */
export interface EvidenceVariableDefinitionArgs extends fhir.BackboneElementArgs {
    /**
     * A text description or summary of the variable.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Evidence.variableDefinition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Footnotes and/or explanatory notes.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * population | subpopulation | exposure | referenceExposure | measuredVariable | confounder.
     */
    variableRole: fhir.CodeableConceptArgs | null;
    /**
     * Definition of the actual variable related to the statistic(s).
     */
    observed?: fhir.ReferenceArgs | undefined;
    /**
     * Definition of the intended variable related to the Evidence.
     */
    intended?: fhir.ReferenceArgs | undefined;
    /**
     * Indication of quality of match between intended variable to actual variable.
     */
    directnessMatch?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Evidence variable such as population, exposure, or outcome.
 */
export declare class EvidenceVariableDefinition extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A text description or summary of the variable.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * Footnotes and/or explanatory notes.
     */
    note: fhir.Annotation[];
    /**
     * population | subpopulation | exposure | referenceExposure | measuredVariable | confounder.
     */
    variableRole: fhir.CodeableConcept | null;
    /**
     * Definition of the actual variable related to the statistic(s).
     */
    observed?: fhir.Reference | undefined;
    /**
     * Definition of the intended variable related to the Evidence.
     */
    intended?: fhir.Reference | undefined;
    /**
     * Indication of quality of match between intended variable to actual variable.
     */
    directnessMatch?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for EvidenceVariableDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceVariableDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EvidenceStatisticSampleSize type.
 */
export interface EvidenceStatisticSampleSizeArgs extends fhir.BackboneElementArgs {
    /**
     * Human-readable summary of population sample size.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.sampleSize.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Footnote or explanatory note about the sample size.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Number of participants in the population.
     */
    numberOfStudies?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.sampleSize.numberOfStudies
     */
    _numberOfStudies?: fhir.FhirElementArgs;
    /**
     * A human-readable string to clarify or explain concepts about the sample size.
     */
    numberOfParticipants?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.sampleSize.numberOfParticipants
     */
    _numberOfParticipants?: fhir.FhirElementArgs;
    /**
     * Number of participants with known results for measured variables.
     */
    knownDataCount?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.sampleSize.knownDataCount
     */
    _knownDataCount?: fhir.FhirElementArgs;
}
/**
 * Number of samples in the statistic.
 */
export declare class EvidenceStatisticSampleSize extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Human-readable summary of population sample size.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Footnote or explanatory note about the sample size.
     */
    note: fhir.Annotation[];
    /**
     * Number of participants in the population.
     */
    numberOfStudies?: fhir.FhirUnsignedInt | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the sample size.
     */
    numberOfParticipants?: fhir.FhirUnsignedInt | undefined;
    /**
     * Number of participants with known results for measured variables.
     */
    knownDataCount?: fhir.FhirUnsignedInt | undefined;
    /**
     * Default constructor for EvidenceStatisticSampleSize - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceStatisticSampleSizeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EvidenceStatisticAttributeEstimate type.
 */
export interface EvidenceStatisticAttributeEstimateArgs extends fhir.BackboneElementArgs {
    /**
     * Human-readable summary of the estimate.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.attributeEstimate.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Footnote or explanatory note about the estimate.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * The type of attribute estimate, eg confidence interval or p value.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Often the p value
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * Use 95 for a 95% confidence interval.
     */
    level?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.attributeEstimate.level
     */
    _level?: fhir.FhirElementArgs;
    /**
     * Lower bound of confidence interval.
     */
    range?: fhir.RangeArgs | undefined;
    /**
     * A nested attribute estimate; which is the attribute estimate of an attribute estimate
     */
    attributeEstimate?: fhir.EvidenceStatisticAttributeEstimateArgs[] | undefined;
}
/**
 * A statistical attribute of the statistic such as a measure of heterogeneity.
 */
export declare class EvidenceStatisticAttributeEstimate extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Human-readable summary of the estimate.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Footnote or explanatory note about the estimate.
     */
    note: fhir.Annotation[];
    /**
     * The type of attribute estimate, eg confidence interval or p value.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Often the p value
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Use 95 for a 95% confidence interval.
     */
    level?: fhir.FhirDecimal | undefined;
    /**
     * Lower bound of confidence interval.
     */
    range?: fhir.Range | undefined;
    /**
     * A nested attribute estimate; which is the attribute estimate of an attribute estimate
     */
    attributeEstimate: fhir.EvidenceStatisticAttributeEstimate[];
    /**
     * Default constructor for EvidenceStatisticAttributeEstimate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceStatisticAttributeEstimateArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EvidenceStatisticModelCharacteristicVariable type.
 */
export interface EvidenceStatisticModelCharacteristicVariableArgs extends fhir.BackboneElementArgs {
    /**
     * Description of the variable.
     */
    variableDefinition: fhir.ReferenceArgs | null;
    /**
     * How the variable is classified for use in adjusted analysis.
     */
    handling?: fhir.FhirCode<VariableHandlingCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.modelCharacteristic.variable.handling
     */
    _handling?: fhir.FhirElementArgs;
    /**
     * Description for grouping of ordinal or polychotomous variables.
     */
    valueCategory?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Discrete value for grouping of ordinal or polychotomous variables.
     */
    valueQuantity?: fhir.QuantityArgs[] | undefined;
    /**
     * Range of values for grouping of ordinal or polychotomous variables.
     */
    valueRange?: fhir.RangeArgs[] | undefined;
}
/**
 * A variable adjusted for in the adjusted analysis.
 */
export declare class EvidenceStatisticModelCharacteristicVariable extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Description of the variable.
     */
    variableDefinition: fhir.Reference | null;
    /**
     * How the variable is classified for use in adjusted analysis.
     */
    handling?: fhir.FhirCode<VariableHandlingCodeType> | undefined;
    /**
     * Description for grouping of ordinal or polychotomous variables.
     */
    valueCategory: fhir.CodeableConcept[];
    /**
     * Discrete value for grouping of ordinal or polychotomous variables.
     */
    valueQuantity: fhir.Quantity[];
    /**
     * Range of values for grouping of ordinal or polychotomous variables.
     */
    valueRange: fhir.Range[];
    /**
     * Default constructor for EvidenceStatisticModelCharacteristicVariable - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceStatisticModelCharacteristicVariableArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EvidenceStatisticModelCharacteristic type.
 */
export interface EvidenceStatisticModelCharacteristicArgs extends fhir.BackboneElementArgs {
    /**
     * Description of a component of the method to generate the statistic.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * Further specification of the quantified value of the component of the method to generate the statistic.
     */
    value?: fhir.QuantityArgs | undefined;
    /**
     * A variable adjusted for in the adjusted analysis.
     */
    variable?: fhir.EvidenceStatisticModelCharacteristicVariableArgs[] | undefined;
    /**
     * An attribute of the statistic used as a model characteristic.
     */
    attributeEstimate?: fhir.EvidenceStatisticAttributeEstimateArgs[] | undefined;
}
/**
 * A component of the method to generate the statistic.
 */
export declare class EvidenceStatisticModelCharacteristic extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Description of a component of the method to generate the statistic.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Further specification of the quantified value of the component of the method to generate the statistic.
     */
    value?: fhir.Quantity | undefined;
    /**
     * A variable adjusted for in the adjusted analysis.
     */
    variable: fhir.EvidenceStatisticModelCharacteristicVariable[];
    /**
     * An attribute of the statistic used as a model characteristic.
     */
    attributeEstimate: fhir.EvidenceStatisticAttributeEstimate[];
    /**
     * Default constructor for EvidenceStatisticModelCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceStatisticModelCharacteristicArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EvidenceStatistic type.
 */
export interface EvidenceStatisticArgs extends fhir.BackboneElementArgs {
    /**
     * A description of the content value of the statistic.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Footnotes and/or explanatory notes.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Type of statistic, eg relative risk.
     */
    statisticType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Simple strings can be used for descriptive purposes. Exact matching to EvidenceVariable.category.name for the Evidence.variableDefinition[variableRole=measuredVariable].observed=Reference(EvidenceVariable) could facilitate validation within datasets.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * Statistic value.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * When the number of events is the statistic, use Evidence.statistic.quantity and set Evidence.statistic.type.coding.code=C25463 and Evidence.statistic.type.coding.display=Count. When the statistic is an Event Rate (where individual participants may have 2 or more events), use Evidence.statistic.numberOfEvents to record the total number of events rather than the number of participants with events.
     */
    numberOfEvents?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.numberOfEvents
     */
    _numberOfEvents?: fhir.FhirElementArgs;
    /**
     * When the number affected is the statistic, use Evidence.statistic.quantity and set Evidence.statistic.type.coding.code=C25463 and Evidence.statistic.type.coding.display=Count. When the statistic is a Proportion, use Evidence.statistic.numberAffected and enter an integer as the value. When the statistic is an Event Rate (where individual participants may have 2 or more events), use Evidence.statistic.numberAffected to record the number of participants with events rather than the total number of events.
     */
    numberAffected?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.numberAffected
     */
    _numberAffected?: fhir.FhirElementArgs;
    /**
     * Number of samples in the statistic.
     */
    sampleSize?: fhir.EvidenceStatisticSampleSizeArgs | undefined;
    /**
     * A statistical attribute of the statistic such as a measure of heterogeneity.
     */
    attributeEstimate?: fhir.EvidenceStatisticAttributeEstimateArgs[] | undefined;
    /**
     * A component of the method to generate the statistic.
     */
    modelCharacteristic?: fhir.EvidenceStatisticModelCharacteristicArgs[] | undefined;
}
/**
 * Values and parameters for a single statistic.
 */
export declare class EvidenceStatistic extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A description of the content value of the statistic.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Footnotes and/or explanatory notes.
     */
    note: fhir.Annotation[];
    /**
     * Type of statistic, eg relative risk.
     */
    statisticType?: fhir.CodeableConcept | undefined;
    /**
     * Simple strings can be used for descriptive purposes. Exact matching to EvidenceVariable.category.name for the Evidence.variableDefinition[variableRole=measuredVariable].observed=Reference(EvidenceVariable) could facilitate validation within datasets.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Statistic value.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * When the number of events is the statistic, use Evidence.statistic.quantity and set Evidence.statistic.type.coding.code=C25463 and Evidence.statistic.type.coding.display=Count. When the statistic is an Event Rate (where individual participants may have 2 or more events), use Evidence.statistic.numberOfEvents to record the total number of events rather than the number of participants with events.
     */
    numberOfEvents?: fhir.FhirUnsignedInt | undefined;
    /**
     * When the number affected is the statistic, use Evidence.statistic.quantity and set Evidence.statistic.type.coding.code=C25463 and Evidence.statistic.type.coding.display=Count. When the statistic is a Proportion, use Evidence.statistic.numberAffected and enter an integer as the value. When the statistic is an Event Rate (where individual participants may have 2 or more events), use Evidence.statistic.numberAffected to record the number of participants with events rather than the total number of events.
     */
    numberAffected?: fhir.FhirUnsignedInt | undefined;
    /**
     * Number of samples in the statistic.
     */
    sampleSize?: fhir.EvidenceStatisticSampleSize | undefined;
    /**
     * A statistical attribute of the statistic such as a measure of heterogeneity.
     */
    attributeEstimate: fhir.EvidenceStatisticAttributeEstimate[];
    /**
     * A component of the method to generate the statistic.
     */
    modelCharacteristic: fhir.EvidenceStatisticModelCharacteristic[];
    /**
     * Default constructor for EvidenceStatistic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceStatisticArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EvidenceCertainty type.
 */
export interface EvidenceCertaintyArgs extends fhir.BackboneElementArgs {
    /**
     * Textual description of certainty.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Evidence.certainty.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Footnotes and/or explanatory notes.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Aspect of certainty being rated.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Assessment or judgement of the aspect.
     */
    rating?: fhir.CodeableConceptArgs | undefined;
    /**
     * Individual or group who did the rating.
     */
    rater?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Evidence.certainty.rater
     */
    _rater?: fhir.FhirElementArgs;
    /**
     * A domain or subdomain of certainty.
     */
    subcomponent?: fhir.EvidenceCertaintyArgs[] | undefined;
}
/**
 * Assessment of certainty, confidence in the estimates, or quality of the evidence.
 */
export declare class EvidenceCertainty extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Textual description of certainty.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Footnotes and/or explanatory notes.
     */
    note: fhir.Annotation[];
    /**
     * Aspect of certainty being rated.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Assessment or judgement of the aspect.
     */
    rating?: fhir.CodeableConcept | undefined;
    /**
     * Individual or group who did the rating.
     */
    rater?: fhir.FhirString | undefined;
    /**
     * A domain or subdomain of certainty.
     */
    subcomponent: fhir.EvidenceCertainty[];
    /**
     * Default constructor for EvidenceCertainty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceCertaintyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Evidence type.
 */
export interface EvidenceArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Evidence" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred. Multiple instances may share the same URL if they have a distinct version.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Evidence.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this summary outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author. Considerations for making this decision are found in Technical and Business Versions.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Evidence.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the meta.source element to indicate where the current master source of the resource can be found.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Evidence.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Citation Resource or display of suggested citation for this evidence.
     */
    citeAs?: fhir.Reference | fhir.FhirMarkdown | undefined;
    /**
     * Citation Resource or display of suggested citation for this evidence.
     */
    citeAsReference?: fhir.ReferenceArgs | undefined;
    /**
     * Citation Resource or display of suggested citation for this evidence.
     */
    citeAsMarkdown?: fhir.FhirMarkdown | string | undefined;
    /**
     * Allows filtering of summarys s that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Evidence.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the summary. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Evidence.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Evidence.approvalDate
     */
    _approvalDate?: fhir.FhirElementArgs;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Evidence.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElementArgs;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the evidence is the organization or individual primarily responsible for the maintenance and upkeep of the evidence. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Evidence.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    author?: fhir.ContactDetailArgs[] | undefined;
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    editor?: fhir.ContactDetailArgs[] | undefined;
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    reviewer?: fhir.ContactDetailArgs[] | undefined;
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    endorser?: fhir.ContactDetailArgs[] | undefined;
    /**
     * Link or citation to artifact associated with the summary.
     */
    relatedArtifact?: fhir.RelatedArtifactArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the evidence was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence is presumed to be the predominant language in the place the evidence was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Evidence.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Declarative description of the Evidence.
     */
    assertion?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Evidence.assertion
     */
    _assertion?: fhir.FhirElementArgs;
    /**
     * Footnotes and/or explanatory notes.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Evidence variable such as population, exposure, or outcome.
     */
    variableDefinition: fhir.EvidenceVariableDefinitionArgs[] | null;
    /**
     * The method to combine studies.
     */
    synthesisType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The type of study that produced this evidence.
     */
    studyType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Values and parameters for a single statistic.
     */
    statistic?: fhir.EvidenceStatisticArgs[] | undefined;
    /**
     * Assessment of certainty, confidence in the estimates, or quality of the evidence.
     */
    certainty?: fhir.EvidenceCertaintyArgs[] | undefined;
}
/**
 * The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (eg population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence.
 */
export declare class Evidence extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Evidence";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred. Multiple instances may share the same URL if they have a distinct version.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this summary outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier: fhir.Identifier[];
    /**
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author. Considerations for making this decision are found in Technical and Business Versions.
     */
    version?: fhir.FhirString | undefined;
    /**
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the meta.source element to indicate where the current master source of the resource can be found.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Citation Resource or display of suggested citation for this evidence.
     */
    citeAs?: (fhir.Reference | fhir.FhirMarkdown) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Evidence.citeAs[x]
     */
    protected static readonly _fts_citeAsIsChoice: true;
    /**
     * Allows filtering of summarys s that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the summary. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: fhir.FhirDate | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the evidence is the organization or individual primarily responsible for the maintenance and upkeep of the evidence. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    contact: fhir.ContactDetail[];
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    author: fhir.ContactDetail[];
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    editor: fhir.ContactDetail[];
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    reviewer: fhir.ContactDetail[];
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    endorser: fhir.ContactDetail[];
    /**
     * Link or citation to artifact associated with the summary.
     */
    relatedArtifact: fhir.RelatedArtifact[];
    /**
     * This description can be used to capture details such as why the evidence was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence is presumed to be the predominant language in the place the evidence was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * Declarative description of the Evidence.
     */
    assertion?: fhir.FhirMarkdown | undefined;
    /**
     * Footnotes and/or explanatory notes.
     */
    note: fhir.Annotation[];
    /**
     * Evidence variable such as population, exposure, or outcome.
     */
    variableDefinition: fhir.EvidenceVariableDefinition[];
    /**
     * The method to combine studies.
     */
    synthesisType?: fhir.CodeableConcept | undefined;
    /**
     * The type of study that produced this evidence.
     */
    studyType?: fhir.CodeableConcept | undefined;
    /**
     * Values and parameters for a single statistic.
     */
    statistic: fhir.EvidenceStatistic[];
    /**
     * Assessment of certainty, confidence in the estimates, or quality of the evidence.
     */
    certainty: fhir.EvidenceCertainty[];
    /**
     * Default constructor for Evidence - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Evidence.d.ts.map