import * as fhir from '../fhirJson.js';
/**
 * A reference from one resource to another.
 */
export interface Reference extends fhir.FhirElement {
    /**
     * A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.
     */
    reference?: string | undefined;
    /**
     * Extended properties for primitive element: Reference.reference
     */
    _reference?: fhir.FhirElement;
    /**
     * Plain text narrative that identifies the resource in addition to the resource reference.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: Reference.display
     */
    _display?: fhir.FhirElement;
}
//# sourceMappingURL=Reference.d.ts.map