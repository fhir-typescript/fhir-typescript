import * as fhir from '../fhirJson.js';
/**
 * Identifies responsibility for the accuracy of the composition content.
 */
export interface CompositionAttester extends fhir.BackboneElement {
    /**
     * Indicates the level of authority of the attestation.
     */
    mode: (('legal' | 'official' | 'personal' | 'professional') | null)[] | null;
    /**
     * Extended properties for primitive element: Composition.attester.mode
     */
    _mode?: (fhir.FhirElement | null)[];
    /**
     * Identifies when the information in the composition was deemed accurate.  (Things may have changed since then.).
     */
    time?: string | undefined;
    /**
     * Extended properties for primitive element: Composition.attester.time
     */
    _time?: fhir.FhirElement;
    /**
     * Identifies who has taken on the responsibility for accuracy of the composition content.
     */
    party?: fhir.Reference | undefined;
}
/**
 * Provides context for the composition and creates a linkage between a resource describing an event and the composition created describing the event.
 */
export interface CompositionEvent extends fhir.BackboneElement {
    /**
     * This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act.
     */
    code?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
     */
    period?: fhir.Period | undefined;
    /**
     * The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
     */
    detail?: (fhir.Reference | null)[] | undefined;
}
/**
 * The root of the sections that make up the composition.
 */
export interface CompositionSection extends fhir.BackboneElement {
    /**
     * Section headings are often standardized for different types of documents.  They give guidance to humans on how the document is organized.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: Composition.section.title
     */
    _title?: fhir.FhirElement;
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
    mode?: 'changes' | 'snapshot' | 'working' | undefined;
    /**
     * Extended properties for primitive element: Composition.section.mode
     */
    _mode?: fhir.FhirElement;
    /**
     * Important for presentation and rendering.  Lists may be sorted to place more important information first or to group related entries.
     */
    orderedBy?: fhir.CodeableConcept | undefined;
    /**
     * A reference to the actual resource from which the narrative in the section is derived.
     */
    entry?: (fhir.Reference | null)[] | undefined;
    /**
     * Allows capturing things like "none exist" or "not asked" which can be important for most lists.
     */
    emptyReason?: fhir.CodeableConcept | undefined;
    /**
     * A nested sub-section within this section.
     */
    section?: (fhir.CompositionSection | null)[] | undefined;
}
/**
 * A set of healthcare-related information that is assembled together into a single logical document that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. While a Composition defines the structure, it does not actually contain the content: rather the full content of a document is contained in a Bundle, of which the Composition is the first resource contained.
 */
export interface Composition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Composition" | null;
    /**
     * Logical identifier for the composition, assigned when created. This identifier stays constant as the composition is changed over time.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * dateTime is used for tracking, organizing versions and searching.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: Composition.date
     */
    _date?: fhir.FhirElement;
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
    title: string | null;
    /**
     * Extended properties for primitive element: Composition.title
     */
    _title?: fhir.FhirElement;
    /**
     * Need to be able to mark interim, amended, or withdrawn compositions or documents.
     */
    status: 'amended' | 'entered-in-error' | 'final' | 'preliminary' | null;
    /**
     * Extended properties for primitive element: Composition.status
     */
    _status?: fhir.FhirElement;
    /**
     * The code specifying the level of confidentiality of the Composition.
     */
    confidentiality?: '_Confidentiality' | 'L' | 'M' | 'N' | 'R' | 'U' | 'V' | undefined;
    /**
     * Extended properties for primitive element: Composition.confidentiality
     */
    _confidentiality?: fhir.FhirElement;
    /**
     * Essential metadata for searching for the composition. Identifies who and/or what the composition/document is about.
     */
    subject: fhir.Reference | null;
    /**
     * Identifies who is responsible for the content.
     */
    author: (fhir.Reference | null)[] | null;
    /**
     * Identifies responsibility for the accuracy of the composition content.
     */
    attester?: (fhir.CompositionAttester | null)[] | undefined;
    /**
     * Identifies where to go to find the current version, where to report issues, etc.
     */
    custodian?: fhir.Reference | undefined;
    /**
     * Provides context for the composition and creates a linkage between a resource describing an event and the composition created describing the event.
     */
    event?: (fhir.CompositionEvent | null)[] | undefined;
    /**
     * Provides context for the composition and supports searching.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The root of the sections that make up the composition.
     */
    section?: (fhir.CompositionSection | null)[] | undefined;
}
//# sourceMappingURL=Composition.d.ts.map