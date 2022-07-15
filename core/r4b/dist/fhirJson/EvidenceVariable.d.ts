import * as fhir from '../fhirJson.js';
/**
 * Indicates duration, period, or point of observation from the participant's study entry.
 */
export interface EvidenceVariableCharacteristicTimeFromStart extends fhir.BackboneElement {
    /**
     * A short, natural language description.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.timeFromStart.description
     */
    _description?: fhir.FhirElement;
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
    note?: (fhir.Annotation | null)[] | undefined;
}
/**
 * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 */
export interface EvidenceVariableCharacteristic extends fhir.BackboneElement {
    /**
     * A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.description
     */
    _description?: fhir.FhirElement;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionReference?: fhir.Reference | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.definition[x]
     */
    _definitionCanonical?: fhir.FhirElement;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionExpression?: fhir.Expression | undefined;
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
    exclude?: boolean | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.exclude
     */
    _exclude?: fhir.FhirElement;
    /**
     * Indicates duration, period, or point of observation from the participant's study entry.
     */
    timeFromStart?: fhir.EvidenceVariableCharacteristicTimeFromStart | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    groupMeasure?: 'mean' | 'mean-of-mean' | 'mean-of-median' | 'median' | 'median-of-mean' | 'median-of-median' | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.groupMeasure
     */
    _groupMeasure?: fhir.FhirElement;
}
/**
 * A grouping (or set of values) described along with other groupings to specify the set of groupings allowed for the variable.
 */
export interface EvidenceVariableCategory extends fhir.BackboneElement {
    /**
     * A human-readable title or representation of the grouping.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.category.name
     */
    _name?: fhir.FhirElement;
    /**
     * Value or set of values that define the grouping.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Value or set of values that define the grouping.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Value or set of values that define the grouping.
     */
    valueRange?: fhir.Range | undefined;
}
/**
 * The EvidenceVariable resource describes an element that knowledge (Evidence) is about.
 */
export interface EvidenceVariable extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "EvidenceVariable" | null;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this evidence variable outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * There may be different evidence variable instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the evidence variable with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.title
     */
    _title?: fhir.FhirElement;
    /**
     * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
     */
    shortTitle?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.shortTitle
     */
    _shortTitle?: fhir.FhirElement;
    /**
     * An explanatory or alternate title for the EvidenceVariable giving additional information about its content.
     */
    subtitle?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.subtitle
     */
    _subtitle?: fhir.FhirElement;
    /**
     * Allows filtering of evidence variables that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: EvidenceVariable.status
     */
    _status?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the evidence variable. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.date
     */
    _date?: fhir.FhirElement;
    /**
     * This description can be used to capture details such as why the evidence variable was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence variable as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence variable is presumed to be the predominant language in the place the evidence variable was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.description
     */
    _description?: fhir.FhirElement;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the evidence variable is the organization or individual primarily responsible for the maintenance and upkeep of the evidence variable. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence variable. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    author?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    editor?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    reviewer?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    endorser?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: (fhir.RelatedArtifact | null)[] | undefined;
    /**
     * True if the actual variable measured, false if a conceptual representation of the intended variable.
     */
    actual?: boolean | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.actual
     */
    _actual?: fhir.FhirElement;
    /**
     * Used to specify if two or more characteristics are combined with OR or AND.
     */
    characteristicCombination?: 'intersection' | 'union' | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristicCombination
     */
    _characteristicCombination?: fhir.FhirElement;
    /**
     * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
     */
    characteristic?: (fhir.EvidenceVariableCharacteristic | null)[] | undefined;
    /**
     * Used for an outcome to classify.
     */
    handling?: 'continuous' | 'dichotomous' | 'ordinal' | 'polychotomous' | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.handling
     */
    _handling?: fhir.FhirElement;
    /**
     * A grouping (or set of values) described along with other groupings to specify the set of groupings allowed for the variable.
     */
    category?: (fhir.EvidenceVariableCategory | null)[] | undefined;
}
//# sourceMappingURL=EvidenceVariable.d.ts.map