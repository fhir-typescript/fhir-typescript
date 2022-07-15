import * as fhir from '../fhir.js';
import { CompositionAttestationModeCodeType } from '../fhirValueSets/CompositionAttestationModeCodes.js';
import { ListModeCodeType } from '../fhirValueSets/ListModeCodes.js';
import { CompositionStatusCodeType } from '../fhirValueSets/CompositionStatusCodes.js';
/**
 * Valid arguments for the CompositionAttester type.
 */
export interface CompositionAttesterArgs extends fhir.BackboneElementArgs {
    /**
     * Indicates the level of authority of the attestation.
     */
    mode: fhir.FhirCode<CompositionAttestationModeCodeType>[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Composition.attester.mode
     */
    _mode?: (fhir.FhirElementArgs | null)[];
    /**
     * Identifies when the information in the composition was deemed accurate.  (Things may have changed since then.).
     */
    time?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Composition.attester.time
     */
    _time?: fhir.FhirElementArgs;
    /**
     * Identifies who has taken on the responsibility for accuracy of the composition content.
     */
    party?: fhir.ReferenceArgs | undefined;
}
/**
 * Identifies responsibility for the accuracy of the composition content.
 */
export declare class CompositionAttester extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Indicates the level of authority of the attestation.
     */
    mode: fhir.FhirCode<CompositionAttestationModeCodeType>[];
    /**
     * Identifies when the information in the composition was deemed accurate.  (Things may have changed since then.).
     */
    time?: fhir.FhirDateTime | undefined;
    /**
     * Identifies who has taken on the responsibility for accuracy of the composition content.
     */
    party?: fhir.Reference | undefined;
    /**
     * Default constructor for CompositionAttester - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompositionAttesterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CompositionEvent type.
 */
export interface CompositionEventArgs extends fhir.BackboneElementArgs {
    /**
     * This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
     */
    detail?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Provides context for the composition and creates a linkage between a resource describing an event and the composition created describing the event.
 */
export declare class CompositionEvent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act.
     */
    code: fhir.CodeableConcept[];
    /**
     * The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
     */
    period?: fhir.Period | undefined;
    /**
     * The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
     */
    detail: fhir.Reference[];
    /**
     * Default constructor for CompositionEvent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompositionEventArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CompositionSection type.
 */
export interface CompositionSectionArgs extends fhir.BackboneElementArgs {
    /**
     * Section headings are often standardized for different types of documents.  They give guidance to humans on how the document is organized.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Composition.section.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Provides computable standardized labels to topics within the document.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * A human-readable narrative that contains the attested content of the section, used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative.
     */
    text?: fhir.NarrativeArgs | undefined;
    /**
     * Sections are used in various ways, and it must be known in what way it is safe to use the entries in them.
     */
    mode?: fhir.FhirCode<ListModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Composition.section.mode
     */
    _mode?: fhir.FhirElementArgs;
    /**
     * Important for presentation and rendering.  Lists may be sorted to place more important information first or to group related entries.
     */
    orderedBy?: fhir.CodeableConceptArgs | undefined;
    /**
     * A reference to the actual resource from which the narrative in the section is derived.
     */
    entry?: fhir.ReferenceArgs[] | undefined;
    /**
     * Allows capturing things like "none exist" or "not asked" which can be important for most lists.
     */
    emptyReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * A nested sub-section within this section.
     */
    section?: fhir.CompositionSectionArgs[] | undefined;
}
/**
 * The root of the sections that make up the composition.
 */
export declare class CompositionSection extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Section headings are often standardized for different types of documents.  They give guidance to humans on how the document is organized.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Provides computable standardized labels to topics within the document.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * A human-readable narrative that contains the attested content of the section, used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative.
     */
    text?: fhir.Narrative | undefined;
    /**
     * Sections are used in various ways, and it must be known in what way it is safe to use the entries in them.
     */
    mode?: fhir.FhirCode<ListModeCodeType> | undefined;
    /**
     * Important for presentation and rendering.  Lists may be sorted to place more important information first or to group related entries.
     */
    orderedBy?: fhir.CodeableConcept | undefined;
    /**
     * A reference to the actual resource from which the narrative in the section is derived.
     */
    entry: fhir.Reference[];
    /**
     * Allows capturing things like "none exist" or "not asked" which can be important for most lists.
     */
    emptyReason?: fhir.CodeableConcept | undefined;
    /**
     * A nested sub-section within this section.
     */
    section: fhir.CompositionSection[];
    /**
     * Default constructor for CompositionSection - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompositionSectionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Composition type.
 */
export interface CompositionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Composition" | undefined;
    /**
     * Logical identifier for the composition, assigned when created. This identifier stays constant as the composition is changed over time.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * dateTime is used for tracking, organizing versions and searching.
     */
    date: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Composition.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Key metadata element describing the composition, used in searching/filtering.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Helps humans to assess whether the composition is of interest when viewing an index of compositions or documents.
     */
    class?: fhir.CodeableConceptArgs | undefined;
    /**
     * Official human-readable label for the composition.
     */
    title: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Composition.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Need to be able to mark interim, amended, or withdrawn compositions or documents.
     */
    status: fhir.FhirCode<CompositionStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Composition.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The code specifying the level of confidentiality of the Composition.
     */
    confidentiality?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Composition.confidentiality
     */
    _confidentiality?: fhir.FhirElementArgs;
    /**
     * Essential metadata for searching for the composition. Identifies who and/or what the composition/document is about.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * Identifies who is responsible for the content.
     */
    author: fhir.ReferenceArgs[] | null;
    /**
     * Identifies responsibility for the accuracy of the composition content.
     */
    attester?: fhir.CompositionAttesterArgs[] | undefined;
    /**
     * Identifies where to go to find the current version, where to report issues, etc.
     */
    custodian?: fhir.ReferenceArgs | undefined;
    /**
     * Provides context for the composition and creates a linkage between a resource describing an event and the composition created describing the event.
     */
    event?: fhir.CompositionEventArgs[] | undefined;
    /**
     * Provides context for the composition and supports searching.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * The root of the sections that make up the composition.
     */
    section?: fhir.CompositionSectionArgs[] | undefined;
}
/**
 * A set of healthcare-related information that is assembled together into a single logical document that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. While a Composition defines the structure, it does not actually contain the content: rather the full content of a document is contained in a Bundle, of which the Composition is the first resource contained.
 */
export declare class Composition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Composition";
    /**
     * Logical identifier for the composition, assigned when created. This identifier stays constant as the composition is changed over time.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * dateTime is used for tracking, organizing versions and searching.
     */
    date: fhir.FhirDateTime | null;
    /**
     * Key metadata element describing the composition, used in searching/filtering.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Helps humans to assess whether the composition is of interest when viewing an index of compositions or documents.
     */
    class?: fhir.CodeableConcept | undefined;
    /**
     * Official human-readable label for the composition.
     */
    title: fhir.FhirString | null;
    /**
     * Need to be able to mark interim, amended, or withdrawn compositions or documents.
     */
    status: fhir.FhirCode<CompositionStatusCodeType> | null;
    /**
     * The code specifying the level of confidentiality of the Composition.
     */
    confidentiality?: fhir.FhirCode | undefined;
    /**
     * Essential metadata for searching for the composition. Identifies who and/or what the composition/document is about.
     */
    subject: fhir.Reference | null;
    /**
     * Identifies who is responsible for the content.
     */
    author: fhir.Reference[];
    /**
     * Identifies responsibility for the accuracy of the composition content.
     */
    attester: fhir.CompositionAttester[];
    /**
     * Identifies where to go to find the current version, where to report issues, etc.
     */
    custodian?: fhir.Reference | undefined;
    /**
     * Provides context for the composition and creates a linkage between a resource describing an event and the composition created describing the event.
     */
    event: fhir.CompositionEvent[];
    /**
     * Provides context for the composition and supports searching.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The root of the sections that make up the composition.
     */
    section: fhir.CompositionSection[];
    /**
     * Default constructor for Composition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompositionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Composition.d.ts.map