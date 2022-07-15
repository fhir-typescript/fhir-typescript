import * as fhir from '../fhir.js';
import { LinkageTypeCodeType } from '../fhirValueSets/LinkageTypeCodes.js';
/**
 * Valid arguments for the LinkageItem type.
 */
export interface LinkageItemArgs extends fhir.BackboneElementArgs {
    /**
     * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
     */
    type: fhir.FhirCode<LinkageTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Linkage.item.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * The resource instance being linked as part of the group.
     */
    resource: fhir.ReferenceArgs | null;
}
/**
 * Identifies one of the records that is considered to refer to the same real-world occurrence as well as how the items hould be evaluated within the collection of linked items.
 */
export declare class LinkageItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
     */
    type: fhir.FhirCode<LinkageTypeCodeType> | null;
    /**
     * The resource instance being linked as part of the group.
     */
    resource: fhir.Reference | null;
    /**
     * Default constructor for LinkageItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<LinkageItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Linkage type.
 */
export interface LinkageArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Linkage" | undefined;
    /**
     * If false, any asserted linkages should not be considered current/relevant/applicable.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Linkage.active
     */
    _active?: fhir.FhirElementArgs;
    /**
     * Identifies the user or organization responsible for asserting the linkages and who establishes the context for evaluating the nature of each linkage.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies one of the records that is considered to refer to the same real-world occurrence as well as how the items hould be evaluated within the collection of linked items.
     */
    item: fhir.LinkageItemArgs[] | null;
}
/**
 * Identifies two or more records (resource instances) that are referring to the same real-world "occurrence".
 */
export declare class Linkage extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Linkage";
    /**
     * If false, any asserted linkages should not be considered current/relevant/applicable.
     */
    active?: fhir.FhirBoolean | undefined;
    /**
     * Identifies the user or organization responsible for asserting the linkages and who establishes the context for evaluating the nature of each linkage.
     */
    author?: fhir.Reference | undefined;
    /**
     * Identifies one of the records that is considered to refer to the same real-world occurrence as well as how the items hould be evaluated within the collection of linked items.
     */
    item: fhir.LinkageItem[];
    /**
     * Default constructor for Linkage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<LinkageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Linkage.d.ts.map