import * as fhir from '../fhirJson.js';
/**
 * Specifies contact information for a person or organization.
 */
export interface ContactDetail extends fhir.FhirElement {
    /**
     * If there is no named individual, the telecom information is for the organization as a whole.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ContactDetail.name
     */
    _name?: fhir.FhirElement;
    /**
     * The contact details for the individual (if a name was provided) or the organization.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
}
//# sourceMappingURL=ContactDetail.d.ts.map