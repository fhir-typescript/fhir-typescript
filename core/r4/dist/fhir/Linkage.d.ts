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
 * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
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
     * Required-bound Value Set for type (Linkage.item.type)
     */
    static get typeRequiredCodes(): {
        readonly AlternateRecord: "alternate";
        readonly HistoricalObsoleteRecord: "historical";
        readonly SourceOfTruth: "source";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
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
     * Identifies the user or organization responsible for asserting the linkages as well as the user or organization who establishes the context in which the nature of each linkage is evaluated.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
     */
    item: fhir.LinkageItemArgs[] | null;
}
/**
 * Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
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
     * Identifies the user or organization responsible for asserting the linkages as well as the user or organization who establishes the context in which the nature of each linkage is evaluated.
     */
    author?: fhir.Reference | undefined;
    /**
     * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
     */
    item: fhir.LinkageItem[];
    /**
     * Default constructor for Linkage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<LinkageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Linkage.d.ts.map