import * as fhir from '../fhir.js';
import { GroupMeasureCodeType } from '../fhirValueSets/GroupMeasureCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { CharacteristicCombinationCodeType } from '../fhirValueSets/CharacteristicCombinationCodes.js';
import { VariableHandlingCodeType } from '../fhirValueSets/VariableHandlingCodes.js';
/**
 * Valid arguments for the EvidenceVariableCharacteristicTimeFromStart type.
 */
export interface EvidenceVariableCharacteristicTimeFromStartArgs extends fhir.BackboneElementArgs {
    /**
     * A short, natural language description.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.timeFromStart.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Used to express the observation at a defined amount of time after the study start.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * Used to express the observation within a period after the study start.
     */
    range?: fhir.RangeArgs | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * Indicates duration, period, or point of observation from the participant's study entry.
 */
export declare class EvidenceVariableCharacteristicTimeFromStart extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A short, natural language description.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Used to express the observation at a defined amount of time after the study start.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Used to express the observation within a period after the study start.
     */
    range?: fhir.Range | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note: fhir.Annotation[];
    /**
     * Default constructor for EvidenceVariableCharacteristicTimeFromStart - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceVariableCharacteristicTimeFromStartArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EvidenceVariableCharacteristic type.
 */
export interface EvidenceVariableCharacteristicArgs extends fhir.BackboneElementArgs {
    /**
     * A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definition?: fhir.Reference | fhir.FhirCanonical | fhir.CodeableConcept | fhir.Expression | undefined;
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
     * Method used for describing characteristic.
     */
    method?: fhir.CodeableConceptArgs | undefined;
    /**
     * Device used for determining characteristic.
     */
    device?: fhir.ReferenceArgs | undefined;
    /**
     * When true, members with this characteristic are excluded from the element.
     */
    exclude?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.exclude
     */
    _exclude?: fhir.FhirElementArgs;
    /**
     * Indicates duration, period, or point of observation from the participant's study entry.
     */
    timeFromStart?: fhir.EvidenceVariableCharacteristicTimeFromStartArgs | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    groupMeasure?: fhir.FhirCode<GroupMeasureCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.groupMeasure
     */
    _groupMeasure?: fhir.FhirElementArgs;
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
    definition: (fhir.Reference | fhir.FhirCanonical | fhir.CodeableConcept | fhir.Expression) | null;
    /**
     * Internal flag to properly serialize choice-type element EvidenceVariable.characteristic.definition[x]
     */
    protected static readonly _fts_definitionIsChoice: true;
    /**
     * Method used for describing characteristic.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * Device used for determining characteristic.
     */
    device?: fhir.Reference | undefined;
    /**
     * When true, members with this characteristic are excluded from the element.
     */
    exclude?: fhir.FhirBoolean | undefined;
    /**
     * Indicates duration, period, or point of observation from the participant's study entry.
     */
    timeFromStart?: fhir.EvidenceVariableCharacteristicTimeFromStart | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    groupMeasure?: fhir.FhirCode<GroupMeasureCodeType> | undefined;
    /**
     * Default constructor for EvidenceVariableCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceVariableCharacteristicArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EvidenceVariableCategory type.
 */
export interface EvidenceVariableCategoryArgs extends fhir.BackboneElementArgs {
    /**
     * A human-readable title or representation of the grouping.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.category.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Value or set of values that define the grouping.
     */
    value?: fhir.CodeableConcept | fhir.Quantity | fhir.Range | undefined;
    /**
     * Value or set of values that define the grouping.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Value or set of values that define the grouping.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Value or set of values that define the grouping.
     */
    valueRange?: fhir.RangeArgs | undefined;
}
/**
 * A grouping (or set of values) described along with other groupings to specify the set of groupings allowed for the variable.
 */
export declare class EvidenceVariableCategory extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A human-readable title or representation of the grouping.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Value or set of values that define the grouping.
     */
    value?: (fhir.CodeableConcept | fhir.Quantity | fhir.Range) | undefined;
    /**
     * Internal flag to properly serialize choice-type element EvidenceVariable.category.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for EvidenceVariableCategory - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceVariableCategoryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * Extended properties for primitive element: EvidenceVariable.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this evidence variable outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different evidence variable instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the evidence variable with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
     */
    shortTitle?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.shortTitle
     */
    _shortTitle?: fhir.FhirElementArgs;
    /**
     * An explanatory or alternate title for the EvidenceVariable giving additional information about its content.
     */
    subtitle?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.subtitle
     */
    _subtitle?: fhir.FhirElementArgs;
    /**
     * Allows filtering of evidence variables that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the evidence variable. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * This description can be used to capture details such as why the evidence variable was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence variable as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence variable is presumed to be the predominant language in the place the evidence variable was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the evidence variable is the organization or individual primarily responsible for the maintenance and upkeep of the evidence variable. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence variable. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.publisher
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
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.RelatedArtifactArgs[] | undefined;
    /**
     * True if the actual variable measured, false if a conceptual representation of the intended variable.
     */
    actual?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.actual
     */
    _actual?: fhir.FhirElementArgs;
    /**
     * Used to specify if two or more characteristics are combined with OR or AND.
     */
    characteristicCombination?: fhir.FhirCode<CharacteristicCombinationCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristicCombination
     */
    _characteristicCombination?: fhir.FhirElementArgs;
    /**
     * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
     */
    characteristic?: fhir.EvidenceVariableCharacteristicArgs[] | undefined;
    /**
     * Used for an outcome to classify.
     */
    handling?: fhir.FhirCode<VariableHandlingCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.handling
     */
    _handling?: fhir.FhirElementArgs;
    /**
     * A grouping (or set of values) described along with other groupings to specify the set of groupings allowed for the variable.
     */
    category?: fhir.EvidenceVariableCategoryArgs[] | undefined;
}
/**
 * The EvidenceVariable resource describes an element that knowledge (Evidence) is about.
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
     * Usually an organization but may be an individual. The publisher (or steward) of the evidence variable is the organization or individual primarily responsible for the maintenance and upkeep of the evidence variable. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence variable. This item SHOULD be populated unless the information is available from context.
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
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact: fhir.RelatedArtifact[];
    /**
     * True if the actual variable measured, false if a conceptual representation of the intended variable.
     */
    actual?: fhir.FhirBoolean | undefined;
    /**
     * Used to specify if two or more characteristics are combined with OR or AND.
     */
    characteristicCombination?: fhir.FhirCode<CharacteristicCombinationCodeType> | undefined;
    /**
     * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
     */
    characteristic: fhir.EvidenceVariableCharacteristic[];
    /**
     * Used for an outcome to classify.
     */
    handling?: fhir.FhirCode<VariableHandlingCodeType> | undefined;
    /**
     * A grouping (or set of values) described along with other groupings to specify the set of groupings allowed for the variable.
     */
    category: fhir.EvidenceVariableCategory[];
    /**
     * Default constructor for EvidenceVariable - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceVariableArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=EvidenceVariable.d.ts.map