import * as fhir from '../fhirJson.js';
/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
export interface Contributor extends fhir.FhirElement {
    /**
     * The type of contributor.
     */
    type: 'author' | 'editor' | 'endorser' | 'reviewer' | null;
    /**
     * Extended properties for primitive element: Contributor.type
     */
    _type?: fhir.FhirElement;
    /**
     * The name of the individual or organization responsible for the contribution.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: Contributor.name
     */
    _name?: fhir.FhirElement;
    /**
     * Contact details to assist a user in finding and communicating with the contributor.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
}
//# sourceMappingURL=Contributor.d.ts.map