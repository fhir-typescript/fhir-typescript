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
     * The person to which the body site belongs.
     */
    patient: fhir.Reference | null;
    /**
     * Identifier for this instance of the anatomical location.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Named anatomical location - ideally coded where possible.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Modifier to refine the anatomical location.  These include modifiers for laterality, relative location, directionality, number, and plane.
     */
    modifier?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Description of anatomical location.
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
}
//# sourceMappingURL=BodySite.d.ts.map