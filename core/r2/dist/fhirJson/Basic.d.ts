import * as fhir from '../fhirJson.js';
/**
 * Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.
 */
export interface Basic extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Basic" | null;
    /**
     * Identifier assigned to the resource for business purposes, outside the context of FHIR.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Must be able to distinguish different types of "basic" resources.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Needed for partitioning the resource by Patient.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Needed for partitioning the resource.
     */
    author?: fhir.Reference | undefined;
    /**
     * Allows ordering resource instances by time.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: Basic.created
     */
    _created?: fhir.FhirElement;
}
//# sourceMappingURL=Basic.d.ts.map