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
     * Identifier for this instance of the anatomical location.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: BodySite.active
     */
    _active?: fhir.FhirElementArgs;
    /**
     * Named anatomical location - ideally coded where possible.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.
     */
    qualifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This description could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.
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
    /**
     * The person to which the body site belongs.
     */
    patient: fhir.ReferenceArgs | null;
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
     * Identifier for this instance of the anatomical location.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: fhir.FhirBoolean | undefined;
    /**
     * Named anatomical location - ideally coded where possible.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.
     */
    qualifier: fhir.CodeableConcept[];
    /**
     * This description could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Image or images used to identify a location.
     */
    image: fhir.Attachment[];
    /**
     * The person to which the body site belongs.
     */
    patient: fhir.Reference | null;
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