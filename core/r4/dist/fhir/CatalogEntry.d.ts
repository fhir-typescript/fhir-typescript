import * as fhir from '../fhir.js';
import { RelationTypeCodeType } from '../fhirValueSets/RelationTypeCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the CatalogEntryRelatedEntry type.
 */
export interface CatalogEntryRelatedEntryArgs extends fhir.BackboneElementArgs {
    /**
     * The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
     */
    relationtype: fhir.FhirCode<RelationTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CatalogEntry.relatedEntry.relationtype
     */
    _relationtype?: fhir.FhirElementArgs;
    /**
     * The reference to the related item.
     */
    item: fhir.ReferenceArgs | null;
}
/**
 * Used for example, to point to a substance, or to a device used to administer a medication.
 */
export declare class CatalogEntryRelatedEntry extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
     */
    relationtype: fhir.FhirCode<RelationTypeCodeType> | null;
    /**
     * The reference to the related item.
     */
    item: fhir.Reference | null;
    /**
     * Default constructor for CatalogEntryRelatedEntry - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CatalogEntryRelatedEntryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for relationtype (CatalogEntry.relatedEntry.relationtype)
     */
    static get relationtypeRequiredCodes(): {
        readonly ReplacedBy: "is-replaced-by";
        readonly Triggers: "triggers";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CatalogEntry type.
 */
export interface CatalogEntryArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "CatalogEntry" | undefined;
    /**
     * Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The type of item - medication, device, service, protocol or other.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Whether the entry represents an orderable item.
     */
    orderable: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CatalogEntry.orderable
     */
    _orderable?: fhir.FhirElementArgs;
    /**
     * The item in a catalog or definition.
     */
    referencedItem: fhir.ReferenceArgs | null;
    /**
     * Used in supporting related concepts, e.g. NDC to RxNorm.
     */
    additionalIdentifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Classes of devices, or ATC for medication.
     */
    classification?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.
     */
    status?: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CatalogEntry.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The time period in which this catalog entry is expected to be active.
     */
    validityPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The date until which this catalog entry is expected to be active.
     */
    validTo?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: CatalogEntry.validTo
     */
    _validTo?: fhir.FhirElementArgs;
    /**
     * Perhaps not needed - if we use fhir resource metadata.
     */
    lastUpdated?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: CatalogEntry.lastUpdated
     */
    _lastUpdated?: fhir.FhirElementArgs;
    /**
     * Used for examplefor Out of Formulary, or any specifics.
     */
    additionalCharacteristic?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * User for example for ATC classification, or.
     */
    additionalClassification?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Used for example, to point to a substance, or to a device used to administer a medication.
     */
    relatedEntry?: fhir.CatalogEntryRelatedEntryArgs[] | undefined;
}
/**
 * Catalog entries are wrappers that contextualize items included in a catalog.
 */
export declare class CatalogEntry extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "CatalogEntry";
    /**
     * Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code.
     */
    identifier: fhir.Identifier[];
    /**
     * The type of item - medication, device, service, protocol or other.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Whether the entry represents an orderable item.
     */
    orderable: fhir.FhirBoolean | null;
    /**
     * The item in a catalog or definition.
     */
    referencedItem: fhir.Reference | null;
    /**
     * Used in supporting related concepts, e.g. NDC to RxNorm.
     */
    additionalIdentifier: fhir.Identifier[];
    /**
     * Classes of devices, or ATC for medication.
     */
    classification: fhir.CodeableConcept[];
    /**
     * Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.
     */
    status?: fhir.FhirCode<PublicationStatusCodeType> | undefined;
    /**
     * The time period in which this catalog entry is expected to be active.
     */
    validityPeriod?: fhir.Period | undefined;
    /**
     * The date until which this catalog entry is expected to be active.
     */
    validTo?: fhir.FhirDateTime | undefined;
    /**
     * Perhaps not needed - if we use fhir resource metadata.
     */
    lastUpdated?: fhir.FhirDateTime | undefined;
    /**
     * Used for examplefor Out of Formulary, or any specifics.
     */
    additionalCharacteristic: fhir.CodeableConcept[];
    /**
     * User for example for ATC classification, or.
     */
    additionalClassification: fhir.CodeableConcept[];
    /**
     * Used for example, to point to a substance, or to a device used to administer a medication.
     */
    relatedEntry: fhir.CatalogEntryRelatedEntry[];
    /**
     * Default constructor for CatalogEntry - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CatalogEntryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (CatalogEntry.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Draft: "draft";
        readonly Retired: "retired";
        readonly Unknown: "unknown";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=CatalogEntry.d.ts.map