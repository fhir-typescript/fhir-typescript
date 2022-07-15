import * as fhir from '../fhir.js';
import { GroupMeasureCodeType } from '../fhirValueSets/GroupMeasureCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { ResearchElementTypeCodeType } from '../fhirValueSets/ResearchElementTypeCodes.js';
import { VariableTypeCodeType } from '../fhirValueSets/VariableTypeCodes.js';
/**
 * Valid arguments for the ResearchElementDefinitionCharacteristic type.
 */
export interface ResearchElementDefinitionCharacteristicArgs extends fhir.BackboneElementArgs {
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definition?: fhir.CodeableConcept | fhir.FhirCanonical | fhir.Expression | fhir.DataRequirement | undefined;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCanonical?: fhir.FhirCanonical | string | undefined;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionExpression?: fhir.ExpressionArgs | undefined;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionDataRequirement?: fhir.DataRequirementArgs | undefined;
    /**
     * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
     */
    usageContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * When true, members with this characteristic are excluded from the element.
     */
    exclude?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.exclude
     */
    _exclude?: fhir.FhirElementArgs;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhir.CodeableConceptArgs | undefined;
    /**
     * A narrative description of the time period the study covers.
     */
    studyEffectiveDescription?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.studyEffectiveDescription
     */
    _studyEffectiveDescription?: fhir.FhirElementArgs;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffective?: fhir.FhirDateTime | fhir.Period | fhir.Duration | fhir.Timing | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectiveDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectiveDuration?: fhir.DurationArgs | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectiveTiming?: fhir.TimingArgs | undefined;
    /**
     * Indicates duration from the study initiation.
     */
    studyEffectiveTimeFromStart?: fhir.DurationArgs | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    studyEffectiveGroupMeasure?: fhir.FhirCode<GroupMeasureCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.studyEffectiveGroupMeasure
     */
    _studyEffectiveGroupMeasure?: fhir.FhirElementArgs;
    /**
     * A narrative description of the time period the study covers.
     */
    participantEffectiveDescription?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.participantEffectiveDescription
     */
    _participantEffectiveDescription?: fhir.FhirElementArgs;
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
    participantEffectiveTimeFromStart?: fhir.DurationArgs | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    participantEffectiveGroupMeasure?: fhir.FhirCode<GroupMeasureCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.participantEffectiveGroupMeasure
     */
    _participantEffectiveGroupMeasure?: fhir.FhirElementArgs;
}
/**
 * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 */
export declare class ResearchElementDefinitionCharacteristic extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definition: (fhir.CodeableConcept | fhir.FhirCanonical | fhir.Expression | fhir.DataRequirement) | null;
    /**
     * Internal flag to properly serialize choice-type element ResearchElementDefinition.characteristic.definition[x]
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
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhir.CodeableConcept | undefined;
    /**
     * A narrative description of the time period the study covers.
     */
    studyEffectiveDescription?: fhir.FhirString | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffective?: (fhir.FhirDateTime | fhir.Period | fhir.Duration | fhir.Timing) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ResearchElementDefinition.characteristic.studyEffective[x]
     */
    protected static readonly _fts_studyEffectiveIsChoice: true;
    /**
     * Indicates duration from the study initiation.
     */
    studyEffectiveTimeFromStart?: fhir.Duration | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    studyEffectiveGroupMeasure?: fhir.FhirCode<GroupMeasureCodeType> | undefined;
    /**
     * A narrative description of the time period the study covers.
     */
    participantEffectiveDescription?: fhir.FhirString | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffective?: (fhir.FhirDateTime | fhir.Period | fhir.Duration | fhir.Timing) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ResearchElementDefinition.characteristic.participantEffective[x]
     */
    protected static readonly _fts_participantEffectiveIsChoice: true;
    /**
     * Indicates duration from the participant's study entry.
     */
    participantEffectiveTimeFromStart?: fhir.Duration | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    participantEffectiveGroupMeasure?: fhir.FhirCode<GroupMeasureCodeType> | undefined;
    /**
     * Default constructor for ResearchElementDefinitionCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ResearchElementDefinitionCharacteristicArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ResearchElementDefinition type.
 */
export interface ResearchElementDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ResearchElementDefinition" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this research element definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different research element definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the research element definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
     */
    shortTitle?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.shortTitle
     */
    _shortTitle?: fhir.FhirElementArgs;
    /**
     * An explanatory or alternate title for the ResearchElementDefinition giving additional information about its content.
     */
    subtitle?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.subtitle
     */
    _subtitle?: fhir.FhirElementArgs;
    /**
     * Allows filtering of research element definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of research element definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * The subject of the ResearchElementDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchElementDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subject?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * The subject of the ResearchElementDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchElementDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The subject of the ResearchElementDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchElementDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectReference?: fhir.ReferenceArgs | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the research element definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the research element definition is the organization or individual primarily responsible for the maintenance and upkeep of the research element definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the research element definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the research element definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the research element definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the research element definition is presumed to be the predominant language in the place the research element definition was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    comment?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.comment
     */
    _comment?: (fhir.FhirElementArgs | null)[];
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the research element definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the research element definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this research element definition.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * A detailed description, from a clinical perspective, of how the ResearchElementDefinition is used.
     */
    usage?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.usage
     */
    _usage?: fhir.FhirElementArgs;
    /**
     * A copyright statement relating to the research element definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research element definition.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.approvalDate
     */
    _approvalDate?: fhir.FhirElementArgs;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElementArgs;
    /**
     * The effective period for a research element definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Descriptive topics related to the content of the ResearchElementDefinition. Topics provide a high-level categorization grouping types of ResearchElementDefinitions that can be useful for filtering and searching.
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
     * A reference to a Library resource containing the formal logic used by the ResearchElementDefinition.
     */
    library?: fhir.FhirCanonical[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.library
     */
    _library?: (fhir.FhirElementArgs | null)[];
    /**
     * The type of research element, a population, an exposure, or an outcome.
     */
    type: fhir.FhirCode<ResearchElementTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * The type of the outcome (e.g. Dichotomous, Continuous, or Descriptive).
     */
    variableType?: fhir.FhirCode<VariableTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.variableType
     */
    _variableType?: fhir.FhirElementArgs;
    /**
     * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
     */
    characteristic: fhir.ResearchElementDefinitionCharacteristicArgs[] | null;
}
/**
 * The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
export declare class ResearchElementDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ResearchElementDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this research element definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier: fhir.Identifier[];
    /**
     * There may be different research element definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the research element definition with the format [url]|[version].
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
     * An explanatory or alternate title for the ResearchElementDefinition giving additional information about its content.
     */
    subtitle?: fhir.FhirString | undefined;
    /**
     * Allows filtering of research element definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of research element definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * The subject of the ResearchElementDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchElementDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subject?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ResearchElementDefinition.subject[x]
     */
    protected static readonly _fts_subjectIsChoice: true;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the research element definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the research element definition is the organization or individual primarily responsible for the maintenance and upkeep of the research element definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the research element definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the research element definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the research element definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the research element definition is presumed to be the predominant language in the place the research element definition was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    comment: fhir.FhirString[];
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the research element definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the research element definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this research element definition.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * A detailed description, from a clinical perspective, of how the ResearchElementDefinition is used.
     */
    usage?: fhir.FhirString | undefined;
    /**
     * A copyright statement relating to the research element definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research element definition.
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
     * The effective period for a research element definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Descriptive topics related to the content of the ResearchElementDefinition. Topics provide a high-level categorization grouping types of ResearchElementDefinitions that can be useful for filtering and searching.
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
     * A reference to a Library resource containing the formal logic used by the ResearchElementDefinition.
     */
    library: fhir.FhirCanonical[];
    /**
     * The type of research element, a population, an exposure, or an outcome.
     */
    type: fhir.FhirCode<ResearchElementTypeCodeType> | null;
    /**
     * The type of the outcome (e.g. Dichotomous, Continuous, or Descriptive).
     */
    variableType?: fhir.FhirCode<VariableTypeCodeType> | undefined;
    /**
     * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
     */
    characteristic: fhir.ResearchElementDefinitionCharacteristic[];
    /**
     * Default constructor for ResearchElementDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ResearchElementDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ResearchElementDefinition.d.ts.map