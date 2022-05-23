import * as fhir from '../fhir.js';
/**
 * Valid arguments for the BodyStructure type.
 */
export interface BodyStructureArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "BodyStructure" | undefined;
    /**
     * Identifier for this instance of the anatomical structure.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The minimum cardinality of 0 supports the use case of specifying a location without defining a morphology.
     */
    morphology?: fhir.CodeableConceptArgs | undefined;
    /**
     * The anatomical location or region of the specimen, lesion, or body structure.
     */
    location?: fhir.CodeableConceptArgs | undefined;
    /**
     * Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.
     */
    locationQualifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This description could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.
     */
    description?: fhir.FhirString | string | undefined;
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
 * Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 */
export declare class BodyStructure extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "BodyStructure";
    /**
     * Identifier for this instance of the anatomical structure.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: fhir.FhirBoolean | undefined;
    /**
     * The minimum cardinality of 0 supports the use case of specifying a location without defining a morphology.
     */
    morphology?: fhir.CodeableConcept | undefined;
    /**
     * The anatomical location or region of the specimen, lesion, or body structure.
     */
    location?: fhir.CodeableConcept | undefined;
    /**
     * Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.
     */
    locationQualifier: fhir.CodeableConcept[];
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
     * Default constructor for BodyStructure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BodyStructureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=BodyStructure.d.ts.map