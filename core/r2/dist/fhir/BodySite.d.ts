import * as fhir from '../fhir.js';
/**
 * Valid arguments for the BodySite type.
 */
export interface BodySiteArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "BodySite" | undefined;
    /**
     * The person to which the body site belongs.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * Identifier for this instance of the anatomical location.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Named anatomical location - ideally coded where possible.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Modifier to refine the anatomical location.  These include modifiers for laterality, relative location, directionality, number, and plane.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Description of anatomical location.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: BodySite.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Image or images used to identify a location.
     */
    image?: fhir.AttachmentArgs[] | undefined;
}
/**
 * Record details about the anatomical location of a specimen or body part.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 */
export declare class BodySite extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "BodySite";
    /**
     * The person to which the body site belongs.
     */
    patient: fhir.Reference | null;
    /**
     * Identifier for this instance of the anatomical location.
     */
    identifier: fhir.Identifier[];
    /**
     * Named anatomical location - ideally coded where possible.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Modifier to refine the anatomical location.  These include modifiers for laterality, relative location, directionality, number, and plane.
     */
    modifier: fhir.CodeableConcept[];
    /**
     * Description of anatomical location.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Image or images used to identify a location.
     */
    image: fhir.Attachment[];
    /**
     * Default constructor for BodySite - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BodySiteArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=BodySite.d.ts.map