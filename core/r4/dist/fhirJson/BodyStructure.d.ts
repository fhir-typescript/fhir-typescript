import * as fhir from '../fhirJson.js';
/**
 * Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 */
export interface BodyStructure extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "BodyStructure";
    /**
     * Identifier for this instance of the anatomical structure.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: BodyStructure.active
     */
    _active?: fhir.FhirElement;
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
    locationQualifier?: fhir.CodeableConcept[] | undefined;
    /**
     * This description could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: BodyStructure.description
     */
    _description?: fhir.FhirElement;
    /**
     * Image or images used to identify a location.
     */
    image?: fhir.Attachment[] | undefined;
    /**
     * The person to which the body site belongs.
     */
    patient: fhir.Reference | null;
}
//# sourceMappingURL=BodyStructure.d.ts.map