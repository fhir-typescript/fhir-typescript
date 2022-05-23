import * as fhir from '../fhir.js';
import { GroupMeasureCodeType } from '../fhirValueSets/GroupMeasureCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { VariableTypeCodeType } from '../fhirValueSets/VariableTypeCodes.js';
/**
 * Valid arguments for the EvidenceVariableCharacteristic type.
 */
export interface EvidenceVariableCharacteristicArgs extends fhir.BackboneElementArgs {
    /**
     * A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definition?: fhir.Reference | fhir.FhirCanonical | fhir.CodeableConcept | fhir.Expression | fhir.DataRequirement | fhir.TriggerDefinition | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionReference?: fhir.ReferenceArgs | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCanonical?: fhir.FhirCanonical | string | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionExpression?: fhir.ExpressionArgs | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionDataRequirement?: fhir.DataRequirementArgs | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionTriggerDefinition?: fhir.TriggerDefinitionArgs | undefined;
    /**
     * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
     */
    usageContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * When true, members with this characteristic are excluded from the element.
     */
    exclude?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffective?: fhir.FhirDateTime | fhir.Period | fhir.Duration | fhir.Timing | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveDuration?: fhir.DurationArgs | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveTiming?: fhir.TimingArgs | undefined;
    /**
     * Indicates duration from the participant's study entry.
     */
    timeFromStart?: fhir.DurationArgs | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    groupMeasure?: fhir.FhirCode<GroupMeasureCodeType> | string | undefined;
}
/**
 * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 */
export declare class EvidenceVariableCharacteristic extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definition: (fhir.Reference | fhir.FhirCanonical | fhir.CodeableConcept | fhir.Expression | fhir.DataRequirement | fhir.TriggerDefinition) | null;
    /**
     * Internal flag to properly serialize choice-type element EvidenceVariable.characteristic.definition[x]
     */
    protected static readonly _fts_definitionIsChoice: true;
    /**
     * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
     */
    usageContext: fhir.UsageContext[];
    /**
     * When true, members with this characteristic are excluded from the element.
     */
    exclude?: fhir.FhirBoolean | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffective?: (fhir.FhirDateTime | fhir.Period | fhir.Duration | fhir.Timing) | undefined;
    /**
     * Internal flag to properly serialize choice-type element EvidenceVariable.characteristic.participantEffective[x]
     */
    protected static readonly _fts_participantEffectiveIsChoice: true;
    /**
     * Indicates duration from the participant's study entry.
     */
    timeFromStart?: fhir.Duration | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    groupMeasure?: fhir.FhirCode<GroupMeasureCodeType> | undefined;
    /**
     * Default constructor for EvidenceVariableCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceVariableCharacteristicArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for groupMeasure (EvidenceVariable.characteristic.groupMeasure)
     */
    static get groupMeasureRequiredCodes(): {
        readonly Mean: "mean";
        readonly MeanOfStudyMeans: "mean-of-mean";
        readonly MeanOfStudyMedins: "mean-of-median";
        readonly Median: "median";
        readonly MedianOfStudyMeans: "median-of-mean";
        readonly MedianOfStudyMedians: "median-of-median";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EvidenceVariable type.
 */
export interface EvidenceVariableArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "EvidenceVariable" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this evidence variable outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different evidence variable instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the evidence variable with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
     */
    shortTitle?: fhir.FhirString | string | undefined;
    /**
     * An explanatory or alternate title for the EvidenceVariable giving additional information about its content.
     */
    subtitle?: fhir.FhirString | string | undefined;
    /**
     * Allows filtering of evidence variables that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the evidence variable. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the evidence variable is the organization or individual primarily responsible for the maintenance and upkeep of the evidence variable. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence variable. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the evidence variable was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence variable as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence variable is presumed to be the predominant language in the place the evidence variable was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the evidence variable to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A copyright statement relating to the evidence variable and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the evidence variable.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | string | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: fhir.FhirDate | string | undefined;
    /**
     * The effective period for a evidence variable  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Descriptive topics related to the content of the EvidenceVariable. Topics provide a high-level categorization grouping types of EvidenceVariables that can be useful for filtering and searching.
     */
    topic?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhir.ContactDetailArgs[] | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhir.ContactDetailArgs[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhir.ContactDetailArgs[] | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhir.ContactDetailArgs[] | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.RelatedArtifactArgs[] | undefined;
    /**
     * The type of evidence element, a population, an exposure, or an outcome.
     */
    type?: fhir.FhirCode<VariableTypeCodeType> | string | undefined;
    /**
     * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
     */
    characteristic: fhir.EvidenceVariableCharacteristicArgs[] | null;
}
/**
 * The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
export declare class EvidenceVariable extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "EvidenceVariable";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this evidence variable outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier: fhir.Identifier[];
    /**
     * There may be different evidence variable instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the evidence variable with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
     */
    shortTitle?: fhir.FhirString | undefined;
    /**
     * An explanatory or alternate title for the EvidenceVariable giving additional information about its content.
     */
    subtitle?: fhir.FhirString | undefined;
    /**
     * Allows filtering of evidence variables that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the evidence variable. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the evidence variable is the organization or individual primarily responsible for the maintenance and upkeep of the evidence variable. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence variable. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the evidence variable was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence variable as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence variable is presumed to be the predominant language in the place the evidence variable was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note: fhir.Annotation[];
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the evidence variable to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * A copyright statement relating to the evidence variable and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the evidence variable.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: fhir.FhirDate | undefined;
    /**
     * The effective period for a evidence variable  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Descriptive topics related to the content of the EvidenceVariable. Topics provide a high-level categorization grouping types of EvidenceVariables that can be useful for filtering and searching.
     */
    topic: fhir.CodeableConcept[];
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author: fhir.ContactDetail[];
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor: fhir.ContactDetail[];
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer: fhir.ContactDetail[];
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser: fhir.ContactDetail[];
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact: fhir.RelatedArtifact[];
    /**
     * The type of evidence element, a population, an exposure, or an outcome.
     */
    type?: fhir.FhirCode<VariableTypeCodeType> | undefined;
    /**
     * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
     */
    characteristic: fhir.EvidenceVariableCharacteristic[];
    /**
     * Default constructor for EvidenceVariable - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceVariableArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (EvidenceVariable.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Draft: "draft";
        readonly Retired: "retired";
        readonly Unknown: "unknown";
    };
    /**
     * Required-bound Value Set for type (EvidenceVariable.type)
     */
    static get typeRequiredCodes(): {
        readonly Continuous: "continuous";
        readonly Descriptive: "descriptive";
        readonly Dichotomous: "dichotomous";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=EvidenceVariable.d.ts.map