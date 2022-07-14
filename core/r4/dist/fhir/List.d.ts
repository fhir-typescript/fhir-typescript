import * as fhir from '../fhir.js';
import { ListStatusCodeType } from '../fhirValueSets/ListStatusCodes.js';
import { ListModeCodeType } from '../fhirValueSets/ListModeCodes.js';
/**
 * Valid arguments for the ListEntry type.
 */
export interface ListEntryArgs extends fhir.BackboneElementArgs {
    /**
     * The flag can only be understood in the context of the List.code. If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Deleted can only be used if the List.mode is "changes".
     */
    flag?: fhir.CodeableConceptArgs | undefined;
    /**
     * If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Both flag and deleted can only be used if the List.mode is "changes". A deleted entry should be displayed in narrative as deleted.  This element is labeled as a modifier because it indicates that an item is (to be) no longer in the list.
     */
    deleted?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: List.entry.deleted
     */
    _deleted?: fhir.FhirElementArgs;
    /**
     * When this item was added to the list.
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
 * If there are no entries in the list, an emptyReason SHOULD be provided.
 */
export declare class ListEntry extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The flag can only be understood in the context of the List.code. If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Deleted can only be used if the List.mode is "changes".
     */
    flag?: fhir.CodeableConcept | undefined;
    /**
     * If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Both flag and deleted can only be used if the List.mode is "changes". A deleted entry should be displayed in narrative as deleted.  This element is labeled as a modifier because it indicates that an item is (to be) no longer in the list.
     */
    deleted?: fhir.FhirBoolean | undefined;
    /**
     * When this item was added to the list.
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
    doModelValidation(expression?: string): fhir.FtsIssue[];
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
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<ListStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: List.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
     */
    mode: fhir.FhirCode<ListModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: List.mode
     */
    _mode?: fhir.FhirElementArgs;
    /**
     * A label for the list assigned by the author.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: List.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * If there is no code, the purpose of the list is implied where it is used, such as in a document section using Document.section.code.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Some purely arbitrary lists do not have a common subject, so this is optional.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * The encounter that is the context in which this list was created.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * The actual important date is the date of currency of the resources that were summarized, but it is usually assumed that these are current when the preparation occurs.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: List.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * The primary source is the entity that made the decisions what items are in the list. This may be software or user.
     */
    source?: fhir.ReferenceArgs | undefined;
    /**
     * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
     */
    orderedBy?: fhir.CodeableConceptArgs | undefined;
    /**
     * Comments that apply to the overall list.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * If there are no entries in the list, an emptyReason SHOULD be provided.
     */
    entry?: fhir.ListEntryArgs[] | undefined;
    /**
     * The various reasons for an empty list make a significant interpretation to its interpretation. Note that this code is for use when the entire list has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
     */
    emptyReason?: fhir.CodeableConceptArgs | undefined;
}
/**
 * A list is a curated collection of resources.
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
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<ListStatusCodeType> | null;
    /**
     * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
     */
    mode: fhir.FhirCode<ListModeCodeType> | null;
    /**
     * A label for the list assigned by the author.
     */
    title?: fhir.FhirString | undefined;
    /**
     * If there is no code, the purpose of the list is implied where it is used, such as in a document section using Document.section.code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Some purely arbitrary lists do not have a common subject, so this is optional.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The encounter that is the context in which this list was created.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The actual important date is the date of currency of the resources that were summarized, but it is usually assumed that these are current when the preparation occurs.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * The primary source is the entity that made the decisions what items are in the list. This may be software or user.
     */
    source?: fhir.Reference | undefined;
    /**
     * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
     */
    orderedBy?: fhir.CodeableConcept | undefined;
    /**
     * Comments that apply to the overall list.
     */
    note: fhir.Annotation[];
    /**
     * If there are no entries in the list, an emptyReason SHOULD be provided.
     */
    entry: fhir.ListEntry[];
    /**
     * The various reasons for an empty list make a significant interpretation to its interpretation. Note that this code is for use when the entire list has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
     */
    emptyReason?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for List - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ListArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=List.d.ts.map