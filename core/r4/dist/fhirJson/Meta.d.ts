import * as fhir from '../fhirJson.js';
/**
 * The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface Meta extends fhir.FhirElement {
    /**
     * The server assigns this value, and ignores what the client specifies, except in the case that the server is imposing version integrity on updates/deletes.
     */
    versionId?: string | undefined;
    /**
     * Extended properties for primitive element: Meta.versionId
     */
    _versionId?: fhir.FhirElement;
    /**
     * This value is always populated except when the resource is first being created. The server / resource manager sets this value; what a client provides is irrelevant. This is equivalent to the HTTP Last-Modified and SHOULD have the same value on a [read](http.html#read) interaction.
     */
    lastUpdated?: string | undefined;
    /**
     * Extended properties for primitive element: Meta.lastUpdated
     */
    _lastUpdated?: fhir.FhirElement;
    /**
     * In the provenance resource, this corresponds to Provenance.entity.what[x]. The exact use of the source (and the implied Provenance.entity.role) is left to implementer discretion. Only one nominated source is allowed; for additional provenance details, a full Provenance resource should be used.
     * This element can be used to indicate where the current master source of a resource that has a canonical URL if the resource is no longer hosted at the canonical URL.
     */
    source?: string | undefined;
    /**
     * Extended properties for primitive element: Meta.source
     */
    _source?: fhir.FhirElement;
    /**
     * It is up to the server and/or other infrastructure of policy to determine whether/how these claims are verified and/or updated over time.  The list of profile URLs is a set.
     */
    profile?: string[] | undefined;
    /**
     * Extended properties for primitive element: Meta.profile
     */
    _profile?: (fhir.FhirElement | null)[];
    /**
     * The security labels can be updated without changing the stated version of the resource. The list of security labels is a set. Uniqueness is based the system/code, and version and display are ignored.
     */
    security?: fhir.Coding[] | undefined;
    /**
     * The tags can be updated without changing the stated version of the resource. The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.
     */
    tag?: fhir.Coding[] | undefined;
}
//# sourceMappingURL=Meta.d.ts.map