import * as fhir from '../fhirJson.js';
/**
 * Record details about the anatomical location of a specimen or body part.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 */
export interface BodySite extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "BodySite" | null;
    /**
     * Identifier for this instance of the anatomical location.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: BodySite.active
     */
    _active?: fhir.FhirElement;
    /**
     * Named anatomical location - ideally coded where possible.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.
     */
    qualifier?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This description could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: BodySite.description
     */
    _description?: fhir.FhirElement;
    /**
     * Image or images used to identify a location.
     */
    image?: (fhir.Attachment | null)[] | undefined;
    /**
     * The person to which the body site belongs.
     */
    patient: fhir.Reference | null;
}
//# sourceMappingURL=BodySite.d.ts.map