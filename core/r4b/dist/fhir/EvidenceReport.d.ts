import * as fhir from '../fhir.js';
import { ReportRelationTypeCodeType } from '../fhirValueSets/ReportRelationTypeCodes.js';
import { ListModeCodeType } from '../fhirValueSets/ListModeCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the EvidenceReportSubjectCharacteristic type.
 */
export interface EvidenceReportSubjectCharacteristicArgs extends fhir.BackboneElementArgs {
    /**
     * Example 1 is a Citation. Example 2 is a type of outcome. Example 3 is a specific outcome.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * Example 1 is Citation #37. Example 2 is selecting clinical outcomes. Example 3 is 1-year mortality.
     */
    value?: fhir.Reference | fhir.CodeableConcept | fhir.FhirBoolean | fhir.Quantity | fhir.Range | undefined;
    /**
     * Example 1 is Citation #37. Example 2 is selecting clinical outcomes. Example 3 is 1-year mortality.
     */
    valueReference?: fhir.ReferenceArgs | undefined;
    /**
     * Example 1 is Citation #37. Example 2 is selecting clinical outcomes. Example 3 is 1-year mortality.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Example 1 is Citation #37. Example 2 is selecting clinical outcomes. Example 3 is 1-year mortality.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Example 1 is Citation #37. Example 2 is selecting clinical outcomes. Example 3 is 1-year mortality.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Example 1 is Citation #37. Example 2 is selecting clinical outcomes. Example 3 is 1-year mortality.
     */
    valueRange?: fhir.RangeArgs | undefined;
    /**
     * Is used to express not the characteristic.
     */
    exclude?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: EvidenceReport.subject.characteristic.exclude
     */
    _exclude?: fhir.FhirElementArgs;
    /**
     * Timeframe for the characteristic.
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * Characteristic.
 */
export declare class EvidenceReportSubjectCharacteristic extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Example 1 is a Citation. Example 2 is a type of outcome. Example 3 is a specific outcome.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Example 1 is Citation #37. Example 2 is selecting clinical outcomes. Example 3 is 1-year mortality.
     */
    value: (fhir.Reference | fhir.CodeableConcept | fhir.FhirBoolean | fhir.Quantity | fhir.Range) | null;
    /**
     * Internal flag to properly serialize choice-type element EvidenceReport.subject.characteristic.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Is used to express not the characteristic.
     */
    exclude?: fhir.FhirBoolean | undefined;
    /**
     * Timeframe for the characteristic.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for EvidenceReportSubjectCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceReportSubjectCharacteristicArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EvidenceReportSubject type.
 */
export interface EvidenceReportSubjectArgs extends fhir.BackboneElementArgs {
    /**
     * Characteristic.
     */
    characteristic?: fhir.EvidenceReportSubjectCharacteristicArgs[] | undefined;
    /**
     * Used for general notes and annotations not coded elsewhere.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * May be used as an expression for search queries and search results
 */
export declare class EvidenceReportSubject extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Characteristic.
     */
    characteristic: fhir.EvidenceReportSubjectCharacteristic[];
    /**
     * Used for general notes and annotations not coded elsewhere.
     */
    note: fhir.Annotation[];
    /**
     * Default constructor for EvidenceReportSubject - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceReportSubjectArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EvidenceReportRelatesTo type.
 */
export interface EvidenceReportRelatesToArgs extends fhir.BackboneElementArgs {
    /**
     * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
     */
    code: fhir.FhirCode<ReportRelationTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceReport.relatesTo.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * The target composition/document of this relationship.
     */
    target?: fhir.Identifier | fhir.Reference | undefined;
    /**
     * The target composition/document of this relationship.
     */
    targetIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * The target composition/document of this relationship.
     */
    targetReference?: fhir.ReferenceArgs | undefined;
}
/**
 * A document is a version specific composition.
 */
export declare class EvidenceReportRelatesTo extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
     */
    code: fhir.FhirCode<ReportRelationTypeCodeType> | null;
    /**
     * The target composition/document of this relationship.
     */
    target: (fhir.Identifier | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element EvidenceReport.relatesTo.target[x]
     */
    protected static readonly _fts_targetIsChoice: true;
    /**
     * Default constructor for EvidenceReportRelatesTo - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceReportRelatesToArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EvidenceReportSection type.
 */
export interface EvidenceReportSectionArgs extends fhir.BackboneElementArgs {
    /**
     * The title identifies the section for a human reader. The title must be consistent with the narrative of the resource that is the target of the section.content reference. Generally, sections SHOULD have titles, but in some documents, it is unnecessary or inappropriate. Typically, this is where a section has subsections that have their own adequately distinguishing title,  or documents that only have a single section.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceReport.section.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * The code identifies the section for an automated processor of the document. This is particularly relevant when using profiles to control the structure of the document.
     * If the section has content (instead of sub-sections), the section.code does not change the meaning or interpretation of the resource that is the content of the section in the comments for the section.code.
     */
    focus?: fhir.CodeableConceptArgs | undefined;
    /**
     * A definitional Resource identifying the kind of content contained within the section. This should be consistent with the section title.
     */
    focusReference?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies who is responsible for the information in this section, not necessarily who typed it in.
     */
    author?: fhir.ReferenceArgs[] | undefined;
    /**
     * Document profiles may define what content should be represented in the narrative.
     */
    text?: fhir.NarrativeArgs | undefined;
    /**
     * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
     */
    mode?: fhir.FhirCode<ListModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceReport.section.mode
     */
    _mode?: fhir.FhirElementArgs;
    /**
     * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
     */
    orderedBy?: fhir.CodeableConceptArgs | undefined;
    /**
     * Specifies any type of classification of the evidence report.
     */
    entryClassifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * If there are no entries in the list, an emptyReason SHOULD be provided.
     */
    entryReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Quantity as content.
     */
    entryQuantity?: fhir.QuantityArgs[] | undefined;
    /**
     * The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is for use when the entire section content has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
     */
    emptyReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Nested sections are primarily used to help human readers navigate to particular portions of the document.
     */
    section?: fhir.EvidenceReportSectionArgs[] | undefined;
}
/**
 * The root of the sections that make up the composition.
 */
export declare class EvidenceReportSection extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The title identifies the section for a human reader. The title must be consistent with the narrative of the resource that is the target of the section.content reference. Generally, sections SHOULD have titles, but in some documents, it is unnecessary or inappropriate. Typically, this is where a section has subsections that have their own adequately distinguishing title,  or documents that only have a single section.
     */
    title?: fhir.FhirString | undefined;
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
    author: fhir.Reference[];
    /**
     * Document profiles may define what content should be represented in the narrative.
     */
    text?: fhir.Narrative | undefined;
    /**
     * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
     */
    mode?: fhir.FhirCode<ListModeCodeType> | undefined;
    /**
     * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
     */
    orderedBy?: fhir.CodeableConcept | undefined;
    /**
     * Specifies any type of classification of the evidence report.
     */
    entryClassifier: fhir.CodeableConcept[];
    /**
     * If there are no entries in the list, an emptyReason SHOULD be provided.
     */
    entryReference: fhir.Reference[];
    /**
     * Quantity as content.
     */
    entryQuantity: fhir.Quantity[];
    /**
     * The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is for use when the entire section content has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
     */
    emptyReason?: fhir.CodeableConcept | undefined;
    /**
     * Nested sections are primarily used to help human readers navigate to particular portions of the document.
     */
    section: fhir.EvidenceReportSection[];
    /**
     * Default constructor for EvidenceReportSection - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceReportSectionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EvidenceReport type.
 */
export interface EvidenceReportArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "EvidenceReport" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred. Multiple instances may share the same URL if they have a distinct version.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceReport.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Allows filtering of summaries that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceReport.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * This element will contain unique identifiers that support de-duplication of EvidenceReports. This identifier can be valid for only one EvidenceReport resource.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * May include trial registry identifiers, e.g. NCT04372602 from clinicaltrials.gov. This identifier can be valid for multiple EvidenceReport resources.
     */
    relatedIdentifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * used for reports for which external citation is expected, such as use in support of scholarly publications.
     */
    citeAs?: fhir.Reference | fhir.FhirMarkdown | undefined;
    /**
     * used for reports for which external citation is expected, such as use in support of scholarly publications.
     */
    citeAsReference?: fhir.ReferenceArgs | undefined;
    /**
     * used for reports for which external citation is expected, such as use in support of scholarly publications.
     */
    citeAsMarkdown?: fhir.FhirMarkdown | string | undefined;
    /**
     * Specifies the kind of report, such as grouping of classifiers, search results, or human-compiled expression.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Used for footnotes and annotations.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Link, description or reference to artifact associated with the report.
     */
    relatedArtifact?: fhir.RelatedArtifactArgs[] | undefined;
    /**
     * May be used as an expression for search queries and search results
     */
    subject: fhir.EvidenceReportSubjectArgs | null;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the evidence report is the organization or individual primarily responsible for the maintenance and upkeep of the evidence report. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence report. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: EvidenceReport.publisher
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
     * A document is a version specific composition.
     */
    relatesTo?: fhir.EvidenceReportRelatesToArgs[] | undefined;
    /**
     * The root of the sections that make up the composition.
     */
    section?: fhir.EvidenceReportSectionArgs[] | undefined;
}
/**
 * The EvidenceReport Resource is a specialized container for a collection of resources and codable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts.
 */
export declare class EvidenceReport extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "EvidenceReport";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred. Multiple instances may share the same URL if they have a distinct version.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Allows filtering of summaries that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * This element will contain unique identifiers that support de-duplication of EvidenceReports. This identifier can be valid for only one EvidenceReport resource.
     */
    identifier: fhir.Identifier[];
    /**
     * May include trial registry identifiers, e.g. NCT04372602 from clinicaltrials.gov. This identifier can be valid for multiple EvidenceReport resources.
     */
    relatedIdentifier: fhir.Identifier[];
    /**
     * used for reports for which external citation is expected, such as use in support of scholarly publications.
     */
    citeAs?: (fhir.Reference | fhir.FhirMarkdown) | undefined;
    /**
     * Internal flag to properly serialize choice-type element EvidenceReport.citeAs[x]
     */
    protected static readonly _fts_citeAsIsChoice: true;
    /**
     * Specifies the kind of report, such as grouping of classifiers, search results, or human-compiled expression.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Used for footnotes and annotations.
     */
    note: fhir.Annotation[];
    /**
     * Link, description or reference to artifact associated with the report.
     */
    relatedArtifact: fhir.RelatedArtifact[];
    /**
     * May be used as an expression for search queries and search results
     */
    subject: fhir.EvidenceReportSubject | null;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the evidence report is the organization or individual primarily responsible for the maintenance and upkeep of the evidence report. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence report. This item SHOULD be populated unless the information is available from context.
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
     * A document is a version specific composition.
     */
    relatesTo: fhir.EvidenceReportRelatesTo[];
    /**
     * The root of the sections that make up the composition.
     */
    section: fhir.EvidenceReportSection[];
    /**
     * Default constructor for EvidenceReport - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EvidenceReportArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=EvidenceReport.d.ts.map