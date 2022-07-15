import * as fhir from '../fhirJson.js';
/**
 * A reference to a resource (by instance), or instead, a reference to a concept defined in a terminology or ontology (by class).
 */
export interface CodeableReference extends fhir.FhirElement {
    /**
     * A reference to a concept - e.g. the information is identified by its general class to the degree of precision found in the terminology.
     */
    concept?: fhir.CodeableConcept | undefined;
    /**
     * A reference to a resource the provides exact details about the information being referenced.
     */
    reference?: fhir.Reference | undefined;
}
//# sourceMappingURL=CodeableReference.d.ts.map