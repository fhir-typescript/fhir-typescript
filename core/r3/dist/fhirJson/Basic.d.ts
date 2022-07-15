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
     * Because resource references will only be able to indicate 'Basic', the type of reference will need to be specified in a Profile identified as part of the resource.  Refer to the resource notes section for information on appropriate terminologies for this code.
     * This element is labeled as a modifier because the it defines the meaning of the resource and cannot be ignored.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Optional as not all potential resources will have subjects.  Resources associated with multiple subjects can handle this via extension.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Identifies when the resource was first created.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: Basic.created
     */
    _created?: fhir.FhirElement;
    /**
     * Indicates who was responsible for creating the resource instance.
     */
    author?: fhir.Reference | undefined;
}
//# sourceMappingURL=Basic.d.ts.map