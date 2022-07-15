import * as fhir from '../fhirJson.js';
/**
 * Entries in this list.
 */
export interface ListEntry extends fhir.BackboneElement {
    /**
     * This field is present to support various clinical uses of lists, such as a discharge summary medication list, where flags specify whether the medication was added, modified, or deleted from the list.
     */
    flag?: fhir.CodeableConcept | undefined;
    /**
     * The flag element may contain codes that an application processing the list does not understand. However there can be no ambiguity if a list item is actually marked as "deleted".
     */
    deleted?: boolean | undefined;
    /**
     * Extended properties for primitive element: List.entry.deleted
     */
    _deleted?: fhir.FhirElement;
    /**
     * The date may be significant for understanding the meaning of items in a working list.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: List.entry.date
     */
    _date?: fhir.FhirElement;
    /**
     * A reference to the actual resource from which data was derived.
     */
    item: fhir.Reference | null;
}
/**
 * A set of information summarized from a list of other resources.
 */
export interface List extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "List" | null;
    /**
     * Identifier for the List assigned for business purposes outside the context of FHIR.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Allows customization beyond just the code identifying the kind of list.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: List.title
     */
    _title?: fhir.FhirElement;
    /**
     * Lists often contain subsets of resources rather than an exhaustive list.  The code identifies what type of subset is included.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The primary purpose of listing the subject explicitly is to help with finding the right list.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Allows follow-up as well as context.
     */
    source?: fhir.Reference | undefined;
    /**
     * The encounter that is the context in which this list was created.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Indicates the current state of this list.
     */
    status: 'current' | 'entered-in-error' | 'retired' | null;
    /**
     * Extended properties for primitive element: List.status
     */
    _status?: fhir.FhirElement;
    /**
     * Identifies how current the list is which affects relevance.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: List.date
     */
    _date?: fhir.FhirElement;
    /**
     * Important for presentation and rendering.  Lists may be sorted to place more important information first or to group related entries.
     */
    orderedBy?: fhir.CodeableConcept | undefined;
    /**
     * Lists are used in various ways, and it must be known in what way it is safe to use them.
     */
    mode: 'changes' | 'snapshot' | 'working' | null;
    /**
     * Extended properties for primitive element: List.mode
     */
    _mode?: fhir.FhirElement;
    /**
     * Comments that apply to the overall list.
     */
    note?: string | undefined;
    /**
     * Extended properties for primitive element: List.note
     */
    _note?: fhir.FhirElement;
    /**
     * Entries in this list.
     */
    entry?: (fhir.ListEntry | null)[] | undefined;
    /**
     * Allows capturing things like "none exist" or "not asked" which can be important for most lists.
     */
    emptyReason?: fhir.CodeableConcept | undefined;
}
//# sourceMappingURL=List.d.ts.map