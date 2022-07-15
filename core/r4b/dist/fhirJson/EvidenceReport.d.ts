import * as fhir from '../fhirJson.js';
/**
 * Characteristic.
 */
export interface EvidenceReportSubjectCharacteristic extends fhir.BackboneElement {
    /**
     * Example 1 is a Citation. Example 2 is a type of outcome. Example 3 is a specific outcome.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Example 1 is Citation #37. Example 2 is selecting clinical outcomes. Example 3 is 1-year mortality.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * Example 1 is Citation #37. Example 2 is selecting clinical outcomes. Example 3 is 1-year mortality.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Example 1 is Citation #37. Example 2 is selecting clinical outcomes. Example 3 is 1-year mortality.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: EvidenceReport.subject.characteristic.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * Example 1 is Citation #37. Example 2 is selecting clinical outcomes. Example 3 is 1-year mortality.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Example 1 is Citation #37. Example 2 is selecting clinical outcomes. Example 3 is 1-year mortality.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * Is used to express not the characteristic.
     */
    exclude?: boolean | undefined;
    /**
     * Extended properties for primitive element: EvidenceReport.subject.characteristic.exclude
     */
    _exclude?: fhir.FhirElement;
    /**
     * Timeframe for the characteristic.
     */
    period?: fhir.Period | undefined;
}
/**
 * May be used as an expression for search queries and search results
 */
export interface EvidenceReportSubject extends fhir.BackboneElement {
    /**
     * Characteristic.
     */
    characteristic?: (fhir.EvidenceReportSubjectCharacteristic | null)[] | undefined;
    /**
     * Used for general notes and annotations not coded elsewhere.
     */
    note?: (fhir.Annotation | null)[] | undefined;
}
/**
 * A document is a version specific composition.
 */
export interface EvidenceReportRelatesTo extends fhir.BackboneElement {
    /**
     * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
     */
    code: 'amendedWith' | 'amends' | 'appendedWith' | 'appends' | 'replacedWith' | 'replaces' | 'transformedWith' | 'transforms' | null;
    /**
     * Extended properties for primitive element: EvidenceReport.relatesTo.code
     */
    _code?: fhir.FhirElement;
    /**
     * The target composition/document of this relationship.
     */
    targetIdentifier?: fhir.Identifier | undefined;
    /**
     * The target composition/document of this relationship.
     */
    targetReference?: fhir.Reference | undefined;
}
/**
 * The root of the sections that make up the composition.
 */
export interface EvidenceReportSection extends fhir.BackboneElement {
    /**
     * The title identifies the section for a human reader. The title must be consistent with the narrative of the resource that is the target of the section.content reference. Generally, sections SHOULD have titles, but in some documents, it is unnecessary or inappropriate. Typically, this is where a section has subsections that have their own adequately distinguishing title,  or documents that only have a single section.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceReport.section.title
     */
    _title?: fhir.FhirElement;
    /**
     * The code identifies the section for an automated processor of the document. This is particularly relevant when using profiles to control the structure of the document.
     * If the section has content (instead of sub-sections), the section.code does not change the meaning or interpretation of the resource that is the content of the section in the comments for the section.code.
     */
    focus?: fhir.CodeableConcept | undefined;
    /**
     * A definitional Resource identifying the kind of content contained within the section. This should be consistent with the section title.
     */
    focusReference?: fhir.Reference | undefined;
    /**
     * Identifies who is responsible for the information in this section, not necessarily who typed it in.
     */
    author?: (fhir.Reference | null)[] | undefined;
    /**
     * Document profiles may define what content should be represented in the narrative.
     */
    text?: fhir.Narrative | undefined;
    /**
     * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
     */
    mode?: 'changes' | 'snapshot' | 'working' | undefined;
    /**
     * Extended properties for primitive element: EvidenceReport.section.mode
     */
    _mode?: fhir.FhirElement;
    /**
     * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
     */
    orderedBy?: fhir.CodeableConcept | undefined;
    /**
     * Specifies any type of classification of the evidence report.
     */
    entryClassifier?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * If there are no entries in the list, an emptyReason SHOULD be provided.
     */
    entryReference?: (fhir.Reference | null)[] | undefined;
    /**
     * Quantity as content.
     */
    entryQuantity?: (fhir.Quantity | null)[] | undefined;
    /**
     * The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is for use when the entire section content has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
     */
    emptyReason?: fhir.CodeableConcept | undefined;
    /**
     * Nested sections are primarily used to help human readers navigate to particular portions of the document.
     */
    section?: (fhir.EvidenceReportSection | null)[] | undefined;
}
/**
 * The EvidenceReport Resource is a specialized container for a collection of resources and codable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts.
 */
export interface EvidenceReport extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "EvidenceReport" | null;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred. Multiple instances may share the same URL if they have a distinct version.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceReport.url
     */
    _url?: fhir.FhirElement;
    /**
     * Allows filtering of summaries that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: EvidenceReport.status
     */
    _status?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * This element will contain unique identifiers that support de-duplication of EvidenceReports. This identifier can be valid for only one EvidenceReport resource.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * May include trial registry identifiers, e.g. NCT04372602 from clinicaltrials.gov. This identifier can be valid for multiple EvidenceReport resources.
     */
    relatedIdentifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * used for reports for which external citation is expected, such as use in support of scholarly publications.
     */
    citeAsReference?: fhir.Reference | undefined;
    /**
     * used for reports for which external citation is expected, such as use in support of scholarly publications.
     */
    citeAsMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceReport.citeAs[x]
     */
    _citeAsMarkdown?: fhir.FhirElement;
    /**
     * Specifies the kind of report, such as grouping of classifiers, search results, or human-compiled expression.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Used for footnotes and annotations.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * Link, description or reference to artifact associated with the report.
     */
    relatedArtifact?: (fhir.RelatedArtifact | null)[] | undefined;
    /**
     * May be used as an expression for search queries and search results
     */
    subject: fhir.EvidenceReportSubject | null;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the evidence report is the organization or individual primarily responsible for the maintenance and upkeep of the evidence report. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence report. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceReport.publisher
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
     * A document is a version specific composition.
     */
    relatesTo?: (fhir.EvidenceReportRelatesTo | null)[] | undefined;
    /**
     * The root of the sections that make up the composition.
     */
    section?: (fhir.EvidenceReportSection | null)[] | undefined;
}
//# sourceMappingURL=EvidenceReport.d.ts.map