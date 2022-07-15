import * as fhir from '../fhirJson.js';
/**
 * The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.
 */
export interface Meta extends fhir.FhirElement {
    /**
     * The version specific identifier, as it appears in the version portion of the URL. This values changes when the resource is created, updated, or deleted.
     */
    versionId?: string | undefined;
    /**
     * Extended properties for primitive element: Meta.versionId
     */
    _versionId?: fhir.FhirElement;
    /**
     * When the resource last changed - e.g. when the version changed.
     */
    lastUpdated?: string | undefined;
    /**
     * Extended properties for primitive element: Meta.lastUpdated
     */
    _lastUpdated?: fhir.FhirElement;
    /**
     * A list of profiles [[[StructureDefinition]]]s that this resource claims to conform to. The URL is a reference to [[[StructureDefinition.url]]].
     */
    profile?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Meta.profile
     */
    _profile?: (fhir.FhirElement | null)[];
    /**
     * Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.
     */
    security?: (fhir.Coding | null)[] | undefined;
    /**
     * Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.
     */
    tag?: (fhir.Coding | null)[] | undefined;
}
//# sourceMappingURL=Meta.d.ts.map