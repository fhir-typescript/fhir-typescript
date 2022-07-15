import * as fhir from '../fhir.js';
import { ListStatusCodeType } from '../fhirValueSets/ListStatusCodes.js';
import { ListModeCodeType } from '../fhirValueSets/ListModeCodes.js';
/**
 * Valid arguments for the ListEntry type.
 */
export interface ListEntryArgs extends fhir.BackboneElementArgs {
    /**
     * This field is present to support various clinical uses of lists, such as a discharge summary medication list, where flags specify whether the medication was added, modified, or deleted from the list.
     */
    flag?: fhir.CodeableConceptArgs | undefined;
    /**
     * The flag element may contain codes that an application processing the list does not understand. However there can be no ambiguity if a list item is actually marked as "deleted".
     */
    deleted?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: List.entry.deleted
     */
    _deleted?: fhir.FhirElementArgs;
    /**
     * The date may be significant for understanding the meaning of items in a working list.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: List.entry.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * A reference to the actual resource from which data was derived.
     */
    item: fhir.ReferenceArgs | null;
}
/**
 * Entries in this list.
 */
export declare class ListEntry extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * This field is present to support various clinical uses of lists, such as a discharge summary medication list, where flags specify whether the medication was added, modified, or deleted from the list.
     */
    flag?: fhir.CodeableConcept | undefined;
    /**
     * The flag element may contain codes that an application processing the list does not understand. However there can be no ambiguity if a list item is actually marked as "deleted".
     */
    deleted?: fhir.FhirBoolean | undefined;
    /**
     * The date may be significant for understanding the meaning of items in a working list.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * A reference to the actual resource from which data was derived.
     */
    item: fhir.Reference | null;
    /**
     * Default constructor for ListEntry - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ListEntryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the List type.
 */
export interface ListArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "List" | undefined;
    /**
     * Identifier for the List assigned for business purposes outside the context of FHIR.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Allows customization beyond just the code identifying the kind of list.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: List.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Lists often contain subsets of resources rather than an exhaustive list.  The code identifies what type of subset is included.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The primary purpose of listing the subject explicitly is to help with finding the right list.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Allows follow-up as well as context.
     */
    source?: fhir.ReferenceArgs | undefined;
    /**
     * The encounter that is the context in which this list was created.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates the current state of this list.
     */
    status: fhir.FhirCode<ListStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: List.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Identifies how current the list is which affects relevance.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: List.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Important for presentation and rendering.  Lists may be sorted to place more important information first or to group related entries.
     */
    orderedBy?: fhir.CodeableConceptArgs | undefined;
    /**
     * Lists are used in various ways, and it must be known in what way it is safe to use them.
     */
    mode: fhir.FhirCode<ListModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: List.mode
     */
    _mode?: fhir.FhirElementArgs;
    /**
     * Comments that apply to the overall list.
     */
    note?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: List.note
     */
    _note?: fhir.FhirElementArgs;
    /**
     * Entries in this list.
     */
    entry?: fhir.ListEntryArgs[] | undefined;
    /**
     * Allows capturing things like "none exist" or "not asked" which can be important for most lists.
     */
    emptyReason?: fhir.CodeableConceptArgs | undefined;
}
/**
 * A set of information summarized from a list of other resources.
 */
export declare class List extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "List";
    /**
     * Identifier for the List assigned for business purposes outside the context of FHIR.
     */
    identifier: fhir.Identifier[];
    /**
     * Allows customization beyond just the code identifying the kind of list.
     */
    title?: fhir.FhirString | undefined;
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
    status: fhir.FhirCode<ListStatusCodeType> | null;
    /**
     * Identifies how current the list is which affects relevance.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Important for presentation and rendering.  Lists may be sorted to place more important information first or to group related entries.
     */
    orderedBy?: fhir.CodeableConcept | undefined;
    /**
     * Lists are used in various ways, and it must be known in what way it is safe to use them.
     */
    mode: fhir.FhirCode<ListModeCodeType> | null;
    /**
     * Comments that apply to the overall list.
     */
    note?: fhir.FhirString | undefined;
    /**
     * Entries in this list.
     */
    entry: fhir.ListEntry[];
    /**
     * Allows capturing things like "none exist" or "not asked" which can be important for most lists.
     */
    emptyReason?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for List - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ListArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=List.d.ts.map