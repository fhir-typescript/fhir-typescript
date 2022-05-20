import * as fhir from '../fhir.js';
import { RelationTypeCodingType } from '../fhirValueSets/RelationTypeCodings.js';
import { RelationTypeCodeType } from '../fhirValueSets/RelationTypeCodes.js';
import { PublicationStatusCodingType } from '../fhirValueSets/PublicationStatusCodings.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the CatalogEntryRelatedEntry type.
 */
export interface CatalogEntryRelatedEntryArgs extends fhir.BackboneElementArgs {
    /**
     * The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
     */
    relationtype: RelationTypeCodeType | null;
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
    relationtype: RelationTypeCodeType | null;
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
    static relationtypeRequiredCoding(): RelationTypeCodingType;
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
    status?: PublicationStatusCodeType | undefined;
    /**
     * The time period in which this catalog entry is expected to be active.
     */
    validityPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The date until which this catalog entry is expected to be active.
     */
    validTo?: fhir.FhirDateTime | string | undefined;
    /**
     * Perhaps not needed - if we use fhir resource metadata.
     */
    lastUpdated?: fhir.FhirDateTime | string | undefined;
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
    identifier?: fhir.Identifier[];
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
    additionalIdentifier?: fhir.Identifier[];
    /**
     * Classes of devices, or ATC for medication.
     */
    classification?: fhir.CodeableConcept[];
    /**
     * Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.
     */
    status?: PublicationStatusCodeType | undefined;
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
    additionalCharacteristic?: fhir.CodeableConcept[];
    /**
     * User for example for ATC classification, or.
     */
    additionalClassification?: fhir.CodeableConcept[];
    /**
     * Used for example, to point to a substance, or to a device used to administer a medication.
     */
    relatedEntry?: fhir.CatalogEntryRelatedEntry[];
    /**
     * Default constructor for CatalogEntry - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CatalogEntryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (CatalogEntry.status)
     */
    static statusRequiredCoding(): PublicationStatusCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=CatalogEntry.d.ts.map